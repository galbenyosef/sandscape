// AuthService-C8NFtVWb 05 — url
// Lines 1458-2075 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var vt = class {
    constructor(e) {
      ((this.shouldThrowOnError = !1),
        (this.retryEnabled = !0),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError = e.shouldThrowOnError ?? !1),
        (this.signal = e.signal),
        (this.isMaybeSingle = e.isMaybeSingle ?? !1),
        (this.shouldStripNulls = e.shouldStripNulls ?? !1),
        (this.urlLengthLimit = e.urlLengthLimit ?? 8e3),
        (this.retryEnabled = e.retry ?? !0),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    stripNulls() {
      if (this.headers.get(`Accept`) === `text/csv`)
        throw Error(`stripNulls() cannot be used with csv()`);
      return ((this.shouldStripNulls = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(e, t),
        this
      );
    }
    retry(e) {
      return ((this.retryEnabled = e), this);
    }
    then(e, t) {
      var n = this;
      if (
        (this.schema === void 0 ||
          ([`GET`, `HEAD`].includes(this.method)
            ? this.headers.set(`Accept-Profile`, this.schema)
            : this.headers.set(`Content-Profile`, this.schema)),
        this.method !== `GET` &&
          this.method !== `HEAD` &&
          this.headers.set(`Content-Type`, `application/json`),
        this.shouldStripNulls)
      ) {
        let e = this.headers.get(`Accept`);
        e === `application/vnd.pgrst.object+json`
          ? this.headers.set(
              `Accept`,
              `application/vnd.pgrst.object+json;nulls=stripped`,
            )
          : (!e || e === `application/json`) &&
            this.headers.set(
              `Accept`,
              `application/vnd.pgrst.array+json;nulls=stripped`,
            );
      }
      let r = this.fetch,
        i = (async () => {
          let e = 0;
          for (;;) {
            let t = {};
            (n.headers.forEach((e, n) => {
              t[n] = e;
            }),
              e > 0 && (t[`X-Retry-Count`] = String(e)));
            let i;
            try {
              i = await r(n.url.toString(), {
                method: n.method,
                headers: t,
                body: JSON.stringify(n.body, (e, t) =>
                  typeof t == `bigint` ? t.toString() : t,
                ),
                signal: n.signal,
              });
            } catch (t) {
              if (
                t?.name === `AbortError` ||
                t?.code === `ABORT_ERR` ||
                !mt.includes(n.method)
              )
                throw t;
              if (n.retryEnabled && e < dt) {
                let t = ft(e);
                (e++, await gt(t, n.signal));
                continue;
              }
              throw t;
            }
            if (_t(n.method, i.status, e, n.retryEnabled)) {
              let t = i.headers?.get(`Retry-After`) ?? null,
                r =
                  t === null ? ft(e) : Math.max(0, parseInt(t, 10) || 0) * 1e3;
              (await i.text(), e++, await gt(r, n.signal));
              continue;
            }
            return await n.processResponse(i);
          }
        })();
      return (
        this.shouldThrowOnError ||
          (i = i.catch((e) => {
            let t = ``,
              n = ``,
              r = ``,
              i = e?.cause;
            if (i) {
              let n = i?.message ?? ``,
                r = i?.code ?? ``;
              ((t = `${e?.name ?? `FetchError`}: ${e?.message}`),
                (t += `\n\nCaused by: ${i?.name ?? `Error`}: ${n}`),
                r && (t += ` (${r})`),
                i?.stack && (t += `\n${i.stack}`));
            } else t = e?.stack ?? ``;
            let a = this.url.toString().length;
            return (
              e?.name === `AbortError` || e?.code === `ABORT_ERR`
                ? ((r = ``),
                  (n = `Request was aborted (timeout or manual cancellation)`),
                  a > this.urlLengthLimit &&
                    (n += `. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : (i?.name === `HeadersOverflowError` ||
                    i?.code === `UND_ERR_HEADERS_OVERFLOW`) &&
                  ((r = ``),
                  (n = `HTTP headers exceeded server limits (typically 16KB)`),
                  a > this.urlLengthLimit &&
                    (n += `. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                success: !1,
                error: {
                  message: `${e?.name ?? `FetchError`}: ${e?.message}`,
                  details: t,
                  hint: n,
                  code: r,
                },
                data: null,
                count: null,
                status: 0,
                statusText: ``,
              }
            );
          })),
        i.then(e, t)
      );
    }
    async processResponse(e) {
      var t = this;
      let n = null,
        r = null,
        i = null,
        a = e.status,
        o = e.statusText;
      if (e.ok) {
        if (t.method !== `HEAD`) {
          let i = await e.text();
          if (i !== ``)
            if (t.headers.get(`Accept`) === `text/csv`) r = i;
            else if (
              t.headers.get(`Accept`) &&
              t.headers
                .get(`Accept`)
                ?.includes(`application/vnd.pgrst.plan+text`)
            )
              r = i;
            else
              try {
                r = JSON.parse(i);
              } catch {
                if (((n = { message: i }), (r = null), t.shouldThrowOnError))
                  throw new ht({ message: i, details: ``, hint: ``, code: `` });
              }
        }
        let s = t.headers
            .get(`Prefer`)
            ?.match(/count=(exact|planned|estimated)/),
          c = e.headers.get(`content-range`)?.split(`/`);
        (s && c && c.length > 1 && (i = parseInt(c[1])),
          t.isMaybeSingle &&
            Array.isArray(r) &&
            (r.length > 1
              ? ((n = {
                  code: `PGRST116`,
                  details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message: `JSON object requested, multiple (or no) rows returned`,
                }),
                (r = null),
                (i = null),
                (a = 406),
                (o = `Not Acceptable`))
              : (r = r.length === 1 ? r[0] : null)));
      } else {
        let i = await e.text();
        try {
          ((n = JSON.parse(i)),
            Array.isArray(n) &&
              e.status === 404 &&
              ((r = []), (n = null), (a = 200), (o = `OK`)));
        } catch {
          e.status === 404 && i === ``
            ? ((a = 204), (o = `No Content`))
            : (n = { message: i });
        }
        if (n && t.shouldThrowOnError) throw new ht(n);
      }
      return {
        success: n === null,
        error: n,
        data: r,
        count: i,
        status: a,
        statusText: o,
      };
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  yt = class extends vt {
    throwOnError() {
      return super.throwOnError();
    }
    select(e) {
      let t = !1,
        n = (e ?? `*`)
          .split(``)
          .map((e) => (/\s/.test(e) && !t ? `` : (e === `"` && (t = !t), e)))
          .join(``);
      return (
        this.url.searchParams.set(`select`, n),
        this.headers.append(`Prefer`, `return=representation`),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: n,
        foreignTable: r,
        referencedTable: i = r,
      } = {},
    ) {
      let a = i ? `${i}.order` : `order`,
        o = this.url.searchParams.get(a);
      return (
        this.url.searchParams.set(
          a,
          `${o ? `${o},` : ``}${e}.${t ? `asc` : `desc`}${n === void 0 ? `` : n ? `.nullsfirst` : `.nullslast`}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: n = t } = {}) {
      let r = n === void 0 ? `limit` : `${n}.limit`;
      return (this.url.searchParams.set(r, `${e}`), this);
    }
    range(e, t, { foreignTable: n, referencedTable: r = n } = {}) {
      let i = r === void 0 ? `offset` : `${r}.offset`,
        a = r === void 0 ? `limit` : `${r}.limit`;
      return (
        this.url.searchParams.set(i, `${e}`),
        this.url.searchParams.set(a, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (
        this.headers.set(`Accept`, `application/vnd.pgrst.object+json`),
        this
      );
    }
    maybeSingle() {
      return ((this.isMaybeSingle = !0), this);
    }
    csv() {
      return (this.headers.set(`Accept`, `text/csv`), this);
    }
    geojson() {
      return (this.headers.set(`Accept`, `application/geo+json`), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: n = !1,
      buffers: r = !1,
      wal: i = !1,
      format: a = `text`,
    } = {}) {
      let o = [
          e ? `analyze` : null,
          t ? `verbose` : null,
          n ? `settings` : null,
          r ? `buffers` : null,
          i ? `wal` : null,
        ]
          .filter(Boolean)
          .join(`|`),
        s = this.headers.get(`Accept`) ?? `application/json`;
      return (
        this.headers.set(
          `Accept`,
          `application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`,
        ),
        this
      );
    }
    rollback() {
      return (this.headers.append(`Prefer`, `tx=rollback`), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append(`Prefer`, `handling=strict`),
        this.headers.append(`Prefer`, `max-affected=${e}`),
        this
      );
    }
  },
  bt = RegExp(`[,()]`),
  xt = class extends yt {
    throwOnError() {
      return super.throwOnError();
    }
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(`,`)}}`),
        this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(`,`)}}`),
        this
      );
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(`,`)}}`),
        this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(`,`)}}`),
        this
      );
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      let n = Array.from(new Set(t))
        .map((e) => (typeof e == `string` && bt.test(e) ? `"${e}"` : `${e}`))
        .join(`,`);
      return (this.url.searchParams.append(e, `in.(${n})`), this);
    }
    notIn(e, t) {
      let n = Array.from(new Set(t))
        .map((e) => (typeof e == `string` && bt.test(e) ? `"${e}"` : `${e}`))
        .join(`,`);
      return (this.url.searchParams.append(e, `not.in.(${n})`), this);
    }
    contains(e, t) {
      return (
        typeof t == `string`
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(`,`)}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == `string`
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(`,`)}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == `string`
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(`,`)}}`),
        this
      );
    }
    textSearch(e, t, { config: n, type: r } = {}) {
      let i = ``;
      r === `plain`
        ? (i = `pl`)
        : r === `phrase`
          ? (i = `ph`)
          : r === `websearch` && (i = `w`);
      let a = n === void 0 ? `` : `(${n})`;
      return (this.url.searchParams.append(e, `${i}fts${a}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e)
          .filter(([e, t]) => t !== void 0)
          .forEach(([e, t]) => {
            this.url.searchParams.append(e, `eq.${t}`);
          }),
        this
      );
    }
    not(e, t, n) {
      return (this.url.searchParams.append(e, `not.${t}.${n}`), this);
    }
    or(e, { foreignTable: t, referencedTable: n = t } = {}) {
      let r = n ? `${n}.or` : `or`;
      return (this.url.searchParams.append(r, `(${e})`), this);
    }
    filter(e, t, n) {
      return (this.url.searchParams.append(e, `${t}.${n}`), this);
    }
  },
  St = class {
    constructor(
      e,
      {
        headers: t = {},
        schema: n,
        fetch: r,
        urlLengthLimit: i = 8e3,
        retry: a,
      },
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = n),
        (this.fetch = r),
        (this.urlLengthLimit = i),
        (this.retry = a));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      let { head: n = !1, count: r } = t ?? {},
        i = n ? `HEAD` : `GET`,
        a = !1,
        o = (e ?? `*`)
          .split(``)
          .map((e) => (/\s/.test(e) && !a ? `` : (e === `"` && (a = !a), e)))
          .join(``),
        { url: s, headers: c } = this.cloneRequestState();
      return (
        s.searchParams.set(`select`, o),
        r && c.append(`Prefer`, `count=${r}`),
        new xt({
          method: i,
          url: s,
          headers: c,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    insert(e, { count: t, defaultToNull: n = !0 } = {}) {
      let { url: r, headers: i } = this.cloneRequestState();
      if (
        (t && i.append(`Prefer`, `count=${t}`),
        n || i.append(`Prefer`, `missing=default`),
        Array.isArray(e))
      ) {
        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
        if (t.length > 0) {
          let e = [...new Set(t)].map((e) => `"${e}"`);
          r.searchParams.set(`columns`, e.join(`,`));
        }
      }
      return new xt({
        method: `POST`,
        url: r,
        headers: i,
        schema: this.schema,
        body: e,
        fetch: this.fetch ?? fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: n = !1,
        count: r,
        defaultToNull: i = !0,
      } = {},
    ) {
      let { url: a, headers: o } = this.cloneRequestState();
      if (
        (o.append(`Prefer`, `resolution=${n ? `ignore` : `merge`}-duplicates`),
        t !== void 0 && a.searchParams.set(`on_conflict`, t),
        r && o.append(`Prefer`, `count=${r}`),
        i || o.append(`Prefer`, `missing=default`),
        Array.isArray(e))
      ) {
        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
        if (t.length > 0) {
          let e = [...new Set(t)].map((e) => `"${e}"`);
          a.searchParams.set(`columns`, e.join(`,`));
        }
      }
      return new xt({
        method: `POST`,
        url: a,
        headers: o,
        schema: this.schema,
        body: e,
        fetch: this.fetch ?? fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    update(e, { count: t } = {}) {
      let { url: n, headers: r } = this.cloneRequestState();
      return (
        t && r.append(`Prefer`, `count=${t}`),
        new xt({
          method: `PATCH`,
          url: n,
          headers: r,
          schema: this.schema,
          body: e,
          fetch: this.fetch ?? fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    delete({ count: e } = {}) {
      let { url: t, headers: n } = this.cloneRequestState();
      return (
        e && n.append(`Prefer`, `count=${e}`),
        new xt({
          method: `DELETE`,
          url: t,
          headers: n,
          schema: this.schema,
          fetch: this.fetch ?? fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  };
