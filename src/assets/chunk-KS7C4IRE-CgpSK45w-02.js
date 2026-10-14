// chunk-KS7C4IRE-CgpSK45w 02 — pathname
// Lines 350-699 of readable/assets/chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
function ce(e, t, n, r) {
  let i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function le(e, t = !1, n = !0) {
  d(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function ue(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      d(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function k(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function de(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? g(e) : e,
    a;
  return (
    n
      ? ((n = ge(n)),
        (a = n.startsWith(`/`) ? fe(n.substring(1), `/`) : fe(n, t)))
      : (a = t),
    { pathname: a, search: ve(r), hash: ye(i) }
  );
}
function fe(e, t) {
  let n = M(t).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function pe(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function me(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function he(e) {
  let t = me(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function A(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = g(e))
    : ((i = { ...e }),
      u(
        !i.pathname || !i.pathname.includes(`?`),
        pe(`?`, `pathname`, `search`, i),
      ),
      u(
        !i.pathname || !i.pathname.includes(`#`),
        pe(`#`, `pathname`, `hash`, i),
      ),
      u(!i.search || !i.search.includes(`#`), pe(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`;) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = de(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    d = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || d) && (c.pathname += `/`), c);
}
var ge = (e) => e.replace(/[\\/]{2,}/g, `/`),
  j = (e) => ge(e.join(`/`)),
  M = (e) => e.replace(/\/+$/, ``),
  _e = (e) => M(e).replace(/^\/*/, `/`),
  ve = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  ye = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  be = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function xe(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function Se(e) {
  return j(e.map((e) => e.route.path).filter(Boolean)) || `/`;
}
var Ce =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function we(e, t) {
  let n = e;
  if (typeof n != `string` || !i.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    s = !1;
  if (Ce)
    try {
      let e = new URL(window.location.href),
        r = a.test(n) ? new URL(o(n, e.protocol)) : new URL(n),
        i = k(r.pathname, t);
      r.origin === e.origin && i != null
        ? (n = i + r.search + r.hash)
        : (s = !0);
    } catch {
      d(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: s, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Te = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Te);
var Ee = [`GET`, ...Te];
new Set(Ee);
var De = [
  `about:`,
  `blob:`,
  `chrome:`,
  `chrome-untrusted:`,
  `content:`,
  `data:`,
  `devtools:`,
  `file:`,
  `filesystem:`,
  `javascript:`,
];
function Oe(e) {
  try {
    return De.includes(new URL(e).protocol);
  } catch {
    return !1;
  }
}
var N = r.createContext(null);
N.displayName = `DataRouter`;
var P = r.createContext(null);
P.displayName = `DataRouterState`;
var ke = r.createContext(!1);
function Ae() {
  return r.useContext(ke);
}
var je = r.createContext({ isTransitioning: !1 });
je.displayName = `ViewTransition`;
var Me = r.createContext(new Map());
Me.displayName = `Fetchers`;
var Ne = r.createContext(null);
Ne.displayName = `Await`;
var F = r.createContext(null);
F.displayName = `Navigation`;
var I = r.createContext(null);
I.displayName = `Location`;
var L = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
L.displayName = `Route`;
var R = r.createContext(null);
R.displayName = `RouteError`;
var Pe = `REACT_ROUTER_ERROR`,
  Fe = `REDIRECT`,
  Ie = `ROUTE_ERROR_RESPONSE`;
function Le(e) {
  if (e.startsWith(`${Pe}:${Fe}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function Re(e) {
  if (e.startsWith(`${Pe}:${Ie}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new be(t.status, t.statusText, t.data);
    } catch {}
}
function ze(e, { relative: t } = {}) {
  u(z(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: i } = r.useContext(F),
    { hash: a, pathname: o, search: s } = H(e, { relative: t }),
    c = o;
  return (
    n !== `/` && (c = o === `/` ? n : j([n, o])),
    i.createHref({ pathname: c, search: s, hash: a })
  );
}
function z() {
  return r.useContext(I) != null;
}
function B() {
  return (
    u(
      z(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    r.useContext(I).location
  );
}
var Be = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function Ve(e) {
  r.useContext(F).static || r.useLayoutEffect(e);
}
function V() {
  let { isDataRoute: e } = r.useContext(L);
  return e ? ct() : He();
}
function He() {
  u(
    z(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = r.useContext(N),
    { basename: t, navigator: n } = r.useContext(F),
    { matches: i } = r.useContext(L),
    { pathname: a } = B(),
    o = JSON.stringify(he(i)),
    s = r.useRef(!1);
  return (
    Ve(() => {
      s.current = !0;
    }),
    r.useCallback(
      (r, i = {}) => {
        if ((d(s.current, Be), !s.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = A(r, JSON.parse(o), a, i.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : j([t, c.pathname])),
          (i.replace ? n.replace : n.push)(c, i.state, i));
      },
      [t, n, o, a, e],
    )
  );
}
var Ue = r.createContext(null);
function We(e) {
  let t = r.useContext(L).outlet;
  return r.useMemo(
    () => t && r.createElement(Ue.Provider, { value: e }, t),
    [t, e],
  );
}
function Ge() {
  let { matches: e } = r.useContext(L);
  return e[e.length - 1]?.params ?? {};
}
