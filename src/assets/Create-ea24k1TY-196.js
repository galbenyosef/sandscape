// Create-ea24k1TY 196 — classname
// Lines 66146-66402 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var t$ = [Ao, Rt, Lo, Be],
  n$ = hQ.map((e, t) => ({ ...e, icon: t$[t] })),
  r$ = 348;
function i$({
  node: e,
  executionState: t,
  isCodingAgentRunning: n,
  onChatAbout: r,
  onExecute: i,
  assets: a,
  sessionDir: o,
  gameDesignData: s,
  onUpdateDesignData: c,
  onOpenEditorTab: l,
  generatingAssetNames: u,
}) {
  let [d, f] = (0, X.useState)(0),
    p = (0, X.useRef)(null),
    [m, h] = (0, X.useState)(!1);
  (0, X.useEffect)(() => {
    let e = p.current;
    if (!e) return;
    let t = new ResizeObserver(() => {
      h(e.clientWidth > 0 && e.clientWidth < r$);
    });
    return (t.observe(e), () => t.disconnect());
  }, []);
  let g = o?.split(`/`).pop() || o || ``,
    _ = s?.voice_cast || [],
    v = s?.voiceover_script ?? null,
    y = (0, X.useMemo)(
      () => [
        _.length > 0,
        v !== null && v.lines.length > 0,
        v !== null &&
          v.lines.some((e) => e.status === `recorded` || e.status === `final`),
        v !== null &&
          v.lines.length > 0 &&
          v.lines.every((e) => e.status === `final`),
      ],
      [_, v],
    ),
    b = (0, X.useMemo)(() => {
      let e = y.filter(Boolean).length;
      return Math.round((e / n$.length) * 100);
    }, [y]),
    x = (0, X.useRef)(),
    S = (0, X.useCallback)(
      async (e, t) => {
        if (!g) throw Error(`No session to save voices to.`);
        let n = await An(),
          r = {};
        (e !== void 0 && (r.voice_cast = e),
          t !== void 0 && (r.voiceover_script = t));
        let i = await fetch(
          `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(g)}/voices/data`,
          { method: `PUT`, headers: n, body: JSON.stringify(r) },
        );
        if (!i.ok) throw Error(`Could not save the voices (${i.status}).`);
      },
      [g],
    ),
    C = (0, X.useCallback)(
      (e, t) => {
        (clearTimeout(x.current),
          (x.current = setTimeout(() => {
            S(e, t).catch((e) => {
              console.error(`Failed to persist voice data:`, e);
            });
          }, 800)));
      },
      [S],
    ),
    w = (0, X.useCallback)(async () => {
      (clearTimeout(x.current), await S(_, v));
    }, [S, _, v]);
  (0, X.useEffect)(() => () => clearTimeout(x.current), []);
  let T = (0, X.useCallback)(
      (e) => {
        (c?.({ voice_cast: e }), C(e, void 0));
      },
      [c, C],
    ),
    E = (0, X.useCallback)(
      (e) => {
        (c?.({ voiceover_script: e }), C(void 0, e));
      },
      [c, C],
    ),
    D = (0, X.useCallback)(
      (e, t, n) => {
        i?.(e, t || ``, n);
      },
      [i],
    ),
    O = (0, X.useCallback)(() => f(1), []),
    [k, A] = (0, X.useState)(null),
    j = (0, X.useCallback)((e) => {
      (e && A((t) => ({ lineId: e, seq: (t?.seq ?? 0) + 1 })), f(2));
    }, []);
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full w-0 min-w-full`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `px-4 pt-4 pb-2`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-1`,
            children: [
              (0, Z.jsx)(Ao, { className: `h-4 w-4 text-primary` }),
              (0, Z.jsx)(`h2`, {
                className: `text-sm font-semibold text-foreground`,
                children: `Voice Production`,
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-xs text-muted-foreground/60`,
            children: n$[d].blurb,
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `px-4 pt-1 pb-3`,
        children: (0, Z.jsx)(`div`, {
          ref: p,
          role: `tablist`,
          "aria-label": `Voice production steps`,
          className: `flex gap-1 p-1 bg-secondary/30 rounded-lg`,
          children: n$.map((e, t) => {
            let n = e.icon,
              r = d === t,
              i = y[t],
              a = r || !m;
            return (0, Z.jsxs)(
              `button`,
              {
                role: `tab`,
                "data-testid": `voice-step-${t}`,
                onClick: () => f(t),
                title: `Step ${t + 1} of ${n$.length}: ${e.label}`,
                "aria-label": `Step ${t + 1} of ${n$.length}: ${e.label}`,
                "aria-selected": r,
                "aria-current": r ? `step` : void 0,
                className: `
                  min-w-0 min-h-[40px] flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-md
                  text-xs font-medium transition-all duration-150
                  ${a ? `flex-1` : `flex-none w-10`}
                  ${r ? `bg-card text-foreground shadow-sm` : `text-muted-foreground/60 hover:text-muted-foreground hover:bg-card/50`}
                `,
                children: [
                  (0, Z.jsx)(n, { className: `h-3.5 w-3.5 shrink-0` }),
                  a &&
                    (0, Z.jsx)(`span`, {
                      className: `truncate`,
                      children: e.label,
                    }),
                  (0, Z.jsx)(`span`, {
                    className: `
                    w-1.5 h-1.5 rounded-full shrink-0
                    ${i ? `bg-emerald-400` : `bg-muted-foreground/20`}
                  `,
                  }),
                ],
              },
              e.label,
            );
          }),
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `min-w-0 flex-1 overflow-y-auto scrollbar-themed ${d === 0 ? `` : `hidden`}`,
        children: (0, Z.jsx)(OQ, {
          sessionId: g,
          sessionDir: o,
          voiceCast: _,
          onUpdateVoiceCast: T,
          executionState: t,
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `min-w-0 flex-1 overflow-y-auto scrollbar-themed ${d === 1 ? `` : `hidden`}`,
        children: (0, Z.jsx)(LQ, {
          sessionId: g,
          voiceCast: _,
          voiceoverScript: v,
          onExecute: D,
          onUpdateScript: E,
          executionState: t,
          nodeId: e.id,
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `min-w-0 flex-1 overflow-y-auto scrollbar-themed ${d === 2 ? `` : `hidden`}`,
        children: (0, Z.jsx)(qQ, {
          sessionId: g,
          sessionDir: o,
          voiceCast: _,
          voiceoverScript: v,
          onUpdateScript: E,
          onGoToScript: O,
          focusLine: k,
          executionState: t,
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `min-w-0 flex-1 overflow-y-auto scrollbar-themed ${d === 3 ? `` : `hidden`}`,
        children: (0, Z.jsx)(e$, {
          sessionId: g,
          voiceCast: _,
          voiceoverScript: v,
          onGoToRecording: j,
          onGoToScript: O,
          onLock: w,
          executionState: t,
        }),
      }),
      (0, Z.jsxs)(`div`, {
        className: `px-4 py-3 border-t border-border space-y-3`,
        children: [
          (0, Z.jsxs)(`button`, {
            onClick: () => r(e.id),
            className: `w-full min-h-[40px] flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground/80 transition-colors`,
            children: [
              (0, Z.jsx)(si, { className: `h-4 w-4` }),
              `Discuss the voices`,
            ],
          }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between mb-1.5`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                    children: `Progress`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[10px] text-muted-foreground/50`,
                    children: [b, `%`],
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, {
                className: `h-1 bg-secondary rounded-full overflow-hidden`,
                children: (0, Z.jsx)(`div`, {
                  className: `h-full bg-primary rounded-full transition-all duration-500`,
                  style: { width: `${b}%` },
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
