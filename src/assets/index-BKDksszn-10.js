// index-BKDksszn 10 — conversion_id
// Lines 2713-3054 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
var Fr = 1440 * 60 * 1e3,
  Ir = `sandscape_first_touch`,
  Lr = 2160 * 60 * 60,
  Rr = `${Ne}sign_up.`,
  zr = [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`],
  Br = [`gclid`, `gbraid`, `wbraid`, `rdt_cid`, `oppref`],
  Vr = 200,
  Hr = 500,
  Ur = (e) => {
    try {
      return localStorage.getItem(e);
    } catch {
      return null;
    }
  },
  Wr = (e, t) => {
    try {
      localStorage.setItem(e, t);
    } catch {}
  },
  Gr = (e, t) => e.trim().slice(0, t),
  Kr = () => {
    try {
      return crypto.randomUUID();
    } catch {
      return;
    }
  },
  qr = () => {
    let e = window.location?.hostname ?? ``,
      t = e === `sandscape.app` || e.endsWith(`.sandscape.app`),
      n = window.location?.protocol === `https:` ? `; Secure` : ``;
    return `${t ? `; Domain=.sandscape.app` : ``}${n}`;
  },
  Jr = (e) => {
    if (typeof document > `u`) return null;
    try {
      let t = document.cookie
        .split(`;`)
        .map((e) => e.trim())
        .find((t) => t.startsWith(`${e}=`));
      return t ? t.slice(e.length + 1) : null;
    } catch {
      return null;
    }
  },
  Yr = (e, t) => {
    if (!(typeof document > `u`))
      try {
        document.cookie = `${Ir}=${e}; Max-Age=${t}; Path=/; SameSite=Lax${qr()}`;
      } catch {}
  },
  Xr = (e) => {
    Yr(encodeURIComponent(JSON.stringify(e)), Lr);
  },
  Zr = () => {
    Yr(``, 0);
  },
  Qr = (e) => {
    try {
      let t = new URL(e);
      return ((t.username = ``), (t.password = ``), `${t.origin}${t.pathname}`);
    } catch {
      return ``;
    }
  },
  $r = (e) => {
    if (!e?.created_at || !e.last_sign_in_at) return !1;
    let t = Date.parse(e.created_at),
      n = Date.parse(e.last_sign_in_at);
    if (Number.isNaN(t) || Number.isNaN(n)) return !1;
    let r = n - t;
    return r < 0 || r >= 864e5 ? !1 : Date.now() - t < Fr;
  },
  ei = (e = `app`) => {
    if (typeof window > `u` || !Pe() || ti()) return;
    let t = {
      first_touch_at: new Date().toISOString(),
      capture_surface: e,
      conversion_id: Kr(),
    };
    try {
      let e = new URLSearchParams(window.location?.search ?? ``);
      for (let n of zr) {
        let r = e.get(n);
        r && (t[n] = Gr(r, Vr));
      }
      let n = {};
      for (let t of Br) {
        let r = e.get(t);
        r && (n[t] = Gr(r, Hr));
      }
      Object.keys(n).length > 0 && (t.click_ids = n);
    } catch {}
    let n = typeof document > `u` ? `` : (document.referrer ?? ``);
    if (n) {
      let e = Qr(n);
      e && (t.referrer = Gr(e, Hr));
    }
    let r = window.location?.pathname ?? ``;
    (r && (t.landing_page = Gr(r, Hr)), Xr(t));
  },
  ti = () => {
    let e = Jr(Ir);
    if (!e) return null;
    try {
      let t = JSON.parse(decodeURIComponent(e));
      if (!t || typeof t != `object`) return null;
      let n = t,
        r = {};
      for (let e of [...zr, `referrer`, `landing_page`]) {
        let t = n[e];
        typeof t == `string` && t && (r[e] = t);
      }
      (typeof n.first_touch_at == `string` &&
        Number.isFinite(Date.parse(n.first_touch_at)) &&
        (r.first_touch_at = n.first_touch_at),
        typeof n.conversion_id == `string` &&
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
            n.conversion_id,
          ) &&
          (r.conversion_id = n.conversion_id),
        (n.capture_surface === `marketing` || n.capture_surface === `app`) &&
          (r.capture_surface = n.capture_surface));
      let i = n.click_ids;
      if (i && typeof i == `object`) {
        let e = {};
        for (let t of Br) {
          let n = i[t];
          typeof n == `string` && n && (e[t] = n);
        }
        Object.keys(e).length > 0 && (r.click_ids = e);
      }
      return Object.keys(r).length > 0 ? r : null;
    } catch {
      return null;
    }
  },
  ni = new Set(),
  ri = `recorded`,
  ii = (e, t) => {
    if (typeof window > `u` || !e?.id) return;
    let n = `${Rr}${e.id}`,
      r = (e) => {
        Me({
          provider: t.provider,
          entryPoint: t.entryPoint,
          destinationCategory: t.destinationCategory,
          conversionDedupId: e,
        });
      },
      i = Ur(n);
    if (i === ri) {
      if (!Pe() || ni.has(n)) return;
      (ni.add(n), Wr(n, `true`), r(ti()?.conversion_id));
      return;
    }
    if (ni.has(n) || i) return;
    ni.add(n);
    let a = ti();
    w.recordSignupAttribution(a)
      .then((e) => {
        if (e === `ineligible`) {
          (ni.delete(n),
            console.warn(
              `[signup] attribution refused: account outside the new-account window; sign_up not counted`,
            ));
          return;
        }
        if (e === `duplicate`) {
          Wr(n, `true`);
          return;
        }
        if (!Pe()) {
          (ni.delete(n), Wr(n, ri));
          return;
        }
        (Wr(n, `true`), r(a?.conversion_id));
      })
      .catch((e) => {
        (ni.delete(n),
          console.warn(
            `[signup] could not record attribution; sign_up not counted`,
            e,
          ));
      });
  },
  ai = async (e) => {
    try {
      let t = (await w.getSession())?.user ?? null,
        n = $r(t);
      return (n && t && ii(t, e), n);
    } catch (e) {
      return (
        console.warn(`[signup] could not evaluate new-account state`, e),
        !1
      );
    }
  },
  oi = (0, U.createContext)({
    trackEvent: () => {},
    trackPageView: () => {},
    getUtmParams: () => ({}),
    hasConsent: !1,
  }),
  si = () => (Fe(), null),
  ci = ({ children: e, enablePageTracking: t = !1 }) => {
    let [n, r] = (0, U.useState)(!1);
    (0, U.useEffect)(() => {
      let e = R.hasAnalyticsConsent();
      return (
        R.setDefaultConsent(),
        e && R.initializeTracking(je.measurementId),
        r(e),
        e && ei(`app`),
        R.setupConsentListener((e) => {
          (e
            ? (R.updateConsent(!0),
              R.initializeTracking(je.measurementId),
              console.log(`Analytics initialized after consent given`),
              ei())
            : (R.removeTracking(), R.clearUtmParams(), Zr()),
            r(e));
        })
      );
    }, []);
    let i = {
      trackEvent: (e, t) => {
        n && R.trackEvent(e, { ...je.defaultEventParams, ...t });
      },
      trackPageView: (e, t) => {
        n && R.trackPageView(e, t);
      },
      getUtmParams: () => (n ? R.getStoredUtmParams() : {}),
      hasConsent: n,
    };
    return (0, W.jsxs)(oi.Provider, {
      value: i,
      children: [t && n && (0, W.jsx)(si, {}), e],
    });
  },
  li = () => (0, U.useContext)(oi),
  ui = () => {
    window.va ||
      (window.va = function (...e) {
        (window.vaq || (window.vaq = []), window.vaq.push(e));
      });
  },
  di = `@vercel/analytics`,
  fi = `2.0.1`;
function pi() {
  return typeof window < `u`;
}
function mi() {
  return `production`;
}
function hi(e = `auto`) {
  if (e === `auto`) {
    window.vam = mi();
    return;
  }
  window.vam = e;
}
function gi() {
  return (pi() ? window.vam : mi()) || `production`;
}
function _i() {
  return gi() === `development`;
}
function vi(e) {
  return e.scriptSrc
    ? bi(e.scriptSrc)
    : _i()
      ? `https://va.vercel-scripts.com/v1/script.debug.js`
      : e.basePath
        ? bi(`${e.basePath}/insights/script.js`)
        : `/_vercel/insights/script.js`;
}
function yi(e, t) {
  let n = e;
  if (t)
    try {
      n = { ...JSON.parse(t)?.analytics, ...e };
    } catch {}
  hi(n.mode);
  let r = { sdkn: di + (n.framework ? `/${n.framework}` : ``), sdkv: fi };
  return (
    n.disableAutoTrack && (r.disableAutoTrack = `1`),
    n.viewEndpoint && (r.viewEndpoint = bi(n.viewEndpoint)),
    n.eventEndpoint && (r.eventEndpoint = bi(n.eventEndpoint)),
    n.sessionEndpoint && (r.sessionEndpoint = bi(n.sessionEndpoint)),
    _i() && n.debug === !1 && (r.debug = `false`),
    n.dsn && (r.dsn = n.dsn),
    n.endpoint
      ? (r.endpoint = n.endpoint)
      : n.basePath && (r.endpoint = bi(`${n.basePath}/insights`)),
    { beforeSend: n.beforeSend, src: vi(n), dataset: r }
  );
}
function bi(e) {
  return e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    e.startsWith(`/`)
    ? e
    : `/${e}`;
}
function xi(e = { debug: !0 }, t) {
  var n;
  if (!pi()) return;
  let { beforeSend: r, src: i, dataset: a } = yi(e, t);
  if (
    (ui(),
    r && ((n = window.va) == null || n.call(window, `beforeSend`, r)),
    document.head.querySelector(`script[src*="${i}"]`))
  )
    return;
  let o = document.createElement(`script`);
  o.src = i;
  for (let [e, t] of Object.entries(a)) o.dataset[e] = t;
  ((o.defer = !0),
    (o.onerror = () => {
      let e = _i()
        ? `Please check if any ad blockers are enabled and try again.`
        : `Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${i}. ${e}`,
      );
    }),
    document.head.appendChild(o));
}
function Si({ route: e, path: t }) {
  var n;
  (n = window.va) == null || n.call(window, `pageview`, { route: e, path: t });
}
function Ci() {
  if (!(typeof process > `u`))
    return {}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function wi() {
  if (!(typeof process > `u`))
    return {}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
