// Create-ea24k1TY 29 — classname
// Lines 9141-9291 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function uu({
  label: e,
  icon: t,
  cost: n,
  onGenerate: r,
  disabled: i = !1,
  isGenerating: a = !1,
  size: o = `sm`,
  variant: s = `ghost`,
  className: c = ``,
  placeholder: l = `Optional: Add guidance (e.g., "Make it brighter")`,
}) {
  let [u, d] = (0, X.useState)(!1),
    [f, p] = (0, X.useState)(``),
    [m, h] = (0, X.useState)(!1),
    g = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    u && g.current && g.current.focus();
  }, [u]),
    (0, X.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && u && (d(!1), p(``));
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [u]));
  let _ = (e) => {
      (e.stopPropagation(), u || d(!0));
    },
    v = async (e) => {
      if ((e?.stopPropagation(), !(m || a))) {
        h(!0);
        try {
          (await r(f.trim() || void 0), p(``), d(!1));
        } finally {
          h(!1);
        }
      }
    },
    y = (e) => {
      (e.stopPropagation(), d(!1), p(``));
    },
    b = (e) => {
      e.key === `Enter` && !e.shiftKey && (e.preventDefault(), v(e));
    },
    S = m || a;
  return u
    ? (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1.5 p-2 bg-card rounded-lg border border-border ${c}`,
        onClick: (e) => e.stopPropagation(),
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, Z.jsx)(si, { className: `w-3 h-3 text-primary shrink-0` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] text-muted-foreground`,
                children: `Add feedback (optional)`,
              }),
            ],
          }),
          (0, Z.jsx)(`input`, {
            ref: g,
            type: `text`,
            value: f,
            onChange: (e) => p(e.target.value),
            onKeyDown: b,
            placeholder: l,
            className: `w-full h-7 bg-secondary/50 border border-border rounded px-2 text-xs text-foreground/80
            placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40`,
            disabled: S,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex gap-1.5`,
            children: [
              (0, Z.jsxs)(x, {
                size: `sm`,
                variant: `ghost`,
                onClick: y,
                disabled: S,
                className: `h-6 px-2 text-[10px] text-muted-foreground hover:text-foreground/80`,
                children: [
                  (0, Z.jsx)(li, { className: `w-3 h-3 mr-1` }),
                  `Cancel`,
                ],
              }),
              (0, Z.jsx)(x, {
                size: `sm`,
                onClick: v,
                disabled: S || i,
                className: `h-6 px-2 text-[10px] flex-1`,
                children: S
                  ? (0, Z.jsx)(J, { className: `w-3 h-3 animate-spin` })
                  : (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(Cn, { className: `w-3 h-3 mr-1` }),
                        f.trim() ? `Generate with Feedback` : `Generate`,
                        n !== null &&
                          (0, Z.jsxs)(`span`, {
                            className: `inline-flex items-center gap-0.5 ml-1 text-amber-400`,
                            children: [
                              `(`,
                              n,
                              (0, Z.jsx)(Xt, { className: `h-2.5 w-2.5` }),
                              `)`,
                            ],
                          }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      })
    : (0, Z.jsx)(an, {
        cost: n,
        label: e,
        icon: t,
        isLoading: S,
        loadingText: `Generating...`,
        checkBalance: !0,
        size: o,
        variant: s,
        className: c,
        onClick: _,
        disabled: i,
      });
}
var du = [
    `building_3d`,
    `prop_3d`,
    `environmental_props_3d`,
    `vehicle_3d`,
    `weapon_3d`,
    `environment_3d`,
  ],
  fu = [`character_3d`, `environment_map`, `hdri`, `splat_world`, `scene`];
function pu(e) {
  if (!e || fu.includes(e)) return !1;
  let t = e.toLowerCase();
  return (
    du.includes(e) ||
    t.includes(`3d`) ||
    t.includes(`prop`) ||
    t.includes(`environment`) ||
    t.includes(`vehicle`) ||
    t.includes(`building`)
  );
}
