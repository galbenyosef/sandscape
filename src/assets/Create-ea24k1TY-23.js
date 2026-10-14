// Create-ea24k1TY 23 — classname
// Lines 7015-7352 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function hne({
  sessionId: e,
  images: t,
  isGenerating: n,
  onGenerate: r,
  onShuffle: i,
  onRemoveImage: a,
  onAddImage: o,
  onLayoutChange: s,
}) {
  let [c, l] = (0, X.useState)(0),
    [u, d] = (0, X.useState)([]),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(``),
    g = t.length,
    _ = sn(`mcp:generate_images_from_text`),
    v = (0, X.useMemo)(() => Il(g), [g]),
    y = v[c % v.length] ?? v[0];
  (0, X.useEffect)(() => {
    let e = Array.from({ length: g }, (e, t) => t);
    (d(e), l(0));
  }, [g]);
  let b = (0, X.useRef)(s);
  ((b.current = s),
    (0, X.useEffect)(() => {
      if (!y || g === 0) return;
      let e = fne(y, u, 400);
      b.current(e);
    }, [y, u, g]));
  let x = (0, X.useCallback)(() => {
      (v.length > 1 &&
        l((e) => {
          let t = Math.floor(Math.random() * v.length);
          return (
            t === e % v.length && v.length > 1 && (t = (t + 1) % v.length),
            t
          );
        }),
        d((e) => dne(e)),
        i());
    }, [v, i]),
    S = (0, X.useCallback)(() => {
      (o(m.trim() || void 0), h(``));
    }, [o, m]);
  if (g === 0 && !n)
    return (0, Z.jsxs)(`div`, {
      children: [
        (0, Z.jsx)(`div`, {
          className: `flex items-center justify-between mb-2`,
          children: (0, Z.jsx)(`div`, {
            className: `flex items-center gap-1.5`,
            children: (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
              children: `Moodboard`,
            }),
          }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1.5 mb-2`,
          children: [
            (0, Z.jsx)(`input`, {
              type: `text`,
              value: m,
              onChange: (e) => h(e.target.value),
              onKeyDown: (e) => {
                e.key === `Enter` && S();
              },
              placeholder: `Optional: describe direction...`,
              disabled: n,
              className: `flex-1 min-w-0 h-7 px-2 text-xs bg-secondary/30 border border-border rounded text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/40 disabled:opacity-40`,
            }),
            (0, Z.jsxs)(`button`, {
              onClick: S,
              disabled: n,
              className: `shrink-0 h-7 px-2 flex items-center gap-1 rounded bg-primary/10 hover:bg-primary/20 text-primary text-xs transition-colors disabled:opacity-40`,
              children: [
                (0, Z.jsx)(ni, { className: `h-3 w-3` }),
                `Add`,
                _ !== null &&
                  (0, Z.jsxs)(`span`, {
                    className: `flex items-center gap-0.5 text-primary/70`,
                    children: [_, (0, Z.jsx)(Xt, { className: `h-2.5 w-2.5` })],
                  }),
              ],
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `mb-2 text-xs text-muted-foreground`,
          role: `status`,
          children: `No mood board yet — the style guide usually draws one. Generate it below.`,
        }),
        (0, Z.jsxs)(`button`, {
          onClick: r,
          className: `w-full aspect-[16/9] bg-secondary/20 rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground/60 hover:border-border hover:text-primary/60 transition-colors`,
          children: [
            (0, Z.jsx)(pn, { className: `h-6 w-6` }),
            (0, Z.jsxs)(`span`, {
              className: `text-xs flex items-center gap-1`,
              children: [
                `Generate Mood Board`,
                _ !== null &&
                  (0, Z.jsxs)(`span`, {
                    className: `flex items-center gap-0.5`,
                    children: [
                      `(`,
                      _ * Pl,
                      (0, Z.jsx)(Xt, { className: `h-2.5 w-2.5` }),
                      `)`,
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  if (n && g === 0) {
    let e = Il(Pl)[0] ?? v[0] ?? Fl[0];
    return (0, Z.jsxs)(`div`, {
      children: [
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between mb-2`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
              children: `Moodboard`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1 text-xs text-muted-foreground/40`,
              children: [
                (0, Z.jsx)(J, { className: `h-3 w-3 animate-spin` }),
                `Generating...`,
              ],
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          className: `rounded-lg overflow-hidden`,
          style: {
            display: `grid`,
            gridTemplateColumns: `repeat(${e.columns}, 1fr)`,
            gridTemplateRows: `repeat(${e.rows}, 1fr)`,
            gap: `1px`,
            aspectRatio: `${e.columns} / ${e.rows}`,
          },
          children: e.cells.map((e, t) => (0, Z.jsx)(mne, { cell: e }, t)),
        }),
      ],
    });
  }
  let C = y ? Math.min(y.cells.length, g) : 0;
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
                children: `Moodboard`,
              }),
              (0, Z.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, Z.jsx)(`button`, {
                    onMouseEnter: () => p(!0),
                    onMouseLeave: () => p(!1),
                    className: `text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors`,
                    children: (0, Z.jsx)(vt, { className: `h-3 w-3` }),
                  }),
                  f &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 bg-card border border-border rounded text-[10px] text-muted-foreground whitespace-nowrap z-20 shadow-lg`,
                      children: `Shuffle to try different layouts`,
                    }),
                ],
              }),
            ],
          }),
          (0, Z.jsxs)(`button`, {
            onClick: x,
            className: `flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors`,
            title: `Shuffle layout`,
            children: [(0, Z.jsx)(Go, { className: `h-3 w-3` }), `Shuffle`],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 mb-2`,
        children: [
          (0, Z.jsx)(`input`, {
            type: `text`,
            value: m,
            onChange: (e) => h(e.target.value),
            onKeyDown: (e) => {
              e.key === `Enter` && S();
            },
            placeholder: `Optional: describe direction...`,
            disabled: n,
            className: `flex-1 min-w-0 h-7 px-2 text-xs bg-secondary/30 border border-border rounded text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/40 disabled:opacity-40`,
          }),
          (0, Z.jsxs)(`button`, {
            onClick: S,
            disabled: n,
            className: `shrink-0 h-7 px-2 flex items-center gap-1 rounded bg-primary/10 hover:bg-primary/20 text-primary text-xs transition-colors disabled:opacity-40`,
            children: [
              (0, Z.jsx)(ni, { className: `h-3 w-3` }),
              `Add`,
              _ !== null &&
                (0, Z.jsxs)(`span`, {
                  className: `flex items-center gap-0.5 text-primary/70`,
                  children: [_, (0, Z.jsx)(Xt, { className: `h-2.5 w-2.5` })],
                }),
            ],
          }),
        ],
      }),
      y &&
        (0, Z.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, Z.jsx)(`div`, {
              className: `rounded-lg overflow-hidden`,
              style: {
                display: `grid`,
                gridTemplateColumns: `repeat(${y.columns}, 1fr)`,
                gridTemplateRows: `repeat(${y.rows}, 1fr)`,
                gap: `1px`,
                aspectRatio: `${y.columns} / ${y.rows}`,
              },
              children: y.cells.slice(0, C).map((n, r) => {
                let i = u[r] ?? r,
                  o = t[i];
                return o
                  ? (0, Z.jsx)(
                      pne,
                      {
                        src: `${Mn.API_BASE_URL}/api/game/${e}/${o.path}`,
                        cell: n,
                        onRemove: () => a(i),
                      },
                      `${o.path}-${r}`,
                    )
                  : null;
              }),
            }),
            n &&
              (0, Z.jsx)(`div`, {
                className: `absolute inset-0 rounded-lg bg-black/40 flex items-center justify-center pointer-events-auto`,
                children: (0, Z.jsx)(J, {
                  className: `h-6 w-6 animate-spin text-white/70`,
                }),
              }),
          ],
        }),
    ],
  });
}
function Ll(e) {
  let t = parseInt(e.slice(1, 3), 16) / 255,
    n = parseInt(e.slice(3, 5), 16) / 255,
    r = parseInt(e.slice(5, 7), 16) / 255,
    i = Math.max(t, n, r),
    a = Math.min(t, n, r),
    o = (i + a) / 2,
    s = 0,
    c = 0;
  if (i !== a) {
    let e = i - a;
    ((c = o > 0.5 ? e / (2 - i - a) : e / (i + a)),
      (s =
        i === t
          ? ((n - r) / e + (n < r ? 6 : 0)) / 6
          : i === n
            ? ((r - t) / e + 2) / 6
            : ((t - n) / e + 4) / 6));
  }
  return [s * 360, c * 100, o * 100];
}
function Rl(e, t, n) {
  ((e = ((e % 360) + 360) % 360),
    (t = Math.max(0, Math.min(100, t)) / 100),
    (n = Math.max(0, Math.min(100, n)) / 100));
  let r = t * Math.min(n, 1 - n),
    i = (t) => {
      let i = (t + e / 30) % 12,
        a = n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
      return Math.round(255 * a)
        .toString(16)
        .padStart(2, `0`);
    };
  return `#${i(0)}${i(8)}${i(4)}`;
}
function gne(e, t) {
  let [n, r, i] = Ll(e);
  switch (t) {
    case `complementary`:
      return [
        e,
        Rl(n + 180, r, i),
        Rl(n, r, i * 0.7),
        Rl(n + 180, r * 0.6, i * 1.2),
        Rl(n + 180, r, i * 0.5),
      ];
    case `analogous`:
      return [
        Rl(n - 30, r, i),
        e,
        Rl(n + 30, r, i),
        Rl(n - 15, r * 0.7, i * 1.1),
        Rl(n + 15, r * 0.7, i * 0.9),
      ];
    case `triadic`:
      return [
        e,
        Rl(n + 120, r, i),
        Rl(n + 240, r, i),
        Rl(n + 120, r * 0.6, i * 1.1),
        Rl(n + 240, r * 0.6, i * 0.9),
      ];
    case `split-complementary`:
      return [
        e,
        Rl(n + 150, r, i),
        Rl(n + 210, r, i),
        Rl(n + 150, r * 0.6, i * 1.1),
        Rl(n + 210, r * 0.6, i * 0.9),
      ];
  }
}
function zl(e, t, n, r, i) {
  let a = ((e - 90) * Math.PI) / 180,
    o = t * i;
  return [n + Math.cos(a) * o, r + Math.sin(a) * o];
}
