// SceneEditor-NC7_0wmu 69 — math
// Lines 34336-34639 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function xv(e, t, n, r, i, a, o) {
  if (!t || !mv.has(t)) return;
  let s = i && i > 0 ? Math.max(0.25, i) : bv(t, n, r),
    c = _v.has(t) ? yv(s, a) : s,
    l = r?.rotationRad ?? 0,
    u = Math.cos(l),
    d = Math.sin(l);
  e.updateWorldMatrix(!0, !0);
  let f = new U(),
    p = new U(),
    m = _v.has(t);
  e.traverse((e) => {
    let n = e;
    if (!n.isMesh || !n.geometry) return;
    let r = n.geometry,
      i = r.getAttribute(`position`);
    if (!i || i.count > gv) return;
    let a = (Array.isArray(n.material) ? n.material : [n.material]).filter(
      (e) => !!e?.map,
    );
    if (a.length === 0) return;
    let s = a.flatMap((e) =>
      [
        e.map,
        e.normalMap,
        e.roughnessMap,
        e.metalnessMap,
        e.aoMap,
        e.emissiveMap,
      ].filter((e) => !!e),
    );
    r.getAttribute(`normal`) || r.computeVertexNormals();
    let h = r.getAttribute(`normal`);
    (n.getWorldScale(f), m ? n.getWorldPosition(p) : p.set(0, 0, 0));
    let g = t === `trim`,
      _ = new Float32Array(i.count * 2);
    for (let e = 0; e < i.count; e++) {
      let t = h.getX(e),
        n = h.getY(e),
        r = h.getZ(e),
        a = Math.abs(t),
        o = Math.abs(n),
        s = Math.abs(r),
        m = i.getX(e),
        v = i.getY(e),
        y = i.getZ(e),
        b,
        x;
      if (
        (g
          ? a >= o && a >= s
            ? f.y <= f.z
              ? ((x = v + 0.5), (b = (y * f.z) / c))
              : ((x = y + 0.5), (b = (v * f.y) / c))
            : o >= a && o >= s
              ? f.x <= f.z
                ? ((x = m + 0.5), (b = (y * f.z) / c))
                : ((x = y + 0.5), (b = (m * f.x) / c))
              : f.y <= f.x
                ? ((x = v + 0.5), (b = (m * f.x) / c))
                : ((x = m + 0.5), (b = (v * f.y) / c))
          : a >= o && a >= s
            ? ((b = ((t < 0 ? -1 : 1) * (p.z + y * f.z)) / c),
              (x = (p.y + v * f.y) / c))
            : o >= a && o >= s
              ? ((b = (p.x + m * f.x) / c), (x = (p.z + y * f.z) / c))
              : ((b = ((r < 0 ? 1 : -1) * (p.x + m * f.x)) / c),
                (x = (p.y + v * f.y) / c)),
        l !== 0 && !g)
      ) {
        let e = b * u - x * d;
        ((x = b * d + x * u), (b = e));
      }
      ((_[e * 2] = b), (_[e * 2 + 1] = x));
    }
    r.setAttribute(`uv`, new Dt(_, 2));
    for (let e of s)
      if (!(e.wrapS === 1e3 && e.wrapT === 1e3)) {
        if (((e.wrapS = $t), (e.wrapT = $t), o?.preserveSampler)) {
          e.needsUpdate = !0;
          continue;
        }
        (e.repeat.set(1, 1),
          e.offset.set(0, 0),
          e.center.set(0, 0),
          (e.rotation = 0),
          (e.needsUpdate = !0));
      }
  });
}
function Sv(e) {
  return e === `x` || e === `y` || e === `z`;
}
var Cv = 0.9,
  wv = Math.PI / 2;
