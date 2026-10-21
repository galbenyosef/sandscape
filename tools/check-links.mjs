// check-links.mjs — does every scope of the derived layer export only names
// the layer actually declares?
//
// THE CLASS THIS GATE GUARDS
//   In an ES module, `export { x }` names a binding OF THAT MODULE. When x is
//   not declared there the module does not link: it is a hard SyntaxError
//   ("Export 'x' is not defined"), and the file cannot be imported at all.
//
//   The mirror's own gates do not see this class:
//     - check-exports.mjs compares a capture's export table with the layer's
//       PUBLIC names. It never asks whether the layer's own export statement
//       names a binding the layer declares.
//     - audit.js re-renders every pretty, re-hashes every capture and
//       re-verifies every skipped export-table section textually. A scope that
//       exports a name nothing declares still round-trips byte-exactly.
//
// THIS MIRROR (sandscape)
//   kind = statement-aligned-slices. The 524 files of src/assets/ are the
//   statement-aligned slices of the 102 captured app chunks. All the slices of
//   ONE chunk are cut from ONE module, so they share ONE scope.
//
//   Two things about this mirror's layer shape the gate:
//
//   1. THE EXPORT TABLE IS NOT IN THE LAYER. The derive does not slice a
//      chunk's final `export {…}` statement: it records it. Each chunk's last
//      section is a `skipped` section whose `file` (…-tail-export.js) is NOT
//      a file on disk and whose `text` holds the served chunk's own export
//      statement. A scope is therefore the chunk's slices PLUS the recorded
//      text of its skipped tail.
//
//   2. THE LAYER RENAMES ITS TOP-LEVEL BINDINGS (rename-map.json, the
//      reviewed list in tools/names.json). The recorded tail is the CAPTURE's
//      spelling (`export{i as n,a as r,n as t}`) while the slices declare the
//      layer's spelling (`var apiConfig = {…}`). The recorded text must
//      therefore be rewritten into the layer's spelling before the scope is
//      linked, using the mirror's OWN per-chunk map — `sources[].renameBindings`,
//      which records exactly the renamed top-level bindings a chunk's index-only
//      skipped sections still spell. The EXPORTED name is never touched (the
//      chunk's public surface is the capture's), and a renamed shorthand
//      becomes `TARGET as ORIGINAL`, exactly as the campaign's own engine
//      writes it. Without the rewrite the gate reports 5 scopes as broken
//      that are not — those are the 5 chunks that carry renamed bindings.
//
// WHAT IT CHECKS
//   For every scope of the layer that carries an export table:
//     1. the scope is reassembled from the LAYER's OWN bytes — every slice
//        contributes its payload and every range the layer does not carry (the
//        skipped export-table tail) contributes the mirror's own record of it —
//        and the reassembly is linked;
//     2. an export table that names a binding the scope does not declare is
//        reported. If the scope links, the binding is declared by a SIBLING
//        SLICE: the layer is cut from one scope, the pieces together are the
//        module, and the table is a FRAGMENT, not a defect. If the scope does
//        not link either, the binding exists NOWHERE and that is a real break,
//        which the gate names.
//
// WHY THE ENGINE IS THE JUDGE
//   The question that matters is the one the engine answers: does this text
//   link? So the gate asks the engine — once for the scope, once for the
//   export table — instead of asking a parser which names it thinks a file
//   declares.
//
//   Nothing is invented and nothing is re-derived: the reassembly is the
//   layer's own bytes plus the mirror's own recorded range.
//
// WHAT IT DOES NOT COVER
//   - The IMPORT side of the layer graph (a named import the target does not
//     export) is a different class with a different owner.
//   - A scope that does not link even after the reassembly, for a reason other
//     than a missing export, cannot be judged for this class; the gate says so
//     instead of guessing.
//
// Usage: node tools/check-links.mjs [--quiet] [--verbose]
// Exits 1 if a scope exports a binding the layer does not declare.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJ = path.resolve(HERE, "..");
const SRC = path.join(PROJ, "src");
const QUIET = process.argv.includes("--quiet");
const VERBOSE = process.argv.includes("--verbose");

