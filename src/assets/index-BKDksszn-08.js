// index-BKDksszn 08 — current
// Lines 2227-2561 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
function xr({ children: e }) {
  let [t, n] = (0, U.useState)(null),
    [r, i] = (0, U.useState)(null),
    [a, o] = (0, U.useState)(!0),
    [s, c] = (0, U.useState)(vr),
    [l, u] = (0, U.useState)(`loading`),
    d = (0, U.useRef)(null),
    f = (0, U.useRef)(`loading`),
    p = (0, U.useRef)(null),
    m = (p.current ??= hr()),
    h = (0, U.useRef)({ userId: null }),
    g = (0, U.useRef)(null),
    [_, v] = (0, U.useState)(!1),
    y = (0, U.useRef)(null),
    b = (0, U.useCallback)((e) => {
      h.current.userId !== e &&
        ((h.current = { userId: e }), (g.current = null), v(!1), ke());
    }, []),
    x = (0, U.useCallback)((e) => {
      (y.current !== null && y.current !== e.codingAccess && ke(),
        (y.current = e.codingAccess));
      let t = e.onboardingCompletedAt ? `complete` : `required`;
      return ((f.current = t), c(e), u(t), t);
    }, []),
    S = (0, U.useCallback)(() => {
      (b(null),
        m.invalidate(),
        (d.current = null),
        (f.current = `required`),
        c(vr),
        u(`required`),
        (y.current = null));
    }, [m, b]),
    C = (0, U.useCallback)(
      async (e, t) => {
        if (!e) return (S(), `required`);
        let n = t ?? m.claim();
        if (!m.isCurrent(n)) return f.current;
        let r = e.id,
          i = d.current;
        u((e) => pr(e, i, r));
        try {
          let e = await br(r);
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
          let t = mr(f.current, i, r);
          return (
            t === `error` &&
              ((d.current = r), (f.current = `error`), c(vr), u(`error`)),
            t
          );
        }
      },
      [x, S, m],
    ),
    T = (0, U.useCallback)(async () => {
      let e = t ?? (await w.getCurrentUser());
      return (e && !t && n(e), C(e));
    }, [C, t]);
  (0, U.useEffect)(() => {
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
      u((e) => pr(e, d.current, a.id));
      let o = m.claim();
      window.setTimeout(() => {
        e && C(a, o);
      }, 0);
    });
    return () => {
      ((e = !1), t?.subscription.unsubscribe());
    };
  }, [C, S, m, b]);
  let E = (0, U.useCallback)(async (e, t, r) => {
      let a = await w.signIn({ email: e, password: t, captchaToken: r });
      (i(a.session ?? null), n(a.user ?? null));
    }, []),
    D = (0, U.useCallback)(async () => {
      (await w.signOut(), i(null), n(null), S());
    }, [S]),
    O = (0, U.useCallback)(async (e, t, n) => {
      await w.requestEmailOtp(e, { captchaToken: t, emailRedirectTo: n });
    }, []),
    k = (0, U.useCallback)(async (e, t) => {
      let r = await w.verifyEmailOtp(e, t);
      (i(r.session ?? null), n(r.user ?? null));
    }, []),
    A = (0, U.useCallback)(async (e, t) => {
      await w.signInWithOAuth(e, t);
    }, []),
    ee = (0, U.useCallback)(async (e, t, n) => {
      await w.resetPassword(e, t, n);
    }, []),
    j = (0, U.useCallback)(async (e) => {
      await w.updatePassword(e);
    }, []),
    M = (0, U.useCallback)(async (e, t) => {
      await w.updateEmail(e, t);
    }, []),
    N = (0, U.useCallback)(async () => {
      (await w.deleteAccount(), await w.signOut(), i(null), n(null), S());
    }, [S]),
    P = (0, U.useCallback)(async () => {
      let e = await w.getCurrentUser();
      n(e);
    }, []),
    te = (0, U.useCallback)(
      async (e, t) => {
        (await w.completeOnboarding(e, t), await T());
      },
      [T],
    ),
    ne = (0, U.useCallback)(() => w.getActiveSignInMethods(), []),
    re = (0, U.useCallback)(async () => {
      await T();
    }, [T]),
    ie = (0, U.useCallback)(async () => {
      let e = await Te(),
        t = await fetch(`${Ee.API_BASE_URL}/api/alpha/request-access`, {
          method: `POST`,
          headers: e,
        });
      if (!t.ok) {
        let e = await t.text();
        throw Error(`Failed to request creation access: ${e || t.status}`);
      }
      await T();
    }, [T]),
    ae = (0, U.useCallback)(async () => {
      let e = h.current;
      if (!r || e.userId !== r.user.id)
        throw Error(`Sign in to request coding access.`);
      if (g.current?.identity === e) return g.current.promise;
      v(!0);
      let t = (async () => {
        let t = await fetch(
            `${Ee.API_BASE_URL}/api/alpha/request-coding-access`,
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
    oe = (0, U.useMemo)(
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
        resetPassword: ee,
        updatePassword: j,
        updateEmail: M,
        deleteAccount: N,
        refreshUser: P,
        refreshAccountState: T,
        completeOnboarding: te,
        getActiveSignInMethods: ne,
        username: s.username,
        canCreate: s.canCreate,
        refreshCanCreate: re,
        requestedCreationAt: s.requestedCreationAt,
        onWaitlist: s.requestedCreationAt != null && !s.canCreate,
        requestCreationAccess: ie,
        codingAccess: s.codingAccess,
        requestedCodingAccessAt: s.requestedCodingAccessAt,
        codingAccessRequested:
          s.requestedCodingAccessAt != null && !s.codingAccess,
        codingAccessRequestPending: _,
        requestCodingAccess: ae,
      }),
      [te, N, ne, a, E, D, l, s, T, re, P, ie, ae, O, _, ee, r, A, M, j, t, k],
    );
  return (0, W.jsx)(_r.Provider, { value: oe, children: e });
}
function Sr() {
  let e = (0, U.useContext)(_r);
  if (!e) throw Error(`useAuth must be used within an AuthProvider`);
  return e;
}
var Cr = (0, U.createContext)(null);
function wr({ children: e }) {
  let [t, n] = (0, U.useState)(!0),
    [r, i] = (0, U.useState)(!1),
    a = (0, U.useCallback)(() => n((e) => !e), []),
    o = (0, U.useCallback)(() => n(!1), []);
  return (0, W.jsx)(Cr.Provider, {
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
function Tr() {
  let e = (0, U.useContext)(Cr);
  if (!e) throw Error(`useSidebar must be used within a SidebarProvider`);
  return e;
}
var Er = U.forwardRef(({ className: e, type: t, ...n }, r) =>
  (0, W.jsx)(`input`, {
    type: t,
    className: x(
      `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e,
    ),
    ref: r,
    ...n,
  }),
);
Er.displayName = `Input`;
var Dr = Object.defineProperty,
  Or = U.forwardRef(
    ((e, t) => Dr(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      return (0, W.jsx)(D.label, {
        ...e,
        ref: t,
        onMouseDown: (t) => {
          t.target.closest(`button, input, select, textarea`) ||
            (e.onMouseDown?.(t),
            !t.defaultPrevented && t.detail > 1 && t.preventDefault());
        },
      });
    }, `Label`),
  ),
  kr = M(
    `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
  ),
  Ar = U.forwardRef(({ className: e, ...t }, n) =>
    (0, W.jsx)(Or, { ref: n, className: x(kr(), e), ...t }),
  );
Ar.displayName = Or.displayName;
var jr = class {
  static async joinMailingList(e) {
    try {
      let { error: t } = await C.from(`mailing_list`).insert([
        {
          email: e.toLowerCase(),
          source: `client_mailing_list`,
          status: `subscribed`,
          creation_interest: !1,
        },
      ]);
      if (t) {
        if (t.code === `23505`)
          return {
            success: !0,
            inserted: !1,
            duplicate: !0,
            error: `This email is already on the mailing list.`,
          };
        throw t;
      }
      return { success: !0, inserted: !0 };
    } catch (e) {
      return (
        console.error(`Mailing list error:`, e),
        {
          success: !1,
          inserted: !1,
          error: `Failed to register. Please try again later.`,
        }
      );
    }
  }
};
