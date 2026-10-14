// assets__index-BKDksszn 03 — key
// Lines 839-1161 of readable/assets__index-BKDksszn.pretty.js (statement-aligned).
function Yt(e) {
  let t = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if (
        (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent),
        $t(e))
      ) {
        let n = e.ariaHidden || e.hidden || e.style.display === `none`,
          r = e.dataset.radixToastAnnounceExclude === ``;
        if (!n)
          if (r) {
            let n = e.dataset.radixToastAnnounceAlt;
            n && t.push(n);
          } else t.push(...Yt(e));
      }
    }),
    t
  );
}
G(Yt, `getAnnounceTextContent`);
function Xt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? E(i, a) : i.dispatchEvent(a));
}
G(Xt, `handleAndDispatchCustomEvent`);
var Zt = G((e, t, n = 0) => {
  let r = Math.abs(e.x),
    i = Math.abs(e.y),
    a = r > i;
  return t === `left` || t === `right` ? a && r > n : !a && i > n;
}, `isDeltaInDirection`);
function Qt(e = () => {}) {
  let t = y(e);
  v(() => {
    let e = 0,
      n = 0;
    return (
      (e = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(e), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
G(Qt, `useNextFrame`);
function $t(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
G($t, `isHTMLElement`);
function en(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: G((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
G(en, `getTabbableCandidates`);
function tn(e) {
  let t = document.activeElement;
  return e.some((e) =>
    e === t ? !0 : (e.focus(), document.activeElement !== t),
  );
}
G(tn, `focusFirst`);
var nn = N(`Bell`, [
    [`path`, { d: `M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9`, key: `1qo2s2` }],
    [`path`, { d: `M10.3 21a1.94 1.94 0 0 0 3.4 0`, key: `qgo35s` }],
  ]),
  rn = N(`ChevronDown`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  an = N(`CircleCheckBig`, [
    [`path`, { d: `M21.801 10A10 10 0 1 1 17 3.335`, key: `yps3ct` }],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  on = N(`CircleHelp`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`, key: `1u773s` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  sn = N(`CircleX`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
    [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
  ]),
  cn = N(`Clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`polyline`, { points: `12 6 12 12 16 14`, key: `68esgv` }],
  ]),
  ln = N(`CreditCard`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `2`, key: `ynyp8z` },
    ],
    [`line`, { x1: `2`, x2: `22`, y1: `10`, y2: `10`, key: `1b3vmo` }],
  ]),
  un = N(`Eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  dn = N(`FolderOpen`, [
    [
      `path`,
      {
        d: `m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,
        key: `usdka0`,
      },
    ],
  ]),
  fn = N(`Gamepad2`, [
    [`line`, { x1: `6`, x2: `10`, y1: `11`, y2: `11`, key: `1gktln` }],
    [`line`, { x1: `8`, x2: `8`, y1: `9`, y2: `13`, key: `qnk9ow` }],
    [`line`, { x1: `15`, x2: `15.01`, y1: `12`, y2: `12`, key: `krot7o` }],
    [`line`, { x1: `18`, x2: `18.01`, y1: `10`, y2: `10`, key: `1lcuu1` }],
    [
      `path`,
      {
        d: `M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,
        key: `mfqc10`,
      },
    ],
  ]),
  pn = N(`Heart`, [
    [
      `path`,
      {
        d: `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`,
        key: `c3ymky`,
      },
    ],
  ]),
  mn = N(`House`, [
    [
      `path`,
      { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` },
    ],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `1d0kgt`,
      },
    ],
  ]),
  hn = N(`LogOut`, [
    [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }],
    [`polyline`, { points: `16 17 21 12 16 7`, key: `1gabdz` }],
    [`line`, { x1: `21`, x2: `9`, y1: `12`, y2: `12`, key: `1uyos4` }],
  ]),
  gn = N(`Menu`, [
    [`line`, { x1: `4`, x2: `20`, y1: `12`, y2: `12`, key: `1e0a9i` }],
    [`line`, { x1: `4`, x2: `20`, y1: `6`, y2: `6`, key: `1owob3` }],
    [`line`, { x1: `4`, x2: `20`, y1: `18`, y2: `18`, key: `yk5zj1` }],
  ]),
  _n = N(`MessageCircle`, [
    [`path`, { d: `M7.9 20A9 9 0 1 0 4 16.1L2 22Z`, key: `vv11sd` }],
  ]),
  vn = N(`MessageSquare`, [
    [
      `path`,
      {
        d: `M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`,
        key: `1lielz`,
      },
    ],
  ]),
  yn = N(`Pencil`, [
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        key: `1a8usu`,
      },
    ],
    [`path`, { d: `m15 5 4 4`, key: `1mk7zo` }],
  ]),
  bn = N(`Plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  xn = N(`Rocket`, [
    [
      `path`,
      {
        d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z`,
        key: `m3kijz`,
      },
    ],
    [
      `path`,
      {
        d: `m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z`,
        key: `1fmvmk`,
      },
    ],
    [`path`, { d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0`, key: `1f8sc4` }],
    [`path`, { d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`, key: `qeys4` }],
  ]),
  Sn = N(`Search`, [
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
    [`path`, { d: `m21 21-4.3-4.3`, key: `1qie3q` }],
  ]),
  Cn = N(`Sparkles`, [
    [
      `path`,
      {
        d: `M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z`,
        key: `4pj2yx`,
      },
    ],
    [`path`, { d: `M20 3v4`, key: `1olli1` }],
    [`path`, { d: `M22 5h-4`, key: `1gvqau` }],
    [`path`, { d: `M4 17v2`, key: `vumght` }],
    [`path`, { d: `M5 18H3`, key: `zchphs` }],
  ]),
  wn = N(`SquarePlus`, [
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` },
    ],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
    [`path`, { d: `M12 8v8`, key: `napkw2` }],
  ]),
  Tn = N(`Trash2`, [
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`, key: `4alrt4` }],
    [`path`, { d: `M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`, key: `v07s0e` }],
    [`line`, { x1: `10`, x2: `10`, y1: `11`, y2: `17`, key: `1uufr5` }],
    [`line`, { x1: `14`, x2: `14`, y1: `11`, y2: `17`, key: `xtxkd` }],
  ]),
  En = N(`UserPlus`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
    [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }],
  ]),
  Dn = N(`Users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`path`, { d: `M16 3.13a4 4 0 0 1 0 7.75`, key: `1da9ce` }],
  ]),
  On = N(`X`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  kn = wt,
  An = U.forwardRef(({ className: e, ...t }, n) =>
    (0, W.jsx)(kt, {
      ref: n,
      className: x(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e,
      ),
      ...t,
    }),
  );
An.displayName = kt.displayName;
var jn = M(
    `group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
    {
      variants: {
        variant: {
          default: `border bg-background text-foreground`,
          destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  ),
  Mn = U.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, W.jsx)(Lt, { ref: r, className: x(jn({ variant: t }), e), ...n }),
  );
Mn.displayName = Lt.displayName;
var Nn = U.forwardRef(({ className: e, ...t }, n) =>
  (0, W.jsx)(Gt, {
    ref: n,
    className: x(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive`,
      e,
    ),
    ...t,
  }),
);
Nn.displayName = Gt.displayName;
var Pn = U.forwardRef(({ className: e, ...t }, n) =>
  (0, W.jsx)(qt, {
    ref: n,
    className: x(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e,
    ),
    "toast-close": ``,
    ...t,
    children: (0, W.jsx)(On, { className: `h-4 w-4` }),
  }),
);
Pn.displayName = qt.displayName;
var Fn = U.forwardRef(({ className: e, ...t }, n) =>
  (0, W.jsx)(Ht, { ref: n, className: x(`text-sm font-semibold`, e), ...t }),
);
Fn.displayName = Ht.displayName;
var In = U.forwardRef(({ className: e, ...t }, n) =>
  (0, W.jsx)(Ut, { ref: n, className: x(`text-sm opacity-90`, e), ...t }),
);
In.displayName = Ut.displayName;
