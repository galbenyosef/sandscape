// Create-CEn7EAZs 230 — error
// Lines 78039-78124 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var w2 = new (class {
    async saveAudioState(e, t, n) {
      try {
        let r = await _n(),
          i = await fetch(
            `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/audio-state`,
            { method: `PUT`, headers: r, body: JSON.stringify(n) },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[AudioEditorService] saveAudioState HTTP error: ${i.status}`,
            ),
            { success: !1, error: `Server error: ${i.status}` });
      } catch (e) {
        let t = yr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AudioEditorService] ${t} saving audio state:`, e),
          {
            success: !1,
            error: yr(e)
              ? `Network error: Unable to save audio state. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to save audio state`,
          }
        );
      }
    }
    async bakeAudio(e, t, n, r, i) {
      try {
        let a = await qde(),
          o = `${yn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/bake-audio`,
          s = g2(r, i),
          c = new FormData();
        if ((c.append(`state`, JSON.stringify(i)), s === null)) {
          let e = new Blob([], { type: `audio/wav` });
          c.append(`file`, e, C2(n));
        } else {
          let e = b2(await s);
          c.append(`file`, e, C2(n));
        }
        let l = await fetch(o, { method: `POST`, headers: a, body: c });
        return l.ok
          ? await l.json()
          : (console.error(
              `[AudioEditorService] bakeAudio HTTP error: ${l.status}`,
            ),
            { success: !1, error: `Server error: ${l.status}` });
      } catch (e) {
        let t = yr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AudioEditorService] ${t} baking audio:`, e),
          {
            success: !1,
            error: yr(e)
              ? `Network error: Unable to bake audio. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to bake audio`,
          }
        );
      }
    }
  })(),
  Jde = `#a855f7`,
  Yde = `#f59e0b`,
  T2 = `#22d3ee`,
  Xde = `#14b8a6`,
  Zde = `rgba(20, 184, 166, 0.16)`,
  Qde = `rgba(20, 184, 166, 0.85)`,
  E2 = `#5eead4`,
  $de = `rgba(139, 92, 246, 0.15)`,
  efe = `rgba(139, 92, 246, 0.5)`,
  D2 = 8,
  O2 = 9,
  tfe = 5;
function nfe(e) {
  return e
    ? e.asset_type === `music_audio`
      ? Jde
      : e.asset_type === `voice_audio`
        ? Yde
        : T2
    : T2;
}
