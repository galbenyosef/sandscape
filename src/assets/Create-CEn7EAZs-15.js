// Create-CEn7EAZs 15 — classname
// Lines 4545-4873 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Hc({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  sessionDir: r,
  codingFeed: i,
  codingResult: a,
  nodeProgress: o,
  onLocalCodingActivity: s,
}) {
  let [c, l] = (0, X.useState)(``),
    u = r ? r.split(`/`).pop() || r : ``,
    d = e.state === `in-progress`,
    f = Tn(e.id) || (i?.events.length ?? 0) > 0,
    p = Ua(e.id),
    m = !!p?.locked,
    h = Za({
      actionId: p?.mode === `coding` ? p.id : null,
      sessionId: u || null,
      completedRun: a,
    }),
    g = h.payload ? { codingModels: h.payload } : void 0;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full`,
    children: [
      (0, Z.jsxs)(Lr, {
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
                  value: c,
                  onChange: (e) => l(e.target.value),
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
                  disabled: t || m,
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
                          (0, Z.jsx)(Zr, {
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
          m &&
            (e.state === `available` || e.state === `complete`) &&
            (0, Z.jsx)(Vc, { compact: !0 }),
          (e.state === `available` || e.state === `complete`) &&
            n &&
            (0, Z.jsx)(Sc, { choice: h, disabled: m }),
          e.state === `available` &&
            n &&
            (0, Z.jsxs)(S, {
              onClick: () => {
                let t = c.trim() || `Work on ${e.name}: ${e.description}`;
                (n?.(e.id, t, g), l(``));
              },
              disabled: t || m || h.blocked,
              className: `w-full`,
              children: [
                (0, Z.jsx)(cn, { className: `h-4 w-4 mr-2` }),
                `Execute`,
              ],
            }),
          e.state === `complete` &&
            n &&
            (0, Z.jsxs)(S, {
              onClick: () => {
                let t = c.trim() || `Regenerate ${e.name}`;
                (n?.(e.id, t, g), l(``));
              },
              disabled: t || m || h.blocked,
              variant: `outline`,
              className: `w-full`,
              children: [
                (0, Z.jsx)(un, { className: `h-4 w-4 mr-2` }),
                `Regenerate`,
              ],
            }),
          d &&
            f &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Z.jsx)(vc, {
                  sessionId: u,
                  isRunning: d,
                  onLocalActivity: s,
                }),
                (0, Z.jsx)(Nc, { feed: i, progress: o, running: d }),
              ],
            }),
          d &&
            !f &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(hs, { className: `h-4 w-4 animate-spin` }),
                `In progress...`,
              ],
            }),
          e.state === `locked` &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-3 bg-secondary/30 rounded-lg`,
              children: [
                (0, Z.jsx)(tn, {
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
                (0, Z.jsx)(pn, { className: `h-4 w-4 text-orange-400` }),
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
var Uc = (e) => !!e && typeof e == `object` && !Array.isArray(e),
  Wc = (e) => typeof e == `string`,
  Gc = (e) => typeof e == `number` && Number.isFinite(e),
  Kc = (e) => e == null || Wc(e),
  qc = (e, t) => Uc(e) && Object.values(e).every(t),
  Jc = (e, t) => e === void 0 || (Array.isArray(e) && e.every(t)),
  Yc = (e) => Uc(e) && Wc(e.path);
function Xc(e) {
  if (!Uc(e)) return !1;
  let t = e.selection;
  return (
    Wc(e.id) &&
    Wc(e.created_at) &&
    Wc(e.status) &&
    Kc(e.error) &&
    Jc(e.images, Yc) &&
    (t == null ||
      (Uc(t) && Array.isArray(t.references) && t.references.every(Yc))) &&
    (e.budget_snapshot == null || Uc(e.budget_snapshot))
  );
}
function Zc(e) {
  let t = e.freshness;
  return (
    qc(e.revisions, Xc) &&
    Kc(e.selected_revision_id) &&
    (t === void 0 || (Uc(t) && Wc(t.status) && Kc(t.reason)))
  );
}
var Qc = (e) => e.split(`/`).pop() || e,
  $c = (e) => e.replace(/[_-]+/g, ` `);
function el({ sessionId: e, path: t, alt: n }) {
  let r = `${e}:${t}`,
    [i, a] = (0, X.useState)(null),
    [o, s] = (0, X.useState)(null);
  return (
    (0, X.useEffect)(() => {
      let n = !0,
        i,
        o = new AbortController();
      return (
        s(null),
        (async () => {
          try {
            let c = await vr.fetchVisualReference(e, t, o.signal);
            if (!n) return;
            if (!c) {
              s(`Reference image not available here`);
              return;
            }
            ((i = URL.createObjectURL(c)), a({ key: r, url: i }));
          } catch (e) {
            n &&
              s(e instanceof Error ? e.message : `Reference image unavailable`);
          }
        })(),
        () => {
          ((n = !1), o.abort(), i && URL.revokeObjectURL(i));
        }
      );
    }, [r, e, t]),
    i?.key === r
      ? (0, Z.jsx)(`a`, {
          href: i.url,
          target: `_blank`,
          rel: `noreferrer`,
          children: (0, Z.jsx)(`img`, {
            src: i.url,
            alt: n,
            className: `w-full rounded-md object-contain bg-black/20`,
          }),
        })
      : (0, Z.jsx)(`div`, {
          className: `rounded-md bg-secondary/30 p-4 text-[11px] text-muted-foreground`,
          role: `status`,
          children: o || `Loading reference…`,
        })
  );
}
function tl({ value: e }) {
  return e == null || e === ``
    ? null
    : Wc(e) || Gc(e) || typeof e == `boolean`
      ? (0, Z.jsx)(`p`, {
          className: `mt-1 whitespace-pre-line`,
          children: String(e),
        })
      : Array.isArray(e)
        ? (0, Z.jsx)(`ul`, {
            className: `mt-1 list-disc space-y-1 pl-4`,
            children: e.map((e, t) =>
              (0, Z.jsx)(`li`, { children: (0, Z.jsx)(tl, { value: e }) }, t),
            ),
          })
        : Uc(e)
          ? (0, Z.jsx)(`dl`, {
              className: `mt-1 space-y-2`,
              children: Object.entries(e).map(([e, t]) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, Z.jsx)(`dt`, {
                        className: `font-medium capitalize text-foreground`,
                        children: $c(e),
                      }),
                      (0, Z.jsx)(`dd`, {
                        children: (0, Z.jsx)(tl, { value: t }),
                      }),
                    ],
                  },
                  e,
                ),
              ),
            })
          : null;
}
