// SceneEditor-NC7_0wmu 47 — push
// Lines 27603-27944 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
rm.defaultPointScale = 0.001;
var im = 0.28209479177387814,
  am = {
    char: (e, t, n) => e.getInt8(t),
    uchar: (e, t, n) => e.getUint8(t),
    short: (e, t, n) => e.getInt16(t, n),
    ushort: (e, t, n) => e.getUint16(t, n),
    int: (e, t, n) => e.getInt32(t, n),
    uint: (e, t, n) => e.getUint32(t, n),
    float: (e, t, n) => e.getFloat32(t, n),
    double: (e, t, n) => e.getFloat64(t, n),
  },
  om = {
    char: (e, t, n, r) => {
      e.setInt8(t, r);
    },
    uchar: (e, t, n, r) => {
      e.setUint8(t, r);
    },
    short: (e, t, n, r) => {
      e.setInt16(t, r, n);
    },
    ushort: (e, t, n, r) => {
      e.setUint16(t, r, n);
    },
    int: (e, t, n, r) => {
      e.setInt32(t, r, n);
    },
    uint: (e, t, n, r) => {
      e.setUint32(t, r, n);
    },
    float: (e, t, n, r) => {
      e.setFloat32(t, r, n);
    },
    double: (e, t, n, r) => {
      e.setFloat64(t, r, n);
    },
  },
  sm = {
    char: 1,
    uchar: 1,
    short: 2,
    ushort: 2,
    int: 4,
    uint: 4,
    float: 4,
    double: 8,
  },
  cm = {
    char: 127,
    uchar: 255,
    short: 32767,
    ushort: 65535,
    int: 2147483647,
    uint: 4294967295,
    float: 1,
    double: 1,
  },
  lm = { 0: 0, 9: 1, 24: 2, 45: 3 },
  um = { 0: 0, 1: 9, 2: 24, 3: 45 },
  dm = /^f_rest_([0-9]{1,2})$/;
function fm(e) {
  let t = {};
  for (let [n, r] of Object.entries(e))
    dm.test(n) ? (t.f_rest = Array(ym(e))) : (t[n] = r.isList ? [] : 0);
  return t;
}
function pm(e, t) {
  return gm(e) ? _m(e, t) : vm(e, t);
}
var mm = (() => {
    try {
      Function(`return 42;`);
    } catch {
      return !1;
    }
    return !0;
  })(),
  hm = /^[a-zA-Z0-9_]+$/;
