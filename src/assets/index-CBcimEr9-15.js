// index-CBcimEr9 15 — startswith
// Lines 4885-4977 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var bo = new Set([`/auth`, `/auth/callback`, `/onboarding`]),
  xo = [
    `direct`,
    `header`,
    `protected_route`,
    `play_gate`,
    `create_gate`,
    `marketing`,
    `publish_your_game_landing`,
    `character_creator_landing`,
    `make_a_game_landing`,
    `ai_game_assets_landing`,
    `tiktok_landing`,
    `alpha_landing`,
    `device_activation`,
    `login_path`,
    `register_path`,
    `api_unauthorized`,
    `invite`,
    `offer`,
    `guided_tour`,
  ],
  So = [
    `auth`,
    `oauth`,
    `email_otp`,
    `password_recovery`,
    `recovery`,
    `email_change`,
  ];
function Co(e) {
  return xo.includes(e) ? e : `direct`;
}
function wo(e) {
  return So.includes(e) ? e : `auth`;
}
function To() {
  return typeof window < `u` ? window.location.origin : `http://localhost`;
}
function Eo(e, t = To()) {
  if (!e) return `/`;
  let n = e.trim();
  if (
    !n ||
    /[\u0000-\u001F\u007F]/.test(n) ||
    n.startsWith(`//`) ||
    n.startsWith(`\\`)
  )
    return `/`;
  try {
    let e = new URL(t),
      r = new URL(n, e);
    if (r.origin !== e.origin || r.username || r.password) return `/`;
    let i = r.pathname.replace(/\/{2,}/g, `/`);
    return bo.has(i.replace(/\/$/, ``) || `/`)
      ? `/`
      : `${i}${r.search}${r.hash}`;
  } catch {
    return `/`;
  }
}
function Do(e) {
  return Eo(`${e.pathname}${e.search ?? ``}${e.hash ?? ``}`);
}
function J(e, t, n) {
  let r = new URLSearchParams(),
    i = Eo(e);
  (i !== `/` && r.set(`returnTo`, i),
    r.set(`entryPoint`, Co(t)),
    n && r.set(`mode`, n));
  let a = r.toString();
  return a ? `/auth?${a}` : `/auth`;
}
function Oo(e, t, n) {
  let r = new URL(`/auth/callback`, To()),
    i = Eo(e);
  return (
    i !== `/` && r.searchParams.set(`returnTo`, i),
    r.searchParams.set(`flow`, wo(t)),
    r.searchParams.set(`entryPoint`, Co(n)),
    r.toString()
  );
}
function ko(e) {
  let t = Eo(e).split(/[?#]/, 1)[0];
  return t === `/play` || t?.startsWith(`/play/`)
    ? `game`
    : t === `/create` || t === `/creating` || t?.startsWith(`/creating/`)
      ? `create`
      : t === `/settings` || t?.startsWith(`/settings/`)
        ? `settings`
        : `other`;
}
