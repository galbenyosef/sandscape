// assets__AnalyticsService-BMBbF9S- 01 — localstorage
// Lines 1-335 of readable/assets__AnalyticsService-BMBbF9S-.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t } from "./jsx-runtime-BtyjnKZj.js";
import { s as n } from "./chunk-KS7C4IRE-CgpSK45w.js";
var r = e(t()),
  i = {
    tagManagerId: `GTM-5JLRKXRB`,
    measurementId: `G-YPD6HKTZFF`,
    googleAdsConversionId: `AW-17064847108`,
    googleAdsConversionLabel: `VNMzCI2gydwbEITOk8k_`,
    events: {
      LOGIN: `login`,
      SIGNUP: `signup`,
      PASSWORD_RESET: `password_reset`,
      AUTH_VIEW: `auth_view`,
      AUTH_METHOD_SELECTED: `auth_method_selected`,
      AUTH_EMAIL_SENT: `auth_email_sent`,
      AUTH_VERIFIED: `auth_verified`,
      AUTH_COMPLETED: `auth_completed`,
      AUTH_ERROR: `auth_error`,
      ONBOARDING_COMPLETED: `onboarding_completed`,
      SIGN_UP: `sign_up`,
      WAITLIST_JOIN: `waitlist_join`,
      FEATURE_INTERACT: `feature_interact`,
      VIDEO_PLAY: `video_play`,
      VIDEO_COMPLETE: `video_complete`,
      SELECT_CONTENT: `select_content`,
      GAME_PLAY: `game_play`,
      FIRST_PLAYABLE: `first_playable`,
      GAME_PUBLISHED: `game_published`,
      CTA_CLICK: `cta_click`,
      EXTERNAL_LINK_CLICK: `external_link_click`,
      FORM_START: `form_start`,
      FORM_SUBMIT: `form_submit`,
      FORM_ERROR: `form_error`,
      WAITLIST_SUBMIT: `waitlist_submit`,
    },
    defaultEventParams: {
      app_version: `0.0.1`,
      app_name: `Sandscape`,
      environment: `production`,
    },
  },
  a = `sandscapeCookieConsent`,
  o = `sandscape-gtm-script`,
  s = `sandscape-ga-script`,
  c = `sandscape.analytics.`,
  l = `sandscape.milestone.`,
  u = [
    `utm_id`,
    `utm_source`,
    `utm_medium`,
    `utm_campaign`,
    `utm_term`,
    `utm_content`,
    `utm_source_platform`,
    `utm_creative_format`,
    `utm_marketing_tactic`,
  ],
  d = [`gclid`, `dclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`],
  f = [...u, ...d],
  p = new Set([
    `access_token`,
    `code`,
    `email`,
    `error_description`,
    `otp`,
    `password`,
    `refresh_token`,
    `token`,
    `token_hash`,
    `verification_code`,
  ]),
  m = !1,
  h = !1,
  g = !1;
function _() {
  return /^GTM-[A-Z0-9]+$/i.test(i.tagManagerId);
}
function v(e = i.measurementId) {
  return /^G-[A-Z0-9]+$/i.test(e);
}
function y() {
  return ((window.dataLayer = window.dataLayer || []), window.dataLayer);
}
function b() {
  return (
    y(),
    window.gtag ||
      (window.gtag = function () {
        y().push(arguments);
      }),
    window.gtag
  );
}
function x(e) {
  return {
    ad_storage: e,
    ad_user_data: e,
    ad_personalization: e,
    analytics_storage: e,
  };
}
var S = (e) => {
    try {
      let t =
          typeof window > `u`
            ? `https://sandscape.app`
            : window.location.origin,
        n = new URL(e, t);
      for (let e of [...n.searchParams.keys()])
        p.has(e.toLowerCase()) && n.searchParams.delete(e);
      return (
        (n.hash = ``),
        /^https?:\/\//i.test(e) ? n.toString() : `${n.pathname}${n.search}`
      );
    } catch {
      return `/`;
    }
  },
  C = new Set([
    `Atlantic/Azores`,
    `Atlantic/Madeira`,
    `Atlantic/Canary`,
    `Atlantic/Reykjavik`,
    `Atlantic/Faroe`,
    `Asia/Nicosia`,
    `Asia/Famagusta`,
    `America/Guadeloupe`,
    `America/Martinique`,
    `America/Cayenne`,
    `America/Miquelon`,
    `Indian/Reunion`,
    `Indian/Mayotte`,
  ]),
  w = () => {
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return !e || e.startsWith(`Europe/`) || C.has(e);
    } catch {
      return !0;
    }
  },
  T = () => {
    if (typeof document > `u`) return null;
    let e = document.cookie
      .split(`;`)
      .map((e) => e.trim())
      .find((e) => e.startsWith(`${a}=`))
      ?.slice(23);
    return e === `true` || e === `false` ? e : null;
  },
  E = () => {
    if (typeof document > `u`) return !1;
    let e = T();
    return e ? e === `true` : !w();
  },
  D = (e) => {
    let t = (t) => {
      t.key === a && e(t.newValue === `true`);
    };
    return (
      window.addEventListener(`storage`, t),
      () => window.removeEventListener(`storage`, t)
    );
  },
  O = () => {
    typeof window > `u` ||
      m ||
      (b()(`consent`, `default`, x(`denied`)), (m = !0));
  },
  k = (e) => {
    typeof window > `u` ||
      (O(), b()(`consent`, `update`, x(e ? `granted` : `denied`)));
  };
