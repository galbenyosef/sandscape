// SceneEditor-NC7_0wmu 72 — math
// Lines 35313-35637 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function by(e, t, n, r = {}) {
  let { frame: i } = e;
  if (!e.hadLayoutZones) return null;
  let a = [],
    o = [];
  for (let s of n) {
    let { object: n } = s;
    if (!C_(n)) continue;
    let c = n.userData.markerZoneName,
      l = _y(n);
    if (!l.length) continue;
    let u = l.length === 1,
      d = u ? ya(e.layoutZones, c, ca(l[0].x, l[0].z)) : [0, 0, 0],
      f = vy(l, d, i);
    if (
      (n.position.set(f.x, f.y, f.z),
      b_(n, fa(Number(n.userData.markerFacing ?? 0))),
      n.updateMatrixWorld(!0),
      t(n),
      n.userData.locked && !r.duplicate)
    )
      continue;
    let p, m, h;
    if (u) {
      let e = i.cellAt(s.toX, s.toZ),
        t = Math.max(0, Math.min(i.W - 1, e.x)),
        n = Math.max(0, Math.min(i.D - 1, e.z));
      ((p = t - l[0].x),
        (m = n - l[0].z),
        (h = [
          s.toX - (i.lineX(t) + i.cs / 2),
          s.toY - $g,
          s.toZ - (i.lineZ(n) + i.cs / 2),
        ]),
        t !== e.x && (h[0] = 0),
        n !== e.z && (h[2] = 0));
    } else {
      let e = Math.min(...l.map((e) => e.x)),
        t = Math.max(...l.map((e) => e.x)),
        n = Math.min(...l.map((e) => e.z)),
        r = Math.max(...l.map((e) => e.z));
      ((p = Math.max(
        -e,
        Math.min(i.W - 1 - t, Math.round((s.toX - f.x) / i.cs)),
      )),
        (m = Math.max(
          -n,
          Math.min(i.D - 1 - r, Math.round((s.toZ - f.z) / i.cs)),
        )));
    }
    let g = s.facingDeg === void 0 ? void 0 : fa(s.facingDeg),
      _ = g !== void 0 && g !== fa(Number(n.userData.markerFacing ?? 0)),
      v = !!h && !yy(h, d);
    if (p === 0 && m === 0 && (r.duplicate || (!_ && !v))) continue;
    let y = l.map((e) => ca(e.x, e.z)),
      b = l.map((e) => ca(e.x + p, e.z + m));
    (a.push({
      zone: c,
      from: y,
      to: b,
      ...(_ ? { facing: g } : {}),
      ...(h ? { offset: h } : {}),
    }),
      o.push({ zone: c, key: b[0] }));
  }
  return a.length ? { moves: a, landed: o } : null;
}
function xy(e, t) {
  if (!e.hadLayoutZones) return null;
  let { frame: n } = e,
    r = [],
    i = [],
    a = 0,
    o = {},
    s = (t) => (o[t] || (o[t] = new Set(da(e.storeZones, t) ?? [])), o[t]);
  for (let e of t) {
    if (!C_(e)) continue;
    let t = e.userData.markerZoneName,
      o = _y(e);
    if (!o.length) continue;
    let c = s(t),
      l = Math.min(...o.map((e) => e.x)),
      u = Math.max(...o.map((e) => e.x)),
      d = Math.min(...o.map((e) => e.z)),
      f = Math.max(...o.map((e) => e.z)),
      p = (e, t) =>
        l + e >= 0 &&
        u + e < n.W &&
        d + t >= 0 &&
        f + t < n.D &&
        o.every((n) => !c.has(ca(n.x + e, n.z + t))),
      m = null,
      h = Math.max(n.W, n.D);
    for (let e = 1; e <= h && !m; e++)
      for (let [t, n] of Sy(e))
        if (p(t, n)) {
          m = { dx: t, dz: n };
          break;
        }
    if (!m) {
      a++;
      continue;
    }
    let g = o.map((e) => ca(e.x, e.z)),
      _ = o.map((e) => ca(e.x + m.dx, e.z + m.dz));
    for (let e of _) c.add(e);
    (r.push({ zone: t, from: g, to: _ }), i.push({ zone: t, key: _[0] }));
  }
  return r.length || a ? { moves: r, landed: i, skipped: a } : null;
}
function Sy(e) {
  let t = [
    [e, 0],
    [-e, 0],
    [0, e],
    [0, -e],
  ];
  for (let n = 1; n <= e; n++)
    for (let r of [1, -1])
      for (let i of [1, -1]) {
        let a = [r * e, i * n],
          o = [r * n, i * e];
        n !== 0 && t.push(a, o);
      }
  let n = new Set();
  return t.filter(([t, r]) => {
    let i = `${t},${r}`;
    return n.has(i) || Math.max(Math.abs(t), Math.abs(r)) !== e
      ? !1
      : (n.add(i), !0);
  });
}
function Cy(e, t) {
  let n = t > 1;
  return e
    ? n
      ? `Duplicate Markers`
      : `Duplicate Marker`
    : n
      ? `Move Markers`
      : `Move Marker`;
}
function wy(e, t, n, r = {}) {
  let i = dy();
  if (!i) return null;
  let a = by(i, t, n, r);
  if (!a) return null;
  let o = { copy: !!r.duplicate },
    s = py(
      e,
      t,
      i,
      {
        layoutZones: Oa(i.layoutZones, a.moves, o),
        storeZones: Oa(i.storeZones, a.moves, o),
      },
      [],
      Cy(r.duplicate, a.moves.length),
    );
  return s ? { command: s, landed: a.landed } : null;
}
function Ty(e, t) {
  let n = null;
  return (
    e.traverse((e) => {
      if (n || !C_(e) || e.userData.markerZoneName !== t.zone) return;
      let r = e.userData.markerCells;
      Array.isArray(r) && r.includes(t.key) && (n = e);
    }),
    n
  );
}
var Ey = { nU: 1, nV: 1 },
  Dy = {
    wall: `x`,
    corridor_wall: `x`,
    arena_wall: `x`,
    floor: `y`,
    ceiling: `y`,
  },
  Oy = 1.25,
  ky = 1.5,
  Ay = new U(0, 1, 0),
  jy = { x: 0, y: 1, z: 2 };
