// index-CBcimEr9 09 — action
// Lines 3146-3176 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function ma() {
  window.open(pa, `_blank`, `noopener`);
}
function ha(e, t) {
  return (
    e({
      title: `Insufficient Sandcoins`,
      description: t,
      variant: `destructive`,
      action: (0, U.jsx)(Rn, {
        altText: `Get more Sandcoins`,
        onClick: ma,
        children: `Get Sandcoins`,
      }),
    }),
    we(),
    t
  );
}
var ga = `direct_or_unknown`;
function _a(e) {
  let t = e?.trim().toLowerCase();
  return t && /^[a-z0-9][a-z0-9_-]{0,63}$/.test(t) ? t : ga;
}
function va(e, t) {
  let n = new URLSearchParams({ g: e.shortCode || e._id || e.id || `` });
  return (t && n.set(`game_source`, _a(t)), `/play?${n.toString()}`);
}
function ya(e) {
  return _a(e.get(`game_source`));
}
