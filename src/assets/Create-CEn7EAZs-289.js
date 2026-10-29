// Create-CEn7EAZs 289 — frame
// Lines 101138-101149 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Cve(e) {
  let { boneName: t, frame: n, rotation: r, position: i, scale: a } = e,
    o = { boneName: t, frame: n, rotation: r };
  return (
    i && (i[0] !== 0 || i[1] !== 0 || i[2] !== 0) && (o.position = i),
    a && (a[0] !== 1 || a[1] !== 1 || a[2] !== 1) && (o.scale = a),
    o
  );
}
function wve({ foot: e, frame: t, weight: n }) {
  return { foot: e, frame: t, weight: n };
}
