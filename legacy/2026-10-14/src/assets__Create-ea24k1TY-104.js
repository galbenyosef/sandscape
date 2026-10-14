// assets__Create-ea24k1TY 104 — symbol
// Lines 34154-34495 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function mce(e, t) {
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
function hO(e, t, n, r) {
  return (r === rce || r === nce || r === tce) && (e.$$typeof || t.$$typeof)
    ? !0
    : ece(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
var hce = `[object ArrayBuffer]`,
  gce = `[object Arguments]`,
  _ce = `[object Boolean]`,
  vce = `[object DataView]`,
  yce = `[object Date]`,
  bce = `[object Error]`,
  xce = `[object Map]`,
  Sce = `[object Number]`,
  Cce = `[object Object]`,
  wce = `[object RegExp]`,
  Tce = `[object Set]`,
  Ece = `[object String]`,
  Dce = {
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
  Oce = `[object URL]`,
  kce = Object.prototype.toString;
function Ace({
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
    let b = kce.call(h);
    if (b === yce) return r(h, g, _);
    if (b === wce) return u(h, g, _);
    if (b === xce) return o(h, g, _);
    if (b === Tce) return d(h, g, _);
    if (b === Cce)
      return (
        typeof h.then != `function` && typeof g.then != `function` && c(h, g, _)
      );
    if (b === Oce) return p(h, g, _);
    if (b === bce) return i(h, g, _);
    if (b === gce) return c(h, g, _);
    if (Dce[b]) return f(h, g, _);
    if (b === hce) return e(h, g, _);
    if (b === vce) return n(h, g, _);
    if (b === _ce || b === Sce || b === Ece) return l(h, g, _);
    if (m) {
      let e = m[b];
      if (!e) {
        let t = $se(h);
        t && (e = m[t]);
      }
      if (e) return e(h, g, _);
    }
    return !1;
  };
}
function jce({ circular: e, createCustomConfig: t, strict: n }) {
  let r = {
    areArrayBuffersEqual: ice,
    areArraysEqual: n ? fO : ace,
    areDataViewsEqual: oce,
    areDatesEqual: sce,
    areErrorsEqual: cce,
    areFunctionsEqual: lce,
    areMapsEqual: n ? aO(dO, fO) : dO,
    areNumbersEqual: uce,
    areObjectsEqual: n ? fO : dce,
    arePrimitiveWrappersEqual: fce,
    areRegExpsEqual: pce,
    areSetsEqual: n ? aO(pO, fO) : pO,
    areTypedArraysEqual: n ? aO(mO, fO) : mO,
    areUrlsEqual: mce,
    unknownTagComparators: void 0,
  };
  if ((t && (r = Object.assign({}, r, t(r))), e)) {
    let e = oO(r.areArraysEqual),
      t = oO(r.areMapsEqual),
      n = oO(r.areObjectsEqual),
      i = oO(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: e,
      areMapsEqual: t,
      areObjectsEqual: n,
      areSetsEqual: i,
    });
  }
  return r;
}
function Mce(e) {
  return function (t, n, r, i, a, o, s) {
    return e(t, n, s);
  };
}
function Nce({
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
var Pce = gO();
(gO({ strict: !0 }),
  gO({ circular: !0 }),
  gO({ circular: !0, strict: !0 }),
  gO({ createInternalComparator: () => cO }),
  gO({ strict: !0, createInternalComparator: () => cO }),
  gO({ circular: !0, createInternalComparator: () => cO }),
  gO({ circular: !0, createInternalComparator: () => cO, strict: !0 }));
function gO(e = {}) {
  let {
      circular: t = !1,
      createInternalComparator: n,
      createState: r,
      strict: i = !1,
    } = e,
    a = Ace(jce(e));
  return Nce({
    circular: t,
    comparator: a,
    createState: r,
    equals: n ? n(a) : Mce(a),
    strict: i,
  });
}
function Fce(e) {
  typeof requestAnimationFrame < `u` && requestAnimationFrame(e);
}
function _O(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = -1;
  requestAnimationFrame(function r(i) {
    (n < 0 && (n = i), i - n > t ? (e(i), (n = -1)) : Fce(r));
  });
}
function vO(e) {
  "@babel/helpers - typeof";
  return (
    (vO =
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
    vO(e)
  );
}
function Ice(e) {
  return Bce(e) || zce(e) || Rce(e) || Lce();
}
function Lce() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rce(e, t) {
  if (e) {
    if (typeof e == `string`) return yO(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return yO(e, t);
  }
}
function yO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zce(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Bce(e) {
  if (Array.isArray(e)) return e;
}
function Vce() {
  var e = {},
    t = function () {
      return null;
    },
    n = !1,
    r = function r(i) {
      if (!n) {
        if (Array.isArray(i)) {
          if (!i.length) return;
          var a = Ice(i),
            o = a[0],
            s = a.slice(1);
          if (typeof o == `number`) {
            _O(r.bind(null, s), o);
            return;
          }
          (r(o), _O(r.bind(null, s)));
          return;
        }
        (vO(i) === `object` && ((e = i), t(e)), typeof i == `function` && i());
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
function bO(e) {
  "@babel/helpers - typeof";
  return (
    (bO =
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
    bO(e)
  );
}
function xO(e, t) {
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
function SO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xO(Object(n), !0).forEach(function (t) {
          CO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
