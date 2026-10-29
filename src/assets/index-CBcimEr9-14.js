// index-CBcimEr9 14 — classname
// Lines 4351-4884 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function yo() {
  let { t: e } = R(),
    { trackEvent: t } = Rr(),
    [n, r] = (0, H.useState)(!0),
    [i, a] = (0, H.useState)([]),
    [o, c] = (0, H.useState)([]),
    [u, d] = (0, H.useState)([]),
    [f, p] = (0, H.useState)(co),
    [m, h] = (0, H.useState)(`all`),
    [g, _] = (0, H.useState)(() => (lo ? [uo(lo, e)] : [])),
    v = s(),
    y = Ra(),
    [b, S] = (0, H.useState)(fo);
  ((0, H.useEffect)(() => {
    let t = !1;
    return (
      (async () => {
        let n = await Promise.all(
          so(4).map(async (t) => {
            if (t.type === `custom`) return uo(t, e);
            try {
              let { game: n } = await Da(t.shortCode),
                r = We(n.previewVideo);
              return r
                ? {
                    key: `game-${n.shortCode || n._id}`,
                    kind: `game`,
                    video: r,
                    poster: Ge(n.thumbnail),
                    title: t.title || n.title,
                    description: t.description || n.description || ``,
                    cta: t.cta || e(`homeBanners.playCta`, `Play`),
                    analyticsId: `game_${n.shortCode || n._id}`,
                    gameId: n._id,
                    shortCode: n.shortCode,
                  }
                : null;
            } catch (e) {
              return (
                console.error(`Failed to load banner game ${t.shortCode}:`, e),
                null
              );
            }
          }),
        );
        t || _(n.filter((e) => e !== null));
      })(),
      () => {
        t = !0;
      }
    );
  }, []),
    (0, H.useEffect)(() => {
      (S(fo),
        m !== `all` &&
          t(Be.events.FEATURE_INTERACT, {
            action: `filter_category`,
            category: m,
            page: `home`,
          }));
    }, [m, t]),
    (0, H.useEffect)(() => {
      (async () => {
        try {
          r(!0);
          let [e, t, n, i] = await Promise.all([
              wa(),
              Ca(m, `trending`, y),
              Ca(m, `new`, y),
              Ca(m, `all`, y),
            ]),
            o = e,
            s = t,
            l = n,
            u = i,
            f = s.games || [],
            h = new Set(f.map((e) => e._id)),
            g = (l.games || []).filter((e) => !h.has(e._id)).slice(0, ho),
            _ = u.games || [];
          (o.categories?.length && p(o.categories), a(f), c(g), d(_));
        } catch (e) {
          console.error(`Error fetching games:`, e);
        } finally {
          r(!1);
        }
      })();
    }, [m, y]));
  let C = (e, n, r, i = `home`) => {
      (t(Be.events.SELECT_CONTENT, {
        content_type: `game`,
        content_id: `game_${e}`,
        game_id: e,
        game_title: n,
        game_source: i,
      }),
        v(ba({ shortCode: r, _id: e }, i)));
    },
    w = (e, t) => {
      try {
        let n = new URL(e, window.location.origin);
        return (
          n.searchParams.has(`utm_source`) ||
            n.searchParams.set(`utm_source`, `homepage`),
          n.searchParams.has(`utm_medium`) ||
            n.searchParams.set(`utm_medium`, `banner`),
          n.searchParams.has(`utm_campaign`) ||
            n.searchParams.set(`utm_campaign`, `home_banner_reel`),
          n.searchParams.set(`utm_content`, t.analyticsId),
          n.toString()
        );
      } catch {
        return e;
      }
    },
    T = (e) => {
      if (
        (t(Be.events.CTA_CLICK, {
          cta_name: e.analyticsId,
          banner_id: e.analyticsId,
          banner_title: e.title,
          banner_kind: e.kind,
          destination: e.href ?? (e.shortCode ? `game:${e.shortCode}` : ``),
          location: `home_banner`,
        }),
        e.kind === `game`)
      ) {
        C(e.gameId, e.title, e.shortCode, `home_banner`);
        return;
      }
      let n = e.href;
      n.startsWith(`/play`) || n === `/settings?tab=billing`
        ? v(n)
        : (window.location.href = w(n, e));
    },
    E = (e) => {
      t(Be.events.VIDEO_PLAY, {
        video_name: `home_banner_${e.analyticsId}`,
        banner_id: e.analyticsId,
        banner_title: e.title,
        banner_kind: e.kind,
        location: `home_banner`,
      });
    },
    D = (0, H.useRef)(null),
    O = (0, H.useCallback)(
      (e) => {
        n ||
          (D.current && D.current.disconnect(),
          (D.current = new IntersectionObserver((e) => {
            let t = Math.min(mo, u.length);
            e[0].isIntersecting && b < t && S((e) => Math.min(e + po, t));
          })),
          e && D.current.observe(e));
      },
      [n, b, u.length],
    ),
    k = () => {
      S((e) => Math.min(e + po, u.length));
    },
    A = ({ isFeatured: e = !1 }) =>
      (0, U.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, U.jsx)(za, { className: `w-full rounded-lg aspect-[16/9]` }),
          (0, U.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, U.jsx)(za, { className: `h-6 w-6 rounded-full` }),
              (0, U.jsx)(za, { className: `h-4 w-24` }),
            ],
          }),
          (0, U.jsx)(za, { className: `h-3 w-full` }),
        ],
      }),
    j = ({ title: e, games: t, loading: n, isFeatured: r = !1 }) => {
      let [i, a] = (0, H.useState)(0),
        [o, s] = (0, H.useState)(0),
        c = (0, H.useRef)(null);
      (0, H.useEffect)(() => {
        if (c.current) {
          let e = c.current.scrollWidth,
            t = c.current.clientWidth;
          s(e - t);
        }
      }, [t, n]);
      let l = () => {
        c.current && a(c.current.scrollLeft);
      };
      (0, H.useEffect)(() => {
        let e = c.current;
        if (e)
          return (
            e.addEventListener(`scroll`, l),
            () => {
              e.removeEventListener(`scroll`, l);
            }
          );
      }, []);
      let u = (e) => {
          c.current && c.current.scrollTo({ left: e, behavior: `smooth` });
        },
        d = (e) => {
          e.stopPropagation();
          let t = c.current?.clientWidth
            ? Math.floor(
                c.current.clientWidth / (window.innerWidth < 640 ? 1.5 : 4),
              )
            : 300;
          u(Math.max(0, i - t));
        },
        f = (e) => {
          e.stopPropagation();
          let t = c.current?.clientWidth
            ? Math.floor(
                c.current.clientWidth / (window.innerWidth < 640 ? 1.5 : 4),
              )
            : 300;
          u(Math.min(o, i + t));
        },
        p = i < o - 10;
      return !n && t.length === 0
        ? null
        : (0, U.jsxs)(`section`, {
            className: `space-y-4`,
            children: [
              (0, U.jsx)(`div`, {
                className: `flex justify-between items-center`,
                children: (0, U.jsx)(`h2`, {
                  className: `text-xl sm:text-2xl font-semibold tracking-tight`,
                  children: e,
                }),
              }),
              (0, U.jsxs)(`div`, {
                className: `relative w-full overflow-hidden`,
                children: [
                  i > 5 &&
                    (0, U.jsx)(`div`, {
                      className: `absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none`,
                    }),
                  (0, U.jsx)(`div`, {
                    className: `overflow-x-auto w-full scrollbar-hide hide-scrollbar`,
                    ref: c,
                    onScroll: l,
                    style: {
                      msOverflowStyle: `none`,
                      scrollbarWidth: `none`,
                      scrollBehavior: `smooth`,
                    },
                    children: (0, U.jsx)(`div`, {
                      className: `flex`,
                      style: { paddingRight: `32px` },
                      children: n
                        ? Array(8)
                            .fill(0)
                            .map((e, t) =>
                              (0, U.jsxs)(
                                `div`,
                                {
                                  className: `pl-2 pr-2 md:pl-4 md:pr-4 flex-shrink-0 ${r ? `w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4` : `w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6`}`,
                                  children: [
                                    ` `,
                                    (0, U.jsx)(A, { isFeatured: r }),
                                  ],
                                },
                                t,
                              ),
                            )
                        : t.map((e, t) =>
                            (0, U.jsxs)(
                              `div`,
                              {
                                className: `pl-2 pr-2 md:pl-4 md:pr-4 flex-shrink-0 ${r ? `w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4` : `w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6`}`,
                                children: [
                                  ` `,
                                  (0, U.jsx)(vo, {
                                    game: e,
                                    isFeatured: r,
                                    group: `carousel`,
                                    onSelect: C,
                                  }),
                                ],
                              },
                              e._id || t,
                            ),
                          ),
                    }),
                  }),
                  i > 5 &&
                    (0, U.jsx)(`button`, {
                      onClick: d,
                      className: `absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1 sm:p-2 z-30`,
                      children: (0, U.jsx)(`svg`, {
                        width: `20`,
                        height: `20`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        className: `text-foreground`,
                        children: (0, U.jsx)(`path`, {
                          d: `M15 19L8 12L15 5`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                        }),
                      }),
                    }),
                  p &&
                    (0, U.jsx)(`button`, {
                      onClick: f,
                      className: `absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1 sm:p-2 z-30`,
                      children: (0, U.jsx)(`svg`, {
                        width: `20`,
                        height: `20`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        className: `text-foreground`,
                        children: (0, U.jsx)(`path`, {
                          d: `M9 5L16 12L9 19`,
                          stroke: `currentColor`,
                          strokeWidth: `2`,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                        }),
                      }),
                    }),
                  (0, U.jsx)(`div`, {
                    className: `absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none`,
                  }),
                ],
              }),
            ],
          });
    };
  return (0, U.jsxs)(to, {
    children: [
      (0, U.jsx)(qa, {
        title: `Sandscape`,
        description: `Sandscape turns your idea into a playable browser game you can refine with visual tools or code, then publish and share.`,
        keywords: e(
          `seo.keywords`,
          `AI game creator, make games with AI, AI game generator, create games without coding, mobile game maker, game creation platform, collaborative game development, prompt to game, AI game development, no-code game creation`,
        ),
        canonical: `https://sandscape.app/`,
        ogImage: `https://sandscape.app/assets/videos/Sandscape_trailer_thumbnail.jpg`,
      }),
      (0, U.jsxs)(`div`, {
        className: `p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6`,
        children: [
          g.length > 0 &&
            (0, U.jsx)(ao, { slides: g, onCtaClick: T, onView: E }),
          (0, U.jsx)(`div`, {
            className: `flex gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide`,
            children: f.map((t) =>
              (0, U.jsx)(
                P,
                {
                  variant: `outline`,
                  onClick: () => h(t.id),
                  className: x(
                    `whitespace-nowrap rounded-full px-4 text-xs sm:text-sm transition-colors`,
                    m === t.id
                      ? `border-transparent bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 hover:text-primary-foreground`
                      : `border-border bg-muted/40 text-foreground/70 hover:bg-muted hover:text-foreground`,
                  ),
                  size: `sm`,
                  children: go(e, t.id),
                },
                t.id,
              ),
            ),
          }),
          (0, U.jsxs)(`div`, {
            className: `space-y-6 sm:space-y-8`,
            children: [
              (0, U.jsx)(j, {
                title: e(`homePage.trending`, `Trending`),
                games: i,
                loading: n,
                isFeatured: !0,
              }),
              (0, U.jsx)(j, {
                title: e(`homePage.newReleases`, `New Releases`),
                games: o,
                loading: n,
                isFeatured: !0,
              }),
              (0, U.jsx)(Ka, { className: `my-4 sm:my-8` }),
              (0, U.jsxs)(`section`, {
                className: `space-y-3 sm:space-y-4`,
                children: [
                  (0, U.jsxs)(`h2`, {
                    className: `text-xl sm:text-2xl font-semibold tracking-tight`,
                    children: [
                      e(`homePage.allGames`, `All Games`),
                      ` (`,
                      u.length,
                      `)`,
                    ],
                  }),
                  (0, U.jsx)(`div`, {
                    className: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4`,
                    children: n
                      ? Array(fo)
                          .fill(0)
                          .map((e, t) => (0, U.jsx)(A, {}, t))
                      : u.slice(0, b).map((e, t) =>
                          (0, U.jsx)(
                            Ze.div,
                            {
                              ref:
                                t === b - 1 && b < Math.min(mo, u.length)
                                  ? O
                                  : void 0,
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.3 },
                              children: (0, U.jsx)(vo, {
                                game: e,
                                group: `grid`,
                                onSelect: C,
                              }),
                            },
                            e._id,
                          ),
                        ),
                  }),
                  !n &&
                    b >= mo &&
                    b < u.length &&
                    (0, U.jsx)(`div`, {
                      className: `flex justify-center pt-3 sm:pt-4`,
                      children: (0, U.jsx)(P, {
                        variant: `outline`,
                        onClick: k,
                        children: e(`homePage.loadMore`, `Load more games`),
                      }),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, U.jsxs)(`footer`, {
        className: `border-t border-border/70 px-4 py-4 sm:px-6`,
        children: [
          (0, U.jsxs)(`div`, {
            className: `mx-auto flex max-w-7xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between`,
            children: [
              (0, U.jsxs)(`div`, {
                className: `space-y-1`,
                children: [
                  (0, U.jsxs)(`p`, {
                    children: [
                      (0, U.jsx)(`span`, {
                        className: `font-semibold text-foreground`,
                        children: `Sandscape`,
                      }),
                      (0, U.jsx)(`span`, {
                        className: `mx-2 text-border`,
                        "aria-hidden": `true`,
                        children: `·`,
                      }),
                      e(
                        `homePage.footerPurpose`,
                        `A creative studio for making, playing, and sharing browser games.`,
                      ),
                    ],
                  }),
                  (0, U.jsx)(`p`, {
                    children: e(
                      `homePage.googleSignInPurpose`,
                      `Google Sign-In is used to create your Sandscape account and profile.`,
                    ),
                  }),
                ],
              }),
              (0, U.jsxs)(`nav`, {
                "aria-label": e(
                  `homePage.footerNavigation`,
                  `Footer navigation`,
                ),
                className: `flex flex-wrap gap-x-4 gap-y-1`,
                children: [
                  (0, U.jsx)(`a`, {
                    className: `hover:text-foreground`,
                    href: `/about`,
                    children: e(`homePage.about`, `About`),
                  }),
                  (0, U.jsx)(l, {
                    className: `hover:text-foreground`,
                    to: pa,
                    children: e(`homePage.joinAlpha`, `Join the alpha`),
                  }),
                  (0, U.jsx)(`a`, {
                    className: `hover:text-foreground`,
                    href: `/about/contact`,
                    children: e(`homePage.contact`, `Contact`),
                  }),
                  (0, U.jsx)(`a`, {
                    className: `hover:text-foreground`,
                    href: `/about/privacy`,
                    children: e(`homePage.privacy`, `Privacy`),
                  }),
                  (0, U.jsx)(`a`, {
                    className: `hover:text-foreground`,
                    href: `/about/terms`,
                    children: e(`homePage.terms`, `Terms`),
                  }),
                ],
              }),
            ],
          }),
          (0, U.jsx)(`div`, {
            className: `mx-auto mt-4 flex max-w-7xl justify-center`,
            children: (0, U.jsx)(`a`, {
              href: `https://theresanaiforthat.com/ai/sandscape/?ref=featured&v=12805535`,
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
              className: `transition-opacity hover:opacity-80`,
              children: (0, U.jsx)(`img`, {
                src: `https://media.theresanaiforthat.com/featured-on-taaft.png?width=600`,
                alt: `Featured on There's An AI For That`,
                className: `h-auto w-[200px] max-w-full dark:invert`,
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
