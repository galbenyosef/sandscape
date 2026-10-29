// SceneEditor-NC7_0wmu 34 — array
// Lines 23235-23583 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function mp() {
  return (
    (pp ||=
      ((Bt.splatDefines = up),
      {
        oldSplatVertex: lp,
        oldSplatFragment: cp,
        splatVertex: fp,
        splatFragment: dp,
        computeVec4Template: sp,
        computeUvec4Vec4Template: ap,
        computeUvec4x2Vec4Template: op,
        computeUvec4Template: ip,
      })),
    pp
  );
}
var hp = class e {
  constructor({ renderer: e } = {}) {
    ((this.renderer = e), (this.capacity = 0), (this.count = 0));
  }
  dispose() {
    this.target &&= (this.target.dispose(), void 0);
  }
  static ensureBuffer(e, t) {
    let n = Math.ceil(Math.max(1, e) / Q) * Q * 4;
    if (t.byteLength >= n) return t;
    let r = new ArrayBuffer(n);
    if (t instanceof ArrayBuffer) return r;
    let i = t.constructor;
    return new i(r);
  }
  ensureBuffer(t, n) {
    return e.ensureBuffer(t, n);
  }
  ensureCapacity(e) {
    let { width: t, height: n, depth: r, maxSplats: i } = du(e);
    (!this.target || i > this.capacity) &&
      (this.dispose(),
      (this.capacity = i),
      (this.target = new Qe(t, n, r, {
        depthBuffer: !1,
        stencilBuffer: !1,
        generateMipmaps: !1,
        magFilter: Ue,
        minFilter: Ue,
      })),
      (this.target.texture.format = nn),
      (this.target.texture.type = ze),
      (this.target.texture.internalFormat = `RGBA8`),
      (this.target.scissorTest = !0));
  }
  prepareProgramMaterial(t) {
    let n = e.readbackProgram.get(t);
    if (!n) {
      let r = Pl(
        { index: `int` },
        { rgba8: `vec4` },
        ({ index: e }) => (
          (t.inputs.index = e),
          { rgba8: new Pd({ rgba8: t.outputs.rgba8 }) }
        ),
      );
      ((e.programTemplate ||= new Gd(mp().computeVec4Template)),
        (n = new Wd({
          graph: r,
          inputs: { index: `_index` },
          outputs: { rgba8: `target` },
          template: e.programTemplate,
        })),
        Object.assign(n.uniforms, {
          targetLayer: { value: 0 },
          targetBase: { value: 0 },
          targetCount: { value: 0 },
        }),
        e.readbackProgram.set(t, n));
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
  process({ count: t, material: n }) {
    let r = this.renderer;
    if (!r) throw Error(`No renderer`);
    if (!this.target) throw Error(`No target`);
    let i = Q * il;
    ((n.uniforms.targetBase.value = 0), (n.uniforms.targetCount.value = t));
    let a = 0;
    for (; a < t;) {
      let o = Math.floor(a / i),
        s = o * i,
        c = Math.min(il, Math.ceil((t - s) / Q));
      ((n.uniforms.targetLayer.value = o),
        this.target.scissor.set(0, 0, Q, c),
        r.setRenderTarget(this.target, o),
        (r.xr.enabled = !1),
        (r.autoClear = !1),
        e.fullScreenQuad.render(r),
        (a += Q * c));
    }
    this.count = t;
  }
  async read({ readback: e }) {
    let t = this.renderer;
    if (!t) throw Error(`No renderer`);
    if (!this.target) throw Error(`No target`);
    let n = Math.ceil(this.count / Q) * Q;
    if (e.byteLength < n * 4)
      throw Error(`Readback buffer too small: ${e.byteLength} < ${n * 4}`);
    let r = new Uint8Array(e instanceof ArrayBuffer ? e : e.buffer),
      i = Q * il,
      a = 0,
      o = [];
    for (; a < this.count;) {
      let e = Math.floor(a / i),
        n = e * i,
        s = Math.min(il, Math.ceil((this.count - n) / Q));
      t.setRenderTarget(this.target, e);
      let c = Q * s * 4,
        l = r.subarray(n * 4, n * 4 + c),
        u = t?.readRenderTargetPixelsAsync(this.target, 0, 0, Q, s, l);
      (o.push(u), (a += Q * s));
    }
    return Promise.all(o).then(() => e);
  }
  render({ reader: e, count: t, renderer: n }) {
    if (((this.renderer = n || this.renderer), !this.renderer))
      throw Error(`No renderer`);
    this.ensureCapacity(t);
    let { program: r, material: i } = this.prepareProgramMaterial(e);
    r.update();
    let a = this.saveRenderState(this.renderer);
    (this.process({ count: t, material: i }),
      this.resetRenderState(this.renderer, a));
  }
  async readback({ readback: e }) {
    if (!this.renderer) throw Error(`No renderer`);
    let t = this.saveRenderState(this.renderer),
      n = this.read({ readback: e });
    return (this.resetRenderState(this.renderer, t), n);
  }
  async renderReadback({ reader: e, count: t, renderer: n, readback: r }) {
    if (((this.renderer = n || this.renderer), !this.renderer))
      throw Error(`No renderer`);
    this.ensureCapacity(t);
    let { program: i, material: a } = this.prepareProgramMaterial(e);
    i.update();
    let o = this.saveRenderState(this.renderer);
    this.process({ count: t, material: a });
    let s = this.read({ readback: r });
    return (this.resetRenderState(this.renderer, o), s);
  }
  getTexture() {
    return this.target?.texture;
  }
};
((hp.programTemplate = null),
  (hp.readbackProgram = new WeakMap()),
  (hp.fullScreenQuad = new bn(new Mt({ visible: !1 }))));
var gp = hp,
  _p = class e {
    constructor(t = {}) {
      if (
        ((this.capacity = 0),
        (this.count = 0),
        (this.array = null),
        (this.readback = null),
        (this.source = null),
        (this.needsUpdate = !0),
        (this.dyno = new Fd({
          key: `rgbaArray`,
          type: yp,
          globals: () => [bp],
          value: { texture: e.getEmpty(), count: 0 },
          update: (e) => (
            (e.texture = this.getTexture()),
            (e.count = this.count),
            e
          ),
        })),
        t.array)
      ) {
        this.array = t.array;
        let e = Math.floor(this.array.length / 4);
        ((this.capacity = Math.ceil(e / Q) * Q),
          this.capacity > e &&
            ((this.array = new Uint8Array(this.capacity * 4)),
            this.array.set(t.array)),
          (this.count = Math.min(e, t.count ?? 1 / 0)));
      } else ((this.capacity = t.capacity ?? 0), (this.count = 0));
    }
    dispose() {
      ((this.readback &&= (this.readback.dispose(), null)),
        (this.source &&= (this.source.dispose(), null)));
    }
    ensureCapacity(e) {
      if (!this.array || e > (this.array?.length ?? 0) / 4) {
        this.capacity = du(e).maxSplats;
        let t = new Uint8Array(this.capacity * 4);
        (this.array && t.set(this.array), (this.array = t));
      }
      return this.array;
    }
    getTexture() {
      let t = this.readback?.getTexture();
      return (
        (this.source || this.array) && (t = this.maybeUpdateSource()),
        t ?? e.getEmpty()
      );
    }
    maybeUpdateSource() {
      if (!this.array) throw Error(`No array`);
      if (this.needsUpdate || !this.source) {
        if (((this.needsUpdate = !1), this.source)) {
          let { width: e, height: t, depth: n } = this.source.image;
          this.capacity !== e * t * n &&
            (this.source.dispose(), (this.source = null));
        }
        if (this.source)
          this.array.buffer !== this.source.image.data.buffer &&
            (this.source.image.data = new Uint8Array(this.array.buffer));
        else {
          let { width: e, height: t, depth: n } = du(this.capacity);
          ((this.source = new Re(this.array, e, t, n)),
            (this.source.format = nn),
            (this.source.type = ze),
            (this.source.internalFormat = `RGBA8`),
            (this.source.needsUpdate = !0));
        }
        this.source.needsUpdate = !0;
      }
      return this.source;
    }
    render({ reader: e, count: t, renderer: n }) {
      ((this.readback ||= new gp({ renderer: n })),
        this.readback.render({ reader: e, count: t, renderer: n }),
        (this.capacity = this.readback.capacity),
        (this.count = this.readback.count));
    }
    fromPackedSplats({ packedSplats: t, base: n, count: r, renderer: i }) {
      let {
        dynoSplats: a,
        dynoBase: o,
        dynoCount: s,
        reader: c,
      } = e.makeDynos();
      return (
        (a.packedSplats = t),
        (o.value = n),
        (s.value = r),
        this.render({ reader: c, count: r, renderer: i }),
        this
      );
    }
    async read() {
      if (!this.readback) throw Error(`No readback`);
      return (
        (!this.array || this.array.length < this.count * 4) &&
          (this.array = new Uint8Array(this.capacity * 4)),
        (await this.readback.readback({ readback: this.array })).subarray(
          0,
          this.count * 4,
        )
      );
    }
    async getArray() {
      if (this.readback) return await this.read();
      if (this.array) return this.array;
      throw Error(`No array`);
    }
    static getEmpty() {
      return (
        e.emptySource ||
          ((e.emptySource = new Re(new Uint8Array(4), 1, 1, 1)),
          (e.emptySource.format = nn),
          (e.emptySource.type = ze),
          (e.emptySource.internalFormat = `RGBA8`),
          (e.emptySource.needsUpdate = !0)),
        e.emptySource
      );
    }
    static makeDynos() {
      if (!e.dynos) {
        let t = new Om(),
          n = new Ld({ value: 0 }),
          r = new Ld({ value: 0 }),
          i = Pl({ index: `int` }, { rgba8: `vec4` }, ({ index: e }) => {
            if (!e) throw Error(`index is undefined`);
            return ((e = Zd(e, n)), { rgba8: Qu(Yu(t, e, n, r)).outputs.rgba });
          });
        e.dynos = { dynoSplats: t, dynoBase: n, dynoCount: r, reader: i };
      }
      return e.dynos;
    }
  };
((_p.emptySource = null), (_p.dynos = null));
var vp = _p,
  yp = { type: `RgbaArray` },
  bp = Rl(`
  struct RgbaArray {
    sampler2DArray texture;
    int count;
  };
`);
function xp(e) {
  switch (e) {
    case `all`:
      return 0;
    case `plane`:
      return 1;
    case `sphere`:
      return 2;
    case `box`:
      return 3;
    case `ellipsoid`:
      return 4;
    case `cylinder`:
      return 5;
    case `capsule`:
      return 6;
    case `infinite_cone`:
      return 7;
    default:
      throw Error(`Unknown SDF type: ${e}`);
  }
}
function Sp(e) {
  switch (e) {
    case `multiply`:
      return 0;
    case `set_rgb`:
      return 1;
    case `add_rgba`:
      return 2;
    default:
      throw Error(`Unknown blend mode: ${e}`);
  }
}
