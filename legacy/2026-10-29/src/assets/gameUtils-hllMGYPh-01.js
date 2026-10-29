// gameUtils-hllMGYPh 01 — replace
// Lines 1-38 of readable/assets/gameUtils-hllMGYPh.pretty.js (statement-aligned).
import { n as e } from "./AuthService-CQeU_0bQ.js";
var t = (e) => {
    let t = e ?? 0;
    return t >= 1e6
      ? (t / 1e6).toFixed(1).replace(`.0`, ``) + `M`
      : t >= 1e3
        ? (t / 1e3).toFixed(1).replace(`.0`, ``) + `K`
        : t.toString();
  },
  GAME_MEDIA_BASE = `https://gamemedia.sandscape.app`.replace(/\/$/, ``),
  extractStoragePath = (e, t) => {
    if (!e) return ``;
    let n = `/storage/v1/object/public/${t}/`,
      r = e.indexOf(n);
    return r === -1
      ? e.startsWith(`http`)
        ? e
        : e.replace(/^\/+/, ``)
      : e.slice(r + n.length);
  },
  gameThumbnailUrl = (t) => {
    if (!t) return ``;
    let i = extractStoragePath(t, `gamethumbnails`);
    return GAME_MEDIA_BASE && !i.startsWith(`http`)
      ? `${GAME_MEDIA_BASE}/${i}`
      : t.includes(`storage/v1/object/public/gamethumbnails`)
        ? t
        : e.storage.from(`gamethumbnails`).getPublicUrl(i).data.publicUrl;
  },
  gamePreviewUrl = (t) => {
    if (!t) return ``;
    let i = extractStoragePath(t, `gamepreviews`);
    return GAME_MEDIA_BASE && !i.startsWith(`http`)
      ? `${GAME_MEDIA_BASE}/${i}`
      : t.includes(`storage/v1/object/public/gamepreviews`)
        ? t
        : e.storage.from(`gamepreviews`).getPublicUrl(i).data.publicUrl;
  };
