// index-CBcimEr9 04 — current
// Lines 1169-1513 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function Hn() {
  let { toasts: e } = h();
  return (0, U.jsxs)(Pn, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, U.jsxs)(
          Ln,
          {
            ...i,
            children: [
              (0, U.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t && (0, U.jsx)(Bn, { children: t }),
                  n && (0, U.jsx)(Vn, { children: n }),
                ],
              }),
              r,
              (0, U.jsx)(zn, {}),
            ],
          },
          e,
        );
      }),
      (0, U.jsx)(Fn, {}),
    ],
  });
}
var Un = ({ ...e }) => {
  let { theme: t = `system` } = _t();
  return (0, U.jsx)(oe, {
    theme: t,
    className: `toaster group`,
    toastOptions: {
      classNames: {
        toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
        description: `group-[.toast]:text-muted-foreground`,
        actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
        cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
      },
    },
    ...e,
  });
};
function Wn(e, t, n) {
  return t === n ? e : `loading`;
}
function Gn(e, t, n) {
  return t === n ? (e === `loading` ? `error` : e) : `error`;
}
function Kn() {
  let e = 0;
  return {
    claim: () => (e += 1),
    invalidate: () => {
      e += 1;
    },
    isCurrent: (t) => t === e,
  };
}
function qn(e, t) {
  return t.kind === `granted` || (t.kind !== `revoked` && e);
}
var Jn = (0, H.createContext)(void 0),
  Yn = {
    username: null,
    canCreate: !1,
    onboardingCompletedAt: null,
    codingAccess: !1,
    requestedCodingAccessAt: null,
  },
  Xn = (e) => new Promise((t) => window.setTimeout(t, e));
