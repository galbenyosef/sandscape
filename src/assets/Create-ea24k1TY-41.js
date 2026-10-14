// Create-ea24k1TY 41 — classname
// Lines 13266-13551 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function hf({
  asset: e,
  sessionId: t,
  sessionDir: n,
  generatingAssetNames: r,
  onRename: i,
  onDescribe: a,
  onBodyPlanChange: o,
  onRequestDelete: s,
  onOpenEditor: c,
  onClose: l,
}) {
  let [u, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(!1),
    m = jl(e.asset_type),
    h = e.id || e.asset_name,
    g = We[e.asset_type],
    _ = ef(e.asset_type),
    v = pf(e.asset_type, e),
    y = Qd(e, r),
    b = y === `generating`,
    S = g?.firstOp ?? `concept_art`,
    C = rn(S, t, _ ? h : null),
    w = g?.followUps ?? [],
    T = {
      character_creation: rn(
        `character_creation`,
        t,
        w.includes(`character_creation`) ? h : null,
      ),
      model_3d: rn(`model_3d`, t, w.includes(`model_3d`) ? h : null),
      collision: rn(`collision`, t, w.includes(`collision`) ? h : null),
      lod: rn(`lod`, t, w.includes(`lod`) ? h : null),
      segment: rn(`segment`, t, w.includes(`segment`) ? h : null),
    },
    E = e.concept_art_path
      ? jr.getAssetUrl(n, e.concept_art_path, { version: e.modified })
      : null,
    D = e.model_3d_path
      ? jr.getAssetUrl(n, e.model_3d_path, { version: e.modified })
      : null,
    O = e.audio_path || e.sfx_path,
    k = O ? jr.getAssetUrl(n, O, { version: e.modified }) : null,
    A = async (e) => {
      d(null);
      let n = await Fn(t, h, e);
      n.success || d(n.error || `Generation could not start`);
    },
    j = async (e) => {
      (d(null), p(!0));
      try {
        await o(h, e);
      } catch (e) {
        d(e instanceof Error ? e.message : `Could not change the body plan`);
      } finally {
        p(!1);
      }
    };
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full min-w-0`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between px-3 py-2 border-b border-border`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-sm font-semibold text-foreground/90 truncate`,
            children: `Details`,
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: l,
            className: `p-1 rounded hover:bg-secondary/50 text-muted-foreground`,
            children: (0, Z.jsx)(li, { className: `w-4 h-4` }),
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex-1 overflow-y-auto p-3 space-y-4`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `aspect-square w-full rounded-lg overflow-hidden bg-secondary/40 flex items-center justify-center`,
            style: { color: m.color },
            children: E
              ? (0, Z.jsx)(`img`, {
                  src: E,
                  alt: e.asset_name,
                  className: `w-full h-full object-contain`,
                })
              : D
                ? (0, Z.jsx)(xl, { modelUrl: D, isModal: !1 })
                : (0, Z.jsx)(m.icon, { className: `w-12 h-12 opacity-70` }),
          }),
          k &&
            (0, Z.jsx)(`audio`, {
              controls: !0,
              className: `w-full h-9`,
              src: k,
              preload: `none`,
              children: `Your browser does not support the audio element.`,
            }),
          (0, Z.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `text-[10px] uppercase tracking-wider text-muted-foreground/60`,
                    children: `Name`,
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `text-sm text-foreground/90`,
                    children: (0, Z.jsx)(Ol, {
                      value: e.asset_name,
                      onSave: (e) => i(h, e),
                    }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `min-w-0`,
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `text-[10px] uppercase tracking-wider text-muted-foreground/60`,
                    children: `Description`,
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `text-sm text-foreground/70 break-words min-w-0`,
                    children: (0, Z.jsx)(Ol, {
                      value: e.description || ``,
                      onSave: (e) => a(h, e),
                      placeholder: `Describe this asset`,
                      isMultiline: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: `Type`,
              }),
              (0, Z.jsx)(`span`, {
                className: `text-foreground/80 text-right break-words min-w-0`,
                children: rf(e.asset_type),
              }),
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: `Group`,
              }),
              (0, Z.jsx)(`span`, {
                className: `text-foreground/80 text-right break-words min-w-0`,
                children: m.label,
              }),
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: `Status`,
              }),
              (0, Z.jsx)(`span`, {
                className: `text-foreground/80 text-right capitalize break-words min-w-0`,
                children: y,
              }),
              nf(e.asset_type) &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-muted-foreground`,
                      children: `Body plan`,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-right min-w-0`,
                      children: (0, Z.jsx)(ff, {
                        asset: e,
                        onChange: (e) => void j(e),
                        saving: f,
                      }),
                    }),
                  ],
                }),
              e.format &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-muted-foreground`,
                      children: `Format`,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-foreground/80 text-right uppercase break-words min-w-0`,
                      children: e.format,
                    }),
                  ],
                }),
              e.size_human &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-muted-foreground`,
                      children: `Size`,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-foreground/80 text-right break-words min-w-0`,
                      children: e.size_human,
                    }),
                  ],
                }),
            ],
          }),
          u &&
            (0, Z.jsx)(`div`, {
              className: `text-[11px] text-red-300 bg-red-950/40 border border-red-700/30 rounded px-2 py-1.5`,
              children: u,
            }),
          (0, Z.jsxs)(`div`, {
            className: `space-y-2 pt-2 border-t border-border`,
            children: [
              _ &&
                (0, Z.jsx)(an, {
                  onClick: () => A(S),
                  className: `w-full`,
                  cost: C,
                  label: y === `done` ? `Regenerate` : `Generate`,
                  icon:
                    y === `done`
                      ? (0, Z.jsx)(xn, { className: `h-4 w-4` })
                      : (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
                  isLoading: b,
                  loadingText: `Generating…`,
                  checkBalance: !0,
                }),
              w.length > 0 &&
                (0, Z.jsx)(`div`, {
                  className: `grid grid-cols-2 gap-2`,
                  children: w.map((e) => {
                    let t = mf[e];
                    if (!t) return null;
                    let n = t.icon;
                    return (0, Z.jsx)(
                      an,
                      {
                        variant: `outline`,
                        size: `sm`,
                        onClick: () => A(e),
                        className: `w-full`,
                        cost: T[e] ?? null,
                        label: t.label,
                        icon: (0, Z.jsx)(n, { className: `h-3.5 w-3.5` }),
                        checkBalance: !0,
                      },
                      e,
                    );
                  }),
                }),
              v &&
                c &&
                (0, Z.jsxs)(x, {
                  variant: `ghost`,
                  className: `w-full`,
                  onClick: () => c(v, h),
                  children: [
                    (0, Z.jsx)(Zt, { className: `h-4 w-4 mr-1.5` }),
                    `Open in editor`,
                  ],
                }),
              (0, Z.jsxs)(x, {
                variant: `ghost`,
                className: `w-full text-red-400 hover:text-red-300 hover:bg-red-500/10`,
                onClick: () => s(e),
                children: [
                  (0, Z.jsx)(qr, { className: `h-4 w-4 mr-1.5` }),
                  `Delete`,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gf(e) {
  let t = We[e]?.firstOp;
  return ln(on(t ? (Hn[t]?.actionId ?? ``) : ``));
}
