// CoinDisplay-iWoR0BMU 01 — hex
// Lines 1-59 of readable/assets/CoinDisplay-iWoR0BMU.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { a as r, i, n as a, t as o } from "./dist-CA4uZW3H.js";
import { l as s, m as c, p as l } from "./AuthService-CQeU_0bQ.js";
import { t as u } from "./dist-p2cW4AiE.js";
import { a as d, i as f, n as p, r as m, t as h } from "./dist-BWh9CVbU.js";
import { t as ee } from "./dist-DkIQBCKf.js";
import { n as g } from "./dist-7AcSgfoz.js";
import { r as _ } from "./button-Ap3ysi5G.js";
import { t as v } from "./refresh-cw-CkwJF4P8.js";
import { t as y } from "./triangle-alert-D-SEZi4r.js";
import { n as b, t as x } from "./apiConfig-cGsbt6Be.js";
import { i as S } from "./serviceProxy-CZRpABZv.js";
import { t as te } from "./dist-IS-98_QU.js";
var C = _(`Coins`, [
    [`circle`, { cx: `8`, cy: `8`, r: `6`, key: `3yglwk` }],
    [`path`, { d: `M18.09 10.37A6 6 0 1 1 10.34 18`, key: `t5s6rm` }],
    [`path`, { d: `M7 6h1v4`, key: `1obek4` }],
    [`path`, { d: `m16.71 13.88.7.71-2.82 2.82`, key: `1rbuyh` }],
  ]),
  w = e(t(), 1),
  T = {
    development: {
      hex: `#3b82f6`,
      bgClass: `bg-blue-500`,
      bgTransparent: `bg-blue-500/20`,
      label: `Development`,
    },
    art: {
      hex: `#ec4899`,
      bgClass: `bg-pink-500`,
      bgTransparent: `bg-pink-500/20`,
      label: `Art`,
    },
    audio: {
      hex: `#8b5cf6`,
      bgClass: `bg-purple-500`,
      bgTransparent: `bg-purple-500/20`,
      label: `Audio`,
    },
    design: {
      hex: `#10b981`,
      bgClass: `bg-green-500`,
      bgTransparent: `bg-green-500/20`,
      label: `Design`,
    },
    qa: {
      hex: `#f59e0b`,
      bgClass: `bg-amber-500`,
      bgTransparent: `bg-amber-500/20`,
      label: `QA`,
    },
  };
function E(e) {
  return T[e]?.hex || `#6b7280`;
}
function D(e) {
  return T[e]?.label || e;
}
