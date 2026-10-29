// Create-CEn7EAZs 195 — classname
// Lines 65199-66290 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function l$({
  sessionId: e,
  sessionDir: t,
  voiceCast: n,
  voiceoverScript: r,
  onUpdateScript: i,
  onGenerateForAsset: a,
  onGoToScript: o,
  focusLine: s,
  executionState: c,
}) {
  let l = Fa(`op:tts_line`),
    d = Fa(`op:voice_change`),
    { toast: f } = u(),
    [p, m] = (0, X.useState)(0),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(null),
    [x, C] = (0, X.useState)({}),
    [w, T] = (0, X.useState)(!1),
    [E, D] = (0, X.useState)(0),
    [O, k] = (0, X.useState)(null),
    [A, j] = (0, X.useState)(null),
    [M, P] = (0, X.useState)(!1),
    [F, I] = (0, X.useState)(!1),
    [L, R] = (0, X.useState)(null),
    [z, V] = (0, X.useState)(!1),
    H = (0, X.useRef)(null),
    ee = (0, X.useRef)(null),
    U = (0, X.useRef)([]),
    W = (0, X.useRef)(null),
    ne = (0, X.useRef)(null),
    { playingId: G, play: re, stop: ie } = e$(),
    ae = (0, X.useMemo)(() => (r ? t$(r.lines) : []), [r]),
    oe = ae.length,
    [se, ce] = (0, X.useState)(0);
  if (s && s.seq !== se) {
    ce(s.seq);
    let e = ae.findIndex((e) => e.id === s.lineId);
    e >= 0 && m(e);
  }
  let K = oe > 0 ? ae[p] : null,
    le = (0, X.useMemo)(
      () =>
        !K || !r
          ? null
          : (r.characters.find((e) => e.id === K.character_id) ?? null),
      [K, r],
    ),
    ue = (0, X.useMemo)(
      () =>
        K?.assigned_voice_id
          ? (n.find((e) => e.id === K.assigned_voice_id) ?? null)
          : null,
      [K, n],
    ),
    de = NQ(ue),
    fe = ue
      ? de
        ? null
        : `This role has no voice yet. Give it one in the Cast step.`
      : `Pick a voice for this character in the Script step first`,
    pe = (0, X.useMemo)(() => ae.filter((e) => !e.final_take_id), [ae]),
    me = pe.length,
    he = oe - me,
    ge = (0, X.useMemo)(
      () =>
        pe.filter((e) =>
          e.assigned_voice_id
            ? NQ(n.find((t) => t.id === e.assigned_voice_id))
            : !1,
        ),
      [pe, n],
    ),
    _e = ge.length,
    ve = (0, X.useMemo)(() => {
      for (let e = p + 1; e < oe; e++) if (!ae[e].final_take_id) return e;
      for (let e = 0; e < p; e++) if (!ae[e].final_take_id) return e;
      return K && !K.final_take_id ? p : null;
    }, [ae, p, K, oe]),
    q = (K && x[K.id]) || `tts`,
    xe = (0, X.useCallback)(() => {
      (H.current && H.current.state !== `inactive` && H.current.stop(),
        (H.current = null),
        (ee.current &&=
          (ee.current.getTracks().forEach((e) => e.stop()), null)),
        (W.current &&= (clearInterval(W.current), null)),
        (ne.current &&= (ne.current.pause(), null)),
        (U.current = []),
        T(!1),
        D(0),
        V(!1));
    }, []),
    Ce = (0, X.useCallback)(() => {
      ((ne.current &&= (ne.current.pause(), null)),
        A && URL.revokeObjectURL(A),
        k(null),
        j(null),
        V(!1));
    }, [A]);
  ((0, X.useEffect)(
    () => () => {
      (xe(), A && URL.revokeObjectURL(A));
    },
    [],
  ),
    (0, X.useEffect)(() => {
      (xe(), Ce(), R(null));
    }, [p]));
  let Te = (0, X.useCallback)(
      (e, t) => {
        if (!r) return;
        let n = r.lines.map((n) => (n.id === e ? { ...n, ...t } : n));
        i({ ...r, lines: n });
      },
      [r, i],
    ),
    Ee = (0, X.useCallback)(
      async (t) => {
        if (!t.assigned_voice_id) return;
        let r = n.find((e) => e.id === t.assigned_voice_id);
        if (r) {
          if (!NQ(r)) {
            b(
              `"${r.name}" has no voice yet. Pick one from the library, design one, or clone one, in the Cast step.`,
            );
            return;
          }
          (g(!0), b(null));
          try {
            let n = await _n(),
              i = await fetch(
                `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/tts`,
                {
                  method: `POST`,
                  headers: n,
                  body: JSON.stringify({
                    line_id: t.id,
                    text: t.line_text,
                    voice_id: r.elevenlabs_voice_id,
                    emotion: t.emotion,
                    context: t.context,
                    ...(MQ(r) ?? {}),
                  }),
                },
              ),
              a = await i.json().catch(() => ({}));
            if (!i.ok || !a?.success) {
              b(
                Qt(
                  f,
                  {
                    success: a?.success,
                    error: a?.error ?? a?.detail,
                    error_code: a?.error_code,
                  },
                  {
                    title: `Could not generate this line`,
                    fallback: i.ok
                      ? `Could not generate this line`
                      : `Could not generate this line (${i.status})`,
                  },
                ),
              );
              return;
            }
            let o = {
                id: `take_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                audio_path: a.audio_path,
                duration: a.duration,
                is_final: !1,
                created_at: new Date().toISOString(),
                method: `tts`,
              },
              s = t.takes || [],
              c = [...s, o],
              l = s.length === 0 ? o.id : t.final_take_id;
            (Te(t.id, { takes: c, final_take_id: l, status: `recorded` }),
              window.dispatchEvent(new CustomEvent(`voice-assets-updated`)));
          } catch (e) {
            b(e instanceof Error ? e.message : `Failed to generate audio`);
          } finally {
            g(!1);
          }
        }
      },
      [e, n, Te, f],
    ),
    De = (0, X.useCallback)(async () => {
      if (_e === 0 || !r) return;
      (v(!0), b(null));
      let t = new Map(),
        a = 0,
        o = [],
        s = null,
        c = 0,
        l = !1;
      for (let r of ge) {
        let i = n.find((e) => e.id === r.assigned_voice_id);
        if (!NQ(i) || !i) continue;
        let u = null,
          d = !1;
        try {
          let n = await _n(),
            o = await fetch(
              `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/tts`,
              {
                method: `POST`,
                headers: n,
                body: JSON.stringify({
                  line_id: r.id,
                  text: r.line_text,
                  voice_id: i.elevenlabs_voice_id,
                  emotion: r.emotion,
                  context: r.context,
                  ...(MQ(i) ?? {}),
                }),
              },
            ),
            s = await o.json().catch(() => ({}));
          if (!o.ok || !s?.success)
            ((u =
              s?.error ||
              s?.detail ||
              (o.ok
                ? `Could not generate this line`
                : `Could not generate this line (${o.status})`)),
              (d = s?.error_code === `INSUFFICIENT_BALANCE`));
          else {
            let e = {
              id: `take_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
              audio_path: s.audio_path,
              duration: s.duration,
              is_final: !0,
              created_at: new Date().toISOString(),
              method: `tts`,
            };
            (t.set(r.id, { takes: [...r.takes, e], final_take_id: e.id }),
              (a += 1));
          }
        } catch (e) {
          u = e instanceof Error ? e.message : `Network error`;
        }
        if (u) {
          if ((o.push(u), u === s ? (c += 1) : ((c = 1), (s = u)), d)) {
            ((l = !0), Gt());
            break;
          }
          if (c >= 3) {
            l = !0;
            break;
          }
        }
      }
      if (t.size > 0) {
        let e = r.lines.map((e) => {
          let n = t.get(e.id);
          return n ? { ...e, ...n, status: `recorded` } : e;
        });
        (i({ ...r, lines: e }),
          window.dispatchEvent(new CustomEvent(`voice-assets-updated`)));
      }
      if (o.length > 0) {
        let e = l && s ? s : o[0],
          t = Math.max(0, _e - a - o.length),
          n =
            `${a} of ${_e} line${_e === 1 ? `` : `s`} generated · ${o.length} failed` +
            (t > 0 ? ` · ${t} not attempted` : ``) +
            (l ? ` (stopped early)` : ``) +
            (e ? `. ${e}` : ``);
        (b(n),
          f({
            title:
              a > 0
                ? `Some lines were not generated`
                : `No lines were generated`,
            description: n,
            variant: a > 0 ? `default` : `destructive`,
          }));
      }
      v(!1);
    }, [_e, ge, e, n, r, i, f]),
    Oe = (0, X.useCallback)(async () => {
      (R(null), Ce());
      try {
        let e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        ee.current = e;
        let t = MediaRecorder.isTypeSupported(`audio/webm`)
            ? `audio/webm`
            : `audio/ogg`,
          n = new MediaRecorder(e, { mimeType: t });
        ((H.current = n),
          (U.current = []),
          (n.ondataavailable = (e) => {
            e.data.size > 0 && U.current.push(e.data);
          }),
          (n.onstop = () => {
            let n = new Blob(U.current, { type: t }),
              r = URL.createObjectURL(n);
            (k(n),
              j(r),
              T(!1),
              (W.current &&= (clearInterval(W.current), null)),
              e.getTracks().forEach((e) => e.stop()),
              (ee.current = null));
          }),
          (n.onerror = () => {
            (R(`Recording failed unexpectedly`), xe());
          }),
          n.start(),
          T(!0),
          D(0),
          (W.current = setInterval(() => {
            D((e) => e + 1);
          }, 1e3)));
      } catch (e) {
        e instanceof DOMException && e.name === `NotAllowedError`
          ? R(
              `Microphone access denied. Please allow microphone access in your browser settings.`,
            )
          : e instanceof DOMException && e.name === `NotFoundError`
            ? R(
                `No microphone found. Please connect a microphone and try again.`,
              )
            : R(`Failed to start recording. Please check your microphone.`);
      }
    }, [Ce, xe]),
    ke = (0, X.useCallback)(() => {
      H.current && H.current.state === `recording` && H.current.stop();
    }, []),
    Ae = (0, X.useCallback)(() => {
      if (!A) return;
      if (ne.current) {
        (ne.current.pause(), (ne.current = null), V(!1));
        return;
      }
      let e = new Audio(A);
      ((ne.current = e),
        V(!0),
        e.addEventListener(`ended`, () => {
          (V(!1), (ne.current = null));
        }),
        e.addEventListener(`error`, () => {
          (V(!1), (ne.current = null));
        }),
        e.play().catch(() => {
          (V(!1), (ne.current = null));
        }));
    }, [A]),
    je = (0, X.useCallback)(async () => {
      if (!(!O || !K)) {
        (P(!0), R(null));
        try {
          let t = await _n();
          delete t[`Content-Type`];
          let n = new FormData();
          (n.append(`audio`, O, `recording.webm`),
            n.append(`line_id`, K.id),
            n.append(`asset_name`, `voice_line_${K.id}`));
          let i = await fetch(
            `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/upload`,
            { method: `POST`, headers: t, body: n },
          );
          if (!i.ok) throw Error(`Server error: ${i.status}`);
          let a = await i.json();
          if (!a.success) throw Error(a.error || `Upload failed`);
          let o = {
              id: `take_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
              audio_path: a.audio_path,
              duration: a.duration ?? E,
              is_final: !1,
              created_at: new Date().toISOString(),
              method: `recorded`,
            },
            s = K.takes || [],
            c = [...s, o],
            l = s.length === 0 ? o.id : K.final_take_id;
          if (de && ue) {
            I(!0);
            try {
              let t = MQ(ue),
                n = await _n(),
                r = await fetch(
                  `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/change`,
                  {
                    method: `POST`,
                    headers: n,
                    body: JSON.stringify({
                      audio_path: a.audio_path,
                      voice_id: ue.elevenlabs_voice_id,
                      line_id: K.id,
                      remove_noise: !0,
                      ...(t
                        ? { reference_audio_path: t.reference_audio_path }
                        : {}),
                    }),
                  },
                ),
                i = await r.json().catch(() => ({}));
              if (r.ok && i?.success) {
                let e = {
                  id: `take_vc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                  audio_path: i.audio_path || ``,
                  duration: i.duration,
                  is_final: !1,
                  created_at: new Date().toISOString(),
                  method: `voice_changed`,
                };
                ((c = [...c, e]), (l = e.id));
              } else {
                let e = Qt(
                  f,
                  {
                    success: i?.success,
                    error: i?.error ?? i?.detail,
                    error_code: i?.error_code,
                  },
                  {
                    title: `Could not convert to the cast voice`,
                    fallback: `Could not convert to the cast voice`,
                    variant: `default`,
                  },
                );
                R(`${e}. Your recording is saved as it was.`);
              }
            } catch {
              R(
                `Could not convert to the cast voice. Your recording is saved as it was.`,
              );
            } finally {
              I(!1);
            }
          }
          if (
            (Te(K.id, { takes: c, final_take_id: l, status: `recorded` }), r)
          ) {
            let t = {
              ...r,
              lines: r.lines.map((e) =>
                e.id === K.id
                  ? { ...e, takes: c, final_take_id: l, status: `recorded` }
                  : e,
              ),
            };
            try {
              let n = await _n();
              await fetch(
                `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/data`,
                {
                  method: `PUT`,
                  headers: n,
                  body: JSON.stringify({ voiceover_script: t }),
                },
              );
            } catch {}
          }
          (window.dispatchEvent(new CustomEvent(`voice-assets-updated`)), Ce());
        } catch (e) {
          R(e instanceof Error ? e.message : `Failed to upload recording`);
        } finally {
          P(!1);
        }
      }
    }, [O, K, e, E, Te, Ce, ue, r, f]),
    Me = (0, X.useCallback)(
      async (t) => {
        if (!(!K || !de || !ue)) {
          (I(!0), R(null));
          try {
            let n = MQ(ue),
              r = await _n(),
              i = await fetch(
                `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/change`,
                {
                  method: `POST`,
                  headers: r,
                  body: JSON.stringify({
                    audio_path: t.audio_path,
                    voice_id: ue.elevenlabs_voice_id,
                    line_id: K.id,
                    remove_noise: !0,
                    ...(n
                      ? { reference_audio_path: n.reference_audio_path }
                      : {}),
                  }),
                },
              ),
              a = await i.json().catch(() => ({}));
            if (!i.ok || !a?.success) {
              R(
                Qt(
                  f,
                  {
                    success: a?.success,
                    error: a?.error ?? a?.detail,
                    error_code: a?.error_code,
                  },
                  {
                    title: `Could not convert to the cast voice`,
                    fallback: i.ok
                      ? `Could not convert to the cast voice`
                      : `Could not convert to the cast voice (${i.status})`,
                  },
                ),
              );
              return;
            }
            let o = {
                id: `take_vc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                audio_path: a.audio_path || ``,
                duration: a.duration,
                is_final: !1,
                created_at: new Date().toISOString(),
                method: `voice_changed`,
              },
              s = [...(K.takes || []), o];
            (Te(K.id, { takes: s }),
              window.dispatchEvent(new CustomEvent(`voice-assets-updated`)));
          } catch (e) {
            R(
              e instanceof Error
                ? e.message
                : `Could not convert to the cast voice`,
            );
          } finally {
            I(!1);
          }
        }
      },
      [K, ue, e, Te, f],
    ),
    Ne = (0, X.useCallback)(
      (e, t) => {
        let n = ae.find((t) => t.id === e);
        if (!n) return;
        let r = n.takes.map((e) => ({ ...e, is_final: e.id === t }));
        Te(e, { takes: r, final_take_id: t, status: `final` });
      },
      [ae, Te],
    ),
    Pe = (0, X.useCallback)(
      (e, t) => {
        ie();
        let n = ae.find((t) => t.id === e);
        if (!n) return;
        let r = n.takes.filter((e) => e.id !== t),
          i = n.final_take_id === t;
        Te(e, {
          takes: r,
          final_take_id: i ? (r[0]?.id ?? void 0) : n.final_take_id,
          status: r.length === 0 ? `pending` : i ? `recorded` : n.status,
        });
      },
      [ae, Te, ie],
    ),
    Fe = (0, X.useCallback)(
      (e) => {
        (ie(), b(null), m(Math.max(0, Math.min(e, oe - 1))));
      },
      [oe, ie],
    ),
    Ie = (0, X.useCallback)(() => Fe(p + 1), [Fe, p]),
    Le = (0, X.useCallback)(() => Fe(p - 1), [Fe, p]),
    Re = (0, X.useCallback)(() => {
      ve != null && Fe(ve);
    }, [ve, Fe]);
  return !r || oe === 0
    ? (0, Z.jsx)(`div`, {
        className: `p-4`,
        children: (0, Z.jsxs)(`div`, {
          className: `py-10 px-4 text-center border border-dashed border-border/50 rounded-lg`,
          children: [
            (0, Z.jsx)(vs, {
              className: `h-6 w-6 text-muted-foreground/20 mx-auto mb-2`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-muted-foreground/60`,
              children: `Nothing to record yet.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground/40 mt-1 mb-4`,
              children: `Your cast needs lines before you can give them a voice.`,
            }),
            o &&
              (0, Z.jsxs)(S, {
                size: `sm`,
                variant: `outline`,
                onClick: o,
                className: `min-h-[40px] text-xs px-3`,
                children: [
                  (0, Z.jsx)(zt, { className: `h-3.5 w-3.5 mr-1.5` }),
                  `Go to the script`,
                ],
              }),
          ],
        }),
      })
    : (0, Z.jsxs)(`div`, {
        className: `p-4 space-y-5`,
        children: [
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-3`,
                children: [
                  (0, Z.jsx)(vs, { className: `h-3.5 w-3.5 text-primary` }),
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                    children: `Recording`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded ml-auto`,
                    children: [he, `/`, oe, ` recorded`],
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, {
                className: `h-1.5 bg-secondary rounded-full overflow-hidden`,
                children: (0, Z.jsx)(`div`, {
                  className: `h-full bg-emerald-500/70 rounded-full transition-all duration-300`,
                  style: { width: `${oe > 0 ? (he / oe) * 100 : 0}%` },
                }),
              }),
            ],
          }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          K &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-3`,
                  children: [
                    (0, Z.jsxs)(`span`, {
                      className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                      children: [`Line `, p + 1, ` of `, oe],
                    }),
                    le &&
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-foreground/70 font-medium ml-auto min-w-0 truncate`,
                        title: le.name,
                        children: le.name,
                      }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 mb-2`,
                  children: [
                    (0, Z.jsx)(a$, { emotion: K.emotion }),
                    (0, Z.jsx)(o$, { context: K.context }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `p-3 rounded-lg border border-border/60 bg-secondary/20 mb-3`,
                  children: (0, Z.jsx)(`p`, {
                    className: `text-sm text-foreground/80 leading-relaxed`,
                    children:
                      K.line_text ||
                      (0, Z.jsx)(`span`, {
                        className: `text-muted-foreground/40 italic`,
                        children: `Empty line`,
                      }),
                  }),
                }),
                ue
                  ? de
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs text-muted-foreground/60`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `text-muted-foreground/40`,
                            children: `Spoken by`,
                          }),
                          (0, Z.jsx)(`span`, {
                            className: `text-foreground/70 font-medium`,
                            children: ue.name,
                          }),
                        ],
                      })
                    : (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs text-amber-400/70`,
                        children: [
                          (0, Z.jsx)(te, { className: `h-3 w-3 shrink-0` }),
                          (0, Z.jsxs)(`span`, {
                            children: [
                              `"`,
                              ue.name,
                              `" has no voice yet. Pick one from the library, design one, or clone one, in the Cast step.`,
                            ],
                          }),
                        ],
                      })
                  : (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-xs text-amber-400/70`,
                      children: [
                        (0, Z.jsx)(te, { className: `h-3 w-3 shrink-0` }),
                        (0, Z.jsx)(`span`, {
                          children: `This character has no voice yet. Pick one in the Script step.`,
                        }),
                      ],
                    }),
              ],
            }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          K &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `mb-2 flex items-center gap-2`,
                  children: [
                    q === `tts`
                      ? (0, Z.jsx)(Nr, {
                          className: `h-3.5 w-3.5 text-primary`,
                        })
                      : (0, Z.jsx)(vs, {
                          className: `h-3.5 w-3.5 text-red-400`,
                        }),
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                      children: `New Take`,
                    }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `mb-3`,
                  children: (0, Z.jsx)(c$, {
                    mode: q,
                    onChange: (e) => {
                      (C((t) => ({ ...t, [K.id]: e })),
                        e === `tts` && (xe(), Ce()),
                        R(null),
                        b(null));
                    },
                    disabled: w || h || M,
                  }),
                }),
                y &&
                  q === `tts` &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
                    children: [
                      (0, Z.jsx)(te, { className: `h-4 w-4 shrink-0` }),
                      (0, Z.jsx)(`span`, { children: y }),
                    ],
                  }),
                L &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
                    children: [
                      (0, Z.jsx)(te, { className: `h-4 w-4 shrink-0` }),
                      (0, Z.jsx)(`span`, { children: L }),
                    ],
                  }),
                q === `tts`
                  ? (0, Z.jsx)(`div`, {
                      title: fe ?? void 0,
                      children: (0, Z.jsx)($t, {
                        onClick: () => Ee(K),
                        className: `w-full disabled:bg-muted disabled:text-muted-foreground`,
                        disabled: !de || h || _,
                        cost: l,
                        label: `Generate line`,
                        icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
                        isLoading: h,
                        loadingText: `Generating the line...`,
                        tooltip:
                          fe ??
                          `Say this line in ${ue?.name ?? `the assigned voice`}`,
                        checkBalance: !0,
                      }),
                    })
                  : (0, Z.jsxs)(`div`, {
                      className: `space-y-3`,
                      children: [
                        !w &&
                          !O &&
                          (0, Z.jsxs)(S, {
                            onClick: Oe,
                            className: `w-full h-10 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30`,
                            variant: `outline`,
                            children: [
                              (0, Z.jsx)(we, {
                                className: `h-4 w-4 mr-2 fill-red-400 text-red-400`,
                              }),
                              `Start Recording`,
                            ],
                          }),
                        w &&
                          (0, Z.jsxs)(`div`, {
                            className: `space-y-3`,
                            children: [
                              (0, Z.jsxs)(`div`, {
                                className: `flex items-center justify-center gap-3 p-4 rounded-lg border border-red-500/30 bg-red-500/5`,
                                children: [
                                  (0, Z.jsx)(`div`, {
                                    className: `h-3 w-3 rounded-full bg-red-500 animate-pulse`,
                                  }),
                                  (0, Z.jsx)(`span`, {
                                    className: `text-sm font-mono text-red-400`,
                                    children: r$(E),
                                  }),
                                ],
                              }),
                              (0, Z.jsxs)(S, {
                                onClick: ke,
                                className: `w-full h-10 bg-card hover:bg-card/80 text-foreground border border-border`,
                                variant: `outline`,
                                children: [
                                  (0, Z.jsx)(Fs, {
                                    className: `h-3.5 w-3.5 mr-2 fill-current`,
                                  }),
                                  `Stop Recording`,
                                ],
                              }),
                            ],
                          }),
                        O &&
                          !w &&
                          (0, Z.jsxs)(`div`, {
                            className: `space-y-3`,
                            children: [
                              (0, Z.jsxs)(`div`, {
                                className: `flex items-center gap-2 p-3 rounded-lg border border-border/60 bg-card/30`,
                                children: [
                                  (0, Z.jsx)(bQ, {
                                    label: z
                                      ? `Pause your recording`
                                      : `Play your recording`,
                                    tone: `primary`,
                                    active: z,
                                    onClick: Ae,
                                    discClassName: `rounded-full`,
                                    children: z
                                      ? (0, Z.jsx)(N, {
                                          className: `h-3.5 w-3.5`,
                                        })
                                      : (0, Z.jsx)(cn, {
                                          className: `h-3.5 w-3.5 ml-0.5`,
                                        }),
                                  }),
                                  (0, Z.jsx)(`span`, {
                                    className: `text-xs text-muted-foreground/60 font-mono`,
                                    children: r$(E),
                                  }),
                                  (0, Z.jsx)(`span`, {
                                    className: `text-[10px] text-muted-foreground/40 flex-1`,
                                    children: `Your recording`,
                                  }),
                                ],
                              }),
                              (0, Z.jsxs)(`div`, {
                                className: `flex flex-wrap gap-2`,
                                children: [
                                  (0, Z.jsx)($t, {
                                    onClick: je,
                                    disabled: M || F,
                                    cost: de ? d : 0,
                                    label: de
                                      ? `Keep & convert`
                                      : `Keep this take`,
                                    icon: (0, Z.jsx)(ye, {
                                      className: `h-3.5 w-3.5`,
                                    }),
                                    isLoading: M || F,
                                    loadingText: F
                                      ? `Converting...`
                                      : `Saving...`,
                                    tooltip: de
                                      ? `Save this recording, then say it again in ${ue?.name}`
                                      : `Save this recording as a take`,
                                    checkBalance: !1,
                                    className: `flex-1 min-w-[150px] h-10 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30`,
                                    variant: `outline`,
                                    size: `sm`,
                                  }),
                                  (0, Z.jsxs)(S, {
                                    onClick: () => {
                                      (Ce(), R(null));
                                    },
                                    disabled: M,
                                    variant: `outline`,
                                    size: `sm`,
                                    className: `h-10`,
                                    children: [
                                      (0, Z.jsx)(ln, {
                                        className: `h-3.5 w-3.5 mr-1.5`,
                                      }),
                                      `Re-record`,
                                    ],
                                  }),
                                ],
                              }),
                              !de &&
                                (0, Z.jsx)(`p`, {
                                  className: `text-[10px] text-muted-foreground/50`,
                                  children: `Saved as your own recording. Give this role a voice in the Cast step to convert it.`,
                                }),
                            ],
                          }),
                      ],
                    }),
              ],
            }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          K &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-3`,
                  children: [
                    (0, Z.jsx)(B, { className: `h-3.5 w-3.5 text-primary` }),
                    (0, Z.jsx)(`span`, {
                      className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                      children: `Takes`,
                    }),
                    K.takes.length > 0 &&
                      (0, Z.jsxs)(`span`, {
                        className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded ml-auto`,
                        children: [
                          K.takes.length,
                          ` take`,
                          K.takes.length === 1 ? `` : `s`,
                        ],
                      }),
                  ],
                }),
                K.takes.length === 0
                  ? (0, Z.jsx)(`div`, {
                      className: `py-6 text-center border border-dashed border-border/50 rounded-lg`,
                      children: (0, Z.jsx)(`p`, {
                        className: `text-xs text-muted-foreground/40`,
                        children: `No takes yet. Generate one above, or record it yourself.`,
                      }),
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `space-y-1.5 max-h-[260px] overflow-y-auto scrollbar-themed pr-1`,
                      children: K.takes.map((t) =>
                        (0, Z.jsxs)(
                          `div`,
                          {
                            className: `space-y-1`,
                            children: [
                              (0, Z.jsx)(s$, {
                                take: t,
                                isFinal: K.final_take_id === t.id,
                                isPlaying: G === t.id,
                                sessionId: e,
                                onPlay: () => re(t.id, i$(e, t.audio_path)),
                                onSelect: () => Ne(K.id, t.id),
                                onDelete: () => Pe(K.id, t.id),
                              }),
                              de &&
                                ue &&
                                (0, Z.jsx)($t, {
                                  onClick: () => Me(t),
                                  disabled: F,
                                  cost: d,
                                  label: `Say it as ${ue.name}`,
                                  icon: (0, Z.jsx)(ln, {
                                    className: `h-2.5 w-2.5`,
                                  }),
                                  isLoading: F,
                                  loadingText: `Converting...`,
                                  tooltip: `Redo this take in ${ue.name}, keeping your delivery`,
                                  checkBalance: !0,
                                  variant: `ghost`,
                                  size: `sm`,
                                  className: `ml-8 min-h-[40px] px-1.5 text-[10px] text-purple-400/70 hover:text-purple-400 hover:bg-purple-500/5`,
                                }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    }),
              ],
            }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          (0, Z.jsxs)(`div`, {
            children: [
              (0, Z.jsx)(`div`, {
                className: `flex items-center gap-2 mb-3`,
                children: (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                  children: `Navigate`,
                }),
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-3`,
                children: [
                  (0, Z.jsx)(S, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: Le,
                    disabled: p <= 0,
                    title: `Previous line`,
                    "aria-label": `Previous line`,
                    className: `h-10 w-10 p-0 shrink-0`,
                    children: (0, Z.jsx)(be, { className: `h-3.5 w-3.5` }),
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `flex-1 flex items-center justify-center gap-1.5`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-muted-foreground/50`,
                        children: `Line`,
                      }),
                      (0, Z.jsx)(`input`, {
                        type: `number`,
                        min: 1,
                        max: oe,
                        value: p + 1,
                        onChange: (e) => {
                          let t = parseInt(e.target.value, 10);
                          isNaN(t) || Fe(t - 1);
                        },
                        className: `w-12 h-7 bg-card border border-border rounded px-1.5 text-xs text-center text-foreground/70 focus:outline-none focus:border-primary/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `text-xs text-muted-foreground/50`,
                        children: [`of `, oe],
                      }),
                    ],
                  }),
                  (0, Z.jsx)(S, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: Ie,
                    disabled: p >= oe - 1,
                    title: `Next line`,
                    "aria-label": `Next line`,
                    className: `h-10 w-10 p-0 shrink-0`,
                    children: (0, Z.jsx)(Se, { className: `h-3.5 w-3.5` }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: [
                  (0, Z.jsxs)(S, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: Re,
                    disabled: ve == null || _,
                    className: `flex-1 min-w-[150px] h-10 text-xs`,
                    children: [
                      (0, Z.jsx)(Ns, { className: `h-3 w-3 mr-1.5` }),
                      `Next empty line`,
                    ],
                  }),
                  _e > 0 &&
                    (0, Z.jsx)($t, {
                      onClick: De,
                      className: `flex-1 min-w-[150px] h-10 text-xs`,
                      disabled: _ || h,
                      cost: l === null ? null : l * _e,
                      label: `Generate ${_e} line${_e === 1 ? `` : `s`}`,
                      icon: (0, Z.jsx)(Nr, { className: `h-3 w-3` }),
                      isLoading: _,
                      loadingText: `Generating lines...`,
                      tooltip: `Generate the ${_e} remaining line${_e === 1 ? `` : `s`} that already have a voice`,
                      checkBalance: !0,
                      variant: `outline`,
                      size: `sm`,
                    }),
                ],
              }),
            ],
          }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3 text-xs text-muted-foreground/50`,
            children: [
              (0, Z.jsxs)(`span`, { children: [he, ` recorded`] }),
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground/20`,
                children: `|`,
              }),
              (0, Z.jsxs)(`span`, { children: [me, ` remaining`] }),
              me === 0 &&
                oe > 0 &&
                (0, Z.jsxs)(`span`, {
                  className: `ml-auto flex items-center gap-1 text-emerald-400/70`,
                  children: [
                    (0, Z.jsx)(ye, { className: `h-3.5 w-3.5` }),
                    `Every line has a take`,
                  ],
                }),
            ],
          }),
        ],
      });
}
