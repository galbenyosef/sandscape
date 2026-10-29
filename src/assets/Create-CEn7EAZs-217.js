// Create-CEn7EAZs 217 — classname
// Lines 73963-74309 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Iue({ isOpen: e, onClose: t, sessionId: n }) {
  let [r, i] = (0, X.useState)(``),
    [a, o] = (0, X.useState)([]),
    [s, c] = (0, X.useState)(!1),
    [l, d] = (0, X.useState)([]),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(null),
    [v, y] = (0, X.useState)(null),
    b = (0, X.useRef)(null),
    { user: x } = Dr(),
    { toast: C } = u(),
    w = l.some((e) => e.user_id === x?.id && e.role === `owner`),
    T = (0, X.useCallback)(async () => {
      if (n) {
        p(!0);
        try {
          let e = await _n(),
            t = await fetch(
              `${yn.API_BASE_URL}/api/sessions/${n}/collaborators`,
              { headers: e },
            );
          if (t.ok) {
            let e = await t.json();
            (d(Array.isArray(e) ? e : (e.collaborators ?? [])), y(null));
          } else
            (console.error(`Failed to fetch collaborators:`, t.status),
              y(`Something went wrong. Please try again.`));
        } catch (e) {
          (console.error(`Failed to fetch collaborators:`, e),
            y(`Something went wrong. Please try again.`));
        } finally {
          p(!1);
        }
      }
    }, [n]);
  ((0, X.useEffect)(() => {
    e && n && T();
  }, [e, n, T]),
    (0, X.useEffect)(() => {
      e ||
        (i(``),
        o([]),
        c(!1),
        y(null),
        (b.current &&= (b.current.abort(), null)));
    }, [e]),
    (0, X.useEffect)(() => {
      if (r.length < 2) {
        (o([]), c(!1));
        return;
      }
      c(!0);
      let e = setTimeout(async () => {
        b.current && b.current.abort();
        let e = new AbortController();
        b.current = e;
        try {
          let t = await _n(),
            n = await fetch(
              `${yn.API_BASE_URL}/api/users/search?q=${encodeURIComponent(r)}`,
              { headers: t, signal: e.signal },
            );
          if (n.ok) {
            let e = await n.json(),
              t = Array.isArray(e) ? e : (e.users ?? []),
              r = new Set(l.map((e) => e.user_id));
            (o(t.filter((e) => !r.has(e.user_id))), y(null));
          } else (o([]), y(`Something went wrong. Please try again.`));
        } catch (e) {
          e.name !== `AbortError` &&
            (console.error(`Search failed:`, e),
            o([]),
            y(`Something went wrong. Please try again.`));
        } finally {
          e.signal.aborted || c(!1);
        }
      }, 300);
      return () => {
        (clearTimeout(e), b.current && b.current.abort());
      };
    }, [r, l]));
  let E = async (e) => {
      if (n) {
        h(e.user_id);
        try {
          let t = await _n(),
            r = await fetch(
              `${yn.API_BASE_URL}/api/sessions/${n}/collaborators`,
              {
                method: `POST`,
                headers: t,
                body: JSON.stringify({ user_id: e.user_id }),
              },
            );
          r.ok
            ? (C({ title: `Invited ${e.username}` }), i(``), o([]), await T())
            : r.status === 409
              ? C({
                  title: `${e.username} is already invited`,
                  variant: `destructive`,
                })
              : C({ title: `Failed to send invite`, variant: `destructive` });
        } catch (e) {
          (console.error(`Invite failed:`, e),
            C({ title: `Failed to send invite`, variant: `destructive` }));
        } finally {
          h(null);
        }
      }
    },
    D = async (e, t) => {
      if (n) {
        _(e);
        try {
          let r = await _n();
          (
            await fetch(
              `${yn.API_BASE_URL}/api/sessions/${n}/collaborators/${e}`,
              { method: `DELETE`, headers: r },
            )
          ).ok
            ? (C({ title: `Removed ${t || `collaborator`}` }), await T())
            : C({
                title: `Failed to remove collaborator`,
                variant: `destructive`,
              });
        } catch (e) {
          (console.error(`Remove failed:`, e),
            C({
              title: `Failed to remove collaborator`,
              variant: `destructive`,
            }));
        } finally {
          _(null);
        }
      }
    };
  return (0, Z.jsx)(mo, {
    open: e,
    onOpenChange: t,
    children: (0, Z.jsxs)(uo, {
      className: `sm:max-w-md`,
      children: [
        (0, Z.jsx)(co, {
          children: (0, Z.jsx)(fo, { children: `Invite Collaborators` }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-4`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, Z.jsx)(kr, {
                  className: `absolute left-2 top-2.5 h-4 w-4 text-muted-foreground`,
                }),
                (0, Z.jsx)(Ar, {
                  placeholder: `Search users...`,
                  className: `pl-8`,
                  value: r,
                  onChange: (e) => i(e.target.value),
                }),
              ],
            }),
            v &&
              (0, Z.jsx)(`div`, {
                className: `text-sm text-red-400 bg-red-400/10 rounded px-3 py-2`,
                children: v,
              }),
            r.length >= 2 &&
              (0, Z.jsx)(`div`, {
                className: `space-y-1`,
                children: s
                  ? (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-center py-4 text-sm text-muted-foreground`,
                      children: [
                        (0, Z.jsx)(J, {
                          className: `mr-2 h-4 w-4 animate-spin`,
                        }),
                        `Searching...`,
                      ],
                    })
                  : a.length > 0
                    ? a.map((e) =>
                        (0, Z.jsxs)(
                          `div`,
                          {
                            className: `flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-accent`,
                            children: [
                              (0, Z.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, Z.jsxs)(In, {
                                    className: `h-7 w-7`,
                                    children: [
                                      (0, Z.jsx)(Fn, {
                                        src: e.avatar_url ?? void 0,
                                        alt: e.username,
                                      }),
                                      (0, Z.jsx)(Pn, {
                                        children: e.username[0]?.toUpperCase(),
                                      }),
                                    ],
                                  }),
                                  (0, Z.jsx)(`span`, {
                                    className: `text-sm`,
                                    children: e.username,
                                  }),
                                ],
                              }),
                              (0, Z.jsx)(S, {
                                variant: `ghost`,
                                size: `sm`,
                                className: `h-7 px-2`,
                                disabled: m === e.user_id,
                                onClick: () => E(e),
                                children:
                                  m === e.user_id
                                    ? (0, Z.jsx)(J, {
                                        className: `h-4 w-4 animate-spin`,
                                      })
                                    : (0, Z.jsxs)(Z.Fragment, {
                                        children: [
                                          (0, Z.jsx)(Mr, {
                                            className: `mr-1 h-4 w-4`,
                                          }),
                                          `Invite`,
                                        ],
                                      }),
                              }),
                            ],
                          },
                          e.user_id,
                        ),
                      )
                    : (0, Z.jsx)(`div`, {
                        className: `py-4 text-center text-sm text-muted-foreground`,
                        children: `No users found`,
                      }),
              }),
            (0, Z.jsx)(`div`, { className: `border-t` }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Z.jsx)(`p`, {
                  className: `text-sm font-medium text-muted-foreground`,
                  children: `Collaborators`,
                }),
                f
                  ? (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-center py-4 text-sm text-muted-foreground`,
                      children: [
                        (0, Z.jsx)(J, {
                          className: `mr-2 h-4 w-4 animate-spin`,
                        }),
                        `Loading...`,
                      ],
                    })
                  : l.length > 0
                    ? (0, Z.jsx)(Lr, {
                        className: `max-h-48`,
                        children: (0, Z.jsx)(`div`, {
                          className: `space-y-1`,
                          children: l.map((e) =>
                            (0, Z.jsxs)(
                              `div`,
                              {
                                className: `flex items-center justify-between rounded-md px-2 py-1.5`,
                                children: [
                                  (0, Z.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, Z.jsxs)(In, {
                                        className: `h-7 w-7`,
                                        children: [
                                          (0, Z.jsx)(Fn, {
                                            src: e.avatar_url ?? void 0,
                                            alt: e.username ?? `User`,
                                          }),
                                          (0, Z.jsx)(Pn, {
                                            children: (e.username ??
                                              `U`)[0]?.toUpperCase(),
                                          }),
                                        ],
                                      }),
                                      (0, Z.jsx)(`span`, {
                                        className: `text-sm`,
                                        children: e.username ?? `Unknown`,
                                      }),
                                    ],
                                  }),
                                  (0, Z.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      e.role === `owner`
                                        ? (0, Z.jsxs)(`span`, {
                                            className: `flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-500`,
                                            children: [
                                              (0, Z.jsx)(oee, {
                                                className: `h-3 w-3`,
                                              }),
                                              `Owner`,
                                            ],
                                          })
                                        : (0, Z.jsx)(`span`, {
                                            className: `rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground`,
                                            children: `Collaborator`,
                                          }),
                                      w &&
                                        e.role !== `owner` &&
                                        (0, Z.jsx)(S, {
                                          variant: `ghost`,
                                          size: `icon`,
                                          className: `h-6 w-6`,
                                          disabled: g === e.user_id,
                                          onClick: () =>
                                            D(e.user_id, e.username),
                                          children:
                                            g === e.user_id
                                              ? (0, Z.jsx)(J, {
                                                  className: `h-3 w-3 animate-spin`,
                                                })
                                              : (0, Z.jsx)(Jr, {
                                                  className: `h-3 w-3`,
                                                }),
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      })
                    : (0, Z.jsx)(`div`, {
                        className: `py-4 text-center text-sm text-muted-foreground`,
                        children: `No collaborators yet`,
                      }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
