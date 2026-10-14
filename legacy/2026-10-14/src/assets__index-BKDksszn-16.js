// assets__index-BKDksszn 16 — current
// Lines 4810-5151 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function wo({ children: e }) {
  let t = yo(),
    [n, r] = U.useState(So),
    i = U.useRef(new Map()),
    a = U.useRef(null),
    o = U.useRef(t);
  o.current = t;
  let s = U.useCallback(() => {
      if (!o.current) {
        r((e) => (e.size ? So : e));
        return;
      }
      let e = window.innerHeight,
        t = window.innerWidth,
        n = e / 2,
        a = [],
        s = null,
        c = 1 / 0;
      i.current.forEach(({ el: r, group: i }, o) => {
        let l = r.getBoundingClientRect();
        if (l.width === 0 || l.right <= 0 || l.left >= t || bo(l, e) <= vo)
          return;
        let u = { id: o, group: i, top: l.top };
        a.push(u);
        let d = Math.abs(l.top + l.height / 2 - n);
        d < c && ((c = d), (s = u));
      });
      let l = s;
      if (!l) {
        r((e) => (e.size ? So : e));
        return;
      }
      let u = new Set([l.id]);
      if (l.group === `grid`)
        for (let e of a)
          e.group === `grid` && Math.abs(e.top - l.top) <= xo && u.add(e.id);
      r((e) => (Co(e, u) ? e : u));
    }, []),
    c = U.useCallback(() => {
      a.current === null &&
        (a.current = window.requestAnimationFrame(() => {
          ((a.current = null), s());
        }));
    }, [s]);
  U.useEffect(() => {
    if (!t) {
      r((e) => (e.size ? So : e));
      return;
    }
    return (
      window.addEventListener(`scroll`, c, { passive: !0, capture: !0 }),
      window.addEventListener(`resize`, c),
      c(),
      () => {
        (window.removeEventListener(`scroll`, c, { capture: !0 }),
          window.removeEventListener(`resize`, c),
          a.current !== null && window.cancelAnimationFrame(a.current),
          (a.current = null));
      }
    );
  }, [t, c]);
  let l = U.useCallback(
      (e, t, n) => (
        (t.dataset.cardId = e),
        i.current.set(e, { el: t, group: n }),
        c(),
        () => {
          i.current.delete(e);
        }
      ),
      [c],
    ),
    u = U.useMemo(() => ({ activeIds: n, register: l }), [n, l]);
  return (0, W.jsx)(_o.Provider, { value: u, children: e });
}
function To(e) {
  let t = U.useId(),
    n = U.useContext(_o),
    r = n?.register,
    i = U.useRef(null),
    a = U.useCallback(
      (n) => {
        (i.current?.(),
          (i.current = null),
          !(!n || !r) && (i.current = r(t, n, e)));
      },
      [t, r, e],
    );
  return { isActive: n?.activeIds.has(t) ?? !1, cardRef: a };
}
var Eo = 15e3,
  Do = 7e3;
