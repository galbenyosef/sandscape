// assets__index-BKDksszn 13 — shortcode
// Lines 4147-4157 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function za(e) {
  let t = e?.trim().toLowerCase();
  return t && /^[a-z0-9][a-z0-9_-]{0,63}$/.test(t) ? t : Ra;
}
function Ba(e, t) {
  let n = new URLSearchParams({ g: e.shortCode || e._id || e.id || `` });
  return (t && n.set(`game_source`, za(t)), `/play?${n.toString()}`);
}
function Va(e) {
  return za(e.get(`game_source`));
}
