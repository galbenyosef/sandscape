// AuthService-C8NFtVWb 18 — error
// Lines 6943-7240 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function Pi() {
  let e = new Uint32Array(56);
  if (typeof crypto > `u`) {
    let e = ``;
    for (let t = 0; t < 56; t++)
      e +=
        `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(
          Math.floor(Math.random() * 66),
        );
    return e;
  }
  return (crypto.getRandomValues(e), Array.from(e, Ni).join(``));
}
async function Fi(e) {
  let t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest(`SHA-256`, t),
    r = new Uint8Array(n);
  return Array.from(r)
    .map((e) => String.fromCharCode(e))
    .join(``);
}
async function Ii(e) {
  if (!(
    typeof crypto < `u` &&
    crypto.subtle !== void 0 &&
    typeof TextEncoder < `u`
  ))
    return (
      console.warn(
        `WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`,
      ),
      e
    );
  let t = await Fi(e);
  return btoa(t).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``);
}
async function Li(e, t, n = !1) {
  let r = Pi(),
    i = r;
  (n && (i += `/recovery`), await Oi(e, `${t}-code-verifier`, i));
  let a = await Ii(r);
  return [a, r === a ? `plain` : `s256`];
}
var Ri = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function zi(e) {
  let t = e.headers.get(Kr);
  if (!t || !t.match(Ri)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Bi(e) {
  if (!e) throw Error(`Missing exp claim`);
  if (e <= Math.floor(Date.now() / 1e3)) throw Error(`JWT has expired`);
}
function Vi(e) {
  switch (e) {
    case `RS256`:
      return { name: `RSASSA-PKCS1-v1_5`, hash: { name: `SHA-256` } };
    case `ES256`:
      return { name: `ECDSA`, namedCurve: `P-256`, hash: { name: `SHA-256` } };
    default:
      throw Error(`Invalid alg claim`);
  }
}
var Hi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function K(e) {
  if (!Hi.test(e))
    throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`);
}
function q(e) {
  if (!e.passkey)
    throw Error(
      "@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).",
    );
}
function Ui() {
  return new Proxy(
    {},
    {
      get: (e, t) => {
        if (t === `__isUserNotAvailableProxy`) return !0;
        if (typeof t == `symbol`) {
          let e = t.toString();
          if (
            e === `Symbol(Symbol.toPrimitive)` ||
            e === `Symbol(Symbol.toStringTag)` ||
            e === `Symbol(util.inspect.custom)`
          )
            return;
        }
        throw Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`,
        );
      },
      set: (e, t) => {
        throw Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
        );
      },
      deleteProperty: (e, t) => {
        throw Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
        );
      },
    },
  );
}
function Wi(e, t) {
  return new Proxy(e, {
    get: (e, n, r) => {
      if (n === `__isInsecureUserWarningProxy`) return !0;
      if (typeof n == `symbol`) {
        let t = n.toString();
        if (
          t === `Symbol(Symbol.toPrimitive)` ||
          t === `Symbol(Symbol.toStringTag)` ||
          t === `Symbol(util.inspect.custom)` ||
          t === `Symbol(nodejs.util.inspect.custom)`
        )
          return Reflect.get(e, n, r);
      }
      return (
        !t.value &&
          typeof n == `string` &&
          (console.warn(
            `Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`,
          ),
          (t.value = !0)),
        Reflect.get(e, n, r)
      );
    },
  });
}
function Gi(e) {
  return JSON.parse(JSON.stringify(e));
}
var Ki = (e) => {
    if (typeof e == `object` && e) {
      let t = e;
      if (typeof t.msg == `string`) return t.msg;
      if (typeof t.message == `string`) return t.message;
      if (typeof t.error_description == `string`) return t.error_description;
      if (typeof t.error == `string`) return t.error;
    }
    return JSON.stringify(e);
  },
  qi = [
    500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529,
    530,
  ];
async function Ji(e) {
  if (!Di(e)) throw new ai(Ki(e), 0);
  if (qi.includes(e.status)) throw new ai(Ki(e), e.status);
  let t;
  try {
    t = await e.json();
  } catch (e) {
    throw new R(Ki(e), e);
  }
  let n,
    r = zi(e);
  if (
    (r &&
    r.getTime() >= qr[`2024-01-01`].timestamp &&
    typeof t == `object` &&
    t &&
    typeof t.code == `string`
      ? (n = t.code)
      : typeof t == `object` &&
        t &&
        typeof t.error_code == `string` &&
        (n = t.error_code),
    !n)
  ) {
    if (
      typeof t == `object` &&
      t &&
      typeof t.weak_password == `object` &&
      t.weak_password &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.reasons.reduce((e, t) => e && typeof t == `string`, !0)
    )
      throw new li(Ki(t), e.status, t.weak_password.reasons);
  } else if (n === `weak_password`)
    throw new li(Ki(t), e.status, t.weak_password?.reasons || []);
  else if (n === `session_not_found`) throw new B();
  throw new Xr(Ki(t), e.status || 500, n);
}
var Yi = (e, t, n, r) => {
  let i = { method: e, headers: t?.headers || {} };
  return e === `GET`
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": `application/json;charset=UTF-8` },
        t?.headers,
      )),
      (i.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, i), n));
};
async function J(e, t, n, r) {
  let i = Object.assign({}, r?.headers);
  (i[`X-Supabase-Api-Version`] || (i[Kr] = qr[`2024-01-01`].name),
    r?.jwt && (i.Authorization = `Bearer ${r.jwt}`));
  let a = r?.query ?? {};
  r?.redirectTo && (a.redirect_to = r.redirectTo);
  let o = await Xi(
    e,
    t,
    n + (Object.keys(a).length ? `?` + new URLSearchParams(a).toString() : ``),
    { headers: i, noResolveJson: r?.noResolveJson },
    {},
    r?.body,
  );
  return r?.xform ? r?.xform(o) : { data: Object.assign({}, o), error: null };
}
async function Xi(e, t, n, r, i, a) {
  let o = Yi(t, r, i, a),
    s;
  try {
    s = await e(n, Object.assign({}, o));
  } catch (e) {
    throw (console.error(e), new ai(Ki(e), 0));
  }
  if ((s.ok || (await Ji(s)), r?.noResolveJson)) return s;
  try {
    return await s.json();
  } catch (e) {
    await Ji(e);
  }
}
function Y(e) {
  let t = null;
  ta(e) &&
    ((t = Object.assign({}, e)),
    e.expires_at || (t.expires_at = Si(e.expires_in)));
  let n = e.user ?? (typeof e?.id == `string` ? e : null);
  return { data: { session: t, user: n }, error: null };
}
function Zi(e) {
  let t = Y(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == `object` &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == `string` &&
      e.weak_password.reasons.reduce((e, t) => e && typeof t == `string`, !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function X(e) {
  return { data: { user: e.user ?? e }, error: null };
}
function Qi(e) {
  return { data: e, error: null };
}
function $i(e) {
  let {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: a,
    } = e,
    o = tt(e, [
      `action_link`,
      `email_otp`,
      `hashed_token`,
      `redirect_to`,
      `verification_type`,
    ]);
  return {
    data: {
      properties: {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: i,
        verification_type: a,
      },
      user: Object.assign({}, o),
    },
    error: null,
  };
}
function ea(e) {
  return e;
}
function ta(e) {
  return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
