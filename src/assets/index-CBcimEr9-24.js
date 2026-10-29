// index-CBcimEr9 24 — classname
// Lines 9070-9364 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function Sc() {
  let e = s(),
    { removeNotification: t } = vi(),
    { toast: n } = h(),
    [r, i] = (0, H.useState)(null),
    a = async (r, a, o) => {
      let s = xc(r);
      if (s) {
        i(r.id);
        try {
          let {
            data: { user: i },
          } = await C.auth.getUser();
          if (!i) return;
          let c = await Oe();
          (
            await fetch(
              `${ke.API_BASE_URL}/api/sessions/${s}/collaborators/${i.id}`,
              {
                method: `PATCH`,
                headers: c,
                body: JSON.stringify({ status: a }),
              },
            )
          ).ok
            ? (await t(r.id),
              o?.(),
              a === `accepted`
                ? e(`/creating?session=${s}`)
                : n({ title: `Invitation declined` }))
            : n({
                title:
                  a === `accepted`
                    ? `Failed to accept invitation`
                    : `Failed to decline invitation`,
                variant: `destructive`,
              });
        } catch (e) {
          (console.error(`${a} invite failed:`, e),
            n({
              title:
                a === `accepted`
                  ? `Failed to accept invitation`
                  : `Failed to decline invitation`,
              variant: `destructive`,
            }));
        } finally {
          i(null);
        }
      }
    };
  return {
    processingId: r,
    acceptInvite: (e, t) => a(e, `accepted`, t),
    declineInvite: (e, t) => a(e, `declined`, t),
  };
}
function Cc(e) {
  switch (e) {
    case `new_follower`:
      return (0, U.jsx)(jn, { className: `h-4 w-4 text-blue-500` });
    case `game_like`:
      return (0, U.jsx)(vn, { className: `h-4 w-4 text-red-500` });
    case `game_comment`:
    case `comment_reply`:
      return (0, U.jsx)(Cn, { className: `h-4 w-4 text-green-500` });
    case `collab_invite`:
    case `chat_mention`:
      return (0, U.jsx)(Mn, { className: `h-4 w-4 text-purple-500` });
    default:
      return (0, U.jsx)(cn, { className: `h-4 w-4` });
  }
}
function wc(e) {
  if (e) return C.storage.from(`avatars`).getPublicUrl(e).data.publicUrl;
}
function Tc() {
  let e = s(),
    { t, i18n: n } = R(),
    { isAuthenticated: r } = G(),
    {
      notifications: i,
      unreadCount: a,
      loading: o,
      markAsRead: c,
      markAllAsRead: l,
      removeNotification: u,
    } = vi(),
    [d, f] = (0, H.useState)(!1),
    { processingId: p, acceptInvite: m, declineInvite: h } = Sc(),
    g = () => {
      if (!r) {
        e(J(`/notifications`, `protected_route`));
        return;
      }
    },
    _ = async (t) => {
      t.type !== `collab_invite` &&
        (t.is_read || (await c(t.id)), f(!1), e(hi(t)));
    },
    v = async (e) => {
      (e.stopPropagation(), await l());
    },
    y = async (e, t) => {
      (e.stopPropagation(), await u(t));
    },
    b = (e, t) => {
      (e.stopPropagation(), m(t, () => f(!1)));
    },
    x = (e, t) => {
      (e.stopPropagation(), h(t));
    };
  return r
    ? (0, U.jsxs)(ce, {
        open: d,
        onOpenChange: f,
        children: [
          (0, U.jsx)(se, {
            asChild: !0,
            children: (0, U.jsxs)(P, {
              variant: `ghost`,
              size: `icon`,
              className: `relative h-8 w-8 sm:h-10 sm:w-10`,
              children: [
                (0, U.jsx)(cn, {
                  className: `h-4 w-4 sm:h-5 sm:w-5 text-foreground`,
                }),
                a > 0 &&
                  (0, U.jsx)(`span`, {
                    className: `absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary text-[10px] sm:text-xs font-medium flex items-center justify-center text-primary-foreground`,
                    children: a > 99 ? `99+` : a,
                  }),
              ],
            }),
          }),
          (0, U.jsxs)(le, {
            align: `end`,
            className: `w-80`,
            children: [
              (0, U.jsxs)(de, {
                className: `flex items-center justify-between`,
                children: [
                  (0, U.jsx)(`span`, {
                    children: t(`notifications.title`, `Notifications`),
                  }),
                  a > 0 &&
                    (0, U.jsxs)(P, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `h-6 text-xs`,
                      onClick: v,
                      children: [
                        (0, U.jsx)(te, { className: `h-3 w-3 mr-1` }),
                        t(`notifications.markAllRead`, `Mark all read`),
                      ],
                    }),
                ],
              }),
              (0, U.jsx)(I, {}),
              (0, U.jsx)(hs, {
                className: `h-[300px]`,
                children: o
                  ? (0, U.jsx)(`div`, {
                      className: `p-4 text-center text-muted-foreground`,
                      children: t(`general.loading`, `Loading...`),
                    })
                  : i.length === 0
                    ? (0, U.jsx)(`div`, {
                        className: `p-4 text-center text-muted-foreground`,
                        children: t(
                          `notifications.emptyTitle`,
                          `No notifications yet`,
                        ),
                      })
                    : i.map((e) => {
                        let r = e.type === `collab_invite`,
                          i = `flex items-start gap-3 p-3 cursor-pointer ${e.is_read ? `` : `bg-muted/50`}`,
                          a = (0, U.jsxs)(U.Fragment, {
                            children: [
                              (0, U.jsx)(`div`, {
                                className: `flex-shrink-0 mt-1`,
                                children: e.sender?.avatar_url
                                  ? (0, U.jsxs)(Xe, {
                                      className: `h-8 w-8`,
                                      children: [
                                        (0, U.jsx)(Ye, {
                                          src: wc(e.sender.avatar_url),
                                        }),
                                        (0, U.jsx)(Je, {
                                          children:
                                            e.sender.username?.[0] || `?`,
                                        }),
                                      ],
                                    })
                                  : (0, U.jsx)(`div`, {
                                      className: `h-8 w-8 rounded-full bg-muted flex items-center justify-center`,
                                      children: Cc(e.type),
                                    }),
                              }),
                              (0, U.jsxs)(`div`, {
                                className: `flex-1 min-w-0`,
                                children: [
                                  (0, U.jsx)(`p`, {
                                    className: `text-sm line-clamp-2`,
                                    children: mi(e, t),
                                  }),
                                  (0, U.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground mt-1`,
                                    children: lt(new Date(e.created_at), {
                                      addSuffix: !0,
                                      locale: bc(n.language),
                                    }),
                                  }),
                                  r &&
                                    (0, U.jsxs)(`div`, {
                                      className: `flex gap-1 mt-1.5`,
                                      children: [
                                        (0, U.jsxs)(P, {
                                          variant: `default`,
                                          size: `sm`,
                                          className: `h-6 text-xs px-2`,
                                          disabled: p === e.id,
                                          onClick: (t) => b(t, e),
                                          children: [
                                            (0, U.jsx)(un, {
                                              className: `h-3 w-3 mr-1`,
                                            }),
                                            t(`notifications.accept`, `Accept`),
                                          ],
                                        }),
                                        (0, U.jsxs)(P, {
                                          variant: `outline`,
                                          size: `sm`,
                                          className: `h-6 text-xs px-2`,
                                          disabled: p === e.id,
                                          onClick: (t) => x(t, e),
                                          children: [
                                            (0, U.jsx)(fn, {
                                              className: `h-3 w-3 mr-1`,
                                            }),
                                            t(
                                              `notifications.decline`,
                                              `Decline`,
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, U.jsx)(P, {
                                variant: `ghost`,
                                size: `icon`,
                                className: `h-6 w-6 flex-shrink-0`,
                                onClick: (t) => y(t, e.id),
                                children: (0, U.jsx)(An, {
                                  className: `h-3 w-3 text-muted-foreground`,
                                }),
                              }),
                            ],
                          });
                        return r
                          ? (0, U.jsx)(
                              `div`,
                              {
                                className: `${i} relative rounded-sm hover:bg-accent hover:text-accent-foreground`,
                                children: a,
                              },
                              e.id,
                            )
                          : (0, U.jsx)(
                              F,
                              {
                                className: i,
                                onClick: () => _(e),
                                children: a,
                              },
                              e.id,
                            );
                      }),
              }),
            ],
          }),
        ],
      })
    : (0, U.jsx)(P, {
        variant: `ghost`,
        size: `icon`,
        className: `relative h-8 w-8 sm:h-10 sm:w-10`,
        onClick: g,
        children: (0, U.jsx)(cn, {
          className: `h-4 w-4 sm:h-5 sm:w-5 text-foreground`,
        }),
      });
}
