// SceneEditor-NC7_0wmu 91 — jsx
// Lines 43385-43952 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var nC = ({ label: e, value: t, onChange: n, onCommit: r }) =>
    (0, Y.jsxs)(`div`, {
      className: `mt-1`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `text-[10px] text-muted-foreground`,
          children: e,
        }),
        (0, Y.jsx)(`div`, {
          className: `grid grid-cols-3 gap-1`,
          children: [`x`, `y`, `z`].map((i) =>
            (0, Y.jsxs)(
              `label`,
              {
                className: `text-[9px] text-muted-foreground`,
                children: [
                  i.toUpperCase(),
                  (0, Y.jsx)(Gx, {
                    value: t[i],
                    step: 1,
                    "aria-label": `${e} ${i.toUpperCase()}`,
                    onChange: (e) => n({ ...t, [i]: e }),
                    onCommit: (e) => r({ ...t, [i]: e }),
                  }),
                ],
              },
              i,
            ),
          ),
        }),
      ],
    }),
  rC = ({
    object: e,
    sceneRef: t,
    execute: n,
    onObjectChange: r,
    sessionDir: i,
    remountAsset: a,
  }) => {
    let o = X((e) => e.objectChangeVersion),
      s = X(to),
      [c, l] = (0, J.useState)(`Object`),
      u = e instanceof G,
      d = e instanceof xt,
      f = J.useMemo(() => {
        if (!e || u) return !1;
        let t = !1;
        return (
          e.traverse((e) => {
            !e.userData.editorOnly && e.isMesh && (t = !0);
          }),
          t
        );
      }, [e, u, o]),
      p = J.useMemo(() => {
        let t = [`Scene`];
        return (
          e &&
            (t.unshift(`Object`),
            (u || f || rg(e)) && t.push(`Material`),
            d && t.push(`Light`),
            t.push(`Data`)),
          t
        );
      }, [e, u, f, d]);
    return (
      (0, J.useEffect)(() => {
        l(e ? `Object` : `Scene`);
      }, [e]),
      (0, Y.jsxs)(`div`, {
        className: `bg-card`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `flex items-center border-b border-border px-1`,
            children: p.map((e) =>
              (0, Y.jsx)(
                `button`,
                {
                  onClick: () => l(e),
                  className: `px-3 py-2 text-[11px] font-medium transition-colors ${c === e ? `text-foreground border-b-2 border-primary` : `text-muted-foreground hover:text-foreground`}`,
                  children: e,
                },
                e,
              ),
            ),
          }),
          (0, Y.jsxs)(`div`, {
            className: `p-3 space-y-0`,
            children: [
              c === `Object` &&
                (0, Y.jsx)(iC, {
                  object: e,
                  sceneRef: t,
                  execute: n,
                  onObjectChange: r,
                  objectChangeVersion: o,
                  selectedObjectUuid: s,
                  remountAsset: a,
                }),
              c === `Material` &&
                (0, Y.jsx)(jS, {
                  object: e,
                  sceneRef: t,
                  execute: n,
                  onObjectChange: r,
                  remountAsset: a,
                }),
              c === `Light` &&
                (0, Y.jsx)(MS, {
                  object: e,
                  sceneRef: t,
                  execute: n,
                  onObjectChange: r,
                }),
              c === `Data` &&
                (0, Y.jsx)(HS, {
                  object: e,
                  sceneRef: t,
                  execute: n,
                  onObjectChange: r,
                  sessionDir: i,
                }),
              c === `Scene` &&
                (0, Y.jsx)(eC, {
                  sceneRef: t,
                  execute: n,
                  onObjectChange: r,
                  sessionDir: i,
                }),
            ],
          }),
        ],
      })
    );
  },
  iC = ({
    object: e,
    sceneRef: t,
    execute: n,
    onObjectChange: r,
    objectChangeVersion: i,
    selectedObjectUuid: a,
    remountAsset: o,
  }) => {
    let [s, c] = (0, J.useState)(``),
      [l, u] = (0, J.useState)({ x: 0, y: 0, z: 0 }),
      [d, f] = (0, J.useState)({ x: 0, y: 0, z: 0 }),
      [p, m] = (0, J.useState)({ x: 1, y: 1, z: 1 }),
      [h, g] = (0, J.useState)(!0),
      [_, v] = (0, J.useState)(!1),
      [y, b] = (0, J.useState)(!1),
      [x, S] = (0, J.useState)(1),
      [C, w] = (0, J.useState)(0),
      [T, E] = (0, J.useState)(void 0),
      D = X((t) => !e || t.editorVisibility[e.uuid] !== !1),
      O = X((t) =>
        e
          ? t.objectDisplayModes[e.uuid] ||
            (t.wireframeMode === `off` ? `shaded` : t.wireframeMode)
          : `shaded`,
      ),
      k = X((e) => e.setObjectEditorVisible),
      A = X((e) => e.setObjectDisplayMode),
      j = (0, J.useCallback)(() => {
        e &&
          (c(e.name),
          u({ x: e.position.x, y: e.position.y, z: e.position.z }),
          f({
            x: fe.radToDeg(e.rotation.x),
            y: fe.radToDeg(e.rotation.y),
            z: fe.radToDeg(e.rotation.z),
          }),
          m({ x: e.scale.x, y: e.scale.y, z: e.scale.z }),
          g(e.visible),
          v(e.castShadow),
          b(e.receiveShadow),
          S(e.layers.mask),
          w(e.renderOrder),
          E(yg(e.userData.pivotMode) ? e.userData.pivotMode : void 0));
      }, [e]);
    if (
      ((0, J.useEffect)(() => {
        j();
      }, [i, a, j]),
      !e)
    )
      return (0, Y.jsx)(`div`, {
        className: `text-[11px] text-muted-foreground text-center py-4`,
        children: `No object selected`,
      });
    let M = C_(e),
      N = (i) => {
        t.current && n(new Eh(t.current, r, e, `name`, i));
      },
      P = (i, a) => {
        if (!t.current || isNaN(a)) return;
        if (M) {
          let o = wy(t.current, r, [
            {
              object: e,
              toX: i === `x` ? a : e.position.x,
              toY: i === `y` ? a : e.position.y,
              toZ: i === `z` ? a : e.position.z,
            },
          ]);
          if (!o) {
            j();
            return;
          }
          n(o.command);
          let s = o.landed[0],
            c = s ? Ty(t.current, s) : null;
          c && X.getState().setSelectedObjectUuid(c.uuid);
          return;
        }
        let o = e.position.clone();
        ((o[i] = a), n(new Ch(t.current, r, e, o)));
      },
      F = (i, a) => {
        if (!t.current || isNaN(a)) return;
        if (M) {
          if (i !== `y`) return;
          n(new F_(t.current, r, e, a));
          return;
        }
        let o = new be(
          i === `x` ? fe.degToRad(a) : e.rotation.x,
          i === `y` ? fe.degToRad(a) : e.rotation.y,
          i === `z` ? fe.degToRad(a) : e.rotation.z,
        );
        n(new wh(t.current, r, e, o));
      },
      ee = (i, a) => {
        if (!t.current || isNaN(a)) return;
        let o = e.scale.clone();
        ((o[i] = a), n(new Th(t.current, r, e, o)));
      },
      I = (i) => {
        t.current && n(new Eh(t.current, r, e, `visible`, i));
      },
      te = (i) => {
        t.current && n(new Eh(t.current, r, e, `castShadow`, i));
      },
      ne = (i) => {
        t.current && n(new Eh(t.current, r, e, `receiveShadow`, i));
      },
      L = (i) => {
        !t.current ||
          !Number.isInteger(i) ||
          i < 0 ||
          n(new dv(t.current, r, e, i));
      },
      R = (i) => {
        !t.current ||
          !Number.isFinite(i) ||
          n(new Eh(t.current, r, e, `renderOrder`, i));
      },
      re = (rg(e) || !!e.userData.procKind) && !M,
      ie = k_(e),
      z = (i) => {
        t.current && (E(i), n(new P_(t.current, r, e, i, o)));
      };
    return (0, Y.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`label`, {
              className: `text-[10px] text-muted-foreground`,
              children: `Name`,
            }),
            (0, Y.jsx)(`input`, {
              type: `text`,
              value: s,
              onChange: (e) => c(e.target.value),
              onBlur: () => N(s),
              onKeyDown: (e) => {
                e.key === `Enter` && N(s);
              },
              className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors`,
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Position`,
            }),
            (0, Y.jsx)(cC, {
              value: l,
              onChange: (e, t) => {
                (u((n) => ({ ...n, [e]: t })), M || P(e, t));
              },
              onCommit: P,
              step: 0.1,
            }),
            M &&
              (0, Y.jsx)(`p`, {
                className: `mt-1 text-[10px] text-muted-foreground`,
                children: `Placed freely and saved with the level. The cell it lands in is what the paint grid shows and what tags the floor; the rest is stored as an offset within that cell.`,
              }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: M ? `Facing` : `Rotation`,
            }),
            (0, Y.jsx)(cC, {
              value: d,
              onChange: (e, t) => {
                (f((n) => ({ ...n, [e]: t })), F(e, t));
              },
              onCommit: F,
              step: 1,
              disabledAxes: M ? sC : void 0,
            }),
            M &&
              (0, Y.jsx)(`p`, {
                className: `mt-1 text-[10px] text-muted-foreground`,
                children: `Y is the marker's forward heading in degrees (0 = −Z), saved with the level and read by the game. Markers store yaw only.`,
              }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Scale`,
            }),
            (0, Y.jsx)(cC, {
              value: p,
              onChange: (e, t) => {
                (m((n) => ({ ...n, [e]: t })), t !== 0 && ee(e, t));
              },
              onCommit: ee,
              step: 0.1,
            }),
          ],
        }),
        re &&
          (0, Y.jsxs)(`div`, {
            children: [
              (0, Y.jsx)(`h4`, {
                className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
                children: `Pivot`,
              }),
              (0, Y.jsxs)(`div`, {
                className: `grid grid-cols-3 gap-1`,
                children: [
                  (0, Y.jsx)(aC, {
                    label: `Auto`,
                    title: `Follow the universal type map`,
                    active: T === void 0,
                    onClick: () => z(void 0),
                  }),
                  (0, Y.jsx)(aC, {
                    label: `Corner`,
                    title: `Origin at the box min corner — grid kitbashing`,
                    active: T === `min-corner`,
                    onClick: () => z(`min-corner`),
                  }),
                  (0, Y.jsx)(aC, {
                    label: `Base`,
                    title: `Origin at the footprint centre — rotates on the spot`,
                    active: T === `bottom-center`,
                    onClick: () => z(`bottom-center`),
                  }),
                ],
              }),
              (0, Y.jsx)(`p`, {
                className: `text-[10px] text-muted-foreground pt-1`,
                children: `Auto → ${ie.mode} (${ie.reason})`,
              }),
            ],
          }),
        (0, Y.jsxs)(`div`, {
          className: `space-y-1`,
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Rendering`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-foreground`,
                  children: `Visible in game`,
                }),
                (0, Y.jsx)(bS, {
                  checked: h,
                  onChange: (e) => {
                    (g(e), I(e));
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-foreground`,
                  children: `Show in editor`,
                }),
                (0, Y.jsx)(bS, { checked: D, onChange: (t) => k(e.uuid, t) }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5 gap-3`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-foreground`,
                  children: `Viewport display`,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `grid grid-cols-3 gap-1`,
                  children: [
                    (0, Y.jsx)(oC, {
                      mode: `shaded`,
                      active: O === `shaded`,
                      title: `Shaded`,
                      onClick: () => A(e.uuid, `shaded`),
                    }),
                    (0, Y.jsx)(oC, {
                      mode: `wireframe`,
                      active: O === `wireframe`,
                      title: `Wireframe`,
                      onClick: () => A(e.uuid, `wireframe`),
                    }),
                    (0, Y.jsx)(oC, {
                      mode: `overlay`,
                      active: O === `overlay`,
                      title: `Wireframe overlay`,
                      onClick: () => A(e.uuid, `overlay`),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-foreground`,
                  children: `Cast Shadow`,
                }),
                (0, Y.jsx)(bS, {
                  checked: _,
                  onChange: (e) => {
                    (v(e), te(e));
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-foreground`,
                  children: `Receive Shadow`,
                }),
                (0, Y.jsx)(bS, {
                  checked: y,
                  onChange: (e) => {
                    (b(e), ne(e));
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`label`, {
              className: `block text-[10px] text-muted-foreground pt-1`,
              children: [
                `Layer mask`,
                (0, Y.jsx)(Gx, {
                  value: x,
                  min: 0,
                  step: 1,
                  precision: 0,
                  onChange: S,
                  onCommit: (e) => {
                    (S(e), L(e));
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`label`, {
              className: `block text-[10px] text-muted-foreground`,
              children: [
                `Render order`,
                (0, Y.jsx)(Gx, {
                  value: C,
                  step: 1,
                  precision: 0,
                  onChange: w,
                  onCommit: (e) => {
                    (w(e), R(e));
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  aC = ({ label: e, title: t, active: n, onClick: r }) =>
    (0, Y.jsx)(`button`, {
      type: `button`,
      title: t,
      onClick: r,
      className: `h-7 inline-flex items-center justify-center rounded-md border px-1 text-[10px] transition-colors ${n ? `border-primary/50 bg-primary/20 text-primary` : `border-border/60 bg-muted/20 text-muted-foreground hover:bg-accent hover:text-foreground`}`,
      children: e,
    }),
  oC = ({ mode: e, active: t, title: n, onClick: r }) => {
    let i = `w-3.5 h-3.5`;
    return (0, Y.jsx)(`button`, {
      type: `button`,
      title: n,
      "aria-label": n,
      onClick: r,
      className: `h-7 w-7 inline-flex items-center justify-center rounded-md border transition-colors ${t ? `border-primary/50 bg-primary/20 text-primary` : `border-border/60 bg-muted/20 text-muted-foreground hover:bg-accent hover:text-foreground`}`,
      children:
        e === `shaded`
          ? (0, Y.jsx)(f, { className: i })
          : e === `wireframe`
            ? (0, Y.jsx)(Sn, { className: i })
            : (0, Y.jsx)(Mn, { className: i }),
    });
  },
  sC = [`x`, `z`],
  cC = ({ value: e, onChange: t, onCommit: n, step: r, disabledAxes: i }) =>
    (0, Y.jsx)(`div`, {
      className: `grid grid-cols-3 gap-1.5`,
      children: [`x`, `y`, `z`].map((a) => {
        let o = !!i?.includes(a);
        return (0, Y.jsxs)(
          `div`,
          {
            className: o ? `opacity-40` : void 0,
            children: [
              (0, Y.jsx)(`label`, {
                className: `text-[10px] text-muted-foreground`,
                children: a.toUpperCase(),
              }),
              (0, Y.jsx)(Gx, {
                value: e[a],
                step: r,
                precision: 3,
                disabled: o,
                "aria-label": a.toUpperCase(),
                onChange: (e) => {
                  o || t(a, e);
                },
                onCommit: (e) => {
                  o || n(a, e);
                },
              }),
            ],
          },
          a,
        );
      }),
    }),
  lC = new Map();
