// assets__Create-ea24k1TY 244 — border
// Lines 82488-82784 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var w4 = [
  { bg: `bg-blue-500/10`, border: `border-blue-500/20`, name: `text-blue-400` },
  {
    bg: `bg-emerald-500/10`,
    border: `border-emerald-500/20`,
    name: `text-emerald-400`,
  },
  {
    bg: `bg-amber-500/10`,
    border: `border-amber-500/20`,
    name: `text-amber-400`,
  },
  { bg: `bg-rose-500/10`, border: `border-rose-500/20`, name: `text-rose-400` },
  { bg: `bg-cyan-500/10`, border: `border-cyan-500/20`, name: `text-cyan-400` },
  {
    bg: `bg-violet-500/10`,
    border: `border-violet-500/20`,
    name: `text-violet-400`,
  },
  {
    bg: `bg-orange-500/10`,
    border: `border-orange-500/20`,
    name: `text-orange-400`,
  },
  { bg: `bg-teal-500/10`, border: `border-teal-500/20`, name: `text-teal-400` },
];
function Mfe(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    ((t = (t << 5) - t + e.charCodeAt(n)), (t |= 0));
  return Math.abs(t);
}
function Nfe(e) {
  return w4[Mfe(e) % w4.length];
}
var T4 = /(@[\w.-]+(?:\s[\w.-]+){0,2})(?=\s|$|[.,!?;:])/;
function E4(e) {
  let t = e.split(T4);
  return t.length === 1
    ? e
    : (0, Z.jsx)(Z.Fragment, {
        children: t.map((e, t) =>
          e.startsWith(`@`) && T4.test(e)
            ? (0, Z.jsx)(
                `span`,
                {
                  className: `bg-primary/20 text-primary rounded px-1 font-medium`,
                  children: e,
                },
                t,
              )
            : (0, Z.jsx)(X.Fragment, { children: e }, t),
        ),
      });
}
function D4({ text: e, useMarkdown: t }) {
  return t
    ? (0, Z.jsx)(GZ, { size: `sm`, children: e })
    : (0, Z.jsx)(Z.Fragment, { children: E4(e) });
}
var Pfe = ({ message: e, onReply: t, onVote: n, onInquiryAnswer: r }) => {
    let { user: i } = Kr(),
      a = e.isAI || e.userName === `Sandscape`,
      o = Dfe(e, i?.id),
      s = (0, X.useMemo)(
        () => (a || o ? null : Nfe(e.userName)),
        [e.userName, a, o],
      ),
      c = a && /[*_#`\->\[\]|]/.test(e.text),
      l = a
        ? `bg-[#1a1528]/80 border border-[#2a2040]/60 rounded-lg`
        : o
          ? `bg-secondary/80 border border-border/60 rounded-lg`
          : `${s.bg} border ${s.border} rounded-lg`,
      u = a
        ? `text-xs font-semibold text-[#b8a8e0]`
        : o
          ? `text-xs font-medium text-muted-foreground`
          : `text-xs font-medium ${s.name}`;
    return (0, Z.jsx)(`div`, {
      className: `mb-2 group flex min-w-0 ${o ? `justify-end pl-8` : `justify-start pr-8`}`,
      children: (0, Z.jsxs)(`div`, {
        className: `px-3 py-2 min-w-0 overflow-hidden ${l} max-w-[90%]`,
        style: { overflowWrap: `anywhere`, wordBreak: `break-word` },
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 mb-1`,
            children: [
              (0, Z.jsxs)(Jn, {
                className: `h-5 w-5`,
                children: [
                  (0, Z.jsx)(qn, {
                    src:
                      Gn(e.avatarUrl) ??
                      (o
                        ? Gn(
                            i?.user_metadata?.avatar_url ??
                              i?.user_metadata?.picture,
                          )
                        : Afe(e.userName)),
                  }),
                  (0, Z.jsx)(Kn, {
                    className: `text-[9px]`,
                    children: e.userName?.substring(0, 2).toUpperCase() ?? `U`,
                  }),
                ],
              }),
              (0, Z.jsx)(`span`, { className: u, children: e.userName }),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] text-muted-foreground/50`,
                children: jfe(e.timestamp),
              }),
              !e.isSuggestion &&
                !o &&
                t &&
                (0, Z.jsx)(x, {
                  variant: `ghost`,
                  size: `sm`,
                  className: `ml-auto p-0.5 h-auto text-muted-foreground/0 group-hover:text-muted-foreground hover:text-foreground transition-colors`,
                  onClick: () => t(e),
                  children: (0, Z.jsx)(zo, { size: 11 }),
                }),
            ],
          }),
          e.replyToUserName &&
            (0, Z.jsxs)(`div`, {
              className: `ml-7 mb-1 text-[10px] text-muted-foreground flex items-center gap-1`,
              children: [
                (0, Z.jsx)(zo, { size: 10, className: `inline-block` }),
                `Replying to @`,
                e.replyToUserName,
              ],
            }),
          e.isSuggestion
            ? (0, Z.jsx)(`div`, {
                className: `ml-7`,
                children: (0, Z.jsxs)(`div`, {
                  className: `border border-primary/20 bg-primary/[0.06] rounded-md p-2`,
                  children: [
                    (0, Z.jsx)(`p`, {
                      className: `text-sm`,
                      children: E4(e.text),
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `mt-1.5 flex items-center gap-3 text-xs`,
                      children: [
                        (0, Z.jsxs)(x, {
                          variant: `ghost`,
                          className: `p-1 h-auto text-muted-foreground hover:text-primary`,
                          onClick: () => n?.(e.id, `up`),
                          children: [
                            (0, Z.jsx)(yn, { size: 12, className: `mr-1` }),
                            ` `,
                            e.upvotes ?? 0,
                          ],
                        }),
                        (0, Z.jsxs)(x, {
                          variant: `ghost`,
                          className: `p-1 h-auto text-muted-foreground hover:text-primary`,
                          onClick: () => n?.(e.id, `down`),
                          children: [
                            (0, Z.jsx)(es, { size: 12, className: `mr-1` }),
                            ` `,
                            e.downvotes ?? 0,
                          ],
                        }),
                        (0, Z.jsx)(`span`, {
                          className: `text-primary/60 text-[10px] font-medium`,
                          children: `Suggestion`,
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : e.inquiryQuestion
              ? (0, Z.jsxs)(`div`, {
                  className: `ml-7`,
                  children: [
                    e.text &&
                      (0, Z.jsx)(`div`, {
                        className: `text-sm mb-1`,
                        children: (0, Z.jsx)(D4, {
                          text: e.text,
                          useMarkdown: c,
                        }),
                      }),
                    (0, Z.jsx)(kfe, {
                      question: e.inquiryQuestion,
                      currentIndex: e.inquiryIndex ?? 0,
                      total: e.inquiryTotal ?? 1,
                      selectedOptionId: e.selectedOptionId,
                      selectedOptionLabel: e.selectedOptionLabel,
                      onAnswer: (t, n) => r?.(e.id, t, n),
                    }),
                  ],
                })
              : (0, Z.jsx)(`div`, {
                  className: `ml-7 text-sm text-foreground/90 min-w-0 overflow-hidden ${e.replyToUserName ? `pl-2 border-l-2 border-primary/20` : ``}`,
                  children: (0, Z.jsx)(D4, { text: e.text, useMarkdown: c }),
                }),
        ],
      }),
    });
  },
  Ffe = ({ isVisible: e }) =>
    e
      ? (0, Z.jsx)(`div`, {
          className: `mb-4 ml-8`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2 text-gray-400`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex gap-1`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                    style: { animationDelay: `0.1s` },
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `w-2 h-2 bg-primary rounded-full animate-bounce`,
                    style: { animationDelay: `0.2s` },
                  }),
                ],
              }),
              (0, Z.jsxs)(`span`, {
                className: `text-xs`,
                children: [fe, ` is typing...`],
              }),
            ],
          }),
        })
      : null;
