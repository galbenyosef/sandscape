// switch-CkslyoJe 02 — jsx
// Lines 146-1060 of readable/assets/switch-CkslyoJe.pretty.js (statement-aligned).
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
