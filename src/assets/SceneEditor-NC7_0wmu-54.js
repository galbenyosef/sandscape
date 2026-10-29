// SceneEditor-NC7_0wmu 54 — bonedata
// Lines 29699-29955 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((zm.cubeRender = null),
  (zm.pmrem = null),
  (zm.EMPTY_SPLAT_TEXTURE = new Pe()));
var Bm = new oc(new Uint32Array(1), 0);
Pl(
  { packedSplats: Ku, index: `int` },
  { gsplat: Wu },
  ({ packedSplats: e, index: t }) => {
    if (!e || !t) throw Error(`Invalid input`);
    return { gsplat: Ju(e, t) };
  },
);
function Vm(e) {
  if (e.length === 0) return null;
  let t = new U(),
    n = new R(),
    r = new U(),
    i = [],
    a = [];
  for (let o of e) (o.decompose(t, n, r), i.push(t), a.push(n));
  return new z().compose(yu(i), bu(a), new U(1, 1, 1));
}
var Hm = class e {
  constructor(e) {
    ((this.mesh = e.mesh),
      (this.numSplats = e.numSplats ?? this.mesh.numSplats),
      (this.mode = e.mode ?? `dual_quaternion`));
    let { width: t, height: n, depth: r, maxSplats: i } = du(this.numSplats);
    ((this.skinData = new Uint16Array(i * 4)),
      (this.skinTexture = new Re(this.skinData, t, n, r)),
      (this.skinTexture.format = Vt),
      (this.skinTexture.type = we),
      (this.skinTexture.internalFormat = `RGBA16UI`),
      (this.skinTexture.needsUpdate = !0),
      (this.numBones = e.numBones ?? 256),
      (this.boneData = new Float32Array(this.numBones * 16)),
      (this.boneTexture = new ge(this.boneData, 4, this.numBones, nn, ve)),
      (this.boneTexture.internalFormat = `RGBA32F`),
      (this.boneTexture.needsUpdate = !0),
      (this.boneRestQuatPosScale = ru(this.numBones, () => ({
        quat: new R(),
        pos: new U(),
        scale: new U(),
      }))),
      this.mode === `linear_blend`
        ? (this.boneRestInvMats = ru(this.numBones, () => new z()))
        : (this.boneRestInvMats = []),
      (this.uniform = new Fd({
        key: `skinning`,
        type: Um,
        globals: () => [Wm],
        value: {
          numSplats: this.numSplats,
          numBones: this.numBones,
          skinTexture: this.skinTexture,
          boneTexture: this.boneTexture,
        },
      })));
  }
  modify(e) {
    if (this.mode === `linear_blend`)
      throw Error(`Linear blend skinning requires covSplats=true`);
    return Km(e, this.uniform);
  }
  modifyCov(e) {
    return this.mode === `dual_quaternion`
      ? Ym(e, this.uniform)
      : Xm(e, this.uniform);
  }
  setRestQuatPos(t, n, r) {
    (this.boneRestQuatPosScale[t].quat.copy(n),
      this.boneRestQuatPosScale[t].pos.copy(r),
      this.boneRestQuatPosScale[t].scale.copy(e.UNIT_SCALE),
      this.mode === `linear_blend` &&
        this.boneRestInvMats[t].compose(r, n, e.UNIT_SCALE).invert(),
      this.setBoneQuatPos(t, n, r));
  }
  getRestQuatPos(e, t, n) {
    (t.copy(this.boneRestQuatPosScale[e].quat),
      n.copy(this.boneRestQuatPosScale[e].pos));
  }
  setRestQuatPosScale(e, t, n, r) {
    (this.boneRestQuatPosScale[e].quat.copy(t),
      this.boneRestQuatPosScale[e].pos.copy(n),
      this.boneRestQuatPosScale[e].scale.copy(r),
      this.mode === `linear_blend` &&
        this.boneRestInvMats[e].compose(n, t, r).invert(),
      this.setBoneQuatPosScale(e, t, n, r));
  }
  getRestQuatPosScale(e, t, n, r) {
    (t.copy(this.boneRestQuatPosScale[e].quat),
      n.copy(this.boneRestQuatPosScale[e].pos),
      r.copy(this.boneRestQuatPosScale[e].scale));
  }
  setRestMatrix(e, t) {
    if (this.mode !== `linear_blend`)
      throw Error(`setRestMat only supported for linear blend skinning`);
    (this.boneRestInvMats[e].copy(t).invert(), this.setBoneMatrix(e, t));
  }
  getRestMatrix(e, t) {
    if (this.mode !== `linear_blend`)
      throw Error(`getRestMat only supported for linear blend skinning`);
    t.copy(this.boneRestInvMats[e]).invert();
  }
  setBoneQuatPos(t, n, r) {
    if (this.mode === `dual_quaternion`) {
      (e.relQuat.copy(this.boneRestQuatPosScale[t].quat).invert(),
        e.relPos.copy(r).sub(this.boneRestQuatPosScale[t].pos),
        e.relQuat.multiply(n),
        e.dual.set(e.relPos.x, e.relPos.y, e.relPos.z, 0).multiply(e.relQuat));
      let i = t * 16;
      ((this.boneData[i + 0] = e.relQuat.x),
        (this.boneData[i + 1] = e.relQuat.y),
        (this.boneData[i + 2] = e.relQuat.z),
        (this.boneData[i + 3] = e.relQuat.w),
        (this.boneData[i + 4] = 0.5 * e.dual.x),
        (this.boneData[i + 5] = 0.5 * e.dual.y),
        (this.boneData[i + 6] = 0.5 * e.dual.z),
        (this.boneData[i + 7] = 0.5 * e.dual.w));
    } else this.setBoneQuatPosScale(t, n, r, e.UNIT_SCALE);
  }
  setBoneQuatPosScale(t, n, r, i) {
    if (this.mode === `dual_quaternion`)
      throw Error(
        `setBoneQuatPosScale only supported for linear blend skinning`,
      );
    (e.skinMat.compose(r, n, i), this.setBoneMatrix(t, e.skinMat));
  }
  setBoneMatrix(t, n) {
    if (this.mode !== `linear_blend`)
      throw Error(`setBoneMatrix only supported for linear blend skinning`);
    e.skinMat.multiplyMatrices(this.boneRestInvMats[t], n);
    let r = t * 16;
    ((this.boneData[r + 0] = e.skinMat.elements[0]),
      (this.boneData[r + 1] = e.skinMat.elements[1]),
      (this.boneData[r + 2] = e.skinMat.elements[2]),
      (this.boneData[r + 3] = e.skinMat.elements[4]),
      (this.boneData[r + 4] = e.skinMat.elements[5]),
      (this.boneData[r + 5] = e.skinMat.elements[6]),
      (this.boneData[r + 6] = e.skinMat.elements[8]),
      (this.boneData[r + 7] = e.skinMat.elements[9]),
      (this.boneData[r + 8] = e.skinMat.elements[10]),
      (this.boneData[r + 9] = e.skinMat.elements[12]),
      (this.boneData[r + 10] = e.skinMat.elements[13]),
      (this.boneData[r + 11] = e.skinMat.elements[14]));
  }
  setSplatBones(e, t, n) {
    let r = e * 4;
    ((this.skinData[r + 0] =
      Math.min(255, Math.max(0, Math.round(n.x * 255))) + (t.x << 8)),
      (this.skinData[r + 1] =
        Math.min(255, Math.max(0, Math.round(n.y * 255))) + (t.y << 8)),
      (this.skinData[r + 2] =
        Math.min(255, Math.max(0, Math.round(n.z * 255))) + (t.z << 8)),
      (this.skinData[r + 3] =
        Math.min(255, Math.max(0, Math.round(n.w * 255))) + (t.w << 8)));
  }
  updateBones() {
    ((this.boneTexture.needsUpdate = !0), (this.mesh.needsUpdate = !0));
  }
};
((Hm.UNIT_SCALE = new U(1, 1, 1)),
  (Hm.relQuat = new R()),
  (Hm.relPos = new U()),
  (Hm.dual = new R()),
  (Hm.skinMat = new z()));
