// Create-ea24k1TY 206 — asset_name
// Lines 69833-69843 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function u1(e, t) {
  if (t.id) {
    let n = e.find((e) => e.id === t.id);
    if (n) return n;
  }
  if (t.name) return e.find((e) => e.asset_name === t.name || e.id === t.name);
}
function d1(e, t) {
  let n = t.find((t) => t.id === e || t.asset_name === e);
  return { pending: !1, id: n?.id ?? e, name: n?.asset_name ?? e };
}
