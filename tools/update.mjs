// update.mjs — read-only drift probe against the live sandscape.app origin.
// Never rewrites the capture. usage: node tools/update.mjs [--json]
//
// Sandscape is a Vercel SPA: the /play route (?g=<short_code> is client-side
// state) is a rewrite onto the built spa.html shell — the entry document the
// mirror serves as index.html at the repo root. The origin is flappy about it:
// /index.html and / are answered by an intermittently prerendered home variant
// (~59 KB, root div carries data-prerendered-home="true") while /play answers
// the canonical 8,807 B SPA shell (root div carries <!--app-html-->), which is
// what the browser session recorded and what the capture holds. The probe
// therefore fetches /play?g=3UpDloEh for the entry and compares it to the
// captured shell NORMALIZED-ish: a prerendered variant response is reported as
// an origin variant note, never as drift; a changed shell is real drift.
// Known noise: local-only records (_mirror-report.json, .upstream/*) are not
// part of the manifest and are never probed.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://sandscape.app";
const ENTRY = "index.html";              // disk path of the entry document
const ENTRY_URL = ORIGIN + "/play?g=3UpDloEh"; // the route the capture pinned
const DISK_PREFIX = "";                  // capture sits at the repo root
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0" };

const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
async function getBuf(url) {
  const r = await fetch(url, { headers: UA });
  return { status: r.status, buf: r.ok ? Buffer.from(await r.arrayBuffer()) : null };
}
const servedOf = (rel) => (rel.startsWith(DISK_PREFIX) ? rel.slice(DISK_PREFIX.length) : rel);
const normalize = (s) => s.replace(/\r\n/g, "\n").trimEnd();

const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
const rows = [];
const notes = [];

// entry document: the pinned /play view (rewrite target), retry on the
// prerendered-origin flap — any shell response counts, a changed shell drifts
const capEntry = path.join(proj, ENTRY);
if (!fs.existsSync(capEntry)) {
  console.error(`capture entry missing on disk: ${ENTRY}`);
  process.exit(2);
}
let entryBuf = null;
let entryVariant = null;
for (let attempt = 1; attempt <= 5; attempt++) {
  const r = await getBuf(ENTRY_URL);
  if (!r.buf) {
    console.error(`live entry ${ENTRY_URL} -> HTTP ${r.status}`);
    process.exit(2);
  }
  const text = r.buf.toString("utf8");
  if (text.includes("data-prerendered") && r.buf.length !== manifest.files[ENTRY]?.bytes) {
    entryVariant = `HTTP ${r.status}, ${r.buf.length} B prerendered-home variant`;
    await new Promise((s) => setTimeout(s, 500));
    continue;
  }
  entryBuf = r.buf;
  break;
}
if (entryBuf && sha(entryBuf) !== manifest.files[ENTRY].sha256) {
  if (normalize(entryBuf.toString("utf8")) !== normalize(fs.readFileSync(capEntry, "utf8")))
    rows.push({ file: ENTRY, state: "changed", mirror: manifest.files[ENTRY].sha256.slice(0, 12), live: sha(entryBuf).slice(0, 12) });
}
if (entryVariant && !entryBuf)
  notes.push(`entry: only the ${entryVariant} served after 5 attempts — variant flap, not compared`);

// every other captured file, probed directly at its served path
for (const rel of Object.keys(manifest.files).sort()) {
  if (rel === ENTRY || rel.endsWith("_mirror-report.json")) continue;
  const served = servedOf(rel);
  if (served.startsWith("cdn-cgi/") || served.startsWith(".upstream/")) continue;
  const r = await getBuf(ORIGIN + "/" + served);
  if (!r.buf) {
    rows.push({ file: rel, state: "live-missing" });
    continue;
  }
  if (manifest.files[rel].dynamic) continue;
  if (manifest.files[rel].sha256 !== sha(r.buf))
    rows.push({ file: rel, state: "changed", mirror: manifest.files[rel].sha256.slice(0, 12), live: sha(r.buf).slice(0, 12) });
}

const changed = rows.filter((r) => r.state === "changed").length;
const missing = rows.filter((r) => r.state === "live-missing").length;
if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ origin: ORIGIN, checked: Object.keys(manifest.files).length, changed, missing, rows, notes }, null, 2));
} else {
  for (const n of notes) console.log(`note: ${n}`);
  if (!rows.length) {
    console.log(`up to date: ${Object.keys(manifest.files).length} captured files identical upstream`);
  } else {
    console.log(`DRIFT: ${changed} changed, ${missing} live-missing (of ${Object.keys(manifest.files).length} captured)`);
    for (const r of rows.slice(0, 40)) console.log(`  ${r.state.padEnd(14)} ${r.file}`);
    process.exit(1);
  }
}
