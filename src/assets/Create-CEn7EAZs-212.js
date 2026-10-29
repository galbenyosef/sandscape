// Create-CEn7EAZs 212 — jsx
// Lines 72310-72651 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function aue({
  cx: e,
  cy: t,
  r: n,
  fraction: r,
  color: i = iue,
  offset: a = 2,
  strokeWidth: o = 2,
}) {
  let s = n + a;
  if (r === void 0)
    return (0, Z.jsxs)(`circle`, {
      cx: e,
      cy: t,
      r: s,
      fill: `none`,
      stroke: i,
      strokeWidth: o - 0.5,
      opacity: 0.6,
      children: [
        (0, Z.jsx)(`animate`, {
          attributeName: `r`,
          values: `${s};${s + 4};${s}`,
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
    });
  let c = Math.max(0, Math.min(1, r)),
    l = 2 * Math.PI * s;
  return (0, Z.jsxs)(`g`, {
    transform: `rotate(-90 ${e} ${t})`,
    children: [
      (0, Z.jsx)(`circle`, {
        cx: e,
        cy: t,
        r: s,
        fill: `none`,
        stroke: i,
        strokeWidth: o,
        opacity: 0.15,
      }),
      (0, Z.jsx)(`circle`, {
        cx: e,
        cy: t,
        r: s,
        fill: `none`,
        stroke: i,
        strokeWidth: o,
        strokeLinecap: `round`,
        strokeDasharray: l,
        strokeDashoffset: l * (1 - c),
        opacity: 0.9,
      }),
    ],
  });
}
var E1 = (0, X.memo)(aue),
  oue = new Set([`project`]),
  sue = [`editor-`, `settings`, `budget`, `history`];
function D1(e) {
  return !(oue.has(e.domain) || sue.some((t) => e.id.startsWith(t)));
}
function cue() {
  let e = rc(),
    t = new Map();
  for (let n of e) {
    let e = nc.find((e) => e.id === n.source),
      r = nc.find((e) => e.id === n.target);
    e && r && D1(e) && D1(r) && t.set(n.target, n.source);
  }
  return t;
}
function lue() {
  let e = rc(),
    t = new Map();
  for (let n of e) {
    let e = nc.find((e) => e.id === n.source),
      r = nc.find((e) => e.id === n.target);
    if (e && r && D1(e) && D1(r)) {
      let e = t.get(n.source) || [];
      (e.push(n.target), t.set(n.source, e));
    }
  }
  return t;
}
function uue(e, t) {
  let n = [],
    r = e;
  for (; r;) (n.unshift(r), (r = t.get(r)));
  return n;
}
function due(e, t, n) {
  let r = uue(e, t),
    i = new Set(r),
    a = [];
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if ((a.push(t), e < r.length - 1)) {
      let e = n.get(t) || [];
      for (let t of e) i.has(t);
    }
  }
  let o = n.get(e) || [];
  return (a.push(...o), a);
}
var O1 = 24,
  k1 = 38,
  A1 = 36,
  j1 = A1 / 2;
function fue({
  nodeStates: e,
  selectedNodeId: t,
  visibleNodeIds: n,
  onNodeClick: r,
  nodeProgress: i,
}) {
  let { branchNodes: a, parentMap: o } = (0, X.useMemo)(() => {
    let e = cue(),
      r = lue();
    return t
      ? { branchNodes: due(t, e, r).filter((e) => n.has(e)), parentMap: e }
      : { branchNodes: [], parentMap: e };
  }, [t, n]);
  if (a.length === 0) return null;
  let s = a.length * k1 + 24,
    c = (t) => e.get(t)?.state || `locked`;
  return (0, Z.jsx)(`div`, {
    className: `px-3 py-2 border-b border-border shrink-0 overflow-x-auto scrollbar-hide`,
    children: (0, Z.jsx)(Ut, {
      delayDuration: 150,
      children: (0, Z.jsxs)(`svg`, {
        width: s,
        height: A1,
        className: `block`,
        children: [
          a.map((e, t) => {
            if (t === 0) return null;
            let n = 12 + (t - 1) * k1 + O1 / 2,
              r = 12 + t * k1 - O1 / 2 + 2,
              i = c(a[t - 1]),
              o = c(e),
              s = i === `complete` && o === `complete`;
            return (0, Z.jsx)(
              `line`,
              {
                x1: n + 1,
                y1: j1,
                x2: r - 1,
                y2: j1,
                stroke: s ? `#34d399` : `#333`,
                strokeWidth: 1,
                opacity: 0.5,
              },
              `line-${t}`,
            );
          }),
          a.map((n, a) => {
            let o = c(n),
              s = e.get(n),
              l = s ? $s[s.domain] : null,
              u = T1[n] || Bs,
              d = n === t,
              f = o === `locked`,
              m = 12 + a * k1,
              h = O1 / 2,
              g = `#333`,
              _ = `#1a1a22`,
              v = 0.35;
            return (
              o === `complete`
                ? ((g = `#34d399`), (_ = `#1e2a24`), (v = 1))
                : o === `in-progress`
                  ? ((g = `hsl(269 84% 45%)`), (_ = `#1e1e2a`), (v = 1))
                  : o === `needs-review`
                    ? ((g = `#fbbf24`), (_ = `#2a2618`), (v = 1))
                    : o === `available` &&
                      ((g = `#555`), (_ = `#1e1e2a`), (v = 0.8)),
              (0, Z.jsxs)(
                qt,
                {
                  children: [
                    (0, Z.jsx)(Kt, {
                      asChild: !0,
                      children: (0, Z.jsxs)(`g`, {
                        className: p(
                          `cursor-pointer`,
                          f && `cursor-not-allowed`,
                        ),
                        onClick: () => !f && r(n),
                        style: { opacity: v },
                        children: [
                          d &&
                            (0, Z.jsx)(`circle`, {
                              cx: m + h,
                              cy: j1,
                              r: 14.5,
                              fill: `none`,
                              stroke: `hsl(269 84% 45%)`,
                              strokeWidth: 1.5,
                              opacity: 0.6,
                            }),
                          o === `in-progress` &&
                            i?.get(n) &&
                            (0, Z.jsx)(E1, {
                              cx: m + h,
                              cy: j1,
                              r: h,
                              fraction: i.get(n).fraction,
                              color: l?.primary || `hsl(269 84% 45%)`,
                              offset: 1.5,
                              strokeWidth: 1.5,
                            }),
                          (0, Z.jsx)(`circle`, {
                            cx: m + h,
                            cy: j1,
                            r: h,
                            fill: _,
                            stroke: g,
                            strokeWidth: 1.5,
                          }),
                          (0, Z.jsx)(`foreignObject`, {
                            x: m + h - 5,
                            y: j1 - 5,
                            width: 10,
                            height: 10,
                            children: (0, Z.jsx)(`div`, {
                              className: `flex items-center justify-center w-full h-full`,
                              children: (0, Z.jsx)(u, {
                                className: `w-[8px] h-[8px]`,
                                style: {
                                  color: f ? `#555` : l?.primary || `#aaa`,
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, Z.jsx)(Wt, {
                      side: `bottom`,
                      className: `text-[10px] bg-card border-border py-1 px-2`,
                      children: (0, Z.jsx)(`span`, {
                        className: `font-medium`,
                        children: s?.name || n,
                      }),
                    }),
                  ],
                },
                n,
              )
            );
          }),
        ],
      }),
    }),
  });
}
var pue = new Set([`project`]),
  mue = [`editor-`, `settings`, `budget`, `history`];
function M1(e) {
  return !(pue.has(e.domain) || mue.some((t) => e.id.startsWith(t)));
}
var N1 = `concept-lock-in`,
  P1 = [N1, `style-guide`],
  F1 = [`gdd`, `build-first-playable`, `uiux-direction`],
  I1 = [
    `environment-map`,
    `character-concepts`,
    `concept-art`,
    `2d-assets`,
    `audio-direction`,
    `voice-cast`,
  ];
function L1(e, t, n) {
  let r = e.get(t) ?? [];
  (r.push(n), e.set(t, r));
}
var R1 = null;
function z1() {
  if (R1) return R1;
  let e = new Map(),
    t = new Map();
  for (let n of rc()) {
    let r = ic(n.source),
      i = ic(n.target);
    !r ||
      !i ||
      !M1(r) ||
      !M1(i) ||
      (L1(e, n.source, n.target), t.set(n.target, n.source));
  }
  return ((R1 = { children: e, parentOf: t }), R1);
}
function B1(e) {
  return z1().children.get(e) ?? [];
}
function hue(e) {
  return z1().parentOf.get(e);
}
function V1(e) {
  let t = new Map(),
    n = new Set([N1]),
    r = (e) => {
      for (let i of B1(e)) n.has(i) || (n.add(i), L1(t, e, i), r(i));
    };
  for (let i of e) n.has(i) || (n.add(i), L1(t, N1, i), r(i));
  return t;
}
function H1(e, t) {
  let n = t.get(e) ?? [];
  return n.length === 0 ? 1 : n.reduce((e, n) => e + H1(n, t), 0);
}
function U1(e, t, n, r, i, a) {
  let o = t.get(e) ?? [];
  if (o.length === 0) return;
  let s = n - (o.reduce((e, n) => e + H1(n, t), 0) * 52) / 2 + 52 / 2;
  for (let e of o) {
    let n = H1(e, t),
      o = s + (n * 52) / 2 - 52 / 2,
      c = r + i * 100;
    (a.set(e, { x: o, y: c }), U1(e, t, o, c, i, a), (s += n * 52));
  }
}
function W1() {
  let e = new Map();
  return (
    P1.forEach((t, n) => e.set(t, { x: n * 130, y: 0 })),
    U1(N1, V1(I1), 0, 0, 1, e),
    U1(N1, V1(F1), 0, 0, -1, e),
    {
      positions: e,
      unplaced: nc.filter((t) => M1(t) && !e.has(t.id)).map((e) => e.id),
    }
  );
}
