// LevelDesignKitPanel-BowZ7mTP 01 — key
// Lines 1-288 of readable/assets/LevelDesignKitPanel-BowZ7mTP.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./useToast-QK0Q4gGT.js";
import { r as i, t as a } from "./button-Ap3ysi5G.js";
import {
  A as o,
  D as s,
  M as c,
  O as l,
  Q as u,
  U as d,
  Y as f,
  a as p,
  b as m,
  c as h,
  d as g,
  f as _,
  g as v,
  h as ee,
  i as y,
  k as b,
  l as x,
  m as S,
  n as te,
  o as ne,
  p as re,
  r as ie,
  s as ae,
  u as C,
} from "./SceneEditor-BPEsa1Sn.js";
import { t as oe } from "./check-DVcwwxJi.js";
import { p as se } from "./dnd-DMxeXGsh.js";
import {
  a as ce,
  c as w,
  i as le,
  n as ue,
  o as de,
  r as fe,
  u as pe,
} from "./CoinDisplay-iWoR0BMU.js";
import { t as T } from "./loader-circle-DBFTFT2k.js";
import { t as me } from "./refresh-cw-CkwJF4P8.js";
import { n as E } from "./serviceProxy-CZRpABZv.js";
import {
  a as he,
  c as ge,
  f as _e,
  g as D,
  i as ve,
  l as ye,
  r as be,
  t as O,
  u as xe,
  v as Se,
} from "./actionsCatalog-BOqBt5wy.js";
import { s as k } from "./tour-D03BMTEP.js";
import { D as Ce, T as we } from "./gameCreation-7QUnbwLk.js";
import {
  G as A,
  K as Te,
  X as Ee,
  Z as De,
  dt as j,
  q as Oe,
  tt as ke,
} from "./index-BKDksszn.js";
import {
  Kt as Ae,
  Q as je,
  R as Me,
  Rn as M,
  Y as Ne,
  dn as Pe,
  f as Fe,
  ln as Ie,
  o as Le,
} from "./three.module-CvxFRqeD.js";
import { a as Re, n as ze, o as Be, t as Ve } from "./dialog-B1UXjCvB.js";
var He = i(`ImagePlus`, [
    [`path`, { d: `M16 5h6`, key: `1vod17` }],
    [`path`, { d: `M19 2v6`, key: `4bpg5p` }],
    [
      `path`,
      {
        d: `M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5`,
        key: `1ue2ih`,
      },
    ],
    [`path`, { d: `m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`, key: `1xmnt7` }],
    [`circle`, { cx: `9`, cy: `9`, r: `2`, key: `af1f0g` }],
  ]),
  Ue = i(`PackageOpen`, [
    [`path`, { d: `M12 22v-9`, key: `x3hkom` }],
    [
      `path`,
      {
        d: `M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z`,
        key: `2ntwy6`,
      },
    ],
    [
      `path`,
      {
        d: `M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13`,
        key: `1pmm1c`,
      },
    ],
    [
      `path`,
      {
        d: `M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z`,
        key: `12ttoo`,
      },
    ],
  ]),
  N = n(),
  P = e(t()),
  We = `run`;
function F() {
  return (
    (0, P.useSyncExternalStore)(D, xe, xe),
    (0, P.useEffect)(() => {
      ge();
    }, [ye()]),
    _e()
  );
}
function Ge(e) {
  return F() ? ve(e) : null;
}
function Ke(e) {
  return F() ? be(e) : null;
}
function qe(e, t = {}) {
  if (!e) return null;
  let n = e.price;
  for (let r of e.item_prices ?? []) {
    if (r.per === We) {
      n += r.price;
      continue;
    }
    let i = t[r.per];
    if (i === void 0)
      return (
        console.error(
          `[useActionPrice] '${e.id}' bills per '${r.per}' (${r.key}) but no count for that axis was supplied — refusing to quote (supplied: ${Object.keys(t).join(`, `) || `nothing`}).`,
        ),
        null
      );
    n += r.price * i;
  }
  return n;
}
var I = 0,
  Je = new Set();
function Ye() {
  ((I += 1), L.clear(), Je.forEach((e) => e()));
}
var L = new Map();
function Xe(e) {
  let t = Object.keys(e).sort();
  return JSON.stringify(t.map((t) => [t, e[t]]));
}
function Ze(e, t, n, r) {
  let i = L.get(r);
  if (i) return i;
  let a = Se.quote(e, t, n).then((t) => {
    if (!t.success || typeof t.total != `number`)
      return (
        L.delete(r),
        console.error(
          `[useActionQuote] '${e}' could not be quoted` +
            (t.error_code ? ` (${t.error_code})` : ``) +
            `: ${t.error ?? `no total in response`}`,
        ),
        null
      );
    let n = t.total;
    return {
      total: n,
      maxTotal: typeof t.max_total == `number` ? Math.max(t.max_total, n) : n,
    };
  });
  return (L.set(r, a), a);
}
function R(e, t, n = {}) {
  let r = z(e, t, n);
  return r ? r.total : null;
}
function z(e, t, n = {}) {
  let [r, i] = (0, P.useState)(null),
    a = Xe(n),
    [o, s] = (0, P.useState)(I);
  return (
    (0, P.useEffect)(() => {
      let e = () => s(I);
      return (
        Je.add(e),
        e(),
        () => {
          Je.delete(e);
        }
      );
    }, []),
    (0, P.useEffect)(() => {
      if (!e || !t) {
        i(null);
        return;
      }
      let r = !1;
      return (
        i(null),
        Ze(e, t, n, `${o}|${e}|${t}|${a}`).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, a, o]),
    r
  );
}
function B(e, t, n, r = {}) {
  let i = Ke(O[e].actionId);
  return R(n ? (i?.id ?? null) : null, n ? t : null, n ? he(e, n, r) : {});
}
var V = () => ({ prices: null, promise: null, loadedAt: 0 }),
  Qe = V(),
  $e = V();
function H() {
  return E() ? $e : Qe;
}
function et() {
  let e = H();
  return (
    e.promise && Date.now() - e.loadedAt > 6e4 && (e.promise = null),
    (e.promise ||= w
      .getActionPrices()
      .then((t) =>
        t.success
          ? ((e.prices = new Map(t.prices.map((e) => [e.action_key, e.price]))),
            (e.loadedAt = Date.now()),
            e.prices)
          : (console.error(`[useOpPrice] action_prices unavailable:`, t.error),
            (e.promise = null),
            null),
      )),
    e.promise
  );
}
function tt(e) {
  let [t, n] = (0, P.useState)(() => H().prices?.get(e) ?? null);
  return (
    (0, P.useEffect)(() => {
      let t = !1;
      return (
        et().then((r) => {
          if (t || !r) return;
          let i = r.get(e);
          if (i === void 0) {
            console.error(
              `[useOpPrice] no ACTIVE action_prices row for '${e}' — the door that charges it will fail closed, so no price is shown.`,
            );
            return;
          }
          n(i);
        }),
        () => {
          t = !0;
        }
      );
    }, [e]),
    t
  );
}
function nt(e, t) {
  if (!e) return null;
  let n = (e.item_prices ?? []).find((e) => e.per === t);
  return n ? n.price : null;
}
function rt(e) {
  if (!e) return null;
  let t = e.price;
  for (let n of e.item_prices ?? []) t += n.price;
  return t;
}
