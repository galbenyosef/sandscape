// index-BKDksszn 09 — children
// Lines 2562-2712 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
function Mr({ isOpen: e, onClose: t, title: n, message: r }) {
  let [i, a] = (0, U.useState)(``),
    [o, s] = (0, U.useState)(!1),
    { toast: c } = h(),
    { t: l } = z(),
    u = l(`mailingList.title`, `Join the mailing list`),
    d = l(
      `mailingList.message`,
      `Get occasional Sandscape product news by email. This does not create an account or request creator access.`,
    );
  return e
    ? (0, W.jsx)(`div`, {
        className: `fixed inset-0 z-50 bg-black/50 flex items-center justify-center`,
        children: (0, W.jsx)(`div`, {
          className: `bg-background rounded-lg shadow-lg max-w-md w-full m-4 max-h-[90vh] overflow-y-auto`,
          children: (0, W.jsxs)(`div`, {
            className: `p-6`,
            children: [
              (0, W.jsxs)(`div`, {
                className: `flex justify-between items-center mb-4`,
                children: [
                  (0, W.jsx)(`h2`, {
                    className: `text-2xl font-bold`,
                    children: n || u,
                  }),
                  (0, W.jsx)(P, {
                    variant: `ghost`,
                    size: `icon`,
                    onClick: t,
                    children: (0, W.jsx)(On, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, W.jsx)(`p`, {
                className: `mb-6 text-muted-foreground`,
                children: r || d,
              }),
              (0, W.jsxs)(`form`, {
                onSubmit: async (e) => {
                  (e.preventDefault(), s(!0));
                  try {
                    let e = await jr.joinMailingList(i);
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
                            Ae(`waitlist_submit`, {
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
                  (0, W.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, W.jsx)(Ar, {
                        htmlFor: `email`,
                        children: l(`general.email`, `Email`),
                      }),
                      (0, W.jsx)(Er, {
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
                  (0, W.jsx)(P, {
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
var Nr = (0, U.createContext)(void 0);
function Pr({ children: e }) {
  let [t, n] = (0, U.useState)(!1),
    [r, i] = (0, U.useState)(void 0),
    a = (e) => {
      (i(e), n(!0));
    },
    o = () => {
      n(!1);
    };
  return (0, W.jsxs)(Nr.Provider, {
    value: { openWaitlistModal: a, closeWaitlistModal: o },
    children: [e, (0, W.jsx)(Mr, { isOpen: t, onClose: o, message: r })],
  });
}
