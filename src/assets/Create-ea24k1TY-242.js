// Create-ea24k1TY 242 — classname
// Lines 81622-82155 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function xfe({
  sessionDir: e,
  assets: t,
  onExecuteWorkflow: n,
  gameDesignData: r,
  isActive: i,
  refreshAssets: a,
}) {
  let { portalTarget: o, requestedAsset: s, consumeRequestedAsset: c } = ie(),
    l = (0, X.useMemo)(() => t.filter((e) => h4(e) && !tt(e)), [t]),
    u = (0, X.useMemo)(() => t.filter(tt), [t]),
    d = (0, X.useMemo)(() => r?.voice_cast || [], [r?.voice_cast]),
    f = (0, X.useMemo)(
      () => r?.voiceover_script || null,
      [r?.voiceover_script],
    ),
    p = (0, X.useMemo)(() => {
      let e = new Map();
      if (!f || u.length === 0)
        return (
          u.length > 0 &&
            e.set(`Voice Lines`, {
              characterName: `Voice Lines`,
              assets: [...u],
            }),
          e
        );
      let t = new Map();
      for (let e of f.characters) t.set(e.id, e.name);
      let n = new Map();
      for (let e of f.lines) n.set(e.id, t.get(e.character_id) || `Unknown`);
      for (let t of u) {
        let r = `Unknown`,
          i = t.line_id;
        if (i && n.has(i)) r = n.get(i);
        else {
          let e = t.asset_name || t.name || ``,
            i = t.description || ``;
          for (let [t, a] of n)
            if (e.includes(t) || i.includes(t)) {
              r = a;
              break;
            }
        }
        let a = e.get(r);
        a ? a.assets.push(t) : e.set(r, { characterName: r, assets: [t] });
      }
      return e;
    }, [f, u]),
    m = (0, X.useMemo)(() => e?.split(`/`).pop() || e || ``, [e]),
    h = Q0((e) => e.loop),
    g = Q0((e) => e.effects),
    _ = Q0((e) => e.activeTab),
    v = Q0((e) => e.bakeStatus),
    y = Q0((e) => e.isDirty),
    b = Q0((e) => e.selectAsset),
    x = Q0((e) => e.loadAudioState),
    S = Q0((e) => e.setBakeStatus),
    C = Q0((e) => e.setActiveTab),
    [w, T] = (0, X.useState)(null),
    [E, D] = (0, X.useState)(null),
    [O, k] = (0, X.useState)(!1),
    [A, j] = (0, X.useState)(0),
    [M, N] = (0, X.useState)({}),
    P = (0, X.useRef)({ loop: h, effects: g });
  P.current = { loop: h, effects: g };
  let F = pde({
      sessionDir: e,
      getAudioState: (0, X.useCallback)(() => P.current, []),
      isActive: i !== !1 && _ !== `mix`,
    }),
    I = (0, X.useCallback)(
      async (e) => {
        if ((D(null), b(b4(e)), x(S4(e)), !g4(e))) {
          k(!1);
          return;
        }
        k(!0);
        try {
          (await F.loadClip(e, 1200), j((e) => e + 1));
        } catch (e) {
          D(e instanceof Error ? e.message : `Failed to load audio`);
        } finally {
          k(!1);
        }
      },
      [F, b, x],
    ),
    L = (0, X.useCallback)(
      (e) => {
        (T(e), I(e));
      },
      [I],
    );
  ((0, X.useEffect)(() => {
    if (w || s?.tabId === `sound`) return;
    let e = l.find(g4) || u.find(g4);
    e && L(e);
  }, [l, u, w, L, s]),
    (0, X.useEffect)(() => {
      if (i === !1) return;
      let e = c(`sound`);
      if (!e) return;
      let n = t.find(
        (t) =>
          y4(t) === e.assetId ||
          t.id === e.assetId ||
          t.asset_name === e.assetId,
      );
      if (n && (h4(n) || tt(n))) {
        L(n);
        return;
      }
      Hr.warning(`${e.assetId} is not an audio clip in this project`, {
        description: `The Sound Editor opens music, SFX and voice clips only.`,
      });
    }, [i, s, c, t, L]),
    (0, X.useEffect)(() => {
      w && (t.some((e) => y4(e) === y4(w)) || T(null));
    }, [t, w]),
    (0, X.useEffect)(() => {
      if (!w) return;
      let e = t.find((e) => y4(e) === y4(w));
      e && e !== w && T(e);
    }, [t, w]));
  let R = w ? tt(w) : !1,
    z = !!w && !g4(w);
  (0, X.useEffect)(() => {
    _ === `transform` && !R && C(`edit`);
  }, [_, R, C]);
  let V = (0, X.useMemo)(() => ({ loop: h, effects: g }), [h, g]),
    H = (0, X.useRef)(null),
    U = (0, X.useCallback)(
      (e, t, n, r) => {
        m &&
          T2.saveAudioState(m, e, r)
            .then(() => T2.bakeAudio(m, e, t, n, r))
            .then(() => a?.())
            .catch(console.error);
      },
      [m, a],
    ),
    ee = (0, X.useRef)(null),
    W = (0, X.useRef)(null),
    G = w ? b4(w) : null;
  ((0, X.useEffect)(() => {
    let e = ee.current;
    if (((ee.current = G), e && e !== G && H.current)) {
      let { assetId: t, state: n } = H.current,
        r = W.current;
      t === e && r && U(t, r.path, r.buffer, n);
    }
    G ? (H.current = { assetId: G, state: V }) : (H.current = null);
  }, [G, V, U]),
    (0, X.useEffect)(() => {
      G && H.current?.assetId === G && (H.current = { assetId: G, state: V });
    }, [G, V]),
    (0, X.useEffect)(() => {
      if (!w || O) return;
      let e = F.getBuffer();
      e && (W.current = { path: _4(w), buffer: e });
    }, [w, O, F]));
  let te = (0, X.useRef)(``),
    K = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    te.current = ``;
  }, [G]),
    (0, X.useEffect)(() => {
      if (!G || !m) return;
      let e = JSON.stringify(V);
      if (te.current === ``) {
        te.current = e;
        return;
      }
      if (e === te.current) return;
      let t = setTimeout(() => {
        ((K.current = null), (te.current = e));
        let t = F.getBuffer(),
          n = w ? _4(w) : ``;
        (S(`baking`),
          T2.saveAudioState(m, G, V)
            .then(() => (t && n ? T2.bakeAudio(m, G, n, t, V) : null))
            .then((e) => {
              if (e)
                S(
                  e.success
                    ? e.baked_audio_path
                      ? `baked`
                      : `original`
                    : `edited`,
                );
              else {
                let e = !!V.loop?.enabled || V.effects.some((e) => e.enabled);
                S(e ? `edited` : `original`);
              }
              return a?.();
            })
            .catch((e) => {
              (console.error(`[SoundEditor] Autosave/bake failed:`, e),
                S(`edited`));
            }));
      }, 1500);
      return (
        (K.current = t),
        () => {
          (clearTimeout(t), K.current === t && (K.current = null));
        }
      );
    }, [V, G, m, w, F, S, a]));
  let ne = (0, X.useCallback)(async () => {
      if (!w || !G || !m) return;
      let e = F.getBuffer();
      if (e) {
        ((K.current &&= (clearTimeout(K.current), null)),
          (te.current = JSON.stringify(V)),
          S(`baking`));
        try {
          await T2.saveAudioState(m, G, V);
          let t = await T2.bakeAudio(m, G, _4(w), e, V);
          (S(
            t.success ? (t.baked_audio_path ? `baked` : `original`) : `edited`,
          ),
            await a?.());
        } catch (e) {
          (console.error(`[SoundEditor] Apply (bake) failed:`, e), S(`edited`));
        }
      }
    }, [w, G, m, F, V, S, a]),
    re = (0, X.useCallback)(() => {
      w && (x(S4(w)), (te.current = ``));
    }, [w, x]),
    ae = (0, Z.jsxs)(Z.Fragment, {
      children: [
        (0, Z.jsx)(`div`, {
          className: `px-3 py-2 border-b border-border`,
          children: (0, Z.jsx)(`h3`, {
            className: `text-xs font-semibold text-muted-foreground uppercase tracking-wider`,
            children: `Audio Assets`,
          }),
        }),
        (0, Z.jsx)(`div`, {
          className: `flex-1 overflow-y-auto`,
          children:
            l.length === 0 && u.length === 0
              ? (0, Z.jsxs)(`div`, {
                  className: `p-4 text-center`,
                  children: [
                    (0, Z.jsx)(Et, {
                      className: `h-8 w-8 text-muted-foreground mx-auto mb-2`,
                    }),
                    (0, Z.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `No audio assets`,
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `mt-3 flex justify-center gap-2`,
                      children: [
                        (0, Z.jsxs)(`button`, {
                          onClick: () => n?.(`sfx`, `Generate sound effects`),
                          className: `px-3 py-1.5 text-xs bg-primary/20 text-primary rounded-md hover:bg-primary/30 transition-colors`,
                          children: [
                            (0, Z.jsx)(Yr, {
                              className: `h-3 w-3 inline mr-1`,
                            }),
                            `Generate SFX`,
                          ],
                        }),
                        (0, Z.jsxs)(`button`, {
                          onClick: () => n?.(`music`, `Generate music`),
                          className: `px-3 py-1.5 text-xs bg-primary/20 text-primary rounded-md hover:bg-primary/30 transition-colors`,
                          children: [
                            (0, Z.jsx)(Yr, {
                              className: `h-3 w-3 inline mr-1`,
                            }),
                            `Generate Music`,
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    l.length > 0 &&
                      (0, Z.jsx)(`div`, {
                        className: `py-1`,
                        children: l.map((e, t) =>
                          (0, Z.jsx)(
                            yfe,
                            {
                              asset: e,
                              isSelected: !!w && y4(w) === y4(e),
                              isMusic: vfe(e),
                              isPlayable: g4(e),
                              onSelect: L,
                            },
                            y4(e) || t,
                          ),
                        ),
                      }),
                    u.length > 0 &&
                      (0, Z.jsxs)(`div`, {
                        className: `border-t border-border`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `px-3 py-2 border-b border-border/50`,
                            children: (0, Z.jsxs)(`h3`, {
                              className: `text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5`,
                              children: [
                                (0, Z.jsx)(Ao, {
                                  className: `h-3 w-3 text-amber-400`,
                                }),
                                `Voice Lines`,
                                (0, Z.jsx)(`span`, {
                                  className: `text-[10px] font-normal text-muted-foreground/60 ml-auto`,
                                  children: u.length,
                                }),
                              ],
                            }),
                          }),
                          Array.from(p.entries()).map(([e, t]) => {
                            let n = M[e] ?? !1;
                            return (0, Z.jsxs)(
                              `div`,
                              {
                                children: [
                                  (0, Z.jsxs)(`button`, {
                                    onClick: () =>
                                      N((t) => ({ ...t, [e]: !t[e] })),
                                    className: `w-full px-3 py-1.5 flex items-center gap-1.5 text-left hover:bg-muted/50 transition-colors`,
                                    children: [
                                      n
                                        ? (0, Z.jsx)(De, {
                                            className: `h-3 w-3 text-muted-foreground/60 flex-shrink-0`,
                                          })
                                        : (0, Z.jsx)(ti, {
                                            className: `h-3 w-3 text-muted-foreground/60 flex-shrink-0`,
                                          }),
                                      (0, Z.jsx)(`span`, {
                                        className: `text-xs font-medium text-amber-300/80 truncate`,
                                        children: e,
                                      }),
                                      (0, Z.jsx)(`span`, {
                                        className: `text-[10px] text-muted-foreground/50 ml-auto`,
                                        children: t.assets.length,
                                      }),
                                    ],
                                  }),
                                  !n &&
                                    t.assets.map((e, t) =>
                                      (0, Z.jsx)(
                                        bfe,
                                        {
                                          asset: e,
                                          isSelected: !!w && y4(w) === y4(e),
                                          isPlayable: g4(e),
                                          onSelect: L,
                                        },
                                        y4(e) || t,
                                      ),
                                    ),
                                ],
                              },
                              e,
                            );
                          }),
                        ],
                      }),
                  ],
                }),
        }),
        (l.length > 0 || u.length > 0) &&
          n &&
          (0, Z.jsxs)(`div`, {
            className: `p-2 border-t border-border flex gap-2`,
            children: [
              (0, Z.jsxs)(`button`, {
                onClick: () => n(`sfx`, `Generate new sound effects`),
                className: `flex-1 px-3 py-1.5 text-xs bg-muted text-muted-foreground rounded-md hover:bg-muted/80 hover:text-foreground transition-colors flex items-center justify-center gap-1`,
                children: [(0, Z.jsx)(Yr, { className: `h-3 w-3` }), `New SFX`],
              }),
              (0, Z.jsxs)(`button`, {
                onClick: () => n(`music`, `Generate new music`),
                className: `flex-1 px-3 py-1.5 text-xs bg-muted text-muted-foreground rounded-md hover:bg-muted/80 hover:text-foreground transition-colors flex items-center justify-center gap-1`,
                children: [
                  (0, Z.jsx)(Yr, { className: `h-3 w-3` }),
                  `New Music`,
                ],
              }),
            ],
          }),
      ],
    }),
    oe = [
      {
        id: `edit`,
        label: `Edit`,
        icon: (0, Z.jsx)(Jo, { className: `h-3.5 w-3.5` }),
      },
      {
        id: `generate`,
        label: `Generate`,
        icon: (0, Z.jsx)(Yr, { className: `h-3.5 w-3.5` }),
      },
      {
        id: `transform`,
        label: `Transform`,
        icon: (0, Z.jsx)(_n, { className: `h-3.5 w-3.5` }),
        disabled: !R,
        title: R ? void 0 : `Voice lines only`,
      },
      {
        id: `mix`,
        label: `Mix`,
        icon: (0, Z.jsx)(B, { className: `h-3.5 w-3.5` }),
      },
    ];
  return (0, Z.jsxs)(`div`, {
    className: `flex h-full bg-background text-foreground`,
    children: [
      i !== !1 &&
        o &&
        (0, js.createPortal)(
          (0, Z.jsx)(`div`, {
            className: `flex flex-col h-full`,
            children: ae,
          }),
          o,
        ),
      i !== !1 &&
        !o &&
        (0, Z.jsx)(`div`, {
          className: `w-56 flex-shrink-0 border-r border-border flex flex-col bg-card`,
          children: ae,
        }),
      (0, Z.jsxs)(`div`, {
        className: `flex-1 flex flex-col min-w-0`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `flex items-center gap-1 px-3 pt-2 border-b border-gray-700/50 bg-[#0d0f1a]`,
            children: oe.map((e) => {
              let t = _ === e.id;
              return (0, Z.jsxs)(
                `button`,
                {
                  type: `button`,
                  onClick: () => !e.disabled && C(e.id),
                  disabled: e.disabled,
                  title: e.title,
                  className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border-b-2 -mb-px transition-colors ${e.disabled ? `text-muted-foreground/40 border-transparent cursor-not-allowed` : t ? `text-foreground border-primary` : `text-muted-foreground border-transparent hover:text-foreground/70`}`,
                  children: [e.icon, e.label],
                },
                e.id,
              );
            }),
          }),
          E &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2 px-3 py-1.5 bg-red-950/40 border-b border-red-700/30`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[11px] text-red-300`,
                  children: E,
                }),
                w &&
                  (0, Z.jsx)(`button`, {
                    onClick: () => w && void I(w),
                    className: `px-2 py-0.5 text-[11px] bg-gray-700/50 rounded hover:bg-gray-600/50 transition-colors`,
                    children: `Retry`,
                  }),
              ],
            }),
          (0, Z.jsxs)(`div`, {
            className: `flex-1 min-h-0`,
            children: [
              _ === `edit` &&
                (z
                  ? (0, Z.jsxs)(`div`, {
                      className: `h-full flex flex-col items-center justify-center gap-2 text-center px-6`,
                      children: [
                        (0, Z.jsx)(jt, {
                          className: `h-9 w-9 text-muted-foreground/40`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm text-foreground/80`,
                          children: v4(w),
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: `Not generated yet`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-[11px] text-muted-foreground/60 capitalize`,
                          children: w.asset_type?.replace(/_/g, ` `),
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-[11px] text-muted-foreground/50 max-w-[240px]`,
                          children: `Generate this clip from the Generate tab to edit its waveform, loop and effects.`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(Wde, {
                      engine: F,
                      asset: w,
                      clipVersion: A,
                      bakeStatus: v,
                      isDirty: y,
                      onApply: ne,
                      onRevert: re,
                    })),
              _ === `generate` &&
                (0, Z.jsx)(Gde, {
                  sessionId: m,
                  asset: w,
                  assets: t,
                  voiceCast: d,
                }),
              _ === `transform` &&
                (0, Z.jsx)(Jde, { sessionId: m, asset: w, voiceCast: d }),
              _ === `mix` &&
                (0, Z.jsx)(_fe, {
                  sessionId: m,
                  sessionDir: e,
                  assets: t,
                  isActive: i !== !1 && _ === `mix`,
                  refreshAssets: a,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
