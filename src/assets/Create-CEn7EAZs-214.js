// Create-CEn7EAZs 214 — current
// Lines 72830-73462 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Oue({
  nodeStates: e,
  visibleNodeIds: t,
  pendingUnlockIds: n,
  recentlyRevealed: r,
  onNodeClick: i,
  onUnlockNode: a,
  nodeProgress: o,
}) {
  let [s, c] = (0, X.useState)(null),
    [l, u] = (0, X.useState)(null),
    d = (0, X.useRef)(null),
    [f, m] = (0, X.useState)({ x: 0, y: 0, z: 1 }),
    h = (0, X.useRef)(f);
  h.current = f;
  let [g, _] = (0, X.useState)(0),
    v = (0, X.useRef)(!1),
    y = (0, X.useRef)({ x: 0, y: 0 }),
    b = (0, X.useRef)({ x: 0, y: 0 }),
    x = (0, X.useRef)(!1),
    S = (0, X.useRef)(!1),
    C = (0, X.useRef)(!1),
    w = (0, X.useRef)(new Map()),
    T = (0, X.useRef)(null),
    {
      positions: E,
      layout: D,
      edges: O,
      bounds: k,
    } = (0, X.useMemo)(() => {
      let e = G1(),
        t = Array.from(e, ([e, t]) => ({ id: e, x: t.x, y: t.y })),
        n = [];
      for (let { id: r } of t) {
        let t = hue(r);
        t && e.has(t) && n.push({ source: t, target: r });
      }
      let r = 1 / 0,
        i = -1 / 0,
        a = 1 / 0,
        o = -1 / 0;
      for (let e of t)
        (e.x < r && (r = e.x),
          e.x > i && (i = e.x),
          e.y < a && (a = e.y),
          e.y > o && (o = e.y));
      return {
        positions: t,
        layout: e,
        edges: n,
        bounds: { minX: r, maxX: i, minY: a, maxY: o },
      };
    }, []),
    A = k.maxX - k.minX + 100,
    j = k.maxY - k.minY + 100,
    M = -k.minX + 50,
    N = -k.minY + 50,
    P = (0, X.useMemo)(() => Cue(t, n), [t, n]),
    F = l ? (P.find((e) => e.parentId === l) ?? null) : null;
  ((0, X.useEffect)(() => {
    l && !F && u(null);
  }, [l, F]),
    (0, X.useLayoutEffect)(() => {
      if (!d.current || (S.current && !C.current)) return;
      ((C.current = !1), (S.current = !1));
      let e = d.current.clientWidth,
        n = d.current.clientHeight,
        r = 1 / 0,
        i = -1 / 0,
        a = 1 / 0,
        o = -1 / 0,
        s = (e) => {
          let t = D.get(e);
          if (!t) return;
          let n = t.x + M,
            s = t.y + N;
          (n < r && (r = n),
            n > i && (i = n),
            s < a && (a = s),
            s > o && (o = s));
        };
      for (let e of t) s(e);
      for (let e of P) s(e.slotNodeId);
      (r === 1 / 0 && s(`concept-lock-in`),
        r !== 1 / 0 &&
          m((t) => ({
            ...t,
            x: e / 2 - ((r + i) / 2) * t.z,
            y: n / 2 - ((a + o) / 2) * t.z,
          })));
    }, [D, t, P, M, N, g]),
    (0, X.useEffect)(() => {
      if (!l) return;
      let e = (e) => {
          e.target?.closest?.(`[data-tree-plus], [data-tree-popover]`) ||
            u(null);
        },
        t = (e) => {
          e.key === `Escape` && u(null);
        };
      return (
        document.addEventListener(`pointerdown`, e),
        document.addEventListener(`keydown`, t),
        () => {
          (document.removeEventListener(`pointerdown`, e),
            document.removeEventListener(`keydown`, t));
        }
      );
    }, [l]));
  let I = (0, X.useCallback)((t) => e.get(t)?.state || `locked`, [e]),
    L = (0, X.useCallback)((t) => e.get(t), [e]),
    R = (0, X.useRef)({ left: 0, top: 0 }),
    z = (0, X.useCallback)(() => {
      let e = d.current?.getBoundingClientRect();
      R.current = { left: e?.left ?? 0, top: e?.top ?? 0 };
    }, []),
    B = (0, X.useCallback)(
      (e, t) => ({ x: e - R.current.left, y: t - R.current.top }),
      [],
    ),
    H = (0, X.useCallback)((e) => {
      ((v.current = !0),
        (y.current = { ...e }),
        (b.current = { x: h.current.x, y: h.current.y }));
    }, []),
    ee = (0, X.useCallback)(() => {
      let [e, t] = [...w.current.values()];
      !e ||
        !t ||
        ((T.current = {
          dist: Math.hypot(t.x - e.x, t.y - e.y),
          midX: (e.x + t.x) / 2,
          midY: (e.y + t.y) / 2,
          view: h.current,
        }),
        (v.current = !1));
    }, []),
    te = (0, X.useCallback)(
      (e) => {
        (e.pointerType === `mouse` && w.current.clear(),
          z(),
          w.current.set(e.pointerId, B(e.clientX, e.clientY)),
          (x.current = !1),
          u(null),
          w.current.size === 1 ? H(w.current.get(e.pointerId)) : ee());
      },
      [B, z, H, ee],
    ),
    U = (0, X.useCallback)(
      (e) => {
        if (!w.current.has(e.pointerId)) return;
        let t = B(e.clientX, e.clientY);
        w.current.set(e.pointerId, t);
        let n = T.current;
        if (n && w.current.size >= 2) {
          let [e, t] = [...w.current.values()],
            r = Math.hypot(t.x - e.x, t.y - e.y);
          if (r <= 0 || n.dist <= 0) return;
          ((x.current = !0), (S.current = !0));
          let i = $1(n.view.z * (r / n.dist)),
            a = (n.midX - n.view.x) / n.view.z,
            o = (n.midY - n.view.y) / n.view.z;
          m({ x: (e.x + t.x) / 2 - a * i, y: (e.y + t.y) / 2 - o * i, z: i });
          return;
        }
        if (!v.current) return;
        if (!x.current) {
          let n = t.x - y.current.x,
            r = t.y - y.current.y;
          if (Math.abs(n) <= 3 && Math.abs(r) <= 3) return;
          ((x.current = !0), (S.current = !0));
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {}
        }
        let r = { x: t.x - y.current.x, y: t.y - y.current.y };
        ((y.current = t), m((e) => ({ ...e, x: e.x + r.x, y: e.y + r.y })));
      },
      [B],
    ),
    W = (0, X.useCallback)(
      (e) => {
        (w.current.delete(e),
          w.current.size < 2 && (T.current = null),
          w.current.size === 0
            ? (v.current = !1)
            : w.current.size === 1
              ? H([...w.current.values()][0])
              : ee());
      },
      [H, ee],
    ),
    ne = (0, X.useCallback)(
      (e) => {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        W(e.pointerId);
      },
      [W],
    ),
    G = (0, X.useCallback)(
      (e) => {
        e.target === e.currentTarget && W(e.pointerId);
      },
      [W],
    ),
    re = (0, X.useCallback)((e, t) => {
      let n = d.current,
        r = t ?? {
          x: (n?.clientWidth ?? 0) / 2,
          y: (n?.clientHeight ?? 0) / 2,
        };
      ((S.current = !0), m((t) => e0(t, t.z * e, r.x, r.y)));
    }, []),
    ie = (0, X.useCallback)(() => {
      ((S.current = !1), m((e) => ({ ...e, z: 1 })), _((e) => e + 1));
    }, []);
  (0, X.useEffect)(() => {
    let e = d.current;
    if (!e) return;
    let t = (t) => {
      (t.preventDefault(), z());
      let n = B(t.clientX, t.clientY),
        r =
          t.deltaMode === 1
            ? 16
            : t.deltaMode === 2
              ? e.clientHeight || 400
              : 1,
        i = Q1 ** ((-t.deltaY * r) / 100);
      ((S.current = !0), m((e) => e0(e, e.z * i, n.x, n.y)));
    };
    return (
      e.addEventListener(`wheel`, t, { passive: !1 }),
      () => e.removeEventListener(`wheel`, t)
    );
  }, [B, z]);
  let ae = (0, X.useCallback)((e) => {
      (e.stopPropagation(), (x.current = !1));
    }, []),
    oe = s ? L(s.nodeId) : null,
    se = s ? I(s.nodeId) : `locked`;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full`,
    children: [
      (0, Z.jsx)(`style`, { children: wue }),
      (0, Z.jsxs)(`div`, {
        className: `flex-1 overflow-hidden relative select-none`,
        ref: d,
        style: { cursor: v.current ? `grabbing` : `grab`, touchAction: `none` },
        onPointerDown: te,
        onPointerMove: U,
        onPointerUp: ne,
        onPointerCancel: ne,
        onLostPointerCapture: G,
        children: [
          (0, Z.jsx)(`div`, {
            style: {
              transform: `translate(${f.x}px, ${f.y}px) scale(${f.z})`,
              transformOrigin: `0 0`,
              position: `absolute`,
            },
            children: (0, Z.jsxs)(`svg`, {
              width: A,
              height: j,
              children: [
                O.map((e) => {
                  if (!t.has(e.source) || !t.has(e.target)) return null;
                  let n = D.get(e.source),
                    r = D.get(e.target);
                  if (!n || !r) return null;
                  let i =
                    I(e.source) === `complete` && I(e.target) === `complete`;
                  return (0, Z.jsx)(
                    `path`,
                    {
                      d: J1(n.x + M, n.y + N, r.x + M, r.y + N),
                      fill: `none`,
                      stroke: i ? `#34d399` : `#333`,
                      strokeWidth: 1,
                      opacity: 0.6,
                    },
                    `${e.source}-${e.target}`,
                  );
                }),
                P.map((e) => {
                  let t = D.get(e.parentId),
                    n = D.get(e.slotNodeId);
                  return !t || !n
                    ? null
                    : (0, Z.jsx)(
                        `path`,
                        {
                          d: J1(t.x + M, t.y + N, n.x + M, n.y + N, 42 / 2, Y1),
                          fill: `none`,
                          stroke: `#3d3a4d`,
                          strokeWidth: 1,
                          strokeDasharray: `4 4`,
                          opacity: 0.8,
                        },
                        `slot-edge-${e.parentId}`,
                      );
                }),
                E.map((e) => {
                  if (!t.has(e.id)) return null;
                  let n = L(e.id);
                  if (!n) return null;
                  let a = I(e.id),
                    l = Tue[a],
                    u = T1[e.id] || Bs,
                    d = $s[n.domain],
                    f = e.x + M,
                    m = e.y + N,
                    h = s?.nodeId === e.id,
                    g = r.has(e.id),
                    _ = a === `in-progress` ? o?.get(e.id) : void 0;
                  return (0, Z.jsxs)(
                    `g`,
                    {
                      "data-tour": `node-${e.id}`,
                      className: p(`cursor-pointer`, g && `tree-node-appear`),
                      onClick: () => !x.current && a !== `locked` && i(e.id),
                      onMouseEnter: () => c({ nodeId: e.id, x: f, y: m }),
                      onMouseLeave: () => c(null),
                      style: { opacity: l.opacity },
                      children: [
                        g &&
                          (0, Z.jsx)(`circle`, {
                            className: `tree-node-appear-ring`,
                            cx: f,
                            cy: m,
                            r: 23,
                            fill: `none`,
                            stroke: d?.primary || `#a99cf0`,
                            strokeWidth: 2,
                          }),
                        h &&
                          a !== `locked` &&
                          (0, Z.jsx)(`circle`, {
                            cx: f,
                            cy: m,
                            r: 25,
                            fill: `none`,
                            stroke: d?.primary || `#888`,
                            strokeWidth: 1.5,
                            opacity: 0.4,
                          }),
                        l.animate && _
                          ? (0, Z.jsx)(E1, {
                              cx: f,
                              cy: m,
                              r: 21,
                              fraction: _.fraction,
                              color: d?.primary || `hsl(269 84% 45%)`,
                              offset: 3,
                              strokeWidth: 2.5,
                            })
                          : l.animate
                            ? (0, Z.jsxs)(`circle`, {
                                cx: f,
                                cy: m,
                                r: 24,
                                fill: `none`,
                                stroke: `hsl(269 84% 45%)`,
                                strokeWidth: 1.5,
                                opacity: 0.6,
                                children: [
                                  (0, Z.jsx)(`animate`, {
                                    attributeName: `r`,
                                    values: `23;27;23`,
                                    dur: `2s`,
                                    repeatCount: `indefinite`,
                                  }),
                                  (0, Z.jsx)(`animate`, {
                                    attributeName: `opacity`,
                                    values: `0.6;0.1;0.6`,
                                    dur: `2s`,
                                    repeatCount: `indefinite`,
                                  }),
                                ],
                              })
                            : null,
                        (0, Z.jsx)(`circle`, {
                          cx: f,
                          cy: m,
                          r: 21,
                          fill: l.fill,
                          stroke: l.stroke,
                          strokeWidth: h ? 2 : 1.5,
                        }),
                        (0, Z.jsx)(`foreignObject`, {
                          x: f - 21 * 0.55,
                          y: m - 21 * 0.55,
                          width: 21 * 1.1,
                          height: 21 * 1.1,
                          children: (0, Z.jsx)(`div`, {
                            className: `flex items-center justify-center w-full h-full`,
                            children: (0, Z.jsx)(u, {
                              className: `w-[19px] h-[19px]`,
                              style: {
                                color:
                                  a === `locked`
                                    ? `#555`
                                    : d?.primary || `#aaa`,
                              },
                            }),
                          }),
                        }),
                        a === `complete` &&
                          (0, Z.jsx)(`circle`, {
                            cx: f + 21 * 0.6,
                            cy: m - 21 * 0.6,
                            r: 4.5,
                            fill: `#34d399`,
                            stroke: l.fill,
                            strokeWidth: 1.5,
                          }),
                      ],
                    },
                    e.id,
                  );
                }),
                P.map((e) => {
                  let t = D.get(e.slotNodeId);
                  if (!t) return null;
                  let n = t.x + M,
                    r = t.y + N,
                    i = l === e.parentId,
                    a = i ? `#a99cf0` : `#6b6488`,
                    o = i ? `#c4bbf5` : `#9a92b8`;
                  return (0, Z.jsxs)(
                    `g`,
                    {
                      className: `cursor-pointer`,
                      "data-tree-plus": !0,
                      "data-tour":
                        e.parentId === `sfx` ? `tour-add-node` : void 0,
                      onPointerDown: ae,
                      onClick: (t) => {
                        (t.stopPropagation(),
                          !x.current &&
                            (l !== e.parentId &&
                              mr(`tour:add-open`, e.parentId),
                            u((t) => (t === e.parentId ? null : e.parentId))));
                      },
                      children: [
                        (0, Z.jsx)(`circle`, {
                          cx: n,
                          cy: r,
                          r: 17,
                          fill: `transparent`,
                        }),
                        (0, Z.jsx)(`circle`, {
                          cx: n,
                          cy: r,
                          r: Y1,
                          fill: i ? `#1d1a2e` : `#15151d`,
                          stroke: a,
                          strokeWidth: 1.2,
                          strokeDasharray: `3 2.5`,
                        }),
                        (0, Z.jsx)(`path`, {
                          d: `M ${n - 4.5} ${r} H ${n + 4.5} M ${n} ${r - 4.5} V ${r + 4.5}`,
                          stroke: o,
                          strokeWidth: 1.6,
                          strokeLinecap: `round`,
                        }),
                      ],
                    },
                    `slot-${e.parentId}`,
                  );
                }),
              ],
            }),
          }),
          (0, Z.jsxs)(`div`, {
            className: `absolute bottom-2 right-2 max-md:bottom-[3.75rem] z-40 flex flex-col rounded-lg border border-border bg-card/90 backdrop-blur-sm shadow-lg overflow-hidden`,
            onPointerDown: ae,
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                "aria-label": `Zoom in`,
                title: `Zoom in`,
                disabled: f.z >= Z1,
                onClick: () => re(Q1),
                className: `p-2.5 sm:p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors disabled:opacity-30 disabled:hover:bg-transparent`,
                children: (0, Z.jsx)(Br, { className: `h-3.5 w-3.5` }),
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                "aria-label": `Reset view`,
                title: `Reset view (${Math.round(f.z * 100)}%)`,
                onClick: ie,
                className: `p-2.5 sm:p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-y border-border`,
                children: (0, Z.jsx)(rn, { className: `h-3.5 w-3.5` }),
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                "aria-label": `Zoom out`,
                title: `Zoom out`,
                disabled: f.z <= X1,
                onClick: () => re(1 / Q1),
                className: `p-2.5 sm:p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors disabled:opacity-30 disabled:hover:bg-transparent`,
                children: (0, Z.jsx)(V, { className: `h-3.5 w-3.5` }),
              }),
            ],
          }),
          s &&
            oe &&
            (() => {
              let e = d.current?.clientWidth || 400,
                t = f.x + s.x * f.z,
                n = f.y + s.y * f.z,
                r = 42 * f.z;
              return (0, Z.jsx)(`div`, {
                className: `absolute z-30 pointer-events-none`,
                style: {
                  left: t + r + 190 > e - 16 ? t - 190 - 8 : t + r,
                  top: n - 8,
                },
                children: (0, Z.jsxs)(`div`, {
                  className: `bg-card border border-border rounded-lg px-3 py-2.5 shadow-xl`,
                  style: { width: 190 },
                  children: [
                    (0, Z.jsx)(`p`, {
                      className: `text-xs font-medium text-foreground`,
                      children: oe.name,
                    }),
                    (0, Z.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground leading-tight mt-1`,
                      children: oe.description,
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 mt-2`,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: p(`h-1.5 w-1.5 rounded-full`, Due[se]),
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-[10px] text-primary font-medium`,
                          children: Eue[se],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            })(),
          F &&
            (() => {
              let t = D.get(F.slotNodeId);
              if (!t) return null;
              let n = d.current?.clientWidth || 400,
                r = d.current?.clientHeight || 400,
                i = f.x + (t.x + M) * f.z,
                o = f.y + (t.y + N) * f.z,
                s = Y1 * f.z,
                c = i + s + 8 + 220 > n - 16,
                l = o > r * 0.6,
                p = L(F.parentId)?.name ?? F.parentId;
              return (0, Z.jsx)(`div`, {
                className: `absolute z-40`,
                "data-tree-popover": !0,
                style: {
                  left: c ? i - s - 8 - 220 : i + s + 8,
                  ...(l ? { bottom: r - o - s } : { top: o - s }),
                },
                onPointerDown: ae,
                children: (0, Z.jsxs)(`div`, {
                  className: `bg-card border border-border rounded-lg py-1.5 shadow-xl`,
                  style: { width: 220 },
                  children: [
                    (0, Z.jsxs)(`p`, {
                      className: `text-[10px] uppercase tracking-wider text-muted-foreground/70 px-3 pb-1 truncate`,
                      children: [`Add after `, p],
                    }),
                    F.options.map((t) => {
                      let n = L(t);
                      if (!n) return null;
                      let r = T1[t] || Bs,
                        i = bue(t, e).filter((e) => !e.met);
                      return (0, Z.jsxs)(
                        `button`,
                        {
                          "data-tour":
                            t === `sfx-drop-in` ? `tour-add-popover` : void 0,
                          onClick: () => {
                            ((C.current = !0),
                              a(t),
                              mr(`tour:node-added`, t),
                              u(null));
                          },
                          className: `w-full px-3 py-1.5 text-left hover:bg-accent transition-colors`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, Z.jsx)(r, {
                                  className: `h-3.5 w-3.5 shrink-0`,
                                  style: {
                                    color: $s[n.domain]?.primary || `#aaa`,
                                  },
                                }),
                                (0, Z.jsx)(`span`, {
                                  className: `text-xs text-foreground`,
                                  children: n.name,
                                }),
                              ],
                            }),
                            i.length > 0 &&
                              (0, Z.jsxs)(`span`, {
                                className: `block text-[10px] text-amber-400/80 leading-tight mt-0.5 pl-[22px]`,
                                children: [
                                  `Needs `,
                                  i.map((e) => e.name).join(`, `),
                                  ` to run`,
                                ],
                              }),
                          ],
                        },
                        t,
                      );
                    }),
                  ],
                }),
              });
            })(),
        ],
      }),
    ],
  });
}
