// index-CBcimEr9 19 — scrollbar
// Lines 6115-6260 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function as(e) {
  return e ? parseInt(e, 10) : 0;
}
Y(as, `toInt`);
function os(e, t) {
  let n = e / t;
  return isNaN(n) ? 0 : n;
}
Y(os, `getThumbRatio`);
function ss(e) {
  let t = os(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
Y(ss, `getThumbSize`);
function cs(e, t, n, r = `ltr`) {
  let i = ss(n),
    a = i / 2,
    o = t || a,
    s = i - o,
    c = n.scrollbar.paddingStart + o,
    l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
    u = n.content - n.viewport,
    d = r === `ltr` ? [0, u] : [u * -1, 0];
  return us([c, l], d)(e);
}
Y(cs, `getScrollPositionFromPointer`);
function ls(e, t, n = `ltr`) {
  let r = ss(t),
    i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    a = t.scrollbar.size - i,
    o = t.content - t.viewport,
    s = a - r,
    c = it(e, n === `ltr` ? [0, o] : [o * -1, 0]);
  return us([0, o], [0, s])(c);
}
Y(ls, `getThumbOffsetFromScroll`);
function us(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
Y(us, `linearScale`);
function ds(e, t) {
  return e > 0 && e < t;
}
Y(ds, `isScrollingWithinScrollbarBounds`);
var fs = Y((e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    Y(function i() {
      let a = { left: e.scrollLeft, top: e.scrollTop },
        o = n.left !== a.left,
        s = n.top !== a.top;
      ((o || s) && t(), (n = a), (r = window.requestAnimationFrame(i)));
    }, `loop`)(),
    () => window.cancelAnimationFrame(r)
  );
}, `addUnlinkedScrollListener`);
function ps(e, t) {
  let n = y(e),
    r = H.useRef(0);
  return (
    H.useEffect(() => () => window.clearTimeout(r.current), []),
    H.useCallback(() => {
      (window.clearTimeout(r.current), (r.current = window.setTimeout(n, t)));
    }, [n, t])
  );
}
Y(ps, `useDebounceCallback`);
function ms(e, t) {
  let n = y(t);
  v(() => {
    let t = 0;
    if (e) {
      let r = new ResizeObserver(() => {
        (cancelAnimationFrame(t), (t = window.requestAnimationFrame(n)));
      });
      return (
        r.observe(e),
        () => {
          (window.cancelAnimationFrame(t), r.unobserve(e));
        }
      );
    }
  }, [e, n]);
}
Y(ms, `useResizeObserver`);
var hs = H.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, U.jsxs)(zo, {
    ref: r,
    className: x(`relative overflow-hidden`, e),
    ...n,
    children: [
      (0, U.jsx)(Vo, {
        className: `h-full w-full rounded-[inherit]`,
        children: t,
      }),
      (0, U.jsx)(gs, {}),
      (0, U.jsx)(rs, {}),
    ],
  }),
);
hs.displayName = zo.displayName;
var gs = H.forwardRef(
  ({ className: e, orientation: t = `vertical`, ...n }, r) =>
    (0, U.jsx)(Uo, {
      ref: r,
      orientation: t,
      className: x(
        `flex touch-none select-none transition-colors`,
        t === `vertical` &&
          `h-full w-2.5 border-l border-l-transparent p-[1px]`,
        t === `horizontal` &&
          `h-2.5 flex-col border-t border-t-transparent p-[1px]`,
        e,
      ),
      ...n,
      children: (0, U.jsx)(es, {
        className: `relative flex-1 rounded-full bg-border`,
      }),
    }),
);
gs.displayName = Uo.displayName;
function _s(e, t) {
  let n = ct(),
    r =
      t?.weekStartsOn ??
      t?.locale?.options?.weekStartsOn ??
      n.weekStartsOn ??
      n.locale?.options?.weekStartsOn ??
      0,
    i = at(e),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r;
  return (i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i);
}
function vs(e, t, n) {
  let r = _s(e, n),
    i = _s(t, n);
  return +r == +i;
}
