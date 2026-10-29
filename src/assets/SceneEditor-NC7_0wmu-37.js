// SceneEditor-NC7_0wmu 37 — numedits
// Lines 24047-24102 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Ap(e, t, n, r) {
  return new Ml({
    inTypes: {
      gsplat: Wu,
      sdfArray: Dp,
      numEdits: `int`,
      rgbaDisplaceEdits: `uvec4`,
    },
    outTypes: { gsplat: Wu },
    globals: () => [Op, kp],
    inputs: { gsplat: e, sdfArray: t, numEdits: n, rgbaDisplaceEdits: r },
    statements: ({ inputs: e, outputs: t }) => {
      let { sdfArray: n, numEdits: r, rgbaDisplaceEdits: i } = e,
        { gsplat: a } = t;
      return Ll(`
        ${a} = ${e.gsplat};
        if (isGsplatActive(${a}.flags)) {
          for (int editIndex = 0; editIndex < ${r}; ++editIndex) {
            applyPackedRgbaDisplaceEdit(
              ${i}[editIndex], ${n}.sdfTexture, ${n}.numSdfs,
              ${a}.center, ${a}.rgba
            );
          }
        }
      `);
    },
  }).outputs.gsplat;
}
function jp(e, t, n, r) {
  return new Ml({
    inTypes: {
      covsplat: Gu,
      sdfArray: Dp,
      numEdits: `int`,
      rgbaDisplaceEdits: `uvec4`,
    },
    outTypes: { covsplat: Gu },
    globals: () => [Op, kp],
    inputs: { covsplat: e, sdfArray: t, numEdits: n, rgbaDisplaceEdits: r },
    statements: ({ inputs: e, outputs: t }) => {
      let { sdfArray: n, numEdits: r, rgbaDisplaceEdits: i } = e,
        { covsplat: a } = t;
      return Ll(`
        ${a} = ${e.covsplat};
        if (isCovSplatActive(${a}.flags)) {
          for (int editIndex = 0; editIndex < ${r}; ++editIndex) {
            applyPackedRgbaDisplaceEdit(
              ${i}[editIndex], ${n}.sdfTexture, ${n}.numSdfs,
              ${a}.center, ${a}.rgba
            );
          }
        }
      `);
    },
  }).outputs.covsplat;
}
