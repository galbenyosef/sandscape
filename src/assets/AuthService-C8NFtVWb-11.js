// AuthService-C8NFtVWb 11 — socket
// Lines 4176-4661 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var Nn = class e {
    get state() {
      return this.channelAdapter.state;
    }
    set state(e) {
      this.channelAdapter.state = e;
    }
    get joinedOnce() {
      return this.channelAdapter.joinedOnce;
    }
    get timeout() {
      return this.socket.timeout;
    }
    get joinPush() {
      return this.channelAdapter.joinPush;
    }
    get rejoinTimer() {
      return this.channelAdapter.rejoinTimer;
    }
    constructor(e, t = { config: {} }, n) {
      if (
        ((this.topic = e),
        (this.params = t),
        (this.socket = n),
        (this.bindings = {}),
        (this.subTopic = e.replace(/^realtime:/i, ``)),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: ``, enabled: !1 },
            private: !1,
          },
          t.config,
        )),
        (this.channelAdapter = new Sn(
          this.socket.socketAdapter,
          e,
          this.params,
        )),
        (this.presence = new bn(this)),
        this._onClose(() => {
          this.socket._remove(this);
        }),
        this._updateFilterTransform(),
        (this.broadcastEndpointURL = Jt(
          this.socket.socketAdapter.endPointURL(),
        )),
        (this.private = this.params.config.private || !1),
        !this.private && this.params.config?.broadcast?.replay)
      )
        throw Error(
          `tried to use replay on public channel '${this.topic}'. It must be a private channel.`,
        );
    }
    subscribe(e, t = this.timeout) {
      if (
        (this.socket.isConnected() || this.socket.connect(),
        this.channelAdapter.isClosed())
      ) {
        let {
            config: { broadcast: n, presence: r, private: i },
          } = this.params,
          a = this.bindings.postgres_changes?.map((e) => e.filter) ?? [],
          o =
            (!!this.bindings[Mn.PRESENCE] &&
              this.bindings[Mn.PRESENCE].length > 0) ||
            this.params.config.presence?.enabled === !0,
          s = {},
          c = {
            broadcast: n,
            presence: Object.assign(Object.assign({}, r), { enabled: o }),
            postgres_changes: a,
            private: i,
          };
        (this.socket.accessTokenValue &&
          (s.access_token = this.socket.accessTokenValue),
          this._onError((t) => {
            e?.(N.CHANNEL_ERROR, xn(t));
          }),
          this._onClose(() => e?.(N.CLOSED)),
          this.updateJoinPayload(Object.assign({ config: c }, s)),
          this._updateFilterMessage(),
          this.channelAdapter
            .subscribe(t)
            .receive(`ok`, async ({ postgres_changes: t }) => {
              if (
                (this.socket._isManualToken() || this.socket.setAuth(),
                t === void 0)
              ) {
                e?.(N.SUBSCRIBED);
                return;
              }
              this._updatePostgresBindings(t, e);
            })
            .receive(`error`, (t) => {
              this.state = D.errored;
              let n = Object.values(t).join(`, `) || `error`;
              e?.(N.CHANNEL_ERROR, Error(n, { cause: t }));
            })
            .receive(`timeout`, () => {
              e?.(N.TIMED_OUT);
            }));
      }
      return this;
    }
    _updatePostgresBindings(t, n) {
      let r = this.bindings.postgres_changes,
        i = r?.length ?? 0,
        a = [];
      for (let o = 0; o < i; o++) {
        let i = r[o],
          {
            filter: { event: s, schema: c, table: l, filter: u },
          } = i,
          d = t && t[o];
        if (
          d &&
          d.event === s &&
          e.isFilterValueEqual(d.schema, c) &&
          e.isFilterValueEqual(d.table, l) &&
          e.isFilterValueEqual(d.filter, u)
        )
          a.push(Object.assign(Object.assign({}, i), { id: d.id }));
        else {
          (this.unsubscribe(),
            (this.state = D.errored),
            n?.(
              N.CHANNEL_ERROR,
              Error(
                `mismatch between server and client bindings for postgres changes`,
              ),
            ));
          return;
        }
      }
      ((this.bindings.postgres_changes = a),
        this.state != D.errored && n && n(N.SUBSCRIBED));
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, t = {}) {
      return await this.send(
        { type: `presence`, event: `track`, payload: e },
        t.timeout || this.timeout,
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: `presence`, event: `untrack` }, e);
    }
    on(e, t, n) {
      let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
        i = e === Mn.PRESENCE || e === Mn.POSTGRES_CHANGES;
      if (r && i)
        throw (
          this.socket.log(
            `channel`,
            `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
          ),
          Error(
            `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
          )
        );
      return this._on(e, t, n);
    }
    async httpSend(e, t, n = {}) {
      if (t == null)
        return Promise.reject(Error(`Payload is required for httpSend()`));
      let r = t instanceof ArrayBuffer || ArrayBuffer.isView(t),
        i = {
          apikey: this.socket.apiKey ? this.socket.apiKey : ``,
          "Content-Type": r ? `application/octet-stream` : `application/json`,
        };
      this.socket.accessTokenValue &&
        (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      let a = new URL(this.broadcastEndpointURL);
      ((a.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`),
        this.private && a.searchParams.set(`private`, `true`));
      let o = { method: `POST`, headers: i, body: r ? t : JSON.stringify(t) },
        s = await this._fetchWithTimeout(
          a.toString(),
          o,
          n.timeout ?? this.timeout,
        );
      if (s.status === 202) return { success: !0 };
      if (s.status === 404)
        return Promise.reject(
          Error(
            `httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`,
          ),
        );
      let c = s.statusText;
      try {
        let e = await s.json();
        c = e.error || e.message || c;
      } catch {}
      return Promise.reject(Error(c));
    }
    async send(e, t = {}) {
      if (!this.channelAdapter.canPush() && e.type === `broadcast`) {
        console.warn(
          `Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`,
        );
        let { event: n, payload: r } = e,
          i = {
            apikey: this.socket.apiKey ? this.socket.apiKey : ``,
            "Content-Type": `application/json`,
          };
        this.socket.accessTokenValue &&
          (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        let a = {
          method: `POST`,
          headers: i,
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event: n,
                payload: r,
                private: this.private,
              },
            ],
          }),
        };
        try {
          let e = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            a,
            t.timeout ?? this.timeout,
          );
          return (await e.body?.cancel(), e.ok ? `ok` : `error`);
        } catch (e) {
          return e instanceof Error && e.name === `AbortError`
            ? `timed out`
            : `error`;
        }
      } else
        return new Promise((n) => {
          let r = this.channelAdapter.push(
            e.type,
            e,
            t.timeout || this.timeout,
          );
          (e.type === `broadcast` &&
            !this.params?.config?.broadcast?.ack &&
            n(`ok`),
            r.receive(`ok`, () => n(`ok`)),
            r.receive(`error`, () => n(`error`)),
            r.receive(`timeout`, () => n(`timed out`)));
        });
    }
    updateJoinPayload(e) {
      this.channelAdapter.updateJoinPayload(e);
    }
    async unsubscribe(e = this.timeout) {
      return new Promise((t) => {
        this.channelAdapter
          .unsubscribe(e)
          .receive(`ok`, () => t(`ok`))
          .receive(`timeout`, () => t(`timed out`))
          .receive(`error`, () => t(`error`));
      });
    }
    teardown() {
      this.channelAdapter.teardown();
    }
    async _fetchWithTimeout(e, t, n) {
      let r = new AbortController(),
        i = setTimeout(() => r.abort(), n),
        a = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, t), { signal: r.signal }),
        );
      return (clearTimeout(i), a);
    }
    _on(e, t, n) {
      let r = e.toLocaleLowerCase(),
        i = t?.filter;
      (i instanceof An ||
        (typeof i == `object` && i && typeof i.build == `function`)) &&
        (t = Object.assign(Object.assign({}, t), { filter: i.build() }));
      let a = this.channelAdapter.on(e, n),
        o = { type: r, filter: t, callback: n, ref: a };
      return (
        this.bindings[r] ? this.bindings[r].push(o) : (this.bindings[r] = [o]),
        this._updateFilterMessage(),
        this
      );
    }
    _onClose(e) {
      this.channelAdapter.onClose(e);
    }
    _onError(e) {
      this.channelAdapter.onError(e);
    }
    _updateFilterMessage() {
      this.channelAdapter.updateFilterBindings((e, t, n) => {
        let r = e.event.toLocaleLowerCase();
        if (this._notThisChannelEvent(r, n)) return !1;
        let i = this.bindings[r]?.find((t) => t.ref === e.ref);
        if (!i) return !0;
        if ([`broadcast`, `presence`, `postgres_changes`].includes(r))
          if (`id` in i) {
            let e = i.id,
              n = i.filter?.event;
            return (
              e &&
              t.ids?.includes(e) &&
              (n === `*` ||
                n?.toLocaleLowerCase() === t.data?.type.toLocaleLowerCase())
            );
          } else {
            let e = i?.filter?.event?.toLocaleLowerCase();
            return e === `*` || e === t?.event?.toLocaleLowerCase();
          }
        else return i.type.toLocaleLowerCase() === r;
      });
    }
    _notThisChannelEvent(e, t) {
      let { close: n, error: r, leave: i, join: a } = It;
      return t && [n, r, i, a].includes(e) && t !== this.joinPush.ref;
    }
    _updateFilterTransform() {
      this.channelAdapter.updatePayloadTransform((e, t, n) => {
        if (typeof t == `object` && `ids` in t) {
          let e = t.data,
            {
              schema: n,
              table: r,
              commit_timestamp: i,
              type: a,
              errors: o,
            } = e;
          return Object.assign(
            Object.assign(
              {},
              {
                schema: n,
                table: r,
                commit_timestamp: i,
                eventType: a,
                new: {},
                old: {},
                errors: o,
              },
            ),
            this._getPayloadRecords(e),
          );
        }
        return t;
      });
    }
    copyBindings(e) {
      if (this.joinedOnce)
        throw Error(`cannot copy bindings into joined channel`);
      for (let t in e.bindings)
        for (let n of e.bindings[t]) this._on(n.type, n.filter, n.callback);
    }
    static isFilterValueEqual(e, t) {
      return (e ?? void 0) === (t ?? void 0);
    }
    _getPayloadRecords(e) {
      let t = { new: {}, old: {} };
      return (
        (e.type === `INSERT` || e.type === `UPDATE`) &&
          (t.new = zt(e.columns, e.record)),
        (e.type === `UPDATE` || e.type === `DELETE`) &&
          (t.old = zt(e.columns, e.old_record)),
        t
      );
    }
  },
  Pn = class {
    constructor(e, t) {
      this.socket = new pn(e, t);
    }
    get timeout() {
      return this.socket.timeout;
    }
    get endPoint() {
      return this.socket.endPoint;
    }
    get transport() {
      return this.socket.transport;
    }
    get heartbeatIntervalMs() {
      return this.socket.heartbeatIntervalMs;
    }
    get heartbeatCallback() {
      return this.socket.heartbeatCallback;
    }
    set heartbeatCallback(e) {
      this.socket.heartbeatCallback = e;
    }
    get heartbeatTimer() {
      return this.socket.heartbeatTimer;
    }
    get pendingHeartbeatRef() {
      return this.socket.pendingHeartbeatRef;
    }
    get reconnectTimer() {
      return this.socket.reconnectTimer;
    }
    get vsn() {
      return this.socket.vsn;
    }
    get encode() {
      return this.socket.encode;
    }
    get decode() {
      return this.socket.decode;
    }
    get reconnectAfterMs() {
      return this.socket.reconnectAfterMs;
    }
    get sendBuffer() {
      return this.socket.sendBuffer;
    }
    get stateChangeCallbacks() {
      return this.socket.stateChangeCallbacks;
    }
    connect() {
      this.socket.connect();
    }
    disconnect(e, t, n, r = 1e4) {
      return new Promise((i) => {
        (setTimeout(() => i(`timeout`), r),
          this.socket.disconnect(
            () => {
              (e(), i(`ok`));
            },
            t,
            n,
          ));
      });
    }
    push(e) {
      this.socket.push(e);
    }
    log(e, t, n) {
      this.socket.log(e, t, n);
    }
    makeRef() {
      return this.socket.makeRef();
    }
    onOpen(e) {
      this.socket.onOpen(e);
    }
    onClose(e) {
      this.socket.onClose(e);
    }
    onError(e) {
      this.socket.onError(e);
    }
    onMessage(e) {
      this.socket.onMessage(e);
    }
    isConnected() {
      return this.socket.isConnected();
    }
    isConnecting() {
      return this.socket.connectionState() == Lt.connecting;
    }
    isDisconnecting() {
      return this.socket.connectionState() == Lt.closing;
    }
    connectionState() {
      return this.socket.connectionState();
    }
    endPointURL() {
      return this.socket.endPointURL();
    }
    sendHeartbeat() {
      this.socket.sendHeartbeat();
    }
    getSocket() {
      return this.socket;
    }
  },
  Fn = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  In = [1e3, 2e3, 5e3, 1e4],
  Ln = 1e4;
