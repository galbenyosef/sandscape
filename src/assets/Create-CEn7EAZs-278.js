// Create-CEn7EAZs 278 — jsx
// Lines 94214-94555 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function p8({
  selectedEffector: e,
  ikEnabled: t,
  attachable: n,
  selectedBoneName: r,
}) {
  return e && t.includes(e) && n.includes(e)
    ? { kind: `effector`, effector: e }
    : r
      ? { kind: `bone`, boneName: r }
      : { kind: `none` };
}
function m8(e, t) {
  return e.kind === `none`
    ? !1
    : e.kind === `bone`
      ? !0
      : t === `scale`
        ? !1
        : t !== `rotate` || e.effector !== `head`;
}
var h8 = ({ active: e, disabled: t, onClick: n, icon: r, title: i }) =>
    (0, Z.jsx)(`button`, {
      onClick: n,
      disabled: t,
      title: i,
      className: `p-1.5 rounded-lg transition-colors ${e ? `bg-primary/25 text-primary` : `text-muted-foreground hover:bg-accent hover:text-foreground`} disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent`,
      children: r,
    }),
  Whe = () =>
    (0, Z.jsx)(`div`, { className: `w-px h-3.5 bg-border/50 mx-0.5` }),
  Ghe = () => {
    let {
        boneGizmoMode: e,
        ikGizmoMode: t,
        gizmoSpace: n,
        selectedBoneName: r,
        selectedEffector: i,
        ikEnabled: a,
        attachableEffectors: o,
        setBoneGizmoMode: s,
        setIkGizmoMode: c,
        setGizmoSpace: l,
      } = L6(),
      u = p8({
        selectedEffector: i,
        ikEnabled: a,
        attachable: o,
        selectedBoneName: r,
      }),
      d = u.kind === `effector`,
      f = d && !m8(u, `rotate`),
      p = d ? t : e,
      m = u.kind !== `none`,
      h = `w-4 h-4`;
    return (0, Z.jsxs)(`div`, {
      className: `absolute top-2 left-2 z-10 flex items-center gap-0.5 px-1.5 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg`,
      children: [
        (0, Z.jsx)(h8, {
          active: p === `translate`,
          disabled: !m8(u, `translate`),
          onClick: () => (d ? c(`translate`) : s(`translate`)),
          icon: (0, Z.jsx)(w, { className: h }),
          title: `Move`,
        }),
        (0, Z.jsx)(h8, {
          active: p === `rotate`,
          disabled: !m8(u, `rotate`),
          onClick: () => (d ? c(`rotate`) : s(`rotate`)),
          icon: (0, Z.jsx)(D, { className: h }),
          title: f ? `The head controller aims — it has no rotation` : `Rotate`,
        }),
        (0, Z.jsx)(h8, {
          active: p === `scale`,
          disabled: !m8(u, `scale`),
          onClick: () => s(`scale`),
          icon: (0, Z.jsx)(rn, { className: h }),
          title: d ? `Scale applies to a bone, not an IK controller` : `Scale`,
        }),
        (0, Z.jsx)(Whe, {}),
        (0, Z.jsx)(h8, {
          active: n === `world`,
          disabled: !m || p === `scale`,
          onClick: () => l(n === `local` ? `world` : `local`),
          icon:
            n === `world`
              ? (0, Z.jsx)(De, { className: h })
              : (0, Z.jsx)(I, { className: h }),
          title:
            p === `scale`
              ? `Scale is always local`
              : `Space: ${n} (click to toggle)`,
        }),
      ],
    });
  };
