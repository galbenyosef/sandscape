// SceneEditor-NC7_0wmu 73 — min
// Lines 35638-35957 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function Gy(e, t) {
  let n = Uy(t);
  if (!Wy.has(String(e.userData?.procKind)) || !e.userData?.dims) return n;
  (n.position.set(0, 0, 0), n.rotation.set(0, 0, 0), n.scale.set(1, 1, 1));
  let r = new wt().setFromObject(n);
  if (r.isEmpty() || !Number.isFinite(r.min.x) || !Number.isFinite(r.max.y))
    return n;
  let i = r.getSize(new U());
  if (
    !(i.x > 1e-6) ||
    !(i.y > 1e-6) ||
    !(i.z > 1e-6) ||
    (i.x > 0.98 && i.y > 0.98 && i.z > 0.98)
  )
    return n;
  let a = e.scale,
    o = Math.min(a.x / i.x, a.y / i.y, a.z / i.z);
  if (!(o > 0) || !Number.isFinite(o)) return n;
  let s = new U(o / a.x, o / a.y, o / a.z);
  n.scale.copy(s);
  let c = j_(e) === `bottom-center`;
  n.position.set(
    -((r.min.x + r.max.x) / 2) * s.x,
    c ? -0.5 - r.min.y * s.y : -((r.min.y + r.max.y) / 2) * s.y,
    -((r.min.z + r.max.z) / 2) * s.z,
  );
  let l = new nt();
  return (l.add(n), l);
}
function Ky(e, t, n) {
  let [r, i] = t.n,
    a = { nU: r, nV: i },
    o = new nt();
  for (let s = 0; s < i; s += 1)
    for (let i = 0; i < r; i += 1) {
      let c = s * r + i,
        l = e[t.i ? (t.i[c] ?? 0) : 0] ?? e[0];
      if (!l) continue;
      let u = Uy(l);
      (By(n, a, i, s, u.position),
        zy(n, a, i, s, u.scale),
        (u.userData = {
          ...u.userData,
          editorOnly: !0,
          editorAssetContent: !0,
          kitTile: [i, s],
        }),
        o.add(u));
    }
  return o;
}
function qy(e) {
  let t = e.userData;
  return (
    !!t?.editorOnly && !t?.editorAssetContent && !t?.editorAssetPlaceholder
  );
}
function Jy(e, t = new wt()) {
  (t.makeEmpty(), e.updateWorldMatrix(!0, !0));
  let n = new wt(),
    r = [e];
  for (; r.length;) {
    let i = r.pop();
    if (i !== e && (qy(i) || !i.visible)) continue;
    let a = i.geometry;
    a &&
      (a.boundingBox || a.computeBoundingBox(),
      a.boundingBox &&
        t.union(n.copy(a.boundingBox).applyMatrix4(i.matrixWorld)));
    for (let e of i.children) r.push(e);
  }
  return t;
}
function Yy(e, t, n = new U()) {
  return t > 0
    ? n.set(
        Math.round(e.x / t) * t,
        Math.round(e.y / t) * t,
        Math.round(e.z / t) * t,
      )
    : n.copy(e);
}
var Xy = [`x`, `y`, `z`];
function Zy(e, t, n) {
  if (!(n > 0) || t.length === 0 || e.isEmpty()) return null;
  let r = new U(),
    i = [];
  for (let a = 0; a < 3; a++) {
    let o = Xy[a],
      s = Xy[(a + 1) % 3],
      c = Xy[(a + 2) % 3],
      l = [e.min[o], (e.min[o] + e.max[o]) / 2, e.max[o]],
      u = 1 / 0,
      d = -1;
    for (let r = 0; r < t.length; r++) {
      let i = t[r];
      if (
        i.isEmpty() ||
        i.min[s] - n > e.max[s] ||
        e.min[s] - n > i.max[s] ||
        i.min[c] - n > e.max[c] ||
        e.min[c] - n > i.max[c]
      )
        continue;
      let a = [i.min[o], (i.min[o] + i.max[o]) / 2, i.max[o]];
      for (let e of l)
        for (let t of a) {
          let i = t - e,
            a = Math.abs(i);
          a <= n && a < Math.abs(u) && ((u = i), (d = r));
        }
    }
    d >= 0 && ((r[o] = u), i.push({ axis: a, delta: u, targetIndex: d }));
  }
  return i.length ? { delta: r, hits: i } : null;
}
var Qy = new U(0, -1, 0);
function $y(e, t, n) {
  if (e.isEmpty()) return 0;
  let r = e.min.y + 0.01,
    i = [
      [e.min.x, e.min.z],
      [e.max.x, e.min.z],
      [e.min.x, e.max.z],
      [e.max.x, e.max.z],
      [(e.min.x + e.max.x) / 2, (e.min.z + e.max.z) / 2],
    ],
    a = -1 / 0,
    o = new U();
  ((n.near = 0), (n.far = 1 / 0));
  for (let [e, s] of i) {
    n.set(o.set(e, r, s), Qy);
    let i = n.intersectObjects(t, !0);
    for (let e of i)
      if (!(e.point.y > r)) {
        e.point.y > a && (a = e.point.y);
        break;
      }
  }
  return (a === -1 / 0 && (a = 0), a - e.min.y);
}
function eb(e, t, n) {
  return sg(`${n}:${e}:${t}`) / 4294967296;
}
function tb(e, t, n, r) {
  let i = e * n,
    a = t * n,
    o = Math.floor(i),
    s = Math.floor(a),
    c = i - o,
    l = a - s,
    u = c * c * (3 - 2 * c),
    d = l * l * (3 - 2 * l),
    f = eb(o, s, r),
    p = eb(o + 1, s, r),
    m = eb(o, s + 1, r),
    h = eb(o + 1, s + 1, r);
  return (f * (1 - u) + p * u) * (1 - d) + (m * (1 - u) + h * u) * d;
}
function nb(e, t, n) {
  let r = tb(e, t, 0.06, n) * 0.65 + tb(e, t, 0.16, n + 7) * 0.35;
  return Math.min(1, Math.max(0, r));
}
var rb = new W(0.42, 0.38, 0.32);
function ib(e, t, n, r, i) {
  if (i <= 0) return;
  let a = nb(t, n, r),
    o = a * i;
  o <= 0.001 ||
    e.traverse((e) => {
      let t = e,
        n = Array.isArray(t.material) ? t.material : [t.material];
      for (let e of n) {
        let t = e;
        !t ||
          !t.color ||
          (t.color.lerp(rb, o),
          typeof t.roughness == `number` &&
            (t.roughness = Math.min(1, t.roughness + a * i * 0.3)),
          (t.needsUpdate = !0));
      }
    });
}
var ab = {
    uMacroStrength: { value: 0 },
    uMacroSeed: { value: 0 },
    uMacroGrime: { value: rb.clone() },
    uMacroRough: { value: 0.3 },
    uTriScale: { value: 4 },
    uProjBlend: { value: 4 },
    uTexRot: { value: 0 },
    uPomDepth: { value: 0.05 },
  },
  ob = !1,
  sb = !1;
