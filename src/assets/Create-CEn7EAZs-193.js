// Create-CEn7EAZs 193 — classname
// Lines 64806-65108 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function $Q({
  sessionId: e,
  voiceCast: t,
  voiceoverScript: n,
  onExecute: r,
  onUpdateScript: i,
  executionState: a,
  nodeId: o,
}) {
  let s = a?.status === `running` || a?.status === `pending`,
    c = za(Ua(o)?.id ?? null, e, { phase: `cast` }),
    l = (0, X.useMemo)(() => {
      if (!n) return new Map();
      let e = new Map();
      for (let t of n.characters) e.set(t.id, []);
      for (let t of n.lines) {
        let n = e.get(t.character_id);
        n ? n.push(t) : e.set(t.character_id, [t]);
      }
      return e;
    }, [n]),
    u = (0, X.useMemo)(() => {
      if (!n) return new Map();
      let e = new Map();
      for (let t of n.lines)
        t.assigned_voice_id &&
          !e.has(t.character_id) &&
          e.set(t.character_id, t.assigned_voice_id);
      return e;
    }, [n]),
    d = n?.lines.length ?? 0,
    f = n?.characters.length ?? 0,
    p = u.size,
    m = f > 0 && p === f,
    h = (0, X.useCallback)(() => {
      r(o, ``, { params: { phase: `cast` } });
    }, [r, o]),
    g = (0, X.useCallback)(
      (e, t) => {
        if (!n) return;
        let r = n.lines.map((n) =>
          n.character_id === e ? { ...n, assigned_voice_id: t || void 0 } : n,
        );
        i({ ...n, lines: r });
      },
      [n, i],
    ),
    _ = (0, X.useCallback)(
      (e, t) => {
        if (!n) return;
        let r = n.lines.map((n) => (n.id === e ? { ...n, ...t } : n));
        i({ ...n, lines: r });
      },
      [n, i],
    ),
    v = (0, X.useCallback)(
      (e) => {
        if (!n) return;
        let t = n.lines.filter((t) => t.id !== e);
        i({ ...n, lines: t });
      },
      [n, i],
    ),
    y = (0, X.useCallback)(
      (e) => {
        if (!n) return;
        let t = n.lines.find(
            (t) => t.character_id === e && t.assigned_voice_id,
          )?.assigned_voice_id,
          r = {
            id: `line_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            character_id: e,
            line_text: ``,
            context: `gameplay`,
            emotion: `neutral`,
            category: `dialogue`,
            priority: 2,
            assigned_voice_id: t,
            status: `pending`,
          };
        i({ ...n, lines: [...n.lines, r] });
      },
      [n, i],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-5`,
    children: [
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(zt, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `The Script`,
              }),
            ],
          }),
          n
            ? (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex-1 text-xs text-muted-foreground/60`,
                    children: [
                      f,
                      ` character`,
                      f === 1 ? `` : `s`,
                      `, `,
                      d,
                      ` line`,
                      d === 1 ? `` : `s`,
                      `.`,
                    ],
                  }),
                  (0, Z.jsx)($t, {
                    onClick: h,
                    className: `h-10 text-xs`,
                    disabled: s,
                    cost: c,
                    label: `Rewrite`,
                    icon: (0, Z.jsx)(ln, { className: `h-3.5 w-3.5` }),
                    isLoading: s,
                    loadingText: `Rewriting...`,
                    tooltip: `Write a fresh script (this replaces the current lines)`,
                    checkBalance: !0,
                    variant: `outline`,
                    size: `sm`,
                  }),
                ],
              })
            : (0, Z.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, Z.jsx)(`p`, {
                    className: `text-xs text-muted-foreground/60`,
                    children: `Write the script from your game concept: who speaks, and the lines they say. You can edit every line afterwards.`,
                  }),
                  (0, Z.jsx)($t, {
                    onClick: h,
                    className: `w-full`,
                    disabled: s,
                    cost: c,
                    label: `Write the script`,
                    icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
                    isLoading: s,
                    loadingText: `Writing the script...`,
                    tooltip: `Write a script from your game concept`,
                    checkBalance: !0,
                  }),
                ],
              }),
        ],
      }),
      n &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`div`, { className: `border-t border-border` }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-3`,
                  children: [
                    (0, Z.jsx)(Er, { className: `h-3.5 w-3.5 text-primary` }),
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                      children: `Lines By Character`,
                    }),
                    t.length === 0 &&
                      (0, Z.jsx)(`span`, {
                        className: `text-[10px] text-amber-400/70 ml-auto`,
                        children: `Add voices in the Cast step first`,
                      }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `space-y-3 max-h-[500px] overflow-y-auto scrollbar-themed pr-1`,
                  children: n.characters.map((e) =>
                    (0, Z.jsx)(
                      QQ,
                      {
                        character: e,
                        lines: l.get(e.id) || [],
                        voiceCast: t,
                        assignedVoiceId: u.get(e.id),
                        onAssignVoice: g,
                        onUpdateLine: _,
                        onDeleteLine: v,
                        onAddLine: y,
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border` }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-3 text-xs text-muted-foreground/50`,
              children: [
                (0, Z.jsxs)(`span`, {
                  children: [d, ` line`, d === 1 ? `` : `s`],
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-muted-foreground/20`,
                  children: `|`,
                }),
                (0, Z.jsxs)(`span`, {
                  children: [f, ` character`, f === 1 ? `` : `s`],
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-muted-foreground/20`,
                  children: `|`,
                }),
                (0, Z.jsxs)(`span`, {
                  children: [p, ` voice`, p === 1 ? `` : `s`, ` picked`],
                }),
                m &&
                  (0, Z.jsxs)(`span`, {
                    className: `ml-auto flex items-center gap-1 text-emerald-400/70`,
                    children: [
                      (0, Z.jsx)(Ve, { className: `h-3.5 w-3.5` }),
                      `Ready to record`,
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
function e$() {
  let e = (0, X.useRef)(null),
    [t, n] = (0, X.useState)(null),
    r = (0, X.useCallback)(
      (r, i) => {
        if (((e.current &&= (e.current.pause(), null)), t === r)) {
          n(null);
          return;
        }
        let a = new Audio(i);
        ((e.current = a),
          n(r),
          a.addEventListener(`ended`, () => {
            (n(null), (e.current = null));
          }),
          a.addEventListener(`error`, () => {
            (n(null), (e.current = null));
          }),
          a.play().catch(() => {
            (n(null), (e.current = null));
          }));
      },
      [t],
    ),
    i = (0, X.useCallback)(() => {
      ((e.current &&= (e.current.pause(), null)), n(null));
    }, []);
  return (
    (0, X.useEffect)(
      () => () => {
        e.current &&= (e.current.pause(), null);
      },
      [],
    ),
    { playingId: t, play: r, stop: i }
  );
}
function t$(e) {
  return e.map((e) => ({
    ...e,
    takes: e.takes ?? [],
    final_take_id: e.final_take_id,
  }));
}
function n$(e) {
  if (e == null) return `--`;
  let t = Math.floor(e / 60),
    n = Math.round(e % 60);
  return t > 0 ? `${t}:${n.toString().padStart(2, `0`)}` : `${n}s`;
}
function r$(e) {
  return `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, `0`)}`;
}
function i$(e, t) {
  if (t.startsWith(`http`) || t.startsWith(`blob:`)) return t;
  let n = t.split(`/`).pop() || t;
  return `${yn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${n}`;
}
function a$({ emotion: e }) {
  return (0, Z.jsx)(`span`, {
    className: `inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-500/15 text-purple-300`,
    children: EQ(e),
  });
}
function o$({ context: e }) {
  return (0, Z.jsx)(`span`, {
    className: `inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500/15 text-blue-300`,
    children: EQ(e),
  });
}
