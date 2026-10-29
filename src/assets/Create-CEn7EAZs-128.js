// Create-CEn7EAZs 128 — props
// Lines 42018-43780 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var rI = function (e, t, n, r) {
    var i = e.graphicalItems,
      a = e.tooltipAxis,
      o = tI(t, e);
    return n < 0 || !i || !i.length || n >= o.length
      ? null
      : i.reduce(function (i, s) {
          var c = s.props.data ?? t;
          c &&
            e.dataStartIndex + e.dataEndIndex !== 0 &&
            e.dataEndIndex - e.dataStartIndex >= n &&
            (c = c.slice(e.dataStartIndex, e.dataEndIndex + 1));
          var l =
            a.dataKey && !a.allowDuplicatedCategory
              ? Gm(c === void 0 ? o : c, a.dataKey, r)
              : (c && c[n]) || o[n];
          return l ? [].concat(zF(i), [use(s, l)]) : i;
        }, []);
  },
  iI = function (e, t, n, r) {
    var i = r || { x: e.chartX, y: e.chartY },
      a = $F(i, n),
      o = e.orderedTooltipTicks,
      s = e.tooltipAxis,
      c = e.tooltipTicks,
      l = Xoe(a, o, c, s);
    if (l >= 0 && c) {
      var u = c[l] && c[l].value;
      return {
        activeTooltipIndex: l,
        activeLabel: u,
        activePayload: rI(e, t, l, u),
        activeCoordinate: eI(n, o, l, i),
      };
    }
    return null;
  },
  aI = function (e, t) {
    var n = t.axes,
      r = t.graphicalItems,
      i = t.axisType,
      a = t.axisIdKey,
      o = t.stackGroups,
      s = t.dataStartIndex,
      c = t.dataEndIndex,
      l = e.layout,
      u = e.children,
      d = e.stackOffset,
      f = yD(l, i);
    return n.reduce(function (t, n) {
      var p =
          n.type.defaultProps === void 0
            ? n.props
            : Q(Q({}, n.type.defaultProps), n.props),
        m = p.type,
        h = p.dataKey,
        g = p.allowDataOverflow,
        _ = p.allowDuplicatedCategory,
        v = p.scale,
        y = p.ticks,
        b = p.includeHidden,
        x = p[a];
      if (t[x]) return t;
      var S = tI(e.data, {
          graphicalItems: r.filter(function (e) {
            return (a in e.props ? e.props[a] : e.type.defaultProps?.[a]) === x;
          }),
          dataStartIndex: s,
          dataEndIndex: c,
        }),
        C = S.length,
        w,
        T,
        E;
      cF(p.domain, g, m) &&
        ((w = DD(p.domain, null, g)),
        f && (m === `number` || v !== `auto`) && (E = hD(S, h, `category`)));
      var D = nI(m);
      if (!w || w.length === 0) {
        var O = p.domain ?? D;
        if (h) {
          if (((w = hD(S, h, m)), m === `category` && f)) {
            var k = Gre(w);
            _ && k
              ? ((T = w), (w = (0, EM.default)(0, C)))
              : _ ||
                (w = kD(O, w, n).reduce(function (e, t) {
                  return e.indexOf(t) >= 0 ? e : [].concat(zF(e), [t]);
                }, []));
          } else if (m === `category`)
            w = _
              ? w.filter(function (e) {
                  return e !== `` && !(0, Im.default)(e);
                })
              : kD(O, w, n).reduce(function (e, t) {
                  return e.indexOf(t) >= 0 || t === `` || (0, Im.default)(t)
                    ? e
                    : [].concat(zF(e), [t]);
                }, []);
          else if (m === `number`) {
            var A = tse(
              S,
              r.filter(function (e) {
                var t = a in e.props ? e.props[a] : e.type.defaultProps?.[a],
                  n =
                    `hide` in e.props
                      ? e.props.hide
                      : e.type.defaultProps?.hide;
                return t === x && (b || !n);
              }),
              h,
              i,
              l,
            );
            A && (w = A);
          }
          f && (m === `number` || v !== `auto`) && (E = hD(S, h, `category`));
        } else
          w = f
            ? (0, EM.default)(0, C)
            : o && o[x] && o[x].hasStack && m === `number`
              ? d === `expand`
                ? [0, 1]
                : wD(o[x].stackGroups, s, c)
              : vD(
                  S,
                  r.filter(function (e) {
                    var t = a in e.props ? e.props[a] : e.type.defaultProps[a],
                      n =
                        `hide` in e.props
                          ? e.props.hide
                          : e.type.defaultProps.hide;
                    return t === x && (b || !n);
                  }),
                  m,
                  l,
                  !0,
                );
        if (m === `number`) ((w = ZP(u, w, x, i, y)), O && (w = DD(O, w, g)));
        else if (m === `category` && O) {
          var j = O;
          w.every(function (e) {
            return j.indexOf(e) >= 0;
          }) && (w = j);
        }
      }
      return Q(
        Q({}, t),
        {},
        KF(
          {},
          x,
          Q(
            Q({}, p),
            {},
            {
              axisType: i,
              domain: w,
              categoricalDomain: E,
              duplicateDomain: T,
              originalDomain: p.domain ?? D,
              isCategorical: f,
              layout: l,
            },
          ),
        ),
      );
    }, {});
  },
  oI = function (e, t) {
    var n = t.graphicalItems,
      r = t.Axis,
      i = t.axisType,
      a = t.axisIdKey,
      o = t.stackGroups,
      s = t.dataStartIndex,
      c = t.dataEndIndex,
      l = e.layout,
      u = e.children,
      d = tI(e.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: c }),
      f = d.length,
      p = yD(l, i),
      m = -1;
    return n.reduce(function (e, t) {
      var h = (
          t.type.defaultProps === void 0
            ? t.props
            : Q(Q({}, t.type.defaultProps), t.props)
        )[a],
        g = nI(`number`);
      if (!e[h]) {
        m++;
        var _;
        return (
          p
            ? (_ = (0, EM.default)(0, f))
            : o && o[h] && o[h].hasStack
              ? ((_ = wD(o[h].stackGroups, s, c)), (_ = ZP(u, _, h, i)))
              : ((_ = DD(
                  g,
                  vD(
                    d,
                    n.filter(function (e) {
                      var t =
                          a in e.props ? e.props[a] : e.type.defaultProps?.[a],
                        n =
                          `hide` in e.props
                            ? e.props.hide
                            : e.type.defaultProps?.hide;
                      return t === h && !n;
                    }),
                    `number`,
                    l,
                  ),
                  r.defaultProps.allowDataOverflow,
                )),
                (_ = ZP(u, _, h, i))),
          Q(
            Q({}, e),
            {},
            KF(
              {},
              h,
              Q(
                Q({ axisType: i }, r.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: (0, Fm.default)(YF, `${i}.${m % 2}`, null),
                  domain: _,
                  originalDomain: g,
                  isCategorical: p,
                  layout: l,
                },
              ),
            ),
          )
        );
      }
      return e;
    }, {});
  },
  sI = function (e, t) {
    var n = t.axisType,
      r = n === void 0 ? `xAxis` : n,
      i = t.AxisComp,
      a = t.graphicalItems,
      o = t.stackGroups,
      s = t.dataStartIndex,
      c = t.dataEndIndex,
      l = e.children,
      u = `${r}Id`,
      d = oh(l, i),
      f = {};
    return (
      d && d.length
        ? (f = aI(e, {
            axes: d,
            graphicalItems: a,
            axisType: r,
            axisIdKey: u,
            stackGroups: o,
            dataStartIndex: s,
            dataEndIndex: c,
          }))
        : a &&
          a.length &&
          (f = oI(e, {
            Axis: i,
            graphicalItems: a,
            axisType: r,
            axisIdKey: u,
            stackGroups: o,
            dataStartIndex: s,
            dataEndIndex: c,
          })),
      f
    );
  },
  cI = function (e) {
    var t = Um(e),
      n = bD(t, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: (0, Ny.default)(n, function (e) {
        return e.coordinate;
      }),
      tooltipAxis: t,
      tooltipAxisBandSize: OD(t, n),
    };
  },
  lI = function (e) {
    var t = e.children,
      n = e.defaultShowTooltip,
      r = sh(t, KM),
      i = 0,
      a = 0;
    return (
      e.data && e.data.length !== 0 && (a = e.data.length - 1),
      r &&
        r.props &&
        (r.props.startIndex >= 0 && (i = r.props.startIndex),
        r.props.endIndex >= 0 && (a = r.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: i,
        dataEndIndex: a,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  uI = function (e) {
    return !e || !e.length
      ? !1
      : e.some(function (e) {
          var t = nh(e && e.type);
          return t && t.indexOf(`Bar`) >= 0;
        });
  },
  dI = function (e) {
    return e === `horizontal`
      ? { numericAxisName: `yAxis`, cateAxisName: `xAxis` }
      : e === `vertical`
        ? { numericAxisName: `xAxis`, cateAxisName: `yAxis` }
        : e === `centric`
          ? { numericAxisName: `radiusAxis`, cateAxisName: `angleAxis` }
          : { numericAxisName: `angleAxis`, cateAxisName: `radiusAxis` };
  },
  fI = function (e, t) {
    var n = e.props,
      r = e.graphicalItems,
      i = e.xAxisMap,
      a = i === void 0 ? {} : i,
      o = e.yAxisMap,
      s = o === void 0 ? {} : o,
      c = n.width,
      l = n.height,
      u = n.children,
      d = n.margin || {},
      f = sh(u, KM),
      p = sh(u, dy),
      m = Object.keys(s).reduce(
        function (e, t) {
          var n = s[t],
            r = n.orientation;
          return !n.mirror && !n.hide
            ? Q(Q({}, e), {}, KF({}, r, e[r] + n.width))
            : e;
        },
        { left: d.left || 0, right: d.right || 0 },
      ),
      h = Q(
        Q(
          {},
          Object.keys(a).reduce(
            function (e, t) {
              var n = a[t],
                r = n.orientation;
              return !n.mirror && !n.hide
                ? Q(
                    Q({}, e),
                    {},
                    KF({}, r, (0, Fm.default)(e, `${r}`) + n.height),
                  )
                : e;
            },
            { top: d.top || 0, bottom: d.bottom || 0 },
          ),
        ),
        m,
      ),
      g = h.bottom;
    (f && (h.bottom += f.props.height || KM.defaultProps.height),
      p && t && (h = $oe(h, r, n, t)));
    var _ = c - h.left - h.right,
      v = l - h.top - h.bottom;
    return Q(
      Q({ brushBottom: g }, h),
      {},
      { width: Math.max(_, 0), height: Math.max(v, 0) },
    );
  },
  pI = function (e, t) {
    if (t === `xAxis`) return e[t].width;
    if (t === `yAxis`) return e[t].height;
  },
  mI = (function (e) {
    var t = e.chartName,
      n = e.GraphicalChild,
      r = e.defaultTooltipEventType,
      i = r === void 0 ? `axis` : r,
      a = e.validateTooltipEventTypes,
      o = a === void 0 ? [`axis`] : a,
      s = e.axisComponents,
      c = e.legendContent,
      l = e.formatAxisMap,
      u = e.defaultProps,
      d = function (e, t) {
        var n = t.graphicalItems,
          r = t.stackGroups,
          i = t.offset,
          a = t.updateId,
          o = t.dataStartIndex,
          c = t.dataEndIndex,
          l = e.barSize,
          u = e.layout,
          d = e.barGap,
          f = e.barCategoryGap,
          p = e.maxBarSize,
          m = dI(u),
          h = m.numericAxisName,
          g = m.cateAxisName,
          _ = uI(n),
          v = [];
        return (
          n.forEach(function (n, m) {
            var y = tI(e.data, {
                graphicalItems: [n],
                dataStartIndex: o,
                dataEndIndex: c,
              }),
              b =
                n.type.defaultProps === void 0
                  ? n.props
                  : Q(Q({}, n.type.defaultProps), n.props),
              x = b.dataKey,
              S = b.maxBarSize,
              C = b[`${h}Id`],
              w = b[`${g}Id`],
              T = s.reduce(function (e, n) {
                var r = t[`${n.axisType}Map`],
                  i = b[`${n.axisType}Id`];
                !((r && r[i]) || n.axisType === `zAxis`) && WE(!1);
                var a = r[i];
                return Q(
                  Q({}, e),
                  {},
                  KF(KF({}, n.axisType, a), `${n.axisType}Ticks`, bD(a)),
                );
              }, {}),
              E = T[g],
              D = T[`${g}Ticks`],
              O = r && r[C] && r[C].hasStack && cse(n, r[C].stackGroups),
              k = nh(n.type).indexOf(`Bar`) >= 0,
              A = OD(E, D),
              j = [],
              M = _ && Zoe({ barSize: l, stackGroups: r, totalSize: pI(T, g) });
            if (k) {
              var N = (0, Im.default)(S) ? p : S,
                P = OD(E, D, !0) ?? N ?? 0;
              ((j = Qoe({
                barGap: d,
                barCategoryGap: f,
                bandSize: P === A ? A : P,
                sizeList: M[w],
                maxBarSize: N,
              })),
                P !== A &&
                  (j = j.map(function (e) {
                    return Q(
                      Q({}, e),
                      {},
                      {
                        position: Q(
                          Q({}, e.position),
                          {},
                          { offset: e.position.offset - P / 2 },
                        ),
                      },
                    );
                  })));
            }
            var F = n && n.type && n.type.getComposedData;
            F &&
              v.push({
                props: Q(
                  Q(
                    {},
                    F(
                      Q(
                        Q({}, T),
                        {},
                        {
                          displayedData: y,
                          props: e,
                          dataKey: x,
                          item: n,
                          bandSize: A,
                          barPosition: j,
                          offset: i,
                          stackedData: O,
                          layout: u,
                          dataStartIndex: o,
                          dataEndIndex: c,
                        },
                      ),
                    ),
                  ),
                  {},
                  KF(
                    KF(KF({ key: n.key || `item-${m}` }, h, T[h]), g, T[g]),
                    `animationId`,
                    a,
                  ),
                ),
                childIndex: iie(n, e.children),
                item: n,
              });
          }),
          v
        );
      },
      f = function (e, r) {
        var i = e.props,
          a = e.dataStartIndex,
          o = e.dataEndIndex,
          c = e.updateId;
        if (!ch({ props: i })) return null;
        var u = i.children,
          f = i.layout,
          p = i.stackOffset,
          m = i.data,
          h = i.reverseStackOrder,
          g = dI(f),
          _ = g.numericAxisName,
          v = g.cateAxisName,
          y = oh(u, n),
          b = ose(m, y, `${_}Id`, `${v}Id`, p, h),
          x = s.reduce(function (e, t) {
            var n = `${t.axisType}Map`;
            return Q(
              Q({}, e),
              {},
              KF(
                {},
                n,
                sI(
                  i,
                  Q(
                    Q({}, t),
                    {},
                    {
                      graphicalItems: y,
                      stackGroups: t.axisType === _ && b,
                      dataStartIndex: a,
                      dataEndIndex: o,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          S = fI(
            Q(Q({}, x), {}, { props: i, graphicalItems: y }),
            r?.legendBBox,
          );
        Object.keys(x).forEach(function (e) {
          x[e] = l(i, x[e], S, e.replace(`Map`, ``), t);
        });
        var C = x[`${v}Map`],
          w = cI(C);
        return Q(
          Q(
            {
              formattedGraphicalItems: d(
                i,
                Q(
                  Q({}, x),
                  {},
                  {
                    dataStartIndex: a,
                    dataEndIndex: o,
                    updateId: c,
                    graphicalItems: y,
                    stackGroups: b,
                    offset: S,
                  },
                ),
              ),
              graphicalItems: y,
              offset: S,
              stackGroups: b,
            },
            w,
          ),
          x,
        );
      },
      p = (function (e) {
        function n(e) {
          var r;
          return (
            kF(this, n),
            (r = MF(this, n, [e])),
            KF(r, `eventEmitterSymbol`, Symbol(`rechartsEventEmitter`)),
            KF(r, `accessibilityManager`, new sF()),
            KF(r, `handleLegendBBoxUpdate`, function (e) {
              if (e) {
                var t = r.state,
                  n = t.dataStartIndex,
                  i = t.dataEndIndex,
                  a = t.updateId;
                r.setState(
                  Q(
                    { legendBBox: e },
                    f(
                      {
                        props: r.props,
                        dataStartIndex: n,
                        dataEndIndex: i,
                        updateId: a,
                      },
                      Q(Q({}, r.state), {}, { legendBBox: e }),
                    ),
                  ),
                );
              }
            }),
            KF(r, `handleReceiveSyncEvent`, function (e, t, n) {
              if (r.props.syncId === e) {
                if (
                  n === r.eventEmitterSymbol &&
                  typeof r.props.syncMethod != `function`
                )
                  return;
                r.applySyncEvent(t);
              }
            }),
            KF(r, `handleBrushChange`, function (e) {
              var t = e.startIndex,
                n = e.endIndex;
              if (t !== r.state.dataStartIndex || n !== r.state.dataEndIndex) {
                var i = r.state.updateId;
                (r.setState(function () {
                  return Q(
                    { dataStartIndex: t, dataEndIndex: n },
                    f(
                      {
                        props: r.props,
                        dataStartIndex: t,
                        dataEndIndex: n,
                        updateId: i,
                      },
                      r.state,
                    ),
                  );
                }),
                  r.triggerSyncEvent({ dataStartIndex: t, dataEndIndex: n }));
              }
            }),
            KF(r, `handleMouseEnter`, function (e) {
              var t = r.getMouseInfo(e);
              if (t) {
                var n = Q(Q({}, t), {}, { isTooltipActive: !0 });
                (r.setState(n), r.triggerSyncEvent(n));
                var i = r.props.onMouseEnter;
                (0, $m.default)(i) && i(n, e);
              }
            }),
            KF(r, `triggeredAfterMouseMove`, function (e) {
              var t = r.getMouseInfo(e),
                n = t
                  ? Q(Q({}, t), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              (r.setState(n), r.triggerSyncEvent(n));
              var i = r.props.onMouseMove;
              (0, $m.default)(i) && i(n, e);
            }),
            KF(r, `handleItemMouseEnter`, function (e) {
              r.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: e,
                  activePayload: e.tooltipPayload,
                  activeCoordinate: e.tooltipPosition || { x: e.cx, y: e.cy },
                };
              });
            }),
            KF(r, `handleItemMouseLeave`, function () {
              r.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            KF(r, `handleMouseMove`, function (e) {
              (e.persist(), r.throttleTriggeredAfterMouseMove(e));
            }),
            KF(r, `handleMouseLeave`, function (e) {
              r.throttleTriggeredAfterMouseMove.cancel();
              var t = { isTooltipActive: !1 };
              (r.setState(t), r.triggerSyncEvent(t));
              var n = r.props.onMouseLeave;
              (0, $m.default)(n) && n(t, e);
            }),
            KF(r, `handleOuterEvent`, function (e) {
              var t = rie(e),
                n = (0, Fm.default)(r.props, `${t}`);
              t &&
                (0, $m.default)(n) &&
                n(
                  (/.*touch.*/i.test(t)
                    ? r.getMouseInfo(e.changedTouches[0])
                    : r.getMouseInfo(e)) ?? {},
                  e,
                );
            }),
            KF(r, `handleClick`, function (e) {
              var t = r.getMouseInfo(e);
              if (t) {
                var n = Q(Q({}, t), {}, { isTooltipActive: !0 });
                (r.setState(n), r.triggerSyncEvent(n));
                var i = r.props.onClick;
                (0, $m.default)(i) && i(n, e);
              }
            }),
            KF(r, `handleMouseDown`, function (e) {
              var t = r.props.onMouseDown;
              (0, $m.default)(t) && t(r.getMouseInfo(e), e);
            }),
            KF(r, `handleMouseUp`, function (e) {
              var t = r.props.onMouseUp;
              (0, $m.default)(t) && t(r.getMouseInfo(e), e);
            }),
            KF(r, `handleTouchMove`, function (e) {
              e.changedTouches != null &&
                e.changedTouches.length > 0 &&
                r.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
            }),
            KF(r, `handleTouchStart`, function (e) {
              e.changedTouches != null &&
                e.changedTouches.length > 0 &&
                r.handleMouseDown(e.changedTouches[0]);
            }),
            KF(r, `handleTouchEnd`, function (e) {
              e.changedTouches != null &&
                e.changedTouches.length > 0 &&
                r.handleMouseUp(e.changedTouches[0]);
            }),
            KF(r, `handleDoubleClick`, function (e) {
              var t = r.props.onDoubleClick;
              (0, $m.default)(t) && t(r.getMouseInfo(e), e);
            }),
            KF(r, `handleContextMenu`, function (e) {
              var t = r.props.onContextMenu;
              (0, $m.default)(t) && t(r.getMouseInfo(e), e);
            }),
            KF(r, `triggerSyncEvent`, function (e) {
              r.props.syncId !== void 0 &&
                QP.emit($P, r.props.syncId, e, r.eventEmitterSymbol);
            }),
            KF(r, `applySyncEvent`, function (e) {
              var t = r.props,
                n = t.layout,
                i = t.syncMethod,
                a = r.state.updateId,
                o = e.dataStartIndex,
                s = e.dataEndIndex;
              if (e.dataStartIndex !== void 0 || e.dataEndIndex !== void 0)
                r.setState(
                  Q(
                    { dataStartIndex: o, dataEndIndex: s },
                    f(
                      {
                        props: r.props,
                        dataStartIndex: o,
                        dataEndIndex: s,
                        updateId: a,
                      },
                      r.state,
                    ),
                  ),
                );
              else if (e.activeTooltipIndex !== void 0) {
                var c = e.chartX,
                  l = e.chartY,
                  u = e.activeTooltipIndex,
                  d = r.state,
                  p = d.offset,
                  m = d.tooltipTicks;
                if (!p) return;
                if (typeof i == `function`) u = i(m, e);
                else if (i === `value`) {
                  u = -1;
                  for (var h = 0; h < m.length; h++)
                    if (m[h].value === e.activeLabel) {
                      u = h;
                      break;
                    }
                }
                var g = Q(Q({}, p), {}, { x: p.left, y: p.top }),
                  _ = Math.min(c, g.x + g.width),
                  v = Math.min(l, g.y + g.height),
                  y = m[u] && m[u].value,
                  b = rI(r.state, r.props.data, u),
                  x = m[u]
                    ? {
                        x: n === `horizontal` ? m[u].coordinate : _,
                        y: n === `horizontal` ? v : m[u].coordinate,
                      }
                    : ZF;
                r.setState(
                  Q(
                    Q({}, e),
                    {},
                    {
                      activeLabel: y,
                      activeCoordinate: x,
                      activePayload: b,
                      activeTooltipIndex: u,
                    },
                  ),
                );
              } else r.setState(e);
            }),
            KF(r, `renderCursor`, function (e) {
              var n = r.state,
                i = n.isTooltipActive,
                a = n.activeCoordinate,
                o = n.activePayload,
                s = n.offset,
                c = n.activeTooltipIndex,
                l = n.tooltipAxisBandSize,
                u = r.getTooltipEventType(),
                d = e.props.active ?? i,
                f = r.props.layout,
                p = e.key || `_recharts-cursor`;
              return X.createElement(vF, {
                key: p,
                activeCoordinate: a,
                activePayload: o,
                activeTooltipIndex: c,
                chartName: t,
                element: e,
                isActive: d,
                layout: f,
                offset: s,
                tooltipAxisBandSize: l,
                tooltipEventType: u,
              });
            }),
            KF(r, `renderPolarAxis`, function (e, t, n) {
              var i = (0, Fm.default)(e, `type.axisType`),
                a = (0, Fm.default)(r.state, `${i}Map`),
                o = e.type.defaultProps,
                s = o === void 0 ? e.props : Q(Q({}, o), e.props),
                c = a && a[s[`${i}Id`]];
              return (0, X.cloneElement)(
                e,
                Q(
                  Q({}, c),
                  {},
                  {
                    className: h(i, c.className),
                    key: e.key || `${t}-${n}`,
                    ticks: bD(c, !0),
                  },
                ),
              );
            }),
            KF(r, `renderPolarGrid`, function (e) {
              var t = e.props,
                n = t.radialLines,
                i = t.polarAngles,
                a = t.polarRadius,
                o = r.state,
                s = o.radiusAxisMap,
                c = o.angleAxisMap,
                l = Um(s),
                u = Um(c),
                d = u.cx,
                f = u.cy,
                p = u.innerRadius,
                m = u.outerRadius;
              return (0, X.cloneElement)(e, {
                polarAngles: Array.isArray(i)
                  ? i
                  : bD(u, !0).map(function (e) {
                      return e.coordinate;
                    }),
                polarRadius: Array.isArray(a)
                  ? a
                  : bD(l, !0).map(function (e) {
                      return e.coordinate;
                    }),
                cx: d,
                cy: f,
                innerRadius: p,
                outerRadius: m,
                key: e.key || `polar-grid`,
                radialLines: n,
              });
            }),
            KF(r, `renderLegend`, function () {
              var e = r.state.formattedGraphicalItems,
                t = r.props,
                n = t.children,
                i = t.width,
                a = t.height,
                o = r.props.margin || {},
                s = iD({
                  children: n,
                  formattedGraphicalItems: e,
                  legendWidth: i - (o.left || 0) - (o.right || 0),
                  legendContent: c,
                });
              if (!s) return null;
              var l = s.item;
              return (0, X.cloneElement)(
                l,
                Q(
                  Q({}, DF(s, yF)),
                  {},
                  {
                    chartWidth: i,
                    chartHeight: a,
                    margin: o,
                    onBBoxUpdate: r.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            KF(r, `renderTooltip`, function () {
              var e = r.props,
                t = e.children,
                n = e.accessibilityLayer,
                i = sh(t, Hb);
              if (!i) return null;
              var a = r.state,
                o = a.isTooltipActive,
                s = a.activeCoordinate,
                c = a.activePayload,
                l = a.activeLabel,
                u = a.offset,
                d = i.props.active ?? o;
              return (0, X.cloneElement)(i, {
                viewBox: Q(Q({}, u), {}, { x: u.left, y: u.top }),
                active: d,
                label: l,
                payload: d ? c : [],
                coordinate: s,
                accessibilityLayer: n,
              });
            }),
            KF(r, `renderBrush`, function (e) {
              var t = r.props,
                n = t.margin,
                i = t.data,
                a = r.state,
                o = a.offset,
                s = a.dataStartIndex,
                c = a.dataEndIndex,
                l = a.updateId;
              return (0, X.cloneElement)(e, {
                key: e.key || `_recharts-brush`,
                onChange: SD(r.handleBrushChange, e.props.onChange),
                data: i,
                x: zm(e.props.x) ? e.props.x : o.left,
                y: zm(e.props.y)
                  ? e.props.y
                  : o.top + o.height + o.brushBottom - (n.bottom || 0),
                width: zm(e.props.width) ? e.props.width : o.width,
                startIndex: s,
                endIndex: c,
                updateId: `brush-${l}`,
              });
            }),
            KF(r, `renderReferenceElement`, function (e, t, n) {
              if (!e) return null;
              var i = r.clipPathId,
                a = r.state,
                o = a.xAxisMap,
                s = a.yAxisMap,
                c = a.offset,
                l = e.type.defaultProps || {},
                u = e.props,
                d = u.xAxisId,
                f = d === void 0 ? l.xAxisId : d,
                p = u.yAxisId,
                m = p === void 0 ? l.yAxisId : p;
              return (0, X.cloneElement)(e, {
                key: e.key || `${t}-${n}`,
                xAxis: o[f],
                yAxis: s[m],
                viewBox: {
                  x: c.left,
                  y: c.top,
                  width: c.width,
                  height: c.height,
                },
                clipPathId: i,
              });
            }),
            KF(r, `renderActivePoints`, function (e) {
              var t = e.item,
                r = e.activePoint,
                i = e.basePoint,
                a = e.childIndex,
                o = e.isRange,
                s = [],
                c = t.props.key,
                l =
                  t.item.type.defaultProps === void 0
                    ? t.item.props
                    : Q(Q({}, t.item.type.defaultProps), t.item.props),
                u = l.activeDot,
                d = l.dataKey,
                f = Q(
                  Q(
                    {
                      index: a,
                      dataKey: d,
                      cx: r.x,
                      cy: r.y,
                      r: 4,
                      fill: gD(t.item),
                      strokeWidth: 2,
                      stroke: `#fff`,
                      payload: r.payload,
                      value: r.value,
                    },
                    lh(u, !1),
                  ),
                  Zm(u),
                );
              return (
                s.push(n.renderActiveDot(u, f, `${c}-activePoint-${a}`)),
                i
                  ? s.push(
                      n.renderActiveDot(
                        u,
                        Q(Q({}, f), {}, { cx: i.x, cy: i.y }),
                        `${c}-basePoint-${a}`,
                      ),
                    )
                  : o && s.push(null),
                s
              );
            }),
            KF(r, `renderGraphicChild`, function (e, t, n) {
              var i = r.filterFormatItem(e, t, n);
              if (!i) return null;
              var a = r.getTooltipEventType(),
                o = r.state,
                s = o.isTooltipActive,
                c = o.tooltipAxis,
                l = o.activeTooltipIndex,
                u = o.activeLabel,
                d = r.props.children,
                f = sh(d, Hb),
                p = i.props,
                m = p.points,
                h = p.isRange,
                g = p.baseLine,
                _ =
                  i.item.type.defaultProps === void 0
                    ? i.item.props
                    : Q(Q({}, i.item.type.defaultProps), i.item.props),
                v = _.activeDot,
                y = _.hide,
                b = _.activeBar,
                x = _.activeShape,
                S = !!(!y && s && f && (v || b || x)),
                C = {};
              a !== `axis` && f && f.props.trigger === `click`
                ? (C = { onClick: SD(r.handleItemMouseEnter, e.props.onClick) })
                : a !== `axis` &&
                  (C = {
                    onMouseLeave: SD(
                      r.handleItemMouseLeave,
                      e.props.onMouseLeave,
                    ),
                    onMouseEnter: SD(
                      r.handleItemMouseEnter,
                      e.props.onMouseEnter,
                    ),
                  });
              var w = (0, X.cloneElement)(e, Q(Q({}, i.props), C));
              function T(e) {
                return typeof c.dataKey == `function`
                  ? c.dataKey(e.payload)
                  : null;
              }
              if (S)
                if (l >= 0) {
                  var E, D;
                  if (c.dataKey && !c.allowDuplicatedCategory) {
                    var O =
                      typeof c.dataKey == `function`
                        ? T
                        : `payload.${c.dataKey.toString()}`;
                    ((E = Gm(m, O, u)), (D = h && g && Gm(g, O, u)));
                  } else ((E = m?.[l]), (D = h && g && g[l]));
                  if (x || b) {
                    var k =
                      e.props.activeIndex === void 0 ? l : e.props.activeIndex;
                    return [
                      (0, X.cloneElement)(
                        e,
                        Q(Q(Q({}, i.props), C), {}, { activeIndex: k }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!(0, Im.default)(E))
                    return [w].concat(
                      zF(
                        r.renderActivePoints({
                          item: i,
                          activePoint: E,
                          basePoint: D,
                          childIndex: l,
                          isRange: h,
                        }),
                      ),
                    );
                } else {
                  var A = (
                      r.getItemByXY(r.state.activeCoordinate) ?? {
                        graphicalItem: w,
                      }
                    ).graphicalItem,
                    j = A.item,
                    M = j === void 0 ? e : j,
                    N = A.childIndex;
                  return [
                    (0, X.cloneElement)(
                      M,
                      Q(Q(Q({}, i.props), C), {}, { activeIndex: N }),
                    ),
                    null,
                    null,
                  ];
                }
              return h ? [w, null, null] : [w, null];
            }),
            KF(r, `renderCustomized`, function (e, t, n) {
              return (0, X.cloneElement)(
                e,
                Q(Q({ key: `recharts-customized-${n}` }, r.props), r.state),
              );
            }),
            KF(r, `renderMap`, {
              CartesianGrid: { handler: QF, once: !0 },
              ReferenceArea: { handler: r.renderReferenceElement },
              ReferenceLine: { handler: QF },
              ReferenceDot: { handler: r.renderReferenceElement },
              XAxis: { handler: QF },
              YAxis: { handler: QF },
              Brush: { handler: r.renderBrush, once: !0 },
              Bar: { handler: r.renderGraphicChild },
              Line: { handler: r.renderGraphicChild },
              Area: { handler: r.renderGraphicChild },
              Radar: { handler: r.renderGraphicChild },
              RadialBar: { handler: r.renderGraphicChild },
              Scatter: { handler: r.renderGraphicChild },
              Pie: { handler: r.renderGraphicChild },
              Funnel: { handler: r.renderGraphicChild },
              Tooltip: { handler: r.renderCursor, once: !0 },
              PolarGrid: { handler: r.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: r.renderPolarAxis },
              PolarRadiusAxis: { handler: r.renderPolarAxis },
              Customized: { handler: r.renderCustomized },
            }),
            (r.clipPathId = `${e.id ?? Vm(`recharts`)}-clip`),
            (r.throttleTriggeredAfterMouseMove = (0, Jb.default)(
              r.triggeredAfterMouseMove,
              e.throttleDelay ?? 1e3 / 60,
            )),
            (r.state = {}),
            r
          );
        }
        return (
          LF(n, e),
          jF(n, [
            {
              key: `componentDidMount`,
              value: function () {
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left: this.props.margin.left ?? 0,
                      top: this.props.margin.top ?? 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: `displayDefaultTooltip`,
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.data,
                  r = e.height,
                  i = e.layout,
                  a = sh(t, Hb);
                if (a) {
                  var o = a.props.defaultIndex;
                  if (!(
                    typeof o != `number` ||
                    o < 0 ||
                    o > this.state.tooltipTicks.length - 1
                  )) {
                    var s =
                        this.state.tooltipTicks[o] &&
                        this.state.tooltipTicks[o].value,
                      c = rI(this.state, n, o, s),
                      l = this.state.tooltipTicks[o].coordinate,
                      u = (this.state.offset.top + r) / 2,
                      d = i === `horizontal` ? { x: l, y: u } : { y: l, x: u },
                      f = this.state.formattedGraphicalItems.find(function (e) {
                        return e.item.type.name === `Scatter`;
                      });
                    f &&
                      ((d = Q(Q({}, d), f.props.points[o].tooltipPosition)),
                      (c = f.props.points[o].tooltipPayload));
                    var p = {
                      activeTooltipIndex: o,
                      isTooltipActive: !0,
                      activeLabel: s,
                      activePayload: c,
                      activeCoordinate: d,
                    };
                    (this.setState(p),
                      this.renderCursor(a),
                      this.accessibilityManager.setIndex(o));
                  }
                }
              },
            },
            {
              key: `getSnapshotBeforeUpdate`,
              value: function (e, t) {
                return this.props.accessibilityLayer
                  ? (this.state.tooltipTicks !== t.tooltipTicks &&
                      this.accessibilityManager.setDetails({
                        coordinateList: this.state.tooltipTicks,
                      }),
                    this.props.layout !== e.layout &&
                      this.accessibilityManager.setDetails({
                        layout: this.props.layout,
                      }),
                    this.props.margin !== e.margin &&
                      this.accessibilityManager.setDetails({
                        offset: {
                          left: this.props.margin.left ?? 0,
                          top: this.props.margin.top ?? 0,
                        },
                      }),
                    null)
                  : null;
              },
            },
            {
              key: `componentDidUpdate`,
              value: function (e) {
                uh([sh(e.children, Hb)], [sh(this.props.children, Hb)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: `componentWillUnmount`,
              value: function () {
                (this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: `getTooltipEventType`,
              value: function () {
                var e = sh(this.props.children, Hb);
                if (e && typeof e.props.shared == `boolean`) {
                  var t = e.props.shared ? `axis` : `item`;
                  return o.indexOf(t) >= 0 ? t : i;
                }
                return i;
              },
            },
            {
              key: `getMouseInfo`,
              value: function (e) {
                if (!this.container) return null;
                var t = this.container,
                  n = t.getBoundingClientRect(),
                  r = xx(n),
                  i = {
                    chartX: Math.round(e.pageX - r.left),
                    chartY: Math.round(e.pageY - r.top),
                  },
                  a = n.width / t.offsetWidth || 1,
                  o = this.inRange(i.chartX, i.chartY, a);
                if (!o) return null;
                var s = this.state,
                  c = s.xAxisMap,
                  l = s.yAxisMap,
                  u = this.getTooltipEventType(),
                  d = iI(this.state, this.props.data, this.props.layout, o);
                if (u !== `axis` && c && l) {
                  var f = Um(c).scale,
                    p = Um(l).scale,
                    m = f && f.invert ? f.invert(i.chartX) : null,
                    h = p && p.invert ? p.invert(i.chartY) : null;
                  return Q(Q({}, i), {}, { xValue: m, yValue: h }, d);
                }
                return d ? Q(Q({}, i), d) : null;
              },
            },
            {
              key: `inRange`,
              value: function (e, t) {
                var n =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  r = this.props.layout,
                  i = e / n,
                  a = t / n;
                if (r === `horizontal` || r === `vertical`) {
                  var o = this.state.offset;
                  return i >= o.left &&
                    i <= o.left + o.width &&
                    a >= o.top &&
                    a <= o.top + o.height
                    ? { x: i, y: a }
                    : null;
                }
                var s = this.state,
                  c = s.angleAxisMap,
                  l = s.radiusAxisMap;
                if (c && l) {
                  var u = Um(c);
                  return RD({ x: i, y: a }, u);
                }
                return null;
              },
            },
            {
              key: `parseEventsOfWrapper`,
              value: function () {
                var e = this.props.children,
                  t = this.getTooltipEventType(),
                  n = sh(e, Hb),
                  r = {};
                return (
                  n &&
                    t === `axis` &&
                    (r =
                      n.props.trigger === `click`
                        ? { onClick: this.handleClick }
                        : {
                            onMouseEnter: this.handleMouseEnter,
                            onDoubleClick: this.handleDoubleClick,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                            onContextMenu: this.handleContextMenu,
                          }),
                  Q(Q({}, Zm(this.props, this.handleOuterEvent)), r)
                );
              },
            },
            {
              key: `addListener`,
              value: function () {
                QP.on($P, this.handleReceiveSyncEvent);
              },
            },
            {
              key: `removeListener`,
              value: function () {
                QP.removeListener($P, this.handleReceiveSyncEvent);
              },
            },
            {
              key: `filterFormatItem`,
              value: function (e, t, n) {
                for (
                  var r = this.state.formattedGraphicalItems,
                    i = 0,
                    a = r.length;
                  i < a;
                  i++
                ) {
                  var o = r[i];
                  if (
                    o.item === e ||
                    o.props.key === e.key ||
                    (t === nh(o.item.type) && n === o.childIndex)
                  )
                    return o;
                }
                return null;
              },
            },
            {
              key: `renderClipPath`,
              value: function () {
                var e = this.clipPathId,
                  t = this.state.offset,
                  n = t.left,
                  r = t.top,
                  i = t.height,
                  a = t.width;
                return X.createElement(
                  `defs`,
                  null,
                  X.createElement(
                    `clipPath`,
                    { id: e },
                    X.createElement(`rect`, {
                      x: n,
                      y: r,
                      height: i,
                      width: a,
                    }),
                  ),
                );
              },
            },
            {
              key: `getXScales`,
              value: function () {
                var e = this.state.xAxisMap;
                return e
                  ? Object.entries(e).reduce(function (e, t) {
                      var n = CF(t, 2),
                        r = n[0],
                        i = n[1];
                      return Q(Q({}, e), {}, KF({}, r, i.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: `getYScales`,
              value: function () {
                var e = this.state.yAxisMap;
                return e
                  ? Object.entries(e).reduce(function (e, t) {
                      var n = CF(t, 2),
                        r = n[0],
                        i = n[1];
                      return Q(Q({}, e), {}, KF({}, r, i.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: `getXScaleByAxisId`,
              value: function (e) {
                var t;
                return (t = this.state.xAxisMap) == null || (t = t[e]) == null
                  ? void 0
                  : t.scale;
              },
            },
            {
              key: `getYScaleByAxisId`,
              value: function (e) {
                var t;
                return (t = this.state.yAxisMap) == null || (t = t[e]) == null
                  ? void 0
                  : t.scale;
              },
            },
            {
              key: `getItemByXY`,
              value: function (e) {
                var t = this.state,
                  n = t.formattedGraphicalItems,
                  r = t.activeItem;
                if (n && n.length)
                  for (var i = 0, a = n.length; i < a; i++) {
                    var o = n[i],
                      s = o.props,
                      c = o.item,
                      l =
                        c.type.defaultProps === void 0
                          ? c.props
                          : Q(Q({}, c.type.defaultProps), c.props),
                      u = nh(c.type);
                    if (u === `Bar`) {
                      var d = (s.data || []).find(function (t) {
                        return Pk(e, t);
                      });
                      if (d) return { graphicalItem: o, payload: d };
                    } else if (u === `RadialBar`) {
                      var f = (s.data || []).find(function (t) {
                        return RD(e, t);
                      });
                      if (f) return { graphicalItem: o, payload: f };
                    } else if (zj(o, r) || Bj(o, r) || Vj(o, r)) {
                      var p = Jj({
                          graphicalItem: o,
                          activeTooltipItem: r,
                          itemData: l.data,
                        }),
                        m = l.activeIndex === void 0 ? p : l.activeIndex;
                      return {
                        graphicalItem: Q(Q({}, o), {}, { childIndex: m }),
                        payload: Vj(o, r) ? l.data[p] : o.props.data[p],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: `render`,
              value: function () {
                var e = this;
                if (!ch(this)) return null;
                var t = this.props,
                  n = t.children,
                  r = t.className,
                  i = t.width,
                  a = t.height,
                  o = t.style,
                  s = t.compact,
                  c = t.title,
                  l = t.desc,
                  u = lh(DF(t, bF), !1);
                if (s)
                  return X.createElement(
                    ON,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    X.createElement(
                      mh,
                      SF({}, u, { width: i, height: a, title: c, desc: l }),
                      this.renderClipPath(),
                      fh(n, this.renderMap),
                    ),
                  );
                this.props.accessibilityLayer &&
                  ((u.tabIndex = this.props.tabIndex ?? 0),
                  (u.role = this.props.role ?? `application`),
                  (u.onKeyDown = function (t) {
                    e.accessibilityManager.keyboardEvent(t);
                  }),
                  (u.onFocus = function () {
                    e.accessibilityManager.focus();
                  }));
                var d = this.parseEventsOfWrapper();
                return X.createElement(
                  ON,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  X.createElement(
                    `div`,
                    SF(
                      {
                        className: h(`recharts-wrapper`, r),
                        style: Q(
                          {
                            position: `relative`,
                            cursor: `default`,
                            width: i,
                            height: a,
                          },
                          o,
                        ),
                      },
                      d,
                      {
                        ref: function (t) {
                          e.container = t;
                        },
                      },
                    ),
                    X.createElement(
                      mh,
                      SF({}, u, {
                        width: i,
                        height: a,
                        title: c,
                        desc: l,
                        style: XF,
                      }),
                      this.renderClipPath(),
                      fh(n, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(X.Component);
    (KF(p, `displayName`, t),
      KF(
        p,
        `defaultProps`,
        Q(
          {
            layout: `horizontal`,
            stackOffset: `none`,
            barCategoryGap: `10%`,
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: `index`,
          },
          u,
        ),
      ),
      KF(p, `getDerivedStateFromProps`, function (e, t) {
        var n = e.dataKey,
          r = e.data,
          i = e.children,
          a = e.width,
          o = e.height,
          s = e.layout,
          c = e.stackOffset,
          l = e.margin,
          u = t.dataStartIndex,
          d = t.dataEndIndex;
        if (t.updateId === void 0) {
          var p = lI(e);
          return Q(
            Q(
              Q({}, p),
              {},
              { updateId: 0 },
              f(Q(Q({ props: e }, p), {}, { updateId: 0 }), t),
            ),
            {},
            {
              prevDataKey: n,
              prevData: r,
              prevWidth: a,
              prevHeight: o,
              prevLayout: s,
              prevStackOffset: c,
              prevMargin: l,
              prevChildren: i,
            },
          );
        }
        if (
          n !== t.prevDataKey ||
          r !== t.prevData ||
          a !== t.prevWidth ||
          o !== t.prevHeight ||
          s !== t.prevLayout ||
          c !== t.prevStackOffset ||
          !Km(l, t.prevMargin)
        ) {
          var m = lI(e),
            h = {
              chartX: t.chartX,
              chartY: t.chartY,
              isTooltipActive: t.isTooltipActive,
            },
            g = Q(Q({}, iI(t, r, s)), {}, { updateId: t.updateId + 1 }),
            _ = Q(Q(Q({}, m), h), g);
          return Q(
            Q(Q({}, _), f(Q({ props: e }, _), t)),
            {},
            {
              prevDataKey: n,
              prevData: r,
              prevWidth: a,
              prevHeight: o,
              prevLayout: s,
              prevStackOffset: c,
              prevMargin: l,
              prevChildren: i,
            },
          );
        }
        if (!uh(i, t.prevChildren)) {
          var v = sh(i, KM),
            y = v ? (v.props?.startIndex ?? u) : u,
            b = v ? (v.props?.endIndex ?? d) : d,
            x = y !== u || b !== d,
            S = !(0, Im.default)(r) && !x ? t.updateId : t.updateId + 1;
          return Q(
            Q(
              { updateId: S },
              f(
                Q(
                  Q({ props: e }, t),
                  {},
                  { updateId: S, dataStartIndex: y, dataEndIndex: b },
                ),
                t,
              ),
            ),
            {},
            { prevChildren: i, dataStartIndex: y, dataEndIndex: b },
          );
        }
        return null;
      }),
      KF(p, `renderActiveDot`, function (e, t, n) {
        var r = (0, X.isValidElement)(e)
          ? (0, X.cloneElement)(e, t)
          : (0, $m.default)(e)
            ? e(t)
            : X.createElement($k, t);
        return X.createElement(
          gh,
          { className: `recharts-active-dot`, key: n },
          r,
        );
      }));
    var m = (0, X.forwardRef)(function (e, t) {
      return X.createElement(p, SF({}, e, { ref: t }));
    });
    return ((m.displayName = p.displayName), m);
  })({
    chartName: `PieChart`,
    GraphicalChild: pM,
    validateTooltipEventTypes: [`item`],
    defaultTooltipEventType: `item`,
    legendContent: `children`,
    axisComponents: [
      { axisType: `angleAxis`, AxisComp: rj },
      { axisType: `radiusAxis`, AxisComp: LA },
    ],
    formatAxisMap: yse,
    defaultProps: {
      layout: `centric`,
      startAngle: 0,
      endAngle: 360,
      cx: `50%`,
      cy: `50%`,
      innerRadius: 0,
      outerRadius: `80%`,
    },
  }),
  hI = {
    art: (0, Z.jsx)(Ae, { className: `h-4 w-4` }),
    development: (0, Z.jsx)(yt, { className: `h-4 w-4` }),
    audio: (0, Z.jsx)(Nt, { className: `h-4 w-4` }),
    design: (0, Z.jsx)(Fr, { className: `h-4 w-4` }),
    qa: (0, Z.jsx)(Ao, { className: `h-4 w-4` }),
  },
  gI = Object.fromEntries(Object.entries(Mn).map(([e, t]) => [e, t.bgClass])),
  _I = Object.fromEntries(Object.entries(Mn).map(([e, t]) => [e, t.hex])),
  vI = Object.fromEntries(
    Object.entries(Mn).map(([e, t]) => [e, t.bgTransparent]),
  );
