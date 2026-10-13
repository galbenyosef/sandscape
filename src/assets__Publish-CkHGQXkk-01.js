// assets__Publish-CkHGQXkk 01 — current
// Lines 1-206 of readable/assets__Publish-CkHGQXkk.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { a as o, i as s, n as c, t as l } from "./dist-CA4uZW3H.js";
import { l as u, m as ee } from "./AuthService-CQeU_0bQ.js";
import { t as d } from "./dist-p2cW4AiE.js";
import { t as f } from "./dist-DkIQBCKf.js";
import { t as p } from "./button-Ap3ysi5G.js";
import {
  a as m,
  c as h,
  n as g,
  r as _,
  s as v,
  t as y,
} from "./switch-DR7KWk3q.js";
import { t as te } from "./circle-check-BVtsIJ9N.js";
import { n as b, t as x } from "./settings-2-Clz1ZubR.js";
import { n as ne, t as re } from "./lock-CAG5RccF.js";
import { t as S } from "./loader-circle-DBFTFT2k.js";
import { t as C } from "./rotate-ccw-FK7vjwP0.js";
import {
  a as ie,
  c as ae,
  i as w,
  n as oe,
  o as se,
  s as ce,
  t as le,
} from "./leaderboards-Bl1Xg4fx.js";
import { t as ue } from "./apiConfig-cGsbt6Be.js";
import { t as T } from "./useTranslation-BdauNPOZ.js";
import { t as de } from "./dist-IS-98_QU.js";
import { t as fe } from "./formatDistanceToNow-DhpKhUbk.js";
import { x as pe } from "./gameCreation-7QUnbwLk.js";
import {
  $ as me,
  H as E,
  L as he,
  V as D,
  X as O,
  Z as ge,
  _ as _e,
  c as ve,
  dt as ye,
  et as k,
  i as be,
  s as xe,
} from "./index-BKDksszn.js";
import { t as Se } from "./textarea-D_1TMYK2.js";
import {
  a as A,
  i as Ce,
  n as j,
  o as M,
  r as N,
  t as P,
} from "./card-DLIi0Qe8.js";
import {
  a as we,
  c as Te,
  i as Ee,
  n as De,
  o as Oe,
  r as ke,
  s as Ae,
  t as je,
} from "./alert-dialog-BwlBTuHq.js";
import { t as F } from "./confirm-dialog-B_bgaQuk.js";
import {
  i as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as Ie,
  t as Le,
} from "./publish-IuClGqz5.js";
import { t as Re } from "./badge-B4-vVyqh.js";
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
        contentId: de(),
        open: c,
        onOpenToggle: I.useCallback(() => l((e) => !e), [l]),
        children: (0, L.jsx)(d.div, {
          "data-state": K(c),
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
        "data-state": K(i.open),
        "data-disabled": i.disabled ? `` : void 0,
        disabled: i.disabled,
        ...r,
        ref: t,
        onClick: o(e.onClick, i.onOpenToggle),
      });
    }, `CollapsibleTrigger`),
  ),
  G = `CollapsibleContent`,
  He = I.forwardRef(
    z(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = U(G, e.__scopeCollapsible);
      return (0, L.jsx)(l, {
        present: n || i.open,
        children: ({ present: e }) =>
          (0, L.jsx)(Ue, { ...r, ref: t, present: e }),
      });
    }, `CollapsibleContent`),
  ),
  Ue = I.forwardRef(
    z(function (e, t) {
      let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
        o = U(G, n),
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
          "data-state": K(o.open),
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
function K(e) {
  return e ? `open` : `closed`;
}
z(K, `getState`);
var We = Be,
  Ge = Ve,
  Ke = He,
  qe = [`max`, `min`, `sum`, `count`, `avg`, `latest`],
  Je = [`all`, `daily`, `weekly`, `monthly`],
  q = `player`;
