// assets__index-BKDksszn 06 — current
// Lines 1521-1901 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
var cr = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: f,
      closeButton: p,
      style: m,
      cancelButtonStyle: h,
      actionButtonStyle: g,
      className: _ = ``,
      descriptionClassName: v = ``,
      duration: y,
      position: b,
      gap: x,
      loadingIcon: S,
      expandByDefault: C,
      classNames: w,
      icons: T,
      closeButtonAriaLabel: E = `Close toast`,
      pauseWhenPageIsHidden: D,
    } = e,
    [O, k] = U.useState(null),
    [A, ee] = U.useState(null),
    [j, M] = U.useState(!1),
    [N, P] = U.useState(!1),
    [te, ne] = U.useState(!1),
    [re, ie] = U.useState(!1),
    [ae, oe] = U.useState(!1),
    [se, ce] = U.useState(0),
    [F, le] = U.useState(0),
    ue = U.useRef(n.duration || y || nr),
    de = U.useRef(null),
    fe = U.useRef(null),
    pe = c === 0,
    me = c + 1 <= o,
    I = n.type,
    he = n.dismissible !== !1,
    ge = n.className || ``,
    _e = n.descriptionClassName || ``,
    ve = U.useMemo(
      () => s.findIndex((e) => e.toastId === n.id) || 0,
      [s, n.id],
    ),
    ye = U.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
    be = U.useMemo(() => n.duration || y || nr, [n.duration, y]),
    xe = U.useRef(0),
    L = U.useRef(0),
    Se = U.useRef(0),
    Ce = U.useRef(null),
    [we, Te] = b.split(`-`),
    Ee = U.useMemo(
      () => s.reduce((e, t, n) => (n >= ve ? e : e + t.height), 0),
      [s, ve],
    ),
    De = Kn(),
    Oe = n.invert || t,
    ke = I === `loading`;
  ((L.current = U.useMemo(() => ve * x + Ee, [ve, Ee])),
    U.useEffect(() => {
      ue.current = be;
    }, [be]),
    U.useEffect(() => {
      M(!0);
    }, []),
    U.useEffect(() => {
      let e = fe.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          le(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    U.useLayoutEffect(() => {
      if (!j) return;
      let e = fe.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        le(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [j, n.title, n.description, a, n.id]));
  let Ae = U.useCallback(() => {
    (P(!0),
      ce(L.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, or));
  }, [n, d, a, L]);
  (U.useEffect(() => {
    if (
      (n.promise && I === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || (D && De)
        ? (() => {
            if (Se.current < xe.current) {
              let e = new Date().getTime() - xe.current;
              ue.current -= e;
            }
            Se.current = new Date().getTime();
          })()
        : ue.current !== 1 / 0 &&
          ((xe.current = new Date().getTime()),
          (e = setTimeout(() => {
            var e;
            ((e = n.onAutoClose) == null || e.call(n, n), Ae());
          }, ue.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, I, D, De, Ae]),
    U.useEffect(() => {
      n.delete && Ae();
    }, [Ae, n.delete]));
  function je() {
    return T != null && T.loading
      ? U.createElement(
          `div`,
          {
            className: q(w?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": I === `loading`,
          },
          T.loading,
        )
      : S
        ? U.createElement(
            `div`,
            {
              className: q(w?.loader, n?.classNames?.loader, `sonner-loader`),
              "data-visible": I === `loading`,
            },
            S,
          )
        : U.createElement(Bn, {
            className: q(w?.loader, n?.classNames?.loader),
            visible: I === `loading`,
          });
  }
  return U.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: fe,
      className: q(
        _,
        ge,
        w?.toast,
        n?.classNames?.toast,
        w?.default,
        w?.[I],
        n?.classNames?.[I],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? f,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": j,
      "data-promise": !!n.promise,
      "data-swiped": ae,
      "data-removed": N,
      "data-visible": me,
      "data-y-position": we,
      "data-x-position": Te,
      "data-index": c,
      "data-front": pe,
      "data-swiping": te,
      "data-dismissible": he,
      "data-type": I,
      "data-invert": Oe,
      "data-swipe-out": re,
      "data-swipe-direction": A,
      "data-expanded": !!(u || (C && j)),
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${N ? se : L.current}px`,
        "--initial-height": C ? `auto` : `${F}px`,
        ...m,
        ...n.style,
      },
      onDragEnd: () => {
        (ne(!1), k(null), (Ce.current = null));
      },
      onPointerDown: (e) => {
        ke ||
          !he ||
          ((de.current = new Date()),
          ce(L.current),
          e.target.setPointerCapture(e.pointerId),
          e.target.tagName !== `BUTTON` &&
            (ne(!0), (Ce.current = { x: e.clientX, y: e.clientY })));
      },
      onPointerUp: () => {
        var e;
        if (re || !he) return;
        Ce.current = null;
        let t = Number(
            fe.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0,
          ),
          r = Number(
            fe.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0,
          ),
          i = new Date().getTime() - de.current?.getTime(),
          a = O === `x` ? t : r,
          o = Math.abs(a) / i;
        if (Math.abs(a) >= ar || o > 0.11) {
          (ce(L.current),
            (e = n.onDismiss) == null || e.call(n, n),
            ee(O === `x` ? (t > 0 ? `right` : `left`) : r > 0 ? `down` : `up`),
            Ae(),
            ie(!0),
            oe(!1));
          return;
        }
        (ne(!1), k(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!Ce.current || !he || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - Ce.current.y,
          a = t.clientX - Ce.current.x,
          o = e.swipeDirections ?? sr(b);
        !O &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          k(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 };
        (O === `y`
          ? (o.includes(`top`) || o.includes(`bottom`)) &&
            ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0)) &&
            (s.y = i)
          : O === `x` &&
            (o.includes(`left`) || o.includes(`right`)) &&
            ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0)) &&
            (s.x = a),
          (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && oe(!0),
          (n = fe.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = fe.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    ye && !n.jsx
      ? U.createElement(
          `button`,
          {
            "aria-label": E,
            "data-disabled": ke,
            "data-close-button": !0,
            onClick:
              ke || !he
                ? () => {}
                : () => {
                    var e;
                    (Ae(), (e = n.onDismiss) == null || e.call(n, n));
                  },
            className: q(w?.closeButton, n?.classNames?.closeButton),
          },
          T?.close ?? Gn,
        )
      : null,
    n.jsx || (0, U.isValidElement)(n.title)
      ? n.jsx
        ? n.jsx
        : typeof n.title == `function`
          ? n.title()
          : n.title
      : U.createElement(
          U.Fragment,
          null,
          I || n.icon || n.promise
            ? U.createElement(
                `div`,
                { "data-icon": ``, className: q(w?.icon, n?.classNames?.icon) },
                n.promise || (n.type === `loading` && !n.icon)
                  ? n.icon || je()
                  : null,
                n.type === `loading` ? null : n.icon || T?.[I] || Rn(I),
              )
            : null,
          U.createElement(
            `div`,
            {
              "data-content": ``,
              className: q(w?.content, n?.classNames?.content),
            },
            U.createElement(
              `div`,
              {
                "data-title": ``,
                className: q(w?.title, n?.classNames?.title),
              },
              typeof n.title == `function` ? n.title() : n.title,
            ),
            n.description
              ? U.createElement(
                  `div`,
                  {
                    "data-description": ``,
                    className: q(
                      v,
                      _e,
                      w?.description,
                      n?.classNames?.description,
                    ),
                  },
                  typeof n.description == `function`
                    ? n.description()
                    : n.description,
                )
              : null,
          ),
          (0, U.isValidElement)(n.cancel)
            ? n.cancel
            : n.cancel && Qn(n.cancel)
              ? U.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: n.cancelButtonStyle || h,
                    onClick: (e) => {
                      var t, r;
                      Qn(n.cancel) &&
                        he &&
                        ((r = (t = n.cancel).onClick) == null || r.call(t, e),
                        Ae());
                    },
                    className: q(w?.cancelButton, n?.classNames?.cancelButton),
                  },
                  n.cancel.label,
                )
              : null,
          (0, U.isValidElement)(n.action)
            ? n.action
            : n.action && Qn(n.action)
              ? U.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: n.actionButtonStyle || g,
                    onClick: (e) => {
                      var t, r;
                      Qn(n.action) &&
                        ((r = (t = n.action).onClick) == null || r.call(t, e),
                        !e.defaultPrevented && Ae());
                    },
                    className: q(w?.actionButton, n?.classNames?.actionButton),
                  },
                  n.action.label,
                )
              : null,
        ),
  );
};
