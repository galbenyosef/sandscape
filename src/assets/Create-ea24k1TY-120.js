// Create-ea24k1TY 120 — createcontext
// Lines 39334-39656 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var $M = function (e) {
    var t = Object.keys(e).reduce(function (t, n) {
      return KM(KM({}, t), {}, qM({}, n, QM.create(e[n])));
    }, {});
    return KM(
      KM({}, t),
      {},
      {
        apply: function (e) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            r = n.bandAware,
            i = n.position;
          return (0, zM.default)(e, function (e, n) {
            return t[n].apply(e, { bandAware: r, position: i });
          });
        },
        isInRange: function (e) {
          return (0, BM.default)(e, function (e, n) {
            return t[n].isInRange(e);
          });
        },
      },
    );
  },
  eN = n((e, t) => {
    var n = y_(),
      r = u_(),
      i = d_();
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
  tN = n((e, t) => {
    var n = $j();
    function r(e) {
      var t = n(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    t.exports = r;
  }),
  nN = n((e, t) => {
    var n = b_(),
      r = y_(),
      i = tN(),
      a = Math.max;
    function o(e, t, o) {
      var s = e == null ? 0 : e.length;
      if (!s) return -1;
      var c = o == null ? 0 : i(o);
      return (c < 0 && (c = a(s + c, 0)), n(e, r(t, 3), c));
    }
    t.exports = o;
  }),
  rN = n((e, t) => {
    t.exports = eN()(nN());
  }),
  iN = (0, e(Jm()).default)(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return [`l`, e.left, `t`, e.top, `w`, e.width, `h`, e.height].join(``);
    },
  );
rN();
var aN = (0, X.createContext)(void 0),
  oN = (0, X.createContext)(void 0),
  sN = (0, X.createContext)(void 0),
  cN = (0, X.createContext)({}),
  lN = (0, X.createContext)(void 0),
  uN = (0, X.createContext)(0),
  dN = (0, X.createContext)(0),
  fN = function (e) {
    var t = e.state,
      n = t.xAxisMap,
      r = t.yAxisMap,
      i = t.offset,
      a = e.clipPathId,
      o = e.children,
      s = e.width,
      c = e.height,
      l = iN(i);
    return X.createElement(
      aN.Provider,
      { value: n },
      X.createElement(
        oN.Provider,
        { value: r },
        X.createElement(
          cN.Provider,
          { value: i },
          X.createElement(
            sN.Provider,
            { value: l },
            X.createElement(
              lN.Provider,
              { value: a },
              X.createElement(
                uN.Provider,
                { value: c },
                X.createElement(dN.Provider, { value: s }, o),
              ),
            ),
          ),
        ),
      ),
    );
  },
  pN = function () {
    return (0, X.useContext)(lN);
  },
  mN = function (e) {
    var t = (0, X.useContext)(aN);
    t ?? NE(!1);
    var n = t[e];
    return (n ?? NE(!1), n);
  },
  hN = function (e) {
    var t = (0, X.useContext)(oN);
    t ?? NE(!1);
    var n = t[e];
    return (n ?? NE(!1), n);
  },
  gN = function () {
    return (0, X.useContext)(sN);
  },
  _N = e(MM());
function vN(e) {
  "@babel/helpers - typeof";
  return (
    (vN =
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
    vN(e)
  );
}
function yN(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function bN(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, MN(r.key), r));
  }
}
function xN(e, t, n) {
  return (
    t && bN(e.prototype, t),
    n && bN(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function SN(e, t, n) {
  return (
    (t = EN(t)),
    CN(
      e,
      TN() ? Reflect.construct(t, n || [], EN(e).constructor) : t.apply(e, n),
    )
  );
}
function CN(e, t) {
  if (t && (vN(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return wN(e);
}
function wN(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function TN() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (TN = function () {
    return !!e;
  })();
}
function EN(e) {
  return (
    (EN = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    EN(e)
  );
}
function DN(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ON(e, t));
}
function ON(e, t) {
  return (
    (ON = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    ON(e, t)
  );
}
function kN(e, t) {
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
function AN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kN(Object(n), !0).forEach(function (t) {
          jN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jN(e, t, n) {
  return (
    (t = MN(t)),
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
function MN(e) {
  var t = NN(e, `string`);
  return vN(t) == `symbol` ? t : t + ``;
}
function NN(e, t) {
  if (vN(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (vN(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function PN(e, t) {
  return zN(e) || RN(e, t) || IN(e, t) || FN();
}
function FN() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IN(e, t) {
  if (e) {
    if (typeof e == `string`) return LN(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return LN(e, t);
  }
}
function LN(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
