// Create-CEn7EAZs 206 — classname
// Lines 69959-70271 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Jle({
  hasModel: e,
  hasSegments: t,
  isGenerating: n,
  onGenerate: r,
  editActive: i,
  onToggleEdit: a,
  parts: o,
  selectedPart: s,
  onSelectPart: c,
  hiddenParts: l,
  onToggleVisibility: u,
  gizmoMode: d,
  onGizmoMode: f,
  selectedTransform: p,
  onAxisChange: m,
  isDirty: h,
  isSaving: g,
  onSave: _,
}) {
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col bg-[#1a1625]`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `p-3 border-b border-gray-700/50`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between mb-2`,
            children: [
              (0, Z.jsxs)(`h5`, {
                className: `text-[10px] uppercase tracking-wider text-gray-500 font-semibold`,
                children: [
                  (0, Z.jsx)(Ms, { className: `h-3 w-3 inline mr-1` }),
                  `Segmentation`,
                ],
              }),
              (0, Z.jsx)(`span`, {
                className: `text-[9px] text-gray-600`,
                children: `15 coins`,
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[10px] text-gray-500 mb-2`,
            children: `Split the model into semantic parts (e.g. wheels, body) so you can move them individually.`,
          }),
          (0, Z.jsx)(S, {
            size: `sm`,
            variant: `outline`,
            className: `w-full h-7 text-xs`,
            onClick: r,
            disabled: !e || n,
            children: n
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(J, { className: `h-3 w-3 mr-1 animate-spin` }),
                    `Segmenting...`,
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(Ms, { className: `h-3 w-3 mr-1` }),
                    t ? `Re-segment Mesh` : `Segment Mesh`,
                  ],
                }),
          }),
        ],
      }),
      t &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`div`, {
              className: `p-3 border-b border-gray-700/50`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between mb-2`,
                  children: [
                    (0, Z.jsxs)(`h5`, {
                      className: `text-[10px] uppercase tracking-wider text-gray-500 font-semibold`,
                      children: [
                        `Parts `,
                        o.length > 0 &&
                          (0, Z.jsxs)(`span`, {
                            className: `text-gray-600`,
                            children: [`(`, o.length, `)`],
                          }),
                      ],
                    }),
                    (0, Z.jsx)(S, {
                      size: `sm`,
                      variant: i ? `default` : `outline`,
                      className: `h-6 px-2 text-[10px]`,
                      onClick: a,
                      children: i ? `Done` : `Edit Parts`,
                    }),
                  ],
                }),
                i
                  ? o.length === 0
                    ? (0, Z.jsx)(`p`, {
                        className: `text-[10px] text-gray-600`,
                        children: `Loading parts…`,
                      })
                    : (0, Z.jsx)(`div`, {
                        className: `space-y-0.5`,
                        children: o.map((e) => {
                          let t = e === s,
                            n = l.has(e);
                          return (0, Z.jsxs)(
                            `div`,
                            {
                              className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-xs transition-colors ${t ? `bg-purple-600/20 border border-purple-500/40` : `hover:bg-gray-700/30 border border-transparent`}`,
                              onClick: () => c(t ? null : e),
                              children: [
                                (0, Z.jsx)(`span`, {
                                  className: `flex-1 truncate ${t ? `text-purple-300` : `text-gray-300`}`,
                                  children: e,
                                }),
                                (0, Z.jsx)(`button`, {
                                  onClick: (t) => {
                                    (t.stopPropagation(), u(e));
                                  },
                                  className: `p-0.5 ${n ? `text-gray-600` : `text-gray-400 hover:text-white`}`,
                                  title: n ? `Show part` : `Hide part`,
                                  children: n
                                    ? (0, Z.jsx)(G, { className: `h-3 w-3` })
                                    : (0, Z.jsx)(Yr, { className: `h-3 w-3` }),
                                }),
                              ],
                            },
                            e,
                          );
                        }),
                      })
                  : (0, Z.jsxs)(`p`, {
                      className: `text-[10px] text-gray-500`,
                      children: [
                        `Click `,
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-300`,
                          children: `Edit Parts`,
                        }),
                        ` to load the decomposed model and arrange its parts.`,
                      ],
                    }),
              ],
            }),
            i &&
              s &&
              p &&
              (0, Z.jsxs)(`div`, {
                className: `p-3 border-b border-gray-700/50`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center justify-between mb-2`,
                    children: [
                      (0, Z.jsx)(`h5`, {
                        className: `text-[10px] uppercase tracking-wider text-gray-500 font-semibold truncate`,
                        children: s,
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `flex gap-0.5`,
                        children: [
                          (0, Z.jsx)(m1, {
                            mode: `translate`,
                            active: d === `translate`,
                            onClick: () => f(`translate`),
                            icon: (0, Z.jsx)(ce, { className: `h-3 w-3` }),
                            title: `Move`,
                          }),
                          (0, Z.jsx)(m1, {
                            mode: `rotate`,
                            active: d === `rotate`,
                            onClick: () => f(`rotate`),
                            icon: (0, Z.jsx)(D, { className: `h-3 w-3` }),
                            title: `Rotate`,
                          }),
                          (0, Z.jsx)(m1, {
                            mode: `scale`,
                            active: d === `scale`,
                            onClick: () => f(`scale`),
                            icon: (0, Z.jsx)(gs, { className: `h-3 w-3` }),
                            title: `Scale`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsx)(h1, {
                    label: `Position`,
                    values: p.position,
                    onChange: (e, t) => m(`position`, e, t),
                    step: 0.05,
                  }),
                  (0, Z.jsx)(h1, {
                    label: `Rotation`,
                    values: p.rotation,
                    onChange: (e, t) => m(`rotation`, e, t),
                    step: 15,
                  }),
                  (0, Z.jsx)(h1, {
                    label: `Scale`,
                    values: p.scale,
                    onChange: (e, t) => m(`scale`, e, t),
                    step: 0.05,
                    min: 0.01,
                  }),
                ],
              }),
            i &&
              (0, Z.jsxs)(`div`, {
                className: `p-3 border-b border-gray-700/50`,
                children: [
                  (0, Z.jsx)(S, {
                    size: `sm`,
                    variant: `outline`,
                    className: `w-full h-7 text-xs`,
                    onClick: _,
                    disabled: !h || g,
                    children: g
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(J, {
                              className: `h-3 w-3 mr-1 animate-spin`,
                            }),
                            `Saving...`,
                          ],
                        })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(As, { className: `h-3 w-3 mr-1` }),
                            `Save arrangement`,
                          ],
                        }),
                  }),
                  !h &&
                    (0, Z.jsx)(`p`, {
                      className: `text-[9px] text-gray-600 mt-1 text-center`,
                      children: `Move a part to enable saving.`,
                    }),
                ],
              }),
          ],
        }),
    ],
  });
}
function m1({ active: e, onClick: t, icon: n, title: r }) {
  return (0, Z.jsx)(`button`, {
    onClick: t,
    title: r,
    className: `w-5 h-5 rounded flex items-center justify-center ${e ? `bg-purple-500 text-white` : `bg-gray-700 text-gray-400 hover:text-white`}`,
    children: n,
  });
}
function h1({ label: e, values: t, onChange: n, step: r = 0.1, min: i }) {
  let a = [`X`, `Y`, `Z`],
    o = [`text-red-400`, `text-green-400`, `text-blue-400`];
  return (0, Z.jsxs)(`div`, {
    className: `mb-2`,
    children: [
      (0, Z.jsx)(`span`, {
        className: `text-[10px] text-gray-500`,
        children: e,
      }),
      (0, Z.jsx)(`div`, {
        className: `flex gap-1 mt-0.5`,
        children: a.map((e, a) =>
          (0, Z.jsxs)(
            `div`,
            {
              className: `flex-1 flex items-center gap-0.5`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[9px] font-mono ${o[a]}`,
                  children: e,
                }),
                (0, Z.jsx)(`input`, {
                  type: `number`,
                  value: Number(t[a].toFixed(2)),
                  onChange: (e) => n(a, parseFloat(e.target.value) || 0),
                  step: r,
                  min: i,
                  className: `w-full h-5 bg-gray-800/50 border border-gray-700/50 rounded px-1 text-[10px] text-gray-300
                focus:outline-none focus:border-purple-500/50 [appearance:textfield]
                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
                }),
              ],
            },
            e,
          ),
        ),
      }),
    ],
  });
}
var Yle = [0.75, 0.5, 0.25, 0.05],
  Xle = [0.5, 0.25, 0.12, 0.02],
  g1 = {
    Default: [0.75, 0.5, 0.25, 0.05],
    Aggressive: [0.5, 0.25, 0.1, 0.02],
    Conservative: [0.9, 0.75, 0.5, 0.25],
  };
function _1(e) {
  return e < 1024
    ? `${e} B`
    : e < 1024 * 1024
      ? `${(e / 1024).toFixed(1)} KB`
      : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function v1(e) {
  return e.toLocaleString();
}
