// Create-CEn7EAZs 188 — children
// Lines 62864-62925 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var hQ = {
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
      className: `text-xs font-bold text-foreground mb-1 mt-2 first:mt-0`,
      children: e,
    }),
  h2: ({ children: e }) =>
    (0, Z.jsx)(`h2`, {
      className: `text-xs font-bold text-foreground mb-1 mt-2 first:mt-0`,
      children: e,
    }),
  h3: ({ children: e }) =>
    (0, Z.jsx)(`h3`, {
      className: `text-xs font-semibold text-foreground mb-1 mt-1.5 first:mt-0`,
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
  li: ({ children: e }) => (0, Z.jsx)(`li`, { children: e }),
  a: ({ href: e, children: t }) =>
    (0, Z.jsx)(`a`, {
      href: e,
      target: `_blank`,
      rel: `noopener noreferrer`,
      className: `text-primary hover:underline`,
      children: t,
    }),
  code: ({ children: e }) =>
    (0, Z.jsx)(`code`, {
      className: `bg-background/80 rounded px-1 py-0.5 text-[10px] font-mono break-all`,
      children: e,
    }),
};
function gQ(e, t) {
  let n = e.concept_art_path || e.panorama_path || e.path;
  return n ? vr.getAssetUrl(t, n, !1) : null;
}
function _Q(e) {
  return (
    e.caption ||
    e.asset_name?.replace(/_/g, ` `) ||
    e.name?.replace(/_/g, ` `) ||
    `Environment`
  );
}
