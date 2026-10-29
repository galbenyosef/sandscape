// SceneEditor-NC7_0wmu 61 — math
// Lines 31775-32029 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Fg(e, t, n) {
  let r = Math.min(e, n) * 0.14,
    i = e >= n,
    a = [{ w: e - r, h: t * 0.5, d: n - r, cx: 0, cy: t * 0.25, cz: 0 }];
  for (let o = 0; o < 4; o++) {
    let s = (o + 0.5) / 4 - 0.5;
    a.push(
      i
        ? {
            w: e - r,
            h: t * 0.5,
            d: n * 0.1,
            cx: 0,
            cy: -t * 0.25,
            cz: s * (n - r),
          }
        : {
            w: e * 0.1,
            h: t * 0.5,
            d: n - r,
            cx: s * (e - r),
            cy: -t * 0.25,
            cz: 0,
          },
    );
  }
  return jg(a);
}
function Ig(e, t, n, r, i = gg) {
  let a =
      e === `door`
        ? Mg(t, n, r)
        : e === `light_socket`
          ? Ng(t, n, r)
          : e === `column` || e === `pillar`
            ? Pg(t, n, r)
            : e === `floor_insert`
              ? Fg(t, n, r)
              : new Lt(t, n, r),
    o = Sg(i, t, n, r);
  return (a.translate(o.x, o.y, o.z), a);
}
function Lg(e) {
  return e === `light_socket`
    ? new Te({
        color: 16773836,
        emissive: 16765562,
        emissiveIntensity: 0.9,
        roughness: 0.5,
        metalness: 0,
      })
    : new Te({ color: kg[e] ?? kg.default, roughness: 0.92, metalness: 0 });
}
function Rg(e) {
  return e?.kind === `arena`
    ? `arena_wall`
    : e?.kind === `corridor`
      ? `corridor_wall`
      : `wall`;
}
function zg(e, t) {
  let n = e != null,
    r = t != null;
  return n === r
    ? n && r && e !== t && e.kind !== `corridor` && t.kind !== `corridor`
      ? { ownerCell: e, side: 2 }
      : null
    : { ownerCell: n ? e : t, side: n ? 1 : -1 };
}
function Bg(e, t, n) {
  let r = {
    doorV: new Set(),
    doorH: new Set(),
    wallV: new Set(),
    wallH: new Set(),
    openV: new Set(),
    openH: new Set(),
  };
  if (!e) return r;
  let i = (e, r, i) => {
    let a = e.split(`:`);
    if (a.length !== 3) return;
    let o = Number(a[1]),
      s = Number(a[2]);
    !Number.isFinite(o) ||
      !Number.isFinite(s) ||
      (a[0] === `V`
        ? o >= 0 && o <= t && s >= 0 && s < n && r.add(o * n + s)
        : a[0] === `H` &&
          o >= 0 &&
          o <= n &&
          s >= 0 &&
          s < t &&
          i.add(o * t + s));
  };
  for (let t of e.doors ?? []) i(t, r.doorV, r.doorH);
  for (let t of e.walls ?? []) i(t, r.wallV, r.wallH);
  for (let t of e.opens ?? []) i(t, r.openV, r.openH);
  return r;
}
function Vg(e, t, n, r) {
  let i = (e, n) => e + n * t;
  return (a, o, s) => {
    if (a === `V`) {
      if (s < 0 || s >= n) return !1;
      let a = o * n + s;
      return r.doorV.has(a)
        ? !1
        : r.wallV.has(a)
          ? !0
          : !r.openV.has(a) &&
            !!zg(o > 0 ? e[i(o - 1, s)] : null, o < t ? e[i(o, s)] : null);
    }
    if (s < 0 || s >= t) return !1;
    let c = o * t + s;
    return r.doorH.has(c)
      ? !1
      : r.wallH.has(c)
        ? !0
        : !r.openH.has(c) &&
          !!zg(o > 0 ? e[i(s, o - 1)] : null, o < n ? e[i(s, o)] : null);
  };
}
var Hg = {},
  Ug = Hg;
