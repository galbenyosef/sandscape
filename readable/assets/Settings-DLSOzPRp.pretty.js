import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, u as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { i as o, l as s, r as c, t as l } from "./AuthService-C8NFtVWb.js";
import { t as u } from "./button-gyaE5cND.js";
import { t as d } from "./check-8B-bFngd.js";
import {
  a as f,
  c as p,
  n as m,
  r as h,
  s as g,
  t as _,
} from "./switch-CkslyoJe.js";
import { t as ee } from "./circle-check-_Mky5540.js";
import { n as v, s as y, t as te } from "./CoinDisplay-JJDtxOIB.js";
import { t as b } from "./external-link-Hu0HMI84.js";
import { t as x } from "./key-round-DVUG2_-P.js";
import { t as S } from "./loader-circle-BWNSk5u-.js";
import { t as ne } from "./mail-BGC21635.js";
import { t as C } from "./party-popper-DPMsmj95.js";
import { t as w } from "./rotate-ccw-C6X9IsVD.js";
import { t as re } from "./shield-check-CV429N9x.js";
import { t as ie } from "./triangle-alert-B0qFYVZz.js";
import { t as ae } from "./upload-Bbnhh28X.js";
import { t as oe } from "./user-BkC_K14f.js";
import { t as se } from "./zap-FtYt9dv7.js";
import { n as T, t as E } from "./apiConfig-BixZVfgD.js";
import { o as D } from "./AnalyticsService-CXnfQpTJ.js";
import { t as ce } from "./useTranslation-BdauNPOZ.js";
import { t as le } from "./i18n-V29EdUIm.js";
import { n as O } from "./coinService-CUupqiCF.js";
import { t as ue } from "./avatarUtils-CHOc69Ms.js";
import { n as k, r as de, t as fe } from "./avatar-BHj788a5.js";
import {
  $ as pe,
  K as me,
  L as A,
  P as he,
  R as ge,
  U as j,
  W as M,
  Z as N,
  g as P,
  l as F,
  mt as _e,
  z as ve,
} from "./index-CBcimEr9.js";
import { t as ye } from "./textarea-B3J7W2fu.js";
import { a as I, n as L, o as R, r as z, t as B } from "./card-Ca5HFnV5.js";
import {
  a as V,
  c as H,
  i as be,
  l as xe,
  n as Se,
  o as Ce,
  r as we,
  s as Te,
  t as Ee,
} from "./alert-dialog-CuLzujrt.js";
import { n as De, o as Oe, r as U, t as ke } from "./dialog-Ch9xjUi2.js";
import { i as Ae, n as je, r as Me, t as Ne } from "./tabs-DF35aEnx.js";
import { a as Pe, r as Fe, t as Ie } from "./marketing-Cb4yJvTI.js";
import { t as W } from "./badge-CZRAaW2d.js";
var G = e(t()),
  K = n();
