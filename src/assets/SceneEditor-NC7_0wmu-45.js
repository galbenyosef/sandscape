// SceneEditor-NC7_0wmu 45 — index
// Lines 27145-27209 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((Zp.staticInitialized = Zp.staticInitialize()),
  (Zp.isStaticInitialized = !1),
  (Zp.dynoTime = new Rd({ value: 0 })),
  (Zp.raycastBuffer = new Float32Array(1024)));
var Qp = Zp;
function $p(e, t, n, r, i) {
  return Fl({
    inTypes: {
      lodIndices: `usampler2D`,
      index: `int`,
      numSplats: `int`,
      enableLod: `bool`,
      showLodPage: `int`,
    },
    outTypes: { index: `int` },
    inputs: {
      lodIndices: e,
      index: t,
      numSplats: n,
      enableLod: r,
      showLodPage: i,
    },
    statements: ({ inputs: e, outputs: t }) =>
      Ll(`
        int index = ${e.index};
        if (${e.showLodPage} < 0) {
          if (index >= ${e.numSplats}) {
            return;
          }
          if (${e.enableLod}) {
            ivec2 lodIndexCoord = ivec2((index >> 2) & 4095, index >> 14);
            uint splatIndex = texelFetch(${e.lodIndices}, lodIndexCoord, 0)[index & 3];
            ${t.index} = int(splatIndex);
          } else {
            ${t.index} = index;
          }
        } else {
          int start = ${e.showLodPage} << 16;
          if (index >= 65536) {
            return;
          }
          ${t.index} = start + index;
        }
      `),
  }).outputs.index;
}
function em(e, t, n, r) {
  return Fl({
    inTypes: { gsplat: Wu, rgba: yp, index: `int`, enableLod: `bool` },
    outTypes: { gsplat: Wu },
    inputs: { gsplat: e, rgba: t, index: n, enableLod: r },
    statements: ({ inputs: e, outputs: t }) =>
      Ll(`
        ${t.gsplat} = ${e.gsplat};
        if (!${e.enableLod} && (${e.index} >= 0) && (${e.index} < ${e.rgba}.count)) {
          ${t.gsplat}.rgba = texelFetch(${e.rgba}.texture, splatTexCoord(${e.index}), 0);
        }
      `),
  }).outputs.gsplat;
}
var tm = (() => {
  let e = new ge(new Uint32Array(16384), 4096, 1, Vt, B);
  return ((e.internalFormat = `RGBA32UI`), (e.needsUpdate = !0), e);
})();
(new ct(), new Tt());
