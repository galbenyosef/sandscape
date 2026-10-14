// Game-QkGXRHTR 02 — classname
// Lines 296-598 of readable/assets/Game-QkGXRHTR.pretty.js (statement-aligned).
function ct({ gameId: e, currentUserId: t, className: n }) {
  let { t: r, i18n: i } = k(),
    [a, o] = (0, z.useState)(null),
    [s, c] = (0, z.useState)(null),
    [u, d] = (0, z.useState)(!1),
    [f, m] = (0, z.useState)(!0),
    [h, g] = (0, z.useState)(null),
    [_, v] = (0, z.useState)(null),
    y = (0, z.useRef)(0),
    b = (0, z.useCallback)(async () => {
      if (!e) return;
      let t = ++y.current;
      (m(!0), g(null));
      try {
        let n = await T(e, {
          ...(a ? { period: a } : {}),
          limit: ot,
          aroundMe: !0,
        });
        if (t !== y.current) return;
        (d(n.enabled), c(n.boards));
      } catch (e) {
        if (t !== y.current) return;
        g(e instanceof Error ? e.message : String(e));
      } finally {
        t === y.current && m(!1);
      }
    }, [e, a]);
  if (
    ((0, z.useEffect)(
      () => (
        b(),
        () => {
          y.current++;
        }
      ),
      [b],
    ),
    !e)
  )
    return null;
  if (f && s === null)
    return (0, H.jsx)(Ie, {
      className: n,
      children: (0, H.jsxs)(Fe, {
        className: `space-y-3 p-4`,
        children: [
          (0, H.jsx)(L, { className: `h-5 w-40` }),
          (0, H.jsx)(L, { className: `h-4 w-full` }),
          (0, H.jsx)(L, { className: `h-4 w-full` }),
        ],
      }),
    });
  let x = s && s.some((e) => e.slug === _) ? _ : s?.[0]?.slug;
  return !u || !s || s.length === 0
    ? null
    : (0, H.jsx)(Ie, {
        className: n,
        children: (0, H.jsxs)(Fe, {
          className: `p-4 sm:p-6`,
          children: [
            (0, H.jsxs)(`div`, {
              className: `mb-4 flex flex-wrap items-center justify-between gap-3`,
              children: [
                (0, H.jsxs)(`h2`, {
                  className: `flex items-center gap-2 text-lg font-semibold text-foreground`,
                  children: [
                    (0, H.jsx)(w, {
                      className: `h-5 w-5 text-primary`,
                      "aria-hidden": !0,
                    }),
                    r(`leaderboard.title`, `Leaderboard`),
                  ],
                }),
                (0, H.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, H.jsxs)(rt, {
                      type: `single`,
                      value: a ?? st,
                      onValueChange: (e) => o(!e || e === st ? null : e),
                      "aria-label": r(`leaderboard.periodLabel`, `Time range`),
                      children: [
                        (0, H.jsx)(it, {
                          value: st,
                          size: `sm`,
                          className: `text-xs`,
                          children: r(`leaderboard.period.default`, `Default`),
                        }),
                        at.map((e) =>
                          (0, H.jsx)(
                            it,
                            {
                              value: e,
                              size: `sm`,
                              className: `text-xs`,
                              children: r(`leaderboard.period.${e}`, e),
                            },
                            e,
                          ),
                        ),
                      ],
                    }),
                    (0, H.jsx)(p, {
                      variant: `ghost`,
                      size: `icon`,
                      onClick: b,
                      disabled: f,
                      "aria-label": r(`leaderboard.refresh`, `Refresh`),
                      children: (0, H.jsx)(C, {
                        className: l(`h-4 w-4`, f && `animate-spin`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            h
              ? (0, H.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: r(
                    `leaderboard.error`,
                    `Could not load the leaderboard right now.`,
                  ),
                })
              : s.length === 1
                ? (0, H.jsx)(lt, {
                    board: s[0],
                    currentUserId: t,
                    locale: i.language,
                  })
                : (0, H.jsxs)(Be, {
                    value: x,
                    onValueChange: v,
                    className: `w-full`,
                    children: [
                      (0, H.jsx)(ze, {
                        className: `mb-3 flex h-auto flex-wrap justify-start gap-1`,
                        children: s.map((e) =>
                          (0, H.jsx)(
                            Re,
                            {
                              value: e.slug,
                              className: `text-xs`,
                              children: e.title,
                            },
                            e.slug,
                          ),
                        ),
                      }),
                      s.map((e) =>
                        (0, H.jsx)(
                          R,
                          {
                            value: e.slug,
                            className: `mt-0`,
                            children: (0, H.jsx)(lt, {
                              board: e,
                              currentUserId: t,
                              locale: i.language,
                            }),
                          },
                          e.slug,
                        ),
                      ),
                    ],
                  }),
          ],
        }),
      });
}
function lt({ board: e, currentUserId: t, locale: n }) {
  let { t: r } = k();
  if (e.rows.length === 0)
    return (0, H.jsx)(`p`, {
      className: `py-6 text-center text-sm text-muted-foreground`,
      children: r(
        `leaderboard.empty`,
        `No results yet — be the first to play.`,
      ),
    });
  let i = e.me && !e.rows.some((e) => e.is_me);
  return (0, H.jsxs)(`div`, {
    className: `overflow-x-auto`,
    children: [
      (0, H.jsxs)(`table`, {
        className: `w-full text-sm`,
        children: [
          (0, H.jsx)(`thead`, {
            children: (0, H.jsxs)(`tr`, {
              className: `border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground`,
              children: [
                (0, H.jsx)(`th`, {
                  className: `w-12 py-2 pr-2 font-medium`,
                  children: r(`leaderboard.rank`, `#`),
                }),
                (0, H.jsx)(`th`, {
                  className: `py-2 pr-2 font-medium`,
                  children: e.group_label,
                }),
                (0, H.jsx)(`th`, {
                  className: `w-24 py-2 pl-2 text-right font-medium`,
                  children: e.metric_label ?? r(`leaderboard.entries`, `Plays`),
                }),
              ],
            }),
          }),
          (0, H.jsx)(`tbody`, {
            children: e.rows.map((r) =>
              (0, H.jsx)(
                ut,
                {
                  row: r,
                  board: e,
                  locale: n,
                  highlighted: !!r.is_me || (!!t && r.key === t),
                },
                r.key,
              ),
            ),
          }),
        ],
      }),
      i &&
        e.me &&
        (0, H.jsxs)(`p`, {
          className: `mt-3 border-t border-border pt-3 text-xs text-muted-foreground`,
          children: [
            r(`leaderboard.yourRank`, `Your rank`),
            `:`,
            ` `,
            (0, H.jsx)(`span`, {
              className: `font-medium text-foreground`,
              children: V(e.me.rank),
            }),
            ` · `,
            B(e.me.value, e.format, n),
          ],
        }),
    ],
  });
}
function ut({ row: e, board: t, locale: n, highlighted: r }) {
  let { t: i } = k(),
    a = t.group_by === `player`,
    o = a
      ? (e.player?.username ?? i(`leaderboard.unknownPlayer`, `Player`))
      : (e.label ?? e.key);
  return (0, H.jsxs)(`tr`, {
    className: l(
      `border-b border-border/50 last:border-0`,
      r && `bg-primary/5`,
    ),
    children: [
      (0, H.jsx)(`td`, {
        className: `py-2 pr-2 font-mono text-xs text-muted-foreground`,
        children: V(e.rank),
      }),
      (0, H.jsx)(`td`, {
        className: `py-2 pr-2`,
        children: (0, H.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            a
              ? (0, H.jsxs)(M, {
                  className: `h-6 w-6`,
                  children: [
                    (0, H.jsx)(j, { src: A(e.player?.avatar_url) }),
                    (0, H.jsx)(ie, { children: (o[0] ?? `?`).toUpperCase() }),
                  ],
                })
              : e.icon_url
                ? (0, H.jsx)(`img`, {
                    src: e.icon_url,
                    alt: ``,
                    className: `h-6 w-6 rounded object-cover`,
                  })
                : e.emoji
                  ? (0, H.jsx)(`span`, {
                      className: `text-base leading-none`,
                      "aria-hidden": !0,
                      children: e.emoji,
                    })
                  : null,
            (0, H.jsx)(`span`, {
              className: `truncate text-foreground`,
              children: o,
            }),
            r &&
              (0, H.jsx)(`span`, {
                className: `rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium uppercase text-primary`,
                children: i(`leaderboard.you`, `You`),
              }),
          ],
        }),
      }),
      (0, H.jsx)(`td`, {
        className: `py-2 pl-2 text-right font-medium tabular-nums text-foreground`,
        children: B(e.value, t.format, n),
      }),
    ],
  });
}
