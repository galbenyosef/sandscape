// Create-CEn7EAZs 190 — children
// Lines 63296-63617 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var yQ = {
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
function bQ({
  label: e,
  onClick: t,
  disabled: n = !1,
  tone: r = `muted`,
  active: i = !1,
  discClassName: a = ``,
  className: o = ``,
  children: s,
}) {
  let c = yQ[r];
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
var xQ = { premade: `From library`, designed: `Custom`, cloned: `Cloned` },
  SQ = { tts: `Generated`, recorded: `Recorded`, voice_changed: `Converted` };
function CQ(e) {
  return xQ[e ?? ``] ?? `Voice`;
}
function wQ(e) {
  return SQ[e ?? ``] ?? `Take`;
}
var TQ = { ui: `UI`, ai: `AI`, id: `ID` };
function EQ(e) {
  let t = e.replace(/[_-]+/g, ` `).trim();
  return t
    ? t
        .split(/\s+/)
        .map(
          (e, t) =>
            TQ[e.toLowerCase()] ||
            (t === 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e),
        )
        .join(` `)
    : ``;
}
var DQ = [`gender`, `age`, `accent`, `descriptive`, `use_case`, `description`],
  OQ = 4;
function kQ(e) {
  if (!e) return [];
  let t = [],
    n = new Set();
  for (let r of DQ) {
    let i = e[r];
    if (typeof i != `string`) continue;
    let a = EQ(i);
    if (!a) continue;
    let o = a.toLowerCase();
    if (!n.has(o) && (n.add(o), t.push(a), t.length >= OQ)) break;
  }
  return t;
}
function AQ(e) {
  return e <= 6 ? `Loose` : e <= 13 ? `Balanced` : `Literal`;
}
var jQ = [
  { label: `Cast`, blurb: `Pick the voices your game speaks in.` },
  { label: `Script`, blurb: `Write the lines each character says.` },
  { label: `Record`, blurb: `Generate or record a take for every line.` },
  { label: `Review`, blurb: `Listen back, then lock the cast in.` },
];
function MQ(e) {
  return !e || e.source !== `cloned` || !e.reference_audio_path
    ? null
    : {
        reference_audio_path: e.reference_audio_path,
        ...(e.reference_text ? { reference_text: e.reference_text } : {}),
      };
}
function NQ(e) {
  return !!e?.elevenlabs_voice_id || MQ(e) !== null;
}
function PQ(e, t) {
  if (t.startsWith(`http`) || t.startsWith(`blob:`)) return t;
  let n = t.split(`/`).pop() || t;
  return `${yn.API_BASE_URL}/api/game/${encodeURIComponent(e)}/${n}`;
}
var FQ = {
    "audio/x-m4a": `audio/mp4`,
    "audio/m4a": `audio/mp4`,
    "audio/x-wav": `audio/wav`,
    "audio/wave": `audio/wav`,
    "audio/mp3": `audio/mpeg`,
  },
  IQ = new Set([
    `audio/webm`,
    `audio/ogg`,
    `audio/wav`,
    `audio/mpeg`,
    `audio/mp4`,
  ]),
  LQ = 25 * 1024 * 1024;
function RQ() {
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
var zQ = {
  premade: `bg-blue-500/15 text-blue-300`,
  designed: `bg-purple-500/15 text-purple-300`,
  cloned: `bg-amber-500/15 text-amber-300`,
};
function BQ({ source: e }) {
  return (0, Z.jsx)(`span`, {
    className: `inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${zQ[e] || zQ.premade}`,
    children: CQ(e),
  });
}
function VQ({ children: e }) {
  return (0, Z.jsx)(`span`, {
    className: `px-1.5 py-0.5 text-[10px] rounded bg-secondary text-muted-foreground`,
    children: e,
  });
}
function HQ({
  voice: e,
  isPlaying: t,
  needsVoice: n,
  isAssignTarget: r,
  onPlay: i,
  onRemove: a,
  onStartAssign: o,
}) {
  let s = kQ(e.labels);
  return (0, Z.jsxs)(`div`, {
    className: `p-3 rounded-lg border bg-secondary/30 transition-all duration-200 ${r ? `border-primary/60 ring-1 ring-primary/30` : `border-border`}`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 mb-1`,
        children: [
          (0, Z.jsx)(BQ, { source: e.source }),
          (0, Z.jsx)(`span`, {
            className: `text-sm text-foreground/80 font-medium flex-1 min-w-0 truncate`,
            title: e.name,
            children: e.name,
          }),
          (0, Z.jsx)(bQ, {
            label: `Remove ${e.name} from the cast`,
            tone: `destructive`,
            onClick: a,
            children: (0, Z.jsx)(Jr, { className: `h-3.5 w-3.5` }),
          }),
        ],
      }),
      s.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mb-2 mt-1.5`,
          children: s.map((e) => (0, Z.jsx)(VQ, { children: e }, e)),
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
                  (0, Z.jsx)(te, { className: `h-3 w-3` }),
                  `Needs a voice`,
                ],
              }),
              (0, Z.jsxs)(S, {
                size: `sm`,
                variant: `outline`,
                onClick: o,
                className: `ml-auto min-h-[40px] text-[11px] px-2.5`,
                children: [
                  (0, Z.jsx)(an, { className: `h-3 w-3 mr-1` }),
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
                    (0, Z.jsx)(cn, { className: `h-3.5 w-3.5` }),
                    `Hear it`,
                  ],
                }),
          }),
    ],
  });
}
function UQ({
  voice: e,
  isPlaying: t,
  isInCast: n,
  assignMode: r,
  onPlay: i,
  onAdd: a,
}) {
  let o = kQ(e.labels);
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
            (0, Z.jsx)(bQ, {
              label: t ? `Stop ${e.name}` : `Hear ${e.name}`,
              tone: `primary`,
              active: t,
              onClick: i,
              children: t
                ? (0, Z.jsx)(N, { className: `h-3.5 w-3.5` })
                : (0, Z.jsx)(cn, { className: `h-3.5 w-3.5 ml-0.5` }),
            }),
          (0, Z.jsx)(S, {
            size: `sm`,
            variant: n && !r ? `ghost` : `outline`,
            onClick: a,
            disabled: n && !r,
            className: `shrink-0 min-h-[40px] text-xs px-2.5`,
            children: r
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(Br, { className: `h-3 w-3 mr-1` }),
                    `Assign`,
                  ],
                })
              : n
                ? `In Cast`
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(Br, { className: `h-3 w-3 mr-1` }),
                      `Add`,
                    ],
                  }),
          }),
        ],
      }),
      o.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex flex-wrap gap-1 mt-2`,
          children: o.map((e) => (0, Z.jsx)(VQ, { children: e }, e)),
        }),
      e.description &&
        (0, Z.jsx)(`p`, {
          className: `text-xs text-muted-foreground/60 line-clamp-2 mt-2`,
          children: e.description,
        }),
    ],
  });
}
