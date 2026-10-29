// Create-CEn7EAZs 235 — classname
// Lines 79893-80156 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var wfe = ({ sessionId: e, asset: t, assets: n, voiceCast: r }) => {
  let i = Fa(`op:tts_line`),
    [a, o] = (0, X.useState)(``),
    [s, c] = (0, X.useState)(``),
    [l, u] = (0, X.useState)(!1),
    [d, f] = (0, X.useState)(null),
    [p, m] = (0, X.useState)(``),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(null);
  (0, X.useEffect)(() => {
    (m(``), v(null));
  }, [t?.asset_name, t?.name, t?.id]);
  let y = (0, X.useCallback)(async () => {
      let t = r.find((e) => e.id === s);
      if (!(!a.trim() || !t || !NQ(t) || !e || l)) {
        (u(!0), f(null), v(null));
        try {
          let n = await _n(),
            r = await fetch(
              `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/tts`,
              {
                method: `POST`,
                headers: n,
                body: JSON.stringify({
                  line_id: `quick_${Date.now()}`,
                  text: a.trim(),
                  voice_id: t.elevenlabs_voice_id,
                  ...(MQ(t) ?? {}),
                }),
              },
            );
          if (!r.ok) v(`TTS generation failed: ${r.status}`);
          else {
            let e = await r.json();
            e.success && e.audio_path
              ? f({ audio_path: e.audio_path })
              : v(e.error || `TTS generation failed`);
          }
        } catch (e) {
          (console.error(`TTS generation failed:`, e),
            v(e instanceof Error ? e.message : `TTS generation failed`));
        } finally {
          u(!1);
        }
      }
    }, [a, s, r, e, l]),
    b = (0, X.useCallback)(async () => {
      if (!t || !p.trim() || !e || h) return;
      let r = t.asset_name || t.name,
        i = n.find((e) => e.asset_name === r || e.name === r)?.id || r,
        a = p.trim();
      (g(!0), v(null), m(``));
      try {
        let n = await Sn(e, i, wn(t.asset_type), {
          regenerate: !0,
          ...(a ? { feedback: a } : {}),
        });
        n.success ||
          (console.error(`Audio regeneration failed:`, n.error),
          v(n.error || `Regeneration failed`));
      } catch (e) {
        (console.error(`Audio regeneration failed:`, e),
          v(e instanceof Error ? e.message : `Regeneration failed`));
      } finally {
        g(!1);
      }
    }, [t, p, e, n, h]),
    x = nt(t);
  return (0, Z.jsxs)(`div`, {
    className: `flex h-full flex-col gap-4 overflow-y-auto bg-background p-4 text-foreground`,
    children: [
      _ &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-2 rounded-md border border-red-700/30 bg-red-950/40 px-3 py-2`,
          children: [
            (0, Z.jsx)(pn, {
              className: `h-3.5 w-3.5 text-red-400 flex-shrink-0`,
            }),
            (0, Z.jsx)(`span`, {
              className: `text-[11px] text-red-300`,
              children: _,
            }),
          ],
        }),
      (0, Z.jsxs)(`section`, {
        className: `rounded-lg border border-purple-700/30 bg-[#16131f] p-3.5`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `mb-1 flex items-center gap-2`,
            children: [
              (0, Z.jsx)(Nr, { className: `h-4 w-4 text-purple-400` }),
              (0, Z.jsx)(`h3`, {
                className: `text-sm font-semibold text-purple-200`,
                children: `Regenerate audio`,
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `mb-2.5 text-[11px] text-gray-500`,
            children: `Re-create the selected clip from a fresh description. Replaces the selected SFX / music asset with a newly generated version.`,
          }),
          t
            ? x
              ? (0, Z.jsxs)(`p`, {
                  className: `text-[11px] text-amber-400/80`,
                  children: [
                    U2(t),
                    ` is a voice line — use Quick TTS below to make new voice lines, or the Transform tab to change its voice.`,
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `mb-2 text-[11px] text-gray-400`,
                      children: [
                        `Editing:`,
                        ` `,
                        (0, Z.jsx)(`span`, {
                          className: `text-gray-200`,
                          children: U2(t),
                        }),
                      ],
                    }),
                    (0, Z.jsx)(`textarea`, {
                      value: p,
                      onChange: (e) => m(e.target.value),
                      onKeyDown: (e) => {
                        e.key === `Enter` &&
                          !e.shiftKey &&
                          (e.preventDefault(), b());
                      },
                      placeholder: `Describe the audio you want…`,
                      rows: 3,
                      className: `mb-2 w-full resize-none rounded border border-gray-600/30 bg-gray-800/50 px-2.5 py-1.5 text-xs text-gray-300 placeholder-gray-500 focus:border-purple-500/50 focus:outline-none`,
                    }),
                    (0, Z.jsxs)(`button`, {
                      type: `button`,
                      onClick: b,
                      disabled: !p.trim() || h,
                      className: `flex items-center gap-1.5 rounded bg-purple-600/30 px-3 py-1.5 text-xs text-purple-200 transition-colors hover:bg-purple-600/40 disabled:opacity-30`,
                      children: [
                        h
                          ? (0, Z.jsx)(J, {
                              className: `h-3.5 w-3.5 animate-spin`,
                            })
                          : (0, Z.jsx)(Nr, { className: `h-3.5 w-3.5` }),
                        `Generate`,
                      ],
                    }),
                  ],
                })
            : (0, Z.jsx)(`p`, {
                className: `text-[11px] text-gray-600`,
                children: `Select an audio asset to regenerate it.`,
              }),
        ],
      }),
      (0, Z.jsxs)(`section`, {
        className: `rounded-lg border border-amber-700/30 bg-[#1a1710] p-3.5`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `mb-1 flex items-center gap-2`,
            children: [
              (0, Z.jsx)(vs, { className: `h-4 w-4 text-amber-400` }),
              (0, Z.jsx)(`h3`, {
                className: `text-sm font-semibold text-amber-300/90`,
                children: `Quick TTS`,
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `mb-2.5 text-[11px] text-gray-500`,
            children: `Synthesize a brand-new voice line from text. Creates a new file — it does not edit the selected clip.`,
          }),
          (0, Z.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `mb-1 block text-[10px] text-muted-foreground/60`,
                    children: `Text`,
                  }),
                  (0, Z.jsx)(`textarea`, {
                    value: a,
                    onChange: (e) => o(e.target.value),
                    placeholder: `Type a voice line to generate…`,
                    rows: 3,
                    className: `w-full resize-none rounded border border-gray-600/30 bg-gray-800/50 px-2 py-1.5 text-xs text-gray-300 focus:border-amber-500/50 focus:outline-none`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                children: [
                  (0, Z.jsx)(`label`, {
                    className: `mb-1 block text-[10px] text-muted-foreground/60`,
                    children: `Voice`,
                  }),
                  (0, Z.jsxs)(`select`, {
                    value: s,
                    onChange: (e) => c(e.target.value),
                    className: `h-8 w-full rounded border border-gray-600/30 bg-gray-800/50 px-2 text-xs text-gray-300 focus:border-amber-500/50 focus:outline-none`,
                    children: [
                      (0, Z.jsx)(`option`, {
                        value: ``,
                        children: `Select a voice…`,
                      }),
                      r.filter(NQ).map((e) =>
                        (0, Z.jsxs)(
                          `option`,
                          {
                            value: e.id,
                            children: [e.name, ` · `, CQ(e.source)],
                          },
                          e.id,
                        ),
                      ),
                      r.length === 0 &&
                        (0, Z.jsx)(`option`, {
                          value: ``,
                          disabled: !0,
                          children: `No voices in cast — add voices in Voice Panel`,
                        }),
                    ],
                  }),
                ],
              }),
              (0, Z.jsx)($t, {
                onClick: y,
                disabled: !a.trim() || !s || l,
                cost: i,
                label: `Generate Voice Line`,
                icon: (0, Z.jsx)(vs, {
                  className: `h-3.5 w-3.5 ${l ? `animate-spin` : ``}`,
                }),
                isLoading: l,
                loadingText: `Generating…`,
                checkBalance: !0,
                tooltip: `Generate a new voice line using text-to-speech`,
                variant: `outline`,
                className: `h-8 w-full text-xs`,
              }),
              d &&
                (0, Z.jsx)(`div`, {
                  className: `mt-2`,
                  children: (0, Z.jsx)(`audio`, {
                    controls: !0,
                    src: `${yn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${d.audio_path.split(`/`).pop()}`,
                    className: `h-8 w-full`,
                  }),
                }),
            ],
          }),
        ],
      }),
    ],
  });
};
function Tfe(e) {
  return e.audio_path || e.sfx_path || e.path || e.name;
}
function Efe(e) {
  return (e.asset_name || e.name || `Untitled`).replace(/_/g, ` `);
}
