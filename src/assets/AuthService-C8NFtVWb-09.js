// AuthService-C8NFtVWb 09 — conn
// Lines 2516-3930 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var zt = (e, t, n = {}) => {
    let r = n.skipTypes ?? [];
    return t
      ? Object.keys(t).reduce((n, i) => ((n[i] = Bt(i, e, t, r)), n), {})
      : {};
  },
  Bt = (e, t, n, r) => {
    let i = t.find((t) => t.name === e)?.type,
      a = n[e];
    return i && !r.includes(i) ? Vt(i, a) : Ht(a);
  },
  Vt = (e, t) => {
    if (e.charAt(0) === `_`) return Kt(t, e.slice(1, e.length));
    switch (e) {
      case O.bool:
        return Ut(t);
      case O.float4:
      case O.float8:
      case O.int2:
      case O.int4:
      case O.int8:
      case O.numeric:
      case O.oid:
        return Wt(t);
      case O.json:
      case O.jsonb:
        return Gt(t);
      case O.timestamp:
        return qt(t);
      case O.abstime:
      case O.date:
      case O.daterange:
      case O.int4range:
      case O.int8range:
      case O.money:
      case O.reltime:
      case O.text:
      case O.time:
      case O.timestamptz:
      case O.timetz:
      case O.tsrange:
      case O.tstzrange:
        return Ht(t);
      default:
        return Ht(t);
    }
  },
  Ht = (e) => e,
  Ut = (e) => {
    switch (e) {
      case `t`:
        return !0;
      case `f`:
        return !1;
      default:
        return e;
    }
  },
  Wt = (e) => {
    if (typeof e == `string`) {
      let t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  Gt = (e) => {
    if (typeof e == `string`)
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  Kt = (e, t) => {
    if (typeof e != `string`) return e;
    let n = e.length - 1,
      r = e[n];
    if (e[0] === `{` && r === `}`) {
      let r,
        i = e.slice(1, n);
      try {
        r = JSON.parse(`[` + i + `]`);
      } catch {
        r = i ? i.split(`,`) : [];
      }
      return r.map((e) => Vt(t, e));
    }
    return e;
  },
  qt = (e) => (typeof e == `string` ? e.replace(` `, `T`) : e),
  Jt = (e) => {
    let t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, `http`)),
      (t.pathname = t.pathname
        .replace(/\/+$/, ``)
        .replace(/\/socket\/websocket$/i, ``)
        .replace(/\/socket$/i, ``)
        .replace(/\/websocket$/i, ``)),
      t.pathname === `` || t.pathname === `/`
        ? (t.pathname = `/api/broadcast`)
        : (t.pathname += `/api/broadcast`),
      t.href
    );
  },
  Yt = (e) =>
    typeof e == `function`
      ? e
      : function () {
          return e;
        },
  Xt = typeof self < `u` ? self : null,
  Zt = typeof window < `u` ? window : null,
  k = Xt || Zt || globalThis,
  Qt = `2.0.0`,
  $t = 1e4,
  en = 1e3,
  A = { connecting: 0, open: 1, closing: 2, closed: 3 },
  j = {
    closed: `closed`,
    errored: `errored`,
    joined: `joined`,
    joining: `joining`,
    leaving: `leaving`,
  },
  M = {
    close: `phx_close`,
    error: `phx_error`,
    join: `phx_join`,
    reply: `phx_reply`,
    leave: `phx_leave`,
  },
  tn = { longpoll: `longpoll`, websocket: `websocket` },
  nn = { complete: 4 },
  rn = `base64url.bearer.phx.`,
  an = class {
    constructor(e, t, n, r) {
      ((this.channel = e),
        (this.event = t),
        (this.payload =
          n ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = r),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0));
    }
    resend(e) {
      ((this.timeout = e), this.reset(), this.send());
    }
    send() {
      this.hasReceived(`timeout`) ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(e, t) {
      return (
        this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    reset() {
      (this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1));
    }
    destroy() {
      (this.cancelRefEvent(), this.cancelTimeout());
    }
    matchReceive({ status: e, response: t, _ref: n }) {
      this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    startTimeout() {
      (this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (e) => {
          (this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = e),
            this.matchReceive(e));
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger(`timeout`, {});
        }, this.timeout)));
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, { status: e, response: t });
    }
  },
  on = class {
    constructor(e, t) {
      ((this.callback = e),
        (this.timerCalc = t),
        (this.timer = void 0),
        (this.tries = 0));
    }
    reset() {
      ((this.tries = 0), clearTimeout(this.timer));
    }
    scheduleTimeout() {
      (clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            ((this.tries += 1), this.callback());
          },
          this.timerCalc(this.tries + 1),
        )));
    }
  },
  sn = class {
    constructor(e, t, n) {
      ((this.state = j.closed),
        (this.topic = e),
        (this.params = Yt(t || {})),
        (this.socket = n),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new an(this, M.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new on(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(
          this.socket.onError(() => this.rejoinTimer.reset()),
        ),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
          }),
        ),
        this.joinPush.receive(`ok`, () => {
          ((this.state = j.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((e) => e.send()),
            (this.pushBuffer = []));
        }),
        this.joinPush.receive(`error`, (e) => {
          ((this.state = j.errored),
            this.socket.hasLogger() &&
              this.socket.log(`channel`, `error ${this.topic}`, e),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.onClose(() => {
          (this.rejoinTimer.reset(),
            this.socket.hasLogger() &&
              this.socket.log(`channel`, `close ${this.topic}`),
            (this.state = j.closed),
            this.socket.remove(this));
        }),
        this.onError((e) => {
          (this.socket.hasLogger() &&
            this.socket.log(`channel`, `error ${this.topic}`, e),
            this.isJoining() && this.joinPush.reset(),
            (this.state = j.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive(`timeout`, () => {
          (this.socket.hasLogger() &&
            this.socket.log(
              `channel`,
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            new an(this, M.leave, Yt({}), this.timeout).send(),
            (this.state = j.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.on(M.reply, (e, t) => {
          this.trigger(this.replyEventName(t), e);
        }));
    }
    join(e = this.timeout) {
      if (this.joinedOnce)
        throw Error(
          `tried to join multiple times. 'join' can only be called a single time per channel instance`,
        );
      return (
        (this.timeout = e),
        (this.joinedOnce = !0),
        this.rejoin(),
        this.joinPush
      );
    }
    teardown() {
      (this.pushBuffer.forEach((e) => e.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = j.closed),
        (this.bindings = []));
    }
    onClose(e) {
      this.on(M.close, e);
    }
    onError(e) {
      return this.on(M.error, (t) => e(t));
    }
    on(e, t) {
      let n = this.bindingRef++;
      return (this.bindings.push({ event: e, ref: n, callback: t }), n);
    }
    off(e, t) {
      this.bindings = this.bindings.filter(
        (n) => !(n.event === e && (t === void 0 || t === n.ref)),
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, n = this.timeout) {
      if (((t ||= {}), !this.joinedOnce))
        throw Error(
          `tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
        );
      let r = new an(
        this,
        e,
        function () {
          return t;
        },
        n,
      );
      return (
        this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)),
        r
      );
    }
    leave(e = this.timeout) {
      (this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        (this.state = j.leaving));
      let t = () => {
          (this.socket.hasLogger() &&
            this.socket.log(`channel`, `leave ${this.topic}`),
            this.trigger(M.close, `leave`));
        },
        n = new an(this, M.leave, Yt({}), e);
      return (
        n.receive(`ok`, () => t()).receive(`timeout`, () => t()),
        n.send(),
        this.canPush() || n.trigger(`ok`, {}),
        n
      );
    }
    onMessage(e, t, n) {
      return t;
    }
    filterBindings(e, t, n) {
      return !0;
    }
    isMember(e, t, n, r) {
      return this.topic === e
        ? r && r !== this.joinRef()
          ? (this.socket.hasLogger() &&
              this.socket.log(`channel`, `dropping outdated message`, {
                topic: e,
                event: t,
                payload: n,
                joinRef: r,
              }),
            !1)
          : !0
        : !1;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(e = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = j.joining),
        this.joinPush.resend(e));
    }
    trigger(e, t, n, r) {
      let i = this.onMessage(e, t, n, r);
      if (t && !i)
        throw Error(
          `channel onMessage callbacks must return the payload, modified or unmodified`,
        );
      let a = this.bindings.filter(
        (r) => r.event === e && this.filterBindings(r, t, n),
      );
      for (let e = 0; e < a.length; e++)
        a[e].callback(i, n, r || this.joinRef());
    }
    replyEventName(e) {
      return `chan_reply_${e}`;
    }
    isClosed() {
      return this.state === j.closed;
    }
    isErrored() {
      return this.state === j.errored;
    }
    isJoined() {
      return this.state === j.joined;
    }
    isJoining() {
      return this.state === j.joining;
    }
    isLeaving() {
      return this.state === j.leaving;
    }
  },
  cn = class {
    static request(e, t, n, r, i, a, o) {
      if (k.XDomainRequest) {
        let n = new k.XDomainRequest();
        return this.xdomainRequest(n, e, t, r, i, a, o);
      } else if (k.XMLHttpRequest) {
        let s = new k.XMLHttpRequest();
        return this.xhrRequest(s, e, t, n, r, i, a, o);
      } else if (k.fetch && k.AbortController)
        return this.fetchRequest(e, t, n, r, i, a, o);
      else throw Error(`No suitable XMLHttpRequest implementation found`);
    }
    static fetchRequest(e, t, n, r, i, a, o) {
      let s = { method: e, headers: n, body: r },
        c = null;
      return (
        i &&
          ((c = new AbortController()),
          setTimeout(() => c.abort(), i),
          (s.signal = c.signal)),
        k
          .fetch(t, s)
          .then((e) => e.text())
          .then((e) => this.parseJSON(e))
          .then((e) => o && o(e))
          .catch((e) => {
            e.name === `AbortError` && a ? a() : o && o(null);
          }),
        c
      );
    }
    static xdomainRequest(e, t, n, r, i, a, o) {
      return (
        (e.timeout = i),
        e.open(t, n),
        (e.onload = () => {
          let t = this.parseJSON(e.responseText);
          o && o(t);
        }),
        a && (e.ontimeout = a),
        (e.onprogress = () => {}),
        e.send(r),
        e
      );
    }
    static xhrRequest(e, t, n, r, i, a, o, s) {
      (e.open(t, n, !0), (e.timeout = a));
      for (let [t, n] of Object.entries(r)) e.setRequestHeader(t, n);
      return (
        (e.onerror = () => s && s(null)),
        (e.onreadystatechange = () => {
          e.readyState === nn.complete &&
            s &&
            s(this.parseJSON(e.responseText));
        }),
        o && (e.ontimeout = o),
        e.send(i),
        e
      );
    }
    static parseJSON(e) {
      if (!e || e === ``) return null;
      try {
        return JSON.parse(e);
      } catch {
        return (
          console && console.log(`failed to parse JSON response`, e),
          null
        );
      }
    }
    static serialize(e, t) {
      let n = [];
      for (var r in e) {
        if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
        let i = t ? `${t}[${r}]` : r,
          a = e[r];
        typeof a == `object`
          ? n.push(this.serialize(a, i))
          : n.push(encodeURIComponent(i) + `=` + encodeURIComponent(a));
      }
      return n.join(`&`);
    }
    static appendParams(e, t) {
      return Object.keys(t).length === 0
        ? e
        : `${e}${e.match(/\?/) ? `&` : `?`}${this.serialize(t)}`;
    }
  },
  ln = (e) => {
    let t = ``,
      n = new Uint8Array(e),
      r = n.byteLength;
    for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
    return btoa(t);
  },
  un = class {
    constructor(e, t) {
      (t &&
        t.length === 2 &&
        t[1].startsWith(rn) &&
        (this.authToken = atob(t[1].slice(rn.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(e)),
        (this.readyState = A.connecting),
        setTimeout(() => this.poll(), 0));
    }
    normalizeEndpoint(e) {
      return e
        .replace(`ws://`, `http://`)
        .replace(`wss://`, `https://`)
        .replace(RegExp(`(.*)/` + tn.websocket), `$1/` + tn.longpoll);
    }
    endpointURL() {
      return cn.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(e, t, n) {
      (this.close(e, t, n), (this.readyState = A.connecting));
    }
    ontimeout() {
      (this.onerror(`timeout`), this.closeAndRetry(1005, `timeout`, !1));
    }
    isActive() {
      return this.readyState === A.open || this.readyState === A.connecting;
    }
    poll() {
      let e = { Accept: `application/json` };
      (this.authToken && (e[`X-Phoenix-AuthToken`] = this.authToken),
        this.ajax(
          `GET`,
          e,
          null,
          () => this.ontimeout(),
          (e) => {
            if (e) {
              var { status: t, token: n, messages: r } = e;
              if (t === 410 && this.token !== null) {
                (this.onerror(410),
                  this.closeAndRetry(3410, `session_gone`, !1));
                return;
              }
              this.token = n;
            } else t = 0;
            switch (t) {
              case 200:
                (r.forEach((e) => {
                  setTimeout(() => this.onmessage({ data: e }), 0);
                }),
                  this.poll());
                break;
              case 204:
                this.poll();
                break;
              case 410:
                ((this.readyState = A.open), this.onopen({}), this.poll());
                break;
              case 403:
                (this.onerror(403), this.close(1008, `forbidden`, !1));
                break;
              case 0:
              case 500:
                (this.onerror(500),
                  this.closeAndRetry(1011, `internal server error`, 500));
                break;
              default:
                throw Error(`unhandled poll status ${t}`);
            }
          },
        ));
    }
    send(e) {
      (typeof e != `string` && (e = ln(e)),
        this.currentBatch
          ? this.currentBatch.push(e)
          : this.awaitingBatchAck
            ? this.batchBuffer.push(e)
            : ((this.currentBatch = [e]),
              (this.currentBatchTimer = setTimeout(() => {
                (this.batchSend(this.currentBatch), (this.currentBatch = null));
              }, 0))));
    }
    batchSend(e) {
      ((this.awaitingBatchAck = !0),
        this.ajax(
          `POST`,
          { "Content-Type": `application/x-ndjson` },
          e.join(`
`),
          () => this.onerror(`timeout`),
          (e) => {
            ((this.awaitingBatchAck = !1),
              !e || e.status !== 200
                ? (this.onerror(e && e.status),
                  this.closeAndRetry(1011, `internal server error`, !1))
                : this.batchBuffer.length > 0 &&
                  (this.batchSend(this.batchBuffer), (this.batchBuffer = [])));
          },
        ));
    }
    close(e, t, n) {
      for (let e of this.reqs) e.abort();
      this.readyState = A.closed;
      let r = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: e, reason: t, wasClean: n },
      );
      ((this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < `u`
          ? this.onclose(new CloseEvent(`close`, r))
          : this.onclose(r));
    }
    ajax(e, t, n, r, i) {
      let a;
      ((a = cn.request(
        e,
        this.endpointURL(),
        t,
        n,
        this.timeout,
        () => {
          (this.reqs.delete(a), r());
        },
        (e) => {
          (this.reqs.delete(a), this.isActive() && i(e));
        },
      )),
        this.reqs.add(a));
    }
  },
  dn = class e {
    constructor(t, n = {}) {
      let r = n.events || { state: `presence_state`, diff: `presence_diff` };
      ((this.state = {}),
        (this.pendingDiffs = []),
        (this.channel = t),
        (this.joinRef = null),
        (this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {},
        }),
        this.channel.on(r.state, (t) => {
          let { onJoin: n, onLeave: r, onSync: i } = this.caller;
          ((this.joinRef = this.channel.joinRef()),
            (this.state = e.syncState(this.state, t, n, r)),
            this.pendingDiffs.forEach((t) => {
              this.state = e.syncDiff(this.state, t, n, r);
            }),
            (this.pendingDiffs = []),
            i());
        }),
        this.channel.on(r.diff, (t) => {
          let { onJoin: n, onLeave: r, onSync: i } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(t)
            : ((this.state = e.syncDiff(this.state, t, n, r)), i());
        }));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    list(t) {
      return e.list(this.state, t);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(e, t, n, r) {
      let i = this.clone(e),
        a = {},
        o = {};
      return (
        this.map(i, (e, n) => {
          t[e] || (o[e] = n);
        }),
        this.map(t, (e, t) => {
          let n = i[e];
          if (n) {
            let r = t.metas.map((e) => e.phx_ref),
              i = n.metas.map((e) => e.phx_ref),
              s = t.metas.filter((e) => i.indexOf(e.phx_ref) < 0),
              c = n.metas.filter((e) => r.indexOf(e.phx_ref) < 0);
            (s.length > 0 && ((a[e] = t), (a[e].metas = s)),
              c.length > 0 && ((o[e] = this.clone(n)), (o[e].metas = c)));
          } else a[e] = t;
        }),
        this.syncDiff(i, { joins: a, leaves: o }, n, r)
      );
    }
    static syncDiff(e, t, n, r) {
      let { joins: i, leaves: a } = this.clone(t);
      return (
        (n ||= function () {}),
        (r ||= function () {}),
        this.map(i, (t, r) => {
          let i = e[t];
          if (((e[t] = this.clone(r)), i)) {
            let n = e[t].metas.map((e) => e.phx_ref),
              r = i.metas.filter((e) => n.indexOf(e.phx_ref) < 0);
            e[t].metas.unshift(...r);
          }
          n(t, i, r);
        }),
        this.map(a, (t, n) => {
          let i = e[t];
          if (!i) return;
          let a = n.metas.map((e) => e.phx_ref);
          ((i.metas = i.metas.filter((e) => a.indexOf(e.phx_ref) < 0)),
            r(t, i, n),
            i.metas.length === 0 && delete e[t]);
        }),
        e
      );
    }
    static list(e, t) {
      return (
        (t ||= function (e, t) {
          return t;
        }),
        this.map(e, (e, n) => t(e, n))
      );
    }
    static map(e, t) {
      return Object.getOwnPropertyNames(e).map((n) => t(n, e[n]));
    }
    static clone(e) {
      return JSON.parse(JSON.stringify(e));
    }
  },
  fn = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(e, t) {
      if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
      {
        let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      }
    },
    decode(e, t) {
      if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
      {
        let [n, r, i, a, o] = JSON.parse(e);
        return t({ join_ref: n, ref: r, topic: i, event: a, payload: o });
      }
    },
    binaryEncode(e) {
      let { join_ref: t, ref: n, event: r, topic: i, payload: a } = e,
        o = this.META_LENGTH + t.length + n.length + i.length + r.length,
        s = new ArrayBuffer(this.HEADER_LENGTH + o),
        c = new DataView(s),
        l = 0;
      (c.setUint8(l++, this.KINDS.push),
        c.setUint8(l++, t.length),
        c.setUint8(l++, n.length),
        c.setUint8(l++, i.length),
        c.setUint8(l++, r.length),
        Array.from(t, (e) => c.setUint8(l++, e.charCodeAt(0))),
        Array.from(n, (e) => c.setUint8(l++, e.charCodeAt(0))),
        Array.from(i, (e) => c.setUint8(l++, e.charCodeAt(0))),
        Array.from(r, (e) => c.setUint8(l++, e.charCodeAt(0))));
      var u = new Uint8Array(s.byteLength + a.byteLength);
      return (
        u.set(new Uint8Array(s), 0),
        u.set(new Uint8Array(a), s.byteLength),
        u.buffer
      );
    },
    binaryDecode(e) {
      let t = new DataView(e),
        n = t.getUint8(0),
        r = new TextDecoder();
      switch (n) {
        case this.KINDS.push:
          return this.decodePush(e, t, r);
        case this.KINDS.reply:
          return this.decodeReply(e, t, r);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(e, t, r);
      }
    },
    decodePush(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = t.getUint8(3),
        o = this.HEADER_LENGTH + this.META_LENGTH - 1,
        s = n.decode(e.slice(o, o + r));
      o += r;
      let c = n.decode(e.slice(o, o + i));
      o += i;
      let l = n.decode(e.slice(o, o + a));
      return (
        (o += a),
        {
          join_ref: s,
          ref: null,
          topic: c,
          event: l,
          payload: e.slice(o, e.byteLength),
        }
      );
    },
    decodeReply(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = t.getUint8(3),
        o = t.getUint8(4),
        s = this.HEADER_LENGTH + this.META_LENGTH,
        c = n.decode(e.slice(s, s + r));
      s += r;
      let l = n.decode(e.slice(s, s + i));
      s += i;
      let u = n.decode(e.slice(s, s + a));
      s += a;
      let d = n.decode(e.slice(s, s + o));
      s += o;
      let f = { status: d, response: e.slice(s, e.byteLength) };
      return { join_ref: c, ref: l, topic: u, event: M.reply, payload: f };
    },
    decodeBroadcast(e, t, n) {
      let r = t.getUint8(1),
        i = t.getUint8(2),
        a = this.HEADER_LENGTH + 2,
        o = n.decode(e.slice(a, a + r));
      a += r;
      let s = n.decode(e.slice(a, a + i));
      return (
        (a += i),
        {
          join_ref: null,
          ref: null,
          topic: o,
          event: s,
          payload: e.slice(a, e.byteLength),
        }
      );
    },
  },
  pn = class {
    constructor(e, t = {}) {
      ((this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = t.timeout || $t),
        (this.transport = t.transport || k.WebSocket || un),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = t.longPollFallbackMs),
        (this.fallbackTimer = null));
      let n = null;
      try {
        n = k && k.sessionStorage;
      } catch {}
      ((this.sessionStore = t.sessionStorage || n),
        (this.establishedConnections = 0),
        (this.defaultEncoder = fn.encode.bind(fn)),
        (this.defaultDecoder = fn.decode.bind(fn)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = t.binaryType || `arraybuffer`),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport === un
          ? ((this.encode = this.defaultEncoder),
            (this.decode = this.defaultDecoder))
          : ((this.encode = t.encode || this.defaultEncoder),
            (this.decode = t.decode || this.defaultDecoder)));
      let r = null;
      (Zt &&
        Zt.addEventListener &&
        (Zt.addEventListener(`pagehide`, (e) => {
          this.conn && (this.disconnect(), (r = this.connectClock));
        }),
        Zt.addEventListener(`pageshow`, (e) => {
          r === this.connectClock && ((r = null), this.connect());
        }),
        Zt.addEventListener(`visibilitychange`, () => {
          document.visibilityState === `hidden`
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() &&
                !this.closeWasClean &&
                this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = t.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (e) =>
          t.rejoinAfterMs ? t.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4),
        (this.reconnectAfterMs = (e) =>
          t.reconnectAfterMs
            ? t.reconnectAfterMs(e)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3),
        (this.logger = t.logger || null),
        !this.logger &&
          t.debug &&
          (this.logger = (e, t, n) => {
            console.log(`${e}: ${t}`, n);
          }),
        (this.longpollerTimeout = t.longpollerTimeout || 2e4),
        (this.params = Yt(t.params || {})),
        (this.endPoint = `${e}/${tn.websocket}`),
        (this.vsn = t.vsn || Qt),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new on(() => {
          if (this.pageHidden) {
            (this.log(`Not reconnecting as page is hidden!`), this.teardown());
            return;
          }
          this.teardown(async () => {
            (t.beforeReconnect && (await t.beforeReconnect()), this.connect());
          });
        }, this.reconnectAfterMs)),
        (this.authToken = t.authToken));
    }
    getLongPollTransport() {
      return un;
    }
    replaceTransport(e) {
      (this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        (this.conn &&= (this.conn.close(), null)),
        (this.transport = e));
    }
    protocol() {
      return location.protocol.match(/^https/) ? `wss` : `ws`;
    }
    endPointURL() {
      let e = cn.appendParams(cn.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn,
      });
      return e.charAt(0) === `/`
        ? e.charAt(1) === `/`
          ? `${this.protocol()}:${e}`
          : `${this.protocol()}://${location.host}${e}`
        : e;
    }
    disconnect(e, t, n) {
      (this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            ((this.disconnecting = !1), e && e());
          },
          t,
          n,
        ));
    }
    connect(e) {
      (e &&
        (console &&
          console.log(
            `passing params to connect is deprecated. Instead pass :params to the Socket constructor`,
          ),
        (this.params = Yt(e))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== un
            ? this.connectWithFallback(un, this.longPollFallbackMs)
            : this.transportConnect()));
    }
    log(e, t, n) {
      this.logger && this.logger(e, t, n);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.open.push([t, e]), t);
    }
    onClose(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.close.push([t, e]), t);
    }
    onError(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.error.push([t, e]), t);
    }
    onMessage(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.message.push([t, e]), t);
    }
    onHeartbeat(e) {
      this.heartbeatCallback = e;
    }
    ping(e) {
      if (!this.isConnected()) return !1;
      let t = this.makeRef(),
        n = Date.now();
      this.push({ topic: `phoenix`, event: `heartbeat`, payload: {}, ref: t });
      let r = this.onMessage((i) => {
        i.ref === t && (this.off([r]), e(Date.now() - n));
      });
      return !0;
    }
    transportName(e) {
      switch (e) {
        case un:
          return `LongPoll`;
        default:
          return e.name;
      }
    }
    transportConnect() {
      (this.connectClock++, (this.closeWasClean = !1));
      let e;
      (this.authToken &&
        (e = [`phoenix`, `${rn}${btoa(this.authToken).replace(/=/g, ``)}`]),
        (this.conn = new this.transport(this.endPointURL(), e)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (e) => this.onConnError(e)),
        (this.conn.onmessage = (e) => this.onConnMessage(e)),
        (this.conn.onclose = (e) => this.onConnClose(e)));
    }
    getSession(e) {
      return this.sessionStore && this.sessionStore.getItem(e);
    }
    storeSession(e, t) {
      this.sessionStore && this.sessionStore.setItem(e, t);
    }
    connectWithFallback(e, t = 2500) {
      clearTimeout(this.fallbackTimer);
      let n = !1,
        r = !0,
        i,
        a = this.transportName(e),
        o = (t) => {
          (this.log(`transport`, `falling back to ${a}...`, t),
            this.off([void 0, i]),
            (r = !1),
            this.replaceTransport(e),
            this.transportConnect());
        };
      if (this.getSession(`phx:fallback:${a}`)) return o(`memorized`);
      ((this.fallbackTimer = setTimeout(o, t)),
        (i = this.onError((e) => {
          (this.log(`transport`, `error`, e),
            r && !n && (clearTimeout(this.fallbackTimer), o(e)));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((n = !0), !r)) {
            let t = this.transportName(e);
            return (
              this.primaryPassedHealthCheck ||
                this.storeSession(`phx:fallback:${t}`, `true`),
              this.log(`transport`, `established ${t} fallback`)
            );
          }
          (clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(o, t)),
            this.ping((e) => {
              (this.log(`transport`, `connected to primary after`, e),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer));
            }));
        })),
        this.transportConnect());
    }
    clearHeartbeats() {
      (clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer));
    }
    onConnOpen() {
      (this.hasLogger() &&
        this.log(`transport`, `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks(`open`));
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        ((this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log(
              `transport`,
              `heartbeat timeout. Attempting to re-establish connection`,
            ));
        try {
          this.heartbeatCallback(`timeout`);
        } catch (e) {
          this.log(`error`, `error in heartbeat callback`, e);
        }
        (this.triggerChanError(Error(`heartbeat timeout`)),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            en,
            `heartbeat timeout`,
          ));
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs,
        )));
    }
    teardown(e, t, n) {
      if (!this.conn) return e && e();
      let r = this.conn;
      this.waitForBufferDone(r, () => {
        (t ? r.close(t, n || ``) : r.close(),
          this.waitForSocketClosed(r, () => {
            (this.conn === r &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              e && e());
          }));
      });
    }
    waitForBufferDone(e, t, n = 1) {
      if (n === 5 || !e.bufferedAmount) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(e, t, n + 1);
      }, 150 * n);
    }
    waitForSocketClosed(e, t, n = 1) {
      if (n === 5 || e.readyState === A.closed) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(e, t, n + 1);
      }, 150 * n);
    }
    onConnClose(e) {
      (this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log(`transport`, `close`, e),
        this.triggerChanError(e),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks(`close`, e));
    }
    onConnError(e) {
      this.hasLogger() && this.log(`transport`, `error`, e);
      let t = this.transport,
        n = this.establishedConnections;
      (this.triggerStateCallbacks(`error`, e, t, n),
        (t === this.transport || n > 0) && this.triggerChanError(e));
    }
    triggerChanError(e) {
      this.channels.forEach((t) => {
        t.isErrored() || t.isLeaving() || t.isClosed() || t.trigger(M.error, e);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case A.connecting:
          return `connecting`;
        case A.open:
          return `open`;
        case A.closing:
          return `closing`;
        default:
          return `closed`;
      }
    }
    isConnected() {
      return this.connectionState() === `open`;
    }
    remove(e) {
      (this.off(e.stateChangeRefs),
        (this.channels = this.channels.filter((t) => t !== e)));
    }
    off(e) {
      for (let t in this.stateChangeCallbacks)
        this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(
          ([t]) => e.indexOf(t) === -1,
        );
    }
    channel(e, t = {}) {
      let n = new sn(e, t, this);
      return (this.channels.push(n), n);
    }
    push(e) {
      if (this.hasLogger()) {
        let { topic: t, event: n, payload: r, ref: i, join_ref: a } = e;
        this.log(`push`, `${t} ${n} (${a}, ${i})`, r);
      }
      this.isConnected()
        ? this.encode(e, (e) => this.conn.send(e))
        : this.sendBuffer.push(() => this.encode(e, (e) => this.conn.send(e)));
    }
    makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e),
        this.ref.toString()
      );
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback(`disconnected`);
        } catch (e) {
          this.log(`error`, `error in heartbeat callback`, e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      ((this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: `phoenix`,
          event: `heartbeat`,
          payload: {},
          ref: this.pendingHeartbeatRef,
        }));
      try {
        this.heartbeatCallback(`sent`);
      } catch (e) {
        this.log(`error`, `error in heartbeat callback`, e);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs,
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    onConnMessage(e) {
      this.decode(e.data, (e) => {
        let { topic: t, event: n, payload: r, ref: i, join_ref: a } = e;
        if (i && i === this.pendingHeartbeatRef) {
          let e = this.heartbeatSentAt
            ? Date.now() - this.heartbeatSentAt
            : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(r.status === `ok` ? `ok` : `error`, e);
          } catch (e) {
            this.log(`error`, `error in heartbeat callback`, e);
          }
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs,
              )));
        }
        this.hasLogger() &&
          this.log(
            `receive`,
            `${r.status || ``} ${t} ${n} ${(i && `(` + i + `)`) || ``}`.trim(),
            r,
          );
        for (let e = 0; e < this.channels.length; e++) {
          let o = this.channels[e];
          o.isMember(t, n, r, a) && o.trigger(n, r, i, a);
        }
        this.triggerStateCallbacks(`message`, e);
      });
    }
    triggerStateCallbacks(e, ...t) {
      try {
        this.stateChangeCallbacks[e].forEach(([n, r]) => {
          try {
            r(...t);
          } catch (t) {
            this.log(`error`, `error in ${e} callback`, t);
          }
        });
      } catch (t) {
        this.log(`error`, `error triggering ${e} callbacks`, t);
      }
    }
    leaveOpenTopic(e) {
      let t = this.channels.find(
        (t) => t.topic === e && (t.isJoined() || t.isJoining()),
      );
      t &&
        (this.hasLogger() &&
          this.log(`transport`, `leaving duplicate topic "${e}"`),
        t.leave());
    }
  },
  mn = class e {
    constructor(t, n) {
      let r = _n(n);
      ((this.presence = new dn(t.getChannel(), r)),
        this.presence.onJoin((n, r, i) => {
          let a = e.onJoinPayload(n, r, i);
          t.getChannel().trigger(`presence`, a);
        }),
        this.presence.onLeave((n, r, i) => {
          let a = e.onLeavePayload(n, r, i);
          t.getChannel().trigger(`presence`, a);
        }),
        this.presence.onSync(() => {
          t.getChannel().trigger(`presence`, { event: `sync` });
        }));
    }
    get state() {
      return e.transformState(this.presence.state);
    }
    static transformState(e) {
      return (
        (e = gn(e)),
        Object.getOwnPropertyNames(e).reduce((t, n) => {
          let r = e[n];
          return ((t[n] = hn(r)), t);
        }, {})
      );
    }
    static onJoinPayload(e, t, n) {
      return {
        event: `join`,
        key: e,
        currentPresences: vn(t),
        newPresences: hn(n),
      };
    }
    static onLeavePayload(e, t, n) {
      return {
        event: `leave`,
        key: e,
        currentPresences: vn(t),
        leftPresences: hn(n),
      };
    }
  };
