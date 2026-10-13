// assets__Create-ea24k1TY 44 — classname
// Lines 14114-14400 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Sf(e, t) {
  return t.id ? e.id === t.id : e.asset_name === t.asset_name;
}
function Cf(e, t) {
  let n = { ...e, ...t };
  return t.asset_name ? { ...n, name: String(t.asset_name) } : n;
}
function wf(e, t) {
  switch (t.type) {
    case `asset_added`: {
      let n = e.findIndex((e) => Sf(e, t.asset));
      if (n >= 0) {
        let r = [...e];
        return ((r[n] = Cf(r[n], t.asset)), r);
      }
      return [...e, bf(t.asset)];
    }
    case `asset_updated`: {
      let n = !1,
        r = e.map((e) => (Sf(e, t.asset) ? ((n = !0), Cf(e, t.asset)) : e));
      return n ? r : e;
    }
    case `asset_removed`: {
      let n = e.filter((e) => !xf(e, t.asset_id));
      return n.length === e.length ? e : n;
    }
    case `asset_version_published`: {
      let n = t.asset_id ?? t.asset_name;
      if (!n) return e;
      let r = !1,
        i = e.map((e) =>
          xf(e, n) ? ((r = !0), { ...e, modified: Date.now() }) : e,
        );
      return r ? i : e;
    }
    default:
      return e;
  }
}
function Tf(e) {
  return (0, Z.jsx)(vf, { ...e });
}
function Ef({
  value: e,
  onChange: t,
  placeholder: n,
  className: r,
  inputClassName: i,
  multiline: a,
  maxLength: o,
}) {
  let [s, c] = (0, X.useState)(!1),
    [l, u] = (0, X.useState)(e),
    d = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    u(e);
  }, [e]),
    (0, X.useEffect)(() => {
      s && d.current && d.current.focus();
    }, [s]));
  let f = () => {
    c(!1);
    let n = l.trim();
    n && n !== e ? t(n) : u(e);
  };
  if (s) {
    let t = `bg-transparent border-b border-primary/40 outline-none w-full ${i || r || ``}`;
    return a
      ? (0, Z.jsx)(`textarea`, {
          ref: d,
          value: l,
          onChange: (e) => u(e.target.value),
          onBlur: f,
          onKeyDown: (t) => {
            t.key === `Escape` && (u(e), c(!1));
          },
          maxLength: o,
          rows: 3,
          className: `${t} resize-none`,
        })
      : (0, Z.jsx)(`input`, {
          ref: d,
          value: l,
          onChange: (e) => u(e.target.value),
          onBlur: f,
          onKeyDown: (t) => {
            (t.key === `Enter` && f(), t.key === `Escape` && (u(e), c(!1)));
          },
          maxLength: o,
          className: t,
        });
  }
  return (0, Z.jsx)(`div`, {
    onClick: () => c(!0),
    className: `cursor-pointer hover:opacity-80 transition-opacity ${r || ``}`,
    children:
      e || (0, Z.jsx)(`span`, { className: `italic opacity-40`, children: n }),
  });
}
function Df({
  title: e,
  description: t,
  genreTags: n,
  keyArtPath: r,
  sessionId: i,
  onTitleChange: a,
  onDescriptionChange: o,
  onGenreTagsChange: s,
}) {
  let [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(``),
    f = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    c && f.current && f.current.focus();
  }, [c]);
  let p = r ? jr.getAssetUrl(i, `generated_assets/assets/${r}`) : void 0,
    m = (0, X.useCallback)(
      (e) => {
        s(n.filter((t, n) => n !== e));
      },
      [n, s],
    ),
    h = (0, X.useCallback)(() => {
      let e = u.trim();
      if (e && !n.some((t) => t.label.toLowerCase() === e.toLowerCase())) {
        let t = [
            `#4ade80`,
            `#f97316`,
            `#a78bfa`,
            `#f472b6`,
            `#38bdf8`,
            `#facc15`,
          ],
          r = [`🎮`, `🎯`, `⚡`, `🌟`, `🔮`, `🎲`],
          i = n.length % t.length;
        s([...n, { label: e, emoji: r[i], color: t[i] }]);
      }
      (d(``), l(!1));
    }, [u, n, s]);
  return (0, Z.jsxs)(`div`, {
    className: `relative rounded-lg overflow-hidden border border-border`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `absolute inset-0`,
        children: [
          p
            ? (0, Z.jsx)(`img`, {
                src: p,
                alt: ``,
                className: `absolute right-0 top-0 h-full w-[75%] object-cover object-center`,
                onError: (e) => {
                  e.target.style.display = `none`;
                },
              })
            : (0, Z.jsx)(`div`, {
                className: `absolute right-0 top-0 h-full w-[75%] bg-gradient-to-br from-primary/5 to-primary/10`,
              }),
          (0, Z.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,6%)] via-[hsl(220,20%,6%)]/90 to-transparent`,
          }),
          (0, Z.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,6%)]/80 via-transparent to-transparent`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `relative z-10 p-5 min-h-[200px] flex flex-col justify-end gap-3`,
        children: [
          (0, Z.jsx)(Ef, {
            value: e,
            onChange: a,
            placeholder: `Game Title`,
            className: `text-2xl font-bold text-foreground leading-tight max-w-[65%]`,
            inputClassName: `text-2xl font-bold text-foreground`,
            maxLength: 80,
          }),
          (0, Z.jsx)(Ef, {
            value: t,
            onChange: o,
            placeholder: `Click to add a description...`,
            className: `text-sm text-foreground/70 leading-relaxed max-w-[60%]`,
            inputClassName: `text-sm text-foreground/70`,
            multiline: !0,
            maxLength: 500,
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-1.5 pt-1 max-w-[70%]`,
            children: [
              n.map((e, t) =>
                (0, Z.jsxs)(
                  `span`,
                  {
                    className: `group inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border transition-colors`,
                    style: {
                      color: e.color,
                      borderColor: `${e.color}33`,
                      backgroundColor: `${e.color}15`,
                    },
                    children: [
                      (0, Z.jsx)(`span`, { children: e.emoji }),
                      e.label,
                      (0, Z.jsx)(`button`, {
                        onClick: (e) => {
                          (e.stopPropagation(), m(t));
                        },
                        className: `opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-400`,
                        children: (0, Z.jsx)(li, { className: `w-3 h-3` }),
                      }),
                    ],
                  },
                  `${e.label}-${t}`,
                ),
              ),
              c
                ? (0, Z.jsx)(`input`, {
                    ref: f,
                    value: u,
                    onChange: (e) => d(e.target.value),
                    onBlur: h,
                    onKeyDown: (e) => {
                      (e.key === `Enter` && h(),
                        e.key === `Escape` && (d(``), l(!1)));
                    },
                    placeholder: `Tag name...`,
                    className: `h-7 w-28 bg-transparent border border-border/60 rounded-full px-2.5 text-xs text-foreground outline-none focus:border-primary/40`,
                  })
                : (0, Z.jsxs)(`button`, {
                    onClick: () => l(!0),
                    className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs text-muted-foreground/50 border border-dashed border-border/60 hover:text-muted-foreground hover:border-border transition-colors`,
                    children: [
                      (0, Z.jsx)(ni, { className: `w-3 h-3` }),
                      `Add tag`,
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Of = [
    `#4ade80`,
    `#38bdf8`,
    `#a78bfa`,
    `#f97316`,
    `#f472b6`,
    `#facc15`,
    `#34d399`,
    `#fb7185`,
  ],
  kf = [`🏃`, `⚔️`, `🎯`, `⚡`, `🛡️`, `🏆`, `🔄`, `💎`],
  Af = `gameplay-loop`,
  jf = `reorder:${Af}`,
  Mf = 30,
  Nf = 11,
  Pf = 28,
  Ff = 10,
  If = 26,
  Lf = 34,
  Rf = (e) => Math.round(e * 2) / 2;
function zf({ marker: e, onInsert: t, onMove: n }) {
  let { active: r, kind: i } = ke(),
    a = r && i === jf,
    { dropProps: o, isOver: s } = Oe({
      accept: jf,
      onDrop: (t) => n(t.payload.index, e.insertIndex),
    }),
    c = { right: De, left: ye, down: ti, up: ze }[e.dir];
  return (0, Z.jsxs)(`button`, {
    ref: o.ref,
    "data-dnd-zone": o[`data-dnd-zone`],
    onClick: () => t(e.insertIndex),
    title: `Insert a step here`,
    "aria-label": `Insert a step here`,
    className: `group/gap absolute z-20 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-150 ${s ? `scale-[1.35] border-primary bg-primary/25 text-primary` : a ? `border-primary/50 bg-background text-primary/70` : `border-border bg-background text-muted-foreground/50 hover:scale-[1.35] hover:border-primary/70 hover:bg-primary/15 hover:text-primary`}`,
    style: { left: e.x, top: e.y },
    children: [
      (0, Z.jsx)(c, {
        className: `h-3 w-3 ${s ? `hidden` : `group-hover/gap:hidden`}`,
      }),
      (0, Z.jsx)(ni, {
        className: `h-3 w-3 ${s ? `block` : `hidden group-hover/gap:block`}`,
      }),
    ],
  });
}
