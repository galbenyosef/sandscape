// Create-CEn7EAZs 122 — createcontext
// Lines 40107-40429 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var hN = function (e) {
    var t = Object.keys(e).reduce(function (t, n) {
      return cN(cN({}, t), {}, lN({}, n, mN.create(e[n])));
    }, {});
    return cN(
      cN({}, t),
      {},
      {
        apply: function (e) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            r = n.bandAware,
            i = n.position;
          return (0, tN.default)(e, function (e, n) {
            return t[n].apply(e, { bandAware: r, position: i });
          });
        },
        isInRange: function (e) {
          return (0, nN.default)(e, function (e, n) {
            return t[n].isInRange(e);
          });
        },
      },
    );
  },
  gN = n((e, t) => {
    var n = jv(),
      r = sv(),
      i = cv();
    function a(e) {
      return function (t, a, o) {
        var s = Object(t);
        if (!r(t)) {
          var c = n(a, 3);
          ((t = i(t)),
            (a = function (e) {
              return c(s[e], e, s);
            }));
        }
        var l = e(t, a, o);
        return l > -1 ? s[c ? t[l] : l] : void 0;
      };
    }
    t.exports = a;
  }),
  _N = n((e, t) => {
    var n = hM();
    function r(e) {
      var t = n(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    t.exports = r;
  }),
  vN = n((e, t) => {
    var n = Mv(),
      r = jv(),
      i = _N(),
      a = Math.max;
    function o(e, t, o) {
      var s = e == null ? 0 : e.length;
      if (!s) return -1;
      var c = o == null ? 0 : i(o);
      return (c < 0 && (c = a(s + c, 0)), n(e, r(t, 3), c));
    }
    t.exports = o;
  }),
  yN = n((e, t) => {
    t.exports = gN()(vN());
  }),
  bN = (0, e(Tm()).default)(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return [`l`, e.left, `t`, e.top, `w`, e.width, `h`, e.height].join(``);
    },
  );
yN();
var xN = (0, X.createContext)(void 0),
  SN = (0, X.createContext)(void 0),
  CN = (0, X.createContext)(void 0),
  wN = (0, X.createContext)({}),
  TN = (0, X.createContext)(void 0),
  EN = (0, X.createContext)(0),
  DN = (0, X.createContext)(0),
  ON = function (e) {
    var t = e.state,
      n = t.xAxisMap,
      r = t.yAxisMap,
      i = t.offset,
      a = e.clipPathId,
      o = e.children,
      s = e.width,
      c = e.height,
      l = bN(i);
    return X.createElement(
      xN.Provider,
      { value: n },
      X.createElement(
        SN.Provider,
        { value: r },
        X.createElement(
          wN.Provider,
          { value: i },
          X.createElement(
            CN.Provider,
            { value: l },
            X.createElement(
              TN.Provider,
              { value: a },
              X.createElement(
                EN.Provider,
                { value: c },
                X.createElement(DN.Provider, { value: s }, o),
              ),
            ),
          ),
        ),
      ),
    );
  },
  kN = function () {
    return (0, X.useContext)(TN);
  },
  AN = function (e) {
    var t = (0, X.useContext)(xN);
    t ?? WE(!1);
    var n = t[e];
    return (n ?? WE(!1), n);
  },
  jN = function (e) {
    var t = (0, X.useContext)(SN);
    t ?? WE(!1);
    var n = t[e];
    return (n ?? WE(!1), n);
  },
  MN = function () {
    return (0, X.useContext)(CN);
  },
  NN = e(JM());
function PN(e) {
  "@babel/helpers - typeof";
  return (
    (PN =
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
    PN(e)
  );
}
function FN(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function IN(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, JN(r.key), r));
  }
}
function LN(e, t, n) {
  return (
    t && IN(e.prototype, t),
    n && IN(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function RN(e, t, n) {
  return (
    (t = HN(t)),
    zN(
      e,
      VN() ? Reflect.construct(t, n || [], HN(e).constructor) : t.apply(e, n),
    )
  );
}
function zN(e, t) {
  if (t && (PN(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return BN(e);
}
function BN(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function VN() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (VN = function () {
    return !!e;
  })();
}
function HN(e) {
  return (
    (HN = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    HN(e)
  );
}
function UN(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && WN(e, t));
}
function WN(e, t) {
  return (
    (WN = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    WN(e, t)
  );
}
function GN(e, t) {
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
function KN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? GN(Object(n), !0).forEach(function (t) {
          qN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : GN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function qN(e, t, n) {
  return (
    (t = JN(t)),
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
function JN(e) {
  var t = YN(e, `string`);
  return PN(t) == `symbol` ? t : t + ``;
}
function YN(e, t) {
  if (PN(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (PN(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function XN(e, t) {
  return tP(e) || eP(e, t) || QN(e, t) || ZN();
}
function ZN() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QN(e, t) {
  if (e) {
    if (typeof e == `string`) return $N(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $N(e, t);
  }
}
function $N(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
