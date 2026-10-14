// assets__Create-ea24k1TY 234 — classname
// Lines 79377-79629 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Jde = ({ sessionId: e, asset: t, voiceCast: n }) => {
  let r = sn(`op:voice_change`),
    [i, a] = (0, X.useState)(``),
    [o, s] = (0, X.useState)(!1),
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(null),
    [f, p] = (0, X.useState)(null),
    m = n.find((e) => e.id === i) ?? null;
  (0, X.useEffect)(() => {
    (d(null), p(null));
  }, [t?.asset_name, t?.name, t?.id]);
  let h = (0, X.useCallback)(async () => {
    if (!t || !m || !_Q(m) || !e || c) return;
    let n = Kde(t),
      r = gQ(m);
    (l(!0), p(null));
    try {
      let i = await An(),
        a = await fetch(
          `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/voices/change`,
          {
            method: `POST`,
            headers: i,
            body: JSON.stringify({
              audio_path: n,
              voice_id: m.elevenlabs_voice_id,
              line_id: t.asset_name || t.id || `sound_editor`,
              remove_noise: o,
              ...(r ? { reference_audio_path: r.reference_audio_path } : {}),
            }),
          },
        );
      if (!a.ok) p(`Voice change failed: ${a.status}`);
      else {
        let t = await a.json();
        if (!t.success) p(t.error || `Voice change failed`);
        else if (t.audio_path) {
          let n = t.audio_path.split(`/`).pop() || t.audio_path,
            r = `${Mn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${n}`;
          d(r);
        }
      }
    } catch (e) {
      (console.error(`Voice change failed:`, e),
        p(e instanceof Error ? e.message : `Voice change failed`));
    } finally {
      l(!1);
    }
  }, [t, m, o, e, c]);
  return tt(t)
    ? (0, Z.jsxs)(`div`, {
        className: `flex h-full flex-col gap-4 overflow-y-auto bg-background p-4 text-foreground`,
        children: [
          f &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 rounded-md border border-red-700/30 bg-red-950/40 px-3 py-2`,
              children: [
                (0, Z.jsx)(Tn, {
                  className: `h-3.5 w-3.5 text-red-400 flex-shrink-0`,
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-[11px] text-red-300`,
                  children: f,
                }),
              ],
            }),
          (0, Z.jsxs)(`section`, {
            className: `rounded-lg border border-amber-700/30 bg-[#1a1710] p-3.5`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `mb-1 flex items-center gap-2`,
                children: [
                  (0, Z.jsx)(Ao, { className: `h-4 w-4 text-amber-400` }),
                  (0, Z.jsx)(`h3`, {
                    className: `text-sm font-semibold text-amber-300/90`,
                    children: `Voice Changer`,
                  }),
                ],
              }),
              (0, Z.jsxs)(`p`, {
                className: `mb-3 text-[11px] text-gray-500`,
                children: [
                  `Re-perform`,
                  ` `,
                  (0, Z.jsx)(`span`, {
                    className: `text-gray-300`,
                    children: t ? qde(t) : `this line`,
                  }),
                  ` `,
                  `in a different cast voice. Produces a transformed copy you can preview below.`,
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `space-y-2.5`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    children: [
                      (0, Z.jsx)(`label`, {
                        className: `mb-1 block text-[10px] text-muted-foreground/60`,
                        children: `Target Voice`,
                      }),
                      (0, Z.jsxs)(`select`, {
                        value: i,
                        onChange: (e) => a(e.target.value),
                        className: `h-8 w-full rounded border border-gray-600/30 bg-gray-800/50 px-2 text-xs text-gray-300 focus:border-amber-500/50 focus:outline-none`,
                        children: [
                          (0, Z.jsx)(`option`, {
                            value: ``,
                            children: `Select a voice…`,
                          }),
                          n.filter(_Q).map((e) =>
                            (0, Z.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [e.name, ` · `, sQ(e.source)],
                              },
                              e.id,
                            ),
                          ),
                          n.length === 0 &&
                            (0, Z.jsx)(`option`, {
                              value: ``,
                              disabled: !0,
                              children: `No voices in cast — add voices in Voice Panel`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, Z.jsxs)(`label`, {
                    className: `flex items-center gap-2 ${gQ(m) ? `opacity-50` : `cursor-pointer`}`,
                    title: gQ(m) ? `Not available for a cloned voice` : void 0,
                    children: [
                      (0, Z.jsx)(`input`, {
                        type: `checkbox`,
                        checked: o,
                        disabled: !!gQ(m),
                        onChange: (e) => s(e.target.checked),
                        className: `h-3.5 w-3.5 rounded border-gray-600 bg-gray-800 text-amber-500 focus:ring-amber-500/30`,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-xs text-muted-foreground`,
                        children: `Remove background noise`,
                      }),
                    ],
                  }),
                  (0, Z.jsx)(an, {
                    onClick: () => {
                      (d(null), h());
                    },
                    disabled: !i || c,
                    cost: r,
                    label: `Transform`,
                    icon: (0, Z.jsx)(xn, {
                      className: `h-3.5 w-3.5 ${c ? `animate-spin` : ``}`,
                    }),
                    isLoading: c,
                    loadingText: `Transforming…`,
                    checkBalance: !0,
                    tooltip: `Transform this voice line into the selected target voice`,
                    variant: `outline`,
                    className: `h-8 w-full text-xs`,
                  }),
                  u &&
                    (0, Z.jsxs)(`div`, {
                      className: `mt-2 rounded border border-emerald-500/30 bg-emerald-500/5 p-2`,
                      children: [
                        (0, Z.jsx)(`p`, {
                          className: `mb-1.5 text-[10px] text-emerald-400`,
                          children: `Transformed audio:`,
                        }),
                        (0, Z.jsx)(`audio`, {
                          controls: !0,
                          className: `h-7 w-full`,
                          src: u,
                          preload: `auto`,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      })
    : (0, Z.jsx)(`div`, {
        className: `flex h-full items-center justify-center bg-background p-6 text-center text-foreground`,
        children: (0, Z.jsxs)(`div`, {
          className: `max-w-xs`,
          children: [
            (0, Z.jsx)(Ao, { className: `mx-auto mb-3 h-8 w-8 text-gray-700` }),
            (0, Z.jsx)(`p`, {
              className: `text-sm text-gray-500`,
              children: `The Voice Changer is available for voice lines only.`,
            }),
            (0, Z.jsx)(`p`, {
              className: `mt-1 text-[11px] text-gray-600`,
              children: `Select a voice line to transform it into a different cast voice.`,
            }),
          ],
        }),
      });
};
function G2(e) {
  if (!e) return `original`;
  if (e.mixdown_stale) return `edited`;
  if (e.mixdown_path) return `baked`;
  let t = e.mix_state;
  return t && t.tracks.some((e) => e.clips.length > 0) ? `edited` : `original`;
}
function K2(e, t) {
  return { ...e, tracks: e.tracks.map(t) };
}
function q2(e, t, n) {
  return K2(e, (e) => (e.id === t ? { ...e, ...n } : e));
}
function J2(e, t, n) {
  return K2(e, (e) => (e.id === t ? { ...e, effects: n(e.effects) } : e));
}
function Y2(e, t, n, r) {
  return K2(e, (e) =>
    e.id === t
      ? { ...e, clips: e.clips.map((e) => (e.id === n ? { ...e, ...r } : e)) }
      : e,
  );
}
var X2 = (e, t) => [...e, X0(t)],
  Z2 = (e, t, n) =>
    e.map((e) => (e.id === t ? { ...e, params: { ...e.params, ...n } } : e)),
  Q2 = (e, t) => e.map((e) => (e.id === t ? { ...e, enabled: !e.enabled } : e)),
  $2 = (e, t) => e.filter((e) => e.id !== t),
  e4 = (e, t, n) => {
    if (t === n || t < 0 || n < 0 || t >= e.length || n >= e.length) return e;
    let r = e.slice(),
      [i] = r.splice(t, 1);
    return (r.splice(n, 0, i), r);
  },
  Yde = 80,
  Xde = 10,
  Zde = 400,
  t4 = {
    activeMix: null,
    selectedMixAssetId: null,
    selectedTrackId: null,
    selectedClipId: null,
    pxPerSec: Yde,
    isDirty: !1,
    mixBakeStatus: `original`,
  };
function n4(e, t) {
  return e ? { activeMix: t(e), isDirty: !0 } : {};
}
