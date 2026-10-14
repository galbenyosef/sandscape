// chunk-KS7C4IRE-CgpSK45w 04 — props
// Lines 962-1310 of readable/assets/chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
function $e(e, t = [], n) {
  let i = n?.state;
  if (e == null) {
    if (!i) return null;
    if (i.errors) e = i.matches;
    else if (t.length === 0 && !i.initialized && i.matches.length > 0)
      e = i.matches;
    else return null;
  }
  let a = e,
    o = i?.errors;
  if (o != null) {
    let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
    (u(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(`,`)}`,
    ),
      (a = a.slice(0, Math.min(a.length, e + 1))));
  }
  let s = !1,
    c = -1;
  if (n && i) {
    s = i.renderFallback;
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: r } = i,
          o =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!r || r[t.route.id] === void 0);
        if (t.route.lazy || o) {
          (n.isStatic && (s = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]));
          break;
        }
      }
    }
  }
  let l = n?.onError,
    d =
      i && l
        ? (e, t) => {
            l(e, {
              location: i.location,
              params: i.matches?.[0]?.params ?? {},
              pattern: Se(i.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return a.reduceRight((e, n, l) => {
    let u,
      f = !1,
      p = null,
      m = null;
    i &&
      ((u = o && n.route.id ? o[n.route.id] : void 0),
      (p = n.route.errorElement || Ye),
      s &&
        (c < 0 && l === 0
          ? (ut(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (f = !0),
            (m = null))
          : c === l &&
            ((f = !0), (m = n.route.hydrateFallbackElement || null))));
    let h = t.concat(a.slice(0, l + 1)),
      g = () => {
        let t;
        return (
          (t = u
            ? p
            : f
              ? m
              : n.route.Component
                ? r.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          r.createElement(Qe, {
            match: n,
            routeContext: { outlet: e, matches: h, isDataRoute: i != null },
            children: t,
          })
        );
      };
    return i && (n.route.ErrorBoundary || n.route.errorElement || l === 0)
      ? r.createElement(Xe, {
          location: i.location,
          revalidation: i.revalidation,
          component: p,
          error: u,
          children: g(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          onError: d,
        })
      : g();
  }, null);
}
function et(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function tt(e) {
  let t = r.useContext(N);
  return (u(t, et(e)), t);
}
function nt(e) {
  let t = r.useContext(P);
  return (u(t, et(e)), t);
}
function rt(e) {
  let t = r.useContext(L);
  return (u(t, et(e)), t);
}
function W(e) {
  let t = rt(e),
    n = t.matches[t.matches.length - 1];
  return (
    u(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function it() {
  return W(`useRouteId`);
}
function at() {
  let e = nt(`useNavigation`);
  return r.useMemo(() => {
    let { matches: t, historyAction: n, ...r } = e.navigation;
    return r;
  }, [e.navigation]);
}
function ot() {
  let { matches: e, loaderData: t } = nt(`useMatches`);
  return r.useMemo(() => e.map((e) => x(e, t)), [e, t]);
}
function st() {
  let e = r.useContext(R),
    t = nt(`useRouteError`),
    n = W(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function ct() {
  let { router: e } = tt(`useNavigate`),
    t = W(`useNavigate`),
    n = r.useRef(!1);
  return (
    Ve(() => {
      n.current = !0;
    }),
    r.useCallback(
      async (r, i = {}) => {
        (d(n.current, Be),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var lt = {};
function ut(e, t, n) {
  !t && !lt[e] && ((lt[e] = !0), d(!1, n));
}
r.memo(dt);
function dt({
  routes: e,
  manifest: t,
  future: n,
  state: r,
  isStatic: i,
  onError: a,
}) {
  return qe(e, void 0, {
    manifest: t,
    state: r,
    isStatic: i,
    onError: a,
    future: n,
  });
}
function ft({ to: e, replace: t, state: n, relative: i }) {
  u(z(), `<Navigate> may be used only in the context of a <Router> component.`);
  let { static: a } = r.useContext(F);
  d(
    !a,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
  );
  let { matches: o } = r.useContext(L),
    { pathname: s } = B(),
    c = V(),
    l = A(e, he(o), s, i === `path`),
    f = JSON.stringify(l);
  return (
    r.useEffect(() => {
      c(JSON.parse(f), { replace: t, state: n, relative: i });
    }, [c, f, i, t, n]),
    null
  );
}
function pt(e) {
  return We(e.context);
}
function mt(e) {
  u(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function ht({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: i = `POP`,
  navigator: a,
  static: o = !1,
  useTransitions: s,
}) {
  u(
    !z(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let c = e.replace(/^\/*/, `/`),
    l = r.useMemo(
      () => ({
        basename: c,
        navigator: a,
        static: o,
        useTransitions: s,
        future: {},
      }),
      [c, a, o, s],
    );
  typeof n == `string` && (n = g(n));
  let {
      pathname: f = `/`,
      search: p = ``,
      hash: m = ``,
      state: h = null,
      key: _ = `default`,
      mask: v,
    } = n,
    y = r.useMemo(() => {
      let e = k(f, c);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: p,
              hash: m,
              state: h,
              key: _,
              mask: v,
            },
            navigationType: i,
          };
    }, [c, f, p, m, h, _, i, v]);
  return (
    d(
      y != null,
      `<Router basename="${c}"> is not able to match the URL "${f}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    y == null
      ? null
      : r.createElement(
          F.Provider,
          { value: l },
          r.createElement(I.Provider, { children: t, value: y }),
        )
  );
}
function gt({ children: e, location: t }) {
  return Ke(_t(e), t);
}
r.Component;
function _t(e, t = []) {
  let n = [];
  return (
    r.Children.forEach(e, (e, i) => {
      if (!r.isValidElement(e)) return;
      let a = [...t, i];
      if (e.type === r.Fragment) {
        n.push.apply(n, _t(e.props.children, a));
        return;
      }
      (u(
        e.type === mt,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        u(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let o = {
        id: e.props.id || a.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (o.children = _t(e.props.children, a)), n.push(o));
    }),
    n
  );
}
var G = `get`,
  K = `application/x-www-form-urlencoded`;
function q(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function vt(e) {
  return q(e) && e.tagName.toLowerCase() === `button`;
}
function yt(e) {
  return q(e) && e.tagName.toLowerCase() === `form`;
}
function bt(e) {
  return q(e) && e.tagName.toLowerCase() === `input`;
}
function xt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function St(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !xt(e);
}
