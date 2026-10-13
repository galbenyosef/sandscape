// assets__Create-ea24k1TY 187 — classname
// Lines 62143-62512 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function nQ({
  node: e,
  isCodingAgentRunning: t,
  onChatAbout: n,
  onExecute: r,
  assets: i,
  sessionDir: a,
}) {
  let o = tn(un(e.id)),
    s = tn(on(`splat_world`)),
    [c, l] = (0, X.useState)(``),
    [u, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(!1),
    v = e.state === `in-progress`,
    y = a?.split(`/`).pop() || a || ``,
    b = (0, X.useMemo)(
      () =>
        i.filter(
          (e) =>
            e.asset_type === `environment_map` ||
            e.asset_type === `splat_world` ||
            e.asset_name?.includes(`environment_map`) ||
            e.name?.includes(`environment_map`),
        ),
      [i],
    );
  ((0, X.useMemo)(() => b.filter((e) => e.asset_type !== `splat_world`), [b]),
    (0, X.useMemo)(() => b.filter((e) => e.asset_type === `splat_world`), [b]));
  let C = (0, X.useCallback)(
      async (e, t) => {
        let n = e.id || e.asset_name;
        if (!(!n || !y)) {
          h(n);
          try {
            await Fn(y, n, `environment_map`, {
              regenerate: !0,
              ...(t ? { feedback: t } : {}),
            });
          } finally {
            h(null);
          }
        }
      },
      [y],
    ),
    [w, T] = (0, X.useState)(!1),
    E = (0, X.useCallback)(async () => {
      if (!y) return;
      let e = c.trim() || `Environment map matching the game style`;
      T(!0);
      try {
        let t = `environment_map_${Date.now().toString(36)}`,
          n = await jr.addAsset(y, {
            asset_name: t,
            asset_type: `environment_map`,
            description: e,
          });
        if (!n.success) return;
        let r = n.asset?.id || t;
        (await Fn(y, r, `environment_map`, { feedback: e }), l(``));
      } finally {
        T(!1);
      }
    }, [y, c]),
    D = (0, X.useCallback)(
      async (e) => {
        let t = e.id || e.asset_name;
        if (!(!t || !y)) {
          (_(!0), d(null));
          try {
            await Fn(y, t, `splat_from_pano`);
          } finally {
            _(!1);
          }
        }
      },
      [y],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, Z.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: `Generate environment panoramas and 3D splat worlds for your game.`,
          }),
          b.length > 0 &&
            (0, Z.jsx)(`span`, {
              className: `text-[10px] text-muted-foreground/60 bg-card px-2 py-0.5 rounded shrink-0 ml-2`,
              children: b.length,
            }),
        ],
      }),
      b.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `grid grid-cols-2 gap-2`,
          children: b.map((e, t) => {
            let n = eQ(e, a),
              r = e.asset_type === `splat_world`,
              i =
                m === (e.id || e.asset_name) ||
                e.generation_status?.environment_map === `generating`;
            return (0, Z.jsxs)(
              `div`,
              {
                className: `rounded-lg border border-border overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-200 group relative`,
                onClick: () => d(e),
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `aspect-[2/1] bg-card`,
                    children: n
                      ? (0, Z.jsx)(`img`, {
                          src: n,
                          alt: tQ(e),
                          className: `w-full h-full object-cover`,
                        })
                      : (0, Z.jsx)(`div`, {
                          className: `w-full h-full flex items-center justify-center`,
                          children: r
                            ? (0, Z.jsx)(S, {
                                className: `h-5 w-5 text-muted-foreground/20`,
                              })
                            : (0, Z.jsx)(xe, {
                                className: `h-5 w-5 text-muted-foreground/20`,
                              }),
                        }),
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `absolute top-1.5 left-1.5`,
                    children: (0, Z.jsx)(`span`, {
                      className: `px-1.5 py-0.5 text-[9px] font-medium rounded ${r ? `bg-violet-500/80 text-white` : `bg-sky-500/80 text-white`}`,
                      children: r ? `SPLAT` : `ENV MAP`,
                    }),
                  }),
                  i &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 bg-card/60 flex items-center justify-center`,
                      children: (0, Z.jsx)(J, {
                        className: `h-5 w-5 animate-spin text-primary`,
                      }),
                    }),
                  !i &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 bg-card/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5`,
                      children: (0, Z.jsx)(`span`, {
                        className: `text-[10px] text-white truncate w-full`,
                        children: tQ(e),
                      }),
                    }),
                ],
              },
              e.id || e.asset_name || t,
            );
          }),
        }),
      b.length === 0 &&
        !v &&
        (0, Z.jsxs)(`div`, {
          className: `py-6 text-center`,
          children: [
            (0, Z.jsx)(xe, {
              className: `h-7 w-7 text-muted-foreground/20 mx-auto mb-2`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `No environments generated yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground/40 mt-1`,
              children: `Describe the environment or let AI match it to your style guide.`,
            }),
          ],
        }),
      v &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
          children: [
            (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
            `Generating...`,
          ],
        }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`label`, {
            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 block`,
            children: `New Environment Description (optional)`,
          }),
          (0, Z.jsx)(`textarea`, {
            value: c,
            onChange: (e) => l(e.target.value),
            placeholder: `e.g., Sunset desert with distant mountains, Cyberpunk city at night, Lush jungle temple ruins...`,
            className: `w-full h-16 bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40 resize-none`,
            disabled: t || v,
          }),
        ],
      }),
      !v &&
        (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-2`,
          children: [
            (0, Z.jsx)(an, {
              onClick: E,
              className: `w-full`,
              disabled: t || w,
              cost: o,
              label: `New Env Map`,
              icon: (0, Z.jsx)(ni, { className: `h-3.5 w-3.5` }),
              isLoading: w,
              loadingText: `Generating...`,
              tooltip: `Generate a new 360° panorama image (fast, low cost)`,
              checkBalance: !0,
            }),
            (0, Z.jsx)(an, {
              onClick: () => {
                p(!0);
              },
              className: `w-full`,
              disabled: t,
              cost: s,
              label: `Splat World`,
              icon: (0, Z.jsx)(S, { className: `h-3.5 w-3.5` }),
              isLoading: !1,
              loadingText: `Generating...`,
              tooltip: `Generate a 3D Gaussian Splat world via World Labs (5-15 min)`,
              checkBalance: !0,
            }),
          ],
        }),
      (0, Z.jsx)(`div`, {
        className: `pt-2 border-t border-border`,
        children: (0, Z.jsx)(x, {
          variant: `ghost`,
          onClick: () => n(e.id),
          className: `w-full text-muted-foreground text-xs`,
          children: `Chat about environment`,
        }),
      }),
      (0, Z.jsx)(Xa, {
        open: f,
        onOpenChange: p,
        onConfirm: () => {
          p(!1);
          let t = c.trim()
            ? `Generate a 3D splat world: ${c.trim()}`
            : `Generate a 3D splat world that matches the game style`;
          r?.(e.id, t, { actionId: `splat_world`, params: { feedback: t } });
        },
        title: `Generate Splat World`,
        description: `This will generate a full 3D Gaussian Splat environment using World Labs. This is a premium operation that takes significant time to complete.`,
        confirmLabel: `Generate`,
        icon: (0, Z.jsx)(S, { className: `h-5 w-5` }),
        details: [
          ...(s === null ? [] : [{ label: `Cost`, value: `${s} coins` }]),
          { label: `Estimated time`, value: `5 — 15 minutes` },
        ],
      }),
      u &&
        (0, Z.jsx)(`div`, {
          className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4`,
          onClick: () => d(null),
          children: (0, Z.jsxs)(`div`, {
            className: `bg-card rounded-xl border border-border max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, Z.jsxs)(`div`, {
                className: `px-4 py-3 border-b border-border flex items-center justify-between shrink-0`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2 min-w-0`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `px-1.5 py-0.5 text-[9px] font-medium rounded shrink-0 ${u.asset_type === `splat_world` ? `bg-violet-500/80 text-white` : `bg-sky-500/80 text-white`}`,
                        children:
                          u.asset_type === `splat_world` ? `SPLAT` : `ENV MAP`,
                      }),
                      (0, Z.jsx)(`h3`, {
                        className: `text-sm font-semibold text-foreground truncate`,
                        children: tQ(u),
                      }),
                    ],
                  }),
                  (0, Z.jsx)(x, {
                    variant: `ghost`,
                    size: `sm`,
                    onClick: () => d(null),
                    className: `text-muted-foreground hover:text-foreground -mr-2`,
                    children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `p-4 space-y-3 overflow-y-auto flex-1 min-h-0`,
                children: [
                  (() => {
                    let e = eQ(u, a);
                    return e
                      ? (0, Z.jsx)(`div`, {
                          className: `aspect-[2/1] rounded-lg border border-border overflow-hidden bg-card`,
                          children: (0, Z.jsx)(`img`, {
                            src: e,
                            alt: tQ(u),
                            className: `w-full h-full object-contain`,
                          }),
                        })
                      : null;
                  })(),
                  u.description &&
                    u.description !== u.caption &&
                    (0, Z.jsx)(`div`, {
                      className: `text-xs text-muted-foreground leading-relaxed break-words`,
                      children: (0, Z.jsx)(RJ, {
                        remarkPlugins: [HZ],
                        components: $Z,
                        children: u.description,
                      }),
                    }),
                  u.asset_name &&
                    (0, Z.jsx)(`p`, {
                      className: `text-[10px] text-muted-foreground/50`,
                      children: u.asset_name,
                    }),
                ],
              }),
              (0, Z.jsx)(`div`, {
                className: `p-4 border-t border-border shrink-0`,
                children: (0, Z.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Z.jsx)(uu, {
                      label: u.concept_art_path
                        ? `Edit / Regenerate`
                        : `Generate`,
                      cost: o,
                      icon: (0, Z.jsx)(xn, { className: `h-3 w-3 mr-1` }),
                      onGenerate: (e) => C(u, e),
                      disabled: t || v,
                      isGenerating: m === (u.id || u.asset_name),
                      size: `sm`,
                      variant: `outline`,
                      className: `w-full`,
                      placeholder: `e.g., Make the sky more dramatic, remove the water from the floor...`,
                    }),
                    (u.concept_art_path || u.panorama_path || u.path) &&
                      (0, Z.jsx)(an, {
                        onClick: () => D(u),
                        className: `w-full`,
                        disabled: t || v || g,
                        cost: s,
                        label: u.splat_path
                          ? `Reconvert to Splat World`
                          : `Convert to Splat World`,
                        icon: (0, Z.jsx)(S, { className: `h-3.5 w-3.5` }),
                        isLoading: g,
                        loadingText: `Converting...`,
                        tooltip: `Convert this panorama into a 3D Gaussian Splat world (5-15 min)`,
                        checkBalance: !0,
                      }),
                  ],
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
