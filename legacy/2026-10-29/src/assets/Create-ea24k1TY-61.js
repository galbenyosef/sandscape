// Create-ea24k1TY 61 — jsx
// Lines 19168-19397 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Zp(e) {
  let {
      __scopeSlider: t,
      name: n,
      children: r,
      internal_do_not_use_render: i,
    } = e,
    a = Lp(Xp, t),
    o = Np(t),
    [s, c] = X.useState(null),
    l = X.useMemo(
      () => (s ? o().findIndex((e) => e.ref.current === s) : -1),
      [o, s],
    ),
    u = mee(s),
    d = !s || !!a.form || !!s.closest(`form`),
    f = a.values[l],
    p = n ?? (a.name ? a.name + (a.values.length > 1 ? `[]` : ``) : void 0),
    m = f === void 0 ? 0 : im(f, a.min, a.max);
  X.useEffect(() => {
    if (s)
      return (
        a.thumbs.add(s),
        () => {
          a.thumbs.delete(s);
        }
      );
  }, [s, a.thumbs]);
  let h = {
    value: f,
    name: p,
    form: a.form,
    isFormControl: d,
    index: l,
    thumb: s,
    onThumbChange: c,
    percent: m,
    size: u,
  };
  return (0, Z.jsx)(Jp, { scope: t, ...h, children: mm(i) ? i(h) : r });
}
Dp(Zp, `SliderThumbProvider`);
var Qp = `SliderThumbTrigger`,
  $p = X.forwardRef(
    Dp(function (e, t) {
      let { __scopeSlider: n, ...r } = e,
        i = Lp(Qp, n),
        a = Bp(Qp, n),
        {
          index: o,
          value: s,
          percent: c,
          size: l,
          onThumbChange: u,
        } = Yp(Qp, n),
        f = m(t, u),
        p = am(o, i.values.length),
        h = l?.[a.size],
        g = h ? sm(h, c, a.direction) : 0;
      return (0, Z.jsx)(`span`, {
        style: {
          transform: `var(--radix-slider-thumb-transform)`,
          position: `absolute`,
          [a.startEdge]: `calc(${c}% + ${g}px)`,
        },
        children: (0, Z.jsx)(Mp.ItemSlot, {
          scope: n,
          children: (0, Z.jsx)(_.span, {
            role: `slider`,
            "aria-label": e[`aria-label`] || p,
            "aria-valuemin": i.min,
            "aria-valuenow": s,
            "aria-valuemax": i.max,
            "aria-orientation": i.orientation,
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? `` : void 0,
            tabIndex: i.disabled ? void 0 : 0,
            ...r,
            ref: f,
            style: s === void 0 ? { display: `none` } : e.style,
            onFocus: d(e.onFocus, () => {
              i.valueIndexToChangeRef.current = o;
            }),
          }),
        }),
      });
    }, `SliderThumbTrigger`),
  ),
  em = X.forwardRef(
    Dp(function (e, t) {
      let { __scopeSlider: n, name: r, ...i } = e;
      return (0, Z.jsx)(Zp, {
        __scopeSlider: n,
        name: r,
        internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)($p, { ...i, ref: t, __scopeSlider: n }),
              r ? (0, Z.jsx)(nm, { __scopeSlider: n }, e) : null,
            ],
          }),
      });
    }, `SliderThumb`),
  ),
  tm = `SliderBubbleInput`,
  nm = X.forwardRef(
    Dp(function ({ __scopeSlider: e, ...t }, n) {
      let { value: r, name: i, form: a } = Yp(tm, e),
        o = X.useRef(null),
        s = m(o, n),
        c = Ne(r);
      return (
        X.useEffect(() => {
          let e = o.current;
          if (!e) return;
          let t = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, `value`).set;
          if (c !== r && n) {
            let t = new Event(`input`, { bubbles: !0 });
            (n.call(e, r), e.dispatchEvent(t));
          }
        }, [c, r]),
        (0, Z.jsx)(_.input, {
          style: { display: `none` },
          name: i,
          form: a,
          ...t,
          ref: s,
          defaultValue: r,
        })
      );
    }, `SliderBubbleInput`),
  );
function rm(e = [], t, n) {
  let r = [...e];
  return ((r[n] = t), r.sort((e, t) => e - t));
}
Dp(rm, `getNextSortedValues`);
function im(e, t, n) {
  return Or((100 / (n - t)) * (e - t), [0, 100]);
}
Dp(im, `convertValueToPercentage`);
function am(e, t) {
  if (t > 2) return `Value ${e + 1} of ${t}`;
  if (t === 2) return [`Minimum`, `Maximum`][e];
}
Dp(am, `getLabel`);
function om(e, t) {
  if (e.length === 1) return 0;
  let n = e.map((e) => Math.abs(e - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
Dp(om, `getClosestValueIndex`);
function sm(e, t, n) {
  let r = e / 2;
  return (r - um([0, 50], [0, r])(t) * n) * n;
}
Dp(sm, `getThumbInBoundsOffset`);
function cm(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
Dp(cm, `getStepsBetweenValues`);
function lm(e, t) {
  if (t > 0) {
    let n = cm(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
Dp(lm, `hasMinStepsBetweenValues`);
function um(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
Dp(um, `linearScale`);
function dm(e) {
  if (!Number.isFinite(e)) return 0;
  let t = e.toString();
  if (t.includes(`e`)) {
    let [e, n] = t.split(`e`),
      r = e.split(`.`)[1] || ``,
      i = Number(n);
    return Math.max(0, r.length - i);
  }
  let n = t.split(`.`)[1];
  return n ? n.length : 0;
}
Dp(dm, `getDecimalCount`);
function fm(e, t) {
  let n = 10 ** t;
  return Math.round(e * n) / n;
}
Dp(fm, `roundValue`);
function pm(e, { min: t, step: n, direction: r, multiplier: i }) {
  let a = dm(n),
    o = (e - t) / n,
    s = Math.round(o),
    c = fm(s * n + t, a) === fm(e, a),
    l;
  return (
    (l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o)),
    fm(l * n + t, a)
  );
}
Dp(pm, `getNextStepValue`);
function mm(e) {
  return typeof e == `function`;
}
Dp(mm, `isFunction`);
var hm = X.forwardRef(({ className: e, ...t }, n) =>
  (0, Z.jsxs)(Rp, {
    ref: n,
    className: p(`relative flex w-full touch-none select-none items-center`, e),
    ...t,
    children: [
      (0, Z.jsx)(Gp, {
        className: `relative h-2 w-full grow overflow-hidden rounded-full bg-secondary`,
        children: (0, Z.jsx)(qp, { className: `absolute h-full bg-primary` }),
      }),
      (0, Z.jsx)(em, {
        className: `block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
      }),
    ],
  }),
);
hm.displayName = Rp.displayName;
