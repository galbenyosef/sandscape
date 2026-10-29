// Create-ea24k1TY 170 — push
// Lines 56685-57019 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function vK(e, t, n) {
  let r = {
      _bufferIndex: -1,
      _index: 0,
      line: (n && n.line) || 1,
      column: (n && n.column) || 1,
      offset: (n && n.offset) || 0,
    },
    i = {},
    a = [],
    o = [],
    s = [],
    c = {
      attempt: C(x),
      check: C(S),
      consume: v,
      enter: y,
      exit: b,
      interrupt: C(S, { interrupt: !0 }),
    },
    l = {
      code: null,
      containerState: {},
      defineSkip: h,
      events: [],
      now: m,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: p,
      write: d,
    },
    u = t.tokenize.call(l, c);
  return (t.resolveAll && a.push(t), l);
  function d(e) {
    return (
      (o = HU(o, e)),
      g(),
      o[o.length - 1] === null
        ? (w(t, 0), (l.events = _W(a, l.events, l)), l.events)
        : []
    );
  }
  function f(e, t) {
    return bK(p(e), t);
  }
  function p(e) {
    return yK(o, e);
  }
  function m() {
    let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
    return { _bufferIndex: e, _index: t, line: n, column: i, offset: a };
  }
  function h(e) {
    ((i[e.line] = e.column), E());
  }
  function g() {
    let e;
    for (; r._index < o.length;) {
      let t = o[r._index];
      if (typeof t == `string`)
        for (
          e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === e && r._bufferIndex < t.length;
        )
          _(t.charCodeAt(r._bufferIndex));
      else _(t);
    }
  }
  function _(e) {
    u = u(e);
  }
  function v(e) {
    (nW(e)
      ? (r.line++, (r.column = 1), (r.offset += e === -3 ? 2 : 1), E())
      : e !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (l.previous = e));
  }
  function y(e, t) {
    let n = t || {};
    return (
      (n.type = e),
      (n.start = m()),
      l.events.push([`enter`, n, l]),
      s.push(n),
      n
    );
  }
  function b(e) {
    let t = s.pop();
    return ((t.end = m()), l.events.push([`exit`, t, l]), t);
  }
  function x(e, t) {
    w(e, t.from);
  }
  function S(e, t) {
    t.restore();
  }
  function C(e, t) {
    return n;
    function n(n, r, i) {
      let a, o, s, u;
      return Array.isArray(n) ? f(n) : `tokenize` in n ? f([n]) : d(n);
      function d(e) {
        return t;
        function t(t) {
          let n = t !== null && e[t],
            r = t !== null && e.null;
          return f([
            ...(Array.isArray(n) ? n : n ? [n] : []),
            ...(Array.isArray(r) ? r : r ? [r] : []),
          ])(t);
        }
      }
      function f(e) {
        return ((a = e), (o = 0), e.length === 0 ? i : p(e[o]));
      }
      function p(e) {
        return n;
        function n(n) {
          return (
            (u = T()),
            (s = e),
            e.partial || (l.currentConstruct = e),
            e.name && l.parser.constructs.disable.null.includes(e.name)
              ? h(n)
              : e.tokenize.call(
                  t ? Object.assign(Object.create(l), t) : l,
                  c,
                  m,
                  h,
                )(n)
          );
        }
      }
      function m(t) {
        return (e(s, u), r);
      }
      function h(e) {
        return (u.restore(), ++o < a.length ? p(a[o]) : i);
      }
    }
  }
  function w(e, t) {
    (e.resolveAll && !a.includes(e) && a.push(e),
      e.resolve &&
        VU(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)),
      e.resolveTo && (l.events = e.resolveTo(l.events, l)));
  }
  function T() {
    let e = m(),
      t = l.previous,
      n = l.currentConstruct,
      i = l.events.length,
      a = Array.from(s);
    return { from: i, restore: o };
    function o() {
      ((r = e),
        (l.previous = t),
        (l.currentConstruct = n),
        (l.events.length = i),
        (s = a),
        E());
    }
  }
  function E() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function yK(e, t) {
  let n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    a = t.end._bufferIndex,
    o;
  if (n === i) o = [e[n].slice(r, a)];
  else {
    if (((o = e.slice(n, i)), r > -1)) {
      let e = o[0];
      typeof e == `string` ? (o[0] = e.slice(r)) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function bK(e, t) {
  let n = -1,
    r = [],
    i;
  for (; ++n < e.length;) {
    let a = e[n],
      o;
    if (typeof a == `string`) o = a;
    else
      switch (a) {
        case -5:
          o = `\r`;
          break;
        case -4:
          o = `
`;
          break;
        case -3:
          o = `\r
`;
          break;
        case -2:
          o = t ? ` ` : `	`;
          break;
        case -1:
          if (!t && i) continue;
          o = ` `;
          break;
        default:
          o = String.fromCharCode(a);
      }
    ((i = a === -2), r.push(o));
  }
  return r.join(``);
}
function xK(e) {
  let t = {
    constructs: WU([cK, ...((e || {}).extensions || [])]),
    content: n(uW),
    defined: [],
    document: n(fW),
    flow: n(eK),
    lazy: {},
    string: n(rK),
    text: n(iK),
  };
  return t;
  function n(e) {
    return n;
    function n(n) {
      return vK(t, e, n);
    }
  }
}
function SK(e) {
  for (; !JW(e););
  return e;
}
var CK = /[\0\t\n\r]/g;
function wK() {
  let e = 1,
    t = ``,
    n = !0,
    r;
  return i;
  function i(i, a, o) {
    let s = [],
      c,
      l,
      u,
      d,
      f;
    for (
      i =
        t +
        (typeof i == `string`
          ? i.toString()
          : new TextDecoder(a || void 0).decode(i)),
        u = 0,
        t = ``,
        n &&= (i.charCodeAt(0) === 65279 && u++, void 0);
      u < i.length;
    ) {
      if (
        ((CK.lastIndex = u),
        (c = CK.exec(i)),
        (d = c && c.index !== void 0 ? c.index : i.length),
        (f = i.charCodeAt(d)),
        !c)
      ) {
        t = i.slice(u);
        break;
      }
      if (f === 10 && u === d && r) (s.push(-3), (r = void 0));
      else
        switch (
          ((r &&= (s.push(-5), void 0)),
          u < d && (s.push(i.slice(u, d)), (e += d - u)),
          f)
        ) {
          case 0:
            (s.push(65533), e++);
            break;
          case 9:
            for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
            break;
          case 10:
            (s.push(-4), (e = 1));
            break;
          default:
            ((r = !0), (e = 1));
        }
      u = d + 1;
    }
    return (o && (r && s.push(-5), t && s.push(t), s.push(null)), s);
  }
}
var TK = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function EK(e) {
  return e.replace(TK, DK);
}
function DK(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    let e = n.charCodeAt(1),
      t = e === 120 || e === 88;
    return qU(n.slice(t ? 2 : 1), t ? 16 : 10);
  }
  return BU(n) || e;
}
var OK = {}.hasOwnProperty;
function kK(e, t, n) {
  return (
    t && typeof t == `object` && ((n = t), (t = void 0)),
    AK(n)(
      SK(
        xK(n)
          .document()
          .write(wK()(e, t, !0)),
      ),
    )
  );
}
