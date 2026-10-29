// index-CBcimEr9 18 — viewport
// Lines 5517-6114 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var Fo = `ScrollArea`,
  [Io, Lo] = _(Fo),
  [Ro, X] = Io(Fo),
  zo = H.forwardRef(
    Y(function (e, t) {
      let {
          __scopeScrollArea: n,
          type: r = `hover`,
          dir: i,
          scrollHideDelay: a = 600,
          ...o
        } = e,
        [s, c] = H.useState(null),
        [l, u] = H.useState(null),
        [d, f] = H.useState(null),
        [p, m] = H.useState(null),
        [h, g] = H.useState(null),
        [_, v] = H.useState(0),
        [y, b] = H.useState(0),
        [x, C] = H.useState(!1),
        [w, T] = H.useState(!1),
        E = S(t, c),
        O = rt(i);
      return (0, U.jsx)(Ro, {
        scope: n,
        type: r,
        dir: O,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: m,
        scrollbarXEnabled: x,
        onScrollbarXEnabledChange: C,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: w,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: v,
        onCornerHeightChange: b,
        children: (0, U.jsx)(D.div, {
          dir: O,
          ...o,
          ref: E,
          style: {
            position: `relative`,
            "--radix-scroll-area-corner-width": _ + `px`,
            "--radix-scroll-area-corner-height": y + `px`,
            ...e.style,
          },
        }),
      });
    }, `ScrollArea`),
  ),
  Bo = `ScrollAreaViewport`,
  Vo = H.forwardRef(
    Y(function (e, t) {
      let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e,
        o = X(Bo, n),
        s = S(t, H.useRef(null), o.onViewportChange);
      return (0, U.jsxs)(U.Fragment, {
        children: [
          (0, U.jsx)(Ho, { nonce: i }),
          (0, U.jsx)(D.div, {
            "data-radix-scroll-area-viewport": ``,
            ...a,
            ref: s,
            style: {
              overflowX: o.scrollbarXEnabled ? `scroll` : `hidden`,
              overflowY: o.scrollbarYEnabled ? `scroll` : `hidden`,
              ...e.style,
            },
            children: (0, U.jsx)(`div`, {
              ref: o.onContentChange,
              style: { minWidth: `100%`, display: `table` },
              children: r,
            }),
          }),
        ],
      });
    }, `ScrollAreaViewport`),
  ),
  Ho = H.memo(
    Y(function ({ nonce: e }) {
      return (0, U.jsx)(`style`, {
        dangerouslySetInnerHTML: {
          __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`,
        },
        nonce: e,
      });
    }, `ScrollAreaViewportStyle`),
    (e, t) => e.nonce === t.nonce,
  ),
  Z = `ScrollAreaScrollbar`,
  Uo = H.forwardRef(
    Y(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = X(Z, e.__scopeScrollArea),
        { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i,
        s = e.orientation === `horizontal`;
      return (
        H.useEffect(
          () => (
            s ? a(!0) : o(!0),
            () => {
              s ? a(!1) : o(!1);
            }
          ),
          [s, a, o],
        ),
        i.type === `hover`
          ? (0, U.jsx)(Wo, { ...r, ref: t, forceMount: n })
          : i.type === `scroll`
            ? (0, U.jsx)(Go, { ...r, ref: t, forceMount: n })
            : i.type === `auto`
              ? (0, U.jsx)(Ko, { ...r, ref: t, forceMount: n })
              : i.type === `always`
                ? (0, U.jsx)(qo, { ...r, ref: t, "data-state": `visible` })
                : null
      );
    }, `ScrollAreaScrollbar`),
  ),
  Wo = H.forwardRef(
    Y(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = X(Z, e.__scopeScrollArea),
        [a, o] = H.useState(!1);
      return (
        H.useEffect(() => {
          let e = i.scrollArea,
            t = 0;
          if (e) {
            let n = Y(() => {
                (window.clearTimeout(t), o(!0));
              }, `handlePointerEnter`),
              r = Y(() => {
                t = window.setTimeout(() => o(!1), i.scrollHideDelay);
              }, `handlePointerLeave`);
            return (
              e.addEventListener(`pointerenter`, n),
              e.addEventListener(`pointerleave`, r),
              () => {
                (window.clearTimeout(t),
                  e.removeEventListener(`pointerenter`, n),
                  e.removeEventListener(`pointerleave`, r));
              }
            );
          }
        }, [i.scrollArea, i.scrollHideDelay]),
        (0, U.jsx)(b, {
          present: n || a,
          children: (0, U.jsx)(Ko, {
            "data-state": a ? `visible` : `hidden`,
            ...r,
            ref: t,
          }),
        })
      );
    }, `ScrollAreaScrollbarHover`),
  ),
  Go = H.forwardRef(
    Y(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = X(Z, e.__scopeScrollArea),
        a = e.orientation === `horizontal`,
        o = ps(() => c(`SCROLL_END`), 100),
        [s, c] = Po(`hidden`, {
          hidden: { SCROLL: `scrolling` },
          scrolling: { SCROLL_END: `idle`, POINTER_ENTER: `interacting` },
          interacting: { SCROLL: `interacting`, POINTER_LEAVE: `idle` },
          idle: {
            HIDE: `hidden`,
            SCROLL: `scrolling`,
            POINTER_ENTER: `interacting`,
          },
        });
      return (
        H.useEffect(() => {
          if (s === `idle`) {
            let e = window.setTimeout(() => c(`HIDE`), i.scrollHideDelay);
            return () => window.clearTimeout(e);
          }
        }, [s, i.scrollHideDelay, c]),
        H.useEffect(() => {
          let e = i.viewport,
            t = a ? `scrollLeft` : `scrollTop`;
          if (e) {
            let n = e[t],
              r = Y(() => {
                let r = e[t];
                (n !== r && (c(`SCROLL`), o()), (n = r));
              }, `handleScroll`);
            return (
              e.addEventListener(`scroll`, r),
              () => e.removeEventListener(`scroll`, r)
            );
          }
        }, [i.viewport, a, c, o]),
        (0, U.jsx)(b, {
          present: n || s !== `hidden`,
          children: (0, U.jsx)(qo, {
            "data-state": s === `hidden` ? `hidden` : `visible`,
            ...r,
            ref: t,
            onPointerEnter: g(e.onPointerEnter, () => c(`POINTER_ENTER`)),
            onPointerLeave: g(e.onPointerLeave, () => c(`POINTER_LEAVE`)),
          }),
        })
      );
    }, `ScrollAreaScrollbarScroll`),
  ),
  Ko = H.forwardRef(
    Y(function (e, t) {
      let n = X(Z, e.__scopeScrollArea),
        { forceMount: r, ...i } = e,
        [a, o] = H.useState(!1),
        s = e.orientation === `horizontal`,
        c = ps(() => {
          if (n.viewport) {
            let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
              t = n.viewport.offsetHeight < n.viewport.scrollHeight;
            o(s ? e : t);
          }
        }, 10);
      return (
        ms(n.viewport, c),
        ms(n.content, c),
        (0, U.jsx)(b, {
          present: r || a,
          children: (0, U.jsx)(qo, {
            "data-state": a ? `visible` : `hidden`,
            ...i,
            ref: t,
          }),
        })
      );
    }, `ScrollAreaScrollbarAuto`),
  ),
  qo = H.forwardRef(
    Y(function (e, t) {
      let { orientation: n = `vertical`, ...r } = e,
        i = X(Z, e.__scopeScrollArea),
        a = H.useRef(null),
        o = H.useRef(0),
        [s, c] = H.useState({
          content: 0,
          viewport: 0,
          scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
        }),
        l = os(s.viewport, s.content),
        u = {
          ...r,
          sizes: s,
          onSizesChange: c,
          hasThumb: l > 0 && l < 1,
          onThumbChange: Y((e) => (a.current = e), `onThumbChange`),
          onThumbPointerUp: Y(() => (o.current = 0), `onThumbPointerUp`),
          onThumbPointerDown: Y((e) => (o.current = e), `onThumbPointerDown`),
        };
      function d(e, t) {
        return cs(e, o.current, s, t);
      }
      return (
        Y(d, `getScrollPosition`),
        n === `horizontal`
          ? (0, U.jsx)(Jo, {
              ...u,
              ref: t,
              onThumbPositionChange: () => {
                if (i.viewport && a.current) {
                  let e = i.viewport.scrollLeft,
                    t = ls(e, s, i.dir);
                  a.current.style.transform = `translate3d(${t}px, 0, 0)`;
                }
              },
              onWheelScroll: (e) => {
                i.viewport && (i.viewport.scrollLeft = e);
              },
              onDragScroll: (e) => {
                i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
              },
            })
          : n === `vertical`
            ? (0, U.jsx)(Yo, {
                ...u,
                ref: t,
                onThumbPositionChange: () => {
                  if (i.viewport && a.current) {
                    let e = i.viewport.scrollTop,
                      t = ls(e, s);
                    a.current.style.transform = `translate3d(0, ${t}px, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  i.viewport && (i.viewport.scrollTop = e);
                },
                onDragScroll: (e) => {
                  i.viewport && (i.viewport.scrollTop = d(e));
                },
              })
            : null
      );
    }, `ScrollAreaScrollbarVisible`),
  ),
  Jo = H.forwardRef(
    Y(function (e, t) {
      let { sizes: n, onSizesChange: r, ...i } = e,
        a = X(Z, e.__scopeScrollArea),
        [o, s] = H.useState(),
        c = H.useRef(null),
        l = S(t, c, a.onScrollbarXChange);
      return (
        H.useEffect(() => {
          c.current && s(getComputedStyle(c.current));
        }, [c]),
        (0, U.jsx)(Qo, {
          "data-orientation": `horizontal`,
          ...i,
          ref: l,
          sizes: n,
          style: {
            bottom: 0,
            left: a.dir === `rtl` ? `var(--radix-scroll-area-corner-width)` : 0,
            right:
              a.dir === `ltr` ? `var(--radix-scroll-area-corner-width)` : 0,
            "--radix-scroll-area-thumb-width": ss(n) + `px`,
            ...e.style,
          },
          onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
          onDragScroll: (t) => e.onDragScroll(t.x),
          onWheelScroll: (t, n) => {
            if (a.viewport) {
              let r = a.viewport.scrollLeft + t.deltaX;
              (e.onWheelScroll(r), ds(r, n) && t.preventDefault());
            }
          },
          onResize: () => {
            c.current &&
              a.viewport &&
              o &&
              r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: as(o.paddingLeft),
                  paddingEnd: as(o.paddingRight),
                },
              });
          },
        })
      );
    }, `ScrollAreaScrollbarX`),
  ),
  Yo = H.forwardRef(
    Y(function (e, t) {
      let { sizes: n, onSizesChange: r, ...i } = e,
        a = X(Z, e.__scopeScrollArea),
        [o, s] = H.useState(),
        c = H.useRef(null),
        l = S(t, c, a.onScrollbarYChange);
      return (
        H.useEffect(() => {
          c.current && s(getComputedStyle(c.current));
        }, [c]),
        (0, U.jsx)(Qo, {
          "data-orientation": `vertical`,
          ...i,
          ref: l,
          sizes: n,
          style: {
            top: 0,
            right: a.dir === `ltr` ? 0 : void 0,
            left: a.dir === `rtl` ? 0 : void 0,
            bottom: `var(--radix-scroll-area-corner-height)`,
            "--radix-scroll-area-thumb-height": ss(n) + `px`,
            ...e.style,
          },
          onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
          onDragScroll: (t) => e.onDragScroll(t.y),
          onWheelScroll: (t, n) => {
            if (a.viewport) {
              let r = a.viewport.scrollTop + t.deltaY;
              (e.onWheelScroll(r), ds(r, n) && t.preventDefault());
            }
          },
          onResize: () => {
            c.current &&
              a.viewport &&
              o &&
              r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: as(o.paddingTop),
                  paddingEnd: as(o.paddingBottom),
                },
              });
          },
        })
      );
    }, `ScrollAreaScrollbarY`),
  ),
  [Xo, Zo] = Io(Z),
  Qo = H.forwardRef(
    Y(function (e, t) {
      let {
          __scopeScrollArea: n,
          sizes: r,
          hasThumb: i,
          onThumbChange: a,
          onThumbPointerUp: o,
          onThumbPointerDown: s,
          onThumbPositionChange: c,
          onDragScroll: l,
          onWheelScroll: u,
          onResize: d,
          ...f
        } = e,
        p = X(Z, n),
        [m, h] = H.useState(null),
        _ = S(t, h),
        v = H.useRef(null),
        b = H.useRef(``),
        x = p.viewport,
        C = r.content - r.viewport,
        w = y(u),
        T = y(c),
        E = ps(d, 10);
      function O(e) {
        if (v.current) {
          let t = e.clientX - v.current.left,
            n = e.clientY - v.current.top;
          l({ x: t, y: n });
        }
      }
      return (
        Y(O, `handleDragScroll`),
        H.useEffect(() => {
          let e = Y((e) => {
            let t = e.target;
            m?.contains(t) && w(e, C);
          }, `handleWheel`);
          return (
            document.addEventListener(`wheel`, e, { passive: !1 }),
            () => document.removeEventListener(`wheel`, e, { passive: !1 })
          );
        }, [x, m, C, w]),
        H.useEffect(T, [r, T]),
        ms(m, E),
        ms(p.content, E),
        (0, U.jsx)(Xo, {
          scope: n,
          scrollbar: m,
          hasThumb: i,
          onThumbChange: y(a),
          onThumbPointerUp: y(o),
          onThumbPositionChange: T,
          onThumbPointerDown: y(s),
          children: (0, U.jsx)(D.div, {
            ...f,
            ref: _,
            style: { position: `absolute`, ...f.style },
            onPointerDown: g(e.onPointerDown, (e) => {
              e.button === 0 &&
                (e.target.setPointerCapture(e.pointerId),
                (v.current = m.getBoundingClientRect()),
                (b.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = `none`),
                p.viewport && (p.viewport.style.scrollBehavior = `auto`),
                O(e));
            }),
            onPointerMove: g(e.onPointerMove, O),
            onPointerUp: g(e.onPointerUp, (e) => {
              let t = e.target;
              (t.hasPointerCapture(e.pointerId) &&
                t.releasePointerCapture(e.pointerId),
                (document.body.style.webkitUserSelect = b.current),
                p.viewport && (p.viewport.style.scrollBehavior = ``),
                (v.current = null));
            }),
          }),
        })
      );
    }, `ScrollAreaScrollbarImpl`),
  ),
  $o = `ScrollAreaThumb`,
  es = H.forwardRef(
    Y(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = Zo($o, e.__scopeScrollArea);
      return (0, U.jsx)(b, {
        present: n || i.hasThumb,
        children: (0, U.jsx)(ts, { ref: t, ...r }),
      });
    }, `ScrollAreaThumb`),
  ),
  ts = H.forwardRef(
    Y(function (e, t) {
      let { __scopeScrollArea: n, style: r, ...i } = e,
        a = X($o, n),
        o = Zo($o, n),
        { onThumbPositionChange: s } = o,
        c = S(t, o.onThumbChange),
        l = H.useRef(void 0),
        u = ps(() => {
          l.current &&= (l.current(), void 0);
        }, 100);
      return (
        H.useEffect(() => {
          let e = a.viewport;
          if (e) {
            let t = Y(() => {
              if ((u(), !l.current)) {
                let t = fs(e, s);
                ((l.current = t), s());
              }
            }, `handleScroll`);
            return (
              s(),
              e.addEventListener(`scroll`, t),
              () => e.removeEventListener(`scroll`, t)
            );
          }
        }, [a.viewport, u, s]),
        (0, U.jsx)(D.div, {
          "data-state": o.hasThumb ? `visible` : `hidden`,
          ...i,
          ref: c,
          style: {
            width: `var(--radix-scroll-area-thumb-width)`,
            height: `var(--radix-scroll-area-thumb-height)`,
            ...r,
          },
          onPointerDownCapture: g(e.onPointerDownCapture, (e) => {
            let t = e.target.getBoundingClientRect(),
              n = e.clientX - t.left,
              r = e.clientY - t.top;
            o.onThumbPointerDown({ x: n, y: r });
          }),
          onPointerUp: g(e.onPointerUp, o.onThumbPointerUp),
        })
      );
    }, `ScrollAreaThumbImpl`),
  ),
  ns = `ScrollAreaCorner`,
  rs = H.forwardRef(
    Y(function (e, t) {
      let n = X(ns, e.__scopeScrollArea),
        r = !!(n.scrollbarX && n.scrollbarY);
      return n.type !== `scroll` && r ? (0, U.jsx)(is, { ...e, ref: t }) : null;
    }, `ScrollAreaCorner`),
  ),
  is = H.forwardRef(
    Y(function (e, t) {
      let { __scopeScrollArea: n, ...r } = e,
        i = X(ns, n),
        [a, o] = H.useState(0),
        [s, c] = H.useState(0),
        l = !!(a && s),
        { onCornerWidthChange: u, onCornerHeightChange: d } = i;
      return (
        ms(i.scrollbarX, () => {
          let e = i.scrollbarX?.offsetHeight || 0;
          (i.onCornerHeightChange(e), c(e));
        }),
        ms(i.scrollbarY, () => {
          let e = i.scrollbarY?.offsetWidth || 0;
          (i.onCornerWidthChange(e), o(e));
        }),
        H.useEffect(
          () => () => {
            (u(0), d(0));
          },
          [u, d],
        ),
        l
          ? (0, U.jsx)(D.div, {
              ...r,
              ref: t,
              style: {
                width: a,
                height: s,
                position: `absolute`,
                right: i.dir === `ltr` ? 0 : void 0,
                left: i.dir === `rtl` ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          : null
      );
    }, `ScrollAreaCornerImpl`),
  );
