// assets__TourWrapper-BBwg2sIi 02 — success
// Lines 343-707 of readable/assets__TourWrapper-BBwg2sIi.pretty.js (statement-aligned).
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
  K = class extends l {
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
    async quote(e) {
      let t = this.catalogFixture.actions?.find((t) => t.id === e),
        n = t?.price ?? 0;
      return {
        success: !0,
        action_id: e,
        item_counts: t?.per_item ? { asset: 1 } : {},
        item_prices: t?.item_prices ?? [],
        price: n,
        total: n,
        max_total: n,
      };
    }
    async invoke(e) {
      if (u()) return B(`ActionsService`, `invoke`);
      let t = w(this.manifest, e);
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
  q = class extends o {
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
