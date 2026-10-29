// Create-CEn7EAZs 140 — state
// Lines 46968-47313 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function zR(e, t, n) {
  return function () {
    var r = this.__on,
      i,
      a = IR(t);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === e.type && i.name === e.name) {
          (this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = a), (i.options = n)),
            (i.value = t));
          return;
        }
    }
    (this.addEventListener(e.type, a, n),
      (i = { type: e.type, name: e.name, value: t, listener: a, options: n }),
      r ? r.push(i) : (this.__on = [i]));
  };
}
function BR(e, t, n) {
  var r = LR(e + ``),
    i,
    a = r.length,
    o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, l = s.length, u; c < l; ++c)
        for (i = 0, u = s[c]; i < a; ++i)
          if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
    }
    return;
  }
  for (s = t ? zR : RR, i = 0; i < a; ++i) this.each(s(r[i], t, n));
  return this;
}
function VR(e, t, n) {
  var r = XL(e),
    i = r.CustomEvent;
  (typeof i == `function`
    ? (i = new i(t, n))
    : ((i = r.document.createEvent(`Event`)),
      n
        ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i));
}
function HR(e, t) {
  return function () {
    return VR(this, e, t);
  };
}
function UR(e, t) {
  return function () {
    return VR(this, e, t.apply(this, arguments));
  };
}
function WR(e, t) {
  return this.each((typeof t == `function` ? UR : HR)(e, t));
}
function* GR() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var KR = [null];
function qR(e, t) {
  ((this._groups = e), (this._parents = t));
}
function JR() {
  return new qR([[document.documentElement]], KR);
}
function YR() {
  return this;
}
qR.prototype = JR.prototype = {
  constructor: qR,
  select: aL,
  selectAll: uL,
  selectChild: gL,
  selectChildren: bL,
  filter: xL,
  data: kL,
  enter: CL,
  exit: jL,
  join: ML,
  merge: NL,
  selection: YR,
  order: PL,
  sort: FL,
  call: LL,
  nodes: RL,
  node: zL,
  size: BL,
  empty: VL,
  each: HL,
  attr: YL,
  style: eR,
  property: aR,
  classed: mR,
  text: vR,
  html: SR,
  raise: wR,
  lower: ER,
  append: DR,
  insert: kR,
  remove: jR,
  clone: PR,
  datum: FR,
  on: BR,
  dispatch: WR,
  [Symbol.iterator]: GR,
};
var XR = 0,
  ZR = 0,
  QR = 0,
  $R = 1e3,
  ez,
  tz,
  nz = 0,
  rz = 0,
  iz = 0,
  az = typeof performance == `object` && performance.now ? performance : Date,
  oz =
    typeof window == `object` && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function sz() {
  return (rz ||= (oz(cz), az.now() + iz));
}
function cz() {
  rz = 0;
}
function lz() {
  this._call = this._time = this._next = null;
}
lz.prototype = uz.prototype = {
  constructor: lz,
  restart: function (e, t, n) {
    if (typeof e != `function`) throw TypeError(`callback is not a function`);
    ((n = (n == null ? sz() : +n) + (t == null ? 0 : +t)),
      !this._next &&
        tz !== this &&
        (tz ? (tz._next = this) : (ez = this), (tz = this)),
      (this._call = e),
      (this._time = n),
      hz());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), hz());
  },
};
function uz(e, t, n) {
  var r = new lz();
  return (r.restart(e, t, n), r);
}
function dz() {
  (sz(), ++XR);
  for (var e = ez, t; e;)
    ((t = rz - e._time) >= 0 && e._call.call(void 0, t), (e = e._next));
  --XR;
}
function fz() {
  ((rz = (nz = az.now()) + iz), (XR = ZR = 0));
  try {
    dz();
  } finally {
    ((XR = 0), mz(), (rz = 0));
  }
}
function pz() {
  var e = az.now(),
    t = e - nz;
  t > $R && ((iz -= t), (nz = e));
}
function mz() {
  for (var e, t = ez, n, r = 1 / 0; t;)
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (ez = n)));
  ((tz = e), hz(r));
}
function hz(e) {
  XR ||
    ((ZR &&= clearTimeout(ZR)),
    e - rz > 24
      ? (e < 1 / 0 && (ZR = setTimeout(fz, e - az.now() - iz)),
        (QR &&= clearInterval(QR)))
      : ((QR ||= ((nz = az.now()), setInterval(pz, $R))), (XR = 1), oz(fz)));
}
function gz(e, t, n) {
  var r = new lz();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      (n) => {
        (r.stop(), e(n + t));
      },
      t,
      n,
    ),
    r
  );
}
var _z = qI(`start`, `end`, `cancel`, `interrupt`),
  vz = [];
