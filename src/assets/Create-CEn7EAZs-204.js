// Create-CEn7EAZs 204 — classname
// Lines 69481-69678 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function d1({
  selectedAsset: e,
  sessionDir: t,
  modelStats: n,
  isLoading: r,
  showWireframe: i,
  onToggleWireframe: a,
  onOrientationSaved: o,
  conceptArtUrl: s,
  onConceptArtClick: c,
}) {
  let [l, u] = (0, X.useState)([0, 0, 0]),
    [d, f] = (0, X.useState)(!1);
  (0, X.useEffect)(() => {
    u([0, 0, 0]);
  }, [e?.asset_name]);
  let p = (0, X.useCallback)((e, t) => {
      u((n) => {
        let r = [...n],
          i = e === `X` ? 0 : e === `Y` ? 1 : 2;
        return ((r[i] = n[i] + t), r);
      });
    }, []),
    m = (0, X.useCallback)(() => {
      u([0, 0, 0]);
    }, []),
    h = (0, X.useCallback)(async () => {
      if (!e?.model_3d_path || !e?.asset_name) return;
      let n = t.split(`/`).pop() || t;
      f(!0);
      try {
        let t = await vr.transformAsset(
          n,
          e.model_3d_path,
          e.asset_name,
          { x: l[0], y: l[1], z: l[2] },
          !0,
        );
        t.success
          ? (u([0, 0, 0]), o?.(), q.success(`Orientation saved successfully`))
          : q.error(t.error || `Failed to save orientation`);
      } catch {
        q.error(`Failed to save orientation`);
      } finally {
        f(!1);
      }
    }, [e, t, l, o]),
    g = (e) => e.toFixed(2);
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full`,
    children: [
      s &&
        e &&
        (0, Z.jsx)(`div`, {
          className: `p-3 pb-0`,
          children: (0, Z.jsxs)(`div`, {
            className: `rounded-lg overflow-hidden border border-border bg-background relative group cursor-pointer`,
            onClick: c,
            children: [
              (0, Z.jsx)(`img`, {
                src: s,
                alt: `${e.asset_name} concept`,
                className: `w-full h-auto object-contain max-h-32`,
                loading: `lazy`,
              }),
              (0, Z.jsx)(`div`, {
                className: `absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center`,
                children: (0, Z.jsx)(Vs, {
                  className: `h-5 w-5 text-white opacity-0 group-hover:opacity-80 transition-opacity`,
                }),
              }),
            ],
          }),
        }),
      (0, Z.jsx)(`div`, {
        className: `p-3 space-y-2`,
        children: e
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsxs)(`div`, {
                  children: [
                    (0, Z.jsx)(`p`, {
                      className: `text-xs font-medium text-foreground`,
                      children: e.asset_name?.replace(/_/g, ` `),
                    }),
                    (0, Z.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground`,
                      children: e.asset_type?.replace(/_/g, ` `),
                    }),
                  ],
                }),
                e.description &&
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] text-muted-foreground leading-relaxed line-clamp-2`,
                    children: e.description,
                  }),
                r
                  ? (0, Z.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground italic`,
                      children: `Loading...`,
                    })
                  : n &&
                    (0, Z.jsxs)(`p`, {
                      className: `text-[10px] text-muted-foreground`,
                      children: [
                        n.vertexCount.toLocaleString(),
                        ` verts · `,
                        n.faceCount.toLocaleString(),
                        ` faces · `,
                        g(n.dimensions.x),
                        `×`,
                        g(n.dimensions.y),
                        `×`,
                        g(n.dimensions.z),
                      ],
                    }),
              ],
            })
          : (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground italic`,
              children: `Select an asset`,
            }),
      }),
      (0, Z.jsx)(`div`, { className: `mx-3 border-t border-border` }),
      (0, Z.jsx)(`div`, {
        className: `p-3 space-y-2`,
        children: e?.model_3d_path
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(ql, {
                  rotation: l,
                  onRotate: p,
                  onReset: m,
                  disabled: d,
                }),
                (0, Z.jsx)(S, {
                  variant: `outline`,
                  size: `sm`,
                  className: `w-full`,
                  disabled: d || (l[0] === 0 && l[1] === 0 && l[2] === 0),
                  onClick: h,
                  children: d
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(J, {
                            className: `h-3 w-3 mr-1 animate-spin`,
                          }),
                          ` Saving...`,
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(ye, { className: `h-3 w-3 mr-1` }),
                          ` Save Orientation`,
                        ],
                      }),
                }),
              ],
            })
          : (0, Z.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground italic`,
              children: `No 3D model`,
            }),
      }),
      (0, Z.jsx)(`div`, { className: `mx-3 border-t border-border` }),
      (0, Z.jsx)(`div`, {
        className: `p-3`,
        children: (0, Z.jsxs)(`label`, {
          className: `flex items-center gap-2 text-xs text-foreground cursor-pointer`,
          children: [
            (0, Z.jsx)(`button`, {
              onClick: a,
              className: `w-4 h-4 rounded flex items-center justify-center transition-colors ${i ? `bg-primary text-primary-foreground` : `bg-muted text-muted-foreground`}`,
              children: i
                ? (0, Z.jsx)(Yr, { className: `h-2.5 w-2.5` })
                : (0, Z.jsx)(G, { className: `h-2.5 w-2.5` }),
            }),
            `Wireframe`,
          ],
        }),
      }),
    ],
  });
}
var f1 = 0;
function Kle(e) {
  return (
    f1++,
    {
      id: `prim_${Date.now()}_${f1}`,
      type: e,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: e === `cylinder` ? [0.5, 1, 0.5] : [1, 1, 1],
      label: `${e} ${f1}`,
    }
  );
}