const read = (p) => {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
};

/**
 * The engine's own verdict on a text: does it link as an ES module?
 * `--input-type=module --check -` is the strict-ESM path: the CJS path lets an
 * export table name a binding the module never declares through.
 */
function esmCheck(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
  });
  if (r.status === 0) return { ok: true, missing: null, error: null };
  const err = String(r.stderr || "") + String(r.stdout || "");
  const m = /Export '([^']+)' is not defined/.exec(err);
  const lines = err.trim().split("\n").filter((l) => l.trim());
  const said = lines.find((l) => /Error/.test(l)) || lines[lines.length - 1] || err.trim();
  return { ok: false, missing: m ? m[1] : null, error: said.trim() };
}

const ESCAPE_RE = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** The export tables of a text, as [start, end) spans. */
function exportTableSpans(text) {
  const spans = [];
  const re = /\bexport\s*\{/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const brace = text.indexOf("{", m.index);
    if (brace < 0) break;
    let depth = 1;
    let i = brace + 1;
    while (i < text.length && depth > 0) {
      if (text[i] === "{") depth++;
      else if (text[i] === "}") depth--;
      i++;
    }
    if (depth !== 0) break;
    spans.push([m.index, i]);
    re.lastIndex = i;
  }
  return spans;
}

/**
 * The names a file's export statement exports that the file itself does not
 * declare. The engine names one per check, so the check is repeated with the
 * offending specifier removed each time: what is left is the whole list.
 */
function undeclaredExports(text) {
  const out = [];
  let probe = text;
  for (let i = 0; i < 500; i++) {
    const v = esmCheck(probe);
    if (v.ok || !v.missing) break;
    if (out.includes(v.missing)) break;
    out.push(v.missing);
    const next = blankSpecifier(probe, v.missing);
    if (next === probe) break;
    probe = next;
  }
  return out;
}

/** Remove the export specifier whose SOURCE name is `name` (the probe only). */
function blankSpecifier(text, name) {
  return text.replace(/\bexport\s*\{([^}]*)\}/g, (whole, body) => {
    const kept = body.split(",").filter((part) => {
      const seg = part.trim();
      if (!seg) return false; // an empty element is a syntax error
      const m = /^([A-Za-z_$][\w$]*)\s+as\s+/.exec(seg);
      return (m ? m[1] : seg) !== name;
    });
    return whole.replace(body, kept.join(", "));
  });
}

/**
 * Erase every mention of `name` in a text, EXCEPT inside an export table:
 * the export table is the question being asked, so it must keep naming the
 * name. A scope whose declaration of the name has been erased then fails to
 * link, and that is how the declaring slice is found.
 */
function eraseName(text, name, probe) {
  const spans = exportTableSpans(text);
  const re = new RegExp(`(?<![\\w$])${ESCAPE_RE(name)}(?![\\w$])`, "g");
  let out = "";
  let at = 0;
  for (const [s, e] of spans) {
    out += text.slice(at, s).replace(re, probe);
    out += text.slice(s, e);
    at = e;
  }
  out += text.slice(at).replace(re, probe);
  return out;
}

/** The slice's payload: its text without the header comment lines. */
function payloadLines(text) {
  const raw = text.split("\n");
  if (raw.length && raw[raw.length - 1] === "") raw.pop(); // the final newline
  let h = 0;
  while (h < raw.length && /^\s*\/\//.test(raw[h])) h++;
  return raw.slice(h);
}

/** Every .js file under a directory. */
function walkJs(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkJs(p, out);
    else if (e.name.endsWith(".js")) out.push(p);
  }
  return out;
}

