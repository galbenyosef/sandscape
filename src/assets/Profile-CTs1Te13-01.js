// Profile-CTs1Te13 01 — game
// Lines 1-169 of readable/assets/Profile-CTs1Te13.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { n as o, t as s } from "./AuthService-C8NFtVWb.js";
import { r as c, t as l } from "./button-gyaE5cND.js";
import { t as ee } from "./copy-C3ryofZQ.js";
import { t as u } from "./loader-circle-BWNSk5u-.js";
import { t as d } from "./refresh-cw-Bg4R4J17.js";
import { t as f } from "./upload-Bbnhh28X.js";
import { t as p } from "./useTranslation-BdauNPOZ.js";
import { t as m } from "./avatarUtils-CHOc69Ms.js";
import { r as h } from "./gameUtils-Che36IRh.js";
import { n as g, r as _, t as te } from "./avatar-BHj788a5.js";
import { t as ne } from "./formatDistanceToNow-DhpKhUbk.js";
import {
  D as re,
  J as v,
  K as ie,
  X as y,
  Y as ae,
  at as b,
  ct as x,
  g as oe,
  it as S,
  n as se,
  nt as ce,
  ot as C,
  r as le,
  s as w,
  t as ue,
  tt as de,
  v as T,
} from "./index-CBcimEr9.js";
import { a as fe, t as pe } from "./follow-CpTPXfIN.js";
import { t as me } from "./textarea-B3J7W2fu.js";
import { a as E, n as D, o as O, r as k, t as A } from "./card-Ca5HFnV5.js";
import { n as he, r as ge } from "./useCodingModelsChoice-BPuDZNvr.js";
import { i as j, n as M, r as _e, t as ve } from "./tabs-DF35aEnx.js";
import { a as ye, r as be } from "./publish-BlDBQgme.js";
var xe = c(`UserCheck`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`polyline`, { points: `16 11 18 13 22 9`, key: `1pwet4` }],
  ]),
  N = e(t());
async function Se(e, t = 20) {
  let n = [],
    { data: r, error: i } = await o
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
  let { data: a, error: s } = await o
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
    a &&
    a.forEach((e) => {
      n.push({
        id: `comment-${e.id}`,
        type: `comment`,
        created_at: e.created_at,
        game: e.game,
        comment: { id: e.id, content: e.content },
      });
    });
  let { data: c, error: l } = await o
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
function P(e) {
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
function Ce(e) {
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
var F = n();
