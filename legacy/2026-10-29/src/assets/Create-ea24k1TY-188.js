// Create-ea24k1TY 188 — children
// Lines 62513-62834 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var rQ = {
  muted: {
    button: `text-muted-foreground/60 hover:text-foreground disabled:text-muted-foreground/20`,
    disc: `group-hover/touch:bg-secondary`,
  },
  destructive: {
    button: `text-muted-foreground/50 hover:text-destructive disabled:text-muted-foreground/20`,
    disc: `group-hover/touch:bg-destructive/15`,
  },
  primary: {
    button: `text-primary disabled:text-muted-foreground/20`,
    disc: `bg-primary/10 group-hover/touch:bg-primary/20`,
  },
};
function iQ({
  label: e,
  onClick: t,
  disabled: n = !1,
  tone: r = `muted`,
  active: i = !1,
  discClassName: a = ``,
  className: o = ``,
  children: s,
}) {
  let c = rQ[r];
  return (0, Z.jsx)(`button`, {
    type: `button`,
    onClick: t,
    disabled: n,
    title: e,
    "aria-label": e,
    "aria-pressed": i || void 0,
    className: `group/touch shrink-0 inline-flex h-10 w-10 -m-1.5 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed ${c.button} ${o}`,
    children: (0, Z.jsx)(`span`, {
      className: `inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${c.disc} ${i ? `bg-primary/20 text-primary` : ``} ${a}`,
      children: s,
    }),
  });
}
var aQ = { premade: `From library`, designed: `Custom`, cloned: `Cloned` },
  oQ = { tts: `Generated`, recorded: `Recorded`, voice_changed: `Converted` };
function sQ(e) {
  return aQ[e ?? ``] ?? `Voice`;
}
function cQ(e) {
  return oQ[e ?? ``] ?? `Take`;
}
var lQ = { ui: `UI`, ai: `AI`, id: `ID` };
function uQ(e) {
  let t = e.replace(/[_-]+/g, ` `).trim();
  return t
    ? t
        .split(/\s+/)
        .map(
          (e, t) =>
            lQ[e.toLowerCase()] ||
            (t === 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e),
        )
        .join(` `)
    : ``;
}
var dQ = [`gender`, `age`, `accent`, `descriptive`, `use_case`, `description`],
  fQ = 4;
function pQ(e) {
  if (!e) return [];
  let t = [],
    n = new Set();
  for (let r of dQ) {
    let i = e[r];
    if (typeof i != `string`) continue;
    let a = uQ(i);
    if (!a) continue;
    let o = a.toLowerCase();
    if (!n.has(o) && (n.add(o), t.push(a), t.length >= fQ)) break;
  }
  return t;
}
function mQ(e) {
  return e <= 6 ? `Loose` : e <= 13 ? `Balanced` : `Literal`;
}
var hQ = [
  { label: `Cast`, blurb: `Pick the voices your game speaks in.` },
  { label: `Script`, blurb: `Write the lines each character says.` },
  { label: `Record`, blurb: `Generate or record a take for every line.` },
  { label: `Review`, blurb: `Listen back, then lock the cast in.` },
];
function gQ(e) {
  return !e || e.source !== `cloned` || !e.reference_audio_path
    ? null
    : {
        reference_audio_path: e.reference_audio_path,
        ...(e.reference_text ? { reference_text: e.reference_text } : {}),
      };
}
function _Q(e) {
  return !!e?.elevenlabs_voice_id || gQ(e) !== null;
}
function vQ(e, t) {
  if (t.startsWith(`http`) || t.startsWith(`blob:`)) return t;
  let n = t.split(`/`).pop() || t;
  return `${Mn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${n}`;
}
var yQ = {
    "audio/x-m4a": `audio/mp4`,
    "audio/m4a": `audio/mp4`,
    "audio/x-wav": `audio/wav`,
    "audio/wave": `audio/wav`,
    "audio/mp3": `audio/mpeg`,
  },
  bQ = new Set([
    `audio/webm`,
    `audio/ogg`,
    `audio/wav`,
    `audio/mpeg`,
    `audio/mp4`,
  ]),
  xQ = 25 * 1024 * 1024;
