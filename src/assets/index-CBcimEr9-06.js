// index-CBcimEr9 06 — conversion_id
// Lines 1720-2053 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var dr = 1440 * 60 * 1e3,
  fr = `sandscape_first_touch`,
  pr = 2160 * 60 * 60,
  mr = `${Le}sign_up.`,
  hr = [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`],
  gr = [`gclid`, `gbraid`, `wbraid`, `rdt_cid`, `oppref`],
  _r = 200,
  vr = 500,
  yr = (e) => {
    try {
      return localStorage.getItem(e);
    } catch {
      return null;
    }
  },
  br = (e, t) => {
    try {
      localStorage.setItem(e, t);
    } catch {}
  },
  xr = (e, t) => e.trim().slice(0, t),
  Sr = () => {
    try {
      return crypto.randomUUID();
    } catch {
      return;
    }
  },
  Cr = () => {
    let e = window.location?.hostname ?? ``,
      t = e === `sandscape.app` || e.endsWith(`.sandscape.app`),
      n = window.location?.protocol === `https:` ? `; Secure` : ``;
    return `${t ? `; Domain=.sandscape.app` : ``}${n}`;
  },
  wr = (e) => {
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
  Tr = (e, t) => {
    if (!(typeof document > `u`))
      try {
        document.cookie = `${fr}=${e}; Max-Age=${t}; Path=/; SameSite=Lax${Cr()}`;
      } catch {}
  },
  Er = (e) => {
    Tr(encodeURIComponent(JSON.stringify(e)), pr);
  },
  Dr = () => {
    Tr(``, 0);
  },
  Or = (e) => {
    if (!e?.created_at || !e.last_sign_in_at) return !1;
    let t = Date.parse(e.created_at),
      n = Date.parse(e.last_sign_in_at);
    if (Number.isNaN(t) || Number.isNaN(n)) return !1;
    let r = n - t;
    return r < 0 || r >= 864e5 ? !1 : Date.now() - t < dr;
  },
  kr = (e = `app`) => {
    if (typeof window > `u` || !Re() || Ar()) return;
    let t = {
      first_touch_at: new Date().toISOString(),
      capture_surface: e,
      conversion_id: Sr(),
    };
    try {
      let e = new URLSearchParams(window.location?.search ?? ``);
      for (let n of hr) {
        let r = e.get(n);
        r && (t[n] = xr(r, _r));
      }
      let n = {};
      for (let t of gr) {
        let r = e.get(t);
        r && (n[t] = xr(r, vr));
      }
      Object.keys(n).length > 0 && (t.click_ids = n);
    } catch {}
    let n = typeof document > `u` ? `` : (document.referrer ?? ``);
    if (n) {
      let e = Pe(n);
      e && (t.referrer = xr(e, vr));
    }
    let r = Ie(window.location?.pathname ?? ``);
    (r && (t.landing_page = xr(r, vr)), Er(t));
  },
  Ar = () => {
    let e = wr(fr);
    if (!e) return null;
    try {
      let t = JSON.parse(decodeURIComponent(e));
      if (!t || typeof t != `object`) return null;
      let n = t,
        r = {};
      for (let e of [...hr, `referrer`, `landing_page`]) {
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
        for (let t of gr) {
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
  jr = new Set(),
  Mr = `recorded`,
  Nr = (e, t) => {
    if (typeof window > `u` || !e?.id) return;
    let n = `${mr}${e.id}`,
      r = (e) => {
        Fe({
          provider: t.provider,
          entryPoint: t.entryPoint,
          destinationCategory: t.destinationCategory,
          conversionDedupId: e,
        });
      },
      i = yr(n);
    if (i === Mr) {
      if (!Re() || jr.has(n)) return;
      (jr.add(n), br(n, `true`), r(Ar()?.conversion_id));
      return;
    }
    if (jr.has(n) || i) return;
    jr.add(n);
    let a = Ar();
    w.recordSignupAttribution(a)
      .then((e) => {
        if (e === `ineligible`) {
          (jr.delete(n),
            console.warn(
              `[signup] attribution refused: account outside the new-account window; sign_up not counted`,
            ));
          return;
        }
        if (e === `duplicate`) {
          br(n, `true`);
          return;
        }
        if (!Re()) {
          (jr.delete(n), br(n, Mr));
          return;
        }
        (br(n, `true`), r(a?.conversion_id));
      })
      .catch((e) => {
        (jr.delete(n),
          console.warn(
            `[signup] could not record attribution; sign_up not counted`,
            e,
          ));
      });
  },
  Pr = async (e) => {
    try {
      let t = (await w.getSession())?.user ?? null,
        n = Or(t);
      return (n && t && Nr(t, e), n);
    } catch (e) {
      return (
        console.warn(`[signup] could not evaluate new-account state`, e),
        !1
      );
    }
  },
  Fr = (0, H.createContext)({
    trackEvent: () => {},
    trackPageView: () => {},
    getUtmParams: () => ({}),
    hasConsent: !1,
  }),
  Ir = () => (ze(), null),
  Lr = ({ children: e, enablePageTracking: t = !1 }) => {
    let [n, r] = (0, H.useState)(!1);
    (0, H.useEffect)(() => {
      let e = L.hasAnalyticsConsent();
      return (
        L.setDefaultConsent(),
        e && L.initializeTracking(Be.measurementId),
        r(e),
        e && kr(`app`),
        L.setupConsentListener((e) => {
          (e
            ? (L.updateConsent(!0),
              L.initializeTracking(Be.measurementId),
              console.log(`Analytics initialized after consent given`),
              kr())
            : (L.removeTracking(), L.clearUtmParams(), Dr()),
            r(e));
        })
      );
    }, []);
    let i = {
      trackEvent: (e, t) => {
        n && L.trackEvent(e, { ...Be.defaultEventParams, ...t });
      },
      trackPageView: (e, t) => {
        n && L.trackPageView(e, t);
      },
      getUtmParams: () => (n ? L.getStoredUtmParams() : {}),
      hasConsent: n,
    };
    return (0, U.jsxs)(Fr.Provider, {
      value: i,
      children: [t && n && (0, U.jsx)(Ir, {}), e],
    });
  },
  Rr = () => (0, H.useContext)(Fr),
  zr = () => {
    window.va ||
      (window.va = function (...e) {
        (window.vaq || (window.vaq = []), window.vaq.push(e));
      });
  },
  Br = `@vercel/analytics`,
  Vr = `2.0.1`;
function Hr() {
  return typeof window < `u`;
}
function Ur() {
  return `production`;
}
function Wr(e = `auto`) {
  if (e === `auto`) {
    window.vam = Ur();
    return;
  }
  window.vam = e;
}
function Gr() {
  return (Hr() ? window.vam : Ur()) || `production`;
}
function Kr() {
  return Gr() === `development`;
}
function qr(e) {
  return e.scriptSrc
    ? Yr(e.scriptSrc)
    : Kr()
      ? `https://va.vercel-scripts.com/v1/script.debug.js`
      : e.basePath
        ? Yr(`${e.basePath}/insights/script.js`)
        : `/_vercel/insights/script.js`;
}
function Jr(e, t) {
  let n = e;
  if (t)
    try {
      n = { ...JSON.parse(t)?.analytics, ...e };
    } catch {}
  Wr(n.mode);
  let r = { sdkn: Br + (n.framework ? `/${n.framework}` : ``), sdkv: Vr };
  return (
    n.disableAutoTrack && (r.disableAutoTrack = `1`),
    n.viewEndpoint && (r.viewEndpoint = Yr(n.viewEndpoint)),
    n.eventEndpoint && (r.eventEndpoint = Yr(n.eventEndpoint)),
    n.sessionEndpoint && (r.sessionEndpoint = Yr(n.sessionEndpoint)),
    Kr() && n.debug === !1 && (r.debug = `false`),
    n.dsn && (r.dsn = n.dsn),
    n.endpoint
      ? (r.endpoint = n.endpoint)
      : n.basePath && (r.endpoint = Yr(`${n.basePath}/insights`)),
    { beforeSend: n.beforeSend, src: qr(n), dataset: r }
  );
}
function Yr(e) {
  return e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    e.startsWith(`/`)
    ? e
    : `/${e}`;
}
function Xr(e = { debug: !0 }, t) {
  var n;
  if (!Hr()) return;
  let { beforeSend: r, src: i, dataset: a } = Jr(e, t);
  if (
    (zr(),
    r && ((n = window.va) == null || n.call(window, `beforeSend`, r)),
    document.head.querySelector(`script[src*="${i}"]`))
  )
    return;
  let o = document.createElement(`script`);
  o.src = i;
  for (let [e, t] of Object.entries(a)) o.dataset[e] = t;
  ((o.defer = !0),
    (o.onerror = () => {
      let e = Kr()
        ? `Please check if any ad blockers are enabled and try again.`
        : `Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${i}. ${e}`,
      );
    }),
    document.head.appendChild(o));
}
function Zr({ route: e, path: t }) {
  var n;
  (n = window.va) == null || n.call(window, `pageview`, { route: e, path: t });
}
function Qr() {
  if (!(typeof process > `u`))
    return {}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function $r() {
  if (!(typeof process > `u`))
    return {}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
