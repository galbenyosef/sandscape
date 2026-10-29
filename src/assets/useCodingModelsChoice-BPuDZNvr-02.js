// useCodingModelsChoice-BPuDZNvr 02 — error
// Lines 254-389 of readable/assets/useCodingModelsChoice-BPuDZNvr.pretty.js (statement-aligned).
function P(e) {
  let {
      actionId: t,
      sessionId: n,
      includeChildren: r = !1,
      validate: l = !0,
      completedRun: d = null,
    } = e,
    f = N(),
    { user: p } = a(),
    m = p?.id ?? null,
    [h, g] = (0, s.useState)(null);
  (0, s.useEffect)(() => {
    if (!f || !m) return;
    let e = !1;
    return (
      M(m)
        .then((t) => {
          e || g({ userId: m, catalog: t, error: null });
        })
        .catch((t) => {
          (console.error(
            `[useCodingModelsChoice] coding models unavailable:`,
            t,
          ),
            e ||
              g({
                userId: m,
                catalog: null,
                error:
                  t instanceof Error
                    ? t.message
                    : `Could not load the coding models`,
              }));
        }),
      () => {
        e = !0;
      }
    );
  }, [f, m]);
  let v = f && h?.userId === m ? h.catalog : null,
    C = f && h?.userId === m ? h.error : null,
    w = (0, s.useMemo)(() => (v && t ? u(v, t, r) : []), [v, t, r]),
    T = d && (!d.actionId || d.actionId === t) ? d.at : null,
    [E, D] = (0, s.useState)(T);
  (0, s.useEffect)(() => {
    T !== null && D(T);
  }, [T]);
  let [k, A] = (0, s.useState)(null);
  (0, s.useEffect)(() => {
    if (!f || !n || i()) return;
    let e = !1;
    return (
      O(n)
        .then((t) => {
          e ||
            A({
              sessionId: n,
              runs: t.runs,
              lastChoice: t.last_choice,
              error: null,
            });
        })
        .catch((t) => {
          (console.error(
            `[useCodingModelsChoice] session coding models unavailable:`,
            t,
          ),
            e ||
              A({
                sessionId: n,
                runs: [],
                lastChoice: {},
                error:
                  t instanceof Error
                    ? t.message
                    : `Could not load this project's coding models`,
              }));
        }),
      () => {
        e = !0;
      }
    );
  }, [f, n, E]);
  let j = f && k?.sessionId === n ? k : null,
    P = `${n ?? ``}|${t ?? ``}`,
    [F, I] = (0, s.useState)({ key: P, rows: {}, edited: !1 }),
    L = F.key === P ? F.rows : {},
    R = j && t ? (j.lastChoice[t] ?? null) : null;
  (0, s.useEffect)(() => {
    I((e) =>
      e.key === P && e.edited ? e : { key: P, rows: x(R), edited: !1 },
    );
  }, [P, R]);
  let z = (e, n) => {
      let r = w.find((t) => t.skill === e);
      !v ||
        !r ||
        !t ||
        I((i) => {
          let a = i.key === P ? i.rows : {};
          return {
            key: P,
            edited: !0,
            rows: { ...a, [e]: _(v, r, a[e] ?? {}, n, t) },
          };
        });
    },
    B = () => I({ key: P, rows: {}, edited: !0 }),
    V = (0, s.useMemo)(() => (j && t ? S(j.runs, t) : null), [j, t]),
    H = f && !!v && w.length > 0,
    U = (0, s.useMemo)(
      () => (H && v && t ? y(v, w, L, t) : null),
      [H, v, w, L, t],
    ),
    W = v ? b(v, U) : [],
    G = o(l && U && W.length === 0 ? t : null, n, {}, U),
    K = l && G.error && G.errorCode && c.has(G.errorCode) ? G.error : null,
    q = W[0] ?? K,
    J = l && !!U && W.length === 0 && G.loading;
  return {
    visible: H,
    catalog: v,
    catalogError: C,
    actionId: t ?? ``,
    agents: w,
    rows: L,
    setRow: z,
    reset: B,
    lastRun: H ? V : null,
    historyError: H ? (j?.error ?? null) : null,
    payload: H ? U : null,
    error: U ? q : null,
    blocked: !!U && (!!q || J),
  };
}
