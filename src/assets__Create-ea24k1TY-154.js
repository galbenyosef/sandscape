// assets__Create-ea24k1TY 154 — classname
// Lines 51354-51667 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function YV({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  sessionDir: r,
  gameDesignData: i,
  onOpenEditorTab: a,
  codingFeed: o,
  nodeProgress: s,
  onLocalCodingActivity: c,
}) {
  let l = r ? r.split(`/`).pop() || r : ``,
    u = e.state === `complete` || e.state === `outdated`,
    d = e.state === `in-progress`,
    f = e.state === `available`,
    p = un(e.id),
    m = tn(p),
    h = !!p?.locked,
    g = (0, X.useMemo)(() => {
      let e = i?.animation_plan;
      return e?.characters
        ? e.characters.map((e) => {
            let t = e.animations || [],
              n = t.length,
              r = t.filter((e) => e.status === `generated`).length,
              i = e.state_machine;
            return {
              asset_name: e.asset_name,
              asset_id: e.asset_id || e.asset_name,
              animationCount: n,
              generatedCount: r,
              hasStateMachine: !!i,
              stateCount: i?.states?.length || 0,
              transitionCount: i?.transitions?.length || 0,
              isReady: r > 0,
            };
          })
        : [];
    }, [i]),
    _ = g.length,
    v = g.filter((e) => e.isReady).length,
    y = g.reduce((e, t) => e + t.generatedCount, 0);
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, Z.jsxs)(`h4`, {
            className: `text-sm font-semibold text-gray-300 flex items-center gap-2`,
            children: [
              (0, Z.jsx)(bt, { className: `h-4 w-4 text-primary` }),
              `Animation Integration`,
            ],
          }),
          _ > 0 &&
            (0, Z.jsxs)(`span`, {
              className: `text-xs text-gray-500`,
              children: [v, `/`, _, ` ready`],
            }),
        ],
      }),
      (0, Z.jsx)(`p`, {
        className: `text-xs text-gray-500`,
        children: `Integrates animations into game code: loads GLB files, sets up AnimationMixer, and builds the animation state machine for each character.`,
      }),
      g.length === 0 &&
        !d &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(bt, { className: `h-8 w-8 text-gray-600 mx-auto mb-2` }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-gray-500`,
              children: `No characters with animations yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-gray-600 mt-1`,
              children: `Complete Animation Generation first.`,
            }),
          ],
        }),
      g.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `space-y-2`,
          children: g.map((e) =>
            (0, Z.jsxs)(
              `div`,
              {
                className: `p-3 rounded-lg border ${e.isReady ? `border-green-500/30 bg-green-500/5` : `border-gray-600/30 bg-gray-800/20`}`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2 mb-2`,
                    children: [
                      e.isReady
                        ? (0, Z.jsx)(Be, {
                            className: `w-3.5 h-3.5 text-green-400 shrink-0`,
                          })
                        : (0, Z.jsx)(U, {
                            className: `w-3.5 h-3.5 text-gray-500 shrink-0`,
                          }),
                      (0, Z.jsx)(`span`, {
                        className: `text-sm text-gray-200 font-medium truncate`,
                        children: e.asset_name?.replace(/_/g, ` `),
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `grid grid-cols-2 gap-2 text-[10px]`,
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [
                          (0, Z.jsx)(Qt, {
                            className: `w-3 h-3 text-gray-500`,
                          }),
                          (0, Z.jsxs)(`span`, {
                            className: `text-gray-400`,
                            children: [
                              e.generatedCount,
                              `/`,
                              e.animationCount,
                              ` animations`,
                            ],
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [
                          (0, Z.jsx)(so, {
                            className: `w-3 h-3 text-gray-500`,
                          }),
                          (0, Z.jsx)(`span`, {
                            className: e.hasStateMachine
                              ? `text-green-400`
                              : `text-yellow-400`,
                            children: e.hasStateMachine
                              ? `${e.stateCount} states, ${e.transitionCount} transitions`
                              : `Using blueprint defaults`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.asset_id,
            ),
          ),
        }),
      _ > 0 &&
        (0, Z.jsxs)(`div`, {
          className: `p-2 bg-gray-800/30 rounded-lg`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 mb-1`,
              children: [
                (0, Z.jsx)(ite, { className: `w-3.5 h-3.5 text-gray-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-xs text-gray-300 font-medium`,
                  children: `Integration Summary`,
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `text-[10px] text-gray-500 space-y-0.5`,
              children: [
                (0, Z.jsxs)(`div`, {
                  children: [
                    y,
                    ` animations across `,
                    _,
                    ` character`,
                    _ === 1 ? `` : `s`,
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  children: `Will generate: AnimationMixer setup, state machine logic, transition blending`,
                }),
              ],
            }),
          ],
        }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          h && f && v > 0 && (0, Z.jsx)(rl, { compact: !0 }),
          f &&
            v > 0 &&
            (0, Z.jsx)(an, {
              onClick: () => {
                n?.(e.id, `Integrate animations into the game`);
              },
              className: `w-full`,
              disabled: t || h,
              cost: m,
              label: `Integrate Animations`,
              icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
              isLoading: d,
              loadingText: `Integrating animations...`,
              tooltip: `Generate animation state machine code for all characters`,
              checkBalance: !0,
            }),
          d &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, Z.jsx)(Ic, {
                  sessionId: l,
                  isRunning: d,
                  onLocalActivity: c,
                }),
                (0, Z.jsx)(Zc, { feed: o, progress: s, running: d }),
              ],
            }),
          u &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-2 bg-green-500/10 border border-green-500/20 rounded-lg`,
              children: [
                (0, Z.jsx)(Be, { className: `h-4 w-4 text-green-400` }),
                (0, Z.jsx)(`span`, {
                  className: `text-xs text-green-400`,
                  children: `Animations integrated into game`,
                }),
              ],
            }),
        ],
      }),
      (0, Z.jsx)(op, {
        tabId: `character`,
        label: `Open in Animation Editor`,
        onOpenEditorTab: a,
      }),
    ],
  });
}
var XV = [
  {
    key: `instrumentation`,
    saveKey: `instrumentation`,
    label: `Instrumentation`,
    icon: jo,
    placeholder: `e.g., Analog synths and tape-saturated drums...`,
  },
  {
    key: `tone`,
    saveKey: `tone`,
    label: `Tone`,
    icon: tte,
    placeholder: `e.g., Playful and bouncy; oppressive, industrial...`,
  },
  {
    key: `tempoPreference`,
    saveKey: `tempo_preference`,
    label: `Tempo`,
    icon: ts,
    placeholder: `e.g., Slow ambient ~70 BPM for tension, driving 140+ BPM in combat...`,
  },
  {
    key: `reverbLevel`,
    saveKey: `reverb_level`,
    label: `Reverb & Space`,
    icon: os,
    placeholder: `e.g., Dry and close; cavernous, long tails...`,
  },
  {
    key: `dynamicRange`,
    saveKey: `dynamic_range`,
    label: `Dynamic Range`,
    icon: wo,
    placeholder: `e.g., Compressed and punchy; wide, whisper-to-roar...`,
  },
];
function ZV({ value: e, onCommit: t, placeholder: n, disabled: r }) {
  let [i, a] = (0, X.useState)(!1),
    [o, s] = (0, X.useState)(e);
  return (
    (0, X.useEffect)(() => {
      s(e);
    }, [e]),
    i
      ? (0, Z.jsx)(`textarea`, {
          autoFocus: !0,
          value: o,
          onChange: (e) => s(e.target.value),
          onBlur: () => {
            (a(!1), o !== e && t(o));
          },
          onKeyDown: (t) => {
            t.key === `Escape` && (s(e), a(!1));
          },
          placeholder: n,
          rows: 2,
          maxLength: 500,
          className: `w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-sm text-foreground/80 resize-none scrollbar-themed focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
        })
      : (0, Z.jsxs)(`div`, {
          onClick: () => {
            r || a(!0);
          },
          className: `group cursor-pointer rounded-md px-1 -mx-1 hover:bg-secondary/40 transition-colors`,
          children: [
            (0, Z.jsx)(`p`, {
              className: `text-sm leading-relaxed ${e ? `text-muted-foreground` : `text-muted-foreground/40 italic`}`,
              children: e || n,
            }),
            (0, Z.jsx)(di, {
              className: `h-3 w-3 mt-1 opacity-0 group-hover:opacity-40 transition-opacity text-muted-foreground`,
            }),
          ],
        })
  );
}
