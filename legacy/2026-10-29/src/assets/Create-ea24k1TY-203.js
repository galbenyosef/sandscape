// Create-ea24k1TY 203 — classname
// Lines 68896-69175 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Q$({
  showComplexCollision: e,
  onToggleComplexCollision: t,
  hasComplexCollision: n,
  onGenerateComplex: r,
  isGeneratingComplex: i,
  showSimpleCollision: a,
  onToggleSimpleCollision: o,
  primitives: s,
  selectedPrimitiveId: c,
  onSelectPrimitive: l,
  onAddPrimitive: u,
  onUpdatePrimitive: d,
  onDeletePrimitive: f,
  hasModel: p,
}) {
  let m = (0, X.useCallback)(
      (e) => {
        u(Z$(e));
      },
      [u],
    ),
    h = c ? (s.find((e) => e.id === c) ?? null) : null,
    g = (0, X.useCallback)(
      (e, t, n) => {
        if (!h) return;
        let r = [...h[e]];
        ((r[t] = n), d(h.id, { [e]: r }));
      },
      [h, d],
    );
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
                  (0, Z.jsx)(pe, { className: `h-3 w-3 inline mr-1` }),
                  `Complex Collision`,
                ],
              }),
              (0, Z.jsx)(`button`, {
                onClick: t,
                className: `w-5 h-5 rounded flex items-center justify-center ${n ? (e ? `bg-cyan-500 text-white` : `bg-gray-700 text-gray-400`) : `bg-gray-800 text-gray-600 cursor-not-allowed`}`,
                disabled: !n,
                title: n
                  ? `Toggle complex collision visibility`
                  : `No complex collision mesh`,
                children:
                  e && n
                    ? (0, Z.jsx)(ui, { className: `h-3 w-3` })
                    : (0, Z.jsx)(K, { className: `h-3 w-3` }),
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[10px] text-gray-500 mb-2`,
            children: `Auto-generated convex hull from the 3D model.`,
          }),
          (0, Z.jsx)(x, {
            size: `sm`,
            variant: `outline`,
            className: `w-full h-7 text-xs`,
            onClick: r,
            disabled: !p || i,
            children: i
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(J, { className: `h-3 w-3 mr-1 animate-spin` }),
                    `Generating...`,
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(pe, { className: `h-3 w-3 mr-1` }),
                    n ? `Regenerate` : `Generate`,
                  ],
                }),
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `p-3 border-b border-gray-700/50`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between mb-2`,
            children: [
              (0, Z.jsxs)(`h5`, {
                className: `text-[10px] uppercase tracking-wider text-gray-500 font-semibold`,
                children: [
                  (0, Z.jsx)(Se, { className: `h-3 w-3 inline mr-1` }),
                  `Simple Collision`,
                ],
              }),
              (0, Z.jsx)(`button`, {
                onClick: o,
                className: `w-5 h-5 rounded flex items-center justify-center ${a ? `bg-green-500 text-white` : `bg-gray-700 text-gray-400`}`,
                title: `Toggle simple collision visibility`,
                children: a
                  ? (0, Z.jsx)(ui, { className: `h-3 w-3` })
                  : (0, Z.jsx)(K, { className: `h-3 w-3` }),
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[10px] text-gray-500 mb-2`,
            children: `Manual primitive shapes for physics boundaries.`,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex gap-1 mb-2`,
            children: [
              (0, Z.jsxs)(x, {
                size: `sm`,
                variant: `outline`,
                className: `flex-1 h-7 text-xs`,
                onClick: () => m(`sphere`),
                disabled: !p,
                title: `Add sphere collider`,
                children: [
                  (0, Z.jsx)(Se, { className: `h-3 w-3 mr-1` }),
                  `Sphere`,
                ],
              }),
              (0, Z.jsxs)(x, {
                size: `sm`,
                variant: `outline`,
                className: `flex-1 h-7 text-xs`,
                onClick: () => m(`box`),
                disabled: !p,
                title: `Add box collider`,
                children: [
                  (0, Z.jsx)(Zo, { className: `h-3 w-3 mr-1` }),
                  `Box`,
                ],
              }),
              (0, Z.jsxs)(x, {
                size: `sm`,
                variant: `outline`,
                className: `flex-1 h-7 text-xs`,
                onClick: () => m(`cylinder`),
                disabled: !p,
                title: `Add cylinder collider`,
                children: [
                  (0, Z.jsx)(ho, { className: `h-3 w-3 mr-1` }),
                  `Cylinder`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          s.length === 0
            ? (0, Z.jsxs)(`div`, {
                className: `p-3 text-center`,
                children: [
                  (0, Z.jsx)(`p`, {
                    className: `text-[10px] text-gray-600`,
                    children: `No primitives added yet.`,
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-[10px] text-gray-600 mt-0.5`,
                    children: `Use the buttons above to add collision shapes.`,
                  }),
                ],
              })
            : (0, Z.jsx)(`div`, {
                className: `p-2 space-y-0.5`,
                children: s.map((e) => {
                  let t = e.id === c,
                    n = e.type === `sphere` ? Se : e.type === `box` ? Zo : ho;
                  return (0, Z.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-xs transition-colors ${t ? `bg-green-600/20 border border-green-500/40` : `hover:bg-gray-700/30 border border-transparent`}`,
                      onClick: () => l(t ? null : e.id),
                      children: [
                        (0, Z.jsx)(n, {
                          className: `h-3 w-3 flex-shrink-0 ${t ? `text-green-400` : `text-gray-500`}`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `flex-1 text-gray-300 truncate`,
                          children: e.label || e.type,
                        }),
                        (0, Z.jsx)(`button`, {
                          onClick: (t) => {
                            (t.stopPropagation(), f(e.id));
                          },
                          className: `text-gray-600 hover:text-red-400 p-0.5`,
                          title: `Delete primitive`,
                          children: (0, Z.jsx)(qr, { className: `h-3 w-3` }),
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
          h &&
            (0, Z.jsxs)(`div`, {
              className: `p-3 border-t border-gray-700/50`,
              children: [
                (0, Z.jsxs)(`h5`, {
                  className: `text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2`,
                  children: [h.label || h.type, ` Properties`],
                }),
                (0, Z.jsx)($$, {
                  label: `Position`,
                  values: h.position,
                  onChange: (e, t) => g(`position`, e, t),
                  step: 0.1,
                }),
                (0, Z.jsx)($$, {
                  label: `Rotation`,
                  values: h.rotation,
                  onChange: (e, t) => g(`rotation`, e, t),
                  step: 15,
                }),
                (0, Z.jsx)($$, {
                  label: `Scale`,
                  values: h.scale,
                  onChange: (e, t) => g(`scale`, e, t),
                  step: 0.1,
                  min: 0.01,
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function $$({ label: e, values: t, onChange: n, step: r = 0.1, min: i }) {
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
