// Create-CEn7EAZs 216 — classname
// Lines 73786-73962 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var jue = b(`relative w-full rounded-lg border p-4 flex flex-col gap-3`, {
    variants: {
      category: {
        llm: `border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300`,
        asset: `border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300`,
        network: `border-orange-500/50 bg-orange-500/10 text-orange-700 dark:text-orange-300`,
        validation: `border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300`,
        internal: `border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300`,
        auth: `border-slate-500/50 bg-slate-500/10 text-slate-700 dark:text-slate-300`,
      },
    },
    defaultVariants: { category: `internal` },
  }),
  Mue = {
    llm: Io,
    asset: en,
    network: jt,
    validation: Jo,
    internal: Xee,
    auth: tn,
  },
  Nue = {
    llm: `AI Service`,
    asset: `Asset Generation`,
    network: `Network`,
    validation: `Validation`,
    internal: `Internal`,
    auth: `Authentication`,
  };
function Pue({
  code: e,
  category: t,
  message: n,
  taskName: r,
  recoverable: i = !1,
  stepId: a,
  onRetry: o,
  onDismiss: s,
  isRetrying: c = !1,
  className: l,
  ...u
}) {
  let d = Mue[t] || te,
    f = Nue[t] || `Error`;
  return (0, Z.jsxs)(`div`, {
    role: `alert`,
    className: p(jue({ category: t }), l),
    ...u,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-start justify-between gap-2`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Z.jsx)(d, { className: `h-5 w-5 flex-shrink-0` }),
              (0, Z.jsxs)(`div`, {
                className: `flex flex-col`,
                children: [
                  (0, Z.jsxs)(`span`, {
                    className: `font-semibold text-sm`,
                    children: [f, ` Error`],
                  }),
                  r &&
                    (0, Z.jsxs)(`span`, {
                      className: `text-xs opacity-75`,
                      children: [`Task: `, r],
                    }),
                ],
              }),
            ],
          }),
          s &&
            (0, Z.jsx)(S, {
              variant: `ghost`,
              size: `icon`,
              className: `h-6 w-6 opacity-70 hover:opacity-100`,
              onClick: s,
              "aria-label": `Dismiss error`,
              children: (0, Z.jsx)(Jr, { className: `h-4 w-4` }),
            }),
        ],
      }),
      (0, Z.jsx)(`p`, { className: `text-sm leading-relaxed`, children: n }),
      (0, Z.jsxs)(`div`, {
        className: `flex flex-wrap gap-2 text-xs opacity-75`,
        children: [
          (0, Z.jsx)(`code`, {
            className: `px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10`,
            children: e,
          }),
          a &&
            (0, Z.jsxs)(`code`, {
              className: `px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10`,
              children: [`Step: `, a],
            }),
        ],
      }),
      i &&
        o &&
        (0, Z.jsx)(`div`, {
          className: `flex gap-2 pt-1`,
          children: (0, Z.jsxs)(S, {
            variant: `outline`,
            size: `sm`,
            onClick: o,
            disabled: c,
            className: `gap-1.5`,
            children: [
              (0, Z.jsx)(ln, {
                className: p(`h-3.5 w-3.5`, c && `animate-spin`),
              }),
              c ? `Retrying...` : `Retry`,
            ],
          }),
        }),
    ],
  });
}
function Fue({
  reason: e,
  affectedFeatures: t = [],
  dismissible: n = !0,
  onDismiss: r,
  visible: i = !0,
  className: a,
  ...o
}) {
  return i
    ? (0, Z.jsxs)(`div`, {
        role: `alert`,
        className: p(
          `w-full bg-yellow-500/15 border-b border-yellow-500/30 px-4 py-2.5`,
          `flex items-center justify-between gap-3`,
          `text-yellow-700 dark:text-yellow-300`,
          a,
        ),
        ...o,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3 min-w-0`,
            children: [
              (0, Z.jsx)(pn, { className: `h-5 w-5 flex-shrink-0` }),
              (0, Z.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `font-medium text-sm whitespace-nowrap`,
                    children: `Operating in degraded mode`,
                  }),
                  (0, Z.jsx)(`span`, {
                    className: `text-sm opacity-90 truncate`,
                    children: e,
                  }),
                  t.length > 0 &&
                    (0, Z.jsxs)(`span`, {
                      className: `hidden md:inline text-xs opacity-75`,
                      children: [`(Affected: `, t.join(`, `), `)`],
                    }),
                ],
              }),
            ],
          }),
          n &&
            r &&
            (0, Z.jsx)(S, {
              variant: `ghost`,
              size: `icon`,
              className: `h-6 w-6 flex-shrink-0 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/20`,
              onClick: r,
              "aria-label": `Dismiss degraded mode banner`,
              children: (0, Z.jsx)(Jr, { className: `h-4 w-4` }),
            }),
        ],
      })
    : null;
}
