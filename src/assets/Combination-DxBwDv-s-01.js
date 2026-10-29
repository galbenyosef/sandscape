// Combination-DxBwDv-s 01 — select
// Lines 1-341 of readable/assets/Combination-DxBwDv-s.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { r } from "./dist-CA4uZW3H.js";
import { c as i, m as a, o, s } from "./AuthService-C8NFtVWb.js";
import { t as c } from "./dist-ByN-1XKv.js";
var l = e(t(), 1),
  u = Object.defineProperty,
  d = (e, t) => u(e, `name`, { value: t, configurable: !0 }),
  f = 0,
  p = null;
function m(e) {
  return (h(), e.children);
}
d(m, `FocusGuards`);
function h() {
  l.useEffect(() => {
    p ||= { start: g(), end: g() };
    let { start: e, end: t } = p;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      f++,
      () => {
        (f === 1 && (p?.start.remove(), p?.end.remove(), (p = null)),
          (f = Math.max(0, f - 1)));
      }
    );
  }, []);
}
d(h, `useFocusGuards`);
function g() {
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
d(g, `createFocusGuard`);
var _ = n(),
  v = Object.defineProperty,
  y = (e, t) => v(e, `name`, { value: t, configurable: !0 }),
  b = `focusScope.autoFocusOnMount`,
  x = `focusScope.autoFocusOnUnmount`,
  S = { bubbles: !1, cancelable: !0 },
  C = l.forwardRef(
    y(function (e, t) {
      let {
          loop: n = !1,
          trapped: i = !1,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          ...u
        } = e,
        [d, f] = l.useState(null),
        p = r(o),
        m = r(s),
        h = l.useRef(null),
        g = a(t, f),
        v = l.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      (l.useEffect(() => {
        if (i) {
          let e = function (e) {
              if (v.paused || !d) return;
              let t = e.target;
              d.contains(t) ? (h.current = t) : k(h.current, { select: !0 });
            },
            t = function (e) {
              if (v.paused || !d) return;
              let t = e.relatedTarget;
              t !== null && (d.contains(t) || k(h.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && k(d);
            };
          (y(e, `handleFocusIn`),
            y(t, `handleFocusOut`),
            y(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t));
          let r = new MutationObserver(n);
          return (
            d && r.observe(d, { childList: !0, subtree: !0 }),
            () => {
              (document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect());
            }
          );
        }
      }, [i, d, v.paused]),
        l.useEffect(() => {
          if (d) {
            A.add(v);
            let e = document.activeElement;
            if (!d.contains(e)) {
              let t = new CustomEvent(b, S);
              (d.addEventListener(b, p),
                d.dispatchEvent(t),
                t.defaultPrevented ||
                  (w(ne(E(d)), { select: !0 }),
                  document.activeElement === e && k(d)));
            }
            return () => {
              (d.removeEventListener(b, p),
                setTimeout(() => {
                  let t = new CustomEvent(x, S);
                  (d.addEventListener(x, m),
                    d.dispatchEvent(t),
                    t.defaultPrevented || k(e ?? document.body, { select: !0 }),
                    d.removeEventListener(x, m),
                    A.remove(v));
                }, 0));
            };
          }
        }, [d, p, m, v]));
      let C = l.useCallback(
        (e) => {
          if ((!n && !i) || v.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            r = document.activeElement;
          if (t && r) {
            let t = e.currentTarget,
              [i, a] = T(t);
            i && a
              ? !e.shiftKey && r === a
                ? (e.preventDefault(), n && k(i, { select: !0 }))
                : e.shiftKey &&
                  r === i &&
                  (e.preventDefault(), n && k(a, { select: !0 }))
              : r === t && e.preventDefault();
          }
        },
        [n, i, v.paused],
      );
      return (0, _.jsx)(c.div, { tabIndex: -1, ...u, ref: g, onKeyDown: C });
    }, `FocusScope`),
  );
function w(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((k(r, { select: t }), document.activeElement !== n)) return;
}
y(w, `focusFirst`);
function T(e) {
  let t = E(e);
  return [D(t, e), D(t.reverse(), e)];
}
y(T, `getTabbableEdges`);
function E(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: y((e) => {
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
y(E, `getTabbableCandidates`);
function D(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : ee(r, { upTo: t }))
    )
      return r;
}
y(D, `findVisible`);
function ee(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
y(ee, `isHidden`);
function O(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
y(O, `isSelectableInput`);
function k(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && O(e) && t && e.select());
  }
}
y(k, `focus`);
var A = te();
function te() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = j(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = j(e, t)), e[0]?.resume());
    },
  };
}
y(te, `createFocusScopesStack`);
function j(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
y(j, `arrayRemove`);
function ne(e) {
  return e.filter((e) => e.tagName !== `A`);
}
y(ne, `removeLinks`);
var re = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  M = new WeakMap(),
  N = new WeakMap(),
  P = {},
  F = 0,
  ie = function (e) {
    return e && (e.host || ie(e.parentNode));
  },
  ae = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = ie(t);
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
  oe = function (e, t, n, r) {
    var i = ae(t, Array.isArray(e) ? e : [e]);
    P[n] || (P[n] = new WeakMap());
    var a = P[n],
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
                c = (M.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              (M.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && N.set(e, !0),
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
      F++,
      function () {
        (o.forEach(function (e) {
          var t = M.get(e) - 1,
            i = a.get(e) - 1;
          (M.set(e, t),
            a.set(e, i),
            t || (N.has(e) || e.removeAttribute(r), N.delete(e)),
            i || e.removeAttribute(n));
        }),
          F--,
          F ||
            ((M = new WeakMap()),
            (M = new WeakMap()),
            (N = new WeakMap()),
            (P = {})));
      }
    );
  },
  se = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || re(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        oe(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  I = `right-scroll-bar-position`,
  L = `width-before-scroll-bar`,
  ce = `with-scroll-bars-hidden`,
  le = `--removed-body-scroll-bar-size`;
function R(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
