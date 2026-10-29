// AuthService-C8NFtVWb 20 — message
// Lines 7655-8003 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function ia(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
globalThis &&
  wi() &&
  globalThis.localStorage &&
  globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);
var aa = class extends Error {
  constructor(e) {
    (super(e), (this.isAcquireTimeout = !0));
  }
};
function oa() {
  if (typeof globalThis != `object`)
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < `u` && (self.globalThis = self);
    }
}
function sa(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function ca(e) {
  return parseInt(e, 16);
}
function la(e) {
  let t = new TextEncoder().encode(e);
  return `0x` + Array.from(t, (e) => e.toString(16).padStart(2, `0`)).join(``);
}
function ua(e) {
  let {
    chainId: t,
    domain: n,
    expirationTime: r,
    issuedAt: i = new Date(),
    nonce: a,
    notBefore: o,
    requestId: s,
    resources: c,
    scheme: l,
    uri: u,
    version: d,
  } = e;
  if (!Number.isInteger(t))
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`,
    );
  if (!n)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`,
    );
  if (a && a.length < 8)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`,
    );
  if (!u)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`,
    );
  if (d !== `1`)
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`,
    );
  if (
    e.statement?.includes(`
`)
  )
    throw Error(
      `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
    );
  let f = sa(e.address),
    p = `${l ? `${l}://${n}` : n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement ? `${e.statement}\n` : ``}`,
    m = `URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a ? `\nNonce: ${a}` : ``}\nIssued At: ${i.toISOString()}`;
  if (
    (r && (m += `\nExpiration Time: ${r.toISOString()}`),
    o && (m += `\nNot Before: ${o.toISOString()}`),
    s && (m += `\nRequest ID: ${s}`),
    c)
  ) {
    let e = `
Resources:`;
    for (let t of c) {
      if (!t || typeof t != `string`)
        throw Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`,
        );
      e += `\n- ${t}`;
    }
    m += e;
  }
  return `${p}\n${m}`;
}
var Z = class extends Error {
    constructor({ message: e, code: t, cause: n, name: r }) {
      (super(e, { cause: n }),
        (this.__isWebAuthnError = !0),
        (this.name =
          r ?? (n instanceof Error ? n.name : void 0) ?? `Unknown Error`),
        (this.code = t));
    }
    toJSON() {
      return { name: this.name, message: this.message, code: this.code };
    }
  },
  da = class extends Z {
    constructor(e, t) {
      (super({
        code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
        cause: t,
        message: e,
      }),
        (this.name = `WebAuthnUnknownError`),
        (this.originalError = t));
    }
  };
function fa({ error: e, options: t }) {
  let { publicKey: n } = t;
  if (!n) throw Error(`options was missing required publicKey property`);
  if (e.name === `AbortError`) {
    if (t.signal instanceof AbortSignal)
      return new Z({
        message: `Registration ceremony was sent an abort signal`,
        code: `ERROR_CEREMONY_ABORTED`,
        cause: e,
      });
  } else if (e.name === `ConstraintError`) {
    if (n.authenticatorSelection?.requireResidentKey === !0)
      return new Z({
        message: `Discoverable credentials were required but no available authenticator supported it`,
        code: `ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,
        cause: e,
      });
    if (
      t.mediation === `conditional` &&
      n.authenticatorSelection?.userVerification === `required`
    )
      return new Z({
        message: `User verification was required during automatic registration but it could not be performed`,
        code: `ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,
        cause: e,
      });
    if (n.authenticatorSelection?.userVerification === `required`)
      return new Z({
        message: `User verification was required but no available authenticator supported it`,
        code: `ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,
        cause: e,
      });
  } else if (e.name === `InvalidStateError`)
    return new Z({
      message: `The authenticator was previously registered`,
      code: `ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,
      cause: e,
    });
  else if (e.name === `NotAllowedError`)
    return new Z({
      message: e.message,
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: e,
    });
  else if (e.name === `NotSupportedError`)
    return n.pubKeyCredParams.filter((e) => e.type === `public-key`).length ===
      0
      ? new Z({
          message: `No entry in pubKeyCredParams was of type "public-key"`,
          code: `ERROR_MALFORMED_PUBKEYCREDPARAMS`,
          cause: e,
        })
      : new Z({
          message: `No available authenticator supported any of the specified pubKeyCredParams algorithms`,
          code: `ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,
          cause: e,
        });
  else if (e.name === `SecurityError`) {
    let t = window.location.hostname;
    if (!ya(t))
      return new Z({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: e,
      });
    if (n.rp.id !== t)
      return new Z({
        message: `The RP ID "${n.rp.id}" is invalid for this domain`,
        code: `ERROR_INVALID_RP_ID`,
        cause: e,
      });
  } else if (e.name === `TypeError`) {
    if (n.user.id.byteLength < 1 || n.user.id.byteLength > 64)
      return new Z({
        message: `User ID was not between 1 and 64 characters`,
        code: `ERROR_INVALID_USER_ID_LENGTH`,
        cause: e,
      });
  } else if (e.name === `UnknownError`)
    return new Z({
      message: `The authenticator was unable to process the specified options, or could not create a new credential`,
      code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
      cause: e,
    });
  return new Z({
    message: `a Non-Webauthn related error has occurred`,
    code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
    cause: e,
  });
}
function pa({ error: e, options: t }) {
  let { publicKey: n } = t;
  if (!n) throw Error(`options was missing required publicKey property`);
  if (e.name === `AbortError`) {
    if (t.signal instanceof AbortSignal)
      return new Z({
        message: `Authentication ceremony was sent an abort signal`,
        code: `ERROR_CEREMONY_ABORTED`,
        cause: e,
      });
  } else if (e.name === `NotAllowedError`)
    return new Z({
      message: e.message,
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: e,
    });
  else if (e.name === `SecurityError`) {
    let t = window.location.hostname;
    if (!ya(t))
      return new Z({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: e,
      });
    if (n.rpId !== t)
      return new Z({
        message: `The RP ID "${n.rpId}" is invalid for this domain`,
        code: `ERROR_INVALID_RP_ID`,
        cause: e,
      });
  } else if (e.name === `UnknownError`)
    return new Z({
      message: `The authenticator was unable to process the specified options, or could not create a new assertion signature`,
      code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
      cause: e,
    });
  return new Z({
    message: `a Non-Webauthn related error has occurred`,
    code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
    cause: e,
  });
}
var ma = new (class {
  createNewAbortSignal() {
    if (this.controller) {
      let e = Error(`Cancelling existing WebAuthn API call for new one`);
      ((e.name = `AbortError`), this.controller.abort(e));
    }
    let e = new AbortController();
    return ((this.controller = e), e.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      let e = Error(`Manually cancelling existing WebAuthn API call`);
      ((e.name = `AbortError`),
        this.controller.abort(e),
        (this.controller = void 0));
    }
  }
})();
function ha(e) {
  if (!e) throw Error(`Credential creation options are required`);
  if (
    typeof PublicKeyCredential < `u` &&
    `parseCreationOptionsFromJSON` in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == `function`
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  let { challenge: t, user: n, excludeCredentials: r } = e,
    i = tt(e, [`challenge`, `user`, `excludeCredentials`]),
    a = bi(t).buffer,
    o = Object.assign(Object.assign({}, n), { id: bi(n.id).buffer }),
    s = Object.assign(Object.assign({}, i), { challenge: a, user: o });
  if (r && r.length > 0) {
    s.excludeCredentials = Array(r.length);
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      s.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
        id: bi(t.id).buffer,
        type: t.type || `public-key`,
        transports: t.transports,
      });
    }
  }
  return s;
}
function ga(e) {
  if (!e) throw Error(`Credential request options are required`);
  if (
    typeof PublicKeyCredential < `u` &&
    `parseRequestOptionsFromJSON` in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == `function`
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  let { challenge: t, allowCredentials: n } = e,
    r = tt(e, [`challenge`, `allowCredentials`]),
    i = bi(t).buffer,
    a = Object.assign(Object.assign({}, r), { challenge: i });
  if (n && n.length > 0) {
    a.allowCredentials = Array(n.length);
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
        id: bi(t.id).buffer,
        type: t.type || `public-key`,
        transports: t.transports,
      });
    }
  }
  return a;
}
function _a(e) {
  if (`toJSON` in e && typeof e.toJSON == `function`) return e.toJSON();
  let t = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: V(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: V(new Uint8Array(e.response.clientDataJSON)),
    },
    type: `public-key`,
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment: t.authenticatorAttachment ?? void 0,
  };
}
