// dist-BWh9CVbU 06 — options
// Lines 1593-1877 of readable/assets/dist-BWh9CVbU.pretty.js (statement-aligned).
var Pt = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`);
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
        return r && t(r)
          ? r.current == null
            ? {}
            : wt({ element: r.current, padding: i }).fn(n)
          : r
            ? wt({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  Ft = (e, t) => {
    let n = yt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  It = (e, t) => {
    let n = bt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Lt = (e, t) => ({ fn: Tt(e).fn, options: [e, t] }),
  Rt = (e, t) => {
    let n = xt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  zt = (e, t) => {
    let n = St(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Bt = (e, t) => {
    let n = Ct(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Vt = (e, t) => {
    let n = Pt(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ht = Object.defineProperty,
  $ = (e, t) => Ht(e, `name`, { value: t, configurable: !0 }),
  Ut = `Popper`,
  [Wt, Gt] = a(Ut),
  [Kt, qt] = Wt(Ut),
  Jt = $((e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = f.useState(null),
      [a, o] = f.useState(void 0);
    return (0, p.jsx)(Kt, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    });
  }, `Popper`),
  Yt = `PopperAnchor`,
  Xt = f.forwardRef(
    $(function (e, t) {
      let { __scopePopper: n, virtualRef: r, ...i } = e,
        a = qt(Yt, n),
        o = f.useRef(null),
        s = a.onAnchorChange,
        l = c(
          t,
          f.useCallback(
            (e) => {
              ((o.current = e), e && s(e));
            },
            [s],
          ),
        ),
        d = f.useRef(null);
      f.useEffect(() => {
        if (!r) return;
        let e = d.current;
        ((d.current = r.current), e !== d.current && s(d.current));
      });
      let m = a.placementState && rn(a.placementState),
        h = m?.[0],
        g = m?.[1];
      return r
        ? null
        : (0, p.jsx)(u.div, {
            "data-radix-popper-side": h,
            "data-radix-popper-align": g,
            ...i,
            ref: l,
          });
    }, `PopperAnchor`),
  ),
  Zt = `PopperContent`,
  [Qt, $t] = Wt(Zt),
  en = f.forwardRef(
    $(function (e, t) {
      let {
          __scopePopper: n,
          side: r = `bottom`,
          sideOffset: i = 0,
          align: a = `center`,
          alignOffset: l = 0,
          arrowPadding: m = 0,
          avoidCollisions: h = !0,
          collisionBoundary: g = [],
          collisionPadding: _ = 0,
          sticky: v = `partial`,
          hideWhenDetached: y = !1,
          updatePositionStrategy: b = `optimized`,
          onPlaced: x,
          ...S
        } = e,
        C = qt(Zt, n),
        [w, T] = f.useState(null),
        E = c(t, T),
        [D, O] = f.useState(null),
        k = d(D),
        A = k?.width ?? 0,
        j = k?.height ?? 0,
        M = r + (a === `center` ? `` : `-` + a),
        N =
          typeof _ == `number`
            ? _
            : { top: 0, right: 0, bottom: 0, left: 0, ..._ },
        P = Array.isArray(g) ? g : [g],
        ee = P.length > 0,
        F = { padding: N, boundary: P.filter(tn), altBoundary: ee },
        {
          refs: I,
          floatingStyles: L,
          placement: R,
          isPositioned: z,
          middlewareData: B,
        } = Nt({
          strategy: `fixed`,
          placement: M,
          whileElementsMounted: $(
            (...e) => vt(...e, { animationFrame: b === `always` }),
            `whileElementsMounted`,
          ),
          elements: { reference: C.anchor },
          middleware: [
            Ft({ mainAxis: i + j, alignmentAxis: l }),
            h &&
              It({
                mainAxis: !0,
                crossAxis: !1,
                limiter: v === `partial` ? Lt() : void 0,
                ...F,
              }),
            h && Rt({ ...F }),
            zt({
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
            D && Vt({ element: D, padding: m }),
            nn({ arrowWidth: A, arrowHeight: j }),
            y &&
              Bt({
                strategy: `referenceHidden`,
                ...F,
                boundary: ee ? F.boundary : void 0,
              }),
          ],
        }),
        V = C.setPlacementState;
      o(
        () => (
          V(R),
          () => {
            V(void 0);
          }
        ),
        [R, V],
      );
      let [H, te] = rn(R),
        ne = s(x);
      o(() => {
        z && ne?.();
      }, [z, ne]);
      let re = B.arrow?.x,
        ie = B.arrow?.y,
        ae = B.arrow?.centerOffset !== 0,
        [oe, se] = f.useState();
      return (
        o(() => {
          w && se(window.getComputedStyle(w).zIndex);
        }, [w]),
        (0, p.jsx)(`div`, {
          ref: I.setFloating,
          "data-radix-popper-content-wrapper": ``,
          style: {
            ...L,
            transform: z ? L.transform : `translate(0, -200%)`,
            minWidth: `max-content`,
            zIndex: oe,
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
          children: (0, p.jsx)(Qt, {
            scope: n,
            placedSide: H,
            placedAlign: te,
            onArrowChange: O,
            arrowX: re,
            arrowY: ie,
            shouldHideArrow: ae,
            children: (0, p.jsx)(u.div, {
              "data-side": H,
              "data-align": te,
              ...S,
              ref: E,
              style: { ...S.style, animation: z ? S.style?.animation : `none` },
            }),
          }),
        })
      );
    }, `PopperContent`),
  );
function tn(e) {
  return e !== null;
}
$(tn, `isNotNull`);
var nn = $(
  (e) => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
      let { placement: n, rects: r, middlewareData: i } = t,
        a = i.arrow?.centerOffset !== 0,
        o = a ? 0 : e.arrowWidth,
        s = a ? 0 : e.arrowHeight,
        [c, l] = rn(n),
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
function rn(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
$(rn, `getSideAndAlignFromPlacement`);
