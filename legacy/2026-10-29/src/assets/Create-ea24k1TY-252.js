// Create-ea24k1TY 252 — files
// Lines 84936-84944 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Zpe(e) {
  return e.startsWith(`diff:`) || e.startsWith(`commit:`);
}
function c3(e, t) {
  let n = e.findIndex((e) => e.path === t.path);
  return n >= 0
    ? { files: e.map((e, r) => (r === n ? t : e)), index: n }
    : { files: [...e, t], index: e.length };
}
