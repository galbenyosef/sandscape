// SceneEditor-NC7_0wmu 98 — children
// Lines 45701-46258 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Xw = ({ children: e }) =>
    (0, Y.jsx)(`h4`, {
      className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
      children: e,
    }),
  Zw = ({
    material: e,
    sceneRef: t,
    selectedGeometry: n,
    execute: r,
    onObjectChange: i,
    onClose: a,
    onMaterialReplaced: o,
    onActiveMaterialChange: s,
    onCreateShaderMaterial: c,
  }) => {
    let l = X((e) => e.objectChangeVersion),
      u = X((e) => e.materialPreviewMode),
      d = X((e) => e.setMaterialPreviewMode),
      p = (0, J.useMemo)(() => (e ? yw(e) : null), [e, l]),
      [m, h] = (0, J.useState)(!1),
      [g, _] = (0, J.useState)(null);
    (0, J.useEffect)(() => {
      (h(!1), _(null));
    }, [e?.uuid]);
    let v = e,
      y = e instanceof _e,
      [b, x] = (0, J.useState)(``),
      [S, C] = (0, J.useState)(`#ffffff`),
      [w, T] = (0, J.useState)(`#000000`),
      [E, D] = (0, J.useState)(1),
      [O, k] = (0, J.useState)(0.5),
      [A, j] = (0, J.useState)(0),
      [M, N] = (0, J.useState)(1),
      [P, F] = (0, J.useState)(0),
      [ee, I] = (0, J.useState)(!1),
      [ne, L] = (0, J.useState)(!1),
      [R, re] = (0, J.useState)(!0),
      [ie, z] = (0, J.useState)(!0),
      [ae, oe] = (0, J.useState)(1),
      [se, ce] = (0, J.useState)(1),
      [le, ue] = (0, J.useState)(1),
      [de, fe] = (0, J.useState)(1),
      [pe, me] = (0, J.useState)({}),
      [he, ge] = (0, J.useState)(null),
      B = (0, J.useCallback)(() => {
        if (!e) return;
        x(e.name || ``);
        let t = e;
        (v?.color && C(`#` + v.color.getHexString()),
          v?.emissive && T(`#` + v.emissive.getHexString()),
          typeof t.emissiveIntensity == `number` && D(t.emissiveIntensity),
          typeof t.roughness == `number` && k(t.roughness),
          typeof t.metalness == `number` && j(t.metalness),
          N(e.opacity ?? 1),
          F(e.side ?? 0),
          I(!!t.wireframe),
          L(!!t.flatShading),
          re(e.depthWrite ?? !0),
          z(e.depthTest ?? !0),
          oe(e.blending ?? 1),
          typeof t.envMapIntensity == `number` && ce(t.envMapIntensity),
          typeof t.aoMapIntensity == `number` && ue(t.aoMapIntensity));
        let n = t.normalScale;
        n && fe(n.x);
        let r = {};
        for (let e of Cw) r[e.key] = t[e.key] ?? null;
        me(r);
      }, [e, v]);
    (0, J.useEffect)(() => {
      B();
    }, [B, l]);
    let ve = (0, J.useMemo)(() => (t.current ? Tw(t.current) : []), [t, l]),
      ye = (0, J.useCallback)(
        (n, a) => {
          !t.current || !e || r(new jh(t.current, i, e, n, a));
        },
        [t, e, r, i],
      ),
      be = (n) => {
        !t.current ||
          !e ||
          (N(n),
          r(
            new Uh(t.current, i, [
              new jh(t.current, i, e, `opacity`, n),
              new jh(t.current, i, e, `transparent`, n < 1),
            ]),
          ));
      },
      xe = (n) => {
        if (!t.current || !e) return;
        let a = Sw(e, n);
        (r(new Ph(t.current, i, e, a, s)), o(a.uuid));
      },
      Se = (n, a) => {
        !t.current || !e || r(new Mh(t.current, i, e, n, a));
      },
      Ce = (n, a, o) => {
        if (!t.current || !e) return;
        let s = e[n];
        if (!s) return;
        let c =
          a === `wrapS`
            ? `wrapS`
            : a === `wrapT`
              ? `wrapT`
              : a === `x`
                ? `repeatX`
                : `repeatY`;
        r(new Nh(t.current, i, s, c, o));
      };
    if (!e)
      return (0, Y.jsx)(`div`, {
        className: `p-4 text-[11px] text-muted-foreground text-center`,
        children: `No material selected`,
      });
    let we = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between px-3 py-2 border-b border-border/60 bg-muted/10`,
        children: [
          (0, Y.jsx)(`span`, {
            className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`,
            children: `Material Editor`,
          }),
          (0, Y.jsx)(`button`, {
            onClick: a,
            className: `text-muted-foreground hover:text-foreground`,
            title: `Close material editor`,
            children: (0, Y.jsx)(te, { className: `w-3.5 h-3.5` }),
          }),
        ],
      }),
      Te = (0, Y.jsxs)(`div`, {
        className: `p-2 border-b border-border/60 space-y-1.5`,
        children: [
          (0, Y.jsx)(vw, {
            material: e,
            geometry: u === `selected` ? (n ?? null) : null,
            version: l,
            playing: p === `shader` && m,
            onCompileError: p === `shader` ? _ : void 0,
            className: `w-full h-40 rounded-md overflow-hidden bg-[#1a1d24]`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `flex items-center gap-0.5 p-0.5 rounded-md bg-muted/20`,
            children: [
              (0, Y.jsxs)(`button`, {
                onClick: () => d(`sphere`),
                className: `flex-1 flex items-center justify-center gap-1 px-1.5 py-1 text-[10px] rounded transition-colors ${u === `sphere` ? `bg-primary/20 text-foreground` : `text-muted-foreground hover:text-foreground`}`,
                children: [(0, Y.jsx)(f, { className: `w-3 h-3` }), ` Sphere`],
              }),
              (0, Y.jsxs)(`button`, {
                onClick: () => d(`selected`),
                disabled: !n,
                className: `flex-1 flex items-center justify-center gap-1 px-1.5 py-1 text-[10px] rounded transition-colors disabled:opacity-40 ${u === `selected` ? `bg-primary/20 text-foreground` : `text-muted-foreground hover:text-foreground`}`,
                children: [
                  (0, Y.jsx)(Sn, { className: `w-3 h-3` }),
                  ` Selected`,
                ],
              }),
            ],
          }),
        ],
      });
    if (p === `shader`)
      return (0, Y.jsxs)(`div`, {
        className: `h-full flex flex-col overflow-hidden`,
        children: [
          we,
          Te,
          (0, Y.jsx)(Uw, {
            material: e,
            sceneRef: t,
            execute: r,
            onObjectChange: i,
            version: l,
            playing: m,
            setPlaying: h,
            compileError: g,
          }),
        ],
      });
    if (p === `locked`)
      return (0, Y.jsxs)(`div`, {
        className: `h-full flex flex-col overflow-hidden`,
        children: [we, Te, (0, Y.jsx)(qw, { material: e })],
      });
    let Ee = kw(e),
      De = Ee.pbrScalars && v?.roughness !== void 0,
      Oe = Ee.color && !!v?.color,
      ke = Ee.emissive && !!v?.emissive,
      Ae = Cw.filter((e) => Ee.maps.has(e.key));
    return (0, Y.jsxs)(`div`, {
      className: `h-full flex flex-col overflow-hidden`,
      children: [
        we,
        Te,
        (0, Y.jsxs)(`div`, {
          className: `flex-1 overflow-y-auto scrollbar-themed p-3 space-y-4`,
          children: [
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(Xw, { children: `Material` }),
                (0, Y.jsx)(`input`, {
                  type: `text`,
                  value: b,
                  onChange: (e) => {
                    (x(e.target.value), ye(`name`, e.target.value));
                  },
                  placeholder: `Material name`,
                  className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 mb-2`,
                }),
                (0, Y.jsx)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `Type`,
                }),
                (0, Y.jsxs)(`select`, {
                  value: xw(e) ?? ``,
                  onChange: (e) => xe(e.target.value),
                  className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40`,
                  children: [
                    xw(e) === null &&
                      (0, Y.jsx)(`option`, {
                        value: ``,
                        disabled: !0,
                        children: e.type,
                      }),
                    bw.map((e) =>
                      (0, Y.jsx)(
                        `option`,
                        { value: e.value, children: e.label },
                        e.value,
                      ),
                    ),
                  ],
                }),
                c &&
                  (0, Y.jsx)(`button`, {
                    onClick: c,
                    className: `mt-2 w-full px-2 py-1 text-[10px] rounded bg-muted/30 hover:bg-muted/50 text-foreground border border-border/60`,
                    title: `Create a new custom ShaderMaterial on the selected object`,
                    children: `+ New custom shader`,
                  }),
              ],
            }),
            Oe &&
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(Xw, { children: `Color` }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Y.jsx)(`input`, {
                        type: `color`,
                        value: S,
                        onChange: (e) => {
                          (C(e.target.value),
                            ye(`color`, new W(e.target.value)));
                        },
                        className: `w-6 h-6 rounded cursor-pointer border border-border`,
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `text-[11px] text-muted-foreground`,
                        children: S,
                      }),
                    ],
                  }),
                ],
              }),
            Ae.length > 0 &&
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(Xw, { children: `Texture Maps` }),
                  he &&
                    (0, Y.jsx)(`div`, {
                      className: `mb-2 text-[10px] text-destructive bg-destructive/10 border border-destructive/30 rounded px-2 py-1`,
                      children: he,
                    }),
                  (0, Y.jsx)(`div`, {
                    className: `space-y-2`,
                    children: Ae.map((e) => {
                      let t = pe[e.key] ?? null;
                      return (0, Y.jsxs)(
                        `div`,
                        {
                          className: `flex items-start gap-2 p-1.5 rounded border border-border/40`,
                          children: [
                            (0, Y.jsx)(Yw, { texture: t }),
                            (0, Y.jsxs)(`div`, {
                              className: `flex-1 min-w-0`,
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `text-[10px] text-foreground mb-1`,
                                  children: e.label,
                                }),
                                (0, Y.jsx)(Rw, {
                                  texture: t,
                                  sceneTextures: ve,
                                  colorData:
                                    e.key === `map` || e.key === `emissiveMap`,
                                  onPick: (t) => {
                                    (ge(null), Se(e.key, t));
                                  },
                                  onUploadError: ge,
                                }),
                                t &&
                                  (0, Y.jsxs)(`div`, {
                                    className: `flex items-center gap-1 mt-1`,
                                    children: [
                                      (0, Y.jsxs)(`select`, {
                                        value: t.wrapS,
                                        onChange: (t) =>
                                          Ce(
                                            e.key,
                                            `wrapS`,
                                            parseInt(t.target.value),
                                          ),
                                        className: `flex-1 bg-muted/30 border border-border/60 rounded px-1 py-0.5 text-[9px] text-foreground outline-none`,
                                        title: `Wrap S`,
                                        children: [
                                          (0, Y.jsx)(`option`, {
                                            value: 1e3,
                                            children: `Repeat`,
                                          }),
                                          (0, Y.jsx)(`option`, {
                                            value: 1001,
                                            children: `Clamp`,
                                          }),
                                          (0, Y.jsx)(`option`, {
                                            value: 1002,
                                            children: `Mirror`,
                                          }),
                                        ],
                                      }),
                                      (0, Y.jsx)(Gx, {
                                        step: 0.1,
                                        value: t.repeat.x,
                                        onCommit: (t) => Ce(e.key, `x`, t),
                                        className: `w-12 bg-muted/30 border border-border/60 rounded px-1 py-0.5 text-[9px] text-foreground outline-none cursor-ew-resize`,
                                        title: `Repeat X`,
                                      }),
                                      (0, Y.jsx)(Gx, {
                                        step: 0.1,
                                        value: t.repeat.y,
                                        onCommit: (t) => Ce(e.key, `y`, t),
                                        className: `w-12 bg-muted/30 border border-border/60 rounded px-1 py-0.5 text-[9px] text-foreground outline-none cursor-ew-resize`,
                                        title: `Repeat Y`,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        e.key,
                      );
                    }),
                  }),
                ],
              }),
            De &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(Jw, {
                    label: `Roughness`,
                    value: O,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      (k(e), ye(`roughness`, e));
                    },
                  }),
                  (0, Y.jsx)(Jw, {
                    label: `Metalness`,
                    value: A,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    onChange: (e) => {
                      (j(e), ye(`metalness`, e));
                    },
                  }),
                  pe.normalMap &&
                    (0, Y.jsx)(Jw, {
                      label: `Normal Scale`,
                      value: de,
                      min: 0,
                      max: 2,
                      step: 0.01,
                      onChange: (e) => {
                        (fe(e), ye(`normalScale`, new V(e, e)));
                      },
                    }),
                  pe.aoMap &&
                    (0, Y.jsx)(Jw, {
                      label: `AO Intensity`,
                      value: le,
                      min: 0,
                      max: 2,
                      step: 0.01,
                      onChange: (e) => {
                        (ue(e), ye(`aoMapIntensity`, e));
                      },
                    }),
                  (0, Y.jsx)(Jw, {
                    label: `Env Map Intensity`,
                    value: se,
                    min: 0,
                    max: 3,
                    step: 0.05,
                    onChange: (e) => {
                      (ce(e), ye(`envMapIntensity`, e));
                    },
                  }),
                ],
              }),
            ke &&
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(Xw, { children: `Emissive` }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-2 mb-1.5`,
                    children: [
                      (0, Y.jsx)(`input`, {
                        type: `color`,
                        value: w,
                        onChange: (e) => {
                          (T(e.target.value),
                            ye(`emissive`, new W(e.target.value)));
                        },
                        className: `w-6 h-6 rounded cursor-pointer border border-border`,
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `text-[11px] text-muted-foreground`,
                        children: w,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(Jw, {
                    label: `Intensity`,
                    value: E,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    onChange: (e) => {
                      (D(e), ye(`emissiveIntensity`, e));
                    },
                  }),
                ],
              }),
            (0, Y.jsx)(Jw, {
              label: `Opacity`,
              value: M,
              min: 0,
              max: 1,
              step: 0.01,
              onChange: be,
            }),
            y && (0, Y.jsx)($w, { material: e, setProp: ye, version: l }),
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(Xw, { children: `Options` }),
                (0, Y.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    Ee.wireframe &&
                      (0, Y.jsx)(Qw, {
                        label: `Wireframe`,
                        checked: ee,
                        onChange: (e) => {
                          (I(e), ye(`wireframe`, e));
                        },
                      }),
                    Ee.flatShading &&
                      (0, Y.jsx)(Qw, {
                        label: `Flat Shading`,
                        checked: ne,
                        onChange: (e) => {
                          (L(e), ye(`flatShading`, e));
                        },
                      }),
                    (0, Y.jsx)(Qw, {
                      label: `Depth Write`,
                      checked: R,
                      onChange: (e) => {
                        (re(e), ye(`depthWrite`, e));
                      },
                    }),
                    (0, Y.jsx)(Qw, {
                      label: `Depth Test`,
                      checked: ie,
                      onChange: (e) => {
                        (z(e), ye(`depthTest`, e));
                      },
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-2`,
              children: [
                Ee.side &&
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`label`, {
                        className: `text-[10px] text-muted-foreground`,
                        children: `Side`,
                      }),
                      (0, Y.jsxs)(`select`, {
                        value: P,
                        onChange: (e) => {
                          let t = parseInt(e.target.value);
                          (F(t), ye(`side`, t));
                        },
                        className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40`,
                        children: [
                          (0, Y.jsx)(`option`, { value: 0, children: `Front` }),
                          (0, Y.jsx)(`option`, { value: 1, children: `Back` }),
                          (0, Y.jsx)(`option`, {
                            value: 2,
                            children: `Double`,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, Y.jsxs)(`div`, {
                  children: [
                    (0, Y.jsx)(`label`, {
                      className: `text-[10px] text-muted-foreground`,
                      children: `Blending`,
                    }),
                    (0, Y.jsx)(`select`, {
                      value: ae,
                      onChange: (e) => {
                        let t = parseInt(e.target.value);
                        (oe(t), ye(`blending`, t));
                      },
                      className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40`,
                      children: ww.map((e) =>
                        (0, Y.jsx)(
                          `option`,
                          { value: e.value, children: e.label },
                          e.value,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
