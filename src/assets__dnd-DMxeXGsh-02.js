// assets__dnd-DMxeXGsh 02 — current
// Lines 202-528 of readable/assets__dnd-DMxeXGsh.pretty.js (statement-aligned).
function N({ children: e }) {
  let t = (0, f.useRef)(new Map()),
    n = (0, f.useRef)(null),
    r = (0, f.useRef)(null),
    i = (0, f.useRef)(null),
    a = (0, f.useRef)(null),
    o = b,
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
        n = j(t, `y`),
        r = j(t, `x`),
        o = !1;
      if (n) {
        let t = M(n);
        e.y - t.top < E
          ? ((n.scrollTop -= D), (o = !0))
          : t.bottom - e.y < E && ((n.scrollTop += D), (o = !0));
      }
      if (r) {
        let t = M(r);
        e.x - t.left < E
          ? ((r.scrollLeft -= D), (o = !0))
          : t.right - e.x < E && ((r.scrollLeft += D), (o = !0));
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
    (0, S.jsx)(T.Provider, {
      value: v.current,
      children: (0, S.jsxs)(O.Provider, {
        value: n,
        children: [e, (0, S.jsx)(w, {})],
      }),
    })
  );
}
var P = { touchAction: `manipulation`, cursor: `grab`, userSelect: `none` },
  F = 320,
  I = 8;
function L(e) {
  let { beginDrag: t } = A(),
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
                Math.hypot(e.clientX - p, e.clientY - m) > I &&
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
              }, F)));
          },
          [t],
        ),
        style: P,
        draggable: !1,
      },
      isDragging: r,
    }
  );
}
function R(e, t) {
  return t
    ? () => !1
    : typeof e == `function`
      ? e
      : Array.isArray(e)
        ? (t) => e.includes(t.kind)
        : (t) => t.kind === e;
}
function z(e) {
  let t = (0, f.useId)(),
    { registerZone: n, unregisterZone: r } = A(),
    i = (0, f.useRef)(e);
  i.current = e;
  let a = (0, f.useCallback)(
      (e) => {
        e
          ? ((e.dataset.dndZone = t),
            n(t, {
              el: e,
              accept: (e) => R(i.current.accept, i.current.disabled)(e),
              onDrop: (e, t) => i.current.onDrop(e, t),
              onDragOver: (e, t) => i.current.onDragOver?.(e, t),
              onDragEnter: () => i.current.onDragEnter?.(),
              onDragLeave: () => i.current.onDragLeave?.(),
              get autoScroll() {
                return i.current.autoScroll;
              },
            }))
          : r(t);
      },
      [t, n, r],
    ),
    o = b((e) => e.active),
    s = b((e) => e.hoveredZoneId),
    c = b((e) => e.kind),
    l = b((e) => e.payload);
  return {
    dropProps: { ref: a, "data-dnd-zone": t },
    isOver: o && s === t,
    activeData: o && c !== null ? { kind: c, payload: l } : null,
  };
}
