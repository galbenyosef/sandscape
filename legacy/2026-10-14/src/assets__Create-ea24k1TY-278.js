// assets__Create-ea24k1TY 278 — copy
// Lines 94056-94404 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function $he(e, t, n, r, i) {
  if (t.size === 0) return;
  (e.model.updateMatrixWorld(!0),
    l5.copy(e.model.matrixWorld).invert(),
    e.model.getWorldQuaternion(u5),
    d5.copy(u5).invert(),
    y5.clear());
  for (let n of T6) {
    if (!t.has(n)) continue;
    let r = Yhe(e, n);
    if (!r) continue;
    let i = Qhe(n);
    if (
      (r.getWorldPosition(i.pos).applyMatrix4(l5),
      i.quat.copy(d5).multiply(r.getWorldQuaternion(Zhe)),
      n === `head`)
    ) {
      let t = (e.legRests.l?.leg ?? e.legRests.r?.leg ?? 1) * Jhe;
      i.pos.addScaledVector(
        f5.copy(e.headForwardLocal).applyQuaternion(i.quat).normalize(),
        t,
      );
    }
    y5.set(n, i);
  }
  let a = (e, t) => {
      if (!i) return;
      let n = y5.get(e);
      if (!n) return;
      let r = Xhe(i, e);
      (r.fkPos.copy(n.pos),
        r.fkQuat.copy(n.quat),
        r.targetPos.copy(n.pos).add(t.offset),
        r.targetQuat.copy(n.quat),
        t.rotation && r.targetQuat.multiply(t.rotation));
    },
    o = !1;
  if (t.has(`hips`) && e.hips) {
    let t = s5(n, `hips`, r);
    if ((a(`hips`, t), t.weight > 0 && !o5(t))) {
      let n = e.hips,
        r = n.parent;
      if (
        (r
          ? g5.copy(r.matrixWorld).invert().multiply(e.model.matrixWorld)
          : g5.copy(e.model.matrixWorld),
        _5.setFromMatrix4(g5),
        n.position.add(
          f5.copy(t.offset).multiplyScalar(t.weight).applyMatrix3(_5),
        ),
        t.rotation)
      ) {
        let e = y5.get(`hips`);
        (p5.copy(e.quat).multiply(t.rotation),
          m5.copy(u5).multiply(p5),
          r ? r.getWorldQuaternion(h5).invert() : h5.identity(),
          n.quaternion.slerp(h5.multiply(m5), t.weight));
      }
      ((o = !0), e.model.updateMatrixWorld(!0));
    }
  }
  for (let i of Yme) {
    if (!t.has(i)) continue;
    let s = y5.get(i),
      c = e.chains[i];
    if (!s || !c) continue;
    let l = s5(n, i, r);
    if ((a(i, l), l.weight <= 0 || (!o && o5(l)))) continue;
    c5.copy(s.pos).add(l.offset).applyMatrix4(e.model.matrixWorld);
    let u = i.endsWith(`_l`) ? `l` : `r`,
      d = i.startsWith(`foot`) ? W8(e.legRests[u]) : null;
    (v5.copy(c.poleHint).applyQuaternion(u5),
      $8(c, c5, d, l.weight, v5) &&
        l.rotation &&
        (p5.copy(s.quat).multiply(l.rotation),
        m5.copy(u5).multiply(p5),
        c.end.parent
          ? c.end.parent.getWorldQuaternion(h5).invert()
          : h5.identity(),
        c.end.quaternion.slerp(h5.multiply(m5), l.weight)),
      e.model.updateMatrixWorld(!0));
  }
  if (t.has(`head`) && e.head) {
    let t = y5.get(`head`),
      i = s5(n, `head`, r);
    (a(`head`, i),
      t &&
        i.weight > 0 &&
        !o5(i) &&
        (c5.copy(t.pos).add(i.offset).applyMatrix4(e.model.matrixWorld),
        Whe(e.head, e.headForwardLocal, c5, i.weight),
        e.model.updateMatrixWorld(!0)));
  }
}
var ege = 1e-4;
function x5(e) {
  return L8(e, (e) => e.foot);
}
function S5(e, t) {
  let n = R8(e, t);
  return n
    ? n.kind === `hold`
      ? n.key.weight
      : n.a.weight + (n.b.weight - n.a.weight) * n.t
    : 0;
}
function tge(e, t, n) {
  let r = [],
    i = null;
  for (let a = t; a <= n; a++) {
    let t = S5(e, a) > ege;
    t && i === null
      ? (i = a)
      : !t && i !== null && (r.push({ start: i, end: a - 1 }), (i = null));
  }
  return (i !== null && r.push({ start: i, end: n }), r);
}
function nge(e, t, n, r = 0) {
  let i = [],
    a = x5(t.keys),
    o = e.floorLocalY;
  for (let e of [`l`, `r`]) {
    let t = a.get(e);
    if (!t || t.length === 0) continue;
    let s = n[e];
    if (!s || s.length === 0) continue;
    let c = r + s.length - 1;
    for (let n of tge(t, r, c)) {
      let t = s[n.start - r];
      if (!t) continue;
      let a = t.position.clone();
      ((a.y = Math.max(a.y, o)),
        i.push({
          foot: e,
          start: n.start,
          end: n.end,
          latchPos: a,
          latchRot: t.quaternion.clone(),
        }));
    }
  }
  return i;
}
var C5 = new Y(),
  w5 = new Y(),
  T5 = new _i(),
  E5 = new Y(),
  D5 = new _i(),
  O5 = new _i(),
  k5 = new Y();
