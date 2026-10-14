// Create-ea24k1TY 47 — jsx
// Lines 14970-15169 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Uf({ label: e, values: t, field: n, onChange: r }) {
  let [i, a] = (0, X.useState)(!1),
    [o, s] = (0, X.useState)(t.join(`, `)),
    c = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    s(t.join(`, `));
  }, [t]),
    (0, X.useEffect)(() => {
      i && c.current && c.current.focus();
    }, [i]));
  let l = () => {
    (a(!1),
      r(
        n,
        o
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean),
      ));
  };
  return (0, Z.jsxs)(`div`, {
    className: `py-2`,
    children: [
      (0, Z.jsx)(`span`, {
        className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 block mb-1`,
        children: e,
      }),
      i
        ? (0, Z.jsx)(`input`, {
            ref: c,
            value: o,
            onChange: (e) => s(e.target.value),
            onBlur: l,
            onKeyDown: (e) => {
              (e.key === `Enter` && l(),
                e.key === `Escape` && (s(t.join(`, `)), a(!1)));
            },
            placeholder: `Comma-separated values...`,
            className: `w-full bg-card border border-border rounded-lg px-2.5 py-1.5 text-sm text-foreground/80 focus:outline-none focus:border-primary/40`,
          })
        : (0, Z.jsx)(`div`, {
            onClick: () => a(!0),
            className: `cursor-pointer rounded-md px-1 -mx-1 hover:bg-secondary/40 transition-colors`,
            children:
              t.length > 0
                ? (0, Z.jsx)(`div`, {
                    className: `flex flex-wrap gap-1.5`,
                    children: t.map((e, t) =>
                      (0, Z.jsx)(
                        `span`,
                        {
                          className: `px-2 py-0.5 text-xs bg-secondary rounded-md text-foreground/70`,
                          children: e,
                        },
                        t,
                      ),
                    ),
                  })
                : (0, Z.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground/40 italic`,
                    children: [`Click to add `, e.toLowerCase(), `...`],
                  }),
          }),
    ],
  });
}
function Wf({
  perspective: e,
  artStyle: t,
  coreMechanics: n,
  settingTheme: r,
  playerExperience: i,
  targetAudience: a,
  uniqueHook: o,
  narrativeElements: s,
  technicalScope: c,
  onFieldChange: l,
}) {
  let [u, d] = (0, X.useState)(!1),
    f = (e, t) => {
      l(e, t);
    };
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border overflow-hidden`,
    children: [
      (0, Z.jsxs)(`button`, {
        onClick: () => d(!u),
        className: `w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Z.jsx)(Rt, { className: `w-4 h-4 text-muted-foreground/50` }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50`,
                children: `Advanced Concept Brief`,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Z.jsxs)(`span`, {
                className: `text-xs text-muted-foreground/40`,
                children: [u ? `Hide` : `Show`, ` details`],
              }),
              (0, Z.jsx)(ti, {
                className: `w-4 h-4 text-muted-foreground/40 transition-transform ${u ? `rotate-180` : ``}`,
              }),
            ],
          }),
        ],
      }),
      u &&
        (0, Z.jsxs)(`div`, {
          className: `px-4 pb-4 border-t border-border`,
          children: [
            (0, Z.jsx)(Hf, {
              label: `Unique Hook`,
              value: o,
              field: `unique_hook`,
              onChange: f,
              multiline: !0,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Setting & Theme`,
              value: r,
              field: `setting_theme`,
              onChange: f,
              multiline: !0,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Uf, {
              label: `Core Mechanics`,
              values: n,
              field: `core_mechanics`,
              onChange: (e, t) => {
                l(e, t);
              },
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Perspective`,
              value: e,
              field: `perspective`,
              onChange: f,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Art Style`,
              value: t,
              field: `art_style`,
              onChange: f,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Player Experience`,
              value: i,
              field: `player_experience`,
              onChange: f,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Target Audience`,
              value: a,
              field: `target_audience`,
              onChange: f,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Narrative Elements`,
              value: s,
              field: `narrative_elements`,
              onChange: f,
              multiline: !0,
            }),
            (0, Z.jsx)(`div`, { className: `border-t border-border/50 mx-1` }),
            (0, Z.jsx)(Hf, {
              label: `Technical Scope`,
              value: c,
              field: `technical_scope`,
              onChange: f,
            }),
          ],
        }),
    ],
  });
}
function Gf(e) {
  if (!e?.genre_tags?.length) return [];
  let t = [`#4ade80`, `#f97316`, `#a78bfa`, `#f472b6`, `#38bdf8`, `#facc15`],
    n = [`🏃`, `💎`, `🌄`, `💠`, `⚡`, `🎲`];
  return e.genre_tags.map((e, r) => ({
    label: e,
    emoji: n[r % n.length],
    color: t[r % t.length],
  }));
}
var Kf = 40;
