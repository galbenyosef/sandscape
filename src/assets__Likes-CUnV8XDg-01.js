// assets__Likes-CUnV8XDg 01 — classname
// Lines 1-280 of readable/assets__Likes-CUnV8XDg.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { n as i } from "./AuthService-CQeU_0bQ.js";
import { r as a, t as o } from "./button-Ap3ysi5G.js";
import { t as s } from "./useTranslation-BdauNPOZ.js";
import { n as c, r as l, t as u } from "./avatar-ixs41cq5.js";
import { t as d } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  c as f,
  g as p,
  it as m,
  s as h,
  st as g,
  v as _,
} from "./index-BKDksszn.js";
import { a as v, n as y } from "./gameLikes-CVeS3kbw.js";
import { n as b, t as x } from "./card-DLIi0Qe8.js";
var S = a(`HeartOff`, [
    [`line`, { x1: `2`, y1: `2`, x2: `22`, y2: `22`, key: `1w4vcy` }],
    [
      `path`,
      {
        d: `M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35`,
        key: `3mpagl`,
      },
    ],
    [
      `path`,
      {
        d: `M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17`,
        key: `1gh3v3`,
      },
    ],
  ]),
  C = e(t()),
  w = n();
function T(e) {
  if (e) return i.storage.from(`avatars`).getPublicUrl(e).data.publicUrl;
}
function E(e) {
  if (e)
    return e.startsWith(`http`)
      ? e
      : i.storage.from(`gamethumbnails`).getPublicUrl(e).data.publicUrl;
}
function D() {
  let { t: e, i18n: t } = s(),
    n = r(),
    [i, a] = (0, C.useState)(!0),
    [D, O] = (0, C.useState)([]),
    [k, A] = (0, C.useState)(null);
  (0, C.useEffect)(() => {
    (async () => {
      try {
        a(!0);
        let e = await y();
        O(e);
      } catch (e) {
        console.error(`Error fetching liked games:`, e);
      } finally {
        a(!1);
      }
    })();
  }, []);
  let j = async (e) => {
      A(e);
      try {
        (await v(e), O((t) => t.filter((t) => t.id !== e)));
      } catch (e) {
        console.error(`Error unliking game:`, e);
      } finally {
        A(null);
      }
    },
    M = (e, t) => {
      n(`/play?g=${t || e}`);
    };
  return i
    ? (0, w.jsxs)(w.Fragment, {
        children: [
          (0, w.jsx)(p, {
            title: e(`likes.seoTitle`, `My Liked Games | Sandscape`),
            description: e(
              `likes.seoDescription`,
              `View all the games you've liked on Sandscape.`,
            ),
          }),
          (0, w.jsxs)(`div`, {
            className: `container mx-auto py-6 px-4`,
            children: [
              (0, w.jsx)(`h1`, {
                className: `text-2xl font-bold mb-6`,
                children: e(`likes.title`, `Liked Games`),
              }),
              (0, w.jsx)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`,
                children: [...Array(8)].map((e, t) =>
                  (0, w.jsxs)(
                    x,
                    {
                      className: `overflow-hidden`,
                      children: [
                        (0, w.jsx)(_, { className: `w-full h-40` }),
                        (0, w.jsxs)(b, {
                          className: `p-4 space-y-2`,
                          children: [
                            (0, w.jsx)(_, { className: `h-5 w-3/4` }),
                            (0, w.jsx)(_, { className: `h-4 w-1/2` }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    : (0, w.jsxs)(w.Fragment, {
        children: [
          (0, w.jsx)(p, {
            title: e(`likes.seoTitle`, `My Liked Games | Sandscape`),
            description: e(
              `likes.seoDescription`,
              `View all the games you've liked on Sandscape.`,
            ),
          }),
          (0, w.jsxs)(`div`, {
            className: `container mx-auto py-6 px-4`,
            children: [
              (0, w.jsx)(`h1`, {
                className: `text-2xl font-bold mb-6`,
                children: `Liked Games`,
              }),
              D.length === 0
                ? (0, w.jsxs)(`div`, {
                    className: `text-center py-12`,
                    children: [
                      (0, w.jsx)(m, {
                        className: `h-16 w-16 mx-auto text-muted-foreground mb-4`,
                      }),
                      (0, w.jsx)(`h2`, {
                        className: `text-xl font-semibold mb-2`,
                        children: e(`likes.emptyTitle`, `No liked games yet`),
                      }),
                      (0, w.jsx)(`p`, {
                        className: `text-muted-foreground mb-4`,
                        children: e(
                          `likes.emptyMessage`,
                          `Games you like will appear here`,
                        ),
                      }),
                      (0, w.jsx)(o, {
                        onClick: () => n(`/`),
                        children: e(`likes.browseGames`, `Browse Games`),
                      }),
                    ],
                  })
                : (0, w.jsx)(f, {
                    className: `h-[calc(100vh-12rem)]`,
                    children: (0, w.jsx)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pr-4`,
                      children: D.map((n) =>
                        (0, w.jsxs)(
                          x,
                          {
                            className: `overflow-hidden cursor-pointer hover:shadow-lg transition-shadow`,
                            onClick: () => M(n.id),
                            children: [
                              (0, w.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, w.jsx)(`img`, {
                                    src:
                                      E(n.thumbnail_url) ||
                                      `/placeholder-game.png`,
                                    alt: n.title,
                                    className: `w-full h-40 object-cover`,
                                  }),
                                  (0, w.jsx)(o, {
                                    variant: `secondary`,
                                    size: `icon`,
                                    className: `absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background`,
                                    onClick: (e) => {
                                      (e.stopPropagation(), j(n.id));
                                    },
                                    disabled: k === n.id,
                                    children:
                                      k === n.id
                                        ? (0, w.jsx)(S, {
                                            className: `h-4 w-4 animate-pulse`,
                                          })
                                        : (0, w.jsx)(m, {
                                            className: `h-4 w-4 fill-red-500 text-red-500`,
                                          }),
                                  }),
                                ],
                              }),
                              (0, w.jsxs)(b, {
                                className: `p-4`,
                                children: [
                                  (0, w.jsx)(`h3`, {
                                    className: `font-semibold line-clamp-1 mb-2`,
                                    children: n.title,
                                  }),
                                  (0, w.jsxs)(`div`, {
                                    className: `flex items-center gap-2 mb-2`,
                                    children: [
                                      (0, w.jsxs)(u, {
                                        className: `h-5 w-5`,
                                        children: [
                                          (0, w.jsx)(l, {
                                            src: T(n.creator?.avatar_url),
                                          }),
                                          (0, w.jsx)(c, {
                                            className: `text-xs`,
                                            children:
                                              n.creator?.username?.[0] || `?`,
                                          }),
                                        ],
                                      }),
                                      (0, w.jsx)(`span`, {
                                        className: `text-sm text-muted-foreground line-clamp-1`,
                                        children:
                                          n.creator?.username ||
                                          e(`likes.unknownCreator`, `Unknown`),
                                      }),
                                    ],
                                  }),
                                  (0, w.jsxs)(`div`, {
                                    className: `flex items-center justify-between text-xs text-muted-foreground`,
                                    children: [
                                      (0, w.jsxs)(`div`, {
                                        className: `flex items-center gap-3`,
                                        children: [
                                          (0, w.jsxs)(`span`, {
                                            className: `flex items-center gap-1`,
                                            children: [
                                              (0, w.jsx)(m, {
                                                className: `h-3 w-3`,
                                              }),
                                              n.like_count,
                                            ],
                                          }),
                                          (0, w.jsxs)(`span`, {
                                            className: `flex items-center gap-1`,
                                            children: [
                                              (0, w.jsx)(g, {
                                                className: `h-3 w-3`,
                                              }),
                                              n.view_count,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, w.jsx)(`span`, {
                                        children: d(new Date(n.liked_at), {
                                          addSuffix: !0,
                                          locale: h(t.language),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          n.id,
                        ),
                      ),
                    }),
                  }),
            ],
          }),
        ],
      });
}
