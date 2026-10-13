// assets__Create-ea24k1TY 143 — math
// Lines 47801-48139 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function sV() {
  var e,
    t,
    n,
    r,
    i = WB(-30),
    a,
    o = 1,
    s = 1 / 0,
    c = 0.81;
  function l(n) {
    var i,
      a = e.length,
      o = BB(e, nV, rV).visitAfter(d);
    for (r = n, i = 0; i < a; ++i) ((t = e[i]), o.visit(f));
  }
  function u() {
    if (e) {
      var t,
        n = e.length,
        r;
      for (a = Array(n), t = 0; t < n; ++t)
        ((r = e[t]), (a[r.index] = +i(r, t, e)));
    }
  }
  function d(e) {
    var t = 0,
      n,
      r,
      i = 0,
      o,
      s,
      c;
    if (e.length) {
      for (o = s = c = 0; c < 4; ++c)
        (n = e[c]) &&
          (r = Math.abs(n.value)) &&
          ((t += n.value), (i += r), (o += r * n.x), (s += r * n.y));
      ((e.x = o / i), (e.y = s / i));
    } else {
      ((n = e), (n.x = n.data.x), (n.y = n.data.y));
      do t += a[n.data.index];
      while ((n = n.next));
    }
    e.value = t;
  }
  function f(e, i, l, u) {
    if (!e.value) return !0;
    var d = e.x - t.x,
      f = e.y - t.y,
      p = u - i,
      m = d * d + f * f;
    if ((p * p) / c < m)
      return (
        m < s &&
          (d === 0 && ((d = GB(n)), (m += d * d)),
          f === 0 && ((f = GB(n)), (m += f * f)),
          m < o && (m = Math.sqrt(o * m)),
          (t.vx += (d * e.value * r) / m),
          (t.vy += (f * e.value * r) / m)),
        !0
      );
    if (!(e.length || m >= s)) {
      (e.data !== t || e.next) &&
        (d === 0 && ((d = GB(n)), (m += d * d)),
        f === 0 && ((f = GB(n)), (m += f * f)),
        m < o && (m = Math.sqrt(o * m)));
      do
        e.data !== t &&
          ((p = (a[e.data.index] * r) / m), (t.vx += d * p), (t.vy += f * p));
      while ((e = e.next));
    }
  }
  return (
    (l.initialize = function (t, r) {
      ((e = t), (n = r), u());
    }),
    (l.strength = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : WB(+e)), u(), l)
        : i;
    }),
    (l.distanceMin = function (e) {
      return arguments.length ? ((o = e * e), l) : Math.sqrt(o);
    }),
    (l.distanceMax = function (e) {
      return arguments.length ? ((s = e * e), l) : Math.sqrt(s);
    }),
    (l.theta = function (e) {
      return arguments.length ? ((c = e * e), l) : Math.sqrt(c);
    }),
    l
  );
}
function cV(e, t, n) {
  ((this.k = e), (this.x = t), (this.y = n));
}
cV.prototype = {
  constructor: cV,
  scale: function (e) {
    return e === 1 ? this : new cV(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0)
      ? this
      : new cV(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return `translate(` + this.x + `,` + this.y + `) scale(` + this.k + `)`;
  },
};
var lV = new cV(1, 0, 0);
uV.prototype = cV.prototype;
function uV(e) {
  for (; !e.__zoom;) if (!(e = e.parentNode)) return lV;
  return e.__zoom;
}
var dV = 140,
  fV = 44,
  pV = 90,
  mV = 36,
  hV = 6,
  gV = 400,
  _V = ({ stateMachine: e, height: t = 220, className: n = `` }) => {
    let r = (0, X.useRef)(null),
      i = (0, X.useRef)(null),
      a = (0, X.useRef)({ w: 0, h: 0 }),
      o = (0, X.useMemo)(() => {
        let t = e?.states || [],
          n = e?.transitions || [],
          r = e?.defaultStateId,
          i = n.some((e) => e.fromStateId === `*`),
          a = t.map((e) => ({
            id: e.id,
            kind: `state`,
            name: e.name,
            animationId: e.animationId,
            isDefault: e.id === r,
          }));
        i && a.push({ id: `__any__`, kind: `any`, name: `Any State` });
        let o = new Set(a.map((e) => e.id)),
          s = [];
        for (let e of n) {
          let t = e.fromStateId === `*` ? `__any__` : e.fromStateId;
          !o.has(t) ||
            !o.has(e.toStateId) ||
            s.push({
              source: t,
              target: e.toStateId,
              fromAny: e.fromStateId === `*`,
            });
        }
        return { nodes: a, links: s };
      }, [e]),
      s = (0, X.useCallback)(
        (e, t) => {
          if (o.nodes.length === 0) return [];
          let n = e / 2,
            r = t / 2,
            i = Math.min(e, t) / 3;
          o.nodes.forEach((e, t) => {
            let a = (t / o.nodes.length) * Math.PI * 2;
            ((e.x = n + Math.cos(a) * i),
              (e.y = r + Math.sin(a) * i),
              (e.vx = 0),
              (e.vy = 0));
          });
          let a = Math.max(dV * 1.2, 130),
            s = Math.hypot(dV, fV) / 2 + 6,
            c = oV(o.nodes)
              .force(`charge`, sV().strength(-650))
              .force(
                `link`,
                ZB(o.links)
                  .id((e) => e.id)
                  .distance(a)
                  .strength(0.6),
              )
              .force(`center`, xB(n, r).strength(0.05))
              .force(`collide`, JB(s).strength(0.9))
              .stop();
          for (let e = 0; e < gV; e++) c.tick();
          for (let i of o.nodes) {
            let a = i.kind === `any` ? 69 : 94,
              o = i.kind === `any` ? 42 : 46;
            ((i.x = Math.max(a, Math.min(e - a, i.x ?? n))),
              (i.y = Math.max(o, Math.min(t - o, i.y ?? r))));
          }
          return o.nodes;
        },
        [o],
      ),
      c = (0, X.useCallback)(() => {
        let e = r.current,
          t = i.current;
        if (!e || !t) return;
        let n = e.getContext(`2d`);
        if (!n) return;
        let c = window.devicePixelRatio || 1,
          l = t.getBoundingClientRect();
        if (
          ((e.width = l.width * c),
          (e.height = l.height * c),
          (e.style.width = `${l.width}px`),
          (e.style.height = `${l.height}px`),
          (a.current = { w: l.width, h: l.height }),
          n.clearRect(0, 0, e.width, e.height),
          n.save(),
          n.scale(c, c),
          (n.fillStyle = `#0d0a14`),
          n.fillRect(0, 0, l.width, l.height),
          o.nodes.length === 0)
        ) {
          ((n.fillStyle = `#555`),
            (n.font = `11px sans-serif`),
            (n.textAlign = `center`),
            n.fillText(`No state machine`, l.width / 2, l.height / 2),
            n.restore());
          return;
        }
        let u = s(l.width, l.height),
          d = new Map(u.map((e) => [e.id, e]));
        ((n.strokeStyle = `#555`), (n.fillStyle = `#555`), (n.lineWidth = 1));
        for (let e of o.links) {
          let t = typeof e.source == `string` ? e.source : e.source.id,
            r = typeof e.target == `string` ? e.target : e.target.id,
            i = d.get(t),
            a = d.get(r);
          !i ||
            !a ||
            i.x == null ||
            i.y == null ||
            a.x == null ||
            a.y == null ||
            bV(n, i, a);
        }
        for (let e of u)
          if (!(e.x == null || e.y == null))
            if (e.kind === `any`) {
              let t = e.x - pV / 2,
                r = e.y - mV / 2;
              (n.setLineDash([4, 3]),
                (n.strokeStyle = `#888`),
                (n.lineWidth = 1),
                (n.fillStyle = `#151020`),
                vV(n, t, r, pV, mV, 5),
                n.fill(),
                n.stroke(),
                n.setLineDash([]),
                (n.fillStyle = `#aaa`),
                (n.font = `10px sans-serif`),
                (n.textAlign = `center`),
                (n.textBaseline = `middle`),
                n.fillText(`Any State`, e.x, e.y));
            } else {
              let t = e.x - dV / 2,
                r = e.y - fV / 2;
              if (
                ((n.fillStyle = `#1e1a2e`),
                (n.strokeStyle = e.isDefault ? `#22c55e` : `#444`),
                (n.lineWidth = e.isDefault ? 1.5 : 1),
                vV(n, t, r, dV, fV, hV),
                n.fill(),
                n.stroke(),
                (n.fillStyle = `#ddd`),
                (n.font = `bold 11px sans-serif`),
                (n.textAlign = `left`),
                (n.textBaseline = `alphabetic`),
                n.fillText(e.name, t + 8, r + 16, dV - 16),
                (n.fillStyle = `#888`),
                (n.font = `9px sans-serif`),
                n.fillText(
                  e.animationId || `(no animation)`,
                  t + 8,
                  r + 30,
                  dV - 16,
                ),
                e.isDefault)
              ) {
                ((n.fillStyle = `#22c55e`), n.beginPath());
                let r = t - 9,
                  i = e.y;
                (n.moveTo(r - 7, i - 4),
                  n.lineTo(r, i),
                  n.lineTo(r - 7, i + 4),
                  n.closePath(),
                  n.fill());
              }
            }
        n.restore();
      }, [o, s]);
    return (
      (0, X.useEffect)(() => {
        c();
        let e = new ResizeObserver(() => {
          let e = i.current;
          if (!e) return;
          let t = e.getBoundingClientRect();
          (Math.abs(t.width - a.current.w) > 1 ||
            Math.abs(t.height - a.current.h) > 1) &&
            c();
        });
        return (i.current && e.observe(i.current), () => e.disconnect());
      }, [c]),
      (0, Z.jsx)(`div`, {
        ref: i,
        className: n,
        style: { height: t },
        children: (0, Z.jsx)(`canvas`, {
          ref: r,
          className: `block w-full h-full`,
        }),
      })
    );
  };
