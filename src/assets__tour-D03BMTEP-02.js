// assets__tour-D03BMTEP 02 — stepindex
// Lines 291-619 of readable/assets__tour-D03BMTEP.pretty.js (statement-aligned).
var M = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  presenceAffectsLayout: i = !0,
  mode: o = `sync`,
  propagate: s = !1,
  anchorX: c = `left`,
  anchorY: u = `top`,
  root: d,
}) => {
  let [f, p] = h(s),
    m = (0, D.useMemo)(() => j(e), [e]),
    g = s && !f ? [] : m.map(A),
    _ = (0, D.useRef)(!0),
    v = (0, D.useRef)(m),
    y = a(() => new Map()),
    b = (0, D.useRef)(new Set()),
    [S, C] = (0, D.useState)(m),
    [w, T] = (0, D.useState)(m);
  x(() => {
    ((_.current = !1), (v.current = m));
    for (let e = 0; e < w.length; e++) {
      let t = A(w[e]);
      g.includes(t)
        ? (y.delete(t), b.current.delete(t))
        : y.get(t) !== !0 && y.set(t, !1);
    }
  }, [w, g.length, g.join(`-`)]);
  let O = [];
  if (m !== S) {
    let e = [...m];
    for (let t = 0; t < w.length; t++) {
      let n = w[t],
        r = A(n);
      g.includes(r) || (e.splice(t, 0, n), O.push(n));
    }
    return (o === `wait` && O.length && (e = O), T(j(e)), C(m), null);
  }
  let { forceRender: k } = (0, D.useContext)(l);
  return (0, E.jsx)(E.Fragment, {
    children: w.map((e) => {
      let a = A(e),
        l = s && !f ? !1 : m === w || g.includes(a);
      return (0, E.jsx)(
        re,
        {
          isPresent: l,
          initial: !_.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: i,
          mode: o,
          root: d,
          onExitComplete: l
            ? void 0
            : () => {
                if (b.current.has(a)) return;
                if (y.has(a)) (b.current.add(a), y.set(a, !0));
                else return;
                let e = !0;
                (y.forEach((t) => {
                  t || (e = !1);
                }),
                  e && (k?.(), T(v.current), s && p?.(), r && r()));
              },
          anchorX: c,
          anchorY: u,
          children: e,
        },
        a,
      );
    }),
  });
};
function N(e) {
  let t = a(() => u(e)),
    { isStatic: n } = (0, D.useContext)(g);
  if (n) {
    let [, n] = (0, D.useState)(e);
    (0, D.useEffect)(() => t.on(`change`, n), []);
  }
  return t;
}
function ae(e, t) {
  let n = N(t()),
    r = () => n.set(t());
  return (
    r(),
    x(() => {
      let t = () => i.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), p(r));
      };
    }),
    n
  );
}
function oe(e) {
  ((b.current = []), e());
  let t = ae(b.current, e);
  return ((b.current = void 0), t);
}
function P(e, t, n, r) {
  if (typeof e == `function`) return oe(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`)
    return ce(e, t, n, r);
  let i = typeof t == `function` ? t : S(t, n, r),
    a = Array.isArray(e) ? se(e, i) : se([e], ([e]) => i(e)),
    o = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    o &&
      !o.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      r?.clamp !== !1 &&
      (a.accelerate = {
        ...o,
        times: t,
        keyframes: n,
        isTransformed: !0,
        ...(r?.ease ? { ease: r.ease } : {}),
      }),
    a
  );
}
function se(e, t) {
  let n = a(() => []);
  return ae(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function ce(e, t, n, r) {
  let i = a(() => Object.keys(n)),
    o = a(() => ({}));
  for (let a of i) o[a] = P(e, t, n[a], r);
  return o;
}
function le(e, t = {}) {
  let { isStatic: n } = (0, D.useContext)(g),
    r = () => (y(e) ? e.get() : e);
  if (n) return P(r);
  let i = N(r());
  return (
    (0, D.useInsertionEffect)(() => C(i, e, t), [i, JSON.stringify(t)]),
    i
  );
}
function F(e, t = {}) {
  return le(e, { type: `spring`, ...t });
}
function I() {
  !m.current && d();
  let [e] = (0, D.useState)(v.current);
  return e;
}
var L = e(r()),
  R = `tour:on-enter`,
  z = `tour:step-entered`,
  B = `tour:wait-skipped`,
  ue = new Set([
    `chat-draft`,
    `select-node`,
    `open-editor`,
    `show-flow`,
    `show-game`,
    `open-editor-menu`,
  ]);
function de(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  return typeof t.kind != `string` || !ue.has(t.kind)
    ? null
    : {
        kind: t.kind,
        arg: typeof t.arg == `string` ? t.arg : void 0,
        tab: typeof t.tab == `string` ? t.tab : void 0,
        assetId: typeof t.assetId == `string` ? t.assetId : void 0,
      };
}
var fe = 0.7,
  pe = 4e3,
  V = { stiffness: 320, damping: 34, mass: 0.9 },
  H = 2147483e3;
function me(e, t) {
  let n = e.advance;
  return (n.type === `event` || n.type === `wait`) && n.event === t;
}
function he(e) {
  return e.allowInteraction === void 0
    ? e.advance.type !== `next`
    : e.allowInteraction;
}
function ge(e, t) {
  let n = t,
    r = e.steps[t]?.resumeAt;
  if (r) {
    let t = e.steps.findIndex((e) => e.id === r);
    t >= 0 && (n = t);
  }
  for (; n > 0 && e.steps[n]?.advance.type === `wait`;) n--;
  return n;
}
function _e(e, t) {
  let n = Math.max(0, e.steps.length - 1);
  return t
    ? t.completedAt == null
      ? t.skippedAt == null
        ? { stepIndex: ge(e, U(t.stepIndex, 0, n)), status: `running` }
        : { stepIndex: U(t.stepIndex, 0, n), status: `skipped` }
      : { stepIndex: U(t.stepIndex, 0, n), status: `completed` }
    : { stepIndex: 0, status: `running` };
}
function U(e, t, n) {
  return Number.isFinite(e) ? Math.min(n, Math.max(t, Math.trunc(e))) : t;
}
function ve(e, t) {
  let n = t.now ?? Date.now,
    r = Math.max(0, e.steps.length - 1),
    i = new Set(),
    a = _e(e, t.storage.read(e.slug)),
    o = () => {
      for (let e of i) e(a);
    },
    s = (n, r) => {
      ((a = n), t.storage.write(e.slug, r), o());
    },
    c = () => {
      if (a.stepIndex >= r) {
        s(
          { stepIndex: r, status: `completed` },
          { stepIndex: r, completedAt: n() },
        );
        return;
      }
      let e = a.stepIndex + 1;
      s({ stepIndex: e, status: `running` }, { stepIndex: e });
    };
  return {
    getState: () => a,
    currentStep: () =>
      a.status === `running` ? (e.steps[a.stepIndex] ?? null) : null,
    subscribe(e) {
      return (
        i.add(e),
        () => {
          i.delete(e);
        }
      );
    },
    next() {
      a.status === `running` && c();
    },
    prev() {
      if (a.status !== `running` || a.stepIndex <= 0) return;
      let e = a.stepIndex - 1;
      s({ stepIndex: e, status: `running` }, { stepIndex: e });
    },
    goto(e) {
      let t = U(e, 0, r);
      s({ stepIndex: t, status: `running` }, { stepIndex: t });
    },
    skip() {
      a.status === `running` &&
        s(
          { stepIndex: a.stepIndex, status: `skipped` },
          { stepIndex: a.stepIndex, skippedAt: n() },
        );
    },
    complete() {
      a.status === `running` &&
        s(
          { stepIndex: a.stepIndex, status: `completed` },
          { stepIndex: a.stepIndex, completedAt: n() },
        );
    },
    handleEvent(t) {
      if (a.status !== `running`) return;
      let n = e.steps[a.stepIndex];
      n && me(n, t) && c();
    },
  };
}
var W = (e) => `sandscape.tour.${e}`,
  G = (e) => `sandscape.tour-history.${e}`;
function K(e) {
  try {
    let t = localStorage.getItem(G(e));
    if (!t) return null;
    let n = JSON.parse(t);
    if (!n || typeof n != `object`) return null;
    let {
      firstTerminalAt: r,
      lastTerminalAt: i,
      terminalCount: a,
      lastOutcome: o,
    } = n;
    return typeof r != `number` ||
      typeof i != `number` ||
      typeof a != `number` ||
      a < 1 ||
      (o !== `completed` && o !== `skipped`)
      ? null
      : {
          firstTerminalAt: r,
          lastTerminalAt: i,
          terminalCount: a,
          lastOutcome: o,
        };
  } catch {
    return null;
  }
}
function ye(e, t, n) {
  try {
    let r = K(e),
      i = {
        firstTerminalAt: r?.firstTerminalAt ?? n,
        lastTerminalAt: n,
        terminalCount: (r?.terminalCount ?? 0) + 1,
        lastOutcome: t,
      };
    localStorage.setItem(G(e), JSON.stringify(i));
  } catch {}
}
