// Settings-DLSOzPRp 02 — classname
// Lines 333-677 of readable/assets/Settings-DLSOzPRp.pretty.js (statement-aligned).
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
