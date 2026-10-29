// Create-CEn7EAZs 103 — createelement
// Lines 33894-34235 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function GD(e) {
  var t = e.offset,
    n = t === void 0 ? 5 : t,
    r = Ase(e, wse),
    i = UD({ offset: n }, r),
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
    ((0, Im.default)(s) &&
      (0, Im.default)(c) &&
      !(0, X.isValidElement)(l) &&
      !(0, $m.default)(l))
  )
    return null;
  if ((0, X.isValidElement)(l)) return (0, X.cloneElement)(l, i);
  var p;
  if ((0, $m.default)(l)) {
    if (((p = (0, X.createElement)(l, i)), (0, X.isValidElement)(p))) return p;
  } else p = Fse(i);
  var m = Bse(a),
    g = lh(i, !0);
  if (m && (o === `insideStart` || o === `insideEnd` || o === `end`))
    return Lse(i, p, g);
  var _ = m ? Rse(i) : zse(i);
  return X.createElement(
    fS,
    WD({ className: h(`recharts-label`, d) }, g, _, { breakAll: f }),
    p,
  );
}
GD.displayName = `Label`;
var KD = function (e) {
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
    if (zm(m) && zm(h)) {
      if (zm(u) && zm(d)) return { x: u, y: d, width: m, height: h };
      if (zm(f) && zm(p)) return { x: f, y: p, width: m, height: h };
    }
    return zm(u) && zm(d)
      ? { x: u, y: d, width: 0, height: 0 }
      : zm(t) && zm(n)
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
  Vse = function (e, t) {
    return e
      ? e === !0
        ? X.createElement(GD, { key: `label-implicit`, viewBox: t })
        : Bm(e)
          ? X.createElement(GD, { key: `label-implicit`, viewBox: t, value: e })
          : (0, X.isValidElement)(e)
            ? e.type === GD
              ? (0, X.cloneElement)(e, { key: `label-implicit`, viewBox: t })
              : X.createElement(GD, {
                  key: `label-implicit`,
                  content: e,
                  viewBox: t,
                })
            : (0, $m.default)(e)
              ? X.createElement(GD, {
                  key: `label-implicit`,
                  content: e,
                  viewBox: t,
                })
              : (0, qm.default)(e)
                ? X.createElement(
                    GD,
                    WD({ viewBox: t }, e, { key: `label-implicit` }),
                  )
                : null
      : null;
  };
((GD.parseViewBox = KD),
  (GD.renderCallByParent = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || (!e.children && n && !e.label)) return null;
    var r = e.children,
      i = KD(e),
      a = oh(r, GD).map(function (e, n) {
        return (0, X.cloneElement)(e, { viewBox: t || i, key: `label-${n}` });
      });
    return n ? [Vse(e.label, t || i)].concat(Tse(a)) : a;
  }));
var Hse = e(
  n((e, t) => {
    function n(e) {
      var t = e == null ? 0 : e.length;
      return t ? e[t - 1] : void 0;
    }
    t.exports = n;
  })(),
);
function qD(e) {
  "@babel/helpers - typeof";
  return (
    (qD =
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
    qD(e)
  );
}
var Use = [`valueAccessor`],
  Wse = [`data`, `dataKey`, `clockWise`, `id`, `textBreakAll`];
function Gse(e) {
  return Yse(e) || Jse(e) || qse(e) || Kse();
}
function Kse() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qse(e, t) {
  if (e) {
    if (typeof e == `string`) return JD(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return JD(e, t);
  }
}
function Jse(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Yse(e) {
  if (Array.isArray(e)) return JD(e);
}
function JD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function YD() {
  return (
    (YD = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    YD.apply(this, arguments)
  );
}
function XD(e, t) {
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
function ZD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? XD(Object(n), !0).forEach(function (t) {
          Xse(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : XD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Xse(e, t, n) {
  return (
    (t = Zse(t)),
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
function Zse(e) {
  var t = Qse(e, `string`);
  return qD(t) == `symbol` ? t : t + ``;
}
function Qse(e, t) {
  if (qD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (qD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function QD(e, t) {
  if (e == null) return {};
  var n = $se(e, t),
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
function $se(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var ece = function (e) {
  return Array.isArray(e.value) ? (0, Hse.default)(e.value) : e.value;
};
function $D(e) {
  var t = e.valueAccessor,
    n = t === void 0 ? ece : t,
    r = QD(e, Use),
    i = r.data,
    a = r.dataKey,
    o = r.clockWise,
    s = r.id,
    c = r.textBreakAll,
    l = QD(r, Wse);
  return !i || !i.length
    ? null
    : X.createElement(
        gh,
        { className: `recharts-label-list` },
        i.map(function (e, t) {
          var r = (0, Im.default)(a) ? n(e, t) : mD(e && e.payload, a),
            i = (0, Im.default)(s) ? {} : { id: `${s}-${t}` };
          return X.createElement(
            GD,
            YD({}, lh(e, !0), l, i, {
              parentViewBox: e.parentViewBox,
              value: r,
              textBreakAll: c,
              viewBox: GD.parseViewBox(
                (0, Im.default)(o) ? e : ZD(ZD({}, e), {}, { clockWise: o }),
              ),
              key: `label-${t}`,
              index: t,
            }),
          );
        }),
      );
}
$D.displayName = `LabelList`;
function tce(e, t) {
  return e
    ? e === !0
      ? X.createElement($D, { key: `labelList-implicit`, data: t })
      : X.isValidElement(e) || (0, $m.default)(e)
        ? X.createElement($D, {
            key: `labelList-implicit`,
            data: t,
            content: e,
          })
        : (0, qm.default)(e)
          ? X.createElement(
              $D,
              YD({ data: t }, e, { key: `labelList-implicit` }),
            )
          : null
    : null;
}
function nce(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && n && !e.label)) return null;
  var r = e.children,
    i = oh(r, $D).map(function (e, n) {
      return (0, X.cloneElement)(e, { data: t, key: `labelList-${n}` });
    });
  return n ? [tce(e.label, t)].concat(Gse(i)) : i;
}
$D.renderCallByParent = nce;
