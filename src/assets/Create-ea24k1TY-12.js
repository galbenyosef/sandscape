// Create-ea24k1TY 12 — classname
// Lines 3716-4052 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Hc(e) {
  return e.toolCallId ? `tc:${e.toolCallId}` : `seq:${e.seq}`;
}
function Uc(e, t) {
  let n = t.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
  return RegExp(`(^|[^a-z0-9_-])${n}([^a-z0-9_-]|$)`, `i`).test(e);
}
function Wc(e) {
  if (e.kind === `tool_start` || e.kind === `tool_end`) {
    let { verb: t, detail: n } = Ec(e);
    return n ? `${t} ${n}` : t;
  }
  return e.summary || null;
}
function Gc(e) {
  let t = [],
    n = new Map(),
    r = new Map(),
    i = new Map(),
    a = new Map(),
    o = [],
    s = (e) => {
      let r = n.get(e);
      return (
        r ||
          ((r = {
            type: `module`,
            module: e,
            rows: [],
            toolCount: 0,
            status: `running`,
            latestSummary: null,
          }),
          n.set(e, r),
          t.push(r)),
        r
      );
    },
    c = (e) => {
      if (e === null) return r;
      let t = i.get(e);
      return (t || ((t = new Map()), i.set(e, t)), t);
    };
  for (let n of e) {
    let e = n.child;
    if (n.kind === `child_start` || n.kind === `child_end`) {
      if (!n.child) continue;
      let e = s(n.child);
      {
        let t = Wc(n);
        t && (e.latestSummary = t);
      }
      (n.kind === `child_start` && n.skill && (e.skill = n.skill),
        n.kind === `child_end` && a.set(n.child, n.ok));
      continue;
    }
    e === null &&
      n.kind === `tool_end` &&
      (n.tool ?? ``).toLowerCase() === `spawn_coder` &&
      o.push({ text: `${n.path ?? ``} ${n.summary}`.toLowerCase(), ok: n.ok });
    let r = c(e);
    if (n.kind === `tool_end` && n.toolCallId) {
      let t = r.get(n.toolCallId);
      if (t) {
        if (((t.end = n), r.delete(n.toolCallId), e !== null)) {
          let t = Wc(n);
          t && (s(e).latestSummary = t);
        }
        continue;
      }
    }
    let i = { key: Hc(n), event: n, end: null };
    if (e === null) t.push({ type: `row`, row: i });
    else {
      let t = s(e);
      t.rows.push(i);
      {
        let e = Wc(n);
        e && (t.latestSummary = e);
      }
    }
    n.kind === `tool_start` && n.toolCallId && r.set(n.toolCallId, i);
  }
  for (let e of n.values()) {
    e.toolCount = e.rows.filter(
      (e) =>
        (e.event.kind === `tool_start` || e.event.kind === `tool_end`) &&
        (e.event.tool ?? ``).toLowerCase() !== `draft`,
    ).length;
    let t = a.has(e.module),
      n = t ? (a.get(e.module) ?? null) : null,
      r = !1,
      i = null;
    if (t && n !== null) ((r = !0), (i = n));
    else {
      let n = o.find((t) => Uc(t.text, e.module));
      n ? ((r = !0), (i = n.ok)) : t && (r = !0);
    }
    e.status = r ? (i === !1 ? `failed` : i === !0 ? `ok` : `done`) : `running`;
  }
  return t;
}
function Kc(e) {
  if (!e) return null;
  let t = Date.parse(e);
  return Number.isNaN(t) ? null : t;
}
function qc(e) {
  let t = Math.max(0, Math.floor(e / 1e3)),
    n = Math.floor(t / 60),
    r = t % 60;
  return n > 0 ? `${n}m ${r.toString().padStart(2, `0`)}s` : `${r}s`;
}
function Jc(e) {
  let [t, n] = (0, X.useState)(() => Date.now());
  return (
    (0, X.useEffect)(() => {
      if (!e) return;
      let t = setInterval(() => n(Date.now()), 1e3);
      return () => clearInterval(t);
    }, [e]),
    t
  );
}
function Yc(e) {
  return (
    (e.tool ?? ``).toLowerCase().includes(`qa`) ||
    e.summary.toLowerCase().startsWith(`browser_qa`)
  );
}
function Xc(e, t) {
  if (t?.phase) return t.phase;
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.phase) return n.phase;
    if (n.kind === `phase` && n.summary) return n.summary;
  }
  return null;
}
function Zc({ feed: e, progress: t, running: n }) {
  let r = e?.events ?? [],
    i = Jc(n),
    a = (0, X.useRef)(null),
    [o, s] = (0, X.useState)(!0),
    c = () => {
      let e = a.current;
      if (!e) return;
      let t = e.scrollHeight - e.scrollTop - e.clientHeight < 48;
      s(t);
    };
  (0, X.useLayoutEffect)(() => {
    o && a.current && (a.current.scrollTop = a.current.scrollHeight);
  }, [r.length, o]);
  let l = (0, X.useMemo)(() => Gc(r), [r]),
    [u, d] = (0, X.useState)(() => new Set()),
    f = (0, X.useRef)(new Set());
  (0, X.useEffect)(() => {
    (d(new Set()), (f.current = new Set()));
  }, [e?.taskId, e?.startedAt]);
  let p = (0, X.useMemo)(
    () =>
      l
        .filter((e) => e.type === `module` && e.status === `failed`)
        .map((e) => e.module).join(`
`),
    [l],
  );
  (0, X.useEffect)(() => {
    let e = (
      p
        ? p.split(`
`)
        : []
    ).filter((e) => !f.current.has(e));
    e.length !== 0 &&
      (e.forEach((e) => f.current.add(e)),
      d((t) => {
        let n = new Set(t);
        return (e.forEach((e) => n.add(e)), n);
      }));
  }, [p]);
  let m = (e) =>
      d((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      }),
    h = (0, X.useMemo)(() => Xc(r, t), [r, t]),
    g = t?.step
      ? t.totalSteps
        ? `step ${t.step}/${t.totalSteps}`
        : `step ${t.step}`
      : null,
    _ = r.length ? Kc(r[r.length - 1].ts) : (e?.startedAt ?? null),
    v = e ? (n ? i : (_ ?? i)) - e.startedAt : 0;
  return (0, Z.jsxs)(`div`, {
    className: `rounded-lg border border-border bg-secondary/20 overflow-hidden flex flex-col max-h-80`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-2 px-3 py-2 border-b border-border bg-card/60 shrink-0`,
        children: [
          n
            ? (0, Z.jsx)(J, {
                className: `h-3.5 w-3.5 text-cyan-300 animate-spin shrink-0`,
              })
            : (0, Z.jsx)(wn, {
                className: `h-3.5 w-3.5 text-muted-foreground/60 shrink-0`,
              }),
          (0, Z.jsx)(`span`, {
            className: `text-[11px] font-semibold text-foreground/80 truncate`,
            children: h ? Qc(h) : n ? `Working…` : `Build log`,
          }),
          g &&
            (0, Z.jsx)(`span`, {
              className: `text-[10px] text-muted-foreground/60 shrink-0`,
              children: g,
            }),
          (0, Z.jsx)(`span`, {
            className: `ml-auto text-[10px] font-mono text-muted-foreground/60 shrink-0 tabular-nums`,
            children: qc(v),
          }),
        ],
      }),
      (0, Z.jsx)(`div`, {
        ref: a,
        onScroll: c,
        className: `flex-1 overflow-y-auto px-2 py-1.5 space-y-0.5 min-h-0`,
        children:
          l.length === 0
            ? (0, Z.jsx)(`div`, {
                className: `text-[11px] text-muted-foreground/50 text-center py-6`,
                children: n
                  ? `Waiting for the builder…`
                  : `No activity recorded.`,
              })
            : l.map((e) =>
                e.type === `module`
                  ? (0, Z.jsx)(
                      $c,
                      {
                        card: e,
                        live: n,
                        expanded: u.has(e.module),
                        onToggle: () => m(e.module),
                      },
                      `mod:${e.module}`,
                    )
                  : (0, Z.jsx)(
                      tl,
                      { row: e.row, live: n, insideCard: !1 },
                      `row:${e.row.key}`,
                    ),
              ),
      }),
      !o &&
        (0, Z.jsx)(`button`, {
          type: `button`,
          onClick: () => s(!0),
          className: `shrink-0 text-[10px] text-primary py-1 border-t border-border hover:bg-primary/10 transition-colors`,
          children: `Jump to latest ↓`,
        }),
    ],
  });
}
function Qc(e) {
  return (
    {
      exploring: `Exploring the workspace`,
      implementing: `Writing code`,
      "smoke-testing": `Smoke-testing`,
      reporting: `Reporting`,
      "generating-assets": `Generating assets`,
    }[e] ?? e
  );
}
function $c({ card: e, live: t, expanded: n, onToggle: r }) {
  let i = t && e.status === `running`,
    { icon: a, iconClass: o } = el(e.status, i),
    s = `${e.toolCount} ${e.toolCount === 1 ? `action` : `actions`}`,
    c = e.skill ?? ``;
  return (0, Z.jsxs)(`div`, {
    className: `mt-1 rounded-md border border-amber-400/20 bg-amber-400/5 overflow-hidden`,
    children: [
      (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: r,
        className: `w-full flex items-center gap-2 px-2 py-1.5 text-left hover:bg-amber-400/10 transition-colors`,
        children: [
          (0, Z.jsx)(I, {
            className: `h-3.5 w-3.5 text-amber-300/80 shrink-0`,
          }),
          (0, Z.jsx)(`span`, {
            className: `text-[11px] font-semibold text-amber-200/90 truncate`,
            children: e.module,
          }),
          c &&
            (0, Z.jsx)(`span`, {
              className: `shrink-0 rounded px-1 py-px text-[9px] font-medium bg-amber-400/10 text-amber-200/70`,
              title: c,
              children: c,
            }),
          (0, Z.jsx)(`span`, { className: p(`shrink-0`, o), children: a }),
          (0, Z.jsx)(`span`, {
            className: `ml-auto text-[10px] text-muted-foreground/50 shrink-0 tabular-nums`,
            children: s,
          }),
          n
            ? (0, Z.jsx)(ti, {
                className: `h-3 w-3 text-muted-foreground/50 shrink-0`,
              })
            : (0, Z.jsx)(De, {
                className: `h-3 w-3 text-muted-foreground/50 shrink-0`,
              }),
        ],
      }),
      !n &&
        e.latestSummary &&
        (0, Z.jsx)(`div`, {
          className: `px-2 pb-1.5 pl-9 text-[10.5px] text-muted-foreground/60 truncate`,
          title: e.latestSummary,
          children: e.latestSummary,
        }),
      n &&
        (0, Z.jsx)(`div`, {
          className: `border-t border-amber-400/10 py-1 space-y-0.5`,
          children:
            e.rows.length === 0
              ? (0, Z.jsx)(`div`, {
                  className: `pl-9 py-1 text-[10.5px] text-muted-foreground/50`,
                  children: `No activity yet.`,
                })
              : e.rows.map((e) =>
                  (0, Z.jsx)(tl, { row: e, live: t, insideCard: !0 }, e.key),
                ),
        }),
    ],
  });
}
