// Create-CEn7EAZs 38 — classname
// Lines 12065-12363 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function ff({
  character: e,
  moves: t,
  sessionId: n,
  sessionDir: r,
  sheetGenerating: i,
  generatingNames: a,
  disabled: o = !1,
  canEdit: s,
  selectedMoveName: c,
  addOpen: l,
  error: u,
  detail: d,
  addForm: f,
  onSelectMove: p,
  onRename: m,
  onDescribe: h,
  onDrawSheet: g,
  onToggleAdd: _,
}) {
  let v = !!e.concept_art_path,
    y = v
      ? vr.getAssetUrl(r, e.concept_art_path, {
          version: e.concept_art_version ?? e.modified ?? void 0,
        })
      : null,
    b = i || a.has(e.asset_name),
    x = !!d || l,
    [S, C] = (0, X.useState)(v ? `animations` : `character`),
    w = x ? `animations` : S,
    T = La(`character_sheet_2d`, n, e.id || e.asset_name || null, Bd(v));
  return (0, Z.jsxs)(`div`, {
    className: `space-y-3`,
    children: [
      (0, Z.jsx)(Zl, {
        value: e.asset_name,
        onSave: m,
        disabled: !s,
        placeholder: `Name this character`,
        className: `text-sm font-semibold text-foreground/90`,
      }),
      (0, Z.jsxs)(`div`, {
        className: Yu,
        children: [
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: () => {
              (d && p(null), l && _(), C(`character`));
            },
            className: `${Xu} ${w === `character` ? Zu : Qu}`,
            children: `Character`,
          }),
          (0, Z.jsxs)(`button`, {
            type: `button`,
            onClick: () => C(`animations`),
            className: `${Xu} ${w === `animations` ? Zu : Qu}`,
            children: [`Animations`, t.length > 0 ? ` · ${t.length}` : ``],
          }),
        ],
      }),
      w === `character`
        ? (0, Z.jsxs)(`div`, {
            className: `space-y-2.5`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `relative aspect-[4/3] bg-white ${td}`,
                children: [
                  y
                    ? (0, Z.jsx)(`img`, {
                        src: y,
                        alt: e.asset_name,
                        className: `h-full w-full object-contain`,
                      })
                    : (0, Z.jsxs)(`div`, {
                        className: `flex h-full w-full flex-col items-center justify-center gap-1.5 bg-card`,
                        children: [
                          (0, Z.jsx)(Zt, {
                            className: `h-7 w-7 text-muted-foreground/25`,
                          }),
                          (0, Z.jsx)(`span`, {
                            className: `text-[11px] text-muted-foreground/50`,
                            children: `Character sheet not drawn yet`,
                          }),
                        ],
                      }),
                  b &&
                    (0, Z.jsx)(`div`, {
                      className: `absolute inset-0 flex items-center justify-center bg-card/70`,
                      children: (0, Z.jsx)(J, {
                        className: `h-6 w-6 animate-spin text-muted-foreground`,
                      }),
                    }),
                ],
              }),
              (0, Z.jsx)(Zl, {
                value: e.description || ``,
                onSave: h,
                disabled: !s,
                isMultiline: !0,
                placeholder: `Who are they? Build, silhouette, signature gear`,
                className: `text-xs text-muted-foreground`,
              }),
              (0, Z.jsx)(Bu, {
                label: v ? `Redraw character sheet` : `Draw character sheet`,
                cost: T,
                icon: v
                  ? (0, Z.jsx)(ln, { className: `mr-1 h-4 w-4` })
                  : (0, Z.jsx)(Nr, { className: `mr-1 h-4 w-4` }),
                onGenerate: (e) => g(Bd(v, e)),
                isGenerating: i,
                disabled: o,
                size: `default`,
                variant: v ? `outline` : `default`,
                className: `h-10 w-full`,
                placeholder: `e.g. front, side and back, chunky proportions`,
              }),
              u &&
                (0, Z.jsx)(`p`, {
                  className: `text-[11px] text-red-400`,
                  children: u,
                }),
            ],
          })
        : (0, Z.jsxs)(`div`, {
            className: `space-y-2.5`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [
                  (0, Z.jsx)(`span`, { className: Gu, children: `Moves` }),
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] text-muted-foreground/40`,
                    children:
                      t.length === 0
                        ? `none yet`
                        : `${t.length} drawn from this sheet`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `grid grid-cols-3 gap-2`,
                children: [
                  t.map((t) =>
                    (0, Z.jsx)(
                      df,
                      {
                        move: t,
                        characterName: e.asset_name,
                        sessionDir: r,
                        selected: c === t.asset_name,
                        generating: a.has(t.asset_name),
                        onSelect: () => p(c === t.asset_name ? null : t),
                      },
                      t.id || t.asset_name,
                    ),
                  ),
                  (0, Z.jsxs)(`button`, {
                    type: `button`,
                    onClick: _,
                    disabled: o || !v || !s,
                    className: `flex aspect-square flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border/60 text-muted-foreground/60 transition-colors hover:border-white/20 hover:text-foreground disabled:opacity-30 disabled:hover:border-border/60 disabled:hover:text-muted-foreground/60`,
                    children: [
                      (0, Z.jsx)(Br, { className: `h-4 w-4` }),
                      (0, Z.jsx)(`span`, {
                        className: `text-[10px]`,
                        children: `Add move`,
                      }),
                    ],
                  }),
                ],
              }),
              !v &&
                (0, Z.jsx)(`p`, {
                  className: `text-[10px] text-muted-foreground/50`,
                  children: `Draw the character sheet first. Every frame of every move is drawn from it.`,
                }),
              f,
              d,
            ],
          }),
    ],
  });
}
function pf(e, t, n, r, i, a) {
  let o = Math.max(1, n.columns),
    s = Math.max(1, n.frame_count),
    c = Math.max(1, n.frame_width),
    l = Math.max(1, n.frame_height),
    u = ((r % s) + s) % s,
    d = u % o,
    f = Math.floor(u / o);
  (e.save(),
    (e.globalAlpha = a),
    (e.imageSmoothingEnabled = !1),
    e.drawImage(t, d * c, f * l, c, l, i[0], i[1], c, l),
    e.restore());
}
function mf({
  imageUrl: e,
  meta: t,
  offsets: n,
  recordedOffsets: r,
  frame: i,
  loop: a,
  disabled: o = !1,
  onOffsetChange: s,
}) {
  let c = (0, X.useRef)(null),
    l = of(e),
    u = (0, X.useRef)(null),
    d = n[i] ?? [0, 0];
  (0, X.useEffect)(() => {
    let e = c.current,
      o = e?.getContext(`2d`);
    if (!e || !o || !l) return;
    o.clearRect(0, 0, e.width, e.height);
    let s = (e) => $d(n[e] ?? [0, 0], r[e]),
      { prev: u, next: d } = tf(i, t.frame_count, a);
    (u !== null && pf(o, l, t, u, s(u), 0.22),
      d !== null && pf(o, l, t, d, s(d), 0.22),
      pf(o, l, t, i, s(i), 1));
  }, [l, t, i, n, r, a]);
  let f = () => {
    let e = c.current;
    if (!e) return 1;
    let n = e.getBoundingClientRect().width;
    return n > 0 ? t.frame_width / n : 1;
  };
  return (0, Z.jsxs)(`div`, {
    className: `relative flex h-full w-full touch-none select-none items-center justify-center`,
    style: nu,
    onPointerDown: (e) => {
      o ||
        (e.currentTarget.setPointerCapture?.(e.pointerId),
        (u.current = { x: e.clientX, y: e.clientY, from: d }));
    },
    onPointerMove: (e) => {
      let t = u.current;
      if (!t) return;
      let [n, r] = ef(t.from, e.clientX - t.x, e.clientY - t.y, f());
      s(n, r);
    },
    onPointerUp: (e) => {
      ((u.current = null),
        e.currentTarget.releasePointerCapture?.(e.pointerId));
    },
    onPointerCancel: () => {
      u.current = null;
    },
    children: [
      (0, Z.jsx)(`canvas`, {
        ref: c,
        width: t.frame_width,
        height: t.frame_height,
        className: `max-h-full max-w-full ${o ? `` : `cursor-grab active:cursor-grabbing`}`,
        style: { imageRendering: `pixelated`, objectFit: `contain` },
      }),
      (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/40`,
      }),
    ],
  });
}
function hf(e, t) {
  if (e) {
    let n = Kd(e);
    return {
      frameCount: Pd(e.frame_count),
      cellHeight: Fd(e.cell_height ?? t.cellHeight ?? 256),
      fps: Id(e.fps),
      loop: e.loop ?? !0,
      skipFirst: n.skipFirst,
      skipLast: n.skipLast,
    };
  }
  let n = t.loop ?? Nd(t.animationName);
  return {
    frameCount: Pd(t.frameCount ?? 8),
    cellHeight: Fd(t.cellHeight ?? 256),
    fps: Id(t.fps ?? 10),
    loop: n,
    skipFirst: !1,
    skipLast: n,
  };
}
function gf(e) {
  return e
    ? [
        e.frame_count,
        e.fps,
        e.loop,
        e.cell_height,
        e.play_start,
        e.play_count,
        JSON.stringify(e.frame_offsets ?? []),
        e.bake_source?.rgba_sheet ?? ``,
      ].join(`|`)
    : `none`;
}
