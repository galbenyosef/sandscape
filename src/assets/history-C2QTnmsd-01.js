// history-C2QTnmsd 01 — game
// Lines 1-50 of readable/assets/history-C2QTnmsd.pretty.js (statement-aligned).
import { n as e } from "./AuthService-C8NFtVWb.js";
import { t } from "./creators-tFepSIxT.js";
async function n(n = 50, r = 0) {
  let i = await e.auth.getUser();
  if (!i.data.user) throw Error(`Not authenticated`);
  let { data: a, error: o } = await e
    .from(`game_plays`)
    .select(
      `
      played_at,
      play_count,
      game:games!inner(
        id,
        title,
        description,
        thumbnail_url,
        short_code,
        like_count,
        view_count,
        creator_id
      )
    `,
    )
    .eq(`user_id`, i.data.user.id)
    .order(`played_at`, { ascending: !1 })
    .range(r, r + n - 1);
  if (o) throw o;
  let s = a || [],
    c = await t(s.map((e) => e.game?.creator_id));
  return s.map((e) => ({
    id: e.game.id,
    title: e.game.title,
    description: e.game.description,
    thumbnail_url: e.game.thumbnail_url,
    short_code: e.game.short_code,
    creator: e.game.creator_id ? (c[e.game.creator_id] ?? null) : null,
    like_count: e.game.like_count,
    view_count: e.game.view_count,
    played_at: e.played_at,
    play_count: e.play_count,
  }));
}
async function r(t) {
  try {
    let { error: n } = await e.rpc(`record_game_play`, { p_game_id: t });
    n && console.warn(`recordGamePlay failed:`, n.message);
  } catch (e) {
    console.warn(`recordGamePlay error:`, e);
  }
}
