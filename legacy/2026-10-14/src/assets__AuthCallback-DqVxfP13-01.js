// assets__AuthCallback-DqVxfP13 01 — classname
// Lines 1-170 of readable/assets__AuthCallback-DqVxfP13.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./AuthService-CQeU_0bQ.js";
import { t as o } from "./button-Ap3ysi5G.js";
import { t as s } from "./loader-circle-DBFTFT2k.js";
import { t as c } from "./triangle-alert-D-SEZi4r.js";
import { t as l } from "./useTranslation-BdauNPOZ.js";
import {
  L as u,
  W as d,
  f,
  h as p,
  m,
  p as h,
  u as g,
  z as _,
} from "./index-BKDksszn.js";
var v = e(t()),
  y = n(),
  b = new Set([`google`, `github`, `apple`, `facebook`]);
function x() {
  let { t: e } = l(),
    t = r(),
    [n] = i(),
    { user: x, loading: S, refreshUser: C, refreshAccountState: w } = d(),
    { trackEvent: T } = u(),
    [E, D] = (0, v.useState)(!1),
    O = (0, v.useRef)(!1),
    k = (0, v.useMemo)(() => p(n.get(`returnTo`)), [n]),
    A = m(n.get(`entryPoint`)),
    j = h(n.get(`flow`)),
    M =
      n.get(`provider`) ??
      window.sessionStorage.getItem(`sandscape.auth.provider`),
    N =
      j === `oauth` && M !== null && b.has(M)
        ? M
        : j === `password_recovery` || j === `recovery`
          ? `password`
          : `email_otp`;
  return (
    (0, v.useEffect)(() => {
      O.current ||
        S ||
        ((O.current = !0),
        (async () => {
          let e = n.get(`error`);
          if (e) {
            let n = e === `access_denied`;
            (T(`auth_error`, {
              provider: N,
              flow: j,
              entry_point: A,
              destination_category: f(k),
              error_category: n ? `provider_denied` : `callback`,
            }),
              window.sessionStorage.removeItem(`sandscape.auth.provider`),
              t(
                `${g(k, A)}&errorCategory=${n ? `provider_denied` : `callback`}`,
                { replace: !0 },
              ));
            return;
          }
          try {
            if (!x) {
              let e = n.get(`code`);
              if (!e) throw Error(`Missing callback session`);
              (await a.exchangeCodeForSession(e), await C());
            }
            if (
              (T(`auth_verified`, {
                provider: N,
                flow: j,
                entry_point: A,
                destination_category: f(k),
              }),
              j === `recovery`)
            ) {
              t(g(k, A, `password-update`), { replace: !0 });
              return;
            }
            if (j === `email_change`) {
              t(k === `/` ? `/settings` : k, { replace: !0 });
              return;
            }
            let e = await _({
                provider: N,
                entryPoint: A,
                destinationCategory: f(k),
              }),
              r = await w();
            if (r === `required`) {
              let e = new URLSearchParams({ entryPoint: A });
              (k !== `/` && e.set(`returnTo`, k),
                e.set(`provider`, N),
                t(`/onboarding?${e.toString()}`, { replace: !0 }));
              return;
            }
            if (r !== `complete`) throw Error(`Profile state unavailable`);
            (T(`auth_completed`, {
              provider: N,
              flow: j,
              entry_point: A,
              destination_category: f(k),
              is_new_user: e,
            }),
              window.sessionStorage.removeItem(`sandscape.auth.provider`),
              t(k, { replace: !0 }));
          } catch {
            (T(`auth_error`, {
              provider: N,
              flow: j,
              entry_point: A,
              destination_category: f(k),
              error_category: `callback`,
            }),
              window.sessionStorage.removeItem(`sandscape.auth.provider`),
              D(!0));
          }
        })());
    }, [A, j, S, t, N, w, C, k, n, T, x]),
    E
      ? (0, y.jsx)(`main`, {
          className: `flex min-h-screen items-center justify-center bg-background p-4`,
          children: (0, y.jsxs)(`div`, {
            className: `max-w-md space-y-4 text-center`,
            children: [
              (0, y.jsx)(c, {
                className: `mx-auto h-10 w-10 text-destructive`,
              }),
              (0, y.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: e(
                  `authPage.callbackFailedTitle`,
                  `We couldn't finish signing you in`,
                ),
              }),
              (0, y.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: e(
                  `authPage.errors.callback`,
                  `The sign-in response was invalid or expired. Please try again.`,
                ),
              }),
              (0, y.jsx)(o, {
                onClick: () => t(g(k, A), { replace: !0 }),
                children: e(`authPage.tryAgain`, `Try again`),
              }),
            ],
          }),
        })
      : (0, y.jsx)(`main`, {
          className: `flex min-h-screen items-center justify-center bg-background p-4`,
          children: (0, y.jsxs)(`div`, {
            className: `space-y-3 text-center`,
            "aria-live": `polite`,
            children: [
              (0, y.jsx)(s, {
                className: `mx-auto h-8 w-8 animate-spin text-primary`,
              }),
              (0, y.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: e(`authPage.finishing`, `Finishing sign in...`),
              }),
            ],
          }),
        })
  );
}
