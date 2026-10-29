// SceneEditor-NC7_0wmu 77 — visible
// Lines 36828-36883 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Lx(e, t) {
  let n = [t.x, t.y, t.z];
  if (Array.isArray(e)) {
    let t = e.slice();
    for (let e = 0; e < Math.min(t.length, 3); e++) t[e] = n[e];
    return t;
  }
  if (e && typeof e == `object` && (`x` in e || `y` in e || `z` in e)) {
    let n = { ...e };
    return (
      `x` in n && (n.x = t.x),
      `y` in n && (n.y = t.y),
      `z` in n && (n.z = t.z),
      n
    );
  }
  return [t.x, t.y, t.z];
}
function Rx(e, t, n, r) {
  let i = [],
    a = [],
    o = new Ne({
      color: 9741240,
      wireframe: !0,
      transparent: !0,
      opacity: 0.45,
      depthTest: !1,
    }),
    s = r[t.uuid] !== !1,
    c = !t.visible;
  (i.push({ object: t, visible: t.visible }),
    (t.visible = s),
    t.traverse((e) => {
      if (e === t || Dx(e)) return;
      let n = r[e.uuid] !== !1 && s,
        l = c || !e.visible,
        u = e.parent;
      for (; u && u !== t;)
        (r[u.uuid] === !1 && (n = !1), u.visible || (l = !0), (u = u.parent));
      if ((i.push({ object: e, visible: e.visible }), !n)) {
        e.visible = !1;
        return;
      }
      ((e.visible = !0),
        l &&
          e instanceof G &&
          (a.push({ mesh: e, material: e.material }), (e.material = o)));
    }));
  try {
    e.render(t, n);
  } finally {
    for (let e of a) e.mesh.material = e.material;
    for (let e of i) e.object.visible = e.visible;
    o.dispose();
  }
}
