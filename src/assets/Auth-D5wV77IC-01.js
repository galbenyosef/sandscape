// Auth-D5wV77IC 01 — attrs
// Lines 1-106 of readable/assets/Auth-D5wV77IC.pretty.js (statement-aligned).
import { a as e, t } from "./rolldown-runtime-CNC7AqOf.js";
import { n, t as r } from "./jsx-runtime-BtyjnKZj.js";
import { c as i, s as a, u as o } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as s } from "./button-Ap3ysi5G.js";
import { t as c } from "./arrow-left-CDrX27jn.js";
import { t as l } from "./key-round-C8uAJKQY.js";
import { t as u } from "./loader-circle-DBFTFT2k.js";
import { t as d } from "./mail-D0O-liE7.js";
import { t as f } from "./shield-check-CAJ-dFVb.js";
import {
  a as p,
  c as m,
  l as h,
  n as g,
  r as _,
  s as v,
  t as y,
  u as b,
} from "./useTranslation-BdauNPOZ.js";
import {
  B as x,
  H as S,
  L as C,
  R as ee,
  V as w,
  W as te,
  f as T,
  h as ne,
  l as E,
  m as re,
  z as ie,
} from "./index-BKDksszn.js";
import { a as ae, n as oe, r as se, t as ce } from "./card-DLIi0Qe8.js";
import { t as le } from "./authErrors-DEBvXlic.js";
var ue = e(
    t((e, t) => {
      t.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    })(),
  ),
  de = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?("[^"]*"|'[^']*')/g;
function fe(e) {
  var t = { type: `tag`, name: ``, voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]),
    (ue.default[n[1]] || e.charAt(e.length - 2) === `/`) &&
      (t.voidElement = !0),
    t.name.startsWith(`!--`))
  ) {
    var r = e.indexOf(`-->`);
    return { type: `comment`, comment: r === -1 ? `` : e.slice(4, r) };
  }
  for (var i = new RegExp(de), a = null; (a = i.exec(e)) !== null;)
    if (a[0].trim())
      if (a[1]) {
        var o = a[1].trim(),
          s = [o, ``];
        (o.indexOf(`=`) > -1 && (s = o.split(`=`)),
          (t.attrs[s[0]] = s[1]),
          i.lastIndex--);
      } else
        a[2] && (t.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1));
  return t;
}
var pe = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  D = /^\s*$/,
  me = Object.create(null);
function O(e, t) {
  switch (t.type) {
    case `text`:
      return e + t.content;
    case `tag`:
      return (
        (e +=
          `<` +
          t.name +
          (t.attrs
            ? (function (e) {
                var t = [];
                for (var n in e) t.push(n + `="` + e[n] + `"`);
                return t.length ? ` ` + t.join(` `) : ``;
              })(t.attrs)
            : ``) +
          (t.voidElement ? `/>` : `>`)),
        t.voidElement ? e : e + t.children.reduce(O, ``) + `</` + t.name + `>`
      );
    case `comment`:
      return e + `<!--` + t.comment + `-->`;
  }
}
