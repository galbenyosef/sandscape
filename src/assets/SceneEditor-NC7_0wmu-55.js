// SceneEditor-NC7_0wmu 55 — covsplat
// Lines 29956-30244 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var qm = Rl(`
  void applyCovSplatDQSkinning(
    int numSplats, int numBones,
    usampler2DArray skinTexture, sampler2D boneTexture,
    int splatIndex, inout vec3 center, inout vec3 xxyyzz, inout vec3 xyxzyz
  ) {
    if ((splatIndex < 0) || (splatIndex >= numSplats)) {
      return;
    }

    uvec4 skinData = texelFetch(skinTexture, splatTexCoord(splatIndex), 0);

    float weights[4];
    weights[0] = float(skinData.x & 0xffu) / 255.0;
    weights[1] = float(skinData.y & 0xffu) / 255.0;
    weights[2] = float(skinData.z & 0xffu) / 255.0;
    weights[3] = float(skinData.w & 0xffu) / 255.0;

    uint boneIndices[4];
    boneIndices[0] = (skinData.x >> 8u) & 0xffu;
    boneIndices[1] = (skinData.y >> 8u) & 0xffu;
    boneIndices[2] = (skinData.z >> 8u) & 0xffu;
    boneIndices[3] = (skinData.w >> 8u) & 0xffu;

    vec4 quat = vec4(0.0);
    vec4 dual = vec4(0.0);
    for (int i = 0; i < 4; i++) {
      if (weights[i] > 0.0) {
        int boneIndex = int(boneIndices[i]);
        vec4 boneQuat = vec4(0.0, 0.0, 0.0, 1.0);
        vec4 boneDual = vec4(0.0);
        if (boneIndex < numBones) {
          boneQuat = texelFetch(boneTexture, ivec2(0, boneIndex), 0);
          boneDual = texelFetch(boneTexture, ivec2(1, boneIndex), 0);
        }

        if ((i > 0) && (dot(quat, boneQuat) < 0.0)) {
          // Flip sign if next blend is pointing in the opposite direction
          boneQuat = -boneQuat;
          boneDual = -boneDual;
        }
        quat += weights[i] * boneQuat;
        dual += weights[i] * boneDual;
      }
    }

    // Normalize dual quaternion
    float norm = length(quat);
    quat /= norm;
    dual /= norm;
    vec3 translate = vec3(
      2.0 * (-dual.w * quat.x + dual.x * quat.w - dual.y * quat.z + dual.z * quat.y),
      2.0 * (-dual.w * quat.y + dual.x * quat.z + dual.y * quat.w - dual.z * quat.x),
      2.0 * (-dual.w * quat.z - dual.x * quat.y + dual.y * quat.x + dual.z * quat.w)
    );
    mat3 basis = quaternionToMatrix(quat);

    center = quatVec(quat, center) + translate;

    mat3 cov = mat3(xxyyzz.x, xyxzyz.x, xyxzyz.y, xyxzyz.x, xxyyzz.y, xyxzyz.z, xyxzyz.y, xyxzyz.z, xxyyzz.z);
    cov = basis * cov * transpose(basis);
    xxyyzz = vec3(cov[0][0], cov[1][1], cov[2][2]);
    xyxzyz = vec3(cov[0][1], cov[0][2], cov[1][2]);
  }
