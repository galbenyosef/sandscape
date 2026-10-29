// SceneEditor-NC7_0wmu 11 — current
// Lines 5839-6187 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Qa = {
  scenes: [],
  activeSceneName: null,
  activeSceneId: null,
  selectedObjectUuids: [],
  transformMode: `translate`,
  transformSpace: `world`,
  snapEnabled: Xa.snapEnabled,
  snapValues: Xa.snapValues,
  magnetEnabled: Xa.magnetEnabled,
  magnetRadius: Xa.magnetRadius,
  viewMode: `lit`,
  shadingMode: `textured`,
  wireframeMode: `off`,
  showGrid: !0,
  showColliders: !1,
  showLightGizmos: !0,
  environmentSource: `studio`,
  environmentHdrUrl: null,
  environmentAsBackground: !1,
  toneMappingExposure: 1.2,
  canUndo: !1,
  canRedo: !1,
  undoLabel: ``,
  redoLabel: ``,
  fieldInterpretations: {},
  visualizerBindings: [],
  editorVisibility: {},
  objectDisplayModes: {},
  expandedPaths: {},
  sceneGraphVersion: 0,
  objectChangeVersion: 0,
  ...Wa,
  procKitManifest: null,
  procAssetPack: null,
  procBrushZone: `corridor`,
  procBrushSize: 1,
  procLivePaint: !0,
  saveState: `idle`,
  saveError: null,
  lastSavedAt: null,
  activeMaterialUuid: null,
  materialEditorOpen: !1,
  materialPreviewMode: `sphere`,
};
function $a(e) {
  return e.filter((t, n) => e.indexOf(t) === n);
}
function eo(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
var to = (e) =>
    e.selectedObjectUuids.length > 0
      ? e.selectedObjectUuids[e.selectedObjectUuids.length - 1]
      : null,
  X = p((e, t) => ({
    ...Qa,
    setScenes: (t) => e({ scenes: t }),
    setActiveSceneName: (t) =>
      e((e) => ({
        activeSceneName: t,
        activeSceneId: t ? e.activeSceneId : null,
      })),
    setSelectedObjectUuid: (t) =>
      e((e) => {
        let n = t ? [t] : [];
        return eo(e.selectedObjectUuids, n) ? {} : { selectedObjectUuids: n };
      }),
    setSelectedObjectUuids: (t) =>
      e((e) => {
        let n = $a(t);
        return eo(e.selectedObjectUuids, n) ? {} : { selectedObjectUuids: n };
      }),
    addSelectedObjectUuid: (t) =>
      e((e) => {
        let n = e.selectedObjectUuids;
        return n[n.length - 1] === t
          ? {}
          : { selectedObjectUuids: [...n.filter((e) => e !== t), t] };
      }),
    toggleSelectedObjectUuid: (t) =>
      e((e) => {
        let n = e.selectedObjectUuids;
        return n.includes(t)
          ? { selectedObjectUuids: n.filter((e) => e !== t) }
          : { selectedObjectUuids: [...n, t] };
      }),
    setTransformMode: (t) => e({ transformMode: t }),
    setTransformSpace: (t) => e({ transformSpace: t }),
    setSnapEnabled: (n) =>
      e(() => {
        let e = { snapEnabled: n };
        return (Ya({ ...Za(t()), ...e }), e);
      }),
    setSnapValues: (n) =>
      e(() => {
        let e = { snapValues: qa(n) };
        return (Ya({ ...Za(t()), ...e }), e);
      }),
    setMagnetEnabled: (n) =>
      e(() => {
        let e = { magnetEnabled: n };
        return (Ya({ ...Za(t()), ...e }), e);
      }),
    setMagnetRadius: (n) =>
      e(() => {
        let e = { magnetRadius: Math.max(0.01, n) };
        return (Ya({ ...Za(t()), ...e }), e);
      }),
    setViewMode: (t) => e({ viewMode: t }),
    setShadingMode: (t) => e({ shadingMode: t }),
    setWireframeMode: (t) => e({ wireframeMode: t }),
    toggleGrid: () => e((e) => ({ showGrid: !e.showGrid })),
    toggleColliders: () => e((e) => ({ showColliders: !e.showColliders })),
    toggleLightGizmos: () =>
      e((e) => ({ showLightGizmos: !e.showLightGizmos })),
    setEnvironmentSource: (t) => e({ environmentSource: t }),
    setEnvironmentHdrUrl: (t) => e({ environmentHdrUrl: t }),
    setEnvironmentAsBackground: (t) => e({ environmentAsBackground: t }),
    setToneMappingExposure: (t) => e({ toneMappingExposure: t }),
    setHistoryState: (t, n, r, i) =>
      e({ canUndo: t, canRedo: n, undoLabel: r, redoLabel: i }),
    setFieldInterpretation: (t, n, r) =>
      e((e) => ({
        fieldInterpretations: { ...e.fieldInterpretations, [`${t}:${n}`]: r },
      })),
    upsertVisualizerBinding: (t) =>
      e((e) => {
        let n = e.visualizerBindings.findIndex((e) => e.id === t.id);
        if (n < 0) return { visualizerBindings: [...e.visualizerBindings, t] };
        let r = e.visualizerBindings.slice();
        return ((r[n] = t), { visualizerBindings: r });
      }),
    removeVisualizerBinding: (t) =>
      e((e) => ({
        visualizerBindings: e.visualizerBindings.filter((e) => e.id !== t),
      })),
    setObjectEditorVisible: (t, n) =>
      e((e) => ({ editorVisibility: { ...e.editorVisibility, [t]: n } })),
    setObjectsEditorVisible: (t, n) =>
      e((e) => {
        if (!t.length) return {};
        let r = { ...e.editorVisibility };
        for (let e of t) r[e] = n;
        return { editorVisibility: r };
      }),
    setObjectDisplayMode: (t, n) =>
      e((e) =>
        e.objectDisplayModes[t] === n
          ? {}
          : { objectDisplayModes: { ...e.objectDisplayModes, [t]: n } },
      ),
    setPathExpanded: (t, n) =>
      e((e) => ({ expandedPaths: { ...e.expandedPaths, [t]: n } })),
    clearSceneEditorMetadata: () =>
      e({
        fieldInterpretations: {},
        visualizerBindings: [],
        editorVisibility: {},
        objectDisplayModes: {},
        expandedPaths: {},
        activeMaterialUuid: null,
        materialEditorOpen: !1,
      }),
    incrementSceneGraphVersion: () =>
      e((e) => ({ sceneGraphVersion: e.sceneGraphVersion + 1 })),
    incrementObjectChangeVersion: () =>
      e((e) => ({ objectChangeVersion: e.objectChangeVersion + 1 })),
    setProcSeed: (t) => e({ procSeed: t >>> 0 }),
    setProcSeedLocked: (t) => e({ procSeedLocked: t }),
    setProcMode: (t) => e({ procMode: t }),
    setProcGenerator: (t) => e({ procGenerator: t }),
    setProcParams: (t) => e((e) => ({ procParams: { ...e.procParams, ...t } })),
    setProcLayout: (t) => e({ procLayout: t }),
    setProcPreserveEdits: (t) => e({ procPreserveEdits: t }),
    setProcIsGenerating: (t) => e({ procIsGenerating: t }),
    setProcKitManifest: (t) => e({ procKitManifest: t }),
    setProcAssetPack: (t) => e({ procAssetPack: t }),
    setProcPaintMode: (t) => e({ procPaintMode: t }),
    setProcZoneMap: (t) => e({ procZoneMap: t }),
    setProcBrushZone: (t) =>
      e({
        procBrushZone: t,
        procBrushSize:
          t === `erase` || t === `door` || t === `wall` ? 1 : na[t],
      }),
    setProcBrushSize: (t) => e({ procBrushSize: t }),
    setProcLivePaint: (t) => e({ procLivePaint: t }),
    resetProcgen: () => e({ ...Wa, procParams: { ...$i } }),
    setSaveState: (t, n = null) =>
      e(() => ({
        saveState: t,
        saveError: t === `error` ? (n ?? `Save failed`) : null,
        ...(t === `idle` ? { lastSavedAt: Date.now() } : {}),
      })),
    openMaterialEditor: (t) =>
      e({ activeMaterialUuid: t, materialEditorOpen: !0 }),
    closeMaterialEditor: () =>
      e({ materialEditorOpen: !1, activeMaterialUuid: null }),
    setActiveMaterialUuid: (t) => e({ activeMaterialUuid: t }),
    setMaterialPreviewMode: (t) => e({ materialPreviewMode: t }),
    reset: () => e({ ...Qa, ...Za(t()) }),
  })),
  no = (0, J.createContext)(null);
no.displayName = `PanelGroupContext`;
var ro = {
    group: `data-panel-group`,
    groupDirection: `data-panel-group-direction`,
    groupId: `data-panel-group-id`,
    panel: `data-panel`,
    panelCollapsible: `data-panel-collapsible`,
    panelId: `data-panel-id`,
    panelSize: `data-panel-size`,
    resizeHandle: `data-resize-handle`,
    resizeHandleActive: `data-resize-handle-active`,
    resizeHandleEnabled: `data-panel-resize-handle-enabled`,
    resizeHandleId: `data-panel-resize-handle-id`,
    resizeHandleState: `data-resize-handle-state`,
  },
  io = 10,
  ao = J.useLayoutEffect,
  oo = J.useId,
  so = typeof oo == `function` ? oo : () => null,
  co = 0;
function lo(e = null) {
  let t = so(),
    n = (0, J.useRef)(e || t || null);
  return (n.current === null && (n.current = `` + co++), e ?? n.current);
}
function uo({
  children: e,
  className: t = ``,
  collapsedSize: n,
  collapsible: r,
  defaultSize: i,
  forwardedRef: a,
  id: o,
  maxSize: s,
  minSize: c,
  onCollapse: l,
  onExpand: u,
  onResize: d,
  order: f,
  style: p,
  tagName: m = `div`,
  ...h
}) {
  let g = (0, J.useContext)(no);
  if (g === null)
    throw Error(
      `Panel components must be rendered within a PanelGroup container`,
    );
  let {
      collapsePanel: _,
      expandPanel: v,
      getPanelSize: y,
      getPanelStyle: b,
      groupId: x,
      isPanelCollapsed: S,
      reevaluatePanelConstraints: C,
      registerPanel: w,
      resizePanel: T,
      unregisterPanel: E,
    } = g,
    D = lo(o),
    O = (0, J.useRef)({
      callbacks: { onCollapse: l, onExpand: u, onResize: d },
      constraints: {
        collapsedSize: n,
        collapsible: r,
        defaultSize: i,
        maxSize: s,
        minSize: c,
      },
      id: D,
      idIsFromProps: o !== void 0,
      order: f,
    });
  ((0, J.useRef)({ didLogMissingDefaultSizeWarning: !1 }),
    ao(() => {
      let { callbacks: e, constraints: t } = O.current,
        a = { ...t };
      ((O.current.id = D),
        (O.current.idIsFromProps = o !== void 0),
        (O.current.order = f),
        (e.onCollapse = l),
        (e.onExpand = u),
        (e.onResize = d),
        (t.collapsedSize = n),
        (t.collapsible = r),
        (t.defaultSize = i),
        (t.maxSize = s),
        (t.minSize = c),
        (a.collapsedSize !== t.collapsedSize ||
          a.collapsible !== t.collapsible ||
          a.maxSize !== t.maxSize ||
          a.minSize !== t.minSize) &&
          C(O.current, a));
    }),
    ao(() => {
      let e = O.current;
      return (
        w(e),
        () => {
          E(e);
        }
      );
    }, [f, D, w, E]),
    (0, J.useImperativeHandle)(
      a,
      () => ({
        collapse: () => {
          _(O.current);
        },
        expand: (e) => {
          v(O.current, e);
        },
        getId() {
          return D;
        },
        getSize() {
          return y(O.current);
        },
        isCollapsed() {
          return S(O.current);
        },
        isExpanded() {
          return !S(O.current);
        },
        resize: (e) => {
          T(O.current, e);
        },
      }),
      [_, v, y, S, D, T],
    ));
  let k = b(O.current, i);
  return (0, J.createElement)(m, {
    ...h,
    children: e,
    className: t,
    id: D,
    style: { ...k, ...p },
    [ro.groupId]: x,
    [ro.panel]: ``,
    [ro.panelCollapsible]: r || void 0,
    [ro.panelId]: D,
    [ro.panelSize]: parseFloat(`` + k.flexGrow).toFixed(1),
  });
}
