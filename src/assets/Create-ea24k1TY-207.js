// Create-ea24k1TY 207 — classname
// Lines 69844-70868 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function f1({
  assets: e,
  sessionDir: t,
  gameDesignData: n,
  onExecute: r,
  node: i,
  sessionId: a,
  isActive: o,
}) {
  let [s, c] = (0, X.useState)(null),
    [l, u] = (0, X.useState)(!1),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(`textured`),
    [_, v] = (0, X.useState)(null),
    [y, b] = (0, X.useState)(0),
    [C, w] = (0, X.useState)(!1),
    [T, E] = (0, X.useState)(!1),
    [D, O] = (0, X.useState)(!0),
    [k, A] = (0, X.useState)(!1),
    [j, N] = (0, X.useState)(!1),
    [P, F] = (0, X.useState)(null),
    [I, L] = (0, X.useState)([]),
    [R, z] = (0, X.useState)(null),
    [V, H] = (0, X.useState)(!1),
    [ee, W] = (0, X.useState)(!1),
    [G, te] = (0, X.useState)([]),
    [K, ne] = (0, X.useState)(null),
    [re, ae] = (0, X.useState)({}),
    [oe, se] = (0, X.useState)(new Set()),
    [q, ce] = (0, X.useState)(`translate`),
    [le, ue] = (0, X.useState)(!1),
    [de, fe] = (0, X.useState)(!1),
    [me, he] = (0, X.useState)(!1),
    ge = (0, X.useRef)(null),
    _e = a || t?.split(`/`).pop() || t || ``,
    [ve, ye] = (0, X.useState)(``),
    [be, xe] = (0, X.useState)(`z_image_turbo`),
    [Se, Ce] = (0, X.useState)(``),
    [we, Te] = (0, X.useState)(!1),
    [Ee, De] = (0, X.useState)(!1),
    [Oe, ke] = (0, X.useState)(``),
    [Ae, je] = (0, X.useState)(!1),
    Me = (0, X.useRef)(null),
    Ne = (0, X.useRef)(null),
    [Pe, Fe] = (0, X.useState)(!1),
    Ie = be === `p_image_edit` || be === `flux_pro_edit`,
    Le = (0, X.useRef)(new Map());
  (0, X.useEffect)(() => {
    s?.asset_name && Le.current.set(s.asset_name, I);
  }, [I, s?.asset_name]);
  let Re = (0, X.useMemo)(() => {
      let t = (n?.assets || []).filter((e) => Ht[e.asset_type] === `3d`),
        r = e.filter(
          (e) =>
            e.type === `3d` ||
            e.name?.endsWith(`.glb`) ||
            e.name?.endsWith(`.gltf`),
        );
      return t.length > 0
        ? t.map((t) => {
            let n = r.find(
                (e) =>
                  e.asset_name === t.asset_name ||
                  e.name?.includes(t.asset_name?.replace(/\s+/g, `_`)),
              ),
              i = e.find((e) => e.asset_name === t.asset_name),
              a = e.find(
                (e) =>
                  e.type === `image` &&
                  (e.asset_name === t.asset_name ||
                    e.name?.includes(t.asset_name?.replace(/\s+/g, `_`))),
              ),
              o = i?.concept_art_path || a?.name || t.concept_art_path,
              s = n?.collision_mesh_path,
              c = s
                ? null
                : e.find(
                    (e) =>
                      e.name?.includes(
                        `${t.asset_name?.replace(/\s+/g, `_`)}_collision`,
                      ) && e.name?.endsWith(`.glb`),
                  ),
              l = i?.model_3d_path || n?.name || t.model_3d_path;
            return {
              id: t.asset_name || `asset-${t.asset_type}`,
              asset_name: t.asset_name,
              asset_type: t.asset_type,
              description: t.description || ``,
              concept_art_path: o,
              model_3d_path: l,
              collision_mesh_path: s || c?.name,
              segmented_model_path: i?.segmented_model_path,
              lod_levels: i?.lod_levels,
              lod_manifest: i?.lod_manifest,
              status: n || l ? `3d` : a || o ? `concept` : `planned`,
            };
          })
        : r
            .filter((e) => !e.name?.includes(`_collision`))
            .map((t) => {
              let n =
                  t.asset_name ||
                  t.name?.replace(/\.glb$|\.gltf$/i, ``).replace(/^.*\//, ``) ||
                  `unknown`,
                i = e.find(
                  (e) =>
                    e.type === `image` &&
                    (e.asset_name === t.asset_name ||
                      (t.asset_name &&
                        e.name?.includes(t.asset_name.replace(/\s+/g, `_`)))),
                ),
                a = t.collision_mesh_path,
                o = a
                  ? null
                  : r.find(
                      (e) =>
                        e.name?.includes(`${n}_collision`) ||
                        e.name?.includes(
                          `${t.asset_name?.replace(/\s+/g, `_`)}_collision`,
                        ),
                    );
              return {
                id: t.id || n,
                asset_name: t.asset_name || n,
                asset_type: t.asset_type || `prop_3d`,
                description: t.description || ``,
                concept_art_path: t.concept_art_path || i?.name,
                model_3d_path: t.name,
                collision_mesh_path: a || o?.name,
                segmented_model_path: t.segmented_model_path,
                lod_levels: t.lod_levels,
                lod_manifest: t.lod_manifest,
                status: `3d`,
              };
            });
    }, [n?.assets, e]),
    { requestedAsset: ze, consumeRequestedAsset: Be } = ie();
  (0, X.useEffect)(() => {
    if (Re.length === 0) return;
    if (o && ze?.tabId === `assets`) {
      let t = [...e, ...(n?.assets || [])],
        r = u1(Re, d1(ze.assetId, t));
      if (r) {
        (Be(`assets`), Ve(r), m(!0));
        return;
      }
      let i = t.find((e) => e.id === ze.assetId || e.asset_name === ze.assetId);
      (i || e.length > 0) &&
        (Be(`assets`),
        console.warn(
          `[deep-link] Asset ${ze.assetId} is not reviewable in the Model Editor`,
        ),
        Hr.warning(
          `${i?.asset_name ?? ze.assetId} is not reviewable here yet`,
          {
            description: i?.asset_type
              ? `The Model Editor opens 3D assets only; this one is ${i.asset_type}.`
              : `The Model Editor opens 3D assets only.`,
          },
        ));
      return;
    }
    if (p) return;
    let t = Re.find((e) => e.model_3d_path) || Re[0];
    t && (Ve(t), m(!0));
  }, [Re, o, ze, Be, e, n?.assets, p]);
  let Ve = (0, X.useCallback)((e) => {
    (c(e), u(!0), f(!1), v(null), z(null), F(null));
    let t = Le.current.get(e.asset_name || ``) || [];
    L(t);
  }, []);
  (0, X.useEffect)(() => {
    if (s) {
      let t = e.find((e) => e.asset_name === s.asset_name);
      (ye(t?.concept_art_prompt || ``),
        xe(`z_image_turbo`),
        Ce(``),
        De(!1),
        ke(``));
    }
  }, [s?.asset_name]);
  let He = (0, X.useCallback)(async () => {
      if (!s || !_e) return;
      let t = e.find((e) => e.asset_name === s.asset_name)?.id || s.asset_name;
      Te(!0);
      try {
        let e = await Fn(_e, t, `concept_art`, {
          regenerate: !0,
          ...(be ? { model: be } : {}),
          ...(!Ie && ve ? { prompt_override: ve } : {}),
          ...(Ie && Se ? { edit_instructions: Se } : {}),
        });
        e.success
          ? Hr.success(`Concept art generation started`)
          : Hr.error(e.error || `Failed to generate concept art`);
      } catch (e) {
        (console.error(`Concept art generation failed:`, e),
          Hr.error(`Failed to generate concept art`));
      } finally {
        Te(!1);
      }
    }, [_e, s, e, be, ve, Se, Ie]),
    Ue = (0, X.useCallback)(async () => {
      if (!s || !_e || !Oe.trim()) return;
      let t = e.find((e) => e.asset_name === s.asset_name)?.id || s.asset_name;
      je(!0);
      try {
        let e = await jr.refinePrompt(
          _e,
          t,
          ve || s.description || ``,
          Oe.trim(),
        );
        e.success && e.refined_prompt
          ? (ye(e.refined_prompt), Hr.success(`Prompt refined`))
          : Hr.error(e.error || `Failed to refine prompt`);
      } catch (e) {
        (console.error(`Prompt refinement failed:`, e),
          Hr.error(`Failed to refine prompt`));
      } finally {
        (je(!1), De(!1), ke(``));
      }
    }, [_e, s, e, ve, Oe]),
    We = (0, X.useCallback)(
      async (t) => {
        let n = t.target.files?.[0];
        if (!n || !s || !_e) return;
        let r =
          e.find((e) => e.asset_name === s.asset_name)?.id || s.asset_name;
        Fe(!0);
        try {
          let e = await jr.uploadConceptArt(_e, r, n);
          e.success
            ? Hr.success(`Concept art uploaded`)
            : Hr.error(e.error || `Upload failed`);
        } catch (e) {
          (console.error(`Concept art upload failed:`, e),
            Hr.error(`Failed to upload concept art`));
        } finally {
          (Fe(!1), Ne.current && (Ne.current.value = ``));
        }
      },
      [_e, s, e],
    ),
    Ge = s?.model_3d_path
      ? `${jr.getAssetUrl(t, s.model_3d_path, !1)}${y > 0 ? `?_cb=${y}` : ``}`
      : null,
    Ke = s?.concept_art_path ? jr.getAssetUrl(t, s.concept_art_path, !1) : null,
    qe = s?.collision_mesh_path
      ? `${jr.getAssetUrl(t, s.collision_mesh_path, !1)}${y > 0 ? `?_cb=${y}` : ``}`
      : void 0,
    Je = s?.segmented_model_path
      ? `${jr.getAssetUrl(t, s.segmented_model_path, !1)}${y > 0 ? `?_cb=${y}` : ``}`
      : void 0,
    Ye = ee && !!Je,
    Xe = (0, X.useMemo)(() => {
      if (P == null || !s?.lod_levels) return;
      let e = s.lod_levels.find((e) => e.level === P);
      if (e?.file) return jr.getAssetUrl(t, e.file);
    }, [P, s?.lod_levels, t]);
  (0, X.useEffect)(() => {
    if (!s) return;
    let e = Re.find((e) => e.asset_name === s.asset_name);
    e &&
      (e.model_3d_path !== s.model_3d_path ||
        e.concept_art_path !== s.concept_art_path ||
        e.collision_mesh_path !== s.collision_mesh_path ||
        e.lod_levels !== s.lod_levels ||
        e.segmented_model_path !== s.segmented_model_path) &&
      (c(e), e.model_3d_path !== s.model_3d_path && (u(!0), f(!1)));
  }, [Re]);
  let Ze = (0, X.useCallback)(() => {
      (u(!0), v(null), b((e) => e + 1));
    }, []),
    Qe = (0, X.useCallback)(async () => {
      if (!s || !_e) return;
      let e = s.id || s.asset_name;
      A(!0);
      try {
        let t = await Fn(_e, e, `collision`, { regenerate: !0 });
        t.success
          ? Hr.success(`Collision mesh generation started`)
          : Hr.error(t.error || `Failed to generate collision mesh`);
      } catch (e) {
        (console.error(`Failed to generate collision mesh:`, e),
          Hr.error(`Failed to generate collision mesh`));
      } finally {
        A(!1);
      }
    }, [s, _e]),
    $e = (0, X.useCallback)(
      async (e) => {
        if (!s || !_e) return;
        let t = s.id || s.asset_name;
        N(!0);
        try {
          let n = await Fn(_e, t, `lod`, {
            regenerate: !0,
            ...(e ? { options: e } : {}),
          });
          n.success
            ? Hr.success(`LOD meshes generated`)
            : Hr.error(n.error || `Failed to generate LOD meshes`);
        } catch (e) {
          (console.error(`Failed to generate LOD meshes:`, e),
            Hr.error(`Failed to generate LOD meshes`));
        } finally {
          N(!1);
        }
      },
      [s, _e],
    );
  (0, X.useEffect)(() => {
    (W(!1), ne(null), te([]), ae({}), se(new Set()), ue(!1), he(!1));
  }, [s?.asset_name]);
  let et = (0, X.useCallback)(async () => {
      if (!s || !_e) return;
      let e = s.id || s.asset_name;
      H(!0);
      try {
        let t = await Fn(_e, e, `segment`, { regenerate: !0 });
        t.success
          ? Hr.success(`Mesh segmentation started`)
          : Hr.error(t.error || `Failed to segment mesh`);
      } catch (e) {
        (console.error(`Failed to segment mesh:`, e),
          Hr.error(`Failed to segment mesh`));
      } finally {
        H(!1);
      }
    }, [s, _e]),
    tt = (0, X.useCallback)(() => {
      W((e) => {
        let t = !e;
        return (t ? (u(!0), he(!1), ue(!1), ne(null)) : ne(null), t);
      });
    }, []),
    nt = (0, X.useCallback)((e) => {
      (te(e.map((e) => e.name)),
        ae(Object.fromEntries(e.map((e) => [e.name, e.transform]))));
    }, []),
    rt = (0, X.useCallback)((e) => {
      ne(e);
    }, []),
    it = (0, X.useCallback)((e, t) => {
      (ae((n) => ({ ...n, [e]: t })), ue(!0));
    }, []),
    at = (0, X.useCallback)(
      (e, t, n) => {
        K && ge.current?.setPartTransform(K, e, t, n);
      },
      [K],
    ),
    ot = (0, X.useCallback)((e) => {
      se((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    }, []),
    st = (0, X.useCallback)(async () => {
      if (!s || !_e || !ge.current) return;
      let e = s.id || s.asset_name;
      fe(!0);
      try {
        let t = await ge.current.exportSegmentedGLB();
        if (!t) {
          Hr.error(`Failed to export arranged model`);
          return;
        }
        let n = new File([t], `${s.asset_name || `model`}_arranged.glb`, {
            type: `model/gltf-binary`,
          }),
          r = await jr.saveSegmentedModel(_e, e, n);
        r.success
          ? (Hr.success(`Arrangement saved`),
            ue(!1),
            ne(null),
            W(!1),
            u(!0),
            b((e) => e + 1))
          : Hr.error(r.error || `Failed to save arrangement`);
      } catch (e) {
        (console.error(`Failed to save arrangement:`, e),
          Hr.error(`Failed to save arrangement`));
      } finally {
        fe(!1);
      }
    }, [s, _e]),
    ct = (0, X.useCallback)((e) => {
      (L((t) => [...t, e]), z(e.id));
    }, []),
    lt = (0, X.useCallback)((e, t) => {
      L((n) => n.map((n) => (n.id === e ? { ...n, ...t } : n)));
    }, []),
    ut = (0, X.useCallback)(
      (e) => {
        (L((t) => t.filter((t) => t.id !== e)), R === e && z(null));
      },
      [R],
    );
  (Re.filter((e) => e.concept_art_path).length,
    Re.filter((e) => e.model_3d_path).length);
  let { portalTarget: dt } = ie(),
    ft = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    ft.current?.scrollIntoView({ block: `nearest` });
  }, [s?.asset_name]);
  let pt = (0, Z.jsxs)(`div`, {
      className: `flex-1 overflow-y-auto p-2 space-y-1`,
      children: [
        Re.map((e) => {
          let n = !!e.model_3d_path,
            r = !!e.concept_art_path,
            i = !!e.collision_mesh_path,
            a = !!(e.lod_levels && e.lod_levels.length > 0),
            o = s?.asset_name === e.asset_name,
            c = r ? jr.getAssetUrl(t, e.concept_art_path, !1) : null;
          return (0, Z.jsxs)(
            `button`,
            {
              ref: o ? ft : void 0,
              className: `w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left transition-colors ${o ? `bg-primary/15 border border-primary/30` : `hover:bg-secondary border border-transparent`}`,
              onClick: () => Ve(e),
              children: [
                (0, Z.jsx)(`div`, {
                  className: `w-9 h-9 rounded-md overflow-hidden flex-shrink-0 bg-secondary`,
                  children: c
                    ? (0, Z.jsx)(`img`, {
                        src: c,
                        alt: e.asset_name,
                        className: `w-full h-full object-cover`,
                        loading: `lazy`,
                      })
                    : (0, Z.jsx)(`div`, {
                        className: `w-full h-full flex items-center justify-center`,
                        children: (0, Z.jsx)(S, {
                          className: `w-4 h-4 text-muted-foreground`,
                        }),
                      }),
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-xs text-foreground truncate flex-1`,
                  children: e.asset_name?.replace(/_/g, ` `),
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1 shrink-0`,
                  children: [
                    (0, Z.jsx)(pn, {
                      className: `h-3 w-3 ${r ? `text-primary` : `text-muted-foreground/25`}`,
                    }),
                    (0, Z.jsx)(S, {
                      className: `h-3 w-3 ${n ? `text-primary` : `text-muted-foreground/25`}`,
                    }),
                    (0, Z.jsx)(pe, {
                      className: `h-3 w-3 ${i ? `text-primary` : `text-muted-foreground/25`}`,
                    }),
                    (0, Z.jsx)(B, {
                      className: `h-3 w-3 ${a ? `text-primary` : `text-muted-foreground/25`}`,
                    }),
                  ],
                }),
              ],
            },
            e.id || e.asset_name,
          );
        }),
        Re.length === 0 &&
          (0, Z.jsxs)(`div`, {
            className: `py-8 text-center`,
            children: [
              (0, Z.jsx)(U, {
                className: `h-6 w-6 text-muted-foreground mx-auto mb-2`,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: `No assets planned.`,
              }),
            ],
          }),
      ],
    }),
    mt = (0, Z.jsxs)(Xee, {
      defaultValue: `properties`,
      className: `flex flex-col h-full`,
      children: [
        (0, Z.jsxs)(Yee, {
          className: `h-8 w-full rounded-none border-b border-border bg-card p-0 shrink-0`,
          children: [
            (0, Z.jsx)(ro, {
              value: `properties`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `Properties`,
            }),
            (0, Z.jsx)(ro, {
              value: `concept`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `Concept Art`,
            }),
            (0, Z.jsx)(ro, {
              value: `collisions`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `Mesh`,
            }),
            (0, Z.jsx)(ro, {
              value: `lod`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `LOD`,
            }),
          ],
        }),
        (0, Z.jsx)(io, {
          value: `properties`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsx)(Y$, {
            selectedAsset: s,
            sessionDir: t,
            modelStats: _,
            isLoading: l,
            showWireframe: h === `wireframe` || h === `both`,
            onToggleWireframe: () =>
              g((e) => (e === `textured` ? `wireframe` : `textured`)),
            onOrientationSaved: Ze,
            conceptArtUrl: Ke,
            onConceptArtClick: () => w(!0),
          }),
        }),
        (0, Z.jsx)(io, {
          value: `concept`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsxs)(`div`, {
            className: `p-3 space-y-3`,
            children: [
              Ke
                ? (0, Z.jsx)(`div`, {
                    className: `aspect-video rounded-lg border border-border overflow-hidden bg-muted cursor-pointer`,
                    onClick: () => w(!0),
                    children: (0, Z.jsx)(`img`, {
                      src: Ke,
                      alt: s?.asset_name,
                      className: `w-full h-full object-contain`,
                    }),
                  })
                : (0, Z.jsxs)(`div`, {
                    className: `aspect-video rounded-lg border border-dashed border-border bg-muted/50 flex flex-col items-center justify-center text-muted-foreground`,
                    children: [
                      (0, Z.jsx)(pn, { className: `w-6 h-6 mb-1` }),
                      (0, Z.jsx)(`span`, {
                        className: `text-[10px]`,
                        children: `No concept art yet`,
                      }),
                    ],
                  }),
              (0, Z.jsxs)(`div`, {
                className: `space-y-1.5`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, Z.jsx)(`label`, {
                        className: `text-[10px] font-medium text-muted-foreground uppercase tracking-wider`,
                        children: `Prompt`,
                      }),
                      (0, Z.jsxs)(`button`, {
                        onClick: () => {
                          (De(!Ee), setTimeout(() => Me.current?.focus(), 50));
                        },
                        className: `flex items-center gap-1 text-[10px] text-primary hover:text-primary/80 transition-colors`,
                        children: [
                          (0, Z.jsx)(_n, { className: `h-3 w-3` }),
                          `AI Assist`,
                        ],
                      }),
                    ],
                  }),
                  Ee &&
                    (0, Z.jsxs)(`div`, {
                      className: `flex gap-1.5 items-center bg-primary/10 border border-primary/30 rounded-lg p-1.5`,
                      children: [
                        (0, Z.jsx)(`input`, {
                          ref: Me,
                          type: `text`,
                          value: Oe,
                          onChange: (e) => ke(e.target.value),
                          placeholder: `How to improve?`,
                          className: `flex-1 bg-transparent text-xs text-foreground placeholder-muted-foreground focus:outline-none`,
                          onKeyDown: (e) => {
                            (e.key === `Enter` && !e.shiftKey && Ue(),
                              e.key === `Escape` && (De(!1), ke(``)));
                          },
                          disabled: Ae,
                        }),
                        (0, Z.jsx)(x, {
                          size: `sm`,
                          onClick: Ue,
                          disabled: !Oe.trim() || Ae,
                          className: `h-6 px-1.5 text-xs`,
                          children: Ae
                            ? (0, Z.jsx)(J, {
                                className: `h-3 w-3 animate-spin`,
                              })
                            : (0, Z.jsx)(Yr, { className: `h-3 w-3` }),
                        }),
                        (0, Z.jsx)(x, {
                          size: `sm`,
                          variant: `ghost`,
                          onClick: () => {
                            (De(!1), ke(``));
                          },
                          className: `h-6 px-1 text-muted-foreground`,
                          children: (0, Z.jsx)(li, { className: `h-3 w-3` }),
                        }),
                      ],
                    }),
                  (0, Z.jsx)(`textarea`, {
                    value: ve,
                    onChange: (e) => ye(e.target.value),
                    placeholder: `Image generation prompt...`,
                    className: `w-full h-24 bg-muted border border-border rounded-lg px-2.5 py-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 resize-none`,
                    disabled: Ie,
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `space-y-1.5`,
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `text-[10px] font-medium text-muted-foreground uppercase tracking-wider`,
                    children: `Model`,
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, Z.jsxs)(`select`, {
                        value: be,
                        onChange: (e) => xe(e.target.value),
                        className: `w-full h-8 bg-muted border border-border rounded-lg px-2.5 pr-7 text-xs text-foreground focus:outline-none focus:border-primary/50 appearance-none cursor-pointer`,
                        children: [
                          (0, Z.jsxs)(`optgroup`, {
                            label: `Fast`,
                            children: [
                              (0, Z.jsx)(`option`, {
                                value: `z_image_turbo`,
                                children: `Z-Image Turbo (Default)`,
                              }),
                              (0, Z.jsx)(`option`, {
                                value: `p_image`,
                                children: `P-Image`,
                              }),
                              (0, Z.jsx)(`option`, {
                                value: `ideogram_turbo`,
                                children: `Ideogram V3 Turbo`,
                              }),
                            ],
                          }),
                          (0, Z.jsxs)(`optgroup`, {
                            label: `Quality`,
                            children: [
                              (0, Z.jsx)(`option`, {
                                value: `hidream`,
                                children: `HiDream L1`,
                              }),
                              (0, Z.jsx)(`option`, {
                                value: `seedream`,
                                children: `Seedream 4.5`,
                              }),
                              (0, Z.jsx)(`option`, {
                                value: `flux_pro`,
                                children: `Flux 2 Pro`,
                              }),
                              (0, Z.jsx)(`option`, {
                                value: `flux_max`,
                                children: `Flux 2 Max`,
                              }),
                              (0, Z.jsx)(`option`, {
                                value: `recraft`,
                                children: `Recraft V4`,
                              }),
                            ],
                          }),
                          (0, Z.jsxs)(`optgroup`, {
                            label: `Edit (modify current image)`,
                            children: [
                              (0, Z.jsxs)(`option`, {
                                value: `p_image_edit`,
                                disabled: !Ke,
                                children: [
                                  `P-Image Edit`,
                                  Ke ? `` : ` — needs image`,
                                ],
                              }),
                              (0, Z.jsxs)(`option`, {
                                value: `flux_pro_edit`,
                                disabled: !Ke,
                                children: [
                                  `Flux 2 Pro Edit`,
                                  Ke ? `` : ` — needs image`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Z.jsx)(ti, {
                        className: `absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none`,
                      }),
                    ],
                  }),
                ],
              }),
              Ie &&
                (0, Z.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      className: `text-[10px] font-medium text-muted-foreground uppercase tracking-wider`,
                      children: `Edit Instructions`,
                    }),
                    (0, Z.jsx)(`textarea`, {
                      value: Se,
                      onChange: (e) => Ce(e.target.value),
                      placeholder: `How to modify the current image...`,
                      className: `w-full h-20 bg-muted border border-border rounded-lg px-2.5 py-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 resize-none`,
                    }),
                  ],
                }),
              (0, Z.jsx)(x, {
                onClick: He,
                disabled: we || (Ie && !Se.trim()),
                className: `w-full`,
                size: `sm`,
                children: we
                  ? (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(J, {
                          className: `h-3.5 w-3.5 mr-1.5 animate-spin`,
                        }),
                        ` Generating...`,
                      ],
                    })
                  : Ie
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(xn, { className: `h-3.5 w-3.5 mr-1.5` }),
                          ` Edit Image`,
                        ],
                      })
                    : Ke
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(xn, { className: `h-3.5 w-3.5 mr-1.5` }),
                            ` Regenerate`,
                          ],
                        })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(Yr, { className: `h-3.5 w-3.5 mr-1.5` }),
                            ` Generate Concept Art`,
                          ],
                        }),
              }),
              (0, Z.jsxs)(`div`, {
                className: `pt-2 border-t border-border`,
                children: [
                  (0, Z.jsx)(`input`, {
                    ref: Ne,
                    type: `file`,
                    accept: `image/*`,
                    onChange: We,
                    className: `hidden`,
                  }),
                  (0, Z.jsx)(x, {
                    variant: `outline`,
                    size: `sm`,
                    className: `w-full`,
                    onClick: () => Ne.current?.click(),
                    disabled: Pe,
                    children: Pe
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(J, {
                              className: `h-3.5 w-3.5 mr-1.5 animate-spin`,
                            }),
                            ` Uploading...`,
                          ],
                        })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(En, { className: `h-3.5 w-3.5 mr-1.5` }),
                            ` Upload Image`,
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Z.jsx)(io, {
          value: `collisions`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [
              (0, Z.jsx)(Q$, {
                showComplexCollision: T,
                onToggleComplexCollision: () => E((e) => !e),
                hasComplexCollision: !!qe,
                onGenerateComplex: Qe,
                isGeneratingComplex: k,
                showSimpleCollision: D,
                onToggleSimpleCollision: () => O((e) => !e),
                primitives: I,
                selectedPrimitiveId: R,
                onSelectPrimitive: z,
                onAddPrimitive: ct,
                onUpdatePrimitive: lt,
                onDeletePrimitive: ut,
                hasModel: !!Ge,
              }),
              (0, Z.jsx)(e1, {
                hasModel: !!Ge,
                hasSegments: !!Je,
                isGenerating: V,
                onGenerate: et,
                editActive: ee,
                onToggleEdit: tt,
                parts: G,
                selectedPart: K,
                onSelectPart: rt,
                hiddenParts: oe,
                onToggleVisibility: ot,
                gizmoMode: q,
                onGizmoMode: ce,
                selectedTransform: K ? (re[K] ?? null) : null,
                onAxisChange: at,
                isDirty: le,
                isSaving: de,
                onSave: st,
              }),
            ],
          }),
        }),
        (0, Z.jsx)(io, {
          value: `lod`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsx)(c1, {
            lodLevels: s?.lod_levels,
            sourceVertexCount: _?.vertexCount,
            onGenerateLod: $e,
            isGeneratingLod: j,
            hasModel: !!Ge,
            previewLevel: P,
            onPreviewLevel: F,
          }),
        }),
      ],
    });
  return (0, Z.jsxs)(`div`, {
    className: `flex h-full`,
    children: [
      o !== !1 &&
        dt &&
        (0, js.createPortal)(
          (0, Z.jsx)(`div`, {
            className: `flex flex-col h-full`,
            children: pt,
          }),
          dt,
        ),
      o !== !1 &&
        !dt &&
        (0, Z.jsx)(`div`, {
          className: `w-64 border-r border-border flex flex-col`,
          children: pt,
        }),
      (0, Z.jsxs)(`div`, {
        className: `flex-1 flex flex-col min-w-0`,
        children: [
          (0, Z.jsx)(J$, { selectedAsset: s, sessionId: _e, assets: e }),
          (0, Z.jsxs)(`div`, {
            className: `flex-1 relative bg-card`,
            children: [
              l &&
                !d &&
                Ge &&
                (0, Z.jsx)(`div`, {
                  className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
                  children: (0, Z.jsx)(J, {
                    className: `h-8 w-8 text-primary animate-spin`,
                  }),
                }),
              Ye
                ? me
                  ? (0, Z.jsxs)(`div`, {
                      className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                      children: [
                        (0, Z.jsx)(U, { className: `h-8 w-8 mb-2` }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm text-center px-4`,
                          children: `Failed to load the segmented model. Try re-segmenting.`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(
                      W$,
                      {
                        ref: ge,
                        modelUrl: Je,
                        gizmoMode: q,
                        selectedPartName: K,
                        hiddenParts: Array.from(oe),
                        onPartsLoaded: nt,
                        onSelectPart: rt,
                        onPartTransform: it,
                        onLoad: () => u(!1),
                        onError: () => {
                          (u(!1), he(!0));
                        },
                        isActive: o,
                      },
                      Je,
                    )
                : d || !Ge
                  ? (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                      children:
                        !Ge && Ke
                          ? (0, Z.jsx)(`div`, {
                              className: `w-full h-full p-8 flex items-center justify-center`,
                              children: (0, Z.jsx)(`img`, {
                                src: Ke,
                                alt: s?.asset_name,
                                className: `max-w-full max-h-full object-contain rounded-lg border border-border/30`,
                              }),
                            })
                          : (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(U, { className: `h-8 w-8 mb-2` }),
                                (0, Z.jsx)(`p`, {
                                  className: `text-sm text-center px-4`,
                                  children: d
                                    ? `Failed to load 3D model`
                                    : s
                                      ? `No 3D model or concept art yet`
                                      : `Select an asset to preview`,
                                }),
                              ],
                            }),
                    })
                  : (0, Z.jsx)(
                      wl,
                      {
                        mainModelUrl: Ge,
                        lodOverlayUrl: Xe,
                        lodPreviewMode: h,
                        collisionMeshUrl: T ? qe : void 0,
                        showSolid: !0,
                        showWireframe: T,
                        mainModelWireframe: h,
                        onLoad: () => u(!1),
                        onError: () => {
                          (u(!1), f(!0));
                        },
                        onModelStats: v,
                        simpleCollisionPrimitives: D ? I : void 0,
                        selectedPrimitiveId: R,
                        onPrimitiveSelect: z,
                        isActive: o,
                      },
                      `${Ge}-${y}`,
                    ),
              s &&
                (0, Z.jsx)(`div`, {
                  className: `absolute top-2 left-2 bg-card/80 px-2 py-1 rounded text-xs text-white z-10`,
                  children: s.asset_name?.replace(/_/g, ` `),
                }),
              P != null &&
                (0, Z.jsxs)(`button`, {
                  onClick: () => F(null),
                  className: `absolute top-2 right-2 bg-cyan-500/80 px-2 py-1 rounded text-xs text-white z-10 hover:bg-cyan-500 transition-colors`,
                  children: [`LOD`, P, ` Preview — click to dismiss`],
                }),
              Ge &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute bottom-2 left-2 flex gap-1 z-10`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      onClick: () => g(`textured`),
                      className: `w-7 h-7 rounded flex items-center justify-center transition-colors ${h === `textured` ? `bg-cyan-500 text-white` : `bg-card/80 text-gray-400 hover:text-white`}`,
                      title: `Textured`,
                      children: (0, Z.jsx)(S, { className: `h-3.5 w-3.5` }),
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: () => g(`wireframe`),
                      className: `w-7 h-7 rounded flex items-center justify-center transition-colors ${h === `wireframe` ? `bg-cyan-500 text-white` : `bg-card/80 text-gray-400 hover:text-white`}`,
                      title: `Wireframe`,
                      children: (0, Z.jsx)(M, { className: `h-3.5 w-3.5` }),
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: () => g(`both`),
                      className: `w-7 h-7 rounded flex items-center justify-center transition-colors ${h === `both` ? `bg-cyan-500 text-white` : `bg-card/80 text-gray-400 hover:text-white`}`,
                      title: `Textured + Wireframe`,
                      children: (0, Z.jsx)(Ho, { className: `h-3.5 w-3.5` }),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `w-72 border-l border-border flex flex-col bg-card`,
        children: mt,
      }),
      Ke &&
        (0, Z.jsx)(l1, {
          isOpen: C,
          onClose: () => w(!1),
          imageUrl: Ke,
          assetName: s?.asset_name,
        }),
    ],
  });
}
