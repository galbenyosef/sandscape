// tabs-Gm5XRVor 01 — jsx
// Lines 1-191 of readable/assets/tabs-Gm5XRVor.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { a as r, i, t as a } from "./dist-CA4uZW3H.js";
import { l as o } from "./AuthService-CQeU_0bQ.js";
import { t as s } from "./dist-p2cW4AiE.js";
import { t as c } from "./dist-DkIQBCKf.js";
import { t as l } from "./dist-C7e-qgX5.js";
import { t as u } from "./dist-IS-98_QU.js";
import { n as d, r as f, t as p } from "./dist-BKqz_oOH.js";
var m = e(t(), 1),
  h = n(),
  g = Object.defineProperty,
  _ = (e, t) => g(e, `name`, { value: t, configurable: !0 }),
  v = `Tabs`,
  [y, b] = i(v, [f]),
  x = f(),
  [S, C] = y(v),
  w = m.forwardRef(
    _(function (e, t) {
      let {
          __scopeTabs: n,
          value: r,
          onValueChange: i,
          defaultValue: a,
          orientation: o = `horizontal`,
          dir: d,
          activationMode: f = `automatic`,
          ...p
        } = e,
        m = l(d),
        [g, _] = c({ prop: r, onChange: i, defaultProp: a ?? ``, caller: v });
      return (0, h.jsx)(S, {
        scope: n,
        baseId: u(),
        value: g,
        onValueChange: _,
        orientation: o,
        dir: m,
        activationMode: f,
        children: (0, h.jsx)(s.div, {
          dir: m,
          "data-orientation": o,
          ...p,
          ref: t,
        }),
      });
    }, `Tabs`),
  ),
  T = `TabsList`,
  E = m.forwardRef(
    _(function (e, t) {
      let { __scopeTabs: n, loop: r = !0, ...i } = e,
        a = C(T, n),
        o = x(n);
      return (0, h.jsx)(p, {
        asChild: !0,
        ...o,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: (0, h.jsx)(s.div, {
          role: `tablist`,
          "aria-orientation": a.orientation,
          ...i,
          ref: t,
        }),
      });
    }, `TabsList`),
  ),
  D = `TabsTrigger`,
  O = m.forwardRef(
    _(function (e, t) {
      let { __scopeTabs: n, value: i, disabled: a = !1, ...o } = e,
        c = C(D, n),
        l = x(n),
        u = j(c.baseId, i),
        f = M(c.baseId, i),
        p = i === c.value;
      return (0, h.jsx)(d, {
        asChild: !0,
        ...l,
        focusable: !a,
        active: p,
        children: (0, h.jsx)(s.button, {
          type: `button`,
          role: `tab`,
          "aria-selected": p,
          "aria-controls": f,
          "data-state": p ? `active` : `inactive`,
          "data-disabled": a ? `` : void 0,
          disabled: a,
          id: u,
          ...o,
          ref: t,
          onMouseDown: r(e.onMouseDown, (e) => {
            !a && e.button === 0 && e.ctrlKey === !1
              ? c.onValueChange(i)
              : e.preventDefault();
          }),
          onKeyDown: r(e.onKeyDown, (e) => {
            a ||
              e.target !== e.currentTarget ||
              ([` `, `Enter`].includes(e.key) && c.onValueChange(i));
          }),
          onFocus: r(e.onFocus, () => {
            let e = c.activationMode !== `manual`;
            !p && !a && e && c.onValueChange(i);
          }),
        }),
      });
    }, `TabsTrigger`),
  ),
  k = `TabsContent`,
  A = m.forwardRef(
    _(function (e, t) {
      let { __scopeTabs: n, value: r, forceMount: i, children: o, ...c } = e,
        l = C(k, n),
        u = j(l.baseId, r),
        d = M(l.baseId, r),
        f = r === l.value,
        p = m.useRef(f);
      return (
        m.useEffect(() => {
          let e = requestAnimationFrame(() => (p.current = !1));
          return () => cancelAnimationFrame(e);
        }, []),
        (0, h.jsx)(a, {
          present: i || f,
          children: ({ present: n }) =>
            (0, h.jsx)(s.div, {
              "data-state": f ? `active` : `inactive`,
              "data-orientation": l.orientation,
              role: `tabpanel`,
              "aria-labelledby": u,
              hidden: !n,
              id: d,
              tabIndex: 0,
              ...c,
              ref: t,
              style: {
                ...e.style,
                animationDuration: p.current ? `0s` : void 0,
              },
              children: n && o,
            }),
        })
      );
    }, `TabsContent`),
  );
function j(e, t) {
  return `${e}-trigger-${t}`;
}
_(j, `makeTriggerId`);
function M(e, t) {
  return `${e}-content-${t}`;
}
_(M, `makeContentId`);
var N = w,
  P = m.forwardRef(({ className: e, ...t }, n) =>
    (0, h.jsx)(E, {
      ref: n,
      className: o(
        `inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground`,
        e,
      ),
      ...t,
    }),
  );
P.displayName = E.displayName;
var F = m.forwardRef(({ className: e, ...t }, n) =>
  (0, h.jsx)(O, {
    ref: n,
    className: o(
      `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm`,
      e,
    ),
    ...t,
  }),
);
F.displayName = O.displayName;
var I = m.forwardRef(({ className: e, ...t }, n) =>
  (0, h.jsx)(A, {
    ref: n,
    className: o(
      `mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      e,
    ),
    ...t,
  }),
);
I.displayName = A.displayName;
