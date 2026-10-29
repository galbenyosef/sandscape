// Create-ea24k1TY 152 — children
// Lines 50802-51038 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function WV(e) {
  if (!e) return [];
  let t = [];
  (e.ik_keys?.length && t.push(`IK controllers`),
    e.muted_bones?.length && t.push(`erased bones`));
  let n = e.foot_lock;
  ((n?.keys?.length || n?.left?.enabled || n?.right?.enabled) &&
    t.push(`foot lock`),
    e.bone_offsets?.some((e) => {
      let t = e.position?.some((e) => e !== 0),
        n = e.scale?.some((e) => e !== 1);
      return t || n;
    }) && t.push(`bone moves`));
  let r = e.limb_stabilize;
  return (
    (r?.knees?.enabled || r?.elbows?.enabled) && t.push(`limb smoothing`),
    t
  );
}
function GV(e, t) {
  return [
    ...(e?.characters ?? []).flatMap((e) => {
      let n = t.find(
          (t) => t.id === e.asset_id || t.asset_name === e.asset_name,
        ),
        r = e.asset_name || n?.asset_name || `Character`;
      return (e.animations || []).map((t) => ({
        key: `${n?.id || e.asset_id}:${t.animation_id}`,
        assetId: n?.id || e.asset_id,
        character: r,
        modelPath: n?.rigged_model_path || void 0,
        imagePath: n?.tpose_image_path || n?.concept_art_path || void 0,
        animation: t,
      }));
    }),
    ...(e?.library ?? []).map((e) => ({
      key: `library:${e.animation_id}`,
      assetId: null,
      character: `Animation library`,
      animation: e,
    })),
  ];
}
function KV({
  clip: e,
  sessionDir: t,
  busy: n,
  disabled: r,
  onSave: i,
  onBake: a,
  onBack: o,
}) {
  let [s, c] = (0, X.useState)(`${e.animation.name} edit`),
    [l, u] = (0, X.useState)(e.animation.duration_sec ?? 0),
    [d, f] = (0, X.useState)([0, l]),
    [p, m] = (0, X.useState)(e.animation.loop ?? !1),
    [h, g] = (0, X.useState)(`keep`),
    _ = e.animation.baked_animation_path || e.animation.animation_path,
    v = n || r,
    y = WV(e.animation.animation_state);
  return (0, Z.jsxs)(`div`, {
    className: `motion-clip-editor`,
    children: [
      (0, Z.jsxs)(`button`, {
        className: `motion-back`,
        onClick: o,
        disabled: n,
        children: [(0, Z.jsx)(q, { size: 16 }), ` All animations`],
      }),
      (0, Z.jsxs)(`div`, {
        className: `motion-clip-heading`,
        children: [
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`h3`, { children: e.animation.name }),
              (0, Z.jsx)(`p`, { children: e.character.replace(/_/g, ` `) }),
            ],
          }),
          (0, Z.jsx)(Uo, { size: 20 }),
        ],
      }),
      e.animation.bake_stale
        ? (0, Z.jsx)(`div`, {
            className: `motion-notice`,
            children:
              y.length > 0
                ? (0, Z.jsxs)(`p`, {
                    children: [
                      `This animation has unapplied `,
                      y.join(`, `),
                      ` from the Animation Editor. Only that editor can bake `,
                      y.length === 1 ? `it` : `them`,
                      ` — open the clip there and press `,
                      (0, Z.jsx)(`strong`, { children: `Apply` }),
                      `, then come back to preview and cut it here.`,
                    ],
                  })
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(`p`, {
                        children: `This animation has pending output from the Animation Editor. Prepare it to preview and edit the latest version here.`,
                      }),
                      (0, Z.jsxs)(`button`, {
                        className: `motion-button`,
                        disabled: v || !e.assetId,
                        onClick: () =>
                          e.assetId &&
                          void a(e.assetId, e.animation.animation_id),
                        children: [
                          n &&
                            (0, Z.jsx)(J, {
                              size: 16,
                              className: `animate-spin`,
                            }),
                          ` Prepare latest edits`,
                        ],
                      }),
                    ],
                  }),
          })
        : (0, Z.jsxs)(Z.Fragment, {
            children: [
              _ &&
                (0, Z.jsx)(BV, {
                  animationUrl: jr.getAssetUrl(t, _),
                  modelUrl: e.modelPath
                    ? jr.getAssetUrl(t, e.modelPath)
                    : void 0,
                  range: d,
                  loop: p,
                  rootMotion: h,
                  onDuration: (e) => {
                    (u(e), f([0, e]));
                  },
                }),
              (0, Z.jsx)(jV, {
                duration: l,
                value: d,
                onChange: f,
                disabled: v,
                label: `Animation in / out`,
              }),
              (0, Z.jsxs)(`div`, {
                className: `motion-options`,
                children: [
                  (0, Z.jsxs)(`label`, {
                    className: `motion-toggle-row`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        children: (0, Z.jsx)(`strong`, {
                          children: `Loop animation`,
                        }),
                      }),
                      (0, Z.jsx)(`input`, {
                        type: `checkbox`,
                        checked: p,
                        disabled: v,
                        onChange: (e) => m(e.target.checked),
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `motion-toggle`,
                        "aria-hidden": `true`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`label`, {
                    className: `motion-option-label`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        children: (0, Z.jsx)(`strong`, {
                          children: `Root motion`,
                        }),
                      }),
                      (0, Z.jsxs)(`select`, {
                        value: h,
                        disabled: v,
                        onChange: (e) => g(e.target.value),
                        "aria-label": `Root motion`,
                        children: [
                          (0, Z.jsx)(`option`, {
                            value: `keep`,
                            children: `Keep motion`,
                          }),
                          (0, Z.jsx)(`option`, {
                            value: `horizontal`,
                            children: `In place · keep jumps`,
                          }),
                          (0, Z.jsx)(`option`, {
                            value: `all`,
                            children: `Remove all travel`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, {
                className: `motion-form`,
                children: (0, Z.jsxs)(`label`, {
                  children: [
                    `Save animation as`,
                    (0, Z.jsx)(`input`, {
                      value: s,
                      maxLength: 200,
                      onChange: (e) => c(e.target.value),
                      disabled: v,
                    }),
                  ],
                }),
              }),
              (0, Z.jsxs)(`button`, {
                className: `motion-button motion-button-primary motion-submit`,
                disabled: v || !s.trim() || l <= 0 || d[1] <= d[0],
                onClick: () =>
                  void i({
                    animation_id: e.animation.animation_id,
                    asset_id: e.assetId,
                    name: s.trim(),
                    in_sec: d[0],
                    out_sec: d[1],
                    loop: p,
                    root_motion: h,
                  }),
                children: [
                  n
                    ? (0, Z.jsx)(J, { size: 17, className: `animate-spin` })
                    : (0, Z.jsx)(ve, { size: 17 }),
                  ` `,
                  n ? `Saving clip…` : `Save edited copy`,
                ],
              }),
            ],
          }),
    ],
  });
}
