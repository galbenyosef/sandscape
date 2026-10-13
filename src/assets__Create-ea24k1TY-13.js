// assets__Create-ea24k1TY 13 — classname
// Lines 4053-4273 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function el(e, t) {
  return t || e === `running`
    ? {
        icon: (0, Z.jsx)(J, { className: `h-3 w-3 animate-spin` }),
        iconClass: `text-cyan-300/80`,
      }
    : e === `failed`
      ? {
          icon: (0, Z.jsx)(oi, { className: `h-3 w-3` }),
          iconClass: `text-red-400`,
        }
      : e === `ok`
        ? {
            icon: (0, Z.jsx)(Be, { className: `h-3 w-3` }),
            iconClass: `text-green-400/80`,
          }
        : {
            icon: (0, Z.jsx)(Be, { className: `h-3 w-3` }),
            iconClass: `text-muted-foreground/50`,
          };
}
function tl({ row: e, live: t, insideCard: n }) {
  let r = e.event;
  if (r.local)
    return r.summary === `Reconnected - earlier activity not retained`
      ? (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-1.5 py-1 pl-1`,
          children: [
            (0, Z.jsx)(Sn, {
              className: `h-3 w-3 text-muted-foreground/60 shrink-0`,
            }),
            (0, Z.jsx)(`span`, {
              className: `text-[11px] italic text-muted-foreground/70`,
              children: r.summary,
            }),
          ],
        })
      : (0, Z.jsxs)(`div`, {
          className: `flex items-start gap-1.5 py-1 pl-1`,
          children: [
            (0, Z.jsx)(Cn, {
              className: `h-3 w-3 text-primary mt-0.5 shrink-0`,
            }),
            (0, Z.jsxs)(`span`, {
              className: `text-[11px] text-primary/90`,
              children: [
                `Sent to the builder: `,
                (0, Z.jsx)(`span`, {
                  className: `text-foreground/80`,
                  children: r.summary,
                }),
              ],
            }),
          ],
        });
  if (r.kind === `narration`)
    return (0, Z.jsxs)(`div`, {
      className: p(`flex items-start gap-1.5 py-1.5`, n ? `pl-6` : `pl-2`),
      children: [
        (0, Z.jsx)(si, {
          className: `h-3 w-3 text-muted-foreground/40 mt-1 shrink-0`,
        }),
        (0, Z.jsx)(`span`, {
          className: `text-[12.5px] text-foreground/90 leading-relaxed`,
          children: r.summary,
        }),
      ],
    });
  if (r.kind === `phase`)
    return (0, Z.jsxs)(`div`, {
      className: `flex items-center gap-1.5 py-1 pl-1 mt-1`,
      children: [
        (0, Z.jsx)(To, { className: `h-3 w-3 text-primary/70 shrink-0` }),
        (0, Z.jsx)(`span`, {
          className: `text-[11px] font-medium uppercase tracking-wide text-foreground/70`,
          children: Qc(r.phase || r.summary),
        }),
      ],
    });
  let i = e.end ?? r,
    { verb: a, detail: o } = Ec(i),
    s = t && r.kind === `tool_start` && !e.end,
    c = e.end ?? (r.kind === `tool_end` ? r : null),
    l = c ? wc(c.ok) : `unknown`,
    u = l === `failed`,
    d = (i.kind === `tool_end` && Yc(i) && i.summary ? i.summary : null) ?? o;
  return (0, Z.jsxs)(`div`, {
    className: p(
      `flex items-start gap-1.5 py-0.5 rounded`,
      n ? `pl-9` : `pl-6`,
      u && `bg-red-500/5`,
    ),
    title: i.summary || void 0,
    children: [
      (0, Z.jsx)(`span`, {
        className: p(`mt-0.5 shrink-0`, Vte(s, l)),
        children: Bte(s, l),
      }),
      (0, Z.jsxs)(`span`, {
        className: `min-w-0 flex-1 text-[10.5px] leading-relaxed`,
        children: [
          (0, Z.jsx)(`span`, {
            className: p(u ? `text-red-300/90` : `text-muted-foreground/70`),
            children: a,
          }),
          d &&
            (0, Z.jsx)(`span`, {
              className: `ml-1.5 break-words text-muted-foreground/50`,
              children: d,
            }),
        ],
      }),
    ],
  });
}
function Bte(e, t) {
  return e
    ? (0, Z.jsx)(J, { className: `h-3 w-3 animate-spin` })
    : t === `failed`
      ? (0, Z.jsx)(oi, { className: `h-3 w-3` })
      : t === `ok`
        ? (0, Z.jsx)(Be, { className: `h-3 w-3` })
        : (0, Z.jsx)(cs, { className: `h-3 w-3` });
}
function Vte(e, t) {
  return e
    ? `text-muted-foreground/60`
    : t === `failed`
      ? `text-red-400`
      : t === `ok`
        ? `text-green-400/70`
        : `text-muted-foreground/40`;
}
var nl = `Coding through Sandscape isn't enabled on your account yet.`;
function rl({ compact: e = !1, className: t = `` }) {
  let {
      codingAccessRequested: n,
      codingAccessRequestPending: r,
      requestCodingAccess: i,
    } = Kr(),
    { toast: a } = u(),
    o = n
      ? (0, Z.jsxs)(`span`, {
          className: `inline-flex shrink-0 items-center gap-1 font-medium text-green-400 ${e ? `text-[10px]` : `text-[11px]`}`,
          children: [
            (0, Z.jsx)(ve, { className: e ? `h-3 w-3` : `h-3.5 w-3.5` }),
            `Access requested`,
          ],
        })
      : (0, Z.jsxs)(`button`, {
          type: `button`,
          onClick: async () => {
            if (!(r || n))
              try {
                if (!(await i())) return;
                a({
                  title: `Access requested`,
                  description: `We'll let you know when coding through Sandscape is enabled on your account.`,
                });
              } catch (e) {
                a({
                  title: `Could not request access`,
                  description:
                    e instanceof Error
                      ? e.message
                      : `Please try again in a moment.`,
                  variant: `destructive`,
                });
              }
          },
          disabled: r,
          className:
            `inline-flex items-center justify-center gap-1.5 rounded-md bg-primary font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 ` +
            (e
              ? `shrink-0 px-2.5 py-1 text-[10px]`
              : `w-full px-3 py-2 text-xs`),
          children: [
            r &&
              (0, Z.jsx)(J, {
                className: `animate-spin ${e ? `h-3 w-3` : `h-3.5 w-3.5`}`,
              }),
            r ? `Requesting…` : `Request access`,
          ],
        });
  return e
    ? (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 rounded-md border border-border bg-secondary/20 px-2.5 py-2 ${t}`,
        children: [
          (0, Z.jsx)(mn, {
            className: `h-3.5 w-3.5 shrink-0 text-muted-foreground/60`,
          }),
          (0, Z.jsx)(`span`, {
            className: `min-w-0 flex-1 text-[11px] leading-tight text-muted-foreground`,
            children: nl,
          }),
          o,
        ],
      })
    : (0, Z.jsxs)(`div`, {
        className: `rounded-lg border border-border bg-secondary/20 p-3 space-y-2.5 ${t}`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Z.jsx)(mn, {
                className: `h-3.5 w-3.5 text-muted-foreground/70`,
              }),
              (0, Z.jsx)(`span`, {
                className: `text-xs font-semibold text-foreground/85`,
                children: `Coding via Sandscape is off`,
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `text-[11px] leading-relaxed text-muted-foreground`,
            children: nl,
          }),
          o,
        ],
      });
}
