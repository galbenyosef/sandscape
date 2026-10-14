// assets__Create-ea24k1TY 291 — vertexcount
// Lines 102245-102490 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
async function C9(e, t) {
  try {
    let n = await jr.getAssetById(e, t);
    if (!n?.success || !n?.asset) {
      let e = typeof n?.error == `string` ? n.error : `Asset not found`;
      return (
        console.error(`[skinWeightsService] getSkinVersions failed:`, e),
        { success: !1, versions: [], current_version: 0, error: e }
      );
    }
    let r = (n.asset.versioning ?? {}).rigged_model_path,
      i = (Array.isArray(r?.versions) ? r.versions : []).map((e) => {
        let t = (e.outputs ?? {}).restored_from;
        return {
          version: Number(e.version),
          generation_id: String(e.generation_id ?? ``),
          ...(typeof e.created_at == `string`
            ? { created_at: e.created_at }
            : {}),
          ...(typeof t == `number` ? { restored_from: t } : {}),
        };
      });
    return {
      success: !0,
      versions: i,
      current_version:
        typeof r?.current_version == `number`
          ? r.current_version
          : i.length > 0
            ? i[i.length - 1].version
            : 0,
    };
  } catch (e) {
    return (
      console.error(`[skinWeightsService] Error reading skin versions:`, e),
      {
        success: !1,
        versions: [],
        current_version: 0,
        error: x9(e, `Failed to load version history`).error,
      }
    );
  }
}
var w9 = {
    selectedAssetId: null,
    selectedBone: -1,
    selectedBoneName: null,
    jointNames: [],
    primitiveCount: 0,
    vertexCount: 0,
    brushMode: `add`,
    brushRadius: 0.08,
    brushStrength: 0.5,
    falloffKind: `smooth`,
    brushHardness: 0.5,
    opacityCap: 1,
    mirror: !1,
    showOverlay: !0,
    showTexture: !0,
    showBones: !0,
    selectedClipId: null,
    isPlaying: !1,
    time: 0,
    duration: 0,
    playbackSpeed: 1,
    saveStatus: `idle`,
    saveMessage: null,
    currentVersion: null,
    versions: [],
    sessionGenerationId: null,
    externalChange: !1,
    undoStack: [],
    redoStack: [],
  },
  T9 = Ee((e, t) => ({
    ...w9,
    selectAsset: (t) =>
      e({
        selectedAssetId: t,
        selectedBone: -1,
        selectedBoneName: null,
        jointNames: [],
        primitiveCount: 0,
        vertexCount: 0,
        selectedClipId: null,
        isPlaying: !1,
        time: 0,
        duration: 0,
        saveStatus: `idle`,
        saveMessage: null,
        currentVersion: null,
        versions: [],
        sessionGenerationId: null,
        externalChange: !1,
        undoStack: [],
        redoStack: [],
      }),
    selectBone: (t, n) => e({ selectedBone: t, selectedBoneName: n }),
    setJointNames: (t) => e({ jointNames: t }),
    setSkinStats: (t, n) => e({ primitiveCount: t, vertexCount: n }),
    setBrushMode: (t) => e({ brushMode: t }),
    setBrushRadius: (t) => e({ brushRadius: t }),
    setBrushStrength: (t) => e({ brushStrength: t }),
    setFalloffKind: (t) => e({ falloffKind: t }),
    setBrushHardness: (t) => e({ brushHardness: t }),
    setOpacityCap: (t) => e({ opacityCap: t }),
    setMirror: (t) => e({ mirror: t }),
    setShowOverlay: (t) => e({ showOverlay: t }),
    setShowTexture: (t) => e({ showTexture: t }),
    setShowBones: (t) => e({ showBones: t }),
    selectClip: (t) =>
      e({ selectedClipId: t, isPlaying: !1, time: 0, duration: 0 }),
    play: () => e({ isPlaying: !0 }),
    pause: () => e({ isPlaying: !1 }),
    stop: () => e({ isPlaying: !1, time: 0 }),
    setTime: (t) => e({ time: t }),
    setDuration: (t) => e({ duration: t }),
    setPlaybackSpeed: (t) => e({ playbackSpeed: t }),
    setSaveStatus: (t, n = null) => e({ saveStatus: t, saveMessage: n }),
    setVersionState: (t, n) => e({ currentVersion: t, versions: n }),
    setSessionGenerationId: (t) => e({ sessionGenerationId: t }),
    setExternalChange: (t) => e({ externalChange: t }),
    pushUndo: (t) =>
      e((e) => ({ undoStack: [...e.undoStack, t].slice(-50), redoStack: [] })),
    takeUndo: () => {
      let n = t().undoStack;
      if (n.length === 0) return null;
      let r = n[n.length - 1];
      return (e({ undoStack: n.slice(0, -1) }), r);
    },
    takeRedo: () => {
      let n = t().redoStack;
      if (n.length === 0) return null;
      let r = n[n.length - 1];
      return (e({ redoStack: n.slice(0, -1) }), r);
    },
    pushRedo: (t) => e((e) => ({ redoStack: [...e.redoStack, t].slice(-50) })),
    pushUndoKeepRedo: (t) =>
      e((e) => ({ undoStack: [...e.undoStack, t].slice(-50) })),
    clearHistory: () => e({ undoStack: [], redoStack: [] }),
    reset: () => e(w9),
  }));
