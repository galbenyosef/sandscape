// dist-BfZydly7 01 — current
// Lines 1-350 of readable/assets/dist-BfZydly7.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { a as i, i as a, n as o, r as s } from "./dist-CA4uZW3H.js";
import { m as c } from "./AuthService-C8NFtVWb.js";
import { n as l, t as u } from "./dist-ByN-1XKv.js";
var d = e(t(), 1),
  f = n(),
  p = Object.defineProperty,
  m = (e, t) => p(e, `name`, { value: t, configurable: !0 }),
  h = `dismissableLayer.update`,
  g = `dismissableLayer.pointerDownOutside`,
  _ = `dismissableLayer.focusOutside`,
  v,
  y = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  b = d.forwardRef(
    m(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: a,
          onPointerDownOutside: o,
          onFocusOutside: l,
          onInteractOutside: p,
          onDismiss: g,
          ..._
        } = e,
        b = d.useContext(y),
        [x, S] = d.useState(null),
        C = x?.ownerDocument ?? globalThis?.document,
        [, D] = d.useState({}),
        O = c(t, S),
        k = Array.from(b.layers),
        [A] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
        j = A ? k.indexOf(A) : -1,
        M = x ? k.indexOf(x) : -1,
        N = b.layersWithOutsidePointerEventsDisabled.size > 0,
        P = M >= j,
        F = d.useRef(!1),
        I = w(
          (e) => {
            (o?.(e), p?.(e), e.defaultPrevented || g?.());
          },
          {
            ownerDocument: C,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: F,
            dismissableSurfaces: b.dismissableSurfaces,
            shouldHandlePointerDownOutside: d.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...b.branches].some((t) => t.contains(e));
                return P && !t;
              },
              [b.branches, P],
            ),
          },
        ),
        L = T((e) => {
          if (r && F.current) return;
          let t = e.target;
          [...b.branches].some((e) => e.contains(t)) ||
            (l?.(e), p?.(e), e.defaultPrevented || g?.());
        }, C),
        R = x ? M === k.length - 1 : !1,
        z = s((e) => {
          e.key === `Escape` &&
            (a?.(e), !e.defaultPrevented && g && (e.preventDefault(), g()));
        });
      return (
        d.useEffect(() => {
          if (R)
            return (
              C.addEventListener(`keydown`, z, { capture: !0 }),
              () => C.removeEventListener(`keydown`, z, { capture: !0 })
            );
        }, [C, R, z]),
        d.useEffect(() => {
          if (x)
            return (
              n &&
                (b.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((v = C.body.style.pointerEvents),
                  (C.body.style.pointerEvents = `none`)),
                b.layersWithOutsidePointerEventsDisabled.add(x)),
              b.layers.add(x),
              E(),
              () => {
                n &&
                  (b.layersWithOutsidePointerEventsDisabled.delete(x),
                  b.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (C.body.style.pointerEvents = v));
              }
            );
        }, [x, C, n, b]),
        d.useEffect(
          () => () => {
            x &&
              (b.layers.delete(x),
              b.layersWithOutsidePointerEventsDisabled.delete(x),
              E());
          },
          [x, b],
        ),
        d.useEffect(() => {
          let e = m(() => D({}), `handleUpdate`);
          return (
            document.addEventListener(h, e),
            () => document.removeEventListener(h, e)
          );
        }, []),
        (0, f.jsx)(u.div, {
          ..._,
          ref: O,
          style: {
            pointerEvents: N ? (P ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: i(e.onFocusCapture, L.onFocusCapture),
          onBlurCapture: i(e.onBlurCapture, L.onBlurCapture),
          onPointerDownCapture: i(
            e.onPointerDownCapture,
            I.onPointerDownCapture,
          ),
        })
      );
    }, `DismissableLayer`),
  ),
  x = d.forwardRef(
    m(function (e, t) {
      let n = d.useContext(y),
        r = d.useRef(null),
        i = c(t, r);
      return (
        d.useEffect(() => {
          let e = r.current;
          if (e)
            return (
              n.branches.add(e),
              () => {
                n.branches.delete(e);
              }
            );
        }, [n.branches]),
        (0, f.jsx)(u.div, { ...e, ref: i })
      );
    }, `DismissableLayerBranch`),
  );
function S() {
  let e = d.useContext(y),
    [t, n] = d.useState(null);
  return (
    d.useEffect(() => {
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
m(S, `useDismissableLayerSurface`);
var C = m(() => !0, `IS_TRUE`);
function w(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = C,
    } = t,
    c = s(e),
    l = d.useRef(!1),
    u = d.useRef(!1),
    f = d.useRef(new Map()),
    p = d.useRef(() => {});
  return (
    d.useEffect(() => {
      function e() {
        ((u.current = !1), (i.current = !1), f.current.clear());
      }
      m(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(f.current.values()).some(Boolean);
      }
      m(t, `isOutsideInteractionIntercepted`);
      function s(e) {
        if (!u.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          f.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              u.current && p.current();
            }, 0));
      }
      m(s, `handleInteractionCapture`);
      function d(e) {
        u.current && f.current.set(e.type, !1);
      }
      m(d, `handleInteractionBubble`);
      let h = m((a) => {
          if (a.target && !l.current) {
            let s = function () {
              n.removeEventListener(`click`, p.current);
              let r = t();
              (e(), r || D(g, c, d, { discrete: !0 }));
            };
            if (
              (m(s, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              (n.removeEventListener(`click`, p.current),
                e(),
                (l.current = !1));
              return;
            }
            let d = { originalEvent: a };
            ((u.current = !0),
              (i.current = r && a.button === 0),
              f.current.clear(),
              !r || a.button !== 0
                ? s()
                : (n.removeEventListener(`click`, p.current),
                  (p.current = s),
                  n.addEventListener(`click`, p.current, { once: !0 })));
          } else (n.removeEventListener(`click`, p.current), e());
          l.current = !1;
        }, `handlePointerDown`),
        _ = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of _) (n.addEventListener(e, s, !0), n.addEventListener(e, d));
      let v = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, h);
      }, 0);
      return () => {
        (window.clearTimeout(v),
          n.removeEventListener(`pointerdown`, h),
          n.removeEventListener(`click`, p.current));
        for (let e of _)
          (n.removeEventListener(e, s, !0), n.removeEventListener(e, d));
      };
    }, [n, c, r, i, a, o]),
    { onPointerDownCapture: m(() => (l.current = !0), `onPointerDownCapture`) }
  );
}
m(w, `usePointerDownOutside`);
function T(e, t = globalThis?.document) {
  let n = s(e),
    r = d.useRef(!1);
  return (
    d.useEffect(() => {
      let e = m((e) => {
        e.target &&
          !r.current &&
          D(_, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: m(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: m(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
m(T, `useFocusOutside`);
function E() {
  let e = new CustomEvent(h);
  document.dispatchEvent(e);
}
m(E, `dispatchUpdate`);
function D(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? l(i, a) : i.dispatchEvent(a));
}
m(D, `handleAndDispatchCustomEvent`);
var O = [`top`, `right`, `bottom`, `left`],
  k = Math.min,
  A = Math.max,
  j = Math.round,
  M = Math.floor,
  N = (e) => ({ x: e, y: e }),
  P = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function F(e, t, n) {
  return A(e, k(t, n));
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
function ee(e, t, n) {
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
  return (t.reference[a] > t.floating[a] && (o = le(o)), [o, le(o)]);
}
function te(e) {
  let t = le(e);
  return [ne(e), t, ne(t)];
}
function ne(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`);
}