function Tv(e, t) {
  return !e || !t
    ? 0
    : e === `x`
      ? t.d < t.w * Cv
        ? wv
        : 0
      : e === `z` && t.w < t.d * Cv
        ? wv
        : 0;
}
function Ev(e) {
  let t = e.userData?.canonicalAxis;
  return Sv(t) ? Tv(t, e.userData?.dims) : 0;
}
var Dv = 1e-4;
function Ov(e) {
  (e.geometry.dispose(),
    (Array.isArray(e.material) ? e.material : [e.material]).forEach((e) =>
      e.dispose?.(),
    ));
}
var kv = class extends Ks {
  applyFn;
  revertFn;
  constructor(e, t, n, r) {
    (super(e, t),
      (this.type = `SyncLayoutCommand`),
      (this.name = `Sync Procedural Layout`),
      (this.applyFn = n),
      (this.revertFn = r));
  }
  execute() {
    this.applyFn();
  }
  undo() {
    this.revertFn();
  }
};
function Av(e) {
  return e.userData?.layoutPieceId;
}
function jv(e) {
  return !!e.userData?.locked;
}
function Mv(e) {
  return e.children.filter((e) => !!e.userData?.proc);
}
function Nv(e) {
  return {
    position: [e.position.x, e.position.y, e.position.z],
    rotation: [e.rotation.x, e.rotation.y, e.rotation.z],
    scale: [e.scale.x, e.scale.y, e.scale.z],
  };
}
function Pv(e, t) {
  return (
    Math.abs(e.position.x - t.position.x) > Dv ||
    Math.abs(e.position.y - t.position.y) > Dv ||
    Math.abs(e.position.z - t.position.z) > Dv ||
    Math.abs(e.rotation.x - t.rotation.x) > Dv ||
    Math.abs(e.rotation.y - t.rotation.y) > Dv ||
    Math.abs(e.rotation.z - t.rotation.z) > Dv ||
    Math.abs(e.scale.x - t.scale.x) > Dv ||
    Math.abs(e.scale.y - t.scale.y) > Dv ||
    Math.abs(e.scale.z - t.scale.z) > Dv
  );
}
var Fv = new WeakMap();
function Iv(e) {
  let t = Fv.get(e);
  if (t) return t;
  let n = new Map();
  for (let t of Zg(e))
    (n.set(t.userData.layoutPieceId, {
      position: { x: t.position.x, y: t.position.y, z: t.position.z },
      rotation: { x: t.rotation.x, y: t.rotation.y, z: t.rotation.z },
      scale: { x: t.scale.x, y: t.scale.y, z: t.scale.z },
    }),
      Ov(t));
  return (Fv.set(e, n), n);
}
function Lv(e, t) {
  let n = Iv(t),
    r = new Map();
  Mv(e).forEach((e) => {
    let t = Av(e);
    t && r.set(t, e);
  });
  let i = {};
  return (
    n.forEach((e, t) => {
      let n = r.get(t);
      if (!n) {
        i[t] = { removed: !0 };
        return;
      }
      if (n.userData.assetId && n.userData.modelPath) return;
      let a = {};
      (n.userData.locked && (a.locked = !0),
        n.visible || (a.visible = !1),
        yg(n.userData.pivotMode) && (a.pivotMode = n.userData.pivotMode),
        Pv(n, e) && (a.transform = Nv(n)),
        Object.keys(a).length && (i[t] = a));
    }),
    i
  );
}
function Rv(e, t, n) {
  let r = [];
  for (let i of Zg(e)) {
    let e = i.userData.layoutPieceId,
      a = t[e];
    if (a?.removed || (n && n.has(e)) || (a?.assetId && a?.modelPath)) {
      Ov(i);
      continue;
    }
    if (a?.pivotMode && a.pivotMode !== xg(i)) {
      let e = i.userData.dims,
        t = xg(i) ?? `min-corner`;
      (e &&
        (i.position.add(
          Sg(t, e.w, e.h, e.d)
            .sub(Sg(a.pivotMode, e.w, e.h, e.d))
            .multiply(i.scale)
            .applyQuaternion(i.quaternion),
        ),
        i.geometry.dispose(),
        (i.geometry = Ig(
          String(i.userData.procKind ?? `wall`),
          e.w,
          e.h,
          e.d,
          a.pivotMode,
        ))),
        (i.userData.pivotMode = a.pivotMode),
        (i.userData.pivot = a.pivotMode));
    }
    (a?.transform &&
      (i.position.fromArray(a.transform.position),
      i.rotation.set(
        a.transform.rotation[0],
        a.transform.rotation[1],
        a.transform.rotation[2],
      ),
      i.scale.fromArray(a.transform.scale)),
      a?.visible === !1 && (i.visible = !1),
      a?.locked && (i.userData.locked = !0),
      r.push(i));
  }
  return r;
}
function zv(e, t) {
  let n = e.zones;
  if (!n) return null;
  let r = Math.max(8, Math.floor(e.params.gridWidth)),
    i = Math.max(8, Math.floor(e.params.gridDepth));
  if (n.width !== r || n.depth !== i) return null;
  let a = new Set();
  for (let e = 0; e < n.cells.length; e++)
    (n.cells[e] === 99 || (t && za(n.cells[e]))) && a.add(e);
  if (!a.size) return null;
  let o = e.params.cellSize;
  return {
    cells: a,
    W: r,
    D: i,
    cs: o,
    inset: Math.min(e.params.wallThickness, o * 0.25),
  };
}
var Bv = new z(),
  Vv = new U();
function Hv(e, t) {
  Dg(e, Vv);
  let n = e.userData?.dims,
    r = 0,
    i = 0;
  if (n) {
    let t = (n.w * e.scale.x) / 2,
      a = (n.h * e.scale.y) / 2,
      o = (n.d * e.scale.z) / 2,
      s = Bv.makeRotationFromQuaternion(e.quaternion).elements;
    ((r = Math.abs(s[0]) * t + Math.abs(s[4]) * a + Math.abs(s[8]) * o),
      (i = Math.abs(s[2]) * t + Math.abs(s[6]) * a + Math.abs(s[10]) * o));
  }
  let a = Math.max(0, r - t.inset),
    o = Math.max(0, i - t.inset),
    s = (-t.W * t.cs) / 2,
    c = (-t.D * t.cs) / 2,
    l = Math.max(0, Math.floor((Vv.x - a - s) / t.cs)),
    u = Math.min(t.W - 1, Math.floor((Vv.x + a - s) / t.cs)),
    d = Math.max(0, Math.floor((Vv.z - o - c) / t.cs)),
    f = Math.min(t.D - 1, Math.floor((Vv.z + o - c) / t.cs));
  for (let e = d; e <= f; e++)
    for (let n = l; n <= u; n++) if (t.cells.has(n + e * t.W)) return !0;
  return !1;
}
function Uv(e, t, n, r) {
  if (!n) return !1;
  let i = t ? r.get(t) : void 0;
  return i && Kv(e, i) ? !1 : Hv(e, n);
}
function Wv(e, t, n) {
  return n
    .slice()
    .sort((t, n) => e.children.indexOf(n) - e.children.indexOf(t))
    .map((n) => new Vh(e, t, n));
}
