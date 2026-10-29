// Create-CEn7EAZs 55 — classname
// Lines 17340-17689 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function gp({
  result: e,
  onResume: t,
  resuming: n,
  disabled: r,
  onStartOver: i,
  resumeCost: a,
  resumeQuoteError: o,
}) {
  let {
      success: s,
      featuresBuilt: c,
      featuresDeferred: l,
      assetsIntegrated: u,
      assetsMissing: d,
      assetsUnreachable: f,
      qaStatus: p,
      qaOk: m,
      qaErrors: h,
      resumable: g,
      reason: _,
      assetSpend: v,
    } = e,
    y = g && !!t,
    b = cne(e);
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border bg-card/60 p-3 space-y-3`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          s
            ? (0, Z.jsx)(Ve, { className: `h-4 w-4 text-green-400 shrink-0` })
            : (0, Z.jsx)(Gr, { className: `h-4 w-4 text-red-400 shrink-0` }),
          (0, Z.jsx)(`span`, {
            className: `text-sm font-semibold ${s ? `text-green-400` : `text-red-400`}`,
            children: s ? `Build succeeded` : `Build did not finish`,
          }),
          p &&
            (0, Z.jsxs)(`span`, {
              className: `ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${m === !1 ? `bg-red-500/15 text-red-300` : m ? `bg-green-500/15 text-green-300` : `bg-secondary text-muted-foreground`}`,
              children: [(0, Z.jsx)(fs, { className: `h-3 w-3` }), `QA: `, p],
            }),
        ],
      }),
      _ &&
        (0, Z.jsx)(`p`, {
          className: `text-[11px] leading-relaxed text-muted-foreground`,
          children: _,
        }),
      h.length > 0 &&
        (0, Z.jsx)(`ul`, {
          className: `space-y-0.5`,
          children: h.map((e, t) =>
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
      (c.length > 0 || l.length > 0) &&
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
                c.map((e, t) =>
                  (0, Z.jsx)(
                    `span`,
                    {
                      className: `px-2 py-0.5 text-[10px] bg-green-500/10 text-green-300 rounded`,
                      children: e,
                    },
                    `b-${t}`,
                  ),
                ),
                l.map((e, t) =>
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
      (u.length > 0 || d.length > 0 || f.length > 0) &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block`,
              children: `Asset coverage`,
            }),
            u.length > 0 &&
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
                        children: [u.length, ` integrated`],
                      }),
                      ` - `,
                      u.join(`, `),
                    ],
                  }),
                ],
              }),
            d.length > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-start gap-1.5`,
                children: [
                  (0, Z.jsx)(xs, {
                    className: `h-3.5 w-3.5 text-amber-400/80 mt-0.5 shrink-0`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `text-amber-300/90`,
                        children: [d.length, ` not wired in`],
                      }),
                      ` - `,
                      d.join(`, `),
                    ],
                  }),
                ],
              }),
            f.length > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-start gap-1.5`,
                children: [
                  (0, Z.jsx)(ts, {
                    className: `h-3.5 w-3.5 text-red-400/80 mt-0.5 shrink-0`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `text-red-300/90`,
                        children: [
                          f.length,
                          ` on disk outside the game folder`,
                        ],
                      }),
                      ` - `,
                      f.join(`, `),
                    ],
                  }),
                ],
              }),
          ],
        }),
      v &&
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
                (0, Z.jsx)(Nr, {
                  className: `h-3.5 w-3.5 text-primary/80 mt-0.5 shrink-0`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `text-[11px] text-muted-foreground`,
                  children: [
                    `Created `,
                    v.created.length,
                    ` `,
                    v.created.length === 1 ? `asset` : `assets`,
                    `, spent`,
                    ` `,
                    (0, Z.jsx)(`span`, {
                      className: `text-foreground/85`,
                      children: v.spent,
                    }),
                    ` of `,
                    v.budget,
                    ` coins`,
                  ],
                }),
              ],
            }),
            v.created.length > 0 &&
              (0, Z.jsx)(`ul`, {
                className: `space-y-0.5 pl-5`,
                children: v.created.map((e, t) =>
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
      (y || i) &&
        (0, Z.jsxs)(`div`, {
          className: `pt-1 space-y-1.5`,
          children: [
            y &&
              (0, Z.jsxs)(`button`, {
                type: `button`,
                onClick: t,
                disabled: n || r || a === null,
                className: `w-full flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity`,
                children: [
                  (0, Z.jsx)(un, { className: `h-3.5 w-3.5` }),
                  `Resume build`,
                  typeof a == `number` ? ` · up to ${a} coins` : ``,
                ],
              }),
            i &&
              (0, Z.jsxs)(`button`, {
                type: `button`,
                onClick: i,
                className: `w-full flex items-center justify-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-secondary/60 transition-colors`,
                children: [
                  (0, Z.jsx)(ln, { className: `h-3.5 w-3.5` }),
                  `Start over`,
                ],
              }),
            y &&
              (0, Z.jsx)(`p`, {
                className: `text-[10px] leading-relaxed text-muted-foreground/60`,
                children:
                  b === null
                    ? `Resume continues on the same files and charges this step's base price again, without an asset allowance.`
                    : `Resume continues on the same files and charges this step's base price again, with the same ${b.toLocaleString()}-coin asset ceiling.`,
              }),
            y &&
              o &&
              (0, Z.jsx)(`p`, {
                className: `text-[11px] text-destructive`,
                role: `alert`,
                children: o,
              }),
          ],
        }),
    ],
  });
}
function _p({ tabId: e, label: t, assetId: n, onOpenEditorTab: r }) {
  return r
    ? (0, Z.jsxs)(S, {
        variant: `outline`,
        size: `sm`,
        onClick: () => r(e, n ? { assetId: n } : void 0),
        className: `w-full flex items-center justify-center gap-2 text-xs border-primary/30 hover:bg-primary/10 hover:text-white`,
        children: [(0, Z.jsx)(Xt, { className: `h-3 w-3` }), t],
      })
    : null;
}
function Lne(e) {
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
var Rne = 1e5;
function zne(e) {
  return e ? `asset_budget_coins` in (e.params_schema?.properties ?? {}) : !1;
}
function vp(e) {
  if (!/^\s*\d+\s*$/.test(e)) return null;
  let t = Number.parseInt(e, 10);
  return !Number.isInteger(t) || t < 1 ? null : Math.min(t, Rne);
}
function yp(e, t, n) {
  if (!e || !t) return {};
  let r = vp(n);
  return r === null ? {} : { asset_budget_coins: r };
}
function bp() {
  return { resume: !0 };
}
