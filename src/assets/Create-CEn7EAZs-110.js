// Create-CEn7EAZs 110 — math
// Lines 36267-36605 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
((vk.displayName = `Animate`),
  (vk.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: ``,
    to: ``,
    attributeName: ``,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function () {},
    onAnimationStart: function () {},
  }),
  (vk.propTypes = {
    from: $O.default.oneOfType([$O.default.object, $O.default.string]),
    to: $O.default.oneOfType([$O.default.object, $O.default.string]),
    attributeName: $O.default.string,
    duration: $O.default.number,
    begin: $O.default.number,
    easing: $O.default.oneOfType([$O.default.string, $O.default.func]),
    steps: $O.default.arrayOf(
      $O.default.shape({
        duration: $O.default.number.isRequired,
        style: $O.default.object.isRequired,
        easing: $O.default.oneOfType([
          $O.default.oneOf([
            `ease`,
            `ease-in`,
            `ease-out`,
            `ease-in-out`,
            `linear`,
          ]),
          $O.default.func,
        ]),
        properties: $O.default.arrayOf(`string`),
        onAnimationEnd: $O.default.func,
      }),
    ),
    children: $O.default.oneOfType([$O.default.node, $O.default.func]),
    isActive: $O.default.bool,
    canBegin: $O.default.bool,
    onAnimationEnd: $O.default.func,
    shouldReAnimate: $O.default.bool,
    onAnimationStart: $O.default.func,
    onAnimationReStart: $O.default.func,
  }));
var yk = vk;
function bk(e) {
  "@babel/helpers - typeof";
  return (
    (bk =
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
    bk(e)
  );
}
function xk() {
  return (
    (xk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xk.apply(this, arguments)
  );
}
function Sk(e, t) {
  return Dk(e) || Ek(e, t) || wk(e, t) || Ck();
}
function Ck() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wk(e, t) {
  if (e) {
    if (typeof e == `string`) return Tk(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`)
    )
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Tk(e, t);
  }
}
function Tk(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ek(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Dk(e) {
  if (Array.isArray(e)) return e;
}
function Ok(e, t) {
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
function kk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ok(Object(n), !0).forEach(function (t) {
          Ak(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ok(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ak(e, t, n) {
  return (
    (t = jk(t)),
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
function jk(e) {
  var t = Mk(e, `string`);
  return bk(t) == `symbol` ? t : t + ``;
}
function Mk(e, t) {
  if (bk(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (bk(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Nk = function (e, t, n, r, i) {
    var a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
      o = r >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      c = +((r >= 0 && n >= 0) || (r < 0 && n < 0)),
      l;
    if (a > 0 && i instanceof Array) {
      for (var u = [0, 0, 0, 0], d = 0, f = 4; d < f; d++)
        u[d] = i[d] > a ? a : i[d];
      ((l = `M${e},${t + o * u[0]}`),
        u[0] > 0 && (l += `A ${u[0]},${u[0]},0,0,${c},${e + s * u[0]},${t}`),
        (l += `L ${e + n - s * u[1]},${t}`),
        u[1] > 0 &&
          (l += `A ${u[1]},${u[1]},0,0,${c},
        ${e + n},${t + o * u[1]}`),
        (l += `L ${e + n},${t + r - o * u[2]}`),
        u[2] > 0 &&
          (l += `A ${u[2]},${u[2]},0,0,${c},
        ${e + n - s * u[2]},${t + r}`),
        (l += `L ${e + s * u[3]},${t + r}`),
        u[3] > 0 &&
          (l += `A ${u[3]},${u[3]},0,0,${c},
        ${e},${t + r - o * u[3]}`),
        (l += `Z`));
    } else if (a > 0 && i === +i && i > 0) {
      var p = Math.min(a, i);
      l = `M ${e},${t + o * p}
            A ${p},${p},0,0,${c},${e + s * p},${t}
            L ${e + n - s * p},${t}
            A ${p},${p},0,0,${c},${e + n},${t + o * p}
            L ${e + n},${t + r - o * p}
            A ${p},${p},0,0,${c},${e + n - s * p},${t + r}
            L ${e + s * p},${t + r}
            A ${p},${p},0,0,${c},${e},${t + r - o * p} Z`;
    } else l = `M ${e},${t} h ${n} v ${r} h ${-n} Z`;
    return l;
  },
  Pk = function (e, t) {
    if (!e || !t) return !1;
    var n = e.x,
      r = e.y,
      i = t.x,
      a = t.y,
      o = t.width,
      s = t.height;
    if (Math.abs(o) > 0 && Math.abs(s) > 0) {
      var c = Math.min(i, i + o),
        l = Math.max(i, i + o),
        u = Math.min(a, a + s),
        d = Math.max(a, a + s);
      return n >= c && n <= l && r >= u && r <= d;
    }
    return !1;
  },
  Fk = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  Ik = function (e) {
    var t = kk(kk({}, Fk), e),
      n = (0, X.useRef)(),
      r = Sk((0, X.useState)(-1), 2),
      i = r[0],
      a = r[1];
    (0, X.useEffect)(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && a(e);
        } catch {}
    }, []);
    var o = t.x,
      s = t.y,
      c = t.width,
      l = t.height,
      u = t.radius,
      d = t.className,
      f = t.animationEasing,
      p = t.animationDuration,
      m = t.animationBegin,
      g = t.isAnimationActive,
      _ = t.isUpdateAnimationActive;
    if (o !== +o || s !== +s || c !== +c || l !== +l || c === 0 || l === 0)
      return null;
    var v = h(`recharts-rectangle`, d);
    return _
      ? X.createElement(
          yk,
          {
            canBegin: i > 0,
            from: { width: c, height: l, x: o, y: s },
            to: { width: c, height: l, x: o, y: s },
            duration: p,
            animationEasing: f,
            isActive: _,
          },
          function (e) {
            var r = e.width,
              a = e.height,
              o = e.x,
              s = e.y;
            return X.createElement(
              yk,
              {
                canBegin: i > 0,
                from: `0px ${i === -1 ? 1 : i}px`,
                to: `${i}px 0px`,
                attributeName: `strokeDasharray`,
                begin: m,
                duration: p,
                isActive: g,
                easing: f,
              },
              X.createElement(
                `path`,
                xk({}, lh(t, !0), {
                  className: v,
                  d: Nk(o, s, r, a, u),
                  ref: n,
                }),
              ),
            );
          },
        )
      : X.createElement(
          `path`,
          xk({}, lh(t, !0), { className: v, d: Nk(o, s, c, l, u) }),
        );
  },
  Lk = [`points`, `className`, `baseLinePoints`, `connectNulls`];
