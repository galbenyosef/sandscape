// Settings-DLSOzPRp 03 — children
// Lines 678-1254 of readable/assets/Settings-DLSOzPRp.pretty.js (statement-aligned).
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
