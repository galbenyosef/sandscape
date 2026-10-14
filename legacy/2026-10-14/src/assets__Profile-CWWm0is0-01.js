// assets__Profile-CWWm0is0 01 — game
// Lines 1-165 of readable/assets__Profile-CWWm0is0.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { n as a, t as o } from "./AuthService-CQeU_0bQ.js";
import { r as s, t as c } from "./button-Ap3ysi5G.js";
import { t as l } from "./refresh-cw-CkwJF4P8.js";
import { t as u } from "./upload-DLWSp9LN.js";
import { t as d } from "./useTranslation-BdauNPOZ.js";
import { t as f } from "./avatarUtils-CBd99uWq.js";
import { r as p } from "./gameUtils-hllMGYPh.js";
import { n as m, r as ee, t as te } from "./avatar-ixs41cq5.js";
import { t as h } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  D as ne,
  J as g,
  W as re,
  X as _,
  Y as ie,
  at as v,
  ct as y,
  g as ae,
  it as b,
  n as oe,
  nt as x,
  ot as S,
  r as se,
  s as C,
  t as ce,
  tt as le,
  v as w,
} from "./index-BKDksszn.js";
import { a as ue, t as de } from "./follow-CUqA0aWI.js";
import { t as fe } from "./textarea-D_1TMYK2.js";
import { a as T, n as E, o as D, r as O, t as k } from "./card-DLIi0Qe8.js";
import { i as A, n as j, r as pe, t as me } from "./tabs-Gm5XRVor.js";
import { a as he, r as ge } from "./publish-IuClGqz5.js";
var _e = s(`UserCheck`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`polyline`, { points: `16 11 18 13 22 9`, key: `1pwet4` }],
  ]),
  M = e(t());
async function ve(e, t = 20) {
  let n = [],
    { data: r, error: i } = await a
      .from(`game_likes`)
      .select(
        `
      game_id,
      created_at,
      game:games!inner(
        id,
        title,
        thumbnail_url,
        short_code
      )
    `,
      )
      .eq(`user_id`, e)
      .order(`created_at`, { ascending: !1 })
      .limit(t);
  !i &&
    r &&
    r.forEach((e) => {
      n.push({
        id: `like-${e.game_id}`,
        type: `like`,
        created_at: e.created_at,
        game: e.game,
      });
    });
  let { data: o, error: s } = await a
    .from(`comments`)
    .select(
      `
      id,
      content,
      created_at,
      game:games!inner(
        id,
        title,
        thumbnail_url,
        short_code
      )
    `,
    )
    .eq(`user_id`, e)
    .is(`parent_comment_id`, null)
    .order(`created_at`, { ascending: !1 })
    .limit(t);
  !s &&
    o &&
    o.forEach((e) => {
      n.push({
        id: `comment-${e.id}`,
        type: `comment`,
        created_at: e.created_at,
        game: e.game,
        comment: { id: e.id, content: e.content },
      });
    });
  let { data: c, error: l } = await a
    .from(`followers`)
    .select(
      `
      created_at,
      followed:profiles!followers_followed_user_id_fkey(
        user_id,
        username,
        avatar_url
      )
    `,
    )
    .eq(`following_user_id`, e)
    .order(`created_at`, { ascending: !1 })
    .limit(t);
  return (
    !l &&
      c &&
      c.forEach((e) => {
        n.push({
          id: `follow-${e.followed?.user_id}`,
          type: `follow`,
          created_at: e.created_at,
          target_user: e.followed,
        });
      }),
    n.sort(
      (e, t) =>
        new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
    ),
    n.slice(0, t)
  );
}
function N(e) {
  switch (e.type) {
    case `like`:
      return `Liked "${e.game?.title || `a game`}"`;
    case `comment`:
      return `Commented on "${e.game?.title || `a game`}"`;
    case `follow`:
      return `Started following ${e.target_user?.username || `a user`}`;
    case `game_created`:
      return `Created "${e.game?.title || `a game`}"`;
    default:
      return `Recent activity`;
  }
}
function ye(e) {
  switch (e.type) {
    case `like`:
    case `comment`:
    case `game_created`:
      return e.game?.short_code
        ? `/play?g=${e.game.short_code}`
        : e.game?.id
          ? `/play?g=${e.game.id}`
          : `/`;
    case `follow`:
      return e.target_user?.user_id ? `/profile/${e.target_user.user_id}` : `/`;
    default:
      return `/`;
  }
}
var P = n();