function Wg(e) {
  return Ug[e] ?? `min-corner`;
}
function $(e, t, n, r, i, a, o, s, c, l = 0) {
  let u = Wg(e),
    d = new G(Ig(e, t, n, r, u), Lg(e));
  return (
    l && (d.rotation.y = l),
    Cg(u, i, a, o, t, n, r, l, d.position),
    (d.castShadow = !0),
    (d.receiveShadow = !0),
    (d.name = `proc_${e}_${s}`),
    (d.userData = {
      proc: !0,
      procKind: e,
      layoutPieceId: c,
      cellId: s,
      generatedBy: `rooms`,
      dims: { w: t, h: n, d: r },
      pivot: u,
      pivotAuto: u,
      locked: !1,
    }),
    d
  );
}
function Gg(e) {
  return Math.max(0.03, e.floorThickness * 0.2);
}
var Kg = 0.05;
function qg(e, t) {
  return e.height - Math.max(Gg(t), 0.05);
}
function Jg(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let a of e.rects)
    ((t = Math.min(t, a.x)),
      (n = Math.min(n, a.z)),
      (r = Math.max(r, a.x + a.w)),
      (i = Math.max(i, a.z + a.d)));
  return { x: t, z: n, w: r - t, d: i - n };
}
function Yg(e, t, n, r) {
  let i = (e, t) => e + t * n,
    a = Jg(e),
    o = new Set(),
    s = (a, s) =>
      a >= 0 && a < n && s >= 0 && s < r && t[i(a, s)] === e && !o.has(i(a, s)),
    c = [];
  for (let e = a.z; e < a.z + a.d; e++)
    for (let t = a.x; t < a.x + a.w; t++) {
      if (!s(t, e)) continue;
      let n = 1;
      for (; t + n < a.x + a.w && s(t + n, e);) n++;
      let r = 1;
      grow: for (; e + r < a.z + a.d;) {
        for (let i = t; i < t + n; i++) if (!s(i, e + r)) break grow;
        r++;
      }
      for (let a = e; a < e + r; a++)
        for (let e = t; e < t + n; e++) o.add(i(e, a));
      c.push({ x: t, z: e, w: n, d: r });
    }
  return c;
}
function Xg(e, t, n, r) {
  let i = (e, t) => e + t * n,
    a = Jg(e),
    o = [];
  for (let s = a.z; s < a.z + a.d; s++)
    for (let c = a.x; c < a.x + a.w; c++)
      c >= 0 &&
        c < n &&
        s >= 0 &&
        s < r &&
        t[i(c, s)] === e &&
        o.push({ x: c, z: s, w: 1, d: 1 });
  return o;
}
function Zg(e) {
  Ug = e.pivots ?? Hg;
  try {
    return n_(e);
  } finally {
    Ug = Hg;
  }
}
function Qg(e) {
  let t = Math.max(8, Math.floor(e.gridWidth)),
    n = Math.max(8, Math.floor(e.gridDepth)),
    r = e.cellSize,
    i = (-t * r) / 2,
    a = (-n * r) / 2;
  return {
    W: t,
    D: n,
    cs: r,
    originX: i,
    originZ: a,
    lineX: (e) => i + e * r,
    lineZ: (e) => a + e * r,
    cellAt: (e, t) => ({
      x: Math.floor((e - i) / r),
      z: Math.floor((t - a) / r),
    }),
  };
}
var $g = 1.4;
function e_(e, t, n) {
  let r = Array(t * n).fill(null),
    i = (e, n) => e + n * t,
    a = (e, r) => e >= 0 && e < t && r >= 0 && r < n;
  for (let t of e.cells)
    for (let e of t.rects)
      for (let n = e.z; n < e.z + e.d; n++)
        for (let o = e.x; o < e.x + e.w; o++)
          a(o, n) && r[i(o, n)] == null && (r[i(o, n)] = t);
  if (e.zones && e.zones.width === t && e.zones.depth === n) {
    let t = e.zones.cells;
    for (let e = 0; e < t.length; e++) t[e] === 99 && (r[e] = null);
  }
  return r;
}
function t_(e) {
  let { W: t, D: n } = Qg(e.params);
  return p_(e.params, e_(e, t, n), e.zones);
}
