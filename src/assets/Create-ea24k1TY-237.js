// Create-ea24k1TY 237 — error
// Lines 80047-80235 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var i4 = new (class {
    async saveMixState(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/mix-state`,
            { method: `PUT`, headers: r, body: JSON.stringify(n) },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[MixEditorService] saveMixState HTTP error: ${i.status}`,
            ),
            { success: !1, error: `Server error: ${i.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[MixEditorService] ${t} saving mix state:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to save mix state. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to save mix state`,
          }
        );
      }
    }
    async bakeMixdown(e, t, n, r) {
      try {
        let i = await $de(),
          a = `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}/bake-mixdown`,
          o = dde(n, r),
          s = new FormData();
        s.append(`state`, JSON.stringify(n));
        let c = efe(n.name);
        if (o === null)
          if (a2(n) || tfe(n, r)) {
            let e = new Blob([], { type: `audio/wav` });
            s.append(`file`, e, c);
          } else return { success: !1, error: `buffers not ready` };
        else {
          let e = x2(await o);
          s.append(`file`, e, c);
        }
        let l = await fetch(a, { method: `POST`, headers: i, body: s });
        return l.ok
          ? await l.json()
          : (console.error(
              `[MixEditorService] bakeMixdown HTTP error: ${l.status}`,
            ),
            { success: !1, error: `Server error: ${l.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[MixEditorService] ${t} baking mixdown:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to bake mixdown. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to bake mixdown`,
          }
        );
      }
    }
    async createMixAsset(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets`,
            {
              method: `POST`,
              headers: r,
              body: JSON.stringify({
                session_id: e,
                asset_name: t,
                asset_type: `mix_audio`,
                description: `Multitrack ${n} mix`,
                priority: `medium`,
                format: `wav`,
              }),
            },
          );
        return i.ok
          ? await i.json()
          : (console.error(
              `[MixEditorService] createMixAsset HTTP error: ${i.status}`,
            ),
            { success: !1, error: `Server error: ${i.status}` });
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[MixEditorService] ${t} creating mix asset:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to create mix. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to create mix asset`,
          }
        );
      }
    }
    async renameMixAsset(e, t, n) {
      try {
        let r = await An(),
          i = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}`,
            {
              method: `PATCH`,
              headers: r,
              body: JSON.stringify({ session_id: e, asset_name: n }),
            },
          );
        if (!i.ok) {
          let e =
            i.status === 404 ? `Mix not found` : `Server error: ${i.status}`;
          return (
            console.error(`[MixEditorService] renameMixAsset failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await i.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[MixEditorService] ${t} renaming mix asset:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to rename mix. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to rename mix asset`,
          }
        );
      }
    }
    async deleteMixAsset(e, t) {
      try {
        let n = await An(),
          r = await fetch(
            `${Mn.API_BASE_URL}/api/session/${encodeURIComponent(e)}/assets/${encodeURIComponent(t)}`,
            {
              method: `DELETE`,
              headers: n,
              body: JSON.stringify({ session_id: e }),
            },
          );
        if (!r.ok) {
          let e =
            r.status === 404 ? `Mix not found` : `Server error: ${r.status}`;
          return (
            console.error(`[MixEditorService] deleteMixAsset failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await r.json();
      } catch (e) {
        let t = Mr(e) ? `Network error` : `Error`;
        return (
          console.error(`[MixEditorService] ${t} deleting mix asset:`, e),
          {
            success: !1,
            error: Mr(e)
              ? `Network error: Unable to delete mix. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to delete mix asset`,
          }
        );
      }
    }
  })(),
  a4 = 56,
  o4 = 22,
  s4 = 0.05,
  nfe = 8,
  c4 = (e) => Math.round(e / s4) * s4;
function rfe(e) {
  if (e < 60) return `${e}s`;
  let t = Math.floor(e / 60),
    n = Math.round(e % 60);
  return `${t}:${String(n).padStart(2, `0`)}`;
}
