// assets__Create-ea24k1TY 118 — key
// Lines 38433-39030 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var OM = function (e) {
    var t = e.data,
      n = e.startIndex,
      r = e.endIndex,
      i = e.x,
      a = e.width,
      o = e.travellerWidth;
    if (!t || !t.length) return {};
    var s = t.length,
      c = Ib()
        .domain((0, uM.default)(0, s))
        .range([i, i + a - o]),
      l = c.domain().map(function (e) {
        return c(e);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: c(n),
      endX: c(r),
      scale: c,
      scaleValues: l,
    };
  },
  kM = function (e) {
    return e.changedTouches && !!e.changedTouches.length;
  },
  AM = (function (e) {
    function t(e) {
      var n;
      return (
        hM(this, t),
        (n = vM(this, t, [e])),
        TM(n, `handleDrag`, function (e) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(e)
              : n.state.isSlideMoving && n.handleSlideDrag(e));
        }),
        TM(n, `handleTouchMove`, function (e) {
          e.changedTouches != null &&
            e.changedTouches.length > 0 &&
            n.handleDrag(e.changedTouches[0]);
        }),
        TM(n, `handleDragEnd`, function () {
          (n.setState(
            { isTravellerMoving: !1, isSlideMoving: !1 },
            function () {
              var e = n.props,
                t = e.endIndex,
                r = e.onDragEnd,
                i = e.startIndex;
              r?.({ endIndex: t, startIndex: i });
            },
          ),
            n.detachDragEndListener());
        }),
        TM(n, `handleLeaveWrapper`, function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        TM(n, `handleEnterSlideOrTraveller`, function () {
          n.setState({ isTextActive: !0 });
        }),
        TM(n, `handleLeaveSlideOrTraveller`, function () {
          n.setState({ isTextActive: !1 });
        }),
        TM(n, `handleSlideDragStart`, function (e) {
          var t = kM(e) ? e.changedTouches[0] : e;
          (n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: t.pageX,
          }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, `startX`),
          endX: n.handleTravellerDragStart.bind(n, `endX`),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      CM(t, e),
      _M(
        t,
        [
          {
            key: `componentWillUnmount`,
            value: function () {
              ((this.leaveTimer &&= (clearTimeout(this.leaveTimer), null)),
                this.detachDragEndListener());
            },
          },
          {
            key: `getIndex`,
            value: function (e) {
              var n = e.startX,
                r = e.endX,
                i = this.state.scaleValues,
                a = this.props,
                o = a.gap,
                s = a.data.length - 1,
                c = Math.min(n, r),
                l = Math.max(n, r),
                u = t.getIndexInRange(i, c),
                d = t.getIndexInRange(i, l);
              return {
                startIndex: u - (u % o),
                endIndex: d === s ? s : d - (d % o),
              };
            },
          },
          {
            key: `getTextOfTick`,
            value: function (e) {
              var t = this.props,
                n = t.data,
                r = t.tickFormatter,
                i = t.dataKey,
                a = rD(n[e], i, e);
              return (0, Sh.default)(r) ? r(a, e) : a;
            },
          },
          {
            key: `attachDragEndListener`,
            value: function () {
              (window.addEventListener(`mouseup`, this.handleDragEnd, !0),
                window.addEventListener(`touchend`, this.handleDragEnd, !0),
                window.addEventListener(`mousemove`, this.handleDrag, !0));
            },
          },
          {
            key: `detachDragEndListener`,
            value: function () {
              (window.removeEventListener(`mouseup`, this.handleDragEnd, !0),
                window.removeEventListener(`touchend`, this.handleDragEnd, !0),
                window.removeEventListener(`mousemove`, this.handleDrag, !0));
            },
          },
          {
            key: `handleSlideDrag`,
            value: function (e) {
              var t = this.state,
                n = t.slideMoveStartX,
                r = t.startX,
                i = t.endX,
                a = this.props,
                o = a.x,
                s = a.width,
                c = a.travellerWidth,
                l = a.startIndex,
                u = a.endIndex,
                d = a.onChange,
                f = e.pageX - n;
              f > 0
                ? (f = Math.min(f, o + s - c - i, o + s - c - r))
                : f < 0 && (f = Math.max(f, o - r, o - i));
              var p = this.getIndex({ startX: r + f, endX: i + f });
              ((p.startIndex !== l || p.endIndex !== u) && d && d(p),
                this.setState({
                  startX: r + f,
                  endX: i + f,
                  slideMoveStartX: e.pageX,
                }));
            },
          },
          {
            key: `handleTravellerDragStart`,
            value: function (e, t) {
              var n = kM(t) ? t.changedTouches[0] : t;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: e,
                brushMoveStartX: n.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: `handleTravellerMove`,
            value: function (e) {
              var t = this.state,
                n = t.brushMoveStartX,
                r = t.movingTravellerId,
                i = t.endX,
                a = t.startX,
                o = this.state[r],
                s = this.props,
                c = s.x,
                l = s.width,
                u = s.travellerWidth,
                d = s.onChange,
                f = s.gap,
                p = s.data,
                m = { startX: this.state.startX, endX: this.state.endX },
                h = e.pageX - n;
              (h > 0
                ? (h = Math.min(h, c + l - u - o))
                : h < 0 && (h = Math.max(h, c - o)),
                (m[r] = o + h));
              var g = this.getIndex(m),
                _ = g.startIndex,
                v = g.endIndex,
                y = function () {
                  var e = p.length - 1;
                  return (
                    (r === `startX` && (i > a ? _ % f === 0 : v % f === 0)) ||
                    (i < a && v === e) ||
                    (r === `endX` && (i > a ? v % f === 0 : _ % f === 0)) ||
                    (i > a && v === e)
                  );
                };
              this.setState(
                TM(TM({}, r, o + h), `brushMoveStartX`, e.pageX),
                function () {
                  d && y() && d(g);
                },
              );
            },
          },
          {
            key: `handleTravellerMoveKeyboard`,
            value: function (e, t) {
              var n = this,
                r = this.state,
                i = r.scaleValues,
                a = r.startX,
                o = r.endX,
                s = this.state[t],
                c = i.indexOf(s);
              if (c !== -1) {
                var l = c + e;
                if (!(l === -1 || l >= i.length)) {
                  var u = i[l];
                  (t === `startX` && u >= o) ||
                    (t === `endX` && u <= a) ||
                    this.setState(TM({}, t, u), function () {
                      n.props.onChange(
                        n.getIndex({
                          startX: n.state.startX,
                          endX: n.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: `renderBackground`,
            value: function () {
              var e = this.props,
                t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                a = e.fill,
                o = e.stroke;
              return X.createElement(`rect`, {
                stroke: o,
                fill: a,
                x: t,
                y: n,
                width: r,
                height: i,
              });
            },
          },
          {
            key: `renderPanorama`,
            value: function () {
              var e = this.props,
                t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                a = e.data,
                o = e.children,
                s = e.padding,
                c = X.Children.only(o);
              return c
                ? X.cloneElement(c, {
                    x: t,
                    y: n,
                    width: r,
                    height: i,
                    margin: s,
                    compact: !0,
                    data: a,
                  })
                : null;
            },
          },
          {
            key: `renderTravellerLayer`,
            value: function (e, n) {
              var r = this,
                i = this.props,
                a = i.y,
                o = i.travellerWidth,
                s = i.height,
                c = i.traveller,
                l = i.ariaLabel,
                u = i.data,
                d = i.startIndex,
                f = i.endIndex,
                p = Math.max(e, this.props.x),
                m = mM(
                  mM({}, Mh(this.props, !1)),
                  {},
                  { x: p, y: a, width: o, height: s },
                ),
                h = l || `Min value: ${u[d]?.name}, Max value: ${u[f]?.name}`;
              return X.createElement(
                zh,
                {
                  tabIndex: 0,
                  role: `slider`,
                  "aria-label": h,
                  "aria-valuenow": e,
                  className: `recharts-brush-traveller`,
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[n],
                  onTouchStart: this.travellerDragStartHandlers[n],
                  onKeyDown: function (e) {
                    [`ArrowLeft`, `ArrowRight`].includes(e.key) &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      r.handleTravellerMoveKeyboard(
                        e.key === `ArrowRight` ? 1 : -1,
                        n,
                      ));
                  },
                  onFocus: function () {
                    r.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    r.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: `col-resize` },
                },
                t.renderTraveller(c, m),
              );
            },
          },
          {
            key: `renderSlide`,
            value: function (e, t) {
              var n = this.props,
                r = n.y,
                i = n.height,
                a = n.stroke,
                o = n.travellerWidth,
                s = Math.min(e, t) + o,
                c = Math.max(Math.abs(t - e) - o, 0);
              return X.createElement(`rect`, {
                className: `recharts-brush-slide`,
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: `move` },
                stroke: `none`,
                fill: a,
                fillOpacity: 0.2,
                x: s,
                y: r,
                width: c,
                height: i,
              });
            },
          },
          {
            key: `renderText`,
            value: function () {
              var e = this.props,
                t = e.startIndex,
                n = e.endIndex,
                r = e.y,
                i = e.height,
                a = e.travellerWidth,
                o = e.stroke,
                s = this.state,
                c = s.startX,
                l = s.endX,
                u = 5,
                d = { pointerEvents: `none`, fill: o };
              return X.createElement(
                zh,
                { className: `recharts-brush-texts` },
                X.createElement(
                  pb,
                  fM(
                    {
                      textAnchor: `end`,
                      verticalAnchor: `middle`,
                      x: Math.min(c, l) - u,
                      y: r + i / 2,
                    },
                    d,
                  ),
                  this.getTextOfTick(t),
                ),
                X.createElement(
                  pb,
                  fM(
                    {
                      textAnchor: `start`,
                      verticalAnchor: `middle`,
                      x: Math.max(c, l) + a + u,
                      y: r + i / 2,
                    },
                    d,
                  ),
                  this.getTextOfTick(n),
                ),
              );
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.data,
                n = e.className,
                r = e.children,
                i = e.x,
                a = e.y,
                o = e.width,
                s = e.height,
                c = e.alwaysShowText,
                l = this.state,
                u = l.startX,
                d = l.endX,
                f = l.isTextActive,
                p = l.isSlideMoving,
                m = l.isTravellerMoving,
                g = l.isTravellerFocused;
              if (
                !t ||
                !t.length ||
                !ch(i) ||
                !ch(a) ||
                !ch(o) ||
                !ch(s) ||
                o <= 0 ||
                s <= 0
              )
                return null;
              var _ = h(`recharts-brush`, n),
                v = X.Children.count(r) === 1,
                y = lM(`userSelect`, `none`);
              return X.createElement(
                zh,
                {
                  className: _,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: y,
                },
                this.renderBackground(),
                v && this.renderPanorama(),
                this.renderSlide(u, d),
                this.renderTravellerLayer(u, `startX`),
                this.renderTravellerLayer(d, `endX`),
                (f || p || m || g || c) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: `renderDefaultTraveller`,
            value: function (e) {
              var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                a = e.stroke,
                o = Math.floor(n + i / 2) - 1;
              return X.createElement(
                X.Fragment,
                null,
                X.createElement(`rect`, {
                  x: t,
                  y: n,
                  width: r,
                  height: i,
                  fill: a,
                  stroke: `none`,
                }),
                X.createElement(`line`, {
                  x1: t + 1,
                  y1: o,
                  x2: t + r - 1,
                  y2: o,
                  fill: `none`,
                  stroke: `#fff`,
                }),
                X.createElement(`line`, {
                  x1: t + 1,
                  y1: o + 2,
                  x2: t + r - 1,
                  y2: o + 2,
                  fill: `none`,
                  stroke: `#fff`,
                }),
              );
            },
          },
          {
            key: `renderTraveller`,
            value: function (e, n) {
              return X.isValidElement(e)
                ? X.cloneElement(e, n)
                : (0, Sh.default)(e)
                  ? e(n)
                  : t.renderDefaultTraveller(n);
            },
          },
          {
            key: `getDerivedStateFromProps`,
            value: function (e, t) {
              var n = e.data,
                r = e.width,
                i = e.x,
                a = e.travellerWidth,
                o = e.updateId,
                s = e.startIndex,
                c = e.endIndex;
              if (n !== t.prevData || o !== t.prevUpdateId)
                return mM(
                  {
                    prevData: n,
                    prevTravellerWidth: a,
                    prevUpdateId: o,
                    prevX: i,
                    prevWidth: r,
                  },
                  n && n.length
                    ? OM({
                        data: n,
                        width: r,
                        x: i,
                        travellerWidth: a,
                        startIndex: s,
                        endIndex: c,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                t.scale &&
                (r !== t.prevWidth ||
                  i !== t.prevX ||
                  a !== t.prevTravellerWidth)
              ) {
                t.scale.range([i, i + r - a]);
                var l = t.scale.domain().map(function (e) {
                  return t.scale(e);
                });
                return {
                  prevData: n,
                  prevTravellerWidth: a,
                  prevUpdateId: o,
                  prevX: i,
                  prevWidth: r,
                  startX: t.scale(e.startIndex),
                  endX: t.scale(e.endIndex),
                  scaleValues: l,
                };
              }
              return null;
            },
          },
          {
            key: `getIndexInRange`,
            value: function (e, t) {
              for (var n = e.length, r = 0, i = n - 1; i - r > 1;) {
                var a = Math.floor((r + i) / 2);
                e[a] > t ? (i = a) : (r = a);
              }
              return t >= e[i] ? i : r;
            },
          },
        ],
      )
    );
  })(X.PureComponent);
