// Auth-D5wV77IC 05 — classname
// Lines 921-1719 of readable/assets/Auth-D5wV77IC.pretty.js (statement-aligned).
function Le() {
  let { t: e } = y(),
    t = i(),
    n = a(),
    [r] = o(),
    {
      user: p,
      loading: m,
      onboardingStatus: h,
      requestEmailOtp: g,
      verifyEmailOtp: _,
      signInWithOAuth: v,
      login: b,
      resetPassword: ue,
      updatePassword: de,
      refreshAccountState: fe,
    } = te(),
    { hasConsent: pe, trackEvent: D } = C(),
    me = r.get(`mode`),
    [O, k] = (0, A.useState)(me && Ne.has(me) ? me : `chooser`),
    [j, M] = (0, A.useState)(``),
    [N, P] = (0, A.useState)(``),
    [he, ge] = (0, A.useState)(``),
    [F, I] = (0, A.useState)(``),
    [L, R] = (0, A.useState)(!1),
    [_e, z] = (0, A.useState)(null),
    [B, ye] = (0, A.useState)(null),
    [V, be] = (0, A.useState)(0),
    [xe, Se] = (0, A.useState)(0),
    [H, Ce] = (0, A.useState)(0),
    U = (0, A.useRef)(!1),
    we = (0, A.useRef)(!1),
    W = (0, A.useMemo)(() => {
      let e = n.state;
      return ne(r.get(`returnTo`) ?? e?.returnTo);
    }, [n.state, r]),
    G = re(r.get(`entryPoint`)),
    K = (0, A.useCallback)(
      (e, t) => ({
        ...(e ? { provider: e } : {}),
        ...(t ? { flow: t } : {}),
        entry_point: G,
        destination_category: T(W),
      }),
      [G, W],
    ),
    q = (0, A.useCallback)((e) => {
      ye(e);
    }, []);
  ((0, A.useEffect)(() => {
    !pe || U.current || ((U.current = !0), D(`auth_view`, K()));
  }, [K, pe, D]),
    (0, A.useEffect)(() => {
      let e = r.get(`errorCategory`);
      e &&
        z({
          category: e === `provider_denied` ? `provider_denied` : `callback`,
          messageKey:
            e === `provider_denied`
              ? `authPage.errors.providerDenied`
              : `authPage.errors.callback`,
        });
    }, [r]),
    (0, A.useEffect)(() => {
      if (!xe) return;
      let e = () => Ce(Math.max(0, Math.ceil((xe - Date.now()) / 1e3)));
      e();
      let t = window.setInterval(e, 1e3);
      return () => window.clearInterval(t);
    }, [xe]),
    (0, A.useEffect)(() => {
      if (we.current || m || !p || h === `loading` || O === `password-update`)
        return;
      we.current = !0;
      let e = `${p.app_metadata?.provider ?? `email`}`,
        n = e === `email` ? `email_otp` : Pe.has(e) ? e : `email_otp`,
        r = ee(p);
      (r && x(p, { provider: n, entryPoint: G, destinationCategory: T(W) }),
        h === `required`
          ? t(Ie(W, G, n), { replace: !0 })
          : h === `complete` &&
            (D(`auth_completed`, {
              ...K(n, `sign_in_or_create`),
              is_new_user: r,
            }),
            t(W, { replace: !0 })));
    }, [K, m, G, O, t, h, W, D, p]));
  let J = () => {
      (ye(null), be((e) => e + 1));
    },
    Te = () =>
      Q.turnstileSiteKey && !B
        ? (z({
            category: `captcha`,
            messageKey: `authPage.errors.captchaRequired`,
          }),
          !1)
        : !0,
    Y = (e, t, n) => {
      let r = le(e);
      (z(r), D(`auth_error`, { ...K(t, n), error_category: r.category }));
    },
    Ee = async (e, n) => {
      D(`auth_verified`, K(e, n));
      let r = await ie({
          provider: e,
          entryPoint: G,
          destinationCategory: T(W),
        }),
        i = await fe();
      if (i === `required`) {
        t(Ie(W, G, e), { replace: !0 });
        return;
      }
      if (i === `complete`) {
        (D(`auth_completed`, { ...K(e, n), is_new_user: r }),
          t(W, { replace: !0 }));
        return;
      }
      throw Error(`Profile state unavailable`);
    },
    De = async () => {
      let e = j.trim().toLowerCase();
      if (!e || !Te()) {
        e ||
          z({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (R(!0),
        z(null),
        D(`auth_method_selected`, K(`email_otp`, `sign_in_or_create`)));
      try {
        (await g(e, B ?? void 0, E(W, `email_otp`, G)),
          M(e),
          I(``),
          k(`otp`),
          Se(Date.now() + Q.resendCooldownSeconds * 1e3),
          D(`auth_email_sent`, K(`email_otp`, `sign_in_or_create`)));
      } catch (e) {
        Y(e, `email_otp`, `sign_in_or_create`);
      } finally {
        (R(!1), J());
      }
    },
    Oe = async () => {
      if (!Me(F)) {
        z({
          category: `validation`,
          messageKey: `authPage.errors.codeRequired`,
        });
        return;
      }
      (R(!0), z(null));
      try {
        (await _(j, F), await Ee(`email_otp`, `sign_in_or_create`));
      } catch (e) {
        Y(e, `email_otp`, `sign_in_or_create`);
      } finally {
        R(!1);
      }
    },
    ke = async (e) => {
      (R(!0), z(null), D(`auth_method_selected`, K(e, `oauth`)));
      try {
        let t = new URL(E(W, `oauth`, G));
        (t.searchParams.set(`provider`, e),
          window.sessionStorage.setItem(`sandscape.auth.provider`, e),
          await v(e, t.toString()));
      } catch (t) {
        (Y(t, e, `oauth`),
          window.sessionStorage.removeItem(`sandscape.auth.provider`),
          R(!1));
      }
    },
    Z = async () => {
      let e = j.trim().toLowerCase();
      if (!e || !N || !Te()) {
        (!e || !N) &&
          z({
            category: `validation`,
            messageKey: `authPage.errors.credentialsRequired`,
          });
        return;
      }
      (R(!0),
        z(null),
        D(`auth_method_selected`, K(`password`, `password_sign_in`)));
      try {
        (await b(e, N, B ?? void 0), await Ee(`password`, `password_sign_in`));
      } catch (e) {
        Y(e, `password`, `password_sign_in`);
      } finally {
        (R(!1), J());
      }
    },
    Le = async () => {
      let e = j.trim().toLowerCase();
      if (!e || !Te()) {
        e ||
          z({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (R(!0), z(null));
      try {
        (await ue(e, E(W, `recovery`, G), B ?? void 0),
          k(`confirmation`),
          D(`auth_email_sent`, K(`password`, `password_recovery`)));
      } catch (e) {
        Y(e, `password`, `password_recovery`);
      } finally {
        (R(!1), J());
      }
    },
    Re = async () => {
      if (N.length < 8) {
        z({
          category: `validation`,
          messageKey: `authPage.errors.passwordTooShort`,
        });
        return;
      }
      if (N !== he) {
        z({
          category: `validation`,
          messageKey: `authPage.errors.passwordMismatch`,
        });
        return;
      }
      if (!p) {
        z({
          category: `callback`,
          messageKey: `authPage.errors.recoverySession`,
        });
        return;
      }
      (R(!0), z(null));
      try {
        (await de(N),
          D(`auth_completed`, {
            ...K(`password`, `password_recovery`),
            is_new_user: !1,
          }),
          t(W, { replace: !0 }));
      } catch (e) {
        Y(e, `password`, `password_recovery`);
      } finally {
        R(!1);
      }
    },
    $ = () => {
      (k(`chooser`), P(``), ge(``), I(``), z(null), J());
    },
    ze = _e ? e(_e.messageKey, e(`authPage.errors.generic`)) : null;
  return m || (p && h === `loading` && O !== `password-update`)
    ? (0, X.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary p-4`,
        children: (0, X.jsx)(u, {
          className: `h-8 w-8 animate-spin text-primary`,
          "aria-label": e(`general.loading`, `Loading...`),
        }),
      })
    : (0, X.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
        children: (0, X.jsxs)(ce, {
          className: `w-full max-w-md border-border/80 shadow-xl`,
          children: [
            (0, X.jsxs)(ae, {
              className: `space-y-3 text-center`,
              children: [
                (0, X.jsx)(`img`, {
                  src: `/Sandscape_Logo_White_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:block hidden`,
                }),
                (0, X.jsx)(`img`, {
                  src: `/Sandscape_Logo_Black_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:hidden`,
                }),
                (0, X.jsx)(`h1`, {
                  className: `text-2xl font-semibold leading-none tracking-tight`,
                  children:
                    O === `otp`
                      ? e(`authPage.codeTitle`, `Enter your code`)
                      : O === `password-update`
                        ? e(
                            `authPage.updatePasswordTitle`,
                            `Set a new password`,
                          )
                        : O === `recovery`
                          ? e(`authPage.recoveryTitle`, `Reset your password`)
                          : O === `confirmation`
                            ? e(`authPage.checkEmailTitle`, `Check your email`)
                            : O === `password-signin`
                              ? e(`authPage.signInTitle`, `Sign in`)
                              : e(
                                  `authPage.title`,
                                  `Sign in or create an account`,
                                ),
                }),
                O !== `password-signin` &&
                  (0, X.jsx)(se, {
                    children:
                      O === `otp`
                        ? e(
                            `authPage.codeDescription`,
                            `Enter the verification code we sent. The same flow works for new and existing accounts.`,
                          )
                        : O === `password-update`
                          ? e(
                              `authPage.updatePasswordDescription`,
                              `Choose a secure password for your Sandscape account.`,
                            )
                          : O === `recovery`
                            ? e(
                                `authPage.recoveryDescription`,
                                `We'll email a secure password-reset link if the address can receive one.`,
                              )
                            : O === `confirmation`
                              ? e(
                                  `authPage.confirmRecoveryDescription`,
                                  `If the address can receive a reset email, it will arrive shortly.`,
                                )
                              : e(
                                  `authPage.description`,
                                  `Continue with a provider or use your email. Account creation is open to everyone.`,
                                ),
                  }),
              ],
            }),
            (0, X.jsxs)(oe, {
              className: `space-y-4`,
              children: [
                ze &&
                  (0, X.jsx)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive`,
                    children: ze,
                  }),
                O === `chooser` &&
                  (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `space-y-2`,
                        children: Fe.filter((e) => e.enabled).map(
                          ({ provider: t, icon: n }) =>
                            (0, X.jsxs)(
                              s,
                              {
                                type: `button`,
                                variant: `outline`,
                                className: `w-full justify-center gap-2`,
                                disabled: L,
                                onClick: () => ke(t),
                                children: [
                                  n,
                                  e(
                                    `authPage.continueWith.${t}`,
                                    `Continue with ${t}`,
                                  ),
                                ],
                              },
                              t,
                            ),
                        ),
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `relative py-1`,
                        "aria-hidden": `true`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center`,
                            children: (0, X.jsx)(`span`, {
                              className: `w-full border-t`,
                            }),
                          }),
                          (0, X.jsx)(`div`, {
                            className: `relative flex justify-center text-xs uppercase`,
                            children: (0, X.jsx)(`span`, {
                              className: `bg-card px-2 text-muted-foreground`,
                              children: e(`authPage.or`, `or`),
                            }),
                          }),
                        ],
                      }),
                      (0, X.jsxs)(`form`, {
                        className: `space-y-4`,
                        onSubmit: (e) => {
                          (e.preventDefault(), De());
                        },
                        children: [
                          (0, X.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, X.jsx)(w, {
                                htmlFor: `auth-email`,
                                children: e(`general.email`, `Email`),
                              }),
                              (0, X.jsx)(S, {
                                id: `auth-email`,
                                type: `email`,
                                autoComplete: `email`,
                                value: j,
                                onChange: (e) => M(e.target.value),
                                placeholder: e(
                                  `authPage.emailPlaceholder`,
                                  `you@example.com`,
                                ),
                                disabled: L,
                                required: !0,
                              }),
                            ],
                          }),
                          (0, X.jsx)(Ae, {
                            siteKey: Q.turnstileSiteKey,
                            resetKey: V,
                            onTokenChange: q,
                          }),
                          (0, X.jsxs)(s, {
                            type: `submit`,
                            className: `w-full`,
                            disabled: L,
                            children: [
                              L
                                ? (0, X.jsx)(u, {
                                    className: `mr-2 h-4 w-4 animate-spin`,
                                  })
                                : (0, X.jsx)(d, { className: `mr-2 h-4 w-4` }),
                              e(
                                `authPage.continueWithEmail`,
                                `Continue with email`,
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: () => {
                          (k(`password-signin`), z(null));
                        },
                        children: [
                          (0, X.jsx)(l, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.usePassword`,
                            `Sign in with a password instead`,
                          ),
                        ],
                      }),
                    ],
                  }),
                O === `otp` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Oe());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `auth-code`,
                            children: e(
                              `authPage.codeLabel`,
                              `Verification code`,
                            ),
                          }),
                          (0, X.jsx)(S, {
                            id: `auth-code`,
                            value: F,
                            onChange: (e) => I(je(e.target.value)),
                            inputMode: `numeric`,
                            autoComplete: `one-time-code`,
                            pattern: `[0-9]{6,10}`,
                            maxLength: 10,
                            className: `text-center text-xl tracking-[0.35em]`,
                            autoFocus: !0,
                            disabled: L,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L || !Me(F),
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.verifyCode`, `Verify code`),
                        ],
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2`,
                        children: [
                          (0, X.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled:
                              L || H > 0 || !!(Q.turnstileSiteKey && !B),
                            onClick: () => void De(),
                            children:
                              H > 0
                                ? e(
                                    `authPage.resendCountdown`,
                                    `Resend in {{seconds}}s`,
                                    { seconds: H },
                                  )
                                : e(`authPage.resendCode`, `Resend code`),
                          }),
                          (0, X.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled: L,
                            onClick: $,
                            children: e(`authPage.changeEmail`, `Change email`),
                          }),
                        ],
                      }),
                      Q.turnstileSiteKey &&
                        H === 0 &&
                        (0, X.jsx)(Ae, {
                          siteKey: Q.turnstileSiteKey,
                          resetKey: V,
                          onTokenChange: q,
                        }),
                    ],
                  }),
                O === `password-signin` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Z());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `password-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, X.jsx)(S, {
                            id: `password-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: j,
                            onChange: (e) => M(e.target.value),
                            disabled: L,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `auth-password`,
                            children: e(`authPage.password`, `Password`),
                          }),
                          (0, X.jsx)(S, {
                            id: `auth-password`,
                            type: `password`,
                            autoComplete: `current-password`,
                            value: N,
                            onChange: (e) => P(e.target.value),
                            disabled: L,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsx)(Ae, {
                        siteKey: Q.turnstileSiteKey,
                        resetKey: V,
                        onTokenChange: q,
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L,
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(
                            `authPage.signInWithPassword`,
                            `Sign in with password`,
                          ),
                        ],
                      }),
                      (0, X.jsx)(s, {
                        type: `button`,
                        variant: `link`,
                        className: `w-full`,
                        onClick: () => k(`recovery`),
                        children: e(
                          `authPage.forgotPassword`,
                          `Forgot password?`,
                        ),
                      }),
                      (0, X.jsx)(`p`, {
                        className: `text-center text-xs text-muted-foreground`,
                        children: e(
                          `authPage.passwordSigninNewAccountHint`,
                          `New to Sandscape? Go back and continue with email. You can set a password while setting up your account.`,
                        ),
                      }),
                      (0, X.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: $,
                        children: [
                          (0, X.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                O === `recovery` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Le());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `recovery-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, X.jsx)(S, {
                            id: `recovery-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: j,
                            onChange: (e) => M(e.target.value),
                            disabled: L,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsx)(Ae, {
                        siteKey: Q.turnstileSiteKey,
                        resetKey: V,
                        onTokenChange: q,
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L,
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.sendRecovery`, `Send reset link`),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: $,
                        children: [
                          (0, X.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                O === `password-update` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Re());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `new-password`,
                            children: e(`authPage.newPassword`, `New password`),
                          }),
                          (0, X.jsx)(S, {
                            id: `new-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: N,
                            onChange: (e) => P(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `confirm-password`,
                            children: e(
                              `authPage.confirmPassword`,
                              `Confirm password`,
                            ),
                          }),
                          (0, X.jsx)(S, {
                            id: `confirm-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: he,
                            onChange: (e) => ge(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L || !p,
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.updatePassword`, `Update password`),
                        ],
                      }),
                    ],
                  }),
                O === `confirmation` &&
                  (0, X.jsxs)(`div`, {
                    className: `space-y-4 text-center`,
                    children: [
                      (0, X.jsx)(f, {
                        className: `mx-auto h-12 w-12 text-primary`,
                      }),
                      (0, X.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: e(
                          `authPage.genericEmailNotice`,
                          `For privacy, this message is the same whether or not an account already exists.`,
                        ),
                      }),
                      (0, X.jsx)(s, {
                        type: `button`,
                        variant: `outline`,
                        className: `w-full`,
                        onClick: $,
                        children: e(
                          `authPage.backToOptions`,
                          `Back to sign-in options`,
                        ),
                      }),
                    ],
                  }),
                (0, X.jsx)(`p`, {
                  className: `pt-2 text-center text-xs text-muted-foreground`,
                  children: (0, X.jsx)(ve, {
                    i18nKey: `authPage.legal`,
                    defaults: `By continuing, you agree to Sandscape's <terms>Terms</terms> and acknowledge the <privacy>Privacy Policy</privacy>.`,
                    components: {
                      terms: (0, X.jsx)(`a`, {
                        className: `underline underline-offset-2 hover:text-foreground`,
                        href: `/about/terms`,
                      }),
                      privacy: (0, X.jsx)(`a`, {
                        className: `underline underline-offset-2 hover:text-foreground`,
                        href: `/about/privacy`,
                      }),
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
      });
}
