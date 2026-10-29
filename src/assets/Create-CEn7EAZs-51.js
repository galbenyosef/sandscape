// Create-CEn7EAZs 51 — classname
// Lines 16178-16605 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function One({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  codingFeed: o,
  codingResult: s,
  nodeProgress: c,
  onLocalCodingActivity: l,
}) {
  let u = i ? i.split(`/`).pop() || i : ``,
    [d, f] = (0, X.useState)(null),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(new Map()),
    _ = e.state === `complete` || e.state === `outdated`,
    v = e.state === `in-progress`,
    y = e.state === `available`,
    b = (0, X.useMemo)(
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
    x = (0, X.useMemo)(() => {
      let e = a?.assets || [];
      if (b === `3d`) {
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
              a = h.get(e.asset_name) || (_ ? `complete` : `pending`);
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
      if (b === `sfx` || b === `music`) {
        let e = b === `sfx` ? `sfx_audio` : `music_audio`;
        return r
          .filter((t) => {
            if (t.asset_type) return t.asset_type === e;
            let n = (t.name || ``).toLowerCase();
            return b === `sfx`
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
              h.get(e.asset_name || e.name) || (_ ? `complete` : `pending`);
            return {
              id: e.asset_name || e.name,
              asset_name: e.asset_name || e.name,
              asset_type: b === `sfx` ? `audio_sfx` : `audio_music`,
              description: e.description || ``,
              status: `planned`,
              integrationStatus: t,
            };
          });
      }
      return [];
    }, [a?.assets, r, b, _, h]),
    C = x.filter((e) => e.integrationStatus === `complete`).length,
    w = x.length,
    T = Ua(e.id),
    E = Ia(T),
    D = !!T?.locked,
    O = Za({
      actionId: T?.mode === `coding` ? T.id : null,
      sessionId: u || null,
      completedRun: s,
    }),
    k = O.payload ? { codingModels: O.payload } : void 0,
    A = O.blocked,
    j = () => {
      n?.(
        e.id,
        `Integrate all ${b === `3d` ? `3D` : b.toUpperCase()} assets into the game`,
        k,
      );
    },
    M = () => {
      n?.(
        e.id,
        `Re-integrate all ${b === `3d` ? `3D` : b.toUpperCase()} assets`,
        k,
      );
    },
    N = (t) => {
      A ||
        (n?.(e.id, `Integrate ${t.asset_name} into the game`, k),
        g((e) => {
          let n = new Map(e);
          return (n.set(t.asset_name, `in-progress`), n);
        }),
        F());
    },
    P = (e) => {
      (f(e), m(!0));
    },
    F = () => {
      (m(!1), f(null));
    },
    I = d?.model_3d_path ? vr.getAssetUrl(i, d.model_3d_path, !1) : null,
    L = (e) => (0, Z.jsx)(cl, { status: e.integrationStatus || `pending` }),
    R = (e) => {
      switch (e) {
        case `complete`:
          return (0, Z.jsx)(Zr, { className: `h-4 w-4 text-green-400` });
        case `error`:
          return (0, Z.jsx)(te, { className: `h-4 w-4 text-red-400` });
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
    z = () => {
      switch (b) {
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
      w > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex items-center justify-end`,
          children: (0, Z.jsxs)(`span`, {
            className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded`,
            children: [C, `/`, w, ` integrated`],
          }),
        }),
      _ &&
        w > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-3 p-2 bg-secondary/50 rounded-lg`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1.5 text-sm`,
              children: [
                (0, Z.jsx)(Zr, { className: `h-4 w-4 text-green-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-green-400`,
                  children: C,
                }),
              ],
            }),
            (0, Z.jsxs)(`span`, {
              className: `text-xs text-muted-foreground/60 ml-auto`,
              children: [w, ` `, z().toLowerCase(), ` total`],
            }),
          ],
        }),
      b === `3d`
        ? (0, Z.jsx)(ol, {
            assets: x,
            sessionDir: i,
            onAssetClick: P,
            renderOverlay: L,
            columns: 3,
            emptyMessage: `No ${z().toLowerCase()} available for integration.`,
            selectedAssetId: d?.id,
          })
        : (0, Z.jsx)(`div`, {
            className: `space-y-2`,
            children:
              x.length === 0
                ? (0, Z.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground/60 text-center py-4`,
                    children: [
                      `No `,
                      z().toLowerCase(),
                      ` available for integration.`,
                    ],
                  })
                : x.map((e) =>
                    (0, Z.jsxs)(
                      `div`,
                      {
                        onClick: () => P(e),
                        className: `
                  flex items-center gap-3 p-2 rounded-lg border cursor-pointer
                  ${e.integrationStatus === `complete` ? `bg-green-500/5 border-green-500/20` : e.integrationStatus === `error` ? `bg-red-500/5 border-red-500/20` : `bg-secondary/30 border-border hover:border-primary/30`}
                `,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `px-1.5 py-0.5 text-[10px] bg-primary/20 text-primary rounded shrink-0`,
                            children: b === `sfx` ? `SFX` : `Music`,
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `flex-1 min-w-0`,
                            children: (0, Z.jsx)(`div`, {
                              className: `text-sm text-foreground/80 truncate`,
                              children: e.asset_name?.replace(/_/g, ` `),
                            }),
                          }),
                          R(e.integrationStatus),
                        ],
                      },
                      e.id,
                    ),
                  ),
          }),
      (0, Z.jsxs)(`div`, {
        className: `pt-2 space-y-2`,
        children: [
          D && (y || _) && w > 0 && (0, Z.jsx)(Vc, { compact: !0 }),
          (y || _) && w > 0 && (0, Z.jsx)(Sc, { choice: O, disabled: D }),
          y &&
            w > 0 &&
            (0, Z.jsx)($t, {
              onClick: j,
              className: `w-full`,
              disabled: t || D || A,
              cost: E,
              label: `Integrate All ${z()}`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: v,
              loadingText: `Integrating assets...`,
              tooltip: `Integrate ${w} ${z().toLowerCase()} into the game`,
              checkBalance: !0,
            }),
          _ &&
            (0, Z.jsx)($t, {
              variant: `outline`,
              onClick: M,
              className: `w-full`,
              disabled: t || D || A,
              cost: E,
              label: `Re-integrate All`,
              icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
              tooltip: `Re-integrate all ${w} ${z().toLowerCase()}`,
              checkBalance: !0,
            }),
          v &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Z.jsx)(vc, {
                  sessionId: u,
                  isRunning: v,
                  onLocalActivity: l,
                }),
                (0, Z.jsx)(Nc, { feed: o, progress: c, running: v }),
              ],
            }),
        ],
      }),
      b === `3d` &&
        d &&
        (I
          ? (0, Z.jsxs)(Bl, {
              isOpen: p,
              onClose: F,
              modelUrl: I,
              title: d.asset_name?.replace(/_/g, ` `) || `Asset`,
              subtitle: `Status: ${d.integrationStatus || `pending`}`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-4`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-xs text-muted-foreground`,
                      children: `Integration Status:`,
                    }),
                    R(d.integrationStatus),
                    (0, Z.jsx)(`span`, {
                      className: `text-sm ${d.integrationStatus === `complete` ? `text-green-400` : d.integrationStatus === `error` ? `text-red-400` : `text-foreground/80`}`,
                      children:
                        d.integrationStatus === `complete`
                          ? `Integrated`
                          : d.integrationStatus === `error`
                            ? `Failed`
                            : d.integrationStatus === `in-progress`
                              ? `In Progress`
                              : `Pending`,
                    }),
                  ],
                }),
                (0, Z.jsx)(S, {
                  onClick: () => N(d),
                  className: `w-full`,
                  disabled:
                    t || D || A || d.integrationStatus === `in-progress`,
                  children:
                    d.integrationStatus === `complete`
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(ln, { className: `h-4 w-4 mr-2` }),
                            `Re-integrate This Asset`,
                          ],
                        })
                      : (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(Nr, { className: `h-4 w-4 mr-2` }),
                            `Integrate This Asset`,
                          ],
                        }),
                }),
              ],
            })
          : (0, Z.jsx)(Vl, {
              isOpen: p,
              onClose: F,
              title: d.asset_name?.replace(/_/g, ` `) || `Asset`,
              message: `3D model not found for this asset.`,
            })),
      b !== `3d` &&
        d &&
        (0, Z.jsx)(`div`, {
          className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4`,
          onClick: F,
          children: (0, Z.jsxs)(`div`, {
            className: `bg-card rounded-xl border border-border max-w-sm w-full overflow-hidden`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, Z.jsxs)(`div`, {
                className: `px-4 py-3 border-b border-border flex items-center justify-between`,
                children: [
                  (0, Z.jsx)(`h3`, {
                    className: `text-sm font-semibold text-white truncate`,
                    children: d.asset_name?.replace(/_/g, ` `),
                  }),
                  (0, Z.jsx)(S, {
                    variant: `ghost`,
                    size: `sm`,
                    onClick: F,
                    className: `text-muted-foreground hover:text-white -mr-2`,
                    children: (0, Z.jsx)(Jr, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `p-4 space-y-4`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      R(d.integrationStatus),
                      (0, Z.jsx)(`span`, {
                        className: `text-sm text-foreground/80`,
                        children:
                          d.integrationStatus === `complete`
                            ? `Integrated`
                            : d.integrationStatus === `error`
                              ? `Failed`
                              : d.integrationStatus === `in-progress`
                                ? `In Progress`
                                : `Pending`,
                      }),
                    ],
                  }),
                  (0, Z.jsx)(S, {
                    onClick: () => N(d),
                    className: `w-full`,
                    disabled:
                      t || D || A || d.integrationStatus === `in-progress`,
                    children:
                      d.integrationStatus === `complete`
                        ? (0, Z.jsxs)(Z.Fragment, {
                            children: [
                              (0, Z.jsx)(ln, { className: `h-4 w-4 mr-2` }),
                              `Re-integrate`,
                            ],
                          })
                        : (0, Z.jsxs)(Z.Fragment, {
                            children: [
                              (0, Z.jsx)(Nr, { className: `h-4 w-4 mr-2` }),
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