function rge(e, t, n, r, i) {
  if (n.length === 0) return;
  let a = x5(t.keys),
    o = !1;
  for (let t of n) {
    if (r.has(t.foot) || i < t.start || i > t.end) continue;
    let n = a.get(t.foot);
    if (!n) continue;
    let s = Si.clamp(S5(n, i), 0, 1);
    if (s <= 1e-4) continue;
    let c = e.chains[t.foot === `l` ? `foot_l` : `foot_r`];
    c &&
      ((o ||=
        (e.model.updateMatrixWorld(!0), e.model.getWorldQuaternion(T5), !0)),
      c.end.getWorldPosition(k5),
      w5.copy(t.latchPos).applyMatrix4(e.model.matrixWorld),
      C5.copy(k5).lerp(w5, s),
      E5.copy(c.poleHint).applyQuaternion(T5),
      $8(c, C5, W8(e.legRests[t.foot]), 1, E5),
      e.model.updateMatrixWorld(!0),
      D5.copy(T5).multiply(t.latchRot),
      c.end.parent
        ? c.end.parent.getWorldQuaternion(O5).invert()
        : O5.identity(),
      c.end.quaternion.slerp(O5.multiply(D5), s),
      e.model.updateMatrixWorld(!0));
  }
}
var A5 = [`foot_l`, `foot_r`],
  j5 = [`hand_l`, `hand_r`];
function M5(e) {
  let t = [];
  return (
    e.knees.enabled && t.push(...A5),
    e.elbows.enabled && t.push(...j5),
    t
  );
}
function ige(e, t) {
  return A5.includes(t)
    ? e.knees.enabled
      ? Si.clamp(e.knees.weight, 0, 1)
      : 0
    : j5.includes(t) && e.elbows.enabled
      ? Si.clamp(e.elbows.weight, 0, 1)
      : 0;
}
var N5 = new Y(),
  P5 = new Y(),
  F5 = new Y(),
  I5 = new Y();
function age(e, t, n) {
  let r = e.model.matrixWorld.clone().invert();
  (t.root.getWorldPosition(N5).applyMatrix4(r),
    t.mid.getWorldPosition(P5).applyMatrix4(r),
    t.end.getWorldPosition(F5).applyMatrix4(r),
    I5.subVectors(F5, N5));
  let i = I5.length();
  if (i < 1e-9) {
    n.copy(t.poleHint);
    return;
  }
  (I5.divideScalar(i), Y8(P5, N5, I5, N5.distanceTo(P5), t.poleHint, n));
}
function oge(e) {
  let t = e.map((e) => e.clone());
  for (let e = 1; e < t.length; e++) t[e].dot(t[e - 1]) < 0 && t[e].negate();
  return t;
}
function sge(e, t = 3, n = !1) {
  let r = e.length;
  if (r === 0) return [];
  let i = oge(e);
  if (t <= 0) return i;
  let a = [],
    o = new Y();
  for (let e = 0; e < r; e++) {
    o.set(0, 0, 0);
    for (let a = -t; a <= t; a++) {
      let t = e + a;
      if (n) {
        let e = r > 1 ? r - 1 : 1;
        t = ((t % e) + e) % e;
      } else t = Math.max(0, Math.min(r - 1, t));
      o.add(i[t]);
    }
    o.lengthSq() < 1e-12 ? a.push(i[e].clone()) : a.push(o.clone().normalize());
  }
  return a;
}
var L5 = new Y(),
  R5 = new Y(),
  cge = new _i();
