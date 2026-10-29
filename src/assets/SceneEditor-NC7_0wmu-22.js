// SceneEditor-NC7_0wmu 22 — inputs
// Lines 17357-17689 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var Al = `    `,
  jl = class {
    constructor({ indent: e } = {}) {
      ((this.globals = new Set()),
        (this.statements = []),
        (this.uniforms = {}),
        (this.declares = new Set()),
        (this.updaters = []),
        (this.sequence = 0),
        (this.indent = Al),
        (this.indent = e ?? Al));
    }
    nextSequence() {
      return this.sequence++;
    }
  },
  Ml = class {
    constructor({
      inTypes: e,
      outTypes: t,
      inputs: n,
      update: r,
      globals: i,
      statements: a,
      generate: o,
    }) {
      ((this.inTypes = e ?? {}),
        (this.outTypes = t ?? {}),
        (this.inputs = n ?? {}),
        (this.update = r),
        (this.globals = i),
        (this.statements = a),
        (this.generate =
          o ??
          (({ inputs: e, outputs: t, compile: n }) => ({
            globals: this.globals?.call(this, {
              inputs: e,
              outputs: t,
              compile: n,
            }),
            statements: this.statements?.call(this, {
              inputs: e,
              outputs: t,
              compile: n,
            }),
          }))));
    }
    get outputs() {
      let e = {};
      for (let t in this.outTypes) e[t] = new Tl(this, t);
      return e;
    }
    apply(e) {
      return (Object.assign(this.inputs, e), this.outputs);
    }
    compile({ inputs: e, outputs: t, compile: n }) {
      let r = [
          `// ${this.constructor.name}(${Object.values(e).join(`, `)}) => (${Object.values(t).join(`, `)})`,
        ],
        i = [];
      for (let e in t) {
        let r = t[e];
        r && !n.declares.has(r) && (n.declares.add(r), i.push(e));
      }
      let {
        globals: a,
        statements: o,
        uniforms: s,
      } = this.generate({ inputs: e, outputs: t, compile: n });
      for (let e of a ?? []) n.globals.add(e);
      for (let e in s) n.uniforms[e] = s[e];
      this.update && n.updaters.push(this.update);
      for (let e of i) {
        let i = t[e];
        i && (n.uniforms[i] || r.push(`${Il(i, this.outTypes[e])};`));
      }
      return (
        o?.length &&
          (r.push(`{`), r.push(...o.map((e) => n.indent + e)), r.push(`}`)),
        r
      );
    }
  },
  Nl = class extends Ml {
    constructor({
      inTypes: e,
      outTypes: t,
      inputs: n,
      update: r,
      globals: i,
      construct: a,
    }) {
      (super({
        inTypes: e,
        outTypes: t,
        inputs: n,
        update: r,
        globals: i,
        generate: (e) => this.generateBlock(e),
      }),
        (this.construct = a));
    }
    generateBlock({ inputs: e, outputs: t, compile: n }) {
      let r = {},
        i = {};
      for (let t in e) e[t] != null && (r[t] = new El(this.inTypes[t], e[t]));
      for (let e in t) t[e] != null && (i[e] = new wl(this.outTypes[e]));
      let a = { roots: [] },
        o = this.construct(r, i, a);
      for (let r of this.globals?.call(this, {
        inputs: e,
        outputs: t,
        compile: n,
      }) ?? [])
        n.globals.add(r);
      let s = [],
        c = new Map();
      function l(e, t, r) {
        let i = c.get(e);
        if (!i) {
          ((i = {
            sequence: n.nextSequence(),
            outNames: new Map(),
            newOuts: new Set(),
          }),
            c.set(e, i));
          for (let t in e.inputs) {
            let n = e.inputs[t];
            for (; n;) {
              if (n instanceof wl) {
                n instanceof Tl && l(n.dyno, n.key);
                break;
              }
              if (typeof n.dynoOut != `function`)
                throw Error(
                  `dynoOut is not a function for ${n.constructor.name}`,
                );
              n = n.dynoOut();
            }
          }
          s.push(e);
        }
        t &&
          (r || i.newOuts.add(t), i.outNames.set(t, r ?? `${t}_${i.sequence}`));
      }
      for (let e of a.roots) l(e);
      for (let e in i) {
        let n = o?.[e] ?? i[e];
        for (; n;) {
          if (n instanceof wl) {
            n instanceof Tl && l(n.dyno, n.key, t[e]);
            break;
          }
          n = n.dynoOut();
        }
        i[e] = n;
      }
      let u = [];
      for (let e of s) {
        let t = {},
          r = {};
        for (let n in e.inputs) {
          let r = e.inputs[n];
          for (; r;) {
            if (r instanceof wl) {
              if (r instanceof El) t[n] = r.getLiteral();
              else if (r instanceof Tl) {
                let e = c.get(r.dyno)?.outNames.get(r.key);
                if (!e)
                  throw Error(
                    `Source not found for ${r.dyno.constructor.name}.${r.key}`,
                  );
                t[n] = e;
              }
              break;
            }
            r = r.dynoOut();
          }
        }
        let i = c.get(e) ?? { outNames: new Map() };
        for (let [e, t] of i.outNames.entries()) r[e] = t;
        let a = e.compile({ inputs: t, outputs: r, compile: n });
        u.push(a);
      }
      let d = [];
      for (let e in t)
        i[e] instanceof El && d.push(`${t[e]} = ${i[e].getLiteral()};`);
      return (
        d.length > 0 && u.push(d),
        { statements: u.flatMap((e, t) => (t === 0 ? e : [``, ...e])) }
      );
    }
  };
