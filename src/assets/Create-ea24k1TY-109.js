// Create-ea24k1TY 109 — symbol
// Lines 35833-36134 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Sk() {
  return (
    (Sk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sk.apply(this, arguments)
  );
}
function Ck(e, t) {
  if (e == null) return {};
  var n = wk(e, t),
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
function wk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Tk(e) {
  return kk(e) || Ok(e) || Dk(e) || Ek();
}
function Ek() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dk(e, t) {
  if (e) {
    if (typeof e == `string`) return Ak(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ak(e, t);
  }
}
function Ok(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function kk(e) {
  if (Array.isArray(e)) return Ak(e);
}
function Ak(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var jk = function (e) {
    return e && e.x === +e.x && e.y === +e.y;
  },
  Mk = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [[]];
    return (
      e.forEach(function (e) {
        jk(e)
          ? t[t.length - 1].push(e)
          : t[t.length - 1].length > 0 && t.push([]);
      }),
      jk(e[0]) && t[t.length - 1].push(e[0]),
      t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
      t
    );
  },
  Nk = function (e, t) {
    var n = Mk(e);
    t &&
      (n = [
        n.reduce(function (e, t) {
          return [].concat(Tk(e), Tk(t));
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
  Pk = function (e, t, n) {
    var r = Nk(e, n);
    return `${r.slice(-1) === `Z` ? r.slice(0, -1) : r}L${Nk(t.reverse(), n).slice(1)}`;
  },
  Fk = function (e) {
    var t = e.points,
      n = e.className,
      r = e.baseLinePoints,
      i = e.connectNulls,
      a = Ck(e, xk);
    if (!t || !t.length) return null;
    var o = h(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = Pk(t, r, i);
      return X.createElement(
        `g`,
        { className: o },
        X.createElement(
          `path`,
          Sk({}, Mh(a, !0), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? X.createElement(
              `path`,
              Sk({}, Mh(a, !0), { fill: `none`, d: Nk(t, i) }),
            )
          : null,
        s
          ? X.createElement(
              `path`,
              Sk({}, Mh(a, !0), { fill: `none`, d: Nk(r, i) }),
            )
          : null,
      );
    }
    var l = Nk(t, i);
    return X.createElement(
      `path`,
      Sk({}, Mh(a, !0), {
        fill: l.slice(-1) === `Z` ? a.fill : `none`,
        className: o,
        d: l,
      }),
    );
  };
function Ik() {
  return (
    (Ik = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ik.apply(this, arguments)
  );
}
var Lk = function (e) {
  var t = e.cx,
    n = e.cy,
    r = e.r,
    i = e.className,
    a = h(`recharts-dot`, i);
  return t === +t && n === +n && r === +r
    ? X.createElement(
        `circle`,
        Ik({}, Mh(e, !1), bh(e), { className: a, cx: t, cy: n, r }),
      )
    : null;
};
function Rk(e) {
  "@babel/helpers - typeof";
  return (
    (Rk =
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
    Rk(e)
  );
}
var zk = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function Bk() {
  return (
    (Bk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bk.apply(this, arguments)
  );
}
function Vk(e, t) {
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
function Hk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Vk(Object(n), !0).forEach(function (t) {
          Uk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Vk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Uk(e, t, n) {
  return (
    (t = Wk(t)),
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
function Wk(e) {
  var t = Gk(e, `string`);
  return Rk(t) == `symbol` ? t : t + ``;
}
function Gk(e, t) {
  if (Rk(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Rk(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Kk(e, t) {
  if (e == null) return {};
  var n = qk(e, t),
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
function qk(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
