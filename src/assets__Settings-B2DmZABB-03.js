// assets__Settings-B2DmZABB 03 — children
// Lines 499-1015 of readable/assets__Settings-B2DmZABB.pretty.js (statement-aligned).
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
