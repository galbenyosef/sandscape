// AnalyticsService-CXnfQpTJ 02 — localstorage
// Lines 236-356 of readable/assets/AnalyticsService-CXnfQpTJ.pretty.js (statement-aligned).
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
