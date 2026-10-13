// assets__Create-ea24k1TY 201 — children
// Lines 68370-68697 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function J$({ selectedAsset: e, sessionId: t, assets: n }) {
  let [r, i] = (0, X.useState)(!1),
    [a, o] = (0, X.useState)(!1),
    s = (0, X.useRef)(null),
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(!1),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(`4`),
    [g, _] = (0, X.useState)(1e4),
    [v, y] = (0, X.useState)(`10000`),
    [b, C] = (0, X.useState)(`triangle`),
    [w, T] = (0, X.useState)(`1024`),
    E = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    if (!c) return;
    let e = (e) => {
      E.current && !E.current.contains(e.target) && l(!1);
    };
    return (
      document.addEventListener(`mousedown`, e),
      () => document.removeEventListener(`mousedown`, e)
    );
  }, [c]);
  let D = (0, X.useCallback)(
      () =>
        e
          ? n.find((t) => t.asset_name === e.asset_name)?.id || e.asset_name
          : ``,
      [e, n],
    ),
    O = (0, X.useCallback)(() => {
      let e = {};
      if ((u && (e.ultra_mode = !0), f)) {
        e.should_remesh = !0;
        let t = parseInt(m, 10);
        ((e.decimation_mode = t),
          t === 0 &&
            (e.target_polycount = Math.max(
              G$,
              Math.min(K$, Math.round(g) || G$),
            )));
      }
      return (
        b !== `triangle` && (e.topology = b),
        w !== `1024` && (e.texture_resolution = parseInt(w, 10)),
        e
      );
    }, [u, f, m, g, b, w]),
    k = (0, X.useCallback)(
      (e) => {
        let t = parseInt(e, 10);
        if (Number.isNaN(t)) {
          y(String(g));
          return;
        }
        let n = Math.max(G$, Math.min(K$, t));
        (_(n), y(String(n)));
      },
      [g],
    ),
    A = (0, X.useCallback)(async () => {
      if (!e || !t) return;
      let n = D(),
        r = O();
      (i(!0), l(!1));
      try {
        let e = { regenerate: !0 };
        Object.keys(r).length > 0 && (e.mesh_settings = r);
        let i = await Fn(t, n, `model_3d`, e);
        i.success
          ? Hr.success(`3D model regeneration started`)
          : Hr.error(i.error || `Failed to regenerate 3D model`);
      } catch (e) {
        (console.error(`Failed to regenerate 3D model:`, e),
          Hr.error(`Failed to regenerate 3D model`));
      } finally {
        i(!1);
      }
    }, [e, t, D, O]),
    j = (0, X.useCallback)(
      async (n) => {
        let r = n.target.files?.[0];
        if (!r || !e || !t) return;
        let i = D();
        o(!0);
        try {
          let e = await jr.upload3DModel(t, i, r);
          e.success
            ? Hr.success(`3D model uploaded`)
            : Hr.error(e.error || `Upload failed`);
        } catch (e) {
          (console.error(`3D model upload failed:`, e),
            Hr.error(`Failed to upload 3D model`));
        } finally {
          (o(!1), s.current && (s.current.value = ``));
        }
      },
      [t, e, D],
    );
  return (0, Z.jsxs)(`div`, {
    className: `flex items-center gap-2 px-3 py-1.5 border-b border-gray-700/50 bg-[#1a1625]`,
    children: [
      (0, Z.jsxs)(x, {
        size: `sm`,
        variant: `ghost`,
        onClick: A,
        disabled: !e || r || !e?.concept_art_path,
        className: `h-7 px-2 text-xs`,
        title: e?.concept_art_path
          ? `Regenerate 3D model for selected asset`
          : `Generate concept art first`,
        children: [
          r
            ? (0, Z.jsx)(J, { className: `h-3.5 w-3.5 mr-1 animate-spin` })
            : (0, Z.jsx)(S, { className: `h-3.5 w-3.5 mr-1` }),
          `Regen 3D`,
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `relative`,
        ref: E,
        children: [
          (0, Z.jsxs)(x, {
            size: `sm`,
            variant: `ghost`,
            onClick: () => l((e) => !e),
            disabled: !e,
            className: `h-7 px-2 text-xs`,
            title: `Mesh settings for the next Regen 3D`,
            children: [
              (0, Z.jsx)(Jo, { className: `h-3.5 w-3.5 mr-1` }),
              `Mesh settings`,
              (0, Z.jsx)(ti, {
                className: `h-3 w-3 ml-1 transition-transform ${c ? `rotate-180` : ``}`,
              }),
            ],
          }),
          c &&
            (0, Z.jsxs)(`div`, {
              className: `absolute left-0 top-full z-30 mt-1 w-64 rounded-md border border-gray-700/50 bg-[#1a1625] p-3 shadow-xl space-y-2.5`,
              children: [
                (0, Z.jsxs)(`p`, {
                  className: `text-[10px] text-gray-500`,
                  children: [
                    `Applied to the next `,
                    (0, Z.jsx)(`span`, {
                      className: `text-gray-300`,
                      children: `Regen 3D`,
                    }),
                    `. Untouched controls use the generator default.`,
                  ],
                }),
                (0, Z.jsxs)(`label`, {
                  className: `flex items-center justify-between gap-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-400`,
                      children: `Ultra mode`,
                    }),
                    (0, Z.jsx)(`input`, {
                      type: `checkbox`,
                      checked: u,
                      onChange: (e) => d(e.target.checked),
                      className: `h-3.5 w-3.5 accent-purple-500`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`label`, {
                  className: `flex items-center justify-between gap-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-400`,
                      children: `Optimize mesh`,
                    }),
                    (0, Z.jsx)(`input`, {
                      type: `checkbox`,
                      checked: f,
                      onChange: (e) => p(e.target.checked),
                      className: `h-3.5 w-3.5 accent-purple-500`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-2 ${f ? `` : `opacity-40`}`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-400`,
                      children: `Quality`,
                    }),
                    (0, Z.jsxs)(`select`, {
                      value: m,
                      disabled: !f,
                      onChange: (e) => h(e.target.value),
                      className: `${q$} w-32`,
                      children: [
                        (0, Z.jsx)(`option`, { value: `1`, children: `Ultra` }),
                        (0, Z.jsx)(`option`, { value: `2`, children: `High` }),
                        (0, Z.jsx)(`option`, {
                          value: `3`,
                          children: `Medium`,
                        }),
                        (0, Z.jsx)(`option`, { value: `4`, children: `Low` }),
                        (0, Z.jsx)(`option`, {
                          value: `0`,
                          children: `Custom`,
                        }),
                      ],
                    }),
                  ],
                }),
                f &&
                  m === `0` &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-2`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `text-[10px] text-gray-400`,
                        children: `Target polycount`,
                      }),
                      (0, Z.jsx)(`input`, {
                        type: `number`,
                        value: v,
                        min: G$,
                        max: K$,
                        step: 500,
                        onChange: (e) => y(e.target.value),
                        onBlur: (e) => k(e.target.value),
                        onKeyDown: (e) => {
                          e.key === `Enter` &&
                            (k(e.target.value), e.target.blur());
                        },
                        className: `w-20 h-6 bg-gray-800/50 border border-gray-700/50 rounded px-1 text-[10px] text-gray-300
                    focus:outline-none focus:border-purple-500/50 [appearance:textfield]
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
                      }),
                    ],
                  }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-400`,
                      children: `Topology`,
                    }),
                    (0, Z.jsxs)(`select`, {
                      value: b,
                      onChange: (e) => C(e.target.value),
                      className: `${q$} w-32`,
                      children: [
                        (0, Z.jsx)(`option`, {
                          value: `triangle`,
                          children: `Triangle`,
                        }),
                        (0, Z.jsx)(`option`, {
                          value: `quad`,
                          children: `Quad`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-gray-400`,
                      children: `Texture resolution`,
                    }),
                    (0, Z.jsxs)(`select`, {
                      value: w,
                      onChange: (e) => T(e.target.value),
                      className: `${q$} w-32`,
                      children: [
                        (0, Z.jsx)(`option`, { value: `512`, children: `512` }),
                        (0, Z.jsx)(`option`, {
                          value: `1024`,
                          children: `1024`,
                        }),
                        (0, Z.jsx)(`option`, {
                          value: `2048`,
                          children: `2048`,
                        }),
                        (0, Z.jsx)(`option`, {
                          value: `4096`,
                          children: `4096`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      (0, Z.jsx)(`input`, {
        ref: s,
        type: `file`,
        accept: `.glb,.gltf`,
        onChange: j,
        className: `hidden`,
      }),
      (0, Z.jsxs)(x, {
        size: `sm`,
        variant: `ghost`,
        onClick: () => s.current?.click(),
        disabled: !e || a,
        className: `h-7 px-2 text-xs`,
        title: `Upload a GLB/GLTF 3D model for this asset`,
        children: [
          a
            ? (0, Z.jsx)(J, { className: `h-3.5 w-3.5 mr-1 animate-spin` })
            : (0, Z.jsx)(En, { className: `h-3.5 w-3.5 mr-1` }),
          `Upload GLB`,
        ],
      }),
      e &&
        (0, Z.jsxs)(`span`, {
          className: `text-[10px] text-gray-500 truncate`,
          children: [
            e.asset_name?.replace(/_/g, ` `),
            e.status === `3d` && ` — 3D ready`,
            e.status === `concept` && ` — concept only`,
            e.status === `planned` && ` — planned`,
          ],
        }),
    ],
  });
}
