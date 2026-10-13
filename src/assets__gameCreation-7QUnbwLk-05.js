// assets__gameCreation-7QUnbwLk 05 — headers
// Lines 1557-1663 of readable/assets__gameCreation-7QUnbwLk.pretty.js (statement-aligned).
var z = new (class {
    base(e) {
      return `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(e)}/files`;
    }
    async getIndex(t) {
      let n = await e(),
        r = await fetch(`${this.base(t)}/history`, { headers: n });
      return r.ok ? r.json() : { success: !1, paths: {} };
    }
    async getVersions(t, n) {
      let r = await e(),
        i = await fetch(
          `${this.base(t)}/history/entry?path=${encodeURIComponent(n)}`,
          { headers: r },
        );
      return i.ok ? i.json() : { success: !1, path: n, entries: [] };
    }
    async getContentObjectUrl(t, n, r) {
      let i = await e(),
        a = await fetch(
          `${this.base(t)}/history/content?path=${encodeURIComponent(n)}&sha256=${encodeURIComponent(r)}`,
          { headers: i },
        );
      if (!a.ok) return null;
      let o = await a.blob();
      return {
        url: URL.createObjectURL(o),
        contentType:
          a.headers.get(`content-type`) || `application/octet-stream`,
      };
    }
    async getContentText(t, n, r) {
      let i = await e(),
        a = await fetch(
          `${this.base(t)}/history/content?path=${encodeURIComponent(n)}&sha256=${encodeURIComponent(r)}`,
          { headers: i },
        );
      return a.ok ? a.text() : null;
    }
    async checkout(t, n, r) {
      let i = await e(),
        a = await fetch(`${this.base(t)}/checkout`, {
          method: `POST`,
          headers: { ...i, "Content-Type": `application/json` },
          body: JSON.stringify({ path: n, sha256: r }),
        });
      if (!a.ok) {
        let e = `Restore failed (${a.status})`;
        try {
          let t = await a.json();
          typeof t?.detail == `string` && (e = t.detail);
        } catch {}
        return {
          success: !1,
          path: n,
          sha256: r,
          asset_updates: [],
          new_version: null,
          error: e,
        };
      }
      return a.json();
    }
  })(),
  B = new (class {
    async transcribe(e, r = `audio.webm`) {
      try {
        let i = new FormData();
        i.append(`file`, e, r);
        let a = await t();
        return await (
          await fetch(`${n.API_BASE_URL}/api/transcribe`, {
            method: `POST`,
            headers: { ...(a ? { Authorization: `Bearer ${a}` } : {}) },
            body: i,
          })
        ).json();
      } catch (e) {
        return (
          console.error(`Error transcribing audio:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Transcription failed`,
          }
        );
      }
    }
    async getInfo() {
      try {
        let t = await e();
        return await (
          await fetch(`${n.API_BASE_URL}/api/transcribe/info`, { headers: t })
        ).json();
      } catch (e) {
        return (
          console.error(`Error getting transcription info:`, e),
          {
            success: !1,
            error:
              e instanceof Error
                ? e.message
                : `Failed to get transcription info`,
          }
        );
      }
    }
  })();
