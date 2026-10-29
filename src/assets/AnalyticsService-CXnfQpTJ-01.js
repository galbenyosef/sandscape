// AnalyticsService-CXnfQpTJ 01 — measurementid
// Lines 1-235 of readable/assets/AnalyticsService-CXnfQpTJ.pretty.js (statement-aligned).
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