function lge(e, t, n, r) {
  let i = M5(t);
  if (i.length !== 0)
    for (let a of i) {
      let i = ige(t, a);
      if (i <= 0) continue;
      let o = e.chains[a],
        s = n[a];
      if (!o || !s || s.poles.length === 0) continue;
      let c = Math.round(r) - s.frameOffset,
        l = s.poles[Math.max(0, Math.min(s.poles.length - 1, c))];
      l &&
        (o.end.getWorldPosition(R5),
        L5.copy(l).applyQuaternion(e.model.getWorldQuaternion(cge)),
        $8(o, R5, null, i, L5, { exactPole: !0 }),
        e.model.updateMatrixWorld(!0));
    }
}
function z5(e) {
  let t = new Set(e.ikEnabled),
    n = Ghe(e.ikKeys.filter((e) => t.has(e.effector))),
    r = new Set(),
    i = new Set();
  for (let t of e.boneOffsets) {
    let e = t.position;
    e && (e[0] !== 0 || e[1] !== 0 || e[2] !== 0) && r.add(t.boneName);
    let n = t.scale;
    n && (n[0] !== 1 || n[1] !== 1 || n[2] !== 1) && i.add(t.boneName);
  }
  return {
    offsetsByBone: xhe(e.boneOffsets),
    ikByEffector: n,
    ikEnabled: t,
    muted: new Set(e.mutedBones),
    translatedBones: r,
    scaledBones: i,
  };
}
function B5(e, t, n, r, i = {}) {
  let a = i.prepared ?? z5(n),
    o = i.skipBone;
  for (let n of e.bones) {
    if (o && n.name === o) continue;
    let r =
      (a.muted.has(n.name) ? e.frame0.get(n.name) : void 0) ?? t.get(n.name);
    r &&
      (n.quaternion.copy(r.quaternion),
      n.position.copy(r.position),
      n.scale.copy(r.scale));
  }
  let s = n.rootMotionConfig;
  (s?.stripped &&
    e.root &&
    (s.stripMode === `all`
      ? e.root.position.set(0, 0, 0)
      : ((e.root.position.x = 0), (e.root.position.z = 0))),
    a.offsetsByBone.size > 0 && Che(e, a.offsetsByBone, r, o),
    a.ikEnabled.size > 0 && $he(e, a.ikEnabled, a.ikByEffector, r, i.ikOut),
    (n.limbStabilize.knees.enabled || n.limbStabilize.elbows.enabled) &&
      lge(e, n.limbStabilize, n.stabilizeRuntime, r),
    n.plantRuntime.length > 0 &&
      rge(
        e,
        n.footLock,
        n.plantRuntime,
        qhe(a.ikEnabled, a.ikByEffector, r),
        r,
      ));
}
function uge(e, t, n, r, i) {
  let a = (n.mutedBones.includes(r) ? e.frame0.get(r) : void 0) ?? t.get(r);
  if (!a) return null;
  let o = i ?? {
    quaternion: new _i(),
    position: new Y(),
    scale: new Y(1, 1, 1),
  };
  (o.quaternion.copy(a.quaternion),
    o.position.copy(a.position),
    o.scale.copy(a.scale));
  let s = n.rootMotionConfig;
  return (
    s?.stripped &&
      e.root &&
      e.root.name === r &&
      (s.stripMode === `all`
        ? o.position.set(0, 0, 0)
        : ((o.position.x = 0), (o.position.z = 0))),
    o
  );
}
function V5() {
  return {
    boneOffsets: [],
    mutedBones: [],
    ikKeys: [],
    ikEnabled: [],
    footLock: N6(),
    plantRuntime: [],
    limbStabilize: M6(),
    stabilizeRuntime: {},
    rootMotionConfig: null,
  };
}
var dge = 3e3,
  fge = 60;
