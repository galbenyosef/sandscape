// Settings-B2DmZABB 04 — classname
// Lines 1016-1352 of readable/assets/Settings-B2DmZABB.pretty.js (statement-aligned).
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
