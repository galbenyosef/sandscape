// Create-CEn7EAZs 280 — copy
// Lines 94835-95183 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Mge(e, t, n, r, i) {
  if (t.size === 0) return;
  (e.model.updateMatrixWorld(!0),
    c5.copy(e.model.matrixWorld).invert(),
    e.model.getWorldQuaternion(l5),
    u5.copy(l5).invert(),
    v5.clear());
  for (let n of w6) {
    if (!t.has(n)) continue;
    let r = Oge(e, n);
    if (!r) continue;
    let i = jge(n);
    if (
      (r.getWorldPosition(i.pos).applyMatrix4(c5),
      i.quat.copy(u5).multiply(r.getWorldQuaternion(Age)),
      n === `head`)
    ) {
      let t = (e.legRests.l?.leg ?? e.legRests.r?.leg ?? 1) * Dge;
      i.pos.addScaledVector(
        d5.copy(e.headForwardLocal).applyQuaternion(i.quat).normalize(),
        t,
      );
    }
    v5.set(n, i);
  }
  let a = (e, t) => {
      if (!i) return;
      let n = v5.get(e);
      if (!n) return;
      let r = kge(i, e);
      (r.fkPos.copy(n.pos),
        r.fkQuat.copy(n.quat),
        r.targetPos.copy(n.pos).add(t.offset),
        r.targetQuat.copy(n.quat),
        t.rotation && r.targetQuat.multiply(t.rotation));
    },
    o = !1;
  if (t.has(`hips`) && e.hips) {
    let t = o5(n, `hips`, r);
    if ((a(`hips`, t), t.weight > 0 && !a5(t))) {
      let n = e.hips,
        r = n.parent;
      if (
        (r
          ? h5.copy(r.matrixWorld).invert().multiply(e.model.matrixWorld)
          : h5.copy(e.model.matrixWorld),
        g5.setFromMatrix4(h5),
        n.position.add(
          d5.copy(t.offset).multiplyScalar(t.weight).applyMatrix3(g5),
        ),
        t.rotation)
      ) {
        let e = v5.get(`hips`);
        (f5.copy(e.quat).multiply(t.rotation),
          p5.copy(l5).multiply(f5),
          r ? r.getWorldQuaternion(m5).invert() : m5.identity(),
          n.quaternion.slerp(m5.multiply(p5), t.weight));
      }
      ((o = !0), e.model.updateMatrixWorld(!0));
    }
  }
  for (let i of Ohe) {
    if (!t.has(i)) continue;
    let s = v5.get(i),
      c = e.chains[i];
    if (!s || !c) continue;
    let l = o5(n, i, r);
    if ((a(i, l), l.weight <= 0 || (!o && a5(l)))) continue;
    s5.copy(s.pos).add(l.offset).applyMatrix4(e.model.matrixWorld);
    let u = i.endsWith(`_l`) ? `l` : `r`,
      d = i.startsWith(`foot`) ? U8(e.legRests[u]) : null;
    (_5.copy(c.poleHint).applyQuaternion(l5),
      Q8(c, s5, d, l.weight, _5) &&
        l.rotation &&
        (f5.copy(s.quat).multiply(l.rotation),
        p5.copy(l5).multiply(f5),
        c.end.parent
          ? c.end.parent.getWorldQuaternion(m5).invert()
          : m5.identity(),
        c.end.quaternion.slerp(m5.multiply(p5), l.weight)),
      e.model.updateMatrixWorld(!0));
  }
  if (t.has(`head`) && e.head) {
    let t = v5.get(`head`),
      i = o5(n, `head`, r);
    (a(`head`, i),
      t &&
        i.weight > 0 &&
        !a5(i) &&
        (s5.copy(t.pos).add(i.offset).applyMatrix4(e.model.matrixWorld),
        Cge(e.head, e.headForwardLocal, s5, i.weight),
        e.model.updateMatrixWorld(!0)));
  }
}
var Nge = 1e-4;
function b5(e) {
  return I8(e, (e) => e.foot);
}
function x5(e, t) {
  let n = L8(e, t);
  return n
    ? n.kind === `hold`
      ? n.key.weight
      : n.a.weight + (n.b.weight - n.a.weight) * n.t
    : 0;
}
function Pge(e, t, n) {
  let r = [],
    i = null;
  for (let a = t; a <= n; a++) {
    let t = x5(e, a) > Nge;
    t && i === null
      ? (i = a)
      : !t && i !== null && (r.push({ start: i, end: a - 1 }), (i = null));
  }
  return (i !== null && r.push({ start: i, end: n }), r);
}
function Fge(e, t, n, r = 0) {
  let i = [],
    a = b5(t.keys),
    o = e.floorLocalY;
  for (let e of [`l`, `r`]) {
    let t = a.get(e);
    if (!t || t.length === 0) continue;
    let s = n[e];
    if (!s || s.length === 0) continue;
    let c = r + s.length - 1;
    for (let n of Pge(t, r, c)) {
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
var S5 = new Y(),
  C5 = new Y(),
  w5 = new gi(),
  T5 = new Y(),
  E5 = new gi(),
  D5 = new gi(),
  O5 = new Y();
function Ige(e, t, n, r, i) {
  if (n.length === 0) return;
  let a = b5(t.keys),
    o = !1;
  for (let t of n) {
    if (r.has(t.foot) || i < t.start || i > t.end) continue;
    let n = a.get(t.foot);
    if (!n) continue;
    let s = Ci.clamp(x5(n, i), 0, 1);
    if (s <= 1e-4) continue;
    let c = e.chains[t.foot === `l` ? `foot_l` : `foot_r`];
    c &&
      ((o ||=
        (e.model.updateMatrixWorld(!0), e.model.getWorldQuaternion(w5), !0)),
      c.end.getWorldPosition(O5),
      C5.copy(t.latchPos).applyMatrix4(e.model.matrixWorld),
      S5.copy(O5).lerp(C5, s),
      T5.copy(c.poleHint).applyQuaternion(w5),
      Q8(c, S5, U8(e.legRests[t.foot]), 1, T5),
      e.model.updateMatrixWorld(!0),
      E5.copy(w5).multiply(t.latchRot),
      c.end.parent
        ? c.end.parent.getWorldQuaternion(D5).invert()
        : D5.identity(),
      c.end.quaternion.slerp(D5.multiply(E5), s),
      e.model.updateMatrixWorld(!0));
  }
}
var k5 = [`foot_l`, `foot_r`],
  A5 = [`hand_l`, `hand_r`];
function j5(e) {
  let t = [];
  return (
    e.knees.enabled && t.push(...k5),
    e.elbows.enabled && t.push(...A5),
    t
  );
}
function Lge(e, t) {
  return k5.includes(t)
    ? e.knees.enabled
      ? Ci.clamp(e.knees.weight, 0, 1)
      : 0
    : A5.includes(t) && e.elbows.enabled
      ? Ci.clamp(e.elbows.weight, 0, 1)
      : 0;
}
var M5 = new Y(),
  N5 = new Y(),
  P5 = new Y(),
  F5 = new Y();
function Rge(e, t, n) {
  let r = e.model.matrixWorld.clone().invert();
  (t.root.getWorldPosition(M5).applyMatrix4(r),
    t.mid.getWorldPosition(N5).applyMatrix4(r),
    t.end.getWorldPosition(P5).applyMatrix4(r),
    F5.subVectors(P5, M5));
  let i = F5.length();
  if (i < 1e-9) {
    n.copy(t.poleHint);
    return;
  }
  (F5.divideScalar(i), J8(N5, M5, F5, M5.distanceTo(N5), t.poleHint, n));
}
function zge(e) {
  let t = e.map((e) => e.clone());
  for (let e = 1; e < t.length; e++) t[e].dot(t[e - 1]) < 0 && t[e].negate();
  return t;
}
function Bge(e, t = 3, n = !1) {
  let r = e.length;
  if (r === 0) return [];
  let i = zge(e);
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
var I5 = new Y(),
  L5 = new Y(),
  Vge = new gi();
function Hge(e, t, n, r) {
  let i = j5(t);
  if (i.length !== 0)
    for (let a of i) {
      let i = Lge(t, a);
      if (i <= 0) continue;
      let o = e.chains[a],
        s = n[a];
      if (!o || !s || s.poles.length === 0) continue;
      let c = Math.round(r) - s.frameOffset,
        l = s.poles[Math.max(0, Math.min(s.poles.length - 1, c))];
      l &&
        (o.end.getWorldPosition(L5),
        I5.copy(l).applyQuaternion(e.model.getWorldQuaternion(Vge)),
        Q8(o, L5, null, i, I5, { exactPole: !0 }),
        e.model.updateMatrixWorld(!0));
    }
}
function R5(e) {
  let t = new Set(e.ikEnabled),
    n = wge(e.ikKeys.filter((e) => t.has(e.effector))),
    r = new Set(),
    i = new Set();
  for (let t of e.boneOffsets) {
    let e = t.position;
    e && (e[0] !== 0 || e[1] !== 0 || e[2] !== 0) && r.add(t.boneName);
    let n = t.scale;
    n && (n[0] !== 1 || n[1] !== 1 || n[2] !== 1) && i.add(t.boneName);
  }
  return {
    offsetsByBone: ege(e.boneOffsets),
    ikByEffector: n,
    ikEnabled: t,
    muted: new Set(e.mutedBones),
    translatedBones: r,
    scaledBones: i,
  };
}
function z5(e, t, n, r, i = {}) {
  let a = i.prepared ?? R5(n),
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
    a.offsetsByBone.size > 0 && nge(e, a.offsetsByBone, r, o),
    a.ikEnabled.size > 0 && Mge(e, a.ikEnabled, a.ikByEffector, r, i.ikOut),
    (n.limbStabilize.knees.enabled || n.limbStabilize.elbows.enabled) &&
      Hge(e, n.limbStabilize, n.stabilizeRuntime, r),
    n.plantRuntime.length > 0 &&
      Ige(
        e,
        n.footLock,
        n.plantRuntime,
        Ege(a.ikEnabled, a.ikByEffector, r),
        r,
      ));
}
function Uge(e, t, n, r, i) {
  let a = (n.mutedBones.includes(r) ? e.frame0.get(r) : void 0) ?? t.get(r);
  if (!a) return null;
  let o = i ?? {
    quaternion: new gi(),
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
function B5() {
  return {
    boneOffsets: [],
    mutedBones: [],
    ikKeys: [],
    ikEnabled: [],
    footLock: M6(),
    plantRuntime: [],
    limbStabilize: j6(),
    stabilizeRuntime: {},
    rootMotionConfig: null,
  };
}
var Wge = 3e3,
  Gge = 60;
