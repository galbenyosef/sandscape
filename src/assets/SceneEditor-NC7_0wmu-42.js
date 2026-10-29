// SceneEditor-NC7_0wmu 42 — index
// Lines 25629-26509 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Up = Hp,
  Wp = class {
    constructor(e) {
      if (
        ((this.pager = e.pager),
        (this.rootUrl = e.rootUrl ?? ``),
        (this.requestHeader = e.requestHeader),
        (this.withCredentials = e.withCredentials),
        (this.numSh = 0),
        (this.maxSh = e.pager?.maxSh ?? 3),
        (this.numSplats = 0),
        (this.dynoNumSplats = new Ld({ value: 0 })),
        (this.dynoIndices = new Hd({ value: Kp.emptyIndicesTexture })),
        (this.rgbMinMaxLnScaleMinMax = new Bd({ value: new vn(0, 1, -12, 9) })),
        (this.lodOpacity = new Id({ value: !1 })),
        (this.dynoNumSh = new Ld({ value: 0 })),
        (this.shMax = new zd({ value: new U() })),
        (this.fileBytes = e.fileBytes),
        (this.fileType = e.fileType),
        !this.fileType &&
          this.fileBytes &&
          (this.fileType = xm(this.fileBytes)),
        !this.fileType && this.rootUrl && (this.fileType = Cm(this.rootUrl)),
        !this.fileType)
      )
        throw Error(`Unable to determine file type`);
      this.fileType === sl.RAD && (this.radMetaPromise = this.getRadMeta());
    }
    dispose() {
      this.dynoIndices.value !== Kp.emptyIndicesTexture &&
        (this.dynoIndices.value.dispose(),
        (this.dynoIndices.value = Kp.emptyIndicesTexture));
    }
    setMaxSh(e) {
      this.maxSh = e;
    }
    getRadMeta() {
      return this.radMetaPromise
        ? this.radMetaPromise
        : ((this.radMetaPromise = (async () => {
            if ((await Jp, this.fileBytes)) {
              let e = Ef(this.fileBytes.slice(0, 1048576));
              if (e) return e;
              throw Error(`Failed to decode RAD header`);
            }
            if (!this.rootUrl) throw Error(`No url or fileBytes provided`);
            for (let e of [65536, 256 * 1024, 1024 * 1024]) {
              let t = Ef(
                await Yp({
                  url: this.rootUrl,
                  requestHeader: this.requestHeader,
                  withCredentials: this.withCredentials,
                  offset: 0,
                  bytes: e,
                }),
              );
              if (t) return t;
            }
            throw Error(`Failed to decode RAD header`);
          })().then((e) => e)),
          this.radMetaPromise.catch((e) => {
            console.error(e);
          }),
          this.radMetaPromise);
    }
    chunkUrl(e) {
      return this.rootUrl.replace(/-lod-0\./, `-lod-${e}.`);
    }
    async fetchDecodeChunk(e) {
      let t;
      if (this.fileType === sl.RAD) {
        let { meta: n, chunksStart: r } = await this.getRadMeta();
        if (e < 0 || e >= n.chunks.length)
          throw Error(
            `Chunk index out of range: ${e} (max: ${n.chunks.length - 1})`,
          );
        let { offset: i, bytes: a, filename: o } = n.chunks[e];
        if (o) {
          if (this.fileBytes)
            throw Error(`Chunked RAD file not supported with fileBytes`);
          let e = new URL(this.rootUrl, window.location.href).toString();
          t = await Yp({
            url: new URL(o, e).toString(),
            requestHeader: this.requestHeader,
            withCredentials: this.withCredentials,
          });
        } else if (((i += r), this.fileBytes)) {
          if (i < 0 || i + a > this.fileBytes.length)
            throw Error(
              `Invalid chunk offset or bytes: ${i} + ${a} > ${this.fileBytes.length}`,
            );
          t = this.fileBytes.slice(i, i + a);
        } else if (this.rootUrl)
          t = await Yp({
            url: this.rootUrl,
            requestHeader: this.requestHeader,
            withCredentials: this.withCredentials,
            offset: i,
            bytes: a,
          });
        else throw Error(`No url or fileBytes provided`);
      } else if (!this.fileBytes)
        if (this.rootUrl) {
          let n = this.chunkUrl(e),
            r = new Request(n, {
              headers: this.requestHeader
                ? new Headers(this.requestHeader)
                : void 0,
              credentials: this.withCredentials ? `include` : `same-origin`,
            }),
            i = await fetch(r);
          if (!i.ok || !i.body)
            throw Error(`Failed to fetch "${n}": ${i.status} ${i.statusText}`);
          t = new Uint8Array(await i.arrayBuffer());
        } else throw Error(`No url or fileBytes provided`);
      return await Uu.withWorker(async (n) => {
        if (!this.pager) throw Error(`PagedSplats.pager not set`);
        if (!this.pager.extSplats) {
          let r = (
            await n.call(`loadPackedSplats`, {
              fileBytes: t,
              pathName: this.chunkUrl(e),
              sh1Codes: this.sh1Codes?.slice(),
              sh2Codes: this.sh2Codes?.slice(),
              sh3Codes: this.sh3Codes?.slice(),
            })
          ).lodSplats;
          return (
            this.splatEncoding ||
              ((this.splatEncoding = r.splatEncoding),
              (this.numSh = r.extra.sh3 ? 3 : r.extra.sh2 ? 2 : +!!r.extra.sh1),
              this.rgbMinMaxLnScaleMinMax.value.set(
                this.splatEncoding.rgbMin ?? 0,
                this.splatEncoding.rgbMax ?? 1,
                this.splatEncoding.lnScaleMin ?? -12,
                this.splatEncoding.lnScaleMax ?? 9,
              ),
              (this.lodOpacity.value = this.splatEncoding.lodOpacity ?? !1),
              this.shMax.value.set(
                this.splatEncoding.sh1Max ?? 1,
                this.splatEncoding.sh2Max ?? 1,
                this.splatEncoding.sh3Max ?? 1,
              )),
            (this.sh1Codes = r.extra.sh1Codes ?? this.sh1Codes),
            (this.sh2Codes = r.extra.sh2Codes ?? this.sh2Codes),
            (this.sh3Codes = r.extra.sh3Codes ?? this.sh3Codes),
            r
          );
        }
        let r = this.sh3Codes,
          i = (
            await n.call(`loadExtSplats`, {
              fileBytes: t,
              pathName: this.chunkUrl(e),
              sh1Codes: this.sh1Codes?.slice(),
              sh2Codes: this.sh2Codes?.slice(),
              sh3Codes: r ? [r[0].slice(), r[1].slice()] : void 0,
            })
          ).lodSplats;
        return (
          this.splatEncoding ||
            ((this.splatEncoding = cl),
            (this.numSh =
              i.extra.sh3a && i.extra.sh3b
                ? 3
                : i.extra.sh2
                  ? 2
                  : +!!i.extra.sh1)),
          (this.sh1Codes = i.extra.sh1Codes ?? this.sh1Codes),
          (this.sh2Codes = i.extra.sh2Codes ?? this.sh2Codes),
          (this.sh3Codes = i.extra.sh3Codes ?? this.sh3Codes),
          i
        );
      });
    }
    update(e, t) {
      if (!this.pager) throw Error(`PagedSplats.pager not set`);
      let n = this.pager.renderer;
      ((this.numSplats = e), (this.dynoNumSplats.value = this.numSplats));
      let r = Math.ceil(e / 16384),
        i =
          this.dynoIndices.value === Kp.emptyIndicesTexture
            ? void 0
            : this.dynoIndices.value;
      if ((i && r > i.image.height && (i.dispose(), (i = void 0)), !i))
        ((i = new ge(t, 4096, r, Vt, B)),
          (i.internalFormat = `RGBA32UI`),
          (i.needsUpdate = !0),
          n.initTexture(i),
          (this.dynoIndices.value = i));
      else {
        i.image.data.set(t.subarray(0, e));
        let a = n.getContext();
        (n.state.activeTexture(a.TEXTURE0),
          n.state.bindTexture(a.TEXTURE_2D, qp(n, i)),
          a.bindBuffer(a.PIXEL_UNPACK_BUFFER, null),
          a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1),
          a.texSubImage2D(
            a.TEXTURE_2D,
            0,
            0,
            0,
            4096,
            r,
            a.RGBA_INTEGER,
            a.UNSIGNED_INT,
            t,
          ),
          n.state.bindTexture(a.TEXTURE_2D, null));
      }
    }
    prepareFetchSplat() {}
    getNumSplats() {
      return this.numSplats;
    }
    hasRgbDir() {
      return this.pager ? Math.min(this.numSh, this.pager.maxSh) > 0 : !1;
    }
    getNumSh() {
      return this.numSh;
    }
    fetchSplat({ index: e, viewOrigin: t }) {
      if (!this.pager) throw Error(`PagedSplats.pager not set`);
      let n = this.pager.readIndex.apply({
        index: e,
        numSplats: this.dynoNumSplats,
        indices: this.dynoIndices,
      }).index;
      return this.pager.extSplats
        ? this.hasRgbDir() && t
          ? ((this.dynoNumSh.value = Math.min(
              this.numSh,
              this.maxSh,
              this.pager.maxSh,
            )),
            this.pager.readSplatExtDir.apply({
              index: n,
              viewOrigin: t,
              numSh: this.dynoNumSh,
            }).gsplat)
          : this.pager.readSplatExt.apply({ index: n }).gsplat
        : this.hasRgbDir() && t
          ? ((this.dynoNumSh.value = Math.min(
              this.numSh,
              this.maxSh,
              this.pager.maxSh,
            )),
            this.pager.readSplatDir.apply({
              index: n,
              rgbMinMaxLnScaleMinMax: this.rgbMinMaxLnScaleMinMax,
              lodOpacity: this.lodOpacity,
              viewOrigin: t,
              numSh: this.dynoNumSh,
              shMax: this.shMax,
            }).gsplat)
          : this.pager.readSplat.apply({
              index: n,
              rgbMinMaxLnScaleMinMax: this.rgbMinMaxLnScaleMinMax,
              lodOpacity: this.lodOpacity,
            }).gsplat;
    }
    forEachSplat(e) {
      if (!this.pager || !this.numSplats) return;
      let t = this.pager.extSplats,
        n = this.dynoIndices.value.image.data,
        r = this.pager.packedTexture.value.image.data,
        i = [r, this.pager.extTexture.value.image.data];
      for (let a = 0; a < this.numSplats; ++a) {
        let o = n[a],
          s = t ? ou(i, o) : uu(r, o, this.splatEncoding);
        e(a, s.center, s.scales, s.quaternion, s.opacity, s.color);
      }
    }
  },
  Gp = class e {
    constructor(t) {
      ((this.fetchPause = 0),
        (this.splatsChunkToPage = new Map()),
        (this.pageToSplatsChunk = []),
        (this.renderer = t.renderer),
        (this.extSplats = t.extSplats ?? !1),
        (this.pageSplats = 65536),
        (this.maxSplats = t.maxSplats ?? 16777216),
        (this.maxPages = Math.ceil(this.maxSplats / this.pageSplats)),
        (this.maxSplats = this.maxPages * this.pageSplats),
        (this.maxSh = t.maxSh ?? 3),
        (this.curSh = 0),
        (this.autoDrive = t.autoDrive ?? !0),
        (this.numFetchers = t.numFetchers ?? 3),
        (this.splatsChunkToPage = new Map()),
        (this.pageToSplatsChunk = Array(this.maxPages)),
        (this.pageFreelist = Array.from(
          { length: this.maxPages },
          (e, t) => t,
        )),
        (this.pageLru = new Set()),
        (this.freeablePages = []),
        (this.newUploads = []),
        (this.readyUploads = []),
        (this.lodTreeUpdates = []),
        (this.fetchers = []),
        (this.fetched = []),
        (this.fetchPriority = []),
        (this.packedTexture = new Ud({
          value: this.newUint32ArrayTexture(
            new Uint32Array(this.maxPages * 256 * 256 * 4),
            256,
            256,
            this.maxPages,
            Vt,
            B,
            `RGBA32UI`,
          ),
        })),
        (this.extTexture = new Ud({
          value: this.extSplats
            ? this.newUint32ArrayTexture(
                new Uint32Array(this.maxPages * 256 * 256 * 4),
                256,
                256,
                this.maxPages,
                Vt,
                B,
                `RGBA32UI`,
              )
            : e.emptyExtTexture,
        })),
        (this.sh1Texture = new Ud({
          value: this.extSplats ? e.emptyExtSh1Texture : e.emptySh1Texture,
        })),
        (this.sh2Texture = new Ud({
          value: this.extSplats ? e.emptyExtSh2Texture : e.emptySh2Texture,
        })),
        (this.sh3Texture = new Ud({
          value: this.extSplats ? e.emptyExtSh3Texture : e.emptySh3Texture,
        })),
        (this.sh3TextureB = new Ud({ value: e.emptyExtSh3BTexture })),
        (this.readIndex = Pl(
          { index: `int`, numSplats: `int`, indices: `usampler2D` },
          { index: `int` },
          ({ index: e, numSplats: t, indices: n }) =>
            new Ml({
              inTypes: {
                index: `int`,
                numSplats: `int`,
                indices: `usampler2D`,
              },
              outTypes: { index: `int` },
              inputs: { index: e, numSplats: t, indices: n },
              statements: ({ inputs: e, outputs: t }) =>
                Ll(`
            if (${e.index} >= ${e.numSplats}) {
              return;
            }

            ivec2 indexCoord = ivec2((${e.index} >> 2) & 4095, ${e.index} >> 14);
            uint index = texelFetch(${e.indices}, indexCoord, 0)[${e.index} & 3];
            ${t.index} = int(index);
          `),
            }).outputs,
        )),
        (this.readSplat = Pl(
          { index: `int`, rgbMinMaxLnScaleMinMax: `vec4`, lodOpacity: `bool` },
          { gsplat: Wu },
          ({ index: e, rgbMinMaxLnScaleMinMax: t, lodOpacity: n }) =>
            new Ml({
              inTypes: {
                index: `int`,
                packedTexture: `usampler2DArray`,
                rgbMinMaxLnScaleMinMax: `vec4`,
                lodOpacity: `bool`,
              },
              outTypes: { gsplat: Wu },
              inputs: {
                index: e,
                packedTexture: this.packedTexture,
                rgbMinMaxLnScaleMinMax: t,
                lodOpacity: n,
              },
              globals: () => [rd],
              statements: ({ inputs: e, outputs: t }) =>
                Ll(`
            int index = ${e.index};
            ivec3 splatCoord = pagedSplatTexCoord(index);
            uvec4 packedData = texelFetch(${e.packedTexture}, splatCoord, 0);

            unpackSplatEncoding(packedData, ${t.gsplat}.center, ${t.gsplat}.scales, ${t.gsplat}.quaternion, ${t.gsplat}.rgba, ${e.rgbMinMaxLnScaleMinMax});
            if ((${t.gsplat}.rgba.a == 0.0) || all(equal(${t.gsplat}.scales, vec3(0.0, 0.0, 0.0)))) {
              return;
            }
            
            ${t.gsplat}.index = index;
            ${t.gsplat}.flags = GSPLAT_FLAG_ACTIVE;
            if (${e.lodOpacity}) {
              ${t.gsplat}.rgba.a *= 2.0;
            }
          `),
            }).outputs,
        )),
        (this.readSplatDir = Pl(
          {
            index: `int`,
            rgbMinMaxLnScaleMinMax: `vec4`,
            lodOpacity: `bool`,
            viewOrigin: `vec3`,
            numSh: `int`,
            shMax: `vec3`,
          },
          { gsplat: Wu },
          ({
            index: e,
            rgbMinMaxLnScaleMinMax: t,
            lodOpacity: n,
            viewOrigin: r,
            numSh: i,
            shMax: a,
          }) => {
            if (!e || !t || !n || !r || !i || !a)
              throw Error(`index and viewOrigin are required`);
            let o = this.readSplat.apply({
                index: e,
                rgbMinMaxLnScaleMinMax: t,
                lodOpacity: n,
              }).gsplat,
              s = Qu(o).outputs.center,
              c = uf(Qd(s, r)),
              l = Mm({
                coord: nd(e),
                viewDir: c,
                numSh: i,
                sh1Texture: this.sh1Texture,
                sh2Texture: this.sh2Texture,
                sh3Texture: this.sh3Texture,
                shMax: a,
              }).rgb;
            return (
              (l = Zd(l, Qu(o).outputs.rgb)),
              (o = $u({ gsplat: o, rgb: l })),
              { gsplat: o }
            );
          },
        )),
        (this.readSplatExt = Pl(
          { index: `int` },
          { gsplat: Wu },
          ({ index: e }) =>
            new Ml({
              inTypes: {
                index: `int`,
                extTexture1: `usampler2DArray`,
                extTexture2: `usampler2DArray`,
              },
              outTypes: { gsplat: Wu },
              inputs: {
                index: e,
                extTexture1: this.packedTexture,
                extTexture2: this.extTexture,
              },
              globals: () => [rd],
              statements: ({ inputs: e, outputs: t }) =>
                Ll(`
            int index = ${e.index};
            ivec3 splatCoord = ivec3(index & 255, (index >> 8) & 255, index >> 16);
            uvec4 ext1 = texelFetch(${e.extTexture1}, splatCoord, 0);
            float alpha = unpackSplatExtAlpha(ext1);
            if (alpha == 0.0) {
              return;
            }

            uvec4 ext2 = texelFetch(${e.extTexture2}, splatCoord, 0);
            unpackSplatExt(ext1, ext2, ${t.gsplat}.center, ${t.gsplat}.scales, ${t.gsplat}.quaternion, ${t.gsplat}.rgba);
            if (all(equal(${t.gsplat}.scales, vec3(0.0, 0.0, 0.0)))) {
              return;
            }

            ${t.gsplat}.index = index;
            ${t.gsplat}.flags = GSPLAT_FLAG_ACTIVE;
          `),
            }).outputs,
        )),
        (this.readSplatExtDir = Pl(
          { index: `int`, viewOrigin: `vec3`, numSh: `int` },
          { gsplat: Wu },
          ({ index: e, viewOrigin: t, numSh: n }) => {
            if (!e || !t || !n)
              throw Error(`index and viewOrigin are required`);
            let r = this.readSplatExt.apply({ index: e }).gsplat,
              i = Qu(r).outputs.center,
              a = uf(Qd(i, t)),
              o = wf({
                coord: nd(e),
                viewDir: a,
                numSh: n,
                sh1Texture: this.sh1Texture,
                sh2Texture: this.sh2Texture,
                sh3TextureA: this.sh3Texture,
                sh3TextureB: this.sh3TextureB,
              }).rgb;
            return (
              (o = Zd(o, Qu(r).outputs.rgb)),
              (r = $u({ gsplat: r, rgb: o })),
              { gsplat: r }
            );
          },
        )));
    }
    dispose() {
      ((this.autoDrive = !1),
        (this.numFetchers = 0),
        this.packedTexture.value.dispose(),
        (this.packedTexture.value.source.data = null),
        this.extTexture.value !== e.emptyExtTexture &&
          (this.extTexture.value.dispose(),
          (this.extTexture.value.source.data = null)),
        this.extSplats
          ? (this.sh1Texture.value !== e.emptyExtSh1Texture &&
              (this.sh1Texture.value.dispose(),
              (this.sh1Texture.value.source.data = null)),
            this.sh2Texture.value !== e.emptyExtSh2Texture &&
              (this.sh2Texture.value.dispose(),
              (this.sh2Texture.value.source.data = null)),
            this.sh3Texture.value !== e.emptyExtSh3Texture &&
              (this.sh3Texture.value.dispose(),
              (this.sh3Texture.value.source.data = null)),
            this.sh3TextureB.value !== e.emptyExtSh3BTexture &&
              (this.sh3TextureB.value.dispose(),
              (this.sh3TextureB.value.source.data = null)))
          : (this.sh1Texture.value !== e.emptySh1Texture &&
              (this.sh1Texture.value.dispose(),
              (this.sh1Texture.value.source.data = null)),
            this.sh2Texture.value !== e.emptySh2Texture &&
              (this.sh2Texture.value.dispose(),
              (this.sh2Texture.value.source.data = null)),
            this.sh3Texture.value !== e.emptySh3Texture &&
              (this.sh3Texture.value.dispose(),
              (this.sh3Texture.value.source.data = null))));
    }
    ensureShTextures(t) {
      ((this.curSh = Math.max(this.curSh, t)),
        this.extSplats
          ? this.curSh >= 1 &&
            this.sh1Texture.value === e.emptyExtSh1Texture &&
            (this.sh1Texture.value = this.newUint32ArrayTexture(
              new Uint32Array(this.maxPages * 256 * 256 * 4),
              256,
              256,
              this.maxPages,
              Vt,
              B,
              `RGBA32UI`,
            ))
          : this.curSh >= 1 &&
            this.sh1Texture.value === e.emptySh1Texture &&
            (this.sh1Texture.value = this.newUint32ArrayTexture(
              new Uint32Array(this.maxPages * 256 * 256 * 2),
              256,
              256,
              this.maxPages,
              Xt,
              B,
              `RG32UI`,
            )),
        this.curSh >= 2 &&
          this.sh2Texture.value ===
            (this.extSplats ? e.emptyExtSh2Texture : e.emptySh2Texture) &&
          (this.sh2Texture.value = this.newUint32ArrayTexture(
            new Uint32Array(this.maxPages * 256 * 256 * 4),
            256,
            256,
            this.maxPages,
            Vt,
            B,
            `RGBA32UI`,
          )),
        this.extSplats
          ? this.curSh >= 3 &&
            (this.sh3Texture.value === e.emptyExtSh3Texture &&
              (this.sh3Texture.value = this.newUint32ArrayTexture(
                new Uint32Array(this.maxPages * 256 * 256 * 4),
                256,
                256,
                this.maxPages,
                Vt,
                B,
                `RGBA32UI`,
              )),
            this.sh3TextureB.value === e.emptyExtSh3BTexture &&
              (this.sh3TextureB.value = this.newUint32ArrayTexture(
                new Uint32Array(this.maxPages * 256 * 256 * 4),
                256,
                256,
                this.maxPages,
                Vt,
                B,
                `RGBA32UI`,
              )))
          : this.curSh >= 3 &&
            this.sh3Texture.value === e.emptySh3Texture &&
            (this.sh3Texture.value = this.newUint32ArrayTexture(
              new Uint32Array(this.maxPages * 256 * 256 * 4),
              256,
              256,
              this.maxPages,
              Vt,
              B,
              `RGBA32UI`,
            )));
    }
    allocatePage() {
      return this.pageFreelist.shift();
    }
    freePage(e) {
      this.pageFreelist.push(e);
    }
    getSplatsChunk(e, t) {
      let n = this.splatsChunkToPage.get(e);
      if (n) return n[t];
    }
    insertSplatsChunkPage(e, t, n, r) {
      this.splatsChunkToPage.has(e) || this.splatsChunkToPage.set(e, []);
      let i = this.splatsChunkToPage.get(e);
      if (!i) throw Error(`impossible`);
      t >= i.length && (i.length = t + 1);
      let a = { page: n, lru: r };
      return (
        (i[t] = a),
        this.pageLru.add(a),
        (this.pageToSplatsChunk[n] = {
          splats: e,
          chunk: t,
          time: performance.now(),
        }),
        this.pageToSplatsChunk[n]
      );
    }
    removeSplatsChunkPage(e, t, n) {
      let r = this.splatsChunkToPage.get(e);
      if (!r) throw Error(`impossible`);
      let i = r[t];
      if (!i)
        throw Error(
          `pageLru not found for splats: ${e}, chunk: ${t}, page: ${n}`,
        );
      for (
        this.pageLru.delete(i), r[t] = void 0;
        r.length > 0 && r[r.length - 1] === void 0;
      )
        r.pop();
      for (
        r.length === 0 && this.splatsChunkToPage.delete(e),
          this.pageToSplatsChunk[n] = void 0;
        this.pageToSplatsChunk.length > 0 &&
        this.pageToSplatsChunk[this.pageToSplatsChunk.length - 1] === void 0;
      )
        this.pageToSplatsChunk.pop();
    }
    uploadPage(t, n, r, i) {
      let a = t * this.pageSplats;
      (this.packedTexture.value.image.data
        .subarray(a * 4, a * 4 + n.length)
        .set(n),
        this.packedTexture.value.addLayerUpdate(t),
        (this.packedTexture.value.needsUpdate = !0),
        i &&
          (this.extTexture.value.image.data
            .subarray(a * 4, a * 4 + i.length)
            .set(i),
          this.extTexture.value.addLayerUpdate(t),
          (this.extTexture.value.needsUpdate = !0)));
      let o = this.extSplats
        ? r.sh3a && r.sh3b
          ? 3
          : r.sh2
            ? 2
            : +!!r.sh1
        : r.sh3
          ? 3
          : r.sh2
            ? 2
            : +!!r.sh1;
      if ((this.ensureShTextures(o), !this.extSplats)) {
        if (this.sh1Texture.value !== e.emptySh1Texture && r.sh1) {
          let e = r.sh1;
          (this.sh1Texture.value.image.data
            .subarray(a * 2, a * 2 + e.length)
            .set(e),
            this.sh1Texture.value.addLayerUpdate(t),
            (this.sh1Texture.value.needsUpdate = !0));
        }
      } else if (this.sh1Texture.value !== e.emptyExtSh1Texture && r.sh1) {
        let e = r.sh1;
        (this.sh1Texture.value.image.data
          .subarray(a * 4, a * 4 + e.length)
          .set(e),
          this.sh1Texture.value.addLayerUpdate(t),
          (this.sh1Texture.value.needsUpdate = !0));
      }
      if (this.sh2Texture.value !== e.emptySh2Texture && r.sh2) {
        let e = r.sh2;
        (this.sh2Texture.value.image.data
          .subarray(a * 4, a * 4 + e.length)
          .set(e),
          this.sh2Texture.value.addLayerUpdate(t),
          (this.sh2Texture.value.needsUpdate = !0));
      }
      if (this.extSplats) {
        if (this.sh3Texture.value !== e.emptyExtSh3Texture && r.sh3a) {
          let e = r.sh3a;
          (this.sh3Texture.value.image.data
            .subarray(a * 4, a * 4 + e.length)
            .set(e),
            this.sh3Texture.value.addLayerUpdate(t),
            (this.sh3Texture.value.needsUpdate = !0));
        }
        if (this.sh3TextureB.value !== e.emptyExtSh3BTexture && r.sh3b) {
          let e = r.sh3b;
          (this.sh3TextureB.value.image.data
            .subarray(a * 4, a * 4 + e.length)
            .set(e),
            this.sh3TextureB.value.addLayerUpdate(t),
            (this.sh3TextureB.value.needsUpdate = !0));
        }
      } else if (this.sh3Texture.value !== e.emptySh3Texture && r.sh3) {
        let e = r.sh3;
        (this.sh3Texture.value.image.data
          .subarray(a * 4, a * 4 + e.length)
          .set(e),
          this.sh3Texture.value.addLayerUpdate(t),
          (this.sh3Texture.value.needsUpdate = !0));
      }
    }
    getGlTexture(e) {
      return qp(this.renderer, e);
    }
    newUint32ArrayTexture(e, t, n, r, i, a, o) {
      let s = new Re(e, t, n, r);
      return (
        (s.format = i),
        (s.type = a),
        (s.internalFormat = o),
        (s.needsUpdate = !0),
        this.renderer.initTexture(s),
        s
      );
    }
    driveFetchers() {
      let e = [],
        t = [],
        n = 0;
      for (let { splats: r, chunk: i } of this.fetchPriority) {
        let a = this.getSplatsChunk(r, i);
        if (a) {
          (n >= this.maxPages ? t.push(a) : e.push(a), (n += 1));
          continue;
        }
        if (
          this.fetched.some(({ splats: e, chunk: t }) => r === e && i === t) ||
          this.fetchers.some(({ splats: e, chunk: t }) => r === e && i === t)
        ) {
          n += 1;
          continue;
        }
        if (n < this.maxPages && this.fetchers.length < this.numFetchers) {
          n += 1;
          let e = r
            .fetchDecodeChunk(i)
            .then(
              async (e) => {
                (this.fetched.push({ splats: r, chunk: i, data: e }),
                  this.fetchPause > 0 &&
                    (await new Promise((e) => setTimeout(e, this.fetchPause))));
              },
              async (e) => {
                console.warn(e);
                let t = 250 + 500 * Math.random();
                await new Promise((e) => setTimeout(e, t));
              },
            )
            .finally(() => {
              ((this.fetchers = this.fetchers.filter(
                ({ splats: e, chunk: t }) => r !== e || i !== t,
              )),
                this.processFetched());
            });
          (this.fetchers.push({ splats: r, chunk: i, promise: e }),
            e.then((e) => {
              this.autoDrive && this.driveFetchers();
            }));
        }
      }
      let r = performance.now();
      for (let e of t.reverse())
        ((e.lru = r), this.pageLru.delete(e), this.pageLru.add(e));
      let i = new Set(this.pageLru);
      for (let t of e.reverse())
        (i.delete(t), (t.lru = r), this.pageLru.delete(t), this.pageLru.add(t));
      this.freeablePages = Array.from(i).map(({ page: e }) => e);
    }
    allocateFreeable() {
      let e = this.freeablePages.shift();
      if (e === void 0) return;
      let t = this.pageToSplatsChunk[e];
      if (!t) throw Error(`splatsChunk not found for page: ${e}`);
      let { splats: n, chunk: r } = t;
      return (
        this.removeSplatsChunkPage(n, r, e),
        this.lodTreeUpdates.push({
          splats: n,
          page: e,
          chunk: r,
          numSplats: this.pageSplats,
        }),
        e
      );
    }
    processFetched() {
      let e = performance.now();
      for (;;) {
        let t = this.fetched.shift();
        if (!t) break;
        let { splats: n, chunk: r, data: i } = t,
          a = this.allocatePage();
        if (a === void 0 && ((a = this.allocateFreeable()), a === void 0))
          return;
        this.insertSplatsChunkPage(n, r, a, e);
        let { numSplats: o, extra: s } = i;
        if (
          (this.lodTreeUpdates.push({
            splats: n,
            page: a,
            chunk: r,
            numSplats: o,
            lodTree: s.lodTree,
          }),
          this.extSplats)
        ) {
          let e = i.extArrays,
            t = e[0],
            n = e[1];
          this.newUploads.push({
            page: a,
            numSplats: o,
            packedArray: t,
            extArray: n,
            extra: s,
          });
        } else {
          let e = i.packedArray;
          this.newUploads.push({
            page: a,
            numSplats: o,
            packedArray: e,
            extra: s,
          });
        }
      }
    }
    processUploads() {
      for (;;) {
        let e = this.readyUploads.shift();
        if (!e) break;
        let {
          page: t,
          numSplats: n,
          packedArray: r,
          extArray: i,
          extra: a,
        } = e;
        this.uploadPage(t, r, a, i);
      }
    }
    consumeLodTreeUpdates() {
      let e = this.lodTreeUpdates;
      return (
        (this.lodTreeUpdates = []),
        this.readyUploads.push(...this.newUploads),
        (this.newUploads = []),
        e
      );
    }
  };
