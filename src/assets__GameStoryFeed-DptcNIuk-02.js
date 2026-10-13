// assets__GameStoryFeed-DptcNIuk 02 — classname
// Lines 148-352 of readable/assets__GameStoryFeed-DptcNIuk.pretty.js (statement-aligned).
function je({
  game: e,
  viewerPlatform: t,
  isActive: n,
  shouldMount: r,
  isLiked: i,
  likeCount: a,
  isFollowing: s,
  canFollow: c,
  isLikeLoading: u,
  isFollowLoading: f,
  onToggleLike: ne,
  onToggleFollow: re,
  onOpenComments: v,
  onPlay: y,
}) {
  let { t: b } = ie(),
    x = (0, F.useRef)(null),
    [le, S] = (0, F.useState)(!1),
    C = ae(e.previewVideo),
    T =
      e.platformCompat && e.platformCompat !== `both` && e.platformCompat !== t
        ? e.platformCompat
        : null;
  return (
    (0, F.useEffect)(() => {
      let e = x.current;
      e &&
        (n
          ? e.play().catch(() => {})
          : (e.pause(), (e.currentTime = 0), S(!1)));
    }, [n, r]),
    (0, I.jsxs)(`div`, {
      className: `relative h-full w-full shrink-0 snap-start snap-always overflow-hidden bg-black`,
      children: [
        e.thumbnail
          ? (0, I.jsx)(`img`, {
              src: oe(e.thumbnail),
              alt: ``,
              className: `absolute inset-0 h-full w-full object-cover`,
            })
          : (0, I.jsx)(`div`, { className: `absolute inset-0 bg-neutral-900` }),
        r &&
          C &&
          (0, I.jsx)(`video`, {
            ref: x,
            src: C,
            muted: !0,
            loop: !0,
            playsInline: !0,
            preload: `none`,
            onPlaying: () => S(!0),
            className: o(
              `absolute inset-0 h-full w-full object-cover transition-opacity duration-300`,
              le ? `opacity-100` : `opacity-0`,
            ),
          }),
        (0, I.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40`,
        }),
        (0, I.jsxs)(`div`, {
          className: `absolute right-3 bottom-[20%] flex flex-col items-center gap-5`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, I.jsxs)(se, {
                  className: `h-11 w-11 border-2 border-white`,
                  children: [
                    (0, I.jsx)(_, { src: e.creator.avatar }),
                    (0, I.jsx)(g, { children: e.creator.name?.[0] ?? `?` }),
                  ],
                }),
                c &&
                  (0, I.jsx)(`button`, {
                    onClick: re,
                    disabled: f,
                    "aria-label": s
                      ? b(`game.unfollowCreator`, `Unfollow creator`)
                      : b(`game.followCreator`, `Follow creator`),
                    className: o(
                      `absolute -bottom-2 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-black text-white transition-colors disabled:cursor-wait disabled:opacity-70`,
                      s ? `bg-emerald-500` : `bg-primary`,
                    ),
                    children: f
                      ? (0, I.jsx)(d, { className: `h-3 w-3 animate-spin` })
                      : s
                        ? (0, I.jsx)(l, { className: `h-3 w-3` })
                        : (0, I.jsx)(w, { className: `h-3 w-3` }),
                  }),
              ],
            }),
            (0, I.jsxs)(`button`, {
              onClick: ne,
              disabled: u,
              "aria-label": i
                ? b(`game.unlike`, `Unlike`)
                : b(`game.like`, `Like`),
              className: `flex flex-col items-center gap-1 text-white disabled:cursor-wait disabled:opacity-70`,
              children: [
                (0, I.jsx)(E, {
                  className: o(
                    `h-7 w-7 drop-shadow transition-transform active:scale-125`,
                    i && `fill-red-500 text-red-500`,
                  ),
                }),
                (0, I.jsx)(`span`, {
                  className: `text-xs font-semibold drop-shadow`,
                  children: h(a),
                }),
              ],
            }),
            (0, I.jsxs)(`button`, {
              onClick: v,
              "aria-label": b(`game.comments`, `Comments`),
              className: `flex flex-col items-center gap-1 text-white`,
              children: [
                (0, I.jsx)(D, { className: `h-7 w-7 drop-shadow` }),
                (0, I.jsx)(`span`, {
                  className: `text-xs font-semibold drop-shadow`,
                  children: h(e.comments),
                }),
              ],
            }),
            (0, I.jsx)(ee, {
              url: `${window.location.origin}${ce(e)}`,
              title: e.title,
              text: e.description || e.title,
              contentClassName: `z-[80]`,
              trigger: (0, I.jsxs)(`button`, {
                "aria-label": b(`game.share`, `Share`),
                className: `flex flex-col items-center gap-1 text-white`,
                children: [
                  (0, I.jsx)(m, { className: `h-7 w-7 drop-shadow` }),
                  (0, I.jsx)(`span`, {
                    className: `text-xs font-semibold drop-shadow`,
                    children: b(`game.share`, `Share`),
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `absolute bottom-24 left-4 right-20 flex flex-col gap-2 text-white`,
          children: [
            (0, I.jsx)(`h1`, {
              className: `text-xl font-bold drop-shadow line-clamp-2`,
              children: e.title,
            }),
            (0, I.jsxs)(`p`, {
              className: `text-sm font-medium text-white/80 drop-shadow`,
              children: [`@`, e.creator.name],
            }),
            e.description &&
              (0, I.jsx)(`p`, {
                className: `text-sm text-white/70 drop-shadow line-clamp-2`,
                children: e.description,
              }),
            T &&
              (0, I.jsxs)(`div`, {
                className: `mt-1 flex items-start gap-2 rounded-lg bg-black/60 px-3 py-2 backdrop-blur-sm`,
                children: [
                  (0, I.jsx)(p, { className: `mt-0.5 h-4 w-4 shrink-0` }),
                  (0, I.jsxs)(`div`, {
                    className: `space-y-0.5`,
                    children: [
                      (0, I.jsx)(`p`, {
                        className: `text-xs font-semibold`,
                        children: b(
                          `game.compat.title`,
                          `Built for another device`,
                        ),
                      }),
                      (0, I.jsx)(`p`, {
                        className: `text-xs text-white/80`,
                        children:
                          T === `desktop`
                            ? b(
                                `game.compat.desktopOnly`,
                                `This game was made for desktop — it may not run properly on this device.`,
                              )
                            : b(
                                `game.compat.mobileOnly`,
                                `This game was made for mobile — it may not run properly on this device.`,
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            (0, I.jsxs)(`button`, {
              onClick: y,
              className: `mt-1 flex w-fit items-center gap-2 rounded-full bg-white/95 px-6 py-3 font-bold text-neutral-950 shadow-lg transition-transform active:scale-95`,
              children: [
                (0, I.jsx)(te, { className: `h-5 w-5 fill-neutral-950` }),
                b(`game.play`, `Play`),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
