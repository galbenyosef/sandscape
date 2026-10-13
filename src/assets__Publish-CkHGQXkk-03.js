// assets__Publish-CkHGQXkk 03 — children
// Lines 494-843 of readable/assets__Publish-CkHGQXkk.pretty.js (statement-aligned).
function Ze({
  board: e,
  metricKeys: t,
  dimensionKeys: n,
  manifest: r,
  busy: i,
  onPatch: a,
  onReset: o,
  onDelete: s,
}) {
  let { t: c } = T(),
    [l, u] = (0, I.useState)(e.title);
  return (
    (0, I.useEffect)(() => u(e.title), [e.title]),
    (0, L.jsxs)(`div`, {
      className: `space-y-3 rounded-lg border border-border bg-secondary/20 p-3`,
      children: [
        (0, L.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2`,
          children: [
            (0, L.jsx)(E, {
              value: l,
              disabled: i,
              onChange: (e) => u(e.target.value),
              onBlur: () => l !== e.title && l.trim() && a({ title: l }),
              className: `h-8 max-w-[16rem] flex-1`,
              "aria-label": c(`publish.leaderboardBoardTitle`, `Board title`),
            }),
            (0, L.jsx)(Re, {
              variant: e.origin === `manifest` ? `secondary` : `outline`,
              children:
                e.origin === `manifest`
                  ? c(`publish.leaderboardOriginManifest`, `From the game`)
                  : c(`publish.leaderboardOriginCreator`, `Yours`),
            }),
            (0, L.jsx)(y, {
              checked: e.enabled,
              disabled: i,
              onCheckedChange: (e) => a({ enabled: e }),
              "aria-label": c(
                `publish.leaderboardBoardEnabled`,
                `Show this board`,
              ),
            }),
          ],
        }),
        (0, L.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-2 sm:grid-cols-4`,
          children: [
            (0, L.jsx)(Y, {
              label: c(`publish.leaderboardGroupBy`, `Rank`),
              children: (0, L.jsxs)(g, {
                value: e.group_by,
                disabled: i,
                onValueChange: (e) => a({ group_by: e }),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsxs)(_, {
                    children: [
                      (0, L.jsx)(m, {
                        value: q,
                        children: c(`publish.leaderboardByPlayer`, `Players`),
                      }),
                      n.map((e) =>
                        (0, L.jsx)(
                          m,
                          { value: e, children: r.dimensions[e]?.label ?? e },
                          e,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
            (0, L.jsx)(Y, {
              label: c(`publish.leaderboardAggregate`, `By`),
              children: (0, L.jsxs)(g, {
                value: e.aggregate,
                disabled: i,
                onValueChange: (n) =>
                  a(
                    n === `count`
                      ? { aggregate: n, clear_metric: !0 }
                      : { aggregate: n, ...(e.metric ? {} : { metric: t[0] }) },
                  ),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsx)(_, {
                    children: qe
                      .filter((e) => e === `count` || t.length > 0)
                      .map((e) =>
                        (0, L.jsx)(
                          m,
                          {
                            value: e,
                            children: c(`publish.leaderboardAggregate_${e}`, e),
                          },
                          e,
                        ),
                      ),
                  }),
                ],
              }),
            }),
            e.aggregate !== `count` &&
              (0, L.jsx)(Y, {
                label: c(`publish.leaderboardMetric`, `Metric`),
                children: (0, L.jsxs)(g, {
                  value: e.metric ?? void 0,
                  disabled: i || t.length === 0,
                  onValueChange: (e) => a({ metric: e }),
                  children: [
                    (0, L.jsx)(v, {
                      className: `h-8 text-xs`,
                      children: (0, L.jsx)(h, {}),
                    }),
                    (0, L.jsx)(_, {
                      children: t.map((e) =>
                        (0, L.jsx)(
                          m,
                          { value: e, children: r.metrics[e]?.label ?? e },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            (0, L.jsx)(Y, {
              label: c(`publish.leaderboardPeriod`, `Window`),
              children: (0, L.jsxs)(g, {
                value: e.period,
                disabled: i,
                onValueChange: (e) => a({ period: e }),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsx)(_, {
                    children: Je.map((e) =>
                      (0, L.jsx)(
                        m,
                        { value: e, children: c(`leaderboard.period.${e}`, e) },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        e.origin === `manifest` &&
          (0, L.jsx)(`p`, {
            className: `text-[11px] text-muted-foreground`,
            children: c(
              `publish.leaderboardManifestOwned`,
              `This board comes from the game. Changing anything here — including hiding it — makes it yours, and future builds will stop updating it.`,
            ),
          }),
        (0, L.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, L.jsxs)(p, {
              type: `button`,
              variant: `ghost`,
              size: `sm`,
              disabled: i,
              onClick: o,
              children: [
                (0, L.jsx)(C, { className: `mr-1 h-3.5 w-3.5` }),
                c(`publish.leaderboardResetAction`, `Reset`),
              ],
            }),
            e.origin === `creator` &&
              (0, L.jsxs)(p, {
                type: `button`,
                variant: `ghost`,
                size: `sm`,
                disabled: i,
                onClick: s,
                className: `text-destructive hover:text-destructive`,
                children: [
                  (0, L.jsx)(O, { className: `mr-1 h-3.5 w-3.5` }),
                  c(`publish.leaderboardDeleteAction`, `Delete`),
                ],
              }),
          ],
        }),
      ],
    })
  );
}
function Qe({
  metricKeys: e,
  dimensionKeys: t,
  manifest: n,
  busy: r,
  onCancel: i,
  onCreate: a,
}) {
  let { t: o } = T(),
    [s, c] = (0, I.useState)({
      title: ``,
      group_by: e.length > 0 ? q : (t[0] ?? q),
      metric: e[0] ?? null,
      aggregate: e.length > 0 ? `max` : `count`,
    }),
    l =
      s.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, `-`)
        .replace(/^-+|-+$/g, ``)
        .slice(0, 48) || `board-${Date.now().toString(36)}`,
    u = s.title.trim().length > 0 && (s.aggregate === `count` || !!s.metric);
  return (0, L.jsxs)(`div`, {
    className: `space-y-3 rounded-lg border border-dashed border-border p-3`,
    children: [
      (0, L.jsx)(E, {
        autoFocus: !0,
        value: s.title,
        disabled: r,
        placeholder: o(`publish.leaderboardBoardTitle`, `Board title`),
        onChange: (e) => c({ ...s, title: e.target.value }),
        className: `h-8`,
      }),
      (0, L.jsxs)(`div`, {
        className: `grid grid-cols-2 gap-2 sm:grid-cols-3`,
        children: [
          (0, L.jsx)(Y, {
            label: o(`publish.leaderboardGroupBy`, `Rank`),
            children: (0, L.jsxs)(g, {
              value: s.group_by,
              onValueChange: (e) => c({ ...s, group_by: e }),
              children: [
                (0, L.jsx)(v, {
                  className: `h-8 text-xs`,
                  children: (0, L.jsx)(h, {}),
                }),
                (0, L.jsxs)(_, {
                  children: [
                    (0, L.jsx)(m, {
                      value: q,
                      children: o(`publish.leaderboardByPlayer`, `Players`),
                    }),
                    t.map((e) =>
                      (0, L.jsx)(
                        m,
                        { value: e, children: n.dimensions[e]?.label ?? e },
                        e,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          }),
          (0, L.jsx)(Y, {
            label: o(`publish.leaderboardAggregate`, `By`),
            children: (0, L.jsxs)(g, {
              value: s.aggregate,
              onValueChange: (t) =>
                c({
                  ...s,
                  aggregate: t,
                  metric: t === `count` ? null : (s.metric ?? e[0] ?? null),
                }),
              children: [
                (0, L.jsx)(v, {
                  className: `h-8 text-xs`,
                  children: (0, L.jsx)(h, {}),
                }),
                (0, L.jsx)(_, {
                  children: qe.map((e) =>
                    (0, L.jsx)(
                      m,
                      {
                        value: e,
                        children: o(`publish.leaderboardAggregate_${e}`, e),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          }),
          s.aggregate !== `count` &&
            (0, L.jsx)(Y, {
              label: o(`publish.leaderboardMetric`, `Metric`),
              children: (0, L.jsxs)(g, {
                value: s.metric ?? void 0,
                onValueChange: (e) => c({ ...s, metric: e }),
                children: [
                  (0, L.jsx)(v, {
                    className: `h-8 text-xs`,
                    children: (0, L.jsx)(h, {}),
                  }),
                  (0, L.jsx)(_, {
                    children: e.map((e) =>
                      (0, L.jsx)(
                        m,
                        { value: e, children: n.metrics[e]?.label ?? e },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
        ],
      }),
      (0, L.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, L.jsx)(p, {
            type: `button`,
            size: `sm`,
            disabled: r || !u,
            onClick: () =>
              a({
                slug: l,
                title: s.title.trim(),
                group_by: s.group_by,
                metric: s.aggregate === `count` ? null : s.metric,
                aggregate: s.aggregate,
              }),
            children: o(`publish.leaderboardCreate`, `Create`),
          }),
          (0, L.jsx)(p, {
            type: `button`,
            variant: `ghost`,
            size: `sm`,
            disabled: r,
            onClick: i,
            children: o(`publish.leaderboardCancel`, `Cancel`),
          }),
        ],
      }),
    ],
  });
}
