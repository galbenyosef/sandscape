// switch-CkslyoJe 03 — classname
// Lines 1061-1251 of readable/assets/switch-CkslyoJe.pretty.js (statement-aligned).
function Je(e) {
  return typeof e == `function`;
}
z(Je, `isFunction`);
function Q(e) {
  return e === `` || e === void 0;
}
z(Q, `shouldShowPlaceholder`);
function Ye(e) {
  let t = s(e),
    n = N.useRef(``),
    r = N.useRef(0),
    i = N.useCallback(
      (e) => {
        let i = n.current + e;
        (t(i),
          z(function e(t) {
            ((n.current = t),
              window.clearTimeout(r.current),
              t !== `` && (r.current = window.setTimeout(() => e(``), 1e3)));
          }, `updateSearch`)(i));
      },
      [t],
    ),
    a = N.useCallback(() => {
      ((n.current = ``), window.clearTimeout(r.current));
    }, []);
  return (
    N.useEffect(() => () => window.clearTimeout(r.current), []),
    [n, i, a]
  );
}
z(Ye, `useTypeaheadSearch`);
function Xe(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = Ze(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
z(Xe, `findNextItem`);
function Ze(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
z(Ze, `wrapArray`);
var Qe = ce,
  $e = Ae,
  et = fe,
  tt = N.forwardRef(({ className: e, children: t, ...n }, r) =>
    (0, L.jsxs)(ue, {
      ref: r,
      className: u(
        `flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
        e,
      ),
      ...n,
      children: [
        t,
        (0, L.jsx)(pe, {
          asChild: !0,
          children: (0, L.jsx)(A, { className: `h-4 w-4 opacity-50` }),
        }),
      ],
    }),
  );
tt.displayName = ue.displayName;
var nt = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Ve, {
    ref: n,
    className: u(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, L.jsx)(j, { className: `h-4 w-4` }),
  }),
);
nt.displayName = Ve.displayName;
var rt = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Ue, {
    ref: n,
    className: u(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, L.jsx)(A, { className: `h-4 w-4` }),
  }),
);
rt.displayName = Ue.displayName;
var it = N.forwardRef(
  ({ className: e, children: t, position: n = `popper`, ...r }, i) =>
    (0, L.jsx)(ge, {
      children: (0, L.jsxs)(_e, {
        ref: i,
        className: u(
          `relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
          n === `popper` &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
          e,
        ),
        position: n,
        ...r,
        children: [
          (0, L.jsx)(nt, {}),
          (0, L.jsx)(De, {
            className: u(
              `p-1`,
              n === `popper` &&
                `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`,
            ),
            children: t,
          }),
          (0, L.jsx)(rt, {}),
        ],
      }),
    }),
);
it.displayName = _e.displayName;
var at = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Me, {
    ref: n,
    className: u(`py-1.5 pl-8 pr-2 text-sm font-semibold`, e),
    ...t,
  }),
);
at.displayName = Me.displayName;
var ot = N.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, L.jsxs)(Ie, {
    ref: r,
    className: u(
      `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, L.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, L.jsx)(ze, {
          children: (0, L.jsx)(T, { className: `h-4 w-4` }),
        }),
      }),
      (0, L.jsx)(Le, { children: t }),
    ],
  }),
);
ot.displayName = Ie.displayName;
var st = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(Ge, { ref: n, className: u(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
st.displayName = Ge.displayName;
var ct = Object.defineProperty,
  $ = (e, t) => ct(e, `name`, { value: t, configurable: !0 }),
  lt = `Switch`,
  [ut, dt] = a(lt),
  [ft, pt] = ut(lt);
function mt(e) {
  let {
      __scopeSwitch: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [f, p] = x({ prop: n, defaultProp: i ?? !1, onChange: c, caller: lt }),
    [m, h] = N.useState(null),
    [g, _] = N.useState(null),
    v = N.useRef(!1),
    [y, b] = N.useReducer((e) => e + 1, 0),
    S = {
      checked: f,
      setChecked: p,
      disabled: a,
      control: m,
      setControl: h,
      name: s,
      form: o,
      value: u,
      hasConsumerStoppedPropagationRef: v,
      userInteractionCount: y,
      onUserInteraction: b,
      required: l,
      defaultChecked: i,
      isFormControl: !m || !!o || !!m.closest(`form`),
      bubbleInput: g,
      setBubbleInput: _,
    };
  return (0, L.jsx)(ft, { scope: t, ...S, children: St(d) ? d(S) : r });
}
$(mt, `SwitchProvider`);
