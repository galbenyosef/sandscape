// assets__gameCreation-7QUnbwLk 04 — error
// Lines 1248-1556 of readable/assets__gameCreation-7QUnbwLk.pretty.js (statement-aligned).
async function b(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/concept`,
        { method: `PUT`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})` };
  } catch (e) {
    return (
      console.error(`[updateGameConcept] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to save concept`,
      }
    );
  }
}
function x() {
  if (typeof location > `u`) return !1;
  let e = location.pathname;
  return e.startsWith(`/tour`) && !e.startsWith(`/tour/claim`);
}
async function S(e) {
  try {
    let t = await e.json(),
      n = t?.detail ?? t?.error;
    if (typeof n == `string` && n.trim()) return n;
  } catch {}
  return `Server error (${e.status})`;
}
async function C(t, r) {
  if (x()) return { success: !0 };
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide`,
        { method: `PUT`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok ? await a.json() : { success: !1, error: await S(a) };
  } catch (e) {
    return (
      console.error(`[updateStyleGuide] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to save style guide`,
      }
    );
  }
}
async function w(t, r) {
  try {
    let i = await e(),
      a = r ? JSON.stringify({ prompt: r }) : void 0;
    a && (i[`Content-Type`] = `application/json`);
    let o = await fetch(
      `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/generate-mood-images`,
      { method: `POST`, headers: i, ...(a ? { body: a } : {}) },
    );
    return o.ok ? await o.json() : { success: !1, error: await S(o) };
  } catch (e) {
    return (
      console.error(`[generateMoodImages] Error:`, e),
      {
        success: !1,
        error:
          e instanceof Error ? e.message : `Failed to generate mood images`,
      }
    );
  }
}
async function T(t, r) {
  try {
    let i = await e(),
      a = r ? JSON.stringify({ prompt: r }) : void 0;
    a && (i[`Content-Type`] = `application/json`);
    let o = await fetch(
      `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/generate-mood-image`,
      { method: `POST`, headers: i, ...(a ? { body: a } : {}) },
    );
    return o.ok ? await o.json() : { success: !1, error: await S(o) };
  } catch (e) {
    return (
      console.error(`[generateMoodImage] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to generate mood image`,
      }
    );
  }
}
async function E(t, r) {
  if (x()) return { success: !0 };
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/render-composite`,
        { method: `POST`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok ? await a.json() : { success: !1, error: await S(a) };
  } catch (e) {
    return (
      console.error(`[renderMoodBoardComposite] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to render composite`,
      }
    );
  }
}
async function D(t) {
  try {
    let r = await e(),
      i = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/style-guide/extract-palette`,
        { method: `POST`, headers: r },
      );
    return i.ok ? await i.json() : { success: !1, error: await S(i) };
  } catch (e) {
    return (
      console.error(`[extractPaletteFromMoodBoard] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to extract palette`,
      }
    );
  }
}
async function O(e = ``, t = ``, r = 50) {
  if (x()) return { keywords: [], suggestions: [], categories: [] };
  try {
    let i = new URLSearchParams();
    (e && i.set(`q`, e), t && i.set(`category`, t), i.set(`limit`, String(r)));
    let a = await fetch(`${n.API_BASE_URL}/api/style-keywords?${i}`);
    return a.ok
      ? await a.json()
      : { keywords: [], suggestions: [], categories: [] };
  } catch {
    return { keywords: [], suggestions: [], categories: [] };
  }
}
async function k(e = ``, t = ``, r = 30) {
  if (x()) return { references: [], categories: [] };
  try {
    let i = new URLSearchParams();
    (e && i.set(`q`, e), t && i.set(`category`, t), i.set(`limit`, String(r)));
    let a = await fetch(`${n.API_BASE_URL}/api/mood-references?${i}`);
    return a.ok ? await a.json() : { references: [], categories: [] };
  } catch {
    return { references: [], categories: [] };
  }
}
async function A(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/audio-direction`,
        { method: `PUT`, headers: i, body: JSON.stringify(r) },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})` };
  } catch (e) {
    return (
      console.error(`[updateAudioDirection] Error:`, e),
      {
        success: !1,
        error:
          e instanceof Error ? e.message : `Failed to save audio direction`,
      }
    );
  }
}
var j = [`gdd`, `tdd`, `uiux_direction`, `experience_bible`, `feature_list`],
  M = {
    gdd: `Game Design Document`,
    tdd: `Technical Design Document`,
    uiux_direction: `UI/UX Direction`,
    experience_bible: `Experience Bible`,
    feature_list: `Feature List`,
  };
async function N(t) {
  try {
    let r = await e(),
      i = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents`,
        { headers: r },
      );
    return i.ok
      ? await i.json()
      : { success: !1, error: `Server error (${i.status})` };
  } catch (e) {
    return (
      console.error(`[listDesignDocuments] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to list documents`,
      }
    );
  }
}
async function P(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}`,
        { headers: i },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})`, status: a.status };
  } catch (e) {
    return (
      console.error(`[getDesignDocument] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to load document`,
      }
    );
  }
}
async function F(t, r, i, a) {
  try {
    let o = await e(),
      s = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}`,
        {
          method: `PUT`,
          headers: o,
          body: JSON.stringify(
            a === void 0 ? { content: i } : { content: i, title: a },
          ),
        },
      );
    return s.ok
      ? await s.json()
      : { success: !1, error: `Server error (${s.status})` };
  } catch (e) {
    return (
      console.error(`[saveDesignDocument] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to save document`,
      }
    );
  }
}
async function I(t, r) {
  try {
    let i = await e(),
      a = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}/versions`,
        { headers: i },
      );
    return a.ok
      ? await a.json()
      : { success: !1, error: `Server error (${a.status})` };
  } catch (e) {
    return (
      console.error(`[listDesignDocumentVersions] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to list versions`,
      }
    );
  }
}
async function L(t, r, i) {
  try {
    let a = await e(),
      o = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}/versions/${i}`,
        { headers: a },
      );
    return o.ok
      ? await o.json()
      : { success: !1, error: `Server error (${o.status})` };
  } catch (e) {
    return (
      console.error(`[getDesignDocumentVersion] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to load version`,
      }
    );
  }
}
async function R(t, r, i) {
  try {
    let a = await e(),
      o = await fetch(
        `${n.API_BASE_URL}/api/sessions/${encodeURIComponent(t)}/documents/${encodeURIComponent(r)}/restore`,
        { method: `POST`, headers: a, body: JSON.stringify({ version: i }) },
      );
    return o.ok
      ? await o.json()
      : { success: !1, error: `Server error (${o.status})` };
  } catch (e) {
    return (
      console.error(`[restoreDesignDocumentVersion] Error:`, e),
      {
        success: !1,
        error: e instanceof Error ? e.message : `Failed to restore version`,
      }
    );
  }
}
