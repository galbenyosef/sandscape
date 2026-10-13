// assets__Combination-CJArERGX 01 — select
// Lines 1-350 of readable/assets__Combination-CJArERGX.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { n as i, r as a } from "./dist-CA4uZW3H.js";
import { c as o, m as s, o as c, s as l } from "./AuthService-CQeU_0bQ.js";
import { t as u } from "./dist-p2cW4AiE.js";
var d = e(t(), 1),
  f = e(r(), 1),
  p = n(),
  m = Object.defineProperty,
  h = d.forwardRef(
    ((e, t) => m(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [a, o] = d.useState(!1);
      i(() => o(!0), []);
      let s = n || (a && globalThis?.document?.body);
      return s ? f.createPortal((0, p.jsx)(u.div, { ...r, ref: t }), s) : null;
    }, `Portal`),
  ),
  g = Object.defineProperty,
  _ = (e, t) => g(e, `name`, { value: t, configurable: !0 }),
  v = 0,
  y = null;
function b(e) {
  return (x(), e.children);
}
_(b, `FocusGuards`);
function x() {
  d.useEffect(() => {
    y ||= { start: S(), end: S() };
    let { start: e, end: t } = y;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      v++,
      () => {
        (v === 1 && (y?.start.remove(), y?.end.remove(), (y = null)),
          (v = Math.max(0, v - 1)));
      }
    );
  }, []);
}
_(x, `useFocusGuards`);
function S() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
_(S, `createFocusGuard`);
var ee = Object.defineProperty,
  C = (e, t) => ee(e, `name`, { value: t, configurable: !0 }),
  w = `focusScope.autoFocusOnMount`,
  T = `focusScope.autoFocusOnUnmount`,
  te = { bubbles: !1, cancelable: !0 },
  ne = d.forwardRef(
    C(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: i,
          onUnmountAutoFocus: o,
          ...c
        } = e,
        [l, f] = d.useState(null),
        m = a(i),
        h = a(o),
        g = d.useRef(null),
        _ = s(t, f),
        v = d.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (d.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (v.paused || !l) return;
              let t = e.target;
              l.contains(t) ? (g.current = t) : k(g.current, { select: !0 });
            },
            t = function (e) {
              if (v.paused || !l) return;
              let t = e.relatedTarget;
              t !== null && (l.contains(t) || k(g.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && k(l);
            };
          (C(e, `handleFocusIn`),
            C(t, `handleFocusOut`),
            C(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t));
          let r = new MutationObserver(n);
          return (
            l && r.observe(l, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect());
            }
          );
        }
      }, [r, l, v.paused]),
        d.useEffect(() => {
          if (l) {
            A.add(v);
            let e = document.activeElement;
            if (!l.contains(e)) {
              let t = new CustomEvent(w, te);
              (l.addEventListener(w, m),
                l.dispatchEvent(t),
                t.defaultPrevented ||
                  (re(oe(E(l)), { select: !0 }),
                  document.activeElement === e && k(l)));
            }
            return () => {
              (l.removeEventListener(w, m),
                setTimeout(() => {
                  let t = new CustomEvent(T, te);
                  (l.addEventListener(T, h),
                    l.dispatchEvent(t),
                    t.defaultPrevented || k(e ?? document.body, { select: !0 }),
                    l.removeEventListener(T, h),
                    A.remove(v));
                }, 0));
            };
          }
        }, [l, m, h, v]));
      let y = d.useCallback(
        (e) => {
          if ((!n && !r) || v.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement;
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = ie(t);
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && k(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && k(a, { select: !0 }))
              : i === t && e.preventDefault();
          }
        },
        [n, r, v.paused],
      );
      return (0, p.jsx)(u.div, { tabIndex: -1, ...c, ref: _, onKeyDown: y });
    }, `FocusScope`),
  );
function re(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((k(r, { select: t }), document.activeElement !== n)) return;
}
C(re, `focusFirst`);
function ie(e) {
  let t = E(e);
  return [D(t, e), D(t.reverse(), e)];
}
C(ie, `getTabbableEdges`);
function E(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: C((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
C(E, `getTabbableCandidates`);
function D(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : ae(r, { upTo: t }))
    )
      return r;
}
C(D, `findVisible`);
function ae(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
C(ae, `isHidden`);
function O(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
C(O, `isSelectableInput`);
function k(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && O(e) && t && e.select());
  }
}
C(k, `focus`);
var A = j();
function j() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = M(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = M(e, t)), e[0]?.resume());
    },
  };
}
C(j, `createFocusScopesStack`);
function M(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
C(M, `arrayRemove`);
function oe(e) {
  return e.filter((e) => e.tagName !== `A`);
}
C(oe, `removeLinks`);
var se = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  N = new WeakMap(),
  P = new WeakMap(),
  F = {},
  I = 0,
  ce = function (e) {
    return e && (e.host || ce(e.parentNode));
  },
  le = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = ce(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  ue = function (e, t, n, r) {
    var i = le(t, Array.isArray(e) ? e : [e]);
    F[n] || (F[n] = new WeakMap());
    var a = F[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (N.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (N.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && P.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`));
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      I++,
      function () {
        (o.forEach(function (e) {
          var t = N.get(e) - 1,
            i = a.get(e) - 1;
          (N.set(e, t),
            a.set(e, i),
            t || (P.has(e) || e.removeAttribute(r), P.delete(e)),
            i || e.removeAttribute(n));
        }),
          I--,
          I ||
            ((N = new WeakMap()),
            (N = new WeakMap()),
            (P = new WeakMap()),
            (F = {})));
      }
    );
  },
  de = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || se(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        ue(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  L = `right-scroll-bar-position`,
  R = `width-before-scroll-bar`,
  fe = `with-scroll-bars-hidden`,
  pe = `--removed-body-scroll-bar-size`;
