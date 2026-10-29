// ShareMenu-DFz6yi7_ 02 — classname
// Lines 183-397 of readable/assets/ShareMenu-DFz6yi7_.pretty.js (statement-aligned).
function O({ url: e, title: t, text: n, trigger: a, contentClassName: o }) {
  let { toast: _ } = r(),
    { t: v } = g(),
    [y, b] = (0, w.useState)(!1),
    [x, S] = (0, w.useState)(!1),
    C = encodeURIComponent(e),
    E = encodeURIComponent(t),
    O = encodeURIComponent(n),
    k = encodeURIComponent(`${n} ${e}`),
    A = [
      {
        key: `x`,
        label: `X`,
        bg: `#000000`,
        icon: (0, T.jsx)(D, { name: `x`, className: `h-[18px] w-[18px]` }),
        href: `https://twitter.com/intent/tweet?url=${C}&text=${O}`,
      },
      {
        key: `facebook`,
        label: `Facebook`,
        bg: `#1877F2`,
        icon: (0, T.jsx)(D, { name: `facebook`, className: `h-5 w-5` }),
        href: `https://www.facebook.com/sharer/sharer.php?u=${C}`,
      },
      {
        key: `reddit`,
        label: `Reddit`,
        bg: `#FF4500`,
        icon: (0, T.jsx)(D, { name: `reddit`, className: `h-5 w-5` }),
        href: `https://www.reddit.com/submit?url=${C}&title=${E}`,
      },
      {
        key: `linkedin`,
        label: `LinkedIn`,
        bg: `#0A66C2`,
        icon: (0, T.jsx)(D, {
          name: `linkedin`,
          className: `h-[18px] w-[18px]`,
        }),
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${C}`,
      },
      {
        key: `whatsapp`,
        label: `WhatsApp`,
        bg: `#25D366`,
        icon: (0, T.jsx)(D, { name: `whatsapp`, className: `h-5 w-5` }),
        href: `https://wa.me/?text=${k}`,
      },
      {
        key: `telegram`,
        label: `Telegram`,
        bg: `#229ED9`,
        icon: (0, T.jsx)(D, { name: `telegram`, className: `h-5 w-5` }),
        href: `https://t.me/share/url?url=${C}&text=${O}`,
      },
      {
        key: `email`,
        label: `Email`,
        bg: `#6B7280`,
        icon: (0, T.jsx)(m, { className: `h-5 w-5` }),
        href: `mailto:?subject=${E}&body=${encodeURIComponent(`${n}\n\n${e}`)}`,
      },
    ],
    j = (e) => {
      (window.open(e, `_blank`, `noopener,noreferrer,width=600,height=640`),
        b(!1));
    },
    M = async () => {
      (await p(e))
        ? (S(!0),
          _({ title: v(`share.linkCopied`, `Link copied`) }),
          setTimeout(() => S(!1), 2e3))
        : window.prompt(v(`share.copyPrompt`, `Copy this link:`), e);
    },
    N = async () => {
      let t = await p(e);
      (_({
        title: t
          ? v(`share.instagramCopied`, `Link copied for Instagram`)
          : v(`share.instagramCopyManual`, `Copy this link for Instagram`),
        description: v(
          `share.instagramDescription`,
          `Paste it into your story, bio, or a DM.`,
        ),
      }),
        t || window.prompt(v(`share.copyPrompt`, `Copy this link:`), e),
        b(!1));
    },
    P = typeof navigator < `u` && typeof navigator.share == `function`,
    F = async () => {
      try {
        (await navigator.share({ title: t, text: n, url: e }), b(!1));
      } catch {}
    },
    I = `flex flex-col items-center gap-1.5 rounded-md p-2 text-center transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
    L = `flex h-11 w-11 items-center justify-center rounded-full text-white`;
  return (0, T.jsxs)(d, {
    open: y,
    onOpenChange: b,
    children: [
      (0, T.jsx)(u, {
        asChild: !0,
        children:
          a ??
          (0, T.jsx)(s, {
            variant: `outline`,
            size: `icon`,
            title: v(`share.title`, `Share`),
            "aria-label": v(`share.title`, `Share`),
            children: (0, T.jsx)(h, { className: `h-4 w-4` }),
          }),
      }),
      (0, T.jsxs)(f, {
        align: `end`,
        className: i(`w-[19rem] p-3`, o),
        children: [
          (0, T.jsx)(`p`, {
            className: `mb-3 text-sm font-medium`,
            children: v(`share.title`, `Share`),
          }),
          (0, T.jsxs)(`div`, {
            className: `grid grid-cols-4 gap-1`,
            children: [
              A.map((e) =>
                (0, T.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    className: I,
                    onClick: () => j(e.href),
                    children: [
                      (0, T.jsx)(`span`, {
                        className: L,
                        style: { background: e.bg },
                        children: e.icon,
                      }),
                      (0, T.jsx)(`span`, {
                        className: `text-[11px] text-muted-foreground`,
                        children: e.label,
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
              (0, T.jsxs)(`button`, {
                type: `button`,
                className: I,
                onClick: N,
                children: [
                  (0, T.jsx)(`span`, {
                    className: L,
                    style: {
                      background: `linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)`,
                    },
                    children: (0, T.jsx)(D, {
                      name: `instagram`,
                      className: `h-5 w-5`,
                    }),
                  }),
                  (0, T.jsx)(`span`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: `Instagram`,
                  }),
                ],
              }),
              P &&
                (0, T.jsxs)(`button`, {
                  type: `button`,
                  className: I,
                  onClick: F,
                  children: [
                    (0, T.jsx)(`span`, {
                      className: `${L} !text-foreground`,
                      style: { background: `hsl(var(--muted))` },
                      children: (0, T.jsx)(h, { className: `h-5 w-5` }),
                    }),
                    (0, T.jsx)(`span`, {
                      className: `text-[11px] text-muted-foreground`,
                      children: v(`share.more`, `More`),
                    }),
                  ],
                }),
            ],
          }),
          (0, T.jsxs)(`div`, {
            className: `mt-3 flex items-center gap-2 rounded-md border bg-muted/40 p-2`,
            children: [
              (0, T.jsx)(l, {
                className: `h-4 w-4 shrink-0 text-muted-foreground`,
              }),
              (0, T.jsx)(`span`, {
                className: `flex-1 truncate text-xs text-muted-foreground`,
                title: e,
                children: e,
              }),
              (0, T.jsxs)(s, {
                size: `sm`,
                variant: `secondary`,
                className: `shrink-0 gap-1`,
                onClick: M,
                children: [
                  x
                    ? (0, T.jsx)(c, { className: `h-3.5 w-3.5 text-green-500` })
                    : null,
                  x ? v(`share.copied`, `Copied`) : v(`share.copy`, `Copy`),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
