// Create-CEn7EAZs 109 — style
// Lines 35960-36266 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function fk(e, t) {
  return (
    (fk = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    fk(e, t)
  );
}
function pk(e) {
  var t = gk();
  return function () {
    var n = _k(e),
      r;
    if (t) {
      var i = _k(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return mk(this, r);
  };
}
function mk(e, t) {
  if (t && (ek(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return hk(e);
}
function hk(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function gk() {
  if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == `function`) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _k(e) {
  return (
    (_k = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    _k(e)
  );
}
var vk = (function (e) {
  dk(n, e);
  var t = pk(n);
  function n(e, r) {
    var i;
    (ok(this, n), (i = t.call(this, e, r)));
    var a = i.props,
      o = a.isActive,
      s = a.attributeName,
      c = a.from,
      l = a.to,
      u = a.steps,
      d = a.children,
      f = a.duration;
    if (
      ((i.handleStyleChange = i.handleStyleChange.bind(hk(i))),
      (i.changeStyle = i.changeStyle.bind(hk(i))),
      !o || f <= 0)
    )
      return (
        (i.state = { style: {} }),
        typeof d == `function` && (i.state = { style: l }),
        mk(i)
      );
    if (u && u.length) i.state = { style: u[0].style };
    else if (c) {
      if (typeof d == `function`) return ((i.state = { style: c }), mk(i));
      i.state = { style: s ? ak({}, s, c) : c };
    } else i.state = { style: {} };
    return i;
  }
  return (
    ck(n, [
      {
        key: `componentDidMount`,
        value: function () {
          var e = this.props,
            t = e.isActive,
            n = e.canBegin;
          ((this.mounted = !0), !(!t || !n) && this.runAnimation(this.props));
        },
      },
      {
        key: `componentDidUpdate`,
        value: function (e) {
          var t = this.props,
            n = t.isActive,
            r = t.canBegin,
            i = t.attributeName,
            a = t.shouldReAnimate,
            o = t.to,
            s = t.from,
            c = this.state.style;
          if (r) {
            if (!n) {
              var l = { style: i ? ak({}, i, o) : o };
              this.state &&
                c &&
                ((i && c[i] !== o) || (!i && c !== o)) &&
                this.setState(l);
              return;
            }
            if (!(tle(e.to, o) && e.canBegin && e.isActive)) {
              var u = !e.canBegin || !e.isActive;
              (this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation());
              var d = u || a ? s : e.to;
              if (this.state && c) {
                var f = { style: i ? ak({}, i, d) : d };
                ((i && c[i] !== d) || (!i && c !== d)) && this.setState(f);
              }
              this.runAnimation(
                ik(ik({}, this.props), {}, { from: d, begin: 0 }),
              );
            }
          }
        },
      },
      {
        key: `componentWillUnmount`,
        value: function () {
          this.mounted = !1;
          var e = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            (this.manager &&= (this.manager.stop(), null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            e && e());
        },
      },
      {
        key: `handleStyleChange`,
        value: function (e) {
          this.changeStyle(e);
        },
      },
      {
        key: `changeStyle`,
        value: function (e) {
          this.mounted && this.setState({ style: e });
        },
      },
      {
        key: `runJSAnimation`,
        value: function (e) {
          var t = this,
            n = e.from,
            r = e.to,
            i = e.duration,
            a = e.easing,
            o = e.begin,
            s = e.onAnimationEnd,
            c = e.onAnimationStart,
            l = Fle(n, r, wle(a), i, this.changeStyle);
          this.manager.start([
            c,
            o,
            function () {
              t.stopJSAnimation = l();
            },
            i,
            s,
          ]);
        },
      },
      {
        key: `runStepAnimation`,
        value: function (e) {
          var t = this,
            n = e.steps,
            r = e.begin,
            i = e.onAnimationStart,
            a = n[0],
            o = a.style,
            s = a.duration,
            c = s === void 0 ? 0 : s;
          return this.manager.start(
            [i].concat(
              tk(
                n.reduce(
                  function (e, r, i) {
                    if (i === 0) return e;
                    var a = r.duration,
                      o = r.easing,
                      s = o === void 0 ? `ease` : o,
                      c = r.style,
                      l = r.properties,
                      u = r.onAnimationEnd,
                      d = i > 0 ? n[i - 1] : r,
                      f = l || Object.keys(c);
                    if (typeof s == `function` || s === `spring`)
                      return [].concat(tk(e), [
                        t.runJSAnimation.bind(t, {
                          from: d.style,
                          to: c,
                          duration: a,
                          easing: s,
                        }),
                        a,
                      ]);
                    var p = IO(f, a, s),
                      m = ik(ik(ik({}, d.style), c), {}, { transition: p });
                    return [].concat(tk(e), [m, a, u]).filter(fle);
                  },
                  [o, Math.max(c, r)],
                ),
              ),
              [e.onAnimationEnd],
            ),
          );
        },
      },
      {
        key: `runAnimation`,
        value: function (e) {
          this.manager ||= cle();
          var t = e.begin,
            n = e.duration,
            r = e.attributeName,
            i = e.to,
            a = e.easing,
            o = e.onAnimationStart,
            s = e.onAnimationEnd,
            c = e.steps,
            l = e.children,
            u = this.manager;
          if (
            ((this.unSubscribe = u.subscribe(this.handleStyleChange)),
            typeof a == `function` || typeof l == `function` || a === `spring`)
          ) {
            this.runJSAnimation(e);
            return;
          }
          if (c.length > 1) {
            this.runStepAnimation(e);
            return;
          }
          var d = r ? ak({}, r, i) : i,
            f = IO(Object.keys(d), n, a);
          u.start([o, t, ik(ik({}, d), {}, { transition: f }), n, s]);
        },
      },
      {
        key: `render`,
        value: function () {
          var e = this.props,
            t = e.children;
          e.begin;
          var n = e.duration;
          (e.attributeName, e.easing);
          var r = e.isActive;
          (e.steps,
            e.from,
            e.to,
            e.canBegin,
            e.onAnimationEnd,
            e.shouldReAnimate,
            e.onAnimationReStart);
          var i = Lle(e, Ile),
            a = X.Children.count(t),
            o = this.state.style;
          if (typeof t == `function`) return t(o);
          if (!r || a === 0 || n <= 0) return t;
          var s = function (e) {
            var t = e.props,
              n = t.style,
              r = n === void 0 ? {} : n,
              a = t.className;
            return (0, X.cloneElement)(
              e,
              ik(ik({}, i), {}, { style: ik(ik({}, r), o), className: a }),
            );
          };
          return a === 1
            ? s(X.Children.only(t))
            : X.createElement(
                `div`,
                null,
                X.Children.map(t, function (e) {
                  return s(e);
                }),
              );
        },
      },
    ]),
    n
  );
})(X.PureComponent);
