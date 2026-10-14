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
var k = {
    parse: function (e, t) {
      ((t ||= {}), (t.components ||= me));
      var n,
        r = [],
        i = [],
        a = -1,
        o = !1;
      if (e.indexOf(`<`) !== 0) {
        var s = e.indexOf(`<`);
        r.push({ type: `text`, content: s === -1 ? e : e.substring(0, s) });
      }
      for (var c, l = []; (c = pe.exec(e));) l.push(c);
      return (
        l.forEach(function (e, t) {
          var n = e[0];
          if (n && !n.startsWith(`<!--`)) {
            for (var r = 0, i = 0, a = -1, o = null, s = 0; s < n.length; s++) {
              var c = n.charAt(s);
              o
                ? c === o && (o = null)
                : c === `"` || c === `'`
                  ? (o = c)
                  : c === `<`
                    ? ++r == 2 && (a = s)
                    : c === `>` && i++;
            }
            var u = a > -1 && /[a-zA-Z0-9\-!/]/.test(n.charAt(a + 1));
            if (r > i && u) {
              var d = n.substring(0, a),
                f = n.substring(d.length);
              ((l[t][0] = f), (l[t].index += d.length));
            }
          }
        }),
        l.forEach(function (s, c) {
          var u = s[0];
          if (u) {
            var d = s.index;
            if (o) {
              if (u !== `</` + n.name + `>`) return;
              o = !1;
            }
            var f,
              p,
              m = u.charAt(1) !== `/`,
              h = u.startsWith(`<!--`),
              g = d + u.length,
              _ = e.charAt(g),
              v = l[c + 1];
            if (_ === `<` && v) {
              var y = e.substring(g, v.index);
              f = y.split(`<`).length > y.split(`>`).length;
            }
            if (h) {
              var b = fe(u);
              if (a < 0) return (r.push(b), r);
              (p = i[a]).children.push(b);
              var x = e.slice(g, v ? v.index : void 0);
              return (
                x.length > 0 && p.children.push({ type: `text`, content: x }),
                r
              );
            }
            if (
              (m &&
                (a++,
                (n = fe(u)).type === `tag` &&
                  t.components[n.name] &&
                  ((n.type = `component`), (o = !0)),
                n.voidElement ||
                  o ||
                  !_ ||
                  _ === `<` ||
                  n.children.push({
                    type: `text`,
                    content: e.slice(g, v ? v.index : void 0),
                  }),
                a === 0 && r.push(n),
                (p = i[a - 1]) && p.children.push(n),
                (i[a] = n)),
              (!m || n.voidElement) &&
                (a > -1 &&
                  (n.voidElement || n.name === u.slice(2, -1)) &&
                  (a--, (n = a === -1 ? r : i[a])),
                !o && (_ !== `<` || f) && _))
            ) {
              p = a === -1 ? r : i[a].children;
              var S = v ? v.index : -1,
                C = e.slice(g, S === -1 ? void 0 : S);
              (D.test(C) && (C = ` `),
                ((S > -1 && a + p.length >= 0) || C !== ` `) &&
                  p.push({ type: `text`, content: C }));
            }
          }
        }),
        r
      );
    },
    stringify: function (e) {
      return e.reduce(function (e, t) {
        return e + O(``, t);
      }, ``);
    },
  },
  A = e(n()),
  j = (e, t) => {
    if (!e) return !1;
    let n = e.props?.children ?? e.children;
    return t ? n.length > 0 : !!n;
  },
  M = (e) => {
    if (!e) return [];
    let t = e.props?.children ?? e.children;
    return e.props?.i18nIsDynamicList ? P(t) : t;
  },
  N = (e) => Array.isArray(e) && e.every(A.isValidElement),
  P = (e) => (Array.isArray(e) ? e : [e]),
  he = (e, t) => {
    let n = { ...t };
    return ((n.props = Object.assign(e.props, t.props)), n);
  },
  ge = (e, t, n, r) => {
    if (!e) return ``;
    let i = ``,
      a = P(e),
      o = t?.transSupportBasicHtmlNodes
        ? (t.transKeepBasicHtmlNodesFor ?? [])
        : [];
    return (
      a.forEach((e, a) => {
        if (m(e)) {
          i += `${e}`;
          return;
        }
        if ((0, A.isValidElement)(e)) {
          let { props: s, type: c } = e,
            l = Object.keys(s).length,
            u = o.indexOf(c) > -1,
            d = s.children;
          if (!d && u && !l) {
            i += `<${c}/>`;
            return;
          }
          if ((!d && (!u || l)) || s.i18nIsDynamicList) {
            i += `<${a}></${a}>`;
            return;
          }
          if (u && l === 1 && m(d)) {
            i += `<${c}>${d}</${c}>`;
            return;
          }
          let f = ge(d, t, n, r);
          i += `<${a}>${f}</${a}>`;
          return;
        }
        if (e === null) {
          h(n, `TRANS_NULL_VALUE`, `Passed in a null value as child`, {
            i18nKey: r,
          });
          return;
        }
        if (v(e)) {
          let { format: t, ...a } = e,
            o = Object.keys(a);
          if (o.length === 1) {
            let e = t ? `${o[0]}, ${t}` : o[0];
            i += `{{${e}}}`;
            return;
          }
          h(
            n,
            `TRANS_INVALID_OBJ`,
            `Invalid child - Object should only have keys {{ value, format }} (format is optional).`,
            { i18nKey: r, child: e },
          );
          return;
        }
        h(
          n,
          `TRANS_INVALID_VAR`,
          `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`,
          { i18nKey: r, child: e },
        );
      }),
      i
    );
  },
  F = (e, t, n, r, i, a, o) => {
    if (n === ``) return [];
    let s = i.transKeepBasicHtmlNodesFor || [],
      c = n && new RegExp(s.map((e) => `<${e}`).join(`|`)).test(n);
    if (!e && !t && !c && !o) return [n];
    let l = t ?? {},
      u = (e) => {
        P(e).forEach((e) => {
          m(e) ||
            (j(e)
              ? u(M(e))
              : v(e) && !(0, A.isValidElement)(e) && Object.assign(l, e));
        });
      };
    u(e);
    let d = k.parse(`<0>${n}</0>`),
      f = { ...l, ...a },
      p = (e, t, n) => {
        let r = M(e),
          i = g(r, t.children, n);
        return (N(r) && i.length === 0) || e.props?.i18nIsDynamicList ? r : i;
      },
      h = (e, t, n, r, i) => {
        e.dummy
          ? ((e.children = t),
            n.push((0, A.cloneElement)(e, { key: r }, i ? void 0 : t)))
          : n.push(
              ...A.Children.map([e], (e) => {
                let n = { ...e.props };
                return (
                  delete n.i18nIsDynamicList,
                  (0, A.createElement)(
                    e.type,
                    { ...n, key: r, ref: e.props.ref ?? e.ref },
                    i ? null : t,
                  )
                );
              }),
            );
      },
      g = (e, n, a) => {
        let l = P(e);
        return P(n).reduce((e, n, u) => {
          let d =
            n.children?.[0]?.content &&
            r.services.interpolator.interpolate(
              n.children[0].content,
              f,
              r.language,
            );
          if (n.type === `tag`) {
            let o = l[parseInt(n.name, 10)];
            (!o && t && (o = t[n.name]),
              a.length === 1 && !o && (o = a[0][n.name]),
              (o ||= {}));
            let _ =
                Object.keys(n.attrs).length === 0
                  ? o
                  : he({ props: n.attrs }, o),
              y = (0, A.isValidElement)(_),
              b = y && j(n, !0) && !n.voidElement,
              x = c && v(_) && _.dummy && !y,
              S = v(t) && Object.hasOwnProperty.call(t, n.name);
            if (m(_)) {
              let t = r.services.interpolator.interpolate(_, f, r.language);
              e.push(t);
            } else if (j(_) || b) {
              let t = p(_, n, a);
              h(_, t, e, u);
            } else if (x) {
              let t = g(l, n.children, a);
              h(_, t, e, u);
            } else if (Number.isNaN(parseFloat(n.name)))
              if (S) {
                let t = p(_, n, a);
                h(_, t, e, u, n.voidElement);
              } else if (i.transSupportBasicHtmlNodes && s.indexOf(n.name) > -1)
                if (n.voidElement)
                  e.push(
                    (0, A.createElement)(n.name, { key: `${n.name}-${u}` }),
                  );
                else {
                  let t = g(l, n.children, a);
                  e.push(
                    (0, A.createElement)(n.name, { key: `${n.name}-${u}` }, t),
                  );
                }
              else if (n.voidElement) e.push(`<${n.name} />`);
              else {
                let t = g(l, n.children, a);
                e.push(`<${n.name}>${t}</${n.name}>`);
              }
            else if (v(_) && !y) {
              let t = n.children[0] ? d : null;
              t && e.push(t);
            } else h(_, d, e, u, n.children.length !== 1 || !d);
          } else if (n.type === `text`) {
            let t = i.transWrapTextNodes,
              a = o
                ? i.unescape(
                    r.services.interpolator.interpolate(
                      n.content,
                      f,
                      r.language,
                    ),
                  )
                : r.services.interpolator.interpolate(n.content, f, r.language);
            t
              ? e.push((0, A.createElement)(t, { key: `${n.name}-${u}` }, a))
              : e.push(a);
          }
          return e;
        }, []);
      };
    return M(g([{ dummy: !0, children: e || [] }], d, P(e || []))[0]);
  },
  I = (e, t, n) => {
    let r = e.key || t,
      i = (0, A.cloneElement)(e, { key: r });
    if (
      !i.props ||
      !i.props.children ||
      (n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)
    )
      return i;
    function a() {
      return (0, A.createElement)(A.Fragment, null, i);
    }
    return (0, A.createElement)(a, { key: r });
  },
  L = (e, t) => e.map((e, n) => I(e, n, t)),
  R = (e, t) => {
    let n = {};
    return (
      Object.keys(e).forEach((r) => {
        Object.assign(n, { [r]: I(e[r], r, t) });
      }),
      n
    );
  },
  _e = (e, t, n, r) =>
    e
      ? Array.isArray(e)
        ? L(e, t)
        : v(e)
          ? R(e, t)
          : (b(
              n,
              `TRANS_INVALID_COMPONENTS`,
              `<Trans /> "components" prop expects an object or array`,
              { i18nKey: r },
            ),
            null)
      : null,
  z = (e) =>
    !v(e) || Array.isArray(e)
      ? !1
      : Object.keys(e).reduce(
          (e, t) => e && Number.isNaN(Number.parseFloat(t)),
          !0,
        );
