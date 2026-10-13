// assets__Create-ea24k1TY 218 — classname
// Lines 73948-74697 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var i0 = {
    high: `bg-red-500/20 text-red-400 border-red-500/30`,
    medium: `bg-yellow-500/20 text-yellow-400 border-yellow-500/30`,
    low: `bg-blue-500/20 text-blue-400 border-blue-500/30`,
  },
  lue = {
    bug: (0, Z.jsx)(lo, { className: `h-4 w-4` }),
    feature_request: (0, Z.jsx)(k, { className: `h-4 w-4` }),
  },
  uue = ({ sessionId: e, onClose: t }) => {
    let [n, r] = (0, X.useState)([]),
      [i, a] = (0, X.useState)(!0),
      [o, s] = (0, X.useState)(null),
      [c, l] = (0, X.useState)(null),
      { toast: d } = u(),
      f = !!on(`debug_loop`)?.locked;
    (0, X.useEffect)(() => {
      (async () => {
        try {
          let t = await r0.getTestingResults(e);
          t.success && r(t.issues);
        } catch (e) {
          console.error(`Failed to fetch testing results:`, e);
        } finally {
          a(!1);
        }
      })();
    }, [e]);
    let p = async (t, n) => {
        l(n);
        try {
          let n = [
              `## Issue: ${t.title}`,
              `**Category:** ${t.category} | **Priority:** ${t.priority}`,
              ``,
              `### Description`,
              t.description,
              ``,
              t.reproduction_steps?.length
                ? `### Reproduction Steps\n${t.reproduction_steps.map(
                    (e, t) => `${t + 1}. ${e}`,
                  ).join(`
`)}`
                : ``,
              t.evidence?.transcript_excerpt
                ? `### Player Feedback (Transcript)\n"${t.evidence.transcript_excerpt}"`
                : ``,
              t.evidence?.related_events?.length
                ? `### Related Events\n${t.evidence.related_events.map(
                    (e) => `- ${e}`,
                  ).join(`
`)}`
                : ``,
            ].filter(Boolean).join(`
`),
            r = await Un.invoke(`debug_loop`, e, {
              user_prompt: `Fix: ${t.title}\n\n${t.description}`,
              test_report: n,
            });
          if (!r.success) {
            (console.error(
              `[TestingResults] debug_loop refused:`,
              r.error_code,
              r.error,
            ),
              r.error_code === `INSUFFICIENT_BALANCE`
                ? dn(
                    d,
                    `You need ${r.required_balance} Sandcoins but have ${r.current_balance}.`,
                  )
                : r.error_code === `CODING_ACCESS_REQUIRED`
                  ? d({
                      title: `Coding access required`,
                      description:
                        r.error ||
                        `Coding through Sandscape isn't enabled on your account yet.`,
                      variant: `destructive`,
                    })
                  : d({
                      title: `Could not start the fix`,
                      description:
                        r.error || `The server refused to start this fix.`,
                      variant: `destructive`,
                    }));
            return;
          }
          d({
            title: `Sent to debug`,
            description: `Fixing "${t.title}". Progress appears in the chat and task list.`,
          });
        } catch (e) {
          (console.error(`Failed to send to debug:`, e),
            d({
              title: `Could not start the fix`,
              description:
                e instanceof Error
                  ? e.message
                  : `Unexpected error sending this issue to debug.`,
              variant: `destructive`,
            }));
        } finally {
          l(null);
        }
      },
      m = (e) => {
        s(o === e ? null : e);
      },
      h = n.filter((e) => e.category === `bug`).length,
      g = n.filter((e) => e.category === `feature_request`).length;
    return (0, Z.jsx)(`div`, {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm`,
      children: (0, Z.jsxs)(`div`, {
        className: `w-full max-w-2xl max-h-[80vh] bg-card border border-white/10 rounded-xl shadow-2xl flex flex-col`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between p-4 border-b border-white/10`,
            children: [
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`h2`, {
                    className: `text-lg font-semibold text-white`,
                    children: `Testing Results`,
                  }),
                  (0, Z.jsxs)(`p`, {
                    className: `text-sm text-gray-400`,
                    children: [
                      h,
                      ` bug`,
                      h === 1 ? `` : `s`,
                      `, `,
                      g,
                      ` feature request`,
                      g === 1 ? `` : `s`,
                    ],
                  }),
                ],
              }),
              (0, Z.jsx)(x, {
                variant: `ghost`,
                size: `sm`,
                onClick: t,
                children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex-1 overflow-y-auto p-4 space-y-3`,
            children: [
              f && !i && n.length > 0 && (0, Z.jsx)(rl, { compact: !0 }),
              i
                ? (0, Z.jsx)(`div`, {
                    className: `flex items-center justify-center py-12 text-gray-400`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `text-center`,
                      children: [
                        (0, Z.jsxs)(`div`, {
                          className: `inline-flex items-center gap-2 mb-2`,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                            }),
                            (0, Z.jsx)(`div`, {
                              className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                              style: { animationDelay: `0.1s` },
                            }),
                            (0, Z.jsx)(`div`, {
                              className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                              style: { animationDelay: `0.2s` },
                            }),
                          ],
                        }),
                        (0, Z.jsx)(`p`, { children: `Loading results...` }),
                      ],
                    }),
                  })
                : n.length === 0
                  ? (0, Z.jsxs)(`div`, {
                      className: `text-center py-12 text-gray-400`,
                      children: [
                        (0, Z.jsx)(`p`, {
                          className: `text-lg`,
                          children: `No issues found`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm mt-1`,
                          children: `The testing session didn't identify any bugs or feature requests.`,
                        }),
                      ],
                    })
                  : n.map((e, t) =>
                      (0, Z.jsxs)(
                        `div`,
                        {
                          className: `border border-white/10 rounded-lg overflow-hidden`,
                          children: [
                            (0, Z.jsxs)(`button`, {
                              className: `w-full flex items-center gap-3 p-3 text-left hover:bg-white/5 transition-colors`,
                              onClick: () => m(t),
                              children: [
                                o === t
                                  ? (0, Z.jsx)(ti, {
                                      className: `h-4 w-4 text-gray-400 flex-shrink-0`,
                                    })
                                  : (0, Z.jsx)(De, {
                                      className: `h-4 w-4 text-gray-400 flex-shrink-0`,
                                    }),
                                (0, Z.jsx)(`span`, {
                                  className: `flex-shrink-0 text-gray-400`,
                                  children:
                                    lue[e.category] ||
                                    (0, Z.jsx)(lo, { className: `h-4 w-4` }),
                                }),
                                (0, Z.jsx)(`span`, {
                                  className: `flex-1 text-sm text-white truncate`,
                                  children: e.title,
                                }),
                                (0, Z.jsx)(`span`, {
                                  className: `text-xs px-2 py-0.5 rounded border ${i0[e.priority] || i0.low}`,
                                  children: e.priority,
                                }),
                              ],
                            }),
                            o === t &&
                              (0, Z.jsxs)(`div`, {
                                className: `px-4 pb-4 space-y-3 border-t border-white/5`,
                                children: [
                                  (0, Z.jsx)(`p`, {
                                    className: `text-sm text-gray-300 mt-3`,
                                    children: e.description,
                                  }),
                                  e.reproduction_steps &&
                                    e.reproduction_steps.length > 0 &&
                                    (0, Z.jsxs)(`div`, {
                                      children: [
                                        (0, Z.jsx)(`h4`, {
                                          className: `text-xs font-semibold text-gray-400 uppercase mb-1`,
                                          children: `Steps to Reproduce`,
                                        }),
                                        (0, Z.jsx)(`ol`, {
                                          className: `text-sm text-gray-300 list-decimal list-inside space-y-0.5`,
                                          children: e.reproduction_steps.map(
                                            (e, t) =>
                                              (0, Z.jsx)(
                                                `li`,
                                                { children: e },
                                                t,
                                              ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  e.evidence &&
                                    (0, Z.jsxs)(`div`, {
                                      className: `space-y-2`,
                                      children: [
                                        (0, Z.jsx)(`h4`, {
                                          className: `text-xs font-semibold text-gray-400 uppercase`,
                                          children: `Evidence`,
                                        }),
                                        e.evidence.transcript_excerpt &&
                                          (0, Z.jsxs)(`div`, {
                                            className: `flex items-start gap-2 text-sm`,
                                            children: [
                                              (0, Z.jsx)(si, {
                                                className: `h-3.5 w-3.5 text-gray-500 mt-0.5 flex-shrink-0`,
                                              }),
                                              (0, Z.jsxs)(`span`, {
                                                className: `text-gray-300 italic`,
                                                children: [
                                                  `"`,
                                                  e.evidence.transcript_excerpt,
                                                  `"`,
                                                ],
                                              }),
                                            ],
                                          }),
                                        e.evidence.related_events &&
                                          e.evidence.related_events.length >
                                            0 &&
                                          (0, Z.jsxs)(`div`, {
                                            className: `flex items-start gap-2 text-sm`,
                                            children: [
                                              (0, Z.jsx)(wn, {
                                                className: `h-3.5 w-3.5 text-gray-500 mt-0.5 flex-shrink-0`,
                                              }),
                                              (0, Z.jsx)(`div`, {
                                                className: `text-gray-400 font-mono text-xs space-y-0.5`,
                                                children:
                                                  e.evidence.related_events.map(
                                                    (e, t) =>
                                                      (0, Z.jsx)(
                                                        `div`,
                                                        { children: e },
                                                        t,
                                                      ),
                                                  ),
                                              }),
                                            ],
                                          }),
                                        e.evidence.screenshot &&
                                          (0, Z.jsxs)(`div`, {
                                            className: `flex items-center gap-2 text-sm text-gray-400`,
                                            children: [
                                              (0, Z.jsx)(pn, {
                                                className: `h-3.5 w-3.5 flex-shrink-0`,
                                              }),
                                              (0, Z.jsx)(`span`, {
                                                children: e.evidence.screenshot,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  (0, Z.jsxs)(x, {
                                    variant: `outline`,
                                    size: `sm`,
                                    className: `mt-2`,
                                    disabled: c === t || f,
                                    title: f
                                      ? `Coding through Sandscape isn't enabled on your account yet.`
                                      : void 0,
                                    onClick: () => p(e, t),
                                    children: [
                                      (0, Z.jsx)(bn, {
                                        className: `h-3.5 w-3.5 mr-1.5`,
                                      }),
                                      c === t
                                        ? `Sending...`
                                        : `Send to Debug Loop`,
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        },
                        t,
                      ),
                    ),
            ],
          }),
        ],
      }),
    });
  },
  due = (e, t) =>
    e ? (t == null ? e : `${e}${e.includes(`?`) ? `&` : `?`}v=${t}`) : ``,
  a0 = (e) => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, `0`)}`,
  o0 = ({
    containerRef: e,
    gameUrl: t,
    sessionDir: n,
    onRefresh: r,
    previewScene: i,
    analysisReady: a = !1,
    isActive: o = !1,
  }) => {
    let [s, c] = (0, X.useState)(!1),
      [l, u] = (0, X.useState)(``),
      d = (0, X.useRef)(null),
      [f, p] = (0, X.useState)(!0),
      [m, h] = (0, X.useState)(!1),
      [g, _] = (0, X.useState)(0),
      [v, y] = (0, X.useState)(!0),
      [b, S] = (0, X.useState)(!1),
      C = (0, X.useRef)(null),
      w = (0, X.useRef)(null),
      T = (0, X.useRef)(null),
      E = (0, X.useRef)(0),
      D = n.split(`/`).pop() || n,
      {
        isRecording: O,
        micAvailable: k,
        segments: A,
        interimText: j,
        errorMessage: M,
        startRecording: N,
        stopRecording: P,
      } = aue({
        sessionId: D,
        onSegmentFinalized: (0, X.useCallback)(() => {
          I.current?.onSpeechSegment();
        }, []),
      }),
      F = cue({ sessionId: D, active: m, iframeRef: e }),
      I = (0, X.useRef)(F);
    ((I.current = F),
      (0, X.useEffect)(
        () => (
          m
            ? ((E.current = Date.now()),
              _(0),
              (T.current = setInterval(() => {
                _(Math.floor((Date.now() - E.current) / 1e3));
              }, 1e3)))
            : (T.current &&= (clearInterval(T.current), null)),
          () => {
            T.current &&= (clearInterval(T.current), null);
          }
        ),
        [m],
      ),
      (0, X.useEffect)(() => {
        w.current?.scrollIntoView({ behavior: `smooth` });
      }, [A, j]),
      (0, X.useEffect)(() => {
        a && S(!0);
      }, [a]));
    let L = (0, X.useCallback)(
      async (e) => {
        if (!e || !n) return;
        let t = null,
          r = e;
        try {
          let e = await Ar.getGameFiles(n);
          e.success &&
            (typeof e.index_modified == `number` && (t = e.index_modified),
            e.game_url && (r = e.game_url));
        } catch {}
        u((e) =>
          e && t != null && t === d.current ? e : ((d.current = t), due(r, t)),
        );
      },
      [n],
    );
    return (
      (0, X.useEffect)(() => {
        t && L(t);
      }, [t, L]),
      (0, X.useEffect)(() => {
        o && t && L(t);
      }, [o, t, L]),
      (0, Z.jsxs)(`div`, {
        className: `h-full flex flex-col`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between mb-2 md:mb-4`,
            children: [
              (0, Z.jsxs)(`h3`, {
                className: `hidden md:flex text-lg font-semibold items-center gap-2`,
                children: [
                  (0, Z.jsx)(Co, { className: `h-5 w-5` }),
                  `Game Preview`,
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex w-full md:w-auto items-center justify-end gap-1.5 md:gap-2`,
                children: [
                  !!l &&
                    !m &&
                    (0, Z.jsxs)(x, {
                      variant: `outline`,
                      size: `sm`,
                      onClick: async () => {
                        try {
                          (await r0.startTestingSession(D, l || void 0),
                            h(!0),
                            await N());
                        } catch (e) {
                          console.error(`Failed to start testing:`, e);
                        }
                      },
                      className: `border-green-500/30 text-green-400 hover:bg-green-500/10`,
                      children: [
                        (0, Z.jsx)(pte, { className: `h-4 w-4 md:mr-2` }),
                        (0, Z.jsx)(`span`, {
                          className: `hidden md:inline`,
                          children: `Start Testing`,
                        }),
                      ],
                    }),
                  m &&
                    (0, Z.jsxs)(x, {
                      variant: `outline`,
                      size: `sm`,
                      onClick: async () => {
                        try {
                          (await P(),
                            await F.flushEvents(),
                            await r0.stopTestingSession(D));
                        } catch (e) {
                          console.error(`Failed to stop testing:`, e);
                        } finally {
                          h(!1);
                        }
                      },
                      className: `border-red-500/30 text-red-400 hover:bg-red-500/10`,
                      children: [
                        (0, Z.jsx)(ko, { className: `h-4 w-4 md:mr-2` }),
                        (0, Z.jsx)(`span`, {
                          className: `hidden md:inline`,
                          children: `Stop Testing`,
                        }),
                      ],
                    }),
                  a &&
                    !m &&
                    (0, Z.jsxs)(x, {
                      variant: `outline`,
                      size: `sm`,
                      onClick: () => S(!0),
                      className: `border-purple-500/30 text-purple-400 hover:bg-purple-500/10`,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: `hidden md:inline`,
                          children: `View `,
                        }),
                        `Results`,
                      ],
                    }),
                  (0, Z.jsxs)(x, {
                    variant: `outline`,
                    size: `sm`,
                    onClick: async () => {
                      if (n) {
                        c(!0);
                        try {
                          (p(!1),
                            u(``),
                            await new Promise((e) => setTimeout(e, 200)),
                            await r(),
                            (d.current = null),
                            await L(t),
                            p(!0));
                        } catch (e) {
                          (console.error(`Failed to refresh game:`, e), p(!0));
                        } finally {
                          c(!1);
                        }
                      }
                    },
                    disabled: s,
                    children: [
                      (0, Z.jsx)(H, { className: `h-4 w-4 md:mr-2` }),
                      (0, Z.jsx)(`span`, {
                        className: `hidden md:inline`,
                        children: s ? `Refreshing...` : `Refresh Game`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(x, {
                    variant: `outline`,
                    size: `sm`,
                    onClick: () => {
                      l && window.open(l, `_blank`);
                    },
                    children: [
                      (0, Z.jsx)(Zt, { className: `h-4 w-4 md:hidden` }),
                      (0, Z.jsx)(`span`, {
                        className: `hidden md:inline`,
                        children: `Open in New Tab`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            "data-tour": `tour-game-frame`,
            className: `flex-grow rounded-lg bg-card overflow-hidden relative`,
            ref: C,
            children: [
              m &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute top-3 right-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/70 rounded-full`,
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse`,
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-sm text-white font-mono`,
                      children: a0(g),
                    }),
                    O
                      ? (0, Z.jsx)(Ao, {
                          className: `h-3.5 w-3.5 text-red-400`,
                        })
                      : (0, Z.jsx)(ko, {
                          className: `h-3.5 w-3.5 text-gray-500`,
                        }),
                  ],
                }),
              m &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute top-3 left-3 z-10 flex flex-col gap-1.5`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-3 px-3 py-1.5 bg-black/70 rounded-full text-xs text-gray-300`,
                      children: [
                        (0, Z.jsxs)(`span`, {
                          children: [F.eventCount, ` events`],
                        }),
                        (0, Z.jsxs)(`span`, {
                          children: [F.screenshotCount, ` screenshots`],
                        }),
                      ],
                    }),
                    !O &&
                      M &&
                      (0, Z.jsx)(`div`, {
                        className: `px-3 py-1.5 bg-yellow-900/70 border border-yellow-600/30 rounded-lg text-xs text-yellow-300 max-w-xs`,
                        children: M,
                      }),
                  ],
                }),
              s || !f
                ? (0, Z.jsx)(`div`, {
                    className: `flex items-center justify-center h-full text-gray-400`,
                    children: (0, Z.jsxs)(`div`, {
                      className: `text-center`,
                      children: [
                        (0, Z.jsx)(`div`, {
                          className: `mb-4`,
                          children: (0, Z.jsxs)(`div`, {
                            className: `inline-flex items-center gap-2`,
                            children: [
                              (0, Z.jsx)(`div`, {
                                className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                              }),
                              (0, Z.jsx)(`div`, {
                                className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                                style: { animationDelay: `0.1s` },
                              }),
                              (0, Z.jsx)(`div`, {
                                className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                                style: { animationDelay: `0.2s` },
                              }),
                            ],
                          }),
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-lg`,
                          children: `Refreshing game...`,
                        }),
                      ],
                    }),
                  })
                : l
                  ? (0, Z.jsx)(
                      `iframe`,
                      {
                        ref: e,
                        src: l,
                        className: `w-full h-full border-0`,
                        title: `Game Preview`,
                        sandbox: `allow-scripts allow-same-origin allow-forms allow-pointer-lock`,
                        onLoad: () => console.log(`Game iframe loaded:`, l),
                        onError: (e) =>
                          console.error(`Game iframe load error:`, e),
                      },
                      l,
                    )
                  : (0, Z.jsx)(`div`, {
                      className: `flex items-center justify-center h-full text-gray-400`,
                      children: (0, Z.jsxs)(`div`, {
                        className: `text-center`,
                        children: [
                          (0, Z.jsx)(Co, {
                            className: `h-16 w-16 mx-auto mb-4 opacity-50`,
                          }),
                          (0, Z.jsx)(`p`, {
                            className: `text-lg`,
                            children: `No game built yet`,
                          }),
                          (0, Z.jsx)(`p`, {
                            className: `text-sm mt-1 text-white/30`,
                            children: `Chat with the AI to design and build your game`,
                          }),
                        ],
                      }),
                    }),
              m &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute bottom-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm border-t border-white/10`,
                  children: [
                    (0, Z.jsxs)(`button`, {
                      className: `w-full flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-white/5`,
                      onClick: () => y(!v),
                      children: [
                        (0, Z.jsxs)(`span`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, Z.jsx)(Ao, { className: `h-3.5 w-3.5` }),
                            `Live Transcript (`,
                            A.length,
                            ` segment`,
                            A.length === 1 ? `` : `s`,
                            `)`,
                          ],
                        }),
                        v
                          ? (0, Z.jsx)(ti, { className: `h-4 w-4` })
                          : (0, Z.jsx)(ze, { className: `h-4 w-4` }),
                      ],
                    }),
                    v &&
                      (0, Z.jsxs)(`div`, {
                        className: `max-h-40 overflow-y-auto px-4 pb-3 space-y-1`,
                        children: [
                          A.length === 0 &&
                            !j &&
                            (0, Z.jsx)(`p`, {
                              className: `text-xs text-gray-500 italic`,
                              children:
                                !k || M
                                  ? `Microphone unavailable — events and screenshots are still being captured.`
                                  : `Speak to see transcript here...`,
                            }),
                          A.map((e) =>
                            (0, Z.jsxs)(
                              `div`,
                              {
                                className: `text-sm text-gray-200`,
                                children: [
                                  (0, Z.jsx)(`span`, {
                                    className: `text-xs text-gray-500 font-mono mr-2`,
                                    children: a0(Math.floor(e.start_time)),
                                  }),
                                  e.text,
                                ],
                              },
                              e.id,
                            ),
                          ),
                          j &&
                            (0, Z.jsx)(`div`, {
                              className: `text-sm text-gray-400 italic`,
                              children: j,
                            }),
                          (0, Z.jsx)(`div`, { ref: w }),
                        ],
                      }),
                  ],
                }),
            ],
          }),
          b && (0, Z.jsx)(uue, { sessionId: D, onClose: () => S(!1) }),
        ],
      })
    );
  },
  s0 = [
    { id: `preview`, label: `Sandbox`, icon: ui, closable: !1 },
    ...rt.map((e) => ({
      id: e.tabId,
      label: e.label,
      icon: e.icon,
      closable: !0,
    })),
  ];
