// index-BKDksszn 28 — classname
// Lines 10044-10338 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
function Kc() {
  let e = s(),
    { removeNotification: t } = Ui(),
    { toast: n } = h(),
    [r, i] = (0, U.useState)(null),
    a = async (r, a, o) => {
      let s = Gc(r);
      if (s) {
        i(r.id);
        try {
          let {
            data: { user: i },
          } = await C.auth.getUser();
          if (!i) return;
          let c = await Te();
          (
            await fetch(
              `${Ee.API_BASE_URL}/api/sessions/${s}/collaborators/${i.id}`,
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
function qc(e) {
  switch (e) {
    case `new_follower`:
      return (0, W.jsx)(En, { className: `h-4 w-4 text-blue-500` });
    case `game_like`:
      return (0, W.jsx)(pn, { className: `h-4 w-4 text-red-500` });
    case `game_comment`:
    case `comment_reply`:
      return (0, W.jsx)(vn, { className: `h-4 w-4 text-green-500` });
    case `collab_invite`:
    case `chat_mention`:
      return (0, W.jsx)(Dn, { className: `h-4 w-4 text-purple-500` });
    default:
      return (0, W.jsx)(nn, { className: `h-4 w-4` });
  }
}
function Jc(e) {
  if (e) return C.storage.from(`avatars`).getPublicUrl(e).data.publicUrl;
}
function Yc() {
  let e = s(),
    { t, i18n: n } = z(),
    { isAuthenticated: r } = Sr(),
    {
      notifications: i,
      unreadCount: a,
      loading: o,
      markAsRead: c,
      markAllAsRead: l,
      removeNotification: u,
    } = Ui(),
    [d, f] = (0, U.useState)(!1),
    { processingId: p, acceptInvite: m, declineInvite: h } = Kc(),
    g = () => {
      if (!r) {
        e(Xo(`/notifications`, `protected_route`));
        return;
      }
    },
    _ = async (t) => {
      t.type !== `collab_invite` &&
        (t.is_read || (await c(t.id)), f(!1), e(Bi(t)));
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
    ? (0, W.jsxs)(se, {
        open: d,
        onOpenChange: f,
        children: [
          (0, W.jsx)(oe, {
            asChild: !0,
            children: (0, W.jsxs)(P, {
              variant: `ghost`,
              size: `icon`,
              className: `relative h-8 w-8 sm:h-10 sm:w-10`,
              children: [
                (0, W.jsx)(nn, {
                  className: `h-4 w-4 sm:h-5 sm:w-5 text-foreground`,
                }),
                a > 0 &&
                  (0, W.jsx)(`span`, {
                    className: `absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary text-[10px] sm:text-xs font-medium flex items-center justify-center text-primary-foreground`,
                    children: a > 99 ? `99+` : a,
                  }),
              ],
            }),
          }),
          (0, W.jsxs)(ce, {
            align: `end`,
            className: `w-80`,
            children: [
              (0, W.jsxs)(ue, {
                className: `flex items-center justify-between`,
                children: [
                  (0, W.jsx)(`span`, {
                    children: t(`notifications.title`, `Notifications`),
                  }),
                  a > 0 &&
                    (0, W.jsxs)(P, {
                      variant: `ghost`,
                      size: `sm`,
                      className: `h-6 text-xs`,
                      onClick: v,
                      children: [
                        (0, W.jsx)(te, { className: `h-3 w-3 mr-1` }),
                        t(`notifications.markAllRead`, `Mark all read`),
                      ],
                    }),
                ],
              }),
              (0, W.jsx)(L, {}),
              (0, W.jsx)(zs, {
                className: `h-[300px]`,
                children: o
                  ? (0, W.jsx)(`div`, {
                      className: `p-4 text-center text-muted-foreground`,
                      children: t(`general.loading`, `Loading...`),
                    })
                  : i.length === 0
                    ? (0, W.jsx)(`div`, {
                        className: `p-4 text-center text-muted-foreground`,
                        children: t(
                          `notifications.emptyTitle`,
                          `No notifications yet`,
                        ),
                      })
                    : i.map((e) => {
                        let r = e.type === `collab_invite`,
                          i = `flex items-start gap-3 p-3 cursor-pointer ${e.is_read ? `` : `bg-muted/50`}`,
                          a = (0, W.jsxs)(W.Fragment, {
                            children: [
                              (0, W.jsx)(`div`, {
                                className: `flex-shrink-0 mt-1`,
                                children: e.sender?.avatar_url
                                  ? (0, W.jsxs)(Ge, {
                                      className: `h-8 w-8`,
                                      children: [
                                        (0, W.jsx)(We, {
                                          src: Jc(e.sender.avatar_url),
                                        }),
                                        (0, W.jsx)(Ue, {
                                          children:
                                            e.sender.username?.[0] || `?`,
                                        }),
                                      ],
                                    })
                                  : (0, W.jsx)(`div`, {
                                      className: `h-8 w-8 rounded-full bg-muted flex items-center justify-center`,
                                      children: qc(e.type),
                                    }),
                              }),
                              (0, W.jsxs)(`div`, {
                                className: `flex-1 min-w-0`,
                                children: [
                                  (0, W.jsx)(`p`, {
                                    className: `text-sm line-clamp-2`,
                                    children: zi(e, t),
                                  }),
                                  (0, W.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground mt-1`,
                                    children: it(new Date(e.created_at), {
                                      addSuffix: !0,
                                      locale: Wc(n.language),
                                    }),
                                  }),
                                  r &&
                                    (0, W.jsxs)(`div`, {
                                      className: `flex gap-1 mt-1.5`,
                                      children: [
                                        (0, W.jsxs)(P, {
                                          variant: `default`,
                                          size: `sm`,
                                          className: `h-6 text-xs px-2`,
                                          disabled: p === e.id,
                                          onClick: (t) => b(t, e),
                                          children: [
                                            (0, W.jsx)(an, {
                                              className: `h-3 w-3 mr-1`,
                                            }),
                                            t(`notifications.accept`, `Accept`),
                                          ],
                                        }),
                                        (0, W.jsxs)(P, {
                                          variant: `outline`,
                                          size: `sm`,
                                          className: `h-6 text-xs px-2`,
                                          disabled: p === e.id,
                                          onClick: (t) => x(t, e),
                                          children: [
                                            (0, W.jsx)(sn, {
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
                              (0, W.jsx)(P, {
                                variant: `ghost`,
                                size: `icon`,
                                className: `h-6 w-6 flex-shrink-0`,
                                onClick: (t) => y(t, e.id),
                                children: (0, W.jsx)(Tn, {
                                  className: `h-3 w-3 text-muted-foreground`,
                                }),
                              }),
                            ],
                          });
                        return r
                          ? (0, W.jsx)(
                              `div`,
                              {
                                className: `${i} relative rounded-sm hover:bg-accent hover:text-accent-foreground`,
                                children: a,
                              },
                              e.id,
                            )
                          : (0, W.jsx)(
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
    : (0, W.jsx)(P, {
        variant: `ghost`,
        size: `icon`,
        className: `relative h-8 w-8 sm:h-10 sm:w-10`,
        onClick: g,
        children: (0, W.jsx)(nn, {
          className: `h-4 w-4 sm:h-5 sm:w-5 text-foreground`,
        }),
      });
}
