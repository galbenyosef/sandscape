// Create-CEn7EAZs 12 — children
// Lines 3729-4000 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Sc({ choice: e, serverError: t = null, disabled: n = !1 }) {
  let [r, i] = (0, X.useState)(!1);
  if (!e.visible || !e.catalog) return null;
  let { catalog: a, agents: o, rows: s, actionId: c } = e,
    l = e.payload ? Object.keys(e.payload).length : 0,
    u = e.error ?? (e.payload ? t : null);
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border bg-secondary/20 overflow-hidden`,
    "data-testid": `coding-models-picker`,
    children: [
      (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: () => i((e) => !e),
        className: `w-full flex items-center gap-1.5 px-2.5 py-2 text-left text-[11px] font-medium text-muted-foreground/80 hover:text-foreground/80 transition-colors`,
        "aria-expanded": r,
        children: [
          r
            ? (0, Z.jsx)(zr, { className: `h-3 w-3 shrink-0` })
            : (0, Z.jsx)(Se, { className: `h-3 w-3 shrink-0` }),
          (0, Z.jsx)(Io, { className: `h-3 w-3 shrink-0` }),
          `Models`,
          (0, Z.jsx)(`span`, {
            className: `text-[9.5px] uppercase tracking-wider text-muted-foreground/50`,
            children: `admin`,
          }),
          (0, Z.jsx)(`span`, {
            className: `ml-auto text-[10px] ${l > 0 ? `text-primary` : `text-muted-foreground/50`}`,
            children: l > 0 ? `${l} changed` : `defaults`,
          }),
        ],
      }),
      r &&
        (0, Z.jsxs)(`div`, {
          className: `px-2.5 pb-2.5 space-y-2`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `grid grid-cols-3 gap-1 text-[9.5px] uppercase tracking-wider text-muted-foreground/50`,
              children: [
                (0, Z.jsx)(`span`, { children: `Model` }),
                (0, Z.jsx)(`span`, { children: `Effort` }),
                (0, Z.jsx)(`span`, { children: `Fallback` }),
              ],
            }),
            o.map((t) => {
              let r = s[t.skill] ?? {},
                i = Wa(a, t, c),
                o = Ja(a, t, r, c),
                l = r.model === void 0 ? i.thinking : (Qa(t, c) ?? ``);
              return (0, Z.jsxs)(
                `div`,
                {
                  className: `space-y-1`,
                  children: [
                    (0, Z.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 text-[11px]`,
                      children: [
                        (0, Z.jsx)(`span`, {
                          className: `font-medium ${r.model !== void 0 || r.thinking !== void 0 || r.fallback !== void 0 ? `text-primary` : `text-foreground/80`}`,
                          title: t.description,
                          children: t.skill,
                        }),
                        t.kind === `child` &&
                          (0, Z.jsx)(`span`, {
                            className: `text-[9.5px] text-muted-foreground/50`,
                            children: `child`,
                          }),
                        t.requires_vision &&
                          (0, Z.jsx)(`span`, {
                            className: `text-[9.5px] text-muted-foreground/50`,
                            children: `vision`,
                          }),
                      ],
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `grid grid-cols-3 gap-1`,
                      children: [
                        (0, Z.jsxs)(`select`, {
                          "aria-label": `${t.skill} model`,
                          value: r.model ?? ``,
                          disabled: n,
                          onChange: (n) =>
                            e.setRow(t.skill, {
                              model: n.target.value || void 0,
                            }),
                          className: xc,
                          title: r.model ?? `Default: ${i.model}`,
                          children: [
                            (0, Z.jsxs)(`option`, {
                              value: ``,
                              children: [i.model, ` (default)`],
                            }),
                            Ga(a, t).map((e) =>
                              (0, Z.jsx)(
                                `option`,
                                {
                                  value: e.profile,
                                  title: e.description,
                                  children: e.profile,
                                },
                                e.profile,
                              ),
                            ),
                          ],
                        }),
                        (0, Z.jsxs)(`select`, {
                          "aria-label": `${t.skill} effort`,
                          value: r.thinking ?? ``,
                          disabled: n,
                          onChange: (n) =>
                            e.setRow(t.skill, {
                              thinking: n.target.value || void 0,
                            }),
                          className: xc,
                          children: [
                            (0, Z.jsx)(`option`, {
                              value: ``,
                              children: l ? `${l} (default)` : `Default`,
                            }),
                            Ka(a, o).map((e) =>
                              (0, Z.jsx)(
                                `option`,
                                { value: e, children: e },
                                e,
                              ),
                            ),
                          ],
                        }),
                        (0, Z.jsxs)(`select`, {
                          "aria-label": `${t.skill} fallback`,
                          value: r.fallback ?? ``,
                          disabled: n,
                          onChange: (n) =>
                            e.setRow(t.skill, {
                              fallback: n.target.value || void 0,
                            }),
                          className: xc,
                          title: r.fallback ?? `Default: ${i.fallback}`,
                          children: [
                            (0, Z.jsxs)(`option`, {
                              value: ``,
                              children: [i.fallback, ` (default)`],
                            }),
                            Ya(a, t, o).map((e) =>
                              (0, Z.jsx)(
                                `option`,
                                {
                                  value: e.profile,
                                  title: e.description,
                                  children: e.profile,
                                },
                                e.profile,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                t.skill,
              );
            }),
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-2 pt-0.5`,
              children: [
                (0, Z.jsx)(`p`, {
                  className: `text-[10px] leading-relaxed text-muted-foreground/60`,
                  children: `This run only. Default is your saved setting, else the agent's own. Price is unchanged.`,
                }),
                l > 0 &&
                  (0, Z.jsx)(`button`, {
                    type: `button`,
                    onClick: e.reset,
                    disabled: n,
                    className: `ml-auto shrink-0 text-[10.5px] text-muted-foreground hover:text-foreground`,
                    children: `Reset`,
                  }),
              ],
            }),
          ],
        }),
      r &&
        (e.lastRun || e.historyError) &&
        (0, Z.jsx)(Cc, { run: e.lastRun, error: e.historyError }),
      u &&
        (0, Z.jsx)(`p`, {
          className: `px-2.5 pb-2 text-[10.5px] leading-relaxed text-red-400`,
          role: `alert`,
          children: u,
        }),
    ],
  });
}
function Cc({ run: e, error: t }) {
  return (0, Z.jsxs)(`div`, {
    className: `border-t border-border px-2.5 py-2 space-y-1`,
    "data-testid": `coding-models-last-run`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5 text-[9.5px] uppercase tracking-wider text-muted-foreground/50`,
        children: [
          (0, Z.jsx)(`span`, { children: `Last run` }),
          e &&
            (0, Z.jsxs)(`span`, {
              className: `normal-case tracking-normal`,
              children: [
                e.status,
                e.resumed ? ` · resumed` : ``,
                ` · `,
                new Date(e.started_at).toLocaleString(),
              ],
            }),
        ],
      }),
      t &&
        (0, Z.jsx)(`p`, {
          className: `text-[10.5px] text-red-400`,
          children: t,
        }),
      e &&
        e.ran_on === null &&
        (0, Z.jsx)(`p`, {
          className: `text-[10.5px] text-muted-foreground/60`,
          children: `Models used are not available.`,
        }),
      e?.ran_on?.length === 0 &&
        (0, Z.jsx)(`p`, {
          className: `text-[10.5px] text-muted-foreground/60`,
          children: `No model call logged.`,
        }),
      e?.ran_on?.map((e) =>
        (0, Z.jsxs)(
          `div`,
          {
            className: `flex items-baseline gap-1.5 text-[10.5px] min-w-0`,
            children: [
              (0, Z.jsx)(`span`, {
                className: `text-foreground/80 shrink-0`,
                children: e.task_type?.split(`:`)[0] ?? `unlabelled`,
              }),
              e.task_type?.includes(`:`) &&
                (0, Z.jsx)(`span`, {
                  className: `text-muted-foreground/50 truncate`,
                  children: e.task_type.split(`:`)[1],
                }),
              (0, Z.jsx)(`span`, {
                className: `ml-auto truncate ${e.models.length > 1 ? `text-amber-400` : `text-muted-foreground`}`,
                title: e.models.join(` → `),
                children: e.models.map(Xa).join(` → `),
              }),
            ],
          },
          e.task_type ?? ``,
        ),
      ),
    ],
  });
}
function wc(e) {
  return e.toolCallId ? `tc:${e.toolCallId}` : `seq:${e.seq}`;
}
function Tc(e, t) {
  let n = t.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  return RegExp(`(^|[^a-z0-9_-])${n}([^a-z0-9_-]|$)`, `i`).test(e);
}
function Ec(e) {
  if (e.kind === `tool_start` || e.kind === `tool_end`) {
    let { verb: t, detail: n } = fc(e);
    return n ? `${t} ${n}` : t;
  }
  return e.summary || null;
}