function g8(e) {
  return e.onCanvas && e.movedPx < 4;
}
function Khe(e) {
  return g8(e) ? !e.modifier : !1;
}
var _8 = 0.001;
function v8(e, t) {
  return !(e > 0) || !(t > 0) ? 0 : Math.floor(e * t + _8);
}
function y8(e, t) {
  return t > 0 ? Math.max(0, Math.floor(e * t + _8)) : 0;
}
function qhe(e, t, n) {
  return n > 0 ? t + ((((e - t) % n) + n) % n) : t;
}
var b8 = [`root`, `Root`, `Hips`, `hips`, `mixamorigHips`, `Armature`],
  Jhe = T6.hips,
  Yhe = {
    hand_l: [`upperarm_l`, `lowerarm_l`, `hand_l`],
    hand_r: [`upperarm_r`, `lowerarm_r`, `hand_r`],
    foot_l: [`thigh_l`, `calf_l`, `foot_l`],
    foot_r: [`thigh_r`, `calf_r`, `foot_r`],
  },
  Xhe = {
    hand_l: [0, 0, 1],
    hand_r: [0, 0, 1],
    foot_l: [0, 0, -1],
    foot_r: [0, 0, -1],
  },
  Zhe = `head`;
function x8(e) {
  let t = [];
  return (
    e.traverse((e) => {
      e.isBone && t.push(e);
    }),
    t
  );
}
function S8(e, t) {
  let n = t ?? new Map();
  for (let t of e) {
    let e = n.get(t.name);
    (e ||
      ((e = { quaternion: new gi(), position: new Y(), scale: new Y(1, 1, 1) }),
      n.set(t.name, e)),
      e.quaternion.copy(t.quaternion),
      e.position.copy(t.position),
      e.scale.copy(t.scale));
  }
  return n;
}
function Qhe(e, t, n) {
  for (let r of e) {
    if (n && r.name === n) continue;
    let e = t.get(r.name);
    e &&
      (r.quaternion.copy(e.quaternion),
      r.position.copy(e.position),
      r.scale.copy(e.scale));
  }
}
function $he(e, t, n) {
  let r = e.get(t[0]),
    i = e.get(t[1]),
    a = e.get(t[2]);
  if (!(!r || !i || !a))
    return {
      root: r,
      mid: i,
      end: a,
      poleHint: new Y().fromArray(n).normalize(),
    };
}
function C8(e) {
  if (!e) return;
  let t = e.root.getWorldPosition(new Y()),
    n = e.mid.getWorldPosition(new Y()),
    r = e.end.getWorldPosition(new Y());
  return { H: t, A: r, leg: t.distanceTo(n) + n.distanceTo(r) };
}
function w8(e) {
  e.updateMatrixWorld(!0);
  let t = x8(e),
    n = new Map();
  for (let e of t) n.has(e.name) || n.set(e.name, e);
  let r = {};
  for (let e of t) {
    let t = e.parent;
    r[e.name] = t && t.isBone ? t.name : null;
  }
  let i = b8.map((e) => n.get(e)).find(Boolean) ?? t[0] ?? null,
    a = Jhe.map((e) => n.get(e)).find(Boolean) ?? null,
    o = {};
  for (let [e, t] of Object.entries(Yhe)) {
    let r = e,
      i = $he(n, t, Xhe[r]);
    i && (o[r] = i);
  }
  let s = n.get(Zhe) ?? null,
    c = new Y(0, 0, -1);
  if (s) {
    let e = s.getWorldQuaternion(new gi());
    (c.copy(new Y(0, 0, -1).applyQuaternion(e.invert())),
      c.lengthSq() < 1e-10 && c.set(0, 0, -1),
      c.normalize());
  }
  let l = {},
    u = C8(o.foot_l),
    d = C8(o.foot_r);
  (u && (l.l = u), d && (l.r = d));
  let f = [u?.A, d?.A]
      .filter((e) => e != null)
      .map((t) => e.worldToLocal(t.clone()).y),
    p = f.length ? Math.min(...f) : 0;
  return {
    model: e,
    bones: t,
    boneByName: n,
    parentByName: r,
    root: i,
    hips: a,
    chains: o,
    head: s,
    headForwardLocal: c,
    legRests: l,
    frame0: new Map(),
    floorLocalY: p,
  };
}
var T8 = new gi(),
  E8 = new gi(),
  D8 = new Y(),
  O8 = new Y(),
  k8 = new gi(),
  A8 = new gi();
