// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// from the sandscape capture (PLAN §3/§5). Sandscape
// (https://sandscape.app/play?g=3UpDloEh) is capture-class: a Vite/rolldown SPA
// served under the /play route where the ?g=<short_code> query selects the
// player's game; the mirror holds the SPA shell and its full runtime chunk
// graph (the game content itself lives on the external fly.dev/games.sandscape.app
// backend — see README/_mirror-report.json). §0.4 fork-over-mirror was checked
// on 2026-10-13 — no public upstream source repo exists for the app (a GitHub
// search finds only this mirror), so the mirror stands. The capture is
// untouched; every source file is re-hashed against .upstream/manifest.json
// before it is rendered, so a drifted capture fails loudly instead of being
// silently re-derived.
//
// Pipeline:
//   each capture assets/*.js -> pinned prettier 3.9.6 (module API — the CLI
//                        respects .gitignore and can silently echo its input),
//                        single pass, verified idempotent -> readable/<name>.pretty.js
//                        (capture-root-relative name, nested dirs flattened with __).
//   the capture *.css  -> readable/<name>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   vendor bundles     -> readable/ + wholeFile section (vendor rule): React
//                        (react-dom/jsx-runtime), three.js (three.module +
//                        three-stdlib), the @supabase client + app auth
//                        facade, framer-motion, the WebCodecs media-codec
//                        bundle and the scene-editor bundle (Monaco-class
//                        editor + three.js + fflate, vendor-dominated) are
//                        indexed whole, never sliced. Build machinery
//                        (rolldown runtime, Vite preload helper) is wholeFile.
//   app chunks         -> statement-aligned slices src/<name>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module
//                        --check -` and round-trips byte-exact to its
//                        readable line range.
//   entry document     -> inline <script>/<style> scan (byte ranges + sha256):
//                        index.html carries the theme bootstrap <script>, the
//                        pre-mount <style> and one application/ld+json data
//                        block -> two readable twins + one notRendered record,
//                        byte ranges in readable/index-inline-map.json.
//   non-code payloads  -> hashed notRendered records (bytes + sha256, no
//                        pretty pass): images/icons/OG image, the web manifest.
//
// Non-standalone parts are indexed but never sliced (skipped sections): every
// app chunk's final `export {…}` table (the bindings live in the earlier
// slices).
//
// Identifiers in src/ are the bundle's own minified names — the rename
// campaign (PLAN §5) is recorded as an open task in README.md. usage:
//   node tools/derive.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const TODAY = "2026-10-13";
const ROOT = ""; // capture root == repo root (the SPA is served at the root)

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;

// capture-relative name -> readable twin name (dirs flattened with __)
const tagOf = (capRel) => {
  const rel = capRel.startsWith(ROOT) ? capRel.slice(ROOT.length) : capRel;
  return rel.replace(/\.(js|css)$/i, "").split("/").join("__");
};
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "node_modules", "prettier", "index.mjs"),
    "D:/repos/mirrors/metropolygonia/node_modules/prettier/index.mjs",
  ].filter(Boolean);
  for (const c of candidates) {
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      const mod = (await import(pathToFileURL(c).href)).default;
      if (mod.version === PINNED) return { mod, at: c };
    } catch {
      /* try next */
    }
  }
  throw new Error(`pinned prettier ${PINNED} not found (set PRETTIER_MJS to its index.mjs)`);
}

// format-to-layout-fixed-point: prettier 3.9.6 re-flows this build's very long
// minified lines twice before the layout settles (measured: every JS/CSS file
// here reaches a fixed point at pass 2). We iterate until format(out) === out
// and record the pass count, so audit's re-render is byte-exact by construction.
async function formatFix(prettier, text, parser) {
  let prev = text;
  let out = await prettier.format(text, { parser });
  let passes = 1;
  while (out !== prev && passes < 10) {
    prev = out;
    out = await prettier.format(out, { parser });
    passes++;
  }
  const again = await prettier.format(out, { parser });
  if (again !== out) throw new Error(`prettier ${parser} does not reach a fixed point on this input`);
  return { text: out, passes };
}

// ── parse check: the exact standalone gate (ESM stdin) ──────────────────
function parses(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, why: (r.stderr || "").trim().split("\n").slice(-3).join(" | ") };
}

