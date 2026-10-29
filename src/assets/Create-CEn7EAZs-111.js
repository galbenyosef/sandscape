// Create-CEn7EAZs 111 — symbol
// Lines 36606-36907 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Rk() {
  return (
    (Rk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rk.apply(this, arguments)
  );
}
function zk(e, t) {
  if (e == null) return {};
  var n = Bk(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function Bk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Vk(e) {
  return Gk(e) || Wk(e) || Uk(e) || Hk();
}
function Hk() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uk(e, t) {
  if (e) {
    if (typeof e == `string`) return Kk(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Kk(e, t);
  }
}
function Wk(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function Gk(e) {
  if (Array.isArray(e)) return Kk(e);
}
function Kk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var qk = function (e) {
    return e && e.x === +e.x && e.y === +e.y;
  },
  Jk = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [[]];
    return (
      e.forEach(function (e) {
        qk(e)
          ? t[t.length - 1].push(e)
          : t[t.length - 1].length > 0 && t.push([]);
      }),
      qk(e[0]) && t[t.length - 1].push(e[0]),
      t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
      t
    );
  },
  Yk = function (e, t) {
    var n = Jk(e);
    t &&
      (n = [
        n.reduce(function (e, t) {
          return [].concat(Vk(e), Vk(t));
        }, []),
      ]);
    var r = n
      .map(function (e) {
        return e.reduce(function (e, t, n) {
          return `${e}${n === 0 ? `M` : `L`}${t.x},${t.y}`;
        }, ``);
      })
      .join(``);
    return n.length === 1 ? `${r}Z` : r;
  },
  Xk = function (e, t, n) {
    var r = Yk(e, n);
    return `${r.slice(-1) === `Z` ? r.slice(0, -1) : r}L${Yk(t.reverse(), n).slice(1)}`;
  },
  Zk = function (e) {
    var t = e.points,
      n = e.className,
      r = e.baseLinePoints,
      i = e.connectNulls,
      a = zk(e, Lk);
    if (!t || !t.length) return null;
    var o = h(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = Xk(t, r, i);
      return X.createElement(
        `g`,
        { className: o },
        X.createElement(
          `path`,
          Rk({}, lh(a, !0), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? X.createElement(
              `path`,
              Rk({}, lh(a, !0), { fill: `none`, d: Yk(t, i) }),
            )
          : null,
        s
          ? X.createElement(
              `path`,
              Rk({}, lh(a, !0), { fill: `none`, d: Yk(r, i) }),
            )
          : null,
      );
    }
    var l = Yk(t, i);
    return X.createElement(
      `path`,
      Rk({}, lh(a, !0), {
        fill: l.slice(-1) === `Z` ? a.fill : `none`,
        className: o,
        d: l,
      }),
    );
  };
function Qk() {
  return (
    (Qk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qk.apply(this, arguments)
  );
}
var $k = function (e) {
  var t = e.cx,
    n = e.cy,
    r = e.r,
    i = e.className,
    a = h(`recharts-dot`, i);
  return t === +t && n === +n && r === +r
    ? X.createElement(
        `circle`,
        Qk({}, lh(e, !1), Zm(e), { className: a, cx: t, cy: n, r }),
      )
    : null;
};
function eA(e) {
  "@babel/helpers - typeof";
  return (
    (eA =
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
    eA(e)
  );
}
var tA = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function nA() {
  return (
    (nA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nA.apply(this, arguments)
  );
}
function rA(e, t) {
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
function iA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rA(Object(n), !0).forEach(function (t) {
          aA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function aA(e, t, n) {
  return (
    (t = oA(t)),
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
function oA(e) {
  var t = sA(e, `string`);
  return eA(t) == `symbol` ? t : t + ``;
}
function sA(e, t) {
  if (eA(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (eA(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function cA(e, t) {
  if (e == null) return {};
  var n = lA(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function lA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
