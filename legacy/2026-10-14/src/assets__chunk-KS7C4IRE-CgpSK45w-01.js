// assets__chunk-KS7C4IRE-CgpSK45w 01 — location
// Lines 1-349 of readable/assets__chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t } from "./jsx-runtime-BtyjnKZj.js";
import { t as n } from "./preload-helper-Czpn1I53.js";
var r = e(t(), 1),
  i = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  a = /^[\\/]{2}/;
function o(e, t) {
  return t + e.replace(/\\/g, `/`);
}
var s = `popstate`;
function c(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function l(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return m(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : h(t);
  }
  return _(t, n, null, e);
}
function u(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function d(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function f() {
  return Math.random().toString(36).substring(2, 10);
}
function p(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function m(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? g(t) : t),
    state: n,
    key: (t && t.key) || r || f(),
    mask: i,
  };
}
function h({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function g(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function _(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    l = `POP`,
    u = null,
    d = f();
  d ?? ((d = 0), o.replaceState({ ...o.state, idx: d }, ``));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    l = `POP`;
    let e = f(),
      t = e == null ? null : e - d;
    ((d = e), u && u({ action: l, location: b.location, delta: t }));
  }
  function g(e, t) {
    l = `PUSH`;
    let r = c(e) ? e : m(b.location, e, t);
    (n && n(r, e), (d = f() + 1));
    let s = p(r, d),
      h = b.createHref(r.mask || r);
    try {
      o.pushState(s, ``, h);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(h);
    }
    a && u && u({ action: l, location: b.location, delta: 1 });
  }
  function _(e, t) {
    l = `REPLACE`;
    let r = c(e) ? e : m(b.location, e, t);
    (n && n(r, e), (d = f()));
    let i = p(r, d),
      s = b.createHref(r.mask || r);
    (o.replaceState(i, ``, s),
      a && u && u({ action: l, location: b.location, delta: 0 }));
  }
  function y(e) {
    return v(i, e);
  }
  let b = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (u) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(s, h),
        (u = e),
        () => {
          (i.removeEventListener(s, h), (u = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: y,
    encodeLocation(e) {
      let t = y(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: g,
    replace: _,
    go(e) {
      return o.go(e);
    },
  };
  return b;
}
function v(e, t, n = !1) {
  let r = `http://localhost`;
  (e &&
    (r = e.location.origin === `null` ? e.location.href : e.location.origin),
    u(r, `No window.location.(origin|href) available to create URL`));
  let i = typeof t == `string` ? t : h(t);
  return (
    (i = i.replace(/ $/, `%20`)),
    !n && a.test(i) && (i = r + i),
    new URL(i, r)
  );
}
function y(e, t, n = `/`) {
  return b(e, t, n, !1);
}
function b(e, t, n, r, i) {
  let a = k((typeof t == `string` ? g(t) : t).pathname || `/`, n);
  if (a == null) return null;
  let o = i ?? S(e),
    s = null,
    c = ue(a);
  for (let e = 0; s == null && e < o.length; ++e) s = se(o[e], c, r);
  return s;
}
function x(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function S(e) {
  let t = C(e);
  return (T(t), t);
}
function C(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (u(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = j([r, c.relativePath]),
      d = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (u(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      C(e.children, t, d, l, o)),
      !(e.path == null && !e.index) &&
        t.push({
          path: l,
          score: ae(l, e.index),
          routesMeta: d.map((e, t) => {
            let [n, r] = le(
              e.relativePath,
              e.caseSensitive,
              t === d.length - 1,
            );
            return { ...e, matcher: n, compiledParams: r };
          }),
        }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of w(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function w(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = w(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function T(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? oe(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var E = /^:[\w-]+$/,
  ee = 3,
  te = 2,
  ne = 1,
  re = 10,
  D = -2,
  ie = (e) => e === `*`;
function ae(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(ie) && (r += D),
    t && (r += te),
    n
      .filter((e) => !ie(e))
      .reduce((e, t) => e + (E.test(t) ? ee : t === `` ? ne : re), r)
  );
}
function oe(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function se(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
      d =
        s.matcher && s.compiledParams
          ? ce(u, l, s.matcher, s.compiledParams)
          : O(u, l),
      f = s.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = O(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: j([a, d.pathname]),
        pathnameBase: _e(j([a, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== `/` && (a = j([a, d.pathnameBase])));
  }
  return o;
}
function O(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = le(e.path, e.caseSensitive, e.end);
  return ce(e, t, n, r);
}
