// Create-CEn7EAZs 34 — classname
// Lines 10672-10990 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Sd({
  name: e,
  assetType: t,
  description: n,
  imageUrl: r,
  checkerboard: i,
  canEdit: a,
  cost: o,
  isGenerating: s,
  generateDisabled: c,
  onRename: l,
  onChangeKind: u,
  onDescribe: d,
  onGenerate: f,
  onOpenEditor: p,
  onRemove: m,
  onClose: h,
  error: g,
}) {
  let [_, v] = (0, X.useState)(null),
    [y, b] = (0, X.useState)(null),
    [x, C] = (0, X.useState)(!1),
    [w, T] = (0, X.useState)(!1),
    E = !!r,
    D = _d(t),
    O = vd(t),
    k = async (e) => {
      if (!(e === t || _)) {
        (v(e), b(null));
        try {
          await u(e);
        } catch (e) {
          b(e instanceof Error ? e.message : `Could not change the kind`);
        } finally {
          v(null);
        }
      }
    };
  return (0, Z.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-start gap-2`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [
              (0, Z.jsx)(`div`, { className: Gu, children: `Name` }),
              (0, Z.jsx)(`div`, {
                className: `text-sm font-medium text-foreground/90`,
                children: (0, Z.jsx)(Zl, {
                  value: e?.replace(/_/g, ` `) || ``,
                  onSave: l,
                  placeholder: `Name this art`,
                  disabled: !a,
                  className: `text-sm font-medium text-foreground/90`,
                }),
              }),
            ],
          }),
          (0, Z.jsx)(S, {
            variant: `ghost`,
            size: `sm`,
            onClick: h,
            "aria-label": `Close details`,
            className: `h-10 w-10 p-0 shrink-0 text-muted-foreground hover:text-foreground`,
            children: (0, Z.jsx)(Jr, { className: `h-4 w-4` }),
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `aspect-square overflow-hidden ${E ? td : nd}`,
        children: E
          ? (0, Z.jsx)(`img`, {
              src: r,
              alt: e,
              className: `w-full h-full object-contain`,
              style: O ? i : { backgroundColor: `#101014` },
            })
          : (0, Z.jsxs)(`div`, {
              className: `w-full h-full flex flex-col items-center justify-center gap-1.5 text-muted-foreground/40`,
              children: [
                (0, Z.jsx)(en, { className: `h-7 w-7` }),
                (0, Z.jsx)(`span`, {
                  className: `text-[11px]`,
                  children: `Not drawn yet`,
                }),
              ],
            }),
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: `${Gu} mb-1.5`, children: `Kind` }),
          (0, Z.jsx)(`div`, {
            className: `flex flex-wrap gap-1.5`,
            children: fd.map((e) => {
              let n = e.icon,
                r = e.type === t;
              return (0, Z.jsxs)(
                `button`,
                {
                  type: `button`,
                  onClick: () => k(e.type),
                  disabled: !a || _ !== null,
                  "aria-pressed": r,
                  className: `${Ku} flex items-center gap-1.5 disabled:opacity-50 ${r ? qu : Ju}`,
                  children: [
                    _ === e.type
                      ? (0, Z.jsx)(J, { className: `h-3 w-3 animate-spin` })
                      : (0, Z.jsx)(n, { className: `h-3.5 w-3.5` }),
                    e.label,
                  ],
                },
                e.type,
              );
            }),
          }),
          D &&
            (0, Z.jsx)(`p`, {
              className: `text-[11px] text-muted-foreground/70 mt-1.5`,
              children: D,
            }),
          y &&
            (0, Z.jsx)(`p`, {
              className: `text-xs text-red-400 mt-1`,
              children: y,
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, {
            className: `${Gu} mb-1.5`,
            children: `What it should show`,
          }),
          (0, Z.jsx)(`div`, {
            className: `text-xs text-muted-foreground leading-relaxed`,
            children: (0, Z.jsx)(Zl, {
              value: n,
              onSave: d,
              placeholder: `Describe it: pose, colours, framing...`,
              isMultiline: !0,
              disabled: !a,
              className: `text-xs text-muted-foreground`,
            }),
          }),
        ],
      }),
      (0, Z.jsx)(Bu, {
        label: E ? `Redraw` : `Draw it`,
        cost: o,
        icon: E
          ? (0, Z.jsx)(ln, { className: `h-4 w-4 mr-1` })
          : (0, Z.jsx)(Nr, { className: `h-4 w-4 mr-1` }),
        onGenerate: f,
        isGenerating: s,
        disabled: c,
        size: `default`,
        variant: E ? `outline` : `default`,
        className: `w-full`,
        placeholder: E
          ? `e.g., make it gold, add a glow`
          : `e.g., thicker outline, brighter palette`,
      }),
      g && (0, Z.jsx)(`p`, { className: `text-xs text-red-400`, children: g }),
      (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          p &&
            E &&
            (0, Z.jsxs)(S, {
              variant: `outline`,
              size: `sm`,
              onClick: p,
              className: `w-full h-10 flex items-center justify-center gap-2 text-xs border-border bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground`,
              children: [
                (0, Z.jsx)(Xt, { className: `h-3.5 w-3.5` }),
                `Open in editor`,
              ],
            }),
          x
            ? (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-start gap-2`,
                    children: [
                      (0, Z.jsx)(pn, {
                        className: `h-4 w-4 text-red-400 shrink-0 mt-0.5`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-red-300`,
                        children: `Remove this art from the plan? The file goes with it.`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, Z.jsx)(`button`, {
                        onClick: () => C(!1),
                        disabled: w,
                        className: `flex-1 min-h-[40px] px-3 text-xs text-muted-foreground hover:text-foreground/80 bg-card rounded-md transition-colors disabled:opacity-50`,
                        children: `Keep it`,
                      }),
                      (0, Z.jsxs)(`button`, {
                        onClick: async () => {
                          T(!0);
                          try {
                            await m();
                          } finally {
                            T(!1);
                          }
                        },
                        disabled: w || s,
                        className: `flex-1 min-h-[40px] px-3 flex items-center justify-center gap-1.5 text-xs text-red-300 bg-red-500/20 hover:bg-red-500/30 rounded-md transition-colors disabled:opacity-50`,
                        children: [
                          w
                            ? (0, Z.jsx)(J, {
                                className: `h-3.5 w-3.5 animate-spin`,
                              })
                            : (0, Z.jsx)(jr, { className: `h-3.5 w-3.5` }),
                          `Remove`,
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : a &&
              (0, Z.jsxs)(`button`, {
                onClick: () => C(!0),
                disabled: s,
                className: `w-full min-h-[40px] flex items-center justify-center gap-2 text-xs text-muted-foreground/60 hover:text-red-400 transition-colors disabled:opacity-50 disabled:hover:text-muted-foreground/60`,
                children: [
                  (0, Z.jsx)(jr, { className: `h-3.5 w-3.5` }),
                  `Remove`,
                ],
              }),
        ],
      }),
    ],
  });
}
function Cd({ disabled: e, isAdding: t, error: n, onAdd: r, onDirty: i }) {
  let [a, o] = (0, X.useState)(``),
    [s, c] = (0, X.useState)(pd),
    l = () => {
      let n = a.trim();
      !n || e || t || (r(n, s), o(``));
    };
  return (0, Z.jsxs)(`div`, {
    children: [
      (0, Z.jsx)(`div`, { className: `${Gu} mb-2`, children: `Add Art` }),
      (0, Z.jsxs)(`div`, {
        className: `flex gap-2`,
        children: [
          (0, Z.jsx)(`input`, {
            type: `text`,
            value: a,
            onChange: (e) => {
              (o(e.target.value), i());
            },
            placeholder: `e.g., Health bar, coin`,
            className: `flex-1 min-w-0 ${ed}`,
            disabled: e || t,
            onKeyDown: (e) => {
              e.key === `Enter` && l();
            },
          }),
          (0, Z.jsx)(S, {
            size: `sm`,
            variant: `outline`,
            onClick: l,
            disabled: !a.trim() || e || t,
            "aria-label": `Add this art`,
            className: `h-10 w-10 p-0 shrink-0`,
            children: t
              ? (0, Z.jsx)(J, { className: `w-4 h-4 animate-spin` })
              : (0, Z.jsx)(Br, { className: `w-4 h-4` }),
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `flex flex-wrap gap-1.5 mt-2`,
        children: fd.map((n) => {
          let r = n.icon,
            i = n.type === s;
          return (0, Z.jsxs)(
            `button`,
            {
              type: `button`,
              onClick: () => c(n.type),
              disabled: e || t,
              "aria-pressed": i,
              className: `${Ku} flex items-center gap-1.5 disabled:opacity-50 ${i ? qu : Ju}`,
              children: [(0, Z.jsx)(r, { className: `h-3.5 w-3.5` }), n.label],
            },
            n.type,
          );
        }),
      }),
      (0, Z.jsx)(`p`, {
        className: `text-[11px] text-muted-foreground/70 mt-1.5`,
        children: _d(s),
      }),
      n &&
        (0, Z.jsx)(`p`, {
          className: `text-xs text-red-400 mt-1`,
          children: n,
        }),
    ],
  });
}
var wd = new Set(qe);
function Td(e) {
  return !!e && wd.has(e);
}
var Ed = 330;
