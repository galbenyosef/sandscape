// CreatePrompt-BAYFUPVf 05 — classname
// Lines 1166-1564 of readable/assets/CreatePrompt-BAYFUPVf.pretty.js (statement-aligned).
function He() {
  let {
      isAuthenticated: e,
      canCreate: t,
      loading: n,
      onWaitlist: i,
      requestedCreationAt: a,
      requestCreationAccess: o,
    } = x(),
    s = e && !n && !t,
    [c, l] = (0, q.useState)(``),
    [u, d] = (0, q.useState)([]),
    [m, v] = (0, q.useState)(!1),
    [S, C] = (0, q.useState)(!1),
    [E, O] = (0, q.useState)(!1),
    [k, j] = (0, q.useState)(!1),
    [M, N] = (0, q.useState)([]),
    [P, F] = (0, q.useState)({}),
    [I, L] = (0, q.useState)(new Set()),
    R = (0, q.useRef)(null),
    z = (0, q.useRef)(null),
    B = r(),
    { t: V, i18n: ee } = h(),
    { close: H } = b();
  ((0, q.useEffect)(() => {
    H();
  }, [H]),
    (0, q.useEffect)(() => {
      e &&
        T()
          .then((e) => N(e.slice(0, 4)))
          .catch(() => {});
    }, [e]),
    (0, q.useEffect)(() => {
      let e = !1,
        t = M.filter((e) => !e.thumbnail_url);
      if (t.length !== 0) {
        for (let [n, r] of Ve(t.map((e) => e.session_id)))
          r.then((t) => {
            e || !t || F((e) => (e[n] === t ? e : { ...e, [n]: t }));
          });
        return () => {
          e = !0;
        };
      }
    }, [M]));
  let te = async () => {
      if (!E) {
        O(!0);
        try {
          await o();
        } catch (e) {
          (console.error(`Failed to join the creator waitlist:`, e),
            y.error(
              V(
                `createPrompt.waitlistError`,
                `Couldn't add you to the creator waitlist. Please try again.`,
              ),
            ));
        } finally {
          O(!1);
        }
      }
    },
    U = (e) => {
      let t = Z.find((t) => t.value === e);
      return t ? V(t.labelKey, t.value) : e;
    },
    W = (e) => {
      d((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
    },
    G = c.trim(),
    K = [G, ...u.filter((e) => !RegExp(`\\b${e}\\b`, `i`).test(G))]
      .filter(Boolean)
      .join(` `);
  return (
    (0, q.useEffect)(
      () => () => {
        R.current && clearTimeout(R.current);
      },
      [],
    ),
    (0, J.jsxs)(`div`, {
      className: `relative h-[calc(100vh-64px)] overflow-hidden bg-background`,
      children: [
        (0, J.jsx)(Fe, {
          className: `absolute top-0 left-0 w-full h-full z-0 pointer-events-none`,
          alignTo: z,
        }),
        (0, J.jsxs)(`div`, {
          className: `relative z-10 flex h-full flex-col items-center overflow-y-auto px-4 pt-[14vh] pb-16`,
          children: [
            (0, J.jsx)(`h1`, {
              className: `text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight text-center [text-shadow:0_2px_24px_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_24px_rgba(0,0,0,0.6)]`,
              children: V(`createPrompt.title`, `What will you create?`),
            }),
            (0, J.jsx)(`p`, {
              className: `mt-4 mb-7 text-[11px] md:text-xs uppercase tracking-[0.32em] text-muted-foreground text-center [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
              children: V(
                `createPrompt.tagline`,
                `Games powered by your imagination`,
              ),
            }),
            s
              ? i
                ? (0, J.jsxs)(`div`, {
                    className: `w-full max-w-md rounded-lg border border-primary/30 bg-card/85 backdrop-blur p-6 text-center`,
                    children: [
                      (0, J.jsx)(`h2`, {
                        className: `text-lg font-semibold text-foreground mb-2`,
                        children: V(
                          `createPrompt.waitlistJoinedTitle`,
                          `You're on the creator waitlist`,
                        ),
                      }),
                      (0, J.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: V(
                          `createPrompt.waitlistJoinedMessage`,
                          `We'll email you when your spot opens. We invite new creators in batches — thanks for your patience!`,
                        ),
                      }),
                      a &&
                        (0, J.jsx)(`p`, {
                          className: `mt-3 text-xs text-muted-foreground`,
                          children: V(
                            `createPrompt.waitlistJoinedDate`,
                            `Requested {{date}}`,
                            { date: new Date(a).toLocaleDateString() },
                          ),
                        }),
                    ],
                  })
                : (0, J.jsxs)(`div`, {
                    className: `w-full max-w-md rounded-lg border border-primary/30 bg-card/85 backdrop-blur p-6 text-center`,
                    children: [
                      (0, J.jsx)(`h2`, {
                        className: `text-lg font-semibold text-foreground mb-2`,
                        children: V(
                          `createPrompt.lockedTitle`,
                          `Game creation is in invite-only alpha. Want in?`,
                        ),
                      }),
                      (0, J.jsx)(`p`, {
                        className: `text-sm text-muted-foreground mb-5`,
                        children: V(
                          `createPrompt.lockedMessage`,
                          `Join the creator waitlist and we'll unlock creation tools as new spots open.`,
                        ),
                      }),
                      (0, J.jsx)(`button`, {
                        onClick: te,
                        disabled: E,
                        className: `w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60`,
                        children: E
                          ? V(`createPrompt.waitlistJoining`, `Joining…`)
                          : V(
                              `createPrompt.waitlistJoin`,
                              `Join creator waitlist`,
                            ),
                      }),
                    ],
                  })
              : (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `h-9 w-full max-w-3xl shrink-0 overflow-x-auto overflow-y-hidden px-5 pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
                      children: (0, J.jsx)(`div`, {
                        className: `flex h-full items-end gap-1.5`,
                        children: u.map((e) =>
                          (0, J.jsxs)(
                            `span`,
                            {
                              className: `inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-primary/40 bg-primary/15 py-0.5 pl-2.5 pr-1 text-xs text-primary backdrop-blur-sm dark:bg-primary/20 dark:text-white`,
                              children: [
                                U(e),
                                (0, J.jsx)(`button`, {
                                  type: `button`,
                                  "aria-label": V(
                                    `createPrompt.removeTag`,
                                    `Remove {{tag}}`,
                                    { tag: U(e) },
                                  ),
                                  onClick: () => W(e),
                                  className: `rounded-full p-0.5 text-primary/80 transition-colors hover:bg-primary/15 hover:text-primary dark:text-white/75 dark:hover:bg-white/15 dark:hover:text-white`,
                                  children: (0, J.jsx)(D, {
                                    className: `h-3 w-3`,
                                  }),
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                    (0, J.jsx)(`div`, {
                      ref: z,
                      className: `w-full max-w-3xl`,
                      children: (0, J.jsx)(f, {
                        value: c,
                        onChange: l,
                        onSend: () => {
                          if (!e) {
                            B(A(`/create`, `create_gate`));
                            return;
                          }
                          s ||
                            !G ||
                            S ||
                            (C(!0),
                            j(!0),
                            (R.current = setTimeout(() => {
                              B(`/creating`, { state: { initialPrompt: K } });
                            }, 1500)));
                        },
                        onTranscription: (e) => l((t) => (t ? `${t} ${e}` : e)),
                        replyToMessage: null,
                        onCancelReply: () => {},
                        placeholder: V(
                          `createPrompt.placeholder`,
                          `Describe your game idea...`,
                        ),
                        disabled: S,
                        variant: `hero`,
                      }),
                    }),
                    (0, J.jsxs)(`div`, {
                      className: `mt-5 grid w-full max-w-3xl`,
                      children: [
                        (0, J.jsxs)(`div`, {
                          "aria-hidden": !0,
                          className: `invisible col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-2`,
                          children: [
                            Z.map(({ value: e, labelKey: t, icon: n }) =>
                              (0, J.jsxs)(
                                `span`,
                                {
                                  className: `${Q} border-transparent`,
                                  children: [
                                    (0, J.jsx)(n, { className: `h-4 w-4` }),
                                    V(t, e),
                                  ],
                                },
                                e,
                              ),
                            ),
                            (0, J.jsxs)(`span`, {
                              className: `${Q} border-transparent`,
                              children: [
                                (0, J.jsx)(ae, { className: `h-4 w-4` }),
                                V(`createPrompt.genresLess`, `Less`),
                                (0, J.jsx)(w, { className: `h-4 w-4` }),
                              ],
                            }),
                          ],
                        }),
                        (0, J.jsxs)(`div`, {
                          className: `col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-2`,
                          children: [
                            (m ? Z : Z.slice(0, Ie)).map(
                              ({ value: e, labelKey: t, icon: n }) => {
                                let r = u.includes(e);
                                return (0, J.jsxs)(
                                  `button`,
                                  {
                                    type: `button`,
                                    "aria-pressed": r,
                                    onClick: () => W(e),
                                    className: `${Q} ${r ? Le : Re}`,
                                    children: [
                                      (0, J.jsx)(n, {
                                        className: `h-4 w-4 text-primary/80`,
                                      }),
                                      V(t, e),
                                    ],
                                  },
                                  e,
                                );
                              },
                            ),
                            Z.length > Ie &&
                              (0, J.jsxs)(`button`, {
                                type: `button`,
                                "aria-expanded": m,
                                onClick: () => v((e) => !e),
                                className: `${Q} ${Re}`,
                                children: [
                                  (0, J.jsx)(ae, {
                                    className: `h-4 w-4 text-primary/80`,
                                  }),
                                  m
                                    ? V(`createPrompt.genresLess`, `Less`)
                                    : V(`createPrompt.genresMore`, `More`),
                                  (0, J.jsx)(w, {
                                    className: `h-4 w-4 transition-transform ${m ? `rotate-180` : ``}`,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            M.length > 0 &&
              (0, J.jsxs)(`div`, {
                className: `mt-20 w-full max-w-5xl`,
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `mb-4 flex items-baseline justify-between [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
                    children: [
                      (0, J.jsx)(`p`, {
                        className: `text-sm font-medium text-foreground/90`,
                        children: V(
                          `createPrompt.recentProjects`,
                          `Recent projects`,
                        ),
                      }),
                      (0, J.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => B(`/profile/me`),
                        className: `group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground`,
                        children: [
                          V(`createPrompt.viewAll`, `View all`),
                          (0, J.jsx)(p, {
                            className: `h-4 w-4 transition-transform group-hover:translate-x-0.5`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, J.jsx)(`div`, {
                    className: `grid grid-cols-2 sm:grid-cols-4 gap-4`,
                    children: M.map((e) => {
                      let t = I.has(e.session_id)
                        ? void 0
                        : e.thumbnail_url || P[e.session_id];
                      return (0, J.jsxs)(
                        `button`,
                        {
                          onClick: () => B(`/creating?session=${e.session_id}`),
                          className: `group block w-full text-left`,
                          children: [
                            (0, J.jsx)(`div`, {
                              className: `relative aspect-video rounded-lg overflow-hidden bg-muted border border-border transition-all group-hover:border-primary/40 group-hover:scale-[1.02] dark:bg-[#1a1424] dark:border-white/15`,
                              children: t
                                ? (0, J.jsx)(`img`, {
                                    src: t,
                                    alt: ``,
                                    className: `w-full h-full object-cover`,
                                    onError: () => {
                                      ($.delete(e.session_id),
                                        L((t) => new Set(t).add(e.session_id)));
                                    },
                                  })
                                : (0, J.jsx)(`div`, {
                                    className: `w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted dark:from-purple-900/30 dark:to-black/50`,
                                    children: (0, J.jsx)(`span`, {
                                      className: `text-muted-foreground text-xs`,
                                      children: V(
                                        `createPrompt.noPreview`,
                                        `No preview`,
                                      ),
                                    }),
                                  }),
                            }),
                            (0, J.jsx)(`p`, {
                              className: `mt-2.5 text-sm text-foreground truncate [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
                              children: e.name,
                            }),
                            (0, J.jsx)(`p`, {
                              className: `mt-0.5 text-xs text-muted-foreground [text-shadow:0_1px_4px_rgba(255,255,255,0.9)] dark:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`,
                              children: ze(e.updated_at, ee.language),
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
        (0, J.jsx)(_, {
          children:
            k &&
            (0, J.jsx)(g.div, {
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
