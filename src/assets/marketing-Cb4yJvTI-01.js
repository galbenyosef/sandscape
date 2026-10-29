// marketing-Cb4yJvTI 01 — json
// Lines 1-34 of readable/assets/marketing-Cb4yJvTI.pretty.js (statement-aligned).
import { n as e, t } from "./apiConfig-BixZVfgD.js";
var n = class extends Error {};
async function r(e, r) {
  let i = await fetch(`${t.API_BASE_URL}/api/marketing${e}`, r);
  if (!i.ok) {
    let e = await i.json().catch(() => ({})),
      t =
        e.error ||
        e.detail ||
        `Could not complete this request. Please try again.`;
    throw e.error_code === `NO_ACCOUNT_EMAIL` ? new n(t) : Error(t);
  }
  return await i.json();
}
function i(e) {
  return r(`/offers/${encodeURIComponent(e)}`);
}
async function a(t) {
  return r(`/offers/claim`, {
    method: `POST`,
    headers: await e(),
    body: JSON.stringify({ code: t }),
  });
}
async function o() {
  return r(`/preferences`, { headers: await e() });
}
async function s(t) {
  await r(`/preferences`, {
    method: `PUT`,
    headers: await e(),
    body: JSON.stringify(t),
  });
}
