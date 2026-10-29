// Settings-DLSOzPRp 01 — children
// Lines 1-332 of readable/assets/Settings-DLSOzPRp.pretty.js (statement-aligned).
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
