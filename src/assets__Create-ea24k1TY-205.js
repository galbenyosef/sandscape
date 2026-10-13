// assets__Create-ea24k1TY 205 — classname
// Lines 69489-69832 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function c1({
  lodLevels: e,
  sourceVertexCount: t,
  onGenerateLod: n,
  isGeneratingLod: r,
  hasModel: i,
  previewLevel: a,
  onPreviewLevel: o,
}) {
  let s = e && e.length > 0,
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(r1),
    [f, p] = (0, X.useState)(() => (s ? e.map((e) => e.screen_pct) : i1));
  (0, X.useEffect)(() => {
    e && e.length > 0 && p(e.map((e) => e.screen_pct));
  }, [e]);
  let m = (0, X.useCallback)(() => {
      n({ lod_percentages: u, screen_pcts: f });
    }, [n, u, f]),
    h = (0, X.useCallback)((e) => {
      let t = a1[e];
      t && d([...t]);
    }, []),
    g = (0, X.useCallback)((e, t) => {
      d((n) => {
        let r = [...n];
        return ((r[e] = Math.max(0.01, Math.min(1, t))), r);
      });
    }, []),
    _ = (0, X.useCallback)((e, t) => {
      p((n) => {
        let r = [...n];
        return ((r[e] = Math.max(0.01, Math.min(1, t))), r);
      });
    }, []),
    v = t || (s ? Math.max(...e.map((e) => e.vertices)) * 1.5 : 100),
    y = s ? e.reduce((e, t) => e + (t.size_bytes || 0), 0) : 0,
    b = s ? e[e.length - 1]?.vertices : 0,
    S = t && b ? ((1 - b / t) * 100).toFixed(1) : null;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full bg-[#1a1625]`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `p-3 border-b border-gray-700/50`,
        children: [
          (0, Z.jsxs)(`h5`, {
            className: `text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1`,
            children: [
              (0, Z.jsx)(B, { className: `h-3 w-3 inline mr-1` }),
              `Level of Detail`,
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[10px] text-gray-500`,
            children: `Simplified mesh variants for distance-based rendering.`,
          }),
        ],
      }),
      s &&
        (0, Z.jsxs)(`div`, {
          className: `p-3 border-b border-gray-700/50`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `space-y-1.5 mb-3`,
              children: [
                t != null &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `text-gray-500 font-mono text-[10px] w-8 shrink-0`,
                        children: `LOD0`,
                      }),
                      (0, Z.jsx)(`div`, {
                        className: `flex-1 h-3 bg-gray-800/50 rounded overflow-hidden`,
                        children: (0, Z.jsx)(`div`, {
                          className: `h-full bg-cyan-500/60 rounded`,
                          style: { width: `100%` },
                        }),
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-gray-400 text-[10px] w-14 text-right shrink-0`,
                        children: s1(t),
                      }),
                    ],
                  }),
                e.map((e) => {
                  let n = t
                      ? Math.max(2, (e.vertices / t) * 100)
                      : Math.max(2, (e.vertices / v) * 100),
                    r = Math.max(0.2, 1 - (e.level - 1) * 0.2);
                  return (0, Z.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, Z.jsxs)(`span`, {
                          className: `text-cyan-400 font-mono text-[10px] w-8 shrink-0`,
                          children: [`LOD`, e.level],
                        }),
                        (0, Z.jsx)(`div`, {
                          className: `flex-1 h-3 bg-gray-800/50 rounded overflow-hidden`,
                          children: (0, Z.jsx)(`div`, {
                            className: `h-full bg-cyan-500 rounded`,
                            style: { width: `${n}%`, opacity: r },
                          }),
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-400 text-[10px] w-14 text-right shrink-0`,
                          children: s1(e.vertices),
                        }),
                      ],
                    },
                    e.level,
                  );
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: `space-y-1`,
              children: e.map((e, t) => {
                let n = a === e.level;
                return (0, Z.jsxs)(
                  `div`,
                  {
                    className: `flex items-center gap-1.5 px-2 py-1 rounded text-[10px] ${n ? `bg-cyan-500/15 border border-cyan-500/30` : `bg-gray-700/20`}`,
                    children: [
                      o &&
                        (0, Z.jsx)(`button`, {
                          onClick: () => o(n ? null : e.level),
                          className: `w-4 h-4 flex items-center justify-center rounded shrink-0 ${n ? `text-cyan-400` : `text-gray-600 hover:text-gray-400`}`,
                          title: n
                            ? `Back to original`
                            : `Preview LOD${e.level}`,
                          children: (0, Z.jsx)(ui, { className: `h-3 w-3` }),
                        }),
                      (0, Z.jsxs)(`span`, {
                        className: `text-cyan-400 font-mono w-8 shrink-0`,
                        children: [`LOD`, e.level],
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `text-gray-500 w-7 shrink-0`,
                        children: [Math.round(e.percentage * 100), `%`],
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-gray-400 w-12 shrink-0 text-right`,
                        children: o1(e.size_bytes),
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-gray-600 mx-1`,
                        children: `|`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-gray-500 text-[9px] shrink-0`,
                        children: `screen ≥`,
                      }),
                      (0, Z.jsx)(`input`, {
                        type: `number`,
                        value: Number((f[t] ?? e.screen_pct).toFixed(2)),
                        onChange: (e) =>
                          _(t, parseFloat(e.target.value) || 0.01),
                        step: 0.01,
                        min: 0.01,
                        max: 1,
                        className: `w-10 h-4 bg-gray-800/50 border border-gray-700/50 rounded px-1 text-[10px] text-gray-300
                    focus:outline-none focus:border-purple-500/50 [appearance:textfield]
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
                      }),
                    ],
                  },
                  e.level,
                );
              }),
            }),
            t != null &&
              (0, Z.jsxs)(`div`, {
                className: `mt-2 px-2 py-1 rounded bg-cyan-500/5 text-[10px] text-gray-500`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-cyan-400`,
                    children: s1(t),
                  }),
                  ` verts`,
                  ` → `,
                  (0, Z.jsx)(`span`, {
                    className: `text-cyan-400`,
                    children: s1(b),
                  }),
                  ` lowest`,
                  S &&
                    (0, Z.jsxs)(`span`, {
                      className: `text-gray-600`,
                      children: [` (`, S, `% reduction)`],
                    }),
                  y > 0 &&
                    (0, Z.jsxs)(`span`, {
                      className: `text-gray-600`,
                      children: [` · LODs total: `, o1(y)],
                    }),
                ],
              }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `p-3 border-b border-gray-700/50`,
        children: [
          (0, Z.jsxs)(`button`, {
            onClick: () => l(!c),
            className: `flex items-center gap-1 text-[10px] uppercase tracking-wider text-gray-500 font-semibold w-full`,
            children: [
              c
                ? (0, Z.jsx)(ti, { className: `h-3 w-3` })
                : (0, Z.jsx)(De, { className: `h-3 w-3` }),
              `Settings`,
            ],
          }),
          c &&
            (0, Z.jsxs)(`div`, {
              className: `mt-2 space-y-2`,
              children: [
                (0, Z.jsx)(`div`, {
                  className: `flex gap-1`,
                  children: Object.keys(a1).map((e) =>
                    (0, Z.jsx)(
                      `button`,
                      {
                        onClick: () => h(e),
                        className: `flex-1 h-5 text-[9px] rounded border transition-colors ${JSON.stringify(u) === JSON.stringify(a1[e]) ? `border-cyan-500/50 text-cyan-400 bg-cyan-500/10` : `border-gray-700/50 text-gray-500 hover:border-gray-600`}`,
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, Z.jsxs)(`div`, {
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-500`,
                      children: `Simplification percentages`,
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `flex gap-1 mt-0.5`,
                      children: u.map((e, t) =>
                        (0, Z.jsxs)(
                          `div`,
                          {
                            className: `flex-1 flex items-center gap-0.5`,
                            children: [
                              (0, Z.jsxs)(`span`, {
                                className: `text-[9px] text-gray-600 font-mono`,
                                children: [`L`, t + 1],
                              }),
                              (0, Z.jsx)(`input`, {
                                type: `number`,
                                value: Number(e.toFixed(2)),
                                onChange: (e) =>
                                  g(t, parseFloat(e.target.value) || 0.01),
                                step: 0.05,
                                min: 0.01,
                                max: 1,
                                className: `w-full h-5 bg-gray-800/50 border border-gray-700/50 rounded px-1 text-[10px] text-gray-300
                        focus:outline-none focus:border-purple-500/50 [appearance:textfield]
                        [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `p-3`,
        children: (0, Z.jsx)(x, {
          size: `sm`,
          variant: `outline`,
          className: `w-full h-7 text-xs`,
          onClick: m,
          disabled: !i || r,
          children: r
            ? (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(J, { className: `h-3 w-3 mr-1 animate-spin` }),
                  `Generating...`,
                ],
              })
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(B, { className: `h-3 w-3 mr-1` }),
                  s ? `Regenerate LODs` : `Generate LODs`,
                ],
              }),
        }),
      }),
      !s &&
        !r &&
        (0, Z.jsxs)(`div`, {
          className: `p-3 text-center`,
          children: [
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-gray-600`,
              children: `No LOD meshes generated yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-gray-600 mt-0.5`,
              children: `Generate to create optimized variants for rendering.`,
            }),
          ],
        }),
    ],
  });
}
function l1({ isOpen: e, onClose: t, imageUrl: n, assetName: r }) {
  return (0, Z.jsx)(no, {
    open: e,
    onOpenChange: (e) => {
      e || t();
    },
    children: (0, Z.jsxs)($a, {
      className: `max-w-[90vw] max-h-[90vh] w-auto p-2 bg-black/95 border-gray-700`,
      children: [
        (0, Z.jsx)(eo, {
          className: `sr-only`,
          children: r ? `${r} concept art` : `Concept Art`,
        }),
        (0, Z.jsx)(`img`, {
          src: n,
          alt: r ? `${r} concept art` : `Concept art`,
          className: `max-w-full max-h-[85vh] object-contain mx-auto rounded`,
        }),
        r &&
          (0, Z.jsx)(`p`, {
            className: `text-center text-xs text-gray-400 mt-1`,
            children: r.replace(/_/g, ` `),
          }),
      ],
    }),
  });
}
