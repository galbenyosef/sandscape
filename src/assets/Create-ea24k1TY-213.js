// Create-ea24k1TY 213 — children
// Lines 72683-73005 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Xle = {
    level: `Level Editor`,
    assets: `Asset Editor`,
    character: `Character Editor`,
    sound: `Sound Editor`,
    video: `Video Editor`,
    docs: `Documents`,
    code: `Code Editor`,
  },
  n0 = [
    { id: `creation-flow`, icon: ss, label: `Creation Flow` },
    { id: `assets`, label: `Assets` },
    { id: `settings`, label: `Settings` },
    { id: `budget`, label: `Budget` },
    { id: `history`, label: `History` },
  ];
function Zle({
  sessionId: e,
  sessionDir: t,
  assets: n,
  activeEditorTab: r,
  onExecuteWorkflow: i,
  onChatAboutNode: a,
  onOpenEditorTab: o,
  editorFocused: s,
  setEditorFocused: c,
  generatingAssetNames: l,
  needsInitialization: u,
}) {
  let {
      treeState: d,
      selectNode: f,
      unlockNode: m,
      relockNode: h,
      recentlyRevealed: g,
      executionState: _,
      isCodingAgentRunning: v,
      gameDesignData: y,
      setGameDesignData: b,
      codingActivity: S,
      codingResults: C,
      appendLocalCodingActivity: w,
    } = Pc(),
    { setPortalTarget: T, setSourceNode: E, sourceNode: D } = ie(),
    O = pi(),
    k = s && !!r && r !== `preview`,
    A = r ? Xle[r] : null,
    j = (0, X.useRef)(!1);
  (0, X.useEffect)(() => {
    if (s && !j.current) {
      let e = d.selectedNodeId ? d.nodes.get(d.selectedNodeId) : null;
      E(e ? { id: e.id, name: e.name } : null);
    }
    (s || (T(null), E(null)), (j.current = s));
  }, [s, d.selectedNodeId, d.nodes, T, E]);
  let M = (d.selectedNodeId && d.nodes.get(d.selectedNodeId)) || null,
    N = (0, X.useCallback)(() => {
      (c(!1), f(null));
    }, [f, c]),
    P = (0, X.useCallback)(
      (e) => {
        (c(!1), f(e), Dr(`tour:node-selected`, e));
      },
      [f, c],
    ),
    [F, I] = (0, X.useState)(new Set()),
    L = (0, X.useCallback)(
      (t) => {
        let n = d.visibleNodeIds.has(t);
        if ((m(t), !e)) return;
        I((e) => new Set(e).add(t));
        let r = () =>
          I((e) => {
            let n = new Set(e);
            return (n.delete(t), n);
          });
        Br.unlockNode(e, t)
          .then((e) => {
            (r(),
              !e.success &&
                (n || h(t),
                Hr.error(
                  `Could not save the unlocked step — please try again.`,
                )));
          })
          .catch(() => {
            (r(),
              n || h(t),
              Hr.error(`Could not save the unlocked step — please try again.`));
          });
      },
      [m, h, e, d.visibleNodeIds],
    ),
    R = (0, X.useCallback)(
      (e, t, n) => {
        i(e, t, n);
      },
      [i],
    ),
    z = (0, X.useCallback)(
      (e) => {
        (a(e), f(null));
      },
      [a, f],
    ),
    B = (0, X.useCallback)(
      (e) => {
        b && y ? b({ ...y, ...e }) : b && b(e);
      },
      [b, y],
    ),
    V = (0, X.useCallback)(() => {
      D && (c(!1), f(D.id));
    }, [c, f, D]),
    H = M === null && !s,
    U = !H,
    ee = d.selectedNodeId || D?.id || null,
    W = (k && D?.name) || M?.name;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full`,
    "data-tour": `tour-workflow-panel`,
    children: [
      U &&
        ee &&
        !O &&
        (0, Z.jsx)(Nle, {
          nodeStates: d.nodes,
          selectedNodeId: ee,
          visibleNodeIds: d.visibleNodeIds,
          onNodeClick: P,
          nodeProgress: d.nodeProgress,
        }),
      !O &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1 px-4 py-2 text-xs border-b border-border shrink-0`,
          children: [
            (0, Z.jsx)(`button`, {
              onClick: N,
              className: p(
                `transition-colors`,
                H
                  ? `text-foreground font-medium`
                  : `text-muted-foreground hover:text-foreground`,
              ),
              children: `Creation Flow`,
            }),
            W &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(De, {
                    className: `h-3 w-3 text-muted-foreground/50 shrink-0`,
                  }),
                  k
                    ? (0, Z.jsx)(`button`, {
                        onClick: V,
                        className: `text-muted-foreground hover:text-foreground transition-colors truncate`,
                        children: W,
                      })
                    : (0, Z.jsx)(`span`, {
                        className: `text-foreground font-medium truncate`,
                        children: W,
                      }),
                ],
              }),
            k &&
              A &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(De, {
                    className: `h-3 w-3 text-muted-foreground/50 shrink-0`,
                  }),
                  (0, Z.jsx)(`span`, {
                    className: `text-foreground font-medium`,
                    children: A,
                  }),
                ],
              }),
          ],
        }),
      !H &&
        !O &&
        (M || D) &&
        (() => {
          let e = M || (D ? d.nodes.get(D.id) : null);
          if (!e) return null;
          let t = p1[e.id];
          return (0, Z.jsxs)(`div`, {
            className: `px-4 h-14 border-b border-border shrink-0 flex items-center justify-between`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-3 min-w-0`,
                children: [
                  (0, Z.jsx)(`h3`, {
                    className: `text-base font-semibold text-white truncate`,
                    children: e.name,
                  }),
                  (0, Z.jsx)(`span`, {
                    className: `px-2 py-0.5 rounded-full text-[10px] font-medium shrink-0 border`,
                    style: {
                      background: _1(e.state).replace(`0.8)`, `0.15)`),
                      borderColor: _1(e.state).replace(`0.8)`, `0.3)`),
                      color: _1(e.state).replace(`0.8)`, `1)`),
                    },
                    children: g1(e.state),
                  }),
                ],
              }),
              t &&
                o &&
                (0, Z.jsx)(`div`, {
                  className: `flex items-center gap-1 shrink-0 -mr-2 ${k ? `invisible` : ``}`,
                  children: t.map((e) =>
                    (0, Z.jsxs)(
                      x,
                      {
                        variant: `ghost`,
                        size: `sm`,
                        onClick: () => o(e.tabId),
                        className: `text-muted-foreground hover:text-foreground hover:bg-accent gap-1.5 text-xs`,
                        children: [
                          (0, Z.jsx)(Zt, { className: `h-3 w-3` }),
                          e.label,
                        ],
                      },
                      e.tabId,
                    ),
                  ),
                }),
            ],
          });
        })(),
      (0, Z.jsx)(`div`, {
        className: `flex-1 overflow-hidden min-h-0`,
        children: s
          ? (0, Z.jsx)(`div`, { ref: T, className: `h-full overflow-y-auto` })
          : H
            ? (0, Z.jsx)(Yle, {
                nodeStates: d.nodes,
                visibleNodeIds: d.visibleNodeIds,
                pendingUnlockIds: F,
                recentlyRevealed: g,
                onNodeClick: P,
                onUnlockNode: L,
                nodeProgress: d.nodeProgress,
              })
            : (0, Z.jsx)(h1, {
                node: M,
                onChatAbout: z,
                onExecute: R,
                executionState: _,
                isCodingAgentRunning: v,
                assets: n,
                sessionDir: t,
                gameDesignData: y,
                onUpdateDesignData: B,
                onOpenEditorTab: o,
                generatingAssetNames: l,
                needsInitialization: u,
                codingFeed: M ? S.get(M.id) : void 0,
                codingResult: M ? (C.get(M.id) ?? null) : null,
                nodeProgress: M ? (d.nodeProgress.get(M.id) ?? null) : null,
                onLocalCodingActivity: M ? (e) => w(M.id, e) : void 0,
              }),
      }),
      !O &&
        (0, Z.jsx)(`div`, {
          className: `shrink-0 border-t border-border`,
          children: (0, Z.jsx)(`div`, {
            className: `flex items-center px-3 py-1.5`,
            children: (0, Z.jsx)(Ut, {
              delayDuration: 200,
              children: (0, Z.jsx)(`div`, {
                className: `flex items-center gap-1`,
                children: n0.map((e) => {
                  let t = e.icon || x1[e.id] || cs,
                    n = e.id === `creation-flow`,
                    r = n ? H : !k && d.selectedNodeId === e.id;
                  return (0, Z.jsxs)(
                    Yt,
                    {
                      children: [
                        (0, Z.jsx)(Jt, {
                          asChild: !0,
                          children: (0, Z.jsx)(`button`, {
                            ...(e.id === `assets`
                              ? Tr(`tour-assets-folder`)
                              : n
                                ? Tr(`tour-creation-flow`)
                                : {}),
                            onClick: () => {
                              (c(!1),
                                f(n ? null : e.id),
                                e.id === `assets` && Dr(`tour:assets-opened`),
                                n && Dr(`tour:flow-opened`));
                            },
                            className: p(
                              `p-2 rounded transition-colors`,
                              r
                                ? `bg-primary/20 text-primary`
                                : `text-muted-foreground hover:text-foreground hover:bg-accent`,
                            ),
                            children: (0, Z.jsx)(t, {
                              className: `h-4.5 w-4.5`,
                            }),
                          }),
                        }),
                        (0, Z.jsx)(Gt, {
                          side: `top`,
                          className: `text-[10px] bg-card border-border`,
                          children: e.label,
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
            }),
          }),
        }),
    ],
  });
}
