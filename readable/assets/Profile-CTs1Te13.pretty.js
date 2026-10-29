import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { n as o, t as s } from "./AuthService-C8NFtVWb.js";
import { r as c, t as l } from "./button-gyaE5cND.js";
import { t as ee } from "./copy-C3ryofZQ.js";
import { t as u } from "./loader-circle-BWNSk5u-.js";
import { t as d } from "./refresh-cw-Bg4R4J17.js";
import { t as f } from "./upload-Bbnhh28X.js";
import { t as p } from "./useTranslation-BdauNPOZ.js";
import { t as m } from "./avatarUtils-CHOc69Ms.js";
import { r as h } from "./gameUtils-Che36IRh.js";
import { n as g, r as _, t as te } from "./avatar-BHj788a5.js";
import { t as ne } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  D as re,
  J as v,
  K as ie,
  X as y,
  Y as ae,
  at as b,
  ct as x,
  g as oe,
  it as S,
  n as se,
  nt as ce,
  ot as C,
  r as le,
  s as w,
  t as ue,
  tt as de,
  v as T,
} from "./index-CBcimEr9.js";
import { a as fe, t as pe } from "./follow-CpTPXfIN.js";
import { t as me } from "./textarea-B3J7W2fu.js";
import { a as E, n as D, o as O, r as k, t as A } from "./card-Ca5HFnV5.js";
import { n as he, r as ge } from "./useCodingModelsChoice-BPuDZNvr.js";
import { i as j, n as M, r as _e, t as ve } from "./tabs-DF35aEnx.js";
import { a as ye, r as be } from "./publish-BlDBQgme.js";
var xe = c(`UserCheck`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`polyline`, { points: `16 11 18 13 22 9`, key: `1pwet4` }],
  ]),
  N = e(t());
