// Create-ea24k1TY 300 — current
// Lines 106282-106616 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function cye() {
  let [e, t] = (0, X.useState)(0);
  return (
    (0, X.useEffect)(() => {
      let e = typeof window < `u` ? window.visualViewport : null;
      if (!e) return;
      let n = () => {
        if (e.scale > 1.01) {
          t(0);
          return;
        }
        let n = window.innerHeight - e.height - e.offsetTop;
        t(n > 80 ? Math.round(n) : 0);
      };
      return (
        n(),
        e.addEventListener(`resize`, n),
        e.addEventListener(`scroll`, n),
        () => {
          (e.removeEventListener(`resize`, n),
            e.removeEventListener(`scroll`, n));
        }
      );
    }, []),
    e
  );
}
var lye = [`peek`, `half`, `full`],
  uye = 0.35;
function dye(e, t, n) {
  let r = e + t * uye;
  return lye.reduce(
    (e, t) => (Math.abs(n[t] - r) < Math.abs(n[e] - r) ? t : e),
    `peek`,
  );
}
function fye(e, t, n = 0) {
  let r = Math.max(t, e - n),
    i = Math.max(t, Math.round(r * 0.55));
  return { peek: t, half: i, full: Math.max(i, Math.round(r * 0.92)) };
}
var W9 = 34,
  pye = (0, X.forwardRef)(function (
    {
      transcript: e,
      composer: t,
      onDetentChange: n,
      onPeekHeightChange: r,
      handleOnly: i = !1,
    },
    a,
  ) {
    let o = (0, X.useRef)(null),
      s = (0, X.useRef)(null),
      c = fee(),
      l = cye(),
      [u, d] = (0, X.useState)(`peek`),
      [f, p] = (0, X.useState)(0),
      [m, h] = (0, X.useState)(56),
      g = Cr(90),
      _ = (0, X.useRef)(null),
      v = (0, X.useRef)(null),
      y = W9 + (i ? 0 : m),
      b = (0, X.useMemo)(() => fye(f, y, l), [f, y, l]),
      x = b.full,
      S = (0, X.useCallback)((e) => b[e], [b]);
    (0, X.useLayoutEffect)(() => {
      let e = o.current,
        t = s.current;
      if (!e || !t) return;
      let n = e.parentElement,
        r = new ResizeObserver(() => {
          (n && p(n.clientHeight), h(t.offsetHeight));
        });
      return (
        n && r.observe(n),
        r.observe(t),
        n && p(n.clientHeight),
        h(t.offsetHeight),
        () => r.disconnect()
      );
    }, []);
    let C = (0, X.useRef)(null),
      w = (0, X.useCallback)(
        (e, t = 0) => {
          d((t) => (t !== e && (_.current = e), e));
          let n = S(e);
          if ((C.current?.stop(), (C.current = null), c)) {
            g.set(n);
            return;
          }
          C.current = As(g, n, {
            type: `spring`,
            stiffness: 520,
            damping: 44,
            mass: 0.9,
            velocity: t,
          });
        },
        [S, g, c],
      ),
      T = (0, X.useRef)(u);
    ((T.current = u),
      (0, X.useEffect)(() => {
        v.current ||
          (C.current?.stop(), (C.current = null), g.set(b[T.current]));
      }, [b, g]),
      (0, X.useEffect)(() => {
        let e = _.current;
        e !== null && ((_.current = null), n?.(e));
      }),
      (0, X.useEffect)(() => {
        r?.(y);
      }, [y, r]),
      (0, X.useEffect)(
        () => () => {
          C.current?.stop();
        },
        [],
      ),
      (0, X.useImperativeHandle)(
        a,
        () => ({
          detent: u,
          open: () => {
            u === `peek` && w(`half`);
          },
          collapse: () => w(`peek`),
        }),
        [u, w],
      ));
    let E = (0, X.useRef)(null),
      D = (0, X.useRef)(0),
      O = (e) => {
        if (
          (e.pointerType === `mouse` && e.button !== 0) ||
          v.current ||
          e.target.closest(`[data-no-drag]`)
        )
          return;
        (C.current?.stop(), (C.current = null));
        let t = e.target.closest(`[data-sheet-toggle]`) !== null;
        ((v.current = {
          id: e.pointerId,
          startY: e.clientY,
          startH: g.get(),
          moved: 0,
          fromGrabber: t,
        }),
          (E.current = { y: e.clientY, t: performance.now() }),
          (D.current = 0));
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
      },
      k = (e) => {
        let t = v.current;
        if (!t || t.id !== e.pointerId) return;
        let n = t.startY - e.clientY;
        t.moved = Math.max(t.moved, Math.abs(n));
        let r = performance.now(),
          i = E.current;
        i &&
          r > i.t &&
          ((D.current = ((i.y - e.clientY) / (r - i.t)) * 1e3),
          (E.current = { y: e.clientY, t: r }));
        let a = t.startH + n;
        (a > x && (a = x + (a - x) * 0.25),
          a < y && (a = y - (y - a) * 0.25),
          g.set(a));
      },
      A = (e) => {
        let t = v.current;
        if (!t || t.id !== e.pointerId) return;
        v.current = null;
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        if (t.moved < 6) {
          t.fromGrabber ? w(u === `peek` ? `half` : `peek`) : g.set(S(u));
          return;
        }
        let n =
          E.current && performance.now() - E.current.t < 50 ? D.current : 0;
        w(dye(g.get(), n, b), n);
      },
      j = (e) => {
        let t = v.current;
        if (!(!t || t.id !== e.pointerId)) {
          v.current = null;
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {}
          w(u);
        }
      },
      M = () => {
        u === `peek` && w(`half`);
      },
      N = t.inquiryActive,
      P = (0, X.useRef)(N);
    return (
      (0, X.useEffect)(() => {
        (N && !P.current && w(`full`), (P.current = N));
      }, [N, w]),
      (0, Z.jsxs)(_r.div, {
        ref: o,
        role: `region`,
        "aria-label": `Chat`,
        className: `absolute inset-x-0 bottom-0 z-[45] flex flex-col overflow-hidden rounded-t-2xl border-t border-border bg-card/95 backdrop-blur-xl shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.7)]`,
        style: { height: g, bottom: l },
        children: [
          (0, Z.jsxs)(`div`, {
            "data-sheet-toggle": !0,
            className: `relative shrink-0 touch-none select-none`,
            style: { height: W9 },
            onPointerDown: O,
            onPointerMove: k,
            onPointerUp: A,
            onPointerCancel: j,
            children: [
              (0, Z.jsx)(`div`, {
                className: `flex h-full items-center justify-center`,
                "aria-hidden": `true`,
                children: (0, Z.jsx)(`div`, {
                  className: `h-1 w-9 rounded-full bg-muted-foreground/40`,
                }),
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                "data-no-drag": !0,
                className: `absolute right-1 top-1/2 flex h-8 w-9 -translate-y-1/2 items-center justify-center rounded text-muted-foreground hover:text-foreground`,
                "aria-label": u === `peek` ? `Open chat` : `Collapse chat`,
                "aria-expanded": u !== `peek`,
                onClick: () => w(u === `peek` ? `half` : `peek`),
                children: (0, Z.jsx)(ze, {
                  className: `h-4 w-4 transition-transform duration-200 ${u === `peek` ? `` : `rotate-180`}`,
                }),
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `flex min-h-0 flex-1 flex-col overflow-hidden px-3 pt-1`,
            style: { visibility: u === `peek` ? `hidden` : void 0 },
            children: (0, Z.jsx)(O4, { ...e }),
          }),
          (0, Z.jsx)(`div`, {
            ref: s,
            className: `shrink-0 px-3 pt-1 pb-[max(0.75rem,env(safe-area-inset-bottom))]`,
            style: { visibility: i && u === `peek` ? `hidden` : void 0 },
            onFocus: M,
            children: (0, Z.jsx)(k4, { ...t }),
          }),
        ],
      })
    );
  });
function mye() {
  let { treeState: e, selectNode: t } = Pc(),
    n = e.selectedNodeId,
    r = n ? e.nodes.get(n) : null;
  return r
    ? (0, Z.jsxs)(`div`, {
        className: `flex h-11 shrink-0 items-center gap-1 border-b border-border px-2`,
        children: [
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: () => t(null),
            "aria-label": `Back to creation flow`,
            className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground active:bg-accent`,
            children: (0, Z.jsx)(q, { className: `h-[18px] w-[18px]` }),
          }),
          (0, Z.jsx)(`h1`, {
            className: `min-w-0 flex-1 truncate text-sm font-semibold text-foreground`,
            children: r.name,
          }),
          (0, Z.jsx)(`span`, {
            className: `shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium`,
            style: {
              background: _1(r.state).replace(`0.8)`, `0.15)`),
              borderColor: _1(r.state).replace(`0.8)`, `0.3)`),
              color: _1(r.state).replace(`0.8)`, `1)`),
            },
            children: g1(r.state),
          }),
        ],
      })
    : null;
}
function hye({ bottom: e }) {
  let { selectNode: t } = Pc();
  return (0, Z.jsxs)(qe, {
    children: [
      (0, Z.jsx)(Ue, {
        asChild: !0,
        children: (0, Z.jsxs)(`button`, {
          type: `button`,
          "aria-label": `Flow menu`,
          className: `group absolute right-2 z-40 flex h-10 items-center gap-1.5 rounded-full border border-border bg-card/90 px-3.5 text-muted-foreground shadow-lg backdrop-blur-sm active:bg-accent data-[state=open]:bg-accent data-[state=open]:text-foreground`,
          style: { bottom: e },
          children: [
            (0, Z.jsx)(Do, { className: `h-4 w-4` }),
            (0, Z.jsx)(ze, {
              className: `h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180`,
            }),
          ],
        }),
      }),
      (0, Z.jsx)(Xe, {
        side: `top`,
        align: `end`,
        sideOffset: 8,
        className: `w-44`,
        children: n0
          .filter((e) => e.id !== `creation-flow`)
          .map((e) =>
            (0, Z.jsxs)(
              $e,
              {
                onSelect: () => t(e.id),
                className: `gap-2.5 py-2.5 text-sm`,
                children: [
                  (0, Z.jsx)(e.icon || x1[e.id] || cs, {
                    className: `h-4 w-4 text-muted-foreground`,
                  }),
                  e.label,
                ],
              },
              e.id,
            ),
          ),
      }),
    ],
  });
}
