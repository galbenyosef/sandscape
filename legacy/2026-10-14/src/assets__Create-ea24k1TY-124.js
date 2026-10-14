// assets__Create-ea24k1TY 124 — symbol
// Lines 40642-40991 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var GP = (function () {
  function e() {
    (zP(this, e),
      HP(this, `activeIndex`, 0),
      HP(this, `coordinateList`, []),
      HP(this, `layout`, `horizontal`));
  }
  return VP(e, [
    {
      key: `setDetails`,
      value: function (e) {
        var t = e.coordinateList,
          n = t === void 0 ? null : t,
          r = e.container,
          i = r === void 0 ? null : r,
          a = e.layout,
          o = a === void 0 ? null : a,
          s = e.offset,
          c = s === void 0 ? null : s,
          l = e.mouseHandlerCallback,
          u = l === void 0 ? null : l;
        ((this.coordinateList = n ?? this.coordinateList ?? []),
          (this.container = i ?? this.container),
          (this.layout = o ?? this.layout),
          (this.offset = c ?? this.offset),
          (this.mouseHandlerCallback = u ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: `focus`,
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: `keyboardEvent`,
      value: function (e) {
        if (this.coordinateList.length !== 0)
          switch (e.key) {
            case `ArrowRight`:
              if (this.layout !== `horizontal`) return;
              ((this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse());
              break;
            case `ArrowLeft`:
              if (this.layout !== `horizontal`) return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse());
              break;
            default:
              break;
          }
      },
    },
    {
      key: `setIndex`,
      value: function (e) {
        this.activeIndex = e;
      },
    },
    {
      key: `spoofMouse`,
      value: function () {
        if (this.layout === `horizontal` && this.coordinateList.length !== 0) {
          var e = this.container.getBoundingClientRect(),
            t = e.x,
            n = e.y,
            r = e.height,
            i = this.coordinateList[this.activeIndex].coordinate,
            a = window?.scrollX || 0,
            o = window?.scrollY || 0,
            s = t + i + a,
            c = n + this.offset.top + r / 2 + o;
          this.mouseHandlerCallback({ pageX: s, pageY: c });
        }
      },
    },
  ]);
})();
function KP(e, t, n) {
  if (n === `number` && t === !0 && Array.isArray(e)) {
    var r = e?.[0],
      i = e?.[1];
    if (r && i && ch(r) && ch(i)) return !0;
  }
  return !1;
}
function qP(e, t, n, r) {
  var i = r / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    x: e === `horizontal` ? t.x - i : n.left + 0.5,
    y: e === `horizontal` ? n.top + 0.5 : t.y - i,
    width: e === `horizontal` ? r : n.width - 1,
    height: e === `horizontal` ? n.height - 1 : r,
  };
}
function JP(e) {
  var t = e.cx,
    n = e.cy,
    r = e.radius,
    i = e.startAngle,
    a = e.endAngle;
  return {
    points: [TD(t, n, r, i), TD(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function YP(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null)
    if (e === `centric`) {
      var s = t.cx,
        c = t.cy,
        l = t.innerRadius,
        u = t.outerRadius,
        d = t.angle,
        f = TD(s, c, l, d),
        p = TD(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return JP(t);
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
function XP(e) {
  "@babel/helpers - typeof";
  return (
    (XP =
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
    XP(e)
  );
}
function ZP(e, t) {
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
function QP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ZP(Object(n), !0).forEach(function (t) {
          $P(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ZP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $P(e, t, n) {
  return (
    (t = eF(t)),
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
function eF(e) {
  var t = tF(e, `string`);
  return XP(t) == `symbol` ? t : t + ``;
}
function tF(e, t) {
  if (XP(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (XP(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function nF(e) {
  var t = e.element,
    n = e.tooltipEventType,
    r = e.isActive,
    i = e.activeCoordinate,
    a = e.activePayload,
    o = e.offset,
    s = e.activeTooltipIndex,
    c = e.tooltipAxisBandSize,
    l = e.layout,
    u = e.chartName,
    d = t.props.cursor ?? t.type.defaultProps?.cursor;
  if (!t || !d || !r || !i || (u !== `ScatterChart` && n !== `axis`))
    return null;
  var f,
    p = iO;
  if (u === `ScatterChart`) ((f = i), (p = Yk));
  else if (u === `BarChart`) ((f = qP(l, i, o, c)), (p = bk));
  else if (l === `radial`) {
    var m = JP(i),
      g = m.cx,
      _ = m.cy,
      v = m.radius;
    ((f = {
      cx: g,
      cy: _,
      startAngle: m.startAngle,
      endAngle: m.endAngle,
      innerRadius: v,
      outerRadius: v,
    }),
      (p = YD));
  } else ((f = { points: YP(l, i, o) }), (p = iO));
  var y = QP(
    QP(QP(QP({ stroke: `#ccc`, pointerEvents: `none` }, o), f), Mh(d, !1)),
    {},
    {
      payload: a,
      payloadIndex: s,
      className: h(`recharts-tooltip-cursor`, d.className),
    },
  );
  return (0, X.isValidElement)(d)
    ? (0, X.cloneElement)(d, y)
    : (0, X.createElement)(p, y);
}
var rF = [`item`],
  iF = [
    `children`,
    `className`,
    `width`,
    `height`,
    `style`,
    `compact`,
    `title`,
    `desc`,
  ];
function aF(e) {
  "@babel/helpers - typeof";
  return (
    (aF =
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
    aF(e)
  );
}
function oF() {
  return (
    (oF = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oF.apply(this, arguments)
  );
}
function sF(e, t) {
  return uF(e) || lF(e, t) || TF(e, t) || cF();
}
function cF() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lF(e, t) {
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
