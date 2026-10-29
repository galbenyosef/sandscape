// Create-CEn7EAZs 162 — place
// Lines 54193-54517 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function nU(e, t) {
  let n = kH(t),
    r = t,
    i = AH;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === `data` && tU.test(t)) {
    if (t.charAt(4) === `-`) {
      let e = t.slice(5).replace(eU, iU);
      r = `data` + e.charAt(0).toUpperCase() + e.slice(1);
    } else {
      let e = t.slice(4);
      if (!eU.test(e)) {
        let n = e.replace($H, rU);
        (n.charAt(0) !== `-` && (n = `-` + n), (t = `data` + n));
      }
    }
    i = VH;
  }
  return new i(r, t);
}
function rU(e) {
  return `-` + e.toLowerCase();
}
function iU(e) {
  return e.charAt(1).toUpperCase();
}
var aU = OH([WH, qH, YH, XH, ZH], `html`),
  oU = OH([WH, JH, YH, XH, ZH], `svg`);
function sU(e) {
  return e.join(` `).trim();
}
var cU = n((e, t) => {
    var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      r = /\n/g,
      i = /^\s*/,
      a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      o = /^:\s*/,
      s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      c = /^[;\s]*/,
      l = /^\s+|\s+$/g;
    function u(e, t) {
      if (typeof e != `string`)
        throw TypeError(`First argument must be a string`);
      if (!e) return [];
      t ||= {};
      var l = 1,
        u = 1;
      function f(e) {
        var t = e.match(r);
        t && (l += t.length);
        var n = e.lastIndexOf(`
`);
        u = ~n ? e.length - n : u + e.length;
      }
      function p() {
        var e = { line: l, column: u };
        return function (t) {
          return ((t.position = new m(e)), _(), t);
        };
      }
      function m(e) {
        ((this.start = e),
          (this.end = { line: l, column: u }),
          (this.source = t.source));
      }
      m.prototype.content = e;
      function h(n) {
        var r = Error(t.source + `:` + l + `:` + u + `: ` + n);
        if (
          ((r.reason = n),
          (r.filename = t.source),
          (r.line = l),
          (r.column = u),
          (r.source = e),
          !t.silent)
        )
          throw r;
      }
      function g(t) {
        var n = t.exec(e);
        if (n) {
          var r = n[0];
          return (f(r), (e = e.slice(r.length)), n);
        }
      }
      function _() {
        g(i);
      }
      function v(e) {
        var t;
        for (e ||= []; (t = y());) t !== !1 && e.push(t);
        return e;
      }
      function y() {
        var t = p();
        if (!(e.charAt(0) != `/` || e.charAt(1) != `*`)) {
          for (
            var n = 2;
            e.charAt(n) != `` && (e.charAt(n) != `*` || e.charAt(n + 1) != `/`);
          )
            ++n;
          if (((n += 2), e.charAt(n - 1) === ``))
            return h(`End of comment missing`);
          var r = e.slice(2, n - 2);
          return (
            (u += 2),
            f(r),
            (e = e.slice(n)),
            (u += 2),
            t({ type: `comment`, comment: r })
          );
        }
      }
      function b() {
        var e = p(),
          t = g(a);
        if (t) {
          if ((y(), !g(o))) return h(`property missing ':'`);
          var r = g(s),
            i = e({
              type: `declaration`,
              property: d(t[0].replace(n, ``)),
              value: r ? d(r[0].replace(n, ``)) : ``,
            });
          return (g(c), i);
        }
      }
      function x() {
        var e = [];
        v(e);
        for (var t; (t = b());) t !== !1 && (e.push(t), v(e));
        return e;
      }
      return (_(), x());
    }
    function d(e) {
      return e ? e.replace(l, ``) : ``;
    }
    t.exports = u;
  }),
  lU = n((e) => {
    var t =
      (e && e.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r));
    var n = t(cU());
    function r(e, t) {
      let r = null;
      if (!e || typeof e != `string`) return r;
      let i = (0, n.default)(e),
        a = typeof t == `function`;
      return (
        i.forEach((e) => {
          if (e.type !== `declaration`) return;
          let { property: n, value: i } = e;
          a ? t(n, i, e) : i && ((r ||= {}), (r[n] = i));
        }),
        r
      );
    }
  }),
  uU = n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.camelCase = void 0));
    var t = /^--[a-zA-Z0-9_-]+$/,
      n = /-([a-z])/g,
      r = /^[^-]+$/,
      i = /^-(webkit|moz|ms|o|khtml)-/,
      a = /^-(ms)-/,
      o = function (e) {
        return !e || r.test(e) || t.test(e);
      },
      s = function (e, t) {
        return t.toUpperCase();
      },
      c = function (e, t) {
        return `${t}-`;
      };
    e.camelCase = function (e, t) {
      return (
        t === void 0 && (t = {}),
        o(e)
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(a, c) : e.replace(i, c)),
            e.replace(n, s))
      );
    };
  }),
  dU = n((e, t) => {
    var n = (
        (e && e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        }
      )(lU()),
      r = uU();
    function i(e, t) {
      var i = {};
      return (
        !e ||
          typeof e != `string` ||
          (0, n.default)(e, function (e, n) {
            e && n && (i[(0, r.camelCase)(e, t)] = n);
          }),
        i
      );
    }
    ((i.default = i), (t.exports = i));
  }),
  fU = mU(`end`),
  pU = mU(`start`);