function j8(e, t, n, r) {
  if (e.getValueSize() < r || e.times.length === 0) return null;
  let i = e.createInterpolant;
  if (typeof i != `function`) return null;
  let a = i.call(e),
    o = (e) => {
      let t = a.evaluate(e),
        n = [];
      for (let e = 0; e < r; e++) n.push(t[e]);
      return n;
    };
  return { start: o(t), end: o(n) };
}
function M8(e, t, n) {
  let r = t.outFrame - t.inFrame,
    i = Math.min(t.blendFrames, Math.floor(r / 2)),
    a = {
      bones: new Map(),
      inFrame: t.inFrame,
      outFrame: t.outFrame,
      blendFrames: i,
    };
  if (!e || !(r > 0) || i <= 0 || n <= 0) return a;
  let o = Math.fround(t.inFrame / n),
    s = Math.fround(t.outFrame / n),
    c = new Map(),
    l = (e) => {
      let t = c.get(e);
      return (
        t ||
          ((t = {
            halfQuat: new gi(),
            halfQuatInv: new gi(),
            deltaPos: new Y(),
            deltaScale: new Y(),
          }),
          c.set(e, t)),
        t
      );
    };
  for (let t of e.tracks) {
    let e = Bi.parseTrackName(t.name),
      n = e.nodeName;
    if (n) {
      if (e.propertyName === `quaternion`) {
        let e = j8(t, o, s, 4);
        if (!e) continue;
        (T8.set(e.start[0], e.start[1], e.start[2], e.start[3]),
          E8.set(e.end[0], e.end[1], e.end[2], e.end[3]));
        let r = T8.clone().multiply(E8.clone().invert());
        r.w < 0 && r.set(-r.x, -r.y, -r.z, -r.w);
        let i = k8.clone().slerp(r, 0.5),
          a = l(n);
        (a.halfQuat.copy(i), a.halfQuatInv.copy(i).invert());
      } else if (e.propertyName === `position`) {
        let e = j8(t, o, s, 3);
        if (!e) continue;
        (D8.fromArray(e.start),
          O8.fromArray(e.end),
          l(n).deltaPos.subVectors(D8, O8));
      } else if (e.propertyName === `scale`) {
        let e = j8(t, o, s, 3);
        if (!e) continue;
        (D8.fromArray(e.start),
          O8.fromArray(e.end),
          l(n).deltaScale.subVectors(D8, O8));
      }
    }
  }
  return { bones: c, inFrame: t.inFrame, outFrame: t.outFrame, blendFrames: i };
}
function N8(e, t, n) {
  if (!t || t.bones.size === 0) return;
  let { inFrame: r, outFrame: i, blendFrames: a } = t;
  if (!(i > r) || a <= 0) return;
  let o = i - n,
    s = n - r,
    c,
    l;
  if (o >= 0 && o < a) ((c = 1 - o / a), (l = !1));
  else if (s >= 0 && s < a) ((c = 1 - s / a), (l = !0));
  else return;
  if (!(c <= 0))
    for (let n of e) {
      let e = t.bones.get(n.name);
      if (!e) continue;
      (A8.copy(k8).slerp(l ? e.halfQuatInv : e.halfQuat, c),
        n.quaternion.premultiply(A8));
      let r = l ? -0.5 : 0.5;
      (n.position.addScaledVector(e.deltaPos, r * c),
        n.scale.addScaledVector(e.deltaScale, r * c));
    }
}
function P8(e, t) {
  return S8(e, t);
}
function F8(e, t, n) {
  Qhe(e, t, n);
}
function I8(e, t) {
  let n = new Map();
  for (let r of e) {
    let e = t(r),
      i = n.get(e);
    i ? i.push(r) : n.set(e, [r]);
  }
  for (let e of n.values()) e.sort((e, t) => e.frame - t.frame);
  return n;
}
