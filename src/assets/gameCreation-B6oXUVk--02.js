// gameCreation-B6oXUVk- 02 — error
// Lines 335-366 of readable/assets/gameCreation-B6oXUVk-.pretty.js (statement-aligned).
function l(e) {
  if (!e) return !1;
  let t =
    e instanceof Error ? e.message.toLowerCase() : String(e).toLowerCase();
  return [
    `network`,
    `fetch`,
    `timeout`,
    `econnrefused`,
    `enotfound`,
    `econnreset`,
    `socket`,
    `dns`,
    `offline`,
    `internet`,
    `connection`,
    `unreachable`,
    `failed to fetch`,
    `networkerror`,
    `load failed`,
  ].some((e) => t.includes(e));
}
var u = `generated_assets/`;
function d(e, t) {
  if (
    !t.startsWith(u) ||
    t.split(`/`).some((e) => !e || e === `.` || e === `..` || e.includes(`\\`))
  )
    throw Error(`Invalid visual reference path`);
  let r = t.slice(17);
  return `${n.API_BASE_URL}/api/editor/download/${encodeURIComponent(e)}?path=${encodeURIComponent(r)}`;
}