function B({
  children: e,
  count: t,
  parent: n,
  i18nKey: r,
  context: i,
  tOptions: a = {},
  values: o,
  defaults: s,
  components: c,
  ns: l,
  i18n: u,
  t: d,
  shouldUnescape: f,
  ...h
}) {
  let g = u || _();
  if (!g)
    return (
      b(
        g,
        `NO_I18NEXT_INSTANCE`,
        `Trans: You need to pass in an i18next instance using i18nextReactModule`,
        { i18nKey: r },
      ),
      e
    );
  let v = d || g.t.bind(g) || ((e) => e),
    y = { ...p(), ...g.options?.react },
    x = l || v.ns || g.options?.defaultNS;
  x = m(x) ? [x] : x || [`translation`];
  let S = ge(e, y, g, r),
    C = s || S || y.transEmptyNodeValue || r,
    { hashTransKey: ee } = y,
    w = r || (ee ? ee(S || C) : S || C);
  g.options?.interpolation?.defaultVariables &&
    (o =
      o && Object.keys(o).length > 0
        ? { ...o, ...g.options.interpolation.defaultVariables }
        : { ...g.options.interpolation.defaultVariables });
  let te =
      o || (t !== void 0 && !g.options?.interpolation?.alwaysFormat) || !e
        ? a.interpolation
        : {
            interpolation: { ...a.interpolation, prefix: `#$?`, suffix: `?$#` },
          },
    T = {
      ...a,
      context: i || a.context,
      count: t,
      ...o,
      ...te,
      defaultValue: C,
      ns: x,
    },
    ne = w ? v(w, T) : C,
    E = _e(c, ne, g, r),
    re = E || e,
    ie = null;
  z(E) && ((ie = E), (re = e));
  let ae = F(re, ie, ne, g, y, T, f),
    oe = n ?? y.defaultTransParent;
  return oe ? (0, A.createElement)(oe, h, ae) : ae;
}
function ve({
  children: e,
  count: t,
  parent: n,
  i18nKey: r,
  context: i,
  tOptions: a = {},
  values: o,
  defaults: s,
  components: c,
  ns: l,
  i18n: u,
  t: d,
  shouldUnescape: f,
  ...p
}) {
  let { i18n: m, defaultNS: h } = (0, A.useContext)(g) || {},
    v = u || m || _(),
    y = d || v?.t.bind(v);
  return B({
    children: e,
    count: t,
    parent: n,
    i18nKey: r,
    context: i,
    tOptions: a,
    values: o,
    defaults: s,
    components: c,
    ns: l || y?.ns || h || v?.options?.defaultNS,
    i18n: v,
    t: d,
    shouldUnescape: f,
    ...p,
  });
}
var ye = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  V = A.createContext && A.createContext(ye),
  be = [`attr`, `size`, `title`];
