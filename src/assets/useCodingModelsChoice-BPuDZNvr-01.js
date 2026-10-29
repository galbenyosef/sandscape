// useCodingModelsChoice-BPuDZNvr 01 — fallback
// Lines 1-253 of readable/assets/useCodingModelsChoice-BPuDZNvr.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t } from "./jsx-runtime-BtyjnKZj.js";
import { n, t as r } from "./apiConfig-BixZVfgD.js";
import { n as i } from "./serviceProxy-C8F2GeHO.js";
import { K as a } from "./index-CBcimEr9.js";
import { c as o } from "./useActionPrice-BihhCOgj.js";
var s = e(t()),
  c = new Set([
    `ADMIN_REQUIRED`,
    `ADMIN_CHECK_FAILED`,
    `CODING_MODELS_NOT_CODING`,
    `CODING_MODELS_ON_RESUME`,
    `INVALID_CODING_MODELS`,
  ]);
function l(e, t) {
  return t ? e.models.find((e) => e.profile === t) : void 0;
}
function u(e, t, n) {
  let r = e.agents.find(
    (e) =>
      e.kind === `entry` &&
      Object.prototype.hasOwnProperty.call(e.default_thinking, t),
  );
  return r
    ? n
      ? [r, ...e.agents.filter((e) => e.kind === `child`)]
      : [r]
    : [];
}
function d(e, t) {
  return e.default_thinking[t] ?? e.default_thinking[`*`];
}
function f(e, t, n) {
  let r = e.saved[t.skill];
  return {
    model: r?.model ?? t.default_model,
    thinking: r?.thinking ?? d(t, n) ?? ``,
    fallback: r?.fallback ?? t.default_fallback,
  };
}
function p(e, t) {
  return t.requires_vision ? e.models.filter((e) => e.vision) : e.models;
}
function m(e, t) {
  return l(e, t)?.thinking_levels ?? [];
}
function h(e, t, n) {
  return p(e, t).filter((e) => e.profile !== n);
}
function g(e, t, n, r) {
  return n.model ?? f(e, t, r).model;
}
function _(e, t, n, r, i) {
  let a = { ...n, ...r },
    o = g(e, t, a, i);
  (a.thinking !== void 0 && !m(e, o).includes(a.thinking) && delete a.thinking,
    a.fallback !== void 0 &&
      !h(e, t, o).some((e) => e.profile === a.fallback) &&
      delete a.fallback);
  for (let e of Object.keys(a)) a[e] === void 0 && delete a[e];
  return a;
}
function v(e) {
  return (
    !!e &&
    (e.model !== void 0 || e.thinking !== void 0 || e.fallback !== void 0)
  );
}
function y(e, t, n, r) {
  let i = {};
  for (let a of t) {
    let t = n[a.skill];
    if (!v(t)) continue;
    let o = e.saved[a.skill],
      s = g(e, a, t, r),
      c = { model: s },
      l = t.thinking ?? (t.model === void 0 ? o?.thinking : void 0);
    l !== void 0 && m(e, s).includes(l) && (c.thinking = l);
    let u = t.fallback ?? o?.fallback;
    (u !== void 0 &&
      h(e, a, s).some((e) => e.profile === u) &&
      (c.fallback = u),
      (i[a.skill] = c));
  }
  return Object.keys(i).length > 0 ? i : null;
}
function b(e, t) {
  if (!t) return [];
  let n = [];
  for (let [r, i] of Object.entries(t)) {
    let t = e.agents.find((e) => e.skill === r);
    if (!t) {
      n.push(`${r} is not a configurable coding agent`);
      continue;
    }
    let a = l(e, i.model);
    if (!a) {
      n.push(`${r}: ${i.model} is not a coding model`);
      continue;
    }
    i.thinking !== void 0 &&
      !a.thinking_levels.includes(i.thinking) &&
      n.push(`${r}: ${a.profile} does not take effort ${i.thinking}`);
    let o = !0;
    if (i.fallback !== void 0) {
      let t = l(e, i.fallback);
      t
        ? t.profile === a.profile
          ? n.push(`${r}: the fallback is the same model as the primary`)
          : (o = t.vision)
        : n.push(`${r}: fallback ${i.fallback} is not a coding model`);
    }
    t.requires_vision &&
      (!a.vision || !o) &&
      n.push(
        `${r} reads images, so its model and fallback must both be vision models`,
      );
  }
  return n;
}
function x(e) {
  let t = {};
  if (!e || typeof e != `object`) return t;
  for (let [n, r] of Object.entries(e)) {
    if (!r || typeof r != `object` || typeof r.model != `string`) continue;
    let e = { model: r.model };
    (typeof r.thinking == `string` && (e.thinking = r.thinking),
      typeof r.fallback == `string` && (e.fallback = r.fallback),
      (t[n] = e));
  }
  return t;
}
function S(e, t) {
  return e.find((e) => e.action_id === t) ?? null;
}
function C(e) {
  let t = e.indexOf(`:`);
  return t >= 0 ? e.slice(t + 1) : e;
}
async function w(e, t) {
  let n = `${t} (${e.status})`;
  try {
    let t = await e.json();
    typeof t?.detail == `string` && t.detail && (n = t.detail);
  } catch {}
  return Error(n);
}
async function T() {
  let e = await n(),
    t = await fetch(`${r.API_BASE_URL}/api/app-admin/status`, { headers: e });
  if (!t.ok) throw await w(t, `Could not check admin access`);
  let i = await t.json();
  if (typeof i?.is_admin != `boolean`)
    throw Error(`Admin status response carried no is_admin flag`);
  return i.is_admin;
}
async function E(e) {
  let t = await n(),
    i = await fetch(
      `${r.API_BASE_URL}/api/app-admin/projects/${encodeURIComponent(e)}/duplicate`,
      { method: `POST`, headers: t },
    );
  if (!i.ok) throw await w(i, `Could not duplicate the project`);
  let a = await i.json();
  if (
    a?.success !== !0 ||
    typeof a?.session_id != `string` ||
    typeof a?.name != `string`
  )
    throw Error(`Duplicate response carried no session id`);
  return { session_id: a.session_id, name: a.name };
}
async function D() {
  let e = await n(),
    t = await fetch(`${r.API_BASE_URL}/api/app-admin/coding-models`, {
      headers: e,
    });
  if (!t.ok) throw await w(t, `Could not load the coding models`);
  let i = await t.json();
  if (!Array.isArray(i?.models) || !Array.isArray(i?.agents))
    throw Error(`Coding models response carried no models or agents`);
  return {
    models: i.models,
    agents: i.agents,
    thinking_levels: Array.isArray(i.thinking_levels) ? i.thinking_levels : [],
    saved: i.saved && typeof i.saved == `object` ? i.saved : {},
  };
}
async function O(e) {
  let t = await n(),
    i = await fetch(
      `${r.API_BASE_URL}/api/app-admin/sessions/${encodeURIComponent(e)}/coding-models`,
      { headers: t },
    );
  if (!i.ok) throw await w(i, `Could not load this project's coding models`);
  let a = await i.json();
  if (
    !Array.isArray(a?.runs) ||
    !a?.last_choice ||
    typeof a.last_choice != `object`
  )
    throw Error(`Session coding models response carried no runs`);
  return { runs: a.runs, last_choice: a.last_choice };
}
var k = null,
  A = null;
function j(e) {
  if (k?.userId === e) return k.promise;
  let t = { userId: e, promise: T() };
  return (
    (k = t),
    t.promise.catch(() => {
      k === t && (k = null);
    }),
    t.promise
  );
}
function M(e) {
  if (A?.userId === e) return A.promise;
  let t = { userId: e, promise: D() };
  return (
    (A = t),
    t.promise.catch(() => {
      A === t && (A = null);
    }),
    t.promise
  );
}
function N() {
  let { user: e } = a(),
    t = e?.id ?? null,
    [n, r] = (0, s.useState)(null);
  return (
    (0, s.useEffect)(() => {
      if (!t || i()) return;
      let e = !1;
      return (
        j(t)
          .then((n) => {
            e || r({ userId: t, isAdmin: n });
          })
          .catch((n) => {
            (console.error(`[useIsAppAdmin] admin status unavailable:`, n),
              e || r({ userId: t, isAdmin: !1 }));
          }),
        () => {
          e = !0;
        }
      );
    }, [t]),
    !!t && n?.userId === t && n.isAdmin
  );
}
