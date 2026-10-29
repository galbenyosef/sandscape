// Create-CEn7EAZs 279 — rotation
// Lines 94556-94834 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function L8(e, t) {
  if (e.length === 0) return null;
  let n = e[0],
    r = e[e.length - 1];
  if (e.length === 1 || t <= n.frame) return { kind: `hold`, key: n };
  if (t >= r.frame) return { kind: `hold`, key: r };
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n],
      i = e[n + 1];
    if (r.frame <= t && t <= i.frame)
      return i.frame <= r.frame
        ? { kind: `hold`, key: r }
        : { kind: `lerp`, a: r, b: i, t: (t - r.frame) / (i.frame - r.frame) };
  }
  return { kind: `hold`, key: r };
}
var R8 = Math.PI / 180;
function ege(e) {
  return I8(e, (e) => e.boneName);
}
var z8 = (e, t, n) => [
  e[0] + (t[0] - e[0]) * n,
  e[1] + (t[1] - e[1]) * n,
  e[2] + (t[2] - e[2]) * n,
];
function B8(e) {
  return {
    rotation: e.rotation ?? O6,
    position: e.position ?? k6,
    scale: e.scale ?? A6,
  };
}
function tge(e, t) {
  let n = L8(e, t);
  if (!n) return null;
  if (n.kind === `hold`) return B8(n.key);
  let r = B8(n.a),
    i = B8(n.b);
  return {
    rotation: z8(r.rotation, i.rotation, n.t),
    position: z8(r.position, i.position, n.t),
    scale: z8(r.scale, i.scale, n.t),
  };
}
var V8 = new Di(),
  H8 = new gi();
function nge(e, t, n, r) {
  for (let [i, a] of t) {
    if (r && i === r) continue;
    let t = e.boneByName.get(i);
    if (!t) continue;
    let o = tge(a, n);
    if (!o) continue;
    let s = o.rotation;
    (s[0] !== 0 || s[1] !== 0 || s[2] !== 0) &&
      (V8.set(s[0] * R8, s[1] * R8, s[2] * R8, `XYZ`),
      H8.setFromEuler(V8),
      t.quaternion.multiply(H8));
    let c = o.position;
    (c[0] !== 0 || c[1] !== 0 || c[2] !== 0) &&
      ((t.position.x += c[0]), (t.position.y += c[1]), (t.position.z += c[2]));
    let l = o.scale;
    (l[0] !== 1 || l[1] !== 1 || l[2] !== 1) &&
      ((t.scale.x *= l[0]), (t.scale.y *= l[1]), (t.scale.z *= l[2]));
  }
}
var rge = 0.004;
function U8(e) {
  if (!e || e.leg <= 1e-6) return null;
  let t = new Y().subVectors(e.A, e.H).divideScalar(e.leg);
  return Math.min(0.999, Math.max(0.5, t.length() - rge));
}
var ige = new Y(),
  age = new Y(),
  oge = new gi(),
  sge = new gi(),
  W8 = new gi();
function G8(e, t, n) {
  if (t.lengthSq() < 1e-12 || n.lengthSq() < 1e-12) return;
  let r = oge
      .setFromUnitVectors(ige.copy(t).normalize(), age.copy(n).normalize())
      .multiply(e.getWorldQuaternion(sge)),
    i = e.parent ? e.parent.getWorldQuaternion(W8) : W8.identity();
  e.quaternion.copy(i.invert().multiply(r));
}
var cge = 0.02,
  lge = 0.1,
  K8 = new Y(),
  q8 = new Y();
function J8(e, t, n, r, i, a) {
  (K8.subVectors(e, t), K8.addScaledVector(n, -K8.dot(n)));
  let o = r > 1e-9 ? K8.length() / r : 0;
  if (
    i &&
    i.lengthSq() > 1e-12 &&
    (q8.copy(i), q8.addScaledVector(n, -q8.dot(n)), q8.lengthSq() > 1e-10)
  ) {
    let e = Ci.smoothstep(o, cge, lge);
    if (
      (q8.normalize(),
      K8.lengthSq() > 1e-10
        ? (K8.normalize(),
          q8.dot(K8) < 0 && q8.negate(),
          a.copy(q8).lerp(K8, e))
        : a.copy(q8),
      a.lengthSq() > 1e-10)
    ) {
      a.normalize();
      return;
    }
  }
  (a.copy(K8),
    a.lengthSq() < 1e-10 && a.set(0, 0, 1).addScaledVector(n, -n.z),
    a.normalize());
}
var uge = new gi(),
  dge = new gi(),
  fge = new gi(),
  pge = new Y(),
  mge = new Y(),
  hge = new Y(),
  gge = new gi(),
  _ge = new Y(),
  vge = new Y(),
  yge = new Y(),
  bge = new Y(),
  xge = new Y(),
  Sge = new Y(),
  Y8 = new gi(),
  X8 = new Y(),
  Z8 = new Y();
