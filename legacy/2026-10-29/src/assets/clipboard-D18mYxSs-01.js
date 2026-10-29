// clipboard-D18mYxSs 01 — jsx
// Lines 1-301 of readable/assets/clipboard-D18mYxSs.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { a as r, i, t as a } from "./dist-CA4uZW3H.js";
import { f as o, l as s, m as c } from "./AuthService-CQeU_0bQ.js";
import { t as l } from "./dist-p2cW4AiE.js";
import { a as u, i as d, n as f, r as p, t as m } from "./dist-BWh9CVbU.js";
import {
  a as h,
  i as g,
  n as _,
  r as v,
  t as y,
} from "./Combination-CJArERGX.js";
import { t as b } from "./dist-DkIQBCKf.js";
import { r as x } from "./button-Ap3ysi5G.js";
import { t as S } from "./dist-IS-98_QU.js";
var C = x(`Link2`, [
    [`path`, { d: `M9 17H7A5 5 0 0 1 7 7h2`, key: `8i5ue5` }],
    [`path`, { d: `M15 7h2a5 5 0 1 1 0 10h-2`, key: `1b9ql8` }],
    [`line`, { x1: `8`, x2: `16`, y1: `12`, y2: `12`, key: `1jonct` }],
  ]),
  w = e(t(), 1),
  T = n(),
  E = Object.defineProperty,
  D = (e, t) => E(e, `name`, { value: t, configurable: !0 }),
  O = `Popover`,
  [k, A] = i(O, [d]),
  j = d(),
  [M, N] = k(O),
  P = D((e) => {
    let {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !1,
      } = e,
      s = j(t),
      c = w.useRef(null),
      [l, u] = w.useState(!1),
      [d, f] = w.useState(0),
      [p, h] = w.useState(0),
      [g, _] = b({ prop: r, defaultProp: i ?? !1, onChange: a, caller: O });
    return (0, T.jsx)(m, {
      ...s,
      children: (0, T.jsx)(M, {
        scope: t,
        contentId: S(),
        titleId: S(),
        descriptionId: S(),
        titlePresent: d > 0,
        descriptionPresent: p > 0,
        setTitleCount: f,
        setDescriptionCount: h,
        triggerRef: c,
        open: g,
        onOpenChange: _,
        onOpenToggle: w.useCallback(() => _((e) => !e), [_]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: w.useCallback(() => u(!0), []),
        onCustomAnchorRemove: w.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  }, `Popover`),
  F = `PopoverTrigger`,
  I = w.forwardRef(
    D(function (e, t) {
      let { __scopePopover: n, ...i } = e,
        a = N(F, n),
        o = j(n),
        s = c(t, a.triggerRef),
        u = (0, T.jsx)(l.button, {
          type: `button`,
          "aria-haspopup": `dialog`,
          "aria-expanded": a.open,
          "aria-controls": a.open ? a.contentId : void 0,
          "data-state": q(a.open),
          ...i,
          ref: s,
          onClick: r(e.onClick, a.onOpenToggle),
        });
      return a.hasCustomAnchor
        ? u
        : (0, T.jsx)(f, { asChild: !0, ...o, children: u });
    }, `PopoverTrigger`),
  ),
  L = `PopoverPortal`,
  [R, z] = k(L, { forceMount: void 0 }),
  B = D((e) => {
    let { __scopePopover: t, forceMount: n, children: r, container: i } = e,
      o = N(L, t);
    return (0, T.jsx)(R, {
      scope: t,
      forceMount: n,
      children: (0, T.jsx)(a, {
        present: n || o.open,
        children: (0, T.jsx)(h, { asChild: !0, container: i, children: r }),
      }),
    });
  }, `PopoverPortal`),
  V = `PopoverContent`,
  H = w.forwardRef(
    D(function (e, t) {
      let n = z(V, e.__scopePopover),
        { forceMount: r = n.forceMount, ...i } = e,
        o = N(V, e.__scopePopover);
      return (0, T.jsx)(a, {
        present: r || o.open,
        children: o.modal
          ? (0, T.jsx)(W, { ...i, ref: t })
          : (0, T.jsx)(G, { ...i, ref: t }),
      });
    }, `PopoverContent`),
  ),
  U = o(`PopoverContent.RemoveScroll`),
  W = w.forwardRef(
    D(function (e, t) {
      let n = N(V, e.__scopePopover),
        i = w.useRef(null),
        a = c(t, i),
        o = w.useRef(!1);
      return (
        w.useEffect(() => {
          let e = i.current;
          if (e) return _(e);
        }, []),
        (0, T.jsx)(y, {
          as: U,
          allowPinchZoom: !0,
          children: (0, T.jsx)(K, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: r(e.onCloseAutoFocus, (e) => {
              (e.preventDefault(), o.current || n.triggerRef.current?.focus());
            }),
            onPointerDownOutside: r(
              e.onPointerDownOutside,
              (e) => {
                let t = e.detail.originalEvent,
                  n = t.button === 0 && t.ctrlKey === !0,
                  r = t.button === 2 || n;
                o.current = r;
              },
              { checkForDefaultPrevented: !1 },
            ),
            onFocusOutside: r(e.onFocusOutside, (e) => e.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          }),
        })
      );
    }, `PopoverContentModal`),
  ),
  G = w.forwardRef(
    D(function (e, t) {
      let n = N(V, e.__scopePopover),
        r = w.useRef(!1),
        i = w.useRef(!1);
      return (0, T.jsx)(K, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          (e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1));
        },
        onInteractOutside: (t) => {
          (e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0)));
          let a = t.target;
          (n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault());
        },
      });
    }, `PopoverContentNonModal`),
  ),
  K = w.forwardRef(
    D(function (e, t) {
      let {
          __scopePopover: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          disableOutsidePointerEvents: o,
          onEscapeKeyDown: s,
          onPointerDownOutside: c,
          onFocusOutside: l,
          onInteractOutside: d,
          "aria-describedby": f,
          ...m
        } = e,
        h = N(V, n),
        _ = j(n);
      return (
        g(),
        (0, T.jsx)(v, {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: (0, T.jsx)(u, {
            asChild: !0,
            disableOutsidePointerEvents: o,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: (0, T.jsx)(p, {
              "data-state": q(h.open),
              role: `dialog`,
              id: h.contentId,
              "aria-labelledby": h.titlePresent ? h.titleId : void 0,
              "aria-describedby": h.descriptionPresent
                ? J(f, h.descriptionId)
                : f,
              ..._,
              ...m,
              ref: t,
              style: {
                ...m.style,
                "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`,
                "--radix-popover-content-available-width": `var(--radix-popper-available-width)`,
                "--radix-popover-content-available-height": `var(--radix-popper-available-height)`,
                "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`,
                "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)`,
              },
            }),
          }),
        })
      );
    }, `PopoverContentImpl`),
  );
function q(e) {
  return e ? `open` : `closed`;
}
D(q, `getState`);
function J(...e) {
  let t = new Set();
  for (let n of e)
    if (typeof n == `string`)
      for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
  return t.size > 0 ? Array.from(t).join(` `) : void 0;
}
D(J, `concatAriaDescribedby`);
var Y = P,
  X = I,
  Z = w.forwardRef(
    ({ className: e, align: t = `center`, sideOffset: n = 4, ...r }, i) =>
      (0, T.jsx)(B, {
        children: (0, T.jsx)(H, {
          ref: i,
          align: t,
          sideOffset: n,
          className: s(
            `z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
            e,
          ),
          ...r,
        }),
      }),
  );
Z.displayName = H.displayName;
async function Q(e) {
  try {
    if (navigator.clipboard?.writeText)
      return (await navigator.clipboard.writeText(e), !0);
  } catch {}
  let t = document.createElement(`textarea`);
  try {
    return (
      (t.value = e),
      (t.style.position = `fixed`),
      (t.style.opacity = `0`),
      document.body.appendChild(t),
      t.focus(),
      t.select(),
      document.execCommand(`copy`)
    );
  } catch {
    return !1;
  } finally {
    t.remove();
  }
}
