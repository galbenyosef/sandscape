// tour-D03BMTEP 04 — children
// Lines 954-1193 of readable/assets/tour-D03BMTEP.pretty.js (statement-aligned).
function Ue({
  step: e,
  cutout: t,
  stepIndex: n,
  stepCount: r,
  showNext: i,
  nextLabel: a,
  onNext: o,
  onSkip: s,
  ctaSlot: c,
}) {
  let l = (0, D.useRef)(null),
    u = I(),
    [d, f] = (0, D.useState)(null),
    [p, m] = (0, D.useState)(null),
    { mediaUrl: h, line1: g, line2: v } = e.bubble,
    y = He(h, p, e.id);
  return (
    (0, D.useLayoutEffect)(() => {
      let n = l.current;
      if (!n || typeof window > `u`) return;
      let r = { width: n.offsetWidth, height: n.offsetHeight },
        i = { width: window.innerWidth, height: window.innerHeight };
      f(Ve(t, i, r, e.placement ?? `auto`));
    }, [
      t,
      e.placement,
      e.id,
      e.bubble.line1,
      e.bubble.line2,
      e.bubble.mediaUrl,
      y,
    ]),
    (0, E.jsxs)(_.div, {
      ref: l,
      initial: { opacity: 0, y: 8, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 6, scale: 0.98 },
      transition: u
        ? { duration: 0 }
        : { type: `spring`, stiffness: 420, damping: 32, delay: 0.18 },
      className: `fixed w-80 max-w-[calc(100vw-24px)] overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-2xl`,
      style: {
        top: d?.top ?? 0,
        left: d?.left ?? 0,
        zIndex: H + 1,
        visibility: d ? `visible` : `hidden`,
      },
      children: [
        y &&
          $(h) &&
          (0, E.jsx)(`img`, {
            src: h,
            alt: ``,
            onError: () => m(e.id),
            className: `block h-40 w-full bg-secondary object-cover`,
          }),
        y &&
          !$(h) &&
          (0, E.jsx)(`video`, {
            src: h,
            muted: !0,
            playsInline: !0,
            loop: !0,
            autoPlay: !0,
            onError: () => m(e.id),
            className: `block h-40 w-full bg-secondary object-cover`,
          }),
        (0, E.jsxs)(`div`, {
          className: `flex flex-col gap-3 p-4`,
          children: [
            (0, E.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                (0, E.jsx)(`p`, {
                  className: `text-sm font-medium leading-snug`,
                  children: g,
                }),
                v &&
                  (0, E.jsx)(`p`, {
                    className: `text-xs leading-snug text-muted-foreground`,
                    children: v,
                  }),
              ],
            }),
            (0, E.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, E.jsx)(`div`, {
                  className: `h-1 w-16 shrink-0 overflow-hidden rounded-full bg-foreground/20`,
                  role: `progressbar`,
                  "aria-valuenow": n + 1,
                  "aria-valuemin": 1,
                  "aria-valuemax": r,
                  "aria-label": `Step ${n + 1} of ${r}`,
                  children: (0, E.jsx)(`div`, {
                    className: `h-full rounded-full bg-primary transition-[width] duration-300`,
                    style: { width: `${((n + 1) / r) * 100}%` },
                  }),
                }),
                (0, E.jsxs)(`div`, {
                  className: `flex shrink-0 items-center gap-3`,
                  children: [
                    s &&
                      (0, E.jsx)(`button`, {
                        type: `button`,
                        onClick: s,
                        className: `text-xs text-muted-foreground transition-colors hover:text-foreground`,
                        children: `Skip`,
                      }),
                    c ||
                      (i &&
                        (0, E.jsx)(`button`, {
                          type: `button`,
                          onClick: o,
                          className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`,
                          children: a,
                        })),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var We = (0, D.createContext)(null);
function Ge(e, t) {
  return {
    top: e.top - t,
    left: e.left - t,
    width: e.width + t * 2,
    height: e.height + t * 2,
  };
}
function Ke({ pack: e, children: t, renderCta: n, renderEnded: r }) {
  let i = (0, D.useRef)(null);
  i.current ||= ve(e, { storage: be() });
  let a = i.current,
    [o, s] = (0, D.useState)(() => a.getState());
  ((0, D.useEffect)(() => a.subscribe(s), [a]),
    (0, D.useEffect)(() => je((e) => a.handleEvent(e)), [a]));
  let c = o.status === `running`,
    l = c ? (e.steps[o.stepIndex] ?? null) : null;
  (0, D.useEffect)(() => (we(c ? `running` : `ended`), () => we(`off`)), [c]);
  let u = (0, D.useRef)(null);
  ((u.current ||= Ae((e) => X(R, e))),
    (0, D.useEffect)(() => {
      (c && l && X(z, l.id), u.current?.(c, o.stepIndex, l));
    }, [c, l, o.stepIndex]));
  let d = e.skippable === !0;
  (0, D.useEffect)(() => {
    if (!c || !d) return;
    let e = (e) => {
      e.key === `Escape` && a.skip();
    };
    return (
      window.addEventListener(`keydown`, e),
      () => window.removeEventListener(`keydown`, e)
    );
  }, [c, d, a]);
  let f = l?.target ?? null,
    p = Ie(f, c),
    m = l?.spotlightPadding ?? 8,
    h = l?.spotlightRadius ?? 12,
    g = l && f && p.status === `found` && p.rect ? Ge(p.rect, m) : null,
    _ = l ? he(l) : !1,
    v = !!(l && f && p.status === `missing`),
    y =
      l != null &&
      (l.advance.type === `next` ||
        l.advance.type === `wait` ||
        l.showNextFallback === !0 ||
        (v && !0)),
    b = l?.cta && n ? n({ step: l, complete: () => a.complete() }) : null,
    x = (0, D.useMemo)(
      () => ({
        state: o,
        step: l,
        stepIndex: o.stepIndex,
        stepCount: e.steps.length,
        next: () => {
          if (l?.advance.type === `wait`) {
            let e = a.getState().stepIndex;
            if ((X(B), a.getState().stepIndex !== e)) return;
          }
          a.next();
        },
        prev: () => a.prev(),
        skip: () => a.skip(),
        goto: (e) => a.goto(e),
      }),
      [o, l, e.steps.length, a],
    ),
    S =
      c && l && typeof document < `u`
        ? (0, L.createPortal)(
            (0, E.jsxs)(E.Fragment, {
              children: [
                (0, E.jsx)(ze, { cutout: g, radius: h, allowInteraction: _ }),
                (0, E.jsx)(M, {
                  mode: `wait`,
                  children: (0, E.jsx)(
                    Ue,
                    {
                      step: l,
                      cutout: g,
                      stepIndex: o.stepIndex,
                      stepCount: e.steps.length,
                      showNext: y,
                      nextLabel:
                        o.stepIndex >= e.steps.length - 1 ? `Done` : `Next`,
                      onNext: () => a.next(),
                      onSkip: d ? () => a.skip() : void 0,
                      ctaSlot: b,
                    },
                    l.id,
                  ),
                }),
                !1,
              ],
            }),
            document.body,
          )
        : null,
    C =
      !c && r && typeof document < `u`
        ? (0, L.createPortal)(
            (0, E.jsx)(`div`, {
              style: { zIndex: H + 1 },
              className: `fixed bottom-3 left-3 w-[22rem] max-w-[calc(100vw-24px)] rounded-xl border border-primary/40 bg-card px-4 py-3 text-foreground shadow-2xl`,
              children: r(),
            }),
            document.body,
          )
        : null;
  return (0, E.jsxs)(We.Provider, { value: x, children: [t, S, C] });
}
