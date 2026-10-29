// Create-CEn7EAZs 257 — math
// Lines 86647-86695 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function M3(e) {
  switch (e.source) {
    case `session`:
      return `session:${e.asset_id}:${e.path}`;
    case `local`:
      return `local:${e.media_id}`;
    case `text`:
      return `text`;
  }
}
function N3(e, t) {
  let n = Math.max(0, e),
    r = Math.floor(n / 60),
    i = Math.floor(n % 60),
    a = Math.floor((n - Math.floor(n)) * t);
  return `${String(r).padStart(2, `0`)}:${String(i).padStart(2, `0`)}.${String(a).padStart(2, `0`)}`;
}
var Ume = 100,
  Wme = 10,
  Gme = 400;
function P3(e, t, n) {
  return e.tracks.some((e) => e.id === t)
    ? { ...e, tracks: e.tracks.map((e) => (e.id === t ? n(e) : e)) }
    : e;
}
function F3(e, t, n, r) {
  let i = e.tracks.find((e) => e.id === t);
  return !i || !i.clips.some((e) => e.id === n)
    ? e
    : P3(e, t, (e) => ({
        ...e,
        clips: e.clips.map((e) => (e.id === n ? r(e) : e)),
      }));
}
function I3(e, t, n) {
  return (
    e.tracks.find((e) => e.id === t)?.clips.find((e) => e.id === n) ?? null
  );
}
function L3(e) {
  return [...e].sort((e, t) => e.time_sec - t.time_sec);
}
function R3(e, t, n, r, i) {
  return F3(e, t, n, (e) =>
    e.transform
      ? { ...e, transform: { ...e.transform, [r]: i(e.transform[r]) } }
      : e,
  );
}
