// AuthService-C8NFtVWb 10 — channel
// Lines 3931-4175 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function hn(e) {
  return e.metas.map(
    (e) => (
      (e.presence_ref = e.phx_ref),
      delete e.phx_ref,
      delete e.phx_ref_prev,
      e
    ),
  );
}
function gn(e) {
  return JSON.parse(JSON.stringify(e));
}
function _n(e) {
  return e?.events && { events: e.events };
}
function vn(e) {
  return e?.metas ? hn(e) : [];
}
var yn;
(function (e) {
  ((e.SYNC = `sync`), (e.JOIN = `join`), (e.LEAVE = `leave`));
})((yn ||= {}));
var bn = class {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e, t) {
    ((this.channel = e),
      (this.presenceAdapter = new mn(this.channel.channelAdapter, t)));
  }
};
function xn(e) {
  if (e instanceof Error) return e;
  if (typeof e == `string`) return Error(e);
  if (e && typeof e == `object`) {
    let t = e;
    if (typeof t.code == `number`) {
      let n = typeof t.reason == `string` && t.reason ? ` (${t.reason})` : ``;
      return Error(`socket closed: ${t.code}${n}`, { cause: e });
    }
    return Error(`channel error: transport failure`, { cause: e });
  }
  return Error(`channel error: connection lost`);
}
var Sn = class {
  constructor(e, t, n) {
    let r = Cn(n);
    ((this.channel = e.getSocket().channel(t, r)), (this.socket = e));
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, t) {
    return this.channel.on(e, t);
  }
  off(e, t) {
    this.channel.off(e, t);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, t, n) {
    let r;
    try {
      r = this.channel.push(e, t, n);
    } catch {
      throw Error(
        `tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`,
      );
    }
    if (this.channel.pushBuffer.length > 100) {
      let e = this.channel.pushBuffer.shift();
      (e.cancelTimeout(),
        this.socket.log(
          `channel`,
          `discarded push due to buffer overflow: ${e.event}`,
          e.payload(),
        ));
    }
    return r;
  }
  updateJoinPayload(e) {
    let t = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () =>
      Object.assign(Object.assign({}, t), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === D.joined;
  }
  isJoined() {
    return this.state === D.joined;
  }
  isJoining() {
    return this.state === D.joining;
  }
  isClosed() {
    return this.state === D.closed;
  }
  isLeaving() {
    return this.state === D.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  getChannel() {
    return this.channel;
  }
};
function Cn(e) {
  return {
    config: Object.assign(
      {
        broadcast: { ack: !1, self: !1 },
        presence: { key: ``, enabled: !1 },
        private: !1,
      },
      e.config,
    ),
  };
}
var wn = /[,()"\\]/,
  Tn = (e) => wn.test(e) || e !== e.trim(),
  En = (e) => `"${e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`)}"`,
  Dn = (e) => {
    let t = e === null ? `null` : String(e);
    return Tn(t) ? En(t) : t;
  },
  On = (e) => (e === null ? `null` : String(e)),
  kn = (e, t) => {
    if (e === `in`) {
      let e = Array.isArray(t) ? t : [t];
      if (e.length === 0)
        throw Error("Realtime `in` filter requires at least one value.");
      return `in.(${Array.from(new Set(e))
        .map((e) => Dn(e))
        .join(`,`)})`;
    }
    return e === `is` ? `is.${On(t)}` : `${e}.${Dn(t)}`;
  },
  An = class {
    constructor() {
      this.filters = [];
    }
    add(e, t, n, r = !1) {
      let i = r ? `not.` : ``;
      return (this.filters.push(`${e}=${i}${kn(t, n)}`), this);
    }
    eq(e, t) {
      return this.add(e, `eq`, t);
    }
    neq(e, t) {
      return this.add(e, `neq`, t);
    }
    gt(e, t) {
      return this.add(e, `gt`, t);
    }
    gte(e, t) {
      return this.add(e, `gte`, t);
    }
    lt(e, t) {
      return this.add(e, `lt`, t);
    }
    lte(e, t) {
      return this.add(e, `lte`, t);
    }
    in(e, t) {
      return this.add(e, `in`, t);
    }
    like(e, t) {
      return this.add(e, `like`, t);
    }
    ilike(e, t) {
      return this.add(e, `ilike`, t);
    }
    match(e, t) {
      return this.add(e, `match`, t);
    }
    imatch(e, t) {
      return this.add(e, `imatch`, t);
    }
    is(e, t) {
      return this.add(e, `is`, t);
    }
    isDistinct(e, t) {
      return this.add(e, `isdistinct`, t);
    }
    not(e, t, n) {
      return this.add(e, t, n, !0);
    }
    build() {
      return this.filters.join(`,`);
    }
    toString() {
      return this.build();
    }
  },
  jn;
(function (e) {
  ((e.ALL = `*`),
    (e.INSERT = `INSERT`),
    (e.UPDATE = `UPDATE`),
    (e.DELETE = `DELETE`));
})((jn ||= {}));
var Mn;
(function (e) {
  ((e.BROADCAST = `broadcast`),
    (e.PRESENCE = `presence`),
    (e.POSTGRES_CHANGES = `postgres_changes`),
    (e.SYSTEM = `system`));
})((Mn ||= {}));
var N;
(function (e) {
  ((e.SUBSCRIBED = `SUBSCRIBED`),
    (e.TIMED_OUT = `TIMED_OUT`),
    (e.CLOSED = `CLOSED`),
    (e.CHANNEL_ERROR = `CHANNEL_ERROR`));
})((N ||= {}));
