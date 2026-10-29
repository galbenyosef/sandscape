// Create-CEn7EAZs 197 — classname
// Lines 66470-66928 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function g$({
  sessionId: e,
  voiceCast: t,
  voiceoverScript: n,
  onGoToRecording: r,
  onGoToScript: i,
  onLock: a,
  executionState: o,
}) {
  let s = o?.status === `running` || o?.status === `pending`,
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(!1),
    [f, p] = (0, X.useState)(null),
    [m, h] = (0, X.useState)(!1),
    g = (0, X.useRef)([]),
    _ = (0, X.useRef)(!0),
    v = (0, X.useRef)(null),
    [y, b] = (0, X.useState)(`idle`),
    [x, C] = (0, X.useState)(null),
    w = (0, X.useRef)([]),
    T = (0, X.useRef)(0),
    [E, D] = (0, X.useState)(`all`),
    O = (0, X.useMemo)(() => {
      if (!n) return new Map();
      let e = new Map();
      for (let t of n.characters) e.set(t.id, []);
      for (let t of n.lines) {
        let n = e.get(t.character_id);
        n ? n.push(t) : e.set(t.character_id, [t]);
      }
      return e;
    }, [n]),
    k = (0, X.useMemo)(() => {
      let e = new Map();
      for (let n of t) e.set(n.id, n.name);
      return e;
    }, [t]),
    A = n?.lines.length ?? 0,
    j = (0, X.useMemo)(() => n?.lines.filter((e) => !!u$(e)).length ?? 0, [n]),
    M = A > 0 && j === A,
    N = (0, X.useMemo)(() => (n ? n.lines.filter((e) => !!u$(e)) : []), [n]),
    P = (0, X.useCallback)(() => {
      ((v.current &&= (v.current.pause(), null)),
        (w.current = []),
        (T.current = 0),
        b(`idle`),
        C(null));
    }, []);
  (0, X.useEffect)(
    () => () => {
      ((_.current = !1),
        (v.current &&= (v.current.pause(), null)),
        g.current.forEach(clearTimeout));
    },
    [],
  );
  let F = (0, X.useCallback)((t, n) => {
      let r = u$(t);
      if (!r) return;
      v.current &&= (v.current.pause(), null);
      let i = new Audio(f$(e, r.audio_path));
      ((v.current = i),
        C(t.id),
        b(`playing`),
        i.addEventListener(`ended`, () => {
          (C(null), (v.current = null), n ? n() : b(`idle`));
        }),
        i.addEventListener(`error`, () => {
          (C(null), (v.current = null), n ? n() : b(`idle`));
        }),
        i.play().catch(() => {
          (C(null), (v.current = null), b(`idle`));
        }));
    }, []),
    I = (0, X.useCallback)(
      (e) => {
        if (x === e) {
          P();
          return;
        }
        let t = n?.lines.find((t) => t.id === e);
        t && ((w.current = []), (T.current = 0), F(t));
      },
      [x, n, F, P],
    ),
    L = (0, X.useCallback)(() => {
      T.current += 1;
      let e = w.current,
        t = T.current;
      if (t >= e.length) {
        (b(`idle`), C(null));
        return;
      }
      setTimeout(() => {
        w.current.length !== 0 && F(e[t], L);
      }, 300);
    }, [F]),
    R = (0, X.useCallback)(() => {
      if (y === `playing`) {
        P();
        return;
      }
      let e;
      ((e = E === `all` ? N : N.filter((e) => e.character_id === E)),
        e.length !== 0 && ((w.current = e), (T.current = 0), F(e[0], L)));
    }, [y, E, N, F, L, P]),
    z = (0, X.useCallback)(async () => {
      (P(), l(!0), p(null));
      let e = setTimeout(() => h(!0), 200);
      g.current = [e];
      try {
        (await Promise.all([a?.(), new Promise((e) => setTimeout(e, 800))]),
          _.current && d(!0));
      } catch (e) {
        _.current &&
          (g.current.forEach(clearTimeout),
          h(!1),
          l(!1),
          p(
            e instanceof Error && e.message
              ? e.message
              : `Could not save the voice cast. Please try again.`,
          ));
      }
    }, [P, a]);
  if (!n)
    return (0, Z.jsx)(`div`, {
      className: `p-4`,
      children: (0, Z.jsxs)(`div`, {
        className: `py-8 px-4 text-center border border-dashed border-border/50 rounded-lg`,
        children: [
          (0, Z.jsx)(Tt, {
            className: `h-6 w-6 text-muted-foreground/20 mx-auto mb-2`,
          }),
          (0, Z.jsx)(`p`, {
            className: `text-sm text-muted-foreground/60`,
            children: `Nothing to listen to yet.`,
          }),
          (0, Z.jsx)(`p`, {
            className: `text-xs text-muted-foreground/40 mt-1 mb-4`,
            children: `There is no script for your cast to perform.`,
          }),
          i &&
            (0, Z.jsxs)(S, {
              size: `sm`,
              variant: `outline`,
              onClick: i,
              className: `min-h-[40px] text-xs px-3`,
              children: [
                (0, Z.jsx)(zt, { className: `h-3.5 w-3.5 mr-1.5` }),
                `Go to the script`,
              ],
            }),
        ],
      }),
    });
  let B = n.characters.length;
  if (u)
    return (0, Z.jsx)(`div`, {
      className: `p-4`,
      children: (0, Z.jsxs)(`div`, {
        className: `py-10 text-center rounded-lg border border-border/30 bg-secondary/10`,
        children: [
          (0, Z.jsx)(Ve, {
            className: `h-10 w-10 text-emerald-400/70 mx-auto mb-3`,
          }),
          (0, Z.jsx)(`h3`, {
            className: `text-sm font-medium text-foreground/70 mb-3`,
            children: `Voice Cast Locked`,
          }),
          (0, Z.jsxs)(`div`, {
            className: `space-y-1`,
            children: [
              (0, Z.jsxs)(`p`, {
                className: `text-xs text-muted-foreground/50`,
                children: [B, ` character`, B === 1 ? `` : `s`, ` voiced`],
              }),
              (0, Z.jsxs)(`p`, {
                className: `text-xs text-muted-foreground/50`,
                children: [j, ` line`, j === 1 ? `` : `s`, ` recorded`],
              }),
              (0, Z.jsx)(`p`, {
                className: `text-xs text-emerald-400/50 pt-1`,
                children: `Saved. Voice Drop In is now available.`,
              }),
            ],
          }),
        ],
      }),
    });
  if (j === 0) {
    let e = A === 0;
    return (0, Z.jsx)(`div`, {
      className: `p-4`,
      children: (0, Z.jsxs)(`div`, {
        className: `py-8 px-4 text-center border border-dashed border-border/50 rounded-lg`,
        children: [
          (0, Z.jsx)(Tt, {
            className: `h-6 w-6 text-muted-foreground/20 mx-auto mb-2`,
          }),
          (0, Z.jsx)(`p`, {
            className: `text-sm text-muted-foreground/60`,
            children: `Nothing to listen to yet.`,
          }),
          (0, Z.jsx)(`p`, {
            className: `text-xs text-muted-foreground/40 mt-1 mb-4`,
            children: e
              ? `The script has no lines in it yet.`
              : `None of the ${A} line${A === 1 ? `` : `s`} has a take yet.`,
          }),
          e
            ? i &&
              (0, Z.jsxs)(S, {
                size: `sm`,
                variant: `outline`,
                onClick: i,
                className: `min-h-[40px] text-xs px-3`,
                children: [
                  (0, Z.jsx)(zt, { className: `h-3.5 w-3.5 mr-1.5` }),
                  `Go to the script`,
                ],
              })
            : (0, Z.jsxs)(S, {
                size: `sm`,
                variant: `outline`,
                onClick: () => r(),
                className: `min-h-[40px] text-xs px-3`,
                children: [
                  (0, Z.jsx)(vs, { className: `h-3.5 w-3.5 mr-1.5` }),
                  `Go to recording`,
                ],
              }),
        ],
      }),
    });
  }
  return (0, Z.jsxs)(`div`, {
    className: `relative p-4 space-y-5`,
    children: [
      c &&
        (0, Z.jsxs)(`div`, {
          className: `absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm rounded-lg transition-opacity duration-300`,
          children: [
            (0, Z.jsx)(Zt, { className: `h-8 w-8 text-primary/60 mb-4` }),
            (0, Z.jsx)(`h3`, {
              className: `text-base font-medium text-foreground/80 mb-5`,
              children: `Voice Cast Locked!`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-2 mb-6`,
              children: [
                (0, Z.jsxs)(`p`, {
                  className: `text-sm text-muted-foreground flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(Ve, {
                      className: `h-3.5 w-3.5 text-emerald-400`,
                    }),
                    B,
                    ` character`,
                    B === 1 ? `` : `s`,
                    ` voiced`,
                  ],
                }),
                (0, Z.jsxs)(`p`, {
                  className: `text-sm text-muted-foreground flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(Ve, {
                      className: `h-3.5 w-3.5 text-emerald-400`,
                    }),
                    j,
                    ` line`,
                    j === 1 ? `` : `s`,
                    ` recorded`,
                  ],
                }),
                (0, Z.jsxs)(`p`, {
                  className: `text-sm text-muted-foreground flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(Ve, {
                      className: `h-3.5 w-3.5 text-emerald-400`,
                    }),
                    `Voice Drop In is now available`,
                  ],
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: `transform transition-all duration-500 ${m ? `scale-100 opacity-100` : `scale-0 opacity-0`}`,
              children: (0, Z.jsx)(Ve, {
                className: `h-16 w-16 text-green-400`,
              }),
            }),
          ],
        }),
      (0, Z.jsx)(p$, { completed: j, total: A }),
      (0, Z.jsx)(`div`, { className: `border-t border-border` }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(Er, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Lines by Character`,
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `space-y-3 max-h-[500px] overflow-y-auto scrollbar-themed pr-1`,
            children: n.characters.map((e) => {
              let t = e.assigned_voice_id,
                n = t ? k.get(t) : void 0;
              return (0, Z.jsx)(
                h$,
                {
                  character: e,
                  lines: O.get(e.id) || [],
                  voiceName: n,
                  playingLineId: x,
                  onPlayLine: I,
                  onReRecord: r,
                },
                e.id,
              );
            }),
          }),
        ],
      }),
      (0, Z.jsx)(`div`, { className: `border-t border-border` }),
      (0, Z.jsxs)(`div`, {
        className: `sticky bottom-0 bg-background/80 backdrop-blur-sm -mx-4 px-4 py-3 border-t border-border/50`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(Tt, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Playback`,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Z.jsx)(S, {
                size: `sm`,
                variant: y === `playing` ? `destructive` : `default`,
                onClick: R,
                disabled: N.length === 0,
                className: `h-10 text-xs px-3`,
                children:
                  y === `playing`
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(Fs, { className: `h-3 w-3 mr-1.5` }),
                          `Stop`,
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(cn, { className: `h-3 w-3 mr-1.5` }),
                          `Play All`,
                        ],
                      }),
              }),
              (0, Z.jsxs)(`select`, {
                value: E,
                onChange: (e) => D(e.target.value),
                "aria-label": `Which character to play`,
                className: `h-10 bg-card border border-border rounded-lg px-2 text-xs text-foreground/70 focus:outline-none focus:border-primary/40 flex-1 max-w-[180px]`,
                children: [
                  (0, Z.jsx)(`option`, { value: `all`, children: `Everyone` }),
                  n.characters.map((e) =>
                    (0, Z.jsx)(
                      `option`,
                      { value: e.id, children: e.name },
                      e.id,
                    ),
                  ),
                ],
              }),
              N.length === 0 &&
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] text-muted-foreground/40 ml-1`,
                  children: `Nothing recorded to play`,
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, { className: `border-t border-border` }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(tn, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Finalize`,
              }),
            ],
          }),
          !M &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-xs text-amber-400/70 mb-3 p-2.5 rounded-lg border border-amber-500/20 bg-amber-500/5`,
              children: [
                (0, Z.jsx)(pn, { className: `h-3.5 w-3.5 shrink-0` }),
                (0, Z.jsxs)(`span`, {
                  children: [
                    A - j,
                    ` line`,
                    A - j === 1 ? `` : `s`,
                    ` still`,
                    A - j === 1 ? ` needs` : ` need`,
                    ` a take before you can lock.`,
                  ],
                }),
              ],
            }),
          (0, Z.jsx)($t, {
            onClick: z,
            className: `w-full`,
            disabled: !M || s || c,
            cost: 0,
            label: `Lock Voice Cast`,
            icon: (0, Z.jsx)(tn, { className: `h-4 w-4` }),
            isLoading: s,
            loadingText: `Locking voice cast...`,
            tooltip: M
              ? `Save the cast and every chosen take`
              : `Every line needs a take first`,
            checkBalance: !1,
          }),
          f &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-xs text-red-400 mt-2 p-2.5 rounded-lg border border-red-500/20 bg-red-500/5`,
              children: [
                (0, Z.jsx)(pn, { className: `h-3.5 w-3.5 shrink-0` }),
                (0, Z.jsx)(`span`, { children: f }),
              ],
            }),
          M &&
            !c &&
            !f &&
            (0, Z.jsxs)(`p`, {
              className: `text-xs text-emerald-400/60 text-center mt-2 flex items-center justify-center gap-1.5`,
              children: [
                (0, Z.jsx)(Ve, { className: `h-3.5 w-3.5` }),
                `Every line has a take. Ready to lock.`,
              ],
            }),
        ],
      }),
    ],
  });
}
