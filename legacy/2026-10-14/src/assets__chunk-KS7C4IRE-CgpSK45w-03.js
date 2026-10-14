// assets__chunk-KS7C4IRE-CgpSK45w 03 — error
// Lines 700-961 of readable/assets__chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
function H(e, { relative: t } = {}) {
  let { matches: n } = r.useContext(L),
    { pathname: i } = B(),
    a = JSON.stringify(he(n));
  return r.useMemo(() => A(e, JSON.parse(a), i, t === `path`), [e, a, i, t]);
}
function Ke(e, t) {
  return qe(e, t);
}
function qe(e, t, n) {
  u(
    z(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: i } = r.useContext(F),
    { matches: a } = r.useContext(L),
    o = a[a.length - 1],
    s = o ? o.params : {},
    c = o ? o.pathname : `/`,
    l = o ? o.pathnameBase : `/`,
    f = o && o.route;
  {
    let e = (f && f.path) || ``;
    ut(
      c,
      !f || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let p = B(),
    m;
  if (t) {
    let e = typeof t == `string` ? g(t) : t;
    (u(
      l === `/` || e.pathname?.startsWith(l),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (m = e));
  } else m = p;
  let h = m.pathname || `/`,
    _ = h;
  if (l !== `/`) {
    let e = l.replace(/^\//, ``).split(`/`);
    _ = `/` + h.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let v =
    n && n.state.matches.length
      ? n.state.matches.map((e) =>
          Object.assign(e, { route: n.manifest[e.route.id] || e.route }),
        )
      : y(e, { pathname: _ });
  (d(
    f || v != null,
    `No routes matched location "${m.pathname}${m.search}${m.hash}" `,
  ),
    d(
      v == null ||
        v[v.length - 1].route.element !== void 0 ||
        v[v.length - 1].route.Component !== void 0 ||
        v[v.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let b = $e(
    v &&
      v.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, s, e.params),
          pathname: j([
            l,
            i.encodeLocation
              ? i.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? l
              : j([
                  l,
                  i.encodeLocation
                    ? i.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    a,
    n,
  );
  return t && b
    ? r.createElement(
        I.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              mask: void 0,
              ...m,
            },
            navigationType: `POP`,
          },
        },
        b,
      )
    : b;
}
function Je() {
  let e = st(),
    t = xe(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = `rgba(200,200,200, 0.5)`,
    a = { padding: `0.5rem`, backgroundColor: i },
    o = { padding: `2px 4px`, backgroundColor: i },
    s = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (s = r.createElement(
      r.Fragment,
      null,
      r.createElement(`p`, null, `💿 Hey developer 👋`),
      r.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        r.createElement(`code`, { style: o }, `ErrorBoundary`),
        ` or`,
        ` `,
        r.createElement(`code`, { style: o }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    r.createElement(
      r.Fragment,
      null,
      r.createElement(`h2`, null, `Unexpected Application Error!`),
      r.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? r.createElement(`pre`, { style: a }, n) : null,
      s,
    )
  );
}
var Ye = r.createElement(Je, null),
  Xe = class extends r.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = Re(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : r.createElement(
              L.Provider,
              { value: this.props.routeContext },
              r.createElement(R.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? r.createElement(Ze, { error: e }, t) : t;
    }
  };
Xe.contextType = ke;
var U = new WeakMap();
function Ze({ children: e, error: t }) {
  let { basename: n } = r.useContext(F);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = Le(t.digest);
    if (e) {
      let i = U.get(t);
      if (i) throw i;
      let a = we(e.location, n),
        o = a.absoluteURL || a.to;
      if (Oe(o)) throw Error(`Invalid redirect location`);
      if (Ce && !U.get(t))
        if (a.isExternal || e.reloadDocument) window.location.href = o;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(a.to, {
              replace: e.replace,
            }),
          );
          throw (U.set(t, n), n);
        }
      return r.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${o}`,
      });
    }
  }
  return e;
}
function Qe({ routeContext: e, match: t, children: n }) {
  let i = r.useContext(N);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = t.route.id),
    r.createElement(L.Provider, { value: e }, n)
  );
}
