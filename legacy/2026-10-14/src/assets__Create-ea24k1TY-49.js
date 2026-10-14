// assets__Create-ea24k1TY 49 — classname
// Lines 15539-15952 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Jf({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  codingFeed: o,
  nodeProgress: s,
  onLocalCodingActivity: c,
}) {
  let l = i ? i.split(`/`).pop() || i : ``,
    [u, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(new Map()),
    g = e.state === `complete` || e.state === `outdated`,
    _ = e.state === `in-progress`,
    v = e.state === `available`,
    y = (0, X.useMemo)(
      () =>
        e.id === `3d-drop-in`
          ? `3d`
          : e.id === `sfx-drop-in`
            ? `sfx`
            : e.id === `music-drop-in`
              ? `music`
              : `3d`,
      [e.id],
    ),
    b = (0, X.useMemo)(() => {
      let e = a?.assets || [];
      if (y === `3d`) {
        let t = e.filter((e) => Bt.includes(e.asset_type)),
          n = r.filter(
            (e) =>
              e.type === `3d` ||
              e.name?.endsWith(`.glb`) ||
              e.name?.endsWith(`.gltf`),
          );
        return t
          .map((e) => {
            let t = n.find(
                (t) =>
                  t.asset_name === e.asset_name ||
                  t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
              ),
              i = r.find(
                (t) =>
                  t.type === `image` &&
                  (t.asset_name === e.asset_name ||
                    t.name?.includes(e.asset_name?.replace(/\s+/g, `_`))),
              ),
              a = m.get(e.asset_name) || (g ? `complete` : `pending`);
            return {
              id: e.asset_name || `asset-${e.asset_type}`,
              asset_name: e.asset_name,
              asset_type: e.asset_type,
              description: e.description || ``,
              concept_art_path: i?.name || e.concept_art_path,
              model_3d_path: t?.name || e.model_3d_path,
              status: t ? `3d` : `planned`,
              integrationStatus: a,
            };
          })
          .filter((e) => e.model_3d_path);
      }
      if (y === `sfx` || y === `music`) {
        let e = y === `sfx` ? `sfx_audio` : `music_audio`;
        return r
          .filter((t) => {
            if (t.asset_type) return t.asset_type === e;
            let n = (t.name || ``).toLowerCase();
            return y === `sfx`
              ? n.endsWith(`.wav`) ||
                  n.endsWith(`.mp3`) ||
                  n.includes(`sfx`) ||
                  n.includes(`sound`)
              : n.endsWith(`.mp3`) ||
                  n.endsWith(`.ogg`) ||
                  n.includes(`music`) ||
                  n.includes(`bgm`);
          })
          .map((e) => {
            let t =
              m.get(e.asset_name || e.name) || (g ? `complete` : `pending`);
            return {
              id: e.asset_name || e.name,
              asset_name: e.asset_name || e.name,
              asset_type: y === `sfx` ? `audio_sfx` : `audio_music`,
              description: e.description || ``,
              status: `planned`,
              integrationStatus: t,
            };
          });
      }
      return [];
    }, [a?.assets, r, y, g, m]),
    S = b.filter((e) => e.integrationStatus === `complete`).length,
    C = b.length,
    w = un(e.id),
    T = tn(w),
    E = !!w?.locked,
    D = () => {
      n?.(
        e.id,
        `Integrate all ${y === `3d` ? `3D` : y.toUpperCase()} assets into the game`,
      );
    },
    O = () => {
      n?.(
        e.id,
        `Re-integrate all ${y === `3d` ? `3D` : y.toUpperCase()} assets`,
      );
    },
    k = (t) => {
      (n?.(e.id, `Integrate ${t.asset_name} into the game`),
        h((e) => {
          let n = new Map(e);
          return (n.set(t.asset_name, `in-progress`), n);
        }),
        j());
    },
    A = (e) => {
      (d(e), p(!0));
    },
    j = () => {
      (p(!1), d(null));
    },
    M = u?.model_3d_path ? jr.getAssetUrl(i, u.model_3d_path, !1) : null,
    N = (e) => (0, Z.jsx)(Ute, { status: e.integrationStatus || `pending` }),
    P = (e) => {
      switch (e) {
        case `complete`:
          return (0, Z.jsx)(fi, { className: `h-4 w-4 text-green-400` });
        case `error`:
          return (0, Z.jsx)(U, { className: `h-4 w-4 text-red-400` });
        case `in-progress`:
          return (0, Z.jsx)(J, {
            className: `h-4 w-4 text-primary animate-spin`,
          });
        default:
          return (0, Z.jsx)(`div`, {
            className: `w-4 h-4 rounded-full bg-muted-foreground/40`,
          });
      }
    },
    F = () => {
      switch (y) {
        case `3d`:
          return `3D Assets`;
        case `sfx`:
          return `Sound Effects`;
        case `music`:
          return `Music Tracks`;
        default:
          return `Assets`;
      }
    };
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-5`,
    children: [
      C > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex items-center justify-end`,
          children: (0, Z.jsxs)(`span`, {
            className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded`,
            children: [S, `/`, C, ` integrated`],
          }),
        }),
      g &&
        C > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-3 p-2 bg-secondary/50 rounded-lg`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1.5 text-sm`,
              children: [
                (0, Z.jsx)(fi, { className: `h-4 w-4 text-green-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-green-400`,
                  children: S,
                }),
              ],
            }),
            (0, Z.jsxs)(`span`, {
              className: `text-xs text-muted-foreground/60 ml-auto`,
              children: [C, ` `, F().toLowerCase(), ` total`],
            }),
          ],
        }),
      y === `3d`
        ? (0, Z.jsx)(il, {
            assets: b,
            sessionDir: i,
            onAssetClick: A,
            renderOverlay: N,
            columns: 3,
            emptyMessage: `No ${F().toLowerCase()} available for integration.`,
            selectedAssetId: u?.id,
          })
        : (0, Z.jsx)(`div`, {
            className: `space-y-2`,
            children:
              b.length === 0
                ? (0, Z.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground/60 text-center py-4`,
                    children: [
                      `No `,
                      F().toLowerCase(),
                      ` available for integration.`,
                    ],
                  })
                : b.map((e) =>
                    (0, Z.jsxs)(
                      `div`,
                      {
                        onClick: () => A(e),
                        className: `
                  flex items-center gap-3 p-2 rounded-lg border cursor-pointer
                  ${e.integrationStatus === `complete` ? `bg-green-500/5 border-green-500/20` : e.integrationStatus === `error` ? `bg-red-500/5 border-red-500/20` : `bg-secondary/30 border-border hover:border-primary/30`}
                `,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `px-1.5 py-0.5 text-[10px] bg-primary/20 text-primary rounded shrink-0`,
                            children: y === `sfx` ? `SFX` : `Music`,
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `flex-1 min-w-0`,
                            children: (0, Z.jsx)(`div`, {
                              className: `text-sm text-foreground/80 truncate`,
                              children: e.asset_name?.replace(/_/g, ` `),
                            }),
                          }),
                          P(e.integrationStatus),
                        ],
                      },
                      e.id,
                    ),
                  ),
          }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 space-y-2`,
        children: [
          E && (v || g) && C > 0 && (0, Z.jsx)(rl, { compact: !0 }),
          v &&
            C > 0 &&
            (0, Z.jsx)(an, {
              onClick: D,
              className: `w-full`,
              disabled: t || E,
              cost: T,
              label: `Integrate All ${F()}`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              isLoading: _,
              loadingText: `Integrating assets...`,
              tooltip: `Integrate ${C} ${F().toLowerCase()} into the game`,
              checkBalance: !0,
            }),
          g &&
            (0, Z.jsx)(an, {
              variant: `outline`,
              onClick: O,
              className: `w-full`,
              disabled: t || E,
              cost: T,
              label: `Re-integrate All`,
              icon: (0, Z.jsx)(xn, { className: `h-4 w-4` }),
              tooltip: `Re-integrate all ${C} ${F().toLowerCase()}`,
              checkBalance: !0,
            }),
          _ &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Z.jsx)(Ic, {
                  sessionId: l,
                  isRunning: _,
                  onLocalActivity: c,
                }),
                (0, Z.jsx)(Zc, { feed: o, progress: s, running: _ }),
              ],
            }),
        ],
      }),
      y === `3d` &&
        u &&
        (M
          ? (0, Z.jsxs)(ine, {
              isOpen: f,
              onClose: j,
              modelUrl: M,
              title: u.asset_name?.replace(/_/g, ` `) || `Asset`,
              subtitle: `Status: ${u.integrationStatus || `pending`}`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-4`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-xs text-muted-foreground`,
                      children: `Integration Status:`,
                    }),
                    P(u.integrationStatus),
                    (0, Z.jsx)(`span`, {
                      className: `text-sm ${u.integrationStatus === `complete` ? `text-green-400` : u.integrationStatus === `error` ? `text-red-400` : `text-foreground/80`}`,
                      children:
                        u.integrationStatus === `complete`
                          ? `Integrated`
                          : u.integrationStatus === `error`
                            ? `Failed`
                            : u.integrationStatus === `in-progress`
                              ? `In Progress`
                              : `Pending`,
                    }),
                  ],
                }),
                (0, Z.jsx)(x, {
                  onClick: () => k(u),
                  className: `w-full`,
                  disabled: t || E || u.integrationStatus === `in-progress`,
                  children:
                    u.integrationStatus === `complete`
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(xn, { className: `h-4 w-4 mr-2` }),
                            `Re-integrate This Asset`,
                          ],
                        })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(Yr, { className: `h-4 w-4 mr-2` }),
                            `Integrate This Asset`,
                          ],
                        }),
                }),
              ],
            })
          : (0, Z.jsx)(ane, {
              isOpen: f,
              onClose: j,
              title: u.asset_name?.replace(/_/g, ` `) || `Asset`,
              message: `3D model not found for this asset.`,
            })),
      y !== `3d` &&
        u &&
        (0, Z.jsx)(`div`, {
          className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4`,
          onClick: j,
          children: (0, Z.jsxs)(`div`, {
            className: `bg-card rounded-xl border border-border max-w-sm w-full overflow-hidden`,
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
                    onClick: j,
                    className: `text-muted-foreground hover:text-white -mr-2`,
                    children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `p-4 space-y-4`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      P(u.integrationStatus),
                      (0, Z.jsx)(`span`, {
                        className: `text-sm text-foreground/80`,
                        children:
                          u.integrationStatus === `complete`
                            ? `Integrated`
                            : u.integrationStatus === `error`
                              ? `Failed`
                              : u.integrationStatus === `in-progress`
                                ? `In Progress`
                                : `Pending`,
                      }),
                    ],
                  }),
                  (0, Z.jsx)(x, {
                    onClick: () => k(u),
                    className: `w-full`,
                    disabled: t || E || u.integrationStatus === `in-progress`,
                    children:
                      u.integrationStatus === `complete`
                        ? (0, Z.jsxs)(Z.Fragment, {
                            children: [
                              (0, Z.jsx)(xn, { className: `h-4 w-4 mr-2` }),
                              `Re-integrate`,
                            ],
                          })
                        : (0, Z.jsxs)(Z.Fragment, {
                            children: [
                              (0, Z.jsx)(Yr, { className: `h-4 w-4 mr-2` }),
                              `Integrate`,
                            ],
                          }),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
