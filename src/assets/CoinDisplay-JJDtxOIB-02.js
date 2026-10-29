// CoinDisplay-JJDtxOIB 02 — classname
// Lines 350-620 of readable/assets/CoinDisplay-JJDtxOIB.pretty.js (statement-aligned).
function U(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
E(U, `getExitSideFromRect`);
function W(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
E(W, `getPaddedExitPoints`);
function G(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
E(G, `getPointsFromRect`);
function K(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
E(K, `isPointInPolygon`);
function q(e) {
  let t = e.slice();
  return (
    t.sort((e, t) =>
      e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y),
    ),
    J(t)
  );
}
E(q, `getHull`);
function J(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (; t.length >= 2;) {
      let e = t[t.length - 1],
        n = t[t.length - 2];
      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  let n = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    for (; n.length >= 2;) {
      let e = n[n.length - 1],
        t = n[n.length - 2];
      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
E(J, `getHullPresorted`);
function Y(...e) {
  let t = new Set();
  for (let n of e)
    if (typeof n == `string`)
      for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
  return t.size > 0 ? Array.from(t).join(` `) : void 0;
}
E(Y, `concatAriaDescribedby`);
var X = P,
  Z = re,
  Q = R,
  $ = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    (0, w.jsx)(V, {
      ref: r,
      sideOffset: t,
      className: s(
        `z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e,
      ),
      ...n,
    }),
  );
$.displayName = V.displayName;
function se({
  className: e = ``,
  lowBalanceThreshold: t = 50,
  showTooltip: n = !0,
  compact: r = !1,
  onBalanceChange: i,
  refreshInterval: a = 0,
}) {
  let [o, s] = (0, C.useState)(null),
    [c, l] = (0, C.useState)(!0),
    [u, d] = (0, C.useState)(!1),
    f = (0, C.useCallback)(
      async (e = !1) => {
        e && d(!0);
        try {
          let e = await x.getBalance();
          e.success && (s(e), i?.(e.balance));
        } catch (e) {
          console.error(`Error fetching balance:`, e);
        } finally {
          (l(!1), d(!1));
        }
      },
      [i],
    );
  ((0, C.useEffect)(() => {
    f();
  }, [f]),
    (0, C.useEffect)(() => {
      if (a > 0) {
        let e = setInterval(() => f(), a);
        return () => clearInterval(e);
      }
    }, [a, f]),
    (0, C.useEffect)(() => {
      let e = () => f(!0);
      return (
        window.addEventListener(`coin-balance-refresh`, e),
        () => window.removeEventListener(`coin-balance-refresh`, e)
      );
    }, [f]));
  let p = o && o.balance < t,
    m = o ? x.formatCoins(o.balance) : `---`,
    h = (0, w.jsxs)(`div`, {
      className: `
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
        bg-gradient-to-r from-amber-500/15 to-yellow-500/15 dark:from-amber-500/10 dark:to-yellow-500/10
        border border-amber-600/35 dark:border-amber-500/20
        ${p ? `border-red-600/50 from-red-500/15 to-orange-500/15 dark:border-red-500/40 dark:from-red-500/10 dark:to-orange-500/10` : ``}
        ${e}
      `,
      children: [
        (0, w.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, w.jsx)(S, {
              className: `
            ${r ? `h-4 w-4` : `h-5 w-5`}
            ${p ? `text-red-700 dark:text-red-400` : `text-amber-700 dark:text-amber-400`}
          `,
            }),
            u &&
              (0, w.jsx)(y, {
                className: `absolute -top-1 -right-1 h-3 w-3 text-amber-700 dark:text-amber-400 animate-spin`,
              }),
          ],
        }),
        (0, w.jsx)(`span`, {
          className: `
          font-semibold tabular-nums
          ${r ? `text-sm` : `text-base`}
          ${p ? `text-red-800 dark:text-red-400` : `text-amber-800 dark:text-amber-300`}
          ${c ? `opacity-50` : ``}
        `,
          children: c ? `...` : m,
        }),
        p &&
          !r &&
          (0, w.jsx)(b, {
            className: `h-4 w-4 text-red-700 dark:text-red-400 ml-0.5`,
          }),
      ],
    });
  return !n || c
    ? h
    : (0, w.jsx)(X, {
        children: (0, w.jsxs)(Z, {
          children: [
            (0, w.jsx)(Q, { asChild: !0, children: h }),
            (0, w.jsx)($, {
              side: `bottom`,
              className: `bg-gray-900 border-gray-700 text-gray-200 p-3`,
              children: (0, w.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, w.jsxs)(`div`, {
                    className: `font-semibold text-amber-400 flex items-center gap-2`,
                    children: [
                      (0, w.jsx)(S, { className: `h-4 w-4` }),
                      `Coin Balance`,
                    ],
                  }),
                  (0, w.jsxs)(`div`, {
                    className: `grid grid-cols-2 gap-x-4 gap-y-1 text-sm`,
                    children: [
                      (0, w.jsx)(`span`, {
                        className: `text-gray-400`,
                        children: `Current:`,
                      }),
                      (0, w.jsx)(`span`, {
                        className: `text-right font-mono`,
                        children: m,
                      }),
                      (0, w.jsx)(`span`, {
                        className: `text-gray-400`,
                        children: `Spent:`,
                      }),
                      (0, w.jsx)(`span`, {
                        className: `text-right font-mono text-red-400`,
                        children: x.formatCoins(o?.lifetime_spent || 0),
                      }),
                    ],
                  }),
                  p &&
                    (0, w.jsxs)(`div`, {
                      className: `mt-2 text-xs text-red-400 flex items-center gap-1`,
                      children: [
                        (0, w.jsx)(b, { className: `h-3 w-3` }),
                        `Low balance! Consider adding more coins.`,
                      ],
                    }),
                ],
              }),
            }),
          ],
        }),
      });
}
function ce() {
  (x.invalidateBalance(),
    window.dispatchEvent(new CustomEvent(`coin-balance-refresh`)));
}
