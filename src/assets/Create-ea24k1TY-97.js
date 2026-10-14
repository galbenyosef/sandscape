// Create-ea24k1TY 97 — props
// Lines 31590-31838 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function GE(e, t) {
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
function KE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? GE(Object(n), !0).forEach(function (t) {
          yoe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : GE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yoe(e, t, n) {
  return (
    (t = boe(t)),
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
function boe(e) {
  var t = xoe(e, `string`);
  return WE(t) == `symbol` ? t : t + ``;
}
function xoe(e, t) {
  if (WE(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (WE(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var qE = function (e) {
    var t = e.children,
      n = e.formattedGraphicalItems,
      r = e.legendWidth,
      i = e.legendContent,
      a = Ah(t, X_);
    if (!a) return null;
    var o = X_.defaultProps,
      s = o === void 0 ? {} : KE(KE({}, o), a.props),
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
                  r = n === void 0 ? {} : KE(KE({}, n), t.props),
                  i = r.dataKey,
                  a = r.name,
                  o = r.legendType;
                return {
                  inactive: r.hide,
                  dataKey: i,
                  type: s.iconType || o || `square`,
                  color: aD(t),
                  value: a || i,
                  payload: r,
                };
              });
    return KE(
      KE(KE({}, s), X_.getWithHeight(a, r)),
      {},
      { payload: c, item: a },
    );
  },
  JE = e(KT()),
  YE = e(JT()),
  Soe = e(XT()),
  XE = e(ZT());
function ZE(e) {
  "@babel/helpers - typeof";
  return (
    (ZE =
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
    ZE(e)
  );
}
function QE(e) {
  return Eoe(e) || Toe(e) || woe(e) || Coe();
}
function Coe() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function woe(e, t) {
  if (e) {
    if (typeof e == `string`) return $E(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $E(e, t);
  }
}
function Toe(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Eoe(e) {
  if (Array.isArray(e)) return $E(e);
}
function $E(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function eD(e, t) {
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
function tD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? eD(Object(n), !0).forEach(function (t) {
          nD(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nD(e, t, n) {
  return (
    (t = Doe(t)),
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
function Doe(e) {
  var t = Ooe(e, `string`);
  return ZE(t) == `symbol` ? t : t + ``;
}
function Ooe(e, t) {
  if (ZE(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (ZE(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rD(e, t, n) {
  return (0, ah.default)(e) || (0, ah.default)(t)
    ? n
    : lh(t)
      ? (0, ih.default)(e, t, n)
      : (0, Sh.default)(t)
        ? t(e)
        : n;
}
function iD(e, t, n, r) {
  var i = (0, Soe.default)(e, function (e) {
    return rD(e, t);
  });
  if (n === `number`) {
    var a = i.filter(function (e) {
      return ch(e) || parseFloat(e);
    });
    return a.length
      ? [(0, YE.default)(a), (0, JE.default)(a)]
      : [1 / 0, -1 / 0];
  }
  return (
    r
      ? i.filter(function (e) {
          return !(0, ah.default)(e);
        })
      : i
  ).map(function (e) {
    return lh(e) || e instanceof Date ? e : ``;
  });
}
