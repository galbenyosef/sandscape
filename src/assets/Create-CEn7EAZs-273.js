// Create-CEn7EAZs 273 — boneoffsets
// Lines 91989-92424 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var L6 = Ee((e, t) => ({
  ...P6,
  loadCharacters: (t) => e({ characters: t }),
  selectCharacter: (t) =>
    e({
      ...F6,
      selectedScope: `character`,
      selectedCharacterId: t,
      selectedAnimationId: null,
      currentFrame: 0,
      totalFrames: 0,
      isPlaying: !1,
      boneOffsets: [],
      mutedBones: [],
      ikKeys: [],
      ikEnabled: [],
      footLock: M6(),
      limbStabilize: j6(),
      clipInFrame: 0,
      clipOutFrame: 0,
      stateMachine: null,
      selectedStateId: null,
      selectedTransitionId: null,
      compareMode: !1,
    }),
  selectAnimation: (t) =>
    e({
      ...F6,
      selectedScope: `character`,
      selectedAnimationId: t,
      currentFrame: 0,
      isPlaying: !1,
      compareMode: !1,
    }),
  selectLibraryAnimation: (t) =>
    e({
      ...F6,
      selectedScope: `library`,
      selectedAnimationId: t,
      selectedCharacterId: null,
      currentFrame: 0,
      totalFrames: 0,
      isPlaying: !1,
      boneNames: [],
      boneParents: {},
      boneOffsets: [],
      mutedBones: [],
      ikKeys: [],
      footLock: M6(),
      limbStabilize: j6(),
      playbackSpeed: 1,
      clipInFrame: 0,
      clipOutFrame: 0,
      loopInFrame: 0,
      loopOutFrame: 0,
      loopBlendFrames: 8,
      loopConfigured: !1,
      isLoopPreview: !1,
      showLoopGhosts: !1,
      positionOffset: [0, 0, 0],
      rootMotionConfig: null,
      stateMachine: null,
      selectedStateId: null,
      selectedTransitionId: null,
      compareMode: !1,
    }),
  setCompareMode: (t) => e({ compareMode: t }),
  play: () => e({ isPlaying: !0 }),
  pause: () => e({ isPlaying: !1 }),
  stop: () => e({ isPlaying: !1, currentFrame: 0 }),
  setFrame: (n) =>
    e({ currentFrame: Math.max(0, Math.min(n, t().totalFrames)) }),
  stepFrame: (n) => {
    let {
        currentFrame: r,
        totalFrames: i,
        isLoopPreview: a,
        loopInFrame: o,
        loopOutFrame: s,
      } = t(),
      c = a && s > o,
      l = c ? o : 0,
      u = c ? s : i;
    if (u <= l) {
      e({ currentFrame: l });
      return;
    }
    let d;
    ((d =
      r < l || r > u
        ? n >= 0
          ? l
          : u
        : n > 0 && r >= u
          ? l
          : n < 0 && r <= l
            ? u
            : Math.max(l, Math.min(u, r + n))),
      e({ currentFrame: d }));
  },
  setTotalFrames: (n) => {
    let { loopOutFrame: r, clipOutFrame: i, totalFrames: a } = t(),
      o = r === 0 || r === a,
      s = i === 0 || i === a;
    e({
      totalFrames: n,
      ...(o ? { loopOutFrame: n } : {}),
      ...(s ? { clipOutFrame: n } : {}),
    });
  },
  setPlaybackSpeed: (t) => e({ playbackSpeed: t }),
  setFps: (t) => e({ fps: t }),
  setViewMode: (t) => e({ viewMode: t }),
  toggleGrid: () => e((e) => ({ showGrid: !e.showGrid })),
  toggleRootMotionPath: () =>
    e((e) => ({ showRootMotionPath: !e.showRootMotionPath })),
  selectBone: (t, n = `replace`) =>
    e((e) => {
      if (!t) return { selectedBoneName: null, selectedBoneNames: [] };
      if (n === `toggle`) {
        let n = e.selectedBoneNames.includes(t)
          ? e.selectedBoneNames.filter((e) => e !== t)
          : [...e.selectedBoneNames, t];
        return {
          selectedBoneNames: n,
          selectedBoneName: n[n.length - 1] ?? null,
        };
      }
      if (n === `range` && e.selectedBoneName) {
        let n = e.boneNames.indexOf(e.selectedBoneName),
          r = e.boneNames.indexOf(t);
        if (n >= 0 && r >= 0) {
          let [i, a] = n <= r ? [n, r] : [r, n],
            o = e.boneNames.slice(i, a + 1);
          return {
            selectedBoneNames: [...new Set([...e.selectedBoneNames, ...o])],
            selectedBoneName: t,
          };
        }
      }
      return { selectedBoneNames: [t], selectedBoneName: t };
    }),
  selectChildren: () =>
    e((e) => {
      let t = new Set(e.selectedBoneNames),
        n = !0;
      for (; n;) {
        n = !1;
        for (let [r, i] of Object.entries(e.boneParents))
          i && t.has(i) && !t.has(r) && (t.add(r), (n = !0));
      }
      let r = e.boneNames.filter((e) => t.has(e));
      return {
        selectedBoneNames: r,
        selectedBoneName: e.selectedBoneName ?? r[r.length - 1] ?? null,
      };
    }),
  setBoneNames: (t, n) => e({ boneNames: t, ...(n ? { boneParents: n } : {}) }),
  addBoneOffset: (t) => {
    let n = N6();
    return (
      e((e) => ({ boneOffsets: [...e.boneOffsets, { ...t, id: n }] })),
      n
    );
  },
  updateBoneOffset: (t, n) =>
    e((e) => ({
      boneOffsets: e.boneOffsets.map((e) => (e.id === t ? { ...e, ...n } : e)),
    })),
  removeBoneOffset: (t) =>
    e((e) => ({
      boneOffsets: e.boneOffsets.filter((e) => e.id !== t),
      selectedKey:
        e.selectedKey?.kind === `offset` && e.selectedKey.id === t
          ? null
          : e.selectedKey,
    })),
  removeBoneOffsets: (t) =>
    e((e) => {
      let n = new Set(t);
      return {
        boneOffsets: e.boneOffsets.filter((e) => !n.has(e.id)),
        selectedKey:
          e.selectedKey?.kind === `offset` && n.has(e.selectedKey.id)
            ? null
            : e.selectedKey,
      };
    }),
  upsertBoneOffsetAtFrame: (n, r, i) => {
    let a = t().boneOffsets.find((e) => e.boneName === n && e.frame === r);
    if (a)
      return (
        e((e) => ({
          boneOffsets: e.boneOffsets.map((e) =>
            e.id === a.id ? { ...e, ...i } : e,
          ),
        })),
        a.id
      );
    let o = N6();
    return (
      e((e) => ({
        boneOffsets: [
          ...e.boneOffsets,
          { id: o, boneName: n, frame: r, rotation: [0, 0, 0], ...i },
        ],
      })),
      o
    );
  },
  setBoneGizmoMode: (t) => e({ boneGizmoMode: t }),
  setGizmoSpace: (t) => e({ gizmoSpace: t }),
  clearBoneOffsets: () => e({ boneOffsets: [], selectedKey: null }),
  selectKey: (t) => e({ selectedKey: t }),
  setBonesMuted: (t, n) =>
    e((e) => {
      let r = new Set(e.mutedBones);
      for (let e of t) n ? r.add(e) : r.delete(e);
      let i = e.boneNames.filter((e) => r.has(e)),
        a = [...r].filter((t) => !e.boneNames.includes(t));
      return { mutedBones: [...i, ...a] };
    }),
  updateIKKey: (t, n) =>
    e((e) => ({
      ikKeys: e.ikKeys.map((e) => (e.id === t ? { ...e, ...n } : e)),
    })),
  removeIKKey: (t) =>
    e((e) => ({
      ikKeys: e.ikKeys.filter((e) => e.id !== t),
      selectedKey:
        e.selectedKey?.kind === `ik` && e.selectedKey.id === t
          ? null
          : e.selectedKey,
    })),
  upsertIKKeyAtFrame: (n, r, i) => {
    let a = t().ikKeys.find((e) => e.effector === n && e.frame === r);
    if (a)
      return (
        e((e) => ({
          ikKeys: e.ikKeys.map((e) => (e.id === a.id ? { ...e, ...i } : e)),
        })),
        a.id
      );
    let o = N6();
    return (
      e((e) => ({
        ikKeys: [...e.ikKeys, { ...i, id: o, effector: n, frame: r }],
      })),
      o
    );
  },
  selectEffector: (t) => e({ selectedEffector: t }),
  setAttachableEffectors: (t) => e({ attachableEffectors: t }),
  setIkGizmoMode: (t) => e({ ikGizmoMode: t }),
  setIKEnabled: (t, n) =>
    e((e) => {
      let r = new Set(e.ikEnabled);
      return (
        n ? r.add(t) : r.delete(t),
        {
          ikEnabled: w6.filter((e) => r.has(e)),
          selectedEffector:
            !n && e.selectedEffector === t ? null : e.selectedEffector,
        }
      );
    }),
  updateFootLockKey: (t, n) =>
    e((e) => ({
      footLock: {
        keys: e.footLock.keys.map((e) => (e.id === t ? { ...e, ...n } : e)),
      },
    })),
  removeFootLockKey: (t) =>
    e((e) => ({
      footLock: { keys: e.footLock.keys.filter((e) => e.id !== t) },
      selectedKey:
        e.selectedKey?.kind === `foot` && e.selectedKey.id === t
          ? null
          : e.selectedKey,
    })),
  upsertFootLockKeyAtFrame: (n, r, i) => {
    let a = t().footLock.keys.find((e) => e.foot === n && e.frame === r);
    if (a)
      return (
        e((e) => ({
          footLock: {
            keys: e.footLock.keys.map((e) =>
              e.id === a.id ? { ...e, weight: i } : e,
            ),
          },
        })),
        a.id
      );
    let o = N6();
    return (
      e((e) => ({
        footLock: {
          keys: [...e.footLock.keys, { id: o, foot: n, frame: r, weight: i }],
        },
      })),
      o
    );
  },
  clearFootLockKeys: (t) =>
    e((e) => {
      let n = new Set(
        e.footLock.keys.filter((e) => e.foot === t).map((e) => e.id),
      );
      return {
        footLock: { keys: e.footLock.keys.filter((e) => e.foot !== t) },
        selectedKey:
          e.selectedKey?.kind === `foot` && n.has(e.selectedKey.id)
            ? null
            : e.selectedKey,
      };
    }),
  setPlantRuntime: (t) => e({ plantRuntime: t }),
  setLimbStabilize: (t, n) =>
    e((e) => ({
      limbStabilize: {
        ...e.limbStabilize,
        [t]: { ...e.limbStabilize[t], ...n },
      },
    })),
  setStabilizeRuntime: (t) => e({ stabilizeRuntime: t }),
  matchHipsToRest: (t, n) =>
    e((e) => {
      let r = e.boneOffsets.some((e) => e.boneName === t && e.frame === 0),
        i = e.boneOffsets.map((e) =>
          e.boneName === t ? { ...e, position: n } : e,
        );
      return r
        ? { boneOffsets: i }
        : {
            boneOffsets: [
              ...i,
              {
                id: N6(),
                boneName: t,
                frame: 0,
                rotation: [0, 0, 0],
                position: n,
              },
            ],
          };
    }),
  clearHipsRestMatch: (t) =>
    e((e) => ({
      boneOffsets: e.boneOffsets.flatMap((e) => {
        if (e.boneName !== t || !e.position) return [e];
        let n = e.rotation,
          r = n[0] !== 0 || n[1] !== 0 || n[2] !== 0,
          i = e.scale,
          a = !!i && (i[0] !== 1 || i[1] !== 1 || i[2] !== 1);
        return !r && !a ? [] : [{ ...e, position: void 0 }];
      }),
    })),
  setHipsRestMeasure: (t) => e({ hipsRestMeasure: t }),
  setBakeSampler: (t) => e({ bakeSampler: t }),
  setClipFileSampler: (t) => e({ clipFileSampler: t }),
  setLoopRange: (t, n) =>
    e({ loopInFrame: t, loopOutFrame: n, loopConfigured: !0 }),
  setLoopBlendFrames: (t) => e({ loopBlendFrames: t, loopConfigured: !0 }),
  setLoopPreview: (t) =>
    e(t ? { isLoopPreview: !0, loopConfigured: !0 } : { isLoopPreview: !1 }),
  setShowLoopGhosts: (t) => e({ showLoopGhosts: t }),
  applyLoop: () => {
    e({ isLoopPreview: !1 });
  },
  setClipRange: (t, n) => e({ clipInFrame: t, clipOutFrame: n }),
  stripRootMotion: (e) => {},
  autoGround: () => {},
  centerCharacter: () => {},
  setPositionOffset: (t) => e({ positionOffset: t }),
  setRootMotionConfig: (t) => e({ rootMotionConfig: t }),
  loadAnimationState: (t) => {
    if (!t)
      return (
        e({
          ...F6,
          boneOffsets: [],
          mutedBones: [],
          ikKeys: [],
          ikEnabled: [],
          footLock: M6(),
          limbStabilize: j6(),
          playbackSpeed: 1,
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
        }),
        { droppedIkKeys: 0, convertedFootPlants: 0, droppedFootConfig: !1 }
      );
    let n = I6(t);
    return (
      e({
        ...F6,
        boneOffsets: n.layers.boneOffsets,
        mutedBones: n.layers.mutedBones,
        ikKeys: n.layers.ikKeys,
        ikEnabled: n.layers.ikEnabled,
        footLock: n.layers.footLock,
        limbStabilize: n.layers.limbStabilize,
        playbackSpeed: n.speed,
        loopInFrame: t.loop_config?.in_frame ?? 0,
        loopOutFrame: t.loop_config?.out_frame ?? 0,
        loopBlendFrames: t.loop_config?.blend_frames ?? 8,
        loopConfigured: n.loop !== null,
        isLoopPreview: !1,
        clipInFrame: 0,
        clipOutFrame: 0,
        positionOffset: t.position_offset ?? [0, 0, 0],
        rootMotionConfig: n.layers.rootMotionConfig,
      }),
      {
        droppedIkKeys: n.droppedIkKeys,
        convertedFootPlants: n.convertedFootPlants,
        droppedFootConfig: n.droppedFootConfig,
      }
    );
  },
  loadStateMachine: (t) => e({ stateMachine: t }),
  saveStateMachine: () => {},
  selectState: (t) => e({ selectedStateId: t, selectedTransitionId: null }),
  selectTransition: (t) =>
    e({ selectedTransitionId: t, selectedStateId: null }),
  setActivePanel: (t) => e({ activePanel: t }),
  reset: () => e(P6),
}));
