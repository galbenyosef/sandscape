import { n as e, t } from "./apiConfig-BixZVfgD.js";
import { i as n, n as r } from "./serviceProxy-C8F2GeHO.js";
function i(e, t, n, r) {
  let i = { action_id: e, session_id: t, params: n };
  return (
    r && Object.keys(r).length > 0 && n.resume !== !0 && (i.coding_models = r),
    i
  );
}
var a = class {
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
    async quote(n, r, a = {}, o) {
      try {
        let s = await e(),
          c = await fetch(`${t.API_BASE_URL}/api/actions/quote`, {
            method: `POST`,
            headers: s,
            body: JSON.stringify(i(n, r, a, o)),
          });
        if (!c.ok) {
          let e = `Server error: ${c.status}`;
          try {
            let t = await c.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[ActionsService] quote ${n} failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await c.json();
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
    async invoke(n, r, a = {}, o) {
      try {
        let s = await e(),
          c = await fetch(`${t.API_BASE_URL}/api/actions/invoke`, {
            method: `POST`,
            headers: s,
            body: JSON.stringify(i(n, r, a, o)),
          });
        if (!c.ok) {
          let e = `Server error: ${c.status}`;
          try {
            let t = await c.json();
            t?.detail && (e = String(t.detail));
          } catch {}
          return (
            console.error(`[ActionsService] invoke ${n} failed: ${e}`),
            { success: !1, error: e }
          );
        }
        return await c.json();
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
  o = n(`actions`, new a()),
  s = Object.freeze({
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
function c(e) {
  return e === `sfx_audio` ? `sfx` : `music`;
}
function l() {
  return {
    byId: new Map(),
    byNode: new Map(),
    loadPromise: null,
    loaded: !1,
    loadedAt: 0,
    lastFailureAt: 0,
  };
}
var u = l(),
  d = l();
function f() {
  return r() ? d : u;
}
var p = 0,
  m = 0,
  h = new Set();
function g(e) {
  return (
    h.add(e),
    () => {
      h.delete(e);
    }
  );
}
var _ = () => m,
  v = () => p;
function y() {
  ((m += 1), h.forEach((e) => e()));
}
var b = 5e3,
  x = 6e4;
function S(e, t) {
  ((e.byId = new Map(t.map((e) => [e.id, e]))), (e.byNode = new Map()));
  for (let n of t) n.node && !e.byNode.has(n.node) && e.byNode.set(n.node, n);
}
function C() {
  let e = f();
  if (e.loadPromise) return e.loadPromise;
  if (e.loaded && Date.now() - e.loadedAt <= 6e4) return Promise.resolve(!0);
  if (Date.now() - e.lastFailureAt < b) return Promise.resolve(!1);
  let t = p,
    n = (async () => {
      try {
        let n = await o.listActions();
        return t === p
          ? !n.success || !n.actions
            ? (console.error(`[actionsCatalog] discovery failed:`, n.detail),
              !1)
            : (S(e, n.actions),
              (e.loaded = !0),
              (e.loadedAt = Date.now()),
              k(e),
              y(),
              !0)
          : !1;
      } catch (e) {
        return (console.error(`[actionsCatalog] discovery threw:`, e), !1);
      }
    })().then((n) =>
      t === p
        ? ((e.loadPromise = null),
          n
            ? (e.lastFailureAt = 0)
            : ((e.lastFailureAt = Date.now()),
              e.byId.clear(),
              e.byNode.clear(),
              (e.loaded = !1),
              y()),
          n)
        : !1,
    );
  return ((e.loadPromise = n), n);
}
function w() {
  return f().loaded;
}
function T() {
  ((p += 1), Object.assign(u, l()), Object.assign(d, l()), y());
}
function E(e) {
  return f().byId.get(e) ?? null;
}
function D(e) {
  return f().byNode.get(e) ?? null;
}
function O(e) {
  return D(e)?.mode === `coding`;
}
function k(e) {
  for (let [t, n] of Object.entries(s)) {
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
function A(e, t) {
  let n = f().byId.get(e);
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
function j(e, t, n = {}) {
  return { [s[e].assetParam]: t, ...n };
}
async function M(e, t, n, r = {}) {
  if (!(await C()))
    return {
      success: !1,
      error: `Action catalog unavailable — cannot start generation.`,
    };
  let i = s[n],
    a = j(n, t, r);
  return (A(i.actionId, a), o.invoke(i.actionId, e, a));
}
function N(e) {
  let t = s[e];
  return t ? (E(t.actionId)?.node ?? null) : null;
}
function P(e, t, n) {
  let r = { ...(n ?? {}) },
    i = (t ?? ``).trim();
  if (i) {
    let t = new Set(Object.keys(E(e)?.params_schema?.properties ?? {}));
    t.has(`user_prompt`) && r.user_prompt === void 0
      ? (r.user_prompt = i)
      : t.has(`feedback`) && r.feedback === void 0 && (r.feedback = i);
  }
  return (A(e, r), r);
}
export {
  a as _,
  j as a,
  C as c,
  M as d,
  w as f,
  g,
  T as h,
  D as i,
  v as l,
  N as m,
  x as n,
  c as o,
  O as p,
  E as r,
  P as s,
  s as t,
  _ as u,
  o as v,
};