function Q8(e, t, n, r = 1, i, a = {}) {
  let { root: o, mid: s, end: c } = e;
  if (r <= 0) return !1;
  let l = uge.copy(o.quaternion),
    u = dge.copy(s.quaternion),
    d = fge.copy(c.quaternion),
    f = o.getWorldPosition(pge),
    p = s.getWorldPosition(mge),
    m = c.getWorldPosition(hge),
    h = c.getWorldQuaternion(gge),
    g = f.distanceTo(p),
    _ = p.distanceTo(m);
  if (g < 1e-6 || _ < 1e-6) return !1;
  let v = _ge.subVectors(t, f),
    y = (g + _) * (n == null ? 1 : Math.min(n, 1)) - 1e-4,
    b = Ci.clamp(
      v.length(),
      Math.abs(g - _) + 1e-4,
      Math.max(y, Math.abs(g - _) + 2e-4),
    );
  if (b < 1e-6) return !1;
  let x = v.normalize(),
    S = vge;
  a.exactPole && i && i.lengthSq() > 1e-12
    ? (S.copy(i),
      S.addScaledVector(x, -S.dot(x)),
      S.lengthSq() < 1e-10 ? J8(p, f, x, g, i, S) : S.normalize())
    : J8(p, f, x, g, i, S);
  let C = Ci.clamp((g * g + b * b - _ * _) / (2 * g * b), -1, 1),
    w = Math.sqrt(Math.max(0, 1 - C * C)),
    T = yge
      .copy(f)
      .addScaledVector(x, g * C)
      .addScaledVector(S, g * w),
    E = bge.copy(f).addScaledVector(x, b);
  G8(o, X8.subVectors(p, f), Z8.subVectors(T, f));
  let D = s.getWorldPosition(xge),
    O = c.getWorldPosition(Sge);
  G8(s, X8.subVectors(O, D), Z8.subVectors(E, D));
  let k = c.parent ? c.parent.getWorldQuaternion(Y8) : Y8.identity();
  return (
    c.quaternion.copy(k.invert().multiply(h)),
    r < 1 &&
      (o.quaternion.copy(l.slerp(o.quaternion, r)),
      s.quaternion.copy(u.slerp(s.quaternion, r)),
      c.quaternion.copy(d.slerp(c.quaternion, r))),
    !0
  );
}
function Cge(e, t, n, r = 1) {
  if (r <= 0) return;
  let i = e.quaternion.clone(),
    a = e.getWorldQuaternion(new gi()),
    o = t.clone().applyQuaternion(a),
    s = e.getWorldPosition(new Y()),
    c = new Y().subVectors(n, s);
  c.lengthSq() < 1e-10 ||
    (G8(e, o, c), r < 1 && e.quaternion.copy(i.slerp(e.quaternion, r)));
}
var $8 = Math.PI / 180;
function wge(e) {
  return I8(e, (e) => e.effector);
}
var e5 = new gi(),
  t5 = new gi(),
  n5 = new Di();
function r5(e, t) {
  return (n5.set(e[0] * $8, e[1] * $8, e[2] * $8, `XYZ`), t.setFromEuler(n5));
}
var i5 = { offset: new Y(0, 0, 0), rotation: null, weight: 1 };
function a5(e) {
  return !e.rotation && e.offset.lengthSq() <= D6 * D6;
}
function Tge(e, t) {
  let n = (e) => ({
      offset: new Y().fromArray(e.offset),
      rotation: e.rotation ? r5(e.rotation, new gi()) : null,
      weight: e.weight,
    }),
    r = L8(e, t);
  if (!r) return null;
  if (r.kind === `hold`) return n(r.key);
  let { a: i, b: a, t: o } = r,
    s = new Y().fromArray(i.offset).lerp(new Y().fromArray(a.offset), o),
    c = null;
  return (
    i.rotation && a.rotation
      ? (c = r5(i.rotation, e5).clone().slerp(r5(a.rotation, t5), o))
      : i.rotation
        ? (c = new gi().slerp(r5(i.rotation, e5), 1 - o))
        : a.rotation && (c = new gi().slerp(r5(a.rotation, t5), o)),
    { offset: s, rotation: c, weight: i.weight + (a.weight - i.weight) * o }
  );
}
function o5(e, t, n) {
  let r = e.get(t);
  return !r || r.length === 0 ? i5 : (Tge(r, n) ?? i5);
}
function Ege(e, t, n) {
  let r = new Set();
  for (let i of [`l`, `r`]) {
    let a = `foot_${i}`;
    if (!e.has(a)) continue;
    let o = o5(t, a, n);
    o.weight > 0 && !a5(o) && r.add(i);
  }
  return r;
}
var s5 = new Y(),
  c5 = new _i(),
  l5 = new gi(),
  u5 = new gi(),
  d5 = new Y(),
  f5 = new gi(),
  p5 = new gi(),
  m5 = new gi(),
  h5 = new _i(),
  g5 = new Wee(),
  _5 = new Y(),
  Dge = 0.5;
function Oge(e, t) {
  return t === `hips`
    ? e.hips
    : t === `head`
      ? e.head
      : (e.chains[t]?.end ?? null);
}
function kge(e, t) {
  let n = e.get(t);
  return (
    n ||
      ((n = {
        fkPos: new Y(),
        fkQuat: new gi(),
        targetPos: new Y(),
        targetQuat: new gi(),
      }),
      e.set(t, n)),
    n
  );
}
var v5 = new Map(),
  y5 = new Map(),
  Age = new gi();
function jge(e) {
  let t = y5.get(e);
  return (t || ((t = { pos: new Y(), quat: new gi() }), y5.set(e, t)), t);
}
