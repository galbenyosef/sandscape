// Create-ea24k1TY 53 — classname
// Lines 16687-17033 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function ap({
  result: e,
  onResume: t,
  resuming: n,
  disabled: r,
  onStartOver: i,
}) {
  let {
      success: a,
      featuresBuilt: o,
      featuresDeferred: s,
      assetsIntegrated: c,
      assetsMissing: l,
      assetsUnreachable: u,
      qaStatus: d,
      qaOk: f,
      qaErrors: p,
      resumable: m,
      reason: h,
      assetSpend: g,
    } = e,
    _ = m && !!t,
    v = Sc(e);
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border bg-card/60 p-3 space-y-3`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          a
            ? (0, Z.jsx)(Be, { className: `h-4 w-4 text-green-400 shrink-0` })
            : (0, Z.jsx)(oi, { className: `h-4 w-4 text-red-400 shrink-0` }),
          (0, Z.jsx)(`span`, {
            className: `text-sm font-semibold ${a ? `text-green-400` : `text-red-400`}`,
            children: a ? `Build succeeded` : `Build did not finish`,
          }),
          d &&
            (0, Z.jsxs)(`span`, {
              className: `ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${f === !1 ? `bg-red-500/15 text-red-300` : f ? `bg-green-500/15 text-green-300` : `bg-secondary text-muted-foreground`}`,
              children: [(0, Z.jsx)(Ste, { className: `h-3 w-3` }), `QA: `, d],
            }),
        ],
      }),
      h &&
        (0, Z.jsx)(`p`, {
          className: `text-[11px] leading-relaxed text-muted-foreground`,
          children: h,
        }),
      p.length > 0 &&
        (0, Z.jsx)(`ul`, {
          className: `space-y-0.5`,
          children: p.map((e, t) =>
            (0, Z.jsxs)(
              `li`,
              {
                className: `flex gap-1.5 text-[11px] leading-relaxed text-red-300/80`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-red-400/60 shrink-0`,
                    children: `•`,
                  }),
                  (0, Z.jsx)(`span`, { className: `break-words`, children: e }),
                ],
              },
              t,
            ),
          ),
        }),
      (o.length > 0 || s.length > 0) &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block`,
              children: `Features`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex flex-wrap gap-1`,
              children: [
                o.map((e, t) =>
                  (0, Z.jsx)(
                    `span`,
                    {
                      className: `px-2 py-0.5 text-[10px] bg-green-500/10 text-green-300 rounded`,
                      children: e,
                    },
                    `b-${t}`,
                  ),
                ),
                s.map((e, t) =>
                  (0, Z.jsx)(
                    `span`,
                    {
                      className: `px-2 py-0.5 text-[10px] bg-secondary/60 text-muted-foreground/70 rounded line-through decoration-muted-foreground/30`,
                      title: e.reason ?? `Deferred`,
                      children: e.name,
                    },
                    `d-${t}`,
                  ),
                ),
              ],
            }),
          ],
        }),
      (c.length > 0 || l.length > 0 || u.length > 0) &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block`,
              children: `Asset coverage`,
            }),
            c.length > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-start gap-1.5`,
                children: [
                  (0, Z.jsx)(L, {
                    className: `h-3.5 w-3.5 text-green-400/80 mt-0.5 shrink-0`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `text-green-300/90`,
                        children: [c.length, ` integrated`],
                      }),
                      ` - `,
                      c.join(`, `),
                    ],
                  }),
                ],
              }),
            l.length > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-start gap-1.5`,
                children: [
                  (0, Z.jsx)(Mo, {
                    className: `h-3.5 w-3.5 text-amber-400/80 mt-0.5 shrink-0`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `text-amber-300/90`,
                        children: [l.length, ` not wired in`],
                      }),
                      ` - `,
                      l.join(`, `),
                    ],
                  }),
                ],
              }),
            u.length > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-start gap-1.5`,
                children: [
                  (0, Z.jsx)(_te, {
                    className: `h-3.5 w-3.5 text-red-400/80 mt-0.5 shrink-0`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `text-red-300/90`,
                        children: [
                          u.length,
                          ` on disk outside the game folder`,
                        ],
                      }),
                      ` - `,
                      u.join(`, `),
                    ],
                  }),
                ],
              }),
          ],
        }),
      g &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block`,
              children: `Assets`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-start gap-1.5`,
              children: [
                (0, Z.jsx)(Yr, {
                  className: `h-3.5 w-3.5 text-primary/80 mt-0.5 shrink-0`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `text-[11px] text-muted-foreground`,
                  children: [
                    `Created `,
                    g.created.length,
                    ` `,
                    g.created.length === 1 ? `asset` : `assets`,
                    `, spent`,
                    ` `,
                    (0, Z.jsx)(`span`, {
                      className: `text-foreground/85`,
                      children: g.spent,
                    }),
                    ` of `,
                    g.budget,
                    ` coins`,
                  ],
                }),
              ],
            }),
            g.created.length > 0 &&
              (0, Z.jsx)(`ul`, {
                className: `space-y-0.5 pl-5`,
                children: g.created.map((e, t) =>
                  (0, Z.jsxs)(
                    `li`,
                    {
                      className: `flex gap-1.5 text-[11px] leading-relaxed text-muted-foreground/80`,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: `text-primary/50 shrink-0`,
                          children: `•`,
                        }),
                        (0, Z.jsxs)(`span`, {
                          className: `min-w-0 break-words`,
                          children: [
                            (0, Z.jsx)(`span`, {
                              className: `text-foreground/80`,
                              children: e.assetName,
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `ml-1.5 text-muted-foreground/50`,
                              children: e.path,
                            }),
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
      (_ || i) &&
        (0, Z.jsxs)(`div`, {
          className: `pt-1 space-y-1.5`,
          children: [
            _ &&
              (0, Z.jsxs)(`button`, {
                type: `button`,
                onClick: t,
                disabled: n || r,
                className: `w-full flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity`,
                children: [
                  (0, Z.jsx)(Sn, { className: `h-3.5 w-3.5` }),
                  `Resume build`,
                ],
              }),
            i &&
              (0, Z.jsxs)(`button`, {
                type: `button`,
                onClick: i,
                className: `w-full flex items-center justify-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-secondary/60 transition-colors`,
                children: [
                  (0, Z.jsx)(xn, { className: `h-3.5 w-3.5` }),
                  `Start over`,
                ],
              }),
            _ &&
              (0, Z.jsx)(`p`, {
                className: `text-[10px] leading-relaxed text-muted-foreground/60`,
                children:
                  v === null
                    ? `Resume continues on the same files and fixes what failed. It costs the same as running this step again and runs without an asset budget.`
                    : `Resume continues on the same files and fixes what failed. It costs the same as running this step again and keeps the ${v.toLocaleString()}-coin asset budget.`,
              }),
          ],
        }),
    ],
  });
}
function op({ tabId: e, label: t, assetId: n, onOpenEditorTab: r }) {
  return r
    ? (0, Z.jsxs)(x, {
        variant: `outline`,
        size: `sm`,
        onClick: () => r(e, n ? { assetId: n } : void 0),
        className: `w-full flex items-center justify-center gap-2 text-xs border-primary/30 hover:bg-primary/10 hover:text-white`,
        children: [(0, Z.jsx)(Zt, { className: `h-3 w-3` }), t],
      })
    : null;
}
function sp(e) {
  if (e.isRunning)
    return {
      phase: `running`,
      showFailedCard: !1,
      showRunLogDisclosure: !1,
      showSettledCard: !1,
      showInlineFeed: !0,
      showBuildForm: !1,
    };
  let t = e.hasResult && !e.resultSuccess;
  return t && !e.startOver
    ? {
        phase: `failed`,
        showFailedCard: !0,
        showRunLogDisclosure: e.hasFeed,
        showSettledCard: !1,
        showInlineFeed: !1,
        showBuildForm: !1,
      }
    : {
        phase: `settled`,
        showFailedCard: !1,
        showRunLogDisclosure: !1,
        showSettledCard: e.hasResult && e.resultSuccess,
        showInlineFeed: e.hasFeed && !t,
        showBuildForm: !0,
      };
}
var cp = 1e5;
function lp(e) {
  return e ? `asset_budget_coins` in (e.params_schema?.properties ?? {}) : !1;
}
function up(e) {
  if (!/^\s*\d+\s*$/.test(e)) return null;
  let t = Number.parseInt(e, 10);
  return !Number.isInteger(t) || t < 1 ? null : Math.min(t, cp);
}
function dp(e, t, n) {
  if (!e || !t) return {};
  let r = up(n);
  return r === null ? {} : { asset_budget_coins: r };
}
function fp() {
  return { resume: !0 };
}
var pp = `build_first_playable`;
function mp(e) {
  return `sandscape.assetBudget.${e}`;
}
function hp(e) {
  return `sandscape.buildPrompt.${e}`;
}
