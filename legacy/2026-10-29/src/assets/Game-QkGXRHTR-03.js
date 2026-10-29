// Game-QkGXRHTR 03 — children
// Lines 599-775 of readable/assets/Game-QkGXRHTR.pretty.js (statement-aligned).
function PlayGateModal({ open: e, mode: t, onClose: n }) {
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
var PLAYED_GAMES_WINDOW_MS = 1440 * 60 * 1e3,
  PLAYED_GAMES_KEY = `sandscape-played-games`;
function readPlayedGames() {
  try {
    let e = localStorage.getItem(PLAYED_GAMES_KEY);
    if (!e) return [];
    let t = JSON.parse(e);
    if (!Array.isArray(t)) return [];
    let n = Date.now() - PLAYED_GAMES_WINDOW_MS,
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
function writePlayedGames(e) {
  try {
    localStorage.setItem(PLAYED_GAMES_KEY, JSON.stringify(e));
  } catch {}
}
function hasPlayedGame(e) {
  return readPlayedGames().some((t) => t.id === e);
}
function canPlayFree() {
  return readPlayedGames().length < 3;
}
function recordPlayedGame(e) {
  let t = readPlayedGames().filter((t) => t.id !== e);
  (t.push({ id: e, ts: Date.now() }), writePlayedGames(t));
}
var VIEWER_ID_KEY = `sandscape-game-viewer-id`,
  UUID_RE =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  cachedViewerId = null;
function generateUuid() {
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
function getViewerId() {
  if (cachedViewerId) return cachedViewerId;
  try {
    let e = window.localStorage.getItem(VIEWER_ID_KEY);
    if (e && UUID_RE.test(e)) return ((cachedViewerId = e.toLowerCase()), cachedViewerId);
  } catch {}
  cachedViewerId = generateUuid();
  try {
    window.localStorage.setItem(VIEWER_ID_KEY, cachedViewerId);
  } catch {}
  return cachedViewerId;
}
async function postGameView(e, t) {
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
var playTokenCache = {};
function buildAssetUrl(e, t, n) {
  let r = `${D.API_BASE_URL}${e}`,
    i = () => (r.includes(`?`) ? `&` : `?`);
  return (
    t && (r += `${i()}v=${new Date(t).getTime()}`),
    n && (r += `${i()}pt=${encodeURIComponent(n)}`),
    r
  );
}
