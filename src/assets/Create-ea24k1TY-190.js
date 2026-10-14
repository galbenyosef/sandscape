// Create-ea24k1TY 190 — classname
// Lines 63840-64022 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var kQ = [`intro`, `gameplay`, `combat`, `cutscene`, `tutorial`, `ui`],
  AQ = [`neutral`, `excited`, `angry`, `sad`, `scared`, `happy`, `determined`],
  jQ = {
    1: { label: `Must have`, className: `bg-red-500/15 text-red-300` },
    2: { label: `Important`, className: `bg-yellow-500/15 text-yellow-300` },
    3: { label: `Optional`, className: `bg-zinc-500/15 text-zinc-400` },
  },
  MQ = [`dialogue`, `narration`, `bark`, `ui`];
function NQ({ priority: e, onClick: t }) {
  let n = jQ[e];
  return (0, Z.jsx)(`button`, {
    onClick: t,
    className: `inline-flex items-center px-2 min-h-[40px] -my-1 rounded text-[10px] font-medium ${n.className} hover:opacity-80 transition-opacity`,
    title: `${n.label}. Tap to change.`,
    "aria-label": `Importance: ${n.label}. Tap to change.`,
    children: n.label,
  });
}
function PQ({
  value: e,
  options: t,
  onChange: n,
  label: r,
  className: i = ``,
}) {
  return (0, Z.jsx)(`select`, {
    value: e,
    onChange: (e) => n(e.target.value),
    title: r,
    "aria-label": r,
    className: `h-10 -my-1 bg-card border border-border/50 rounded px-1.5 text-[11px] text-foreground/70 focus:outline-none focus:border-primary/40 appearance-none cursor-pointer ${i}`,
    children: t.map((e) =>
      (0, Z.jsx)(`option`, { value: e, children: uQ(e) }, e),
    ),
  });
}
function FQ({ line: e, onUpdate: t, onDelete: n }) {
  let r = (0, X.useCallback)(() => {
    t({ priority: (e.priority % 3) + 1 });
  }, [e.priority, t]);
  return (0, Z.jsxs)(`div`, {
    className: `p-2.5 rounded-lg border border-border/40 bg-card/30 transition-all duration-150 hover:border-border/60`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-start gap-1.5 mb-2`,
        children: [
          (0, Z.jsx)(`textarea`, {
            value: e.line_text,
            onChange: (e) => t({ line_text: e.target.value }),
            rows: 2,
            "aria-label": `Line text`,
            className: `flex-1 min-w-0 bg-transparent text-sm text-foreground/80 resize-none focus:outline-none placeholder-muted-foreground/40`,
            placeholder: `Enter line text...`,
          }),
          (0, Z.jsx)(iQ, {
            label: `Delete this line`,
            tone: `destructive`,
            onClick: n,
            className: `mt-0`,
            children: (0, Z.jsx)(li, { className: `h-3.5 w-3.5` }),
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 flex-wrap`,
        children: [
          (0, Z.jsx)(PQ, {
            label: `When it is heard`,
            value: e.context,
            options: kQ,
            onChange: (e) => t({ context: e }),
          }),
          (0, Z.jsx)(PQ, {
            label: `How it is said`,
            value: e.emotion,
            options: AQ,
            onChange: (e) => t({ emotion: e }),
          }),
          (0, Z.jsx)(PQ, {
            label: `Kind of line`,
            value: e.category,
            options: MQ,
            onChange: (e) => t({ category: e }),
          }),
          (0, Z.jsx)(NQ, { priority: e.priority, onClick: r }),
        ],
      }),
    ],
  });
}
function IQ({
  character: e,
  lines: t,
  voiceCast: n,
  assignedVoiceId: r,
  onAssignVoice: i,
  onUpdateLine: a,
  onDeleteLine: o,
  onAddLine: s,
}) {
  let [c, l] = (0, X.useState)(!1);
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border/60 bg-secondary/20 overflow-hidden`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `px-3 py-2 bg-secondary/30 space-y-1.5`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Z.jsx)(iQ, {
                label: c ? `Show ${e.name}'s lines` : `Hide ${e.name}'s lines`,
                onClick: () => l(!c),
                children: (0, Z.jsx)(ti, {
                  className: `h-3.5 w-3.5 transition-transform ${c ? `-rotate-90` : ``}`,
                }),
              }),
              (0, Z.jsx)(`span`, {
                className: `text-sm font-medium text-foreground/80 flex-1 min-w-0 truncate`,
                title: e.name,
                children: e.name,
              }),
              (0, Z.jsxs)(`span`, {
                className: `text-[10px] text-muted-foreground/50 shrink-0`,
                children: [t.length, ` line`, t.length === 1 ? `` : `s`],
              }),
            ],
          }),
          (0, Z.jsxs)(`select`, {
            value: r || ``,
            onChange: (t) => i(e.id, t.target.value),
            title: `Voice for ${e.name}`,
            "aria-label": `Voice for ${e.name}`,
            className: `w-full h-10 bg-card border border-border rounded px-2 text-xs text-foreground/70 focus:outline-none focus:border-primary/40`,
            children: [
              (0, Z.jsx)(`option`, { value: ``, children: `Pick a voice...` }),
              n.map((e) =>
                (0, Z.jsxs)(
                  `option`,
                  {
                    value: e.id,
                    children: [e.name, _Q(e) ? `` : ` (needs a voice)`],
                  },
                  e.id,
                ),
              ),
            ],
          }),
        ],
      }),
      !c &&
        (0, Z.jsxs)(`div`, {
          className: `p-2 space-y-1.5`,
          children: [
            t.length === 0
              ? (0, Z.jsx)(`div`, {
                  className: `py-4 text-center text-xs text-muted-foreground/40`,
                  children: `No lines for this character yet.`,
                })
              : t.map((e) =>
                  (0, Z.jsx)(
                    FQ,
                    {
                      line: e,
                      onUpdate: (t) => a(e.id, t),
                      onDelete: () => o(e.id),
                    },
                    e.id,
                  ),
                ),
            (0, Z.jsxs)(`button`, {
              onClick: () => s(e.id),
              className: `flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors px-2 min-h-[40px] rounded hover:bg-primary/5 w-full`,
              children: [
                (0, Z.jsx)(ni, { className: `h-3 w-3` }),
                `Add a line`,
              ],
            }),
          ],
        }),
    ],
  });
}
