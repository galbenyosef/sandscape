// SceneEditor-NC7_0wmu 26 — index
// Lines 19611-19947 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Bu(e) {
  let t;
  try {
    if (((t = zu && (self.URL || self.webkitURL).createObjectURL(zu)), !t))
      throw ``;
    let n = new Worker(t, { name: e?.name });
    return (
      n.addEventListener(`error`, () => {
        (self.URL || self.webkitURL).revokeObjectURL(t);
      }),
      n
    );
  } catch {
    return new Worker(
      `data:text/javascript;charset=utf-8,` + encodeURIComponent(Ru),
      { name: e?.name },
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
var Vu = class e {
  constructor() {
    ((this.queue = null),
      (this.messages = {}),
      (this.worker = new Bu()),
      (this.worker.onmessage = (e) => this.onMessage(e)));
  }
  onMessage(e) {
    var t;
    let { id: n, result: r, error: i, status: a } = e.data,
      o = this.messages[n];
    o &&
      (i === void 0
        ? a === void 0
          ? (delete this.messages[n], o.resolve(r))
          : (t = o.onStatus) == null || t.call(o, a)
        : (delete this.messages[n], o.reject(i)));
  }
  tryExclusive(e) {
    return this.queue == null ? this.exclusive(e) : null;
  }
  async exclusive(e) {
    let t = this.queue;
    t == null
      ? (this.queue = [])
      : await new Promise((e) => {
          t.push(() => e(void 0));
        });
    try {
      return await e(this);
    } finally {
      this.queue != null &&
        (this.queue.length === 0 ? (this.queue = null) : this.queue.shift()());
    }
  }
  async call(t, n, r = {}) {
    let i = ++e.currentId,
      a = new Promise((e, t) => {
        this.messages[i] = { resolve: e, reject: t, onStatus: r.onStatus };
      });
    return (
      this.worker.postMessage({ id: i, name: t, args: n }, { transfer: nu(n) }),
      await a
    );
  }
  dispose() {
    this.worker.terminate();
    let e = Object.values(this.messages);
    this.messages = {};
    for (let t of e) t.reject(Error(`Worker terminate`));
  }
};
Vu.currentId = 0;
var Hu = Vu,
  Uu = new (class {
    constructor(e = 4) {
      ((this.numWorkers = 0),
        (this.freelist = []),
        (this.queue = []),
        (this.maxWorkers = e));
    }
    async withWorker(e) {
      let t = await this.allocWorker();
      try {
        return await e(t);
      } finally {
        this.freeWorker(t);
      }
    }
    async allocWorker() {
      let e = this.freelist.pop();
      if (e) return e;
      if (this.numWorkers < this.maxWorkers) {
        let e = new Hu();
        return ((this.numWorkers += 1), e);
      }
      return new Promise((e) => {
        this.queue.push(e);
      });
    }
    freeWorker(e) {
      if (this.numWorkers > this.maxWorkers) {
        --this.numWorkers;
        return;
      }
      let t = this.queue.shift();
      if (t) {
        t(e);
        return;
      }
      this.freelist.push(e);
    }
  })(),
  Wu = { type: `Gsplat` },
  Gu = { type: `CovSplat` },
  Ku = { type: `PackedSplats` },
  qu = { type: `ExtSplats` },
  Ju = (e, t) => new sd({ packedSplats: e, index: t }),
  Yu = (e, t, n, r) => new cd({ packedSplats: e, index: t, base: n, count: r }),
  Xu = (e, t) => new dd({ extSplats: e, index: t }),
  Zu = (e) => new fd({ gsplat: e }),
  Qu = (e) => new pd({ gsplat: e }),
  $u = ({
    gsplat: e,
    flags: t,
    index: n,
    center: r,
    scales: i,
    quaternion: a,
    rgba: o,
    rgb: s,
    opacity: c,
    x: l,
    y: u,
    z: d,
    r: f,
    g: p,
    b: m,
  }) =>
    new md({
      gsplat: e,
      flags: t,
      index: n,
      center: r,
      scales: i,
      quaternion: a,
      rgba: o,
      rgb: s,
      opacity: c,
      x: l,
      y: u,
      z: d,
      r: f,
      g: p,
      b: m,
    }),
  ed = (e, { scale: t, rotate: n, translate: r, recolor: i }) =>
    new hd({ gsplat: e, scale: t, rotate: n, translate: r, recolor: i }),
  td = (e) => new bd({ index: e }),
  nd = (e) => new xd({ index: e }),
  rd = Rl(`
  struct Gsplat {
    vec3 center;
    uint flags;
    vec3 scales;
    int index;
    vec4 quaternion;
    vec4 rgba;
  };
  const uint GSPLAT_FLAG_ACTIVE = 1u << 0u;

  bool isGsplatActive(uint flags) {
    return (flags & GSPLAT_FLAG_ACTIVE) != 0u;
  }
`),
  id = Rl(`
  struct CovSplat {
    vec3 center;
    uint flags;
    vec4 rgba;
    vec3 xxyyzz;
    int index;
    vec3 xyxzyz;
  };

  bool isCovSplatActive(uint flags) {
    return (flags & GSPLAT_FLAG_ACTIVE) != 0u;
  }
`),
  ad = Rl(`
  struct PackedSplats {
    usampler2DArray textureArray;
    int numSplats;
    vec4 rgbMinMaxLnScaleMinMax;
    bool lodOpacity;
  };
`),
  od = Rl(`
  bool readPackedArray(usampler2DArray texture, int numSplats, vec4 rgbMinMaxLnScaleMinMax, int index, out Gsplat gsplat) {
    if ((index >= 0) && (index < numSplats)) {
      uvec4 packedData = texelFetch(texture, splatTexCoord(index), 0);
      unpackSplatEncoding(packedData, gsplat.center, gsplat.scales, gsplat.quaternion, gsplat.rgba, rgbMinMaxLnScaleMinMax);
      return true;
    } else {
      return false;
    }
  }
`),
  sd = class extends Ml {
    constructor({ packedSplats: e, index: t }) {
      super({
        inTypes: { packedSplats: Ku, index: `int` },
        outTypes: { gsplat: Wu },
        inputs: { packedSplats: e, index: t },
        globals: () => [rd, ad, od],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n } = t;
          if (!n) return [];
          let { packedSplats: r, index: i } = e,
            a;
          return (
            (a =
              r && i
                ? Ll(`
            ${n}.flags = 0u;
            if (readPackedArray(${r}.textureArray, ${r}.numSplats, ${r}.rgbMinMaxLnScaleMinMax, ${i}, ${n})) {
              if (${r}.lodOpacity) {
                ${n}.rgba.a = 2.0 * ${n}.rgba.a;
              }
              bool zeroSize = all(equal(${n}.scales, vec3(0.0, 0.0, 0.0)));
              ${n}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
            }
          `)
                : [`${n}.flags = 0u;`]),
            a.push(`${n}.index = ${i ?? `0`};`),
            a
          );
        },
      });
    }
    dynoOut() {
      return new Tl(this, `gsplat`);
    }
  },
  cd = class extends Ml {
    constructor({ packedSplats: e, index: t, base: n, count: r }) {
      super({
        inTypes: { packedSplats: Ku, index: `int`, base: `int`, count: `int` },
        outTypes: { gsplat: Wu },
        inputs: { packedSplats: e, index: t, base: n, count: r },
        globals: () => [rd, ad, od],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n } = t;
          if (!n) return [];
          let { packedSplats: r, index: i, base: a, count: o } = e,
            s;
          return (
            (s =
              r && i && a && o
                ? Ll(`
            ${n}.flags = 0u;
            if (readPackedArray(${r}.textureArray, ${r}.numSplats, ${r}.rgbMinMaxLnScaleMinMax, ${i}, ${n})) {
              if (${r}.lodOpacity) {
                ${n}.rgba.a = 2.0 * ${n}.rgba.a;
              }
              bool zeroSize = all(equal(${n}.scales, vec3(0.0, 0.0, 0.0)));
              ${n}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
            }
          `)
                : [`${n}.flags = 0u;`]),
            s.push(`${n}.index = ${i ?? `0`};`),
            s
          );
        },
      });
    }
    dynoOut() {
      return new Tl(this, `gsplat`);
    }
  },
  ld = Rl(`
  struct ExtSplats {
    usampler2DArray textureArray1;
    usampler2DArray textureArray2;
    int numSplats;
  };
`),
  ud = Rl(`
  void readExtArrays(usampler2DArray texture1, usampler2DArray texture2, int numSplats, int index, out Gsplat gsplat) {
    gsplat.flags = 0u;
    if ((index >= 0) && (index < numSplats)) {
      ivec3 coord = splatTexCoord(index);
      uvec4 packed1 = texelFetch(texture1, coord, 0);
      uvec4 packed2 = texelFetch(texture2, coord, 0);
      unpackSplatExt(packed1, packed2, gsplat.center, gsplat.scales, gsplat.quaternion, gsplat.rgba);
      gsplat.flags = all(equal(gsplat.scales, vec3(0.0, 0.0, 0.0))) ? 0u : GSPLAT_FLAG_ACTIVE;
      gsplat.index = index;
    }
  }
`),
  dd = class extends Ml {
    constructor({ extSplats: e, index: t }) {
      super({
        inTypes: { extSplats: qu, index: `int` },
        outTypes: { gsplat: Wu },
        inputs: { extSplats: e, index: t },
        globals: () => [rd, ld, ud],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n } = t;
          if (!n) return [`${n}.flags = 0u;`];
          let { extSplats: r, index: i } = e;
          return r && i
            ? Ll(`
            readExtArrays(${r}.textureArray1, ${r}.textureArray2, ${r}.numSplats, ${i}, ${n});
          `)
            : [`${n}.flags = 0u;`];
        },
      });
    }
    dynoOut() {
      return new Tl(this, `gsplat`);
    }
  };
Rl(`
  void readCovArrays(usampler2DArray texture1, usampler2DArray texture2, int numSplats, int index, out CovSplat covsplat) {
    covsplat.flags = 0u;
    if ((index >= 0) && (index < numSplats)) {
      ivec3 coord = splatTexCoord(index);
      uvec4 packed1 = texelFetch(texture1, coord, 0);
      uvec4 packed2 = texelFetch(texture2, coord, 0);
      unpackSplatExtCov(packed1, packed2, covsplat.center, covsplat.rgba, covsplat.xxyyzz, covsplat.xyxzyz);
      covsplat.flags = (all(equal(covsplat.xxyyzz, vec3(0.0))) && all(equal(covsplat.xyxzyz, vec3(0.0)))) ? 0u : GSPLAT_FLAG_ACTIVE;
      gsplat.index = index;
    }
  }
`);
