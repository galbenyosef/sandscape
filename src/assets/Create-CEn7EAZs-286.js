// Create-CEn7EAZs 286 — classname
// Lines 98155-100263 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var K_e = ({ targets: e }) => {
    let t = L6((e) => e.currentFrame),
      n = G_e(e),
      r = n.targets.length;
    if (r === 0)
      return (0, Z.jsx)(R7, {
        className: `text-[11px] font-normal text-muted-foreground`,
        children: `Select a bone first`,
      });
    let i = r > 1 ? ` (${r} bones)` : ``,
      a = n.mutedCount === r;
    return (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(R7, {
          className: `text-[11px] text-muted-foreground/70`,
          children: r === 1 ? n.targets[0] : `${r} bones selected`,
        }),
        (0, Z.jsx)(z7, {}),
        (0, Z.jsxs)(L7, {
          onSelect: n.setOffsetKeysAtPlayhead,
          className: `text-xs`,
          children: [
            (0, Z.jsx)(zo, { className: `h-3 w-3 mr-2` }),
            `Set offset keyframe at F`,
            t,
            i,
          ],
        }),
        (0, Z.jsxs)(L7, {
          onSelect: n.deleteOffsetKeysAtPlayhead,
          disabled: n.keysAtPlayhead === 0,
          className: `text-xs`,
          children: [
            (0, Z.jsx)(jr, { className: `h-3 w-3 mr-2` }),
            `Delete keys at F`,
            t,
            n.keysAtPlayhead > 0 ? ` (${n.keysAtPlayhead})` : ``,
          ],
        }),
        (0, Z.jsxs)(L7, {
          onSelect: n.deleteAllOffsetKeys,
          disabled: n.offsetKeyCount === 0,
          className: `text-xs`,
          children: [
            (0, Z.jsx)(jr, { className: `h-3 w-3 mr-2` }),
            `Delete all offset keys`,
            n.offsetKeyCount > 0 ? ` (${n.offsetKeyCount})` : ``,
          ],
        }),
        (0, Z.jsx)(z7, {}),
        a
          ? (0, Z.jsxs)(L7, {
              onSelect: n.restoreAnimation,
              className: `text-xs`,
              children: [
                (0, Z.jsx)(F, { className: `h-3 w-3 mr-2` }),
                `Restore animation`,
                i,
              ],
            })
          : (0, Z.jsxs)(L7, {
              onSelect: n.eraseAnimation,
              className: `text-xs`,
              children: [
                (0, Z.jsx)(j, { className: `h-3 w-3 mr-2` }),
                `Erase animation`,
                i,
              ],
            }),
        (0, Z.jsx)(z7, {}),
        (0, Z.jsxs)(L7, {
          onSelect: n.selectChildren,
          className: `text-xs`,
          children: [
            (0, Z.jsx)(ps, { className: `h-3 w-3 mr-2` }),
            `Select children`,
          ],
        }),
      ],
    });
  },
  B7 = ({ value: e, onChange: t, disabled: n, title: r, className: i = `` }) =>
    (0, Z.jsx)(`input`, {
      type: `range`,
      min: 0,
      max: 100,
      step: 1,
      value: Math.round(e * 100),
      disabled: n,
      title: r,
      onChange: (e) => t(Number(e.target.value) / 100),
      className: `min-w-0 ${i}`,
    }),
  V7 = ({ children: e }) =>
    (0, Z.jsx)(`div`, {
      className: `text-xs text-muted-foreground/50 text-center py-4`,
      children: e,
    }),
  q_e = () => {
    let {
        boneNames: e,
        boneParents: t,
        selectedBoneName: n,
        selectedBoneNames: r,
        mutedBones: i,
        boneOffsets: a,
        selectBone: o,
      } = L6(),
      [s, c] = (0, X.useState)(new Set()),
      [l, u] = (0, X.useState)(null),
      d = (0, X.useRef)(new Map()),
      f = (0, X.useMemo)(() => {
        let n = new Map();
        for (let r of e) {
          let e = t[r] ?? null,
            i = n.get(e);
          i ? i.push(r) : n.set(e, [r]);
        }
        return n;
      }, [e, t]),
      p = (0, X.useMemo)(() => {
        let e = [],
          t = (n, r) => {
            let i = f.get(n) ?? [];
            if (
              (e.push({ name: n, depth: r, hasChildren: i.length > 0 }),
              !s.has(n))
            )
              for (let e of i) t(e, r + 1);
          };
        for (let e of f.get(null) ?? []) t(e, 0);
        return e;
      }, [f, s]),
      m = (0, X.useMemo)(() => {
        let e = new Map();
        for (let t of a) e.set(t.boneName, (e.get(t.boneName) ?? 0) + 1);
        return e;
      }, [a]),
      h = (0, X.useMemo)(() => new Set(r), [r]),
      g = (0, X.useMemo)(() => new Set(i), [i]);
    if (
      ((0, X.useEffect)(() => {
        n &&
          c((e) => {
            if (e.size === 0) return e;
            let r = new Set(e),
              i = !1,
              a = t[n] ?? null,
              o = new Set();
            for (; a && !o.has(a);)
              (o.add(a), r.delete(a) && (i = !0), (a = t[a] ?? null));
            return i ? r : e;
          });
      }, [n, t]),
      (0, X.useEffect)(() => {
        n && d.current.get(n)?.scrollIntoView({ block: `nearest` });
      }, [n, p]),
      e.length === 0)
    )
      return (0, Z.jsx)(V7, {
        children: `Select a character to list its bones`,
      });
    let _ = (e) => {
        c((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
      },
      v = (e, t) => {
        let n = t.shiftKey
          ? `range`
          : t.ctrlKey || t.metaKey
            ? `toggle`
            : `replace`;
        o(e, n);
      },
      y = l && !h.has(l) ? [l] : void 0;
    return (0, Z.jsxs)(R_e, {
      children: [
        (0, Z.jsx)(z_e, {
          asChild: !0,
          children: (0, Z.jsx)(`div`, {
            className: `text-xs max-h-64 overflow-y-auto -mx-1`,
            children: p.map((e) => {
              let t = h.has(e.name),
                r = e.name === n,
                i = m.get(e.name) ?? 0;
              return (0, Z.jsxs)(
                `div`,
                {
                  ref: (t) => {
                    t ? d.current.set(e.name, t) : d.current.delete(e.name);
                  },
                  onClick: (t) => v(e.name, t),
                  onContextMenu: () => u(e.name),
                  style: { paddingLeft: 4 + e.depth * 10 },
                  className: `flex items-center gap-1 pr-1.5 py-0.5 cursor-pointer select-none transition-colors ${r ? `bg-primary/25 text-foreground` : t ? `bg-primary/10 text-foreground/90` : `text-muted-foreground hover:bg-accent`}`,
                  children: [
                    e.hasChildren
                      ? (0, Z.jsx)(`button`, {
                          onClick: (t) => {
                            (t.stopPropagation(), _(e.name));
                          },
                          className: `p-0 text-muted-foreground/50 hover:text-foreground`,
                          title: s.has(e.name) ? `Expand` : `Collapse`,
                          children: s.has(e.name)
                            ? (0, Z.jsx)(Se, { className: `h-3 w-3` })
                            : (0, Z.jsx)(zr, { className: `h-3 w-3` }),
                        })
                      : (0, Z.jsx)(`span`, { className: `w-3` }),
                    (0, Z.jsx)(`span`, {
                      className: `font-mono truncate flex-1 ${g.has(e.name) ? `line-through opacity-60` : ``}`,
                      children: e.name,
                    }),
                    g.has(e.name) &&
                      (0, Z.jsx)(G, {
                        className: `h-2.5 w-2.5 text-muted-foreground/60`,
                        "aria-label": `animation erased`,
                      }),
                    i > 0 &&
                      (0, Z.jsxs)(`span`, {
                        className: `flex items-center gap-0.5 text-[9px] text-yellow-300/80`,
                        children: [(0, Z.jsx)(zo, { className: `h-2 w-2` }), i],
                      }),
                  ],
                },
                e.name,
              );
            }),
          }),
        }),
        (0, Z.jsx)(I7, {
          className: `w-60`,
          children: (0, Z.jsx)(K_e, { targets: y }),
        }),
      ],
    });
  },
  J_e = {
    hips: `Hips`,
    hand_l: `Left hand`,
    hand_r: `Right hand`,
    foot_l: `Left foot`,
    foot_r: `Right foot`,
    head: `Head aim`,
  },
  Y_e = () => {
    let {
        boneNames: e,
        ikKeys: t,
        ikEnabled: n,
        selectedEffector: r,
        ikGizmoMode: i,
        currentFrame: a,
        totalFrames: o,
        selectedKey: s,
        selectEffector: c,
        setIKEnabled: l,
        setIkGizmoMode: u,
        upsertIKKeyAtFrame: d,
        updateIKKey: f,
        removeIKKey: p,
        selectKey: m,
        setFrame: h,
      } = L6(),
      g = (0, X.useMemo)(() => {
        let t = new Set(e);
        return w6.filter((e) => E6(t, e) !== null);
      }, [e]),
      _ = (0, X.useMemo)(
        () =>
          t.filter((e) => e.effector === r).sort((e, t) => e.frame - t.frame),
        [t, r],
      ),
      v = (0, X.useMemo)(
        () =>
          s?.kind === `ik` ? (t.find((e) => e.id === s.id) ?? null) : null,
        [s, t],
      ),
      y = _.find((e) => e.frame === a) ?? null,
      b = v?.effector === r ? v : y,
      x = r ? n.includes(r) : !1;
    if (g.length === 0)
      return (0, Z.jsx)(V7, {
        children: `This skeleton has no hip, hand, foot or head bones to control`,
      });
    let S = () => {
        if (!r) return;
        let e = _.filter((e) => e.frame <= a).pop() ?? _[0],
          t = d(r, a, {
            offset: e?.offset ?? [0, 0, 0],
            rotation: e?.rotation ?? null,
            weight: e?.weight ?? 1,
          });
        m({ kind: `ik`, id: t });
      },
      C = () => {
        if (!r) return;
        let e = d(r, a, { offset: [0, 0, 0], rotation: null, weight: 1 });
        m({ kind: `ik`, id: e });
      },
      T = (e, t) => {
        if (!b) return;
        let n = [...b.offset];
        ((n[e] = t), f(b.id, { offset: n }));
      },
      E = (e) => {
        if (!b) return;
        let n = Math.max(0, Math.min(Math.round(e), o));
        if (n === b.frame) return;
        let r = t.find(
          (e) => e.id !== b.id && e.effector === b.effector && e.frame === n,
        );
        (r && p(r.id), f(b.id, { frame: n }));
      };
    return (0, Z.jsxs)(`div`, {
      className: `text-xs space-y-3`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `space-y-1`,
          children: g.map((e) => {
            let i = n.includes(e),
              a = t.filter((t) => t.effector === e).length;
            return (0, Z.jsxs)(
              `div`,
              {
                className: `flex items-center gap-2 px-1.5 py-1 rounded transition-colors ${r === e ? `bg-cyan-500/15` : ``}`,
                children: [
                  (0, Z.jsxs)(`button`, {
                    onClick: () => c(r === e ? null : e),
                    disabled: !i,
                    className: `flex-1 min-w-0 text-left truncate transition-colors ${i ? (r === e ? `text-cyan-200` : `text-muted-foreground hover:text-foreground`) : `text-muted-foreground/40 cursor-default`}`,
                    children: [
                      J_e[e],
                      a > 0 &&
                        (0, Z.jsx)(`span`, {
                          className: `ml-1 text-cyan-300/80`,
                          children: a,
                        }),
                    ],
                  }),
                  (0, Z.jsx)(ze, {
                    checked: i,
                    onCheckedChange: (t) => {
                      (l(e, t), t && c(e));
                    },
                  }),
                ],
              },
              e,
            );
          }),
        }),
        !r || !x
          ? (0, Z.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground/50 leading-relaxed`,
              children: `Turn a controller on and it rides the animation, changing nothing. Pick it, then drag its handle in the viewport to offset the effector from where the clip put it.`,
            })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                r !== `head` &&
                  (0, Z.jsx)(`div`, {
                    className: `flex gap-1`,
                    children: [`translate`, `rotate`].map((e) =>
                      (0, Z.jsxs)(
                        `button`,
                        {
                          onClick: () => u(e),
                          className: `flex-1 flex items-center justify-center gap-1 px-2 py-1 rounded text-[10px] transition-colors ${i === e ? `bg-primary/25 text-primary` : `bg-muted/30 text-muted-foreground hover:bg-muted/50`}`,
                          children: [
                            e === `translate`
                              ? (0, Z.jsx)(w, { className: `h-3 w-3` })
                              : (0, Z.jsx)(D, { className: `h-3 w-3` }),
                            e === `translate` ? `Move` : `Rotate`,
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-muted-foreground/60 min-w-0 truncate`,
                      children: b
                        ? v === b
                          ? `Editing key`
                          : `Key at playhead`
                        : `Following the animation`,
                    }),
                    b &&
                      (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `text-muted-foreground/40`,
                            children: `F`,
                          }),
                          (0, Z.jsx)(`input`, {
                            type: `number`,
                            min: 0,
                            max: o,
                            step: 1,
                            value: b.frame,
                            onChange: (e) => E(Number(e.target.value)),
                            className: `w-14 shrink-0 bg-muted border border-border text-foreground rounded px-1 py-0.5 text-[10px] text-center`,
                          }),
                          b.frame !== a &&
                            (0, Z.jsx)(`button`, {
                              onClick: () => h(b.frame),
                              title: `Move the playhead to this key`,
                              className: `p-0.5 shrink-0 text-muted-foreground/50 hover:text-foreground transition-colors`,
                              children: (0, Z.jsx)(Fo, {
                                className: `h-3 w-3`,
                              }),
                            }),
                        ],
                      }),
                  ],
                }),
                b &&
                  (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, Z.jsx)(`h4`, {
                            className: `font-semibold text-foreground/70`,
                            children: `Offset from the animation`,
                          }),
                          [`X`, `Y`, `Z`].map((e, t) =>
                            (0, Z.jsxs)(
                              `div`,
                              {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, Z.jsx)(`span`, {
                                    className: `w-3 shrink-0 font-bold text-muted-foreground`,
                                    children: e,
                                  }),
                                  (0, Z.jsx)(`input`, {
                                    type: `number`,
                                    step: 0.01,
                                    value: Number(b.offset[t].toFixed(4)),
                                    onChange: (e) =>
                                      T(t, Number(e.target.value)),
                                    className: `flex-1 min-w-0 bg-muted border border-border text-muted-foreground rounded px-1 py-0.5 text-[10px]`,
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `text-muted-foreground/60 w-12 shrink-0`,
                            children: `Weight`,
                          }),
                          (0, Z.jsx)(`input`, {
                            type: `range`,
                            min: 0,
                            max: 1,
                            step: 0.05,
                            value: b.weight,
                            onChange: (e) =>
                              f(b.id, { weight: Number(e.target.value) }),
                            className: `flex-1 min-w-0 h-1 accent-primary`,
                          }),
                          (0, Z.jsx)(`span`, {
                            className: `w-8 shrink-0 text-right text-muted-foreground/70`,
                            children: b.weight.toFixed(2),
                          }),
                        ],
                      }),
                      r !== `head` &&
                        (0, Z.jsx)(`button`, {
                          onClick: () => {
                            b &&
                              f(b.id, {
                                rotation: b.rotation ? null : [0, 0, 0],
                              });
                          },
                          className: `w-full px-2 py-1 rounded text-[10px] bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors`,
                          children: b.rotation
                            ? `Drop keyed orientation`
                            : `Also key the orientation`,
                        }),
                    ],
                  }),
                (0, Z.jsxs)(`div`, {
                  className: `flex gap-1.5`,
                  children: [
                    (0, Z.jsxs)(`button`, {
                      onClick: S,
                      title: `Pin the offset the controller currently holds`,
                      className: `flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-1.5 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors`,
                      children: [
                        (0, Z.jsx)(Br, { className: `h-3 w-3 shrink-0` }),
                        `Key F`,
                        a,
                      ],
                    }),
                    (0, Z.jsxs)(`button`, {
                      onClick: C,
                      title: `Return this effector to the animation at this frame`,
                      className: `flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-1.5 bg-muted/40 text-muted-foreground rounded hover:bg-muted/60 transition-colors`,
                      children: [
                        (0, Z.jsx)(we, { className: `h-3 w-3 shrink-0` }),
                        `Zero key`,
                      ],
                    }),
                    b &&
                      (0, Z.jsx)(`button`, {
                        onClick: () => p(b.id),
                        title: `Delete the key at F${b.frame}`,
                        className: `px-2 py-1.5 shrink-0 bg-red-500/20 text-red-300 rounded hover:bg-red-500/30 transition-colors`,
                        children: (0, Z.jsx)(jr, { className: `h-3 w-3` }),
                      }),
                  ],
                }),
                _.length > 0 &&
                  (0, Z.jsx)(`div`, {
                    className: `space-y-0.5 max-h-24 overflow-y-auto`,
                    children: _.map((e) => {
                      let t =
                        e.offset[0] === 0 &&
                        e.offset[1] === 0 &&
                        e.offset[2] === 0 &&
                        !e.rotation;
                      return (0, Z.jsxs)(
                        `button`,
                        {
                          onClick: () => m({ kind: `ik`, id: e.id }),
                          className: `w-full text-left px-2 py-1 rounded flex items-center justify-between gap-2 transition-colors ${e.id === b?.id ? `bg-primary/20 text-foreground` : `text-muted-foreground hover:bg-accent`}`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `font-mono shrink-0`,
                              children: [`F`, e.frame],
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `text-[10px] text-muted-foreground/50 truncate`,
                              children: t
                                ? `on the animation`
                                : `w ${e.weight.toFixed(2)}`,
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
                (0, Z.jsx)(`p`, {
                  className: `text-[10px] text-muted-foreground/50 leading-relaxed`,
                  children: `Offsets are in character space, so they travel with the character. Move the hips with the feet enabled and the feet stay where the clip put them.`,
                }),
              ],
            }),
      ],
    });
  },
  X_e = [
    { side: `l`, label: `Left foot` },
    { side: `r`, label: `Right foot` },
  ],
  Z_e = () => {
    let {
      footLock: e,
      plantRuntime: t,
      currentFrame: n,
      boneNames: r,
      selectedKey: i,
      upsertFootLockKeyAtFrame: a,
      updateFootLockKey: o,
      removeFootLockKey: s,
      clearFootLockKeys: c,
      selectKey: l,
    } = L6();
    if (!(r.includes(`foot_l`) || r.includes(`foot_r`)))
      return (0, Z.jsx)(V7, {
        children: `This skeleton has no foot bones to stabilize`,
      });
    let u = b5(e.keys);
    return (0, Z.jsxs)(`div`, {
      className: `text-xs space-y-3`,
      children: [
        X_e.map(({ side: e, label: r }) => {
          let d = u.get(e) ?? [],
            f = t.filter((t) => t.foot === e),
            p = d.find((e) => i?.kind === `foot` && i.id === e.id) ?? null,
            m = d.find((e) => e.frame === n) ?? null,
            h = p ?? m,
            g = h ? h.weight : x5(d, n);
          return (0, Z.jsxs)(
            `div`,
            {
              className: `space-y-2 pb-2 border-b border-border/50 last:border-0`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-2`,
                  children: [
                    (0, Z.jsxs)(`span`, {
                      className: `flex items-center gap-1.5 font-medium text-foreground/70`,
                      children: [
                        (0, Z.jsx)(rs, { className: `h-3.5 w-3.5` }),
                        r,
                      ],
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-muted-foreground/60`,
                      children:
                        d.length === 0
                          ? `not locked`
                          : `${d.length} ${d.length === 1 ? `key` : `keys`}`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-between text-[10px]`,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: `text-muted-foreground`,
                          children: h
                            ? `${p ? `Editing key` : `Key at playhead`} F${h.frame}`
                            : `Weight at F${n}`,
                        }),
                        (0, Z.jsxs)(`span`, {
                          className: `text-foreground/70 tabular-nums`,
                          children: [Math.round(g * 100), `%`],
                        }),
                      ],
                    }),
                    (0, Z.jsx)(B7, {
                      value: g,
                      onChange: (t) => {
                        if (h) {
                          o(h.id, { weight: t });
                          return;
                        }
                        let r = a(e, n, t);
                        l({ kind: `foot`, id: r });
                      },
                      title: h
                        ? `How hard this foot is pinned at the key being edited`
                        : `Moving this keys the weight at the playhead`,
                      className: `w-full accent-green-400`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, Z.jsxs)(`button`, {
                      onClick: () => {
                        let t = a(e, n, x5(d, n));
                        l({ kind: `foot`, id: t });
                      },
                      disabled: !!m,
                      title: m
                        ? `This foot already has a key at F${n}`
                        : `Key this foot’s weight at the playhead`,
                      className: `flex-1 min-w-0 flex items-center justify-center gap-1 px-2 py-1 rounded bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                      children: [
                        (0, Z.jsx)(Br, { className: `h-3 w-3 shrink-0` }),
                        `Add key`,
                      ],
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: () => h && s(h.id),
                      disabled: !h,
                      title: h
                        ? `Delete the key at F${h.frame}`
                        : `No key to delete`,
                      className: `px-2 py-1 shrink-0 rounded bg-muted/40 text-muted-foreground hover:bg-red-500/25 hover:text-red-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                      children: (0, Z.jsx)(jr, { className: `h-3 w-3` }),
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: () => c(e),
                      disabled: d.length === 0,
                      title: `Delete every key on this foot`,
                      className: `px-2 py-1 shrink-0 rounded bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                      children: (0, Z.jsx)(un, { className: `h-3 w-3` }),
                    }),
                  ],
                }),
                f.length > 0 &&
                  (0, Z.jsx)(`div`, {
                    className: `space-y-0.5`,
                    children: f.map((e) =>
                      (0, Z.jsxs)(
                        `div`,
                        {
                          className: `flex items-center justify-between text-[10px] text-muted-foreground/60`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              children: [`F`, e.start, `–`, e.end],
                            }),
                            (0, Z.jsx)(`span`, { children: `held` }),
                          ],
                        },
                        `${e.foot}-${e.start}`,
                      ),
                    ),
                  }),
              ],
            },
            e,
          );
        }),
        (0, Z.jsx)(`p`, {
          className: `text-[10px] text-muted-foreground/50 leading-relaxed`,
          children: `A key sets how hard the foot is pinned; the weight ramps between keys and holds outside them. Click a key on the timeline to edit it, drag to move it, right-click to delete.`,
        }),
      ],
    });
  },
  Q_e = ({
    sessionId: e,
    scope: t,
    assetId: n,
    animationId: r,
    onCreated: i,
    onPrepareSource: a,
  }) => {
    let {
        totalFrames: o,
        fps: s,
        clipInFrame: c,
        clipOutFrame: l,
        setClipRange: d,
        setActivePanel: f,
      } = L6(),
      { toast: p } = u(),
      [m, h] = (0, X.useState)(``),
      [g, _] = (0, X.useState)(!1);
    ((0, X.useEffect)(() => (f(`clips`), () => f(`animations`)), [f]),
      (0, X.useEffect)(() => {
        o > 0 && l <= c && d(0, o);
      }, [o]));
    let v = Math.max(0, l - c),
      y = s > 0 ? (o / s).toFixed(2) : `0.00`,
      b = s > 0 ? (v / s).toFixed(2) : `0.00`,
      x = !!r && (t === `library` || !!n) && l > c && m.trim().length > 0;
    return r
      ? (0, Z.jsxs)(`div`, {
          className: `text-xs space-y-3`,
          children: [
            (0, Z.jsxs)(`h4`, {
              className: `font-semibold text-foreground/70 flex items-center gap-1.5`,
              children: [
                (0, Z.jsx)(Ms, { className: `h-3.5 w-3.5` }),
                `Cut Clip`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-1.5`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      className: `text-muted-foreground`,
                      children: `In Frame`,
                    }),
                    (0, Z.jsx)(`input`, {
                      type: `number`,
                      min: 0,
                      max: l - 1,
                      value: c,
                      onChange: (e) =>
                        d(Math.max(0, Number(e.target.value)), l),
                      className: `w-16 bg-muted border border-border text-muted-foreground rounded px-1.5 py-0.5 text-[10px] text-center`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, Z.jsx)(`label`, {
                      className: `text-muted-foreground`,
                      children: `Out Frame`,
                    }),
                    (0, Z.jsx)(`input`, {
                      type: `number`,
                      min: c + 1,
                      max: o,
                      value: l,
                      onChange: (e) =>
                        d(c, Math.min(o, Number(e.target.value))),
                      className: `w-16 bg-muted border border-border text-muted-foreground rounded px-1.5 py-0.5 text-[10px] text-center`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-muted-foreground`,
                  children: `Clip Name`,
                }),
                (0, Z.jsx)(`input`, {
                  type: `text`,
                  value: m,
                  maxLength: 200,
                  placeholder: `e.g. run_cycle`,
                  onChange: (e) => h(e.target.value),
                  className: `w-full bg-muted border border-border text-foreground rounded px-1.5 py-1 text-[11px]`,
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `bg-muted/50 rounded p-2 text-center`,
              children: [
                (0, Z.jsxs)(`span`, {
                  className: `text-muted-foreground`,
                  children: [y, `s`],
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-muted-foreground/50 mx-1.5`,
                  children: `→`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `text-amber-400`,
                  children: [b, `s`],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `text-[10px] text-muted-foreground/50 mt-0.5`,
                  children: [v, ` frames (`, c, `–`, l, `)`],
                }),
              ],
            }),
            (0, Z.jsxs)(`button`, {
              onClick: async () => {
                if (!r || !x) return;
                let o = m.trim();
                _(!0);
                try {
                  let s;
                  if (t === `library`)
                    s = await GI.extractLibraryClip(e, r, {
                      in_frame: c,
                      out_frame: l,
                      name: o,
                    });
                  else if (n)
                    (await a?.(),
                      (s = await GI.extractClip(e, n, r, {
                        in_frame: c,
                        out_frame: l,
                        name: o,
                      })));
                  else return;
                  s.success
                    ? (p({
                        title: `Clip saved`,
                        description: `Created "${o}"`,
                      }),
                      h(``),
                      await i?.(n ?? ``, s.animation?.animation_id ?? null))
                    : p({
                        title: `Could not save clip`,
                        description: s.error || `Failed to extract clip`,
                        variant: `destructive`,
                      });
                } catch (e) {
                  p({
                    title: `Could not save clip`,
                    description:
                      e instanceof Error ? e.message : `Failed to extract clip`,
                    variant: `destructive`,
                  });
                } finally {
                  _(!1);
                }
              },
              disabled: !x || g,
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-primary/20 text-primary rounded text-xs hover:bg-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
              children: [
                g
                  ? (0, Z.jsx)(J, { className: `h-3 w-3 animate-spin` })
                  : (0, Z.jsx)(Ms, { className: `h-3 w-3` }),
                g ? `Saving...` : `Save selection as new clip`,
              ],
            }),
          ],
        })
      : (0, Z.jsx)(`div`, {
          className: `text-xs text-muted-foreground/50 text-center py-4`,
          children: `Select an animation to cut a clip`,
        });
  },
  H7 = (e) => e.id || e.asset_name || ``,
  $_e = ({
    sessionId: e,
    scope: t,
    sourceAssetId: n,
    animation: r,
    characters: i,
    animationPlan: a,
    onRetargeted: o,
    onRefresh: s,
  }) => {
    let { toast: c } = u(),
      [l, d] = (0, X.useState)(!1),
      [f, p] = (0, X.useState)(``),
      [m, h] = (0, X.useState)(``),
      [g, _] = (0, X.useState)(!1),
      v = t === `library`,
      y = Fa(`op:retarget_animation`),
      b = Fa(`op:generate_animation`),
      x = !!r?.source_file_path,
      S = v || x,
      C = S ? y : b,
      w = (0, X.useMemo)(
        () => i.filter((e) => tt(e) && (v || H7(e) !== n)),
        [i, n, v],
      ),
      T = w.length === 0,
      E = () => {
        (h(r?.name || ``), p(w[0] ? H7(w[0]) : ``), d(!0));
      },
      D = w.find((e) => H7(e) === f),
      O = (D?.asset_name || `character`).replace(/_/g, ` `),
      k = (0, X.useMemo)(
        () =>
          (a?.characters || []).find(
            (e) => e.asset_id === f || (D && e.asset_name === D.asset_name),
          )?.animations || [],
        [a, f, D],
      ),
      A = v
        ? x
          ? y === null
            ? `Retarget pricing is unavailable right now.`
            : T
              ? `Needs a rigged character to retarget onto.`
              : null
          : `This upload has no FBX source — Motion2Motion needs the original FBX or BVH.`
        : null,
      j = v
        ? !!r?.animation_id && !!f && !g && !A
        : !!n && !!r?.animation_id && !!f && !g,
      M = v
        ? async () => {
            if (!r?.animation_id || !f || !x) return;
            let t = m.trim() || r.name || ``;
            _(!0);
            try {
              let n = await GI.retargetLibraryAnimation(e, r.animation_id, {
                target_asset_id: f,
                name: t || void 0,
              });
              n.success
                ? (Gt(),
                  c({
                    title: `Animation retargeted`,
                    description: n.warning || `Added to ${O}`,
                  }),
                  d(!1),
                  await o(f, n.animation?.animation_id ?? null))
                : (Qt(c, n, {
                    title: `Retarget failed`,
                    fallback: `Could not retarget this animation`,
                  }),
                  await s());
            } catch (e) {
              c({
                title: `Retarget failed`,
                description:
                  e instanceof Error ? e.message : `Unexpected error`,
                variant: `destructive`,
              });
            } finally {
              _(!1);
            }
          }
        : async () => {
            if (!j || !n || !r?.animation_id || !f) return;
            let t = m.trim() || r.name || ``;
            _(!0);
            try {
              let i = k.find(
                (e) =>
                  !!e.retargeted_from &&
                  e.retargeted_from.asset_id === n &&
                  e.retargeted_from.animation_id === r.animation_id &&
                  e.name === t,
              );
              if (x) {
                let i = await GI.retargetAnimation(e, n, r.animation_id, {
                  target_asset_id: f,
                  name: t || void 0,
                });
                i.success
                  ? (Gt(),
                    c({
                      title: `Animation retargeted`,
                      description: `Added to ${O}`,
                    }),
                    d(!1),
                    await o(f, i.animation?.animation_id ?? null))
                  : (Qt(c, i, {
                      title: `Retarget failed`,
                      fallback: `Could not retarget this animation`,
                    }),
                    await s());
              } else {
                let a = i?.animation_id ?? null;
                if (!a) {
                  let i = await GI.addAnimation(e, f, {
                    name: t || r.name || `animation`,
                    description: r.description || ``,
                    prompt_hint: r.prompt_hint ?? null,
                    category: r.category || `locomotion`,
                    priority: r.priority || `important`,
                    loop: !!r.loop,
                    estimated_duration_sec: r.estimated_duration_sec ?? null,
                    retargeted_from: {
                      asset_id: n,
                      animation_id: r.animation_id,
                    },
                  });
                  if (!i.success || !i.animation) {
                    c({
                      title: `Could not create clip`,
                      description:
                        i.error || `Failed to add the animation to the target`,
                      variant: `destructive`,
                    });
                    return;
                  }
                  a = i.animation.animation_id;
                }
                let s = await GI.regenerateAnimation(e, f, a);
                (s.success
                  ? (Gt(),
                    c({
                      title: `Animation recreated`,
                      description: `Generated on ${O} from its prompt`,
                    }))
                  : Qt(c, s, {
                      title: `Generation failed`,
                      fallback: `Could not generate the animation on the target`,
                    }),
                  d(!1),
                  await o(f, a));
              }
            } catch (e) {
              c({
                title: x ? `Retarget failed` : `Generation failed`,
                description:
                  e instanceof Error ? e.message : `Unexpected error`,
                variant: `destructive`,
              });
            } finally {
              _(!1);
            }
          };
    return r
      ? (0, Z.jsxs)(`div`, {
          className: `text-xs space-y-2`,
          children: [
            (0, Z.jsxs)(`button`, {
              onClick: E,
              disabled: v ? !!A : T,
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
              children: [
                S
                  ? (0, Z.jsx)(Os, { className: `h-3 w-3` })
                  : (0, Z.jsx)(an, { className: `h-3 w-3` }),
                `Retarget to character…`,
              ],
            }),
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground/60 text-center`,
              children: v
                ? A ||
                  `Copies this motion onto a rigged character from its FBX source.`
                : T
                  ? `Needs another rigged character to retarget onto.`
                  : x
                    ? `Copies this motion onto another character from its FBX source.`
                    : `No FBX source — the motion is regenerated from the prompt on the target, not copied.`,
            }),
            (0, Z.jsx)(mo, {
              open: l,
              onOpenChange: (e) => {
                g || d(e);
              },
              children: (0, Z.jsxs)(uo, {
                className: `max-w-sm`,
                children: [
                  (0, Z.jsxs)(co, {
                    children: [
                      (0, Z.jsx)(fo, {
                        children: S
                          ? `Retarget to character`
                          : `Recreate on another character`,
                      }),
                      (0, Z.jsx)(po, {
                        children: v
                          ? `Copy "${r.name}" onto a rigged character using its FBX source.`
                          : x
                            ? `Copy "${r.name}" onto another rigged character using its FBX source.`
                            : `"${r.name}" has no FBX source. The motion is regenerated from the prompt on the target — it is not a copy.`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `space-y-3 text-xs`,
                    children: [
                      (0, Z.jsxs)(`div`, {
                        children: [
                          (0, Z.jsx)(`label`, {
                            className: `text-muted-foreground text-[11px]`,
                            children: `Target character`,
                          }),
                          (0, Z.jsx)(`select`, {
                            value: f,
                            disabled: g,
                            onChange: (e) => p(e.target.value),
                            className: `w-full mt-1 bg-muted border border-border text-foreground rounded px-2 py-1.5 text-[12px] disabled:opacity-50`,
                            children: w.map((e) =>
                              (0, Z.jsx)(
                                `option`,
                                {
                                  value: H7(e),
                                  children: (
                                    e.asset_name || `Character`
                                  ).replace(/_/g, ` `),
                                },
                                H7(e),
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        children: [
                          (0, Z.jsx)(`label`, {
                            className: `text-muted-foreground text-[11px]`,
                            children: `Name (optional)`,
                          }),
                          (0, Z.jsx)(`input`, {
                            type: `text`,
                            value: m,
                            maxLength: 200,
                            disabled: g,
                            placeholder: r.name,
                            onChange: (e) => h(e.target.value),
                            className: `w-full mt-1 bg-muted border border-border text-foreground rounded px-2 py-1.5 text-[12px] disabled:opacity-50`,
                          }),
                        ],
                      }),
                      g &&
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-2 text-[11px] text-muted-foreground bg-muted/50 rounded px-2 py-2`,
                          children: [
                            (0, Z.jsx)(J, {
                              className: `h-3.5 w-3.5 animate-spin text-primary`,
                            }),
                            `This takes a few minutes — keep this dialog open.`,
                          ],
                        }),
                    ],
                  }),
                  (0, Z.jsx)(lo, {
                    children: (0, Z.jsx)($t, {
                      onClick: M,
                      cost: C,
                      label: S ? `Retarget` : `Recreate`,
                      icon: S
                        ? (0, Z.jsx)(Os, { className: `h-3.5 w-3.5` })
                        : (0, Z.jsx)(an, { className: `h-3.5 w-3.5` }),
                      isLoading: g,
                      loadingText: S ? `Retargeting…` : `Generating…`,
                      checkBalance: !0,
                      disabled: !j,
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : (0, Z.jsx)(`div`, {
          className: `text-xs text-muted-foreground/50 text-center py-4`,
          children: `Select an animation to retarget`,
        });
  },
  U7 = ({ sessionDir: e, side: t, isActive: n, registerSampler: r }) =>
    (0, Z.jsxs)(`div`, {
      className: `relative flex-1 min-w-0 h-full`,
      children: [
        (0, Z.jsx)(e7, {
          sessionDir: e,
          modelPath: t.modelPath,
          animationPath: t.animationPath,
          isActive: n,
          registerSampler: r,
          showTools: !1,
        }),
        (0, Z.jsx)(`div`, {
          className: `absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded bg-black/60 border border-border text-[10px] font-medium text-muted-foreground pointer-events-none`,
          children: t.label,
        }),
      ],
    }),
  eve = ({ sessionDir: e, source: t, target: n, isActive: r }) =>
    (0, Z.jsxs)(`div`, {
      className: `flex flex-row w-full h-full bg-background`,
      children: [
        (0, Z.jsx)(U7, { sessionDir: e, side: t, isActive: r }),
        (0, Z.jsx)(`div`, { className: `w-px h-full bg-border shrink-0` }),
        (0, Z.jsx)(U7, {
          sessionDir: e,
          side: n,
          isActive: r,
          registerSampler: !0,
        }),
      ],
    }),
  tve = ({ animationId: e, boneNames: t }) => {
    let {
        showRootMotionPath: n,
        toggleRootMotionPath: r,
        rootMotionConfig: i,
        setRootMotionConfig: a,
      } = L6(),
      [o, s] = (0, X.useState)(null),
      c = (0, X.useMemo)(() => {
        for (let e of b8) if (t.includes(e)) return e;
        return t[0] || null;
      }, [t]),
      l = o || c,
      u = i?.stripped ?? !1,
      d = i?.stripMode ?? `horizontal`,
      f = (e) => {
        a(u && d === e ? null : { stripped: !0, stripMode: e });
      };
    return e
      ? (0, Z.jsxs)(`div`, {
          className: `text-xs space-y-3`,
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`label`, {
                  className: `text-muted-foreground text-[10px]`,
                  children: `Root Bone`,
                }),
                (0, Z.jsx)(`select`, {
                  value: l || ``,
                  onChange: (e) => s(e.target.value || null),
                  className: `w-full mt-0.5 bg-muted border border-border text-muted-foreground rounded px-1.5 py-1 text-[10px]`,
                  children: t.map((e) =>
                    (0, Z.jsxs)(
                      `option`,
                      { value: e, children: [e, ` `, e === c ? `(auto)` : ``] },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-1.5`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `grid grid-cols-2 gap-1`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      onClick: () => f(`horizontal`),
                      className: `flex items-center justify-center gap-1 px-2 py-1.5 rounded text-[11px] font-medium transition-colors ${u && d === `horizontal` ? `bg-orange-500/30 text-orange-200 border border-orange-500/40` : `bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground`}`,
                      children: `Strip XZ`,
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: () => f(`all`),
                      className: `flex items-center justify-center gap-1 px-2 py-1.5 rounded text-[11px] font-medium transition-colors ${u && d === `all` ? `bg-orange-500/30 text-orange-200 border border-orange-500/40` : `bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground`}`,
                      children: `Strip XYZ`,
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `text-[10px] text-center text-muted-foreground/50`,
                  children: u
                    ? `Click again to restore`
                    : `Click to remove root motion`,
                }),
              ],
            }),
            (0, Z.jsxs)(`button`, {
              onClick: r,
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded text-xs transition-colors ${n ? `bg-blue-500/30 text-blue-300 border border-blue-500/30` : `bg-muted/30 text-muted-foreground hover:bg-muted/50`}`,
              children: [
                n
                  ? (0, Z.jsx)(Yr, { className: `h-3 w-3` })
                  : (0, Z.jsx)(G, { className: `h-3 w-3` }),
                n ? `Hide Motion Path` : `Show Motion Path`,
              ],
            }),
          ],
        })
      : (0, Z.jsx)(`div`, {
          className: `text-xs text-muted-foreground/50 text-center py-4`,
          children: `Select an animation to manage root motion`,
        });
  },
  W7 = (e) => `${(e * 100).toFixed(1)}cm`,
  nve = () => {
    let {
        boneNames: e,
        boneOffsets: t,
        hipsRestMeasure: n,
        selectedAnimationId: r,
        matchHipsToRest: i,
        clearHipsRestMatch: a,
      } = L6(),
      { toast: o } = u(),
      [s, c] = (0, X.useState)(!1),
      l = (0, X.useMemo)(() => E6(new Set(e), `hips`), [e]),
      d = (0, X.useMemo)(
        () =>
          l ? (t.find((e) => e.boneName === l && e.position) ?? null) : null,
        [t, l],
      );
    return r
      ? l
        ? (0, Z.jsxs)(`div`, {
            className: `text-xs space-y-2`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-2`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-muted-foreground/60`,
                    children: `Pelvis`,
                  }),
                  (0, Z.jsx)(`span`, {
                    className: `font-mono text-foreground/70 truncate`,
                    children: l,
                  }),
                ],
              }),
              (0, Z.jsxs)(`button`, {
                onClick: () => {
                  n &&
                    (c(!0),
                    requestAnimationFrame(() => {
                      try {
                        let e = n();
                        if (!e) {
                          o({
                            title: `Could not measure this clip`,
                            description: `The rig has no pelvis, or the clip could not be walked.`,
                            variant: `destructive`,
                          });
                          return;
                        }
                        let [t, r, a] = e.delta;
                        (i(e.boneName, e.delta),
                          o({
                            title: `Matched to the rest pose`,
                            description: `${e.boneName} moved by ${W7(t)} X, ${W7(r)} Y, ${W7(a)} Z. It is one translation key at frame 0 — delete it on the timeline to undo.`,
                          }));
                      } catch (e) {
                        (console.error(`[RestPosePanel] measure failed:`, e),
                          o({
                            title: `Could not measure this clip`,
                            description:
                              e instanceof Error ? e.message : String(e),
                            variant: `destructive`,
                          }));
                      } finally {
                        c(!1);
                      }
                    }));
                },
                disabled: !n || s,
                title: n
                  ? `Offset the pelvis so this clip’s average pose sits on the rig’s rest pose`
                  : `Load a clip first`,
                className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                children: [
                  s
                    ? (0, Z.jsx)(J, { className: `h-3 w-3 animate-spin` })
                    : (0, Z.jsx)(So, { className: `h-3 w-3` }),
                  s ? `Measuring…` : `Match hips to rest`,
                ],
              }),
              d?.position &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `rounded bg-muted/30 p-2 space-y-0.5 text-[10px] text-muted-foreground/70`,
                      children: [
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, Z.jsx)(`span`, { children: `Applied offset` }),
                            (0, Z.jsx)(`span`, {
                              className: `font-mono tabular-nums`,
                              children: d.position
                                .map((e) => W7(e))
                                .join(` · `),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(`div`, {
                          children: [`Keyed at F`, d.frame, ` on `, l, `.`],
                        }),
                      ],
                    }),
                    (0, Z.jsxs)(`button`, {
                      onClick: () => a(l),
                      className: `w-full flex items-center justify-center gap-1.5 px-2 py-1 rounded text-[10px] text-muted-foreground/70 hover:bg-muted/50 hover:text-foreground transition-colors`,
                      children: [
                        (0, Z.jsx)(F, { className: `h-3 w-3` }),
                        `Remove the match`,
                      ],
                    }),
                  ],
                }),
              (0, Z.jsx)(`p`, {
                className: `text-[10px] text-muted-foreground/50 leading-relaxed`,
                children: `Lands every clip on the same average hip height and centre, so one blends into the next without a jump. Horizontal TRAVEL is a different job — use Root Motion to strip that.`,
              }),
            ],
          })
        : (0, Z.jsx)(V7, { children: `This skeleton has no pelvis to match` })
      : (0, Z.jsx)(V7, {
          children: `Select an animation to match its rest pose`,
        });
  },
  rve = [
    { key: `knees`, label: `Knees`, hint: `Steadies both legs` },
    { key: `elbows`, label: `Elbows`, hint: `Steadies both arms` },
  ],
  ive = () => {
    let { boneNames: e, limbStabilize: t, setLimbStabilize: n } = L6(),
      r = e.includes(`calf_l`) || e.includes(`calf_r`),
      i = e.includes(`lowerarm_l`) || e.includes(`lowerarm_r`);
    return !r && !i
      ? (0, Z.jsx)(V7, { children: `This skeleton has no limbs to stabilize` })
      : (0, Z.jsxs)(`div`, {
          className: `text-xs space-y-3`,
          children: [
            rve.map(({ key: e, label: a, hint: o }) => {
              let s = e === `knees` ? r : i,
                c = t[e];
              return (0, Z.jsxs)(
                `div`,
                {
                  className: `space-y-1.5`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, Z.jsxs)(`span`, {
                          className: `flex items-center gap-1.5 flex-1 min-w-0 font-medium text-foreground/70`,
                          children: [
                            (0, Z.jsx)(Do, {
                              className: `h-3.5 w-3.5 shrink-0`,
                            }),
                            (0, Z.jsx)(`span`, {
                              className: `truncate`,
                              children: a,
                            }),
                          ],
                        }),
                        (0, Z.jsx)(ze, {
                          checked: c.enabled && s,
                          disabled: !s,
                          onCheckedChange: (t) => n(e, { enabled: t }),
                        }),
                      ],
                    }),
                    s
                      ? (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, Z.jsx)(B7, {
                              value: c.weight,
                              onChange: (t) => n(e, { weight: t }),
                              disabled: !c.enabled,
                              title: o,
                              className: `flex-1 h-1 accent-primary disabled:opacity-40`,
                            }),
                            (0, Z.jsxs)(`span`, {
                              className: `w-9 shrink-0 text-right tabular-nums text-muted-foreground/70`,
                              children: [Math.round(c.weight * 100), `%`],
                            }),
                          ],
                        })
                      : (0, Z.jsxs)(`div`, {
                          className: `text-[10px] text-muted-foreground/40`,
                          children: [
                            `This skeleton has no `,
                            e === `knees` ? `legs` : `arms`,
                          ],
                        }),
                  ],
                },
                e,
              );
            }),
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground/50 leading-relaxed`,
              children: `Smooths the direction each joint bends toward, then re-solves the limb to the same hand or foot position — so wobble and knee flips go without any contact moving.`,
            }),
          ],
        });
  },
  ave = () => {
    let {
      positionOffset: e,
      selectedCharacterId: t,
      setPositionOffset: n,
    } = L6();
    if (!t)
      return (0, Z.jsx)(`div`, {
        className: `text-xs text-muted-foreground/50 text-center py-4`,
        children: `Select a character to adjust position`,
      });
    let r = (t, r) => {
      let i = [...e];
      ((i[t] = r), n(i));
    };
    return (0, Z.jsxs)(`div`, {
      className: `text-xs space-y-3`,
      children: [
        (0, Z.jsxs)(`h4`, {
          className: `font-semibold text-foreground/70 flex items-center gap-1.5`,
          children: [
            (0, Z.jsx)(ce, { className: `h-3.5 w-3.5` }),
            `Position Offset`,
          ],
        }),
        (0, Z.jsx)(`p`, {
          className: `text-[10px] text-muted-foreground leading-snug`,
          children: `Framing for this viewport only — it moves the model on screen and is not baked into the clip.`,
        }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, Z.jsx)(G7, {
              label: `X`,
              value: e[0],
              color: `text-red-400`,
              onChange: (e) => r(0, e),
            }),
            (0, Z.jsx)(G7, {
              label: `Y`,
              value: e[1],
              color: `text-green-400`,
              onChange: (e) => r(1, e),
            }),
            (0, Z.jsx)(G7, {
              label: `Z`,
              value: e[2],
              color: `text-blue-400`,
              onChange: (e) => r(2, e),
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `space-y-1.5`,
          children: [
            (0, Z.jsxs)(`button`, {
              onClick: () => {
                n([e[0], 0, e[2]]);
              },
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-green-500/20 text-green-300 rounded hover:bg-green-500/30 transition-colors`,
              children: [
                (0, Z.jsx)(wo, { className: `h-3 w-3` }),
                `Auto-Ground (Y=0)`,
              ],
            }),
            (0, Z.jsxs)(`button`, {
              onClick: () => {
                n([0, e[1], 0]);
              },
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors`,
              children: [
                (0, Z.jsx)(fe, { className: `h-3 w-3` }),
                `Center (X=0, Z=0)`,
              ],
            }),
            (0, Z.jsx)(`button`, {
              onClick: () => {
                n([0, 0, 0]);
              },
              className: `w-full flex items-center justify-center gap-1.5 px-2 py-1.5 bg-muted/30 text-muted-foreground rounded hover:bg-muted/50 transition-colors`,
              children: `Reset All`,
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `bg-muted/50 rounded p-2 text-center text-[10px] text-muted-foreground/50 font-mono`,
          children: [
            `(`,
            e[0].toFixed(2),
            `, `,
            e[1].toFixed(2),
            `, `,
            e[2].toFixed(2),
            `)`,
          ],
        }),
      ],
    });
  },
  G7 = ({ label: e, value: t, color: n, onChange: r }) =>
    (0, Z.jsxs)(`div`, {
      className: `flex items-center gap-2`,
      children: [
        (0, Z.jsx)(`span`, { className: `w-3 font-bold ${n}`, children: e }),
        (0, Z.jsx)(`input`, {
          type: `range`,
          min: -5,
          max: 5,
          step: 0.01,
          value: t,
          onChange: (e) => r(Number(e.target.value)),
          className: `flex-1 h-1 accent-primary`,
        }),
        (0, Z.jsx)(`input`, {
          type: `number`,
          step: 0.01,
          value: Number(t.toFixed(2)),
          onChange: (e) => r(Number(e.target.value)),
          className: `w-14 bg-muted border border-border text-muted-foreground rounded px-1 py-0.5 text-[10px] text-center`,
        }),
      ],
    }),
  K7 = 160,
  q7 = 52,
  ove = 8,
  sve = 20,
  cve = `#1a1528`,
  lve = `#1e1a2e`,
  uve = `#444`,
  J7 = `#a855f7`,
  Y7 = `#22c55e`,
  X7 = `#555`,
  dve = 8,
  fve = `#ccc`,
  pve = `#888`,
  mve = ({ className: e = `` }) => {
    let t = (0, X.useRef)(null),
      n = (0, X.useRef)(null),
      {
        stateMachine: r,
        loadStateMachine: i,
        isPlaying: a,
        selectedAnimationId: o,
        selectedStateId: s,
        selectedTransitionId: c,
        selectState: l,
        selectTransition: u,
      } = L6(),
      [d, f] = (0, X.useState)(0),
      [p, m] = (0, X.useState)(0),
      [h, g] = (0, X.useState)(1),
      [_, v] = (0, X.useState)(!1),
      [y, b] = (0, X.useState)({ x: 0, y: 0 }),
      [x, S] = (0, X.useState)(null),
      [C, w] = (0, X.useState)({ x: 0, y: 0 }),
      [T, E] = (0, X.useState)(null),
      D = r?.states || [],
      O = r?.transitions || [],
      k = r?.defaultStateId || null,
      A = (0, X.useCallback)(
        (e, t) => ({ x: (e + d) * h, y: (t + p) * h }),
        [d, p, h],
      ),
      j = (0, X.useCallback)(
        (e, t) => ({ x: e / h - d, y: t / h - p }),
        [d, p, h],
      ),
      M = (0, X.useCallback)(() => {
        let e = t.current;
        if (!e) return;
        let n = e.getContext(`2d`);
        if (!n) return;
        let r = window.devicePixelRatio || 1,
          i = e.width / r,
          l = e.height / r;
        (n.clearRect(0, 0, e.width, e.height),
          n.save(),
          n.scale(r, r),
          (n.fillStyle = `#0d0a14`),
          n.fillRect(0, 0, i, l),
          (n.strokeStyle = cve),
          (n.lineWidth = 0.5));
        let u = sve * h,
          f = (d * h) % u,
          m = (p * h) % u;
        for (let e = f; e < i; e += u)
          (n.beginPath(), n.moveTo(e, 0), n.lineTo(e, l), n.stroke());
        for (let e = m; e < l; e += u)
          (n.beginPath(), n.moveTo(0, e), n.lineTo(i, e), n.stroke());
        if (O.some((e) => e.fromStateId === `*`)) {
          let e = A(-200, -20),
            t = 100 * h,
            r = 36 * h;
          (n.setLineDash([4 * h, 3 * h]),
            (n.strokeStyle = `#888`),
            (n.lineWidth = 1.5),
            (n.fillStyle = `#151020`),
            Z7(n, e.x, e.y, t, r, 6 * h),
            n.fill(),
            n.stroke(),
            n.setLineDash([]),
            (n.fillStyle = `#aaa`),
            (n.font = `${10 * h}px sans-serif`),
            (n.textAlign = `center`),
            n.fillText(`Any State`, e.x + t / 2, e.y + r / 2 + 3 * h));
        }
        let g = new Map(),
          _ = new Map();
        for (let e of O) {
          let t = `${e.fromStateId}->${e.toStateId}`;
          g.set(t, (g.get(t) || 0) + 1);
        }
        for (let e of O) {
          let t = D.find((t) => t.id === e.toStateId);
          if (!t) continue;
          let r = A(t.position.x, t.position.y),
            i = { x: r.x + (K7 * h) / 2, y: r.y + (q7 * h) / 2 },
            a;
          if (e.fromStateId === `*`) {
            let e = A(-200, -20);
            a = { x: e.x + 100 * h, y: e.y + 18 * h };
          } else {
            let t = D.find((t) => t.id === e.fromStateId);
            if (!t) continue;
            let n = A(t.position.x, t.position.y);
            a = { x: n.x + (K7 * h) / 2, y: n.y + (q7 * h) / 2 };
          }
          let o = `${e.fromStateId}->${e.toStateId}`,
            s = _.get(o) || 0;
          _.set(o, s + 1);
          let l = (s - ((g.get(o) || 1) - 1) / 2) * 20 * h,
            u = e.id === c;
          if (
            (hve(n, a.x, a.y, i.x, i.y, l, h, u ? J7 : X7, u ? 2.5 : 1.5),
            e.condition)
          ) {
            let t = (a.x + i.x) / 2,
              r = (a.y + i.y) / 2 + l * 0.5 - 6 * h;
            ((n.fillStyle = `#777`),
              (n.font = `${8 * h}px monospace`),
              (n.textAlign = `center`),
              n.fillText(e.condition, t, r, 120 * h));
          }
        }
        for (let e of D) {
          let t = A(e.position.x, e.position.y),
            r = K7 * h,
            i = q7 * h,
            c = e.id === k,
            l = e.id === s,
            u = a && o && e.animationId === o;
          if (
            (u &&
              (n.save(),
              (n.shadowColor = `#22d3ee`),
              (n.shadowBlur = 12 * h),
              (n.fillStyle = `rgba(34, 211, 238, 0.08)`),
              Z7(n, t.x - 2, t.y - 2, r + 4, i + 4, 10 * h),
              n.fill(),
              n.restore()),
            (n.fillStyle = u ? `#1a2030` : lve),
            (n.strokeStyle = u ? `#22d3ee` : l ? J7 : c ? Y7 : uve),
            (n.lineWidth = u ? 2.5 : l ? 2 : 1),
            Z7(n, t.x, t.y, r, i, ove * h),
            n.fill(),
            n.stroke(),
            c)
          ) {
            (n.beginPath(), (n.fillStyle = Y7));
            let e = t.x - 12 * h,
              r = t.y + i / 2;
            (n.moveTo(e - 8 * h, r - 5 * h),
              n.lineTo(e, r),
              n.lineTo(e - 8 * h, r + 5 * h),
              n.closePath(),
              n.fill());
          }
          ((n.fillStyle = fve),
            (n.font = `bold ${11 * h}px sans-serif`),
            (n.textAlign = `left`),
            n.fillText(e.name, t.x + 8 * h, t.y + 18 * h, r - 16 * h),
            (n.fillStyle = pve),
            (n.font = `${9 * h}px sans-serif`),
            n.fillText(
              e.animationId || `(no animation)`,
              t.x + 8 * h,
              t.y + 32 * h,
              r - 16 * h,
            ),
            e.loop &&
              ((n.fillStyle = `#60a5fa`),
              (n.font = `${9 * h}px sans-serif`),
              (n.textAlign = `right`),
              n.fillText(`🔁`, t.x + r - 6 * h, t.y + 18 * h)),
            e.speed !== 1 &&
              ((n.fillStyle = `#f59e0b`),
              (n.font = `${8 * h}px sans-serif`),
              (n.textAlign = `right`),
              n.fillText(`${e.speed}x`, t.x + r - 6 * h, t.y + 32 * h)));
        }
        (D.length === 0 &&
          ((n.fillStyle = `#555`),
          (n.font = `13px sans-serif`),
          (n.textAlign = `center`),
          n.fillText(`No state machine defined`, i / 2, l / 2 - 10),
          (n.font = `10px sans-serif`),
          n.fillText(
            `Generate an animation plan to create states`,
            i / 2,
            l / 2 + 10,
          )),
          n.restore());
      }, [D, O, k, s, c, d, p, h, A, a, o]),
      N = (0, X.useCallback)(() => {
        let e = t.current,
          r = n.current;
        if (!e || !r) return;
        let i = window.devicePixelRatio || 1,
          a = r.getBoundingClientRect();
        ((e.width = a.width * i),
          (e.height = a.height * i),
          (e.style.width = `${a.width}px`),
          (e.style.height = `${a.height}px`),
          M());
      }, [M]);
    ((0, X.useEffect)(() => {
      N();
      let e = new ResizeObserver(N);
      return (n.current && e.observe(n.current), () => e.disconnect());
    }, [N]),
      (0, X.useEffect)(() => {
        M();
      }, [M]));
    let P = (0, X.useCallback)(() => {
      if (!r || r.states.length === 0) return;
      let e = n.current,
        t = Math.max(e?.clientWidth || 0, 800),
        a = Math.max(e?.clientHeight || 0, 500),
        o = _ve(r, t, a);
      i({
        ...r,
        states: r.states.map((e) => ({
          ...e,
          position: o[e.id] || e.position,
        })),
      });
    }, [r, i]);
    (0, X.useEffect)(() => {
      r && gve(r.states) && P();
    }, [r, P]);
    let F = (0, X.useCallback)(
        (e, t, n) => {
          if (!r) return;
          let a = {
            ...r,
            states: r.states.map((r) =>
              r.id === e ? { ...r, position: { x: t, y: n } } : r,
            ),
          };
          i(a);
        },
        [r, i],
      ),
      I = (0, X.useCallback)(
        (e, t) => {
          if (!r) return;
          let n = `state_${Date.now()}`,
            a = {
              id: n,
              name: `State ${r.states.length + 1}`,
              animationId: null,
              loop: !1,
              speed: 1,
              position: { x: e, y: t },
            };
          (i({ ...r, states: [...r.states, a] }), l(n), E(null));
        },
        [r, i],
      ),
      L = (0, X.useCallback)(
        (e) => {
          r &&
            (i({
              ...r,
              states: r.states.filter((t) => t.id !== e),
              transitions: r.transitions.filter(
                (t) => t.fromStateId !== e && t.toStateId !== e,
              ),
              defaultStateId:
                r.defaultStateId === e
                  ? r.states.find((t) => t.id !== e)?.id || ``
                  : r.defaultStateId,
            }),
            l(null),
            E(null));
        },
        [r, i, l],
      ),
      R = (0, X.useCallback)(
        (e, t) => {
          if (!r) return;
          let n = `tr_${Date.now()}`;
          (i({
            ...r,
            transitions: [
              ...r.transitions,
              {
                id: n,
                fromStateId: e,
                toStateId: t,
                condition: ``,
                blendTime: 0.2,
                priority: 0,
              },
            ],
          }),
            u(n),
            E(null));
        },
        [r, i, u],
      ),
      z = (0, X.useCallback)(
        (e, t) => {
          let n = { x: -200, y: -20 };
          for (let r of O) {
            let i = D.find((e) => e.id === r.toStateId);
            if (!i) continue;
            let a = { x: i.position.x + K7 / 2, y: i.position.y + q7 / 2 },
              o;
            if (r.fromStateId === `*`) o = { x: n.x + 100, y: n.y + 18 };
            else {
              let e = D.find((e) => e.id === r.fromStateId);
              if (!e) continue;
              o = { x: e.position.x + K7 / 2, y: e.position.y + q7 / 2 };
            }
            let s = (o.x + a.x) / 2,
              c = (o.y + a.y) / 2,
              l = a.x - o.x,
              u = a.y - o.y,
              d = Math.sqrt(l * l + u * u);
            if (d < 1) continue;
            let f = -u / d,
              p = l / d,
              m = s + f * 0,
              h = c + p * 0;
            for (let n = 0; n <= 20; n++) {
              let i = n / 20,
                s = (1 - i) * (1 - i) * o.x + 2 * (1 - i) * i * m + i * i * a.x,
                c = (1 - i) * (1 - i) * o.y + 2 * (1 - i) * i * h + i * i * a.y;
              if (Math.sqrt((e - s) ** 2 + (t - c) ** 2) < 8) return r.id;
            }
          }
          return null;
        },
        [D, O],
      ),
      B = (0, X.useCallback)(
        (e) => {
          E(null);
          let n = t.current?.getBoundingClientRect();
          if (!n) return;
          let r = e.clientX - n.left,
            i = e.clientY - n.top,
            a = j(r, i);
          for (let e of D)
            if (
              a.x >= e.position.x &&
              a.x <= e.position.x + K7 &&
              a.y >= e.position.y &&
              a.y <= e.position.y + q7
            ) {
              (l(e.id),
                S(e.id),
                w({ x: a.x - e.position.x, y: a.y - e.position.y }));
              return;
            }
          let o = z(a.x, a.y);
          if (o) {
            u(o);
            return;
          }
          (l(null), v(!0), b({ x: e.clientX - d * h, y: e.clientY - p * h }));
        },
        [j, D, d, p, h, l, u, z],
      ),
      V = (0, X.useCallback)(
        (e) => {
          if (x) {
            let n = t.current?.getBoundingClientRect();
            if (!n) return;
            let r = e.clientX - n.left,
              i = e.clientY - n.top,
              a = j(r, i);
            F(x, a.x - C.x, a.y - C.y);
            return;
          }
          _ && (f((e.clientX - y.x) / h), m((e.clientY - y.y) / h));
        },
        [_, y, h, x, C, j, F],
      ),
      H = (0, X.useCallback)(() => {
        (v(!1), S(null));
      }, []),
      ee = (0, X.useCallback)(
        (e) => {
          e.preventDefault();
          let n = t.current?.getBoundingClientRect();
          if (!n) return;
          let r = e.clientX - n.left,
            i = e.clientY - n.top,
            a = j(r, i);
          E({ x: r, y: i, worldX: a.x, worldY: a.y });
        },
        [j],
      ),
      te = (0, X.useCallback)((e) => {
        e.preventDefault();
        let t = e.deltaY > 0 ? 0.92 : 1.08;
        g((e) => Math.max(0.3, Math.min(3, e * t)));
      }, []);
    return (0, Z.jsxs)(`div`, {
      ref: n,
      className: `w-full h-full relative ${e}`,
      children: [
        (0, Z.jsx)(`canvas`, {
          ref: t,
          className: `w-full h-full ${x ? `cursor-grabbing` : `cursor-grab`}`,
          onMouseDown: B,
          onMouseMove: V,
          onMouseUp: H,
          onMouseLeave: H,
          onContextMenu: ee,
          onWheel: te,
        }),
        r &&
          r.states.length > 0 &&
          (0, Z.jsx)(`button`, {
            onClick: P,
            className: `absolute top-2 right-2 z-10 px-2 py-1 text-xs bg-card/90 border border-border rounded text-muted-foreground hover:bg-primary/20 hover:text-foreground`,
            title: `Re-spread nodes using force-directed layout`,
            children: `Auto-Layout`,
          }),
        T &&
          (0, Z.jsxs)(`div`, {
            className: `absolute z-20 bg-card border border-border rounded shadow-lg py-1 text-xs`,
            style: { left: T.x, top: T.y },
            children: [
              (0, Z.jsx)(`button`, {
                onClick: () => I(T.worldX, T.worldY),
                className: `w-full text-left px-3 py-1.5 text-muted-foreground hover:bg-primary/20 hover:text-foreground`,
                children: `Add State`,
              }),
              s &&
                (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `border-t border-border/50 my-0.5`,
                    }),
                    D.filter((e) => e.id !== s).map((e) =>
                      (0, Z.jsxs)(
                        `button`,
                        {
                          onClick: () => R(s, e.id),
                          className: `w-full text-left px-3 py-1.5 text-muted-foreground hover:bg-primary/20 hover:text-foreground`,
                          children: [`Transition to `, e.name],
                        },
                        e.id,
                      ),
                    ),
                    (0, Z.jsx)(`button`, {
                      onClick: () => R(`*`, s),
                      className: `w-full text-left px-3 py-1.5 text-muted-foreground hover:bg-primary/20 hover:text-foreground`,
                      children: `Transition from Any State`,
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `border-t border-border/50 my-0.5`,
                    }),
                    (0, Z.jsx)(`button`, {
                      onClick: () => L(s),
                      className: `w-full text-left px-3 py-1.5 text-red-400 hover:bg-red-500/20 hover:text-red-300`,
                      children: `Delete Selected State`,
                    }),
                  ],
                }),
            ],
          }),
      ],
    });
  };
