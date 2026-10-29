// SceneEditor-NC7_0wmu 46 — error
// Lines 27210-27602 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var nm = [`char`, `uchar`, `short`, `ushort`, `int`, `uint`, `float`, `double`],
  rm = class e {
    constructor({ fileBytes: e }) {
      ((this.header = ``),
        (this.littleEndian = !0),
        (this.elements = {}),
        (this.comments = []),
        (this.data = null),
        (this.numSplats = 0),
        (this.fileBytes = e instanceof ArrayBuffer ? new Uint8Array(e) : e));
    }
    async parseHeader() {
      let e = new ReadableStream({
        start: (e) => {
          (e.enqueue(this.fileBytes.slice(0, 65536)), e.close());
        },
      })
        .pipeThrough(new TextDecoderStream())
        .getReader();
      for (this.header = ``; ;) {
        let { value: t, done: n } = await e.read();
        if (n) throw Error(`Failed to read header`);
        this.header += t;
        let r = this.header.indexOf(`end_header
`);
        if (r >= 0) {
          this.header = this.header.slice(0, r + 11);
          break;
        }
      }
      let t = new TextEncoder().encode(this.header).length;
      ((this.data = new DataView(this.fileBytes.buffer, t)),
        (this.elements = {}));
      let n = null;
      ((this.comments = []),
        this.header
          .trim()
          .split(
            `
`,
          )
          .forEach((e, t) => {
            let r = e.trim();
            if (t === 0) {
              if (r !== `ply`) throw Error(`Invalid PLY header`);
              return;
            }
            if (r.length === 0) return;
            let i = r.split(` `);
            switch (i[0]) {
              case `format`:
                if (i[1] === `binary_little_endian`) this.littleEndian = !0;
                else if (i[1] === `binary_big_endian`) this.littleEndian = !1;
                else throw Error(`Unsupported PLY format: ${i[1]}`);
                if (i[2] !== `1.0`)
                  throw Error(`Unsupported PLY version: ${i[2]}`);
                break;
              case `end_header`:
                break;
              case `comment`:
                this.comments.push(r.slice(8));
                break;
              case `element`: {
                let e = i[1];
                ((n = {
                  name: e,
                  count: Number.parseInt(i[2]),
                  properties: {},
                }),
                  (this.elements[e] = n));
                break;
              }
              case `property`:
                if (n == null)
                  throw Error(`Property must be inside an element`);
                i[1] === `list`
                  ? (n.properties[i[4]] = {
                      isList: !0,
                      type: i[3],
                      countType: i[2],
                    })
                  : (n.properties[i[2]] = { isList: !1, type: i[1] });
                break;
            }
          }),
        this.elements.vertex && (this.numSplats = this.elements.vertex.count));
    }
    parseData(e) {
      let t = 0,
        n = this.data;
      if (n == null) throw Error(`No data to parse`);
      for (let r in this.elements) {
        let i = this.elements[r],
          { count: a, properties: o } = i,
          s = fm(o),
          c = pm(o, this.littleEndian),
          l = e(i) ?? (() => {});
        for (let e = 0; e < a; e++) ((t = c(n, t, s)), l(e, s));
      }
    }
    parseSplats(t, n) {
      if (this.elements.vertex == null) throw Error(`No vertex element found`);
      let r = !1,
        i = [],
        a = 0,
        o = [],
        s = [],
        c = [],
        l,
        u,
        d;
      function f() {
        let e = um[a];
        ((o = [, , ,]
          .fill(null)
          .flatMap((t, n) => [0, 1, 2].map((t, r) => n + (r * e) / 3))),
          (s = [, , , , ,]
            .fill(null)
            .flatMap((t, n) => [0, 1, 2].map((t, r) => 3 + n + (r * e) / 3))),
          (c = Array(7)
            .fill(null)
            .flatMap((t, n) => [0, 1, 2].map((t, r) => 8 + n + (r * e) / 3))),
          (l = a >= 1 ? new Float32Array(9) : void 0),
          (u = a >= 2 ? new Float32Array(15) : void 0),
          (d = a >= 3 ? new Float32Array(21) : void 0));
      }
      function p(e, t) {
        if (!l) throw Error(`Missing sh1`);
        let r = t.f_rest;
        for (let e = 0; e < o.length; e++) l[e] = (r[o[e]] * 8) / 255 - 4;
        if (u)
          for (let e = 0; e < s.length; e++) u[e] = (r[s[e]] * 8) / 255 - 4;
        if (d)
          for (let e = 0; e < c.length; e++) d[e] = (r[c[e]] * 8) / 255 - 4;
        n?.(e, l, u, d);
      }
      function m(e) {
        let {
          min_x: t,
          min_y: n,
          min_z: a,
          max_x: o,
          max_y: s,
          max_z: c,
          min_scale_x: l,
          min_scale_y: u,
          min_scale_z: d,
          max_scale_x: f,
          max_scale_y: p,
          max_scale_z: m,
        } = e.properties;
        if (
          !t ||
          !n ||
          !a ||
          !o ||
          !s ||
          !c ||
          !l ||
          !u ||
          !d ||
          !f ||
          !p ||
          !m
        )
          throw Error(`Missing PLY chunk properties`);
        return (
          (r = !0),
          (e, t) => {
            let {
              min_x: n,
              min_y: r,
              min_z: a,
              max_x: o,
              max_y: s,
              max_z: c,
              min_scale_x: l,
              min_scale_y: u,
              min_scale_z: d,
              max_scale_x: f,
              max_scale_y: p,
              max_scale_z: m,
              min_r: h,
              min_g: g,
              min_b: _,
              max_r: v,
              max_g: y,
              max_b: b,
            } = t;
            i.push({
              min_x: n,
              min_y: r,
              min_z: a,
              max_x: o,
              max_y: s,
              max_z: c,
              min_scale_x: l,
              min_scale_y: u,
              min_scale_z: d,
              max_scale_x: f,
              max_scale_y: p,
              max_scale_z: m,
              min_r: h,
              min_g: g,
              min_b: _,
              max_r: v,
              max_g: y,
              max_b: b,
            });
          }
        );
      }
      function h(e) {
        if (n && e.name === `sh`) return ((a = ym(e.properties)), f(), p);
        if (e.name !== `vertex`) return null;
        let {
          packed_position: r,
          packed_rotation: o,
          packed_scale: s,
          packed_color: c,
        } = e.properties;
        if (!r || !o || !s || !c)
          throw Error(
            `Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color`,
          );
        let l = Math.sqrt(2);
        return (e, n) => {
          let r = i[e >>> 8];
          if (r == null) throw Error(`Missing PLY chunk`);
          let {
              min_x: a,
              min_y: o,
              min_z: s,
              max_x: c,
              max_y: u,
              max_z: d,
              min_scale_x: f,
              min_scale_y: p,
              min_scale_z: m,
              max_scale_x: h,
              max_scale_y: g,
              max_scale_z: _,
              min_r: v,
              min_g: y,
              min_b: b,
              max_r: x,
              max_g: S,
              max_b: C,
            } = r,
            {
              packed_position: w,
              packed_rotation: T,
              packed_scale: E,
              packed_color: D,
            } = n,
            O = (((w >>> 21) & 2047) / 2047) * (c - a) + a,
            k = (((w >>> 11) & 1023) / 1023) * (u - o) + o,
            A = ((w & 2047) / 2047) * (d - s) + s,
            j = (((T >>> 20) & 1023) / 1023 - 0.5) * l,
            M = (((T >>> 10) & 1023) / 1023 - 0.5) * l,
            N = ((T & 1023) / 1023 - 0.5) * l,
            P = Math.sqrt(Math.max(0, 1 - j * j - M * M - N * N)),
            F = T >>> 30,
            ee = F === 0 ? j : F === 1 ? P : M,
            I = F <= 1 ? M : F === 2 ? P : N,
            te = F <= 2 ? N : P,
            ne = F === 0 ? P : j,
            L = Math.exp((((E >>> 21) & 2047) / 2047) * (h - f) + f),
            R = Math.exp((((E >>> 11) & 1023) / 1023) * (g - p) + p),
            re = Math.exp(((E & 2047) / 2047) * (_ - m) + m),
            ie = (((D >>> 24) & 255) / 255) * ((x ?? 1) - (v ?? 0)) + (v ?? 0),
            z = (((D >>> 16) & 255) / 255) * ((S ?? 1) - (y ?? 0)) + (y ?? 0),
            ae = (((D >>> 8) & 255) / 255) * ((C ?? 1) - (b ?? 0)) + (b ?? 0);
          t(e, O, k, A, L, R, re, ee, I, te, ne, (D & 255) / 255, ie, z, ae);
        };
      }
      this.parseData((i) => {
        if (i.name === `chunk`) return m(i);
        if (r) return h(i);
        if (i.name !== `vertex`) return null;
        let {
          x: p,
          y: g,
          z: _,
          scale_0: v,
          scale_1: y,
          scale_2: b,
          rot_0: x,
          rot_1: S,
          rot_2: C,
          rot_3: w,
          opacity: T,
          f_dc_0: E,
          f_dc_1: D,
          f_dc_2: O,
          red: k,
          green: A,
          blue: j,
          alpha: M,
        } = i.properties;
        if (!p || !g || !_) throw Error(`Missing PLY properties: x, y, z`);
        let N = v && y && b,
          P = x && S && C && w,
          F = M == null ? 1 : cm[M.type],
          ee = k == null ? 1 : cm[k.type],
          I = A == null ? 1 : cm[A.type],
          te = j == null ? 1 : cm[j.type];
        return (
          (a = ym(i.properties)),
          f(),
          (r, i) => {
            let a = N ? Math.exp(i.scale_0) : e.defaultPointScale,
              f = N ? Math.exp(i.scale_1) : e.defaultPointScale,
              p = N ? Math.exp(i.scale_2) : e.defaultPointScale,
              m = P ? i.rot_1 : 0,
              h = P ? i.rot_2 : 0,
              g = P ? i.rot_3 : 0,
              _ = P ? i.rot_0 : 1,
              v =
                T == null
                  ? M == null
                    ? 1
                    : i.alpha / F
                  : 1 / (1 + Math.exp(-i.opacity)),
              y =
                E == null ? (k == null ? 1 : i.red / ee) : i.f_dc_0 * im + 0.5,
              b =
                D == null ? (A == null ? 1 : i.green / I) : i.f_dc_1 * im + 0.5,
              x =
                O == null ? (j == null ? 1 : i.blue / te) : i.f_dc_2 * im + 0.5;
            if (
              (t(r, i.x, i.y, i.z, a, f, p, m, h, g, _, v, y, b, x), n && l)
            ) {
              let e = i.f_rest;
              if (l) for (let t = 0; t < o.length; t++) l[t] = e[o[t]];
              if (u) for (let t = 0; t < s.length; t++) u[t] = e[s[t]];
              if (d) for (let t = 0; t < c.length; t++) d[t] = e[c[t]];
              n(r, l, u, d);
            }
          }
        );
      });
    }
    injectRgba(e) {
      let t = 0,
        n = this.data;
      if (n == null) throw Error(`No parsed data`);
      if (e.length !== this.numSplats * 4)
        throw Error(`Invalid RGBA array length`);
      for (let r in this.elements) {
        let { count: i, properties: a } = this.elements[r],
          o = [],
          s = 0,
          c = r === `vertex`;
        if (c) {
          for (let e of [`opacity`, `f_dc_0`, `f_dc_1`, `f_dc_2`])
            if (!a[e] || a[e].type !== `float`)
              throw Error(`Can't injectRgba due to property: ${e}`);
        }
        for (let [r, i] of Object.entries(a))
          if (i.isList)
            o.push(() => {
              let e = am[i.countType](n, t, this.littleEndian);
              ((t += sm[i.countType]), (t += e * sm[i.type]));
            });
          else {
            if (c)
              if (r === `f_dc_0` || r === `f_dc_1` || r === `f_dc_2`) {
                let a = Number.parseInt(r.slice(5));
                o.push(() => {
                  let r = (e[s + a] / 255 - 0.5) / im;
                  om[i.type](n, t, this.littleEndian, r);
                });
              } else
                r === `opacity` &&
                  o.push(() => {
                    let r = Math.max(
                      -100,
                      Math.min(100, -Math.log(1 / (e[s + 3] / 255) - 1)),
                    );
                    om[i.type](n, t, this.littleEndian, r);
                  });
            o.push(() => {
              t += sm[i.type];
            });
          }
        for (let e = 0; e < i; e++) {
          for (let e of o) e();
          c && (s += 4);
        }
      }
    }
  };
