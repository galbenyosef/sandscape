import { n as e, t } from "./apiConfig-BixZVfgD.js";
import { i as n } from "./serviceProxy-C8F2GeHO.js";
var r = {
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
function i(e) {
  return r[e]?.hex || `#6b7280`;
}
function a(e) {
  return r[e]?.label || e;
}
var o = 3e3,
  s = class {
    balanceCache = null;
    balanceInFlight = null;
    balanceGeneration = 0;
    invalidateBalance() {
      ((this.balanceCache = null),
        (this.balanceInFlight = null),
        (this.balanceGeneration += 1));
    }
    async getBalance() {
      let e = this.balanceCache;
      if (e && Date.now() - e.at < o) return e.value;
      if (this.balanceInFlight) return this.balanceInFlight;
      let t = this.balanceGeneration,
        n = this.fetchBalance().then((e) =>
          t === this.balanceGeneration
            ? (e.success && (this.balanceCache = { at: Date.now(), value: e }),
              (this.balanceInFlight = null),
              e)
            : e,
        );
      return ((this.balanceInFlight = n), n);
    }
    async fetchBalance() {
      try {
        let n = await e(),
          r = await fetch(`${t.API_BASE_URL}/api/coins/balance`, {
            method: `GET`,
            headers: n,
          });
        if (!r.ok) throw Error(`HTTP error! status: ${r.status}`);
        return await r.json();
      } catch (e) {
        return (
          console.error(`Error getting coin balance:`, e),
          {
            success: !1,
            balance: 0,
            lifetime_earned: 0,
            lifetime_spent: 0,
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async getActionPrices() {
      try {
        let n = await e(),
          r = await fetch(`${t.API_BASE_URL}/api/coins/action-prices`, {
            method: `GET`,
            headers: n,
          });
        if (!r.ok) throw Error(`HTTP error! status: ${r.status}`);
        return await r.json();
      } catch (e) {
        return (
          console.error(`Error getting action prices:`, e),
          {
            success: !1,
            prices: [],
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async getTransactions(n = 20, r = 0, i) {
      try {
        let a = await e(),
          o = new URLSearchParams({
            limit: n.toString(),
            offset: r.toString(),
          });
        i && o.append(`session_id`, i);
        let s = await fetch(`${t.API_BASE_URL}/api/coins/transactions?${o}`, {
          method: `GET`,
          headers: a,
        });
        if (!s.ok) throw Error(`HTTP error! status: ${s.status}`);
        return await s.json();
      } catch (e) {
        return (
          console.error(`Error getting transactions:`, e),
          {
            success: !1,
            transactions: [],
            limit: n,
            offset: r,
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async getBudget(n) {
      try {
        let r = await e(),
          i = new URLSearchParams();
        n && i.append(`session_id`, n);
        let a = n
            ? `${t.API_BASE_URL}/api/coins/budget?${i}`
            : `${t.API_BASE_URL}/api/coins/budget`,
          o = await fetch(a, { method: `GET`, headers: r });
        if (!o.ok) throw Error(`HTTP error! status: ${o.status}`);
        return await o.json();
      } catch (e) {
        return (
          console.error(`Error getting budget:`, e),
          {
            success: !1,
            balance: 0,
            lifetime_earned: 0,
            lifetime_spent: 0,
            breakdown: [],
            recent_transactions: [],
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    async initializeWallet(n = 0) {
      try {
        let r = await e(),
          i = new URLSearchParams({ initial_balance: n.toString() }),
          a = await fetch(`${t.API_BASE_URL}/api/coins/initialize?${i}`, {
            method: `POST`,
            headers: r,
          });
        if (!a.ok) throw Error(`HTTP error! status: ${a.status}`);
        return await a.json();
      } catch (e) {
        return (
          console.error(`Error initializing wallet:`, e),
          {
            success: !1,
            user_id: ``,
            balance: 0,
            lifetime_earned: 0,
            lifetime_spent: 0,
            created: !1,
            error: e instanceof Error ? e.message : `Unknown error`,
          }
        );
      }
    }
    formatCoins(e) {
      return e.toLocaleString();
    }
    getCategoryLabel(e) {
      return a(e);
    }
    getCategoryColor(e) {
      return i(e);
    }
  },
  c = n(`coins`, new s());
export { c as n, r, s as t };
