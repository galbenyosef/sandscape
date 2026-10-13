// assets__Create-ea24k1TY 115 — key
// Lines 37649-37997 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Zj = (function (e) {
  function t(e) {
    var n;
    return (
      Rj(this, t),
      (n = Vj(this, t, [e])),
      Jj(n, `pieRef`, null),
      Jj(n, `sectorRefs`, []),
      Jj(n, `id`, uh(`recharts-pie-`)),
      Jj(n, `handleAnimationEnd`, function () {
        var e = n.props.onAnimationEnd;
        (n.setState({ isAnimationFinished: !0 }), (0, Sh.default)(e) && e());
      }),
      Jj(n, `handleAnimationStart`, function () {
        var e = n.props.onAnimationStart;
        (n.setState({ isAnimationFinished: !1 }), (0, Sh.default)(e) && e());
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
    Kj(t, e),
    Bj(
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
              s = Mh(this.props, !1),
              c = Mh(r, !1),
              l = Mh(i, !1),
              u = (r && r.offsetRadius) || 20,
              d = e.map(function (e, n) {
                var d = (e.startAngle + e.endAngle) / 2,
                  f = TD(e.cx, e.cy, e.outerRadius + u, d),
                  p = Lj(
                    Lj(Lj(Lj({}, s), e), {}, { stroke: `none` }, c),
                    {},
                    { index: n, textAnchor: t.getTextAnchor(f.x, e.cx) },
                    f,
                  ),
                  m = Lj(
                    Lj(
                      Lj(Lj({}, s), e),
                      {},
                      { fill: `none`, stroke: e.fill },
                      l,
                    ),
                    {},
                    { index: n, points: [TD(e.cx, e.cy, e.outerRadius, d), f] },
                  ),
                  h = a;
                return (
                  (0, ah.default)(a) && (0, ah.default)(o)
                    ? (h = `value`)
                    : (0, ah.default)(a) && (h = o),
                  X.createElement(
                    zh,
                    {
                      key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${n}`,
                    },
                    i && t.renderLabelLineItem(i, m, `line`),
                    t.renderLabelItem(r, p, rD(e, h)),
                  )
                );
              });
            return X.createElement(zh, { className: `recharts-pie-labels` }, d);
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
                u = Lj(
                  Lj({}, n),
                  {},
                  { stroke: i ? n.fill : n.stroke, tabIndex: -1 },
                );
              return X.createElement(
                zh,
                Fj(
                  {
                    ref: function (e) {
                      e && !t.sectorRefs.includes(e) && t.sectorRefs.push(e);
                    },
                    tabIndex: -1,
                    className: `recharts-pie-sector`,
                  },
                  xh(t.props, n, o),
                  {
                    key: `sector-${n?.startAngle}-${n?.endAngle}-${n.midAngle}-${o}`,
                  },
                ),
                X.createElement(
                  Sj,
                  Fj({ option: l, isActive: s, shapeType: `sector` }, u),
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
              rk,
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
                      o = t > 0 ? (0, ih.default)(e, `paddingAngle`, 0) : 0;
                    if (n) {
                      var s = ph(
                          n.endAngle - n.startAngle,
                          e.endAngle - e.startAngle,
                        ),
                        c = Lj(
                          Lj({}, e),
                          {},
                          { startAngle: a + o, endAngle: a + s(r) + o },
                        );
                      (i.push(c), (a = c.endAngle));
                    } else {
                      var u = e.endAngle,
                        d = e.startAngle,
                        f = ph(0, u - d)(r),
                        p = Lj(
                          Lj({}, e),
                          {},
                          { startAngle: a + o, endAngle: a + f + o },
                        );
                      (i.push(p), (a = p.endAngle));
                    }
                  }),
                  X.createElement(zh, null, e.renderSectorsStatically(i))
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
            return n && t && t.length && (!r || !(0, XE.default)(r, t))
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
            if (n || !r || !r.length || !ch(o) || !ch(s) || !ch(c) || !ch(l))
              return null;
            var f = h(`recharts-pie`, i);
            return X.createElement(
              zh,
              {
                tabIndex: this.props.rootTabIndex,
                className: f,
                ref: function (t) {
                  e.pieRef = t;
                },
              },
              this.renderSectors(),
              a && this.renderLabels(r),
              PD.renderCallByParent(this.props, null, !1),
              (!u || d) && HD.renderCallByParent(this.props, r, !1),
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
            if ((0, Sh.default)(e)) return e(t);
            var r = h(
              `recharts-pie-label-line`,
              typeof e == `boolean` ? `` : e.className,
            );
            return X.createElement(
              iO,
              Fj({}, t, { key: n, type: `linear`, className: r }),
            );
          },
        },
        {
          key: `renderLabelItem`,
          value: function (e, t, n) {
            if (X.isValidElement(e)) return X.cloneElement(e, t);
            var r = n;
            if ((0, Sh.default)(e) && ((r = e(t)), X.isValidElement(r)))
              return r;
            var i = h(
              `recharts-pie-label-text`,
              typeof e != `boolean` && !(0, Sh.default)(e) ? e.className : ``,
            );
            return X.createElement(
              pb,
              Fj({}, t, { alignmentBaseline: `middle`, className: i }),
              r,
            );
          },
        },
      ],
    )
  );
})(X.PureComponent);
