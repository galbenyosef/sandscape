// assets__index-BKDksszn 22 — viewport
// Lines 6491-7088 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
var is = `ScrollArea`,
  [as, os] = _(is),
  [ss, Z] = as(is),
  cs = U.forwardRef(
    X(function (e, t) {
      let {
          __scopeScrollArea: n,
          type: r = `hover`,
          dir: i,
          scrollHideDelay: a = 600,
          ...o
        } = e,
        [s, c] = U.useState(null),
        [l, u] = U.useState(null),
        [d, f] = U.useState(null),
        [p, m] = U.useState(null),
        [h, g] = U.useState(null),
        [_, v] = U.useState(0),
        [y, b] = U.useState(0),
        [x, C] = U.useState(!1),
        [w, T] = U.useState(!1),
        E = S(t, c),
        O = Qe(i);
      return (0, W.jsx)(ss, {
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
        children: (0, W.jsx)(D.div, {
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
  ls = `ScrollAreaViewport`,
  us = U.forwardRef(
    X(function (e, t) {
      let { __scopeScrollArea: n, children: r, nonce: i, ...a } = e,
        o = Z(ls, n),
        s = S(t, U.useRef(null), o.onViewportChange);
      return (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)(ds, { nonce: i }),
          (0, W.jsx)(D.div, {
            "data-radix-scroll-area-viewport": ``,
            ...a,
            ref: s,
            style: {
              overflowX: o.scrollbarXEnabled ? `scroll` : `hidden`,
              overflowY: o.scrollbarYEnabled ? `scroll` : `hidden`,
              ...e.style,
            },
            children: (0, W.jsx)(`div`, {
              ref: o.onContentChange,
              style: { minWidth: `100%`, display: `table` },
              children: r,
            }),
          }),
        ],
      });
    }, `ScrollAreaViewport`),
  ),
  ds = U.memo(
    X(function ({ nonce: e }) {
      return (0, W.jsx)(`style`, {
        dangerouslySetInnerHTML: {
          __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`,
        },
        nonce: e,
      });
    }, `ScrollAreaViewportStyle`),
    (e, t) => e.nonce === t.nonce,
  ),
  fs = `ScrollAreaScrollbar`,
  ps = U.forwardRef(
    X(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = Z(fs, e.__scopeScrollArea),
        { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i,
        s = e.orientation === `horizontal`;
      return (
        U.useEffect(
          () => (
            s ? a(!0) : o(!0),
            () => {
              s ? a(!1) : o(!1);
            }
          ),
          [s, a, o],
        ),
        i.type === `hover`
          ? (0, W.jsx)(ms, { ...r, ref: t, forceMount: n })
          : i.type === `scroll`
            ? (0, W.jsx)(hs, { ...r, ref: t, forceMount: n })
            : i.type === `auto`
              ? (0, W.jsx)(gs, { ...r, ref: t, forceMount: n })
              : i.type === `always`
                ? (0, W.jsx)(_s, { ...r, ref: t, "data-state": `visible` })
                : null
      );
    }, `ScrollAreaScrollbar`),
  ),
  ms = U.forwardRef(
    X(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = Z(fs, e.__scopeScrollArea),
        [a, o] = U.useState(!1);
      return (
        U.useEffect(() => {
          let e = i.scrollArea,
            t = 0;
          if (e) {
            let n = X(() => {
                (window.clearTimeout(t), o(!0));
              }, `handlePointerEnter`),
              r = X(() => {
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
        (0, W.jsx)(b, {
          present: n || a,
          children: (0, W.jsx)(gs, {
            "data-state": a ? `visible` : `hidden`,
            ...r,
            ref: t,
          }),
        })
      );
    }, `ScrollAreaScrollbarHover`),
  ),
  hs = U.forwardRef(
    X(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = Z(fs, e.__scopeScrollArea),
        a = e.orientation === `horizontal`,
        o = Ls(() => c(`SCROLL_END`), 100),
        [s, c] = rs(`hidden`, {
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
        U.useEffect(() => {
          if (s === `idle`) {
            let e = window.setTimeout(() => c(`HIDE`), i.scrollHideDelay);
            return () => window.clearTimeout(e);
          }
        }, [s, i.scrollHideDelay, c]),
        U.useEffect(() => {
          let e = i.viewport,
            t = a ? `scrollLeft` : `scrollTop`;
          if (e) {
            let n = e[t],
              r = X(() => {
                let r = e[t];
                (n !== r && (c(`SCROLL`), o()), (n = r));
              }, `handleScroll`);
            return (
              e.addEventListener(`scroll`, r),
              () => e.removeEventListener(`scroll`, r)
            );
          }
        }, [i.viewport, a, c, o]),
        (0, W.jsx)(b, {
          present: n || s !== `hidden`,
          children: (0, W.jsx)(_s, {
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
  gs = U.forwardRef(
    X(function (e, t) {
      let n = Z(fs, e.__scopeScrollArea),
        { forceMount: r, ...i } = e,
        [a, o] = U.useState(!1),
        s = e.orientation === `horizontal`,
        c = Ls(() => {
          if (n.viewport) {
            let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
              t = n.viewport.offsetHeight < n.viewport.scrollHeight;
            o(s ? e : t);
          }
        }, 10);
      return (
        Rs(n.viewport, c),
        Rs(n.content, c),
        (0, W.jsx)(b, {
          present: r || a,
          children: (0, W.jsx)(_s, {
            "data-state": a ? `visible` : `hidden`,
            ...i,
            ref: t,
          }),
        })
      );
    }, `ScrollAreaScrollbarAuto`),
  ),
  _s = U.forwardRef(
    X(function (e, t) {
      let { orientation: n = `vertical`, ...r } = e,
        i = Z(fs, e.__scopeScrollArea),
        a = U.useRef(null),
        o = U.useRef(0),
        [s, c] = U.useState({
          content: 0,
          viewport: 0,
          scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
        }),
        l = As(s.viewport, s.content),
        u = {
          ...r,
          sizes: s,
          onSizesChange: c,
          hasThumb: l > 0 && l < 1,
          onThumbChange: X((e) => (a.current = e), `onThumbChange`),
          onThumbPointerUp: X(() => (o.current = 0), `onThumbPointerUp`),
          onThumbPointerDown: X((e) => (o.current = e), `onThumbPointerDown`),
        };
      function d(e, t) {
        return Ms(e, o.current, s, t);
      }
      return (
        X(d, `getScrollPosition`),
        n === `horizontal`
          ? (0, W.jsx)(vs, {
              ...u,
              ref: t,
              onThumbPositionChange: () => {
                if (i.viewport && a.current) {
                  let e = i.viewport.scrollLeft,
                    t = Ns(e, s, i.dir);
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
            ? (0, W.jsx)(ys, {
                ...u,
                ref: t,
                onThumbPositionChange: () => {
                  if (i.viewport && a.current) {
                    let e = i.viewport.scrollTop,
                      t = Ns(e, s);
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
  vs = U.forwardRef(
    X(function (e, t) {
      let { sizes: n, onSizesChange: r, ...i } = e,
        a = Z(fs, e.__scopeScrollArea),
        [o, s] = U.useState(),
        c = U.useRef(null),
        l = S(t, c, a.onScrollbarXChange);
      return (
        U.useEffect(() => {
          c.current && s(getComputedStyle(c.current));
        }, [c]),
        (0, W.jsx)(Ss, {
          "data-orientation": `horizontal`,
          ...i,
          ref: l,
          sizes: n,
          style: {
            bottom: 0,
            left: a.dir === `rtl` ? `var(--radix-scroll-area-corner-width)` : 0,
            right:
              a.dir === `ltr` ? `var(--radix-scroll-area-corner-width)` : 0,
            "--radix-scroll-area-thumb-width": js(n) + `px`,
            ...e.style,
          },
          onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
          onDragScroll: (t) => e.onDragScroll(t.x),
          onWheelScroll: (t, n) => {
            if (a.viewport) {
              let r = a.viewport.scrollLeft + t.deltaX;
              (e.onWheelScroll(r), Fs(r, n) && t.preventDefault());
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
                  paddingStart: ks(o.paddingLeft),
                  paddingEnd: ks(o.paddingRight),
                },
              });
          },
        })
      );
    }, `ScrollAreaScrollbarX`),
  ),
  ys = U.forwardRef(
    X(function (e, t) {
      let { sizes: n, onSizesChange: r, ...i } = e,
        a = Z(fs, e.__scopeScrollArea),
        [o, s] = U.useState(),
        c = U.useRef(null),
        l = S(t, c, a.onScrollbarYChange);
      return (
        U.useEffect(() => {
          c.current && s(getComputedStyle(c.current));
        }, [c]),
        (0, W.jsx)(Ss, {
          "data-orientation": `vertical`,
          ...i,
          ref: l,
          sizes: n,
          style: {
            top: 0,
            right: a.dir === `ltr` ? 0 : void 0,
            left: a.dir === `rtl` ? 0 : void 0,
            bottom: `var(--radix-scroll-area-corner-height)`,
            "--radix-scroll-area-thumb-height": js(n) + `px`,
            ...e.style,
          },
          onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
          onDragScroll: (t) => e.onDragScroll(t.y),
          onWheelScroll: (t, n) => {
            if (a.viewport) {
              let r = a.viewport.scrollTop + t.deltaY;
              (e.onWheelScroll(r), Fs(r, n) && t.preventDefault());
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
                  paddingStart: ks(o.paddingTop),
                  paddingEnd: ks(o.paddingBottom),
                },
              });
          },
        })
      );
    }, `ScrollAreaScrollbarY`),
  ),
  [bs, xs] = as(fs),
  Ss = U.forwardRef(
    X(function (e, t) {
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
        p = Z(fs, n),
        [m, h] = U.useState(null),
        _ = S(t, h),
        v = U.useRef(null),
        b = U.useRef(``),
        x = p.viewport,
        C = r.content - r.viewport,
        w = y(u),
        T = y(c),
        E = Ls(d, 10);
      function O(e) {
        if (v.current) {
          let t = e.clientX - v.current.left,
            n = e.clientY - v.current.top;
          l({ x: t, y: n });
        }
      }
      return (
        X(O, `handleDragScroll`),
        U.useEffect(() => {
          let e = X((e) => {
            let t = e.target;
            m?.contains(t) && w(e, C);
          }, `handleWheel`);
          return (
            document.addEventListener(`wheel`, e, { passive: !1 }),
            () => document.removeEventListener(`wheel`, e, { passive: !1 })
          );
        }, [x, m, C, w]),
        U.useEffect(T, [r, T]),
        Rs(m, E),
        Rs(p.content, E),
        (0, W.jsx)(bs, {
          scope: n,
          scrollbar: m,
          hasThumb: i,
          onThumbChange: y(a),
          onThumbPointerUp: y(o),
          onThumbPositionChange: T,
          onThumbPointerDown: y(s),
          children: (0, W.jsx)(D.div, {
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
  Cs = `ScrollAreaThumb`,
  ws = U.forwardRef(
    X(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = xs(Cs, e.__scopeScrollArea);
      return (0, W.jsx)(b, {
        present: n || i.hasThumb,
        children: (0, W.jsx)(Ts, { ref: t, ...r }),
      });
    }, `ScrollAreaThumb`),
  ),
  Ts = U.forwardRef(
    X(function (e, t) {
      let { __scopeScrollArea: n, style: r, ...i } = e,
        a = Z(Cs, n),
        o = xs(Cs, n),
        { onThumbPositionChange: s } = o,
        c = S(t, o.onThumbChange),
        l = U.useRef(void 0),
        u = Ls(() => {
          l.current &&= (l.current(), void 0);
        }, 100);
      return (
        U.useEffect(() => {
          let e = a.viewport;
          if (e) {
            let t = X(() => {
              if ((u(), !l.current)) {
                let t = Is(e, s);
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
        (0, W.jsx)(D.div, {
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
  Es = `ScrollAreaCorner`,
  Ds = U.forwardRef(
    X(function (e, t) {
      let n = Z(Es, e.__scopeScrollArea),
        r = !!(n.scrollbarX && n.scrollbarY);
      return n.type !== `scroll` && r ? (0, W.jsx)(Os, { ...e, ref: t }) : null;
    }, `ScrollAreaCorner`),
  ),
  Os = U.forwardRef(
    X(function (e, t) {
      let { __scopeScrollArea: n, ...r } = e,
        i = Z(Es, n),
        [a, o] = U.useState(0),
        [s, c] = U.useState(0),
        l = !!(a && s),
        { onCornerWidthChange: u, onCornerHeightChange: d } = i;
      return (
        Rs(i.scrollbarX, () => {
          let e = i.scrollbarX?.offsetHeight || 0;
          (i.onCornerHeightChange(e), c(e));
        }),
        Rs(i.scrollbarY, () => {
          let e = i.scrollbarY?.offsetWidth || 0;
          (i.onCornerWidthChange(e), o(e));
        }),
        U.useEffect(
          () => () => {
            (u(0), d(0));
          },
          [u, d],
        ),
        l
          ? (0, W.jsx)(D.div, {
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
