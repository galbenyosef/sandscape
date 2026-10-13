// assets__actionsCatalog-BOqBt5wy 01 — error
// Lines 1-316 of readable/assets__actionsCatalog-BOqBt5wy.pretty.js (statement-aligned).
import { n as e, t } from "./apiConfig-cGsbt6Be.js";
import { i as n, n as r } from "./serviceProxy-CZRpABZv.js";
var i = class {
    async listActions() {
      try {
        let n = await e(),
          r = await fetch(`${t.API_BASE_URL}/api/actions`, { headers: n });
        return r.ok
          ? await r.json()
          : { success: !1, detail: `Server error: ${r.status}` };
      } catch (e) {
        return (
          console.error(`[ActionsService] Error listing actions:`, e),
          {
            success: !1,
            detail: e instanceof Error ? e.message : `Failed to load actions`,
          }
        );
      }
    }
    async quote(n, r, i = {}) {
      try {
        let a = await e(),
          o = await fetch(`${t.API_BASE_URL}/api/actions/quote`, {
            method: `POST`,
            headers: a,
            body: JSON.stringify({ action_id: n, session_id: r, params: i }),
          });
        if (!o.ok) {
          let e = `Server error: ${o.status}`;
          try {
            let t = await o.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[ActionsService] quote ${n} failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await o.json();
      } catch (e) {
        return (
          console.error(`[ActionsService] Error quoting ${n}:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to quote action`,
          }
        );
      }
    }
    async invoke(n, r, i = {}) {
      try {
        let a = await e(),
          o = await fetch(`${t.API_BASE_URL}/api/actions/invoke`, {
            method: `POST`,
            headers: a,
            body: JSON.stringify({ action_id: n, session_id: r, params: i }),
          });
        if (!o.ok) {
          let e = `Server error: ${o.status}`;
          try {
            let t = await o.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[ActionsService] invoke ${n} failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await o.json();
      } catch (e) {
        let t = e instanceof TypeError;
        return (
          console.error(`[ActionsService] Error invoking ${n}:`, e),
          {
            success: !1,
            error: t
              ? `Network error: unable to start this action. Please check your connection.`
              : e instanceof Error
                ? e.message
                : `Failed to start action`,
          }
        );
      }
    }
    async cancel(e, t) {
      return this.control(`cancel`, e, t, {});
    }
    async steer(e, t, n) {
      return this.control(`steer`, e, n, { message: t });
    }
    async activity(n, r) {
      try {
        let i = await e(),
          a = new URLSearchParams({ session_id: n });
        r && a.set(`action_id`, r);
        let o = await fetch(
          `${t.API_BASE_URL}/api/actions/activity?${a.toString()}`,
          { headers: i },
        );
        return o.ok ? await o.json() : null;
      } catch (e) {
        return (
          console.error(
            `[ActionsService] Error fetching activity for ${n}:`,
            e,
          ),
          null
        );
      }
    }
    async control(n, r, i, a) {
      try {
        let o = await e(),
          s = await fetch(`${t.API_BASE_URL}/api/actions/${n}`, {
            method: `POST`,
            headers: o,
            body: JSON.stringify({
              session_id: r,
              ...(i ? { action_id: i } : {}),
              ...a,
            }),
          });
        if (!s.ok) {
          let e = `Server error: ${s.status}`;
          try {
            let t = await s.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[ActionsService] ${n} ${i} failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await s.json();
      } catch (e) {
        return (
          console.error(`[ActionsService] Error on ${n} ${i}:`, e),
          {
            success: !1,
            error: e instanceof Error ? e.message : `Failed to ${n} action`,
          }
        );
      }
    }
  },
  a = n(`actions`, new i()),
  o = Object.freeze({
    concept_art: { actionId: `concept_redraw`, assetParam: `target` },
    character_concept: {
      actionId: `character_concept_redraw`,
      assetParam: `target`,
    },
    character_creation: { actionId: `character_rigging`, assetParam: `target` },
    two_d: { actionId: `2d_redraw`, assetParam: `target` },
    character_sheet_2d: { actionId: `character_sheet`, assetParam: `target` },
    animation_sheet_2d: { actionId: `animation_sheet`, assetParam: `target` },
    model_3d: { actionId: `3d_assets`, assetParam: `target` },
    sfx: { actionId: `sfx_generation`, assetParam: `target` },
    music: { actionId: `music_generation`, assetParam: `target` },
    collision: { actionId: `physics_friendly_shapes`, assetParam: `target` },
    lod: { actionId: `lod_generation`, assetParam: `target` },
    segment: { actionId: `partsam_segment`, assetParam: `target` },
    environment_map: { actionId: `environment_map`, assetParam: `target` },
    splat_from_pano: { actionId: `pano_to_splat`, assetParam: `source_asset` },
  });
function s(e) {
  return e === `sfx_audio` ? `sfx` : `music`;
}
function c() {
  return {
    byId: new Map(),
    byNode: new Map(),
    loadPromise: null,
    loaded: !1,
    loadedAt: 0,
    lastFailureAt: 0,
  };
}
var l = c(),
  u = c();
function d() {
  return r() ? u : l;
}
var f = 0,
  p = 0,
  m = new Set();
function h(e) {
  return (
    m.add(e),
    () => {
      m.delete(e);
    }
  );
}
var g = () => p,
  _ = () => f;
function v() {
  ((p += 1), m.forEach((e) => e()));
}
var y = 5e3,
  b = 6e4;
function x(e, t) {
  ((e.byId = new Map(t.map((e) => [e.id, e]))), (e.byNode = new Map()));
  for (let n of t) n.node && !e.byNode.has(n.node) && e.byNode.set(n.node, n);
}
function S() {
  let e = d();
  if (e.loadPromise) return e.loadPromise;
  if (e.loaded && Date.now() - e.loadedAt <= 6e4) return Promise.resolve(!0);
  if (Date.now() - e.lastFailureAt < y) return Promise.resolve(!1);
  let t = f,
    n = (async () => {
      try {
        let n = await a.listActions();
        return t === f
          ? !n.success || !n.actions
            ? (console.error(`[actionsCatalog] discovery failed:`, n.detail),
              !1)
            : (x(e, n.actions),
              (e.loaded = !0),
              (e.loadedAt = Date.now()),
              O(e),
              v(),
              !0)
          : !1;
      } catch (e) {
        return (console.error(`[actionsCatalog] discovery threw:`, e), !1);
      }
    })().then((n) =>
      t === f
        ? ((e.loadPromise = null),
          n
            ? (e.lastFailureAt = 0)
            : ((e.lastFailureAt = Date.now()),
              e.byId.clear(),
              e.byNode.clear(),
              (e.loaded = !1),
              v()),
          n)
        : !1,
    );
  return ((e.loadPromise = n), n);
}
function C() {
  return d().loaded;
}
function w() {
  ((f += 1), Object.assign(l, c()), Object.assign(u, c()), v());
}
function T(e) {
  return d().byId.get(e) ?? null;
}
function E(e) {
  return d().byNode.get(e) ?? null;
}
function D(e) {
  return E(e)?.mode === `coding`;
}
function O(e) {
  for (let [t, n] of Object.entries(o)) {
    let r = e.byId.get(n.actionId);
    if (!r) {
      console.error(
        `[actionsCatalog] asset op '${t}' maps to action '${n.actionId}', which the server does not publish.`,
      );
      continue;
    }
    let i = r.params_schema?.properties ?? {};
    n.assetParam in i ||
      console.error(
        `[actionsCatalog] asset op '${t}' names its asset with '${n.assetParam}', which '${n.actionId}' does not declare (declares: ${Object.keys(i).join(`, `) || `nothing`}).`,
      );
  }
}
function k(e, t) {
  let n = d().byId.get(e);
  if (!n) return [];
  let r = new Set(Object.keys(n.params_schema?.properties ?? {})),
    i = Object.keys(t).filter((e) => !r.has(e));
  return (
    i.length > 0 &&
      console.error(
        `[actionsCatalog] '${e}' does not declare ${i.join(`, `)} — the invoke door will reject this call with ACTION_PARAMS_INVALID. Declared: ${[...r].join(`, `) || `nothing`}.`,
      ),
    i
  );
}
function A(e, t, n = {}) {
  return { [o[e].assetParam]: t, ...n };
}
async function j(e, t, n, r = {}) {
  if (!(await S()))
    return {
      success: !1,
      error: `Action catalog unavailable — cannot start generation.`,
    };
  let i = o[n],
    s = A(n, t, r);
  return (k(i.actionId, s), a.invoke(i.actionId, e, s));
}
function M(e) {
  let t = o[e];
  return t ? (T(t.actionId)?.node ?? null) : null;
}
function N(e, t, n) {
  let r = { ...(n ?? {}) },
    i = (t ?? ``).trim();
  if (i) {
    let t = new Set(Object.keys(T(e)?.params_schema?.properties ?? {}));
    t.has(`user_prompt`) && r.user_prompt === void 0
      ? (r.user_prompt = i)
      : t.has(`feedback`) && r.feedback === void 0 && (r.feedback = i);
  }
  return (k(e, r), r);
}