function cb(e, t) {
  ((ab.uMacroSeed.value = e), (ab.uMacroStrength.value = Math.max(0, t)));
}
function lb(e, t) {
  ((ob = e), (ab.uTriScale.value = Math.max(0.25, t)));
}
function ub(e) {
  ab.uProjBlend.value = Math.max(0.5, e);
}
function db(e) {
  ab.uTexRot.value = (e * Math.PI) / 180;
}
function fb(e, t) {
  ((sb = e), (ab.uPomDepth.value = Math.max(0, t)));
}
var pb = `varying vec3 vMacroWorld;
varying vec3 vMacroWorldNormal;`,
  mb = `vMacroWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
vMacroWorldNormal = normalize( mat3( modelMatrix ) * objectNormal );`,
  hb = `
varying vec3 vMacroWorld;
varying vec3 vMacroWorldNormal;
uniform float uMacroStrength;
uniform float uMacroSeed;
uniform vec3 uMacroGrime;
uniform float uMacroRough;
uniform float uTriScale;
uniform float uProjBlend;
uniform float uTexRot;
uniform float uPomDepth;
vec2 rot2( vec2 p, float a ) { float c = cos( a ), s = sin( a ); return mat2( c, - s, s, c ) * p; }
float macroHash( vec2 p, float s ) { return fract( sin( dot( p + s, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 ); }
float macroVNoise( vec2 x, float s ) {
  vec2 i = floor( x ), f = fract( x ), w = f * f * ( 3.0 - 2.0 * f );
  float a = macroHash( i, s ), b = macroHash( i + vec2( 1.0, 0.0 ), s );
  float c = macroHash( i + vec2( 0.0, 1.0 ), s ), d = macroHash( i + vec2( 1.0, 1.0 ), s );
  return mix( mix( a, b, w.x ), mix( c, d, w.x ), w.y );
}
float macroAmount( vec2 world, float s ) {
  float n = macroVNoise( world * 0.06, s ) * 0.65 + macroVNoise( world * 0.16, s + 7.0 ) * 0.35;
  return clamp( n, 0.0, 1.0 );
}
// World-space triplanar sample: 3 axis projections blended by the world normal, with blend sharpness
// and rotation coming from the live uniforms. scale is the world tile (metres per repeat).
vec4 triplanarSample( sampler2D tex, vec3 wp, vec3 wn, float scale ) {
  vec3 b = pow( abs( wn ), vec3( uProjBlend ) );
  b /= ( b.x + b.y + b.z + 1e-5 );
  // HANDEDNESS. A projection is the same plane for a face and the face OPPOSITE it, so sampling
  // wp.zy for both the +X and -X sides draws one of them back-to-front — invisible on a seamless
  // material, and reversed lettering on imported graffiti walls.
  // These are the STANDARD triplanar flips (flip = sign(worldNormal); the X projection takes
  // +flip.x and the Z projection -flip.z), NOT a hand-derived pair. Deriving them from "which way
  // is the viewer's right" is one cross-product convention away from being exactly inverted, and
  // an inverted pair does NOT look like a bug: it swaps WHICH side is mirrored, so half the walls
  // still read correctly and it survives an eyeball check. That is what shipped here once.
  // procgen/kitTexture.applyWorldUVTiling carries the same two signs for the UV path; they must
  // agree, or toggling Triplanar Tiling flips the art.
  // Y is left un-handed for the same reason it is there: straight down has no canonical "right".
  // Written as compares rather than sign() so a zero component can never collapse an axis to 0.
  float hx = wn.x < 0.0 ? -1.0 : 1.0;   //  sign( wn.x )
  float hz = wn.z < 0.0 ? 1.0 : -1.0;   // -sign( wn.z )
  return texture2D( tex, rot2( vec2( wp.z * hx, wp.y ) / scale, uTexRot ) ) * b.x
       + texture2D( tex, rot2( wp.xz / scale, uTexRot ) ) * b.y
       + texture2D( tex, rot2( vec2( wp.x * hz, wp.y ) / scale, uTexRot ) ) * b.z;
}
`,
  gb = `
  float vMacroAmt = macroAmount( vMacroWorld.xz, uMacroSeed );
  float vMacroK = vMacroAmt * uMacroStrength;
  diffuseColor.rgb *= mix( vec3( 1.0 ), uMacroGrime, vMacroK );`,
  _b = `
  roughnessFactor = clamp( roughnessFactor + vMacroAmt * uMacroStrength * uMacroRough, 0.0, 1.0 );`,
  vb = `
  #ifdef USE_MAP
    diffuseColor *= triplanarSample( map, vMacroWorld, vMacroWorldNormal, uTriScale );
  #endif`,
  yb = new Set([`floor`, `wall`, `corridor_wall`, `arena_wall`, `ceiling`]),
  bb = `
mat3 pomCotangent( vec3 N, vec3 p, vec2 uv ) {
  vec3 dp1 = dFdx( p ), dp2 = dFdy( p );
  vec2 duv1 = dFdx( uv ), duv2 = dFdy( uv );
  vec3 dp2perp = cross( dp2, N ), dp1perp = cross( N, dp1 );
  vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
  float invmax = inversesqrt( max( dot( T, T ), dot( B, B ) ) );
  return mat3( T * invmax, B * invmax, N );
}
vec2 pomOffset( vec2 uv, vec3 vTS, float depth ) {
  if ( depth <= 0.0001 ) return uv;
  float nL = mix( 32.0, 10.0, clamp( abs( vTS.z ), 0.0, 1.0 ) );
  float lD = 1.0 / nL;
  vec2 P = ( vTS.xy / max( abs( vTS.z ), 0.25 ) ) * depth;
  vec2 dUV = P / nL;
  float curD = 0.0;
  vec2 cur = uv;
  float hh = 1.0 - texture2D( roughnessMap, cur ).r;
  for ( int i = 0; i < 32; i ++ ) {
    if ( curD >= hh ) break;
    cur -= dUV;
    hh = 1.0 - texture2D( roughnessMap, cur ).r;
    curD += lD;
  }
  vec2 prev = cur + dUV;
  float after = hh - curD;
  float before = ( 1.0 - texture2D( roughnessMap, prev ).r ) - ( curD - lD );
  float w = clamp( after / ( after - before ), 0.0, 1.0 );
  return mix( cur, prev, w );
}`,
  xb = `
  vec3 pomViewPos = - vViewPosition;
  vec3 pomGeoN = normalize( cross( dFdx( pomViewPos ), dFdy( pomViewPos ) ) );
  pomGeoN *= ( dot( pomGeoN, vViewPosition ) < 0.0 ) ? -1.0 : 1.0; // face the camera
  mat3 pomTBN = pomCotangent( pomGeoN, pomViewPos, vMapUv );
  vec3 pomVdir = normalize( vViewPosition );
  vec3 pomVTS = normalize( vec3( dot( pomVdir, pomTBN[ 0 ] ), dot( pomVdir, pomTBN[ 1 ] ), dot( pomVdir, pomTBN[ 2 ] ) ) );
  vec2 pomUv = pomOffset( vMapUv, pomVTS, uPomDepth );
  #ifdef USE_MAP
    diffuseColor *= texture2D( map, pomUv );
  #endif`,
  Sb = `
  #ifdef USE_NORMALMAP
    vec3 pomMapN = texture2D( normalMap, pomUv ).xyz * 2.0 - 1.0;
    pomMapN.xy *= normalScale;
    normal = normalize( pomTBN * pomMapN );
  #endif`;
