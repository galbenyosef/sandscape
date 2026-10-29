// dist-BfZydly7 05 — current
// Lines 1383-1662 of readable/assets/dist-BfZydly7.pretty.js (statement-aligned).
function _t(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Ke(e),
    u = i || a ? [...(l ? Ue(l) : []), ...(t ? Ue(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n),
      a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? gt(l, n, a) : null,
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
    (h && !ht(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
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
var vt = we,
  yt = Te,
  bt = ve,
  xt = De,
  St = xe,
  Ct = _e,
  wt = Ee,
  Tt = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...mt, ...i.platform, _c: r };
    return ge(e, t, { ...i, platform: a });
  },
  Et = e(r(), 1),
  Dt = typeof document < `u` ? d.useLayoutEffect : function () {};
function Ot(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!Ot(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !Ot(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function kt(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function At(e, t) {
  let n = kt(e);
  return Math.round(t * n) / n;
}
function jt(e) {
  let t = d.useRef(e);
  return (
    Dt(() => {
      t.current = e;
    }),
    t
  );
}
function Mt(e) {
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
    [u, f] = d.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, m] = d.useState(r);
  Ot(p, r) || m(r);
  let [h, g] = d.useState(null),
    [_, v] = d.useState(null),
    y = d.useCallback((e) => {
      e !== C.current && ((C.current = e), g(e));
    }, []),
    b = d.useCallback((e) => {
      e !== w.current && ((w.current = e), v(e));
    }, []),
    x = a || h,
    S = o || _,
    C = d.useRef(null),
    w = d.useRef(null),
    T = d.useRef(u),
    E = c != null,
    D = jt(c),
    O = jt(i),
    k = jt(l),
    A = d.useCallback(() => {
      if (!C.current || !w.current) return;
      let e = { placement: t, strategy: n, middleware: p };
      (O.current && (e.platform = O.current),
        Tt(C.current, w.current, e).then((e) => {
          let t = { ...e, isPositioned: k.current !== !1 };
          j.current &&
            !Ot(T.current, t) &&
            ((T.current = t),
            Et.flushSync(() => {
              f(t);
            }));
        }));
    }, [p, t, n, O, k]);
  Dt(() => {
    l === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let j = d.useRef(!1);
  (Dt(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    [],
  ),
    Dt(() => {
      if ((x && (C.current = x), S && (w.current = S), x && S)) {
        if (D.current) return D.current(x, S, A);
        A();
      }
    }, [x, S, A, D, E]));
  let M = d.useMemo(
      () => ({ reference: C, floating: w, setReference: y, setFloating: b }),
      [y, b],
    ),
    N = d.useMemo(() => ({ reference: x, floating: S }), [x, S]),
    P = d.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!N.floating) return e;
      let t = At(N.floating, u.x),
        r = At(N.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(kt(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, N.floating, u.x, u.y]);
  return d.useMemo(
    () => ({ ...u, update: A, refs: M, elements: N, floatingStyles: P }),
    [u, A, M, N, P],
  );
}
var Nt = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`);
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
        return r && t(r)
          ? r.current == null
            ? {}
            : Ct({ element: r.current, padding: i }).fn(n)
          : r
            ? Ct({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  Pt = (e, t) => {
    let n = vt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ft = (e, t) => {
    let n = yt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  It = (e, t) => ({ fn: wt(e).fn, options: [e, t] }),
  Lt = (e, t) => {
    let n = bt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Rt = (e, t) => {
    let n = xt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  zt = (e, t) => {
    let n = St(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Bt = (e, t) => {
    let n = Nt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Vt = Object.defineProperty,
  Ht = (e, t) => Vt(e, `name`, { value: t, configurable: !0 });
function Ut(e) {
  let [t, n] = d.useState(void 0);
  return (
    o(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
Ht(Ut, `useSize`);