// ── the mirror's own record of the layer ───────────────────────────────────
const specPath = path.join(PROJ, "split-spec.json");
if (!fs.existsSync(specPath)) {
  console.log("check-links: no split-spec.json - this mirror has no derived layer to check");
  process.exit(0);
}
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

/**
 * The mirror's per-chunk rename map: the capture's spelling of a chunk's
 * top-level binding -> the layer's spelling of it. The mirror publishes it as
 * `sources[].renameBindings`, "the renamed top-level bindings its index-only
 * skipped sections still spell" — exactly the map this gate needs to read a
 * recorded tail in the layer's spelling.
 */
const renameBindings = new Map();
for (const s of spec.sources || []) {
  if (s && s.sourceFile && s.renameBindings && typeof s.renameBindings === "object") {
    renameBindings.set(s.sourceFile, s.renameBindings);
  }
}

/**
 * The layer file a section names, if it is on disk.
 *
 * THE MIRROR ROOT IS NOT A CANDIDATE. The mirror root holds the served
 * CAPTURES (`assets/index-BKDksszn.js` and friends) under the same paths the
 * spec uses, so a root lookup can mistake a capture for a layer file. Only
 * the layer root (src/) is searched.
 */
function layerFileOf(sec) {
  const rel = String(sec.file).replace(/\\/g, "/");
  const c = path.join(SRC, rel);
  try {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  } catch {
    /* not a layer file */
  }
  return null;
}

/**
 * Rewrite an export table into the LAYER's spelling: the local name of every
 * specifier is the name the layer gives that binding. The EXPORTED name is
 * never touched — the chunk's public surface is the capture's — and a
 * shorthand that was renamed becomes `TARGET as ORIGINAL`, exactly as the
 * campaign's own engine writes it.
 */
function rewriteTableToLayer(text, map) {
  if (!map) return text;
  return text.replace(/\bexport\s*\{([^}]*)\}/g, (whole, body) => {
    const kept = body.split(",").map((part) => {
      const seg = part.trim();
      if (!seg) return part;
      const m = /^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/.exec(seg);
      if (m) {
        const to = map[m[1]];
        return to && to !== m[1] ? `${to} as ${m[2]}` : seg;
      }
      const sh = /^([A-Za-z_$][\w$]*)$/.exec(seg);
      if (sh) {
        const to = map[sh[1]];
        return to && to !== sh[1] ? `${to} as ${sh[1]}` : seg;
      }
      return part;
    });
    return whole.replace(body, kept.join(", "));
  });
}

/**
 * The parts of a scope, in the order the record lists them: every slice
 * contributes its payload, and every range the layer does not carry (the
 * skipped export-table tail) contributes the mirror's own record of it.
 */
function scopeParts(sourceFile, sections) {
  const map = renameBindings.get(sourceFile) || null;
  const parts = [];
  for (const sec of sections) {
    const f = layerFileOf(sec);
    if (f) {
      parts.push({
        kind: "slice",
        file: String(sec.file).replace(/\\/g, "/"),
        text: payloadLines(read(f)).join("\n"),
      });
      continue;
    }
    // the layer does not carry this range: the mirror's own record of it (the
    // served chunk's export statement) is the bytes it contributes
    if (typeof sec.text === "string" && sec.text) {
      parts.push({
        kind: "recorded",
        file: String(sec.file).replace(/\\/g, "/"),
        text: rewriteTableToLayer(sec.text, map),
        raw: sec.text,
      });
      continue;
    }
    const src = sourceFileOf(sec.sourceFile);
    if (src && Number.isInteger(sec.startLine) && Number.isInteger(sec.endLine)) {
      const lines = read(src).split("\n");
      parts.push({
        kind: "original",
        file: String(sec.file).replace(/\\/g, "/"),
        text: lines.slice(sec.startLine - 1, sec.endLine).join("\n"),
      });
      continue;
    }
    parts.push({ kind: "missing", file: String(sec.file).replace(/\\/g, "/"), text: "" });
  }
  return parts;
}

