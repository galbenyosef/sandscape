// AuthService-C8NFtVWb 15 — headers
// Lines 5452-5601 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var ir = class extends nr {
    constructor(e, t, n, r = `storage`) {
      (super(e, r, t, n),
        (this.name =
          r === `vectors` ? `StorageVectorsApiError` : `StorageApiError`),
        (this.status = t),
        (this.statusCode = n));
    }
    toJSON() {
      return P({}, super.toJSON());
    }
  },
  ar = class extends nr {
    constructor(e, t, n = `storage`) {
      (super(e, n),
        (this.name =
          n === `vectors`
            ? `StorageVectorsUnknownError`
            : `StorageUnknownError`),
        (this.originalError = t));
    }
  };
function or(e, t, n) {
  let r = P({}, e),
    i = t.toLowerCase();
  for (let e of Object.keys(r)) e.toLowerCase() === i && delete r[e];
  return ((r[i] = n), r);
}
function sr(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n.toLowerCase()] = r;
  return t;
}
var cr = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  lr = (e) => {
    if (typeof e != `object` || !e) return !1;
    let t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ur = (e) => {
    if (Array.isArray(e)) return e.map((e) => ur(e));
    if (typeof e == `function` || e !== Object(e)) return e;
    let t = {};
    return (
      Object.entries(e).forEach(([e, n]) => {
        let r = e.replace(/([-_][a-z])/gi, (e) =>
          e.toUpperCase().replace(/[-_]/g, ``),
        );
        t[r] = ur(n);
      }),
      t
    );
  },
  dr = (e) =>
    !e ||
    typeof e != `string` ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes(`/`) ||
    e.includes(`\\`)
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e),
  fr = (e) => {
    if (typeof e == `object` && e) {
      let t = e;
      if (typeof t.msg == `string`) return t.msg;
      if (typeof t.message == `string`) return t.message;
      if (typeof t.error_description == `string`) return t.error_description;
      if (typeof t.error == `string`) return t.error;
      if (typeof t.error == `object` && t.error !== null) {
        let e = t.error;
        if (typeof e.message == `string`) return e.message;
      }
    }
    return JSON.stringify(e);
  },
  pr = async (e, t, n, r) => {
    if (
      typeof e == `object` &&
      e &&
      `json` in e &&
      typeof e.json == `function`
    ) {
      let n = e,
        i = parseInt(String(n.status), 10);
      (Number.isFinite(i) || (i = 500),
        n
          .json()
          .then((e) => {
            let n = e?.statusCode || e?.code || i + ``;
            t(new ir(fr(e), i, n, r));
          })
          .catch(() => {
            let e = i + ``;
            t(new ir(n.statusText || `HTTP ${i} error`, i, e, r));
          }));
    } else t(new ar(fr(e), e, r));
  },
  mr = (e, t, n, r) => {
    let i = { method: e, headers: t?.headers || {} };
    if (e === `GET` || e === `HEAD` || !r) return P(P({}, i), n);
    if (lr(r)) {
      let e = t?.headers || {},
        n;
      for (let [t, r] of Object.entries(e))
        t.toLowerCase() === `content-type` && (n = r);
      ((i.headers = or(e, `Content-Type`, n ?? `application/json`)),
        (i.body = JSON.stringify(r)));
    } else i.body = r;
    return (t?.duplex && (i.duplex = t.duplex), P(P({}, i), n));
  };
async function hr(e, t, n, r, i, a, o) {
  return new Promise((s, c) => {
    e(n, mr(t, r, i, a))
      .then((e) => {
        if (!e.ok) throw e;
        if (r?.noResolveJson) return e;
        if (o === `vectors`) {
          let t = e.headers.get(`content-type`);
          if (
            e.headers.get(`content-length`) === `0` ||
            e.status === 204 ||
            !t ||
            !t.includes(`application/json`)
          )
            return {};
        }
        return e.json();
      })
      .then((e) => s(e))
      .catch((e) => pr(e, c, r, o));
  });
}
function gr(e = `storage`) {
  return {
    get: async (t, n, r, i) => hr(t, `GET`, n, r, i, void 0, e),
    post: async (t, n, r, i, a) => hr(t, `POST`, n, i, a, r, e),
    put: async (t, n, r, i, a) => hr(t, `PUT`, n, i, a, r, e),
    head: async (t, n, r, i) =>
      hr(t, `HEAD`, n, P(P({}, r), {}, { noResolveJson: !0 }), i, void 0, e),
    remove: async (t, n, r, i, a) => hr(t, `DELETE`, n, i, a, r, e),
  };
}
