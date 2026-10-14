// index-BKDksszn 31 — jsx
// Lines 10975-11250 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
var al = () => {
  let e = s(),
    t = f(),
    { isAuthenticated: n } = Sr(),
    r = (t) => {
      e(n ? t : Xo(t, t === `/create` ? `create_gate` : `protected_route`));
    },
    i = [
      { path: `/`, icon: mn, label: `Home`, action: () => e(`/`) },
      { path: `/likes`, icon: pn, label: `Likes`, action: () => r(`/likes`) },
      {
        path: `/create`,
        icon: wn,
        label: `Create`,
        action: () => r(`/create`),
      },
      {
        path: `/following`,
        icon: Dn,
        label: `Follow`,
        action: () => r(`/following`),
      },
      {
        path: `/settings`,
        icon: de,
        label: `Settings`,
        action: () => r(`/settings`),
      },
    ],
    a = (e) =>
      (e === `/` && t.pathname === `/`) ||
      (e.startsWith(`/profile/`) && t.pathname.startsWith(`/profile/`))
        ? !0
        : t.pathname.startsWith(e);
  return (0, W.jsx)(`nav`, {
    className: `fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border px-2 py-1 flex lg:hidden z-50`,
    children: (0, W.jsx)(`div`, {
      className: `w-full grid grid-cols-5`,
      children: i.map((e) =>
        (0, W.jsxs)(
          `button`,
          {
            onClick: e.action,
            className: `flex flex-col items-center justify-center p-1 ${a(e.path) ? `text-primary` : `text-muted-foreground`} hover:text-foreground`,
            children: [
              (0, W.jsx)(e.icon, { className: `h-5 w-5 mb-1` }),
              (0, W.jsx)(`span`, {
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
function ol() {
  let { isOpen: e, setOverlayMode: t, close: n } = Tr(),
    r = Oe(f().pathname);
  return (
    (0, U.useEffect)(() => {
      r ? (t(!0), n()) : t(!1);
    }, [r, t, n]),
    (0, W.jsxs)(`div`, {
      className: `${r ? `h-dvh` : `h-screen`} flex flex-col`,
      children: [
        (0, W.jsx)(il, {}),
        (0, W.jsxs)(`div`, {
          className: `flex flex-1 pt-16`,
          children: [
            !r &&
              (0, W.jsx)($o, {
                className: `hidden lg:block lg:fixed left-0 top-16 bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40`,
              }),
            r &&
              (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)(`div`, {
                    className: `fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${e ? `opacity-100` : `opacity-0 pointer-events-none`}`,
                    onClick: n,
                  }),
                  (0, W.jsx)(`div`, {
                    className: `fixed left-0 top-16 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${e ? `translate-x-0` : `-translate-x-full`}`,
                    children: (0, W.jsx)($o, {
                      className: `block bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`,
                    }),
                  }),
                ],
              }),
            (0, W.jsx)(`main`, {
              className: `flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${r ? `` : `pb-16 lg:pb-0 ${e ? `lg:ml-64` : `lg:ml-16`}`}`,
              children: (0, W.jsx)(c, {}),
            }),
          ],
        }),
        !r && (0, W.jsx)(al, {}),
      ],
    })
  );
}
function $({ children: e }) {
  let { isAuthenticated: t, loading: n, onboardingStatus: r } = Sr(),
    i = f();
  return n || (t && r === `loading`)
    ? null
    : t
      ? r === `required` || r === `error`
        ? (0, W.jsx)(d, {
            to: `/onboarding?${new URLSearchParams({ returnTo: Yo(i), entryPoint: `protected_route` }).toString()}`,
            replace: !0,
          })
        : (0, W.jsx)(W.Fragment, { children: e })
      : (0, W.jsx)(d, { to: Xo(Yo(i), `protected_route`), replace: !0 });
}
var sl = `sandscape.tourFlowIn.decided`,
  cl = 1024;
function ll(e) {
  let t = ul(e);
  return t === `redirect` && e.viewportWidth < 1024 ? `stay` : t;
}
function ul(e) {
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
function dl(e, t) {
  return e || (t === `undecided` ? null : t);
}
function fl() {
  try {
    return localStorage.getItem(sl) === `1`;
  } catch {
    return !1;
  }
}
function pl() {
  try {
    localStorage.setItem(sl, `1`);
  } catch {}
}
function ml({ children: e }) {
  let t = f(),
    n = s(),
    { user: r, isAuthenticated: i, loading: a, onboardingStatus: o } = Sr(),
    [c] = (0, U.useState)(() => ({
      alreadyDecided: fl(),
      tourFinished: qe(I),
      cardDismissed: ve(),
    })),
    [l, u] = (0, U.useState)(null),
    [d, p] = (0, U.useState)(null),
    m = new URLSearchParams(t.search).has(`session`),
    h = !!t.state?.initialPrompt,
    g = m || h || c.alreadyDecided || c.tourFinished || c.cardDismissed,
    _ = r?.id,
    v = l && l.userId === _ ? l.hasSessions : null,
    y = !g && !d && !a && i && o === `complete` && !!_;
  (0, U.useEffect)(() => {
    if (!y || !_) return;
    let e = !1;
    return (
      Xc(_)
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
  let b = typeof window > `u` ? cl : window.innerWidth,
    x = ll({
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
    S = dl(d, x) ?? `undecided`;
  return (
    (0, U.useEffect)(() => {
      let e = dl(d, x);
      if (!(d || e === null)) {
        if ((p(e), e === `redirect`)) {
          (pl(), n(`/tour`, { replace: !0 }));
          return;
        }
        v === !0 && pl();
      }
    }, [d, x, v, n]),
    S === `stay` ? (0, W.jsx)(W.Fragment, { children: e }) : null
  );
}
var hl = [`production`, `preview`, `development`, `local`];
function gl() {
  let e = `production`;
  return hl.includes(e) ? e : `production`;
}
function _l() {
  let e = gl();
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
function vl() {
  let e = _l(),
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
var yl = vl(),
  bl = [
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
  xl = [`/invite/`];
function Sl(e) {
  return bl.includes(e) ? !0 : xl.some((t) => e.startsWith(t));
}
