// assets__Create-ea24k1TY 103 — bytelength
// Lines 33808-34153 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Hse(e, t, n) {
  return (
    (t = Use(t)),
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
function Use(e) {
  var t = Wse(e, `string`);
  return XD(t) == `symbol` ? t : t + ``;
}
function Wse(e, t) {
  if (XD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (XD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var eO = {
    curveBasisClosed: Fre,
    curveBasisOpen: Ire,
    curveBasis: Pre,
    curveBumpX: bre,
    curveBumpY: xre,
    curveLinearClosed: Lre,
    curveLinear: tg,
    curveMonotoneX: Rre,
    curveMonotoneY: zre,
    curveNatural: Bre,
    curveStep: Vre,
    curveStepAfter: Ure,
    curveStepBefore: Hre,
  },
  tO = function (e) {
    return e.x === +e.x && e.y === +e.y;
  },
  nO = function (e) {
    return e.x;
  },
  rO = function (e) {
    return e.y;
  },
  Gse = function (e, t) {
    if ((0, Sh.default)(e)) return e;
    var n = `curve${(0, Mg.default)(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? eO[`${n}${t === `vertical` ? `Y` : `X`}`]
      : eO[n] || tg;
  },
  Kse = function (e) {
    var t = e.type,
      n = t === void 0 ? `linear` : t,
      r = e.points,
      i = r === void 0 ? [] : r,
      a = e.baseLine,
      o = e.layout,
      s = e.connectNulls,
      c = s !== void 0 && s,
      l = Gse(n, o),
      u = c
        ? i.filter(function (e) {
            return tO(e);
          })
        : i,
      d;
    if (Array.isArray(a)) {
      var f = c
          ? a.filter(function (e) {
              return tO(e);
            })
          : a,
        p = u.map(function (e, t) {
          return $D($D({}, e), {}, { base: f[t] });
        });
      return (
        (d =
          o === `vertical`
            ? ag()
                .y(rO)
                .x1(nO)
                .x0(function (e) {
                  return e.base.x;
                })
            : ag()
                .x(nO)
                .y1(rO)
                .y0(function (e) {
                  return e.base.y;
                })),
        d.defined(tO).curve(l),
        d(p)
      );
    }
    return (
      (d =
        o === `vertical` && ch(a)
          ? ag().y(rO).x1(nO).x0(a)
          : ch(a)
            ? ag().x(nO).y1(rO).y0(a)
            : ig().x(nO).y(rO)),
      d.defined(tO).curve(l),
      d(u)
    );
  },
  iO = function (e) {
    var t = e.className,
      n = e.points,
      r = e.path,
      i = e.pathRef;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? Kse(e) : r;
    return X.createElement(
      `path`,
      ZD({}, Mh(e, !1), bh(e), {
        className: h(`recharts-curve`, t),
        d: a,
        ref: i,
      }),
    );
  },
  qse = n((e, t) => {
    t.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  }),
  Jse = n((e, t) => {
    var n = qse();
    function r() {}
    function i() {}
    ((i.resetWarningCache = r),
      (t.exports = function () {
        function e(e, t, r, i, a, o) {
          if (o !== n) {
            var s = Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((s.name = `Invariant Violation`), s);
          }
        }
        e.isRequired = e;
        function t() {
          return e;
        }
        var a = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: r,
        };
        return ((a.PropTypes = a), a);
      }));
  }),
  Yse = n((e, t) => {
    t.exports = Jse()();
  }),
  { getOwnPropertyNames: Xse, getOwnPropertySymbols: Zse } = Object,
  { hasOwnProperty: Qse } = Object.prototype;
function aO(e, t) {
  return function (n, r, i) {
    return e(n, r, i) && t(n, r, i);
  };
}
function oO(e) {
  return function (t, n, r) {
    if (!t || !n || typeof t != `object` || typeof n != `object`)
      return e(t, n, r);
    let { cache: i } = r,
      a = i.get(t),
      o = i.get(n);
    if (a && o) return a === n && o === t;
    (i.set(t, n), i.set(n, t));
    let s = e(t, n, r);
    return (i.delete(t), i.delete(n), s);
  };
}
function $se(e) {
  return e?.[Symbol.toStringTag];
}
function sO(e) {
  return Xse(e).concat(Zse(e));
}
var ece = Object.hasOwn || ((e, t) => Qse.call(e, t));
function cO(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
var tce = `__v`,
  nce = `__o`,
  rce = `_owner`,
  { getOwnPropertyDescriptor: lO, keys: uO } = Object;
function ice(e, t) {
  return (
    e.byteLength === t.byteLength && mO(new Uint8Array(e), new Uint8Array(t))
  );
}
function ace(e, t, n) {
  let r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0;) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
  return !0;
}
function oce(e, t) {
  return (
    e.byteLength === t.byteLength &&
    mO(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function sce(e, t) {
  return cO(e.getTime(), t.getTime());
}
function cce(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function lce(e, t) {
  return e === t;
}
function dO(e, t, n) {
  let r = e.size;
  if (r !== t.size) return !1;
  if (!r) return !0;
  let i = Array(r),
    a = e.entries(),
    o,
    s,
    c = 0;
  for (; (o = a.next()) && !o.done;) {
    let r = t.entries(),
      a = !1,
      l = 0;
    for (; (s = r.next()) && !s.done;) {
      if (i[l]) {
        l++;
        continue;
      }
      let r = o.value,
        u = s.value;
      if (
        n.equals(r[0], u[0], c, l, e, t, n) &&
        n.equals(r[1], u[1], r[0], u[0], e, t, n)
      ) {
        a = i[l] = !0;
        break;
      }
      l++;
    }
    if (!a) return !1;
    c++;
  }
  return !0;
}
var uce = cO;
function dce(e, t, n) {
  let r = uO(e),
    i = r.length;
  if (uO(t).length !== i) return !1;
  for (; i-- > 0;) if (!hO(e, t, n, r[i])) return !1;
  return !0;
}
function fO(e, t, n) {
  let r = sO(e),
    i = r.length;
  if (sO(t).length !== i) return !1;
  let a, o, s;
  for (; i-- > 0;)
    if (
      ((a = r[i]),
      !hO(e, t, n, a) ||
        ((o = lO(e, a)),
        (s = lO(t, a)),
        (o || s) &&
          (!o ||
            !s ||
            o.configurable !== s.configurable ||
            o.enumerable !== s.enumerable ||
            o.writable !== s.writable)))
    )
      return !1;
  return !0;
}
function fce(e, t) {
  return cO(e.valueOf(), t.valueOf());
}
function pce(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function pO(e, t, n) {
  let r = e.size;
  if (r !== t.size) return !1;
  if (!r) return !0;
  let i = Array(r),
    a = e.values(),
    o,
    s;
  for (; (o = a.next()) && !o.done;) {
    let r = t.values(),
      a = !1,
      c = 0;
    for (; (s = r.next()) && !s.done;) {
      if (!i[c] && n.equals(o.value, s.value, o.value, s.value, e, t, n)) {
        a = i[c] = !0;
        break;
      }
      c++;
    }
    if (!a) return !1;
  }
  return !0;
}
function mO(e, t) {
  let n = e.byteLength;
  if (t.byteLength !== n || e.byteOffset !== t.byteOffset) return !1;
  for (; n-- > 0;) if (e[n] !== t[n]) return !1;
  return !0;
}
