// Create-CEn7EAZs 254 — files
// Lines 85718-85726 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Ame(e) {
  return e.startsWith(`diff:`) || e.startsWith(`commit:`);
}
function s3(e, t) {
  let n = e.findIndex((e) => e.path === t.path);
  return n >= 0
    ? { files: e.map((e, r) => (r === n ? t : e)), index: n }
    : { files: [...e, t], index: e.length };
}
