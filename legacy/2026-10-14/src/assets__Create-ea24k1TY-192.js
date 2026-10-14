// assets__Create-ea24k1TY 192 — classname
// Lines 64326-64415 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function GQ({
  take: e,
  isFinal: t,
  isPlaying: n,
  sessionId: r,
  onPlay: i,
  onSelect: a,
  onDelete: o,
}) {
  return (0, Z.jsxs)(`div`, {
    className: `p-2 rounded-lg border transition-all duration-150 ${t ? `border-emerald-500/30 bg-emerald-500/5` : `border-border/40 bg-card/30 hover:border-border/60`}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, Z.jsx)(iQ, {
            label: n ? `Pause this take` : `Play this take`,
            tone: `primary`,
            active: n,
            onClick: i,
            discClassName: `rounded-full`,
            children: n
              ? (0, Z.jsx)(N, { className: `h-3.5 w-3.5` })
              : (0, Z.jsx)(bn, { className: `h-3.5 w-3.5 ml-0.5` }),
          }),
          (0, Z.jsx)(`span`, {
            className: `text-xs text-muted-foreground/60 font-mono shrink-0`,
            children: BQ(e.duration),
          }),
          t
            ? (0, Z.jsxs)(`span`, {
                className: `ml-auto flex items-center gap-1 text-[10px] text-emerald-400 font-medium shrink-0`,
                children: [(0, Z.jsx)(ve, { className: `h-3 w-3` }), `Keeper`],
              })
            : (0, Z.jsxs)(`button`, {
                onClick: a,
                className: `ml-auto flex items-center gap-1 text-[10px] text-primary/70 hover:text-primary transition-colors px-1.5 min-h-[40px] -my-1 rounded hover:bg-primary/5 shrink-0`,
                title: `Keep this take as the one the game uses`,
                "aria-label": `Keep this take as the one the game uses`,
                children: [
                  (0, Z.jsx)(ve, { className: `h-3 w-3` }),
                  `Keep this`,
                ],
              }),
          (0, Z.jsx)(iQ, {
            label: `Delete this take`,
            tone: `destructive`,
            onClick: o,
            children: (0, Z.jsx)(qr, { className: `h-3.5 w-3.5` }),
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 pl-8 mt-1`,
        children: [
          e.method &&
            (0, Z.jsx)(`span`, {
              className: `text-[9px] px-1.5 py-0.5 rounded font-medium shrink-0 ${e.method === `tts` ? `bg-blue-500/15 text-blue-300` : e.method === `recorded` ? `bg-amber-500/15 text-amber-300` : `bg-purple-500/15 text-purple-300`}`,
              children: cQ(e.method),
            }),
          (0, Z.jsx)(`span`, {
            className: `text-[10px] text-muted-foreground/40 min-w-0 truncate`,
            children: new Date(e.created_at).toLocaleTimeString(),
          }),
        ],
      }),
    ],
  });
}
function KQ({ mode: e, onChange: t, disabled: n }) {
  return (0, Z.jsxs)(`div`, {
    className: `flex w-full rounded-lg border border-border/60 overflow-hidden`,
    children: [
      (0, Z.jsxs)(`button`, {
        onClick: () => t(`tts`),
        disabled: n,
        "aria-pressed": e === `tts`,
        className: `flex flex-1 items-center justify-center gap-1.5 px-3 min-h-[40px] text-xs font-medium transition-colors ${e === `tts` ? `bg-primary/15 text-primary` : `bg-card/30 text-muted-foreground/60 hover:text-muted-foreground`} ${n ? `opacity-50 cursor-not-allowed` : ``}`,
        children: [(0, Z.jsx)(Yr, { className: `h-3 w-3` }), `Generate`],
      }),
      (0, Z.jsxs)(`button`, {
        onClick: () => t(`record`),
        disabled: n,
        "aria-pressed": e === `record`,
        className: `flex flex-1 items-center justify-center gap-1.5 px-3 min-h-[40px] text-xs font-medium transition-colors border-l border-border/60 ${e === `record` ? `bg-red-500/15 text-red-400` : `bg-card/30 text-muted-foreground/60 hover:text-muted-foreground`} ${n ? `opacity-50 cursor-not-allowed` : ``}`,
        children: [(0, Z.jsx)(Ao, { className: `h-3 w-3` }), `Record`],
      }),
    ],
  });
}
