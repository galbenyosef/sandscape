// AuthService-C8NFtVWb 17 — queuedbits
// Lines 6598-6942 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function L(e) {
  return typeof e == `object` && !!e && `__isAuthError` in e;
}
var Xr = class extends Yr {
  constructor(e, t, n) {
    (super(e, t, n),
      (this.name = `AuthApiError`),
      (this.status = t),
      (this.code = n));
  }
};
function Zr(e) {
  return L(e) && e.name === `AuthApiError`;
}
var R = class extends Yr {
    constructor(e, t) {
      (super(e), (this.name = `AuthUnknownError`), (this.originalError = t));
    }
  },
  z = class extends Yr {
    constructor(e, t, n, r) {
      (super(e, n, r), (this.name = t), (this.status = n));
    }
  },
  B = class extends z {
    constructor() {
      super(`Auth session missing!`, `AuthSessionMissingError`, 400, void 0);
    }
  };
function Qr(e) {
  return L(e) && e.name === `AuthSessionMissingError`;
}
var $r = class extends z {
    constructor() {
      super(
        `Auth session or user missing`,
        `AuthInvalidTokenResponseError`,
        500,
        void 0,
      );
    }
  },
  ei = class extends z {
    constructor(e) {
      super(e, `AuthInvalidCredentialsError`, 400, void 0);
    }
  },
  ti = class extends z {
    constructor(e, t = null) {
      (super(e, `AuthImplicitGrantRedirectError`, 500, void 0),
        (this.details = null),
        (this.details = t));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        details: this.details,
      });
    }
  };
function ni(e) {
  return L(e) && e.name === `AuthImplicitGrantRedirectError`;
}
var ri = class extends z {
    constructor(e, t = null) {
      (super(e, `AuthPKCEGrantCodeExchangeError`, 500, void 0),
        (this.details = null),
        (this.details = t));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        details: this.details,
      });
    }
  },
  ii = class extends z {
    constructor() {
      super(
        `PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,
        `AuthPKCECodeVerifierMissingError`,
        400,
        `pkce_code_verifier_not_found`,
      );
    }
  },
  ai = class extends z {
    constructor(e, t) {
      super(e, `AuthRetryableFetchError`, t, void 0);
    }
  };
function oi(e) {
  return L(e) && e.name === `AuthRetryableFetchError`;
}
var si = class extends z {
  constructor(
    e = `Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`,
  ) {
    super(e, `AuthRefreshDiscardedError`, 409, void 0);
  }
};
function ci(e) {
  return L(e) && e.name === `AuthRefreshDiscardedError`;
}
var li = class extends z {
    constructor(e, t, n) {
      (super(e, `AuthWeakPasswordError`, t, `weak_password`),
        (this.reasons = n));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        reasons: this.reasons,
      });
    }
  },
  ui = class extends z {
    constructor(e) {
      super(e, `AuthInvalidJwtError`, 400, `invalid_jwt`);
    }
  },
  di = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(
    ``,
  ),
  fi = ` 	
\r=`.split(``),
  pi = (() => {
    let e = Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < fi.length; t += 1) e[fi[t].charCodeAt(0)] = -2;
    for (let t = 0; t < di.length; t += 1) e[di[t].charCodeAt(0)] = t;
    return e;
  })();
function mi(e, t, n) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6;)
      (n(di[(t.queue >> (t.queuedBits - 6)) & 63]), (t.queuedBits -= 6));
  else if (t.queuedBits > 0)
    for (t.queue <<= 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6;)
      (n(di[(t.queue >> (t.queuedBits - 6)) & 63]), (t.queuedBits -= 6));
}
function hi(e, t, n) {
  let r = pi[e];
  if (r > -1)
    for (t.queue = (t.queue << 6) | r, t.queuedBits += 6; t.queuedBits >= 8;)
      (n((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else if (r === -2) return;
  else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
}
function gi(e) {
  let t = [],
    n = (e) => {
      t.push(String.fromCodePoint(e));
    },
    r = { utf8seq: 0, codepoint: 0 },
    i = { queue: 0, queuedBits: 0 },
    a = (e) => {
      yi(e, r, n);
    };
  for (let t = 0; t < e.length; t += 1) hi(e.charCodeAt(t), i, a);
  return t.join(``);
}
function _i(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63)));
    return;
  }
  throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function vi(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      let t = ((r - 55296) * 1024) & 65535;
      ((r = (((e.charCodeAt(n + 1) - 56320) & 65535) | t) + 65536), (n += 1));
    }
    _i(r, t);
  }
}
function yi(e, t, n) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      n(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!((e >> (7 - n)) & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw Error(`Invalid UTF-8 sequence`);
    --t.utf8seq;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw Error(`Invalid UTF-8 sequence`);
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      --t.utf8seq,
      t.utf8seq === 0 && n(t.codepoint));
  }
}
function bi(e) {
  let t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (e) => {
      t.push(e);
    };
  for (let t = 0; t < e.length; t += 1) hi(e.charCodeAt(t), n, r);
  return new Uint8Array(t);
}
function xi(e) {
  let t = [];
  return (vi(e, (e) => t.push(e)), new Uint8Array(t));
}
function V(e) {
  let t = [],
    n = { queue: 0, queuedBits: 0 },
    r = (e) => {
      t.push(e);
    };
  return (e.forEach((e) => mi(e, n, r)), mi(null, n, r), t.join(``));
}
function Si(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function Ci() {
  return Symbol(`auth-callback`);
}
var H = () => typeof window < `u` && typeof document < `u`,
  U = { tested: !1, writable: !1 },
  wi = () => {
    if (!H()) return !1;
    try {
      if (typeof globalThis.localStorage != `object`) return !1;
    } catch {
      return !1;
    }
    if (U.tested) return U.writable;
    let e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (U.tested = !0),
        (U.writable = !0));
    } catch {
      ((U.tested = !0), (U.writable = !1));
    }
    return U.writable;
  };
function Ti(e) {
  let t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === `#`)
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
        t[n] = e;
      });
    } catch {}
  return (
    n.searchParams.forEach((e, n) => {
      t[n] = e;
    }),
    t
  );
}
var Ei = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  Di = (e) =>
    typeof e == `object` &&
    !!e &&
    `status` in e &&
    `ok` in e &&
    `json` in e &&
    typeof e.json == `function`,
  Oi = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  W = async (e, t) => {
    let n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return null;
    }
  },
  G = async (e, t) => {
    await e.removeItem(t);
  },
  ki = class e {
    constructor() {
      this.promise = new e.promiseConstructor((e, t) => {
        ((this.resolve = e), (this.reject = t));
      });
    }
  };
ki.promiseConstructor = Promise;
function Ai(e) {
  let t = e.split(`.`);
  if (t.length !== 3) throw new ui(`Invalid JWT structure`);
  for (let e = 0; e < t.length; e++)
    if (!Jr.test(t[e])) throw new ui(`JWT not in base64url format`);
  return {
    header: JSON.parse(gi(t[0])),
    payload: JSON.parse(gi(t[1])),
    signature: bi(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function ji(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function Mi(e, t) {
  return new Promise((n, r) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          let r = await e(i);
          if (!t(i, null, r)) {
            n(r);
            return;
          }
        } catch (e) {
          if (!t(i, e)) {
            r(e);
            return;
          }
        }
    })();
  });
}
function Ni(e) {
  return (`0` + e.toString(16)).substr(-2);
}
