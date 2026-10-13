import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { i as o, l as s, r as c, t as l } from "./AuthService-CQeU_0bQ.js";
import { t as u } from "./button-Ap3ysi5G.js";
import { t as d } from "./check-DVcwwxJi.js";
import {
  a as f,
  c as p,
  n as ee,
  r as m,
  s as h,
  t as g,
} from "./switch-DR7KWk3q.js";
import { t as _ } from "./circle-check-BVtsIJ9N.js";
import { c as v, n as te, t as y, u as b } from "./CoinDisplay-iWoR0BMU.js";
import { t as ne } from "./external-link-CNayFVCy.js";
import { t as re } from "./key-round-C8uAJKQY.js";
import { t as x } from "./loader-circle-DBFTFT2k.js";
import { t as S } from "./mail-D0O-liE7.js";
import { t as C } from "./party-popper-Bs8HHRWI.js";
import { t as w } from "./rotate-ccw-FK7vjwP0.js";
import { t as T } from "./shield-check-CAJ-dFVb.js";
import { t as ie } from "./triangle-alert-D-SEZi4r.js";
import { t as ae } from "./upload-DLWSp9LN.js";
import { t as E } from "./user-DD-5DUVW.js";
import { t as oe } from "./zap-OaMDwI_w.js";
import { n as D, t as O } from "./apiConfig-cGsbt6Be.js";
import { t as se } from "./useTranslation-BdauNPOZ.js";
import { t as ce } from "./i18n-Ddyvvowz.js";
import { t as k } from "./avatarUtils-CBd99uWq.js";
import { n as le, r as ue, t as de } from "./avatar-ixs41cq5.js";
import {
  $ as fe,
  F as pe,
  H as A,
  I as j,
  M as me,
  V as M,
  W as N,
  Z as he,
  g as ge,
  l as _e,
  mt as ve,
} from "./index-BKDksszn.js";
import { t as ye } from "./textarea-D_1TMYK2.js";
import { a as P, n as F, o as I, r as L, t as R } from "./card-DLIi0Qe8.js";
import {
  a as be,
  c as xe,
  i as Se,
  l as Ce,
  n as we,
  o as Te,
  r as Ee,
  s as De,
  t as Oe,
} from "./alert-dialog-BwlBTuHq.js";
import { n as z, o as ke, r as B, t as Ae } from "./dialog-B1UXjCvB.js";
import { i as V, n as H, r as je, t as Me } from "./tabs-Gm5XRVor.js";
import { t as U } from "./badge-B4-vVyqh.js";
var W = e(t());
async function G(e) {
  try {
    let t = await e.json();
    return t && typeof t == `object` ? t : {};
  } catch {
    return {};
  }
}
function K(e) {
  return {
    success: !1,
    error: e instanceof Error ? e.message : `Could not reach the server`,
  };
}
async function Ne() {
  try {
    let e = await D(),
      t = await fetch(`${O.API_BASE_URL}/api/billing/plans`, {
        method: `GET`,
        headers: e,
      }),
      n = await G(t);
    return t.ok
      ? { success: !0, plans: [], packs: [], ...n }
      : {
          success: !1,
          plans: [],
          packs: [],
          error: n.error ?? `Server error (${t.status})`,
          error_code: n.error_code,
        };
  } catch (e) {
    return (
      console.error(`Error loading plans:`, e),
      { ...K(e), plans: [], packs: [] }
    );
  }
}
async function q() {
  let e = {
    tier: `free`,
    status: null,
    current_period_end: null,
    cancel_at_period_end: !1,
    has_billing_account: !1,
    welcome: null,
  };
  try {
    let t = await D(),
      n = await fetch(`${O.API_BASE_URL}/api/billing/status`, {
        method: `GET`,
        headers: t,
      }),
      r = await G(n);
    return n.ok
      ? { ...e, ...r }
      : {
          ...e,
          success: !1,
          error: r.error ?? `Server error (${n.status})`,
          error_code: r.error_code,
        };
  } catch (t) {
    return (
      console.error(`Error loading billing status:`, t),
      { ...e, ...K(t) }
    );
  }
}
async function Pe(e) {
  return J(`/api/billing/checkout`, { tier: e });
}
async function Fe(e) {
  return J(`/api/billing/checkout-pack`, { pack: e });
}
async function Ie(e) {
  try {
    let t = await D(),
      n = await fetch(`${O.API_BASE_URL}/api/billing/welcome/seen`, {
        method: `POST`,
        headers: t,
        body: JSON.stringify({
          kind: e.kind,
          id: e.id,
          ...(e.reversal ? { reversed_at: e.reversal.reversed_at } : {}),
        }),
      }),
      r = await G(n);
    return n.ok
      ? { success: !0, status: r.status }
      : {
          success: !1,
          error: r.error ?? `Server error (${n.status})`,
          error_code: r.error_code,
        };
  } catch (e) {
    return (console.error(`Error marking a purchase welcome seen:`, e), K(e));
  }
}
async function Le() {
  return J(`/api/billing/portal`);
}
async function J(e, t) {
  try {
    let n = await D(),
      r = await fetch(`${O.API_BASE_URL}${e}`, {
        method: `POST`,
        headers: n,
        ...(t ? { body: JSON.stringify(t) } : {}),
      }),
      i = await G(r);
    return !r.ok || !i.url
      ? {
          success: !1,
          error: i.error ?? `Server error (${r.status})`,
          error_code: i.error_code,
        }
      : { success: !0, url: i.url };
  } catch (t) {
    return (console.error(`Error calling ${e}:`, t), K(t));
  }
}
function Re(e) {
  let t = e.currency?.toLowerCase() === `usd` ? `$` : ``,
    n = e.price_usd_cents / 100,
    r = Number.isInteger(n) ? `${n}` : n.toFixed(2);
  return t ? `${t}${r}` : `${r} ${e.currency.toUpperCase()}`;
}
function Y(e) {
  let t = `${e.kind}:${e.id}`;
  return e.reversal ? `${t}:reversed:${e.reversal.reversed_at}` : t;
}
function ze(e) {
  let t = e.reversal;
  if (!t) return null;
  let n = e.kind === `subscription`;
  return {
    lead:
      t.kind === `dispute`
        ? n
          ? `planDisputed`
          : `packDisputed`
        : t.partial
          ? n
            ? `planPartlyRefunded`
            : `packPartlyRefunded`
          : n
            ? `planRefunded`
            : `packRefunded`,
    coins:
      t.coins_owed <= 0
        ? `unchanged`
        : t.coins_removed <= 0
          ? `allSpent`
          : t.coins_removed < t.coins_owed
            ? `removedSomeSpent`
            : `removed`,
  };
}
function Be(e, t) {
  let n = e?.welcome ?? null;
  return n ? (t.has(Y(n)) ? null : n) : null;
}
function X(e, t) {
  if (e.reversal) return !1;
  let n = Date.parse(e.granted_at);
  return Number.isFinite(n) && n >= t - 6e5;
}
function Z(e, t, n, r) {
  return e.success && e.welcome && r !== null && X(e.welcome, r)
    ? !1
    : t + 1 < n;
}
function Ve(e, t, n) {
  return e === null || t ? !1 : !(n.success && n.welcome && X(n.welcome, e));
}
function He() {
  let e = 0,
    t = 0;
  return { begin: () => ++e, accept: (e) => (e <= t ? !1 : ((t = e), !0)) };
}
var Q = n();
function Ue(e, t) {
  switch (e) {
    case `max`:
      return t(`billing.maxName`, `Max`);
    case `pro`:
      return t(`billing.proName`, `Pro`);
    case `starter`:
      return t(`billing.starterName`, `Starter`);
  }
}
function We(e, t, n) {
  switch (e) {
    case `planRefunded`:
      return n(
        `billing.refundPlan`,
        `Your {{plan}} plan payment from {{date}} was refunded.`,
        t,
      );
    case `planPartlyRefunded`:
      return n(
        `billing.refundPlanPartial`,
        `Part of your {{plan}} plan payment from {{date}} was refunded.`,
        t,
      );
    case `planDisputed`:
      return n(
        `billing.disputePlan`,
        `The {{plan}} plan payment from {{date}} was disputed with your bank.`,
        t,
      );
    case `packRefunded`:
      return n(
        `billing.refundPack`,
        `Your {{amount}} Sandcoin pack from {{date}} was refunded.`,
        t,
      );
    case `packPartlyRefunded`:
      return n(
        `billing.refundPackPartial`,
        `Part of your {{amount}} Sandcoin pack from {{date}} was refunded.`,
        t,
      );
    case `packDisputed`:
      return n(
        `billing.disputePack`,
        `The payment for your {{amount}} Sandcoin pack from {{date}} was disputed with your bank.`,
        t,
      );
  }
}
function Ge(e, t, n) {
  let r = { count: t, amount: v.formatCoins(t) };
  switch (e) {
    case `removed`:
      return n(
        `billing.refundCoinsRemoved`,
        `{{amount}} Sandcoins were removed from your wallet.`,
        r,
      );
    case `removedSomeSpent`:
      return n(
        `billing.refundCoinsRemovedSomeSpent`,
        `{{amount}} Sandcoins were removed from your wallet. The rest of what this purchase owed back had already been spent.`,
        r,
      );
    case `allSpent`:
      return n(
        `billing.refundCoinsAllSpent`,
        `The Sandcoins from this purchase had already been spent, so your balance did not change.`,
      );
    case `unchanged`:
      return n(
        `billing.refundCoinsUnchanged`,
        `Your Sandcoin balance did not change.`,
      );
  }
}
function Ke({ welcome: e, onClose: t, onCreate: n }) {
  let { t: r } = se(),
    [i, a] = (0, W.useState)(e);
  e !== null && e !== i && a(e);
  let o = e ?? i,
    s = o ? v.formatCoins(o.coins) : ``,
    c = o?.kind === `subscription` ? Ue(o.tier, r) : ``,
    l = o ? ze(o) : null,
    d = o?.reversal ? o.reversal.coins_removed : 0,
    f = o
      ? new Date(o.granted_at).toLocaleDateString(void 0, {
          year: `numeric`,
          month: `long`,
          day: `numeric`,
        })
      : ``;
  return (0, Q.jsx)(Ae, {
    open: e !== null,
    onOpenChange: (e) => !e && t(),
    children: (0, Q.jsxs)(z, {
      onInteractOutside: (e) => {
        o?.reversal && e.preventDefault();
      },
      className: `max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] gap-0 overflow-y-auto rounded-lg p-0 sm:max-w-md [&>button:last-child]:text-white`,
      children: [
        (0, Q.jsx)(`div`, {
          className: `relative flex h-24 shrink-0 items-center justify-center bg-[radial-gradient(ellipse_at_center,#1a0a3a_0%,#030106_70%)] sm:h-36`,
          children: (0, Q.jsx)(`img`, {
            src: `/Sandscape_Logo_Degrade_RGB.png`,
            alt: ``,
            className: `h-10 w-auto select-none sm:h-14`,
            draggable: !1,
          }),
        }),
        l && o?.reversal
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-center gap-4 px-6 pb-6 pt-6 text-center`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground`,
                  children: (0, Q.jsx)(w, { className: `h-6 w-6` }),
                }),
                (0, Q.jsx)(ke, {
                  className: `text-xl font-semibold tracking-tight sm:text-2xl`,
                  children:
                    o.reversal.kind === `dispute`
                      ? r(`billing.disputeTitle`, `Payment reversed`)
                      : o.reversal.partial
                        ? r(
                            `billing.refundPartialTitle`,
                            `Purchase partly refunded`,
                          )
                        : r(`billing.refundTitle`, `Purchase refunded`),
                }),
                (0, Q.jsx)(B, {
                  asChild: !0,
                  children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-4`,
                    children: [
                      d > 0 &&
                        (0, Q.jsxs)(`span`, {
                          className: `inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-gradient-to-r from-red-500/15 to-orange-500/15 px-4 py-1.5 text-lg font-semibold tabular-nums text-red-800 dark:border-red-500/40 dark:from-red-500/10 dark:to-orange-500/10 dark:text-red-300`,
                          children: [
                            (0, Q.jsx)(b, {
                              "aria-hidden": `true`,
                              className: `h-5 w-5 text-red-700 dark:text-red-400`,
                            }),
                            r(`billing.refundAmount`, `−{{amount}} Sandcoins`, {
                              count: d,
                              amount: v.formatCoins(d),
                            }),
                          ],
                        }),
                      (0, Q.jsxs)(`span`, {
                        className: `text-base text-muted-foreground`,
                        children: [
                          We(l.lead, { plan: c, date: f, amount: s }, r),
                          ` `,
                          Ge(l.coins, d, r),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `mt-2 flex w-full flex-col gap-2`,
                  children: (0, Q.jsx)(u, {
                    className: `w-full`,
                    size: `lg`,
                    onClick: t,
                    children: r(`billing.refundDone`, `Got it`),
                  }),
                }),
              ],
            })
          : (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-center gap-4 px-6 pb-6 pt-6 text-center`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary`,
                  children:
                    o?.kind === `pack`
                      ? (0, Q.jsx)(b, { className: `h-6 w-6` })
                      : (0, Q.jsx)(C, { className: `h-6 w-6` }),
                }),
                (0, Q.jsx)(ke, {
                  className: `text-xl font-semibold tracking-tight sm:text-2xl`,
                  children:
                    o?.kind === `pack`
                      ? r(`billing.welcomePackTitle`, `Your Sandcoins are in`)
                      : r(
                          `billing.welcomeTitle`,
                          `Welcome to Sandscape {{plan}}`,
                          { plan: c },
                        ),
                }),
                (0, Q.jsx)(B, {
                  asChild: !0,
                  children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-4`,
                    children: [
                      (0, Q.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2 rounded-full border border-amber-600/35 bg-gradient-to-r from-amber-500/15 to-yellow-500/15 px-4 py-1.5 text-lg font-semibold tabular-nums text-amber-800 dark:border-amber-500/20 dark:from-amber-500/10 dark:to-yellow-500/10 dark:text-amber-300`,
                        children: [
                          (0, Q.jsx)(b, {
                            "aria-hidden": `true`,
                            className: `h-5 w-5 text-amber-700 dark:text-amber-400`,
                          }),
                          r(`billing.welcomeCoins`, `+{{amount}} Sandcoins`, {
                            count: o?.coins ?? 0,
                            amount: s,
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `text-base text-muted-foreground`,
                        children:
                          o?.kind === `pack`
                            ? r(
                                `billing.welcomePackBody`,
                                `Thanks for your purchase. Purchased Sandcoins never expire, so spend them whenever inspiration strikes.`,
                              )
                            : r(
                                `billing.welcomeBody`,
                                `Your {{plan}} plan is live. Your Sandcoins are already in your wallet, and your plan tops it back up every billing period.`,
                                { plan: c },
                              ),
                      }),
                    ],
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `mt-2 flex w-full flex-col gap-2`,
                  children: [
                    (0, Q.jsx)(u, {
                      className: `w-full`,
                      size: `lg`,
                      onClick: n,
                      children: r(`billing.welcomeCreate`, `Start creating`),
                    }),
                    (0, Q.jsx)(u, {
                      className: `w-full`,
                      variant: `ghost`,
                      onClick: t,
                      children: r(`billing.welcomeLater`, `Maybe later`),
                    }),
                  ],
                }),
              ],
            }),
      ],
    }),
  });
}
var qe = 8,
  $ = 2e3;
function Je() {
  let { t: e } = se(),
    { toast: t } = a(),
    [n, o] = i(),
    s = r(),
    [c, l] = (0, W.useState)(`loading`),
    [d, f] = (0, W.useState)(``),
    [p, ee] = (0, W.useState)([]),
    [m, h] = (0, W.useState)([]),
    [g, _] = (0, W.useState)(null),
    [v, y] = (0, W.useState)(null),
    [ne, re] = (0, W.useState)(() => new Set()),
    S = (0, W.useRef)(null),
    C = (0, W.useRef)(0),
    w = (0, W.useRef)(!1),
    T = (0, W.useRef)(null),
    ae = (0, W.useRef)(!1),
    E = (0, W.useRef)(null),
    D = (0, W.useRef)(He()),
    O = (0, W.useCallback)(
      (e, t) =>
        !t.success || !D.current.accept(e)
          ? !1
          : (T.current !== null &&
              t.welcome &&
              X(t.welcome, T.current) &&
              (ae.current = !0),
            _(t),
            !0),
      [],
    ),
    ce = (0, W.useCallback)(async () => {
      let t = D.current.begin(),
        [n, r] = await Promise.all([Ne(), q()]);
      if (
        n.error_code === `BILLING_UNCONFIGURED` ||
        r.error_code === `BILLING_UNCONFIGURED`
      ) {
        l(`unconfigured`);
        return;
      }
      if (!n.success) {
        (f(n.error || e(`billing.loadFailed`, `Could not load plans.`)),
          l(`error`));
        return;
      }
      if (!r.success) {
        (f(
          r.error ||
            e(`billing.statusFailed`, `Could not load your subscription.`),
        ),
          l(`error`));
        return;
      }
      (ee(n.plans), h(n.packs), O(t, r), l(`ready`));
    }, [e, O]),
    k = (0, W.useCallback)(() => {
      ((C.current += 1),
        S.current && clearTimeout(S.current),
        (S.current = null));
    }, []);
  ((0, W.useEffect)(
    () => (
      (w.current = !0),
      () => {
        ((w.current = !1), k());
      }
    ),
    [k],
  ),
    (0, W.useEffect)(() => {
      ce();
    }, [ce]));
  let le = (0, W.useCallback)(() => {
      k();
      let e = C.current,
        t = (n) => {
          S.current = setTimeout(async () => {
            let r = D.current.begin(),
              i = await q();
            e === C.current &&
              (O(r, i), te(), Z(i, n, qe, T.current) && t(n + 1));
          }, $);
        };
      t(0);
    }, [k, O]),
    ue = (0, W.useCallback)(
      async (e) => {
        let t = Y(e);
        re((e) => new Set(e).add(t));
        let n = await Ie(e);
        if (!w.current) return;
        if (!n.success) {
          console.warn(
            `Purchase welcome not recorded as seen:`,
            n.error_code ?? n.error,
          );
          return;
        }
        let r = D.current.begin(),
          i = await q();
        w.current && (O(r, i), Ve(T.current, ae.current, i) && le());
      },
      [le, O],
    );
  ((0, W.useEffect)(() => {
    let e = (e) => {
      e.persisted && y(null);
    };
    return (
      window.addEventListener(`pageshow`, e),
      () => window.removeEventListener(`pageshow`, e)
    );
  }, []),
    (0, W.useEffect)(() => {
      if (n.get(`checkout`) !== `success`) return;
      ((T.current = Date.now()),
        (E.current = t({
          title: e(`billing.thanksTitle`, `Payment received`),
          description: e(
            `billing.thanksBody`,
            `Your Sandcoins are on the way — this page will update in a moment.`,
          ),
        })),
        te());
      let r = new URLSearchParams(n);
      (r.delete(`checkout`), o(r, { replace: !0 }), le());
    }, [n.get(`checkout`)]));
  let de = async (n) => {
      y(n);
      let r = await Pe(n);
      if (r.success && r.url) {
        window.location.assign(r.url);
        return;
      }
      if ((y(null), r.error_code === `SUBSCRIPTION_ALREADY_ACTIVE`)) {
        (t({
          title: e(`billing.alreadySubscribedTitle`, `You already have a plan`),
          description: e(
            `billing.alreadySubscribedBody`,
            `Opening your billing portal so you can switch or cancel.`,
          ),
        }),
          A(`switch:${n}`));
        return;
      }
      t({
        title: e(`billing.checkoutFailedTitle`, `Could not start checkout`),
        description: r.error || e(`billing.tryAgain`, `Please try again.`),
        variant: `destructive`,
      });
    },
    pe = async (n) => {
      y(n);
      let r = await Fe(n);
      if (r.success && r.url) {
        window.location.assign(r.url);
        return;
      }
      (y(null),
        t({
          title: e(`billing.checkoutFailedTitle`, `Could not start checkout`),
          description: r.error || e(`billing.tryAgain`, `Please try again.`),
          variant: `destructive`,
        }));
    },
    A = async (n = `portal`) => {
      y(n);
      let r = await Le();
      if (r.success && r.url) {
        window.location.assign(r.url);
        return;
      }
      (y(null),
        t({
          title: e(`billing.portalFailedTitle`, `Could not open billing`),
          description: r.error || e(`billing.tryAgain`, `Please try again.`),
          variant: `destructive`,
        }));
    },
    j = Be(g, ne);
  (0, W.useEffect)(() => {
    !j ||
      !E.current ||
      T.current === null ||
      (X(j, T.current) && (E.current.dismiss(), (E.current = null)));
  }, [j]);
  let me = (0, Q.jsx)(Ke, {
    welcome: j,
    onClose: () => j && void ue(j),
    onCreate: () => {
      (j && ue(j), s(`/create`));
    },
  });
  if (c === `loading`)
    return (0, Q.jsx)(R, {
      children: (0, Q.jsxs)(F, {
        className: `flex items-center gap-2 py-10 text-muted-foreground`,
        children: [
          (0, Q.jsx)(x, { className: `h-4 w-4 animate-spin` }),
          e(`billing.loading`, `Loading your plan…`),
        ],
      }),
    });
  if (c === `unconfigured`)
    return (0, Q.jsx)(R, {
      children: (0, Q.jsxs)(P, {
        children: [
          (0, Q.jsx)(I, { children: e(`billing.title`, `Subscription`) }),
          (0, Q.jsx)(L, {
            children: e(
              `billing.unconfigured`,
              `Subscriptions aren't available yet. Sandcoins are granted by invite for now.`,
            ),
          }),
        ],
      }),
    });
  if (c === `error`)
    return (0, Q.jsxs)(Q.Fragment, {
      children: [
        me,
        (0, Q.jsxs)(R, {
          children: [
            (0, Q.jsxs)(P, {
              children: [
                (0, Q.jsx)(I, { children: e(`billing.title`, `Subscription`) }),
                (0, Q.jsx)(L, { className: `text-destructive`, children: d }),
              ],
            }),
            (0, Q.jsx)(F, {
              children: (0, Q.jsx)(u, {
                variant: `outline`,
                onClick: () => {
                  (l(`loading`), ce());
                },
                children: e(`billing.retry`, `Try again`),
              }),
            }),
          ],
        }),
      ],
    });
  let M = g?.tier ?? `free`,
    N = (e) => p.find((t) => t.tier === e);
  return (0, Q.jsxs)(`div`, {
    className: `space-y-8`,
    children: [
      me,
      (0, Q.jsxs)(`section`, {
        className: `space-y-3`,
        children: [
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: e(`billing.title`, `Subscription`),
              }),
              (0, Q.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: e(
                  `billing.subtitle`,
                  `Manage your plan and top up Sandcoins as you need them.`,
                ),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-600 dark:text-amber-400`,
            children: [
              (0, Q.jsx)(ie, { className: `mt-0.5 h-4 w-4 shrink-0` }),
              (0, Q.jsx)(`span`, {
                children: e(
                  `billing.alphaNotice`,
                  `During the alpha period, pricing is subject to change.`,
                ),
              }),
            ],
          }),
          g?.welcome_error &&
            (0, Q.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: e(
                `billing.noticeUnavailable`,
                `We couldn't check for recent purchase or refund notices. Reload this page to try again.`,
              ),
            }),
          (0, Q.jsx)(Xe, { status: g, busy: v, onManage: () => A(), t: e }),
        ],
      }),
      (0, Q.jsxs)(`section`, {
        className: `space-y-4`,
        children: [
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: e(`billing.plansTitle`, `Subscription plans`),
              }),
              (0, Q.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: e(
                  `billing.plansDescription`,
                  `Every plan grants a monthly Sandcoin stipend. Switch or cancel any time.`,
                ),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4`,
            children: [
              (0, Q.jsx)(Qe, {
                name: e(`billing.freeName`, `Free`),
                tagline: e(
                  `billing.freeTagline`,
                  `Play and try creation, no card needed.`,
                ),
                price: { amount: e(`billing.freePrice`, `$0`) },
                icon: (0, Q.jsx)(b, { className: `h-5 w-5` }),
                benefits: [
                  { text: e(`billing.freePlay`, `Play Games (Ads)`), live: !0 },
                  {
                    text: e(`billing.freeCreate`, `Limited Creation`),
                    live: !0,
                  },
                  { text: e(`billing.freeTips`, `Earn Tips`), live: !1 },
                ],
                isCurrent: M === `free`,
                onDowngrade: M === `free` ? void 0 : () => A(`downgrade`),
                busy: v,
                t: e,
              }),
              (0, Q.jsx)(Qe, {
                name: e(`billing.starterName`, `Starter`),
                tagline: e(
                  `billing.starterTagline`,
                  `Best for hobbyists getting a first game off the ground.`,
                ),
                price: Ye(N(`starter`), e),
                icon: (0, Q.jsx)(he, { className: `h-5 w-5` }),
                coins: N(`starter`)?.coins_per_period,
                benefits: [
                  { text: e(`billing.adFree`, `Ad-Free`), live: !1 },
                  {
                    text: e(`billing.starterCreate`, `More Creation`),
                    live: !0,
                  },
                  {
                    text: e(`billing.monthlyCoins`, `Monthly Sandcoins`),
                    live: !0,
                  },
                  {
                    text: e(`billing.marketplace`, `Sell on Marketplace`),
                    live: !1,
                  },
                ],
                isCurrent: M === `starter`,
                tier: `starter`,
                onSubscribe: () => de(`starter`),
                onSwitch: () => A(`switch:starter`),
                hasOtherPlan: M !== `free` && M !== `starter`,
                busy: v,
                disabled: !N(`starter`),
                t: e,
              }),
              (0, Q.jsx)(Qe, {
                name: e(`billing.proName`, `Pro`),
                tagline: e(
                  `billing.proTagline`,
                  `Best for individual creators making games regularly.`,
                ),
                price: Ye(N(`pro`), e),
                icon: (0, Q.jsx)(oe, { className: `h-5 w-5` }),
                coins: N(`pro`)?.coins_per_period,
                highlight: !0,
                benefits: [
                  { text: e(`billing.adFree`, `Ad-Free`), live: !1 },
                  {
                    text: e(`billing.proCreate`, `Generous Creation`),
                    live: !0,
                  },
                  {
                    text: e(`billing.proCoins`, `Larger Sandcoin Stipend`),
                    live: !0,
                  },
                  {
                    text: e(`billing.revShare`, `Best Revenue Share`),
                    live: !1,
                  },
                  {
                    text: e(`billing.analytics`, `Analytics & Beta`),
                    live: !1,
                  },
                ],
                isCurrent: M === `pro`,
                tier: `pro`,
                onSubscribe: () => de(`pro`),
                onSwitch: () => A(`switch:pro`),
                hasOtherPlan: M !== `free` && M !== `pro`,
                busy: v,
                disabled: !N(`pro`),
                t: e,
              }),
              (0, Q.jsx)(Qe, {
                name: e(`billing.maxName`, `Max`),
                tagline: e(
                  `billing.maxTagline`,
                  `Best for high-volume, full-time production.`,
                ),
                price: Ye(N(`max`), e),
                icon: (0, Q.jsx)(fe, { className: `h-5 w-5` }),
                coins: N(`max`)?.coins_per_period,
                benefits: [
                  { text: e(`billing.adFree`, `Ad-Free`), live: !1 },
                  {
                    text: e(`billing.maxCreate`, `Maximum Creation`),
                    live: !0,
                  },
                  {
                    text: e(`billing.maxCoins`, `Largest Sandcoin Stipend`),
                    live: !0,
                  },
                  {
                    text: e(`billing.revShare`, `Best Revenue Share`),
                    live: !1,
                  },
                  {
                    text: e(`billing.analytics`, `Analytics & Beta`),
                    live: !1,
                  },
                  { text: e(`billing.priority`, `Priority Support`), live: !1 },
                ],
                isCurrent: M === `max`,
                tier: `max`,
                onSubscribe: () => de(`max`),
                onSwitch: () => A(`switch:max`),
                hasOtherPlan: M !== `free` && M !== `max`,
                busy: v,
                disabled: !N(`max`),
                t: e,
              }),
            ],
          }),
        ],
      }),
      m.length > 0 &&
        (0, Q.jsxs)(R, {
          children: [
            (0, Q.jsxs)(P, {
              children: [
                (0, Q.jsxs)(I, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, Q.jsx)(b, { className: `h-5 w-5` }),
                    e(`billing.packsTitle`, `Sandcoin packs`),
                  ],
                }),
                (0, Q.jsx)(L, {
                  children: e(
                    `billing.packsDescription`,
                    `Top up any time, on any plan. Purchased Sandcoins never expire.`,
                  ),
                }),
              ],
            }),
            (0, Q.jsx)(F, {
              className: `grid gap-4 sm:grid-cols-3`,
              children: m.map((t) =>
                (0, Q.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col gap-3 rounded-lg border p-4`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `text-2xl font-semibold`,
                            children: t.coins.toLocaleString(),
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `text-sm text-muted-foreground`,
                            children: e(`billing.coins`, `Sandcoins`),
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(u, {
                        variant: `outline`,
                        onClick: () => pe(t.pack),
                        disabled: v !== null,
                        children: [
                          v === t.pack &&
                            (0, Q.jsx)(x, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`billing.buyFor`, `Buy for`),
                          ` `,
                          Re(t),
                        ],
                      }),
                    ],
                  },
                  t.pack,
                ),
              ),
            }),
          ],
        }),
      (0, Q.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: e(
          `billing.coinsFootnote`,
          `Your plan's monthly Sandcoins reset at the start of each billing period — they do not roll over. Purchased and gifted Sandcoins never expire, and your plan's Sandcoins are always spent first. Items marked “Coming soon” aren't active yet.`,
        ),
      }),
    ],
  });
}
function Ye(e, t) {
  return e
    ? {
        amount: Re(e),
        per: `/${e.interval === `year` ? t(`billing.perYear`, `yr`) : t(`billing.perMonth`, `mo`)}`,
      }
    : { amount: t(`billing.priceUnavailable`, `—`) };
}
function Xe({ status: e, busy: t, onManage: n, t: r }) {
  let i = e?.tier ?? `free`,
    a =
      i === `max`
        ? r(`billing.maxName`, `Max`)
        : i === `pro`
          ? r(`billing.proName`, `Pro`)
          : i === `starter`
            ? r(`billing.starterName`, `Starter`)
            : r(`billing.freeName`, `Free`),
    o = e?.current_period_end
      ? new Date(e.current_period_end).toLocaleDateString(void 0, {
          year: `numeric`,
          month: `long`,
          day: `numeric`,
        })
      : null;
  return (0, Q.jsx)(R, {
    children: (0, Q.jsxs)(F, {
      className: `flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-0`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `md:w-56 md:shrink-0 md:pr-6`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
              children: r(`billing.tier`, `Tier`),
            }),
            (0, Q.jsx)(`p`, {
              className: `mt-1 text-2xl font-semibold text-primary`,
              children: a,
            }),
            o &&
              i !== `free` &&
              (0, Q.jsx)(`p`, {
                className: `mt-1 text-xs text-muted-foreground`,
                children: e?.cancel_at_period_end
                  ? `${r(`billing.cancelsOn`, `cancels on`)} ${o}`
                  : `${r(`billing.renewsOn`, `renews on`)} ${o}`,
              }),
            e?.status === `past_due` &&
              (0, Q.jsx)(`p`, {
                className: `mt-1 text-xs text-destructive`,
                children: r(
                  `billing.pastDue`,
                  `your last payment failed; update your card to keep your plan`,
                ),
              }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `md:flex-1 md:border-l md:pl-6`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
              children: r(`billing.balance`, `Sandcoin balance`),
            }),
            (0, Q.jsx)(`div`, {
              className: `mt-1`,
              children: (0, Q.jsx)(y, {}),
            }),
            (0, Q.jsx)(Ze, { t: r }),
          ],
        }),
        e?.has_billing_account &&
          (0, Q.jsx)(`div`, {
            className: `md:shrink-0 md:pl-6`,
            children: (0, Q.jsxs)(u, {
              variant: `outline`,
              onClick: n,
              disabled: t !== null,
              children: [
                t === `portal` &&
                  (0, Q.jsx)(x, { className: `mr-2 h-4 w-4 animate-spin` }),
                r(`billing.managePlan`, `Manage plan`),
                (0, Q.jsx)(ne, { className: `ml-2 h-3.5 w-3.5` }),
              ],
            }),
          }),
      ],
    }),
  });
}
function Ze({ t: e }) {
  let [t, n] = (0, W.useState)(null);
  (0, W.useEffect)(() => {
    let e = !1,
      t = 0,
      r = () => {
        let r = ++t;
        v.getBalance().then((i) => {
          !e && r === t && i.success && n(i);
        });
      };
    return (
      r(),
      window.addEventListener(`coin-balance-refresh`, r),
      () => {
        ((e = !0), window.removeEventListener(`coin-balance-refresh`, r));
      }
    );
  }, []);
  let r = t?.subscription_balance ?? 0;
  if (!t || r <= 0) return null;
  let i = t.balance - r,
    a = t.subscription_expires_at
      ? new Date(t.subscription_expires_at).toLocaleDateString(void 0, {
          year: `numeric`,
          month: `long`,
          day: `numeric`,
        })
      : null;
  return (0, Q.jsxs)(`p`, {
    className: `mt-2 text-xs text-muted-foreground`,
    children: [
      r.toLocaleString(),
      ` `,
      e(`billing.planCoins`, `plan Sandcoins`),
      a && ` (${e(`billing.resetOn`, `reset on`)} ${a})`,
      ` · `,
      i.toLocaleString(),
      ` `,
      e(
        `billing.permanentCoins`,
        `purchased & gifted Sandcoins that never expire`,
      ),
    ],
  });
}
function Qe({
  name: e,
  tagline: t,
  price: n,
  icon: r,
  coins: i,
  benefits: a,
  isCurrent: o,
  highlight: c,
  hasOtherPlan: l,
  tier: f,
  onSubscribe: p,
  onSwitch: ee,
  onDowngrade: m,
  busy: h,
  disabled: g,
  t: _,
}) {
  return (0, Q.jsxs)(R, {
    className: s(
      `relative flex h-full flex-col`,
      c && `border-primary shadow-lg shadow-primary/10`,
    ),
    children: [
      c &&
        (0, Q.jsx)(U, {
          className: `absolute -top-2.5 right-4 bg-primary text-primary-foreground hover:bg-primary`,
          children: _(`billing.mostPopular`, `Most popular`),
        }),
      (0, Q.jsxs)(P, {
        className: `pb-4`,
        children: [
          (0, Q.jsxs)(I, {
            className: `flex items-center justify-between gap-2 text-base`,
            children: [
              (0, Q.jsxs)(`span`, {
                className: `flex items-center gap-2`,
                children: [r, e],
              }),
              o &&
                (0, Q.jsx)(U, {
                  variant: `secondary`,
                  children: _(`billing.current`, `Current`),
                }),
            ],
          }),
          t &&
            (0, Q.jsx)(L, { className: `min-h-[2.5rem] text-xs`, children: t }),
          (0, Q.jsxs)(`div`, {
            className: `pt-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-baseline gap-1`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `text-3xl font-semibold leading-none text-foreground`,
                    children: n.amount,
                  }),
                  n.per &&
                    (0, Q.jsx)(`span`, {
                      className: `text-sm text-muted-foreground`,
                      children: n.per,
                    }),
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `mt-1 min-h-[1.25rem] text-sm text-muted-foreground`,
                children:
                  i !== void 0 &&
                  `${i.toLocaleString()} ${_(`billing.coinsPerMonth`, `Sandcoins / month`)}`,
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsxs)(F, {
        className: `flex flex-1 flex-col pt-0`,
        children: [
          (0, Q.jsx)(`p`, {
            className: `mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground`,
            children: _(`billing.includes`, `Includes`),
          }),
          (0, Q.jsx)(`ul`, {
            className: `flex-1 space-y-2 text-sm`,
            children: a.map((e) =>
              (0, Q.jsxs)(
                `li`,
                {
                  className: `flex items-start gap-2`,
                  children: [
                    (0, Q.jsx)(d, {
                      className: s(
                        `mt-0.5 h-4 w-4 shrink-0`,
                        e.live ? `text-primary` : `text-muted-foreground/50`,
                      ),
                    }),
                    (0, Q.jsxs)(`span`, {
                      className: e.live ? void 0 : `text-muted-foreground`,
                      children: [
                        e.text,
                        !e.live &&
                          (0, Q.jsx)(U, {
                            variant: `outline`,
                            className: `ml-2 text-[10px]`,
                            children: _(`billing.comingSoon`, `Coming soon`),
                          }),
                      ],
                    }),
                  ],
                },
                e.text,
              ),
            ),
          }),
          (0, Q.jsxs)(`div`, {
            className: `mt-auto pt-6`,
            children: [
              p &&
                !o &&
                (0, Q.jsxs)(u, {
                  size: `lg`,
                  className: `w-full font-semibold shadow-md shadow-primary/20`,
                  onClick: l ? ee : p,
                  disabled: g || h !== null,
                  children: [
                    f !== void 0 &&
                      (h === f || h === `switch:${f}`) &&
                      (0, Q.jsx)(x, { className: `mr-2 h-4 w-4 animate-spin` }),
                    l
                      ? _(`billing.switchPlan`, `Switch plan`)
                      : _(`billing.subscribe`, `Subscribe`),
                  ],
                }),
              o &&
                (0, Q.jsx)(u, {
                  size: `lg`,
                  variant: `outline`,
                  className: `w-full`,
                  disabled: !0,
                  children: _(`billing.currentPlan`, `Current plan`),
                }),
              !o &&
                !p &&
                m &&
                (0, Q.jsxs)(u, {
                  size: `lg`,
                  variant: `outline`,
                  className: `w-full`,
                  onClick: m,
                  disabled: h !== null,
                  children: [
                    h === `downgrade` &&
                      (0, Q.jsx)(x, { className: `mr-2 h-4 w-4 animate-spin` }),
                    _(`billing.cancelPlan`, `Cancel plan`),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var $e = [
  {
    key: `new_follower`,
    labelKey: `settings.notifNewFollowersLabel`,
    label: `New followers`,
    descriptionKey: `settings.notifNewFollowersDesc`,
    description: `When someone follows you`,
  },
  {
    key: `game_like`,
    labelKey: `settings.notifGameLikesLabel`,
    label: `Game likes`,
    descriptionKey: `settings.notifGameLikesDesc`,
    description: `When someone likes your game`,
  },
  {
    key: `game_comment`,
    labelKey: `settings.notifGameCommentsLabel`,
    label: `Game comments`,
    descriptionKey: `settings.notifGameCommentsDesc`,
    description: `When someone comments on your game`,
  },
  {
    key: `comment_reply`,
    labelKey: `settings.notifCommentRepliesLabel`,
    label: `Comment replies`,
    descriptionKey: `settings.notifCommentRepliesDesc`,
    description: `When someone replies to your comment`,
  },
  {
    key: `chat_mention`,
    labelKey: `settings.notifMentionsLabel`,
    label: `Mentions`,
    descriptionKey: `settings.notifMentionsDesc`,
    description: `When someone mentions you in chat`,
  },
];
function et() {
  let {
      user: e,
      updatePassword: t,
      updateEmail: n,
      deleteAccount: s,
      getActiveSignInMethods: d,
      refreshAccountState: v,
    } = N(),
    { theme: te, setTheme: y } = ve(),
    { t: b, i18n: ne } = se(),
    { toast: C } = a(),
    w = r(),
    [ie, oe] = i(),
    [D, O] = (0, W.useState)(!1),
    fe = ie.get(`tab`),
    he = [
      `profile`,
      `account`,
      `billing`,
      `notifications`,
      `appearance`,
    ].includes(fe ?? ``)
      ? fe
      : `profile`,
    [z, ke] = (0, W.useState)(!0),
    [B, Ae] = (0, W.useState)(``),
    [U, G] = (0, W.useState)(``),
    [K, Ne] = (0, W.useState)(null),
    [q, Pe] = (0, W.useState)(null),
    [Fe, Ie] = (0, W.useState)(void 0),
    [Le, J] = (0, W.useState)(!1),
    Re = (0, W.useRef)(null),
    [Y, ze] = (0, W.useState)(``),
    [Be, X] = (0, W.useState)(!1),
    [Z, Ve] = (0, W.useState)(``),
    [He, Ue] = (0, W.useState)(``),
    [We, Ge] = (0, W.useState)(!1),
    [Ke, qe] = (0, W.useState)(!0),
    [$, Ye] = (0, W.useState)({ emailOtp: !1, password: !1, providers: [] }),
    [Xe, Ze] = (0, W.useState)(me),
    [Qe, et] = (0, W.useState)(!0),
    [tt, nt] = (0, W.useState)(null);
  ((0, W.useEffect)(() => {
    if (!e) return;
    let t = !0;
    return (
      (async () => {
        ke(!0);
        try {
          let n = await l.getProfile(e.id);
          if (!t) return;
          (Ae(n.username ?? ``), G(n.bio ?? ``), Ne(n.avatar_url ?? null));
        } catch (e) {
          console.error(`Error loading profile:`, e);
        } finally {
          t && ke(!1);
        }
      })(),
      () => {
        t = !1;
      }
    );
  }, [e]),
    (0, W.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        qe(!0),
        d()
          .then((e) => {
            t && Ye(e);
          })
          .catch((e) => console.error(`Error loading sign-in methods:`, e))
          .finally(() => {
            t && qe(!1);
          }),
        () => {
          t = !1;
        }
      );
    }, [d, e]),
    (0, W.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        (async () => {
          et(!0);
          try {
            let e = await pe();
            t && Ze(e);
          } catch (e) {
            console.error(`Error loading notification preferences:`, e);
          } finally {
            t && et(!1);
          }
        })(),
        () => {
          t = !1;
        }
      );
    }, [e]));
  let rt = async (e, t) => {
      let n = Xe,
        r = { ...Xe, [e]: t };
      (Ze(r), nt(e));
      try {
        await j(r);
      } catch (e) {
        (console.error(`Error saving notification preferences:`, e),
          Ze(n),
          C({
            title: b(
              `settings.prefUpdateFailed`,
              `Failed to update preference`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        nt(null);
      }
    },
    it = (e) => {
      let t = e.target.files?.[0];
      t && (Pe(t), Ie(URL.createObjectURL(t)));
    },
    at = async () => {
      if (!e) return;
      let t = o(B);
      if (!c(t)) {
        C({
          title: b(
            `onboarding.usernameRules`,
            `Use 3-30 letters, numbers, underscores, or hyphens. This is public and must not be an email address.`,
          ),
          variant: `destructive`,
        });
        return;
      }
      J(!0);
      try {
        let n = K ?? void 0;
        q && (n = (await l.uploadAvatar(q, e.id)).path);
        let r = await l.updateProfile({ username: t, bio: U, avatar_url: n });
        (Ae(r.username ?? B),
          G(r.bio ?? U),
          Ne(r.avatar_url ?? n ?? null),
          Pe(null),
          Ie(void 0),
          await v(),
          C({ title: b(`settings.profileUpdated`, `Profile updated`) }));
      } catch (e) {
        (console.error(`Error updating profile:`, e),
          C({
            title: b(
              `settings.profileUpdateFailed`,
              `Failed to update profile`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        J(!1);
      }
    };
  (0, W.useEffect)(() => {
    ze(e?.email ?? ``);
  }, [e?.email]);
  let ot = async () => {
      let t = Y.trim();
      if (!t || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
        C({
          title: b(`settings.emailInvalid`, `Enter a valid email address`),
          variant: `destructive`,
        });
        return;
      }
      if (t === e?.email) {
        C({
          title: b(`settings.emailAlreadyYours`, `That's already your email`),
        });
        return;
      }
      X(!0);
      try {
        (await n(t, _e(`/settings`, `email_change`, `protected_route`)),
          C({
            title: b(
              `settings.emailConfirmationSent`,
              `Confirmation email sent`,
            ),
            description: b(
              `settings.emailConfirmationDesc`,
              `Check {{email}} to confirm the change.`,
              { email: t },
            ),
          }));
      } catch (t) {
        (console.error(`Error updating email:`, t),
          ze(e?.email ?? ``),
          C({
            title: b(`settings.emailUpdateFailed`, `Failed to update email`),
            description: t?.message,
            variant: `destructive`,
          }));
      } finally {
        X(!1);
      }
    },
    st = async () => {
      if (Z.length < 8) {
        C({
          title: b(
            `settings.passwordTooShort`,
            `Password must be at least 8 characters`,
          ),
          variant: `destructive`,
        });
        return;
      }
      if (Z !== He) {
        C({
          title: b(`settings.passwordsDontMatch`, `Passwords don't match`),
          variant: `destructive`,
        });
        return;
      }
      Ge(!0);
      try {
        (await t(Z),
          Ye((e) => ({ ...e, password: !0 })),
          Ve(``),
          Ue(``),
          C({ title: b(`settings.passwordUpdated`, `Password updated`) }));
      } catch (e) {
        (console.error(`Error updating password:`, e),
          C({
            title: b(
              `settings.passwordUpdateFailed`,
              `Failed to update password`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        Ge(!1);
      }
    },
    ct = async () => {
      O(!0);
      try {
        (await s(),
          C({
            title: b(
              `settings.accountDeleted`,
              `Your account has been deleted`,
            ),
          }),
          w(`/auth?entryPoint=direct`));
      } catch (e) {
        (console.error(`Error deleting account:`, e),
          C({
            title: b(
              `settings.accountDeleteFailed`,
              `Failed to delete account`,
            ),
            description: e?.message,
            variant: `destructive`,
          }),
          O(!1));
      }
    },
    lt = Fe ?? k(K);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(ge, {
        title: b(`settings.seoTitle`, `Settings | Sandscape`),
        description: b(
          `settings.seoDescription`,
          `Manage your Sandscape account, profile, and preferences.`,
        ),
      }),
      (0, Q.jsxs)(`div`, {
        className: `container mx-auto max-w-3xl py-6 px-4`,
        children: [
          (0, Q.jsx)(`h1`, {
            className: `text-2xl font-bold mb-6`,
            children: b(`navigation.settings`, `Settings`),
          }),
          (0, Q.jsxs)(Me, {
            value: he,
            onValueChange: (e) => {
              let t = new URLSearchParams(ie);
              (e === `profile` ? t.delete(`tab`) : t.set(`tab`, e),
                oe(t, { replace: !0 }));
            },
            className: `w-full`,
            children: [
              (0, Q.jsxs)(je, {
                className: `mb-6`,
                children: [
                  (0, Q.jsx)(V, {
                    value: `profile`,
                    children: b(`settings.tabProfile`, `Profile`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `account`,
                    children: b(`settings.tabAccount`, `Account`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `billing`,
                    children: b(`settings.tabBilling`, `Billing`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `notifications`,
                    children: b(`settings.tabNotifications`, `Notifications`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `appearance`,
                    children: b(`settings.tabAppearance`, `Appearance`),
                  }),
                ],
              }),
              (0, Q.jsx)(H, {
                value: `profile`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(`settings.profileTitle`, `Profile`),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.profileDescription`,
                            `Update how you appear to others across Sandscape.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(F, {
                      className: `space-y-6`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-4`,
                          children: [
                            (0, Q.jsxs)(de, {
                              className: `h-20 w-20`,
                              children: [
                                (0, Q.jsx)(ue, {
                                  src: lt,
                                  className: `object-cover`,
                                }),
                                (0, Q.jsx)(le, {
                                  children: (0, Q.jsx)(E, {
                                    className: `h-8 w-8 text-muted-foreground`,
                                  }),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`input`, {
                                  ref: Re,
                                  type: `file`,
                                  accept: `image/*`,
                                  className: `hidden`,
                                  onChange: it,
                                }),
                                (0, Q.jsxs)(u, {
                                  variant: `outline`,
                                  size: `sm`,
                                  onClick: () => Re.current?.click(),
                                  disabled: z,
                                  children: [
                                    (0, Q.jsx)(ae, {
                                      className: `h-4 w-4 mr-2`,
                                    }),
                                    b(`settings.changeAvatar`, `Change avatar`),
                                  ],
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground mt-2`,
                                  children: b(
                                    `settings.avatarHint`,
                                    `JPG or PNG. Saved when you click Save changes.`,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              htmlFor: `username`,
                              children: b(`settings.usernameLabel`, `Username`),
                            }),
                            (0, Q.jsx)(A, {
                              id: `username`,
                              value: B,
                              onChange: (e) => Ae(e.target.value),
                              disabled: z,
                              placeholder: b(
                                `settings.usernamePlaceholder`,
                                `Your username`,
                              ),
                              maxLength: 30,
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              htmlFor: `bio`,
                              children: b(`settings.bioLabel`, `Bio`),
                            }),
                            (0, Q.jsx)(ye, {
                              id: `bio`,
                              value: U,
                              onChange: (e) => G(e.target.value),
                              disabled: z,
                              placeholder: b(
                                `settings.bioPlaceholder`,
                                `Tell the community about yourself`,
                              ),
                              rows: 4,
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(u, {
                          onClick: at,
                          disabled: Le || z,
                          children: [
                            Le &&
                              (0, Q.jsx)(x, {
                                className: `h-4 w-4 mr-2 animate-spin`,
                              }),
                            b(`settings.saveChanges`, `Save changes`),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(H, {
                value: `account`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(`settings.accountTitle`, `Account`),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.accountDescription`,
                            `Manage your sign-in details.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(F, {
                      className: `space-y-6`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-3 rounded-lg border p-4`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, Q.jsx)(T, {
                                  className: `h-5 w-5 text-primary`,
                                }),
                                (0, Q.jsx)(`h3`, {
                                  className: `text-sm font-medium`,
                                  children: b(
                                    `accountSecurity.signInMethodsTitle`,
                                    `Active sign-in methods`,
                                  ),
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `accountSecurity.signInMethodsHint`,
                                `These are the verified ways you can access this account.`,
                              ),
                            }),
                            Ke
                              ? (0, Q.jsx)(x, {
                                  className: `h-4 w-4 animate-spin text-muted-foreground`,
                                })
                              : (0, Q.jsxs)(`div`, {
                                  className: `grid gap-2 sm:grid-cols-2`,
                                  children: [
                                    $.emailOtp &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, Q.jsx)(S, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, Q.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodEmailCode`,
                                              `Email code`,
                                            ),
                                          }),
                                          (0, Q.jsx)(_, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.password &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, Q.jsx)(re, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, Q.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodPassword`,
                                              `Password`,
                                            ),
                                          }),
                                          (0, Q.jsx)(_, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.providers.map((e) =>
                                      (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                          children: [
                                            (0, Q.jsx)(T, {
                                              className: `h-4 w-4`,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              className: `capitalize`,
                                              children: e,
                                            }),
                                            (0, Q.jsx)(_, {
                                              className: `ms-auto h-4 w-4 text-green-500`,
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              htmlFor: `email`,
                              children: b(`general.email`, `Email`),
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `flex flex-col sm:flex-row gap-2`,
                              children: [
                                (0, Q.jsx)(A, {
                                  id: `email`,
                                  type: `email`,
                                  value: Y,
                                  onChange: (e) => ze(e.target.value),
                                  placeholder: b(
                                    `settings.emailPlaceholder`,
                                    `you@example.com`,
                                  ),
                                }),
                                (0, Q.jsxs)(u, {
                                  variant: `outline`,
                                  onClick: ot,
                                  disabled:
                                    Be || !Y.trim() || Y.trim() === e?.email,
                                  className: `shrink-0`,
                                  children: [
                                    Be &&
                                      (0, Q.jsx)(x, {
                                        className: `h-4 w-4 mr-2 animate-spin`,
                                      }),
                                    b(`settings.changeEmail`, `Change email`),
                                  ],
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `settings.changeEmailHint`,
                                `We'll email a confirmation link to the new address. Your email changes only after you confirm it.`,
                              ),
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-4`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`h3`, {
                                  className: `text-sm font-medium`,
                                  children: $.password
                                    ? b(
                                        `settings.changePasswordTitle`,
                                        `Change password`,
                                      )
                                    : b(
                                        `accountSecurity.setPasswordTitle`,
                                        `Set a password`,
                                      ),
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.changePasswordHint`,
                                    `Choose a new password (at least 8 characters).`,
                                  ),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, Q.jsx)(M, {
                                  htmlFor: `new-password`,
                                  children: b(
                                    `settings.newPasswordLabel`,
                                    `New password`,
                                  ),
                                }),
                                (0, Q.jsx)(A, {
                                  id: `new-password`,
                                  type: `password`,
                                  value: Z,
                                  onChange: (e) => Ve(e.target.value),
                                  placeholder: b(
                                    `settings.newPasswordPlaceholder`,
                                    `New password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, Q.jsx)(M, {
                                  htmlFor: `confirm-password`,
                                  children: b(
                                    `settings.confirmPasswordLabel`,
                                    `Confirm new password`,
                                  ),
                                }),
                                (0, Q.jsx)(A, {
                                  id: `confirm-password`,
                                  type: `password`,
                                  value: He,
                                  onChange: (e) => Ue(e.target.value),
                                  placeholder: b(
                                    `settings.confirmPasswordPlaceholder`,
                                    `Confirm new password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(u, {
                              onClick: st,
                              disabled: We || !Z || !He,
                              children: [
                                We &&
                                  (0, Q.jsx)(x, {
                                    className: `h-4 w-4 mr-2 animate-spin`,
                                  }),
                                $.password
                                  ? b(
                                      `settings.updatePassword`,
                                      `Update password`,
                                    )
                                  : b(
                                      `accountSecurity.setPassword`,
                                      `Set password`,
                                    ),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `border-t border-destructive/30 pt-6 space-y-3`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`h3`, {
                                  className: `text-sm font-medium text-destructive`,
                                  children: b(
                                    `settings.deleteAccountTitle`,
                                    `Delete account`,
                                  ),
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.deleteAccountHint`,
                                    `Permanently delete your account. This can't be undone. Games you've published stay live but are no longer attributed to you.`,
                                  ),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(Oe, {
                              children: [
                                (0, Q.jsx)(Ce, {
                                  asChild: !0,
                                  children: (0, Q.jsxs)(u, {
                                    variant: `destructive`,
                                    disabled: D,
                                    children: [
                                      D &&
                                        (0, Q.jsx)(x, {
                                          className: `h-4 w-4 mr-2 animate-spin`,
                                        }),
                                      b(
                                        `settings.deleteMyAccount`,
                                        `Delete my account`,
                                      ),
                                    ],
                                  }),
                                }),
                                (0, Q.jsxs)(Se, {
                                  children: [
                                    (0, Q.jsxs)(De, {
                                      children: [
                                        (0, Q.jsx)(xe, {
                                          children: b(
                                            `settings.deleteAccountConfirmTitle`,
                                            `Delete your account?`,
                                          ),
                                        }),
                                        (0, Q.jsx)(be, {
                                          children: b(
                                            `settings.deleteAccountConfirmDesc`,
                                            `This permanently deletes your profile, likes, comments, follows, notifications and projects. Your published games remain live but anonymized. This action cannot be undone.`,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsxs)(Te, {
                                      children: [
                                        (0, Q.jsx)(Ee, {
                                          disabled: D,
                                          children: b(
                                            `general.cancel`,
                                            `Cancel`,
                                          ),
                                        }),
                                        (0, Q.jsx)(we, {
                                          onClick: ct,
                                          disabled: D,
                                          className: `bg-destructive text-destructive-foreground hover:bg-destructive/90`,
                                          children: b(
                                            `settings.deleteAccountAction`,
                                            `Delete account`,
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(H, { value: `billing`, children: (0, Q.jsx)(Je, {}) }),
              (0, Q.jsx)(H, {
                value: `notifications`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(
                            `settings.notificationsTitle`,
                            `Notifications`,
                          ),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.notificationsDescription`,
                            `Choose which notifications you want to receive. Collaboration invites are always delivered.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(F, {
                      className: `space-y-1`,
                      children: $e.map((e, t) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between py-3`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `pr-4`,
                                    children: [
                                      (0, Q.jsx)(M, {
                                        htmlFor: `pref-${e.key}`,
                                        className: `text-sm font-medium`,
                                        children: b(e.labelKey, e.label),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-xs text-muted-foreground mt-0.5`,
                                        children: b(
                                          e.descriptionKey,
                                          e.description,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(g, {
                                    id: `pref-${e.key}`,
                                    checked: Xe[e.key],
                                    disabled: Qe || tt === e.key,
                                    onCheckedChange: (t) => rt(e.key, t),
                                  }),
                                ],
                              }),
                              t < $e.length - 1 &&
                                (0, Q.jsx)(`div`, {
                                  className: `border-b border-border`,
                                }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(H, {
                value: `appearance`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(`settings.appearanceTitle`, `Appearance`),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.appearanceDescription`,
                            `Customize how Sandscape looks and feels.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(F, {
                      className: `space-y-6`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              children: b(`settings.themeLabel`, `Theme`),
                            }),
                            (0, Q.jsxs)(ee, {
                              value: te,
                              onValueChange: (e) => y(e),
                              children: [
                                (0, Q.jsx)(h, {
                                  className: `w-full sm:w-64`,
                                  children: (0, Q.jsx)(p, {}),
                                }),
                                (0, Q.jsxs)(m, {
                                  children: [
                                    (0, Q.jsx)(f, {
                                      value: `light`,
                                      children: b(
                                        `settings.themeLight`,
                                        `Light`,
                                      ),
                                    }),
                                    (0, Q.jsx)(f, {
                                      value: `dark`,
                                      children: b(`settings.themeDark`, `Dark`),
                                    }),
                                    (0, Q.jsx)(f, {
                                      value: `system`,
                                      children: b(
                                        `settings.themeSystem`,
                                        `System`,
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              children: b(`general.language`, `Language`),
                            }),
                            (0, Q.jsxs)(ee, {
                              value: ne.language?.split(`-`)[0],
                              onValueChange: (e) => ne.changeLanguage(e),
                              children: [
                                (0, Q.jsx)(h, {
                                  className: `w-full sm:w-64`,
                                  children: (0, Q.jsx)(p, {}),
                                }),
                                (0, Q.jsx)(m, {
                                  children: ce.map((e) =>
                                    (0, Q.jsx)(
                                      f,
                                      { value: e.code, children: e.name },
                                      e.code,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { et as Settings };
