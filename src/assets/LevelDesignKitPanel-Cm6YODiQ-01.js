// LevelDesignKitPanel-Cm6YODiQ 01 — children
// Lines 1-349 of readable/assets/LevelDesignKitPanel-Cm6YODiQ.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./useToast-QK0Q4gGT.js";
import { r as i, t as a } from "./button-gyaE5cND.js";
import {
  A as o,
  D as s,
  M as c,
  O as l,
  U as u,
  Z as d,
  a as f,
  b as p,
  c as m,
  d as h,
  f as g,
  g as _,
  h as v,
  i as ee,
  k as te,
  l as y,
  m as b,
  n as x,
  o as ne,
  p as re,
  r as ie,
  s as ae,
  u as S,
} from "./SceneEditor-NC7_0wmu.js";
import { t as oe } from "./check-8B-bFngd.js";
import { c as C, h as se } from "./dnd-CfiPSimc.js";
import {
  a as ce,
  i as w,
  o as le,
  r as ue,
  s as T,
} from "./CoinDisplay-JJDtxOIB.js";
import { t as de } from "./copy-C3ryofZQ.js";
import { t as E } from "./loader-circle-BWNSk5u-.js";
import { t as fe } from "./refresh-cw-Bg4R4J17.js";
import { n as D } from "./coinService-CUupqiCF.js";
import { s as pe } from "./tour-D03BMTEP.js";
import { D as me, T as he } from "./gameCreation-B6oXUVk-.js";
import {
  M as ge,
  X as _e,
  Z as ve,
  dt as ye,
  q as be,
  tt as xe,
} from "./index-CBcimEr9.js";
import {
  Kt as Se,
  Q as Ce,
  R as O,
  Rn as k,
  Y as A,
  dn as we,
  f as j,
  ln as Te,
  o as Ee,
} from "./three.module-CvxFRqeD.js";
import { d as De } from "./useActionPrice-BihhCOgj.js";
import { a as Oe, n as ke, o as Ae, t as je } from "./dialog-Ch9xjUi2.js";
var Me = i(`ImagePlus`, [
    [`path`, { d: `M16 5h6`, key: `1vod17` }],
    [`path`, { d: `M19 2v6`, key: `4bpg5p` }],
    [
      `path`,
      {
        d: `M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5`,
        key: `1ue2ih`,
      },
    ],
    [`path`, { d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`, key: `1xmnt7` }],
    [`circle`, { cx: `9`, cy: `9`, r: `2`, key: `af1f0g` }],
  ]),
  Ne = i(`PackageOpen`, [
    [`path`, { d: `M12 22v-9`, key: `x3hkom` }],
    [
      `path`,
      {
        d: `M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z`,
        key: `2ntwy6`,
      },
    ],
    [
      `path`,
      {
        d: `M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13`,
        key: `1pmm1c`,
      },
    ],
    [
      `path`,
      {
        d: `M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z`,
        key: `12ttoo`,
      },
    ],
  ]),
  M = e(t()),
  N = n();
function Pe({
  cost: e,
  maxCost: t = null,
  label: n,
  icon: r,
  isLoading: i = !1,
  loadingText: o,
  checkBalance: s = !0,
  currentBalance: c,
  onInsufficientBalance: l,
  tooltip: u,
  showCostBreakdown: d = !1,
  costBreakdown: f,
  disabled: p,
  className: m = ``,
  variant: h = `default`,
  ...g
}) {
  let [_, v] = (0, M.useState)(c ?? null),
    [ee, te] = (0, M.useState)(!1);
  ((0, M.useEffect)(() => {
    s && c === void 0
      ? (te(!0),
        D.getBalance().then((e) => {
          (e.success && v(e.balance), te(!1));
        }))
      : c !== void 0 && v(c);
  }, [s, c]),
    (0, M.useEffect)(() => {
      let e = async () => {
        let e = await D.getBalance();
        e.success && v(e.balance);
      };
      return (
        window.addEventListener(`coin-balance-refresh`, e),
        () => window.removeEventListener(`coin-balance-refresh`, e)
      );
    }, []));
  let y = s && e !== null && _ !== null && _ < e,
    b = e !== null && t !== null && t > e,
    x = pe(),
    ne = p || i || ee || y || x;
  (0, M.useEffect)(() => {
    y && l && l();
  }, [y, l]);
  let re = (0, N.jsx)(a, {
    variant: y ? `outline` : h,
    disabled: ne,
    className: `gap-2 ${y ? `opacity-60` : ``} ${m}`,
    ...g,
    children: i
      ? (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(E, { className: `h-4 w-4 animate-spin` }),
            o || `Processing...`,
          ],
        })
      : (0, N.jsxs)(N.Fragment, {
          children: [
            r,
            (0, N.jsx)(`span`, { children: n }),
            e !== null &&
              (0, N.jsxs)(`span`, {
                className: `inline-flex items-center gap-0.5 text-amber-400`,
                children: [
                  (0, N.jsxs)(`span`, {
                    className: `text-xs`,
                    children: [`(`, e, b ? `–${t}` : ``],
                  }),
                  (0, N.jsx)(T, { className: `h-3 w-3` }),
                  (0, N.jsx)(`span`, { className: `text-xs`, children: `)` }),
                ],
              }),
          ],
        }),
  });
  return !u && !d && !y
    ? re
    : (0, N.jsx)(ce, {
        children: (0, N.jsxs)(ue, {
          children: [
            (0, N.jsx)(le, { asChild: !0, children: re }),
            (0, N.jsx)(w, {
              side: `top`,
              className: `bg-gray-900 border-gray-700 text-gray-200 p-3 max-w-xs`,
              children: (0, N.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  u && (0, N.jsx)(`p`, { className: `text-sm`, children: u }),
                  b &&
                    (0, N.jsxs)(`div`, {
                      className: `text-xs text-gray-400`,
                      children: [
                        e,
                        ` coins are held up front; up to `,
                        t,
                        ` if the agent adds assets the direction needs.`,
                      ],
                    }),
                  y &&
                    (0, N.jsxs)(`div`, {
                      className: `text-red-400 text-sm`,
                      children: [
                        `Insufficient balance! You need `,
                        e,
                        ` coins but have`,
                        ` `,
                        _ ?? 0,
                        `.`,
                      ],
                    }),
                  d &&
                    f &&
                    f.length > 0 &&
                    (0, N.jsxs)(`div`, {
                      className: `border-t border-gray-700 pt-2 mt-2`,
                      children: [
                        (0, N.jsx)(`div`, {
                          className: `text-xs text-gray-400 mb-1`,
                          children: `Cost Breakdown:`,
                        }),
                        f.map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex justify-between text-xs text-gray-300`,
                              children: [
                                (0, N.jsx)(`span`, { children: e.label }),
                                (0, N.jsxs)(`span`, {
                                  className: `text-amber-400`,
                                  children: [
                                    e.cost,
                                    ` `,
                                    (0, N.jsx)(T, {
                                      className: `h-2.5 w-2.5 inline`,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                        e !== null &&
                          (0, N.jsxs)(`div`, {
                            className: `flex justify-between text-xs font-semibold text-white border-t border-gray-700 mt-1 pt-1`,
                            children: [
                              (0, N.jsx)(`span`, { children: `Total` }),
                              (0, N.jsxs)(`span`, {
                                className: `text-amber-400`,
                                children: [
                                  e,
                                  ` `,
                                  (0, N.jsx)(T, {
                                    className: `h-2.5 w-2.5 inline`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  s &&
                    _ !== null &&
                    !y &&
                    (0, N.jsxs)(`div`, {
                      className: `text-xs text-gray-400 border-t border-gray-700 pt-2 mt-2`,
                      children: [
                        `Your balance: `,
                        _,
                        ` coins`,
                        e !== null && ` (after: ${_ - e})`,
                      ],
                    }),
                ],
              }),
            }),
          ],
        }),
      });
}
function Fe(e, t, n) {
  let r = t.error,
    i =
      typeof r == `string` && r
        ? r
        : r == null
          ? n.fallback
          : P(r) || n.fallback;
  return t.error_code === `INSUFFICIENT_BALANCE`
    ? ge(e, i)
    : (e({
        title: n.title,
        description: i,
        variant: n.variant ?? `destructive`,
      }),
      i);
}
function P(e) {
  if (Array.isArray(e)) {
    let t = e
      .map((e) =>
        typeof e == `string` ? e : typeof e?.msg == `string` ? e.msg : ``,
      )
      .filter(Boolean);
    if (t.length) return t.join(`; `);
  }
  if (e && typeof e == `object`) {
    let t = e.msg ?? e.message;
    if (typeof t == `string` && t) return t;
  }
  try {
    return typeof e == `string` ? e : (JSON.stringify(e) ?? ``);
  } catch {
    return ``;
  }
}
var Ie = [
  `floor`,
  `corridor_floor`,
  `arena_floor`,
  `wall`,
  `corridor_wall`,
  `arena_wall`,
  `ceiling`,
  `corridor_ceiling`,
  `arena_ceiling`,
  `door`,
  `column`,
  `beam`,
  `trim`,
  `pillar`,
  `prop`,
  `wall_panel`,
  `light_socket`,
  `floor_insert`,
];
function Le(e) {
  return e
    .replace(/\.[a-z0-9]+$/i, ``)
    .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}
