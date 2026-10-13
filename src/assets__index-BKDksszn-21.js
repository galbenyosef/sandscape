// assets__index-BKDksszn 21 — jsx
// Lines 6432-6490 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function es() {
  let { setTheme: e } = ft(),
    t = pt() === `dark`;
  return (0, W.jsxs)(P, {
    variant: `ghost`,
    size: `icon`,
    onClick: () => e(t ? `light` : `dark`),
    className: `w-9 h-9 rounded-full transition-colors hover:bg-accent`,
    children: [
      t
        ? (0, W.jsx)(ie, {
            className: `h-5 w-5 transition-all text-foreground`,
          })
        : (0, W.jsx)(ae, {
            className: `h-5 w-5 transition-all text-foreground`,
          }),
      (0, W.jsx)(`span`, { className: `sr-only`, children: `Toggle theme` }),
    ],
  });
}
function ts() {
  let { t: e, i18n: t } = z(),
    n = (e) => {
      t.changeLanguage(e);
    };
  return (0, W.jsxs)(se, {
    children: [
      (0, W.jsx)(oe, {
        asChild: !0,
        children: (0, W.jsx)(P, {
          variant: `ghost`,
          size: `icon`,
          "aria-label": e(`general.language`),
          children: (0, W.jsx)(re, { className: `h-5 w-5` }),
        }),
      }),
      (0, W.jsx)(ce, {
        align: `end`,
        children: Le.map((e) =>
          (0, W.jsx)(
            F,
            {
              onClick: () => n(e.code),
              className: t.language === e.code ? `bg-muted` : ``,
              children: e.name,
            },
            e.code,
          ),
        ),
      }),
    ],
  });
}
var ns = Object.defineProperty,
  X = (e, t) => ns(e, `name`, { value: t, configurable: !0 });
function rs(e, t) {
  return U.useReducer((e, n) => t[e][n] ?? e, e);
}
X(rs, `useStateMachine`);
