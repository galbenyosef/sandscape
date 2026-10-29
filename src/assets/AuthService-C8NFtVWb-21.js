// AuthService-C8NFtVWb 21 — data
// Lines 8004-8303 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function va(e) {
  if (`toJSON` in e && typeof e.toJSON == `function`) return e.toJSON();
  let t = e,
    n = e.getClientExtensionResults(),
    r = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: V(new Uint8Array(r.authenticatorData)),
      clientDataJSON: V(new Uint8Array(r.clientDataJSON)),
      signature: V(new Uint8Array(r.signature)),
      userHandle: r.userHandle ? V(new Uint8Array(r.userHandle)) : void 0,
    },
    type: `public-key`,
    clientExtensionResults: n,
    authenticatorAttachment: t.authenticatorAttachment ?? void 0,
  };
}
function ya(e) {
  return e === `localhost` || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function ba() {
  return !!(
    H() &&
    `PublicKeyCredential` in window &&
    window.PublicKeyCredential &&
    `credentials` in navigator &&
    typeof (navigator == null ? void 0 : navigator.credentials)?.create ==
      `function` &&
    typeof (navigator == null ? void 0 : navigator.credentials)?.get ==
      `function`
  );
}
async function xa(e) {
  try {
    let t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new da(`Browser returned unexpected credential type`, t),
          }
      : { data: null, error: new da(`Empty credential response`, t) };
  } catch (t) {
    return { data: null, error: fa({ error: t, options: e }) };
  }
}
async function Sa(e) {
  try {
    let t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new da(`Browser returned unexpected credential type`, t),
          }
      : { data: null, error: new da(`Empty credential response`, t) };
  } catch (t) {
    return { data: null, error: pa({ error: t, options: e }) };
  }
}
var Ca = {
    hints: [`security-key`],
    authenticatorSelection: {
      authenticatorAttachment: `cross-platform`,
      requireResidentKey: !1,
      userVerification: `preferred`,
      residentKey: `discouraged`,
    },
    attestation: `direct`,
  },
  wa = {
    userVerification: `preferred`,
    hints: [`security-key`],
    attestation: `direct`,
  };
function Ta(...e) {
  let t = (e) => typeof e == `object` && !!e && !Array.isArray(e),
    n = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e),
    r = {};
  for (let i of e)
    if (i)
      for (let e in i) {
        let a = i[e];
        if (a !== void 0)
          if (Array.isArray(a)) r[e] = a;
          else if (n(a)) r[e] = a;
          else if (t(a)) {
            let n = r[e];
            t(n) ? (r[e] = Ta(n, a)) : (r[e] = Ta(a));
          } else r[e] = a;
      }
  return r;
}
function Ea(e, t) {
  return Ta(Ca, e, t || {});
}
function Da(e, t) {
  return Ta(wa, e, t || {});
}
var Oa = class {
  constructor(e) {
    ((this.client = e),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(e) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, e), { factorType: `webauthn` }),
    );
  }
  async _challenge(
    { factorId: e, webauthn: t, friendlyName: n, signal: r },
    i,
  ) {
    try {
      let { data: a, error: o } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t,
      });
      if (!a) return { data: null, error: o };
      let s = r ?? ma.createNewAbortSignal();
      if (a.webauthn.type === `create`) {
        let { user: e } = a.webauthn.credential_options.publicKey;
        if (!e.name) {
          let t = n;
          if (t) e.name = `${e.id}:${t}`;
          else {
            let t = (await this.client.getUser()).data.user,
              n = t?.user_metadata?.name || t?.email || t?.id || `User`;
            e.name = `${e.id}:${n}`;
          }
        }
        e.displayName ||= e.name;
      }
      switch (a.webauthn.type) {
        case `create`: {
          let { data: t, error: n } = await xa({
            publicKey: Ea(a.webauthn.credential_options.publicKey, i?.create),
            signal: s,
          });
          return t
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: t },
                },
                error: null,
              }
            : { data: null, error: n };
        }
        case `request`: {
          let t = Da(a.webauthn.credential_options.publicKey, i?.request),
            { data: n, error: r } = await Sa(
              Object.assign(Object.assign({}, a.webauthn.credential_options), {
                publicKey: t,
                signal: s,
              }),
            );
          return n
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: n },
                },
                error: null,
              }
            : { data: null, error: r };
        }
      }
    } catch (e) {
      return L(e)
        ? { data: null, error: e }
        : { data: null, error: new R(`Unexpected error in challenge`, e) };
    }
  }
  async _verify({ challengeId: e, factorId: t, webauthn: n }) {
    return this.client.mfa.verify({ factorId: t, challengeId: e, webauthn: n });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: t = typeof window < `u` ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < `u` ? [window.location.origin] : void 0,
        signal: r,
      } = {},
    },
    i,
  ) {
    if (!t)
      return {
        data: null,
        error: new Yr(`rpId is required for WebAuthn authentication`),
      };
    try {
      if (!ba())
        return {
          data: null,
          error: new R(`Browser does not support WebAuthn`, null),
        };
      let { data: a, error: o } = await this.challenge(
        { factorId: e, webauthn: { rpId: t, rpOrigins: n }, signal: r },
        { request: i },
      );
      if (!a) return { data: null, error: o };
      let { webauthn: s } = a;
      return this._verify({
        factorId: e,
        challengeId: a.challengeId,
        webauthn: {
          type: s.type,
          rpId: t,
          rpOrigins: n,
          credential_response: s.credential_response,
        },
      });
    } catch (e) {
      return L(e)
        ? { data: null, error: e }
        : { data: null, error: new R(`Unexpected error in authenticate`, e) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: t = typeof window < `u` ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < `u` ? [window.location.origin] : void 0,
        signal: r,
      } = {},
    },
    i,
  ) {
    if (!t)
      return {
        data: null,
        error: new Yr(`rpId is required for WebAuthn registration`),
      };
    try {
      if (!ba())
        return {
          data: null,
          error: new R(`Browser does not support WebAuthn`, null),
        };
      let { data: a, error: o } = await this._enroll({ friendlyName: e });
      if (!a)
        return (
          await this.client.mfa
            .listFactors()
            .then((t) =>
              t.data?.all.find(
                (t) =>
                  t.factor_type === `webauthn` &&
                  t.friendly_name === e &&
                  t.status !== `unverified`,
              ),
            )
            .then((e) =>
              e ? this.client.mfa.unenroll({ factorId: e?.id }) : void 0,
            ),
          { data: null, error: o }
        );
      let { data: s, error: c } = await this._challenge(
        {
          factorId: a.id,
          friendlyName: a.friendly_name,
          webauthn: { rpId: t, rpOrigins: n },
          signal: r,
        },
        { create: i },
      );
      return s
        ? this._verify({
            factorId: a.id,
            challengeId: s.challengeId,
            webauthn: {
              rpId: t,
              rpOrigins: n,
              type: s.webauthn.type,
              credential_response: s.webauthn.credential_response,
            },
          })
        : { data: null, error: c };
    } catch (e) {
      return L(e)
        ? { data: null, error: e }
        : { data: null, error: new R(`Unexpected error in register`, e) };
    }
  }
};
oa();
