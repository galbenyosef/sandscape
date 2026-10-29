// Create-CEn7EAZs 281 — clone
// Lines 95184-95478 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function V5(e) {
  let { modelTemplate: t, clip: n, fps: r, loop: i } = e;
  if (!n || r <= 0) return null;
  let a = ne(t),
    o = x8(t),
    s = x8(a),
    c = new Map();
  for (let e of o) {
    let t = e.userData?.bindQuaternion,
      n = e.userData?.bindPosition,
      r = e.userData?.bindScale;
    t instanceof gi &&
      n instanceof Y &&
      c.set(e.name, {
        quaternion: t.clone(),
        position: n.clone(),
        scale: r instanceof Y ? r.clone() : new Y(1, 1, 1),
      });
  }
  for (let e of s) {
    let t = c.get(e.name);
    (t &&
      (e.quaternion.copy(t.quaternion),
      e.position.copy(t.position),
      e.scale.copy(t.scale)),
      (e.userData = {}));
  }
  let l = w8(a),
    u = new da(a),
    d = u.clipAction(n);
  (d.setLoop(Da, 1), (d.clampWhenFinished = !0), d.play());
  let f = v8(n.duration, r),
    p,
    m,
    h,
    g = (e) => Math.fround(e / r);
  (i && i.outFrame > i.inFrame
    ? ((p = i.outFrame - i.inFrame),
      (m = (e) => i.inFrame + e),
      (h = (e) => g(i.inFrame + e)))
    : ((p = f), (m = (e) => e), (h = (e) => g(e))),
    (d.paused = !1),
    u.setTime(0),
    S8(l.bones, l.frame0));
  let _ = i && i.blendFrames > 0 ? M8(n, i, r) : null;
  return {
    ctx: l,
    mixer: u,
    action: d,
    bones: l.bones,
    clone: a,
    seam: _,
    frames: p,
    sourceFrame: m,
    timeAt: h,
  };
}
function H5(e, t) {
  ((e.action.paused = !1), e.mixer.setTime(t));
}
function U5(e) {
  (e.mixer.stopAllAction(), e.mixer.uncacheRoot(e.clone));
}
var W5 = new Y(),
  G5 = new gi(),
  K5 = new _i(),
  q5 = new gi();
