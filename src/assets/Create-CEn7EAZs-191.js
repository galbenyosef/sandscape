// Create-CEn7EAZs 191 — classname
// Lines 63618-64622 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function WQ({
  sessionId: e,
  sessionDir: t,
  voiceCast: n,
  onUpdateVoiceCast: r,
  executionState: i,
}) {
  let [a, o] = (0, X.useState)(``),
    [s, c] = (0, X.useState)(`all`),
    [l, d] = (0, X.useState)([]),
    [f, p] = (0, X.useState)(!1),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(!1),
    [v, y] = (0, X.useState)([]),
    [b, x] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)(null),
    [T, E] = (0, X.useState)(``),
    [D, O] = (0, X.useState)(5),
    [k, A] = (0, X.useState)(!1),
    [j, M] = (0, X.useState)(null),
    [N, P] = (0, X.useState)(null),
    [F, I] = (0, X.useState)(null),
    { playingId: L, play: R, stop: z } = RQ(),
    B = Fa(`op:design_voice`),
    { toast: V } = u(),
    [H, ee] = (0, X.useState)(null),
    U = (0, X.useMemo)(() => new Set(n.map((e) => e.elevenlabs_voice_id)), [n]),
    W = (0, X.useMemo)(() => n.find((e) => e.id === H) ?? null, [n, H]);
  (0, X.useEffect)(() => {
    H && !n.some((e) => e.id === H) && ee(null);
  }, [n, H]);
  let [ne, G] = (0, X.useState)(``),
    [re, ie] = (0, X.useState)(``),
    [ae, oe] = (0, X.useState)(null),
    [se, ce] = (0, X.useState)(null),
    [K, le] = (0, X.useState)(!1),
    [ue, de] = (0, X.useState)(0),
    [fe, pe] = (0, X.useState)(!1),
    [me, he] = (0, X.useState)(null),
    ge = (0, X.useRef)(null),
    _e = (0, X.useRef)(null),
    ve = (0, X.useRef)(null),
    ye = (0, X.useRef)([]),
    be = (0, X.useRef)(null),
    q = (0, X.useRef)(!1),
    xe = (0, X.useRef)(!1),
    Se = (0, X.useRef)(null),
    Ce = (0, X.useCallback)((e) => {
      Se.current && URL.revokeObjectURL(Se.current);
      let t = e ? URL.createObjectURL(e) : null;
      ((Se.current = t), oe(e), ce(t));
    }, []),
    Te = (0, X.useCallback)(() => {
      _e.current && _e.current.state === `recording` && _e.current.stop();
    }, []),
    Ee = (0, X.useCallback)(() => {
      (_e.current && _e.current.state !== `inactive` && _e.current.stop(),
        (_e.current = null),
        (ve.current &&=
          (ve.current.getTracks().forEach((e) => e.stop()), null)),
        (be.current &&= (clearInterval(be.current), null)),
        (ye.current = []),
        le(!1),
        de(0));
    }, []);
  (0, X.useEffect)(
    () => () => {
      ((xe.current = !0),
        Ee(),
        (Se.current &&= (URL.revokeObjectURL(Se.current), null)));
    },
    [],
  );
  let De = (0, X.useCallback)(
      (e) => {
        if (!e) return;
        he(null);
        let t = FQ[e.type] ?? e.type;
        if (!IQ.has(t)) {
          he(`Use an MP3, WAV, OGG, M4A, or WebM recording.`);
          return;
        }
        if (e.size > LQ) {
          he(`That recording is over 25 MB. Use a shorter clip.`);
          return;
        }
        Ce(new Blob([e], { type: t }));
      },
      [Ce],
    ),
    Oe = (0, X.useCallback)(async () => {
      if (!(q.current || K)) {
        ((q.current = !0), he(null), Ce(null));
        try {
          let e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
          if (xe.current) {
            e.getTracks().forEach((e) => e.stop());
            return;
          }
          ve.current = e;
          let t = MediaRecorder.isTypeSupported(`audio/webm`)
              ? `audio/webm`
              : `audio/ogg`,
            n;
          try {
            n = new MediaRecorder(e, { mimeType: t });
          } catch {
            (e.getTracks().forEach((e) => e.stop()),
              (ve.current = null),
              he(
                `Recording is not supported in this browser. Upload a file instead.`,
              ));
            return;
          }
          ((_e.current = n),
            (ye.current = []),
            (n.ondataavailable = (e) => {
              e.data.size > 0 && ye.current.push(e.data);
            }),
            (n.onstop = () => {
              let n = new Blob(ye.current, { type: t });
              (Ce(n),
                le(!1),
                (be.current &&= (clearInterval(be.current), null)),
                e.getTracks().forEach((e) => e.stop()),
                (ve.current = null));
            }),
            (n.onerror = () => {
              (he(`Recording failed unexpectedly`), Ee());
            }),
            n.start(),
            le(!0),
            de(0),
            (be.current = setInterval(() => {
              de((e) => e + 1);
            }, 1e3)));
        } catch (e) {
          e instanceof DOMException && e.name === `NotAllowedError`
            ? he(
                `Microphone access denied. Please allow microphone access in your browser settings.`,
              )
            : e instanceof DOMException && e.name === `NotFoundError`
              ? he(
                  `No microphone found. Please connect a microphone and try again.`,
                )
              : he(`Failed to start recording. Please check your microphone.`);
        } finally {
          q.current = !1;
        }
      }
    }, [K, Ce, Ee]),
    ke = W ? W.name : ne.trim(),
    Ae = (0, X.useRef)(n);
  (0, X.useEffect)(() => {
    Ae.current = n;
  }, [n]);
  let je = (0, X.useCallback)(async () => {
      if (!(!ae || !ke)) {
        (pe(!0), he(null));
        try {
          let t = await _n();
          delete t[`Content-Type`];
          let n = new FormData();
          (n.append(`audio`, ae, `reference`), n.append(`voice_name`, ke));
          let i = await fetch(
              `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/clone-reference`,
              { method: `POST`, headers: t, body: n },
            ),
            a = await i.json().catch(() => ({}));
          if (!i.ok || !a?.success || !a.reference_audio_path) {
            he(
              a?.error ||
                (i.ok
                  ? `Could not save the voice`
                  : `Could not save the voice (${i.status})`),
            );
            return;
          }
          let o = a.reference_audio_path,
            s = {
              elevenlabs_voice_id: ``,
              source: `cloned`,
              preview_audio_path: o,
              reference_audio_path: o,
              reference_text: re.trim() || void 0,
              reference_asset_id: a.asset_id || void 0,
            },
            c = Ae.current;
          if (H != null && c.some((e) => e.id === H))
            r(c.map((e) => (e.id === H ? { ...e, ...s, labels: void 0 } : e)));
          else {
            let e = {
              id: `voice_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
              name: ke,
              description: ``,
              ...s,
            };
            r([...c, e]);
          }
          (ee(null), G(``), ie(``), Ce(null));
        } catch (e) {
          he(e instanceof Error ? e.message : `Could not save the voice`);
        } finally {
          pe(!1);
        }
      }
    }, [ae, ke, re, H, r, e, Ce]),
    Me = (0, X.useCallback)(async () => {
      (p(!0), h(null));
      try {
        let e = await _n(),
          t = new URLSearchParams();
        (a.trim() && t.set(`q`, a.trim()), s !== `all` && t.set(`category`, s));
        let n = await fetch(`${yn.API_BASE_URL}/api/voices/premade?${t}`, {
          headers: e,
        });
        if (!n.ok) throw Error(`Server error: ${n.status}`);
        let r = await n.json();
        (d(r.voices || []), _(!0));
      } catch (e) {
        (h(e instanceof Error ? e.message : `Could not load the voice library`),
          d([]));
      } finally {
        p(!1);
      }
    }, [a, s]);
  (0, X.useEffect)(() => {
    Me();
  }, [s]);
  let Ne = (0, X.useCallback)(
      (e) => {
        (z(), r(n.filter((t) => t.id !== e)));
      },
      [n, r, z],
    ),
    Pe = (0, X.useCallback)(
      (e) => {
        if (H) {
          (r(
            n.map((t) =>
              t.id === H
                ? {
                    ...t,
                    elevenlabs_voice_id: e.voice_id,
                    source: `premade`,
                    preview_audio_path: e.preview_url,
                    labels: e.labels,
                  }
                : t,
            ),
          ),
            ee(null));
          return;
        }
        if (U.has(e.voice_id)) return;
        let t = {
          id: `voice_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          elevenlabs_voice_id: e.voice_id,
          name: e.name,
          description: e.description || ``,
          source: `premade`,
          preview_audio_path: e.preview_url,
          labels: e.labels,
        };
        r([...n, t]);
      },
      [n, r, U, H],
    ),
    Fe = (0, X.useCallback)((e) => {
      (ee(e.id), E(e.description || ``), M(null), P(null), I(null));
    }, []),
    Ie = (0, X.useCallback)(() => {
      ee(null);
    }, []),
    Le = (0, X.useCallback)(async () => {
      (x(!0), w(null));
      try {
        let t = await _n(),
          n = await fetch(
            `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/auto-cast`,
            { method: `POST`, headers: t },
          );
        if (!n.ok) {
          let e = await n.json().catch(() => ({}));
          throw Error(e.detail || `Server error: ${n.status}`);
        }
        let r = await n.json();
        if (!r.success) throw Error(r.error || `Auto-cast failed`);
        y(r.suggestions || []);
      } catch (e) {
        (w(e instanceof Error ? e.message : `Failed to generate suggestions`),
          y([]));
      } finally {
        x(!1);
      }
    }, [e]),
    Re = (0, X.useCallback)(
      (e) => {
        let t = {
          id: `voice_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          elevenlabs_voice_id: ``,
          name: e.character_name,
          description: e.voice_description,
          source: `designed`,
        };
        (r([...n, t]),
          y((t) => t.filter((t) => t.character_name !== e.character_name)));
      },
      [n, r],
    ),
    ze = (0, X.useCallback)(async () => {
      if (T.trim()) {
        (A(!0), I(null), M(null), P(null));
        try {
          let t = await _n(),
            n = await fetch(
              `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/design`,
              {
                method: `POST`,
                headers: t,
                body: JSON.stringify({
                  description: T.trim(),
                  guidance_scale: D,
                }),
              },
            ),
            r = await n.json().catch(() => ({}));
          if (!n.ok || !r?.success) {
            let e = Qt(
              V,
              {
                success: r?.success,
                error: r?.error ?? r?.detail,
                error_code: r?.error_code,
              },
              {
                title: `Voice design failed`,
                fallback: n.ok
                  ? `Voice design failed`
                  : `Voice design failed (${n.status})`,
              },
            );
            I(e);
            return;
          }
          (M(r.preview_url || null), P(r.voice_id || null));
        } catch (e) {
          I(e instanceof Error ? e.message : `Failed to generate voice`);
        } finally {
          A(!1);
        }
      }
    }, [e, T, D, V]),
    Be = (0, X.useCallback)(() => {
      if (N) {
        if (H)
          r(
            n.map((e) =>
              e.id === H
                ? {
                    ...e,
                    elevenlabs_voice_id: N,
                    source: `designed`,
                    preview_audio_path: j || e.preview_audio_path,
                    description: T.trim() || e.description,
                    labels: void 0,
                  }
                : e,
            ),
          );
        else {
          let e = {
            id: `voice_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            elevenlabs_voice_id: N,
            name: `Custom Voice`,
            description: T.trim(),
            source: `designed`,
            preview_audio_path: j || void 0,
          };
          r([...n, e]);
        }
        (ee(null), E(``), M(null), P(null), O(5));
      }
    }, [H, N, j, T, n, r]),
    Ve = (0, X.useCallback)(() => {
      (M(null), P(null), ze());
    }, [ze]),
    He = (0, X.useCallback)(
      (e) => {
        e.key === `Enter` && Me();
      },
      [Me],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-5`,
    children: [
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(Er, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Your Cast`,
              }),
              n.length > 0 &&
                (0, Z.jsxs)(`span`, {
                  className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded ml-auto`,
                  children: [n.length, ` voice`, n.length === 1 ? `` : `s`],
                }),
            ],
          }),
          n.length === 0
            ? (0, Z.jsxs)(`div`, {
                className: `py-6 text-center border border-dashed border-border/50 rounded-lg`,
                children: [
                  (0, Z.jsx)(Tt, {
                    className: `h-6 w-6 text-muted-foreground/20 mx-auto mb-2`,
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-sm text-muted-foreground/60`,
                    children: `No voices in your cast yet.`,
                  }),
                  (0, Z.jsx)(`p`, {
                    className: `text-xs text-muted-foreground/40 mt-1`,
                    children: `Let your concept suggest a cast, pick from the library, design one, or clone one.`,
                  }),
                ],
              })
            : (0, Z.jsx)(`div`, {
                className: `grid grid-cols-1 gap-2`,
                children: n.map((t) =>
                  (0, Z.jsx)(
                    HQ,
                    {
                      voice: t,
                      isPlaying: L === t.id,
                      needsVoice: !NQ(t),
                      isAssignTarget: H === t.id,
                      onPlay: () => {
                        t.preview_audio_path &&
                          R(t.id, PQ(e, t.preview_audio_path));
                      },
                      onRemove: () => Ne(t.id),
                      onStartAssign: () => Fe(t),
                    },
                    t.id,
                  ),
                ),
              }),
        ],
      }),
      W &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2 p-2.5 rounded-lg border border-primary/40 bg-primary/5`,
          children: [
            (0, Z.jsx)(an, { className: `h-3.5 w-3.5 text-primary shrink-0` }),
            (0, Z.jsxs)(`span`, {
              className: `text-xs text-foreground/80 flex-1`,
              children: [
                `Choosing a voice for`,
                ` `,
                (0, Z.jsx)(`span`, {
                  className: `font-medium`,
                  children: W.name,
                }),
                `. Pick one from the library below, design one, or clone one.`,
              ],
            }),
            (0, Z.jsx)(`button`, {
              onClick: Ie,
              className: `text-[11px] px-2 min-h-[40px] rounded text-muted-foreground hover:text-foreground transition-colors shrink-0`,
              children: `Cancel`,
            }),
          ],
        }),
      (0, Z.jsx)(`div`, { className: `border-t border-border` }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(an, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Cast From Your Concept`,
              }),
            ],
          }),
          v.length === 0 &&
            !b &&
            !C &&
            (0, Z.jsx)($t, {
              onClick: Le,
              className: `w-full`,
              disabled: b,
              cost: 0,
              label: `Suggest a cast`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: b,
              loadingText: `Reading your concept...`,
              tooltip: `Reads your game concept and suggests the characters that need a voice`,
              checkBalance: !0,
            }),
          b &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-muted-foreground py-6`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Reading your game concept...`,
              ],
            }),
          C &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
              children: [
                (0, Z.jsx)(te, { className: `h-4 w-4 shrink-0` }),
                (0, Z.jsx)(`span`, { className: `flex-1`, children: C }),
                (0, Z.jsx)(`button`, {
                  onClick: Le,
                  className: `text-xs px-2 min-h-[40px] rounded text-primary hover:text-primary/80 transition-colors shrink-0`,
                  children: `Retry`,
                }),
              ],
            }),
          v.length > 0 &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                v.map((e) =>
                  (0, Z.jsxs)(
                    `div`,
                    {
                      className: `p-3 rounded-lg border border-border/50 bg-card hover:border-border transition-all duration-200`,
                      children: [
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-2 mb-1`,
                          children: [
                            (0, Z.jsx)(`span`, {
                              className: `text-sm text-foreground/80 font-medium flex-1 min-w-0 truncate`,
                              title: e.character_name,
                              children: e.character_name,
                            }),
                            (0, Z.jsx)(VQ, { children: e.role }),
                          ],
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-xs text-muted-foreground/60 line-clamp-2 mb-2`,
                          children: e.voice_description,
                        }),
                        (0, Z.jsxs)(S, {
                          size: `sm`,
                          variant: `outline`,
                          onClick: () => Re(e),
                          className: `min-h-[40px] text-xs px-2.5`,
                          children: [
                            (0, Z.jsx)(Br, { className: `h-3 w-3 mr-1` }),
                            `Add to Cast`,
                          ],
                        }),
                      ],
                    },
                    e.character_name,
                  ),
                ),
                (0, Z.jsxs)(`button`, {
                  onClick: Le,
                  disabled: b,
                  className: `flex items-center gap-1.5 min-h-[40px] text-xs text-primary hover:text-primary/80 transition-colors mt-1`,
                  children: [
                    (0, Z.jsx)(ln, { className: `h-3 w-3` }),
                    `Suggest again`,
                  ],
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
              (0, Z.jsx)(kr, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Voice Library`,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex gap-2 mb-3`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `relative flex-1`,
                children: [
                  (0, Z.jsx)(kr, {
                    className: `absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40`,
                  }),
                  (0, Z.jsx)(`input`, {
                    type: `text`,
                    value: a,
                    onChange: (e) => o(e.target.value),
                    onKeyDown: He,
                    placeholder: `Search voices...`,
                    "aria-label": `Search voices`,
                    className: `w-full h-10 bg-card border border-border rounded-lg pl-8 pr-3 text-sm text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`select`, {
                value: s,
                onChange: (e) => c(e.target.value),
                "aria-label": `Filter voices by kind`,
                className: `h-10 shrink-0 bg-card border border-border rounded-lg px-2 text-sm text-foreground/80 focus:outline-none focus:border-primary/40`,
                children: [
                  (0, Z.jsx)(`option`, { value: `all`, children: `All` }),
                  (0, Z.jsx)(`option`, {
                    value: `premade`,
                    children: `Standard`,
                  }),
                  (0, Z.jsx)(`option`, { value: `cloned`, children: `Cloned` }),
                  (0, Z.jsx)(`option`, {
                    value: `generated`,
                    children: `Designed`,
                  }),
                  (0, Z.jsx)(`option`, {
                    value: `professional`,
                    children: `Pro`,
                  }),
                ],
              }),
              (0, Z.jsx)(S, {
                size: `sm`,
                variant: `outline`,
                onClick: Me,
                disabled: f,
                title: `Search the voice library`,
                "aria-label": `Search the voice library`,
                className: `h-10 w-10 p-0 shrink-0`,
                children: f
                  ? (0, Z.jsx)(J, { className: `h-3.5 w-3.5 animate-spin` })
                  : (0, Z.jsx)(kr, { className: `h-3.5 w-3.5` }),
              }),
            ],
          }),
          f &&
            l.length === 0 &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-muted-foreground py-8`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Loading voices...`,
              ],
            }),
          m &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-red-400 py-4`,
              children: [
                (0, Z.jsx)(te, { className: `h-4 w-4 shrink-0` }),
                (0, Z.jsx)(`span`, { children: m }),
              ],
            }),
          l.length > 0 &&
            (0, Z.jsx)(`div`, {
              className: `grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto scrollbar-themed pr-1`,
              children: l.map((t) =>
                (0, Z.jsx)(
                  UQ,
                  {
                    voice: t,
                    isPlaying: L === t.voice_id,
                    isInCast: U.has(t.voice_id),
                    assignMode: H !== null,
                    onPlay: () => {
                      t.preview_url && R(t.voice_id, PQ(e, t.preview_url));
                    },
                    onAdd: () => Pe(t),
                  },
                  t.voice_id,
                ),
              ),
            }),
          g &&
            !f &&
            !m &&
            l.length === 0 &&
            (0, Z.jsxs)(`div`, {
              className: `py-6 text-center`,
              children: [
                (0, Z.jsx)(`p`, {
                  className: `text-sm text-muted-foreground/50`,
                  children: `No voices found.`,
                }),
                (0, Z.jsx)(`p`, {
                  className: `text-xs text-muted-foreground/30 mt-1`,
                  children: `Try a different search or category.`,
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
              (0, Z.jsx)(vs, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Design A Voice`,
              }),
              W &&
                (0, Z.jsxs)(`span`, {
                  className: `text-[10px] text-primary/70 ml-auto truncate max-w-[150px]`,
                  children: [`for `, W.name],
                }),
            ],
          }),
          (0, Z.jsx)(`textarea`, {
            value: T,
            onChange: (e) => {
              (E(e.target.value), I(null));
            },
            placeholder: `Describe the voice you want (e.g., 'a warm, friendly female voice with slight Irish accent')`,
            rows: 3,
            maxLength: 500,
            className: `w-full bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40 mb-3`,
            disabled: k,
          }),
          (0, Z.jsxs)(`div`, {
            className: `mb-3`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between mb-1.5`,
                children: [
                  (0, Z.jsx)(`label`, {
                    htmlFor: `voice-description-match`,
                    className: `text-xs text-muted-foreground/60`,
                    children: `Stick to the description`,
                  }),
                  (0, Z.jsx)(`span`, {
                    className: `text-xs text-foreground/70 font-medium`,
                    children: AQ(D),
                  }),
                ],
              }),
              (0, Z.jsx)(`input`, {
                id: `voice-description-match`,
                type: `range`,
                min: 1,
                max: 20,
                step: 1,
                value: D,
                onChange: (e) => O(Number(e.target.value)),
                disabled: k,
                "aria-label": `Stick to the description`,
                "aria-valuetext": AQ(D),
                className: `w-full h-1.5 bg-secondary rounded-full appearance-none cursor-pointer accent-primary`,
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex justify-between text-[9px] text-muted-foreground/30 mt-0.5`,
                children: [
                  (0, Z.jsx)(`span`, { children: `Surprise me` }),
                  (0, Z.jsx)(`span`, { children: `Word for word` }),
                ],
              }),
            ],
          }),
          F &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
              children: [
                (0, Z.jsx)(te, { className: `h-4 w-4 shrink-0` }),
                (0, Z.jsx)(`span`, { children: F }),
              ],
            }),
          j
            ? (0, Z.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `p-3 rounded-lg border border-primary/20 bg-primary/5`,
                    children: [
                      (0, Z.jsx)(`p`, {
                        className: `text-xs text-muted-foreground/60 mb-2`,
                        children: `Listen to your new voice`,
                      }),
                      (0, Z.jsx)(`audio`, {
                        controls: !0,
                        className: `w-full h-8`,
                        src: PQ(e, j),
                        preload: `auto`,
                        children: `Your browser does not support the audio element.`,
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, Z.jsxs)(S, {
                        onClick: Be,
                        className: `flex-1 h-10`,
                        children: [
                          (0, Z.jsx)(Br, { className: `h-3.5 w-3.5 mr-1.5` }),
                          W ? `Assign to ${W.name}` : `Add to Cast`,
                        ],
                      }),
                      (0, Z.jsx)(S, {
                        variant: `outline`,
                        onClick: Ve,
                        disabled: k,
                        title: `Try another take on this description`,
                        "aria-label": `Try another take on this description`,
                        className: `h-10 w-10 p-0`,
                        children: k
                          ? (0, Z.jsx)(J, {
                              className: `h-3.5 w-3.5 animate-spin`,
                            })
                          : (0, Z.jsx)(ln, { className: `h-3.5 w-3.5` }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, Z.jsx)($t, {
                onClick: ze,
                className: `w-full`,
                disabled: !T.trim() || k,
                cost: B,
                label: `Create this voice`,
                icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
                isLoading: k,
                loadingText: `Creating the voice...`,
                tooltip: `Build a new voice from your description`,
                checkBalance: !0,
              }),
        ],
      }),
      (0, Z.jsx)(`div`, { className: `border-t border-border` }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-3`,
            children: [
              (0, Z.jsx)(Xo, { className: `h-3.5 w-3.5 text-primary` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Clone A Voice`,
              }),
              W &&
                (0, Z.jsxs)(`span`, {
                  className: `text-[10px] text-primary/70 ml-auto truncate max-w-[150px]`,
                  children: [`for `, W.name],
                }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-xs text-muted-foreground/50 mb-3`,
            children: `Use a real voice from a recording. Lines you generate with it are spoken in that voice. A few seconds of clear speech works best.`,
          }),
          !W &&
            (0, Z.jsx)(`input`, {
              type: `text`,
              value: ne,
              onChange: (e) => {
                (G(e.target.value), he(null));
              },
              placeholder: `Name this voice (e.g. 'Captain')`,
              maxLength: 80,
              "aria-label": `Name for the cloned voice`,
              className: `w-full h-10 bg-card border border-border rounded-lg px-3 text-sm text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40 mb-3`,
              disabled: fe || K,
            }),
          !ae &&
            !K &&
            (0, Z.jsxs)(`div`, {
              className: `flex gap-2 mb-3`,
              children: [
                (0, Z.jsx)(`input`, {
                  ref: ge,
                  type: `file`,
                  accept: `audio/*`,
                  hidden: !0,
                  onChange: (e) => {
                    (De(e.target.files?.[0] ?? null), (e.target.value = ``));
                  },
                }),
                (0, Z.jsxs)(S, {
                  variant: `outline`,
                  onClick: () => ge.current?.click(),
                  disabled: fe,
                  className: `flex-1 h-10 text-xs`,
                  children: [
                    (0, Z.jsx)(mn, { className: `h-3.5 w-3.5 mr-1.5` }),
                    `Upload a recording`,
                  ],
                }),
                (0, Z.jsxs)(S, {
                  variant: `outline`,
                  onClick: Oe,
                  disabled: fe,
                  className: `flex-1 h-10 text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/30`,
                  children: [
                    (0, Z.jsx)(we, {
                      className: `h-3.5 w-3.5 mr-1.5 fill-red-400 text-red-400`,
                    }),
                    `Record one`,
                  ],
                }),
              ],
            }),
          K &&
            (0, Z.jsxs)(`div`, {
              className: `space-y-2 mb-3`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center justify-center gap-3 p-3 rounded-lg border border-red-500/30 bg-red-500/5`,
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `h-3 w-3 rounded-full bg-red-500 animate-pulse`,
                    }),
                    (0, Z.jsxs)(`span`, {
                      className: `text-sm font-mono text-red-400`,
                      children: [
                        Math.floor(ue / 60),
                        `:`,
                        (ue % 60).toString().padStart(2, `0`),
                      ],
                    }),
                  ],
                }),
                (0, Z.jsxs)(S, {
                  onClick: Te,
                  variant: `outline`,
                  className: `w-full h-10 bg-card hover:bg-card/80 text-foreground border border-border`,
                  children: [
                    (0, Z.jsx)(Fs, {
                      className: `h-3.5 w-3.5 mr-2 fill-current`,
                    }),
                    `Stop Recording`,
                  ],
                }),
              ],
            }),
          ae &&
            se &&
            !K &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 p-2.5 rounded-lg border border-border/60 bg-card/30 mb-3`,
              children: [
                (0, Z.jsx)(`audio`, {
                  controls: !0,
                  className: `h-8 flex-1 min-w-0`,
                  src: se,
                  preload: `auto`,
                }),
                (0, Z.jsx)(bQ, {
                  label: `Discard this recording`,
                  tone: `destructive`,
                  onClick: () => {
                    (Ce(null), he(null));
                  },
                  children: (0, Z.jsx)(Jr, { className: `h-3.5 w-3.5` }),
                }),
              ],
            }),
          (0, Z.jsx)(`textarea`, {
            value: re,
            onChange: (e) => ie(e.target.value),
            placeholder: `What does the recording say? (optional — makes the clone more faithful)`,
            rows: 2,
            maxLength: 500,
            "aria-label": `Transcript of the reference recording`,
            className: `w-full bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40 mb-3`,
            disabled: fe || K,
          }),
          me &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
              children: [
                (0, Z.jsx)(te, { className: `h-4 w-4 shrink-0` }),
                (0, Z.jsx)(`span`, { children: me }),
              ],
            }),
          (0, Z.jsx)($t, {
            onClick: je,
            className: `w-full`,
            disabled: !ae || !ke || fe || K,
            cost: 0,
            label: W ? `Clone for ${W.name}` : `Add to Cast`,
            icon: (0, Z.jsx)(Xo, { className: `h-4 w-4` }),
            isLoading: fe,
            loadingText: `Saving the voice...`,
            tooltip: `Save this recording as a voice your cast can speak with`,
            checkBalance: !1,
          }),
        ],
      }),
    ],
  });
}
