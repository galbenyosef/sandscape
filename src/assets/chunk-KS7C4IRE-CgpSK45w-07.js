// chunk-KS7C4IRE-CgpSK45w 07 — pathname
// Lines 1967-2310 of readable/assets/chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
var nn = r.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: a,
      replace: o,
      state: s,
      method: c = G,
      action: l,
      onSubmit: u,
      relative: d,
      preventScrollReset: f,
      viewTransition: p,
      defaultShouldRevalidate: m,
      ...h
    },
    g,
  ) => {
    let { useTransitions: _ } = r.useContext(F),
      v = fn(),
      y = pn(l, { relative: d }),
      b = c.toLowerCase() === `get` ? `get` : `post`,
      x = typeof l == `string` && i.test(l);
    return r.createElement(`form`, {
      ref: g,
      method: b,
      action: y,
      onSubmit: a
        ? u
        : (e) => {
            if ((u && u(e), e.defaultPrevented)) return;
            e.preventDefault();
            let i = e.nativeEvent.submitter,
              a = i?.getAttribute(`formmethod`) || c,
              l = () =>
                v(i || e.currentTarget, {
                  fetcherKey: t,
                  method: a,
                  navigate: n,
                  replace: o,
                  state: s,
                  relative: d,
                  preventScrollReset: f,
                  viewTransition: p,
                  defaultShouldRevalidate: m,
                });
            _ && n !== !1 ? r.startTransition(() => l()) : l();
          },
      ...h,
      "data-discover": !x && e === `render` ? `true` : void 0,
    });
  },
);
nn.displayName = `Form`;
function rn({ getKey: e, storageKey: t, ...n }) {
  let i = r.useContext(Y),
    { basename: a } = r.useContext(F),
    o = B(),
    s = ot();
  hn({ getKey: e, storageKey: t });
  let c = r.useMemo(() => {
    if (!i || !e) return null;
    let t = mn(o, s, a, e);
    return t === o.key ? null : t;
  }, []);
  if (!i || i.isSpaMode) return null;
  let l = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      (console.error(t), sessionStorage.removeItem(e));
    }
  }).toString();
  return (
    n.nonce == null && i?.nonce && (n.nonce = i.nonce),
    r.createElement(`script`, {
      ...n,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${l})(${jt(JSON.stringify(t || Q))}, ${jt(JSON.stringify(c))})`,
      },
    })
  );
}
rn.displayName = `ScrollRestoration`;
function an(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function on(e) {
  let t = r.useContext(N);
  return (u(t, an(e)), t);
}
function sn(e) {
  let t = r.useContext(P);
  return (u(t, an(e)), t);
}
function cn(
  e,
  {
    target: t,
    replace: n,
    mask: i,
    state: a,
    preventScrollReset: o,
    relative: s,
    viewTransition: c,
    defaultShouldRevalidate: l,
    useTransitions: u,
  } = {},
) {
  let d = V(),
    f = B(),
    p = H(e, { relative: s });
  return r.useCallback(
    (m) => {
      if (St(m, t)) {
        m.preventDefault();
        let t = n === void 0 ? h(f) === h(p) : n,
          g = () =>
            d(e, {
              replace: t,
              mask: i,
              state: a,
              preventScrollReset: o,
              relative: s,
              viewTransition: c,
              defaultShouldRevalidate: l,
            });
        u ? r.startTransition(() => g()) : g();
      }
    },
    [f, d, p, n, i, a, t, e, o, s, c, l, u],
  );
}
function ln(e) {
  d(
    typeof URLSearchParams < `u`,
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let t = r.useRef(Ct(e)),
    n = r.useRef(!1),
    i = B(),
    a = r.useMemo(() => wt(i.search, n.current ? null : t.current), [i.search]),
    o = V();
  return [
    a,
    r.useCallback(
      (e, t) => {
        let r = Ct(typeof e == `function` ? e(new URLSearchParams(a)) : e);
        ((n.current = !0), o(`?` + r, t));
      },
      [o, a],
    ),
  ];
}
var un = 0,
  dn = () => `__${String(++un)}__`;
function fn() {
  let { router: e } = on(`useSubmit`),
    { basename: t } = r.useContext(F),
    n = it(),
    i = e.fetch,
    a = e.navigate;
  return r.useCallback(
    async (e, r = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = Ot(e, t);
      if (r.navigate === !1) {
        let e = r.fetcherKey || dn();
        await i(e, n, r.action || o, {
          defaultShouldRevalidate: r.defaultShouldRevalidate,
          preventScrollReset: r.preventScrollReset,
          formData: l,
          body: u,
          formMethod: r.method || s,
          formEncType: r.encType || c,
          flushSync: r.flushSync,
        });
      } else
        await a(r.action || o, {
          defaultShouldRevalidate: r.defaultShouldRevalidate,
          preventScrollReset: r.preventScrollReset,
          formData: l,
          body: u,
          formMethod: r.method || s,
          formEncType: r.encType || c,
          replace: r.replace,
          state: r.state,
          fromRouteId: n,
          flushSync: r.flushSync,
          viewTransition: r.viewTransition,
        });
    },
    [i, a, t, n],
  );
}
function pn(e, { relative: t } = {}) {
  let { basename: n } = r.useContext(F),
    i = r.useContext(L);
  u(i, `useFormAction must be used inside a RouteContext`);
  let [a] = i.matches.slice(-1),
    o = { ...H(e || `.`, { relative: t }) },
    s = B();
  if (e == null) {
    o.search = s.search;
    let e = new URLSearchParams(o.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      o.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (o.pathname = o.pathname === `/` ? n : j([n, o.pathname])),
    h(o)
  );
}
var Q = `react-router-scroll-positions`,
  $ = {};
function mn(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: k(e.pathname, n) || e.pathname },
        t,
      )),
    (i ??= e.key),
    i
  );
}
function hn({ getKey: e, storageKey: t } = {}) {
  let { router: n } = on(`useScrollRestoration`),
    { restoreScrollPosition: i, preventScrollReset: a } =
      sn(`useScrollRestoration`),
    { basename: o } = r.useContext(F),
    s = B(),
    c = ot(),
    l = at();
  (r.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    [],
  ),
    gn(
      r.useCallback(() => {
        if (l.state === `idle`) {
          let t = mn(s, c, o, e);
          $[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || Q, JSON.stringify($));
        } catch (e) {
          d(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`,
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [l.state, e, o, s, c, t]),
    ),
    typeof document < `u` &&
      (r.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || Q);
          e && ($ = JSON.parse(e));
        } catch {}
      }, [t]),
      r.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          $,
          () => window.scrollY,
          e ? (t, n) => mn(t, n, o, e) : void 0,
        );
        return () => t && t();
      }, [n, o, e]),
      r.useLayoutEffect(() => {
        if (i !== !1) {
          if (typeof i == `number`) {
            window.scrollTo(0, i);
            return;
          }
          try {
            if (s.hash) {
              let e = document.getElementById(
                decodeURIComponent(s.hash.slice(1)),
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            d(
              !1,
              `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          a !== !0 && window.scrollTo(0, 0);
        }
      }, [s, i, a])));
}
function gn(e, t) {
  let { capture: n } = t || {};
  r.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function _n(e, { relative: t } = {}) {
  let n = r.useContext(je);
  u(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: i } = on(`useViewTransitionState`),
    a = H(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let o = k(n.currentLocation.pathname, i) || n.currentLocation.pathname,
    s = k(n.nextLocation.pathname, i) || n.nextLocation.pathname;
  return O(a.pathname, s) != null || O(a.pathname, o) != null;
}
