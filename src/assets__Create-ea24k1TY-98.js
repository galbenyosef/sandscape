// assets__Create-ea24k1TY 98 — math
// Lines 31839-32458 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var koe = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = -1,
      a = t?.length ?? 0;
    if (a <= 1) return 0;
    if (
      r &&
      r.axisType === `angleAxis` &&
      Math.abs(Math.abs(r.range[1] - r.range[0]) - 360) <= 1e-6
    )
      for (var o = r.range, s = 0; s < a; s++) {
        var c = s > 0 ? n[s - 1].coordinate : n[a - 1].coordinate,
          l = n[s].coordinate,
          u = s >= a - 1 ? n[0].coordinate : n[s + 1].coordinate,
          d = void 0;
        if (oh(l - c) !== oh(u - l)) {
          var f = [];
          if (oh(u - l) === oh(o[1] - o[0])) {
            d = u;
            var p = l + o[1] - o[0];
            ((f[0] = Math.min(p, (p + c) / 2)),
              (f[1] = Math.max(p, (p + c) / 2)));
          } else {
            d = c;
            var m = u + o[1] - o[0];
            ((f[0] = Math.min(l, (m + l) / 2)),
              (f[1] = Math.max(l, (m + l) / 2)));
          }
          var h = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
          if ((e > h[0] && e <= h[1]) || (e >= f[0] && e <= f[1])) {
            i = n[s].index;
            break;
          }
        } else {
          var g = Math.min(c, u),
            _ = Math.max(c, u);
          if (e > (g + l) / 2 && e <= (_ + l) / 2) {
            i = n[s].index;
            break;
          }
        }
      }
    else
      for (var v = 0; v < a; v++)
        if (
          (v === 0 && e <= (t[v].coordinate + t[v + 1].coordinate) / 2) ||
          (v > 0 &&
            v < a - 1 &&
            e > (t[v].coordinate + t[v - 1].coordinate) / 2 &&
            e <= (t[v].coordinate + t[v + 1].coordinate) / 2) ||
          (v === a - 1 && e > (t[v].coordinate + t[v - 1].coordinate) / 2)
        ) {
          i = t[v].index;
          break;
        }
    return i;
  },
  aD = function (e) {
    var t,
      n = e.type.displayName,
      r =
        (t = e.type) != null && t.defaultProps
          ? tD(tD({}, e.type.defaultProps), e.props)
          : e.props,
      i = r.stroke,
      a = r.fill,
      o;
    switch (n) {
      case `Line`:
        o = i;
        break;
      case `Area`:
      case `Radar`:
        o = i && i !== `none` ? i : a;
        break;
      default:
        o = a;
        break;
    }
    return o;
  },
  Aoe = function (e) {
    var t = e.barSize,
      n = e.totalSize,
      r = e.stackGroups,
      i = r === void 0 ? {} : r;
    if (!i) return {};
    for (var a = {}, o = Object.keys(i), s = 0, c = o.length; s < c; s++)
      for (
        var l = i[o[s]].stackGroups, u = Object.keys(l), d = 0, f = u.length;
        d < f;
        d++
      ) {
        var p = l[u[d]],
          m = p.items,
          h = p.cateAxisId,
          g = m.filter(function (e) {
            return Th(e.type).indexOf(`Bar`) >= 0;
          });
        if (g && g.length) {
          var _ = g[0].type.defaultProps,
            v = _ === void 0 ? g[0].props : tD(tD({}, _), g[0].props),
            y = v.barSize,
            b = v[h];
          a[b] || (a[b] = []);
          var x = (0, ah.default)(y) ? t : y;
          a[b].push({
            item: g[0],
            stackList: g.slice(1),
            barSize: (0, ah.default)(x) ? void 0 : dh(x, n, 0),
          });
        }
      }
    return a;
  },
  joe = function (e) {
    var t = e.barGap,
      n = e.barCategoryGap,
      r = e.bandSize,
      i = e.sizeList,
      a = i === void 0 ? [] : i,
      o = e.maxBarSize,
      s = a.length;
    if (s < 1) return null;
    var c = dh(t, r, 0, !0),
      l,
      u = [];
    if (a[0].barSize === +a[0].barSize) {
      var d = !1,
        f = r / s,
        p = a.reduce(function (e, t) {
          return e + t.barSize || 0;
        }, 0);
      ((p += (s - 1) * c),
        p >= r && ((p -= (s - 1) * c), (c = 0)),
        p >= r && f > 0 && ((d = !0), (f *= 0.9), (p = s * f)));
      var m = { offset: (((r - p) / 2) >> 0) - c, size: 0 };
      l = a.reduce(function (e, t) {
        var n = {
            item: t.item,
            position: {
              offset: m.offset + m.size + c,
              size: d ? f : t.barSize,
            },
          },
          r = [].concat(QE(e), [n]);
        return (
          (m = r[r.length - 1].position),
          t.stackList &&
            t.stackList.length &&
            t.stackList.forEach(function (e) {
              r.push({ item: e, position: m });
            }),
          r
        );
      }, u);
    } else {
      var h = dh(n, r, 0, !0);
      r - 2 * h - (s - 1) * c <= 0 && (c = 0);
      var g = (r - 2 * h - (s - 1) * c) / s;
      g > 1 && (g >>= 0);
      var _ = o === +o ? Math.min(g, o) : g;
      l = a.reduce(function (e, t, n) {
        var r = [].concat(QE(e), [
          {
            item: t.item,
            position: { offset: h + (g + c) * n + (g - _) / 2, size: _ },
          },
        ]);
        return (
          t.stackList &&
            t.stackList.length &&
            t.stackList.forEach(function (e) {
              r.push({ item: e, position: r[r.length - 1].position });
            }),
          r
        );
      }, u);
    }
    return l;
  },
  Moe = function (e, t, n, r) {
    var i = n.children,
      a = n.width,
      o = n.margin,
      s = qE({ children: i, legendWidth: a - (o.left || 0) - (o.right || 0) });
    if (s) {
      var c = r || {},
        l = c.width,
        u = c.height,
        d = s.align,
        f = s.verticalAlign,
        p = s.layout;
      if (
        (p === `vertical` || (p === `horizontal` && f === `middle`)) &&
        d !== `center` &&
        ch(e[d])
      )
        return tD(tD({}, e), {}, nD({}, d, e[d] + (l || 0)));
      if (
        (p === `horizontal` || (p === `vertical` && d === `center`)) &&
        f !== `middle` &&
        ch(e[f])
      )
        return tD(tD({}, e), {}, nD({}, f, e[f] + (u || 0)));
    }
    return e;
  },
  Noe = function (e, t, n) {
    return (0, ah.default)(t)
      ? !0
      : e === `horizontal`
        ? t === `yAxis`
        : e === `vertical` || n === `x`
          ? t === `xAxis`
          : n !== `y` || t === `yAxis`;
  },
  oD = function (e, t, n, r, i) {
    var a = t.props.children,
      o = kh(a, UE).filter(function (e) {
        return Noe(r, i, e.props.direction);
      });
    if (o && o.length) {
      var s = o.map(function (e) {
        return e.props.dataKey;
      });
      return e.reduce(
        function (e, t) {
          var r = rD(t, n);
          if ((0, ah.default)(r)) return e;
          var i = Array.isArray(r)
              ? [(0, YE.default)(r), (0, JE.default)(r)]
              : [r, r],
            a = s.reduce(
              function (e, n) {
                var r = rD(t, n, 0),
                  a = i[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                  o = i[1] + Math.abs(Array.isArray(r) ? r[1] : r);
                return [Math.min(a, e[0]), Math.max(o, e[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(a[0], e[0]), Math.max(a[1], e[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  Poe = function (e, t, n, r, i) {
    var a = t
      .map(function (t) {
        return oD(e, t, n, i, r);
      })
      .filter(function (e) {
        return !(0, ah.default)(e);
      });
    return a && a.length
      ? a.reduce(
          function (e, t) {
            return [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  sD = function (e, t, n, r, i) {
    var a = t.map(function (t) {
      var a = t.props.dataKey;
      return (n === `number` && a && oD(e, t, a, r)) || iD(e, a, n, i);
    });
    if (n === `number`)
      return a.reduce(
        function (e, t) {
          return [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
        },
        [1 / 0, -1 / 0],
      );
    var o = {};
    return a.reduce(function (e, t) {
      for (var n = 0, r = t.length; n < r; n++)
        o[t[n]] || ((o[t[n]] = !0), e.push(t[n]));
      return e;
    }, []);
  },
  cD = function (e, t) {
    return (
      (e === `horizontal` && t === `xAxis`) ||
      (e === `vertical` && t === `yAxis`) ||
      (e === `centric` && t === `angleAxis`) ||
      (e === `radial` && t === `radiusAxis`)
    );
  },
  lD = function (e, t, n) {
    if (!e) return null;
    var r = e.scale,
      i = e.duplicateDomain,
      a = e.type,
      o = e.range,
      s = e.realScaleType === `scaleBand` ? r.bandwidth() / 2 : 2,
      c = (t || n) && a === `category` && r.bandwidth ? r.bandwidth() / s : 0;
    return (
      (c =
        e.axisType === `angleAxis` && o?.length >= 2
          ? oh(o[0] - o[1]) * 2 * c
          : c),
      t && (e.ticks || e.niceTicks)
        ? (e.ticks || e.niceTicks)
            .map(function (e) {
              return {
                coordinate: r(i ? i.indexOf(e) : e) + c,
                value: e,
                offset: c,
              };
            })
            .filter(function (e) {
              return !(0, rh.default)(e.coordinate);
            })
        : e.isCategorical && e.categoricalDomain
          ? e.categoricalDomain.map(function (e, t) {
              return { coordinate: r(e) + c, value: e, index: t, offset: c };
            })
          : r.ticks && !n
            ? r.ticks(e.tickCount).map(function (e) {
                return { coordinate: r(e) + c, value: e, offset: c };
              })
            : r.domain().map(function (e, t) {
                return {
                  coordinate: r(e) + c,
                  value: i ? i[e] : e,
                  index: t,
                  offset: c,
                };
              })
    );
  },
  uD = new WeakMap(),
  dD = function (e, t) {
    if (typeof t != `function`) return e;
    uD.has(e) || uD.set(e, new WeakMap());
    var n = uD.get(e);
    if (n.has(t)) return n.get(t);
    var r = function () {
      (e.apply(void 0, arguments), t.apply(void 0, arguments));
    };
    return (n.set(t, r), r);
  },
  Foe = function (e, t, n) {
    var r = e.scale,
      i = e.type,
      a = e.layout,
      o = e.axisType;
    if (r === `auto`)
      return a === `radial` && o === `radiusAxis`
        ? { scale: Pb(), realScaleType: `band` }
        : a === `radial` && o === `angleAxis`
          ? { scale: PS(), realScaleType: `linear` }
          : i === `category` &&
              t &&
              (t.indexOf(`LineChart`) >= 0 ||
                t.indexOf(`AreaChart`) >= 0 ||
                (t.indexOf(`ComposedChart`) >= 0 && !n))
            ? { scale: Ib(), realScaleType: `point` }
            : i === `category`
              ? { scale: Pb(), realScaleType: `band` }
              : { scale: PS(), realScaleType: `linear` };
    if ((0, nh.default)(r)) {
      var s = `scale${(0, Mg.default)(r)}`;
      return { scale: (UT[s] || Ib)(), realScaleType: UT[s] ? s : `point` };
    }
    return (0, Sh.default)(r)
      ? { scale: r }
      : { scale: Ib(), realScaleType: `point` };
  },
  fD = 1e-4,
  Ioe = function (e) {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - fD,
        a = Math.max(r[0], r[1]) + fD,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  Loe = {
    sign: function (e) {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = (0, rh.default)(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: qre,
    none: Ag,
    silhouette: Jre,
    wiggle: Yre,
    positive: function (e) {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = (0, rh.default)(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  Roe = function (e, t, n) {
    var r = t.map(function (e) {
        return e.props.dataKey;
      }),
      i = Loe[n];
    return Kre()
      .keys(r)
      .value(function (e, t) {
        return +rD(e, t, 0);
      })
      .order(jg)
      .offset(i)(e);
  },
  zoe = function (e, t, n, r, i, a) {
    if (!e) return null;
    var o = (a ? t.reverse() : t).reduce(function (e, t) {
      var i,
        a =
          (i = t.type) != null && i.defaultProps
            ? tD(tD({}, t.type.defaultProps), t.props)
            : t.props,
        o = a.stackId;
      if (a.hide) return e;
      var s = a[n],
        c = e[s] || { hasStack: !1, stackGroups: {} };
      if (lh(o)) {
        var l = c.stackGroups[o] || {
          numericAxisId: n,
          cateAxisId: r,
          items: [],
        };
        (l.items.push(t), (c.hasStack = !0), (c.stackGroups[o] = l));
      } else
        c.stackGroups[uh(`_stackId_`)] = {
          numericAxisId: n,
          cateAxisId: r,
          items: [t],
        };
      return tD(tD({}, e), {}, nD({}, s, c));
    }, {});
    return Object.keys(o).reduce(function (t, a) {
      var s = o[a];
      return (
        s.hasStack &&
          (s.stackGroups = Object.keys(s.stackGroups).reduce(function (t, a) {
            var o = s.stackGroups[a];
            return tD(
              tD({}, t),
              {},
              nD({}, a, {
                numericAxisId: n,
                cateAxisId: r,
                items: o.items,
                stackedData: Roe(e, o.items, i),
              }),
            );
          }, {})),
        tD(tD({}, t), {}, nD({}, a, s))
      );
    }, {});
  },
  Boe = function (e, t) {
    var n = t.realScaleType,
      r = t.type,
      i = t.tickCount,
      a = t.originalDomain,
      o = t.allowDecimals,
      s = n || t.scale;
    if (s !== `auto` && s !== `linear`) return null;
    if (i && r === `number` && a && (a[0] === `auto` || a[1] === `auto`)) {
      var c = e.domain();
      if (!c.length) return null;
      var l = toe(c, i, o);
      return (
        e.domain([(0, YE.default)(l), (0, JE.default)(l)]),
        { niceTicks: l }
      );
    }
    return i && r === `number` ? { niceTicks: noe(e.domain(), i, o) } : null;
  },
  Voe = function (e, t) {
    var n,
      r = (
        (n = e.type) != null && n.defaultProps
          ? tD(tD({}, e.type.defaultProps), e.props)
          : e.props
      ).stackId;
    if (lh(r)) {
      var i = t[r];
      if (i) {
        var a = i.items.indexOf(e);
        return a >= 0 ? i.stackedData[a] : null;
      }
    }
    return null;
  },
  Hoe = function (e) {
    return e.reduce(
      function (e, t) {
        return [
          (0, YE.default)(t.concat([e[0]]).filter(ch)),
          (0, JE.default)(t.concat([e[1]]).filter(ch)),
        ];
      },
      [1 / 0, -1 / 0],
    );
  },
  pD = function (e, t, n) {
    return Object.keys(e)
      .reduce(
        function (r, i) {
          var a = e[i].stackedData.reduce(
            function (e, r) {
              var i = Hoe(r.slice(t, n + 1));
              return [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
            },
            [1 / 0, -1 / 0],
          );
          return [Math.min(a[0], r[0]), Math.max(a[1], r[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (e) {
        return e === 1 / 0 || e === -1 / 0 ? 0 : e;
      });
  },
  mD = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  hD = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  gD = function (e, t, n) {
    if ((0, Sh.default)(e)) return e(t, n);
    if (!Array.isArray(e)) return t;
    var r = [];
    if (ch(e[0])) r[0] = n ? e[0] : Math.min(e[0], t[0]);
    else if (mD.test(e[0])) {
      var i = +mD.exec(e[0])[1];
      r[0] = t[0] - i;
    } else (0, Sh.default)(e[0]) ? (r[0] = e[0](t[0])) : (r[0] = t[0]);
    if (ch(e[1])) r[1] = n ? e[1] : Math.max(e[1], t[1]);
    else if (hD.test(e[1])) {
      var a = +hD.exec(e[1])[1];
      r[1] = t[1] + a;
    } else (0, Sh.default)(e[1]) ? (r[1] = e[1](t[1])) : (r[1] = t[1]);
    return r;
  },
  _D = function (e, t, n) {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, sv.default)(t, function (e) {
            return e.coordinate;
          }),
          a = 1 / 0,
          o = 1,
          s = i.length;
        o < s;
        o++
      ) {
        var c = i[o],
          l = i[o - 1];
        a = Math.min((c.coordinate || 0) - (l.coordinate || 0), a);
      }
      return a === 1 / 0 ? 0 : a;
    }
    return n ? void 0 : 0;
  },
  vD = function (e, t, n) {
    return !e ||
      !e.length ||
      (0, XE.default)(e, (0, ih.default)(n, `type.defaultProps.domain`))
      ? t
      : e;
  },
  Uoe = function (e, t) {
    var n = e.type.defaultProps
        ? tD(tD({}, e.type.defaultProps), e.props)
        : e.props,
      r = n.dataKey,
      i = n.name,
      a = n.unit,
      o = n.formatter,
      s = n.tooltipType,
      c = n.chartType,
      l = n.hide;
    return tD(
      tD({}, Mh(e, !1)),
      {},
      {
        dataKey: r,
        unit: a,
        formatter: o,
        name: i || r,
        color: aD(e),
        value: rD(t, r),
        type: s,
        payload: t,
        chartType: c,
        hide: l,
      },
    );
  };
