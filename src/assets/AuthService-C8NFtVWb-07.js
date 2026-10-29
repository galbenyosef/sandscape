// AuthService-C8NFtVWb 07 — error
// Lines 2149-2489 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var kt = class e {
    constructor(
      e,
      {
        headers: t = {},
        schema: n,
        fetch: r,
        timeout: i,
        urlLengthLimit: a = 8e3,
        retry: o,
      } = {},
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schemaName = n),
        (this.urlLengthLimit = a));
      let s = r ?? globalThis.fetch;
      (i !== void 0 && i > 0
        ? (this.fetch = (e, t) => {
            let n = new AbortController(),
              r = setTimeout(() => n.abort(), i),
              a = t?.signal;
            if (a) {
              if (a.aborted) return (clearTimeout(r), s(e, t));
              let i = () => {
                (clearTimeout(r), n.abort());
              };
              return (
                a.addEventListener(`abort`, i, { once: !0 }),
                s(e, Ot(Ot({}, t), {}, { signal: n.signal })).finally(() => {
                  (clearTimeout(r), a.removeEventListener(`abort`, i));
                })
              );
            }
            return s(e, Ot(Ot({}, t), {}, { signal: n.signal })).finally(() =>
              clearTimeout(r),
            );
          })
        : (this.fetch = s),
        (this.retry = o));
    }
    from(e) {
      if (!e || typeof e != `string` || e.trim() === ``)
        throw Error(
          `Invalid relation name: relation must be a non-empty string.`,
        );
      return new St(new URL(`${this.url}/${e}`), {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    schema(t) {
      return new e(this.url, {
        headers: this.headers,
        schema: t,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    rpc(e, t = {}, { head: n = !1, get: r = !1, count: i } = {}) {
      let a,
        o = new URL(`${this.url}/rpc/${e}`),
        s,
        c = (e) =>
          typeof e == `object` && !!e && (!Array.isArray(e) || e.some(c)),
        l = n && Object.values(t).some(c);
      l
        ? ((a = `POST`), (s = t))
        : n || r
          ? ((a = n ? `HEAD` : `GET`),
            Object.entries(t)
              .filter(([e, t]) => t !== void 0)
              .map(([e, t]) => [
                e,
                Array.isArray(t) ? `{${t.join(`,`)}}` : `${t}`,
              ])
              .forEach(([e, t]) => {
                o.searchParams.append(e, t);
              }))
          : ((a = `POST`), (s = t));
      let u = new Headers(this.headers);
      return (
        l
          ? u.set(`Prefer`, i ? `count=${i},return=minimal` : `return=minimal`)
          : i && u.set(`Prefer`, `count=${i}`),
        new xt({
          method: a,
          url: o,
          headers: u,
          schema: this.schemaName,
          body: s,
          fetch: this.fetch ?? fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  },
  At = class {
    constructor() {}
    static detectEnvironment() {
      if (typeof WebSocket < `u`)
        return { type: `native`, wsConstructor: WebSocket };
      let e = globalThis;
      if (typeof globalThis < `u` && e.WebSocket !== void 0)
        return { type: `native`, wsConstructor: e.WebSocket };
      let t = typeof global < `u` ? global : void 0;
      if (t && t.WebSocket !== void 0)
        return { type: `native`, wsConstructor: t.WebSocket };
      if (
        typeof globalThis < `u` &&
        e.WebSocketPair !== void 0 &&
        globalThis.WebSocket === void 0
      )
        return {
          type: `cloudflare`,
          error: `Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,
          workaround: `Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`,
        };
      if (
        (typeof globalThis < `u` && e.EdgeRuntime) ||
        (typeof navigator < `u` && navigator.userAgent?.includes(`Vercel-Edge`))
      )
        return {
          type: `unsupported`,
          error: `Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,
          workaround: `Use serverless functions or a different deployment target for WebSocket functionality.`,
        };
      let n = globalThis.process;
      if (n) {
        let e = n.versions;
        if (e && e.node) {
          let t = e.node,
            n = parseInt(t.replace(/^v/, ``).split(`.`)[0]);
          return n >= 22
            ? globalThis.WebSocket === void 0
              ? {
                  type: `unsupported`,
                  error: `Node.js ${n} detected but native WebSocket not found.`,
                  workaround: `Provide a WebSocket implementation via the transport option.`,
                }
              : { type: `native`, wsConstructor: globalThis.WebSocket }
            : {
                type: `unsupported`,
                error: `Node.js ${n} detected without native WebSocket support.`,
                workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
              };
        }
      }
      return {
        type: `unsupported`,
        error: `Unknown JavaScript runtime without WebSocket support.`,
        workaround: `Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`,
      };
    }
    static getWebSocketConstructor() {
      let e = this.detectEnvironment();
      if (e.wsConstructor) return e.wsConstructor;
      let t = e.error || `WebSocket not supported in this environment.`;
      throw (
        e.workaround && (t += `\n\nSuggested solution: ${e.workaround}`),
        Error(t)
      );
    }
    static isWebSocketSupported() {
      try {
        let e = this.detectEnvironment();
        return e.type === `native` || e.type === `ws`;
      } catch {
        return !1;
      }
    }
  },
  jt = `realtime-js/2.109.0`,
  Mt = `1.0.0`,
  Nt = `2.0.0`,
  Pt = Nt,
  Ft = 1e4,
  D = {
    closed: `closed`,
    errored: `errored`,
    joined: `joined`,
    joining: `joining`,
    leaving: `leaving`,
  },
  It = {
    close: `phx_close`,
    error: `phx_error`,
    join: `phx_join`,
    reply: `phx_reply`,
    leave: `phx_leave`,
    access_token: `access_token`,
  },
  Lt = {
    connecting: `connecting`,
    open: `open`,
    closing: `closing`,
    closed: `closed`,
  },
  Rt = class {
    constructor(e) {
      ((this.HEADER_LENGTH = 1),
        (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
        (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
        (this.BINARY_ENCODING = 0),
        (this.JSON_ENCODING = 1),
        (this.BROADCAST_EVENT = `broadcast`),
        (this.allowedMetadataKeys = []),
        (this.allowedMetadataKeys = e ?? []));
    }
    encode(e, t) {
      if (
        e.event === this.BROADCAST_EVENT &&
        !(e.payload instanceof ArrayBuffer) &&
        typeof e.payload.event == `string`
      )
        return t(this._binaryEncodeUserBroadcastPush(e));
      let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
      return t(JSON.stringify(n));
    }
    _binaryEncodeUserBroadcastPush(e) {
      return this._isArrayBuffer(e.payload?.payload)
        ? this._encodeBinaryUserBroadcastPush(e)
        : this._encodeJsonUserBroadcastPush(e);
    }
    _encodeBinaryUserBroadcastPush(e) {
      let t = e.payload?.payload ?? new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, t);
    }
    _encodeJsonUserBroadcastPush(e) {
      let t = e.payload?.payload ?? {},
        n = new TextEncoder().encode(JSON.stringify(t)).buffer;
      return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, n);
    }
    _encodeUserBroadcastPush(e, t, n) {
      let r = e.topic,
        i = e.ref ?? ``,
        a = e.join_ref ?? ``,
        o = e.payload.event,
        s = this.allowedMetadataKeys
          ? this._pick(e.payload, this.allowedMetadataKeys)
          : {},
        c = Object.keys(s).length === 0 ? `` : JSON.stringify(s);
      if (a.length > 255)
        throw Error(`joinRef length ${a.length} exceeds maximum of 255`);
      if (i.length > 255)
        throw Error(`ref length ${i.length} exceeds maximum of 255`);
      if (r.length > 255)
        throw Error(`topic length ${r.length} exceeds maximum of 255`);
      if (o.length > 255)
        throw Error(`userEvent length ${o.length} exceeds maximum of 255`);
      if (c.length > 255)
        throw Error(`metadata length ${c.length} exceeds maximum of 255`);
      let l =
          this.USER_BROADCAST_PUSH_META_LENGTH +
          a.length +
          i.length +
          r.length +
          o.length +
          c.length,
        u = new ArrayBuffer(this.HEADER_LENGTH + l),
        d = new DataView(u),
        f = 0;
      (d.setUint8(f++, this.KINDS.userBroadcastPush),
        d.setUint8(f++, a.length),
        d.setUint8(f++, i.length),
        d.setUint8(f++, r.length),
        d.setUint8(f++, o.length),
        d.setUint8(f++, c.length),
        d.setUint8(f++, t),
        Array.from(a, (e) => d.setUint8(f++, e.charCodeAt(0))),
        Array.from(i, (e) => d.setUint8(f++, e.charCodeAt(0))),
        Array.from(r, (e) => d.setUint8(f++, e.charCodeAt(0))),
        Array.from(o, (e) => d.setUint8(f++, e.charCodeAt(0))),
        Array.from(c, (e) => d.setUint8(f++, e.charCodeAt(0))));
      var p = new Uint8Array(u.byteLength + n.byteLength);
      return (
        p.set(new Uint8Array(u), 0),
        p.set(new Uint8Array(n), u.byteLength),
        p.buffer
      );
    }
    decode(e, t) {
      if (this._isArrayBuffer(e)) return t(this._binaryDecode(e));
      if (typeof e == `string`) {
        let [n, r, i, a, o] = JSON.parse(e);
        return t({ join_ref: n, ref: r, topic: i, event: a, payload: o });
      }
      return t({});
    }
    _binaryDecode(e) {
      let t = new DataView(e),
        n = t.getUint8(0),
        r = new TextDecoder();
      switch (n) {
        case this.KINDS.userBroadcast:
          return this._decodeUserBroadcast(e, t, r);
      }
    }
    _decodeUserBroadcast(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = t.getUint8(3),
        o = t.getUint8(4),
        s = this.HEADER_LENGTH + 4,
        c = n.decode(e.slice(s, s + r));
      s += r;
      let l = n.decode(e.slice(s, s + i));
      s += i;
      let u = n.decode(e.slice(s, s + a));
      s += a;
      let d = e.slice(s, e.byteLength),
        f = o === this.JSON_ENCODING ? JSON.parse(n.decode(d)) : d,
        p = { type: this.BROADCAST_EVENT, event: l, payload: f };
      return (
        a > 0 && (p.meta = JSON.parse(u)),
        {
          join_ref: null,
          ref: null,
          topic: c,
          event: this.BROADCAST_EVENT,
          payload: p,
        }
      );
    }
    _isArrayBuffer(e) {
      return e instanceof ArrayBuffer || e?.constructor?.name === `ArrayBuffer`;
    }
    _pick(e, t) {
      return !e || typeof e != `object`
        ? {}
        : Object.fromEntries(Object.entries(e).filter(([e]) => t.includes(e)));
    }
  },
  O;
