// assets__Create-ea24k1TY 286 — classname
// Lines 99584-100358 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var z_e = ({ selectedStateId: e }) => {
    let { stateMachine: t, loadStateMachine: n } = R6(),
      r = t?.states.find((t) => t.id === e),
      i = R6((e) => e.characters),
      a = R6((e) => e.selectedCharacterId),
      o = X.useMemo(
        () => i.find((e) => e.assetId === a)?.animations || [],
        [i, a],
      ),
      s = (0, X.useCallback)(
        (r) => {
          !t ||
            !e ||
            n({
              ...t,
              states: t.states.map((t) => (t.id === e ? { ...t, ...r } : t)),
            });
        },
        [t, e, n],
      ),
      c = (0, X.useCallback)(() => {
        !t || !e || n({ ...t, defaultStateId: e });
      }, [t, e, n]),
      l = (0, X.useCallback)(() => {
        !t ||
          !e ||
          n({
            ...t,
            states: t.states.filter((t) => t.id !== e),
            transitions: t.transitions.filter(
              (t) => t.fromStateId !== e && t.toStateId !== e,
            ),
            defaultStateId:
              t.defaultStateId === e
                ? t.states.find((t) => t.id !== e)?.id || ``
                : t.defaultStateId,
          });
      }, [t, e, n]);
    if (!r)
      return (0, Z.jsx)(`div`, {
        className: `text-xs text-muted-foreground/50 text-center py-4`,
        children: `Select a state node to edit its properties`,
      });
    let u = t?.defaultStateId === e;
    return (0, Z.jsxs)(`div`, {
      className: `text-xs space-y-3`,
      children: [
        (0, Z.jsx)(`h4`, {
          className: `font-semibold text-foreground/70`,
          children: `State Properties`,
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-muted-foreground text-[10px]`,
              children: `Name`,
            }),
            (0, Z.jsx)(`input`, {
              type: `text`,
              value: r.name,
              onChange: (e) => s({ name: e.target.value }),
              className: `w-full mt-0.5 bg-muted border border-border text-foreground rounded px-2 py-1 text-xs`,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-muted-foreground text-[10px]`,
              children: `Animation`,
            }),
            (0, Z.jsxs)(`select`, {
              value: r.animationId || ``,
              onChange: (e) => s({ animationId: e.target.value || null }),
              className: `w-full mt-0.5 bg-muted border border-border text-muted-foreground rounded px-1.5 py-1 text-[10px]`,
              children: [
                (0, Z.jsx)(`option`, { value: ``, children: `(none)` }),
                o.map((e) =>
                  (0, Z.jsx)(
                    `option`,
                    { value: e.animationId, children: e.name },
                    e.animationId,
                  ),
                ),
              ],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-muted-foreground`,
              children: `Loop`,
            }),
            (0, Z.jsx)(`button`, {
              onClick: () => s({ loop: !r.loop }),
              className: `w-8 h-4 rounded-full transition-colors ${r.loop ? `bg-primary` : `bg-muted`}`,
              children: (0, Z.jsx)(`div`, {
                className: `w-3 h-3 rounded-full bg-white transition-transform mx-0.5 ${r.loop ? `translate-x-3.5` : `translate-x-0`}`,
              }),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-muted-foreground`,
                  children: `Speed`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `text-muted-foreground/50 font-mono`,
                  children: [r.speed.toFixed(1), `x`],
                }),
              ],
            }),
            (0, Z.jsx)(`input`, {
              type: `range`,
              min: 0.1,
              max: 3,
              step: 0.1,
              value: r.speed,
              onChange: (e) => s({ speed: Number(e.target.value) }),
              className: `w-full h-1 accent-primary mt-1`,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5 pt-1`,
          children: [
            !u &&
              (0, Z.jsxs)(`button`, {
                onClick: c,
                className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors`,
                children: [
                  (0, Z.jsx)(Qo, { className: `h-3 w-3` }),
                  `Set as Default`,
                ],
              }),
            u &&
              (0, Z.jsx)(`div`, {
                className: `text-center text-green-400 text-[10px] py-1`,
                children: `★ Default State`,
              }),
            (0, Z.jsxs)(`button`, {
              onClick: l,
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors`,
              children: [
                (0, Z.jsx)(qr, { className: `h-3 w-3` }),
                `Delete State`,
              ],
            }),
          ],
        }),
      ],
    });
  },
  B_e = ({ selectedTransitionId: e }) => {
    let { stateMachine: t, loadStateMachine: n } = R6(),
      r = t?.transitions.find((t) => t.id === e),
      i = r
        ? r.fromStateId === `*`
          ? null
          : t?.states.find((e) => e.id === r.fromStateId)
        : null,
      a = r ? t?.states.find((e) => e.id === r.toStateId) : null,
      o = (0, X.useCallback)(
        (r) => {
          !t ||
            !e ||
            n({
              ...t,
              transitions: t.transitions.map((t) =>
                t.id === e ? { ...t, ...r } : t,
              ),
            });
        },
        [t, e, n],
      ),
      s = (0, X.useCallback)(() => {
        !t ||
          !e ||
          n({ ...t, transitions: t.transitions.filter((t) => t.id !== e) });
      }, [t, e, n]);
    return r
      ? (0, Z.jsxs)(`div`, {
          className: `text-xs space-y-3`,
          children: [
            (0, Z.jsx)(`h4`, {
              className: `font-semibold text-foreground/70`,
              children: `Transition Properties`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1.5 bg-muted/50 rounded p-2`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-primary font-mono text-[10px]`,
                  children:
                    r.fromStateId === `*` ? `Any State` : i?.name || `?`,
                }),
                (0, Z.jsx)(_e, {
                  className: `h-3 w-3 text-muted-foreground/50`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-blue-300 font-mono text-[10px]`,
                  children: a?.name || `?`,
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-muted-foreground text-[10px]`,
                  children: `Condition`,
                }),
                (0, Z.jsx)(`input`, {
                  type: `text`,
                  value: r.condition,
                  onChange: (e) => o({ condition: e.target.value }),
                  placeholder: `e.g., speed > 0.1`,
                  className: `w-full mt-0.5 bg-muted border border-border text-foreground rounded px-2 py-1 text-xs font-mono`,
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      className: `text-muted-foreground`,
                      children: `Blend Time`,
                    }),
                    (0, Z.jsxs)(`span`, {
                      className: `text-muted-foreground/50 font-mono`,
                      children: [r.blendTime.toFixed(2), `s`],
                    }),
                  ],
                }),
                (0, Z.jsx)(`input`, {
                  type: `range`,
                  min: 0,
                  max: 2,
                  step: 0.05,
                  value: r.blendTime,
                  onChange: (e) => o({ blendTime: Number(e.target.value) }),
                  className: `w-full h-1 accent-primary mt-1`,
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      className: `text-muted-foreground`,
                      children: `Priority`,
                    }),
                    (0, Z.jsx)(`input`, {
                      type: `number`,
                      min: 0,
                      max: 100,
                      value: r.priority,
                      onChange: (e) => o({ priority: Number(e.target.value) }),
                      className: `w-12 bg-muted border border-border text-muted-foreground rounded px-1 py-0.5 text-[10px] text-center`,
                    }),
                  ],
                }),
                (0, Z.jsx)(`p`, {
                  className: `text-[10px] text-muted-foreground/50 mt-0.5`,
                  children: `Higher priority wins when multiple transitions match`,
                }),
              ],
            }),
            (0, Z.jsxs)(`button`, {
              onClick: s,
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors mt-2`,
              children: [
                (0, Z.jsx)(qr, { className: `h-3 w-3` }),
                `Delete Transition`,
              ],
            }),
          ],
        })
      : (0, Z.jsx)(`div`, {
          className: `text-xs text-muted-foreground/50 text-center py-4`,
          children: `Select a transition edge to edit its properties`,
        });
  },
  V_e = () => {
    let { stateMachine: e, loadStateMachine: t } = R6(),
      n = e?.parameters || [],
      [r, i] = (0, X.useState)(``),
      [a, o] = (0, X.useState)(`float`),
      [s, c] = (0, X.useState)(!1),
      l = (0, X.useCallback)(
        (n) => {
          e && t({ ...e, parameters: n });
        },
        [e, t],
      ),
      u = (0, X.useCallback)(() => {
        if (!r.trim() || !e) return;
        let t = a !== `bool` && a !== `trigger` && 0;
        (l([...n, { name: r.trim(), type: a, defaultValue: t }]), i(``), c(!1));
      }, [r, a, n, l, e]),
      d = (0, X.useCallback)(
        (e) => {
          l(n.filter((t, n) => n !== e));
        },
        [n, l],
      ),
      f = (0, X.useCallback)(
        (e, t) => {
          l(n.map((n, r) => (r === e ? { ...n, ...t } : n)));
        },
        [n, l],
      );
    return e
      ? (0, Z.jsxs)(`div`, {
          className: `text-xs space-y-2`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, Z.jsxs)(`h4`, {
                  className: `font-semibold text-foreground/70 flex items-center gap-1`,
                  children: [
                    (0, Z.jsx)(as, { className: `h-3 w-3` }),
                    `Parameters`,
                  ],
                }),
                (0, Z.jsx)(`button`, {
                  onClick: () => c(!s),
                  className: `p-1 rounded hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors`,
                  children: (0, Z.jsx)(ni, { className: `h-3 w-3` }),
                }),
              ],
            }),
            s &&
              (0, Z.jsxs)(`div`, {
                className: `bg-muted/50 rounded p-2 space-y-1.5`,
                children: [
                  (0, Z.jsx)(`input`, {
                    type: `text`,
                    value: r,
                    onChange: (e) => i(e.target.value),
                    placeholder: `Parameter name`,
                    className: `w-full bg-muted border border-border text-foreground rounded px-2 py-1 text-[10px]`,
                    onKeyDown: (e) => e.key === `Enter` && u(),
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex gap-1.5`,
                    children: [
                      (0, Z.jsxs)(`select`, {
                        value: a,
                        onChange: (e) => o(e.target.value),
                        className: `flex-1 bg-muted border border-border text-muted-foreground rounded px-1 py-0.5 text-[10px]`,
                        children: [
                          (0, Z.jsx)(`option`, {
                            value: `float`,
                            children: `float`,
                          }),
                          (0, Z.jsx)(`option`, {
                            value: `int`,
                            children: `int`,
                          }),
                          (0, Z.jsx)(`option`, {
                            value: `bool`,
                            children: `bool`,
                          }),
                          (0, Z.jsx)(`option`, {
                            value: `trigger`,
                            children: `trigger`,
                          }),
                        ],
                      }),
                      (0, Z.jsx)(`button`, {
                        onClick: u,
                        disabled: !r.trim(),
                        className: `px-2 py-0.5 bg-primary/20 text-primary rounded text-[10px] hover:bg-primary/30 disabled:opacity-30`,
                        children: `Add`,
                      }),
                    ],
                  }),
                ],
              }),
            n.length === 0 &&
              !s &&
              (0, Z.jsx)(`div`, {
                className: `text-muted-foreground/50 text-[10px] text-center py-1`,
                children: `No parameters defined`,
              }),
            (0, Z.jsx)(`div`, {
              className: `space-y-1`,
              children: n.map((e, t) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    className: `flex items-center gap-1.5 bg-muted/30 rounded px-2 py-1`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `text-muted-foreground font-mono text-[10px] flex-1 truncate`,
                        children: e.name,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-muted-foreground/50 text-[10px]`,
                        children: e.type,
                      }),
                      e.type === `bool` || e.type === `trigger`
                        ? (0, Z.jsx)(`button`, {
                            onClick: () =>
                              f(t, { defaultValue: !e.defaultValue }),
                            className: `w-6 h-3 rounded-full transition-colors ${e.defaultValue ? `bg-primary` : `bg-muted`}`,
                            children: (0, Z.jsx)(`div`, {
                              className: `w-2 h-2 rounded-full bg-white mx-0.5 transition-transform ${e.defaultValue ? `translate-x-2.5` : ``}`,
                            }),
                          })
                        : (0, Z.jsx)(`input`, {
                            type: `number`,
                            value: e.defaultValue,
                            onChange: (e) =>
                              f(t, { defaultValue: Number(e.target.value) }),
                            className: `w-10 bg-muted border border-border text-muted-foreground rounded px-0.5 py-0 text-[10px] text-center`,
                            step: e.type === `int` ? 1 : 0.1,
                          }),
                      (0, Z.jsx)(`button`, {
                        onClick: () => d(t),
                        className: `p-0.5 text-muted-foreground/50 hover:text-red-400 transition-colors`,
                        children: (0, Z.jsx)(qr, { className: `h-2.5 w-2.5` }),
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        })
      : (0, Z.jsx)(`div`, {
          className: `text-xs text-muted-foreground/50 text-center py-2`,
          children: `No state machine loaded`,
        });
  },
  H_e = [
    `locomotion`,
    `combat`,
    `interaction`,
    `emote`,
    `transition`,
    `environmental`,
  ],
  U_e = ({
    sessionId: e,
    scope: t,
    assetId: n,
    animation: r,
    onChanged: i,
    onDeleted: a,
  }) => {
    let o = t === `library`,
      [s, c] = (0, X.useState)(``),
      [l, u] = (0, X.useState)(``),
      [d, f] = (0, X.useState)(``),
      [p, m] = (0, X.useState)(`locomotion`),
      [h, g] = (0, X.useState)(!1),
      [_, v] = (0, X.useState)(!1),
      [y, b] = (0, X.useState)(!1),
      [x, S] = (0, X.useState)(!1),
      [C, w] = (0, X.useState)(!1),
      [T, E] = (0, X.useState)(null),
      [D, O] = (0, X.useState)(null);
    (0, X.useEffect)(() => {
      (c(r?.name || ``),
        u(r?.description || ``),
        f(r?.prompt_hint || ``),
        m(r?.category || `locomotion`),
        g(!!r?.loop),
        E(null),
        O(null),
        w(!1));
    }, [r?.animation_id]);
    let k =
        !!r &&
        (o
          ? s !== (r.name || ``)
          : s !== (r.name || ``) ||
            l !== (r.description || ``) ||
            d !== (r.prompt_hint || ``) ||
            p !== (r.category || `locomotion`) ||
            h !== !!r.loop),
      A = (0, X.useCallback)(async () => {
        if (!(!n || !r?.animation_id)) {
          (b(!0), E(null));
          try {
            let t = await kI.regenerateAnimation(e, n, r.animation_id);
            if (!t.success) throw Error(t.error || `Generation failed`);
            await i?.();
          } catch (e) {
            E(e instanceof Error ? e.message : `Generation failed`);
          } finally {
            b(!1);
          }
        }
      }, [e, n, r, i]),
      j = (0, X.useCallback)(async () => {
        if (r?.animation_id && !(!o && !n)) {
          (v(!0), E(null));
          try {
            let t = o
              ? await kI.updateLibraryAnimation(e, r.animation_id, { name: s })
              : await kI.updateAnimation(e, n, r.animation_id, {
                  name: s,
                  description: l,
                  prompt_hint: d,
                  category: p,
                  loop: h,
                });
            if (!t.success) throw Error(t.error || `Failed to save`);
            (O(Date.now()), await i?.());
          } catch (e) {
            E(e instanceof Error ? e.message : `Failed to save`);
          } finally {
            v(!1);
          }
        }
      }, [e, o, n, r, s, l, d, p, h, i]),
      M = (0, X.useCallback)(async () => {
        if (r?.animation_id) {
          (S(!0), E(null));
          try {
            let t = await kI.deleteLibraryAnimation(e, r.animation_id);
            if (!t.success) throw Error(t.error || `Failed to delete`);
            await a?.();
          } catch (e) {
            (E(e instanceof Error ? e.message : `Failed to delete`), w(!1));
          } finally {
            S(!1);
          }
        }
      }, [e, r, a]);
    if (!r)
      return (0, Z.jsx)(`div`, {
        className: `text-xs text-muted-foreground/50 text-center py-4`,
        children: `Select an animation`,
      });
    let N = r.status || `pending`;
    return (0, Z.jsxs)(`div`, {
      className: `text-xs space-y-3`,
      children: [
        (0, Z.jsxs)(`h4`, {
          className: `font-semibold text-foreground/70 flex items-center gap-1.5`,
          children: [
            (0, Z.jsx)(Qt, { className: `w-3.5 h-3.5` }),
            `Animation Properties`,
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between text-[10px]`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `text-muted-foreground/50`,
              children: `Status`,
            }),
            N === `generated`
              ? (0, Z.jsxs)(`span`, {
                  className: `inline-flex items-center gap-1 text-green-400`,
                  children: [
                    (0, Z.jsx)(Be, { className: `w-3 h-3` }),
                    ` generated`,
                  ],
                })
              : N === `failed`
                ? (0, Z.jsxs)(`span`, {
                    className: `inline-flex items-center gap-1 text-red-400`,
                    children: [
                      (0, Z.jsx)(oi, { className: `w-3 h-3` }),
                      ` failed`,
                    ],
                  })
                : N === `generating`
                  ? (0, Z.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1 text-blue-300`,
                      children: [
                        (0, Z.jsx)(J, { className: `w-3 h-3 animate-spin` }),
                        ` generating`,
                      ],
                    })
                  : (0, Z.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1 text-muted-foreground`,
                      children: [
                        (0, Z.jsx)(ei, { className: `w-3 h-3` }),
                        ` pending`,
                      ],
                    }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-muted-foreground text-[10px]`,
              children: `Name`,
            }),
            (0, Z.jsx)(`input`, {
              value: s,
              onChange: (e) => c(e.target.value),
              className: `w-full mt-0.5 bg-muted border border-border text-foreground rounded px-1.5 py-1 text-[11px]`,
            }),
          ],
        }),
        !o &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `text-muted-foreground text-[10px]`,
                    children: `Description`,
                  }),
                  (0, Z.jsx)(`textarea`, {
                    value: l,
                    onChange: (e) => u(e.target.value),
                    rows: 2,
                    className: `w-full mt-0.5 bg-muted border border-border text-foreground rounded px-1.5 py-1 text-[11px] resize-none`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `text-muted-foreground text-[10px]`,
                    children: `Prompt hint`,
                  }),
                  (0, Z.jsx)(`textarea`, {
                    value: d,
                    onChange: (e) => f(e.target.value),
                    rows: 2,
                    placeholder: `Used by the animation generator`,
                    className: `w-full mt-0.5 bg-muted border border-border text-muted-foreground rounded px-1.5 py-1 text-[11px] resize-none`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-2`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`label`, {
                        className: `text-muted-foreground text-[10px]`,
                        children: `Category`,
                      }),
                      (0, Z.jsx)(`select`, {
                        value: p,
                        onChange: (e) => m(e.target.value),
                        className: `w-full mt-0.5 bg-muted border border-border text-muted-foreground rounded px-1.5 py-1 text-[10px]`,
                        children: H_e.map((e) =>
                          (0, Z.jsx)(`option`, { value: e, children: e }, e),
                        ),
                      }),
                    ],
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `flex items-end`,
                    children: (0, Z.jsxs)(`label`, {
                      className: `flex items-center gap-1.5 text-muted-foreground cursor-pointer`,
                      children: [
                        (0, Z.jsx)(`input`, {
                          type: `checkbox`,
                          checked: h,
                          onChange: (e) => g(e.target.checked),
                          className: `rounded`,
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-[10px]`,
                          children: `Loop`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5 pt-1`,
          children: [
            (0, Z.jsxs)(`button`, {
              onClick: j,
              disabled: !k || _ || y || x,
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
              children: [
                _
                  ? (0, Z.jsx)(J, { className: `w-3 h-3 animate-spin` })
                  : (0, Z.jsx)(Bo, { className: `w-3 h-3` }),
                o ? `Rename` : `Save`,
              ],
            }),
            !o &&
              r &&
              !DI(r) &&
              (0, Z.jsx)(`p`, {
                className: `text-muted-foreground text-[10px]`,
                children: `This clip comes from source motion. Edit it in Animation Studio or capture a new take.`,
              }),
            !o &&
              (!r || DI(r)) &&
              (0, Z.jsxs)(`button`, {
                onClick: A,
                disabled: y || _ || !n,
                className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${N === `generated` ? `bg-primary/20 text-primary hover:bg-primary/30` : `bg-green-500/20 text-green-300 hover:bg-green-500/30`}`,
                children: [
                  y
                    ? (0, Z.jsx)(J, { className: `w-3 h-3 animate-spin` })
                    : N === `generated`
                      ? (0, Z.jsx)(Ro, { className: `w-3 h-3` })
                      : (0, Z.jsx)(bn, { className: `w-3 h-3` }),
                  N === `generated` ? `Regenerate` : `Generate`,
                ],
              }),
            o &&
              (C
                ? (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, Z.jsxs)(`button`, {
                        onClick: M,
                        disabled: x || _,
                        className: `flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                        children: [
                          x
                            ? (0, Z.jsx)(J, {
                                className: `w-3 h-3 animate-spin`,
                              })
                            : (0, Z.jsx)(qr, { className: `w-3 h-3` }),
                          `Confirm delete`,
                        ],
                      }),
                      (0, Z.jsx)(`button`, {
                        onClick: () => w(!1),
                        disabled: x,
                        className: `px-2 py-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-30`,
                        children: `Cancel`,
                      }),
                    ],
                  })
                : (0, Z.jsxs)(`button`, {
                    onClick: () => w(!0),
                    disabled: x || _,
                    className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-500/10 text-red-300/90 rounded hover:bg-red-500/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                    children: [
                      (0, Z.jsx)(qr, { className: `w-3 h-3` }),
                      `Delete`,
                    ],
                  })),
          ],
        }),
        T &&
          (0, Z.jsx)(`div`, {
            className: `text-[10px] text-red-400 bg-red-500/10 border border-red-500/20 rounded px-2 py-1`,
            children: T,
          }),
        D &&
          !k &&
          !T &&
          (0, Z.jsx)(`div`, {
            className: `text-[10px] text-green-400 text-center`,
            children: `Saved`,
          }),
      ],
    });
  };
