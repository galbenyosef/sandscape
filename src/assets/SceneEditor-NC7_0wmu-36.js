// SceneEditor-NC7_0wmu 36 — updatesdffloatdata
// Lines 23630-24046 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Tp = wp,
  Ep = class {
    constructor({ maxSdfs: e, maxEdits: t }) {
      ((this.maxSdfs = Math.max(16, e ?? 0)),
        (this.numSdfs = 0),
        (this.sdfData = new Uint32Array(this.maxSdfs * 8 * 4)),
        (this.sdfFloatData = new Float32Array(this.sdfData.buffer)),
        (this.sdfTexture = this.newSdfTexture(this.sdfData, this.maxSdfs)),
        (this.dynoSdfArray = new Fd({
          key: `sdfArray`,
          type: Dp,
          globals: () => [Op],
          value: { numSdfs: 0, sdfTexture: this.sdfTexture },
          update: (e) => (
            (e.numSdfs = this.numSdfs),
            (e.sdfTexture = this.sdfTexture),
            e
          ),
        })),
        (this.maxEdits = Math.max(16, t ?? 0)),
        (this.numEdits = 0),
        (this.editData = new Uint32Array(this.maxEdits * 4)),
        (this.editFloatData = new Float32Array(this.editData.buffer)),
        (this.dynoNumEdits = new Ld({ value: 0 })),
        (this.dynoEdits = this.newEdits(this.editData, this.maxEdits)));
    }
    newSdfTexture(e, t) {
      let n = new ge(e, 8, t, Vt, B);
      return ((n.internalFormat = `RGBA32UI`), (n.needsUpdate = !0), n);
    }
    newEdits(e, t) {
      return new Fd({
        key: `edits`,
        type: `uvec4`,
        count: t,
        globals: () => [kp],
        value: e,
      });
    }
    ensureCapacity({ maxSdfs: e, maxEdits: t }) {
      let n = !1;
      return (
        e > this.sdfTexture.image.height &&
          (this.sdfTexture.dispose(),
          (this.maxSdfs = Math.max(this.maxSdfs * 2, e)),
          (this.sdfData = new Uint32Array(this.maxSdfs * 8 * 4)),
          (this.sdfFloatData = new Float32Array(this.sdfData.buffer)),
          (this.sdfTexture = this.newSdfTexture(this.sdfData, this.maxSdfs))),
        t > (this.dynoEdits.count ?? 0) &&
          ((this.maxEdits = Math.max(this.maxEdits * 2, t)),
          (this.editData = new Uint32Array(this.maxEdits * 4)),
          (this.editFloatData = new Float32Array(this.editData.buffer)),
          (this.dynoEdits = this.newEdits(this.editData, this.maxEdits)),
          (n = !0)),
        n
      );
    }
    updateEditData(e, t) {
      let n = this.editData[e] !== t;
      return ((this.editData[e] = t), n);
    }
    updateEditFloatData(e, t) {
      Mp[0] = t;
      let n = this.editFloatData[e] !== Mp[0];
      return (n && (this.editFloatData[e] = Mp[0]), n);
    }
    encodeEdit(
      e,
      {
        sdfFirst: t,
        sdfCount: n,
        invert: r,
        rgbaBlendMode: i,
        softEdge: a,
        sdfSmooth: o,
      },
    ) {
      let s = e * 4,
        c = !1;
      return (
        (c = this.updateEditData(s + 0, i | (r ? 256 : 0)) || c),
        (c = this.updateEditData(s + 1, t | (n << 16)) || c),
        (c = this.updateEditFloatData(s + 2, a) || c),
        (c = this.updateEditFloatData(s + 3, o) || c),
        c
      );
    }
    updateSdfData(e, t) {
      let n = this.sdfData[e] !== t;
      return ((this.sdfData[e] = t), n);
    }
    updateSdfFloatData(e, t) {
      Mp[0] = t;
      let n = this.sdfFloatData[e] !== Mp[0];
      return (n && (this.sdfFloatData[e] = Mp[0]), n);
    }
    encodeSdf(
      e,
      { sdfType: t, invert: n, center: r, quaternion: i, scale: a, sizes: o },
      s,
    ) {
      let c = e * 32,
        l = t | (n ? 256 : 0),
        u = !1;
      ((u = this.updateSdfFloatData(c + 0, r?.x ?? 0) || u),
        (u = this.updateSdfFloatData(c + 1, r?.y ?? 0) || u),
        (u = this.updateSdfFloatData(c + 2, r?.z ?? 0) || u),
        (u = this.updateSdfData(c + 3, l) || u),
        (u = this.updateSdfFloatData(c + 4, i?.x ?? 0) || u),
        (u = this.updateSdfFloatData(c + 5, i?.y ?? 0) || u),
        (u = this.updateSdfFloatData(c + 6, i?.z ?? 0) || u),
        (u = this.updateSdfFloatData(c + 7, i?.w ?? 0) || u),
        (u = this.updateSdfFloatData(c + 8, a?.x ?? 0) || u),
        (u = this.updateSdfFloatData(c + 9, a?.y ?? 0) || u),
        (u = this.updateSdfFloatData(c + 10, a?.z ?? 0) || u),
        (u = this.updateSdfData(c + 11, 0) || u),
        (u = this.updateSdfFloatData(c + 12, o?.x ?? 0) || u),
        (u = this.updateSdfFloatData(c + 13, o?.y ?? 0) || u),
        (u = this.updateSdfFloatData(c + 14, o?.z ?? 0) || u),
        (u = this.updateSdfFloatData(c + 15, o?.w ?? 0) || u));
      let d = Math.min(4, s.length);
      for (let e = 0; e < d; ++e) {
        let t = c + 16 + e * 4;
        ((u = this.updateSdfFloatData(t + 0, s[e].x) || u),
          (u = this.updateSdfFloatData(t + 1, s[e].y) || u),
          (u = this.updateSdfFloatData(t + 2, s[e].z) || u),
          (u = this.updateSdfFloatData(t + 3, s[e].w) || u));
      }
      return u;
    }
    update(e) {
      let t = e.reduce((e, { sdfs: t }) => e + t.length, 0),
        n = this.ensureCapacity({ maxEdits: e.length, maxSdfs: t }),
        r = [new vn(), new vn()],
        i = new U(),
        a = new R(),
        o = new U(),
        s = new vn(),
        c = 0,
        l = n;
      e.length !== this.dynoNumEdits.value &&
        ((this.dynoNumEdits.value = e.length),
        (this.numEdits = e.length),
        (l = !0));
      for (let [t, { edit: n, sdfs: u }] of e.entries()) {
        l =
          this.encodeEdit(t, {
            sdfFirst: c,
            sdfCount: u.length,
            invert: n.invert,
            rgbaBlendMode: Sp(n.rgbaBlendMode),
            softEdge: n.softEdge,
            sdfSmooth: n.sdfSmooth,
          }) || l;
        let e = !1;
        for (let t of u)
          (s.set(t.scale.x, t.scale.y, t.scale.z, t.radius),
            t.scale.setScalar(1),
            t.updateMatrixWorld(),
            t.matrixWorld.clone().invert().decompose(i, a, o),
            t.scale.set(s.x, s.y, s.z),
            t.updateMatrixWorld(),
            r[0].set(t.color.r, t.color.g, t.color.b, t.opacity),
            r[1].set(t.displace.x, t.displace.y, t.displace.z, 1),
            (e =
              this.encodeSdf(
                c,
                {
                  sdfType: xp(t.type),
                  invert: t.invert,
                  center: i,
                  quaternion: a,
                  scale: o,
                  sizes: s,
                },
                r,
              ) || e),
            (c += 1));
        ((this.numSdfs = c),
          e && (this.sdfTexture.needsUpdate = !0),
          (l ||= e));
      }
      return { updated: l, dynoUpdated: n };
    }
    modify(e) {
      return Ap(e, this.dynoSdfArray, this.dynoNumEdits, this.dynoEdits);
    }
    modifyCov(e) {
      return jp(e, this.dynoSdfArray, this.dynoNumEdits, this.dynoEdits);
    }
  },
  Dp = { type: `SdfArray` },
  Op = Rl(`
  struct SdfArray {
    int numSdfs;
    usampler2D sdfTexture;
  };

  void unpackSdfArray(
    usampler2D sdfTexture, int sdfIndex, out uint flags,
    out vec3 center, out vec4 quaternion, out vec3 scale, out vec4 sizes,
    int numValues, out vec4 values[4]
  ) {
    uvec4 temp = texelFetch(sdfTexture, ivec2(0, sdfIndex), 0);
    flags = temp.w;
    center = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(1, sdfIndex), 0);
    quaternion = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    temp = texelFetch(sdfTexture, ivec2(2, sdfIndex), 0);
    scale = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(3, sdfIndex), 0);
    sizes = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    for (int i = 0; i < numValues; ++i) {
      temp = texelFetch(sdfTexture, ivec2(4 + i, sdfIndex), 0);
      values[i] = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));
    }
  }

  const uint SDF_FLAG_TYPE = 0xFFu;
  const uint SDF_FLAG_INVERT = 1u << 8u;

  const uint SDF_TYPE_ALL = 0u;
  const uint SDF_TYPE_PLANE = 1u;
  const uint SDF_TYPE_SPHERE = 2u;
  const uint SDF_TYPE_BOX = 3u;
  const uint SDF_TYPE_ELLIPSOID = 4u;
  const uint SDF_TYPE_CYLINDER = 5u;
  const uint SDF_TYPE_CAPSULE = 6u;
  const uint SDF_TYPE_INFINITE_CONE = 7u;

  float evaluateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 outValues[4]
  ) {
    float distanceAccum = (smoothK == 0.0) ? 1.0 / 0.0 : 0.0;
    float maxExp = -1.0 / 0.0;
    for (int i = 0; i < numValues; ++i) {
        outValues[i] = vec4(0.0);
    }

    uint flags;
    vec3 center, scale;
    vec4 quaternion, sizes;
    vec4 values[4];

    int sdfLast = min(sdfFirst + sdfCount, numSdfs);
    for (int index = sdfFirst; index < sdfLast; ++index) {
      unpackSdfArray(sdfTexture, index, flags, center, quaternion, scale, sizes, numValues, values);
      uint sdfType = flags & SDF_FLAG_TYPE;
      vec3 sdfPos = quatVec(quaternion, pos * scale) + center;

      float distance;
      switch (sdfType) {
        case SDF_TYPE_ALL:
          distance = -1.0 / 0.0;
          break;
        case SDF_TYPE_PLANE: {
          distance = sdfPos.z;
          break;
        }
        case SDF_TYPE_SPHERE: {
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_BOX: {
          vec3 q = abs(sdfPos) - sizes.xyz + sizes.w;
          distance = length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - sizes.w;
          break;
        }
        case SDF_TYPE_ELLIPSOID: {
          vec3 sizes = sizes.xyz;
          float k0 = length(sdfPos / sizes);
          float k1 = length(sdfPos / dot(sizes, sizes));
          distance = k0 * (k0 - 1.0) / k1;
          break;
        }
        case SDF_TYPE_CYLINDER: {
          vec2 d = abs(vec2(length(sdfPos.xz), sdfPos.y)) - sizes.wy;
          distance = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
          break;
        }
        case SDF_TYPE_CAPSULE: {
          sdfPos.y -= clamp(sdfPos.y, -0.5 * sizes.y, 0.5 * sizes.y);
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_INFINITE_CONE: {
          float angle = 0.25 * PI * sizes.w;
          vec2 c = vec2(sin(angle), cos(angle));
          vec2 q = vec2(length(sdfPos.xy), -sdfPos.z);
          float d = length(q - c * max(dot(q, c), 0.0));
          distance = d * (((q.x * c.y - q.y * c.x) < 0.0) ? -1.0 : 1.0);
          break;
        }
      }

      if ((flags & SDF_FLAG_INVERT) != 0u) {
        distance = -distance;
      }

      if (smoothK == 0.0) {
        if (distance < distanceAccum) {
          distanceAccum = distance;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] = values[i];
          }
        }
      } else {
        float scaledDistance = -distance / smoothK;
        if (scaledDistance > maxExp) {
          float scale = exp(maxExp - scaledDistance);
          distanceAccum *= scale;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] *= scale;
          }
          maxExp = scaledDistance;
        }

        float weight = exp(scaledDistance - maxExp);
        distanceAccum += weight;
        for (int i = 0; i < numValues; ++i) {
          outValues[i] += weight * values[i];
        }
      }
    }

    if (smoothK == 0.0) {
      return distanceAccum;
    } else {
      // Very distant SDFs may result in 0 accumulation
      if (distanceAccum == 0.0) {
        return 1.0 / 0.0;
      }
      for (int i = 0; i < numValues; ++i) {
        outValues[i] /= distanceAccum;
      }
      return (-log(distanceAccum) - maxExp) * smoothK;
    }
  }

  float modulateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 values[4],
    float softEdge, bool invert
  ) {
    float distance = evaluateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, numValues, values);
    if (invert) {
      distance = -distance;
    }

    return (softEdge == 0.0) ? ((distance < 0.0) ? 1.0 : 0.0)
      : clamp(-distance / softEdge + 0.5, 0.0, 1.0);
  }
`),
  kp = Rl(`
  const uint EDIT_FLAG_BLEND = 0xFFu;
  const uint EDIT_BLEND_MULTIPLY = 0u;
  const uint EDIT_BLEND_SET_RGB = 1u;
  const uint EDIT_BLEND_ADD_RGBA = 2u;
  const uint EDIT_FLAG_INVERT = 0x100u;

  void decodeEdit(
    uvec4 packedEdit, out int sdfFirst, out int sdfCount,
    out bool invert, out uint rgbaBlendMode, out float softEdge, out float sdfSmooth
  ) {
    rgbaBlendMode = packedEdit.x & EDIT_FLAG_BLEND;
    invert = (packedEdit.x & EDIT_FLAG_INVERT) != 0u;

    sdfFirst = int(packedEdit.y & 0xFFFFu);
    sdfCount = int(packedEdit.y >> 16u);

    softEdge = uintBitsToFloat(packedEdit.z);
    sdfSmooth = uintBitsToFloat(packedEdit.w);
  }

  void applyRgbaDisplaceEdit(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, inout vec3 pos,
    float smoothK, float softEdge, bool invert, uint rgbaBlendMode, inout vec4 rgba
  ) {
    vec4 values[4];
    float modulate = modulateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, 2, values, softEdge, invert);
    // On Android, moving values[0] is necessary to work around a compiler bug.
    vec4 sdfRgba = values[0];
    vec4 sdfDisplaceScale = values[1];

    vec4 target;
    switch (rgbaBlendMode) {
      case EDIT_BLEND_MULTIPLY:
        target = rgba * sdfRgba;
        break;
      case EDIT_BLEND_SET_RGB:
        target = vec4(sdfRgba.rgb, rgba.a * sdfRgba.a);
        break;
      case EDIT_BLEND_ADD_RGBA:
        target = rgba + sdfRgba;
        break;
      default:
        // Debug output if blend mode not set
        target = vec4(fract(pos), 1.0);
    }
    rgba = mix(rgba, target, modulate);
    pos += sdfDisplaceScale.xyz * modulate;
  }

  void applyPackedRgbaDisplaceEdit(uvec4 packedEdit, usampler2D sdfTexture, int numSdfs, inout vec3 pos, inout vec4 rgba) {
    int sdfFirst, sdfCount;
    bool invert;
    uint rgbaBlendMode;
    float softEdge, sdfSmooth;
    decodeEdit(packedEdit, sdfFirst, sdfCount, invert, rgbaBlendMode, softEdge, sdfSmooth);
    applyRgbaDisplaceEdit(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, sdfSmooth, softEdge, invert, rgbaBlendMode, rgba);
  }
`);
