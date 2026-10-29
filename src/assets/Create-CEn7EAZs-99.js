// Create-CEn7EAZs 99 — props
// Lines 32363-32611 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function nD(e, t) {
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
function rD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nD(Object(n), !0).forEach(function (t) {
          Boe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Boe(e, t, n) {
  return (
    (t = Voe(t)),
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
function Voe(e) {
  var t = Hoe(e, `string`);
  return tD(t) == `symbol` ? t : t + ``;
}
function Hoe(e, t) {
  if (tD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (tD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var iD = function (e) {
    var t = e.children,
      n = e.formattedGraphicalItems,
      r = e.legendWidth,
      i = e.legendContent,
      a = sh(t, dy);
    if (!a) return null;
    var o = dy.defaultProps,
      s = o === void 0 ? {} : rD(rD({}, o), a.props),
      c =
        a.props && a.props.payload
          ? a.props && a.props.payload
          : i === `children`
            ? (n || []).reduce(function (e, t) {
                var n = t.item,
                  r = t.props,
                  i = r.sectors || r.data || [];
                return e.concat(
                  i.map(function (e) {
                    return {
                      type: a.props.iconType || n.props.legendType,
                      value: e.name,
                      color: e.fill,
                      payload: e,
                    };
                  }),
                );
              }, [])
            : (n || []).map(function (e) {
                var t = e.item,
                  n = t.type.defaultProps,
                  r = n === void 0 ? {} : rD(rD({}, n), t.props),
                  i = r.dataKey,
                  a = r.name,
                  o = r.legendType;
                return {
                  inactive: r.hide,
                  dataKey: i,
                  type: s.iconType || o || `square`,
                  color: gD(t),
                  value: a || i,
                  payload: r,
                };
              });
    return rD(
      rD(rD({}, s), dy.getWithHeight(a, r)),
      {},
      { payload: c, item: a },
    );
  },
  aD = e(Xae()),
  oD = e(Zae()),
  Uoe = e($ae()),
  sD = e(eoe());
function cD(e) {
  "@babel/helpers - typeof";
  return (
    (cD =
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
    cD(e)
  );
}
function lD(e) {
  return qoe(e) || Koe(e) || Goe(e) || Woe();
}
function Woe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Goe(e, t) {
  if (e) {
    if (typeof e == `string`) return uD(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return uD(e, t);
  }
}
function Koe(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function qoe(e) {
  if (Array.isArray(e)) return uD(e);
}
function uD(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function dD(e, t) {
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
function fD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dD(Object(n), !0).forEach(function (t) {
          pD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pD(e, t, n) {
  return (
    (t = Joe(t)),
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
function Joe(e) {
  var t = Yoe(e, `string`);
  return cD(t) == `symbol` ? t : t + ``;
}
function Yoe(e, t) {
  if (cD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (cD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function mD(e, t, n) {
  return (0, Im.default)(e) || (0, Im.default)(t)
    ? n
    : Bm(t)
      ? (0, Fm.default)(e, t, n)
      : (0, $m.default)(t)
        ? t(e)
        : n;
}
function hD(e, t, n, r) {
  var i = (0, Uoe.default)(e, function (e) {
    return mD(e, t);
  });
  if (n === `number`) {
    var a = i.filter(function (e) {
      return zm(e) || parseFloat(e);
    });
    return a.length
      ? [(0, oD.default)(a), (0, aD.default)(a)]
      : [1 / 0, -1 / 0];
  }
  return (
    r
      ? i.filter(function (e) {
          return !(0, Im.default)(e);
        })
      : i
  ).map(function (e) {
    return Bm(e) || e instanceof Date ? e : ``;
  });
}
