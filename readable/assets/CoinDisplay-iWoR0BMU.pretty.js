import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { a as r, i, n as a, t as o } from "./dist-CA4uZW3H.js";
import { l as s, m as c, p as l } from "./AuthService-CQeU_0bQ.js";
import { t as u } from "./dist-p2cW4AiE.js";
import { a as d, i as f, n as p, r as m, t as h } from "./dist-BWh9CVbU.js";
import { t as ee } from "./dist-DkIQBCKf.js";
import { n as g } from "./dist-7AcSgfoz.js";
import { r as _ } from "./button-Ap3ysi5G.js";
import { t as v } from "./refresh-cw-CkwJF4P8.js";
import { t as y } from "./triangle-alert-D-SEZi4r.js";
import { n as b, t as x } from "./apiConfig-cGsbt6Be.js";
import { i as S } from "./serviceProxy-CZRpABZv.js";
import { t as te } from "./dist-IS-98_QU.js";
var C = _(`Coins`, [
    [`circle`, { cx: `8`, cy: `8`, r: `6`, key: `3yglwk` }],
    [`path`, { d: `M18.09 10.37A6 6 0 1 1 10.34 18`, key: `t5s6rm` }],
    [`path`, { d: `M7 6h1v4`, key: `1obek4` }],
    [`path`, { d: `m16.71 13.88.7.71-2.82 2.82`, key: `1rbuyh` }],
  ]),
  w = e(t(), 1),
  T = {
    development: {
      hex: `#3b82f6`,
      bgClass: `bg-blue-500`,
      bgTransparent: `bg-blue-500/20`,
      label: `Development`,
    },
    art: {
      hex: `#ec4899`,
      bgClass: `bg-pink-500`,
      bgTransparent: `bg-pink-500/20`,
      label: `Art`,
    },
    audio: {
      hex: `#8b5cf6`,
      bgClass: `bg-purple-500`,
      bgTransparent: `bg-purple-500/20`,
      label: `Audio`,
    },
    design: {
      hex: `#10b981`,
      bgClass: `bg-green-500`,
      bgTransparent: `bg-green-500/20`,
      label: `Design`,
    },
    qa: {
      hex: `#f59e0b`,
      bgClass: `bg-amber-500`,
      bgTransparent: `bg-amber-500/20`,
      label: `QA`,
    },
  };
