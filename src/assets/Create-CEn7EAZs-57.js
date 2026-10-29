// Create-CEn7EAZs 57 — classname
// Lines 17708-18257 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Une({
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
    x = Na(xp),
    S = Na(Sp),
    C = n ? n.split(`/`).pop() || n : ``,
    w = a?.actionId,
    T = `${C}|${a?.at ?? ``}`,
    [E, D] = (0, X.useState)(null),
    O = E?.key === T ? E.scope : w === Sp ? `quick` : `full`,
    k = O === `quick` && S ? Sp : xp,
    A = k === Sp ? S : x,
    j = !!A?.locked,
    M = r?.title || `Your Game`,
    N = r?.gamePlan,
    P = zne(A),
    [F, I] = (0, X.useState)(!1),
    [L, R] = (0, X.useState)(`100`),
    z = { quick: Ia(S), full: Ia(x) },
    B = C ? Bne(C) : null,
    [V, H] = (0, X.useState)(null);
  ((0, X.useEffect)(() => {
    if (!B) return;
    let e = {};
    try {
      let t = localStorage.getItem(B),
        n = t ? JSON.parse(t) : null;
      n && typeof n == `object` && (e = n);
    } catch {}
    (I(typeof e.enabled == `boolean` && e.enabled),
      R(
        typeof e.amount == `number` &&
          Number.isInteger(e.amount) &&
          e.amount >= 1
          ? String(e.amount)
          : `100`,
      ),
      H(B));
  }, [B]),
    (0, X.useEffect)(() => {
      if (!(!B || V !== B))
        try {
          let e = vp(L),
            t = { enabled: F };
          (e !== null && (t.amount = e),
            localStorage.setItem(B, JSON.stringify(t)));
        } catch {}
    }, [B, V, F, L]));
  let ee = C ? Vne(C) : null;
  ((0, X.useEffect)(() => {
    if (ee)
      try {
        _.current = localStorage.getItem(ee) ?? ``;
      } catch {
        _.current = ``;
      }
  }, [ee]),
    (0, X.useEffect)(() => {
      (m(!1), g(!1));
    }, [a?.at]));
  let te = vp(L) !== null,
    U = F && !te,
    W = yp(P, F, L),
    ne = `asset_budget_coins` in W,
    G = Hne(L, 400),
    re = (0, X.useMemo)(() => yp(P, F, G), [P, F, G]),
    ie = Za({
      actionId: k,
      sessionId: C || null,
      includeChildren: !0,
      validate: !1,
      completedRun: a,
    }),
    ae = Pa(k, C || null, re, ie.payload),
    oe = ae.errorCode && qa.has(ae.errorCode) ? ae.error : null,
    se = F && L !== G ? null : ae.quote,
    ce = se?.total ?? null,
    K = se === null || ie.blocked,
    le = Pa(a?.resumable ? a.actionId || xp : null, C || null, { resume: !0 }),
    ue = le.quote,
    de = (e) =>
      e?.resume
        ? { actionId: a?.actionId || xp, params: bp() }
        : { actionId: k, params: W, codingModels: ie.payload },
    fe = ne ? ` Includes up to ${W.asset_budget_coins} coins for assets.` : ``,
    pe = (e) => {
      if (((_.current = e), ee))
        try {
          localStorage.setItem(ee, e);
        } catch {}
    },
    me = () => {
      if (U || K) return;
      let n = l.trim();
      pe(n);
      let r = n || `Build the whole game the design describes`;
      (t?.(e.id, r, de()), u(``));
    },
    he = () => {
      if (U || K) return;
      let n = l.trim();
      pe(n);
      let r = n
        ? `Rebuild with changes: ${n}`
        : `Rebuild the game with improvements`;
      (t?.(e.id, r, de()), u(``));
    },
    ge = () => {
      ue &&
        t?.(
          e.id,
          `Resume the interrupted run and finish it`,
          de({ resume: !0 }),
        );
    },
    _e = () => {
      (u((e) => e || _.current), m(!0));
    },
    ye = () => (C ? `${yn.API_BASE_URL}/api/game/${C}/index.html` : null),
    be = y || v,
    q = (i?.events.length ?? 0) > 0,
    xe = Lne({
      isRunning: b,
      hasResult: !!a,
      resultSuccess: !!a?.success,
      startOver: p,
      hasFeed: q,
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
                children: [`Building `, M, `…`],
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[11px] leading-relaxed text-muted-foreground/70`,
            children: `Sandscape's coding agent is writing and testing the game. It runs in the background - you can keep working, steer it, or stop it below.`,
          }),
          (0, Z.jsx)(vc, { sessionId: C, isRunning: b, onLocalActivity: s }),
          (0, Z.jsx)(Nc, { feed: i, progress: o, running: b }),
        ],
      })
    : xe.showFailedCard && a
      ? (0, Z.jsxs)(`div`, {
          className: `p-4 space-y-3`,
          children: [
            j && (0, Z.jsx)(Vc, {}),
            (0, Z.jsx)(gp, {
              result: a,
              onResume: a.resumable ? ge : void 0,
              onStartOver: _e,
              disabled: j,
              resumeCost: ue?.total ?? null,
              resumeQuoteError: le.error,
            }),
            xe.showRunLogDisclosure &&
              (0, Z.jsxs)(`div`, {
                className: `rounded-lg border border-border bg-secondary/20 overflow-hidden`,
                children: [
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => g((e) => !e),
                    className: `w-full flex items-center gap-1.5 px-3 py-2 text-left text-[11px] font-medium text-muted-foreground/70 hover:text-foreground/80 transition-colors`,
                    children: [
                      h
                        ? (0, Z.jsx)(zr, { className: `h-3 w-3 shrink-0` })
                        : (0, Z.jsx)(Se, { className: `h-3 w-3 shrink-0` }),
                      `Run log`,
                    ],
                  }),
                  h &&
                    (0, Z.jsx)(`div`, {
                      className: `px-2 pb-2`,
                      children: (0, Z.jsx)(Nc, {
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
            xe.showSettledCard &&
              a &&
              (0, Z.jsx)(gp, {
                result: a,
                onResume: ge,
                disabled: j,
                resumeCost: ue?.total ?? null,
                resumeQuoteError: le.error,
              }),
            N &&
              ((N.mechanics?.length ?? 0) > 0 || N.gameplayLoop) &&
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 block`,
                    children: `Based on`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `p-2.5 bg-secondary/30 rounded-lg space-y-2`,
                    children: [
                      N.gameplayLoop &&
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground line-clamp-2`,
                          children: N.gameplayLoop,
                        }),
                      N.mechanics &&
                        N.mechanics.length > 0 &&
                        (0, Z.jsxs)(`div`, {
                          className: `flex flex-wrap gap-1`,
                          children: [
                            N.mechanics.slice(0, 4).map((e, t) =>
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
                            N.mechanics.length > 4 &&
                              (0, Z.jsxs)(`span`, {
                                className: `px-2 py-0.5 text-[10px] text-muted-foreground/60`,
                                children: [
                                  `+`,
                                  N.mechanics.length - 4,
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
              C &&
              (0, Z.jsxs)(`a`, {
                href: ye() || `#`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `flex items-center gap-2.5 p-3 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/15 transition-colors`,
                children: [
                  (0, Z.jsx)(cn, { className: `h-4 w-4 text-green-400` }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-sm text-green-400 font-medium`,
                    children: [`Play `, M],
                  }),
                  (0, Z.jsx)(Xt, {
                    className: `h-3 w-3 text-green-400/60 ml-auto`,
                  }),
                ],
              }),
            v &&
              c &&
              (0, Z.jsx)(`div`, {
                "data-tour": `tour-open-level-editor`,
                children: (0, Z.jsx)(_p, {
                  tabId: `level`,
                  label: `Open Level Editor`,
                  onOpenEditorTab: c,
                }),
              }),
            xe.showInlineFeed &&
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 block`,
                    children: `Build log`,
                  }),
                  (0, Z.jsx)(Nc, { feed: i, progress: null, running: !1 }),
                ],
              }),
            be &&
              C &&
              (0, Z.jsxs)(`div`, {
                className: `rounded-lg border border-primary/30 bg-primary/5 p-3 space-y-2.5`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Z.jsx)(fn, { className: `h-3.5 w-3.5 text-primary` }),
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
                      (0, Z.jsx)(ve, { className: `h-3.5 w-3.5` }),
                    ],
                  }),
                ],
              }),
            be &&
              !j &&
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
            be &&
              (0, Z.jsx)(`textarea`, {
                value: l,
                onChange: (e) => u(e.target.value),
                disabled: j,
                className: `w-full h-20 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed`,
                placeholder: y
                  ? `Optional: specific requirements...`
                  : `Describe changes to make...`,
              }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                be && j && (0, Z.jsx)(Vc, {}),
                be &&
                  S &&
                  (0, Z.jsx)(`div`, {
                    role: `radiogroup`,
                    "aria-label": `Build size`,
                    className: `grid grid-cols-2 gap-2`,
                    children: [
                      [
                        `quick`,
                        `Quick build`,
                        `The whole design from a simpler plan, built fast.`,
                      ],
                      [
                        `full`,
                        `Full build`,
                        `More rounds on every part, for the most polish.`,
                      ],
                    ].map(([e, t, n]) =>
                      (0, Z.jsxs)(
                        `button`,
                        {
                          type: `button`,
                          role: `radio`,
                          "aria-checked": O === e,
                          disabled: j,
                          onClick: () => D({ key: T, scope: e }),
                          className: `rounded-lg border p-2.5 text-left transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${O === e ? `border-primary/60 bg-primary/10` : `border-border bg-secondary/20 hover:border-primary/30`}`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `flex items-center justify-between gap-2`,
                              children: [
                                (0, Z.jsx)(`span`, {
                                  className: `text-xs font-medium text-foreground/90`,
                                  children: t,
                                }),
                                z[e] !== null &&
                                  (0, Z.jsxs)(`span`, {
                                    "data-testid": `build-door-price-${e}`,
                                    className: `inline-flex items-center gap-0.5 text-[11px] font-medium text-amber-400`,
                                    children: [
                                      z[e],
                                      (0, Z.jsx)(Jt, {
                                        className: `h-3 w-3`,
                                        "aria-label": `coins`,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `block text-[10.5px] leading-relaxed text-muted-foreground mt-0.5`,
                              children: n,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                be &&
                  P &&
                  (0, Z.jsxs)(`div`, {
                    className: `rounded-lg border border-border bg-secondary/20 p-2.5 space-y-2`,
                    children: [
                      (0, Z.jsxs)(`label`, {
                        className: `flex items-start gap-2 cursor-pointer select-none`,
                        children: [
                          (0, Z.jsx)(`input`, {
                            type: `checkbox`,
                            checked: F,
                            onChange: (e) => I(e.target.checked),
                            className: `mt-0.5 h-3.5 w-3.5 accent-primary shrink-0`,
                          }),
                          (0, Z.jsx)(Ut, {
                            children: (0, Z.jsxs)(qt, {
                              children: [
                                (0, Z.jsx)(Kt, {
                                  asChild: !0,
                                  children: (0, Z.jsx)(`span`, {
                                    className: `text-xs font-medium text-foreground/85`,
                                    children: `Let the builder create missing assets`,
                                  }),
                                }),
                                (0, Z.jsx)(Wt, {
                                  side: `top`,
                                  className: `max-w-[240px] text-xs`,
                                  children: `The builder generates any art, audio or models the game still needs, charged only for what it makes, up to the amount you set.`,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      F &&
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
                                  value: L,
                                  onChange: (e) => R(e.target.value),
                                  onBlur: () => {
                                    let e = vp(L);
                                    e !== null && R(String(e));
                                  },
                                  className: `w-24 bg-card border border-border rounded-md px-2 py-1 text-xs text-foreground/90 focus:outline-none focus:border-primary/40`,
                                }),
                                (0, Z.jsxs)(`span`, {
                                  className: `inline-flex items-center gap-0.5 text-[11px] text-amber-400`,
                                  children: [
                                    `coins for assets`,
                                    (0, Z.jsx)(Jt, { className: `h-3 w-3` }),
                                  ],
                                }),
                              ],
                            }),
                            !te &&
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
                be &&
                  (0, Z.jsx)(Sc, { choice: ie, serverError: oe, disabled: j }),
                be &&
                  !se &&
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] text-muted-foreground`,
                    role: ae.error ? `alert` : `status`,
                    children: oe
                      ? `The model choice was refused — see Models above.`
                      : ae.error || `Waiting for a current build quote.`,
                  }),
                y &&
                  (0, Z.jsx)($t, {
                    onClick: me,
                    className: `w-full`,
                    variant: `outline`,
                    cost: ce,
                    label: `Build on Sandscape`,
                    icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
                    tooltip: `Sandscape's coding agent writes and tests the whole game.${fe}`,
                    checkBalance: !0,
                    disabled: U || K || j,
                  }),
                v &&
                  (0, Z.jsx)($t, {
                    "data-tour": `tour-rebuild`,
                    variant: `outline`,
                    onClick: he,
                    className: `w-full`,
                    cost: ce,
                    label: `Rebuild on Sandscape`,
                    icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
                    tooltip: `Rebuild with improvements or changes.${fe}`,
                    checkBalance: !0,
                    disabled: U || K || j,
                  }),
              ],
            }),
            (0, Z.jsx)(Ine, {
              open: d,
              onOpenChange: f,
              sessionId: C,
              gameTitle: r?.title,
            }),
          ],
        });
}
