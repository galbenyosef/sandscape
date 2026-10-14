// Game-QkGXRHTR 06 — classname
// Lines 1798-2016 of readable/assets/Game-QkGXRHTR.pretty.js (statement-aligned).
function kt({
  comment: e,
  gameId: t,
  currentUserId: n,
  isAuthenticated: i,
  onDeleted: a,
  isReply: s = !1,
}) {
  let { t: c, i18n: u } = k(),
    d = r(),
    { toast: f } = o(),
    [m, h] = (0, z.useState)(!1),
    [g, v] = (0, z.useState)(e.likes),
    [y, S] = (0, z.useState)(!1),
    [ne, C] = (0, z.useState)(!1),
    [w, T] = (0, z.useState)(!1),
    [E, D] = (0, z.useState)(e.children || []),
    [O, A] = (0, z.useState)(!1),
    re = n === e.user._id;
  return (
    (0, z.useEffect)(() => {
      (async () => {
        if (n)
          try {
            let t = await ee(e._id);
            h(t);
          } catch (e) {
            console.error(`Error checking comment like status:`, e);
          }
      })();
    }, [e._id, n]),
    (0, H.jsxs)(`div`, {
      className: `space-y-2`,
      children: [
        (0, H.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            (0, H.jsxs)(M, {
              className: `h-8 w-8`,
              children: [
                (0, H.jsx)(j, { src: e.user.avatar }),
                (0, H.jsx)(ie, { children: e.user.name[0] }),
              ],
            }),
            (0, H.jsxs)(`div`, {
              className: `flex-1`,
              children: [
                (0, H.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, H.jsx)(`span`, {
                      className: `font-medium`,
                      children: e.user.name,
                    }),
                    (0, H.jsx)(`span`, {
                      className: `text-xs text-muted-foreground`,
                      children: se(new Date(e.createdAt), {
                        addSuffix: !0,
                        locale: Te(u.language),
                      }),
                    }),
                  ],
                }),
                (0, H.jsx)(`p`, {
                  className: `mt-1 text-sm`,
                  children: e.text,
                }),
                (0, H.jsxs)(`div`, {
                  className: `flex items-center gap-4 mt-2`,
                  children: [
                    (0, H.jsxs)(p, {
                      variant: `ghost`,
                      size: `sm`,
                      className: l(`gap-1`, m && `text-primary`),
                      onClick: async () => {
                        if (!y) {
                          if (!i) {
                            d(
                              I(
                                `${window.location.pathname}${window.location.search}`,
                                `play_gate`,
                              ),
                            );
                            return;
                          }
                          S(!0);
                          try {
                            m
                              ? (await te(e._id),
                                h(!1),
                                v((e) => Math.max(0, e - 1)))
                              : (await b(e._id), h(!0), v((e) => e + 1));
                          } catch (e) {
                            console.error(`Error updating comment like:`, e);
                          } finally {
                            S(!1);
                          }
                        }
                      },
                      disabled: y,
                      children: [
                        (0, H.jsx)(_, {
                          className: l(
                            `h-4 w-4`,
                            m && `fill-primary text-primary`,
                          ),
                        }),
                        g,
                      ],
                    }),
                    !s &&
                      (0, H.jsxs)(p, {
                        variant: `ghost`,
                        size: `sm`,
                        className: l(`gap-1`, O && `text-primary`),
                        onClick: () => {
                          if (!i) {
                            d(
                              I(
                                `${window.location.pathname}${window.location.search}`,
                                `play_gate`,
                              ),
                            );
                            return;
                          }
                          A((e) => !e);
                        },
                        children: [
                          (0, H.jsx)(Ce, { className: `h-4 w-4` }),
                          E.length > 0 ? E.length : c(`game.reply`, `Reply`),
                        ],
                      }),
                    re &&
                      (0, H.jsx)(p, {
                        variant: `ghost`,
                        size: `sm`,
                        className: `gap-1 text-muted-foreground hover:text-destructive`,
                        onClick: () => T(!0),
                        disabled: ne,
                        children: (0, H.jsx)(he, { className: `h-4 w-4` }),
                      }),
                  ],
                }),
                !s &&
                  (O || E.length > 0) &&
                  (0, H.jsxs)(`div`, {
                    className: `mt-3 space-y-3 border-l-2 border-muted pl-3`,
                    children: [
                      O &&
                        (0, H.jsx)(Ot, {
                          gameId: t,
                          parentId: e._id,
                          placeholder: c(`game.replyToPlaceholder`, {
                            name: e.user.name,
                          }),
                          submitLabel: c(`game.reply`, `Reply`),
                          autoFocus: !0,
                          onCommentAdded: (e) => {
                            (D((t) => [...t, e]), A(!1));
                          },
                          onCancel: () => A(!1),
                        }),
                      E.map((e) =>
                        (0, H.jsx)(
                          kt,
                          {
                            comment: e,
                            gameId: t,
                            currentUserId: n,
                            isAuthenticated: i,
                            onDeleted: (e) =>
                              D((t) => t.filter((t) => t._id !== e)),
                            isReply: !0,
                          },
                          e._id,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, H.jsx)(_e, {}),
        (0, H.jsx)(Le, {
          open: w,
          onOpenChange: T,
          onConfirm: async () => {
            if (!(ne || !re)) {
              (T(!1), C(!0));
              try {
                (await x(e._id), a(e._id));
              } catch (e) {
                (console.error(`Error deleting comment:`, e),
                  f({
                    title: c(
                      `game.toast.deleteFailed`,
                      `Failed to delete comment.`,
                    ),
                    variant: `destructive`,
                  }));
              } finally {
                C(!1);
              }
            }
          },
          title: c(`game.deleteCommentTitle`, `Delete comment?`),
          description: c(
            `game.deleteCommentDescription`,
            `This comment will be permanently removed. This action cannot be undone.`,
          ),
          confirmLabel: c(`game.delete`, `Delete`),
          confirmVariant: `destructive`,
          icon: (0, H.jsx)(he, { className: `h-5 w-5` }),
        }),
      ],
    })
  );
}
