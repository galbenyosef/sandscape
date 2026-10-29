// ChatInput-Bh7UOK0U 04 — classname
// Lines 948-1174 of readable/assets/ChatInput-Bh7UOK0U.pretty.js (statement-aligned).
var q = ({
  value: e,
  onChange: t,
  onSend: n,
  onTranscription: r,
  replyToMessage: i,
  onCancelReply: u,
  placeholder: p,
  disabled: m,
  isMultiUser: h,
  collaborators: g,
  variant: _ = `default`,
}) => {
  let v = _ === `hero`,
    y = f(),
    [b, x] = (0, B.useState)([]),
    [S, C] = (0, B.useState)(!1),
    [w, T] = (0, B.useState)(0),
    E = (0, B.useRef)(null);
  ((0, B.useEffect)(() => {
    let e = E.current;
    e && K(e);
  }, [e, v, i]),
    (0, B.useEffect)(() => {
      let e = E.current,
        t = e?.parentElement;
      if (!e || !t) return;
      let n,
        r = 0,
        i = new ResizeObserver(([t]) => {
          let i = t.contentRect.width;
          i !== n &&
            ((n = i),
            cancelAnimationFrame(r),
            (r = requestAnimationFrame(() => K(e))));
        });
      return (
        i.observe(t),
        () => {
          (i.disconnect(), cancelAnimationFrame(r));
        }
      );
    }, []));
  let D = (0, B.useMemo)(() => z(g), [g]),
    O = (0, B.useMemo)(() => {
      let e = [...D]
        .sort((e, t) => t.length - e.length)
        .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`));
      return RegExp(`(@(?:${e.join(`|`)}))(?=\\s|$)`, `gi`);
    }, [D]),
    k = () => {
      if (!e) return null;
      let t = [],
        n = 0,
        r;
      for (O.lastIndex = 0; (r = O.exec(e)) !== null;)
        (r.index > n &&
          t.push(
            (0, V.jsx)(
              `span`,
              { className: `invisible`, children: e.slice(n, r.index) },
              `t-${n}`,
            ),
          ),
          t.push(
            (0, V.jsx)(
              `span`,
              {
                className: `bg-primary/25 text-primary rounded px-0.5`,
                children: r[1],
              },
              `m-${r.index}`,
            ),
          ),
          (n = r.index + r[0].length));
      return (
        n < e.length &&
          t.push(
            (0, V.jsx)(
              `span`,
              { className: `invisible`, children: e.slice(n) },
              `t-${n}`,
            ),
          ),
        n === 0 ? null : t
      );
    },
    A = (e) => {
      let n = e.target.value;
      t(n);
      let r = n.match(/@([\w.-]+(?:\s[\w.-]+){0,2})$/);
      if (r) {
        let e = r[1].toLowerCase(),
          t = D.filter((t) => t.toLowerCase().includes(e));
        (x(t), C(t.length > 0), T(0));
      } else C(!1);
    },
    j = c(),
    M = l(),
    N = (n) => {
      (t(e.replace(/@[\w.-]+(?:\s[\w.-]+){0,2}$/, `@${n} `)), C(!1));
    };
  return (0, V.jsxs)(V.Fragment, {
    children: [
      i &&
        (0, V.jsxs)(`div`, {
          className: `mb-2 p-2 bg-primary/10 border border-primary/30 rounded text-xs`,
          children: [
            (0, V.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, V.jsxs)(`span`, {
                  children: [`Replying to @`, i.userName],
                }),
                (0, V.jsx)(a, {
                  variant: `ghost`,
                  size: `sm`,
                  className: `p-1 h-auto`,
                  onClick: u,
                  children: `x`,
                }),
              ],
            }),
            (0, V.jsx)(`p`, {
              className: `text-gray-400 truncate`,
              children: i.text,
            }),
          ],
        }),
      (0, V.jsxs)(`div`, {
        className: `mt-auto flex-shrink-0 relative`,
        children: [
          S && (0, V.jsx)(H, { users: b, onSelect: N, highlightedIndex: w }),
          (0, V.jsxs)(`div`, {
            ...s(`tour-chat-composer`),
            className: v
              ? `relative flex items-end bg-card/85 backdrop-blur-md border border-border rounded-full shadow-[0_8px_30px_rgba(76,29,149,0.12)] focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/30 transition-colors dark:bg-[#100c18]/85 dark:border-white/12 dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)]`
              : `relative flex items-end bg-card border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/50`,
            children: [
              v &&
                (0, V.jsx)(d, {
                  className: `absolute left-5 bottom-[18px] h-5 w-5 text-primary/80 pointer-events-none z-[2]`,
                }),
              (() => {
                let e = k();
                return e
                  ? (0, V.jsx)(`div`, {
                      "aria-hidden": !0,
                      className: `absolute top-0 left-0 py-3 pr-24 w-full pointer-events-none whitespace-pre-wrap break-words text-transparent ${v ? `pl-14` : `pl-4`}`,
                      style: {
                        font: `inherit`,
                        lineHeight: `inherit`,
                        minHeight: `44px`,
                      },
                      children: e,
                    })
                  : null;
              })(),
              (0, V.jsx)(`textarea`, {
                "data-chat-composer": !0,
                placeholder: M
                  ? `Chat is off in the tour replay. Keep this game to carry on.`
                  : p ||
                    (h
                      ? y
                        ? `Tag @Sandscape…`
                        : `Tag @Sandscape to talk to the AI`
                      : y
                        ? `Type your message…`
                        : `Type your message or @suggest...`),
                value: e,
                onChange: A,
                disabled: m || M,
                onKeyDown: (e) => {
                  if (S && b.length > 0) {
                    if (e.key === `Tab` || e.key === `Enter`) {
                      (e.preventDefault(), N(b[w]));
                      return;
                    }
                    if (e.key === `ArrowDown`) {
                      (e.preventDefault(), T((e) => (e + 1) % b.length));
                      return;
                    }
                    if (e.key === `ArrowUp`) {
                      (e.preventDefault(),
                        T((e) => (e - 1 + b.length) % b.length));
                      return;
                    }
                    if (e.key === `Escape`) {
                      (e.preventDefault(), C(!1));
                      return;
                    }
                  }
                  e.key === `Enter` &&
                    !e.shiftKey &&
                    (e.preventDefault(), m || n());
                },
                className: `bg-transparent placeholder-gray-400 resize-none min-h-[44px] max-h-[120px] overflow-y-auto py-3 pr-24 w-full caret-foreground focus:outline-none chat-textarea relative z-[1] ${v ? `pl-14 text-[15px]` : `pl-4`} ${m || M ? `opacity-50 cursor-not-allowed` : ``}`,
                rows: 1,
                style: { height: `auto` },
                ref: E,
              }),
              (0, V.jsxs)(`div`, {
                className: `absolute right-2 bottom-2 flex items-center gap-1 z-[2]`,
                children: [
                  (0, V.jsx)(G, {
                    onTranscriptionComplete: (e) => {
                      r(e);
                    },
                    disabled: m || j || M,
                  }),
                  (0, V.jsx)(a, {
                    onClick: n,
                    disabled: m || M,
                    size: `icon`,
                    className: `bg-primary hover:bg-primary/90 rounded-full h-8 w-8`,
                    children: (0, V.jsx)(o, { className: `h-4 w-4` }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
