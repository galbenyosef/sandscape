// Create-CEn7EAZs 23 — classname
// Lines 7201-7455 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Yl({ status: e }) {
  return e === `idle`
    ? null
    : (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-center gap-1.5 text-xs py-1`,
        children: [
          e === `saving` &&
            (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(J, {
                  className: `h-3 w-3 animate-spin text-muted-foreground`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `Saving...`,
                }),
              ],
            }),
          e === `saved` &&
            (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(ye, { className: `h-3 w-3 text-green-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-green-400`,
                  children: `Saved`,
                }),
              ],
            }),
          e === `error` &&
            (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(te, { className: `h-3 w-3 text-red-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-red-400`,
                  children: `Save failed`,
                }),
              ],
            }),
        ],
      });
}
function Xl({ tags: e, onChange: t, placeholder: n, variant: r = `primary` }) {
  let [i, a] = (0, X.useState)(!1),
    [o, s] = (0, X.useState)(``),
    c = () => {
      let n = o.trim();
      (n && !e.includes(n) && t([...e, n]), s(``), a(!1));
    },
    l =
      r === `primary`
        ? `bg-primary/15 text-primary border-primary/25`
        : `bg-cyan-500/10 text-cyan-400 border-cyan-500/20`;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-wrap gap-1.5`,
    children: [
      e.map((n, r) =>
        (0, Z.jsxs)(
          `span`,
          {
            className: `inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${l}`,
            children: [
              n,
              (0, Z.jsx)(`button`, {
                onClick: () => t(e.filter((e, t) => t !== r)),
                className: `hover:text-red-400 transition-colors ml-0.5`,
                children: (0, Z.jsx)(Jr, { className: `h-3 w-3` }),
              }),
            ],
          },
          `${n}-${r}`,
        ),
      ),
      !i &&
        (0, Z.jsxs)(`button`, {
          onClick: () => a(!0),
          className: `inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full border border-dashed border-border text-muted-foreground/60 hover:border-primary/60 hover:text-primary/80 transition-colors`,
          children: [(0, Z.jsx)(Br, { className: `h-3 w-3` }), `Add`],
        }),
      i &&
        (0, Z.jsx)(`input`, {
          autoFocus: !0,
          value: o,
          onChange: (e) => s(e.target.value),
          onKeyDown: (e) => {
            (e.key === `Enter` && c(), e.key === `Escape` && (a(!1), s(``)));
          },
          onBlur: c,
          placeholder: n || `Type & Enter`,
          className: `px-2.5 py-1 text-xs rounded-full border border-primary/40 bg-card text-foreground/80 outline-none w-28 placeholder-muted-foreground/40`,
        }),
    ],
  });
}
function Zl({
  value: e,
  onSave: t,
  placeholder: n = `Click to edit`,
  className: r = ``,
  inputClassName: i = ``,
  isMultiline: a = !1,
  disabled: o = !1,
}) {
  let [s, c] = (0, X.useState)(!1),
    [l, u] = (0, X.useState)(e),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(null),
    h = (0, X.useRef)(null),
    g = (0, X.useRef)(null),
    _ = (0, X.useRef)(!1),
    v = (0, X.useCallback)(() => {
      g.current !== null && (clearTimeout(g.current), (g.current = null));
    }, []);
  ((0, X.useEffect)(() => {
    s || u(e);
  }, [e, s]),
    (0, X.useEffect)(() => v, [v]),
    (0, X.useEffect)(() => {
      s && h.current && (h.current.focus(), h.current.select());
    }, [s]));
  let y = (0, X.useCallback)(async () => {
      if ((v(), _.current)) return;
      let n = l.trim();
      if (n === e) {
        c(!1);
        return;
      }
      if (!n) {
        m(`Value cannot be empty`);
        return;
      }
      ((_.current = !0), f(!0), m(null));
      try {
        (await t(n), c(!1));
      } catch (e) {
        m(e instanceof Error ? e.message : `Failed to save`);
      } finally {
        ((_.current = !1), f(!1));
      }
    }, [l, e, t, v]),
    b = (0, X.useCallback)(() => {
      (v(), u(e), c(!1), m(null));
    }, [e, v]),
    x = (0, X.useCallback)(
      (e) => {
        (e.key === `Enter` && !a) ||
        (e.key === `Enter` && a && (e.metaKey || e.ctrlKey))
          ? (e.preventDefault(), y())
          : e.key === `Escape` && b();
      },
      [y, b, a],
    );
  return o
    ? (0, Z.jsx)(`span`, { className: r, children: e || n })
    : s
      ? (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Z.jsx)(a ? `textarea` : `input`, {
                  ref: h,
                  value: l,
                  onChange: (e) => u(e.target.value),
                  onKeyDown: x,
                  onBlur: () => {
                    (v(),
                      (g.current = setTimeout(() => {
                        ((g.current = null), _.current || y());
                      }, 150)));
                  },
                  className: `flex-1 bg-card border border-primary/40 rounded px-2 py-1 text-sm text-foreground/80
              focus:outline-none focus:border-primary/40 ${a ? `min-h-[60px] resize-none` : ``} ${i}`,
                  placeholder: n,
                  disabled: d,
                  rows: a ? 3 : void 0,
                }),
                (0, Z.jsx)(`div`, {
                  className: `flex items-center gap-0.5 shrink-0`,
                  children: d
                    ? (0, Z.jsx)(J, {
                        className: `w-4 h-4 text-primary animate-spin`,
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(`button`, {
                            onClick: y,
                            className: `p-1 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded`,
                            title: `Save (Enter)`,
                            children: (0, Z.jsx)(ye, {
                              className: `w-3.5 h-3.5`,
                            }),
                          }),
                          (0, Z.jsx)(`button`, {
                            onClick: b,
                            className: `p-1 text-muted-foreground hover:text-foreground/80 hover:bg-secondary/50 rounded`,
                            title: `Cancel (Esc)`,
                            children: (0, Z.jsx)(Jr, {
                              className: `w-3.5 h-3.5`,
                            }),
                          }),
                        ],
                      }),
                }),
              ],
            }),
            p &&
              (0, Z.jsx)(`span`, {
                className: `text-xs text-red-400`,
                children: p,
              }),
          ],
        })
      : (0, Z.jsxs)(`span`, {
          onClick: () => c(!0),
          className: `cursor-pointer hover:bg-secondary/30 rounded px-1 -mx-1 transition-colors group break-words ${r}`,
          title: `Click to edit`,
          children: [
            e ||
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground/60 italic`,
                children: n,
              }),
            (0, Z.jsx)(Xr, {
              className: `w-3 h-3 ml-1 inline-block opacity-40 group-hover:opacity-70 text-muted-foreground`,
            }),
          ],
        });
}
var Ql = {
    "3d": { icon: I, color: `#45B7D1`, label: `3D` },
    "2d": { icon: en, color: `#96CEB4`, label: `2D` },
    audio: { icon: Nt, color: `#DDA0DD`, label: `Audio` },
    voice: { icon: vs, color: `#F6A5C0`, label: `Voice` },
    video: { icon: xt, color: `#FFD93D`, label: `Video` },
    world: { icon: De, color: `#4ECDC4`, label: `World` },
    meta: { icon: B, color: `#A0A0A0`, label: `Meta` },
  },
  $l = { icon: L, color: `#A0A0A0`, label: `Other` };
function eu(e) {
  return e ? Ht[e] : void 0;
}
function tu(e) {
  let t = eu(e);
  return t ? Ql[t] : $l;
}
var nu = {
  backgroundImage: `linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)`,
  backgroundSize: `16px 16px`,
  backgroundPosition: `0 0, 0 8px, 8px -8px, -8px 0px`,
  backgroundColor: `#606060`,
};
function ru(e) {
  return e?.split(`/`).filter(Boolean).pop() || e || ``;
}
