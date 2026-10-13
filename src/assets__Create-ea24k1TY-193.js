// assets__Create-ea24k1TY 193 — classname
// Lines 64416-65507 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function qQ({
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
  let l = sn(`op:tts_line`),
    d = sn(`op:voice_change`),
    { toast: f } = u(),
    [p, m] = (0, X.useState)(0),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(null),
    [S, C] = (0, X.useState)({}),
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
    W = (0, X.useRef)([]),
    G = (0, X.useRef)(null),
    te = (0, X.useRef)(null),
    { playingId: K, play: ne, stop: re } = RQ(),
    ie = (0, X.useMemo)(() => (r ? zQ(r.lines) : []), [r]),
    ae = ie.length,
    [oe, se] = (0, X.useState)(0);
  if (s && s.seq !== oe) {
    se(s.seq);
    let e = ie.findIndex((e) => e.id === s.lineId);
    e >= 0 && m(e);
  }
  let q = ae > 0 ? ie[p] : null,
    ce = (0, X.useMemo)(
      () =>
        !q || !r
          ? null
          : (r.characters.find((e) => e.id === q.character_id) ?? null),
      [q, r],
    ),
    le = (0, X.useMemo)(
      () =>
        q?.assigned_voice_id
          ? (n.find((e) => e.id === q.assigned_voice_id) ?? null)
          : null,
      [q, n],
    ),
    ue = _Q(le),
    de = le
      ? ue
        ? null
        : `This role has no voice yet. Give it one in the Cast step.`
      : `Pick a voice for this character in the Script step first`,
    fe = (0, X.useMemo)(() => ie.filter((e) => !e.final_take_id), [ie]),
    pe = fe.length,
    me = ae - pe,
    he = (0, X.useMemo)(
      () =>
        fe.filter((e) =>
          e.assigned_voice_id
            ? _Q(n.find((t) => t.id === e.assigned_voice_id))
            : !1,
        ),
      [fe, n],
    ),
    ge = he.length,
    _e = (0, X.useMemo)(() => {
      for (let e = p + 1; e < ae; e++) if (!ie[e].final_take_id) return e;
      for (let e = 0; e < p; e++) if (!ie[e].final_take_id) return e;
      return q && !q.final_take_id ? p : null;
    }, [ie, p, q, ae]),
    be = (q && S[q.id]) || `tts`,
    xe = (0, X.useCallback)(() => {
      (H.current && H.current.state !== `inactive` && H.current.stop(),
        (H.current = null),
        (ee.current &&=
          (ee.current.getTracks().forEach((e) => e.stop()), null)),
        (G.current &&= (clearInterval(G.current), null)),
        (te.current &&= (te.current.pause(), null)),
        (W.current = []),
        T(!1),
        D(0),
        V(!1));
    }, []),
    Ce = (0, X.useCallback)(() => {
      ((te.current &&= (te.current.pause(), null)),
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
  let we = (0, X.useCallback)(
      (e, t) => {
        if (!r) return;
        let n = r.lines.map((n) => (n.id === e ? { ...n, ...t } : n));
        i({ ...r, lines: n });
      },
      [r, i],
    ),
    Te = (0, X.useCallback)(
      async (t) => {
        if (!t.assigned_voice_id) return;
        let r = n.find((e) => e.id === t.assigned_voice_id);
        if (r) {
          if (!_Q(r)) {
            b(
              `"${r.name}" has no voice yet. Pick one from the library, design one, or clone one, in the Cast step.`,
            );
            return;
          }
          (g(!0), b(null));
          try {
            let n = await An(),
              i = await fetch(
                `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/tts`,
                {
                  method: `POST`,
                  headers: n,
                  body: JSON.stringify({
                    line_id: t.id,
                    text: t.line_text,
                    voice_id: r.elevenlabs_voice_id,
                    emotion: t.emotion,
                    context: t.context,
                    ...(gQ(r) ?? {}),
                  }),
                },
              ),
              a = await i.json().catch(() => ({}));
            if (!i.ok || !a?.success) {
              b(
                cn(
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
            (we(t.id, { takes: c, final_take_id: l, status: `recorded` }),
              window.dispatchEvent(new CustomEvent(`voice-assets-updated`)));
          } catch (e) {
            b(e instanceof Error ? e.message : `Failed to generate audio`);
          } finally {
            g(!1);
          }
        }
      },
      [e, n, we, f],
    ),
    Ee = (0, X.useCallback)(async () => {
      if (ge === 0 || !r) return;
      (v(!0), b(null));
      let t = new Map(),
        a = 0,
        o = [],
        s = null,
        c = 0,
        l = !1;
      for (let r of he) {
        let i = n.find((e) => e.id === r.assigned_voice_id);
        if (!_Q(i) || !i) continue;
        let u = null,
          d = !1;
        try {
          let n = await An(),
            o = await fetch(
              `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/tts`,
              {
                method: `POST`,
                headers: n,
                body: JSON.stringify({
                  line_id: r.id,
                  text: r.line_text,
                  voice_id: i.elevenlabs_voice_id,
                  emotion: r.emotion,
                  context: r.context,
                  ...(gQ(i) ?? {}),
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
            ((l = !0), qt());
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
          t = Math.max(0, ge - a - o.length),
          n =
            `${a} of ${ge} line${ge === 1 ? `` : `s`} generated · ${o.length} failed` +
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
    }, [ge, he, e, n, r, i, f]),
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
          (W.current = []),
          (n.ondataavailable = (e) => {
            e.data.size > 0 && W.current.push(e.data);
          }),
          (n.onstop = () => {
            let n = new Blob(W.current, { type: t }),
              r = URL.createObjectURL(n);
            (k(n),
              j(r),
              T(!1),
              (G.current &&= (clearInterval(G.current), null)),
              e.getTracks().forEach((e) => e.stop()),
              (ee.current = null));
          }),
          (n.onerror = () => {
            (R(`Recording failed unexpectedly`), xe());
          }),
          n.start(),
          T(!0),
          D(0),
          (G.current = setInterval(() => {
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
      if (te.current) {
        (te.current.pause(), (te.current = null), V(!1));
        return;
      }
      let e = new Audio(A);
      ((te.current = e),
        V(!0),
        e.addEventListener(`ended`, () => {
          (V(!1), (te.current = null));
        }),
        e.addEventListener(`error`, () => {
          (V(!1), (te.current = null));
        }),
        e.play().catch(() => {
          (V(!1), (te.current = null));
        }));
    }, [A]),
    je = (0, X.useCallback)(async () => {
      if (!(!O || !q)) {
        (P(!0), R(null));
        try {
          let t = await An();
          delete t[`Content-Type`];
          let n = new FormData();
          (n.append(`audio`, O, `recording.webm`),
            n.append(`line_id`, q.id),
            n.append(`asset_name`, `voice_line_${q.id}`));
          let i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/upload`,
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
            s = q.takes || [],
            c = [...s, o],
            l = s.length === 0 ? o.id : q.final_take_id;
          if (ue && le) {
            I(!0);
            try {
              let t = gQ(le),
                n = await An(),
                r = await fetch(
                  `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/change`,
                  {
                    method: `POST`,
                    headers: n,
                    body: JSON.stringify({
                      audio_path: a.audio_path,
                      voice_id: le.elevenlabs_voice_id,
                      line_id: q.id,
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
                let e = cn(
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
            (we(q.id, { takes: c, final_take_id: l, status: `recorded` }), r)
          ) {
            let t = {
              ...r,
              lines: r.lines.map((e) =>
                e.id === q.id
                  ? { ...e, takes: c, final_take_id: l, status: `recorded` }
                  : e,
              ),
            };
            try {
              let n = await An();
              await fetch(
                `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/data`,
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
    }, [O, q, e, E, we, Ce, le, r, f]),
    Me = (0, X.useCallback)(
      async (t) => {
        if (!(!q || !ue || !le)) {
          (I(!0), R(null));
          try {
            let n = gQ(le),
              r = await An(),
              i = await fetch(
                `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/change`,
                {
                  method: `POST`,
                  headers: r,
                  body: JSON.stringify({
                    audio_path: t.audio_path,
                    voice_id: le.elevenlabs_voice_id,
                    line_id: q.id,
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
                cn(
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
              s = [...(q.takes || []), o];
            (we(q.id, { takes: s }),
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
      [q, le, e, we, f],
    ),
    Ne = (0, X.useCallback)(
      (e, t) => {
        let n = ie.find((t) => t.id === e);
        if (!n) return;
        let r = n.takes.map((e) => ({ ...e, is_final: e.id === t }));
        we(e, { takes: r, final_take_id: t, status: `final` });
      },
      [ie, we],
    ),
    Pe = (0, X.useCallback)(
      (e, t) => {
        re();
        let n = ie.find((t) => t.id === e);
        if (!n) return;
        let r = n.takes.filter((e) => e.id !== t),
          i = n.final_take_id === t;
        we(e, {
          takes: r,
          final_take_id: i ? (r[0]?.id ?? void 0) : n.final_take_id,
          status: r.length === 0 ? `pending` : i ? `recorded` : n.status,
        });
      },
      [ie, we, re],
    ),
    Fe = (0, X.useCallback)(
      (e) => {
        (re(), b(null), m(Math.max(0, Math.min(e, ae - 1))));
      },
      [ae, re],
    ),
    Ie = (0, X.useCallback)(() => Fe(p + 1), [Fe, p]),
    Le = (0, X.useCallback)(() => Fe(p - 1), [Fe, p]),
    Re = (0, X.useCallback)(() => {
      _e != null && Fe(_e);
    }, [_e, Fe]);
  return !r || ae === 0
    ? (0, Z.jsx)(`div`, {
        className: `p-4`,
        children: (0, Z.jsxs)(`div`, {
          className: `py-10 px-4 text-center border border-dashed border-border/50 rounded-lg`,
          children: [
            (0, Z.jsx)(Ao, {
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
              (0, Z.jsxs)(x, {
                size: `sm`,
                variant: `outline`,
                onClick: o,
                className: `min-h-[40px] text-xs px-3`,
                children: [
                  (0, Z.jsx)(Rt, { className: `h-3.5 w-3.5 mr-1.5` }),
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
                  (0, Z.jsx)(Ao, { className: `h-3.5 w-3.5 text-primary` }),
                  (0, Z.jsx)(`span`, {
                    className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                    children: `Recording`,
                  }),
                  (0, Z.jsxs)(`span`, {
                    className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded ml-auto`,
                    children: [me, `/`, ae, ` recorded`],
                  }),
                ],
              }),
              (0, Z.jsx)(`div`, {
                className: `h-1.5 bg-secondary rounded-full overflow-hidden`,
                children: (0, Z.jsx)(`div`, {
                  className: `h-full bg-emerald-500/70 rounded-full transition-all duration-300`,
                  style: { width: `${ae > 0 ? (me / ae) * 100 : 0}%` },
                }),
              }),
            ],
          }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          q &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-3`,
                  children: [
                    (0, Z.jsxs)(`span`, {
                      className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                      children: [`Line `, p + 1, ` of `, ae],
                    }),
                    ce &&
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-foreground/70 font-medium ml-auto min-w-0 truncate`,
                        title: ce.name,
                        children: ce.name,
                      }),
                  ],
                }),
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 mb-2`,
                  children: [
                    (0, Z.jsx)(UQ, { emotion: q.emotion }),
                    (0, Z.jsx)(WQ, { context: q.context }),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: `p-3 rounded-lg border border-border/60 bg-secondary/20 mb-3`,
                  children: (0, Z.jsx)(`p`, {
                    className: `text-sm text-foreground/80 leading-relaxed`,
                    children:
                      q.line_text ||
                      (0, Z.jsx)(`span`, {
                        className: `text-muted-foreground/40 italic`,
                        children: `Empty line`,
                      }),
                  }),
                }),
                le
                  ? ue
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs text-muted-foreground/60`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            className: `text-muted-foreground/40`,
                            children: `Spoken by`,
                          }),
                          (0, Z.jsx)(`span`, {
                            className: `text-foreground/70 font-medium`,
                            children: le.name,
                          }),
                        ],
                      })
                    : (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs text-amber-400/70`,
                        children: [
                          (0, Z.jsx)(U, { className: `h-3 w-3 shrink-0` }),
                          (0, Z.jsxs)(`span`, {
                            children: [
                              `"`,
                              le.name,
                              `" has no voice yet. Pick one from the library, design one, or clone one, in the Cast step.`,
                            ],
                          }),
                        ],
                      })
                  : (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-xs text-amber-400/70`,
                      children: [
                        (0, Z.jsx)(U, { className: `h-3 w-3 shrink-0` }),
                        (0, Z.jsx)(`span`, {
                          children: `This character has no voice yet. Pick one in the Script step.`,
                        }),
                      ],
                    }),
              ],
            }),
          (0, Z.jsx)(`div`, { className: `border-t border-border` }),
          q &&
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `mb-2 flex items-center gap-2`,
                  children: [
                    be === `tts`
                      ? (0, Z.jsx)(Yr, {
                          className: `h-3.5 w-3.5 text-primary`,
                        })
                      : (0, Z.jsx)(Ao, {
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
                  children: (0, Z.jsx)(KQ, {
                    mode: be,
                    onChange: (e) => {
                      (C((t) => ({ ...t, [q.id]: e })),
                        e === `tts` && (xe(), Ce()),
                        R(null),
                        b(null));
                    },
                    disabled: w || h || M,
                  }),
                }),
                y &&
                  be === `tts` &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
                    children: [
                      (0, Z.jsx)(U, { className: `h-4 w-4 shrink-0` }),
                      (0, Z.jsx)(`span`, { children: y }),
                    ],
                  }),
                L &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-red-400 mb-3`,
                    children: [
                      (0, Z.jsx)(U, { className: `h-4 w-4 shrink-0` }),
                      (0, Z.jsx)(`span`, { children: L }),
                    ],
                  }),
                be === `tts`
                  ? (0, Z.jsx)(`div`, {
                      title: de ?? void 0,
                      children: (0, Z.jsx)(an, {
                        onClick: () => Te(q),
                        className: `w-full disabled:bg-muted disabled:text-muted-foreground`,
                        disabled: !ue || h || _,
                        cost: l,
                        label: `Generate line`,
                        icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
                        isLoading: h,
                        loadingText: `Generating the line...`,
                        tooltip:
                          de ??
                          `Say this line in ${le?.name ?? `the assigned voice`}`,
                        checkBalance: !0,
                      }),
                    })
                  : (0, Z.jsxs)(`div`, {
                      className: `space-y-3`,
                      children: [
                        !w &&
                          !O &&
                          (0, Z.jsxs)(x, {
                            onClick: Oe,
                            className: `w-full h-10 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30`,
                            variant: `outline`,
                            children: [
                              (0, Z.jsx)(Se, {
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
                                    children: VQ(E),
                                  }),
                                ],
                              }),
                              (0, Z.jsxs)(x, {
                                onClick: ke,
                                className: `w-full h-10 bg-card hover:bg-card/80 text-foreground border border-border`,
                                variant: `outline`,
                                children: [
                                  (0, Z.jsx)(Zo, {
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
                                  (0, Z.jsx)(iQ, {
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
                                      : (0, Z.jsx)(bn, {
                                          className: `h-3.5 w-3.5 ml-0.5`,
                                        }),
                                  }),
                                  (0, Z.jsx)(`span`, {
                                    className: `text-xs text-muted-foreground/60 font-mono`,
                                    children: VQ(E),
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
                                  (0, Z.jsx)(an, {
                                    onClick: je,
                                    disabled: M || F,
                                    cost: ue ? d : 0,
                                    label: ue
                                      ? `Keep & convert`
                                      : `Keep this take`,
                                    icon: (0, Z.jsx)(ve, {
                                      className: `h-3.5 w-3.5`,
                                    }),
                                    isLoading: M || F,
                                    loadingText: F
                                      ? `Converting...`
                                      : `Saving...`,
                                    tooltip: ue
                                      ? `Save this recording, then say it again in ${le?.name}`
                                      : `Save this recording as a take`,
                                    checkBalance: !1,
                                    className: `flex-1 min-w-[150px] h-10 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30`,
                                    variant: `outline`,
                                    size: `sm`,
                                  }),
                                  (0, Z.jsxs)(x, {
                                    onClick: () => {
                                      (Ce(), R(null));
                                    },
                                    disabled: M,
                                    variant: `outline`,
                                    size: `sm`,
                                    className: `h-10`,
                                    children: [
                                      (0, Z.jsx)(xn, {
                                        className: `h-3.5 w-3.5 mr-1.5`,
                                      }),
                                      `Re-record`,
                                    ],
                                  }),
                                ],
                              }),
                              !ue &&
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
          q &&
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
                    q.takes.length > 0 &&
                      (0, Z.jsxs)(`span`, {
                        className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded ml-auto`,
                        children: [
                          q.takes.length,
                          ` take`,
                          q.takes.length === 1 ? `` : `s`,
                        ],
                      }),
                  ],
                }),
                q.takes.length === 0
                  ? (0, Z.jsx)(`div`, {
                      className: `py-6 text-center border border-dashed border-border/50 rounded-lg`,
                      children: (0, Z.jsx)(`p`, {
                        className: `text-xs text-muted-foreground/40`,
                        children: `No takes yet. Generate one above, or record it yourself.`,
                      }),
                    })
                  : (0, Z.jsx)(`div`, {
                      className: `space-y-1.5 max-h-[260px] overflow-y-auto scrollbar-themed pr-1`,
                      children: q.takes.map((t) =>
                        (0, Z.jsxs)(
                          `div`,
                          {
                            className: `space-y-1`,
                            children: [
                              (0, Z.jsx)(GQ, {
                                take: t,
                                isFinal: q.final_take_id === t.id,
                                isPlaying: K === t.id,
                                sessionId: e,
                                onPlay: () => ne(t.id, HQ(e, t.audio_path)),
                                onSelect: () => Ne(q.id, t.id),
                                onDelete: () => Pe(q.id, t.id),
                              }),
                              ue &&
                                le &&
                                (0, Z.jsx)(an, {
                                  onClick: () => Me(t),
                                  disabled: F,
                                  cost: d,
                                  label: `Say it as ${le.name}`,
                                  icon: (0, Z.jsx)(xn, {
                                    className: `h-2.5 w-2.5`,
                                  }),
                                  isLoading: F,
                                  loadingText: `Converting...`,
                                  tooltip: `Redo this take in ${le.name}, keeping your delivery`,
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
                  (0, Z.jsx)(x, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: Le,
                    disabled: p <= 0,
                    title: `Previous line`,
                    "aria-label": `Previous line`,
                    className: `h-10 w-10 p-0 shrink-0`,
                    children: (0, Z.jsx)(ye, { className: `h-3.5 w-3.5` }),
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
                        max: ae,
                        value: p + 1,
                        onChange: (e) => {
                          let t = parseInt(e.target.value, 10);
                          isNaN(t) || Fe(t - 1);
                        },
                        className: `w-12 h-7 bg-card border border-border rounded px-1.5 text-xs text-center text-foreground/70 focus:outline-none focus:border-primary/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `text-xs text-muted-foreground/50`,
                        children: [`of `, ae],
                      }),
                    ],
                  }),
                  (0, Z.jsx)(x, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: Ie,
                    disabled: p >= ae - 1,
                    title: `Next line`,
                    "aria-label": `Next line`,
                    className: `h-10 w-10 p-0 shrink-0`,
                    children: (0, Z.jsx)(De, { className: `h-3.5 w-3.5` }),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: [
                  (0, Z.jsxs)(x, {
                    size: `sm`,
                    variant: `outline`,
                    onClick: Re,
                    disabled: _e == null || _,
                    className: `flex-1 min-w-[150px] h-10 text-xs`,
                    children: [
                      (0, Z.jsx)(qo, { className: `h-3 w-3 mr-1.5` }),
                      `Next empty line`,
                    ],
                  }),
                  ge > 0 &&
                    (0, Z.jsx)(an, {
                      onClick: Ee,
                      className: `flex-1 min-w-[150px] h-10 text-xs`,
                      disabled: _ || h,
                      cost: l === null ? null : l * ge,
                      label: `Generate ${ge} line${ge === 1 ? `` : `s`}`,
                      icon: (0, Z.jsx)(Yr, { className: `h-3 w-3` }),
                      isLoading: _,
                      loadingText: `Generating lines...`,
                      tooltip: `Generate the ${ge} remaining line${ge === 1 ? `` : `s`} that already have a voice`,
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
              (0, Z.jsxs)(`span`, { children: [me, ` recorded`] }),
              (0, Z.jsx)(`span`, {
                className: `text-muted-foreground/20`,
                children: `|`,
              }),
              (0, Z.jsxs)(`span`, { children: [pe, ` remaining`] }),
              pe === 0 &&
                ae > 0 &&
                (0, Z.jsxs)(`span`, {
                  className: `ml-auto flex items-center gap-1 text-emerald-400/70`,
                  children: [
                    (0, Z.jsx)(ve, { className: `h-3.5 w-3.5` }),
                    `Every line has a take`,
                  ],
                }),
            ],
          }),
        ],
      });
}
