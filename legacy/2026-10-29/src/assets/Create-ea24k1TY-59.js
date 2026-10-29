// Create-ea24k1TY 59 — classname
// Lines 18503-18812 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Tp({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onOpenEditorTab: o,
}) {
  let [s, c] = (0, X.useState)(new Map()),
    [l, u] = (0, X.useState)(null),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(0),
    [y, b] = (0, X.useState)(new Map()),
    S = i?.split(`/`).pop() || i,
    C = e.state === `complete` || e.state === `outdated`,
    w = e.state === `in-progress`,
    T = e.state === `available`,
    E = (0, X.useMemo)(() => {
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
            i = r.find(
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
            concept_art_path: i?.name || e.concept_art_path,
            model_3d_path: n?.name || e.model_3d_path,
            modified: n?.modified,
            status: n ? `3d` : `planned`,
          };
        })
        .filter((e) => e.model_3d_path);
    }, [a?.assets, r]),
    D = Array.from(s.values()).filter((e) => e.status === `aligned`).length,
    O = E.length,
    k = tn(un(e.id));
  (0, X.useEffect)(() => {
    !l && E.length > 0 && (u(E[0]), f(!0));
  }, [E, l]);
  let A = (0, X.useCallback)(
      (e) => {
        let t = s.get(e);
        return t ? t.rotation : [0, 0, 0];
      },
      [s],
    ),
    j = () => {
      n?.(e.id, `Automatically align all 3D assets to face forward`);
    },
    M = () => {
      n?.(
        e.id,
        `Mark orientation clinic as complete — assets have been manually aligned`,
        { chatOnly: !0 },
      );
    },
    N = (e) => {
      (u(e), f(!0), m(!1));
    },
    P = (e, t) => {
      if (!l) return;
      let n = [...A(l.id)];
      switch (e) {
        case `X`:
          n[0] = (n[0] + t) % 360;
          break;
        case `Y`:
          n[1] = (n[1] + t) % 360;
          break;
        case `Z`:
          n[2] = (n[2] + t) % 360;
          break;
      }
      c((e) => {
        let t = new Map(e);
        return (
          t.set(l.id, { assetId: l.id, rotation: n, status: `pending` }),
          t
        );
      });
    },
    F = () => {
      l &&
        c((e) => {
          let t = new Map(e);
          return (
            t.set(l.id, {
              assetId: l.id,
              rotation: [0, 0, 0],
              status: `pending`,
            }),
            t
          );
        });
    },
    I = async () => {
      if (!l || !l.model_3d_path || !S) return;
      let e = A(l.id);
      g(!0);
      try {
        let t = await jr.transformAsset(
          S,
          l.model_3d_path,
          l.asset_name || l.id,
          { x: e[0], y: e[1], z: e[2] },
          !0,
        );
        t.success
          ? (t.transformed_path &&
              u((e) =>
                e && e.id === l.id
                  ? { ...e, model_3d_path: t.transformed_path }
                  : e,
              ),
            c((e) => {
              let t = new Map(e);
              return (
                t.set(l.id, {
                  assetId: l.id,
                  rotation: [0, 0, 0],
                  status: `aligned`,
                }),
                t
              );
            }),
            f(!0),
            b((e) => {
              let t = new Map(e);
              return (t.set(l.id, Date.now()), t);
            }),
            v((e) => e + 1),
            Hr.success(
              `Orientation saved for ${l.asset_name?.replace(/_/g, ` `) || `asset`}`,
            ))
          : Hr.error(t.error || `Failed to save orientation`);
      } catch (e) {
        (console.error(`Error saving orientation:`, e),
          Hr.error(`Failed to save orientation`));
      } finally {
        g(!1);
      }
    },
    L = l ? (y.get(l.id) ?? l.modified ?? 0) : 0,
    R = l?.model_3d_path
      ? `${jr.getAssetUrl(i, l.model_3d_path, !1)}?v=${L}&refresh=${_}`
      : null,
    z = l ? A(l.id) : [0, 0, 0];
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `relative aspect-square rounded-lg border border-border bg-card overflow-hidden`,
        children: [
          O > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `absolute top-2 right-2 z-10 bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-muted-foreground`,
              children: [D, `/`, O, ` aligned`],
            }),
          d &&
            !p &&
            R &&
            (0, Z.jsx)(`div`, {
              className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
              children: (0, Z.jsx)(J, {
                className: `h-8 w-8 text-primary animate-spin`,
              }),
            }),
          p || !R
            ? (0, Z.jsxs)(`div`, {
                className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                children: [
                  (0, Z.jsx)(U, { className: `h-8 w-8 mb-2` }),
                  (0, Z.jsx)(`p`, {
                    className: `text-sm text-center px-4`,
                    children: p
                      ? `Failed to load model`
                      : `No 3D assets available yet`,
                  }),
                ],
              })
            : (0, Z.jsx)(
                one,
                {
                  modelUrl: R,
                  rotation: z,
                  onLoad: () => f(!1),
                  onError: () => {
                    (f(!1), m(!0));
                  },
                },
                R,
              ),
          l &&
            (0, Z.jsx)(`div`, {
              className: `absolute top-2 left-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white`,
              children: l.asset_name?.replace(/_/g, ` `),
            }),
          (0, Z.jsx)(`div`, {
            className: `absolute bottom-2 left-2 right-2 bg-card/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-muted-foreground text-center`,
            children: `Rotate to face the arrow (Z- = forward)`,
          }),
        ],
      }),
      R &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-3`,
          children: [
            (0, Z.jsx)(Tl, {
              rotation: z,
              onRotate: P,
              onReset: F,
              disabled: d || p,
            }),
            (0, Z.jsx)(x, {
              onClick: I,
              className: `w-full`,
              variant: `outline`,
              disabled: d || p || h,
              children: h
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(J, { className: `h-4 w-4 mr-2 animate-spin` }),
                      `Saving...`,
                    ],
                  })
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(ve, { className: `h-4 w-4 mr-2` }),
                      `Save Orientation`,
                    ],
                  }),
            }),
          ],
        }),
      (0, Z.jsx)(il, {
        assets: E,
        sessionDir: i,
        onAssetClick: N,
        renderOverlay: (e) =>
          (0, Z.jsx)(al, {
            status: s.get(e.id)?.status === `aligned` ? `complete` : `pending`,
          }),
        columns: 4,
        emptyMessage: `No 3D assets available. Generate 3D assets first.`,
        selectedAssetId: l?.id,
      }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (T || C) &&
            O > 0 &&
            (0, Z.jsx)(an, {
              onClick: j,
              className: `w-full`,
              disabled: t,
              cost: k,
              label: `Auto-Align All Assets`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              isLoading: w,
              loadingText: `Running automatic alignment...`,
              tooltip: `Auto-align ${O} 3D assets to face forward`,
              checkBalance: !0,
            }),
          T &&
            O > 0 &&
            (0, Z.jsxs)(x, {
              onClick: M,
              className: `w-full`,
              variant: `outline`,
              disabled: t || w,
              children: [
                (0, Z.jsx)(ve, { className: `h-4 w-4 mr-2` }),
                `Mark Complete`,
              ],
            }),
          w &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Running automatic alignment...`,
              ],
            }),
        ],
      }),
    ],
  });
}
