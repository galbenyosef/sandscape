// dnd-CfiPSimc 05 — current
// Lines 782-1116 of readable/assets/dnd-CfiPSimc.pretty.js (statement-aligned).
function ie() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function ae(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? j : A;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var L = (0, f.forwardRef)(function (e, t) {
    let {
        invert: n,
        position: r = `bottom-right`,
        hotkey: i = [`altKey`, `KeyT`],
        expand: a,
        closeButton: o,
        className: s,
        offset: c,
        mobileOffset: l,
        theme: u = `light`,
        richColors: d,
        duration: m,
        style: h,
        visibleToasts: g = k,
        toastOptions: _,
        dir: v = ie(),
        gap: y = N,
        loadingIcon: b,
        icons: x,
        containerAriaLabel: S = `Notifications`,
        pauseWhenPageIsHidden: C,
      } = e,
      [T, E] = f.useState([]),
      ee = f.useMemo(
        () =>
          Array.from(
            new Set(
              [r].concat(T.filter((e) => e.position).map((e) => e.position)),
            ),
          ),
        [T, r],
      ),
      [D, O] = f.useState([]),
      [A, j] = f.useState(!1),
      [M, ne] = f.useState(!1),
      [re, P] = f.useState(
        u === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : u,
      ),
      F = f.useRef(null),
      L = i.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      R = f.useRef(null),
      z = f.useRef(!1),
      oe = f.useCallback((e) => {
        E((t) => {
          var n;
          return (
            ((n = t.find((t) => t.id === e.id)) != null && n.delete) ||
              w.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          );
        });
      }, []);
    return (
      f.useEffect(
        () =>
          w.subscribe((e) => {
            if (e.dismiss) {
              E((t) =>
                t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
              );
              return;
            }
            setTimeout(() => {
              p.flushSync(() => {
                E((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        [],
      ),
      f.useEffect(() => {
        if (u !== `system`) {
          P(u);
          return;
        }
        if (
          (u === `system` &&
            (window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? P(`dark`)
              : P(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            P(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              P(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [u]),
      f.useEffect(() => {
        T.length <= 1 && j(!1);
      }, [T]),
      f.useEffect(() => {
        let e = (e) => {
          var t, n;
          (i.every((t) => e[t] || e.code === t) &&
            (j(!0), (t = F.current) == null || t.focus()),
            e.code === `Escape` &&
              (document.activeElement === F.current ||
                ((n = F.current) != null &&
                  n.contains(document.activeElement))) &&
              j(!1));
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [i]),
      f.useEffect(() => {
        if (F.current)
          return () => {
            R.current &&
              (R.current.focus({ preventScroll: !0 }),
              (R.current = null),
              (z.current = !1));
          };
      }, [F.current]),
      f.createElement(
        `section`,
        {
          ref: t,
          "aria-label": `${S} ${L}`,
          tabIndex: -1,
          "aria-live": `polite`,
          "aria-relevant": `additions text`,
          "aria-atomic": `false`,
          suppressHydrationWarning: !0,
        },
        ee.map((t, r) => {
          let [i, u] = t.split(`-`);
          return T.length
            ? f.createElement(
                `ol`,
                {
                  key: t,
                  dir: v === `auto` ? ie() : v,
                  tabIndex: -1,
                  ref: F,
                  className: s,
                  "data-sonner-toaster": !0,
                  "data-theme": re,
                  "data-y-position": i,
                  "data-lifted": A && T.length > 1 && !a,
                  "data-x-position": u,
                  style: {
                    "--front-toast-height": `${D[0]?.height || 0}px`,
                    "--width": `${te}px`,
                    "--gap": `${y}px`,
                    ...h,
                    ...ae(c, l),
                  },
                  onBlur: (e) => {
                    z.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((z.current = !1),
                      (R.current &&=
                        (R.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      z.current ||
                      ((z.current = !0), (R.current = e.relatedTarget));
                  },
                  onMouseEnter: () => j(!0),
                  onMouseMove: () => j(!0),
                  onMouseLeave: () => {
                    M || j(!1);
                  },
                  onDragEnd: () => j(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      ne(!0);
                  },
                  onPointerUp: () => ne(!1),
                },
                T.filter(
                  (e) => (!e.position && r === 0) || e.position === t,
                ).map((r, i) =>
                  f.createElement(I, {
                    key: r.id,
                    icons: x,
                    index: i,
                    toast: r,
                    defaultRichColors: d,
                    duration: _?.duration ?? m,
                    className: _?.className,
                    descriptionClassName: _?.descriptionClassName,
                    invert: n,
                    visibleToasts: g,
                    closeButton: _?.closeButton ?? o,
                    interacting: M,
                    position: t,
                    style: _?.style,
                    unstyled: _?.unstyled,
                    classNames: _?.classNames,
                    cancelButtonStyle: _?.cancelButtonStyle,
                    actionButtonStyle: _?.actionButtonStyle,
                    removeToast: oe,
                    toasts: T.filter((e) => e.position == r.position),
                    heights: D.filter((e) => e.position == r.position),
                    setHeights: O,
                    expandByDefault: a,
                    gap: y,
                    loadingIcon: b,
                    expanded: A,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  }),
                ),
              )
            : null;
        }),
      )
    );
  }),
  R = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          ((t =
            (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e)));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  },
  z = (e) => (e ? R(e) : R),
  oe = (e) => e;
function se(e, t = oe) {
  let n = f.useSyncExternalStore(
    e.subscribe,
    f.useCallback(() => t(e.getState()), [e, t]),
    f.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return (f.useDebugValue(n), n);
}
var B = (e) => {
    let t = z(e),
      n = (e) => se(t, e);
    return (Object.assign(n, t), n);
  },
  ce = (e) => (e ? B(e) : B),
  le = {
    active: !1,
    kind: null,
    payload: null,
    pointer: { x: 0, y: 0 },
    hoveredZoneId: null,
    canDrop: !1,
  },
  V = ce((e) => ({
    ...le,
    begin: (t, n, r, i) =>
      e({
        active: !0,
        kind: t,
        payload: n,
        pointer: { x: r, y: i },
        hoveredZoneId: null,
        canDrop: !1,
      }),
    setPointer: (t, n) => e({ pointer: { x: t, y: n } }),
    setHover: (t, n) => e({ hoveredZoneId: t, canDrop: n }),
    clear: () => e(le),
  })),
  H = n(),
  ue = 14;
