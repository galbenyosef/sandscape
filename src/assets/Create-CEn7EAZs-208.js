// Create-CEn7EAZs 208 — asset_name
// Lines 70616-70626 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function $le(e, t) {
  if (t.id) {
    let n = e.find((e) => e.id === t.id);
    if (n) return n;
  }
  if (t.name) return e.find((e) => e.asset_name === t.name || e.id === t.name);
}
function eue(e, t) {
  let n = t.find((t) => t.id === e || t.asset_name === e);
  return { pending: !1, id: n?.id ?? e, name: n?.asset_name ?? e };
}
