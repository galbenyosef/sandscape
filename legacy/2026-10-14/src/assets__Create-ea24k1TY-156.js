// assets__Create-ea24k1TY 156 — classname
// Lines 51964-52075 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var tH = ({
  asset: e,
  audioKind: t,
  assetId: n,
  sessionId: r,
  audioUrl: i,
  isGenerating: a,
  onGenerate: o,
}) => {
  let s = e.hasAudio,
    c = t === `sfx`,
    l = rn(Rn(e.asset_type), r, n, { regenerate: !0 }),
    u = e.id || e.asset_name || e.name || ``,
    d = (e.asset_name || e.name || `Audio`).replace(/_/g, ` `),
    { dragProps: f } = Ce({
      kind: `audio-asset`,
      payload: { id: u, asset_type: e.asset_type },
      disabled: !s,
      preview: (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
        children: [
          c
            ? (0, Z.jsx)(kn, { className: `h-3 w-3 text-cyan-300` })
            : (0, Z.jsx)(jt, { className: `h-3 w-3 text-primary` }),
          (0, Z.jsx)(`span`, {
            className: `truncate max-w-[160px]`,
            children: d,
          }),
        ],
      }),
    });
  return (0, Z.jsxs)(`div`, {
    ...(s ? f : {}),
    title: s ? `Drag onto a mixer track` : void 0,
    className: `p-3 rounded-lg border transition-all duration-200 ${s ? `border-border bg-secondary/30 cursor-grab` : `border-dashed border-border/50 bg-card`}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 mb-1`,
        children: [
          c
            ? (0, Z.jsxs)(`span`, {
                className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-cyan-500/15 text-cyan-300`,
                children: [(0, Z.jsx)(kn, { className: `h-2.5 w-2.5` }), `SFX`],
              })
            : (0, Z.jsxs)(`span`, {
                className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/15 text-primary`,
                children: [
                  (0, Z.jsx)(jt, { className: `h-2.5 w-2.5` }),
                  `Music`,
                ],
              }),
          (0, Z.jsx)(`span`, {
            className: `text-sm text-foreground/80 font-medium flex-1 truncate`,
            children: e.asset_name?.replace(/_/g, ` `),
          }),
          s
            ? (0, Z.jsx)(`div`, {
                className: `w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center`,
                children: (0, Z.jsx)(ve, {
                  className: `h-3 w-3 text-green-400`,
                }),
              })
            : (0, Z.jsx)(`div`, {
                className: `w-5 h-5 rounded-full border border-dashed border-border flex items-center justify-center`,
                children: a
                  ? (0, Z.jsx)(J, {
                      className: `h-3 w-3 text-primary animate-spin`,
                    })
                  : (0, Z.jsx)(Et, {
                      className: `h-2.5 w-2.5 text-muted-foreground/40`,
                    }),
              }),
        ],
      }),
      e.description &&
        (0, Z.jsx)(`p`, {
          className: `text-xs text-muted-foreground/60 line-clamp-2 mb-2 ml-0.5`,
          children: e.description,
        }),
      s &&
        i &&
        (0, Z.jsx)(`div`, {
          className: `mt-2 mb-2`,
          children: (0, Z.jsx)(`audio`, {
            controls: !0,
            className: `w-full h-8`,
            src: i,
            preload: `none`,
            children: `Your browser does not support the audio element.`,
          }),
        }),
      (0, Z.jsx)(`div`, {
        className: `mt-2`,
        children: (0, Z.jsx)(uu, {
          label: s ? `Regenerate` : `Generate Audio`,
          cost: l,
          icon: s
            ? (0, Z.jsx)(xn, { className: `h-3 w-3 mr-1` })
            : (0, Z.jsx)(Yr, { className: `h-3 w-3 mr-1` }),
          onGenerate: (t) => o(e, t),
          isGenerating: a,
          size: `sm`,
          variant: s ? `ghost` : `outline`,
          className: `w-full`,
          placeholder: c
            ? `e.g., Make it punchier, shorter`
            : `e.g., More upbeat, faster`,
        }),
      }),
    ],
  });
};
