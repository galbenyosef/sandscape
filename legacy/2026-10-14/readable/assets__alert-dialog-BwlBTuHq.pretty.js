import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { a as r, i } from "./dist-CA4uZW3H.js";
import { l as a, m as o } from "./AuthService-CQeU_0bQ.js";
import { n as s } from "./button-Ap3ysi5G.js";
import {
  a as c,
  c as l,
  i as u,
  l as d,
  n as f,
  o as p,
  r as m,
  s as h,
  t as g,
} from "./dist-Bhx37s1t.js";
var _ = e(t(), 1),
  v = n(),
  y = Object.defineProperty,
  b = (e, t) => y(e, `name`, { value: t, configurable: !0 }),
  [x, S] = i(`AlertDialog`, [d]),
  C = d(),
  w = b((e) => {
    let { __scopeAlertDialog: t, ...n } = e,
      r = C(t);
    return (0, v.jsx)(g, { ...r, ...n, modal: !0 });
  }, `AlertDialog`),
  T = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, ...r } = e,
        i = C(n);
      return (0, v.jsx)(l, { ...i, ...r, ref: t });
    }, `AlertDialogTrigger`),
  ),
  E = b((e) => {
    let { __scopeAlertDialog: t, ...n } = e,
      r = C(t);
    return (0, v.jsx)(p, { ...r, ...n });
  }, `AlertDialogPortal`),
  D = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, ...r } = e,
        i = C(n);
      return (0, v.jsx)(c, { ...i, ...r, ref: t });
    }, `AlertDialogOverlay`),
  ),
  [O, k] = x(`AlertDialogContent`),
  A = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, children: i, ...a } = e,
        s = C(n),
        c = o(t, _.useRef(null)),
        l = _.useRef(null);
      return (0, v.jsx)(O, {
        scope: n,
        cancelRef: l,
        children: (0, v.jsx)(m, {
          role: `alertdialog`,
          ...s,
          ...a,
          ref: c,
          onOpenAutoFocus: r(a.onOpenAutoFocus, (e) => {
            (e.preventDefault(), l.current?.focus({ preventScroll: !0 }));
          }),
          onPointerDownOutside: (e) => e.preventDefault(),
          onInteractOutside: (e) => e.preventDefault(),
          children: i,
        }),
      });
    }, `AlertDialogContent`),
  ),
  j = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, ...r } = e,
        i = C(n);
      return (0, v.jsx)(h, { ...i, ...r, ref: t });
    }, `AlertDialogTitle`),
  ),
  M = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, ...r } = e,
        i = C(n);
      return (0, v.jsx)(u, { ...i, ...r, ref: t });
    }, `AlertDialogDescription`),
  ),
  N = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, ...r } = e,
        i = C(n);
      return (0, v.jsx)(f, { ...i, ...r, ref: t });
    }, `AlertDialogAction`),
  ),
  P = `AlertDialogCancel`,
  F = _.forwardRef(
    b(function (e, t) {
      let { __scopeAlertDialog: n, ...r } = e,
        { cancelRef: i } = k(P, n),
        a = C(n),
        s = o(t, i);
      return (0, v.jsx)(f, { ...a, ...r, ref: s });
    }, `AlertDialogCancel`),
  ),
  I = w,
  L = T,
  R = E,
  z = _.forwardRef(({ className: e, ...t }, n) =>
    (0, v.jsx)(D, {
      className: a(
        `fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
      ref: n,
    }),
  );
z.displayName = D.displayName;
var B = _.forwardRef(({ className: e, ...t }, n) =>
  (0, v.jsxs)(R, {
    children: [
      (0, v.jsx)(z, {}),
      (0, v.jsx)(A, {
        ref: n,
        className: a(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg`,
          e,
        ),
        ...t,
      }),
    ],
  }),
);
B.displayName = A.displayName;
var V = ({ className: e, ...t }) =>
  (0, v.jsx)(`div`, {
    className: a(`flex flex-col space-y-2 text-center sm:text-left`, e),
    ...t,
  });
V.displayName = `AlertDialogHeader`;
var H = ({ className: e, ...t }) =>
  (0, v.jsx)(`div`, {
    className: a(
      `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
      e,
    ),
    ...t,
  });
H.displayName = `AlertDialogFooter`;
var U = _.forwardRef(({ className: e, ...t }, n) =>
  (0, v.jsx)(j, { ref: n, className: a(`text-lg font-semibold`, e), ...t }),
);
U.displayName = j.displayName;
var W = _.forwardRef(({ className: e, ...t }, n) =>
  (0, v.jsx)(M, {
    ref: n,
    className: a(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
W.displayName = M.displayName;
var G = _.forwardRef(({ className: e, ...t }, n) =>
  (0, v.jsx)(N, { ref: n, className: a(s(), e), ...t }),
);
G.displayName = N.displayName;
var K = _.forwardRef(({ className: e, ...t }, n) =>
  (0, v.jsx)(F, {
    ref: n,
    className: a(s({ variant: `outline` }), `mt-2 sm:mt-0`, e),
    ...t,
  }),
);
K.displayName = F.displayName;
export {
  W as a,
  U as c,
  B as i,
  L as l,
  G as n,
  H as o,
  K as r,
  V as s,
  I as t,
};