var Um = { type: `GsplatSkinning` },
  Wm = Rl(`
  struct GsplatSkinning {
    int numSplats;
    int numBones;
    usampler2DArray skinTexture;
    sampler2D boneTexture;
  };
`),
  Gm = Rl(`
  void applyGsplatSkinning(
    int numSplats, int numBones,
    usampler2DArray skinTexture, sampler2D boneTexture,
    int splatIndex, inout vec3 center, inout vec4 quaternion
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

    center = quatVec(quat, center) + translate;
    quaternion = quatQuat(quat, quaternion);
  }
`);
function Km(e, t) {
  return new Ml({
    inTypes: { gsplat: Wu, skinning: Um },
    outTypes: { gsplat: Wu },
    globals: () => [Wm, Gm],
    inputs: { gsplat: e, skinning: t },
    statements: ({ inputs: e, outputs: t }) => {
      let { skinning: n } = e,
        { gsplat: r } = t;
      return Ll(`
        ${r} = ${e.gsplat};
        if (isGsplatActive(${r}.flags)) {
          applyGsplatSkinning(
            ${n}.numSplats, ${n}.numBones,
            ${n}.skinTexture, ${n}.boneTexture,
            ${r}.index, ${r}.center, ${r}.quaternion
          );
        }
      `);
    },
  }).outputs.gsplat;
}
