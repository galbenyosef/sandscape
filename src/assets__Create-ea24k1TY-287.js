// assets__Create-ea24k1TY 287 — frame
// Lines 100359-100370 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function W_e(e) {
  let { boneName: t, frame: n, rotation: r, position: i, scale: a } = e,
    o = { boneName: t, frame: n, rotation: r };
  return (
    i && (i[0] !== 0 || i[1] !== 0 || i[2] !== 0) && (o.position = i),
    a && (a[0] !== 1 || a[1] !== 1 || a[2] !== 1) && (o.scale = a),
    o
  );
}
function G_e({ foot: e, frame: t, weight: n }) {
  return { foot: e, frame: t, weight: n };
}