function gm(e) {
  if (!mm) return !1;
  for (let [t, n] of Object.entries(e))
    if (
      !hm.test(t) ||
      (n.isList && !nm.includes(n.countType)) ||
      !nm.includes(n.type)
    )
      return !1;
  return !0;
}
function _m(e, t) {
  let n = [`let list;`];
  for (let [r, i] of Object.entries(e)) {
    let e = r.match(dm);
    if (e) {
      let r = +e[1];
      n.push(`
        item.f_rest[${r}] = PARSE_FIELD['${i.type}'](data, offset, ${t});
        offset += ${sm[i.type]};
      `);
    } else
      i.isList
        ? n.push(`
        list = item['${r}'];
        list.length = PARSE_FIELD['${i.countType}'](data, offset, ${t});
        offset += ${sm[i.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['${i.type}'](data, offset, ${t});
          offset += ${sm[i.type]};
        }
      `)
        : n.push(`
        item['${r}'] = PARSE_FIELD['${i.type}'](data, offset, ${t});
        offset += ${sm[i.type]};
      `);
  }
  n.push(`return offset;`);
  let r = Function(
    `data`,
    `offset`,
    `item`,
    `PARSE_FIELD`,
    n.join(`
`),
  );
  return (e, t, n) => r(e, t, n, am);
}
function vm(e, t) {
  let n = [];
  for (let [r, i] of Object.entries(e)) {
    let e = r.match(dm);
    if (e) {
      let r = +e[1];
      n.push(
        (e, n, a) => ((a.f_rest[r] = am[i.type](e, n, t)), n + sm[i.type]),
      );
    } else
      i.isList
        ? n.push((e, n, a) => {
            let o = a[r];
            o.length = am[i.countType](e, n, t);
            let s = n + sm[i.countType];
            for (let n = 0; n < o.length; n++)
              ((o[n] = am[i.type](e, s, t)), (s += sm[i.type]));
            return s;
          })
        : n.push((e, n, a) => ((a[r] = am[i.type](e, n, t)), n + sm[i.type]));
  }
  return (e, t, r) => {
    let i = t;
    for (let t = 0; t < n.length; t++) i = n[t](e, i, r);
    return i;
  };
}
function ym(e) {
  let t = 0;
  for (; e[`f_rest_${t}`];) t += 1;
  let n = lm[t];
  if (n == null) throw Error(`Unsupported number of SH coefficients: ${t}`);
  return n;
}
var bm = class extends Ke {
  constructor(e) {
    (super(e), (this.fileLoader = new Ye(e)));
  }
  load(e, t, n, r) {
    return this.loadInternal({ url: e, onLoad: t, onProgress: n, onError: r });
  }
  async loadAsync(e, t) {
    return new Promise((n, r) => {
      this.load(
        e,
        (e) => {
          n(e);
        },
        t,
        r,
      );
    });
  }
  parse(e) {
    return new Qp({ packedSplats: e });
  }
  loadInternal({
    packedSplats: e,
    extSplats: t,
    url: n,
    fileBytes: r,
    fileType: i,
    fileName: a,
    stream: o,
    streamLength: s,
    onLoad: c,
    onProgress: l,
    onError: u,
    lod: d,
    nonLod: f,
    lodAbove: p,
    lodBase: m,
  }) {
    r instanceof ArrayBuffer && (r = new Uint8Array(r));
    let h = r ? void 0 : this.manager.resolveURL((this.path ?? ``) + (n ?? ``)),
      g = o?.getReader();
    (this.manager.itemStart(h ?? ``),
      Uu.withWorker(async (n) => {
        let u = e?.lod ?? t?.lod;
        u && (d = u);
        let _ = e?.nonLod ?? t?.nonLod;
        _ !== void 0 && (f = _);
        let v = async (e) => {
            let { loaded: t, total: r } = e;
            if (
              (t !== void 0 &&
                l &&
                l(
                  new ProgressEvent(`progress`, {
                    lengthComputable: r !== 0,
                    loaded: t,
                    total: r,
                  }),
                ),
              e.nextChunk)
            ) {
              let e;
              if (!g) e = new Uint8Array();
              else {
                let { done: t, value: n } = await g.read();
                t
                  ? (g.releaseLock(), (g = void 0), (e = new Uint8Array()))
                  : (e = n);
              }
              n.call(`nextChunk`, { chunk: e });
            }
          },
          y = h ? new URL(h, window.location.href).toString() : void 0,
          b = await n.call(
            t ? `loadExtSplats` : `loadPackedSplats`,
            {
              url: y,
              requestHeader: this.requestHeader,
              withCredentials: this.withCredentials,
              fileBytes: r?.slice(),
              fileType: i,
              pathName: h || a,
              chunked: o !== void 0,
              chunkedLength: s,
              encoding: e?.splatEncoding,
              lod: d,
              lodBase: m,
              nonLod: f,
              lodAbove: p,
            },
            { onStatus: v },
          );
        if (
          (b.lodSplats &&
            (t
              ? (b.lodSplats = new yf({ ...b.lodSplats }))
              : (b.lodSplats = new Dm({
                  ...b.lodSplats,
                  maxSplats: e?.maxSplats,
                }))),
          t)
        ) {
          let e = { ...b };
          (t.initialize(e), c?.(t));
        } else {
          let t = { ...b };
          e ? (e.initialize(t), c?.(e)) : c?.(new Dm(t));
        }
      })
        .catch((e) => {
          (this.manager.itemError(h ?? ``), u?.(e));
        })
        .finally(() => {
          this.manager.itemEnd(h ?? ``);
        }));
  }
  async loadInternalAsync({
    packedSplats: e,
    extSplats: t,
    url: n,
    fileBytes: r,
    fileType: i,
    fileName: a,
    stream: o,
    streamLength: s,
    onProgress: c,
    lod: l,
    nonLod: u,
    lodAbove: d,
    lodBase: f,
  }) {
    return new Promise((p, m) => {
      this.loadInternal({
        packedSplats: e,
        extSplats: t,
        url: n,
        fileBytes: r,
        fileType: i,
        fileName: a,
        stream: o,
        streamLength: s,
        onLoad: p,
        onProgress: c,
        onError: m,
        lod: l,
        nonLod: u,
        lodAbove: d,
        lodBase: f,
      });
    });
  }
};
function xm(e) {
  let t = new DataView(e.buffer).getUint32(0, !0);
  if ((t & 16777215) == 7957616) return sl.PLY;
  if ((t & 16777215) == 559903) {
    let t = ku(e, 4);
    return new DataView(t.buffer).getUint32(0, !0) === 1347635022
      ? sl.SPZ
      : void 0;
  }
  if (t === 67324752) return Tm(e) ? sl.PCSOGSZIP : void 0;
  if (t === 809779538) return sl.RAD;
}
function Sm(e) {
  let t = e.split(/[?#]/, 1)[0],
    n = Math.max(t.lastIndexOf(`/`), t.lastIndexOf(`\\`)),
    r = t.slice(n + 1),
    i = r.lastIndexOf(`.`);
  return i <= 0 || i === r.length - 1 ? `` : r.slice(i + 1).toLowerCase();
}
function Cm(e) {
  let t = Sm(e);
  if (t === `ply`) return sl.PLY;
  if (t === `spz`) return sl.SPZ;
  if (t === `splat`) return sl.SPLAT;
  if (t === `ksplat`) return sl.KSPLAT;
  if (t === `sog`) return sl.PCSOGSZIP;
  if (t === `rad`) return sl.RAD;
}
