import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { a as i, i as a, n as o, r as s } from "./dist-CA4uZW3H.js";
import { m as c } from "./AuthService-CQeU_0bQ.js";
import { n as l, t as u } from "./dist-p2cW4AiE.js";
import { t as d } from "./dist-C4TAXPHx.js";
var f = e(t(), 1),
  p = n(),
  m = Object.defineProperty,
  h = (e, t) => m(e, `name`, { value: t, configurable: !0 }),
  g = `dismissableLayer.update`,
  _ = `dismissableLayer.pointerDownOutside`,
  v = `dismissableLayer.focusOutside`,
  y,
  b = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  x = f.forwardRef(
    h(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: a,
          onPointerDownOutside: o,
          onFocusOutside: l,
          onInteractOutside: d,
          onDismiss: m,
          ..._
        } = e,
        v = f.useContext(b),
        [x, S] = f.useState(null),
        C = x?.ownerDocument ?? globalThis?.document,
        [, w] = f.useState({}),
        O = c(t, S),
        k = Array.from(v.layers),
        [A] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1),
        j = A ? k.indexOf(A) : -1,
        M = x ? k.indexOf(x) : -1,
        N = v.layersWithOutsidePointerEventsDisabled.size > 0,
        P = M >= j,
        ee = f.useRef(!1),
        F = T(
          (e) => {
            (o?.(e), d?.(e), e.defaultPrevented || m?.());
          },
          {
            ownerDocument: C,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: ee,
            dismissableSurfaces: v.dismissableSurfaces,
            shouldHandlePointerDownOutside: f.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...v.branches].some((t) => t.contains(e));
                return P && !t;
              },
              [v.branches, P],
            ),
          },
        ),
        I = E((e) => {
          if (r && ee.current) return;
          let t = e.target;
          [...v.branches].some((e) => e.contains(t)) ||
            (l?.(e), d?.(e), e.defaultPrevented || m?.());
        }, C),
        L = x ? M === k.length - 1 : !1,
        R = s((e) => {
          e.key === `Escape` &&
            (a?.(e), !e.defaultPrevented && m && (e.preventDefault(), m()));
        });
      return (
        f.useEffect(() => {
          if (L)
            return (
              C.addEventListener(`keydown`, R, { capture: !0 }),
              () => C.removeEventListener(`keydown`, R, { capture: !0 })
            );
        }, [C, L, R]),
        f.useEffect(() => {
          if (x)
            return (
              n &&
                (v.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((y = C.body.style.pointerEvents),
                  (C.body.style.pointerEvents = `none`)),
                v.layersWithOutsidePointerEventsDisabled.add(x)),
              v.layers.add(x),
              D(),
              () => {
                n &&
                  (v.layersWithOutsidePointerEventsDisabled.delete(x),
                  v.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (C.body.style.pointerEvents = y));
              }
            );
        }, [x, C, n, v]),
        f.useEffect(
          () => () => {
            x &&
              (v.layers.delete(x),
              v.layersWithOutsidePointerEventsDisabled.delete(x),
              D());
          },
          [x, v],
        ),
        f.useEffect(() => {
          let e = h(() => w({}), `handleUpdate`);
          return (
            document.addEventListener(g, e),
            () => document.removeEventListener(g, e)
          );
        }, []),
        (0, p.jsx)(u.div, {
          ..._,
          ref: O,
          style: {
            pointerEvents: N ? (P ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: i(e.onFocusCapture, I.onFocusCapture),
          onBlurCapture: i(e.onBlurCapture, I.onBlurCapture),
          onPointerDownCapture: i(
            e.onPointerDownCapture,
            F.onPointerDownCapture,
          ),
        })
      );
    }, `DismissableLayer`),
  ),
  S = f.forwardRef(
    h(function (e, t) {
      let n = f.useContext(b),
        r = f.useRef(null),
        i = c(t, r);
      return (
        f.useEffect(() => {
          let e = r.current;
          if (e)
            return (
              n.branches.add(e),
              () => {
                n.branches.delete(e);
              }
            );
        }, [n.branches]),
        (0, p.jsx)(u.div, { ...e, ref: i })
      );
    }, `DismissableLayerBranch`),
  );
