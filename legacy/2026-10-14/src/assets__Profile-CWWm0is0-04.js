// assets__Profile-CWWm0is0 04 — children
// Lines 1159-1206 of readable/assets__Profile-CWWm0is0.pretty.js (statement-aligned).
function Se({ activity: e, onClick: t }) {
  let { i18n: n } = d();
  return (0, P.jsxs)(`div`, {
    className: `flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors`,
    onClick: t,
    children: [
      (0, P.jsx)(`div`, {
        className: `h-10 w-10 rounded-full bg-muted flex items-center justify-center`,
        children: z(e.type),
      }),
      (0, P.jsxs)(`div`, {
        className: `flex-1 min-w-0`,
        children: [
          (0, P.jsx)(`p`, {
            className: `text-sm font-medium line-clamp-1`,
            children: N(e),
          }),
          e.comment?.content &&
            (0, P.jsxs)(`p`, {
              className: `text-xs text-muted-foreground line-clamp-1 mt-1`,
              children: [`"`, e.comment.content, `"`],
            }),
          (0, P.jsx)(`p`, {
            className: `text-xs text-muted-foreground mt-1`,
            children: h(new Date(e.created_at), {
              addSuffix: !0,
              locale: C(n.language),
            }),
          }),
        ],
      }),
      e.game?.thumbnail_url &&
        (0, P.jsx)(`img`, {
          src: B(e.game.thumbnail_url),
          alt: e.game.title,
          className: `h-12 w-16 object-cover rounded`,
        }),
      e.target_user?.avatar_url &&
        (0, P.jsxs)(te, {
          className: `h-10 w-10`,
          children: [
            (0, P.jsx)(ee, { src: f(e.target_user.avatar_url) }),
            (0, P.jsx)(m, { children: e.target_user.username?.[0] || `?` }),
          ],
        }),
    ],
  });
}
