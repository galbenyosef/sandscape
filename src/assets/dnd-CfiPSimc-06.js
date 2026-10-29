// dnd-CfiPSimc 06 — current
// Lines 1117-1466 of readable/assets/dnd-CfiPSimc.pretty.js (statement-aligned).
function U() {
  let e = V((e) => e.active),
    t = V((e) => e.pointer),
    n = K();
  return e
    ? (0, p.createPortal)(
        (0, H.jsx)(`div`, {
          className: `fixed left-0 top-0 z-[100] pointer-events-none`,
          style: {
            transform: `translate3d(${t.x + ue}px, ${t.y + ue}px, 0) scale(1.02)`,
            opacity: 0.92,
            filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.55))`,
            willChange: `transform`,
          },
          children: n.current,
        }),
        document.body,
      )
    : null;
}
var de = (0, f.createContext)(null),
  W = 36,
  G = 18,
  fe = (0, f.createContext)(null);
function K() {
  let e = (0, f.useContext)(fe);
  if (!e) throw Error(`useDragGhost must be used within <DragProvider>`);
  return e;
}
function pe() {
  let e = (0, f.useContext)(de);
  if (!e) throw Error(`useDragContext must be used within <DragProvider>`);
  return e;
}
function me(e, t) {
  let n = e;
  for (; n && n !== document.body && n instanceof HTMLElement;) {
    let e = getComputedStyle(n),
      r = t === `y` ? e.overflowY : e.overflowX,
      i = r === `auto` || r === `scroll`,
      a =
        t === `y`
          ? n.scrollHeight > n.clientHeight
          : n.scrollWidth > n.clientWidth;
    if (i && a) return n;
    n = n.parentElement;
  }
  let r = document.scrollingElement;
  return r &&
    (t === `y`
      ? r.scrollHeight > r.clientHeight
      : r.scrollWidth > r.clientWidth)
    ? r
    : null;
}
function q(e) {
  if (e === document.scrollingElement || e === document.documentElement)
    return {
      top: 0,
      bottom: window.innerHeight,
      left: 0,
      right: window.innerWidth,
    };
  let t = e.getBoundingClientRect();
  return { top: t.top, bottom: t.bottom, left: t.left, right: t.right };
}
function J({ children: e }) {
  let t = (0, f.useRef)(new Map()),
    n = (0, f.useRef)(null),
    r = (0, f.useRef)(null),
    i = (0, f.useRef)(null),
    a = (0, f.useRef)(null),
    o = V,
    s = (0, f.useCallback)(() => {
      (i.current !== null &&
        (cancelAnimationFrame(i.current), (i.current = null)),
        (a.current = null));
    }, []),
    c = (0, f.useCallback)(() => {
      i.current = null;
      let e = a.current;
      if (!e) return;
      let t = document.elementFromPoint(e.x, e.y),
        n = me(t, `y`),
        r = me(t, `x`),
        o = !1;
      if (n) {
        let t = q(n);
        e.y - t.top < W
          ? ((n.scrollTop -= G), (o = !0))
          : t.bottom - e.y < W && ((n.scrollTop += G), (o = !0));
      }
      if (r) {
        let t = q(r);
        e.x - t.left < W
          ? ((r.scrollLeft -= G), (o = !0))
          : t.right - e.x < W && ((r.scrollLeft += G), (o = !0));
      }
      o ? (i.current = requestAnimationFrame(c)) : (a.current = null);
    }, []),
    l = (0, f.useCallback)(
      (e, t) => {
        ((a.current = { x: e, y: t }),
          i.current === null && (i.current = requestAnimationFrame(c)));
      },
      [c],
    ),
    u = (0, f.useRef)(null),
    d = (0, f.useCallback)(() => {
      let e = u.current;
      e &&
        (window.removeEventListener(`pointermove`, e.move),
        window.removeEventListener(`pointerup`, e.up),
        window.removeEventListener(`pointercancel`, e.cancel),
        window.removeEventListener(`keydown`, e.key),
        (u.current = null));
    }, []),
    p = (0, f.useCallback)(() => {
      ((document.body.style.cursor = ``),
        (document.body.style.userSelect = ``));
    }, []),
    m = (0, f.useCallback)(
      (e) => {
        let i = r.current,
          a = !!i?.active;
        (i?.lastZoneId && t.current.get(i.lastZoneId)?.onDragLeave?.(),
          i?.onDragEnd?.(e),
          (r.current = null),
          d(),
          s(),
          a && (p(), (n.current = null), o.getState().clear()));
      },
      [d, s, p, o],
    ),
    h = (0, f.useCallback)(
      (e) => {
        (r.current && m(!1),
          (r.current = {
            data: e.data,
            onDragEnd: e.onDragEnd,
            startX: e.startX,
            startY: e.startY,
            thresholdPx: e.thresholdPx ?? 5,
            active: !1,
            lastZoneId: null,
          }),
          (n.current = e.preview));
        let i = (t, n) => {
            let i = r.current;
            !i ||
              i.active ||
              ((i.active = !0),
              (document.body.style.cursor = `grabbing`),
              (document.body.style.userSelect = `none`),
              o.getState().begin(i.data.kind, i.data.payload, t, n),
              e.onActivate?.());
          },
          a = (e) => {
            let n = r.current;
            if (!n) return;
            let { clientX: a, clientY: c } = e;
            if (!n.active) {
              if (Math.hypot(a - n.startX, c - n.startY) < n.thresholdPx)
                return;
              i(a, c);
            }
            o.getState().setPointer(a, c);
            let u = { x: a, y: c },
              d =
                document.elementFromPoint(a, c)?.closest(`[data-dnd-zone]`)
                  ?.dataset.dndZone ?? null,
              f = d ? (t.current.get(d) ?? null) : null,
              p = !!f && f.accept(n.data);
            (d !== n.lastZoneId &&
              (n.lastZoneId && t.current.get(n.lastZoneId)?.onDragLeave?.(),
              f && f.onDragEnter?.(),
              (n.lastZoneId = d)),
              f?.onDragOver?.(n.data, u),
              o.getState().setHover(d, p),
              f && f.autoScroll !== !1 ? l(a, c) : s());
          },
          c = (e) => {
            let n = r.current;
            if (!n) {
              (d(), s());
              return;
            }
            let i = !1;
            if (n.active) {
              let r = { x: e.clientX, y: e.clientY },
                a = n.lastZoneId ? t.current.get(n.lastZoneId) : null;
              a && a.accept(n.data) && (a.onDrop(n.data, r), (i = !0));
            }
            m(i);
          },
          f = () => m(!1),
          p = (e) => {
            e.key === `Escape` &&
              r.current?.active &&
              (e.preventDefault(), m(!1));
          };
        ((u.current = { move: a, up: c, cancel: f, key: p }),
          window.addEventListener(`pointermove`, a),
          window.addEventListener(`pointerup`, c),
          window.addEventListener(`pointercancel`, f),
          window.addEventListener(`keydown`, p));
      },
      [m, d, l, s, o],
    ),
    g = (0, f.useCallback)((e, n) => {
      t.current.set(e, n);
    }, []),
    _ = (0, f.useCallback)((e) => {
      t.current.delete(e);
    }, []);
  (0, f.useEffect)(
    () => () => {
      (d(), s(), p());
    },
    [d, s, p],
  );
  let v = (0, f.useRef)({ registerZone: g, unregisterZone: _, beginDrag: h });
  return (
    (v.current.registerZone = g),
    (v.current.unregisterZone = _),
    (v.current.beginDrag = h),
    (0, H.jsx)(de.Provider, {
      value: v.current,
      children: (0, H.jsxs)(fe.Provider, {
        value: n,
        children: [e, (0, H.jsx)(U, {})],
      }),
    })
  );
}
var he = { touchAction: `manipulation`, cursor: `grab`, userSelect: `none` },
  ge = 320,
  Y = 8;
function _e(e) {
  let { beginDrag: t } = pe(),
    n = (0, f.useRef)(e);
  n.current = e;
  let [r, i] = (0, f.useState)(!1),
    a = (0, f.useRef)(null);
  return (
    (0, f.useEffect)(
      () => () => {
        a.current?.();
      },
      [],
    ),
    {
      dragProps: {
        onPointerDown: (0, f.useCallback)(
          (e) => {
            let r = n.current;
            if (r.disabled || e.button !== 0) return;
            let o = typeof r.payload == `function` ? r.payload() : r.payload,
              s = typeof r.preview == `function` ? r.preview() : r.preview,
              c = e.currentTarget,
              l = { dragStarted: !1 },
              u = (e) => {
                (l.dragStarted && (e.stopPropagation(), e.preventDefault()),
                  c.removeEventListener(`click`, u, !0));
              };
            c.addEventListener(`click`, u, !0);
            let d = e.pointerType === `touch`,
              f = e.pointerId,
              p = e.clientX,
              m = e.clientY,
              h = (e) => e.preventDefault(),
              g = !1,
              _ = () => {
                g && ((g = !1), c.removeEventListener(`touchmove`, h));
              },
              v = null,
              y = () => {
                (r.onDragStart?.(),
                  t({
                    data: { kind: r.kind, payload: o },
                    preview: s,
                    startX: p,
                    startY: m,
                    thresholdPx: d ? 0 : r.thresholdPx,
                    onActivate: () => {
                      ((l.dragStarted = !0), i(!0));
                    },
                    onDragEnd: (e) => {
                      (v?.(),
                        i(!1),
                        n.current.onDragEnd?.(e),
                        l.dragStarted
                          ? setTimeout(
                              () => c.removeEventListener(`click`, u, !0),
                              0,
                            )
                          : c.removeEventListener(`click`, u, !0));
                    },
                  }));
              };
            if (!d) {
              y();
              return;
            }
            if (a.current) return;
            let b = null,
              x = !1,
              S = () => {
                (b !== null && (window.clearTimeout(b), (b = null)),
                  window.removeEventListener(`pointermove`, w),
                  window.removeEventListener(`pointerup`, C),
                  window.removeEventListener(`pointercancel`, C));
              };
            ((v = () => {
              a.current === v &&
                ((a.current = null),
                S(),
                _(),
                x || c.removeEventListener(`click`, u, !0));
            }),
              (a.current = v));
            function C(e) {
              e.pointerId === f && v?.();
            }
            function w(e) {
              e.pointerId === f &&
                Math.hypot(e.clientX - p, e.clientY - m) > Y &&
                v?.();
            }
            (window.addEventListener(`pointermove`, w),
              window.addEventListener(`pointerup`, C),
              window.addEventListener(`pointercancel`, C),
              (b = window.setTimeout(() => {
                ((b = null),
                  S(),
                  (x = !0),
                  c.addEventListener(`touchmove`, h, { passive: !1 }),
                  (g = !0),
                  y());
              }, ge)));
          },
          [t],
        ),
        style: he,
        draggable: !1,
      },
      isDragging: r,
    }
  );
}
