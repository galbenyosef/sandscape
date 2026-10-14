// assets__creators-BdQ0Kqzc 01 — array
// Lines 1-13 of readable/assets__creators-BdQ0Kqzc.pretty.js (statement-aligned).
import { n as e } from "./AuthService-CQeU_0bQ.js";
async function t(t) {
  let n = Array.from(new Set(t.filter(Boolean))),
    r = {};
  if (n.length === 0) return r;
  let { data: i, error: a } = await e
    .from(`profiles`)
    .select(`user_id, username, avatar_url`)
    .in(`user_id`, n);
  if (a) return (console.warn(`fetchCreatorProfiles failed:`, a.message), r);
  for (let e of i || []) r[e.user_id] = e;
  return r;
}
