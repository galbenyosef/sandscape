// Create-CEn7EAZs 64 — classname
// Lines 20169-20469 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function lre({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onOpenEditorTab: o,
}) {
  let [s, c] = (0, X.useState)(null),
    [l, u] = (0, X.useState)(new Map()),
    [d, f] = (0, X.useState)(null),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(!1),
    x = i?.split(`/`).pop() || i,
    C = e.state === `available`,
    w = (0, X.useMemo)(() => {
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
            status: n ? `3d` : `planned`,
          };
        })
        .filter((e) => e.model_3d_path);
    }, [r, a?.assets]),
    T = Array.from(l.values()).filter((e) => e.status === `scaled`).length;
  ((0, X.useEffect)(() => {
    !s && w.length > 0 && (c(w[0]), m(!0), g(!1));
  }, [s, w]),
    (0, X.useEffect)(() => {
      if (!x || w.length === 0) return;
      let e = !1;
      return (
        (async () => {
          let t = await vr.getScaleValues(x);
          if (e || (b(!!t.unsupported), t.unsupported) || !t.success) return;
          let n = new Map();
          for (let e of w) {
            let r = t.scales[e.asset_name];
            typeof r == `number` && n.set(e.id, { value: r, status: `scaled` });
          }
          u(n);
        })(),
        () => {
          e = !0;
        }
      );
    }, [x, w]));
  let E = (e) => (e ? (l.get(e.id)?.value ?? 1) : 1),
    D = (e) => {
      s &&
        u((t) => {
          let n = new Map(t),
            r = n.get(s.id);
          return (
            n.set(s.id, {
              value: e,
              status:
                r?.status === `scaled` && r.value === e ? `scaled` : `pending`,
            }),
            n
          );
        });
    },
    O = async () => {
      if (!s?.asset_name || !x) return;
      let e = E(s);
      v(!0);
      try {
        let t = await vr.scaleAsset(x, s.asset_name, e);
        if (!t.success) {
          q.error(t.error || `Failed to save scale`);
          return;
        }
        (u((t) => {
          let n = new Map(t);
          return (n.set(s.id, { value: e, status: `scaled` }), n);
        }),
          q.success(`Scale saved for ${s.asset_name.replace(/_/g, ` `)}`));
      } catch (e) {
        (console.error(`Error saving scale:`, e),
          q.error(`Failed to save scale`));
      } finally {
        v(!1);
      }
    },
    k = (e) => {
      (c(e), f(null), m(!0), g(!1));
    },
    A = () => {
      n?.(
        e.id,
        `Mark scale clinic as complete — assets have been manually scaled`,
        { chatOnly: !0 },
      );
    },
    j = s?.model_3d_path ? vr.getAssetUrl(i, s.model_3d_path, !1) : null,
    M = E(s);
  return y
    ? (0, Z.jsx)(`div`, {
        className: `p-4 space-y-4`,
        children: (0, Z.jsxs)(`div`, {
          className: `rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 text-sm text-muted-foreground`,
          children: [
            (0, Z.jsx)(te, {
              className: `h-4 w-4 text-yellow-500 inline mr-2`,
            }),
            `Scale Clinic is not available for this session. Re-run 3D Drop In to enable.`,
          ],
        }),
      })
    : (0, Z.jsxs)(`div`, {
        className: `p-4 space-y-4`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `relative aspect-square rounded-lg border border-border bg-card overflow-hidden`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `absolute top-2 right-2 z-10 bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-muted-foreground`,
                children: [T, `/`, w.length, ` scaled`],
              }),
              p &&
                j &&
                !h &&
                (0, Z.jsx)(`div`, {
                  className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
                  children: (0, Z.jsx)(J, {
                    className: `h-8 w-8 text-primary animate-spin`,
                  }),
                }),
              h || !j
                ? (0, Z.jsxs)(`div`, {
                    className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                    children: [
                      (0, Z.jsx)(te, { className: `h-8 w-8 mb-2` }),
                      (0, Z.jsx)(`p`, {
                        className: `text-sm text-center px-4`,
                        children: h
                          ? `Failed to load model`
                          : `No 3D assets available yet`,
                      }),
                    ],
                  })
                : (0, Z.jsx)(
                    Jl,
                    {
                      modelUrl: j,
                      scale: M,
                      onLoad: () => m(!1),
                      onError: () => {
                        (m(!1), g(!0));
                      },
                      onBoundingBox: f,
                    },
                    j,
                  ),
              s &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute top-2 left-2 right-10 flex justify-between gap-2`,
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `bg-card/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white`,
                      children: s.asset_name?.replace(/_/g, ` `),
                    }),
                    d &&
                      (0, Z.jsxs)(`div`, {
                        className: `bg-card/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-cyan-200`,
                        children: [
                          d.x.toFixed(2),
                          ` x `,
                          d.y.toFixed(2),
                          ` x `,
                          d.z.toFixed(2),
                        ],
                      }),
                  ],
                }),
            ],
          }),
          s &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-3`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-between text-sm text-foreground/80`,
                      children: [
                        (0, Z.jsx)(`span`, { children: `Scale` }),
                        (0, Z.jsxs)(`span`, { children: [M.toFixed(2), `x`] }),
                      ],
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Z.jsx)(nm, {
                          min: 0.1,
                          max: 10,
                          step: 0.01,
                          value: [M],
                          onValueChange: ([e]) => D(e),
                        }),
                        (0, Z.jsx)(Ar, {
                          type: `number`,
                          min: 0.1,
                          max: 10,
                          step: 0.01,
                          value: M.toFixed(2),
                          onChange: (e) => {
                            let t = Number(e.target.value);
                            Number.isFinite(t) &&
                              D(Math.min(10, Math.max(0.1, t)));
                          },
                          className: `w-24`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Z.jsx)(S, {
                  onClick: O,
                  className: `w-full`,
                  variant: `outline`,
                  disabled: _ || p || h,
                  children: _
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(J, {
                            className: `h-4 w-4 mr-2 animate-spin`,
                          }),
                          `Saving...`,
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(ye, { className: `h-4 w-4 mr-2` }),
                          `Save Scale`,
                        ],
                      }),
                }),
              ],
            }),
          (0, Z.jsx)(ol, {
            assets: w,
            sessionDir: i,
            onAssetClick: k,
            selectedAssetId: s?.id,
            columns: 4,
            emptyMessage: `No integrated 3D assets available.`,
            renderOverlay: (e) =>
              (0, Z.jsx)(sl, {
                status:
                  l.get(e.id)?.status === `scaled` ? `complete` : `pending`,
              }),
          }),
          (0, Z.jsx)(`div`, {
            className: `space-y-2`,
            children:
              C &&
              w.length > 0 &&
              (0, Z.jsx)($t, {
                onClick: A,
                className: `w-full`,
                disabled: t,
                cost: 0,
                label: `Mark Complete`,
                icon: (0, Z.jsx)(ye, { className: `h-4 w-4` }),
                tooltip: `Complete the manual scaling pass for this session`,
                checkBalance: !1,
              }),
          }),
        ],
      });
}
