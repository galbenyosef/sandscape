// capture.mjs — capture the Sandscape SPA (https://sandscape.app) to the repo
// root, byte-exact, closure to fixpoint. PLAN §4 discipline: the SPA is a
// Vite/rolldown build whose route chunks are loaded at RUNTIME (dynamic
// import() from the route table in assets/index-*.js), so the literal entry
// scan alone undercounts. Seeds:
//   1. the entry document, served for the /play route (Vercel SPA rewrite,
//      Content-Disposition filename="spa.html") with the ?g=3UpDloEh query the
//      task pins — saved as index.html at the repo root (the serve-probe /
//      DISK_PREFIX="" layout);
//   2. every same-origin request recorded in the opencli browser network log
//      while the live /play?g=3UpDloEh view loaded and the game page rendered
//      (recorded verbatim in .upstream/runtime-network.json);
//   3. fixpoint scan of every captured file — HTML src/href, JS import
//      specifiers (static, dynamic, non-interpolated template), `new URL(…)`
//      worker/asset URLs, __vite__mapDeps chunk tables and asset-path string
//      literals, CSS url() tables, the web manifest.
// External hosts (fonts.googleapis.com/gstatic.com, rfc Supabase, the
// sandscape-prod.fly.dev game-content backend, gamemedia.sandscape.app, the
// games.sandscape.app asset CDN the embedded game uses) are NEVER captured —
// a CDN/external dependency stays external (documented gap, recorded in
// _mirror-report.json). usage: node tools/capture.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://sandscape.app";
const ENTRY_FETCH = ORIGIN + "/play?g=3UpDloEh"; // the pinned view
const ENTRY_DISK = "index.html";                 // SPA rewrite target at the root
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0" };
const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");

// ── runtime network-log seeds (recorded from the live browser session) ────
const netlogPath = path.join(proj, ".upstream", "runtime-network.json");
const runtimeSeeds = [];
if (fs.existsSync(netlogPath)) {
  const log = JSON.parse(fs.readFileSync(netlogPath, "utf8"));
  for (const e of log.entries || []) {
    if (e.method !== "GET") continue;
    const u = new URL(e.url);
    if (u.origin !== ORIGIN) continue;
    if (u.pathname.startsWith("/_vercel/")) continue; // analytics beacon, not content
    runtimeSeeds.push(u.pathname + u.search);
  }
}

const assets = new Map();   // served path (no query) -> { bytes, sha256, buf }
const saw = new Set();      // served paths already queued
const fetched404 = [];      // recorded probes that 404 upstream
const queue = [];

function enqueue(served) {
  const clean = served.split("?")[0].split("#")[0];
  if (!clean || clean.startsWith("http")) return;
  const p = clean.startsWith("/") ? clean : "/" + clean;
  // "/" is the same SPA document the /play route serves (one index.html on
  // disk); the origin answers it with the intermittently prerendered home
  // variant, so it is an alias of the captured entry — never fetched again.
  if (p === "/" || p === "/play") {
    if (!saw.has("/play")) {
      saw.add("/play");
      queue.push("/play");
    }
    return;
  }
  if (saw.has(p)) return;
  saw.add(p);
  queue.push(p);
}

// entry document (the pinned /play?g= view; the query is client-side state)
enqueue("/play");
// every same-origin request the live browser session recorded
for (const seed of runtimeSeeds) enqueue(seed);

async function fetchPath(p) {
  const url = ORIGIN + p + (p === "/play" ? "?g=3UpDloEh" : "");
  for (let attempt = 1; attempt <= 5; attempt++) {
    const r = await fetch(url, { headers: UA, redirect: "follow" });
    if (r.status !== 200) {
      fetched404.push({ status: r.status, path: p, reason: "non-200" });
      return null;
    }
    const buf = Buffer.from(await r.arrayBuffer());
    // Vercel SPA rewrite: unknown paths answer 200 with the SPA document
    // (filename="spa.html"). A non-HTML path that comes back text/html is a
    // rewrite fallback — i.e. a missing upstream file — never a captured one.
    const ct = (r.headers.get("content-type") || "").split(";")[0].trim();
    if (/\.[a-z0-9]+$/i.test(p) && !/\.html?$/i.test(p) && /text\/html/i.test(ct)) {
      fetched404.push({ status: 200, path: p, reason: "SPA rewrite fallback (text/html for a non-HTML path)" });
      return null;
    }
    // The origin intermittently serves a prerendered SSR variant of the entry
    // (root div carries data-prerendered-home="true", ~59 KB) instead of the
    // canonical 8,807 B SPA shell (root div carries <!--app-html-->). The
    // browser session recorded the shell, so the capture prefers it; retry on
    // the apparent edge-cache flap, and accept the shell only.
    if (p === "/play" && buf.toString("utf8").includes("data-prerendered")) {
      console.log(`capture: /play attempt ${attempt}: prerendered variant served — retrying for the SPA shell`);
      await new Promise((s) => setTimeout(s, 600));
      continue;
    }
    return buf;
  }
  console.log("capture: /play still prerendered after 5 attempts — captured as served");
  const r = await fetch(url, { headers: UA, redirect: "follow" });
  return Buffer.from(await r.arrayBuffer());
}