/** The mirror's own readable copy of the original module, if it has one. */
function sourceFileOf(sourceFile) {
  if (!sourceFile) return null;
  const rel = String(sourceFile).replace(/\\/g, "/");
  const c = path.join(PROJ, rel);
  try {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  } catch {
    /* no readable copy */
  }
  return null;
}

const scopeText = (parts) => parts.map((p) => p.text).join("\n");

/** The index of the part that holds the character at `offset`. */
function partIndexAt(parts, offset) {
  let off = 0;
  for (let i = 0; i < parts.length; i++) {
    const end = off + parts[i].text.length;
    if (offset >= off && offset < end) return i;
    off = end + 1; // the joining newline
  }
  return -1;
}

/**
 * The part of the scope that DECLARES `name`, found by reading the scope's
 * own text: a declaration head, an import binding or a declarator names it.
 *
 * Returns the part's file, or null when the scope does not declare it.
 */
function declaringPartByScan(parts, name) {
  const text = scopeText(parts);
  const re = new RegExp(`(?<![\\w$])${ESCAPE_RE(name)}(?![\\w$])`, "g");
  const tables = exportTableSpans(text);
  let m;
  while ((m = re.exec(text)) !== null) {
    const at = m.index;
    if (tables.some(([s, e]) => at >= s && at < e)) continue; // a table names it
    const indexOf = partIndexAt(parts, at);
    if (indexOf < 0) continue;
    const before = text.slice(Math.max(0, at - 40), at);
    // a declaration head directly before the name (`const x`, `function x`)
    if (/(^|[^\w$])(var|let|const|function|class)\s*$/.test(before)) return parts[indexOf].file;
    // an import binding (`import { x as y }` binds y)
    if (/\bas\s*$/.test(before)) return parts[indexOf].file;
    // a declarator in a list (`var a = 1, b = 2`): the HEAD of the statement
    // is what binds it
    if (/(,|=)$/.test(before.replace(/\s+$/, ""))) return parts[indexOf].file;
  }
  return null;
}

/**
 * The part of the scope that DECLARES `name`, found by asking the engine:
 * the name is erased from a prefix of the parts at a time and the scope is
 * asked again. The part whose erasure breaks the scope is the one that
 * declared it.
 */
function declaringPartByEngine(parts, name) {
  const erasable = parts.filter((p) => p.kind !== "missing");
  if (erasable.length < 2) return null;
  const probe = "__probe_" + name.replace(/[^A-Za-z0-9_$]/g, "_");
  const withPrefix = (k) => {
    let n = -1;
    return parts
      .map((p) => {
        if (p.kind === "missing") return "";
        if (p.kind !== "slice") return p.text;
        n++;
        return n <= k ? eraseName(p.text, name, probe) : p.text;
      })
      .join("\n");
  };
  // erasing EVERY slice must break the scope (the name is declared nowhere
  // else); if it does not, the name is not in this scope at all.
  if (esmCheck(withPrefix(erasable.length - 1)).ok) return null;
  let lo = 0;
  let hi = erasable.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (esmCheck(withPrefix(mid)).ok) lo = mid + 1;
    else hi = mid;
  }
  return erasable[lo].file;
}

function declaringPart(parts, name) {
  return declaringPartByScan(parts, name) || declaringPartByEngine(parts, name);
}

// ── the layer ──────────────────────────────────────────────────────────────
const files = walkJs(SRC).sort();
if (!files.length) {
  console.log("check-links: no layer file under src/ - nothing to check");
  process.exit(0);
}

// the scopes: the slices of one captured chunk share one scope. A section the
// layer carries whole is its own module.
const groups = new Map();
const standalone = [];
for (const sec of spec.sections || []) {
  if (!sec || !sec.file) continue;
  const whole = sec.wholeFile === true || sec.kind === "module-factory" || sec.kind === "derived-esm";
  if (whole) {
    standalone.push(sec);
    continue;
  }
  if (!sec.sourceFile) continue;
  if (!groups.has(sec.sourceFile)) groups.set(sec.sourceFile, []);
  groups.get(sec.sourceFile).push(sec);
}
for (const list of groups.values()) list.sort((a, b) => a.startLine - b.startLine);

