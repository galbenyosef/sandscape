// SceneEditor-NC7_0wmu 20 — fromcharcode
// Lines 16961-17176 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
try {
  qc.decode(zc, { stream: !0 });
} catch {}
var Jc = function (e) {
  for (var t = ``, n = 0; ;) {
    var r = e[n++],
      i = (r > 127) + (r > 223) + (r > 239);
    if (n + i > e.length) return { s: t, r: Fc(e, n - 1) };
    i
      ? i == 3
        ? ((r =
            (((r & 15) << 18) |
              ((e[n++] & 63) << 12) |
              ((e[n++] & 63) << 6) |
              (e[n++] & 63)) -
            65536),
          (t += String.fromCharCode(55296 | (r >> 10), 56320 | (r & 1023))))
        : i & 1
          ? (t += String.fromCharCode(((r & 31) << 6) | (e[n++] & 63)))
          : (t += String.fromCharCode(
              ((r & 15) << 12) | ((e[n++] & 63) << 6) | (e[n++] & 63),
            ))
      : (t += String.fromCharCode(r));
  }
};
function Yc(e, t) {
  if (t) {
    for (var n = ``, r = 0; r < e.length; r += 16384)
      n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
    return n;
  } else if (qc) return qc.decode(e);
  else {
    var i = Jc(e),
      a = i.s,
      n = i.r;
    return (n.length && Lc(8), a);
  }
}
var Xc = function (e, t) {
    return t + 30 + Bc(e, t + 26) + Bc(e, t + 28);
  },
  Zc = function (e, t, n) {
    var r = Bc(e, t + 28),
      i = Yc(e.subarray(t + 46, t + 46 + r), !(Bc(e, t + 8) & 2048)),
      a = t + 46 + r,
      o = Vc(e, t + 20),
      s = n && o == 4294967295 ? Qc(e, a) : [o, Vc(e, t + 24), Vc(e, t + 42)],
      c = s[0],
      l = s[1],
      u = s[2];
    return [Bc(e, t + 10), c, l, i, a + Bc(e, t + 30) + Bc(e, t + 32), u];
  },
  Qc = function (e, t) {
    for (; Bc(e, t) != 1; t += 4 + Bc(e, t + 2));
    return [Hc(e, t + 12), Hc(e, t + 4), Hc(e, t + 20)];
  };
function $c(e, t) {
  for (var n = {}, r = e.length - 22; Vc(e, r) != 101010256; --r)
    (!r || e.length - r > 65558) && Lc(13);
  var i = Bc(e, r + 8);
  if (!i) return {};
  var a = Vc(e, r + 16),
    o = a == 4294967295 || i == 65535;
  if (o) {
    var s = Vc(e, r - 12);
    ((o = Vc(e, s) == 101075792),
      o && ((i = Vc(e, s + 32)), (a = Vc(e, s + 48))));
  }
  for (var c = t && t.filter, l = 0; l < i; ++l) {
    var u = Zc(e, a, o),
      d = u[0],
      f = u[1],
      p = u[2],
      m = u[3],
      h = u[4],
      g = u[5],
      _ = Xc(e, g);
    ((a = h),
      (!c || c({ name: m, size: f, originalSize: p, compression: d })) &&
        (d
          ? d == 8
            ? (n[m] = Gc(e.subarray(_, _ + f), { out: new fc(p) }))
            : Lc(14, `unknown compression type ` + d)
          : (n[m] = Fc(e, _, _ + f))));
  }
  return n;
}
var el = Math.exp(-30),
  tl = 11,
  nl = 11,
  rl = 11,
  Q = 1 << tl,
  il = 1 << nl,
  al = 1 << rl,
  ol = 1;
(Q - 1, il - 1, al - 1);
var sl = ((e) => (
    (e.PLY = `ply`),
    (e.SPZ = `spz`),
    (e.SPLAT = `splat`),
    (e.KSPLAT = `ksplat`),
    (e.PCSOGS = `pcsogs`),
    (e.PCSOGSZIP = `pcsogszip`),
    (e.RAD = `rad`),
    e
  ))(sl || {}),
  cl = {
    rgbMin: 0,
    rgbMax: 1,
    lnScaleMin: -12,
    lnScaleMax: 9,
    sh1Max: 1,
    sh2Max: 1,
    sh3Max: 1,
    lodOpacity: !1,
  };
function ll(e) {
  return e === `bool` || e === `bvec2` || e === `bvec3` || e === `bvec4`;
}
function ul(e) {
  return e === `int` || e === `ivec2` || e === `ivec3` || e === `ivec4`;
}
function dl(e) {
  return e === `uint` || e === `uvec2` || e === `uvec3` || e === `uvec4`;
}
function fl(e) {
  return e === `float` || e === `vec2` || e === `vec3` || e === `vec4`;
}
function pl(e) {
  return (
    e === `mat2` ||
    e === `mat2x2` ||
    e === `mat2x3` ||
    e === `mat2x4` ||
    e === `mat3` ||
    e === `mat3x2` ||
    e === `mat3x3` ||
    e === `mat3x4` ||
    e === `mat4` ||
    e === `mat4x2` ||
    e === `mat4x3` ||
    e === `mat4x4`
  );
}
function ml(e) {
  return fl(e) || pl(e);
}
function hl(e) {
  return e === `mat2` || e === `mat2x2`;
}
function gl(e) {
  return e === `mat3` || e === `mat3x3`;
}
function _l(e) {
  return e === `mat4` || e === `mat4x4`;
}
function vl(e) {
  switch (e) {
    case `vec2`:
      return `float`;
    case `vec3`:
      return `float`;
    case `vec4`:
      return `float`;
    case `ivec2`:
      return `int`;
    case `ivec3`:
      return `int`;
    case `ivec4`:
      return `int`;
    case `uvec2`:
      return `uint`;
    case `uvec3`:
      return `uint`;
    case `uvec4`:
      return `uint`;
    default:
      throw Error(`Invalid vector type: ${e}`);
  }
}
function yl(e) {
  switch (e) {
    case `vec2`:
    case `ivec2`:
    case `uvec2`:
      return 2;
    case `vec3`:
    case `ivec3`:
    case `uvec3`:
      return 3;
    case `vec4`:
    case `ivec4`:
    case `uvec4`:
      return 4;
    default:
      throw Error(`Invalid vector type: ${e}`);
  }
}
function bl(e) {
  return Math.trunc(e).toString();
}
function xl(e) {
  return `${Math.max(0, Math.trunc(e)).toString()}u`;
}
function Sl(e) {
  return e === 1 / 0
    ? `INFINITY`
    : e === -1 / 0
      ? `-INFINITY`
      : Number.isInteger(e)
        ? e.toFixed(1)
        : e.toString();
}
function Cl(e) {
  return e instanceof wl ? e.type : e.dynoOut().type;
}
