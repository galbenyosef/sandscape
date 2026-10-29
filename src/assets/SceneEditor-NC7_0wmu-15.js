// SceneEditor-NC7_0wmu 15 — current
// Lines 7008-7387 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Ls({
  autoSaveId: e = null,
  children: t,
  className: n = ``,
  direction: r,
  forwardedRef: i,
  id: a = null,
  onLayout: o = null,
  keyboardResizeBy: s = null,
  storage: c = Fs,
  style: l,
  tagName: u = `div`,
  ...d
}) {
  let f = lo(a),
    p = (0, J.useRef)(null),
    [m, h] = (0, J.useState)(null),
    [g, _] = (0, J.useState)([]),
    v = rs(),
    y = (0, J.useRef)({}),
    b = (0, J.useRef)(new Map()),
    x = (0, J.useRef)(0),
    S = (0, J.useRef)({
      autoSaveId: e,
      direction: r,
      dragState: m,
      id: f,
      keyboardResizeBy: s,
      onLayout: o,
      storage: c,
    }),
    C = (0, J.useRef)({
      layout: g,
      panelDataArray: [],
      panelDataArrayChanged: !1,
    });
  ((0, J.useRef)({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: [],
  }),
    (0, J.useImperativeHandle)(
      i,
      () => ({
        getId: () => S.current.id,
        getLayout: () => {
          let { layout: e } = C.current;
          return e;
        },
        setLayout: (e) => {
          let { onLayout: t } = S.current,
            { layout: n, panelDataArray: r } = C.current,
            i = Ns({
              layout: e,
              panelConstraints: r.map((e) => e.constraints),
            });
          vs(n, i) ||
            (_(i), (C.current.layout = i), t && t(i), Cs(r, i, y.current));
        },
      }),
      [],
    ),
    ao(() => {
      ((S.current.autoSaveId = e),
        (S.current.direction = r),
        (S.current.dragState = m),
        (S.current.id = f),
        (S.current.onLayout = o),
        (S.current.storage = c));
    }),
    _s({
      committedValuesRef: S,
      eagerValuesRef: C,
      groupId: f,
      layout: g,
      panelDataArray: C.current.panelDataArray,
      setLayout: _,
      panelGroupElement: p.current,
    }),
    (0, J.useEffect)(() => {
      let { panelDataArray: t } = C.current;
      if (e) {
        if (g.length === 0 || g.length !== t.length) return;
        let n = Is[e];
        n ?? ((n = Es(Ms, Ps)), (Is[e] = n));
        let r = [...t],
          i = new Map(b.current);
        n(e, r, i, g, c);
      }
    }, [e, g, c]),
    (0, J.useEffect)(() => {}));
  let w = (0, J.useCallback)((e) => {
      let { onLayout: t } = S.current,
        { layout: n, panelDataArray: r } = C.current;
      if (e.constraints.collapsible) {
        let i = r.map((e) => e.constraints),
          { collapsedSize: a = 0, panelSize: o, pivotIndices: s } = Bs(r, e, n);
        if (
          (Z(o != null, `Panel size not found for panel "${e.id}"`), !as(o, a))
        ) {
          b.current.set(e.id, o);
          let c = ls({
            delta: zs(r, e) === r.length - 1 ? o - a : a - o,
            initialLayout: n,
            panelConstraints: i,
            pivotIndices: s,
            prevLayout: n,
            trigger: `imperative-api`,
          });
          ws(n, c) ||
            (_(c), (C.current.layout = c), t && t(c), Cs(r, c, y.current));
        }
      }
    }, []),
    T = (0, J.useCallback)((e, t) => {
      let { onLayout: n } = S.current,
        { layout: r, panelDataArray: i } = C.current;
      if (e.constraints.collapsible) {
        let a = i.map((e) => e.constraints),
          {
            collapsedSize: o = 0,
            panelSize: s = 0,
            minSize: c = 0,
            pivotIndices: l,
          } = Bs(i, e, r),
          u = t ?? c;
        if (as(s, o)) {
          let t = b.current.get(e.id),
            o = t != null && t >= u ? t : u,
            c = ls({
              delta: zs(i, e) === i.length - 1 ? s - o : o - s,
              initialLayout: r,
              panelConstraints: a,
              pivotIndices: l,
              prevLayout: r,
              trigger: `imperative-api`,
            });
          ws(r, c) ||
            (_(c), (C.current.layout = c), n && n(c), Cs(i, c, y.current));
        }
      }
    }, []),
    E = (0, J.useCallback)((e) => {
      let { layout: t, panelDataArray: n } = C.current,
        { panelSize: r } = Bs(n, e, t);
      return (Z(r != null, `Panel size not found for panel "${e.id}"`), r);
    }, []),
    D = (0, J.useCallback)(
      (e, t) => {
        let { panelDataArray: n } = C.current,
          r = zs(n, e);
        return Ts({
          defaultSize: t,
          dragState: m,
          layout: g,
          panelData: n,
          panelIndex: r,
        });
      },
      [m, g],
    ),
    O = (0, J.useCallback)((e) => {
      let { layout: t, panelDataArray: n } = C.current,
        { collapsedSize: r = 0, collapsible: i, panelSize: a } = Bs(n, e, t);
      return (
        Z(a != null, `Panel size not found for panel "${e.id}"`),
        i === !0 && as(a, r)
      );
    }, []),
    k = (0, J.useCallback)((e) => {
      let { layout: t, panelDataArray: n } = C.current,
        { collapsedSize: r = 0, collapsible: i, panelSize: a } = Bs(n, e, t);
      return (
        Z(a != null, `Panel size not found for panel "${e.id}"`),
        !i || is(a, r) > 0
      );
    }, []),
    A = (0, J.useCallback)(
      (e) => {
        let { panelDataArray: t } = C.current;
        (t.push(e),
          t.sort((e, t) => {
            let n = e.order,
              r = t.order;
            return n == null && r == null
              ? 0
              : n == null
                ? -1
                : r == null
                  ? 1
                  : n - r;
          }),
          (C.current.panelDataArrayChanged = !0),
          v());
      },
      [v],
    );
  (ao(() => {
    if (C.current.panelDataArrayChanged) {
      C.current.panelDataArrayChanged = !1;
      let { autoSaveId: e, onLayout: t, storage: n } = S.current,
        { layout: r, panelDataArray: i } = C.current,
        a = null;
      if (e) {
        let t = js(e, i, n);
        t &&
          ((b.current = new Map(Object.entries(t.expandToSizes))),
          (a = t.layout));
      }
      a ??= Ss({ panelDataArray: i });
      let o = Ns({ layout: a, panelConstraints: i.map((e) => e.constraints) });
      vs(r, o) ||
        (_(o), (C.current.layout = o), t && t(o), Cs(i, o, y.current));
    }
  }),
    ao(() => {
      let e = C.current;
      return () => {
        e.layout = [];
      };
    }, []));
  let j = (0, J.useCallback)((e) => {
      let t = !1,
        n = p.current;
      return (
        n &&
          window.getComputedStyle(n, null).getPropertyValue(`direction`) ===
            `rtl` &&
          (t = !0),
        function (n) {
          n.preventDefault();
          let r = p.current;
          if (!r) return () => null;
          let {
              direction: i,
              dragState: a,
              id: o,
              keyboardResizeBy: s,
              onLayout: c,
            } = S.current,
            { layout: l, panelDataArray: u } = C.current,
            { initialLayout: d } = a ?? {},
            f = ps(o, e, r),
            m = xs(n, e, i, a, s, r),
            h = i === `horizontal`;
          h && t && (m = -m);
          let g = u.map((e) => e.constraints),
            v = ls({
              delta: m,
              initialLayout: d ?? l,
              panelConstraints: g,
              pivotIndices: f,
              prevLayout: l,
              trigger: So(n) ? `keyboard` : `mouse-or-touch`,
            }),
            b = !ws(l, v);
          ((Co(n) || wo(n)) &&
            x.current != m &&
            ((x.current = m),
            !b && m !== 0
              ? h
                ? Qo(e, m < 0 ? Io : Lo)
                : Qo(e, m < 0 ? Ro : zo)
              : Qo(e, 0)),
            b &&
              (_(v), (C.current.layout = v), c && c(v), Cs(u, v, y.current)));
        }
      );
    }, []),
    M = (0, J.useCallback)((e, t) => {
      let { onLayout: n } = S.current,
        { layout: r, panelDataArray: i } = C.current,
        a = i.map((e) => e.constraints),
        { panelSize: o, pivotIndices: s } = Bs(i, e, r);
      Z(o != null, `Panel size not found for panel "${e.id}"`);
      let c = ls({
        delta: zs(i, e) === i.length - 1 ? o - t : t - o,
        initialLayout: r,
        panelConstraints: a,
        pivotIndices: s,
        prevLayout: r,
        trigger: `imperative-api`,
      });
      ws(r, c) ||
        (_(c), (C.current.layout = c), n && n(c), Cs(i, c, y.current));
    }, []),
    N = (0, J.useCallback)(
      (e, t) => {
        let { layout: n, panelDataArray: r } = C.current,
          { collapsedSize: i = 0, collapsible: a } = t,
          {
            collapsedSize: o = 0,
            collapsible: s,
            maxSize: c = 100,
            minSize: l = 0,
          } = e.constraints,
          { panelSize: u } = Bs(r, e, n);
        u != null &&
          (a && s && as(u, i)
            ? as(i, o) || M(e, o)
            : u < l
              ? M(e, l)
              : u > c && M(e, c));
      },
      [M],
    ),
    P = (0, J.useCallback)((e, t) => {
      let { direction: n } = S.current,
        { layout: r } = C.current;
      if (!p.current) return;
      let i = hs(e, p.current);
      Z(i, `Drag handle element not found for id "${e}"`);
      let a = ys(n, t);
      h({
        dragHandleId: e,
        dragHandleRect: i.getBoundingClientRect(),
        initialCursorPosition: a,
        initialLayout: r,
      });
    }, []),
    F = (0, J.useCallback)(() => {
      h(null);
    }, []),
    ee = (0, J.useCallback)(
      (e) => {
        let { panelDataArray: t } = C.current,
          n = zs(t, e);
        n >= 0 &&
          (t.splice(n, 1),
          delete y.current[e.id],
          (C.current.panelDataArrayChanged = !0),
          v());
      },
      [v],
    ),
    I = (0, J.useMemo)(
      () => ({
        collapsePanel: w,
        direction: r,
        dragState: m,
        expandPanel: T,
        getPanelSize: E,
        getPanelStyle: D,
        groupId: f,
        isPanelCollapsed: O,
        isPanelExpanded: k,
        reevaluatePanelConstraints: N,
        registerPanel: A,
        registerResizeHandle: j,
        resizePanel: M,
        startDragging: P,
        stopDragging: F,
        unregisterPanel: ee,
        panelGroupElement: p.current,
      }),
      [w, m, r, T, E, D, f, O, k, N, A, j, M, P, F, ee],
    ),
    te = {
      display: `flex`,
      flexDirection: r === `horizontal` ? `row` : `column`,
      height: `100%`,
      overflow: `hidden`,
      width: `100%`,
    };
  return (0, J.createElement)(
    no.Provider,
    { value: I },
    (0, J.createElement)(u, {
      ...d,
      children: t,
      className: n,
      id: a,
      ref: p,
      style: { ...te, ...l },
      [ro.group]: ``,
      [ro.groupDirection]: r,
      [ro.groupId]: f,
    }),
  );
}