function Oo({ slides: e, onCtaClick: t, onView: n }) {
  let { t: r } = z(),
    [i, a] = (0, U.useState)(0),
    [o, s] = (0, U.useState)(!1),
    [c, l] = (0, U.useState)(!0),
    u = (0, U.useRef)(null),
    d = (0, U.useRef)(0),
    f = e.length,
    p = f > 0 ? i % f : 0,
    m = e[p],
    h = (0, U.useCallback)(() => {
      a((e) => (f > 0 ? (e + 1) % f : 0));
    }, [f]);
  ((0, U.useEffect)(() => {
    if (o || f === 0) return;
    d.current = Date.now();
    let t = u.current;
    if ((t && ((t.muted = c), t.play().catch(() => {})), n?.(e[p]), f <= 1))
      return;
    let r = window.setTimeout(h, Eo);
    return () => window.clearTimeout(r);
  }, [p, f, o]),
    (0, U.useEffect)(() => {
      u.current && (u.current.muted = c);
    }, [c]));
  let g = () => {
    if (f <= 1) return;
    let e = Date.now() - d.current;
    e >= Do ? h() : window.setTimeout(h, Do - e);
  };
  if (o || f === 0 || !m) return null;
  let _ = m.kind === `game` ? `object-[center_78%]` : `object-center`;
  return (0, W.jsx)(`div`, {
    className: `w-full mb-4 sm:mb-8 relative rounded-lg overflow-hidden shadow-lg`,
    children: (0, W.jsxs)(`div`, {
      className: `relative`,
      children: [
        (0, W.jsxs)(
          `video`,
          {
            ref: u,
            poster: m.poster,
            className: `w-full transition-all duration-500 ease-in-out aspect-[21/9] sm:aspect-[21/4.5] object-cover ${_}`,
            playsInline: !0,
            muted: c,
            autoPlay: !0,
            onEnded: g,
            children: [
              (0, W.jsx)(`source`, {
                src: m.video,
                type: m.video.endsWith(`.webm`) ? `video/webm` : `video/mp4`,
              }),
              m.videoMp4 &&
                (0, W.jsx)(`source`, { src: m.videoMp4, type: `video/mp4` }),
            ],
          },
          m.key,
        ),
        (0, W.jsx)(`div`, {
          className: `absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10`,
        }),
        (0, W.jsxs)(`div`, {
          className: `absolute inset-y-0 left-4 right-12 sm:left-8 sm:right-auto flex max-w-2xl flex-col items-start justify-center text-white`,
          children: [
            (0, W.jsx)(`h1`, {
              className: `text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 line-clamp-2`,
              children: m.title,
            }),
            (0, W.jsx)(`p`, {
              className: `text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 whitespace-pre-line line-clamp-3`,
              children: m.description,
            }),
            (0, W.jsx)(P, {
              onClick: () => t(m),
              size: `sm`,
              className: `bg-primary hover:bg-primary/90 text-white px-3 py-1 sm:px-6 sm:py-3`,
              children: m.cta,
            }),
          ],
        }),
        (0, W.jsxs)(`div`, {
          className: `absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2`,
          children: [
            (0, W.jsx)(`button`, {
              onClick: () => l((e) => !e),
              className: `bg-background/20 hover:bg-background/40 rounded-full p-1 sm:p-2 transition-colors`,
              "aria-label": c
                ? r(`bannerCarousel.unmute`, `Unmute`)
                : r(`bannerCarousel.mute`, `Mute`),
              children: c
                ? (0, W.jsx)(ye, {
                    className: `h-4 w-4 sm:h-5 sm:w-5 text-white`,
                  })
                : (0, W.jsx)(he, {
                    className: `h-4 w-4 sm:h-5 sm:w-5 text-white`,
                  }),
            }),
            (0, W.jsx)(`button`, {
              onClick: () => s(!0),
              className: `bg-background/20 hover:bg-background/40 rounded-full p-1 sm:p-2 transition-colors`,
              "aria-label": r(`bannerCarousel.closeBanner`, `Close banner`),
              children: (0, W.jsx)(`svg`, {
                width: `16`,
                height: `16`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                xmlns: `http://www.w3.org/2000/svg`,
                className: `sm:w-5 sm:h-5`,
                children: (0, W.jsx)(`path`, {
                  d: `M18 6L6 18M6 6L18 18`,
                  stroke: `white`,
                  strokeWidth: `2`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                }),
              }),
            }),
          ],
        }),
        f > 1 &&
          (0, W.jsx)(`div`, {
            className: `absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20`,
            children: e.map((e, t) =>
              (0, W.jsx)(
                `button`,
                {
                  onClick: () => a(t),
                  "aria-label": r(
                    `bannerCarousel.showBanner`,
                    `Show banner {{number}}`,
                    { number: t + 1 },
                  ),
                  "aria-current": t === p,
                  className: `h-1.5 rounded-full transition-all duration-300 ${t === p ? `w-6 bg-white` : `w-1.5 bg-white/50 hover:bg-white/80`}`,
                },
                e.key,
              ),
            ),
          }),
      ],
    }),
  });
}
var ko = [
  {
    type: `custom`,
    id: `flumble`,
    video: `https://media.sandscape.app/banners/webm/flumble.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/flumble.mp4`,
    title: `Flumble`,
    description: `An infinite glide through weird, abstract worlds.`,
    cta: `Play`,
    href: `/play?g=Nc69P7Zq`,
  },
  {
    type: `custom`,
    id: `zombie-blaster`,
    video: `https://media.sandscape.app/banners/webm/zombie-blaster.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/zombie-blaster.mp4`,
    title: `Zombie Blaster`,
    description: `Paint-gun FPS against neon-punk zombies.`,
    cta: `Join the Alpha`,
    href: `/alpha`,
  },
  {
    type: `custom`,
    id: `voxel-craft`,
    video: `https://media.sandscape.app/banners/webm/voxel-craft.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/voxel-craft.mp4`,
    title: `Skybridge`,
    description: `Mine your way across floating islands.`,
    cta: `Play`,
    href: `/play?g=zbHLecKZ`,
  },
  {
    type: `custom`,
    id: `pollinate`,
    video: `https://media.sandscape.app/banners/webm/pollinate.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/pollinate.mp4`,
    title: `Pollinate`,
    description: `A bee brings a frozen world back to bloom.`,
    cta: `Play`,
    href: `/play?g=nwIjTfm8`,
  },
  {
    type: `custom`,
    id: `room-that-remembers`,
    video: `https://media.sandscape.app/banners/webm/room-that-remembers.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/room-that-remembers.mp4`,
    title: `Room That Remembers`,
    description: `Walk through rooms rebuilt from memory.`,
    cta: `Join the Alpha`,
    href: `/alpha`,
  },
  {
    type: `custom`,
    id: `tools`,
    video: `https://media.sandscape.app/banners/webm/tools.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/tools.mp4`,
    poster: `https://media.sandscape.app/alpha/2026-07/video/tools-montage.webp`,
    title: `Sandscape`,
    description: `Build worlds from words.
Sandscape turns your idea into a playable browser game you can refine with visual tools or code, then publish and share.`,
    cta: `Explore the Alpha`,
    href: `/alpha`,
  },
  {
    type: `custom`,
    id: `rescape-beta`,
    video: `https://media.sandscape.app/banners/webm/rescape-beta.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/rescape-beta.mp4`,
    title: `Rescape Beta`,
    description: `The next Sandscape, now in beta.`,
    cta: `Try the Beta`,
    href: `/v2`,
  },
];
function Ao(e = 4) {
  if (e <= 0) return [];
  let t = ko.find((e) => e.type === `custom` && e.id === `tools`),
    n = ko.filter((e) => e !== t);
  for (let e = n.length - 1; e > 0; e--) {
    let t = Math.floor(Math.random() * (e + 1));
    [n[e], n[t]] = [n[t], n[e]];
  }
  return t ? [t, ...n.slice(0, e - 1)] : n.slice(0, e);
}
var jo = [
    { id: `all`, name: `All Games` },
    { id: `action`, name: `Action` },
    { id: `rpg`, name: `RPG` },
    { id: `puzzle`, name: `Puzzle` },
    { id: `racing`, name: `Racing` },
    { id: `strategy`, name: `Strategy` },
  ],
  Mo = ko.find((e) => e.type === `custom` && e.id === `tools`);
function No(e, t) {
  return {
    key: e.id,
    kind: `custom`,
    video: e.video,
    videoMp4: e.videoMp4,
    poster: e.poster,
    title: String(t(`homeBanners.${e.id}.title`, e.title)),
    description: String(t(`homeBanners.${e.id}.description`, e.description)),
    cta: String(t(`homeBanners.${e.id}.cta`, e.cta)),
    href: e.href,
    analyticsId: e.id,
  };
}
