// Settings-DLSOzPRp 04 — classname
// Lines 1255-1570 of readable/assets/Settings-DLSOzPRp.pretty.js (statement-aligned).
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
