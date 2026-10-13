// assets__Create-ea24k1TY 130 — label
// Lines 43865-43899 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function yI({ sessionDir: e }) {
  return (0, Z.jsx)(vI, { sessionDir: e });
}
function bI(e) {
  return e > 0
    ? { redrawing: !0, label: `Redraw All`, params: { regenerate: !0 } }
    : { redrawing: !1, label: `Draw All Characters`, params: {} };
}
var xI = Object.freeze({ missing_only: !0 }),
  SI = `character_concept_redraw`;
function CI({
  actionId: e,
  sessionId: t,
  target: n,
  label: r,
  icon: i,
  variant: a,
  disabled: o,
  isGenerating: s,
  onGenerate: c,
  placeholder: l,
}) {
  return (0, Z.jsx)(uu, {
    label: r,
    cost: fn(e, t, { target: n, regenerate: !0 }),
    icon: i,
    onGenerate: c,
    disabled: o,
    isGenerating: s,
    size: `default`,
    variant: a,
    className: `w-full`,
    placeholder: l,
  });
}
