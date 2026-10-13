// assets__Create-ea24k1TY 26 — classname
// Lines 8268-8580 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function iu({
  selectedReferences: e,
  onReferencesChange: t,
  paletteColors: n,
}) {
  let [r, i] = (0, X.useState)(!1),
    [a, o] = (0, X.useState)(``),
    [s, c] = (0, X.useState)(`all`),
    [l, u] = (0, X.useState)([]),
    [d, f] = (0, X.useState)([]),
    [p, m] = (0, X.useState)(!1),
    h = (0, X.useRef)(null),
    g = (0, X.useRef)(null),
    _ = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    if (!r) return;
    function e(e) {
      h.current && !h.current.contains(e.target) && i(!1);
    }
    return (
      document.addEventListener(`mousedown`, e),
      () => document.removeEventListener(`mousedown`, e)
    );
  }, [r]);
  let v = (0, X.useCallback)(async (e, t, n = !1) => {
    if (n && _.current && !e && t === `all`) {
      (u(_.current.refs), f(_.current.categories));
      return;
    }
    m(!0);
    let r = await xee(e, t === `all` ? `` : t, 60);
    (m(!1),
      u(r.references),
      r.categories.length > 0 && f(r.categories),
      !e &&
        t === `all` &&
        (_.current = { refs: r.references, categories: r.categories }));
  }, []);
  ((0, X.useEffect)(() => {
    r && v(``, `all`, !0);
  }, [r, v]),
    (0, X.useEffect)(() => {
      if (r)
        return (
          g.current && clearTimeout(g.current),
          (g.current = setTimeout(() => {
            v(a, s);
          }, 300)),
          () => {
            g.current && clearTimeout(g.current);
          }
        );
    }, [a, s, r, v]));
  let y = (0, X.useMemo)(() => [`all`, ...d], [d]),
    b = (0, X.useMemo)(() => new Set(e.map((e) => e.id)), [e]),
    x = (0, X.useMemo)(() => new Set(e.map((e) => e.name.toLowerCase())), [e]),
    S = (0, X.useCallback)(
      (n) => {
        b.has(n.id) ||
          x.has(n.name.toLowerCase()) ||
          (t([...e, n]), i(!1), o(``));
      },
      [e, b, x, t],
    ),
    C = (0, X.useCallback)(
      (n) => {
        t(e.filter((e) => e.id !== n));
      },
      [e, t],
    );
  return (0, Z.jsxs)(`div`, {
    className: `overflow-hidden`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 mb-2`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
            children: `Mood References`,
          }),
          (0, Z.jsx)(vt, { className: `w-3 h-3 text-muted-foreground/40` }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `relative py-2`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex gap-3 overflow-x-auto scrollbar-themed pb-2 w-0 min-w-full`,
            children: [
              e.map((e, t) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    className: `group flex-shrink-0 w-[130px] bg-card rounded-lg border border-border overflow-hidden`,
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `relative aspect-[4/3] rounded-t-lg overflow-hidden`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `absolute inset-0`,
                            style: { background: nu(e, n) },
                          }),
                          (0, Z.jsx)(`button`, {
                            onClick: () => C(e.id),
                            "aria-label": `Remove ${e.name}`,
                            className: `absolute top-1 right-1 w-5 h-5 flex items-center justify-center bg-black/60 rounded-full text-white/70 hover:text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity`,
                            children: (0, Z.jsx)(li, { className: `w-3 h-3` }),
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `px-2 py-1.5`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `text-xs font-medium text-foreground/80 truncate`,
                            title: e.name,
                            children: e.name,
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `text-[10px] text-muted-foreground/60 truncate`,
                            title: e.description,
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id || `sel-${t}`,
                ),
              ),
              (0, Z.jsxs)(`button`, {
                onClick: () => i(!0),
                className: `flex-shrink-0 w-[130px] aspect-[3/4] rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-1 text-muted-foreground/50 hover:text-muted-foreground hover:border-muted-foreground/40 transition-colors cursor-pointer`,
                children: [
                  (0, Z.jsx)(ni, { className: `w-5 h-5` }),
                  (0, Z.jsx)(`span`, {
                    className: `text-xs`,
                    children: `Add Reference`,
                  }),
                ],
              }),
            ],
          }),
          r &&
            (0, Z.jsxs)(`div`, {
              ref: h,
              className: `absolute left-0 right-0 top-0 z-50 bg-card border border-border rounded-lg shadow-xl overflow-hidden`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `px-3 pt-3 pb-2 space-y-2`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        (0, Z.jsx)(Gr, {
                          className: `absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50`,
                        }),
                        (0, Z.jsx)(`input`, {
                          type: `text`,
                          value: a,
                          onChange: (e) => o(e.target.value),
                          placeholder: `Search references...`,
                          autoFocus: !0,
                          className: `w-full h-8 bg-secondary border border-border rounded-lg pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/40`,
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `flex gap-1 overflow-x-auto scrollbar-hide`,
                      children: y.map((e) =>
                        (0, Z.jsx)(
                          `button`,
                          {
                            onClick: () => c(e),
                            className: `px-2.5 py-1 rounded-md text-xs whitespace-nowrap transition-colors ${s === e ? `bg-primary/15 text-primary` : `text-muted-foreground hover:text-foreground`}`,
                            children: e === `all` ? `All` : ru(e),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `px-3 pb-3 max-h-[260px] overflow-y-auto scrollbar-themed`,
                  children: p
                    ? (0, Z.jsx)(`div`, {
                        className: `py-6 text-center text-xs text-muted-foreground/40`,
                        children: `Loading...`,
                      })
                    : (0, Z.jsxs)(`div`, {
                        className: `grid grid-cols-3 gap-2`,
                        children: [
                          l.map((e) => {
                            let t = b.has(e.id) || x.has(e.name.toLowerCase());
                            return (0, Z.jsxs)(
                              `button`,
                              {
                                onClick: () => !t && S(e),
                                className: `text-left rounded-lg border overflow-hidden transition-all ${t ? `border-primary/40 opacity-50 cursor-default` : `border-border hover:border-primary/30 cursor-pointer`}`,
                                children: [
                                  (0, Z.jsxs)(`div`, {
                                    className: `relative aspect-[4/3]`,
                                    children: [
                                      (0, Z.jsx)(`div`, {
                                        className: `absolute inset-0`,
                                        style: { background: nu(e, n) },
                                      }),
                                      t &&
                                        (0, Z.jsx)(`div`, {
                                          className: `absolute inset-0 flex items-center justify-center bg-black/40`,
                                          children: (0, Z.jsx)(ve, {
                                            className: `w-4 h-4 text-primary`,
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, Z.jsxs)(`div`, {
                                    className: `px-1.5 py-1`,
                                    children: [
                                      (0, Z.jsx)(`div`, {
                                        className: `text-[10px] font-medium text-foreground/80 truncate`,
                                        title: e.name,
                                        children: e.name,
                                      }),
                                      (0, Z.jsx)(`div`, {
                                        className: `text-[9px] text-muted-foreground/50 truncate`,
                                        title: e.description,
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                          l.length === 0 &&
                            (0, Z.jsx)(`div`, {
                              className: `col-span-3 py-6 text-center text-xs text-muted-foreground/40`,
                              children: `No references match your search`,
                            }),
                        ],
                      }),
                }),
                (0, Z.jsx)(`div`, {
                  className: `border-t border-border px-3 py-2 flex justify-end`,
                  children: (0, Z.jsx)(`button`, {
                    onClick: () => i(!1),
                    className: `text-xs text-muted-foreground hover:text-foreground transition-colors`,
                    children: `Close`,
                  }),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function au({ value: e, onChange: t, placeholder: n }) {
  let [r, i] = (0, X.useState)(!1),
    [a, o] = (0, X.useState)(e);
  return (
    (0, X.useEffect)(() => {
      o(e);
    }, [e]),
    r
      ? (0, Z.jsx)(`textarea`, {
          autoFocus: !0,
          value: a,
          onChange: (e) => o(e.target.value),
          onBlur: () => {
            (i(!1), a !== e && t(a));
          },
          onKeyDown: (t) => {
            t.key === `Escape` && (o(e), i(!1));
          },
          placeholder: n,
          rows: 3,
          maxLength: 1e3,
          className: `w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-sm text-foreground/80 resize-none scrollbar-themed focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
        })
      : (0, Z.jsxs)(`div`, {
          onClick: () => i(!0),
          className: `group cursor-pointer rounded-md px-1 -mx-1 hover:bg-secondary/40 transition-colors`,
          children: [
            (0, Z.jsx)(`p`, {
              className: `text-sm leading-relaxed ${e ? `text-muted-foreground` : `text-muted-foreground/40 italic`}`,
              children: e || n || `Click to add notes...`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between mt-1`,
              children: [
                (0, Z.jsx)(di, {
                  className: `h-3 w-3 opacity-0 group-hover:opacity-40 transition-opacity text-muted-foreground`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `text-[10px] text-muted-foreground/30`,
                  children: [(e || ``).length, ` / 1000`],
                }),
              ],
            }),
          ],
        })
  );
}
var ou = `Mood board composite failed`;
function su(e) {
  return e.map((e) =>
    e.description ? `${e.name} – ${e.description}` : e.name,
  );
}
