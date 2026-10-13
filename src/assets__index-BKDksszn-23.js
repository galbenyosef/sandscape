// assets__index-BKDksszn 23 — scrollbar
// Lines 7089-7234 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function ks(e) {
  return e ? parseInt(e, 10) : 0;
}
X(ks, `toInt`);
function As(e, t) {
  let n = e / t;
  return isNaN(n) ? 0 : n;
}
X(As, `getThumbRatio`);
function js(e) {
  let t = As(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
X(js, `getThumbSize`);
function Ms(e, t, n, r = `ltr`) {
  let i = js(n),
    a = i / 2,
    o = t || a,
    s = i - o,
    c = n.scrollbar.paddingStart + o,
    l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
    u = n.content - n.viewport,
    d = r === `ltr` ? [0, u] : [u * -1, 0];
  return Ps([c, l], d)(e);
}
X(Ms, `getScrollPositionFromPointer`);
function Ns(e, t, n = `ltr`) {
  let r = js(t),
    i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    a = t.scrollbar.size - i,
    o = t.content - t.viewport,
    s = a - r,
    c = $e(e, n === `ltr` ? [0, o] : [o * -1, 0]);
  return Ps([0, o], [0, s])(c);
}
X(Ns, `getThumbOffsetFromScroll`);
function Ps(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
X(Ps, `linearScale`);
function Fs(e, t) {
  return e > 0 && e < t;
}
X(Fs, `isScrollingWithinScrollbarBounds`);
var Is = X((e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    X(function i() {
      let a = { left: e.scrollLeft, top: e.scrollTop },
        o = n.left !== a.left,
        s = n.top !== a.top;
      ((o || s) && t(), (n = a), (r = window.requestAnimationFrame(i)));
    }, `loop`)(),
    () => window.cancelAnimationFrame(r)
  );
}, `addUnlinkedScrollListener`);
function Ls(e, t) {
  let n = y(e),
    r = U.useRef(0);
  return (
    U.useEffect(() => () => window.clearTimeout(r.current), []),
    U.useCallback(() => {
      (window.clearTimeout(r.current), (r.current = window.setTimeout(n, t)));
    }, [n, t])
  );
}
X(Ls, `useDebounceCallback`);
function Rs(e, t) {
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
X(Rs, `useResizeObserver`);
var zs = U.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, W.jsxs)(cs, {
    ref: r,
    className: x(`relative overflow-hidden`, e),
    ...n,
    children: [
      (0, W.jsx)(us, {
        className: `h-full w-full rounded-[inherit]`,
        children: t,
      }),
      (0, W.jsx)(Bs, {}),
      (0, W.jsx)(Ds, {}),
    ],
  }),
);
zs.displayName = cs.displayName;
var Bs = U.forwardRef(
  ({ className: e, orientation: t = `vertical`, ...n }, r) =>
    (0, W.jsx)(ps, {
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
      children: (0, W.jsx)(ws, {
        className: `relative flex-1 rounded-full bg-border`,
      }),
    }),
);
Bs.displayName = ps.displayName;
function Vs(e, t) {
  let n = rt(),
    r =
      t?.weekStartsOn ??
      t?.locale?.options?.weekStartsOn ??
      n.weekStartsOn ??
      n.locale?.options?.weekStartsOn ??
      0,
    i = et(e),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r;
  return (i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i);
}
function Hs(e, t, n) {
  let r = Vs(e, n),
    i = Vs(t, n);
  return +r == +i;
}
