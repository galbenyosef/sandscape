// Create-CEn7EAZs 245 — children
// Lines 82938-83269 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function tpe({
  assets: e,
  sessionDir: t,
  sessionId: n,
  onExecute: r,
  isActive: i,
}) {
  let { gameDesignData: a, isCodingAgentRunning: o } = _c();
  return (0, Z.jsx)(y1, {
    assets: e,
    sessionDir: t,
    gameDesignData: a,
    node: null,
    executionState: null,
    isCodingAgentRunning: o,
    onChatAbout: () => {},
    onExecute: r,
    sessionId: n,
    isActive: i,
  });
}
function npe({
  sessionDir: e,
  assets: t,
  onExecuteWorkflow: n,
  isActive: r,
  refreshAssets: i,
}) {
  let { gameDesignData: a } = _c();
  return (0, Z.jsx)(epe, {
    sessionDir: e,
    assets: t,
    onExecuteWorkflow: n,
    gameDesignData: a,
    isActive: r,
    refreshAssets: i,
  });
}
function rpe() {
  return (0, Z.jsx)(`style`, {
    children: `
      @keyframes morph {
        0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
        25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.05); }
        50% { border-radius: 50% 60% 30% 60% / 30% 50% 70% 60%; transform: rotate(180deg) scale(0.95); }
        75% { border-radius: 60% 30% 50% 40% / 70% 40% 60% 30%; transform: rotate(270deg) scale(1.02); }
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.4; filter: blur(20px); }
        50% { opacity: 0.7; filter: blur(25px); }
      }
      /* Record mode (?record=1): enlarge ONLY the chat font sizes (1.5×) for a
         readable mobile 9:16 frame — layout, avatars and padding stay as-is. Scoped
         to .record-chat-font (the chat column) and higher-specificity than Tailwind's
         single-class text-* utilities, so it wins without !important. */
      .record-chat-font .text-\\[9px\\]  { font-size: 13.5px; line-height: 1.35; }
      .record-chat-font .text-\\[10px\\] { font-size: 15px; line-height: 1.35; }
      .record-chat-font .text-xs         { font-size: 18px; line-height: 1.35; }
      .record-chat-font .text-sm         { font-size: 21px; line-height: 1.35; }
    `,
  });
}
function ipe({
  showEntryOverlay: e,
  overlayContentVisible: t,
  overlayText: n,
  overlayProgress: r,
}) {
  return (0, Z.jsx)(ur, {
    children:
      e &&
      (0, Z.jsx)(
        ar.div,
        {
          initial: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 1.5, ease: `easeInOut` },
          className: `fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center`,
          children: (0, Z.jsxs)(ar.div, {
            initial: { opacity: 0 },
            animate: { opacity: +!!t },
            transition: { duration: 0.8 },
            className: `flex flex-col items-center`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `relative mb-8`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0 bg-purple-500/30`,
                    style: {
                      width: 64,
                      height: 64,
                      animation: `pulse-glow 3s ease-in-out infinite`,
                      borderRadius: `50%`,
                    },
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `relative bg-gradient-to-br from-purple-500/60 via-fuchsia-500/40 to-indigo-500/60`,
                    style: {
                      width: 64,
                      height: 64,
                      animation: `morph 6s ease-in-out infinite`,
                    },
                  }),
                ],
              }),
              (0, Z.jsx)(ur, {
                mode: `wait`,
                children: (0, Z.jsx)(
                  ar.p,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -6 },
                    transition: { duration: 0.4 },
                    className: `text-white/50 text-sm tracking-wide`,
                    children: n,
                  },
                  n,
                ),
              }),
              (0, Z.jsx)(`div`, {
                className: `mt-6 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden`,
                children: (0, Z.jsx)(`div`, {
                  className: `h-full bg-purple-500/60 rounded-full transition-[width] duration-200 ease-linear`,
                  style: { width: `${r * 100}%` },
                }),
              }),
            ],
          }),
        },
        `entry-overlay`,
      ),
  });
}
var ape = ({ tasks: e }) =>
  e.size === 0
    ? null
    : (0, Z.jsx)(`div`, {
        className: `mb-1 space-y-0.5 bg-background pt-1`,
        children: Array.from(e.values()).map((e) => {
          let t = e.status === `completed`,
            n = e.status === `failed`,
            r = Math.floor((Date.now() - e.startTime) / 1e3);
          return (0, Z.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between px-2 py-1 text-xs ${n ? `text-red-400` : t ? `text-green-400` : `text-blue-400`}`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex items-center gap-2 min-w-0 flex-1`,
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `flex items-center justify-center w-4 h-4 flex-shrink-0`,
                      children: n
                        ? (0, Z.jsx)(`span`, { children: `✗` })
                        : t
                          ? (0, Z.jsx)(`span`, { children: `✓` })
                          : (0, Z.jsx)(`div`, {
                              className: `w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin`,
                            }),
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `truncate`,
                      children: e.title || e.name || `Task`,
                    }),
                    n &&
                      e.errorMessage &&
                      (0, Z.jsxs)(`span`, {
                        className: `text-xs opacity-75 truncate ml-1`,
                        children: [`— `, e.errorMessage],
                      }),
                  ],
                }),
                (0, Z.jsx)(`span`, {
                  className: `text-xs opacity-75 flex-shrink-0 ml-2`,
                  children: n ? `Failed` : t ? `✓` : `${r}s`,
                }),
              ],
            },
            e.taskId,
          );
        }),
      });
function ope(e, t) {
  return e.isAI || !t ? !1 : e.userId === t;
}
function S4(e, t) {
  let n = [],
    r = [],
    i = 0;
  for (let a of e)
    if (!a.isLoading) {
      if (!a.inquiryQuestion) {
        let e = spe(t, a, i);
        if (e !== -1) {
          for (let r = i; r <= e; r++) n.push(t[r]);
          i = e + 1;
          continue;
        }
        if (a.isAI) continue;
      }
      (i === 0 ? r : n).push(a);
    }
  for (let e = i; e < t.length; e++) n.push(t[e]);
  return [...n, ...r];
}
function spe(e, t, n) {
  for (let r = n; r < e.length; r++) {
    let n = e[r];
    if (n.id === t.id || (!!n.isAI == !!t.isAI && n.text === t.text)) return r;
  }
  return -1;
}
var cpe = ({
    question: e,
    currentIndex: t,
    total: n,
    selectedOptionId: r,
    selectedOptionLabel: i,
    onAnswer: a,
  }) => {
    let [o, s] = (0, X.useState)(``),
      [c, l] = (0, X.useState)(!1),
      u = !!r,
      d = (e, t) => {
        if (!u) {
          if (e === `__other__`) {
            l(!0);
            return;
          }
          a(e, t);
        }
      },
      f = () => {
        o.trim() && a(`other`, o.trim());
      };
    return (0, Z.jsxs)(`div`, {
      className: `my-3`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: `text-xs text-muted-foreground mb-2`,
          children: [`Question `, t + 1, ` of `, n],
        }),
        (0, Z.jsx)(`p`, {
          className: `text-sm font-medium mb-3`,
          children: e.question,
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [
            (e.options || []).map((e) => {
              let t = r === e.id;
              return (0, Z.jsxs)(
                `button`,
                {
                  disabled: u,
                  onClick: () => d(e.id, e.label),
                  className: `
                text-left px-3 py-2 rounded-lg border transition-all text-sm
                ${t ? `border-primary bg-primary/15 text-primary` : u && !t ? `border-border/40 bg-muted/30 text-muted-foreground opacity-50` : `border-border hover:border-primary/60 hover:bg-primary/5 cursor-pointer`}
              `,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `font-medium`,
                      children: e.label,
                    }),
                    e.description &&
                      (0, Z.jsx)(`span`, {
                        className: `block text-xs text-muted-foreground mt-0.5`,
                        children: e.description,
                      }),
                  ],
                },
                e.id,
              );
            }),
            !u &&
              !c &&
              (0, Z.jsx)(`button`, {
                onClick: () => d(`__other__`, ``),
                className: `text-left px-3 py-2 rounded-lg border border-dashed border-border hover:border-primary/60 hover:bg-primary/5 cursor-pointer text-sm text-muted-foreground`,
                children: `Other...`,
              }),
            c &&
              !u &&
              (0, Z.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [
                  (0, Z.jsx)(`input`, {
                    type: `text`,
                    autoFocus: !0,
                    value: o,
                    onChange: (e) => s(e.target.value),
                    onKeyDown: (e) => {
                      (e.key === `Enter` && f(), e.key === `Escape` && l(!1));
                    },
                    placeholder: `Type your answer...`,
                    className: `flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-primary`,
                  }),
                  (0, Z.jsx)(`button`, {
                    onClick: f,
                    disabled: !o.trim(),
                    className: `px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm disabled:opacity-50`,
                    children: `Send`,
                  }),
                ],
              }),
            u &&
              r === `other` &&
              (0, Z.jsx)(`div`, {
                className: `px-3 py-2 rounded-lg border border-primary bg-primary/15 text-primary text-sm`,
                children: (0, Z.jsx)(`span`, {
                  className: `font-medium`,
                  children: o || i || `Custom answer`,
                }),
              }),
          ],
        }),
      ],
    });
  },
  lpe = (e) => {
    if (e === `Sandscape`) return `/avatar_placeholder/ai-sparkle.svg`;
  };
function upe(e) {
  if (!e) return ``;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? e
    : t.toLocaleTimeString([], { hour: `2-digit`, minute: `2-digit` });
}
