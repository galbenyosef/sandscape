// dist-BfZydly7 06 — arrow
// Lines 1663-1903 of readable/assets/dist-BfZydly7.pretty.js (statement-aligned).
var Wt = Object.defineProperty,
  $ = (e, t) => Wt(e, `name`, { value: t, configurable: !0 }),
  Gt = `Popper`,
  [Kt, qt] = a(Gt),
  [Jt, Yt] = Kt(Gt),
  Xt = $((e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = d.useState(null),
      [a, o] = d.useState(void 0);
    return (0, f.jsx)(Jt, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    });
  }, `Popper`),
  Zt = `PopperAnchor`,
  Qt = d.forwardRef(
    $(function (e, t) {
      let { __scopePopper: n, virtualRef: r, ...i } = e,
        a = Yt(Zt, n),
        o = d.useRef(null),
        s = a.onAnchorChange,
        l = c(
          t,
          d.useCallback(
            (e) => {
              ((o.current = e), e && s(e));
            },
            [s],
          ),
        ),
        p = d.useRef(null);
      d.useEffect(() => {
        if (!r) return;
        let e = p.current;
        ((p.current = r.current), e !== p.current && s(p.current));
      });
      let m = a.placementState && on(a.placementState),
        h = m?.[0],
        g = m?.[1];
      return r
        ? null
        : (0, f.jsx)(u.div, {
            "data-radix-popper-side": h,
            "data-radix-popper-align": g,
            ...i,
            ref: l,
          });
    }, `PopperAnchor`),
  ),
  $t = `PopperContent`,
  [en, tn] = Kt($t),
  nn = d.forwardRef(
    $(function (e, t) {
      let {
          __scopePopper: n,
          side: r = `bottom`,
          sideOffset: i = 0,
          align: a = `center`,
          alignOffset: l = 0,
          arrowPadding: p = 0,
          avoidCollisions: m = !0,
          collisionBoundary: h = [],
          collisionPadding: g = 0,
          sticky: _ = `partial`,
          hideWhenDetached: v = !1,
          updatePositionStrategy: y = `optimized`,
          onPlaced: b,
          ...x
        } = e,
        S = Yt($t, n),
        [C, w] = d.useState(null),
        T = c(t, w),
        [E, D] = d.useState(null),
        O = Ut(E),
        k = O?.width ?? 0,
        A = O?.height ?? 0,
        j = r + (a === `center` ? `` : `-` + a),
        M =
          typeof g == `number`
            ? g
            : { top: 0, right: 0, bottom: 0, left: 0, ...g },
        N = Array.isArray(h) ? h : [h],
        P = N.length > 0,
        F = { padding: M, boundary: N.filter(rn), altBoundary: P },
        {
          refs: I,
          floatingStyles: L,
          placement: R,
          isPositioned: z,
          middlewareData: B,
        } = Mt({
          strategy: `fixed`,
          placement: j,
          whileElementsMounted: $(
            (...e) => _t(...e, { animationFrame: y === `always` }),
            `whileElementsMounted`,
          ),
          elements: { reference: S.anchor },
          middleware: [
            Pt({ mainAxis: i + A, alignmentAxis: l }),
            m &&
              Ft({
                mainAxis: !0,
                crossAxis: !1,
                limiter: _ === `partial` ? It() : void 0,
                ...F,
              }),
            m && Lt({ ...F }),
            Rt({
              ...F,
              apply: $(
                ({
                  elements: e,
                  rects: t,
                  availableWidth: n,
                  availableHeight: r,
                }) => {
                  let { width: i, height: a } = t.reference,
                    o = e.floating.style;
                  (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                    o.setProperty(`--radix-popper-available-height`, `${r}px`),
                    o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                    o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
                },
                `apply`,
              ),
            }),
            E && Bt({ element: E, padding: p }),
            an({ arrowWidth: k, arrowHeight: A }),
            v &&
              zt({
                strategy: `referenceHidden`,
                ...F,
                boundary: P ? F.boundary : void 0,
              }),
          ],
        }),
        V = S.setPlacementState;
      o(
        () => (
          V(R),
          () => {
            V(void 0);
          }
        ),
        [R, V],
      );
      let [H, ee] = on(R),
        te = s(b);
      o(() => {
        z && te?.();
      }, [z, te]);
      let ne = B.arrow?.x,
        re = B.arrow?.y,
        ie = B.arrow?.centerOffset !== 0,
        [ae, oe] = d.useState();
      return (
        o(() => {
          C && oe(window.getComputedStyle(C).zIndex);
        }, [C]),
        (0, f.jsx)(`div`, {
          ref: I.setFloating,
          "data-radix-popper-content-wrapper": ``,
          style: {
            ...L,
            transform: z ? L.transform : `translate(0, -200%)`,
            minWidth: `max-content`,
            zIndex: ae,
            "--radix-popper-transform-origin": [
              B.transformOrigin?.x,
              B.transformOrigin?.y,
            ].join(` `),
            ...(B.hide?.referenceHidden && {
              visibility: `hidden`,
              pointerEvents: `none`,
            }),
          },
          dir: e.dir,
          children: (0, f.jsx)(en, {
            scope: n,
            placedSide: H,
            placedAlign: ee,
            onArrowChange: D,
            arrowX: ne,
            arrowY: re,
            shouldHideArrow: ie,
            children: (0, f.jsx)(u.div, {
              "data-side": H,
              "data-align": ee,
              ...x,
              ref: T,
              style: { ...x.style, animation: z ? x.style?.animation : `none` },
            }),
          }),
        })
      );
    }, `PopperContent`),
  );
function rn(e) {
  return e !== null;
}
$(rn, `isNotNull`);
var an = $(
  (e) => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
      let { placement: n, rects: r, middlewareData: i } = t,
        a = i.arrow?.centerOffset !== 0,
        o = a ? 0 : e.arrowWidth,
        s = a ? 0 : e.arrowHeight,
        [c, l] = on(n),
        u = { start: `0%`, center: `50%`, end: `100%` }[l],
        d = (i.arrow?.x ?? 0) + o / 2,
        f = (i.arrow?.y ?? 0) + s / 2,
        p = ``,
        m = ``;
      return (
        c === `bottom`
          ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
          : c === `top`
            ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
            : c === `right`
              ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
              : c === `left` &&
                ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
        { data: { x: p, y: m } }
      );
    },
  }),
  `transformOrigin`,
);
function on(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
$(on, `getSideAndAlignFromPlacement`);
