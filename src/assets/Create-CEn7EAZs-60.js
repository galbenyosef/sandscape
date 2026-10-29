// Create-CEn7EAZs 60 — classname
// Lines 18991-19273 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Jne({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onOpenEditorTab: o,
}) {
  let [s, c] = (0, X.useState)(null),
    [l, u] = (0, X.useState)(!1),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!0),
    [h, g] = (0, X.useState)(!0),
    [_, v] = (0, X.useState)(null),
    y = e.state === `complete` || e.state === `outdated`,
    b = e.state === `in-progress`,
    x = e.state === `available`,
    S = (0, X.useMemo)(() => {
      let e = (a?.assets || []).filter((e) => Bt.includes(e.asset_type)),
        t = r.filter(
          (e) =>
            e.type === `3d` ||
            e.name?.endsWith(`.glb`) ||
            e.name?.endsWith(`.gltf`),
        );
      return e
        .map((e) => {
          let n = t.find(
              (t) =>
                t.asset_name === e.asset_name ||
                t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
            ),
            i = n?.collision_mesh_path,
            a = i
              ? null
              : t.find((t) =>
                  t.name?.includes(
                    `${e.asset_name?.replace(/\s+/g, `_`)}_collision`,
                  ),
                ),
            o = r.find(
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
            concept_art_path: o?.name || e.concept_art_path,
            model_3d_path: n?.name || e.model_3d_path,
            collision_mesh_path: i || a?.name,
            status: n ? `3d` : `planned`,
          };
        })
        .filter((e) => e.model_3d_path);
    }, [a?.assets, r]),
    C = S.filter((e) => e.collision_mesh_path).length,
    w = S.length,
    T = Ua(e.id);
  (0, X.useEffect)(() => {
    !s && S.length > 0 && c(S[0]);
  }, [S, s]);
  let E = i?.split(`/`).pop() || i || ``,
    D = za(T?.id ?? null, E, {}),
    O = za(T?.id ?? null, E, { regenerate: !0 }),
    k = (s && (s.id || s.asset_name)) || ``,
    A = za(k ? (T?.id ?? null) : null, E, { target: k, regenerate: !0 }),
    j = () => {
      n?.(e.id, `Generate collision meshes for all 3D assets`);
    },
    M = () => {
      n?.(e.id, `Regenerate all collision meshes`, {
        params: { regenerate: !0 },
      });
    },
    N = (0, X.useCallback)(async () => {
      if (!s || !E) return;
      let e = s.id || s.asset_name;
      v(e);
      try {
        let t = await Sn(E, e, `collision`, { regenerate: !0 });
        t.success
          ? q.success(
              `Collision mesh generated for ${s.asset_name?.replace(/_/g, ` `)}`,
            )
          : q.error(t.error || `Failed to generate collision mesh`);
      } catch (e) {
        (console.error(`Failed to generate collision mesh:`, e),
          q.error(`Failed to generate collision mesh`));
      } finally {
        v(null);
      }
    }, [s, E]),
    P = (e) => {
      (c(e), u(!0), f(!1));
    },
    F = s?.model_3d_path ? vr.getAssetUrl(i, s.model_3d_path, !1) : null,
    I = s?.collision_mesh_path
      ? vr.getAssetUrl(i, s.collision_mesh_path, !1)
      : void 0;
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `relative aspect-square rounded-lg border border-border bg-card overflow-hidden`,
        children: [
          w > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `absolute top-2 right-2 z-10 bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-muted-foreground`,
              children: [C, `/`, w, ` have collision`],
            }),
          l &&
            !d &&
            F &&
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
              children: (0, Z.jsx)(J, {
                className: `h-8 w-8 text-primary animate-spin`,
              }),
            }),
          d || !F
            ? (0, Z.jsxs)(`div`, {
                className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                children: [
                  (0, Z.jsx)(te, { className: `h-8 w-8 mb-2` }),
                  (0, Z.jsx)(`p`, {
                    className: `text-sm text-center px-4`,
                    children: d
                      ? `Failed to load 3D model`
                      : `No 3D assets available yet`,
                  }),
                ],
              })
            : (0, Z.jsx)(
                Ul,
                {
                  mainModelUrl: F,
                  collisionMeshUrl: I,
                  showSolid: p,
                  showWireframe: h,
                  onLoad: () => u(!1),
                  onError: () => {
                    (u(!1), f(!0));
                  },
                },
                F,
              ),
          s &&
            (0, Z.jsx)(`div`, {
              className: `absolute top-2 left-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white`,
              children: s.asset_name?.replace(/_/g, ` `),
            }),
        ],
      }),
      F &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-4 px-1`,
          children: [
            (0, Z.jsxs)(`label`, {
              className: `flex items-center gap-2 text-xs text-foreground/80 cursor-pointer`,
              children: [
                (0, Z.jsx)(`button`, {
                  onClick: () => m(!p),
                  className: `w-5 h-5 rounded flex items-center justify-center ${p ? `bg-primary text-white` : `bg-secondary text-muted-foreground`}`,
                  children: p
                    ? (0, Z.jsx)(Yr, { className: `h-3 w-3` })
                    : (0, Z.jsx)(G, { className: `h-3 w-3` }),
                }),
                `Model`,
              ],
            }),
            (0, Z.jsxs)(`label`, {
              className: `flex items-center gap-2 text-xs text-foreground/80 cursor-pointer`,
              children: [
                (0, Z.jsx)(`button`, {
                  onClick: () => g(!h),
                  className: `w-5 h-5 rounded flex items-center justify-center ${h ? `bg-cyan-500 text-white` : `bg-secondary text-muted-foreground`}`,
                  children: h
                    ? (0, Z.jsx)(Yr, { className: `h-3 w-3` })
                    : (0, Z.jsx)(G, { className: `h-3 w-3` }),
                }),
                `Collision`,
              ],
            }),
            !I &&
              (0, Z.jsx)(`span`, {
                className: `text-xs text-muted-foreground/60 ml-auto`,
                children: `No collision mesh`,
              }),
          ],
        }),
      (0, Z.jsx)(ol, {
        assets: S,
        sessionDir: i,
        onAssetClick: P,
        renderOverlay: (e) =>
          (0, Z.jsx)(sl, {
            status: e.collision_mesh_path ? `generated` : `pending`,
          }),
        columns: 4,
        emptyMessage: `No 3D assets available. Generate 3D assets first.`,
        selectedAssetId: s?.id,
      }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          x &&
            w > 0 &&
            (0, Z.jsx)($t, {
              onClick: j,
              className: `w-full`,
              disabled: t,
              cost: D,
              label: `Generate All Physics Meshes`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: b,
              loadingText: `Generating physics meshes...`,
              tooltip: `Generate collision meshes for ${w} assets`,
              checkBalance: !0,
            }),
          x &&
            s &&
            (0, Z.jsx)($t, {
              variant: `outline`,
              onClick: N,
              className: `w-full`,
              disabled: t || !!_,
              cost: A,
              label: _
                ? `Generating...`
                : `Generate for "${s.asset_name?.replace(/_/g, ` `) || `Selected`}"`,
              icon: _
                ? (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` })
                : (0, Z.jsx)(me, { className: `h-4 w-4` }),
              checkBalance: !0,
            }),
          y &&
            (0, Z.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, Z.jsx)($t, {
                  variant: `outline`,
                  onClick: N,
                  className: `flex-1`,
                  disabled: t || !s || !!_,
                  cost: A,
                  label: _ ? `Generating...` : `Regen Selected`,
                  icon: _
                    ? (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` })
                    : (0, Z.jsx)(ln, { className: `h-4 w-4` }),
                  checkBalance: !0,
                }),
                (0, Z.jsx)($t, {
                  variant: `outline`,
                  onClick: M,
                  className: `flex-1`,
                  disabled: t,
                  cost: O,
                  label: `Regen All`,
                  icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
                  tooltip: `Regenerate all ${w} collision meshes`,
                  checkBalance: !0,
                }),
              ],
            }),
          b &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Generating physics meshes...`,
              ],
            }),
        ],
      }),
    ],
  });
}
