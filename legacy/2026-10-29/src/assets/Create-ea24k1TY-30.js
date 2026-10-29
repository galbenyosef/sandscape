// Create-ea24k1TY 30 — classname
// Lines 9292-9776 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function mu({
  node: e,
  isCodingAgentRunning: t,
  onChatAbout: n,
  onExecute: r,
  assets: i,
  sessionDir: a,
  gameDesignData: o,
  onUpdateDesignData: s,
  onOpenEditorTab: c,
  generatingAssetNames: l,
}) {
  let [u, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(null),
    [m, h] = (0, X.useState)(``),
    [g, _] = (0, X.useState)(!1),
    [v, y] = (0, X.useState)(null),
    [b, S] = (0, X.useState)(null),
    [C, w] = (0, X.useState)(!1),
    T = (0, X.useRef)(e.state),
    E = a?.split(`/`).pop() || a || ``,
    D = (0, X.useMemo)(() => {
      let e = (o?.assets || []).filter((e) => pu(e.asset_type));
      return e.length === 0
        ? i
            .filter((e) => pu(e.asset_type))
            .map((e) => ({ ...e, hasConceptArt: !!e.concept_art_path }))
        : e.map((e) => {
            let t = i.find(
              (t) =>
                t.asset_name === e.asset_name ||
                t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
            );
            return {
              id: t?.id || e.id,
              asset_name: e.asset_name,
              asset_type: e.asset_type,
              description: e.description || ``,
              concept_art_path: t?.concept_art_path || e.concept_art_path,
              concept_art_version: t?.concept_art_version,
              concept_art_prompt: t?.concept_art_prompt || e.concept_art_prompt,
              model_3d_path: t?.model_3d_path || e.model_3d_path,
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
    O = (0, X.useMemo)(() => D.filter((e) => e.hasConceptArt), [D]),
    k = D.length,
    A = e.state === `complete` || e.state === `outdated`,
    j = e.state === `in-progress`;
  (e.state,
    (0, X.useEffect)(() => {
      let t = T.current;
      ((T.current = e.state),
        t === `in-progress` && e.state !== `in-progress` && w(!1));
    }, [e.state]));
  let M = !!e.workflowId && e.activeWorkflow === e.workflowId,
    N = j && (C || M),
    P = j && !N,
    F = (0, X.useMemo)(() => D.filter((e) => !e.hasConceptArt).length, [D]),
    I = un(e.id),
    L = A ? k : F,
    R = nn(I?.id ?? null, E, {}),
    z = fn(I?.id ?? null, E, { missing_only: !0 }),
    B = (0, X.useCallback)(
      (e) =>
        i.find((t) => t.asset_name === e.asset_name)?.id || e.asset_name || ``,
      [i],
    ),
    V = rn(`concept_art`, E, f ? B(f) : null, { regenerate: !0 }),
    H = rn(`concept_art`, E, u ? B(u) : null, { regenerate: !0 });
  (0, X.useEffect)(() => {
    if (u) {
      let e = D.find((e) => e.asset_name === u.asset_name);
      e &&
        (e.concept_art_path !== u.concept_art_path ||
          e.concept_art_version !== u.concept_art_version) &&
        d(e);
    }
  }, [D, u]);
  let ee = () => {
      (w(!0), r?.(e.id, `Generate concept art for all planned visual assets`));
    },
    W = () => {
      (w(!0),
        r?.(
          e.id,
          `Generate concept art for assets that are missing concept art`,
          { params: { missing_only: !0 } },
        ));
    },
    G = (0, X.useCallback)(async () => {
      let e = m.trim();
      if (!(!e || !E)) {
        (_(!0), y(null));
        try {
          let t = await jr.addAsset(E, {
            asset_name: e,
            asset_type: `prop_3d`,
            description: ``,
            priority: `medium`,
          });
          if (!t.success) throw Error(t.error || `Failed to add asset`);
          (s && t.asset && s({ assets: [...(o?.assets || []), t.asset] }),
            h(``));
        } catch (e) {
          y(e instanceof Error ? e.message : `Failed to add asset`);
        } finally {
          _(!1);
        }
      }
    }, [m, E, o?.assets, s]),
    te = (0, X.useCallback)(
      async (e, t) => {
        if (!E) return;
        let n = B(e);
        (w(!1), S(e.asset_name));
        try {
          let e = await Fn(E, n, `concept_art`, {
            regenerate: !0,
            ...(t ? { feedback: t } : {}),
          });
          if (!e.success)
            throw Error(e.error || `Failed to generate concept art`);
        } catch (e) {
          console.error(`Failed to generate concept art:`, e);
        } finally {
          S(null);
        }
      },
      [E, B],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      k > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex items-center justify-end`,
          children: (0, Z.jsxs)(`span`, {
            className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded`,
            children: [O.length, `/`, k, ` generated`],
          }),
        }),
      D.length === 0 &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(U, {
              className: `h-8 w-8 text-muted-foreground/30 mx-auto mb-2`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `No visual assets planned yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground/50 mt-1`,
              children: `Add assets from the Assets tab.`,
            }),
          ],
        }),
      D.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `grid grid-cols-3 gap-2`,
          children: D.map((e) => {
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
              r = b === e.asset_name || l?.has(e.asset_name);
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
                            : (0, Z.jsx)(pn, {
                                className: `w-6 h-6 text-muted-foreground/40`,
                              }),
                          (0, Z.jsx)(`span`, {
                            className: `text-[9px] text-muted-foreground/60 text-center truncate w-full mt-1`,
                            children: e.asset_name?.replace(/_/g, ` `),
                          }),
                        ],
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
              className: `flex items-center justify-between`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-sm text-foreground/80 font-medium`,
                  children: f.asset_name?.replace(/_/g, ` `),
                }),
                (0, Z.jsx)(x, {
                  variant: `ghost`,
                  size: `sm`,
                  onClick: () => p(null),
                  className: `h-6 w-6 p-0 text-muted-foreground hover:text-foreground`,
                  children: (0, Z.jsx)(li, { className: `h-3 w-3` }),
                }),
              ],
            }),
            f.description &&
              (0, Z.jsx)(`p`, {
                className: `text-xs text-muted-foreground/60 line-clamp-2`,
                children: f.description,
              }),
            (0, Z.jsx)(`div`, {
              className: `flex gap-2`,
              children: (0, Z.jsx)(uu, {
                label: `Generate Concept`,
                cost: V,
                icon: (0, Z.jsx)(Yr, { className: `h-4 w-4 mr-1` }),
                onGenerate: (e) => te(f, e),
                isGenerating: b === f.asset_name,
                disabled: N,
                size: `default`,
                variant: `default`,
                className: `w-full`,
                placeholder: `e.g., Make it brighter, more detailed`,
              }),
            }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 space-y-2`,
        children: [
          !N &&
            F > 0 &&
            O.length > 0 &&
            (0, Z.jsx)(an, {
              onClick: W,
              className: `w-full`,
              disabled: t || P,
              title: P ? `Wait for the running redraw to finish` : void 0,
              variant: `default`,
              cost: z,
              label: `Generate Missing (${F})`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: `Generate concept art for ${F} assets without concept art`,
              checkBalance: !0,
            }),
          !N &&
            L > 0 &&
            (0, Z.jsx)(an, {
              onClick: ee,
              className: `w-full`,
              disabled: t || P,
              title: P ? `Wait for the running redraw to finish` : void 0,
              variant: A || O.length > 0 ? `outline` : `default`,
              cost: R?.total ?? null,
              maxCost: R?.maxTotal ?? null,
              label:
                A || O.length > 0 ? `Regenerate All` : `Generate All Concepts`,
              icon:
                A || O.length > 0
                  ? (0, Z.jsx)(xn, { className: `h-4 w-4` })
                  : (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip:
                A || O.length > 0
                  ? `Regenerate concept art for all ${k} assets`
                  : `Generate concept art for ${F} assets`,
              checkBalance: !0,
            }),
          !N &&
            L === 0 &&
            D.length > 0 &&
            (0, Z.jsx)(`div`, {
              className: `text-center text-xs text-muted-foreground/60 py-2`,
              children: `All concept art generated`,
            }),
          N &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Generating concept art...`,
              ],
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `pt-4 border-t border-border`,
        children: [
          (0, Z.jsx)(`label`, {
            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
            children: `Add New Asset`,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, Z.jsx)(`input`, {
                type: `text`,
                value: m,
                onChange: (e) => {
                  (h(e.target.value), y(null));
                },
                placeholder: `e.g., Magical crystal prop`,
                className: `flex-1 h-10 bg-card border border-border rounded-lg px-3 text-sm text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40`,
                disabled: t || g,
                onKeyDown: (e) => e.key === `Enter` && G(),
              }),
              (0, Z.jsx)(x, {
                size: `sm`,
                onClick: G,
                disabled: !m.trim() || t || g,
                className: `h-10 px-4`,
                children: g
                  ? (0, Z.jsx)(J, { className: `w-4 h-4 animate-spin` })
                  : (0, Z.jsx)(ni, { className: `w-4 h-4` }),
              }),
            ],
          }),
          v &&
            (0, Z.jsx)(`p`, {
              className: `text-xs text-red-400 mt-1`,
              children: v,
            }),
        ],
      }),
      u &&
        u.concept_art_path &&
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
                    children: u.asset_name?.replace(/_/g, ` `),
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
                      src: jr.getAssetUrl(a, u.concept_art_path, {
                        version:
                          u.concept_art_version ??
                          u.modified ??
                          u.last_updated ??
                          void 0,
                      }),
                      alt: u.asset_name,
                      className: `w-full h-full object-contain`,
                    }),
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `px-2 py-0.5 text-[10px] bg-secondary rounded text-muted-foreground`,
                            children: u.asset_type?.replace(/_/g, ` `),
                          }),
                          u.model_3d_path &&
                            (0, Z.jsx)(`span`, {
                              className: `px-2 py-0.5 text-[10px] bg-green-500/15 rounded text-green-400`,
                              children: `3D ready`,
                            }),
                        ],
                      }),
                      u.description &&
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground line-clamp-3`,
                          children: u.description,
                        }),
                    ],
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `flex gap-2 flex-wrap`,
                    children: (0, Z.jsx)(uu, {
                      label: `Regen Concept`,
                      cost: H,
                      icon: (0, Z.jsx)(xn, { className: `h-4 w-4 mr-1` }),
                      onGenerate: (e) => te(u, e),
                      isGenerating: b === u.asset_name,
                      disabled: N,
                      size: `default`,
                      variant: `outline`,
                      className: `w-full`,
                      placeholder: `e.g., Make it brighter, add more detail`,
                    }),
                  }),
                  (0, Z.jsx)(x, {
                    variant: `ghost`,
                    onClick: () => n(e.id),
                    className: `w-full text-muted-foreground mt-2`,
                    children: `Chat about this asset`,
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