async function Zn(e) {
  for (let t of [0, 100, 250]) {
    t && (await Xn(t));
    let n = await w.getProfileAuthState(e);
    if (n) return n;
  }
  throw Error(`Profile was not created`);
}
function Qn({ children: e }) {
  let [t, n] = (0, H.useState)(null),
    [r, i] = (0, H.useState)(null),
    [a, o] = (0, H.useState)(!0),
    [s, c] = (0, H.useState)(Yn),
    [l, u] = (0, H.useState)(`loading`),
    d = (0, H.useRef)(null),
    f = (0, H.useRef)(`loading`),
    p = (0, H.useRef)(null),
    m = (p.current ??= Kn()),
    h = (0, H.useRef)({ userId: null }),
    g = (0, H.useRef)(null),
    [_, v] = (0, H.useState)(!1),
    y = (0, H.useRef)(null),
    b = (0, H.useCallback)((e) => {
      h.current.userId !== e &&
        ((h.current = { userId: e }), (g.current = null), v(!1), Me());
    }, []),
    x = (0, H.useCallback)((e) => {
      (y.current !== null && y.current !== e.codingAccess && Me(),
        (y.current = e.codingAccess));
      let t = e.onboardingCompletedAt ? `complete` : `required`;
      return ((f.current = t), c(e), u(t), t);
    }, []),
    S = (0, H.useCallback)(() => {
      (b(null),
        m.invalidate(),
        (d.current = null),
        (f.current = `required`),
        c(Yn),
        u(`required`),
        (y.current = null));
    }, [m, b]),
    C = (0, H.useCallback)(
      async (e, t) => {
        if (!e) return (S(), `required`);
        let n = t ?? m.claim();
        if (!m.isCurrent(n)) return f.current;
        let r = e.id,
          i = d.current;
        u((e) => Wn(e, i, r));
        try {
          let e = await Zn(r);
          return m.isCurrent(n)
            ? ((d.current = r), x(e))
            : e.onboardingCompletedAt
              ? `complete`
              : `required`;
        } catch (e) {
          if (
            (console.error(`Error loading account profile state:`, e),
            !m.isCurrent(n))
          )
            return `error`;
          let t = Gn(f.current, i, r);
          return (
            t === `error` &&
              ((d.current = r), (f.current = `error`), c(Yn), u(`error`)),
            t
          );
        }
      },
      [x, S, m],
    ),
    T = (0, H.useCallback)(async () => {
      let e = t ?? (await w.getCurrentUser());
      return (e && !t && n(e), C(e));
    }, [C, t]);
  (0, H.useEffect)(() => {
    let e = !0;
    w.getSession()
      .then(async (t) => {
        e &&
          (b(t?.user.id ?? null),
          i(t),
          n(t?.user ?? null),
          t?.user ? await C(t.user) : S());
      })
      .catch((t) => {
        (console.error(`Error initializing auth session:`, t), e && u(`error`));
      })
      .finally(() => {
        e && o(!1);
      });
    let { data: t } = w.onAuthStateChange((t, r) => {
      if (!e) return;
      let a = r?.user ?? null;
      if ((b(a?.id ?? null), i(r), n(a), !a)) {
        S();
        return;
      }
      u((e) => Wn(e, d.current, a.id));
      let o = m.claim();
      window.setTimeout(() => {
        e && C(a, o);
      }, 0);
    });
    return () => {
      ((e = !1), t?.subscription.unsubscribe());
    };
  }, [C, S, m, b]);
  let E = (0, H.useCallback)(async (e, t, r) => {
      let a = await w.signIn({ email: e, password: t, captchaToken: r });
      (i(a.session ?? null), n(a.user ?? null));
    }, []),
    D = (0, H.useCallback)(async () => {
      (await w.signOut(), i(null), n(null), S());
    }, [S]),
    O = (0, H.useCallback)(async (e, t, n) => {
      await w.requestEmailOtp(e, { captchaToken: t, emailRedirectTo: n });
    }, []),
    k = (0, H.useCallback)(async (e, t) => {
      let r = await w.verifyEmailOtp(e, t);
      (i(r.session ?? null), n(r.user ?? null));
    }, []),
    A = (0, H.useCallback)(async (e, t) => {
      await w.signInWithOAuth(e, t);
    }, []),
    j = (0, H.useCallback)(async (e, t, n) => {
      await w.resetPassword(e, t, n);
    }, []),
    ee = (0, H.useCallback)(async (e) => {
      await w.updatePassword(e);
    }, []),
    M = (0, H.useCallback)(async (e, t) => {
      await w.updateEmail(e, t);
    }, []),
    N = (0, H.useCallback)(async () => {
      (await w.deleteAccount(), await w.signOut(), i(null), n(null), S());
    }, [S]),
    P = (0, H.useCallback)(async () => {
      let e = await w.getCurrentUser();
      n(e);
    }, []),
    te = (0, H.useCallback)(
      async (e, t) => {
        (await w.completeOnboarding(e, t), await T());
      },
      [T],
    ),
    ne = (0, H.useCallback)(() => w.getActiveSignInMethods(), []),
    re = (0, H.useCallback)(async () => {
      await T();
    }, [T]),
    ie = (0, H.useCallback)(async () => {
      let e = h.current;
      if (!r || e.userId !== r.user.id)
        throw Error(`Sign in to request coding access.`);
      if (g.current?.identity === e) return g.current.promise;
      v(!0);
      let t = (async () => {
        let t = await fetch(
            `${ke.API_BASE_URL}/api/alpha/request-coding-access`,
            {
              method: `POST`,
              headers: {
                "Content-Type": `application/json`,
                Authorization: `Bearer ${r.access_token}`,
              },
            },
          ),
          n = await t.json();
        if (!t.ok)
          throw Error(
            n.error || `Failed to request coding access (${t.status})`,
          );
        if (
          typeof n.requested_coding_access_at != `string` ||
          !n.requested_coding_access_at
        )
          throw Error(
            `The server did not return a coding-access request timestamp.`,
          );
        return e === h.current
          ? (m.invalidate(),
            c((e) => ({
              ...e,
              requestedCodingAccessAt: n.requested_coding_access_at,
            })),
            !0)
          : !1;
      })();
      g.current = { identity: e, promise: t };
      try {
        return await t;
      } catch (t) {
        if (e !== h.current) return !1;
        throw t;
      } finally {
        g.current?.promise === t && ((g.current = null), v(!1));
      }
    }, [r, m]),
    ae = (0, H.useMemo)(
      () => ({
        user: t,
        session: r,
        isAuthenticated: !!t,
        loading: a,
        onboardingStatus: l,
        login: E,
        logout: D,
        requestEmailOtp: O,
        verifyEmailOtp: k,
        signInWithOAuth: A,
        resetPassword: j,
        updatePassword: ee,
        updateEmail: M,
        deleteAccount: N,
        refreshUser: P,
        refreshAccountState: T,
        completeOnboarding: te,
        getActiveSignInMethods: ne,
        username: s.username,
        canCreate: s.canCreate,
        refreshCanCreate: re,
        codingAccess: s.codingAccess,
        requestedCodingAccessAt: s.requestedCodingAccessAt,
        codingAccessRequested:
          s.requestedCodingAccessAt != null && !s.codingAccess,
        codingAccessRequestPending: _,
        requestCodingAccess: ie,
      }),
      [te, N, ne, a, E, D, l, s, T, re, P, ie, O, _, j, r, A, M, ee, t, k],
    );
  return (0, U.jsx)(Jn.Provider, { value: ae, children: e });
}
function G() {
  let e = (0, H.useContext)(Jn);
  if (!e) throw Error(`useAuth must be used within an AuthProvider`);
  return e;
}
var $n = (0, H.createContext)(null);
function er({ children: e }) {
  let [t, n] = (0, H.useState)(!0),
    [r, i] = (0, H.useState)(!1),
    a = (0, H.useCallback)(() => n((e) => !e), []),
    o = (0, H.useCallback)(() => n(!1), []);
  return (0, U.jsx)($n.Provider, {
    value: {
      isOpen: t,
      toggle: a,
      close: o,
      overlayMode: r,
      setOverlayMode: i,
    },
    children: e,
  });
}
function tr() {
  let e = (0, H.useContext)($n);
  if (!e) throw Error(`useSidebar must be used within a SidebarProvider`);
  return e;
}
var nr = H.forwardRef(({ className: e, type: t, ...n }, r) =>
  (0, U.jsx)(`input`, {
    type: t,
    className: x(
      `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e,
    ),
    ref: r,
    ...n,
  }),
);
nr.displayName = `Input`;
