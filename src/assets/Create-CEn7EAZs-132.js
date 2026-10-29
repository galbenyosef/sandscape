// Create-CEn7EAZs 132 — label
// Lines 44638-44672 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function FI({ sessionDir: e }) {
  return (0, Z.jsx)(PI, { sessionDir: e });
}
function II(e) {
  return e > 0
    ? { redrawing: !0, label: `Redraw All`, params: { regenerate: !0 } }
    : { redrawing: !1, label: `Draw All Characters`, params: {} };
}
var LI = Object.freeze({ missing_only: !0 }),
  RI = `character_concept_redraw`;
function zI({
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
  return (0, Z.jsx)(Bu, {
    label: r,
    cost: za(e, t, { target: n, regenerate: !0 }),
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
