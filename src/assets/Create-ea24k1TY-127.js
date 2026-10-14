// Create-ea24k1TY 127 — classname
// Lines 43008-43357 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function rI({ sessionId: e, className: t = `` }) {
  let [n, r] = (0, X.useState)(null),
    [i, a] = (0, X.useState)(!0),
    [o, s] = (0, X.useState)(!1),
    c = (0, X.useCallback)(
      async (t = !1) => {
        t && s(!0);
        try {
          let t = await Wt.getBudget(e);
          t.success && r(t);
        } catch (e) {
          console.error(`Error fetching budget:`, e);
        } finally {
          (a(!1), s(!1));
        }
      },
      [e],
    );
  if (
    ((0, X.useEffect)(() => {
      c();
    }, [c]),
    (0, X.useEffect)(() => {
      let e = () => c(!0);
      return (
        window.addEventListener(`coin-balance-refresh`, e),
        () => window.removeEventListener(`coin-balance-refresh`, e)
      );
    }, [c]),
    i)
  )
    return (0, Z.jsx)(`div`, {
      className: `flex items-center justify-center h-64 ${t}`,
      children: (0, Z.jsx)(xn, {
        className: `h-8 w-8 text-gray-500 animate-spin`,
      }),
    });
  if (!n)
    return (0, Z.jsxs)(`div`, {
      className: `flex flex-col items-center justify-center h-64 text-gray-500 ${t}`,
      children: [
        (0, Z.jsx)(Xt, { className: `h-12 w-12 mb-4 opacity-50` }),
        (0, Z.jsx)(`p`, { children: `No budget data available` }),
      ],
    });
  let l = n.breakdown.reduce((e, t) => e + t.total_spent, 0),
    u = Math.max(...n.breakdown.map((e) => e.total_spent), 1);
  return (0, Z.jsxs)(`div`, {
    className: `h-full flex flex-col ${t}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `p-4 border-b border-gray-700/50`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between mb-4`,
            children: [
              (0, Z.jsxs)(`h2`, {
                className: `text-lg font-semibold text-white flex items-center gap-2`,
                children: [
                  (0, Z.jsx)(uo, { className: `h-5 w-5 text-primary` }),
                  `Project Budget`,
                ],
              }),
              (0, Z.jsx)(`button`, {
                onClick: () => c(!0),
                className: `p-2 hover:bg-gray-700/50 rounded-lg transition-colors`,
                disabled: o,
                children: (0, Z.jsx)(xn, {
                  className: `h-4 w-4 text-gray-400 ${o ? `animate-spin` : ``}`,
                }),
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `bg-gray-800/50 rounded-lg p-3`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `text-xs text-gray-400 mb-1`,
                    children: `Available`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `text-xl font-bold text-amber-400 flex items-center gap-1`,
                    children: [
                      (0, Z.jsx)(Xt, { className: `h-4 w-4` }),
                      Wt.formatCoins(n.balance),
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `bg-gray-800/50 rounded-lg p-3`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `text-xs text-gray-400 mb-1 flex items-center gap-1`,
                    children: [
                      (0, Z.jsx)(ns, { className: `h-3 w-3 text-red-400` }),
                      `Spent`,
                    ],
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `text-xl font-bold text-red-400`,
                    children: Wt.formatCoins(n.lifetime_spent),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)($r, {
        className: `flex-1`,
        children: (0, Z.jsxs)(`div`, {
          className: `p-4 space-y-6`,
          children: [
            n.breakdown.length > 0 &&
              l > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `bg-gray-800/30 rounded-lg p-4`,
                children: [
                  (0, Z.jsxs)(`h3`, {
                    className: `text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2`,
                    children: [
                      (0, Z.jsx)(uo, { className: `h-4 w-4 text-primary` }),
                      `Budget Distribution`,
                    ],
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `h-48`,
                    children: (0, Z.jsx)(Ey, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, Z.jsxs)(QF, {
                        children: [
                          (0, Z.jsx)(Zj, {
                            data: n.breakdown.map((e) => ({
                              name: e.category_label,
                              value: e.total_spent,
                              category: e.category,
                            })),
                            cx: `50%`,
                            cy: `50%`,
                            innerRadius: 40,
                            outerRadius: 70,
                            paddingAngle: 2,
                            dataKey: `value`,
                            children: n.breakdown.map((e, t) =>
                              (0, Z.jsx)(
                                Dy,
                                { fill: tI[e.category], stroke: `transparent` },
                                `cell-${t}`,
                              ),
                            ),
                          }),
                          (0, Z.jsx)(sy, {
                            contentStyle: {
                              backgroundColor: `#1f2937`,
                              border: `1px solid #374151`,
                              borderRadius: `8px`,
                              padding: `8px 12px`,
                            },
                            formatter: (e, t) => [
                              `${Wt.formatCoins(e)} coins`,
                              t,
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`h3`, {
                  className: `text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(Zr, { className: `h-4 w-4 text-primary` }),
                    `Department Spending`,
                  ],
                }),
                n.breakdown.length === 0
                  ? (0, Z.jsxs)(`div`, {
                      className: `text-center py-8 text-gray-500`,
                      children: [
                        (0, Z.jsx)(Xt, {
                          className: `h-8 w-8 mx-auto mb-2 opacity-50`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm`,
                          children: `No spending recorded yet`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-gray-600 mt-1`,
                          children: `Costs will appear here as you use AI features`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `space-y-3`,
                      children: n.breakdown.map((e) => {
                        let t = l > 0 ? (e.total_spent / l) * 100 : 0,
                          n = (e.total_spent / u) * 100;
                        return (0, Z.jsxs)(
                          `div`,
                          {
                            className: `p-3 rounded-lg ${nI[e.category]} border border-gray-700/30`,
                            children: [
                              (0, Z.jsxs)(`div`, {
                                className: `flex items-center justify-between mb-2`,
                                children: [
                                  (0, Z.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, Z.jsx)(`div`, {
                                        className: `p-1.5 rounded ${eI[e.category]} text-white`,
                                        children: $F[e.category],
                                      }),
                                      (0, Z.jsxs)(`div`, {
                                        children: [
                                          (0, Z.jsx)(`div`, {
                                            className: `text-sm font-medium text-white`,
                                            children: e.category_label,
                                          }),
                                          (0, Z.jsxs)(`div`, {
                                            className: `text-xs text-gray-400`,
                                            children: [
                                              e.transaction_count,
                                              ` transaction`,
                                              e.transaction_count === 1
                                                ? ``
                                                : `s`,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Z.jsxs)(`div`, {
                                    className: `text-right`,
                                    children: [
                                      (0, Z.jsx)(`div`, {
                                        className: `text-sm font-bold text-white`,
                                        children: Wt.formatCoins(e.total_spent),
                                      }),
                                      (0, Z.jsxs)(`div`, {
                                        className: `text-xs text-gray-400`,
                                        children: [t.toFixed(1), `%`],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Z.jsx)(`div`, {
                                className: `h-2 bg-gray-700/50 rounded-full overflow-hidden`,
                                children: (0, Z.jsx)(`div`, {
                                  className: `h-full ${eI[e.category]} transition-all duration-500`,
                                  style: { width: `${n}%` },
                                }),
                              }),
                            ],
                          },
                          e.category,
                        );
                      }),
                    }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`h3`, {
                  className: `text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(H, { className: `h-4 w-4 text-primary` }),
                    `Recent Activity`,
                  ],
                }),
                n.recent_transactions.length === 0
                  ? (0, Z.jsxs)(`div`, {
                      className: `text-center py-6 text-gray-500`,
                      children: [
                        (0, Z.jsx)(H, {
                          className: `h-6 w-6 mx-auto mb-2 opacity-50`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm`,
                          children: `No transactions yet`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `space-y-2`,
                      children: n.recent_transactions.map((e, t) =>
                        (0, Z.jsx)(iI, { transaction: e }, e.id || t),
                      ),
                    }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function iI({ transaction: e }) {
  let t = e.amount > 0,
    n = e.category;
  return (0, Z.jsxs)(`div`, {
    className: `flex items-center justify-between p-2 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          n &&
            (0, Z.jsx)(`div`, {
              className: `p-1 rounded ${nI[n]}`,
              children: $F[n],
            }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`div`, {
                className: `text-sm text-white`,
                children: e.workflow_name || e.description || `Transaction`,
              }),
              (0, Z.jsx)(`div`, {
                className: `text-xs text-gray-500`,
                children: e.created_at
                  ? new Date(e.created_at).toLocaleString()
                  : `Unknown date`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `text-sm font-mono font-bold ${t ? `text-green-400` : `text-red-400`}`,
        children: [t ? `+` : ``, Wt.formatCoins(e.amount)],
      }),
    ],
  });
}
function aI({ sessionDir: e }) {
  return (0, Z.jsx)(rI, { sessionId: e?.split(`/`).pop() || e });
}
var oI = `generated_assets/`;
function sI(e) {
  return e.startsWith(oI) ? e.slice(17) : e;
}
