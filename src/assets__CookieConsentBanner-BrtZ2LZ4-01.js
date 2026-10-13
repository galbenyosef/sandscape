// assets__CookieConsentBanner-BrtZ2LZ4 01 — expires
// Lines 1-81 of readable/assets__CookieConsentBanner-BrtZ2LZ4.pretty.js (statement-aligned).
import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./useTranslation-BdauNPOZ.js";
var i = e(t());
function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var o = {
  read: function (e) {
    return (
      e[0] === `"` && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    );
  },
};
function s(e, t) {
  function n(n, r, i) {
    if (!(typeof document > `u`)) {
      ((i = a({}, t, i)),
        typeof i.expires == `number` &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        (i.expires &&= i.expires.toUTCString()),
        (n = encodeURIComponent(n)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape)));
      var o = ``;
      for (var s in i)
        i[s] &&
          ((o += `; ` + s), i[s] !== !0 && (o += `=` + i[s].split(`;`)[0]));
      return (document.cookie = n + `=` + e.write(r, n) + o);
    }
  }
  function r(t) {
    if (!(typeof document > `u` || (arguments.length && !t))) {
      for (
        var n = document.cookie ? document.cookie.split(`; `) : [],
          r = {},
          i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i].split(`=`),
          o = a.slice(1).join(`=`);
        try {
          var s = decodeURIComponent(a[0]);
          if (((r[s] = e.read(o, s)), t === s)) break;
        } catch {}
      }
      return t ? r[t] : r;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (e, t) {
        n(e, ``, a({}, t, { expires: -1 }));
      },
      withAttributes: function (e) {
        return s(this.converter, a({}, this.attributes, e));
      },
      withConverter: function (e) {
        return s(a({}, this.converter, e), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  );
}
