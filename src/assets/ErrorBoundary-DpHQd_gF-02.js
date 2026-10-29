// ErrorBoundary-DpHQd_gF 02 — current
// Lines 193-828 of readable/assets/ErrorBoundary-DpHQd_gF.pretty.js (statement-aligned).
var Le = Object.defineProperty,
  j = (e, t) => Le(e, `name`, { value: t, configurable: !0 }),
  Re = [`Enter`, ` `],
  ze = [`ArrowDown`, `PageUp`, `Home`],
  Be = [`ArrowUp`, `PageDown`, `End`],
  Ve = [...ze, ...Be],
  He = { ltr: [...Re, `ArrowRight`], rtl: [...Re, `ArrowLeft`] },
  Ue = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
  M = `Menu`,
  [N, We, Ge] = u(M),
  [P, F] = i(M, [Ge, p, ve]),
  I = p(),
  Ke = ve(),
  [qe, L] = P(M),
  [Je, R] = P(M),
  Ye = j((e) => {
    let {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: i,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      c = I(t),
      [l, u] = k.useState(null),
      d = k.useRef(!1),
      f = a(o),
      p = fe(i);
    return (
      k.useEffect(() => {
        let e = j(() => {
            ((d.current = !0),
              document.addEventListener(`pointerdown`, t, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener(`pointermove`, t, {
                capture: !0,
                once: !0,
              }));
          }, `handleKeyDown`),
          t = j(() => (d.current = !1), `handlePointer`);
        return (
          document.addEventListener(`keydown`, e, { capture: !0 }),
          () => {
            (document.removeEventListener(`keydown`, e, { capture: !0 }),
              document.removeEventListener(`pointerdown`, t, { capture: !0 }),
              document.removeEventListener(`pointermove`, t, { capture: !0 }));
          }
        );
      }, []),
      k.useEffect(() => {
        if (!n) return;
        let e = j(() => f(!1), `handleBlur`);
        return (
          window.addEventListener(`blur`, e),
          () => window.removeEventListener(`blur`, e)
        );
      }, [n, f]),
      (0, A.jsx)(te, {
        ...c,
        children: (0, A.jsx)(qe, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: u,
          children: (0, A.jsx)(Je, {
            scope: t,
            onClose: k.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: d,
            dir: p,
            modal: s,
            children: r,
          }),
        }),
      })
    );
  }, `Menu`),
  z = k.forwardRef(
    j(function (e, t) {
      let { __scopeMenu: n, ...r } = e,
        i = I(n);
      return (0, A.jsx)(m, { ...i, ...r, ref: t });
    }, `MenuAnchor`),
  ),
  Xe = `MenuPortal`,
  [Ze, Qe] = P(Xe, { forceMount: void 0 }),
  $e = j((e) => {
    let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
      a = L(Xe, t);
    return (0, A.jsx)(Ze, {
      scope: t,
      forceMount: n,
      children: (0, A.jsx)(o, {
        present: n || a.open,
        children: (0, A.jsx)(g, { asChild: !0, container: i, children: r }),
      }),
    });
  }, `MenuPortal`),
  B = `MenuContent`,
  [et, V] = P(B),
  tt = k.forwardRef(
    j(function (e, t) {
      let n = Qe(B, e.__scopeMenu),
        { forceMount: r = n.forceMount, ...i } = e,
        a = L(B, e.__scopeMenu),
        s = R(B, e.__scopeMenu);
      return (0, A.jsx)(N.Provider, {
        scope: e.__scopeMenu,
        children: (0, A.jsx)(o, {
          present: r || a.open,
          children: (0, A.jsx)(N.Slot, {
            scope: e.__scopeMenu,
            children: s.modal
              ? (0, A.jsx)(nt, { ...i, ref: t })
              : (0, A.jsx)(rt, { ...i, ref: t }),
          }),
        }),
      });
    }, `MenuContent`),
  ),
  nt = k.forwardRef(
    j(function (e, t) {
      let n = L(B, e.__scopeMenu),
        i = k.useRef(null),
        a = l(t, i);
      return (
        k.useEffect(() => {
          let e = i.current;
          if (e) return me(e);
        }, []),
        (0, A.jsx)(H, {
          ...e,
          ref: a,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: r(e.onFocusOutside, (e) => e.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        })
      );
    }, `MenuRootContentModal`),
  ),
  rt = k.forwardRef(
    j(function (e, t) {
      let n = L(B, e.__scopeMenu);
      return (0, A.jsx)(H, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      });
    }, `MenuRootContentNonModal`),
  ),
  it = s(`MenuContent.ScrollLock`),
  H = k.forwardRef(
    j(function (e, t) {
      let {
          __scopeMenu: n,
          loop: i = !1,
          trapFocus: a,
          onOpenAutoFocus: o,
          onCloseAutoFocus: s,
          disableOutsidePointerEvents: c,
          onEntryFocus: u,
          onEscapeKeyDown: d,
          onPointerDownOutside: f,
          onFocusOutside: p,
          onInteractOutside: m,
          onDismiss: te,
          disableOutsideScroll: g,
          ..._
        } = e,
        v = L(B, n),
        y = R(B, n),
        ne = I(n),
        re = Ke(n),
        b = We(n),
        [ie, x] = k.useState(null),
        S = k.useRef(null),
        ae = l(t, S, v.onContentChange),
        C = k.useRef(0),
        w = k.useRef(``),
        oe = k.useRef(0),
        T = k.useRef(null),
        E = k.useRef(`right`),
        D = k.useRef(0),
        se = g ? ge : k.Fragment,
        ce = g ? { as: it, allowPinchZoom: !0 } : void 0,
        le = j((e) => {
          let t = w.current + e,
            n = b().filter((e) => !e.disabled),
            r = document.activeElement,
            i = n.find((e) => e.ref.current === r)?.textValue,
            a = Tt(
              n.map((e) => e.textValue),
              t,
              i,
            ),
            o = n.find((e) => e.textValue === a)?.ref.current;
          (j(function e(t) {
            ((w.current = t),
              window.clearTimeout(C.current),
              t !== `` && (C.current = window.setTimeout(() => e(``), 1e3)));
          }, `updateSearch`)(t),
            o && setTimeout(() => o.focus()));
        }, `handleTypeaheadSearch`);
      (k.useEffect(() => () => window.clearTimeout(C.current), []), pe());
      let O = k.useCallback(
        (e) => E.current === T.current?.side && Dt(e, T.current?.area),
        [],
      );
      return (0, A.jsx)(et, {
        scope: n,
        searchRef: w,
        onItemEnter: k.useCallback(
          (e) => {
            O(e) && e.preventDefault();
          },
          [O],
        ),
        onItemLeave: k.useCallback(
          (e) => {
            O(e) || (S.current?.focus(), x(null));
          },
          [O],
        ),
        onTriggerLeave: k.useCallback(
          (e) => {
            O(e) && e.preventDefault();
          },
          [O],
        ),
        pointerGraceTimerRef: oe,
        onPointerGraceIntentChange: k.useCallback((e) => {
          T.current = e;
        }, []),
        children: (0, A.jsx)(se, {
          ...ce,
          children: (0, A.jsx)(he, {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: r(o, (e) => {
              (e.preventDefault(), S.current?.focus({ preventScroll: !0 }));
            }),
            onUnmountAutoFocus: s,
            children: (0, A.jsx)(h, {
              asChild: !0,
              disableOutsidePointerEvents: c,
              onEscapeKeyDown: d,
              onPointerDownOutside: f,
              onFocusOutside: p,
              onInteractOutside: m,
              onDismiss: te,
              children: (0, A.jsx)(ye, {
                asChild: !0,
                ...re,
                dir: y.dir,
                orientation: `vertical`,
                loop: i,
                currentTabStopId: ie,
                onCurrentTabStopIdChange: x,
                onEntryFocus: r(u, (e) => {
                  y.isUsingKeyboardRef.current || e.preventDefault();
                }),
                preventScrollOnEntryFocus: !0,
                children: (0, A.jsx)(ee, {
                  role: `menu`,
                  "aria-orientation": `vertical`,
                  "data-state": K(v.open),
                  "data-radix-menu-content": ``,
                  dir: y.dir,
                  ...ne,
                  ..._,
                  ref: ae,
                  style: { outline: `none`, ..._.style },
                  onKeyDown: r(_.onKeyDown, (e) => {
                    let t =
                        e.target.closest(`[data-radix-menu-content]`) ===
                        e.currentTarget,
                      n = e.ctrlKey || e.altKey || e.metaKey,
                      r = e.key.length === 1;
                    t &&
                      (e.key === `Tab` && e.preventDefault(),
                      !n && r && le(e.key));
                    let i = S.current;
                    if (e.target !== i || !Ve.includes(e.key)) return;
                    e.preventDefault();
                    let a = b()
                      .filter((e) => !e.disabled)
                      .map((e) => e.ref.current);
                    (Be.includes(e.key) && a.reverse(), Ct(a));
                  }),
                  onBlur: r(e.onBlur, (e) => {
                    e.currentTarget.contains(e.target) ||
                      (window.clearTimeout(C.current), (w.current = ``));
                  }),
                  onPointerMove: r(
                    e.onPointerMove,
                    Y((e) => {
                      let t = e.target,
                        n = D.current !== e.clientX;
                      if (e.currentTarget.contains(t) && n) {
                        let t = e.clientX > D.current ? `right` : `left`;
                        ((E.current = t), (D.current = e.clientX));
                      }
                    }),
                  ),
                }),
              }),
            }),
          }),
        }),
      });
    }, `MenuContentImpl`),
  ),
  at = k.forwardRef(
    j(function (e, t) {
      let { __scopeMenu: n, ...r } = e;
      return (0, A.jsx)(f.div, { ...r, ref: t });
    }, `MenuLabel`),
  ),
  U = `MenuItem`,
  ot = `menu.itemSelect`,
  W = k.forwardRef(
    j(function (e, t) {
      let { disabled: n = !1, onSelect: i, ...a } = e,
        o = k.useRef(null),
        s = R(U, e.__scopeMenu),
        c = V(U, e.__scopeMenu),
        u = l(t, o),
        f = k.useRef(!1),
        p = j(() => {
          let e = o.current;
          if (!n && e) {
            let t = new CustomEvent(ot, { bubbles: !0, cancelable: !0 });
            (e.addEventListener(ot, (e) => i?.(e), { once: !0 }),
              d(e, t),
              t.defaultPrevented ? (f.current = !1) : s.onClose());
          }
        }, `handleSelect`);
      return (0, A.jsx)(st, {
        ...a,
        ref: u,
        disabled: n,
        onClick: r(e.onClick, p),
        onPointerDown: (t) => {
          (e.onPointerDown?.(t), (f.current = !0));
        },
        onPointerUp: r(e.onPointerUp, (e) => {
          f.current || e.currentTarget?.click();
        }),
        onKeyDown: r(e.onKeyDown, (e) => {
          n ||
            e.target !== e.currentTarget ||
            (c.searchRef.current !== `` && e.key === ` `) ||
            (Re.includes(e.key) &&
              (e.currentTarget.click(), e.preventDefault()));
        }),
      });
    }, `MenuItem`),
  ),
  st = k.forwardRef(
    j(function (e, t) {
      let { __scopeMenu: n, disabled: i = !1, textValue: a, ...o } = e,
        s = V(U, n),
        c = Ke(n),
        u = k.useRef(null),
        d = l(t, u),
        [p, m] = k.useState(!1),
        [h, ee] = k.useState(``);
      return (
        k.useEffect(() => {
          let e = u.current;
          e && ee((e.textContent ?? ``).trim());
        }, [o.children]),
        (0, A.jsx)(N.ItemSlot, {
          scope: n,
          disabled: i,
          textValue: a ?? h,
          children: (0, A.jsx)(_e, {
            asChild: !0,
            ...c,
            focusable: !i,
            children: (0, A.jsx)(f.div, {
              role: `menuitem`,
              "data-highlighted": p ? `` : void 0,
              "aria-disabled": i || void 0,
              "data-disabled": i ? `` : void 0,
              ...o,
              ref: d,
              onPointerMove: r(
                e.onPointerMove,
                Y((e) => {
                  i
                    ? s.onItemLeave(e)
                    : (s.onItemEnter(e),
                      e.defaultPrevented ||
                        e.currentTarget.focus({ preventScroll: !0 }));
                }),
              ),
              onPointerLeave: r(
                e.onPointerLeave,
                Y((e) => s.onItemLeave(e)),
              ),
              onFocus: r(e.onFocus, () => m(!0)),
              onBlur: r(e.onBlur, () => m(!1)),
            }),
          }),
        })
      );
    }, `MenuItemImpl`),
  ),
  ct = k.forwardRef(
    j(function (e, t) {
      let { checked: n = !1, onCheckedChange: i, ...a } = e;
      return (0, A.jsx)(mt, {
        scope: e.__scopeMenu,
        checked: n,
        children: (0, A.jsx)(W, {
          role: `menuitemcheckbox`,
          "aria-checked": q(n) ? `mixed` : n,
          ...a,
          ref: t,
          "data-state": J(n),
          onSelect: r(a.onSelect, () => i?.(q(n) ? !0 : !n), {
            checkForDefaultPrevented: !1,
          }),
        }),
      });
    }, `MenuCheckboxItem`),
  ),
  [lt, ut] = P(`MenuRadioGroup`, {
    value: void 0,
    onValueChange: j(() => {}, `onValueChange`),
  }),
  dt = `MenuRadioItem`,
  ft = k.forwardRef(
    j(function (e, t) {
      let { value: n, ...i } = e,
        a = ut(dt, e.__scopeMenu),
        o = n === a.value;
      return (0, A.jsx)(mt, {
        scope: e.__scopeMenu,
        checked: o,
        children: (0, A.jsx)(W, {
          role: `menuitemradio`,
          "aria-checked": o,
          ...i,
          ref: t,
          "data-state": J(o),
          onSelect: r(i.onSelect, () => a.onValueChange?.(n), {
            checkForDefaultPrevented: !1,
          }),
        }),
      });
    }, `MenuRadioItem`),
  ),
  pt = `MenuItemIndicator`,
  [mt, ht] = P(pt, { checked: !1 }),
  gt = k.forwardRef(
    j(function (e, t) {
      let { __scopeMenu: n, forceMount: r, ...i } = e,
        a = ht(pt, n);
      return (0, A.jsx)(o, {
        present: r || q(a.checked) || a.checked === !0,
        children: (0, A.jsx)(f.span, {
          ...i,
          ref: t,
          "data-state": J(a.checked),
        }),
      });
    }, `MenuItemIndicator`),
  ),
  _t = k.forwardRef(
    j(function (e, t) {
      let { __scopeMenu: n, ...r } = e;
      return (0, A.jsx)(f.div, {
        role: `separator`,
        "aria-orientation": `horizontal`,
        ...r,
        ref: t,
      });
    }, `MenuSeparator`),
  ),
  [vt, yt] = P(`MenuSub`),
  G = `MenuSubTrigger`,
  bt = k.forwardRef(
    j(function (e, t) {
      let n = L(G, e.__scopeMenu),
        i = R(G, e.__scopeMenu),
        a = yt(G, e.__scopeMenu),
        o = V(G, e.__scopeMenu),
        s = k.useRef(null),
        { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = o,
        d = { __scopeMenu: e.__scopeMenu },
        f = k.useCallback(() => {
          (s.current && window.clearTimeout(s.current), (s.current = null));
        }, []);
      (k.useEffect(() => f, [f]),
        k.useEffect(() => {
          let e = c.current;
          return () => {
            (window.clearTimeout(e), u(null));
          };
        }, [c, u]));
      let p = l(t, a.onTriggerChange);
      return (0, A.jsx)(z, {
        asChild: !0,
        ...d,
        children: (0, A.jsx)(st, {
          id: a.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": n.open,
          "aria-controls": n.open ? a.contentId : void 0,
          "data-state": K(n.open),
          ...e,
          ref: p,
          onClick: (t) => {
            (e.onClick?.(t),
              !(e.disabled || t.defaultPrevented) &&
                (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: r(
            e.onPointerMove,
            Y((t) => {
              (o.onItemEnter(t),
                !t.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (o.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), f());
                  }, 100))));
            }),
          ),
          onPointerLeave: r(
            e.onPointerLeave,
            Y((e) => {
              f();
              let t = n.content?.getBoundingClientRect();
              if (t) {
                let r = n.content?.dataset.side,
                  i = r === `right`,
                  a = i ? -5 : 5,
                  s = t[i ? `left` : `right`],
                  l = t[i ? `right` : `left`];
                (o.onPointerGraceIntentChange({
                  area: [
                    { x: e.clientX + a, y: e.clientY },
                    { x: s, y: t.top },
                    { x: l, y: t.top },
                    { x: l, y: t.bottom },
                    { x: s, y: t.bottom },
                  ],
                  side: r,
                }),
                  window.clearTimeout(c.current),
                  (c.current = window.setTimeout(
                    () => o.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((o.onTriggerLeave(e), e.defaultPrevented)) return;
                o.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: r(e.onKeyDown, (t) => {
            e.disabled ||
              t.target !== t.currentTarget ||
              (o.searchRef.current !== `` && t.key === ` `) ||
              (He[i.dir].includes(t.key) &&
                (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
          }),
        }),
      });
    }, `MenuSubTrigger`),
  ),
  xt = `MenuSubContent`,
  St = k.forwardRef(
    j(function (e, t) {
      let n = Qe(B, e.__scopeMenu),
        { forceMount: i = n.forceMount, align: a = `start`, ...s } = e,
        c = L(B, e.__scopeMenu),
        u = R(B, e.__scopeMenu),
        d = yt(xt, e.__scopeMenu),
        f = k.useRef(null),
        p = l(t, f);
      return (0, A.jsx)(N.Provider, {
        scope: e.__scopeMenu,
        children: (0, A.jsx)(o, {
          present: i || c.open,
          children: (0, A.jsx)(N.Slot, {
            scope: e.__scopeMenu,
            children: (0, A.jsx)(H, {
              id: d.contentId,
              "aria-labelledby": d.triggerId,
              ...s,
              ref: p,
              align: a,
              side: u.dir === `rtl` ? `left` : `right`,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (e) => {
                (u.isUsingKeyboardRef.current && f.current?.focus(),
                  e.preventDefault());
              },
              onCloseAutoFocus: (e) => e.preventDefault(),
              onFocusOutside: r(e.onFocusOutside, (e) => {
                e.target !== d.trigger && c.onOpenChange(!1);
              }),
              onEscapeKeyDown: r(e.onEscapeKeyDown, (e) => {
                (u.onClose(), e.preventDefault());
              }),
              onKeyDown: r(e.onKeyDown, (e) => {
                let t = e.currentTarget.contains(e.target),
                  n = Ue[u.dir].includes(e.key);
                t &&
                  n &&
                  (c.onOpenChange(!1), d.trigger?.focus(), e.preventDefault());
              }),
            }),
          }),
        }),
      });
    }, `MenuSubContent`),
  );
