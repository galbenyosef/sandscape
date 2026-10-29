// Create-ea24k1TY 55 — classname
// Lines 17044-17489 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function _p({
  node: e,
  onExecute: t,
  sessionDir: n,
  gameDesignData: r,
  codingFeed: i,
  codingResult: a,
  nodeProgress: o,
  onLocalCodingActivity: s,
  onOpenEditorTab: c,
}) {
  let [l, u] = (0, X.useState)(``),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(!1),
    _ = (0, X.useRef)(``),
    v = e.state === `complete` || e.state === `outdated`,
    y = e.state === `available`,
    b = e.state === `in-progress`,
    x = on(pp),
    S = !!x?.locked,
    C = r?.title || `Your Game`,
    w = r?.gamePlan,
    T = n ? n.split(`/`).pop() || n : ``,
    E = lp(x),
    [D, O] = (0, X.useState)(!1),
    [k, A] = (0, X.useState)(`100`),
    j = T ? mp(T) : null,
    M = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    if (j) {
      try {
        let e = localStorage.getItem(j);
        if (e) {
          let t = JSON.parse(e);
          (typeof t.enabled == `boolean` && O(t.enabled),
            typeof t.amount == `number` &&
              Number.isInteger(t.amount) &&
              t.amount >= 1 &&
              A(String(t.amount)));
        }
      } catch {}
      M.current = j;
    }
  }, [j]),
    (0, X.useEffect)(() => {
      if (!(!j || M.current !== j))
        try {
          let e = up(k),
            t = { enabled: D };
          (e !== null && (t.amount = e),
            localStorage.setItem(j, JSON.stringify(t)));
        } catch {}
    }, [j, D, k]));
  let N = T ? hp(T) : null;
  ((0, X.useEffect)(() => {
    if (N)
      try {
        _.current = localStorage.getItem(N) ?? ``;
      } catch {
        _.current = ``;
      }
  }, [N]),
    (0, X.useEffect)(() => {
      (m(!1), g(!1));
    }, [a?.at]));
  let P = up(k) !== null,
    F = D && !P,
    I = dp(E, D, k),
    L = `asset_budget_coins` in I,
    R = gp(k, 400),
    z = (0, X.useMemo)(() => dp(E, D, R), [E, D, R]),
    B = fn(pp, T || null, z),
    V = (e) =>
      e?.resume
        ? { actionId: a?.actionId || pp, params: fp() }
        : `asset_budget_coins` in I
          ? { actionId: pp, params: I }
          : { actionId: pp },
    H = L
      ? ` Includes up to ${I.asset_budget_coins} coins for assets the builder creates; only actual generations are charged.`
      : ``,
    U = (e) => {
      if (((_.current = e), N))
        try {
          localStorage.setItem(N, e);
        } catch {}
    },
    ee = () => {
      let n = l.trim();
      U(n);
      let r = n || `Build the initial playable version of the game`;
      (t?.(e.id, r, V()), u(``));
    },
    W = () => {
      let n = l.trim();
      U(n);
      let r = n
        ? `Rebuild with changes: ${n}`
        : `Rebuild the game with improvements`;
      (t?.(e.id, r, V()), u(``));
    },
    G = () => {
      t?.(e.id, `Resume the interrupted run and finish it`, V({ resume: !0 }));
    },
    te = () => {
      (u((e) => e || _.current), m(!0));
    },
    K = () => (T ? `${Mn.API_BASE_URL}/api/game/${T}/index.html` : null),
    ne = y || v,
    re = (i?.events.length ?? 0) > 0,
    ie = sp({
      isRunning: b,
      hasResult: !!a,
      resultSuccess: !!a?.success,
      startOver: p,
      hasFeed: re,
    });
  return b
    ? (0, Z.jsxs)(`div`, {
        className: `p-4 space-y-3`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 text-sm text-primary`,
            children: [
              (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
              (0, Z.jsxs)(`span`, {
                className: `font-medium`,
                children: [`Building `, C, `…`],
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[11px] leading-relaxed text-muted-foreground/70`,
            children: `Sandscape's coding agent is writing and testing the game. It runs in the background - you can keep working, steer it, or stop it below.`,
          }),
          (0, Z.jsx)(Ic, { sessionId: T, isRunning: b, onLocalActivity: s }),
          (0, Z.jsx)(Zc, { feed: i, progress: o, running: b }),
        ],
      })
    : ie.showFailedCard && a
      ? (0, Z.jsxs)(`div`, {
          className: `p-4 space-y-3`,
          children: [
            S && (0, Z.jsx)(rl, {}),
            (0, Z.jsx)(ap, {
              result: a,
              onResume: a.resumable ? G : void 0,
              onStartOver: te,
              disabled: S,
            }),
            ie.showRunLogDisclosure &&
              (0, Z.jsxs)(`div`, {
                className: `rounded-lg border border-border bg-secondary/20 overflow-hidden`,
                children: [
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => g((e) => !e),
                    className: `w-full flex items-center gap-1.5 px-3 py-2 text-left text-[11px] font-medium text-muted-foreground/70 hover:text-foreground/80 transition-colors`,
                    children: [
                      h
                        ? (0, Z.jsx)(ti, { className: `h-3 w-3 shrink-0` })
                        : (0, Z.jsx)(De, { className: `h-3 w-3 shrink-0` }),
                      `Run log`,
                    ],
                  }),
                  h &&
                    (0, Z.jsx)(`div`, {
                      className: `px-2 pb-2`,
                      children: (0, Z.jsx)(Zc, {
                        feed: i,
                        progress: null,
                        running: !1,
                      }),
                    }),
                ],
              }),
          ],
        })
      : (0, Z.jsxs)(`div`, {
          className: `p-4 space-y-4`,
          children: [
            ie.showSettledCard &&
              a &&
              (0, Z.jsx)(ap, { result: a, onResume: G, disabled: F || S }),
            w &&
              ((w.mechanics?.length ?? 0) > 0 || w.gameplayLoop) &&
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 block`,
                    children: `Based on`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `p-2.5 bg-secondary/30 rounded-lg space-y-2`,
                    children: [
                      w.gameplayLoop &&
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground line-clamp-2`,
                          children: w.gameplayLoop,
                        }),
                      w.mechanics &&
                        w.mechanics.length > 0 &&
                        (0, Z.jsxs)(`div`, {
                          className: `flex flex-wrap gap-1`,
                          children: [
                            w.mechanics.slice(0, 4).map((e, t) =>
                              (0, Z.jsx)(
                                `span`,
                                {
                                  className: `px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded`,
                                  children:
                                    e.length > 25 ? e.slice(0, 25) + `...` : e,
                                },
                                t,
                              ),
                            ),
                            w.mechanics.length > 4 &&
                              (0, Z.jsxs)(`span`, {
                                className: `px-2 py-0.5 text-[10px] text-muted-foreground/60`,
                                children: [
                                  `+`,
                                  w.mechanics.length - 4,
                                  ` more`,
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            v &&
              T &&
              (0, Z.jsxs)(`a`, {
                href: K() || `#`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `flex items-center gap-2.5 p-3 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/15 transition-colors`,
                children: [
                  (0, Z.jsx)(bn, { className: `h-4 w-4 text-green-400` }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-sm text-green-400 font-medium`,
                    children: [`Play `, C],
                  }),
                  (0, Z.jsx)(Zt, {
                    className: `h-3 w-3 text-green-400/60 ml-auto`,
                  }),
                ],
              }),
            v &&
              c &&
              (0, Z.jsx)(`div`, {
                "data-tour": `tour-open-level-editor`,
                children: (0, Z.jsx)(op, {
                  tabId: `level`,
                  label: `Open Level Editor`,
                  onOpenEditorTab: c,
                }),
              }),
            ie.showInlineFeed &&
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 block`,
                    children: `Build log`,
                  }),
                  (0, Z.jsx)(Zc, { feed: i, progress: null, running: !1 }),
                ],
              }),
            ne &&
              T &&
              (0, Z.jsxs)(`div`, {
                className: `rounded-lg border border-primary/30 bg-primary/5 p-3 space-y-2.5`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Z.jsx)(wn, { className: `h-3.5 w-3.5 text-primary` }),
                      (0, Z.jsx)(`span`, {
                        className: `text-xs font-semibold text-primary`,
                        children: `Build in your own coding agent`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `ml-auto text-[10px] font-medium text-green-400`,
                        children: `No coins`,
                      }),
                    ],
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] leading-relaxed text-muted-foreground`,
                    children: `Claude Code, Codex, Cursor - whichever you already pay for. We hand it the project id and it clones the concept, style guide and every generated asset, builds the game locally, and pushes it back here.`,
                  }),
                  (0, Z.jsxs)(`button`, {
                    onClick: () => f(!0),
                    className: `w-full flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90`,
                    children: [
                      `Get the prompt`,
                      (0, Z.jsx)(_e, { className: `h-3.5 w-3.5` }),
                    ],
                  }),
                ],
              }),
            ne &&
              !S &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [
                  (0, Z.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] uppercase tracking-wider text-muted-foreground/40`,
                    children: `or`,
                  }),
                  (0, Z.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
                ],
              }),
            ne &&
              (0, Z.jsx)(`textarea`, {
                value: l,
                onChange: (e) => u(e.target.value),
                disabled: S,
                className: `w-full h-20 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed`,
                placeholder: y
                  ? `Optional: specific requirements...`
                  : `Describe changes to make...`,
              }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                ne && S && (0, Z.jsx)(rl, {}),
                y &&
                  (0, Z.jsx)(an, {
                    onClick: ee,
                    className: `w-full`,
                    variant: `outline`,
                    cost: B,
                    label: `Build on Sandscape`,
                    icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
                    tooltip: `Sandscape's coding agent writes the whole game and charges your coin balance.${H}`,
                    checkBalance: !0,
                    disabled: F || S,
                  }),
                v &&
                  (0, Z.jsx)(an, {
                    "data-tour": `tour-rebuild`,
                    variant: `outline`,
                    onClick: W,
                    className: `w-full`,
                    cost: B,
                    label: `Rebuild on Sandscape`,
                    icon: (0, Z.jsx)(xn, { className: `h-4 w-4` }),
                    tooltip: `Rebuild with improvements or changes.${H}`,
                    checkBalance: !0,
                    disabled: F || S,
                  }),
                ne &&
                  E &&
                  (0, Z.jsxs)(`div`, {
                    className: `rounded-lg border border-border bg-secondary/20 p-2.5 space-y-2`,
                    children: [
                      (0, Z.jsxs)(`label`, {
                        className: `flex items-start gap-2 cursor-pointer select-none`,
                        children: [
                          (0, Z.jsx)(`input`, {
                            type: `checkbox`,
                            checked: D,
                            onChange: (e) => O(e.target.checked),
                            className: `mt-0.5 h-3.5 w-3.5 accent-primary shrink-0`,
                          }),
                          (0, Z.jsxs)(`span`, {
                            className: `min-w-0`,
                            children: [
                              (0, Z.jsx)(`span`, {
                                className: `block text-xs font-medium text-foreground/85`,
                                children: `Let the builder create missing assets`,
                              }),
                              (0, Z.jsx)(`span`, {
                                className: `block text-[10.5px] leading-relaxed text-muted-foreground/70`,
                                children: `The build spawns an asset specialist that generates the art, audio, or models it needs, charged from your coins only for what it actually generates, never above this ceiling.`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      D &&
                        (0, Z.jsxs)(`div`, {
                          className: `pl-6 space-y-1`,
                          children: [
                            (0, Z.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, Z.jsx)(`span`, {
                                  className: `text-[11px] text-muted-foreground`,
                                  children: `up to`,
                                }),
                                (0, Z.jsx)(`input`, {
                                  type: `number`,
                                  min: 1,
                                  max: 1e5,
                                  step: 1,
                                  value: k,
                                  onChange: (e) => A(e.target.value),
                                  onBlur: () => {
                                    let e = up(k);
                                    e !== null && A(String(e));
                                  },
                                  className: `w-24 bg-card border border-border rounded-md px-2 py-1 text-xs text-foreground/90 focus:outline-none focus:border-primary/40`,
                                }),
                                (0, Z.jsxs)(`span`, {
                                  className: `inline-flex items-center gap-0.5 text-[11px] text-amber-400`,
                                  children: [
                                    `coins for assets`,
                                    (0, Z.jsx)(Xt, { className: `h-3 w-3` }),
                                  ],
                                }),
                              ],
                            }),
                            !P &&
                              (0, Z.jsxs)(`p`, {
                                className: `text-[10.5px] text-amber-400/80`,
                                children: [
                                  `Enter a whole number of coins, 1 to `,
                                  1e5,
                                  `.`,
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ne &&
                  (0, Z.jsx)(`p`, {
                    className: `text-[10px] leading-relaxed text-muted-foreground/50`,
                    children: `A full build is the most expensive thing on Sandscape - it writes and tests the entire game. Building it on your own subscription costs you nothing here.`,
                  }),
              ],
            }),
            (0, Z.jsx)(ip, {
              open: d,
              onOpenChange: f,
              sessionId: T,
              gameTitle: r?.title,
            }),
          ],
        });
}
