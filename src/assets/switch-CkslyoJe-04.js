// switch-CkslyoJe 04 — current
// Lines 1252-1441 of readable/assets/switch-CkslyoJe.pretty.js (statement-aligned).
var ht = `SwitchTrigger`,
  gt = N.forwardRef(
    $(function ({ __scopeSwitch: e, onClick: t, ...n }, r) {
      let {
          control: a,
          form: o,
          value: s,
          disabled: c,
          checked: l,
          required: u,
          setControl: f,
          setChecked: m,
          hasConsumerStoppedPropagationRef: h,
          onUserInteraction: g,
          isFormControl: _,
          bubbleInput: v,
        } = pt(ht, e),
        y = d(r, f),
        b = N.useRef(l);
      return (
        N.useEffect(() => {
          let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
          if (e instanceof HTMLFormElement) {
            let t = $(() => m(b.current), `reset`);
            return (
              e.addEventListener(`reset`, t),
              () => e.removeEventListener(`reset`, t)
            );
          }
        }, [a, o, m]),
        (0, L.jsx)(p.button, {
          type: `button`,
          role: `switch`,
          "aria-checked": l,
          "aria-required": u,
          "data-state": Ct(l),
          "data-disabled": c ? `` : void 0,
          disabled: c,
          value: s,
          ...n,
          ref: y,
          onClick: i(t, (e) => {
            (g(),
              m((e) => !e),
              v &&
                _ &&
                ((h.current = e.isPropagationStopped()),
                h.current || e.stopPropagation()));
          }),
        })
      );
    }, `SwitchTrigger`),
  ),
  _t = N.forwardRef(
    $(function (e, t) {
      let {
        __scopeSwitch: n,
        name: r,
        checked: i,
        defaultChecked: a,
        required: o,
        disabled: s,
        value: c,
        onCheckedChange: l,
        form: u,
        ...d
      } = e;
      return (0, L.jsx)(mt, {
        __scopeSwitch: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: e }) =>
          (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(gt, { ...d, ref: t, __scopeSwitch: n }),
              e && (0, L.jsx)(xt, { __scopeSwitch: n }),
            ],
          }),
      });
    }, `Switch`),
  ),
  vt = `SwitchThumb`,
  yt = N.forwardRef(
    $(function (e, t) {
      let { __scopeSwitch: n, ...r } = e,
        i = pt(vt, n);
      return (0, L.jsx)(p.span, {
        "data-state": Ct(i.checked),
        "data-disabled": i.disabled ? `` : void 0,
        ...r,
        ref: t,
      });
    }, `SwitchThumb`),
  ),
  bt = `SwitchBubbleInput`,
  xt = N.forwardRef(
    $(function ({ __scopeSwitch: e, onClick: t, ...n }, r) {
      let {
          control: a,
          hasConsumerStoppedPropagationRef: o,
          userInteractionCount: s,
          checked: c,
          defaultChecked: l,
          required: u,
          disabled: f,
          name: h,
          value: g,
          form: _,
          bubbleInput: v,
          setBubbleInput: y,
        } = pt(bt, e),
        b = d(r, y),
        x = m(a),
        S = N.useRef(!1),
        C = N.useRef(c),
        w = N.useRef(s);
      N.useEffect(() => {
        let e = v;
        if (!e) return;
        let t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `checked`).set,
          r = s !== w.current;
        w.current = s;
        let i = C.current !== c;
        C.current = c;
        let a = !(r && o.current);
        if (i && n) {
          S.current = !r;
          let t = new Event(`click`, { bubbles: a });
          (n.call(e, c), e.dispatchEvent(t), (S.current = !1));
        }
      }, [v, c, o, s]);
      let T = N.useRef(c);
      return (0, L.jsx)(p.input, {
        type: `checkbox`,
        "aria-hidden": !0,
        defaultChecked: l ?? T.current,
        required: u,
        disabled: f,
        name: h,
        value: g,
        form: _,
        ...n,
        tabIndex: -1,
        ref: b,
        onClick: i(t, (e) => {
          S.current && e.stopPropagation();
        }),
        style: {
          ...n.style,
          ...x,
          position: `absolute`,
          pointerEvents: `none`,
          opacity: 0,
          margin: 0,
          transform: `translateX(-100%)`,
        },
      });
    }, `SwitchBubbleInput`),
  );
function St(e) {
  return typeof e == `function`;
}
$(St, `isFunction`);
function Ct(e) {
  return e ? `checked` : `unchecked`;
}
$(Ct, `getState`);
var wt = N.forwardRef(({ className: e, ...t }, n) =>
  (0, L.jsx)(_t, {
    className: u(
      `peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      e,
    ),
    ...t,
    ref: n,
    children: (0, L.jsx)(yt, {
      className: u(
        `pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`,
      ),
    }),
  }),
);
wt.displayName = _t.displayName;