async function Se(e, t = 20) {
  let n = [],
    { data: r, error: i } = await o
      .from(`game_likes`)
      .select(
        `
      game_id,
      created_at,
      game:games!inner(
        id,
        title,
        thumbnail_url,
        short_code
      )
    `,
      )
      .eq(`user_id`, e)
      .order(`created_at`, { ascending: !1 })
      .limit(t);
  !i &&
    r &&
    r.forEach((e) => {
      n.push({
        id: `like-${e.game_id}`,
        type: `like`,
        created_at: e.created_at,
        game: e.game,
      });
    });
  let { data: a, error: s } = await o
    .from(`comments`)
    .select(
      `
      id,
      content,
      created_at,
      game:games!inner(
        id,
        title,
        thumbnail_url,
        short_code
      )
    `,
    )
    .eq(`user_id`, e)
    .is(`parent_comment_id`, null)
    .order(`created_at`, { ascending: !1 })
    .limit(t);
  !s &&
    a &&
    a.forEach((e) => {
      n.push({
        id: `comment-${e.id}`,
        type: `comment`,
        created_at: e.created_at,
        game: e.game,
        comment: { id: e.id, content: e.content },
      });
    });
  let { data: c, error: l } = await o
    .from(`followers`)
    .select(
      `
      created_at,
      followed:profiles!followers_followed_user_id_fkey(
        user_id,
        username,
        avatar_url
      )
    `,
    )
    .eq(`following_user_id`, e)
    .order(`created_at`, { ascending: !1 })
    .limit(t);
  return (
    !l &&
      c &&
      c.forEach((e) => {
        n.push({
          id: `follow-${e.followed?.user_id}`,
          type: `follow`,
          created_at: e.created_at,
          target_user: e.followed,
        });
      }),
    n.sort(
      (e, t) =>
        new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
    ),
    n.slice(0, t)
  );
}
function P(e) {
  switch (e.type) {
    case `like`:
      return `Liked "${e.game?.title || `a game`}"`;
    case `comment`:
      return `Commented on "${e.game?.title || `a game`}"`;
    case `follow`:
      return `Started following ${e.target_user?.username || `a user`}`;
    case `game_created`:
      return `Created "${e.game?.title || `a game`}"`;
    default:
      return `Recent activity`;
  }
}
function Ce(e) {
  switch (e.type) {
    case `like`:
    case `comment`:
    case `game_created`:
      return e.game?.short_code
        ? `/play?g=${e.game.short_code}`
        : e.game?.id
          ? `/play?g=${e.game.id}`
          : `/`;
    case `follow`:
      return e.target_user?.user_id ? `/profile/${e.target_user.user_id}` : `/`;
    default:
      return `/`;
  }
}
var F = n();
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
function L(e) {
  if (!e) return null;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? null
    : t.toLocaleDateString(void 0, {
        year: `numeric`,
        month: `short`,
        day: `numeric`,
      });
}
function R(e) {
  if (e instanceof Error) return e.message;
  try {
    return JSON.stringify(e) || String(e);
  } catch {
    return String(e);
  }
}
function we({
  projects: e,
  loading: t,
  error: n,
  covers: r,
  brokenCovers: i,
  emptyKind: a,
  onOpen: o,
  onDelete: s,
  onDuplicate: c,
  duplicatingSessionId: f = null,
  onCoverError: m,
  onRetry: h,
  onCreate: g,
}) {
  let { t: _ } = p();
  if (t) return (0, F.jsx)(z, {});
  if (n)
    return (0, F.jsxs)(`div`, {
      className: `rounded-lg border border-dashed px-6 py-12 text-center`,
      children: [
        (0, F.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: _(`profile.projectsLoadFailed`, `Could not load projects`),
        }),
        (0, F.jsxs)(l, {
          variant: `outline`,
          size: `sm`,
          className: `mt-4`,
          onClick: h,
          children: [
            (0, F.jsx)(d, { className: `mr-2 h-4 w-4` }),
            _(`general.tryAgain`, `Try again`),
          ],
        }),
      ],
    });
  if (e.length === 0) {
    let e = a === `shared`;
    return (0, F.jsxs)(`div`, {
      className: `rounded-lg border border-dashed px-6 py-12 text-center`,
      children: [
        e
          ? (0, F.jsx)(v, {
              className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
            })
          : (0, F.jsx)(C, {
              className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
            }),
        (0, F.jsx)(`p`, {
          className: `font-medium`,
          children: e
            ? _(`profile.noSharedProjects`, `No shared projects yet`)
            : _(`profile.noProjects`, `No projects yet`),
        }),
        (0, F.jsx)(`p`, {
          className: `mx-auto mt-1 max-w-md text-sm text-muted-foreground`,
          children: e
            ? _(
                `profile.noSharedProjectsDescription`,
                `Projects appear here after you accept a collaboration invite.`,
              )
            : _(
                `profile.noProjectsDescription`,
                `Start a project and its latest cover art will appear here.`,
              ),
        }),
        !e &&
          g &&
          (0, F.jsx)(l, {
            className: `mt-5`,
            onClick: g,
            children: _(`profile.createFirstGame`, `Create Your First Game`),
          }),
      ],
    });
  }
  return (0, F.jsx)(`div`, {
    className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
    children: e.map((e) => {
      let t = i.has(e.session_id) ? void 0 : e.thumbnail_url || r[e.session_id],
        n = L(e.updated_at);
      return (0, F.jsxs)(
        A,
        {
          className: `group relative overflow-hidden transition-shadow hover:shadow-lg`,
          children: [
            (0, F.jsxs)(`button`, {
              type: `button`,
              className: `block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
              onClick: () => o(e.session_id),
              children: [
                (0, F.jsxs)(`div`, {
                  className: `relative aspect-video overflow-hidden bg-muted`,
                  children: [
                    t
                      ? (0, F.jsx)(`img`, {
                          src: t,
                          alt: _(
                            `profile.projectCoverAlt`,
                            `{{name}} cover art`,
                            { name: e.name },
                          ),
                          className: `h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]`,
                          onError: () => m(e.session_id),
                        })
                      : (0, F.jsx)(`div`, {
                          className: `flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50`,
                          children: (0, F.jsx)(C, {
                            className: `h-14 w-14 text-muted-foreground/60`,
                          }),
                        }),
                    (0, F.jsx)(`div`, {
                      className: `absolute bottom-2 left-2`,
                      children: (0, F.jsx)(`span`, {
                        className: `rounded px-2 py-1 text-xs font-medium ${e.status === `completed` ? `bg-green-600/90 text-white` : e.status === `archived` ? `bg-gray-600/90 text-white` : `bg-blue-600/90 text-white`}`,
                        children:
                          e.status === `in_progress`
                            ? _(`profile.statusInProgress`, `In Progress`)
                            : e.status === `completed`
                              ? _(`profile.statusCompleted`, `Completed`)
                              : _(`profile.statusArchived`, `Archived`),
                      }),
                    }),
                  ],
                }),
                (0, F.jsxs)(E, {
                  className: `pb-2`,
                  children: [
                    (0, F.jsx)(O, {
                      className: `truncate text-lg`,
                      children: e.name,
                    }),
                    e.description &&
                      (0, F.jsx)(k, {
                        className: `line-clamp-2`,
                        children: e.description,
                      }),
                  ],
                }),
                (0, F.jsx)(D, {
                  className: `pt-0`,
                  children:
                    n &&
                    (0, F.jsxs)(`div`, {
                      className: `flex items-center text-sm text-muted-foreground`,
                      children: [
                        (0, F.jsx)(x, { className: `mr-1 h-4 w-4` }),
                        n,
                      ],
                    }),
                }),
              ],
            }),
            c &&
              (0, F.jsx)(l, {
                variant: `secondary`,
                size: `icon`,
                className: `absolute top-2 h-8 w-8 transition-opacity ${s ? `right-12` : `right-2`} ${f === e.session_id ? `opacity-100` : `opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100`}`,
                "aria-label":
                  f === e.session_id
                    ? _(`profile.duplicatingProject`, `Duplicating project`)
                    : _(`profile.duplicateProject`, `Duplicate project`),
                title: _(`profile.duplicateProject`, `Duplicate project`),
                disabled: f !== null,
                onClick: (t) => c(e.session_id, t),
                children:
                  f === e.session_id
                    ? (0, F.jsx)(u, { className: `h-4 w-4 animate-spin` })
                    : (0, F.jsx)(ee, { className: `h-4 w-4` }),
              }),
            s &&
              (0, F.jsx)(l, {
                variant: `destructive`,
                size: `icon`,
                className: `absolute right-2 top-2 h-8 w-8 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100`,
                "aria-label": _(`profile.deleteProject`, `Delete project`),
                onClick: (t) => s(e.id, t),
                children: (0, F.jsx)(y, { className: `h-4 w-4` }),
              }),
          ],
        },
        e.id,
      );
    }),
  });
}
function Te({ games: e, loading: t, error: n, onOpen: r, onRetry: i }) {
  let { t: a } = p();
  return t
    ? (0, F.jsx)(z, {})
    : n
      ? (0, F.jsxs)(`div`, {
          className: `rounded-lg border border-dashed px-6 py-12 text-center`,
          children: [
            (0, F.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: a(
                `profile.gamesLoadFailed`,
                `Could not load published games`,
              ),
            }),
            (0, F.jsxs)(l, {
              variant: `outline`,
              size: `sm`,
              className: `mt-4`,
              onClick: i,
              children: [
                (0, F.jsx)(d, { className: `mr-2 h-4 w-4` }),
                a(`general.tryAgain`, `Try again`),
              ],
            }),
          ],
        })
      : e.length === 0
        ? (0, F.jsxs)(`div`, {
            className: `rounded-lg border border-dashed px-6 py-12 text-center`,
            children: [
              (0, F.jsx)(b, {
                className: `mx-auto mb-4 h-11 w-11 text-muted-foreground`,
              }),
              (0, F.jsx)(`p`, {
                className: `font-medium`,
                children: a(
                  `profile.noPublishedGames`,
                  `No published games yet`,
                ),
              }),
            ],
          })
        : (0, F.jsx)(`div`, {
            className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
            children: e.map((e) => {
              let t = L(e.publishedAt);
              return (0, F.jsx)(
                `button`,
                {
                  type: `button`,
                  className: `text-left`,
                  onClick: () => r(e),
                  children: (0, F.jsxs)(A, {
                    className: `h-full overflow-hidden transition-shadow hover:shadow-lg`,
                    children: [
                      (0, F.jsx)(`div`, {
                        className: `aspect-video overflow-hidden bg-muted`,
                        children: e.thumbnail
                          ? (0, F.jsx)(`img`, {
                              src: e.thumbnail,
                              alt: a(
                                `profile.gameCoverAlt`,
                                `{{name}} cover art`,
                                { name: e.title },
                              ),
                              className: `h-full w-full object-cover`,
                            })
                          : (0, F.jsx)(`div`, {
                              className: `flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50`,
                              children: (0, F.jsx)(b, {
                                className: `h-14 w-14 text-muted-foreground/60`,
                              }),
                            }),
                      }),
                      (0, F.jsxs)(E, {
                        className: `pb-2`,
                        children: [
                          (0, F.jsx)(O, {
                            className: `truncate text-lg`,
                            children: e.title,
                          }),
                          e.description &&
                            (0, F.jsx)(k, {
                              className: `line-clamp-2`,
                              children: e.description,
                            }),
                        ],
                      }),
                      t &&
                        (0, F.jsx)(D, {
                          className: `pt-0 text-sm text-muted-foreground`,
                          children: a(
                            `profile.publishedOn`,
                            `Published {{date}}`,
                            { date: t },
                          ),
                        }),
                    ],
                  }),
                },
                e.id,
              );
            }),
          });
}
function z() {
  return (0, F.jsx)(`div`, {
    className: `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`,
    "aria-hidden": `true`,
    children: [0, 1, 2].map((e) =>
      (0, F.jsxs)(
        A,
        {
          className: `overflow-hidden`,
          children: [
            (0, F.jsx)(T, { className: `aspect-video w-full rounded-none` }),
            (0, F.jsxs)(E, {
              children: [
                (0, F.jsx)(T, { className: `h-5 w-2/3` }),
                (0, F.jsx)(T, { className: `h-4 w-full` }),
              ],
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function B(e) {
  switch (e) {
    case `like`:
      return (0, F.jsx)(S, { className: `h-4 w-4 text-red-500` });
    case `comment`:
      return (0, F.jsx)(ce, { className: `h-4 w-4 text-green-500` });
    case `follow`:
      return (0, F.jsx)(v, { className: `h-4 w-4 text-blue-500` });
    case `game_created`:
      return (0, F.jsx)(b, { className: `h-4 w-4 text-purple-500` });
    default:
      return (0, F.jsx)(S, { className: `h-4 w-4` });
  }
}
function V(e) {
  return h(e) || void 0;
}
function Ee({ activity: e, onClick: t }) {
  let { i18n: n } = p();
  return (0, F.jsxs)(`div`, {
    className: `flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors`,
    onClick: t,
    children: [
      (0, F.jsx)(`div`, {
        className: `h-10 w-10 rounded-full bg-muted flex items-center justify-center`,
        children: B(e.type),
      }),
      (0, F.jsxs)(`div`, {
        className: `flex-1 min-w-0`,
        children: [
          (0, F.jsx)(`p`, {
            className: `text-sm font-medium line-clamp-1`,
            children: P(e),
          }),
          e.comment?.content &&
            (0, F.jsxs)(`p`, {
              className: `text-xs text-muted-foreground line-clamp-1 mt-1`,
              children: [`"`, e.comment.content, `"`],
            }),
          (0, F.jsx)(`p`, {
            className: `text-xs text-muted-foreground mt-1`,
            children: ne(new Date(e.created_at), {
              addSuffix: !0,
              locale: w(n.language),
            }),
          }),
        ],
      }),
      e.game?.thumbnail_url &&
        (0, F.jsx)(`img`, {
          src: V(e.game.thumbnail_url),
          alt: e.game.title,
          className: `h-12 w-16 object-cover rounded`,
        }),
      e.target_user?.avatar_url &&
        (0, F.jsxs)(te, {
          className: `h-10 w-10`,
          children: [
            (0, F.jsx)(_, { src: m(e.target_user.avatar_url) }),
            (0, F.jsx)(g, { children: e.target_user.username?.[0] || `?` }),
          ],
        }),
    ],
  });
}
export { I as Profile, I as default };
