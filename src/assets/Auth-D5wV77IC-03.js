// Auth-D5wV77IC 03 — attr
// Lines 456-797 of readable/assets/Auth-D5wV77IC.pretty.js (statement-aligned).
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
