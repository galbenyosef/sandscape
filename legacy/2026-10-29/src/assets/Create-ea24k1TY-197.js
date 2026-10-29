// Create-ea24k1TY 197 — register
// Lines 66403-66618 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var a$ = {
    POSITION: [
      `byte`,
      `byte normalized`,
      `unsigned byte`,
      `unsigned byte normalized`,
      `short`,
      `short normalized`,
      `unsigned short`,
      `unsigned short normalized`,
    ],
    NORMAL: [`byte normalized`, `short normalized`],
    TANGENT: [`byte normalized`, `short normalized`],
    TEXCOORD: [
      `byte`,
      `byte normalized`,
      `unsigned byte`,
      `short`,
      `short normalized`,
      `unsigned short`,
    ],
  },
  o$ = class {
    constructor() {
      ((this.textureUtils = null),
        (this.pluginCallbacks = []),
        this.register(function (e) {
          return new D$(e);
        }),
        this.register(function (e) {
          return new O$(e);
        }),
        this.register(function (e) {
          return new M$(e);
        }),
        this.register(function (e) {
          return new N$(e);
        }),
        this.register(function (e) {
          return new P$(e);
        }),
        this.register(function (e) {
          return new F$(e);
        }),
        this.register(function (e) {
          return new k$(e);
        }),
        this.register(function (e) {
          return new A$(e);
        }),
        this.register(function (e) {
          return new j$(e);
        }),
        this.register(function (e) {
          return new I$(e);
        }),
        this.register(function (e) {
          return new L$(e);
        }),
        this.register(function (e) {
          return new R$(e);
        }),
        this.register(function (e) {
          return new z$(e);
        }),
        this.register(function (e) {
          return new B$(e);
        }));
    }
    register(e) {
      return (
        this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
        this
      );
    }
    unregister(e) {
      return (
        this.pluginCallbacks.indexOf(e) !== -1 &&
          this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
      );
    }
    setTextureUtils(e) {
      return ((this.textureUtils = e), this);
    }
    parse(e, t, n, r) {
      let i = new E$(),
        a = [];
      for (let e = 0, t = this.pluginCallbacks.length; e < t; e++)
        a.push(this.pluginCallbacks[e](i));
      (i.setPlugins(a),
        i.setTextureUtils(this.textureUtils),
        i.writeAsync(e, t, r).catch(n));
    }
    parseAsync(e, t) {
      let n = this;
      return new Promise(function (r, i) {
        n.parse(e, r, i, t);
      });
    }
  },
  s$ = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    INT: 5124,
    UNSIGNED_INT: 5125,
    FLOAT: 5126,
    ARRAY_BUFFER: 34962,
    ELEMENT_ARRAY_BUFFER: 34963,
    NEAREST: 9728,
    LINEAR: 9729,
    NEAREST_MIPMAP_NEAREST: 9984,
    LINEAR_MIPMAP_NEAREST: 9985,
    NEAREST_MIPMAP_LINEAR: 9986,
    LINEAR_MIPMAP_LINEAR: 9987,
    CLAMP_TO_EDGE: 33071,
    MIRRORED_REPEAT: 33648,
    REPEAT: 10497,
  },
  c$ = `KHR_mesh_quantization`,
  l$ = {};
((l$[Vi] = s$.NEAREST),
  (l$[Uee] = s$.NEAREST_MIPMAP_NEAREST),
  (l$[qee] = s$.NEAREST_MIPMAP_LINEAR),
  (l$[ea] = s$.LINEAR),
  (l$[ia] = s$.LINEAR_MIPMAP_NEAREST),
  (l$[Kee] = s$.LINEAR_MIPMAP_LINEAR),
  (l$[yi] = s$.CLAMP_TO_EDGE),
  (l$[Na] = s$.REPEAT),
  (l$[Ni] = s$.MIRRORED_REPEAT));
var u$ = {
    scale: `scale`,
    position: `translation`,
    quaternion: `rotation`,
    morphTargetInfluences: `weights`,
  },
  d$ = new Ui(),
  f$ = 12,
  p$ = 1179937895,
  m$ = 2,
  h$ = 8,
  g$ = 1313821514,
  _$ = 5130562;
function v$(e, t) {
  return (
    e.length === t.length &&
    e.every(function (e, n) {
      return e === t[n];
    })
  );
}
function y$(e) {
  return new TextEncoder().encode(e).buffer;
}
function b$(e) {
  return v$(e.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function x$(e, t, n) {
  let r = {
    min: Array(e.itemSize).fill(1 / 0),
    max: Array(e.itemSize).fill(-1 / 0),
  };
  for (let i = t; i < t + n; i++)
    for (let t = 0; t < e.itemSize; t++) {
      let n;
      (e.itemSize > 4
        ? (n = e.array[i * e.itemSize + t])
        : (t === 0
            ? (n = e.getX(i))
            : t === 1
              ? (n = e.getY(i))
              : t === 2
                ? (n = e.getZ(i))
                : t === 3 && (n = e.getW(i)),
          e.normalized === !0 && (n = Si.normalize(n, e.array))),
        (r.min[t] = Math.min(r.min[t], n)),
        (r.max[t] = Math.max(r.max[t], n)));
    }
  return r;
}
function S$(e) {
  return Math.ceil(e / 4) * 4;
}
function C$(e, t = 0) {
  let n = S$(e.byteLength);
  if (n !== e.byteLength) {
    let r = new Uint8Array(n);
    if ((r.set(new Uint8Array(e)), t !== 0))
      for (let i = e.byteLength; i < n; i++) r[i] = t;
    return r.buffer;
  }
  return e;
}
function w$() {
  return typeof document > `u` && typeof OffscreenCanvas < `u`
    ? new OffscreenCanvas(1, 1)
    : document.createElement(`canvas`);
}
function T$(e, t) {
  if (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas) {
    let n;
    return (
      t === `image/jpeg` ? (n = 0.92) : t === `image/webp` && (n = 0.8),
      e.convertToBlob({ type: t, quality: n })
    );
  } else return new Promise((n) => e.toBlob(n, t));
}
