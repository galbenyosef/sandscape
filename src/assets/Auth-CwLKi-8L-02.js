// Auth-CwLKi-8L 02 — children
// Lines 107-455 of readable/assets/Auth-CwLKi-8L.pretty.js (statement-aligned).
var A = {
    parse: function (e, t) {
      ((t ||= {}), (t.components ||= pe));
      var n,
        r = [],
        i = [],
        a = -1,
        o = !1;
      if (e.indexOf(`<`) !== 0) {
        var s = e.indexOf(`<`);
        r.push({ type: `text`, content: s === -1 ? e : e.substring(0, s) });
      }
      for (var c, l = []; (c = fe.exec(e));) l.push(c);
      return (
        l.forEach(function (e, t) {
          var n = e[0];
          if (n && !n.startsWith(`<!--`)) {
            for (var r = 0, i = 0, a = -1, o = null, s = 0; s < n.length; s++) {
              var c = n.charAt(s);
              o
                ? c === o && (o = null)
                : c === `"` || c === `'`
                  ? (o = c)
                  : c === `<`
                    ? ++r == 2 && (a = s)
                    : c === `>` && i++;
            }
            var u = a > -1 && /[a-zA-Z0-9\-!/]/.test(n.charAt(a + 1));
            if (r > i && u) {
              var d = n.substring(0, a),
                f = n.substring(d.length);
              ((l[t][0] = f), (l[t].index += d.length));
            }
          }
        }),
        l.forEach(function (s, c) {
          var u = s[0];
          if (u) {
            var d = s.index;
            if (o) {
              if (u !== `</` + n.name + `>`) return;
              o = !1;
            }
            var f,
              p,
              m = u.charAt(1) !== `/`,
              h = u.startsWith(`<!--`),
              g = d + u.length,
              _ = e.charAt(g),
              v = l[c + 1];
            if (_ === `<` && v) {
              var y = e.substring(g, v.index);
              f = y.split(`<`).length > y.split(`>`).length;
            }
            if (h) {
              var b = de(u);
              if (a < 0) return (r.push(b), r);
              (p = i[a]).children.push(b);
              var x = e.slice(g, v ? v.index : void 0);
              return (
                x.length > 0 && p.children.push({ type: `text`, content: x }),
                r
              );
            }
            if (
              (m &&
                (a++,
                (n = de(u)).type === `tag` &&
                  t.components[n.name] &&
                  ((n.type = `component`), (o = !0)),
                n.voidElement ||
                  o ||
                  !_ ||
                  _ === `<` ||
                  n.children.push({
                    type: `text`,
                    content: e.slice(g, v ? v.index : void 0),
                  }),
                a === 0 && r.push(n),
                (p = i[a - 1]) && p.children.push(n),
                (i[a] = n)),
              (!m || n.voidElement) &&
                (a > -1 &&
                  (n.voidElement || n.name === u.slice(2, -1)) &&
                  (a--, (n = a === -1 ? r : i[a])),
                !o && (_ !== `<` || f) && _))
            ) {
              p = a === -1 ? r : i[a].children;
              var S = v ? v.index : -1,
                C = e.slice(g, S === -1 ? void 0 : S);
              (O.test(C) && (C = ` `),
                ((S > -1 && a + p.length >= 0) || C !== ` `) &&
                  p.push({ type: `text`, content: C }));
            }
          }
        }),
        r
      );
    },
    stringify: function (e) {
      return e.reduce(function (e, t) {
        return e + k(``, t);
      }, ``);
    },
  },
  j = e(n()),
  M = (e, t) => {
    if (!e) return !1;
    let n = e.props?.children ?? e.children;
    return t ? n.length > 0 : !!n;
  },
  N = (e) => {
    if (!e) return [];
    let t = e.props?.children ?? e.children;
    return e.props?.i18nIsDynamicList ? F(t) : t;
  },
  P = (e) => Array.isArray(e) && e.every(j.isValidElement),
  F = (e) => (Array.isArray(e) ? e : [e]),
  me = (e, t) => {
    let n = { ...t };
    return ((n.props = Object.assign(e.props, t.props)), n);
  },
  he = (e, t, n, r) => {
    if (!e) return ``;
    let i = ``,
      a = F(e),
      o = t?.transSupportBasicHtmlNodes
        ? (t.transKeepBasicHtmlNodesFor ?? [])
        : [];
    return (
      a.forEach((e, a) => {
        if (m(e)) {
          i += `${e}`;
          return;
        }
        if ((0, j.isValidElement)(e)) {
          let { props: s, type: c } = e,
            l = Object.keys(s).length,
            u = o.indexOf(c) > -1,
            d = s.children;
          if (!d && u && !l) {
            i += `<${c}/>`;
            return;
          }
          if ((!d && (!u || l)) || s.i18nIsDynamicList) {
            i += `<${a}></${a}>`;
            return;
          }
          if (u && l === 1 && m(d)) {
            i += `<${c}>${d}</${c}>`;
            return;
          }
          let f = he(d, t, n, r);
          i += `<${a}>${f}</${a}>`;
          return;
        }
        if (e === null) {
          h(n, `TRANS_NULL_VALUE`, `Passed in a null value as child`, {
            i18nKey: r,
          });
          return;
        }
        if (v(e)) {
          let { format: t, ...a } = e,
            o = Object.keys(a);
          if (o.length === 1) {
            let e = t ? `${o[0]}, ${t}` : o[0];
            i += `{{${e}}}`;
            return;
          }
          h(
            n,
            `TRANS_INVALID_OBJ`,
            `Invalid child - Object should only have keys {{ value, format }} (format is optional).`,
            { i18nKey: r, child: e },
          );
          return;
        }
        h(
          n,
          `TRANS_INVALID_VAR`,
          `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`,
          { i18nKey: r, child: e },
        );
      }),
      i
    );
  },
  I = (e, t, n, r, i, a, o) => {
    if (n === ``) return [];
    let s = i.transKeepBasicHtmlNodesFor || [],
      c = n && new RegExp(s.map((e) => `<${e}`).join(`|`)).test(n);
    if (!e && !t && !c && !o) return [n];
    let l = t ?? {},
      u = (e) => {
        F(e).forEach((e) => {
          m(e) ||
            (M(e)
              ? u(N(e))
              : v(e) && !(0, j.isValidElement)(e) && Object.assign(l, e));
        });
      };
    u(e);
    let d = A.parse(`<0>${n}</0>`),
      f = { ...l, ...a },
      p = (e, t, n) => {
        let r = N(e),
          i = g(r, t.children, n);
        return (P(r) && i.length === 0) || e.props?.i18nIsDynamicList ? r : i;
      },
      h = (e, t, n, r, i) => {
        e.dummy
          ? ((e.children = t),
            n.push((0, j.cloneElement)(e, { key: r }, i ? void 0 : t)))
          : n.push(
              ...j.Children.map([e], (e) => {
                let n = { ...e.props };
                return (
                  delete n.i18nIsDynamicList,
                  (0, j.createElement)(
                    e.type,
                    { ...n, key: r, ref: e.props.ref ?? e.ref },
                    i ? null : t,
                  )
                );
              }),
            );
      },
      g = (e, n, a) => {
        let l = F(e);
        return F(n).reduce((e, n, u) => {
          let d =
            n.children?.[0]?.content &&
            r.services.interpolator.interpolate(
              n.children[0].content,
              f,
              r.language,
            );
          if (n.type === `tag`) {
            let o = l[parseInt(n.name, 10)];
            (!o && t && (o = t[n.name]),
              a.length === 1 && !o && (o = a[0][n.name]),
              (o ||= {}));
            let _ =
                Object.keys(n.attrs).length === 0
                  ? o
                  : me({ props: n.attrs }, o),
              y = (0, j.isValidElement)(_),
              b = y && M(n, !0) && !n.voidElement,
              x = c && v(_) && _.dummy && !y,
              S = v(t) && Object.hasOwnProperty.call(t, n.name);
            if (m(_)) {
              let t = r.services.interpolator.interpolate(_, f, r.language);
              e.push(t);
            } else if (M(_) || b) {
              let t = p(_, n, a);
              h(_, t, e, u);
            } else if (x) {
              let t = g(l, n.children, a);
              h(_, t, e, u);
            } else if (Number.isNaN(parseFloat(n.name)))
              if (S) {
                let t = p(_, n, a);
                h(_, t, e, u, n.voidElement);
              } else if (i.transSupportBasicHtmlNodes && s.indexOf(n.name) > -1)
                if (n.voidElement)
                  e.push(
                    (0, j.createElement)(n.name, { key: `${n.name}-${u}` }),
                  );
                else {
                  let t = g(l, n.children, a);
                  e.push(
                    (0, j.createElement)(n.name, { key: `${n.name}-${u}` }, t),
                  );
                }
              else if (n.voidElement) e.push(`<${n.name} />`);
              else {
                let t = g(l, n.children, a);
                e.push(`<${n.name}>${t}</${n.name}>`);
              }
            else if (v(_) && !y) {
              let t = n.children[0] ? d : null;
              t && e.push(t);
            } else h(_, d, e, u, n.children.length !== 1 || !d);
          } else if (n.type === `text`) {
            let t = i.transWrapTextNodes,
              a = o
                ? i.unescape(
                    r.services.interpolator.interpolate(
                      n.content,
                      f,
                      r.language,
                    ),
                  )
                : r.services.interpolator.interpolate(n.content, f, r.language);
            t
              ? e.push((0, j.createElement)(t, { key: `${n.name}-${u}` }, a))
              : e.push(a);
          }
          return e;
        }, []);
      };
    return N(g([{ dummy: !0, children: e || [] }], d, F(e || []))[0]);
  },
  L = (e, t, n) => {
    let r = e.key || t,
      i = (0, j.cloneElement)(e, { key: r });
    if (
      !i.props ||
      !i.props.children ||
      (n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)
    )
      return i;
    function a() {
      return (0, j.createElement)(j.Fragment, null, i);
    }
    return (0, j.createElement)(a, { key: r });
  },
  R = (e, t) => e.map((e, n) => L(e, n, t)),
  z = (e, t) => {
    let n = {};
    return (
      Object.keys(e).forEach((r) => {
        Object.assign(n, { [r]: L(e[r], r, t) });
      }),
      n
    );
  },
  ge = (e, t, n, r) =>
    e
      ? Array.isArray(e)
        ? R(e, t)
        : v(e)
          ? z(e, t)
          : (b(
              n,
              `TRANS_INVALID_COMPONENTS`,
              `<Trans /> "components" prop expects an object or array`,
              { i18nKey: r },
            ),
            null)
      : null,
  B = (e) =>
    !v(e) || Array.isArray(e)
      ? !1
      : Object.keys(e).reduce(
          (e, t) => e && Number.isNaN(Number.parseFloat(t)),
          !0,
        );
