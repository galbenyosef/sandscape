// Onboarding-CO_SgZrN 02 — children
// Lines 28-479 of readable/assets/Onboarding-CO_SgZrN.pretty.js (statement-aligned).
function S() {
  let { t: e } = d(),
    t = ee(),
    n = te(),
    [S] = ne(),
    {
      user: C,
      loading: w,
      onboardingStatus: T,
      completeOnboarding: me,
      updatePassword: he,
      requestCreationAccess: ge,
      onWaitlist: E,
      canCreate: D,
    } = ce(),
    { trackEvent: O } = se(),
    k = (0, b.useRef)(null),
    A = (0, b.useRef)(!1),
    [j, M] = (0, b.useState)(``),
    [N, P] = (0, b.useState)(null),
    [F, I] = (0, b.useState)(),
    [L, _e] = (0, b.useState)(!1),
    [R, ve] = (0, b.useState)(``),
    [z, ye] = (0, b.useState)(``),
    [B, be] = (0, b.useState)(!1),
    [V, H] = (0, b.useState)(!1),
    [U, xe] = (0, b.useState)(!1),
    [W, G] = (0, b.useState)([]),
    [K, q] = (0, b.useState)(null),
    J = n.state,
    Y = (0, b.useMemo)(
      () => _(S.get(`returnTo`) ?? J?.returnTo),
      [S, J?.returnTo],
    ),
    X = le(S.get(`entryPoint`)),
    Z = S.get(`provider`) ?? `email_otp`,
    Q = [
      `email_otp`,
      `password`,
      `google`,
      `github`,
      `apple`,
      `facebook`,
    ].includes(Z)
      ? Z
      : `email_otp`;
  ((0, b.useEffect)(() => {
    if (!N) {
      I(void 0);
      return;
    }
    let e = URL.createObjectURL(N);
    return (I(e), () => URL.revokeObjectURL(e));
  }, [N]),
    (0, b.useEffect)(() => {
      if (!(w || U || A.current)) {
        if (!C) {
          t(ue(Y, X), { replace: !0 });
          return;
        }
        T === `complete` && t(Y, { replace: !0 });
      }
    }, [X, w, t, T, U, Y, C]));
  let $ = () => {
      (O(`auth_completed`, {
        provider: Q,
        flow: `onboarding`,
        entry_point: X,
        destination_category: g(Y),
        is_new_user: m(C),
      }),
        t(Y, { replace: !0 }));
    },
    Se = async () => {
      if (!C) return [];
      let e = [];
      if (N)
        try {
          let e = await a.uploadAvatar(N, C.id);
          await a.updateProfile({ avatar_url: e.path });
        } catch {
          e.push(`avatar`);
        }
      if (!B && R)
        if (R.length < 8 || R !== z) e.push(`password`);
        else
          try {
            (await he(R), be(!0));
          } catch {
            e.push(`password`);
          }
      if (L && !D && !E)
        try {
          await ge();
        } catch {
          e.push(`creator_waitlist`);
        }
      return e;
    },
    Ce = async () => {
      let e = r(j);
      if (!U && !i(e)) {
        q(`onboarding.usernameRules`);
        return;
      }
      if (!B && R && R !== z) {
        q(`authPage.errors.passwordMismatch`);
        return;
      }
      (H(!0), q(null), G([]), (A.current = !0));
      try {
        U ||
          (await me(e),
          xe(!0),
          O(`onboarding_completed`, {
            provider: Q,
            flow: `onboarding`,
            entry_point: X,
            destination_category: g(Y),
            creator_waitlist_selected: L,
            avatar_selected: !!N,
            password_selected: !!R,
          }),
          C &&
            m(C) &&
            oe(C, { provider: Q, entryPoint: X, destinationCategory: g(Y) }));
        let t = await Se();
        (G(t), t.length === 0 && $());
      } catch (e) {
        A.current = !1;
        let t = y(e);
        (q(t.messageKey),
          O(`auth_error`, {
            provider: Q,
            flow: `onboarding`,
            entry_point: X,
            destination_category: g(Y),
            error_category: t.category,
          }));
      } finally {
        H(!1);
      }
    };
  return w || !C || (T === `loading` && !U)
    ? (0, x.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-background p-4`,
        children: (0, x.jsx)(c, {
          className: `h-8 w-8 animate-spin text-primary`,
          "aria-label": e(`general.loading`, `Loading...`),
        }),
      })
    : (0, x.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
        children: (0, x.jsxs)(v, {
          className: `w-full max-w-lg shadow-xl`,
          children: [
            (0, x.jsxs)(de, {
              children: [
                (0, x.jsx)(`h1`, {
                  className: `text-2xl font-semibold leading-none tracking-tight`,
                  children: U
                    ? e(`onboarding.completedTitle`, `Your account is ready`)
                    : e(`onboarding.title`, `Choose how you appear`),
                }),
                (0, x.jsx)(pe, {
                  children: U
                    ? e(
                        `onboarding.optionalRetryDescription`,
                        `Your public username is saved. You can retry optional steps or continue now.`,
                      )
                    : e(
                        `onboarding.description`,
                        `A public username is required. Everything else is optional and can be changed later.`,
                      ),
                }),
              ],
            }),
            (0, x.jsxs)(fe, {
              className: `space-y-6`,
              children: [
                K &&
                  (0, x.jsx)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive`,
                    children: e(K, e(`authPage.errors.generic`)),
                  }),
                W.length > 0 &&
                  (0, x.jsxs)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-sm`,
                    children: [
                      (0, x.jsx)(`p`, {
                        className: `font-medium`,
                        children: e(
                          `onboarding.optionalFailedTitle`,
                          `Some optional steps need attention`,
                        ),
                      }),
                      (0, x.jsx)(`ul`, {
                        className: `mt-2 list-disc space-y-1 ps-5 text-muted-foreground`,
                        children: W.map((t) =>
                          (0, x.jsx)(
                            `li`,
                            { children: e(`onboarding.optionalFailures.${t}`) },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                !U &&
                  (0, x.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, x.jsx)(h, {
                        htmlFor: `onboarding-username`,
                        children: e(`onboarding.username`, `Public username`),
                      }),
                      (0, x.jsx)(p, {
                        id: `onboarding-username`,
                        value: j,
                        onChange: (e) => M(e.target.value),
                        autoComplete: `username`,
                        maxLength: 30,
                        autoFocus: !0,
                        disabled: V,
                        "aria-describedby": `username-help`,
                      }),
                      (0, x.jsx)(`p`, {
                        id: `username-help`,
                        className: `text-xs text-muted-foreground`,
                        children: e(
                          `onboarding.usernameRules`,
                          `Use 3-30 letters, numbers, underscores, or hyphens. This is public and must not be an email address.`,
                        ),
                      }),
                    ],
                  }),
                (0, x.jsxs)(`div`, {
                  className: `space-y-3`,
                  children: [
                    (0, x.jsx)(h, {
                      children: e(`onboarding.avatar`, `Avatar (optional)`),
                    }),
                    (0, x.jsxs)(`div`, {
                      className: `flex items-center gap-4`,
                      children: [
                        (0, x.jsxs)(ae, {
                          className: `h-16 w-16`,
                          children: [
                            (0, x.jsx)(ie, {
                              src: F,
                              className: `object-cover`,
                            }),
                            (0, x.jsx)(f, {
                              children: (0, x.jsx)(l, { className: `h-7 w-7` }),
                            }),
                          ],
                        }),
                        (0, x.jsx)(`input`, {
                          ref: k,
                          type: `file`,
                          accept: `image/png,image/jpeg,image/webp`,
                          className: `hidden`,
                          onChange: (e) => P(e.target.files?.[0] ?? null),
                        }),
                        (0, x.jsxs)(o, {
                          type: `button`,
                          variant: `outline`,
                          disabled: V,
                          onClick: () => k.current?.click(),
                          children: [
                            (0, x.jsx)(re, { className: `mr-2 h-4 w-4` }),
                            e(`onboarding.chooseAvatar`, `Choose image`),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !B &&
                  (0, x.jsxs)(`div`, {
                    className: `space-y-3 rounded-lg border p-4`,
                    children: [
                      (0, x.jsxs)(`div`, {
                        children: [
                          (0, x.jsx)(h, {
                            htmlFor: `onboarding-password`,
                            children: e(
                              `onboarding.password`,
                              `Set a password (optional)`,
                            ),
                          }),
                          (0, x.jsx)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: e(
                              `onboarding.passwordHint`,
                              `You can keep using email codes and set a password later in Account security.`,
                            ),
                          }),
                        ],
                      }),
                      (0, x.jsx)(p, {
                        id: `onboarding-password`,
                        type: `password`,
                        autoComplete: `new-password`,
                        value: R,
                        onChange: (e) => ve(e.target.value),
                        placeholder: e(`authPage.newPassword`, `New password`),
                        minLength: 8,
                        disabled: V,
                      }),
                      R &&
                        (0, x.jsx)(p, {
                          type: `password`,
                          autoComplete: `new-password`,
                          value: z,
                          onChange: (e) => ye(e.target.value),
                          placeholder: e(
                            `authPage.confirmPassword`,
                            `Confirm password`,
                          ),
                          minLength: 8,
                          disabled: V,
                        }),
                    ],
                  }),
                (0, x.jsx)(`div`, {
                  className: `rounded-lg border p-4`,
                  children: D
                    ? (0, x.jsxs)(`div`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, x.jsx)(s, {
                            className: `mt-0.5 h-5 w-5 text-green-500`,
                          }),
                          (0, x.jsxs)(`div`, {
                            children: [
                              (0, x.jsx)(`p`, {
                                className: `font-medium`,
                                children: e(
                                  `onboarding.creatorEnabled`,
                                  `Creator access enabled`,
                                ),
                              }),
                              (0, x.jsx)(`p`, {
                                className: `text-xs text-muted-foreground`,
                                children: e(
                                  `onboarding.creatorEnabledHint`,
                                  `You can create and publish games now.`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      })
                    : E
                      ? (0, x.jsxs)(`div`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, x.jsx)(s, {
                              className: `mt-0.5 h-5 w-5 text-primary`,
                            }),
                            (0, x.jsxs)(`div`, {
                              children: [
                                (0, x.jsx)(`p`, {
                                  className: `font-medium`,
                                  children: e(
                                    `onboarding.alreadyOnWaitlist`,
                                    `You're on the creator waitlist`,
                                  ),
                                }),
                                (0, x.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: e(
                                    `onboarding.queuePreserved`,
                                    `Your original queue position is preserved.`,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, x.jsxs)(`div`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, x.jsx)(u, {
                              id: `creator-waitlist`,
                              checked: L,
                              onCheckedChange: (e) => _e(e === !0),
                              disabled: V,
                            }),
                            (0, x.jsxs)(`div`, {
                              children: [
                                (0, x.jsx)(h, {
                                  htmlFor: `creator-waitlist`,
                                  children: e(
                                    `onboarding.joinCreatorWaitlist`,
                                    `Join creator waitlist (optional)`,
                                  ),
                                }),
                                (0, x.jsx)(`p`, {
                                  className: `mt-1 text-xs text-muted-foreground`,
                                  children: e(
                                    `onboarding.creatorWaitlistHint`,
                                    `Request access to create games. This is separate from creating your account and joining the mailing list.`,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                }),
                (0, x.jsxs)(`div`, {
                  className: `flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,
                  children: [
                    U &&
                      (0, x.jsx)(o, {
                        type: `button`,
                        variant: `ghost`,
                        disabled: V,
                        onClick: $,
                        children: e(
                          `onboarding.continueWithoutOptional`,
                          `Continue without optional steps`,
                        ),
                      }),
                    (0, x.jsxs)(o, {
                      type: `button`,
                      disabled: V,
                      onClick: () => void Ce(),
                      children: [
                        V &&
                          (0, x.jsx)(c, {
                            className: `mr-2 h-4 w-4 animate-spin`,
                          }),
                        U
                          ? e(
                              `onboarding.retryOptional`,
                              `Retry optional steps`,
                            )
                          : e(`onboarding.finish`, `Finish setup`),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
}
