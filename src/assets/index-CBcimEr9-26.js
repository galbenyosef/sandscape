// index-CBcimEr9 26 — jsx
// Lines 9485-9997 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function Pc() {
  let { logout: e, user: t, isAuthenticated: n } = G(),
    { toggle: r } = tr(),
    {
      headerTab: i,
      setHeaderTab: a,
      openEditor: o,
      openInvite: c,
      presenceUsers: l,
      ownerUserId: u,
      setHeaderTitleSlot: d,
    } = Ce(),
    p = s(),
    m = f(),
    { t: h } = R(),
    [g, _] = (0, H.useState)(!1),
    [v, y] = (0, H.useState)(!1),
    b = et() && v;
  (0, H.useEffect)(
    () =>
      $e((e, t) => {
        e === `tour:step-entered`
          ? y(!1)
          : e === `tour:on-enter` &&
            tt(t)?.kind === `open-editor-menu` &&
            y(!0);
      }),
    [],
  );
  let [S, C] = (0, H.useState)(void 0),
    [T, E] = (0, H.useState)(``),
    [D, O] = (0, H.useState)([]),
    k = je(m.pathname),
    A = Na(),
    j = k ? new URLSearchParams(m.search).get(`session`) : null,
    ee = vt() === `dark`;
  return (
    (0, H.useEffect)(() => {
      (async () => {
        if (t)
          try {
            let e = await w.getProfile(t.id);
            e.avatar_url ? C(Ue(e.avatar_url)) : C(void 0);
          } catch {
            C(void 0);
          }
        else C(void 0);
      })();
    }, [t]),
    (0, H.useEffect)(() => {
      k &&
        n &&
        Ec()
          .then(O)
          .catch(() => {});
    }, [k, n]),
    (0, H.useEffect)(() => {
      if (m.pathname === `/search`) {
        let e = new URLSearchParams(m.search).get(`q`) || ``;
        E(e);
      } else E(``);
    }, [m]),
    (0, U.jsx)(`header`, {
      className: `fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`,
      children: (0, U.jsxs)(`div`, {
        className: `w-full px-2 sm:px-4 flex h-16 items-center justify-between`,
        children: [
          (0, U.jsxs)(`div`, {
            className: x(
              `flex items-center gap-1 sm:gap-2`,
              k && A && `min-w-0 flex-1`,
            ),
            children: [
              (0, U.jsx)(P, {
                variant: `ghost`,
                size: `icon`,
                onClick: r,
                "aria-label": h(`header.toggleMenu`, `Toggle menu`),
                className: `hidden lg:flex h-8 w-8 sm:h-10 sm:w-10`,
                children: (0, U.jsx)(xn, {
                  className: `h-4 w-4 sm:h-5 sm:w-5 text-foreground`,
                }),
              }),
              (0, U.jsx)(`div`, {
                className: `flex shrink-0 items-center cursor-pointer hover:text-primary`,
                onClick: () => {
                  p(`/`);
                },
                children: (0, U.jsx)(`img`, {
                  src: A
                    ? `/favicon.png`
                    : ee
                      ? `/Sandscape_Logo_White_Large.png`
                      : `/Sandscape_Logo_Black_Large.png`,
                  alt: `Sandscape`,
                  className: x(`w-auto`, A ? `h-7` : `h-6 sm:h-8`),
                }),
              }),
              k &&
                A &&
                (0, U.jsx)(`div`, { ref: d, className: `min-w-0 flex-1 px-1` }),
            ],
          }),
          k
            ? (0, U.jsx)(`div`, {
                className: x(
                  `flex min-w-0 justify-center md:flex-1`,
                  A && `mr-3`,
                ),
                children: (0, U.jsxs)(`div`, {
                  className: `flex shrink-0 items-center gap-1`,
                  children: [
                    !A &&
                      (0, U.jsxs)(ce, {
                        open: g || b,
                        onOpenChange: _,
                        modal: !b,
                        children: [
                          (0, U.jsx)(se, {
                            asChild: !0,
                            children: (0, U.jsx)(`button`, {
                              type: `button`,
                              "aria-label": h(
                                `header.openEditorMenu`,
                                `Open editor menu`,
                              ),
                              title: h(
                                `header.openEditorMenu`,
                                `Open editor menu`,
                              ),
                              className: `flex items-center justify-center h-7 w-7 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors`,
                              children: (0, U.jsx)(ln, {
                                className: `h-3.5 w-3.5`,
                              }),
                            }),
                          }),
                          (0, U.jsxs)(le, {
                            align: `center`,
                            className: `w-48`,
                            "data-tour": `tour-editor-menu`,
                            children: [
                              (0, U.jsx)(de, {
                                className: `text-xs`,
                                children: h(`header.openEditor`, `Open editor`),
                              }),
                              (0, U.jsx)(I, {}),
                              ue.map((e) => {
                                let t = e.icon;
                                return (0, U.jsxs)(
                                  F,
                                  {
                                    onClick: () => o(e.tabId),
                                    className: `text-xs`,
                                    children: [
                                      (0, U.jsx)(t, {
                                        className: `h-3.5 w-3.5 mr-2 text-muted-foreground`,
                                      }),
                                      (0, U.jsx)(`span`, {
                                        className: `truncate`,
                                        children: e.label,
                                      }),
                                    ],
                                  },
                                  e.tabId,
                                );
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, U.jsxs)(`div`, {
                      className: `flex items-center border border-border rounded-lg p-0.5 gap-0`,
                      children: [
                        (0, U.jsxs)(`button`, {
                          onClick: () => a(`editor`),
                          "aria-label": A ? `Create` : void 0,
                          className: x(
                            `flex items-center gap-1 md:gap-1.5 px-3 md:px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors`,
                            i === `editor`
                              ? `bg-primary/15 text-primary border border-primary/30`
                              : `text-muted-foreground hover:text-foreground border border-transparent`,
                          ),
                          children: [
                            (0, U.jsx)(wn, { className: `h-3.5 w-3.5` }),
                            !A && `Editor`,
                          ],
                        }),
                        (0, U.jsxs)(`button`, {
                          "data-tour": `tour-header-game`,
                          onClick: () => {
                            (a(`game`), nt(`tour:game-opened`));
                          },
                          "aria-label": A ? `Game` : void 0,
                          className: x(
                            `flex items-center gap-1 md:gap-1.5 px-3 md:px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors`,
                            i === `game`
                              ? `bg-primary/15 text-primary border border-primary/30`
                              : `text-muted-foreground hover:text-foreground border border-transparent`,
                          ),
                          children: [
                            (0, U.jsx)(_n, { className: `h-3.5 w-3.5` }),
                            !A && `Game`,
                          ],
                        }),
                        !A &&
                          (0, U.jsxs)(`button`, {
                            type: `button`,
                            disabled: !0,
                            "aria-disabled": `true`,
                            title: `Rescape is coming soon`,
                            className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-muted-foreground/40 border border-transparent cursor-not-allowed`,
                            children: [
                              (0, U.jsx)(On, { className: `h-3.5 w-3.5` }),
                              `Rescape`,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, U.jsx)(`div`, {
                className: `flex-1 max-w-2xl mx-1 sm:mx-4`,
                children: (0, U.jsxs)(`form`, {
                  onSubmit: (e) => {
                    (e.preventDefault(),
                      T.trim() && p(`/search?q=${encodeURIComponent(T)}`));
                  },
                  className: `relative w-full`,
                  children: [
                    (0, U.jsx)(Dn, {
                      className: `absolute left-2 top-2.5 h-4 w-4 text-muted-foreground`,
                    }),
                    (0, U.jsx)(nr, {
                      type: `search`,
                      placeholder: h(`general.search`),
                      className: `pl-8 w-full rounded-full text-sm`,
                      value: T,
                      onChange: (e) => E(e.target.value),
                    }),
                  ],
                }),
              }),
          (0, U.jsxs)(`div`, {
            className: `flex items-center gap-1 sm:gap-2`,
            children: [
              k
                ? (0, U.jsxs)(P, {
                    "data-tour": `tour-publish`,
                    onClick: () => {
                      if (Ae(m.pathname)) {
                        nt(`tour:publish-clicked`);
                        return;
                      }
                      if (n) {
                        let e = new URLSearchParams(m.search).get(`session`);
                        p(e ? `/publish?session=${e}` : `/publish`);
                      } else {
                        let e = new URLSearchParams(m.search).get(`session`);
                        p(
                          J(e ? `/publish?session=${e}` : `/publish`, `header`),
                        );
                      }
                    },
                    variant: `default`,
                    className: `hidden lg:flex gap-1.5 rounded-lg px-4`,
                    size: `sm`,
                    children: [
                      (0, U.jsx)(En, {
                        className: `h-3.5 w-3.5 text-primary-foreground`,
                      }),
                      (0, U.jsx)(`span`, {
                        className: `hidden sm:inline`,
                        children: h(`navigation.publish`),
                      }),
                    ],
                  })
                : (0, U.jsxs)(P, {
                    onClick: () => {
                      p(n ? `/create` : J(`/create`, `create_gate`));
                    },
                    variant: `default`,
                    className: `hidden lg:flex gap-1 rounded-full px-2 sm:px-4`,
                    size: `sm`,
                    children: [
                      (0, U.jsx)(Tn, {
                        className: `h-4 w-4 text-primary-foreground`,
                      }),
                      (0, U.jsx)(`span`, {
                        className: `hidden sm:inline`,
                        children: h(`navigation.create`),
                      }),
                    ],
                  }),
              k &&
                D.length > 0 &&
                (0, U.jsxs)(ce, {
                  children: [
                    (0, U.jsx)(se, {
                      asChild: !0,
                      children: (0, U.jsxs)(P, {
                        variant: `outline`,
                        size: `sm`,
                        className: `hidden lg:flex gap-1.5 rounded-lg px-3 text-xs`,
                        children: [
                          (0, U.jsx)(gn, { className: `h-3.5 w-3.5` }),
                          `Projects`,
                          (0, U.jsx)(ln, {
                            className: `h-3 w-3 text-muted-foreground`,
                          }),
                        ],
                      }),
                    }),
                    (0, U.jsxs)(le, {
                      align: `end`,
                      className: `w-56`,
                      children: [
                        (0, U.jsx)(de, {
                          className: `text-xs`,
                          children: h(`header.yourProjects`, `Your Projects`),
                        }),
                        (0, U.jsx)(I, {}),
                        D.slice(0, 8).map((e) =>
                          (0, U.jsx)(
                            F,
                            {
                              onClick: () => {
                                e.session_id !== j &&
                                  (window.location.href = `/creating?session=${e.session_id}`);
                              },
                              className: x(
                                `text-xs`,
                                e.session_id === j && `bg-accent`,
                              ),
                              children: (0, U.jsx)(`span`, {
                                className: `truncate`,
                                children: e.name,
                              }),
                            },
                            e.id,
                          ),
                        ),
                        (0, U.jsx)(I, {}),
                        (0, U.jsxs)(F, {
                          onClick: () => p(`/create`),
                          className: `text-xs`,
                          children: [
                            (0, U.jsx)(Tn, { className: `h-3 w-3 mr-1.5` }),
                            h(`header.newProject`, `New Project`),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              n &&
                (0, U.jsx)(`button`, {
                  type: `button`,
                  onClick: () => p(`/settings?tab=billing`),
                  className: `rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
                  "aria-label": h(
                    `header.subscriptionAndSandcoins`,
                    `Subscription`,
                  ),
                  title: h(`header.subscriptionAndSandcoins`, `Subscription`),
                  children: (0, U.jsx)(Te, { compact: !0, showTooltip: !0 }),
                }),
              (0, U.jsx)(`div`, {
                className: k ? `hidden md:block` : void 0,
                children: (0, U.jsx)(Mo, {}),
              }),
              (0, U.jsx)(`div`, {
                className: k ? `hidden md:block` : void 0,
                children: (0, U.jsx)(Tc, {}),
              }),
              k &&
                A &&
                (0, U.jsx)(pe, {
                  users: l.filter((e) => e.user_id !== t?.id),
                  ownerUserId: u,
                }),
              (0, U.jsxs)(ce, {
                children: [
                  (0, U.jsx)(se, {
                    asChild: !0,
                    children: (0, U.jsx)(P, {
                      variant: `ghost`,
                      className: `relative h-8 w-8 rounded-full`,
                      "aria-label": h(`header.myAccount`, `My Account`),
                      children: (0, U.jsxs)(Xe, {
                        className: `h-8 w-8`,
                        children: [
                          (0, U.jsx)(Ye, {
                            src: S,
                            alt: `@user`,
                            className: `object-cover object-center w-full h-full`,
                          }),
                          (0, U.jsx)(Je, {
                            children: (0, U.jsx)(De, {
                              className: `h-4 w-4 text-foreground`,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, U.jsx)(le, {
                    children: n
                      ? (0, U.jsxs)(U.Fragment, {
                          children: [
                            (0, U.jsx)(de, {
                              children: h(`header.myAccount`, `My Account`),
                            }),
                            (0, U.jsx)(I, {}),
                            k &&
                              A &&
                              (0, U.jsxs)(U.Fragment, {
                                children: [
                                  (0, U.jsxs)(F, {
                                    onClick: c,
                                    children: [
                                      (0, U.jsx)(Mn, {
                                        className: `mr-2 h-4 w-4 text-muted-foreground`,
                                      }),
                                      h(
                                        `header.inviteCollaborators`,
                                        `Invite collaborators`,
                                      ),
                                    ],
                                  }),
                                  (0, U.jsxs)(F, {
                                    onClick: () => p(`/create`),
                                    children: [
                                      (0, U.jsx)(Tn, {
                                        className: `mr-2 h-4 w-4 text-muted-foreground`,
                                      }),
                                      h(`header.newProject`, `New Project`),
                                    ],
                                  }),
                                  (0, U.jsx)(I, {}),
                                ],
                              }),
                            (0, U.jsx)(F, {
                              onClick: () => {
                                p(
                                  n
                                    ? `/profile/me`
                                    : J(`/profile/me`, `header`),
                                );
                              },
                              children: h(`navigation.profile`),
                            }),
                            (0, U.jsx)(F, {
                              onClick: () => p(`/settings`),
                              children: h(`navigation.settings`),
                            }),
                            (0, U.jsx)(F, {
                              onClick: () => p(`/settings?tab=billing`),
                              children: h(
                                `header.subscriptionAndSandcoins`,
                                `Subscription`,
                              ),
                            }),
                            (0, U.jsx)(I, {}),
                            (0, U.jsx)(F, { children: (0, U.jsx)(jo, {}) }),
                            (0, U.jsx)(I, {}),
                            (0, U.jsxs)(F, {
                              onClick: async () => {
                                (await e(), p(`/auth?entryPoint=header`));
                              },
                              children: [
                                (0, U.jsx)(bn, {
                                  className: `mr-2 h-4 w-4 text-foreground`,
                                }),
                                h(`navigation.logout`),
                              ],
                            }),
                          ],
                        })
                      : (0, U.jsxs)(U.Fragment, {
                          children: [
                            (0, U.jsx)(de, {
                              children: h(
                                `header.joinSandscape`,
                                `Join Sandscape`,
                              ),
                            }),
                            (0, U.jsx)(I, {}),
                            (0, U.jsx)(F, {
                              onClick: () => p(J(`/`, `header`)),
                              children: h(
                                `authPage.createAccount`,
                                `Create account`,
                              ),
                            }),
                            (0, U.jsx)(F, {
                              onClick: () => p(J(`/`, `header`)),
                              children: h(`authPage.signIn`, `Sign in`),
                            }),
                            (0, U.jsx)(I, {}),
                            (0, U.jsx)(F, { children: (0, U.jsx)(jo, {}) }),
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
