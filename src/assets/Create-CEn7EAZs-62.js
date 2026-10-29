// Create-CEn7EAZs 62 — current
// Lines 19584-19938 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Xne = Object.defineProperty,
  Tp = (e, t) => Xne(e, `name`, { value: t, configurable: !0 }),
  Ep = [`PageUp`, `PageDown`],
  Dp = [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`],
  Op = {
    "from-left": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-right": [`Home`, `PageDown`, `ArrowDown`, `ArrowRight`],
    "from-bottom": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-top": [`Home`, `PageDown`, `ArrowUp`, `ArrowLeft`],
  },
  kp = `Slider`,
  [Ap, Zne, Qne] = g(kp),
  [jp, $ne] = f(kp, [Qne]),
  [ere, Mp] = jp(kp),
  Np = X.forwardRef(
    Tp(function (e, t) {
      let {
          name: n,
          min: r = 0,
          max: i = 100,
          step: a = 1,
          orientation: o = `horizontal`,
          disabled: s = !1,
          minStepsBetweenThumbs: c = 0,
          preserveThumbOrder: l = !1,
          defaultValue: u = [r],
          value: f,
          onValueChange: p = Tp(() => {}, `onValueChange`),
          onValueCommit: h = Tp(() => {}, `onValueCommit`),
          inverted: g = !1,
          form: _,
          ...v
        } = e,
        b = X.useRef(new Set()),
        x = X.useRef(0),
        S = X.useRef(!1),
        C = o === `horizontal` ? tre : nre,
        [w, T] = X.useState(null),
        E = m(t, T),
        [D = [], O] = y({
          prop: f,
          defaultProp: u,
          onChange: Tp((e) => {
            ([...b.current][x.current]?.focus({
              preventScroll: !0,
              focusVisible: S.current,
            }),
              (S.current = !1),
              p(e));
          }, `onChange`),
        }),
        k = X.useRef(D),
        A = X.useRef(D);
      X.useEffect(() => {
        let e = _ ? w?.ownerDocument.getElementById(_) : w?.closest(`form`);
        if (e instanceof HTMLFormElement) {
          let t = Tp(() => O(A.current), `reset`);
          return (
            e.addEventListener(`reset`, t),
            () => e.removeEventListener(`reset`, t)
          );
        }
      }, [w, _, O]);
      function j(e) {
        P(e, qp(D, e));
      }
      Tp(j, `handleSlideStart`);
      function M(e) {
        P(e, x.current);
      }
      Tp(M, `handleSlideMove`);
      function N() {
        String(D) !== String(k.current) && h(D);
      }
      Tp(N, `handleSlideEnd`);
      function P(e, t, { commit: n } = { commit: !1 }) {
        let o = Qp(a),
          s = hr($p(Math.round((e - r) / a) * a + r, o), [r, i]);
        O((e = []) => {
          let o = c * a,
            u = l
              ? hr(s, [
                  e[t - 1] === void 0 ? r : e[t - 1] + o,
                  e[t + 1] === void 0 ? i : e[t + 1] - o,
                ])
              : s,
            d = Wp(e, u, t);
          if (Xp(d, o)) {
            x.current = l ? t : d.indexOf(u);
            let r = String(d) !== String(e);
            return (r && n && h(d), r ? d : e);
          } else return e;
        });
      }
      return (
        Tp(P, `updateValues`),
        (0, Z.jsx)(ere, {
          scope: e.__scopeSlider,
          name: n,
          disabled: s,
          min: r,
          max: i,
          valueIndexToChangeRef: x,
          thumbs: b.current,
          values: D,
          orientation: o,
          form: _,
          children: (0, Z.jsx)(Ap.Provider, {
            scope: e.__scopeSlider,
            children: (0, Z.jsx)(Ap.Slot, {
              scope: e.__scopeSlider,
              children: (0, Z.jsx)(C, {
                "aria-disabled": s,
                "data-disabled": s ? `` : void 0,
                ...v,
                ref: E,
                onPointerDown: d(v.onPointerDown, () => {
                  s || ((k.current = D), (S.current = !1));
                }),
                min: r,
                max: i,
                inverted: g,
                onSlideStart: s ? void 0 : j,
                onSlideMove: s ? void 0 : M,
                onSlideEnd: s ? void 0 : N,
                onHomeKeyDown: () => {
                  s || ((S.current = !0), P(r, 0, { commit: !0 }));
                },
                onEndKeyDown: () => {
                  s || ((S.current = !0), P(i, D.length - 1, { commit: !0 }));
                },
                onStepKeyDown: ({ event: e, direction: t }) => {
                  if (!s) {
                    S.current = !0;
                    let n =
                        Ep.includes(e.key) || (e.shiftKey && Dp.includes(e.key))
                          ? 10
                          : 1,
                      i = x.current,
                      o = D[i];
                    P(
                      em(o, { min: r, step: a, direction: t, multiplier: n }),
                      i,
                      { commit: !0 },
                    );
                  }
                },
              }),
            }),
          }),
        })
      );
    }, `Slider`),
  ),
  [Pp, Fp] = jp(kp, {
    startEdge: `left`,
    endEdge: `right`,
    size: `width`,
    direction: 1,
  }),
  tre = X.forwardRef(
    Tp(function (e, t) {
      let {
          min: n,
          max: r,
          dir: i,
          inverted: a,
          onSlideStart: o,
          onSlideMove: s,
          onSlideEnd: c,
          onStepKeyDown: l,
          ...u
        } = e,
        [d, f] = X.useState(null),
        p = m(t, f),
        h = X.useRef(void 0),
        g = _ee(i),
        _ = g === `ltr`,
        v = (_ && !a) || (!_ && a);
      function y(e) {
        let t = h.current || d.getBoundingClientRect(),
          i = Zp([0, t.width], v ? [n, r] : [r, n]);
        return ((h.current = t), i(e - t.left));
      }
      return (
        Tp(y, `getValueFromPointer`),
        (0, Z.jsx)(Pp, {
          scope: e.__scopeSlider,
          startEdge: v ? `left` : `right`,
          endEdge: v ? `right` : `left`,
          direction: v ? 1 : -1,
          size: `width`,
          children: (0, Z.jsx)(Ip, {
            dir: g,
            "data-orientation": `horizontal`,
            ...u,
            ref: p,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": `translateX(-50%)`,
            },
            onSlideStart: (e) => {
              let t = y(e.clientX);
              o?.(t);
            },
            onSlideMove: (e) => {
              let t = y(e.clientX);
              s?.(t);
            },
            onSlideEnd: () => {
              ((h.current = void 0), c?.());
            },
            onStepKeyDown: (e) => {
              let t = Op[v ? `from-left` : `from-right`].includes(e.key);
              l?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        })
      );
    }, `SliderHorizontal`),
  ),
  nre = X.forwardRef(
    Tp(function (e, t) {
      let {
          min: n,
          max: r,
          inverted: i,
          onSlideStart: a,
          onSlideMove: o,
          onSlideEnd: s,
          onStepKeyDown: c,
          ...l
        } = e,
        u = X.useRef(null),
        d = m(t, u),
        f = X.useRef(void 0),
        p = !i;
      function h(e) {
        let t = f.current || u.current.getBoundingClientRect(),
          i = Zp([0, t.height], p ? [r, n] : [n, r]);
        return ((f.current = t), i(e - t.top));
      }
      return (
        Tp(h, `getValueFromPointer`),
        (0, Z.jsx)(Pp, {
          scope: e.__scopeSlider,
          startEdge: p ? `bottom` : `top`,
          endEdge: p ? `top` : `bottom`,
          size: `height`,
          direction: p ? 1 : -1,
          children: (0, Z.jsx)(Ip, {
            "data-orientation": `vertical`,
            ...l,
            ref: d,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": `translateY(50%)`,
            },
            onSlideStart: (e) => {
              let t = h(e.clientY);
              a?.(t);
            },
            onSlideMove: (e) => {
              let t = h(e.clientY);
              o?.(t);
            },
            onSlideEnd: () => {
              ((f.current = void 0), s?.());
            },
            onStepKeyDown: (e) => {
              let t = Op[p ? `from-bottom` : `from-top`].includes(e.key);
              c?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        })
      );
    }, `SliderVertical`),
  ),
  Ip = X.forwardRef(
    Tp(function (e, t) {
      let {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: i,
          onSlideEnd: a,
          onHomeKeyDown: o,
          onEndKeyDown: s,
          onStepKeyDown: c,
          ...l
        } = e,
        u = Mp(kp, n);
      return (0, Z.jsx)(_.span, {
        ...l,
        ref: t,
        onKeyDown: d(e.onKeyDown, (e) => {
          e.key === `Home`
            ? (o(e), e.preventDefault())
            : e.key === `End`
              ? (s(e), e.preventDefault())
              : Ep.concat(Dp).includes(e.key) && (c(e), e.preventDefault());
        }),
        onPointerDown: d(e.onPointerDown, (e) => {
          let t = e.target;
          (t.setPointerCapture(e.pointerId),
            e.preventDefault(),
            u.thumbs.has(t)
              ? t.focus({ preventScroll: !0, focusVisible: !1 })
              : r(e));
        }),
        onPointerMove: d(e.onPointerMove, (e) => {
          e.target.hasPointerCapture(e.pointerId) && i(e);
        }),
        onPointerUp: d(e.onPointerUp, (e) => {
          let t = e.target;
          t.hasPointerCapture(e.pointerId) &&
            (t.releasePointerCapture(e.pointerId), a(e));
        }),
      });
    }, `SliderImpl`),
  ),
  rre = `SliderTrack`,
  Lp = X.forwardRef(
    Tp(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Mp(rre, n);
      return (0, Z.jsx)(_.span, {
        "data-disabled": i.disabled ? `` : void 0,
        "data-orientation": i.orientation,
        ...r,
        ref: t,
      });
    }, `SliderTrack`),
  ),
  Rp = `SliderRange`,
  zp = X.forwardRef(
    Tp(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Mp(Rp, n),
        a = Fp(Rp, n),
        o = m(t, X.useRef(null)),
        s = i.values.length,
        c = i.values.map((e) => Gp(e, i.min, i.max)),
        l = s > 1 ? Math.min(...c) : 0,
        u = 100 - Math.max(...c);
      return (0, Z.jsx)(_.span, {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? `` : void 0,
        ...r,
        ref: o,
        style: { ...e.style, [a.startEdge]: l + `%`, [a.endEdge]: u + `%` },
      });
    }, `SliderRange`),
  ),
  [ire, Bp] = jp(`SliderThumb`),
  are = `SliderThumbProvider`;
