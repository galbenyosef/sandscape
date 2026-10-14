// Create-ea24k1TY 145 — classname
// Lines 48203-48836 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function CV({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  gameDesignData: r,
  sessionDir: i,
  assets: a,
  onUpdateDesignData: o,
  onOpenEditorTab: s,
}) {
  let c = i?.split(`/`).pop() || i || ``,
    l = tn(un(e.id)),
    u = en(on(`animation_generation`), `animation`),
    [d, f] = (0, X.useState)(new Set()),
    [p, m] = (0, X.useState)(null),
    [h, g] = (0, X.useState)(``),
    [_, v] = (0, X.useState)(``),
    [y, b] = (0, X.useState)(!1),
    [S, C] = (0, X.useState)(null),
    [w, T] = (0, X.useState)(``),
    [E, D] = (0, X.useState)(``),
    [O, k] = (0, X.useState)(`locomotion`),
    [A, j] = (0, X.useState)(!1),
    [M, N] = (0, X.useState)(!1),
    [P, F] = (0, X.useState)(null),
    [I, L] = (0, X.useState)(null),
    [R, z] = (0, X.useState)(null),
    [B, V] = (0, X.useState)(null),
    H = e.state === `complete` || e.state === `outdated`,
    U = e.state === `in-progress`,
    ee = e.state === `available`,
    W = (0, X.useMemo)(() => {
      let e = r?.animation_plan;
      return e ? { characters: e.characters || [] } : null;
    }, [r]),
    G = (0, X.useCallback)(
      async (e) => {
        if (!c) throw Error(`No session`);
        let t = await kI.replaceAnimationPlan(c, { characters: e });
        if (!t.success) throw Error(t.error || `Failed to save plan`);
        let n = t.animation_plan,
          i = r?.animation_plan?.library;
        o?.({ animation_plan: n ?? { characters: e, library: i } });
      },
      [c, o, r],
    ),
    te = (0, X.useMemo)(
      () => (W ? W.characters.reduce((e, t) => e + t.animations.length, 0) : 0),
      [W],
    ),
    K = (0, X.useCallback)((e) => {
      f((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    }, []),
    ne = (0, X.useCallback)((e) => {
      (m(e.animation_id), g(e.name), v(e.description), b(!!e.loop), V(null));
    }, []),
    re = (0, X.useCallback)(() => {
      (m(null), g(``), v(``), b(!1));
    }, []),
    ie = (0, X.useCallback)(
      async (e) => {
        if (W) {
          (F(e), V(null));
          try {
            let t = W.characters.map((t) => ({
              ...t,
              animations: t.animations.map((t) =>
                t.animation_id === e
                  ? {
                      ...t,
                      name: h.trim() || t.name,
                      description: _.trim(),
                      loop: y,
                    }
                  : t,
              ),
            }));
            (await G(t), re());
          } catch (e) {
            V(e instanceof Error ? e.message : `Failed to save`);
          } finally {
            F(null);
          }
        }
      },
      [W, h, _, y, G, re],
    ),
    ae = (0, X.useCallback)(
      async (e) => {
        if (W) {
          (L(e), V(null));
          try {
            let t = W.characters.map((t) => ({
              ...t,
              animations: t.animations.filter((t) => t.animation_id !== e),
            }));
            await G(t);
          } catch (e) {
            V(e instanceof Error ? e.message : `Failed to remove`);
          } finally {
            L(null);
          }
        }
      },
      [W, G],
    ),
    oe = (0, X.useCallback)(
      async (e) => {
        if (!(!W || !w.trim())) {
          V(null);
          try {
            let t = {
                animation_id: `${e}_${w.trim().toLowerCase().replace(/\s+/g, `_`)}_${Date.now()}`,
                name: w.trim(),
                description: E.trim(),
                category: O,
                priority: `important`,
                loop: A,
              },
              n = W.characters.map((n) =>
                n.asset_name === e
                  ? { ...n, animations: [...n.animations, t] }
                  : n,
              );
            (await G(n), C(null), T(``), D(``), k(`locomotion`), j(!1));
          } catch (e) {
            V(e instanceof Error ? e.message : `Failed to add`);
          }
        }
      },
      [W, w, E, O, A, G],
    ),
    se = (0, X.useCallback)(
      async (e, t) => {
        if (!c) return;
        let n = a.find((t) => t.asset_name === e.asset_name)?.id;
        if (!n) {
          V(`No rigged character found for ${e.asset_name}`);
          return;
        }
        (z(t.animation_id), V(null));
        try {
          let e = await kI.regenerateAnimation(c, n, t.animation_id);
          if (!e.success) throw Error(e.error || `Generation failed`);
          let r = await kI.getAnimationPlan(c);
          r.success &&
            r.animation_plan &&
            o?.({ animation_plan: r.animation_plan });
        } catch (e) {
          V(e instanceof Error ? e.message : `Failed to generate`);
        } finally {
          z(null);
        }
      },
      [c, a, o],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, Z.jsxs)(`h4`, {
            className: `text-sm font-semibold text-gray-300 flex items-center gap-2`,
            children: [
              (0, Z.jsx)(Qt, { className: `h-4 w-4 text-primary` }),
              `Animation Plan`,
            ],
          }),
          W &&
            (0, Z.jsxs)(`span`, {
              className: `text-xs text-gray-500`,
              children: [
                W.characters.length,
                ` characters, `,
                te,
                ` animations`,
              ],
            }),
        ],
      }),
      B &&
        (0, Z.jsxs)(`div`, {
          className: `text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded px-2 py-1.5 flex items-start justify-between gap-2`,
          children: [
            (0, Z.jsx)(`span`, { className: `flex-1`, children: B }),
            (0, Z.jsx)(`button`, {
              onClick: () => V(null),
              className: `text-red-300 hover:text-red-200 shrink-0`,
              children: (0, Z.jsx)(li, { className: `w-3 h-3` }),
            }),
          ],
        }),
      !W &&
        !U &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(Qt, { className: `h-8 w-8 text-gray-600 mx-auto mb-2` }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-gray-500`,
              children: `No animation plan yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-gray-600 mt-1`,
              children: `Generate a plan to define which animations each character needs.`,
            }),
          ],
        }),
      U &&
        !W &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-center gap-2 text-sm text-primary py-8`,
          children: [
            (0, Z.jsx)(J, { className: `h-5 w-5 animate-spin` }),
            `Planning animations...`,
          ],
        }),
      W &&
        W.characters.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `space-y-2`,
          children: W.characters.map((e) => {
            let n = d.has(e.asset_name),
              r = e.animations.length;
            return (0, Z.jsxs)(
              `div`,
              {
                className: `border border-gray-700/50 rounded-lg overflow-hidden`,
                children: [
                  (0, Z.jsxs)(`button`, {
                    onClick: () => K(e.asset_name),
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
                        children: [r, ` anim`, r === 1 ? `` : `s`],
                      }),
                    ],
                  }),
                  n &&
                    (0, Z.jsxs)(`div`, {
                      className: `border-t border-gray-700/30`,
                      children: [
                        e.animations.map((n) => {
                          let r = p === n.animation_id,
                            i =
                              xV[n.category] ||
                              `bg-gray-500/20 text-gray-300 border-gray-500/30`,
                            a = SV[n.priority] || `text-gray-400`;
                          return (0, Z.jsx)(
                            `div`,
                            {
                              className: `px-3 py-2 border-b border-gray-700/20 last:border-b-0 hover:bg-gray-800/20`,
                              children: r
                                ? (0, Z.jsxs)(`div`, {
                                    className: `space-y-1.5`,
                                    children: [
                                      (0, Z.jsx)(`input`, {
                                        value: h,
                                        onChange: (e) => g(e.target.value),
                                        className: `w-full h-7 bg-gray-700/50 border border-gray-600/50 rounded px-2 text-xs text-gray-200 focus:outline-none focus:border-purple-500/50`,
                                        placeholder: `Animation name`,
                                        autoFocus: !0,
                                      }),
                                      (0, Z.jsx)(`input`, {
                                        value: _,
                                        onChange: (e) => v(e.target.value),
                                        className: `w-full h-7 bg-gray-700/50 border border-gray-600/50 rounded px-2 text-xs text-gray-200 focus:outline-none focus:border-purple-500/50`,
                                        placeholder: `Description`,
                                      }),
                                      (0, Z.jsxs)(`label`, {
                                        className: `flex items-center gap-1.5 text-[10px] text-gray-400`,
                                        children: [
                                          (0, Z.jsx)(`input`, {
                                            type: `checkbox`,
                                            checked: y,
                                            onChange: (e) =>
                                              b(e.target.checked),
                                            className: `accent-purple-500`,
                                          }),
                                          `Loops`,
                                        ],
                                      }),
                                      (0, Z.jsxs)(`div`, {
                                        className: `flex gap-1.5`,
                                        children: [
                                          (0, Z.jsxs)(x, {
                                            size: `sm`,
                                            variant: `ghost`,
                                            onClick: re,
                                            className: `h-6 px-2 text-[10px]`,
                                            disabled: P === n.animation_id,
                                            children: [
                                              (0, Z.jsx)(li, {
                                                className: `w-3 h-3 mr-1`,
                                              }),
                                              ` Cancel`,
                                            ],
                                          }),
                                          (0, Z.jsx)(x, {
                                            size: `sm`,
                                            onClick: () => ie(n.animation_id),
                                            className: `h-6 px-2 text-[10px] flex-1`,
                                            disabled:
                                              P === n.animation_id || !h.trim(),
                                            children:
                                              P === n.animation_id
                                                ? (0, Z.jsx)(J, {
                                                    className: `w-3 h-3 animate-spin`,
                                                  })
                                                : `Save`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, Z.jsxs)(`div`, {
                                    className: `flex items-start gap-2`,
                                    children: [
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
                                                className: `text-[9px] px-1.5 py-0.5 rounded border ${i}`,
                                                children: n.category,
                                              }),
                                              n.loop &&
                                                (0, Z.jsx)(Ro, {
                                                  className: `w-3 h-3 text-blue-400`,
                                                }),
                                            ],
                                          }),
                                          (0, Z.jsx)(`p`, {
                                            className: `text-[10px] text-gray-500 mt-0.5 line-clamp-1`,
                                            children: n.description,
                                          }),
                                          (0, Z.jsxs)(`div`, {
                                            className: `flex items-center gap-2 mt-0.5`,
                                            children: [
                                              (0, Z.jsx)(`span`, {
                                                className: `text-[9px] ${a}`,
                                                children: n.priority?.replace(
                                                  /_/g,
                                                  ` `,
                                                ),
                                              }),
                                              n.estimated_duration_sec &&
                                                (0, Z.jsxs)(`span`, {
                                                  className: `text-[9px] text-gray-600`,
                                                  children: [
                                                    `~`,
                                                    n.estimated_duration_sec,
                                                    `s`,
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Z.jsxs)(`div`, {
                                        className: `flex gap-1 shrink-0`,
                                        children: [
                                          DI(n) &&
                                            (0, Z.jsx)(`button`, {
                                              onClick: () => se(e, n),
                                              disabled:
                                                R === n.animation_id || t,
                                              className: `p-1 text-purple-400 hover:text-purple-300 transition-colors disabled:opacity-40`,
                                              title:
                                                u === null
                                                  ? `Generate this animation`
                                                  : `Generate this animation (${u} coins per clip)`,
                                              children:
                                                R === n.animation_id
                                                  ? (0, Z.jsx)(J, {
                                                      className: `w-3 h-3 animate-spin`,
                                                    })
                                                  : (0, Z.jsx)(bn, {
                                                      className: `w-3 h-3`,
                                                    }),
                                            }),
                                          (0, Z.jsx)(`button`, {
                                            onClick: () => ne(n),
                                            className: `p-1 text-gray-500 hover:text-gray-300 transition-colors`,
                                            title: `Edit`,
                                            children: (0, Z.jsx)(di, {
                                              className: `w-3 h-3`,
                                            }),
                                          }),
                                          (0, Z.jsx)(`button`, {
                                            onClick: () => ae(n.animation_id),
                                            disabled: I === n.animation_id,
                                            className: `p-1 text-gray-500 hover:text-red-400 transition-colors disabled:opacity-40`,
                                            title: `Remove`,
                                            children:
                                              I === n.animation_id
                                                ? (0, Z.jsx)(J, {
                                                    className: `w-3 h-3 animate-spin`,
                                                  })
                                                : (0, Z.jsx)(qr, {
                                                    className: `w-3 h-3`,
                                                  }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                            },
                            n.animation_id,
                          );
                        }),
                        S === e.asset_name
                          ? (0, Z.jsxs)(`div`, {
                              className: `px-3 py-2 space-y-1.5 bg-gray-800/20`,
                              children: [
                                (0, Z.jsx)(`input`, {
                                  value: w,
                                  onChange: (e) => T(e.target.value),
                                  className: `w-full h-7 bg-gray-700/50 border border-gray-600/50 rounded px-2 text-xs text-gray-200 focus:outline-none focus:border-purple-500/50`,
                                  placeholder: `Animation name (e.g., Jump)`,
                                  autoFocus: !0,
                                  onKeyDown: (t) =>
                                    t.key === `Enter` && oe(e.asset_name),
                                }),
                                (0, Z.jsx)(`input`, {
                                  value: E,
                                  onChange: (e) => D(e.target.value),
                                  className: `w-full h-7 bg-gray-700/50 border border-gray-600/50 rounded px-2 text-xs text-gray-200 focus:outline-none focus:border-purple-500/50`,
                                  placeholder: `Description of the animation`,
                                  onKeyDown: (t) =>
                                    t.key === `Enter` && oe(e.asset_name),
                                }),
                                (0, Z.jsxs)(`div`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, Z.jsx)(`select`, {
                                      value: O,
                                      onChange: (e) => k(e.target.value),
                                      className: `h-7 bg-gray-700/50 border border-gray-600/50 rounded px-2 text-[10px] text-gray-200 focus:outline-none focus:border-purple-500/50`,
                                      children: Object.keys(xV).map((e) =>
                                        (0, Z.jsx)(
                                          `option`,
                                          { value: e, children: e },
                                          e,
                                        ),
                                      ),
                                    }),
                                    (0, Z.jsxs)(`label`, {
                                      className: `flex items-center gap-1 text-[10px] text-gray-400`,
                                      children: [
                                        (0, Z.jsx)(`input`, {
                                          type: `checkbox`,
                                          checked: A,
                                          onChange: (e) => j(e.target.checked),
                                          className: `accent-purple-500`,
                                        }),
                                        `Loops`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Z.jsxs)(`div`, {
                                  className: `flex gap-1.5`,
                                  children: [
                                    (0, Z.jsx)(x, {
                                      size: `sm`,
                                      variant: `ghost`,
                                      onClick: () => {
                                        (C(null),
                                          T(``),
                                          D(``),
                                          k(`locomotion`),
                                          j(!1));
                                      },
                                      className: `h-6 px-2 text-[10px]`,
                                      children: `Cancel`,
                                    }),
                                    (0, Z.jsxs)(x, {
                                      size: `sm`,
                                      disabled: !w.trim(),
                                      onClick: () => oe(e.asset_name),
                                      className: `h-6 px-2 text-[10px] flex-1`,
                                      children: [
                                        (0, Z.jsx)(ni, {
                                          className: `w-3 h-3 mr-1`,
                                        }),
                                        ` Add`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, Z.jsxs)(`button`, {
                              onClick: () => C(e.asset_name),
                              className: `w-full px-3 py-1.5 text-[10px] text-gray-500 hover:text-gray-300 hover:bg-gray-800/20 flex items-center gap-1 transition-colors`,
                              children: [
                                (0, Z.jsx)(ni, { className: `w-3 h-3` }),
                                ` Add animation`,
                              ],
                            }),
                      ],
                    }),
                ],
              },
              e.asset_id || e.asset_name,
            );
          }),
        }),
      W &&
        W.characters.some((e) => e.state_machine) &&
        (0, Z.jsxs)(`div`, {
          className: `border border-gray-700/50 rounded-lg overflow-hidden`,
          children: [
            (0, Z.jsxs)(`button`, {
              onClick: () => N(!M),
              className: `w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-800/30 transition-colors`,
              children: [
                M
                  ? (0, Z.jsx)(ti, { className: `w-3.5 h-3.5 text-gray-400` })
                  : (0, Z.jsx)(De, { className: `w-3.5 h-3.5 text-gray-400` }),
                (0, Z.jsx)(so, { className: `w-3.5 h-3.5 text-purple-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-xs text-gray-300 font-medium`,
                  children: `State Machine`,
                }),
              ],
            }),
            M &&
              (0, Z.jsx)(`div`, {
                className: `border-t border-gray-700/30 px-3 py-2 space-y-3`,
                children: W.characters
                  .filter((e) => e.state_machine)
                  .map((e) =>
                    (0, Z.jsxs)(
                      `div`,
                      {
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `text-[10px] text-gray-400 font-medium`,
                            children: e.asset_name?.replace(/_/g, ` `),
                          }),
                          (0, Z.jsx)(_V, {
                            stateMachine: e.state_machine,
                            height: 220,
                            className: `mt-1 rounded border border-gray-700/30 overflow-hidden`,
                          }),
                        ],
                      },
                      e.asset_id || e.asset_name,
                    ),
                  ),
              }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          ee &&
            !W &&
            (0, Z.jsx)(an, {
              onClick: () => {
                n?.(e.id, `Plan animations for all rigged characters`);
              },
              className: `w-full`,
              disabled: t,
              cost: l,
              label: `Plan Animations`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              isLoading: U,
              loadingText: `Planning animations...`,
              tooltip: `Analyze game design and plan animations for each character`,
              checkBalance: !0,
            }),
          H &&
            W &&
            (0, Z.jsx)(an, {
              variant: `outline`,
              onClick: () => {
                n?.(e.id, `Regenerate the animation plan`, {
                  params: { regenerate: !0 },
                });
              },
              className: `w-full`,
              disabled: t,
              cost: l,
              label: `Regenerate Plan`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              tooltip: `Regenerate the animation plan from scratch`,
              checkBalance: !0,
            }),
          U &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary py-2`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Planning animations...`,
              ],
            }),
          (W || H) &&
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
