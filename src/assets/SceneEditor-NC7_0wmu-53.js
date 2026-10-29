// SceneEditor-NC7_0wmu 53 — uniforms
// Lines 29167-29698 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Lm = class {
    constructor() {
      ((this.splats = new Dm()),
        (this.toWorld = new z()),
        (this.mapping = []),
        (this.refCount = 0),
        (this.splatsVersion = -1),
        (this.mappingVersion = -1));
    }
    ensureGenerate(e) {
      this.splats.ensureGenerate(e) && (this.mapping = []);
    }
    generateSplats({
      renderer: e,
      modifier: t,
      generators: n,
      forceUpdate: r,
      originToWorld: i,
    }) {
      let a = this.mapping.reduce((e, t) => (e.set(t.node, t), e), new Map()),
        o = 0,
        s = 0;
      for (let { node: i, generator: c, version: l, base: u, count: d } of n) {
        let n = a.get(i);
        if (
          (r ||
            c !== n?.generator ||
            l !== n?.version ||
            u !== n?.base ||
            d !== n?.count) &&
          c &&
          d > 0
        ) {
          let n = t.apply(c);
          try {
            this.splats.generate({
              generator: n,
              base: u,
              count: d,
              renderer: e,
            });
          } catch (e) {
            ((i.generator = void 0), (i.generatorError = e));
          }
          o += 1;
        }
        s = Math.max(s, u + d);
      }
      return (
        (this.splats.numSplats = s),
        this.toWorld.copy(i),
        (this.mapping = n),
        o !== 0
      );
    }
    hasCorrespondence(e) {
      return (
        this.mapping.length === e.mapping.length &&
        this.mapping.every(({ node: t, base: n, count: r }, i) => {
          let { node: a, base: o, count: s } = e.mapping[i];
          return t === a && n === o && r === s;
        })
      );
    }
  },
  Rm = 5,
  zm = class e extends G {
    constructor(t) {
      let n = e.makeUniforms(),
        r = mp(),
        i = t.premultipliedAlpha ?? !0,
        a = new Tt({
          glslVersion: Ee,
          vertexShader: r.oldSplatVertex,
          fragmentShader: r.oldSplatFragment,
          uniforms: n,
          premultipliedAlpha: i,
          transparent: !0,
          depthTest: !0,
          depthWrite: !1,
          side: 2,
        });
      (super(Bm, a),
        (this.splatTexture = null),
        (this.autoViewpoints = []),
        (this.rotateToAccumulator = new Bd({ value: new R() })),
        (this.translateToAccumulator = new zd({ value: new U() })),
        (this.lastFrame = -1),
        (this.lastUpdateTime = null),
        (this.defaultCameras = []),
        (this.lastStochastic = null),
        (this.pendingUpdate = {
          scene: null,
          originToWorld: new z(),
          timeoutId: -1,
        }),
        (this.envViewpoint = null),
        (this.frustumCulled = !1),
        (this.renderer = t.renderer),
        (this.material = a),
        (this.uniforms = n));
      let o = Pl({ gsplat: Wu }, { gsplat: Wu }, ({ gsplat: e }) => {
        if (!e) throw Error(`gsplat not defined`);
        return (
          (e = ed(e, {
            rotate: this.rotateToAccumulator,
            translate: this.translateToAccumulator,
          })),
          { gsplat: e }
        );
      });
      ((this.modifier = new Np(o)),
        (this.premultipliedAlpha = i),
        (this.autoUpdate = t.autoUpdate ?? !0),
        (this.preUpdate = t.preUpdate ?? !1),
        (this.needsUpdate = !1),
        (this.originDistance = t.originDistance ?? 1),
        (this.maxStdDev = t.maxStdDev ?? Math.sqrt(8)),
        (this.minPixelRadius = t.minPixelRadius ?? 0),
        (this.maxPixelRadius = t.maxPixelRadius ?? 512),
        (this.minAlpha = t.minAlpha ?? (1 / 255) * 0.5),
        (this.enable2DGS = t.enable2DGS ?? !1),
        (this.preBlurAmount = t.preBlurAmount ?? 0),
        (this.blurAmount = t.blurAmount ?? 0.3),
        (this.focalDistance = t.focalDistance ?? 0),
        (this.apertureAngle = t.apertureAngle ?? 0),
        (this.falloff = t.falloff ?? 1),
        (this.clipXY = t.clipXY ?? 1.4),
        (this.focalAdjustment = t.focalAdjustment ?? 1),
        (this.splatEncoding = t.splatEncoding ?? { ...cl }),
        (this.active = new Lm()),
        (this.active.refCount = 1),
        (this.accumulatorCount = 1),
        (this.freeAccumulators = []));
      for (let e = 0; e < 1; ++e)
        (this.freeAccumulators.push(new Lm()), (this.accumulatorCount += 1));
      ((this.defaultView = new Pm({ ...t.view, autoUpdate: !0, spark: this })),
        (this.viewpoint = this.defaultView),
        this.prepareViewpoint(this.viewpoint),
        (this.clock = t.clock ? _u(t.clock) : new ln()));
    }
    static makeUniforms() {
      return {
        renderSize: { value: new V() },
        near: { value: 0.1 },
        far: { value: 1e3 },
        numSplats: { value: 0 },
        renderToViewQuat: { value: new R() },
        renderToViewPos: { value: new U() },
        maxStdDev: { value: 1 },
        minPixelRadius: { value: 0 },
        maxPixelRadius: { value: 512 },
        minAlpha: { value: (1 / 255) * 0.5 },
        stochastic: { value: !1 },
        enable2DGS: { value: !1 },
        preBlurAmount: { value: 0 },
        blurAmount: { value: 0.3 },
        focalDistance: { value: 0 },
        apertureAngle: { value: 0 },
        falloff: { value: 1 },
        clipXY: { value: 1.4 },
        focalAdjustment: { value: 1 },
        splatTexEnable: { value: !1 },
        splatTexture: { type: `t`, value: e.EMPTY_SPLAT_TEXTURE },
        splatTexMul: { value: new Le() },
        splatTexAdd: { value: new V() },
        splatTexNear: { value: 0.1 },
        splatTexFar: { value: 1e3 },
        splatTexMid: { value: 0 },
        packedSplats: { type: `t`, value: Dm.getEmptyArray },
        rgbMinMaxLnScaleMinMax: { value: new vn() },
        time: { value: 0 },
        deltaTime: { value: 0 },
        encodeLinear: { value: !1 },
        debugFlag: { value: !1 },
      };
    }
    canAllocAccumulator() {
      return this.freeAccumulators.length > 0 || this.accumulatorCount < Rm;
    }
    maybeAllocAccumulator() {
      let e = this.freeAccumulators.pop();
      if (e === void 0) {
        if (this.accumulatorCount >= Rm) return null;
        ((e = new Lm()), (this.accumulatorCount += 1));
      }
      return ((e.refCount = 1), e);
    }
    releaseAccumulator(e) {
      (--e.refCount, e.refCount === 0 && this.freeAccumulators.push(e));
    }
    newViewpoint(e) {
      return new Pm({ ...e, spark: this });
    }
    onBeforeRender(t, n, r) {
      let i = this.time ?? this.clock.getElapsedTime(),
        a = i - (this.viewpoint.lastTime ?? i);
      this.viewpoint.lastTime = i;
      let o = t.info.render.frame,
        s = o !== this.lastFrame;
      this.lastFrame = o;
      let c = this.viewpoint;
      if (c === this.defaultView) {
        if (s)
          if (!t.xr.isPresenting)
            ((this.defaultView.viewToWorld = r.matrixWorld.clone()),
              (this.defaultCameras = [this.defaultView.viewToWorld]));
          else {
            let e = t.xr.getCamera().cameras;
            ((this.defaultCameras = e.map((e) => e.matrixWorld)),
              (this.defaultView.viewToWorld =
                Vm(this.defaultCameras) ?? new z()));
          }
        this.autoUpdate &&
          this.update({ scene: n, viewToWorld: this.defaultView.viewToWorld });
      }
      if (
        (s &&
          (this.material.premultipliedAlpha !== this.premultipliedAlpha &&
            ((this.material.premultipliedAlpha = this.premultipliedAlpha),
            (this.material.needsUpdate = !0)),
          (this.uniforms.time.value = i),
          (this.uniforms.deltaTime.value = a),
          (this.uniforms.debugFlag.value = (performance.now() / 1e3) % 2 < 1),
          c.display &&
            c.stochastic &&
            (this.geometry.instanceCount = this.uniforms.numSplats.value)),
        c.target)
      )
        this.uniforms.renderSize.value.set(c.target.width, c.target.height);
      else {
        let e = t.getDrawingBufferSize(this.uniforms.renderSize.value);
        if (e.x === 1 && e.y === 1) {
          let n = t.xr.getSession()?.renderState.baseLayer;
          n && ((e.x = n.framebufferWidth), (e.y = n.framebufferHeight));
        }
      }
      let l = r;
      if (
        ((this.uniforms.near.value = l.near),
        (this.uniforms.far.value = l.far),
        (this.uniforms.encodeLinear.value = c.encodeLinear),
        (this.uniforms.maxStdDev.value = this.maxStdDev),
        (this.uniforms.minPixelRadius.value = this.minPixelRadius),
        (this.uniforms.maxPixelRadius.value = this.maxPixelRadius),
        (this.uniforms.minAlpha.value = this.minAlpha),
        (this.uniforms.stochastic.value = c.stochastic),
        (this.uniforms.enable2DGS.value = this.enable2DGS),
        (this.uniforms.preBlurAmount.value = this.preBlurAmount),
        (this.uniforms.blurAmount.value = this.blurAmount),
        (this.uniforms.focalDistance.value = this.focalDistance),
        (this.uniforms.apertureAngle.value = this.apertureAngle),
        (this.uniforms.falloff.value = this.falloff),
        (this.uniforms.clipXY.value = this.clipXY),
        (this.uniforms.focalAdjustment.value = this.focalAdjustment),
        this.lastStochastic !== !c.stochastic &&
          ((this.lastStochastic = !c.stochastic),
          (this.material.transparent = !c.stochastic),
          (this.material.depthWrite = c.stochastic),
          (this.material.needsUpdate = !0)),
        this.splatTexture)
      ) {
        let {
          enable: t,
          texture: n,
          multiply: r,
          add: i,
          near: a,
          far: o,
          mid: s,
        } = this.splatTexture;
        t && n
          ? ((this.uniforms.splatTexEnable.value = !0),
            (this.uniforms.splatTexture.value = n),
            r
              ? this.uniforms.splatTexMul.value.fromArray(r.elements)
              : this.uniforms.splatTexMul.value.set(
                  0.5 / this.maxStdDev,
                  0,
                  0,
                  0.5 / this.maxStdDev,
                ),
            this.uniforms.splatTexAdd.value.set(i?.x ?? 0.5, i?.y ?? 0.5),
            (this.uniforms.splatTexNear.value = a ?? this.uniforms.near.value),
            (this.uniforms.splatTexFar.value = o ?? this.uniforms.far.value),
            (this.uniforms.splatTexMid.value = s ?? 0))
          : ((this.uniforms.splatTexEnable.value = !1),
            (this.uniforms.splatTexture.value = e.EMPTY_SPLAT_TEXTURE));
      } else
        ((this.uniforms.splatTexEnable.value = !1),
          (this.uniforms.splatTexture.value = e.EMPTY_SPLAT_TEXTURE));
      let u = c.display?.accumulator.toWorld ?? new z(),
        d = r.matrixWorld.clone().invert();
      u.clone()
        .premultiply(d)
        .decompose(
          this.uniforms.renderToViewPos.value,
          this.uniforms.renderToViewQuat.value,
          new U(),
        );
    }
    prepareViewpoint(e) {
      if (((this.viewpoint = e ?? this.viewpoint), this.viewpoint.display)) {
        let { accumulator: e, geometry: t } = this.viewpoint.display;
        ((this.uniforms.numSplats.value = e.splats.numSplats),
          (this.uniforms.packedSplats.value = e.splats.getTexture()),
          this.uniforms.rgbMinMaxLnScaleMinMax.value.set(
            e.splats.splatEncoding?.rgbMin ?? 0,
            e.splats.splatEncoding?.rgbMax ?? 1,
            e.splats.splatEncoding?.lnScaleMin ?? -12,
            e.splats.splatEncoding?.lnScaleMax ?? 9,
          ),
          (this.geometry = t),
          (this.material.transparent = !this.viewpoint.stochastic),
          (this.material.depthWrite = this.viewpoint.stochastic),
          (this.material.needsUpdate = !0));
      } else
        ((this.uniforms.numSplats.value = 0),
          (this.uniforms.packedSplats.value = Dm.getEmptyArray),
          (this.geometry = Bm));
    }
    update({ scene: e, viewToWorld: t }) {
      let n = this.matrixWorld;
      this.preUpdate
        ? this.updateInternal({
            scene: e,
            originToWorld: n.clone(),
            viewToWorld: t,
          })
        : ((this.pendingUpdate.scene = e),
          this.pendingUpdate.originToWorld.copy(n),
          this.pendingUpdate.timeoutId === -1 &&
            (this.pendingUpdate.timeoutId = setTimeout(() => {
              let { scene: e, originToWorld: n } = this.pendingUpdate;
              ((this.pendingUpdate.scene = null),
                (this.pendingUpdate.timeoutId = -1),
                this.updateInternal({
                  scene: e,
                  originToWorld: n,
                  viewToWorld: t,
                }) && this.renderer.getContext().flush());
            }, 1)));
    }
    updateInternal({ scene: e, originToWorld: t, viewToWorld: n }) {
      var r;
      if (!this.canAllocAccumulator()) return !1;
      ((t ||= this.active.toWorld), (n ??= t.clone()));
      let i = this.time ?? this.clock.getElapsedTime(),
        a = i - (this.lastUpdateTime ?? i);
      this.lastUpdateTime = i;
      let o = this.active.mapping.reduce(
          (e, t) => (e.set(t.node, t), e),
          new Map(),
        ),
        {
          generators: s,
          visibleGenerators: c,
          globalEdits: l,
        } = this.compileScene(e);
      for (let e of s)
        (r = e.frameUpdate) == null ||
          r.call(e, {
            renderer: this.renderer,
            object: e,
            time: i,
            deltaTime: a,
            viewToWorld: n,
            globalEdits: l,
          });
      let u = new Set(c.map((e) => e.uuid));
      for (let e of s) {
        let t = o.get(e),
          n = e.generator && u.has(e.uuid) ? e.numSplats : 0;
        (this.needsUpdate || e.generator !== t?.generator || n !== t?.count) &&
          e.updateVersion();
      }
      let d = !Su({
          matrix1: t,
          matrix2: this.active.toWorld,
          maxDistance: this.originDistance,
        }),
        f =
          this.needsUpdate ||
          d ||
          s.length !== o.size ||
          s.some((e) => e.version !== o.get(e)?.version);
      this.needsUpdate = !1;
      let p = null;
      if (f) {
        if (((p = this.maybeAllocAccumulator()), !p))
          throw Error(`Unreachable`);
        let e = !Su({
            matrix1: t,
            matrix2: p.toWorld,
            maxDistance: 1e-5,
            minCoorient: 0.99999,
          }),
          n = c
            .map((e, t) => {
              let n = o.get(e);
              return n
                ? [e.version - n.version, n.base, e]
                : [1 / 0, e.version, e];
            })
            .sort((e, t) => (e[0] === t[0] ? e[1] - t[1] : e[0] - t[0]))
            .map(([e, t, n]) => n),
          r = n.map((e) => e.numSplats),
          { maxSplats: i, mapping: a } = p.splats.generateMapping(r),
          s = n.map((e, t) => {
            let { base: n, count: r } = a[t];
            return {
              node: e,
              generator: e.generator,
              version: e.version,
              base: n,
              count: r,
            };
          });
        (t
          .clone()
          .invert()
          .decompose(
            this.translateToAccumulator.value,
            this.rotateToAccumulator.value,
            new U(),
          ),
          p.ensureGenerate(i),
          (p.splats.splatEncoding = { ...this.splatEncoding }),
          p.generateSplats({
            renderer: this.renderer,
            modifier: this.modifier,
            generators: s,
            forceUpdate: e,
            originToWorld: t,
          }),
          (p.splatsVersion = this.active.splatsVersion + 1));
        let l = p.hasCorrespondence(this.active);
        ((p.mappingVersion = this.active.mappingVersion + +!l),
          this.releaseAccumulator(this.active),
          (this.active = p),
          this.prepareViewpoint());
      }
      return (
        setTimeout(() => {
          for (let e of this.autoViewpoints)
            e.autoPoll({ accumulator: p ?? void 0 });
        }, 1),
        !0
      );
    }
    compileScene(e) {
      let t = [];
      e.traverse((e) => {
        e instanceof Ip && t.push(e);
      });
      let n = [];
      e.traverseVisible((e) => {
        e instanceof Ip && n.push(e);
      });
      let r = new Set();
      return (
        e.traverseVisible((e) => {
          if (e instanceof Tp) {
            let t = e.parent;
            for (; t != null && !(t instanceof Qp);) t = t.parent;
            t ?? r.add(e);
          }
        }),
        { generators: t, visibleGenerators: n, globalEdits: Array.from(r) }
      );
    }
    async renderEnvMap({
      renderer: t,
      scene: n,
      worldCenter: r,
      size: i = 256,
      near: a = 0.1,
      far: o = 1e3,
      hideObjects: s = [],
      update: c = !1,
    }) {
      if (
        ((this.envViewpoint ||= this.newViewpoint({ sort360: !0 })),
        !e.cubeRender ||
          e.cubeRender.target.width !== i ||
          e.cubeRender.near !== a ||
          e.cubeRender.far !== o)
      ) {
        e.cubeRender && e.cubeRender.target.dispose();
        let t = new ut(i, { format: nn, generateMipmaps: !0, minFilter: cn }),
          n = new re(a, o, t);
        e.cubeRender = { target: t, camera: n, near: a, far: o };
      }
      e.pmrem ||= new tn(t ?? this.renderer);
      let l = new z().setPosition(r);
      await this.envViewpoint?.prepare({ scene: n, viewToWorld: l, update: c });
      let { target: u, camera: d } = e.cubeRender;
      d.position.copy(r);
      let f = new Map();
      for (let e of s) (f.set(e, e.visible), (e.visible = !1));
      (this.prepareViewpoint(this.envViewpoint),
        d.update(t ?? this.renderer, n),
        this.prepareViewpoint(this.defaultView));
      for (let [e, t] of f.entries()) e.visible = t;
      return e.pmrem?.fromCubemap(u.texture).texture;
    }
    recurseSetEnvMap(e, t) {
      e.traverse((e) => {
        if (e instanceof G)
          if (Array.isArray(e.material))
            for (let n of e.material) n instanceof Te && (n.envMap = t);
          else e.material instanceof Te && (e.material.envMap = t);
      });
    }
    getRgba({ generator: e, rgba: t }) {
      let n = this.active.mapping.find(({ node: t }) => t === e);
      if (!n) throw Error(`Generator not found`);
      return (
        (t ??= new vp()),
        t.fromPackedSplats({
          packedSplats: this.active.splats,
          base: n.base,
          count: n.count,
          renderer: this.renderer,
        }),
        t
      );
    }
    async readRgba({ generator: e, rgba: t }) {
      return ((t = this.getRgba({ generator: e, rgba: t })), t.read());
    }
  };
