// Create-ea24k1TY 33 — asset_name
// Lines 10352-10809 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Zu({
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
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(null),
    [v, y] = (0, X.useState)(null),
    [b, x] = (0, X.useState)(!1),
    [S, C] = (0, X.useState)(!1),
    w = (0, X.useRef)(e.state),
    T = (0, X.useRef)(null),
    E = (0, X.useRef)(null),
    [D, O] = (0, X.useState)(3),
    k = a?.split(`/`).pop() || a || ``;
  ((0, X.useEffect)(() => {
    let e = T.current;
    if (!e || typeof ResizeObserver > `u`) return;
    let t = new ResizeObserver((e) => {
      let t = e[0]?.contentRect.width ?? 0;
      t > 0 && O(t < Xu ? 2 : 3);
    });
    return (t.observe(e), () => t.disconnect());
  }, []),
    (0, X.useEffect)(() => {
      u && E.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    }, [u]));
  let A = (0, X.useMemo)(() => {
      let e = (o?.assets || []).filter((e) => Yu(e.asset_type));
      return e.length === 0
        ? i
            .filter((e) => Yu(e.asset_type))
            .map((e) => ({ ...e, hasArt: !!e.concept_art_path }))
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
              hasArt: !!(t?.concept_art_path || e.concept_art_path),
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
    j = (0, X.useMemo)(() => A.filter((e) => e.hasArt), [A]),
    M = A.length,
    N = e.state === `complete` || e.state === `outdated`,
    P = e.state === `in-progress`;
  (0, X.useEffect)(() => {
    let t = w.current;
    ((w.current = e.state),
      t === `in-progress` && e.state !== `in-progress` && C(!1));
  }, [e.state]);
  let F = !!e.workflowId && e.activeWorkflow === e.workflowId,
    I = P && (S || F),
    L = P && !I,
    R = (0, X.useMemo)(() => A.filter((e) => !e.hasArt).length, [A]),
    z = un(e.id),
    B = N ? M : R,
    V = N || j.length > 0,
    H = nn(z?.id ?? null, k, V ? { regenerate: !0 } : {}),
    ee = fn(z?.id ?? null, k, { missing_only: !0 }),
    W = (0, X.useCallback)(
      (e) =>
        i.find((t) => t.asset_name === e.asset_name)?.id || e.asset_name || ``,
      [i],
    ),
    G = (0, X.useMemo)(() => A.find((e) => e.asset_name === u) ?? null, [A, u]),
    te = rn(`two_d`, k, G ? W(G) : null, { regenerate: !0 }),
    K = G?.id ?? null,
    ne = () => {
      (x(!1),
        C(!0),
        V
          ? r?.(e.id, `Regenerate 2D art for all planned 2D assets`, {
              params: { regenerate: !0 },
            })
          : r?.(e.id, `Generate 2D art for all planned 2D assets`));
    },
    re = () => {
      (C(!0),
        r?.(e.id, `Generate 2D art for assets that are missing it`, {
          params: { missing_only: !0 },
        }));
    },
    ie = (0, X.useCallback)(
      async (e, t) => {
        if (k) {
          (p(!0), h(null));
          try {
            let n = await jr.addAsset(k, {
              asset_name: e,
              asset_type: t || `sprite_2d`,
              description: ``,
              priority: `medium`,
              format: `png`,
            });
            if (!n.success) throw Error(n.error || `Failed to add asset`);
            (s && n.asset && s({ assets: [...(o?.assets || []), n.asset] }),
              d(n.asset?.asset_name ?? e),
              y(null));
          } catch (e) {
            h(e instanceof Error ? e.message : `Failed to add asset`);
          } finally {
            p(!1);
          }
        }
      },
      [k, o?.assets, s],
    ),
    ae = (0, X.useCallback)(
      async (e, t) => {
        if (!k) return;
        let n = W(e);
        (C(!1), _(e.asset_name), y(null));
        try {
          let e = await Fn(k, n, `two_d`, {
            regenerate: !0,
            ...(t ? { feedback: t } : {}),
          });
          if (!e.success)
            throw Error(e.error || e.error_code || `Failed to generate 2D art`);
        } catch (e) {
          (console.error(`Failed to generate 2D art:`, e),
            y(e instanceof Error ? e.message : `Failed to generate 2D art`));
        } finally {
          _(null);
        }
      },
      [k, W],
    ),
    oe = (0, X.useCallback)(
      (e, t) => {
        if (!s) return;
        let n = o?.assets;
        n &&
          s({
            assets: n.map((n) => (n.asset_name === e ? { ...n, ...t } : n)),
          });
      },
      [o?.assets, s],
    ),
    se = (0, X.useCallback)(
      async (e) => {
        if (!k || !G || !K) return;
        let t = await jr.updateAsset(k, K, { asset_name: e });
        if (!t.success) throw Error(t.error || `Rename failed`);
        (oe(G.asset_name, { asset_name: e }), d(e));
      },
      [k, G, K, oe],
    ),
    q = (0, X.useCallback)(
      async (e) => {
        if (!k || !G || !K) return;
        let t = await jr.updateAsset(k, K, { asset_type: e });
        if (!t.success) throw Error(t.error || `Could not change the kind`);
        oe(G.asset_name, { asset_type: e });
      },
      [k, G, K, oe],
    ),
    ce = (0, X.useCallback)(
      async (e) => {
        if (!k || !G || !K) return;
        let t = await jr.updateAsset(k, K, { description: e });
        if (!t.success) throw Error(t.error || `Update failed`);
        oe(G.asset_name, { description: e });
      },
      [k, G, K, oe],
    ),
    le = (0, X.useCallback)(async () => {
      if (!k || !G || !K) return;
      let e = G.asset_name,
        t = await jr.deleteAsset(k, K);
      if (!t.success) {
        y(t.error || `Could not remove this asset`);
        return;
      }
      (s &&
        o?.assets &&
        s({ assets: o.assets.filter((t) => t.asset_name !== e) }),
        d(null),
        y(null));
    }, [k, G, K, o?.assets, s]),
    ue = (0, X.useCallback)(
      (e) =>
        !e.hasArt || !e.concept_art_path
          ? null
          : jr.getAssetUrl(a, e.concept_art_path, {
              version:
                e.concept_art_version ?? e.modified ?? e.last_updated ?? void 0,
            }),
      [a],
    ),
    de = (0, X.useMemo)(() => Uu(A), [A]),
    fe = Wu(de.length, A.length),
    pe = D === 2 ? `grid grid-cols-2 gap-2` : `grid grid-cols-3 gap-2`,
    me = (e) =>
      (0, Z.jsx)(
        Gu,
        {
          name: e.asset_name,
          assetType: e.asset_type,
          imageUrl: ue(e),
          showAlpha: Hu(e.asset_type),
          isSelected: u === e.asset_name,
          isGenerating: g === e.asset_name || !!l?.has(e.asset_name),
          onSelect: () => {
            (y(null), d((t) => (t === e.asset_name ? null : e.asset_name)));
          },
          checkerboard: Ml,
        },
        e.asset_name || e.name,
      );
  return (0, Z.jsxs)(`div`, {
    ref: T,
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsx)(Nu, { styleGuide: o?.styleGuide }),
      A.length === 0 &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(U, {
              className: `h-8 w-8 text-muted-foreground/30 mx-auto mb-2`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `No flat art planned yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground/50 mt-1`,
              children: `Add a sprite, icon, HUD piece or texture below.`,
            }),
          ],
        }),
      A.length > 0 &&
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between mb-2`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Flat Art`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `text-[10px] text-muted-foreground/60`,
                  children: [j.length, ` of `, M, ` drawn`],
                }),
              ],
            }),
            fe
              ? (0, Z.jsx)(`div`, {
                  className: `space-y-3`,
                  children: de.map((e) =>
                    (0, Z.jsxs)(
                      `div`,
                      {
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `text-[10px] text-muted-foreground/40 mb-1`,
                            children: e.label,
                          }),
                          (0, Z.jsx)(`div`, {
                            className: pe,
                            children: e.items.map(me),
                          }),
                        ],
                      },
                      e.type,
                    ),
                  ),
                })
              : (0, Z.jsx)(`div`, { className: pe, children: A.map(me) }),
          ],
        }),
      G &&
        (0, Z.jsx)(`div`, {
          ref: E,
          children: (0, Z.jsx)(
            Ku,
            {
              name: G.asset_name,
              assetType: G.asset_type,
              description: G.description || ``,
              imageUrl: ue(G),
              checkerboard: Ml,
              canEdit: !!K,
              cost: te,
              isGenerating: g === G.asset_name || !!l?.has(G.asset_name),
              generateDisabled: I,
              onRename: se,
              onChangeKind: q,
              onDescribe: ce,
              onGenerate: (e) => ae(G, e),
              onOpenEditor: c && K ? () => c(`image`, { assetId: K }) : void 0,
              onRemove: le,
              onClose: () => d(null),
              error: v,
            },
            G.asset_name,
          ),
        }),
      (0, Z.jsx)(qu, {
        disabled: t,
        isAdding: f,
        error: m,
        onAdd: ie,
        onDirty: () => h(null),
      }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 space-y-2 border-t border-border`,
        children: [
          !I &&
            R > 0 &&
            j.length > 0 &&
            (0, Z.jsx)(an, {
              onClick: re,
              className: `w-full`,
              disabled: t || L,
              title: L ? `Wait for the running redraw to finish` : void 0,
              variant: `default`,
              cost: ee,
              label: `Draw the missing ${R}`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: `Generate 2D art for ${R} assets without it`,
              checkBalance: !0,
            }),
          !I &&
            B > 0 &&
            V &&
            b &&
            (0, Z.jsxs)(`div`, {
              className: `flex flex-col gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-start gap-2`,
                  children: [
                    (0, Z.jsx)(Tn, {
                      className: `h-4 w-4 text-red-400 shrink-0 mt-0.5`,
                    }),
                    (0, Z.jsxs)(`span`, {
                      className: `text-xs text-red-300`,
                      children: [
                        `This redraws all `,
                        M,
                        ` pieces and replaces the art you have.`,
                      ],
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      onClick: () => x(!1),
                      className: `flex-1 min-h-[40px] px-3 text-xs text-muted-foreground hover:text-foreground/80 bg-card rounded-md transition-colors`,
                      children: `Cancel`,
                    }),
                    (0, Z.jsx)(an, {
                      onClick: ne,
                      className: `flex-1`,
                      disabled: t || L,
                      cost: H?.total ?? null,
                      maxCost: H?.maxTotal ?? null,
                      label: `Redraw all`,
                      icon: (0, Z.jsx)(xn, { className: `h-4 w-4` }),
                      checkBalance: !0,
                    }),
                  ],
                }),
              ],
            }),
          !I &&
            B > 0 &&
            V &&
            !b &&
            (0, Z.jsxs)(`button`, {
              onClick: () => x(!0),
              disabled: t || L,
              title: L ? `Wait for the running redraw to finish` : void 0,
              className: `w-full min-h-[40px] flex items-center justify-center gap-2 text-xs text-muted-foreground/60 hover:text-red-400 transition-colors disabled:opacity-50`,
              children: [
                (0, Z.jsx)(xn, { className: `h-3.5 w-3.5` }),
                `Redraw everything`,
              ],
            }),
          !I &&
            B > 0 &&
            !V &&
            (0, Z.jsx)(an, {
              onClick: ne,
              className: `w-full`,
              disabled: t || L,
              title: L ? `Wait for the running redraw to finish` : void 0,
              variant: `default`,
              cost: H?.total ?? null,
              maxCost: H?.maxTotal ?? null,
              label: `Draw all the flat art`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: `Generate 2D art for ${R} assets`,
              checkBalance: !0,
            }),
          !I &&
            B === 0 &&
            A.length > 0 &&
            (0, Z.jsx)(`div`, {
              className: `text-center text-xs text-muted-foreground/60 py-2`,
              children: `Every piece is drawn`,
            }),
          I &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-muted-foreground`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Drawing the flat art...`,
              ],
            }),
          (0, Z.jsxs)(`button`, {
            onClick: () => n(e.id),
            className: `w-full min-h-[40px] flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground/80 transition-colors`,
            children: [
              (0, Z.jsx)(si, { className: `h-4 w-4` }),
              `Discuss the art`,
            ],
          }),
        ],
      }),
    ],
  });
}
