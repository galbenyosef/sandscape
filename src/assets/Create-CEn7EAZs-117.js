// Create-CEn7EAZs 117 — key
// Lines 38422-38770 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var pM = (function (e) {
  function t(e) {
    var n;
    return (
      eM(this, t),
      (n = rM(this, t, [e])),
      uM(n, `pieRef`, null),
      uM(n, `sectorRefs`, []),
      uM(n, `id`, Vm(`recharts-pie-`)),
      uM(n, `handleAnimationEnd`, function () {
        var e = n.props.onAnimationEnd;
        (n.setState({ isAnimationFinished: !0 }), (0, $m.default)(e) && e());
      }),
      uM(n, `handleAnimationStart`, function () {
        var e = n.props.onAnimationStart;
        (n.setState({ isAnimationFinished: !1 }), (0, $m.default)(e) && e());
      }),
      (n.state = {
        isAnimationFinished: !e.isAnimationActive,
        prevIsAnimationActive: e.isAnimationActive,
        prevAnimationId: e.animationId,
        sectorToFocus: 0,
      }),
      n
    );
  }
  return (
    cM(t, e),
    nM(
      t,
      [
        {
          key: `isActiveIndex`,
          value: function (e) {
            var t = this.props.activeIndex;
            return Array.isArray(t) ? t.indexOf(e) !== -1 : e === t;
          },
        },
        {
          key: `hasActiveIndex`,
          value: function () {
            var e = this.props.activeIndex;
            return Array.isArray(e) ? e.length !== 0 : e || e === 0;
          },
        },
        {
          key: `renderLabels`,
          value: function (e) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var n = this.props,
              r = n.label,
              i = n.labelLine,
              a = n.dataKey,
              o = n.valueKey,
              s = lh(this.props, !1),
              c = lh(r, !1),
              l = lh(i, !1),
              u = (r && r.offsetRadius) || 20,
              d = e.map(function (e, n) {
                var d = (e.startAngle + e.endAngle) / 2,
                  f = ID(e.cx, e.cy, e.outerRadius + u, d),
                  p = $j(
                    $j($j($j({}, s), e), {}, { stroke: `none` }, c),
                    {},
                    { index: n, textAnchor: t.getTextAnchor(f.x, e.cx) },
                    f,
                  ),
                  m = $j(
                    $j(
                      $j($j({}, s), e),
                      {},
                      { fill: `none`, stroke: e.fill },
                      l,
                    ),
                    {},
                    { index: n, points: [ID(e.cx, e.cy, e.outerRadius, d), f] },
                  ),
                  h = a;
                return (
                  (0, Im.default)(a) && (0, Im.default)(o)
                    ? (h = `value`)
                    : (0, Im.default)(a) && (h = o),
                  X.createElement(
                    gh,
                    {
                      key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${n}`,
                    },
                    i && t.renderLabelLineItem(i, m, `line`),
                    t.renderLabelItem(r, p, mD(e, h)),
                  )
                );
              });
            return X.createElement(gh, { className: `recharts-pie-labels` }, d);
          },
        },
        {
          key: `renderSectorsStatically`,
          value: function (e) {
            var t = this,
              n = this.props,
              r = n.activeShape,
              i = n.blendStroke,
              a = n.inactiveShape;
            return e.map(function (n, o) {
              if (n?.startAngle === 0 && n?.endAngle === 0 && e.length !== 1)
                return null;
              var s = t.isActiveIndex(o),
                c = a && t.hasActiveIndex() ? a : null,
                l = s ? r : c,
                u = $j(
                  $j({}, n),
                  {},
                  { stroke: i ? n.fill : n.stroke, tabIndex: -1 },
                );
              return X.createElement(
                gh,
                Zj(
                  {
                    ref: function (e) {
                      e && !t.sectorRefs.includes(e) && t.sectorRefs.push(e);
                    },
                    tabIndex: -1,
                    className: `recharts-pie-sector`,
                  },
                  Qm(t.props, n, o),
                  {
                    key: `sector-${n?.startAngle}-${n?.endAngle}-${n.midAngle}-${o}`,
                  },
                ),
                X.createElement(
                  Rj,
                  Zj({ option: l, isActive: s, shapeType: `sector` }, u),
                ),
              );
            });
          },
        },
        {
          key: `renderSectorsWithAnimation`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.sectors,
              r = t.isAnimationActive,
              i = t.animationBegin,
              a = t.animationDuration,
              o = t.animationEasing,
              s = t.animationId,
              c = this.state,
              l = c.prevSectors,
              u = c.prevIsAnimationActive;
            return X.createElement(
              yk,
              {
                begin: i,
                duration: a,
                isActive: r,
                easing: o,
                from: { t: 0 },
                to: { t: 1 },
                key: `pie-${s}-${u}`,
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd,
              },
              function (t) {
                var r = t.t,
                  i = [],
                  a = (n && n[0]).startAngle;
                return (
                  n.forEach(function (e, t) {
                    var n = l && l[t],
                      o = t > 0 ? (0, Fm.default)(e, `paddingAngle`, 0) : 0;
                    if (n) {
                      var s = Wm(
                          n.endAngle - n.startAngle,
                          e.endAngle - e.startAngle,
                        ),
                        c = $j(
                          $j({}, e),
                          {},
                          { startAngle: a + o, endAngle: a + s(r) + o },
                        );
                      (i.push(c), (a = c.endAngle));
                    } else {
                      var u = e.endAngle,
                        d = e.startAngle,
                        f = Wm(0, u - d)(r),
                        p = $j(
                          $j({}, e),
                          {},
                          { startAngle: a + o, endAngle: a + f + o },
                        );
                      (i.push(p), (a = p.endAngle));
                    }
                  }),
                  X.createElement(gh, null, e.renderSectorsStatically(i))
                );
              },
            );
          },
        },
        {
          key: `attachKeyboardHandlers`,
          value: function (e) {
            var t = this;
            e.onkeydown = function (e) {
              if (!e.altKey)
                switch (e.key) {
                  case `ArrowLeft`:
                    var n = ++t.state.sectorToFocus % t.sectorRefs.length;
                    (t.sectorRefs[n].focus(), t.setState({ sectorToFocus: n }));
                    break;
                  case `ArrowRight`:
                    var r =
                      --t.state.sectorToFocus < 0
                        ? t.sectorRefs.length - 1
                        : t.state.sectorToFocus % t.sectorRefs.length;
                    (t.sectorRefs[r].focus(), t.setState({ sectorToFocus: r }));
                    break;
                  case `Escape`:
                    (t.sectorRefs[t.state.sectorToFocus].blur(),
                      t.setState({ sectorToFocus: 0 }));
                    break;
                  default:
                }
            };
          },
        },
        {
          key: `renderSectors`,
          value: function () {
            var e = this.props,
              t = e.sectors,
              n = e.isAnimationActive,
              r = this.state.prevSectors;
            return n && t && t.length && (!r || !(0, sD.default)(r, t))
              ? this.renderSectorsWithAnimation()
              : this.renderSectorsStatically(t);
          },
        },
        {
          key: `componentDidMount`,
          value: function () {
            this.pieRef && this.attachKeyboardHandlers(this.pieRef);
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.hide,
              r = t.sectors,
              i = t.className,
              a = t.label,
              o = t.cx,
              s = t.cy,
              c = t.innerRadius,
              l = t.outerRadius,
              u = t.isAnimationActive,
              d = this.state.isAnimationFinished;
            if (n || !r || !r.length || !zm(o) || !zm(s) || !zm(c) || !zm(l))
              return null;
            var f = h(`recharts-pie`, i);
            return X.createElement(
              gh,
              {
                tabIndex: this.props.rootTabIndex,
                className: f,
                ref: function (t) {
                  e.pieRef = t;
                },
              },
              this.renderSectors(),
              a && this.renderLabels(r),
              GD.renderCallByParent(this.props, null, !1),
              (!u || d) && $D.renderCallByParent(this.props, r, !1),
            );
          },
        },
      ],
      [
        {
          key: `getDerivedStateFromProps`,
          value: function (e, t) {
            return t.prevIsAnimationActive === e.isAnimationActive
              ? e.isAnimationActive && e.animationId !== t.prevAnimationId
                ? {
                    prevAnimationId: e.animationId,
                    curSectors: e.sectors,
                    prevSectors: t.curSectors,
                    isAnimationFinished: !0,
                  }
                : e.sectors === t.curSectors
                  ? null
                  : { curSectors: e.sectors, isAnimationFinished: !0 }
              : {
                  prevIsAnimationActive: e.isAnimationActive,
                  prevAnimationId: e.animationId,
                  curSectors: e.sectors,
                  prevSectors: [],
                  isAnimationFinished: !0,
                };
          },
        },
        {
          key: `getTextAnchor`,
          value: function (e, t) {
            return e > t ? `start` : e < t ? `end` : `middle`;
          },
        },
        {
          key: `renderLabelLineItem`,
          value: function (e, t, n) {
            if (X.isValidElement(e)) return X.cloneElement(e, t);
            if ((0, $m.default)(e)) return e(t);
            var r = h(
              `recharts-pie-label-line`,
              typeof e == `boolean` ? `` : e.className,
            );
            return X.createElement(
              hO,
              Zj({}, t, { key: n, type: `linear`, className: r }),
            );
          },
        },
        {
          key: `renderLabelItem`,
          value: function (e, t, n) {
            if (X.isValidElement(e)) return X.cloneElement(e, t);
            var r = n;
            if ((0, $m.default)(e) && ((r = e(t)), X.isValidElement(r)))
              return r;
            var i = h(
              `recharts-pie-label-text`,
              typeof e != `boolean` && !(0, $m.default)(e) ? e.className : ``,
            );
            return X.createElement(
              fS,
              Zj({}, t, { alignmentBaseline: `middle`, className: i }),
              r,
            );
          },
        },
      ],
    )
  );
})(X.PureComponent);
