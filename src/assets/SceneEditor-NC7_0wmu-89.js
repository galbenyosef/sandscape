// SceneEditor-NC7_0wmu 89 — children
// Lines 42741-43381 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var $S = ({ owner: e, pointer: t, value: n }) => {
    let r = X((e) => e.visualizerBindings),
      i = X((e) => e.upsertVisualizerBinding),
      a = X((e) => e.removeVisualizerBinding),
      o = `field:${e.uuid}:${t}`,
      s = r.find((e) => e.id === o),
      c = (0, J.useMemo)(
        () =>
          typeof n == `number`
            ? [`sphere`, `ring`, `scalar`]
            : RS(n) || zS(n)
              ? [
                  `point`,
                  `localPoint`,
                  `direction`,
                  `box`,
                  `plane`,
                  `color`,
                  `quaternion`,
                ]
              : [],
        [n],
      );
    return c.length === 0
      ? null
      : (0, Y.jsxs)(`select`, {
          value: s?.kind ?? ``,
          onChange: (n) => {
            let r = n.target.value;
            r ? i({ id: o, ownerUuid: e.uuid, kind: r, valuePath: t }) : a(o);
          },
          className: `max-w-16 bg-background border border-border rounded text-[9px]`,
          title: `Viewport visualizer`,
          children: [
            (0, Y.jsx)(`option`, { value: ``, children: `none` }),
            c.map((e) => (0, Y.jsx)(`option`, { value: e, children: e }, e)),
          ],
        });
  },
  eC = ({ sceneRef: e, execute: t, onObjectChange: n, sessionDir: r }) => {
    let i = X((e) => e.objectChangeVersion),
      a = X((e) => e.environmentSource),
      o = X((e) => e.environmentHdrUrl),
      s = X((e) => e.environmentAsBackground),
      c = X((e) => e.toneMappingExposure),
      l = X((e) => e.setEnvironmentSource),
      u = X((e) => e.setEnvironmentHdrUrl),
      d = X((e) => e.setEnvironmentAsBackground),
      f = X((e) => e.setToneMappingExposure),
      [p, m] = (0, J.useState)(`#000000`),
      [h, g] = (0, J.useState)(`none`),
      [_, v] = (0, J.useState)(`#cccccc`),
      [y, b] = (0, J.useState)(0.01),
      [x, S] = (0, J.useState)(1),
      [C, w] = (0, J.useState)(100),
      [T, E] = (0, J.useState)(!0),
      [D, O] = (0, J.useState)(1),
      [k, j] = (0, J.useState)(0),
      [M, N] = (0, J.useState)(1),
      [P, F] = (0, J.useState)(1),
      [ee, I] = (0, J.useState)(0),
      [te, ne] = (0, J.useState)({ x: 0, y: 0, z: 0 }),
      [L, R] = (0, J.useState)({ x: 0, y: 0, z: 0 }),
      [re, ie] = (0, J.useState)([]),
      [z, ae] = (0, J.useState)(!1),
      oe = X((t) => !e.current || t.editorVisibility[e.current.uuid] !== !1),
      se = X((e) => e.setObjectEditorVisible),
      ce = (0, J.useCallback)(() => {
        let t = e.current;
        t &&
          (t.background instanceof W
            ? m(`#` + t.background.getHexString())
            : m(`#000000`),
          t.fog instanceof Jt
            ? (g(`exp2`), v(`#` + t.fog.color.getHexString()), b(t.fog.density))
            : t.fog instanceof Oe
              ? (g(`linear`),
                v(`#` + t.fog.color.getHexString()),
                S(t.fog.near),
                w(t.fog.far))
              : g(`none`),
          E(t.visible),
          O(t.layers.mask),
          j(t.renderOrder),
          N(t.environmentIntensity),
          F(t.backgroundIntensity),
          I(t.backgroundBlurriness),
          ne({
            x: fe.radToDeg(t.environmentRotation.x),
            y: fe.radToDeg(t.environmentRotation.y),
            z: fe.radToDeg(t.environmentRotation.z),
          }),
          R({
            x: fe.radToDeg(t.backgroundRotation.x),
            y: fe.radToDeg(t.backgroundRotation.y),
            z: fe.radToDeg(t.backgroundRotation.z),
          }));
      }, [e]);
    ((0, J.useEffect)(() => {
      ce();
    }, [i, ce]),
      (0, J.useEffect)(() => {
        if (!r) return;
        let e = !1,
          t = [`.png`, `.jpg`, `.jpeg`, `.webp`],
          n = (e) => t.some((t) => e.toLowerCase().endsWith(t));
        return (
          (async () => {
            try {
              let t = await A.getAssets(r);
              if (e || !t.success) return;
              let i = [],
                a = new Set();
              for (let e of t.assets)
                if (
                  e.asset_type === `environment_map` ||
                  e.asset_type === `hdri` ||
                  e.asset_type === `splat_world`
                ) {
                  let t = [e.path, e.concept_art_path, e.panorama_path].filter(
                    Boolean,
                  );
                  for (let o of t) {
                    if (a.has(o)) continue;
                    a.add(o);
                    let t = Sx(o),
                      s = A.getAssetUrl(r, t, !1);
                    if (o.endsWith(`.hdr`)) {
                      let e = o.split(`/`).pop()?.replace(`.hdr`, ``) || o;
                      i.push({ name: e, path: t, previewUrl: s, type: `hdr` });
                    } else if (n(o)) {
                      let n =
                        e.asset_name ||
                        o
                          .split(`/`)
                          .pop()
                          ?.replace(/\.[^.]+$/, ``) ||
                        o;
                      i.push({
                        name: n,
                        path: t,
                        previewUrl: s,
                        type: `image`,
                      });
                    }
                  }
                }
              if (!a.has(`hdri/venice_sunset_1k.hdr`)) {
                let e = A.getAssetUrl(r, `hdri/venice_sunset_1k.hdr`, !1);
                try {
                  (await fetch(e, { method: `HEAD` })).ok &&
                    i.push({
                      name: `venice_sunset_1k`,
                      path: `hdri/venice_sunset_1k.hdr`,
                      previewUrl: e,
                      type: `hdr`,
                    });
                } catch {}
              }
              e || ie(i);
            } catch {}
          })(),
          () => {
            e = !0;
          }
        );
      }, [r]));
    let le = (r) => {
        let i = e.current;
        i && (m(r), t(new zh(i, n, `background`, new W(r))));
      },
      ue = (r) => {
        let i = e.current;
        i &&
          (r === `none`
            ? (g(`none`), t(new zh(i, n, `fog`, null)))
            : r === `exp2`
              ? (g(`exp2`), t(new zh(i, n, `fog`, new Jt(_, y))))
              : r === `linear` &&
                (g(`linear`), t(new zh(i, n, `fog`, new Oe(_, x, C)))));
      },
      de = (r) => {
        let i = e.current;
        !i ||
          !i.fog ||
          (v(r),
          t(
            new zh(
              i,
              n,
              `fog`,
              h === `linear` ? new Oe(r, x, C) : new Jt(r, y),
            ),
          ));
      },
      pe = (r, i) => {
        let a = e.current;
        !a ||
          !Number.isFinite(r) ||
          !Number.isFinite(i) ||
          r < 0 ||
          i <= r ||
          t(new zh(a, n, `fog`, new Oe(_, r, i)));
      },
      me = (r) => {
        let i = e.current;
        !i ||
          !i.fog ||
          isNaN(r) ||
          (b(r), t(new zh(i, n, `fog`, new Jt(_, r))));
      },
      he = (e) => {
        let t = e;
        (l(t), t === `asset` && !o && re.length > 0 && u(re[0].path));
      },
      ge = (e) => {
        (ae(!0), u(e), setTimeout(() => ae(!1), 2e3));
      };
    return (0, Y.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Background`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, Y.jsx)(`input`, {
                  type: `color`,
                  value: p,
                  onChange: (e) => le(e.target.value),
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
              children: `Fog`,
            }),
            (0, Y.jsxs)(`select`, {
              value: h,
              onChange: (e) => ue(e.target.value),
              className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors mb-1.5`,
              children: [
                (0, Y.jsx)(`option`, { value: `none`, children: `None` }),
                (0, Y.jsx)(`option`, { value: `linear`, children: `Fog` }),
                (0, Y.jsx)(`option`, { value: `exp2`, children: `FogExp2` }),
              ],
            }),
            h !== `none` &&
              (0, Y.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`label`, {
                        className: `text-[10px] text-muted-foreground`,
                        children: `Fog Color`,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, Y.jsx)(`input`, {
                            type: `color`,
                            value: _,
                            onChange: (e) => de(e.target.value),
                            className: `w-6 h-6 rounded cursor-pointer border border-border`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `text-[11px] text-muted-foreground`,
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  }),
                  h === `exp2`
                    ? (0, Y.jsxs)(`div`, {
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-[10px] text-muted-foreground`,
                            children: `Density`,
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, Y.jsx)(`input`, {
                                type: `range`,
                                min: 0,
                                max: 0.1,
                                step: 0.001,
                                value: y,
                                onChange: (e) => me(parseFloat(e.target.value)),
                                className: `flex-1 h-1 accent-primary`,
                              }),
                              (0, Y.jsx)(`span`, {
                                className: `text-[10px] text-muted-foreground w-10 text-right`,
                                children: y.toFixed(3),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-1.5`,
                        children: [
                          (0, Y.jsxs)(`label`, {
                            className: `text-[10px] text-muted-foreground`,
                            children: [
                              `Near`,
                              (0, Y.jsx)(Gx, {
                                value: x,
                                min: 0,
                                step: 1,
                                onChange: S,
                                onCommit: (e) => {
                                  (S(e), pe(e, C));
                                },
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`label`, {
                            className: `text-[10px] text-muted-foreground`,
                            children: [
                              `Far`,
                              (0, Y.jsx)(Gx, {
                                value: C,
                                min: 0,
                                step: 1,
                                onChange: w,
                                onCommit: (e) => {
                                  (w(e), pe(x, e));
                                },
                              }),
                            ],
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
              children: `Environment`,
            }),
            (0, Y.jsxs)(`select`, {
              value: a,
              onChange: (e) => he(e.target.value),
              className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors mb-1.5`,
              children: [
                (0, Y.jsx)(`option`, {
                  value: `scene`,
                  children: `Serialized Scene Texture`,
                }),
                (0, Y.jsx)(`option`, {
                  value: `asset`,
                  children: `Project Environment Map`,
                }),
                (0, Y.jsx)(`option`, { value: `none`, children: `None` }),
                (0, Y.jsx)(`option`, {
                  value: `studio`,
                  children: `Editor Preview Lighting`,
                }),
              ],
            }),
            a === `asset` &&
              (0, Y.jsx)(`div`, {
                className: `space-y-1.5`,
                children:
                  re.length > 0
                    ? (0, Y.jsxs)(`div`, {
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-[10px] text-muted-foreground`,
                            children: `Source`,
                          }),
                          (0, Y.jsxs)(`select`, {
                            value: o || ``,
                            onChange: (e) => ge(e.target.value),
                            className: `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary/40 transition-colors`,
                            children: [
                              (0, Y.jsx)(`option`, {
                                value: ``,
                                disabled: !0,
                                children: `Select environment map...`,
                              }),
                              re.map((e) =>
                                (0, Y.jsxs)(
                                  `option`,
                                  {
                                    value: e.path,
                                    children: [
                                      e.name,
                                      e.type === `hdr` ? ` (HDR)` : ` (Image)`,
                                    ],
                                  },
                                  e.path,
                                ),
                              ),
                            ],
                          }),
                          z &&
                            (0, Y.jsx)(`span`, {
                              className: `text-[10px] text-muted-foreground`,
                              children: `Loading...`,
                            }),
                        ],
                      })
                    : (0, Y.jsx)(`span`, {
                        className: `text-[10px] text-muted-foreground`,
                        children: `No environment maps found in session`,
                      }),
              }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5 mt-1.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] text-foreground`,
                  children: `Use as Background`,
                }),
                (0, Y.jsx)(bS, { checked: s, onChange: d }),
              ],
            }),
            a === `studio` &&
              (0, Y.jsx)(`p`, {
                className: `text-[9px] text-muted-foreground mt-1`,
                children: `Preview-only lighting. It is not written as the game environment.`,
              }),
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-1.5 mt-2`,
              children: [
                (0, Y.jsxs)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: [
                    `Environment intensity`,
                    (0, Y.jsx)(Gx, {
                      value: M,
                      min: 0,
                      step: 0.1,
                      onChange: N,
                      onCommit: (r) => {
                        N(r);
                        let i = e.current;
                        i && t(new zh(i, n, `environmentIntensity`, r));
                      },
                    }),
                  ],
                }),
                (0, Y.jsxs)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: [
                    `Background intensity`,
                    (0, Y.jsx)(Gx, {
                      value: P,
                      min: 0,
                      step: 0.1,
                      onChange: F,
                      onCommit: (r) => {
                        F(r);
                        let i = e.current;
                        i && t(new zh(i, n, `backgroundIntensity`, r));
                      },
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`label`, {
              className: `block text-[10px] text-muted-foreground mt-1`,
              children: [
                `Background blurriness`,
                (0, Y.jsx)(`input`, {
                  type: `range`,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  value: ee,
                  onChange: (r) => {
                    let i = Number(r.target.value);
                    I(i);
                    let a = e.current;
                    a && t(new zh(a, n, `backgroundBlurriness`, i));
                  },
                  className: `w-full h-1 accent-primary`,
                }),
              ],
            }),
            (0, Y.jsx)(nC, {
              label: `Environment rotation`,
              value: te,
              onChange: ne,
              onCommit: (r) => {
                let i = e.current;
                i && t(new zh(i, n, `environmentRotation`, tC(r)));
              },
            }),
            (0, Y.jsx)(nC, {
              label: `Background rotation`,
              value: L,
              onChange: R,
              onCommit: (r) => {
                let i = e.current;
                i && t(new zh(i, n, `backgroundRotation`, tC(r)));
              },
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Scene object`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px]`,
                  children: `Visible in game`,
                }),
                (0, Y.jsx)(bS, {
                  checked: T,
                  onChange: (r) => {
                    let i = e.current;
                    i && (E(r), t(new Eh(i, n, i, `visible`, r)));
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center justify-between py-0.5`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[11px]`,
                  children: `Show in editor`,
                }),
                (0, Y.jsx)(bS, {
                  checked: oe,
                  onChange: (t) => {
                    let n = e.current;
                    n && se(n.uuid, t);
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`label`, {
              className: `block text-[10px] text-muted-foreground`,
              children: [
                `Layer mask`,
                (0, Y.jsx)(Gx, {
                  value: D,
                  min: 0,
                  step: 1,
                  precision: 0,
                  onChange: O,
                  onCommit: (r) => {
                    O(r);
                    let i = e.current;
                    i && Number.isInteger(r) && t(new dv(i, n, i, r));
                  },
                }),
              ],
            }),
            (0, Y.jsxs)(`label`, {
              className: `block text-[10px] text-muted-foreground mt-1`,
              children: [
                `Render order`,
                (0, Y.jsx)(Gx, {
                  value: k,
                  step: 1,
                  precision: 0,
                  onChange: j,
                  onCommit: (r) => {
                    j(r);
                    let i = e.current;
                    i && t(new Eh(i, n, i, `renderOrder`, r));
                  },
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Exposure`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, Y.jsx)(`input`, {
                  type: `range`,
                  min: 0.1,
                  max: 3,
                  step: 0.1,
                  value: c,
                  onChange: (e) => f(parseFloat(e.target.value)),
                  className: `flex-1 h-1 accent-primary`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-[10px] text-muted-foreground w-8 text-right`,
                  children: c.toFixed(1),
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: `border-t border-border pt-2`,
          children: [
            (0, Y.jsx)(`h4`, {
              className: `text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2`,
              children: `Scene Metadata`,
            }),
            (0, Y.jsx)(HS, {
              object: e.current,
              sceneRef: e,
              execute: t,
              onObjectChange: n,
              sessionDir: r,
            }),
          ],
        }),
      ],
    });
  };
