import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { a as i, i as a, n as o, r as s, t as c } from "./dist-CA4uZW3H.js";
import { f as l, l as u, m as d } from "./AuthService-C8NFtVWb.js";
import { t as f } from "./dist-C95o2tHc.js";
import { t as p } from "./dist-ByN-1XKv.js";
import {
  a as m,
  i as h,
  n as g,
  o as _,
  r as v,
  t as y,
} from "./dist-BfZydly7.js";
import { t as b } from "./dist-SzuULMPt.js";
import { n as x, t as S } from "./dist-ChIM81kv.js";
import { t as C } from "./dist-B8ylHDUS.js";
import { r as w } from "./button-gyaE5cND.js";
import { t as T } from "./check-8B-bFngd.js";
import { t as E } from "./dist-C7e-qgX5.js";
import { i as ee, n as D, r as te, t as O } from "./Combination-DxBwDv-s.js";
import { t as k } from "./dist-D8Wfxh48.js";
import { dt as A } from "./index-CBcimEr9.js";
var j = w(`ChevronUp`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  M = e(r(), 1),
  N = e(t(), 1),
  P = Object.defineProperty,
  F = (e, t) => P(e, `name`, { value: t, configurable: !0 });
function I(e) {
  let t = N.useRef({ value: e, previous: e });
  return N.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
F(I, `usePrevious`);
var L = n(),
  R = Object.defineProperty,
  z = (e, t) => R(e, `name`, { value: t, configurable: !0 }),
  B = [` `, `Enter`, `ArrowUp`, `ArrowDown`],
  V = [` `, `Enter`],
  H = `Select`,
  [U, W, ne] = f(H),
  [G, re] = a(H, [ne, h]),
  K = h(),
  [ie, q] = G(H),
  [ae, oe] = G(H);
function se(e) {
  let {
      __scopeSelect: t,
      children: n,
      open: r,
      defaultOpen: i,
      onOpenChange: a,
      value: o,
      defaultValue: s,
      onValueChange: c,
      dir: l,
      name: u,
      autoComplete: d,
      disabled: f,
      required: p,
      form: m,
      internal_do_not_use_render: h,
    } = e,
    g = K(t),
    [_, v] = N.useState(null),
    [b, C] = N.useState(null),
    [w, T] = N.useState(!1),
    ee = E(l),
    [D, te] = x({ prop: r, defaultProp: i ?? !1, onChange: a, caller: H }),
    [O, k] = x({ prop: o, defaultProp: s, onChange: c, caller: H }),
    A = N.useRef(null),
    j = N.useRef(O);
  N.useEffect(() => {
    let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
    if (e instanceof HTMLFormElement) {
      let t = z(() => k(j.current), `reset`);
      return (
        e.addEventListener(`reset`, t),
        () => e.removeEventListener(`reset`, t)
      );
    }
  }, [m, _, k]);
  let M = !_ || !!m || !!_.closest(`form`),
    [P, F] = N.useState(new Set()),
    I = S(),
    R = Array.from(P)
      .map((e) => e.props.value)
      .join(`;`),
    B = N.useCallback((e) => {
      F((t) => new Set(t).add(e));
    }, []),
    V = N.useCallback((e) => {
      F((t) => {
        let n = new Set(t);
        return (n.delete(e), n);
      });
    }, []),
    W = {
      required: p,
      trigger: _,
      onTriggerChange: v,
      valueNode: b,
      onValueNodeChange: C,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: T,
      contentId: I,
      value: O,
      onValueChange: k,
      open: D,
      onOpenChange: te,
      dir: ee,
      triggerPointerDownPosRef: A,
      disabled: f,
      name: u,
      autoComplete: d,
      form: m,
      nativeOptions: P,
      nativeSelectKey: R,
      isFormControl: M,
    };
  return (0, L.jsx)(y, {
    ...g,
    children: (0, L.jsx)(ie, {
      scope: t,
      ...W,
      children: (0, L.jsx)(U.Provider, {
        scope: t,
        children: (0, L.jsx)(ae, {
          scope: t,
          onNativeOptionAdd: B,
          onNativeOptionRemove: V,
          children: Je(h) ? h(W) : n,
        }),
      }),
    }),
  });
}
z(se, `SelectProvider`);
var ce = z((e) => {
    let { __scopeSelect: t, children: n, ...r } = e;
    return (0, L.jsx)(se, {
      __scopeSelect: t,
      ...r,
      internal_do_not_use_render: ({ isFormControl: e }) =>
        (0, L.jsxs)(L.Fragment, {
          children: [n, e ? (0, L.jsx)(qe, { __scopeSelect: t }) : null],
        }),
    });
  }, `Select`),
  le = `SelectTrigger`,
  ue = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, disabled: r = !1, ...a } = e,
        o = K(n),
        s = q(le, n),
        c = s.disabled || r,
        l = d(t, s.onTriggerChange),
        u = W(n),
        f = N.useRef(`touch`),
        [m, h, _] = Ye((e) => {
          let t = u().filter((e) => !e.disabled),
            n = Xe(
              t,
              e,
              t.find((e) => e.value === s.value),
            );
          n !== void 0 && s.onValueChange(n.value);
        }),
        v = z((e) => {
          (c || (s.onOpenChange(!0), _()),
            e &&
              (s.triggerPointerDownPosRef.current = {
                x: Math.round(e.pageX),
                y: Math.round(e.pageY),
              }));
        }, `handleOpen`);
      return (0, L.jsx)(g, {
        asChild: !0,
        ...o,
        children: (0, L.jsx)(p.button, {
          type: `button`,
          role: `combobox`,
          "aria-controls": s.open ? s.contentId : void 0,
          "aria-expanded": s.open,
          "aria-required": s.required,
          "aria-autocomplete": `none`,
          dir: s.dir,
          "data-state": s.open ? `open` : `closed`,
          disabled: c,
          "data-disabled": c ? `` : void 0,
          "data-placeholder": Q(s.value) ? `` : void 0,
          ...a,
          ref: l,
          onClick: i(a.onClick, (e) => {
            (e.currentTarget.focus(), f.current !== `mouse` && v(e));
          }),
          onPointerDown: i(a.onPointerDown, (e) => {
            f.current = e.pointerType;
            let t = e.target;
            (t.hasPointerCapture(e.pointerId) &&
              t.releasePointerCapture(e.pointerId),
              e.button === 0 &&
                e.ctrlKey === !1 &&
                e.pointerType === `mouse` &&
                (v(e), e.preventDefault()));
          }),
          onKeyDown: i(a.onKeyDown, (e) => {
            let t = m.current !== ``;
            (!(e.ctrlKey || e.altKey || e.metaKey) &&
              e.key.length === 1 &&
              h(e.key),
              !(t && e.key === ` `) &&
                B.includes(e.key) &&
                (v(), e.preventDefault()));
          }),
        }),
      });
    }, `SelectTrigger`),
  ),
  de = `SelectValue`,
  fe = N.forwardRef(
    z(function (e, t) {
      let {
          __scopeSelect: n,
          className: r,
          style: i,
          children: a,
          placeholder: s = ``,
          ...c
        } = e,
        l = q(de, n),
        { onValueNodeHasChildrenChange: u } = l,
        f = a !== void 0,
        m = d(t, l.onValueNodeChange);
      o(() => {
        u(f);
      }, [u, f]);
      let h = Q(l.value);
      return (0, L.jsx)(p.span, {
        ...c,
        asChild: !h && c.asChild,
        ref: m,
        style: { pointerEvents: `none` },
        children: (0, L.jsx)(
          N.Fragment,
          { children: h ? s : a },
          h ? `placeholder` : `value`,
        ),
      });
    }, `SelectValue`),
  ),
  pe = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, children: r, ...i } = e;
      return (0, L.jsx)(p.span, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        children: r || `▼`,
      });
    }, `SelectIcon`),
  ),
  [me, he] = G(`SelectPortal`, { forceMount: void 0 }),
  ge = z((e) => {
    let { __scopeSelect: t, forceMount: n, ...r } = e;
    return (0, L.jsx)(me, {
      scope: e.__scopeSelect,
      forceMount: n,
      children: (0, L.jsx)(b, { asChild: !0, ...r }),
    });
  }, `SelectPortal`),
  J = `SelectContent`,
  _e = N.forwardRef(
    z(function (e, t) {
      let n = he(J, e.__scopeSelect),
        { forceMount: r = n.forceMount, ...i } = e,
        a = q(J, e.__scopeSelect),
        [s, l] = N.useState();
      return (
        o(() => {
          l(new DocumentFragment());
        }, []),
        (0, L.jsx)(c, {
          present: r || a.open,
          children: ({ present: e }) =>
            e
              ? (0, L.jsx)(xe, { ...i, ref: t })
              : (0, L.jsx)(ve, { ...i, fragment: s }),
        })
      );
    }, `SelectContent`),
  ),
  ve = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, children: r, fragment: i } = e;
      return i
        ? M.createPortal(
            (0, L.jsx)(ye, {
              scope: n,
              children: (0, L.jsx)(U.Slot, {
                scope: n,
                children: (0, L.jsx)(`div`, { ref: t, children: r }),
              }),
            }),
            i,
          )
        : null;
    }, `SelectContentFragment`),
  ),
  Y = 10,
  [ye, X] = G(J),
  be = l(`SelectContent.RemoveScroll`),
  xe = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n } = e,
        {
          position: r = `item-aligned`,
          onCloseAutoFocus: a,
          onEscapeKeyDown: o,
          onPointerDownOutside: s,
          side: c,
          sideOffset: l,
          align: u,
          alignOffset: f,
          arrowPadding: p,
          collisionBoundary: m,
          collisionPadding: h,
          sticky: g,
          hideWhenDetached: v,
          avoidCollisions: y,
          ...b
        } = e,
        x = q(J, n),
        [S, C] = N.useState(null),
        [w, T] = N.useState(null),
        E = d(t, C),
        [k, A] = N.useState(null),
        [j, M] = N.useState(null),
        P = W(n),
        [F, I] = N.useState(!1),
        R = N.useRef(!1);
      (N.useEffect(() => {
        if (S) return D(S);
      }, [S]),
        ee());
      let B = N.useCallback(
          (e) => {
            let [t, ...n] = P().map((e) => e.ref.current),
              [r] = n.slice(-1),
              i = document.activeElement;
            for (let n of e)
              if (
                n === i ||
                (n?.scrollIntoView({ block: `nearest` }),
                n === t && w && (w.scrollTop = 0),
                n === r && w && (w.scrollTop = w.scrollHeight),
                n?.focus(),
                document.activeElement !== i)
              )
                return;
          },
          [P, w],
        ),
        V = N.useCallback(() => B([k, S]), [B, k, S]);
      N.useEffect(() => {
        F && V();
      }, [F, V]);
      let { onOpenChange: H, triggerPointerDownPosRef: U } = x;
      (N.useEffect(() => {
        if (S) {
          let e = { x: 0, y: 0 },
            t = z((t) => {
              e = {
                x: Math.abs(Math.round(t.pageX) - (U.current?.x ?? 0)),
                y: Math.abs(Math.round(t.pageY) - (U.current?.y ?? 0)),
              };
            }, `handlePointerMove`),
            n = z((n) => {
              (e.x <= 10 && e.y <= 10
                ? n.preventDefault()
                : n.composedPath().includes(S) || H(!1),
                document.removeEventListener(`pointermove`, t),
                (U.current = null));
            }, `handlePointerUp`);
          return (
            U.current !== null &&
              (document.addEventListener(`pointermove`, t),
              document.addEventListener(`pointerup`, n, {
                capture: !0,
                once: !0,
              })),
            () => {
              (document.removeEventListener(`pointermove`, t),
                document.removeEventListener(`pointerup`, n, { capture: !0 }));
            }
          );
        }
      }, [S, H, U]),
        N.useEffect(() => {
          let e = z(() => H(!1), `close`);
          return (
            window.addEventListener(`blur`, e),
            window.addEventListener(`resize`, e),
            () => {
              (window.removeEventListener(`blur`, e),
                window.removeEventListener(`resize`, e));
            }
          );
        }, [H]));
      let [ne, G] = Ye((e) => {
          let t = P().filter((e) => !e.disabled),
            n = Xe(
              t,
              e,
              t.find((e) => e.ref.current === document.activeElement),
            );
          n && setTimeout(() => n.ref.current?.focus());
        }),
        re = N.useCallback(
          (e, t, n) => {
            let r = !R.current && !n;
            ((x.value !== void 0 && x.value === t) || r) &&
              (A(e), r && (R.current = !0));
          },
          [x.value],
        ),
        K = N.useCallback(() => S?.focus(), [S]),
        ie = N.useCallback(
          (e, t, n) => {
            let r = !R.current && !n;
            ((x.value !== void 0 && x.value === t) || r) && M(e);
          },
          [x.value],
        ),
        ae = r === `popper` ? Ce : Se,
        oe =
          ae === Ce
            ? {
                side: c,
                sideOffset: l,
                align: u,
                alignOffset: f,
                arrowPadding: p,
                collisionBoundary: m,
                collisionPadding: h,
                sticky: g,
                hideWhenDetached: v,
                avoidCollisions: y,
              }
            : {};
      return (0, L.jsx)(ye, {
        scope: n,
        content: S,
        viewport: w,
        onViewportChange: T,
        itemRefCallback: re,
        selectedItem: k,
        onItemLeave: K,
        itemTextRefCallback: ie,
        focusSelectedItem: V,
        selectedItemText: j,
        position: r,
        isPositioned: F,
        searchRef: ne,
        children: (0, L.jsx)(O, {
          as: be,
          allowPinchZoom: !0,
          children: (0, L.jsx)(te, {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (e) => {
              e.preventDefault();
            },
            onUnmountAutoFocus: i(a, (e) => {
              (x.trigger?.focus({ preventScroll: !0 }), e.preventDefault());
            }),
            children: (0, L.jsx)(_, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: o,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: () => x.onOpenChange(!1),
              children: (0, L.jsx)(ae, {
                role: `listbox`,
                id: x.contentId,
                "data-state": x.open ? `open` : `closed`,
                dir: x.dir,
                onContextMenu: (e) => e.preventDefault(),
                ...b,
                ...oe,
                onPlaced: () => I(!0),
                ref: E,
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  outline: `none`,
                  ...b.style,
                },
                onKeyDown: i(b.onKeyDown, (e) => {
                  let t = e.ctrlKey || e.altKey || e.metaKey;
                  if (
                    (e.key === `Tab` && e.preventDefault(),
                    !t && e.key.length === 1 && G(e.key),
                    [`ArrowUp`, `ArrowDown`, `Home`, `End`].includes(e.key))
                  ) {
                    let t = P()
                      .filter((e) => !e.disabled)
                      .map((e) => e.ref.current);
                    if (
                      ([`ArrowUp`, `End`].includes(e.key) &&
                        (t = t.slice().reverse()),
                      [`ArrowUp`, `ArrowDown`].includes(e.key))
                    ) {
                      let n = e.target,
                        r = t.indexOf(n);
                      t = t.slice(r + 1);
                    }
                    (setTimeout(() => B(t)), e.preventDefault());
                  }
                }),
              }),
            }),
          }),
        }),
      });
    }, `SelectContentImpl`),
  ),
  Se = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, onPlaced: r, ...i } = e,
        a = q(J, n),
        s = X(J, n),
        [c, l] = N.useState(null),
        [u, f] = N.useState(null),
        m = d(t, f),
        h = W(n),
        g = N.useRef(!1),
        _ = N.useRef(!0),
        {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: x,
        } = s,
        S = N.useCallback(() => {
          if (a.trigger && a.valueNode && c && u && v && y && b) {
            let e = a.trigger.getBoundingClientRect(),
              t = u.getBoundingClientRect(),
              n = a.valueNode.getBoundingClientRect(),
              i = b.getBoundingClientRect();
            if (a.dir !== `rtl`) {
              let r = i.left - t.left,
                a = n.left - r,
                o = e.left - a,
                s = e.width + o,
                l = Math.max(s, t.width),
                u = window.innerWidth - Y,
                d = k(a, [Y, Math.max(Y, u - l)]);
              ((c.style.minWidth = s + `px`), (c.style.left = d + `px`));
            } else {
              let r = t.right - i.right,
                a = window.innerWidth - n.right - r,
                o = window.innerWidth - e.right - a,
                s = e.width + o,
                l = Math.max(s, t.width),
                u = window.innerWidth - Y,
                d = k(a, [Y, Math.max(Y, u - l)]);
              ((c.style.minWidth = s + `px`), (c.style.right = d + `px`));
            }
            let o = h(),
              s = window.innerHeight - Y * 2,
              l = v.scrollHeight,
              d = window.getComputedStyle(u),
              f = parseInt(d.borderTopWidth, 10),
              p = parseInt(d.paddingTop, 10),
              m = parseInt(d.borderBottomWidth, 10),
              _ = parseInt(d.paddingBottom, 10),
              x = f + p + l + _ + m,
              S = Math.min(y.offsetHeight * 5, x),
              C = window.getComputedStyle(v),
              w = parseInt(C.paddingTop, 10),
              T = parseInt(C.paddingBottom, 10),
              E = e.top + e.height / 2 - Y,
              ee = s - E,
              D = y.offsetHeight / 2,
              te = y.offsetTop + D,
              O = f + p + te,
              A = x - O;
            if (O <= E) {
              let e = o.length > 0 && y === o[o.length - 1].ref.current;
              c.style.bottom = `0px`;
              let t = u.clientHeight - v.offsetTop - v.offsetHeight,
                n = O + Math.max(ee, D + (e ? T : 0) + t + m);
              c.style.height = n + `px`;
            } else {
              let e = o.length > 0 && y === o[0].ref.current;
              c.style.top = `0px`;
              let t = Math.max(E, f + v.offsetTop + (e ? w : 0) + D) + A;
              ((c.style.height = t + `px`),
                (v.scrollTop = O - E + v.offsetTop));
            }
            ((c.style.margin = `${Y}px 0`),
              (c.style.minHeight = S + `px`),
              (c.style.maxHeight = s + `px`),
              r?.(),
              requestAnimationFrame(() => (g.current = !0)));
          }
        }, [h, a.trigger, a.valueNode, c, u, v, y, b, a.dir, r]);
      o(() => S(), [S]);
      let [C, w] = N.useState();
      return (
        o(() => {
          u && w(window.getComputedStyle(u).zIndex);
        }, [u]),
        (0, L.jsx)(we, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: N.useCallback(
            (e) => {
              e && _.current === !0 && (S(), x?.(), (_.current = !1));
            },
            [S, x],
          ),
          children: (0, L.jsx)(`div`, {
            ref: l,
            style: {
              display: `flex`,
              flexDirection: `column`,
              position: `fixed`,
              zIndex: C,
            },
            children: (0, L.jsx)(p.div, {
              ...i,
              ref: m,
              style: { boxSizing: `border-box`, maxHeight: `100%`, ...i.style },
            }),
          }),
        })
      );
    }, `SelectItemAlignedPosition`),
  ),
  Ce = N.forwardRef(
    z(function (e, t) {
      let {
          __scopeSelect: n,
          align: r = `start`,
          collisionPadding: i = Y,
          ...a
        } = e,
        o = K(n);
      return (0, L.jsx)(v, {
        ...o,
        ...a,
        ref: t,
        align: r,
        collisionPadding: i,
        style: {
          boxSizing: `border-box`,
          ...a.style,
          "--radix-select-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-select-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-select-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-select-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-select-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `SelectPopperPosition`),
  ),
  [we, Te] = G(J, {}),
  Ee = `SelectViewport`,
  De = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, nonce: r, ...a } = e,
        o = X(Ee, n),
        s = Te(Ee, n),
        c = d(t, o.onViewportChange),
        l = N.useRef(0);
      return (0, L.jsxs)(L.Fragment, {
        children: [
          (0, L.jsx)(`style`, {
            dangerouslySetInnerHTML: {
              __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`,
            },
            nonce: r,
          }),
          (0, L.jsx)(U.Slot, {
            scope: n,
            children: (0, L.jsx)(p.div, {
              "data-radix-select-viewport": ``,
              role: `presentation`,
              ...a,
              ref: c,
              style: {
                position: `relative`,
                flex: 1,
                overflow: `hidden auto`,
                ...a.style,
              },
              onScroll: i(a.onScroll, (e) => {
                let t = e.currentTarget,
                  { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
                if (r?.current && n) {
                  let e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    let r = window.innerHeight - Y * 2,
                      i = parseFloat(n.style.minHeight),
                      a = parseFloat(n.style.height),
                      o = Math.max(i, a);
                    if (o < r) {
                      let i = o + e,
                        a = Math.min(r, i),
                        s = i - a;
                      ((n.style.height = a + `px`),
                        n.style.bottom === `0px` &&
                          ((t.scrollTop = s > 0 ? s : 0),
                          (n.style.justifyContent = `flex-end`)));
                    }
                  }
                }
                l.current = t.scrollTop;
              }),
            }),
          }),
        ],
      });
    }, `SelectViewport`),
  ),
  [Oe, ke] = G(`SelectGroup`),
  Ae = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, ...r } = e,
        i = S();
      return (0, L.jsx)(Oe, {
        scope: n,
        id: i,
        children: (0, L.jsx)(p.div, {
          role: `group`,
          "aria-labelledby": i,
          ...r,
          ref: t,
        }),
      });
    }, `SelectGroup`),
  ),
  je = `SelectLabel`,
  Me = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, ...r } = e,
        i = ke(je, n);
      return (0, L.jsx)(p.div, { id: i.id, ...r, ref: t });
    }, `SelectLabel`),
  ),
  Ne = `SelectItem`,
  [Pe, Fe] = G(Ne),
  Ie = N.forwardRef(
    z(function (e, t) {
      let {
          __scopeSelect: n,
          value: r,
          disabled: a = !1,
          textValue: o,
          ...c
        } = e,
        l = q(Ne, n),
        u = X(Ne, n),
        f = l.value === r,
        [m, h] = N.useState(o ?? ``),
        [g, _] = N.useState(!1),
        v = d(
          t,
          s((e) => u.itemRefCallback?.(e, r, a)),
        ),
        y = S(),
        b = N.useRef(`touch`),
        x = z(() => {
          a || (l.onValueChange(r), l.onOpenChange(!1));
        }, `handleSelect`);
      return (0, L.jsx)(Pe, {
        scope: n,
        value: r,
        disabled: a,
        textId: y,
        isSelected: f,
        onItemTextChange: N.useCallback((e) => {
          h((t) => t || (e?.textContent ?? ``).trim());
        }, []),
        children: (0, L.jsx)(U.ItemSlot, {
          scope: n,
          value: r,
          disabled: a,
          textValue: m,
          children: (0, L.jsx)(p.div, {
            role: `option`,
            "aria-labelledby": y,
            "data-highlighted": g ? `` : void 0,
            "aria-selected": f && g,
            "data-state": f ? `checked` : `unchecked`,
            "aria-disabled": a || void 0,
            "data-disabled": a ? `` : void 0,
            tabIndex: a ? void 0 : -1,
            ...c,
            ref: v,
            onFocus: i(c.onFocus, () => _(!0)),
            onBlur: i(c.onBlur, () => _(!1)),
            onClick: i(c.onClick, () => {
              b.current !== `mouse` && x();
            }),
            onPointerUp: i(c.onPointerUp, () => {
              b.current === `mouse` && x();
            }),
            onPointerDown: i(c.onPointerDown, (e) => {
              b.current = e.pointerType;
            }),
            onPointerMove: i(c.onPointerMove, (e) => {
              ((b.current = e.pointerType),
                a
                  ? u.onItemLeave?.()
                  : b.current === `mouse` &&
                    e.currentTarget.focus({ preventScroll: !0 }));
            }),
            onPointerLeave: i(c.onPointerLeave, (e) => {
              e.currentTarget === document.activeElement && u.onItemLeave?.();
            }),
            onKeyDown: i(c.onKeyDown, (e) => {
              a ||
                e.target !== e.currentTarget ||
                (u.searchRef?.current !== `` && e.key === ` `) ||
                (V.includes(e.key) && x(), e.key === ` ` && e.preventDefault());
            }),
          }),
        }),
      });
    }, `SelectItem`),
  ),
  Z = `SelectItemText`,
  Le = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, className: r, style: i, ...a } = e,
        c = q(Z, n),
        l = X(Z, n),
        u = Fe(Z, n),
        f = oe(Z, n),
        [m, h] = N.useState(null),
        g = s((e) => l.itemTextRefCallback?.(e, u.value, u.disabled)),
        _ = d(t, h, u.onItemTextChange, g),
        v = m?.textContent,
        y = N.useMemo(
          () =>
            (0, L.jsx)(
              `option`,
              { value: u.value, disabled: u.disabled, children: v },
              u.value,
            ),
          [u.disabled, u.value, v],
        ),
        { onNativeOptionAdd: b, onNativeOptionRemove: x } = f;
      return (
        o(() => (b(y), () => x(y)), [b, x, y]),
        (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsx)(p.span, { id: u.textId, ...a, ref: _ }),
            u.isSelected &&
            c.valueNode &&
            !c.valueNodeHasChildren &&
            !Q(c.value)
              ? M.createPortal(a.children, c.valueNode)
              : null,
          ],
        })
      );
    }, `SelectItemText`),
  ),
  Re = `SelectItemIndicator`,
  ze = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, ...r } = e;
      return Fe(Re, n).isSelected
        ? (0, L.jsx)(p.span, { "aria-hidden": !0, ...r, ref: t })
        : null;
    }, `SelectItemIndicator`),
  ),
  Be = `SelectScrollUpButton`,
  Ve = N.forwardRef(
    z(function (e, t) {
      let n = X(Be, e.__scopeSelect),
        r = Te(Be, e.__scopeSelect),
        [i, a] = N.useState(!1),
        s = d(t, r.onScrollButtonChange);
      return (
        o(() => {
          if (n.viewport && n.isPositioned) {
            let e = function () {
              let e = t.scrollTop > 0;
              a(e);
            };
            z(e, `handleScroll`);
            let t = n.viewport;
            return (
              e(),
              t.addEventListener(`scroll`, e),
              () => t.removeEventListener(`scroll`, e)
            );
          }
        }, [n.viewport, n.isPositioned]),
        i
          ? (0, L.jsx)(We, {
              ...e,
              ref: s,
              onAutoScroll: () => {
                let { viewport: e, selectedItem: t } = n;
                e && t && (e.scrollTop -= t.offsetHeight);
              },
            })
          : null
      );
    }, `SelectScrollUpButton`),
  ),
  He = `SelectScrollDownButton`,
  Ue = N.forwardRef(
    z(function (e, t) {
      let n = X(He, e.__scopeSelect),
        r = Te(He, e.__scopeSelect),
        [i, a] = N.useState(!1),
        s = d(t, r.onScrollButtonChange);
      return (
        o(() => {
          if (n.viewport && n.isPositioned) {
            let e = function () {
              let e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n);
            };
            z(e, `handleScroll`);
            let t = n.viewport;
            return (
              e(),
              t.addEventListener(`scroll`, e),
              () => t.removeEventListener(`scroll`, e)
            );
          }
        }, [n.viewport, n.isPositioned]),
        i
          ? (0, L.jsx)(We, {
              ...e,
              ref: s,
              onAutoScroll: () => {
                let { viewport: e, selectedItem: t } = n;
                e && t && (e.scrollTop += t.offsetHeight);
              },
            })
          : null
      );
    }, `SelectScrollDownButton`),
  ),
  We = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, onAutoScroll: r, ...a } = e,
        s = X(`SelectScrollButton`, n),
        c = N.useRef(null),
        l = W(n),
        u = N.useCallback(() => {
          c.current !== null &&
            (window.clearInterval(c.current), (c.current = null));
        }, []);
      return (
        N.useEffect(() => () => u(), [u]),
        o(() => {
          l()
            .find((e) => e.ref.current === document.activeElement)
            ?.ref.current?.scrollIntoView({ block: `nearest` });
        }, [l]),
        (0, L.jsx)(p.div, {
          "aria-hidden": !0,
          ...a,
          ref: t,
          style: { flexShrink: 0, ...a.style },
          onPointerDown: i(a.onPointerDown, () => {
            c.current === null && (c.current = window.setInterval(r, 50));
          }),
          onPointerMove: i(a.onPointerMove, () => {
            (s.onItemLeave?.(),
              c.current === null && (c.current = window.setInterval(r, 50)));
          }),
          onPointerLeave: i(a.onPointerLeave, () => {
            u();
          }),
        })
      );
    }, `SelectScrollButtonImpl`),
  ),
  Ge = N.forwardRef(
    z(function (e, t) {
      let { __scopeSelect: n, ...r } = e;
      return (0, L.jsx)(p.div, { "aria-hidden": !0, ...r, ref: t });
    }, `SelectSeparator`),
  ),
  Ke = `SelectBubbleInput`,
  qe = N.forwardRef(
    z(function ({ __scopeSelect: e, ...t }, n) {
      let r = q(Ke, e),
        {
          value: i,
          onValueChange: a,
          required: o,
          disabled: s,
          name: c,
          autoComplete: l,
          form: u,
        } = r,
        { nativeOptions: f, nativeSelectKey: m } = r,
        h = N.useRef(null),
        g = d(n, h),
        _ = i ?? ``,
        v = I(_),
        y = Array.from(f).some((e) => (e.props.value ?? ``) === ``);
      return (
        N.useEffect(() => {
          let e = h.current;
          if (!e) return;
          let t = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, `value`).set;
          if (v !== _ && n) {
            let t = new Event(`change`, { bubbles: !0 });
            (n.call(e, _), e.dispatchEvent(t));
          }
        }, [v, _]),
        (0, L.jsxs)(
          p.select,
          {
            "aria-hidden": !0,
            required: o,
            tabIndex: -1,
            name: c,
            autoComplete: l,
            disabled: s,
            form: u,
            onChange: (e) => a(e.target.value),
            ...t,
            style: { ...C, ...t.style },
            ref: g,
            defaultValue: _,
            children: [
              Q(i) && !y ? (0, L.jsx)(`option`, { value: `` }) : null,
              Array.from(f),
            ],
          },
          m,
        )
      );
    }, `SelectBubbleInput`),
  );
function Je(e) {
  return typeof e == `function`;
}
z(Je, `isFunction`);
function Q(e) {
  return e === `` || e === void 0;
}
z(Q, `shouldShowPlaceholder`);
function Ye(e) {
  let t = s(e),
    n = N.useRef(``),
    r = N.useRef(0),
    i = N.useCallback(
      (e) => {
        let i = n.current + e;
        (t(i),
          z(function e(t) {
            ((n.current = t),
              window.clearTimeout(r.current),
              t !== `` && (r.current = window.setTimeout(() => e(``), 1e3)));
          }, `updateSearch`)(i));
      },
      [t],
    ),
    a = N.useCallback(() => {
      ((n.current = ``), window.clearTimeout(r.current));
    }, []);
  return (
    N.useEffect(() => () => window.clearTimeout(r.current), []),
    [n, i, a]
  );
}
z(Ye, `useTypeaheadSearch`);
function Xe(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = Ze(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
z(Xe, `findNextItem`);
function Ze(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
z(Ze, `wrapArray`);
var Qe = ce,
  $e = Ae,
  et = fe,
  tt = N.forwardRef(({ className: e, children: t, ...n }, r) =>
    (0, L.jsxs)(ue, {
      ref: r,
      className: u(
        `flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
        e,
      ),
      ...n,
      children: [
        t,
        (0, L.jsx)(pe, {
          asChild: !0,
          children: (0, L.jsx)(A, { className: `h-4 w-4 opacity-50` }),
        }),
      ],
    }),
  );
tt.displayName = ue.displayName;
var nt = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Ve, {
    ref: n,
    className: u(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, L.jsx)(j, { className: `h-4 w-4` }),
  }),
);
nt.displayName = Ve.displayName;
var rt = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Ue, {
    ref: n,
    className: u(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, L.jsx)(A, { className: `h-4 w-4` }),
  }),
);
rt.displayName = Ue.displayName;
var it = N.forwardRef(
  ({ className: e, children: t, position: n = `popper`, ...r }, i) =>
    (0, L.jsx)(ge, {
      children: (0, L.jsxs)(_e, {
        ref: i,
        className: u(
          `relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
          n === `popper` &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
          e,
        ),
        position: n,
        ...r,
        children: [
          (0, L.jsx)(nt, {}),
          (0, L.jsx)(De, {
            className: u(
              `p-1`,
              n === `popper` &&
                `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`,
            ),
            children: t,
          }),
          (0, L.jsx)(rt, {}),
        ],
      }),
    }),
);
it.displayName = _e.displayName;
var at = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Me, {
    ref: n,
    className: u(`py-1.5 pl-8 pr-2 text-sm font-semibold`, e),
    ...t,
  }),
);
at.displayName = Me.displayName;
var ot = N.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, L.jsxs)(Ie, {
    ref: r,
    className: u(
      `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, L.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, L.jsx)(ze, {
          children: (0, L.jsx)(T, { className: `h-4 w-4` }),
        }),
      }),
      (0, L.jsx)(Le, { children: t }),
    ],
  }),
);
ot.displayName = Ie.displayName;
var st = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Ge, { ref: n, className: u(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
st.displayName = Ge.displayName;
var ct = Object.defineProperty,
  $ = (e, t) => ct(e, `name`, { value: t, configurable: !0 }),
  lt = `Switch`,
  [ut, dt] = a(lt),
  [ft, pt] = ut(lt);
function mt(e) {
  let {
      __scopeSwitch: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [f, p] = x({ prop: n, defaultProp: i ?? !1, onChange: c, caller: lt }),
    [m, h] = N.useState(null),
    [g, _] = N.useState(null),
    v = N.useRef(!1),
    [y, b] = N.useReducer((e) => e + 1, 0),
    S = {
      checked: f,
      setChecked: p,
      disabled: a,
      control: m,
      setControl: h,
      name: s,
      form: o,
      value: u,
      hasConsumerStoppedPropagationRef: v,
      userInteractionCount: y,
      onUserInteraction: b,
      required: l,
      defaultChecked: i,
      isFormControl: !m || !!o || !!m.closest(`form`),
      bubbleInput: g,
      setBubbleInput: _,
    };
  return (0, L.jsx)(ft, { scope: t, ...S, children: St(d) ? d(S) : r });
}
$(mt, `SwitchProvider`);
var ht = `SwitchTrigger`,
  gt = N.forwardRef(
    $(function ({ __scopeSwitch: e, onClick: t, ...n }, r) {
      let {
          control: a,
          form: o,
          value: s,
          disabled: c,
          checked: l,
          required: u,
          setControl: f,
          setChecked: m,
          hasConsumerStoppedPropagationRef: h,
          onUserInteraction: g,
          isFormControl: _,
          bubbleInput: v,
        } = pt(ht, e),
        y = d(r, f),
        b = N.useRef(l);
      return (
        N.useEffect(() => {
          let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
          if (e instanceof HTMLFormElement) {
            let t = $(() => m(b.current), `reset`);
            return (
              e.addEventListener(`reset`, t),
              () => e.removeEventListener(`reset`, t)
            );
          }
        }, [a, o, m]),
        (0, L.jsx)(p.button, {
          type: `button`,
          role: `switch`,
          "aria-checked": l,
          "aria-required": u,
          "data-state": Ct(l),
          "data-disabled": c ? `` : void 0,
          disabled: c,
          value: s,
          ...n,
          ref: y,
          onClick: i(t, (e) => {
            (g(),
              m((e) => !e),
              v &&
                _ &&
                ((h.current = e.isPropagationStopped()),
                h.current || e.stopPropagation()));
          }),
        })
      );
    }, `SwitchTrigger`),
  ),
  _t = N.forwardRef(
    $(function (e, t) {
      let {
        __scopeSwitch: n,
        name: r,
        checked: i,
        defaultChecked: a,
        required: o,
        disabled: s,
        value: c,
        onCheckedChange: l,
        form: u,
        ...d
      } = e;
      return (0, L.jsx)(mt, {
        __scopeSwitch: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: e }) =>
          (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(gt, { ...d, ref: t, __scopeSwitch: n }),
              e && (0, L.jsx)(xt, { __scopeSwitch: n }),
            ],
          }),
      });
    }, `Switch`),
  ),
  vt = `SwitchThumb`,
  yt = N.forwardRef(
    $(function (e, t) {
      let { __scopeSwitch: n, ...r } = e,
        i = pt(vt, n);
      return (0, L.jsx)(p.span, {
        "data-state": Ct(i.checked),
        "data-disabled": i.disabled ? `` : void 0,
        ...r,
        ref: t,
      });
    }, `SwitchThumb`),
  ),
  bt = `SwitchBubbleInput`,
  xt = N.forwardRef(
    $(function ({ __scopeSwitch: e, onClick: t, ...n }, r) {
      let {
          control: a,
          hasConsumerStoppedPropagationRef: o,
          userInteractionCount: s,
          checked: c,
          defaultChecked: l,
          required: u,
          disabled: f,
          name: h,
          value: g,
          form: _,
          bubbleInput: v,
          setBubbleInput: y,
        } = pt(bt, e),
        b = d(r, y),
        x = m(a),
        S = N.useRef(!1),
        C = N.useRef(c),
        w = N.useRef(s);
      N.useEffect(() => {
        let e = v;
        if (!e) return;
        let t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `checked`).set,
          r = s !== w.current;
        w.current = s;
        let i = C.current !== c;
        C.current = c;
        let a = !(r && o.current);
        if (i && n) {
          S.current = !r;
          let t = new Event(`click`, { bubbles: a });
          (n.call(e, c), e.dispatchEvent(t), (S.current = !1));
        }
      }, [v, c, o, s]);
      let T = N.useRef(c);
      return (0, L.jsx)(p.input, {
        type: `checkbox`,
        "aria-hidden": !0,
        defaultChecked: l ?? T.current,
        required: u,
        disabled: f,
        name: h,
        value: g,
        form: _,
        ...n,
        tabIndex: -1,
        ref: b,
        onClick: i(t, (e) => {
          S.current && e.stopPropagation();
        }),
        style: {
          ...n.style,
          ...x,
          position: `absolute`,
          pointerEvents: `none`,
          opacity: 0,
          margin: 0,
          transform: `translateX(-100%)`,
        },
      });
    }, `SwitchBubbleInput`),
  );
function St(e) {
  return typeof e == `function`;
}
$(St, `isFunction`);
function Ct(e) {
  return e ? `checked` : `unchecked`;
}
$(Ct, `getState`);
var wt = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(_t, {
    className: u(
      `peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      e,
    ),
    ...t,
    ref: n,
    children: (0, L.jsx)(yt, {
      className: u(
        `pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`,
      ),
    }),
  }),
);
wt.displayName = _t.displayName;
export {
  ot as a,
  et as c,
  $e as i,
  I as l,
  Qe as n,
  at as o,
  it as r,
  tt as s,
  wt as t,
  j as u,
};