function SQ() {
  let e = (0, X.useRef)(null),
    [t, n] = (0, X.useState)(null),
    r = (0, X.useCallback)(
      (r, i) => {
        if (((e.current &&= (e.current.pause(), null)), t === r)) {
          n(null);
          return;
        }
        let a = new Audio(i);
        ((e.current = a),
          n(r),
          a.addEventListener(`ended`, () => {
            (n(null), (e.current = null));
          }),
          a.addEventListener(`error`, () => {
            (n(null), (e.current = null));
          }),
          a.play().catch(() => {
            (n(null), (e.current = null));
          }));
      },
      [t],
    ),
    i = (0, X.useCallback)(() => {
      ((e.current &&= (e.current.pause(), null)), n(null));
    }, []);
  return (
    (0, X.useEffect)(
      () => () => {
        e.current &&= (e.current.pause(), null);
      },
      [],
    ),
    { playingId: t, play: r, stop: i }
  );
}
var CQ = {
  premade: `bg-blue-500/15 text-blue-300`,
  designed: `bg-purple-500/15 text-purple-300`,
  cloned: `bg-amber-500/15 text-amber-300`,
};
function wQ({ source: e }) {
  return (0, Z.jsx)(`span`, {
    className: `inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${CQ[e] || CQ.premade}`,
    children: sQ(e),
  });
}
function TQ({ children: e }) {
  return (0, Z.jsx)(`span`, {
    className: `px-1.5 py-0.5 text-[10px] rounded bg-secondary text-muted-foreground`,
    children: e,
  });
}
function EQ({
  voice: e,
  isPlaying: t,
  needsVoice: n,
  isAssignTarget: r,
  onPlay: i,
  onRemove: a,
  onStartAssign: o,
}) {
  let s = pQ(e.labels);
  return (0, Z.jsxs)(`div`, {
    className: `p-3 rounded-lg border bg-secondary/30 transition-all duration-200 ${r ? `border-primary/60 ring-1 ring-primary/30` : `border-border`}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 mb-1`,
        children: [
          (0, Z.jsx)(wQ, { source: e.source }),
          (0, Z.jsx)(`span`, {
            className: `text-sm text-foreground/80 font-medium flex-1 min-w-0 truncate`,
            title: e.name,
            children: e.name,
          }),
          (0, Z.jsx)(iQ, {
            label: `Remove ${e.name} from the cast`,
            tone: `destructive`,
            onClick: a,
            children: (0, Z.jsx)(li, { className: `h-3.5 w-3.5` }),
          }),
        ],
      }),
      s.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mb-2 mt-1.5`,
          children: s.map((e) => (0, Z.jsx)(TQ, { children: e }, e)),
        }),
      e.description &&
        (0, Z.jsx)(`p`, {
          className: `text-xs text-muted-foreground/60 line-clamp-2 mb-2 ml-0.5`,
          children: e.description,
        }),
      n
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mt-1`,
            children: [
              (0, Z.jsxs)(`span`, {
                className: `inline-flex items-center gap-1 text-[10px] text-amber-400/80`,
                children: [
                  (0, Z.jsx)(U, { className: `h-3 w-3` }),
                  `Needs a voice`,
                ],
              }),
              (0, Z.jsxs)(x, {
                size: `sm`,
                variant: `outline`,
                onClick: o,
                className: `ml-auto min-h-[40px] text-[11px] px-2.5`,
                children: [
                  (0, Z.jsx)(_n, { className: `h-3 w-3 mr-1` }),
                  r ? `Choosing…` : `Give a voice`,
                ],
              }),
            ],
          })
        : e.preview_audio_path &&
          (0, Z.jsx)(`button`, {
            onClick: i,
            className: `flex items-center gap-1.5 min-h-[40px] -my-1 text-xs text-primary hover:text-primary/80 transition-colors`,
            children: t
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(N, { className: `h-3.5 w-3.5` }),
                    `Playing...`,
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(bn, { className: `h-3.5 w-3.5` }),
                    `Hear it`,
                  ],
                }),
          }),
    ],
  });
}
function DQ({
  voice: e,
  isPlaying: t,
  isInCast: n,
  assignMode: r,
  onPlay: i,
  onAdd: a,
}) {
  let o = pQ(e.labels);
  return (0, Z.jsxs)(`div`, {
    className: `p-3 rounded-lg border transition-all duration-200 ${n ? `border-primary/30 bg-primary/5` : `border-border/50 bg-card hover:border-border`}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `text-sm text-foreground/80 font-medium flex-1 min-w-0 truncate`,
            title: e.name,
            children: e.name,
          }),
          e.preview_url &&
            (0, Z.jsx)(iQ, {
              label: t ? `Stop ${e.name}` : `Hear ${e.name}`,
              tone: `primary`,
              active: t,
              onClick: i,
              children: t
                ? (0, Z.jsx)(N, { className: `h-3.5 w-3.5` })
                : (0, Z.jsx)(bn, { className: `h-3.5 w-3.5 ml-0.5` }),
            }),
          (0, Z.jsx)(x, {
            size: `sm`,
            variant: n && !r ? `ghost` : `outline`,
            onClick: a,
            disabled: n && !r,
            className: `shrink-0 min-h-[40px] text-xs px-2.5`,
            children: r
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(ni, { className: `h-3 w-3 mr-1` }),
                    `Assign`,
                  ],
                })
              : n
                ? `In Cast`
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(ni, { className: `h-3 w-3 mr-1` }),
                      `Add`,
                    ],
                  }),
          }),
        ],
      }),
      o.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mt-2`,
          children: o.map((e) => (0, Z.jsx)(TQ, { children: e }, e)),
        }),
      e.description &&
        (0, Z.jsx)(`p`, {
          className: `text-xs text-muted-foreground/60 line-clamp-2 mt-2`,
          children: e.description,
        }),
    ],
  });
}
