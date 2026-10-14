// assets__Create-ea24k1TY 101 — createelement
// Lines 33121-33462 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function PD(e) {
  var t = e.offset,
    n = t === void 0 ? 5 : t,
    r = lse(e, rse),
    i = MD({ offset: n }, r),
    a = i.viewBox,
    o = i.position,
    s = i.value,
    c = i.children,
    l = i.content,
    u = i.className,
    d = u === void 0 ? `` : u,
    f = i.textBreakAll;
  if (
    !a ||
    ((0, ah.default)(s) &&
      (0, ah.default)(c) &&
      !(0, X.isValidElement)(l) &&
      !(0, Sh.default)(l))
  )
    return null;
  if ((0, X.isValidElement)(l)) return (0, X.cloneElement)(l, i);
  var p;
  if ((0, Sh.default)(l)) {
    if (((p = (0, X.createElement)(l, i)), (0, X.isValidElement)(p))) return p;
  } else p = mse(i);
  var m = yse(a),
    g = Mh(i, !0);
  if (m && (o === `insideStart` || o === `insideEnd` || o === `end`))
    return gse(i, p, g);
  var _ = m ? _se(i) : vse(i);
  return X.createElement(
    pb,
    ND({ className: h(`recharts-label`, d) }, g, _, { breakAll: f }),
    p,
  );
}
PD.displayName = `Label`;
var FD = function (e) {
    var t = e.cx,
      n = e.cy,
      r = e.angle,
      i = e.startAngle,
      a = e.endAngle,
      o = e.r,
      s = e.radius,
      c = e.innerRadius,
      l = e.outerRadius,
      u = e.x,
      d = e.y,
      f = e.top,
      p = e.left,
      m = e.width,
      h = e.height,
      g = e.clockWise,
      _ = e.labelViewBox;
    if (_) return _;
    if (ch(m) && ch(h)) {
      if (ch(u) && ch(d)) return { x: u, y: d, width: m, height: h };
      if (ch(f) && ch(p)) return { x: f, y: p, width: m, height: h };
    }
    return ch(u) && ch(d)
      ? { x: u, y: d, width: 0, height: 0 }
      : ch(t) && ch(n)
        ? {
            cx: t,
            cy: n,
            startAngle: i || r || 0,
            endAngle: a || r || 0,
            innerRadius: c || 0,
            outerRadius: l || s || o || 0,
            clockWise: g,
          }
        : e.viewBox
          ? e.viewBox
          : {};
  },
  bse = function (e, t) {
    return e
      ? e === !0
        ? X.createElement(PD, { key: `label-implicit`, viewBox: t })
        : lh(e)
          ? X.createElement(PD, { key: `label-implicit`, viewBox: t, value: e })
          : (0, X.isValidElement)(e)
            ? e.type === PD
              ? (0, X.cloneElement)(e, { key: `label-implicit`, viewBox: t })
              : X.createElement(PD, {
                  key: `label-implicit`,
                  content: e,
                  viewBox: t,
                })
            : (0, Sh.default)(e)
              ? X.createElement(PD, {
                  key: `label-implicit`,
                  content: e,
                  viewBox: t,
                })
              : (0, gh.default)(e)
                ? X.createElement(
                    PD,
                    ND({ viewBox: t }, e, { key: `label-implicit` }),
                  )
                : null
      : null;
  };
((PD.parseViewBox = FD),
  (PD.renderCallByParent = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && n && !e.label)) return null;
    var r = e.children,
      i = FD(e),
      a = kh(r, PD).map(function (e, n) {
        return (0, X.cloneElement)(e, { viewBox: t || i, key: `label-${n}` });
      });
    return n ? [bse(e.label, t || i)].concat(ise(a)) : a;
  }));
var xse = e(
  n((e, t) => {
    function n(e) {
      var t = e == null ? 0 : e.length;
      return t ? e[t - 1] : void 0;
    }
    t.exports = n;
  })(),
);
function ID(e) {
  "@babel/helpers - typeof";
  return (
    (ID =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    ID(e)
  );
}
var Sse = [`valueAccessor`],
  Cse = [`data`, `dataKey`, `clockWise`, `id`, `textBreakAll`];
function wse(e) {
  return Ose(e) || Dse(e) || Ese(e) || Tse();
}
function Tse() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ese(e, t) {
  if (e) {
    if (typeof e == `string`) return LD(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return LD(e, t);
  }
}
function Dse(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Ose(e) {
  if (Array.isArray(e)) return LD(e);
}
function LD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function RD() {
  return (
    (RD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    RD.apply(this, arguments)
  );
}
function zD(e, t) {
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
function BD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zD(Object(n), !0).forEach(function (t) {
          kse(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kse(e, t, n) {
  return (
    (t = Ase(t)),
    t in e
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
function Ase(e) {
  var t = jse(e, `string`);
  return ID(t) == `symbol` ? t : t + ``;
}
function jse(e, t) {
  if (ID(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (ID(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function VD(e, t) {
  if (e == null) return {};
  var n = Mse(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function Mse(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var Nse = function (e) {
  return Array.isArray(e.value) ? (0, xse.default)(e.value) : e.value;
};
function HD(e) {
  var t = e.valueAccessor,
    n = t === void 0 ? Nse : t,
    r = VD(e, Sse),
    i = r.data,
    a = r.dataKey,
    o = r.clockWise,
    s = r.id,
    c = r.textBreakAll,
    l = VD(r, Cse);
  return !i || !i.length
    ? null
    : X.createElement(
        zh,
        { className: `recharts-label-list` },
        i.map(function (e, t) {
          var r = (0, ah.default)(a) ? n(e, t) : rD(e && e.payload, a),
            i = (0, ah.default)(s) ? {} : { id: `${s}-${t}` };
          return X.createElement(
            PD,
            RD({}, Mh(e, !0), l, i, {
              parentViewBox: e.parentViewBox,
              value: r,
              textBreakAll: c,
              viewBox: PD.parseViewBox(
                (0, ah.default)(o) ? e : BD(BD({}, e), {}, { clockWise: o }),
              ),
              key: `label-${t}`,
              index: t,
            }),
          );
        }),
      );
}
HD.displayName = `LabelList`;
function Pse(e, t) {
  return e
    ? e === !0
      ? X.createElement(HD, { key: `labelList-implicit`, data: t })
      : X.isValidElement(e) || (0, Sh.default)(e)
        ? X.createElement(HD, {
            key: `labelList-implicit`,
            data: t,
            content: e,
          })
        : (0, gh.default)(e)
          ? X.createElement(
              HD,
              RD({ data: t }, e, { key: `labelList-implicit` }),
            )
          : null
    : null;
}
function Fse(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && n && !e.label)) return null;
  var r = e.children,
    i = kh(r, HD).map(function (e, n) {
      return (0, X.cloneElement)(e, { data: t, key: `labelList-${n}` });
    });
  return n ? [Pse(e.label, t)].concat(wse(i)) : i;
}
HD.renderCallByParent = Fse;
