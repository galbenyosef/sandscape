// assets__gameUtils-hllMGYPh 01 — replace
// Lines 1-38 of readable/assets__gameUtils-hllMGYPh.pretty.js (statement-aligned).
import { n as e } from "./AuthService-CQeU_0bQ.js";
var t = (e) => {
    let t = e ?? 0;
    return t >= 1e6
      ? (t / 1e6).toFixed(1).replace(`.0`, ``) + `M`
      : t >= 1e3
        ? (t / 1e3).toFixed(1).replace(`.0`, ``) + `K`
        : t.toString();
  },
  n = `https://gamemedia.sandscape.app`.replace(/\/$/, ``),
  r = (e, t) => {
    if (!e) return ``;
    let n = `/storage/v1/object/public/${t}/`,
      r = e.indexOf(n);
    return r === -1
      ? e.startsWith(`http`)
        ? e
        : e.replace(/^\/+/, ``)
      : e.slice(r + n.length);
  },
  i = (t) => {
    if (!t) return ``;
    let i = r(t, `gamethumbnails`);
    return n && !i.startsWith(`http`)
      ? `${n}/${i}`
      : t.includes(`storage/v1/object/public/gamethumbnails`)
        ? t
        : e.storage.from(`gamethumbnails`).getPublicUrl(i).data.publicUrl;
  },
  a = (t) => {
    if (!t) return ``;
    let i = r(t, `gamepreviews`);
    return n && !i.startsWith(`http`)
      ? `${n}/${i}`
      : t.includes(`storage/v1/object/public/gamepreviews`)
        ? t
        : e.storage.from(`gamepreviews`).getPublicUrl(i).data.publicUrl;
  };
