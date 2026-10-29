// Create-ea24k1TY 83 — width
// Lines 26325-26666 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var lb = /[ \f\n\r\t\v\u2028\u2029]+/,
  ub = function (e) {
    var t = e.children,
      n = e.breakAll,
      r = e.style;
    try {
      var i = [];
      return (
        (0, ah.default)(t) ||
          (i = n ? t.toString().split(``) : t.toString().split(lb)),
        {
          wordsWithComputedWidth: i.map(function (e) {
            return { word: e, width: zy(e, r).width };
          }),
          spaceWidth: n ? 0 : zy(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  Lae = function (e, t, n, r, i) {
    var a = e.maxLines,
      o = e.children,
      s = e.style,
      c = e.breakAll,
      l = ch(a),
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
          var t = ub({
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
        x = sb(h(b - 1), 2),
        S = x[0],
        C = x[1],
        w = sb(h(b), 1)[0];
      if ((!S && !w && (g = b + 1), S && w && (_ = b - 1), !S && w)) {
        y = C;
        break;
      }
      v++;
    }
    return y || f;
  },
  db = function (e) {
    return [{ words: (0, ah.default)(e) ? [] : e.toString().split(lb) }];
  },
  Rae = function (e) {
    var t = e.width,
      n = e.scaleToFit,
      r = e.children,
      i = e.style,
      a = e.breakAll,
      o = e.maxLines;
    if ((t || n) && !Hv.isSsr) {
      var s,
        c,
        l = ub({ breakAll: a, children: r, style: i });
      if (l) {
        var u = l.wordsWithComputedWidth,
          d = l.spaceWidth;
        ((s = u), (c = d));
      } else return db(r);
      return Lae(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return db(r);
  },
  fb = `#808080`,
  pb = function (e) {
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
      _ = g === void 0 ? fb : g,
      v = ob(e, Aae),
      y = (0, X.useMemo)(
        function () {
          return Rae({
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
      T = ob(v, jae);
    if (!lh(n) || !lh(i)) return null;
    var E = n + (ch(b) ? b : 0),
      D = i + (ch(x) ? x : 0),
      O;
    switch (m) {
      case `start`:
        O = ib(`calc(${c})`);
        break;
      case `middle`:
        O = ib(`calc(${(y.length - 1) / 2} * -${o} + (${c} / 2))`);
        break;
      default:
        O = ib(`calc(${y.length - 1} * -${o})`);
        break;
    }
    var k = [];
    if (u) {
      var A = y[0].width,
        j = v.width;
      k.push(`scale(${(ch(j) ? j / A : 1) / A})`);
    }
    return (
      S && k.push(`rotate(${S}, ${E}, ${D})`),
      k.length && (T.transform = k.join(` `)),
      X.createElement(
        `text`,
        ab({}, Mh(T, !0), {
          x: E,
          y: D,
          className: h(`recharts-text`, C),
          textAnchor: f,
          fill: _.includes(`url`) ? fb : _,
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
function mb(e, t) {
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
function zae(e, t) {
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
function hb(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === mb || e === zae ? e : Bae), (n = e), (r = e))
    : ((t = mb), (n = (t, n) => mb(e(t), n)), (r = (t, n) => e(t) - n));
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
function Bae() {
  return 0;
}
function gb(e) {
  return e === null ? NaN : +e;
}
function* Vae(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var _b = hb(mb),
  vb = _b.right;
(_b.left, hb(gb).center);
var yb = class extends Map {
  constructor(e, t = Wae) {
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
    return super.get(bb(this, e));
  }
  has(e) {
    return super.has(bb(this, e));
  }
  set(e, t) {
    return super.set(Hae(this, e), t);
  }
  delete(e) {
    return super.delete(Uae(this, e));
  }
};
function bb({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Hae({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Uae({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function Wae(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function Gae(e = mb) {
  if (e === mb) return xb;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function xb(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var Kae = Math.sqrt(50),
  qae = Math.sqrt(10),
  Jae = Math.sqrt(2);
function Sb(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= Kae ? 10 : a >= qae ? 5 : a >= Jae ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? Sb(e, t, n * 2) : [s, c, l]
  );
}
