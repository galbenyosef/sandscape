// Create-ea24k1TY 257 — ref
// Lines 86434-86464 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
async function K3(e, t, n) {
  try {
    let r = G3.getState().docEpoch,
      { duration_sec: i, width: a, height: o } = t;
    if (t.ref.source !== `text`) {
      if (
        (await e.ensureLoaded(t.ref),
        t.ref.source === `session` && !e.getBlob(t.ref))
      ) {
        Hr.error(`Could not load "${t.name}" from the session`);
        return;
      }
      let n = e.getVisualMeta(t.ref);
      (n &&
        ((a = n.width || a),
        (o = n.height || o),
        t.media_type === `video` && (i = n.duration_sec || i)),
        t.media_type === `audio` &&
          i <= 0 &&
          (await e.ensureAudioBuffer(t.ref),
          (i = e.getAudioBuffer(t.ref)?.duration ?? 0)),
        t.media_type !== `image` && e.ensureAudioBuffer(t.ref));
    }
    let s = G3.getState();
    if (s.docEpoch !== r) return;
    s.addAssetFromPayload({ ...t, duration_sec: i, width: a, height: o }, n);
  } catch (e) {
    (console.error(`[VideoEditor] failed to add asset:`, e),
      Hr.error(`Could not add "${t.name}" to the composition`));
  }
}
