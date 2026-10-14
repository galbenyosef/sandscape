// assets__TourWrapper-BBwg2sIi 01 — pending
// Lines 1-342 of readable/assets__TourWrapper-BBwg2sIi.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { s as o } from "./CoinDisplay-iWoR0BMU.js";
import { n as s, r as c } from "./serviceProxy-CZRpABZv.js";
import { _ as l } from "./actionsCatalog-BOqBt5wy.js";
import { a as u, i as d, l as f, r as p, t as m } from "./tour-D03BMTEP.js";
import {
  E as h,
  S as g,
  b as _,
  k as v,
  w as y,
} from "./gameCreation-7QUnbwLk.js";
import { W as b, u as x } from "./index-BKDksszn.js";
import { Create as S } from "./Create-ea24k1TY.js";
var C = e(t()),
  ee = {
    sceneName: `level`,
    displayName: `Level`,
    file: `game/scenes/level.json`,
  };
function w(e, t) {
  let n =
    e.invokeSequences?.[t] ??
    (e.generateActionId && t === e.generateActionId
      ? e.generateSequence
      : void 0);
  return n ? e.frames?.[n] : void 0;
}
var te = class {
    assetsFinal;
    contextAssetsFinal;
    pending;
    revealedIds = new Set();
    byFileName = null;
    constructor(e, t, n) {
      ((this.assetsFinal = e),
        (this.contextAssetsFinal = t),
        (this.pending = n));
    }
    reveal(e) {
      this.revealedIds.add(e);
    }
    isRevealed(e) {
      return this.revealedIds.has(e);
    }
    isPending(e) {
      return (
        e.asset_name === this.pending.assetId || e.id === this.pending.assetId
      );
    }
    project(e) {
      if (!this.isPending(e)) return e;
      let t = this.revealedIds.has(this.pending.assetId),
        n = { ...e };
      if (t)
        this.pending.revealedStatus &&
          (n.generation_status = this.pending.revealedStatus);
      else {
        for (let e of this.pending.hiddenFields) delete n[e];
        this.pending.pendingStatus &&
          (n.generation_status = this.pending.pendingStatus);
      }
      return n;
    }
    pathForFileName(e) {
      if (!this.byFileName) {
        this.byFileName = new Map();
        for (let e of [...this.assetsFinal, ...this.contextAssetsFinal])
          for (let [t, n] of Object.entries(e)) {
            if ((t !== `path` && !t.endsWith(`_path`)) || typeof n != `string`)
              continue;
            let e = n.replace(/^.*generated_assets\//, ``).replace(/^\/+/, ``),
              r = e.split(`/`).pop();
            r && !this.byFileName.has(r) && this.byFileName.set(r, e);
          }
      }
      return this.byFileName.get(e) ?? null;
    }
    getAssets() {
      return this.assetsFinal.map((e) => this.project(e));
    }
    getContextAssets() {
      return this.contextAssetsFinal.map((e) => this.project(e));
    }
  },
  T = {
    add_lilac: { name: `Lilac haze`, hex: `#d2a5ff`, usage: `horizon bloom` },
  },
  ne = class {
    guide;
    constructor(e) {
      this.guide =
        e && typeof e == `object` && !Array.isArray(e) ? { ...e } : void 0;
    }
    applyTweak(e) {
      let t = T[e];
      if (!t) {
        console.error(
          `[tour] unknown styleTweak "${e}" — pack.json names a tweak styleStore.ts does not define; the style guide was left unchanged.`,
        );
        return;
      }
      if (!this.guide) {
        console.error(
          `[tour] styleTweak "${e}" has no style guide to change — the fixture context carries no style_guide.`,
        );
        return;
      }
      let n = Array.isArray(this.guide.color_palette)
        ? this.guide.color_palette
        : [];
      n.some((e) => e?.name === t.name) ||
        (this.guide = { ...this.guide, color_palette: [...n, { ...t }] });
    }
    hasSwatch(e) {
      return (this.guide?.color_palette ?? []).some((t) => t?.name === e);
    }
    get() {
      return this.guide;
    }
  },
  E = class {
    deps;
    pending = new Map();
    stopped = !1;
    constructor(e) {
      this.deps = e;
    }
    schedule(e, t) {
      return this.deps.schedule ? this.deps.schedule(e, t) : setTimeout(e, t);
    }
    cancel(e) {
      this.deps.cancel ? this.deps.cancel(e) : clearTimeout(e);
    }
    run(e) {
      this.stopped = !1;
      let t = Date.now();
      for (let n of e.steps) {
        let e = this.schedule(() => {
          (this.pending.delete(e), this.apply(n));
        }, n.delayMs);
        this.pending.set(e, { due: t + n.delayMs, step: n });
      }
    }
    flush() {
      let e = [...this.pending.entries()].sort((e, t) => e[1].due - t[1].due);
      this.pending.clear();
      for (let [t, { step: n }] of e) (this.cancel(t), this.apply(n));
    }
    apply(e) {
      this.stopped ||
        (e.reveal && this.deps.reveal(e.reveal),
        e.styleTweak && this.deps.styleTweak(e.styleTweak),
        e.completeNode && this.deps.completeNode(e.completeNode),
        e.riderStage && this.deps.riderStage(e.riderStage),
        e.frame && this.deps.deliver(e.frame),
        e.emit && this.deps.emit(e.emit));
    }
    stop() {
      this.stopped = !0;
      for (let e of this.pending.keys()) this.cancel(e);
      this.pending.clear();
    }
    reset() {
      this.stopped = !1;
    }
  },
  D = [`standin`, `static`, `animated`],
  O = {
    static: { type: `sandscape:reveal-rider` },
    animated: { type: `sandscape:animate-rider` },
  };
function k(e) {
  return typeof e == `string` && D.includes(e);
}
function A(e, t = typeof location > `u` ? `` : location.origin) {
  if (typeof e != `string` || !t) return !1;
  try {
    let n = new URL(e, t);
    return n.origin === t && n.pathname.startsWith(`/tour-packs/`);
  } catch {
    return !1;
  }
}
function j(e) {
  let t = /[?&]rider=([a-z]+)/.exec(e ?? ``);
  return t && k(t[1]) ? t[1] : `animated`;
}
function M(e, t) {
  let n = [];
  for (let r = D.indexOf(e) + 1; r <= D.indexOf(t); r++) n.push(O[D[r]]);
  return n;
}
var N = class {
    onSeen;
    stage;
    seen;
    observer = null;
    wired = new Map();
    constructor(e = `standin`, t = `standin`, n = () => void 0) {
      ((this.onSeen = n),
        (this.stage = e),
        (this.seen = D.indexOf(t) > D.indexOf(e) ? e : t));
    }
    current() {
      return this.stage;
    }
    bootQuery() {
      return `rider=${this.seen}`;
    }
    advance(e) {
      (D.indexOf(e) > D.indexOf(this.stage) && (this.stage = e), this.sync());
    }
    sync() {
      for (let e of this.gameFrames()) this.deliver(e);
      this.seen !== this.stage && this.watch();
    }
    dispose() {
      this.stopWatching();
      for (let [e, t] of this.wired) e.removeEventListener(`load`, t);
      this.wired.clear();
    }
    stopWatching() {
      (this.observer?.disconnect(), (this.observer = null));
    }
    gameFrames() {
      return typeof document > `u`
        ? []
        : Array.from(document.querySelectorAll(`iframe`)).filter((e) =>
            A(e.getAttribute(`src`)),
          );
    }
    deliver(e) {
      let t = () => {
        let t = e.getAttribute(`src`);
        if (A(t))
          for (let n of M(j(t), this.stage))
            e.contentWindow?.postMessage(n, location.origin);
      };
      (t(),
        this.wired.has(e) ||
          (this.wired.set(e, t), e.addEventListener(`load`, t)),
        this.seen !== this.stage &&
          ((this.seen = this.stage), this.onSeen(this.seen)));
    }
    watch() {
      this.observer ||
        typeof MutationObserver > `u` ||
        typeof document > `u` ||
        ((this.observer = new MutationObserver(() => {
          for (let e of this.gameFrames()) this.deliver(e);
          this.seen === this.stage && this.stopWatching();
        })),
        this.observer.observe(document.body, { childList: !0, subtree: !0 }));
    }
  },
  P = (e) => `sandscape.tour-runtime.${e}`;
function F(e) {
  try {
    let t = localStorage.getItem(P(e));
    if (!t) return {};
    let n = JSON.parse(t);
    if (!n || typeof n != `object`) return {};
    let r = n,
      i = {};
    return (
      typeof r.revealed == `boolean` && (i.revealed = r.revealed),
      typeof r.balance == `number` && (i.balance = r.balance),
      typeof r.styleTweaked == `boolean` && (i.styleTweaked = r.styleTweaked),
      Array.isArray(r.addedNodeIds) &&
        (i.addedNodeIds = r.addedNodeIds.filter((e) => typeof e == `string`)),
      Array.isArray(r.completedNodeIds) &&
        (i.completedNodeIds = r.completedNodeIds.filter(
          (e) => typeof e == `string`,
        )),
      k(r.riderStage) && (i.riderStage = r.riderStage),
      k(r.riderSeen) && (i.riderSeen = r.riderSeen),
      i
    );
  } catch {
    return {};
  }
}
function I(e, t) {
  try {
    let n = { ...F(e), ...t };
    localStorage.setItem(P(e), JSON.stringify(n));
  } catch {}
}
function re(e) {
  try {
    localStorage.removeItem(P(e));
  } catch {}
}
function ie(e) {
  if (typeof e == `string` && e.length > 0) return e;
  if (e && typeof e == `object`) {
    let t = e,
      n = t.nodeId ?? t.id;
    if (typeof n == `string` && n.length > 0) return n;
  }
  return null;
}
var L = new Map();
function R(e, t) {
  let n = L.get(e);
  if (n) return ((n.additions = t), n.unsub);
  let r = { additions: t, unsub: () => void 0 },
    i = d((t, n) => {
      if (t !== `tour:node-added` || !s()) return;
      let i = ie(n),
        a = r.additions;
      !i ||
        a.ids.includes(i) ||
        (a.ids.push(i), I(e, { addedNodeIds: [...a.ids] }));
    });
  return (
    (r.unsub = () => {
      (i(), L.get(e) === r && L.delete(e));
    }),
    L.set(e, r),
    r.unsub
  );
}
var z = class extends Error {
  service;
  method;
  constructor(e, t) {
    (super(
      `[tour] ${e}.${t}() is not part of the guided tour — it reaches the backend and must not run in tour mode.`,
    ),
      (this.service = e),
      (this.method = t),
      (this.name = `TourUnsupportedOperationError`));
  }
};
function B(e, t) {
  throw new z(e, t);
}