function E(e) {
  return T[e]?.hex || `#6b7280`;
}
function D(e) {
  return T[e]?.label || e;
}
var ne = 3e3,
  O = class {
    balanceCache = null;
    balanceInFlight = null;
    balanceGeneration = 0;
    invalidateBalance() {
      ((this.balanceCache = null),
        (this.balanceInFlight = null),
        (this.balanceGeneration += 1));
    }
    async getBalance() {
      let e = this.balanceCache;
      if (e && Date.now() - e.at < ne) return e.value;
      if (this.balanceInFlight) return this.balanceInFlight;
      let t = this.balanceGeneration,
        n = this.fetchBalance().then((e) =>
          t === this.balanceGeneration
            ? (e.success && (this.balanceCache = { at: Date.now(), value: e }),
              (this.balanceInFlight = null),
              e)
            : e,
        );
      return ((this.balanceInFlight = n), n);
    }
    async fetchBalance() {
      try {
        let e = await b(),
          t = await fetch(`${x.API_BASE_URL}/api/coins/balance`, {
            method: `GET`,
            headers: e,
          });
        if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
        return await t.json();
      } catch (e) {
        return (
          console.error(`Error getting coin balance:`, e),
          {
            success: !1,
            balance: 0,
            lifetime_earned: 0,
            lifetime_spent: 0,
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async getActionPrices() {
      try {
        let e = await b(),
          t = await fetch(`${x.API_BASE_URL}/api/coins/action-prices`, {
            method: `GET`,
            headers: e,
          });
        if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
        return await t.json();
      } catch (e) {
        return (
          console.error(`Error getting action prices:`, e),
          {
            success: !1,
            prices: [],
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async getTransactions(e = 20, t = 0, n) {
      try {
        let r = await b(),
          i = new URLSearchParams({
            limit: e.toString(),
            offset: t.toString(),
          });
        n && i.append(`session_id`, n);
        let a = await fetch(`${x.API_BASE_URL}/api/coins/transactions?${i}`, {
          method: `GET`,
          headers: r,
        });
        if (!a.ok) throw Error(`HTTP error! status: ${a.status}`);
        return await a.json();
      } catch (n) {
        return (
          console.error(`Error getting transactions:`, n),
          {
            success: !1,
            transactions: [],
            limit: e,
            offset: t,
            error: n instanceof Error ? n.message : `Unknown error`,
          }
        );
      }
    }
    async getBudget(e) {
      try {
        let t = await b(),
          n = new URLSearchParams();
        e && n.append(`session_id`, e);
        let r = e
            ? `${x.API_BASE_URL}/api/coins/budget?${n}`
            : `${x.API_BASE_URL}/api/coins/budget`,
          i = await fetch(r, { method: `GET`, headers: t });
        if (!i.ok) throw Error(`HTTP error! status: ${i.status}`);
        return await i.json();
      } catch (e) {
        return (
          console.error(`Error getting budget:`, e),
          {
            success: !1,
            balance: 0,
            lifetime_earned: 0,
            lifetime_spent: 0,
            breakdown: [],
            recent_transactions: [],
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async initializeWallet(e = 0) {
      try {
        let t = await b(),
          n = new URLSearchParams({ initial_balance: e.toString() }),
          r = await fetch(`${x.API_BASE_URL}/api/coins/initialize?${n}`, {
            method: `POST`,
            headers: t,
          });
        if (!r.ok) throw Error(`HTTP error! status: ${r.status}`);
        return await r.json();
      } catch (e) {
        return (
          console.error(`Error initializing wallet:`, e),
          {
            success: !1,
            user_id: ``,
            balance: 0,
            lifetime_earned: 0,
            lifetime_spent: 0,
            created: !1,
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    formatCoins(e) {
      return e.toLocaleString();
    }
    getCategoryLabel(e) {
      return D(e);
    }
    getCategoryColor(e) {
      return E(e);
    }
  },
  k = S(`coins`, new O()),
  A = n(),
  re = Object.defineProperty,
  j = (e, t) => re(e, `name`, { value: t, configurable: !0 }),
  [M, ie] = i(`Tooltip`, [f]),
  N = f(),
  ae = `TooltipProvider`,
  oe = 700,
  P = `tooltip.open`,
  [se, F] = M(ae),
  ce = j((e) => {
    let {
        __scopeTooltip: t,
        delayDuration: n = oe,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: a,
      } = e,
      o = w.useRef(!0),
      s = w.useRef(!1),
      c = w.useRef(0);
    return (
      w.useEffect(() => {
        let e = c.current;
        return () => window.clearTimeout(e);
      }, []),
      (0, A.jsx)(se, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          r <= 0 || (window.clearTimeout(c.current), (o.current = !1));
        }, [r]),
        onClose: w.useCallback(() => {
          r <= 0 ||
            (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: w.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: i,
        children: a,
      })
    );
  }, `TooltipProvider`),
  I = `Tooltip`,
  [le, L] = M(I),
  ue = j((e) => {
    let {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: s,
      } = e,
      c = F(I, e.__scopeTooltip),
      l = N(t),
      [u, d] = w.useState(null),
      [f, p] = w.useState(void 0),
      m = te(),
      g = w.useRef(0),
      _ = o ?? c.disableHoverableContent,
      v = s ?? c.delayDuration,
      y = w.useRef(!1),
      [b, x] = ee({
        prop: r,
        defaultProp: i ?? !1,
        onChange: j((e) => {
          (e
            ? (c.onOpen(), document.dispatchEvent(new CustomEvent(P)))
            : c.onClose(),
            a?.(e));
        }, `onChange`),
        caller: I,
      }),
      S = w.useMemo(
        () => (b ? (y.current ? `delayed-open` : `instant-open`) : `closed`),
        [b],
      ),
      C = w.useCallback(() => {
        (window.clearTimeout(g.current),
          (g.current = 0),
          (y.current = !1),
          x(!0));
      }, [x]),
      T = w.useCallback(() => {
        (window.clearTimeout(g.current), (g.current = 0), x(!1));
      }, [x]),
      E = w.useCallback(() => {
        (window.clearTimeout(g.current),
          (g.current = window.setTimeout(() => {
            ((y.current = !0), x(!0), (g.current = 0));
          }, v)));
      }, [v, x]);
    w.useEffect(
      () => () => {
        g.current &&= (window.clearTimeout(g.current), 0);
      },
      [],
    );
    let D = f ?? m;
    return (0, A.jsx)(h, {
      ...l,
      children: (0, A.jsx)(le, {
        scope: t,
        contentId: D,
        setContentId: p,
        open: b,
        stateAttribute: S,
        trigger: u,
        onTriggerChange: d,
        onTriggerEnter: w.useCallback(() => {
          c.isOpenDelayedRef.current ? E() : C();
        }, [c.isOpenDelayedRef, E, C]),
        onTriggerLeave: w.useCallback(() => {
          _ ? T() : (window.clearTimeout(g.current), (g.current = 0));
        }, [T, _]),
        onOpen: C,
        onClose: T,
        disableHoverableContent: _,
        children: n,
      }),
    });
  }, `Tooltip`),
  R = `TooltipTrigger`,
  z = w.forwardRef(
    j(function (e, t) {
      let { __scopeTooltip: n, "aria-describedby": i, ...a } = e,
        o = L(R, n),
        s = F(R, n),
        l = N(n),
        d = c(t, w.useRef(null), o.onTriggerChange),
        f = w.useRef(!1),
        m = w.useRef(!1),
        h = w.useCallback(() => (f.current = !1), []);
      return (
        w.useEffect(
          () => () => document.removeEventListener(`pointerup`, h),
          [h],
        ),
        (0, A.jsx)(p, {
          asChild: !0,
          ...l,
          children: (0, A.jsx)(u.button, {
            "aria-describedby": o.open ? Y(i, o.contentId) : i,
            "data-state": o.stateAttribute,
            ...a,
            ref: d,
            onPointerMove: r(e.onPointerMove, (e) => {
              e.pointerType !== `touch` &&
                !m.current &&
                !s.isPointerInTransitRef.current &&
                (o.onTriggerEnter(), (m.current = !0));
            }),
            onPointerLeave: r(e.onPointerLeave, () => {
              (o.onTriggerLeave(), (m.current = !1));
            }),
            onPointerDown: r(e.onPointerDown, () => {
              (o.open && o.onClose(),
                (f.current = !0),
                document.addEventListener(`pointerup`, h, { once: !0 }));
            }),
            onFocus: r(e.onFocus, () => {
              f.current || o.onOpen();
            }),
            onBlur: r(e.onBlur, o.onClose),
            onClick: r(e.onClick, o.onClose),
          }),
        })
      );
    }, `TooltipTrigger`),
  ),
  [de, fe] = M(`TooltipPortal`, { forceMount: void 0 }),
  B = `TooltipContent`,
  V = w.forwardRef(
    j(function (e, t) {
      let n = fe(B, e.__scopeTooltip),
        { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
        s = L(B, e.__scopeTooltip);
      return (0, A.jsx)(o, {
        present: r || s.open,
        children: s.disableHoverableContent
          ? (0, A.jsx)(H, { side: i, ...a, ref: t })
          : (0, A.jsx)(pe, { side: i, ...a, ref: t }),
      });
    }, `TooltipContent`),
  ),
  pe = w.forwardRef(
    j(function (e, t) {
      let n = L(B, e.__scopeTooltip),
        r = F(B, e.__scopeTooltip),
        i = w.useRef(null),
        a = c(t, i),
        [o, s] = w.useState(null),
        { trigger: l, onClose: u } = n,
        d = i.current,
        { onPointerInTransitChange: f } = r,
        p = w.useCallback(() => {
          (s(null), f(!1));
        }, [f]),
        m = w.useCallback(
          (e, t) => {
            let n = e.currentTarget,
              r = { x: e.clientX, y: e.clientY },
              i = W(r, U(r, n.getBoundingClientRect())),
              a = G(t.getBoundingClientRect()),
              o = q([...i, ...a]);
            (s(o), f(!0));
          },
          [f],
        );
      return (
        w.useEffect(() => () => p(), [p]),
        w.useEffect(() => {
          if (l && d) {
            let e = j((e) => m(e, d), `handleTriggerLeave`),
              t = j((e) => m(e, l), `handleContentLeave`);
            return (
              l.addEventListener(`pointerleave`, e),
              d.addEventListener(`pointerleave`, t),
              () => {
                (l.removeEventListener(`pointerleave`, e),
                  d.removeEventListener(`pointerleave`, t));
              }
            );
          }
        }, [l, d, m, p]),
        w.useEffect(() => {
          if (o) {
            let e = j((e) => {
              let t = e.target,
                n = { x: e.clientX, y: e.clientY },
                r = l?.contains(t) || d?.contains(t),
                i = !K(n, o);
              r ? p() : i && (p(), u());
            }, `handleTrackPointerGrace`);
            return (
              document.addEventListener(`pointermove`, e),
              () => document.removeEventListener(`pointermove`, e)
            );
          }
        }, [l, d, o, u, p]),
        (0, A.jsx)(H, { ...e, ref: a })
      );
    }, `TooltipContentHoverable`),
  ),
  me = l(`TooltipContent`),
  H = w.forwardRef(
    j(function (e, t) {
      let {
          __scopeTooltip: n,
          children: r,
          "aria-label": i,
          id: o,
          onEscapeKeyDown: s,
          onPointerDownOutside: c,
          ...l
        } = e,
        u = L(B, n),
        f = N(n),
        { onClose: p } = u;
      (w.useEffect(
        () => (
          document.addEventListener(P, p),
          () => document.removeEventListener(P, p)
        ),
        [p],
      ),
        w.useEffect(() => {
          if (u.trigger) {
            let e = j((e) => {
              e.target instanceof Node && e.target.contains(u.trigger) && p();
            }, `handleScroll`);
            return (
              window.addEventListener(`scroll`, e, { capture: !0 }),
              () => window.removeEventListener(`scroll`, e, { capture: !0 })
            );
          }
        }, [u.trigger, p]));
      let { setContentId: h } = u;
      return (
        a(
          () => (
            h(o),
            () => {
              h(void 0);
            }
          ),
          [o, h],
        ),
        (0, A.jsx)(d, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: s,
          onPointerDownOutside: c,
          onFocusOutside: (e) => e.preventDefault(),
          onDismiss: p,
          children: (0, A.jsxs)(m, {
            "data-state": u.stateAttribute,
            role: i ? void 0 : `tooltip`,
            id: i ? void 0 : u.contentId,
            ...f,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
              "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
              "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
              "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
              "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`,
            },
            children: [
              (0, A.jsx)(me, { children: r }),
              i
                ? (0, A.jsx)(g, {
                    id: u.contentId,
                    role: `tooltip`,
                    children: i,
                  })
                : null,
            ],
          }),
        })
      );
    }, `TooltipContentImpl`),
  );
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
j(U, `getExitSideFromRect`);
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
j(W, `getPaddedExitPoints`);
function G(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
j(G, `getPointsFromRect`);
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
j(K, `isPointInPolygon`);
function q(e) {
  let t = e.slice();
  return (
    t.sort((e, t) =>
      e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y),
    ),
    J(t)
  );
}
j(q, `getHull`);
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
j(J, `getHullPresorted`);
function Y(...e) {
  let t = new Set();
  for (let n of e)
    if (typeof n == `string`)
      for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
  return t.size > 0 ? Array.from(t).join(` `) : void 0;
}
j(Y, `concatAriaDescribedby`);
var X = ce,
  Z = ue,
  Q = z,
  $ = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    (0, A.jsx)(V, {
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
function he({
  className: e = ``,
  lowBalanceThreshold: t = 50,
  showTooltip: n = !0,
  compact: r = !1,
  onBalanceChange: i,
  refreshInterval: a = 0,
}) {
  let [o, s] = (0, w.useState)(null),
    [c, l] = (0, w.useState)(!0),
    [u, d] = (0, w.useState)(!1),
    f = (0, w.useCallback)(
      async (e = !1) => {
        e && d(!0);
        try {
          let e = await k.getBalance();
          e.success && (s(e), i?.(e.balance));
        } catch (e) {
          console.error(`Error fetching balance:`, e);
        } finally {
          (l(!1), d(!1));
        }
      },
      [i],
    );
  ((0, w.useEffect)(() => {
    f();
  }, [f]),
    (0, w.useEffect)(() => {
      if (a > 0) {
        let e = setInterval(() => f(), a);
        return () => clearInterval(e);
      }
    }, [a, f]),
    (0, w.useEffect)(() => {
      let e = () => f(!0);
      return (
        window.addEventListener(`coin-balance-refresh`, e),
        () => window.removeEventListener(`coin-balance-refresh`, e)
      );
    }, [f]));
  let p = o && o.balance < t,
    m = o ? k.formatCoins(o.balance) : `---`,
    h = (0, A.jsxs)(`div`, {
      className: `
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
        bg-gradient-to-r from-amber-500/15 to-yellow-500/15 dark:from-amber-500/10 dark:to-yellow-500/10
        border border-amber-600/35 dark:border-amber-500/20
        ${p ? `border-red-600/50 from-red-500/15 to-orange-500/15 dark:border-red-500/40 dark:from-red-500/10 dark:to-orange-500/10` : ``}
        ${e}
      `,
      children: [
        (0, A.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, A.jsx)(C, {
              className: `
            ${r ? `h-4 w-4` : `h-5 w-5`}
            ${p ? `text-red-700 dark:text-red-400` : `text-amber-700 dark:text-amber-400`}
          `,
            }),
            u &&
              (0, A.jsx)(v, {
                className: `absolute -top-1 -right-1 h-3 w-3 text-amber-700 dark:text-amber-400 animate-spin`,
              }),
          ],
        }),
        (0, A.jsx)(`span`, {
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
          (0, A.jsx)(y, {
            className: `h-4 w-4 text-red-700 dark:text-red-400 ml-0.5`,
          }),
      ],
    });
  return !n || c
    ? h
    : (0, A.jsx)(X, {
        children: (0, A.jsxs)(Z, {
          children: [
            (0, A.jsx)(Q, { asChild: !0, children: h }),
            (0, A.jsx)($, {
              side: `bottom`,
              className: `bg-gray-900 border-gray-700 text-gray-200 p-3`,
              children: (0, A.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, A.jsxs)(`div`, {
                    className: `font-semibold text-amber-400 flex items-center gap-2`,
                    children: [
                      (0, A.jsx)(C, { className: `h-4 w-4` }),
                      `Coin Balance`,
                    ],
                  }),
                  (0, A.jsxs)(`div`, {
                    className: `grid grid-cols-2 gap-x-4 gap-y-1 text-sm`,
                    children: [
                      (0, A.jsx)(`span`, {
                        className: `text-gray-400`,
                        children: `Current:`,
                      }),
                      (0, A.jsx)(`span`, {
                        className: `text-right font-mono`,
                        children: m,
                      }),
                      (0, A.jsx)(`span`, {
                        className: `text-gray-400`,
                        children: `Spent:`,
                      }),
                      (0, A.jsx)(`span`, {
                        className: `text-right font-mono text-red-400`,
                        children: k.formatCoins(o?.lifetime_spent || 0),
                      }),
                    ],
                  }),
                  p &&
                    (0, A.jsxs)(`div`, {
                      className: `mt-2 text-xs text-red-400 flex items-center gap-1`,
                      children: [
                        (0, A.jsx)(y, { className: `h-3 w-3` }),
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
function ge() {
  (k.invalidateBalance(),
    window.dispatchEvent(new CustomEvent(`coin-balance-refresh`)));
}
export {
  X as a,
  k as c,
  $ as i,
  T as l,
  ge as n,
  Q as o,
  Z as r,
  O as s,
  he as t,
  C as u,
};
