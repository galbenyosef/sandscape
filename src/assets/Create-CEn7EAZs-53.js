// Create-CEn7EAZs 53 — classname
// Lines 16789-17192 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function jne({
  node: e,
  isCodingAgentRunning: t,
  onChatAbout: n,
  onExecute: r,
  gameDesignData: i,
  sessionDir: a,
  onUpdateDesignData: o,
}) {
  let s = o || (() => {}),
    c = ru(a),
    l = Ia(Ua(e.id)),
    [u, d] = (0, X.useState)(``),
    [f, p] = (0, X.useState)(`idle`),
    [m, h] = (0, X.useState)(!1),
    [g, _] = (0, X.useState)(null);
  (0, X.useEffect)(() => {
    jn.getBalance().then((e) => {
      e.success && _(e.balance);
    });
    let e = () => {
      jn.getBalance().then((e) => {
        e.success && _(e.balance);
      });
    };
    return (
      window.addEventListener(`coin-balance-refresh`, e),
      () => window.removeEventListener(`coin-balance-refresh`, e)
    );
  }, []);
  let v = l !== null && g !== null && g < l,
    [y, b] = (0, X.useState)(hp()),
    x = (0, X.useRef)(i);
  (0, X.useEffect)(() => {
    x.current = i;
  }, [i]);
  let S = (0, X.useRef)(null),
    C = (0, X.useRef)(null),
    w = (0, X.useRef)(!1);
  ((0, X.useEffect)(() => {
    i?.gameDesignConcept && b({ ...hp(), ...i.gameDesignConcept });
  }, [i?.gameDesignConcept]),
    (0, X.useEffect)(() => {
      i?.prompt && d(i.prompt);
    }, [i?.prompt]));
  let T = e.state === `complete` || e.state === `outdated`,
    E = e.state === `in-progress`,
    D = e.state === `available`,
    O = (0, X.useCallback)(
      async (e) => {
        if (c) {
          p(`saving`);
          try {
            (await Tr(c, e)).success
              ? (s({ ...x.current, gameDesignConcept: e }),
                e.title &&
                  e.title !== x.current?.gameDesignConcept?.title &&
                  Pr(c, { name: e.title }).catch(console.warn),
                p(`saved`),
                (C.current = setTimeout(() => p(`idle`), 2e3)))
              : (p(`error`), (C.current = setTimeout(() => p(`idle`), 3e3)));
          } catch {
            (p(`error`), (C.current = setTimeout(() => p(`idle`), 3e3)));
          }
          w.current = !1;
        }
      },
      [c, s],
    ),
    A = (0, X.useCallback)(
      (e) => {
        ((w.current = !0),
          S.current && clearTimeout(S.current),
          (S.current = setTimeout(() => O(e), 800)));
      },
      [O],
    );
  (0, X.useEffect)(
    () => () => {
      (S.current && clearTimeout(S.current),
        C.current && clearTimeout(C.current));
    },
    [],
  );
  let j = (0, X.useCallback)(
      (e, t) => {
        b((n) => {
          let r = { ...n, [e]: t };
          return (A(r), r);
        });
      },
      [A],
    ),
    M = (0, X.useCallback)(async () => {
      w.current &&
        S.current &&
        (clearTimeout(S.current),
        (S.current = null),
        (w.current = !1),
        await O(y));
    }, [O, y]),
    N = () => {
      u.trim() &&
        (s({
          ...x.current,
          prompt: u,
          title: `New Game Project`,
          targetPlatform: `Web Browser`,
        }),
        r?.(e.id, u));
    },
    P = async () => {
      c && (h(!1), await M(), r?.(e.id, u || y.elevator_pitch));
    },
    F = async (t) => {
      if (!c) return;
      await M();
      let n = [
        `Refine my game concept "${y.title || u}": ${y.elevator_pitch || ``} (unique hook: ${y.unique_hook || `none specified`})`,
      ];
      (t && n.push(`\nUser guidance: ${t}`), r?.(e.id, n.join(``)));
    };
  if (D)
    return (0, Z.jsxs)(`div`, {
      className: `p-4 space-y-5`,
      children: [
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsxs)(`h4`, {
              className: `text-sm font-semibold text-foreground/80 mb-2 flex items-center gap-2`,
              children: [
                (0, Z.jsx)(k, { className: `h-4 w-4 text-primary` }),
                `Describe Your Game`,
              ],
            }),
            (0, Z.jsx)(`textarea`, {
              value: u,
              onChange: (e) => d(e.target.value),
              className: `w-full h-32 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none scrollbar-themed focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
              placeholder: `Describe your game idea... e.g., 'A puzzle platformer where you control gravity to navigate through ancient temples'`,
              disabled: t,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground/60 mt-2`,
              children: `Be as detailed as you like — the AI will help expand your vision.`,
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `pt-2 space-y-2`,
          children: (0, Z.jsx)($t, {
            onClick: N,
            className: `w-full`,
            disabled: t || !u.trim(),
            cost: l,
            label: `Start Creating`,
            icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
            isLoading: E,
            loadingText: `Creating your game vision...`,
            tooltip: `Generate initial game plan and design document`,
            checkBalance: !0,
          }),
        }),
      ],
    });
  if (E)
    return (0, Z.jsx)(`div`, {
      className: `p-4`,
      children: (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-center gap-2 text-sm text-primary py-12`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin`,
          }),
          `Creating your game vision...`,
        ],
      }),
    });
  if (T && !i?.gameDesignConcept)
    return (0, Z.jsxs)(`div`, {
      className: `p-4 space-y-3`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3`,
          children: `Structured game design concept is missing. The concept_lock_in workflow may not have completed correctly.`,
        }),
        (0, Z.jsxs)(`button`, {
          onClick: () => n(e.id),
          className: `w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground/80 transition-colors py-2`,
          children: [(0, Z.jsx)(Kr, { className: `h-4 w-4` }), `Discuss Issue`],
        }),
      ],
    });
  let I = y;
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4 overflow-hidden`,
    children: [
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(mp, {
            value: I.title,
            onChange: (e) => j(`title`, e),
            placeholder: `Game Title`,
            displayClassName: `text-lg font-bold text-white leading-tight`,
            className: `text-lg font-bold`,
          }),
          (0, Z.jsx)(`div`, {
            className: `w-10 h-0.5 bg-primary/40 rounded-full mt-2 mb-2.5`,
          }),
          (0, Z.jsx)(Xl, {
            tags: I.genre_tags,
            onChange: (e) => j(`genre_tags`, e),
            placeholder: `Genre tag`,
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `border-l-2 border-primary/40 pl-3`,
        children: (0, Z.jsx)(mp, {
          value: I.elevator_pitch,
          onChange: (e) => j(`elevator_pitch`, e),
          placeholder: `Summarize your game in 2-3 exciting sentences...`,
          multiline: !0,
          rows: 3,
          displayClassName: `text-sm text-foreground/80 leading-relaxed italic`,
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `grid grid-cols-2 gap-2`,
        children: kne.map((e) =>
          (0, Z.jsx)(
            Ane,
            {
              label: e.label,
              value: I[e.key],
              icon: e.icon,
              presets: e.presets,
              onChange: (t) => j(e.key, t),
            },
            e.key,
          ),
        ),
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60 mb-1.5 block`,
            children: `Core Mechanics`,
          }),
          (0, Z.jsx)(Xl, {
            tags: I.core_mechanics,
            onChange: (e) => j(`core_mechanics`, e),
            placeholder: `Mechanic`,
            variant: `secondary`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border border-primary/25 rounded-xl p-3.5`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5 mb-1.5`,
            children: [
              (0, Z.jsx)(Nr, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[11px] font-semibold uppercase tracking-wide text-primary`,
                children: `What Makes It Special`,
              }),
            ],
          }),
          (0, Z.jsx)(mp, {
            value: I.unique_hook,
            onChange: (e) => j(`unique_hook`, e),
            placeholder: `What's the one thing that sets your game apart?`,
            multiline: !0,
            rows: 2,
            displayClassName: `text-sm text-foreground/80 leading-relaxed`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60 mb-1 block`,
            children: `World & Setting`,
          }),
          (0, Z.jsx)(mp, {
            value: I.setting_theme,
            onChange: (e) => j(`setting_theme`, e),
            placeholder: `Where does the game take place?`,
            multiline: !0,
            rows: 2,
            displayClassName: `text-sm text-muted-foreground leading-relaxed`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60 mb-1 block`,
            children: `Player Experience`,
          }),
          (0, Z.jsx)(mp, {
            value: I.player_experience,
            onChange: (e) => j(`player_experience`, e),
            placeholder: `How should the player feel while playing?`,
            multiline: !0,
            rows: 2,
            displayClassName: `text-sm text-muted-foreground leading-relaxed`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/60 mb-1 block`,
            children: `Story`,
          }),
          (0, Z.jsx)(mp, {
            value: I.narrative_elements,
            onChange: (e) => j(`narrative_elements`, e),
            placeholder: `Optional plot, narrative, or lore elements...`,
            multiline: !0,
            rows: 3,
            displayClassName: `text-sm text-muted-foreground leading-relaxed`,
          }),
        ],
      }),
      (0, Z.jsx)(Yl, { status: f }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 border-t border-border space-y-2`,
        children: [
          (0, Z.jsx)(`div`, {
            children: (0, Z.jsx)(Bu, {
              label: `Refine with AI`,
              cost: l,
              icon: (0, Z.jsx)(Nr, { className: `h-3.5 w-3.5 mr-1` }),
              onGenerate: F,
              disabled: t || v,
              size: `sm`,
              variant: `outline`,
              className: `w-full`,
              placeholder: `e.g., "Make it more action-oriented" or "Focus on the puzzle mechanics"`,
            }),
          }),
          m
            ? (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-start gap-2`,
                    children: [
                      (0, Z.jsx)(pn, {
                        className: `h-4 w-4 text-red-400 shrink-0 mt-0.5`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-red-300`,
                        children: `This will replace your entire concept. Are you sure?`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, Z.jsx)(`button`, {
                        onClick: () => h(!1),
                        className: `flex-1 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground/80 bg-card rounded-md transition-colors`,
                        children: `Cancel`,
                      }),
                      (0, Z.jsx)($t, {
                        onClick: P,
                        className: `flex-1`,
                        disabled: t,
                        cost: l,
                        label: `Confirm`,
                        icon: (0, Z.jsx)(ln, { className: `h-3.5 w-3.5` }),
                        checkBalance: !0,
                      }),
                    ],
                  }),
                ],
              })
            : (0, Z.jsxs)(`button`, {
                onClick: () => h(!0),
                disabled: t,
                className: `w-full flex items-center justify-center gap-2 text-xs text-muted-foreground/60 hover:text-red-400 transition-colors py-1.5 disabled:opacity-50`,
                children: [
                  (0, Z.jsx)(ln, { className: `h-3.5 w-3.5` }),
                  `Regenerate Concept`,
                ],
              }),
          (0, Z.jsxs)(`button`, {
            onClick: () => n(e.id),
            className: `w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground/80 transition-colors py-2`,
            children: [
              (0, Z.jsx)(Kr, { className: `h-4 w-4` }),
              `Discuss Changes`,
            ],
          }),
        ],
      }),
    ],
  });
}
