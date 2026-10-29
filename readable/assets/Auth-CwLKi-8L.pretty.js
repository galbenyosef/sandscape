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
var A = {
    parse: function (e, t) {
      ((t ||= {}), (t.components ||= pe));
      var n,
        r = [],
        i = [],
        a = -1,
        o = !1;
      if (e.indexOf(`<`) !== 0) {
        var s = e.indexOf(`<`);
        r.push({ type: `text`, content: s === -1 ? e : e.substring(0, s) });
      }
      for (var c, l = []; (c = fe.exec(e));) l.push(c);
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
              var b = de(u);
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
                (n = de(u)).type === `tag` &&
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
              (O.test(C) && (C = ` `),
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
        return e + k(``, t);
      }, ``);
    },
  },
  j = e(n()),
  M = (e, t) => {
    if (!e) return !1;
    let n = e.props?.children ?? e.children;
    return t ? n.length > 0 : !!n;
  },
  N = (e) => {
    if (!e) return [];
    let t = e.props?.children ?? e.children;
    return e.props?.i18nIsDynamicList ? F(t) : t;
  },
  P = (e) => Array.isArray(e) && e.every(j.isValidElement),
  F = (e) => (Array.isArray(e) ? e : [e]),
  me = (e, t) => {
    let n = { ...t };
    return ((n.props = Object.assign(e.props, t.props)), n);
  },
  he = (e, t, n, r) => {
    if (!e) return ``;
    let i = ``,
      a = F(e),
      o = t?.transSupportBasicHtmlNodes
        ? (t.transKeepBasicHtmlNodesFor ?? [])
        : [];
    return (
      a.forEach((e, a) => {
        if (m(e)) {
          i += `${e}`;
          return;
        }
        if ((0, j.isValidElement)(e)) {
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
          let f = he(d, t, n, r);
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
  I = (e, t, n, r, i, a, o) => {
    if (n === ``) return [];
    let s = i.transKeepBasicHtmlNodesFor || [],
      c = n && new RegExp(s.map((e) => `<${e}`).join(`|`)).test(n);
    if (!e && !t && !c && !o) return [n];
    let l = t ?? {},
      u = (e) => {
        F(e).forEach((e) => {
          m(e) ||
            (M(e)
              ? u(N(e))
              : v(e) && !(0, j.isValidElement)(e) && Object.assign(l, e));
        });
      };
    u(e);
    let d = A.parse(`<0>${n}</0>`),
      f = { ...l, ...a },
      p = (e, t, n) => {
        let r = N(e),
          i = g(r, t.children, n);
        return (P(r) && i.length === 0) || e.props?.i18nIsDynamicList ? r : i;
      },
      h = (e, t, n, r, i) => {
        e.dummy
          ? ((e.children = t),
            n.push((0, j.cloneElement)(e, { key: r }, i ? void 0 : t)))
          : n.push(
              ...j.Children.map([e], (e) => {
                let n = { ...e.props };
                return (
                  delete n.i18nIsDynamicList,
                  (0, j.createElement)(
                    e.type,
                    { ...n, key: r, ref: e.props.ref ?? e.ref },
                    i ? null : t,
                  )
                );
              }),
            );
      },
      g = (e, n, a) => {
        let l = F(e);
        return F(n).reduce((e, n, u) => {
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
                  : me({ props: n.attrs }, o),
              y = (0, j.isValidElement)(_),
              b = y && M(n, !0) && !n.voidElement,
              x = c && v(_) && _.dummy && !y,
              S = v(t) && Object.hasOwnProperty.call(t, n.name);
            if (m(_)) {
              let t = r.services.interpolator.interpolate(_, f, r.language);
              e.push(t);
            } else if (M(_) || b) {
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
                    (0, j.createElement)(n.name, { key: `${n.name}-${u}` }),
                  );
                else {
                  let t = g(l, n.children, a);
                  e.push(
                    (0, j.createElement)(n.name, { key: `${n.name}-${u}` }, t),
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
              ? e.push((0, j.createElement)(t, { key: `${n.name}-${u}` }, a))
              : e.push(a);
          }
          return e;
        }, []);
      };
    return N(g([{ dummy: !0, children: e || [] }], d, F(e || []))[0]);
  },
  L = (e, t, n) => {
    let r = e.key || t,
      i = (0, j.cloneElement)(e, { key: r });
    if (
      !i.props ||
      !i.props.children ||
      (n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)
    )
      return i;
    function a() {
      return (0, j.createElement)(j.Fragment, null, i);
    }
    return (0, j.createElement)(a, { key: r });
  },
  R = (e, t) => e.map((e, n) => L(e, n, t)),
  z = (e, t) => {
    let n = {};
    return (
      Object.keys(e).forEach((r) => {
        Object.assign(n, { [r]: L(e[r], r, t) });
      }),
      n
    );
  },
  ge = (e, t, n, r) =>
    e
      ? Array.isArray(e)
        ? R(e, t)
        : v(e)
          ? z(e, t)
          : (b(
              n,
              `TRANS_INVALID_COMPONENTS`,
              `<Trans /> "components" prop expects an object or array`,
              { i18nKey: r },
            ),
            null)
      : null,
  B = (e) =>
    !v(e) || Array.isArray(e)
      ? !1
      : Object.keys(e).reduce(
          (e, t) => e && Number.isNaN(Number.parseFloat(t)),
          !0,
        );
function V({
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
  let S = he(e, y, g, r),
    C = s || S || y.transEmptyNodeValue || r,
    { hashTransKey: w } = y,
    ee = r || (w ? w(S || C) : S || C);
  g.options?.interpolation?.defaultVariables &&
    (o =
      o && Object.keys(o).length > 0
        ? { ...o, ...g.options.interpolation.defaultVariables }
        : { ...g.options.interpolation.defaultVariables });
  let T =
      o || (t !== void 0 && !g.options?.interpolation?.alwaysFormat) || !e
        ? a.interpolation
        : {
            interpolation: { ...a.interpolation, prefix: `#$?`, suffix: `?$#` },
          },
    E = {
      ...a,
      context: i || a.context,
      count: t,
      ...o,
      ...T,
      defaultValue: C,
      ns: x,
    },
    te = ee ? v(ee, E) : C,
    D = ge(c, te, g, r),
    ne = D || e,
    re = null;
  B(D) && ((re = D), (ne = e));
  let ie = I(ne, re, te, g, y, E, f),
    ae = n ?? y.defaultTransParent;
  return ae ? (0, j.createElement)(ae, h, ie) : ie;
}
function _e({
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
  let { i18n: m, defaultNS: h } = (0, j.useContext)(g) || {},
    v = u || m || _(),
    y = d || v?.t.bind(v);
  return V({
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
var ve = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  H = j.createContext && j.createContext(ve),
  ye = [`attr`, `size`, `title`];
function be(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xe(e, t);
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
function xe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function U() {
  return (
    (U = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    U.apply(null, arguments)
  );
}
function Se(e, t) {
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
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Se(Object(n), !0).forEach(function (t) {
          Ce(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Se(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ce(e, t, n) {
  return (
    (t = G(t)) in e
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
function G(e) {
  var t = K(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function K(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function q(e) {
  return (
    e &&
    e.map((e, t) => j.createElement(e.tag, W({ key: t }, e.attr), q(e.child)))
  );
}
function J(e) {
  return (t) => j.createElement(Y, U({ attr: W({}, e.attr) }, t), q(e.child));
}
function Y(e) {
  var t = (t) => {
    var n = e.attr,
      r = e.size,
      i = e.title,
      a = be(e, ye),
      o = r || t.size || `1em`,
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + ` ` : ``) + e.className),
      j.createElement(
        `svg`,
        U(
          { stroke: `currentColor`, fill: `currentColor`, strokeWidth: `0` },
          t.attr,
          n,
          a,
          {
            className: s,
            style: W(W({ color: e.color || t.color }, t.style), e.style),
            height: o,
            width: o,
            xmlns: `http://www.w3.org/2000/svg`,
          },
        ),
        i && j.createElement(`title`, null, i),
        e.children,
      )
    );
  };
  return H === void 0 ? t(ve) : j.createElement(H.Consumer, null, (e) => t(e));
}
function we(e) {
  return J({
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
function X(e) {
  return J({
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
function Te(e) {
  return J({
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
function Ee(e) {
  return J({
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
var Z = r(),
  De = null;
function Oe() {
  return window.turnstile
    ? Promise.resolve()
    : De ||
        ((De = new Promise((e, t) => {
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
        De);
}
function ke({ siteKey: e, resetKey: t, onTokenChange: n }) {
  let r = (0, j.useRef)(null);
  return (
    (0, j.useEffect)(() => {
      if (!e || !r.current) return;
      let t = !1,
        i = null;
      return (
        n(null),
        Oe()
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
      ? (0, Z.jsx)(`div`, {
          ref: r,
          className: `flex min-h-[65px] justify-center`,
          "aria-label": `Security verification`,
        })
      : null
  );
}
function Q(e, t) {
  return e == null || e === `` ? t : e.toLowerCase() === `true`;
}
var $ = {
  providers: {
    google: Q(void 0, !0),
    github: Q(void 0, !1),
    apple: Q(void 0, !1),
    facebook: Q(void 0, !1),
  },
  turnstileSiteKey: void 0,
  resendCooldownSeconds: 60,
};
function Ae(e) {
  return e.replace(/\D/g, ``).slice(0, 10);
}
function je(e) {
  return RegExp(`^\\d{6,10}$`).test(e);
}
var Me = new Set([
    `chooser`,
    `otp`,
    `password-signin`,
    `recovery`,
    `password-update`,
    `confirmation`,
  ]),
  Ne = new Set([`google`, `github`, `apple`, `facebook`]),
  Pe = [
    {
      provider: `google`,
      enabled: $.providers.google,
      icon: (0, Z.jsx)(Ee, { className: `h-5 w-5` }),
    },
    {
      provider: `github`,
      enabled: $.providers.github,
      icon: (0, Z.jsx)(we, { className: `h-5 w-5` }),
    },
    {
      provider: `apple`,
      enabled: $.providers.apple,
      icon: (0, Z.jsx)(Te, { className: `h-5 w-5` }),
    },
    {
      provider: `facebook`,
      enabled: $.providers.facebook,
      icon: (0, Z.jsx)(X, { className: `h-5 w-5 text-blue-500` }),
    },
  ];
function Fe(e, t, n) {
  let r = new URLSearchParams({ entryPoint: t });
  return (
    e !== `/` && r.set(`returnTo`, e),
    n && r.set(`provider`, n),
    `/onboarding?${r.toString()}`
  );
}
function Ie() {
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
      resetPassword: le,
      updatePassword: ue,
      refreshAccountState: de,
    } = C(),
    { hasConsent: fe, trackEvent: O } = re(),
    pe = r.get(`mode`),
    [k, A] = (0, j.useState)(pe && Me.has(pe) ? pe : `chooser`),
    [M, N] = (0, j.useState)(``),
    [P, F] = (0, j.useState)(``),
    [me, he] = (0, j.useState)(``),
    [I, L] = (0, j.useState)(``),
    [R, z] = (0, j.useState)(!1),
    [ge, B] = (0, j.useState)(null),
    [V, ve] = (0, j.useState)(null),
    [H, ye] = (0, j.useState)(0),
    [be, xe] = (0, j.useState)(0),
    [U, Se] = (0, j.useState)(0),
    W = (0, j.useRef)(!1),
    Ce = (0, j.useRef)(!1),
    G = (0, j.useMemo)(() => {
      let e = n.state;
      return te(r.get(`returnTo`) ?? e?.returnTo);
    }, [n.state, r]),
    K = ne(r.get(`entryPoint`)),
    q = (0, j.useCallback)(
      (e, t) => ({
        ...(e ? { provider: e } : {}),
        ...(t ? { flow: t } : {}),
        entry_point: K,
        destination_category: E(G),
      }),
      [K, G],
    ),
    J = (0, j.useCallback)((e) => {
      ve(e);
    }, []);
  ((0, j.useEffect)(() => {
    !fe || W.current || ((W.current = !0), O(`auth_view`, q()));
  }, [q, fe, O]),
    (0, j.useEffect)(() => {
      let e = r.get(`errorCategory`);
      e &&
        B({
          category: e === `provider_denied` ? `provider_denied` : `callback`,
          messageKey:
            e === `provider_denied`
              ? `authPage.errors.providerDenied`
              : `authPage.errors.callback`,
        });
    }, [r]),
    (0, j.useEffect)(() => {
      if (!be) return;
      let e = () => Se(Math.max(0, Math.ceil((be - Date.now()) / 1e3)));
      e();
      let t = window.setInterval(e, 1e3);
      return () => window.clearInterval(t);
    }, [be]),
    (0, j.useEffect)(() => {
      if (Ce.current || m || !p || h === `loading` || k === `password-update`)
        return;
      Ce.current = !0;
      let e = `${p.app_metadata?.provider ?? `email`}`,
        n = e === `email` ? `email_otp` : Ne.has(e) ? e : `email_otp`,
        r = x(p);
      (r && S(p, { provider: n, entryPoint: K, destinationCategory: E(G) }),
        h === `required`
          ? t(Fe(G, K, n), { replace: !0 })
          : h === `complete` &&
            (O(`auth_completed`, {
              ...q(n, `sign_in_or_create`),
              is_new_user: r,
            }),
            t(G, { replace: !0 })));
    }, [q, m, K, k, t, h, G, O, p]));
  let Y = () => {
      (ve(null), ye((e) => e + 1));
    },
    we = () =>
      $.turnstileSiteKey && !V
        ? (B({
            category: `captcha`,
            messageKey: `authPage.errors.captchaRequired`,
          }),
          !1)
        : !0,
    X = (e, t, n) => {
      let r = ce(e);
      (B(r), O(`auth_error`, { ...q(t, n), error_category: r.category }));
    },
    Te = async (e, n) => {
      O(`auth_verified`, q(e, n));
      let r = await ee({
          provider: e,
          entryPoint: K,
          destinationCategory: E(G),
        }),
        i = await de();
      if (i === `required`) {
        t(Fe(G, K, e), { replace: !0 });
        return;
      }
      if (i === `complete`) {
        (O(`auth_completed`, { ...q(e, n), is_new_user: r }),
          t(G, { replace: !0 }));
        return;
      }
      throw Error(`Profile state unavailable`);
    },
    Ee = async () => {
      let e = M.trim().toLowerCase();
      if (!e || !we()) {
        e ||
          B({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (z(!0),
        B(null),
        O(`auth_method_selected`, q(`email_otp`, `sign_in_or_create`)));
      try {
        (await g(e, V ?? void 0, D(G, `email_otp`, K)),
          N(e),
          L(``),
          A(`otp`),
          xe(Date.now() + $.resendCooldownSeconds * 1e3),
          O(`auth_email_sent`, q(`email_otp`, `sign_in_or_create`)));
      } catch (e) {
        X(e, `email_otp`, `sign_in_or_create`);
      } finally {
        (z(!1), Y());
      }
    },
    De = async () => {
      if (!je(I)) {
        B({
          category: `validation`,
          messageKey: `authPage.errors.codeRequired`,
        });
        return;
      }
      (z(!0), B(null));
      try {
        (await _(M, I), await Te(`email_otp`, `sign_in_or_create`));
      } catch (e) {
        X(e, `email_otp`, `sign_in_or_create`);
      } finally {
        z(!1);
      }
    },
    Oe = async (e) => {
      (z(!0), B(null), O(`auth_method_selected`, q(e, `oauth`)));
      try {
        let t = new URL(D(G, `oauth`, K));
        (t.searchParams.set(`provider`, e),
          window.sessionStorage.setItem(`sandscape.auth.provider`, e),
          await v(e, t.toString()));
      } catch (t) {
        (X(t, e, `oauth`),
          window.sessionStorage.removeItem(`sandscape.auth.provider`),
          z(!1));
      }
    },
    Q = async () => {
      let e = M.trim().toLowerCase();
      if (!e || !P || !we()) {
        (!e || !P) &&
          B({
            category: `validation`,
            messageKey: `authPage.errors.credentialsRequired`,
          });
        return;
      }
      (z(!0),
        B(null),
        O(`auth_method_selected`, q(`password`, `password_sign_in`)));
      try {
        (await b(e, P, V ?? void 0), await Te(`password`, `password_sign_in`));
      } catch (e) {
        X(e, `password`, `password_sign_in`);
      } finally {
        (z(!1), Y());
      }
    },
    Ie = async () => {
      let e = M.trim().toLowerCase();
      if (!e || !we()) {
        e ||
          B({
            category: `validation`,
            messageKey: `authPage.errors.emailRequired`,
          });
        return;
      }
      (z(!0), B(null));
      try {
        (await le(e, D(G, `recovery`, K), V ?? void 0),
          A(`confirmation`),
          O(`auth_email_sent`, q(`password`, `password_recovery`)));
      } catch (e) {
        X(e, `password`, `password_recovery`);
      } finally {
        (z(!1), Y());
      }
    },
    Le = async () => {
      if (P.length < 8) {
        B({
          category: `validation`,
          messageKey: `authPage.errors.passwordTooShort`,
        });
        return;
      }
      if (P !== me) {
        B({
          category: `validation`,
          messageKey: `authPage.errors.passwordMismatch`,
        });
        return;
      }
      if (!p) {
        B({
          category: `callback`,
          messageKey: `authPage.errors.recoverySession`,
        });
        return;
      }
      (z(!0), B(null));
      try {
        (await ue(P),
          O(`auth_completed`, {
            ...q(`password`, `password_recovery`),
            is_new_user: !1,
          }),
          t(G, { replace: !0 }));
      } catch (e) {
        X(e, `password`, `password_recovery`);
      } finally {
        z(!1);
      }
    },
    Re = () => {
      (A(`chooser`), F(``), he(``), L(``), B(null), Y());
    },
    ze = ge ? e(ge.messageKey, e(`authPage.errors.generic`)) : null;
  return m || (p && h === `loading` && k !== `password-update`)
    ? (0, Z.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary p-4`,
        children: (0, Z.jsx)(u, {
          className: `h-8 w-8 animate-spin text-primary`,
          "aria-label": e(`general.loading`, `Loading...`),
        }),
      })
    : (0, Z.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary px-4 py-10`,
        children: (0, Z.jsxs)(se, {
          className: `w-full max-w-md border-border/80 shadow-xl`,
          children: [
            (0, Z.jsxs)(ie, {
              className: `space-y-3 text-center`,
              children: [
                (0, Z.jsx)(`img`, {
                  src: `/Sandscape_Logo_White_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:block hidden`,
                }),
                (0, Z.jsx)(`img`, {
                  src: `/Sandscape_Logo_Black_Large.png`,
                  alt: `Sandscape`,
                  className: `mx-auto h-9 w-auto dark:hidden`,
                }),
                (0, Z.jsx)(`h1`, {
                  className: `text-2xl font-semibold leading-none tracking-tight`,
                  children:
                    k === `otp`
                      ? e(`authPage.codeTitle`, `Enter your code`)
                      : k === `password-update`
                        ? e(
                            `authPage.updatePasswordTitle`,
                            `Set a new password`,
                          )
                        : k === `recovery`
                          ? e(`authPage.recoveryTitle`, `Reset your password`)
                          : k === `confirmation`
                            ? e(`authPage.checkEmailTitle`, `Check your email`)
                            : k === `password-signin`
                              ? e(`authPage.signInTitle`, `Sign in`)
                              : e(
                                  `authPage.title`,
                                  `Sign in or create an account`,
                                ),
                }),
                k !== `password-signin` &&
                  (0, Z.jsx)(oe, {
                    children:
                      k === `otp`
                        ? e(
                            `authPage.codeDescription`,
                            `Enter the verification code we sent. The same flow works for new and existing accounts.`,
                          )
                        : k === `password-update`
                          ? e(
                              `authPage.updatePasswordDescription`,
                              `Choose a secure password for your Sandscape account.`,
                            )
                          : k === `recovery`
                            ? e(
                                `authPage.recoveryDescription`,
                                `We'll email a secure password-reset link if the address can receive one.`,
                              )
                            : k === `confirmation`
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
            (0, Z.jsxs)(ae, {
              className: `space-y-4`,
              children: [
                ze &&
                  (0, Z.jsx)(`div`, {
                    role: `alert`,
                    className: `rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive`,
                    children: ze,
                  }),
                k === `chooser` &&
                  (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `space-y-2`,
                        children: Pe.filter((e) => e.enabled).map(
                          ({ provider: t, icon: n }) =>
                            (0, Z.jsxs)(
                              s,
                              {
                                type: `button`,
                                variant: `outline`,
                                className: `w-full justify-center gap-2`,
                                disabled: R,
                                onClick: () => Oe(t),
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
                      (0, Z.jsxs)(`div`, {
                        className: `relative py-1`,
                        "aria-hidden": `true`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center`,
                            children: (0, Z.jsx)(`span`, {
                              className: `w-full border-t`,
                            }),
                          }),
                          (0, Z.jsx)(`div`, {
                            className: `relative flex justify-center text-xs uppercase`,
                            children: (0, Z.jsx)(`span`, {
                              className: `bg-card px-2 text-muted-foreground`,
                              children: e(`authPage.or`, `or`),
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`form`, {
                        className: `space-y-4`,
                        onSubmit: (e) => {
                          (e.preventDefault(), Ee());
                        },
                        children: [
                          (0, Z.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Z.jsx)(w, {
                                htmlFor: `auth-email`,
                                children: e(`general.email`, `Email`),
                              }),
                              (0, Z.jsx)(T, {
                                id: `auth-email`,
                                type: `email`,
                                autoComplete: `email`,
                                value: M,
                                onChange: (e) => N(e.target.value),
                                placeholder: e(
                                  `authPage.emailPlaceholder`,
                                  `you@example.com`,
                                ),
                                disabled: R,
                                required: !0,
                              }),
                            ],
                          }),
                          (0, Z.jsx)(ke, {
                            siteKey: $.turnstileSiteKey,
                            resetKey: H,
                            onTokenChange: J,
                          }),
                          (0, Z.jsxs)(s, {
                            type: `submit`,
                            className: `w-full`,
                            disabled: R,
                            children: [
                              R
                                ? (0, Z.jsx)(u, {
                                    className: `mr-2 h-4 w-4 animate-spin`,
                                  })
                                : (0, Z.jsx)(d, { className: `mr-2 h-4 w-4` }),
                              e(
                                `authPage.continueWithEmail`,
                                `Continue with email`,
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: () => {
                          (A(`password-signin`), B(null));
                        },
                        children: [
                          (0, Z.jsx)(l, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.usePassword`,
                            `Sign in with a password instead`,
                          ),
                        ],
                      }),
                    ],
                  }),
                k === `otp` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), De());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `auth-code`,
                            children: e(
                              `authPage.codeLabel`,
                              `Verification code`,
                            ),
                          }),
                          (0, Z.jsx)(T, {
                            id: `auth-code`,
                            value: I,
                            onChange: (e) => L(Ae(e.target.value)),
                            inputMode: `numeric`,
                            autoComplete: `one-time-code`,
                            pattern: `[0-9]{6,10}`,
                            maxLength: 10,
                            className: `text-center text-xl tracking-[0.35em]`,
                            autoFocus: !0,
                            disabled: R,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R || !je(I),
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.verifyCode`, `Verify code`),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2`,
                        children: [
                          (0, Z.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled:
                              R || U > 0 || !!($.turnstileSiteKey && !V),
                            onClick: () => void Ee(),
                            children:
                              U > 0
                                ? e(
                                    `authPage.resendCountdown`,
                                    `Resend in {{seconds}}s`,
                                    { seconds: U },
                                  )
                                : e(`authPage.resendCode`, `Resend code`),
                          }),
                          (0, Z.jsx)(s, {
                            type: `button`,
                            variant: `outline`,
                            disabled: R,
                            onClick: Re,
                            children: e(`authPage.changeEmail`, `Change email`),
                          }),
                        ],
                      }),
                      $.turnstileSiteKey &&
                        U === 0 &&
                        (0, Z.jsx)(ke, {
                          siteKey: $.turnstileSiteKey,
                          resetKey: H,
                          onTokenChange: J,
                        }),
                    ],
                  }),
                k === `password-signin` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Q());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `password-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `password-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: M,
                            onChange: (e) => N(e.target.value),
                            disabled: R,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `auth-password`,
                            children: e(`authPage.password`, `Password`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `auth-password`,
                            type: `password`,
                            autoComplete: `current-password`,
                            value: P,
                            onChange: (e) => F(e.target.value),
                            disabled: R,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsx)(ke, {
                        siteKey: $.turnstileSiteKey,
                        resetKey: H,
                        onTokenChange: J,
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R,
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(
                            `authPage.signInWithPassword`,
                            `Sign in with password`,
                          ),
                        ],
                      }),
                      (0, Z.jsx)(s, {
                        type: `button`,
                        variant: `link`,
                        className: `w-full`,
                        onClick: () => A(`recovery`),
                        children: e(
                          `authPage.forgotPassword`,
                          `Forgot password?`,
                        ),
                      }),
                      (0, Z.jsx)(`p`, {
                        className: `text-center text-xs text-muted-foreground`,
                        children: e(
                          `authPage.passwordSigninNewAccountHint`,
                          `New to Sandscape? Go back and continue with email. You can set a password while setting up your account.`,
                        ),
                      }),
                      (0, Z.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: Re,
                        children: [
                          (0, Z.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                k === `recovery` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Ie());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `recovery-email`,
                            children: e(`general.email`, `Email`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `recovery-email`,
                            type: `email`,
                            autoComplete: `email`,
                            value: M,
                            onChange: (e) => N(e.target.value),
                            disabled: R,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsx)(ke, {
                        siteKey: $.turnstileSiteKey,
                        resetKey: H,
                        onTokenChange: J,
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R,
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.sendRecovery`, `Send reset link`),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `button`,
                        variant: `ghost`,
                        className: `w-full`,
                        onClick: Re,
                        children: [
                          (0, Z.jsx)(c, { className: `mr-2 h-4 w-4` }),
                          e(
                            `authPage.backToOptions`,
                            `Back to sign-in options`,
                          ),
                        ],
                      }),
                    ],
                  }),
                k === `password-update` &&
                  (0, Z.jsxs)(`form`, {
                    className: `space-y-4`,
                    onSubmit: (e) => {
                      (e.preventDefault(), Le());
                    },
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `new-password`,
                            children: e(`authPage.newPassword`, `New password`),
                          }),
                          (0, Z.jsx)(T, {
                            id: `new-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: P,
                            onChange: (e) => F(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Z.jsx)(w, {
                            htmlFor: `confirm-password`,
                            children: e(
                              `authPage.confirmPassword`,
                              `Confirm password`,
                            ),
                          }),
                          (0, Z.jsx)(T, {
                            id: `confirm-password`,
                            type: `password`,
                            autoComplete: `new-password`,
                            value: me,
                            onChange: (e) => he(e.target.value),
                            minLength: 8,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)(s, {
                        type: `submit`,
                        className: `w-full`,
                        disabled: R || !p,
                        children: [
                          R &&
                            (0, Z.jsx)(u, {
                              className: `mr-2 h-4 w-4 animate-spin`,
                            }),
                          e(`authPage.updatePassword`, `Update password`),
                        ],
                      }),
                    ],
                  }),
                k === `confirmation` &&
                  (0, Z.jsxs)(`div`, {
                    className: `space-y-4 text-center`,
                    children: [
                      (0, Z.jsx)(f, {
                        className: `mx-auto h-12 w-12 text-primary`,
                      }),
                      (0, Z.jsx)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: e(
                          `authPage.genericEmailNotice`,
                          `For privacy, this message is the same whether or not an account already exists.`,
                        ),
                      }),
                      (0, Z.jsx)(s, {
                        type: `button`,
                        variant: `outline`,
                        className: `w-full`,
                        onClick: Re,
                        children: e(
                          `authPage.backToOptions`,
                          `Back to sign-in options`,
                        ),
                      }),
                    ],
                  }),
                (0, Z.jsx)(`p`, {
                  className: `pt-2 text-center text-xs text-muted-foreground`,
                  children: (0, Z.jsx)(_e, {
                    i18nKey: `authPage.legal`,
                    defaults: `By continuing, you agree to Sandscape's <terms>Terms</terms> and acknowledge the <privacy>Privacy Policy</privacy>.`,
                    components: {
                      terms: (0, Z.jsx)(`a`, {
                        className: `underline underline-offset-2 hover:text-foreground`,
                        href: `/about/terms`,
                      }),
                      privacy: (0, Z.jsx)(`a`, {
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
export { Ie as AuthPage, Ie as default };
