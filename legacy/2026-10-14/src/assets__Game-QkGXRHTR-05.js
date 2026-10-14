// assets__Game-QkGXRHTR 05 — children
// Lines 1653-1797 of readable/assets__Game-QkGXRHTR.pretty.js (statement-aligned).
function Dt({ builtFor: e, onPlayAnyway: t }) {
  let { t: n } = k(),
    r =
      e === `desktop`
        ? n(
            `game.compat.desktopOnly`,
            `This game was made for desktop — it may not run properly on this device.`,
          )
        : n(
            `game.compat.mobileOnly`,
            `This game was made for mobile — it may not run properly on this device.`,
          );
  return (0, H.jsx)(`div`, {
    className: `flex h-full w-full items-center justify-center p-6`,
    children: (0, H.jsx)(Ie, {
      className: `max-w-md w-full`,
      children: (0, H.jsxs)(Fe, {
        className: `flex flex-col items-center gap-4 p-6 text-center`,
        children: [
          (0, H.jsx)(`div`, {
            className: `flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground`,
            children: (0, H.jsx)(y, { className: `h-6 w-6` }),
          }),
          (0, H.jsxs)(`div`, {
            className: `space-y-1`,
            children: [
              (0, H.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: n(`game.compat.title`, `Built for another device`),
              }),
              (0, H.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: r,
              }),
            ],
          }),
          (0, H.jsx)(p, {
            onClick: t,
            children: n(`game.compat.playAnyway`, `Play anyway`),
          }),
        ],
      }),
    }),
  });
}
function Ot({
  gameId: e,
  onCommentAdded: t,
  parentId: n,
  placeholder: i,
  submitLabel: a,
  autoFocus: s = !1,
  onCancel: c,
}) {
  let { isAuthenticated: l } = me(),
    u = r(),
    { t: d } = k(),
    { toast: f } = o(),
    [m, h] = (0, z.useState)(``),
    [g, _] = (0, z.useState)(!1),
    y = i ?? d(`game.commentPlaceholder`, `Add a comment...`),
    b = a ?? d(`game.post`, `Post`),
    x = async (r) => {
      if ((r.preventDefault(), !l)) {
        u(
          I(
            `${window.location.pathname}${window.location.search}`,
            `play_gate`,
          ),
        );
        return;
      }
      if (m.trim()) {
        _(!0);
        try {
          (t(n ? await S(e, n, m.trim()) : await v(e, m.trim())), h(``));
        } catch {
          f({
            title: n
              ? d(`game.toast.replyFailed`, `Failed to post reply.`)
              : d(`game.toast.commentFailed`, `Failed to post comment.`),
            variant: `destructive`,
          });
        } finally {
          _(!1);
        }
      }
    };
  return l
    ? (0, H.jsxs)(`form`, {
        onSubmit: x,
        className: `mb-4 space-y-2`,
        children: [
          (0, H.jsx)(Pe, {
            className: `min-h-0 resize-none`,
            rows: 2,
            placeholder: y,
            value: m,
            onChange: (e) => h(e.target.value),
            onKeyDown: (e) => {
              e.key === `Enter` && !e.shiftKey && (e.preventDefault(), x(e));
            },
            disabled: g,
            maxLength: 500,
            autoFocus: s,
          }),
          (0, H.jsxs)(`div`, {
            className: `flex items-center justify-end gap-2`,
            children: [
              c &&
                (0, H.jsx)(p, {
                  type: `button`,
                  variant: `ghost`,
                  onClick: c,
                  disabled: g,
                  children: d(`general.cancel`, `Cancel`),
                }),
              (0, H.jsx)(p, {
                type: `submit`,
                variant: `secondary`,
                disabled: g || !m.trim(),
                children: g ? d(`game.posting`, `Posting...`) : b,
              }),
            ],
          }),
        ],
      })
    : (0, H.jsx)(`div`, {
        className: `p-4 border rounded cursor-pointer hover:bg-muted/50 transition-colors`,
        onClick: () =>
          u(
            I(
              `${window.location.pathname}${window.location.search}`,
              `play_gate`,
            ),
          ),
        children: (0, H.jsx)(`p`, {
          className: `text-muted-foreground`,
          children: d(
            `game.registerToComment`,
            `Register to comment on this game`,
          ),
        }),
      });
}