const scopes = [];
for (const [sourceFile, sections] of [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const parts = scopeParts(sourceFile, sections);
  // a scope the layer does not carry at all is not the layer's business
  if (!parts.some((p) => p.kind === "slice")) continue;
  scopes.push({ name: sourceFile, parts });
}
for (const sec of standalone) {
  const f = layerFileOf(sec);
  if (!f) continue;
  scopes.push({
    name: String(sec.file).replace(/\\/g, "/"),
    parts: [{ kind: "slice", file: String(sec.file).replace(/\\/g, "/"), text: read(f) }],
  });
}

const problems = [];
const fragments = [];
const unjudged = [];
let scopesWithTable = 0;
let tablesChecked = 0;

for (const scope of scopes) {
  // the parts of this scope that carry an export table
  const carriers = scope.parts.filter((p) => p.kind !== "missing" && /\bexport\s*\{/.test(p.text));
  if (!carriers.length) continue; // the scope carries no export table
  scopesWithTable++;
  tablesChecked += carriers.length;

  const text = scopeText(scope.parts);
  const whole = esmCheck(text);

  if (!whole.ok && whole.missing) {
    // The scope as the LAYER's own bytes export a name nothing declares.
    const names = undeclaredExports(text);
    const listed = names.length ? names : [whole.missing];
    const files = scope.parts.filter((p) => p.kind === "slice").map((p) => p.file);
    problems.push(
      `${scope.name}: the scope's own bytes export { ${listed.join(", ")} } but no slice of that scope declares it` +
        ` (export table in: ${carriers.map((c) => c.file).join(", ")}; scope files: ${files.join(", ")})` +
        ` — a real break: the layer exports a binding nothing declares`,
    );
    continue;
  }

  if (!whole.ok) {
    // The scope does not parse as it stands, for a reason other than a
    // missing export. That class cannot be judged here; say so.
    unjudged.push(
      `${scope.name}: the scope does not link (${whole.error}) - the export table cannot be judged`,
    );
    continue;
  }

  for (const c of carriers) {
    const missing = undeclaredExports(c.text);
    if (!missing.length) continue; // the table links on its own
    // the table names a binding the SCOPE does not declare in this part:
    // the binding is declared by a SIBLING part - a fragment, not a defect
    const where = [];
    for (const name of missing) {
      const s = declaringPart(scope.parts, name);
      where.push(`${name} (declared by ${s ? s : "a sibling slice"})`);
    }
    fragments.push(
      `${c.file}: exports { ${missing.join(", ")} } - ${where.join("; ")}: a sibling slice of ${scope.name} declares it, so the scope is whole (fragment, not a defect)`,
    );
  }
}

if (!QUIET) {
  console.log(`check-links: ${files.length} file(s) in src/`);
  console.log(`  scopes (one per captured chunk): ${scopes.length}   carrying an export table: ${scopesWithTable}`);
  console.log(`  export tables checked: ${tablesChecked}`);
  console.log(`  fragment exports (a sibling slice of the same scope declares the binding): ${fragments.length}`);
  if (VERBOSE) for (const f of fragments) console.log(`    ${f}`);
  if (unjudged.length) {
    console.log(`  not judged (the scope does not link, so the binding cannot be located): ${unjudged.length}`);
    for (const u of unjudged) console.log(`    ${u}`);
  }
  if (problems.length) {
    console.log(`  LINK PROBLEMS: ${problems.length}`);
    for (const p of problems) console.log(`    ${p}`);
  }
}
if (problems.length) process.exit(1);
if (!QUIET) console.log("  every export table names a binding the layer declares: YES");
