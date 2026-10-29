// Auth-CwLKi-8L 05 — classname
// Lines 921-1719 of readable/assets/Auth-CwLKi-8L.pretty.js (statement-aligned).
function Ie() {
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
      resetPassword: le,
      updatePassword: ue,
      refreshAccountState: de,
    } = C(),
    { hasConsent: fe, trackEvent: O } = re(),
    pe = r.get(`mode`),
    [k, A] = (0, j.useState)(pe && Me.has(pe) ? pe : `chooser`),
    [M, N] = (0, j.useState)(``),
    [P, F] = (0, j.useState)(``),
    [me, he] = (0, j.useState)(``),
    [I, L] = (0, j.useState)(``),
    [R, z] = (0, j.useState)(!1),
    [ge, B] = (0, j.useState)(null),
    [V, ve] = (0, j.useState)(null),
    [H, ye] = (0, j.useState)(0),
    [be, xe] = (0, j.useState)(0),
    [U, Se] = (0, j.useState)(0),
    W = (0, j.useRef)(!1),
    Ce = (0, j.useRef)(!1),
    G = (0, j.useMemo)(() => {
      let e = n.state;
      return te(r.get(`returnTo`) ?? e?.returnTo);
    }, [n.state, r]),
    K = ne(r.get(`entryPoint`)),
    q = (0, j.useCallback)(
      (e, t) => ({
        ...(e ? { provider: e } : {}),
        ...(t ? { flow: t } : {}),
        entry_point: K,
        destination_category: E(G),
      }),
      [K, G],
    ),
    J = (0, j.useCallback)((e) => {
      ve(e);
    }, []);
  ((0, j.useEffect)(() => {
    !fe || W.current || ((W.current = !0), O(`auth_view`, q()));
  }, [q, fe, O]),
    (0, j.useEffect)(() => {
      let e = r.get(`errorCategory`);
      e &&
        B({
          category: e === `provider_denied` ? `provider_denied` : `callback`,
          messageKey:
            e === `provider_denied`
              ? `authPage.errors.providerDenied`
              : `authPage.errors.callback`,
        });
    }, [r]),
    (0, j.useEffect)(() => {
      if (!be) return;
      let e = () => Se(Math.max(0, Math.ceil((be - Date.now()) / 1e3)));
      e();
      let t = window.setInterval(e, 1e3);
      return () => window.clearInterval(t);
    }, [be]),
    (0, j.useEffect)(() => {
      if (Ce.current || m || !p || h === `loading` || k === `password-update`)
        return;
      Ce.current = !0;
      let e = `${p.app_metadata?.provider ?? `email`}`,
        n = e === `email` ? `email_otp` : Ne.has(e) ? e : `email_otp`,
        r = x(p);
      (r && S(p, { provider: n, entryPoint: K, destinationCategory: E(G) }),
        h === `required`
          ? t(Fe(G, K, n), { replace: !0 })
          : h === `complete` &&
            (O(`auth_completed`, {
              ...q(n, `sign_in_or_create`),
              is_new_user: r,
            }),
            t(G, { replace: !0 })));
    }, [q, m, K, k, t, h, G, O, p]));
  let Y = () => {
      (ve(null), ye((e) => e + 1));
    },
    we = () =>
      $.turnstileSiteKey && !V
        ? (B({
            category: `captcha`,
            messageKey: `authPage.errors.captchaRequired`,
          }),
          !1)
        : !0,
    X = (e, t, n) => {
      let r = ce(e);
      (B(r), O(`auth_error`, { ...q(t, n), error_category: r.category }));
    },
    Te = async (e, n) => {
      O(`auth_verified`, q(e, n));
      let r = await ee({
          provider: e,
          entryPoint: K,
          destinationCategory: E(G),
        }),
        i = await de();
      if (i === `required`) {
        t(Fe(G, K, e), { replace: !0 });
        return;
      }
      if (i === `complete`) {
        (O(`auth_completed`, { ...q(e, n), is_new_user: r }),
          t(G, { replace: !0 }));
        return;
      }
      throw Error(`Profile state unavailable`);
    },
    Ee = async () => {
      let e = M.trim().toLowerCase();
      if (!e || !we()) {
        e ||
          B({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (z(!0),
        B(null),
        O(`auth_method_selected`, q(`email_otp`, `sign_in_or_create`)));
      try {
        (await g(e, V ?? void 0, D(G, `email_otp`, K)),
          N(e),
          L(``),
          A(`otp`),
          xe(Date.now() + $.resendCooldownSeconds * 1e3),
          O(`auth_email_sent`, q(`email_otp`, `sign_in_or_create`)));
      } catch (e) {
        X(e, `email_otp`, `sign_in_or_create`);
      } finally {
        (z(!1), Y());
      }
    },
    De = async () => {
      if (!je(I)) {
        B({
          category: `validation`,
          messageKey: `authPage.errors.codeRequired`,
        });
        return;
      }
      (z(!0), B(null));
      try {
        (await _(M, I), await Te(`email_otp`, `sign_in_or_create`));
      } catch (e) {
        X(e, `email_otp`, `sign_in_or_create`);
      } finally {
        z(!1);
      }
    },
    Oe = async (e) => {
      (z(!0), B(null), O(`auth_method_selected`, q(e, `oauth`)));
      try {
        let t = new URL(D(G, `oauth`, K));
        (t.searchParams.set(`provider`, e),
          window.sessionStorage.setItem(`sandscape.auth.provider`, e),
          await v(e, t.toString()));
      } catch (t) {
        (X(t, e, `oauth`),
          window.sessionStorage.removeItem(`sandscape.auth.provider`),
          z(!1));
      }
    },
    Q = async () => {
      let e = M.trim().toLowerCase();
      if (!e || !P || !we()) {
        (!e || !P) &&
          B({
            category: `validation`,
            messageKey: `authPage.errors.credentialsRequired`,
          });
        return;
      }
      (z(!0),
        B(null),
        O(`auth_method_selected`, q(`password`, `password_sign_in`)));
      try {
        (await b(e, P, V ?? void 0), await Te(`password`, `password_sign_in`));
      } catch (e) {
        X(e, `password`, `password_sign_in`);
      } finally {
        (z(!1), Y());
      }
    },
    Ie = async () => {
      let e = M.trim().toLowerCase();
      if (!e || !we()) {
        e ||
          B({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (z(!0), B(null));
      try {
        (await le(e, D(G, `recovery`, K), V ?? void 0),
          A(`confirmation`),
          O(`auth_email_sent`, q(`password`, `password_recovery`)));
      } catch (e) {
        X(e, `password`, `password_recovery`);
      } finally {
        (z(!1), Y());
      }
    },
    Le = async () => {
      if (P.length < 8) {
        B({
          category: `validation`,
          messageKey: `authPage.errors.passwordTooShort`,
        });
        return;
      }
      if (P !== me) {
        B({
          category: `validation`,
          messageKey: `authPage.errors.passwordMismatch`,
        });
        return;
      }
      if (!p) {
        B({
          category: `callback`,
          messageKey: `authPage.errors.recoverySession`,
        });
        return;
      }
      (z(!0), B(null));
      try {
        (await ue(P),
          O(`auth_completed`, {
            ...q(`password`, `password_recovery`),
            is_new_user: !1,
          }),
          t(G, { replace: !0 }));
      } catch (e) {
        X(e, `password`, `password_recovery`);
      } finally {
        z(!1);
      }
    },
    Re = () => {
      (A(`chooser`), F(``), he(``), L(``), B(null), Y());
    },
    ze = ge ? e(ge.messageKey, e(`authPage.errors.generic`)) : null;
  return m || (p && h === `loading` && k !== `password-update`)
    ? (0, Z.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary p-4`,
        children: (0, Z.jsx)(u, {
          className: `h-8 w-8 animate-spin text-primary`,
          "aria-label": e(`general.loading`, `Loading...`),
        }),
      })
    : (0, Z.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
        children: (0, Z.jsxs)(se, {
          className: `w-full max-w-md border-border/80 shadow-xl`,
          children: [
            (0, Z.jsxs)(ie, {
              className: `space-y-3 text-center`,
              children: [
                (0, Z.jsx)(`img`, {
                  src: `/Sandscape_Logo_White_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:block hidden`,
                }),
                (0, Z.jsx)(`img`, {
                  src: `/Sandscape_Logo_Black_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:hidden`,
                }),
                (0, Z.jsx)(`h1`, {
                  className: `text-2xl font-semibold leading-none tracking-tight`,
                  children:
                    k === `otp`
                      ? e(`authPage.codeTitle`, `Enter your code`)
                      : k === `password-update`
                        ? e(
                            `authPage.updatePasswordTitle`,
                            `Set a new password`,
                          )
                        : k === `recovery`
                          ? e(`authPage.recoveryTitle`, `Reset your password`)
                          : k === `confirmation`
                            ? e(`authPage.checkEmailTitle`, `Check your email`)
                            : k === `password-signin`
                              ? e(`authPage.signInTitle`, `Sign in`)
                              : e(
                                  `authPage.title`,
                                  `Sign in or create an account`,
                                ),
                }),
                k !== `password-signin` &&
                  (0, Z.jsx)(oe, {
                    children:
                      k === `otp`
                        ? e(
                            `authPage.codeDescription`,
                            `Enter the verification code we sent. The same flow works for new and existing accounts.`,
                          )
                        : k === `password-update`
                          ? e(
                              `authPage.updatePasswordDescription`,
                              `Choose a secure password for your Sandscape account.`,
                            )
                          : k === `recovery`
                            ? e(
                                `authPage.recoveryDescription`,
                                `We'll email a secure password-reset link if the address can receive one.`,
                              )
                            : k === `confirmation`
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
            (0, Z.jsxs)(ae, {
              className: `space-y-4`,
              children: [
                ze &&
                  (0, Z.jsx)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive`,
                    children: ze,
                  }),
                k === `chooser` &&
                  (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `space-y-2`,
                        children: Pe.filter((e) => e.enabled).map(
                          ({ provider: t, icon: n }) =>
                            (0, Z.jsxs)(
                              s,
                              {
                                type: `button`,
                                variant: `outline`,
                                className: `w-full justify-center gap-2`,
                                disabled: R,
                                onClick: () => Oe(t),
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
                      (0, Z.jsxs)(`div`, {
                        className: `relative py-1`,
                        "aria-hidden": `true`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center`,
                            children: (0, Z.jsx)(`span`, {
                              className: `w-full border-t`,
                            }),
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `relative flex justify-center text-xs uppercase`,
                            children: (0, Z.jsx)(`span`, {
                              className: `bg-card px-2 text-muted-foreground`,
                              children: e(`authPage.or`, `or`),
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`form`, {
                        className: `space-y-4`,
                        onSubmit: (e) => {
                          (e.preventDefault(), Ee());
                        },
                        children: [
                          (0, Z.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Z.jsx)(w, {
                                htmlFor: `auth-email`,
                                children: e(`general.email`, `Email`),
                              }),
                              (0, Z.jsx)(T, {
                                id: `auth-email`,
                                type: `email`,
                                autoComplete: `email`,
                                value: M,
                                onChange: (e) => N(e.target.value),
                                placeholder: e(
                                  `authPage.emailPlaceholder`,
                                  `you@example.com`,
                                ),
                                disabled: R,
                                required: !0,
                              }),
                            ],
                          }),
                          (0, Z.jsx)(ke, {
                            siteKey: $.turnstileSiteKey,
                            resetKey: H,
                            onTokenChange: J,
                          }),
                          (0, Z.jsxs)(s, {
                            type: `submit`,
                            className: `w-full`,
                            disabled: R,
                            children: [
                              R
                                ? (0, Z.jsx)(u, {
                                    className: `mr-2 h-4 w-4 animate-spin`,
                                  })
                                : (0, Z.jsx)(d, { className: `mr-2 h-4 w-4` }),
                              e(
                                `authPage.continueWithEmail`,
                                `Continue with email`,
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: () => {
                          (A(`password-signin`), B(null));
                        },
                        children: [
                          (0, Z.jsx)(l, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.usePassword`,
                            `Sign in with a password instead`,
                          ),
                        ],
                      }),
                    ],
                  }),
                k === `otp` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), De());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `auth-code`,
                            children: e(
                              `authPage.codeLabel`,
                              `Verification code`,
                            ),
                          }),
                          (0, Z.jsx)(T, {
                            id: `auth-code`,
                            value: I,
                            onChange: (e) => L(Ae(e.target.value)),
                            inputMode: `numeric`,
                            autoComplete: `one-time-code`,
                            pattern: `[0-9]{6,10}`,
                            maxLength: 10,
                            className: `text-center text-xl tracking-[0.35em]`,
                            autoFocus: !0,
                            disabled: R,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R || !je(I),
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.verifyCode`, `Verify code`),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2`,
                        children: [
                          (0, Z.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled:
                              R || U > 0 || !!($.turnstileSiteKey && !V),
                            onClick: () => void Ee(),
                            children:
                              U > 0
                                ? e(
                                    `authPage.resendCountdown`,
                                    `Resend in {{seconds}}s`,
                                    { seconds: U },
                                  )
                                : e(`authPage.resendCode`, `Resend code`),
                          }),
                          (0, Z.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled: R,
                            onClick: Re,
                            children: e(`authPage.changeEmail`, `Change email`),
                          }),
                        ],
                      }),
                      $.turnstileSiteKey &&
                        U === 0 &&
                        (0, Z.jsx)(ke, {
                          siteKey: $.turnstileSiteKey,
                          resetKey: H,
                          onTokenChange: J,
                        }),
                    ],
                  }),
                k === `password-signin` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Q());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `password-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `password-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: M,
                            onChange: (e) => N(e.target.value),
                            disabled: R,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `auth-password`,
                            children: e(`authPage.password`, `Password`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `auth-password`,
                            type: `password`,
                            autoComplete: `current-password`,
                            value: P,
                            onChange: (e) => F(e.target.value),
                            disabled: R,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsx)(ke, {
                        siteKey: $.turnstileSiteKey,
                        resetKey: H,
                        onTokenChange: J,
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R,
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(
                            `authPage.signInWithPassword`,
                            `Sign in with password`,
                          ),
                        ],
                      }),
                      (0, Z.jsx)(s, {
                        type: `button`,
                        variant: `link`,
                        className: `w-full`,
                        onClick: () => A(`recovery`),
                        children: e(
                          `authPage.forgotPassword`,
                          `Forgot password?`,
                        ),
                      }),
                      (0, Z.jsx)(`p`, {
                        className: `text-center text-xs text-muted-foreground`,
                        children: e(
                          `authPage.passwordSigninNewAccountHint`,
                          `New to Sandscape? Go back and continue with email. You can set a password while setting up your account.`,
                        ),
                      }),
                      (0, Z.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: Re,
                        children: [
                          (0, Z.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                k === `recovery` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Ie());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `recovery-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `recovery-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: M,
                            onChange: (e) => N(e.target.value),
                            disabled: R,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsx)(ke, {
                        siteKey: $.turnstileSiteKey,
                        resetKey: H,
                        onTokenChange: J,
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R,
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.sendRecovery`, `Send reset link`),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: Re,
                        children: [
                          (0, Z.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                k === `password-update` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Le());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `new-password`,
                            children: e(`authPage.newPassword`, `New password`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `new-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: P,
                            onChange: (e) => F(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `confirm-password`,
                            children: e(
                              `authPage.confirmPassword`,
                              `Confirm password`,
                            ),
                          }),
                          (0, Z.jsx)(T, {
                            id: `confirm-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: me,
                            onChange: (e) => he(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R || !p,
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.updatePassword`, `Update password`),
                        ],
                      }),
                    ],
                  }),
                k === `confirmation` &&
                  (0, Z.jsxs)(`div`, {
                    className: `space-y-4 text-center`,
                    children: [
                      (0, Z.jsx)(f, {
                        className: `mx-auto h-12 w-12 text-primary`,
                      }),
                      (0, Z.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: e(
                          `authPage.genericEmailNotice`,
                          `For privacy, this message is the same whether or not an account already exists.`,
                        ),
                      }),
                      (0, Z.jsx)(s, {
                        type: `button`,
                        variant: `outline`,
                        className: `w-full`,
                        onClick: Re,
                        children: e(
                          `authPage.backToOptions`,
                          `Back to sign-in options`,
                        ),
                      }),
                    ],
                  }),
                (0, Z.jsx)(`p`, {
                  className: `pt-2 text-center text-xs text-muted-foreground`,
                  children: (0, Z.jsx)(_e, {
                    i18nKey: `authPage.legal`,
                    defaults: `By continuing, you agree to Sandscape's <terms>Terms</terms> and acknowledge the <privacy>Privacy Policy</privacy>.`,
                    components: {
                      terms: (0, Z.jsx)(`a`, {
                        className: `underline underline-offset-2 hover:text-foreground`,
                        href: `/about/terms`,
                      }),
                      privacy: (0, Z.jsx)(`a`, {
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
