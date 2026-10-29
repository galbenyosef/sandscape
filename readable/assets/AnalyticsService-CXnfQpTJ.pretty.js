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
      PURCHASE: `purchase`,
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
  a = /^(\/+(?:offer|invite)\/+)[^/]+/i,
  o = `[redacted]`;
function s(e) {
  return e.replace(a, `$1${o}`);
}
function c(e) {
  try {
    let t = new URL(e);
    return `${t.origin}${s(t.pathname)}`;
  } catch {
    return ``;
  }
}
var l = `sandscapeCookieConsent`,
  u = `sandscape-gtm-script`,
  d = `sandscape-ga-script`,
  f = `sandscape.analytics.`,
  p = `sandscape.milestone.`,
  m = [
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
  h = [`gclid`, `dclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`],
  g = [...m, ...h],
  _ = new Set([
    `access_token`,
    `code`,
    `email`,
    `error_description`,
    `otp`,
    `password`,
    `refresh_token`,
    `token`,
    `token_hash`,
    `user_code`,
    `verification_code`,
  ]),
  v = new Set([`returnto`]),
  y = !1,
  b = !1,
  x = !1;
function S() {
  return /^GTM-[A-Z0-9]+$/i.test(i.tagManagerId);
}
function C(e = i.measurementId) {
  return /^G-[A-Z0-9]+$/i.test(e);
}
function w() {
  return ((window.dataLayer = window.dataLayer || []), window.dataLayer);
}
function T() {
  return (
    w(),
    window.gtag ||
      (window.gtag = function () {
        w().push(arguments);
      }),
    window.gtag
  );
}
function E(e) {
  return {
    ad_storage: e,
    ad_user_data: e,
    ad_personalization: e,
    analytics_storage: e,
  };
}
var D = (e) => {
    try {
      let t =
          typeof window > `u`
            ? `https://sandscape.app`
            : window.location.origin,
        n = new URL(e, t);
      n.pathname = s(n.pathname);
      let r = new URLSearchParams();
      for (let [e, t] of n.searchParams) {
        let n = e.toLowerCase();
        _.has(n) || r.append(e, v.has(n) ? D(t) : t);
      }
      return (
        (n.search = r.toString()),
        (n.hash = ``),
        /^https?:\/\//i.test(e) ? n.toString() : `${n.pathname}${n.search}`
      );
    } catch {
      return `/`;
    }
  },
  O = new Set([
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
  k = () => {
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return !e || e.startsWith(`Europe/`) || O.has(e);
    } catch {
      return !0;
    }
  },
  A = () => {
    if (typeof document > `u`) return null;
    let e = document.cookie
      .split(`;`)
      .map((e) => e.trim())
      .find((e) => e.startsWith(`${l}=`))
      ?.slice(23);
    return e === `true` || e === `false` ? e : null;
  },
  j = () => {
    if (typeof document > `u`) return !1;
    let e = A();
    return e ? e === `true` : !k();
  },
  M = (e) => {
    let t = (t) => {
      t.key === l && e(t.newValue === `true`);
    };
    return (
      window.addEventListener(`storage`, t),
      () => window.removeEventListener(`storage`, t)
    );
  },
  N = () => {
    typeof window > `u` ||
      y ||
      (T()(`consent`, `default`, E(`denied`)), (y = !0));
  },
  P = (e) => {
    typeof window > `u` ||
      (N(), T()(`consent`, `update`, E(e ? `granted` : `denied`)));
  };
function F() {
  if (b || !S()) return;
  ((b = !0), w().push({ event: `gtm.js`, "gtm.start": Date.now() }));
  let e = document.createElement(`script`);
  ((e.id = u),
    (e.async = !0),
    (e.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(i.tagManagerId)}`),
    document.head.appendChild(e));
}
function I(e = i.measurementId) {
  if (x || !C(e)) return;
  x = !0;
  let t = document.createElement(`script`);
  ((t.id = d),
    (t.async = !0),
    (t.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(e)}`),
    document.head.appendChild(t));
  let n = T();
  (n(`js`, new Date()),
    n(`config`, e, { anonymize_ip: !0, send_page_view: !1 }),
    i.googleAdsConversionId && n(`config`, i.googleAdsConversionId));
}
var L = (e = i.measurementId) => {
    typeof window > `u` || (N(), j() && (P(!0), S() ? F() : I(e)));
  },
  R = L,
  z = () => {
    typeof window > `u` ||
      (P(!1), document.getElementById(d)?.remove(), (x = !1));
  },
  B = z;
function V(e, t = {}) {
  if (typeof window > `u` || !j()) return;
  let n = Object.fromEntries(Object.entries(t).filter(([, e]) => e != null));
  if (S()) {
    w().push({ event: e, ...n });
    return;
  }
  C() && T()(`event`, e, n);
}
var H = (e, t, n) => {
    if (typeof window > `u` || !j()) return;
    let r = n ? new URLSearchParams(n.search) : new URLSearchParams(),
      i = {
        page_title: t || document.title,
        page_location: D(window.location.href),
        page_path: D(e),
      };
    for (let e of m) {
      let t = r.get(e);
      t && (i[e] = t);
    }
    V(`page_view`, i);
  },
  U = (e, t) => {
    V(e, t);
  },
  W = (e) => {
    if (!j()) return;
    let t = new URLSearchParams(e.search),
      n = !1;
    for (let e of m) {
      let r = t.get(e);
      r && (localStorage.setItem(e, r), (n = !0));
    }
    for (let e of h) {
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
          initial_landing_page: s(e.pathname),
          referrer: c(document.referrer),
        }),
      );
  },
  G = () => {
    if (!(typeof window > `u`)) {
      for (let e of [...g, `first_touch_utm`]) localStorage.removeItem(e);
      for (let e = localStorage.length - 1; e >= 0; --e) {
        let t = localStorage.key(e);
        t?.startsWith(f) && localStorage.removeItem(t);
      }
    }
  },
  K = () => {
    let e = n();
    (0, r.useEffect)(() => {
      j() && (H(e.pathname + e.search, document.title, e), W(e));
    }, [e]);
  },
  q = () => {
    if (typeof window > `u` || !j()) return {};
    let e = {};
    for (let t of g) {
      let n = localStorage.getItem(t);
      n && (e[t] = n);
    }
    return e;
  },
  J = (e, t, n, r = `USD`, a) => {
    if (typeof window > `u` || S() || !j() || !C()) return;
    let o = e || i.googleAdsConversionId,
      s = t || i.googleAdsConversionLabel;
    if (!o || !s) return;
    let c = { send_to: `${o}/${s}` };
    (n !== void 0 && ((c.value = n), (c.currency = r)),
      a && (c.transaction_id = a),
      T()(`event`, `conversion`, c));
  },
  Y = ({
    provider: e,
    entryPoint: t,
    destinationCategory: n,
    conversionDedupId: r,
  }) => {
    (U(`sign_up`, {
      method: e,
      entry_point: t,
      destination_category: n,
      ...(r ? { conversion_id: r } : {}),
      ...q(),
    }),
      J(void 0, void 0, void 0, void 0, r));
  },
  X = (e, t, n = {}) => {
    if (typeof window > `u` || !j() || !t) return !1;
    let r = `${p}${e}.${t}`,
      i = `${f}${e}.${t}`;
    return localStorage.getItem(r) || localStorage.getItem(i)
      ? !1
      : (U(e, n), localStorage.setItem(r, `true`), !0);
  },
  Z = {
    initializeGA: R,
    initializeTracking: L,
    removeGA: B,
    removeTracking: z,
    setDefaultConsent: N,
    updateConsent: P,
    trackPageView: H,
    trackEvent: U,
    trackGoogleAdsConversion: J,
    trackAccountCreationConversion: Y,
    trackProjectMilestoneOnce: X,
    usePageTracking: K,
    getStoredUtmParams: q,
    hasAnalyticsConsent: j,
    setupConsentListener: M,
    storeUtmParams: W,
    clearUtmParams: G,
  };
export {
  U as a,
  c,
  Y as i,
  s as l,
  p as n,
  X as o,
  j as r,
  K as s,
  Z as t,
  i as u,
};
