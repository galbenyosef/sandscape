// index-CBcimEr9 12 — current
// Lines 3829-4170 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function to({ children: e }) {
  let t = Xa(),
    [n, r] = H.useState($a),
    i = H.useRef(new Map()),
    a = H.useRef(null),
    o = H.useRef(t);
  o.current = t;
  let s = H.useCallback(() => {
      if (!o.current) {
        r((e) => (e.size ? $a : e));
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
        if (l.width === 0 || l.right <= 0 || l.left >= t || Za(l, e) <= Ya)
          return;
        let u = { id: o, group: i, top: l.top };
        a.push(u);
        let d = Math.abs(l.top + l.height / 2 - n);
        d < c && ((c = d), (s = u));
      });
      let l = s;
      if (!l) {
        r((e) => (e.size ? $a : e));
        return;
      }
      let u = new Set([l.id]);
      if (l.group === `grid`)
        for (let e of a)
          e.group === `grid` && Math.abs(e.top - l.top) <= Qa && u.add(e.id);
      r((e) => (eo(e, u) ? e : u));
    }, []),
    c = H.useCallback(() => {
      a.current === null &&
        (a.current = window.requestAnimationFrame(() => {
          ((a.current = null), s());
        }));
    }, [s]);
  H.useEffect(() => {
    if (!t) {
      r((e) => (e.size ? $a : e));
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
  let l = H.useCallback(
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
    u = H.useMemo(() => ({ activeIds: n, register: l }), [n, l]);
  return (0, U.jsx)(Ja.Provider, { value: u, children: e });
}
function no(e) {
  let t = H.useId(),
    n = H.useContext(Ja),
    r = n?.register,
    i = H.useRef(null),
    a = H.useCallback(
      (n) => {
        (i.current?.(),
          (i.current = null),
          !(!n || !r) && (i.current = r(t, n, e)));
      },
      [t, r, e],
    );
  return { isActive: n?.activeIds.has(t) ?? !1, cardRef: a };
}
var ro = 15e3,
  io = 7e3;
function ao({ slides: e, onCtaClick: t, onView: n }) {
  let { t: r } = R(),
    [i, a] = (0, H.useState)(0),
    [o, s] = (0, H.useState)(!1),
    [c, l] = (0, H.useState)(!0),
    u = (0, H.useRef)(null),
    d = (0, H.useRef)(0),
    f = e.length,
    p = f > 0 ? i % f : 0,
    m = e[p],
    h = (0, H.useCallback)(() => {
      a((e) => (f > 0 ? (e + 1) % f : 0));
    }, [f]);
  ((0, H.useEffect)(() => {
    if (o || f === 0) return;
    d.current = Date.now();
    let t = u.current;
    if ((t && ((t.muted = c), t.play().catch(() => {})), n?.(e[p]), f <= 1))
      return;
    let r = window.setTimeout(h, ro);
    return () => window.clearTimeout(r);
  }, [p, f, o]),
    (0, H.useEffect)(() => {
      u.current && (u.current.muted = c);
    }, [c]));
  let g = () => {
    if (f <= 1) return;
    let e = Date.now() - d.current;
    e >= io ? h() : window.setTimeout(h, io - e);
  };
  if (o || f === 0 || !m) return null;
  let _ = m.kind === `game` ? `object-[center_78%]` : `object-center`;
  return (0, U.jsx)(`div`, {
    className: `w-full mb-4 sm:mb-8 relative rounded-lg overflow-hidden shadow-lg`,
    children: (0, U.jsxs)(`div`, {
      className: `relative`,
      children: [
        (0, U.jsxs)(
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
              (0, U.jsx)(`source`, {
                src: m.video,
                type: m.video.endsWith(`.webm`) ? `video/webm` : `video/mp4`,
              }),
              m.videoMp4 &&
                (0, U.jsx)(`source`, { src: m.videoMp4, type: `video/mp4` }),
            ],
          },
          m.key,
        ),
        (0, U.jsx)(`div`, {
          className: `absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10`,
        }),
        (0, U.jsxs)(`div`, {
          className: `absolute inset-y-0 left-4 right-12 sm:left-8 sm:right-auto flex max-w-2xl flex-col items-start justify-center text-white`,
          children: [
            (0, U.jsx)(`h1`, {
              className: `text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 line-clamp-2`,
              children: m.title,
            }),
            (0, U.jsx)(`p`, {
              className: `text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 whitespace-pre-line line-clamp-3`,
              children: m.description,
            }),
            (0, U.jsx)(P, {
              onClick: () => t(m),
              size: `sm`,
              className: `bg-primary hover:bg-primary/90 text-white px-3 py-1 sm:px-6 sm:py-3`,
              children: m.cta,
            }),
          ],
        }),
        (0, U.jsxs)(`div`, {
          className: `absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2`,
          children: [
            (0, U.jsx)(`button`, {
              onClick: () => l((e) => !e),
              className: `bg-background/20 hover:bg-background/40 rounded-full p-1 sm:p-2 transition-colors`,
              "aria-label": c
                ? r(`bannerCarousel.unmute`, `Unmute`)
                : r(`bannerCarousel.mute`, `Mute`),
              children: c
                ? (0, U.jsx)(xe, {
                    className: `h-4 w-4 sm:h-5 sm:w-5 text-white`,
                  })
                : (0, U.jsx)(_e, {
                    className: `h-4 w-4 sm:h-5 sm:w-5 text-white`,
                  }),
            }),
            (0, U.jsx)(`button`, {
              onClick: () => s(!0),
              className: `bg-background/20 hover:bg-background/40 rounded-full p-1 sm:p-2 transition-colors`,
              "aria-label": r(`bannerCarousel.closeBanner`, `Close banner`),
              children: (0, U.jsx)(`svg`, {
                width: `16`,
                height: `16`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                xmlns: `http://www.w3.org/2000/svg`,
                className: `sm:w-5 sm:h-5`,
                children: (0, U.jsx)(`path`, {
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
          (0, U.jsx)(`div`, {
            className: `absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20`,
            children: e.map((e, t) =>
              (0, U.jsx)(
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
var oo = [
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
    href: pa,
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
    href: pa,
  },
  {
    type: `custom`,
    id: `tools`,
    video: `https://media.sandscape.app/banners/webm/tools.webm`,
    videoMp4: `https://media.sandscape.app/banners/mp4/tools.mp4`,
    poster: `https://media.sandscape.app/alpha/2026-07/video/tools-montage.webp`,
    title: `Sandscape`,
    description: `Build worlds from words.
The alpha is open: choose a plan and turn your idea into a playable browser game you can refine, publish and share.`,
    cta: `Join the Alpha`,
    href: pa,
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
function so(e = 4) {
  if (e <= 0) return [];
  let t = oo.find((e) => e.type === `custom` && e.id === `tools`),
    n = oo.filter((e) => e !== t);
  for (let e = n.length - 1; e > 0; e--) {
    let t = Math.floor(Math.random() * (e + 1));
    [n[e], n[t]] = [n[t], n[e]];
  }
  return t ? [t, ...n.slice(0, e - 1)] : n.slice(0, e);
}
var co = [
    { id: `all`, name: `All Games` },
    { id: `action`, name: `Action` },
    { id: `rpg`, name: `RPG` },
    { id: `puzzle`, name: `Puzzle` },
    { id: `racing`, name: `Racing` },
    { id: `strategy`, name: `Strategy` },
  ],
  lo = oo.find((e) => e.type === `custom` && e.id === `tools`);
function uo(e, t) {
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
