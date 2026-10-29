// Create-CEn7EAZs 77 — height
// Lines 24733-24902 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var uy = 1,
  dy = (function (e) {
    function t() {
      var e;
      qv(this, t);
      var n = [...arguments];
      return (
        (e = Xv(this, t, [].concat(n))),
        ry(e, `lastBoundingBox`, { width: -1, height: -1 }),
        e
      );
    }
    return (
      ty(t, e),
      Yv(
        t,
        [
          {
            key: `componentDidMount`,
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: `componentDidUpdate`,
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: `getBBox`,
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var e = this.wrapperNode.getBoundingClientRect();
                return (
                  (e.height = this.wrapperNode.offsetHeight),
                  (e.width = this.wrapperNode.offsetWidth),
                  e
                );
              }
              return null;
            },
          },
          {
            key: `updateBBox`,
            value: function () {
              var e = this.props.onBBoxUpdate,
                t = this.getBBox();
              t
                ? (Math.abs(t.width - this.lastBoundingBox.width) > uy ||
                    Math.abs(t.height - this.lastBoundingBox.height) > uy) &&
                  ((this.lastBoundingBox.width = t.width),
                  (this.lastBoundingBox.height = t.height),
                  e && e(t))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  e && e(null));
            },
          },
          {
            key: `getBBoxSnapshot`,
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? Kv({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: `getDefaultPosition`,
            value: function (e) {
              var t = this.props,
                n = t.layout,
                r = t.align,
                i = t.verticalAlign,
                a = t.margin,
                o = t.chartWidth,
                s = t.chartHeight,
                c,
                l;
              if (
                !e ||
                ((e.left === void 0 || e.left === null) &&
                  (e.right === void 0 || e.right === null))
              )
                if (r === `center` && n === `vertical`) {
                  var u = this.getBBoxSnapshot();
                  c = { left: ((o || 0) - u.width) / 2 };
                } else
                  c =
                    r === `right`
                      ? { right: (a && a.right) || 0 }
                      : { left: (a && a.left) || 0 };
              if (
                !e ||
                ((e.top === void 0 || e.top === null) &&
                  (e.bottom === void 0 || e.bottom === null))
              )
                if (i === `middle`) {
                  var d = this.getBBoxSnapshot();
                  l = { top: ((s || 0) - d.height) / 2 };
                } else
                  l =
                    i === `bottom`
                      ? { bottom: (a && a.bottom) || 0 }
                      : { top: (a && a.top) || 0 };
              return Kv(Kv({}, c), l);
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this,
                t = this.props,
                n = t.content,
                r = t.width,
                i = t.height,
                a = t.wrapperStyle,
                o = t.payloadUniqBy,
                s = t.payload,
                c = Kv(
                  Kv(
                    {
                      position: `absolute`,
                      width: r || `auto`,
                      height: i || `auto`,
                    },
                    this.getDefaultPosition(a),
                  ),
                  a,
                );
              return X.createElement(
                `div`,
                {
                  className: `recharts-legend-wrapper`,
                  style: c,
                  ref: function (t) {
                    e.wrapperNode = t;
                  },
                },
                ly(n, Kv(Kv({}, this.props), {}, { payload: Hv(s, o, cy) })),
              );
            },
          },
        ],
        [
          {
            key: `getWithHeight`,
            value: function (e, t) {
              var n = Kv(Kv({}, this.defaultProps), e.props).layout;
              return n === `vertical` && zm(e.props.height)
                ? { height: e.props.height }
                : n === `horizontal`
                  ? { width: e.props.width || t }
                  : null;
            },
          },
        ],
      )
    );
  })(X.PureComponent);
(ry(dy, `displayName`, `Legend`),
  ry(dy, `defaultProps`, {
    iconSize: 14,
    layout: `horizontal`,
    align: `center`,
    verticalAlign: `bottom`,
  }));