function O4({
  scrollAreaRef: e,
  messages: t,
  handleReplyToMessage: n,
  handleVote: r,
  handleInquiryAnswer: i,
  isTyping: a,
  ongoingTasks: o,
}) {
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsxs)($r, {
        className: `flex-grow mb-2 min-w-0 min-h-0`,
        ref: e,
        "data-tour": `tour-chat-transcript`,
        children: [
          t.map((e) =>
            (0, Z.jsx)(
              Pfe,
              { message: e, onReply: n, onVote: r, onInquiryAnswer: i },
              e.id,
            ),
          ),
          (0, Z.jsx)(Ffe, { isVisible: a }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `shrink-0`,
        children: (0, Z.jsx)(Efe, { tasks: o }),
      }),
    ],
  });
}
function k4({
  inquiryActive: e,
  inquiryCurrentIndex: t,
  inquiryTotal: n,
  newMessage: r,
  setNewMessage: i,
  handleSendMessage: a,
  replyToMessage: o,
  setReplyToMessage: s,
  sessionUserCount: c,
  presenceUsers: l,
}) {
  return e
    ? (0, Z.jsxs)(`div`, {
        className: `px-2 py-2 text-xs text-muted-foreground text-center border border-dashed border-border rounded-lg`,
        children: [`Select an option above (Q`, t + 1, `/`, n, `)`],
      })
    : (0, Z.jsx)(ge, {
        value: r,
        onChange: i,
        onSend: () => a(),
        onTranscription: (e) => i((t) => (t ? `${t} ${e}` : e)),
        replyToMessage: o,
        onCancelReply: () => s(null),
        isMultiUser: c > 1,
        collaborators: l.map((e) => e.username).filter(Boolean),
      });
}
