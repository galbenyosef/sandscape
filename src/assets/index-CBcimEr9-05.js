// index-CBcimEr9 05 — children
// Lines 1514-1719 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var rr = Object.defineProperty,
  ir = H.forwardRef(
    ((e, t) => rr(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      return (0, U.jsx)(D.label, {
        ...e,
        ref: t,
        onMouseDown: (t) => {
          t.target.closest(`button, input, select, textarea`) ||
            (e.onMouseDown?.(t),
            !t.defaultPrevented && t.detail > 1 && t.preventDefault());
        },
      });
    }, `Label`),
  ),
  ar = M(
    `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
  ),
  or = H.forwardRef(({ className: e, ...t }, n) =>
    (0, U.jsx)(ir, { ref: n, className: x(ar(), e), ...t }),
  );
or.displayName = ir.displayName;
var sr = class {
  static async joinMailingList(e) {
    try {
      let { error: t } = await C.from(`mailing_list`).insert([
        {
          email: e.toLowerCase(),
          source: `client_mailing_list`,
          status: `subscribed`,
          creation_interest: !1,
        },
      ]);
      if (t) {
        if (t.code === `23505`)
          return {
            success: !0,
            inserted: !1,
            duplicate: !0,
            error: `This email is already on the mailing list.`,
          };
        throw t;
      }
      return { success: !0, inserted: !0 };
    } catch (e) {
      return (
        console.error(`Mailing list error:`, e),
        {
          success: !1,
          inserted: !1,
          error: `Failed to register. Please try again later.`,
        }
      );
    }
  }
};
function cr({ isOpen: e, onClose: t, title: n, message: r }) {
  let [i, a] = (0, H.useState)(``),
    [o, s] = (0, H.useState)(!1),
    { toast: c } = h(),
    { t: l } = R(),
    u = l(`mailingList.title`, `Join the mailing list`),
    d = l(
      `mailingList.message`,
      `Get occasional Sandscape product news by email. This does not create an account or request creator access.`,
    );
  return e
    ? (0, U.jsx)(`div`, {
        className: `fixed inset-0 z-50 bg-black/50 flex items-center justify-center`,
        children: (0, U.jsx)(`div`, {
          className: `bg-background rounded-lg shadow-lg max-w-md w-full m-4 max-h-[90vh] overflow-y-auto`,
          children: (0, U.jsxs)(`div`, {
            className: `p-6`,
            children: [
              (0, U.jsxs)(`div`, {
                className: `flex justify-between items-center mb-4`,
                children: [
                  (0, U.jsx)(`h2`, {
                    className: `text-2xl font-bold`,
                    children: n || u,
                  }),
                  (0, U.jsx)(P, {
                    variant: `ghost`,
                    size: `icon`,
                    onClick: t,
                    children: (0, U.jsx)(Nn, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, U.jsx)(`p`, {
                className: `mb-6 text-muted-foreground`,
                children: r || d,
              }),
              (0, U.jsxs)(`form`, {
                onSubmit: async (e) => {
                  (e.preventDefault(), s(!0));
                  try {
                    let e = await sr.joinMailingList(i);
                    e.success
                      ? (e.inserted
                          ? (c({
                              title: l(
                                `mailingList.successTitle`,
                                `Subscribed`,
                              ),
                              description: l(
                                `mailingList.successMessage`,
                                `You're on the mailing list.`,
                              ),
                            }),
                            Ne(`waitlist_submit`, {
                              method: `app_mailing_list`,
                              lead_source: `app_mailing_list`,
                              form_location: `app_waitlist_modal`,
                            }))
                          : c({
                              title: l(
                                `mailingList.alreadyRegisteredTitle`,
                                `Already subscribed`,
                              ),
                              description:
                                e.error ||
                                l(
                                  `mailingList.alreadyRegisteredMessage`,
                                  `That email is already on the mailing list.`,
                                ),
                            }),
                        t())
                      : c({
                          variant: `destructive`,
                          title: l(
                            `mailingList.errorTitle`,
                            `Subscription failed`,
                          ),
                          description:
                            e.error ||
                            l(
                              `mailingList.errorMessage`,
                              `There was a problem joining the mailing list. Please try again.`,
                            ),
                        });
                  } catch {
                    c({
                      variant: `destructive`,
                      title: l(`mailingList.errorTitle`, `Subscription failed`),
                      description: l(
                        `mailingList.errorMessage`,
                        `There was a problem joining the mailing list. Please try again.`,
                      ),
                    });
                  } finally {
                    s(!1);
                  }
                },
                className: `space-y-4`,
                children: [
                  (0, U.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, U.jsx)(or, {
                        htmlFor: `email`,
                        children: l(`general.email`, `Email`),
                      }),
                      (0, U.jsx)(nr, {
                        id: `email`,
                        type: `email`,
                        value: i,
                        onChange: (e) => a(e.target.value),
                        placeholder: l(
                          `mailingList.emailPlaceholder`,
                          `you@example.com`,
                        ),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, U.jsx)(P, {
                    type: `submit`,
                    className: `w-full`,
                    disabled: o,
                    children: o
                      ? l(`general.submitting`, `Submitting...`)
                      : l(`mailingList.join`, `Join mailing list`),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : null;
}
var lr = (0, H.createContext)(void 0);
function ur({ children: e }) {
  let [t, n] = (0, H.useState)(!1),
    [r, i] = (0, H.useState)(void 0),
    a = (e) => {
      (i(e), n(!0));
    },
    o = () => {
      n(!1);
    };
  return (0, U.jsxs)(lr.Provider, {
    value: { openWaitlistModal: a, closeWaitlistModal: o },
    children: [e, (0, U.jsx)(cr, { isOpen: t, onClose: o, message: r })],
  });
}
