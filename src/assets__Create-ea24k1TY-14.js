// assets__Create-ea24k1TY 14 — classname
// Lines 4274-4583 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Hte({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  sessionDir: r,
  codingFeed: i,
  nodeProgress: a,
  onLocalCodingActivity: o,
}) {
  let [s, c] = (0, X.useState)(``),
    l = r ? r.split(`/`).pop() || r : ``,
    u = e.state === `in-progress`,
    d = zn(e.id) || (i?.events.length ?? 0) > 0,
    f = !!un(e.id)?.locked;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full`,
    children: [
      (0, Z.jsxs)($r, {
        className: `flex-1 p-4`,
        children: [
          (0, Z.jsx)(`p`, {
            className: `text-sm text-muted-foreground mb-4`,
            children: e.description,
          }),
          (e.state === `available` || e.state === `complete`) &&
            (0, Z.jsxs)(`div`, {
              className: `mb-4`,
              children: [
                (0, Z.jsx)(`textarea`, {
                  value: s,
                  onChange: (e) => c(e.target.value),
                  className: `w-full h-20 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40`,
                  placeholder: (() => {
                    switch (e.domain) {
                      case `game-design`:
                        return `Describe what you want for ${e.name}...`;
                      case `visuals`:
                        return `Describe the visual style or assets...`;
                      case `audio`:
                        return `Describe the audio/music...`;
                      case `levels`:
                        return `Describe the level design...`;
                      case `development`:
                        return `Describe what to build or fix...`;
                      default:
                        return `Describe what you want...`;
                    }
                  })(),
                  disabled: t || f,
                }),
                (0, Z.jsx)(`p`, {
                  className: `text-[10px] text-muted-foreground/50 mt-1.5`,
                  children: `Optional — leave blank for defaults`,
                }),
              ],
            }),
          e.prerequisites.length > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `mb-4`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
                  children: `Prerequisites`,
                }),
                (0, Z.jsx)(`div`, {
                  className: `space-y-1.5`,
                  children: e.prerequisites.map((e) =>
                    (0, Z.jsxs)(
                      `div`,
                      {
                        className: `flex items-center gap-2 text-xs text-muted-foreground bg-card rounded px-3 py-2`,
                        children: [
                          (0, Z.jsx)(fi, {
                            className: `h-3 w-3 text-green-400`,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          e.outputs &&
            e.outputs.length > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `mb-4`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
                  children: `Outputs`,
                }),
                (0, Z.jsx)(`div`, {
                  className: `space-y-1.5`,
                  children: e.outputs.map((e, t) =>
                    (0, Z.jsxs)(
                      `div`,
                      {
                        className: `flex items-center gap-2 text-xs text-muted-foreground bg-card rounded px-3 py-2`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `w-1.5 h-1.5 rounded-full bg-primary`,
                          }),
                          e,
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `p-4 border-t border-border space-y-2`,
        children: [
          f &&
            (e.state === `available` || e.state === `complete`) &&
            (0, Z.jsx)(rl, { compact: !0 }),
          e.state === `available` &&
            n &&
            (0, Z.jsxs)(x, {
              onClick: () => {
                let t = s.trim() || `Work on ${e.name}: ${e.description}`;
                (n?.(e.id, t), c(``));
              },
              disabled: t || f,
              className: `w-full`,
              children: [
                (0, Z.jsx)(bn, { className: `h-4 w-4 mr-2` }),
                `Execute`,
              ],
            }),
          e.state === `complete` &&
            n &&
            (0, Z.jsxs)(x, {
              onClick: () => {
                let t = s.trim() || `Regenerate ${e.name}`;
                (n?.(e.id, t), c(``));
              },
              disabled: t || f,
              variant: `outline`,
              className: `w-full`,
              children: [
                (0, Z.jsx)(Sn, { className: `h-4 w-4 mr-2` }),
                `Regenerate`,
              ],
            }),
          u &&
            d &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Z.jsx)(Ic, {
                  sessionId: l,
                  isRunning: u,
                  onLocalActivity: o,
                }),
                (0, Z.jsx)(Zc, { feed: i, progress: a, running: u }),
              ],
            }),
          u &&
            !d &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(Tte, { className: `h-4 w-4 animate-spin` }),
                `In progress...`,
              ],
            }),
          e.state === `locked` &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 bg-secondary/30 rounded-lg`,
              children: [
                (0, Z.jsx)(mn, {
                  className: `h-4 w-4 text-muted-foreground/60`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-sm text-muted-foreground/60`,
                  children: `Complete prerequisites to unlock`,
                }),
              ],
            }),
          e.state === `needs-review` &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg`,
              children: [
                (0, Z.jsx)(Tn, { className: `h-4 w-4 text-orange-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-sm text-orange-400`,
                  children: `Needs review`,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function il({
  assets: e,
  sessionDir: t,
  onAssetClick: n,
  renderOverlay: r,
  columns: i = 3,
  emptyMessage: a = `No assets available`,
  showLabels: o = !0,
  selectedAssetId: s,
}) {
  return e.length === 0
    ? (0, Z.jsx)(`div`, {
        className: `py-8 text-center`,
        children: (0, Z.jsx)(`p`, {
          className: `text-sm text-gray-500`,
          children: a,
        }),
      })
    : (0, Z.jsx)(`div`, {
        className: `grid ${{ 2: `grid-cols-2`, 3: `grid-cols-3`, 4: `grid-cols-4` }[i]} gap-2`,
        children: e.map((e) => {
          let i = e.concept_art_path,
            a = !!i,
            c = s === e.id,
            l = a ? jr.getAssetUrl(t, i, !1) : null;
          return (0, Z.jsxs)(
            `div`,
            {
              className: `
              relative aspect-square rounded-lg border overflow-hidden cursor-pointer
              transition-all duration-200 group
              ${c ? `border-primary ring-2 ring-primary/50` : `border-primary/30 hover:border-primary/60`}
            `,
              onClick: () => n(e),
              title: e.asset_name?.replace(/_/g, ` `),
              children: [
                l
                  ? (0, Z.jsx)(`img`, {
                      src: l,
                      alt: e.asset_name,
                      className: `w-full h-full object-cover`,
                      loading: `lazy`,
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `w-full h-full bg-gray-800/50 flex items-center justify-center`,
                      children: (0, Z.jsx)(`div`, {
                        className: `text-xs text-gray-500 text-center px-2`,
                        children: `No concept art`,
                      }),
                    }),
                o &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5`,
                    children: (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-white truncate w-full`,
                      children: e.asset_name?.replace(/_/g, ` `),
                    }),
                  }),
                r &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0 pointer-events-none`,
                    children: r(e),
                  }),
              ],
            },
            e.id || e.asset_name,
          );
        }),
      });
}
function al({ status: e, className: t = `` }) {
  return (0, Z.jsx)(`div`, {
    className: `absolute top-1 right-1 ${t}`,
    children: (0, Z.jsx)(`div`, {
      className: `w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${{ pending: `bg-gray-600`, generated: `bg-green-500`, complete: `bg-green-500`, error: `bg-red-500`, "in-progress": `bg-primary animate-pulse` }[e]}`,
      children: {
        pending: null,
        generated: `✓`,
        complete: `✓`,
        error: `!`,
        "in-progress": null,
      }[e],
    }),
  });
}
function Ute({ status: e, className: t = `` }) {
  let n = {
    pending: { bg: `bg-gray-600`, icon: null, className: `` },
    "in-progress": {
      bg: `bg-primary`,
      icon: null,
      className: `animate-spin border-2 border-primary border-t-transparent`,
    },
    complete: { bg: `bg-green-500`, icon: `✓`, className: `` },
    error: { bg: `bg-red-500`, icon: `!`, className: `` },
  }[e];
  return (0, Z.jsx)(`div`, {
    className: `absolute top-1 right-1 ${t}`,
    children:
      e === `in-progress`
        ? (0, Z.jsx)(`div`, {
            className: `w-4 h-4 rounded-full ${n.className}`,
          })
        : (0, Z.jsx)(`div`, {
            className: `w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${n.bg}`,
            children: n.icon,
          }),
  });
}
