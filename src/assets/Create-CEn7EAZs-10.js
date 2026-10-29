// Create-CEn7EAZs 10 — map
// Lines 2967-3379 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var mne = (0, X.forwardRef)(function (
  { children: e, sessionId: t, onNodeStateChange: n, onMilestoneUnlock: r },
  i,
) {
  let [a, o] = (0, X.useState)(() => {
      let e = new Map();
      nc.forEach((t) => {
        e.set(t.id, { ...t });
      });
      let t = e.get(`concept-lock-in`);
      return (
        t && (t.state = `available`),
        {
          nodes: e,
          connections: rc(),
          visibleNodeIds: new Set(jte),
          nodeProgress: new Map(),
          energy: 0,
          milestones: { 25: !1, 50: !1, 75: !1, 100: !1 },
          viewport: { position: { x: 0, y: 0 }, zoom: 1, animating: !1 },
          selectedNodeId: null,
          hoveredNodeId: null,
          detailPanelOpen: !1,
          focusedBranch: null,
          config: Ate,
        }
      );
    }),
    [s, c] = (0, X.useState)(null),
    [l, u] = (0, X.useState)(!1),
    [d, f] = (0, X.useState)(null),
    [p, m] = (0, X.useState)(() => new Map()),
    [h, g] = (0, X.useState)(() => new Map());
  (0, X.useEffect)(() => {
    let e = oc.subscribe((e) => {
      (c(e), u(e.isCodingAgentRunning));
    });
    return () => {
      e();
    };
  }, []);
  let _ = (0, X.useCallback)(
      (e, t, i) => {
        (o((n) => {
          let a = new Map(n.nodes),
            o = a.get(e);
          if (!o) return (console.warn(`Node ${e} not found`), n);
          let s = { ...o, state: t, progress: i === void 0 ? o.progress : i };
          a.set(e, s);
          let c = n.visibleNodeIds;
          t !== `locked` && !c.has(e) && ((c = new Set(c)), c.add(e));
          let l = [];
          if (t === `complete`) {
            ((l = tne(e, a)),
              l.forEach((e) => {
                if (ec.has(e)) return;
                let t = a.get(e);
                t &&
                  t.state === `locked` &&
                  a.set(e, { ...t, state: `available` });
              }));
            let t = nne(a),
              i = { ...n.milestones },
              o = null;
            return (
              t >= 25 && !i[25] && ((i[25] = !0), (o = 25)),
              t >= 50 && !i[50] && ((i[50] = !0), (o = 50)),
              t >= 75 && !i[75] && ((i[75] = !0), (o = 75)),
              t >= 100 && !i[100] && ((i[100] = !0), (o = 100)),
              o && r && r(o),
              { ...n, nodes: a, visibleNodeIds: c, milestones: i }
            );
          }
          return { ...n, nodes: a, visibleNodeIds: c };
        }),
          n && n(e, t));
      },
      [n, r],
    ),
    [v, y] = (0, X.useState)(() => new Map()),
    b = (0, X.useRef)(new Set()),
    x = (0, X.useRef)(a.visibleNodeIds);
  ((0, X.useEffect)(() => {
    x.current = a.visibleNodeIds;
  }, [a.visibleNodeIds]),
    (0, X.useEffect)(() => {
      let e = b.current;
      return () => {
        for (let t of e) clearTimeout(t);
      };
    }, []));
  let S = (0, X.useCallback)((e, t) => {
      if (ec.has(e)) return;
      let n = (t?.announce ?? !0) && !x.current.has(e) && ic(e) !== void 0;
      if (
        (o((t) => {
          let n = t.nodes.get(e);
          if (!n) return (console.warn(`unlockNode: node ${e} not found`), t);
          if (t.visibleNodeIds.has(e) && n.state !== `locked`) return t;
          let r = new Set(t.visibleNodeIds);
          r.add(e);
          let i = new Map(t.nodes);
          return (
            n.state === `locked` && i.set(e, { ...n, state: `available` }),
            { ...t, nodes: i, visibleNodeIds: r }
          );
        }),
        !n)
      )
        return;
      let r = Date.now();
      y((t) => new Map(t).set(e, r));
      let i = setTimeout(() => {
        (b.current.delete(i),
          y((t) => {
            if (t.get(e) !== r) return t;
            let n = new Map(t);
            return (n.delete(e), n);
          }));
      }, pne);
      b.current.add(i);
    }, []),
    C = (0, X.useCallback)((e) => {
      o((t) => {
        let n = t.nodes.get(e);
        if (
          !n ||
          !t.visibleNodeIds.has(e) ||
          (n.state !== `available` && n.state !== `locked`)
        )
          return t;
        let r = new Set(t.visibleNodeIds);
        r.delete(e);
        let i = new Map(t.nodes),
          a = n.prerequisites.every((e) => {
            let n = t.nodes.get(e)?.state;
            return n === `complete` || n === `outdated`;
          });
        return (
          n.state === `available` && !a && i.set(e, { ...n, state: `locked` }),
          { ...t, nodes: i, visibleNodeIds: r }
        );
      });
    }, []),
    w = (0, X.useCallback)(() => {
      (console.log(
        `Surfacing every node with run evidence; the rest stay ghosts`,
      ),
        o((e) => {
          let t = new Set(e.visibleNodeIds);
          return (
            e.nodes.forEach((e) => {
              e.state !== `locked` && t.add(e.id);
            }),
            t.size === e.visibleNodeIds.size ? e : { ...e, visibleNodeIds: t }
          );
        }));
    }, []),
    T = (0, X.useCallback)((e) => {
      o((t) => ({ ...t, selectedNodeId: e, detailPanelOpen: e !== null }));
    }, []),
    E = (0, X.useCallback)((e) => {
      o((t) => {
        if (e === null) return { ...t, focusedBranch: null };
        let n = Array.from(t.nodes.values()).filter((t) => t.domain === e);
        if (n.length === 0) return t;
        let r = n.reduce((e, t) => e + t.position.x, 0) / n.length,
          i = n.reduce((e, t) => e + t.position.y, 0) / n.length;
        return {
          ...t,
          focusedBranch: e,
          viewport: {
            ...t.viewport,
            targetPosition: { x: -r, y: -i },
            targetZoom: 1.2,
            animating: !0,
          },
        };
      });
    }, []),
    D = (0, X.useCallback)(() => {
      o((e) => ({
        ...e,
        viewport: {
          ...e.viewport,
          targetPosition: { x: 0, y: 0 },
          targetZoom: 1,
          animating: !0,
        },
      }));
    }, []),
    O = (0, X.useCallback)((e) => {
      o((t) => ({ ...t, viewport: { ...t.viewport, ...e } }));
    }, []),
    k = (0, X.useCallback)((e) => {
      o((t) => ({ ...t, energy: t.energy + e }));
    }, []),
    A = (0, X.useCallback)(
      (e) => {
        o((t) => {
          if (t.milestones[e]) return t;
          let n = { ...t.milestones, [e]: !0 };
          return (r && r(e), { ...t, milestones: n });
        });
      },
      [r],
    ),
    j = (0, X.useCallback)(
      (e, t) => {
        (console.log(`DesignTree.setNodeState("${e}", "${t}")`),
          _(e, t),
          (t === `complete` || t === `outdated`) &&
            o((t) => {
              let n = new Map(t.nodes),
                r = new Set(
                  Array.from(t.nodes.values())
                    .filter(
                      (e) => e.state === `complete` || e.state === `outdated`,
                    )
                    .map((e) => e.id),
                );
              r.add(e);
              let i = !1;
              return (
                ene(r).forEach((e) => {
                  let t = n.get(e);
                  t &&
                    t.state === `locked` &&
                    (console.log(
                      `[Reconcile] Node ${e} was stuck as locked, healing to available`,
                    ),
                    n.set(e, { ...t, state: `available` }),
                    (i = !0));
                }),
                i ? { ...t, nodes: n } : t
              );
            }));
      },
      [_],
    ),
    M = (0, X.useCallback)((e) => {
      (console.log(`DesignTree.updateDesignData:`, Object.keys(e)),
        f((t) => ({
          ...t,
          ...e,
          styleGuide: e.styleGuide
            ? { ...t?.styleGuide, ...e.styleGuide }
            : t?.styleGuide,
          assets: e.assets || t?.assets,
          gamePlan: e.gamePlan
            ? { ...t?.gamePlan, ...e.gamePlan }
            : t?.gamePlan,
        })));
    }, []),
    N = (0, X.useCallback)((e, t) => {
      o((n) => {
        let r = n.nodes.get(e);
        if (!r || r.state !== `in-progress`) return n;
        let i = n.nodeProgress.get(e),
          a = t.updatedAt ?? Date.now();
        if (i && a < i.updatedAt) return n;
        let o = t.fraction;
        o === void 0 &&
          t.step !== void 0 &&
          t.totalSteps &&
          (o = Math.max(0, Math.min(1, t.step / t.totalSteps)));
        let s = {
            taskId: t.taskId ?? i?.taskId,
            fraction: o ?? i?.fraction,
            step: t.step ?? i?.step,
            totalSteps: t.totalSteps ?? i?.totalSteps,
            phase: t.phase ?? i?.phase,
            updatedAt: a,
          },
          c = new Map(n.nodeProgress);
        return (c.set(e, s), { ...n, nodeProgress: c });
      });
    }, []),
    P = (0, X.useCallback)((e) => {
      o((t) => {
        if (!t.nodeProgress.has(e)) return t;
        let n = new Map(t.nodeProgress);
        return (n.delete(e), { ...t, nodeProgress: n });
      });
    }, []),
    F = (0, X.useCallback)((e, t) => {
      o((n) => {
        let r = n.nodes.get(e);
        if (!r) return n;
        let i = t || void 0;
        if (r.activeWorkflow === i) return n;
        let a = new Map(n.nodes);
        return (a.set(e, { ...r, activeWorkflow: i }), { ...n, nodes: a });
      });
    }, []),
    I = (0, X.useCallback)((e) => {
      let t = e.nodeId;
      t &&
        m((n) => {
          let r = new Map(n);
          return (r.set(t, lc(n.get(t), e)), r);
        });
    }, []),
    L = (0, X.useCallback)((e, t, n) => {
      (m((r) => {
        let i = new Map(r);
        return (i.set(e, cc(e, t, n)), i);
      }),
        g((t) => {
          if (!t.has(e)) return t;
          let n = new Map(t);
          return (n.delete(e), n);
        }));
    }, []),
    R = (0, X.useCallback)((e, t) => {
      m((n) => {
        let r = new Map(n);
        return (r.set(e, sne(n.get(e), t)), r);
      });
    }, []),
    z = (0, X.useCallback)((e, t) => {
      m((n) => {
        let r = n.get(e),
          i = uc(r, t),
          a = new Map(n);
        return (a.set(e, lc(r, { ...i, nodeId: e })), a);
      });
    }, []),
    B = (0, X.useCallback)((e, t) => {
      g((n) => {
        let r = new Map(n);
        return (r.set(e, t), r);
      });
    }, []);
  ((0, X.useEffect)(
    () => () => {
      (m((e) => (e.size === 0 ? e : new Map())),
        g((e) => (e.size === 0 ? e : new Map())));
    },
    [t],
  ),
    (0, X.useEffect)(() => {
      let e = setInterval(() => {
        o((e) => {
          if (e.nodeProgress.size === 0) return e;
          let t = Date.now(),
            n = !1,
            r = new Map(e.nodeProgress);
          for (let [i, a] of e.nodeProgress) {
            let o = e.nodes.get(i);
            (!o || o.state !== `in-progress` || t - a.updatedAt > 6e4) &&
              (r.delete(i), (n = !0));
          }
          return n ? { ...e, nodeProgress: r } : e;
        });
      }, 15e3);
      return () => clearInterval(e);
    }, []),
    (0, X.useEffect)(
      () => () => {
        o((e) =>
          e.nodeProgress.size === 0 ? e : { ...e, nodeProgress: new Map() },
        );
      },
      [t],
    ),
    (0, X.useImperativeHandle)(
      i,
      () => ({
        setNodeState: j,
        getNodeState: (e) => a.nodes.get(e)?.state || null,
        selectNode: T,
        unlockNode: S,
        updateDesignData: M,
        revealAndUnlockAll: w,
        getTreeState: () => a,
        getDesignData: () => d,
        setNodeProgress: N,
        clearNodeProgress: P,
        setNodeActiveWorkflow: F,
        appendCodingActivity: I,
        startCodingRun: L,
        seedCodingRun: R,
        setCodingResult: B,
      }),
      [j, T, S, M, w, a, d, N, P, F, I, L, R, B],
    ));
  let V = (0, X.useMemo)(
    () => ({
      treeState: a,
      updateNodeState: _,
      selectNode: T,
      focusBranch: E,
      centerViewport: D,
      setViewport: O,
      addEnergy: k,
      unlockMilestone: A,
      unlockNode: S,
      relockNode: C,
      revealAndUnlockAll: w,
      recentlyRevealed: v,
      executionState: s,
      isCodingAgentRunning: l,
      gameDesignData: d,
      setGameDesignData: f,
      codingActivity: p,
      codingResults: h,
      appendLocalCodingActivity: z,
    }),
    [a, _, T, E, D, O, k, A, S, C, w, v, s, l, d, p, h, z],
  );
  return (0, Z.jsx)(gc.Provider, { value: V, children: e });
});
