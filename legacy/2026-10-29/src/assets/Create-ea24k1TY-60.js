// Create-ea24k1TY 60 — current
// Lines 18813-19167 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Ep = Object.defineProperty,
  Dp = (e, t) => Ep(e, `name`, { value: t, configurable: !0 }),
  Op = [`PageUp`, `PageDown`],
  kp = [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`],
  Ap = {
    "from-left": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-right": [`Home`, `PageDown`, `ArrowDown`, `ArrowRight`],
    "from-bottom": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
    "from-top": [`Home`, `PageDown`, `ArrowUp`, `ArrowLeft`],
  },
  jp = `Slider`,
  [Mp, Np, Pp] = g(jp),
  [Fp, _ne] = f(jp, [Pp]),
  [Ip, Lp] = Fp(jp),
  Rp = X.forwardRef(
    Dp(function (e, t) {
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
          onValueChange: p = Dp(() => {}, `onValueChange`),
          onValueCommit: h = Dp(() => {}, `onValueCommit`),
          inverted: g = !1,
          form: _,
          ...y
        } = e,
        b = X.useRef(new Set()),
        x = X.useRef(0),
        S = X.useRef(!1),
        C = o === `horizontal` ? Vp : Hp,
        [w, T] = X.useState(null),
        E = m(t, T),
        [D = [], O] = v({
          prop: f,
          defaultProp: u,
          onChange: Dp((e) => {
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
          let t = Dp(() => O(A.current), `reset`);
          return (
            e.addEventListener(`reset`, t),
            () => e.removeEventListener(`reset`, t)
          );
        }
      }, [w, _, O]);
      function j(e) {
        P(e, om(D, e));
      }
      Dp(j, `handleSlideStart`);
      function M(e) {
        P(e, x.current);
      }
      Dp(M, `handleSlideMove`);
      function N() {
        String(D) !== String(k.current) && h(D);
      }
      Dp(N, `handleSlideEnd`);
      function P(e, t, { commit: n } = { commit: !1 }) {
        let o = dm(a),
          s = Or(fm(Math.round((e - r) / a) * a + r, o), [r, i]);
        O((e = []) => {
          let o = c * a,
            u = l
              ? Or(s, [
                  e[t - 1] === void 0 ? r : e[t - 1] + o,
                  e[t + 1] === void 0 ? i : e[t + 1] - o,
                ])
              : s,
            d = rm(e, u, t);
          if (lm(d, o)) {
            x.current = l ? t : d.indexOf(u);
            let r = String(d) !== String(e);
            return (r && n && h(d), r ? d : e);
          } else return e;
        });
      }
      return (
        Dp(P, `updateValues`),
        (0, Z.jsx)(Ip, {
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
          children: (0, Z.jsx)(Mp.Provider, {
            scope: e.__scopeSlider,
            children: (0, Z.jsx)(Mp.Slot, {
              scope: e.__scopeSlider,
              children: (0, Z.jsx)(C, {
                "aria-disabled": s,
                "data-disabled": s ? `` : void 0,
                ...y,
                ref: E,
                onPointerDown: d(y.onPointerDown, () => {
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
                        Op.includes(e.key) || (e.shiftKey && kp.includes(e.key))
                          ? 10
                          : 1,
                      i = x.current,
                      o = D[i];
                    P(
                      pm(o, { min: r, step: a, direction: t, multiplier: n }),
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
  [zp, Bp] = Fp(jp, {
    startEdge: `left`,
    endEdge: `right`,
    size: `width`,
    direction: 1,
  }),
  Vp = X.forwardRef(
    Dp(function (e, t) {
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
        g = pee(i),
        _ = g === `ltr`,
        v = (_ && !a) || (!_ && a);
      function y(e) {
        let t = h.current || d.getBoundingClientRect(),
          i = um([0, t.width], v ? [n, r] : [r, n]);
        return ((h.current = t), i(e - t.left));
      }
      return (
        Dp(y, `getValueFromPointer`),
        (0, Z.jsx)(zp, {
          scope: e.__scopeSlider,
          startEdge: v ? `left` : `right`,
          endEdge: v ? `right` : `left`,
          direction: v ? 1 : -1,
          size: `width`,
          children: (0, Z.jsx)(Up, {
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
              let t = Ap[v ? `from-left` : `from-right`].includes(e.key);
              l?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        })
      );
    }, `SliderHorizontal`),
  ),
  Hp = X.forwardRef(
    Dp(function (e, t) {
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
          i = um([0, t.height], p ? [r, n] : [n, r]);
        return ((f.current = t), i(e - t.top));
      }
      return (
        Dp(h, `getValueFromPointer`),
        (0, Z.jsx)(zp, {
          scope: e.__scopeSlider,
          startEdge: p ? `bottom` : `top`,
          endEdge: p ? `top` : `bottom`,
          size: `height`,
          direction: p ? 1 : -1,
          children: (0, Z.jsx)(Up, {
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
              let t = Ap[p ? `from-bottom` : `from-top`].includes(e.key);
              c?.({ event: e, direction: t ? -1 : 1 });
            },
          }),
        })
      );
    }, `SliderVertical`),
  ),
  Up = X.forwardRef(
    Dp(function (e, t) {
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
        u = Lp(jp, n);
      return (0, Z.jsx)(_.span, {
        ...l,
        ref: t,
        onKeyDown: d(e.onKeyDown, (e) => {
          e.key === `Home`
            ? (o(e), e.preventDefault())
            : e.key === `End`
              ? (s(e), e.preventDefault())
              : Op.concat(kp).includes(e.key) && (c(e), e.preventDefault());
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
  Wp = `SliderTrack`,
  Gp = X.forwardRef(
    Dp(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Lp(Wp, n);
      return (0, Z.jsx)(_.span, {
        "data-disabled": i.disabled ? `` : void 0,
        "data-orientation": i.orientation,
        ...r,
        ref: t,
      });
    }, `SliderTrack`),
  ),
  Kp = `SliderRange`,
  qp = X.forwardRef(
    Dp(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Lp(Kp, n),
        a = Bp(Kp, n),
        o = m(t, X.useRef(null)),
        s = i.values.length,
        c = i.values.map((e) => im(e, i.min, i.max)),
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
  [Jp, Yp] = Fp(`SliderThumb`),
  Xp = `SliderThumbProvider`;
