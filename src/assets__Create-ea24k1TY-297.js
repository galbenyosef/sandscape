// assets__Create-ea24k1TY 297 — classname
// Lines 104981-105238 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function qve({
  variant: e,
  editable: t,
  imageState: n,
  cropMode: r,
  onToggleCrop: i,
  onRotate: a,
  onFlip: o,
  onAdjust: s,
  onResetAdjustment: c,
  onClearCrop: l,
  versions: u,
  versionPath: d,
  currentPath: f,
  onSelectVersion: m,
  editPrompt: h,
  onEditPromptChange: g,
  onRunAiEdit: _,
  editing: v,
  editPrice: y,
}) {
  let b = e === `rail`,
    x = n.crop,
    S = d ?? f,
    C = (0, Z.jsxs)(`section`, {
      children: [
        (0, Z.jsx)(`h4`, { className: R9, children: `Transform` }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-0.5 mb-2`,
          children: [
            (0, Z.jsx)(`button`, {
              onClick: () => a(-1),
              disabled: !t,
              className: V9,
              title: `Rotate left`,
              children: (0, Z.jsx)(Sn, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              onClick: () => a(1),
              disabled: !t,
              className: V9,
              title: `Rotate right`,
              children: (0, Z.jsx)(D, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border/60 mx-1` }),
            (0, Z.jsx)(`button`, {
              onClick: () => o(`h`),
              disabled: !t,
              className: p(V9, n.flip_h && H9),
              title: `Flip horizontal`,
              children: (0, Z.jsx)(mte, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              onClick: () => o(`v`),
              disabled: !t,
              className: p(V9, n.flip_v && H9),
              title: `Flip vertical`,
              children: (0, Z.jsx)(hte, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`div`, { className: `w-px h-4 bg-border/60 mx-1` }),
            (0, Z.jsx)(`button`, {
              "data-testid": `image-editor-crop-toggle`,
              onClick: i,
              disabled: !t,
              className: p(V9, r && H9),
              title: r ? `Cancel crop` : `Crop`,
              children: (0, Z.jsx)(mo, { className: `h-3.5 w-3.5` }),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2 py-0.5`,
          children: [
            (0, Z.jsx)(`span`, { className: z9, children: `Rotation` }),
            (0, Z.jsxs)(`span`, {
              className: `text-[11px] tabular-nums text-foreground/80`,
              children: [n.rotate_deg, `°`],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2 py-0.5`,
          children: [
            (0, Z.jsx)(`span`, { className: z9, children: `Crop` }),
            (0, Z.jsxs)(`span`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[11px] tabular-nums text-foreground/80`,
                  children: x
                    ? `${Math.round(x.width * 100)}% x ${Math.round(x.height * 100)}%`
                    : `None`,
                }),
                x &&
                  (0, Z.jsx)(`button`, {
                    onClick: l,
                    disabled: !t,
                    className: `text-[10px] px-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30`,
                    title: `Clear the crop`,
                    children: `Clear`,
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
    w = (0, Z.jsxs)(`section`, {
      className: p(!b && `flex-1 min-w-[280px]`),
      children: [
        (0, Z.jsx)(`h4`, { className: R9, children: `Adjust` }),
        (0, Z.jsx)(`div`, {
          className: `space-y-1.5`,
          children: Wve.map(({ key: e, label: r }) =>
            (0, Z.jsxs)(
              `div`,
              {
                className: `flex items-center gap-2`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: p(z9, `w-[62px] shrink-0`),
                    children: r,
                  }),
                  (0, Z.jsx)(`input`, {
                    type: `range`,
                    "aria-label": r,
                    min: 0,
                    max: 2,
                    step: 0.01,
                    value: n.adjustments[e],
                    disabled: !t,
                    title: `Double-click to reset`,
                    onDoubleClick: () => t && c(e),
                    onChange: (t) => s(e, Number(t.target.value)),
                    className: `flex-1 min-w-0 h-1 accent-primary disabled:opacity-40`,
                  }),
                  (0, Z.jsx)(Kve, {
                    value: n.adjustments[e],
                    disabled: !t,
                    onCommit: (t) => s(e, t),
                    title: `1.00 is unchanged`,
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      ],
    }),
    T = (0, Z.jsxs)(`section`, {
      className: p(!b && `flex-1 min-w-[280px]`),
      children: [
        (0, Z.jsx)(`h4`, { className: R9, children: `AI edit` }),
        (0, Z.jsxs)(`div`, {
          className: p(
            `flex gap-1.5`,
            b ? `flex-col items-stretch` : `items-center`,
          ),
          children: [
            (0, Z.jsx)(`input`, {
              value: h,
              onChange: (e) => g(e.target.value),
              onKeyDown: (e) => {
                e.key === `Enter` && !v && t && _();
              },
              placeholder: `Describe a change`,
              disabled: v || !t,
              title: `Runs an AI redraw and saves the result as a new version. The original file is never changed.`,
              className: p(
                B9,
                `flex-1 min-w-0 placeholder:text-muted-foreground/70`,
              ),
            }),
            (0, Z.jsx)(an, {
              cost: y,
              label: `Redraw`,
              size: `sm`,
              variant: `ghost`,
              className: p(
                `h-7 px-2 text-[11px] shrink-0 rounded border border-primary/30 bg-primary/15 text-primary hover:bg-primary/25 hover:text-primary`,
                b && `w-full`,
              ),
              icon: (0, Z.jsx)(Yr, { className: `h-3 w-3` }),
              isLoading: v,
              loadingText: `Redrawing`,
              disabled: !t || !h.trim(),
              onClick: _,
            }),
          ],
        }),
      ],
    }),
    E =
      u.length > 1 &&
      (0, Z.jsxs)(`section`, {
        className: p(!b && `min-w-[160px]`),
        children: [
          (0, Z.jsx)(`h4`, { className: R9, children: `Versions` }),
          (0, Z.jsx)(`div`, {
            className: `space-y-px`,
            children: u.map((e, t) => {
              let n = t === u.length - 1;
              return (0, Z.jsxs)(
                `button`,
                {
                  onClick: () => m(e),
                  className: p(
                    `w-full flex items-center justify-between gap-2 px-1.5 py-1 rounded text-[11px] transition-colors`,
                    t === (S === null ? u.length - 1 : u.lastIndexOf(S))
                      ? `bg-primary/15 text-foreground`
                      : `text-muted-foreground hover:bg-accent hover:text-foreground`,
                  ),
                  title: n
                    ? `The current art, the one edits apply to`
                    : `Older version, view only`,
                  children: [
                    (0, Z.jsxs)(`span`, {
                      className: `tabular-nums`,
                      children: [`v`, t + 1],
                    }),
                    n &&
                      (0, Z.jsx)(`span`, {
                        className: `text-[10px] text-muted-foreground`,
                        children: `current`,
                      }),
                  ],
                },
                `${t}-${e}`,
              );
            }),
          }),
        ],
      });
  return b
    ? (0, Z.jsx)(`div`, {
        "data-testid": `image-editor-controls`,
        "data-variant": `rail`,
        className: `w-[272px] shrink-0 border-l border-border bg-background/40 overflow-y-auto`,
        children: (0, Z.jsxs)(`div`, {
          className: `p-3 pb-14 space-y-4 divide-y divide-border/40 [&>section+section]:pt-3`,
          children: [C, w, T, E],
        }),
      })
    : (0, Z.jsx)(`div`, {
        "data-testid": `image-editor-controls`,
        "data-variant": `stacked`,
        className: `shrink-0 border-t border-border bg-background/40 max-h-[46%] overflow-y-auto`,
        children: (0, Z.jsxs)(`div`, {
          className: `px-3 py-2.5 pr-16 flex flex-wrap items-start gap-x-6 gap-y-3`,
          children: [C, w, T, E],
        }),
      });
}
var Jve = 1500,
  Yve = 420,
  Xve = 620,
  U9 = (e) => e.split(`/`).pop() || e;
