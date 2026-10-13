// assets__Create-ea24k1TY 270 — weight
// Lines 91027-91209 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function D6(e, t) {
  for (let n of E6[t]) if (e.has(n)) return n;
  return null;
}
var O6 = 1e-6,
  k6 = [0, 0, 0],
  A6 = [0, 0, 0],
  j6 = [1, 1, 1];
function M6() {
  return {
    knees: { enabled: !1, weight: 1 },
    elbows: { enabled: !1, weight: 1 },
  };
}
function N6() {
  return { keys: [] };
}
function P6() {
  return typeof crypto < `u` && typeof crypto.randomUUID == `function`
    ? crypto.randomUUID()
    : `k_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
var F6 = {
    characters: [],
    selectedCharacterId: null,
    selectedScope: `character`,
    selectedAnimationId: null,
    compareMode: !1,
    currentFrame: 0,
    totalFrames: 0,
    isPlaying: !1,
    playbackSpeed: 1,
    fps: 30,
    viewMode: `mesh+skeleton`,
    showGrid: !0,
    showRootMotionPath: !1,
    selectedBoneName: null,
    selectedBoneNames: [],
    boneNames: [],
    boneParents: {},
    boneOffsets: [],
    boneGizmoMode: `rotate`,
    gizmoSpace: `local`,
    selectedKey: null,
    mutedBones: [],
    ikKeys: [],
    ikEnabled: [],
    selectedEffector: null,
    attachableEffectors: [],
    ikGizmoMode: `translate`,
    footLock: N6(),
    plantRuntime: [],
    limbStabilize: M6(),
    stabilizeRuntime: {},
    bakeSampler: null,
    hipsRestMeasure: null,
    clipFileSampler: null,
    loopInFrame: 0,
    loopOutFrame: 0,
    loopBlendFrames: 8,
    loopConfigured: !1,
    isLoopPreview: !1,
    showLoopGhosts: !1,
    clipInFrame: 0,
    clipOutFrame: 0,
    positionOffset: [0, 0, 0],
    rootMotionConfig: null,
    stateMachine: null,
    selectedStateId: null,
    selectedTransitionId: null,
    activePanel: `animations`,
  },
  I6 = {
    selectedBoneName: null,
    selectedBoneNames: [],
    selectedKey: null,
    selectedEffector: null,
    plantRuntime: [],
    stabilizeRuntime: {},
  };
function Xme(e) {
  let t = new Map();
  for (let n of e) {
    let e = `${n.foot}:${n.frame}`,
      r = t.get(e);
    (!r || n.weight > r.weight) && t.set(e, n);
  }
  return [...t.values()].sort((e, t) =>
    e.foot === t.foot ? e.frame - t.frame : e.foot < t.foot ? -1 : 1,
  );
}
function Zme(e) {
  return Array.isArray(e.keys);
}
function L6(e) {
  let t = N6(),
    n = e.foot_lock,
    r = 0,
    i = !1;
  if (n)
    if (Zme(n))
      t.keys = n.keys.map((e) => ({
        id: P6(),
        foot: e.foot,
        frame: e.frame,
        weight: e.weight,
      }));
    else {
      let e = (e) => !!n[e]?.enabled;
      i = e(`left`) || e(`right`);
      for (let i of n.plant_overrides || []) {
        if (i.mode === `release` || !e(i.foot === `l` ? `left` : `right`))
          continue;
        let n = Math.max(0, i.start_frame),
          a = Math.max(n, i.end_frame),
          o = (e, n) => {
            e < 0 ||
              t.keys.push({ id: P6(), foot: i.foot, frame: e, weight: n });
          };
        (o(n - 1, 0), o(n, 1), o(a, 1), o(a + 1, 0), (r += 1));
      }
    }
  let a = e.ik_keys || [],
    o = a.filter((e) => Array.isArray(e.offset)),
    s = a.length - o.length,
    c = e.ik_enabled,
    l = new Set(c ? c.filter((e) => T6.includes(e)) : o.map((e) => e.effector)),
    u = (e.bone_offsets || []).map((e) => ({
      id: P6(),
      boneName: e.boneName,
      frame: e.frame,
      rotation: e.rotation,
      ...(e.position ? { position: e.position } : {}),
      ...(e.scale ? { scale: e.scale } : {}),
    })),
    d = e.loop_config?.out_frame ?? 0;
  return {
    layers: {
      boneOffsets: u,
      mutedBones: [...(e.muted_bones || [])],
      ikKeys: o.map((e) => ({
        id: P6(),
        effector: e.effector,
        frame: e.frame,
        offset: e.offset,
        rotation: e.rotation ?? null,
        weight: e.weight ?? 1,
      })),
      ikEnabled: T6.filter((e) => l.has(e)),
      footLock: { keys: Xme(t.keys) },
      plantRuntime: [],
      limbStabilize: {
        knees: {
          enabled: !!e.limb_stabilize?.knees?.enabled,
          weight: e.limb_stabilize?.knees?.weight ?? 1,
        },
        elbows: {
          enabled: !!e.limb_stabilize?.elbows?.enabled,
          weight: e.limb_stabilize?.elbows?.weight ?? 1,
        },
      },
      stabilizeRuntime: {},
      rootMotionConfig: e.root_motion_config
        ? {
            stripped: e.root_motion_config.stripped,
            stripMode: e.root_motion_config.strip_mode,
          }
        : null,
    },
    loop:
      e.loop_config && d > (e.loop_config.in_frame ?? 0)
        ? {
            inFrame: e.loop_config.in_frame ?? 0,
            outFrame: d,
            blendFrames: e.loop_config.blend_frames ?? 8,
          }
        : null,
    speed: e.playback_speed ?? 1,
    droppedIkKeys: s,
    convertedFootPlants: r,
    droppedFootConfig: i,
  };
}
