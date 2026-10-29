// SceneEditor-NC7_0wmu 49 — extra
// Lines 27993-28460 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Em = class e {
  constructor(e = {}) {
    ((this.maxSplats = 0),
      (this.numSplats = 0),
      (this.packedArray = null),
      (this.maxSh = 3),
      (this.isInitialized = !1),
      (this.target = null),
      (this.source = null),
      (this.needsUpdate = !0),
      (this.extra = {}),
      (this.dyno = new Om({ packedSplats: this })),
      (this.dynoRgbMinMaxLnScaleMinMax = new Bd({
        key: `rgbMinMaxLnScaleMinMax`,
        value: new vn(0, 1, -12, 9),
        update: (e) => (
          e.set(
            this.splatEncoding?.rgbMin ?? 0,
            this.splatEncoding?.rgbMax ?? 1,
            this.splatEncoding?.lnScaleMin ?? -12,
            this.splatEncoding?.lnScaleMax ?? 9,
          ),
          e
        ),
      })),
      (this.dynoNumSh = new Ld({
        key: `numSh`,
        value: 0,
        update: () => Math.min(this.getNumSh(), this.maxSh),
      })),
      (this.dynoShMax = new zd({
        key: `shMax`,
        value: new U(),
        update: (e) => (
          e.set(
            this.splatEncoding?.sh1Max ?? 1,
            this.splatEncoding?.sh2Max ?? 1,
            this.splatEncoding?.sh3Max ?? 1,
          ),
          e
        ),
      })),
      (this.initialized = Promise.resolve(this)),
      this.reinitialize(e));
  }
  reinitialize(e) {
    ((this.isInitialized = !1),
      (this.extra = {}),
      (this.maxSplats = e.maxSplats ?? 0),
      (this.splatEncoding = e.splatEncoding),
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
      (this.splatEncoding = e.splatEncoding ?? this.splatEncoding),
      (this.lodSplats = e.lodSplats),
      e.packedArray
        ? ((this.packedArray = e.packedArray),
          (this.numSplats = e.numSplats ?? this.packedArray.length / 4),
          (this.maxSplats = Math.floor(this.packedArray.length / 4)),
          (this.maxSplats = Math.floor(this.maxSplats / Q) * Q),
          (this.numSplats = Math.min(this.maxSplats, e.numSplats ?? 1 / 0)))
        : ((this.maxSplats = e.maxSplats ?? 0), (this.numSplats = 0)));
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
          packedSplats: this,
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
    ((this.target &&=
      (this.target.dispose(), (this.target.texture.source.data = null), null)),
      (this.source &&=
        (this.source.dispose(), (this.source.source.data = null), null)),
      (this.packedArray = null));
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
    return this.extra.sh1 ? (this.extra.sh2 ? (this.extra.sh3 ? 3 : 2) : 1) : 0;
  }
  setMaxSh(e) {
    this.maxSh = e;
  }
  fetchSplat({ index: e, viewOrigin: t }) {
    let n = Ju(this.dyno, e);
    if (this.hasRgbDir() && t) {
      let r = Qu(n).outputs.center,
        i = uf(Qd(r, t)),
        {
          sh1Texture: a,
          sh2Texture: o,
          sh3Texture: s,
        } = this.ensureShTextures(),
        { rgb: c } = Mm({
          coord: td(e),
          viewDir: i,
          numSh: this.dynoNumSh,
          sh1Texture: a,
          sh2Texture: o,
          sh3Texture: s,
          shMax: this.dynoShMax,
        });
      ((c = Zd(c, Qu(n).outputs.rgb)), (n = $u({ gsplat: n, rgb: c })));
    }
    return n;
  }
  ensureShTextures() {
    if (!this.extra.sh1) return {};
    let e = this.extra.sh1Texture;
    if (!e) {
      let t = this.extra.sh1,
        { width: n, height: r, depth: i, maxSplats: a } = du(t.length / 2);
      if (t.length < a * 2) {
        let e = new Uint32Array(a * 2);
        (e.set(t), (this.extra.sh1 = e), (t = e));
      }
      let o = new Re(t, n, r, i);
      ((o.format = Xt),
        (o.type = B),
        (o.internalFormat = `RG32UI`),
        (o.needsUpdate = !0),
        (e = new Ud({ value: o, key: `sh1` })),
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
      let o = new Re(e, n, r, i);
      ((o.format = Vt),
        (o.type = B),
        (o.internalFormat = `RGBA32UI`),
        (o.needsUpdate = !0),
        (t = new Ud({ value: o, key: `sh2` })),
        (this.extra.sh2Texture = t));
    }
    if (!this.extra.sh3) return { sh1Texture: e, sh2Texture: t };
    let n = this.extra.sh3Texture;
    if (!n) {
      let e = this.extra.sh3,
        { width: t, height: r, depth: i, maxSplats: a } = du(e.length / 4);
      if (e.length < a * 4) {
        let t = new Uint32Array(a * 4);
        (t.set(e), (this.extra.sh3 = t), (e = t));
      }
      let o = new Re(e, t, r, i);
      ((o.format = Vt),
        (o.type = B),
        (o.internalFormat = `RGBA32UI`),
        (o.needsUpdate = !0),
        (n = new Ud({ value: o, key: `sh3` })),
        (this.extra.sh3Texture = n));
    }
    return { sh1Texture: e, sh2Texture: t, sh3Texture: n };
  }
  ensureSplats(e) {
    let t =
        e <= this.maxSplats ? this.maxSplats : Math.max(e, 2 * this.maxSplats),
      n = this.packedArray ? this.packedArray.length / 4 : 0;
    if (!this.packedArray || t > n) {
      this.maxSplats = du(t).maxSplats;
      let e = new Uint32Array(this.maxSplats * 4);
      (this.packedArray && e.set(this.packedArray), (this.packedArray = e));
    }
    return this.packedArray;
  }
  ensureSplatsSh(e, t) {
    let n, r;
    if (e === 0) return this.ensureSplats(t);
    if (e === 1) ((n = 2), (r = `sh1`));
    else if (e === 2) ((n = 4), (r = `sh2`));
    else if (e === 3) ((n = 4), (r = `sh3`));
    else throw Error(`Invalid level: ${e}`);
    let i = this.extra[r] ? this.extra[r].length / n : 0,
      a = t <= i ? i : Math.max(t, 2 * i);
    if (!this.extra[r] || a > i) {
      i = du(a).maxSplats;
      let e = new Uint32Array(i * n);
      (this.extra[r] && e.set(this.extra[r]), (this.extra[r] = e));
    }
    return this.extra[r];
  }
  getSplat(e) {
    if (!this.packedArray || e >= this.numSplats) throw Error(`Invalid index`);
    return uu(this.packedArray, e, this.splatEncoding);
  }
  setSplat(e, t, n, r, i, a) {
    (su(
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
    (su(
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
    if (!(!this.packedArray || !this.numSplats))
      for (let t = 0; t < this.numSplats; ++t) {
        let n = uu(this.packedArray, t, this.splatEncoding);
        e(t, n.center, n.scales, n.quaternion, n.opacity, n.color);
      }
  }
  ensureGenerate(e) {
    if (this.target && (e ?? 1) <= this.maxSplats) return !1;
    this.target && this.target.dispose();
    let t = du(e ?? 1),
      { width: n, height: r, depth: i } = t;
    return (
      (this.maxSplats = t.maxSplats),
      (this.target = new Qe(n, r, i, {
        depthBuffer: !1,
        stencilBuffer: !1,
        generateMipmaps: !1,
        magFilter: Ue,
        minFilter: Ue,
      })),
      (this.target.texture.format = Vt),
      (this.target.texture.type = B),
      (this.target.texture.internalFormat = `RGBA32UI`),
      (this.target.scissorTest = !0),
      !0
    );
  }
  generateMapping(e) {
    let t = 0,
      n = e.map((e) => {
        let n = t,
          r = Math.ceil(e / Q) * Q;
        return ((t += r), { base: n, count: e });
      });
    return { maxSplats: t, mapping: n };
  }
  getTexture() {
    return this.target
      ? this.target.texture
      : this.source || this.packedArray
        ? this.maybeUpdateSource()
        : e.getEmptyArray;
  }
  maybeUpdateSource() {
    if (!this.packedArray) throw Error(`No packed splats`);
    if (this.needsUpdate || !this.source) {
      if (((this.needsUpdate = !1), this.source)) {
        let { width: e, height: t, depth: n } = this.source.image;
        this.maxSplats !== e * t * n &&
          (this.source.dispose(), (this.source = null));
      }
      if (this.source)
        this.packedArray.buffer !== this.source.image.data.buffer &&
          (this.source.image.data = new Uint8Array(this.packedArray.buffer));
      else {
        let { width: e, height: t, depth: n } = du(this.maxSplats);
        ((this.source = new Re(this.packedArray, e, t, n)),
          (this.source.format = Vt),
          (this.source.type = B),
          (this.source.internalFormat = `RGBA32UI`),
          (this.source.needsUpdate = !0));
      }
      this.source.needsUpdate = !0;
    }
    return this.source;
  }
  prepareProgramMaterial(t) {
    let n = e.generatorProgram.get(t);
    if (!n) {
      let r = Pl({ index: `int` }, {}, ({ index: e }, n, { roots: r }) => {
        t.inputs.index = e;
        let i = t.outputs.gsplat,
          a = Sd(i, this.dynoRgbMinMaxLnScaleMinMax);
        r.push(a);
      });
      ((e.programTemplate ||= new Gd(mp().computeUvec4Template)),
        (n = new Wd({
          graph: r,
          inputs: { index: `_index` },
          outputs: { output: `target` },
          template: e.programTemplate,
        })),
        Object.assign(n.uniforms, {
          targetLayer: { value: 0 },
          targetBase: { value: 0 },
          targetCount: { value: 0 },
        }),
        e.generatorProgram.set(t, n));
    }
    let r = n.prepareMaterial();
    return ((e.fullScreenQuad.material = r), { program: n, material: r });
  }
  saveRenderState(e) {
    return {
      target: e.getRenderTarget(),
      xrEnabled: e.xr.enabled,
      autoClear: e.autoClear,
    };
  }
  resetRenderState(e, t) {
    (e.setRenderTarget(t.target),
      (e.xr.enabled = t.xrEnabled),
      (e.autoClear = t.autoClear));
  }
  generate({ generator: t, base: n, count: r, renderer: i }) {
    if (!this.target)
      throw Error(`Target must be initialized with ensureSplats`);
    if (n + r > this.maxSplats) throw Error(`Base + count exceeds maxSplats`);
    let { program: a, material: o } = this.prepareProgramMaterial(t);
    a.update();
    let s = this.saveRenderState(i),
      c = Math.ceil((n + r) / Q) * Q,
      l = Q * il;
    for (
      o.uniforms.targetBase.value = n, o.uniforms.targetCount.value = r;
      n < c;
    ) {
      let t = Math.floor(n / l);
      o.uniforms.targetLayer.value = t;
      let r = t * l,
        a = Math.floor((n - r) / Q),
        s = Math.min(il, Math.ceil((c - r) / Q));
      (this.target.scissor.set(0, a, Q, s - a),
        i.setRenderTarget(this.target, t),
        (i.xr.enabled = !1),
        (i.autoClear = !1),
        e.fullScreenQuad.render(i),
        (n += Q * (s - a)));
    }
    return (this.resetRenderState(i, s), { nextBase: c });
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
      i = this.packedArray.slice(),
      a = t ? (await t.getArray()).slice() : void 0,
      o = {
        sh1: this.extra.sh1 ? this.extra.sh1.slice() : void 0,
        sh2: this.extra.sh2 ? this.extra.sh2.slice() : void 0,
        sh3: this.extra.sh3 ? this.extra.sh3.slice() : void 0,
      },
      s = await Uu.withWorker(
        async (e) =>
          await e.call(n ? `qualityLodPackedSplats` : `tinyLodPackedSplats`, {
            numSplats: this.numSplats,
            packedArray: i,
            extra: o,
            lodBase: r,
            rgba: a,
            encoding: this.splatEncoding ?? cl,
          }),
      ),
      c = new e(s);
    (this.lodSplats && this.lodSplats.dispose(),
      (this.lodSplats = c),
      (this.nonLod = !0),
      (this.lod = !n || `quality`));
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
};
