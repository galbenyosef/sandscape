// assets__Create-ea24k1TY 194 — classname
// Lines 65508-65686 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function JQ(e) {
  if (!(!e.takes || e.takes.length === 0))
    return e.final_take_id
      ? e.takes.find((t) => t.id === e.final_take_id)
      : e.takes.find((e) => e.is_final);
}
function YQ(e) {
  let t = Math.floor(e / 60),
    n = Math.floor(e % 60);
  return t > 0
    ? `${t}:${n.toString().padStart(2, `0`)}`
    : `0:${n.toString().padStart(2, `0`)}`;
}
function XQ(e, t) {
  if (t.startsWith(`http`) || t.startsWith(`blob:`)) return t;
  let n = t.split(`/`).pop() || t;
  return `${Mn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${n}`;
}
function ZQ({ completed: e, total: t }) {
  let n = t > 0 ? Math.round((e / t) * 100) : 0;
  return (0, Z.jsxs)(`div`, {
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between mb-1.5`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
            children: `Ready To Lock`,
          }),
          (0, Z.jsxs)(`span`, {
            className: `text-xs text-muted-foreground`,
            children: [e, ` of `, t, ` lines (`, n, `%)`],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `h-2 bg-secondary rounded-full overflow-hidden`,
        children: (0, Z.jsx)(`div`, {
          className: `h-full bg-primary rounded-full transition-all duration-500 ease-out`,
          style: { width: `${n}%` },
        }),
      }),
    ],
  });
}
function QQ({ line: e, isPlaying: t, onPlay: n, onReRecord: r }) {
  let i = JQ(e),
    a = !!i;
  return (0, Z.jsx)(`div`, {
    className: `p-2.5 rounded-lg border border-border/40 bg-card/30 transition-all duration-150 hover:border-border/60`,
    children: (0, Z.jsxs)(`div`, {
      className: `flex items-start gap-2`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `mt-0.5 shrink-0`,
          children: a
            ? (0, Z.jsx)(Be, { className: `h-4 w-4 text-emerald-400` })
            : (0, Z.jsx)(Se, { className: `h-4 w-4 text-muted-foreground/30` }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex-1 min-w-0`,
          children: [
            (0, Z.jsx)(`p`, {
              className: `text-sm text-foreground/80 line-clamp-2 mb-1.5`,
              children: e.line_text,
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-1.5 flex-wrap`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground`,
                  children: uQ(e.context),
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground`,
                  children: uQ(e.emotion),
                }),
                i?.duration &&
                  (0, Z.jsx)(`span`, {
                    className: `text-[9px] text-muted-foreground/40 ml-1`,
                    children: YQ(i.duration),
                  }),
              ],
            }),
          ],
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2 shrink-0`,
          children: [
            (0, Z.jsx)(iQ, {
              label: a
                ? t
                  ? `Stop this line`
                  : `Play this line`
                : `This line has no take yet`,
              disabled: !a,
              active: t,
              onClick: n,
              children: t
                ? (0, Z.jsx)(Et, { className: `h-3.5 w-3.5` })
                : (0, Z.jsx)(bn, { className: `h-3.5 w-3.5` }),
            }),
            (0, Z.jsx)(`button`, {
              onClick: r,
              title: `Redo this line in the Recording step`,
              className: `text-[10px] px-2 min-h-[40px] rounded border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors`,
              children: `Redo`,
            }),
          ],
        }),
      ],
    }),
  });
}
function $Q({
  character: e,
  lines: t,
  voiceName: n,
  playingLineId: r,
  onPlayLine: i,
  onReRecord: a,
}) {
  let [o, s] = (0, X.useState)(!1),
    c = t.filter((e) => !!JQ(e)).length;
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border/60 bg-secondary/20 overflow-hidden`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 px-3 py-2 bg-secondary/30`,
        children: [
          (0, Z.jsx)(iQ, {
            label: o ? `Show ${e.name}'s lines` : `Hide ${e.name}'s lines`,
            onClick: () => s(!o),
            children: (0, Z.jsx)(ti, {
              className: `h-3.5 w-3.5 transition-transform ${o ? `-rotate-90` : ``}`,
            }),
          }),
          (0, Z.jsx)(`span`, {
            className: `text-sm font-medium text-foreground/80 flex-1 min-w-0 truncate`,
            title: e.name,
            children: e.name,
          }),
          (0, Z.jsxs)(`span`, {
            className: `text-[10px] text-muted-foreground/50 mr-2`,
            children: [c, `/`, t.length, ` line`, t.length === 1 ? `` : `s`],
          }),
          n &&
            (0, Z.jsx)(`span`, {
              className: `text-[10px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 truncate max-w-[120px]`,
              title: n,
              children: n,
            }),
        ],
      }),
      !o &&
        (0, Z.jsx)(`div`, {
          className: `p-2 space-y-1.5`,
          children:
            t.length === 0
              ? (0, Z.jsx)(`div`, {
                  className: `py-4 text-center text-xs text-muted-foreground/40`,
                  children: `No lines for this character.`,
                })
              : t.map((e) =>
                  (0, Z.jsx)(
                    QQ,
                    {
                      line: e,
                      isPlaying: r === e.id,
                      onPlay: () => i(e.id),
                      onReRecord: () => a(e.id),
                    },
                    e.id,
                  ),
                ),
        }),
    ],
  });
}