function Pl(e, t, n, { update: r, globals: i } = {}) {
  return new Nl({
    inTypes: e,
    outTypes: t,
    construct: n,
    update: r,
    globals: i,
  });
}
function Fl({
  inTypes: e,
  outTypes: t,
  inputs: n,
  update: r,
  globals: i,
  statements: a,
  generate: o,
}) {
  return new Ml({
    inTypes: e,
    outTypes: t,
    inputs: n,
    update: r,
    globals: i,
    statements: a,
    generate: o,
  });
}
function Il(e, t, n) {
  let r = typeof t == `string` ? t : t.type;
  if (!r) throw Error(`Invalid DynoType: ${String(t)}`);
  return `${r} ${e}${n == null ? `` : `[${n}]`}`;
}
function Ll(e) {
  let t = !1,
    n = e
      .split(
        `
`,
      )
      .map((e) => {
        let n = e.trimEnd();
        return t ? n : n.length > 0 ? ((t = !0), n) : null;
      })
      .filter((e) => e != null);
  for (; n.length > 0 && n[n.length - 1].length === 0;) n.pop();
  if (n.length === 0) return [];
  let r = n[0].match(/^\s*/)?.[0];
  if (!r) return n;
  let i = RegExp(`^${r}`);
  return n.map((e) => e.replace(i, ``));
}
function Rl(e) {
  return Ll(e).join(`
`);
}
var zl = class extends Ml {
    constructor({ a: e, outKey: t, outTypeFunc: n }) {
      let r = { a: Cl(e) },
        i = n(Cl(e));
      (super({ inTypes: r, outTypes: { [t]: i }, inputs: { a: e } }),
        (this.outKey = t));
    }
    dynoOut() {
      return new Tl(this, this.outKey);
    }
  },
  Bl = class extends Ml {
    constructor({ a: e, b: t, outKey: n, outTypeFunc: r }) {
      let i = { a: Cl(e), b: Cl(t) },
        a = r(Cl(e), Cl(t));
      (super({ inTypes: i, outTypes: { [n]: a }, inputs: { a: e, b: t } }),
        (this.outKey = n));
    }
    dynoOut() {
      return new Tl(this, this.outKey);
    }
  },
  Vl = Number.parseInt(`184`) >= 179,
  Hl = new Float32Array(1),
  Ul = new Uint32Array(Hl.buffer),
  Wl = `Float16Array` in globalThis,
  Gl = Wl ? new globalThis.Float16Array(1) : null,
  Kl = new Uint16Array(Gl?.buffer);
function ql(e) {
  return ((Hl[0] = e), Ul[0]);
}
function Jl(e) {
  return ((Ul[0] = e), Hl[0]);
}
var Yl = Wl ? Zl : Ql,
  Xl = Wl ? $l : eu;
function Zl(e) {
  return ((Gl[0] = e), Kl[0]);
}
function Ql(e) {
  Hl[0] = e;
  let t = Ul[0],
    n = (t >> 31) & 1,
    r = (t >> 23) & 255,
    i = t & 8388607,
    a = n << 15;
  if (r === 255) return i === 0 ? a | 31744 : a | 32767;
  let o = r - 127 + 15;
  if (o >= 31) return a | 31744;
  if (o <= 0) return o < -10 ? a : a | ((i | 8388608) >> (1 - o + 13));
  let s = i >> 13;
  return a | (o << 10) | s;
}
function $l(e) {
  return ((Kl[0] = e), Gl[0]);
}
function eu(e) {
  let t = (e >> 15) & 1,
    n = (e >> 10) & 31,
    r = e & 1023,
    i;
  if (n === 0)
    if (r === 0) i = t << 31;
    else {
      let e = r,
        n = -14;
      for (; !(e & 1024);) ((e <<= 1), n--);
      e &= 1023;
      let a = n + 127,
        o = e << 13;
      i = (t << 31) | (a << 23) | o;
    }
  else if (n === 31)
    i = r === 0 ? (t << 31) | 2139095040 : (t << 31) | 2143289344;
  else {
    let e = n - 15 + 127,
      a = r << 13;
    i = (t << 31) | (e << 23) | a;
  }
  return ((Ul[0] = i), Hl[0]);
}
function tu(e) {
  return Math.max(0, Math.min(255, Math.round(e * 255)));
}
