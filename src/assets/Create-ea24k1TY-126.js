// Create-ea24k1TY 126 — props
// Lines 41245-43007 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
var VF = function (e, t, n, r) {
    var i = e.graphicalItems,
      a = e.tooltipAxis,
      o = zF(t, e);
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
              ? mh(c === void 0 ? o : c, a.dataKey, r)
              : (c && c[n]) || o[n];
          return l ? [].concat(CF(i), [Uoe(s, l)]) : i;
        }, []);
  },
  HF = function (e, t, n, r) {
    var i = r || { x: e.chartX, y: e.chartY },
      a = LF(i, n),
      o = e.orderedTooltipTicks,
      s = e.tooltipAxis,
      c = e.tooltipTicks,
      l = koe(a, o, c, s);
    if (l >= 0 && c) {
      var u = c[l] && c[l].value;
      return {
        activeTooltipIndex: l,
        activeLabel: u,
        activePayload: VF(e, t, l, u),
        activeCoordinate: RF(n, o, l, i),
      };
    }
    return null;
  },
  UF = function (e, t) {
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
      f = cD(l, i);
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
      var S = zF(e.data, {
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
      KP(p.domain, g, m) &&
        ((w = gD(p.domain, null, g)),
        f && (m === `number` || v !== `auto`) && (E = iD(S, h, `category`)));
      var D = BF(m);
      if (!w || w.length === 0) {
        var O = p.domain ?? D;
        if (h) {
          if (((w = iD(S, h, m)), m === `category` && f)) {
            var k = Wne(w);
            _ && k
              ? ((T = w), (w = (0, uM.default)(0, C)))
              : _ ||
                (w = vD(O, w, n).reduce(function (e, t) {
                  return e.indexOf(t) >= 0 ? e : [].concat(CF(e), [t]);
                }, []));
          } else if (m === `category`)
            w = _
              ? w.filter(function (e) {
                  return e !== `` && !(0, ah.default)(e);
                })
              : vD(O, w, n).reduce(function (e, t) {
                  return e.indexOf(t) >= 0 || t === `` || (0, ah.default)(t)
                    ? e
                    : [].concat(CF(e), [t]);
                }, []);
          else if (m === `number`) {
            var A = Poe(
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
          f && (m === `number` || v !== `auto`) && (E = iD(S, h, `category`));
        } else
          w = f
            ? (0, uM.default)(0, C)
            : o && o[x] && o[x].hasStack && m === `number`
              ? d === `expand`
                ? [0, 1]
                : pD(o[x].stackGroups, s, c)
              : sD(
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
        if (m === `number`) ((w = FP(u, w, x, i, y)), O && (w = gD(O, w, g)));
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
        AF(
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
  WF = function (e, t) {
    var n = t.graphicalItems,
      r = t.Axis,
      i = t.axisType,
      a = t.axisIdKey,
      o = t.stackGroups,
      s = t.dataStartIndex,
      c = t.dataEndIndex,
      l = e.layout,
      u = e.children,
      d = zF(e.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: c }),
      f = d.length,
      p = cD(l, i),
      m = -1;
    return n.reduce(function (e, t) {
      var h = (
          t.type.defaultProps === void 0
            ? t.props
            : Q(Q({}, t.type.defaultProps), t.props)
        )[a],
        g = BF(`number`);
      if (!e[h]) {
        m++;
        var _;
        return (
          p
            ? (_ = (0, uM.default)(0, f))
            : o && o[h] && o[h].hasStack
              ? ((_ = pD(o[h].stackGroups, s, c)), (_ = FP(u, _, h, i)))
              : ((_ = gD(
                  g,
                  sD(
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
                (_ = FP(u, _, h, i))),
          Q(
            Q({}, e),
            {},
            AF(
              {},
              h,
              Q(
                Q({ axisType: i }, r.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: (0, ih.default)(NF, `${i}.${m % 2}`, null),
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
  GF = function (e, t) {
    var n = t.axisType,
      r = n === void 0 ? `xAxis` : n,
      i = t.AxisComp,
      a = t.graphicalItems,
      o = t.stackGroups,
      s = t.dataStartIndex,
      c = t.dataEndIndex,
      l = e.children,
      u = `${r}Id`,
      d = kh(l, i),
      f = {};
    return (
      d && d.length
        ? (f = UF(e, {
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
          (f = WF(e, {
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
  KF = function (e) {
    var t = fh(e),
      n = lD(t, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: (0, sv.default)(n, function (e) {
        return e.coordinate;
      }),
      tooltipAxis: t,
      tooltipAxisBandSize: _D(t, n),
    };
  },
  qF = function (e) {
    var t = e.children,
      n = e.defaultShowTooltip,
      r = Ah(t, AM),
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
  JF = function (e) {
    return !e || !e.length
      ? !1
      : e.some(function (e) {
          var t = Th(e && e.type);
          return t && t.indexOf(`Bar`) >= 0;
        });
  },
  YF = function (e) {
    return e === `horizontal`
      ? { numericAxisName: `yAxis`, cateAxisName: `xAxis` }
      : e === `vertical`
        ? { numericAxisName: `xAxis`, cateAxisName: `yAxis` }
        : e === `centric`
          ? { numericAxisName: `radiusAxis`, cateAxisName: `angleAxis` }
          : { numericAxisName: `angleAxis`, cateAxisName: `radiusAxis` };
  },
  XF = function (e, t) {
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
      f = Ah(u, AM),
      p = Ah(u, X_),
      m = Object.keys(s).reduce(
        function (e, t) {
          var n = s[t],
            r = n.orientation;
          return !n.mirror && !n.hide
            ? Q(Q({}, e), {}, AF({}, r, e[r] + n.width))
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
                    AF({}, r, (0, ih.default)(e, `${r}`) + n.height),
                  )
                : e;
            },
            { top: d.top || 0, bottom: d.bottom || 0 },
          ),
        ),
        m,
      ),
      g = h.bottom;
    (f && (h.bottom += f.props.height || AM.defaultProps.height),
      p && t && (h = Moe(h, r, n, t)));
    var _ = c - h.left - h.right,
      v = l - h.top - h.bottom;
    return Q(
      Q({ brushBottom: g }, h),
      {},
      { width: Math.max(_, 0), height: Math.max(v, 0) },
    );
  },
  ZF = function (e, t) {
    if (t === `xAxis`) return e[t].width;
    if (t === `yAxis`) return e[t].height;
  },
  QF = (function (e) {
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
          m = YF(u),
          h = m.numericAxisName,
          g = m.cateAxisName,
          _ = JF(n),
          v = [];
        return (
          n.forEach(function (n, m) {
            var y = zF(e.data, {
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
                !((r && r[i]) || n.axisType === `zAxis`) && NE(!1);
                var a = r[i];
                return Q(
                  Q({}, e),
                  {},
                  AF(AF({}, n.axisType, a), `${n.axisType}Ticks`, lD(a)),
                );
              }, {}),
              E = T[g],
              D = T[`${g}Ticks`],
              O = r && r[C] && r[C].hasStack && Voe(n, r[C].stackGroups),
              k = Th(n.type).indexOf(`Bar`) >= 0,
              A = _D(E, D),
              j = [],
              M = _ && Aoe({ barSize: l, stackGroups: r, totalSize: ZF(T, g) });
            if (k) {
              var N = (0, ah.default)(S) ? p : S,
                P = _D(E, D, !0) ?? N ?? 0;
              ((j = joe({
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
                  AF(
                    AF(AF({ key: n.key || `item-${m}` }, h, T[h]), g, T[g]),
                    `animationId`,
                    a,
                  ),
                ),
                childIndex: rre(n, e.children),
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
        if (!jh({ props: i })) return null;
        var u = i.children,
          f = i.layout,
          p = i.stackOffset,
          m = i.data,
          h = i.reverseStackOrder,
          g = YF(f),
          _ = g.numericAxisName,
          v = g.cateAxisName,
          y = kh(u, n),
          b = zoe(m, y, `${_}Id`, `${v}Id`, p, h),
          x = s.reduce(function (e, t) {
            var n = `${t.axisType}Map`;
            return Q(
              Q({}, e),
              {},
              AF(
                {},
                n,
                GF(
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
          S = XF(
            Q(Q({}, x), {}, { props: i, graphicalItems: y }),
            r?.legendBBox,
          );
        Object.keys(x).forEach(function (e) {
          x[e] = l(i, x[e], S, e.replace(`Map`, ``), t);
        });
        var C = x[`${v}Map`],
          w = KF(C);
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
            pF(this, n),
            (r = gF(this, n, [e])),
            AF(r, `eventEmitterSymbol`, Symbol(`rechartsEventEmitter`)),
            AF(r, `accessibilityManager`, new GP()),
            AF(r, `handleLegendBBoxUpdate`, function (e) {
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
            AF(r, `handleReceiveSyncEvent`, function (e, t, n) {
              if (r.props.syncId === e) {
                if (
                  n === r.eventEmitterSymbol &&
                  typeof r.props.syncMethod != `function`
                )
                  return;
                r.applySyncEvent(t);
              }
            }),
            AF(r, `handleBrushChange`, function (e) {
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
            AF(r, `handleMouseEnter`, function (e) {
              var t = r.getMouseInfo(e);
              if (t) {
                var n = Q(Q({}, t), {}, { isTooltipActive: !0 });
                (r.setState(n), r.triggerSyncEvent(n));
                var i = r.props.onMouseEnter;
                (0, Sh.default)(i) && i(n, e);
              }
            }),
            AF(r, `triggeredAfterMouseMove`, function (e) {
              var t = r.getMouseInfo(e),
                n = t
                  ? Q(Q({}, t), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              (r.setState(n), r.triggerSyncEvent(n));
              var i = r.props.onMouseMove;
              (0, Sh.default)(i) && i(n, e);
            }),
            AF(r, `handleItemMouseEnter`, function (e) {
              r.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: e,
                  activePayload: e.tooltipPayload,
                  activeCoordinate: e.tooltipPosition || { x: e.cx, y: e.cy },
                };
              });
            }),
            AF(r, `handleItemMouseLeave`, function () {
              r.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            AF(r, `handleMouseMove`, function (e) {
              (e.persist(), r.throttleTriggeredAfterMouseMove(e));
            }),
            AF(r, `handleMouseLeave`, function (e) {
              r.throttleTriggeredAfterMouseMove.cancel();
              var t = { isTooltipActive: !1 };
              (r.setState(t), r.triggerSyncEvent(t));
              var n = r.props.onMouseLeave;
              (0, Sh.default)(n) && n(t, e);
            }),
            AF(r, `handleOuterEvent`, function (e) {
              var t = nre(e),
                n = (0, ih.default)(r.props, `${t}`);
              t &&
                (0, Sh.default)(n) &&
                n(
                  (/.*touch.*/i.test(t)
                    ? r.getMouseInfo(e.changedTouches[0])
                    : r.getMouseInfo(e)) ?? {},
                  e,
                );
            }),
            AF(r, `handleClick`, function (e) {
              var t = r.getMouseInfo(e);
              if (t) {
                var n = Q(Q({}, t), {}, { isTooltipActive: !0 });
                (r.setState(n), r.triggerSyncEvent(n));
                var i = r.props.onClick;
                (0, Sh.default)(i) && i(n, e);
              }
            }),
            AF(r, `handleMouseDown`, function (e) {
              var t = r.props.onMouseDown;
              (0, Sh.default)(t) && t(r.getMouseInfo(e), e);
            }),
            AF(r, `handleMouseUp`, function (e) {
              var t = r.props.onMouseUp;
              (0, Sh.default)(t) && t(r.getMouseInfo(e), e);
            }),
            AF(r, `handleTouchMove`, function (e) {
              e.changedTouches != null &&
                e.changedTouches.length > 0 &&
                r.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
            }),
            AF(r, `handleTouchStart`, function (e) {
              e.changedTouches != null &&
                e.changedTouches.length > 0 &&
                r.handleMouseDown(e.changedTouches[0]);
            }),
            AF(r, `handleTouchEnd`, function (e) {
              e.changedTouches != null &&
                e.changedTouches.length > 0 &&
                r.handleMouseUp(e.changedTouches[0]);
            }),
            AF(r, `handleDoubleClick`, function (e) {
              var t = r.props.onDoubleClick;
              (0, Sh.default)(t) && t(r.getMouseInfo(e), e);
            }),
            AF(r, `handleContextMenu`, function (e) {
              var t = r.props.onContextMenu;
              (0, Sh.default)(t) && t(r.getMouseInfo(e), e);
            }),
            AF(r, `triggerSyncEvent`, function (e) {
              r.props.syncId !== void 0 &&
                IP.emit(LP, r.props.syncId, e, r.eventEmitterSymbol);
            }),
            AF(r, `applySyncEvent`, function (e) {
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
                  b = VF(r.state, r.props.data, u),
                  x = m[u]
                    ? {
                        x: n === `horizontal` ? m[u].coordinate : _,
                        y: n === `horizontal` ? v : m[u].coordinate,
                      }
                    : FF;
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
            AF(r, `renderCursor`, function (e) {
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
              return X.createElement(nF, {
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
            AF(r, `renderPolarAxis`, function (e, t, n) {
              var i = (0, ih.default)(e, `type.axisType`),
                a = (0, ih.default)(r.state, `${i}Map`),
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
                    ticks: lD(c, !0),
                  },
                ),
              );
            }),
            AF(r, `renderPolarGrid`, function (e) {
              var t = e.props,
                n = t.radialLines,
                i = t.polarAngles,
                a = t.polarRadius,
                o = r.state,
                s = o.radiusAxisMap,
                c = o.angleAxisMap,
                l = fh(s),
                u = fh(c),
                d = u.cx,
                f = u.cy,
                p = u.innerRadius,
                m = u.outerRadius;
              return (0, X.cloneElement)(e, {
                polarAngles: Array.isArray(i)
                  ? i
                  : lD(u, !0).map(function (e) {
                      return e.coordinate;
                    }),
                polarRadius: Array.isArray(a)
                  ? a
                  : lD(l, !0).map(function (e) {
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
            AF(r, `renderLegend`, function () {
              var e = r.state.formattedGraphicalItems,
                t = r.props,
                n = t.children,
                i = t.width,
                a = t.height,
                o = r.props.margin || {},
                s = qE({
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
                  Q({}, dF(s, rF)),
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
            AF(r, `renderTooltip`, function () {
              var e = r.props,
                t = e.children,
                n = e.accessibilityLayer,
                i = Ah(t, sy);
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
            AF(r, `renderBrush`, function (e) {
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
                onChange: dD(r.handleBrushChange, e.props.onChange),
                data: i,
                x: ch(e.props.x) ? e.props.x : o.left,
                y: ch(e.props.y)
                  ? e.props.y
                  : o.top + o.height + o.brushBottom - (n.bottom || 0),
                width: ch(e.props.width) ? e.props.width : o.width,
                startIndex: s,
                endIndex: c,
                updateId: `brush-${l}`,
              });
            }),
            AF(r, `renderReferenceElement`, function (e, t, n) {
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
            AF(r, `renderActivePoints`, function (e) {
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
                      fill: aD(t.item),
                      strokeWidth: 2,
                      stroke: `#fff`,
                      payload: r.payload,
                      value: r.value,
                    },
                    Mh(u, !1),
                  ),
                  bh(u),
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
            AF(r, `renderGraphicChild`, function (e, t, n) {
              var i = r.filterFormatItem(e, t, n);
              if (!i) return null;
              var a = r.getTooltipEventType(),
                o = r.state,
                s = o.isTooltipActive,
                c = o.tooltipAxis,
                l = o.activeTooltipIndex,
                u = o.activeLabel,
                d = r.props.children,
                f = Ah(d, sy),
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
                ? (C = { onClick: dD(r.handleItemMouseEnter, e.props.onClick) })
                : a !== `axis` &&
                  (C = {
                    onMouseLeave: dD(
                      r.handleItemMouseLeave,
                      e.props.onMouseLeave,
                    ),
                    onMouseEnter: dD(
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
                    ((E = mh(m, O, u)), (D = h && g && mh(g, O, u)));
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
                  if (!(0, ah.default)(E))
                    return [w].concat(
                      CF(
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
            AF(r, `renderCustomized`, function (e, t, n) {
              return (0, X.cloneElement)(
                e,
                Q(Q({ key: `recharts-customized-${n}` }, r.props), r.state),
              );
            }),
            AF(r, `renderMap`, {
              CartesianGrid: { handler: IF, once: !0 },
              ReferenceArea: { handler: r.renderReferenceElement },
              ReferenceLine: { handler: IF },
              ReferenceDot: { handler: r.renderReferenceElement },
              XAxis: { handler: IF },
              YAxis: { handler: IF },
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
            (r.clipPathId = `${e.id ?? uh(`recharts`)}-clip`),
            (r.throttleTriggeredAfterMouseMove = (0, py.default)(
              r.triggeredAfterMouseMove,
              e.throttleDelay ?? 1e3 / 60,
            )),
            (r.state = {}),
            r
          );
        }
        return (
          xF(n, e),
          hF(n, [
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
                  a = Ah(t, sy);
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
                      c = VF(this.state, n, o, s),
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
                Nh([Ah(e.children, sy)], [Ah(this.props.children, sy)]) ||
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
                var e = Ah(this.props.children, sy);
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
                  r = By(n),
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
                  d = HF(this.state, this.props.data, this.props.layout, o);
                if (u !== `axis` && c && l) {
                  var f = fh(c).scale,
                    p = fh(l).scale,
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
                  var u = fh(c);
                  return DD({ x: i, y: a }, u);
                }
                return null;
              },
            },
            {
              key: `parseEventsOfWrapper`,
              value: function () {
                var e = this.props.children,
                  t = this.getTooltipEventType(),
                  n = Ah(e, sy),
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
                  Q(Q({}, bh(this.props, this.handleOuterEvent)), r)
                );
              },
            },
            {
              key: `addListener`,
              value: function () {
                IP.on(LP, this.handleReceiveSyncEvent);
              },
            },
            {
              key: `removeListener`,
              value: function () {
                IP.removeListener(LP, this.handleReceiveSyncEvent);
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
                    (t === Th(o.item.type) && n === o.childIndex)
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
                      var n = sF(t, 2),
                        r = n[0],
                        i = n[1];
                      return Q(Q({}, e), {}, AF({}, r, i.scale));
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
                      var n = sF(t, 2),
                        r = n[0],
                        i = n[1];
                      return Q(Q({}, e), {}, AF({}, r, i.scale));
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
                      u = Th(c.type);
                    if (u === `Bar`) {
                      var d = (s.data || []).find(function (t) {
                        return vk(e, t);
                      });
                      if (d) return { graphicalItem: o, payload: d };
                    } else if (u === `RadialBar`) {
                      var f = (s.data || []).find(function (t) {
                        return DD(e, t);
                      });
                      if (f) return { graphicalItem: o, payload: f };
                    } else if (Cj(o, r) || wj(o, r) || Tj(o, r)) {
                      var p = Mj({
                          graphicalItem: o,
                          activeTooltipItem: r,
                          itemData: l.data,
                        }),
                        m = l.activeIndex === void 0 ? p : l.activeIndex;
                      return {
                        graphicalItem: Q(Q({}, o), {}, { childIndex: m }),
                        payload: Tj(o, r) ? l.data[p] : o.props.data[p],
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
                if (!jh(this)) return null;
                var t = this.props,
                  n = t.children,
                  r = t.className,
                  i = t.width,
                  a = t.height,
                  o = t.style,
                  s = t.compact,
                  c = t.title,
                  l = t.desc,
                  u = Mh(dF(t, iF), !1);
                if (s)
                  return X.createElement(
                    fN,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    X.createElement(
                      Lh,
                      oF({}, u, { width: i, height: a, title: c, desc: l }),
                      this.renderClipPath(),
                      Fh(n, this.renderMap),
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
                  fN,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  X.createElement(
                    `div`,
                    oF(
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
                      Lh,
                      oF({}, u, {
                        width: i,
                        height: a,
                        title: c,
                        desc: l,
                        style: PF,
                      }),
                      this.renderClipPath(),
                      Fh(n, this.renderMap),
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
    (AF(p, `displayName`, t),
      AF(
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
      AF(p, `getDerivedStateFromProps`, function (e, t) {
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
          var p = qF(e);
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
          !hh(l, t.prevMargin)
        ) {
          var m = qF(e),
            h = {
              chartX: t.chartX,
              chartY: t.chartY,
              isTooltipActive: t.isTooltipActive,
            },
            g = Q(Q({}, HF(t, r, s)), {}, { updateId: t.updateId + 1 }),
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
        if (!Nh(i, t.prevChildren)) {
          var v = Ah(i, AM),
            y = v ? (v.props?.startIndex ?? u) : u,
            b = v ? (v.props?.endIndex ?? d) : d,
            x = y !== u || b !== d,
            S = !(0, ah.default)(r) && !x ? t.updateId : t.updateId + 1;
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
      AF(p, `renderActiveDot`, function (e, t, n) {
        var r = (0, X.isValidElement)(e)
          ? (0, X.cloneElement)(e, t)
          : (0, Sh.default)(e)
            ? e(t)
            : X.createElement(Lk, t);
        return X.createElement(
          zh,
          { className: `recharts-active-dot`, key: n },
          r,
        );
      }));
    var m = (0, X.forwardRef)(function (e, t) {
      return X.createElement(p, oF({}, e, { ref: t }));
    });
    return ((m.displayName = p.displayName), m);
  })({
    chartName: `PieChart`,
    GraphicalChild: Zj,
    validateTooltipEventTypes: [`item`],
    defaultTooltipEventType: `item`,
    legendContent: `children`,
    axisComponents: [
      { axisType: `angleAxis`, AxisComp: VA },
      { axisType: `radiusAxis`, AxisComp: xA },
    ],
    formatAxisMap: Qoe,
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
  $F = {
    art: (0, Z.jsx)(be, { className: `h-4 w-4` }),
    development: (0, Z.jsx)(bt, { className: `h-4 w-4` }),
    audio: (0, Z.jsx)(jt, { className: `h-4 w-4` }),
    design: (0, Z.jsx)(Zr, { className: `h-4 w-4` }),
    qa: (0, Z.jsx)(lo, { className: `h-4 w-4` }),
  },
  eI = Object.fromEntries(Object.entries(Kt).map(([e, t]) => [e, t.bgClass])),
  tI = Object.fromEntries(Object.entries(Kt).map(([e, t]) => [e, t.hex])),
  nI = Object.fromEntries(
    Object.entries(Kt).map(([e, t]) => [e, t.bgTransparent]),
  );
