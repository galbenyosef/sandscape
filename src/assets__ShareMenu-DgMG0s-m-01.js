// assets__ShareMenu-DgMG0s-m 01 — error
// Lines 1-182 of readable/assets__ShareMenu-DgMG0s-m.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./useToast-QK0Q4gGT.js";
import { l as i, n as a } from "./AuthService-CQeU_0bQ.js";
import { r as o, t as s } from "./button-Ap3ysi5G.js";
import { t as c } from "./check-DVcwwxJi.js";
import {
  a as l,
  i as u,
  n as d,
  r as f,
  t as p,
} from "./clipboard-D18mYxSs.js";
import { t as m } from "./mail-D0O-liE7.js";
import { t as h } from "./share-2-B1vEkEyU.js";
import { t as g } from "./useTranslation-BdauNPOZ.js";
var _ = o(`MonitorSmartphone`, [
  [
    `path`,
    {
      d: `M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8`,
      key: `10dyio`,
    },
  ],
  [`path`, { d: `M10 19v-3.96 3.15`, key: `1irgej` }],
  [`path`, { d: `M7 19h5`, key: `qswx4l` }],
  [
    `rect`,
    { width: `6`, height: `10`, x: `16`, y: `12`, rx: `2`, key: `1egngj` },
  ],
]);
async function v(e, t) {
  let { data: n, error: r } = await a.auth.getUser();
  if (r || !n?.user) throw Error(`Not authenticated`);
  let { data: i, error: o } = await a
    .from(`comments`)
    .insert([
      { game_id: e, user_id: n.user.id, content: t, parent_comment_id: null },
    ])
    .select(`id, user_id, content, like_count, created_at`)
    .single();
  if (o) throw o;
  let s = { _id: n.user.id, name: `Unknown`, avatar: void 0 },
    { data: c, error: l } = await a
      .from(`profiles`)
      .select(`user_id,username,avatar_url`)
      .eq(`user_id`, n.user.id)
      .maybeSingle();
  return (
    !l &&
      c &&
      (s = {
        _id: c.user_id,
        name: c.username || `Unknown`,
        avatar: c.avatar_url
          ? a.storage.from(`avatars`).getPublicUrl(c.avatar_url).data.publicUrl
          : void 0,
      }),
    {
      _id: i.id,
      user: s,
      text: i.content,
      likes: i.like_count,
      replies: 0,
      createdAt: i.created_at,
    }
  );
}
async function y(e) {
  let { data: t, error: n } = await a.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { data: r, error: i } = await a
    .from(`comment_likes`)
    .select(`*`)
    .eq(`user_id`, t.user.id)
    .eq(`comment_id`, e)
    .maybeSingle();
  if (i) throw i;
  if (r) throw Error(`Already liked`);
  let { error: o } = await a.from(`comment_likes`).insert([
    {
      comment_id: e,
      user_id: t.user.id,
      created_at: new Date().toISOString(),
    },
  ]);
  if (o) throw o;
}
async function b(e) {
  let { data: t, error: n } = await a.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { error: r } = await a
    .from(`comment_likes`)
    .delete()
    .eq(`user_id`, t.user.id)
    .eq(`comment_id`, e);
  if (r) throw r;
}
async function x(e) {
  let { data: t, error: n } = await a.auth.getUser();
  if (n || !t?.user) return !1;
  let { data: r, error: i } = await a
    .from(`comment_likes`)
    .select(`*`)
    .eq(`user_id`, t.user.id)
    .eq(`comment_id`, e)
    .maybeSingle();
  if (i) throw i;
  return !!r;
}
async function S(e) {
  let { data: t, error: n } = await a.auth.getUser();
  if (n || !t?.user) throw Error(`Not authenticated`);
  let { data: r, error: i } = await a
    .from(`comments`)
    .select(`user_id`)
    .eq(`id`, e)
    .single();
  if (i) throw i;
  if (r.user_id !== t.user.id)
    throw Error(`Not authorized to delete this comment`);
  let { error: o } = await a.from(`comments`).delete().eq(`id`, e);
  if (o) throw o;
}
async function C(e, t, n) {
  let { data: r, error: i } = await a.auth.getUser();
  if (i || !r?.user) throw Error(`Not authenticated`);
  let { data: o, error: s } = await a
    .from(`comments`)
    .insert([
      { game_id: e, user_id: r.user.id, content: n, parent_comment_id: t },
    ])
    .select(`id, user_id, content, like_count, created_at, parent_comment_id`)
    .single();
  if (s) throw s;
  let c = { _id: r.user.id, name: `Unknown`, avatar: void 0 },
    { data: l, error: u } = await a
      .from(`profiles`)
      .select(`user_id,username,avatar_url`)
      .eq(`user_id`, r.user.id)
      .maybeSingle();
  return (
    !u &&
      l &&
      (c = {
        _id: l.user_id,
        name: l.username || `Unknown`,
        avatar: l.avatar_url
          ? a.storage.from(`avatars`).getPublicUrl(l.avatar_url).data.publicUrl
          : void 0,
      }),
    {
      _id: o.id,
      user: c,
      text: o.content,
      likes: o.like_count,
      replies: 0,
      createdAt: o.created_at,
      parentCommentId: o.parent_comment_id,
    }
  );
}
var w = e(t()),
  T = n(),
  E = {
    x: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
    facebook: `M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z`,
    reddit: `M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z`,
    linkedin: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`,
    whatsapp: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488`,
    telegram: `M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z`,
    instagram: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`,
  };
function D({ name: e, className: t }) {
  return (0, T.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    className: t,
    "aria-hidden": `true`,
    children: (0, T.jsx)(`path`, { d: E[e] }),
  });
}
