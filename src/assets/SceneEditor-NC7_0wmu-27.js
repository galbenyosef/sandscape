// SceneEditor-NC7_0wmu 27 — gsplat
// Lines 19948-20158 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var fd = class extends Ml {
    constructor({ gsplat: e }) {
      super({
        inTypes: { gsplat: Wu },
        outTypes: { covsplat: Gu },
        inputs: { gsplat: e },
        globals: () => [rd, id],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n } = e,
            { covsplat: r } = t;
          return n
            ? Ll(`
          ${r}.flags = 0u;
          if (isGsplatActive(${n}.flags)) {
            ${r}.flags = ${n}.flags;
            ${r}.index = ${n}.index;
            ${r}.rgba = ${n}.rgba;
            ${r}.center = ${n}.center;
            mat3 m = scaleQuaternionToMatrix(${n}.scales, ${n}.quaternion);
            m = m * transpose(m);
            ${r}.xxyyzz = vec3(m[0][0], m[1][1], m[2][2]);
            ${r}.xyxzyz = vec3(m[0][1], m[0][2], m[1][2]);
          }
        `)
            : [`${r}.flags = 0u;`];
        },
      });
    }
    dynoOut() {
      return new Tl(this, `covsplat`);
    }
  },
  pd = class extends Ml {
    constructor({ gsplat: e }) {
      super({
        inTypes: { gsplat: Wu },
        outTypes: {
          flags: `uint`,
          active: `bool`,
          index: `int`,
          center: `vec3`,
          scales: `vec3`,
          quaternion: `vec4`,
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
        inputs: { gsplat: e },
        globals: () => [rd],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n } = e,
            {
              flags: r,
              active: i,
              index: a,
              center: o,
              scales: s,
              quaternion: c,
              rgba: l,
              rgb: u,
              opacity: d,
              x: f,
              y: p,
              z: m,
              r: h,
              g,
              b: _,
            } = t;
          return [
            r ? `${r} = ${n ? `${n}.flags` : `0u`};` : null,
            i ? `${i} = isGsplatActive(${n ? `${n}.flags` : `0u`});` : null,
            a ? `${a} = ${n ? `${n}.index` : `0`};` : null,
            o ? `${o} = ${n ? `${n}.center` : `vec3(0.0, 0.0, 0.0)`};` : null,
            s ? `${s} = ${n ? `${n}.scales` : `vec3(0.0, 0.0, 0.0)`};` : null,
            c
              ? `${c} = ${n ? `${n}.quaternion` : `vec4(0.0, 0.0, 0.0, 1.0)`};`
              : null,
            l
              ? `${l} = ${n ? `${n}.rgba` : `vec4(0.0, 0.0, 0.0, 0.0)`};`
              : null,
            u ? `${u} = ${n ? `${n}.rgba.rgb` : `vec3(0.0, 0.0, 0.0)`};` : null,
            d ? `${d} = ${n ? `${n}.rgba.a` : `0.0`};` : null,
            f ? `${f} = ${n ? `${n}.center.x` : `0.0`};` : null,
            p ? `${p} = ${n ? `${n}.center.y` : `0.0`};` : null,
            m ? `${m} = ${n ? `${n}.center.z` : `0.0`};` : null,
            h ? `${h} = ${n ? `${n}.rgba.r` : `0.0`};` : null,
            g ? `${g} = ${n ? `${n}.rgba.g` : `0.0`};` : null,
            _ ? `${_} = ${n ? `${n}.rgba.b` : `0.0`};` : null,
          ].filter(Boolean);
        },
      });
    }
  },
  md = class extends Ml {
    constructor({
      gsplat: e,
      flags: t,
      index: n,
      center: r,
      scales: i,
      quaternion: a,
      rgba: o,
      rgb: s,
      opacity: c,
      x: l,
      y: u,
      z: d,
      r: f,
      g: p,
      b: m,
    }) {
      super({
        inTypes: {
          gsplat: Wu,
          flags: `uint`,
          index: `int`,
          center: `vec3`,
          scales: `vec3`,
          quaternion: `vec4`,
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
        outTypes: { gsplat: Wu },
        inputs: {
          gsplat: e,
          flags: t,
          index: n,
          center: r,
          scales: i,
          quaternion: a,
          rgba: o,
          rgb: s,
          opacity: c,
          x: l,
          y: u,
          z: d,
          r: f,
          g: p,
          b: m,
        },
        globals: () => [rd],
        statements: ({ inputs: e, outputs: t }) => {
          let { gsplat: n } = t;
          if (!n) return [];
          let {
            gsplat: r,
            flags: i,
            index: a,
            center: o,
            scales: s,
            quaternion: c,
            rgba: l,
            rgb: u,
            opacity: d,
            x: f,
            y: p,
            z: m,
            r: h,
            g,
            b: _,
          } = e;
          return [
            `${n}.flags = ${i ?? (r ? `${r}.flags` : `0u`)};`,
            `${n}.index = ${a ?? (r ? `${r}.index` : `0`)};`,
            `${n}.center = ${o ?? (r ? `${r}.center` : `vec3(0.0, 0.0, 0.0)`)};`,
            `${n}.scales = ${s ?? (r ? `${r}.scales` : `vec3(0.0, 0.0, 0.0)`)};`,
            `${n}.quaternion = ${c ?? (r ? `${r}.quaternion` : `vec4(0.0, 0.0, 0.0, 1.0)`)};`,
            `${n}.rgba = ${l ?? (r ? `${r}.rgba` : `vec4(0.0, 0.0, 0.0, 0.0)`)};`,
            u ? `${n}.rgba.rgb = ${u};` : null,
            d ? `${n}.rgba.a = ${d};` : null,
            f ? `${n}.center.x = ${f};` : null,
            p ? `${n}.center.y = ${p};` : null,
            m ? `${n}.center.z = ${m};` : null,
            h ? `${n}.rgba.r = ${h};` : null,
            g ? `${n}.rgba.g = ${g};` : null,
            _ ? `${n}.rgba.b = ${_};` : null,
          ].filter(Boolean);
        },
      });
    }
    dynoOut() {
      return new Tl(this, `gsplat`);
    }
  };
Rl(`
  vec3 gsplatNormal(vec3 scales, vec4 quaternion) {
    float minScale = min(scales.x, min(scales.y, scales.z));
    vec3 normal;
    if (scales.z == minScale) {
      normal = vec3(0.0, 0.0, 1.0);
    } else if (scales.y == minScale) {
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      normal = vec3(1.0, 0.0, 0.0);
    }
    return quatVec(quaternion, normal);
  }
`);
