// Create-ea24k1TY 39 — asset_name
// Lines 12522-12958 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Wd({
  node: e,
  isCodingAgentRunning: t,
  onChatAbout: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onUpdateDesignData: o,
  onOpenEditorTab: s,
  generatingAssetNames: c,
}) {
  let [l, u] = (0, X.useState)(null),
    [d, f] = (0, X.useState)(null),
    [p, m] = (0, X.useState)(``),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(null),
    [S, C] = (0, X.useState)({}),
    [w, T] = (0, X.useState)([]),
    [E, D] = (0, X.useState)({}),
    O = e.state === `in-progress`,
    k = i?.split(`/`).pop() || i || ``,
    A = t || O,
    j = (0, X.useMemo)(() => c ?? new Set(), [c]),
    M = (0, X.useCallback)((e, t) => {
      C((n) => {
        if (t === null) {
          if (!(e in n)) return n;
          let t = { ...n };
          return (delete t[e], t);
        }
        return { ...n, [e]: t };
      });
    }, []),
    N = (0, X.useMemo)(() => {
      let e = r.filter((e) => Hd(e.asset_type)),
        t = new Set(e.map((e) => e.asset_name)),
        n = [];
      for (let e of w) t.has(e.asset_name) || (t.add(e.asset_name), n.push(e));
      for (let e of a?.assets || [])
        !Hd(e.asset_type) ||
          t.has(e.asset_name) ||
          (t.add(e.asset_name), n.push(Ud(e)));
      return [...e, ...n];
    }, [r, a?.assets, w]),
    P = (0, X.useMemo)(
      () => N.filter((e) => e.asset_type === `character_sheet_2d`),
      [N],
    ),
    F = (0, X.useMemo)(
      () => N.filter((e) => e.asset_type === `animation_sheet_2d`),
      [N],
    ),
    { byCharacter: I, orphans: L } = (0, X.useMemo)(() => dd(P, F), [P, F]),
    R = (0, X.useMemo)(() => F.find((e) => e.asset_name === l) || null, [F, l]),
    z = (0, X.useRef)(null),
    B = l ?? d;
  (0, X.useEffect)(() => {
    B && z.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
  }, [B]);
  let V = (0, X.useCallback)(
      async (e, t) => {
        if (!k || !e.id) return;
        let n = await jr.updateAsset(k, e.id, t);
        if (!n.success) throw Error(n.error || `Could not save that change.`);
      },
      [k],
    ),
    H = (0, X.useCallback)(async () => {
      let e = p.trim();
      if (!(!e || !k)) {
        (g(!0), M(`add-character`, null));
        try {
          let t = await jr.addAsset(k, {
            asset_name: e,
            asset_type: `character_sheet_2d`,
            description: ``,
            priority: `medium`,
            format: `png`,
          });
          if (!t.success || !t.asset)
            throw Error(t.error || `Could not add that character.`);
          (o && o({ assets: [...(a?.assets || []), t.asset] }), m(``));
        } catch (e) {
          M(
            `add-character`,
            e instanceof Error ? e.message : `Could not add that character.`,
          );
        } finally {
          g(!1);
        }
      }
    }, [p, k, a?.assets, o, M]),
    U = (0, X.useCallback)(
      async (e, t) => {
        if (!k || !e.id) return;
        let n = cd(e.asset_name, t.move);
        (v(!0), M(`add-move`, null));
        try {
          let r = await jr.addAsset(k, {
            asset_name: n,
            asset_type: `animation_sheet_2d`,
            description: t.direction.trim(),
            priority: `medium`,
            source_asset_id: e.id,
            format: `png`,
          });
          if (!r.success || !r.asset)
            throw Error(r.error || `Could not add that move.`);
          let i = {
            id: r.asset.id,
            asset_name: n,
            asset_type: `animation_sheet_2d`,
            description: t.direction.trim(),
            source_asset_id: e.id,
            name: n,
            path: ``,
            size: 0,
            size_human: ``,
            modified: 0,
            type: `image`,
            location: `registry`,
            last_updated: ``,
            priority: `medium`,
            format: `png`,
          };
          (T((e) => [...e, i]),
            D((e) => ({
              ...e,
              [n]: {
                frames: t.frameCount,
                fps: t.fps,
                loop: t.loop,
                cellHeight: t.cellHeight,
                direction: t.direction.trim() || void 0,
              },
            })),
            f(null),
            u(n));
        } catch (e) {
          M(
            `add-move`,
            e instanceof Error ? e.message : `Could not add that move.`,
          );
        } finally {
          v(!1);
        }
      },
      [k, M],
    ),
    ee = (0, X.useCallback)(
      async (e) => {
        if (!k || !e.id) return;
        let t = await jr.deleteAsset(k, e.id);
        if (!t.success) {
          M(e.asset_name, t.error || `Could not remove that move.`);
          return;
        }
        (T((t) => t.filter((t) => t.asset_name !== e.asset_name)), u(null));
      },
      [k, M],
    ),
    W = (0, X.useCallback)(
      async (e, t, n) => {
        if (!k) return;
        let r = e.id || e.asset_name;
        (b(e.asset_name), M(e.asset_name, null));
        try {
          let e = await Fn(k, r, t, n);
          if (!e.success)
            throw Error(e.error || `The draw could not be started.`);
        } catch (t) {
          M(
            e.asset_name,
            t instanceof Error ? t.message : `The draw could not be started.`,
          );
        } finally {
          b(null);
        }
      },
      [k, M],
    ),
    G = (e, t) => {
      if (!e) return null;
      let n = E[e.asset_name];
      return (0, Z.jsx)(`div`, {
        ref: z,
        children: (0, Z.jsx)(
          Bd,
          {
            move: e,
            characterName: t,
            sessionId: k,
            sessionDir: i,
            initialFrameCount: n?.frames,
            initialFps: n?.fps,
            initialLoop: n?.loop,
            initialCellHeight: n?.cellHeight,
            initialFeedback: n?.direction,
            isGenerating: y === e.asset_name || j.has(e.asset_name),
            disabled: A,
            error: S[e.asset_name] || null,
            onDraw: (t) => void W(e, `animation_sheet_2d`, t),
            onRemove: () => void ee(e),
            onOpenEditor:
              s && e.id ? () => s(`image`, { assetId: e.id }) : void 0,
            onClose: () => u(null),
          },
          e.id || e.asset_name,
        ),
      });
    },
    te = P.length > 0 || L.length > 0;
  return (0, Z.jsxs)(`div`, {
    className: `space-y-4 p-4`,
    children: [
      te
        ? (0, Z.jsx)(`p`, {
            className: `text-[11px] text-muted-foreground/50`,
            children: `A character is drawn once as a sheet. Every move is drawn from it, frame by frame.`,
          })
        : (0, Z.jsxs)(`div`, {
            className: `${Eu} p-4 text-center`,
            children: [
              (0, Z.jsx)(Qt, {
                className: `mx-auto mb-2 h-8 w-8 text-muted-foreground/30`,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-sm font-semibold text-foreground/90`,
                children: `Define your first character`,
              }),
              (0, Z.jsx)(`p`, {
                className: `mx-auto mt-1 max-w-[260px] text-xs text-muted-foreground`,
                children: `Draw them once as a turnaround sheet. Every move you add after that is drawn from it, so the character stays on model.`,
              }),
              (0, Z.jsxs)(`div`, {
                className: `mt-3 flex gap-2`,
                children: [
                  (0, Z.jsx)(`input`, {
                    type: `text`,
                    value: p,
                    onChange: (e) => {
                      (m(e.target.value), M(`add-character`, null));
                    },
                    onKeyDown: (e) => e.key === `Enter` && void H(),
                    placeholder: `e.g. Hero, Slime enemy`,
                    disabled: A || h,
                    className: `flex-1 ${wu}`,
                  }),
                  (0, Z.jsx)(x, {
                    onClick: () => void H(),
                    disabled: !p.trim() || A || h,
                    variant: `secondary`,
                    className: `h-10 px-4 bg-secondary text-foreground hover:bg-secondary/70`,
                    children: h
                      ? (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` })
                      : (0, Z.jsx)(ni, { className: `h-4 w-4` }),
                  }),
                ],
              }),
              S[`add-character`] &&
                (0, Z.jsx)(`p`, {
                  className: `mt-1 text-left text-[11px] text-red-400`,
                  children: S[`add-character`],
                }),
            ],
          }),
      P.map((e, t) => {
        let n = e.id || e.asset_name,
          r = I.get(n) || [],
          a = !!R && r.some((e) => e.asset_name === R.asset_name);
        return (0, Z.jsx)(
          `div`,
          {
            className: t > 0 ? `border-t border-border pt-4` : void 0,
            children: (0, Z.jsx)(Fd, {
              character: e,
              moves: r,
              sessionId: k,
              sessionDir: i,
              sheetGenerating: y === e.asset_name,
              generatingNames: j,
              disabled: A,
              canEdit: !!e.id,
              selectedMoveName: a ? l : null,
              addOpen: d === n,
              error: S[e.asset_name] || null,
              detail: a ? G(R, e.asset_name) : null,
              addForm:
                d === n
                  ? (0, Z.jsx)(`div`, {
                      ref: z,
                      children: (0, Z.jsx)(Od, {
                        characterName: e.asset_name,
                        takenMoves: new Set(
                          r.map((t) =>
                            sd(
                              t.sheet_meta?.animation_name ||
                                fd(t.asset_name, e.asset_name),
                            ),
                          ),
                        ),
                        busy: _,
                        error: S[`add-move`] || null,
                        disabled: A,
                        onAdd: (t) => void U(e, t),
                        onCancel: () => f(null),
                      }),
                    })
                  : null,
              onSelectMove: (e) => {
                (f(null), u(e ? e.asset_name : null));
              },
              onRename: (t) => V(e, { asset_name: t }),
              onDescribe: (t) => V(e, { description: t }),
              onDrawSheet: (t) => W(e, `character_sheet_2d`, t),
              onToggleAdd: () => {
                (u(null), f((e) => (e === n ? null : n)));
              },
            }),
          },
          n,
        );
      }),
      L.length > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2.5 border-t border-border pt-4`,
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Other moves`,
                }),
                (0, Z.jsx)(`p`, {
                  className: `text-[10px] text-muted-foreground/40`,
                  children: `These name no character sheet in this game.`,
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: `grid grid-cols-3 gap-2`,
              children: L.map((e) =>
                (0, Z.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () =>
                      u((t) => (t === e.asset_name ? null : e.asset_name)),
                    className: `min-w-0 text-left`,
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `aspect-square overflow-hidden rounded-lg border ${e.concept_art_path ? `border-border` : `border-dashed border-border/50`} ${l === e.asset_name ? `border-white/25 ring-1 ring-white/40` : ``}`,
                        children: e.concept_art_path
                          ? (0, Z.jsx)(`img`, {
                              src: jr.getAssetUrl(i, e.concept_art_path, {
                                version:
                                  e.concept_art_version ?? e.modified ?? void 0,
                              }),
                              alt: e.asset_name,
                              className: `h-full w-full object-contain`,
                              style: Ml,
                            })
                          : (0, Z.jsx)(`div`, {
                              className: `flex h-full w-full items-center justify-center bg-card`,
                              children: (0, Z.jsx)(Qt, {
                                className: `h-5 w-5 text-muted-foreground/30`,
                              }),
                            }),
                      }),
                      (0, Z.jsx)(`div`, {
                        className: `mt-1 truncate text-[10px] text-muted-foreground`,
                        children: fd(e.asset_name),
                      }),
                    ],
                  },
                  e.id || e.asset_name,
                ),
              ),
            }),
            !!R && L.some((e) => e.asset_name === R.asset_name) && G(R, ``),
          ],
        }),
      te &&
        (0, Z.jsxs)(`div`, {
          className: `border-t border-border pt-3`,
          children: [
            (0, Z.jsx)(`label`, {
              className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 block`,
              children: `Add a character`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, Z.jsx)(`input`, {
                  type: `text`,
                  value: p,
                  onChange: (e) => {
                    (m(e.target.value), M(`add-character`, null));
                  },
                  onKeyDown: (e) => e.key === `Enter` && void H(),
                  placeholder: `e.g. Hero, Slime enemy`,
                  disabled: A || h,
                  className: `flex-1 ${wu}`,
                }),
                (0, Z.jsx)(x, {
                  onClick: () => void H(),
                  disabled: !p.trim() || A || h,
                  variant: `secondary`,
                  className: `h-10 px-4 bg-secondary text-foreground hover:bg-secondary/70`,
                  children: h
                    ? (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` })
                    : (0, Z.jsx)(ni, { className: `h-4 w-4` }),
                }),
              ],
            }),
            S[`add-character`] &&
              (0, Z.jsx)(`p`, {
                className: `mt-1 text-[11px] text-red-400`,
                children: S[`add-character`],
              }),
          ],
        }),
      (0, Z.jsx)(`div`, {
        className: `border-t border-border pt-2`,
        children: (0, Z.jsxs)(`button`, {
          onClick: () => n(e.id),
          className: `w-full min-h-[40px] flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground/80 transition-colors`,
          children: [
            (0, Z.jsx)(si, { className: `h-4 w-4` }),
            `Discuss the animation`,
          ],
        }),
      }),
    ],
  });
}
