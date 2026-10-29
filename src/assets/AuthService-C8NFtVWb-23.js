// AuthService-C8NFtVWb 23 — headers
// Lines 11255-11553 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
ja.nextInstanceID = {};
var Ma = ja,
  Na = `2.109.0`,
  Pa = ``,
  Fa;
typeof Deno < `u`
  ? ((Pa = `deno`), (Fa = Deno.version?.deno))
  : typeof document < `u`
    ? (Pa = `web`)
    : typeof navigator < `u` && navigator.product === `ReactNative`
      ? (Pa = `react-native`)
      : ((Pa = `node`),
        (Fa =
          typeof process < `u` ? process.version?.replace(/^v/, ``) : void 0));
var Ia = [`runtime=${Pa}`];
Fa && Ia.push(`runtime-version=${Fa}`);
var La = {
    headers: { "X-Client-Info": `supabase-js/${Na}; ${Ia.join(`; `)}` },
  },
  Ra = { schema: `public` },
  za = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: `implicit`,
  },
  Ba = {},
  Va = { enabled: !1, respectSamplingDecision: !0 };
function Ha(e, t, n, r) {
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
var Ua = null,
  Wa = `@opentelemetry/api`;
function Ga() {
  return (Ua === null && (Ua = r(() => import(Wa), []).catch(() => null)), Ua);
}
function Ka() {
  return Ha(this, void 0, void 0, function* () {
    try {
      let e = yield Ga();
      if (!e || !e.propagation || !e.context) return null;
      let t = {};
      e.propagation.inject(e.context.active(), t);
      let n = t.traceparent;
      return n
        ? { traceparent: n, tracestate: t.tracestate, baggage: t.baggage }
        : null;
    } catch {
      return null;
    }
  });
}
function qa(e) {
  if (!e || typeof e != `string`) return null;
  let t = e.split(`-`);
  if (t.length !== 4) return null;
  let [n, r, i, a] = t;
  if (n.length !== 2 || r.length !== 32 || i.length !== 16 || a.length !== 2)
    return null;
  let o = /^[0-9a-f]+$/i;
  return !o.test(n) ||
    !o.test(r) ||
    !o.test(i) ||
    !o.test(a) ||
    r === `00000000000000000000000000000000` ||
    i === `0000000000000000`
    ? null
    : {
        version: n,
        traceId: r,
        parentId: i,
        traceFlags: a,
        isSampled: (parseInt(a, 16) & 1) == 1,
      };
}
function Ja(e, t) {
  if (!e || !t || t.length === 0) return !1;
  let n;
  if (e instanceof URL) n = e;
  else
    try {
      n = new URL(e);
    } catch {
      return !1;
    }
  for (let e of t)
    try {
      if (typeof e == `string`) {
        if (Ya(n.hostname, e)) return !0;
      } else if (e instanceof RegExp) {
        if (e.test(n.hostname)) return !0;
      } else if (typeof e == `function` && e(n)) return !0;
    } catch {
      continue;
    }
  return !1;
}
function Ya(e, t) {
  if (t === e) return !0;
  if (t.startsWith(`*.`)) {
    let n = t.slice(2);
    if (e.endsWith(n) && (e === n || e.endsWith(`.` + n))) return !0;
  }
  return !1;
}
function Xa(e) {
  let t = [];
  try {
    let n = new URL(e);
    t.push(n.hostname);
  } catch {}
  return (
    t.push(`*.supabase.co`, `*.supabase.in`),
    t.push(`localhost`, `127.0.0.1`, `[::1]`),
    t
  );
}
function Za(e) {
  "@babel/helpers - typeof";
  return (
    (Za =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Za(e)
  );
}
function Qa(e, t) {
  if (Za(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Za(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function $a(e) {
  var t = Qa(e, `string`);
  return Za(t) == `symbol` ? t : t + ``;
}
function eo(e, t, n) {
  return (
    (t = $a(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function to(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? to(Object(n), !0).forEach(function (t) {
          eo(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : to(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var no = (e) => (e ? (...t) => e(...t) : (...e) => fetch(...e)),
  ro = () => Headers,
  io = (e, t, n, r, i) => {
    let a = no(r),
      o = ro(),
      s = i?.enabled === !0,
      c = i?.respectSamplingDecision !== !1,
      l = s ? Xa(t) : null;
    return async (t, r) => {
      let i = (await n()) ?? e,
        s = new o(r?.headers);
      if (
        (s.has(`apikey`) || s.set(`apikey`, e),
        s.has(`Authorization`) || s.set(`Authorization`, `Bearer ${i}`),
        l)
      ) {
        let e = await ao(t, l, c);
        e &&
          (e.traceparent &&
            !s.has(`traceparent`) &&
            s.set(`traceparent`, e.traceparent),
          e.tracestate &&
            !s.has(`tracestate`) &&
            s.set(`tracestate`, e.tracestate),
          e.baggage && !s.has(`baggage`) && s.set(`baggage`, e.baggage));
      }
      return a(t, Q(Q({}, r), {}, { headers: s }));
    };
  };
async function ao(e, t, n) {
  if (!Ja(typeof e == `string` || e instanceof URL ? e : e.url, t)) return null;
  let r = await Ka();
  if (!r || !r.traceparent) return null;
  if (n) {
    let e = qa(r.traceparent);
    if (e && !e.isSampled) return null;
  }
  return r;
}
function oo(e) {
  return typeof e == `boolean` ? { enabled: e } : e;
}
function so(e) {
  return e.endsWith(`/`) ? e : e + `/`;
}
function co(e, t) {
  let { db: n, auth: r, realtime: i, global: a } = e,
    { db: o, auth: s, realtime: c, global: l } = t,
    u = oo(e.tracePropagation),
    d = oo(t.tracePropagation),
    f = {
      db: Q(Q({}, o), n),
      auth: Q(Q({}, s), r),
      realtime: Q(Q({}, c), i),
      storage: {},
      global: Q(
        Q(Q({}, l), a),
        {},
        { headers: Q(Q({}, l?.headers ?? {}), a?.headers ?? {}) },
      ),
      tracePropagation: {
        enabled: u?.enabled ?? d?.enabled ?? !1,
        respectSamplingDecision:
          u?.respectSamplingDecision ?? d?.respectSamplingDecision ?? !0,
      },
      accessToken: async () => ``,
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken,
    f
  );
}
function lo(e) {
  let t = e?.trim();
  if (!t) throw Error(`supabaseUrl is required.`);
  if (!t.match(/^https?:\/\//i))
    throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);
  try {
    return new URL(so(t));
  } catch {
    throw Error(`Invalid supabaseUrl: Provided URL is malformed.`);
  }
}
