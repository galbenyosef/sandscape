// publish-IuClGqz5 01 — json
// Lines 1-94 of readable/assets/publish-IuClGqz5.pretty.js (statement-aligned).
import { n as e, r as t, t as n } from "./apiConfig-cGsbt6Be.js";
async function r(t) {
  let r = await e(),
    i = await fetch(`${n.API_BASE_URL}/api/publish`, {
      method: `POST`,
      headers: r,
      body: JSON.stringify(t),
    });
  if (!i.ok) {
    let e = `Request failed (${i.status})`;
    try {
      let t = await i.json();
      t?.detail && (e = t.detail);
    } catch {}
    return { success: !1, error: e };
  }
  return i.json();
}
function i(e) {
  return /^https?:\/\//i.test(e) ? e : `${n.API_BASE_URL}${e}`;
}
async function a(t) {
  let r = await e(),
    i = await fetch(
      `${n.API_BASE_URL}/api/publish/readiness?session_id=${encodeURIComponent(t)}`,
      { headers: r },
    );
  if (!i.ok) throw Error(`Failed to load publish readiness (${i.status})`);
  return i.json();
}
async function o(t) {
  let r = await e(),
    i = await fetch(
      `${n.API_BASE_URL}/api/publish/draft?session_id=${encodeURIComponent(t)}`,
      { headers: r },
    );
  if (!i.ok) throw Error(`Failed to load publish draft (${i.status})`);
  return (await i.json())?.draft ?? null;
}
async function s(t, r) {
  let i = await e(),
    a = await fetch(`${n.API_BASE_URL}/api/publish/generate-thumbnail`, {
      method: `POST`,
      headers: i,
      body: JSON.stringify({ session_id: t, custom_prompt: r }),
    });
  if (!a.ok) {
    let e = `Request failed (${a.status})`;
    try {
      let t = await a.json();
      t?.detail && (e = t.detail);
    } catch {}
    return { success: !1, error: e };
  }
  return a.json();
}
async function c(e, r) {
  let i = await t(),
    a = new FormData();
  (a.append(`session_id`, e), a.append(`file`, r));
  let o = await fetch(`${n.API_BASE_URL}/api/publish/upload-thumbnail`, {
    method: `POST`,
    headers: i ? { Authorization: `Bearer ${i}` } : {},
    body: a,
  });
  if (!o.ok) {
    let e = `Request failed (${o.status})`;
    try {
      let t = await o.json();
      t?.detail && (e = t.detail);
    } catch {}
    return { success: !1, error: e };
  }
  return o.json();
}
async function l(e, r) {
  let i = await t(),
    a = new FormData();
  (a.append(`session_id`, e), a.append(`file`, r));
  let o = await fetch(`${n.API_BASE_URL}/api/publish/upload-gameplay`, {
    method: `POST`,
    headers: i ? { Authorization: `Bearer ${i}` } : {},
    body: a,
  });
  if (!o.ok) {
    let e = `Request failed (${o.status})`;
    try {
      let t = await o.json();
      t?.detail && (e = t.detail);
    } catch {}
    return { success: !1, error: e };
  }
  return o.json();
}
