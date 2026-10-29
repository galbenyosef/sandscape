// index-CBcimEr9 13 — classname
// Lines 4171-4350 of readable/assets/index-CBcimEr9.pretty.js (statement-aligned).
var fo = 20,
  po = 20,
  mo = 80,
  ho = 8,
  go = (e, t) => {
    switch (t) {
      case `all`:
        return e(`categories.all`);
      case `action`:
        return e(`categories.action`);
      case `rpg`:
        return e(`categories.rpg`);
      case `puzzle`:
        return e(`categories.puzzle`);
      case `racing`:
        return e(`categories.racing`);
      case `strategy`:
        return e(`categories.strategy`);
      default:
        return t;
    }
  };
function _o() {
  return typeof window > `u` ||
    window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches
    ? !1
    : navigator.connection?.saveData !== !0;
}
function vo({ game: e, isFeatured: t = !1, group: n, onSelect: r }) {
  let [i, a] = (0, H.useState)(!1),
    [o, s] = (0, H.useState)(!1),
    c = (0, H.useRef)(null),
    { t: l, i18n: u } = R(),
    { isActive: d, cardRef: f } = no(n),
    p = We(e.previewVideo),
    m = !!p,
    h = m && (i || d) && _o();
  ((0, H.useEffect)(() => {
    h && !o && s(!0);
  }, [h, o]),
    (0, H.useEffect)(() => {
      let e = c.current;
      e && (h ? e.play().catch(() => {}) : (e.pause(), (e.currentTime = 0)));
    }, [h, o]));
  let g = (0, H.useCallback)(
    (t) => {
      if (e.translations && e.translations.length > 0) {
        let n = u.language,
          r = e.translations.find((e) => e.language === n);
        if (r) return r[t];
      }
      return e[t];
    },
    [e, u.language],
  )(`title`);
  return (0, U.jsxs)(`div`, {
    ref: f,
    className: `group cursor-pointer space-y-2`,
    onClick: () => r(e._id, g, e.shortCode),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    children: [
      (0, U.jsxs)(`div`, {
        className: `relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/[0.06] transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg group-hover:ring-border dark:ring-white/10 motion-reduce:transform-none motion-reduce:transition-none`,
        children: [
          (0, U.jsx)(`img`, {
            src: Ge(e.thumbnail),
            alt: g,
            loading: `lazy`,
            className: `w-full object-cover aspect-[16/9] rounded-xl`,
          }),
          m &&
            o &&
            (0, U.jsx)(`video`, {
              ref: c,
              src: p,
              preload: `none`,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: `absolute inset-0 w-full h-full object-cover aspect-[16/9] rounded-xl transition-opacity duration-200 ${h ? `opacity-100` : `opacity-0`}`,
            }),
          e.isLive &&
            (0, U.jsxs)(`div`, {
              className: `absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs`,
              children: [
                (0, U.jsx)(ye, { className: `h-3 w-3` }),
                l(`gameCard.live`),
              ],
            }),
          e.isPlaceholder &&
            (0, U.jsxs)(`div`, {
              className: `absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs`,
              children: [
                (0, U.jsx)(Ee, { className: `h-3 w-3` }),
                l(`gameCard.comingSoon`, `Coming soon`),
              ],
            }),
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: `space-y-1`,
        children: [
          (0, U.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, U.jsxs)(Xe, {
                className: `h-6 w-6`,
                children: [
                  (0, U.jsx)(Ye, { src: e.creator.avatar }),
                  (0, U.jsx)(Je, { children: e.creator.name[0] }),
                ],
              }),
              (0, U.jsx)(`h3`, {
                className: `font-semibold text-foreground line-clamp-1 ${t ? `text-base` : `text-sm`}`,
                children: g,
              }),
            ],
          }),
          (0, U.jsxs)(`div`, {
            className: `flex items-center gap-2.5 sm:gap-3 text-xs text-muted-foreground`,
            children: [
              (0, U.jsxs)(`div`, {
                className: `flex items-center gap-1 whitespace-nowrap`,
                children: [
                  (0, U.jsx)(vn, {
                    className: `h-3 w-3 shrink-0 text-muted-foreground`,
                  }),
                  Ke(e.likes),
                  (0, U.jsx)(`span`, {
                    className: `hidden sm:inline`,
                    children: l(`gameCard.likes`),
                  }),
                  (0, U.jsx)(`span`, {
                    className: `sr-only sm:hidden`,
                    children: l(`gameCard.likes`),
                  }),
                ],
              }),
              (0, U.jsxs)(`div`, {
                className: `flex items-center gap-1 whitespace-nowrap`,
                children: [
                  (0, U.jsx)(Sn, {
                    className: `h-3 w-3 shrink-0 text-muted-foreground`,
                  }),
                  Ke(e.comments),
                  (0, U.jsx)(`span`, {
                    className: `hidden sm:inline`,
                    children: l(`gameCard.comments`),
                  }),
                  (0, U.jsx)(`span`, {
                    className: `sr-only sm:hidden`,
                    children: l(`gameCard.comments`),
                  }),
                ],
              }),
              (0, U.jsxs)(`div`, {
                className: `flex items-center gap-1 whitespace-nowrap`,
                children: [
                  (0, U.jsx)(hn, {
                    className: `h-3 w-3 shrink-0 text-muted-foreground`,
                  }),
                  Ke(e.views),
                  (0, U.jsx)(`span`, {
                    className: `hidden sm:inline`,
                    children: l(`gameCard.views`),
                  }),
                  (0, U.jsx)(`span`, {
                    className: `sr-only sm:hidden`,
                    children: l(`gameCard.views`),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
