// SceneEditor-NC7_0wmu 50 — packedsplats
// Lines 28461-28710 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((Em.getEmptyArray = (() => {
  let { width: e, height: t, depth: n, maxSplats: r } = du(1),
    i = new Re(new Uint32Array(r * 4), e, t, n);
  return (
    (i.format = Vt),
    (i.type = B),
    (i.internalFormat = `RGBA32UI`),
    (i.needsUpdate = !0),
    i
  );
})()),
  (Em.programTemplate = null),
  (Em.generatorProgram = new WeakMap()),
  (Em.fullScreenQuad = new bn(new Mt({ visible: !1 }))),
  (Em.emptyUint32x4 = (() => {
    let { width: e, height: t, depth: n, maxSplats: r } = du(1),
      i = new Re(new Uint32Array(r * 4), e, t, n);
    return (
      (i.format = Vt),
      (i.type = B),
      (i.internalFormat = `RGBA32UI`),
      (i.needsUpdate = !0),
      i
    );
  })()),
  (Em.emptyUint32x2 = (() => {
    let { width: e, height: t, depth: n, maxSplats: r } = du(1),
      i = new Re(new Uint32Array(r * 2), e, t, n);
    return (
      (i.format = Xt),
      (i.type = B),
      (i.internalFormat = `RG32UI`),
      (i.needsUpdate = !0),
      i
    );
  })()));
