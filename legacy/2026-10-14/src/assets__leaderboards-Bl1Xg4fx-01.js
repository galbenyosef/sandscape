// assets__leaderboards-Bl1Xg4fx 01 — fetch
// Lines 1-117 of readable/assets__leaderboards-Bl1Xg4fx.pretty.js (statement-aligned).
import { r as e } from "./button-Ap3ysi5G.js";
import { n as t, t as n } from "./apiConfig-cGsbt6Be.js";
var r = e(`Trophy`, [
    [`path`, { d: `M6 9H4.5a2.5 2.5 0 0 1 0-5H6`, key: `17hqa7` }],
    [`path`, { d: `M18 9h1.5a2.5 2.5 0 0 0 0-5H18`, key: `lmptdp` }],
    [`path`, { d: `M4 22h16`, key: `57wxv0` }],
    [
      `path`,
      {
        d: `M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22`,
        key: `1nw9bq`,
      },
    ],
    [
      `path`,
      {
        d: `M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22`,
        key: `1np0yb`,
      },
    ],
    [`path`, { d: `M18 2H6v7a6 6 0 0 0 12 0V2Z`, key: `u46fv3` }],
  ]),
  i = () => `${n.API_BASE_URL}/api/leaderboards`,
  a = class extends Error {
    code;
    status;
    constructor(e, t, n) {
      (super(e),
        (this.name = `LeaderboardError`),
        (this.code = t),
        (this.status = n));
    }
  };
async function o(e, t) {
  let n = e.status;
  try {
    let t = (await e.json())?.detail;
    if (typeof t == `string`) return new a(t, `http_${n}`, n);
    if (t?.message) return new a(t.message, t.code || `http_${n}`, n);
  } catch {}
  return new a(`${t} (${n})`, `http_${n}`, n);
}
async function s(e, t) {
  if (!e.ok) throw await o(e, t);
  return await e.json();
}
async function c(e, n = {}) {
  let r = new URLSearchParams();
  (n.period && r.set(`period`, n.period),
    n.limit && r.set(`limit`, String(n.limit)),
    n.aroundMe && r.set(`around_me`, `true`));
  let a = r.toString(),
    o = await t();
  return s(
    await fetch(`${i()}/${encodeURIComponent(e)}/boards${a ? `?${a}` : ``}`, {
      headers: o,
    }),
    `Failed to load leaderboards`,
  );
}
async function l(e) {
  let n = await t();
  return s(
    await fetch(`${i()}/${encodeURIComponent(e)}/config`, { headers: n }),
    `Failed to load leaderboard settings`,
  );
}
async function u(e, n) {
  let r = await t();
  return s(
    await fetch(`${i()}/${encodeURIComponent(e)}/config`, {
      method: `PUT`,
      headers: r,
      body: JSON.stringify({ enabled: n }),
    }),
    `Failed to save leaderboard settings`,
  );
}
async function d(e, n) {
  let r = await t();
  return s(
    await fetch(`${i()}/${encodeURIComponent(e)}/boards`, {
      method: `POST`,
      headers: r,
      body: JSON.stringify(n),
    }),
    `Failed to create the board`,
  );
}
async function f(e, n, r) {
  let a = await t();
  return s(
    await fetch(
      `${i()}/${encodeURIComponent(e)}/boards/${encodeURIComponent(n)}`,
      { method: `PATCH`, headers: a, body: JSON.stringify(r) },
    ),
    `Failed to save the board`,
  );
}
async function p(e, n) {
  let r = await t(),
    a = await fetch(
      `${i()}/${encodeURIComponent(e)}/boards/${encodeURIComponent(n)}`,
      { method: `DELETE`, headers: r },
    );
  if (!a.ok) throw await o(a, `Failed to delete the board`);
}
async function m(e, n) {
  let r = await t();
  return s(
    await fetch(
      `${i()}/${encodeURIComponent(e)}/boards/${encodeURIComponent(n)}/reset`,
      { method: `POST`, headers: r },
    ),
    `Failed to reset the board`,
  );
}
