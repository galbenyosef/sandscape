// Create-CEn7EAZs 47 — classname
// Lines 15040-15281 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Sne({
  step: e,
  index: t,
  reversed: n,
  gridStyle: r,
  autoEdit: i,
  onAutoEditHandled: a,
  onUpdate: o,
  onRemove: s,
  onReorder: c,
  onInsert: l,
  registerRef: u,
}) {
  let [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(e.name),
    [y, b] = (0, X.useState)(e.description),
    x = (0, X.useRef)(null),
    S = (0, X.useRef)(null),
    C = (0, X.useRef)(null);
  ((0, X.useEffect)(() => {
    v(e.name);
  }, [e.name]),
    (0, X.useEffect)(() => {
      b(e.description);
    }, [e.description]),
    (0, X.useEffect)(() => {
      p && S.current && S.current.focus();
    }, [p]),
    (0, X.useEffect)(() => {
      h && C.current && C.current.focus();
    }, [h]),
    (0, X.useEffect)(() => {
      i && (m(!0), a());
    }, [i, a]),
    (0, X.useEffect)(() => {
      if (!d) return;
      let e = (e) => {
        x.current && !x.current.contains(e.target) && f(!1);
      };
      return (
        document.addEventListener(`mousedown`, e),
        () => document.removeEventListener(`mousedown`, e)
      );
    }, [d]));
  let w = () => {
      m(!1);
      let n = _.trim();
      n && n !== e.name ? o(t, { name: n }) : v(e.name);
    },
    T = () => {
      g(!1);
      let n = y.trim();
      n === e.description ? b(e.description) : o(t, { description: n });
    },
    { dragProps: E, isDragging: D } = Ce({
      kind: op,
      payload: () => ({ listId: ap, index: t }),
      preview: (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
        children: [
          (0, Z.jsx)(O, { className: `w-3 h-3` }),
          (0, Z.jsx)(`span`, {
            className: `truncate max-w-[160px]`,
            children: e.name || `Step`,
          }),
        ],
      }),
    }),
    k = (0, X.useRef)(null),
    [A, j] = (0, X.useState)(null),
    M = (0, X.useCallback)((e) => {
      let t = k.current;
      if (!t) return `left`;
      let n = t.getBoundingClientRect();
      return e < n.left + n.width / 2 ? `left` : `right`;
    }, []),
    { dropProps: N, isOver: P } = Oe({
      accept: (e) => e.kind === op && e.payload.index !== t,
      onDragOver: (e, t) => j(M(t.x)),
      onDragLeave: () => j(null),
      onDrop: (e, r) => {
        j(null);
        let i = e.payload.index,
          a = (n ? M(r.x) === `right` : M(r.x) === `left`) ? t : t + 1;
        (i < a && --a, a !== i && c(i, a));
      },
    });
  return (0, Z.jsxs)(`div`, {
    ref: (0, X.useCallback)(
      (e) => {
        ((k.current = e), N.ref(e), u(t, e));
      },
      [N.ref, t, u],
    ),
    onPointerDown: E.onPointerDown,
    draggable: E.draggable,
    "data-dnd-zone": N[`data-dnd-zone`],
    style: { ...E.style, ...r },
    className: `group relative z-10 w-full min-w-0 max-w-[190px] overflow-hidden rounded-lg border bg-card transition-all ${D ? `opacity-40 scale-95` : ``} ${P ? `border-primary/50` : `border-border`}`,
    children: [
      (0, Z.jsx)(`div`, {
        className: `absolute top-0 left-0 right-0 h-[2px]`,
        style: {
          background: `linear-gradient(90deg, transparent, ${e.color}55, transparent)`,
        },
      }),
      P &&
        A &&
        (0, Z.jsx)(`div`, {
          className: `pointer-events-none absolute inset-y-2 z-20 w-[3px] rounded-full bg-primary ${A === `left` ? `left-0` : `right-0`}`,
        }),
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between px-2.5 pt-2.5 pb-1`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, Z.jsx)(O, {
                className: `w-3 h-3 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab`,
              }),
              (0, Z.jsx)(`span`, {
                className: `w-5 h-5 rounded-md text-[10px] font-bold flex items-center justify-center`,
                style: { backgroundColor: `${e.color}20`, color: e.color },
                children: t + 1,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `relative`,
            ref: x,
            children: [
              (0, Z.jsx)(`button`, {
                onClick: () => f(!d),
                "aria-label": `Step ${t + 1} options`,
                className: `w-5 h-5 flex items-center justify-center text-muted-foreground/40 hover:text-muted-foreground transition-colors rounded`,
                children: (0, Z.jsx)(Ho, { className: `w-3.5 h-3.5` }),
              }),
              d &&
                (0, Z.jsxs)(`div`, {
                  className: `absolute right-0 top-6 z-50 bg-card border border-border rounded-lg shadow-xl py-1 min-w-[130px]`,
                  children: [
                    (0, Z.jsxs)(`button`, {
                      onClick: () => {
                        (l(t), f(!1));
                      },
                      className: `flex items-center gap-2 px-3 py-1.5 text-xs text-foreground/80 hover:bg-secondary w-full text-left`,
                      children: [
                        (0, Z.jsx)(Br, { className: `w-3 h-3` }),
                        `Insert before`,
                      ],
                    }),
                    (0, Z.jsxs)(`button`, {
                      onClick: () => {
                        (l(t + 1), f(!1));
                      },
                      className: `flex items-center gap-2 px-3 py-1.5 text-xs text-foreground/80 hover:bg-secondary w-full text-left`,
                      children: [
                        (0, Z.jsx)(Br, { className: `w-3 h-3` }),
                        `Insert after`,
                      ],
                    }),
                    (0, Z.jsxs)(`button`, {
                      onClick: () => {
                        (s(t), f(!1));
                      },
                      className: `flex items-center gap-2 px-3 py-1.5 text-xs text-red-400 hover:bg-secondary w-full text-left`,
                      children: [
                        (0, Z.jsx)(jr, { className: `w-3 h-3` }),
                        `Remove step`,
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        className: `flex justify-center py-2`,
        children: (0, Z.jsx)(`span`, {
          className: `text-2xl`,
          style: { filter: `drop-shadow(0 0 6px ${e.color}40)` },
          children: e.emoji || `🎮`,
        }),
      }),
      (0, Z.jsx)(`div`, {
        className: `px-2.5 pb-1`,
        children: p
          ? (0, Z.jsx)(`input`, {
              ref: S,
              value: _,
              onChange: (e) => v(e.target.value),
              onBlur: w,
              onKeyDown: (t) => {
                (t.key === `Enter` && w(),
                  t.key === `Escape` && (v(e.name), m(!1)));
              },
              maxLength: 30,
              className: `w-full bg-transparent border-b border-primary/40 text-xs font-semibold text-foreground/90 outline-none text-center`,
            })
          : (0, Z.jsx)(`div`, {
              onClick: () => m(!0),
              className: `text-xs font-semibold text-foreground/90 text-center cursor-pointer hover:opacity-80 transition-opacity truncate`,
              children:
                e.name ||
                (0, Z.jsx)(`span`, {
                  className: `italic opacity-40`,
                  children: `Step name`,
                }),
            }),
      }),
      (0, Z.jsx)(`div`, {
        className: `px-2.5 pb-3`,
        children: h
          ? (0, Z.jsx)(`textarea`, {
              ref: C,
              value: y,
              onChange: (e) => b(e.target.value),
              onBlur: T,
              onKeyDown: (t) => {
                t.key === `Escape` && (b(e.description), g(!1));
              },
              maxLength: 80,
              rows: 2,
              className: `w-full bg-transparent border-b border-primary/40 text-[11px] text-muted-foreground outline-none resize-none text-center`,
            })
          : (0, Z.jsx)(`div`, {
              onClick: () => g(!0),
              className: `text-[11px] text-muted-foreground text-center cursor-pointer hover:opacity-80 transition-opacity line-clamp-3`,
              children:
                e.description ||
                (0, Z.jsx)(`span`, {
                  className: `italic opacity-40`,
                  children: `Description`,
                }),
            }),
      }),
    ],
  });
}
