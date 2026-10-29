// SceneEditor-NC7_0wmu 21 — elements
// Lines 17177-17356 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var wl = class {
    constructor(e) {
      ((this.__isDynoValue = !0), (this.type = e));
    }
  },
  Tl = class extends wl {
    constructor(e, t) {
      (super(e.outTypes[t]), (this.dyno = e), (this.key = t));
    }
  },
  El = class extends wl {
    constructor(e, t) {
      (super(e), (this.literal = t));
    }
    getLiteral() {
      return this.literal;
    }
  },
  Dl = class extends El {
    constructor(e, t) {
      (super(e, ``), (this.value = t));
    }
    getLiteral() {
      let { type: e, value: t } = this;
      switch (e) {
        case `bool`:
          return t ? `true` : `false`;
        case `uint`:
          return xl(t);
        case `int`:
          return bl(t);
        case `float`:
          return Sl(t);
        case `bvec2`: {
          let e = t;
          return `bvec2(${e[0]}, ${e[1]})`;
        }
        case `uvec2`: {
          if (t instanceof V) return `uvec2(${xl(t.x)}, ${xl(t.y)})`;
          let e = t;
          return `uvec2(${xl(e[0])}, ${xl(e[1])})`;
        }
        case `ivec2`: {
          if (t instanceof V) return `ivec2(${bl(t.x)}, ${bl(t.y)})`;
          let e = t;
          return `ivec2(${bl(e[0])}, ${bl(e[1])})`;
        }
        case `vec2`: {
          if (t instanceof V) return `vec2(${Sl(t.x)}, ${Sl(t.y)})`;
          let e = t;
          return `vec2(${Sl(e[0])}, ${Sl(e[1])})`;
        }
        case `bvec3`: {
          let e = t;
          return `bvec3(${e[0]}, ${e[1]}, ${e[2]})`;
        }
        case `uvec3`: {
          if (t instanceof U)
            return `uvec3(${xl(t.x)}, ${xl(t.y)}, ${xl(t.z)})`;
          let e = t;
          return `uvec3(${xl(e[0])}, ${xl(e[1])}, ${xl(e[2])})`;
        }
        case `ivec3`: {
          if (t instanceof U)
            return `ivec3(${bl(t.x)}, ${bl(t.y)}, ${bl(t.z)})`;
          let e = t;
          return `ivec3(${bl(e[0])}, ${bl(e[1])}, ${bl(e[2])})`;
        }
        case `vec3`: {
          if (t instanceof U) return `vec3(${Sl(t.x)}, ${Sl(t.y)}, ${Sl(t.z)})`;
          let e = t;
          return `vec3(${Sl(e[0])}, ${Sl(e[1])}, ${Sl(e[2])})`;
        }
        case `bvec4`: {
          let e = t;
          return `bvec4(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;
        }
        case `uvec4`: {
          if (t instanceof vn)
            return `uvec4(${xl(t.x)}, ${xl(t.y)}, ${xl(t.z)}, ${xl(t.w)})`;
          let e = t;
          return `uvec4(${xl(e[0])}, ${xl(e[1])}, ${xl(e[2])}, ${xl(e[3])})`;
        }
        case `ivec4`: {
          if (t instanceof vn)
            return `ivec4(${bl(t.x)}, ${bl(t.y)}, ${bl(t.z)}, ${bl(t.w)})`;
          let e = t;
          return `ivec4(${bl(e[0])}, ${bl(e[1])}, ${bl(e[2])}, ${bl(e[3])})`;
        }
        case `vec4`: {
          if (t instanceof vn || t instanceof R)
            return `vec4(${Sl(t.x)}, ${Sl(t.y)}, ${Sl(t.z)}, ${Sl(t.w)})`;
          let e = t;
          return `vec4(${Sl(e[0])}, ${Sl(e[1])}, ${Sl(e[2])}, ${Sl(e[3])})`;
        }
        case `mat2`:
        case `mat2x2`: {
          let n = t,
            r = n instanceof Le ? n.elements : t;
          return `${e}(${[, , , ,]
            .fill(0)
            .map((e, t) => Sl(r[t]))
            .join(`, `)})`;
        }
        case `mat2x3`: {
          let n = t;
          return `${e}(${[, , , , , ,]
            .fill(0)
            .map((e, t) => Sl(n[t]))
            .join(`, `)})`;
        }
        case `mat2x4`: {
          let n = t;
          return `${e}(${Array(8)
            .fill(0)
            .map((e, t) => Sl(n[t]))
            .join(`, `)})`;
        }
        case `mat3`:
        case `mat3x3`: {
          let n = t,
            r = n instanceof Pt ? n.elements : t;
          return `${e}(${Array(9)
            .fill(0)
            .map((e, t) => Sl(r[t]))
            .join(`, `)})`;
        }
        case `mat3x2`: {
          let n = t;
          return `${e}(${[, , , , , ,]
            .fill(0)
            .map((e, t) => Sl(n[t]))
            .join(`, `)})`;
        }
        case `mat3x4`: {
          let n = t;
          return `${e}(${Array(12)
            .fill(0)
            .map((e, t) => Sl(n[t]))
            .join(`, `)})`;
        }
        case `mat4`:
        case `mat4x4`: {
          let n = t,
            r = n instanceof z ? n.elements : t;
          return `${e}(${Array(16)
            .fill(0)
            .map((e, t) => Sl(r[t]))
            .join(`, `)})`;
        }
        case `mat4x2`: {
          let n = t;
          return `${e}(${Array(8)
            .fill(0)
            .map((e, t) => Sl(n[t]))
            .join(`, `)})`;
        }
        case `mat4x3`: {
          let n = t;
          return `${e}(${Array(12)
            .fill(0)
            .map((e, t) => Sl(n[t]))
            .join(`, `)})`;
        }
        default:
          throw Error(`Type not implemented: ${String(e)}`);
      }
    }
  };
function Ol(e, t) {
  return new Dl(e, t);
}
function kl(e) {
  let t = String(e);
  if (ll(e)) return `${t}(false)`;
  if (ml(e)) return `${t}(0.0)`;
  if (ul(e)) return `${t}(0)`;
  if (dl(e)) return `${t}(0u)`;
  throw Error(`Type not implemented: ${t}`);
}
