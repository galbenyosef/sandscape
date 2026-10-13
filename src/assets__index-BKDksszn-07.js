// assets__index-BKDksszn 07 — current
// Lines 1902-2226 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function lr() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function ur(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? tr : er;
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
var dr = (0, U.forwardRef)(function (e, t) {
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
        duration: f,
        style: p,
        visibleToasts: m = $n,
        toastOptions: h,
        dir: g = lr(),
        gap: _ = ir,
        loadingIcon: v,
        icons: y,
        containerAriaLabel: b = `Notifications`,
        pauseWhenPageIsHidden: x,
      } = e,
      [S, C] = U.useState([]),
      w = U.useMemo(
        () =>
          Array.from(
            new Set(
              [r].concat(S.filter((e) => e.position).map((e) => e.position)),
            ),
          ),
        [S, r],
      ),
      [T, E] = U.useState([]),
      [D, O] = U.useState(!1),
      [k, A] = U.useState(!1),
      [ee, j] = U.useState(
        u === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : u,
      ),
      M = U.useRef(null),
      N = i.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      P = U.useRef(null),
      te = U.useRef(!1),
      ne = U.useCallback((e) => {
        C((t) => {
          var n;
          return (
            ((n = t.find((t) => t.id === e.id)) != null && n.delete) ||
              K.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          );
        });
      }, []);
    return (
      U.useEffect(
        () =>
          K.subscribe((e) => {
            if (e.dismiss) {
              C((t) =>
                t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
              );
              return;
            }
            setTimeout(() => {
              mt.flushSync(() => {
                C((t) => {
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
      U.useEffect(() => {
        if (u !== `system`) {
          j(u);
          return;
        }
        if (
          (u === `system` &&
            (window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? j(`dark`)
              : j(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            j(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              j(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [u]),
      U.useEffect(() => {
        S.length <= 1 && O(!1);
      }, [S]),
      U.useEffect(() => {
        let e = (e) => {
          var t, n;
          (i.every((t) => e[t] || e.code === t) &&
            (O(!0), (t = M.current) == null || t.focus()),
            e.code === `Escape` &&
              (document.activeElement === M.current ||
                ((n = M.current) != null &&
                  n.contains(document.activeElement))) &&
              O(!1));
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [i]),
      U.useEffect(() => {
        if (M.current)
          return () => {
            P.current &&
              (P.current.focus({ preventScroll: !0 }),
              (P.current = null),
              (te.current = !1));
          };
      }, [M.current]),
      U.createElement(
        `section`,
        {
          ref: t,
          "aria-label": `${b} ${N}`,
          tabIndex: -1,
          "aria-live": `polite`,
          "aria-relevant": `additions text`,
          "aria-atomic": `false`,
          suppressHydrationWarning: !0,
        },
        w.map((t, r) => {
          let [i, u] = t.split(`-`);
          return S.length
            ? U.createElement(
                `ol`,
                {
                  key: t,
                  dir: g === `auto` ? lr() : g,
                  tabIndex: -1,
                  ref: M,
                  className: s,
                  "data-sonner-toaster": !0,
                  "data-theme": ee,
                  "data-y-position": i,
                  "data-lifted": D && S.length > 1 && !a,
                  "data-x-position": u,
                  style: {
                    "--front-toast-height": `${T[0]?.height || 0}px`,
                    "--width": `${rr}px`,
                    "--gap": `${_}px`,
                    ...p,
                    ...ur(c, l),
                  },
                  onBlur: (e) => {
                    te.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((te.current = !1),
                      (P.current &&=
                        (P.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      te.current ||
                      ((te.current = !0), (P.current = e.relatedTarget));
                  },
                  onMouseEnter: () => O(!0),
                  onMouseMove: () => O(!0),
                  onMouseLeave: () => {
                    k || O(!1);
                  },
                  onDragEnd: () => O(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      A(!0);
                  },
                  onPointerUp: () => A(!1),
                },
                S.filter(
                  (e) => (!e.position && r === 0) || e.position === t,
                ).map((r, i) =>
                  U.createElement(cr, {
                    key: r.id,
                    icons: y,
                    index: i,
                    toast: r,
                    defaultRichColors: d,
                    duration: h?.duration ?? f,
                    className: h?.className,
                    descriptionClassName: h?.descriptionClassName,
                    invert: n,
                    visibleToasts: m,
                    closeButton: h?.closeButton ?? o,
                    interacting: k,
                    position: t,
                    style: h?.style,
                    unstyled: h?.unstyled,
                    classNames: h?.classNames,
                    cancelButtonStyle: h?.cancelButtonStyle,
                    actionButtonStyle: h?.actionButtonStyle,
                    removeToast: ne,
                    toasts: S.filter((e) => e.position == r.position),
                    heights: T.filter((e) => e.position == r.position),
                    setHeights: E,
                    expandByDefault: a,
                    gap: _,
                    loadingIcon: v,
                    expanded: D,
                    pauseWhenPageIsHidden: x,
                    swipeDirections: e.swipeDirections,
                  }),
                ),
              )
            : null;
        }),
      )
    );
  }),
  fr = ({ ...e }) => {
    let { theme: t = `system` } = ft();
    return (0, W.jsx)(dr, {
      theme: t,
      className: `toaster group`,
      toastOptions: {
        classNames: {
          toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          description: `group-[.toast]:text-muted-foreground`,
          actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
          cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
        },
      },
      ...e,
    });
  };
function pr(e, t, n) {
  return t === n ? e : `loading`;
}
function mr(e, t, n) {
  return t === n ? (e === `loading` ? `error` : e) : `error`;
}
function hr() {
  let e = 0;
  return {
    claim: () => (e += 1),
    invalidate: () => {
      e += 1;
    },
    isCurrent: (t) => t === e,
  };
}
function gr(e, t) {
  return t.kind === `granted` || (t.kind !== `revoked` && e);
}
var _r = (0, U.createContext)(void 0),
  vr = {
    username: null,
    canCreate: !1,
    requestedCreationAt: null,
    onboardingCompletedAt: null,
    codingAccess: !1,
    requestedCodingAccessAt: null,
  },
  yr = (e) => new Promise((t) => window.setTimeout(t, e));
async function br(e) {
  for (let t of [0, 100, 250]) {
    t && (await yr(t));
    let n = await w.getProfileAuthState(e);
    if (n) return n;
  }
  throw Error(`Profile was not created`);
}
