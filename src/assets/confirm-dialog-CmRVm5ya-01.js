// confirm-dialog-CmRVm5ya 01 — children
// Lines 1-83 of readable/assets/confirm-dialog-CmRVm5ya.pretty.js (statement-aligned).
import { t as e } from "./jsx-runtime-BtyjnKZj.js";
import { l as t } from "./AuthService-C8NFtVWb.js";
import {
  a as n,
  c as r,
  i,
  n as a,
  o,
  r as s,
  s as c,
  t as l,
} from "./alert-dialog-CuLzujrt.js";
var u = e();
function d({
  open: e,
  onOpenChange: d,
  onConfirm: f,
  title: p,
  description: m,
  confirmLabel: h = `Confirm`,
  cancelLabel: g = `Cancel`,
  confirmVariant: _ = `default`,
  details: v,
  icon: y,
}) {
  return (0, u.jsx)(l, {
    open: e,
    onOpenChange: d,
    children: (0, u.jsxs)(i, {
      className: `max-w-sm`,
      children: [
        (0, u.jsxs)(c, {
          children: [
            y &&
              (0, u.jsx)(`div`, {
                className: `flex justify-center sm:justify-start mb-1 text-muted-foreground`,
                children: y,
              }),
            (0, u.jsx)(r, { children: p }),
            m && (0, u.jsx)(n, { children: m }),
          ],
        }),
        v &&
          v.length > 0 &&
          (0, u.jsx)(`div`, {
            className: `rounded-md bg-card border border-border px-3 py-2.5 space-y-1.5`,
            children: v.map((e) =>
              (0, u.jsxs)(
                `div`,
                {
                  className: `flex items-center justify-between text-sm`,
                  children: [
                    (0, u.jsx)(`span`, {
                      className: `text-muted-foreground`,
                      children: e.label,
                    }),
                    (0, u.jsx)(`span`, {
                      className: `text-foreground font-medium`,
                      children: e.value,
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
        (0, u.jsxs)(o, {
          children: [
            (0, u.jsx)(s, { children: g }),
            (0, u.jsx)(a, {
              onClick: f,
              className: t(
                _ === `destructive` &&
                  `bg-destructive text-destructive-foreground hover:bg-destructive/90`,
              ),
              children: h,
            }),
          ],
        }),
      ],
    }),
  });
}
