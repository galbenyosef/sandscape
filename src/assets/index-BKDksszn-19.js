// index-BKDksszn 19 — startswith
// Lines 5864-5951 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
var Ho = new Set([`/auth`, `/auth/callback`, `/onboarding`]),
  Uo = [
    `direct`,
    `header`,
    `protected_route`,
    `play_gate`,
    `create_gate`,
    `marketing`,
    `publish_your_game_landing`,
    `character_creator_landing`,
    `device_activation`,
    `login_path`,
    `register_path`,
    `api_unauthorized`,
    `invite`,
    `guided_tour`,
  ],
  Wo = [
    `auth`,
    `oauth`,
    `email_otp`,
    `password_recovery`,
    `recovery`,
    `email_change`,
  ];
function Go(e) {
  return Uo.includes(e) ? e : `direct`;
}
function Ko(e) {
  return Wo.includes(e) ? e : `auth`;
}
function qo() {
  return typeof window < `u` ? window.location.origin : `http://localhost`;
}
function Jo(e, t = qo()) {
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
    return Ho.has(i.replace(/\/$/, ``) || `/`)
      ? `/`
      : `${i}${r.search}${r.hash}`;
  } catch {
    return `/`;
  }
}
function Yo(e) {
  return Jo(`${e.pathname}${e.search ?? ``}${e.hash ?? ``}`);
}
function Xo(e, t, n) {
  let r = new URLSearchParams(),
    i = Jo(e);
  (i !== `/` && r.set(`returnTo`, i),
    r.set(`entryPoint`, Go(t)),
    n && r.set(`mode`, n));
  let a = r.toString();
  return a ? `/auth?${a}` : `/auth`;
}
function Zo(e, t, n) {
  let r = new URL(`/auth/callback`, qo()),
    i = Jo(e);
  return (
    i !== `/` && r.searchParams.set(`returnTo`, i),
    r.searchParams.set(`flow`, Ko(t)),
    r.searchParams.set(`entryPoint`, Go(n)),
    r.toString()
  );
}
function Qo(e) {
  let t = Jo(e).split(/[?#]/, 1)[0];
  return t === `/play` || t?.startsWith(`/play/`)
    ? `game`
    : t === `/create` || t === `/creating` || t?.startsWith(`/creating/`)
      ? `create`
      : t === `/settings` || t?.startsWith(`/settings/`)
        ? `settings`
        : `other`;
}
