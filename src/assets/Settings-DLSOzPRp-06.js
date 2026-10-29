// Settings-DLSOzPRp 06 — children
// Lines 1608-2571 of readable/assets/Settings-DLSOzPRp.pretty.js (statement-aligned).
function ut() {
  let {
      user: e,
      updatePassword: t,
      updateEmail: n,
      deleteAccount: s,
      getActiveSignInMethods: d,
      refreshAccountState: v,
    } = me(),
    { theme: y, setTheme: te } = _e(),
    { t: b, i18n: C } = ce(),
    { toast: w } = a(),
    ie = r(),
    [se, T] = i(),
    [E, D] = (0, G.useState)(!1),
    O = se.get(`tab`),
    pe = [
      `profile`,
      `account`,
      `billing`,
      `notifications`,
      `appearance`,
    ].includes(O ?? ``)
      ? O
      : `profile`,
    [N, ve] = (0, G.useState)(!0),
    [De, Oe] = (0, G.useState)(``),
    [U, ke] = (0, G.useState)(``),
    [Pe, Fe] = (0, G.useState)(null),
    [Ie, W] = (0, G.useState)(null),
    [Re, ze] = (0, G.useState)(void 0),
    [q, J] = (0, G.useState)(!1),
    Be = (0, G.useRef)(null),
    [Y, Ve] = (0, G.useState)(``),
    [He, Ue] = (0, G.useState)(!1),
    [X, We] = (0, G.useState)(``),
    [Ge, Z] = (0, G.useState)(``),
    [Ke, qe] = (0, G.useState)(!1),
    [Je, Q] = (0, G.useState)(!0),
    [$, Ye] = (0, G.useState)({ emailOtp: !1, password: !1, providers: [] }),
    [Xe, Ze] = (0, G.useState)(he),
    [Qe, $e] = (0, G.useState)(!0),
    [et, tt] = (0, G.useState)(null);
  ((0, G.useEffect)(() => {
    if (!e) return;
    let t = !0;
    return (
      (async () => {
        ve(!0);
        try {
          let n = await l.getProfile(e.id);
          if (!t) return;
          (Oe(n.username ?? ``), ke(n.bio ?? ``), Fe(n.avatar_url ?? null));
        } catch (e) {
          console.error(`Error loading profile:`, e);
        } finally {
          t && ve(!1);
        }
      })(),
      () => {
        t = !1;
      }
    );
  }, [e]),
    (0, G.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        Q(!0),
        d()
          .then((e) => {
            t && Ye(e);
          })
          .catch((e) => console.error(`Error loading sign-in methods:`, e))
          .finally(() => {
            t && Q(!1);
          }),
        () => {
          t = !1;
        }
      );
    }, [d, e]),
    (0, G.useEffect)(() => {
      if (!e) return;
      let t = !0;
      return (
        (async () => {
          $e(!0);
          try {
            let e = await A();
            t && Ze(e);
          } catch (e) {
            console.error(`Error loading notification preferences:`, e);
          } finally {
            t && $e(!1);
          }
        })(),
        () => {
          t = !1;
        }
      );
    }, [e]));
  let nt = async (e, t) => {
      let n = Xe,
        r = { ...Xe, [e]: t };
      (Ze(r), tt(e));
      try {
        await ge(r);
      } catch (e) {
        (console.error(`Error saving notification preferences:`, e),
          Ze(n),
          w({
            title: b(
              `settings.prefUpdateFailed`,
              `Failed to update preference`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        tt(null);
      }
    },
    rt = (e) => {
      let t = e.target.files?.[0];
      t && (W(t), ze(URL.createObjectURL(t)));
    },
    at = async () => {
      if (!e) return;
      let t = o(De);
      if (!c(t)) {
        w({
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
        let n = Pe ?? void 0;
        Ie && (n = (await l.uploadAvatar(Ie, e.id)).path);
        let r = await l.updateProfile({ username: t, bio: U, avatar_url: n });
        (Oe(r.username ?? De),
          ke(r.bio ?? U),
          Fe(r.avatar_url ?? n ?? null),
          W(null),
          ze(void 0),
          await v(),
          w({ title: b(`settings.profileUpdated`, `Profile updated`) }));
      } catch (e) {
        (console.error(`Error updating profile:`, e),
          w({
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
  (0, G.useEffect)(() => {
    Ve(e?.email ?? ``);
  }, [e?.email]);
  let ot = async () => {
      let t = Y.trim();
      if (!t || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
        w({
          title: b(`settings.emailInvalid`, `Enter a valid email address`),
          variant: `destructive`,
        });
        return;
      }
      if (t === e?.email) {
        w({
          title: b(`settings.emailAlreadyYours`, `That's already your email`),
        });
        return;
      }
      Ue(!0);
      try {
        (await n(t, F(`/settings`, `email_change`, `protected_route`)),
          w({
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
          Ve(e?.email ?? ``),
          w({
            title: b(`settings.emailUpdateFailed`, `Failed to update email`),
            description: t?.message,
            variant: `destructive`,
          }));
      } finally {
        Ue(!1);
      }
    },
    st = async () => {
      if (X.length < 8) {
        w({
          title: b(
            `settings.passwordTooShort`,
            `Password must be at least 8 characters`,
          ),
          variant: `destructive`,
        });
        return;
      }
      if (X !== Ge) {
        w({
          title: b(`settings.passwordsDontMatch`, `Passwords don't match`),
          variant: `destructive`,
        });
        return;
      }
      qe(!0);
      try {
        (await t(X),
          Ye((e) => ({ ...e, password: !0 })),
          We(``),
          Z(``),
          w({ title: b(`settings.passwordUpdated`, `Password updated`) }));
      } catch (e) {
        (console.error(`Error updating password:`, e),
          w({
            title: b(
              `settings.passwordUpdateFailed`,
              `Failed to update password`,
            ),
            description: e?.message,
            variant: `destructive`,
          }));
      } finally {
        qe(!1);
      }
    },
    ct = async () => {
      D(!0);
      try {
        (await s(),
          w({
            title: b(
              `settings.accountDeleted`,
              `Your account has been deleted`,
            ),
          }),
          ie(`/auth?entryPoint=direct`));
      } catch (e) {
        (console.error(`Error deleting account:`, e),
          w({
            title: b(
              `settings.accountDeleteFailed`,
              `Failed to delete account`,
            ),
            description: e?.message,
            variant: `destructive`,
          }),
          D(!1));
      }
    },
    ut = Re ?? ue(Pe);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(P, {
        title: b(`settings.seoTitle`, `Settings | Sandscape`),
        description: b(
          `settings.seoDescription`,
          `Manage your Sandscape account, profile, and preferences.`,
        ),
      }),
      (0, K.jsxs)(`div`, {
        className: `container mx-auto max-w-3xl py-6 px-4`,
        children: [
          (0, K.jsx)(`h1`, {
            className: `text-2xl font-bold mb-6`,
            children: b(`navigation.settings`, `Settings`),
          }),
          (0, K.jsxs)(Ne, {
            value: pe,
            onValueChange: (e) => {
              let t = new URLSearchParams(se);
              (e === `profile` ? t.delete(`tab`) : t.set(`tab`, e),
                T(t, { replace: !0 }));
            },
            className: `w-full`,
            children: [
              (0, K.jsxs)(Me, {
                className: `mb-6`,
                children: [
                  (0, K.jsx)(Ae, {
                    value: `profile`,
                    children: b(`settings.tabProfile`, `Profile`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `account`,
                    children: b(`settings.tabAccount`, `Account`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `billing`,
                    children: b(`settings.tabBilling`, `Billing`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `notifications`,
                    children: b(`settings.tabNotifications`, `Notifications`),
                  }),
                  (0, K.jsx)(Ae, {
                    value: `appearance`,
                    children: b(`settings.tabAppearance`, `Appearance`),
                  }),
                ],
              }),
              (0, K.jsx)(je, {
                value: `profile`,
                children: (0, K.jsxs)(B, {
                  children: [
                    (0, K.jsxs)(I, {
                      children: [
                        (0, K.jsx)(R, {
                          children: b(`settings.profileTitle`, `Profile`),
                        }),
                        (0, K.jsx)(z, {
                          children: b(
                            `settings.profileDescription`,
                            `Update how you appear to others across Sandscape.`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(L, {
                      className: `space-y-6`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `flex items-center gap-4`,
                          children: [
                            (0, K.jsxs)(fe, {
                              className: `h-20 w-20`,
                              children: [
                                (0, K.jsx)(de, {
                                  src: ut,
                                  className: `object-cover`,
                                }),
                                (0, K.jsx)(k, {
                                  children: (0, K.jsx)(oe, {
                                    className: `h-8 w-8 text-muted-foreground`,
                                  }),
                                }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`input`, {
                                  ref: Be,
                                  type: `file`,
                                  accept: `image/*`,
                                  className: `hidden`,
                                  onChange: rt,
                                }),
                                (0, K.jsxs)(u, {
                                  variant: `outline`,
                                  size: `sm`,
                                  onClick: () => Be.current?.click(),
                                  disabled: N,
                                  children: [
                                    (0, K.jsx)(ae, {
                                      className: `h-4 w-4 mr-2`,
                                    }),
                                    b(`settings.changeAvatar`, `Change avatar`),
                                  ],
                                }),
                                (0, K.jsx)(`p`, {
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
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              htmlFor: `username`,
                              children: b(`settings.usernameLabel`, `Username`),
                            }),
                            (0, K.jsx)(M, {
                              id: `username`,
                              value: De,
                              onChange: (e) => Oe(e.target.value),
                              disabled: N,
                              placeholder: b(
                                `settings.usernamePlaceholder`,
                                `Your username`,
                              ),
                              maxLength: 30,
                            }),
                          ],
                        }),
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              htmlFor: `bio`,
                              children: b(`settings.bioLabel`, `Bio`),
                            }),
                            (0, K.jsx)(ye, {
                              id: `bio`,
                              value: U,
                              onChange: (e) => ke(e.target.value),
                              disabled: N,
                              placeholder: b(
                                `settings.bioPlaceholder`,
                                `Tell the community about yourself`,
                              ),
                              rows: 4,
                            }),
                          ],
                        }),
                        (0, K.jsxs)(u, {
                          onClick: at,
                          disabled: q || N,
                          children: [
                            q &&
                              (0, K.jsx)(S, {
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
              (0, K.jsx)(je, {
                value: `account`,
                children: (0, K.jsxs)(B, {
                  children: [
                    (0, K.jsxs)(I, {
                      children: [
                        (0, K.jsx)(R, {
                          children: b(`settings.accountTitle`, `Account`),
                        }),
                        (0, K.jsx)(z, {
                          children: b(
                            `settings.accountDescription`,
                            `Manage your sign-in details.`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(L, {
                      className: `space-y-6`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `space-y-3 rounded-lg border p-4`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, K.jsx)(re, {
                                  className: `h-5 w-5 text-primary`,
                                }),
                                (0, K.jsx)(`h3`, {
                                  className: `text-sm font-medium`,
                                  children: b(
                                    `accountSecurity.signInMethodsTitle`,
                                    `Active sign-in methods`,
                                  ),
                                }),
                              ],
                            }),
                            (0, K.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `accountSecurity.signInMethodsHint`,
                                `These are the verified ways you can access this account.`,
                              ),
                            }),
                            Je
                              ? (0, K.jsx)(S, {
                                  className: `h-4 w-4 animate-spin text-muted-foreground`,
                                })
                              : (0, K.jsxs)(`div`, {
                                  className: `grid gap-2 sm:grid-cols-2`,
                                  children: [
                                    $.emailOtp &&
                                      (0, K.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, K.jsx)(ne, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, K.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodEmailCode`,
                                              `Email code`,
                                            ),
                                          }),
                                          (0, K.jsx)(ee, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.password &&
                                      (0, K.jsxs)(`div`, {
                                        className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                        children: [
                                          (0, K.jsx)(x, {
                                            className: `h-4 w-4`,
                                          }),
                                          (0, K.jsx)(`span`, {
                                            children: b(
                                              `accountSecurity.methodPassword`,
                                              `Password`,
                                            ),
                                          }),
                                          (0, K.jsx)(ee, {
                                            className: `ms-auto h-4 w-4 text-green-500`,
                                          }),
                                        ],
                                      }),
                                    $.providers.map((e) =>
                                      (0, K.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm`,
                                          children: [
                                            (0, K.jsx)(re, {
                                              className: `h-4 w-4`,
                                            }),
                                            (0, K.jsx)(`span`, {
                                              className: `capitalize`,
                                              children: e,
                                            }),
                                            (0, K.jsx)(ee, {
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
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              htmlFor: `email`,
                              children: b(`general.email`, `Email`),
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `flex flex-col sm:flex-row gap-2`,
                              children: [
                                (0, K.jsx)(M, {
                                  id: `email`,
                                  type: `email`,
                                  value: Y,
                                  onChange: (e) => Ve(e.target.value),
                                  placeholder: b(
                                    `settings.emailPlaceholder`,
                                    `you@example.com`,
                                  ),
                                }),
                                (0, K.jsxs)(u, {
                                  variant: `outline`,
                                  onClick: ot,
                                  disabled:
                                    He || !Y.trim() || Y.trim() === e?.email,
                                  className: `shrink-0`,
                                  children: [
                                    He &&
                                      (0, K.jsx)(S, {
                                        className: `h-4 w-4 mr-2 animate-spin`,
                                      }),
                                    b(`settings.changeEmail`, `Change email`),
                                  ],
                                }),
                              ],
                            }),
                            (0, K.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: b(
                                `settings.changeEmailHint`,
                                `We'll email a confirmation link to the new address. Your email changes only after you confirm it.`,
                              ),
                            }),
                          ],
                        }),
                        (0, K.jsxs)(`div`, {
                          className: `space-y-4`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`h3`, {
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
                                (0, K.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.changePasswordHint`,
                                    `Choose a new password (at least 8 characters).`,
                                  ),
                                }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, K.jsx)(j, {
                                  htmlFor: `new-password`,
                                  children: b(
                                    `settings.newPasswordLabel`,
                                    `New password`,
                                  ),
                                }),
                                (0, K.jsx)(M, {
                                  id: `new-password`,
                                  type: `password`,
                                  value: X,
                                  onChange: (e) => We(e.target.value),
                                  placeholder: b(
                                    `settings.newPasswordPlaceholder`,
                                    `New password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, K.jsx)(j, {
                                  htmlFor: `confirm-password`,
                                  children: b(
                                    `settings.confirmPasswordLabel`,
                                    `Confirm new password`,
                                  ),
                                }),
                                (0, K.jsx)(M, {
                                  id: `confirm-password`,
                                  type: `password`,
                                  value: Ge,
                                  onChange: (e) => Z(e.target.value),
                                  placeholder: b(
                                    `settings.confirmPasswordPlaceholder`,
                                    `Confirm new password`,
                                  ),
                                  minLength: 8,
                                }),
                              ],
                            }),
                            (0, K.jsxs)(u, {
                              onClick: st,
                              disabled: Ke || !X || !Ge,
                              children: [
                                Ke &&
                                  (0, K.jsx)(S, {
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
                        (0, K.jsxs)(`div`, {
                          className: `border-t border-destructive/30 pt-6 space-y-3`,
                          children: [
                            (0, K.jsxs)(`div`, {
                              children: [
                                (0, K.jsx)(`h3`, {
                                  className: `text-sm font-medium text-destructive`,
                                  children: b(
                                    `settings.deleteAccountTitle`,
                                    `Delete account`,
                                  ),
                                }),
                                (0, K.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: b(
                                    `settings.deleteAccountHint`,
                                    `Permanently delete your account. This can't be undone. Games you've published stay live but are no longer attributed to you.`,
                                  ),
                                }),
                              ],
                            }),
                            (0, K.jsxs)(Ee, {
                              children: [
                                (0, K.jsx)(xe, {
                                  asChild: !0,
                                  children: (0, K.jsxs)(u, {
                                    variant: `destructive`,
                                    disabled: E,
                                    children: [
                                      E &&
                                        (0, K.jsx)(S, {
                                          className: `h-4 w-4 mr-2 animate-spin`,
                                        }),
                                      b(
                                        `settings.deleteMyAccount`,
                                        `Delete my account`,
                                      ),
                                    ],
                                  }),
                                }),
                                (0, K.jsxs)(be, {
                                  children: [
                                    (0, K.jsxs)(Te, {
                                      children: [
                                        (0, K.jsx)(H, {
                                          children: b(
                                            `settings.deleteAccountConfirmTitle`,
                                            `Delete your account?`,
                                          ),
                                        }),
                                        (0, K.jsx)(V, {
                                          children: b(
                                            `settings.deleteAccountConfirmDesc`,
                                            `This permanently deletes your profile, likes, comments, follows, notifications and projects. Your published games remain live but anonymized. This action cannot be undone.`,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, K.jsxs)(Ce, {
                                      children: [
                                        (0, K.jsx)(we, {
                                          disabled: E,
                                          children: b(
                                            `general.cancel`,
                                            `Cancel`,
                                          ),
                                        }),
                                        (0, K.jsx)(Se, {
                                          onClick: ct,
                                          disabled: E,
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
              (0, K.jsx)(je, {
                value: `billing`,
                children: (0, K.jsx)(it, {}),
              }),
              (0, K.jsxs)(je, {
                value: `notifications`,
                className: `space-y-6`,
                children: [
                  (0, K.jsx)(Le, {}),
                  (0, K.jsxs)(B, {
                    children: [
                      (0, K.jsxs)(I, {
                        children: [
                          (0, K.jsx)(R, {
                            children: b(
                              `settings.notificationsTitle`,
                              `Notifications`,
                            ),
                          }),
                          (0, K.jsx)(z, {
                            children: b(
                              `settings.notificationsDescription`,
                              `Choose which notifications you want to receive. Collaboration invites are always delivered.`,
                            ),
                          }),
                        ],
                      }),
                      (0, K.jsx)(L, {
                        className: `space-y-1`,
                        children: lt.map((e, t) =>
                          (0, K.jsxs)(
                            `div`,
                            {
                              children: [
                                (0, K.jsxs)(`div`, {
                                  className: `flex items-center justify-between py-3`,
                                  children: [
                                    (0, K.jsxs)(`div`, {
                                      className: `pr-4`,
                                      children: [
                                        (0, K.jsx)(j, {
                                          htmlFor: `pref-${e.key}`,
                                          className: `text-sm font-medium`,
                                          children: b(e.labelKey, e.label),
                                        }),
                                        (0, K.jsx)(`p`, {
                                          className: `text-xs text-muted-foreground mt-0.5`,
                                          children: b(
                                            e.descriptionKey,
                                            e.description,
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, K.jsx)(_, {
                                      id: `pref-${e.key}`,
                                      checked: Xe[e.key],
                                      disabled: Qe || et === e.key,
                                      onCheckedChange: (t) => nt(e.key, t),
                                    }),
                                  ],
                                }),
                                t < lt.length - 1 &&
                                  (0, K.jsx)(`div`, {
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
                ],
              }),
              (0, K.jsx)(je, {
                value: `appearance`,
                children: (0, K.jsxs)(B, {
                  children: [
                    (0, K.jsxs)(I, {
                      children: [
                        (0, K.jsx)(R, {
                          children: b(`settings.appearanceTitle`, `Appearance`),
                        }),
                        (0, K.jsx)(z, {
                          children: b(
                            `settings.appearanceDescription`,
                            `Customize how Sandscape looks and feels.`,
                          ),
                        }),
                      ],
                    }),
                    (0, K.jsxs)(L, {
                      className: `space-y-6`,
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              children: b(`settings.themeLabel`, `Theme`),
                            }),
                            (0, K.jsxs)(m, {
                              value: y,
                              onValueChange: (e) => te(e),
                              children: [
                                (0, K.jsx)(g, {
                                  className: `w-full sm:w-64`,
                                  children: (0, K.jsx)(p, {}),
                                }),
                                (0, K.jsxs)(h, {
                                  children: [
                                    (0, K.jsx)(f, {
                                      value: `light`,
                                      children: b(
                                        `settings.themeLight`,
                                        `Light`,
                                      ),
                                    }),
                                    (0, K.jsx)(f, {
                                      value: `dark`,
                                      children: b(`settings.themeDark`, `Dark`),
                                    }),
                                    (0, K.jsx)(f, {
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
                        (0, K.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, K.jsx)(j, {
                              children: b(`general.language`, `Language`),
                            }),
                            (0, K.jsxs)(m, {
                              value: C.language?.split(`-`)[0],
                              onValueChange: (e) => C.changeLanguage(e),
                              children: [
                                (0, K.jsx)(g, {
                                  className: `w-full sm:w-64`,
                                  children: (0, K.jsx)(p, {}),
                                }),
                                (0, K.jsx)(h, {
                                  children: le.map((e) =>
                                    (0, K.jsx)(
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
