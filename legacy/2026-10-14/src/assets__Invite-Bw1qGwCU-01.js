// assets__Invite-Bw1qGwCU 01 — children
// Lines 1-330 of readable/assets__Invite-Bw1qGwCU.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i, n as a } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as o } from "./useToast-QK0Q4gGT.js";
import { t as s } from "./button-Ap3ysi5G.js";
import { t as c } from "./circle-check-BVtsIJ9N.js";
import { n as l, u } from "./CoinDisplay-iWoR0BMU.js";
import { t as d } from "./loader-circle-DBFTFT2k.js";
import { t as f } from "./party-popper-Bs8HHRWI.js";
import { n as p, t as m } from "./apiConfig-cGsbt6Be.js";
import { t as h } from "./useTranslation-BdauNPOZ.js";
import { W as g, g as _, u as v } from "./index-BKDksszn.js";
import { a as y, n as b, r as x, t as S } from "./card-DLIi0Qe8.js";
var C = e(t());
async function w(e) {
  let t = await fetch(`${m.API_BASE_URL}/api/invites/${encodeURIComponent(e)}`);
  if (!t.ok) throw Error(`Invite preview failed: ${t.status}`);
  return await t.json();
}
async function T(e) {
  let t = await p(),
    n = await fetch(`${m.API_BASE_URL}/api/invites/redeem`, {
      method: `POST`,
      headers: t,
      body: JSON.stringify({ code: e }),
    });
  if (!n.ok) throw Error(`Invite redeem failed: ${n.status}`);
  return await n.json();
}
function E(e) {
  return v(`/invite/${e}`, `invite`);
}
function D(e) {
  return e.current ? !1 : ((e.current = !0), !0);
}
function O(e) {
  if (e.authLoading) return { kind: `loading` };
  if (e.failed) return { kind: `error` };
  if (e.isAuthenticated) {
    let t = e.redeem;
    return t
      ? t.status === `redeemed` || t.status === `already_redeemed`
        ? {
            kind: `redeemed`,
            coins: t.coins,
            label: t.label,
            balance: t.balance,
            claimed: t.status === `already_redeemed`,
          }
        : { kind: `dead`, status: t.status, signedIn: !0 }
      : { kind: `loading` };
  }
  let t = e.preview;
  return t
    ? t.status === `open`
      ? {
          kind: `preview-open`,
          coins: t.coins,
          label: t.label,
          continuePath: E(e.code),
        }
      : { kind: `dead`, status: t.status, signedIn: !1 }
    : { kind: `loading` };
}
var k = n();
function A() {
  let { code: e = `` } = i(),
    { isAuthenticated: t, loading: n, refreshCanCreate: p } = g(),
    { t: m } = h(),
    { toast: v } = o(),
    E = r(),
    [A, j] = (0, C.useState)(null),
    [M, N] = (0, C.useState)(null),
    [P, F] = (0, C.useState)(!1),
    I = (0, C.useRef)(!1),
    L = (0, C.useRef)(!1);
  ((0, C.useEffect)(() => {
    n ||
      t ||
      !e ||
      (D(I) &&
        w(e)
          .then(j)
          .catch((e) => {
            (console.error(`Invite preview failed:`, e), F(!0));
          }));
  }, [n, t, e]),
    (0, C.useEffect)(() => {
      n ||
        !t ||
        !e ||
        (D(L) &&
          T(e)
            .then((e) => {
              (N(e),
                (e.status === `redeemed` || e.status === `already_redeemed`) &&
                  (p(), l()));
            })
            .catch((e) => {
              (console.error(`Invite redeem failed:`, e),
                F(!0),
                v({
                  title: m(`invitePage.errorTitle`, `Something went wrong`),
                  description: m(
                    `invitePage.errorBody`,
                    `We couldn't load this invite. Please try again.`,
                  ),
                  variant: `destructive`,
                }));
            }));
    }, [n, t, e]));
  let R = O({
    code: e,
    authLoading: n,
    isAuthenticated: t,
    preview: A,
    redeem: M,
    failed: P,
  });
  return (0, k.jsxs)(`main`, {
    className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
    children: [
      (0, k.jsx)(_, {
        title: m(`invitePage.seoTitle`, `You've been invited | Sandscape`),
        noindex: !0,
      }),
      (0, k.jsxs)(S, {
        className: `w-full max-w-md shadow-xl`,
        children: [
          R.kind === `loading` &&
            (0, k.jsxs)(b, {
              className: `flex flex-col items-center gap-4 py-16`,
              children: [
                (0, k.jsx)(d, {
                  className: `h-8 w-8 animate-spin text-primary`,
                  "aria-label": m(`general.loading`, `Loading...`),
                }),
                (0, k.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: m(`invitePage.loading`, `Loading your invite…`),
                }),
              ],
            }),
          R.kind === `error` &&
            (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(y, {
                  className: `text-center`,
                  children: [
                    (0, k.jsx)(`h1`, {
                      className: `text-2xl font-semibold tracking-tight`,
                      children: m(
                        `invitePage.errorTitle`,
                        `Something went wrong`,
                      ),
                    }),
                    (0, k.jsx)(x, {
                      children: m(
                        `invitePage.errorBody`,
                        `We couldn't load this invite. Please try again.`,
                      ),
                    }),
                  ],
                }),
                (0, k.jsx)(b, {
                  className: `flex justify-center pb-8`,
                  children: (0, k.jsx)(s, {
                    asChild: !0,
                    variant: `outline`,
                    children: (0, k.jsx)(a, {
                      to: `/`,
                      children: m(`invitePage.goHome`, `Go home`),
                    }),
                  }),
                }),
              ],
            }),
          R.kind === `preview-open` &&
            (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(y, {
                  className: `items-center text-center`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary`,
                      children: (0, k.jsx)(f, { className: `h-6 w-6` }),
                    }),
                    (0, k.jsx)(`h1`, {
                      className: `text-2xl font-semibold tracking-tight`,
                      children: m(
                        `invitePage.invitedTitle`,
                        `You've been invited to Sandscape`,
                      ),
                    }),
                    R.label ? (0, k.jsx)(x, { children: R.label }) : null,
                  ],
                }),
                (0, k.jsxs)(b, {
                  className: `flex flex-col items-center gap-5 pb-8`,
                  children: [
                    R.coins > 0 &&
                      (0, k.jsxs)(`div`, {
                        className: `inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary`,
                        children: [
                          (0, k.jsx)(u, { className: `h-4 w-4` }),
                          m(`invitePage.coinsBadge`, {
                            amount: R.coins,
                            defaultValue: `+{{amount}} coins`,
                          }),
                        ],
                      }),
                    (0, k.jsx)(s, {
                      className: `w-full`,
                      onClick: () => E(R.continuePath),
                      children: m(`invitePage.continue`, `Continue`),
                    }),
                  ],
                }),
              ],
            }),
          R.kind === `redeemed` &&
            (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(y, {
                  className: `items-center text-center`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary`,
                      children: (0, k.jsx)(c, { className: `h-6 w-6` }),
                    }),
                    (0, k.jsx)(`h1`, {
                      className: `text-2xl font-semibold tracking-tight`,
                      children: R.claimed
                        ? m(`invitePage.alreadyTitle`, `You're already in`)
                        : m(`invitePage.redeemedTitle`, `You're in`),
                    }),
                    (0, k.jsx)(x, {
                      children: R.claimed
                        ? m(`invitePage.coinsClaimed`, {
                            amount: R.coins,
                            defaultValue: `{{amount}} coins already claimed`,
                          })
                        : m(`invitePage.coinsAdded`, {
                            amount: R.coins,
                            defaultValue: `{{amount}} coins added`,
                          }),
                    }),
                  ],
                }),
                (0, k.jsxs)(b, {
                  className: `flex flex-col items-center gap-5 pb-8`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary`,
                      children: [
                        (0, k.jsx)(u, { className: `h-4 w-4` }),
                        m(`invitePage.balanceLabel`, {
                          balance: R.balance,
                          defaultValue: `Balance: {{balance}} coins`,
                        }),
                      ],
                    }),
                    (0, k.jsx)(s, {
                      className: `w-full`,
                      onClick: () => E(`/create`),
                      children: m(`invitePage.startCreating`, `Start creating`),
                    }),
                  ],
                }),
              ],
            }),
          R.kind === `dead` &&
            (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(y, {
                  className: `text-center`,
                  children: [
                    (0, k.jsx)(`h1`, {
                      className: `text-2xl font-semibold tracking-tight`,
                      children: m(
                        `invitePage.unavailableTitle`,
                        `Invite unavailable`,
                      ),
                    }),
                    (0, k.jsx)(x, {
                      children: ((e) => {
                        switch (e) {
                          case `used`:
                            return m(
                              `invitePage.status.used`,
                              `This invite has already been used.`,
                            );
                          case `expired`:
                            return m(
                              `invitePage.status.expired`,
                              `This invite has expired.`,
                            );
                          case `revoked`:
                            return m(
                              `invitePage.status.revoked`,
                              `This invite is no longer active.`,
                            );
                          case `not_found`:
                            return m(
                              `invitePage.status.not_found`,
                              `We couldn't find this invite.`,
                            );
                        }
                      })(R.status),
                    }),
                  ],
                }),
                (0, k.jsx)(b, {
                  className: `flex justify-center pb-8`,
                  children: (0, k.jsx)(s, {
                    asChild: !0,
                    variant: `outline`,
                    children: (0, k.jsx)(a, {
                      to: `/`,
                      children: m(`invitePage.goHome`, `Go home`),
                    }),
                  }),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
