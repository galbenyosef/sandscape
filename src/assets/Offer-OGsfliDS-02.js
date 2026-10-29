// Offer-OGsfliDS 02 — children
// Lines 328-406 of readable/assets/Offer-OGsfliDS.pretty.js (statement-aligned).
function P({ offer: e }) {
  let { t, i18n: n } = l(),
    r = n.resolvedLanguage || n.language,
    i = (e) => new Intl.NumberFormat(r).format(e),
    a =
      e.price_usd_cents === void 0
        ? null
        : new Intl.NumberFormat(r, {
            style: `currency`,
            currency: `USD`,
          }).format(e.price_usd_cents / 100);
  return (0, O.jsxs)(O.Fragment, {
    children: [
      (e.kind === `invite` || e.kind === `coins`) &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(`p`, { children: t(N(e), { amount: i(e.coins) }) }),
            (0, O.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: t(`offerPage.noCard`),
            }),
          ],
        }),
      e.kind === `trial` &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(`p`, {
              children: e.coins_per_period
                ? t(`offerPage.trialWithCoins`, {
                    tier: e.tier,
                    count: e.trial_days ?? 0,
                    amount: i(e.coins_per_period),
                  })
                : t(`offerPage.trial`, {
                    tier: e.tier,
                    count: e.trial_days ?? 0,
                  }),
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: a
                ? t(`offerPage.trialBillingPrice`, { price: a })
                : t(`offerPage.trialBilling`),
            }),
            e.can_create &&
              (0, O.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: t(`offerPage.trialCreator`),
              }),
          ],
        }),
      e.kind === `discount` &&
        (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(`p`, {
              children: t(`offerPage.discount`, {
                percent: e.percent_off,
                tier: e.tier,
                count: e.discount_months ?? 1,
              }),
            }),
            (0, O.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: a
                ? t(`offerPage.discountTermsPrice`, { price: a })
                : t(`offerPage.discountTerms`),
            }),
          ],
        }),
      e.expires_at &&
        (0, O.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: t(`offerPage.claimBy`, {
            date: new Date(e.expires_at).toLocaleDateString(r),
          }),
        }),
    ],
  });
}
