// Create-ea24k1TY 50 — classname
// Lines 15953-16135 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var Yf = [
  {
    key: `perspective`,
    label: `Perspective`,
    icon: ui,
    presets: [
      `Top-Down`,
      `Side-Scroller`,
      `First-Person`,
      `Third-Person`,
      `Isometric`,
      `2.5D`,
    ],
  },
  {
    key: `art_style`,
    label: `Art Style`,
    icon: be,
    presets: [
      `Pixel Art`,
      `Low-Poly 3D`,
      `Cartoon`,
      `Stylized`,
      `Realistic`,
      `Hand-Drawn`,
      `Voxel`,
    ],
  },
  {
    key: `target_audience`,
    label: `Audience`,
    icon: Wr,
    presets: [
      `Casual`,
      `Hardcore`,
      `Family-Friendly`,
      `All Ages`,
      `Competitive`,
    ],
  },
  {
    key: `technical_scope`,
    label: `Scope`,
    icon: B,
    presets: [
      `Single-screen`,
      `Multi-level`,
      `Open World`,
      `Procedural`,
      `Arena`,
    ],
  },
];
function Xf({
  value: e,
  onChange: t,
  placeholder: n,
  multiline: r = !1,
  rows: i = 2,
  className: a = ``,
  displayClassName: o = ``,
}) {
  let [s, c] = (0, X.useState)(!1),
    [l, u] = (0, X.useState)(e),
    d = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    u(e);
  }, [e]),
    (0, X.useEffect)(() => {
      if (s && d.current && r) {
        let e = d.current;
        ((e.style.height = `auto`),
          (e.style.height = `${Math.max(e.scrollHeight, i * 24)}px`));
      }
    }, [s, l, r, i]),
    (0, X.useEffect)(() => {
      s && d.current && d.current.focus();
    }, [s]));
  let f = () => {
      (c(!1), l !== e && t(l));
    },
    p = (t) => {
      (t.key === `Escape` && (u(e), c(!1)),
        t.key === `Enter` && !r && t.target.blur());
    };
  if (s) {
    let e = `w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-sm text-foreground/80 overflow-hidden focus:outline-none focus:border-primary placeholder-muted-foreground/40 ${a}`;
    return r
      ? (0, Z.jsx)(`textarea`, {
          ref: d,
          value: l,
          onChange: (e) => u(e.target.value),
          onBlur: f,
          onKeyDown: p,
          placeholder: n,
          rows: i,
          className: e,
        })
      : (0, Z.jsx)(`input`, {
          ref: d,
          value: l,
          onChange: (e) => u(e.target.value),
          onBlur: f,
          onKeyDown: p,
          placeholder: n,
          className: e,
        });
  }
  return (0, Z.jsxs)(`div`, {
    onClick: () => c(!0),
    className: `group cursor-pointer rounded-md px-1 -mx-1 hover:bg-secondary/40 transition-colors ${o}`,
    children: [
      (0, Z.jsx)(`span`, {
        className: e ? `` : `text-muted-foreground/40 italic`,
        children: e || n || `Click to edit...`,
      }),
      (0, Z.jsx)(di, {
        className: `inline-block h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-40 transition-opacity`,
      }),
    ],
  });
}
function Zf({ label: e, value: t, icon: n, presets: r, onChange: i }) {
  let [a, o] = (0, X.useState)(!1);
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg p-2.5 border min-w-0 overflow-hidden transition-colors ${a ? `bg-secondary/40 border-primary/20` : `bg-secondary/30 border-border`}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 mb-1`,
        children: [
          (0, Z.jsx)(n, {
            className: `h-3 w-3 shrink-0 ${a ? `text-primary/60` : `text-muted-foreground/60`}`,
          }),
          (0, Z.jsx)(`span`, {
            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60`,
            children: e,
          }),
        ],
      }),
      (0, Z.jsx)(`input`, {
        value: t,
        onChange: (e) => i(e.target.value),
        onFocus: () => o(!0),
        onBlur: () => setTimeout(() => o(!1), 150),
        className: `w-full bg-transparent border-none outline-none text-xs text-foreground/80 placeholder-muted-foreground/40 p-0`,
        placeholder: `Enter ${e.toLowerCase()}...`,
      }),
      a &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mt-1.5`,
          children: r.map((e) =>
            (0, Z.jsx)(
              `button`,
              {
                onMouseDown: (t) => {
                  (t.preventDefault(), i(e));
                },
                className: `px-1.5 py-0.5 text-[10px] rounded bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors`,
                children: e,
              },
              e,
            ),
          ),
        }),
    ],
  });
}
function Qf() {
  return {
    title: ``,
    elevator_pitch: ``,
    genre_tags: [],
    perspective: ``,
    art_style: ``,
    core_mechanics: [],
    setting_theme: ``,
    player_experience: ``,
    target_audience: ``,
    unique_hook: ``,
    narrative_elements: ``,
    technical_scope: ``,
  };
}
