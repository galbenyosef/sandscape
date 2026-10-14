// assets__Create-ea24k1TY 57 — classname
// Lines 17708-18219 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Cp({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onUpdateDesignData: o,
  onOpenEditorTab: s,
  generatingAssetNames: c,
}) {
  let [l, u] = (0, X.useState)(null),
    [d, f] = (0, X.useState)(null),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(``),
    [y, b] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)(null),
    [T, E] = (0, X.useState)(new Set()),
    D = i?.split(`/`).pop() || i || ``,
    O = e.state === `in-progress`;
  e.state;
  let k = (0, X.useMemo)(() => {
      let e = (a?.assets || []).filter((e) => Bt.includes(e.asset_type)),
        t = r.filter(
          (e) =>
            e.type === `3d` ||
            e.name?.endsWith(`.glb`) ||
            e.name?.endsWith(`.gltf`),
        );
      return e.map((e) => {
        let n = r.find((t) => t.asset_name === e.asset_name),
          i = t.find(
            (t) =>
              t.asset_name === e.asset_name ||
              t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
          ),
          a = r.find(
            (t) =>
              t.type === `image` &&
              (t.asset_name === e.asset_name ||
                t.name?.includes(e.asset_name?.replace(/\s+/g, `_`))),
          );
        return {
          id: e.asset_name || `asset-${e.asset_type}`,
          asset_name: e.asset_name,
          asset_type: e.asset_type,
          description: e.description || ``,
          concept_art_path:
            n?.concept_art_path || a?.name || e.concept_art_path,
          model_3d_path: n?.model_3d_path || i?.name || e.model_3d_path,
          status:
            n?.model_3d_path || i || e.model_3d_path
              ? `3d`
              : n?.concept_art_path || a || e.concept_art_path
                ? `concept`
                : `planned`,
        };
      });
    }, [a?.assets, r]),
    A = k.filter((e) => e.model_3d_path).length,
    j = k.length,
    M = j - A,
    N = un(e.id),
    P = nn(N?.id ?? null, D, { missing_only: !0 }),
    F = nn(N?.id ?? null, D, { regenerate: !0 }),
    I = l
      ? r.find((e) => e.asset_name === l.asset_name)?.id || l.asset_name
      : null,
    L = fn(I ? (N?.id ?? null) : null, D, { target: I ?? ``, regenerate: !0 }),
    R = d
      ? r.find((e) => e.asset_name === d.asset_name)?.id || d.asset_name
      : null,
    z = fn(R ? (N?.id ?? null) : null, D, { target: R ?? ``, regenerate: !0 }),
    B = (0, X.useMemo)(
      () => k.filter((e) => T.has(e.asset_name) || c?.has(e.asset_name)).length,
      [k, T, c],
    ),
    [V, H] = (0, X.useState)(0);
  (0, X.useEffect)(() => {
    O || H(0);
  }, [O]);
  let ee = B > 0 ? B : V,
    W = (0, X.useCallback)(async () => {
      let e = _.trim();
      if (!(!e || !D)) {
        (b(!0), w(null));
        try {
          let t = await jr.addAsset(D, {
            asset_name: e,
            asset_type: `prop_3d`,
            description: ``,
            priority: `medium`,
          });
          if (!t.success) throw Error(t.error || `Failed to add asset`);
          (o && t.asset && o({ assets: [...(a?.assets || []), t.asset] }),
            v(``));
        } catch (e) {
          w(e instanceof Error ? e.message : `Failed to add asset`);
        } finally {
          b(!1);
        }
      }
    }, [_, D, a?.assets, o]),
    G = (0, X.useCallback)(
      async (e) => {
        if (!D) return;
        let t =
          r.find((t) => t.asset_name === e.asset_name)?.id || e.asset_name;
        E((t) => new Set(t).add(e.asset_name));
        try {
          let e = await Fn(D, t, `model_3d`, { regenerate: !0 });
          if (!e.success) throw Error(e.error || `Failed to generate 3D model`);
        } catch (e) {
          console.error(`Failed to generate 3D model:`, e);
        } finally {
          E((t) => {
            let n = new Set(t);
            return (n.delete(e.asset_name), n);
          });
        }
      },
      [D, r],
    );
  ((0, X.useEffect)(() => {
    if (!l && k.length > 0) {
      let e = k.find((e) => e.model_3d_path);
      e && u(e);
    }
  }, [k, l]),
    (0, X.useEffect)(() => {
      if (l?.asset_name) {
        let e = k.find((e) => e.asset_name === l.asset_name);
        if (e) {
          let t = e.model_3d_path !== l.model_3d_path;
          (t ||
            e.concept_art_path !== l.concept_art_path ||
            e.description !== l.description) &&
            (u(e), t && (m(!0), g(!1)));
        }
      }
      if (d?.asset_name) {
        let e = k.find((e) => e.asset_name === d.asset_name);
        e?.model_3d_path
          ? (f(null), u(e), m(!0), g(!1))
          : e &&
            (e.concept_art_path !== d.concept_art_path ||
              e.description !== d.description) &&
            f(e);
      }
    }, [k, l, d]));
  let te = (0, X.useCallback)(() => {
      (m(!1), g(!1));
    }, []),
    K = (0, X.useCallback)(() => {
      (m(!1), g(!0));
    }, []),
    ne = () => {
      (H(M),
        n?.(e.id, `Generate 3D models for assets that are missing 3D models`, {
          params: { missing_only: !0 },
        }));
    },
    re = () => {
      (H(j),
        n?.(e.id, `Regenerate all 3D assets with improvements`, {
          params: { regenerate: !0 },
        }));
    },
    ie = (0, X.useCallback)(async () => {
      if (!l || !D) return;
      let e = r.find((e) => e.asset_name === l.asset_name)?.id || l.asset_name,
        t = l.asset_name;
      E((e) => new Set(e).add(t));
      try {
        let t = await Fn(D, e, `model_3d`, { regenerate: !0 });
        t.success || console.error(`Failed to regenerate 3D model:`, t.error);
      } catch (e) {
        console.error(`Failed to regenerate 3D model:`, e);
      } finally {
        E((e) => {
          let n = new Set(e);
          return (n.delete(t), n);
        });
      }
    }, [l, D, r]),
    ae = l?.model_3d_path ? jr.getAssetUrl(i, l.model_3d_path, !1) : null;
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `relative aspect-square rounded-lg border border-border bg-card overflow-hidden`,
        children: [
          j > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `absolute top-2 right-2 z-10 bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-muted-foreground`,
              children: [A, `/`, j, ` generated`],
            }),
          p &&
            !h &&
            ae &&
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
              children: (0, Z.jsx)(J, {
                className: `h-8 w-8 text-primary animate-spin`,
              }),
            }),
          h || !ae
            ? (0, Z.jsxs)(`div`, {
                className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                children: [
                  (0, Z.jsx)(U, { className: `h-8 w-8 mb-2` }),
                  (0, Z.jsx)(`p`, {
                    className: `text-sm text-center px-4`,
                    children: h
                      ? `Failed to load 3D model`
                      : l
                        ? `No 3D model generated yet`
                        : `Select an asset to preview`,
                  }),
                ],
              })
            : (0, Z.jsx)(xl, {
                modelUrl: ae,
                isModal: !0,
                onLoad: te,
                onError: K,
              }),
          l &&
            (0, Z.jsx)(`div`, {
              className: `absolute top-2 left-2 bg-card/80 px-2 py-1 rounded text-xs text-white`,
              children: l.asset_name?.replace(/_/g, ` `),
            }),
        ],
      }),
      k.length > 0
        ? (0, Z.jsx)(`div`, {
            className: `grid grid-cols-4 gap-2`,
            children: k.map((e) => {
              let t = !!e.model_3d_path,
                n = !!e.concept_art_path,
                r = l?.asset_name === e.asset_name,
                a = d?.asset_name === e.asset_name,
                o = T.has(e.asset_name) || c?.has(e.asset_name),
                s = n ? jr.getAssetUrl(i, e.concept_art_path, !1) : null;
              return (0, Z.jsxs)(
                `div`,
                {
                  ...(t ? {} : Tr(`tour-pending-asset`)),
                  className: `aspect-square rounded-lg border transition-all duration-200 overflow-hidden relative group cursor-pointer ${t ? (r ? `border-primary ring-2 ring-primary/50` : `border-green-500/50 hover:border-green-500/80`) : a ? `ring-2 ring-cyan-500 border-cyan-500/50` : `border-dashed border-border/50 hover:border-border`}`,
                  onClick: () => {
                    t
                      ? (u(e), f(null), m(!0), g(!1))
                      : (f(e), Dr(`tour:pending-selected`, e.asset_name));
                  },
                  title: e.asset_name?.replace(/_/g, ` `),
                  children: [
                    s
                      ? (0, Z.jsx)(`img`, {
                          src: s,
                          alt: e.asset_name,
                          className: `w-full h-full object-cover ${t ? `` : `opacity-50`}`,
                          loading: `lazy`,
                        })
                      : (0, Z.jsx)(`div`, {
                          className: `w-full h-full bg-secondary/50 flex items-center justify-center`,
                          children: (0, Z.jsx)(S, {
                            className: `w-6 h-6 text-muted-foreground/60`,
                          }),
                        }),
                    t &&
                      o &&
                      (0, Z.jsx)(`div`, {
                        className: `absolute inset-0 bg-card/60 flex items-center justify-center z-10`,
                        children: (0, Z.jsx)(J, {
                          className: `w-6 h-6 text-cyan-400 animate-spin`,
                        }),
                      }),
                    (0, Z.jsx)(`div`, {
                      className: `absolute top-1 right-1`,
                      children:
                        t && !o
                          ? (0, Z.jsx)(`div`, {
                              className: `w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white font-bold`,
                              children: `✓`,
                            })
                          : n
                            ? (0, Z.jsx)(`div`, {
                                className: `w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] text-white font-bold`,
                                children: `½`,
                              })
                            : (0, Z.jsx)(`div`, {
                                className: `w-4 h-4 rounded-full bg-muted-foreground/40`,
                              }),
                    }),
                    !t &&
                      (0, Z.jsxs)(`div`, {
                        className: `absolute inset-0 flex flex-col items-center justify-center p-1 bg-card/60`,
                        children: [
                          o
                            ? (0, Z.jsx)(J, {
                                className: `w-5 h-5 text-cyan-400 animate-spin`,
                              })
                            : (0, Z.jsx)(S, {
                                className: `w-5 h-5 text-muted-foreground`,
                              }),
                          (0, Z.jsx)(`span`, {
                            className: `text-[8px] text-foreground/80 text-center truncate w-full mt-1 px-1`,
                            children: e.asset_name?.replace(/_/g, ` `),
                          }),
                          n &&
                            (0, Z.jsx)(`span`, {
                              className: `text-[7px] text-yellow-400 mt-0.5`,
                              children: `has concept`,
                            }),
                        ],
                      }),
                    t &&
                      (0, Z.jsx)(`div`, {
                        className: `absolute inset-0 bg-card/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1`,
                        children: (0, Z.jsx)(`span`, {
                          className: `text-[9px] text-white truncate w-full`,
                          children: e.asset_name?.replace(/_/g, ` `),
                        }),
                      }),
                  ],
                },
                e.id || e.asset_name,
              );
            }),
          })
        : (0, Z.jsxs)(`div`, {
            className: `py-8 text-center`,
            children: [
              (0, Z.jsx)(U, {
                className: `h-8 w-8 text-muted-foreground/60 mx-auto mb-2`,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `No 3D assets planned.`,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-xs text-muted-foreground/60 mt-1`,
                children: `Add assets from the Assets tab.`,
              }),
            ],
          }),
      d &&
        !d.model_3d_path &&
        (0, Z.jsxs)(`div`, {
          className: `p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg space-y-2`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-sm text-foreground/80 font-medium`,
                  children: d.asset_name?.replace(/_/g, ` `),
                }),
                (0, Z.jsx)(x, {
                  variant: `ghost`,
                  size: `sm`,
                  onClick: () => f(null),
                  className: `h-6 w-6 p-0 text-muted-foreground hover:text-foreground/80`,
                  children: (0, Z.jsx)(li, { className: `h-3 w-3` }),
                }),
              ],
            }),
            d.description &&
              (0, Z.jsx)(`p`, {
                className: `text-xs text-muted-foreground line-clamp-2`,
                children: d.description,
              }),
            (0, Z.jsx)(`div`, {
              className: `flex gap-2`,
              "data-tour": `tour-generate`,
              children: (0, Z.jsx)(an, {
                onClick: () => G(d),
                disabled: T.has(d.asset_name),
                className: `w-full`,
                cost: z,
                label: `Generate 3D Model`,
                icon: (0, Z.jsx)(S, { className: `h-4 w-4` }),
                isLoading: T.has(d.asset_name),
                loadingText: `Generating...`,
                checkBalance: !0,
              }),
            }),
          ],
        }),
      O &&
        ee > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg`,
          children: [
            (0, Z.jsx)(ei, { className: `h-3 w-3 text-yellow-400` }),
            (0, Z.jsx)(`span`, {
              className: `text-xs text-yellow-400`,
              children:
                ee === 1
                  ? `~2-3 min`
                  : `~2-3 min per asset (${ee * 2}-${ee * 3} min total)`,
            }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          !O &&
            M > 0 &&
            (0, Z.jsx)(an, {
              onClick: ne,
              className: `w-full`,
              disabled: t,
              cost: P?.total ?? null,
              maxCost: P?.maxTotal ?? null,
              label:
                A > 0 ? `Generate Remaining (${M})` : `Generate All 3D Assets`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              isLoading: O,
              loadingText: `Generating 3D models...`,
              tooltip: `Generate 3D models for ${M} assets`,
              checkBalance: !0,
            }),
          !O &&
            A > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, Z.jsx)(an, {
                  variant: `outline`,
                  onClick: ie,
                  className: `flex-1`,
                  disabled:
                    !l?.model_3d_path ||
                    (!!l?.asset_name && T.has(l.asset_name)),
                  cost: L,
                  label: `Regen Selected`,
                  icon: (0, Z.jsx)(xn, { className: `h-4 w-4` }),
                  checkBalance: !0,
                }),
                (0, Z.jsx)(an, {
                  variant: `outline`,
                  onClick: re,
                  className: `flex-1`,
                  disabled: t,
                  cost: F?.total ?? null,
                  maxCost: F?.maxTotal ?? null,
                  label: `Regen All`,
                  icon: (0, Z.jsx)(xn, { className: `h-4 w-4` }),
                  tooltip: `Regenerate all ${j} 3D models`,
                  checkBalance: !0,
                }),
              ],
            }),
          O &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                ee === 1 ? `Generating 3D model...` : `Generating 3D models...`,
              ],
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `pt-4 border-t border-border`,
        children: [
          (0, Z.jsx)(`label`, {
            className: `text-xs font-medium text-muted-foreground mb-2 block`,
            children: `Add New Asset`,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, Z.jsx)(`input`, {
                type: `text`,
                value: _,
                onChange: (e) => {
                  (v(e.target.value), w(null));
                },
                placeholder: `e.g., Treasure chest prop, futuristic door...`,
                className: `flex-1 h-10 bg-card border border-border rounded-lg px-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors`,
                disabled: t || y,
                onKeyDown: (e) => e.key === `Enter` && W(),
              }),
              (0, Z.jsx)(x, {
                size: `sm`,
                onClick: W,
                disabled: !_.trim() || t || y,
                className: `h-10 px-4`,
                children: y
                  ? (0, Z.jsx)(J, { className: `w-4 h-4 animate-spin` })
                  : (0, Z.jsx)(ni, { className: `w-4 h-4` }),
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[10px] text-muted-foreground/50 mt-1.5`,
            children: `Press Enter to generate or add details`,
          }),
          C &&
            (0, Z.jsx)(`p`, {
              className: `text-xs text-red-400 mt-1`,
              children: C,
            }),
        ],
      }),
    ],
  });
}
