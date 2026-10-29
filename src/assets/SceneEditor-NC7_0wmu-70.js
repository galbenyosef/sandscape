// SceneEditor-NC7_0wmu 70 — userdata
// Lines 34640-34987 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Gv(e, t, n, r, i) {
  let a = Mv(e),
    o = r ? Iv(r) : new Map(),
    s = (e) => !!(e.userData.assetId && e.userData.modelPath),
    c = (e) => {
      let t = Av(e);
      if (!t) return !1;
      let n = o.get(t);
      return n ? Pv(e, n) : !1;
    },
    l = new Set([`floor`, `wall`, `corridor_wall`, `arena_wall`, `ceiling`]),
    u = (e) => Zi(r.params, e) !== Zi(n.params, e),
    d =
      !!r?.params &&
      (r.params.perCellTiling !== n.params.perCellTiling ||
        u(`room`) ||
        u(`arena`)),
    f = (e) => d && l.has(e.userData.procKind),
    p = zv(n, !1),
    m = Zg(n),
    h = new Map();
  m.forEach((e) => h.set(e.userData.layoutPieceId, e));
  let g = new Set(),
    _ = [];
  for (let e of a) {
    let t = Av(e);
    ((s(e) && !f(e)) ||
      (i.preserveLocked && jv(e)) ||
      (i.preserveEdits && !s(e) && c(e))) &&
    !Uv(e, t, p, h) &&
    t
      ? g.add(t)
      : _.push(e);
  }
  let v = Wv(e, t, _),
    y = [];
  for (let n of m) {
    let r = n.userData.layoutPieceId;
    if (g.has(r)) {
      Ov(n);
      continue;
    }
    y.push(new Bh(e, t, n));
  }
  let b = [];
  if (i.setLayout) {
    let a = i.setLayout;
    b.push(
      new kv(
        e,
        t,
        () => a(n),
        () => a(r),
      ),
    );
  }
  b.push(...v, ...y);
  let x = new Uh(e, t, b);
  return ((x.name = `Generate Level (seed ${n.seed})`), x);
}
function Kv(e, t) {
  if (!(
    Math.abs(e.position.x - t.position.x) < Dv &&
    Math.abs(e.position.y - t.position.y) < Dv &&
    Math.abs(e.position.z - t.position.z) < Dv
  ))
    return !1;
  let n = e.userData.dims,
    r = t.userData.dims;
  return !n && !r
    ? Math.abs(e.rotation.y - t.rotation.y) < Dv
    : !!n &&
        !!r &&
        Math.abs(n.w - r.w) < Dv &&
        Math.abs(n.h - r.h) < Dv &&
        Math.abs(n.d - r.d) < Dv;
}
function qv(e, t, n, r, i = {}) {
  let a = new Map(),
    o = [];
  Mv(e).forEach((e) => {
    let t = Av(e);
    if (!t) return;
    let n = a.get(t);
    (n && o.push(n), a.set(t, e));
  });
  let s = null,
    c = () => ((s ||= r ? Iv(r) : new Map()), s),
    l = (e) => !!(e.userData.assetId && e.userData.modelPath),
    u = (e) => {
      let t = Av(e);
      if (!t) return !1;
      let n = c().get(t);
      return n ? Pv(e, n) : !1;
    },
    d = new Set([`floor`, `wall`, `corridor_wall`, `arena_wall`, `ceiling`]),
    f = (e) => Zi(r.params, e) !== Zi(n.params, e),
    p =
      !!r?.params &&
      (r.params.perCellTiling !== n.params.perCellTiling ||
        f(`room`) ||
        f(`arena`)),
    m = (e) => l(e) && !(p && d.has(e.userData.procKind)),
    h = (e, t) => jv(e) || m(e) || (!!t && Kv(e, t)) || (!l(e) && u(e)),
    g = zv(n, !0),
    _ = Zg(n),
    v = new Map();
  _.forEach((e) => v.set(e.userData.layoutPieceId, e));
  let y = (e, t) => Uv(e, t, g, v),
    b = [...o],
    x = [],
    S = new Set();
  for (let [n, r] of a) {
    S.add(n);
    let i = v.get(n);
    if (i) h(r, i) && !y(r, n) ? Ov(i) : (b.push(r), x.push(new Bh(e, t, i)));
    else {
      if (h(r) && !y(r, n)) continue;
      b.push(r);
    }
  }
  for (let n of _) {
    let r = n.userData.layoutPieceId;
    if (!S.has(r)) {
      if (c().has(r)) {
        Ov(n);
        continue;
      }
      x.push(new Bh(e, t, n));
    }
  }
  let C = [],
    w = b.length > 0 || x.length > 0,
    T = !!r && n.zones !== r.zones;
  (i.onApply &&
    i.onRevert &&
    (w || T) &&
    C.push(new kv(e, t, i.onApply, i.onRevert)),
    C.push(...Wv(e, t, b), ...x));
  let E = new Uh(e, t, C);
  return ((E.name = `Apply Paint`), E);
}
function Jv(e, t, n, r) {
  let i = [];
  (r &&
    i.push(
      new kv(
        e,
        t,
        () => r(null),
        () => r(n),
      ),
    ),
    i.push(...Wv(e, t, Mv(e))));
  let a = new Uh(e, t, i);
  return ((a.name = `Reset Procedural Level`), a);
}
function Yv(e, t, n) {
  let r = e.pivots ?? {},
    i = new Map();
  for (let t of Zg(e)) {
    let e = t.userData.dims;
    (e &&
      i.set(String(t.userData.layoutPieceId), {
        d: e,
        kind: String(t.userData.procKind),
      }),
      Ov(t));
  }
  let a = {},
    o = new R(),
    s = new be(),
    c = 0,
    l = 0;
  for (let [e, u] of Object.entries(t)) {
    if (!u.transform) {
      a[e] = u;
      continue;
    }
    let t = i.get(e);
    if (!t) {
      l++;
      continue;
    }
    let d = u.pivotMode ?? r[t.kind] ?? `min-corner`,
      f = u.pivotMode ?? n[t.kind] ?? `min-corner`;
    if (d === f) {
      a[e] = u;
      continue;
    }
    let [p, m, h] = u.transform.rotation,
      [g, _, v] = u.transform.scale,
      y = Sg(d, t.d.w * g, t.d.h * _, t.d.d * v)
        .sub(Sg(f, t.d.w * g, t.d.h * _, t.d.d * v))
        .applyQuaternion(o.setFromEuler(s.set(p, m, h))),
      [b, x, S] = u.transform.position;
    ((a[e] = {
      ...u,
      transform: { ...u.transform, position: [b + y.x, x + y.y, S + y.z] },
    }),
      c++);
  }
  return {
    layout: { ...e, pivots: { ...n } },
    overrides: a,
    corrected: c,
    dropped: l,
  };
}
var Xv = class extends Ks {
  wrapper;
  newAuto;
  before;
  remount;
  constructor(e, t, n, r, i) {
    (super(e, t),
      (this.type = `RepivotAssetCommand`),
      (this.name = `Re-pivot Asset`),
      (this.object = n),
      (this.wrapper = n),
      (this.newAuto = r),
      (this.remount = i),
      (this.before = {
        position: n.position.clone(),
        pivot: n.userData.pivot,
        hadPivot: `pivot` in n.userData,
        pivotAuto: n.userData.pivotAuto,
        hadAuto: `pivotAuto` in n.userData,
      }));
  }
  execute() {
    ((this.wrapper.userData.pivotAuto = this.newAuto),
      this.remount?.(this.wrapper),
      this.onObjectChange(this.wrapper));
  }
  undo() {
    (this.wrapper.position.copy(this.before.position),
      this.before.hadPivot
        ? (this.wrapper.userData.pivot = this.before.pivot)
        : delete this.wrapper.userData.pivot,
      this.before.hadAuto
        ? (this.wrapper.userData.pivotAuto = this.before.pivotAuto)
        : delete this.wrapper.userData.pivotAuto,
      this.wrapper.updateMatrixWorld(!0),
      this.remount?.(this.wrapper),
      this.onObjectChange(this.wrapper));
  }
};
function Zv(e, t, n, r, i, a) {
  let o = Yv(n, Lv(e, n), r),
    s = Mv(e),
    c = n.pivots ?? {},
    l = s.filter((e) => e.userData.assetId && e.userData.modelPath),
    u = new Set(l.map((e) => String(e.userData.layoutPieceId))),
    d = s.filter((e) => !u.has(String(e.userData.layoutPieceId))),
    f = Rv(o.layout, o.overrides, u),
    p = l
      .filter((e) => {
        if (yg(e.userData.pivotMode)) return !1;
        let t = String(
          e.userData.blockout?.procKind ?? e.userData.procKind ?? ``,
        );
        return (c[t] ?? `min-corner`) !== (r[t] ?? `min-corner`);
      })
      .map(
        (n) =>
          new Xv(
            e,
            t,
            n,
            r[
              String(n.userData.blockout?.procKind ?? n.userData.procKind ?? ``)
            ] ?? `min-corner`,
            a,
          ),
      );
  if (!d.length && !f.length && !p.length) return null;
  let m = new Uh(e, t, [
    new kv(
      e,
      t,
      () => i(o.layout),
      () => i(n),
    ),
    ...Wv(e, t, d),
    ...f.map((n) => new Bh(e, t, n)),
    ...p,
  ]);
  return (
    (m.name = `Re-pivot Pieces`),
    { command: m, changed: f.length + p.length }
  );
}
function Qv(e) {
  let t = Object.keys(e).filter(
    (t) => t.startsWith(`marker:`) && e[t].transform,
  );
  if (!t.length) return { overrides: e, dropped: 0 };
  let n = { ...e };
  for (let e of t) {
    let t = { ...n[e] };
    (delete t.transform, Object.keys(t).length ? (n[e] = t) : delete n[e]);
  }
  return { overrides: n, dropped: t.length };
}
function $v(e, t) {
  let n = new Map(),
    r = new Set();
  for (let t of Zg(e)) {
    let e = String(t.userData.layoutPieceId);
    r.add(e);
    let i = t.userData.dims;
    (i && n.set(e, i), Ov(t));
  }
  let i = {},
    a = new U(),
    o = new R(),
    s = new be(),
    c = 0,
    l = 0;
  for (let [e, u] of Object.entries(t)) {
    if (!u.transform) {
      i[e] = u;
      continue;
    }
    let t = n.get(e);
    if (!t) {
      if (r.has(e)) {
        i[e] = u;
        continue;
      }
      l++;
      continue;
    }
    let [d, f, p] = u.transform.rotation,
      [m, h, g] = u.transform.scale;
    a.set((t.w * m) / 2, (t.h * h) / 2, (t.d * g) / 2).applyQuaternion(
      o.setFromEuler(s.set(d, f, p)),
    );
    let [_, v, y] = u.transform.position;
    ((i[e] = {
      ...u,
      transform: { ...u.transform, position: [_ - a.x, v - a.y, y - a.z] },
    }),
      c++);
  }
  return { overrides: i, corrected: c, dropped: l };
}
