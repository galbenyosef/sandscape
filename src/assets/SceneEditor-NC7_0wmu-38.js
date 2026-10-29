// SceneEditor-NC7_0wmu 38 — outputs
// Lines 24103-24642 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Mp = new Float32Array(1),
  Np = class {
    constructor(e) {
      ((this.modifier = e), (this.cache = new Map()));
    }
    apply(e) {
      let t = this.cache.get(e);
      return (
        t ||
          ((t = Pl({ index: `int` }, { gsplat: Wu }, ({ index: t }) => {
            let { gsplat: n } = e.apply({ index: t });
            return this.modifier.apply({ gsplat: n });
          })),
          this.cache.set(e, t)),
        t
      );
    }
  },
  Pp = class {
    constructor() {
      ((this.scale = new Rd({ value: -1 / 0 })),
        (this.rotate = new Bd({ value: new R(1 / 0, 1 / 0, 1 / 0, 1 / 0) })),
        (this.translate = new zd({ value: new U(1 / 0, 1 / 0, 1 / 0) })));
    }
    apply(e) {
      return mf(e, {
        scale: this.scale,
        rotate: this.rotate,
        translate: this.translate,
      });
    }
    applyDir(e) {
      return hf(e, { rotate: this.rotate });
    }
    applyGsplat(e) {
      return ed(e, {
        scale: this.scale,
        rotate: this.rotate,
        translate: this.translate,
      });
    }
    updateFromMatrix(e) {
      let t = new U(),
        n = new R(),
        r = new U();
      e.decompose(r, n, t);
      let i = (t.x + t.y + t.z) / 3,
        a = !1;
      return (
        i !== this.scale.value && ((this.scale.value = i), (a = !0)),
        r.equals(this.translate.value) ||
          (this.translate.value.copy(r), (a = !0)),
        n.equals(this.rotate.value) || (this.rotate.value.copy(n), (a = !0)),
        a
      );
    }
    update(e) {
      return (e.updateMatrixWorld(), this.updateFromMatrix(e.matrixWorld));
    }
  },
  Fp = class {
    constructor() {
      ((this.basis = new Vd({ value: new Pt() })),
        (this.offset = new zd({ value: new U() })));
    }
    apply(e) {
      return Zd($d(this.basis, e), this.offset);
    }
    applyDir(e) {
      return $d(this.basis, e);
    }
    applyCovSplat(e) {
      return new Ml({
        inTypes: { covsplat: Gu, basis: `mat3`, offset: `vec3` },
        outTypes: { covsplat: Gu },
        inputs: { covsplat: e, basis: this.basis, offset: this.offset },
        statements: ({ inputs: e, outputs: t }) => {
          let { covsplat: n, basis: r, offset: i } = e;
          return !n || !r || !i
            ? [`${t.covsplat}.flags = 0u;`]
            : Ll(`
          ${t.covsplat}.flags = 0u;
          if (isCovSplatActive(${n}.flags)) {
            ${t.covsplat}.flags = ${n}.flags;
            ${t.covsplat}.index = ${n}.index;
            ${t.covsplat}.rgba = ${n}.rgba;

            ${t.covsplat}.center = ${r} * ${n}.center + ${i};
            
            mat3 cov = mat3(
              ${n}.xxyyzz.x, ${n}.xyxzyz.x, ${n}.xyxzyz.y,
              ${n}.xyxzyz.x, ${n}.xxyyzz.y, ${n}.xyxzyz.z,
              ${n}.xyxzyz.y, ${n}.xyxzyz.z, ${n}.xxyyzz.z
            );
            cov = ${r} * cov * transpose(${r});
            ${t.covsplat}.xxyyzz = vec3(cov[0][0], cov[1][1], cov[2][2]);
            ${t.covsplat}.xyxzyz = vec3(cov[0][1], cov[0][2], cov[1][2]);
          }
        `);
        },
      }).outputs.covsplat;
    }
    updateFromMatrix(e) {
      let t = new Pt().setFromMatrix4(e),
        n = new U().setFromMatrixColumn(e, 3),
        r = !t.equals(this.basis.value) || !n.equals(this.offset.value);
      return (r && (this.basis.value.copy(t), this.offset.value.copy(n)), r);
    }
    update(e) {
      return (e.updateMatrixWorld(), this.updateFromMatrix(e.matrixWorld));
    }
  },
  Ip = class extends Se {
    constructor({
      numSplats: e,
      generator: t,
      covGenerator: n,
      construct: r,
      update: i,
    }) {
      if (
        (super(),
        (this.numSplats = e ?? 0),
        (this.generator = t),
        (this.covGenerator = n),
        (this.frameUpdate = i),
        (this.version = 0),
        (this.mappingVersion = 0),
        r)
      ) {
        let e = r(this);
        Object.assign(this, e);
      }
    }
    updateVersion() {
      this.version += 1;
    }
    updateMappingVersion() {
      ((this.mappingVersion += 1), (this.version += 1));
    }
    set needsUpdate(e) {
      e && this.updateVersion();
    }
  },
  Lp = class e {
    constructor({ extSplats: e, covSplats: t } = {}) {
      if (
        ((this.time = 0),
        (this.deltaTime = 0),
        (this.viewToWorld = new z()),
        (this.viewOrigin = new U()),
        (this.viewDirection = new U()),
        (this.maxSplats = 0),
        (this.numSplats = 0),
        (this.target = null),
        (this.mapping = []),
        (this.version = -1),
        (this.mappingVersion = -1),
        (this.readback = null),
        (this.readbackSplats = []),
        !Vl)
      )
        throw Error(`Spark requires THREE.js r179 or above`);
      ((this.extSplats = e ?? !0), (this.covSplats = t ?? !1));
    }
    dispose() {
      this.target &&= (this.target.dispose(), null);
    }
    getTextures() {
      return this.target ? this.target.textures : e.emptyTextures;
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
    ensureGenerate({ maxSplats: e }) {
      if (this.target && (e ?? 1) <= this.maxSplats) return !1;
      this.dispose();
      let t = du(e ?? 1),
        { width: n, height: r, depth: i } = t;
      if (
        ((this.maxSplats = t.maxSplats),
        (this.target = new Qe(n, r, i, {
          depthBuffer: !1,
          stencilBuffer: !1,
          generateMipmaps: !1,
          magFilter: Ue,
          minFilter: Ue,
          format: Vt,
          type: B,
        })),
        (this.target.scissorTest = !0),
        this.extSplats)
      ) {
        let e = this.target.texture.clone(),
          t = this.target.texture.clone();
        ((t.format = nn),
          (t.type = ze),
          (t.internalFormat = `RGBA8`),
          (this.target.textures = [this.target.texture, e, t]));
      } else {
        let e = this.target.texture.clone();
        ((e.format = nn),
          (e.type = ze),
          (e.internalFormat = `RGBA8`),
          (this.target.textures = [this.target.texture, e]));
      }
      return !0;
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
    prepareProgramMaterial(t, n) {
      let r = t ?? n;
      if (!r) throw Error(`Either generator or covGenerator must be provided`);
      let i = e.generatorProgram.get(r);
      (i ||
        ((i = new Wd({
          graph: Pl({ index: `int` }, {}, ({ index: r }, i, { roots: a }) => {
            if (
              (t && (t.inputs.index = r),
              n && (n.inputs.index = r),
              this.extSplats)
            )
              if (!this.covSplats)
                if (t) {
                  let e = wd(t.outputs.gsplat);
                  a.push(e);
                } else throw Error(`Generator must be provided`);
              else if (n) {
                let e = Td(n.outputs.covsplat);
                a.push(e);
              } else if (t) {
                let e = Td(Zu(t.outputs.gsplat));
                a.push(e);
              } else throw Error(`Generator must be provided`);
            else {
              if (this.covSplats) {
                let r;
                if (n) r = n.outputs.covsplat;
                else if (t) r = Zu(t.outputs.gsplat);
                else throw Error(`Generator must be provided`);
                let i = Qd(gd(r).outputs.center, e.viewCenterUniform),
                  o = $d(gd(r).outputs.opacity, Ol(`float`, 0.5));
                r = _d({ covsplat: r, center: i, opacity: o });
                let s = Cd(r, Ol(`vec4`, [0, 1, -12, 9]));
                a.push(s);
              } else if (t) {
                let n = Qd(
                    Qu(t.outputs.gsplat).outputs.center,
                    e.viewCenterUniform,
                  ),
                  r = $d(
                    Qu(t.outputs.gsplat).outputs.opacity,
                    Ol(`float`, 0.5),
                  ),
                  i = Sd(
                    $u({ gsplat: t.outputs.gsplat, center: n, opacity: r }),
                    Ol(`vec4`, [0, 1, -12, 9]),
                  );
                a.push(i);
              } else throw Error(`Generator must be provided`);
              if (!t) throw Error(`Generator must be provided`);
            }
            if (t) {
              let n = Ed(
                t.outputs.gsplat,
                e.viewCenterUniform,
                e.viewDirUniform,
                e.sortRadialUniform,
              );
              a.push(n);
            }
            if (n) {
              let t = Dd(
                n.outputs.covsplat,
                e.viewCenterUniform,
                e.viewDirUniform,
                e.sortRadialUniform,
              );
              a.push(t);
            }
          }),
          inputs: { index: `_index` },
          outputs: {},
          template: this.extSplats ? e.programExtTemplate : e.programTemplate,
        })),
        e.generatorProgram.set(r, i)),
        Object.assign(i.uniforms, {
          targetLayer: { value: 0 },
          targetBase: { value: 0 },
          targetCount: { value: 0 },
        }));
      let a = i.prepareMaterial();
      return ((e.fullScreenQuad.material = a), { program: i, material: a });
    }
    generate({
      generator: t,
      covGenerator: n,
      base: r,
      count: i,
      renderer: a,
    }) {
      if (!this.target)
        throw Error(`Target must be initialized with ensureGenerate`);
      if (r + i > this.maxSplats) throw Error(`Base + count exceeds maxSplats`);
      let { program: o, material: s } = this.prepareProgramMaterial(t, n);
      o.update();
      let c = this.saveRenderState(a),
        l = Math.ceil((r + i) / Q) * Q,
        u = Q * il;
      for (
        s.uniforms.targetBase.value = r, s.uniforms.targetCount.value = i;
        r < l;
      ) {
        let t = Math.floor(r / u);
        s.uniforms.targetLayer.value = t;
        let n = t * u,
          i = Math.floor((r - n) / Q),
          o = Math.min(il, Math.ceil((l - n) / Q));
        (this.target.scissor.set(0, i, Q, o - i),
          a.setRenderTarget(this.target, t),
          (a.xr.enabled = !1),
          (a.autoClear = !1),
          e.fullScreenQuad.render(a),
          (r += Q * (o - i)));
      }
      return (this.resetRenderState(a, c), { nextBase: l });
    }
    prepareGenerate({
      renderer: t,
      scene: n,
      time: r,
      camera: i,
      sortRadial: a,
      renderSize: o,
      previous: s,
      lodInstances: c,
    }) {
      var l;
      (this.viewToWorld.copy(i.matrixWorld),
        i.getWorldPosition(this.viewOrigin),
        i.getWorldDirection(this.viewDirection),
        e.viewCenterUniform.value.copy(this.viewOrigin),
        e.viewDirUniform.value.copy(this.viewDirection),
        (e.sortRadialUniform.value = a),
        (this.time = r),
        (this.deltaTime = r - s.time));
      let u = [];
      n.traverse((e) => {
        e instanceof Ip && (!i.layers || i.layers.test(e.layers)) && u.push(e);
      });
      let d = new Set();
      n.traverseVisible((e) => {
        if (e instanceof Tp) {
          let t = e.parent;
          for (; t != null && !(t instanceof Qp);) t = t.parent;
          t ?? d.add(e);
        }
      });
      let f = Array.from(d);
      for (let e of u)
        try {
          (l = e.frameUpdate) == null ||
            l.call(e, {
              renderer: t,
              object: e,
              time: this.time,
              deltaTime: this.deltaTime,
              viewToWorld: this.viewToWorld,
              camera: i,
              renderSize: o,
              globalEdits: f,
              lodIndices: c && e instanceof Qp ? c.get(e) : void 0,
            });
        } catch (t) {
          (console.error(`frameUpdate error`, t),
            (e.generator = void 0),
            (e.covGenerator = void 0),
            (e.generatorError = t));
        }
      let p = [];
      n.traverseVisible((e) => {
        e instanceof Ip && (!i.layers || i.layers.test(e.layers)) && p.push(e);
      });
      let m = p.map((e) => e.numSplats),
        { maxSplats: h, mapping: g } = this.generateMapping(m),
        _ = s.mapping.reduce((e, t) => (e.set(t.node, t), e), new Map());
      ((this.mapping = []),
        (this.numSplats = 0),
        g.forEach(({ base: e, count: t }, n) => {
          let r = p[n],
            i = _.get(r);
          i && i.count !== r.numSplats && r.updateMappingVersion();
          let { generator: a, covGenerator: o } = r;
          if ((a || o) && t > 0) {
            let { version: n, mappingVersion: i } = r;
            (this.mapping.push({
              node: r,
              generator: a,
              covGenerator: o,
              version: n,
              mappingVersion: i,
              base: e,
              count: t,
            }),
              (this.numSplats = Math.max(this.numSplats, e + t)));
          }
        }));
      let { splatsUpdated: v, mappingUpdated: y } = s.checkVersions(
        this.mapping,
      );
      return (
        (this.version = s.version + +!!v),
        (this.mappingVersion = s.mappingVersion + +!!y),
        {
          sameMapping: !y,
          version: this.version,
          mappingVersion: this.mappingVersion,
          visibleGenerators: p,
          generate: () => {
            this.ensureGenerate({ maxSplats: h });
            for (let { node: e, base: n, count: r } of this.mapping) {
              let { generator: i, covGenerator: a } = e;
              (i || a) &&
                r > 0 &&
                this.generate({
                  generator: i,
                  covGenerator: a,
                  base: n,
                  count: r,
                  renderer: t,
                });
            }
          },
          readback: async () => {
            let e = this.getTextures();
            (this.readbackSplats.length === 0 &&
              (this.readbackSplats = [
                new Ud({ value: e[0], key: `extSplats` }),
                new Ud({ value: e[1], key: `extSplats` }),
              ]),
              (this.readbackSplats[0].value = e[0]),
              (this.readbackSplats[1].value = e[1]),
              (this.readback ||= new gp({ renderer: t })));
            let n = this.readback,
              r = this.extSplats ? 8 : 4,
              i = n.ensureBuffer(this.numSplats * r, new Uint32Array()),
              a = Pl({ index: `int` }, { rgba8: `vec4` }, ({ index: e }) => ({
                rgba8: new Ml({
                  inTypes: {
                    index: `int`,
                    extSplats1: `usampler2DArray`,
                    extSplats2: `usampler2DArray`,
                  },
                  outTypes: { rgba8: `vec4` },
                  inputs: {
                    index: e,
                    extSplats1: this.readbackSplats[0],
                    extSplats2: this.readbackSplats[1],
                  },
                  statements: ({ inputs: e, outputs: t }) =>
                    this.extSplats
                      ? Ll(`
                    int indexDiv8 = ${e.index} >> 3;
                    ivec3 coord = splatTexCoord(indexDiv8);
                    uvec4 packedData;
                    if ((${e.index} & 4) == 0) {
                      packedData = texelFetch(${e.extSplats1}, coord, 0);
                    } else {
                      packedData = texelFetch(${e.extSplats2}, coord, 0);
                    }

                    int indexMod4 = ${e.index} & 3;
                    uint data = (indexMod4 == 0) ? packedData.x
                      : (indexMod4 == 1) ? packedData.y
                      : (indexMod4 == 2) ? packedData.z
                      : packedData.w;
                    ${t.rgba8} = uintToVec4(data);
                  `)
                      : Ll(`
                  int indexDiv4 = ${e.index} >> 2;
                  ivec3 coord = splatTexCoord(indexDiv4);
                  uvec4 packedData = texelFetch(${e.extSplats1}, coord, 0);

                  int indexMod4 = ${e.index} & 3;
                  uint data = (indexMod4 == 0) ? packedData.x
                    : (indexMod4 == 1) ? packedData.y
                    : (indexMod4 == 2) ? packedData.z
                    : packedData.w;
                  ${t.rgba8} = uintToVec4(data);
                `),
                }).outputs.rgba8,
              }));
            return await n.renderReadback({
              reader: a,
              count: this.numSplats * r,
              renderer: t,
              readback: i,
            });
          },
        }
      );
    }
    checkVersions(e) {
      if (this.mapping.length !== e.length)
        return { splatsUpdated: !0, mappingUpdated: !0 };
      let t = this.mapping.some((t, n) => {
        let r = e[n];
        return (
          t.node !== r.node ||
          t.base !== r.base ||
          t.count !== r.count ||
          t.mappingVersion !== r.mappingVersion
        );
      });
      return t
        ? { splatsUpdated: !0, mappingUpdated: !0 }
        : {
            splatsUpdated: this.mapping.some(
              (t, n) => t.version !== e[n].version,
            ),
            mappingUpdated: t,
          };
    }
  };
