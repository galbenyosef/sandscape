// Create-ea24k1TY 100 — textanchor
// Lines 32802-33120 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function use(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function jD(e, t) {
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
function MD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jD(Object(n), !0).forEach(function (t) {
          dse(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jD(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dse(e, t, n) {
  return (
    (t = fse(t)),
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
function fse(e) {
  var t = pse(e, `string`);
  return kD(t) == `symbol` ? t : t + ``;
}
function pse(e, t) {
  if (kD(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (kD(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ND() {
  return (
    (ND = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ND.apply(this, arguments)
  );
}
var mse = function (e) {
    var t = e.value,
      n = e.formatter,
      r = (0, ah.default)(e.children) ? t : e.children;
    return (0, Sh.default)(n) ? n(r) : r;
  },
  hse = function (e, t) {
    return oh(t - e) * Math.min(Math.abs(t - e), 360);
  },
  gse = function (e, t, n) {
    var r = e.position,
      i = e.viewBox,
      a = e.offset,
      o = e.className,
      s = i,
      c = s.cx,
      l = s.cy,
      u = s.innerRadius,
      d = s.outerRadius,
      f = s.startAngle,
      p = s.endAngle,
      m = s.clockWise,
      g = (u + d) / 2,
      _ = hse(f, p),
      v = _ >= 0 ? 1 : -1,
      y,
      b;
    (r === `insideStart`
      ? ((y = f + v * a), (b = m))
      : r === `insideEnd`
        ? ((y = p - v * a), (b = !m))
        : r === `end` && ((y = p + v * a), (b = m)),
      (b = _ <= 0 ? b : !b));
    var x = TD(c, l, g, y),
      S = TD(c, l, g, y + (b ? 1 : -1) * 359),
      C = `M${x.x},${x.y}
    A${g},${g},0,1,${+!b},
    ${S.x},${S.y}`,
      w = (0, ah.default)(e.id) ? uh(`recharts-radial-line-`) : e.id;
    return X.createElement(
      `text`,
      ND({}, n, {
        dominantBaseline: `central`,
        className: h(`recharts-radial-bar-label`, o),
      }),
      X.createElement(`defs`, null, X.createElement(`path`, { id: w, d: C })),
      X.createElement(`textPath`, { xlinkHref: `#${w}` }, t),
    );
  },
  _se = function (e) {
    var t = e.viewBox,
      n = e.offset,
      r = e.position,
      i = t,
      a = i.cx,
      o = i.cy,
      s = i.innerRadius,
      c = i.outerRadius,
      l = (i.startAngle + i.endAngle) / 2;
    if (r === `outside`) {
      var u = TD(a, o, c + n, l),
        d = u.x;
      return {
        x: d,
        y: u.y,
        textAnchor: d >= a ? `start` : `end`,
        verticalAnchor: `middle`,
      };
    }
    if (r === `center`)
      return { x: a, y: o, textAnchor: `middle`, verticalAnchor: `middle` };
    if (r === `centerTop`)
      return { x: a, y: o, textAnchor: `middle`, verticalAnchor: `start` };
    if (r === `centerBottom`)
      return { x: a, y: o, textAnchor: `middle`, verticalAnchor: `end` };
    var f = TD(a, o, (s + c) / 2, l);
    return { x: f.x, y: f.y, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  vse = function (e) {
    var t = e.viewBox,
      n = e.parentViewBox,
      r = e.offset,
      i = e.position,
      a = t,
      o = a.x,
      s = a.y,
      c = a.width,
      l = a.height,
      u = l >= 0 ? 1 : -1,
      d = u * r,
      f = u > 0 ? `end` : `start`,
      p = u > 0 ? `start` : `end`,
      m = c >= 0 ? 1 : -1,
      h = m * r,
      g = m > 0 ? `end` : `start`,
      _ = m > 0 ? `start` : `end`;
    if (i === `top`)
      return MD(
        MD(
          {},
          {
            x: o + c / 2,
            y: s - u * r,
            textAnchor: `middle`,
            verticalAnchor: f,
          },
        ),
        n ? { height: Math.max(s - n.y, 0), width: c } : {},
      );
    if (i === `bottom`)
      return MD(
        MD(
          {},
          {
            x: o + c / 2,
            y: s + l + d,
            textAnchor: `middle`,
            verticalAnchor: p,
          },
        ),
        n ? { height: Math.max(n.y + n.height - (s + l), 0), width: c } : {},
      );
    if (i === `left`) {
      var v = {
        x: o - h,
        y: s + l / 2,
        textAnchor: g,
        verticalAnchor: `middle`,
      };
      return MD(
        MD({}, v),
        n ? { width: Math.max(v.x - n.x, 0), height: l } : {},
      );
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return MD(
        MD({}, y),
        n ? { width: Math.max(n.x + n.width - y.x, 0), height: l } : {},
      );
    }
    var b = n ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? MD(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? MD(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? MD(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? MD(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? MD({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? MD(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? MD(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? MD(
                        {
                          x: o + c - h,
                          y: s + l - d,
                          textAnchor: g,
                          verticalAnchor: f,
                        },
                        b,
                      )
                    : (0, gh.default)(i) &&
                        (ch(i.x) || sh(i.x)) &&
                        (ch(i.y) || sh(i.y))
                      ? MD(
                          {
                            x: o + dh(i.x, c),
                            y: s + dh(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : MD(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  yse = function (e) {
    return `cx` in e && ch(e.cx);
  };
