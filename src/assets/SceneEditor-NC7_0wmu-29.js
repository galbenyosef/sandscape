// SceneEditor-NC7_0wmu 29 — error
// Lines 20719-20891 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function qd(e) {
  let t = Kd.get(e);
  return (
    t ||
    ((t = new Mt({
      glslVersion: Ee,
      vertexShader: vu,
      fragmentShader: e.shader,
      uniforms: e.uniforms,
    })),
    Kd.set(e, t),
    t)
  );
}
function Jd(e, t, n = `add`) {
  let r = () => {
    throw Error(`Invalid ${n} types: ${e}, ${t}`);
  };
  if (e === t) return e;
  if (e === `int`) {
    if (ul(t)) return t;
    r();
  }
  if (t === `int`) {
    if (ul(e)) return e;
    r();
  }
  if (e === `uint`) {
    if (dl(t)) return t;
    r();
  }
  if (t === `uint`) {
    if (dl(e)) return e;
    r();
  }
  if (e === `float`) {
    if (ml(t)) return t;
    r();
  }
  if (t === `float`) {
    if (ml(e)) return e;
    r();
  }
  throw Error(`Invalid ${n} types: ${e}, ${t}`);
}
function Yd(e, t) {
  return Jd(e, t, `sub`);
}
function Xd(e, t) {
  let n = () => {
      throw Error(`Invalid mul types: ${e}, ${t}`);
    },
    r = (e) => e;
  if (e === `int`) {
    if (ul(t)) return r(t);
    n();
  }
  if (t === `int`) {
    if (ul(e)) return r(e);
    n();
  }
  if (e === `uint`) {
    if (dl(t)) return r(t);
    n();
  }
  if (t === `uint`) {
    if (dl(e)) return r(e);
    n();
  }
  if (e === `float`) {
    if (ml(t)) return r(t);
    n();
  }
  if (t === `float`) {
    if (ml(e)) return r(e);
    n();
  }
  if (ul(e) || dl(e) || ul(t) || dl(t)) {
    if (e === t) return r(e);
    n();
  }
  if (e === `vec2`) {
    if (t === `vec2` || hl(t)) return r(`vec2`);
    if (t === `mat3x2`) return r(`vec3`);
    if (t === `mat4x2`) return r(`vec4`);
    n();
  }
  if (e === `vec3`) {
    if (t === `mat2x3`) return r(`vec2`);
    if (t === `vec3` || gl(t)) return r(`vec3`);
    if (t === `mat4x3`) return r(`vec4`);
    n();
  }
  if (e === `vec4`) {
    if (t === `mat2x4`) return r(`vec2`);
    if (t === `mat3x4`) return r(`vec3`);
    if (t === `vec4` || _l(t)) return r(`vec4`);
    n();
  }
  if (t === `vec2`) {
    if (hl(e)) return r(`vec2`);
    if (e === `mat2x3`) return r(`vec3`);
    if (e === `mat2x4`) return r(`vec4`);
    n();
  }
  if (t === `vec3`) {
    if (e === `mat3x2`) return r(`vec2`);
    if (gl(e)) return r(`vec3`);
    if (e === `mat3x4`) return r(`vec4`);
    n();
  }
  if (t === `vec4`) {
    if (e === `mat4x2`) return r(`vec2`);
    if (e === `mat4x3`) return r(`vec3`);
    if (_l(e)) return r(`vec4`);
    n();
  }
  if (hl(e)) {
    if (hl(t)) return r(`mat2`);
    if (t === `mat3x2`) return r(`mat3x2`);
    if (t === `mat4x2`) return r(`mat4x2`);
    n();
  }
  if (e === `mat2x3`) {
    if (hl(t)) return r(`mat2x3`);
    if (t === `mat3x2`) return r(`mat3`);
    if (t === `mat4x2`) return r(`mat4x3`);
    n();
  }
  if (e === `mat2x4`) {
    if (hl(t)) return r(`mat2x4`);
    if (t === `mat3x2`) return r(`mat3x4`);
    if (t === `mat4x2`) return r(`mat4`);
    n();
  }
  if (e === `mat3x2`) {
    if (t === `mat2x3`) return r(`mat2`);
    if (gl(t)) return r(`mat3x2`);
    if (t === `mat4x3`) return r(`mat4x2`);
    n();
  }
  if (gl(e)) {
    if (t === `mat2x3`) return r(`mat2x3`);
    if (gl(t)) return r(`mat3`);
    if (t === `mat4x3`) return r(`mat4x3`);
    n();
  }
  if (e === `mat3x4`) {
    if (t === `mat2x3`) return r(`mat2x4`);
    if (gl(t)) return r(`mat3x4`);
    if (t === `mat4x3`) return r(`mat4`);
    n();
  }
  if (e === `mat4x2`) {
    if (t === `mat2x4`) return r(`mat2`);
    if (t === `mat3x4`) return r(`mat3x2`);
    if (_l(t)) return r(`mat4x2`);
    n();
  }
  if (e === `mat4x3`) {
    if (t === `mat2x4`) return r(`mat2x3`);
    if (t === `mat3x4`) return r(`mat3`);
    if (_l(t)) return r(`mat4x3`);
    n();
  }
  if (_l(e)) {
    if (t === `mat2x4`) return r(`mat2x4`);
    if (t === `mat3x4`) return r(`mat3x4`);
    if (_l(t)) return r(`mat4`);
    n();
  }
  throw Error(`Invalid mul types: ${e}, ${t}`);
}