var Dm = Em,
  Om = class extends Fd {
    constructor({ packedSplats: e } = {}) {
      (super({
        key: `packedSplats`,
        type: Ku,
        globals: () => [ad],
        value: {
          textureArray: Dm.getEmptyArray,
          numSplats: 0,
          rgbMinMaxLnScaleMinMax: new vn(0, 1, -12, 9),
          lodOpacity: !1,
        },
        update: (e) => (
          (e.textureArray =
            this.packedSplats?.getTexture() ?? Dm.getEmptyArray),
          (e.numSplats = this.packedSplats?.numSplats ?? 0),
          e.rgbMinMaxLnScaleMinMax.set(
            this.packedSplats?.splatEncoding?.rgbMin ?? 0,
            this.packedSplats?.splatEncoding?.rgbMax ?? 1,
            this.packedSplats?.splatEncoding?.lnScaleMin ?? -12,
            this.packedSplats?.splatEncoding?.lnScaleMax ?? 9,
          ),
          (e.lodOpacity = this.packedSplats?.splatEncoding?.lodOpacity ?? !1),
          e
        ),
      }),
        (this.packedSplats = e));
    }
  },
  km = Rl(`
  vec3 evaluatePackedSH1(uvec2 packedData, vec3 viewDir, float sh1Max) {
    // Extract sint7 values packed into 2 x uint32
    vec3 sh1_0 = vec3(ivec3(
      int(packedData.x << 25u) >> 25,
      int(packedData.x << 18u) >> 25,
      int(packedData.x << 11u) >> 25
    ));
    vec3 sh1_1 = vec3(ivec3(
      int(packedData.x << 4u) >> 25,
      int((packedData.x >> 3u) | (packedData.y << 29u)) >> 25,
      int(packedData.y << 22u) >> 25
    ));
    vec3 sh1_2 = vec3(ivec3(
      int(packedData.y << 15u) >> 25,
      int(packedData.y << 8u) >> 25,
      int(packedData.y << 1u) >> 25
    ));

    vec3 rgb = sh1_0 * (-0.4886025 * viewDir.y)
      + sh1_1 * (0.4886025 * viewDir.z)
      + sh1_2 * (-0.4886025 * viewDir.x);
    return rgb * (sh1Max / 63.0);
  }
`),
  Am = Rl(`
  vec3 evaluatePackedSH2(uvec4 packedData, vec3 viewDir, float sh2Max) {
    // Extract sint8 values packed into 4 x uint32
    vec3 sh2_0 = vec3(ivec3(
      int(packedData.x << 24u) >> 24,
      int(packedData.x << 16u) >> 24,
      int(packedData.x << 8u) >> 24
    ));
    vec3 sh2_1 = vec3(ivec3(
      int(packedData.x) >> 24,
      int(packedData.y << 24u) >> 24,
      int(packedData.y << 16u) >> 24
    ));
    vec3 sh2_2 = vec3(ivec3(
      int(packedData.y << 8u) >> 24,
      int(packedData.y) >> 24,
      int(packedData.z << 24u) >> 24
    ));
    vec3 sh2_3 = vec3(ivec3(
      int(packedData.z << 16u) >> 24,
      int(packedData.z << 8u) >> 24,
      int(packedData.z) >> 24
    ));
    vec3 sh2_4 = vec3(ivec3(
      int(packedData.w << 24u) >> 24,
      int(packedData.w << 16u) >> 24,
      int(packedData.w << 8u) >> 24
    ));

    vec3 rgb = sh2_0 * (1.0925484 * viewDir.x * viewDir.y)
      + sh2_1 * (-1.0925484 * viewDir.y * viewDir.z)
      + sh2_2 * (0.3153915 * (2.0 * viewDir.z * viewDir.z - viewDir.x * viewDir.x - viewDir.y * viewDir.y))
      + sh2_3 * (-1.0925484 * viewDir.x * viewDir.z)
      + sh2_4 * (0.5462742 * (viewDir.x * viewDir.x - viewDir.y * viewDir.y));
    return rgb * (sh2Max / 127.0);
  }
`),
  jm = Rl(`
  vec3 evaluatePackedSH3(uvec4 packedData, vec3 viewDir, float sh3Max) {
    // Extract sint6 values packed into 4 x uint32
    vec3 sh3_0 = vec3(ivec3(
      int(packedData.x << 26u) >> 26,
      int(packedData.x << 20u) >> 26,
      int(packedData.x << 14u) >> 26
    ));
    vec3 sh3_1 = vec3(ivec3(
      int(packedData.x << 8u) >> 26,
      int(packedData.x << 2u) >> 26,
      int((packedData.x >> 4u) | (packedData.y << 28u)) >> 26
    ));
    vec3 sh3_2 = vec3(ivec3(
      int(packedData.y << 22u) >> 26,
      int(packedData.y << 16u) >> 26,
      int(packedData.y << 10u) >> 26
    ));
    vec3 sh3_3 = vec3(ivec3(
      int(packedData.y << 4u) >> 26,
      int((packedData.y >> 2u) | (packedData.z << 30u)) >> 26,
      int(packedData.z << 24u) >> 26
    ));
    vec3 sh3_4 = vec3(ivec3(
      int(packedData.z << 18u) >> 26,
      int(packedData.z << 12u) >> 26,
      int(packedData.z << 6u) >> 26
    ));
    vec3 sh3_5 = vec3(ivec3(
      int(packedData.z) >> 26,
      int(packedData.w << 26u) >> 26,
      int(packedData.w << 20u) >> 26
    ));
    vec3 sh3_6 = vec3(ivec3(
      int(packedData.w << 14u) >> 26,
      int(packedData.w << 8u) >> 26,
      int(packedData.w << 2u) >> 26
    ));

    float xx = viewDir.x * viewDir.x;
    float yy = viewDir.y * viewDir.y;
    float zz = viewDir.z * viewDir.z;
    float xy = viewDir.x * viewDir.y;
    float yz = viewDir.y * viewDir.z;
    float zx = viewDir.z * viewDir.x;

    vec3 rgb = sh3_0 * (-0.5900436 * viewDir.y * (3.0 * xx - yy))
      + sh3_1 * (2.8906114 * xy * viewDir.z) +
      + sh3_2 * (-0.4570458 * viewDir.y * (4.0 * zz - xx - yy))
      + sh3_3 * (0.3731763 * viewDir.z * (2.0 * zz - 3.0 * xx - 3.0 * yy))
      + sh3_4 * (-0.4570458 * viewDir.x * (4.0 * zz - xx - yy))
      + sh3_5 * (1.4453057 * viewDir.z * (xx - yy))
      + sh3_6 * (-0.5900436 * viewDir.x * (xx - 3.0 * yy));
    return rgb * (sh3Max / 31.0);
  }
`);
function Mm({
  coord: e,
  viewDir: t,
  numSh: n,
  sh1Texture: r,
  sh2Texture: i,
  sh3Texture: a,
  shMax: o,
}) {
  return new Ml({
    inTypes: {
      coord: `ivec3`,
      viewDir: `vec3`,
      numSh: `int`,
      sh1Texture: `usampler2DArray`,
      sh2Texture: `usampler2DArray`,
      sh3Texture: `usampler2DArray`,
      shMax: `vec3`,
    },
    outTypes: { rgb: `vec3` },
    inputs: {
      coord: e,
      viewDir: t,
      numSh: n,
      sh1Texture: r,
      sh2Texture: i,
      sh3Texture: a,
      shMax: o,
    },
    globals: () => [km, Am, jm],
    statements: ({ inputs: e, outputs: t }) => {
      let n = [`vec3 rgb = vec3(0.0);`];
      return (
        e.sh1Texture &&
          (n.push(
            ...Ll(`
          if (${e.numSh} >= 1) {
            vec3 sh1Rgb = evaluatePackedSH1(texelFetch(${e.sh1Texture}, ${e.coord}, 0).rg, ${e.viewDir}, ${e.shMax}.x);
            rgb += sh1Rgb;
          `),
          ),
          e.sh2Texture &&
            (n.push(
              ...Ll(`
            if (${e.numSh} >= 2) {
              vec3 sh2Rgb = evaluatePackedSH2(texelFetch(${e.sh2Texture}, ${e.coord}, 0), ${e.viewDir}, ${e.shMax}.y);
              rgb += sh2Rgb;
            `),
            ),
            e.sh3Texture &&
              n.push(
                ...Ll(`
              if (${e.numSh} >= 3) {
                vec3 sh3Rgb = evaluatePackedSH3(texelFetch(${e.sh3Texture}, ${e.coord}, 0), ${e.viewDir}, ${e.shMax}.z);
                rgb += sh3Rgb;
              }
            `),
              ),
            n.push(`}`)),
          n.push(`}`)),
        n.push(`${t.rgb} = rgb;`),
        n
      );
    },
  }).outputs;
}
