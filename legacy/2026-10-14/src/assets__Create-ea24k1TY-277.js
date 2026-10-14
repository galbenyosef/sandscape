// assets__Create-ea24k1TY 277 — rotation
// Lines 93777-94055 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function R8(e, t) {
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
var z8 = Math.PI / 180;
function xhe(e) {
  return L8(e, (e) => e.boneName);
}
var B8 = (e, t, n) => [
  e[0] + (t[0] - e[0]) * n,
  e[1] + (t[1] - e[1]) * n,
  e[2] + (t[2] - e[2]) * n,
];
function V8(e) {
  return {
    rotation: e.rotation ?? k6,
    position: e.position ?? A6,
    scale: e.scale ?? j6,
  };
}
function She(e, t) {
  let n = R8(e, t);
  if (!n) return null;
  if (n.kind === `hold`) return V8(n.key);
  let r = V8(n.a),
    i = V8(n.b);
  return {
    rotation: B8(r.rotation, i.rotation, n.t),
    position: B8(r.position, i.position, n.t),
    scale: B8(r.scale, i.scale, n.t),
  };
}
var H8 = new Ei(),
  U8 = new _i();
function Che(e, t, n, r) {
  for (let [i, a] of t) {
    if (r && i === r) continue;
    let t = e.boneByName.get(i);
    if (!t) continue;
    let o = She(a, n);
    if (!o) continue;
    let s = o.rotation;
    (s[0] !== 0 || s[1] !== 0 || s[2] !== 0) &&
      (H8.set(s[0] * z8, s[1] * z8, s[2] * z8, `XYZ`),
      U8.setFromEuler(H8),
      t.quaternion.multiply(U8));
    let c = o.position;
    (c[0] !== 0 || c[1] !== 0 || c[2] !== 0) &&
      ((t.position.x += c[0]), (t.position.y += c[1]), (t.position.z += c[2]));
    let l = o.scale;
    (l[0] !== 1 || l[1] !== 1 || l[2] !== 1) &&
      ((t.scale.x *= l[0]), (t.scale.y *= l[1]), (t.scale.z *= l[2]));
  }
}
var whe = 0.004;
function W8(e) {
  if (!e || e.leg <= 1e-6) return null;
  let t = new Y().subVectors(e.A, e.H).divideScalar(e.leg);
  return Math.min(0.999, Math.max(0.5, t.length() - whe));
}
var The = new Y(),
  Ehe = new Y(),
  Dhe = new _i(),
  Ohe = new _i(),
  G8 = new _i();
function K8(e, t, n) {
  if (t.lengthSq() < 1e-12 || n.lengthSq() < 1e-12) return;
  let r = Dhe.setFromUnitVectors(
      The.copy(t).normalize(),
      Ehe.copy(n).normalize(),
    ).multiply(e.getWorldQuaternion(Ohe)),
    i = e.parent ? e.parent.getWorldQuaternion(G8) : G8.identity();
  e.quaternion.copy(i.invert().multiply(r));
}
var khe = 0.02,
  Ahe = 0.1,
  q8 = new Y(),
  J8 = new Y();
function Y8(e, t, n, r, i, a) {
  (q8.subVectors(e, t), q8.addScaledVector(n, -q8.dot(n)));
  let o = r > 1e-9 ? q8.length() / r : 0;
  if (
    i &&
    i.lengthSq() > 1e-12 &&
    (J8.copy(i), J8.addScaledVector(n, -J8.dot(n)), J8.lengthSq() > 1e-10)
  ) {
    let e = Si.smoothstep(o, khe, Ahe);
    if (
      (J8.normalize(),
      q8.lengthSq() > 1e-10
        ? (q8.normalize(),
          J8.dot(q8) < 0 && J8.negate(),
          a.copy(J8).lerp(q8, e))
        : a.copy(J8),
      a.lengthSq() > 1e-10)
    ) {
      a.normalize();
      return;
    }
  }
  (a.copy(q8),
    a.lengthSq() < 1e-10 && a.set(0, 0, 1).addScaledVector(n, -n.z),
    a.normalize());
}
var jhe = new _i(),
  Mhe = new _i(),
  Nhe = new _i(),
  Phe = new Y(),
  Fhe = new Y(),
  Ihe = new Y(),
  Lhe = new _i(),
  Rhe = new Y(),
  zhe = new Y(),
  Bhe = new Y(),
  Vhe = new Y(),
  Hhe = new Y(),
  Uhe = new Y(),
  X8 = new _i(),
  Z8 = new Y(),
  Q8 = new Y();
