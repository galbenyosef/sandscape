// assets__TourWrapper-BBwg2sIi 03 — children
// Lines 708-1010 of readable/assets__TourWrapper-BBwg2sIi.pretty.js (statement-aligned).
async function Y(e) {
  let t = await fetch(e);
  if (!t.ok) throw Error(`Tour fixture ${e} → HTTP ${t.status}`);
  return await t.json();
}
async function ae(e) {
  try {
    let t = await fetch(e);
    if (!t.ok) return null;
    let n = await t.json();
    return n && typeof n == `object` ? n : null;
  } catch {
    return null;
  }
}
function oe(e) {
  let t = [];
  for (let n of Object.values(e.frames ?? {}))
    for (let e of n?.steps ?? [])
      e.styleTweak && !t.includes(e.styleTweak) && t.push(e.styleTweak);
  return t;
}
function se(e, t) {
  if (e.type !== `balance_update`) return;
  let n = e.data;
  n && typeof n.balance == `number` && (t.current = n.balance);
}
function ce(e) {
  let t = J.get(e);
  if (t) return t.then((e) => (e.rearm(), e));
  let n = ue(e).catch((t) => {
    throw (J.delete(e), t);
  });
  return (J.set(e, n), n);
}
function le(e) {
  J.delete(e);
}
async function ue(e) {
  let t = `/tour-packs/${e}`,
    n = { ...(await Y(`${t}/pack.json`)), base: t },
    r = n.sandboxScene ?? ee,
    [i, a, o, s, c, l, u, d, f] = await Promise.all([
      Y(`${t}/fixture/session.json`),
      Y(`${t}/fixture/context.json`),
      Y(`${t}/fixture/assets.json`),
      Y(`${t}/fixture/chat.json`),
      Y(`${t}/fixture/actions.json`),
      Y(`${t}/fixture/inflight.json`),
      Y(`${t}/fixture/coins.json`),
      Y(`${t}/fixture/game.json`),
      ae(`${t}/${r.file}`),
    ]),
    m = F(e),
    h = a.context?.assets ?? [],
    g = new te(o.assets ?? [], h, n.pendingAsset);
  m.revealed && g.reveal(n.pendingAsset.assetId);
  let _ = new ne(a.context?.style_guide);
  if (m.styleTweaked) for (let e of oe(n)) _.applyTweak(e);
  let v = { ids: [...(m.addedNodeIds ?? [])] };
  R(e, v);
  let y = { ids: [...(m.completedNodeIds ?? [])] },
    b = new N(m.riderStage, m.riderSeen, (t) => I(e, { riderSeen: t })),
    x = {
      current:
        typeof m.balance == `number`
          ? m.balance
          : typeof u.balance == `number`
            ? u.balance
            : 500,
    },
    S = new V(i, s),
    C = new E({
      deliver: (t) => {
        (se(t, x),
          t.type === `balance_update` && I(e, { balance: x.current }),
          S.deliver(t));
      },
      reveal: (t) => {
        (g.reveal(t), I(e, { revealed: !0 }));
      },
      styleTweak: (t) => {
        (_.applyTweak(t), I(e, { styleTweaked: !0 }));
      },
      emit: (e) => p(e),
      completeNode: (t) => {
        y.ids.includes(t) ||
          (y.ids.push(t), I(e, { completedNodeIds: [...y.ids] }));
      },
      riderStage: (t) => {
        (I(e, { riderStage: t }), b.advance(t));
      },
    }),
    w = n.chatSequence ? n.frames?.[n.chatSequence] : void 0;
  S.attachPlayer(C, n.timeline, w);
  let T = i.session_id,
    D = {
      chat: S,
      assets: new H(g, t),
      scene: new U(r, f, T, t),
      game: new W(t, d.index_modified ?? 1, b, n.game),
      workflow: new G(g, _, a, l, v, y),
      actions: new K(c, n, C),
      coins: new q(u, x),
    },
    O = () => {
      (b.dispose(), C.stop());
    },
    k = () => b.sync();
  return (k(), { manifest: n, runtime: D, dispose: O, rearm: k });
}
var de = { "run-finished": `tour:game-run-finished` };
function fe(e, t) {
  let n = e;
  if (!n || n.type !== `sandscape:game-event`) return;
  let r = typeof n.event == `string` ? de[n.event] : void 0;
  r && t(r);
}
function pe() {
  if (typeof window > `u`) return () => {};
  let e = (e) => fe(e?.data, p);
  return (
    window.addEventListener(`message`, e),
    () => window.removeEventListener(`message`, e)
  );
}
var X = n(),
  me = `royaume-des-pepins`;
