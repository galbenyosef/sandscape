// Create-CEn7EAZs 04 — push
// Lines 1278-1612 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Us(e, t) {
  return er(e) ? e[ste(0, e.length, t)] : e;
}
var cte = class {
  constructor(e) {
    ((this.stop = () => this.runAll(`stop`)),
      (this.animations = e.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, t) {
    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
  }
  attachTimeline(e) {
    let t = this.animations.map((t) => t.attachTimeline(e));
    return () => {
      t.forEach((e, t) => {
        (e && e(), this.animations[t].stop());
      });
    };
  }
  get time() {
    return this.getAll(`time`);
  }
  set time(e) {
    this.setAll(`time`, e);
  }
  get speed() {
    return this.getAll(`speed`);
  }
  set speed(e) {
    this.setAll(`speed`, e);
  }
  get state() {
    return this.getAll(`state`);
  }
  get startTime() {
    return this.getAll(`startTime`);
  }
  get duration() {
    return Ws(this.animations, `duration`);
  }
  get iterationDuration() {
    return Ws(this.animations, `iterationDuration`);
  }
  runAll(e) {
    this.animations.forEach((t) => t[e]());
  }
  play() {
    this.runAll(`play`);
  }
  pause() {
    this.runAll(`pause`);
  }
  cancel() {
    this.runAll(`cancel`);
  }
  complete() {
    this.runAll(`complete`);
  }
};
function Ws(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
var lte = class extends cte {
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
};
function ute(e, t) {
  return e in t;
}
var dte = class extends ir {
  constructor() {
    (super(...arguments), (this.type = `object`));
  }
  readValueFromInstance(e, t) {
    if (ute(t, e)) {
      let n = e[t];
      if (typeof n == `string` || typeof n == `number`) return n;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, t) {
    delete t.output[e];
  }
  measureInstanceViewportBox() {
    return Zn();
  }
  build(e, t) {
    Object.assign(e.output, t);
  }
  renderInstance(e, { output: t }) {
    Object.assign(e, t);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
function Gs(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function Ks(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && Gs(t)
      ? Qn(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function fte(e, t, n) {
  return e * (t + 1) + n * t;
}
function qs(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function pte(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (Hn(e, i), r--);
  }
}
function mte(e, t, n, r, i, a) {
  pte(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: Gn(i, a, r[o]), easing: Us(n, o) });
}
function hte(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function gte(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
var _te = `easeInOut`,
  Js = 20;
function vte(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    } else if (!Array.isArray(o)) {
      l.set(o.name, qs(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = qs(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = yte(e),
          {
            delay: l = 0,
            times: u = Ln(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = cr(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && Ste(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = Wn(b));
          let r = Rn(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let w = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let T = u.length - c.length;
        if (
          (T > 0 && sr(u, T),
          c.length === 1 && c.unshift(null),
          m &&
            Vn(
              m < Js,
              `Sequence segments can't repeat ${m} times — ignoring repeat option. Use a value below ${Js} or apply repeat at the sequence level instead.`,
            ),
          m && m < Js)
        ) {
          let e = b > 0 ? _ / b : 0;
          b = fte(b, m, _);
          let t = [...c],
            n = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let r = [...y],
            i = h === `reverse` || h === `mirror`,
            a = t,
            o = r;
          i &&
            ((a = [...t].reverse()),
            h === `reverse` &&
              (o = [...r]
                .reverse()
                .map((e) => (typeof e == `function` ? Un(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)),
              c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : Us(f, e - 1)));
          }
          hte(u, m, e);
        }
        let E = w + b;
        (mte(r, c, y, u, w, E), (g = Math.max(x + b, g)), (f = Math.max(E, f)));
      };
    if (or(p)) {
      let e = Ys(p, s);
      _(m, h, Xs(`default`, e));
    } else {
      let e = Ks(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = Ys(r, s);
        for (let e in m) _(m[e], bte(h, e), Xs(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(gte);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(Kn(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(_te)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function Ys(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function Xs(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function yte(e) {
  return Array.isArray(e) ? e : [e];
}
function bte(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var xte = (e) => typeof e == `number`,
  Ste = (e) => e.every(xte);
function Cte(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = tr(e) && !rr(e) ? new Jn(t) : new nr(t);
  (n.mount(e), Xn.set(e, n));
}
function wte(e) {
  let t = new dte({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), Xn.set(e, t));
}
function Tte(e, t) {
  return or(e) || typeof e == `number` || (typeof e == `string` && !Gs(t));
}
