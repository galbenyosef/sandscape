// assets__dist-BWh9CVbU 01 — current
// Lines 1-346 of readable/assets__dist-BWh9CVbU.pretty.js (statement-aligned).
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
