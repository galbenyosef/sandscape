// Create-CEn7EAZs 48 — classname
// Lines 15282-15608 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Cne({ steps: e, onStepsChange: t, onAutoOptimize: n }) {
  let r = (0, X.useRef)(null),
    i = (0, X.useRef)([]),
    [a, o] = (0, X.useState)(0),
    [s, c] = (0, X.useState)(null),
    l = (0, X.useRef)(``),
    [u, d] = (0, X.useState)(null),
    f = e.length,
    p = (0, X.useMemo)(() => {
      if (f <= 1) return 1;
      let e = Math.max(0, (a || 480) - sp - 8),
        t = Math.max(2, Math.floor((e + up) / 158));
      return Math.max(2, Math.min(Math.ceil(f / 2), t));
    }, [f, a]),
    m = f > 1 && Math.floor((f - 1) / p) % 2 == 1 && (f - 1) % p == p - 1,
    h = (0, X.useCallback)((e, t) => {
      i.current[e] = t;
    }, []),
    g = () => {
      let e = r.current;
      if (!e) return;
      if (f === 0) {
        l.current !== `` && ((l.current = ``), c(null));
        return;
      }
      let t = e.getBoundingClientRect(),
        n = [];
      for (let e = 0; e < f; e++) {
        let r = i.current[e];
        if (!r) return;
        let a = r.getBoundingClientRect();
        n.push({
          x: dp(a.left - t.left + a.width / 2),
          y: dp(a.top - t.top + a.height / 2),
        });
      }
      let a = `M ${n[0].x} ${n[0].y}`,
        o = [];
      for (let e = 0; e < f - 1; e++) {
        let t = n[e],
          r = n[e + 1];
        ((a += ` L ${r.x} ${r.y}`),
          Math.floor(e / p) === Math.floor((e + 1) / p)
            ? o.push({
                x: (t.x + r.x) / 2,
                y: (t.y + r.y) / 2,
                dir: r.x > t.x ? `right` : `left`,
                insertIndex: e + 1,
              })
            : o.push({
                x: t.x,
                y: (t.y + r.y) / 2,
                dir: `down`,
                insertIndex: e + 1,
              }));
      }
      let s = n[0],
        u = n[f - 1],
        d = yne;
      if (m)
        ((a += ` L 21 ${u.y} Q ${cp} ${u.y} ${cp} ${u.y - d} L ${cp} ${s.y + d} Q ${cp} ${s.y} 21 ${s.y} L ${s.x} ${s.y}`),
          o.push({ x: cp, y: (s.y + u.y) / 2, dir: `up`, insertIndex: f }));
      else {
        let e = dp(t.height - lp / 2);
        ((a += ` L ${u.x} ${e - d} Q ${u.x} ${e} ${u.x - d} ${e} L 21 ${e} Q ${cp} ${e} ${cp} ${e - d} L ${cp} ${s.y + d} Q ${cp} ${s.y} 21 ${s.y} L ${s.x} ${s.y}`),
          o.push({ x: cp, y: (s.y + e) / 2, dir: `up`, insertIndex: f }));
      }
      let h = JSON.stringify([a, o]);
      h !== l.current && ((l.current = h), c({ d: a, markers: o }));
    },
    _ = (0, X.useRef)(g);
  ((_.current = g),
    (0, X.useLayoutEffect)(() => {
      _.current();
    }),
    (0, X.useLayoutEffect)(() => {
      let e = r.current;
      if (!e) return;
      o(e.clientWidth);
      let t = new ResizeObserver(() => {
        (o(e.clientWidth), _.current());
      });
      return (t.observe(e), () => t.disconnect());
    }, [f === 0]));
  let v = (0, X.useCallback)(
      (n, r) => {
        t(e.map((e, t) => (t === n ? { ...e, ...r } : e)));
      },
      [e, t],
    ),
    y = (0, X.useCallback)(
      (n) => {
        t(e.filter((e, t) => t !== n));
      },
      [e, t],
    ),
    b = (0, X.useCallback)(
      (n) => {
        let r = e.length,
          i = [...e];
        (i.splice(n, 0, {
          name: ``,
          description: ``,
          emoji: ip[r % ip.length],
          color: rp[r % rp.length],
        }),
          t(i),
          d(n));
      },
      [e, t],
    ),
    x = (0, X.useCallback)(
      (n, r) => {
        if (n === r) return;
        let i = [...e],
          [a] = i.splice(n, 1);
        (i.splice(r, 0, a), t(i));
      },
      [e, t],
    ),
    S = (0, X.useCallback)(
      (e, t) => {
        let n = t;
        (e < n && --n, n !== e && x(e, n));
      },
      [x],
    ),
    C = (0, X.useCallback)(() => d(null), []);
  return (0, Z.jsxs)(`div`, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between mb-1`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Core Gameplay Loop`,
              }),
              (0, Z.jsx)(vt, { className: `w-3 h-3 text-muted-foreground/40` }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              f > 0 &&
                (0, Z.jsxs)(`button`, {
                  onClick: () => b(f),
                  className: `flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors`,
                  children: [
                    (0, Z.jsx)(Br, { className: `w-3 h-3` }),
                    `Add step`,
                  ],
                }),
              n &&
                (0, Z.jsxs)(`button`, {
                  onClick: n,
                  className: `flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors`,
                  children: [
                    (0, Z.jsx)(Nr, { className: `w-3 h-3` }),
                    `Auto optimize`,
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`p`, {
        className: `text-[10px] text-muted-foreground/40 mb-3`,
        children: `Drag to reorder · Click text to edit · Hover between steps to insert`,
      }),
      f === 0
        ? (0, Z.jsxs)(`button`, {
            onClick: () => b(0),
            className: `w-full h-24 rounded-lg border border-dashed border-border flex items-center justify-center gap-2 text-muted-foreground/40 hover:text-muted-foreground hover:border-muted-foreground/40 transition-colors cursor-pointer`,
            children: [
              (0, Z.jsx)(Br, { className: `w-4 h-4` }),
              (0, Z.jsx)(`span`, {
                className: `text-xs`,
                children: `Add the first step`,
              }),
            ],
          })
        : (0, Z.jsxs)(`div`, {
            ref: r,
            className: `relative`,
            style: {
              paddingLeft: sp,
              paddingRight: 4,
              paddingTop: 2,
              paddingBottom: m ? 4 : lp,
            },
            children: [
              (0, Z.jsx)(`style`, {
                children: `
            @keyframes gameplay-loop-flow { to { stroke-dashoffset: -24; } }
            .gameplay-loop-flow { animation: gameplay-loop-flow 1.6s linear infinite; }
            @media (prefers-reduced-motion: reduce) { .gameplay-loop-flow { animation: none; opacity: 0; } }
          `,
              }),
              s &&
                (0, Z.jsxs)(`svg`, {
                  className: `pointer-events-none absolute inset-0 h-full w-full`,
                  "aria-hidden": `true`,
                  children: [
                    (0, Z.jsx)(`path`, {
                      d: s.d,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: 1.5,
                      strokeLinejoin: `round`,
                      className: `text-muted-foreground`,
                      opacity: 0.25,
                    }),
                    (0, Z.jsx)(`path`, {
                      d: s.d,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: 2,
                      strokeLinecap: `round`,
                      strokeDasharray: `2 22`,
                      className: `text-primary gameplay-loop-flow`,
                      opacity: 0.8,
                    }),
                  ],
                }),
              (0, Z.jsx)(`div`, {
                className: `grid`,
                style: {
                  gridTemplateColumns: `repeat(${p}, minmax(0, 1fr))`,
                  columnGap: up,
                  rowGap: bne,
                  justifyItems: `center`,
                },
                children: e.map((e, t) => {
                  let n = Math.floor(t / p),
                    r = n % 2 == 1,
                    i = r ? p - 1 - (t % p) : t % p;
                  return (0, Z.jsx)(
                    Sne,
                    {
                      step: e,
                      index: t,
                      reversed: r,
                      gridStyle: {
                        gridRowStart: n + 1,
                        gridColumnStart: i + 1,
                      },
                      autoEdit: u === t,
                      onAutoEditHandled: C,
                      onUpdate: v,
                      onRemove: y,
                      onReorder: x,
                      onInsert: b,
                      registerRef: h,
                    },
                    t,
                  );
                }),
              }),
              s?.markers.map((e) =>
                (0, Z.jsx)(
                  xne,
                  { marker: e, onInsert: b, onMove: S },
                  e.insertIndex,
                ),
              ),
            ],
          }),
    ],
  });
}
function fp({ label: e, value: t, field: n, onChange: r, multiline: i }) {
  let [a, o] = (0, X.useState)(!1),
    [s, c] = (0, X.useState)(t),
    l = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    c(t);
  }, [t]),
    (0, X.useEffect)(() => {
      a && l.current && l.current.focus();
    }, [a]));
  let u = () => {
    (o(!1), s.trim() === t ? c(t) : r(n, s.trim()));
  };
  return (0, Z.jsxs)(`div`, {
    className: `py-2`,
    children: [
      (0, Z.jsx)(`span`, {
        className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block mb-1`,
        children: e,
      }),
      a
        ? i
          ? (0, Z.jsx)(`textarea`, {
              ref: l,
              value: s,
              onChange: (e) => c(e.target.value),
              onBlur: u,
              onKeyDown: (e) => {
                e.key === `Escape` && (c(t), o(!1));
              },
              rows: 3,
              className: `w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40`,
            })
          : (0, Z.jsx)(`input`, {
              ref: l,
              value: s,
              onChange: (e) => c(e.target.value),
              onBlur: u,
              onKeyDown: (e) => {
                (e.key === `Enter` && u(), e.key === `Escape` && (c(t), o(!1)));
              },
              className: `w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-sm text-foreground/80 focus:outline-none focus:border-primary/40`,
            })
        : (0, Z.jsx)(`div`, {
            onClick: () => o(!0),
            className: `cursor-pointer rounded-md px-1 -mx-1 hover:bg-secondary/40 transition-colors`,
            children: (0, Z.jsx)(`p`, {
              className: `text-sm leading-relaxed ${t ? `text-foreground/70` : `text-muted-foreground/40 italic`}`,
              children: t || `Click to add ${e.toLowerCase()}...`,
            }),
          }),
    ],
  });
}
