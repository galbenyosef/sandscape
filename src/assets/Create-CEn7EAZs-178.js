// Create-CEn7EAZs 178 — path
// Lines 59685-60033 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function AJ(e) {
  if (e.hostname !== ``) {
    let e = TypeError(`File URL host must be "localhost" or empty on darwin`);
    throw ((e.code = `ERR_INVALID_FILE_URL_HOST`), e);
  }
  let t = e.pathname,
    n = -1;
  for (; ++n < t.length;)
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      let e = t.codePointAt(n + 2);
      if (e === 70 || e === 102) {
        let e = TypeError(
          `File URL path must not include encoded / characters`,
        );
        throw ((e.code = `ERR_INVALID_FILE_URL_PATH`), e);
      }
    }
  return decodeURIComponent(t);
}
var jJ = [`history`, `path`, `basename`, `stem`, `extname`, `dirname`],
  MJ = class {
    constructor(e) {
      let t;
      ((t = e
        ? OJ(e)
          ? { path: e }
          : typeof e == `string` || IJ(e)
            ? { value: e }
            : e
        : {}),
        (this.cwd = `cwd` in t ? `` : EJ.cwd()),
        (this.data = {}),
        (this.history = []),
        (this.messages = []),
        this.value,
        this.map,
        this.result,
        this.stored);
      let n = -1;
      for (; ++n < jJ.length;) {
        let e = jJ[n];
        e in t &&
          t[e] !== void 0 &&
          t[e] !== null &&
          (this[e] = e === `history` ? [...t[e]] : t[e]);
      }
      let r;
      for (r in t) jJ.includes(r) || (this[r] = t[r]);
    }
    get basename() {
      return typeof this.path == `string` ? vJ.basename(this.path) : void 0;
    }
    set basename(e) {
      (PJ(e, `basename`),
        NJ(e, `basename`),
        (this.path = vJ.join(this.dirname || ``, e)));
    }
    get dirname() {
      return typeof this.path == `string` ? vJ.dirname(this.path) : void 0;
    }
    set dirname(e) {
      (FJ(this.basename, `dirname`),
        (this.path = vJ.join(e || ``, this.basename)));
    }
    get extname() {
      return typeof this.path == `string` ? vJ.extname(this.path) : void 0;
    }
    set extname(e) {
      if ((NJ(e, `extname`), FJ(this.dirname, `extname`), e)) {
        if (e.codePointAt(0) !== 46)
          throw Error("`extname` must start with `.`");
        if (e.includes(`.`, 1))
          throw Error("`extname` cannot contain multiple dots");
      }
      this.path = vJ.join(this.dirname, this.stem + (e || ``));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(e) {
      (OJ(e) && (e = kJ(e)),
        PJ(e, `path`),
        this.path !== e && this.history.push(e));
    }
    get stem() {
      return typeof this.path == `string`
        ? vJ.basename(this.path, this.extname)
        : void 0;
    }
    set stem(e) {
      (PJ(e, `stem`),
        NJ(e, `stem`),
        (this.path = vJ.join(this.dirname || ``, e + (this.extname || ``))));
    }
    fail(e, t, n) {
      let r = this.message(e, t, n);
      throw ((r.fatal = !0), r);
    }
    info(e, t, n) {
      let r = this.message(e, t, n);
      return ((r.fatal = void 0), r);
    }
    message(e, t, n) {
      let r = new bU(e, t, n);
      return (
        this.path &&
          ((r.name = this.path + `:` + r.name), (r.file = this.path)),
        (r.fatal = !1),
        this.messages.push(r),
        r
      );
    }
    toString(e) {
      return this.value === void 0
        ? ``
        : typeof this.value == `string`
          ? this.value
          : new TextDecoder(e || void 0).decode(this.value);
    }
  };
function NJ(e, t) {
  if (e && e.includes(vJ.sep))
    throw Error(
      "`" + t + "` cannot be a path: did not expect `" + vJ.sep + "`",
    );
}
function PJ(e, t) {
  if (!e) throw Error("`" + t + "` cannot be empty");
}
function FJ(e, t) {
  if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function IJ(e) {
  return !!(
    e &&
    typeof e == `object` &&
    `byteLength` in e &&
    `byteOffset` in e
  );
}
var LJ = function (e) {
    let t = this.constructor.prototype,
      n = t[e],
      r = function () {
        return n.apply(r, arguments);
      };
    return (Object.setPrototypeOf(r, t), r);
  },
  RJ = e(mJ(), 1),
  zJ = {}.hasOwnProperty,
  BJ = new (class e extends LJ {
    constructor() {
      (super(`copy`),
        (this.Compiler = void 0),
        (this.Parser = void 0),
        (this.attachers = []),
        (this.compiler = void 0),
        (this.freezeIndex = -1),
        (this.frozen = void 0),
        (this.namespace = {}),
        (this.parser = void 0),
        (this.transformers = gJ()));
    }
    copy() {
      let t = new e(),
        n = -1;
      for (; ++n < this.attachers.length;) {
        let e = this.attachers[n];
        t.use(...e);
      }
      return (t.data((0, RJ.default)(!0, {}, this.namespace)), t);
    }
    data(e, t) {
      return typeof e == `string`
        ? arguments.length === 2
          ? (UJ(`data`, this.frozen), (this.namespace[e] = t), this)
          : (zJ.call(this.namespace, e) && this.namespace[e]) || void 0
        : e
          ? (UJ(`data`, this.frozen), (this.namespace = e), this)
          : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      let e = this;
      for (; ++this.freezeIndex < this.attachers.length;) {
        let [t, ...n] = this.attachers[this.freezeIndex];
        if (n[0] === !1) continue;
        n[0] === !0 && (n[0] = void 0);
        let r = t.call(e, ...n);
        typeof r == `function` && this.transformers.use(r);
      }
      return ((this.frozen = !0), (this.freezeIndex = 1 / 0), this);
    }
    parse(e) {
      this.freeze();
      let t = KJ(e),
        n = this.parser || this.Parser;
      return (VJ(`parse`, n), n(String(t), t));
    }
    process(e, t) {
      let n = this;
      return (
        this.freeze(),
        VJ(`process`, this.parser || this.Parser),
        HJ(`process`, this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r)
      );
      function r(r, i) {
        let a = KJ(e),
          o = n.parse(a);
        n.run(o, a, function (e, t, r) {
          if (e || !t || !r) return s(e);
          let i = t,
            a = n.stringify(i, r);
          (JJ(a) ? (r.value = a) : (r.result = a), s(e, r));
        });
        function s(e, n) {
          e || !n ? i(e) : r ? r(n) : t(void 0, n);
        }
      }
    }
    processSync(e) {
      let t = !1,
        n;
      return (
        this.freeze(),
        VJ(`processSync`, this.parser || this.Parser),
        HJ(`processSync`, this.compiler || this.Compiler),
        this.process(e, r),
        GJ(`processSync`, `process`, t),
        n
      );
      function r(e, r) {
        ((t = !0), pJ(e), (n = r));
      }
    }
    run(e, t, n) {
      (WJ(e), this.freeze());
      let r = this.transformers;
      return (
        !n && typeof t == `function` && ((n = t), (t = void 0)),
        n ? i(void 0, n) : new Promise(i)
      );
      function i(i, a) {
        let o = KJ(t);
        r.run(e, o, s);
        function s(t, r, o) {
          let s = r || e;
          t ? a(t) : i ? i(s) : n(void 0, s, o);
        }
      }
    }
    runSync(e, t) {
      let n = !1,
        r;
      return (this.run(e, t, i), GJ(`runSync`, `run`, n), r);
      function i(e, t) {
        (pJ(e), (r = t), (n = !0));
      }
    }
    stringify(e, t) {
      this.freeze();
      let n = KJ(t),
        r = this.compiler || this.Compiler;
      return (HJ(`stringify`, r), WJ(e), r(e, n));
    }
    use(e, ...t) {
      let n = this.attachers,
        r = this.namespace;
      if ((UJ(`use`, this.frozen), e != null))
        if (typeof e == `function`) s(e, t);
        else if (typeof e == `object`) Array.isArray(e) ? o(e) : a(e);
        else throw TypeError("Expected usable value, not `" + e + "`");
      return this;
      function i(e) {
        if (typeof e == `function`) s(e, []);
        else if (typeof e == `object`)
          if (Array.isArray(e)) {
            let [t, ...n] = e;
            s(t, n);
          } else a(e);
        else throw TypeError("Expected usable value, not `" + e + "`");
      }
      function a(e) {
        if (!(`plugins` in e) && !(`settings` in e))
          throw Error(
            "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
          );
        (o(e.plugins),
          e.settings &&
            (r.settings = (0, RJ.default)(!0, r.settings, e.settings)));
      }
      function o(e) {
        let t = -1;
        if (e != null)
          if (Array.isArray(e))
            for (; ++t < e.length;) {
              let n = e[t];
              i(n);
            }
          else throw TypeError("Expected a list of plugins, not `" + e + "`");
      }
      function s(e, t) {
        let r = -1,
          i = -1;
        for (; ++r < n.length;)
          if (n[r][0] === e) {
            i = r;
            break;
          }
        if (i === -1) n.push([e, ...t]);
        else if (t.length > 0) {
          let [r, ...a] = t,
            o = n[i][1];
          (hJ(o) && hJ(r) && (r = (0, RJ.default)(!0, o, r)),
            (n[i] = [e, r, ...a]));
        }
      }
    }
  })().freeze();
function VJ(e, t) {
  if (typeof t != `function`)
    throw TypeError("Cannot `" + e + "` without `parser`");
}
function HJ(e, t) {
  if (typeof t != `function`)
    throw TypeError("Cannot `" + e + "` without `compiler`");
}
function UJ(e, t) {
  if (t)
    throw Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function WJ(e) {
  if (!hJ(e) || typeof e.type != `string`)
    throw TypeError("Expected node, got `" + e + "`");
}
function GJ(e, t, n) {
  if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function KJ(e) {
  return qJ(e) ? e : new MJ(e);
}
function qJ(e) {
  return !!(e && typeof e == `object` && `message` in e && `messages` in e);
}
