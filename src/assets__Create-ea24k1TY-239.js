// assets__Create-ea24k1TY 239 — asset_name
// Lines 80772-80800 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function ufe(e) {
  return e.id || e.asset_name || e.name || ``;
}
function u4(e) {
  return e.id || e.asset_name || e.name || ``;
}
function dfe(e) {
  return e.baked_audio_path || e.audio_path || e.sfx_path || e.path || e.name;
}
function d4(e) {
  return (e.asset_name || e.name || `Untitled`).replace(/_/g, ` `);
}
function ffe(e) {
  return !!(e.audio_path || e.sfx_path);
}
function f4(e) {
  let t = e;
  return {
    mix_state: t.mix_state ?? null,
    mixdown_path: t.mixdown_path ?? null,
    mixdown_stale: t.mixdown_stale ?? null,
  };
}
function p4(e) {
  if (!isFinite(e) || e < 0) return `00:00.0`;
  let t = Math.floor(e / 60),
    n = e % 60;
  return `${String(t).padStart(2, `0`)}:${n.toFixed(1).padStart(4, `0`)}`;
}
