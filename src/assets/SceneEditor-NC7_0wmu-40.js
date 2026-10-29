// SceneEditor-NC7_0wmu 40 — uniforms
// Lines 24662-25616 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Rp = Lp,
  zp = class extends Zt {
    constructor() {
      (super(),
        this.setAttribute(`position`, new Dt(Bp, 3)),
        this.setIndex(new Dt(Vp, 1)));
    }
  },
  Bp = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]),
  Vp = new Uint16Array([0, 1, 2, 0, 2, 3]),
  Hp = class e extends G {
    constructor(t) {
      if (!t) throw Error(`SparkRenderer options are required`);
      if (!t.renderer)
        throw Error(`renderer is required in SparkRenderer options`);
      let n = e.makeUniforms();
      Object.assign(n, t.extraUniforms ?? {});
      let r = mp(),
        i = t.premultipliedAlpha ?? !0,
        a = new zp(),
        o = new Tt({
          glslVersion: Ee,
          vertexShader: t.vertexShader ?? r.splatVertex,
          fragmentShader: t.fragmentShader ?? r.splatFragment,
          uniforms: n,
          premultipliedAlpha: i,
          transparent: t.transparent ?? !0,
          depthTest: t.depthTest ?? !0,
          depthWrite: t.depthWrite ?? !1,
          side: 2,
          allowOverride: !1,
        });
      (super(a, o),
        (this.renderSize = new V()),
        (this.lastFrame = -1),
        (this.updateTimeoutId = -1),
        (this.orderingTexture = null),
        (this.maxSplats = 0),
        (this.activeSplats = 0),
        (this.accumulators = []),
        (this.sorting = !1),
        (this.sortDirty = !1),
        (this.lastSortTime = 0),
        (this.sortWorker = null),
        (this.sortTimeoutId = -1),
        (this.sortedCenter = new U().setScalar(-1 / 0)),
        (this.sortedDir = new U().setScalar(0)),
        (this.readback32 = new Uint32Array()),
        (this.lastLodRaycastTime = 0),
        (this.lodWorker = null),
        (this.lodMeshes = []),
        (this.lodDirty = !1),
        (this.lodIds = new Map()),
        (this.lodIdToSplats = new Map()),
        (this.lodInitQueue = []),
        (this.lodInstances = new Map()),
        (this.lodUpdates = []),
        (this.lastTraverseTime = 0),
        (this.pagerId = 0),
        (this.superXY = 1),
        (this.flushAfterGenerate = !1),
        (this.flushAfterRead = !1),
        (this.readPause = 1),
        (this.sortPause = 0),
        (this.sortDelay = 0),
        (this.pageSizeWarning = !1),
        (this.material = o),
        (this.uniforms = n),
        (this.frustumCulled = !1),
        (this.renderer = t.renderer),
        (this.onDirty = t.onDirty),
        (this.dirty = !0),
        (this.autoUpdate = t.autoUpdate ?? !0),
        (this.preUpdate = t.preUpdate ?? !0),
        (this.maxStdDev = t.maxStdDev ?? Math.sqrt(8)),
        (this.minPixelRadius = t.minPixelRadius ?? 0),
        (this.maxPixelRadius = t.maxPixelRadius ?? 512),
        (this.accumExtSplats = t.accumExtSplats ?? !1),
        (this.covSplats = t.covSplats ?? !1),
        (this.minAlpha = t.minAlpha ?? (1 / 255) * 0.5),
        (this.enable2DGS = t.enable2DGS ?? !1),
        (this.preBlurAmount = t.preBlurAmount ?? 0),
        (this.blurAmount = t.blurAmount ?? 0.3),
        (this.focalDistance = t.focalDistance ?? 0),
        (this.apertureAngle = t.apertureAngle ?? 0),
        (this.falloff = t.falloff ?? 1),
        (this.clipXY = t.clipXY ?? 1.4),
        (this.focalAdjustment = t.focalAdjustment ?? 1),
        (this.encodeLinear = t.encodeLinear ?? !1),
        (this.sortRadial = t.sortRadial ?? !0),
        (this.minSortIntervalMs = t.minSortIntervalMs ?? 0),
        (this.enableLod = t.enableLod ?? !0),
        (this.enableDriveLod = t.enableDriveLod ?? this.enableLod),
        (this.enableLodFetching = t.enableLodFetching ?? !0),
        (this.lodSplatCount = t.lodSplatCount),
        (this.lodSplatScale = t.lodSplatScale ?? 1),
        (this.lodRenderScale = t.lodRenderScale ?? 1),
        (this.lodInflate = t.lodInflate ?? !1),
        (this.pagedExtSplats = t.pagedExtSplats ?? !1));
      let s = fu() ? (hu() ? 96 : 128) : 256;
      ((this.maxPagedSplats = t.maxPagedSplats ?? s * 65536),
        (this.numLodFetchers = t.numLodFetchers ?? 3),
        (this.behindFoveate = t.behindFoveate ?? 0.2),
        (this.coneFov0 = t.coneFov0 ?? 90),
        (this.coneFov = t.coneFov ?? 120),
        (this.coneFoveate = t.coneFoveate ?? 0.4),
        (this.lodRaycast =
          t.lodRaycast === void 0 ? (fu() ? 1e4 : 25e3) : t.lodRaycast),
        (this.lodRaycastIntervalMs = t.lodRaycastIntervalMs ?? 500),
        (this.clock = t.clock ? _u(t.clock) : new ln()));
      let c = { extSplats: this.accumExtSplats, covSplats: this.covSplats };
      if (
        ((this.display = new Rp(c)),
        (this.current = this.display),
        this.accumulators.push(new Rp(c)),
        this.accumulators.push(new Rp(c)),
        t.target)
      ) {
        let {
            width: e,
            height: n,
            doubleBuffer: r,
            superXY: i,
            ...a
          } = t.target,
          o = Math.max(1, Math.min(4, i ?? 1));
        if (e * o > 8192 || n * o > 8192) throw Error(`Target size too large`);
        this.superXY = o;
        let s = e * o,
          c = n * o,
          l = { format: nn, type: ze, colorSpace: Ft, ...a };
        ((this.target = new xe(s, c, l)),
          r && (this.backTarget = new xe(s, c, l)),
          (this.encodeLinear = t.encodeLinear ?? !0));
      }
    }
    static makeUniforms() {
      return {
        renderSize: { value: new V() },
        near: { value: 0.1 },
        far: { value: 1e3 },
        renderToViewQuat: { value: new R() },
        renderToViewPos: { value: new U() },
        renderToViewBasis: { value: new Pt() },
        renderToViewOffset: { value: new U() },
        maxStdDev: { value: 1 },
        minPixelRadius: { value: 0 },
        maxPixelRadius: { value: 512 },
        minAlpha: { value: (1 / 255) * 0.5 },
        enable2DGS: { value: !1 },
        lodInflate: { value: !1 },
        preBlurAmount: { value: 0 },
        blurAmount: { value: 0.3 },
        focalDistance: { value: 0 },
        apertureAngle: { value: 0 },
        falloff: { value: 1 },
        clipXY: { value: 1.4 },
        focalAdjustment: { value: 1 },
        encodeLinear: { value: !1 },
        ordering: { type: `t`, value: e.emptyOrdering },
        enableExtSplats: { value: !1 },
        enableCovSplats: { value: !1 },
        extSplats: { type: `t`, value: Rp.emptyTexture },
        extSplats2: { type: `t`, value: Rp.emptyTexture },
        time: { value: 0 },
        deltaTime: { value: 0 },
        debugFlag: { value: !1 },
      };
    }
    dispose() {
      ((this.target &&= (this.target.dispose(), void 0)),
        (this.backTarget &&= (this.backTarget.dispose(), void 0)),
        (this.orderingTexture &&= (this.orderingTexture.dispose(), null)));
      let e = new Set();
      (e.add(this.display), e.add(this.current));
      for (let t of this.accumulators) e.add(t);
      for (let t of e) t.dispose();
      let t = this.lodInstances.values();
      this.lodInstances.clear();
      for (let e of t) e.texture.dispose();
      ((this.sortWorker &&= (this.sortWorker.dispose(), null)),
        (this.lodWorker &&= (this.lodWorker.dispose(), null)),
        (this.pager &&= (this.pager.dispose(), void 0)));
    }
    setDirty() {
      var e;
      this.dirty ||
        ((this.dirty = !0), (e = this.onDirty) == null || e.call(this));
    }
    onBeforeRender(t, n, r) {
      let i = e.sparkOverride ?? this,
        a = t.info.render.frame,
        o = a !== i.lastFrame;
      if (((i.lastFrame = a), i.target))
        i.renderSize.set(i.target.width, i.target.height);
      else {
        let e = t.getDrawingBufferSize(i.renderSize);
        if (t.xr.isPresenting && e.x === 1 && e.y === 1) {
          let n = t.xr.getSession()?.renderState.baseLayer;
          n && ((e.x = n.framebufferWidth), (e.y = n.framebufferHeight));
        }
      }
      this.uniforms.renderSize.value.copy(i.renderSize);
      let s = r;
      ((this.uniforms.near.value = s.near), (this.uniforms.far.value = s.far));
      let c = this.geometry;
      c.instanceCount = i.activeSplats;
      let l = new z();
      this.display.extSplats || l.makeTranslation(i.display.viewOrigin);
      let u = r.matrixWorld.clone().invert().multiply(l);
      if (
        (u.decompose(
          this.uniforms.renderToViewPos.value,
          this.uniforms.renderToViewQuat.value,
          new U(),
        ),
        this.uniforms.renderToViewBasis.value.setFromMatrix4(u),
        (this.uniforms.maxStdDev.value = i.maxStdDev),
        (this.uniforms.minPixelRadius.value = i.minPixelRadius),
        (this.uniforms.maxPixelRadius.value = i.maxPixelRadius),
        (this.uniforms.minAlpha.value = i.minAlpha),
        (this.uniforms.enable2DGS.value = i.enable2DGS),
        (this.uniforms.lodInflate.value = i.lodInflate),
        (this.uniforms.preBlurAmount.value = i.preBlurAmount),
        (this.uniforms.blurAmount.value = i.blurAmount),
        (this.uniforms.focalDistance.value = i.focalDistance),
        (this.uniforms.apertureAngle.value = i.apertureAngle),
        (this.uniforms.falloff.value = i.falloff),
        (this.uniforms.clipXY.value = i.clipXY),
        (this.uniforms.focalAdjustment.value = i.focalAdjustment),
        (this.uniforms.encodeLinear.value = i.encodeLinear),
        (this.uniforms.ordering.value = i.orderingTexture ?? e.emptyOrdering),
        (this.uniforms.enableExtSplats.value = this.display.extSplats),
        (this.uniforms.enableCovSplats.value = this.display.covSplats),
        this.display.extSplats)
      ) {
        let e = i.display.getTextures();
        ((this.uniforms.extSplats.value = e[0]),
          (this.uniforms.extSplats2.value = e[1]));
      } else {
        let e = i.display.getTextures();
        ((this.uniforms.extSplats.value = e[0]),
          (this.uniforms.extSplats2.value = e[0]));
      }
      if (
        ((this.uniforms.time.value = i.display.time),
        (this.uniforms.deltaTime.value = i.display.deltaTime),
        (this.uniforms.debugFlag.value = (performance.now() / 1e3) % 2 < 1),
        i.autoUpdate && o)
      ) {
        let e = i.preUpdate && !t.xr.isPresenting,
          a = t.xr.isPresenting ? t.xr.getCamera() : r;
        e
          ? i.updateInternal({ scene: n, camera: a, autoUpdate: !0 })
          : i.updateTimeoutId === -1 &&
            (i.updateTimeoutId = setTimeout(() => {
              ((i.updateTimeoutId = -1),
                i.updateInternal({ scene: n, camera: a, autoUpdate: !0 }));
            }, 1));
      }
      i.dirty = !1;
    }
    clearSplats() {
      ((this.activeSplats = 0), (this.display.numSplats = 0), this.setDirty());
    }
    async update({ scene: e, camera: t }) {
      await this.updateInternal({ scene: e, camera: t, autoUpdate: !1 });
    }
    async updateInternal({ scene: e, camera: t, autoUpdate: n }) {
      let r = this.renderer,
        i = this.time ?? this.clock.getElapsedTime(),
        a = t.getWorldPosition(new U()),
        o = t.getWorldDirection(new U()),
        s =
          a.distanceTo(this.sortedCenter) > 0.001 ||
          o.dot(this.sortedDir) < 0.999,
        c = this.accumulators.pop();
      if (!c) throw Error(`No next accumulator`);
      if (c === this.current)
        throw Error(`Next accumulator is the same as the current accumulator`);
      let {
          version: l,
          mappingVersion: u,
          visibleGenerators: d,
          generate: f,
        } = c.prepareGenerate({
          renderer: r,
          scene: e,
          time: i,
          camera: t,
          sortRadial: this.sortRadial ?? !0,
          renderSize: this.renderSize,
          previous: this.current,
          lodInstances: this.enableLod ? this.lodInstances : void 0,
        }),
        p = !0,
        m = s || l !== this.current.version,
        h = u !== this.display.mappingVersion;
      (n && !m && (p = !1),
        h && this.sorting && (p = !1),
        p
          ? (f(),
            this.flushAfterGenerate && r.getContext().flush(),
            this.display.mappingVersion === c.mappingVersion
              ? (this.accumulators.push(this.display), (this.display = c))
              : this.display !== this.current &&
                this.accumulators.push(this.current),
            (this.current = c),
            (this.sortDirty = !0),
            this.setDirty())
          : this.accumulators.push(c),
        this.enableDriveLod &&
          this.driveLod({ visibleGenerators: d, camera: t, scene: e }),
        await this.driveSort());
    }
    async driveSort() {
      if (this.sorting || !this.sortDirty) return;
      this.sortTimeoutId !== -1 &&
        (clearTimeout(this.sortTimeoutId), (this.sortTimeoutId = -1));
      let e = performance.now(),
        t = this.lastSortTime ? this.lastSortTime + this.minSortIntervalMs : e;
      if (e < t) {
        this.sortTimeoutId = setTimeout(() => {
          ((this.sortTimeoutId = -1), this.driveSort());
        }, t - e);
        return;
      }
      ((this.sorting = !0),
        (this.sortDirty = !1),
        (this.lastSortTime = e),
        this.readPause > 0 &&
          (await new Promise((e) => setTimeout(e, this.readPause))));
      let n = this.current;
      (this.sortedCenter.copy(n.viewOrigin),
        this.sortedDir.copy(n.viewDirection));
      let { numSplats: r, maxSplats: i } = n,
        a = Math.max(1, Math.ceil(i / 16384)),
        o = a * 16384;
      this.maxSplats = Math.max(this.maxSplats, o);
      let s = new Uint32Array(this.maxSplats),
        c = gp.ensureBuffer(i, this.readback32);
      ((this.readback32 = c),
        await this.readbackDepth({
          current: n,
          renderer: this.renderer,
          numSplats: r,
          readback: c,
        }),
        this.sortPause > 0 &&
          (await new Promise((e) => setTimeout(e, this.sortPause))),
        (this.sortWorker ||= new Hu()));
      let l = await this.sortWorker.call(`sortSplats32`, {
        numSplats: r,
        readback: c,
        ordering: s,
      });
      if (
        (this.sortDelay > 0 &&
          (await new Promise((e) => setTimeout(e, this.sortDelay))),
        (this.readback32 = l.readback),
        (this.activeSplats = l.activeSplats),
        this.orderingTexture &&
          a > this.orderingTexture.image.height &&
          (this.orderingTexture.dispose(), (this.orderingTexture = null)),
        this.orderingTexture)
      ) {
        let e = this.renderer,
          t = e.getContext();
        if (!e.properties.has(this.orderingTexture))
          this.orderingTexture.needsUpdate = !0;
        else {
          let n = e.properties.get(this.orderingTexture).__webglTexture;
          if (!n) throw Error(`ordering texture not found`);
          (e.state.activeTexture(t.TEXTURE0),
            e.state.bindTexture(t.TEXTURE_2D, n),
            t.bindBuffer(t.PIXEL_UNPACK_BUFFER, null),
            t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1),
            t.texSubImage2D(
              t.TEXTURE_2D,
              0,
              0,
              0,
              4096,
              a,
              t.RGBA_INTEGER,
              t.UNSIGNED_INT,
              l.ordering,
            ),
            e.state.bindTexture(t.TEXTURE_2D, null));
        }
      } else {
        let e = new ge(l.ordering, 4096, a, Vt, B);
        ((e.internalFormat = `RGBA32UI`),
          (e.needsUpdate = !0),
          (this.orderingTexture = e));
      }
      (this.current.mappingVersion === n.mappingVersion &&
        this.current.mappingVersion !== this.display.mappingVersion &&
        (this.accumulators.push(this.display), (this.display = this.current)),
        (this.sorting = !1),
        this.setDirty(),
        this.driveSort());
    }
    ensureLodWorker() {
      return ((this.lodWorker ||= new Hu()), this.lodWorker);
    }
    defaultSplatTarget() {
      return mu() ? 5e5 : gu() ? 75e4 : pu() ? 1e6 : hu() ? 15e5 : 25e5;
    }
    driveLod({ visibleGenerators: e, camera: t, scene: n }) {
      let r = this.defaultSplatTarget(),
        i = (this.lodSplatCount ?? r) * this.lodSplatScale,
        a = 0;
      if (t instanceof ke)
        a = (2 * Math.tan((0.5 * t.fov * Math.PI) / 180)) / this.renderSize.y;
      else if (t instanceof ye) {
        let e = (t.top - t.bottom) / t.zoom,
          n = (t.right - t.left) / t.zoom,
          r = e / Math.max(1, this.renderSize.y),
          i = n / Math.max(1, this.renderSize.x);
        a = Math.min(i, r);
      }
      a *= this.lodRenderScale;
      let o = new U(),
        s = new R();
      if (
        (this.current.viewToWorld.decompose(o, s, new U()),
        this.lodPosOverride && o.copy(this.lodPosOverride),
        this.lodQuatOverride && s.copy(this.lodQuatOverride).normalize(),
        this.lastLod)
      ) {
        (this.lastLod.pixelScaleLimit !== a || this.lastLod.maxSplats !== i) &&
          (this.lodDirty = !0);
        let e = o.distanceTo(this.lastLod.pos),
          t = Math.max(0, 1 - e / 1),
          n = s.dot(this.lastLod.quat);
        t * Math.max(0, 1 - (1 - n) / 0.01) < 0.999 && (this.lodDirty = !0);
      }
      let c = this.enableLod
          ? e.filter(
              (e) =>
                e instanceof Qp &&
                (e.packedSplats?.lodSplats ||
                  e.extSplats?.lodSplats ||
                  e.paged) &&
                e.enableLod !== !1,
            )
          : [],
        l = c.some((e) => e.paged);
      (this.lodMeshes.length === c.length
        ? c.some(
            (e, t) =>
              e !== this.lodMeshes[t].mesh ||
              e.version > this.lodMeshes[t].version,
          ) && (this.lodDirty = !0)
        : (this.lodDirty = !0),
        (this.lodMeshes = c.map((e) => ({ mesh: e, version: e.version + 1 }))),
        (this.lodInitQueue = []));
      let u = performance.now();
      for (let e of c) {
        let t = e.packedSplats?.lodSplats ?? e.extSplats?.lodSplats ?? e.paged;
        if (t) {
          let e = this.lodIds.get(t);
          e ? (e.lastTouched = u) : this.lodInitQueue.push(t);
        }
      }
      this.ensureLodWorker().tryExclusive(async (e) => {
        if (l && !this.pager) {
          this.pager = new Kp({
            renderer: this.renderer,
            extSplats: this.pagedExtSplats,
            maxSplats: this.maxPagedSplats,
            numFetchers: this.numLodFetchers,
          });
          let { lodId: t } = await e.call(`newLodTree`, {
            capacity: this.pager.maxSplats,
          });
          this.pagerId = t;
        }
        if (this.pager)
          for (let { mesh: e } of this.lodMeshes)
            e.paged && !e.paged.pager && (e.paged.pager = this.pager);
        if (this.lodInitQueue.length > 0) {
          let t = this.lodInitQueue;
          for (this.lodInitQueue = []; t.length > 0;) {
            let n = t.shift();
            n && (await this.initLodTree(e, n), (this.lodDirty = !0));
          }
        }
        if (this.pager) {
          let e = this.pager.consumeLodTreeUpdates();
          for (let {
            splats: t,
            page: n,
            chunk: r,
            numSplats: i,
            lodTree: a,
          } of e) {
            let e = this.lodIds.get(t);
            e &&
              (a && r === 0 && (e.rootPage = n),
              this.lodUpdates.push({
                lodId: e.lodId,
                pageBase: n * this.pager.pageSplats,
                chunkBase: r * this.pager.pageSplats,
                count: i,
                lodTreeData: a,
              }));
          }
        }
        if (this.lodUpdates.length > 0) {
          let t = this.lodUpdates;
          ((this.lodUpdates = []),
            await e.call(`updateLodTrees`, { ranges: t }),
            (this.lodDirty = !0));
        }
        if (this.lodDirty) {
          let t = performance.now(),
            n = new U();
          if (this.lastLod) {
            let e = Math.max(1, t - this.lastLod.timestamp);
            n.copy(o)
              .sub(this.lastLod.pos)
              .multiplyScalar(this.lastTraverseTime / e);
          }
          ((this.lastLod = {
            pos: o,
            quat: s,
            pixelScaleLimit: a,
            maxSplats: i,
            timestamp: t,
          }),
            (this.lodDirty = !1),
            await this.updateLodInstances(e, n, c, i, o, s, a),
            (this.currentLod = this.lastLod),
            this.setDirty());
        }
        await this.cleanupLodTrees(e);
      });
    }
    async initLodTree(e, t) {
      if (t instanceof Dm || t instanceof yf) {
        let { lodId: n } = await e.call(`initLodTree`, {
          numSplats: t.numSplats ?? 0,
          lodTree: t.extra.lodTree.slice(),
        });
        (this.lodIds.set(t, { lodId: n, lastTouched: performance.now() }),
          this.lodIdToSplats.set(n, t));
      } else {
        let { lodId: n } = await e.call(`newSharedLodTree`, {
          lodId: this.pagerId,
        });
        (this.lodIds.set(t, { lodId: n, lastTouched: performance.now() }),
          this.lodIdToSplats.set(n, t));
      }
    }
    async updateLodInstances(e, t, n, r, i, a, o) {
      let s = new Map(),
        c = new z().compose(i, a, new U().setScalar(1)),
        l = n.reduce((e, t) => {
          s.set(t.uuid, t);
          let n = t.matrixWorld.clone().invert().multiply(c),
            r = t.packedSplats?.lodSplats ?? t.extSplats?.lodSplats ?? t.paged;
          if (!r) return e;
          let i = this.lodIds.get(r);
          return (
            !i ||
              (this.pager && t.paged && i.rootPage === void 0) ||
              (e[t.uuid] = {
                instanceId: t.uuid,
                lodId: i.lodId,
                rootPage: i.rootPage,
                viewToObjectCols: n.elements,
                lodScale: t.lodScale,
                behindFoveate: t.behindFoveate ?? this.behindFoveate,
                coneFov0: t.coneFov0 ?? this.coneFov0,
                coneFov: t.coneFov ?? this.coneFov,
                coneFoveate: t.coneFoveate ?? this.coneFoveate,
              }),
            e
          );
        }, {}),
        u = performance.now(),
        d = await e.call(`traverseLodTrees`, {
          maxSplats: r,
          pixelScaleLimit: o,
          lastPixelLimit: this.lastPixelLimit,
          instances: l,
        });
      this.lastTraverseTime = performance.now() - u;
      let { keyIndices: f, chunks: p, pixelLimit: m } = d;
      this.lastPixelLimit = m;
      let h = Object.values(f).reduce((e, { numSplats: t }) => e + t, 0);
      if ((this.updateLodIndices(s, f), this.pager)) {
        this.pager.processUploads();
        let e = n
          .map((e) => {
            if (!e.paged || !this.pager) return null;
            let t = e.getWorldPosition(new U());
            return { splats: e.paged, distance: t.distanceTo(i) };
          })
          .filter((e) => e !== null);
        (!this.pageSizeWarning &&
          e.length > this.pager.maxPages &&
          ((this.pageSizeWarning = !0),
          console.warn(
            `# paged SplatMeshes exceeds maxPages: ${e.length} > ${this.pager.maxPages}`,
          )),
          e.sort((e, t) => e.distance - t.distance),
          (this.pager.fetchPriority = e.map(({ splats: e }) => ({
            splats: e,
            chunk: 0,
          }))));
        for (let [e, t] of p) {
          let n = this.lodIdToSplats.get(e);
          n instanceof Wp &&
            t !== 0 &&
            this.pager.fetchPriority.push({ splats: n, chunk: t });
        }
        ((this.pager.autoDrive = this.enableLodFetching),
          this.enableLodFetching && this.pager.driveFetchers());
      }
      if (
        this.lodRaycast &&
        performance.now() - this.lastLodRaycastTime >= this.lodRaycastIntervalMs
      ) {
        this.lastLodRaycastTime = performance.now();
        let t = performance.now(),
          n = await e.call(`traverseLodTrees`, {
            maxSplats: Math.min(this.lodRaycast, Math.round(h * 0.1)),
            pixelScaleLimit: o,
            instances: l,
          });
        performance.now() - t;
        let { keyIndices: r } = n;
        Object.values(r).reduce((e, { numSplats: t }) => e + t, 0);
        for (let [e, t] of Object.entries(r)) {
          let n = s.get(e);
          n.raycastIndices = t;
        }
      }
    }
    async cleanupLodTrees(e) {
      let t = performance.now(),
        n = null;
      for (let [e, t] of this.lodIds.entries())
        (n == null || t.lastTouched < n.lastTouched) &&
          (n = { splats: e, lastTouched: t.lastTouched, lodId: t.lodId });
      if (!(!n || n.lastTouched > t - 3e3)) {
        (this.lodIds.delete(n.splats), this.lodIdToSplats.delete(n.lodId));
        for (let [e, t] of this.lodInstances.entries())
          t.lodId === n.lodId &&
            (t.texture.dispose(), this.lodInstances.delete(e));
        await e.call(`disposeLodTree`, { lodId: n.lodId });
      }
    }
    updateLodIndices(e, t) {
      for (let [n, r] of Object.entries(t)) {
        let { lodId: t, numSplats: i, indices: a } = r,
          o = e.get(n);
        if (o.paged) o.paged.update(i, a);
        else {
          let e = this.lodInstances.get(o);
          e &&
            a.length > e.indices.length &&
            (e.texture.dispose(), (e = void 0));
          let n = Math.ceil(a.length / 16384);
          if (e) {
            e.numSplats = i;
            let t = this.renderer,
              r = t.getContext();
            if (t.properties.has(e.texture)) {
              let i = t.properties.get(e.texture).__webglTexture;
              if (!i) throw Error(`lodIndices texture not found`);
              (t.state.activeTexture(r.TEXTURE0),
                t.state.bindTexture(r.TEXTURE_2D, i),
                r.bindBuffer(r.PIXEL_UNPACK_BUFFER, null),
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1),
                r.texSubImage2D(
                  r.TEXTURE_2D,
                  0,
                  0,
                  0,
                  4096,
                  n,
                  r.RGBA_INTEGER,
                  r.UNSIGNED_INT,
                  a,
                ),
                t.state.bindTexture(r.TEXTURE_2D, null));
            }
          } else {
            let r = n * 16384;
            if (a.length !== r) throw Error(`Indices length != capacity`);
            let s = new ge(a, 4096, n, Vt, B);
            ((s.internalFormat = `RGBA32UI`),
              (s.needsUpdate = !0),
              (e = { lodId: t, numSplats: i, indices: a, texture: s }),
              this.lodInstances.set(o, e));
          }
        }
        o.updateMappingVersion();
      }
    }
    async readbackDepth({
      current: e,
      renderer: t,
      numSplats: n,
      readback: r,
    }) {
      if (!t) throw Error(`No renderer`);
      if (!e.target) throw Error(`No target`);
      let i = Math.ceil(n / Q) * Q;
      if (r.byteLength < i * 4)
        throw Error(`Readback buffer too small: ${r.byteLength} < ${i * 4}`);
      let a = new Uint8Array(r.buffer),
        o = this.saveRenderState(t),
        s = Q * il,
        c = 0,
        l = [];
      for (; c < n;) {
        let r = Math.floor(c / s),
          i = r * s,
          o = Math.min(il, Math.ceil((n - i) / Q)),
          u = Q * o * 4,
          d = a.subarray(i * 4, i * 4 + u);
        t.setRenderTarget(e.target, r);
        let f = t.readRenderTargetPixelsAsync(
          e.target,
          0,
          0,
          Q,
          o,
          d,
          void 0,
          e.extSplats ? 2 : 1,
        );
        (l.push(f),
          this.flushAfterRead && t.getContext().flush(),
          (c += Q * o));
      }
      return (this.resetRenderState(t, o), Promise.all(l).then(() => r));
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
    render(t, n) {
      try {
        ((e.sparkOverride = this), this.renderer.render(t, n));
      } finally {
        e.sparkOverride = void 0;
      }
    }
    renderTarget({ scene: t, camera: n }) {
      let r = this.backTarget ?? this.target;
      if (!r) throw Error(`No target`);
      let i = this.renderer.getRenderTarget();
      try {
        (this.renderer.setRenderTarget(r),
          (e.sparkOverride = this),
          this.renderer.render(t, n));
      } finally {
        ((e.sparkOverride = void 0), this.renderer.setRenderTarget(i));
      }
      return (
        r !== this.target &&
          ([this.target, this.backTarget] = [this.backTarget, this.target]),
        r
      );
    }
    async readTarget() {
      if (!this.target) throw Error(`Must initialize with target`);
      let { width: e, height: t } = this.target,
        n = e * t * 4;
      (!this.superPixels || this.superPixels.length < n) &&
        (this.superPixels = new Uint8Array(n));
      let r = this.superPixels;
      await this.renderer.readRenderTargetPixelsAsync(
        this.target,
        0,
        0,
        e,
        t,
        r,
      );
      let { superXY: i } = this;
      if (i === 1) return r;
      let a = e / i,
        o = t / i,
        s = a * o * 4;
      (!this.targetPixels || this.targetPixels.length < s) &&
        (this.targetPixels = new Uint8Array(s));
      let c = this.targetPixels,
        l = i * i;
      for (let t = 0; t < o; t++) {
        let n = t * a;
        for (let o = 0; o < a; o++) {
          let a = o * i,
            s = 0,
            u = 0,
            d = 0,
            f = 0;
          for (let n = 0; n < i; n++) {
            let o = (t * i + n) * e;
            for (let e = 0; e < i; e++) {
              let t = (o + a + e) * 4;
              ((s += r[t]), (u += r[t + 1]), (d += r[t + 2]), (f += r[t + 3]));
            }
          }
          let p = (n + o) * 4;
          ((c[p] = s / l),
            (c[p + 1] = u / l),
            (c[p + 2] = d / l),
            (c[p + 3] = f / l));
        }
      }
      return c;
    }
    async renderReadTarget({ scene: e, camera: t }) {
      return (this.renderTarget({ scene: e, camera: t }), this.readTarget());
    }
    async renderCubeMap({
      scene: t,
      worldCenter: n,
      size: r = 256,
      near: i = 0.1,
      far: a = 1e3,
      hideObjects: o = [],
      update: s = !0,
      filter: c = !1,
    }) {
      if (
        !e.cubeRender ||
        e.cubeRender.target.width !== r ||
        e.cubeRender.near !== i ||
        e.cubeRender.far !== a
      ) {
        e.cubeRender && e.cubeRender.target.dispose();
        let t = new ut(r, {
            format: nn,
            type: ze,
            generateMipmaps: c,
            minFilter: c ? cn : lt,
            magFilter: lt,
            colorSpace: c ? pn : Ft,
          }),
          n = new re(i, a, t);
        e.cubeRender = { target: t, cubeCamera: n, near: i, far: a };
      }
      let { target: l, cubeCamera: u } = e.cubeRender;
      u.position.copy(n);
      let d = new Map();
      for (let e of o) (d.set(e, e.visible), (e.visible = !1));
      if (s) {
        let e = new mn();
        (e.position.copy(n), await this.update({ scene: t, camera: e }));
      }
      try {
        ((e.sparkOverride = this), u.update(this.renderer, t));
      } finally {
        e.sparkOverride = void 0;
      }
      for (let [e, t] of d.entries()) e.visible = t;
      return l.texture;
    }
    async readCubeTargets() {
      if (!e.cubeRender) throw Error(`No cube render`);
      let t = e.cubeRender.target.texture,
        n = [],
        r = [];
      for (let i = 0; i < t.images.length; ++i) {
        let { width: a, height: o } = t.images[i],
          s = a * o * 4,
          c = new Uint8Array(s);
        r.push(c);
        let l = this.renderer.readRenderTargetPixelsAsync(
          e.cubeRender.target,
          0,
          0,
          a,
          o,
          c,
          i,
        );
        n.push(l);
      }
      return (await Promise.all(n), r);
    }
    async renderEnvMap({
      scene: t,
      worldCenter: n,
      size: r = 256,
      near: i = 0.1,
      far: a = 1e3,
      hideObjects: o = [],
      update: s = !0,
    }) {
      let c = await this.renderCubeMap({
        scene: t,
        worldCenter: n,
        size: r,
        near: i,
        far: a,
        hideObjects: o,
        update: s,
        filter: !0,
      });
      return (
        (e.pmrem ||= new tn(this.renderer)),
        e.pmrem?.fromCubemap(c).texture
      );
    }
    recurseSetEnvMap(e, t) {
      e.traverse((e) => {
        if (e instanceof G)
          if (Array.isArray(e.material))
            for (let n of e.material) n instanceof Te && (n.envMap = t);
          else e.material instanceof Te && (e.material.envMap = t);
      });
    }
    async getLodTreeLevel(e, t, n = !1) {
      let r = this.lodInstances.get(e);
      if (!r) return null;
      let i = await this.ensureLodWorker().exclusive(
        async (e) =>
          await e.call(`getLodTreeLevel`, { lodId: r.lodId, level: t }),
      );
      if (e.packedSplats?.lodSplats)
        return new Qp({
          packedSplats: e.packedSplats.lodSplats.extractSplats(i.indices, n),
        });
      if (e.extSplats?.lodSplats)
        return new Qp({
          extSplats: e.extSplats.lodSplats.extractSplats(i.indices, n),
        });
      throw Error(`Only LoD-enabled PackedSplats and ExtSplats are supported`);
    }
    get premultipliedAlpha() {
      return this.material.premultipliedAlpha;
    }
    set premultipliedAlpha(e) {
      this.material.premultipliedAlpha !== e &&
        ((this.material.premultipliedAlpha = e),
        (this.material.needsUpdate = !0));
    }
  };