function Le() {
  let { t: e } = ce(),
    { toast: t } = a(),
    [n, r] = (0, G.useState)(null),
    [i, o] = (0, G.useState)(!1),
    [s, c] = (0, G.useState)(``),
    [l, d] = (0, G.useState)(!1),
    f = (0, G.useRef)(0),
    p = (0, G.useCallback)(async () => {
      let t = ++f.current;
      c(``);
      try {
        let e = await Fe();
        t === f.current && r(e);
      } catch (n) {
        if (t !== f.current) return;
        n instanceof Ie
          ? o(!0)
          : c(
              n instanceof Error ? n.message : e(`emailPreferences.loadFailed`),
            );
      }
    }, [e]);
  (0, G.useEffect)(
    () => (
      p(),
      () => {
        f.current += 1;
      }
    ),
    [p],
  );
  let m = async (i, a) => {
    if (!n) return;
    let s = n,
      c = { ...n, [i]: a };
    (r(c), d(!0));
    try {
      await Pe(c);
    } catch (n) {
      if ((r(s), n instanceof Ie)) {
        o(!0);
        return;
      }
      t({
        title: e(`emailPreferences.saveFailed`),
        description: n instanceof Error ? n.message : void 0,
        variant: `destructive`,
      });
    } finally {
      d(!1);
    }
  };
  return (0, K.jsxs)(B, {
    children: [
      (0, K.jsxs)(I, {
        children: [
          (0, K.jsx)(R, { children: e(`emailPreferences.title`) }),
          (0, K.jsx)(z, { children: e(`emailPreferences.description`) }),
        ],
      }),
      (0, K.jsx)(L, {
        className: `space-y-5`,
        children: i
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: e(`emailPreferences.noEmail`),
            })
          : n
            ? (0, K.jsxs)(K.Fragment, {
                children: [
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-4`,
                    children: [
                      (0, K.jsx)(j, {
                        htmlFor: `email-promotions`,
                        children: e(`emailPreferences.promotions`),
                      }),
                      (0, K.jsx)(_, {
                        id: `email-promotions`,
                        disabled: l || n.unsubscribed,
                        checked: n.promotions,
                        onCheckedChange: (e) => void m(`promotions`, e),
                      }),
                    ],
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-4`,
                    children: [
                      (0, K.jsx)(j, {
                        htmlFor: `email-updates`,
                        children: e(`emailPreferences.productUpdates`),
                      }),
                      (0, K.jsx)(_, {
                        id: `email-updates`,
                        disabled: l || n.unsubscribed,
                        checked: n.product_updates,
                        onCheckedChange: (e) => void m(`product_updates`, e),
                      }),
                    ],
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-4 border-t pt-4`,
                    children: [
                      (0, K.jsx)(j, {
                        htmlFor: `email-unsubscribed`,
                        children: e(`emailPreferences.unsubscribed`),
                      }),
                      (0, K.jsx)(_, {
                        id: `email-unsubscribed`,
                        disabled: l,
                        checked: n.unsubscribed,
                        onCheckedChange: (e) => void m(`unsubscribed`, e),
                      }),
                    ],
                  }),
                ],
              })
            : s
              ? (0, K.jsxs)(K.Fragment, {
                  children: [
                    (0, K.jsx)(`p`, {
                      role: `alert`,
                      className: `text-sm text-destructive`,
                      children: s,
                    }),
                    (0, K.jsx)(u, {
                      variant: `outline`,
                      onClick: () => void p(),
                      children: e(`emailPreferences.retry`),
                    }),
                  ],
                })
              : (0, K.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: e(`emailPreferences.loading`),
                }),
      }),
    ],
  });
}
function Re(e) {
  return !Number.isSafeInteger(e.amount_cents) ||
    e.amount_cents <= 0 ||
    !/^[a-z]{3}$/i.test(e.currency)
    ? null
    : {
        transaction_id: e.id,
        purchase_kind: e.kind,
        item_id: e.kind === `subscription` ? e.tier : e.pack,
        coins: e.coins,
        value: e.amount_cents / 100,
        currency: e.currency.toUpperCase(),
      };
}
function ze(e) {
  for (let t of e) {
    let e = Re(t);
    e && D(`purchase`, t.id, e);
  }
}
async function q(e) {
  try {
    let t = await e.json();
    return t && typeof t == `object` ? t : {};
  } catch {
    return {};
  }
}
function J(e) {
  return {
    success: !1,
    error: e instanceof Error ? e.message : `Could not reach the server`,
  };
}
async function Be() {
  try {
    let e = await T(),
      t = await fetch(`${E.API_BASE_URL}/api/billing/plans`, {
        method: `GET`,
        headers: e,
      }),
      n = await q(t);
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
      { ...J(e), plans: [], packs: [] }
    );
  }
}
async function Y() {
  let e = {
    tier: `free`,
    status: null,
    current_period_end: null,
    cancel_at_period_end: !1,
    has_billing_account: !1,
    welcome: null,
    purchase_conversions: [],
  };
  try {
    let t = await T(),
      n = await fetch(`${E.API_BASE_URL}/api/billing/status`, {
        method: `GET`,
        headers: t,
      }),
      r = await q(n);
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
      { ...e, ...J(t) }
    );
  }
}
async function Ve(e) {
  return We(`/api/billing/checkout`, { tier: e });
}
async function He(e) {
  return We(`/api/billing/checkout-pack`, { pack: e });
}
async function Ue(e) {
  try {
    let t = await T(),
      n = await fetch(`${E.API_BASE_URL}/api/billing/welcome/seen`, {
        method: `POST`,
        headers: t,
        body: JSON.stringify({
          kind: e.kind,
          id: e.id,
          ...(e.reversal ? { reversed_at: e.reversal.reversed_at } : {}),
        }),
      }),
      r = await q(n);
    return n.ok
      ? { success: !0, status: r.status }
      : {
          success: !1,
          error: r.error ?? `Server error (${n.status})`,
          error_code: r.error_code,
        };
  } catch (e) {
    return (console.error(`Error marking a purchase welcome seen:`, e), J(e));
  }
}
async function X(e) {
  return We(`/api/billing/portal`, e ? { flow: e } : void 0);
}
async function We(e, t) {
  try {
    let n = await T(),
      r = await fetch(`${E.API_BASE_URL}${e}`, {
        method: `POST`,
        headers: n,
        ...(t ? { body: JSON.stringify(t) } : {}),
      }),
      i = await q(r);
    return !r.ok || !i.url
      ? {
          success: !1,
          error: i.error ?? `Server error (${r.status})`,
          error_code: i.error_code,
        }
      : { success: !0, url: i.url };
  } catch (t) {
    return (console.error(`Error calling ${e}:`, t), J(t));
  }
}
function Ge(e) {
  let t = e.currency?.toLowerCase() === `usd` ? `$` : ``,
    n = e.price_usd_cents / 100,
    r = Number.isInteger(n) ? `${n}` : n.toFixed(2);
  return t ? `${t}${r}` : `${r} ${e.currency.toUpperCase()}`;
}
function Z(e) {
  let t = `${e.kind}:${e.id}`;
  return e.reversal ? `${t}:reversed:${e.reversal.reversed_at}` : t;
}
function Ke(e) {
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
function qe(e, t) {
  let n = e?.welcome ?? null;
  return !n || !Je(n) || t.has(Z(n)) ? null : n;
}
function Je(e) {
  return (
    !!e.reversal ||
    (typeof e.amount_cents == `number` &&
      Number.isInteger(e.amount_cents) &&
      e.amount_cents >= 0 &&
      typeof e.currency == `string` &&
      /^[a-z]{3}$/i.test(e.currency))
  );
}
function Q(e, t) {
  if (e.reversal || !Je(e)) return !1;
  let n = Date.parse(e.granted_at);
  return Number.isFinite(n) && n >= t - 6e5;
}
function $(e, t, n, r) {
  return e.success && e.welcome && r !== null && Q(e.welcome, r)
    ? !1
    : t + 1 < n;
}
function Ye(e, t, n) {
  return e === null || t ? !1 : !(n.success && n.welcome && Q(n.welcome, e));
}
function Xe() {
  let e = 0,
    t = 0;
  return { begin: () => ++e, accept: (e) => (e <= t ? !1 : ((t = e), !0)) };
}
function Ze(e, t) {
  switch (e) {
    case `max`:
      return t(`billing.maxName`, `Max`);
    case `pro`:
      return t(`billing.proName`, `Pro`);
    case `starter`:
      return t(`billing.starterName`, `Starter`);
  }
}
function Qe(e, t, n) {
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
function $e(e, t, n) {
  let r = { count: t, amount: O.formatCoins(t) };
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
function et({ welcome: e, onClose: t, onCreate: n }) {
  let { t: r } = ce(),
    [i, a] = (0, G.useState)(e);
  e !== null && e !== i && a(e);
  let o = e ?? i,
    s = o ? O.formatCoins(o.coins) : ``,
    c = o?.kind === `subscription` ? Ze(o.tier, r) : ``,
    l = o ? Ke(o) : null,
    d = o?.reversal ? o.reversal.coins_removed : 0,
    f = o
      ? new Date(o.granted_at).toLocaleDateString(void 0, {
          year: `numeric`,
          month: `long`,
          day: `numeric`,
        })
      : ``;
  return (0, K.jsx)(ke, {
    open: e !== null,
    onOpenChange: (e) => !e && t(),
    children: (0, K.jsxs)(De, {
      onInteractOutside: (e) => {
        o?.reversal && e.preventDefault();
      },
      className: `max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] gap-0 overflow-y-auto rounded-lg p-0 sm:max-w-md [&>button:last-child]:text-white`,
      children: [
        (0, K.jsx)(`div`, {
          className: `relative flex h-24 shrink-0 items-center justify-center bg-[radial-gradient(ellipse_at_center,#1a0a3a_0%,#030106_70%)] sm:h-36`,
          children: (0, K.jsx)(`img`, {
            src: `/Sandscape_Logo_Degrade_RGB.png`,
            alt: ``,
            className: `h-10 w-auto select-none sm:h-14`,
            draggable: !1,
          }),
        }),
        l && o?.reversal
          ? (0, K.jsxs)(`div`, {
              className: `flex flex-col items-center gap-4 px-6 pb-6 pt-6 text-center`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground`,
                  children: (0, K.jsx)(w, { className: `h-6 w-6` }),
                }),
                (0, K.jsx)(Oe, {
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
                (0, K.jsx)(U, {
                  asChild: !0,
                  children: (0, K.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-4`,
                    children: [
                      d > 0 &&
                        (0, K.jsxs)(`span`, {
                          className: `inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-gradient-to-r from-red-500/15 to-orange-500/15 px-4 py-1.5 text-lg font-semibold tabular-nums text-red-800 dark:border-red-500/40 dark:from-red-500/10 dark:to-orange-500/10 dark:text-red-300`,
                          children: [
                            (0, K.jsx)(y, {
                              "aria-hidden": `true`,
                              className: `h-5 w-5 text-red-700 dark:text-red-400`,
                            }),
                            r(`billing.refundAmount`, `−{{amount}} Sandcoins`, {
                              count: d,
                              amount: O.formatCoins(d),
                            }),
                          ],
                        }),
                      (0, K.jsxs)(`span`, {
                        className: `text-base text-muted-foreground`,
                        children: [
                          Qe(l.lead, { plan: c, date: f, amount: s }, r),
                          ` `,
                          $e(l.coins, d, r),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, K.jsx)(`div`, {
                  className: `mt-2 flex w-full flex-col gap-2`,
                  children: (0, K.jsx)(u, {
                    className: `w-full`,
                    size: `lg`,
                    onClick: t,
                    children: r(`billing.refundDone`, `Got it`),
                  }),
                }),
              ],
            })
          : (0, K.jsxs)(`div`, {
              className: `flex flex-col items-center gap-4 px-6 pb-6 pt-6 text-center`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary`,
                  children:
                    o?.kind === `pack`
                      ? (0, K.jsx)(y, { className: `h-6 w-6` })
                      : (0, K.jsx)(C, { className: `h-6 w-6` }),
                }),
                (0, K.jsx)(Oe, {
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
                (0, K.jsx)(U, {
                  asChild: !0,
                  children: (0, K.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-4`,
                    children: [
                      (0, K.jsxs)(`span`, {
                        className: `inline-flex items-center gap-2 rounded-full border border-amber-600/35 bg-gradient-to-r from-amber-500/15 to-yellow-500/15 px-4 py-1.5 text-lg font-semibold tabular-nums text-amber-800 dark:border-amber-500/20 dark:from-amber-500/10 dark:to-yellow-500/10 dark:text-amber-300`,
                        children: [
                          (0, K.jsx)(y, {
                            "aria-hidden": `true`,
                            className: `h-5 w-5 text-amber-700 dark:text-amber-400`,
                          }),
                          r(`billing.welcomeCoins`, `+{{amount}} Sandcoins`, {
                            count: o?.coins ?? 0,
                            amount: s,
                          }),
                        ],
                      }),
                      (0, K.jsx)(`span`, {
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
                (0, K.jsxs)(`div`, {
                  className: `mt-2 flex w-full flex-col gap-2`,
                  children: [
                    (0, K.jsx)(u, {
                      className: `w-full`,
                      size: `lg`,
                      onClick: n,
                      children: r(`billing.welcomeCreate`, `Start creating`),
                    }),
                    (0, K.jsx)(u, {
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
function tt(e) {
  return e.cancel_at_period_end || e.tier === `free`;
}
var nt = 8,
  rt = 2e3;
function it() {
  let { t: e } = ce(),
    { toast: t } = a(),
    [n, o] = i(),
    s = r(),
    { canCreate: c, codingAccess: l, refreshCanCreate: d } = me(),
    { hasConsent: f } = ve(),
    [p, m] = (0, G.useState)(`loading`),
    [h, g] = (0, G.useState)(``),
    [_, ee] = (0, G.useState)([]),
    [te, b] = (0, G.useState)([]),
    [x, ne] = (0, G.useState)(null),
    [C, w] = (0, G.useState)(null),
    [re, ae] = (0, G.useState)(() => new Set()),
    oe = (0, G.useRef)(null),
    T = (0, G.useRef)(0),
    E = (0, G.useRef)(!1),
    D = (0, G.useRef)(null),
    le = (0, G.useRef)(!1),
    O = (0, G.useRef)(null),
    ue = (0, G.useRef)(Xe()),
    k = (0, G.useCallback)(
      (e, t) =>
        !t.success || !ue.current.accept(e)
          ? !1
          : (D.current !== null &&
              t.welcome &&
              Q(t.welcome, D.current) &&
              (le.current = !0),
            ne(t),
            !0),
      [],
    ),
    de = (0, G.useCallback)(async () => {
      let t = ue.current.begin(),
        [n, r] = await Promise.all([Be(), Y()]);
      if (
        n.error_code === `BILLING_UNCONFIGURED` ||
        r.error_code === `BILLING_UNCONFIGURED`
      ) {
        m(`unconfigured`);
        return;
      }
      if (!n.success) {
        (g(n.error || e(`billing.loadFailed`, `Could not load plans.`)),
          m(`error`));
        return;
      }
      if (!r.success) {
        (g(
          r.error ||
            e(`billing.statusFailed`, `Could not load your subscription.`),
        ),
          m(`error`));
        return;
      }
      (ee(n.plans), b(n.packs), k(t, r), m(`ready`));
    }, [e, k]),
    fe = (0, G.useCallback)(() => {
      ((T.current += 1),
        oe.current && clearTimeout(oe.current),
        (oe.current = null));
    }, []);
  ((0, G.useEffect)(
    () => (
      (E.current = !0),
      () => {
        ((E.current = !1), fe());
      }
    ),
    [fe],
  ),
    (0, G.useEffect)(() => {
      de();
    }, [de]));
  let A = (0, G.useCallback)(
      (e) => {
        fe();
        let t = T.current,
          n = (r) => {
            oe.current = setTimeout(async () => {
              let i = ue.current.begin(),
                a = await Y();
              t === T.current &&
                (k(i, a),
                v(),
                !(e && a.success && e(a)) &&
                  $(a, r, nt, D.current) &&
                  n(r + 1));
            }, rt);
          };
        n(0);
      },
      [fe, k],
    ),
    he = x?.welcome && !Je(x.welcome) ? Z(x.welcome) : null;
  (0, G.useEffect)(() => {
    he && A();
  }, [he, A]);
  let ge = (0, G.useCallback)(
    async (e) => {
      if (!Je(e)) return;
      let t = Z(e);
      ae((e) => new Set(e).add(t));
      let n = await Ue(e);
      if (!E.current) return;
      if (!n.success) {
        console.warn(
          `Purchase welcome not recorded as seen:`,
          n.error_code ?? n.error,
        );
        return;
      }
      let r = ue.current.begin(),
        i = await Y();
      E.current && (k(r, i), Ye(D.current, le.current, i) && A());
    },
    [A, k],
  );
  ((0, G.useEffect)(() => {
    let e = (e) => {
      e.persisted && w(null);
    };
    return (
      window.addEventListener(`pageshow`, e),
      () => window.removeEventListener(`pageshow`, e)
    );
  }, []),
    (0, G.useEffect)(() => {
      if (n.get(`checkout`) !== `success`) return;
      ((D.current = Date.now()),
        (O.current = t({
          title: e(`billing.thanksTitle`, `Payment received`),
          description: e(
            `billing.thanksBody`,
            `Your Sandcoins are on the way — this page will update in a moment.`,
          ),
        })),
        v());
      let r = new URLSearchParams(n);
      (r.delete(`checkout`), o(r, { replace: !0 }), A());
    }, [n.get(`checkout`)]),
    (0, G.useEffect)(() => {
      if (n.get(`portal`) !== `canceled`) return;
      t({
        title: e(`billing.canceledTitle`, `Plan canceled`),
        description: e(
          `billing.canceledBody`,
          `Your plan stays active until the end of the current billing period.`,
        ),
      });
      let r = new URLSearchParams(n);
      (r.delete(`portal`), o(r, { replace: !0 }), A(tt));
    }, [n.get(`portal`)]));
  let j = async (n) => {
      w(n);
      let r = await Ve(n);
      if (r.success && r.url) {
        window.location.assign(r.url);
        return;
      }
      if ((w(null), r.error_code === `SUBSCRIPTION_ALREADY_ACTIVE`)) {
        (t({
          title: e(`billing.alreadySubscribedTitle`, `You already have a plan`),
          description: e(
            `billing.alreadySubscribedBody`,
            `Opening your billing portal so you can switch or cancel.`,
          ),
        }),
          P(`switch:${n}`));
        return;
      }
      t({
        title: e(`billing.checkoutFailedTitle`, `Could not start checkout`),
        description: r.error || e(`billing.tryAgain`, `Please try again.`),
        variant: `destructive`,
      });
    },
    M = async (n) => {
      w(n);
      let r = await He(n);
      if (r.success && r.url) {
        window.location.assign(r.url);
        return;
      }
      (w(null),
        t({
          title: e(`billing.checkoutFailedTitle`, `Could not start checkout`),
          description: r.error || e(`billing.tryAgain`, `Please try again.`),
          variant: `destructive`,
        }));
    },
    P = async (n = `portal`, r) => {
      w(n);
      let i = await X(r);
      if (i.success && i.url) {
        window.location.assign(i.url);
        return;
      }
      (w(null),
        t({
          title: e(`billing.portalFailedTitle`, `Could not open billing`),
          description: i.error || e(`billing.tryAgain`, `Please try again.`),
          variant: `destructive`,
        }));
    },
    F = qe(x, re);
  (0, G.useEffect)(() => {
    !F ||
      !O.current ||
      D.current === null ||
      (Q(F, D.current) && (O.current.dismiss(), (O.current = null)));
  }, [F]);
  let _e =
    x?.purchase_conversions.map((e) => e.id).join(`,`) ||
    (x?.welcome && !x.welcome.reversal ? Z(x.welcome) : null);
  ((0, G.useEffect)(() => {
    _e && (!c || !l) && d();
  }, [_e, c, l, d]),
    (0, G.useEffect)(() => {
      f && x?.purchase_conversions && ze(x.purchase_conversions);
    }, [x?.purchase_conversions, f]));
  let ye = (0, K.jsx)(et, {
    welcome: F,
    onClose: () => F && void ge(F),
    onCreate: async () => {
      (F && ge(F), (!c || !l) && (await d()), s(`/create`));
    },
  });
  if (p === `loading`)
    return (0, K.jsx)(B, {
      children: (0, K.jsxs)(L, {
        className: `flex items-center gap-2 py-10 text-muted-foreground`,
        children: [
          (0, K.jsx)(S, { className: `h-4 w-4 animate-spin` }),
          e(`billing.loading`, `Loading your plan…`),
        ],
      }),
    });
  if (p === `unconfigured`)
    return (0, K.jsx)(B, {
      children: (0, K.jsxs)(I, {
        children: [
          (0, K.jsx)(R, { children: e(`billing.title`, `Subscription`) }),
          (0, K.jsx)(z, {
            children: e(
              `billing.unconfigured`,
              `Subscriptions aren't available yet. Sandcoins are granted by invite for now.`,
            ),
          }),
        ],
      }),
    });
  if (p === `error`)
    return (0, K.jsxs)(K.Fragment, {
      children: [
        ye,
        (0, K.jsxs)(B, {
          children: [
            (0, K.jsxs)(I, {
              children: [
                (0, K.jsx)(R, { children: e(`billing.title`, `Subscription`) }),
                (0, K.jsx)(z, { className: `text-destructive`, children: h }),
              ],
            }),
            (0, K.jsx)(L, {
              children: (0, K.jsx)(u, {
                variant: `outline`,
                onClick: () => {
                  (m(`loading`), de());
                },
                children: e(`billing.retry`, `Try again`),
              }),
            }),
          ],
        }),
      ],
    });
  let V = x?.tier ?? `free`,
    H = (e) => _.find((t) => t.tier === e);
  return (0, K.jsxs)(`div`, {
    className: `space-y-8`,
    children: [
      ye,
      (0, K.jsxs)(`section`, {
        className: `space-y-3`,
        children: [
          (0, K.jsxs)(`div`, {
            children: [
              (0, K.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: e(`billing.title`, `Subscription`),
              }),
              (0, K.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: e(
                  `billing.subtitle`,
                  `Manage your plan and top up Sandcoins as you need them.`,
                ),
              }),
            ],
          }),
          !c &&
            (0, K.jsxs)(`div`, {
              className: `flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3`,
              children: [
                (0, K.jsx)(N, {
                  className: `mt-0.5 h-5 w-5 shrink-0 text-primary`,
                }),
                (0, K.jsxs)(`div`, {
                  children: [
                    (0, K.jsx)(`p`, {
                      className: `text-sm font-semibold`,
                      children: e(
                        `billing.alphaOpenTitle`,
                        `The alpha is open`,
                      ),
                    }),
                    (0, K.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: e(
                        `billing.alphaOpenBody`,
                        `Choose any plan or Sandcoin pack to unlock the full creation studio, from your first prompt to your published game.`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          (0, K.jsxs)(`div`, {
            className: `flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-600 dark:text-amber-400`,
            children: [
              (0, K.jsx)(ie, { className: `mt-0.5 h-4 w-4 shrink-0` }),
              (0, K.jsx)(`span`, {
                children: e(
                  `billing.alphaNotice`,
                  `During the alpha period, pricing is subject to change.`,
                ),
              }),
            ],
          }),
          x?.welcome_error &&
            (0, K.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: e(
                `billing.noticeUnavailable`,
                `We couldn't check for recent purchase or refund notices. Reload this page to try again.`,
              ),
            }),
          (0, K.jsx)(ot, { status: x, busy: C, onManage: () => P(), t: e }),
        ],
      }),
      (0, K.jsxs)(`section`, {
        className: `space-y-4`,
        children: [
          (0, K.jsxs)(`div`, {
            children: [
              (0, K.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: e(`billing.plansTitle`, `Subscription plans`),
              }),
              (0, K.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: e(
                  `billing.plansDescription`,
                  `Every plan grants a monthly Sandcoin stipend. Switch or cancel any time.`,
                ),
              }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: `grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4`,
            children: [
              (0, K.jsx)(ct, {
                name: e(`billing.freeName`, `Free`),
                tagline: e(
                  `billing.freeTagline`,
                  `Play every game in the gallery, no card needed.`,
                ),
                price: { amount: e(`billing.freePrice`, `$0`) },
                icon: (0, K.jsx)(y, { className: `h-5 w-5` }),
                benefits: [
                  { text: e(`billing.freePlay`, `Play Games (Ads)`), live: !0 },
                  { text: e(`billing.freeTips`, `Earn Tips`), live: !1 },
                ],
                isCurrent: V === `free`,
                onDowngrade:
                  V === `free` ? void 0 : () => P(`downgrade`, `cancel`),
                downgradeScheduled: x?.cancel_at_period_end === !0,
                busy: C,
                t: e,
              }),
              (0, K.jsx)(ct, {
                name: e(`billing.starterName`, `Starter`),
                tagline: e(
                  `billing.starterTagline`,
                  `Best for hobbyists getting a first game off the ground.`,
                ),
                price: at(H(`starter`), e),
                icon: (0, K.jsx)(N, { className: `h-5 w-5` }),
                coins: H(`starter`)?.coins_per_period,
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
                isCurrent: V === `starter`,
                tier: `starter`,
                onSubscribe: () => j(`starter`),
                onSwitch: () => P(`switch:starter`),
                hasOtherPlan: V !== `free` && V !== `starter`,
                busy: C,
                disabled: !H(`starter`),
                t: e,
              }),
              (0, K.jsx)(ct, {
                name: e(`billing.proName`, `Pro`),
                tagline: e(
                  `billing.proTagline`,
                  `Best for individual creators making games regularly.`,
                ),
                price: at(H(`pro`), e),
                icon: (0, K.jsx)(se, { className: `h-5 w-5` }),
                coins: H(`pro`)?.coins_per_period,
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
                isCurrent: V === `pro`,
                tier: `pro`,
                onSubscribe: () => j(`pro`),
                onSwitch: () => P(`switch:pro`),
                hasOtherPlan: V !== `free` && V !== `pro`,
                busy: C,
                disabled: !H(`pro`),
                t: e,
              }),
              (0, K.jsx)(ct, {
                name: e(`billing.maxName`, `Max`),
                tagline: e(
                  `billing.maxTagline`,
                  `Best for high-volume, full-time production.`,
                ),
                price: at(H(`max`), e),
                icon: (0, K.jsx)(pe, { className: `h-5 w-5` }),
                coins: H(`max`)?.coins_per_period,
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
                isCurrent: V === `max`,
                tier: `max`,
                onSubscribe: () => j(`max`),
                onSwitch: () => P(`switch:max`),
                hasOtherPlan: V !== `free` && V !== `max`,
                busy: C,
                disabled: !H(`max`),
                t: e,
              }),
            ],
          }),
        ],
      }),
      te.length > 0 &&
        (0, K.jsxs)(B, {
          children: [
            (0, K.jsxs)(I, {
              children: [
                (0, K.jsxs)(R, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, K.jsx)(y, { className: `h-5 w-5` }),
                    e(`billing.packsTitle`, `Sandcoin packs`),
                  ],
                }),
                (0, K.jsx)(z, {
                  children: e(
                    `billing.packsDescription`,
                    `Top up any time, on any plan. Purchased Sandcoins never expire.`,
                  ),
                }),
              ],
            }),
            (0, K.jsx)(L, {
              className: `grid gap-4 sm:grid-cols-3`,
              children: te.map((t) =>
                (0, K.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col gap-3 rounded-lg border p-4`,
                    children: [
                      (0, K.jsxs)(`div`, {
                        children: [
                          (0, K.jsx)(`div`, {
                            className: `text-2xl font-semibold`,
                            children: t.coins.toLocaleString(),
                          }),
                          (0, K.jsx)(`div`, {
                            className: `text-sm text-muted-foreground`,
                            children: e(`billing.coins`, `Sandcoins`),
                          }),
                        ],
                      }),
                      (0, K.jsxs)(u, {
                        variant: `outline`,
                        onClick: () => M(t.pack),
                        disabled: C !== null,
                        children: [
                          C === t.pack &&
                            (0, K.jsx)(S, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`billing.buyFor`, `Buy for`),
                          ` `,
                          Ge(t),
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
      (0, K.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: e(
          `billing.coinsFootnote`,
          `Your plan's monthly Sandcoins reset at the start of each billing period — they do not roll over. Purchased and gifted Sandcoins never expire, and your plan's Sandcoins are always spent first. Items marked “Coming soon” aren't active yet.`,
        ),
      }),
    ],
  });
}
function at(e, t) {
  return e
    ? {
        amount: Ge(e),
        per: `/${e.interval === `year` ? t(`billing.perYear`, `yr`) : t(`billing.perMonth`, `mo`)}`,
      }
    : { amount: t(`billing.priceUnavailable`, `—`) };
}
function ot({ status: e, busy: t, onManage: n, t: r }) {
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
  return (0, K.jsx)(B, {
    children: (0, K.jsxs)(L, {
      className: `flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-0`,
      children: [
        (0, K.jsxs)(`div`, {
          className: `md:w-56 md:shrink-0 md:pr-6`,
          children: [
            (0, K.jsx)(`p`, {
              className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
              children: r(`billing.tier`, `Tier`),
            }),
            (0, K.jsx)(`p`, {
              className: `mt-1 text-2xl font-semibold text-primary`,
              children: a,
            }),
            o &&
              i !== `free` &&
              (0, K.jsx)(`p`, {
                className: `mt-1 text-xs text-muted-foreground`,
                children: e?.cancel_at_period_end
                  ? `${r(`billing.cancelsOn`, `cancels on`)} ${o}`
                  : `${r(`billing.renewsOn`, `renews on`)} ${o}`,
              }),
            e?.status === `past_due` &&
              (0, K.jsx)(`p`, {
                className: `mt-1 text-xs text-destructive`,
                children: r(
                  `billing.pastDue`,
                  `your last payment failed; update your card to keep your plan`,
                ),
              }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: `md:flex-1 md:border-l md:pl-6`,
          children: [
            (0, K.jsx)(`p`, {
              className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
              children: r(`billing.balance`, `Sandcoin balance`),
            }),
            (0, K.jsx)(`div`, {
              className: `mt-1`,
              children: (0, K.jsx)(te, {}),
            }),
            (0, K.jsx)(st, { t: r }),
          ],
        }),
        e?.has_billing_account &&
          (0, K.jsx)(`div`, {
            className: `md:shrink-0 md:pl-6`,
            children: (0, K.jsxs)(u, {
              variant: `outline`,
              onClick: n,
              disabled: t !== null,
              children: [
                t === `portal` &&
                  (0, K.jsx)(S, { className: `mr-2 h-4 w-4 animate-spin` }),
                r(`billing.managePlan`, `Manage plan`),
                (0, K.jsx)(b, { className: `ml-2 h-3.5 w-3.5` }),
              ],
            }),
          }),
      ],
    }),
  });
}
function st({ t: e }) {
  let [t, n] = (0, G.useState)(null);
  (0, G.useEffect)(() => {
    let e = !1,
      t = 0,
      r = () => {
        let r = ++t;
        O.getBalance().then((i) => {
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
  return (0, K.jsxs)(`p`, {
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
function ct({
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
  onSwitch: m,
  onDowngrade: h,
  downgradeScheduled: g,
  busy: _,
  disabled: ee,
  t: v,
}) {
  return (0, K.jsxs)(B, {
    className: s(
      `relative flex h-full flex-col`,
      c && `border-primary shadow-lg shadow-primary/10`,
    ),
    children: [
      c &&
        (0, K.jsx)(W, {
          className: `absolute -top-2.5 right-4 bg-primary text-primary-foreground hover:bg-primary`,
          children: v(`billing.mostPopular`, `Most popular`),
        }),
      (0, K.jsxs)(I, {
        className: `pb-4`,
        children: [
          (0, K.jsxs)(R, {
            className: `flex items-center justify-between gap-2 text-base`,
            children: [
              (0, K.jsxs)(`span`, {
                className: `flex items-center gap-2`,
                children: [r, e],
              }),
              o &&
                (0, K.jsx)(W, {
                  variant: `secondary`,
                  children: v(`billing.current`, `Current`),
                }),
            ],
          }),
          t &&
            (0, K.jsx)(z, { className: `min-h-[2.5rem] text-xs`, children: t }),
          (0, K.jsxs)(`div`, {
            className: `pt-2`,
            children: [
              (0, K.jsxs)(`div`, {
                className: `flex items-baseline gap-1`,
                children: [
                  (0, K.jsx)(`span`, {
                    className: `text-3xl font-semibold leading-none text-foreground`,
                    children: n.amount,
                  }),
                  n.per &&
                    (0, K.jsx)(`span`, {
                      className: `text-sm text-muted-foreground`,
                      children: n.per,
                    }),
                ],
              }),
              (0, K.jsx)(`div`, {
                className: `mt-1 min-h-[1.25rem] text-sm text-muted-foreground`,
                children:
                  i !== void 0 &&
                  `${i.toLocaleString()} ${v(`billing.coinsPerMonth`, `Sandcoins / month`)}`,
              }),
            ],
          }),
        ],
      }),
      (0, K.jsxs)(L, {
        className: `flex flex-1 flex-col pt-0`,
        children: [
          (0, K.jsx)(`p`, {
            className: `mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground`,
            children: v(`billing.includes`, `Includes`),
          }),
          (0, K.jsx)(`ul`, {
            className: `flex-1 space-y-2 text-sm`,
            children: a.map((e) =>
              (0, K.jsxs)(
                `li`,
                {
                  className: `flex items-start gap-2`,
                  children: [
                    (0, K.jsx)(d, {
                      className: s(
                        `mt-0.5 h-4 w-4 shrink-0`,
                        e.live ? `text-primary` : `text-muted-foreground/50`,
                      ),
                    }),
                    (0, K.jsxs)(`span`, {
                      className: e.live ? void 0 : `text-muted-foreground`,
                      children: [
                        e.text,
                        !e.live &&
                          (0, K.jsx)(W, {
                            variant: `outline`,
                            className: `ml-2 text-[10px]`,
                            children: v(`billing.comingSoon`, `Coming soon`),
                          }),
                      ],
                    }),
                  ],
                },
                e.text,
              ),
            ),
          }),
          (0, K.jsxs)(`div`, {
            className: `mt-auto pt-6`,
            children: [
              p &&
                !o &&
                (0, K.jsxs)(u, {
                  size: `lg`,
                  className: `w-full font-semibold shadow-md shadow-primary/20`,
                  onClick: l ? m : p,
                  disabled: ee || _ !== null,
                  children: [
                    f !== void 0 &&
                      (_ === f || _ === `switch:${f}`) &&
                      (0, K.jsx)(S, { className: `mr-2 h-4 w-4 animate-spin` }),
                    l
                      ? v(`billing.switchPlan`, `Switch plan`)
                      : v(`billing.subscribe`, `Subscribe`),
                  ],
                }),
              o &&
                (0, K.jsx)(u, {
                  size: `lg`,
                  variant: `outline`,
                  className: `w-full`,
                  disabled: !0,
                  children: v(`billing.currentPlan`, `Current plan`),
                }),
              !o &&
                !p &&
                h &&
                g &&
                (0, K.jsx)(u, {
                  size: `lg`,
                  variant: `outline`,
                  className: `w-full`,
                  disabled: !0,
                  children: v(
                    `billing.cancelScheduled`,
                    `Cancellation scheduled`,
                  ),
                }),
              !o &&
                !p &&
                h &&
                !g &&
                (0, K.jsxs)(u, {
                  size: `lg`,
                  variant: `outline`,
                  className: `w-full`,
                  onClick: h,
                  disabled: _ !== null,
                  children: [
                    _ === `downgrade` &&
                      (0, K.jsx)(S, { className: `mr-2 h-4 w-4 animate-spin` }),
                    v(`billing.cancelPlan`, `Cancel plan`),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var lt = [
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
function ut() {
  let {
      user: e,
      updatePassword: t,
      updateEmail: n,
      deleteAccount: s,
      getActiveSignInMethods: d,
      refreshAccountState: v,
    } = me(),
    { theme: y, setTheme: te } = _e(),
    { t: b, i18n: C } = ce(),
    { toast: w } = a(),
    ie = r(),
    [se, T] = i(),
    [E, D] = (0, G.useState)(!1),
    O = se.get(`tab`),
    pe = [
      `profile`,
      `account`,
      `billing`,
      `notifications`,
      `appearance`,
    ].includes(O ?? ``)
      ? O
      : `profile`,
    [N, ve] = (0, G.useState)(!0),
    [De, Oe] = (0, G.useState)(``),
    [U, ke] = (0, G.useState)(``),
    [Pe, Fe] = (0, G.useState)(null),
    [Ie, W] = (0, G.useState)(null),
    [Re, ze] = (0, G.useState)(void 0),
    [q, J] = (0, G.useState)(!1),
    Be = (0, G.useRef)(null),
    [Y, Ve] = (0, G.useState)(``),
    [He, Ue] = (0, G.useState)(!1),
    [X, We] = (0, G.useState)(``),
    [Ge, Z] = (0, G.useState)(``),
    [Ke, qe] = (0, G.useState)(!1),
    [Je, Q] = (0, G.useState)(!0),
    [$, Ye] = (0, G.useState)({ emailOtp: !1, password: !1, providers: [] }),
    [Xe, Ze] = (0, G.useState)(he),
    [Qe, $e] = (0, G.useState)(!0),
    [et, tt] = (0, G.useState)(null);
  ((0, G.useEffect)(() => {
    if (!e) return;
    let t = !0;
    return (
      (async () => {
        ve(!0);
        try {
          let n = await l.getProfile(e.id);
          if (!t) return;
          (Oe(n.username ?? ``), ke(n.bio ?? ``), Fe(n.avatar_url ?? null));
        } catch (e) {
          console.error(`Error loading profile:`, e);
        } finally {
          t && ve(!1);
        }
      })(),
      () => {
        t = !1;
      }
    );
  }, [e]),
    (0, G.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        Q(!0),
        d()
          .then((e) => {
            t && Ye(e);
          })
          .catch((e) => console.error(`Error loading sign-in methods:`, e))
          .finally(() => {
            t && Q(!1);
          }),
        () => {
          t = !1;
        }
      );
    }, [d, e]),
    (0, G.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        (async () => {
          $e(!0);
          try {
            let e = await A();
            t && Ze(e);
          } catch (e) {
            console.error(`Error loading notification preferences:`, e);
          } finally {
            t && $e(!1);
          }
        })(),
        () => {
          t = !1;
        }
      );
    }, [e]));
  let nt = async (e, t) => {
      let n = Xe,
        r = { ...Xe, [e]: t };
      (Ze(r), tt(e));
      try {
        await ge(r);
      } catch (e) {
        (console.error(`Error saving notification preferences:`, e),
          Ze(n),
          w({
            title: b(
              `settings.prefUpdateFailed`,
              `Failed to update preference`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        tt(null);
      }
    },
    rt = (e) => {
      let t = e.target.files?.[0];
      t && (W(t), ze(URL.createObjectURL(t)));
    },
    at = async () => {
      if (!e) return;
      let t = o(De);
      if (!c(t)) {
        w({
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
        let n = Pe ?? void 0;
        Ie && (n = (await l.uploadAvatar(Ie, e.id)).path);
        let r = await l.updateProfile({ username: t, bio: U, avatar_url: n });
        (Oe(r.username ?? De),
          ke(r.bio ?? U),
          Fe(r.avatar_url ?? n ?? null),
          W(null),
          ze(void 0),
          await v(),
          w({ title: b(`settings.profileUpdated`, `Profile updated`) }));
      } catch (e) {
        (console.error(`Error updating profile:`, e),
          w({
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
  (0, G.useEffect)(() => {
    Ve(e?.email ?? ``);
  }, [e?.email]);
  let ot = async () => {
      let t = Y.trim();
      if (!t || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
        w({
          title: b(`settings.emailInvalid`, `Enter a valid email address`),
          variant: `destructive`,
        });
        return;
      }
      if (t === e?.email) {
        w({
          title: b(`settings.emailAlreadyYours`, `That's already your email`),
        });
        return;
      }
      Ue(!0);
      try {
        (await n(t, F(`/settings`, `email_change`, `protected_route`)),
          w({
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
          Ve(e?.email ?? ``),
          w({
            title: b(`settings.emailUpdateFailed`, `Failed to update email`),
            description: t?.message,
            variant: `destructive`,
          }));
      } finally {
        Ue(!1);
      }
    },
    st = async () => {
      if (X.length < 8) {
        w({
          title: b(
            `settings.passwordTooShort`,
            `Password must be at least 8 characters`,
          ),
          variant: `destructive`,
        });
        return;
      }
      if (X !== Ge) {
        w({
          title: b(`settings.passwordsDontMatch`, `Passwords don't match`),
          variant: `destructive`,
        });
        return;
      }
      qe(!0);
      try {
        (await t(X),
          Ye((e) => ({ ...e, password: !0 })),
          We(``),
          Z(``),
          w({ title: b(`settings.passwordUpdated`, `Password updated`) }));
      } catch (e) {
        (console.error(`Error updating password:`, e),
          w({
            title: b(
              `settings.passwordUpdateFailed`,
              `Failed to update password`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        qe(!1);
      }
    },
    ct = async () => {
      D(!0);
      try {
        (await s(),
          w({
            title: b(
              `settings.accountDeleted`,
              `Your account has been deleted`,
            ),
          }),
          ie(`/auth?entryPoint=direct`));
      } catch (e) {
        (console.error(`Error deleting account:`, e),
          w({
            title: b(
              `settings.accountDeleteFailed`,
              `Failed to delete account`,
            ),
            description: e?.message,
            variant: `destructive`,
          }),
          D(!1));
      }
    },
    ut = Re ?? ue(Pe);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(P, {
        title: b(`settings.seoTitle`, `Settings | Sandscape`),
        description: b(
          `settings.seoDescription`,
          `Manage your Sandscape account, profile, and preferences.`,
        ),
      }),
      (0, K.jsxs)(`div`, {
        className: `container mx-auto max-w-3xl py-6 px-4`,
        children: [
          (0, K.jsx)(`h1`, {
            className: `text-2xl font-bold mb-6`,
            children: b(`navigation.settings`, `Settings`),
          }),
          (0, K.jsxs)(Ne, {
            value: pe,
            onValueChange: (e) => {
              let t = new URLSearchParams(se);
              (e === `profile` ? t.delete(`tab`) : t.set(`tab`, e),
                T(t, { replace: !0 }));
            },
            className: `w-full`,
            children: [
              (0, K.jsxs)(Me, {
                className: `mb-6`,
                children: [
                  (0, K.jsx)(Ae, {
                    value: `profile`,
                    children: b(`settings.tabProfile`, `Profile`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `account`,
                    children: b(`settings.tabAccount`, `Account`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `billing`,
                    children: b(`settings.tabBilling`, `Billing`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `notifications`,
                    children: b(`settings.tabNotifications`, `Notifications`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `appearance`,
                    children: b(`settings.tabAppearance`, `Appearance`),
                  }),
                ],
              }),
              (0, K.jsx)(je, {
                value: `profile`,
                children: (0, K.jsxs)(B, {
                  children: [
                    (0, K.jsxs)(I, {
                      children: [
                        (0, K.jsx)(R, {
                          children: b(`settings.profileTitle`, `Profile`),
                        }),
                        (0, K.jsx)(z, {
                          children: b(
                            `settings.profileDescription`,
                            `Update how you appear to others across Sandscape.`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(L, {
                      className: `space-y-6`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `flex items-center gap-4`,
                          children: [
                            (0, K.jsxs)(fe, {
                              className: `h-20 w-20`,
                              children: [
                                (0, K.jsx)(de, {
                                  src: ut,
                                  className: `object-cover`,
                                }),
                                (0, K.jsx)(k, {
                                  children: (0, K.jsx)(oe, {
                                    className: `h-8 w-8 text-muted-foreground`,
                                  }),
                                }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`input`, {
                                  ref: Be,
                                  type: `file`,
                                  accept: `image/*`,
                                  className: `hidden`,
                                  onChange: rt,
                                }),
                                (0, K.jsxs)(u, {
                                  variant: `outline`,
                                  size: `sm`,
                                  onClick: () => Be.current?.click(),
                                  disabled: N,
                                  children: [
                                    (0, K.jsx)(ae, {
                                      className: `h-4 w-4 mr-2`,
                                    }),
                                    b(`settings.changeAvatar`, `Change avatar`),
                                  ],
                                }),
                                (0, K.jsx)(`p`, {
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
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              htmlFor: `username`,
                              children: b(`settings.usernameLabel`, `Username`),
                            }),
                            (0, K.jsx)(M, {
                              id: `username`,
                              value: De,
                              onChange: (e) => Oe(e.target.value),
                              disabled: N,
                              placeholder: b(
                                `settings.usernamePlaceholder`,
                                `Your username`,
                              ),
                              maxLength: 30,
                            }),
                          ],
                        }),
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              htmlFor: `bio`,
                              children: b(`settings.bioLabel`, `Bio`),
                            }),
                            (0, K.jsx)(ye, {
                              id: `bio`,
                              value: U,
                              onChange: (e) => ke(e.target.value),
                              disabled: N,
                              placeholder: b(
                                `settings.bioPlaceholder`,
                                `Tell the community about yourself`,
                              ),
                              rows: 4,
                            }),
                          ],
                        }),
                        (0, K.jsxs)(u, {
                          onClick: at,
                          disabled: q || N,
                          children: [
                            q &&
                              (0, K.jsx)(S, {
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
              (0, K.jsx)(je, {
                value: `account`,
                children: (0, K.jsxs)(B, {
                  children: [
                    (0, K.jsxs)(I, {
                      children: [
                        (0, K.jsx)(R, {
                          children: b(`settings.accountTitle`, `Account`),
                        }),
                        (0, K.jsx)(z, {
                          children: b(
                            `settings.accountDescription`,
                            `Manage your sign-in details.`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(L, {
                      className: `space-y-6`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `space-y-3 rounded-lg border p-4`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, K.jsx)(re, {
                                  className: `h-5 w-5 text-primary`,
                                }),
                                (0, K.jsx)(`h3`, {
                                  className: `text-sm font-medium`,
                                  children: b(
                                    `accountSecurity.signInMethodsTitle`,
                                    `Active sign-in methods`,
                                  ),
                                }),
                              ],
                            }),
                            (0, K.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `accountSecurity.signInMethodsHint`,
                                `These are the verified ways you can access this account.`,
                              ),
                            }),
                            Je
                              ? (0, K.jsx)(S, {
                                  className: `h-4 w-4 animate-spin text-muted-foreground`,
                                })
                              : (0, K.jsxs)(`div`, {
                                  className: `grid gap-2 sm:grid-cols-2`,
                                  children: [
                                    $.emailOtp &&
                                      (0, K.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, K.jsx)(ne, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, K.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodEmailCode`,
                                              `Email code`,
                                            ),
                                          }),
                                          (0, K.jsx)(ee, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.password &&
                                      (0, K.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, K.jsx)(x, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, K.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodPassword`,
                                              `Password`,
                                            ),
                                          }),
                                          (0, K.jsx)(ee, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.providers.map((e) =>
                                      (0, K.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                          children: [
                                            (0, K.jsx)(re, {
                                              className: `h-4 w-4`,
                                            }),
                                            (0, K.jsx)(`span`, {
                                              className: `capitalize`,
                                              children: e,
                                            }),
                                            (0, K.jsx)(ee, {
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
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              htmlFor: `email`,
                              children: b(`general.email`, `Email`),
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `flex flex-col sm:flex-row gap-2`,
                              children: [
                                (0, K.jsx)(M, {
                                  id: `email`,
                                  type: `email`,
                                  value: Y,
                                  onChange: (e) => Ve(e.target.value),
                                  placeholder: b(
                                    `settings.emailPlaceholder`,
                                    `you@example.com`,
                                  ),
                                }),
                                (0, K.jsxs)(u, {
                                  variant: `outline`,
                                  onClick: ot,
                                  disabled:
                                    He || !Y.trim() || Y.trim() === e?.email,
                                  className: `shrink-0`,
                                  children: [
                                    He &&
                                      (0, K.jsx)(S, {
                                        className: `h-4 w-4 mr-2 animate-spin`,
                                      }),
                                    b(`settings.changeEmail`, `Change email`),
                                  ],
                                }),
                              ],
                            }),
                            (0, K.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `settings.changeEmailHint`,
                                `We'll email a confirmation link to the new address. Your email changes only after you confirm it.`,
                              ),
                            }),
                          ],
                        }),
                        (0, K.jsxs)(`div`, {
                          className: `space-y-4`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`h3`, {
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
                                (0, K.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.changePasswordHint`,
                                    `Choose a new password (at least 8 characters).`,
                                  ),
                                }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, K.jsx)(j, {
                                  htmlFor: `new-password`,
                                  children: b(
                                    `settings.newPasswordLabel`,
                                    `New password`,
                                  ),
                                }),
                                (0, K.jsx)(M, {
                                  id: `new-password`,
                                  type: `password`,
                                  value: X,
                                  onChange: (e) => We(e.target.value),
                                  placeholder: b(
                                    `settings.newPasswordPlaceholder`,
                                    `New password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, K.jsx)(j, {
                                  htmlFor: `confirm-password`,
                                  children: b(
                                    `settings.confirmPasswordLabel`,
                                    `Confirm new password`,
                                  ),
                                }),
                                (0, K.jsx)(M, {
                                  id: `confirm-password`,
                                  type: `password`,
                                  value: Ge,
                                  onChange: (e) => Z(e.target.value),
                                  placeholder: b(
                                    `settings.confirmPasswordPlaceholder`,
                                    `Confirm new password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, K.jsxs)(u, {
                              onClick: st,
                              disabled: Ke || !X || !Ge,
                              children: [
                                Ke &&
                                  (0, K.jsx)(S, {
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
                        (0, K.jsxs)(`div`, {
                          className: `border-t border-destructive/30 pt-6 space-y-3`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`h3`, {
                                  className: `text-sm font-medium text-destructive`,
                                  children: b(
                                    `settings.deleteAccountTitle`,
                                    `Delete account`,
                                  ),
                                }),
                                (0, K.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.deleteAccountHint`,
                                    `Permanently delete your account. This can't be undone. Games you've published stay live but are no longer attributed to you.`,
                                  ),
                                }),
                              ],
                            }),
                            (0, K.jsxs)(Ee, {
                              children: [
                                (0, K.jsx)(xe, {
                                  asChild: !0,
                                  children: (0, K.jsxs)(u, {
                                    variant: `destructive`,
                                    disabled: E,
                                    children: [
                                      E &&
                                        (0, K.jsx)(S, {
                                          className: `h-4 w-4 mr-2 animate-spin`,
                                        }),
                                      b(
                                        `settings.deleteMyAccount`,
                                        `Delete my account`,
                                      ),
                                    ],
                                  }),
                                }),
                                (0, K.jsxs)(be, {
                                  children: [
                                    (0, K.jsxs)(Te, {
                                      children: [
                                        (0, K.jsx)(H, {
                                          children: b(
                                            `settings.deleteAccountConfirmTitle`,
                                            `Delete your account?`,
                                          ),
                                        }),
                                        (0, K.jsx)(V, {
                                          children: b(
                                            `settings.deleteAccountConfirmDesc`,
                                            `This permanently deletes your profile, likes, comments, follows, notifications and projects. Your published games remain live but anonymized. This action cannot be undone.`,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, K.jsxs)(Ce, {
                                      children: [
                                        (0, K.jsx)(we, {
                                          disabled: E,
                                          children: b(
                                            `general.cancel`,
                                            `Cancel`,
                                          ),
                                        }),
                                        (0, K.jsx)(Se, {
                                          onClick: ct,
                                          disabled: E,
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
              (0, K.jsx)(je, {
                value: `billing`,
                children: (0, K.jsx)(it, {}),
              }),
              (0, K.jsxs)(je, {
                value: `notifications`,
                className: `space-y-6`,
                children: [
                  (0, K.jsx)(Le, {}),
                  (0, K.jsxs)(B, {
                    children: [
                      (0, K.jsxs)(I, {
                        children: [
                          (0, K.jsx)(R, {
                            children: b(
                              `settings.notificationsTitle`,
                              `Notifications`,
                            ),
                          }),
                          (0, K.jsx)(z, {
                            children: b(
                              `settings.notificationsDescription`,
                              `Choose which notifications you want to receive. Collaboration invites are always delivered.`,
                            ),
                          }),
                        ],
                      }),
                      (0, K.jsx)(L, {
                        className: `space-y-1`,
                        children: lt.map((e, t) =>
                          (0, K.jsxs)(
                            `div`,
                            {
                              children: [
                                (0, K.jsxs)(`div`, {
                                  className: `flex items-center justify-between py-3`,
                                  children: [
                                    (0, K.jsxs)(`div`, {
                                      className: `pr-4`,
                                      children: [
                                        (0, K.jsx)(j, {
                                          htmlFor: `pref-${e.key}`,
                                          className: `text-sm font-medium`,
                                          children: b(e.labelKey, e.label),
                                        }),
                                        (0, K.jsx)(`p`, {
                                          className: `text-xs text-muted-foreground mt-0.5`,
                                          children: b(
                                            e.descriptionKey,
                                            e.description,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, K.jsx)(_, {
                                      id: `pref-${e.key}`,
                                      checked: Xe[e.key],
                                      disabled: Qe || et === e.key,
                                      onCheckedChange: (t) => nt(e.key, t),
                                    }),
                                  ],
                                }),
                                t < lt.length - 1 &&
                                  (0, K.jsx)(`div`, {
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
                ],
              }),
              (0, K.jsx)(je, {
                value: `appearance`,
                children: (0, K.jsxs)(B, {
                  children: [
                    (0, K.jsxs)(I, {
                      children: [
                        (0, K.jsx)(R, {
                          children: b(`settings.appearanceTitle`, `Appearance`),
                        }),
                        (0, K.jsx)(z, {
                          children: b(
                            `settings.appearanceDescription`,
                            `Customize how Sandscape looks and feels.`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(L, {
                      className: `space-y-6`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              children: b(`settings.themeLabel`, `Theme`),
                            }),
                            (0, K.jsxs)(m, {
                              value: y,
                              onValueChange: (e) => te(e),
                              children: [
                                (0, K.jsx)(g, {
                                  className: `w-full sm:w-64`,
                                  children: (0, K.jsx)(p, {}),
                                }),
                                (0, K.jsxs)(h, {
                                  children: [
                                    (0, K.jsx)(f, {
                                      value: `light`,
                                      children: b(
                                        `settings.themeLight`,
                                        `Light`,
                                      ),
                                    }),
                                    (0, K.jsx)(f, {
                                      value: `dark`,
                                      children: b(`settings.themeDark`, `Dark`),
                                    }),
                                    (0, K.jsx)(f, {
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
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              children: b(`general.language`, `Language`),
                            }),
                            (0, K.jsxs)(m, {
                              value: C.language?.split(`-`)[0],
                              onValueChange: (e) => C.changeLanguage(e),
                              children: [
                                (0, K.jsx)(g, {
                                  className: `w-full sm:w-64`,
                                  children: (0, K.jsx)(p, {}),
                                }),
                                (0, K.jsx)(h, {
                                  children: le.map((e) =>
                                    (0, K.jsx)(
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
export { ut as Settings };
