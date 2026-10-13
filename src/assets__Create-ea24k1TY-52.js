// assets__Create-ea24k1TY 52 — classname
// Lines 16540-16686 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function ep(e) {
  let t = (e || ``).trim().replace(/\/+$/, ``);
  if (!t) return null;
  try {
    return new URL(t).origin.toLowerCase() ===
      new URL(`https://api.sandscape.app`).origin.toLowerCase()
      ? null
      : t;
  } catch {
    return null;
  }
}
var tp = 120;
function np(e) {
  return e
    .replace(/[\u0000-\u001f\u007f]/g, ` `)
    .replace(/\s+/g, ` `)
    .trim()
    .slice(0, tp)
    .trim();
}
function rp({ sessionId: e, gameTitle: t }) {
  let n = t ? np(t) : ``,
    r = n
      ? `Build my Sandscape game "${n}" (project ${e}).`
      : `Build my Sandscape game (project ${e}).`,
    i = [
      `Make sure Node.js 18 or newer is installed.`,
      "Install the Sandscape skill:\n   npx -y @sandscape/cli@latest skill install\n   If `sandscape` is not on your PATH, run every command below as `npx -y @sandscape/cli@latest <command>`.",
    ];
  return (
    i.push(
      `Clone the project - it brings down the concept, style guide, development plan and every asset already generated for it:\n   sandscape clone ${e}`,
      `Read .sandscape/design.json, then build the first playable in that folder: Three.js, ES modules, relative paths, no build step and no CDN.`,
      `Push it back and give me the play link:
   sandscape push`,
    ),
    `${r}\n\n${i.map((e, t) => `${t + 1}. ${e}`).join(`
`)}\n`
  );
}
function ip({ open: e, onOpenChange: t, sessionId: n, gameTitle: r }) {
  let [i, a] = (0, X.useState)(`idle`),
    o = (0, X.useRef)(null);
  (0, X.useEffect)(
    () => () => {
      o.current && clearTimeout(o.current);
    },
    [],
  );
  let s = rp({ sessionId: n, gameTitle: r }),
    c = ep(Mn.API_BASE_URL),
    l = async () => {
      let e = await uee(s);
      (a(e ? `copied` : `failed`),
        o.current && clearTimeout(o.current),
        (o.current = setTimeout(() => a(`idle`), e ? 2e3 : 4e3)));
    },
    u = i === `copied`,
    d = i === `failed`;
  return (0, Z.jsx)(no, {
    open: e,
    onOpenChange: t,
    children: (0, Z.jsxs)($a, {
      className: `max-w-xl`,
      children: [
        (0, Z.jsxs)(Za, {
          children: [
            (0, Z.jsxs)(eo, {
              className: `flex items-center gap-2`,
              children: [
                (0, Z.jsx)(wn, { className: `h-4 w-4 text-primary` }),
                `Build it in your own coding agent`,
              ],
            }),
            (0, Z.jsx)(to, {
              children: `Paste this into your favorite coding agent.`,
            }),
          ],
        }),
        c &&
          (0, Z.jsxs)(`div`, {
            className: `rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-2.5 space-y-1.5`,
            children: [
              (0, Z.jsx)(`p`, {
                className: `text-[11px] font-medium text-yellow-400`,
                children: `This is not the production Sandscape.`,
              }),
              (0, Z.jsx)(`p`, {
                className: `text-[11px] leading-relaxed text-yellow-400/80`,
                children: `Point your machine at this backend once, before running the prompt:`,
              }),
              (0, Z.jsxs)(`code`, {
                className: `block rounded bg-black/30 px-2 py-1 text-[10px] text-yellow-200 break-all`,
                children: [`export SANDSCAPE_API_URL=`, c],
              }),
            ],
          }),
        (0, Z.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, Z.jsx)(`pre`, {
              className: `max-h-72 overflow-auto rounded-lg border border-border bg-secondary/40 p-3 pr-11 text-[11px] leading-relaxed text-foreground/80 whitespace-pre-wrap`,
              children: s,
            }),
            (0, Z.jsx)(x, {
              size: `icon`,
              variant: `ghost`,
              onClick: l,
              "aria-label": `Copy prompt`,
              className: `absolute right-1.5 top-1.5 h-7 w-7`,
              children: u
                ? (0, Z.jsx)(ve, { className: `h-3.5 w-3.5 text-green-400` })
                : d
                  ? (0, Z.jsx)(U, { className: `h-3.5 w-3.5 text-red-400` })
                  : (0, Z.jsx)(ee, { className: `h-3.5 w-3.5` }),
            }),
          ],
        }),
        d &&
          (0, Z.jsxs)(`p`, {
            className: `flex items-center gap-1.5 text-[11px] text-red-400`,
            children: [
              (0, Z.jsx)(U, { className: `h-3.5 w-3.5 flex-shrink-0` }),
              `Could not reach the clipboard. Select the text above and copy it manually.`,
            ],
          }),
        (0, Z.jsx)(`div`, {
          className: `flex justify-end`,
          children: (0, Z.jsxs)(x, {
            onClick: l,
            className: `gap-2`,
            variant: d ? `destructive` : `default`,
            children: [
              u
                ? (0, Z.jsx)(ve, { className: `h-4 w-4` })
                : d
                  ? (0, Z.jsx)(U, { className: `h-4 w-4` })
                  : (0, Z.jsx)(ee, { className: `h-4 w-4` }),
              u ? `Copied` : d ? `Copy failed` : `Copy prompt`,
            ],
          }),
        }),
      ],
    }),
  });
}
