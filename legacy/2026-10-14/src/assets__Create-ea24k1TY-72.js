// assets__Create-ea24k1TY 72 — createelement
// Lines 22655-22801 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Jg = 32,
  Yg = (function (e) {
    function t() {
      return (sie(this, t), lie(this, t, arguments));
    }
    return (
      fie(t, e),
      cie(t, [
        {
          key: `renderIcon`,
          value: function (e) {
            var t = this.props.inactiveColor,
              n = Jg / 2,
              r = Jg / 6,
              i = Jg / 3,
              a = e.inactive ? t : e.color;
            if (e.type === `plainline`)
              return X.createElement(`line`, {
                strokeWidth: 4,
                fill: `none`,
                stroke: a,
                strokeDasharray: e.payload.strokeDasharray,
                x1: 0,
                y1: n,
                x2: Jg,
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
            H${Jg}M${2 * i},${n}
            A${r},${r},0,1,1,${i},${n}`,
                className: `recharts-legend-icon`,
              });
            if (e.type === `rect`)
              return X.createElement(`path`, {
                stroke: `none`,
                fill: a,
                d: `M0,${Jg / 8}h${Jg}v${(Jg * 3) / 4}h${-Jg}z`,
                className: `recharts-legend-icon`,
              });
            if (X.isValidElement(e.legendIcon)) {
              var o = oie({}, e);
              return (delete o.legendIcon, X.cloneElement(e.legendIcon, o));
            }
            return X.createElement(Rg, {
              fill: a,
              cx: n,
              cy: n,
              size: Jg,
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
              s = { x: 0, y: 0, width: Jg, height: Jg },
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
                  Kg(
                    Kg({ "recharts-legend-item": !0 }, `legend-item-${n}`, !0),
                    `inactive`,
                    t.inactive,
                  ),
                );
              if (t.type === `none`) return null;
              var d = (0, Sh.default)(t.value) ? null : t.value;
              (0, Sh.default)(t.value);
              var f = t.inactive ? o : t.color;
              return X.createElement(
                `li`,
                Bg(
                  { className: u, style: c, key: `legend-item-${n}` },
                  xh(e.props, t, n),
                ),
                X.createElement(
                  Lh,
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
(Kg(Yg, `displayName`, `Legend`),
  Kg(Yg, `defaultProps`, {
    iconSize: 14,
    layout: `horizontal`,
    align: `center`,
    verticalAlign: `middle`,
    inactiveColor: `#ccc`,
  }));
