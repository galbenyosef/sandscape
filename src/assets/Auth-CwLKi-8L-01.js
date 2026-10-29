// Auth-CwLKi-8L 01 — attrs
// Lines 1-106 of readable/assets/Auth-CwLKi-8L.pretty.js (statement-aligned).
import { a as e, t } from "./rolldown-runtime-CNC7AqOf.js";
import { n, t as r } from "./jsx-runtime-BtyjnKZj.js";
import { c as i, s as a, u as o } from "./chunk-KS7C4IRE-CgpSK45w.js";
import { t as s } from "./button-gyaE5cND.js";
import { t as c } from "./arrow-left-DBXyNsd_.js";
import { t as l } from "./key-round-DVUG2_-P.js";
import { t as u } from "./loader-circle-BWNSk5u-.js";
import { t as d } from "./mail-BGC21635.js";
import { t as f } from "./shield-check-CV429N9x.js";
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
  K as C,
  U as w,
  V as ee,
  W as T,
  f as E,
  h as te,
  l as D,
  m as ne,
  z as re,
} from "./index-CBcimEr9.js";
import { a as ie, n as ae, r as oe, t as se } from "./card-Ca5HFnV5.js";
import { t as ce } from "./authErrors-DEBvXlic.js";
var le = e(
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
  ue = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?("[^"]*"|'[^']*')/g;
function de(e) {
  var t = { type: `tag`, name: ``, voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (
    n &&
    ((t.name = n[1]),
    (le.default[n[1]] || e.charAt(e.length - 2) === `/`) &&
      (t.voidElement = !0),
    t.name.startsWith(`!--`))
  ) {
    var r = e.indexOf(`-->`);
    return { type: `comment`, comment: r === -1 ? `` : e.slice(4, r) };
  }
  for (var i = new RegExp(ue), a = null; (a = i.exec(e)) !== null;)
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
var fe = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  O = /^\s*$/,
  pe = Object.create(null);
function k(e, t) {
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
        t.voidElement ? e : e + t.children.reduce(k, ``) + `</` + t.name + `>`
      );
    case `comment`:
      return e + `<!--` + t.comment + `-->`;
  }
}
