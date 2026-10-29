// AuthService-C8NFtVWb 16 — headers
// Lines 5602-6597 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var { get: _r, post: F, put: vr, head: yr, remove: br } = gr(`storage`),
  I = gr(`vectors`),
  xr = class {
    constructor(e, t = {}, n, r = `storage`) {
      ((this.shouldThrowOnError = !1),
        (this.url = e),
        (this.headers = sr(t)),
        (this.fetch = cr(n)),
        (this.namespace = r));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return ((this.headers = or(this.headers, e, t)), this);
    }
    async handleOperation(e) {
      var t = this;
      try {
        return { data: await e(), error: null };
      } catch (e) {
        if (t.shouldThrowOnError) throw e;
        if (rr(e)) return { data: null, error: e };
        throw e;
      }
    }
  },
  Sr = Symbol.toStringTag,
  Cr = class {
    constructor(e, t) {
      ((this.downloadFn = e),
        (this.shouldThrowOnError = t),
        (this[Sr] = `StreamDownloadBuilder`),
        (this.promise = null));
    }
    then(e, t) {
      return this.getPromise().then(e, t);
    }
    catch(e) {
      return this.getPromise().catch(e);
    }
    finally(e) {
      return this.getPromise().finally(e);
    }
    getPromise() {
      return ((this.promise ||= this.execute()), this.promise);
    }
    async execute() {
      var e = this;
      try {
        return { data: (await e.downloadFn()).body, error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (rr(t)) return { data: null, error: t };
        throw t;
      }
    }
  },
  wr = Symbol.toStringTag,
  Tr = class {
    constructor(e, t) {
      ((this.downloadFn = e),
        (this.shouldThrowOnError = t),
        (this[wr] = `BlobDownloadBuilder`),
        (this.promise = null));
    }
    asStream() {
      return new Cr(this.downloadFn, this.shouldThrowOnError);
    }
    then(e, t) {
      return this.getPromise().then(e, t);
    }
    catch(e) {
      return this.getPromise().catch(e);
    }
    finally(e) {
      return this.getPromise().finally(e);
    }
    getPromise() {
      return ((this.promise ||= this.execute()), this.promise);
    }
    async execute() {
      var e = this;
      try {
        return { data: await (await e.downloadFn()).blob(), error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (rr(t)) return { data: null, error: t };
        throw t;
      }
    }
  },
  Er = { limit: 100, offset: 0, sortBy: { column: `name`, order: `asc` } },
  Dr = {
    cacheControl: `3600`,
    contentType: `text/plain;charset=UTF-8`,
    upsert: !1,
  },
  Or = class extends xr {
    constructor(e, t = {}, n, r) {
      (super(e, t, r, `storage`), (this.bucketId = n));
    }
    async uploadOrUpdate(e, t, n, r) {
      var i = this;
      return i.handleOperation(async () => {
        let a,
          o = P(P({}, Dr), r),
          s = P(
            P({}, i.headers),
            e === `POST` && { "x-upsert": String(o.upsert) },
          ),
          c = o.metadata;
        if (
          (typeof Blob < `u` && n instanceof Blob
            ? ((a = new FormData()),
              a.append(`cacheControl`, o.cacheControl),
              c && a.append(`metadata`, i.encodeMetadata(c)),
              a.append(``, n))
            : typeof FormData < `u` && n instanceof FormData
              ? ((a = n),
                a.has(`cacheControl`) ||
                  a.append(`cacheControl`, o.cacheControl),
                c &&
                  !a.has(`metadata`) &&
                  a.append(`metadata`, i.encodeMetadata(c)))
              : ((a = n),
                (s[`cache-control`] = `max-age=${o.cacheControl}`),
                (s[`content-type`] = o.contentType),
                c && (s[`x-metadata`] = i.toBase64(i.encodeMetadata(c))),
                ((typeof ReadableStream < `u` && a instanceof ReadableStream) ||
                  (a &&
                    typeof a == `object` &&
                    `pipe` in a &&
                    typeof a.pipe == `function`)) &&
                  !o.duplex &&
                  (o.duplex = `half`)),
          r?.headers)
        )
          for (let [e, t] of Object.entries(r.headers)) s = or(s, e, t);
        let l = i._removeEmptyFolders(t),
          u = i._getFinalPath(l),
          d = await (e == `PUT` ? vr : F)(
            i.fetch,
            `${i.url}/object/${u}`,
            a,
            P({ headers: s }, o?.duplex ? { duplex: o.duplex } : {}),
          );
        return { path: l, id: d.Id, fullPath: d.Key };
      });
    }
    async upload(e, t, n) {
      return this.uploadOrUpdate(`POST`, e, t, n);
    }
    async uploadToSignedUrl(e, t, n, r) {
      var i = this;
      let a = i._removeEmptyFolders(e),
        o = i._getFinalPath(a),
        s = new URL(i.url + `/object/upload/sign/${o}`);
      return (
        s.searchParams.set(`token`, t),
        i.handleOperation(async () => {
          let e,
            t = P(P({}, Dr), r),
            o = P(P({}, i.headers), { "x-upsert": String(t.upsert) }),
            c = t.metadata;
          if (
            (typeof Blob < `u` && n instanceof Blob
              ? ((e = new FormData()),
                e.append(`cacheControl`, t.cacheControl),
                c && e.append(`metadata`, i.encodeMetadata(c)),
                e.append(``, n))
              : typeof FormData < `u` && n instanceof FormData
                ? ((e = n),
                  e.has(`cacheControl`) ||
                    e.append(`cacheControl`, t.cacheControl),
                  c &&
                    !e.has(`metadata`) &&
                    e.append(`metadata`, i.encodeMetadata(c)))
                : ((e = n),
                  (o[`cache-control`] = `max-age=${t.cacheControl}`),
                  (o[`content-type`] = t.contentType),
                  c && (o[`x-metadata`] = i.toBase64(i.encodeMetadata(c))),
                  ((typeof ReadableStream < `u` &&
                    e instanceof ReadableStream) ||
                    (e &&
                      typeof e == `object` &&
                      `pipe` in e &&
                      typeof e.pipe == `function`)) &&
                    !t.duplex &&
                    (t.duplex = `half`)),
            r?.headers)
          )
            for (let [e, t] of Object.entries(r.headers)) o = or(o, e, t);
          return {
            path: a,
            fullPath: (
              await vr(
                i.fetch,
                s.toString(),
                e,
                P({ headers: o }, t?.duplex ? { duplex: t.duplex } : {}),
              )
            ).Key,
          };
        })
      );
    }
    async createSignedUploadUrl(e, t) {
      var n = this;
      return n.handleOperation(async () => {
        let r = n._getFinalPath(e),
          i = P({}, n.headers);
        t?.upsert && (i[`x-upsert`] = `true`);
        let a = await F(
            n.fetch,
            `${n.url}/object/upload/sign/${r}`,
            {},
            { headers: i },
          ),
          o = new URL(n.url + a.url),
          s = o.searchParams.get(`token`);
        if (!s) throw new nr(`No token returned by API`);
        return { signedUrl: o.toString(), path: e, token: s };
      });
    }
    async update(e, t, n) {
      return this.uploadOrUpdate(`PUT`, e, t, n);
    }
    async move(e, t, n) {
      var r = this;
      return r.handleOperation(
        async () =>
          await F(
            r.fetch,
            `${r.url}/object/move`,
            {
              bucketId: r.bucketId,
              sourceKey: e,
              destinationKey: t,
              destinationBucket: n?.destinationBucket,
            },
            { headers: r.headers },
          ),
      );
    }
    async copy(e, t, n) {
      var r = this;
      return r.handleOperation(async () => ({
        path: (
          await F(
            r.fetch,
            `${r.url}/object/copy`,
            {
              bucketId: r.bucketId,
              sourceKey: e,
              destinationKey: t,
              destinationBucket: n?.destinationBucket,
            },
            { headers: r.headers },
          )
        ).Key,
      }));
    }
    async createSignedUrl(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = r._getFinalPath(e),
          a =
            typeof n?.transform == `object` &&
            n.transform !== null &&
            Object.keys(n.transform).length > 0,
          o = await F(
            r.fetch,
            `${r.url}/object/sign/${i}`,
            P({ expiresIn: t }, a ? { transform: n.transform } : {}),
            { headers: r.headers },
          ),
          s = new URLSearchParams();
        (n?.download && s.set(`download`, n.download === !0 ? `` : n.download),
          n?.cacheNonce != null && s.set(`cacheNonce`, String(n.cacheNonce)));
        let c = s.toString();
        return {
          signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ``}`),
        };
      });
    }
    async createSignedUrls(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = await F(
            r.fetch,
            `${r.url}/object/sign/${r.bucketId}`,
            { expiresIn: t, paths: e },
            { headers: r.headers },
          ),
          a = new URLSearchParams();
        (n?.download && a.set(`download`, n.download === !0 ? `` : n.download),
          n?.cacheNonce != null && a.set(`cacheNonce`, String(n.cacheNonce)));
        let o = a.toString();
        return i.map((e) =>
          P(
            P({}, e),
            {},
            {
              signedUrl: e.signedURL
                ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ``}`)
                : null,
            },
          ),
        );
      });
    }
    download(e, t, n) {
      let r =
          typeof t?.transform == `object` &&
          t.transform !== null &&
          Object.keys(t.transform).length > 0
            ? `render/image/authenticated`
            : `object`,
        i = new URLSearchParams();
      (t?.transform && this.applyTransformOptsToQuery(i, t.transform),
        t?.cacheNonce != null && i.set(`cacheNonce`, String(t.cacheNonce)));
      let a = i.toString(),
        o = this._getFinalPath(e);
      return new Tr(
        () =>
          _r(
            this.fetch,
            `${this.url}/${r}/${o}${a ? `?${a}` : ``}`,
            { headers: this.headers, noResolveJson: !0 },
            n,
          ),
        this.shouldThrowOnError,
      );
    }
    async info(e) {
      var t = this;
      let n = t._getFinalPath(e);
      return t.handleOperation(async () =>
        ur(
          await _r(t.fetch, `${t.url}/object/info/${n}`, {
            headers: t.headers,
          }),
        ),
      );
    }
    async exists(e) {
      var t = this;
      let n = t._getFinalPath(e);
      try {
        return (
          await yr(t.fetch, `${t.url}/object/${n}`, { headers: t.headers }),
          { data: !0, error: null }
        );
      } catch (e) {
        if (t.shouldThrowOnError) throw e;
        if (rr(e)) {
          let t =
            e instanceof ir
              ? e.status
              : e instanceof ar
                ? e.originalError?.status
                : void 0;
          if (t !== void 0 && [400, 404].includes(t))
            return { data: !1, error: e };
        }
        throw e;
      }
    }
    getPublicUrl(e, t) {
      let n = this._getFinalPath(e),
        r = new URLSearchParams();
      (t?.download && r.set(`download`, t.download === !0 ? `` : t.download),
        t?.transform && this.applyTransformOptsToQuery(r, t.transform),
        t?.cacheNonce != null && r.set(`cacheNonce`, String(t.cacheNonce)));
      let i = r.toString(),
        a =
          typeof t?.transform == `object` &&
          t.transform !== null &&
          Object.keys(t.transform).length > 0
            ? `render/image`
            : `object`;
      return {
        data: {
          publicUrl:
            encodeURI(`${this.url}/${a}/public/${n}`) + (i ? `?${i}` : ``),
        },
      };
    }
    async remove(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await br(
            t.fetch,
            `${t.url}/object/${t.bucketId}`,
            { prefixes: e },
            { headers: t.headers },
          ),
      );
    }
    async purgeCache(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = r._getFinalPath(e),
          a = new URLSearchParams();
        t?.transformations && a.set(`transformations`, `true`);
        let o = a.toString();
        return await br(
          r.fetch,
          `${r.url}/cdn/${i}${o ? `?${o}` : ``}`,
          {},
          { headers: r.headers },
          n,
        );
      });
    }
    async list(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = t?.sortBy ? P(P({}, Er.sortBy), t.sortBy) : Er.sortBy,
          a = P(P(P({}, Er), t), {}, { sortBy: i, prefix: e || `` });
        return await F(
          r.fetch,
          `${r.url}/object/list/${r.bucketId}`,
          a,
          { headers: r.headers },
          n,
        );
      });
    }
    async listV2(e, t) {
      var n = this;
      return n.handleOperation(async () => {
        let r = P({}, e);
        return await F(
          n.fetch,
          `${n.url}/object/list-v2/${n.bucketId}`,
          r,
          { headers: n.headers },
          t,
        );
      });
    }
    encodeMetadata(e) {
      return JSON.stringify(e);
    }
    toBase64(e) {
      return typeof Buffer < `u` ? Buffer.from(e).toString(`base64`) : btoa(e);
    }
    _getFinalPath(e) {
      return `${this.bucketId}/${e.replace(/^\/+/, ``)}`;
    }
    _removeEmptyFolders(e) {
      return e.replace(/^\/|\/$/g, ``).replace(/\/+/g, `/`);
    }
    applyTransformOptsToQuery(e, t) {
      return (
        t.width && e.set(`width`, t.width.toString()),
        t.height && e.set(`height`, t.height.toString()),
        t.resize && e.set(`resize`, t.resize),
        t.format && e.set(`format`, t.format),
        t.quality && e.set(`quality`, t.quality.toString()),
        e
      );
    }
  },
  kr = { "X-Client-Info": `storage-js/2.109.0` },
  Ar = class extends xr {
    constructor(e, t = {}, n, r) {
      let i = new URL(e);
      r?.useNewHostname &&
        /supabase\.(co|in|red)$/.test(i.hostname) &&
        !i.hostname.includes(`storage.supabase.`) &&
        (i.hostname = i.hostname.replace(`supabase.`, `storage.supabase.`));
      let a = i.href.replace(/\/$/, ``),
        o = P(P({}, kr), t);
      super(a, o, n, `storage`);
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        let n = t.listBucketOptionsToQueryString(e);
        return await _r(t.fetch, `${t.url}/bucket${n}`, { headers: t.headers });
      });
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await _r(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }),
      );
    }
    async createBucket(e, t = { public: !1 }) {
      var n = this;
      return n.handleOperation(
        async () =>
          await F(
            n.fetch,
            `${n.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async updateBucket(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await vr(
            n.fetch,
            `${n.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: n.headers },
          ),
      );
    }
    async emptyBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await F(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers },
          ),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await br(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    async purgeBucketCache(e, t, n) {
      var r = this;
      return r.handleOperation(async () => {
        let i = new URLSearchParams();
        t?.transformations && i.set(`transformations`, `true`);
        let a = i.toString();
        return await br(
          r.fetch,
          `${r.url}/cdn/${e}${a ? `?${a}` : ``}`,
          {},
          { headers: r.headers },
          n,
        );
      });
    }
    listBucketOptionsToQueryString(e) {
      let t = {};
      return (
        e &&
          (`limit` in e && (t.limit = String(e.limit)),
          `offset` in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? `?` + new URLSearchParams(t).toString() : ``
      );
    }
  },
  jr = class extends xr {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = P(P({}, kr), t);
      super(r, i, n, `storage`);
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await F(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        let n = new URLSearchParams();
        (e?.limit !== void 0 && n.set(`limit`, e.limit.toString()),
          e?.offset !== void 0 && n.set(`offset`, e.offset.toString()),
          e?.sortColumn && n.set(`sortColumn`, e.sortColumn),
          e?.sortOrder && n.set(`sortOrder`, e.sortOrder),
          e?.search && n.set(`search`, e.search));
        let r = n.toString(),
          i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
        return await _r(t.fetch, i, { headers: t.headers });
      });
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await br(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    from(e) {
      var t = this;
      if (!dr(e))
        throw new nr(
          `Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`,
        );
      let n = new Xn({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: `custom`, getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(n, {
        get(e, t) {
          let n = e[t];
          return typeof n == `function`
            ? async (...t) => {
                try {
                  return { data: await n.apply(e, t), error: null };
                } catch (e) {
                  if (r) throw e;
                  return { data: null, error: e };
                }
              }
            : n;
        },
      });
    }
  },
  Mr = class extends xr {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = P(P({}, kr), {}, { "Content-Type": `application/json` }, t);
      super(r, i, n, `vectors`);
    }
    async createIndex(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await I.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          await I.post(
            n.fetch,
            `${n.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          ),
      );
    }
    async listIndexes(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await I.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteIndex(e, t) {
      var n = this;
      return n.handleOperation(
        async () =>
          (await I.post(
            n.fetch,
            `${n.url}/DeleteIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: n.headers },
          )) || {},
      );
    }
  },
  Nr = class extends xr {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = P(P({}, kr), {}, { "Content-Type": `application/json` }, t);
      super(r, i, n, `vectors`);
    }
    async putVectors(e) {
      var t = this;
      if (e.vectors.length < 1 || e.vectors.length > 500)
        throw Error(`Vector batch size must be between 1 and 500 items`);
      return t.handleOperation(
        async () =>
          (await I.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await I.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async listVectors(e) {
      var t = this;
      if (e.segmentCount !== void 0) {
        if (e.segmentCount < 1 || e.segmentCount > 16)
          throw Error(`segmentCount must be between 1 and 16`);
        if (
          e.segmentIndex !== void 0 &&
          (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
        )
          throw Error(
            `segmentIndex must be between 0 and ${e.segmentCount - 1}`,
          );
      }
      return t.handleOperation(
        async () =>
          await I.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async queryVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await I.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteVectors(e) {
      var t = this;
      if (e.keys.length < 1 || e.keys.length > 500)
        throw Error(`Keys batch size must be between 1 and 500 items`);
      return t.handleOperation(
        async () =>
          (await I.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
  },
  Pr = class extends xr {
    constructor(e, t = {}, n) {
      let r = e.replace(/\/$/, ``),
        i = P(P({}, kr), {}, { "Content-Type": `application/json` }, t);
      super(r, i, n, `vectors`);
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await I.post(
            t.fetch,
            `${t.url}/CreateVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await I.post(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e = {}) {
      var t = this;
      return t.handleOperation(
        async () =>
          await I.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await I.post(
            t.fetch,
            `${t.url}/DeleteVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  Fr = class extends Pr {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new Ir(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        n = this;
      return t().call(n, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        n = this;
      return t().call(n, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        n = this;
      return t().call(n, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        n = this;
      return t().call(n, e);
    }
  },
  Ir = class extends Mr {
    constructor(e, t, n, r) {
      (super(e, t, r), (this.vectorBucketName = n));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        n = this;
      return t().call(
        n,
        P(P({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        n = this;
      return t().call(
        n,
        P(P({}, e), {}, { vectorBucketName: n.vectorBucketName }),
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        n = this;
      return t().call(n, n.vectorBucketName, e);
    }
    index(e) {
      return new Lr(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch,
      );
    }
  },
  Lr = class extends Nr {
    constructor(e, t, n, r, i) {
      (super(e, t, i), (this.vectorBucketName = n), (this.indexName = r));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        n = this;
      return t().call(
        n,
        P(
          P({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        n = this;
      return t().call(
        n,
        P(
          P({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        n = this;
      return t().call(
        n,
        P(
          P({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        n = this;
      return t().call(
        n,
        P(
          P({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        n = this;
      return t().call(
        n,
        P(
          P({}, e),
          {},
          { vectorBucketName: n.vectorBucketName, indexName: n.indexName },
        ),
      );
    }
  },
  Rr = class extends Ar {
    constructor(e, t = {}, n, r) {
      super(e, t, n, r);
    }
    from(e) {
      return new Or(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new Fr(this.url + `/vector`, {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new jr(this.url + `/iceberg`, this.headers, this.fetch);
    }
  },
  zr = `2.109.0`,
  Br = 30 * 1e3,
  Vr = 3 * Br,
  Hr = 2 * Br,
  Ur = `http://localhost:9999`,
  Wr = `supabase.auth.token`,
  Gr = { "X-Client-Info": `gotrue-js/${zr}` },
  Kr = `X-Supabase-Api-Version`,
  qr = {
    "2024-01-01": {
      timestamp: Date.parse(`2024-01-01T00:00:00.0Z`),
      name: `2024-01-01`,
    },
  },
  Jr = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Yr = class extends Error {
    constructor(e, t, n) {
      (super(e),
        (this.__isAuthError = !0),
        (this.name = `AuthError`),
        (this.status = t),
        (this.code = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        code: this.code,
      };
    }
  };
