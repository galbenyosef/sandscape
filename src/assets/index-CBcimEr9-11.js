// index-CBcimEr9 11 — jsx
// Lines 3529-3828 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
function Aa(e) {
  return e.replace(/[\\,.()]/g, (e) => `\\${e}`);
}
var ja = async (e, t = 100, n) => {
    if (!e || e.trim() === ``) return { games: [], creators: [] };
    let r = Aa(e.trim());
    if (!r) return { games: [], creators: [] };
    let i = C.from(`games`)
      .select(
        `
        id,
        title,
        description,
        thumbnail_url,
        short_code,
        creator_id,
        like_count,
        comment_count,
        view_count,
        tags,
        status,
        is_live,
        is_placeholder,
        platform_compat,
        created_at
      `,
      )
      .or(`title.ilike.%${r}%,description.ilike.%${r}%`)
      .eq(`status`, `published`)
      .eq(`visibility`, `public`);
    n && (i = i.in(`platform_compat`, xa(n)));
    let { data: a, error: o } = await i
      .order(`is_placeholder`, { ascending: !0 })
      .limit(t);
    if (o) throw (console.error(`Game search error:`, o), o);
    let { data: s, error: c } = await C.from(`profiles`)
      .select(
        `
        user_id,
        username,
        avatar_url,
        bio
      `,
      )
      .or(`username.ilike.%${r}%`)
      .limit(t);
    if (c) throw (console.error(`Creator search error:`, c), c);
    let l = await qe((a || []).map((e) => e.creator_id)),
      u = Object.fromEntries(
        Object.entries(l).map(([e, t]) => [
          e,
          { name: t.username || `Unknown`, avatar: Ue(t.avatar_url) },
        ]),
      );
    return {
      games: (a || []).map((e) => ({
        _id: e.id,
        title: e.title,
        description: e.description,
        thumbnail: e.thumbnail_url,
        creatorId: e.creator_id,
        creator: u[e.creator_id] || { name: `Unknown`, avatar: void 0 },
        likes: e.like_count,
        comments: e.comment_count,
        views: e.view_count,
        category: e.tags?.[0] || `other`,
        isLive: e.is_live,
        isPlaceholder: e.is_placeholder ?? !1,
        createdAt: e.created_at,
        shortCode: e.short_code,
      })),
      creators: (s || []).map((e) => ({
        _id: e.user_id,
        name: e.username || `Unknown`,
        fullName: ``,
        avatar: Ue(e.avatar_url),
        bio: e.bio || ``,
      })),
    };
  },
  Ma = `(max-width: 767px)`;
function Na() {
  let [e, t] = H.useState(
    () => typeof window < `u` && window.matchMedia(Ma).matches,
  );
  return (
    H.useEffect(() => {
      let e = window.matchMedia(Ma),
        n = (e) => t(e.matches);
      return (
        e.addEventListener(`change`, n),
        t(e.matches),
        () => e.removeEventListener(`change`, n)
      );
    }, []),
    e
  );
}
var Pa = `${Ma}, (pointer: coarse) and (max-height: 500px)`;
function Fa() {
  let [e, t] = H.useState(
    () => typeof window < `u` && window.matchMedia(Pa).matches,
  );
  return (
    H.useEffect(() => {
      let e = window.matchMedia(Pa),
        n = (e) => t(e.matches);
      return (
        e.addEventListener(`change`, n),
        t(e.matches),
        () => e.removeEventListener(`change`, n)
      );
    }, []),
    e
  );
}
var Ia = `(pointer: coarse)`;
function La() {
  return typeof window > `u`
    ? `desktop`
    : typeof window.matchMedia == `function`
      ? window.matchMedia(Ia).matches
        ? `mobile`
        : `desktop`
      : (typeof navigator < `u` ? (navigator.maxTouchPoints ?? 0) : 0) > 0
        ? `mobile`
        : `desktop`;
}
function Ra() {
  let [e, t] = H.useState(La);
  return (
    H.useEffect(() => {
      if (typeof window > `u` || typeof window.matchMedia != `function`) return;
      let e = window.matchMedia(Ia),
        n = () => t(La());
      return (
        e.addEventListener(`change`, n),
        t(La()),
        () => e.removeEventListener(`change`, n)
      );
    }, []),
    e
  );
}
function za({ className: e, ...t }) {
  return (0, U.jsx)(`div`, {
    className: x(`animate-pulse rounded-md bg-muted`, e),
    ...t,
  });
}
var Ba = Object.defineProperty,
  Va = (e, t) => Ba(e, `name`, { value: t, configurable: !0 }),
  Ha = `horizontal`,
  Ua = [`horizontal`, `vertical`],
  Wa = H.forwardRef(
    Va(function (e, t) {
      let { decorative: n, orientation: r = Ha, ...i } = e,
        a = Ga(r) ? r : Ha,
        o = n
          ? { role: `none` }
          : {
              "aria-orientation": a === `vertical` ? a : void 0,
              role: `separator`,
            };
      return (0, U.jsx)(D.div, { "data-orientation": a, ...o, ...i, ref: t });
    }, `Separator`),
  );
