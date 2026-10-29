// Create-CEn7EAZs 87 — opacity
// Lines 27715-28050 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var QS = 0.7,
  $S = 1 / QS,
  eC = `\\s*([+-]?\\d+)\\s*`,
  tC = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  nC = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  rC = /^#([0-9a-f]{3,8})$/,
  iC = RegExp(`^rgb\\(${eC},${eC},${eC}\\)$`),
  aC = RegExp(`^rgb\\(${nC},${nC},${nC}\\)$`),
  oC = RegExp(`^rgba\\(${eC},${eC},${eC},${tC}\\)$`),
  sC = RegExp(`^rgba\\(${nC},${nC},${nC},${tC}\\)$`),
  cC = RegExp(`^hsl\\(${tC},${nC},${nC}\\)$`),
  lC = RegExp(`^hsla\\(${tC},${nC},${nC},${tC}\\)$`),
  uC = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
YS(ZS, hC, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: dC,
  formatHex: dC,
  formatHex8: fC,
  formatHsl: pC,
  formatRgb: mC,
  toString: mC,
});
function dC() {
  return this.rgb().formatHex();
}
function fC() {
  return this.rgb().formatHex8();
}
function pC() {
  return OC(this).formatHsl();
}
function mC() {
  return this.rgb().formatRgb();
}
function hC(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = rC.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? gC(t)
          : n === 3
            ? new bC(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? _C(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? _C(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = iC.exec(e))
        ? new bC(t[1], t[2], t[3], 1)
        : (t = aC.exec(e))
          ? new bC(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = oC.exec(e))
            ? _C(t[1], t[2], t[3], t[4])
            : (t = sC.exec(e))
              ? _C(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = cC.exec(e))
                ? DC(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = lC.exec(e))
                  ? DC(t[1], t[2] / 100, t[3] / 100, t[4])
                  : uC.hasOwnProperty(e)
                    ? gC(uC[e])
                    : e === `transparent`
                      ? new bC(NaN, NaN, NaN, 0)
                      : null
  );
}
function gC(e) {
  return new bC((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function _C(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new bC(e, t, n, r));
}
function vC(e) {
  return (
    e instanceof ZS || (e = hC(e)),
    e ? ((e = e.rgb()), new bC(e.r, e.g, e.b, e.opacity)) : new bC()
  );
}
function yC(e, t, n, r) {
  return arguments.length === 1 ? vC(e) : new bC(e, t, n, r ?? 1);
}
function bC(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
YS(
  bC,
  yC,
  XS(ZS, {
    brighter(e) {
      return (
        (e = e == null ? $S : $S ** +e),
        new bC(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? QS : QS ** +e),
        new bC(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new bC(TC(this.r), TC(this.g), TC(this.b), wC(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: xC,
    formatHex: xC,
    formatHex8: SC,
    formatRgb: CC,
    toString: CC,
  }),
);
function xC() {
  return `#${EC(this.r)}${EC(this.g)}${EC(this.b)}`;
}
function SC() {
  return `#${EC(this.r)}${EC(this.g)}${EC(this.b)}${EC((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function CC() {
  let e = wC(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${TC(this.r)}, ${TC(this.g)}, ${TC(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function wC(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function TC(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function EC(e) {
  return ((e = TC(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function DC(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new AC(e, t, n, r)
  );
}
