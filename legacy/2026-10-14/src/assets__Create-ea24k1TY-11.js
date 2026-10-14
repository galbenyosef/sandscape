// assets__Create-ea24k1TY 11 — classname
// Lines 3368-3715 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Ic({ sessionId: e, isRunning: t, onLocalActivity: n, className: r }) {
  let [i, a] = (0, X.useState)(!1),
    [o, s] = (0, X.useState)(``),
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(null);
  if (
    ((0, X.useEffect)(() => {
      t || (a(!1), l(!1));
    }, [t]),
    !t)
  )
    return null;
  let f = async () => {
      !e || i || (a(!0), (await Un.cancel(e)).success || a(!1));
    },
    m = async () => {
      let t = o.trim();
      if (!t || !e || c) return;
      (l(!0), d(null));
      let r = await Un.steer(e, t);
      (l(!1),
        r.success
          ? (s(``), n?.(t))
          : d(r.error || `Could not reach the builder. Try again.`));
    };
  return (0, Z.jsxs)(`div`, {
    className: p(`space-y-1.5`, r),
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5`,
        children: [
          (0, Z.jsx)(`input`, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.target.value),
            onKeyDown: (e) => {
              e.key === `Enter` && (e.preventDefault(), m());
            },
            placeholder: `Steer the builder…`,
            disabled: c,
            className: `flex-1 min-w-0 bg-card border border-border rounded-md px-2.5 py-1.5 text-xs text-foreground/90 placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40 disabled:opacity-50`,
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: m,
            disabled: c || !o.trim() || !e,
            title: `Send a mid-run instruction to the builder`,
            className: `inline-flex items-center justify-center shrink-0 rounded-md bg-primary/15 text-primary w-8 h-[30px] hover:bg-primary/25 disabled:opacity-40 disabled:cursor-not-allowed transition-colors`,
            children: c
              ? (0, Z.jsx)(J, { className: `h-3.5 w-3.5 animate-spin` })
              : (0, Z.jsx)(Cn, { className: `h-3.5 w-3.5` }),
          }),
        ],
      }),
      (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: f,
        disabled: i || !e,
        title: `Stop this coding run (it settles, and you can resume it later)`,
        className: `w-full inline-flex items-center justify-center gap-1.5 rounded-md bg-red-500/15 text-red-300 px-2.5 py-1.5 text-xs font-semibold hover:bg-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,
        children: [
          (0, Z.jsx)(Zo, { className: `h-3 w-3` }),
          i ? `Stopping…` : `Stop build`,
        ],
      }),
      u &&
        (0, Z.jsx)(`p`, { className: `text-[11px] text-red-400`, children: u }),
    ],
  });
}
function Lc({
  executionState: e,
  isCodingAgentRunning: t,
  sessionDir: n,
  onLocalCodingActivity: r,
}) {
  let i = e?.telemetry || Bc(),
    a = e?.workflows || [],
    o = n ? n.split(`/`).pop() || n : ``;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `px-4 py-3 border-b border-border space-y-2`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${t ? `bg-cyan-500/20 text-cyan-300` : `bg-secondary text-muted-foreground`}`,
            children: t
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(ao, { className: `h-3 w-3 animate-pulse` }),
                    `RUNNING`,
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `h-2 w-2 rounded-full bg-muted-foreground/40`,
                    }),
                    `IDLE`,
                  ],
                }),
          }),
          (0, Z.jsx)(Ic, { sessionId: o, isRunning: t, onLocalActivity: r }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `p-4 border-b border-border`,
        children: (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-2`,
          children: [
            (0, Z.jsx)(Rc, {
              icon: (0, Z.jsx)(bte, { className: `h-3.5 w-3.5` }),
              label: `Tokens`,
              value: Vc(i.totalTokens),
              color: `text-primary`,
            }),
            (0, Z.jsx)(Rc, {
              icon: (0, Z.jsx)(ste, { className: `h-3.5 w-3.5` }),
              label: `Cost`,
              value: `$${i.totalCostUsd.toFixed(4)}`,
              color: `text-yellow-400`,
            }),
            (0, Z.jsx)(Rc, {
              icon: (0, Z.jsx)(cs, { className: `h-3.5 w-3.5` }),
              label: `Tools`,
              value: i.toolCalls.toString(),
              color: `text-green-400`,
            }),
            (0, Z.jsx)(Rc, {
              icon: (0, Z.jsx)(ei, { className: `h-3.5 w-3.5` }),
              label: `Avg`,
              value: `${Math.round(i.avgToolDurationMs)}ms`,
              color: `text-orange-400`,
            }),
          ],
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `flex-1 overflow-hidden`,
        children: (0, Z.jsx)($r, {
          className: `h-full p-4`,
          children:
            a.length === 0
              ? (0, Z.jsx)(`div`, {
                  className: `text-sm text-muted-foreground/60 text-center py-8`,
                  children: `No executions yet`,
                })
              : (0, Z.jsx)(`div`, {
                  className: `space-y-1`,
                  children: a.map((e) =>
                    (0, Z.jsx)(zc, { node: e, depth: 0 }, e.id),
                  ),
                }),
        }),
      }),
    ],
  });
}
function Rc({ icon: e, label: t, value: n, color: r }) {
  return (0, Z.jsxs)(`div`, {
    className: `bg-card rounded-lg p-2.5`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 mb-1`,
        children: [
          (0, Z.jsx)(`span`, { className: r, children: e }),
          (0, Z.jsx)(`span`, {
            className: `text-[10px] text-muted-foreground/60 uppercase tracking-wider`,
            children: t,
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `text-base font-bold text-foreground`,
        children: n,
      }),
    ],
  });
}
function zc({ node: e, depth: t }) {
  let [n, r] = (0, X.useState)(!0),
    i = e.children && e.children.length > 0;
  return (0, Z.jsxs)(`div`, {
    style: { marginLeft: t * 16 },
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 py-1 px-2 rounded hover:bg-secondary/50 cursor-pointer`,
        onClick: () => i && r(!n),
        children: [
          i
            ? n
              ? (0, Z.jsx)(ti, {
                  className: `h-3 w-3 text-muted-foreground/60`,
                })
              : (0, Z.jsx)(De, {
                  className: `h-3 w-3 text-muted-foreground/60`,
                })
            : (0, Z.jsx)(`div`, { className: `w-3` }),
          (0, Z.jsx)(`div`, {
            className: `w-1.5 h-1.5 rounded-full ${((e) => {
              switch (e) {
                case `pending`:
                  return `bg-muted-foreground/40`;
                case `running`:
                  return `bg-cyan-400`;
                case `completed`:
                  return `bg-green-400`;
                case `failed`:
                  return `bg-red-400`;
                default:
                  return `bg-muted-foreground/40`;
              }
            })(e.status)}`,
          }),
          (0, Z.jsx)(`span`, {
            className: ((e) => {
              switch (e) {
                case `pending`:
                  return `text-muted-foreground/40`;
                case `running`:
                  return `text-cyan-400`;
                case `completed`:
                  return `text-green-400`;
                case `failed`:
                  return `text-red-400`;
                default:
                  return `text-muted-foreground/40`;
              }
            })(e.status),
            children: (() => {
              switch (e.type) {
                case `workflow`:
                  return (0, Z.jsx)(ss, { className: `h-3.5 w-3.5` });
                case `step`:
                  return (0, Z.jsx)(ao, { className: `h-3.5 w-3.5` });
                case `agent`:
                  return (0, Z.jsx)(po, { className: `h-3.5 w-3.5` });
                case `tool`:
                  return (0, Z.jsx)(cs, { className: `h-3.5 w-3.5` });
                default:
                  return (0, Z.jsx)(`div`, {
                    className: `h-3.5 w-3.5 rounded-full bg-muted-foreground/40`,
                  });
              }
            })(),
          }),
          (0, Z.jsx)(`span`, {
            className: `text-xs text-foreground/80 flex-1 truncate`,
            children: e.name,
          }),
          e.durationMs !== void 0 &&
            (0, Z.jsxs)(`span`, {
              className: `text-[10px] text-muted-foreground/60`,
              children: [e.durationMs, `ms`],
            }),
          e.status === `running` &&
            (0, Z.jsx)(`div`, {
              className: `w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse`,
            }),
        ],
      }),
      i &&
        n &&
        (0, Z.jsx)(`div`, {
          className: `border-l border-border ml-3`,
          children: e.children.map((e) =>
            (0, Z.jsx)(zc, { node: e, depth: t + 1 }, e.id),
          ),
        }),
      e.type === `tool` &&
        n &&
        (e.arguments || e.error) &&
        (0, Z.jsxs)(`div`, {
          className: `ml-8 mt-1 mb-2 p-2 bg-card rounded text-xs`,
          children: [
            e.toolName &&
              (0, Z.jsxs)(`div`, {
                className: `text-muted-foreground mb-1`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-muted-foreground/60`,
                    children: `Tool:`,
                  }),
                  ` `,
                  e.toolName,
                ],
              }),
            e.error &&
              (0, Z.jsxs)(`div`, {
                className: `text-red-400 mt-1`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-muted-foreground/60`,
                    children: `Error:`,
                  }),
                  ` `,
                  e.error,
                ],
              }),
            e.tokens &&
              (0, Z.jsxs)(`div`, {
                className: `text-muted-foreground mt-1`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-muted-foreground/60`,
                    children: `Tokens:`,
                  }),
                  ` `,
                  e.tokens.input,
                  `in / `,
                  e.tokens.output,
                  `out`,
                ],
              }),
            e.costUsd !== void 0 &&
              e.costUsd > 0 &&
              (0, Z.jsxs)(`div`, {
                className: `text-muted-foreground`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-muted-foreground/60`,
                    children: `Cost:`,
                  }),
                  ` $`,
                  e.costUsd.toFixed(4),
                ],
              }),
          ],
        }),
    ],
  });
}
function Bc() {
  return {
    totalTokens: 0,
    totalCostUsd: 0,
    toolCalls: 0,
    avgToolDurationMs: 0,
  };
}
function Vc(e) {
  return e >= 1e6
    ? (e / 1e6).toFixed(1) + `M`
    : e >= 1e3
      ? (e / 1e3).toFixed(1) + `K`
      : e.toString();
}
