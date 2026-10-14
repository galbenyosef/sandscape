// Create-ea24k1TY 228 — error
// Lines 77259-77344 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var T2 = new (class {
    async saveAudioState(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/audio-state`,
            { method: `PUT`, headers: r, body: JSON.stringify(n) },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[AudioEditorService] saveAudioState HTTP error: ${i.status}`,
            ),
            { success: !1, error: `Server error: ${i.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AudioEditorService] ${t} saving audio state:`, e),
          {
            success: !1,
            error: Mr(e)
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
        let a = await mde(),
          o = `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/bake-audio`,
          s = _2(r, i),
          c = new FormData();
        if ((c.append(`state`, JSON.stringify(i)), s === null)) {
          let e = new Blob([], { type: `audio/wav` });
          c.append(`file`, e, w2(n));
        } else {
          let e = x2(await s);
          c.append(`file`, e, w2(n));
        }
        let l = await fetch(o, { method: `POST`, headers: a, body: c });
        return l.ok
          ? await l.json()
          : (console.error(
              `[AudioEditorService] bakeAudio HTTP error: ${l.status}`,
            ),
            { success: !1, error: `Server error: ${l.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[AudioEditorService] ${t} baking audio:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to bake audio. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to bake audio`,
          }
        );
      }
    }
  })(),
  hde = `#a855f7`,
  gde = `#f59e0b`,
  E2 = `#22d3ee`,
  _de = `#14b8a6`,
  vde = `rgba(20, 184, 166, 0.16)`,
  yde = `rgba(20, 184, 166, 0.85)`,
  D2 = `#5eead4`,
  bde = `rgba(139, 92, 246, 0.15)`,
  xde = `rgba(139, 92, 246, 0.5)`,
  O2 = 8,
  k2 = 9,
  Sde = 5;
function Cde(e) {
  return e
    ? e.asset_type === `music_audio`
      ? hde
      : e.asset_type === `voice_audio`
        ? gde
        : E2
    : E2;
}