function xve() {
  return { snapped: new Map(), partials: new Map(), touchedAny: !1 };
}
function Sve(e, t) {
  let n = new Float32Array(t * 3);
  for (let r = 0; r < t; r++)
    ((n[r * 3] = e.getX(r)),
      (n[r * 3 + 1] = e.getY(r)),
      (n[r * 3 + 2] = e.getZ(r)));
  return n;
}
function Cve(e) {
  let t = e.mesh.geometry,
    n = tve(Sve(t.getAttribute(`position`), e.vertexCount)),
    r = t.index ? t.index.array : null,
    i = p9(e);
  return {
    weldGroups: n,
    adjacency: rve(r, e.vertexCount, n),
    accum: new Float32Array(e.vertexCount),
    mirrorAccum: new Float32Array(e.vertexCount),
    posed: new Float32Array(e.vertexCount * 3),
    posedVersion: -1,
    names: i,
    mirror: cve(i),
  };
}
var E9 = new Y();
function wve(e, t, n) {
  if (t.posedVersion === n) return;
  let r = e.mesh;
  r.updateMatrixWorld(!0);
  let i = t.posed;
  for (let t = 0; t < e.vertexCount; t++)
    (r.getVertexPosition(t, E9),
      r.localToWorld(E9),
      (i[t * 3] = E9.x),
      (i[t * 3 + 1] = E9.y),
      (i[t * 3 + 2] = E9.z));
  t.posedVersion = n;
}
function Tve(e, t, n, r) {
  let i = r.radius;
  if (i <= 0) return [];
  let a = i * i,
    o = t.posed,
    s = [];
  for (let t = 0; t < e.vertexCount; t++) {
    let e = o[t * 3] - n.x,
      c = o[t * 3 + 1] - n.y,
      l = o[t * 3 + 2] - n.z,
      u = e * e + c * c + l * l;
    if (u > a) continue;
    let d = Q_e(r.kind, Math.sqrt(u) / i, r.hardness);
    d <= 0 || s.push({ vertex: t, influence: d });
  }
  return s.length === 0 ? s : nve(s, t.weldGroups);
}
function Eve(e, t, n, r, i) {
  let a = r.snapped.get(e.key);
  a || ((a = new Set()), r.snapped.set(e.key, a));
  let o = [],
    s = (e) => {
      a.has(e) || (a.add(e), o.push(e));
    };
  for (let e of n) {
    if ((s(e.vertex), !i)) continue;
    let { offsets: n, neighbors: r } = t.adjacency;
    for (let t = n[e.vertex]; t < n[e.vertex + 1]; t++) s(r[t]);
  }
  if (o.length === 0) return;
  let c = u9(e.rows, Uint32Array.from(o)),
    l = r.partials.get(e.key);
  l ? l.push(c) : r.partials.set(e.key, [c]);
}
function Dve(e) {
  if (e.length === 1) return e[0];
  let t = 0,
    n = 0,
    r = 0;
  for (let i of e)
    ((t += i.vertices.length), (n += i.joints.length), (r += i.weights.length));
  let i = new Uint32Array(t),
    a = new Uint16Array(n),
    o = new Float32Array(r),
    s = 0,
    c = 0,
    l = 0;
  for (let t of e)
    (i.set(t.vertices, s),
      (s += t.vertices.length),
      a.set(t.joints, c),
      (c += t.joints.length),
      o.set(t.weights, l),
      (l += t.weights.length));
  return { vertices: i, joints: a, weights: o };
}
function Ove(e, t) {
  let n = t.clone();
  return e
    ? (e.worldToLocal(n), (n.x = -n.x), e.localToWorld(n), n)
    : ((n.x = -n.x), n);
}
