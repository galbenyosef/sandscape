// assets__Create-ea24k1TY 175 — codepointat
// Lines 58552-58901 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Yq(e, t) {
  let n = Uq(e, t),
    r = n.one(e, void 0),
    i = Oq(n),
    a = Array.isArray(r)
      ? { type: `root`, children: r }
      : r || { type: `root`, children: [] };
  return (
    i &&
      (`children` in a,
      a.children.push(
        {
          type: `text`,
          value: `
`,
        },
        i,
      )),
    a
  );
}
function Xq(e, t) {
  return e && `run` in e
    ? async function (n, r) {
        let i = Yq(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return Yq(n, { file: r, ...(e || t) });
      };
}
function Zq(e) {
  if (e) throw e;
}
var Qq = n((e, t) => {
  var n = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString,
    i = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    o = function (e) {
      return typeof Array.isArray == `function`
        ? Array.isArray(e)
        : r.call(e) === `[object Array]`;
    },
    s = function (e) {
      if (!e || r.call(e) !== `[object Object]`) return !1;
      var t = n.call(e, `constructor`),
        i =
          e.constructor &&
          e.constructor.prototype &&
          n.call(e.constructor.prototype, `isPrototypeOf`);
      if (e.constructor && !t && !i) return !1;
      for (var a in e);
      return a === void 0 || n.call(e, a);
    },
    c = function (e, t) {
      i && t.name === `__proto__`
        ? i(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0,
          })
        : (e[t.name] = t.newValue);
    },
    l = function (e, t) {
      if (t === `__proto__`) {
        if (!n.call(e, t)) return;
        if (a) return a(e, t).value;
      }
      return e[t];
    };
  t.exports = function e() {
    var t,
      n,
      r,
      i,
      a,
      u,
      d = arguments[0],
      f = 1,
      p = arguments.length,
      m = !1;
    for (
      typeof d == `boolean` && ((m = d), (d = arguments[1] || {}), (f = 2)),
        (d == null || (typeof d != `object` && typeof d != `function`)) &&
          (d = {});
      f < p;
      ++f
    )
      if (((t = arguments[f]), t != null))
        for (n in t)
          ((r = l(d, n)),
            (i = l(t, n)),
            d !== i &&
              (m && i && (s(i) || (a = o(i)))
                ? (a
                    ? ((a = !1), (u = r && o(r) ? r : []))
                    : (u = r && s(r) ? r : {}),
                  c(d, { name: n, newValue: e(m, u, i) }))
                : i !== void 0 && c(d, { name: n, newValue: i })));
    return d;
  };
});
function $q(e) {
  if (typeof e != `object` || !e) return !1;
  let t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function eJ() {
  let e = [],
    t = { run: n, use: r };
  return t;
  function n(...t) {
    let n = -1,
      r = t.pop();
    if (typeof r != `function`)
      throw TypeError(`Expected function as last argument, not ` + r);
    i(null, ...t);
    function i(a, ...o) {
      let s = e[++n],
        c = -1;
      if (a) {
        r(a);
        return;
      }
      for (; ++c < t.length;)
        (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
      ((t = o), s ? tJ(s, i)(...o) : r(null, ...o));
    }
  }
  function r(n) {
    if (typeof n != `function`)
      throw TypeError("Expected `middelware` to be a function, not " + n);
    return (e.push(n), t);
  }
}
function tJ(e, t) {
  let n;
  return r;
  function r(...t) {
    let r = e.length > t.length,
      o;
    r && t.push(i);
    try {
      o = e.apply(this, t);
    } catch (e) {
      let t = e;
      if (r && n) throw t;
      return i(t);
    }
    r ||
      (o && o.then && typeof o.then == `function`
        ? o.then(a, i)
        : o instanceof Error
          ? i(o)
          : a(o));
  }
  function i(e, ...r) {
    n || ((n = !0), t(e, ...r));
  }
  function a(e) {
    i(null, e);
  }
}
var nJ = { basename: rJ, dirname: iJ, extname: aJ, join: oJ, sep: `/` };
function rJ(e, t) {
  if (t !== void 0 && typeof t != `string`)
    throw TypeError(`"ext" argument must be a string`);
  lJ(e);
  let n = 0,
    r = -1,
    i = e.length,
    a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--;)
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((a = !0), (r = i + 1));
    return r < 0 ? `` : e.slice(n, r);
  }
  if (t === e) return ``;
  let o = -1,
    s = t.length - 1;
  for (; i--;)
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      (o < 0 && ((a = !0), (o = i + 1)),
        s > -1 &&
          (e.codePointAt(i) === t.codePointAt(s--)
            ? s < 0 && (r = i)
            : ((s = -1), (r = o))));
  return (n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r));
}
function iJ(e) {
  if ((lJ(e), e.length === 0)) return `.`;
  let t = -1,
    n = e.length,
    r;
  for (; --n;)
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r ||= !0;
  return t < 0
    ? e.codePointAt(0) === 47
      ? `/`
      : `.`
    : t === 1 && e.codePointAt(0) === 47
      ? `//`
      : e.slice(0, t);
}
function aJ(e) {
  lJ(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    a = 0,
    o;
  for (; t--;) {
    let s = e.codePointAt(t);
    if (s === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    (n < 0 && ((o = !0), (n = t + 1)),
      s === 46 ? (i < 0 ? (i = t) : a !== 1 && (a = 1)) : i > -1 && (a = -1));
  }
  return i < 0 || n < 0 || a === 0 || (a === 1 && i === n - 1 && i === r + 1)
    ? ``
    : e.slice(i, n);
}
function oJ(...e) {
  let t = -1,
    n;
  for (; ++t < e.length;)
    (lJ(e[t]), e[t] && (n = n === void 0 ? e[t] : n + `/` + e[t]));
  return n === void 0 ? `.` : sJ(n);
}
function sJ(e) {
  lJ(e);
  let t = e.codePointAt(0) === 47,
    n = cJ(e, !t);
  return (
    n.length === 0 && !t && (n = `.`),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += `/`),
    t ? `/` + n : n
  );
}
function cJ(e, t) {
  let n = ``,
    r = 0,
    i = -1,
    a = 0,
    o = -1,
    s,
    c;
  for (; ++o <= e.length;) {
    if (o < e.length) s = e.codePointAt(o);
    else if (s === 47) break;
    else s = 47;
    if (s === 47) {
      if (!(i === o - 1 || a === 1))
        if (i !== o - 1 && a === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((c = n.lastIndexOf(`/`)), c !== n.length - 1)) {
                (c < 0
                  ? ((n = ``), (r = 0))
                  : ((n = n.slice(0, c)),
                    (r = n.length - 1 - n.lastIndexOf(`/`))),
                  (i = o),
                  (a = 0));
                continue;
              }
            } else if (n.length > 0) {
              ((n = ``), (r = 0), (i = o), (a = 0));
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + `/..` : `..`), (r = 2));
        } else
          (n.length > 0
            ? (n += `/` + e.slice(i + 1, o))
            : (n = e.slice(i + 1, o)),
            (r = o - i - 1));
      ((i = o), (a = 0));
    } else s === 46 && a > -1 ? a++ : (a = -1);
  }
  return n;
}
function lJ(e) {
  if (typeof e != `string`)
    throw TypeError(`Path must be a string. Received ` + JSON.stringify(e));
}
var uJ = { cwd: dJ };
function dJ() {
  return `/`;
}
function fJ(e) {
  return !!(
    typeof e == `object` &&
    e &&
    `href` in e &&
    e.href &&
    `protocol` in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function pJ(e) {
  if (typeof e == `string`) e = new URL(e);
  else if (!fJ(e)) {
    let t = TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`",
    );
    throw ((t.code = `ERR_INVALID_ARG_TYPE`), t);
  }
  if (e.protocol !== `file:`) {
    let e = TypeError(`The URL must be of scheme file`);
    throw ((e.code = `ERR_INVALID_URL_SCHEME`), e);
  }
  return mJ(e);
}