`),
  Jm = Rl(`
  void applyCovSplatLBSkinning(
    int numSplats, int numBones,
    usampler2DArray skinTexture, sampler2D boneTexture,
    int splatIndex, inout vec3 center, inout vec3 xxyyzz, inout vec3 xyxzyz
  ) {
    if ((splatIndex < 0) || (splatIndex >= numSplats)) {
      return;
    }

    uvec4 skinData = texelFetch(skinTexture, splatTexCoord(splatIndex), 0);

    float weights[4];
    weights[0] = float(skinData.x & 0xffu) / 255.0;
    weights[1] = float(skinData.y & 0xffu) / 255.0;
    weights[2] = float(skinData.z & 0xffu) / 255.0;
    weights[3] = float(skinData.w & 0xffu) / 255.0;

    uint boneIndices[4];
    boneIndices[0] = (skinData.x >> 8u) & 0xffu;
    boneIndices[1] = (skinData.y >> 8u) & 0xffu;
    boneIndices[2] = (skinData.z >> 8u) & 0xffu;
    boneIndices[3] = (skinData.w >> 8u) & 0xffu;

    mat3 basis = mat3(0.0);
    vec3 offset = vec3(0.0);

    for (int i = 0; i < 4; i++) {
      if (weights[i] > 0.0) {
        int boneIndex = int(boneIndices[i]);
        if (boneIndex < numBones) {
          vec4 v0 = texelFetch(boneTexture, ivec2(0, boneIndex), 0);
          vec4 v1 = texelFetch(boneTexture, ivec2(1, boneIndex), 0);
          vec4 v2 = texelFetch(boneTexture, ivec2(2, boneIndex), 0);
          basis += weights[i] * mat3(v0.x, v0.y, v0.z, v0.w, v1.x, v1.y, v1.z, v1.w, v2.x);
          offset += weights[i] * vec3(v2.y, v2.z, v2.w);
        }
      }
    }

    center = basis * center + offset;

    mat3 cov = mat3(xxyyzz.x, xyxzyz.x, xyxzyz.y, xyxzyz.x, xxyyzz.y, xyxzyz.z, xyxzyz.y, xyxzyz.z, xxyyzz.z);
    cov = basis * cov * transpose(basis);
    xxyyzz = vec3(cov[0][0], cov[1][1], cov[2][2]);
    xyxzyz = vec3(cov[0][1], cov[0][2], cov[1][2]);
  }
