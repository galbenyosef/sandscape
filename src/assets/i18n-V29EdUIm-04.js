// i18n-V29EdUIm 04 — location
// Lines 2189-2486 of readable/assets/i18n-V29EdUIm.pretty.js (statement-aligned).
(G.createInstance,
  G.dir,
  G.init,
  G.loadResources,
  G.reloadResources,
  G.use,
  G.changeLanguage,
  G.getFixedT,
  G.t,
  G.exists,
  G.setDefaultNamespace,
  G.hasLoadedNamespace,
  G.loadNamespaces,
  G.loadLanguages);
var { slice: fe, forEach: pe } = [];
function me(e) {
  return (
    pe.call(fe.call(arguments, 1), (t) => {
      if (t) for (let n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
function he(e) {
  return (
    typeof e == `string` &&
    [
      /<\s*script.*?>/i,
      /<\s*\/\s*script\s*>/i,
      /<\s*img.*?on\w+\s*=/i,
      /<\s*\w+\s*on\w+\s*=.*?>/i,
      /javascript\s*:/i,
      /vbscript\s*:/i,
      /expression\s*\(/i,
      /eval\s*\(/i,
      /alert\s*\(/i,
      /document\.cookie/i,
      /document\.write\s*\(/i,
      /window\.location/i,
      /innerHTML/i,
    ].some((t) => t.test(e))
  );
}
var K = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  ge = function (e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: `/` },
      r = `${e}=${encodeURIComponent(t)}`;
    if (n.maxAge > 0) {
      let e = n.maxAge - 0;
      if (Number.isNaN(e)) throw Error(`maxAge should be a Number`);
      r += `; Max-Age=${Math.floor(e)}`;
    }
    if (n.domain) {
      if (!K.test(n.domain)) throw TypeError(`option domain is invalid`);
      r += `; Domain=${n.domain}`;
    }
    if (n.path) {
      if (!K.test(n.path)) throw TypeError(`option path is invalid`);
      r += `; Path=${n.path}`;
    }
    if (n.expires) {
      if (typeof n.expires.toUTCString != `function`)
        throw TypeError(`option expires is invalid`);
      r += `; Expires=${n.expires.toUTCString()}`;
    }
    if (
      (n.httpOnly && (r += `; HttpOnly`),
      n.secure && (r += `; Secure`),
      n.sameSite)
    )
      switch (
        typeof n.sameSite == `string` ? n.sameSite.toLowerCase() : n.sameSite
      ) {
        case !0:
          r += `; SameSite=Strict`;
          break;
        case `lax`:
          r += `; SameSite=Lax`;
          break;
        case `strict`:
          r += `; SameSite=Strict`;
          break;
        case `none`:
          r += `; SameSite=None`;
          break;
        default:
          throw TypeError(`option sameSite is invalid`);
      }
    return (n.partitioned && (r += `; Partitioned`), r);
  },
  q = {
    create(e, t, n, r) {
      let i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: `/`, sameSite: `strict` };
      (n &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)),
        r && (i.domain = r),
        (document.cookie = ge(e, t, i)));
    },
    read(e) {
      let t = `${e}=`,
        n = document.cookie.split(`;`);
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        for (; r.charAt(0) === ` `;) r = r.substring(1, r.length);
        if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
      }
      return null;
    },
    remove(e, t) {
      this.create(e, ``, -1, t);
    },
  },
  _e = {
    name: `cookie`,
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < `u`) return q.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: i,
        cookieOptions: a,
      } = t;
      n && typeof document < `u` && q.create(n, e, r, i, a);
    },
  },
  ve = {
    name: `querystring`,
    lookup(e) {
      let { lookupQuerystring: t } = e,
        n;
      if (typeof window < `u`) {
        let { search: e } = window.location;
        !window.location.search &&
          window.location.hash?.indexOf(`?`) > -1 &&
          (e = window.location.hash.substring(
            window.location.hash.indexOf(`?`),
          ));
        let r = e.substring(1).split(`&`);
        for (let e = 0; e < r.length; e++) {
          let i = r[e].indexOf(`=`);
          i > 0 && r[e].substring(0, i) === t && (n = r[e].substring(i + 1));
        }
      }
      return n;
    },
  },
  ye = {
    name: `hash`,
    lookup(e) {
      let { lookupHash: t, lookupFromHashIndex: n } = e,
        r;
      if (typeof window < `u`) {
        let { hash: e } = window.location;
        if (e && e.length > 2) {
          let i = e.substring(1);
          if (t) {
            let e = i.split(`&`);
            for (let n = 0; n < e.length; n++) {
              let i = e[n].indexOf(`=`);
              i > 0 &&
                e[n].substring(0, i) === t &&
                (r = e[n].substring(i + 1));
            }
          }
          if (r) return r;
          if (!r && n > -1) {
            let t = e.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(t)
              ? t[typeof n == `number` ? n : 0]?.replace(`/`, ``)
              : void 0;
          }
        }
      }
      return r;
    },
  },
  J = null,
  Y = () => {
    if (J !== null) return J;
    try {
      if (((J = typeof window < `u` && window.localStorage !== null), !J))
        return !1;
      let e = `i18next.translate.boo`;
      (window.localStorage.setItem(e, `foo`),
        window.localStorage.removeItem(e));
    } catch {
      J = !1;
    }
    return J;
  },
  be = {
    name: `localStorage`,
    lookup(e) {
      let { lookupLocalStorage: t } = e;
      if (t && Y()) return window.localStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupLocalStorage: n } = t;
      n && Y() && window.localStorage.setItem(n, e);
    },
  },
  X = null,
  xe = () => {
    if (X !== null) return X;
    try {
      if (((X = typeof window < `u` && window.sessionStorage !== null), !X))
        return !1;
      let e = `i18next.translate.boo`;
      (window.sessionStorage.setItem(e, `foo`),
        window.sessionStorage.removeItem(e));
    } catch {
      X = !1;
    }
    return X;
  },
  Se = {
    name: `sessionStorage`,
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && xe()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && xe() && window.sessionStorage.setItem(n, e);
    },
  },
  Ce = {
    name: `navigator`,
    lookup(e) {
      let t = [];
      if (typeof navigator < `u`) {
        let { languages: e, userLanguage: n, language: r } = navigator;
        if (e) for (let n = 0; n < e.length; n++) t.push(e[n]);
        (n && t.push(n), r && t.push(r));
      }
      return t.length > 0 ? t : void 0;
    },
  },
  we = {
    name: `htmlTag`,
    lookup(e) {
      let { htmlTag: t } = e,
        n,
        r = t || (typeof document < `u` ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == `function` &&
          (n = r.getAttribute(`lang`)),
        n
      );
    },
  },
  Te = {
    name: `path`,
    lookup(e) {
      let { lookupFromPathIndex: t } = e;
      if (typeof window > `u`) return;
      let n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (Array.isArray(n))
        return n[typeof t == `number` ? t : 0]?.replace(`/`, ``);
    },
  },
  Ee = {
    name: `subdomain`,
    lookup(e) {
      let { lookupFromSubdomainIndex: t } = e,
        n = typeof t == `number` ? t + 1 : 1,
        r =
          typeof window < `u` &&
          window.location?.hostname?.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
          );
      if (r) return r[n];
    },
  },
  De = !1;
try {
  (document.cookie, (De = !0));
} catch {}
var Oe = [
  `querystring`,
  `cookie`,
  `localStorage`,
  `sessionStorage`,
  `navigator`,
  `htmlTag`,
];
De || Oe.splice(1, 1);
