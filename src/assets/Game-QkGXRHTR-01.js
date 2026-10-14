// Game-QkGXRHTR 01 — jsx
// Lines 1-295 of readable/assets/Game-QkGXRHTR.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, s as i, u as a } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as o } from "./useToast-QK0Q4gGT.js";
import { a as s, i as c } from "./dist-CA4uZW3H.js";
import { l } from "./AuthService-CQeU_0bQ.js";
import { t as u } from "./dist-p2cW4AiE.js";
import { t as d } from "./dist-DkIQBCKf.js";
import { i as f, t as p } from "./button-Ap3ysi5G.js";
import { n as m, t as h } from "./wand-sparkles-DuaVuhfE.js";
import { n as g, t as _ } from "./thumbs-up-3xlfzfdY.js";
import {
  a as v,
  c as y,
  i as b,
  n as x,
  o as S,
  r as ee,
  s as te,
  t as ne,
} from "./ShareMenu-DgMG0s-m.js";
import { t as C } from "./refresh-cw-CkwJF4P8.js";
import { c as w, r as T } from "./leaderboards-Bl1Xg4fx.js";
import { n as E, t as D } from "./apiConfig-cGsbt6Be.js";
import { c as O } from "./AnalyticsService-BMBbF9S-.js";
import { t as k } from "./useTranslation-BdauNPOZ.js";
import { t as A } from "./avatarUtils-CBd99uWq.js";
import { r as re } from "./gameUtils-hllMGYPh.js";
import { n as ie, r as j, t as M } from "./avatar-ixs41cq5.js";
import { t as ae } from "./dist-C7e-qgX5.js";
import { n as N, r as P, t as oe } from "./dist-BKqz_oOH.js";
import { t as se } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  A as ce,
  C as le,
  E as ue,
  L as de,
  O as fe,
  S as pe,
  W as me,
  X as he,
  Y as ge,
  _ as _e,
  at as ve,
  b as ye,
  ct as be,
  d as F,
  g as xe,
  it as Se,
  nt as Ce,
  q as we,
  s as Te,
  u as I,
  v as L,
  w as Ee,
} from "./index-BKDksszn.js";
import { a as De, i as Oe, r as ke, t as Ae } from "./gameLikes-CVeS3kbw.js";
import { a as je, i as Me, t as Ne } from "./follow-CUqA0aWI.js";
import { t as Pe } from "./textarea-D_1TMYK2.js";
import { n as Fe, t as Ie } from "./card-DLIi0Qe8.js";
import { t as Le } from "./confirm-dialog-B_bgaQuk.js";
import { i as Re, n as R, r as ze, t as Be } from "./tabs-Gm5XRVor.js";
import { n as Ve } from "./history-BgFRjxWz.js";
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
