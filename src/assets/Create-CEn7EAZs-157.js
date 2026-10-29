// Create-CEn7EAZs 157 — current
// Lines 52451-52746 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function mH({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  gameDesignData: r,
  sessionDir: i,
  onUpdateDesignData: a,
}) {
  let o = ru(i),
    s = r?.audioDirection,
    c = Ia(Ua(e.id)),
    l = (0, X.useRef)(r);
  (0, X.useEffect)(() => {
    l.current = r;
  }, [r]);
  let [u, d] = (0, X.useState)(``),
    [f, p] = (0, X.useState)(`idle`),
    [m, h] = (0, X.useState)({});
  (0, X.useEffect)(() => {
    h({
      instrumentation: s?.instrumentation || ``,
      tone: s?.tone || ``,
      tempoPreference: s?.tempoPreference || ``,
      reverbLevel: s?.reverbLevel || ``,
      dynamicRange: s?.dynamicRange || ``,
      referenceMoods: s?.referenceMoods || [],
      notes: s?.notes || ``,
    });
  }, [s]);
  let g = e.state === `complete` || e.state === `outdated`,
    _ = e.state === `in-progress`,
    v = e.state === `available`,
    y = (0, X.useRef)(null),
    b = (0, X.useRef)(null),
    x = (0, X.useRef)(!1),
    S = (0, X.useRef)(null),
    C = (0, X.useCallback)(
      async (e) => {
        if (o) {
          p(`saving`);
          try {
            (await See(o, e)).success
              ? ((x.current = !1),
                p(`saved`),
                (b.current = setTimeout(() => p(`idle`), 2e3)))
              : (p(`error`), (b.current = setTimeout(() => p(`idle`), 3e3)));
          } catch {
            (p(`error`), (b.current = setTimeout(() => p(`idle`), 3e3)));
          }
        }
      },
      [o],
    ),
    w = (0, X.useCallback)(
      (e) => {
        ((x.current = !0),
          (S.current = { ...(S.current ?? {}), ...e }),
          y.current && clearTimeout(y.current),
          (y.current = setTimeout(() => {
            let e = S.current;
            ((S.current = null), e && C(e));
          }, 500)));
      },
      [C],
    ),
    T = (0, X.useCallback)(async () => {
      if (x.current && y.current) {
        (clearTimeout(y.current), (y.current = null));
        let e = S.current;
        e && ((S.current = null), await C(e));
      }
    }, [C]);
  (0, X.useEffect)(
    () => () => {
      (y.current && clearTimeout(y.current),
        b.current && clearTimeout(b.current));
    },
    [],
  );
  let E = (0, X.useCallback)(
      (e) => {
        let t = l.current;
        a && t && a({ ...t, audioDirection: { ...t.audioDirection, ...e } });
      },
      [a],
    ),
    D = (0, X.useCallback)(
      (e, t, n) => {
        (h((t) => ({ ...t, [e]: n })), w({ [t]: n }), E({ [e]: n }));
      },
      [w, E],
    ),
    O = (0, X.useCallback)(
      (e) => {
        (h((t) => ({ ...t, referenceMoods: e })),
          C({ reference_moods: e }),
          E({ referenceMoods: e }));
      },
      [C, E],
    ),
    k = (0, X.useCallback)(
      (e) => {
        (h((t) => ({ ...t, notes: e })), C({ notes: e }), E({ notes: e }));
      },
      [C, E],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 overflow-hidden`,
    children: [
      v &&
        !g &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`h4`, {
                  className: `text-sm font-semibold text-foreground/80 mb-2 flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(Xr, { className: `h-3 w-3` }),
                    `Sound Preferences`,
                  ],
                }),
                (0, Z.jsx)(`textarea`, {
                  value: u,
                  onChange: (e) => d(e.target.value),
                  className: `w-full h-20 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
                  placeholder: `Describe the sound you want (e.g., 'warm analog synths, slow dread', 'chiptune, fast and bright')...`,
                  disabled: t,
                }),
              ],
            }),
            (0, Z.jsx)($t, {
              onClick: () => {
                let t = u.trim() || `Define the audio direction for this game`;
                (n?.(e.id, t), d(``));
              },
              className: `w-full`,
              disabled: t,
              cost: c,
              label: `Generate Audio Direction`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: _,
              loadingText: `Defining audio direction...`,
              tooltip: `Define the sonic identity that steers music and SFX generation`,
              checkBalance: !0,
            }),
          ],
        }),
      _ &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-center gap-2 text-sm text-primary py-12`,
          children: [
            (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
            `Defining audio direction...`,
          ],
        }),
      g &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            fH.map(
              ({ key: e, saveKey: n, label: r, icon: i, placeholder: a }) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    className: `mb-4`,
                    children: [
                      (0, Z.jsxs)(`span`, {
                        className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-1.5 flex items-center gap-1.5`,
                        children: [(0, Z.jsx)(i, { className: `h-3 w-3` }), r],
                      }),
                      (0, Z.jsx)(pH, {
                        value: m[e] || ``,
                        onCommit: (t) => D(e, n, t),
                        placeholder: a,
                        disabled: t,
                      }),
                    ],
                  },
                  e,
                ),
            ),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsxs)(`div`, {
              className: `mb-4`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
                  children: `Reference Moods`,
                }),
                (0, Z.jsx)(Xl, {
                  tags: m.referenceMoods || [],
                  onChange: O,
                  placeholder: `e.g., Blade Runner rain`,
                }),
              ],
            }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
                  children: `Notes`,
                }),
                (0, Z.jsx)(pH, {
                  value: m.notes || ``,
                  onCommit: k,
                  placeholder: `Motifs, what to avoid, per-scene contrasts...`,
                  disabled: t,
                }),
              ],
            }),
            (0, Z.jsx)(Yl, { status: f }),
            (0, Z.jsxs)(`div`, {
              className: `pt-2 border-t border-border mx-2 mt-4 space-y-2`,
              children: [
                (0, Z.jsx)(`textarea`, {
                  value: u,
                  onChange: (e) => d(e.target.value),
                  className: `w-full h-16 bg-card border border-border rounded-lg p-2.5 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
                  placeholder: `Describe changes to the sound (empty = full redesign)...`,
                  disabled: t,
                }),
                (0, Z.jsx)($t, {
                  variant: `outline`,
                  onClick: async () => {
                    (await T(),
                      u.trim()
                        ? n?.(e.id, u.trim())
                        : n?.(
                            e.id,
                            `Redesign the audio direction from scratch`,
                            { params: { regenerate: !0 } },
                          ),
                      d(``));
                  },
                  className: `w-full`,
                  disabled: t,
                  cost: c,
                  label: `Regenerate Direction`,
                  icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
                  tooltip: `Regenerate the audio direction with refinements`,
                  checkBalance: !0,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
var hH = Object.freeze({ sfx: `sfx_audio`, music: `music_audio` });
function gH(e, t, n) {
  let r = hH[e],
    i = t.filter((e) => e.asset_type === r);
  return i.length === 0
    ? n
        .filter((e) => e.asset_type === r)
        .map((e) => ({ ...e, hasAudio: !!(e.audio_path || e.sfx_path) }))
    : i.map((e) => {
        let t = n.find(
          (t) =>
            t.asset_name === e.asset_name ||
            t.name?.includes(e.asset_name?.replace(/\s+/g, `_`)),
        );
        return {
          id: t?.id || e.id,
          asset_name: e.asset_name,
          asset_type: e.asset_type,
          description: e.description || ``,
          audio_path: t?.audio_path || e.audio_path,
          sfx_path: t?.sfx_path || e.sfx_path,
          concept_art_path: t?.concept_art_path || e.concept_art_path,
          model_3d_path: t?.model_3d_path || e.model_3d_path,
          hasAudio: !!(
            t?.audio_path ||
            t?.sfx_path ||
            e.audio_path ||
            e.sfx_path
          ),
          name: t?.name || e.asset_name,
          path: t?.path,
          size: t?.size || 0,
          size_human: t?.size_human || ``,
          modified: t?.modified || 0,
          type: t?.type || `audio`,
          location: t?.location || `registry`,
          last_updated: t?.last_updated || ``,
          priority: e.priority || `medium`,
          format: e.format || `mp3`,
        };
      });
}
