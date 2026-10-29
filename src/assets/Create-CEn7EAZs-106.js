// Create-CEn7EAZs 106 — symbol
// Lines 34927-35268 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Fce(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function EO(e, t, n, r) {
  return (r === wce || r === Cce || r === Sce) && (e.$$typeof || t.$$typeof)
    ? !0
    : xce(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
var Ice = `[object ArrayBuffer]`,
  Lce = `[object Arguments]`,
  Rce = `[object Boolean]`,
  zce = `[object DataView]`,
  Bce = `[object Date]`,
  Vce = `[object Error]`,
  Hce = `[object Map]`,
  Uce = `[object Number]`,
  Wce = `[object Object]`,
  Gce = `[object RegExp]`,
  Kce = `[object Set]`,
  qce = `[object String]`,
  Jce = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  Yce = `[object URL]`,
  Xce = Object.prototype.toString;
function Zce({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: n,
  areDatesEqual: r,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: s,
  areObjectsEqual: c,
  arePrimitiveWrappersEqual: l,
  areRegExpsEqual: u,
  areSetsEqual: d,
  areTypedArraysEqual: f,
  areUrlsEqual: p,
  unknownTagComparators: m,
}) {
  return function (h, g, _) {
    if (h === g) return !0;
    if (h == null || g == null) return !1;
    let v = typeof h;
    if (v !== typeof g) return !1;
    if (v !== `object`)
      return v === `number` ? s(h, g, _) : v === `function` && a(h, g, _);
    let y = h.constructor;
    if (y !== g.constructor) return !1;
    if (y === Object) return c(h, g, _);
    if (Array.isArray(h)) return t(h, g, _);
    if (y === Date) return r(h, g, _);
    if (y === RegExp) return u(h, g, _);
    if (y === Map) return o(h, g, _);
    if (y === Set) return d(h, g, _);
    let b = Xce.call(h);
    if (b === Bce) return r(h, g, _);
    if (b === Gce) return u(h, g, _);
    if (b === Hce) return o(h, g, _);
    if (b === Kce) return d(h, g, _);
    if (b === Wce)
      return (
        typeof h.then != `function` && typeof g.then != `function` && c(h, g, _)
      );
    if (b === Yce) return p(h, g, _);
    if (b === Vce) return i(h, g, _);
    if (b === Lce) return c(h, g, _);
    if (Jce[b]) return f(h, g, _);
    if (b === Ice) return e(h, g, _);
    if (b === zce) return n(h, g, _);
    if (b === Rce || b === Uce || b === qce) return l(h, g, _);
    if (m) {
      let e = m[b];
      if (!e) {
        let t = bce(h);
        t && (e = m[t]);
      }
      if (e) return e(h, g, _);
    }
    return !1;
  };
}
function Qce({ circular: e, createCustomConfig: t, strict: n }) {
  let r = {
    areArrayBuffersEqual: Tce,
    areArraysEqual: n ? CO : Ece,
    areDataViewsEqual: Dce,
    areDatesEqual: Oce,
    areErrorsEqual: kce,
    areFunctionsEqual: Ace,
    areMapsEqual: n ? gO(SO, CO) : SO,
    areNumbersEqual: jce,
    areObjectsEqual: n ? CO : Mce,
    arePrimitiveWrappersEqual: Nce,
    areRegExpsEqual: Pce,
    areSetsEqual: n ? gO(wO, CO) : wO,
    areTypedArraysEqual: n ? gO(TO, CO) : TO,
    areUrlsEqual: Fce,
    unknownTagComparators: void 0,
  };
  if ((t && (r = Object.assign({}, r, t(r))), e)) {
    let e = _O(r.areArraysEqual),
      t = _O(r.areMapsEqual),
      n = _O(r.areObjectsEqual),
      i = _O(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: e,
      areMapsEqual: t,
      areObjectsEqual: n,
      areSetsEqual: i,
    });
  }
  return r;
}
function $ce(e) {
  return function (t, n, r, i, a, o, s) {
    return e(t, n, s);
  };
}
function ele({
  circular: e,
  comparator: t,
  createState: n,
  equals: r,
  strict: i,
}) {
  if (n)
    return function (a, o) {
      let { cache: s = e ? new WeakMap() : void 0, meta: c } = n();
      return t(a, o, { cache: s, equals: r, meta: c, strict: i });
    };
  if (e)
    return function (e, n) {
      return t(e, n, {
        cache: new WeakMap(),
        equals: r,
        meta: void 0,
        strict: i,
      });
    };
  let a = { cache: void 0, equals: r, meta: void 0, strict: i };
  return function (e, n) {
    return t(e, n, a);
  };
}
var tle = DO();
(DO({ strict: !0 }),
  DO({ circular: !0 }),
  DO({ circular: !0, strict: !0 }),
  DO({ createInternalComparator: () => yO }),
  DO({ strict: !0, createInternalComparator: () => yO }),
  DO({ circular: !0, createInternalComparator: () => yO }),
  DO({ circular: !0, createInternalComparator: () => yO, strict: !0 }));
function DO(e = {}) {
  let {
      circular: t = !1,
      createInternalComparator: n,
      createState: r,
      strict: i = !1,
    } = e,
    a = Zce(Qce(e));
  return ele({
    circular: t,
    comparator: a,
    createState: r,
    equals: n ? n(a) : $ce(a),
    strict: i,
  });
}
function nle(e) {
  typeof requestAnimationFrame < `u` && requestAnimationFrame(e);
}
function OO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = -1;
  requestAnimationFrame(function r(i) {
    (n < 0 && (n = i), i - n > t ? (e(i), (n = -1)) : nle(r));
  });
}
function kO(e) {
  "@babel/helpers - typeof";
  return (
    (kO =
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
    kO(e)
  );
}
function rle(e) {
  return sle(e) || ole(e) || ale(e) || ile();
}
function ile() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ale(e, t) {
  if (e) {
    if (typeof e == `string`) return AO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return AO(e, t);
  }
}
function AO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ole(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function sle(e) {
  if (Array.isArray(e)) return e;
}
function cle() {
  var e = {},
    t = function () {
      return null;
    },
    n = !1,
    r = function r(i) {
      if (!n) {
        if (Array.isArray(i)) {
          if (!i.length) return;
          var a = rle(i),
            o = a[0],
            s = a.slice(1);
          if (typeof o == `number`) {
            OO(r.bind(null, s), o);
            return;
          }
          (r(o), OO(r.bind(null, s)));
          return;
        }
        (kO(i) === `object` && ((e = i), t(e)), typeof i == `function` && i());
      }
    };
  return {
    stop: function () {
      n = !0;
    },
    start: function (e) {
      ((n = !1), r(e));
    },
    subscribe: function (e) {
      return (
        (t = e),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function jO(e) {
  "@babel/helpers - typeof";
  return (
    (jO =
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
    jO(e)
  );
}
function MO(e, t) {
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
function NO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? MO(Object(n), !0).forEach(function (t) {
          PO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : MO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
