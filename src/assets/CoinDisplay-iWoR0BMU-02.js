// CoinDisplay-iWoR0BMU 02 — current
// Lines 60-544 of readable/assets/CoinDisplay-iWoR0BMU.pretty.js (statement-aligned).
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
