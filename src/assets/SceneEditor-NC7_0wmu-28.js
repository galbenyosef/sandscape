// SceneEditor-NC7_0wmu 28 — inputs
// Lines 20159-20718 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var hd = class extends Ml {
    constructor({ gsplat: e, scale: t, rotate: n, translate: r, recolor: i }) {
      super({
        inTypes: {
          gsplat: Wu,
          scale: `float`,
          rotate: `vec4`,
          translate: `vec3`,
          recolor: `vec4`,
        },
        outTypes: { gsplat: Wu },
        inputs: { gsplat: e, scale: t, rotate: n, translate: r, recolor: i },
        globals: () => [rd],
        statements: ({ inputs: e, outputs: t, compile: n }) => {
          let { gsplat: r } = t;
          if (!r || !e.gsplat) return [];
          let { scale: i, rotate: a, translate: o, recolor: s } = e,
            c = n.indent;
          return [
            `${r} = ${e.gsplat};`,
            `if (isGsplatActive(${r}.flags)) {`,
            i ? `${c}${r}.center *= ${i};` : null,
            a ? `${c}${r}.center = quatVec(${a}, ${r}.center);` : null,
            o ? `${c}${r}.center += ${o};` : null,
            i ? `${c}${r}.scales *= ${i};` : null,
            a ? `${c}${r}.quaternion = quatQuat(${a}, ${r}.quaternion);` : null,
            s ? `${c}${r}.rgba *= ${s};` : null,
            `}`,
          ].filter(Boolean);
        },
      });
    }
    dynoOut() {
      return new Tl(this, `gsplat`);
    }
  },
  gd = (e) => new vd({ covsplat: e }),
  _d = ({
    covsplat: e,
    flags: t,
    index: n,
    center: r,
    rgba: i,
    rgb: a,
    opacity: o,
    x: s,
    y: c,
    z: l,
    r: u,
    g: d,
    b: f,
  }) =>
    new yd({
      covsplat: e,
      flags: t,
      index: n,
      center: r,
      rgba: i,
      rgb: a,
      opacity: o,
      x: s,
      y: c,
      z: l,
      r: u,
      g: d,
      b: f,
    }),
  vd = class extends Ml {
    constructor({ covsplat: e }) {
      super({
        inTypes: { covsplat: Gu },
        outTypes: {
          flags: `uint`,
          active: `bool`,
          index: `int`,
          center: `vec3`,
          rgba: `vec4`,
          rgb: `vec3`,
          opacity: `float`,
          x: `float`,
          y: `float`,
          z: `float`,
          r: `float`,
          g: `float`,
          b: `float`,
        },
        inputs: { covsplat: e },
        globals: () => [id],
        statements: ({ inputs: e, outputs: t }) => {
          let { covsplat: n } = e,
            {
              flags: r,
              active: i,
              index: a,
              center: o,
              rgba: s,
              rgb: c,
              opacity: l,
              x: u,
              y: d,
              z: f,
              r: p,
              g: m,
              b: h,
            } = t;
          return [
            r ? `${r} = ${n ? `${n}.flags` : `0u`};` : null,
            i ? `${i} = isCovSplatActive(${n ? `${n}.flags` : `0u`});` : null,
            a ? `${a} = ${n ? `${n}.index` : `0`};` : null,
            o ? `${o} = ${n ? `${n}.center` : `vec3(0.0, 0.0, 0.0)`};` : null,
            s
              ? `${s} = ${n ? `${n}.rgba` : `vec4(0.0, 0.0, 0.0, 0.0)`};`
              : null,
            c ? `${c} = ${n ? `${n}.rgba.rgb` : `vec3(0.0, 0.0, 0.0)`};` : null,
            l ? `${l} = ${n ? `${n}.rgba.a` : `0.0`};` : null,
            u ? `${u} = ${n ? `${n}.center.x` : `0.0`};` : null,
            d ? `${d} = ${n ? `${n}.center.y` : `0.0`};` : null,
            f ? `${f} = ${n ? `${n}.center.z` : `0.0`};` : null,
            p ? `${p} = ${n ? `${n}.rgba.r` : `0.0`};` : null,
            m ? `${m} = ${n ? `${n}.rgba.g` : `0.0`};` : null,
            h ? `${h} = ${n ? `${n}.rgba.b` : `0.0`};` : null,
          ].filter(Boolean);
        },
      });
    }
  },
  yd = class extends Ml {
    constructor({
      covsplat: e,
      flags: t,
      index: n,
      center: r,
      rgba: i,
      rgb: a,
      opacity: o,
      x: s,
      y: c,
      z: l,
      r: u,
      g: d,
      b: f,
    }) {
      super({
        inTypes: {
          covsplat: Gu,
          flags: `uint`,
          index: `int`,
          center: `vec3`,
          rgba: `vec4`,
          rgb: `vec3`,
          opacity: `float`,
          x: `float`,
          y: `float`,
          z: `float`,
          r: `float`,
          g: `float`,
          b: `float`,
        },
        outTypes: { covsplat: Gu },
        inputs: {
          covsplat: e,
          flags: t,
          index: n,
          center: r,
          rgba: i,
          rgb: a,
          opacity: o,
          x: s,
          y: c,
          z: l,
          r: u,
          g: d,
          b: f,
        },
        globals: () => [id],
        statements: ({ inputs: e, outputs: t }) => {
          let { covsplat: n } = t;
          if (!n) return [];
          let {
            covsplat: r,
            flags: i,
            index: a,
            center: o,
            rgba: s,
            rgb: c,
            opacity: l,
            x: u,
            y: d,
            z: f,
            r: p,
            g: m,
            b: h,
          } = e;
          return [
            `${n}.flags = ${i ?? (r ? `${r}.flags` : `0u`)};`,
            `${n}.index = ${a ?? (r ? `${r}.index` : `0`)};`,
            `${n}.center = ${o ?? (r ? `${r}.center` : `vec3(0.0, 0.0, 0.0)`)};`,
            `${n}.rgba = ${s ?? (r ? `${r}.rgba` : `vec4(0.0, 0.0, 0.0, 0.0)`)};`,
            c ? `${n}.rgba.rgb = ${c};` : null,
            l ? `${n}.rgba.a = ${l};` : null,
            u ? `${n}.center.x = ${u};` : null,
            d ? `${n}.center.y = ${d};` : null,
            f ? `${n}.center.z = ${f};` : null,
            p ? `${n}.rgba.r = ${p};` : null,
            m ? `${n}.rgba.g = ${m};` : null,
            h ? `${n}.rgba.b = ${h};` : null,
            `${n}.xxyyzz = ${r ? `${r}.xxyyzz` : `vec3(0.0, 0.0, 0.0)`};`,
            `${n}.xyxzyz = ${r ? `${r}.xyxzyz` : `vec3(0.0, 0.0, 0.0)`};`,
          ].filter(Boolean);
        },
      });
    }
    dynoOut() {
      return new Tl(this, `covsplat`);
    }
  },
  bd = class extends Ml {
    constructor({ index: e }) {
      super({
        inTypes: { index: `int` },
        outTypes: { coord: `ivec3` },
        inputs: { index: e },
        statements: ({ inputs: e, outputs: t }) => {
          let { index: n } = e,
            { coord: r } = t;
          return !n || !r ? [] : [`${r} = splatTexCoord(${n});`];
        },
      });
    }
    dynoOut() {
      return new Tl(this, `coord`);
    }
  },
  xd = class extends Ml {
    constructor({ index: e }) {
      super({
        inTypes: { index: `int` },
        outTypes: { coord: `ivec3` },
        inputs: { index: e },
        statements: ({ inputs: e, outputs: t }) => {
          let { index: n } = e,
            { coord: r } = t;
          return !n || !r ? [] : [`${r} = pagedSplatTexCoord(${n});`];
        },
      });
    }
    dynoOut() {
      return new Tl(this, `coord`);
    }
  },
  Sd = (e, t) => new Od({ gsplat: e, rgbMinMaxLnScaleMinMax: t }),
  Cd = (e, t) => new kd({ covsplat: e, rgbMinMaxLnScaleMinMax: t }),
  wd = (e) => new Ad({ gsplat: e }),
  Td = (e) => new jd({ covsplat: e }),
  Ed = (e, t, n, r) =>
    new Md({ gsplat: e, viewCenter: t, viewDir: n, sortRadial: r }),
  Dd = (e, t, n, r) =>
    new Nd({ covsplat: e, viewCenter: t, viewDir: n, sortRadial: r }),
  Od = class extends Ml {
    constructor({ gsplat: e, rgbMinMaxLnScaleMinMax: t }) {
      super({
        inTypes: { gsplat: Wu, rgbMinMaxLnScaleMinMax: `vec4` },
        inputs: { gsplat: e, rgbMinMaxLnScaleMinMax: t },
        globals: () => [rd],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n, rgbMinMaxLnScaleMinMax: r } = e;
          return n && r
            ? Ll(`
            if (isGsplatActive(${n}.flags)) {
              target = packSplatEncoding(${n}.center, ${n}.scales, ${n}.quaternion, ${n}.rgba, ${r});
            } else {
              target = uvec4(0u, 0u, 0u, 0u);
            }
          `)
            : [`target = uvec4(0u, 0u, 0u, 0u);`];
        },
      });
    }
  },
  kd = class extends Ml {
    constructor({ covsplat: e, rgbMinMaxLnScaleMinMax: t }) {
      super({
        inTypes: { covsplat: Gu, rgbMinMaxLnScaleMinMax: `vec4` },
        inputs: { covsplat: e, rgbMinMaxLnScaleMinMax: t },
        globals: () => [id],
        statements: ({ inputs: e }) => {
          let { covsplat: t, rgbMinMaxLnScaleMinMax: n } = e;
          return t && n
            ? Ll(`
            if (isCovSplatActive(${t}.flags)) {
              target = packSplatCovEncoding(${t}.center, ${t}.rgba, ${t}.xxyyzz, ${t}.xyxzyz, ${n});
            } else {
              target = uvec4(0u);
            }
          `)
            : [`target = uvec4(0u);`];
        },
      });
    }
  },
  Ad = class extends Ml {
    constructor({ gsplat: e }) {
      super({
        inTypes: { gsplat: Wu },
        inputs: { gsplat: e },
        globals: () => [rd],
        statements: ({ inputs: e }) => {
          let { gsplat: t } = e;
          return t
            ? Ll(`
            if (isGsplatActive(${t}.flags)) {
              packSplatExt(target, target2, ${t}.center, ${t}.scales, ${t}.quaternion, ${t}.rgba);
            } else {
              target = uvec4(0u);
              target2 = uvec4(0u);
            }
          `)
            : [`target = uvec4(0u);`, `target2 = uvec4(0u);`];
        },
      });
    }
  },
  jd = class extends Ml {
    constructor({ covsplat: e }) {
      super({
        inTypes: { covsplat: Gu },
        inputs: { covsplat: e },
        globals: () => [id],
        statements: ({ inputs: e }) => {
          let { covsplat: t } = e;
          return t
            ? Ll(`
            if (isCovSplatActive(${t}.flags)) {
              packSplatExtCov(target, target2, ${t}.center, ${t}.rgba, ${t}.xxyyzz, ${t}.xyxzyz);
            } else {
              target = uvec4(0u);
              target2 = uvec4(0u);
            }
          `)
            : [`target = uvec4(0u);`, `target2 = uvec4(0u);`];
        },
      });
    }
  },
  Md = class extends Ml {
    constructor({ gsplat: e, viewCenter: t, viewDir: n, sortRadial: r }) {
      super({
        inTypes: {
          gsplat: Wu,
          viewCenter: `vec3`,
          viewDir: `vec3`,
          sortRadial: `bool`,
        },
        inputs: { gsplat: e, viewCenter: t, viewDir: n, sortRadial: r },
        globals: () => [rd],
        statements: ({ inputs: e }) => {
          let { gsplat: t, viewCenter: n, viewDir: r, sortRadial: i } = e;
          return t && n && r && i
            ? Ll(`
            float metric = 1.0 / 0.0;
            if (isGsplatActive(${t}.flags)) {
              vec3 center = ${t}.center - ${n};
              if (${i}) {
                metric = length(center);
              } else {
                float bias = 100.0; // reduce popping
                metric = dot(center, ${r}) + bias;
              }
            }
            target3 = floatToVec4(metric);
          `)
            : [];
        },
      });
    }
  },
  Nd = class extends Ml {
    constructor({ covsplat: e, viewCenter: t, viewDir: n, sortRadial: r }) {
      super({
        inTypes: {
          covsplat: Gu,
          viewCenter: `vec3`,
          viewDir: `vec3`,
          sortRadial: `bool`,
        },
        inputs: { covsplat: e, viewCenter: t, viewDir: n, sortRadial: r },
        globals: () => [id],
        statements: ({ inputs: e }) => {
          let { covsplat: t, viewCenter: n, viewDir: r, sortRadial: i } = e;
          return t && n && r && i
            ? Ll(`
            float metric = 1.0 / 0.0;
            if (isCovSplatActive(${t}.flags)) {
              vec3 center = ${t}.center - ${n};
              if (${i}) {
                metric = length(center);
              } else {
                float bias = 100.0; // reduce popping
                metric = dot(center, ${r}) + bias;
              }
            }
            target3 = floatToVec4(metric);
          `)
            : [];
        },
      });
    }
  },
  Pd = class extends Ml {
    constructor({ rgba8: e }) {
      super({
        inTypes: { rgba8: `vec4` },
        inputs: { rgba8: e },
        statements: ({ inputs: e, outputs: t }) => [
          `target = ${e.rgba8 ?? `vec4(0.0, 0.0, 0.0, 0.0)`};`,
        ],
      });
    }
    dynoOut() {
      return new Tl(this, `rgba8`);
    }
  },
  Fd = class extends Ml {
    constructor({
      key: e,
      type: t,
      count: n,
      value: r,
      update: i,
      globals: a,
    }) {
      ((e ??= `value`),
        super({
          outTypes: { [e]: t },
          update: () => {
            if (i) {
              let e = i(this.value);
              e !== void 0 && (this.value = e);
            }
            this.uniform.value = this.value;
          },
          generate: ({ inputs: r, outputs: i }) => {
            let o = a?.({ inputs: r, outputs: i }) ?? [],
              s = {},
              c = i[e];
            return (
              c && (o.push(`uniform ${Il(c, t, n)};`), (s[c] = this.uniform)),
              { globals: o, uniforms: s }
            );
          },
        }),
        (this.type = t),
        (this.count = n),
        (this.value = r),
        (this.uniform = { value: r }),
        (this.outKey = e));
    }
    dynoOut() {
      return new Tl(this, this.outKey);
    }
  },
  Id = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `bool`, value: t, update: n });
    }
  },
  Ld = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `int`, value: t, update: n });
    }
  },
  Rd = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `float`, value: t, update: n });
    }
  },
  zd = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `vec3`, value: t, update: n });
    }
  },
  Bd = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `vec4`, value: t, update: n });
    }
  },
  Vd = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `mat3`, value: t, update: n });
    }
  },
  Hd = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `usampler2D`, value: t, update: n });
    }
  },
  Ud = class extends Fd {
    constructor({ key: e, value: t, update: n }) {
      super({ key: e, type: `usampler2DArray`, value: t, update: n });
    }
  },
  Wd = class {
    constructor({
      graph: e,
      inputs: t,
      outputs: n,
      template: r,
      consoleLog: i,
    }) {
      ((this.graph = e),
        (this.template = r),
        (this.inputs = t ?? {}),
        (this.outputs = n ?? {}));
      let a = new jl({ indent: this.template.indent });
      for (let e in this.outputs)
        this.outputs[e] && a.declares.add(this.outputs[e]);
      let o = e.compile({
        inputs: this.inputs,
        outputs: this.outputs,
        compile: a,
      });
      ((this.shader = r.generate({ globals: a.globals, statements: o })),
        (this.uniforms = a.uniforms),
        (this.updaters = a.updaters),
        i &&
          (console.log(`*** COMPILED SHADER`, this.shader),
          console.log(`*** UNIFORMS`, this.uniforms)));
    }
    prepareMaterial() {
      return qd(this);
    }
    update() {
      for (let e of this.updaters) e();
    }
  },
  Gd = class {
    constructor(e) {
      let t = e.match(/^([ \t]*)\{\{\s*GLOBALS\s*\}\}/m),
        n = e.match(/^([ \t]*)\{\{\s*STATEMENTS\s*\}\}/m);
      if (!t || !n)
        throw Error(`Template must contain {{ GLOBALS }} and {{ STATEMENTS }}`);
      ((this.before = e.substring(0, t.index)),
        (this.between = e.substring(t.index + t[0].length, n.index)),
        (this.after = e.substring(n.index + n[0].length)),
        (this.indent = n[1]));
    }
    generate({ globals: e, statements: t }) {
      return (
        this.before +
        Array.from(e).join(`

`) +
        this.between +
        t.map((e) => this.indent + e).join(`
`) +
        this.after
      );
    }
  },
  Kd = new WeakMap();