function xe(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Se(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Se(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function H() {
  return (
    (H = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    H.apply(null, arguments)
  );
}
function Ce(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ce(Object(n), !0).forEach(function (t) {
          we(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ce(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function we(e, t, n) {
  return (
    (t = W(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function W(e) {
  var t = G(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function G(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function K(e) {
  return (
    e &&
    e.map((e, t) => A.createElement(e.tag, U({ key: t }, e.attr), K(e.child)))
  );
}
function q(e) {
  return (t) => A.createElement(J, H({ attr: U({}, e.attr) }, t), K(e.child));
}
function J(e) {
  var t = (t) => {
    var n = e.attr,
      r = e.size,
      i = e.title,
      a = xe(e, be),
      o = r || t.size || `1em`,
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + ` ` : ``) + e.className),
      A.createElement(
        `svg`,
        H(
          { stroke: `currentColor`, fill: `currentColor`, strokeWidth: `0` },
          t.attr,
          n,
          a,
          {
            className: s,
            style: U(U({ color: e.color || t.color }, t.style), e.style),
            height: o,
            width: o,
            xmlns: `http://www.w3.org/2000/svg`,
          },
        ),
        i && A.createElement(`title`, null, i),
        e.children,
      )
    );
  };
  return V === void 0 ? t(ye) : A.createElement(V.Consumer, null, (e) => t(e));
}
function Te(e) {
  return q({
    tag: `svg`,
    attr: { viewBox: `0 0 496 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Y(e) {
  return q({
    tag: `svg`,
    attr: { viewBox: `0 0 512 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Ee(e) {
  return q({
    tag: `svg`,
    attr: { viewBox: `0 0 384 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z`,
        },
        child: [],
      },
    ],
  })(e);
}
function De(e) {
  return q({
    tag: `svg`,
    attr: {
      version: `1.1`,
      x: `0px`,
      y: `0px`,
      viewBox: `0 0 48 48`,
      enableBackground: `new 0 0 48 48`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          fill: `#FFC107`,
          d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`,
        },
        child: [],
      },
      {
        tag: `path`,
        attr: {
          fill: `#FF3D00`,
          d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`,
        },
        child: [],
      },
      {
        tag: `path`,
        attr: {
          fill: `#4CAF50`,
          d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`,
        },
        child: [],
      },
      {
        tag: `path`,
        attr: {
          fill: `#1976D2`,
          d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`,
        },
        child: [],
      },
    ],
  })(e);
}
var X = r(),
  Oe = null;
function ke() {
  return window.turnstile
    ? Promise.resolve()
    : Oe ||
        ((Oe = new Promise((e, t) => {
          let n = document.querySelector(
            `script[data-sandscape-turnstile="true"]`,
          );
          if (n) {
            (n.addEventListener(`load`, () => e(), { once: !0 }),
              n.addEventListener(
                `error`,
                () => t(Error(`Turnstile failed to load`)),
                { once: !0 },
              ));
            return;
          }
          let r = document.createElement(`script`);
          ((r.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`),
            (r.async = !0),
            (r.defer = !0),
            (r.dataset.sandscapeTurnstile = `true`),
            (r.onload = () => e()),
            (r.onerror = () => t(Error(`Turnstile failed to load`))),
            document.head.appendChild(r));
        })),
        Oe);
}
function Ae({ siteKey: e, resetKey: t, onTokenChange: n }) {
  let r = (0, A.useRef)(null);
  return (
    (0, A.useEffect)(() => {
      if (!e || !r.current) return;
      let t = !1,
        i = null;
      return (
        n(null),
        ke()
          .then(() => {
            t ||
              !r.current ||
              !window.turnstile ||
              (i = window.turnstile.render(r.current, {
                sitekey: e,
                theme: `auto`,
                callback: (e) => n(e),
                "expired-callback": () => n(null),
                "error-callback": () => n(null),
              }));
          })
          .catch(() => n(null)),
        () => {
          ((t = !0), i && window.turnstile && window.turnstile.remove(i));
        }
      );
    }, [e, t, n]),
    e
      ? (0, X.jsx)(`div`, {
          ref: r,
          className: `flex min-h-[65px] justify-center`,
          "aria-label": `Security verification`,
        })
      : null
  );
}
function Z(e, t) {
  return e == null || e === `` ? t : e.toLowerCase() === `true`;
}
var Q = {
  providers: {
    google: Z(void 0, !0),
    github: Z(void 0, !1),
    apple: Z(void 0, !1),
    facebook: Z(void 0, !1),
  },
  turnstileSiteKey: void 0,
  resendCooldownSeconds: 60,
};
function je(e) {
  return e.replace(/\D/g, ``).slice(0, 10);
}
function Me(e) {
  return RegExp(`^\\d{6,10}$`).test(e);
}
var Ne = new Set([
    `chooser`,
    `otp`,
    `password-signin`,
    `recovery`,
    `password-update`,
    `confirmation`,
  ]),
  Pe = new Set([`google`, `github`, `apple`, `facebook`]),
  Fe = [
    {
      provider: `google`,
      enabled: Q.providers.google,
      icon: (0, X.jsx)(De, { className: `h-5 w-5` }),
    },
    {
      provider: `github`,
      enabled: Q.providers.github,
      icon: (0, X.jsx)(Te, { className: `h-5 w-5` }),
    },
    {
      provider: `apple`,
      enabled: Q.providers.apple,
      icon: (0, X.jsx)(Ee, { className: `h-5 w-5` }),
    },
    {
      provider: `facebook`,
      enabled: Q.providers.facebook,
      icon: (0, X.jsx)(Y, { className: `h-5 w-5 text-blue-500` }),
    },
  ];
function Ie(e, t, n) {
  let r = new URLSearchParams({ entryPoint: t });
  return (
    e !== `/` && r.set(`returnTo`, e),
    n && r.set(`provider`, n),
    `/onboarding?${r.toString()}`
  );
}
function Le() {
  let { t: e } = y(),
    t = i(),
    n = a(),
    [r] = o(),
    {
      user: p,
      loading: m,
      onboardingStatus: h,
      requestEmailOtp: g,
      verifyEmailOtp: _,
      signInWithOAuth: v,
      login: b,
      resetPassword: ue,
      updatePassword: de,
      refreshAccountState: fe,
    } = te(),
    { hasConsent: pe, trackEvent: D } = C(),
    me = r.get(`mode`),
    [O, k] = (0, A.useState)(me && Ne.has(me) ? me : `chooser`),
    [j, M] = (0, A.useState)(``),
    [N, P] = (0, A.useState)(``),
    [he, ge] = (0, A.useState)(``),
    [F, I] = (0, A.useState)(``),
    [L, R] = (0, A.useState)(!1),
    [_e, z] = (0, A.useState)(null),
    [B, ye] = (0, A.useState)(null),
    [V, be] = (0, A.useState)(0),
    [xe, Se] = (0, A.useState)(0),
    [H, Ce] = (0, A.useState)(0),
    U = (0, A.useRef)(!1),
    we = (0, A.useRef)(!1),
    W = (0, A.useMemo)(() => {
      let e = n.state;
      return ne(r.get(`returnTo`) ?? e?.returnTo);
    }, [n.state, r]),
    G = re(r.get(`entryPoint`)),
    K = (0, A.useCallback)(
      (e, t) => ({
        ...(e ? { provider: e } : {}),
        ...(t ? { flow: t } : {}),
        entry_point: G,
        destination_category: T(W),
      }),
      [G, W],
    ),
    q = (0, A.useCallback)((e) => {
      ye(e);
    }, []);
  ((0, A.useEffect)(() => {
    !pe || U.current || ((U.current = !0), D(`auth_view`, K()));
  }, [K, pe, D]),
    (0, A.useEffect)(() => {
      let e = r.get(`errorCategory`);
      e &&
        z({
          category: e === `provider_denied` ? `provider_denied` : `callback`,
          messageKey:
            e === `provider_denied`
              ? `authPage.errors.providerDenied`
              : `authPage.errors.callback`,
        });
    }, [r]),
    (0, A.useEffect)(() => {
      if (!xe) return;
      let e = () => Ce(Math.max(0, Math.ceil((xe - Date.now()) / 1e3)));
      e();
      let t = window.setInterval(e, 1e3);
      return () => window.clearInterval(t);
    }, [xe]),
    (0, A.useEffect)(() => {
      if (we.current || m || !p || h === `loading` || O === `password-update`)
        return;
      we.current = !0;
      let e = `${p.app_metadata?.provider ?? `email`}`,
        n = e === `email` ? `email_otp` : Pe.has(e) ? e : `email_otp`,
        r = ee(p);
      (r && x(p, { provider: n, entryPoint: G, destinationCategory: T(W) }),
        h === `required`
          ? t(Ie(W, G, n), { replace: !0 })
          : h === `complete` &&
            (D(`auth_completed`, {
              ...K(n, `sign_in_or_create`),
              is_new_user: r,
            }),
            t(W, { replace: !0 })));
    }, [K, m, G, O, t, h, W, D, p]));
  let J = () => {
      (ye(null), be((e) => e + 1));
    },
    Te = () =>
      Q.turnstileSiteKey && !B
        ? (z({
            category: `captcha`,
            messageKey: `authPage.errors.captchaRequired`,
          }),
          !1)
        : !0,
    Y = (e, t, n) => {
      let r = le(e);
      (z(r), D(`auth_error`, { ...K(t, n), error_category: r.category }));
    },
    Ee = async (e, n) => {
      D(`auth_verified`, K(e, n));
      let r = await ie({
          provider: e,
          entryPoint: G,
          destinationCategory: T(W),
        }),
        i = await fe();
      if (i === `required`) {
        t(Ie(W, G, e), { replace: !0 });
        return;
      }
      if (i === `complete`) {
        (D(`auth_completed`, { ...K(e, n), is_new_user: r }),
          t(W, { replace: !0 }));
        return;
      }
      throw Error(`Profile state unavailable`);
    },
    De = async () => {
      let e = j.trim().toLowerCase();
      if (!e || !Te()) {
        e ||
          z({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (R(!0),
        z(null),
        D(`auth_method_selected`, K(`email_otp`, `sign_in_or_create`)));
      try {
        (await g(e, B ?? void 0, E(W, `email_otp`, G)),
          M(e),
          I(``),
          k(`otp`),
          Se(Date.now() + Q.resendCooldownSeconds * 1e3),
          D(`auth_email_sent`, K(`email_otp`, `sign_in_or_create`)));
      } catch (e) {
        Y(e, `email_otp`, `sign_in_or_create`);
      } finally {
        (R(!1), J());
      }
    },
    Oe = async () => {
      if (!Me(F)) {
        z({
          category: `validation`,
          messageKey: `authPage.errors.codeRequired`,
        });
        return;
      }
      (R(!0), z(null));
      try {
        (await _(j, F), await Ee(`email_otp`, `sign_in_or_create`));
      } catch (e) {
        Y(e, `email_otp`, `sign_in_or_create`);
      } finally {
        R(!1);
      }
    },
    ke = async (e) => {
      (R(!0), z(null), D(`auth_method_selected`, K(e, `oauth`)));
      try {
        let t = new URL(E(W, `oauth`, G));
        (t.searchParams.set(`provider`, e),
          window.sessionStorage.setItem(`sandscape.auth.provider`, e),
          await v(e, t.toString()));
      } catch (t) {
        (Y(t, e, `oauth`),
          window.sessionStorage.removeItem(`sandscape.auth.provider`),
          R(!1));
      }
    },
    Z = async () => {
      let e = j.trim().toLowerCase();
      if (!e || !N || !Te()) {
        (!e || !N) &&
          z({
            category: `validation`,
            messageKey: `authPage.errors.credentialsRequired`,
          });
        return;
      }
      (R(!0),
        z(null),
        D(`auth_method_selected`, K(`password`, `password_sign_in`)));
      try {
        (await b(e, N, B ?? void 0), await Ee(`password`, `password_sign_in`));
      } catch (e) {
        Y(e, `password`, `password_sign_in`);
      } finally {
        (R(!1), J());
      }
    },
    Le = async () => {
      let e = j.trim().toLowerCase();
      if (!e || !Te()) {
        e ||
          z({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (R(!0), z(null));
      try {
        (await ue(e, E(W, `recovery`, G), B ?? void 0),
          k(`confirmation`),
          D(`auth_email_sent`, K(`password`, `password_recovery`)));
      } catch (e) {
        Y(e, `password`, `password_recovery`);
      } finally {
        (R(!1), J());
      }
    },
    Re = async () => {
      if (N.length < 8) {
        z({
          category: `validation`,
          messageKey: `authPage.errors.passwordTooShort`,
        });
        return;
      }
      if (N !== he) {
        z({
          category: `validation`,
          messageKey: `authPage.errors.passwordMismatch`,
        });
        return;
      }
      if (!p) {
        z({
          category: `callback`,
          messageKey: `authPage.errors.recoverySession`,
        });
        return;
      }
      (R(!0), z(null));
      try {
        (await de(N),
          D(`auth_completed`, {
            ...K(`password`, `password_recovery`),
            is_new_user: !1,
          }),
          t(W, { replace: !0 }));
      } catch (e) {
        Y(e, `password`, `password_recovery`);
      } finally {
        R(!1);
      }
    },
    $ = () => {
      (k(`chooser`), P(``), ge(``), I(``), z(null), J());
    },
    ze = _e ? e(_e.messageKey, e(`authPage.errors.generic`)) : null;
  return m || (p && h === `loading` && O !== `password-update`)
    ? (0, X.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary p-4`,
        children: (0, X.jsx)(u, {
          className: `h-8 w-8 animate-spin text-primary`,
          "aria-label": e(`general.loading`, `Loading...`),
        }),
      })
    : (0, X.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
        children: (0, X.jsxs)(ce, {
          className: `w-full max-w-md border-border/80 shadow-xl`,
          children: [
            (0, X.jsxs)(ae, {
              className: `space-y-3 text-center`,
              children: [
                (0, X.jsx)(`img`, {
                  src: `/Sandscape_Logo_White_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:block hidden`,
                }),
                (0, X.jsx)(`img`, {
                  src: `/Sandscape_Logo_Black_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:hidden`,
                }),
                (0, X.jsx)(`h1`, {
                  className: `text-2xl font-semibold leading-none tracking-tight`,
                  children:
                    O === `otp`
                      ? e(`authPage.codeTitle`, `Enter your code`)
                      : O === `password-update`
                        ? e(
                            `authPage.updatePasswordTitle`,
                            `Set a new password`,
                          )
                        : O === `recovery`
                          ? e(`authPage.recoveryTitle`, `Reset your password`)
                          : O === `confirmation`
                            ? e(`authPage.checkEmailTitle`, `Check your email`)
                            : O === `password-signin`
                              ? e(`authPage.signInTitle`, `Sign in`)
                              : e(
                                  `authPage.title`,
                                  `Sign in or create an account`,
                                ),
                }),
                O !== `password-signin` &&
                  (0, X.jsx)(se, {
                    children:
                      O === `otp`
                        ? e(
                            `authPage.codeDescription`,
                            `Enter the verification code we sent. The same flow works for new and existing accounts.`,
                          )
                        : O === `password-update`
                          ? e(
                              `authPage.updatePasswordDescription`,
                              `Choose a secure password for your Sandscape account.`,
                            )
                          : O === `recovery`
                            ? e(
                                `authPage.recoveryDescription`,
                                `We'll email a secure password-reset link if the address can receive one.`,
                              )
                            : O === `confirmation`
                              ? e(
                                  `authPage.confirmRecoveryDescription`,
                                  `If the address can receive a reset email, it will arrive shortly.`,
                                )
                              : e(
                                  `authPage.description`,
                                  `Continue with a provider or use your email. Account creation is open to everyone.`,
                                ),
                  }),
              ],
            }),
            (0, X.jsxs)(oe, {
              className: `space-y-4`,
              children: [
                ze &&
                  (0, X.jsx)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive`,
                    children: ze,
                  }),
                O === `chooser` &&
                  (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `space-y-2`,
                        children: Fe.filter((e) => e.enabled).map(
                          ({ provider: t, icon: n }) =>
                            (0, X.jsxs)(
                              s,
                              {
                                type: `button`,
                                variant: `outline`,
                                className: `w-full justify-center gap-2`,
                                disabled: L,
                                onClick: () => ke(t),
                                children: [
                                  n,
                                  e(
                                    `authPage.continueWith.${t}`,
                                    `Continue with ${t}`,
                                  ),
                                ],
                              },
                              t,
                            ),
                        ),
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `relative py-1`,
                        "aria-hidden": `true`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center`,
                            children: (0, X.jsx)(`span`, {
                              className: `w-full border-t`,
                            }),
                          }),
                          (0, X.jsx)(`div`, {
                            className: `relative flex justify-center text-xs uppercase`,
                            children: (0, X.jsx)(`span`, {
                              className: `bg-card px-2 text-muted-foreground`,
                              children: e(`authPage.or`, `or`),
                            }),
                          }),
                        ],
                      }),
                      (0, X.jsxs)(`form`, {
                        className: `space-y-4`,
                        onSubmit: (e) => {
                          (e.preventDefault(), De());
                        },
                        children: [
                          (0, X.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, X.jsx)(w, {
                                htmlFor: `auth-email`,
                                children: e(`general.email`, `Email`),
                              }),
                              (0, X.jsx)(S, {
                                id: `auth-email`,
                                type: `email`,
                                autoComplete: `email`,
                                value: j,
                                onChange: (e) => M(e.target.value),
                                placeholder: e(
                                  `authPage.emailPlaceholder`,
                                  `you@example.com`,
                                ),
                                disabled: L,
                                required: !0,
                              }),
                            ],
                          }),
                          (0, X.jsx)(Ae, {
                            siteKey: Q.turnstileSiteKey,
                            resetKey: V,
                            onTokenChange: q,
                          }),
                          (0, X.jsxs)(s, {
                            type: `submit`,
                            className: `w-full`,
                            disabled: L,
                            children: [
                              L
                                ? (0, X.jsx)(u, {
                                    className: `mr-2 h-4 w-4 animate-spin`,
                                  })
                                : (0, X.jsx)(d, { className: `mr-2 h-4 w-4` }),
                              e(
                                `authPage.continueWithEmail`,
                                `Continue with email`,
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: () => {
                          (k(`password-signin`), z(null));
                        },
                        children: [
                          (0, X.jsx)(l, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.usePassword`,
                            `Sign in with a password instead`,
                          ),
                        ],
                      }),
                    ],
                  }),
                O === `otp` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Oe());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `auth-code`,
                            children: e(
                              `authPage.codeLabel`,
                              `Verification code`,
                            ),
                          }),
                          (0, X.jsx)(S, {
                            id: `auth-code`,
                            value: F,
                            onChange: (e) => I(je(e.target.value)),
                            inputMode: `numeric`,
                            autoComplete: `one-time-code`,
                            pattern: `[0-9]{6,10}`,
                            maxLength: 10,
                            className: `text-center text-xl tracking-[0.35em]`,
                            autoFocus: !0,
                            disabled: L,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L || !Me(F),
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.verifyCode`, `Verify code`),
                        ],
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2`,
                        children: [
                          (0, X.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled:
                              L || H > 0 || !!(Q.turnstileSiteKey && !B),
                            onClick: () => void De(),
                            children:
                              H > 0
                                ? e(
                                    `authPage.resendCountdown`,
                                    `Resend in {{seconds}}s`,
                                    { seconds: H },
                                  )
                                : e(`authPage.resendCode`, `Resend code`),
                          }),
                          (0, X.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled: L,
                            onClick: $,
                            children: e(`authPage.changeEmail`, `Change email`),
                          }),
                        ],
                      }),
                      Q.turnstileSiteKey &&
                        H === 0 &&
                        (0, X.jsx)(Ae, {
                          siteKey: Q.turnstileSiteKey,
                          resetKey: V,
                          onTokenChange: q,
                        }),
                    ],
                  }),
                O === `password-signin` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Z());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `password-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, X.jsx)(S, {
                            id: `password-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: j,
                            onChange: (e) => M(e.target.value),
                            disabled: L,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `auth-password`,
                            children: e(`authPage.password`, `Password`),
                          }),
                          (0, X.jsx)(S, {
                            id: `auth-password`,
                            type: `password`,
                            autoComplete: `current-password`,
                            value: N,
                            onChange: (e) => P(e.target.value),
                            disabled: L,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsx)(Ae, {
                        siteKey: Q.turnstileSiteKey,
                        resetKey: V,
                        onTokenChange: q,
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L,
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(
                            `authPage.signInWithPassword`,
                            `Sign in with password`,
                          ),
                        ],
                      }),
                      (0, X.jsx)(s, {
                        type: `button`,
                        variant: `link`,
                        className: `w-full`,
                        onClick: () => k(`recovery`),
                        children: e(
                          `authPage.forgotPassword`,
                          `Forgot password?`,
                        ),
                      }),
                      (0, X.jsx)(`p`, {
                        className: `text-center text-xs text-muted-foreground`,
                        children: e(
                          `authPage.passwordSigninNewAccountHint`,
                          `New to Sandscape? Go back and continue with email. You can set a password while setting up your account.`,
                        ),
                      }),
                      (0, X.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: $,
                        children: [
                          (0, X.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                O === `recovery` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Le());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `recovery-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, X.jsx)(S, {
                            id: `recovery-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: j,
                            onChange: (e) => M(e.target.value),
                            disabled: L,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsx)(Ae, {
                        siteKey: Q.turnstileSiteKey,
                        resetKey: V,
                        onTokenChange: q,
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L,
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.sendRecovery`, `Send reset link`),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: $,
                        children: [
                          (0, X.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                O === `password-update` &&
                  (0, X.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Re());
                    },
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `new-password`,
                            children: e(`authPage.newPassword`, `New password`),
                          }),
                          (0, X.jsx)(S, {
                            id: `new-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: N,
                            onChange: (e) => P(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, X.jsx)(w, {
                            htmlFor: `confirm-password`,
                            children: e(
                              `authPage.confirmPassword`,
                              `Confirm password`,
                            ),
                          }),
                          (0, X.jsx)(S, {
                            id: `confirm-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: he,
                            onChange: (e) => ge(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, X.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: L || !p,
                        children: [
                          L &&
                            (0, X.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.updatePassword`, `Update password`),
                        ],
                      }),
                    ],
                  }),
                O === `confirmation` &&
                  (0, X.jsxs)(`div`, {
                    className: `space-y-4 text-center`,
                    children: [
                      (0, X.jsx)(f, {
                        className: `mx-auto h-12 w-12 text-primary`,
                      }),
                      (0, X.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: e(
                          `authPage.genericEmailNotice`,
                          `For privacy, this message is the same whether or not an account already exists.`,
                        ),
                      }),
                      (0, X.jsx)(s, {
                        type: `button`,
                        variant: `outline`,
                        className: `w-full`,
                        onClick: $,
                        children: e(
                          `authPage.backToOptions`,
                          `Back to sign-in options`,
                        ),
                      }),
                    ],
                  }),
                (0, X.jsx)(`p`, {
                  className: `pt-2 text-center text-xs text-muted-foreground`,
                  children: (0, X.jsx)(ve, {
                    i18nKey: `authPage.legal`,
                    defaults: `By continuing, you agree to Sandscape's <terms>Terms</terms> and acknowledge the <privacy>Privacy Policy</privacy>.`,
                    components: {
                      terms: (0, X.jsx)(`a`, {
                        className: `underline underline-offset-2 hover:text-foreground`,
                        href: `/about/terms`,
                      }),
                      privacy: (0, X.jsx)(`a`, {
                        className: `underline underline-offset-2 hover:text-foreground`,
                        href: `/about/privacy`,
                      }),
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
      });
}
export { Le as AuthPage, Le as default };
