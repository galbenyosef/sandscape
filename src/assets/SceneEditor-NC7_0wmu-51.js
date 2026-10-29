// SceneEditor-NC7_0wmu 51 — spark
// Lines 28711-29107 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Nm = class e {
  constructor(e) {
    if (
      ((this.lastTime = null),
      (this.encodeLinear = !1),
      (this.superXY = 1),
      (this.display = null),
      (this.sorting = null),
      (this.pending = null),
      (this.sortingCheck = !1),
      (this.readback16 = new Uint16Array()),
      (this.readback32 = new Uint32Array()),
      (this.spark = e.spark),
      (this.camera = e.camera),
      (this.viewToWorld = e.viewToWorld ?? new z()),
      e.target)
    ) {
      let { width: t, height: n, doubleBuffer: r } = e.target,
        i = Math.max(1, Math.min(4, e.target.superXY ?? 1));
      if (((this.superXY = i), t * i > 8192 || n * i > 8192))
        throw Error(`Target size too large`);
      ((this.target = new xe(t * i, n * i, {
        format: nn,
        type: ze,
        colorSpace: Ft,
      })),
        r &&
          (this.back = new xe(t * i, n * i, {
            format: nn,
            type: ze,
            colorSpace: Ft,
          })),
        (this.encodeLinear = !0));
    }
    ((this.onTextureUpdated = e.onTextureUpdated),
      (this.sortRadial = e.sortRadial ?? !0),
      (this.sortDistance = e.sortDistance),
      (this.sortCoorient = e.sortCoorient),
      (this.depthBias = e.depthBias),
      (this.sort360 = e.sort360),
      (this.sort32 = e.sort32),
      (this.stochastic = e.stochastic ?? !1),
      (this.orderingFreelist = new iu({
        allocate: (e) => new Uint32Array(e),
        valid: (e, t) => e.length === t,
      })),
      (this.autoUpdate = !1),
      this.setAutoUpdate(e.autoUpdate ?? !1));
  }
  dispose() {
    (this.setAutoUpdate(!1),
      (this.target &&= (this.target.dispose(), void 0)),
      (this.back &&= (this.back.dispose(), void 0)),
      (this.display &&=
        (this.spark.releaseAccumulator(this.display.accumulator),
        this.display.geometry.dispose(),
        null)),
      this.pending?.accumulator &&
        (this.spark.releaseAccumulator(this.pending.accumulator),
        (this.pending = null)));
  }
  setAutoUpdate(e) {
    (!this.autoUpdate && e
      ? this.spark.autoViewpoints.push(this)
      : this.autoUpdate &&
        !e &&
        (this.spark.autoViewpoints = this.spark.autoViewpoints.filter(
          (e) => e !== this,
        )),
      (this.autoUpdate = e));
  }
  async prepare({
    scene: e,
    camera: t,
    viewToWorld: n,
    update: r,
    forceOrigin: i,
  }) {
    for (
      n
        ? (this.viewToWorld = n)
        : ((this.camera = t ?? this.camera),
          this.camera &&
            (this.camera.updateMatrixWorld(),
            (this.viewToWorld = this.camera.matrixWorld.clone())));
      r ?? !0;
    ) {
      let t = i ? this.viewToWorld : this.spark.matrixWorld;
      if (this.spark.updateInternal({ scene: e, originToWorld: t })) break;
      await new Promise((e) => setTimeout(e, 10));
    }
    let a = this.spark.active;
    ((a.refCount += 1),
      await this.sortUpdate({ accumulator: a, viewToWorld: this.viewToWorld }),
      this.spark.releaseAccumulator(a));
  }
  renderTarget({ scene: e, camera: t }) {
    var n;
    let r = this.back ?? this.target;
    if (!r) throw Error(`Must initialize SparkViewpoint with target`);
    if (((t ??= this.camera), !t)) throw Error(`Must provide camera`);
    if (t instanceof ke) {
      let e = new ke().copy(t, !1);
      ((e.aspect = r.width / r.height), e.updateProjectionMatrix(), (t = e));
    }
    this.viewToWorld = t.matrixWorld.clone();
    let i = this.spark.renderer.getRenderTarget();
    try {
      (this.spark.renderer.setRenderTarget(r),
        this.spark.prepareViewpoint(this),
        this.spark.renderer.render(e, t));
    } finally {
      (this.spark.prepareViewpoint(this.spark.defaultView),
        this.spark.renderer.setRenderTarget(i));
    }
    (r !== this.target && ([this.target, this.back] = [this.back, this.target]),
      (n = this.onTextureUpdated) == null || n.call(this, r.texture));
  }
  async readTarget() {
    if (!this.target) throw Error(`Must initialize SparkViewpoint with target`);
    let { width: e, height: t } = this.target,
      n = e * t * 4;
    ((!this.superPixels || this.superPixels.length < n) &&
      (this.superPixels = new Uint8Array(n)),
      await this.spark.renderer.readRenderTargetPixelsAsync(
        this.target,
        0,
        0,
        e,
        t,
        this.superPixels,
      ));
    let { superXY: r } = this;
    if (r === 1) return this.superPixels;
    let i = e / r,
      a = t / r,
      o = i * a * 4;
    (!this.pixels || this.pixels.length < o) &&
      (this.pixels = new Uint8Array(o));
    let { superPixels: s, pixels: c } = this,
      l = r * r;
    for (let e = 0; e < a; e++) {
      let t = e * i;
      for (let n = 0; n < i; n++) {
        let i = n * r,
          a = 0,
          o = 0,
          u = 0,
          d = 0;
        for (let t = 0; t < r; t++) {
          let n = (e * r + t) * this.target.width;
          for (let e = 0; e < r; e++) {
            let t = (n + i + e) * 4;
            ((a += s[t]), (o += s[t + 1]), (u += s[t + 2]), (d += s[t + 3]));
          }
        }
        let f = (t + n) * 4;
        ((c[f] = a / l),
          (c[f + 1] = o / l),
          (c[f + 2] = u / l),
          (c[f + 3] = d / l));
      }
    }
    return c;
  }
  async prepareRenderPixels({
    scene: e,
    camera: t,
    viewToWorld: n,
    update: r,
    forceOrigin: i,
  }) {
    return (
      await this.prepare({
        scene: e,
        camera: t,
        viewToWorld: n,
        update: r,
        forceOrigin: i,
      }),
      this.renderTarget({ scene: e, camera: t }),
      this.readTarget()
    );
  }
  autoPoll({ accumulator: e }) {
    this.camera &&
      (this.camera.updateMatrixWorld(),
      (this.viewToWorld = this.camera.matrixWorld.clone()));
    let t = !1,
      n = !1;
    if (!this.display) t = !0;
    else if (e) {
      t = !0;
      let { mappingVersion: r } = this.display.accumulator;
      e.mappingVersion === r &&
        ((e.refCount += 1),
        this.spark.releaseAccumulator(this.display.accumulator),
        (this.display.accumulator = e),
        this.display.viewToWorld.copy(this.viewToWorld),
        (n = !0),
        this.spark.viewpoint === this && this.spark.prepareViewpoint(this));
    }
    let r = this.sorting?.viewToWorld ?? this.display?.viewToWorld;
    (r &&
      !Su({
        matrix1: this.viewToWorld,
        matrix2: r,
        maxDistance: this.sortDistance ?? 0.01,
        minCoorient: (this.sortCoorient ?? this.sortRadial) ? 0.99 : 0.999,
      }) &&
      (t = !0),
      t &&
        (e && (e.refCount += 1),
        this.pending?.accumulator &&
          this.spark.releaseAccumulator(this.pending.accumulator),
        (this.pending = {
          accumulator: e,
          viewToWorld: this.viewToWorld,
          displayed: n,
        }),
        this.driveSort()));
  }
  async driveSort() {
    for (;;) {
      if (this.sorting || !this.pending) return;
      let { viewToWorld: e, displayed: t } = this.pending,
        n = this.pending.accumulator;
      if (
        (n ||
          ((n = this.display?.accumulator ?? this.spark.active),
          (n.refCount += 1)),
        (this.pending = null),
        !n)
      )
        throw Error(`No accumulator to sort`);
      ((this.sorting = { viewToWorld: e }),
        await this.sortUpdate({ accumulator: n, viewToWorld: e, displayed: t }),
        (this.sorting = null),
        this.spark.releaseAccumulator(n));
    }
  }
  async sortUpdate({ accumulator: t, viewToWorld: n, displayed: r = !1 }) {
    if (this.sortingCheck) throw Error(`Only one sort at a time`);
    ((this.sortingCheck = !0), (t ??= this.spark.active));
    let { numSplats: i, maxSplats: a } = t.splats,
      o = 0,
      s = this.orderingFreelist.alloc(a);
    if (this.stochastic) {
      o = i;
      for (let e = 0; e < i; ++e) s[e] = e;
    } else if (i > 0) {
      let {
          reader: r,
          doubleSortReader: c,
          sort32Reader: l,
          dynoSortRadial: u,
          dynoOrigin: d,
          dynoDirection: f,
          dynoDepthBias: p,
          dynoSort360: m,
          dynoSplats: h,
        } = e.makeSorter(),
        g = this.sort32 ?? !1,
        _;
      if (g)
        ((this.readback32 = r.ensureBuffer(a, this.readback32)),
          (_ = this.readback32));
      else {
        let e = Math.ceil(a / 2);
        ((this.readback16 = r.ensureBuffer(e, this.readback16)),
          (_ = this.readback16));
      }
      let v = t.toWorld.clone().invert(),
        y = n.clone().premultiply(v);
      ((u.value = this.sort360 ? !0 : this.sortRadial),
        d.value.set(0, 0, 0).applyMatrix4(y),
        f.value.set(0, 0, -1).applyMatrix4(y).sub(d.value).normalize(),
        (p.value = this.depthBias ?? 1),
        (m.value = this.sort360 ?? !1),
        (h.packedSplats = t.splats));
      let b = g ? l : c,
        x = g ? i : Math.ceil(i / 2);
      await r.renderReadback({
        renderer: this.spark.renderer,
        reader: b,
        count: x,
        readback: _,
      });
      let S = await Lu(async (e) => {
        let t = g ? `sort32Splats` : `sortDoubleSplats`;
        return e.call(t, {
          maxSplats: a,
          numSplats: i,
          readback: _,
          ordering: s,
        });
      });
      (g ? (this.readback32 = S.readback) : (this.readback16 = S.readback),
        (s = S.ordering),
        (o = S.activeSplats));
    }
    (this.updateDisplay({
      accumulator: t,
      viewToWorld: n,
      ordering: s,
      activeSplats: o,
      displayed: r,
    }),
      (this.sortingCheck = !1));
  }
  updateDisplay({
    accumulator: e,
    viewToWorld: t,
    ordering: n,
    activeSplats: r,
    displayed: i = !1,
  }) {
    if (!this.display)
      ((e.refCount += 1),
        (this.display = {
          accumulator: e,
          viewToWorld: t,
          geometry: new oc(n, r),
        }));
    else {
      (!i &&
        e !== this.display.accumulator &&
        ((e.refCount += 1),
        this.spark.releaseAccumulator(this.display.accumulator),
        (this.display.accumulator = e)),
        (this.display.viewToWorld = t));
      let a = this.display.geometry.ordering;
      (a.length === n.length
        ? this.display.geometry.update(n, r)
        : (this.display.geometry.dispose(),
          (this.display.geometry = new oc(n, r))),
        this.orderingFreelist.free(a));
    }
    this.spark.viewpoint === this && this.spark.prepareViewpoint(this);
  }
  static makeSorter() {
    if (!e.dynos) {
      let t = new Id({ value: !0 }),
        n = new zd({ value: new U() }),
        r = new zd({ value: new U() }),
        i = new Rd({ value: 1 }),
        a = new Id({ value: !1 }),
        o = new Om(),
        s = new gp(),
        c = Pl({ index: `int` }, { rgba8: `vec4` }, ({ index: e }) => {
          if (!e) throw Error(`No index`);
          let s = {
              sortRadial: t,
              sortOrigin: n,
              sortDirection: r,
              sortDepthBias: i,
              sort360: a,
            },
            c = $d(e, Ol(`int`, 2));
          return {
            rgba8: of(
              af(
                df({
                  vectorType: `vec2`,
                  x: Im({ gsplat: Ju(o, c), ...s }),
                  y: Im({ gsplat: Ju(o, Zd(c, Ol(`int`, 1))), ...s }),
                }),
              ),
            ),
          };
        }),
        l = Pl({ index: `int` }, { rgba8: `vec4` }, ({ index: e }) => {
          if (!e) throw Error(`No index`);
          let s = {
            sortRadial: t,
            sortOrigin: n,
            sortDirection: r,
            sortDepthBias: i,
            sort360: a,
          };
          return { rgba8: of(rf(Im({ gsplat: Ju(o, e), ...s }))) };
        });
      e.dynos = {
        dynoSortRadial: t,
        dynoOrigin: n,
        dynoDirection: r,
        dynoDepthBias: i,
        dynoSort360: a,
        dynoSplats: o,
        reader: s,
        doubleSortReader: c,
        sort32Reader: l,
      };
    }
    return e.dynos;
  }
};
