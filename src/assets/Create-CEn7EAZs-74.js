// Create-CEn7EAZs 74 — createelement
// Lines 23428-23574 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var S_ = 32,
  C_ = (function (e) {
    function t() {
      return (l_(this, t), f_(this, t, arguments));
    }
    return (
      __(t, e),
      d_(t, [
        {
          key: `renderIcon`,
          value: function (e) {
            var t = this.props.inactiveColor,
              n = S_ / 2,
              r = S_ / 6,
              i = S_ / 3,
              a = e.inactive ? t : e.color;
            if (e.type === `plainline`)
              return X.createElement(`line`, {
                strokeWidth: 4,
                fill: `none`,
                stroke: a,
                strokeDasharray: e.payload.strokeDasharray,
                x1: 0,
                y1: n,
                x2: S_,
                y2: n,
                className: `recharts-legend-icon`,
              });
            if (e.type === `line`)
              return X.createElement(`path`, {
                strokeWidth: 4,
                fill: `none`,
                stroke: a,
                d: `M0,${n}h${i}
            A${r},${r},0,1,1,${2 * i},${n}
            H${S_}M${2 * i},${n}
            A${r},${r},0,1,1,${i},${n}`,
                className: `recharts-legend-icon`,
              });
            if (e.type === `rect`)
              return X.createElement(`path`, {
                stroke: `none`,
                fill: a,
                d: `M0,${S_ / 8}h${S_}v${(S_ * 3) / 4}h${-S_}z`,
                className: `recharts-legend-icon`,
              });
            if (X.isValidElement(e.legendIcon)) {
              var o = c_({}, e);
              return (delete o.legendIcon, X.cloneElement(e.legendIcon, o));
            }
            return X.createElement(i_, {
              fill: a,
              cx: n,
              cy: n,
              size: S_,
              sizeType: `diameter`,
              type: e.type,
            });
          },
        },
        {
          key: `renderItems`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.payload,
              r = t.iconSize,
              i = t.layout,
              a = t.formatter,
              o = t.inactiveColor,
              s = { x: 0, y: 0, width: S_, height: S_ },
              c = {
                display: i === `horizontal` ? `inline-block` : `block`,
                marginRight: 10,
              },
              l = {
                display: `inline-block`,
                verticalAlign: `middle`,
                marginRight: 4,
              };
            return n.map(function (t, n) {
              var i = t.formatter || a,
                u = h(
                  y_(
                    y_({ "recharts-legend-item": !0 }, `legend-item-${n}`, !0),
                    `inactive`,
                    t.inactive,
                  ),
                );
              if (t.type === `none`) return null;
              var d = (0, $m.default)(t.value) ? null : t.value;
              (0, $m.default)(t.value);
              var f = t.inactive ? o : t.color;
              return X.createElement(
                `li`,
                o_(
                  { className: u, style: c, key: `legend-item-${n}` },
                  Qm(e.props, t, n),
                ),
                X.createElement(
                  mh,
                  { width: r, height: r, viewBox: s, style: l },
                  e.renderIcon(t),
                ),
                X.createElement(
                  `span`,
                  {
                    className: `recharts-legend-item-text`,
                    style: { color: f },
                  },
                  i ? i(d, t, n) : d,
                ),
              );
            });
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.payload,
              n = e.layout,
              r = e.align;
            if (!t || !t.length) return null;
            var i = {
              padding: 0,
              margin: 0,
              textAlign: n === `horizontal` ? r : `left`,
            };
            return X.createElement(
              `ul`,
              { className: `recharts-default-legend`, style: i },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(X.PureComponent);
(y_(C_, `displayName`, `Legend`),
  y_(C_, `defaultProps`, {
    iconSize: 14,
    layout: `horizontal`,
    align: `center`,
    verticalAlign: `middle`,
    inactiveColor: `#ccc`,
  }));
