// Create-CEn7EAZs 44 — children
// Lines 14191-14404 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function qf({
  open: e,
  onOpenChange: t,
  existing: n,
  submitting: r,
  onCreate: i,
}) {
  let a = (0, X.useMemo)(() => Mf(), []),
    [o, s] = (0, X.useState)(``),
    [c, l] = (0, X.useState)(`prop_3d`),
    [u, d] = (0, X.useState)(``),
    [f, p] = (0, X.useState)(!0),
    [m, h] = (0, X.useState)(`biped`),
    g = Df(o, n),
    _ = Kf(c),
    v = jf(c),
    y = Nf(c),
    b = () => {
      (s(``), d(``), p(!0), h(`biped`));
    },
    x = (e) => {
      (e || b(), t(e));
    },
    C = () => {
      g.error ||
        i({
          asset_name: g.slug,
          asset_type: c,
          description: u.trim(),
          generate: v && f,
          ...(y ? { body_plan: m } : {}),
        });
    };
  return (0, Z.jsx)(mo, {
    open: e,
    onOpenChange: x,
    children: (0, Z.jsxs)(uo, {
      className: `max-w-md`,
      children: [
        (0, Z.jsxs)(co, {
          children: [
            (0, Z.jsx)(fo, { children: `New asset` }),
            (0, Z.jsx)(po, {
              children: `Register an asset and, optionally, generate it in one motion.`,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-3`,
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1 block`,
                  children: `Name`,
                }),
                (0, Z.jsx)(Ar, {
                  value: o,
                  onChange: (e) => s(e.target.value),
                  placeholder: `e.g. Hero Ship`,
                  autoFocus: !0,
                  onKeyDown: (e) => e.key === `Enter` && C(),
                }),
                o.trim() &&
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] mt-1 ${g.error ? `text-red-400` : `text-muted-foreground`}`,
                    children: g.error ?? `Registers as "${g.slug}"`,
                  }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1 block`,
                  children: `Type`,
                }),
                (0, Z.jsxs)(Fe, {
                  value: c,
                  onValueChange: l,
                  children: [
                    (0, Z.jsx)(Re, { children: (0, Z.jsx)(Me, {}) }),
                    (0, Z.jsx)(Le, {
                      children: a.map(({ group: e, types: t }) =>
                        (0, Z.jsxs)(
                          Ne,
                          {
                            children: [
                              (0, Z.jsx)(Ie, { children: Ql[e].label }),
                              t.map((e) =>
                                (0, Z.jsx)(
                                  je,
                                  { value: e, children: Pf(e) },
                                  e,
                                ),
                              ),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            y &&
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1 block`,
                    children: `Body plan`,
                  }),
                  (0, Z.jsxs)(Fe, {
                    value: m,
                    onValueChange: (e) => h(e),
                    children: [
                      (0, Z.jsx)(Re, { children: (0, Z.jsx)(Me, {}) }),
                      (0, Z.jsx)(Le, {
                        children: Vt.map((e) =>
                          (0, Z.jsx)(je, { value: e, children: ot[e] }, e),
                        ),
                      }),
                    ],
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] mt-1 text-muted-foreground`,
                    children:
                      m === `biped`
                        ? `Rigged for animation.`
                        : `Meshed, not rigged — no skeleton, no animations.`,
                  }),
                ],
              }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1 block`,
                  children: `Description`,
                }),
                (0, Z.jsx)(Ma, {
                  value: u,
                  onChange: (e) => d(e.target.value),
                  placeholder: `What is this asset? Written for the generator.`,
                  rows: 3,
                }),
              ],
            }),
            v &&
              (0, Z.jsxs)(`label`, {
                className: `flex items-center gap-2 cursor-pointer select-none`,
                children: [
                  (0, Z.jsx)(pee, {
                    checked: f,
                    onCheckedChange: (e) => p(e === !0),
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-sm text-foreground/90 flex items-center gap-1.5`,
                    children: [
                      (0, Z.jsx)(Nr, { className: `w-3.5 h-3.5 text-primary` }),
                      `Generate now`,
                    ],
                  }),
                  f &&
                    (0, Z.jsx)(`span`, {
                      className: `inline-flex items-center gap-0.5 text-xs ml-auto`,
                      children:
                        _ === null
                          ? (0, Z.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `price unavailable`,
                            })
                          : (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsxs)(`span`, {
                                  className: `inline-flex items-center gap-0.5 text-amber-400`,
                                  children: [
                                    _,
                                    (0, Z.jsx)(Jt, { className: `w-3 h-3` }),
                                  ],
                                }),
                                (0, Z.jsx)(`span`, {
                                  className: `text-muted-foreground ml-1`,
                                  children: `estimated for 1 asset`,
                                }),
                              ],
                            }),
                    }),
                ],
              }),
          ],
        }),
        (0, Z.jsxs)(lo, {
          children: [
            (0, Z.jsx)(S, {
              variant: `ghost`,
              onClick: () => x(!1),
              disabled: r,
              children: `Cancel`,
            }),
            (0, Z.jsx)(S, {
              onClick: C,
              disabled: !!g.error || r,
              children: r
                ? `Creating…`
                : f && v
                  ? `Create & generate`
                  : `Create`,
            }),
          ],
        }),
      ],
    }),
  });
}