function Ga(e) {
  return Ua.includes(e);
}
Va(Ga, `isValidOrientation`);
var Ka = H.forwardRef(
  (
    { className: e, orientation: t = `horizontal`, decorative: n = !0, ...r },
    i,
  ) =>
    (0, U.jsx)(Wa, {
      ref: i,
      decorative: n,
      orientation: t,
      className: x(
        `shrink-0 bg-border`,
        t === `horizontal` ? `h-[1px] w-full` : `h-full w-[1px]`,
        e,
      ),
      ...r,
    }),
);
Ka.displayName = Wa.displayName;
var qa = ({
    title: e = `Sandscape – Make Games Without Coding | Creative Game Studio`,
    description:
      t = `Sandscape is a creative studio for making games. Describe an idea, refine it with visual tools, or build every detail by hand—then play and share what you create.`,
    canonical: n = `https://sandscape.app`,
    ogType: r = `website`,
    ogImage:
      i = `https://sandscape.app/22980108-sandscape-ai-generative-game-en-1200x628.jpeg`,
    keywords:
      a = `AI game creator, make games with AI, AI game generator, create games without coding, mobile game maker, game creation platform`,
    noindex: o = !1,
    nofollow: s = !1,
  }) => {
    let c = e.includes(`Sandscape`) ? e : `Sandscape | ${e}`,
      l = [o ? `noindex` : `index`, s ? `nofollow` : `follow`].join(`, `);
    return (0, U.jsxs)(fa, {
      children: [
        (0, U.jsx)(`title`, { children: c }),
        (0, U.jsx)(`meta`, { name: `description`, content: t }),
        (0, U.jsx)(`meta`, { name: `keywords`, content: a }),
        (0, U.jsx)(`meta`, { name: `robots`, content: l }),
        (0, U.jsx)(`link`, { rel: `canonical`, href: n }),
        (0, U.jsx)(`meta`, { property: `og:type`, content: r }),
        (0, U.jsx)(`meta`, { property: `og:url`, content: n }),
        (0, U.jsx)(`meta`, { property: `og:title`, content: c }),
        (0, U.jsx)(`meta`, { property: `og:description`, content: t }),
        (0, U.jsx)(`meta`, { property: `og:image`, content: i }),
        (0, U.jsx)(`meta`, {
          name: `twitter:card`,
          content: `summary_large_image`,
        }),
        (0, U.jsx)(`meta`, { name: `twitter:url`, content: n }),
        (0, U.jsx)(`meta`, { name: `twitter:title`, content: c }),
        (0, U.jsx)(`meta`, { name: `twitter:description`, content: t }),
        (0, U.jsx)(`meta`, { name: `twitter:image`, content: i }),
        (0, U.jsx)(`script`, {
          type: `application/ld+json`,
          children: JSON.stringify({
            "@context": `https://schema.org`,
            "@graph": [
              {
                "@type": `Organization`,
                "@id": `https://sandscape.app/#organization`,
                name: `Sandscape`,
                alternateName: `Sandscape AI`,
                url: `https://sandscape.app`,
                logo: {
                  "@type": `ImageObject`,
                  url: `https://sandscape.app/Sandscape_Logo_White_Large.png`,
                },
                description: `Sandscape is a creative studio for making games — describe an idea, refine it with visual tools, or build every detail by hand, then play and share what you create.`,
                sameAs: [
                  `https://x.com/sandscape_app`,
                  `https://www.youtube.com/@sandscape_app`,
                  `https://sandscape.app/blog`,
                ],
              },
              {
                "@type": `WebSite`,
                "@id": `https://sandscape.app/#website`,
                url: `https://sandscape.app`,
                name: `Sandscape`,
                description: `A creative studio for making games — make games without coding, or build every detail by hand, then play and share what you create.`,
                publisher: { "@id": `https://sandscape.app/#organization` },
              },
              {
                "@type": `SoftwareApplication`,
                name: `Sandscape`,
                applicationCategory: `GameApplication`,
                operatingSystem: `Web, iOS, Android`,
                description: `A creative studio for making games — turn an idea into a playable game, no coding required to start.`,
                offers: { "@type": `Offer`, price: `0`, priceCurrency: `USD` },
              },
            ],
          }),
        }),
      ],
    });
  },
  Ja = H.createContext(null),
  Ya = 0;
function Xa() {
  let e = `(hover: none), (max-width: 767px)`,
    [t, n] = H.useState(
      () => typeof window < `u` && window.matchMedia(e).matches,
    );
  return (
    H.useEffect(() => {
      let t = window.matchMedia(e),
        r = (e) => n(e.matches);
      return (
        t.addEventListener(`change`, r),
        n(t.matches),
        () => t.removeEventListener(`change`, r)
      );
    }, []),
    t
  );
}
function Za(e, t) {
  if (e.height === 0) return 0;
  let n = Math.min(e.bottom, t) - Math.max(e.top, 0);
  return Math.max(0, n) / e.height;
}
var Qa = 8,
  $a = new Set(),
  eo = (e, t) => {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
  };
