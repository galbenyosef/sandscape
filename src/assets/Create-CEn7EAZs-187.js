// Create-CEn7EAZs 187 — children
// Lines 62527-62863 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var aQ = {
    p: ({ children: e }) =>
      (0, Z.jsx)(`p`, { className: `mb-1.5 last:mb-0`, children: e }),
    strong: ({ children: e }) =>
      (0, Z.jsx)(`strong`, {
        className: `font-semibold text-foreground`,
        children: e,
      }),
    em: ({ children: e }) =>
      (0, Z.jsx)(`em`, { className: `italic`, children: e }),
    h1: ({ children: e }) =>
      (0, Z.jsx)(`h1`, {
        className: `text-sm font-bold mb-1 mt-2 first:mt-0`,
        children: e,
      }),
    h2: ({ children: e }) =>
      (0, Z.jsx)(`h2`, {
        className: `text-sm font-bold mb-1 mt-2 first:mt-0`,
        children: e,
      }),
    h3: ({ children: e }) =>
      (0, Z.jsx)(`h3`, {
        className: `text-sm font-semibold mb-1 mt-1.5 first:mt-0`,
        children: e,
      }),
    ul: ({ children: e }) =>
      (0, Z.jsx)(`ul`, {
        className: `list-disc list-inside mb-1.5 space-y-0.5`,
        children: e,
      }),
    ol: ({ children: e }) =>
      (0, Z.jsx)(`ol`, {
        className: `list-decimal list-inside mb-1.5 space-y-0.5`,
        children: e,
      }),
    li: ({ children: e }) =>
      (0, Z.jsx)(`li`, { className: `text-sm`, children: e }),
    code: ({ children: e, className: t }) =>
      t?.startsWith(`language-`)
        ? (0, Z.jsx)(`code`, {
            className: `block bg-background/80 rounded p-2 my-1.5 text-xs font-mono overflow-x-auto`,
            children: e,
          })
        : (0, Z.jsx)(`code`, {
            className: `bg-background/80 rounded px-1 py-0.5 text-xs font-mono break-all`,
            children: e,
          }),
    pre: ({ children: e }) =>
      (0, Z.jsx)(`pre`, { className: `my-1.5 overflow-x-auto`, children: e }),
    blockquote: ({ children: e }) =>
      (0, Z.jsx)(`blockquote`, {
        className: `border-l-2 border-muted-foreground/30 pl-2 my-1.5 text-muted-foreground italic`,
        children: e,
      }),
    a: ({ href: e, children: t }) =>
      (0, Z.jsx)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `text-primary hover:underline`,
        children: t,
      }),
  },
  oQ = {
    p: ({ children: e }) =>
      (0, Z.jsx)(`p`, {
        className: `mb-3 leading-relaxed last:mb-0`,
        children: e,
      }),
    strong: ({ children: e }) =>
      (0, Z.jsx)(`strong`, {
        className: `font-semibold text-foreground`,
        children: e,
      }),
    em: ({ children: e }) =>
      (0, Z.jsx)(`em`, { className: `italic`, children: e }),
    h1: ({ children: e }) =>
      (0, Z.jsx)(`h1`, {
        className: `text-2xl font-bold text-foreground mt-6 mb-3 first:mt-0`,
        children: e,
      }),
    h2: ({ children: e }) =>
      (0, Z.jsx)(`h2`, {
        className: `text-xl font-semibold text-foreground mt-5 mb-2.5 first:mt-0`,
        children: e,
      }),
    h3: ({ children: e }) =>
      (0, Z.jsx)(`h3`, {
        className: `text-lg font-semibold text-foreground mt-4 mb-2 first:mt-0`,
        children: e,
      }),
    h4: ({ children: e }) =>
      (0, Z.jsx)(`h4`, {
        className: `text-base font-semibold text-foreground mt-3 mb-1.5 first:mt-0`,
        children: e,
      }),
    ul: ({ children: e }) =>
      (0, Z.jsx)(`ul`, {
        className: `list-disc pl-5 mb-3 space-y-1`,
        children: e,
      }),
    ol: ({ children: e }) =>
      (0, Z.jsx)(`ol`, {
        className: `list-decimal pl-5 mb-3 space-y-1`,
        children: e,
      }),
    li: ({ children: e }) =>
      (0, Z.jsx)(`li`, { className: `leading-relaxed`, children: e }),
    code: ({ children: e, className: t }) =>
      t?.startsWith(`language-`)
        ? (0, Z.jsx)(`code`, {
            className: `block bg-background/80 rounded-md p-3 my-3 text-sm font-mono overflow-x-auto`,
            children: e,
          })
        : (0, Z.jsx)(`code`, {
            className: `bg-background/80 rounded px-1.5 py-0.5 text-[0.9em] font-mono break-all`,
            children: e,
          }),
    pre: ({ children: e }) =>
      (0, Z.jsx)(`pre`, { className: `my-3 overflow-x-auto`, children: e }),
    blockquote: ({ children: e }) =>
      (0, Z.jsx)(`blockquote`, {
        className: `border-l-2 border-muted-foreground/30 pl-3 my-3 text-muted-foreground italic`,
        children: e,
      }),
    a: ({ href: e, children: t }) =>
      (0, Z.jsx)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `text-primary hover:underline`,
        children: t,
      }),
    hr: () => (0, Z.jsx)(`hr`, { className: `border-border my-4` }),
    table: ({ children: e }) =>
      (0, Z.jsx)(`div`, {
        className: `overflow-x-auto mb-3`,
        children: (0, Z.jsx)(`table`, {
          className: `min-w-full text-sm border-collapse`,
          children: e,
        }),
      }),
    th: ({ children: e }) =>
      (0, Z.jsx)(`th`, {
        className: `border border-border bg-secondary/50 px-2.5 py-1.5 text-left font-semibold`,
        children: e,
      }),
    td: ({ children: e }) =>
      (0, Z.jsx)(`td`, {
        className: `border border-border px-2.5 py-1.5 align-top`,
        children: e,
      }),
  };
