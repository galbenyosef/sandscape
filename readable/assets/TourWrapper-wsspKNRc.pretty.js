import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { c as r, l as i } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as a } from "./useToast-QK0Q4gGT.js";
import { n as o, r as s } from "./serviceProxy-C8F2GeHO.js";
import { _ as c } from "./actionsCatalog-C1XLQOCX.js";
import { t as l } from "./coinService-CUupqiCF.js";
import { a as u, i as d, l as f, r as p, t as m } from "./tour-D03BMTEP.js";
import {
  E as h,
  S as g,
  b as _,
  k as v,
  w as y,
} from "./gameCreation-B6oXUVk-.js";
import { K as b, u as x } from "./index-CBcimEr9.js";
import { Create as S, t as C } from "./Create-CEn7EAZs.js";
var w = e(t()),
  ee = {
    sceneName: `level`,
    displayName: `Level`,
    file: `game/scenes/level.json`,
  };
function T(e, t) {
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
  E = {
    add_lilac: { name: `Lilac haze`, hex: `#d2a5ff`, usage: `horizon bloom` },
  },
  ne = class {
    guide;
    constructor(e) {
      this.guide =
        e && typeof e == `object` && !Array.isArray(e) ? { ...e } : void 0;
    }
    applyTweak(e) {
      let t = E[e];
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
  D = class {
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
  O = [`standin`, `static`, `animated`],
  k = {
    static: { type: `sandscape:reveal-rider` },
    animated: { type: `sandscape:animate-rider` },
  };
function A(e) {
  return typeof e == `string` && O.includes(e);
}
function j(e, t = typeof location > `u` ? `` : location.origin) {
  if (typeof e != `string` || !t) return !1;
  try {
    let n = new URL(e, t);
    return n.origin === t && n.pathname.startsWith(`/tour-packs/`);
  } catch {
    return !1;
  }
}
function M(e) {
  let t = /[?&]rider=([a-z]+)/.exec(e ?? ``);
  return t && A(t[1]) ? t[1] : `animated`;
}
function N(e, t) {
  let n = [];
  for (let r = O.indexOf(e) + 1; r <= O.indexOf(t); r++) n.push(k[O[r]]);
  return n;
}
var re = class {
    onSeen;
    stage;
    seen;
    observer = null;
    wired = new Map();
    constructor(e = `standin`, t = `standin`, n = () => void 0) {
      ((this.onSeen = n),
        (this.stage = e),
        (this.seen = O.indexOf(t) > O.indexOf(e) ? e : t));
    }
    current() {
      return this.stage;
    }
    bootQuery() {
      return `rider=${this.seen}`;
    }
    advance(e) {
      (O.indexOf(e) > O.indexOf(this.stage) && (this.stage = e), this.sync());
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
            j(e.getAttribute(`src`)),
          );
    }
    deliver(e) {
      let t = () => {
        let t = e.getAttribute(`src`);
        if (j(t))
          for (let n of N(M(t), this.stage))
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
      A(r.riderStage) && (i.riderStage = r.riderStage),
      A(r.riderSeen) && (i.riderSeen = r.riderSeen),
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
function ie(e) {
  try {
    localStorage.removeItem(P(e));
  } catch {}
}
function ae(e) {
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
      if (t !== `tour:node-added` || !o()) return;
      let i = ae(n),
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
var V = class extends v {
    sessionFixture;
    chatFixture;
    static TOUR_SAFE_INHERITED = new Set([
      `startHeartbeat`,
      `stopHeartbeat`,
      `attemptReconnect`,
      `handleErrorMessage`,
    ]);
    tourCallback = null;
    player = null;
    timeline = null;
    chatSequence = null;
    unsubscribeSkip = null;
    constructor(e, t) {
      (super(), (this.sessionFixture = e), (this.chatFixture = t));
    }
    attachPlayer(e, t, n) {
      ((this.player = e),
        (this.timeline = t && t.length > 0 ? t : null),
        (this.chatSequence = n ?? null));
    }
    deliver(e) {
      (this.handleErrorMessage(e), this.tourCallback?.(e));
    }
    async createSession() {
      return this.sessionFixture;
    }
    async connectWebSocket(e, t) {
      ((this.tourCallback = t),
        this.player?.reset(),
        this.unsubscribeSkip?.(),
        (this.unsubscribeSkip = d((e) => {
          e === `tour:wait-skipped` && this.player?.flush();
        })),
        this.deliver({ type: `connection_test`, data: { message: `tour` } }),
        this.timeline &&
          this.player &&
          this.player.run({ steps: this.timeline }));
    }
    async getChatHistory() {
      return this.chatFixture;
    }
    async sendMessage() {
      return u()
        ? B(`ChatService`, `sendMessage`)
        : (this.chatSequence &&
            this.player &&
            this.player.run(this.chatSequence),
          p(`tour:chat-sent`),
          { success: !0, method: `tour` });
    }
    async waitForConnection() {}
    disconnectWebSocket() {
      (this.unsubscribeSkip?.(),
        (this.unsubscribeSkip = null),
        this.player?.stop(),
        (this.tourCallback = null));
    }
  },
  H = class extends h {
    store;
    base;
    static TOUR_SAFE_INHERITED = new Set();
    constructor(e, t) {
      (super(), (this.store = e), (this.base = t));
    }
    async getAssets(e) {
      return { success: !0, assets: this.store.getAssets(), session_dir: e };
    }
    getAssetUrl(e, t) {
      let n = String(t)
          .replace(/^.*generated_assets\//, ``)
          .replace(/^\/+/, ``)
          .split(`?`)[0],
        r = n.includes(`/`) ? n : (this.store.pathForFileName(n) ?? n);
      return `${this.base}/game/${r}`;
    }
    async listAssets() {
      return { success: !0, assets: [] };
    }
    async getScaleValues(e) {
      return { success: !0, session_id: e, scales: {} };
    }
    async fetchVisualReference() {
      return null;
    }
    getAssetById() {
      return B(`AssetService`, `getAssetById`);
    }
    addAsset() {
      return B(`AssetService`, `addAsset`);
    }
    updateAsset() {
      return B(`AssetService`, `updateAsset`);
    }
    deleteAsset() {
      return B(`AssetService`, `deleteAsset`);
    }
    putSheetPlayback() {
      return B(`AssetService`, `putSheetPlayback`);
    }
    putSheetAlignment() {
      return B(`AssetService`, `putSheetAlignment`);
    }
    aiModifyAsset() {
      return B(`AssetService`, `aiModifyAsset`);
    }
    refinePrompt() {
      return B(`AssetService`, `refinePrompt`);
    }
    uploadConceptArt() {
      return B(`AssetService`, `uploadConceptArt`);
    }
    upload3DModel() {
      return B(`AssetService`, `upload3DModel`);
    }
    saveSegmentedModel() {
      return B(`AssetService`, `saveSegmentedModel`);
    }
    transformAsset() {
      return B(`AssetService`, `transformAsset`);
    }
    scaleAsset() {
      return B(`AssetService`, `scaleAsset`);
    }
    async saveAssetThumbnail() {
      return {
        success: !1,
        error: `The tour keeps thumbnails in memory only.`,
      };
    }
  },
  U = class extends y {
    descriptor;
    document;
    sessionId;
    base;
    static TOUR_SAFE_INHERITED = new Set();
    constructor(e, t, n, r) {
      (super(),
        (this.descriptor = e),
        (this.document = t),
        (this.sessionId = n),
        (this.base = r));
    }
    info() {
      let e = `${this.base}/${this.descriptor.file}`;
      return {
        scene_name: this.descriptor.sceneName,
        name: this.descriptor.displayName,
        path: e,
        relative_path: this.descriptor.file,
        size: this.document ? JSON.stringify(this.document).length : 0,
        modified: 1,
        location: `registry`,
        session: this.sessionId,
        asset_id: this.descriptor.sceneName,
      };
    }
    async getScenes() {
      return { success: !0, scenes: this.document ? [this.info()] : [] };
    }
    async loadScene(e, t, n) {
      if (!this.document)
        return { success: !1, error: `This tour pack ships no sandbox scene.` };
      let r = n ?? t;
      return r !== this.descriptor.sceneName &&
        r !== this.descriptor.displayName
        ? { success: !1, error: `The tour has no scene named “${r}”.` }
        : { success: !0, scene_data: this.document };
    }
    async saveScene() {
      return { success: !0 };
    }
    async getSceneHistory() {
      return { success: !0, revisions: [] };
    }
    async restoreScene() {
      return {
        success: !1,
        error: `The tour scene has no history to restore.`,
      };
    }
    async deleteScene() {
      return { success: !1, error: `The tour scene cannot be deleted.` };
    }
    async renameScene() {
      return { success: !1, error: `The tour scene cannot be renamed.` };
    }
  },
  W = class extends g {
    base;
    indexModified;
    riderStage;
    options;
    static TOUR_SAFE_INHERITED = new Set([`refreshGame`]);
    constructor(e, t, n, r = {}) {
      (super(),
        (this.base = e),
        (this.indexModified = t),
        (this.riderStage = n),
        (this.options = r));
    }
    async getGameFiles() {
      let e = [
        this.options.riderStages ? this.riderStage.bootQuery() : null,
        this.options.attract ? `attract=1` : null,
      ].filter(Boolean);
      return {
        success: !0,
        game_url: `${this.base}/game/index.html${e.length ? `?${e.join(`&`)}` : ``}`,
        index_modified: this.indexModified,
      };
    }
  },
  G = class extends _ {
    store;
    styleStore;
    contextFixture;
    inflightFixture;
    additions;
    completions;
    static TOUR_SAFE_INHERITED = new Set();
    constructor(e, t, n, r, i, a) {
      (super(),
        (this.store = e),
        (this.styleStore = t),
        (this.contextFixture = n),
        (this.inflightFixture = r),
        (this.additions = i),
        (this.completions = a));
    }
    async getSessionContext() {
      let e = this.contextFixture.context ?? {},
        t = this.styleStore.get();
      return {
        ...this.contextFixture,
        context: {
          ...e,
          assets: this.store.getContextAssets(),
          ...(t ? { style_guide: t } : {}),
        },
      };
    }
    async getSessionInflight() {
      let e = this.inflightFixture ?? {},
        t = Array.isArray(e.unlockedNodes) ? e.unlockedNodes : [],
        n = Array.isArray(e.completedNodes) ? e.completedNodes : [];
      return {
        ok: !0,
        running: Array.isArray(e.running) ? e.running : [],
        completedNodes: [
          ...n,
          ...this.completions.ids.filter((e) => !n.includes(e)),
        ],
        unlockedNodes: [
          ...t,
          ...this.additions.ids.filter((e) => !t.includes(e)),
        ],
        interrupted: Array.isArray(e.interrupted) ? e.interrupted : [],
      };
    }
    async getCompletedWorkflows() {
      let e = this.inflightFixture ?? {};
      return {
        success: !0,
        completedWorkflows: Array.isArray(e.completedWorkflows)
          ? e.completedWorkflows
          : [],
        dirtyWorkflows: Array.isArray(e.dirtyWorkflows) ? e.dirtyWorkflows : [],
      };
    }
    async unlockNode(e, t) {
      return { success: !0 };
    }
    triggerInitialization() {
      return B(`WorkflowService`, `triggerInitialization`);
    }
    getInitializationStatus() {
      return B(`WorkflowService`, `getInitializationStatus`);
    }
  },
  K = class extends c {
    catalogFixture;
    manifest;
    player;
    static TOUR_SAFE_INHERITED = new Set([`control`]);
    constructor(e, t, n) {
      (super(),
        (this.catalogFixture = e),
        (this.manifest = t),
        (this.player = n));
    }
    async listActions() {
      return this.catalogFixture;
    }
    async quote(e, t, n = {}) {
      let r = this.catalogFixture.actions?.find((t) => t.id === e),
        i = r?.price ?? 0;
      return {
        success: !0,
        action_id: e,
        item_counts: r?.per_item ? { asset: 1 } : {},
        item_prices: r?.item_prices ?? [],
        price: i,
        total: i,
        max_total: i,
        ...(C.has(e)
          ? {
              asset_budget_coins: 0,
              visual_revision_id: `tour-visual-direction`,
              visual_mode: `reuse`,
            }
          : {}),
      };
    }
    async invoke(e) {
      if (u()) return B(`ActionsService`, `invoke`);
      let t = T(this.manifest, e);
      return (
        t && this.player.run(t),
        { success: !0, task_id: `tour-${e}`, status: `running` }
      );
    }
    async cancel(e, t) {
      return { success: !0 };
    }
    async steer(e, t, n) {
      return { success: !0 };
    }
    async activity(e, t) {
      return null;
    }
  },
  q = class extends l {
    coinsFixture;
    balance;
    static TOUR_SAFE_INHERITED = new Set([
      `invalidateBalance`,
      `formatCoins`,
      `getCategoryLabel`,
      `getCategoryColor`,
      `fetchBalance`,
    ]);
    constructor(e, t) {
      (super(), (this.coinsFixture = e), (this.balance = t));
    }
    async getBalance() {
      let e = this.coinsFixture ?? {},
        t = typeof e.lifetime_spent == `number` ? e.lifetime_spent : 0,
        n = typeof e.balance == `number` ? e.balance : 500;
      return {
        success: !0,
        balance: this.balance.current,
        lifetime_earned:
          typeof e.lifetime_earned == `number` ? e.lifetime_earned : 0,
        lifetime_spent: t + Math.max(0, n - this.balance.current),
      };
    }
    async getActionPrices() {
      let e = this.coinsFixture ?? {};
      return { success: !0, prices: Array.isArray(e.prices) ? e.prices : [] };
    }
    getTransactions() {
      return B(`CoinService`, `getTransactions`);
    }
    getBudget() {
      return B(`CoinService`, `getBudget`);
    }
    initializeWallet() {
      return B(`CoinService`, `initializeWallet`);
    }
  },
  J = new Map();
async function Y(e) {
  let t = await fetch(e);
  if (!t.ok) throw Error(`Tour fixture ${e} → HTTP ${t.status}`);
  return await t.json();
}
async function oe(e) {
  try {
    let t = await fetch(e);
    if (!t.ok) return null;
    let n = await t.json();
    return n && typeof n == `object` ? n : null;
  } catch {
    return null;
  }
}
function se(e) {
  let t = [];
  for (let n of Object.values(e.frames ?? {}))
    for (let e of n?.steps ?? [])
      e.styleTweak && !t.includes(e.styleTweak) && t.push(e.styleTweak);
  return t;
}
function ce(e, t) {
  if (e.type !== `balance_update`) return;
  let n = e.data;
  n && typeof n.balance == `number` && (t.current = n.balance);
}
function le(e) {
  let t = J.get(e);
  if (t) return t.then((e) => (e.rearm(), e));
  let n = de(e).catch((t) => {
    throw (J.delete(e), t);
  });
  return (J.set(e, n), n);
}
function ue(e) {
  J.delete(e);
}
async function de(e) {
  let t = `/tour-packs/${e}`,
    n = { ...(await Y(`${t}/pack.json`)), base: t },
    r = n.sandboxScene ?? ee,
    [i, a, o, s, c, l, u, d, f] = await Promise.all([
      Y(`${t}/fixture/session.json`),
      Y(`${t}/fixture/context.json`),
      Y(`${t}/fixture/assets.json`),
      Y(`${t}/fixture/chat.json`),
      Y(`${t}/fixture/actions.json`),
      Y(`${t}/fixture/inflight.json`),
      Y(`${t}/fixture/coins.json`),
      Y(`${t}/fixture/game.json`),
      oe(`${t}/${r.file}`),
    ]),
    m = F(e),
    h = a.context?.assets ?? [],
    g = new te(o.assets ?? [], h, n.pendingAsset);
  m.revealed && g.reveal(n.pendingAsset.assetId);
  let _ = new ne(a.context?.style_guide);
  if (m.styleTweaked) for (let e of se(n)) _.applyTweak(e);
  let v = { ids: [...(m.addedNodeIds ?? [])] };
  R(e, v);
  let y = { ids: [...(m.completedNodeIds ?? [])] },
    b = new re(m.riderStage, m.riderSeen, (t) => I(e, { riderSeen: t })),
    x = {
      current:
        typeof m.balance == `number`
          ? m.balance
          : typeof u.balance == `number`
            ? u.balance
            : 500,
    },
    S = new V(i, s),
    C = new D({
      deliver: (t) => {
        (ce(t, x),
          t.type === `balance_update` && I(e, { balance: x.current }),
          S.deliver(t));
      },
      reveal: (t) => {
        (g.reveal(t), I(e, { revealed: !0 }));
      },
      styleTweak: (t) => {
        (_.applyTweak(t), I(e, { styleTweaked: !0 }));
      },
      emit: (e) => p(e),
      completeNode: (t) => {
        y.ids.includes(t) ||
          (y.ids.push(t), I(e, { completedNodeIds: [...y.ids] }));
      },
      riderStage: (t) => {
        (I(e, { riderStage: t }), b.advance(t));
      },
    }),
    w = n.chatSequence ? n.frames?.[n.chatSequence] : void 0;
  S.attachPlayer(C, n.timeline, w);
  let T = i.session_id,
    E = {
      chat: S,
      assets: new H(g, t),
      scene: new U(r, f, T, t),
      game: new W(t, d.index_modified ?? 1, b, n.game),
      workflow: new G(g, _, a, l, v, y),
      actions: new K(c, n, C),
      coins: new q(u, x),
    },
    O = () => {
      (b.dispose(), C.stop());
    },
    k = () => b.sync();
  return (k(), { manifest: n, runtime: E, dispose: O, rearm: k });
}
var X = { "run-finished": `tour:game-run-finished` };
function fe(e, t) {
  let n = e;
  if (!n || n.type !== `sandscape:game-event`) return;
  let r = typeof n.event == `string` ? X[n.event] : void 0;
  r && t(r);
}
function pe() {
  if (typeof window > `u`) return () => {};
  let e = (e) => fe(e?.data, p);
  return (
    window.addEventListener(`message`, e),
    () => window.removeEventListener(`message`, e)
  );
}
var Z = n(),
  me = `royaume-des-pepins`;
function Q({ children: e }) {
  return (0, Z.jsx)(`div`, {
    className: `flex h-[calc(100dvh-64px)] items-center justify-center bg-background text-muted-foreground`,
    children: (0, Z.jsx)(`p`, { className: `text-sm`, children: e }),
  });
}
function he() {
  return (0, Z.jsxs)(`div`, {
    className: `flex h-[100dvh] flex-col items-center justify-center gap-4 bg-background px-6 text-center`,
    children: [
      (0, Z.jsx)(`p`, {
        className: `max-w-xs text-sm text-muted-foreground`,
        children: `The guided tour needs a wider screen. Open it on a laptop or desktop.`,
      }),
      (0, Z.jsx)(`a`, {
        href: `/`,
        className: `text-sm font-medium text-primary hover:underline`,
        children: `Back to home`,
      }),
    ],
  });
}
var $ = `(min-width: 1024px)`;
function ge({ ctx: e, packSlug: t }) {
  let { isAuthenticated: n } = b(),
    i = r(),
    a = `/tour/claim?pack=${encodeURIComponent(t)}`,
    o = n ? e.step.cta?.authedLabel : e.step.cta?.anonLabel;
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(`button`, {
        type: `button`,
        onClick: () => e.complete(),
        className: `text-xs text-muted-foreground transition-colors hover:text-foreground`,
        children: `Look around first`,
      }),
      (0, Z.jsx)(`button`, {
        type: `button`,
        onClick: () => {
          (e.complete(), i(n ? a : x(a, `guided_tour`)));
        },
        className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`,
        children: o,
      }),
    ],
  });
}
function _e({ packSlug: e }) {
  let { isAuthenticated: t } = b(),
    n = r(),
    i = `/tour/claim?pack=${encodeURIComponent(e)}`;
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col gap-2.5`,
    children: [
      (0, Z.jsxs)(`p`, {
        className: `text-xs leading-snug text-muted-foreground`,
        children: [
          (0, Z.jsx)(`span`, {
            className: `font-medium text-foreground`,
            children: `You're exploring a replay.`,
          }),
          ` Open anything. Chat and generation need your own copy.`,
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-end gap-3`,
        children: [
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: () => window.location.reload(),
            className: `text-xs text-muted-foreground transition-colors hover:text-foreground`,
            children: `Replay the tour`,
          }),
          (0, Z.jsx)(`button`, {
            type: `button`,
            onClick: () => n(t ? i : x(i, `guided_tour`)),
            className: `rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`,
            children: t ? `Open your game` : `Keep this game`,
          }),
        ],
      }),
    ],
  });
}
function ve() {
  let { toast: e } = a(),
    { slug: t } = i(),
    n = t || me,
    [r, o] = (0, w.useState)(null),
    [c, l] = (0, w.useState)(null),
    [u, d] = (0, w.useState)(
      () => typeof window > `u` || window.matchMedia($).matches,
    );
  return (
    (0, w.useEffect)(() => {
      if (typeof window > `u`) return;
      let e = window.matchMedia($),
        t = () => d(e.matches);
      return (
        e.addEventListener(`change`, t),
        () => e.removeEventListener(`change`, t)
      );
    }, []),
    (0, w.useEffect)(() => {
      let e = !1;
      return (
        o(null),
        l(null),
        f(n) && (ie(n), ue(n)),
        le(n)
          .then((t) => {
            e ||
              ((s.current = t.runtime),
              typeof window < `u` &&
                window.dispatchEvent(new CustomEvent(`coin-balance-refresh`)),
              o(t));
          })
          .catch((t) => {
            e ||
              (console.error(`[tour] failed to load pack`, n, t),
              l(t instanceof Error ? t.message : `Failed to load the tour.`));
          }),
        () => {
          e = !0;
        }
      );
    }, [n]),
    (0, w.useEffect)(() => {
      if (typeof window > `u`) return;
      let t = (t) =>
          t instanceof z
            ? (e({
                title: `Not available in the tour`,
                description: `This is a replay of the game. Keep it to do this for real.`,
              }),
              !0)
            : !1,
        n = (e) => {
          t(e.error) && e.preventDefault();
        },
        r = (e) => {
          t(e.reason) && e.preventDefault();
        };
      return (
        window.addEventListener(`error`, n),
        window.addEventListener(`unhandledrejection`, r),
        () => {
          (window.removeEventListener(`error`, n),
            window.removeEventListener(`unhandledrejection`, r));
        }
      );
    }, [e]),
    (0, w.useEffect)(() => pe(), []),
    (0, w.useEffect)(() => {
      if (r)
        return () => {
          (r.dispose(),
            typeof window < `u` &&
              window.dispatchEvent(new CustomEvent(`coin-balance-refresh`)));
        };
    }, [r]),
    u
      ? c
        ? (0, Z.jsxs)(Q, { children: [`Could not start the tour: `, c] })
        : r
          ? (0, Z.jsx)(m, {
              pack: r.manifest,
              renderCta: (e) => (0, Z.jsx)(ge, { ctx: e, packSlug: n }),
              renderEnded: () => (0, Z.jsx)(_e, { packSlug: n }),
              children: (0, Z.jsx)(S, {}),
            })
          : (0, Z.jsx)(Q, { children: `Loading the tour…` })
      : (0, Z.jsx)(he, {})
  );
}
export { ve as Tour };
