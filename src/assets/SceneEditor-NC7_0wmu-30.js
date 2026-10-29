// SceneEditor-NC7_0wmu 30 — extra
// Lines 20892-21433 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Zd = (e, t) => new ef({ a: e, b: t }),
  Qd = (e, t) => new tf({ a: e, b: t }),
  $d = (e, t) => new nf({ a: e, b: t }),
  ef = class extends Bl {
    constructor({ a: e, b: t }) {
      (super({ a: e, b: t, outKey: `sum`, outTypeFunc: Jd }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `${t.sum} = ${e.a} + ${e.b};`,
        ]));
    }
  },
  tf = class extends Bl {
    constructor({ a: e, b: t }) {
      (super({ a: e, b: t, outKey: `difference`, outTypeFunc: Yd }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `${t.difference} = ${e.a} - ${e.b};`,
        ]));
    }
  },
  nf = class extends Bl {
    constructor({ a: e, b: t }) {
      (super({ a: e, b: t, outKey: `product`, outTypeFunc: Xd }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `${t.product} = ${e.a} * ${e.b};`,
        ]));
    }
  },
  rf = (e) => new sf({ value: e }),
  af = (e) => new cf({ value: e }),
  of = (e) => new lf({ value: e }),
  sf = class extends zl {
    constructor({ value: e }) {
      (super({ a: e, outKey: `uint`, outTypeFunc: () => `uint` }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `${t.uint} = floatBitsToUint(${e.a});`,
        ]));
    }
  },
  cf = class extends zl {
    constructor({ value: e }) {
      (super({ a: e, outKey: `uint`, outTypeFunc: () => `uint` }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `${t.uint} = packHalf2x16(${e.a});`,
        ]));
    }
  },
  lf = class extends zl {
    constructor({ value: e }) {
      (super({ a: e, outKey: `rgba8`, outTypeFunc: () => `vec4` }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `uvec4 uRgba = uvec4(${e.a} & 0xffu, (${e.a} >> 8u) & 0xffu, (${e.a} >> 16u) & 0xffu, (${e.a} >> 24u) & 0xffu);`,
          `${t.rgba8} = vec4(uRgba) / 255.0;`,
        ]));
    }
  },
  uf = (e) => new ff({ a: e }),
  df = ({
    vector: e,
    vectorType: t,
    x: n,
    y: r,
    z: i,
    w: a,
    r: o,
    g: s,
    b: c,
    a: l,
  }) =>
    new pf({
      vector: e,
      vectorType: t,
      x: n,
      y: r,
      z: i,
      w: a,
      r: o,
      g: s,
      b: c,
      a: l,
    }),
  ff = class extends zl {
    constructor({ a: e }) {
      (super({ a: e, outTypeFunc: (e) => e, outKey: `normalize` }),
        (this.statements = ({ inputs: e, outputs: t }) => [
          `${t.normalize} = normalize(${e.a});`,
        ]));
    }
  },
  pf = class extends Ml {
    constructor({
      vector: e,
      vectorType: t,
      x: n,
      y: r,
      z: i,
      w: a,
      r: o,
      g: s,
      b: c,
      a: l,
    }) {
      if (!e && !t) throw Error(`Either vector or vectorType must be provided`);
      let u = t ?? Cl(e),
        d = vl(u),
        f = yl(u),
        p = { vector: u, x: d, y: d, r: d, g: d },
        m = { vector: e, x: n, y: r, r: o, g: s };
      (f >= 3 &&
        (Object.assign(p, { z: d, b: d }), Object.assign(m, { z: i, b: c })),
        f >= 4 &&
          (Object.assign(p, { w: d, a: d }), Object.assign(m, { w: a, a: l })),
        super({ inTypes: p, outTypes: { vector: u }, inputs: m }),
        (this.statements = ({ inputs: e, outputs: t }) => {
          let { vector: n } = t,
            { vector: r, x: i, y: a, z: o, w: s, r: c, g: l, b: u, a: p } = e,
            m = [
              `${n}.x = ${i ?? c ?? (r ? `${r}.x` : kl(d))};`,
              `${n}.y = ${a ?? l ?? (r ? `${r}.y` : kl(d))};`,
            ];
          return (
            f >= 3 && m.push(`${n}.z = ${o ?? u ?? (r ? `${r}.z` : kl(d))};`),
            f >= 4 && m.push(`${n}.w = ${s ?? p ?? (r ? `${r}.w` : kl(d))};`),
            m
          );
        }));
    }
    dynoOut() {
      return new Tl(this, `vector`);
    }
  },
  mf = (e, { scale: t, scales: n, rotate: r, translate: i }) =>
    new gf({ position: e, scale: t, scales: n, rotate: r, translate: i })
      .outputs.position,
  hf = (e, { scale: t, scales: n, rotate: r }) =>
    new _f({ dir: e, scale: t, scales: n, rotate: r }).outputs.dir,
  gf = class extends Ml {
    constructor({ position: e, scale: t, scales: n, rotate: r, translate: i }) {
      super({
        inTypes: {
          position: `vec3`,
          scale: `float`,
          scales: `vec3`,
          rotate: `vec4`,
          translate: `vec3`,
        },
        outTypes: { position: `vec3` },
        inputs: { position: e, scale: t, scales: n, rotate: r, translate: i },
        statements: ({ inputs: e, outputs: t }) => {
          let { position: n } = t;
          if (!n) return [];
          let { scale: r, scales: i, rotate: a, translate: o } = e;
          return [
            `${n} = ${e.position ?? `vec3(0.0, 0.0, 0.0)`};`,
            r ? `${n} *= ${r};` : null,
            i ? `${n} *= ${i};` : null,
            a ? `${n} = quatVec(${a}, ${n});` : null,
            o ? `${n} += ${o};` : null,
          ].filter(Boolean);
        },
      });
    }
  },
  _f = class extends Ml {
    constructor({ dir: e, scale: t, scales: n, rotate: r }) {
      super({
        inTypes: {
          dir: `vec3`,
          scale: `float`,
          scales: `vec3`,
          rotate: `vec4`,
        },
        outTypes: { dir: `vec3` },
        inputs: { dir: e, scale: t, scales: n, rotate: r },
        statements: ({ inputs: e, outputs: t }) => {
          let { dir: n } = t;
          if (!n) return [];
          let { scale: r, scales: i, rotate: a } = e;
          return [
            `${n} = ${e.dir ?? `vec3(0.0, 0.0, 0.0)`};`,
            r ? `${n} *= ${r};` : null,
            i ? `${n} *= ${i};` : null,
            a ? `${n} = quatVec(${a}, ${n});` : null,
          ].filter(Boolean);
        },
      });
    }
  },
  vf = class e {
    constructor(t = {}) {
      ((this.maxSplats = 0),
        (this.numSplats = 0),
        (this.extra = {}),
        (this.maxSh = 3),
        (this.isInitialized = !1),
        (this.extArrays = [new Uint32Array(), new Uint32Array()]),
        (this.textures = [e.emptyTexture, e.emptyTexture]),
        (this.extra = {}),
        (this.dyno = new bf({ extSplats: this })),
        (this.dynoNumSh = new Ld({
          key: `numSh`,
          value: 0,
          update: () => Math.min(this.getNumSh(), this.maxSh),
        })),
        (this.initialized = Promise.resolve(this)),
        this.reinitialize(t));
    }
    reinitialize(e) {
      ((this.isInitialized = !1),
        (this.extra = {}),
        (this.maxSplats = e.maxSplats ?? 0),
        (this.lod = e.lod),
        (this.nonLod = e.nonLod),
        e.url || e.fileBytes || e.stream || e.construct
          ? (this.initialized = this.asyncInitialize(e).then(
              () => ((this.isInitialized = !0), this),
            ))
          : (this.initialize(e),
            (this.isInitialized = !0),
            (this.initialized = Promise.resolve(this))));
    }
    initialize(e) {
      ((this.extra = e.extra ?? {}),
        (this.lodSplats = e.lodSplats),
        e.extArrays
          ? ((this.extArrays = e.extArrays),
            (this.maxSplats = Math.floor(
              Math.min(
                this.extArrays[0].length / 4,
                this.extArrays[1].length / 4,
              ),
            )),
            (this.numSplats = e.numSplats ?? this.maxSplats),
            (this.maxSplats = Math.floor(this.maxSplats / Q) * Q),
            (this.numSplats = Math.min(this.maxSplats, e.numSplats ?? 1 / 0)),
            this.updateTextures())
          : ((this.maxSplats = e.maxSplats ?? 0),
            (this.numSplats = 0),
            (this.extArrays = [new Uint32Array(), new Uint32Array()])));
    }
    async asyncInitialize(e) {
      let {
        url: t,
        fileBytes: n,
        fileType: r,
        fileName: i,
        stream: a,
        streamLength: o,
        construct: s,
        lod: c,
        nonLod: l,
        lodAbove: u,
      } = e;
      ((this.lod = c), (this.nonLod = l));
      let d = new bm();
      if (
        ((n || t || a) &&
          (await d.loadInternalAsync({
            extSplats: this,
            url: t,
            fileBytes: n,
            fileType: r,
            fileName: i,
            stream: a,
            streamLength: o,
            onProgress: e.onProgress,
            lodAbove: u,
          })),
        s)
      ) {
        let e = s(this);
        e instanceof Promise && (await e);
      }
    }
    dispose() {
      (this.textures[0] !== e.emptyTexture &&
        (this.textures[0].dispose(),
        (this.textures[0].source.data = null),
        (this.textures[0] = e.emptyTexture)),
        this.textures[1] !== e.emptyTexture &&
          (this.textures[1].dispose(),
          (this.textures[1].source.data = null),
          (this.textures[1] = e.emptyTexture)),
        (this.extArrays = [new Uint32Array(), new Uint32Array()]));
      for (let e in this.extra) {
        let t = this.extra[e];
        if (t instanceof Fd) {
          let e = t.value;
          e?.isTexture && (e.dispose(), (e.source.data = null));
        }
      }
      ((this.extra = {}), this.disposeLodSplats());
    }
    prepareFetchSplat() {}
    getNumSplats() {
      return this.numSplats;
    }
    hasRgbDir() {
      return Math.min(this.getNumSh(), this.maxSh) > 0;
    }
    getNumSh() {
      return this.extra.sh1
        ? this.extra.sh2
          ? !this.extra.sh3a || !this.extra.sh3b
            ? 2
            : 3
          : 1
        : 0;
    }
    setMaxSh(e) {
      this.maxSh = e;
    }
    fetchSplat({ index: e, viewOrigin: t }) {
      let n = Xu(this.dyno, e);
      if (this.hasRgbDir() && t) {
        let r = Qu(n).outputs.center,
          i = uf(Qd(r, t)),
          {
            sh1Texture: a,
            sh2Texture: o,
            sh3TextureA: s,
            sh3TextureB: c,
          } = this.ensureShTextures(),
          { rgb: l } = wf({
            coord: td(e),
            viewDir: i,
            numSh: this.dynoNumSh,
            sh1Texture: a,
            sh2Texture: o,
            sh3TextureA: s,
            sh3TextureB: c,
          });
        ((l = Zd(l, Qu(n).outputs.rgb)), (n = $u({ gsplat: n, rgb: l })));
      }
      return n;
    }
    ensureShTextures() {
      if (!this.extra.sh1) return {};
      let e = this.extra.sh1Texture;
      if (!e) {
        let t = this.extra.sh1,
          { width: n, height: r, depth: i, maxSplats: a } = du(t.length / 4);
        if (t.length < a * 4) {
          let e = new Uint32Array(a * 4);
          (e.set(t), (this.extra.sh1 = e), (t = e));
        }
        ((e = new Ud({ value: Tf(t, n, r, i, Vt, B, `RGBA32UI`), key: `sh1` })),
          (this.extra.sh1Texture = e));
      }
      if (!this.extra.sh2) return { sh1Texture: e };
      let t = this.extra.sh2Texture;
      if (!t) {
        let e = this.extra.sh2,
          { width: n, height: r, depth: i, maxSplats: a } = du(e.length / 4);
        if (e.length < a * 4) {
          let t = new Uint32Array(a * 4);
          (t.set(e), (this.extra.sh2 = t), (e = t));
        }
        ((t = new Ud({ value: Tf(e, n, r, i, Vt, B, `RGBA32UI`), key: `sh2` })),
          (this.extra.sh2Texture = t));
      }
      if (!this.extra.sh3a || !this.extra.sh3b)
        return { sh1Texture: e, sh2Texture: t };
      let n = this.extra.sh3TextureA;
      if (!n) {
        let e = this.extra.sh3a,
          { width: t, height: r, depth: i, maxSplats: a } = du(e.length / 4);
        if (e.length < a * 4) {
          let t = new Uint32Array(a * 4);
          (t.set(e), (this.extra.sh3a = t), (e = t));
        }
        ((n = new Ud({ value: Tf(e, t, r, i, Vt, B, `RGBA32UI`), key: `sh3` })),
          (this.extra.sh3TextureA = n));
      }
      let r = this.extra.sh3TextureB;
      if (!r) {
        let e = this.extra.sh3b,
          { width: t, height: n, depth: i, maxSplats: a } = du(e.length / 4);
        if (e.length < a * 4) {
          let t = new Uint32Array(a * 4);
          (t.set(e), (this.extra.sh3b = t), (e = t));
        }
        ((r = new Ud({
          value: Tf(e, t, n, i, Vt, B, `RGBA32UI`),
          key: `sh3b`,
        })),
          (this.extra.sh3TextureB = r));
      }
      return { sh1Texture: e, sh2Texture: t, sh3TextureA: n, sh3TextureB: r };
    }
    ensureSplats(e) {
      let t =
          e <= this.maxSplats
            ? this.maxSplats
            : Math.max(e, 2 * this.maxSplats),
        n = this.extArrays[0] ? this.extArrays[0].length / 4 : 0;
      if (!this.extArrays[0] || t > n) {
        this.maxSplats = du(t).maxSplats;
        let e = new Uint32Array(this.maxSplats * 4),
          n = new Uint32Array(this.maxSplats * 4);
        (this.extArrays[0] &&
          (e.set(this.extArrays[0]), n.set(this.extArrays[1])),
          (this.extArrays[0] = e),
          (this.extArrays[1] = n));
      }
      return this.extArrays;
    }
    getSplat(e) {
      if (e >= this.numSplats) throw Error(`Invalid index`);
      return ou(this.extArrays, e);
    }
    setSplat(e, t, n, r, i, a) {
      (au(
        this.ensureSplats(e + 1),
        e,
        t.x,
        t.y,
        t.z,
        n.x,
        n.y,
        n.z,
        r.x,
        r.y,
        r.z,
        r.w,
        i,
        a.r,
        a.g,
        a.b,
      ),
        (this.numSplats = Math.max(this.numSplats, e + 1)));
    }
    pushSplat(e, t, n, r, i) {
      (au(
        this.ensureSplats(this.numSplats + 1),
        this.numSplats,
        e.x,
        e.y,
        e.z,
        t.x,
        t.y,
        t.z,
        n.x,
        n.y,
        n.z,
        n.w,
        r,
        i.r,
        i.g,
        i.b,
      ),
        ++this.numSplats);
    }
    forEachSplat(e) {
      if (this.numSplats)
        for (let t = 0; t < this.numSplats; ++t) {
          let n = ou(this.extArrays, t);
          e(t, n.center, n.scales, n.quaternion, n.opacity, n.color);
        }
    }
    updateTextures() {
      if (this.textures[0] !== e.emptyTexture) {
        let { width: t, height: n, depth: r } = this.textures[0].image;
        this.maxSplats !== t * n * r &&
          (this.textures[0].dispose(),
          (this.textures[0] = e.emptyTexture),
          this.textures[1].dispose(),
          (this.textures[1] = e.emptyTexture));
      }
      if (this.textures[0] === e.emptyTexture) {
        let { width: e, height: t, depth: n } = du(this.maxSplats);
        ((this.textures[0] = Tf(this.extArrays[0], e, t, n, Vt, B, `RGBA32UI`)),
          (this.textures[1] = Tf(
            this.extArrays[1],
            e,
            t,
            n,
            Vt,
            B,
            `RGBA32UI`,
          )));
      } else
        this.extArrays[0].buffer !== this.textures[0].image.data.buffer &&
          ((this.textures[0].image.data = new Uint8Array(
            this.extArrays[0].buffer,
          )),
          (this.textures[1].image.data = new Uint8Array(
            this.extArrays[1].buffer,
          )),
          (this.textures[0].needsUpdate = !0),
          (this.textures[1].needsUpdate = !0));
    }
    extractSplats(t, n) {
      let r = du(t.length).maxSplats,
        i = new e({ maxSplats: r });
      for (let e = 0; e < t.length; e++) {
        let r = this.getSplat(t[e]);
        if (n) {
          let n = (t[e] >>> 16) * 0.61803398875;
          n -= Math.floor(n);
          let i = Math.max(0, Math.min(1, Math.abs(n * 6 - 3) - 1)),
            a = Math.max(0, Math.min(1, Math.abs(n * 6 + 1) - 1)),
            o = Math.max(0, Math.min(1, Math.abs(n * 6 - 1) - 1));
          ((r.color.r *= i), (r.color.g *= a), (r.color.b *= o));
        }
        i.pushSplat(r.center, r.scales, r.quaternion, r.opacity, r.color);
      }
      return i;
    }
    disposeLodSplats() {
      this.lodSplats &&= (this.lodSplats.dispose(), void 0);
    }
    async createLodSplats({ rgbaArray: t, quality: n } = {}) {
      let r =
          typeof this.lod == `number`
            ? Math.max(1.1, Math.min(2, this.lod))
            : n
              ? 1.75
              : 1.5,
        i = [this.extArrays[0].slice(), this.extArrays[1].slice()],
        a = t ? (await t.getArray()).slice() : void 0,
        o = {
          sh1: this.extra.sh1 ? this.extra.sh1.slice() : void 0,
          sh2: this.extra.sh2 ? this.extra.sh2.slice() : void 0,
          sh3: this.extra.sh3 ? this.extra.sh3.slice() : void 0,
        },
        s = await Uu.withWorker(
          async (e) =>
            await e.call(n ? `qualityLodExtSplats` : `tinyLodExtSplats`, {
              numSplats: this.numSplats,
              extArrays: i,
              extra: o,
              lodBase: r,
              rgba: a,
            }),
        ),
        c = new e(s);
      (this.lodSplats && this.lodSplats.dispose(),
        (this.lodSplats = c),
        (this.nonLod = !0),
        (this.lod = !n || `quality`));
    }
  };
