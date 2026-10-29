// dnd-CfiPSimc 04 — current
// Lines 404-781 of readable/assets/dnd-CfiPSimc.pretty.js (statement-aligned).
var I = (e) => {
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
      defaultRichColors: p,
      closeButton: h,
      style: _,
      cancelButtonStyle: v,
      actionButtonStyle: y,
      className: b = ``,
      descriptionClassName: C = ``,
      duration: w,
      position: T,
      gap: E,
      loadingIcon: ee,
      expandByDefault: D,
      classNames: k,
      icons: A,
      closeButtonAriaLabel: j = `Close toast`,
      pauseWhenPageIsHidden: te,
    } = e,
    [N, I] = f.useState(null),
    [ie, ae] = f.useState(null),
    [L, R] = f.useState(!1),
    [z, oe] = f.useState(!1),
    [se, B] = f.useState(!1),
    [ce, le] = f.useState(!1),
    [V, H] = f.useState(!1),
    [ue, U] = f.useState(0),
    [de, W] = f.useState(0),
    G = f.useRef(n.duration || w || M),
    fe = f.useRef(null),
    K = f.useRef(null),
    pe = c === 0,
    me = c + 1 <= o,
    q = n.type,
    J = n.dismissible !== !1,
    he = n.className || ``,
    ge = n.descriptionClassName || ``,
    Y = f.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]),
    _e = f.useMemo(() => n.closeButton ?? h, [n.closeButton, h]),
    ve = f.useMemo(() => n.duration || w || M, [n.duration, w]),
    X = f.useRef(0),
    Z = f.useRef(0),
    ye = f.useRef(0),
    Q = f.useRef(null),
    [be, xe] = T.split(`-`),
    Se = f.useMemo(
      () => s.reduce((e, t, n) => (n >= Y ? e : e + t.height), 0),
      [s, Y],
    ),
    Ce = S(),
    we = n.invert || t,
    Te = q === `loading`;
  ((Z.current = f.useMemo(() => Y * E + Se, [Y, Se])),
    f.useEffect(() => {
      G.current = ve;
    }, [ve]),
    f.useEffect(() => {
      R(!0);
    }, []),
    f.useEffect(() => {
      let e = K.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          W(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    f.useLayoutEffect(() => {
      if (!L) return;
      let e = K.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        W(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [L, n.title, n.description, a, n.id]));
  let $ = f.useCallback(() => {
    (oe(!0),
      U(Z.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, re));
  }, [n, d, a, Z]);
  (f.useEffect(() => {
    if (
      (n.promise && q === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || (te && Ce)
        ? (() => {
            if (ye.current < X.current) {
              let e = new Date().getTime() - X.current;
              G.current -= e;
            }
            ye.current = new Date().getTime();
          })()
        : G.current !== 1 / 0 &&
          ((X.current = new Date().getTime()),
          (e = setTimeout(() => {
            var e;
            ((e = n.onAutoClose) == null || e.call(n, n), $());
          }, G.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, q, te, Ce, $]),
    f.useEffect(() => {
      n.delete && $();
    }, [$, n.delete]));
  function Ee() {
    return A != null && A.loading
      ? f.createElement(
          `div`,
          {
            className: P(k?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": q === `loading`,
          },
          A.loading,
        )
      : ee
        ? f.createElement(
            `div`,
            {
              className: P(k?.loader, n?.classNames?.loader, `sonner-loader`),
              "data-visible": q === `loading`,
            },
            ee,
          )
        : f.createElement(g, {
            className: P(k?.loader, n?.classNames?.loader),
            visible: q === `loading`,
          });
  }
  return f.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: K,
      className: P(
        b,
        he,
        k?.toast,
        n?.classNames?.toast,
        k?.default,
        k?.[q],
        n?.classNames?.[q],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? p,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": L,
      "data-promise": !!n.promise,
      "data-swiped": V,
      "data-removed": z,
      "data-visible": me,
      "data-y-position": be,
      "data-x-position": xe,
      "data-index": c,
      "data-front": pe,
      "data-swiping": se,
      "data-dismissible": J,
      "data-type": q,
      "data-invert": we,
      "data-swipe-out": ce,
      "data-swipe-direction": ie,
      "data-expanded": !!(u || (D && L)),
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${z ? ue : Z.current}px`,
        "--initial-height": D ? `auto` : `${de}px`,
        ..._,
        ...n.style,
      },
      onDragEnd: () => {
        (B(!1), I(null), (Q.current = null));
      },
      onPointerDown: (e) => {
        Te ||
          !J ||
          ((fe.current = new Date()),
          U(Z.current),
          e.target.setPointerCapture(e.pointerId),
          e.target.tagName !== `BUTTON` &&
            (B(!0), (Q.current = { x: e.clientX, y: e.clientY })));
      },
      onPointerUp: () => {
        var e;
        if (ce || !J) return;
        Q.current = null;
        let t = Number(
            K.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0,
          ),
          r = Number(
            K.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0,
          ),
          i = new Date().getTime() - fe.current?.getTime(),
          a = N === `x` ? t : r,
          o = Math.abs(a) / i;
        if (Math.abs(a) >= ne || o > 0.11) {
          (U(Z.current),
            (e = n.onDismiss) == null || e.call(n, n),
            ae(N === `x` ? (t > 0 ? `right` : `left`) : r > 0 ? `down` : `up`),
            $(),
            le(!0),
            H(!1));
          return;
        }
        (B(!1), I(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!Q.current || !J || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - Q.current.y,
          a = t.clientX - Q.current.x,
          o = e.swipeDirections ?? F(T);
        !N &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          I(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 };
        (N === `y`
          ? (o.includes(`top`) || o.includes(`bottom`)) &&
            ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0)) &&
            (s.y = i)
          : N === `x` &&
            (o.includes(`left`) || o.includes(`right`)) &&
            ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0)) &&
            (s.x = a),
          (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && H(!0),
          (n = K.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = K.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    _e && !n.jsx
      ? f.createElement(
          `button`,
          {
            "aria-label": j,
            "data-disabled": Te,
            "data-close-button": !0,
            onClick:
              Te || !J
                ? () => {}
                : () => {
                    var e;
                    ($(), (e = n.onDismiss) == null || e.call(n, n));
                  },
            className: P(k?.closeButton, n?.classNames?.closeButton),
          },
          A?.close ?? x,
        )
      : null,
    n.jsx || (0, f.isValidElement)(n.title)
      ? n.jsx
        ? n.jsx
        : typeof n.title == `function`
          ? n.title()
          : n.title
      : f.createElement(
          f.Fragment,
          null,
          q || n.icon || n.promise
            ? f.createElement(
                `div`,
                { "data-icon": ``, className: P(k?.icon, n?.classNames?.icon) },
                n.promise || (n.type === `loading` && !n.icon)
                  ? n.icon || Ee()
                  : null,
                n.type === `loading` ? null : n.icon || A?.[q] || m(q),
              )
            : null,
          f.createElement(
            `div`,
            {
              "data-content": ``,
              className: P(k?.content, n?.classNames?.content),
            },
            f.createElement(
              `div`,
              {
                "data-title": ``,
                className: P(k?.title, n?.classNames?.title),
              },
              typeof n.title == `function` ? n.title() : n.title,
            ),
            n.description
              ? f.createElement(
                  `div`,
                  {
                    "data-description": ``,
                    className: P(
                      C,
                      ge,
                      k?.description,
                      n?.classNames?.description,
                    ),
                  },
                  typeof n.description == `function`
                    ? n.description()
                    : n.description,
                )
              : null,
          ),
          (0, f.isValidElement)(n.cancel)
            ? n.cancel
            : n.cancel && O(n.cancel)
              ? f.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: n.cancelButtonStyle || v,
                    onClick: (e) => {
                      var t, r;
                      O(n.cancel) &&
                        J &&
                        ((r = (t = n.cancel).onClick) == null || r.call(t, e),
                        $());
                    },
                    className: P(k?.cancelButton, n?.classNames?.cancelButton),
                  },
                  n.cancel.label,
                )
              : null,
          (0, f.isValidElement)(n.action)
            ? n.action
            : n.action && O(n.action)
              ? f.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: n.actionButtonStyle || y,
                    onClick: (e) => {
                      var t, r;
                      O(n.action) &&
                        ((r = (t = n.action).onClick) == null || r.call(t, e),
                        !e.defaultPrevented && $());
                    },
                    className: P(k?.actionButton, n?.classNames?.actionButton),
                  },
                  n.action.label,
                )
              : null,
        ),
  );
};
