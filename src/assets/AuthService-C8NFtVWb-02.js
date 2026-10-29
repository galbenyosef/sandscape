// AuthService-C8NFtVWb 02 — map
// Lines 187-430 of readable/assets/AuthService-C8NFtVWb.pretty.js (statement-aligned).
var b = `-`,
  ue = (e) => {
    let t = me(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        let n = e.split(b);
        return (n[0] === `` && n.length !== 1 && n.shift(), de(n, t) || pe(e));
      },
      getConflictingClassGroupIds: (e, t) => {
        let i = n[e] || [];
        return t && r[e] ? [...i, ...r[e]] : i;
      },
    };
  },
  de = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    let n = e[0],
      r = t.nextPart.get(n),
      i = r ? de(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    let a = e.join(b);
    return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
  },
  fe = /^\[(.+)\]$/,
  pe = (e) => {
    if (fe.test(e)) {
      let t = fe.exec(e)[1],
        n = t?.substring(0, t.indexOf(`:`));
      if (n) return `arbitrary..` + n;
    }
  },
  me = (e) => {
    let { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      _e(Object.entries(e.classGroups), n).forEach(([e, n]) => {
        he(n, r, e, t);
      }),
      r
    );
  },
  he = (e, t, n, r) => {
    e.forEach((e) => {
      if (typeof e == `string`) {
        let r = e === `` ? t : x(t, e);
        r.classGroupId = n;
        return;
      }
      if (typeof e == `function`) {
        if (ge(e)) {
          he(e(r), t, n, r);
          return;
        }
        t.validators.push({ validator: e, classGroupId: n });
        return;
      }
      Object.entries(e).forEach(([e, i]) => {
        he(i, x(t, e), n, r);
      });
    });
  },
  x = (e, t) => {
    let n = e;
    return (
      t.split(b).forEach((e) => {
        (n.nextPart.has(e) ||
          n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(e)));
      }),
      n
    );
  },
  ge = (e) => e.isThemeGetter,
  _e = (e, t) =>
    t
      ? e.map(([e, n]) => [
          e,
          n.map((e) =>
            typeof e == `string`
              ? t + e
              : typeof e == `object`
                ? Object.fromEntries(
                    Object.entries(e).map(([e, n]) => [t + e, n]),
                  )
                : e,
          ),
        ])
      : e,
  ve = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map(),
      i = (i, a) => {
        (n.set(i, a), t++, t > e && ((t = 0), (r = n), (n = new Map())));
      };
    return {
      get(e) {
        let t = n.get(e);
        if (t !== void 0) return t;
        if ((t = r.get(e)) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        n.has(e) ? n.set(e, t) : i(e, t);
      },
    };
  },
  ye = `!`,
  be = (e) => {
    let { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      a = t.length,
      o = (e) => {
        let n = [],
          o = 0,
          s = 0,
          c;
        for (let l = 0; l < e.length; l++) {
          let u = e[l];
          if (o === 0) {
            if (u === i && (r || e.slice(l, l + a) === t)) {
              (n.push(e.slice(s, l)), (s = l + a));
              continue;
            }
            if (u === `/`) {
              c = l;
              continue;
            }
          }
          u === `[` ? o++ : u === `]` && o--;
        }
        let l = n.length === 0 ? e : e.substring(s),
          u = l.startsWith(ye);
        return {
          modifiers: n,
          hasImportantModifier: u,
          baseClassName: u ? l.substring(1) : l,
          maybePostfixModifierPosition: c && c > s ? c - s : void 0,
        };
      };
    return n ? (e) => n({ className: e, parseClassName: o }) : o;
  },
  xe = (e) => {
    if (e.length <= 1) return e;
    let t = [],
      n = [];
    return (
      e.forEach((e) => {
        e[0] === `[` ? (t.push(...n.sort(), e), (n = [])) : n.push(e);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Se = (e) => ({ cache: ve(e.cacheSize), parseClassName: be(e), ...ue(e) }),
  Ce = /\s+/,
  we = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      a = [],
      o = e.trim().split(Ce),
      s = ``;
    for (let e = o.length - 1; e >= 0; --e) {
      let t = o[e],
        {
          modifiers: c,
          hasImportantModifier: l,
          baseClassName: u,
          maybePostfixModifierPosition: d,
        } = n(t),
        f = !!d,
        p = r(f ? u.substring(0, d) : u);
      if (!p) {
        if (!f) {
          s = t + (s.length > 0 ? ` ` + s : s);
          continue;
        }
        if (((p = r(u)), !p)) {
          s = t + (s.length > 0 ? ` ` + s : s);
          continue;
        }
        f = !1;
      }
      let m = xe(c).join(`:`),
        h = l ? m + ye : m,
        g = h + p;
      if (a.includes(g)) continue;
      a.push(g);
      let _ = i(p, f);
      for (let e = 0; e < _.length; ++e) {
        let t = _[e];
        a.push(h + t);
      }
      s = t + (s.length > 0 ? ` ` + s : s);
    }
    return s;
  };
function Te() {
  let e = 0,
    t,
    n,
    r = ``;
  for (; e < arguments.length;)
    (t = arguments[e++]) && (n = Ee(t)) && (r && (r += ` `), (r += n));
  return r;
}
var Ee = (e) => {
  if (typeof e == `string`) return e;
  let t,
    n = ``;
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ee(e[r])) && (n && (n += ` `), (n += t));
  return n;
};
function De(e, ...t) {
  let n,
    r,
    i,
    a = o;
  function o(o) {
    return (
      (n = Se(t.reduce((e, t) => t(e), e()))),
      (r = n.cache.get),
      (i = n.cache.set),
      (a = s),
      s(o)
    );
  }
  function s(e) {
    let t = r(e);
    if (t) return t;
    let a = we(e, n);
    return (i(e, a), a);
  }
  return function () {
    return a(Te.apply(null, arguments));
  };
}
