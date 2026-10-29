// SceneEditor-NC7_0wmu 65 — math
// Lines 32983-33332 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function s_(e, t, n, r, i, a, o, s) {
  let { W: c, D: l, cs: u, lineX: d, lineZ: f } = i,
    p = (e, t) => e >= 0 && e < c && t >= 0 && t < l,
    m = Math.max(0.2, u * 0.18, a.wallThickness * 1.5),
    h = Math.max(2, Math.floor(a.columnStride)),
    g = Math.min(0.12, a.wallHeight * 0.042),
    _ = Math.max(a.wallThickness * 0.8, 0.13),
    v = Math.max(0.18, a.wallThickness * 1.4),
    y = Math.max(m, a.wallThickness * 1.3),
    b = Math.min(0.4, Math.max(0.18, a.wallHeight * 0.1)),
    x = 0.02,
    S = a.wallHeight * Kg,
    C = b + S,
    w = Gg(a),
    T = new Set(),
    E = (e, t, i, a, u) => {
      if (!p(t, i) || n[r(t, i)] !== e) return !1;
      let d = a - t,
        f = u - i;
      if (d === 0 && f !== 0) {
        if (s.has(Math.max(i, u) * c + t)) return !1;
      } else if (f === 0 && d !== 0 && o.has(Math.max(t, a) * l + i)) return !1;
      let m = p(a, u) ? n[r(a, u)] : null;
      return (
        m === null ||
        (m !== e && m.kind !== `corridor` && e.kind !== `corridor`)
      );
    },
    D = (e, t, i, a, o) => {
      if (E(e, t, i, a, o)) return !0;
      if (!p(t, i) || n[r(t, i)] !== e) return !1;
      let s = p(a, o) ? n[r(a, o)] : null;
      return s ? e.height >= s.height : !1;
    },
    O = (e, t, n) => {
      let r = [],
        i = -1;
      for (let a = e; a < t; a++)
        n(a) ? i < 0 && (i = a) : i >= 0 && (r.push([i, a]), (i = -1));
      return (i >= 0 && r.push([i, t]), r);
    },
    k = (e) => {
      let n = Jg(e);
      if (n.w < 1 || n.d < 1) return;
      let r = n.x,
        i = n.x + n.w,
        a = n.z,
        o = n.z + n.d;
      for (let n = a; n <= o; n++) {
        for (let [a, o] of O(r, i, (t) => E(e, t, n, t, n - 1))) {
          let r = (o - a) * u;
          t.push(
            $(
              `trim`,
              r,
              g,
              _,
              d(a) + r / 2,
              g / 2,
              f(n) + _ / 2,
              e.id,
              `trim:${e.id}:N:${n}:${a}`,
            ),
          );
        }
        for (let [a, o] of O(r, i, (t) => E(e, t, n - 1, t, n))) {
          let r = (o - a) * u;
          t.push(
            $(
              `trim`,
              r,
              g,
              _,
              d(a) + r / 2,
              g / 2,
              f(n) - _ / 2,
              e.id,
              `trim:${e.id}:S:${n}:${a}`,
            ),
          );
        }
      }
      for (let n = r; n <= i; n++) {
        for (let [r, i] of O(a, o, (t) => E(e, n, t, n - 1, t))) {
          let a = f(r) + (E(e, n, r, n, r - 1) ? _ : 0),
            o = f(i) - (E(e, n, i - 1, n, i) ? _ : 0);
          o - a <= 0.01 ||
            t.push(
              $(
                `trim`,
                _,
                g,
                o - a,
                d(n) + _ / 2,
                g / 2,
                (a + o) / 2,
                e.id,
                `trim:${e.id}:W:${n}:${r}`,
              ),
            );
        }
        for (let [r, i] of O(a, o, (t) => E(e, n - 1, t, n, t))) {
          let a = f(r) + (E(e, n - 1, r, n - 1, r - 1) ? _ : 0),
            o = f(i) - (E(e, n - 1, i - 1, n - 1, i) ? _ : 0);
          o - a <= 0.01 ||
            t.push(
              $(
                `trim`,
                _,
                g,
                o - a,
                d(n) - _ / 2,
                g / 2,
                (a + o) / 2,
                e.id,
                `trim:${e.id}:E:${n}:${r}`,
              ),
            );
        }
      }
    },
    A = (e) => {
      let n = Jg(e);
      if (n.w < 1 || n.d < 1) return;
      let r = e.height - x - C / 2,
        i = n.x,
        a = n.x + n.w,
        o = n.z,
        s = n.z + n.d,
        c = y / 2,
        l = m * 0.65;
      for (let [n, s] of O(i, a, (t) => D(e, t, o, t, o - 1))) {
        let c = (s - n) * u,
          p = n === i ? l : 0,
          m = s === a ? l : 0;
        t.push(
          $(
            `beam`,
            c + p + m,
            C,
            y,
            d(n) - p + (c + p + m) / 2,
            r,
            f(o),
            e.id,
            `topbeam:${e.id}:N:${n}`,
          ),
        );
      }
      for (let [n, o] of O(i, a, (t) => D(e, t, s - 1, t, s))) {
        let c = (o - n) * u,
          p = n === i ? l : 0,
          m = o === a ? l : 0;
        t.push(
          $(
            `beam`,
            c + p + m,
            C,
            y,
            d(n) - p + (c + p + m) / 2,
            r,
            f(s),
            e.id,
            `topbeam:${e.id}:S:${n}`,
          ),
        );
      }
      for (let [n, a] of O(o, s, (t) => D(e, i, t, i - 1, t))) {
        let l = f(n) + (n === o && D(e, i, o, i, o - 1) ? c : 0),
          u = f(a) - (a === s && D(e, i, s - 1, i, s) ? c : 0);
        u - l <= 0.01 ||
          t.push(
            $(
              `beam`,
              y,
              C,
              u - l,
              d(i),
              r,
              (l + u) / 2,
              e.id,
              `topbeam:${e.id}:W:${n}`,
            ),
          );
      }
      for (let [n, i] of O(o, s, (t) => D(e, a - 1, t, a, t))) {
        let l = f(n) + (n === o && D(e, a - 1, o, a - 1, o - 1) ? c : 0),
          u = f(i) - (i === s && D(e, a - 1, s - 1, a - 1, s) ? c : 0);
        u - l <= 0.01 ||
          t.push(
            $(
              `beam`,
              y,
              C,
              u - l,
              d(a),
              r,
              (l + u) / 2,
              e.id,
              `topbeam:${e.id}:E:${n}`,
            ),
          );
      }
    };
  for (let i of e.cells) {
    if (i.kind !== `room` && i.kind !== `arena`) continue;
    let e = Jg(i);
    if (e.w < 2 || e.d < 2) continue;
    let a = i.height,
      o = e.x,
      s = e.x + e.w,
      l = e.z,
      u = e.z + e.d,
      _ = new Set(),
      v = (e, o, s, l) => {
        if (!p(s, l) || n[r(s, l)] !== i) return;
        let u = e + o * (c + 1);
        if (_.has(u)) return;
        (_.add(u), T.add(u));
        let h = a - b - x - S + Math.min(0.12, b * 0.45);
        t.push(
          $(
            `column`,
            m,
            h + w,
            m,
            d(e),
            (h - w) / 2,
            f(o),
            i.id,
            `column:${i.id}:${e}:${o}`,
          ),
        );
        let v = m * 1.7,
          y = Math.min(0.16, g * 1.3);
        t.push(
          $(
            `trim`,
            v,
            y,
            v,
            d(e),
            y / 2,
            f(o),
            i.id,
            `colbase:${i.id}:${e}:${o}`,
          ),
        );
      };
    (v(o, l, o, l),
      v(s, l, s - 1, l),
      v(o, u, o, u - 1),
      v(s, u, s - 1, u - 1));
    let y = (e) => E(i, e - 1, l, e - 1, l - 1) || E(i, e, l, e, l - 1),
      C = (e) => E(i, e - 1, u - 1, e - 1, u) || E(i, e, u - 1, e, u),
      D = (e) => E(i, o, e - 1, o - 1, e - 1) || E(i, o, e, o - 1, e),
      O = (e) => E(i, s - 1, e - 1, s, e - 1) || E(i, s - 1, e, s, e);
    for (let e = o + h; e < s; e += h)
      (y(e) && v(e, l, e, l), C(e) && v(e, u, e, u - 1));
    for (let e = l + h; e < u; e += h)
      (D(e) && v(o, e, o, e), O(e) && v(s, e, s - 1, e));
    (k(i), A(i));
  }
  for (let t of e.cells) t.kind === `corridor` && k(t);
  let j = (e, t) => (p(e, t) ? n[r(e, t)] : null),
    M = (e, t) => {
      let n = e != null,
        r = t != null;
      return (
        n !== r ||
        !!(n && r && e !== t && e.kind !== `corridor` && t.kind !== `corridor`)
      );
    };
  for (let e = 0; e <= l; e++)
    for (let n = 0; n <= c; n++) {
      if (T.has(n + e * (c + 1))) continue;
      let r = j(n - 1, e - 1),
        i = j(n, e - 1),
        a = j(n - 1, e),
        o = j(n, e),
        s = M(r, i) || M(a, o),
        l = M(r, a) || M(i, o);
      if (!s || !l) continue;
      let u = [r, i, a, o],
        p = u.find((e) => e?.kind === `corridor`);
      if (!p || u.some((e) => e?.kind === `room` || e?.kind === `arena`))
        continue;
      let m = u.filter((e) => e != null),
        h = Math.min(...m.map((e) => e.height));
      t.push($(`trim`, v, h, v, d(n), h / 2, f(e), p.id, `ctrim:${n}:${e}`));
    }
}
function c_(e, t, n, r, i, a) {
  let { W: o, D: s, cs: c, lineX: l, lineZ: u } = i,
    d = (e, t) => e >= 0 && e < o && t >= 0 && t < s,
    f = c * 0.6,
    p = 0.08;
  for (let i of e.cells) {
    let e = Jg(i),
      o = qg(i, a) - p / 2 - 0.005;
    for (let a = e.z; a < e.z + e.d; a++)
      for (let s = e.x; s < e.x + e.w; s++) {
        if (!d(s, a) || n[r(s, a)] !== i) continue;
        let e = `finsert:${i.id}:${s}:${a}`;
        mg(e, `ceilplate`) >= 0.08 ||
          t.push(
            $(`floor_insert`, f, p, f, l(s) + c / 2, o, u(a) + c / 2, i.id, e),
          );
      }
  }
}
function l_(e, t, n, r, i) {
  let a = (e, t) =>
    !!e && !!t && e !== t && (e.kind === `corridor`) != (t.kind === `corridor`);
  for (let o = 1; o < n; o++) {
    let n = null,
      s = (e) => {
        (n && e - n.start > 0 && i(`V`, o, n.start, e - n.start, n.a, n.b),
          (n = null));
      };
    for (let i = 0; i < r; i++) {
      let r = e[t(o - 1, i)],
        c = e[t(o, i)];
      if (!a(r, c)) {
        s(i);
        continue;
      }
      (n && (n.a !== r || n.b !== c) && s(i), (n ||= { start: i, a: r, b: c }));
    }
    s(r);
  }
  for (let o = 1; o < r; o++) {
    let r = null,
      s = (e) => {
        (r && e - r.start > 0 && i(`H`, o, r.start, e - r.start, r.a, r.b),
          (r = null));
      };
    for (let i = 0; i < n; i++) {
      let n = e[t(i, o - 1)],
        c = e[t(i, o)];
      if (!a(n, c)) {
        s(i);
        continue;
      }
      (r && (r.a !== n || r.b !== c) && s(i), (r ||= { start: i, a: n, b: c }));
    }
    s(n);
  }
}
var u_ = (e, t) => e.x0 < t.x1 && t.x0 < e.x1 && e.z0 < t.z1 && t.z0 < e.z1;
