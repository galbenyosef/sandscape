// assets__Create-ea24k1TY 131 — classname
// Lines 43900-44374 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function wI({
  node: e,
  isCodingAgentRunning: t,
  onChatAbout: n,
  onExecute: r,
  assets: i,
  sessionDir: a,
  gameDesignData: o,
  onUpdateDesignData: s,
  generatingAssetNames: c,
}) {
  let [l, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(null),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(null),
    { toast: v } = u(),
    [y, b] = (0, X.useState)(!1),
    S = (0, X.useRef)(e.state),
    C = a?.split(`/`).pop() || a || ``,
    w = (0, X.useMemo)(() => {
      let e = (o?.assets || []).filter((e) => e.asset_type === `character_3d`);
      return e.length === 0
        ? i
            .filter((e) => e.asset_type === `character_3d`)
            .map((e) => ({
              ...e,
              hasConceptArt: !!e.concept_art_path,
              registryId: e.id,
            }))
        : e.map((e) => {
            let t = i.find(
              (t) =>
                t.asset_name === e.asset_name ||
                t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
            );
            return {
              id: t?.id || e.id,
              registryId: t?.id,
              asset_name: e.asset_name,
              asset_type: e.asset_type,
              description: e.description || ``,
              concept_art_path: t?.concept_art_path || e.concept_art_path,
              concept_art_version: t?.concept_art_version,
              concept_art_prompt: t?.concept_art_prompt || e.concept_art_prompt,
              model_3d_path: t?.model_3d_path || e.model_3d_path,
              rigged_model_path: t?.rigged_model_path ?? e.rigged_model_path,
              body_plan: t?.body_plan ?? e.body_plan,
              hasConceptArt: !!(t?.concept_art_path || e.concept_art_path),
              name: t?.name || e.asset_name,
              path: t?.path,
              size: t?.size || 0,
              size_human: t?.size_human || ``,
              modified: t?.modified || 0,
              type: t?.type || `image`,
              location: t?.location || `registry`,
              last_updated: t?.last_updated || ``,
              priority: e.priority || `medium`,
              format: e.format || `png`,
            };
          });
    }, [o?.assets, i]),
    T = (0, X.useMemo)(() => w.filter((e) => e.hasConceptArt).length, [w]),
    E = w.length - T,
    D = e.state === `complete` || e.state === `outdated`,
    O = e.state === `in-progress`;
  (0, X.useEffect)(() => {
    let t = S.current;
    ((S.current = e.state),
      t === `in-progress` && e.state !== `in-progress` && (b(!1), h(null)));
  }, [e.state]);
  let k = !!e.workflowId && e.activeWorkflow === e.workflowId,
    A = O && (y || k),
    j = O && !A,
    M = (e) => (m === e && O) || !!c?.has(e),
    N = un(e.id),
    P = on(SI),
    F = (0, X.useMemo)(() => bI(T), [T]),
    I = nn(N?.id ?? null, C, F.params),
    L = nn(N?.id ?? null, C, xI);
  (0, X.useEffect)(() => {
    if (!l) return;
    let e = w.find((e) => e.asset_name === l.asset_name);
    e &&
      (e.concept_art_path !== l.concept_art_path ||
        e.concept_art_version !== l.concept_art_version) &&
      d(e);
  }, [w, l]);
  let R = (0, X.useCallback)(
      async (e, t) => {
        if (!(!C || !e.registryId || t === (e.body_plan ?? `biped`))) {
          _(e.asset_name);
          try {
            let n = await jr.updateAsset(C, e.registryId, { body_plan: t });
            if (!n.success) {
              v({
                title: `Could not change the body plan`,
                description: n.error || `The update was refused.`,
                variant: `destructive`,
              });
              return;
            }
            let r = o?.assets;
            (s &&
              r &&
              s({
                assets: r.map((n) =>
                  n.asset_name === e.asset_name ? { ...n, body_plan: t } : n,
                ),
              }),
              p((n) =>
                n && n.asset_name === e.asset_name ? { ...n, body_plan: t } : n,
              ),
              d((n) =>
                n && n.asset_name === e.asset_name ? { ...n, body_plan: t } : n,
              ));
          } finally {
            _(null);
          }
        }
      },
      [C, o?.assets, s, v],
    ),
    z = () => {
      (b(!0), r?.(e.id, ``, { params: F.redrawing ? { regenerate: !0 } : {} }));
    },
    B = () => {
      (b(!0), r?.(e.id, ``, { params: { missing_only: !0 } }));
    },
    V = (0, X.useCallback)(
      async (t, n) => {
        (b(!1),
          h(t.asset_name),
          r?.(e.id, ``, {
            actionId: SI,
            params: {
              target: t.id || t.asset_name,
              regenerate: !0,
              ...(n ? { feedback: n } : {}),
            },
          }));
      },
      [e.id, r],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      w.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex items-center justify-end`,
          children: (0, Z.jsxs)(`span`, {
            className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded`,
            children: [T, `/`, w.length, ` drawn`],
          }),
        }),
      w.length === 0 &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(U, {
              className: `h-8 w-8 text-muted-foreground/30 mx-auto mb-2`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `No characters planned yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground/50 mt-1`,
              children: `Add a character from the Assets folder.`,
            }),
          ],
        }),
      w.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `grid grid-cols-3 gap-2`,
          children: w.map((e) => {
            let t = e.hasConceptArt && e.concept_art_path,
              n = t
                ? jr.getAssetUrl(a, e.concept_art_path, {
                    version:
                      e.concept_art_version ??
                      e.modified ??
                      e.last_updated ??
                      void 0,
                  })
                : null,
              r = M(e.asset_name);
            return (0, Z.jsxs)(
              `div`,
              {
                className: `aspect-square rounded-lg border transition-all duration-200 overflow-hidden relative group ${t ? `border-border hover:border-primary/40 cursor-pointer` : `border-dashed border-border/50 hover:border-border`}`,
                onClick: () => t && d(e),
                title: e.asset_name,
                children: [
                  t
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(`img`, {
                            src: n,
                            alt: e.asset_name,
                            className: `w-full h-full object-cover`,
                          }),
                          r &&
                            (0, Z.jsx)(`div`, {
                              className: `absolute inset-0 bg-card/60 flex items-center justify-center`,
                              children: (0, Z.jsx)(J, {
                                className: `w-6 h-6 text-primary animate-spin`,
                              }),
                            }),
                          !r &&
                            (0, Z.jsx)(`div`, {
                              className: `absolute top-1 right-1`,
                              children: (0, Z.jsx)(`div`, {
                                className: `w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white font-bold`,
                                children: `✓`,
                              }),
                            }),
                        ],
                      })
                    : (0, Z.jsxs)(`div`, {
                        className: `w-full h-full bg-card flex flex-col items-center justify-center p-2 cursor-pointer ${f?.asset_name === e.asset_name ? `ring-2 ring-primary` : ``}`,
                        onClick: (t) => {
                          (t.stopPropagation(), p(e));
                        },
                        children: [
                          r
                            ? (0, Z.jsx)(J, {
                                className: `w-6 h-6 text-primary animate-spin`,
                              })
                            : (0, Z.jsx)(On, {
                                className: `w-6 h-6 text-muted-foreground/40`,
                              }),
                          (0, Z.jsx)(`span`, {
                            className: `text-[9px] text-muted-foreground/60 text-center truncate w-full mt-1`,
                            children: e.asset_name?.replace(/_/g, ` `),
                          }),
                        ],
                      }),
                  (0, Z.jsx)(`div`, {
                    className: `absolute top-1 left-1 pointer-events-none`,
                    children: (0, Z.jsx)(ff, { asset: e }),
                  }),
                  t &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 bg-card/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5`,
                      children: (0, Z.jsx)(`span`, {
                        className: `text-[10px] text-white truncate w-full`,
                        children: e.asset_name?.replace(/_/g, ` `),
                      }),
                    }),
                ],
              },
              e.asset_name || e.name,
            );
          }),
        }),
      f &&
        !f.hasConceptArt &&
        (0, Z.jsxs)(`div`, {
          className: `p-3 bg-primary/10 border border-primary/20 rounded-lg space-y-2`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 min-w-0`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-sm text-foreground/80 font-medium truncate`,
                      children: f.asset_name?.replace(/_/g, ` `),
                    }),
                    (0, Z.jsx)(ff, {
                      asset: f,
                      onChange: f.registryId ? (e) => void R(f, e) : void 0,
                      disabled: A || M(f.asset_name),
                      saving: g === f.asset_name,
                    }),
                  ],
                }),
                (0, Z.jsx)(x, {
                  variant: `ghost`,
                  size: `sm`,
                  onClick: () => p(null),
                  className: `h-6 w-6 p-0 shrink-0 text-muted-foreground hover:text-foreground`,
                  children: (0, Z.jsx)(li, { className: `h-3 w-3` }),
                }),
              ],
            }),
            f.description &&
              (0, Z.jsx)(`p`, {
                className: `text-xs text-muted-foreground/60 line-clamp-2`,
                children: f.description,
              }),
            (0, Z.jsx)(CI, {
              actionId: P?.id ?? null,
              sessionId: C,
              target: f.id || f.asset_name,
              label: `Draw Concept`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4 mr-1` }),
              variant: `default`,
              isGenerating: M(f.asset_name),
              disabled: A,
              onGenerate: (e) => V(f, e),
              placeholder:
                Ge(f) === `biped`
                  ? `e.g., Clear T-pose silhouette, readable limbs`
                  : `e.g., Full side profile, all four legs visible`,
            }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 space-y-2`,
        children: [
          !A &&
            E > 0 &&
            T > 0 &&
            (0, Z.jsx)(an, {
              onClick: B,
              className: `w-full`,
              disabled: t || j,
              title: j ? `Wait for the running redraw to finish` : void 0,
              variant: `default`,
              cost: L?.total ?? null,
              maxCost: L?.maxTotal ?? null,
              label: `Draw Missing (${E})`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: `Draw concept art for ${E} character${E > 1 ? `s` : ``} without any`,
              checkBalance: !0,
            }),
          !A &&
            w.length > 0 &&
            (0, Z.jsx)(an, {
              onClick: z,
              className: `w-full`,
              disabled: t || j,
              title: j ? `Wait for the running redraw to finish` : void 0,
              variant: F.redrawing ? `outline` : `default`,
              cost: I?.total ?? null,
              maxCost: I?.maxTotal ?? null,
              label: F.label,
              icon: F.redrawing
                ? (0, Z.jsx)(xn, { className: `h-4 w-4` })
                : (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: F.redrawing
                ? `Redraw concept art for all ${w.length} characters, replacing what is there`
                : `Draw concept art for ${w.length} character${w.length > 1 ? `s` : ``}`,
              checkBalance: !0,
            }),
          A &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Drawing character concepts...`,
              ],
            }),
          D &&
            E === 0 &&
            w.length > 0 &&
            !O &&
            (0, Z.jsx)(`div`, {
              className: `text-center text-xs text-muted-foreground/60 py-2`,
              children: `Every character is drawn — Character Creation is next.`,
            }),
        ],
      }),
      l &&
        l.concept_art_path &&
        (0, Z.jsx)(`div`, {
          className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4`,
          onClick: () => d(null),
          children: (0, Z.jsxs)(`div`, {
            className: `bg-card rounded-xl border border-border max-w-md w-full max-h-[80vh] overflow-hidden`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, Z.jsxs)(`div`, {
                className: `px-4 py-3 border-b border-border flex items-center justify-between`,
                children: [
                  (0, Z.jsx)(`h3`, {
                    className: `text-sm font-semibold text-white truncate`,
                    children: l.asset_name?.replace(/_/g, ` `),
                  }),
                  (0, Z.jsx)(x, {
                    variant: `ghost`,
                    size: `sm`,
                    onClick: () => d(null),
                    className: `text-muted-foreground hover:text-white -mr-2`,
                    children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `p-4 space-y-4`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `aspect-square rounded-lg border border-border overflow-hidden bg-card`,
                    children: (0, Z.jsx)(`img`, {
                      src: jr.getAssetUrl(a, l.concept_art_path, {
                        version:
                          l.concept_art_version ??
                          l.modified ??
                          l.last_updated ??
                          void 0,
                      }),
                      alt: l.asset_name,
                      className: `w-full h-full object-contain`,
                    }),
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-2 flex-wrap`,
                        children: [
                          (0, Z.jsx)(ff, {
                            asset: l,
                            onChange: l.registryId
                              ? (e) => void R(l, e)
                              : void 0,
                            disabled: A || M(l.asset_name),
                            saving: g === l.asset_name,
                          }),
                          et(l)
                            ? (0, Z.jsx)(`span`, {
                                className: `px-2 py-0.5 text-[10px] bg-green-500/15 rounded text-green-400`,
                                children: `Rigged`,
                              })
                            : l.model_3d_path
                              ? (0, Z.jsx)(`span`, {
                                  className: `px-2 py-0.5 text-[10px] bg-green-500/15 rounded text-green-400`,
                                  children: `Mesh ready`,
                                })
                              : null,
                        ],
                      }),
                      (0, Z.jsx)(`p`, {
                        className: `text-[11px] text-muted-foreground/70`,
                        children:
                          Ge(l) === `biped`
                            ? `Character Creation rigs this drawing for animation.`
                            : `Character Creation turns this drawing into a 3D mesh. Non-biped characters are not rigged, so animations do not apply.`,
                      }),
                      l.description &&
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground line-clamp-3`,
                          children: l.description,
                        }),
                    ],
                  }),
                  (0, Z.jsx)(CI, {
                    actionId: P?.id ?? null,
                    sessionId: C,
                    target: l.id || l.asset_name,
                    label: `Redraw Concept`,
                    icon: (0, Z.jsx)(xn, { className: `h-4 w-4 mr-1` }),
                    variant: `outline`,
                    isGenerating: M(l.asset_name),
                    disabled: A,
                    onGenerate: (e) => V(l, e),
                    placeholder: `e.g., Bulkier silhouette, clearer read on the head`,
                  }),
                  (0, Z.jsx)(x, {
                    variant: `ghost`,
                    onClick: () => n(e.id),
                    className: `w-full text-muted-foreground mt-2`,
                    children: `Chat about this character`,
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
