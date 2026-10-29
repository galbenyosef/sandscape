// SceneEditor-NC7_0wmu 85 — children
// Lines 41280-42054 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var jS = ({
    object: e,
    sceneRef: t,
    execute: n,
    onObjectChange: r,
    remountAsset: i,
  }) => {
    let a = X((e) => e.objectChangeVersion),
      o = X(to),
      s = (0, J.useMemo)(() => (e ? DS(e) : []), [e, a]),
      [c, l] = (0, J.useState)(0);
    (0, J.useEffect)(() => {
      l(0);
    }, [o]);
    let u = s[c] ?? null,
      d = u ? OS(u) : null,
      f = d instanceof _e,
      [p, m] = (0, J.useState)(`#ffffff`),
      [h, g] = (0, J.useState)(0.5),
      [_, v] = (0, J.useState)(0),
      [y, b] = (0, J.useState)(`#000000`),
      [x, S] = (0, J.useState)(1),
      [C, w] = (0, J.useState)(1),
      [T, E] = (0, J.useState)(!1),
      [D, O] = (0, J.useState)(!1),
      [k, A] = (0, J.useState)(0),
      [j, M] = (0, J.useState)([]),
      [N, P] = (0, J.useState)(1),
      [F, ee] = (0, J.useState)(1),
      [I, te] = (0, J.useState)(1),
      [ne, L] = (0, J.useState)(0),
      [R, re] = (0, J.useState)(0),
      [ie, z] = (0, J.useState)(1.5),
      [ae, oe] = (0, J.useState)(1),
      se = (0, J.useRef)(new WeakMap()),
      ce = (0, J.useCallback)(() => {
        if (!d) return;
        if (
          (d.color && m(`#` + d.color.getHexString()),
          d.roughness !== void 0 && g(d.roughness),
          d.metalness !== void 0 && v(d.metalness),
          d.emissive && b(`#` + d.emissive.getHexString()),
          d.emissiveIntensity !== void 0 && S(d.emissiveIntensity),
          d.opacity !== void 0 && w(d.opacity),
          E(!!d.wireframe),
          O(!!d.flatShading),
          A(d.side ?? 0),
          P(d.normalScale?.x ?? 1),
          ee(d.aoMapIntensity ?? 1),
          te(d.envMapIntensity ?? 1),
          f)
        ) {
          let e = d;
          (L(e.clearcoat ?? 0),
            re(e.clearcoatRoughness ?? 0),
            z(e.ior ?? 1.5),
            oe(e.specularIntensity ?? 1));
        }
        let e = se.current.get(d) || new Map(),
          t = [];
        for (let n of ES) {
          let r = d[n.key] ?? null,
            i = e.get(n.key) ?? null;
          (r || i) &&
            t.push({
              key: n.key,
              label: n.label,
              texture: r || i,
              enabled: !!r,
            });
        }
        M(t);
      }, [d, f]);
    (0, J.useEffect)(() => {
      ce();
    }, [a, o, c, ce]);
    let le =
      e && rg(e)
        ? (0, Y.jsx)(TS, {
            object: e,
            sceneRef: t,
            execute: n,
            onObjectChange: r,
            remountAsset: i,
          })
        : null;
    if (!e || s.length === 0 || !u || !d)
      return (
        le ??
        (0, Y.jsx)(`div`, {
          className: `text-[11px] text-muted-foreground text-center py-4`,
          children: `No material available`,
        })
      );
    let ue = (e, i) => {
        !t.current || !u || n(new Oh(t.current, r, u, e, i));
      },
      de = (e) => {
        ue(`color`, new W(e));
      },
      fe = (e) => {
        ue(`emissive`, new W(e));
      },
      pe = (e) => {
        if (!t.current || !u) return;
        w(e);
        let i = [
          new Oh(t.current, r, u, `opacity`, e),
          new Oh(t.current, r, u, `transparent`, e < 1),
        ];
        n(new Uh(t.current, r, i));
      },
      me = (e) => {
        let t = parseInt(e);
        (A(t), ue(`side`, t));
      },
      he = (e) => {
        (P(e), ue(`normalScale`, new V(e, e)));
      },
      ge = (e, i) => {
        if (!(!d || !t.current || !u))
          if (i) {
            let i = se.current.get(d),
              a = i?.get(e);
            if (!a) return;
            (i.delete(e), n(new Oh(t.current, r, u, e, a)));
          } else {
            let i = d[e];
            if (!i) return;
            let a = se.current.get(d);
            (a || ((a = new Map()), se.current.set(d, a)),
              a.set(e, i),
              n(new Oh(t.current, r, u, e, null)));
          }
      },
      B = (e, t) =>
        e.name ||
        (e.material &&
          (Array.isArray(e.material) ? e.material[0] : e.material)?.name) ||
        `Mesh ${t + 1}`;
    return (0, Y.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        le,
        le &&
          (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(`div`, { className: `border-t border-border/60` }),
              !nv(d) &&
                (0, Y.jsx)(`p`, {
                  className: `text-[9px] text-muted-foreground/70 leading-tight`,
                  children: `Below edits the asset's own material for this session only — it is not saved. Pick or create a material above to make a change stick.`,
                }),
            ],
          }),
        s.length > 1 &&
          (0, Y.jsxs)(`div`, {
            children: [
              (0, Y.jsx)(`h4`, {
                className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
                children: `Mesh`,
              }),
              (0, Y.jsx)(`select`, {
                value: c,
                onChange: (e) => l(parseInt(e.target.value)),
                className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors`,
                children: s.map((e, t) =>
                  (0, Y.jsx)(`option`, { value: t, children: B(e, t) }, e.uuid),
                ),
              }),
            ],
          }),
        (0, Y.jsxs)(`div`, {
          className: `text-[10px] text-muted-foreground`,
          children: [
            f ? `MeshPhysicalMaterial` : `MeshStandardMaterial`,
            d.name ? ` — ${d.name}` : ``,
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Color`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, Y.jsx)(`input`, {
                  type: `color`,
                  value: p,
                  onChange: (e) => {
                    (m(e.target.value), de(e.target.value));
                  },
                  className: `w-6 h-6 rounded cursor-pointer border border-border`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-muted-foreground`,
                  children: p,
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Texture Maps`,
            }),
            j.length === 0
              ? (0, Y.jsx)(`span`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `No texture maps`,
                })
              : (0, Y.jsx)(`div`, {
                  className: `grid grid-cols-3 gap-2`,
                  children: j.map((e) =>
                    (0, Y.jsxs)(
                      `div`,
                      {
                        className: `flex flex-col items-center gap-0.5`,
                        children: [
                          (0, Y.jsx)(kS, { texture: e.texture }),
                          (0, Y.jsxs)(`label`, {
                            className: `flex items-center gap-1 cursor-pointer`,
                            children: [
                              (0, Y.jsx)(`input`, {
                                type: `checkbox`,
                                checked: e.enabled,
                                onChange: (t) => ge(e.key, t.target.checked),
                                className: `rounded`,
                              }),
                              (0, Y.jsx)(`span`, {
                                className: `text-[10px] text-muted-foreground`,
                                children: e.label,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.key,
                    ),
                  ),
                }),
          ],
        }),
        (0, Y.jsx)(AS, {
          label: `Roughness`,
          value: h,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => {
            (g(e), ue(`roughness`, e));
          },
        }),
        (0, Y.jsx)(AS, {
          label: `Metalness`,
          value: _,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: (e) => {
            (v(e), ue(`metalness`, e));
          },
        }),
        j.some((e) => e.key === `normalMap`) &&
          (0, Y.jsx)(AS, {
            label: `Normal Scale`,
            value: N,
            min: 0,
            max: 2,
            step: 0.01,
            onChange: he,
          }),
        j.some((e) => e.key === `aoMap`) &&
          (0, Y.jsx)(AS, {
            label: `AO Intensity`,
            value: F,
            min: 0,
            max: 2,
            step: 0.01,
            onChange: (e) => {
              (ee(e), ue(`aoMapIntensity`, e));
            },
          }),
        (0, Y.jsx)(AS, {
          label: `Env Map Intensity`,
          value: I,
          min: 0,
          max: 3,
          step: 0.05,
          onChange: (e) => {
            (te(e), ue(`envMapIntensity`, e));
          },
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Emissive`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-2 mb-1.5`,
              children: [
                (0, Y.jsx)(`input`, {
                  type: `color`,
                  value: y,
                  onChange: (e) => {
                    (b(e.target.value), fe(e.target.value));
                  },
                  className: `w-6 h-6 rounded cursor-pointer border border-border`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-muted-foreground`,
                  children: y,
                }),
              ],
            }),
            (0, Y.jsx)(AS, {
              label: `Intensity`,
              value: x,
              min: 0,
              max: 5,
              step: 0.01,
              onChange: (e) => {
                (S(e), ue(`emissiveIntensity`, e));
              },
            }),
          ],
        }),
        f &&
          (0, Y.jsxs)(`div`, {
            children: [
              (0, Y.jsx)(`h4`, {
                className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
                children: `Clearcoat`,
              }),
              (0, Y.jsx)(AS, {
                label: `Clearcoat`,
                value: ne,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (e) => {
                  (L(e), ue(`clearcoat`, e));
                },
              }),
              (0, Y.jsx)(AS, {
                label: `Clearcoat Roughness`,
                value: R,
                min: 0,
                max: 1,
                step: 0.01,
                onChange: (e) => {
                  (re(e), ue(`clearcoatRoughness`, e));
                },
              }),
              (0, Y.jsx)(`h4`, {
                className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 mt-3`,
                children: `Specular`,
              }),
              (0, Y.jsx)(AS, {
                label: `IOR`,
                value: ie,
                min: 1,
                max: 2.33,
                step: 0.01,
                onChange: (e) => {
                  (z(e), ue(`ior`, e));
                },
              }),
              (0, Y.jsx)(AS, {
                label: `Specular Intensity`,
                value: ae,
                min: 0,
                max: 2,
                step: 0.01,
                onChange: (e) => {
                  (oe(e), ue(`specularIntensity`, e));
                },
              }),
            ],
          }),
        (0, Y.jsx)(AS, {
          label: `Opacity`,
          value: C,
          min: 0,
          max: 1,
          step: 0.01,
          onChange: pe,
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Options`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center justify-between py-0.5`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `text-[11px] text-foreground`,
                      children: `Wireframe`,
                    }),
                    (0, Y.jsx)(bS, {
                      checked: T,
                      onChange: (e) => {
                        (E(e), ue(`wireframe`, e));
                      },
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center justify-between py-0.5`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `text-[11px] text-foreground`,
                      children: `Flat Shading`,
                    }),
                    (0, Y.jsx)(bS, {
                      checked: D,
                      onChange: (e) => {
                        (O(e), ue(`flatShading`, e));
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`label`, {
              className: `text-[10px] text-muted-foreground`,
              children: `Side`,
            }),
            (0, Y.jsxs)(`select`, {
              value: k,
              onChange: (e) => me(e.target.value),
              className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors`,
              children: [
                (0, Y.jsx)(`option`, { value: 0, children: `Front` }),
                (0, Y.jsx)(`option`, { value: 1, children: `Back` }),
                (0, Y.jsx)(`option`, { value: 2, children: `Double` }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  MS = ({ object: e, sceneRef: t, execute: n, onObjectChange: r }) => {
    let i = X((e) => e.objectChangeVersion),
      a = X(to),
      [o, s] = (0, J.useState)(`#ffffff`),
      [c, l] = (0, J.useState)(1),
      [u, d] = (0, J.useState)(0),
      [f, p] = (0, J.useState)(2),
      [m, h] = (0, J.useState)(60),
      [g, _] = (0, J.useState)(0),
      [v, y] = (0, J.useState)(!1),
      [b, x] = (0, J.useState)(1024),
      [S, C] = (0, J.useState)(`#444444`),
      w = e instanceof xt ? e : null,
      T = e instanceof at,
      E = e instanceof fn,
      D = e instanceof He,
      O = e instanceof H,
      k = (0, J.useCallback)(() => {
        w &&
          (w.color && s(`#` + w.color.getHexString()),
          l(w.intensity),
          (T || E) && (d(w.distance), p(w.decay)),
          E && (h(fe.radToDeg(w.angle)), _(w.penumbra)),
          y(w.castShadow),
          w.shadow && x(w.shadow.mapSize.x),
          O && C(`#` + w.groundColor.getHexString()));
      }, [w, T, E, O]);
    if (
      ((0, J.useEffect)(() => {
        k();
      }, [i, a, k]),
      !w)
    )
      return (0, Y.jsx)(`div`, {
        className: `text-[11px] text-muted-foreground text-center py-4`,
        children: `No light selected`,
      });
    let A = (i) => {
        if (!t.current || !e) return;
        s(i);
        let a = parseInt(i.slice(1), 16);
        n(new Dh(t.current, r, e, `color`, a));
      },
      j = (i) => {
        !t.current ||
          !e ||
          isNaN(i) ||
          n(new Eh(t.current, r, e, `intensity`, i));
      },
      M = (i) => {
        !t.current ||
          !e ||
          isNaN(i) ||
          n(new Eh(t.current, r, e, `distance`, i));
      },
      N = (i) => {
        !t.current || !e || isNaN(i) || n(new Eh(t.current, r, e, `decay`, i));
      },
      P = (i) => {
        !t.current ||
          !e ||
          isNaN(i) ||
          (h(i), n(new Eh(t.current, r, e, `angle`, fe.degToRad(i))));
      },
      F = (i) => {
        !t.current ||
          !e ||
          isNaN(i) ||
          (_(i), n(new Eh(t.current, r, e, `penumbra`, i)));
      },
      ee = (i) => {
        !t.current || !e || (y(i), n(new Eh(t.current, r, e, `castShadow`, i)));
      },
      I = (e) => {
        if (!t.current || !w) return;
        let i = parseInt(e);
        (x(i), n(new uv(t.current, r, w, i)));
      },
      te = (i) => {
        if (!t.current || !e) return;
        C(i);
        let a = parseInt(i.slice(1), 16);
        n(new Dh(t.current, r, e, `groundColor`, a));
      };
    return (0, Y.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `text-[10px] text-muted-foreground`,
          children: E
            ? `SpotLight`
            : T
              ? `PointLight`
              : D
                ? `DirectionalLight`
                : O
                  ? `HemisphereLight`
                  : `Light`,
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Color`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, Y.jsx)(`input`, {
                  type: `color`,
                  value: o,
                  onChange: (e) => A(e.target.value),
                  className: `w-6 h-6 rounded cursor-pointer border border-border`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-muted-foreground`,
                  children: o,
                }),
              ],
            }),
          ],
        }),
        O &&
          (0, Y.jsxs)(`div`, {
            children: [
              (0, Y.jsx)(`label`, {
                className: `text-[10px] text-muted-foreground`,
                children: `Ground Color`,
              }),
              (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Y.jsx)(`input`, {
                    type: `color`,
                    value: S,
                    onChange: (e) => te(e.target.value),
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
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`label`, {
              className: `text-[10px] text-muted-foreground`,
              children: `Intensity`,
            }),
            (0, Y.jsx)(Gx, {
              value: c,
              min: 0,
              max: 10,
              step: 0.1,
              onChange: l,
              onCommit: (e) => {
                (l(e), j(e));
              },
            }),
          ],
        }),
        (T || E) &&
          (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`label`, {
                    className: `text-[10px] text-muted-foreground`,
                    children: `Distance`,
                  }),
                  (0, Y.jsx)(Gx, {
                    value: u,
                    min: 0,
                    step: 0.1,
                    onChange: d,
                    onCommit: (e) => {
                      (d(e), M(e));
                    },
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`label`, {
                    className: `text-[10px] text-muted-foreground`,
                    children: `Decay`,
                  }),
                  (0, Y.jsx)(Gx, {
                    value: f,
                    min: 0,
                    step: 0.1,
                    onChange: p,
                    onCommit: (e) => {
                      (p(e), N(e));
                    },
                  }),
                ],
              }),
            ],
          }),
        E &&
          (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`label`, {
                    className: `text-[10px] text-muted-foreground`,
                    children: `Angle (degrees)`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Y.jsx)(`input`, {
                        type: `range`,
                        min: 0,
                        max: 90,
                        step: 1,
                        value: m,
                        onChange: (e) => P(parseFloat(e.target.value)),
                        className: `flex-1 h-1 accent-primary`,
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `text-[10px] text-muted-foreground w-8 text-right`,
                        children: m.toFixed(0),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`label`, {
                    className: `text-[10px] text-muted-foreground`,
                    children: `Penumbra`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Y.jsx)(`input`, {
                        type: `range`,
                        min: 0,
                        max: 1,
                        step: 0.01,
                        value: g,
                        onChange: (e) => F(parseFloat(e.target.value)),
                        className: `flex-1 h-1 accent-primary`,
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `text-[10px] text-muted-foreground w-8 text-right`,
                        children: g.toFixed(2),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Shadows`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center justify-between py-0.5`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `text-[11px] text-foreground`,
                      children: `Cast Shadow`,
                    }),
                    (0, Y.jsx)(bS, { checked: v, onChange: ee }),
                  ],
                }),
                v &&
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`label`, {
                        className: `text-[10px] text-muted-foreground`,
                        children: `Shadow Map Size`,
                      }),
                      (0, Y.jsxs)(`select`, {
                        value: b,
                        onChange: (e) => I(e.target.value),
                        className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors`,
                        children: [
                          (0, Y.jsx)(`option`, { value: 512, children: `512` }),
                          (0, Y.jsx)(`option`, {
                            value: 1024,
                            children: `1024`,
                          }),
                          (0, Y.jsx)(`option`, {
                            value: 2048,
                            children: `2048`,
                          }),
                          (0, Y.jsx)(`option`, {
                            value: 4096,
                            children: `4096`,
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  NS = new Set([`editorOnly`, `__editorRuntime`]),
  PS = `w-full bg-background border border-border rounded px-1.5 py-0.5 text-[11px] text-foreground`,
  FS = (0, J.createContext)([]);
