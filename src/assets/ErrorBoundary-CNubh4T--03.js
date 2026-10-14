// ErrorBoundary-CNubh4T- 03 — jsx
// Lines 835-1183 of readable/assets/ErrorBoundary-CNubh4T-.pretty.js (statement-aligned).
function K(e) {
  return e ? `open` : `closed`;
}
A(K, `getOpenState`);
function q(e) {
  return e === `indeterminate`;
}
A(q, `isIndeterminate`);
function J(e) {
  return q(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
A(J, `getCheckedState`);
function Ct(e) {
  let t = document.activeElement;
  for (let n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
A(Ct, `focusFirst`);
function wt(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
A(wt, `wrapArray`);
function Tt(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = wt(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
A(Tt, `getNextMatch`);
function Et(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
A(Et, `isPointInPolygon`);
function Dt(e, t) {
  return t ? Et({ x: e.clientX, y: e.clientY }, t) : !1;
}
A(Dt, `isPointerInGraceArea`);
function Y(e) {
  return (t) => (t.pointerType === `mouse` ? e(t) : void 0);
}
A(Y, `whenMouse`);
var Ot = Object.defineProperty,
  X = (e, t) => Ot(e, `name`, { value: t, configurable: !0 }),
  kt = `DropdownMenu`,
  [At, jt] = i(kt, [F]),
  Z = F(),
  [Mt, Nt] = At(kt),
  Pt = X((e) => {
    let {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: i,
        defaultOpen: a,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      c = Z(t),
      l = O.useRef(null),
      [u, d] = ae({ prop: i, defaultProp: a ?? !1, onChange: o, caller: kt });
    return (0, k.jsx)(Mt, {
      scope: t,
      triggerId: _e(),
      triggerRef: l,
      contentId: _e(),
      open: u,
      onOpenChange: d,
      onOpenToggle: O.useCallback(() => d((e) => !e), [d]),
      modal: s,
      children: (0, k.jsx)(Ye, {
        ...c,
        open: u,
        onOpenChange: d,
        dir: r,
        modal: s,
        children: n,
      }),
    });
  }, `DropdownMenu`),
  Ft = `DropdownMenuTrigger`,
  It = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, disabled: i = !1, ...a } = e,
        o = Nt(Ft, n),
        s = Z(n),
        c = l(t, o.triggerRef);
      return (0, k.jsx)(z, {
        asChild: !0,
        ...s,
        children: (0, k.jsx)(f.button, {
          type: `button`,
          id: o.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": o.open,
          "aria-controls": o.open ? o.contentId : void 0,
          "data-state": o.open ? `open` : `closed`,
          "data-disabled": i ? `` : void 0,
          disabled: i,
          ...a,
          ref: c,
          onPointerDown: r(e.onPointerDown, (e) => {
            !i &&
              e.button === 0 &&
              e.ctrlKey === !1 &&
              (o.onOpenToggle(), o.open || e.preventDefault());
          }),
          onKeyDown: r(e.onKeyDown, (e) => {
            i ||
              ([`Enter`, ` `].includes(e.key) && o.onOpenToggle(),
              e.key === `ArrowDown` && o.onOpenChange(!0),
              [`Enter`, ` `, `ArrowDown`].includes(e.key) &&
                e.preventDefault());
          }),
        }),
      });
    }, `DropdownMenuTrigger`),
  ),
  Lt = X((e) => {
    let { __scopeDropdownMenu: t, ...n } = e,
      r = Z(t);
    return (0, k.jsx)($e, { ...r, ...n });
  }, `DropdownMenuPortal`),
  Rt = `DropdownMenuContent`,
  zt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...i } = e,
        a = Nt(Rt, n),
        o = Z(n),
        s = O.useRef(!1);
      return (0, k.jsx)(tt, {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ...i,
        ref: t,
        onCloseAutoFocus: r(e.onCloseAutoFocus, (e) => {
          (s.current || a.triggerRef.current?.focus(),
            (s.current = !1),
            e.preventDefault());
        }),
        onInteractOutside: r(e.onInteractOutside, (e) => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0,
            r = t.button === 2 || n;
          (!a.modal || r) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `DropdownMenuContent`),
  ),
  Bt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(at, { ...i, ...r, ref: t });
    }, `DropdownMenuLabel`),
  ),
  Vt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(W, { ...i, ...r, ref: t });
    }, `DropdownMenuItem`),
  ),
  Ht = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(ct, { ...i, ...r, ref: t });
    }, `DropdownMenuCheckboxItem`),
  ),
  Ut = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(ft, { ...i, ...r, ref: t });
    }, `DropdownMenuRadioItem`),
  ),
  Wt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(gt, { ...i, ...r, ref: t });
    }, `DropdownMenuItemIndicator`),
  ),
  Gt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(_t, { ...i, ...r, ref: t });
    }, `DropdownMenuSeparator`),
  ),
  Kt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(bt, { ...i, ...r, ref: t });
    }, `DropdownMenuSubTrigger`),
  ),
  qt = O.forwardRef(
    X(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = Z(n);
      return (0, k.jsx)(St, {
        ...i,
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `DropdownMenuSubContent`),
  ),
  Jt = Pt,
  Yt = It,
  Xt = O.forwardRef(({ className: e, inset: t, children: n, ...r }, i) =>
    (0, k.jsxs)(Kt, {
      ref: i,
      className: c(
        `flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        t && `pl-8`,
        e,
      ),
      ...r,
      children: [n, (0, k.jsx)(x, { className: `ml-auto` })],
    }),
  );
Xt.displayName = Kt.displayName;
var Zt = O.forwardRef(({ className: e, ...t }, n) =>
  (0, k.jsx)(qt, {
    ref: n,
    className: c(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
      e,
    ),
    ...t,
  }),
);
Zt.displayName = qt.displayName;
var Qt = O.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  (0, k.jsx)(Lt, {
    children: (0, k.jsx)(zt, {
      ref: r,
      sideOffset: t,
      className: c(
        `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e,
      ),
      ...n,
    }),
  }),
);
Qt.displayName = zt.displayName;
var $t = O.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, k.jsx)(Vt, {
    ref: r,
    className: c(
      `relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
);
$t.displayName = Vt.displayName;
var en = O.forwardRef(({ className: e, children: t, checked: n, ...r }, i) =>
  (0, k.jsxs)(Ht, {
    ref: i,
    className: c(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    checked: n,
    ...r,
    children: [
      (0, k.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, k.jsx)(Wt, {
          children: (0, k.jsx)(se, { className: `h-4 w-4` }),
        }),
      }),
      t,
    ],
  }),
);
en.displayName = Ht.displayName;
var tn = O.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, k.jsxs)(Ut, {
    ref: r,
    className: c(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, k.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, k.jsx)(Wt, {
          children: (0, k.jsx)(ce, { className: `h-2 w-2 fill-current` }),
        }),
      }),
      t,
    ],
  }),
);
tn.displayName = Ut.displayName;
var nn = O.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, k.jsx)(Bt, {
    ref: r,
    className: c(`px-2 py-1.5 text-sm font-semibold`, t && `pl-8`, e),
    ...n,
  }),
);
nn.displayName = Bt.displayName;
var rn = O.forwardRef(({ className: e, ...t }, n) =>
  (0, k.jsx)(Gt, { ref: n, className: c(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
rn.displayName = Gt.displayName;
var an = ({ className: e, ...t }) =>
  (0, k.jsx)(`span`, {
    className: c(`ml-auto text-xs tracking-widest opacity-60`, e),
    ...t,
  });
an.displayName = `DropdownMenuShortcut`;
