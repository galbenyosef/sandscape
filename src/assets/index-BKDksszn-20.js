// index-BKDksszn 20 — children
// Lines 5952-6431 of readable/assets/index-BKDksszn.pretty.js (statement-aligned).
function $o({ className: e }) {
  let t = s(),
    n = f(),
    { isAuthenticated: r } = Sr(),
    { isOpen: i, overlayMode: a, close: o } = Tr(),
    { unreadCount: c } = Ui(),
    { t: l } = z(),
    u = (e) => n.pathname === e,
    d =
      n.pathname === `/settings` &&
      new URLSearchParams(n.search).get(`tab`) === `billing`,
    p = (e) => {
      if (e.startsWith(`/about`)) {
        window.location.href = e;
        return;
      }
      (t(
        e === `/` || e === `/help` || r
          ? e
          : Xo(e, e === `/create` ? `create_gate` : `protected_route`),
      ),
        a && o());
    };
  return (0, W.jsx)(`nav`, {
    className: x(
      `flex flex-col transition-all duration-300 ease-in-out`,
      `h-[calc(100vh-4rem)]`,
      e,
    ),
    style: { width: i ? `16rem` : `4rem` },
    children: (0, W.jsxs)(`div`, {
      className: `h-full flex flex-col`,
      children: [
        (0, W.jsxs)(`div`, {
          className: `flex flex-col flex-grow overflow-y-auto p-2`,
          children: [
            (0, W.jsxs)(`div`, {
              className: `mb-5`,
              children: [
                (0, W.jsx)(`h2`, {
                  className: `px-2 mb-2 text-sm font-bold uppercase text-foreground transition-opacity duration-200 ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                  children: l(`navigation.menu`, `Menu`),
                }),
                (0, W.jsx)(`ul`, {
                  className: `flex flex-col gap-1`,
                  children: (0, W.jsx)(`li`, {
                    children: (0, W.jsxs)(P, {
                      variant: `ghost`,
                      className: x(
                        `w-full gap-2 px-2 h-11`,
                        i ? `justify-start` : `justify-center`,
                        u(`/`)
                          ? `bg-muted text-foreground font-semibold`
                          : `text-foreground`,
                      ),
                      onClick: () => p(`/`),
                      children: [
                        (0, W.jsx)(mn, { className: `h-5 w-5 shrink-0` }),
                        (0, W.jsx)(`span`, {
                          className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                          children: l(`navigation.home`, `Home`),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, W.jsxs)(`div`, {
              className: `mb-5`,
              children: [
                (0, W.jsx)(`h2`, {
                  className: `px-2 mb-2 text-sm font-bold uppercase text-foreground transition-opacity duration-200 ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                  children: l(`navigation.myStuff`, `My Stuff`),
                }),
                (0, W.jsxs)(`ul`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          u(`/history`)
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/history`),
                        children: [
                          (0, W.jsx)(cn, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(`navigation.history`, `History`),
                          }),
                        ],
                      }),
                    }),
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          u(`/likes`)
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/likes`),
                        children: [
                          (0, W.jsx)(pn, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(`navigation.likes`, `Likes`),
                          }),
                        ],
                      }),
                    }),
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          u(`/publish`)
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/publish`),
                        children: [
                          (0, W.jsx)(xn, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(`navigation.publish`, `Publish`),
                          }),
                        ],
                      }),
                    }),
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          d
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/settings?tab=billing`),
                        title: l(
                          `navigation.subscriptionAndSandcoins`,
                          `Subscription`,
                        ),
                        children: [
                          (0, W.jsx)(ln, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(
                              `navigation.subscriptionAndSandcoins`,
                              `Subscription`,
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, W.jsxs)(`div`, {
              className: `mb-5`,
              children: [
                (0, W.jsx)(`h2`, {
                  className: `px-2 mb-2 text-sm font-bold uppercase text-foreground transition-opacity duration-200 ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                  children: l(`navigation.social`, `Social`),
                }),
                (0, W.jsxs)(`ul`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          u(`/following`)
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/following`),
                        children: [
                          (0, W.jsx)(we, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(`navigation.following`, `Following`),
                          }),
                        ],
                      }),
                    }),
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          u(`/followers`)
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/followers`),
                        children: [
                          (0, W.jsx)(Dn, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(`navigation.followers`, `Followers`),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, W.jsxs)(`div`, {
              className: `mb-5`,
              children: [
                (0, W.jsx)(`h2`, {
                  className: `px-2 mb-2 text-sm font-bold uppercase text-foreground transition-opacity duration-200 ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                  children: l(`navigation.tools`, `Tools`),
                }),
                (0, W.jsxs)(`ul`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          u(`/notifications`)
                            ? `bg-muted text-foreground font-semibold`
                            : `text-foreground`,
                          !r && `opacity-70`,
                        ),
                        onClick: () => p(`/notifications`),
                        children: [
                          (0, W.jsx)(nn, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsxs)(`div`, {
                            className: `flex justify-between w-full transition-opacity duration-200 ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: [
                              (0, W.jsx)(`span`, {
                                className: `truncate text-base`,
                                children: l(
                                  `navigation.notifications`,
                                  `Notifications`,
                                ),
                              }),
                              r &&
                                c > 0 &&
                                (0, W.jsx)(`span`, {
                                  className: `ml-auto flex h-5 min-w-5 px-1 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground`,
                                  children: c > 99 ? `99+` : c,
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, W.jsx)(`li`, {
                      children: (0, W.jsxs)(P, {
                        variant: `ghost`,
                        className: x(
                          `w-full gap-2 px-2 h-11`,
                          i ? `justify-start` : `justify-center`,
                          `text-foreground`,
                        ),
                        onClick: () => window.open(`/docs`, `_blank`),
                        children: [
                          (0, W.jsx)(on, { className: `h-5 w-5 shrink-0` }),
                          (0, W.jsx)(`span`, {
                            className: `truncate transition-opacity duration-200 text-base ${i ? `opacity-100` : `opacity-0 w-0 absolute`}`,
                            children: l(`navigation.help`, `Help`),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, W.jsxs)(`div`, {
          className: `mt-auto`,
          children: [
            (0, W.jsxs)(`div`, {
              className: `px-2 py-1 ${i ? `flex justify-center gap-4` : `flex flex-col gap-2 items-center`}`,
              children: [
                (0, W.jsx)(P, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `h-7 w-7 text-foreground`,
                  onClick: () =>
                    window.open(`https://discord.gg/QZKnpxUvk`, `_blank`),
                  title: l(`footer.discord`, `Discord`),
                  children: (0, W.jsx)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `12`,
                    height: `12`,
                    fill: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, W.jsx)(`path`, {
                      d: `M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z`,
                    }),
                  }),
                }),
                (0, W.jsx)(P, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `h-7 w-7 text-foreground`,
                  onClick: () =>
                    window.open(`https://x.com/sandscape_app`, `_blank`),
                  title: l(`footer.twitter`, `X/Twitter`),
                  children: (0, W.jsx)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `12`,
                    height: `12`,
                    fill: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, W.jsx)(`path`, {
                      d: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
                    }),
                  }),
                }),
                (0, W.jsx)(P, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `h-7 w-7 text-foreground`,
                  onClick: () =>
                    window.open(
                      `https://www.instagram.com/sandscape_app`,
                      `_blank`,
                    ),
                  title: l(`footer.instagram`, `Instagram`),
                  children: (0, W.jsx)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `12`,
                    height: `12`,
                    fill: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, W.jsx)(`path`, {
                      d: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`,
                    }),
                  }),
                }),
                (0, W.jsx)(P, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `h-7 w-7 text-foreground`,
                  onClick: () =>
                    window.open(
                      `https://www.youtube.com/@sandscape_app`,
                      `_blank`,
                    ),
                  title: l(`footer.youtube`, `YouTube`),
                  children: (0, W.jsx)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `12`,
                    height: `12`,
                    fill: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, W.jsx)(`path`, {
                      d: `M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`,
                    }),
                  }),
                }),
                (0, W.jsx)(P, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `h-7 w-7 text-foreground`,
                  onClick: () =>
                    window.open(
                      `https://www.tiktok.com/@sandscape.app`,
                      `_blank`,
                    ),
                  title: l(`footer.tiktok`, `TikTok`),
                  children: (0, W.jsx)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `12`,
                    height: `12`,
                    fill: `currentColor`,
                    viewBox: `0 0 24 24`,
                    children: (0, W.jsx)(`path`, {
                      d: `M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z`,
                    }),
                  }),
                }),
              ],
            }),
            (0, W.jsxs)(`div`, {
              className: `p-2 pt-1 border-t border-muted ${i ? `block` : `hidden`}`,
              children: [
                (0, W.jsxs)(P, {
                  variant: `ghost`,
                  size: `sm`,
                  className: `w-full mb-1 h-7 justify-center text-xs text-foreground`,
                  onClick: () => p(`/about`),
                  children: [
                    (0, W.jsx)(pe, { className: `h-3 w-3 mr-1` }),
                    l(`footer.links`, `About | Terms | Privacy`),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: `flex flex-col items-center space-y-1 text-xs text-foreground`,
                  children: [
                    (0, W.jsx)(`div`, {
                      children: l(`footer.copyright`, `© {{year}} Sandscape`, {
                        year: new Date().getFullYear(),
                      }),
                    }),
                    (0, W.jsx)(`div`, {
                      className: `flex items-center`,
                      children: (0, W.jsxs)(`a`, {
                        href: `https://www.ze1.io`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `flex items-center hover:opacity-80 transition-opacity`,
                        children: [
                          (0, W.jsx)(`span`, {
                            className: `text-[10px] mr-1`,
                            children: l(`footer.poweredBy`, `Powered by`),
                          }),
                          (0, W.jsx)(`img`, {
                            src: `/ze1_logo_horizontal.png`,
                            alt: `Ze1`,
                            className: `h-3`,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, W.jsxs)(`div`, {
              className: `p-1 border-t border-muted flex flex-col items-center gap-2 ${i ? `hidden` : `block`}`,
              children: [
                (0, W.jsx)(P, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `h-7 w-7 text-foreground`,
                  onClick: () => p(`/about`),
                  title: l(`footer.aboutLinks`, `About | Terms | Privacy`),
                  children: (0, W.jsx)(pe, { className: `h-3 w-3` }),
                }),
                (0, W.jsx)(`a`, {
                  href: `https://www.ze1.io`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `hover:opacity-80 transition-opacity`,
                  children: (0, W.jsx)(`img`, {
                    src: `/ze1_logo_horizontal.png`,
                    alt: `Ze1`,
                    className: `h-3 w-auto`,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
