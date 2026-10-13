// assets__switch-DR7KWk3q 02 — jsx
// Lines 146-1060 of readable/assets__switch-DR7KWk3q.pretty.js (statement-aligned).
var se = B((e) => {
    let { __scopeSelect: t, children: n, ...r } = e;
    return (0, R.jsx)(oe, {
      __scopeSelect: t,
      ...r,
      internal_do_not_use_render: ({ isFormControl: e }) =>
        (0, R.jsxs)(R.Fragment, {
          children: [n, e ? (0, R.jsx)(qe, { __scopeSelect: t }) : null],
        }),
    });
  }, `Select`),
  ce = `SelectTrigger`,
  le = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, disabled: r = !1, ...a } = e,
        o = q(n),
        s = J(ce, n),
        c = s.disabled || r,
        l = d(t, s.onTriggerChange),
        u = G(n),
        f = P.useRef(`touch`),
        [m, h, _] = Ye((e) => {
          let t = u().filter((e) => !e.disabled),
            n = Xe(
              t,
              e,
              t.find((e) => e.value === s.value),
            );
          n !== void 0 && s.onValueChange(n.value);
        }),
        v = B((e) => {
          (c || (s.onOpenChange(!0), _()),
            e &&
              (s.triggerPointerDownPosRef.current = {
                x: Math.round(e.pageX),
                y: Math.round(e.pageY),
              }));
        }, `handleOpen`);
      return (0, R.jsx)(g, {
        asChild: !0,
        ...o,
        children: (0, R.jsx)(p.button, {
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
                V.includes(e.key) &&
                (v(), e.preventDefault()));
          }),
        }),
      });
    }, `SelectTrigger`),
  ),
  ue = `SelectValue`,
  de = P.forwardRef(
    B(function (e, t) {
      let {
          __scopeSelect: n,
          className: r,
          style: i,
          children: a,
          placeholder: s = ``,
          ...c
        } = e,
        l = J(ue, n),
        { onValueNodeHasChildrenChange: u } = l,
        f = a !== void 0,
        m = d(t, l.onValueNodeChange);
      o(() => {
        u(f);
      }, [u, f]);
      let h = Q(l.value);
      return (0, R.jsx)(p.span, {
        ...c,
        asChild: !h && c.asChild,
        ref: m,
        style: { pointerEvents: `none` },
        children: (0, R.jsx)(
          P.Fragment,
          { children: h ? s : a },
          h ? `placeholder` : `value`,
        ),
      });
    }, `SelectValue`),
  ),
  fe = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, children: r, ...i } = e;
      return (0, R.jsx)(p.span, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        children: r || `▼`,
      });
    }, `SelectIcon`),
  ),
  [pe, me] = K(`SelectPortal`, { forceMount: void 0 }),
  he = B((e) => {
    let { __scopeSelect: t, forceMount: n, ...r } = e;
    return (0, R.jsx)(pe, {
      scope: e.__scopeSelect,
      forceMount: n,
      children: (0, R.jsx)(y, { asChild: !0, ...r }),
    });
  }, `SelectPortal`),
  Y = `SelectContent`,
  ge = P.forwardRef(
    B(function (e, t) {
      let n = me(Y, e.__scopeSelect),
        { forceMount: r = n.forceMount, ...i } = e,
        a = J(Y, e.__scopeSelect),
        [s, l] = P.useState();
      return (
        o(() => {
          l(new DocumentFragment());
        }, []),
        (0, R.jsx)(c, {
          present: r || a.open,
          children: ({ present: e }) =>
            e
              ? (0, R.jsx)(be, { ...i, ref: t })
              : (0, R.jsx)(_e, { ...i, fragment: s }),
        })
      );
    }, `SelectContent`),
  ),
  _e = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, children: r, fragment: i } = e;
      return i
        ? ee.createPortal(
            (0, R.jsx)(ve, {
              scope: n,
              children: (0, R.jsx)(W.Slot, {
                scope: n,
                children: (0, R.jsx)(`div`, { ref: t, children: r }),
              }),
            }),
            i,
          )
        : null;
    }, `SelectContentFragment`),
  ),
  X = 10,
  [ve, Z] = K(Y),
  ye = l(`SelectContent.RemoveScroll`),
  be = P.forwardRef(
    B(function (e, t) {
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
          collisionBoundary: h,
          collisionPadding: g,
          sticky: _,
          hideWhenDetached: v,
          avoidCollisions: y,
          ...w
        } = e,
        T = J(Y, n),
        [E, D] = P.useState(null),
        [O, k] = P.useState(null),
        A = d(t, D),
        [j, M] = P.useState(null),
        [N, ee] = P.useState(null),
        F = G(n),
        [I, L] = P.useState(!1),
        z = P.useRef(!1);
      (P.useEffect(() => {
        if (E) return x(E);
      }, [E]),
        b());
      let V = P.useCallback(
          (e) => {
            let [t, ...n] = F().map((e) => e.ref.current),
              [r] = n.slice(-1),
              i = document.activeElement;
            for (let n of e)
              if (
                n === i ||
                (n?.scrollIntoView({ block: `nearest` }),
                n === t && O && (O.scrollTop = 0),
                n === r && O && (O.scrollTop = O.scrollHeight),
                n?.focus(),
                document.activeElement !== i)
              )
                return;
          },
          [F, O],
        ),
        H = P.useCallback(() => V([j, E]), [V, j, E]);
      P.useEffect(() => {
        I && H();
      }, [I, H]);
      let { onOpenChange: U, triggerPointerDownPosRef: W } = T;
      (P.useEffect(() => {
        if (E) {
          let e = { x: 0, y: 0 },
            t = B((t) => {
              e = {
                x: Math.abs(Math.round(t.pageX) - (W.current?.x ?? 0)),
                y: Math.abs(Math.round(t.pageY) - (W.current?.y ?? 0)),
              };
            }, `handlePointerMove`),
            n = B((n) => {
              (e.x <= 10 && e.y <= 10
                ? n.preventDefault()
                : n.composedPath().includes(E) || U(!1),
                document.removeEventListener(`pointermove`, t),
                (W.current = null));
            }, `handlePointerUp`);
          return (
            W.current !== null &&
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
      }, [E, U, W]),
        P.useEffect(() => {
          let e = B(() => U(!1), `close`);
          return (
            window.addEventListener(`blur`, e),
            window.addEventListener(`resize`, e),
            () => {
              (window.removeEventListener(`blur`, e),
                window.removeEventListener(`resize`, e));
            }
          );
        }, [U]));
      let [te, K] = Ye((e) => {
          let t = F().filter((e) => !e.disabled),
            n = Xe(
              t,
              e,
              t.find((e) => e.ref.current === document.activeElement),
            );
          n && setTimeout(() => n.ref.current?.focus());
        }),
        ne = P.useCallback(
          (e, t, n) => {
            let r = !z.current && !n;
            ((T.value !== void 0 && T.value === t) || r) &&
              (M(e), r && (z.current = !0));
          },
          [T.value],
        ),
        q = P.useCallback(() => E?.focus(), [E]),
        re = P.useCallback(
          (e, t, n) => {
            let r = !z.current && !n;
            ((T.value !== void 0 && T.value === t) || r) && ee(e);
          },
          [T.value],
        ),
        ie = r === `popper` ? Se : xe,
        ae =
          ie === Se
            ? {
                side: c,
                sideOffset: l,
                align: u,
                alignOffset: f,
                arrowPadding: p,
                collisionBoundary: h,
                collisionPadding: g,
                sticky: _,
                hideWhenDetached: v,
                avoidCollisions: y,
              }
            : {};
      return (0, R.jsx)(ve, {
        scope: n,
        content: E,
        viewport: O,
        onViewportChange: k,
        itemRefCallback: ne,
        selectedItem: j,
        onItemLeave: q,
        itemTextRefCallback: re,
        focusSelectedItem: H,
        selectedItemText: N,
        position: r,
        isPositioned: I,
        searchRef: te,
        children: (0, R.jsx)(C, {
          as: ye,
          allowPinchZoom: !0,
          children: (0, R.jsx)(S, {
            asChild: !0,
            trapped: T.open,
            onMountAutoFocus: (e) => {
              e.preventDefault();
            },
            onUnmountAutoFocus: i(a, (e) => {
              (T.trigger?.focus({ preventScroll: !0 }), e.preventDefault());
            }),
            children: (0, R.jsx)(m, {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: o,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: () => T.onOpenChange(!1),
              children: (0, R.jsx)(ie, {
                role: `listbox`,
                id: T.contentId,
                "data-state": T.open ? `open` : `closed`,
                dir: T.dir,
                onContextMenu: (e) => e.preventDefault(),
                ...w,
                ...ae,
                onPlaced: () => L(!0),
                ref: A,
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  outline: `none`,
                  ...w.style,
                },
                onKeyDown: i(w.onKeyDown, (e) => {
                  let t = e.ctrlKey || e.altKey || e.metaKey;
                  if (
                    (e.key === `Tab` && e.preventDefault(),
                    !t && e.key.length === 1 && K(e.key),
                    [`ArrowUp`, `ArrowDown`, `Home`, `End`].includes(e.key))
                  ) {
                    let t = F()
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
                    (setTimeout(() => V(t)), e.preventDefault());
                  }
                }),
              }),
            }),
          }),
        }),
      });
    }, `SelectContentImpl`),
  ),
  xe = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, onPlaced: r, ...i } = e,
        a = J(Y, n),
        s = Z(Y, n),
        [c, l] = P.useState(null),
        [u, f] = P.useState(null),
        m = d(t, f),
        h = G(n),
        g = P.useRef(!1),
        _ = P.useRef(!0),
        {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: x,
        } = s,
        S = P.useCallback(() => {
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
                u = window.innerWidth - X,
                d = j(a, [X, Math.max(X, u - l)]);
              ((c.style.minWidth = s + `px`), (c.style.left = d + `px`));
            } else {
              let r = t.right - i.right,
                a = window.innerWidth - n.right - r,
                o = window.innerWidth - e.right - a,
                s = e.width + o,
                l = Math.max(s, t.width),
                u = window.innerWidth - X,
                d = j(a, [X, Math.max(X, u - l)]);
              ((c.style.minWidth = s + `px`), (c.style.right = d + `px`));
            }
            let o = h(),
              s = window.innerHeight - X * 2,
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
              E = e.top + e.height / 2 - X,
              D = s - E,
              O = y.offsetHeight / 2,
              k = y.offsetTop + O,
              A = f + p + k,
              M = x - A;
            if (A <= E) {
              let e = o.length > 0 && y === o[o.length - 1].ref.current;
              c.style.bottom = `0px`;
              let t = u.clientHeight - v.offsetTop - v.offsetHeight,
                n = A + Math.max(D, O + (e ? T : 0) + t + m);
              c.style.height = n + `px`;
            } else {
              let e = o.length > 0 && y === o[0].ref.current;
              c.style.top = `0px`;
              let t = Math.max(E, f + v.offsetTop + (e ? w : 0) + O) + M;
              ((c.style.height = t + `px`),
                (v.scrollTop = A - E + v.offsetTop));
            }
            ((c.style.margin = `${X}px 0`),
              (c.style.minHeight = S + `px`),
              (c.style.maxHeight = s + `px`),
              r?.(),
              requestAnimationFrame(() => (g.current = !0)));
          }
        }, [h, a.trigger, a.valueNode, c, u, v, y, b, a.dir, r]);
      o(() => S(), [S]);
      let [C, w] = P.useState();
      return (
        o(() => {
          u && w(window.getComputedStyle(u).zIndex);
        }, [u]),
        (0, R.jsx)(Ce, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: P.useCallback(
            (e) => {
              e && _.current === !0 && (S(), x?.(), (_.current = !1));
            },
            [S, x],
          ),
          children: (0, R.jsx)(`div`, {
            ref: l,
            style: {
              display: `flex`,
              flexDirection: `column`,
              position: `fixed`,
              zIndex: C,
            },
            children: (0, R.jsx)(p.div, {
              ...i,
              ref: m,
              style: { boxSizing: `border-box`, maxHeight: `100%`, ...i.style },
            }),
          }),
        })
      );
    }, `SelectItemAlignedPosition`),
  ),
  Se = P.forwardRef(
    B(function (e, t) {
      let {
          __scopeSelect: n,
          align: r = `start`,
          collisionPadding: i = X,
          ...a
        } = e,
        o = q(n);
      return (0, R.jsx)(_, {
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
  [Ce, we] = K(Y, {}),
  Te = `SelectViewport`,
  Ee = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, nonce: r, ...a } = e,
        o = Z(Te, n),
        s = we(Te, n),
        c = d(t, o.onViewportChange),
        l = P.useRef(0);
      return (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsx)(`style`, {
            dangerouslySetInnerHTML: {
              __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`,
            },
            nonce: r,
          }),
          (0, R.jsx)(W.Slot, {
            scope: n,
            children: (0, R.jsx)(p.div, {
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
                    let r = window.innerHeight - X * 2,
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
  [De, Oe] = K(`SelectGroup`),
  ke = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, ...r } = e,
        i = k();
      return (0, R.jsx)(De, {
        scope: n,
        id: i,
        children: (0, R.jsx)(p.div, {
          role: `group`,
          "aria-labelledby": i,
          ...r,
          ref: t,
        }),
      });
    }, `SelectGroup`),
  ),
  Ae = `SelectLabel`,
  je = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, ...r } = e,
        i = Oe(Ae, n);
      return (0, R.jsx)(p.div, { id: i.id, ...r, ref: t });
    }, `SelectLabel`),
  ),
  Me = `SelectItem`,
  [Ne, Pe] = K(Me),
  Fe = P.forwardRef(
    B(function (e, t) {
      let {
          __scopeSelect: n,
          value: r,
          disabled: a = !1,
          textValue: o,
          ...c
        } = e,
        l = J(Me, n),
        u = Z(Me, n),
        f = l.value === r,
        [m, h] = P.useState(o ?? ``),
        [g, _] = P.useState(!1),
        v = d(
          t,
          s((e) => u.itemRefCallback?.(e, r, a)),
        ),
        y = k(),
        b = P.useRef(`touch`),
        x = B(() => {
          a || (l.onValueChange(r), l.onOpenChange(!1));
        }, `handleSelect`);
      return (0, R.jsx)(Ne, {
        scope: n,
        value: r,
        disabled: a,
        textId: y,
        isSelected: f,
        onItemTextChange: P.useCallback((e) => {
          h((t) => t || (e?.textContent ?? ``).trim());
        }, []),
        children: (0, R.jsx)(W.ItemSlot, {
          scope: n,
          value: r,
          disabled: a,
          textValue: m,
          children: (0, R.jsx)(p.div, {
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
                (H.includes(e.key) && x(), e.key === ` ` && e.preventDefault());
            }),
          }),
        }),
      });
    }, `SelectItem`),
  ),
  Ie = `SelectItemText`,
  Le = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, className: r, style: i, ...a } = e,
        c = J(Ie, n),
        l = Z(Ie, n),
        u = Pe(Ie, n),
        f = ae(Ie, n),
        [m, h] = P.useState(null),
        g = s((e) => l.itemTextRefCallback?.(e, u.value, u.disabled)),
        _ = d(t, h, u.onItemTextChange, g),
        v = m?.textContent,
        y = P.useMemo(
          () =>
            (0, R.jsx)(
              `option`,
              { value: u.value, disabled: u.disabled, children: v },
              u.value,
            ),
          [u.disabled, u.value, v],
        ),
        { onNativeOptionAdd: b, onNativeOptionRemove: x } = f;
      return (
        o(() => (b(y), () => x(y)), [b, x, y]),
        (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsx)(p.span, { id: u.textId, ...a, ref: _ }),
            u.isSelected &&
            c.valueNode &&
            !c.valueNodeHasChildren &&
            !Q(c.value)
              ? ee.createPortal(a.children, c.valueNode)
              : null,
          ],
        })
      );
    }, `SelectItemText`),
  ),
  Re = `SelectItemIndicator`,
  ze = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, ...r } = e;
      return Pe(Re, n).isSelected
        ? (0, R.jsx)(p.span, { "aria-hidden": !0, ...r, ref: t })
        : null;
    }, `SelectItemIndicator`),
  ),
  Be = `SelectScrollUpButton`,
  Ve = P.forwardRef(
    B(function (e, t) {
      let n = Z(Be, e.__scopeSelect),
        r = we(Be, e.__scopeSelect),
        [i, a] = P.useState(!1),
        s = d(t, r.onScrollButtonChange);
      return (
        o(() => {
          if (n.viewport && n.isPositioned) {
            let e = function () {
              let e = t.scrollTop > 0;
              a(e);
            };
            B(e, `handleScroll`);
            let t = n.viewport;
            return (
              e(),
              t.addEventListener(`scroll`, e),
              () => t.removeEventListener(`scroll`, e)
            );
          }
        }, [n.viewport, n.isPositioned]),
        i
          ? (0, R.jsx)(We, {
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
  Ue = P.forwardRef(
    B(function (e, t) {
      let n = Z(He, e.__scopeSelect),
        r = we(He, e.__scopeSelect),
        [i, a] = P.useState(!1),
        s = d(t, r.onScrollButtonChange);
      return (
        o(() => {
          if (n.viewport && n.isPositioned) {
            let e = function () {
              let e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n);
            };
            B(e, `handleScroll`);
            let t = n.viewport;
            return (
              e(),
              t.addEventListener(`scroll`, e),
              () => t.removeEventListener(`scroll`, e)
            );
          }
        }, [n.viewport, n.isPositioned]),
        i
          ? (0, R.jsx)(We, {
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
  We = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, onAutoScroll: r, ...a } = e,
        s = Z(`SelectScrollButton`, n),
        c = P.useRef(null),
        l = G(n),
        u = P.useCallback(() => {
          c.current !== null &&
            (window.clearInterval(c.current), (c.current = null));
        }, []);
      return (
        P.useEffect(() => () => u(), [u]),
        o(() => {
          l()
            .find((e) => e.ref.current === document.activeElement)
            ?.ref.current?.scrollIntoView({ block: `nearest` });
        }, [l]),
        (0, R.jsx)(p.div, {
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
  Ge = P.forwardRef(
    B(function (e, t) {
      let { __scopeSelect: n, ...r } = e;
      return (0, R.jsx)(p.div, { "aria-hidden": !0, ...r, ref: t });
    }, `SelectSeparator`),
  ),
  Ke = `SelectBubbleInput`,
  qe = P.forwardRef(
    B(function ({ __scopeSelect: e, ...t }, n) {
      let r = J(Ke, e),
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
        h = P.useRef(null),
        g = d(n, h),
        _ = i ?? ``,
        v = L(_),
        y = Array.from(f).some((e) => (e.props.value ?? ``) === ``);
      return (
        P.useEffect(() => {
          let e = h.current;
          if (!e) return;
          let t = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, `value`).set;
          if (v !== _ && n) {
            let t = new Event(`change`, { bubbles: !0 });
            (n.call(e, _), e.dispatchEvent(t));
          }
        }, [v, _]),
        (0, R.jsxs)(
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
            style: { ...T, ...t.style },
            ref: g,
            defaultValue: _,
            children: [
              Q(i) && !y ? (0, R.jsx)(`option`, { value: `` }) : null,
              Array.from(f),
            ],
          },
          m,
        )
      );
    }, `SelectBubbleInput`),
  );
