// SceneEditor-NC7_0wmu 86 — array
// Lines 42055-42095 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function IS(e) {
  switch (e) {
    case `string`:
      return ``;
    case `number`:
      return 0;
    case `boolean`:
      return !1;
    case `null`:
      return null;
    case `object`:
      return {};
    case `array`:
      return [];
  }
}
function LS(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function RS(e) {
  return (
    Array.isArray(e) && e.length > 0 && e.every((e) => typeof e == `number`)
  );
}
function zS(e) {
  return (
    LS(e) &&
    typeof e.x == `number` &&
    typeof e.y == `number` &&
    typeof e.z == `number` &&
    Object.keys(e).length === 3
  );
}
function BS(e) {
  return e
    ? (e.split(`/`).pop() || e).replace(/~1/g, `/`).replace(/~0/g, `~`)
    : `userData`;
}
function VS(e, t) {
  return `${e}:${t}`;
}
