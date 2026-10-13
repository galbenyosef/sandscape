// assets__Game-QkGXRHTR 03 — children
// Lines 599-775 of readable/assets__Game-QkGXRHTR.pretty.js (statement-aligned).
function dt({ open: e, mode: t, onClose: n }) {
  let a = r(),
    o = i(),
    { t: s } = k();
  if (!e) return null;
  let {
    title: c,
    message: l,
    showRegister: u,
  } = {
    "register-placeholder": {
      title: s(`playGate.placeholderTitle`, `Not playable yet`),
      message: s(
        `playGate.placeholderMessage`,
        `This game isn't available to play yet. Create a free account to play the full catalog of Sandscape games.`,
      ),
      showRegister: !0,
    },
    "register-limit": {
      title: s(`playGate.limitTitle`, `You've reached the free-play limit`),
      message: s(
        `playGate.limitMessage`,
        `You've played the maximum number of games for now. Create a free account to keep playing.`,
      ),
      showRegister: !0,
    },
    "coming-soon": {
      title: s(`playGate.comingSoonTitle`, `Coming soon`),
      message: s(
        `playGate.comingSoonMessage`,
        `This title isn't playable yet — check back soon.`,
      ),
      showRegister: !1,
    },
  }[t];
  return (0, H.jsx)(`div`, {
    className: `fixed inset-0 z-50 bg-black/50 flex items-center justify-center`,
    children: (0, H.jsx)(`div`, {
      className: `bg-background rounded-lg shadow-lg max-w-md w-full m-4 max-h-[90vh] overflow-y-auto`,
      children: (0, H.jsxs)(`div`, {
        className: `p-6`,
        children: [
          (0, H.jsxs)(`div`, {
            className: `flex justify-between items-center mb-4`,
            children: [
              (0, H.jsx)(`h2`, {
                className: `text-2xl font-bold`,
                children: c,
              }),
              (0, H.jsx)(p, {
                variant: `ghost`,
                size: `icon`,
                onClick: n,
                children: (0, H.jsx)(we, { className: `h-4 w-4` }),
              }),
            ],
          }),
          (0, H.jsx)(`p`, {
            className: `mb-6 text-muted-foreground`,
            children: l,
          }),
          (0, H.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              u &&
                (0, H.jsx)(p, {
                  className: `w-full`,
                  onClick: () => a(I(F(o), `play_gate`)),
                  children: s(
                    `playGate.createAccount`,
                    `Create a free account`,
                  ),
                }),
              (0, H.jsx)(p, {
                variant: u ? `ghost` : `default`,
                className: `w-full`,
                onClick: n,
                children: s(`general.close`, `Close`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var ft = 1440 * 60 * 1e3,
  pt = `sandscape-played-games`;
function mt() {
  try {
    let e = localStorage.getItem(pt);
    if (!e) return [];
    let t = JSON.parse(e);
    if (!Array.isArray(t)) return [];
    let n = Date.now() - ft,
      r = new Set(),
      i = [];
    for (let e of t) {
      if (!e || typeof e != `object`) continue;
      let { id: t, ts: a } = e;
      typeof t != `string` ||
        typeof a != `number` ||
        a < n ||
        r.has(t) ||
        (r.add(t), i.push({ id: t, ts: a }));
    }
    return i;
  } catch {
    return [];
  }
}
function ht(e) {
  try {
    localStorage.setItem(pt, JSON.stringify(e));
  } catch {}
}
function gt(e) {
  return mt().some((t) => t.id === e);
}
function _t() {
  return mt().length < 3;
}
function vt(e) {
  let t = mt().filter((t) => t.id !== e);
  (t.push({ id: e, ts: Date.now() }), ht(t));
}
var yt = `sandscape-game-viewer-id`,
  bt =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  $ = null;
function xt() {
  if (typeof globalThis.crypto?.randomUUID == `function`)
    return globalThis.crypto.randomUUID();
  let e = new Uint8Array(16);
  if (typeof globalThis.crypto?.getRandomValues == `function`)
    globalThis.crypto.getRandomValues(e);
  else
    for (let t = 0; t < e.length; t += 1)
      e[t] = Math.floor(Math.random() * 256);
  ((e[6] = (e[6] & 15) | 64), (e[8] = (e[8] & 63) | 128));
  let t = Array.from(e, (e) => e.toString(16).padStart(2, `0`));
  return `${t.slice(0, 4).join(``)}-${t.slice(4, 6).join(``)}-${t.slice(6, 8).join(``)}-${t.slice(8, 10).join(``)}-${t.slice(10).join(``)}`;
}
function St() {
  if ($) return $;
  try {
    let e = window.localStorage.getItem(yt);
    if (e && bt.test(e)) return (($ = e.toLowerCase()), $);
  } catch {}
  $ = xt();
  try {
    window.localStorage.setItem(yt, $);
  } catch {}
  return $;
}
async function Ct(e, t) {
  let n = await fetch(
    `${D.API_BASE_URL}/api/published/${encodeURIComponent(e)}/view`,
    {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify({ browser_id: t }),
    },
  );
  if (!n.ok) throw Error(`game-view request failed (${n.status})`);
  return n.json();
}
var wt = {};
function Tt(e, t, n) {
  let r = `${D.API_BASE_URL}${e}`,
    i = () => (r.includes(`?`) ? `&` : `?`);
  return (
    t && (r += `${i()}v=${new Date(t).getTime()}`),
    n && (r += `${i()}pt=${encodeURIComponent(n)}`),
    r
  );
}