function mU(e) {
  return t;
  function t(t) {
    let n = (t && t.position && t.position[e]) || {};
    if (
      typeof n.line == `number` &&
      n.line > 0 &&
      typeof n.column == `number` &&
      n.column > 0
    )
      return {
        line: n.line,
        column: n.column,
        offset:
          typeof n.offset == `number` && n.offset > -1 ? n.offset : void 0,
      };
  }
}
function hU(e) {
  let t = pU(e),
    n = fU(e);
  if (t && n) return { start: t, end: n };
}
function gU(e) {
  return !e || typeof e != `object`
    ? ``
    : `position` in e || `type` in e
      ? vU(e.position)
      : `start` in e || `end` in e
        ? vU(e)
        : `line` in e || `column` in e
          ? _U(e)
          : ``;
}
function _U(e) {
  return yU(e && e.line) + `:` + yU(e && e.column);
}
function vU(e) {
  return _U(e && e.start) + `-` + _U(e && e.end);
}
function yU(e) {
  return e && typeof e == `number` ? e : 1;
}
var bU = class extends Error {
  constructor(e, t, n) {
    (super(), typeof t == `string` && ((n = t), (t = void 0)));
    let r = ``,
      i = {},
      a = !1;
    if (
      (t &&
        (i =
          (`line` in t && `column` in t) || (`start` in t && `end` in t)
            ? { place: t }
            : `type` in t
              ? { ancestors: [t], place: t.position }
              : { ...t }),
      typeof e == `string`
        ? (r = e)
        : !i.cause && e && ((a = !0), (r = e.message), (i.cause = e)),
      !i.ruleId && !i.source && typeof n == `string`)
    ) {
      let e = n.indexOf(`:`);
      e === -1
        ? (i.ruleId = n)
        : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
    }
    if (!i.place && i.ancestors && i.ancestors) {
      let e = i.ancestors[i.ancestors.length - 1];
      e && (i.place = e.position);
    }
    let o = i.place && `start` in i.place ? i.place.start : i.place;
    ((this.ancestors = i.ancestors || void 0),
      (this.cause = i.cause || void 0),
      (this.column = o ? o.column : void 0),
      (this.fatal = void 0),
      (this.file = ``),
      (this.message = r),
      (this.line = o ? o.line : void 0),
      (this.name = gU(i.place) || `1:1`),
      (this.place = i.place || void 0),
      (this.reason = this.message),
      (this.ruleId = i.ruleId || void 0),
      (this.source = i.source || void 0),
      (this.stack =
        a && i.cause && typeof i.cause.stack == `string` ? i.cause.stack : ``),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
};
((bU.prototype.file = ``),
  (bU.prototype.name = ``),
  (bU.prototype.reason = ``),
  (bU.prototype.message = ``),
  (bU.prototype.stack = ``),
  (bU.prototype.column = void 0),
  (bU.prototype.line = void 0),
  (bU.prototype.ancestors = void 0),
  (bU.prototype.cause = void 0),
  (bU.prototype.fatal = void 0),
  (bU.prototype.place = void 0),
  (bU.prototype.ruleId = void 0),
  (bU.prototype.source = void 0));
var xU = e(dU(), 1),
  SU = {}.hasOwnProperty,
  CU = new Map(),
  wU = /[A-Z]/g,
  TU = new Set([`table`, `tbody`, `thead`, `tfoot`, `tr`]),
  EU = new Set([`td`, `th`]);
