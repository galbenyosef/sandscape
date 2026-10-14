// assets__Create-ea24k1TY 04 — push
// Lines 1267-1601 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function ds(e, t) {
  return fr(e) ? e[Ote(0, e.length, t)] : e;
}
var kte = class {
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
    return fs(this.animations, `duration`);
  }
  get iterationDuration() {
    return fs(this.animations, `iterationDuration`);
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
function fs(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
var Ate = class extends kte {
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
};
function jte(e, t) {
  return e in t;
}
var Mte = class extends gr {
  constructor() {
    (super(...arguments), (this.type = `object`));
  }
  readValueFromInstance(e, t) {
    if (jte(t, e)) {
      let n = e[t];
      if (typeof n == `string` || typeof n == `number`) return n;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, t) {
    delete t.output[e];
  }
  measureInstanceViewportBox() {
    return lr();
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
function ps(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function ms(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && ps(t)
      ? ur(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function Nte(e, t, n) {
  return e * (t + 1) + n * t;
}
function hs(e, t, n, r) {
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
function Pte(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (er(e, i), r--);
  }
}
function Fte(e, t, n, r, i, a) {
  Pte(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: rr(i, a, r[o]), easing: ds(n, o) });
}
function Ite(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function Lte(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
var Rte = `easeInOut`,
  gs = 20;
function zte(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
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
      l.set(o.name, hs(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = hs(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = ys(e),
          {
            delay: l = 0,
            times: u = Yn(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = br(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && Ss(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = nr(b));
          let r = Xn(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let w = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let T = u.length - c.length;
        if (
          (T > 0 && yr(u, T),
          c.length === 1 && c.unshift(null),
          m &&
            $n(
              m < gs,
              `Sequence segments can't repeat ${m} times — ignoring repeat option. Use a value below ${gs} or apply repeat at the sequence level instead.`,
            ),
          m && m < gs)
        ) {
          let e = b > 0 ? _ / b : 0;
          b = Nte(b, m, _);
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
                .map((e) => (typeof e == `function` ? tr(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)),
              c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : ds(f, e - 1)));
          }
          Ite(u, m, e);
        }
        let E = w + b;
        (Fte(r, c, y, u, w, E), (g = Math.max(x + b, g)), (f = Math.max(E, f)));
      };
    if (vr(p)) {
      let e = _s(p, s);
      _(m, h, vs(`default`, e));
    } else {
      let e = ms(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = _s(r, s);
        for (let e in m) _(m[e], bs(h, e), vs(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(Lte);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(ir(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(Rte)),
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
function _s(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function vs(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function ys(e) {
  return Array.isArray(e) ? e : [e];
}
function bs(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var xs = (e) => typeof e == `number`,
  Ss = (e) => e.every(xs);
function Cs(e) {
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
    n = pr(e) && !hr(e) ? new or(t) : new mr(t);
  (n.mount(e), cr.set(e, n));
}
function ws(e) {
  let t = new Mte({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), cr.set(e, t));
}
function Ts(e, t) {
  return vr(e) || typeof e == `number` || (typeof e == `string` && !ps(t));
}
