// CoinDisplay-JJDtxOIB 01 — current
// Lines 1-349 of readable/assets/CoinDisplay-JJDtxOIB.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { a as r, i, n as a, t as o } from "./dist-CA4uZW3H.js";
import { l as s, m as c, p as l } from "./AuthService-C8NFtVWb.js";
import { t as u } from "./dist-ByN-1XKv.js";
import { i as d, n as f, o as p, r as m, t as h } from "./dist-BfZydly7.js";
import { n as g, t as ee } from "./dist-ChIM81kv.js";
import { n as _ } from "./dist-B8ylHDUS.js";
import { r as v } from "./button-gyaE5cND.js";
import { t as y } from "./refresh-cw-Bg4R4J17.js";
import { t as b } from "./triangle-alert-B0qFYVZz.js";
import { n as x } from "./coinService-CUupqiCF.js";
var S = v(`Coins`, [
    [`circle`, { cx: `8`, cy: `8`, r: `6`, key: `3yglwk` }],
    [`path`, { d: `M18.09 10.37A6 6 0 1 1 10.34 18`, key: `t5s6rm` }],
    [`path`, { d: `M7 6h1v4`, key: `1obek4` }],
    [`path`, { d: `m16.71 13.88.7.71-2.82 2.82`, key: `1rbuyh` }],
  ]),
  C = e(t(), 1),
  w = n(),
  T = Object.defineProperty,
  E = (e, t) => T(e, `name`, { value: t, configurable: !0 }),
  [D, O] = i(`Tooltip`, [d]),
  k = d(),
  A = `TooltipProvider`,
  j = 700,
  M = `tooltip.open`,
  [te, N] = D(A),
  P = E((e) => {
    let {
        __scopeTooltip: t,
        delayDuration: n = j,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: a,
      } = e,
      o = C.useRef(!0),
      s = C.useRef(!1),
      c = C.useRef(0);
    return (
      C.useEffect(() => {
        let e = c.current;
        return () => window.clearTimeout(e);
      }, []),
      (0, w.jsx)(te, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: C.useCallback(() => {
          r <= 0 || (window.clearTimeout(c.current), (o.current = !1));
        }, [r]),
        onClose: C.useCallback(() => {
          r <= 0 ||
            (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: C.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: i,
        children: a,
      })
    );
  }, `TooltipProvider`),
  F = `Tooltip`,
  [ne, I] = D(F),
  re = E((e) => {
    let {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: s,
      } = e,
      c = N(F, e.__scopeTooltip),
      l = k(t),
      [u, d] = C.useState(null),
      [f, p] = C.useState(void 0),
      m = ee(),
      _ = C.useRef(0),
      v = o ?? c.disableHoverableContent,
      y = s ?? c.delayDuration,
      b = C.useRef(!1),
      [x, S] = g({
        prop: r,
        defaultProp: i ?? !1,
        onChange: E((e) => {
          (e
            ? (c.onOpen(), document.dispatchEvent(new CustomEvent(M)))
            : c.onClose(),
            a?.(e));
        }, `onChange`),
        caller: F,
      }),
      T = C.useMemo(
        () => (x ? (b.current ? `delayed-open` : `instant-open`) : `closed`),
        [x],
      ),
      D = C.useCallback(() => {
        (window.clearTimeout(_.current),
          (_.current = 0),
          (b.current = !1),
          S(!0));
      }, [S]),
      O = C.useCallback(() => {
        (window.clearTimeout(_.current), (_.current = 0), S(!1));
      }, [S]),
      A = C.useCallback(() => {
        (window.clearTimeout(_.current),
          (_.current = window.setTimeout(() => {
            ((b.current = !0), S(!0), (_.current = 0));
          }, y)));
      }, [y, S]);
    C.useEffect(
      () => () => {
        _.current &&= (window.clearTimeout(_.current), 0);
      },
      [],
    );
    let j = f ?? m;
    return (0, w.jsx)(h, {
      ...l,
      children: (0, w.jsx)(ne, {
        scope: t,
        contentId: j,
        setContentId: p,
        open: x,
        stateAttribute: T,
        trigger: u,
        onTriggerChange: d,
        onTriggerEnter: C.useCallback(() => {
          c.isOpenDelayedRef.current ? A() : D();
        }, [c.isOpenDelayedRef, A, D]),
        onTriggerLeave: C.useCallback(() => {
          v ? O() : (window.clearTimeout(_.current), (_.current = 0));
        }, [O, v]),
        onOpen: D,
        onClose: O,
        disableHoverableContent: v,
        children: n,
      }),
    });
  }, `Tooltip`),
  L = `TooltipTrigger`,
  R = C.forwardRef(
    E(function (e, t) {
      let { __scopeTooltip: n, "aria-describedby": i, ...a } = e,
        o = I(L, n),
        s = N(L, n),
        l = k(n),
        d = c(t, C.useRef(null), o.onTriggerChange),
        p = C.useRef(!1),
        m = C.useRef(!1),
        h = C.useCallback(() => (p.current = !1), []);
      return (
        C.useEffect(
          () => () => document.removeEventListener(`pointerup`, h),
          [h],
        ),
        (0, w.jsx)(f, {
          asChild: !0,
          ...l,
          children: (0, w.jsx)(u.button, {
            "aria-describedby": o.open ? Y(i, o.contentId) : i,
            "data-state": o.stateAttribute,
            ...a,
            ref: d,
            onPointerMove: r(e.onPointerMove, (e) => {
              e.pointerType !== `touch` &&
                !m.current &&
                !s.isPointerInTransitRef.current &&
                (o.onTriggerEnter(), (m.current = !0));
            }),
            onPointerLeave: r(e.onPointerLeave, () => {
              (o.onTriggerLeave(), (m.current = !1));
            }),
            onPointerDown: r(e.onPointerDown, () => {
              (o.open && o.onClose(),
                (p.current = !0),
                document.addEventListener(`pointerup`, h, { once: !0 }));
            }),
            onFocus: r(e.onFocus, () => {
              p.current || o.onOpen();
            }),
            onBlur: r(e.onBlur, o.onClose),
            onClick: r(e.onClick, o.onClose),
          }),
        })
      );
    }, `TooltipTrigger`),
  ),
  [ie, z] = D(`TooltipPortal`, { forceMount: void 0 }),
  B = `TooltipContent`,
  V = C.forwardRef(
    E(function (e, t) {
      let n = z(B, e.__scopeTooltip),
        { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
        s = I(B, e.__scopeTooltip);
      return (0, w.jsx)(o, {
        present: r || s.open,
        children: s.disableHoverableContent
          ? (0, w.jsx)(H, { side: i, ...a, ref: t })
          : (0, w.jsx)(ae, { side: i, ...a, ref: t }),
      });
    }, `TooltipContent`),
  ),
  ae = C.forwardRef(
    E(function (e, t) {
      let n = I(B, e.__scopeTooltip),
        r = N(B, e.__scopeTooltip),
        i = C.useRef(null),
        a = c(t, i),
        [o, s] = C.useState(null),
        { trigger: l, onClose: u } = n,
        d = i.current,
        { onPointerInTransitChange: f } = r,
        p = C.useCallback(() => {
          (s(null), f(!1));
        }, [f]),
        m = C.useCallback(
          (e, t) => {
            let n = e.currentTarget,
              r = { x: e.clientX, y: e.clientY },
              i = W(r, U(r, n.getBoundingClientRect())),
              a = G(t.getBoundingClientRect()),
              o = q([...i, ...a]);
            (s(o), f(!0));
          },
          [f],
        );
      return (
        C.useEffect(() => () => p(), [p]),
        C.useEffect(() => {
          if (l && d) {
            let e = E((e) => m(e, d), `handleTriggerLeave`),
              t = E((e) => m(e, l), `handleContentLeave`);
            return (
              l.addEventListener(`pointerleave`, e),
              d.addEventListener(`pointerleave`, t),
              () => {
                (l.removeEventListener(`pointerleave`, e),
                  d.removeEventListener(`pointerleave`, t));
              }
            );
          }
        }, [l, d, m, p]),
        C.useEffect(() => {
          if (o) {
            let e = E((e) => {
              let t = e.target,
                n = { x: e.clientX, y: e.clientY },
                r = l?.contains(t) || d?.contains(t),
                i = !K(n, o);
              r ? p() : i && (p(), u());
            }, `handleTrackPointerGrace`);
            return (
              document.addEventListener(`pointermove`, e),
              () => document.removeEventListener(`pointermove`, e)
            );
          }
        }, [l, d, o, u, p]),
        (0, w.jsx)(H, { ...e, ref: a })
      );
    }, `TooltipContentHoverable`),
  ),
  oe = l(`TooltipContent`),
  H = C.forwardRef(
    E(function (e, t) {
      let {
          __scopeTooltip: n,
          children: r,
          "aria-label": i,
          id: o,
          onEscapeKeyDown: s,
          onPointerDownOutside: c,
          ...l
        } = e,
        u = I(B, n),
        d = k(n),
        { onClose: f } = u;
      (C.useEffect(
        () => (
          document.addEventListener(M, f),
          () => document.removeEventListener(M, f)
        ),
        [f],
      ),
        C.useEffect(() => {
          if (u.trigger) {
            let e = E((e) => {
              e.target instanceof Node && e.target.contains(u.trigger) && f();
            }, `handleScroll`);
            return (
              window.addEventListener(`scroll`, e, { capture: !0 }),
              () => window.removeEventListener(`scroll`, e, { capture: !0 })
            );
          }
        }, [u.trigger, f]));
      let { setContentId: h } = u;
      return (
        a(
          () => (
            h(o),
            () => {
              h(void 0);
            }
          ),
          [o, h],
        ),
        (0, w.jsx)(p, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: s,
          onPointerDownOutside: c,
          onFocusOutside: (e) => e.preventDefault(),
          onDismiss: f,
          children: (0, w.jsxs)(m, {
            "data-state": u.stateAttribute,
            role: i ? void 0 : `tooltip`,
            id: i ? void 0 : u.contentId,
            ...d,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
              "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
              "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
              "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
              "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`,
            },
            children: [
              (0, w.jsx)(oe, { children: r }),
              i
                ? (0, w.jsx)(_, {
                    id: u.contentId,
                    role: `tooltip`,
                    children: i,
                  })
                : null,
            ],
          }),
        })
      );
    }, `TooltipContentImpl`),
  );