function C() {
  let e = f.useContext(b),
    [t, n] = f.useState(null);
  return (
    f.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
h(C, `useDismissableLayerSurface`);
var w = h(() => !0, `IS_TRUE`);
function T(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = w,
    } = t,
    c = s(e),
    l = f.useRef(!1),
    u = f.useRef(!1),
    d = f.useRef(new Map()),
    p = f.useRef(() => {});
  return (
    f.useEffect(() => {
      function e() {
        ((u.current = !1), (i.current = !1), d.current.clear());
      }
      h(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(d.current.values()).some(Boolean);
      }
      h(t, `isOutsideInteractionIntercepted`);
      function s(e) {
        if (!u.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          d.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              u.current && p.current();
            }, 0));
      }
      h(s, `handleInteractionCapture`);
      function f(e) {
        u.current && d.current.set(e.type, !1);
      }
      h(f, `handleInteractionBubble`);
      let m = h((a) => {
          if (a.target && !l.current) {
            let s = function () {
              n.removeEventListener(`click`, p.current);
              let r = t();
              (e(), r || O(_, c, f, { discrete: !0 }));
            };
            if (
              (h(s, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              (n.removeEventListener(`click`, p.current),
                e(),
                (l.current = !1));
              return;
            }
            let f = { originalEvent: a };
            ((u.current = !0),
              (i.current = r && a.button === 0),
              d.current.clear(),
              !r || a.button !== 0
                ? s()
                : (n.removeEventListener(`click`, p.current),
                  (p.current = s),
                  n.addEventListener(`click`, p.current, { once: !0 })));
          } else (n.removeEventListener(`click`, p.current), e());
          l.current = !1;
        }, `handlePointerDown`),
        g = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of g) (n.addEventListener(e, s, !0), n.addEventListener(e, f));
      let v = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        (window.clearTimeout(v),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, p.current));
        for (let e of g)
          (n.removeEventListener(e, s, !0), n.removeEventListener(e, f));
      };
    }, [n, c, r, i, a, o]),
    { onPointerDownCapture: h(() => (l.current = !0), `onPointerDownCapture`) }
  );
}
h(T, `usePointerDownOutside`);
function E(e, t = globalThis?.document) {
  let n = s(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      let e = h((e) => {
        e.target &&
          !r.current &&
          O(v, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: h(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: h(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
h(E, `useFocusOutside`);
function D() {
  let e = new CustomEvent(g);
  document.dispatchEvent(e);
}
h(D, `dispatchUpdate`);
function O(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? l(i, a) : i.dispatchEvent(a));
}
h(O, `handleAndDispatchCustomEvent`);
var k = [`top`, `right`, `bottom`, `left`],
  A = Math.min,
  j = Math.max,
  M = Math.round,
  N = Math.floor,
  P = (e) => ({ x: e, y: e }),
  ee = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function F(e, t, n) {
  return j(e, A(t, n));
}
function I(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function L(e) {
  return e.split(`-`)[0];
}
function R(e) {
  return e.split(`-`)[1];
}
function z(e) {
  return e === `x` ? `y` : `x`;
}
function B(e) {
  return e === `y` ? `height` : `width`;
}
function V(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function H(e) {
  return z(V(e));
}
function te(e, t, n) {
  n === void 0 && (n = !1);
  let r = R(e),
    i = H(e),
    a = B(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = ue(o)), [o, ue(o)]);
}
function ne(e) {
  let t = ue(e);
  return [re(e), t, re(t)];
}
function re(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
var ie = [`left`, `right`],
  ae = [`right`, `left`],
  oe = [`top`, `bottom`],
  se = [`bottom`, `top`];
function ce(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? ae : ie) : t ? ie : ae;
    case `left`:
    case `right`:
      return t ? oe : se;
    default:
      return [];
  }
}
function le(e, t, n, r) {
  let i = R(e),
    a = ce(L(e), n === `start`, r);
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(re)))),
    a
  );
}
function ue(e) {
  let t = L(e);
  return ee[t] + e.slice(t.length);
}
function de(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  };
}
function fe(e) {
  return typeof e == `number`
    ? { top: e, right: e, bottom: e, left: e }
    : de(e);
}
function pe(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function me(e, t, n) {
  let { reference: r, floating: i } = e,
    a = V(t),
    o = H(t),
    s = B(o),
    c = L(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  let m = R(t);
  return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p);
}
async function he(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = I(t, e),
    p = fe(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = pe(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = pe(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var ge = 50,
  _e = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: he },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = me(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < ge &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = me(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  ve = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = I(e, t) || {};
      if (l == null) return {};
      let d = fe(u),
        f = { x: n, y: r },
        p = H(i),
        m = B(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = A(d[_], T),
        D = A(d[v], T),
        O = C - h[m] - D,
        k = C / 2 - h[m] / 2 + w,
        j = F(E, k, O),
        M =
          !c.arrow &&
          R(i) != null &&
          k !== j &&
          a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0,
        N = M ? (k < E ? k - E : k - O) : 0;
      return {
        [p]: f[p] + N,
        data: {
          [p]: j,
          centerOffset: k - j - N,
          ...(M && { alignmentOffset: N }),
        },
        reset: M,
      };
    },
  }),
  ye = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = I(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = L(r),
            _ = V(o),
            v = L(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [ue(o)] : ne(o)),
            x = p !== `none`;
          !d && x && b.push(...le(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = te(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== V(t)) ||
                T.every((e) => V(e.placement) !== _ || e.overflows[0] > 0))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = V(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  };
function be(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function xe(e) {
  return k.some((t) => e[t] >= 0);
}
var Se = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = I(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = be(
                await r.detectOverflow(t, {
                  ...a,
                  elementContext: `reference`,
                }),
                n.reference,
              );
              return {
                data: { referenceHiddenOffsets: e, referenceHidden: xe(e) },
              };
            }
            case `escaped`: {
              let e = be(
                await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                n.floating,
              );
              return { data: { escapedOffsets: e, escaped: xe(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Ce = new Set([`left`, `top`]);
async function we(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = L(n),
    s = R(n),
    c = V(n) === `y`,
    l = Ce.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = I(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var Te = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await we(t, e);
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  Ee = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = I(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = V(i),
            p = z(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              F(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`],
              );
          (o && (m = g(p, m)), s && (h = g(f, h)));
          let _ = c.fn({ ...t, [p]: m, [f]: h });
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          };
        },
      }
    );
  },
  De = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = I(e, t),
            u = { x: n, y: r },
            d = V(i),
            f = z(d),
            p = u[f],
            m = u[d],
            h = I(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = Ce.has(L(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  Oe = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = I(e, t),
            c = await i.detectOverflow(t, s),
            l = L(n),
            u = R(n),
            d = V(n) === `y`,
            { width: f, height: p } = r.floating,
            m,
            h;
          l === `top` || l === `bottom`
            ? ((m = l),
              (h =
                u ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((h = l), (m = u === `end` ? `top` : `bottom`));
          let g = p - c.top - c.bottom,
            _ = f - c.left - c.right,
            v = A(p - c[m], g),
            y = A(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y;
          (b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * j(c.left, c.right))
                : (S = p - 2 * j(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S }));
          let w = await i.getDimensions(a.floating);
          return f !== w.width || p !== w.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ke() {
  return typeof window < `u`;
}
function U(e) {
  return Ae(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function W(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function G(e) {
  return ((Ae(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement;
}
function Ae(e) {
  return ke() ? e instanceof Node || e instanceof W(e).Node : !1;
}
function K(e) {
  return ke() ? e instanceof Element || e instanceof W(e).Element : !1;
}
function q(e) {
  return ke() ? e instanceof HTMLElement || e instanceof W(e).HTMLElement : !1;
}
function je(e) {
  return !ke() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof W(e).ShadowRoot;
}
function Me(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = Y(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  );
}
function Ne(e) {
  return /^(table|td|th)$/.test(U(e));
}
function Pe(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var Fe = /transform|translate|scale|rotate|perspective|filter/,
  Ie = /paint|layout|strict|content/,
  J = (e) => !!e && e !== `none`,
  Le;
function Re(e) {
  let t = K(e) ? Y(e) : e;
  return (
    J(t.transform) ||
    J(t.translate) ||
    J(t.scale) ||
    J(t.rotate) ||
    J(t.perspective) ||
    (!Be() && (J(t.backdropFilter) || J(t.filter))) ||
    Fe.test(t.willChange || ``) ||
    Ie.test(t.contain || ``)
  );
}
function ze(e) {
  let t = X(e);
  for (; q(t) && !Ve(t);) {
    if (Re(t)) return t;
    if (Pe(t)) return null;
    t = X(t);
  }
  return null;
}
function Be() {
  return (
    (Le ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    Le
  );
}
function Ve(e) {
  return /^(html|body|#document)$/.test(U(e));
}
function Y(e) {
  return W(e).getComputedStyle(e);
}
function He(e) {
  return K(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function X(e) {
  if (U(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (je(e) && e.host) || G(e);
  return je(t) ? t.host : t;
}
function Ue(e) {
  let t = X(e);
  return Ve(t) ? (e.ownerDocument || e).body : q(t) && Me(t) ? t : Ue(t);
}
function We(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = Ue(e),
    i = r === e.ownerDocument?.body,
    a = W(r);
  if (i) {
    let e = Ge(a);
    return t.concat(
      a,
      a.visualViewport || [],
      Me(r) ? r : [],
      e && n ? We(e) : [],
    );
  } else return t.concat(r, We(r, [], n));
}
function Ge(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ke(e) {
  let t = Y(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = q(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = M(n) !== a || M(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function qe(e) {
  return K(e) ? e : e.contextElement;
}
function Z(e) {
  let t = qe(e);
  if (!q(t)) return P(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Ke(t),
    o = (a ? M(n.width) : n.width) / r,
    s = (a ? M(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Je = P(0);
function Ye(e) {
  let t = W(e);
  return !Be() || !t.visualViewport
    ? Je
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Xe(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === W(e));
}
function Q(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = qe(e),
    o = P(1);
  t && (r ? K(r) && (o = Z(r)) : (o = Z(e)));
  let s = Xe(a, n, r) ? Ye(a) : P(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a && r) {
    let e = W(a),
      t = K(r) ? W(r) : r,
      n = e,
      i = Ge(n);
    for (; i && t !== n;) {
      let e = Z(i),
        t = i.getBoundingClientRect(),
        r = Y(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = W(i)),
        (i = Ge(n)));
    }
  }
  return pe({ width: u, height: d, x: c, y: l });
}
function Ze(e, t) {
  let n = He(e).scrollLeft;
  return t ? t.left + n : Q(G(e)).left + n;
}
function Qe(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - Ze(e, n), y: n.top + t.scrollTop };
}
function $e(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = G(r),
    s = t ? Pe(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = P(1),
    u = P(0),
    d = q(r);
  if ((d || !a) && ((U(r) !== `body` || Me(o)) && (c = He(r)), d)) {
    let e = Q(r);
    ((l = Z(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Qe(o, c) : P(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function et(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function tt(e) {
  let t = He(e),
    n = e.ownerDocument.body,
    r = j(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = j(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + Ze(e),
    o = -t.scrollTop;
  return (
    Y(n).direction === `rtl` && (a += j(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  );
}
var nt = 25;
function rt(e, t, n) {
  n === void 0 && (n = `viewport`);
  let r = n === `layoutViewport`,
    i = W(e),
    a = G(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0;
  if (o) {
    let e = !Be() || t === `fixed`;
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)));
  }
  if (Ze(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i;
    o <= nt && (s -= o);
  }
  return { width: s, height: c, x: l, y: u };
}
function it(e, t) {
  let n = Q(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Z(e);
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  };
}
function at(e, t, n) {
  let r;
  if (t === `viewport` || t === `layoutViewport`) r = rt(e, n, t);
  else if (t === `document`) r = tt(G(e));
  else if (K(t)) r = it(t, n);
  else {
    let n = Ye(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return pe(r);
}
function ot(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = We(e, [], !1).filter((e) => K(e) && U(e) !== `body`),
    i = null,
    a = Y(e).position === `fixed`,
    o = a ? X(e) : e;
  for (; K(o) && !Ve(o);) {
    let e = Y(o),
      t = Re(o),
      n = i ? i.position : a ? `fixed` : ``;
    (!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = X(o)));
  }
  return (t.set(e, r), r);
}
function st(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? Pe(t)
          ? []
          : ot(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = at(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = at(t, a[e], i);
    ((s = j(n.top, s)),
      (c = A(n.right, c)),
      (l = A(n.bottom, l)),
      (u = j(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function ct(e) {
  let { width: t, height: n } = Ke(e);
  return { width: t, height: n };
}
function lt(e, t, n) {
  let r = q(t),
    i = G(t),
    a = n === `fixed`,
    o = Q(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = P(0);
  if ((r || !a) && ((U(t) !== `body` || Me(i)) && (s = He(t)), r)) {
    let e = Q(t, !0, a, t);
    ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
  }
  !r && i && (c.x = Ze(i));
  let l = i && !r && !a ? Qe(i, s) : P(0);
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  };
}
function ut(e) {
  return Y(e).position === `static`;
}
function dt(e, t) {
  if (!q(e) || Y(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (G(e) === n && (n = n.ownerDocument.body), n);
}
function ft(e, t) {
  let n = W(e);
  if (Pe(e)) return n;
  if (!q(e)) {
    let t = X(e);
    for (; t && !Ve(t);) {
      if (K(t) && !ut(t)) return t;
      t = X(t);
    }
    return n;
  }
  let r = dt(e, t);
  for (; r && Ne(r) && ut(r);) r = dt(r, t);
  return r && Ve(r) && ut(r) && !Re(r) ? n : r || ze(e) || n;
}
var pt = async function (e) {
  let t = this.getOffsetParent || ft,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: lt(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function mt(e) {
  return Y(e).direction === `rtl`;
}
var ht = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $e,
  getDocumentElement: G,
  getClippingRect: st,
  getOffsetParent: ft,
  getElementRects: pt,
  getClientRects: et,
  getDimensions: ct,
  getScale: Z,
  isElement: K,
  isRTL: mt,
};
function gt(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function _t(e, t, n) {
  let r = null,
    i,
    a = G(e);
  function o() {
    var e;
    (clearTimeout(i), (e = r) == null || e.disconnect(), (r = null));
  }
  function s(n, c) {
    (n === void 0 && (n = !1), c === void 0 && (c = 1), o());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((n || t(), !f || !p)) return;
    let m = N(d),
      h = N(a.clientWidth - (u + f)),
      g = N(a.clientHeight - (d + p)),
      _ = N(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: j(0, A(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (!gt(l, e.getBoundingClientRect())) return s();
      if (n !== c) {
        if (!y) return s();
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, v);
    }
    r.observe(e);
  }
  let c = W(e),
    l = () => s(n);
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      (c.removeEventListener(`resize`, l), o());
    }
  );
}
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
var Pt = (e) => {
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
            : wt({ element: r.current, padding: i }).fn(n)
          : r
            ? wt({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  Ft = (e, t) => {
    let n = yt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  It = (e, t) => {
    let n = bt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Lt = (e, t) => ({ fn: Tt(e).fn, options: [e, t] }),
  Rt = (e, t) => {
    let n = xt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  zt = (e, t) => {
    let n = St(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Bt = (e, t) => {
    let n = Ct(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Vt = (e, t) => {
    let n = Pt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ht = Object.defineProperty,
  $ = (e, t) => Ht(e, `name`, { value: t, configurable: !0 }),
  Ut = `Popper`,
  [Wt, Gt] = a(Ut),
  [Kt, qt] = Wt(Ut),
  Jt = $((e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = f.useState(null),
      [a, o] = f.useState(void 0);
    return (0, p.jsx)(Kt, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    });
  }, `Popper`),
  Yt = `PopperAnchor`,
  Xt = f.forwardRef(
    $(function (e, t) {
      let { __scopePopper: n, virtualRef: r, ...i } = e,
        a = qt(Yt, n),
        o = f.useRef(null),
        s = a.onAnchorChange,
        l = c(
          t,
          f.useCallback(
            (e) => {
              ((o.current = e), e && s(e));
            },
            [s],
          ),
        ),
        d = f.useRef(null);
      f.useEffect(() => {
        if (!r) return;
        let e = d.current;
        ((d.current = r.current), e !== d.current && s(d.current));
      });
      let m = a.placementState && rn(a.placementState),
        h = m?.[0],
        g = m?.[1];
      return r
        ? null
        : (0, p.jsx)(u.div, {
            "data-radix-popper-side": h,
            "data-radix-popper-align": g,
            ...i,
            ref: l,
          });
    }, `PopperAnchor`),
  ),
  Zt = `PopperContent`,
  [Qt, $t] = Wt(Zt),
  en = f.forwardRef(
    $(function (e, t) {
      let {
          __scopePopper: n,
          side: r = `bottom`,
          sideOffset: i = 0,
          align: a = `center`,
          alignOffset: l = 0,
          arrowPadding: m = 0,
          avoidCollisions: h = !0,
          collisionBoundary: g = [],
          collisionPadding: _ = 0,
          sticky: v = `partial`,
          hideWhenDetached: y = !1,
          updatePositionStrategy: b = `optimized`,
          onPlaced: x,
          ...S
        } = e,
        C = qt(Zt, n),
        [w, T] = f.useState(null),
        E = c(t, T),
        [D, O] = f.useState(null),
        k = d(D),
        A = k?.width ?? 0,
        j = k?.height ?? 0,
        M = r + (a === `center` ? `` : `-` + a),
        N =
          typeof _ == `number`
            ? _
            : { top: 0, right: 0, bottom: 0, left: 0, ..._ },
        P = Array.isArray(g) ? g : [g],
        ee = P.length > 0,
        F = { padding: N, boundary: P.filter(tn), altBoundary: ee },
        {
          refs: I,
          floatingStyles: L,
          placement: R,
          isPositioned: z,
          middlewareData: B,
        } = Nt({
          strategy: `fixed`,
          placement: M,
          whileElementsMounted: $(
            (...e) => vt(...e, { animationFrame: b === `always` }),
            `whileElementsMounted`,
          ),
          elements: { reference: C.anchor },
          middleware: [
            Ft({ mainAxis: i + j, alignmentAxis: l }),
            h &&
              It({
                mainAxis: !0,
                crossAxis: !1,
                limiter: v === `partial` ? Lt() : void 0,
                ...F,
              }),
            h && Rt({ ...F }),
            zt({
              ...F,
              apply: $(
                ({
                  elements: e,
                  rects: t,
                  availableWidth: n,
                  availableHeight: r,
                }) => {
                  let { width: i, height: a } = t.reference,
                    o = e.floating.style;
                  (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                    o.setProperty(`--radix-popper-available-height`, `${r}px`),
                    o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                    o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
                },
                `apply`,
              ),
            }),
            D && Vt({ element: D, padding: m }),
            nn({ arrowWidth: A, arrowHeight: j }),
            y &&
              Bt({
                strategy: `referenceHidden`,
                ...F,
                boundary: ee ? F.boundary : void 0,
              }),
          ],
        }),
        V = C.setPlacementState;
      o(
        () => (
          V(R),
          () => {
            V(void 0);
          }
        ),
        [R, V],
      );
      let [H, te] = rn(R),
        ne = s(x);
      o(() => {
        z && ne?.();
      }, [z, ne]);
      let re = B.arrow?.x,
        ie = B.arrow?.y,
        ae = B.arrow?.centerOffset !== 0,
        [oe, se] = f.useState();
      return (
        o(() => {
          w && se(window.getComputedStyle(w).zIndex);
        }, [w]),
        (0, p.jsx)(`div`, {
          ref: I.setFloating,
          "data-radix-popper-content-wrapper": ``,
          style: {
            ...L,
            transform: z ? L.transform : `translate(0, -200%)`,
            minWidth: `max-content`,
            zIndex: oe,
            "--radix-popper-transform-origin": [
              B.transformOrigin?.x,
              B.transformOrigin?.y,
            ].join(` `),
            ...(B.hide?.referenceHidden && {
              visibility: `hidden`,
              pointerEvents: `none`,
            }),
          },
          dir: e.dir,
          children: (0, p.jsx)(Qt, {
            scope: n,
            placedSide: H,
            placedAlign: te,
            onArrowChange: O,
            arrowX: re,
            arrowY: ie,
            shouldHideArrow: ae,
            children: (0, p.jsx)(u.div, {
              "data-side": H,
              "data-align": te,
              ...S,
              ref: E,
              style: { ...S.style, animation: z ? S.style?.animation : `none` },
            }),
          }),
        })
      );
    }, `PopperContent`),
  );
function tn(e) {
  return e !== null;
}
$(tn, `isNotNull`);
var nn = $(
  (e) => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
      let { placement: n, rects: r, middlewareData: i } = t,
        a = i.arrow?.centerOffset !== 0,
        o = a ? 0 : e.arrowWidth,
        s = a ? 0 : e.arrowHeight,
        [c, l] = rn(n),
        u = { start: `0%`, center: `50%`, end: `100%` }[l],
        d = (i.arrow?.x ?? 0) + o / 2,
        f = (i.arrow?.y ?? 0) + s / 2,
        p = ``,
        m = ``;
      return (
        c === `bottom`
          ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
          : c === `top`
            ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
            : c === `right`
              ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
              : c === `left` &&
                ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
        { data: { x: p, y: m } }
      );
    },
  }),
  `transformOrigin`,
);
function rn(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
$(rn, `getSideAndAlignFromPlacement`);
export { x as a, Gt as i, Xt as n, S as o, en as r, C as s, Jt as t };
