// Create-ea24k1TY 304 — current
// Lines 107261-107611 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Mye(e) {
  let {
      sessionDir: t,
      designTreeRef: n,
      activeWorkflowsRef: r,
      addOngoingTask: i,
      hasTask: a,
      failTask: o,
      completeTask: s,
      applyCompletedNodes: c,
      applyUnlockedNodes: l,
      clearRing: u,
    } = e,
    [d, f] = (0, X.useState)([]),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(new Set()),
    [_, v] = (0, X.useState)([]),
    [y, b] = (0, X.useState)(``),
    x = (0, X.useRef)(0),
    [S, C] = (0, X.useState)(null),
    [w, T] = (0, X.useState)(null),
    [E, D] = (0, X.useState)(null),
    [O, k] = (0, X.useState)(null),
    [A, j] = (0, X.useState)(null),
    [M, N] = (0, X.useState)(null),
    [P, F] = (0, X.useState)(!1),
    [I, L] = (0, X.useState)(null);
  (X9(
    n,
    S,
    (e) => e.length === 0,
    (e, t) => {
      for (let n of e) t.setNodeState(n.nodeId, n.state);
    },
    () => C(null),
    `Restoring Design Tree state (delayed):`,
    `Design Tree ref never became available for state restoration`,
  ),
    X9(
      n,
      w,
      (e) => e.length === 0,
      (e) => c(e),
      () => T(null),
      `Restoring finished nodes (delayed):`,
      `Design Tree ref never became available for finished-node restoration`,
    ),
    X9(
      n,
      E,
      (e) => e.length === 0,
      (e) => l(e),
      () => D(null),
      `Restoring manual unlocks (delayed):`,
      `Design Tree ref never became available for unlock restoration`,
    ),
    X9(
      n,
      O,
      () => !1,
      (e, t) => t.updateDesignData(e),
      () => k(null),
      `Applying pending context data (delayed):`,
      `Design Tree ref never became available for context data`,
    ),
    X9(
      n,
      A,
      (e) => e.length === 0,
      (e, i) => {
        let o = t.split(`/`).pop() || t;
        for (let t of e) {
          if (
            !a(t.runId) ||
            (i.setNodeState(t.nodeId, `in-progress`),
            r.current.set(t.runId, {
              nodeId: t.nodeId,
              previousState: t.previousState,
            }),
            t.mode !== `coding`)
          )
            continue;
          let e = Date.parse(t.startedAt),
            s = Number.isNaN(e) || e > Date.now() ? void 0 : e;
          (i.startCodingRun?.(t.nodeId, t.taskId, s),
            Un.activity(o, t.actionId).then((e) => {
              if (!e) return;
              let r = e.events.map(gc).filter((e) => e !== null);
              n.current?.seedCodingRun?.(t.nodeId, {
                events: r,
                truncated: e.truncated,
                taskId: e.task_id ?? void 0,
              });
            }));
        }
      },
      () => j(null),
      `Restoring live runs (delayed):`,
      `Design Tree ref never became available for live-run restoration`,
    ));
  let R = (0, X.useCallback)(
    (e) => {
      let t = n.current;
      if (!t) return;
      let i = new Set(Array.from(r.current.values()).map((e) => e.nodeId));
      for (let n of e)
        !n.node ||
          i.has(n.node) ||
          t.setCodingResult?.(
            n.node,
            jc(
              n.node,
              {
                success: !1,
                resumable: !0,
                action_id: n.action_id,
                asset_budget_coins: n.asset_budget_coins,
                error:
                  n.failure?.message ||
                  `This run was interrupted before it could finish. The work done so far is saved. Resume to continue from where it stopped.`,
              },
              !1,
            ),
          );
    },
    [n, r],
  );
  X9(
    n,
    M,
    (e) => e.length === 0,
    (e) => R(e),
    () => N(null),
    `Restoring interrupted runs (delayed):`,
    `Design Tree ref never became available for interrupted-run restoration`,
  );
  let z = (0, X.useCallback)(async () => {
      let e = t.split(`/`).pop() || t;
      if (e)
        try {
          let t = new Set(r.current.keys()),
            i = await Br.getSessionInflight(e);
          if (!i.ok) return;
          let a = new Set(i.running.map((e) => e.run_id));
          for (let [e, c] of Array.from(r.current.entries())) {
            if (a.has(e) || !t.has(e)) continue;
            r.current.delete(e);
            let l = i.completedNodes.includes(c.nodeId);
            (n.current?.setNodeState(
              c.nodeId,
              l ? `complete` : c.previousState,
            ),
              u(c.nodeId),
              l ? s(e) : o(e, `This run ended while the connection was down.`));
          }
          let d = new Set(Array.from(r.current.values()).map((e) => e.nodeId));
          (c(i.completedNodes.filter((e) => !d.has(e))),
            l(i.unlockedNodes),
            R(
              i.interrupted.filter(
                (e) => !e.node || !i.completedNodes.includes(e.node),
              ),
            ));
        } catch (e) {
          console.warn(
            `[inflight] could not reconcile live runs after reconnect:`,
            e,
          );
        }
    }, [t, r, n, u, s, o, c, l, R]),
    [B, V] = (0, X.useState)({ revision: 0, assetRevision: 0 }),
    H = (0, X.useCallback)(
      (e = !0) =>
        V((t) => ({
          revision: t.revision + 1,
          assetRevision: t.assetRevision + Number(e),
        })),
      [],
    ),
    U = (0, X.useCallback)(
      async (e, n) =>
        t ? Nr.loadScene(t, e, n) : { success: !1, error: `No session` },
      [t],
    ),
    ee = (0, X.useCallback)(
      async (e, n, r) =>
        t ? Nr.saveScene(t, e, n, r) : { success: !1, error: `No session` },
      [t],
    ),
    W = (0, X.useCallback)(async () => {
      if (!t) return;
      let e = ++x.current,
        n = Date.now(),
        r = await jr.getAssets(t);
      r.success && x.current === e && (f(Y9(r.assets, n)), m(!0));
    }, [t]),
    G = (0, X.useCallback)(async () => {
      if (!t) return;
      let e = t.split(`/`).pop() || t,
        n = Date.now();
      try {
        let t = await Br.getSessionContext(e);
        if (t.success && t.context?.assets) {
          let e = t.context.assets.filter(
            (e) => e.asset_type === `voice_audio`,
          );
          e.length > 0 &&
            f((t) => {
              let r = new Set(t.map((e) => e.asset_name || e.name)),
                i = Y9(
                  e
                    .filter((e) => !r.has(e.asset_name))
                    .map((e) => ({ ...e, name: e.asset_name })),
                  n,
                );
              return i.length > 0 ? [...t, ...i] : t;
            });
        }
      } catch (e) {
        console.error(`Failed to refresh voice assets:`, e);
      }
    }, [t]);
  return {
    assets: d,
    setAssets: f,
    assetsLoaded: p,
    generatingAssetNames: h,
    setGeneratingAssetNames: g,
    scenes: _,
    gameUrl: y,
    needsInitialization: P,
    designDocumentsMeta: I,
    sceneReloadSignal: B,
    bumpSceneReloadNonce: H,
    loadSessionData: (0, X.useCallback)(
      async (e) => {
        let t = ++x.current,
          r = Date.now(),
          o = () => x.current === t;
        try {
          let t = await jr.getAssets(e);
          t.success && o() && (f(Y9(t.assets, r)), m(!0));
          let s = await Nr.getScenes(e);
          s.success && v(s.scenes || []);
          let u = await Ar.getGameFiles(e);
          u.success && u.game_url && b(u.game_url);
          let d = e.split(`/`).pop() || e,
            p = [],
            h = [],
            g = new Set();
          try {
            let e = await Br.getSessionInflight(d);
            ((p = e.completedNodes), (h = e.unlockedNodes));
            let t = [];
            for (let n of e.running)
              (a(n.run_id) ||
                i(n.run_id, {
                  title: nt(n),
                  description: `Still working — picked up after reload`,
                  type: n.mode,
                }),
                n.node &&
                  (g.add(n.node),
                  t.push({
                    nodeId: n.node,
                    runId: n.run_id,
                    taskId: n.task_id,
                    actionId: n.action_id,
                    mode: n.mode,
                    startedAt: n.started_at,
                    previousState: p.includes(n.node)
                      ? `complete`
                      : `available`,
                  })));
            t.length > 0 && j(t);
            let n = e.interrupted.filter(
              (e) => e.node && !g.has(e.node) && !p.includes(e.node),
            );
            n.length > 0 && N(n);
          } catch (e) {
            console.warn(`[inflight] could not restore session progress:`, e);
          }
          let _ = await Br.getSessionContext(d),
            y = _.success === !0 && _.needs_initialization === !0;
          if ((F(y), _.success && _.context)) {
            let e = _.context;
            L(e.design_documents ?? null);
            let t = Oye(e);
            if (e.assets && o()) {
              let t = e.assets.filter((e) => e.asset_type === `voice_audio`);
              t.length > 0 &&
                f((e) => {
                  let n = new Set(e.map((e) => e.asset_name || e.name)),
                    i = Y9(
                      t
                        .filter((e) => !n.has(e.asset_name))
                        .map((e) => ({ ...e, name: e.asset_name })),
                      r,
                    );
                  return i.length > 0 ? [...e, ...i] : e;
                });
            }
            if (
              (Object.keys(t).length > 0 &&
                (n.current ? n.current.updateDesignData(t) : k(t)),
              !y && n.current && t.assets && Array.isArray(t.assets))
            )
              for (let e of zt(t.assets)) {
                let t = Ct(e, e, {});
                t.completedNode &&
                  !g.has(t.completedNode.nodeId) &&
                  n.current.setNodeState(t.completedNode.nodeId, `complete`);
              }
          }
          let x =
            _.success &&
            _.context &&
            (!_.context_version || _.context_version < 1);
          !y &&
            x &&
            (console.log(
              `Session context reports no version — surfacing every evidenced Design Tree node`,
            ),
            n.current && n.current.revealAndUnlockAll());
          let S = y
            ? { success: !1, completedWorkflows: [], dirtyWorkflows: [] }
            : await Br.getCompletedWorkflows(e);
          if (S.success) {
            let e = wt(S.completedWorkflows, S.dirtyWorkflows).filter(
              (e) => !g.has(e.nodeId),
            );
            if (n.current && e.length > 0)
              for (let t of e) n.current.setNodeState(t.nodeId, t.state);
            else e.length > 0 && C(e);
          }
          let w = p.filter((e) => !g.has(e));
          (!y && w.length > 0 && (n.current ? c(w) : T(w)),
            !y && h.length > 0 && (n.current ? l(h) : D(h)));
        } catch (e) {
          console.error(`Error loading session data:`, e);
        }
      },
      [i, a, c, l],
    ),
    fetchAssets: W,
    refreshVoiceAssets: G,
    handleLoadScene: U,
    handleSaveScene: ee,
    reconcileLiveRuns: z,
  };
}
