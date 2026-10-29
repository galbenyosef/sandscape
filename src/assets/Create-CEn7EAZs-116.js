// Create-CEn7EAZs 116 — symbol
// Lines 38148-38421 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Rj(e) {
  var t = e.option,
    n = e.shapeType,
    r = e.propTransformer,
    i = r === void 0 ? Pj : r,
    a = e.activeClassName,
    o = a === void 0 ? `recharts-active-shape` : a,
    s = e.isActive,
    c = Dj(e, Tj),
    l;
  if ((0, X.isValidElement)(t))
    l = (0, X.cloneElement)(t, Aj(Aj({}, c), Lj(t)));
  else if ((0, $m.default)(t)) l = t(c);
  else if ((0, Cj.default)(t) && !(0, wj.default)(t)) {
    var u = i(t, c);
    l = X.createElement(Ij, { shapeType: n, elementProps: u });
  } else {
    var d = c;
    l = X.createElement(Ij, { shapeType: n, elementProps: d });
  }
  return s ? X.createElement(gh, { className: o }, l) : l;
}
function zj(e, t) {
  return t != null && `trapezoids` in e.props;
}
function Bj(e, t) {
  return t != null && `sectors` in e.props;
}
function Vj(e, t) {
  return t != null && `points` in e.props;
}
function Hj(e, t) {
  var n,
    r,
    i =
      e.x === (t == null || (n = t.labelViewBox) == null ? void 0 : n.x) ||
      e.x === t.x,
    a =
      e.y === (t == null || (r = t.labelViewBox) == null ? void 0 : r.y) ||
      e.y === t.y;
  return i && a;
}
function Uj(e, t) {
  var n = e.endAngle === t.endAngle,
    r = e.startAngle === t.startAngle;
  return n && r;
}
function Wj(e, t) {
  var n = e.x === t.x,
    r = e.y === t.y,
    i = e.z === t.z;
  return n && r && i;
}
function Gj(e, t) {
  var n;
  return (zj(e, t) ? (n = Hj) : Bj(e, t) ? (n = Uj) : Vj(e, t) && (n = Wj), n);
}
function Kj(e, t) {
  var n;
  return (
    zj(e, t)
      ? (n = `trapezoids`)
      : Bj(e, t)
        ? (n = `sectors`)
        : Vj(e, t) && (n = `points`),
    n
  );
}
function qj(e, t) {
  if (zj(e, t)) {
    var n;
    return (n = t.tooltipPayload) == null ||
      (n = n[0]) == null ||
      (n = n.payload) == null
      ? void 0
      : n.payload;
  }
  if (Bj(e, t)) {
    var r;
    return (r = t.tooltipPayload) == null ||
      (r = r[0]) == null ||
      (r = r.payload) == null
      ? void 0
      : r.payload;
  }
  return Vj(e, t) ? t.payload : {};
}
function Jj(e) {
  var t = e.activeTooltipItem,
    n = e.graphicalItem,
    r = e.itemData,
    i = Kj(n, t),
    a = qj(n, t),
    o = r.filter(function (e, r) {
      var o = (0, sD.default)(a, e),
        s = n.props[i].filter(function (e) {
          return Gj(n, t)(e, t);
        }),
        c = r === n.props[i].indexOf(s[s.length - 1]);
      return o && c;
    });
  return r.indexOf(o[o.length - 1]);
}
var Yj;
function Xj(e) {
  "@babel/helpers - typeof";
  return (
    (Xj =
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
    Xj(e)
  );
}
function Zj() {
  return (
    (Zj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zj.apply(this, arguments)
  );
}
function Qj(e, t) {
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
function $j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qj(Object(n), !0).forEach(function (t) {
          uM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function eM(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function tM(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, dM(r.key), r));
  }
}
function nM(e, t, n) {
  return (
    t && tM(e.prototype, t),
    n && tM(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function rM(e, t, n) {
  return (
    (t = sM(t)),
    iM(
      e,
      oM() ? Reflect.construct(t, n || [], sM(e).constructor) : t.apply(e, n),
    )
  );
}
function iM(e, t) {
  if (t && (Xj(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return aM(e);
}
function aM(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function oM() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (oM = function () {
    return !!e;
  })();
}
function sM(e) {
  return (
    (sM = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    sM(e)
  );
}
function cM(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && lM(e, t));
}
function lM(e, t) {
  return (
    (lM = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    lM(e, t)
  );
}
function uM(e, t, n) {
  return (
    (t = dM(t)),
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
function dM(e) {
  var t = fM(e, `string`);
  return Xj(t) == `symbol` ? t : t + ``;
}
function fM(e, t) {
  if (Xj(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Xj(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
