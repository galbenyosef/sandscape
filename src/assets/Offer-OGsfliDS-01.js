// Offer-OGsfliDS 01 — children
// Lines 1-327 of readable/assets/Offer-OGsfliDS.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i, n as a } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as o } from "./button-gyaE5cND.js";
import { n as s } from "./CoinDisplay-JJDtxOIB.js";
import { t as c } from "./loader-circle-BWNSk5u-.js";
import { t as l } from "./useTranslation-BdauNPOZ.js";
import { K as u, g as d, u as f } from "./index-CBcimEr9.js";
import { a as p, n as m, o as h, t as g } from "./card-Ca5HFnV5.js";
import { i as _, n as v } from "./marketing-Cb4yJvTI.js";
var y = e(t()),
  b = [`trial`, `discount`],
  x = new Set([`not_found`, `used`, `revoked`, `expired`]),
  S = new Set([`pending`]);
function C(e) {
  return f(`/offer/${e}`, `offer`);
}
function w(e, t) {
  return t && e?.status === `used`;
}
function T(e, t) {
  return e && b.includes(e) ? `/settings?tab=billing` : t ? `/create` : `/`;
}
function E(e) {
  let { preview: t, claim: n } = e;
  if (e.authLoading) return { kind: `loading` };
  if (!t) return e.previewFailed ? { kind: `error` } : { kind: `loading` };
  if (n?.status === `redeemed` || n?.status === `already_redeemed`) {
    let r = n.kind ?? t.offer?.kind ?? null;
    return { kind: `granted`, offerKind: r, continuePath: T(r, e.canCreate) };
  }
  if (n?.status === `wrong_account`) return { kind: `wrong_account` };
  if (n?.status === `no_email`) return { kind: `no_email` };
  if (w(t, e.isAuthenticated) && !n && !e.ownerCheckFailed)
    return { kind: `loading` };
  if (t.status !== `open` || !t.offer) {
    let r = n?.status ?? t.status;
    return {
      kind: `closed`,
      status: r,
      canSwitchAccount: e.isAuthenticated && r === `used`,
    };
  }
  if (n && x.has(n.status))
    return {
      kind: `closed`,
      status: n.status,
      canSwitchAccount: e.isAuthenticated && n.status === `used`,
    };
  let r = t.offer;
  return { kind: `open`, offer: r, notice: n?.status ?? null, action: D(r, e) };
}
function D(e, t) {
  return b.includes(e.kind) && !e.billing_available
    ? `billing_unavailable`
    : t.isAuthenticated
      ? t.claim && !S.has(t.claim.status)
        ? `none`
        : `claim`
      : `sign_in`;
}
var O = n();
function k() {
  let { code: e = `` } = i(),
    {
      user: t,
      isAuthenticated: n,
      canCreate: o,
      loading: f,
      refreshCanCreate: b,
      logout: x,
    } = u(),
    { t: S } = l(),
    T = r(),
    D = t?.id ?? null,
    [k, j] = (0, y.useState)(null),
    [N, P] = (0, y.useState)(!1),
    [F, I] = (0, y.useState)(null),
    [L, R] = (0, y.useState)(!1),
    [z, B] = (0, y.useState)(``),
    [V, H] = (0, y.useState)(!1);
  (0, y.useEffect)(() => {
    let t = !0;
    return (
      j(null),
      P(!1),
      B(``),
      _(e)
        .then((e) => {
          t && j(e);
        })
        .catch((e) => {
          t && (P(!0), B(e instanceof Error ? e.message : ``));
        }),
      () => {
        t = !1;
      }
    );
  }, [e]);
  let U = w(k, n);
  (0, y.useEffect)(() => {
    let t = !0;
    return (
      I(null),
      R(!1),
      U &&
        v(e)
          .then((e) => {
            t && I(e);
          })
          .catch(() => {
            t && R(!0);
          }),
      () => {
        t = !1;
      }
    );
  }, [e, D, U]);
  let W = async () => {
      (H(!0), B(``));
      try {
        let t = await v(e);
        if (t.status === `checkout`) {
          window.location.assign(A(t.url, S(`offerPage.unexpectedCheckout`)));
          return;
        }
        (I(t), t.status === `redeemed` && (await b(), s()));
      } catch (e) {
        B(e instanceof Error ? e.message : S(`offerPage.claimFailed`));
      } finally {
        H(!1);
      }
    },
    G = async () => {
      (await x(), T(C(e)));
    },
    K = E({
      authLoading: f,
      isAuthenticated: n,
      canCreate: o,
      preview: k,
      previewFailed: N,
      claim: F,
      ownerCheckFailed: L,
    });
  return (0, O.jsxs)(`main`, {
    className: `flex min-h-[100dvh] items-center justify-center bg-background p-6`,
    children: [
      (0, O.jsx)(d, { title: S(`offerPage.seoTitle`), noindex: !0 }),
      (0, O.jsxs)(g, {
        className: `w-full max-w-md`,
        children: [
          (0, O.jsxs)(p, {
            children: [
              (0, O.jsx)(`p`, {
                className: `mb-2 text-sm font-semibold text-muted-foreground`,
                children: S(`offerPage.brand`),
              }),
              (0, O.jsx)(h, {
                children:
                  K.kind === `granted`
                    ? S(`offerPage.claimedTitle`)
                    : K.kind === `open`
                      ? K.offer.name
                      : S(`offerPage.title`),
              }),
            ],
          }),
          (0, O.jsxs)(m, {
            className: `space-y-5`,
            children: [
              K.kind === `loading` &&
                (0, O.jsx)(c, {
                  className: `h-6 w-6 animate-spin`,
                  "aria-label": S(`offerPage.loading`),
                }),
              (z || K.kind === `error`) &&
                (0, O.jsx)(`p`, {
                  role: `alert`,
                  className: `text-destructive`,
                  children: z || S(`offerPage.loadFailed`),
                }),
              (0, O.jsx)(M, {
                view: K,
                code: e,
                busy: V,
                onClaim: () => void W(),
                onSwitchAccount: () => void G(),
              }),
              (0, O.jsx)(a, {
                className: `block text-center text-sm text-muted-foreground underline`,
                to: `/`,
                children: S(`offerPage.back`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function A(e, t) {
  let n = null;
  try {
    n = e ? new URL(e) : null;
  } catch {
    n = null;
  }
  if (!n || n.protocol !== `https:` || n.hostname !== `checkout.stripe.com`)
    throw Error(t);
  return n.href;
}
function j(e) {
  return e === `discount`
    ? `offerPage.discountApplied`
    : e === `trial`
      ? `offerPage.trialActive`
      : `offerPage.benefitsReady`;
}
function M({ view: e, code: t, busy: n, onClaim: r, onSwitchAccount: i }) {
  let { t: s } = l(),
    c = (e) =>
      s(`offerPage.status.${e}`, {
        defaultValue: s(`offerPage.status.unavailable`),
      });
  switch (e.kind) {
    case `loading`:
    case `error`:
      return null;
    case `granted`:
      return (0, O.jsxs)(O.Fragment, {
        children: [
          (0, O.jsx)(`p`, { children: s(j(e.offerKind)) }),
          (0, O.jsx)(o, {
            asChild: !0,
            className: `w-full`,
            children: (0, O.jsx)(a, {
              to: e.continuePath,
              children: s(`offerPage.continue`),
            }),
          }),
        ],
      });
    case `wrong_account`:
      return (0, O.jsxs)(O.Fragment, {
        children: [
          (0, O.jsx)(`p`, { children: c(`wrong_account`) }),
          (0, O.jsx)(o, {
            variant: `outline`,
            className: `w-full`,
            onClick: i,
            children: s(`offerPage.switchAccount`),
          }),
        ],
      });
    case `no_email`:
      return (0, O.jsxs)(O.Fragment, {
        children: [
          (0, O.jsx)(`p`, { children: c(`no_email`) }),
          (0, O.jsx)(o, {
            asChild: !0,
            variant: `outline`,
            className: `w-full`,
            children: (0, O.jsx)(a, {
              to: `/settings?tab=account`,
              children: s(`offerPage.accountSettings`),
            }),
          }),
        ],
      });
    case `closed`:
      return (0, O.jsxs)(O.Fragment, {
        children: [
          (0, O.jsx)(`p`, { children: c(e.status) }),
          e.canSwitchAccount &&
            (0, O.jsx)(o, {
              variant: `outline`,
              className: `w-full`,
              onClick: i,
              children: s(`offerPage.switchAccount`),
            }),
        ],
      });
    case `open`:
      return (0, O.jsxs)(O.Fragment, {
        children: [
          (0, O.jsx)(P, { offer: e.offer }),
          e.notice &&
            (0, O.jsx)(`p`, { role: `status`, children: c(e.notice) }),
          e.action === `billing_unavailable` &&
            (0, O.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: s(`offerPage.billingUnavailable`),
            }),
          e.action === `claim` &&
            (0, O.jsx)(o, {
              disabled: n,
              className: `w-full`,
              onClick: r,
              children: n
                ? s(`offerPage.preparing`)
                : b.includes(e.offer.kind)
                  ? s(`offerPage.continueWithStripe`)
                  : s(`offerPage.claim`),
            }),
          e.action === `sign_in` &&
            (0, O.jsx)(o, {
              asChild: !0,
              className: `w-full`,
              children: (0, O.jsx)(a, {
                to: C(t),
                children: s(`offerPage.signIn`),
              }),
            }),
        ],
      });
  }
}
function N(e) {
  return e.can_create && e.coding_access
    ? `offerPage.coinsGrantCreatorCoding`
    : e.can_create
      ? `offerPage.coinsGrantCreator`
      : e.coding_access
        ? `offerPage.coinsGrantCoding`
        : `offerPage.coinsGrant`;
}
