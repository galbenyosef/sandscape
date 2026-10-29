// Create-CEn7EAZs 210 — jsx
// Lines 71649-71910 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var tue = {
  "concept-art": [{ tabId: `assets`, label: `Asset Editor` }],
  "character-concepts": [{ tabId: `assets`, label: `Asset Editor` }],
  "2d-assets": [{ tabId: `image`, label: `Image Editor` }],
  "2d-animation": [{ tabId: `image`, label: `Image Editor` }],
  "3d-assets": [{ tabId: `assets`, label: `Asset Editor` }],
  "physics-friendly-shapes": [{ tabId: `assets`, label: `Asset Editor` }],
  "orientation-clinic": [{ tabId: `assets`, label: `Asset Editor` }],
  "scale-clinic": [{ tabId: `assets`, label: `Asset Editor` }],
  "3d-drop-in": [{ tabId: `assets`, label: `Asset Editor` }],
  "audio-direction": [{ tabId: `sound`, label: `Sound Editor` }],
  sfx: [{ tabId: `sound`, label: `Sound Editor` }],
  music: [{ tabId: `sound`, label: `Sound Editor` }],
  "environment-map": [{ tabId: `assets`, label: `Asset Editor` }],
  "sfx-drop-in": [{ tabId: `sound`, label: `Sound Editor` }],
  "music-drop-in": [{ tabId: `sound`, label: `Sound Editor` }],
  "voice-cast": [{ tabId: `sound`, label: `Sound Editor` }],
  "voice-drop-in": [{ tabId: `sound`, label: `Sound Editor` }],
  "build-first-playable": [
    { tabId: `level`, label: `Level Editor` },
    { tabId: `code`, label: `Code Editor` },
  ],
  "level-design": [{ tabId: `level`, label: `Level Editor` }],
  developer: [{ tabId: `code`, label: `Code Editor` }],
  "style-guide": [{ tabId: `character`, label: `Character Editor` }],
  animation: [{ tabId: `level`, label: `Level Editor` }],
  gdd: [{ tabId: `docs`, label: `Documents` }],
  tdd: [{ tabId: `docs`, label: `Documents` }],
  "uiux-direction": [{ tabId: `docs`, label: `Documents` }],
  "experience-bible": [{ tabId: `docs`, label: `Documents` }],
  "feature-list": [{ tabId: `docs`, label: `Documents` }],
};
function nue(e) {
  if (e.id === `developer` || e.domain === `developer`) return `developer`;
  let t = {
    "concept-lock-in": `game-design`,
    "style-guide": `art-direction`,
    "asset-plan": `assets`,
    assets: `assets`,
    "build-first-playable": `build-first-playable`,
    "quality-pass": `default`,
    "concept-art": `concept-art`,
    "2d-assets": `2d-assets`,
    "2d-animation": `2d-animation`,
    "3d-assets": `3d-assets`,
    "physics-friendly-shapes": `physics-shape`,
    "orientation-clinic": `orientation-clinic`,
    "scale-clinic": `scale-clinic`,
    "audio-direction": `audio-direction`,
    sfx: `audio-sfx`,
    music: `audio-music`,
    gdd: `document`,
    tdd: `document`,
    "uiux-direction": `document`,
    "experience-bible": `document`,
    "feature-list": `document`,
    "voice-cast": `voice`,
    "voice-drop-in": `asset-integration`,
    "environment-map": `environment-map`,
    "3d-drop-in": `asset-integration`,
    "sfx-drop-in": `asset-integration`,
    "music-drop-in": `asset-integration`,
    "level-design": `level-design`,
    animation: `default`,
    "character-concepts": `character-concepts`,
    "character-rigging": `character-rigging`,
    "animation-planning": `animation-planning`,
    "animation-generation": `animation-generation`,
    "animation-drop-in": `animation-integration`,
    "editor-assets": `editor-assets`,
    settings: `settings`,
    budget: `budget`,
    history: `history`,
  };
  if (t[e.id]) return t[e.id];
  switch (e.domain) {
    case `visuals`:
      return `art-direction`;
    case `game-design`:
      return `game-design`;
    case `development`:
      return `default`;
    case `audio`:
      return `default`;
    default:
      return `default`;
  }
}
function rue({
  node: e,
  onChatAbout: t,
  onExecute: n,
  executionState: r,
  isCodingAgentRunning: i,
  assets: a,
  sessionDir: o,
  gameDesignData: s,
  onUpdateDesignData: c,
  onOpenEditorTab: l,
  generatingAssetNames: u,
  needsInitialization: d,
  codingFeed: f,
  codingResult: p,
  nodeProgress: m,
  onLocalCodingActivity: h,
}) {
  if (!e) return null;
  let g = nue(e),
    _ = () => {
      let _ = {
        node: e,
        executionState: r,
        isCodingAgentRunning: i,
        onChatAbout: t,
        onExecute: n,
        assets: a,
        sessionDir: o,
        gameDesignData: s,
        onUpdateDesignData: c,
        onOpenEditorTab: l,
        generatingAssetNames: u,
        needsInitialization: d,
        codingFeed: f,
        codingResult: p,
        nodeProgress: m,
        onLocalCodingActivity: h,
      };
      switch (g) {
        case `developer`:
          return (0, Z.jsx)(hne, { ..._ });
        case `art-direction`:
          return (0, Z.jsx)(zu, { ..._ });
        case `concept-art`:
          return (0, Z.jsx)(Wu, { ..._ });
        case `2d-assets`:
          return (0, Z.jsx)(Dd, { ..._ });
        case `2d-animation`:
          return (0, Z.jsx)(xf, { ..._ });
        case `assets`:
          return (0, Z.jsx)(tp, { ..._ });
        case `game-design`:
          return (0, Z.jsx)(Dne, { ..._ });
        case `asset-integration`:
          return (0, Z.jsx)(One, { ..._ });
        case `game-vision`:
          return (0, Z.jsx)(jne, { ..._ });
        case `level-design`:
          return (0, Z.jsx)(Kne, { ..._ });
        case `build-first-playable`:
          return (0, Z.jsx)(Une, { ..._ });
        case `3d-assets`:
          return (0, Z.jsx)(qne, { ..._ });
        case `physics-shape`:
          return (0, Z.jsx)(Jne, { ..._ });
        case `orientation-clinic`:
          return (0, Z.jsx)(Yne, { ..._ });
        case `scale-clinic`:
          return (0, Z.jsx)(lre, { ..._ });
        case `audio-direction`:
          return (0, Z.jsx)(mH, { ..._ });
        case `audio-sfx`:
          return (0, Z.jsx)(vH, { ..._, audioKind: `sfx` });
        case `audio-music`:
          return (0, Z.jsx)(vH, { ..._, audioKind: `music` });
        case `document`:
          return (0, Z.jsx)(mQ, { ..._, docId: pQ[e.id] });
        case `voice`:
          return (0, Z.jsx)(b$, { ..._ });
        case `environment-map`:
          return (0, Z.jsx)(vQ, { ..._ });
        case `editor-assets`:
          return (0, Z.jsx)(y1, { ..._ });
        case `settings`:
          return (0, Z.jsx)(dre, { ..._ });
        case `budget`:
          return (0, Z.jsx)(xI, { ..._ });
        case `history`:
          return (0, Z.jsx)(FI, { ..._ });
        case `character-concepts`:
          return (0, Z.jsx)(BI, { ..._ });
        case `character-rigging`:
          return (0, Z.jsx)(HI, { ..._ });
        case `animation-planning`:
          return (0, Z.jsx)(zV, { ..._ });
        case `animation-generation`:
          return (0, Z.jsx)(uH, { ..._ }, o);
        case `animation-integration`:
          return (0, Z.jsx)(dH, { ..._ });
        default:
          return (0, Z.jsx)(Hc, { ..._ });
      }
    };
  return (0, Z.jsx)(`div`, {
    className: `h-full bg-card flex flex-col overflow-x-hidden`,
    children: (0, Z.jsx)(Lr, {
      className: `flex-1`,
      children:
        g === `document` || g === `animation-generation`
          ? (0, Z.jsx)(`div`, { className: `w-0 min-w-full`, children: _() })
          : _(),
    }),
  });
}
function b1(e) {
  switch (e) {
    case `locked`:
      return `Locked`;
    case `available`:
      return `Ready`;
    case `in-progress`:
      return `In Progress`;
    case `complete`:
      return `Complete`;
    case `needs-review`:
      return `Review`;
    case `outdated`:
      return `Outdated`;
    default:
      return e;
  }
}
function x1(e) {
  switch (e) {
    case `locked`:
      return `rgba(74, 74, 74, 0.8)`;
    case `available`:
      return `rgba(74, 158, 255, 0.8)`;
    case `in-progress`:
      return `rgba(178, 79, 244, 0.8)`;
    case `complete`:
      return `rgba(0, 229, 160, 0.8)`;
    case `needs-review`:
      return `rgba(255, 157, 66, 0.8)`;
    case `outdated`:
      return `rgba(255, 170, 50, 0.8)`;
    default:
      return `rgba(100, 100, 100, 0.8)`;
  }
}
function S1({ children: e, ...t }) {
  return (0, Z.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    ...t,
    children: e,
  });
}
function C1() {
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(`path`, { d: `M18.5 6.5v9` }),
      (0, Z.jsx)(`path`, { d: `m15.5 12.5 3 3 3-3` }),
    ],
  });
}
