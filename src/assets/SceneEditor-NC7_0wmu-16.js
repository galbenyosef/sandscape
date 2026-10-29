// SceneEditor-NC7_0wmu 16 — undos
// Lines 7388-7714 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Rs = (0, J.forwardRef)((e, t) =>
  (0, J.createElement)(Ls, { ...e, forwardedRef: t }),
);
((Ls.displayName = `PanelGroup`), (Rs.displayName = `forwardRef(PanelGroup)`));
function zs(e, t) {
  return e.findIndex((e) => e === t || e.id === t.id);
}
function Bs(e, t, n) {
  let r = zs(e, t),
    i = r === e.length - 1 ? [r - 1, r] : [r, r + 1],
    a = n[r];
  return { ...t.constraints, panelSize: a, pivotIndices: i };
}
function Vs({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r,
}) {
  (0, J.useEffect)(() => {
    if (e || n == null || r == null) return;
    let i = hs(t, r);
    if (i == null) return;
    let a = (e) => {
      if (!e.defaultPrevented)
        switch (e.key) {
          case `ArrowDown`:
          case `ArrowLeft`:
          case `ArrowRight`:
          case `ArrowUp`:
          case `End`:
          case `Home`:
            (e.preventDefault(), n(e));
            break;
          case `F6`: {
            e.preventDefault();
            let n = i.getAttribute(ro.groupId);
            Z(n, `No group element found for id "${n}"`);
            let a = ds(n, r),
              o = fs(n, t, r);
            (Z(o !== null, `No resize element found for id "${t}"`),
              a[
                e.shiftKey
                  ? o > 0
                    ? o - 1
                    : a.length - 1
                  : o + 1 < a.length
                    ? o + 1
                    : 0
              ].focus());
            break;
          }
        }
    };
    return (
      i.addEventListener(`keydown`, a),
      () => {
        i.removeEventListener(`keydown`, a);
      }
    );
  }, [r, e, t, n]);
}
function Hs({
  children: e = null,
  className: t = ``,
  disabled: n = !1,
  hitAreaMargins: r,
  id: i,
  onBlur: a,
  onClick: o,
  onDragging: s,
  onFocus: c,
  onPointerDown: l,
  onPointerUp: u,
  style: d = {},
  tabIndex: f = 0,
  tagName: p = `div`,
  ...m
}) {
  let h = (0, J.useRef)(null),
    g = (0, J.useRef)({
      onClick: o,
      onDragging: s,
      onPointerDown: l,
      onPointerUp: u,
    });
  (0, J.useEffect)(() => {
    ((g.current.onClick = o),
      (g.current.onDragging = s),
      (g.current.onPointerDown = l),
      (g.current.onPointerUp = u));
  });
  let _ = (0, J.useContext)(no);
  if (_ === null)
    throw Error(
      `PanelResizeHandle components must be rendered within a PanelGroup container`,
    );
  let {
      direction: v,
      groupId: y,
      registerResizeHandle: b,
      startDragging: x,
      stopDragging: S,
      panelGroupElement: C,
    } = _,
    w = lo(i),
    [T, E] = (0, J.useState)(`inactive`),
    [D, O] = (0, J.useState)(!1),
    [k, A] = (0, J.useState)(null),
    j = (0, J.useRef)({ state: T });
  (ao(() => {
    j.current.state = T;
  }),
    (0, J.useEffect)(() => {
      if (n) A(null);
      else {
        let e = b(w);
        A(() => e);
      }
    }, [n, w, b]));
  let M = r?.coarse ?? 15,
    N = r?.fine ?? 5;
  ((0, J.useEffect)(() => {
    if (n || k == null) return;
    let e = h.current;
    Z(e, `Element ref not attached`);
    let t = !1;
    return Ko(w, e, v, { coarse: M, fine: N }, (e, n, r) => {
      if (!n) {
        E(`inactive`);
        return;
      }
      switch (e) {
        case `down`: {
          (E(`drag`),
            (t = !1),
            Z(r, `Expected event to be defined for "down" action`),
            x(w, r));
          let { onDragging: e, onPointerDown: n } = g.current;
          (e?.(!0), n?.());
          break;
        }
        case `move`: {
          let { state: e } = j.current;
          ((t = !0),
            e !== `drag` && E(`hover`),
            Z(r, `Expected event to be defined for "move" action`),
            k(r));
          break;
        }
        case `up`: {
          (E(`hover`), S());
          let { onClick: e, onDragging: n, onPointerUp: r } = g.current;
          (n?.(!1), r?.(), t || e?.());
          break;
        }
      }
    });
  }, [M, v, n, N, b, w, k, x, S]),
    Vs({ disabled: n, handleId: w, resizeHandler: k, panelGroupElement: C }));
  let P = { touchAction: `none`, userSelect: `none` };
  return (0, J.createElement)(p, {
    ...m,
    children: e,
    className: t,
    id: i,
    onBlur: () => {
      (O(!1), a?.());
    },
    onFocus: () => {
      (O(!0), c?.());
    },
    ref: h,
    role: `separator`,
    style: { ...P, ...d },
    tabIndex: f,
    [ro.groupDirection]: v,
    [ro.groupId]: y,
    [ro.resizeHandle]: ``,
    [ro.resizeHandleActive]: T === `drag` ? `pointer` : D ? `keyboard` : void 0,
    [ro.resizeHandleEnabled]: !n,
    [ro.resizeHandleId]: w,
    [ro.resizeHandleState]: T,
  });
}
Hs.displayName = `PanelResizeHandle`;
var Us = ({ className: e, ...t }) =>
    (0, Y.jsx)(Rs, {
      className: i(
        `flex h-full w-full data-[panel-group-direction=vertical]:flex-col`,
        e,
      ),
      ...t,
    }),
  Ws = fo,
  Gs = ({ withHandle: e, className: t, ...n }) =>
    (0, Y.jsx)(Hs, {
      className: i(
        `relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90`,
        t,
      ),
      ...n,
      children:
        e &&
        (0, Y.jsx)(`div`, {
          className: `z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border`,
          children: (0, Y.jsx)(kn, { className: `h-2.5 w-2.5` }),
        }),
    }),
  Ks = class {
    id = -1;
    inMemory = !1;
    updatable = !1;
    type = ``;
    name = ``;
    scene;
    object;
    attributeName;
    changesSceneGraph = !1;
    onObjectChange;
    constructor(e, t) {
      ((this.scene = e), (this.onObjectChange = t));
    }
    update(e) {}
    dispose() {}
  },
  qs = class e {
    static MAX_SIZE = 100;
    undos = [];
    redos = [];
    lastCmdTime = Date.now();
    idCounter = 0;
    disabled = !1;
    isDirty = !1;
    onChange;
    _onObjectChange;
    _onSceneGraphChange;
    constructor(e, t, n) {
      ((this.onChange = e),
        (this._onObjectChange = t),
        (this._onSceneGraphChange = n));
    }
    get onObjectChange() {
      return this._onObjectChange;
    }
    get onSceneGraphChange() {
      return this._onSceneGraphChange;
    }
    execute(t, n) {
      if (this.disabled) return;
      let r = this.undos[this.undos.length - 1],
        i = Date.now() - this.lastCmdTime;
      if (
        (r !== void 0 &&
        r.updatable &&
        t.updatable &&
        r.object !== void 0 &&
        r.object === t.object &&
        r.type === t.type &&
        r.attributeName === t.attributeName &&
        i < 500
          ? (r.update?.(t), (t = r))
          : (this.undos.push(t), (t.id = ++this.idCounter)),
        n !== void 0 && (t.name = n),
        t.execute(),
        (t.inMemory = !0),
        (this.lastCmdTime = Date.now()),
        (this.redos = []),
        (this.isDirty = !0),
        this.undos.length > e.MAX_SIZE)
      ) {
        let t = this.undos.splice(0, this.undos.length - e.MAX_SIZE);
        for (let e of t) e.dispose?.();
      }
      this.emitChange();
    }
    undo() {
      if (this.disabled) return;
      let e;
      return (
        this.undos.length > 0 && (e = this.undos.pop()),
        e !== void 0 &&
          (e.undo(),
          this.redos.push(e),
          (this.isDirty = !0),
          e.changesSceneGraph && this._onSceneGraphChange(),
          this.emitChange()),
        e
      );
    }
    redo() {
      if (this.disabled) return;
      let e;
      return (
        this.redos.length > 0 && (e = this.redos.pop()),
        e !== void 0 &&
          (e.execute(),
          this.undos.push(e),
          (this.isDirty = !0),
          e.changesSceneGraph && this._onSceneGraphChange(),
          this.emitChange()),
        e
      );
    }
    clear() {
      for (let e of this.undos) e.dispose?.();
      for (let e of this.redos) e.dispose?.();
      ((this.undos = []),
        (this.redos = []),
        (this.idCounter = 0),
        (this.isDirty = !1),
        this.emitChange());
    }
    markClean() {
      this.isDirty = !1;
    }
    emitChange() {
      let e = this.undos[this.undos.length - 1],
        t = this.redos[this.redos.length - 1];
      this.onChange(
        this.undos.length > 0,
        this.redos.length > 0,
        e?.name ?? ``,
        t?.name ?? ``,
      );
    }
  };
