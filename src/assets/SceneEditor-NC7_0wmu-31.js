// SceneEditor-NC7_0wmu 31 — buffer
// Lines 21434-21779 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
((vf.emptyArray = (() => {
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
  (vf.emptyTexture = Tf(null, 1, 1, 1, Vt, B, `RGBA32UI`)),
  (vf.emptyUint32x4 = (() => {
    let { width: e, height: t, depth: n, maxSplats: r } = du(1),
      i = new Re(new Uint32Array(r * 4), e, t, n);
    return (
      (i.format = Vt),
      (i.type = B),
      (i.internalFormat = `RGBA32UI`),
      (i.needsUpdate = !0),
      i
    );
  })()));
var yf = vf,
  bf = class extends Fd {
    constructor({ extSplats: e } = {}) {
      (super({
        key: `extSplats`,
        type: qu,
        globals: () => [ld],
        value: {
          textureArray1: yf.emptyTexture,
          textureArray2: yf.emptyTexture,
          numSplats: 0,
        },
        update: (e) => (
          (e.textureArray1 = this.extSplats?.textures[0] ?? yf.emptyTexture),
          (e.textureArray2 = this.extSplats?.textures[1] ?? yf.emptyTexture),
          (e.numSplats = this.extSplats?.numSplats ?? 0),
          e
        ),
      }),
        (this.extSplats = e));
    }
  },
  xf = Rl(`
  vec3 evaluateExtSH1(uvec4 packedData, vec3 viewDir) {
    vec3 sh1_0 = decodeExtRgb(packedData.x);
    vec3 sh1_1 = decodeExtRgb(packedData.y);
    vec3 sh1_2 = decodeExtRgb(packedData.z);

    return sh1_0 * (-0.4886025 * viewDir.y)
      + sh1_1 * (0.4886025 * viewDir.z)
      + sh1_2 * (-0.4886025 * viewDir.x);
  }
`),
  Sf = Rl(`
  vec3 evaluateExtSH12(uvec4 packed1, uvec4 packed2, vec3 viewDir) {
    vec3 sh1_0 = decodeExtRgb(packed1.x);
    vec3 sh1_1 = decodeExtRgb(packed1.y);
    vec3 sh1_2 = decodeExtRgb(packed1.z);

    vec3 sh2_0 = decodeExtRgb(packed1.w);
    vec3 sh2_1 = decodeExtRgb(packed2.x);
    vec3 sh2_2 = decodeExtRgb(packed2.y);
    vec3 sh2_3 = decodeExtRgb(packed2.z);
    vec3 sh2_4 = decodeExtRgb(packed2.w);

    vec3 sh1Rgb = sh1_0 * (-0.4886025 * viewDir.y)
      + sh1_1 * (0.4886025 * viewDir.z)
      + sh1_2 * (-0.4886025 * viewDir.x);

    vec3 sh2Rgb = sh2_0 * (1.0925484 * viewDir.x * viewDir.y)
      + sh2_1 * (-1.0925484 * viewDir.y * viewDir.z)
      + sh2_2 * (0.3153915 * (2.0 * viewDir.z * viewDir.z - viewDir.x * viewDir.x - viewDir.y * viewDir.y))
      + sh2_3 * (-1.0925484 * viewDir.x * viewDir.z)
      + sh2_4 * (0.5462742 * (viewDir.x * viewDir.x - viewDir.y * viewDir.y));

    return sh1Rgb + sh2Rgb;
  }
`),
  Cf = Rl(`
  vec3 evaluateExtSH3(uvec4 packedA, uvec4 packedB, vec3 viewDir) {
    vec3 sh3_0 = decodeExtRgb(packedA.x);
    vec3 sh3_1 = decodeExtRgb(packedA.y);
    vec3 sh3_2 = decodeExtRgb(packedA.z);
    vec3 sh3_3 = decodeExtRgb(packedA.w);
    vec3 sh3_4 = decodeExtRgb(packedB.x);
    vec3 sh3_5 = decodeExtRgb(packedB.y);
    vec3 sh3_6 = decodeExtRgb(packedB.z);

    float xx = viewDir.x * viewDir.x;
    float yy = viewDir.y * viewDir.y;
    float zz = viewDir.z * viewDir.z;
    float xy = viewDir.x * viewDir.y;
    float yz = viewDir.y * viewDir.z;
    float zx = viewDir.z * viewDir.x;

    return sh3_0 * (-0.5900436 * viewDir.y * (3.0 * xx - yy))
      + sh3_1 * (2.8906114 * xy * viewDir.z) +
      + sh3_2 * (-0.4570458 * viewDir.y * (4.0 * zz - xx - yy))
      + sh3_3 * (0.3731763 * viewDir.z * (2.0 * zz - 3.0 * xx - 3.0 * yy))
      + sh3_4 * (-0.4570458 * viewDir.x * (4.0 * zz - xx - yy))
      + sh3_5 * (1.4453057 * viewDir.z * (xx - yy))
      + sh3_6 * (-0.5900436 * viewDir.x * (xx - 3.0 * yy));
  }
`);
function wf({
  coord: e,
  viewDir: t,
  numSh: n,
  sh1Texture: r,
  sh2Texture: i,
  sh3TextureA: a,
  sh3TextureB: o,
}) {
  return new Ml({
    inTypes: {
      coord: `ivec3`,
      viewDir: `vec3`,
      numSh: `int`,
      sh1Texture: `usampler2DArray`,
      sh2Texture: `usampler2DArray`,
      sh3TextureA: `usampler2DArray`,
      sh3TextureB: `usampler2DArray`,
    },
    outTypes: { rgb: `vec3` },
    inputs: {
      coord: e,
      viewDir: t,
      numSh: n,
      sh1Texture: r,
      sh2Texture: i,
      sh3TextureA: a,
      sh3TextureB: o,
    },
    globals: () => [xf, Sf, Cf],
    statements: ({ inputs: e, outputs: t }) => {
      let n = [`vec3 rgb = vec3(0.0);`];
      return (
        e.sh1Texture &&
          (e.sh2Texture
            ? (n.push(
                ...Ll(`
            if (${e.numSh} == 1) {
              rgb = evaluateExtSH1(texelFetch(${e.sh1Texture}, ${e.coord}, 0), ${e.viewDir});
            } else if (${e.numSh} >= 2) {
              rgb = evaluateExtSH12(texelFetch(${e.sh1Texture}, ${e.coord}, 0), texelFetch(${e.sh2Texture}, ${e.coord}, 0), ${e.viewDir});
            `),
              ),
              e.sh3TextureA &&
                e.sh3TextureB &&
                n.push(
                  ...Ll(`
              if (${e.numSh} >= 3) {
                rgb += evaluateExtSH3(texelFetch(${e.sh3TextureA}, ${e.coord}, 0), texelFetch(${e.sh3TextureB}, ${e.coord}, 0), ${e.viewDir});
              }
            `),
                ),
              n.push(`}`))
            : n.push(
                ...Ll(`
            if (${e.numSh} >= 1) {
              rgb = evaluateExtSH1(texelFetch(${e.sh1Texture}, ${e.coord}, 0), ${e.viewDir});
            }
            `),
              )),
        n.push(`${t.rgb} = rgb;`),
        n
      );
    },
  }).outputs;
}
function Tf(e, t, n, r, i, a, o) {
  let s = new Re(e, t, n, r);
  return (
    (s.format = i),
    (s.type = a),
    (s.internalFormat = o),
    (s.needsUpdate = !0),
    s
  );
}
function Ef(e) {
  let t = ep.decode_rad_header(e);
  if (t[2]) throw qf(t[1]);
  return qf(t[0]);
}
function Df() {
  return ep.get_raycast_buffer();
}
function Of() {
  return ep.get_raycast_buffer2();
}
function kf(e, t, n, r, i, a, o, s, c, l) {
  return ep.raycast_ext_buffers(e, t, n, r, i, a, o, s, c, l);
}
function Af(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  return ep.raycast_packed_buffer(e, t, n, r, i, a, o, s, c, l, u, d, f);
}
function jf() {
  return {
    __proto__: null,
    "./spark_rs_bg.js": {
      __proto__: null,
      __wbg_Error_2e59b1b37a9a34c3: function (e, t) {
        return Error(Bf(e, t));
      },
      __wbg___wbindgen_throw_81fc77679af83bc6: function (e, t) {
        throw Error(Bf(e, t));
      },
      __wbg_error_a6fa202b58aa1cd3: function (e, t) {
        let n, r;
        try {
          ((n = e), (r = t), console.error(Bf(e, t)));
        } finally {
          ep.__wbindgen_free(n, r, 1);
        }
      },
      __wbg_length_0c32cb8543c8e4c8: function (e) {
        return e.length;
      },
      __wbg_length_1e701798fdcaa3b4: function (e) {
        return e.length;
      },
      __wbg_length_fd4646b401926788: function (e) {
        return e.length;
      },
      __wbg_new_227d7c05414eb861: function () {
        return Error();
      },
      __wbg_new_4f9fafbb3909af72: function () {
        return {};
      },
      __wbg_new_f3c9df4f38f3f798: function () {
        return [];
      },
      __wbg_new_with_length_26bffbe236bf73f9: function (e) {
        return new Float32Array(e >>> 0);
      },
      __wbg_prototypesetcall_3e05eb9545565046: function (e, t, n) {
        Uint8Array.prototype.set.call(Ff(e, t), n);
      },
      __wbg_prototypesetcall_e42275e601e14eeb: function (e, t, n) {
        Uint32Array.prototype.set.call(Pf(e, t), n);
      },
      __wbg_set_6be42768c690e380: function (e, t, n) {
        e[t] = n;
      },
      __wbg_set_6c60b2e8ad0e9383: function (e, t, n) {
        e[t >>> 0] = n;
      },
      __wbg_set_8ee2d34facb8466e: function () {
        return Gf(function (e, t, n) {
          return Reflect.set(e, t, n);
        }, arguments);
      },
      __wbg_set_a98c8da6557e63de: function (e, t, n) {
        e.set(Nf(t, n));
      },
      __wbg_stack_3b0d974bbf31e44f: function (e, t) {
        let n = t.stack,
          r = Kf(n, ep.__wbindgen_malloc, ep.__wbindgen_realloc),
          i = $f;
        (Lf().setInt32(e + 4, i, !0), Lf().setInt32(e + 0, r, !0));
      },
      __wbg_subarray_d51e89458b3fdbf6: function (e, t, n) {
        return e.subarray(t >>> 0, n >>> 0);
      },
      __wbindgen_cast_0000000000000001: function (e) {
        return e;
      },
      __wbindgen_cast_0000000000000002: function (e, t) {
        return Nf(e, t);
      },
      __wbindgen_cast_0000000000000003: function (e, t) {
        return Pf(e, t);
      },
      __wbindgen_cast_0000000000000004: function (e, t) {
        return Bf(e, t);
      },
      __wbindgen_cast_0000000000000005: function (e) {
        return BigInt.asUintN(64, e);
      },
      __wbindgen_init_externref_table: function () {
        let e = ep.__wbindgen_externrefs,
          t = e.grow(4);
        (e.set(0, void 0),
          e.set(t + 0, void 0),
          e.set(t + 1, null),
          e.set(t + 2, !0),
          e.set(t + 3, !1));
      },
    },
  };
}
function Mf(e) {
  let t = ep.__externref_table_alloc();
  return (ep.__wbindgen_externrefs.set(t, e), t);
}
function Nf(e, t) {
  return ((e >>>= 0), zf().subarray(e / 4, e / 4 + t));
}
function Pf(e, t) {
  return ((e >>>= 0), Hf().subarray(e / 4, e / 4 + t));
}
function Ff(e, t) {
  return ((e >>>= 0), Wf().subarray(e / 1, e / 1 + t));
}
var If = null;
function Lf() {
  return (
    (If === null ||
      If.buffer.detached === !0 ||
      (If.buffer.detached === void 0 && If.buffer !== ep.memory.buffer)) &&
      (If = new DataView(ep.memory.buffer)),
    If
  );
}
var Rf = null;
function zf() {
  return (
    (Rf === null || Rf.byteLength === 0) &&
      (Rf = new Float32Array(ep.memory.buffer)),
    Rf
  );
}
function Bf(e, t) {
  return ((e >>>= 0), Zf(e, t));
}
var Vf = null;
function Hf() {
  return (
    (Vf === null || Vf.byteLength === 0) &&
      (Vf = new Uint32Array(ep.memory.buffer)),
    Vf
  );
}
var Uf = null;
function Wf() {
  return (
    (Uf === null || Uf.byteLength === 0) &&
      (Uf = new Uint8Array(ep.memory.buffer)),
    Uf
  );
}