function Z({ children: e }) {
  return (0, X.jsx)(`div`, {
    className: `flex h-[calc(100dvh-64px)] items-center justify-center bg-background text-muted-foreground`,
    children: (0, X.jsx)(`p`, { className: `text-sm`, children: e }),
  });
}
function Q() {
  return (0, X.jsxs)(`div`, {
    className: `flex h-[100dvh] flex-col items-center justify-center gap-4 bg-background px-6 text-center`,
    children: [
      (0, X.jsx)(`p`, {
        className: `max-w-xs text-sm text-muted-foreground`,
        children: `The guided tour needs a wider screen. Open it on a laptop or desktop.`,
      }),
      (0, X.jsx)(`a`, {
        href: `/`,
        className: `text-sm font-medium text-primary hover:underline`,
        children: `Back to home`,
      }),
    ],
  });
}
var $ = `(min-width: 1024px)`;
function he({ ctx: e, packSlug: t }) {
  let { isAuthenticated: n } = b(),
    i = r(),
    a = `/tour/claim?pack=${encodeURIComponent(t)}`,
    o = n ? e.step.cta?.authedLabel : e.step.cta?.anonLabel;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`button`, {
        type: `button`,
        onClick: () => e.complete(),
        className: `text-xs text-muted-foreground transition-colors hover:text-foreground`,
        children: `Look around first`,
      }),
      (0, X.jsx)(`button`, {
        type: `button`,
        onClick: () => {
          (e.complete(), i(n ? a : x(a, `guided_tour`)));
        },
        className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`,
        children: o,
      }),
    ],
  });
}
function ge({ packSlug: e }) {
  let { isAuthenticated: t } = b(),
    n = r(),
    i = `/tour/claim?pack=${encodeURIComponent(e)}`;
  return (0, X.jsxs)(`div`, {
    className: `flex flex-col gap-2.5`,
    children: [
      (0, X.jsxs)(`p`, {
        className: `text-xs leading-snug text-muted-foreground`,
        children: [
          (0, X.jsx)(`span`, {
            className: `font-medium text-foreground`,
            children: `You're exploring a replay.`,
          }),
          ` Open anything. Chat and generation need your own copy.`,
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: `flex items-center justify-end gap-3`,
        children: [
          (0, X.jsx)(`button`, {
            type: `button`,
            onClick: () => window.location.reload(),
            className: `text-xs text-muted-foreground transition-colors hover:text-foreground`,
            children: `Replay the tour`,
          }),
          (0, X.jsx)(`button`, {
            type: `button`,
            onClick: () => n(t ? i : x(i, `guided_tour`)),
            className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`,
            children: t ? `Open your game` : `Keep this game`,
          }),
        ],
      }),
    ],
  });
}
function _e() {
  let { toast: e } = a(),
    { slug: t } = i(),
    n = t || me,
    [r, o] = (0, C.useState)(null),
    [s, l] = (0, C.useState)(null),
    [u, d] = (0, C.useState)(
      () => typeof window > `u` || window.matchMedia($).matches,
    );
  return (
    (0, C.useEffect)(() => {
      if (typeof window > `u`) return;
      let e = window.matchMedia($),
        t = () => d(e.matches);
      return (
        e.addEventListener(`change`, t),
        () => e.removeEventListener(`change`, t)
      );
    }, []),
    (0, C.useEffect)(() => {
      let e = !1;
      return (
        o(null),
        l(null),
        f(n) && (re(n), le(n)),
        ce(n)
          .then((t) => {
            e ||
              ((c.current = t.runtime),
              typeof window < `u` &&
                window.dispatchEvent(new CustomEvent(`coin-balance-refresh`)),
              o(t));
          })
          .catch((t) => {
            e ||
              (console.error(`[tour] failed to load pack`, n, t),
              l(t instanceof Error ? t.message : `Failed to load the tour.`));
          }),
        () => {
          e = !0;
        }
      );
    }, [n]),
    (0, C.useEffect)(() => {
      if (typeof window > `u`) return;
      let t = (t) =>
          t instanceof z
            ? (e({
                title: `Not available in the tour`,
                description: `This is a replay of the game. Keep it to do this for real.`,
              }),
              !0)
            : !1,
        n = (e) => {
          t(e.error) && e.preventDefault();
        },
        r = (e) => {
          t(e.reason) && e.preventDefault();
        };
      return (
        window.addEventListener(`error`, n),
        window.addEventListener(`unhandledrejection`, r),
        () => {
          (window.removeEventListener(`error`, n),
            window.removeEventListener(`unhandledrejection`, r));
        }
      );
    }, [e]),
    (0, C.useEffect)(() => pe(), []),
    (0, C.useEffect)(() => {
      if (r)
        return () => {
          (r.dispose(),
            typeof window < `u` &&
              window.dispatchEvent(new CustomEvent(`coin-balance-refresh`)));
        };
    }, [r]),
    u
      ? s
        ? (0, X.jsxs)(Z, { children: [`Could not start the tour: `, s] })
        : r
          ? (0, X.jsx)(m, {
              pack: r.manifest,
              renderCta: (e) => (0, X.jsx)(he, { ctx: e, packSlug: n }),
              renderEnded: () => (0, X.jsx)(ge, { packSlug: n }),
              children: (0, X.jsx)(S, {}),
            })
          : (0, X.jsx)(Z, { children: `Loading the tour…` })
      : (0, X.jsx)(Q, {})
  );
}
