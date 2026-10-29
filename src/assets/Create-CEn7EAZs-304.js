// Create-CEn7EAZs 304 — current
// Lines 107649-107954 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Qye(e, t, n) {
  let [r, i] = (0, X.useState)([`preview`]),
    [a, o] = (0, X.useState)(`preview`),
    [s, c] = (0, X.useState)(!1),
    [l, u] = (0, X.useState)(null),
    d = (0, X.useRef)(null);
  d.current = l;
  let f = (0, X.useRef)(0),
    p = (0, X.useRef)(null),
    m = (0, X.useCallback)((e) => {
      p.current = e;
    }, []),
    h = (0, X.useCallback)(
      (t, n) => {
        (i((e) => (e.includes(t) ? e : [...e, t])),
          o(t),
          e(`editor`),
          c(!0),
          n?.assetId &&
            ((f.current += 1),
            u({ tabId: t, assetId: n.assetId, nonce: f.current })),
          mr(`tour:editor-opened`, t));
      },
      [e],
    ),
    g = (0, X.useCallback)((e) => {
      let { taken: t, next: n } = T(d.current, e);
      return (t && ((d.current = n), u(n)), t);
    }, []),
    _ = (0, X.useCallback)((e) => {
      (o(e), c(e !== `preview`));
    }, []),
    v = (0, X.useCallback)((e) => {
      e !== `preview` &&
        (e === `level` && p.current?.(),
        i((t) => t.filter((t) => t !== e)),
        u((t) => {
          let n = R(t, e);
          return ((d.current = n), n);
        }),
        o((t) => (t === e ? (c(!1), `preview`) : t)));
    }, []);
  (0, X.useEffect)(() => {
    t(h);
  }, [h, t]);
  let y = (0, X.useRef)(!1);
  return (
    (0, X.useEffect)(() => {
      if (y.current) return;
      y.current = !0;
      let e = new URLSearchParams(window.location.search),
        t = e.get(`editor`),
        r = e.get(`panel`);
      if ((t && t !== `preview` && Kue.includes(t) && h(t), r)) {
        let e = n.current;
        e?.getTreeState().nodes.has(r)
          ? e.selectNode(r)
          : console.warn(`[deep-link] Unknown panel node id: ${r}`);
      }
    }, [h]),
    (0, X.useEffect)(() => {
      if (bn())
        return dr((t, r) => {
          if (t !== `tour:on-enter`) return;
          let i = pr(r);
          if (i) {
            if (i.kind === `select-node`) {
              let e = i.arg,
                t = n.current;
              if (!e) return;
              if (!t) {
                console.warn(
                  `[tour] select-node '${e}' arrived before the design tree mounted`,
                );
                return;
              }
              if (!t.getTreeState().nodes.has(e)) {
                console.warn(`[tour] select-node names an unknown node: ${e}`);
                return;
              }
              t.selectNode(e);
              return;
            }
            if (i.kind === `open-editor`) {
              if (!i.tab) return;
              h(i.tab, i.assetId ? { assetId: i.assetId } : void 0);
              return;
            }
            if (i.kind === `show-flow`) {
              n.current?.selectNode(null);
              return;
            }
            i.kind === `show-game` && e(`game`);
          }
        });
    }, [h, n, e]),
    {
      editorSubTabs: r,
      activeEditorTab: a,
      editorFocused: s,
      setEditorFocused: c,
      openEditorTab: h,
      selectEditorTab: _,
      closeEditorTab: v,
      registerLevelEditorFlush: m,
      requestedAsset: l,
      consumeRequestedAsset: g,
    }
  );
}
var G9 = new Set([
  `concept-lock-in`,
  `style-guide`,
  `concept-art`,
  `2d-assets`,
  `2d-animation`,
  `gdd`,
  `build-first-playable`,
  `environment-map`,
]);
function K9(e, t) {
  return !!e && !!t && e === t;
}
function q9(e, t) {
  let n = ic(e)?.workflowId;
  return !!n && t === n;
}
function $ye(e) {
  return (
    G9.has(e.nodeId) &&
    q9(e.nodeId, e.workflowName) &&
    e.isSelf &&
    !e.isVisible &&
    !e.editorOnScreen
  );
}
function ebe(e) {
  return (
    G9.has(e.nodeId) &&
    q9(e.nodeId, e.workflowName) &&
    e.isSelf &&
    !e.editorOnScreen
  );
}
function tbe(e) {
  let {
      designTreeRef: t,
      editorOnScreen: n,
      setEditorFocused: r,
      userId: i,
    } = e,
    a = (0, X.useRef)(n);
  (0, X.useEffect)(() => {
    a.current = n;
  }, [n]);
  let o = (0, X.useRef)(i);
  (0, X.useEffect)(() => {
    o.current = i;
  }, [i]);
  let s = (0, X.useRef)(new Set()),
    c = (0, X.useCallback)(
      (e) => (s.current.has(e) ? !1 : (s.current.add(e), !0)),
      [],
    );
  return {
    onFlowNodeStarted: (0, X.useCallback)(
      (e, n) => {
        let i = t.current;
        i &&
          (!$ye({
            nodeId: e,
            workflowName: n?.workflow_name,
            isSelf: K9(n?.triggered_by_user_id, o.current),
            isVisible: i.getTreeState().visibleNodeIds.has(e),
            editorOnScreen: a.current,
          }) ||
            !c(`start:${n?.task_id}`) ||
            (r(!1), i.selectNode(null), i.unlockNode(e)));
      },
      [r, c],
    ),
    onFlowNodeCompleted: (0, X.useCallback)(
      (e, n) => {
        let r = t.current;
        r &&
          (!ebe({
            nodeId: e,
            workflowName: n?.workflow_name || n?.name,
            isSelf: K9(n?.triggered_by_user_id, o.current),
            editorOnScreen: a.current,
          }) ||
            !c(`complete:${n?.task_id || e}`) ||
            r.selectNode(e));
      },
      [c],
    ),
  };
}
function nbe() {
  (0, X.useEffect)(() => {
    xn();
  }, []);
}
function rbe(e) {
  let [t, n] = (0, X.useState)(1),
    [r, i] = (0, X.useState)([]),
    [a, o] = (0, X.useState)([]);
  return {
    sessionUserCount: t,
    presenceUsers: r,
    presenceMap: (0, X.useMemo)(() => {
      let e = {};
      for (let t of r) {
        if (!t.active_workflow) continue;
        let { nodeId: n } = mt(t.active_workflow, ``);
        n &&
          (e[n] || (e[n] = []),
          e[n].push({
            user_id: t.user_id,
            username: t.username,
            avatar_url: t.avatar_url,
          }));
      }
      return e;
    }, [r]),
    lockMap: (0, X.useMemo)(() => {
      let t = {};
      for (let n of a) {
        if (n.user_id === e) continue;
        let { nodeId: r } = mt(n.workflow_name, ``);
        r &&
          (t[r] = {
            user_id: n.user_id,
            username: n.username,
            locked_at: n.locked_at,
          });
      }
      return t;
    }, [a, e]),
    applyPresenceUpdate: (0, X.useCallback)((e) => {
      (n(e.length), i(e));
    }, []),
    applyLockUpdate: (0, X.useCallback)((e) => {
      o(e);
    }, []),
    resetPresence: (0, X.useCallback)(() => {
      (i([]), n(1));
    }, []),
  };
}
function ibe(e, t) {
  let [n, r] = (0, X.useState)(null);
  return (
    (0, X.useEffect)(() => {
      if (e) {
        if (bn()) {
          r(t ?? null);
          return;
        }
        (async () => {
          try {
            let t = await _n(),
              n = await fetch(
                `${yn.API_BASE_URL}/api/sessions/${e}/collaborators`,
                { headers: t },
              );
            if (n.ok) {
              let e = await n.json(),
                t = (Array.isArray(e) ? e : (e.collaborators ?? [])).find(
                  (e) => e.role === `owner`,
                );
              if (t) {
                r(t.user_id);
                return;
              }
            }
          } catch {}
          r(t ?? null);
        })();
      }
    }, [e, t]),
    n
  );
}
function abe(e) {
  let t = (0, X.useRef)(new Map()),
    n = (0, X.useRef)(new Map()),
    r = (0, X.useRef)(new Map());
  return {
    activeWorkflowsRef: t,
    pendingWorkflowContextRef: n,
    ringThrottleRef: r,
    clearRing: (0, X.useCallback)(
      (t) => {
        (e.current?.clearNodeProgress?.(t), r.current.delete(t));
      },
      [e],
    ),
    applyCompletedNodes: (0, X.useCallback)((t) => {
      if (e.current) for (let n of Ot(t)) e.current.setNodeState(n, `complete`);
    }, []),
    applyUnlockedNodes: (0, X.useCallback)((t) => {
      if (e.current) for (let n of t) e.current.unlockNode(n, { announce: !1 });
    }, []),
  };
}
