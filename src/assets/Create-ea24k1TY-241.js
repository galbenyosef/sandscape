// Create-ea24k1TY 241 — classname
// Lines 81514-81621 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function h4(e) {
  return !!(
    (e.asset_type && gt.includes(e.asset_type)) ||
    e.audio_path ||
    e.sfx_path
  );
}
function vfe(e) {
  return e.asset_type === `music_audio`;
}
function g4(e) {
  return !!(e.audio_path || e.sfx_path);
}
function _4(e) {
  return e.audio_path || e.sfx_path || e.path || e.name;
}
function v4(e) {
  return (e.asset_name || e.name || `Untitled`).replace(/_/g, ` `);
}
function y4(e) {
  return e.id || e.asset_name || e.name || ``;
}
function b4(e) {
  return e.id || e.asset_name || e.name || ``;
}
function x4(e, t) {
  return (0, Z.jsxs)(`div`, {
    className: `flex items-center gap-1.5 rounded-md border border-purple-500/40 bg-[#1a1d2e]/95 px-2 py-1 text-xs text-gray-100 shadow-lg`,
    children: [
      t,
      (0, Z.jsx)(`span`, { className: `truncate max-w-[160px]`, children: e }),
    ],
  });
}
var yfe = ({
    asset: e,
    isSelected: t,
    isMusic: n,
    isPlayable: r,
    onSelect: i,
  }) => {
    let a = n
        ? (0, Z.jsx)(jt, { className: `h-4 w-4 flex-shrink-0 text-primary` })
        : (0, Z.jsx)(Et, { className: `h-4 w-4 flex-shrink-0 text-cyan-400` }),
      { dragProps: o } = Ce({
        kind: `audio-asset`,
        payload: { id: b4(e), asset_type: e.asset_type },
        disabled: !r,
        preview: x4(
          v4(e),
          n
            ? (0, Z.jsx)(jt, { className: `h-3 w-3 text-primary` })
            : (0, Z.jsx)(Et, { className: `h-3 w-3 text-cyan-400` }),
        ),
      });
    return (0, Z.jsxs)(`button`, {
      ...(r ? o : {}),
      onClick: () => r && i(e),
      disabled: !r,
      title: r ? `Drag onto a mixer track` : void 0,
      className: `w-full px-3 py-2 flex items-center gap-2 text-left transition-colors ${r ? (t ? `bg-primary/20 text-foreground` : `hover:bg-muted text-muted-foreground`) : `opacity-40 cursor-not-allowed`}`,
      children: [
        a,
        (0, Z.jsx)(`span`, { className: `text-sm truncate`, children: v4(e) }),
      ],
    });
  },
  bfe = ({ asset: e, isSelected: t, isPlayable: n, onSelect: r }) => {
    let i = e.description || v4(e),
      a = i.length > 40 ? i.slice(0, 37) + `...` : i,
      { dragProps: o } = Ce({
        kind: `audio-asset`,
        payload: { id: b4(e), asset_type: e.asset_type },
        disabled: !n,
        preview: x4(
          v4(e),
          (0, Z.jsx)(Ao, { className: `h-3 w-3 text-amber-400` }),
        ),
      });
    return (0, Z.jsxs)(`button`, {
      ...(n ? o : {}),
      onClick: () => n && r(e),
      disabled: !n,
      title: n ? `Drag onto a mixer track` : void 0,
      className: `w-full pl-7 pr-3 py-1.5 flex items-center gap-2 text-left transition-colors ${n ? (t ? `bg-amber-500/15 text-foreground` : `hover:bg-muted text-muted-foreground`) : `opacity-40 cursor-not-allowed`}`,
      children: [
        (0, Z.jsx)(Ao, {
          className: `h-3 w-3 flex-shrink-0 text-amber-400/70`,
        }),
        (0, Z.jsx)(`div`, {
          className: `flex-1 min-w-0`,
          children: (0, Z.jsx)(`span`, {
            className: `text-xs truncate block`,
            children: a,
          }),
        }),
      ],
    });
  };
function S4(e) {
  if (!e) return null;
  let t = e.bake_stale ?? null;
  return {
    audio_state: e.audio_state ?? null,
    baked_audio_path: e.baked_audio_path ?? null,
    bake_stale: t,
  };
}
