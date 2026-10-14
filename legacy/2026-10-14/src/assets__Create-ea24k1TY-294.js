// assets__Create-ea24k1TY 294 — classname
// Lines 104085-104264 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function D9({ title: e, children: t }) {
  return (0, Z.jsxs)(`div`, {
    className: `border-b border-border px-2 py-2`,
    children: [
      (0, Z.jsx)(`h3`, {
        className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-1 pb-1.5`,
        children: e,
      }),
      t,
    ],
  });
}
function O9({ active: e, onClick: t, icon: n, label: r, title: i }) {
  return (0, Z.jsxs)(`button`, {
    type: `button`,
    onClick: t,
    title: i,
    "aria-pressed": e,
    className: `flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${e ? `bg-primary/20 text-primary-foreground/80 border border-primary/30` : `text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent`}`,
    children: [n, r],
  });
}
function k9({
  label: e,
  value: t,
  min: n,
  max: r,
  step: i,
  digits: a,
  onChange: o,
}) {
  return (0, Z.jsxs)(`label`, {
    className: `block py-1`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: e,
          }),
          (0, Z.jsx)(`span`, {
            className: `font-mono text-foreground/70`,
            children: t.toFixed(a),
          }),
        ],
      }),
      (0, Z.jsx)(`input`, {
        type: `range`,
        min: n,
        max: r,
        step: i,
        value: t,
        onChange: (e) => o(Number(e.target.value)),
        className: `w-full h-1 accent-primary`,
      }),
    ],
  });
}
function Fve({ label: e, checked: t, onChange: n }) {
  return (0, Z.jsxs)(`label`, {
    className: `flex items-center justify-between py-1 cursor-pointer`,
    children: [
      (0, Z.jsx)(`span`, { className: `text-muted-foreground`, children: e }),
      (0, Z.jsx)(`input`, {
        type: `checkbox`,
        checked: t,
        onChange: (e) => n(e.target.checked),
        className: `h-3.5 w-3.5 accent-primary`,
      }),
    ],
  });
}
function Ive({
  versions: e,
  loading: t,
  currentVersion: n,
  viewingVersion: r,
  onSelectVersion: i,
  onClose: a,
}) {
  return (0, Z.jsxs)(`div`, {
    className: `w-64 flex-shrink-0 border-l border-border bg-card flex flex-col min-h-0`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between px-3 py-2 border-b border-border`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-xs font-medium text-foreground`,
            children: `Version history`,
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: a,
            className: `p-0.5 text-muted-foreground hover:text-foreground transition-colors`,
            title: `Close history`,
            children: (0, Z.jsx)(li, { className: `h-3.5 w-3.5` }),
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `flex-1 overflow-y-auto`,
        children: t
          ? (0, Z.jsx)(`div`, {
              className: `px-3 py-4 text-xs text-muted-foreground`,
              children: `Loading versions…`,
            })
          : e.length === 0
            ? (0, Z.jsx)(`div`, {
                className: `px-3 py-4 text-xs text-muted-foreground`,
                children: `No versions yet.`,
              })
            : e.map((e) => {
                let t = e.version === n;
                return (0, Z.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => i(e.version),
                    className: p(
                      `w-full px-3 py-2 text-left border-b border-border/50 transition-colors`,
                      e.version === r
                        ? `bg-secondary`
                        : `hover:bg-secondary/50`,
                    ),
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [
                          (0, Z.jsxs)(`span`, {
                            className: `text-[10px] font-mono font-semibold text-foreground bg-secondary rounded px-1 py-px`,
                            children: [`v`, e.version],
                          }),
                          t &&
                            (0, Z.jsx)(`span`, {
                              className: `text-[10px] text-primary font-medium`,
                              children: `current`,
                            }),
                          (0, Z.jsx)(`span`, {
                            className: `text-[10px] text-muted-foreground/70 ml-auto`,
                            children: XZ(e.created_at),
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `mt-1 flex items-center gap-1 text-[11px] text-muted-foreground`,
                        children: [
                          e.author?.kind === `agent`
                            ? (0, Z.jsx)(nte, {
                                className: `h-3 w-3 text-primary/70 flex-shrink-0`,
                              })
                            : (0, Z.jsx)(Dn, {
                                className: `h-3 w-3 flex-shrink-0`,
                              }),
                          (0, Z.jsx)(`span`, {
                            className: `truncate`,
                            children: YZ(e.author),
                          }),
                        ],
                      }),
                      e.restored_from != null &&
                        (0, Z.jsxs)(`div`, {
                          className: `mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground/70`,
                          children: [
                            (0, Z.jsx)(Sn, {
                              className: `h-2.5 w-2.5 flex-shrink-0`,
                            }),
                            `restored from v`,
                            e.restored_from,
                          ],
                        }),
                    ],
                  },
                  e.version,
                );
              }),
      }),
    ],
  });
}