function My(e, t, n) {
  if (!e || !t || !n) return null;
  let r = Dy[e];
  if (!r || r !== t) return null;
  let i = Tv(t, n);
  return t === `x`
    ? { u: `z`, v: `y`, n: `x`, yaw: i, courses: !0 }
    : { u: `x`, v: `z`, n: `y`, yaw: i, courses: !1 };
}
function Ny(e, t, n) {
  if (e === `y`) return t.h;
  let r = n !== 0;
  return e === `x` ? (r ? t.d : t.w) : r ? t.w : t.d;
}
function Py(e, t) {
  return e >= t ? e / t : t / e;
}
function Fy(e, t) {
  if (!(e > 0) || !(t > 0)) return 0;
  let n = e / t,
    r = Math.round(n);
  return r >= 1 && Math.abs(n - r) < 1e-6 ? r : 0;
}
function Iy(e, t, n, r = Oy) {
  let i = Math.max(1, Math.floor(n));
  if (!(e > 0) || !Number.isFinite(e)) return 1;
  let a = Math.min(i, Math.max(1, Math.round(e)));
  if (t < 1) return a;
  let o = Math.min(i, t),
    s = 0,
    c = 1 / 0;
  for (let n = 1; n <= o; n += 1) {
    if (t % n !== 0) continue;
    let r = Py(n, e);
    r < c && ((c = r), (s = n));
  }
  return s && c <= r ? s : a;
}
function Ly(e) {
  let {
      family: t,
      world: n,
      sourceSize: r,
      cellSize: i,
      wallHeight: a,
      slabTileWorld: o,
    } = e,
    s = e.density && e.density > 0 ? e.density : 1;
  if (r.length !== 3 || !r.every((e) => e > 1e-6 && Number.isFinite(e)))
    return Ey;
  let c = Ny(t.u, n, t.yaw),
    l = Ny(t.v, n, t.yaw);
  if (!(c > 0) || !(l > 0) || !(i > 0)) return Ey;
  let u = r[jy[t.u]],
    d = r[jy[t.v]],
    f = Fy(c, i);
  if (t.courses) {
    let e = a > 0 && l > 0 ? l / a : 1,
      t = Math.max(1, Math.min(4, Math.floor(e))),
      n = Math.max(1, Math.min(4, Math.ceil(e))),
      r = null,
      i = 1 / 0;
    for (let e = t; e <= n; e += 1) {
      let t = (c / ((l / e) * (u / d))) * s,
        n = Math.max(1, Math.floor(32 / e)),
        a = Iy(t, f, f >= 1 ? Math.min(f, n) : n),
        o = Py(a, t);
      o < i && ((i = o), (r = { nU: a, nV: e, clamped: o > ky }));
    }
    return r ?? Ey;
  }
  let p = o > 0 ? o : 1,
    m = Math.min(1, c / p, l / ((d / u) * p)),
    h = p * (m > 0 && Number.isFinite(m) ? m : 1),
    g = (d / u) * h,
    _ = Fy(l, i),
    v = (c / h) * s,
    y = (l / g) * s,
    b = Iy(v, f, f >= 1 ? f : 32),
    x = Iy(y, _, _ >= 1 ? _ : 32);
  if (b * x > 32) {
    let e = Math.sqrt(32 / (b * x)),
      t = Math.max(1, Math.floor(b * e)),
      n = Math.max(1, Math.floor(x * e));
    for (b = Iy(v, f, t), x = Iy(y, _, n); b * x > 32 && (b > 1 || x > 1);)
      b >= x ? --b : --x;
  }
  return (
    (b = Math.max(1, b)),
    (x = Math.max(1, x)),
    { nU: b, nV: x, clamped: Py(b, v) > 1.5 || Py(x, y) > 1.5 }
  );
}
function Ry(e, t) {
  return e / t - 0.5;
}
function zy(e, t, n, r, i = new U()) {
  return (
    i.set(1, 1, 1),
    (i[e.u] = Ry(n + 1, t.nU) - Ry(n, t.nU)),
    (i[e.v] = Ry(r + 1, t.nV) - Ry(r, t.nV)),
    i
  );
}
function By(e, t, n, r, i = new U()) {
  return (
    i.set(0, 0, 0),
    (i[e.u] = (Ry(n, t.nU) + Ry(n + 1, t.nU)) / 2),
    (i[e.v] = (Ry(r, t.nV) + Ry(r + 1, t.nV)) / 2),
    i
  );
}
function Vy(e, t, n, r) {
  let i = Tg(r),
    a = [];
  for (let r = 0; r < t.nV; r += 1)
    for (let o = 0; o < t.nU; o += 1) {
      let s = By(e, t, o, r);
      (e.yaw && s.applyAxisAngle(Ay, e.yaw), a.push(s.add(i).applyMatrix4(n)));
    }
  return a;
}
function Hy(e, t, n, r, i) {
  let a = (e) => Math.round((2 * e) / i);
  return `kittile:${e}:${a(t)}:${a(n)}:${r}`;
}
function Uy(e) {
  let t = lr(e);
  return (
    t.traverse((e) => {
      let t = e;
      t.isMesh &&
        ((t.geometry &&= t.geometry.clone()),
        Array.isArray(t.material)
          ? (t.material = t.material.map((e) => e.clone()))
          : (t.material &&= t.material.clone()));
    }),
    t
  );
}
var Wy = new Set([`prop`]);
