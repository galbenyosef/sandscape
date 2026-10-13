// assets__Create-ea24k1TY 147 — classname
// Lines 48995-49360 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function EV({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onUpdateDesignData: o,
  onOpenEditorTab: s,
}) {
  let c = i?.split(`/`).pop() || i || ``,
    [l, d] = (0, X.useState)(new Set()),
    [f, p] = (0, X.useState)(null),
    [m, h] = (0, X.useState)(null),
    { toast: g } = u(),
    _ = e.state === `complete` || e.state === `outdated`,
    v = e.state === `in-progress`,
    y = e.state === `available`,
    b = (0, X.useMemo)(() => {
      let e = a?.animation_plan;
      return e?.characters
        ? e.characters
            .map((e) => {
              let t = r.find((t) => t.asset_name === e.asset_name),
                n = (e.animations || [])
                  .filter(DI)
                  .map((e) => ({ ...e, status: e.status || `pending` }));
              return {
                asset_id: e.asset_id,
                asset_name: e.asset_name,
                animations: n,
                rigged_model_path: t?.rigged_model_path,
              };
            })
            .filter((e) => e.animations.length > 0)
        : [];
    }, [a, r]),
    x = b.reduce((e, t) => e + t.animations.length, 0),
    S = b.reduce(
      (e, t) => e + t.animations.filter((e) => e.status === `generated`).length,
      0,
    ),
    C = b.reduce(
      (e, t) => e + t.animations.filter((e) => e.status === `failed`).length,
      0,
    ),
    w = x - S - C,
    T = un(e.id),
    E = fn(T?.id ?? null, c, { missing_only: !0 }),
    D = fn(T?.id ?? null, c, { regenerate: !0 }),
    O = sn(`op:generate_animation`),
    k = (0, X.useCallback)((e) => {
      d((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    }, []),
    A = () => {
      n?.(e.id, `Generate the planned animations that are still missing`, {
        params: { missing_only: !0 },
      });
    },
    j = () => {
      n?.(e.id, `Regenerate all planned animations`, {
        params: { regenerate: !0 },
      });
    },
    M = (0, X.useCallback)(
      async (e, t, n) => {
        if (!c) return;
        let i = r.find((t) => t.asset_name === e.asset_name)?.id;
        if (!i) {
          h(`No rigged character found for ${e.asset_name}`);
          return;
        }
        (p(t.animation_id), h(null));
        try {
          let e = await kI.regenerateAnimation(c, i, t.animation_id, n || ``);
          if ((qt(), !e.success)) {
            h(
              cn(g, e, {
                title: `Animation generation failed`,
                fallback: `Generation failed`,
              }),
            );
            return;
          }
          let r = await kI.getAnimationPlan(c);
          r.success &&
            r.animation_plan &&
            o?.({ animation_plan: r.animation_plan });
        } catch (e) {
          h(e instanceof Error ? e.message : `Failed to generate`);
        } finally {
          p(null);
        }
      },
      [c, r, o, g],
    );
  return (0, Z.jsxs)(`div`, {
    className: `min-w-0 space-y-3`,
    children: [
      m &&
        (0, Z.jsxs)(`div`, {
          className: `text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded px-2 py-1.5 flex items-start justify-between gap-2`,
          children: [
            (0, Z.jsx)(`span`, { className: `flex-1`, children: m }),
            (0, Z.jsx)(`button`, {
              onClick: () => h(null),
              className: `text-red-300 hover:text-red-200 shrink-0`,
              children: (0, Z.jsx)(li, { className: `w-3 h-3` }),
            }),
          ],
        }),
      x > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `flex gap-3 text-[10px]`,
          children: [
            (0, Z.jsxs)(`span`, {
              className: `text-green-400 flex items-center gap-1`,
              children: [
                (0, Z.jsx)(Be, { className: `w-3 h-3` }),
                ` `,
                S,
                ` done`,
              ],
            }),
            C > 0 &&
              (0, Z.jsxs)(`span`, {
                className: `text-red-400 flex items-center gap-1`,
                children: [
                  (0, Z.jsx)(oi, { className: `w-3 h-3` }),
                  ` `,
                  C,
                  ` failed`,
                ],
              }),
            (0, Z.jsxs)(`span`, {
              className: `text-gray-500 flex items-center gap-1`,
              children: [
                (0, Z.jsx)(ei, { className: `w-3 h-3` }),
                ` `,
                w,
                ` pending`,
              ],
            }),
          ],
        }),
      b.length === 0 &&
        !v &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(Qt, { className: `h-8 w-8 text-gray-600 mx-auto mb-2` }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `Add moves in Animation Planning.`,
            }),
          ],
        }),
      v &&
        b.length === 0 &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-center gap-2 text-sm text-primary py-8`,
          children: [
            (0, Z.jsx)(J, { className: `h-5 w-5 animate-spin` }),
            `Generating animations...`,
          ],
        }),
      b.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `space-y-2`,
          children: b.map((e) => {
            let n = l.has(e.asset_name),
              r = e.animations.filter((e) => e.status === `generated`).length,
              i = e.animations.length;
            return (0, Z.jsxs)(
              `div`,
              {
                className: `border border-gray-700/50 rounded-lg overflow-hidden`,
                children: [
                  (0, Z.jsxs)(`button`, {
                    onClick: () => k(e.asset_name),
                    className: `w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-800/30 transition-colors`,
                    children: [
                      n
                        ? (0, Z.jsx)(ti, {
                            className: `w-3.5 h-3.5 text-gray-400 shrink-0`,
                          })
                        : (0, Z.jsx)(De, {
                            className: `w-3.5 h-3.5 text-gray-400 shrink-0`,
                          }),
                      (0, Z.jsx)(`span`, {
                        className: `text-sm text-gray-200 font-medium truncate`,
                        children: e.asset_name?.replace(/_/g, ` `),
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `text-[10px] text-gray-500 shrink-0`,
                        children: [r, `/`, i],
                      }),
                    ],
                  }),
                  n &&
                    (0, Z.jsx)(`div`, {
                      className: `border-t border-gray-700/30`,
                      children: e.animations.map((n) => {
                        let r = n.status === `generated`,
                          i = n.status === `failed`,
                          a = f === n.animation_id,
                          o = TV[n.category] || `bg-gray-500/20 text-gray-300`;
                        return (0, Z.jsx)(
                          `div`,
                          {
                            className: `px-3 py-2 border-b border-gray-700/20 last:border-b-0 hover:bg-gray-800/20`,
                            children: (0, Z.jsxs)(`div`, {
                              className: `flex flex-wrap items-start gap-2 min-w-0`,
                              children: [
                                (0, Z.jsx)(`div`, {
                                  className: `mt-0.5 shrink-0`,
                                  children: r
                                    ? (0, Z.jsx)(Be, {
                                        className: `w-3.5 h-3.5 text-green-400`,
                                      })
                                    : i
                                      ? (0, Z.jsx)(oi, {
                                          className: `w-3.5 h-3.5 text-red-400`,
                                        })
                                      : a
                                        ? (0, Z.jsx)(J, {
                                            className: `w-3.5 h-3.5 text-primary animate-spin`,
                                          })
                                        : (0, Z.jsx)(`div`, {
                                            className: `w-3.5 h-3.5 rounded-full border border-gray-600`,
                                          }),
                                }),
                                (0, Z.jsxs)(`div`, {
                                  className: `flex-1 min-w-0`,
                                  children: [
                                    (0, Z.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5 flex-wrap`,
                                      children: [
                                        (0, Z.jsx)(`span`, {
                                          className: `text-xs text-gray-200 font-medium`,
                                          children: n.name,
                                        }),
                                        (0, Z.jsx)(`span`, {
                                          className: `text-[9px] px-1.5 py-0.5 rounded ${o}`,
                                          children: n.category,
                                        }),
                                        n.loop &&
                                          (0, Z.jsx)(`span`, {
                                            title: `Looping`,
                                            className: `inline-flex`,
                                            children: (0, Z.jsx)(Ro, {
                                              className: `w-3 h-3 text-blue-400`,
                                            }),
                                          }),
                                      ],
                                    }),
                                    r &&
                                      n.duration_sec &&
                                      (0, Z.jsxs)(`span`, {
                                        className: `text-[9px] text-green-400/70`,
                                        children: [n.duration_sec, `s`],
                                      }),
                                    i &&
                                      n.error &&
                                      (0, Z.jsx)(`span`, {
                                        className: `text-[9px] text-red-400/70`,
                                        children: n.error,
                                      }),
                                  ],
                                }),
                                (0, Z.jsx)(`div`, {
                                  className: `shrink-0`,
                                  children: r
                                    ? (0, Z.jsx)(uu, {
                                        label: `Regen`,
                                        cost: O,
                                        icon: (0, Z.jsx)(Ro, {
                                          className: `w-3 h-3 mr-1`,
                                        }),
                                        onGenerate: async (t) => M(e, n, t),
                                        disabled: t,
                                        size: `sm`,
                                        variant: `ghost`,
                                        className: `text-[10px] h-6`,
                                        placeholder: `e.g., Make it faster, more exaggerated`,
                                      })
                                    : (0, Z.jsx)(uu, {
                                        label: `Generate`,
                                        cost: O,
                                        icon: (0, Z.jsx)(bn, {
                                          className: `w-3 h-3 mr-1`,
                                        }),
                                        onGenerate: async (t) => M(e, n, t),
                                        disabled: t,
                                        isGenerating: a,
                                        size: `sm`,
                                        variant: `outline`,
                                        className: `text-[10px] h-6`,
                                        placeholder: `e.g., Add more weight to the steps`,
                                      }),
                                }),
                              ],
                            }),
                          },
                          n.animation_id,
                        );
                      }),
                    }),
                ],
              },
              e.asset_id || e.asset_name,
            );
          }),
        }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          y &&
            w > 0 &&
            (0, Z.jsx)(an, {
              onClick: A,
              className: `w-full`,
              disabled: t,
              cost: E,
              label: `Generate All Animations (${w})`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              isLoading: v,
              loadingText: `Generating animations...`,
              tooltip: `Generate ${w} animation${w > 1 ? `s` : ``}`,
              checkBalance: !0,
            }),
          _ &&
            (0, Z.jsx)(an, {
              variant: `outline`,
              onClick: j,
              className: `w-full`,
              disabled: t,
              cost: D,
              label: `Regenerate All`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: `Regenerate all ${x} animations`,
              checkBalance: !0,
            }),
          v &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Generating animations...`,
              ],
            }),
          s &&
            (0, Z.jsx)(op, {
              tabId: `character`,
              label: `Open in Animation Editor`,
              onOpenEditorTab: s,
            }),
        ],
      }),
    ],
  });
}
