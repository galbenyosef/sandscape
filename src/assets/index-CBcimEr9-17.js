// index-CBcimEr9 17 — jsx
// Lines 5458-5516 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function jo() {
  let { setTheme: e } = _t(),
    t = vt() === `dark`;
  return (0, U.jsxs)(P, {
    variant: `ghost`,
    size: `icon`,
    onClick: () => e(t ? `light` : `dark`),
    className: `w-9 h-9 rounded-full transition-colors hover:bg-accent`,
    children: [
      t
        ? (0, U.jsx)(ie, {
            className: `h-5 w-5 transition-all text-foreground`,
          })
        : (0, U.jsx)(re, {
            className: `h-5 w-5 transition-all text-foreground`,
          }),
      (0, U.jsx)(`span`, { className: `sr-only`, children: `Toggle theme` }),
    ],
  });
}
function Mo() {
  let { t: e, i18n: t } = R(),
    n = (e) => {
      t.changeLanguage(e);
    };
  return (0, U.jsxs)(ce, {
    children: [
      (0, U.jsx)(se, {
        asChild: !0,
        children: (0, U.jsx)(P, {
          variant: `ghost`,
          size: `icon`,
          "aria-label": e(`general.language`),
          children: (0, U.jsx)(ae, { className: `h-5 w-5` }),
        }),
      }),
      (0, U.jsx)(le, {
        align: `end`,
        children: He.map((e) =>
          (0, U.jsx)(
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
var No = Object.defineProperty,
  Y = (e, t) => No(e, `name`, { value: t, configurable: !0 });
function Po(e, t) {
  return H.useReducer((e, n) => t[e][n] ?? e, e);
}
Y(Po, `useStateMachine`);
