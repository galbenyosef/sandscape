// Create-ea24k1TY 255 — math
// Lines 85865-85913 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function N3(e) {
  switch (e.source) {
    case `session`:
      return `session:${e.asset_id}:${e.path}`;
    case `local`:
      return `local:${e.media_id}`;
    case `text`:
      return `text`;
  }
}
function P3(e, t) {
  let n = Math.max(0, e),
    r = Math.floor(n / 60),
    i = Math.floor(n % 60),
    a = Math.floor((n - Math.floor(n)) * t);
  return `${String(r).padStart(2, `0`)}:${String(i).padStart(2, `0`)}.${String(a).padStart(2, `0`)}`;
}
var ume = 100,
  dme = 10,
  fme = 400;
function F3(e, t, n) {
  return e.tracks.some((e) => e.id === t)
    ? { ...e, tracks: e.tracks.map((e) => (e.id === t ? n(e) : e)) }
    : e;
}
function I3(e, t, n, r) {
  let i = e.tracks.find((e) => e.id === t);
  return !i || !i.clips.some((e) => e.id === n)
    ? e
    : F3(e, t, (e) => ({
        ...e,
        clips: e.clips.map((e) => (e.id === n ? r(e) : e)),
      }));
}
function L3(e, t, n) {
  return (
    e.tracks.find((e) => e.id === t)?.clips.find((e) => e.id === n) ?? null
  );
}
function R3(e) {
  return [...e].sort((e, t) => e.time_sec - t.time_sec);
}
function z3(e, t, n, r, i) {
  return I3(e, t, n, (e) =>
    e.transform
      ? { ...e, transform: { ...e.transform, [r]: i(e.transform[r]) } }
      : e,
  );
}
