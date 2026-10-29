// index-BKDksszn 02 — current
// Lines 311-838 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
var ft = () => {
    let e = (0, U.useContext)(ct);
    if (e === void 0)
      throw Error(`useTheme must be used within a ThemeProvider`);
    return e;
  },
  pt = () => ft().resolvedTheme,
  mt = e(i(), 1),
  ht = Object.defineProperty,
  G = (e, t) => ht(e, `name`, { value: t, configurable: !0 }),
  gt = `ToastProvider`,
  [_t, vt, yt] = T(`Toast`),
  [bt, xt] = _(`Toast`, [yt]),
  [St, Ct] = bt(gt),
  wt = G((e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        announcerContainer: o,
        children: s,
      } = e,
      [c, l] = U.useState(null),
      [u, d] = U.useState(0),
      f = U.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${gt}\`. Expected non-empty \`string\`.`,
        ),
      (0, W.jsx)(_t.Provider, {
        scope: t,
        children: (0, W.jsx)(St, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: u,
          viewport: c,
          onViewportChange: l,
          onToastAdd: U.useCallback(() => d((e) => e + 1), []),
          onToastRemove: U.useCallback(() => d((e) => e - 1), []),
          isClosePausedRef: f,
          announcerContainer: o,
          children: s,
        }),
      })
    );
  }, `ToastProvider`),
  Tt = `ToastViewport`,
  Et = [`F8`],
  Dt = `toast.viewportPause`,
  Ot = `toast.viewportResume`,
  kt = U.forwardRef(
    G(function (e, t) {
      let {
          __scopeToast: n,
          hotkey: r = Et,
          label: i = `Notifications ({hotkey})`,
          ...a
        } = e,
        o = Ct(Tt, n),
        s = vt(n),
        c = U.useRef(null),
        l = U.useRef(null),
        u = U.useRef(null),
        d = U.useRef(null),
        f = S(t, d, o.onViewportChange),
        p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
        m = o.toastCount > 0;
      (U.useEffect(() => {
        let e = G((e) => {
          r.length !== 0 &&
            r.every((t) => e[t] || e.code === t) &&
            d.current?.focus();
        }, `handleKeyDown`);
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [r]),
        U.useEffect(() => {
          let e = c.current,
            t = d.current;
          if (m && e && t) {
            let n = G(() => {
                if (!o.isClosePausedRef.current) {
                  let e = new CustomEvent(Dt);
                  (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
                }
              }, `handlePause`),
              r = G(() => {
                if (o.isClosePausedRef.current) {
                  let e = new CustomEvent(Ot);
                  (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
                }
              }, `handleResume`),
              i = G((t) => {
                e.contains(t.relatedTarget) || r();
              }, `handleFocusOutResume`),
              a = G(() => {
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
      let h = U.useCallback(
        ({ tabbingDirection: e }) => {
          let t = s().map((t) => {
            let n = t.ref.current,
              r = [n, ...en(n)];
            return e === `forwards` ? r : r.reverse();
          });
          return (e === `forwards` ? t.reverse() : t).flat();
        },
        [s],
      );
      return (
        U.useEffect(() => {
          let e = d.current;
          if (e) {
            let t = G((t) => {
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
                tn(i.slice(a + 1))
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
        (0, W.jsxs)(k, {
          ref: c,
          role: `region`,
          "aria-label": i.replace(`{hotkey}`, p),
          tabIndex: -1,
          style: { pointerEvents: m ? void 0 : `none` },
          children: [
            m &&
              (0, W.jsx)(jt, {
                ref: l,
                onFocusFromOutsideViewport: () => {
                  tn(h({ tabbingDirection: `forwards` }));
                },
              }),
            (0, W.jsx)(_t.Slot, {
              scope: n,
              children: (0, W.jsx)(D.ol, { tabIndex: -1, ...a, ref: f }),
            }),
            m &&
              (0, W.jsx)(jt, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                  tn(h({ tabbingDirection: `backwards` }));
                },
              }),
          ],
        })
      );
    }, `ToastViewport`),
  ),
  At = `ToastFocusProxy`,
  jt = U.forwardRef(
    G(function (e, t) {
      let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
        a = Ct(At, n);
      return (0, W.jsx)(j, {
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
  Mt = `Toast`,
  Nt = `toast.swipeStart`,
  Pt = `toast.swipeMove`,
  Ft = `toast.swipeCancel`,
  It = `toast.swipeEnd`,
  Lt = U.forwardRef(
    G(function (e, t) {
      let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
        [s, c] = ee({ prop: r, defaultProp: i ?? !0, onChange: a, caller: Mt });
      return (0, W.jsx)(b, {
        present: n || s,
        children: (0, W.jsx)(Bt, {
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
  [Rt, zt] = bt(Mt, { onClose() {} }),
  Bt = U.forwardRef(
    G(function (e, t) {
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
        h = Ct(Mt, n),
        _ = vt(n),
        [v, b] = U.useState(null),
        x = S(t, b),
        C = U.useRef(null),
        w = U.useRef(null),
        T = i || h.duration,
        E = U.useRef(0),
        k = U.useRef(T),
        A = U.useRef(0),
        { onToastAdd: ee, onToastRemove: j } = h,
        M = y(() => {
          (v?.contains(document.activeElement) && h.viewport?.focus(), o());
        }),
        N = U.useCallback(
          (e) => {
            !e ||
              e === 1 / 0 ||
              (window.clearTimeout(A.current),
              (E.current = new Date().getTime()),
              (A.current = window.setTimeout(M, e)));
          },
          [M],
        );
      (U.useEffect(() => {
        let e = h.viewport;
        if (e) {
          let t = G(() => {
              (N(k.current), l?.());
            }, `handleResume`),
            n = G(() => {
              let e = new Date().getTime() - E.current;
              ((k.current -= e), window.clearTimeout(A.current), c?.());
            }, `handlePause`);
          return (
            e.addEventListener(Dt, n),
            e.addEventListener(Ot, t),
            () => {
              (e.removeEventListener(Dt, n), e.removeEventListener(Ot, t));
            }
          );
        }
      }, [h.viewport, T, c, l, N]),
        U.useEffect(() => {
          a && !h.isClosePausedRef.current && N(T);
        }, [a, T, h.isClosePausedRef, N]),
        U.useEffect(
          () => () => {
            window.clearTimeout(A.current);
          },
          [],
        ),
        U.useEffect(() => (ee(), () => j()), [ee, j]));
      let P = U.useMemo(() => (v ? Yt(v) : null), [v]);
      return h.viewport
        ? (0, W.jsxs)(W.Fragment, {
            children: [
              P &&
                (0, W.jsx)(Vt, {
                  __scopeToast: n,
                  role: `status`,
                  "aria-live": r === `foreground` ? `assertive` : `polite`,
                  children: P,
                }),
              (0, W.jsx)(Rt, {
                scope: n,
                onClose: M,
                children: mt.createPortal(
                  (0, W.jsx)(_t.ItemSlot, {
                    scope: n,
                    children: (0, W.jsx)(O, {
                      asChild: !0,
                      onEscapeKeyDown: g(s, (e) => {
                        _().some((t) => t.ref.current?.contains(e.target)) ||
                          M();
                      }),
                      children: (0, W.jsx)(D.li, {
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
                            ? ((w.current = l), Xt(Pt, d, f, { discrete: !1 }))
                            : Zt(l, h.swipeDirection, c)
                              ? ((w.current = l),
                                Xt(Nt, u, f, { discrete: !1 }),
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
                            (Zt(t, h.swipeDirection, h.swipeThreshold)
                              ? Xt(It, p, r, { discrete: !0 })
                              : Xt(Ft, f, r, { discrete: !0 }),
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
  Vt = G((e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = Ct(Mt, t),
      [a, o] = U.useState(!1),
      [s, c] = U.useState(!1);
    return (
      Qt(() => o(!0)),
      U.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, W.jsx)(A, {
            asChild: !0,
            container: i.announcerContainer || void 0,
            children: (0, W.jsx)(j, {
              ...r,
              children:
                a && (0, W.jsxs)(W.Fragment, { children: [i.label, ` `, n] }),
            }),
          })
    );
  }, `ToastAnnounce`),
  Ht = U.forwardRef(
    G(function (e, t) {
      let { __scopeToast: n, ...r } = e;
      return (0, W.jsx)(D.div, { ...r, ref: t });
    }, `ToastTitle`),
  ),
  Ut = U.forwardRef(
    G(function (e, t) {
      let { __scopeToast: n, ...r } = e;
      return (0, W.jsx)(D.div, { ...r, ref: t });
    }, `ToastDescription`),
  ),
  Wt = `ToastAction`,
  Gt = U.forwardRef(
    G(function (e, t) {
      let { altText: n, ...r } = e;
      return n.trim()
        ? (0, W.jsx)(Jt, {
            altText: n,
            asChild: !0,
            children: (0, W.jsx)(qt, { ...r, ref: t }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${Wt}\`. Expected non-empty \`string\`.`,
          ),
          null);
    }, `ToastAction`),
  ),
  Kt = `ToastClose`,
  qt = U.forwardRef(
    G(function (e, t) {
      let { __scopeToast: n, ...r } = e,
        i = zt(Kt, n);
      return (0, W.jsx)(Jt, {
        asChild: !0,
        children: (0, W.jsx)(D.button, {
          type: `button`,
          ...r,
          ref: t,
          onClick: g(e.onClick, i.onClose),
        }),
      });
    }, `ToastClose`),
  ),
  Jt = U.forwardRef(
    G(function (e, t) {
      let { __scopeToast: n, altText: r, ...i } = e;
      return (0, W.jsx)(D.div, {
        "data-radix-toast-announce-exclude": ``,
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t,
      });
    }, `ToastAnnounceExclude`),
  );