function $8(e, t, n, r = 1, i, a = {}) {
  let { root: o, mid: s, end: c } = e;
  if (r <= 0) return !1;
  let l = jhe.copy(o.quaternion),
    u = Mhe.copy(s.quaternion),
    d = Nhe.copy(c.quaternion),
    f = o.getWorldPosition(Phe),
    p = s.getWorldPosition(Fhe),
    m = c.getWorldPosition(Ihe),
    h = c.getWorldQuaternion(Lhe),
    g = f.distanceTo(p),
    _ = p.distanceTo(m);
  if (g < 1e-6 || _ < 1e-6) return !1;
  let v = Rhe.subVectors(t, f),
    y = (g + _) * (n == null ? 1 : Math.min(n, 1)) - 1e-4,
    b = Si.clamp(
      v.length(),
      Math.abs(g - _) + 1e-4,
      Math.max(y, Math.abs(g - _) + 2e-4),
    );
  if (b < 1e-6) return !1;
  let x = v.normalize(),
    S = zhe;
  a.exactPole && i && i.lengthSq() > 1e-12
    ? (S.copy(i),
      S.addScaledVector(x, -S.dot(x)),
      S.lengthSq() < 1e-10 ? Y8(p, f, x, g, i, S) : S.normalize())
    : Y8(p, f, x, g, i, S);
  let C = Si.clamp((g * g + b * b - _ * _) / (2 * g * b), -1, 1),
    w = Math.sqrt(Math.max(0, 1 - C * C)),
    T = Bhe.copy(f)
      .addScaledVector(x, g * C)
      .addScaledVector(S, g * w),
    E = Vhe.copy(f).addScaledVector(x, b);
  K8(o, Z8.subVectors(p, f), Q8.subVectors(T, f));
  let D = s.getWorldPosition(Hhe),
    O = c.getWorldPosition(Uhe);
  K8(s, Z8.subVectors(O, D), Q8.subVectors(E, D));
  let k = c.parent ? c.parent.getWorldQuaternion(X8) : X8.identity();
  return (
    c.quaternion.copy(k.invert().multiply(h)),
    r < 1 &&
      (o.quaternion.copy(l.slerp(o.quaternion, r)),
      s.quaternion.copy(u.slerp(s.quaternion, r)),
      c.quaternion.copy(d.slerp(c.quaternion, r))),
    !0
  );
}
function Whe(e, t, n, r = 1) {
  if (r <= 0) return;
  let i = e.quaternion.clone(),
    a = e.getWorldQuaternion(new _i()),
    o = t.clone().applyQuaternion(a),
    s = e.getWorldPosition(new Y()),
    c = new Y().subVectors(n, s);
  c.lengthSq() < 1e-10 ||
    (K8(e, o, c), r < 1 && e.quaternion.copy(i.slerp(e.quaternion, r)));
}
var e5 = Math.PI / 180;
function Ghe(e) {
  return L8(e, (e) => e.effector);
}
var t5 = new _i(),
  n5 = new _i(),
  r5 = new Ei();
function i5(e, t) {
  return (r5.set(e[0] * e5, e[1] * e5, e[2] * e5, `XYZ`), t.setFromEuler(r5));
}
var a5 = { offset: new Y(0, 0, 0), rotation: null, weight: 1 };
function o5(e) {
  return !e.rotation && e.offset.lengthSq() <= O6 * O6;
}
function Khe(e, t) {
  let n = (e) => ({
      offset: new Y().fromArray(e.offset),
      rotation: e.rotation ? i5(e.rotation, new _i()) : null,
      weight: e.weight,
    }),
    r = R8(e, t);
  if (!r) return null;
  if (r.kind === `hold`) return n(r.key);
  let { a: i, b: a, t: o } = r,
    s = new Y().fromArray(i.offset).lerp(new Y().fromArray(a.offset), o),
    c = null;
  return (
    i.rotation && a.rotation
      ? (c = i5(i.rotation, t5).clone().slerp(i5(a.rotation, n5), o))
      : i.rotation
        ? (c = new _i().slerp(i5(i.rotation, t5), 1 - o))
        : a.rotation && (c = new _i().slerp(i5(a.rotation, n5), o)),
    { offset: s, rotation: c, weight: i.weight + (a.weight - i.weight) * o }
  );
}
function s5(e, t, n) {
  let r = e.get(t);
  return !r || r.length === 0 ? a5 : (Khe(r, n) ?? a5);
}
function qhe(e, t, n) {
  let r = new Set();
  for (let i of [`l`, `r`]) {
    let a = `foot_${i}`;
    if (!e.has(a)) continue;
    let o = s5(t, a, n);
    o.weight > 0 && !o5(o) && r.add(i);
  }
  return r;
}
var c5 = new Y(),
  l5 = new vi(),
  u5 = new _i(),
  d5 = new _i(),
  f5 = new Y(),
  p5 = new _i(),
  m5 = new _i(),
  h5 = new _i(),
  g5 = new vi(),
  _5 = new ba(),
  v5 = new Y(),
  Jhe = 0.5;
function Yhe(e, t) {
  return t === `hips`
    ? e.hips
    : t === `head`
      ? e.head
      : (e.chains[t]?.end ?? null);
}
function Xhe(e, t) {
  let n = e.get(t);
  return (
    n ||
      ((n = {
        fkPos: new Y(),
        fkQuat: new _i(),
        targetPos: new Y(),
        targetQuat: new _i(),
      }),
      e.set(t, n)),
    n
  );
}
var y5 = new Map(),
  b5 = new Map(),
  Zhe = new _i();
function Qhe(e) {
  let t = b5.get(e);
  return (t || ((t = { pos: new Y(), quat: new _i() }), b5.set(e, t)), t);
}
