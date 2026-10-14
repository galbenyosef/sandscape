// assets__Create-ea24k1TY 37 — classname
// Lines 11725-12498 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Bd({
  move: e,
  characterName: t,
  sessionId: n,
  sessionDir: r,
  initialFrameCount: i,
  initialFps: a,
  initialLoop: o,
  initialCellHeight: s,
  initialFeedback: c,
  isGenerating: l,
  disabled: u = !1,
  error: d,
  onDraw: f,
  onRemove: p,
  onOpenEditor: m,
  onClose: h,
}) {
  let g = e.sheet_meta ?? null,
    _ = fd(e.asset_name, t),
    v = !!e.concept_art_path,
    y = (0, X.useMemo)(
      () => ({
        animationName: g?.animation_name || _,
        frameCount: i,
        fps: a,
        loop: o,
        cellHeight: s,
      }),
      [g?.animation_name, _, i, a, o, s],
    ),
    b = (0, X.useMemo)(() => Rd(g, y), [g, y]),
    [S, C] = (0, X.useState)(b.frameCount),
    [w, T] = (0, X.useState)(b.cellHeight),
    [E, D] = (0, X.useState)(b.fps),
    [O, k] = (0, X.useState)(b.loop),
    [A, j] = (0, X.useState)(b.skipFirst),
    [M, P] = (0, X.useState)(b.skipLast),
    [F, I] = (0, X.useState)(c ?? ``),
    [L, R] = (0, X.useState)(!1),
    [z, B] = (0, X.useState)(null),
    [V, H] = (0, X.useState)(!1),
    [U, ee] = (0, X.useState)(null),
    W = (0, X.useRef)(0),
    G = (0, X.useRef)(``),
    [te, K] = (0, X.useState)(null),
    [ne, re] = (0, X.useState)(`play`),
    [ie, ae] = (0, X.useState)(() => xd(g)),
    [oe, se] = (0, X.useState)(0),
    [q, ce] = (0, X.useState)(!1),
    [le, ue] = (0, X.useState)(null),
    de = (0, X.useRef)(0),
    [fe, pe] = (0, X.useState)(() => pd(g ?? { frame_count: 1 }).start),
    [me, he] = (0, X.useState)(() => !jd()),
    ge = (0, X.useCallback)(() => he(!1), []),
    _e = zd(g);
  G.current = _e;
  let [ve, be] = (0, X.useState)(_e);
  if (_e !== ve) {
    be(_e);
    let e = Rd(g, y);
    (C(e.frameCount),
      T(e.cellHeight),
      D(e.fps),
      k(e.loop),
      j(e.skipFirst),
      P(e.skipLast),
      B(null),
      ee(null),
      K(null));
    let t = xd(g);
    (ae(t),
      se((e) => Math.min(e, Math.max(0, t.length - 1))),
      ce(!1),
      ue(null),
      pe(md(fe, g)));
  }
  let xe = z ?? g,
    Se = xe?.animation_name || _,
    Ce = v
      ? jr.getAssetUrl(r, e.concept_art_path, {
          version: e.concept_art_version ?? e.modified ?? void 0,
        })
      : null,
    we = v && !!xe && !!Ce,
    Te = we && !!e.id && !!n,
    Ee = (0, X.useMemo)(
      () =>
        ld({
          animationName: Se,
          frameCount: S,
          fps: E,
          loop: O,
          cellHeight: w,
          skipFirst: A,
          skipLast: M,
        }),
      [Se, S, E, O, w, A, M],
    ),
    Oe = rn(`animation_sheet_2d`, n, e.id || e.asset_name || null, Ee),
    ke = async (t, r, i, a) => {
      if (!xe || !e.id) return;
      let o = od(t),
        { play_start: s, play_count: c } = hd(xe.frame_count, i, a),
        l = ++W.current,
        u = G.current;
      (B({ ...xe, fps: o, loop: r, play_start: s, play_count: c }),
        ee(null),
        H(!0),
        pe((e) => s + ((((e - s) % c) + c) % c)));
      let d = () => W.current === l && G.current === u;
      try {
        let t = await jr.putSheetPlayback(n, e.id, {
          fps: o,
          loop: r,
          play_start: s,
          play_count: c,
        });
        if (!t.success)
          throw Error(t.error || `Could not save that playback change.`);
        d() && t.sheet_meta && B(t.sheet_meta);
      } catch (e) {
        if (d()) {
          let t = Rd(g, y);
          (D(t.fps),
            k(t.loop),
            j(t.skipFirst),
            P(t.skipLast),
            B(null),
            ee(
              e instanceof Error
                ? e.message
                : `Could not save that playback change.`,
            ));
        }
      } finally {
        W.current === l && H(!1);
      }
    },
    Ae = Te && !!xe?.bake_source,
    je = Ae ? ne : `play`,
    Me = (0, X.useMemo)(() => xd(xe), [xe]),
    Ne = !Ed(ie, Me),
    Pe = ie[oe] ?? [0, 0],
    Fe = async () => {
      if (!e.id || !Ae) return;
      let t = ++de.current,
        r = G.current;
      (ue(null), ce(!0));
      let i = () => de.current === t && G.current === r;
      try {
        let t = await jr.putSheetAlignment(n, e.id, { frame_offsets: ie });
        if (!t.success)
          throw Error(t.error || `Could not save that alignment.`);
        i() && t.sheet_meta && (B(t.sheet_meta), ae(xd(t.sheet_meta)));
      } catch (e) {
        i() &&
          (ae(xd(g)),
          ue(
            e instanceof Error ? e.message : `Could not save that alignment.`,
          ));
      } finally {
        de.current === t && ce(!1);
      }
    },
    Ie = (e) => {
      let t = od(e);
      (D(t), K(null), Te && ke(t, O, A, M));
    },
    Le = (e) => {
      (k(e), Te && ke(E, e, A, M));
    },
    Re = (e) => {
      (j(e), Te && ke(E, O, e, M));
    },
    ze = (e) => {
      (P(e), Te && ke(E, O, A, e));
    },
    Be = xe ? pd(xe) : { start: 0, count: 1 },
    Ve = (((fe - Be.start) % Be.count) + Be.count) % Be.count,
    He = !$u.includes(E);
  return (0, Z.jsxs)(`div`, {
    className: `space-y-3 border-t border-border pt-3`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `truncate text-sm font-semibold text-foreground/90 first-letter:uppercase`,
            children: _,
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            "aria-label": `Close move`,
            onClick: h,
            className: `flex h-10 w-10 shrink-0 items-center justify-center rounded text-muted-foreground/60 hover:text-foreground`,
            children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
          }),
        ],
      }),
      Ae &&
        (0, Z.jsxs)(`div`, {
          className: `flex gap-1 rounded-lg bg-secondary/30 p-1`,
          children: [
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => re(`play`),
              className: `min-h-[40px] flex-1 rounded-md px-3 text-xs font-medium transition-colors ${je === `play` ? `bg-secondary text-foreground` : `text-muted-foreground hover:text-foreground`}`,
              children: `Play`,
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: () => {
                (he(!1), re(`align`));
              },
              className: `min-h-[40px] flex-1 rounded-md px-3 text-xs font-medium transition-colors ${je === `align` ? `bg-secondary text-foreground` : `text-muted-foreground hover:text-foreground`}`,
              children: `Align`,
            }),
          ],
        }),
      je === `align` && xe && Ce
        ? (0, Z.jsx)(`div`, {
            className: Tu,
            children: (0, Z.jsx)(`div`, {
              className: `aspect-square`,
              children: (0, Z.jsx)(Ld, {
                imageUrl: Ce,
                meta: xe,
                offsets: ie,
                recordedOffsets: Me,
                frame: oe,
                loop: xe.loop !== !1,
                disabled: u || l || q,
                onOffsetChange: (e, t) => ae((n) => Sd(n, oe, e, t)),
              }),
            }),
          })
        : we && xe && Ce
          ? (0, Z.jsx)(`div`, {
              className: Tu,
              children: (0, Z.jsx)(`div`, {
                className: `aspect-square`,
                children: (0, Z.jsx)(Nd, {
                  imageUrl: Ce,
                  meta: xe,
                  frame: fe,
                  playing: me,
                  previewFps: xe.fps,
                  onFrameChange: pe,
                  onEnded: ge,
                }),
              }),
            })
          : Ce
            ? (0, Z.jsxs)(`div`, {
                className: `space-y-1`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `aspect-square bg-white ${Tu}`,
                    children: (0, Z.jsx)(`img`, {
                      src: Ce,
                      alt: e.asset_name,
                      className: `h-full w-full object-contain`,
                    }),
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] text-amber-400`,
                    children: `This sheet has no frame data, so it cannot be played. Redraw it to record the grid.`,
                  }),
                ],
              })
            : (0, Z.jsxs)(`div`, {
                className: `flex aspect-square flex-col items-center justify-center gap-2 ${Eu}`,
                children: [
                  (0, Z.jsx)(Qt, {
                    className: `h-7 w-7 text-muted-foreground/30`,
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-[11px] text-muted-foreground/60`,
                    children: `Not drawn yet`,
                  }),
                ],
              }),
      je === `play` &&
        we &&
        xe &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2.5`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  "aria-label": me ? `Pause` : `Play`,
                  onClick: () => he((e) => !e),
                  className: Ou,
                  children: me
                    ? (0, Z.jsx)(N, { className: `h-4 w-4` })
                    : (0, Z.jsx)(bn, { className: `h-4 w-4` }),
                }),
                (0, Z.jsx)(`input`, {
                  type: `range`,
                  min: 0,
                  max: Math.max(0, Be.count - 1),
                  value: Ve,
                  "aria-label": `Frame`,
                  onChange: (e) => {
                    (he(!1), pe(Be.start + Number(e.target.value)));
                  },
                  className: `h-10 min-w-0 flex-1 accent-white`,
                }),
                (0, Z.jsxs)(`span`, {
                  className: `w-12 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,
                  children: [Ve + 1, ` / `, Be.count],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                      children: `Speed`,
                    }),
                    V &&
                      (0, Z.jsx)(J, {
                        className: `h-3 w-3 animate-spin text-muted-foreground`,
                      }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `mt-1 flex flex-wrap items-center gap-1.5`,
                  children: [
                    $u.map((e) =>
                      (0, Z.jsxs)(
                        `button`,
                        {
                          type: `button`,
                          disabled: u || l,
                          onClick: () => Ie(e),
                          className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${E === e ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                          children: [e, ` fps`],
                        },
                        e,
                      ),
                    ),
                    (0, Z.jsx)(`input`, {
                      type: `number`,
                      min: 1,
                      max: 30,
                      value: te === null ? (He ? E : ``) : te,
                      placeholder: `Other`,
                      disabled: u || l,
                      onChange: (e) => K(e.target.value),
                      onBlur: () => {
                        te !== null && te !== `` ? Ie(Number(te)) : K(null);
                      },
                      onKeyDown: (e) => {
                        e.key === `Enter` &&
                          (te !== null && te !== `` ? Ie(Number(te)) : K(null));
                      },
                      className: `h-10 w-[74px] px-2 text-xs rounded-lg border border-border bg-secondary/30 text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-white/25 ${He ? `border-white/20 text-foreground` : ``}`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Playback`,
                }),
                (0, Z.jsxs)(`div`, {
                  className: `mt-1 flex flex-wrap items-center gap-1.5`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      disabled: u || l,
                      onClick: () => Le(!0),
                      className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${O ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                      children: `Loops`,
                    }),
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      disabled: u || l,
                      onClick: () => Le(!1),
                      className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${O ? `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground` : `border-white/20 bg-secondary text-foreground`}`,
                      children: `Plays once`,
                    }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `mt-1.5 flex flex-wrap items-center gap-1.5`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      disabled: u || l,
                      onClick: () => Re(!A),
                      className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${A ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                      children: `Skip first frame`,
                    }),
                    (0, Z.jsx)(`button`, {
                      type: `button`,
                      disabled: u || l,
                      onClick: () => ze(!M),
                      className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${M ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                      children: `Skip last frame`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-0.5 text-[10px] text-muted-foreground/50`,
              children: [
                (0, Z.jsx)(`p`, { children: _d(xe) }),
                (0, Z.jsx)(`p`, { children: vd(xe) }),
                (0, Z.jsx)(`p`, {
                  className: `text-muted-foreground/40`,
                  children: `Speed, loop and skipped frames apply instantly. No coins, no redraw.`,
                }),
              ],
            }),
            U &&
              (0, Z.jsx)(`p`, {
                className: `text-[11px] text-red-400`,
                children: U,
              }),
          ],
        }),
      je === `align` &&
        xe &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2.5`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Frame`,
                }),
                q &&
                  (0, Z.jsx)(J, {
                    className: `h-3 w-3 animate-spin text-muted-foreground`,
                  }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  "aria-label": `Previous frame`,
                  disabled: q,
                  onClick: () =>
                    se((e) => (e - 1 + xe.frame_count) % xe.frame_count),
                  className: Ou,
                  children: (0, Z.jsx)(ye, { className: `h-4 w-4` }),
                }),
                (0, Z.jsxs)(`span`, {
                  className: `flex-1 text-center text-[11px] tabular-nums text-muted-foreground`,
                  children: [oe + 1, ` / `, xe.frame_count],
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  "aria-label": `Next frame`,
                  disabled: q,
                  onClick: () => se((e) => (e + 1) % xe.frame_count),
                  className: Ou,
                  children: (0, Z.jsx)(De, { className: `h-4 w-4` }),
                }),
              ],
            }),
            (0, Z.jsxs)(`p`, {
              className: `text-[10px] tabular-nums text-muted-foreground/50`,
              children: [
                `Drag the frame to line it up. Nudge `,
                Pe[0],
                `, `,
                Pe[1],
                ` px.`,
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-1.5`,
              children: [
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  disabled: q || (Pe[0] === 0 && Pe[1] === 0),
                  onClick: () => ae((e) => Sd(e, oe, 0, 0)),
                  className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground disabled:opacity-30`,
                  children: `Reset frame`,
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  disabled: q || !ie.some((e) => e[0] !== 0 || e[1] !== 0),
                  onClick: () => ae(ie.map(() => [0, 0])),
                  className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground disabled:opacity-30`,
                  children: `Reset all`,
                }),
              ],
            }),
            (0, Z.jsx)(x, {
              onClick: () => void Fe(),
              disabled: u || l || q || !Ne,
              variant: `secondary`,
              className: `h-10 w-full bg-secondary text-foreground hover:bg-secondary/70`,
              children: q
                ? (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` })
                : `Save alignment`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground/40`,
              children: `Re-cuts the sheet from the drawing it was made from. Free, no redraw.`,
            }),
            le &&
              (0, Z.jsx)(`p`, {
                className: `text-[11px] text-red-400`,
                children: le,
              }),
          ],
        }),
      je === `play` &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2.5 border-t border-border pt-3`,
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Frames`,
                }),
                (0, Z.jsxs)(`div`, {
                  className: `mt-1 flex flex-wrap items-center gap-1.5`,
                  children: [
                    Qu.map((e) =>
                      (0, Z.jsx)(
                        `button`,
                        {
                          type: `button`,
                          disabled: u || l,
                          onClick: () => C(e),
                          className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${S === e ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                          children: e,
                        },
                        e,
                      ),
                    ),
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] text-muted-foreground/40`,
                      children: `More frames, smoother motion`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Size`,
                }),
                (0, Z.jsx)(`div`, {
                  className: `mt-1 flex flex-wrap items-center gap-1.5`,
                  children: ed.map((e) =>
                    (0, Z.jsxs)(
                      `button`,
                      {
                        type: `button`,
                        disabled: u || l,
                        onClick: () => T(e),
                        className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${w === e ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                        children: [e, `px`],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            !we &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                        children: `Speed`,
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `mt-1 flex flex-wrap items-center gap-1.5`,
                        children: [
                          $u.map((e) =>
                            (0, Z.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                disabled: u || l,
                                onClick: () => D(e),
                                className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${E === e ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                                children: [e, ` fps`],
                              },
                              e,
                            ),
                          ),
                          (0, Z.jsx)(`input`, {
                            type: `number`,
                            min: 1,
                            max: 30,
                            value: He ? E : ``,
                            placeholder: `Other`,
                            disabled: u || l,
                            onChange: (e) => {
                              e.target.value !== `` &&
                                D(od(Number(e.target.value)));
                            },
                            className: `h-10 w-[74px] px-2 text-xs rounded-lg border border-border bg-secondary/30 text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-white/25 ${He ? `border-white/20 text-foreground` : ``}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                        children: `Playback`,
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `mt-1 flex flex-wrap items-center gap-1.5`,
                        children: [
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            disabled: u || l,
                            onClick: () => k(!0),
                            className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${O ? `border-white/20 bg-secondary text-foreground` : `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground`}`,
                            children: `Loops`,
                          }),
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            disabled: u || l,
                            onClick: () => k(!1),
                            className: `min-h-[40px] rounded-lg border px-3 text-xs transition-colors ${O ? `border-border bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground` : `border-white/20 bg-secondary text-foreground`}`,
                            children: `Plays once`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Direction (optional)`,
                }),
                (0, Z.jsx)(`input`, {
                  type: `text`,
                  value: F,
                  disabled: u || l,
                  onChange: (e) => I(e.target.value),
                  placeholder: `e.g. bouncy, weight on the down beat`,
                  className: `mt-1 h-10 w-full px-3 text-xs rounded-lg border border-border bg-secondary/30 text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-white/25`,
                }),
              ],
            }),
            d &&
              (0, Z.jsx)(`p`, {
                className: `text-[11px] text-red-400`,
                children: d,
              }),
            (0, Z.jsx)(an, {
              cost: Oe,
              label: v ? `Redraw ${_}` : `Draw ${_}`,
              icon: v
                ? (0, Z.jsx)(xn, { className: `mr-1 h-4 w-4` })
                : (0, Z.jsx)(Yr, { className: `mr-1 h-4 w-4` }),
              isLoading: l,
              loadingText: `Drawing...`,
              checkBalance: !0,
              size: `default`,
              variant: v ? `outline` : `default`,
              className: `h-10 w-full`,
              disabled: u,
              onClick: () =>
                f(
                  ld({
                    animationName: Se,
                    frameCount: S,
                    fps: E,
                    loop: O,
                    cellHeight: w,
                    skipFirst: A,
                    skipLast: M,
                    feedback: F,
                  }),
                ),
            }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          m &&
            v &&
            (0, Z.jsxs)(x, {
              variant: `outline`,
              size: `sm`,
              onClick: m,
              className: `h-10 w-full flex items-center justify-center gap-2 text-xs border-border bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground`,
              children: [
                (0, Z.jsx)(Zt, { className: `h-3.5 w-3.5` }),
                `Open in editor`,
              ],
            }),
          L
            ? (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-start gap-2`,
                    children: [
                      (0, Z.jsx)(Tn, {
                        className: `mt-0.5 h-4 w-4 shrink-0 text-red-400`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-red-300`,
                        children: `Remove this move? Its sheet and frames go with it.`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, Z.jsx)(`button`, {
                        onClick: () => R(!1),
                        className: `min-h-[40px] flex-1 rounded-md bg-card px-3 text-xs text-muted-foreground transition-colors hover:text-foreground/80`,
                        children: `Keep it`,
                      }),
                      (0, Z.jsxs)(`button`, {
                        onClick: () => {
                          (R(!1), p());
                        },
                        disabled: l,
                        className: `flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-md bg-red-500/20 px-3 text-xs text-red-300 transition-colors hover:bg-red-500/30 disabled:opacity-50`,
                        children: [
                          (0, Z.jsx)(qr, { className: `h-3.5 w-3.5` }),
                          `Remove`,
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, Z.jsxs)(`button`, {
                onClick: () => R(!0),
                disabled: l,
                className: `flex w-full min-h-[40px] items-center justify-center gap-2 text-xs text-muted-foreground/60 transition-colors hover:text-red-400 disabled:opacity-50 disabled:hover:text-muted-foreground/60`,
                children: [
                  (0, Z.jsx)(qr, { className: `h-3.5 w-3.5` }),
                  `Remove`,
                ],
              }),
        ],
      }),
    ],
  });
}
