// assets__Create-ea24k1TY 138 — state
// Lines 46195-46540 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function CR(e, t, n) {
  return function () {
    var r = this.__on,
      i,
      a = bR(t);
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
function wR(e, t, n) {
  var r = xR(e + ``),
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
  for (s = t ? CR : SR, i = 0; i < a; ++i) this.each(s(r[i], t, n));
  return this;
}
function TR(e, t, n) {
  var r = PL(e),
    i = r.CustomEvent;
  (typeof i == `function`
    ? (i = new i(t, n))
    : ((i = r.document.createEvent(`Event`)),
      n
        ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i));
}
function ER(e, t) {
  return function () {
    return TR(this, e, t);
  };
}
function DR(e, t) {
  return function () {
    return TR(this, e, t.apply(this, arguments));
  };
}
function OR(e, t) {
  return this.each((typeof t == `function` ? DR : ER)(e, t));
}
function* kR() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var AR = [null];
function jR(e, t) {
  ((this._groups = e), (this._parents = t));
}
function MR() {
  return new jR([[document.documentElement]], AR);
}
function NR() {
  return this;
}
jR.prototype = MR.prototype = {
  constructor: jR,
  select: UI,
  selectAll: JI,
  selectChild: eL,
  selectChildren: iL,
  filter: aL,
  data: pL,
  enter: sL,
  exit: hL,
  join: gL,
  merge: _L,
  selection: NR,
  order: vL,
  sort: yL,
  call: xL,
  nodes: SL,
  node: CL,
  size: wL,
  empty: TL,
  each: EL,
  attr: NL,
  style: RL,
  property: UL,
  classed: QL,
  text: nR,
  html: oR,
  raise: cR,
  lower: uR,
  append: dR,
  insert: pR,
  remove: hR,
  clone: vR,
  datum: yR,
  on: wR,
  dispatch: OR,
  [Symbol.iterator]: kR,
};
var PR = 0,
  FR = 0,
  IR = 0,
  LR = 1e3,
  RR,
  zR,
  BR = 0,
  VR = 0,
  HR = 0,
  UR = typeof performance == `object` && performance.now ? performance : Date,
  WR =
    typeof window == `object` && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function GR() {
  return (VR ||= (WR(KR), UR.now() + HR));
}
function KR() {
  VR = 0;
}
function qR() {
  this._call = this._time = this._next = null;
}
qR.prototype = JR.prototype = {
  constructor: qR,
  restart: function (e, t, n) {
    if (typeof e != `function`) throw TypeError(`callback is not a function`);
    ((n = (n == null ? GR() : +n) + (t == null ? 0 : +t)),
      !this._next &&
        zR !== this &&
        (zR ? (zR._next = this) : (RR = this), (zR = this)),
      (this._call = e),
      (this._time = n),
      $R());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), $R());
  },
};
function JR(e, t, n) {
  var r = new qR();
  return (r.restart(e, t, n), r);
}
function YR() {
  (GR(), ++PR);
  for (var e = RR, t; e;)
    ((t = VR - e._time) >= 0 && e._call.call(void 0, t), (e = e._next));
  --PR;
}
function XR() {
  ((VR = (BR = UR.now()) + HR), (PR = FR = 0));
  try {
    YR();
  } finally {
    ((PR = 0), QR(), (VR = 0));
  }
}
function ZR() {
  var e = UR.now(),
    t = e - BR;
  t > LR && ((HR -= t), (BR = e));
}
function QR() {
  for (var e, t = RR, n, r = 1 / 0; t;)
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (RR = n)));
  ((zR = e), $R(r));
}
function $R(e) {
  PR ||
    ((FR &&= clearTimeout(FR)),
    e - VR > 24
      ? (e < 1 / 0 && (FR = setTimeout(XR, e - UR.now() - HR)),
        (IR &&= clearInterval(IR)))
      : ((IR ||= ((BR = UR.now()), setInterval(ZR, LR))), (PR = 1), WR(XR)));
}
function ez(e, t, n) {
  var r = new qR();
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
var tz = jI(`start`, `end`, `cancel`, `interrupt`),
  nz = [];
function rz(e, t, n, r, i, a) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (n in o) return;
  sz(e, n, {
    name: t,
    index: r,
    group: i,
    on: tz,
    tween: nz,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: 0,
  });
}
function iz(e, t) {
  var n = oz(e, t);
  if (n.state > 0) throw Error(`too late; already scheduled`);
  return n;
}
function az(e, t) {
  var n = oz(e, t);
  if (n.state > 3) throw Error(`too late; already running`);
  return n;
}
function oz(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw Error(`transition not found`);
  return n;
}
function sz(e, t, n) {
  var r = e.__transition,
    i;
  ((r[t] = n), (n.timer = JR(a, 0, n.time)));
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
        if (f.state === 3) return ez(o);
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
      (ez(function () {
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
function cz(e, t) {
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
function lz(e) {
  return this.each(function () {
    cz(this, e);
  });
}
function uz(e, t) {
  var n, r;
  return function () {
    var i = az(this, e),
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