`);
function Ym(e, t) {
  return new Ml({
    inTypes: { covsplat: Gu, skinning: Um },
    outTypes: { covsplat: Gu },
    globals: () => [Wm, qm],
    inputs: { covsplat: e, skinning: t },
    statements: ({ inputs: e, outputs: t }) => {
      let { skinning: n } = e,
        { covsplat: r } = t;
      return Ll(`
        ${r} = ${e.covsplat};
        if (isCovSplatActive(${r}.flags)) {
          applyCovSplatDQSkinning(
            ${n}.numSplats, ${n}.numBones,
            ${n}.skinTexture, ${n}.boneTexture,
            ${r}.index, ${r}.center, ${r}.xxyyzz, ${r}.xyxzyz
          );
        }
      `);
    },
  }).outputs.covsplat;
}
function Xm(e, t) {
  return new Ml({
    inTypes: { covsplat: Gu, skinning: Um },
    outTypes: { covsplat: Gu },
    globals: () => [Wm, Jm],
    inputs: { covsplat: e, skinning: t },
    statements: ({ inputs: e, outputs: t }) => {
      let { skinning: n } = e,
        { covsplat: r } = t;
      return Ll(`
        ${r} = ${e.covsplat};
        if (isCovSplatActive(${r}.flags)) {
          applyCovSplatLBSkinning(
            ${n}.numSplats, ${n}.numBones,
            ${n}.skinTexture, ${n}.boneTexture,
            ${r}.index, ${r}.center, ${r}.xxyyzz, ${r}.xyxzyz
          );
        }
      `);
    },
  }).outputs.covsplat;
}
(new wt(new U(-1, -1, -1), new U(1, 1, 1)),
  new U(-1, -3, 1).normalize(),
  new W(1, 1, 1),
  new W(0.5, 0.5, 1),
  new U(1, 1, 1),
  new wt(new U(-2, -1, -2), new U(2, 5, 2)),
  new U(0, -1, 0),
  new W(1, 1, 1),
  new W(0.25, 0.25, 0.5),
  new U(0.1, 1, 0.1));
var Zm = 1 / 5,
  Qm = (e, t) =>
    e.leftIsHand
      ? new U()
      : new U(
          e.left?.axes[2] ?? 0,
          (e.left?.buttons[0].value ?? 0) - (e.left?.buttons[1].value ?? 0),
          e.left?.axes[3] ?? 0,
        ),
  $m = (e, t) => (e.rightIsHand ? new U() : new U(e.right?.axes[2] ?? 0, 0, 0)),
  eh = (e, t) => (e.rightIsHand ? !1 : (e.right?.buttons[0]?.pressed ?? !1)),
  th = (e, t) => (e.rightIsHand ? !1 : (e.right?.buttons[1]?.pressed ?? !1)),
  nh = ((e) => (
    (e.w = `wrist`),
    (e.t0 = `thumb-metacarpal`),
    (e.t1 = `thumb-phalanx-proximal`),
    (e.t2 = `thumb-phalanx-distal`),
    (e.t3 = `thumb-tip`),
    (e.i0 = `index-finger-metacarpal`),
    (e.i1 = `index-finger-phalanx-proximal`),
    (e.i2 = `index-finger-phalanx-intermediate`),
    (e.i3 = `index-finger-phalanx-distal`),
    (e.i4 = `index-finger-tip`),
    (e.m0 = `middle-finger-metacarpal`),
    (e.m1 = `middle-finger-phalanx-proximal`),
    (e.m2 = `middle-finger-phalanx-intermediate`),
    (e.m3 = `middle-finger-phalanx-distal`),
    (e.m4 = `middle-finger-tip`),
    (e.r0 = `ring-finger-metacarpal`),
    (e.r1 = `ring-finger-phalanx-proximal`),
    (e.r2 = `ring-finger-phalanx-intermediate`),
    (e.r3 = `ring-finger-phalanx-distal`),
    (e.r4 = `ring-finger-tip`),
    (e.p0 = `pinky-finger-metacarpal`),
    (e.p1 = `pinky-finger-phalanx-proximal`),
    (e.p2 = `pinky-finger-phalanx-intermediate`),
    (e.p3 = `pinky-finger-phalanx-distal`),
    (e.p4 = `pinky-finger-tip`),
    e
  ))(nh || {}),
  rh = Object.keys(nh),
  ih = rh.length,
  ah = {
    w: 0,
    t0: 1,
    t1: 2,
    t2: 3,
    t3: 4,
    i0: 5,
    i1: 6,
    i2: 7,
    i3: 8,
    i4: 9,
    m0: 10,
    m1: 11,
    m2: 12,
    m3: 13,
    m4: 14,
    r0: 15,
    r1: 16,
    r2: 17,
    r3: 18,
    r4: 19,
    p0: 20,
    p1: 21,
    p2: 22,
    p3: 23,
    p4: 24,
  },
  oh = {
    w: 0.02,
    t0: 0.015,
    t1: 0.012,
    t2: 0.0105,
    t3: 0.0085,
    i0: 0.022,
    i1: 0.012,
    i2: 0.0085,
    i3: 0.0075,
    i4: 0.0065,
    m0: 0.021,
    m1: 0.012,
    m2: 0.008,
    m3: 0.0075,
    m4: 0.0065,
    r0: 0.019,
    r1: 0.011,
    r2: 0.0075,
    r3: 0.007,
    r4: 0.006,
    p0: 0.012,
    p1: 0.01,
    p2: 0.007,
    p3: 0.0065,
    p4: 0.0055,
  },
  sh = [
    [`w`, `t0`, `t1`, `t2`, `t3`],
    [`w`, `i0`, `i1`, `i2`, `i3`, `i4`],
    [`w`, `m0`, `m1`, `m2`, `m3`, `m4`],
    [`w`, `r0`, `r1`, `r2`, `r3`, `r4`],
    [`w`, `p0`, `p1`, `p2`, `p3`, `p4`],
  ],
  ch = [
    [8, 10, 8, 6],
    [8, 19, 14, 8, 6],
    [8, 19, 14, 8, 6],
    [8, 19, 14, 8, 6],
    [8, 19, 14, 8, 6],
  ],
  lh = [`t3`, `i4`, `m4`, `r4`, `p4`],
  uh = [`i4`, `m4`, `r4`, `p4`],
  dh = ((e) => ((e.left = `left`), (e.right = `right`), e))(dh || {}),
  fh = Object.keys(dh),
  ph = /Quest|OculusBrowser|VisionOS|XRBrowser|Pico|Lynx|MagicLeap/i;
function mh() {
  let e = navigator.userAgent ?? ``;
  if (ph.test(e)) return !1;
  if (/Android/i.test(e) || /Mobile/i.test(e)) return !0;
  let t = navigator.userAgentData;
  return t && typeof t.mobile == `boolean` ? t.mobile : !1;
}
