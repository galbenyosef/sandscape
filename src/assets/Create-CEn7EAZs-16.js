// Create-CEn7EAZs 16 — classname
// Lines 4874-5218 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function nl({ images: e, sessionId: t }) {
  let [n, r] = (0, X.useState)(!1);
  return (0, Z.jsxs)(`details`, {
    className: `text-xs`,
    open: n,
    onToggle: (e) => r(e.currentTarget.open),
    children: [
      (0, Z.jsx)(`summary`, {
        className: `cursor-pointer text-muted-foreground`,
        children:
          e.length === 1
            ? `Inspect 1 other image made`
            : `Inspect ${e.length} other images made`,
      }),
      n &&
        (0, Z.jsx)(`div`, {
          className: `mt-2 space-y-3`,
          children: e.map((e, n) => {
            let r =
              Wc(e.asset_name) && e.asset_name ? e.asset_name : Qc(e.path);
            return (0, Z.jsxs)(
              `figure`,
              {
                className: `space-y-1`,
                children: [
                  (0, Z.jsx)(el, {
                    sessionId: t,
                    path: e.path,
                    alt: `Visual reference: ${r}`,
                  }),
                  (0, Z.jsxs)(`figcaption`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `font-medium text-foreground`,
                        children: r,
                      }),
                      Wc(e.prompt) &&
                        e.prompt &&
                        (0, Z.jsx)(`p`, {
                          className: `mt-1 line-clamp-3`,
                          children: e.prompt,
                        }),
                    ],
                  }),
                ],
              },
              `${e.path}:${n}`,
            );
          }),
        }),
    ],
  });
}
function rl({ revision: e, sessionId: t, errorShown: n }) {
  let r = e.images ?? [],
    i = e.selection?.references ?? [],
    a = new Set(i.map((e) => e.path)),
    o = r.filter((e) => !a.has(e.path)),
    s = e.selection?.guidance,
    c = e.budget_snapshot,
    l =
      Uc(c) && Gc(c.quoted) && Gc(c.remaining)
        ? { quoted: c.quoted, remaining: c.remaining }
        : null;
  return (0, Z.jsxs)(`div`, {
    className: `space-y-3`,
    children: [
      (0, Z.jsxs)(`p`, {
        className: `text-[11px] text-muted-foreground`,
        children: [
          e.status.replace(`_`, ` `),
          ` · `,
          r.length === 1 ? `1 image made` : `${r.length} images made`,
          i.length > 0 && ` · ${i.length} chosen`,
        ],
      }),
      e.error &&
        !n &&
        (0, Z.jsx)(`p`, {
          className: `text-xs text-destructive`,
          role: `alert`,
          children: e.error,
        }),
      i.map((e, n) => {
        let r = Wc(e.role) && e.role ? e.role : null;
        return (0, Z.jsxs)(
          `figure`,
          {
            className: `space-y-1.5`,
            children: [
              (0, Z.jsx)(el, {
                sessionId: t,
                path: e.path,
                alt: `${r ?? `Chosen`} reference: ${Qc(e.path)}`,
              }),
              (0, Z.jsxs)(`figcaption`, {
                className: `text-[11px] text-muted-foreground`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `font-medium text-foreground`,
                    children: r ?? Qc(e.path),
                  }),
                  Wc(e.notes) &&
                    e.notes &&
                    (0, Z.jsx)(`p`, { className: `mt-1`, children: e.notes }),
                ],
              }),
            ],
          },
          `${e.path}:${n}`,
        );
      }),
      o.length > 0 && (0, Z.jsx)(nl, { images: o, sessionId: t }),
      s != null &&
        s !== `` &&
        (0, Z.jsxs)(`details`, {
          className: `text-xs text-muted-foreground`,
          children: [
            (0, Z.jsx)(`summary`, {
              className: `cursor-pointer`,
              children: `Implementation guidance`,
            }),
            (0, Z.jsx)(`div`, {
              className: `mt-2`,
              children: (0, Z.jsx)(tl, { value: s }),
            }),
          ],
        }),
      (0, Z.jsxs)(`p`, {
        className: `text-[10.5px] text-muted-foreground`,
        children: [
          l &&
            (0, Z.jsxs)(Z.Fragment, {
              children: [
                `Remaining visual allowance: `,
                l.remaining,
                ` of `,
                l.quoted,
                ` coins.`,
                ` `,
              ],
            }),
          `Inspecting references never generates images. Request a different direction in chat.`,
        ],
      }),
    ],
  });
}
var il = `rounded-lg border border-border p-3 space-y-3`;
function al({ direction: e, sessionId: t }) {
  if (e == null) return null;
  if (Uc(e) && Wc(e.projection_error))
    return (0, Z.jsxs)(`section`, {
      className: il,
      "aria-label": `Visual direction references`,
      children: [
        (0, Z.jsx)(`h3`, {
          className: `text-xs font-semibold`,
          children: `Gameplay and UI references`,
        }),
        (0, Z.jsx)(`p`, {
          className: `text-xs text-destructive`,
          role: `alert`,
          children: e.projection_error,
        }),
      ],
    });
  if (!Uc(e) || !Zc(e))
    return (0, Z.jsxs)(`section`, {
      className: il,
      "aria-label": `Visual direction references`,
      children: [
        (0, Z.jsx)(`h3`, {
          className: `text-xs font-semibold`,
          children: `Gameplay and UI references`,
        }),
        (0, Z.jsx)(`p`, {
          className: `text-xs text-destructive`,
          role: `alert`,
          children: `The visual direction record is unreadable, so its references cannot be shown.`,
        }),
      ],
    });
  let n = Object.values(e.revisions).sort((e, t) =>
      e.created_at.localeCompare(t.created_at),
    ),
    r = n[n.length - 1],
    i = e.selected_revision_id ? e.revisions[e.selected_revision_id] : void 0,
    a = e.freshness;
  if (!r && !a?.reason) return null;
  let o = a?.reason ?? null,
    s = n.some((e) => e.status === `failed` && e.error === o);
  return (0, Z.jsxs)(`section`, {
    className: il,
    "aria-label": `Visual direction references`,
    children: [
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`h3`, {
            className: `text-xs font-semibold`,
            children: `Gameplay and UI references`,
          }),
          a &&
            (0, Z.jsxs)(`p`, {
              className: `mt-1 text-[11px] text-muted-foreground`,
              role: o ? (s ? `alert` : `status`) : void 0,
              children: [a.status, o ? ` — ${o}` : ``],
            }),
        ],
      }),
      i &&
        (0, Z.jsx)(rl, {
          revision: i,
          sessionId: t,
          errorShown: !!o && i.error === o,
        }),
      r &&
        r.id !== i?.id &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, Z.jsx)(`h4`, {
              className: `text-[11px] font-medium`,
              children: i ? `Latest exploration` : `Exploration progress`,
            }),
            (0, Z.jsx)(rl, {
              revision: r,
              sessionId: t,
              errorShown: !!o && r.error === o,
            }),
          ],
        }),
    ],
  });
}
function ol({
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
            l = a ? vr.getAssetUrl(t, i, !1) : null;
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
function sl({ status: e, className: t = `` }) {
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
function cl({ status: e, className: t = `` }) {
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
