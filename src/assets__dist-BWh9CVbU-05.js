// assets__dist-BWh9CVbU 05 — current
// Lines 1384-1592 of readable/assets__dist-BWh9CVbU.pretty.js (statement-aligned).
function vt(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = qe(e),
    u = i || a ? [...(l ? We(l) : []), ...(t ? We(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? _t(l, n, a) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Q(e) : null;
  c && g();
  function g() {
    let t = Q(e);
    (h && !gt(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var yt = Te,
  bt = Ee,
  xt = ye,
  St = Oe,
  Ct = Se,
  wt = ve,
  Tt = De,
  Et = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...ht, ...i.platform, _c: r };
    return _e(e, t, { ...i, platform: a });
  },
  Dt = e(r(), 1),
  Ot = typeof document < `u` ? f.useLayoutEffect : function () {};
function kt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!kt(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !kt(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function At(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function jt(e, t) {
  let n = At(e);
  return Math.round(t * n) / n;
}
function Mt(e) {
  let t = f.useRef(e);
  return (
    Ot(() => {
      t.current = e;
    }),
    t
  );
}
function Nt(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = f.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, m] = f.useState(r);
  kt(p, r) || m(r);
  let [h, g] = f.useState(null),
    [_, v] = f.useState(null),
    y = f.useCallback((e) => {
      e !== C.current && ((C.current = e), g(e));
    }, []),
    b = f.useCallback((e) => {
      e !== w.current && ((w.current = e), v(e));
    }, []),
    x = a || h,
    S = o || _,
    C = f.useRef(null),
    w = f.useRef(null),
    T = f.useRef(u),
    E = c != null,
    D = Mt(c),
    O = Mt(i),
    k = Mt(l),
    A = f.useCallback(() => {
      if (!C.current || !w.current) return;
      let e = { placement: t, strategy: n, middleware: p };
      (O.current && (e.platform = O.current),
        Et(C.current, w.current, e).then((e) => {
          let t = { ...e, isPositioned: k.current !== !1 };
          j.current &&
            !kt(T.current, t) &&
            ((T.current = t),
            Dt.flushSync(() => {
              d(t);
            }));
        }));
    }, [p, t, n, O, k]);
  Ot(() => {
    l === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let j = f.useRef(!1);
  (Ot(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    [],
  ),
    Ot(() => {
      if ((x && (C.current = x), S && (w.current = S), x && S)) {
        if (D.current) return D.current(x, S, A);
        A();
      }
    }, [x, S, A, D, E]));
  let M = f.useMemo(
      () => ({ reference: C, floating: w, setReference: y, setFloating: b }),
      [y, b],
    ),
    N = f.useMemo(() => ({ reference: x, floating: S }), [x, S]),
    P = f.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!N.floating) return e;
      let t = jt(N.floating, u.x),
        r = jt(N.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(At(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, N.floating, u.x, u.y]);
  return f.useMemo(
    () => ({ ...u, update: A, refs: M, elements: N, floatingStyles: P }),
    [u, A, M, N, P],
  );
}
