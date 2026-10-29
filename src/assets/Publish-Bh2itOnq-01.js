// Publish-Bh2itOnq 01 — current
// Lines 1-205 of readable/assets/Publish-Bh2itOnq.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { a as o, i as s, n as c, t as l } from "./dist-CA4uZW3H.js";
import { l as u, m as ee } from "./AuthService-C8NFtVWb.js";
import { t as d } from "./dist-ByN-1XKv.js";
import { n as f, t as p } from "./dist-ChIM81kv.js";
import { t as m } from "./button-gyaE5cND.js";
import {
  a as h,
  c as g,
  n as _,
  r as v,
  s as y,
  t as b,
} from "./switch-CkslyoJe.js";
import { t as x } from "./circle-check-_Mky5540.js";
import { n as S, t as te } from "./settings-2-BMWy8huM.js";
import { n as ne, t as re } from "./lock-B_5aliFz.js";
import { t as C } from "./loader-circle-BWNSk5u-.js";
import { t as ie } from "./rotate-ccw-C6X9IsVD.js";
import {
  a as ae,
  c as w,
  i as oe,
  n as se,
  o as ce,
  s as le,
  t as ue,
} from "./leaderboards-DIdbDUl6.js";
import { t as de } from "./apiConfig-BixZVfgD.js";
import { t as T } from "./useTranslation-BdauNPOZ.js";
import { t as fe } from "./formatDistanceToNow-DhpKhUbk.js";
import { x as pe } from "./gameCreation-B6oXUVk-.js";
import {
  $ as me,
  U as E,
  W as D,
  X as O,
  Z as he,
  _ as ge,
  c as _e,
  dt as ve,
  et as k,
  i as ye,
  s as be,
  z as xe,
} from "./index-CBcimEr9.js";
import { t as Se } from "./textarea-B3J7W2fu.js";
import {
  a as A,
  i as Ce,
  n as j,
  o as M,
  r as N,
  t as P,
} from "./card-Ca5HFnV5.js";
import {
  a as we,
  c as Te,
  i as Ee,
  n as De,
  o as Oe,
  r as ke,
  s as Ae,
  t as je,
} from "./alert-dialog-CuLzujrt.js";
import { t as F } from "./confirm-dialog-CmRVm5ya.js";
import {
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as Ie,
  t as Le,
} from "./publish-BlDBQgme.js";
import { t as Re } from "./badge-CZRAaW2d.js";
var I = e(t(), 1),
  L = n(),
  R = Object.defineProperty,
  z = (e, t) => R(e, `name`, { value: t, configurable: !0 }),
  B = `Collapsible`,
  [V, ze] = s(B),
  [H, U] = V(B),
  Be = I.forwardRef(
    z(function (e, t) {
      let {
          __scopeCollapsible: n,
          open: r,
          defaultOpen: i,
          disabled: a,
          onOpenChange: o,
          ...s
        } = e,
        [c, l] = f({ prop: r, defaultProp: i ?? !1, onChange: o, caller: B });
      return (0, L.jsx)(H, {
        scope: n,
        disabled: a,
        contentId: p(),
        open: c,
        onOpenToggle: I.useCallback(() => l((e) => !e), [l]),
        children: (0, L.jsx)(d.div, {
          "data-state": G(c),
          "data-disabled": a ? `` : void 0,
          ...s,
          ref: t,
        }),
      });
    }, `Collapsible`),
  ),
  W = `CollapsibleTrigger`,
  Ve = I.forwardRef(
    z(function (e, t) {
      let { __scopeCollapsible: n, ...r } = e,
        i = U(W, n);
      return (0, L.jsx)(d.button, {
        type: `button`,
        "aria-controls": i.open ? i.contentId : void 0,
        "aria-expanded": i.open || !1,
        "data-state": G(i.open),
        "data-disabled": i.disabled ? `` : void 0,
        disabled: i.disabled,
        ...r,
        ref: t,
        onClick: o(e.onClick, i.onOpenToggle),
      });
    }, `CollapsibleTrigger`),
  ),
  He = `CollapsibleContent`,
  Ue = I.forwardRef(
    z(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = U(He, e.__scopeCollapsible);
      return (0, L.jsx)(l, {
        present: n || i.open,
        children: ({ present: e }) =>
          (0, L.jsx)(We, { ...r, ref: t, present: e }),
      });
    }, `CollapsibleContent`),
  ),
  We = I.forwardRef(
    z(function (e, t) {
      let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
        o = U(He, n),
        [s, l] = I.useState(r),
        u = I.useRef(null),
        f = ee(t, u),
        p = I.useRef(0),
        m = p.current,
        h = I.useRef(0),
        g = h.current,
        _ = o.open || s,
        v = I.useRef(_),
        y = I.useRef(void 0);
      return (
        I.useEffect(() => {
          let e = requestAnimationFrame(() => (v.current = !1));
          return () => cancelAnimationFrame(e);
        }, []),
        c(() => {
          let e = u.current;
          if (e) {
            ((y.current = y.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName,
            }),
              (e.style.transitionDuration = `0s`),
              (e.style.animationName = `none`));
            let t = e.getBoundingClientRect();
            ((p.current = t.height),
              (h.current = t.width),
              v.current ||
                ((e.style.transitionDuration = y.current.transitionDuration),
                (e.style.animationName = y.current.animationName)),
              l(r));
          }
        }, [o.open, r]),
        (0, L.jsx)(d.div, {
          "data-state": G(o.open),
          "data-disabled": o.disabled ? `` : void 0,
          id: o.contentId,
          hidden: !_,
          ...a,
          ref: f,
          style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": g ? `${g}px` : void 0,
            ...e.style,
          },
          children: _ && i,
        })
      );
    }, `CollapsibleContentImpl`),
  );
function G(e) {
  return e ? `open` : `closed`;
}
z(G, `getState`);
var Ge = Be,
  Ke = Ve,
  qe = Ue,
  Je = [`max`, `min`, `sum`, `count`, `avg`, `latest`],
  Ye = [`all`, `daily`, `weekly`, `monthly`],
  K = `player`;
