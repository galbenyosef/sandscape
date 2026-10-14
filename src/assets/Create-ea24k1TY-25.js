// Create-ea24k1TY 25 — classname
// Lines 7992-8267 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Yl(e, t, n) {
  let r = t / 2,
    i = n / 2,
    a = Math.PI * (3 - Math.sqrt(5)),
    o = [],
    s = Math.max(...e.map((e) => e.score), 1),
    c = Math.min(...e.map((e) => e.score), 0),
    l = s - c || 1;
  for (let s = 0; s < e.length; s++) {
    let u = e[s],
      d = 11 + ((u.score - c) / l) * 11,
      f = s * a,
      p = Math.sqrt(s + 1) * 18,
      m = r + Math.cos(f) * p,
      h = i + Math.sin(f) * p,
      g = d * 0.55,
      _ = u.word.length * g,
      v = Math.max(4, Math.min(t - _ - 4, m - _ / 2)),
      y = Math.max(4, Math.min(n - d - 4, h - d / 2));
    o.push({ word: u.word, x: v, y, size: d, score: u.score });
  }
  return o;
}
function Xl({ selectedKeywords: e, onKeywordsChange: t }) {
  let [n, r] = (0, X.useState)(``),
    [i, a] = (0, X.useState)([]),
    o = (0, X.useRef)(null),
    [s, c] = (0, X.useState)({ w: 400, h: 200 }),
    l = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    if (!o.current) return;
    let e = new ResizeObserver((e) => {
      for (let t of e) c({ w: t.contentRect.width, h: t.contentRect.height });
    });
    return (e.observe(o.current), () => e.disconnect());
  }, []);
  let [u, d] = (0, X.useState)([]),
    f = (0, X.useCallback)(async (e) => {
      let t = await gee(e, ``, 50);
      (a(t.keywords), d(t.suggestions));
    }, []),
    p = (0, X.useMemo)(
      () => u.filter((t) => !e.includes(t)).slice(0, 6),
      [u, e],
    );
  (0, X.useEffect)(() => {
    f(``);
  }, [f]);
  let m = (0, X.useRef)(!1);
  (0, X.useEffect)(() => {
    if (!m.current) {
      m.current = !0;
      return;
    }
    return (
      l.current && clearTimeout(l.current),
      (l.current = setTimeout(() => {
        f(n);
      }, 300)),
      () => {
        l.current && clearTimeout(l.current);
      }
    );
  }, [n, f]);
  let h = (0, X.useMemo)(
      () =>
        i
          .map(({ word: t }) => {
            let r = 1;
            return (
              e.includes(t) && (r += 3),
              n && t.toLowerCase().includes(n.toLowerCase()) && (r += 4),
              p.includes(t) && (r += 2),
              { word: t, score: r }
            );
          })
          .sort((e, t) => t.score - e.score)
          .slice(0, 50),
      [i, e, n, p],
    ),
    g = (0, X.useMemo)(() => Yl(h, s.w, s.h), [h, s.w, s.h]),
    _ = (0, X.useCallback)(
      (n) => {
        (e.includes(n) ? t(e.filter((e) => e !== n)) : t([...e, n]), r(``));
      },
      [e, t],
    ),
    v = (0, X.useCallback)(() => {
      let i = n.trim().toLowerCase();
      (i && !e.includes(i) && t([...e, i]), r(``));
    }, [n, e, t]),
    y = (0, X.useCallback)(
      (e) => {
        e.key === `Enter` && (e.preventDefault(), v());
      },
      [v],
    );
  return (0, Z.jsxs)(`div`, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between mb-2`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Style Keywords`,
              }),
              (0, Z.jsx)(vt, { className: `w-3 h-3 text-muted-foreground/40` }),
            ],
          }),
          (0, Z.jsxs)(`button`, {
            className: `flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors`,
            children: [(0, Z.jsx)(Yr, { className: `w-3 h-3` }), `Keyword Map`],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `pt-2`,
        children: (0, Z.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, Z.jsx)(Gr, {
              className: `absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50`,
            }),
            (0, Z.jsx)(`input`, {
              type: `text`,
              value: n,
              onChange: (e) => r(e.target.value),
              onKeyDown: y,
              placeholder: `Search or add keywords...`,
              className: `w-full h-9 bg-card border border-border rounded-lg pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/40`,
            }),
          ],
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `pt-2`,
        children: (0, Z.jsx)(`div`, {
          ref: o,
          className: `relative w-full min-h-[200px] h-[200px] overflow-hidden select-none`,
          children: (0, Z.jsx)(Sr, {
            children: g.map((t) => {
              let n = e.includes(t.word);
              return (0, Z.jsx)(
                _r.span,
                {
                  initial: { opacity: 0, scale: 0.7 },
                  animate: { opacity: 1, scale: 1, x: t.x, y: t.y },
                  exit: { opacity: 0, scale: 0.7 },
                  transition: {
                    type: `spring`,
                    stiffness: 120,
                    damping: 18,
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.25 },
                  },
                  whileHover: { scale: 1.08 },
                  onClick: () => _(t.word),
                  className: `absolute whitespace-nowrap cursor-pointer ${n ? `text-primary font-semibold` : `text-muted-foreground/60 hover:text-foreground`}`,
                  style: { lineHeight: 1.2, fontSize: t.size },
                  children: t.word,
                },
                t.word,
              );
            }),
          }),
        }),
      }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 pb-1`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between mb-1.5`,
            children: [
              (0, Z.jsxs)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: [`Selected (`, e.length, `)`],
              }),
              e.length > 0 &&
                (0, Z.jsx)(`button`, {
                  onClick: () => t([]),
                  className: `text-xs text-red-400 hover:text-red-300 cursor-pointer transition-colors`,
                  children: `Clear`,
                }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex flex-wrap gap-1`,
            children: [
              e.map((e) =>
                (0, Z.jsxs)(
                  `span`,
                  {
                    className: `inline-flex items-center gap-1 bg-primary/15 text-primary border border-primary/25 rounded-full px-2.5 py-1 text-xs`,
                    children: [
                      e,
                      (0, Z.jsx)(`button`, {
                        onClick: () => _(e),
                        className: `hover:text-red-400 transition-colors`,
                        children: (0, Z.jsx)(li, { className: `w-3 h-3` }),
                      }),
                    ],
                  },
                  e,
                ),
              ),
              e.length === 0 &&
                (0, Z.jsx)(`span`, {
                  className: `text-xs text-muted-foreground/40 italic`,
                  children: `Click words to select`,
                }),
            ],
          }),
        ],
      }),
      p.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `pb-2 pt-1 border-t border-border/50 mt-1`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 flex-wrap`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 flex-shrink-0`,
                children: `Suggestions:`,
              }),
              p.map((e) =>
                (0, Z.jsx)(
                  `button`,
                  {
                    onClick: () => _(e),
                    className: `text-xs text-muted-foreground hover:text-foreground border border-border/60 hover:border-border rounded-full px-2 py-0.5 transition-colors`,
                    children: e,
                  },
                  e,
                ),
              ),
            ],
          }),
        }),
    ],
  });
}
var Zl = `linear-gradient(135deg, #1a1b22 0%, #2a2b32 100%)`,
  Ql = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
function $l(e) {
  return (e ?? []).filter((e) => typeof e == `string` && Ql.test(e));
}
function eu(e) {
  return e.length === 4 ? `${e}8` : e.length === 7 ? `${e}88` : e;
}
function tu(e) {
  let t = $l(e);
  return t.length === 0
    ? Zl
    : t.length === 1
      ? `linear-gradient(135deg, ${t[0]} 0%, ${eu(t[0])} 100%)`
      : `linear-gradient(135deg, ${t.map((e, n) => `${e} ${(n / (t.length - 1)) * 100}%`).join(`, `)})`;
}
function nu(e, t) {
  let n = $l(e?.colors);
  if (n.length) return tu(n);
  let r = [...new Set($l(t))];
  if (!r.length) return Zl;
  if (r.length === 1) return tu(r);
  let i = typeof e?.name == `string` ? e.name : ``,
    a = 0;
  for (let e = 0; e < i.length; e++) a = (a * 31 + i.charCodeAt(e)) >>> 0;
  let o = a % r.length,
    s = (o + 1 + (a % (r.length - 1))) % r.length;
  return tu([r[o], r[s]]);
}
function ru(e) {
  return e.replace(/_/g, ` `).replace(/\b\w/g, (e) => e.toUpperCase());
}