function J5(e, t, n) {
  let r = V5(e);
  if (!r) return null;
  let { ctx: i, bones: a } = r,
    o = R5(t),
    s = new Map(),
    c = new Map();
  for (let e = 0; e <= r.frames; e++)
    (F8(a, s),
      H5(r, r.timeAt(e)),
      P8(a, s),
      N8(a, r.seam, r.sourceFrame(e)),
      P8(a, c),
      z5(i, c, t, r.sourceFrame(e), { prepared: o }),
      i.model.updateMatrixWorld(!0),
      n(i, r.sourceFrame(e), e));
  return { ctx: i, frameOffset: r.sourceFrame(0), dispose: () => U5(r) };
}
function Kge(e) {
  let t = {
      ...e.state,
      ikEnabled: [],
      plantRuntime: [],
      boneOffsets: e.state.boneOffsets.map(({ position: e, ...t }) => t),
    },
    n = new Y(),
    r = 0,
    i = null,
    a = J5(e, t, (e) => {
      e.hips && ((i = e.hips.name), n.add(e.hips.position), (r += 1));
    });
  if (!a) return null;
  try {
    if (!i || r === 0) return null;
    let t = a.ctx.boneByName.get(i)?.userData?.bindPosition,
      o = qge(e.modelTemplate, i) ?? (t instanceof Y ? t.clone() : null);
    if (!o) return null;
    let s = n.clone().divideScalar(r),
      c = o.clone().sub(s);
    return { boneName: i, delta: [c.x, c.y, c.z] };
  } finally {
    a.dispose();
  }
}
function qge(e, t) {
  for (let n of x8(e)) {
    if (n.name !== t) continue;
    let e = n.userData?.bindPosition;
    return e instanceof Y ? e.clone() : null;
  }
  return null;
}
function Y5(e) {
  let t = e.state.footLock.keys.length > 0,
    n = j5(e.state.limbStabilize);
  if (!t && n.length === 0) return { plantRuntime: [], stabilizeRuntime: {} };
  let r = { l: [], r: [] },
    i = new Map();
  for (let e of n) i.set(e, []);
  let a = J5(e, { ...e.state, plantRuntime: [], stabilizeRuntime: {} }, (e) => {
    if (t) {
      (K5.copy(e.model.matrixWorld).invert(),
        q5.copy(e.model.getWorldQuaternion(G5)).invert());
      for (let t of [`l`, `r`]) {
        let n = e.chains[t === `l` ? `foot_l` : `foot_r`];
        n &&
          (n.end.getWorldPosition(W5).applyMatrix4(K5),
          n.end.getWorldQuaternion(G5),
          r[t].push({
            position: W5.clone(),
            quaternion: q5.clone().multiply(G5),
          }));
      }
    }
    for (let t of n) {
      let n = e.chains[t];
      if (!n) continue;
      let r = new Y();
      (Rge(e, n, r), i.get(t).push(r));
    }
  });
  if (!a) return { plantRuntime: [], stabilizeRuntime: {} };
  try {
    let n = t ? Fge(a.ctx, e.state.footLock, r, a.frameOffset) : [],
      o = !!e.loop && e.loop.outFrame > e.loop.inFrame,
      s = {};
    for (let [e, t] of i)
      t.length !== 0 &&
        (s[e] = { frameOffset: a.frameOffset, poles: Bge(t, void 0, o) });
    return { plantRuntime: n, stabilizeRuntime: s };
  } finally {
    a.dispose();
  }
}
function Jge(e, t, n) {
  let r = new Set();
  for (let e of t.boneOffsets) r.add(e.boneName);
  for (let e of t.mutedBones) r.add(e);
  let i = (t) => {
    if (t === `hips`) {
      e.hips && r.add(e.hips.name);
      return;
    }
    if (t === `head`) {
      e.head && r.add(e.head.name);
      return;
    }
    let n = e.chains[t];
    n && (r.add(n.root.name), r.add(n.mid.name), r.add(n.end.name));
  };
  for (let e of n.ikEnabled) i(e);
  for (let e of t.plantRuntime) i(e.foot === `l` ? `foot_l` : `foot_r`);
  for (let e of j5(t.limbStabilize)) i(e);
  return r;
}
async function X5(e) {
  let t = V5(e);
  if (!t) throw Error(`no clip loaded to sample`);
  let n = t.frames + 1;
  if (n > 3e3)
    throw (
      U5(t),
      Error(`clip is ${n} frames, past the ${Wge}-frame bake limit`)
    );
  try {
    let { ctx: r, bones: i } = t,
      a = R5(e.state),
      o = new Map(),
      s = new Map(),
      c = e.clipNodeNames,
      l = i;
    if (c && c.size > 0) {
      let t = Jge(r, e.state, a),
        n = [];
      for (let e of t) c.has(e) || n.push(e);
      if (n.length > 0)
        throw Error(
          `the clip file has no ${n.length === 1 ? `bone` : `bones`} ${n.sort().join(`, `)}, but ${n.length === 1 ? `it carries` : `they carry`} edits — this clip was retargeted onto a different skeleton than the one loaded`,
        );
      if (((l = i.filter((e) => c.has(e.name))), l.length === 0))
        throw Error(`no bone of this character appears in the clip file`);
    }
    let u = new Set(e.state.mutedBones),
      d = new Set(),
      f = new Set();
    for (let t of e.clip.tracks)
      t.name.endsWith(`.position`)
        ? d.add(t.name.slice(0, t.name.length - 9))
        : t.name.endsWith(`.scale`) &&
          f.add(t.name.slice(0, t.name.length - 6));
    let p =
        a.ikEnabled.has(`hips`) && a.ikByEffector.has(`hips`)
          ? (r.hips?.name ?? null)
          : null,
      m = (e) =>
        u.has(e) ||
        d.has(e) ||
        a.translatedBones.has(e) ||
        e === p ||
        e === r.root?.name,
      h = (e) => f.has(e) || a.scaledBones.has(e),
      g = new Map(),
      _ = new Map(),
      v = new Map();
    for (let e of l)
      (g.set(e.name, []),
        m(e.name) && _.set(e.name, []),
        h(e.name) && v.set(e.name, []));
    for (let n = 0; n <= t.frames; n++) {
      (F8(i, o),
        H5(t, t.timeAt(n)),
        P8(i, o),
        N8(i, t.seam, t.sourceFrame(n)),
        P8(i, s),
        z5(r, s, e.state, t.sourceFrame(n), { prepared: a }),
        r.model.updateMatrixWorld(!0));
      for (let e of l) {
        let t = e.quaternion;
        g.get(e.name).push([t.x, t.y, t.z, t.w]);
        let n = _.get(e.name);
        n && n.push([e.position.x, e.position.y, e.position.z]);
        let r = v.get(e.name);
        r && r.push([e.scale.x, e.scale.y, e.scale.z]);
      }
      n > 0 && n % Gge === 0 && (await new Promise((e) => setTimeout(e, 0)));
    }
    if (e.loop && e.loop.outFrame > e.loop.inFrame && n > 1) {
      for (let e of g.values()) e[e.length - 1] = [...e[0]];
      for (let e of _.values()) e[e.length - 1] = [...e[0]];
      for (let e of v.values()) e[e.length - 1] = [...e[0]];
    }
    let y = {};
    for (let [e, t] of g) {
      let n = _.get(e),
        r = v.get(e);
      ((y[e] = { rotation: t }),
        n && (y[e].translation = n),
        r && (y[e].scale = r));
    }
    let b = e.speed && e.speed > 0 ? e.speed : 1;
    return {
      fps: e.fps * b,
      frame_count: n,
      tracks: y,
      source_start_sec: t.sourceFrame(0) / e.fps,
      source_fps: e.fps,
    };
  } finally {
    U5(t);
  }
}
var Yge = {
  hips: 16498468,
  hand_l: 2282478,
  hand_r: 2282478,
  foot_l: 2282478,
  foot_r: 2282478,
  head: 10980346,
};
function Xge(e) {
  e.traverse((e) => {
    let t = e;
    if (!t.isMesh) return;
    t.geometry?.dispose();
    let n = t.material;
    Array.isArray(n) ? n.forEach((e) => e.dispose()) : n?.dispose();
  });
}