function A() {
  if (h || !_()) return;
  ((h = !0), y().push({ event: `gtm.js`, "gtm.start": Date.now() }));
  let e = document.createElement(`script`);
  ((e.id = o),
    (e.async = !0),
    (e.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(i.tagManagerId)}`),
    document.head.appendChild(e));
}
function j(e = i.measurementId) {
  if (g || !v(e)) return;
  g = !0;
  let t = document.createElement(`script`);
  ((t.id = s),
    (t.async = !0),
    (t.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(e)}`),
    document.head.appendChild(t));
  let n = b();
  (n(`js`, new Date()),
    n(`config`, e, { anonymize_ip: !0, send_page_view: !1 }),
    i.googleAdsConversionId && n(`config`, i.googleAdsConversionId));
}
var M = (e = i.measurementId) => {
    typeof window > `u` || (O(), E() && (k(!0), _() ? A() : j(e)));
  },
  N = M,
  P = () => {
    typeof window > `u` ||
      (k(!1), document.getElementById(s)?.remove(), (g = !1));
  },
  F = P;
function I(e, t = {}) {
  if (typeof window > `u` || !E()) return;
  let n = Object.fromEntries(Object.entries(t).filter(([, e]) => e != null));
  if (_()) {
    y().push({ event: e, ...n });
    return;
  }
  v() && b()(`event`, e, n);
}
var L = (e, t, n) => {
    if (typeof window > `u` || !E()) return;
    let r = n ? new URLSearchParams(n.search) : new URLSearchParams(),
      i = {
        page_title: t || document.title,
        page_location: S(window.location.href),
        page_path: S(e),
      };
    for (let e of u) {
      let t = r.get(e);
      t && (i[e] = t);
    }
    I(`page_view`, i);
  },
  R = (e, t) => {
    I(e, t);
  },
  z = (e) => {
    if (!E()) return;
    let t = new URLSearchParams(e.search),
      n = !1;
    for (let e of u) {
      let r = t.get(e);
      r && (localStorage.setItem(e, r), (n = !0));
    }
    for (let e of d) {
      let n = t.get(e);
      n && localStorage.setItem(e, n);
    }
    n &&
      !localStorage.getItem(`first_touch_utm`) &&
      localStorage.setItem(
        `first_touch_utm`,
        JSON.stringify({
          timestamp: new Date().toISOString(),
          source: t.get(`utm_source`) || ``,
          medium: t.get(`utm_medium`) || ``,
          campaign: t.get(`utm_campaign`) || ``,
          term: t.get(`utm_term`) || ``,
          content: t.get(`utm_content`) || ``,
          initial_landing_page: e.pathname,
          referrer: document.referrer,
        }),
      );
  },
  B = () => {
    if (!(typeof window > `u`)) {
      for (let e of [...f, `first_touch_utm`]) localStorage.removeItem(e);
      for (let e = localStorage.length - 1; e >= 0; --e) {
        let t = localStorage.key(e);
        t?.startsWith(c) && localStorage.removeItem(t);
      }
    }
  },
  V = () => {
    let e = n();
    (0, r.useEffect)(() => {
      E() && (L(e.pathname + e.search, document.title, e), z(e));
    }, [e]);
  },
  H = () => {
    if (typeof window > `u` || !E()) return {};
    let e = {};
    for (let t of f) {
      let n = localStorage.getItem(t);
      n && (e[t] = n);
    }
    return e;
  },
  U = (e, t, n, r = `USD`, a) => {
    if (typeof window > `u` || _() || !E() || !v()) return;
    let o = e || i.googleAdsConversionId,
      s = t || i.googleAdsConversionLabel;
    if (!o || !s) return;
    let c = { send_to: `${o}/${s}` };
    (n !== void 0 && ((c.value = n), (c.currency = r)),
      a && (c.transaction_id = a),
      b()(`event`, `conversion`, c));
  },
  W = ({
    provider: e,
    entryPoint: t,
    destinationCategory: n,
    conversionDedupId: r,
  }) => {
    (R(`sign_up`, {
      method: e,
      entry_point: t,
      destination_category: n,
      ...(r ? { conversion_id: r } : {}),
      ...H(),
    }),
      U(void 0, void 0, void 0, void 0, r));
  },
  G = (e, t, n = {}) => {
    if (typeof window > `u` || !E() || !t) return !1;
    let r = `${l}${e}.${t}`,
      i = `${c}${e}.${t}`;
    return localStorage.getItem(r) || localStorage.getItem(i)
      ? !1
      : (R(e, n), localStorage.setItem(r, `true`), !0);
  },
  K = {
    initializeGA: N,
    initializeTracking: M,
    removeGA: F,
    removeTracking: P,
    setDefaultConsent: O,
    updateConsent: k,
    trackPageView: L,
    trackEvent: R,
    trackGoogleAdsConversion: U,
    trackAccountCreationConversion: W,
    trackProjectMilestoneOnce: G,
    usePageTracking: V,
    getStoredUtmParams: H,
    hasAnalyticsConsent: E,
    setupConsentListener: D,
    storeUtmParams: z,
    clearUtmParams: B,
  };
