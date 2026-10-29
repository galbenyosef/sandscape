// Create-CEn7EAZs 241 — asset_name
// Lines 81552-81580 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Ufe(e) {
  return e.id || e.asset_name || e.name || ``;
}
function l4(e) {
  return e.id || e.asset_name || e.name || ``;
}
function Wfe(e) {
  return e.baked_audio_path || e.audio_path || e.sfx_path || e.path || e.name;
}
function u4(e) {
  return (e.asset_name || e.name || `Untitled`).replace(/_/g, ` `);
}
function Gfe(e) {
  return !!(e.audio_path || e.sfx_path);
}
function d4(e) {
  let t = e;
  return {
    mix_state: t.mix_state ?? null,
    mixdown_path: t.mixdown_path ?? null,
    mixdown_stale: t.mixdown_stale ?? null,
  };
}
function f4(e) {
  if (!isFinite(e) || e < 0) return `00:00.0`;
  let t = Math.floor(e / 60),
    n = e % 60;
  return `${String(t).padStart(2, `0`)}:${n.toFixed(1).padStart(4, `0`)}`;
}
