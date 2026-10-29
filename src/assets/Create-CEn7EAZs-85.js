// Create-CEn7EAZs 85 — width
// Lines 27098-27439 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var oS = /[ \f\n\r\t\v\u2028\u2029]+/,
  sS = function (e) {
    var t = e.children,
      n = e.breakAll,
      r = e.style;
    try {
      var i = [];
      return (
        (0, Im.default)(t) ||
          (i = n ? t.toString().split(``) : t.toString().split(oS)),
        {
          wordsWithComputedWidth: i.map(function (e) {
            return { word: e, width: bx(e, r).width };
          }),
          spaceWidth: n ? 0 : bx(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  cS = function (e, t, n, r, i) {
    var a = e.maxLines,
      o = e.children,
      s = e.style,
      c = e.breakAll,
      l = zm(a),
      u = o,
      d = function () {
        return (
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        ).reduce(function (e, t) {
          var a = t.word,
            o = t.width,
            s = e[e.length - 1];
          if (s && (r == null || i || s.width + o + n < Number(r)))
            (s.words.push(a), (s.width += o + n));
          else {
            var c = { words: [a], width: o };
            e.push(c);
          }
          return e;
        }, []);
      },
      f = d(t),
      p = function (e) {
        return e.reduce(function (e, t) {
          return e.width > t.width ? e : t;
        });
      };
    if (!l) return f;
    for (
      var m = `…`,
        h = function (e) {
          var t = sS({
              breakAll: c,
              style: s,
              children: u.slice(0, e) + m,
            }).wordsWithComputedWidth,
            n = d(t);
          return [n.length > a || p(n).width > Number(r), n];
        },
        g = 0,
        _ = u.length - 1,
        v = 0,
        y;
      g <= _ && v <= u.length - 1;
    ) {
      var b = Math.floor((g + _) / 2),
        x = eS(h(b - 1), 2),
        S = x[0],
        C = x[1],
        w = eS(h(b), 1)[0];
      if ((!S && !w && (g = b + 1), S && w && (_ = b - 1), !S && w)) {
        y = C;
        break;
      }
      v++;
    }
    return y || f;
  },
  lS = function (e) {
    return [{ words: (0, Im.default)(e) ? [] : e.toString().split(oS) }];
  },
  uS = function (e) {
    var t = e.width,
      n = e.scaleToFit,
      r = e.children,
      i = e.style,
      a = e.breakAll,
      o = e.maxLines;
    if ((t || n) && !Cb.isSsr) {
      var s,
        c,
        l = sS({ breakAll: a, children: r, style: i });
      if (l) {
        var u = l.wordsWithComputedWidth,
          d = l.spaceWidth;
        ((s = u), (c = d));
      } else return lS(r);
      return cS(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return lS(r);
  },
  dS = `#808080`,
  fS = function (e) {
    var t = e.x,
      n = t === void 0 ? 0 : t,
      r = e.y,
      i = r === void 0 ? 0 : r,
      a = e.lineHeight,
      o = a === void 0 ? `1em` : a,
      s = e.capHeight,
      c = s === void 0 ? `0.71em` : s,
      l = e.scaleToFit,
      u = l !== void 0 && l,
      d = e.textAnchor,
      f = d === void 0 ? `start` : d,
      p = e.verticalAnchor,
      m = p === void 0 ? `end` : p,
      g = e.fill,
      _ = g === void 0 ? dS : g,
      v = Qx(e, Yx),
      y = (0, X.useMemo)(
        function () {
          return uS({
            breakAll: v.breakAll,
            children: v.children,
            maxLines: v.maxLines,
            scaleToFit: u,
            style: v.style,
            width: v.width,
          });
        },
        [v.breakAll, v.children, v.maxLines, u, v.style, v.width],
      ),
      b = v.dx,
      x = v.dy,
      S = v.angle,
      C = v.className,
      w = v.breakAll,
      T = Qx(v, Xx);
    if (!Bm(n) || !Bm(i)) return null;
    var E = n + (zm(b) ? b : 0),
      D = i + (zm(x) ? x : 0),
      O;
    switch (m) {
      case `start`:
        O = Jx(`calc(${c})`);
        break;
      case `middle`:
        O = Jx(`calc(${(y.length - 1) / 2} * -${o} + (${c} / 2))`);
        break;
      default:
        O = Jx(`calc(${y.length - 1} * -${o})`);
        break;
    }
    var k = [];
    if (u) {
      var A = y[0].width,
        j = v.width;
      k.push(`scale(${(zm(j) ? j / A : 1) / A})`);
    }
    return (
      S && k.push(`rotate(${S}, ${E}, ${D})`),
      k.length && (T.transform = k.join(` `)),
      X.createElement(
        `text`,
        Zx({}, lh(T, !0), {
          x: E,
          y: D,
          className: h(`recharts-text`, C),
          textAnchor: f,
          fill: _.includes(`url`) ? dS : _,
        }),
        y.map(function (e, t) {
          var n = e.words.join(w ? `` : ` `);
          return X.createElement(
            `tspan`,
            { x: E, dy: t === 0 ? O : o, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  };
function pS(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function mS(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function hS(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === pS || e === mS ? e : gS), (n = e), (r = e))
    : ((t = pS), (n = (t, n) => pS(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function gS() {
  return 0;
}
function _S(e) {
  return e === null ? NaN : +e;
}
function* vS(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var yS = hS(pS),
  bS = yS.right;
(yS.left, hS(_S).center);
var xS = class extends Map {
  constructor(e, t = TS) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: t },
      }),
      e != null)
    )
      for (let [t, n] of e) this.set(t, n);
  }
  get(e) {
    return super.get(SS(this, e));
  }
  has(e) {
    return super.has(SS(this, e));
  }
  set(e, t) {
    return super.set(CS(this, e), t);
  }
  delete(e) {
    return super.delete(wS(this, e));
  }
};
function SS({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function CS({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function wS({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function TS(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function ES(e = pS) {
  if (e === pS) return DS;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function DS(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var OS = Math.sqrt(50),
  kS = Math.sqrt(10),
  AS = Math.sqrt(2);
function jS(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= OS ? 10 : a >= kS ? 5 : a >= AS ? 2 : 1,
    s,
    c,
    l;
  return (
    i < 0
      ? ((l = 10 ** -i / o),
        (s = Math.round(e * l)),
        (c = Math.round(t * l)),
        s / l < e && ++s,
        c / l > t && --c,
        (l = -l))
      : ((l = 10 ** i * o),
        (s = Math.round(e / l)),
        (c = Math.round(t / l)),
        s * l < e && ++s,
        c * l > t && --c),
    c < s && 0.5 <= n && n < 2 ? jS(e, t, n * 2) : [s, c, l]
  );
}