function yz(e, t, n, r, i, a) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (n in o) return;
  Cz(e, n, {
    name: t,
    index: r,
    group: i,
    on: _z,
    tween: vz,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: 0,
  });
}
function bz(e, t) {
  var n = Sz(e, t);
  if (n.state > 0) throw Error(`too late; already scheduled`);
  return n;
}
function xz(e, t) {
  var n = Sz(e, t);
  if (n.state > 3) throw Error(`too late; already running`);
  return n;
}
function Sz(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw Error(`transition not found`);
  return n;
}
function Cz(e, t, n) {
  var r = e.__transition,
    i;
  ((r[t] = n), (n.timer = uz(a, 0, n.time)));
  function a(e) {
    ((n.state = 1),
      n.timer.restart(o, n.delay, n.time),
      n.delay <= e && o(e - n.delay));
  }
  function o(a) {
    var l, u, d, f;
    if (n.state !== 1) return c();
    for (l in r)
      if (((f = r[l]), f.name === n.name)) {
        if (f.state === 3) return gz(o);
        f.state === 4
          ? ((f.state = 6),
            f.timer.stop(),
            f.on.call(`interrupt`, e, e.__data__, f.index, f.group),
            delete r[l])
          : +l < t &&
            ((f.state = 6),
            f.timer.stop(),
            f.on.call(`cancel`, e, e.__data__, f.index, f.group),
            delete r[l]);
      }
    if (
      (gz(function () {
        n.state === 3 &&
          ((n.state = 4), n.timer.restart(s, n.delay, n.time), s(a));
      }),
      (n.state = 2),
      n.on.call(`start`, e, e.__data__, n.index, n.group),
      n.state === 2)
    ) {
      for (
        n.state = 3, i = Array((d = n.tween.length)), l = 0, u = -1;
        l < d;
        ++l
      )
        (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) &&
          (i[++u] = f);
      i.length = u + 1;
    }
  }
  function s(t) {
    for (
      var r =
          t < n.duration
            ? n.ease.call(null, t / n.duration)
            : (n.timer.restart(c), (n.state = 5), 1),
        a = -1,
        o = i.length;
      ++a < o;
    )
      i[a].call(e, r);
    n.state === 5 && (n.on.call(`end`, e, e.__data__, n.index, n.group), c());
  }
  function c() {
    for (var i in ((n.state = 6), n.timer.stop(), delete r[t], r)) return;
    delete e.__transition;
  }
}
function wz(e, t) {
  var n = e.__transition,
    r,
    i,
    a = !0,
    o;
  if (n) {
    for (o in ((t = t == null ? null : t + ``), n)) {
      if ((r = n[o]).name !== t) {
        a = !1;
        continue;
      }
      ((i = r.state > 2 && r.state < 5),
        (r.state = 6),
        r.timer.stop(),
        r.on.call(i ? `interrupt` : `cancel`, e, e.__data__, r.index, r.group),
        delete n[o]);
    }
    a && delete e.__transition;
  }
}
function Tz(e) {
  return this.each(function () {
    wz(this, e);
  });
}
function Ez(e, t) {
  var n, r;
  return function () {
    var i = xz(this, e),
      a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === t) {
          ((r = r.slice()), r.splice(o, 1));
          break;
        }
    }
    i.tween = r;
  };
}
