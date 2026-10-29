// GameStoryFeed-Dif_KO0F 01 — classname
// Lines 1-147 of readable/assets/GameStoryFeed-Dif_KO0F.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { l as o } from "./AuthService-C8NFtVWb.js";
import { i as s, t as c } from "./button-gyaE5cND.js";
import { t as l } from "./check-8B-bFngd.js";
import { t as u } from "./chevron-left-oJGH3dC9.js";
import { t as d } from "./loader-circle-BWNSk5u-.js";
import { a as f, c as p, t as ee } from "./ShareMenu-DFz6yi7_.js";
import { t as te } from "./play-Bq3AuKtE.js";
import { t as ne } from "./send-D_6QulIR.js";
import { t as m } from "./share-2-DlTfRg3d.js";
import { u as re } from "./AnalyticsService-CXnfQpTJ.js";
import { t as ie } from "./useTranslation-BdauNPOZ.js";
import { n as ae, r as oe, t as h } from "./gameUtils-Che36IRh.js";
import { n as g, r as _, t as se } from "./avatar-BHj788a5.js";
import { t as v } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  A as y,
  C as b,
  E as ce,
  K as x,
  T as le,
  b as S,
  et as C,
  g as w,
  it as T,
  q as E,
  rt as D,
  s as ue,
  u as de,
  w as fe,
  z as pe,
} from "./index-CBcimEr9.js";
import { a as me, i as he, r as ge } from "./gameLikes-CP7fY1VN.js";
import { a as _e, i as ve, t as ye } from "./follow-CpTPXfIN.js";
import {
  a as O,
  i as k,
  n as A,
  o as j,
  r as M,
  s as N,
  t as P,
} from "./dist-B88msiyW.js";
import { t as be } from "./textarea-B3J7W2fu.js";
var F = e(t()),
  I = n(),
  xe = P,
  L = j,
  R = F.forwardRef(({ className: e, ...t }, n) =>
    (0, I.jsx)(O, {
      className: o(
        `fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
      ref: n,
    }),
  );
R.displayName = O.displayName;
var Se = s(
    `fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500`,
    {
      variants: {
        side: {
          top: `inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`,
          bottom: `inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,
          left: `inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,
          right: `inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,
        },
      },
      defaultVariants: { side: `right` },
    },
  ),
  Ce = F.forwardRef(
    (
      {
        side: e = `right`,
        className: t,
        overlayClassName: n,
        children: r,
        ...i
      },
      a,
    ) =>
      (0, I.jsxs)(L, {
        children: [
          (0, I.jsx)(R, { className: n }),
          (0, I.jsxs)(M, {
            ref: a,
            className: o(Se({ side: e }), t),
            ...i,
            children: [
              r,
              (0, I.jsxs)(A, {
                className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary`,
                children: [
                  (0, I.jsx)(E, { className: `h-4 w-4` }),
                  (0, I.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Close`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
  );
Ce.displayName = M.displayName;
var we = ({ className: e, ...t }) =>
  (0, I.jsx)(`div`, {
    className: o(`flex flex-col space-y-2 text-center sm:text-left`, e),
    ...t,
  });
we.displayName = `SheetHeader`;
var z = ({ className: e, ...t }) =>
  (0, I.jsx)(`div`, {
    className: o(
      `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
      e,
    ),
    ...t,
  });
z.displayName = `SheetFooter`;
var Te = F.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(N, {
    ref: n,
    className: o(`text-lg font-semibold text-foreground`, e),
    ...t,
  }),
);
Te.displayName = N.displayName;
var Ee = F.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(k, {
    ref: n,
    className: o(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
Ee.displayName = k.displayName;
var De = 1,
  Oe = 3,
  ke = 48,
  Ae = (e) => e.shortCode || e._id;
