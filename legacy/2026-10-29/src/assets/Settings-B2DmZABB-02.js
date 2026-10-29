// Settings-B2DmZABB 02 — classname
// Lines 323-498 of readable/assets/Settings-B2DmZABB.pretty.js (statement-aligned).
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
