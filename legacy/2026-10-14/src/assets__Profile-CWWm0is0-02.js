// assets__Profile-CWWm0is0 02 — children
// Lines 166-824 of readable/assets__Profile-CWWm0is0.pretty.js (statement-aligned).
function F() {
  let { t: e } = d(),
    { id: t } = i(),
    n = r(),
    { user: a } = re(),
    [s, l] = (0, M.useState)(!0),
    [p, h] = (0, M.useState)(null),
    [g, _] = (0, M.useState)(!1),
    [v, y] = (0, M.useState)(``),
    [b, x] = (0, M.useState)(null),
    S = (0, M.useRef)(null),
    [C, T] = (0, M.useState)(!1),
    [D, O] = (0, M.useState)(!1),
    [N, F] = (0, M.useState)(!1),
    [I, R] = (0, M.useState)([]),
    [z, B] = (0, M.useState)([]),
    [Ce, V] = (0, M.useState)({}),
    [we, H] = (0, M.useState)(new Set()),
    [U, W] = (0, M.useState)(!1),
    [Te, G] = (0, M.useState)(null),
    [Ee, K] = (0, M.useState)(null),
    [De, Oe] = (0, M.useState)(0),
    [ke, q] = (0, M.useState)([]),
    [Ae, J] = (0, M.useState)(!1),
    [je, Y] = (0, M.useState)(null),
    [Me, Ne] = (0, M.useState)(0),
    [Pe, Fe] = (0, M.useState)([]),
    [Ie, Le] = (0, M.useState)(!1),
    X = a?.id,
    Z = (!t || t === `me`) && X ? X : t,
    Q = !!(X && p && X === p.user_id);
  ((0, M.useEffect)(() => {
    (async () => {
      try {
        if ((l(!0), !Z || Z === `me`)) {
          (h(null), l(!1));
          return;
        }
        let e = await o.getProfile(Z);
        (h(e), y(e.bio || ``), X && X !== Z && O(e.is_following ?? !1));
      } catch (e) {
        (console.error(`Error fetching profile:`, e), h(null));
      } finally {
        l(!1);
      }
    })();
  }, [Z, X]),
    (0, M.useEffect)(() => {
      let t = !1;
      return (
        (async () => {
          if (!Z || !X || X !== Z) {
            (R([]), B([]), V({}), G(null), K(null), W(!1));
            return;
          }
          try {
            (W(!0), G(null), K(null), H(new Set()));
            let e = await oe();
            if (t) return;
            let n = e.projects,
              r = n.filter((e) => e.role === `owner`),
              i = n.filter((e) => e.role === `collaborator`);
            (R(r), B(i), K(e.sharedProjectsError), W(!1));
            let a = await se(
              n.filter((e) => !e.thumbnail_url).map((e) => e.session_id),
            ).catch(
              (e) => (
                console.warn(`Published project poster lookup failed:`, e),
                {}
              ),
            );
            if (t) return;
            V(a);
            let o = await Promise.all(
              r
                .filter((e) => !e.thumbnail_url && !a[e.session_id])
                .map(async (e) => {
                  try {
                    let t = await ge(e.session_id);
                    return [
                      e.session_id,
                      t.thumbnail_url ? he(t.thumbnail_url) : ``,
                    ];
                  } catch (t) {
                    return (
                      console.warn(
                        `Project cover lookup failed for ${e.session_id}:`,
                        t,
                      ),
                      [e.session_id, ``]
                    );
                  }
                }),
            );
            if (t) return;
            V((e) => {
              let t = { ...e };
              for (let [e, n] of o) n && (t[e] = n);
              return t;
            });
          } catch (n) {
            (console.error(`Error fetching projects:`, n),
              t ||
                (R([]),
                B([]),
                V({}),
                G(
                  n instanceof Error
                    ? n.message
                    : e(
                        `profile.projectsLoadFailed`,
                        `Could not load projects`,
                      ),
                ),
                K(null)));
          } finally {
            t || W(!1);
          }
        })(),
        () => {
          t = !0;
        }
      );
    }, [Z, X, De, e]),
    (0, M.useEffect)(() => {
      let t = !1;
      return (
        (async () => {
          if (!Z || Z === `me`) {
            (q([]), Y(null), J(!1));
            return;
          }
          (J(!0), Y(null));
          try {
            let e = await ne(Z);
            t || q(e);
          } catch (n) {
            (console.error(`Error fetching published games:`, n),
              t ||
                (q([]),
                Y(
                  n instanceof Error
                    ? n.message
                    : e(
                        `profile.gamesLoadFailed`,
                        `Could not load published games`,
                      ),
                )));
          } finally {
            t || J(!1);
          }
        })(),
        () => {
          t = !0;
        }
      );
    }, [Z, Me, e]),
    (0, M.useEffect)(() => {
      (async () => {
        if (!(!Z || Z === `me`)) {
          Le(!0);
          try {
            let e = await ve(Z, 20);
            Fe(e);
          } catch (e) {
            (console.error(`Error fetching activities:`, e), Fe([]));
          } finally {
            Le(!1);
          }
        }
      })();
    }, [Z]));
  let Re = async (t, n) => {
      if (
        (n.stopPropagation(),
        confirm(
          e(
            `profile.deleteProjectConfirm`,
            `Are you sure you want to delete this project?`,
          ),
        ))
      )
        try {
          (await ce(t), R((e) => e.filter((e) => e.id !== t)));
        } catch (t) {
          (console.error(`Error deleting project:`, t),
            alert(
              e(`profile.deleteProjectFailed`, `Failed to delete project`),
            ));
        }
    },
    $ = (e) => {
      n(`/creating?session=${encodeURIComponent(e)}`);
    };
  return s
    ? (0, P.jsx)(`div`, { children: e(`general.loading`, `Loading...`) })
    : p
      ? (0, P.jsxs)(P.Fragment, {
          children: [
            p &&
              (0, P.jsx)(ae, {
                title: e(`profile.seoTitle`, `{{name}} | Sandscape`, {
                  name:
                    p.username || e(`profile.seoDefaultName`, `User Profile`),
                }),
                description: e(
                  `profile.seoDescription`,
                  `Check out {{name}}'s games and activity on Sandscape. Join to follow, play and collaborate.`,
                  {
                    name:
                      p.username ||
                      e(`profile.seoDefaultCreator`, `this creator`),
                  },
                ),
                keywords: e(
                  `profile.seoKeywords`,
                  `{{name}}, game creator, AI games, player profile, game portfolio, Sandscape user`,
                  { name: p.username },
                ),
                ogType: `profile`,
                ogImage: p.avatar_url
                  ? f(p.avatar_url)
                  : `https://sandscape.app/avatar_placeholder/default.png`,
              }),
            (0, P.jsxs)(`div`, {
              className: `container mx-auto px-4 py-8`,
              children: [
                (0, P.jsx)(k, {
                  children: (0, P.jsxs)(E, {
                    className: `p-6`,
                    children: [
                      (0, P.jsxs)(`div`, {
                        className: `flex flex-col md:flex-row gap-6 items-center md:items-start`,
                        children: [
                          (0, P.jsxs)(te, {
                            className: `w-32 h-32`,
                            children: [
                              (0, P.jsx)(ee, {
                                src: p.avatar_url ? f(p.avatar_url) : void 0,
                                alt: p.username,
                                className: `object-cover object-center w-full h-full`,
                              }),
                              (0, P.jsx)(m, { children: p.username?.[0] }),
                            ],
                          }),
                          (0, P.jsxs)(`div`, {
                            className: `flex-1 space-y-4 text-center md:text-left`,
                            children: [
                              (0, P.jsxs)(`div`, {
                                children: [
                                  (0, P.jsx)(`h1`, {
                                    className: `text-3xl font-bold`,
                                    children: p.username,
                                  }),
                                  (0, P.jsx)(`p`, {
                                    className: `text-muted-foreground`,
                                    children: p.bio,
                                  }),
                                ],
                              }),
                              (0, P.jsxs)(`div`, {
                                className: `flex gap-4 justify-center md:justify-start`,
                                children: [
                                  (0, P.jsxs)(`div`, {
                                    className: `text-center cursor-pointer hover:opacity-80`,
                                    onClick: () => n(`/followers/${Z}`),
                                    children: [
                                      (0, P.jsx)(`div`, {
                                        className: `text-2xl font-bold`,
                                        children: p.followers ?? 0,
                                      }),
                                      (0, P.jsx)(`div`, {
                                        className: `text-sm text-muted-foreground`,
                                        children: e(
                                          `profile.followers`,
                                          `Followers`,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, P.jsxs)(`div`, {
                                    className: `text-center cursor-pointer hover:opacity-80`,
                                    onClick: () => n(`/following/${Z}`),
                                    children: [
                                      (0, P.jsx)(`div`, {
                                        className: `text-2xl font-bold`,
                                        children: p.following ?? 0,
                                      }),
                                      (0, P.jsx)(`div`, {
                                        className: `text-sm text-muted-foreground`,
                                        children: e(
                                          `profile.following`,
                                          `Following`,
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, P.jsxs)(`div`, {
                                className: `flex gap-4 justify-center md:justify-start`,
                                children: [
                                  !Q &&
                                    (0, P.jsx)(c, {
                                      onClick: async () => {
                                        if (Z) {
                                          F(!0);
                                          try {
                                            D
                                              ? (await ue(Z),
                                                O(!1),
                                                h(
                                                  (e) =>
                                                    e && {
                                                      ...e,
                                                      followers:
                                                        (e.followers ?? 1) - 1,
                                                    },
                                                ))
                                              : (await de(Z),
                                                O(!0),
                                                h(
                                                  (e) =>
                                                    e && {
                                                      ...e,
                                                      followers:
                                                        (e.followers ?? 0) + 1,
                                                    },
                                                ));
                                          } catch {
                                            alert(
                                              e(
                                                `profile.followStatusFailed`,
                                                `Failed to update follow status.`,
                                              ),
                                            );
                                          } finally {
                                            F(!1);
                                          }
                                        }
                                      },
                                      disabled: N,
                                      children: D
                                        ? (0, P.jsxs)(P.Fragment, {
                                            children: [
                                              (0, P.jsx)(_e, {
                                                className: `mr-2 h-4 w-4`,
                                              }),
                                              e(`profile.unfollow`, `Unfollow`),
                                            ],
                                          })
                                        : (0, P.jsxs)(P.Fragment, {
                                            children: [
                                              (0, P.jsx)(ie, {
                                                className: `mr-2 h-4 w-4`,
                                              }),
                                              e(`profile.follow`, `Follow`),
                                            ],
                                          }),
                                    }),
                                  Q &&
                                    (0, P.jsxs)(c, {
                                      variant: `outline`,
                                      onClick: () => {
                                        _(!0);
                                      },
                                      children: [
                                        (0, P.jsx)(le, {
                                          className: `mr-2 h-4 w-4`,
                                        }),
                                        e(
                                          `profile.editProfile`,
                                          `Edit Profile`,
                                        ),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      g &&
                        Q &&
                        (0, P.jsxs)(`div`, {
                          className: `mx-auto mt-6 flex w-full max-w-lg flex-col gap-4`,
                          children: [
                            (0, P.jsx)(fe, {
                              value: v,
                              onChange: (e) => y(e.target.value),
                              placeholder: e(
                                `profile.bioPlaceholder`,
                                `Your bio`,
                              ),
                              rows: 3,
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `flex flex-wrap items-center gap-3`,
                              children: [
                                (0, P.jsx)(`input`, {
                                  ref: S,
                                  type: `file`,
                                  accept: `image/*`,
                                  className: `hidden`,
                                  onChange: (e) =>
                                    x(e.target.files?.[0] || null),
                                }),
                                (0, P.jsxs)(c, {
                                  type: `button`,
                                  variant: `outline`,
                                  size: `sm`,
                                  onClick: () => S.current?.click(),
                                  children: [
                                    (0, P.jsx)(u, {
                                      className: `mr-2 h-4 w-4`,
                                    }),
                                    e(`profile.changeAvatar`, `Change avatar`),
                                  ],
                                }),
                                b &&
                                  (0, P.jsx)(`span`, {
                                    className: `truncate text-xs text-muted-foreground`,
                                    title: b.name,
                                    children: b.name,
                                  }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `flex gap-2`,
                              children: [
                                (0, P.jsx)(c, {
                                  onClick: async () => {
                                    if (p) {
                                      T(!0);
                                      try {
                                        let t = p.avatar_url;
                                        if (b && a)
                                          try {
                                            t = (await o.uploadAvatar(b, a.id))
                                              .path;
                                          } catch (t) {
                                            (console.error(
                                              `Avatar upload error:`,
                                              t,
                                            ),
                                              alert(
                                                e(
                                                  `profile.avatarUploadFailed`,
                                                  `Avatar upload failed: `,
                                                ) + L(t),
                                              ),
                                              T(!1));
                                            return;
                                          }
                                        let n = await o.updateProfile({
                                          bio: v,
                                          avatar_url: t,
                                        });
                                        (h({
                                          ...p,
                                          bio: n.bio,
                                          avatar_url: n.avatar_url,
                                        }),
                                          _(!1));
                                      } catch (t) {
                                        alert(
                                          e(
                                            `profile.updateProfileFailed`,
                                            `Error updating profile: `,
                                          ) + L(t),
                                        );
                                      } finally {
                                        T(!1);
                                      }
                                    }
                                  },
                                  disabled: C,
                                  children: C
                                    ? e(`profile.saving`, `Saving...`)
                                    : e(`general.save`, `Save`),
                                }),
                                (0, P.jsx)(c, {
                                  variant: `outline`,
                                  onClick: () => _(!1),
                                  disabled: C,
                                  children: e(`general.cancel`, `Cancel`),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                (0, P.jsxs)(me, {
                  defaultValue: Q ? `projects` : `games`,
                  className: `mt-6`,
                  children: [
                    (0, P.jsxs)(pe, {
                      className: `h-auto max-w-full justify-start overflow-x-auto`,
                      children: [
                        Q &&
                          (0, P.jsx)(A, {
                            value: `projects`,
                            children: e(`profile.myProjects`, `My Projects`),
                          }),
                        Q &&
                          (0, P.jsxs)(A, {
                            value: `shared`,
                            children: [
                              e(`profile.sharedProjects`, `Shared with Me`),
                              !U &&
                                z.length > 0 &&
                                (0, P.jsx)(`span`, {
                                  className: `ml-2 text-xs text-muted-foreground`,
                                  children: z.length,
                                }),
                            ],
                          }),
                        (0, P.jsx)(A, {
                          value: `games`,
                          children: e(
                            `profile.publishedGames`,
                            `Published Games`,
                          ),
                        }),
                        (0, P.jsx)(A, {
                          value: `activity`,
                          children: e(`profile.activity`, `Activity`),
                        }),
                      ],
                    }),
                    Q &&
                      (0, P.jsx)(j, {
                        value: `projects`,
                        className: `mt-6`,
                        children: (0, P.jsx)(be, {
                          projects: I,
                          loading: U,
                          error: Te,
                          covers: Ce,
                          brokenCovers: we,
                          emptyKind: `owned`,
                          onOpen: $,
                          onDelete: Re,
                          onCoverError: (e) => H((t) => new Set(t).add(e)),
                          onRetry: () => Oe((e) => e + 1),
                          onCreate: () => n(`/create`),
                        }),
                      }),
                    Q &&
                      (0, P.jsx)(j, {
                        value: `shared`,
                        className: `mt-6`,
                        children: (0, P.jsx)(be, {
                          projects: z,
                          loading: U,
                          error: Te || Ee,
                          covers: Ce,
                          brokenCovers: we,
                          emptyKind: `shared`,
                          onOpen: $,
                          onCoverError: (e) => H((t) => new Set(t).add(e)),
                          onRetry: () => Oe((e) => e + 1),
                        }),
                      }),
                    (0, P.jsx)(j, {
                      value: `games`,
                      className: `mt-6`,
                      children: (0, P.jsx)(xe, {
                        games: ke,
                        loading: Ae,
                        error: je,
                        onOpen: (e) =>
                          n(
                            `/play?g=${encodeURIComponent(e.shortCode || e.id)}`,
                          ),
                        onRetry: () => Ne((e) => e + 1),
                      }),
                    }),
                    (0, P.jsx)(j, {
                      value: `activity`,
                      className: `mt-6`,
                      children: Ie
                        ? (0, P.jsx)(`div`, {
                            className: `space-y-4`,
                            children: [...[, , , , ,]].map((e, t) =>
                              (0, P.jsxs)(
                                `div`,
                                {
                                  className: `flex items-center gap-4 p-4 border rounded-lg`,
                                  children: [
                                    (0, P.jsx)(w, {
                                      className: `h-10 w-10 rounded-full`,
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      className: `flex-1 space-y-2`,
                                      children: [
                                        (0, P.jsx)(w, {
                                          className: `h-4 w-3/4`,
                                        }),
                                        (0, P.jsx)(w, {
                                          className: `h-3 w-1/4`,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          })
                        : Pe.length === 0
                          ? (0, P.jsx)(`div`, {
                              className: `text-center text-muted-foreground py-12`,
                              children: e(
                                `profile.noRecentActivity`,
                                `No recent activity`,
                              ),
                            })
                          : (0, P.jsx)(`div`, {
                              className: `space-y-4`,
                              children: Pe.map((e) =>
                                (0, P.jsx)(
                                  Se,
                                  { activity: e, onClick: () => n(ye(e)) },
                                  e.id,
                                ),
                              ),
                            }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : (0, P.jsx)(`div`, {
          className: `container mx-auto py-6`,
          children: (0, P.jsx)(k, {
            children: (0, P.jsxs)(E, {
              className: `p-6`,
              children: [
                (0, P.jsx)(`div`, {
                  className: `text-center text-muted-foreground`,
                  children: e(`profile.notFound`, `Profile not found.`),
                }),
                (0, P.jsx)(`div`, {
                  className: `flex justify-center mt-4`,
                  children: (0, P.jsx)(c, {
                    onClick: () => n(`/`),
                    children: e(`profile.goHome`, `Go Home`),
                  }),
                }),
              ],
            }),
          }),
        });
}
