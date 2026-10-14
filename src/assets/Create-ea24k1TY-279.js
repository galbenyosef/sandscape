// Create-ea24k1TY 279 — clone
// Lines 94405-94699 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function H5(e) {
  let { modelTemplate: t, clip: n, fps: r, loop: i } = e;
  if (!n || r <= 0) return null;
  let a = te(t),
    o = S8(t),
    s = S8(a),
    c = new Map();
  for (let e of o) {
    let t = e.userData?.bindQuaternion,
      n = e.userData?.bindPosition,
      r = e.userData?.bindScale;
    t instanceof _i &&
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
  let l = T8(a),
    u = new xa(a),
    d = u.clipAction(n);
  (d.setLoop(za, 1), (d.clampWhenFinished = !0), d.play());
  let f = y8(n.duration, r),
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
    C8(l.bones, l.frame0));
  let _ = i && i.blendFrames > 0 ? N8(n, i, r) : null;
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
function U5(e, t) {
  ((e.action.paused = !1), e.mixer.setTime(t));
}
function W5(e) {
  (e.mixer.stopAllAction(), e.mixer.uncacheRoot(e.clone));
}
var G5 = new Y(),
  K5 = new _i(),
  q5 = new vi(),
  J5 = new _i();
function Y5(e, t, n) {
  let r = H5(e);
  if (!r) return null;
  let { ctx: i, bones: a } = r,
    o = z5(t),
    s = new Map(),
    c = new Map();
  for (let e = 0; e <= r.frames; e++)
    (I8(a, s),
      U5(r, r.timeAt(e)),
      F8(a, s),
      P8(a, r.seam, r.sourceFrame(e)),
      F8(a, c),
      B5(i, c, t, r.sourceFrame(e), { prepared: o }),
      i.model.updateMatrixWorld(!0),
      n(i, r.sourceFrame(e), e));
  return { ctx: i, frameOffset: r.sourceFrame(0), dispose: () => W5(r) };
}
function pge(e) {
  let t = {
      ...e.state,
      ikEnabled: [],
      plantRuntime: [],
      boneOffsets: e.state.boneOffsets.map(({ position: e, ...t }) => t),
    },
    n = new Y(),
    r = 0,
    i = null,
    a = Y5(e, t, (e) => {
      e.hips && ((i = e.hips.name), n.add(e.hips.position), (r += 1));
    });
  if (!a) return null;
  try {
    if (!i || r === 0) return null;
    let t = a.ctx.boneByName.get(i)?.userData?.bindPosition,
      o = mge(e.modelTemplate, i) ?? (t instanceof Y ? t.clone() : null);
    if (!o) return null;
    let s = n.clone().divideScalar(r),
      c = o.clone().sub(s);
    return { boneName: i, delta: [c.x, c.y, c.z] };
  } finally {
    a.dispose();
  }
}
function mge(e, t) {
  for (let n of S8(e)) {
    if (n.name !== t) continue;
    let e = n.userData?.bindPosition;
    return e instanceof Y ? e.clone() : null;
  }
  return null;
}
function X5(e) {
  let t = e.state.footLock.keys.length > 0,
    n = M5(e.state.limbStabilize);
  if (!t && n.length === 0) return { plantRuntime: [], stabilizeRuntime: {} };
  let r = { l: [], r: [] },
    i = new Map();
  for (let e of n) i.set(e, []);
  let a = Y5(e, { ...e.state, plantRuntime: [], stabilizeRuntime: {} }, (e) => {
    if (t) {
      (q5.copy(e.model.matrixWorld).invert(),
        J5.copy(e.model.getWorldQuaternion(K5)).invert());
      for (let t of [`l`, `r`]) {
        let n = e.chains[t === `l` ? `foot_l` : `foot_r`];
        n &&
          (n.end.getWorldPosition(G5).applyMatrix4(q5),
          n.end.getWorldQuaternion(K5),
          r[t].push({
            position: G5.clone(),
            quaternion: J5.clone().multiply(K5),
          }));
      }
    }
    for (let t of n) {
      let n = e.chains[t];
      if (!n) continue;
      let r = new Y();
      (age(e, n, r), i.get(t).push(r));
    }
  });
  if (!a) return { plantRuntime: [], stabilizeRuntime: {} };
  try {
    let n = t ? nge(a.ctx, e.state.footLock, r, a.frameOffset) : [],
      o = !!e.loop && e.loop.outFrame > e.loop.inFrame,
      s = {};
    for (let [e, t] of i)
      t.length !== 0 &&
        (s[e] = { frameOffset: a.frameOffset, poles: sge(t, void 0, o) });
    return { plantRuntime: n, stabilizeRuntime: s };
  } finally {
    a.dispose();
  }
}
function hge(e, t, n) {
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
  for (let e of M5(t.limbStabilize)) i(e);
  return r;
}
async function Z5(e) {
  let t = H5(e);
  if (!t) throw Error(`no clip loaded to sample`);
  let n = t.frames + 1;
  if (n > 3e3)
    throw (
      W5(t),
      Error(`clip is ${n} frames, past the ${dge}-frame bake limit`)
    );
  try {
    let { ctx: r, bones: i } = t,
      a = z5(e.state),
      o = new Map(),
      s = new Map(),
      c = e.clipNodeNames,
      l = i;
    if (c && c.size > 0) {
      let t = hge(r, e.state, a),
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
      (I8(i, o),
        U5(t, t.timeAt(n)),
        F8(i, o),
        P8(i, t.seam, t.sourceFrame(n)),
        F8(i, s),
        B5(r, s, e.state, t.sourceFrame(n), { prepared: a }),
        r.model.updateMatrixWorld(!0));
      for (let e of l) {
        let t = e.quaternion;
        g.get(e.name).push([t.x, t.y, t.z, t.w]);
        let n = _.get(e.name);
        n && n.push([e.position.x, e.position.y, e.position.z]);
        let r = v.get(e.name);
        r && r.push([e.scale.x, e.scale.y, e.scale.z]);
      }
      n > 0 && n % fge === 0 && (await new Promise((e) => setTimeout(e, 0)));
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
    W5(t);
  }
}
var gge = {
  hips: 16498468,
  hand_l: 2282478,
  hand_r: 2282478,
  foot_l: 2282478,
  foot_r: 2282478,
  head: 10980346,
};
function _ge(e) {
  e.traverse((e) => {
    let t = e;
    if (!t.isMesh) return;
    t.geometry?.dispose();
    let n = t.material;
    Array.isArray(n) ? n.forEach((e) => e.dispose()) : n?.dispose();
  });
}
