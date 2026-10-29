// SceneEditor-NC7_0wmu 44 — context
// Lines 26578-27144 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Xp = class {
    constructor() {
      this.fetchDyno = new Ml({
        inTypes: {},
        outTypes: { gsplat: Wu },
        globals: () => [rd],
        statements: ({ outputs: e }) =>
          Ll(`
      ${e.gsplat}.flags = 0u;
      return;
    `),
      }).outputs.gsplat;
    }
    prepareFetchSplat() {}
    dispose() {}
    getNumSplats() {
      return 0;
    }
    hasRgbDir() {
      return !1;
    }
    getNumSh() {
      return 0;
    }
    setMaxSh(e) {}
    fetchSplat({ index: e }) {
      return this.fetchDyno;
    }
    forEachSplat() {}
  },
  Zp = class e extends Ip {
    constructor(e = {}) {
      if (
        (super({ update: (e) => this.update(e) }),
        (this.isInitialized = !1),
        (this.recolor = new W(1, 1, 1)),
        (this.opacity = 1),
        (this.generatorDirty = !0),
        (this.enableViewToObject = !1),
        (this.enableViewToWorld = !1),
        (this.enableWorldToView = !1),
        (this.skinning = null),
        (this.edits = null),
        (this.rgbaDisplaceEdits = null),
        (this.splatRgba = null),
        (this.maxSh = 3),
        (this.showLodPageDyno = new Ld({ value: 0 })),
        e.splats)
      )
        ((this.splats = e.splats), (this.numSplats = e.splats.getNumSplats()));
      else if (e.paged) {
        e.extSplats &&
          console.warn(
            `To set extSplats with the paged option, set SparkRenderer.pagedExtSplats`,
          );
        let t = e.url ?? ``;
        if (e.paged === !0) this.paged = new Wp({ rootUrl: t });
        else if (e.paged instanceof Wp) this.paged = e.paged;
        else if (e.paged instanceof Kp)
          this.paged = new Wp({ rootUrl: t, pager: e.paged });
        else throw Error(`Invalid paged option`);
        this.splats = this.paged;
      } else
        e.extSplats
          ? ((this.extSplats =
              e.extSplats instanceof yf ? e.extSplats : new yf()),
            (e.extSplats = this.extSplats),
            (this.numSplats = this.extSplats.numSplats),
            (this.splats = this.extSplats))
          : e.packedSplats
            ? ((this.packedSplats = e.packedSplats),
              (this.packedSplats.splatEncoding = e.splatEncoding ?? { ...cl }),
              (this.splats = this.packedSplats))
            : (this.packedSplats = new Dm());
      if (
        ((this.editable = e.editable ?? !0),
        (this.raycastable = e.raycastable ?? !0),
        (this.minRaycastOpacity = e.minRaycastOpacity ?? 0.2),
        (this.onFrame = e.onFrame),
        (this.context = {
          transform: new Pp(),
          viewToWorld: new Pp(),
          worldToView: new Pp(),
          viewToObject: new Pp(),
          covTransform: new Fp(),
          covViewToWorld: new Fp(),
          covWorldToView: new Fp(),
          covViewToObject: new Fp(),
          recolor: new Bd({ value: new vn().setScalar(-1 / 0) }),
          time: new Rd({ value: 0 }),
          deltaTime: new Rd({ value: 0 }),
          numSplats: new Ld({ value: 0 }),
          splats: new Xp(),
          enableLod: new Id({ value: !1 }),
          lodIndices: new Hd({ value: tm, key: `lodIndices` }),
        }),
        (this.covSplats = e.covSplats ?? !1),
        this.covSplats && !this.extSplats)
      )
        throw Error(`CovSplats requires ExtSplats`);
      if (
        ((this.objectModifiers = e.objectModifier
          ? [e.objectModifier]
          : void 0),
        (this.worldModifiers = e.worldModifier ? [e.worldModifier] : void 0),
        e.objectModifiers && (this.objectModifiers = e.objectModifiers),
        e.worldModifiers && (this.worldModifiers = e.worldModifiers),
        (this.enableLod = e.enableLod),
        (this.lodScale = e.lodScale ?? 1),
        (this.behindFoveate = e.behindFoveate),
        (this.coneFov0 = e.coneFov0),
        (this.coneFov = e.coneFov),
        (this.coneFoveate = e.coneFoveate),
        this.updateGenerator(),
        e.url ||
          e.fileBytes ||
          e.stream ||
          e.constructSplats ||
          (e.packedSplats && !e.packedSplats.isInitialized) ||
          (this.extSplats && !this.extSplats.isInitialized))
      )
        this.initialized = this.asyncInitialize(e).then(async () => {
          if ((this.updateGenerator(), (this.isInitialized = !0), e.onLoad)) {
            let t = e.onLoad(this);
            t instanceof Promise && (await t);
          }
          return this;
        });
      else if (
        ((this.isInitialized = !0),
        (this.initialized = Promise.resolve(this)),
        e.onLoad)
      ) {
        let t = e.onLoad(this);
        t instanceof Promise && (this.initialized = t.then(() => this));
      }
    }
    async asyncInitialize(e) {
      let {
        url: t,
        fileBytes: n,
        fileType: r,
        fileName: i,
        stream: a,
        streamLength: o,
        maxSplats: s,
        constructSplats: c,
        onProgress: l,
        splatEncoding: u,
        lod: d,
        nonLod: f,
        lodAbove: p,
      } = e;
      if (this.packedSplats) {
        if (t || n || a || c) {
          let e = {
            url: t,
            fileBytes: n,
            fileType: r,
            fileName: i,
            stream: a,
            streamLength: o,
            maxSplats: s,
            construct: c,
            onProgress: l,
            splatEncoding: u,
            lod: d,
            nonLod: f,
            lodAbove: p,
          };
          this.packedSplats.reinitialize(e);
        }
        (await this.packedSplats.initialized,
          (this.splats = this.packedSplats));
      } else if (this.extSplats && (t || n || a || c)) {
        let e = c;
        (this.extSplats.reinitialize({
          url: t,
          fileBytes: n,
          fileType: r,
          fileName: i,
          stream: a,
          streamLength: o,
          maxSplats: s,
          construct: e,
          onProgress: l,
          lod: d,
          nonLod: f,
          lodAbove: p,
        }),
          await this.extSplats.initialized,
          (this.splats = this.extSplats));
      }
      this.splats &&
        ((this.numSplats = this.splats.getNumSplats()), this.updateGenerator());
    }
    static async staticInitialize() {
      (await rp(), (e.isStaticInitialized = !0));
    }
    pushSplat(e, t, n, r, i) {
      this.packedSplats
        ? this.packedSplats.pushSplat(e, t, n, r, i)
        : this.extSplats && this.extSplats.pushSplat(e, t, n, r, i);
    }
    forEachSplat(e) {
      var t;
      (t = this.splats) == null || t.forEachSplat(e);
    }
    dispose() {
      (this.splats &&
        this.splats !== this.packedSplats &&
        this.splats !== this.extSplats &&
        (this.splats.dispose(), (this.splats = void 0)),
        (this.packedSplats &&= (this.packedSplats.dispose(), void 0)),
        (this.extSplats &&= (this.extSplats.dispose(), void 0)));
    }
    getBoundingBox(e = !0) {
      var t;
      if (!this.initialized)
        throw Error(`Cannot get bounding box before SplatMesh is initialized`);
      let n = new U(1 / 0, 1 / 0, 1 / 0),
        r = new U(-1 / 0, -1 / 0, -1 / 0),
        i = new U(),
        a = [-1, 1];
      function o(t, o, s, c, l, u) {
        if (e) (n.min(o), r.max(o));
        else
          for (let e of a)
            for (let t of a)
              for (let l of a)
                (i.set(e * s.x, t * s.y, l * s.z),
                  i.applyQuaternion(c),
                  i.add(o),
                  n.min(i),
                  r.max(i));
      }
      return ((t = this.splats) == null || t.forEachSplat(o), new wt(n, r));
    }
    set objectModifier(e) {
      e ? (this.objectModifiers = [e]) : (this.objectModifiers = void 0);
    }
    set worldModifier(e) {
      e ? (this.worldModifiers = [e]) : (this.worldModifiers = void 0);
    }
    constructGenerator(e) {
      if (this.covSplats) return this.constructCovGenerator(e);
      let { transform: t, viewToObject: n, recolor: r } = e,
        i = Pl({ index: `int` }, { gsplat: Wu }, ({ index: i }) => {
          if (!i) throw Error(`index is undefined`);
          ((i = $p(
            e.lodIndices,
            i,
            e.numSplats,
            e.enableLod,
            this.showLodPageDyno,
          )),
            e.splats.setMaxSh(this.maxSh),
            e.splats.prepareFetchSplat());
          let a = e.splats.fetchSplat({ index: i, viewOrigin: n.translate });
          if (
            (this.splatRgba && (a = em(a, this.splatRgba.dyno, i, e.enableLod)),
            this.skinning && (a = this.skinning.modify(a)),
            this.objectModifiers)
          )
            for (let e of this.objectModifiers)
              a = e.apply({ gsplat: a }).gsplat;
          a = t.applyGsplat(a);
          let o = $d(r, Qu(a).outputs.rgba);
          if (
            ((a = $u({ gsplat: a, rgba: o })),
            this.rgbaDisplaceEdits && (a = this.rgbaDisplaceEdits.modify(a)),
            this.worldModifiers)
          )
            for (let e of this.worldModifiers)
              a = e.apply({ gsplat: a }).gsplat;
          return { gsplat: a };
        });
      ((this.generator = i), (this.covGenerator = void 0));
    }
    constructCovGenerator(e) {
      let { covTransform: t, covViewToObject: n, recolor: r } = e,
        i = Pl({ index: `int` }, { covsplat: Gu }, ({ index: i }) => {
          if (!i) throw Error(`index is undefined`);
          ((i = $p(
            e.lodIndices,
            i,
            e.numSplats,
            e.enableLod,
            this.showLodPageDyno,
          )),
            e.splats.prepareFetchSplat());
          let a = e.splats.fetchSplat({ index: i, viewOrigin: n.offset });
          if (
            (this.splatRgba && (a = em(a, this.splatRgba.dyno, i, e.enableLod)),
            this.objectModifiers)
          )
            for (let e of this.objectModifiers)
              a = e.apply({ gsplat: a }).gsplat;
          let o = Zu(a);
          if (
            (this.skinning && (o = this.skinning.modifyCov(o)),
            this.covObjectModifiers)
          )
            for (let e of this.covObjectModifiers)
              o = e.apply({ covsplat: o }).covsplat;
          o = t.applyCovSplat(o);
          let s = $d(r, gd(o).outputs.rgba);
          if (
            ((o = _d({ covsplat: o, rgba: s })),
            this.rgbaDisplaceEdits && (o = this.rgbaDisplaceEdits.modifyCov(o)),
            this.covWorldModifiers)
          )
            for (let e of this.covWorldModifiers)
              o = e.apply({ covsplat: o }).covsplat;
          return { covsplat: o };
        });
      ((this.generator = void 0), (this.covGenerator = i));
    }
    updateGenerator() {
      this.generatorDirty = !0;
    }
    update({
      renderer: t,
      time: n,
      deltaTime: r,
      viewToWorld: i,
      camera: a,
      renderSize: o,
      globalEdits: s,
      lodIndices: c,
    }) {
      var l;
      ((this.context.time.value = n),
        (this.context.deltaTime.value = r),
        (e.dynoTime.value = n),
        (this.showLodPageDyno.value = this.showLodPage ?? -1));
      let u = this.splats ?? this.packedSplats ?? this.extSplats;
      (u && (this.context.splats = u),
        (this.numSplats = this.context.splats.getNumSplats()));
      let d = !1,
        f = this.packedSplats?.lodSplats ?? this.extSplats?.lodSplats;
      if (
        ((this.context.enableLod.value = f != null && c != null),
        this.enableLod === !1 && (this.context.enableLod.value = !1),
        (this.context.lodIndices.value = c?.texture ?? tm),
        this.context.enableLod.value &&
          f &&
          ((this.context.splats = f), (this.numSplats = c?.numSplats ?? 0)),
        (this.context.numSplats.value = this.numSplats),
        this.context.splats !== this.lastSplats &&
          ((this.lastSplats = this.context.splats), (this.generatorDirty = !0)),
        this.covSplats)
      ) {
        (this.context.covTransform.update(this) && (d = !0),
          this.context.covViewToWorld.updateFromMatrix(i) &&
            this.enableViewToWorld &&
            (d = !0));
        let e = i.clone().invert();
        this.context.covWorldToView.updateFromMatrix(e) &&
          this.enableWorldToView &&
          (d = !0);
        let t = this.matrixWorld.clone().invert().multiply(i);
        this.context.covViewToObject.updateFromMatrix(t) &&
          (this.enableViewToObject || this.context.splats.hasRgbDir()) &&
          (d = !0);
      } else {
        (this.context.transform.update(this) && (d = !0),
          this.context.viewToWorld.updateFromMatrix(i) &&
            this.enableViewToWorld &&
            (d = !0));
        let e = i.clone().invert();
        this.context.worldToView.updateFromMatrix(e) &&
          this.enableWorldToView &&
          (d = !0);
        let t = new z()
          .compose(
            this.context.transform.translate.value,
            this.context.transform.rotate.value,
            new U().setScalar(this.context.transform.scale.value),
          )
          .invert()
          .multiply(i);
        this.context.viewToObject.updateFromMatrix(t) &&
          (this.enableViewToObject || this.context.splats.hasRgbDir()) &&
          (d = !0);
      }
      let p = new vn(
        this.recolor.r,
        this.recolor.g,
        this.recolor.b,
        this.opacity,
      );
      p.equals(this.context.recolor.value) ||
        (this.context.recolor.value.copy(p), (d = !0));
      let m = this.editable ? (this.edits ?? []).concat(s) : [];
      (this.editable &&
        !this.edits &&
        this.traverseVisible((e) => {
          e instanceof Tp && m.push(e);
        }),
        m.sort((e, t) => e.ordering - t.ordering));
      let h = m.map((e) => {
        if (e.sdfs != null) return { edit: e, sdfs: e.sdfs };
        let t = [];
        return (
          e.traverseVisible((e) => {
            e instanceof Cp && t.push(e);
          }),
          { edit: e, sdfs: t }
        );
      });
      if (h.length > 0 && !this.rgbaDisplaceEdits) {
        let e = h.length,
          t = h.reduce((e, t) => e + t.sdfs.length, 0);
        ((this.rgbaDisplaceEdits = new Ep({ maxEdits: e, maxSdfs: t })),
          (this.generatorDirty = !0));
      }
      if (this.rgbaDisplaceEdits) {
        let e = this.rgbaDisplaceEdits.update(h);
        ((d ||= e.updated), e.dynoUpdated && (this.generatorDirty = !0));
      }
      (this.generatorDirty &&
        (this.constructGenerator(this.context),
        (this.generatorDirty = !1),
        (d = !0)),
        d && this.updateVersion(),
        (l = this.onFrame) == null ||
          l.call(this, { mesh: this, time: n, deltaTime: r }));
    }
    raycast(t, n) {
      if (
        !e.isStaticInitialized ||
        !this.raycastable ||
        (!this.packedSplats && !this.extSplats && !this.paged)
      )
        return;
      let r = this.paged != null,
        i = r ? (this.paged?.pager?.extSplats ?? !1) : this.extSplats != null,
        { near: a, far: o, ray: s } = t,
        c = this.matrixWorld.clone().invert(),
        l = new Pt().setFromMatrix4(c),
        u = s.origin.clone().applyMatrix4(c),
        d = s.direction.clone().applyMatrix3(l),
        f = Df(),
        p = f.length / 4,
        m = 0,
        h =
          this.raycastIndices?.numSplats ??
          (r ? this.paged?.numSplats : this.context.numSplats.value) ??
          0,
        g =
          this.raycastIndices?.indices ??
          (r
            ? this.paged?.dynoIndices.value.image.data
            : this.context.enableLod.value
              ? this.context.lodIndices.value.image.data
              : null) ??
          null;
      if (i) {
        let e = Of(),
          t = r
            ? this.paged?.pager?.packedTexture.value.image.data
            : g
              ? this.extSplats?.lodSplats?.extArrays[0]
              : this.extSplats?.extArrays[0],
          n = r
            ? this.paged?.pager?.extTexture.value.image.data
            : g
              ? this.extSplats?.lodSplats?.extArrays[1]
              : this.extSplats?.extArrays[1];
        if (!t || !n) return;
        for (let r = 0; r < h; r += p) {
          let i = Math.min(p, h - r);
          if (!g)
            (f.set(t.subarray(r * 4, (r + i) * 4)),
              e.set(n.subarray(r * 4, (r + i) * 4)));
          else
            for (let a = 0; a < i; ++a) {
              let i = g[r + a],
                o = a * 4,
                s = i * 4;
              ((f[o] = t[s]),
                (f[o + 1] = t[s + 1]),
                (f[o + 2] = t[s + 2]),
                (f[o + 3] = t[s + 3]),
                (e[o] = n[s]),
                (e[o + 1] = n[s + 1]),
                (e[o + 2] = n[s + 2]),
                (e[o + 3] = n[s + 3]));
            }
          let s = kf(
            u.x,
            u.y,
            u.z,
            d.x,
            d.y,
            d.z,
            this.minRaycastOpacity,
            a,
            o,
            i,
          );
          m = this.appendRaycastBuffer(m, s);
        }
      } else {
        let e = r
          ? this.paged?.pager?.packedTexture.value.image.data
          : g
            ? this.packedSplats?.lodSplats?.packedArray
            : this.packedSplats?.packedArray;
        if (!e) return;
        let t = r
          ? this.paged?.splatEncoding
          : this.packedSplats?.splatEncoding;
        for (let n = 0; n < h; n += p) {
          let r = Math.min(p, h - n);
          if (!g) f.set(e.subarray(n * 4, (n + r) * 4));
          else
            for (let t = 0; t < r; ++t) {
              let r = g[n + t],
                i = t * 4,
                a = r * 4;
              ((f[i] = e[a]),
                (f[i + 1] = e[a + 1]),
                (f[i + 2] = e[a + 2]),
                (f[i + 3] = e[a + 3]));
            }
          let i = Af(
            u.x,
            u.y,
            u.z,
            d.x,
            d.y,
            d.z,
            this.minRaycastOpacity,
            a,
            o,
            r,
            t?.lnScaleMin ?? -12,
            t?.lnScaleMax ?? 9,
            t?.lodOpacity ?? !1,
          );
          m = this.appendRaycastBuffer(m, i);
        }
      }
      for (let t of e.raycastBuffer.subarray(0, m)) {
        let e = s.direction.clone().multiplyScalar(t).add(s.origin);
        n.push({ distance: t, point: e, object: this });
      }
    }
    appendRaycastBuffer(t, n) {
      let r = t + n.length,
        i = e.raycastBuffer.length;
      if (r > i) {
        for (; i < r;) i *= 2;
        let n = new Float32Array(i);
        (n.set(e.raycastBuffer.subarray(0, t)), (e.raycastBuffer = n));
      }
      return (e.raycastBuffer.set(n, t), t + n.length);
    }
    async createLodSplats({ rgbaArray: e, quality: t } = {}) {
      this.packedSplats
        ? await this.packedSplats.createLodSplats({ quality: t, rgbaArray: e })
        : this.extSplats &&
          (await this.extSplats.createLodSplats({ quality: t, rgbaArray: e }));
    }
  };
