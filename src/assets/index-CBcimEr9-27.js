// index-CBcimEr9 27 — jsx
// Lines 9998-10273 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var Fc = () => {
  let e = s(),
    t = f(),
    { isAuthenticated: n } = G(),
    r = (t) => {
      e(n ? t : J(t, t === `/create` ? `create_gate` : `protected_route`));
    },
    i = [
      { path: `/`, icon: yn, label: `Home`, action: () => e(`/`) },
      { path: `/likes`, icon: vn, label: `Likes`, action: () => r(`/likes`) },
      {
        path: `/create`,
        icon: kn,
        label: `Create`,
        action: () => r(`/create`),
      },
      {
        path: `/following`,
        icon: Mn,
        label: `Follow`,
        action: () => r(`/following`),
      },
      {
        path: `/settings`,
        icon: fe,
        label: `Settings`,
        action: () => r(`/settings`),
      },
    ],
    a = (e) =>
      (e === `/` && t.pathname === `/`) ||
      (e.startsWith(`/profile/`) && t.pathname.startsWith(`/profile/`))
        ? !0
        : t.pathname.startsWith(e);
  return (0, U.jsx)(`nav`, {
    className: `fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border px-2 py-1 flex lg:hidden z-50`,
    children: (0, U.jsx)(`div`, {
      className: `w-full grid grid-cols-5`,
      children: i.map((e) =>
        (0, U.jsxs)(
          `button`,
          {
            onClick: e.action,
            className: `flex flex-col items-center justify-center p-1 ${a(e.path) ? `text-primary` : `text-muted-foreground`} hover:text-foreground`,
            children: [
              (0, U.jsx)(e.icon, { className: `h-5 w-5 mb-1` }),
              (0, U.jsx)(`span`, {
                className: `text-[10px]`,
                children: e.label,
              }),
            ],
          },
          e.path,
        ),
      ),
    }),
  });
};
function Ic() {
  let { isOpen: e, setOverlayMode: t, close: n } = tr(),
    r = je(f().pathname);
  return (
    (0, H.useEffect)(() => {
      r ? (t(!0), n()) : t(!1);
    }, [r, t, n]),
    (0, U.jsxs)(`div`, {
      className: `${r ? `h-dvh` : `h-screen`} flex flex-col`,
      children: [
        (0, U.jsx)(Pc, {}),
        (0, U.jsxs)(`div`, {
          className: `flex flex-1 pt-16`,
          children: [
            !r &&
              (0, U.jsx)(Ao, {
                className: `hidden lg:block lg:fixed left-0 top-16 bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40`,
              }),
            r &&
              (0, U.jsxs)(U.Fragment, {
                children: [
                  (0, U.jsx)(`div`, {
                    className: `fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${e ? `opacity-100` : `opacity-0 pointer-events-none`}`,
                    onClick: n,
                  }),
                  (0, U.jsx)(`div`, {
                    className: `fixed left-0 top-16 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${e ? `translate-x-0` : `-translate-x-full`}`,
                    children: (0, U.jsx)(Ao, {
                      className: `block bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`,
                    }),
                  }),
                ],
              }),
            (0, U.jsx)(`main`, {
              className: `flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${r ? `` : `pb-16 lg:pb-0 ${e ? `lg:ml-64` : `lg:ml-16`}`}`,
              children: (0, U.jsx)(c, {}),
            }),
          ],
        }),
        !r && (0, U.jsx)(Fc, {}),
      ],
    })
  );
}
function $({ children: e }) {
  let { isAuthenticated: t, loading: n, onboardingStatus: r } = G(),
    i = f();
  return n || (t && r === `loading`)
    ? null
    : t
      ? r === `required` || r === `error`
        ? (0, U.jsx)(d, {
            to: `/onboarding?${new URLSearchParams({ returnTo: Do(i), entryPoint: `protected_route` }).toString()}`,
            replace: !0,
          })
        : (0, U.jsx)(U.Fragment, { children: e })
      : (0, U.jsx)(d, { to: J(Do(i), `protected_route`), replace: !0 });
}
var Lc = `sandscape.tourFlowIn.decided`,
  Rc = 1024;
