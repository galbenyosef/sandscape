// assets__Settings-B2DmZABB 05 — children
// Lines 1353-2309 of readable/assets__Settings-B2DmZABB.pretty.js (statement-aligned).
function et() {
  let {
      user: e,
      updatePassword: t,
      updateEmail: n,
      deleteAccount: s,
      getActiveSignInMethods: d,
      refreshAccountState: v,
    } = N(),
    { theme: te, setTheme: y } = ve(),
    { t: b, i18n: ne } = se(),
    { toast: C } = a(),
    w = r(),
    [ie, oe] = i(),
    [D, O] = (0, W.useState)(!1),
    fe = ie.get(`tab`),
    he = [
      `profile`,
      `account`,
      `billing`,
      `notifications`,
      `appearance`,
    ].includes(fe ?? ``)
      ? fe
      : `profile`,
    [z, ke] = (0, W.useState)(!0),
    [B, Ae] = (0, W.useState)(``),
    [U, G] = (0, W.useState)(``),
    [K, Ne] = (0, W.useState)(null),
    [q, Pe] = (0, W.useState)(null),
    [Fe, Ie] = (0, W.useState)(void 0),
    [Le, J] = (0, W.useState)(!1),
    Re = (0, W.useRef)(null),
    [Y, ze] = (0, W.useState)(``),
    [Be, X] = (0, W.useState)(!1),
    [Z, Ve] = (0, W.useState)(``),
    [He, Ue] = (0, W.useState)(``),
    [We, Ge] = (0, W.useState)(!1),
    [Ke, qe] = (0, W.useState)(!0),
    [$, Ye] = (0, W.useState)({ emailOtp: !1, password: !1, providers: [] }),
    [Xe, Ze] = (0, W.useState)(me),
    [Qe, et] = (0, W.useState)(!0),
    [tt, nt] = (0, W.useState)(null);
  ((0, W.useEffect)(() => {
    if (!e) return;
    let t = !0;
    return (
      (async () => {
        ke(!0);
        try {
          let n = await l.getProfile(e.id);
          if (!t) return;
          (Ae(n.username ?? ``), G(n.bio ?? ``), Ne(n.avatar_url ?? null));
        } catch (e) {
          console.error(`Error loading profile:`, e);
        } finally {
          t && ke(!1);
        }
      })(),
      () => {
        t = !1;
      }
    );
  }, [e]),
    (0, W.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        qe(!0),
        d()
          .then((e) => {
            t && Ye(e);
          })
          .catch((e) => console.error(`Error loading sign-in methods:`, e))
          .finally(() => {
            t && qe(!1);
          }),
        () => {
          t = !1;
        }
      );
    }, [d, e]),
    (0, W.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        (async () => {
          et(!0);
          try {
            let e = await pe();
            t && Ze(e);
          } catch (e) {
            console.error(`Error loading notification preferences:`, e);
          } finally {
            t && et(!1);
          }
        })(),
        () => {
          t = !1;
        }
      );
    }, [e]));
  let rt = async (e, t) => {
      let n = Xe,
        r = { ...Xe, [e]: t };
      (Ze(r), nt(e));
      try {
        await j(r);
      } catch (e) {
        (console.error(`Error saving notification preferences:`, e),
          Ze(n),
          C({
            title: b(
              `settings.prefUpdateFailed`,
              `Failed to update preference`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        nt(null);
      }
    },
    it = (e) => {
      let t = e.target.files?.[0];
      t && (Pe(t), Ie(URL.createObjectURL(t)));
    },
    at = async () => {
      if (!e) return;
      let t = o(B);
      if (!c(t)) {
        C({
          title: b(
            `onboarding.usernameRules`,
            `Use 3-30 letters, numbers, underscores, or hyphens. This is public and must not be an email address.`,
          ),
          variant: `destructive`,
        });
        return;
      }
      J(!0);
      try {
        let n = K ?? void 0;
        q && (n = (await l.uploadAvatar(q, e.id)).path);
        let r = await l.updateProfile({ username: t, bio: U, avatar_url: n });
        (Ae(r.username ?? B),
          G(r.bio ?? U),
          Ne(r.avatar_url ?? n ?? null),
          Pe(null),
          Ie(void 0),
          await v(),
          C({ title: b(`settings.profileUpdated`, `Profile updated`) }));
      } catch (e) {
        (console.error(`Error updating profile:`, e),
          C({
            title: b(
              `settings.profileUpdateFailed`,
              `Failed to update profile`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        J(!1);
      }
    };
  (0, W.useEffect)(() => {
    ze(e?.email ?? ``);
  }, [e?.email]);
  let ot = async () => {
      let t = Y.trim();
      if (!t || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
        C({
          title: b(`settings.emailInvalid`, `Enter a valid email address`),
          variant: `destructive`,
        });
        return;
      }
      if (t === e?.email) {
        C({
          title: b(`settings.emailAlreadyYours`, `That's already your email`),
        });
        return;
      }
      X(!0);
      try {
        (await n(t, _e(`/settings`, `email_change`, `protected_route`)),
          C({
            title: b(
              `settings.emailConfirmationSent`,
              `Confirmation email sent`,
            ),
            description: b(
              `settings.emailConfirmationDesc`,
              `Check {{email}} to confirm the change.`,
              { email: t },
            ),
          }));
      } catch (t) {
        (console.error(`Error updating email:`, t),
          ze(e?.email ?? ``),
          C({
            title: b(`settings.emailUpdateFailed`, `Failed to update email`),
            description: t?.message,
            variant: `destructive`,
          }));
      } finally {
        X(!1);
      }
    },
    st = async () => {
      if (Z.length < 8) {
        C({
          title: b(
            `settings.passwordTooShort`,
            `Password must be at least 8 characters`,
          ),
          variant: `destructive`,
        });
        return;
      }
      if (Z !== He) {
        C({
          title: b(`settings.passwordsDontMatch`, `Passwords don't match`),
          variant: `destructive`,
        });
        return;
      }
      Ge(!0);
      try {
        (await t(Z),
          Ye((e) => ({ ...e, password: !0 })),
          Ve(``),
          Ue(``),
          C({ title: b(`settings.passwordUpdated`, `Password updated`) }));
      } catch (e) {
        (console.error(`Error updating password:`, e),
          C({
            title: b(
              `settings.passwordUpdateFailed`,
              `Failed to update password`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        Ge(!1);
      }
    },
    ct = async () => {
      O(!0);
      try {
        (await s(),
          C({
            title: b(
              `settings.accountDeleted`,
              `Your account has been deleted`,
            ),
          }),
          w(`/auth?entryPoint=direct`));
      } catch (e) {
        (console.error(`Error deleting account:`, e),
          C({
            title: b(
              `settings.accountDeleteFailed`,
              `Failed to delete account`,
            ),
            description: e?.message,
            variant: `destructive`,
          }),
          O(!1));
      }
    },
    lt = Fe ?? k(K);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(ge, {
        title: b(`settings.seoTitle`, `Settings | Sandscape`),
        description: b(
          `settings.seoDescription`,
          `Manage your Sandscape account, profile, and preferences.`,
        ),
      }),
      (0, Q.jsxs)(`div`, {
        className: `container mx-auto max-w-3xl py-6 px-4`,
        children: [
          (0, Q.jsx)(`h1`, {
            className: `text-2xl font-bold mb-6`,
            children: b(`navigation.settings`, `Settings`),
          }),
          (0, Q.jsxs)(Me, {
            value: he,
            onValueChange: (e) => {
              let t = new URLSearchParams(ie);
              (e === `profile` ? t.delete(`tab`) : t.set(`tab`, e),
                oe(t, { replace: !0 }));
            },
            className: `w-full`,
            children: [
              (0, Q.jsxs)(je, {
                className: `mb-6`,
                children: [
                  (0, Q.jsx)(V, {
                    value: `profile`,
                    children: b(`settings.tabProfile`, `Profile`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `account`,
                    children: b(`settings.tabAccount`, `Account`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `billing`,
                    children: b(`settings.tabBilling`, `Billing`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `notifications`,
                    children: b(`settings.tabNotifications`, `Notifications`),
                  }),
                  (0, Q.jsx)(V, {
                    value: `appearance`,
                    children: b(`settings.tabAppearance`, `Appearance`),
                  }),
                ],
              }),
              (0, Q.jsx)(H, {
                value: `profile`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(`settings.profileTitle`, `Profile`),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.profileDescription`,
                            `Update how you appear to others across Sandscape.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(F, {
                      className: `space-y-6`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-4`,
                          children: [
                            (0, Q.jsxs)(de, {
                              className: `h-20 w-20`,
                              children: [
                                (0, Q.jsx)(ue, {
                                  src: lt,
                                  className: `object-cover`,
                                }),
                                (0, Q.jsx)(le, {
                                  children: (0, Q.jsx)(E, {
                                    className: `h-8 w-8 text-muted-foreground`,
                                  }),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`input`, {
                                  ref: Re,
                                  type: `file`,
                                  accept: `image/*`,
                                  className: `hidden`,
                                  onChange: it,
                                }),
                                (0, Q.jsxs)(u, {
                                  variant: `outline`,
                                  size: `sm`,
                                  onClick: () => Re.current?.click(),
                                  disabled: z,
                                  children: [
                                    (0, Q.jsx)(ae, {
                                      className: `h-4 w-4 mr-2`,
                                    }),
                                    b(`settings.changeAvatar`, `Change avatar`),
                                  ],
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground mt-2`,
                                  children: b(
                                    `settings.avatarHint`,
                                    `JPG or PNG. Saved when you click Save changes.`,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              htmlFor: `username`,
                              children: b(`settings.usernameLabel`, `Username`),
                            }),
                            (0, Q.jsx)(A, {
                              id: `username`,
                              value: B,
                              onChange: (e) => Ae(e.target.value),
                              disabled: z,
                              placeholder: b(
                                `settings.usernamePlaceholder`,
                                `Your username`,
                              ),
                              maxLength: 30,
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              htmlFor: `bio`,
                              children: b(`settings.bioLabel`, `Bio`),
                            }),
                            (0, Q.jsx)(ye, {
                              id: `bio`,
                              value: U,
                              onChange: (e) => G(e.target.value),
                              disabled: z,
                              placeholder: b(
                                `settings.bioPlaceholder`,
                                `Tell the community about yourself`,
                              ),
                              rows: 4,
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(u, {
                          onClick: at,
                          disabled: Le || z,
                          children: [
                            Le &&
                              (0, Q.jsx)(x, {
                                className: `h-4 w-4 mr-2 animate-spin`,
                              }),
                            b(`settings.saveChanges`, `Save changes`),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(H, {
                value: `account`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(`settings.accountTitle`, `Account`),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.accountDescription`,
                            `Manage your sign-in details.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(F, {
                      className: `space-y-6`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-3 rounded-lg border p-4`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, Q.jsx)(T, {
                                  className: `h-5 w-5 text-primary`,
                                }),
                                (0, Q.jsx)(`h3`, {
                                  className: `text-sm font-medium`,
                                  children: b(
                                    `accountSecurity.signInMethodsTitle`,
                                    `Active sign-in methods`,
                                  ),
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `accountSecurity.signInMethodsHint`,
                                `These are the verified ways you can access this account.`,
                              ),
                            }),
                            Ke
                              ? (0, Q.jsx)(x, {
                                  className: `h-4 w-4 animate-spin text-muted-foreground`,
                                })
                              : (0, Q.jsxs)(`div`, {
                                  className: `grid gap-2 sm:grid-cols-2`,
                                  children: [
                                    $.emailOtp &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, Q.jsx)(S, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, Q.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodEmailCode`,
                                              `Email code`,
                                            ),
                                          }),
                                          (0, Q.jsx)(_, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.password &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, Q.jsx)(re, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, Q.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodPassword`,
                                              `Password`,
                                            ),
                                          }),
                                          (0, Q.jsx)(_, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.providers.map((e) =>
                                      (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                          children: [
                                            (0, Q.jsx)(T, {
                                              className: `h-4 w-4`,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              className: `capitalize`,
                                              children: e,
                                            }),
                                            (0, Q.jsx)(_, {
                                              className: `ms-auto h-4 w-4 text-green-500`,
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              htmlFor: `email`,
                              children: b(`general.email`, `Email`),
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `flex flex-col sm:flex-row gap-2`,
                              children: [
                                (0, Q.jsx)(A, {
                                  id: `email`,
                                  type: `email`,
                                  value: Y,
                                  onChange: (e) => ze(e.target.value),
                                  placeholder: b(
                                    `settings.emailPlaceholder`,
                                    `you@example.com`,
                                  ),
                                }),
                                (0, Q.jsxs)(u, {
                                  variant: `outline`,
                                  onClick: ot,
                                  disabled:
                                    Be || !Y.trim() || Y.trim() === e?.email,
                                  className: `shrink-0`,
                                  children: [
                                    Be &&
                                      (0, Q.jsx)(x, {
                                        className: `h-4 w-4 mr-2 animate-spin`,
                                      }),
                                    b(`settings.changeEmail`, `Change email`),
                                  ],
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `settings.changeEmailHint`,
                                `We'll email a confirmation link to the new address. Your email changes only after you confirm it.`,
                              ),
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-4`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`h3`, {
                                  className: `text-sm font-medium`,
                                  children: $.password
                                    ? b(
                                        `settings.changePasswordTitle`,
                                        `Change password`,
                                      )
                                    : b(
                                        `accountSecurity.setPasswordTitle`,
                                        `Set a password`,
                                      ),
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.changePasswordHint`,
                                    `Choose a new password (at least 8 characters).`,
                                  ),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, Q.jsx)(M, {
                                  htmlFor: `new-password`,
                                  children: b(
                                    `settings.newPasswordLabel`,
                                    `New password`,
                                  ),
                                }),
                                (0, Q.jsx)(A, {
                                  id: `new-password`,
                                  type: `password`,
                                  value: Z,
                                  onChange: (e) => Ve(e.target.value),
                                  placeholder: b(
                                    `settings.newPasswordPlaceholder`,
                                    `New password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, Q.jsx)(M, {
                                  htmlFor: `confirm-password`,
                                  children: b(
                                    `settings.confirmPasswordLabel`,
                                    `Confirm new password`,
                                  ),
                                }),
                                (0, Q.jsx)(A, {
                                  id: `confirm-password`,
                                  type: `password`,
                                  value: He,
                                  onChange: (e) => Ue(e.target.value),
                                  placeholder: b(
                                    `settings.confirmPasswordPlaceholder`,
                                    `Confirm new password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(u, {
                              onClick: st,
                              disabled: We || !Z || !He,
                              children: [
                                We &&
                                  (0, Q.jsx)(x, {
                                    className: `h-4 w-4 mr-2 animate-spin`,
                                  }),
                                $.password
                                  ? b(
                                      `settings.updatePassword`,
                                      `Update password`,
                                    )
                                  : b(
                                      `accountSecurity.setPassword`,
                                      `Set password`,
                                    ),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `border-t border-destructive/30 pt-6 space-y-3`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`h3`, {
                                  className: `text-sm font-medium text-destructive`,
                                  children: b(
                                    `settings.deleteAccountTitle`,
                                    `Delete account`,
                                  ),
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.deleteAccountHint`,
                                    `Permanently delete your account. This can't be undone. Games you've published stay live but are no longer attributed to you.`,
                                  ),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(Oe, {
                              children: [
                                (0, Q.jsx)(Ce, {
                                  asChild: !0,
                                  children: (0, Q.jsxs)(u, {
                                    variant: `destructive`,
                                    disabled: D,
                                    children: [
                                      D &&
                                        (0, Q.jsx)(x, {
                                          className: `h-4 w-4 mr-2 animate-spin`,
                                        }),
                                      b(
                                        `settings.deleteMyAccount`,
                                        `Delete my account`,
                                      ),
                                    ],
                                  }),
                                }),
                                (0, Q.jsxs)(Se, {
                                  children: [
                                    (0, Q.jsxs)(De, {
                                      children: [
                                        (0, Q.jsx)(xe, {
                                          children: b(
                                            `settings.deleteAccountConfirmTitle`,
                                            `Delete your account?`,
                                          ),
                                        }),
                                        (0, Q.jsx)(be, {
                                          children: b(
                                            `settings.deleteAccountConfirmDesc`,
                                            `This permanently deletes your profile, likes, comments, follows, notifications and projects. Your published games remain live but anonymized. This action cannot be undone.`,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsxs)(Te, {
                                      children: [
                                        (0, Q.jsx)(Ee, {
                                          disabled: D,
                                          children: b(
                                            `general.cancel`,
                                            `Cancel`,
                                          ),
                                        }),
                                        (0, Q.jsx)(we, {
                                          onClick: ct,
                                          disabled: D,
                                          className: `bg-destructive text-destructive-foreground hover:bg-destructive/90`,
                                          children: b(
                                            `settings.deleteAccountAction`,
                                            `Delete account`,
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(H, { value: `billing`, children: (0, Q.jsx)(Je, {}) }),
              (0, Q.jsx)(H, {
                value: `notifications`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(
                            `settings.notificationsTitle`,
                            `Notifications`,
                          ),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.notificationsDescription`,
                            `Choose which notifications you want to receive. Collaboration invites are always delivered.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(F, {
                      className: `space-y-1`,
                      children: $e.map((e, t) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between py-3`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `pr-4`,
                                    children: [
                                      (0, Q.jsx)(M, {
                                        htmlFor: `pref-${e.key}`,
                                        className: `text-sm font-medium`,
                                        children: b(e.labelKey, e.label),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-xs text-muted-foreground mt-0.5`,
                                        children: b(
                                          e.descriptionKey,
                                          e.description,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(g, {
                                    id: `pref-${e.key}`,
                                    checked: Xe[e.key],
                                    disabled: Qe || tt === e.key,
                                    onCheckedChange: (t) => rt(e.key, t),
                                  }),
                                ],
                              }),
                              t < $e.length - 1 &&
                                (0, Q.jsx)(`div`, {
                                  className: `border-b border-border`,
                                }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(H, {
                value: `appearance`,
                children: (0, Q.jsxs)(R, {
                  children: [
                    (0, Q.jsxs)(P, {
                      children: [
                        (0, Q.jsx)(I, {
                          children: b(`settings.appearanceTitle`, `Appearance`),
                        }),
                        (0, Q.jsx)(L, {
                          children: b(
                            `settings.appearanceDescription`,
                            `Customize how Sandscape looks and feels.`,
                          ),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(F, {
                      className: `space-y-6`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              children: b(`settings.themeLabel`, `Theme`),
                            }),
                            (0, Q.jsxs)(ee, {
                              value: te,
                              onValueChange: (e) => y(e),
                              children: [
                                (0, Q.jsx)(h, {
                                  className: `w-full sm:w-64`,
                                  children: (0, Q.jsx)(p, {}),
                                }),
                                (0, Q.jsxs)(m, {
                                  children: [
                                    (0, Q.jsx)(f, {
                                      value: `light`,
                                      children: b(
                                        `settings.themeLight`,
                                        `Light`,
                                      ),
                                    }),
                                    (0, Q.jsx)(f, {
                                      value: `dark`,
                                      children: b(`settings.themeDark`, `Dark`),
                                    }),
                                    (0, Q.jsx)(f, {
                                      value: `system`,
                                      children: b(
                                        `settings.themeSystem`,
                                        `System`,
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, Q.jsx)(M, {
                              children: b(`general.language`, `Language`),
                            }),
                            (0, Q.jsxs)(ee, {
                              value: ne.language?.split(`-`)[0],
                              onValueChange: (e) => ne.changeLanguage(e),
                              children: [
                                (0, Q.jsx)(h, {
                                  className: `w-full sm:w-64`,
                                  children: (0, Q.jsx)(p, {}),
                                }),
                                (0, Q.jsx)(m, {
                                  children: ce.map((e) =>
                                    (0, Q.jsx)(
                                      f,
                                      { value: e.code, children: e.name },
                                      e.code,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
