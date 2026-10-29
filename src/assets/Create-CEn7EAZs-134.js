// Create-CEn7EAZs 134 — classname
// Lines 45148-45174 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function VI({
  actionId: e,
  sessionId: t,
  assetName: n,
  riggable: r,
  disabled: i,
  isGenerating: a,
  onGenerate: o,
}) {
  let s = za(e, t, { target: n });
  return (0, Z.jsx)($t, {
    label: r ? `Rig` : `Mesh`,
    cost: s,
    icon: (0, Z.jsx)(Nr, { className: `w-3 h-3 mr-1` }),
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
