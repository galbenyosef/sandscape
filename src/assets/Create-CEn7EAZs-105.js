// Create-CEn7EAZs 105 — bytelength
// Lines 34581-34926 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function lce(e, t, n) {
  return (
    (t = uce(t)),
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
function uce(e) {
  var t = dce(e, `string`);
  return sO(t) == `symbol` ? t : t + ``;
}
function dce(e, t) {
  if (sO(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (sO(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var dO = {
    curveBasisClosed: pg,
    curveBasisOpen: hg,
    curveBasis: dg,
    curveBumpX: Vh,
    curveBumpY: Hh,
    curveLinearClosed: _g,
    curveLinear: Fh,
    curveMonotoneX: Tg,
    curveMonotoneY: Eg,
    curveNatural: kg,
    curveStep: jg,
    curveStepAfter: Ng,
    curveStepBefore: Mg,
  },
  fO = function (e) {
    return e.x === +e.x && e.y === +e.y;
  },
  pO = function (e) {
    return e.x;
  },
  mO = function (e) {
    return e.y;
  },
  fce = function (e, t) {
    if ((0, $m.default)(e)) return e;
    var n = `curve${(0, Hg.default)(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? dO[`${n}${t === `vertical` ? `Y` : `X`}`]
      : dO[n] || Fh;
  },
  pce = function (e) {
    var t = e.type,
      n = t === void 0 ? `linear` : t,
      r = e.points,
      i = r === void 0 ? [] : r,
      a = e.baseLine,
      o = e.layout,
      s = e.connectNulls,
      c = s !== void 0 && s,
      l = fce(n, o),
      u = c
        ? i.filter(function (e) {
            return fO(e);
          })
        : i,
      d;
    if (Array.isArray(a)) {
      var f = c
          ? a.filter(function (e) {
              return fO(e);
            })
          : a,
        p = u.map(function (e, t) {
          return uO(uO({}, e), {}, { base: f[t] });
        });
      return (
        (d =
          o === `vertical`
            ? zh()
                .y(mO)
                .x1(pO)
                .x0(function (e) {
                  return e.base.x;
                })
            : zh()
                .x(pO)
                .y1(mO)
                .y0(function (e) {
                  return e.base.y;
                })),
        d.defined(fO).curve(l),
        d(p)
      );
    }
    return (
      (d =
        o === `vertical` && zm(a)
          ? zh().y(mO).x1(pO).x0(a)
          : zm(a)
            ? zh().x(pO).y1(mO).y0(a)
            : Rh().x(pO).y(mO)),
      d.defined(fO).curve(l),
      d(u)
    );
  },
  hO = function (e) {
    var t = e.className,
      n = e.points,
      r = e.path,
      i = e.pathRef;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? pce(e) : r;
    return X.createElement(
      `path`,
      cO({}, lh(e, !1), Zm(e), {
        className: h(`recharts-curve`, t),
        d: a,
        ref: i,
      }),
    );
  },
  mce = n((e, t) => {
    t.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  }),
  hce = n((e, t) => {
    var n = mce();
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
  gce = n((e, t) => {
    t.exports = hce()();
  }),
  { getOwnPropertyNames: _ce, getOwnPropertySymbols: vce } = Object,
  { hasOwnProperty: yce } = Object.prototype;
function gO(e, t) {
  return function (n, r, i) {
    return e(n, r, i) && t(n, r, i);
  };
}
function _O(e) {
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
function bce(e) {
  return e?.[Symbol.toStringTag];
}
function vO(e) {
  return _ce(e).concat(vce(e));
}
var xce = Object.hasOwn || ((e, t) => yce.call(e, t));
function yO(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
var Sce = `__v`,
  Cce = `__o`,
  wce = `_owner`,
  { getOwnPropertyDescriptor: bO, keys: xO } = Object;
function Tce(e, t) {
  return (
    e.byteLength === t.byteLength && TO(new Uint8Array(e), new Uint8Array(t))
  );
}
function Ece(e, t, n) {
  let r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0;) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
  return !0;
}
function Dce(e, t) {
  return (
    e.byteLength === t.byteLength &&
    TO(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function Oce(e, t) {
  return yO(e.getTime(), t.getTime());
}
function kce(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function Ace(e, t) {
  return e === t;
}
function SO(e, t, n) {
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
var jce = yO;
function Mce(e, t, n) {
  let r = xO(e),
    i = r.length;
  if (xO(t).length !== i) return !1;
  for (; i-- > 0;) if (!EO(e, t, n, r[i])) return !1;
  return !0;
}
function CO(e, t, n) {
  let r = vO(e),
    i = r.length;
  if (vO(t).length !== i) return !1;
  let a, o, s;
  for (; i-- > 0;)
    if (
      ((a = r[i]),
      !EO(e, t, n, a) ||
        ((o = bO(e, a)),
        (s = bO(t, a)),
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
function Nce(e, t) {
  return yO(e.valueOf(), t.valueOf());
}
function Pce(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function wO(e, t, n) {
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
function TO(e, t) {
  let n = e.byteLength;
  if (t.byteLength !== n || e.byteOffset !== t.byteOffset) return !1;
  for (; n-- > 0;) if (e[n] !== t[n]) return !1;
  return !0;
}