function sQ({ children: e, size: t = `doc` }) {
  return (0, Z.jsx)(eY, {
    remarkPlugins: [iQ],
    components: t === `sm` ? aQ : oQ,
    children: e,
  });
}
function cQ(e) {
  return Cr.map((t) => {
    let n = e[t];
    return {
      docId: t,
      title: n?.title || xr[t],
      updatedAt: n?.updated_at ?? null,
      version: n?.current_version ?? null,
      exists: !!n,
    };
  });
}
function lQ(e) {
  let t = {};
  for (let n of Cr) {
    let r = e[n];
    !r ||
      typeof r != `object` ||
      (t[n] = {
        doc_id: n,
        title: r.title ?? null,
        updated_at: r.updated_at ?? null,
        current_version: r.current_version ?? null,
      });
  }
  return t;
}
function uQ(e) {
  return [...e].sort((e, t) => t.version - e.version);
}
function dQ(e) {
  return e
    ? e.kind === `agent`
      ? e.name || `Sandscape AI`
      : e.name || `User`
    : `Unknown`;
}
function fQ(e) {
  if (!e) return ``;
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? e
    : t.toLocaleString([], {
        month: `short`,
        day: `numeric`,
        hour: `2-digit`,
        minute: `2-digit`,
      });
}
var pQ = {
  gdd: `gdd`,
  tdd: `tdd`,
  "uiux-direction": `uiux_direction`,
  "experience-bible": `experience_bible`,
  "feature-list": `feature_list`,
};
function mQ({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  gameDesignData: r,
  onOpenEditorTab: i,
  docId: a,
}) {
  let [o, s] = (0, X.useState)(``),
    c = r?.designDocuments?.[a],
    l = typeof c?.content == `string` && c.content.trim().length > 0,
    u = c?.title || xr[a],
    d = Ia(Ua(e.id)),
    f = e.state === `in-progress`;
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-start gap-2.5`,
        children: [
          (0, Z.jsx)(`div`, {
            className: `w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`,
            children: (0, Z.jsx)(zt, { className: `h-4 w-4 text-primary` }),
          }),
          (0, Z.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, Z.jsx)(`p`, {
                className: `text-sm font-semibold text-foreground/90 truncate`,
                children: u,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-[11px] text-muted-foreground/60`,
                children: l
                  ? `v${c?.current_version ?? 1}${c?.updated_at ? ` · Updated ${fQ(c.updated_at)}` : ``}`
                  : `Not created yet`,
              }),
            ],
          }),
        ],
      }),
      f &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-center gap-2 text-sm text-primary py-8`,
          children: [
            (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
            `Writing `,
            u.toLowerCase(),
            `...`,
          ],
        }),
      l &&
        !f &&
        (0, Z.jsx)(`div`, {
          className: `rounded-lg border border-border bg-card p-3 max-h-96 overflow-y-auto scrollbar-themed`,
          children: (0, Z.jsx)(sQ, { size: `doc`, children: c.content }),
        }),
      l &&
        (0, Z.jsx)(_p, {
          tabId: `docs`,
          label: `Open in Documents Editor`,
          onOpenEditorTab: i,
        }),
      !f &&
        (0, Z.jsxs)(`div`, {
          className: `space-y-2 ${l ? `pt-2 border-t border-border` : ``}`,
          children: [
            (0, Z.jsxs)(`h4`, {
              className: `text-sm font-semibold text-foreground/80 flex items-center gap-2`,
              children: [
                (0, Z.jsx)(Xr, { className: `h-3 w-3` }),
                l ? `Refine` : `Direction`,
              ],
            }),
            (0, Z.jsx)(`textarea`, {
              value: o,
              onChange: (e) => s(e.target.value),
              className: `w-full h-16 bg-card border border-border rounded-lg p-2.5 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
              placeholder: l
                ? `What to change or emphasize (empty = full rewrite)...`
                : `What to emphasize in this document (optional)...`,
              disabled: t,
            }),
            l
              ? (0, Z.jsx)($t, {
                  variant: `outline`,
                  onClick: () => {
                    (o.trim()
                      ? n?.(e.id, o.trim())
                      : n?.(e.id, `Rewrite the ${u} from scratch`, {
                          params: { regenerate: !0 },
                        }),
                      s(``));
                  },
                  className: `w-full`,
                  disabled: t,
                  cost: d,
                  label: `Regenerate Document`,
                  icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
                  tooltip: `Update the ${u} (every write is versioned)`,
                  checkBalance: !0,
                })
              : (0, Z.jsx)($t, {
                  onClick: () => {
                    (n?.(e.id, o.trim() || `Write the ${u}`), s(``));
                  },
                  className: `w-full`,
                  disabled: t,
                  cost: d,
                  label: `Generate ${u}`,
                  icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
                  isLoading: f,
                  loadingText: `Writing document...`,
                  tooltip: `Write the ${u} from the locked concept`,
                  checkBalance: !0,
                }),
          ],
        }),
    ],
  });
}
