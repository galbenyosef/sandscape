// Onboarding-smTSGAtn 02 — children
// Lines 38-457 of readable/assets/Onboarding-smTSGAtn.pretty.js (statement-aligned).
function x() {
  let { t: e } = u(),
    t = ee(),
    n = te(),
    [x] = ne(),
    {
      user: S,
      loading: C,
      onboardingStatus: w,
      completeOnboarding: _e,
      updatePassword: ve,
      canCreate: T,
    } = le(),
    { trackEvent: E } = pe(),
    D = (0, y.useRef)(null),
    O = (0, y.useRef)(!1),
    [k, A] = (0, y.useState)(``),
    [j, M] = (0, y.useState)(null),
    [N, P] = (0, y.useState)(),
    [F, ye] = (0, y.useState)(!1),
    [I, be] = (0, y.useState)(``),
    [L, xe] = (0, y.useState)(``),
    [R, Se] = (0, y.useState)(!1),
    [z, B] = (0, y.useState)(!1),
    [V, Ce] = (0, y.useState)(!1),
    [H, U] = (0, y.useState)([]),
    [W, G] = (0, y.useState)(null),
    K = n.state,
    q = (0, y.useMemo)(
      () => ue(x.get(`returnTo`) ?? K?.returnTo),
      [x, K?.returnTo],
    ),
    J = h(x.get(`entryPoint`)),
    Y = ge(q),
    X = Y && F ? de : q,
    Z = x.get(`provider`) ?? `email_otp`,
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
  ((0, y.useEffect)(() => {
    if (!j) {
      P(void 0);
      return;
    }
    let e = URL.createObjectURL(j);
    return (P(e), () => URL.revokeObjectURL(e));
  }, [j]),
    (0, y.useEffect)(() => {
      if (!(C || V || O.current)) {
        if (!S) {
          t(fe(q, J), { replace: !0 });
          return;
        }
        w === `complete` && t(q, { replace: !0 });
      }
    }, [J, C, t, w, V, q, S]));
  let $ = () => {
      (E(`auth_completed`, {
        provider: Q,
        flow: `onboarding`,
        entry_point: J,
        destination_category: m(X),
        is_new_user: d(S),
      }),
        t(X, { replace: !0 }));
    },
    we = async () => {
      if (!S) return [];
      let e = [];
      if (j)
        try {
          let e = await i.uploadAvatar(j, S.id);
          await i.updateProfile({ avatar_url: e.path });
        } catch {
          e.push(`avatar`);
        }
      if (!R && I)
        if (I.length < 8 || I !== L) e.push(`password`);
        else
          try {
            (await ve(I), Se(!0));
          } catch {
            e.push(`password`);
          }
      return e;
    },
    Te = async () => {
      let e = r(k);
      if (!V && !re(e)) {
        G(`onboarding.usernameRules`);
        return;
      }
      if (!R && I && I !== L) {
        G(`authPage.errors.passwordMismatch`);
        return;
      }
      (B(!0), G(null), U([]), (O.current = !0));
      try {
        V ||
          (await _e(e),
          Ce(!0),
          E(`onboarding_completed`, {
            provider: Q,
            flow: `onboarding`,
            entry_point: J,
            destination_category: m(X),
            subscribe_selected: F,
            avatar_selected: !!j,
            password_selected: !!I,
          }),
          S &&
            d(S) &&
            ce(S, { provider: Q, entryPoint: J, destinationCategory: m(q) }));
        let t = await we();
        (U(t), t.length === 0 && $());
      } catch (e) {
        O.current = !1;
        let t = v(e);
        (G(t.messageKey),
          E(`auth_error`, {
            provider: Q,
            flow: `onboarding`,
            entry_point: J,
            destination_category: m(q),
            error_category: t.category,
          }));
      } finally {
        B(!1);
      }
    };
  return C || !S || (w === `loading` && !V)
    ? (0, b.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-background p-4`,
        children: (0, b.jsx)(o, {
          className: `h-8 w-8 animate-spin text-primary`,
          "aria-label": e(`general.loading`, `Loading...`),
        }),
      })
    : (0, b.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
        children: (0, b.jsxs)(_, {
          className: `w-full max-w-lg shadow-xl`,
          children: [
            (0, b.jsxs)(me, {
              children: [
                (0, b.jsx)(`h1`, {
                  className: `text-2xl font-semibold leading-none tracking-tight`,
                  children: V
                    ? e(`onboarding.completedTitle`, `Your account is ready`)
                    : e(`onboarding.title`, `Choose how you appear`),
                }),
                (0, b.jsx)(g, {
                  children: V
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
            (0, b.jsxs)(he, {
              className: `space-y-6`,
              children: [
                W &&
                  (0, b.jsx)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive`,
                    children: e(W, e(`authPage.errors.generic`)),
                  }),
                H.length > 0 &&
                  (0, b.jsxs)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-sm`,
                    children: [
                      (0, b.jsx)(`p`, {
                        className: `font-medium`,
                        children: e(
                          `onboarding.optionalFailedTitle`,
                          `Some optional steps need attention`,
                        ),
                      }),
                      (0, b.jsx)(`ul`, {
                        className: `mt-2 list-disc space-y-1 ps-5 text-muted-foreground`,
                        children: H.map((t) =>
                          (0, b.jsx)(
                            `li`,
                            { children: e(`onboarding.optionalFailures.${t}`) },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                !V &&
                  (0, b.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, b.jsx)(f, {
                        htmlFor: `onboarding-username`,
                        children: e(`onboarding.username`, `Public username`),
                      }),
                      (0, b.jsx)(p, {
                        id: `onboarding-username`,
                        value: k,
                        onChange: (e) => A(e.target.value),
                        autoComplete: `username`,
                        maxLength: 30,
                        autoFocus: !0,
                        disabled: z,
                        "aria-describedby": `username-help`,
                      }),
                      (0, b.jsx)(`p`, {
                        id: `username-help`,
                        className: `text-xs text-muted-foreground`,
                        children: e(
                          `onboarding.usernameRules`,
                          `Use 3-30 letters, numbers, underscores, or hyphens. This is public and must not be an email address.`,
                        ),
                      }),
                    ],
                  }),
                (0, b.jsxs)(`div`, {
                  className: `space-y-3`,
                  children: [
                    (0, b.jsx)(f, {
                      children: e(`onboarding.avatar`, `Avatar (optional)`),
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `flex items-center gap-4`,
                      children: [
                        (0, b.jsxs)(se, {
                          className: `h-16 w-16`,
                          children: [
                            (0, b.jsx)(oe, {
                              src: N,
                              className: `object-cover`,
                            }),
                            (0, b.jsx)(ae, {
                              children: (0, b.jsx)(c, { className: `h-7 w-7` }),
                            }),
                          ],
                        }),
                        (0, b.jsx)(`input`, {
                          ref: D,
                          type: `file`,
                          accept: `image/png,image/jpeg,image/webp`,
                          className: `hidden`,
                          onChange: (e) => M(e.target.files?.[0] ?? null),
                        }),
                        (0, b.jsxs)(a, {
                          type: `button`,
                          variant: `outline`,
                          disabled: z,
                          onClick: () => D.current?.click(),
                          children: [
                            (0, b.jsx)(s, { className: `mr-2 h-4 w-4` }),
                            e(`onboarding.chooseAvatar`, `Choose image`),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !R &&
                  (0, b.jsxs)(`div`, {
                    className: `space-y-3 rounded-lg border p-4`,
                    children: [
                      (0, b.jsxs)(`div`, {
                        children: [
                          (0, b.jsx)(f, {
                            htmlFor: `onboarding-password`,
                            children: e(
                              `onboarding.password`,
                              `Set a password (optional)`,
                            ),
                          }),
                          (0, b.jsx)(`p`, {
                            className: `text-xs text-muted-foreground`,
                            children: e(
                              `onboarding.passwordHint`,
                              `You can keep using email codes and set a password later in Account security.`,
                            ),
                          }),
                        ],
                      }),
                      (0, b.jsx)(p, {
                        id: `onboarding-password`,
                        type: `password`,
                        autoComplete: `new-password`,
                        value: I,
                        onChange: (e) => be(e.target.value),
                        placeholder: e(`authPage.newPassword`, `New password`),
                        minLength: 8,
                        disabled: z,
                      }),
                      I &&
                        (0, b.jsx)(p, {
                          type: `password`,
                          autoComplete: `new-password`,
                          value: L,
                          onChange: (e) => xe(e.target.value),
                          placeholder: e(
                            `authPage.confirmPassword`,
                            `Confirm password`,
                          ),
                          minLength: 8,
                          disabled: z,
                        }),
                    ],
                  }),
                (T || Y) &&
                  (0, b.jsx)(`div`, {
                    className: `rounded-lg border p-4`,
                    children: T
                      ? (0, b.jsxs)(`div`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, b.jsx)(ie, {
                              className: `mt-0.5 h-5 w-5 text-green-500`,
                            }),
                            (0, b.jsxs)(`div`, {
                              children: [
                                (0, b.jsx)(`p`, {
                                  className: `font-medium`,
                                  children: e(
                                    `onboarding.creatorEnabled`,
                                    `Creator access enabled`,
                                  ),
                                }),
                                (0, b.jsx)(`p`, {
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
                      : (0, b.jsxs)(`div`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, b.jsx)(l, {
                              id: `subscribe-for-creation`,
                              checked: F,
                              onCheckedChange: (e) => ye(e === !0),
                              disabled: z,
                            }),
                            (0, b.jsxs)(`div`, {
                              children: [
                                (0, b.jsx)(f, {
                                  htmlFor: `subscribe-for-creation`,
                                  children: e(
                                    `onboarding.subscribeForCreation`,
                                    `Join the alpha (optional)`,
                                  ),
                                }),
                                (0, b.jsx)(`p`, {
                                  className: `mt-1 text-xs text-muted-foreground`,
                                  children: e(
                                    `onboarding.subscribeForCreationHint`,
                                    `The alpha is open. We'll take you to the plans when you finish, so you can start creating right away.`,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                  }),
                (0, b.jsxs)(`div`, {
                  className: `flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,
                  children: [
                    V &&
                      (0, b.jsx)(a, {
                        type: `button`,
                        variant: `ghost`,
                        disabled: z,
                        onClick: $,
                        children: e(
                          `onboarding.continueWithoutOptional`,
                          `Continue without optional steps`,
                        ),
                      }),
                    (0, b.jsxs)(a, {
                      type: `button`,
                      disabled: z,
                      onClick: () => void Te(),
                      children: [
                        z &&
                          (0, b.jsx)(o, {
                            className: `mr-2 h-4 w-4 animate-spin`,
                          }),
                        V
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