// ── reference extraction (Vite/rolldown-era closure) ─────────────────────
const EXT = /\.(js|mjs|css|html|json|webmanifest|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|wasm|mp3|ogg|wav|glb|gltf|bin|txt|xml|mp4|webm)$/i;
function refsOf(rel, buf) {
  const t = buf.toString("utf8");
  const out = new Set();
  const push = (raw) => {
    if (!raw) return;
    let s = raw.trim();
    if (!s || s.startsWith("data:") || s.startsWith("blob:") || s.startsWith("#")) return;
    if (/^(https?:)?\/\//.test(s) || s.startsWith("mailto:") || s.startsWith("tel:")) {
      // absolute URL — keep only same-origin ones (external stays external)
      if (s.startsWith(ORIGIN)) out.add(s.slice(ORIGIN.length));
      return;
    }
    if (!EXT.test(s.split("?")[0])) return; // only real file references, no route strings
    out.add(s);
  };
  if (/\.(js|mjs)$/i.test(rel)) {
    for (const m of t.matchAll(/\bimport\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g)) push(m[1]);
    for (const m of t.matchAll(/\bimport\s+(?:[^;('"]*?\bfrom\s*)?["']([^"']+)["']/g)) push(m[1]);
    for (const m of t.matchAll(/\bimport\s*\(\s*`([^`$]*)`\s*\)/g)) push(m[1]);
    for (const m of t.matchAll(/\bnew\s+URL\s*\(\s*["'`]([^"'`]+)["'`]/g)) push(m[1]);
    for (const m of t.matchAll(/["'`](\/?assets\/[\w@./-]+\.(?:js|css|png|jpe?g|webp|svg|ico|woff2?|ttf|otf|wasm|mp3|ogg|wav|glb|gltf|bin|json))["'`]/g))
      // Vite __vite__mapDeps tables store base-relative "assets/…" paths that
      // resolve against the site root, not the chunk's own directory
      out.add("/" + m[1].replace(/^\//, ""));
    for (const m of t.matchAll(/["'`](https:\/\/sandscape\.app\/[\w@./?=&%-]+)["'`]/g)) push(m[1].slice(ORIGIN.length));
  } else if (/\.html$/i.test(rel)) {
    for (const m of t.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+)["']/gi)) push(m[1]);
    for (const m of t.matchAll(/\b(?:content|srcset)\s*=\s*["']([^"']+)["']/gi)) push(m[1]);
    for (const m of t.matchAll(/url\((?:"|&quot;|')?([^)"'&]+)/g)) push(m[1]);
  } else if (/\.css$/i.test(rel)) {
    for (const m of t.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) push(m[1]);
    for (const m of t.matchAll(/@import\s+(?:url\()?["']([^"']+)["']/g)) push(m[1]);
  } else if (/\.(json|webmanifest)$/i.test(rel)) {
    for (const m of t.matchAll(/"(?:src|start_url|url|href|icon)"\s*:\s*"([^"]+)"/g)) push(m[1]);
  }
  return [...out];
}

function resolveRef(fromRel, ref) {
  if (ref.startsWith(ORIGIN)) ref = ref.slice(ORIGIN.length);
  if (ref.startsWith("/")) return ref;
  const base = path.posix.dirname("/" + fromRel);
  return path.posix.normalize(path.posix.join(base, ref));
}

// ── main loop ────────────────────────────────────────────────────────────
let round = 0;
while (queue.length) {
  round++;
  const batch = queue.splice(0);
  let added = 0;
  for (const p of batch) {
    const buf = await fetchPath(p);
    if (!buf) continue;
    const diskRel = p === "/play" || p === "/" ? ENTRY_DISK : p.slice(1);
    fs.mkdirSync(path.dirname(path.join(proj, diskRel)), { recursive: true });
    fs.writeFileSync(path.join(proj, diskRel), buf);
    assets.set(diskRel, { bytes: buf.length, sha256: sha256(buf), buf });
    added++;
    console.log(`capture: ${p} -> ${diskRel} (${buf.length} B)`);
    for (const ref of refsOf(diskRel, buf)) enqueue(resolveRef(diskRel, ref));
  }
  console.log(`round ${round}: ${batch.length} fetched, ${added} saved, ${queue.length} queued`);
  if (!added && !queue.length) break;
}

// ── mancap selection + manifest (derived layers never enter the sums) ────
const skip = (rel) => /^(readable|src|legacy)\//.test(rel) || rel === "split-spec.json" || rel.startsWith(".");
const files = {};
for (const [rel, a] of [...assets.entries()].sort()) {
  if (skip(rel)) continue;
  files[rel] = { bytes: a.bytes, sha256: a.sha256 };
}
const manifest = {
  generated: new Date().toISOString(),
  origin: ORIGIN + "/play?g=3UpDloEh",
  files,
};
fs.mkdirSync(path.join(proj, ".upstream"), { recursive: true });
fs.writeFileSync(path.join(proj, ".upstream", "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");

const total = Object.values(files).reduce((n, f) => n + f.bytes, 0);
console.log(`\ncapture: ${Object.keys(files).length} files, ${total} bytes`);
if (fetched404.length) {
  console.log(`unreachable (${fetched404.length}):`);
  for (const u of fetched404) console.log(`  ${u.status} ${u.path}`);
  fs.writeFileSync(path.join(proj, ".upstream", "unreachable.json"), JSON.stringify(fetched404, null, 2) + "\n");
}
