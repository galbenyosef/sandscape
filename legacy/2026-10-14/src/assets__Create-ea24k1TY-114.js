// assets__Create-ea24k1TY 114 — symbol
// Lines 37375-37648 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Sj(e) {
  var t = e.option,
    n = e.shapeType,
    r = e.propTransformer,
    i = r === void 0 ? vj : r,
    a = e.activeClassName,
    o = a === void 0 ? `recharts-active-shape` : a,
    s = e.isActive,
    c = dj(e, lj),
    l;
  if ((0, X.isValidElement)(t))
    l = (0, X.cloneElement)(t, mj(mj({}, c), xj(t)));
  else if ((0, Sh.default)(t)) l = t(c);
  else if ((0, sj.default)(t) && !(0, cj.default)(t)) {
    var u = i(t, c);
    l = X.createElement(bj, { shapeType: n, elementProps: u });
  } else {
    var d = c;
    l = X.createElement(bj, { shapeType: n, elementProps: d });
  }
  return s ? X.createElement(zh, { className: o }, l) : l;
}
function Cj(e, t) {
  return t != null && `trapezoids` in e.props;
}
function wj(e, t) {
  return t != null && `sectors` in e.props;
}
function Tj(e, t) {
  return t != null && `points` in e.props;
}
function Ej(e, t) {
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
function Dj(e, t) {
  var n = e.endAngle === t.endAngle,
    r = e.startAngle === t.startAngle;
  return n && r;
}
function Oj(e, t) {
  var n = e.x === t.x,
    r = e.y === t.y,
    i = e.z === t.z;
  return n && r && i;
}
function kj(e, t) {
  var n;
  return (Cj(e, t) ? (n = Ej) : wj(e, t) ? (n = Dj) : Tj(e, t) && (n = Oj), n);
}
function Aj(e, t) {
  var n;
  return (
    Cj(e, t)
      ? (n = `trapezoids`)
      : wj(e, t)
        ? (n = `sectors`)
        : Tj(e, t) && (n = `points`),
    n
  );
}
function jj(e, t) {
  if (Cj(e, t)) {
    var n;
    return (n = t.tooltipPayload) == null ||
      (n = n[0]) == null ||
      (n = n.payload) == null
      ? void 0
      : n.payload;
  }
  if (wj(e, t)) {
    var r;
    return (r = t.tooltipPayload) == null ||
      (r = r[0]) == null ||
      (r = r.payload) == null
      ? void 0
      : r.payload;
  }
  return Tj(e, t) ? t.payload : {};
}
function Mj(e) {
  var t = e.activeTooltipItem,
    n = e.graphicalItem,
    r = e.itemData,
    i = Aj(n, t),
    a = jj(n, t),
    o = r.filter(function (e, r) {
      var o = (0, XE.default)(a, e),
        s = n.props[i].filter(function (e) {
          return kj(n, t)(e, t);
        }),
        c = r === n.props[i].indexOf(s[s.length - 1]);
      return o && c;
    });
  return r.indexOf(o[o.length - 1]);
}
var Nj;
function Pj(e) {
  "@babel/helpers - typeof";
  return (
    (Pj =
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
    Pj(e)
  );
}
function Fj() {
  return (
    (Fj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fj.apply(this, arguments)
  );
}
function Ij(e, t) {
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
function Lj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ij(Object(n), !0).forEach(function (t) {
          Jj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ij(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Rj(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function zj(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Yj(r.key), r));
  }
}
function Bj(e, t, n) {
  return (
    t && zj(e.prototype, t),
    n && zj(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Vj(e, t, n) {
  return (
    (t = Gj(t)),
    Hj(
      e,
      Wj() ? Reflect.construct(t, n || [], Gj(e).constructor) : t.apply(e, n),
    )
  );
}
function Hj(e, t) {
  if (t && (Pj(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return Uj(e);
}
function Uj(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function Wj() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Wj = function () {
    return !!e;
  })();
}
function Gj(e) {
  return (
    (Gj = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Gj(e)
  );
}
function Kj(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && qj(e, t));
}
function qj(e, t) {
  return (
    (qj = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    qj(e, t)
  );
}
function Jj(e, t, n) {
  return (
    (t = Yj(t)),
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
function Yj(e) {
  var t = Xj(e, `string`);
  return Pj(t) == `symbol` ? t : t + ``;
}
function Xj(e, t) {
  if (Pj(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Pj(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
