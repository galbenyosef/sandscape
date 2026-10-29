// Create-CEn7EAZs 135 — classname
// Lines 45175-45608 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function HI({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onUpdateDesignData: o,
  onOpenEditorTab: s,
}) {
  let [c, l] = (0, X.useState)(null),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(null),
    [_, v] = (0, X.useState)(null),
    { toast: y } = u(),
    b = i?.split(`/`).pop() || i || ``,
    x = e.state === `complete` || e.state === `outdated`,
    S = e.state === `in-progress`,
    C = (0, X.useMemo)(
      () =>
        (a?.assets || [])
          .filter((e) => e.asset_type === `character_3d`)
          .map((e) => {
            let t = r.find(
                (t) =>
                  t.asset_name === e.asset_name ||
                  t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
              ),
              n = t?.rigged_model_path ?? e.rigged_model_path,
              i = t?.model_3d_path || e.model_3d_path;
            return {
              id: e.asset_id || e.asset_name || `char-${e.asset_type}`,
              asset_name: e.asset_name,
              asset_type: e.asset_type,
              description: e.description || ``,
              registryId: t?.id,
              concept_art_path: t?.concept_art_path || e.concept_art_path,
              model_3d_path: i,
              rigged_model_path: n,
              body_plan: t?.body_plan ?? e.body_plan,
              status: n ? `3d` : i ? `concept` : `planned`,
            };
          }),
      [a?.assets, r],
    ),
    w = (0, X.useMemo)(
      () => C.find((e) => e.asset_name === c) ?? C[0] ?? null,
      [C, c],
    ),
    T = (0, X.useMemo)(() => C.filter(Et), [C]),
    E = (0, X.useMemo)(() => C.filter((e) => !Et(e)), [C]),
    D = C.filter(Ue).length,
    O = C.length,
    k = O - D,
    A = Ua(e.id),
    j = za(A?.id ?? null, b, { missing_only: !0 }),
    M = (0, X.useCallback)(
      async (t) => {
        if (b) {
          g(t.asset_name);
          try {
            n?.(e.id, ``, { params: { target: t.asset_name } });
          } finally {
            setTimeout(() => g(null), 2e3);
          }
        }
      },
      [b, e.id, n],
    ),
    N = (0, X.useCallback)(
      async (e, t) => {
        if (!(!b || !e.registryId || t === (e.body_plan ?? `biped`))) {
          v(e.asset_name);
          try {
            let n = await vr.updateAsset(b, e.registryId, { body_plan: t });
            if (!n.success) {
              y({
                title: `Could not change the body plan`,
                description: n.error || `The update was refused.`,
                variant: `destructive`,
              });
              return;
            }
            let r = a?.assets;
            o &&
              r &&
              o({
                assets: r.map((n) =>
                  n.asset_name === e.asset_name ? { ...n, body_plan: t } : n,
                ),
              });
          } finally {
            v(null);
          }
        }
      },
      [b, a?.assets, o, y],
    ),
    P = () => {
      n?.(e.id, ``, { params: { missing_only: !0 } });
    },
    F = (0, X.useMemo)(() => {
      if (!w) return null;
      let e = w.rigged_model_path || w.model_3d_path;
      return e ? vr.getAssetUrl(i, e, !1) : null;
    }, [w, i]),
    [L, R] = (0, X.useState)(null);
  L !== F && (R(F), f(!!F), m(!1));
  let z = (0, X.useMemo)(
      () =>
        !w?.concept_art_path || F
          ? null
          : vr.getAssetUrl(i, w.concept_art_path, !1),
      [w, F, i],
    ),
    B = (e) => {
      let n = Et(e),
        r = Ue(e),
        a = !!e.concept_art_path,
        o = w?.asset_name === e.asset_name,
        c = h === e.asset_name,
        u = a ? vr.getAssetUrl(i, e.concept_art_path, !1) : null,
        d = r
          ? n
            ? `Rigged and ready`
            : `Mesh ready`
          : a
            ? `Has concept art`
            : `Needs a character concept first`;
      return (0, Z.jsxs)(
        `div`,
        {
          className: `flex items-center gap-3 p-2 rounded-lg border transition-all cursor-pointer ${o ? `border-primary ring-1 ring-primary/30 bg-primary/5` : r ? `border-green-500/30 hover:border-green-500/50 bg-green-500/5` : `border-gray-600/30 hover:border-gray-500/50`}`,
          onClick: () => {
            (l(e.asset_name), p && R(null));
          },
          children: [
            (0, Z.jsx)(`div`, {
              className: `w-12 h-12 rounded overflow-hidden shrink-0 bg-gray-800/50`,
              children: u
                ? (0, Z.jsx)(`img`, {
                    src: u,
                    alt: e.asset_name,
                    className: `w-full h-full object-cover`,
                    loading: `lazy`,
                  })
                : (0, Z.jsx)(`div`, {
                    className: `w-full h-full flex items-center justify-center`,
                    children: n
                      ? (0, Z.jsx)(hn, { className: `w-5 h-5 text-gray-600` })
                      : (0, Z.jsx)(I, { className: `w-5 h-5 text-gray-600` }),
                  }),
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex-1 min-w-0`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-sm text-gray-200 truncate`,
                      children: e.asset_name?.replace(/_/g, ` `),
                    }),
                    r &&
                      (0, Z.jsx)(Ve, {
                        className: `w-3.5 h-3.5 text-green-400 shrink-0`,
                      }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 mt-0.5`,
                  children: [
                    (0, Z.jsx)(Hf, {
                      asset: e,
                      onChange: e.registryId ? (t) => void N(e, t) : void 0,
                      disabled: c || t || S,
                      saving: _ === e.asset_name,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-500 truncate`,
                      children: d,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: `shrink-0`,
              children: r
                ? n
                  ? (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-1`,
                      children: [
                        (0, Z.jsx)(`button`, {
                          onClick: (e) => {
                            (e.stopPropagation(), s?.(`character`));
                          },
                          className: `text-[10px] text-primary hover:text-primary/80 px-2 py-1 rounded border border-primary/30 hover:bg-primary/10 transition-colors`,
                          children: `Open Editor`,
                        }),
                        (0, Z.jsx)(`button`, {
                          onClick: (t) => {
                            (t.stopPropagation(),
                              s?.(`skin-weights`, {
                                assetId: e.id || e.asset_name,
                              }));
                          },
                          className: `text-[10px] text-primary hover:text-primary/80 px-2 py-1 rounded border border-primary/30 hover:bg-primary/10 transition-colors`,
                          title: `Paint per-vertex bone weights`,
                          children: `Paint Weights`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(`button`, {
                      onClick: (t) => {
                        (t.stopPropagation(),
                          s?.(`assets`, { assetId: e.id || e.asset_name }));
                      },
                      className: `text-[10px] text-primary hover:text-primary/80 px-2 py-1 rounded border border-primary/30 hover:bg-primary/10 transition-colors`,
                      children: `Open Editor`,
                    })
                : c
                  ? (0, Z.jsx)(J, {
                      className: `w-4 h-4 text-primary animate-spin`,
                    })
                  : (0, Z.jsx)(VI, {
                      actionId: A?.id ?? null,
                      sessionId: b,
                      assetName: e.asset_name,
                      riggable: n,
                      disabled: t || !a,
                      isGenerating: c,
                      onGenerate: async () => M(e),
                    }),
            }),
          ],
        },
        e.id || e.asset_name,
      );
    };
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, Z.jsxs)(`h4`, {
            className: `text-sm font-semibold text-gray-300 flex items-center gap-2`,
            children: [
              (0, Z.jsx)(hn, { className: `h-4 w-4 text-primary` }),
              `Character Creation`,
            ],
          }),
          O > 0 &&
            (0, Z.jsxs)(`span`, {
              className: `text-xs text-gray-500`,
              children: [D, `/`, O, ` created`],
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-4`,
        ...fr(`tour-character-stage`),
        children: [
          (0, Z.jsxs)(`div`, {
            ...fr(`tour-character-viewer`),
            className: `relative aspect-square rounded-lg border border-primary/30 bg-[#2a263e] overflow-hidden`,
            children: [
              d &&
                !p &&
                F &&
                (0, Z.jsx)(`div`, {
                  className: `absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10`,
                  children: (0, Z.jsx)(J, {
                    className: `h-8 w-8 text-primary animate-spin`,
                  }),
                }),
              z
                ? (0, Z.jsx)(`img`, {
                    src: z,
                    alt: `${w?.asset_name?.replace(/_/g, ` `)} concept`,
                    className: `absolute inset-0 h-full w-full object-contain`,
                  })
                : p || !F
                  ? (0, Z.jsxs)(`div`, {
                      className: `absolute inset-0 flex flex-col items-center justify-center text-gray-500`,
                      children: [
                        (0, Z.jsx)(hn, { className: `h-8 w-8 mb-2` }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm text-center px-4`,
                          children: p
                            ? `Failed to load model`
                            : w
                              ? `No model available yet`
                              : `Select a character to preview`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(
                      Rl,
                      {
                        modelUrl: F,
                        isModal: !0,
                        onLoad: () => f(!1),
                        onError: () => {
                          (f(!1), m(!0));
                        },
                      },
                      F,
                    ),
              w &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white`,
                  children: [
                    w.asset_name?.replace(/_/g, ` `),
                    z &&
                      (0, Z.jsx)(`span`, {
                        className: `text-white/60`,
                        children: ` · concept`,
                      }),
                  ],
                }),
            ],
          }),
          C.length > 0
            ? (0, Z.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  T.length > 0 &&
                    (0, Z.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        E.length > 0 &&
                          (0, Z.jsx)(`h5`, {
                            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                            children: `Rigged for animation`,
                          }),
                        T.map(B),
                      ],
                    }),
                  E.length > 0 &&
                    (0, Z.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, Z.jsx)(`h5`, {
                          className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                          children: `Meshed, not rigged`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-[11px] text-amber-300/80 leading-snug`,
                          children: `Only bipeds can be rigged. These get a 3D model instead, so the animation steps do not apply to them.`,
                        }),
                        E.map(B),
                      ],
                    }),
                ],
              })
            : (0, Z.jsxs)(`div`, {
                className: `py-8 text-center`,
                children: [
                  (0, Z.jsx)(te, {
                    className: `h-8 w-8 text-gray-600 mx-auto mb-2`,
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-sm text-gray-500`,
                    children: `No character assets found.`,
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-xs text-gray-600 mt-1`,
                    children: `Draw them in Character Concepts, or add one from the Assets folder.`,
                  }),
                ],
              }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          k > 0 &&
            (0, Z.jsx)($t, {
              onClick: P,
              className: `w-full`,
              disabled: t,
              cost: j,
              label: `Create All Characters (${k})`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: S,
              loadingText: `Creating characters...`,
              tooltip:
                E.length > 0
                  ? `Rig every outstanding biped and mesh every outstanding non-biped (${k} in total)`
                  : `Create ${k} character${k > 1 ? `s` : ``}`,
              checkBalance: !0,
            }),
          S &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Creating characters...`,
              ],
            }),
          x &&
            D === O &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-2 bg-green-500/10 border border-green-500/20 rounded-lg`,
              children: [
                (0, Z.jsx)(Ve, { className: `h-4 w-4 text-green-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-xs text-green-400`,
                  children: `All characters created`,
                }),
              ],
            }),
        ],
      }),
      T.length > 0 &&
        (0, Z.jsx)(_p, {
          tabId: `character`,
          label: `Open in Animation Editor`,
          onOpenEditorTab: s,
        }),
      tt(w) &&
        (0, Z.jsx)(_p, {
          tabId: `skin-weights`,
          label: `Paint Skin Weights`,
          assetId: w?.id || w?.asset_name,
          onOpenEditorTab: s,
        }),
    ],
  });
}
