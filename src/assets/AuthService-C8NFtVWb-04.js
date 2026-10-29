// AuthService-C8NFtVWb 04 — headers
// Lines 1206-1457 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
function $e(...e) {
  return Qe(le(e));
}
var et = function () {
  return (
    (et =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }),
    et.apply(this, arguments)
  );
};
function tt(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function nt(e, t, n, r) {
  function i(e) {
    return e instanceof n
      ? e
      : new n(function (t) {
          t(e);
        });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      e.done ? n(e.value) : i(e.value).then(o, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function rt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var it = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  at = class extends Error {
    constructor(e, t = `FunctionsError`, n) {
      (super(e), (this.name = t), (this.context = n));
    }
    toJSON() {
      return { name: this.name, message: this.message, context: this.context };
    }
  },
  ot = class extends at {
    constructor(e) {
      super(
        `Failed to send a request to the Edge Function`,
        `FunctionsFetchError`,
        e,
      );
    }
  },
  st = class extends at {
    constructor(e) {
      super(`Relay Error invoking the Edge Function`, `FunctionsRelayError`, e);
    }
  },
  ct = class extends at {
    constructor(e) {
      super(
        `Edge Function returned a non-2xx status code`,
        `FunctionsHttpError`,
        e,
      );
    }
  },
  lt;
(function (e) {
  ((e.Any = `any`),
    (e.ApNortheast1 = `ap-northeast-1`),
    (e.ApNortheast2 = `ap-northeast-2`),
    (e.ApSouth1 = `ap-south-1`),
    (e.ApSoutheast1 = `ap-southeast-1`),
    (e.ApSoutheast2 = `ap-southeast-2`),
    (e.CaCentral1 = `ca-central-1`),
    (e.EuCentral1 = `eu-central-1`),
    (e.EuWest1 = `eu-west-1`),
    (e.EuWest2 = `eu-west-2`),
    (e.EuWest3 = `eu-west-3`),
    (e.SaEast1 = `sa-east-1`),
    (e.UsEast1 = `us-east-1`),
    (e.UsWest1 = `us-west-1`),
    (e.UsWest2 = `us-west-2`));
})((lt ||= {}));
var ut = class {
    constructor(
      e,
      { headers: t = {}, customFetch: n, region: r = lt.Any } = {},
    ) {
      ((this.url = e),
        (this.headers = t),
        (this.region = r),
        (this.fetch = it(n)));
    }
    setAuth(e) {
      this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e) {
      return nt(this, arguments, void 0, function* (e, t = {}) {
        let n, r;
        try {
          let { headers: i, method: a, body: o, signal: s, timeout: c } = t,
            l = {},
            { region: u } = t;
          u ||= this.region;
          let d = new URL(`${this.url}/${e}`);
          u &&
            u !== `any` &&
            ((l[`x-region`] = u), d.searchParams.set(`forceFunctionRegion`, u));
          let f,
            p =
              !!i &&
              Object.keys(i).some((e) => e.toLowerCase() === `content-type`);
          o && !p
            ? (typeof Blob < `u` && o instanceof Blob) ||
              o instanceof ArrayBuffer
              ? ((l[`Content-Type`] = `application/octet-stream`), (f = o))
              : typeof o == `string`
                ? ((l[`Content-Type`] = `text/plain`), (f = o))
                : typeof FormData < `u` && o instanceof FormData
                  ? (f = o)
                  : ((l[`Content-Type`] = `application/json`),
                    (f = JSON.stringify(o)))
            : (f =
                o &&
                typeof o != `string` &&
                !(typeof Blob < `u` && o instanceof Blob) &&
                !(o instanceof ArrayBuffer) &&
                !(typeof FormData < `u` && o instanceof FormData)
                  ? JSON.stringify(o)
                  : o);
          let m = s;
          c &&
            ((r = new AbortController()),
            (n = setTimeout(() => r.abort(), c)),
            s
              ? ((m = r.signal), s.addEventListener(`abort`, () => r.abort()))
              : (m = r.signal));
          let h = yield this.fetch(d.toString(), {
              method: a || `POST`,
              headers: Object.assign(
                Object.assign(Object.assign({}, l), this.headers),
                i,
              ),
              body: f,
              signal: m,
            }).catch((e) => {
              throw new ot(e);
            }),
            g = h.headers.get(`x-relay-error`);
          if (g && g === `true`) throw new st(h);
          if (!h.ok) throw new ct(h);
          let _ = (h.headers.get(`Content-Type`) ?? `text/plain`)
              .split(`;`)[0]
              .trim(),
            v;
          return (
            (v =
              _ === `application/json`
                ? yield h.json()
                : _ === `application/octet-stream` || _ === `application/pdf`
                  ? yield h.blob()
                  : _ === `text/event-stream`
                    ? h
                    : _ === `multipart/form-data`
                      ? yield h.formData()
                      : yield h.text()),
            { data: v, error: null, response: h }
          );
        } catch (e) {
          return {
            data: null,
            error: e,
            response: e instanceof ct || e instanceof st ? e.context : void 0,
          };
        } finally {
          n && clearTimeout(n);
        }
      });
    }
  },
  dt = 3,
  ft = (e) => Math.min(1e3 * 2 ** e, 3e4),
  pt = [520, 503],
  mt = [`GET`, `HEAD`, `OPTIONS`],
  ht = class extends Error {
    constructor(e) {
      (super(e.message),
        (this.name = `PostgrestError`),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        details: this.details,
        hint: this.hint,
        code: this.code,
      };
    }
  };
function gt(e, t) {
  return new Promise((n) => {
    if (t?.aborted) {
      n();
      return;
    }
    let r = setTimeout(() => {
      (t?.removeEventListener(`abort`, i), n());
    }, e);
    function i() {
      (clearTimeout(r), n());
    }
    t?.addEventListener(`abort`, i);
  });
}
function _t(e, t, n, r) {
  return !(!r || n >= dt || !mt.includes(e) || !pt.includes(t));
}
