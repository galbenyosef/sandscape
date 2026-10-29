// AuthService-C8NFtVWb 13 — socketadapter
// Lines 4692-5101 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var Bn = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,
  Vn = class {
    get endPoint() {
      return this.socketAdapter.endPoint;
    }
    get timeout() {
      return this.socketAdapter.timeout;
    }
    get transport() {
      return this.socketAdapter.transport;
    }
    get heartbeatCallback() {
      return this.socketAdapter.heartbeatCallback;
    }
    get heartbeatIntervalMs() {
      return this.socketAdapter.heartbeatIntervalMs;
    }
    get heartbeatTimer() {
      return this.worker
        ? this._workerHeartbeatTimer
        : this.socketAdapter.heartbeatTimer;
    }
    get pendingHeartbeatRef() {
      return this.worker
        ? this._pendingWorkerHeartbeatRef
        : this.socketAdapter.pendingHeartbeatRef;
    }
    get reconnectTimer() {
      return this.socketAdapter.reconnectTimer;
    }
    get vsn() {
      return this.socketAdapter.vsn;
    }
    get encode() {
      return this.socketAdapter.encode;
    }
    get decode() {
      return this.socketAdapter.decode;
    }
    get reconnectAfterMs() {
      return this.socketAdapter.reconnectAfterMs;
    }
    get sendBuffer() {
      return this.socketAdapter.sendBuffer;
    }
    get stateChangeCallbacks() {
      return this.socketAdapter.stateChangeCallbacks;
    }
    constructor(e, t) {
      if (
        ((this.channels = []),
        (this.accessTokenValue = null),
        (this.accessToken = null),
        (this.apiKey = null),
        (this.httpEndpoint = ``),
        (this.headers = {}),
        (this.params = {}),
        (this.ref = 0),
        (this.serializer = new Rt()),
        (this._manuallySetToken = !1),
        (this._authPromise = null),
        (this._workerHeartbeatTimer = void 0),
        (this._pendingWorkerHeartbeatRef = null),
        (this._pendingDisconnectTimer = null),
        (this._disconnectOnEmptyChannelsAfterMs = 0),
        (this._resolveFetch = (e) =>
          e ? (...t) => e(...t) : (...e) => fetch(...e)),
        !t?.params?.apikey)
      )
        throw Error(`API key is required to connect to Realtime`);
      this.apiKey = t.params.apikey;
      let n = this._initializeOptions(t);
      ((this.socketAdapter = new Pn(e, n)),
        (this.httpEndpoint = Jt(e)),
        (this.fetch = this._resolveFetch(t?.fetch)));
    }
    connect() {
      if (!(
        this.isConnecting() ||
        this.isDisconnecting() ||
        this.isConnected()
      )) {
        (this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely(`connect`),
          this._setupConnectionHandlers());
        try {
          this.socketAdapter.connect();
        } catch (e) {
          let t = e.message;
          throw t.includes(`Node.js`)
            ? Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : Error(`WebSocket not available: ${t}`);
        }
        this._handleNodeJsRaceCondition();
      }
    }
    endpointURL() {
      return this.socketAdapter.endPointURL();
    }
    async disconnect(e, t) {
      return (
        this._cancelPendingDisconnect(),
        this.isDisconnecting()
          ? `ok`
          : await this.socketAdapter.disconnect(
              () => {
                (clearInterval(this._workerHeartbeatTimer),
                  this._terminateWorker());
              },
              e,
              t,
            )
      );
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e) {
      let t = await e.unsubscribe();
      return (t === `ok` && e.teardown(), t);
    }
    async removeAllChannels() {
      let e = this.channels.map(async (e) => {
          let t = await e.unsubscribe();
          return (e.teardown(), t);
        }),
        t = await Promise.all(e);
      return (await this.disconnect(), t);
    }
    log(e, t, n) {
      this.socketAdapter.log(e, t, n);
    }
    connectionState() {
      return this.socketAdapter.connectionState() || Lt.closed;
    }
    isConnected() {
      return this.socketAdapter.isConnected();
    }
    isConnecting() {
      return this.socketAdapter.isConnecting();
    }
    isDisconnecting() {
      return this.socketAdapter.isDisconnecting();
    }
    channel(e, t = { config: {} }) {
      let n = `realtime:${e}`,
        r = this.getChannels().find((e) => e.topic === n);
      if (r) return r;
      {
        let n = new Nn(`realtime:${e}`, t, this);
        return (this._cancelPendingDisconnect(), this.channels.push(n), n);
      }
    }
    push(e) {
      this.socketAdapter.push(e);
    }
    async setAuth(e = null) {
      this._authPromise = this._performAuth(e);
      try {
        await this._authPromise;
      } finally {
        this._authPromise = null;
      }
    }
    _isManualToken() {
      return this._manuallySetToken;
    }
    async sendHeartbeat() {
      this.socketAdapter.sendHeartbeat();
    }
    onHeartbeat(e) {
      this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
    }
    _makeRef() {
      return this.socketAdapter.makeRef();
    }
    _remove(e) {
      ((this.channels = this.channels.filter((t) => t.topic !== e.topic)),
        this.channels.length === 0 &&
          (this.log(
            `transport`,
            `no channels remaining, scheduling disconnect`,
          ),
          this._schedulePendingDisconnect()));
    }
    _schedulePendingDisconnect() {
      if (
        (this._cancelPendingDisconnect(),
        this._disconnectOnEmptyChannelsAfterMs === 0)
      ) {
        (this.log(`transport`, `disconnecting immediately - no channels`),
          this.disconnect());
        return;
      }
      ((this._pendingDisconnectTimer = setTimeout(() => {
        ((this._pendingDisconnectTimer = null),
          this.channels.length === 0 &&
            (this.log(
              `transport`,
              `deferred disconnect fired - no channels, disconnecting`,
            ),
            this.disconnect()));
      }, this._disconnectOnEmptyChannelsAfterMs)),
        this.log(
          `transport`,
          `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`,
        ));
    }
    _cancelPendingDisconnect() {
      this._pendingDisconnectTimer !== null &&
        (this.log(
          `transport`,
          `pending disconnect cancelled - channel activity detected`,
        ),
        clearTimeout(this._pendingDisconnectTimer),
        (this._pendingDisconnectTimer = null));
    }
    async _performAuth(e = null) {
      let t,
        n = !1;
      if (e) ((t = e), (n = !0));
      else if (this.accessToken)
        try {
          t = await this.accessToken();
        } catch (e) {
          (this.log(`error`, `Error fetching access token from callback`, e),
            (t = this.accessTokenValue));
        }
      else t = this.accessTokenValue;
      (n
        ? (this._manuallySetToken = !0)
        : this.accessToken && (this._manuallySetToken = !1),
        this.accessTokenValue != t &&
          ((this.accessTokenValue = t),
          this.channels.forEach((e) => {
            let n = { access_token: t, version: jt };
            (t && e.updateJoinPayload(n),
              e.joinedOnce &&
                e.channelAdapter.isJoined() &&
                e.channelAdapter.push(It.access_token, { access_token: t }));
          })));
    }
    async _waitForAuthIfNeeded() {
      this._authPromise && (await this._authPromise);
    }
    _setAuthSafely(e = `general`) {
      this._isManualToken() ||
        this.setAuth().catch((t) => {
          this.log(`error`, `Error setting auth in ${e}`, t);
        });
    }
    _setupConnectionHandlers() {
      (this.socketAdapter.onOpen(() => {
        ((
          this._authPromise ||
          (this.accessToken && !this.accessTokenValue
            ? this.setAuth()
            : Promise.resolve())
        ).catch((e) => {
          this.log(`error`, `error waiting for auth on connect`, e);
        }),
          this.worker && !this.workerRef && this._startWorkerHeartbeat());
      }),
        this.socketAdapter.onClose(() => {
          this.worker && this.workerRef && this._terminateWorker();
        }),
        this.socketAdapter.onMessage((e) => {
          e.ref &&
            e.ref === this._pendingWorkerHeartbeatRef &&
            (this._pendingWorkerHeartbeatRef = null);
        }));
    }
    _handleNodeJsRaceCondition() {
      this.socketAdapter.isConnected() &&
        this.socketAdapter.getSocket().onConnOpen();
    }
    _wrapHeartbeatCallback(e) {
      return (t, n) => {
        (t == `sent` && this._setAuthSafely(), e && e(t, n));
      };
    }
    _startWorkerHeartbeat() {
      this.workerUrl
        ? this.log(`worker`, `starting worker for from ${this.workerUrl}`)
        : this.log(`worker`, `starting default worker`);
      let e = this._workerObjectUrl(this.workerUrl);
      ((this.workerRef = new Worker(e)),
        (this.workerRef.onerror = (e) => {
          (this.log(`worker`, `worker error`, e.message),
            this._terminateWorker(),
            this.disconnect());
        }),
        (this.workerRef.onmessage = (e) => {
          e.data.event === `keepAlive` && this.sendHeartbeat();
        }),
        this.workerRef.postMessage({
          event: `start`,
          interval: this.heartbeatIntervalMs,
        }));
    }
    _terminateWorker() {
      this.workerRef &&=
        (this.log(`worker`, `terminating worker`),
        this.workerRef.terminate(),
        void 0);
    }
    _workerObjectUrl(e) {
      let t;
      if (e) t = e;
      else {
        let e = new Blob([Bn], { type: `application/javascript` });
        t = URL.createObjectURL(e);
      }
      return t;
    }
    _initializeOptions(e) {
      ((this.worker = e?.worker ?? !1),
        (this.accessToken = e?.accessToken ?? null));
      let t = {};
      ((t.timeout = e?.timeout ?? Ft),
        (t.heartbeatIntervalMs =
          e?.heartbeatIntervalMs ?? Fn.HEARTBEAT_INTERVAL),
        (this._disconnectOnEmptyChannelsAfterMs =
          e?.disconnectOnEmptyChannelsAfterMs ??
          2 * (e?.heartbeatIntervalMs ?? Fn.HEARTBEAT_INTERVAL)),
        (t.transport = e?.transport ?? At.getWebSocketConstructor()),
        (t.params = e?.params),
        (t.logger = e?.logger),
        (t.heartbeatCallback = this._wrapHeartbeatCallback(
          e?.heartbeatCallback,
        )),
        (t.sessionStorage = e?.sessionStorage ?? zn()),
        (t.reconnectAfterMs = e?.reconnectAfterMs ?? ((e) => In[e - 1] || Ln)));
      let n,
        r,
        i = e?.vsn ?? Pt;
      switch (i) {
        case Mt:
          ((n = (e, t) => t(JSON.stringify(e))),
            (r = (e, t) => t(JSON.parse(e))));
          break;
        case Nt:
          ((n = this.serializer.encode.bind(this.serializer)),
            (r = this.serializer.decode.bind(this.serializer)));
          break;
        default:
          throw Error(`Unsupported serializer version: ${t.vsn}`);
      }
      if (
        ((t.vsn = i),
        (t.encode = e?.encode ?? n),
        (t.decode = e?.decode ?? r),
        (t.beforeReconnect = this._reconnectAuth.bind(this)),
        (e?.logLevel || e?.log_level) &&
          ((this.logLevel = e.logLevel || e.log_level),
          (t.params = Object.assign(Object.assign({}, t.params), {
            log_level: this.logLevel,
          }))),
        this.worker)
      ) {
        if (typeof window < `u` && !window.Worker)
          throw Error(`Web Worker is not supported`);
        ((this.workerUrl = e?.workerUrl), (t.autoSendHeartbeat = !this.worker));
      }
      return t;
    }
    async _reconnectAuth() {
      (await this._waitForAuthIfNeeded(), this.isConnected() || this.connect());
    }
  },
  Hn = class extends Error {
    constructor(e, t) {
      (super(e),
        (this.name = `IcebergError`),
        (this.status = t.status),
        (this.icebergType = t.icebergType),
        (this.icebergCode = t.icebergCode),
        (this.details = t.details),
        (this.isCommitStateUnknown =
          t.icebergType === `CommitStateUnknownException` ||
          ([500, 502, 504].includes(t.status) &&
            t.icebergType?.includes(`CommitState`) === !0)));
    }
    isNotFound() {
      return this.status === 404;
    }
    isConflict() {
      return this.status === 409;
    }
    isAuthenticationTimeout() {
      return this.status === 419;
    }
  };
