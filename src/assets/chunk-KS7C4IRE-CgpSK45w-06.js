// chunk-KS7C4IRE-CgpSK45w 06 — createelement
// Lines 1653-1966 of readable/assets/chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
function Kt({ page: e, ...t }) {
  let n = Ae(),
    { nonce: i } = X(),
    { router: a } = Ut(),
    o = r.useMemo(() => y(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return o
    ? (t.nonce == null && i && (t = { ...t, nonce: i }),
      n
        ? r.createElement(Jt, { page: e, matches: o, ...t })
        : r.createElement(Yt, { page: e, matches: o, ...t }))
    : null;
}
function qt(e) {
  let { manifest: t, routeModules: n } = X(),
    [i, a] = r.useState([]);
  return (
    r.useEffect(() => {
      let r = !1;
      return (
        Lt(e, t, n).then((e) => {
          r || a(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    i
  );
}
function Jt({ page: e, matches: t, ...n }) {
  let i = B(),
    { future: a } = X(),
    { basename: o } = Ut(),
    s = r.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let n = Nt(e, o, a.v8_trailingSlashAwareDataRequests, `rsc`),
        r = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (r = !0)
          : s.push(e.route.id);
      return (
        r && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [o, a.v8_trailingSlashAwareDataRequests, e, i, t]);
  return r.createElement(
    r.Fragment,
    null,
    s.map((e) =>
      r.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function Yt({ page: e, matches: t, ...n }) {
  let i = B(),
    { future: a, manifest: o, routeModules: s } = X(),
    { basename: c } = Ut(),
    { loaderData: l, matches: u } = Wt(),
    d = r.useMemo(() => Rt(e, t, u, o, i, `data`), [e, t, u, o, i]),
    f = r.useMemo(() => Rt(e, t, u, o, i, `assets`), [e, t, u, o, i]),
    p = r.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let n = new Set(),
        r = !1;
      if (
        (t.forEach((e) => {
          let t = o.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!d.some((t) => t.route.id === e.route.id) &&
              e.route.id in l &&
              s[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (r = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let u = Nt(e, c, a.v8_trailingSlashAwareDataRequests, `data`);
      return (
        r &&
          n.size > 0 &&
          u.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [u.pathname + u.search]
      );
    }, [c, a.v8_trailingSlashAwareDataRequests, l, i, o, d, t, e, s]),
    m = r.useMemo(() => zt(f, o), [f, o]),
    h = qt(f);
  return r.createElement(
    r.Fragment,
    null,
    p.map((e) =>
      r.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    m.map((e) =>
      r.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    h.map(({ key: e, link: t }) =>
      r.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function Xt(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
r.Component;
var Zt =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  Zt && (window.__reactRouterVersion = `7.18.1`);
} catch {}
function Qt({ basename: e, children: t, useTransitions: n, window: i }) {
  let a = r.useRef();
  a.current ??= l({ window: i, v5Compat: !0 });
  let o = a.current,
    [s, c] = r.useState({ action: o.action, location: o.location }),
    u = r.useCallback(
      (e) => {
        n === !1 ? c(e) : r.startTransition(() => c(e));
      },
      [n],
    );
  return (
    r.useLayoutEffect(() => o.listen(u), [o, u]),
    r.createElement(ht, {
      basename: e,
      children: t,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      useTransitions: n,
    })
  );
}
function $t({ basename: e, children: t, history: n, useTransitions: i }) {
  let [a, o] = r.useState({ action: n.action, location: n.location }),
    s = r.useCallback(
      (e) => {
        i === !1 ? o(e) : r.startTransition(() => o(e));
      },
      [i],
    );
  return (
    r.useLayoutEffect(() => n.listen(s), [n, s]),
    r.createElement(ht, {
      basename: e,
      children: t,
      location: a.location,
      navigationType: a.action,
      navigator: n,
      useTransitions: i,
    })
  );
}
$t.displayName = `unstable_HistoryRouter`;
var en = r.forwardRef(function (
  {
    onClick: e,
    discover: t = `render`,
    prefetch: n = `none`,
    relative: a,
    reloadDocument: o,
    replace: s,
    mask: c,
    state: l,
    target: u,
    to: d,
    preventScrollReset: f,
    viewTransition: p,
    defaultShouldRevalidate: m,
    ...h
  },
  g,
) {
  let { basename: _, navigator: v, useTransitions: y } = r.useContext(F),
    b = typeof d == `string` && i.test(d),
    x = we(d, _);
  d = x.to;
  let S = ze(d, { relative: a }),
    C = B(),
    w = null;
  if (c) {
    let e = A(c, [], C.mask ? C.mask.pathname : `/`, !0);
    (_ !== `/` && (e.pathname = e.pathname === `/` ? _ : j([_, e.pathname])),
      (w = v.createHref(e)));
  }
  let [T, E, ee] = Gt(n, h),
    te = cn(d, {
      replace: s,
      mask: c,
      state: l,
      target: u,
      preventScrollReset: f,
      relative: a,
      viewTransition: p,
      defaultShouldRevalidate: m,
      useTransitions: y,
    });
  function ne(t) {
    (e && e(t), t.defaultPrevented || te(t));
  }
  let re = !(x.isExternal || o),
    D = r.createElement(`a`, {
      ...h,
      ...ee,
      href: (re ? w : void 0) || x.absoluteURL || S,
      onClick: re ? ne : e,
      ref: Xt(g, E),
      target: u,
      "data-discover": !b && t === `render` ? `true` : void 0,
    });
  return T && !b
    ? r.createElement(r.Fragment, null, D, r.createElement(Kt, { page: S }))
    : D;
});
en.displayName = `Link`;
var tn = r.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: i = !1,
    style: a,
    to: o,
    viewTransition: s,
    children: c,
    ...l
  },
  u,
) {
  let d = H(o, { relative: l.relative }),
    f = B(),
    p = r.useContext(P),
    { navigator: m, basename: h } = r.useContext(F),
    g = p != null && _n(d) && s === !0,
    _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
    v = f.pathname,
    y =
      p && p.navigation && p.navigation.location
        ? p.navigation.location.pathname
        : null;
  (t ||
    ((v = v.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (_ = _.toLowerCase())),
    y && h && (y = k(y, h) || y));
  let b = _ !== `/` && _.endsWith(`/`) ? _.length - 1 : _.length,
    x = v === _ || (!i && v.startsWith(_) && v.charAt(b) === `/`),
    S =
      y != null &&
      (y === _ || (!i && y.startsWith(_) && y.charAt(_.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: g },
    w = x ? e : void 0,
    T;
  T =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          g ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let E = typeof a == `function` ? a(C) : a;
  return r.createElement(
    en,
    {
      ...l,
      "aria-current": w,
      className: T,
      ref: u,
      style: E,
      to: o,
      viewTransition: s,
    },
    typeof c == `function` ? c(C) : c,
  );
});
tn.displayName = `NavLink`;
