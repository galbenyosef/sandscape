// CreatePrompt-Bk7T97Uh 05 — classname
// Lines 1172-1476 of readable/assets/CreatePrompt-Bk7T97Uh.pretty.js (statement-aligned).
function We() {
  let { isAuthenticated: e } = x(),
    [t, n] = (0, G.useState)(``),
    [i, a] = (0, G.useState)([]),
    [o, s] = (0, G.useState)(!1),
    [c, l] = (0, G.useState)(!1),
    [u, d] = (0, G.useState)(!1),
    [f, h] = (0, G.useState)([]),
    [y, S] = (0, G.useState)({}),
    [C, E] = (0, G.useState)(new Set()),
    D = (0, G.useRef)(null),
    k = (0, G.useRef)(null),
    A = r(),
    { t: M, i18n: N } = g(),
    { close: P } = b();
  ((0, G.useEffect)(() => {
    P();
  }, [P]),
    (0, G.useEffect)(() => {
      e &&
        T()
          .then((e) => h(e.slice(0, 4)))
          .catch(() => {});
    }, [e]),
    (0, G.useEffect)(() => {
      let e = !1,
        t = f.filter((e) => !e.thumbnail_url);
      if (t.length !== 0) {
        for (let [n, r] of He(t.map((e) => e.session_id)))
          r.then((t) => {
            e || !t || S((e) => (e[n] === t ? e : { ...e, [n]: t }));
          });
        return () => {
          e = !0;
        };
      }
    }, [f]));
  let F = (e) => {
      let t = Z.find((t) => t.value === e);
      return t ? M(t.labelKey, t.value) : e;
    },
    I = (e) => {
      a((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    },
    L = t.trim(),
    R = [L, ...i.filter((e) => !RegExp(`\\b${e}\\b`, `i`).test(L))]
      .filter(Boolean)
      .join(` `);
  return (
    (0, G.useEffect)(
      () => () => {
        D.current && clearTimeout(D.current);
      },
      [],
    ),
    (0, K.jsxs)(`div`, {
      className: `relative h-[calc(100vh-64px)] overflow-hidden bg-background`,
      children: [
        (0, K.jsx)(Ie, {
          className: `absolute top-0 left-0 w-full h-full z-0 pointer-events-none`,
          alignTo: k,
        }),
        (0, K.jsxs)(`div`, {
          className: `relative z-10 flex h-full flex-col items-center overflow-y-auto px-4 pt-[14vh] pb-16`,
          children: [
            (0, K.jsx)(`h1`, {
              className: `text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight text-center [text-shadow:0_2px_24px_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_24px_rgba(0,0,0,0.6)]`,
              children: M(`createPrompt.title`, `What will you create?`),
            }),
            (0, K.jsx)(`p`, {
              className: `mt-4 mb-7 text-[11px] md:text-xs uppercase tracking-[0.32em] text-muted-foreground text-center [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
              children: M(
                `createPrompt.tagline`,
                `Games powered by your imagination`,
              ),
            }),
            (0, K.jsx)(`div`, {
              className: `h-9 w-full max-w-3xl shrink-0 overflow-x-auto overflow-y-hidden px-5 pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
              children: (0, K.jsx)(`div`, {
                className: `flex h-full items-end gap-1.5`,
                children: i.map((e) =>
                  (0, K.jsxs)(
                    `span`,
                    {
                      className: `inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-primary/40 bg-primary/15 py-0.5 pl-2.5 pr-1 text-xs text-primary backdrop-blur-sm dark:bg-primary/20 dark:text-white`,
                      children: [
                        F(e),
                        (0, K.jsx)(`button`, {
                          type: `button`,
                          "aria-label": M(
                            `createPrompt.removeTag`,
                            `Remove {{tag}}`,
                            { tag: F(e) },
                          ),
                          onClick: () => I(e),
                          className: `rounded-full p-0.5 text-primary/80 transition-colors hover:bg-primary/15 hover:text-primary dark:text-white/75 dark:hover:bg-white/15 dark:hover:text-white`,
                          children: (0, K.jsx)(O, { className: `h-3 w-3` }),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, K.jsx)(`div`, {
              ref: k,
              className: `w-full max-w-3xl`,
              children: (0, K.jsx)(p, {
                value: t,
                onChange: n,
                onSend: () => {
                  if (!e) {
                    A(j(`/create`, `create_gate`));
                    return;
                  }
                  !L ||
                    c ||
                    (l(!0),
                    d(!0),
                    (D.current = setTimeout(() => {
                      A(`/creating`, { state: { initialPrompt: R } });
                    }, 1500)));
                },
                onTranscription: (e) => n((t) => (t ? `${t} ${e}` : e)),
                replyToMessage: null,
                onCancelReply: () => {},
                placeholder: M(
                  `createPrompt.placeholder`,
                  `Describe your game idea...`,
                ),
                disabled: c,
                variant: `hero`,
              }),
            }),
            (0, K.jsxs)(`div`, {
              className: `mt-5 grid w-full max-w-3xl`,
              children: [
                (0, K.jsxs)(`div`, {
                  "aria-hidden": !0,
                  className: `invisible col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-2`,
                  children: [
                    Z.map(({ value: e, labelKey: t, icon: n }) =>
                      (0, K.jsxs)(
                        `span`,
                        {
                          className: `${Q} border-transparent`,
                          children: [
                            (0, K.jsx)(n, { className: `h-4 w-4` }),
                            M(t, e),
                          ],
                        },
                        e,
                      ),
                    ),
                    (0, K.jsxs)(`span`, {
                      className: `${Q} border-transparent`,
                      children: [
                        (0, K.jsx)(W, { className: `h-4 w-4` }),
                        M(`createPrompt.genresLess`, `Less`),
                        (0, K.jsx)(w, { className: `h-4 w-4` }),
                      ],
                    }),
                  ],
                }),
                (0, K.jsxs)(`div`, {
                  className: `col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-2`,
                  children: [
                    (o ? Z : Z.slice(0, Le)).map(
                      ({ value: e, labelKey: t, icon: n }) => {
                        let r = i.includes(e);
                        return (0, K.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            "aria-pressed": r,
                            onClick: () => I(e),
                            className: `${Q} ${r ? Re : ze}`,
                            children: [
                              (0, K.jsx)(n, {
                                className: `h-4 w-4 text-primary/80`,
                              }),
                              M(t, e),
                            ],
                          },
                          e,
                        );
                      },
                    ),
                    Z.length > Le &&
                      (0, K.jsxs)(`button`, {
                        type: `button`,
                        "aria-expanded": o,
                        onClick: () => s((e) => !e),
                        className: `${Q} ${ze}`,
                        children: [
                          (0, K.jsx)(W, {
                            className: `h-4 w-4 text-primary/80`,
                          }),
                          o
                            ? M(`createPrompt.genresLess`, `Less`)
                            : M(`createPrompt.genresMore`, `More`),
                          (0, K.jsx)(w, {
                            className: `h-4 w-4 transition-transform ${o ? `rotate-180` : ``}`,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            f.length > 0 &&
              (0, K.jsxs)(`div`, {
                className: `mt-20 w-full max-w-5xl`,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `mb-4 flex items-baseline justify-between [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
                    children: [
                      (0, K.jsx)(`p`, {
                        className: `text-sm font-medium text-foreground/90`,
                        children: M(
                          `createPrompt.recentProjects`,
                          `Recent projects`,
                        ),
                      }),
                      (0, K.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => A(`/profile/me`),
                        className: `group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground`,
                        children: [
                          M(`createPrompt.viewAll`, `View all`),
                          (0, K.jsx)(m, {
                            className: `h-4 w-4 transition-transform group-hover:translate-x-0.5`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, K.jsx)(`div`, {
                    className: `grid grid-cols-2 sm:grid-cols-4 gap-4`,
                    children: f.map((e) => {
                      let t = C.has(e.session_id)
                        ? void 0
                        : e.thumbnail_url || y[e.session_id];
                      return (0, K.jsxs)(
                        `button`,
                        {
                          onClick: () => A(`/creating?session=${e.session_id}`),
                          className: `group block w-full text-left`,
                          children: [
                            (0, K.jsx)(`div`, {
                              className: `relative aspect-video rounded-lg overflow-hidden bg-muted border border-border transition-all group-hover:border-primary/40 group-hover:scale-[1.02] dark:bg-[#1a1424] dark:border-white/15`,
                              children: t
                                ? (0, K.jsx)(`img`, {
                                    src: t,
                                    alt: ``,
                                    className: `w-full h-full object-cover`,
                                    onError: () => {
                                      ($.delete(e.session_id),
                                        E((t) => new Set(t).add(e.session_id)));
                                    },
                                  })
                                : (0, K.jsx)(`div`, {
                                    className: `w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted dark:from-purple-900/30 dark:to-black/50`,
                                    children: (0, K.jsx)(`span`, {
                                      className: `text-muted-foreground text-xs`,
                                      children: M(
                                        `createPrompt.noPreview`,
                                        `No preview`,
                                      ),
                                    }),
                                  }),
                            }),
                            (0, K.jsx)(`p`, {
                              className: `mt-2.5 text-sm text-foreground truncate [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
                              children: e.name,
                            }),
                            (0, K.jsx)(`p`, {
                              className: `mt-0.5 text-xs text-muted-foreground [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
                              children: Be(e.updated_at, N.language),
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
                ],
              }),
          ],
        }),
        (0, K.jsx)(v, {
          children:
            u &&
            (0, K.jsx)(_.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1.5, ease: `easeInOut` },
              className: `fixed inset-0 z-50 bg-background`,
            }),
        }),
      ],
    })
  );
}