function zc(e) {
  let t = Bc(e);
  return t === `redirect` && e.viewportWidth < 1024 ? `stay` : t;
}
function Bc(e) {
  return e.hasSessionParam ||
    e.hasEntryPrompt ||
    e.alreadyDecided ||
    e.tourFinished ||
    e.cardDismissed
    ? `stay`
    : e.authLoading
      ? `undecided`
      : e.isAuthenticated
        ? e.onboardingStatus === `loading`
          ? `undecided`
          : e.onboardingStatus === `complete`
            ? e.hasSessions === null
              ? `undecided`
              : e.hasSessions
                ? `stay`
                : `redirect`
            : `stay`
        : `redirect`;
}
function Vc(e, t) {
  return e || (t === `undecided` ? null : t);
}
function Hc() {
  try {
    return localStorage.getItem(Lc) === `1`;
  } catch {
    return !1;
  }
}
function Uc() {
  try {
    localStorage.setItem(Lc, `1`);
  } catch {}
}
function Wc({ children: e }) {
  let t = f(),
    n = s(),
    { user: r, isAuthenticated: i, loading: a, onboardingStatus: o } = G(),
    [c] = (0, H.useState)(() => ({
      alreadyDecided: Hc(),
      tourFinished: Qe(ge),
      cardDismissed: be(),
    })),
    [l, u] = (0, H.useState)(null),
    [d, p] = (0, H.useState)(null),
    m = new URLSearchParams(t.search).has(`session`),
    h = !!t.state?.initialPrompt,
    g = m || h || c.alreadyDecided || c.tourFinished || c.cardDismissed,
    _ = r?.id,
    v = l && l.userId === _ ? l.hasSessions : null,
    y = !g && !d && !a && i && o === `complete` && !!_;
  (0, H.useEffect)(() => {
    if (!y || !_) return;
    let e = !1;
    return (
      Ec(_)
        .then((t) => {
          e || u({ userId: _, hasSessions: t.length > 0 });
        })
        .catch(() => {
          e || u({ userId: _, hasSessions: !0 });
        }),
      () => {
        e = !0;
      }
    );
  }, [y, _]);
  let b = typeof window > `u` ? Rc : window.innerWidth,
    x = zc({
      hasSessionParam: m,
      hasEntryPrompt: h,
      alreadyDecided: c.alreadyDecided,
      tourFinished: c.tourFinished,
      cardDismissed: c.cardDismissed,
      authLoading: a,
      isAuthenticated: i,
      onboardingStatus: o,
      hasSessions: v,
      viewportWidth: b,
    }),
    S = Vc(d, x) ?? `undecided`;
  return (
    (0, H.useEffect)(() => {
      let e = Vc(d, x);
      if (!(d || e === null)) {
        if ((p(e), e === `redirect`)) {
          (Uc(), n(`/tour`, { replace: !0 }));
          return;
        }
        v === !0 && Uc();
      }
    }, [d, x, v, n]),
    S === `stay` ? (0, U.jsx)(U.Fragment, { children: e }) : null
  );
}
var Gc = [`production`, `preview`, `development`, `local`];
function Kc() {
  let e = `production`;
  return Gc.includes(e) ? e : `production`;
}
function qc() {
  let e = Kc();
  return (
    e !== `production` &&
      console.log(`[Environment] ${e}`, {
        VITE_APP_ENV: `production`,
        VITE_VERCEL_ENV: `$VERCEL_ENV`,
        VITE_VERCEL_TARGET_ENV: `$VERCEL_TARGET_ENV`,
        VITE_VERCEL_GIT_COMMIT_REF: `$VERCEL_GIT_COMMIT_REF`,
        DEV: !1,
      }),
    e
  );
}
function Jc() {
  let e = qc(),
    t = e === `production`,
    n = e === `preview`;
  return {
    env: e,
    isProduction: t,
    isPreview: n,
    isDevelopment: e === `development` || e === `local`,
    requiresAuth: n || e === `development`,
    allowIndexing: t,
    showPreviewBanner: !t,
  };
}
var Yc = Jc(),
  Xc = [
    `/auth`,
    `/auth/callback`,
    `/onboarding`,
    `/login`,
    `/register`,
    `/reset-password`,
    `/about`,
    `/about/terms`,
    `/about/privacy`,
    `/about/cookie`,
    `/about/guidelines`,
    `/about/contact`,
    `/about/faq`,
    `/press`,
    `/alpha`,
    `/v2`,
    `/social`,
  ],
  Zc = [`/invite/`, `/offer/`];
function Qc(e) {
  return Xc.includes(e) ? !0 : Zc.some((t) => e.startsWith(t));
}
