// Game-BFLo0_Aq 01 — jsx
// Lines 1-295 of readable/assets/Game-BFLo0_Aq.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, s as i, u as a } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as o } from "./useToast-QK0Q4gGT.js";
import { a as s, i as c } from "./dist-CA4uZW3H.js";
import { l } from "./AuthService-C8NFtVWb.js";
import { t as u } from "./dist-ByN-1XKv.js";
import { n as d } from "./dist-ChIM81kv.js";
import { i as f, t as p } from "./button-gyaE5cND.js";
import { n as m, t as h } from "./wand-sparkles-DLOrZ2hn.js";
import { n as g, t as _ } from "./thumbs-up-BIuToPHO.js";
import {
  a as v,
  c as y,
  i as b,
  n as x,
  o as S,
  r as ee,
  s as te,
  t as ne,
} from "./ShareMenu-DFz6yi7_.js";
import { t as C } from "./refresh-cw-Bg4R4J17.js";
import { c as w, r as T } from "./leaderboards-DIdbDUl6.js";
import { n as E, t as D } from "./apiConfig-BixZVfgD.js";
import { u as O } from "./AnalyticsService-CXnfQpTJ.js";
import { t as k } from "./useTranslation-BdauNPOZ.js";
import { t as A } from "./avatarUtils-CHOc69Ms.js";
import { r as re } from "./gameUtils-Che36IRh.js";
import { n as ie, r as j, t as M } from "./avatar-BHj788a5.js";
import { t as ae } from "./dist-C7e-qgX5.js";
import { n as N, r as P, t as oe } from "./dist-Bfwan21L.js";
import { t as se } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  A as ce,
  C as le,
  E as ue,
  K as de,
  O as fe,
  S as pe,
  X as me,
  Y as he,
  _ as ge,
  at as _e,
  b as ve,
  ct as ye,
  d as F,
  g as be,
  it as xe,
  nt as Se,
  q as Ce,
  s as we,
  u as I,
  v as L,
  w as Te,
  z as Ee,
} from "./index-CBcimEr9.js";
import { a as De, i as Oe, r as ke, t as Ae } from "./gameLikes-CP7fY1VN.js";
import { a as je, i as Me, t as Ne } from "./follow-CpTPXfIN.js";
import { t as Pe } from "./textarea-B3J7W2fu.js";
import { n as Fe, t as Ie } from "./card-Ca5HFnV5.js";
import { t as Le } from "./confirm-dialog-CmRVm5ya.js";
import { i as Re, n as R, r as ze, t as Be } from "./tabs-DF35aEnx.js";
import { n as Ve } from "./history-C2QTnmsd.js";
var z = e(t(), 1);
function He(e) {
  let t = e < 0 ? `-` : ``,
    n = Math.abs(Math.round(e)),
    r = n % 1e3,
    i = Math.floor(n / 1e3) % 60,
    a = Math.floor(n / 6e4) % 60,
    o = Math.floor(n / 36e5),
    s = (e, t = 2) => String(e).padStart(t, `0`),
    c = `${s(i)}.${s(r, 3)}`;
  return o > 0 ? `${t}${o}:${s(a)}:${c}` : `${t}${a}:${c}`;
}
function B(e, t, n) {
  if (e == null || !Number.isFinite(e)) return `—`;
  switch (t) {
    case `time_ms`:
      return He(e);
    case `percent`:
      return `${new Intl.NumberFormat(n, { maximumFractionDigits: 1 }).format(e)}%`;
    default:
      return new Intl.NumberFormat(n, {
        maximumFractionDigits: +!Number.isInteger(e),
      }).format(e);
  }
}
function V(e) {
  return `#${e}`;
}
var H = n(),
  Ue = Object.defineProperty,
  U = (e, t) => Ue(e, `name`, { value: t, configurable: !0 }),
  We = `Toggle`,
  W = z.forwardRef(
    U(function (e, t) {
      let { pressed: n, defaultPressed: r, onPressedChange: i, ...a } = e,
        [o, c] = d({ prop: n, onChange: i, defaultProp: r ?? !1, caller: We });
      return (0, H.jsx)(u.button, {
        type: `button`,
        "aria-pressed": o,
        "data-state": o ? `on` : `off`,
        "data-disabled": e.disabled ? `` : void 0,
        ...a,
        ref: t,
        onClick: s(e.onClick, () => {
          e.disabled || c(!o);
        }),
      });
    }, `Toggle`),
  ),
  G = Object.defineProperty,
  K = (e, t) => G(e, `name`, { value: t, configurable: !0 }),
  q = `ToggleGroup`,
  [Ge, Ke] = c(q, [P]),
  qe = P(),
  J = z.forwardRef(
    K(function (e, t) {
      let { type: n, ...r } = e;
      if (n === `single`)
        return (0, H.jsx)(Ye, { role: `radiogroup`, ...r, ref: t });
      if (n === `multiple`)
        return (0, H.jsx)(X, { role: `toolbar`, ...r, ref: t });
      throw Error(`Missing prop \`type\` expected on \`${q}\``);
    }, `ToggleGroup`),
  ),
  [Je, Y] = Ge(q),
  Ye = z.forwardRef(
    K(function (e, t) {
      let {
          value: n,
          defaultValue: r,
          onValueChange: i = K(() => {}, `onValueChange`),
          ...a
        } = e,
        [o, s] = d({ prop: n, defaultProp: r ?? ``, onChange: i, caller: q });
      return (0, H.jsx)(Je, {
        scope: e.__scopeToggleGroup,
        type: `single`,
        value: z.useMemo(() => (o ? [o] : []), [o]),
        onItemActivate: s,
        onItemDeactivate: z.useCallback(() => s(``), [s]),
        children: (0, H.jsx)(Qe, { ...a, ref: t }),
      });
    }, `ToggleGroupImplSingle`),
  ),
  X = z.forwardRef(
    K(function (e, t) {
      let {
          value: n,
          defaultValue: r,
          onValueChange: i = K(() => {}, `onValueChange`),
          ...a
        } = e,
        [o, s] = d({ prop: n, defaultProp: r ?? [], onChange: i, caller: q }),
        c = z.useCallback((e) => s((t = []) => [...t, e]), [s]),
        l = z.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
      return (0, H.jsx)(Je, {
        scope: e.__scopeToggleGroup,
        type: `multiple`,
        value: o,
        onItemActivate: c,
        onItemDeactivate: l,
        children: (0, H.jsx)(Qe, { ...a, ref: t }),
      });
    }, `ToggleGroupImplMultiple`),
  ),
  [Xe, Ze] = Ge(q),
  Qe = z.forwardRef(
    K(function (e, t) {
      let {
          __scopeToggleGroup: n,
          disabled: r = !1,
          rovingFocus: i = !0,
          orientation: a,
          dir: o,
          loop: s = !0,
          ...c
        } = e,
        l = qe(n),
        d = ae(o),
        f = { dir: d, ...c };
      return (0, H.jsx)(Xe, {
        scope: n,
        rovingFocus: i,
        disabled: r,
        children: i
          ? (0, H.jsx)(oe, {
              asChild: !0,
              ...l,
              orientation: a,
              dir: d,
              loop: s,
              children: (0, H.jsx)(u.div, { ...f, ref: t }),
            })
          : (0, H.jsx)(u.div, { ...f, ref: t }),
      });
    }, `ToggleGroupImpl`),
  ),
  Z = `ToggleGroupItem`,
  Q = z.forwardRef(
    K(function (e, t) {
      let n = Y(Z, e.__scopeToggleGroup),
        r = Ze(Z, e.__scopeToggleGroup),
        i = qe(e.__scopeToggleGroup),
        a = n.value.includes(e.value),
        o = r.disabled || e.disabled,
        s = { ...e, pressed: a, disabled: o },
        c = z.useRef(null);
      return r.rovingFocus
        ? (0, H.jsx)(N, {
            asChild: !0,
            ...i,
            focusable: !o,
            active: a,
            ref: c,
            children: (0, H.jsx)($e, { ...s, ref: t }),
          })
        : (0, H.jsx)($e, { ...s, ref: t });
    }, `ToggleGroupItem`),
  ),
  $e = z.forwardRef(
    K(function (e, t) {
      let { __scopeToggleGroup: n, value: r, ...i } = e,
        a = Y(Z, n),
        o = {
          role: `radio`,
          "aria-checked": e.pressed,
          "aria-pressed": void 0,
        };
      return (0, H.jsx)(W, {
        ...(a.type === `single` ? o : void 0),
        ...i,
        ref: t,
        onPressedChange: (e) => {
          e ? a.onItemActivate(r) : a.onItemDeactivate(r);
        },
      });
    }, `ToggleGroupItemImpl`),
  ),
  et = f(
    `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2`,
    {
      variants: {
        variant: {
          default: `bg-transparent`,
          outline: `border border-input bg-transparent hover:bg-accent hover:text-accent-foreground`,
        },
        size: {
          default: `h-10 px-3 min-w-10`,
          sm: `h-9 px-2.5 min-w-9`,
          lg: `h-11 px-5 min-w-11`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  tt = z.forwardRef(({ className: e, variant: t, size: n, ...r }, i) =>
    (0, H.jsx)(W, {
      ref: i,
      className: l(et({ variant: t, size: n, className: e })),
      ...r,
    }),
  );
tt.displayName = W.displayName;
var nt = z.createContext({ size: `default`, variant: `default` }),
  rt = z.forwardRef(
    ({ className: e, variant: t, size: n, children: r, ...i }, a) =>
      (0, H.jsx)(J, {
        ref: a,
        className: l(`flex items-center justify-center gap-1`, e),
        ...i,
        children: (0, H.jsx)(nt.Provider, {
          value: { variant: t, size: n },
          children: r,
        }),
      }),
  );
rt.displayName = J.displayName;
var it = z.forwardRef(
  ({ className: e, children: t, variant: n, size: r, ...i }, a) => {
    let o = z.useContext(nt);
    return (0, H.jsx)(Q, {
      ref: a,
      className: l(et({ variant: o.variant || n, size: o.size || r }), e),
      ...i,
      children: t,
    });
  },
);
it.displayName = Q.displayName;
var at = [`all`, `daily`, `weekly`, `monthly`],
  ot = 10,
  st = `__default__`;
