// Create-ea24k1TY 132 — classname
// Lines 44375-44401 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function TI({
  actionId: e,
  sessionId: t,
  assetName: n,
  riggable: r,
  disabled: i,
  isGenerating: a,
  onGenerate: o,
}) {
  let s = fn(e, t, { target: n });
  return (0, Z.jsx)(an, {
    label: r ? `Rig` : `Mesh`,
    cost: s,
    icon: (0, Z.jsx)(Yr, { className: `w-3 h-3 mr-1` }),
    onClick: o,
    disabled: i,
    isLoading: a,
    loadingText: `Working...`,
    checkBalance: !0,
    size: `sm`,
    variant: `outline`,
    className: `text-[10px] h-7`,
    tooltip: r
      ? `Auto-rig this biped from its character concept`
      : `Mesh this creature from its character concept (no rig)`,
  });
}
