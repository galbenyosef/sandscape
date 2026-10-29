// Profile-CTs1Te13 04 — children
// Lines 1215-1265 of readable/assets/Profile-CTs1Te13.pretty.js (statement-aligned).
function V(e) {
  return h(e) || void 0;
}
function Ee({ activity: e, onClick: t }) {
  let { i18n: n } = p();
  return (0, F.jsxs)(`div`, {
    className: `flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors`,
    onClick: t,
    children: [
      (0, F.jsx)(`div`, {
        className: `h-10 w-10 rounded-full bg-muted flex items-center justify-center`,
        children: B(e.type),
      }),
      (0, F.jsxs)(`div`, {
        className: `flex-1 min-w-0`,
        children: [
          (0, F.jsx)(`p`, {
            className: `text-sm font-medium line-clamp-1`,
            children: P(e),
          }),
          e.comment?.content &&
            (0, F.jsxs)(`p`, {
              className: `text-xs text-muted-foreground line-clamp-1 mt-1`,
              children: [`"`, e.comment.content, `"`],
            }),
          (0, F.jsx)(`p`, {
            className: `text-xs text-muted-foreground mt-1`,
            children: ne(new Date(e.created_at), {
              addSuffix: !0,
              locale: w(n.language),
            }),
          }),
        ],
      }),
      e.game?.thumbnail_url &&
        (0, F.jsx)(`img`, {
          src: V(e.game.thumbnail_url),
          alt: e.game.title,
          className: `h-12 w-16 object-cover rounded`,
        }),
      e.target_user?.avatar_url &&
        (0, F.jsxs)(te, {
          className: `h-10 w-10`,
          children: [
            (0, F.jsx)(_, { src: m(e.target_user.avatar_url) }),
            (0, F.jsx)(g, { children: e.target_user.username?.[0] || `?` }),
          ],
        }),
    ],
  });
}
