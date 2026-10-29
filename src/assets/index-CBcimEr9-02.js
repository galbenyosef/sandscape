// index-CBcimEr9 02 — current
// Lines 318-845 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var _t = () => {
    let e = (0, H.useContext)(pt);
    if (e === void 0)
      throw Error(`useTheme must be used within a ThemeProvider`);
    return e;
  },
  vt = () => _t().resolvedTheme,
  yt = e(i(), 1),
  bt = Object.defineProperty,
  W = (e, t) => bt(e, `name`, { value: t, configurable: !0 }),
  xt = `ToastProvider`,
  [St, Ct, wt] = T(`Toast`),
  [Tt, Et] = _(`Toast`, [wt]),
  [Dt, Ot] = Tt(xt),
  kt = W((e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        announcerContainer: o,
        children: s,
      } = e,
      [c, l] = H.useState(null),
      [u, d] = H.useState(0),
      f = H.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${xt}\`. Expected non-empty \`string\`.`,
        ),
      (0, U.jsx)(St.Provider, {
        scope: t,
        children: (0, U.jsx)(Dt, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: u,
          viewport: c,
          onViewportChange: l,
          onToastAdd: H.useCallback(() => d((e) => e + 1), []),
          onToastRemove: H.useCallback(() => d((e) => e - 1), []),
          isClosePausedRef: f,
          announcerContainer: o,
          children: s,
        }),
      })
    );
  }, `ToastProvider`),
  At = `ToastViewport`,
  jt = [`F8`],
  Mt = `toast.viewportPause`,
  Nt = `toast.viewportResume`,
  Pt = H.forwardRef(
    W(function (e, t) {
      let {
          __scopeToast: n,
          hotkey: r = jt,
          label: i = `Notifications ({hotkey})`,
          ...a
        } = e,
        o = Ot(At, n),
        s = Ct(n),
        c = H.useRef(null),
        l = H.useRef(null),
        u = H.useRef(null),
        d = H.useRef(null),
        f = S(t, d, o.onViewportChange),
        p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
        m = o.toastCount > 0;
      (H.useEffect(() => {
        let e = W((e) => {
          r.length !== 0 &&
            r.every((t) => e[t] || e.code === t) &&
            d.current?.focus();
        }, `handleKeyDown`);
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [r]),
        H.useEffect(() => {
          let e = c.current,
            t = d.current;
          if (m && e && t) {
            let n = W(() => {
                if (!o.isClosePausedRef.current) {
                  let e = new CustomEvent(Mt);
                  (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
                }
              }, `handlePause`),
              r = W(() => {
                if (o.isClosePausedRef.current) {
                  let e = new CustomEvent(Nt);
                  (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
                }
              }, `handleResume`),
              i = W((t) => {
                e.contains(t.relatedTarget) || r();
              }, `handleFocusOutResume`),
              a = W(() => {
                e.contains(document.activeElement) || r();
              }, `handlePointerLeaveResume`);
            return (
              e.addEventListener(`focusin`, n),
              e.addEventListener(`focusout`, i),
              e.addEventListener(`pointermove`, n),
              e.addEventListener(`pointerleave`, a),
              window.addEventListener(`blur`, n),
              window.addEventListener(`focus`, r),
              () => {
                (e.removeEventListener(`focusin`, n),
                  e.removeEventListener(`focusout`, i),
                  e.removeEventListener(`pointermove`, n),
                  e.removeEventListener(`pointerleave`, a),
                  window.removeEventListener(`blur`, n),
                  window.removeEventListener(`focus`, r));
              }
            );
          }
        }, [m, o.isClosePausedRef]));
      let h = H.useCallback(
        ({ tabbingDirection: e }) => {
          let t = s().map((t) => {
            let n = t.ref.current,
              r = [n, ...on(n)];
            return e === `forwards` ? r : r.reverse();
          });
          return (e === `forwards` ? t.reverse() : t).flat();
        },
        [s],
      );
      return (
        H.useEffect(() => {
          let e = d.current;
          if (e) {
            let t = W((t) => {
              let n = t.altKey || t.ctrlKey || t.metaKey;
              if (t.key === `Tab` && !n) {
                let n = document.activeElement,
                  r = t.shiftKey;
                if (t.target === e && r) {
                  l.current?.focus();
                  return;
                }
                let i = h({ tabbingDirection: r ? `backwards` : `forwards` }),
                  a = i.findIndex((e) => e === n);
                sn(i.slice(a + 1))
                  ? t.preventDefault()
                  : r
                    ? l.current?.focus()
                    : u.current?.focus();
              }
            }, `handleKeyDown`);
            return (
              e.addEventListener(`keydown`, t),
              () => e.removeEventListener(`keydown`, t)
            );
          }
        }, [s, h]),
        (0, U.jsxs)(k, {
          ref: c,
          role: `region`,
          "aria-label": i.replace(`{hotkey}`, p),
          tabIndex: -1,
          style: { pointerEvents: m ? void 0 : `none` },
          children: [
            m &&
              (0, U.jsx)(It, {
                ref: l,
                onFocusFromOutsideViewport: () => {
                  sn(h({ tabbingDirection: `forwards` }));
                },
              }),
            (0, U.jsx)(St.Slot, {
              scope: n,
              children: (0, U.jsx)(D.ol, { tabIndex: -1, ...a, ref: f }),
            }),
            m &&
              (0, U.jsx)(It, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                  sn(h({ tabbingDirection: `backwards` }));
                },
              }),
          ],
        })
      );
    }, `ToastViewport`),
  ),
  Ft = `ToastFocusProxy`,
  It = H.forwardRef(
    W(function (e, t) {
      let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
        a = Ot(Ft, n);
      return (0, U.jsx)(ee, {
        tabIndex: 0,
        ...i,
        ref: t,
        style: { position: `fixed` },
        onFocus: (e) => {
          let t = e.relatedTarget;
          a.viewport?.contains(t) || r();
        },
      });
    }, `ToastFocusProxy`),
  ),
  Lt = `Toast`,
  Rt = `toast.swipeStart`,
  zt = `toast.swipeMove`,
  Bt = `toast.swipeCancel`,
  Vt = `toast.swipeEnd`,
  Ht = H.forwardRef(
    W(function (e, t) {
      let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
        [s, c] = j({ prop: r, defaultProp: i ?? !0, onChange: a, caller: Lt });
      return (0, U.jsx)(b, {
        present: n || s,
        children: (0, U.jsx)(Gt, {
          open: s,
          ...o,
          ref: t,
          onClose: () => c(!1),
          onPause: y(e.onPause),
          onResume: y(e.onResume),
          onSwipeStart: g(e.onSwipeStart, (e) => {
            e.currentTarget.setAttribute(`data-swipe`, `start`);
          }),
          onSwipeMove: g(e.onSwipeMove, (e) => {
            let { x: t, y: n } = e.detail.delta;
            (e.currentTarget.setAttribute(`data-swipe`, `move`),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-move-x`,
                `${t}px`,
              ),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-move-y`,
                `${n}px`,
              ));
          }),
          onSwipeCancel: g(e.onSwipeCancel, (e) => {
            (e.currentTarget.setAttribute(`data-swipe`, `cancel`),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-x`,
              ),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-y`,
              ),
              e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-end-y`,
              ));
          }),
          onSwipeEnd: g(e.onSwipeEnd, (e) => {
            let { x: t, y: n } = e.detail.delta;
            (e.currentTarget.setAttribute(`data-swipe`, `end`),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-x`,
              ),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-y`,
              ),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-end-x`,
                `${t}px`,
              ),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-end-y`,
                `${n}px`,
              ),
              c(!1));
          }),
        }),
      });
    }, `Toast`),
  ),
  [Ut, Wt] = Tt(Lt, { onClose() {} }),
  Gt = H.forwardRef(
    W(function (e, t) {
      let {
          __scopeToast: n,
          type: r = `foreground`,
          duration: i,
          open: a,
          onClose: o,
          onEscapeKeyDown: s,
          onPause: c,
          onResume: l,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...m
        } = e,
        h = Ot(Lt, n),
        _ = Ct(n),
        [v, b] = H.useState(null),
        x = S(t, b),
        C = H.useRef(null),
        w = H.useRef(null),
        T = i || h.duration,
        E = H.useRef(0),
        k = H.useRef(T),
        A = H.useRef(0),
        { onToastAdd: j, onToastRemove: ee } = h,
        M = y(() => {
          (v?.contains(document.activeElement) && h.viewport?.focus(), o());
        }),
        N = H.useCallback(
          (e) => {
            !e ||
              e === 1 / 0 ||
              (window.clearTimeout(A.current),
              (E.current = new Date().getTime()),
              (A.current = window.setTimeout(M, e)));
          },
          [M],
        );
      (H.useEffect(() => {
        let e = h.viewport;
        if (e) {
          let t = W(() => {
              (N(k.current), l?.());
            }, `handleResume`),
            n = W(() => {
              let e = new Date().getTime() - E.current;
              ((k.current -= e), window.clearTimeout(A.current), c?.());
            }, `handlePause`);
          return (
            e.addEventListener(Mt, n),
            e.addEventListener(Nt, t),
            () => {
              (e.removeEventListener(Mt, n), e.removeEventListener(Nt, t));
            }
          );
        }
      }, [h.viewport, T, c, l, N]),
        H.useEffect(() => {
          a && !h.isClosePausedRef.current && N(T);
        }, [a, T, h.isClosePausedRef, N]),
        H.useEffect(
          () => () => {
            window.clearTimeout(A.current);
          },
          [],
        ),
        H.useEffect(() => (j(), () => ee()), [j, ee]));
      let P = H.useMemo(() => (v ? en(v) : null), [v]);
      return h.viewport
        ? (0, U.jsxs)(U.Fragment, {
            children: [
              P &&
                (0, U.jsx)(Kt, {
                  __scopeToast: n,
                  role: `status`,
                  "aria-live": r === `foreground` ? `assertive` : `polite`,
                  children: P,
                }),
              (0, U.jsx)(Ut, {
                scope: n,
                onClose: M,
                children: yt.createPortal(
                  (0, U.jsx)(St.ItemSlot, {
                    scope: n,
                    children: (0, U.jsx)(O, {
                      asChild: !0,
                      onEscapeKeyDown: g(s, (e) => {
                        _().some((t) => t.ref.current?.contains(e.target)) ||
                          M();
                      }),
                      children: (0, U.jsx)(D.li, {
                        tabIndex: 0,
                        "data-state": a ? `open` : `closed`,
                        "data-swipe-direction": h.swipeDirection,
                        ...m,
                        ref: x,
                        style: {
                          userSelect: `none`,
                          touchAction: `none`,
                          ...e.style,
                        },
                        onKeyDown: g(e.onKeyDown, (e) => {
                          e.key === `Escape` &&
                            (s?.(e.nativeEvent),
                            e.nativeEvent.defaultPrevented || M());
                        }),
                        onPointerDown: g(e.onPointerDown, (e) => {
                          e.button === 0 &&
                            (C.current = { x: e.clientX, y: e.clientY });
                        }),
                        onPointerMove: g(e.onPointerMove, (e) => {
                          if (!C.current) return;
                          let t = e.clientX - C.current.x,
                            n = e.clientY - C.current.y,
                            r = !!w.current,
                            i = [`left`, `right`].includes(h.swipeDirection),
                            a = [`left`, `up`].includes(h.swipeDirection)
                              ? Math.min
                              : Math.max,
                            o = i ? a(0, t) : 0,
                            s = i ? 0 : a(0, n),
                            c = e.pointerType === `touch` ? 10 : 2,
                            l = { x: o, y: s },
                            f = { originalEvent: e, delta: l };
                          r
                            ? ((w.current = l), tn(zt, d, f, { discrete: !1 }))
                            : nn(l, h.swipeDirection, c)
                              ? ((w.current = l),
                                tn(Rt, u, f, { discrete: !1 }),
                                e.target.setPointerCapture(e.pointerId))
                              : (Math.abs(t) > c || Math.abs(n) > c) &&
                                (C.current = null);
                        }),
                        onPointerUp: g(e.onPointerUp, (e) => {
                          let t = w.current,
                            n = e.target;
                          if (
                            (n.hasPointerCapture(e.pointerId) &&
                              n.releasePointerCapture(e.pointerId),
                            (w.current = null),
                            (C.current = null),
                            t)
                          ) {
                            let n = e.currentTarget,
                              r = { originalEvent: e, delta: t };
                            (nn(t, h.swipeDirection, h.swipeThreshold)
                              ? tn(Vt, p, r, { discrete: !0 })
                              : tn(Bt, f, r, { discrete: !0 }),
                              n.addEventListener(
                                `click`,
                                (e) => e.preventDefault(),
                                { once: !0 },
                              ));
                          }
                        }),
                      }),
                    }),
                  }),
                  h.viewport,
                ),
              }),
            ],
          })
        : null;
    }, `ToastImpl`),
  ),
  Kt = W((e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = Ot(Lt, t),
      [a, o] = H.useState(!1),
      [s, c] = H.useState(!1);
    return (
      rn(() => o(!0)),
      H.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, U.jsx)(A, {
            asChild: !0,
            container: i.announcerContainer || void 0,
            children: (0, U.jsx)(ee, {
              ...r,
              children:
                a && (0, U.jsxs)(U.Fragment, { children: [i.label, ` `, n] }),
            }),
          })
    );
  }, `ToastAnnounce`),
  qt = H.forwardRef(
    W(function (e, t) {
      let { __scopeToast: n, ...r } = e;
      return (0, U.jsx)(D.div, { ...r, ref: t });
    }, `ToastTitle`),
  ),
  Jt = H.forwardRef(
    W(function (e, t) {
      let { __scopeToast: n, ...r } = e;
      return (0, U.jsx)(D.div, { ...r, ref: t });
    }, `ToastDescription`),
  ),
  Yt = `ToastAction`,
  Xt = H.forwardRef(
    W(function (e, t) {
      let { altText: n, ...r } = e;
      return n.trim()
        ? (0, U.jsx)($t, {
            altText: n,
            asChild: !0,
            children: (0, U.jsx)(Qt, { ...r, ref: t }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${Yt}\`. Expected non-empty \`string\`.`,
          ),
          null);
    }, `ToastAction`),
  ),
  Zt = `ToastClose`,
  Qt = H.forwardRef(
    W(function (e, t) {
      let { __scopeToast: n, ...r } = e,
        i = Wt(Zt, n);
      return (0, U.jsx)($t, {
        asChild: !0,
        children: (0, U.jsx)(D.button, {
          type: `button`,
          ...r,
          ref: t,
          onClick: g(e.onClick, i.onClose),
        }),
      });
    }, `ToastClose`),
  ),
  $t = H.forwardRef(
    W(function (e, t) {
      let { __scopeToast: n, altText: r, ...i } = e;
      return (0, U.jsx)(D.div, {
        "data-radix-toast-announce-exclude": ``,
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t,
      });
    }, `ToastAnnounceExclude`),
  );
