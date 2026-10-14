// assets__Notifications-CLactyWV 01 — classname
// Lines 1-248 of readable/assets__Notifications-CLactyWV.pretty.js (statement-aligned).
import { t as e } from "./jsx-runtime-BtyjnKZj.js";
import { c as t } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { n } from "./AuthService-CQeU_0bQ.js";
import { t as r } from "./button-Ap3ysi5G.js";
import { t as i } from "./check-DVcwwxJi.js";
import { t as a } from "./useTranslation-BdauNPOZ.js";
import { n as o, r as s, t as c } from "./avatar-ixs41cq5.js";
import { t as l } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  J as u,
  N as d,
  P as f,
  X as p,
  Y as m,
  c as h,
  ft as g,
  g as _,
  it as v,
  j as y,
  lt as b,
  nt as x,
  o as S,
  s as C,
  ut as w,
  v as T,
} from "./index-BKDksszn.js";
var E = e();
function D(e) {
  switch (e) {
    case `new_follower`:
      return (0, E.jsx)(m, { className: `h-4 w-4 text-blue-500` });
    case `game_like`:
      return (0, E.jsx)(v, { className: `h-4 w-4 text-red-500` });
    case `game_comment`:
    case `comment_reply`:
      return (0, E.jsx)(x, { className: `h-4 w-4 text-green-500` });
    case `collab_invite`:
    case `chat_mention`:
      return (0, E.jsx)(u, { className: `h-4 w-4 text-purple-500` });
    default:
      return (0, E.jsx)(g, { className: `h-4 w-4` });
  }
}
function O(e) {
  if (e) return n.storage.from(`avatars`).getPublicUrl(e).data.publicUrl;
}
function k() {
  let { t: e, i18n: n } = a(),
    u = t(),
    {
      notifications: m,
      unreadCount: v,
      loading: x,
      markAsRead: k,
      markAllAsRead: A,
      removeNotification: j,
    } = y(),
    { processingId: M, acceptInvite: N, declineInvite: P } = S(),
    F = async (e) => {
      e.type !== `collab_invite` && (e.is_read || (await k(e.id)), u(d(e)));
    };
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsx)(_, {
        title: e(`notifications.seoTitle`, `Notifications | Sandscape`),
        description: e(
          `notifications.seoDescription`,
          `View your Sandscape notifications — follows, likes, comments, collaboration invites and mentions.`,
        ),
      }),
      (0, E.jsxs)(`div`, {
        className: `container mx-auto py-6 px-4`,
        children: [
          (0, E.jsxs)(`div`, {
            className: `flex items-center justify-between mb-6`,
            children: [
              (0, E.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: e(`notifications.title`, `Notifications`),
              }),
              v > 0 &&
                (0, E.jsxs)(r, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: () => A(),
                  children: [
                    (0, E.jsx)(i, { className: `h-4 w-4 mr-1` }),
                    e(`notifications.markAllRead`, `Mark all read`),
                  ],
                }),
            ],
          }),
          x
            ? (0, E.jsx)(`div`, {
                className: `space-y-3`,
                children: [...[, , , , , ,]].map((e, t) =>
                  (0, E.jsxs)(
                    `div`,
                    {
                      className: `flex items-start gap-3 p-4 border rounded-lg`,
                      children: [
                        (0, E.jsx)(T, { className: `h-10 w-10 rounded-full` }),
                        (0, E.jsxs)(`div`, {
                          className: `flex-1 space-y-2`,
                          children: [
                            (0, E.jsx)(T, { className: `h-4 w-3/4` }),
                            (0, E.jsx)(T, { className: `h-3 w-1/4` }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              })
            : m.length === 0
              ? (0, E.jsxs)(`div`, {
                  className: `text-center py-12`,
                  children: [
                    (0, E.jsx)(g, {
                      className: `h-16 w-16 mx-auto text-muted-foreground mb-4`,
                    }),
                    (0, E.jsx)(`h2`, {
                      className: `text-xl font-semibold mb-2`,
                      children: e(
                        `notifications.emptyTitle`,
                        `No notifications yet`,
                      ),
                    }),
                    (0, E.jsx)(`p`, {
                      className: `text-muted-foreground mb-4`,
                      children: e(
                        `notifications.emptyDescription`,
                        `When people follow you, like or comment on your games, or invite you to collaborate, you'll see it here.`,
                      ),
                    }),
                    (0, E.jsx)(r, {
                      onClick: () => u(`/`),
                      children: e(`notifications.browseGames`, `Browse Games`),
                    }),
                  ],
                })
              : (0, E.jsx)(h, {
                  className: `h-[calc(100vh-12rem)]`,
                  children: (0, E.jsx)(`div`, {
                    className: `flex flex-col gap-2 pr-4`,
                    children: m.map((t) => {
                      let i = t.type === `collab_invite`;
                      return (0, E.jsxs)(
                        `div`,
                        {
                          className: `flex items-start gap-3 p-4 border rounded-lg transition-colors ${t.is_read ? `` : `bg-muted/50`} ${i ? `` : `cursor-pointer hover:bg-accent/50`}`,
                          onClick: i ? void 0 : () => F(t),
                          children: [
                            (0, E.jsx)(`div`, {
                              className: `flex-shrink-0 mt-0.5`,
                              children: t.sender?.avatar_url
                                ? (0, E.jsxs)(c, {
                                    className: `h-10 w-10`,
                                    children: [
                                      (0, E.jsx)(s, {
                                        src: O(t.sender.avatar_url),
                                      }),
                                      (0, E.jsx)(o, {
                                        children: t.sender.username?.[0] || `?`,
                                      }),
                                    ],
                                  })
                                : (0, E.jsx)(`div`, {
                                    className: `h-10 w-10 rounded-full bg-muted flex items-center justify-center`,
                                    children: D(t.type),
                                  }),
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `flex-1 min-w-0`,
                              children: [
                                (0, E.jsx)(`p`, {
                                  className: `text-sm`,
                                  children: f(t, e),
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground mt-1`,
                                  children: l(new Date(t.created_at), {
                                    addSuffix: !0,
                                    locale: C(n.language),
                                  }),
                                }),
                                i &&
                                  (0, E.jsxs)(`div`, {
                                    className: `flex gap-2 mt-2`,
                                    children: [
                                      (0, E.jsxs)(r, {
                                        variant: `default`,
                                        size: `sm`,
                                        className: `h-7 text-xs`,
                                        disabled: M === t.id,
                                        onClick: (e) => {
                                          (e.stopPropagation(), N(t));
                                        },
                                        children: [
                                          (0, E.jsx)(w, {
                                            className: `h-3 w-3 mr-1`,
                                          }),
                                          e(`notifications.accept`, `Accept`),
                                        ],
                                      }),
                                      (0, E.jsxs)(r, {
                                        variant: `outline`,
                                        size: `sm`,
                                        className: `h-7 text-xs`,
                                        disabled: M === t.id,
                                        onClick: (e) => {
                                          (e.stopPropagation(), P(t));
                                        },
                                        children: [
                                          (0, E.jsx)(b, {
                                            className: `h-3 w-3 mr-1`,
                                          }),
                                          e(`notifications.decline`, `Decline`),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, E.jsx)(r, {
                              variant: `ghost`,
                              size: `icon`,
                              className: `h-7 w-7 flex-shrink-0`,
                              onClick: (e) => {
                                (e.stopPropagation(), j(t.id));
                              },
                              children: (0, E.jsx)(p, {
                                className: `h-4 w-4 text-muted-foreground`,
                              }),
                            }),
                          ],
                        },
                        t.id,
                      );
                    }),
                  }),
                }),
        ],
      }),
    ],
  });
}
