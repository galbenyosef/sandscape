// Profile-CTs1Te13 02 — children
// Lines 170-864 of readable/assets/Profile-CTs1Te13.pretty.js (statement-aligned).
function I() {
  let { t: e } = p(),
    { id: t } = i(),
    n = r(),
    { user: o } = ie(),
    { toast: c } = a(),
    [ee, u] = (0, N.useState)(!0),
    [d, h] = (0, N.useState)(null),
    [ne, v] = (0, N.useState)(!1),
    [y, b] = (0, N.useState)(``),
    [x, S] = (0, N.useState)(null),
    ce = (0, N.useRef)(null),
    [C, w] = (0, N.useState)(!1),
    [E, O] = (0, N.useState)(!1),
    [k, P] = (0, N.useState)(!1),
    [I, L] = (0, N.useState)([]),
    [z, B] = (0, N.useState)([]),
    [V, H] = (0, N.useState)({}),
    [De, U] = (0, N.useState)(new Set()),
    [W, G] = (0, N.useState)(!1),
    [Oe, K] = (0, N.useState)(null),
    [ke, q] = (0, N.useState)(null),
    [Ae, J] = (0, N.useState)(0),
    [Y, je] = (0, N.useState)(null),
    [Me, X] = (0, N.useState)([]),
    [Ne, Pe] = (0, N.useState)(!1),
    [Fe, Ie] = (0, N.useState)(null),
    [Le, Re] = (0, N.useState)(0),
    [ze, Be] = (0, N.useState)([]),
    [Ve, He] = (0, N.useState)(!1),
    Z = o?.id,
    Q = (!t || t === `me`) && Z ? Z : t,
    $ = !!(Z && d && Z === d.user_id),
    Ue = he(),
    We = $ && Ue;
  ((0, N.useEffect)(() => {
    (async () => {
      try {
        if ((u(!0), !Q || Q === `me`)) {
          (h(null), u(!1));
          return;
        }
        let e = await s.getProfile(Q);
        (h(e), b(e.bio || ``), Z && Z !== Q && O(e.is_following ?? !1));
      } catch (e) {
        (console.error(`Error fetching profile:`, e), h(null));
      } finally {
        u(!1);
      }
    })();
  }, [Q, Z]),
    (0, N.useEffect)(() => {
      let t = !1;
      return (
        (async () => {
          if (!Q || !Z || Z !== Q) {
            (L([]), B([]), H({}), K(null), q(null), G(!1));
            return;
          }
          try {
            (G(!0), K(null), q(null), U(new Set()));
            let e = await se();
            if (t) return;
            let n = e.projects,
              r = n.filter((e) => e.role === `owner`),
              i = n.filter((e) => e.role === `collaborator`);
            (L(r), B(i), q(e.sharedProjectsError), G(!1));
            let a = await le(
              n.filter((e) => !e.thumbnail_url).map((e) => e.session_id),
            ).catch(
              (e) => (
                console.warn(`Published project poster lookup failed:`, e),
                {}
              ),
            );
            if (t) return;
            H(a);
            let o = await Promise.all(
              r
                .filter((e) => !e.thumbnail_url && !a[e.session_id])
                .map(async (e) => {
                  try {
                    let t = await be(e.session_id);
                    return [
                      e.session_id,
                      t.thumbnail_url ? ye(t.thumbnail_url) : ``,
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
            H((e) => {
              let t = { ...e };
              for (let [e, n] of o) n && (t[e] = n);
              return t;
            });
          } catch (n) {
            (console.error(`Error fetching projects:`, n),
              t ||
                (L([]),
                B([]),
                H({}),
                K(
                  n instanceof Error
                    ? n.message
                    : e(
                        `profile.projectsLoadFailed`,
                        `Could not load projects`,
                      ),
                ),
                q(null)));
          } finally {
            t || G(!1);
          }
        })(),
        () => {
          t = !0;
        }
      );
    }, [Q, Z, Ae, e]),
    (0, N.useEffect)(() => {
      let t = !1;
      return (
        (async () => {
          if (!Q || Q === `me`) {
            (X([]), Ie(null), Pe(!1));
            return;
          }
          (Pe(!0), Ie(null));
          try {
            let e = await re(Q);
            t || X(e);
          } catch (n) {
            (console.error(`Error fetching published games:`, n),
              t ||
                (X([]),
                Ie(
                  n instanceof Error
                    ? n.message
                    : e(
                        `profile.gamesLoadFailed`,
                        `Could not load published games`,
                      ),
                )));
          } finally {
            t || Pe(!1);
          }
        })(),
        () => {
          t = !0;
        }
      );
    }, [Q, Le, e]),
    (0, N.useEffect)(() => {
      (async () => {
        if (!(!Q || Q === `me`)) {
          He(!0);
          try {
            let e = await Se(Q, 20);
            Be(e);
          } catch (e) {
            (console.error(`Error fetching activities:`, e), Be([]));
          } finally {
            He(!1);
          }
        }
      })();
    }, [Q]));
  let Ge = async (t, n) => {
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
          (await ue(t), L((e) => e.filter((e) => e.id !== t)));
        } catch (t) {
          (console.error(`Error deleting project:`, t),
            alert(
              e(`profile.deleteProjectFailed`, `Failed to delete project`),
            ));
        }
    },
    Ke = async (t, n) => {
      if ((n.stopPropagation(), !Y)) {
        je(t);
        try {
          let n = await ge(t);
          (c({
            title: e(
              `profile.duplicateProjectDone`,
              `Duplicated as "{{name}}"`,
              { name: n.name },
            ),
          }),
            J((e) => e + 1));
        } catch (t) {
          (console.error(`Error duplicating project:`, t),
            c({
              title: e(
                `profile.duplicateProjectFailed`,
                `Failed to duplicate project`,
              ),
              description: R(t),
              variant: `destructive`,
            }));
        } finally {
          je(null);
        }
      }
    },
    qe = (e) => {
      n(`/creating?session=${encodeURIComponent(e)}`);
    };
  return ee
    ? (0, F.jsx)(`div`, { children: e(`general.loading`, `Loading...`) })
    : d
      ? (0, F.jsxs)(F.Fragment, {
          children: [
            d &&
              (0, F.jsx)(oe, {
                title: e(`profile.seoTitle`, `{{name}} | Sandscape`, {
                  name:
                    d.username || e(`profile.seoDefaultName`, `User Profile`),
                }),
                description: e(
                  `profile.seoDescription`,
                  `Check out {{name}}'s games and activity on Sandscape. Join to follow, play and collaborate.`,
                  {
                    name:
                      d.username ||
                      e(`profile.seoDefaultCreator`, `this creator`),
                  },
                ),
                keywords: e(
                  `profile.seoKeywords`,
                  `{{name}}, game creator, AI games, player profile, game portfolio, Sandscape user`,
                  { name: d.username },
                ),
                ogType: `profile`,
                ogImage: d.avatar_url
                  ? m(d.avatar_url)
                  : `https://sandscape.app/avatar_placeholder/default.png`,
              }),
            (0, F.jsxs)(`div`, {
              className: `container mx-auto px-4 py-8`,
              children: [
                (0, F.jsx)(A, {
                  children: (0, F.jsxs)(D, {
                    className: `p-6`,
                    children: [
                      (0, F.jsxs)(`div`, {
                        className: `flex flex-col md:flex-row gap-6 items-center md:items-start`,
                        children: [
                          (0, F.jsxs)(te, {
                            className: `w-32 h-32`,
                            children: [
                              (0, F.jsx)(_, {
                                src: d.avatar_url ? m(d.avatar_url) : void 0,
                                alt: d.username,
                                className: `object-cover object-center w-full h-full`,
                              }),
                              (0, F.jsx)(g, { children: d.username?.[0] }),
                            ],
                          }),
                          (0, F.jsxs)(`div`, {
                            className: `flex-1 space-y-4 text-center md:text-left`,
                            children: [
                              (0, F.jsxs)(`div`, {
                                children: [
                                  (0, F.jsx)(`h1`, {
                                    className: `text-3xl font-bold`,
                                    children: d.username,
                                  }),
                                  (0, F.jsx)(`p`, {
                                    className: `text-muted-foreground`,
                                    children: d.bio,
                                  }),
                                ],
                              }),
                              (0, F.jsxs)(`div`, {
                                className: `flex gap-4 justify-center md:justify-start`,
                                children: [
                                  (0, F.jsxs)(`div`, {
                                    className: `text-center cursor-pointer hover:opacity-80`,
                                    onClick: () => n(`/followers/${Q}`),
                                    children: [
                                      (0, F.jsx)(`div`, {
                                        className: `text-2xl font-bold`,
                                        children: d.followers ?? 0,
                                      }),
                                      (0, F.jsx)(`div`, {
                                        className: `text-sm text-muted-foreground`,
                                        children: e(
                                          `profile.followers`,
                                          `Followers`,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, F.jsxs)(`div`, {
                                    className: `text-center cursor-pointer hover:opacity-80`,
                                    onClick: () => n(`/following/${Q}`),
                                    children: [
                                      (0, F.jsx)(`div`, {
                                        className: `text-2xl font-bold`,
                                        children: d.following ?? 0,
                                      }),
                                      (0, F.jsx)(`div`, {
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
                              (0, F.jsxs)(`div`, {
                                className: `flex gap-4 justify-center md:justify-start`,
                                children: [
                                  !$ &&
                                    (0, F.jsx)(l, {
                                      onClick: async () => {
                                        if (Q) {
                                          P(!0);
                                          try {
                                            E
                                              ? (await fe(Q),
                                                O(!1),
                                                h(
                                                  (e) =>
                                                    e && {
                                                      ...e,
                                                      followers:
                                                        (e.followers ?? 1) - 1,
                                                    },
                                                ))
                                              : (await pe(Q),
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
                                            P(!1);
                                          }
                                        }
                                      },
                                      disabled: k,
                                      children: E
                                        ? (0, F.jsxs)(F.Fragment, {
                                            children: [
                                              (0, F.jsx)(xe, {
                                                className: `mr-2 h-4 w-4`,
                                              }),
                                              e(`profile.unfollow`, `Unfollow`),
                                            ],
                                          })
                                        : (0, F.jsxs)(F.Fragment, {
                                            children: [
                                              (0, F.jsx)(ae, {
                                                className: `mr-2 h-4 w-4`,
                                              }),
                                              e(`profile.follow`, `Follow`),
                                            ],
                                          }),
                                    }),
                                  $ &&
                                    (0, F.jsxs)(l, {
                                      variant: `outline`,
                                      onClick: () => {
                                        v(!0);
                                      },
                                      children: [
                                        (0, F.jsx)(de, {
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
                      ne &&
                        $ &&
                        (0, F.jsxs)(`div`, {
                          className: `mx-auto mt-6 flex w-full max-w-lg flex-col gap-4`,
                          children: [
                            (0, F.jsx)(me, {
                              value: y,
                              onChange: (e) => b(e.target.value),
                              placeholder: e(
                                `profile.bioPlaceholder`,
                                `Your bio`,
                              ),
                              rows: 3,
                            }),
                            (0, F.jsxs)(`div`, {
                              className: `flex flex-wrap items-center gap-3`,
                              children: [
                                (0, F.jsx)(`input`, {
                                  ref: ce,
                                  type: `file`,
                                  accept: `image/*`,
                                  className: `hidden`,
                                  onChange: (e) =>
                                    S(e.target.files?.[0] || null),
                                }),
                                (0, F.jsxs)(l, {
                                  type: `button`,
                                  variant: `outline`,
                                  size: `sm`,
                                  onClick: () => ce.current?.click(),
                                  children: [
                                    (0, F.jsx)(f, {
                                      className: `mr-2 h-4 w-4`,
                                    }),
                                    e(`profile.changeAvatar`, `Change avatar`),
                                  ],
                                }),
                                x &&
                                  (0, F.jsx)(`span`, {
                                    className: `truncate text-xs text-muted-foreground`,
                                    title: x.name,
                                    children: x.name,
                                  }),
                              ],
                            }),
                            (0, F.jsxs)(`div`, {
                              className: `flex gap-2`,
                              children: [
                                (0, F.jsx)(l, {
                                  onClick: async () => {
                                    if (d) {
                                      w(!0);
                                      try {
                                        let t = d.avatar_url;
                                        if (x && o)
                                          try {
                                            t = (await s.uploadAvatar(x, o.id))
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
                                                ) + R(t),
                                              ),
                                              w(!1));
                                            return;
                                          }
                                        let n = await s.updateProfile({
                                          bio: y,
                                          avatar_url: t,
                                        });
                                        (h({
                                          ...d,
                                          bio: n.bio,
                                          avatar_url: n.avatar_url,
                                        }),
                                          v(!1));
                                      } catch (t) {
                                        alert(
                                          e(
                                            `profile.updateProfileFailed`,
                                            `Error updating profile: `,
                                          ) + R(t),
                                        );
                                      } finally {
                                        w(!1);
                                      }
                                    }
                                  },
                                  disabled: C,
                                  children: C
                                    ? e(`profile.saving`, `Saving...`)
                                    : e(`general.save`, `Save`),
                                }),
                                (0, F.jsx)(l, {
                                  variant: `outline`,
                                  onClick: () => v(!1),
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
                (0, F.jsxs)(ve, {
                  defaultValue: $ ? `projects` : `games`,
                  className: `mt-6`,
                  children: [
                    (0, F.jsxs)(_e, {
                      className: `h-auto max-w-full justify-start overflow-x-auto`,
                      children: [
                        $ &&
                          (0, F.jsx)(j, {
                            value: `projects`,
                            children: e(`profile.myProjects`, `My Projects`),
                          }),
                        $ &&
                          (0, F.jsxs)(j, {
                            value: `shared`,
                            children: [
                              e(`profile.sharedProjects`, `Shared with Me`),
                              !W &&
                                z.length > 0 &&
                                (0, F.jsx)(`span`, {
                                  className: `ml-2 text-xs text-muted-foreground`,
                                  children: z.length,
                                }),
                            ],
                          }),
                        (0, F.jsx)(j, {
                          value: `games`,
                          children: e(
                            `profile.publishedGames`,
                            `Published Games`,
                          ),
                        }),
                        (0, F.jsx)(j, {
                          value: `activity`,
                          children: e(`profile.activity`, `Activity`),
                        }),
                      ],
                    }),
                    $ &&
                      (0, F.jsx)(M, {
                        value: `projects`,
                        className: `mt-6`,
                        children: (0, F.jsx)(we, {
                          projects: I,
                          loading: W,
                          error: Oe,
                          covers: V,
                          brokenCovers: De,
                          emptyKind: `owned`,
                          onOpen: qe,
                          onDelete: Ge,
                          onDuplicate: We ? Ke : void 0,
                          duplicatingSessionId: Y,
                          onCoverError: (e) => U((t) => new Set(t).add(e)),
                          onRetry: () => J((e) => e + 1),
                          onCreate: () => n(`/create`),
                        }),
                      }),
                    $ &&
                      (0, F.jsx)(M, {
                        value: `shared`,
                        className: `mt-6`,
                        children: (0, F.jsx)(we, {
                          projects: z,
                          loading: W,
                          error: Oe || ke,
                          covers: V,
                          brokenCovers: De,
                          emptyKind: `shared`,
                          onOpen: qe,
                          onDuplicate: We ? Ke : void 0,
                          duplicatingSessionId: Y,
                          onCoverError: (e) => U((t) => new Set(t).add(e)),
                          onRetry: () => J((e) => e + 1),
                        }),
                      }),
                    (0, F.jsx)(M, {
                      value: `games`,
                      className: `mt-6`,
                      children: (0, F.jsx)(Te, {
                        games: Me,
                        loading: Ne,
                        error: Fe,
                        onOpen: (e) =>
                          n(
                            `/play?g=${encodeURIComponent(e.shortCode || e.id)}`,
                          ),
                        onRetry: () => Re((e) => e + 1),
                      }),
                    }),
                    (0, F.jsx)(M, {
                      value: `activity`,
                      className: `mt-6`,
                      children: Ve
                        ? (0, F.jsx)(`div`, {
                            className: `space-y-4`,
                            children: [...[, , , , ,]].map((e, t) =>
                              (0, F.jsxs)(
                                `div`,
                                {
                                  className: `flex items-center gap-4 p-4 border rounded-lg`,
                                  children: [
                                    (0, F.jsx)(T, {
                                      className: `h-10 w-10 rounded-full`,
                                    }),
                                    (0, F.jsxs)(`div`, {
                                      className: `flex-1 space-y-2`,
                                      children: [
                                        (0, F.jsx)(T, {
                                          className: `h-4 w-3/4`,
                                        }),
                                        (0, F.jsx)(T, {
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
                        : ze.length === 0
                          ? (0, F.jsx)(`div`, {
                              className: `text-center text-muted-foreground py-12`,
                              children: e(
                                `profile.noRecentActivity`,
                                `No recent activity`,
                              ),
                            })
                          : (0, F.jsx)(`div`, {
                              className: `space-y-4`,
                              children: ze.map((e) =>
                                (0, F.jsx)(
                                  Ee,
                                  { activity: e, onClick: () => n(Ce(e)) },
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
      : (0, F.jsx)(`div`, {
          className: `container mx-auto py-6`,
          children: (0, F.jsx)(A, {
            children: (0, F.jsxs)(D, {
              className: `p-6`,
              children: [
                (0, F.jsx)(`div`, {
                  className: `text-center text-muted-foreground`,
                  children: e(`profile.notFound`, `Profile not found.`),
                }),
                (0, F.jsx)(`div`, {
                  className: `flex justify-center mt-4`,
                  children: (0, F.jsx)(l, {
                    onClick: () => n(`/`),
                    children: e(`profile.goHome`, `Go Home`),
                  }),
                }),
              ],
            }),
          }),
        });
}
