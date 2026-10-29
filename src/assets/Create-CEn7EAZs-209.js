// Create-CEn7EAZs 209 — classname
// Lines 70627-71648 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function y1({
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
    [x, C] = (0, X.useState)(!1),
    [w, T] = (0, X.useState)(!1),
    [E, D] = (0, X.useState)(!0),
    [O, k] = (0, X.useState)(!1),
    [A, j] = (0, X.useState)(!1),
    [N, P] = (0, X.useState)(null),
    [F, L] = (0, X.useState)([]),
    [R, z] = (0, X.useState)(null),
    [V, H] = (0, X.useState)(!1),
    [ee, U] = (0, X.useState)(!1),
    [W, ne] = (0, X.useState)([]),
    [G, re] = (0, X.useState)(null),
    [ie, oe] = (0, X.useState)({}),
    [se, ce] = (0, X.useState)(new Set()),
    [K, le] = (0, X.useState)(`translate`),
    [ue, de] = (0, X.useState)(!1),
    [fe, pe] = (0, X.useState)(!1),
    [he, ge] = (0, X.useState)(!1),
    _e = (0, X.useRef)(null),
    ve = a || t?.split(`/`).pop() || t || ``,
    [ye, be] = (0, X.useState)(``),
    [xe, Se] = (0, X.useState)(`z_image_turbo`),
    [Ce, we] = (0, X.useState)(``),
    [Te, Ee] = (0, X.useState)(!1),
    [De, Oe] = (0, X.useState)(!1),
    [ke, Ae] = (0, X.useState)(``),
    [je, Me] = (0, X.useState)(!1),
    Ne = (0, X.useRef)(null),
    Pe = (0, X.useRef)(null),
    [Fe, Ie] = (0, X.useState)(!1),
    Le = xe === `p_image_edit` || xe === `flux_pro_edit`,
    Re = (0, X.useRef)(new Map());
  (0, X.useEffect)(() => {
    s?.asset_name && Re.current.set(s.asset_name, F);
  }, [F, s?.asset_name]);
  let ze = (0, X.useMemo)(() => {
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
    { requestedAsset: Be, consumeRequestedAsset: Ve } = ae();
  (0, X.useEffect)(() => {
    if (ze.length === 0) return;
    if (o && Be?.tabId === `assets`) {
      let t = [...e, ...(n?.assets || [])],
        r = $le(ze, eue(Be.assetId, t));
      if (r) {
        (Ve(`assets`), He(r), m(!0));
        return;
      }
      let i = t.find((e) => e.id === Be.assetId || e.asset_name === Be.assetId);
      (i || e.length > 0) &&
        (Ve(`assets`),
        console.warn(
          `[deep-link] Asset ${Be.assetId} is not reviewable in the Model Editor`,
        ),
        q.warning(`${i?.asset_name ?? Be.assetId} is not reviewable here yet`, {
          description: i?.asset_type
            ? `The Model Editor opens 3D assets only; this one is ${i.asset_type}.`
            : `The Model Editor opens 3D assets only.`,
        }));
      return;
    }
    if (p) return;
    let t = ze.find((e) => e.model_3d_path) || ze[0];
    t && (He(t), m(!0));
  }, [ze, o, Be, Ve, e, n?.assets, p]);
  let He = (0, X.useCallback)((e) => {
    (c(e), u(!0), f(!1), v(null), z(null), P(null));
    let t = Re.current.get(e.asset_name || ``) || [];
    L(t);
  }, []);
  (0, X.useEffect)(() => {
    if (s) {
      let t = e.find((e) => e.asset_name === s.asset_name);
      (be(t?.concept_art_prompt || ``),
        Se(`z_image_turbo`),
        we(``),
        Oe(!1),
        Ae(``));
    }
  }, [s?.asset_name]);
  let Ue = (0, X.useCallback)(async () => {
      if (!s || !ve) return;
      let t = e.find((e) => e.asset_name === s.asset_name)?.id || s.asset_name;
      Ee(!0);
      try {
        let e = await Sn(ve, t, `concept_art`, {
          regenerate: !0,
          ...(xe ? { model: xe } : {}),
          ...(!Le && ye ? { prompt_override: ye } : {}),
          ...(Le && Ce ? { edit_instructions: Ce } : {}),
        });
        e.success
          ? q.success(`Concept art generation started`)
          : q.error(e.error || `Failed to generate concept art`);
      } catch (e) {
        (console.error(`Concept art generation failed:`, e),
          q.error(`Failed to generate concept art`));
      } finally {
        Ee(!1);
      }
    }, [ve, s, e, xe, ye, Ce, Le]),
    We = (0, X.useCallback)(async () => {
      if (!s || !ve || !ke.trim()) return;
      let t = e.find((e) => e.asset_name === s.asset_name)?.id || s.asset_name;
      Me(!0);
      try {
        let e = await vr.refinePrompt(
          ve,
          t,
          ye || s.description || ``,
          ke.trim(),
        );
        e.success && e.refined_prompt
          ? (be(e.refined_prompt), q.success(`Prompt refined`))
          : q.error(e.error || `Failed to refine prompt`);
      } catch (e) {
        (console.error(`Prompt refinement failed:`, e),
          q.error(`Failed to refine prompt`));
      } finally {
        (Me(!1), Oe(!1), Ae(``));
      }
    }, [ve, s, e, ye, ke]),
    Ge = (0, X.useCallback)(
      async (t) => {
        let n = t.target.files?.[0];
        if (!n || !s || !ve) return;
        let r =
          e.find((e) => e.asset_name === s.asset_name)?.id || s.asset_name;
        Ie(!0);
        try {
          let e = await vr.uploadConceptArt(ve, r, n);
          e.success
            ? q.success(`Concept art uploaded`)
            : q.error(e.error || `Upload failed`);
        } catch (e) {
          (console.error(`Concept art upload failed:`, e),
            q.error(`Failed to upload concept art`));
        } finally {
          (Ie(!1), Pe.current && (Pe.current.value = ``));
        }
      },
      [ve, s, e],
    ),
    Ke = s?.model_3d_path
      ? `${vr.getAssetUrl(t, s.model_3d_path, !1)}${y > 0 ? `?_cb=${y}` : ``}`
      : null,
    qe = s?.concept_art_path ? vr.getAssetUrl(t, s.concept_art_path, !1) : null,
    Je = s?.collision_mesh_path
      ? `${vr.getAssetUrl(t, s.collision_mesh_path, !1)}${y > 0 ? `?_cb=${y}` : ``}`
      : void 0,
    Ye = s?.segmented_model_path
      ? `${vr.getAssetUrl(t, s.segmented_model_path, !1)}${y > 0 ? `?_cb=${y}` : ``}`
      : void 0,
    Xe = ee && !!Ye,
    Ze = (0, X.useMemo)(() => {
      if (N == null || !s?.lod_levels) return;
      let e = s.lod_levels.find((e) => e.level === N);
      if (e?.file) return vr.getAssetUrl(t, e.file);
    }, [N, s?.lod_levels, t]);
  (0, X.useEffect)(() => {
    if (!s) return;
    let e = ze.find((e) => e.asset_name === s.asset_name);
    e &&
      (e.model_3d_path !== s.model_3d_path ||
        e.concept_art_path !== s.concept_art_path ||
        e.collision_mesh_path !== s.collision_mesh_path ||
        e.lod_levels !== s.lod_levels ||
        e.segmented_model_path !== s.segmented_model_path) &&
      (c(e), e.model_3d_path !== s.model_3d_path && (u(!0), f(!1)));
  }, [ze]);
  let Qe = (0, X.useCallback)(() => {
      (u(!0), v(null), b((e) => e + 1));
    }, []),
    $e = (0, X.useCallback)(async () => {
      if (!s || !ve) return;
      let e = s.id || s.asset_name;
      k(!0);
      try {
        let t = await Sn(ve, e, `collision`, { regenerate: !0 });
        t.success
          ? q.success(`Collision mesh generation started`)
          : q.error(t.error || `Failed to generate collision mesh`);
      } catch (e) {
        (console.error(`Failed to generate collision mesh:`, e),
          q.error(`Failed to generate collision mesh`));
      } finally {
        k(!1);
      }
    }, [s, ve]),
    et = (0, X.useCallback)(
      async (e) => {
        if (!s || !ve) return;
        let t = s.id || s.asset_name;
        j(!0);
        try {
          let n = await Sn(ve, t, `lod`, {
            regenerate: !0,
            ...(e ? { options: e } : {}),
          });
          n.success
            ? q.success(`LOD meshes generated`)
            : q.error(n.error || `Failed to generate LOD meshes`);
        } catch (e) {
          (console.error(`Failed to generate LOD meshes:`, e),
            q.error(`Failed to generate LOD meshes`));
        } finally {
          j(!1);
        }
      },
      [s, ve],
    );
  (0, X.useEffect)(() => {
    (U(!1), re(null), ne([]), oe({}), ce(new Set()), de(!1), ge(!1));
  }, [s?.asset_name]);
  let tt = (0, X.useCallback)(async () => {
      if (!s || !ve) return;
      let e = s.id || s.asset_name;
      H(!0);
      try {
        let t = await Sn(ve, e, `segment`, { regenerate: !0 });
        t.success
          ? q.success(`Mesh segmentation started`)
          : q.error(t.error || `Failed to segment mesh`);
      } catch (e) {
        (console.error(`Failed to segment mesh:`, e),
          q.error(`Failed to segment mesh`));
      } finally {
        H(!1);
      }
    }, [s, ve]),
    nt = (0, X.useCallback)(() => {
      U((e) => {
        let t = !e;
        return (t ? (u(!0), ge(!1), de(!1), re(null)) : re(null), t);
      });
    }, []),
    rt = (0, X.useCallback)((e) => {
      (ne(e.map((e) => e.name)),
        oe(Object.fromEntries(e.map((e) => [e.name, e.transform]))));
    }, []),
    it = (0, X.useCallback)((e) => {
      re(e);
    }, []),
    at = (0, X.useCallback)((e, t) => {
      (oe((n) => ({ ...n, [e]: t })), de(!0));
    }, []),
    ot = (0, X.useCallback)(
      (e, t, n) => {
        G && _e.current?.setPartTransform(G, e, t, n);
      },
      [G],
    ),
    st = (0, X.useCallback)((e) => {
      ce((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    }, []),
    ct = (0, X.useCallback)(async () => {
      if (!s || !ve || !_e.current) return;
      let e = s.id || s.asset_name;
      pe(!0);
      try {
        let t = await _e.current.exportSegmentedGLB();
        if (!t) {
          q.error(`Failed to export arranged model`);
          return;
        }
        let n = new File([t], `${s.asset_name || `model`}_arranged.glb`, {
            type: `model/gltf-binary`,
          }),
          r = await vr.saveSegmentedModel(ve, e, n);
        r.success
          ? (q.success(`Arrangement saved`),
            de(!1),
            re(null),
            U(!1),
            u(!0),
            b((e) => e + 1))
          : q.error(r.error || `Failed to save arrangement`);
      } catch (e) {
        (console.error(`Failed to save arrangement:`, e),
          q.error(`Failed to save arrangement`));
      } finally {
        pe(!1);
      }
    }, [s, ve]),
    lt = (0, X.useCallback)((e) => {
      (L((t) => [...t, e]), z(e.id));
    }, []),
    ut = (0, X.useCallback)((e, t) => {
      L((n) => n.map((n) => (n.id === e ? { ...n, ...t } : n)));
    }, []),
    dt = (0, X.useCallback)(
      (e) => {
        (L((t) => t.filter((t) => t.id !== e)), R === e && z(null));
      },
      [R],
    );
  (ze.filter((e) => e.concept_art_path).length,
    ze.filter((e) => e.model_3d_path).length);
  let { portalTarget: ft } = ae(),
    pt = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    pt.current?.scrollIntoView({ block: `nearest` });
  }, [s?.asset_name]);
  let mt = (0, Z.jsxs)(`div`, {
      className: `flex-1 overflow-y-auto p-2 space-y-1`,
      children: [
        ze.map((e) => {
          let n = !!e.model_3d_path,
            r = !!e.concept_art_path,
            i = !!e.collision_mesh_path,
            a = !!(e.lod_levels && e.lod_levels.length > 0),
            o = s?.asset_name === e.asset_name,
            c = r ? vr.getAssetUrl(t, e.concept_art_path, !1) : null;
          return (0, Z.jsxs)(
            `button`,
            {
              ref: o ? pt : void 0,
              className: `w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left transition-colors ${o ? `bg-primary/15 border border-primary/30` : `hover:bg-secondary border border-transparent`}`,
              onClick: () => He(e),
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
                        children: (0, Z.jsx)(I, {
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
                    (0, Z.jsx)(en, {
                      className: `h-3 w-3 ${r ? `text-primary` : `text-muted-foreground/25`}`,
                    }),
                    (0, Z.jsx)(I, {
                      className: `h-3 w-3 ${n ? `text-primary` : `text-muted-foreground/25`}`,
                    }),
                    (0, Z.jsx)(me, {
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
        ze.length === 0 &&
          (0, Z.jsxs)(`div`, {
            className: `py-8 text-center`,
            children: [
              (0, Z.jsx)(te, {
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
    ht = (0, Z.jsxs)(vo, {
      defaultValue: `properties`,
      className: `flex flex-col h-full`,
      children: [
        (0, Z.jsxs)(_o, {
          className: `h-8 w-full rounded-none border-b border-border bg-card p-0 shrink-0`,
          children: [
            (0, Z.jsx)(ho, {
              value: `properties`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `Properties`,
            }),
            (0, Z.jsx)(ho, {
              value: `concept`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `Concept Art`,
            }),
            (0, Z.jsx)(ho, {
              value: `collisions`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `Mesh`,
            }),
            (0, Z.jsx)(ho, {
              value: `lod`,
              className: `flex-1 h-full rounded-none text-[10px] uppercase tracking-wider data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-none text-muted-foreground`,
              children: `LOD`,
            }),
          ],
        }),
        (0, Z.jsx)(go, {
          value: `properties`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsx)(d1, {
            selectedAsset: s,
            sessionDir: t,
            modelStats: _,
            isLoading: l,
            showWireframe: h === `wireframe` || h === `both`,
            onToggleWireframe: () =>
              g((e) => (e === `textured` ? `wireframe` : `textured`)),
            onOrientationSaved: Qe,
            conceptArtUrl: qe,
            onConceptArtClick: () => C(!0),
          }),
        }),
        (0, Z.jsx)(go, {
          value: `concept`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsxs)(`div`, {
            className: `p-3 space-y-3`,
            children: [
              qe
                ? (0, Z.jsx)(`div`, {
                    className: `aspect-video rounded-lg border border-border overflow-hidden bg-muted cursor-pointer`,
                    onClick: () => C(!0),
                    children: (0, Z.jsx)(`img`, {
                      src: qe,
                      alt: s?.asset_name,
                      className: `w-full h-full object-contain`,
                    }),
                  })
                : (0, Z.jsxs)(`div`, {
                    className: `aspect-video rounded-lg border border-dashed border-border bg-muted/50 flex flex-col items-center justify-center text-muted-foreground`,
                    children: [
                      (0, Z.jsx)(en, { className: `w-6 h-6 mb-1` }),
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
                          (Oe(!De), setTimeout(() => Ne.current?.focus(), 50));
                        },
                        className: `flex items-center gap-1 text-[10px] text-primary hover:text-primary/80 transition-colors`,
                        children: [
                          (0, Z.jsx)(an, { className: `h-3 w-3` }),
                          `AI Assist`,
                        ],
                      }),
                    ],
                  }),
                  De &&
                    (0, Z.jsxs)(`div`, {
                      className: `flex gap-1.5 items-center bg-primary/10 border border-primary/30 rounded-lg p-1.5`,
                      children: [
                        (0, Z.jsx)(`input`, {
                          ref: Ne,
                          type: `text`,
                          value: ke,
                          onChange: (e) => Ae(e.target.value),
                          placeholder: `How to improve?`,
                          className: `flex-1 bg-transparent text-xs text-foreground placeholder-muted-foreground focus:outline-none`,
                          onKeyDown: (e) => {
                            (e.key === `Enter` && !e.shiftKey && We(),
                              e.key === `Escape` && (Oe(!1), Ae(``)));
                          },
                          disabled: je,
                        }),
                        (0, Z.jsx)(S, {
                          size: `sm`,
                          onClick: We,
                          disabled: !ke.trim() || je,
                          className: `h-6 px-1.5 text-xs`,
                          children: je
                            ? (0, Z.jsx)(J, {
                                className: `h-3 w-3 animate-spin`,
                              })
                            : (0, Z.jsx)(Nr, { className: `h-3 w-3` }),
                        }),
                        (0, Z.jsx)(S, {
                          size: `sm`,
                          variant: `ghost`,
                          onClick: () => {
                            (Oe(!1), Ae(``));
                          },
                          className: `h-6 px-1 text-muted-foreground`,
                          children: (0, Z.jsx)(Jr, { className: `h-3 w-3` }),
                        }),
                      ],
                    }),
                  (0, Z.jsx)(`textarea`, {
                    value: ye,
                    onChange: (e) => be(e.target.value),
                    placeholder: `Image generation prompt...`,
                    className: `w-full h-24 bg-muted border border-border rounded-lg px-2.5 py-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 resize-none`,
                    disabled: Le,
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
                        value: xe,
                        onChange: (e) => Se(e.target.value),
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
                                disabled: !qe,
                                children: [
                                  `P-Image Edit`,
                                  qe ? `` : ` — needs image`,
                                ],
                              }),
                              (0, Z.jsxs)(`option`, {
                                value: `flux_pro_edit`,
                                disabled: !qe,
                                children: [
                                  `Flux 2 Pro Edit`,
                                  qe ? `` : ` — needs image`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Z.jsx)(zr, {
                        className: `absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none`,
                      }),
                    ],
                  }),
                ],
              }),
              Le &&
                (0, Z.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      className: `text-[10px] font-medium text-muted-foreground uppercase tracking-wider`,
                      children: `Edit Instructions`,
                    }),
                    (0, Z.jsx)(`textarea`, {
                      value: Ce,
                      onChange: (e) => we(e.target.value),
                      placeholder: `How to modify the current image...`,
                      className: `w-full h-20 bg-muted border border-border rounded-lg px-2.5 py-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 resize-none`,
                    }),
                  ],
                }),
              (0, Z.jsx)(S, {
                onClick: Ue,
                disabled: Te || (Le && !Ce.trim()),
                className: `w-full`,
                size: `sm`,
                children: Te
                  ? (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(J, {
                          className: `h-3.5 w-3.5 mr-1.5 animate-spin`,
                        }),
                        ` Generating...`,
                      ],
                    })
                  : Le
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(ln, { className: `h-3.5 w-3.5 mr-1.5` }),
                          ` Edit Image`,
                        ],
                      })
                    : qe
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(ln, { className: `h-3.5 w-3.5 mr-1.5` }),
                            ` Regenerate`,
                          ],
                        })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(Nr, { className: `h-3.5 w-3.5 mr-1.5` }),
                            ` Generate Concept Art`,
                          ],
                        }),
              }),
              (0, Z.jsxs)(`div`, {
                className: `pt-2 border-t border-border`,
                children: [
                  (0, Z.jsx)(`input`, {
                    ref: Pe,
                    type: `file`,
                    accept: `image/*`,
                    onChange: Ge,
                    className: `hidden`,
                  }),
                  (0, Z.jsx)(S, {
                    variant: `outline`,
                    size: `sm`,
                    className: `w-full`,
                    onClick: () => Pe.current?.click(),
                    disabled: Fe,
                    children: Fe
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
                            (0, Z.jsx)(mn, { className: `h-3.5 w-3.5 mr-1.5` }),
                            ` Upload Image`,
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Z.jsx)(go, {
          value: `collisions`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [
              (0, Z.jsx)(qle, {
                showComplexCollision: w,
                onToggleComplexCollision: () => T((e) => !e),
                hasComplexCollision: !!Je,
                onGenerateComplex: $e,
                isGeneratingComplex: O,
                showSimpleCollision: E,
                onToggleSimpleCollision: () => D((e) => !e),
                primitives: F,
                selectedPrimitiveId: R,
                onSelectPrimitive: z,
                onAddPrimitive: lt,
                onUpdatePrimitive: ut,
                onDeletePrimitive: dt,
                hasModel: !!Ke,
              }),
              (0, Z.jsx)(Jle, {
                hasModel: !!Ke,
                hasSegments: !!Ye,
                isGenerating: V,
                onGenerate: tt,
                editActive: ee,
                onToggleEdit: nt,
                parts: W,
                selectedPart: G,
                onSelectPart: it,
                hiddenParts: se,
                onToggleVisibility: st,
                gizmoMode: K,
                onGizmoMode: le,
                selectedTransform: G ? (ie[G] ?? null) : null,
                onAxisChange: ot,
                isDirty: ue,
                isSaving: fe,
                onSave: ct,
              }),
            ],
          }),
        }),
        (0, Z.jsx)(go, {
          value: `lod`,
          className: `flex-1 overflow-y-auto mt-0`,
          children: (0, Z.jsx)(Zle, {
            lodLevels: s?.lod_levels,
            sourceVertexCount: _?.vertexCount,
            onGenerateLod: et,
            isGeneratingLod: A,
            hasModel: !!Ke,
            previewLevel: N,
            onPreviewLevel: P,
          }),
        }),
      ],
    });
  return (0, Z.jsxs)(`div`, {
    className: `flex h-full`,
    children: [
      o !== !1 &&
        ft &&
        (0, Qs.createPortal)(
          (0, Z.jsx)(`div`, {
            className: `flex flex-col h-full`,
            children: mt,
          }),
          ft,
        ),
      o !== !1 &&
        !ft &&
        (0, Z.jsx)(`div`, {
          className: `w-64 border-r border-border flex flex-col`,
          children: mt,
        }),
      (0, Z.jsxs)(`div`, {
        className: `flex-1 flex flex-col min-w-0`,
        children: [
          (0, Z.jsx)(u1, { selectedAsset: s, sessionId: ve, assets: e }),
          (0, Z.jsxs)(`div`, {
            className: `flex-1 relative bg-card`,
            children: [
              l &&
                !d &&
                Ke &&
                (0, Z.jsx)(`div`, {
                  className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
                  children: (0, Z.jsx)(J, {
                    className: `h-8 w-8 text-primary animate-spin`,
                  }),
                }),
              Xe
                ? he
                  ? (0, Z.jsxs)(`div`, {
                      className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                      children: [
                        (0, Z.jsx)(te, { className: `h-8 w-8 mb-2` }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm text-center px-4`,
                          children: `Failed to load the segmented model. Try re-segmenting.`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(
                      o1,
                      {
                        ref: _e,
                        modelUrl: Ye,
                        gizmoMode: K,
                        selectedPartName: G,
                        hiddenParts: Array.from(se),
                        onPartsLoaded: rt,
                        onSelectPart: it,
                        onPartTransform: at,
                        onLoad: () => u(!1),
                        onError: () => {
                          (u(!1), ge(!0));
                        },
                        isActive: o,
                      },
                      Ye,
                    )
                : d || !Ke
                  ? (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                      children:
                        !Ke && qe
                          ? (0, Z.jsx)(`div`, {
                              className: `w-full h-full p-8 flex items-center justify-center`,
                              children: (0, Z.jsx)(`img`, {
                                src: qe,
                                alt: s?.asset_name,
                                className: `max-w-full max-h-full object-contain rounded-lg border border-border/30`,
                              }),
                            })
                          : (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(te, { className: `h-8 w-8 mb-2` }),
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
                      Ul,
                      {
                        mainModelUrl: Ke,
                        lodOverlayUrl: Ze,
                        lodPreviewMode: h,
                        collisionMeshUrl: w ? Je : void 0,
                        showSolid: !0,
                        showWireframe: w,
                        mainModelWireframe: h,
                        onLoad: () => u(!1),
                        onError: () => {
                          (u(!1), f(!0));
                        },
                        onModelStats: v,
                        simpleCollisionPrimitives: E ? F : void 0,
                        selectedPrimitiveId: R,
                        onPrimitiveSelect: z,
                        isActive: o,
                      },
                      `${Ke}-${y}`,
                    ),
              s &&
                (0, Z.jsx)(`div`, {
                  className: `absolute top-2 left-2 bg-card/80 px-2 py-1 rounded text-xs text-white z-10`,
                  children: s.asset_name?.replace(/_/g, ` `),
                }),
              N != null &&
                (0, Z.jsxs)(`button`, {
                  onClick: () => P(null),
                  className: `absolute top-2 right-2 bg-cyan-500/80 px-2 py-1 rounded text-xs text-white z-10 hover:bg-cyan-500 transition-colors`,
                  children: [`LOD`, N, ` Preview — click to dismiss`],
                }),
              Ke &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute bottom-2 left-2 flex gap-1 z-10`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      onClick: () => g(`textured`),
                      className: `w-7 h-7 rounded flex items-center justify-center transition-colors ${h === `textured` ? `bg-cyan-500 text-white` : `bg-card/80 text-gray-400 hover:text-white`}`,
                      title: `Textured`,
                      children: (0, Z.jsx)(I, { className: `h-3.5 w-3.5` }),
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
                      children: (0, Z.jsx)(Yee, { className: `h-3.5 w-3.5` }),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `w-72 border-l border-border flex flex-col bg-card`,
        children: ht,
      }),
      qe &&
        (0, Z.jsx)(Qle, {
          isOpen: x,
          onClose: () => C(!1),
          imageUrl: qe,
          assetName: s?.asset_name,
        }),
    ],
  });
}
