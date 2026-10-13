// assets__Settings-B2DmZABB 01 — error
// Lines 1-322 of readable/assets__Settings-B2DmZABB.pretty.js (statement-aligned).
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