// ── markers for titles (top tokens, lowercase; fleet convention) ────────
const STOP = new Set(
  ("function return typeof undefined object string number boolean prototype length value default " +
    "exports import this that with from then else case break continue delete instanceof constructor " +
    "arguments void null true false call apply name type text target window document globalthis self " +
    "require module async await yield static class const let var new for while switch throw try catch " +
    "finally extends super using debugger of in do if has own hasown get set")
    .split(" ")
    .filter(Boolean),
);
function markers(text, n = 2) {
  // URLs/identifiers living inside string literals (import paths, asset names)
  // are not code tokens — strip quoted strings before counting
  const code = text.replace(/`[^`]*`|"[^"\n]*"|'[^'\n]*'/g, " ");
  const counts = new Map();
  for (const m of code.matchAll(/[A-Za-z][A-Za-z0-9_]{2,}/g)) {
    const w = m[0].toLowerCase();
    if (STOP.has(w)) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
}
const markerText = (ms) => ms.map(([w, c]) => `${w}(${c})`).join(", ");

// ── windowize: cut only at statement starts; ≤350 lines, a single ───────
// ── oversized declaration is a window of its own ────────────────────────
function windowize(stmts) {
  const out = [];
  let cur = null;
  for (const s of stmts) {
    if (!cur) {
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
      continue;
    }
    const projected = s.endLine - cur.startLine + 1;
    if (projected > MAX_WINDOW) {
      out.push(cur);
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
    } else {
      cur.last = s;
      cur.count++;
      cur.endLine = s.endLine;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ── inline block scan (byte-exact, over the raw entry buffer) ───────────
function scanBlocks(buf) {
  const blocks = [];
  for (const [open, close, kind] of [
    ["<script", "</script", "script"],
    ["<style", "</style", "style"],
  ]) {
    let p = 0;
    let n = 0;
    while (true) {
      const i = buf.indexOf(open, p);
      if (i < 0) break;
      const after = buf[i + open.length];
      const boundary =
        after === 0x3e || after === 0x2f || after === 0x20 || after === 0x09 || after === 0x0a || after === 0x0d;
      if (!boundary) {
        p = i + open.length;
        continue;
      }
      const tagEnd = buf.indexOf(">", i);
      if (tagEnd < 0) break;
      const j = buf.indexOf(close, tagEnd + 1);
      if (j < 0) throw new Error(`unterminated <${kind}> opened at byte ${i}`);
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (external) {
        blocks.push({ kind, external: true, tag, openStart: i, contentStart: tagEnd + 1, contentEnd: j });
      } else {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          external: false,
          block: n,
          tag,
          openStart: i,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
          text: content.toString("utf8"),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.openStart - b.openStart);
}

// ── curated content-anchored classification (guards fail loudly) ────────
const WHOLE_FILE = {
  assets__rolldown_runtime_placeholder: null, // (kept for shape parity; unused)
};
// note: object keys below are the exact flattened tags; guards assert shape
const VENDOR = [
  {
    tag: "assets__rolldown-runtime-CNC7AqOf",
    title: "assets__rolldown-runtime-CNC7AqOf — rolldown runtime (build machinery, whole-file, never sliced)",
    desc:
      "the rolldown/Vite build's module-interop runtime (`__esModule`, `Object.create`/`defineProperty` interop helpers, the `s`/`u`/`d` export shims) that every chunk imports — build machinery, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("__esModule") && t.includes("Object.defineProperty"),
    what: "rolldown runtime (build machinery)",
  },
  {
    tag: "assets__preload-helper-Czpn1I53",
    title: "assets__preload-helper-Czpn1I53 — Vite preload helper (build machinery, whole-file, never sliced)",
    desc:
      "the Vite-generated preload helper (`__vitePreload` — link[rel=modulepreload] warm-up with dependency lists and the cross-origin fetch option) that every dynamic route import flows through — build machinery, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("modulepreload") && /__vitePreload|preload/.test(t),
    what: "Vite preload helper (build machinery)",
  },
  {
    tag: "assets__jsx-runtime-BtyjnKZj",
    title: "assets__jsx-runtime-BtyjnKZj — React jsx-runtime (vendor, whole-file, never sliced)",
    desc:
      "the React 19 jsx-runtime (jsx/jsxs/Fragment with key validation and dev/prod dispatch) the rolldown build externalised into its own chunk — vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => /jsx/i.test(t) && /react/i.test(t),
    what: "React jsx-runtime",
  },
  {
    tag: "assets__react-dom-CWn-H0Rd",
    title: "assets__react-dom-CWn-H0Rd — React DOM (vendor, whole-file, never sliced)",
    desc:
      "the React DOM runtime (createRoot/hydrateRoot, the fiber reconciler and DOM event system) the app mounts through — vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("react-dom") && /createRoot|hydrateRoot/.test(t),
    what: "React DOM",
  },
  {
    tag: "assets__three.module-CvxFRqeD",
    title: "assets__three.module-CvxFRqeD — three.js (vendor, whole-file, never sliced)",
    desc:
      "the bundled three.js engine (three.module — math, color management, textures, geometries, materials, objects, renderers, `window.__THREE__` revision registration) that the scene editor and 3D previews render through — vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("WebGLRenderer") && t.includes("__THREE__"),
    what: "three.js",
  },
  {
    tag: "assets__three-stdlib-BJSGSXlY",
    title: "assets__three-stdlib-BJSGSXlY — three-stdlib addons (vendor, whole-file, never sliced)",
    desc:
      "the bundled three-stdlib community addons (loaders — GLTF/OBJ/STL-class loaders and their managers, controls, post-processing helpers) that the editor's asset pipeline imports — vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => /Loader/.test(t) && /GLTF/.test(t),
    what: "three-stdlib addons",
  },
  {
    tag: "assets__SceneEditor-BPEsa1Sn",
    title: "assets__SceneEditor-BPEsa1Sn — scene editor bundle (vendor-dominated, whole-file, never sliced)",
    desc:
      "the ~5.4 MB scene-editor bundle: a Monaco-class editor runtime merged by the minifier with three.js (`renderer.domElement`), a fflate/zlib-class compression codec ('invalid zip data', 'invalid gzip data') and the editor's own modules into one declaration graph. Vendor-dominated (the same classification vibesail recorded for its Leaflet+MapLibre world chunk) — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("renderer.domElement") && t.includes("invalid zip data") && /material/i.test(t),
    what: "scene editor bundle (editor runtime + three.js + fflate)",
  },
  {
    tag: "assets__proxy-gbdormya",
    title: "assets__proxy-gbdormya — framer-motion (vendor, whole-file, never sliced)",
    desc:
      "the bundled framer-motion animation library (motion values, gestures, layout projection, `framer-motion` banners) — vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("framer-motion"),
    what: "framer-motion",
  },
  {
    tag: "assets__AuthService-CQeU_0bQ",
    title: "assets__AuthService-CQeU_0bQ — @supabase/supabase-js + app auth facade (vendor, whole-file, never sliced)",
    desc:
      "the bundled @supabase/supabase-js client (SupabaseClient, auth/realtime/storage SDK, ~68 'Supabase' banners) merged with the app's AuthService facade (the LIVE auth backend host stays external — see README). Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => /Supabase/.test(t) && /supabase/i.test(t),
    what: "@supabase/supabase-js + app auth facade",
  },
  {
    tag: "assets__src-C4EM-vcD",
    title: "assets__src-C4EM-vcD — WebCodecs media codec library (vendor, whole-file, never sliced)",
    desc:
      "the bundled WebCodecs media-codec library (mp4/vp9/opus demux+mux, decode/encode pipelines, canvas frame plumbing, 'Codecs Parameter String') that the asset pipeline uses for video/audio — vendor, not app code. Vendor rule — indexed whole-file in readable/, never sliced.",
    guard: (t) => t.includes("Codecs Parameter String") && /vp9/i.test(t) && /opus/i.test(t),
    what: "WebCodecs media codec library",
  },
];
const WHOLE_BY_TAG = new Map(VENDOR.map((v) => [v.tag, v]));

async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort();
  const captureBytes = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) throw new Error(`capture file missing: ${rel}`);
    const buf = fs.readFileSync(abs);
    if (sha256(buf) !== manifest.files[rel].sha256)
      throw new Error(`${rel} on disk does not match .upstream/manifest.json — re-verify the capture first`);
    return buf;
  };

  const readableDir = path.join(proj, "readable");
  const srcDir = path.join(proj, "src");
  fs.mkdirSync(readableDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });
  const written = { readable: new Set(), src: new Set() };

  const sources = [];
  const sections = [];
  const notRendered = [];
  const inlineFiles = [];
  const inlineMapBlocks = [];
  let slicedTotal = 0;
  let skippedTotal = 0;

  const jsRelsAll = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));
  // entry chunk first (the game's entry point), then the route/shared chunks,
  // then vendor bundles — a reading order, not a build order
  const rank = (rel) => (/\/index-/.test(rel) ? 0 : WHOLE_BY_TAG.has(tagOf(rel)) ? 2 : 1);
  const jsRels = jsRelsAll.slice().sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

  // ── 1) JS: vendor -> wholeFile; app -> statement-aligned slices ─────────
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "babel");
    if (pretty === text)
      throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    const cls = WHOLE_BY_TAG.get(tag);

    if (cls) {
      const region = pretty;
      if (cls.guard && !cls.guard(region))
        throw new Error(`${rel}: whole-file guard failed — readable changed shape`);
      sections.push({
        file: `${tag}-vendor.js`,
        wholeFile: true,
        title: cls.title,
        desc: `Lines 1-${lines.length} of ${sourceFile}: ${cls.desc}`,
        note: "whole-file (vendor rule): indexed in readable/, never sliced",
        startLine: 1,
        endLine: lines.length,
        sourceFile,
      });
      sources.push({
        sourceFile,
        capture: rel,
        captureKind: "file",
        captureSha256: manifest.files[rel].sha256,
        captureBytes: buf.length,
        prettyLines: lines.length,
        prettyBytes: Buffer.byteLength(pretty, "utf8"),
        tag,
        slices: 0,
        derived: "readable only (vendor bundle, wholeFile)",
        what: cls.what,
      });
      console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile vendor)`);
      continue;
    }

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(pretty, n.start),
      endLine: lineOf(pretty, n.end),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);

    const specials = [];
    const covered = new Array(stmts.length).fill(false);
    const claim = (a, b, block) => {
      if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad ${block.file} range ${a}-${b}`);
      for (let i = a; i <= b; i++) {
        if (covered[i]) throw new Error(`${rel}: ${block.file} overlaps another block at statement ${i}`);
        covered[i] = true;
      }
      specials.push({ ...block, A: stmts[a].startLine, B: stmts[b].endLine });
    };

    let exportSkip = null;
    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only.`,
      });
    }

    // runs of uncovered statements -> windows
    const runs = [];
    for (let i = 0; i < stmts.length; i++) {
      if (covered[i]) continue;
      const run = [stmts[i]];
      while (i + 1 < stmts.length && !covered[i + 1]) run.push(stmts[++i]);
      runs.push(run);
    }
    const slices = [];
    for (const run of runs) for (const w of windowize(run)) slices.push(w);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [...specials, ...slices.map((w) => ({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count }))];
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i === 0) blocks[i].A = 1;
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
    }

    let nn = 0;
    let perFileSkipped = 0;
    let perFileVendor = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const body = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const ms = markers(body);
        const topWord = ms.length ? ms[0][0] : /^\s*import\b/.test(body) ? "imports" : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const file = `${tag}-${num}.js`;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` + `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` + body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        fs.writeFileSync(path.join(srcDir, file), sliceText);
        written.src.add(file);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc: `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.`,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileVendor++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: `Lines ${b.A}-${b.B} of ${sourceFile}: ${b.body}`,
          note: "whole-file region (build machinery/vendor rule): indexed in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        perFileSkipped++;
        sections.push({
          file: b.file,
          skipped: true,
          title: b.title,
          desc: b.desc,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
          firstLine: lines[b.A - 1],
          lastLine: lines[b.B - 1],
        });
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileVendor ? ` + ${perFileVendor} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : ""),
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileVendor} wholeFile, ${perFileSkipped} skipped)`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${tag}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry document: inline <script>/<style> scan + twins ───────
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
      continue;
    }
    const entryTag = rel.replace(/\.html$/i, "").split("/").join("__");
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const parser = isImportmap ? "json" : b.kind === "style" ? "css" : "babel";
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (b.kind === "script" && DATA_TYPES.has(type)) {
        notRendered.push({
          capture: rel,
          kind: "inline-data",
          type,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          rendered: false,
          reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
        });
        continue;
      }
      const tag = `${entryTag}-inline-${b.block}`;
      const prettyFile = `${tag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`;
      const { text: pretty, passes: prettyPasses } = await formatFix(prettier, b.text, parser);
      if (pretty === b.text)
        throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
      fs.writeFileSync(path.join(readableDir, prettyFile), pretty);
      written.readable.add(prettyFile);
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      inlineMapBlocks.push({
        file: `readable/${prettyFile}`,
        source: rel,
        kind: b.kind,
        byteStart: b.contentStart,
        byteEnd: b.contentEnd,
        bytes: b.bytes,
        sha256: b.sha256,
        prettyFile: `readable/${prettyFile}`,
        prettyBytes: prettyBuf.length,
      });
      sections.push({
        file: `${tag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyFile}. Whole-file: the entry document's inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (entry inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyFile}`,
      });
      sources.push({
        sourceFile: `readable/${prettyFile}`,
        capture: rel,
        captureKind: `inline-${b.kind}`,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        tag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
      });
      console.log(`derive: ${rel}: inline ${b.kind} #${b.block} -> readable/${prettyFile} (${lines.length} lines)`);
    }
  }
  if (inlineMapBlocks.length) {
    fs.writeFileSync(
      path.join(readableDir, "index-inline-map.json"),
      JSON.stringify(
        {
          note:
            "byte ranges (into the captured entry document) + sha256 for every inline <script>/<style> content block, " +
            "with its readable twin; generated by tools/derive.mjs",
          blocks: inlineMapBlocks,
        },
        null,
        2,
      ) + "\n",
    );
    console.log(`derive: wrote readable/index-inline-map.json (${inlineMapBlocks.length} inline block(s))`);
  }

  // ── 3.5) non-code payloads: hashed notRendered records (no pretty pass) ─
  const KIND_OF = [
    [/\.(png|jpe?g|webp|gif|svg|avif|ico)$/i, "image"],
    [/\.(mp4|webm)$/i, "video"],
    [/\.(mp3|ogg|wav|m4a)$/i, "audio"],
    [/\.(woff2?|ttf|otf)$/i, "font"],
    [/\.(glb|gltf)$/i, "model"],
    [/\.(wasm|bin|ktx2|data)$/i, "binary"],
    [/\.(json|webmanifest|xml|txt|pdf)$/i, "data"],
  ];
  for (const rel of captured) {
    const kind = KIND_OF.find(([re]) => re.test(rel))?.[1];
    if (!kind) continue;
    const buf = captureBytes(rel);
    notRendered.push({
      capture: rel,
      kind,
      bytes: buf.length,
      sha256: manifest.files[rel].sha256,
      rendered: false,
      reason: `${kind} payload — binary capture stays byte-exact under .upstream/manifest.json; recorded here hashed, no pretty pass`,
    });
  }

  // ── 4) prune orphan derived files (capture untouched) ──────────────────
  let pruned = 0;
  for (const [dir, keep, exts] of [
    [readableDir, written.readable, /\.(pretty\.js|pretty\.css)$/],
    [srcDir, written.src, /\.js$/],
  ]) {
    for (const f of fs.readdirSync(dir)) {
      if (exts.test(f) && !keep.has(f)) {
        fs.rmSync(path.join(dir, f));
        pruned++;
        console.log(`derive: pruned orphan derived file ${path.join(path.basename(dir), f)}`);
      }
    }
  }

  // ── 5) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile\)$/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css"));
  const spec = {
    project: "sandscape",
    kind: "statement-aligned-slices",
    defaultFile: `src/${sections.find((s) => !s.wholeFile && !s.skipped).file}`,
    note:
      "Sandscape (https://sandscape.app/play?g=3UpDloEh) is capture-class: a Vite/rolldown SPA whose /play route " +
      "(?g=<short_code> is client-side state) resolves the player's game at runtime through the app's own API; the " +
      "mirror holds the SPA shell (index.html, the Vercel spa.html rewrite target), every route/shared chunk the " +
      "runtime loads (runtime network log + static scan to fixpoint) and the vendor bundles it imports. The game " +
      "content itself is user-generated content served by the external fly.dev/games.sandscape.app backend and is " +
      "NOT capturable under the fleet rules (external deps stay external; a documented gap — see README). §0.4 " +
      "fork-over-mirror was checked on 2026-10-13 — no public upstream source repo exists (a GitHub search finds " +
      "only this mirror), so the mirror stands. Derived pipeline: capture → pinned prettier 3.9.6 (module API, " +
      "default options, single pass verified idempotent — never the CLI: it respects .gitignore and can silently " +
      "echo its input) → readable/<name>.pretty.js|css per captured JS/CSS file (capture-root-relative name, " +
      "nested dirs flattened with __; every pretty provably NOT byte-identical to its capture source) → " +
      "statement-aligned slices src/<name>-NN.js of every APP chunk (top-level declaration boundaries only, " +
      "~250-350 line windows; oversized single declarations stay whole) with an exact 2-line provenance header. " +
      "Every slice parses standalone under `node --input-type=module --check -` and round-trips byte-exact to its " +
      "recorded readable line range. Vendor rule — wholeFile sections, never sliced: React (react-dom, " +
      "jsx-runtime), three.js (three.module, three-stdlib), the @supabase/supabase-js client merged with the app " +
      "auth facade (AuthService), framer-motion (proxy), the WebCodecs media-codec bundle (src-C4EM-vcD) and the " +
      "vendor-dominated ~5.4 MB scene-editor bundle (SceneEditor — Monaco-class editor runtime + three.js + " +
      "fflate, same classification vibesail recorded for its Leaflet+MapLibre world chunk). Machinery rule — the " +
      "rolldown runtime and the Vite preload helper are wholeFile. Stylesheet rule — assets/index-CCVDdtPC.css is " +
      "wholeFile. Non-standalone parts are skipped sections, indexed but never sliced: every app chunk's final " +
      "export {…} table (the bindings live in the earlier slices). Inline <script>/<style> scan: index.html " +
      "carries the theme bootstrap script, the pre-mount style block (two readable twins + " +
      "readable/index-inline-map.json byte ranges) and one application/ld+json data block (notRendered). " +
      "Non-code payloads (images/icons/OG image, the web manifest) are hashed notRendered records, never " +
      "prettified. Identifiers in src/ are the bundle's own minified names — the rename campaign (PLAN §5) is " +
      "recorded as an open task in README.md, not claimed here. Capture bytes are untouched by everything above; " +
      "re-cut with `node tools/derive.mjs` after any capture refresh. `node tools/audit.js` is the gate.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, single pass (re-format verified idempotent at derive time) — never the CLI: it respects .gitignore and can silently echo its input",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap blocks, if any)",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} app chunk(s) sliced, ${vendorJsS.length} vendor wholeFile, ` +
      `${sources.filter((s) => s.captureKind?.startsWith("inline-")).length} inline twin(s)) + ` +
      `${cssSources.length} CSS pretties; ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} app chunk(s); ` +
      `${sections.filter((s) => s.skipped).length} skipped section(s); ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s); ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(${inlineMapBlocks.length} inline content block(s), ${notRendered.filter((n) => n.kind === "inline-data").length} typed data block(s)).`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMapBlocks.length,
      notRendered: notRendered.filter((n) => n.kind === "inline-data").length,
      note:
        "index.html carries two inline content blocks — the theme bootstrap <script> (block 1) and the pre-mount " +
        "<style> (block 3) — each with a readable twin and a readable/index-inline-map.json entry; the " +
        "application/ld+json SoftwareApplication block (block 2) is a typed data block, recorded notRendered.",
    },
    sources,
    sections,
    notRendered,
  };
  fs.writeFileSync(path.join(proj, "split-spec.json"), JSON.stringify(spec, null, 2) + "\n");

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    const lines = readLines(path.join(proj, sourceFile));
    const sorted = [...list].sort((a, b) => a.startLine - b.startLine);
    if (sorted[0].startLine !== 1) {
      console.error(`TILING FAIL ${sourceFile}: starts at line ${sorted[0].startLine}`);
      bad++;
    }
    for (let i = 1; i < sorted.length; i++)
      if (sorted[i].startLine !== sorted[i - 1].endLine + 1) {
        console.error(`TILING FAIL ${sourceFile}: gap/overlap at ${sorted[i].file}`);
        bad++;
      }
    if (sorted[sorted.length - 1].endLine !== lines.length) {
      console.error(`TILING FAIL ${sourceFile}: does not reach EOF (${lines.length})`);
      bad++;
    }
  }
  let parsed = 0;
  let ranged = 0;
  let roundOK = 0;
  for (const s of sections) {
    if (s.wholeFile || s.skipped) continue;
    ranged++;
    const abs = path.join(srcDir, s.file);
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const expected = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL ${s.file}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile?.endsWith(".pretty.js")) continue;
    if (!parses(fs.readFileSync(path.join(proj, s.sourceFile), "utf8")).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${sections.filter((s) => s.wholeFile).length} wholeFile, ` +
      `${prettyParsed} pretty js parse clean, ${notRendered.length} notRendered, ${pruned} orphan(s) pruned — ` +
      `self-check ${bad ? bad + " FAILURE(S)" : "clean"}`,
  );
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
