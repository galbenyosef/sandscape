// Create-CEn7EAZs 237 — activemix
// Lines 80410-80566 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var n4 = Ee((e) => ({
  ...e4,
  loadMix: (t, n, r) =>
    e({
      activeMix: t,
      selectedMixAssetId: n,
      selectedTrackId: t?.tracks[0]?.id ?? null,
      selectedClipId: null,
      isDirty: !1,
      mixBakeStatus: r,
    }),
  setMixName: (t) => e((e) => t4(e.activeMix, (e) => ({ ...e, name: t }))),
  setMixRole: (t) => e((e) => t4(e.activeMix, (e) => ({ ...e, mix_role: t }))),
  setMixLoop: (t) => e((e) => t4(e.activeMix, (e) => ({ ...e, loop: t }))),
  addTrack: (t) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        tracks: [...e.tracks, e2(t ?? `Track ${e.tracks.length + 1}`)],
      })),
    ),
  removeTrack: (t) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        tracks: e.tracks.filter((e) => e.id !== t),
      })),
    ),
  renameTrack: (t, n) =>
    e((e) => t4(e.activeMix, (e) => K2(e, t, { name: n }))),
  setTrackGain: (t, n) =>
    e((e) => t4(e.activeMix, (e) => K2(e, t, { gain_db: n }))),
  setTrackPan: (t, n) =>
    e((e) =>
      t4(e.activeMix, (e) => K2(e, t, { pan: Math.max(-1, Math.min(1, n)) })),
    ),
  toggleMute: (t) =>
    e((e) =>
      t4(e.activeMix, (e) =>
        G2(e, (e) => (e.id === t ? { ...e, mute: !e.mute } : e)),
      ),
    ),
  toggleSolo: (t) =>
    e((e) =>
      t4(e.activeMix, (e) =>
        G2(e, (e) => (e.id === t ? { ...e, solo: !e.solo } : e)),
      ),
    ),
  addClip: (t, n, r) =>
    e((e) =>
      t4(e.activeMix, (e) =>
        G2(e, (e) =>
          e.id === t ? { ...e, clips: [...e.clips, Ade(n, r)] } : e,
        ),
      ),
    ),
  removeClip: (t, n) =>
    e((e) =>
      t4(e.activeMix, (e) =>
        G2(e, (e) =>
          e.id === t ? { ...e, clips: e.clips.filter((e) => e.id !== n) } : e,
        ),
      ),
    ),
  moveClip: (t, n, r) =>
    e((e) =>
      t4(e.activeMix, (e) => J2(e, t, n, { start_sec: Math.max(0, r) })),
    ),
  moveClipToTrack: (t, n, r, i) =>
    e((e) =>
      t4(e.activeMix, (e) => {
        if (t === n) return J2(e, t, r, { start_sec: Math.max(0, i) });
        let a = e.tracks.find((e) => e.id === t)?.clips.find((e) => e.id === r);
        if (!a) return e;
        let o = { ...a, start_sec: Math.max(0, i) };
        return G2(e, (e) =>
          e.id === t
            ? { ...e, clips: e.clips.filter((e) => e.id !== r) }
            : e.id === n
              ? { ...e, clips: [...e.clips, o] }
              : e,
        );
      }),
    ),
  trimClip: (t, n, r, i) =>
    e((e) =>
      t4(e.activeMix, (e) =>
        J2(e, t, n, { in_sec: Math.max(0, r), out_sec: Math.max(0, i) }),
      ),
    ),
  setClipGain: (t, n, r) =>
    e((e) => t4(e.activeMix, (e) => J2(e, t, n, { gain_db: r }))),
  setClipFades: (t, n, r, i) =>
    e((e) =>
      t4(e.activeMix, (e) =>
        J2(e, t, n, {
          fade_in_sec: Math.max(0, r),
          fade_out_sec: Math.max(0, i),
        }),
      ),
    ),
  addTrackEffect: (t, n) =>
    e((e) => t4(e.activeMix, (e) => q2(e, t, (e) => Y2(e, n)))),
  updateTrackEffect: (t, n, r) =>
    e((e) => t4(e.activeMix, (e) => q2(e, t, (e) => X2(e, n, r)))),
  toggleTrackEffect: (t, n) =>
    e((e) => t4(e.activeMix, (e) => q2(e, t, (e) => Z2(e, n)))),
  removeTrackEffect: (t, n) =>
    e((e) => t4(e.activeMix, (e) => q2(e, t, (e) => Q2(e, n)))),
  reorderTrackEffects: (t, n, r) =>
    e((e) => t4(e.activeMix, (e) => q2(e, t, (e) => $2(e, n, r)))),
  setMasterGain: (t) =>
    e((e) =>
      t4(e.activeMix, (e) => ({ ...e, master: { ...e.master, gain_db: t } })),
    ),
  addMasterEffect: (t) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        master: { ...e.master, effects: Y2(e.master.effects, t) },
      })),
    ),
  updateMasterEffect: (t, n) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        master: { ...e.master, effects: X2(e.master.effects, t, n) },
      })),
    ),
  toggleMasterEffect: (t) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        master: { ...e.master, effects: Z2(e.master.effects, t) },
      })),
    ),
  removeMasterEffect: (t) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        master: { ...e.master, effects: Q2(e.master.effects, t) },
      })),
    ),
  reorderMasterEffects: (t, n) =>
    e((e) =>
      t4(e.activeMix, (e) => ({
        ...e,
        master: { ...e.master, effects: $2(e.master.effects, t, n) },
      })),
    ),
  selectTrack: (t) => e({ selectedTrackId: t }),
  selectClip: (t) => e({ selectedClipId: t }),
  setZoom: (t) => e({ pxPerSec: Math.max(kfe, Math.min(Afe, t)) }),
  setMixBakeStatus: (t) => e({ mixBakeStatus: t }),
  markMixClean: () => e({ isDirty: !1 }),
  resetMix: () => e(e4),
}));
