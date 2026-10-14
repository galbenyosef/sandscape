// Create-ea24k1TY 176 — path
// Lines 58902-59250 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function mJ(e) {
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
var hJ = [`history`, `path`, `basename`, `stem`, `extname`, `dirname`],
  gJ = class {
    constructor(e) {
      let t;
      ((t = e
        ? fJ(e)
          ? { path: e }
          : typeof e == `string` || bJ(e)
            ? { value: e }
            : e
        : {}),
        (this.cwd = `cwd` in t ? `` : uJ.cwd()),
        (this.data = {}),
        (this.history = []),
        (this.messages = []),
        this.value,
        this.map,
        this.result,
        this.stored);
      let n = -1;
      for (; ++n < hJ.length;) {
        let e = hJ[n];
        e in t &&
          t[e] !== void 0 &&
          t[e] !== null &&
          (this[e] = e === `history` ? [...t[e]] : t[e]);
      }
      let r;
      for (r in t) hJ.includes(r) || (this[r] = t[r]);
    }
    get basename() {
      return typeof this.path == `string` ? nJ.basename(this.path) : void 0;
    }
    set basename(e) {
      (vJ(e, `basename`),
        _J(e, `basename`),
        (this.path = nJ.join(this.dirname || ``, e)));
    }
    get dirname() {
      return typeof this.path == `string` ? nJ.dirname(this.path) : void 0;
    }
    set dirname(e) {
      (yJ(this.basename, `dirname`),
        (this.path = nJ.join(e || ``, this.basename)));
    }
    get extname() {
      return typeof this.path == `string` ? nJ.extname(this.path) : void 0;
    }
    set extname(e) {
      if ((_J(e, `extname`), yJ(this.dirname, `extname`), e)) {
        if (e.codePointAt(0) !== 46)
          throw Error("`extname` must start with `.`");
        if (e.includes(`.`, 1))
          throw Error("`extname` cannot contain multiple dots");
      }
      this.path = nJ.join(this.dirname, this.stem + (e || ``));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(e) {
      (fJ(e) && (e = pJ(e)),
        vJ(e, `path`),
        this.path !== e && this.history.push(e));
    }
    get stem() {
      return typeof this.path == `string`
        ? nJ.basename(this.path, this.extname)
        : void 0;
    }
    set stem(e) {
      (vJ(e, `stem`),
        _J(e, `stem`),
        (this.path = nJ.join(this.dirname || ``, e + (this.extname || ``))));
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
      let r = new iU(e, t, n);
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
function _J(e, t) {
  if (e && e.includes(nJ.sep))
    throw Error(
      "`" + t + "` cannot be a path: did not expect `" + nJ.sep + "`",
    );
}
function vJ(e, t) {
  if (!e) throw Error("`" + t + "` cannot be empty");
}
function yJ(e, t) {
  if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function bJ(e) {
  return !!(
    e &&
    typeof e == `object` &&
    `byteLength` in e &&
    `byteOffset` in e
  );
}
var xJ = function (e) {
    let t = this.constructor.prototype,
      n = t[e],
      r = function () {
        return n.apply(r, arguments);
      };
    return (Object.setPrototypeOf(r, t), r);
  },
  SJ = e(Qq(), 1),
  CJ = {}.hasOwnProperty,
  wJ = new (class e extends xJ {
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
        (this.transformers = eJ()));
    }
    copy() {
      let t = new e(),
        n = -1;
      for (; ++n < this.attachers.length;) {
        let e = this.attachers[n];
        t.use(...e);
      }
      return (t.data((0, SJ.default)(!0, {}, this.namespace)), t);
    }
    data(e, t) {
      return typeof e == `string`
        ? arguments.length === 2
          ? (DJ(`data`, this.frozen), (this.namespace[e] = t), this)
          : (CJ.call(this.namespace, e) && this.namespace[e]) || void 0
        : e
          ? (DJ(`data`, this.frozen), (this.namespace = e), this)
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
      let t = AJ(e),
        n = this.parser || this.Parser;
      return (TJ(`parse`, n), n(String(t), t));
    }
    process(e, t) {
      let n = this;
      return (
        this.freeze(),
        TJ(`process`, this.parser || this.Parser),
        EJ(`process`, this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r)
      );
      function r(r, i) {
        let a = AJ(e),
          o = n.parse(a);
        n.run(o, a, function (e, t, r) {
          if (e || !t || !r) return s(e);
          let i = t,
            a = n.stringify(i, r);
          (MJ(a) ? (r.value = a) : (r.result = a), s(e, r));
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
        TJ(`processSync`, this.parser || this.Parser),
        EJ(`processSync`, this.compiler || this.Compiler),
        this.process(e, r),
        kJ(`processSync`, `process`, t),
        n
      );
      function r(e, r) {
        ((t = !0), Zq(e), (n = r));
      }
    }
    run(e, t, n) {
      (OJ(e), this.freeze());
      let r = this.transformers;
      return (
        !n && typeof t == `function` && ((n = t), (t = void 0)),
        n ? i(void 0, n) : new Promise(i)
      );
      function i(i, a) {
        let o = AJ(t);
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
      return (this.run(e, t, i), kJ(`runSync`, `run`, n), r);
      function i(e, t) {
        (Zq(e), (r = t), (n = !0));
      }
    }
    stringify(e, t) {
      this.freeze();
      let n = AJ(t),
        r = this.compiler || this.Compiler;
      return (EJ(`stringify`, r), OJ(e), r(e, n));
    }
    use(e, ...t) {
      let n = this.attachers,
        r = this.namespace;
      if ((DJ(`use`, this.frozen), e != null))
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
            (r.settings = (0, SJ.default)(!0, r.settings, e.settings)));
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
          ($q(o) && $q(r) && (r = (0, SJ.default)(!0, o, r)),
            (n[i] = [e, r, ...a]));
        }
      }
    }
  })().freeze();
function TJ(e, t) {
  if (typeof t != `function`)
    throw TypeError("Cannot `" + e + "` without `parser`");
}
function EJ(e, t) {
  if (typeof t != `function`)
    throw TypeError("Cannot `" + e + "` without `compiler`");
}
function DJ(e, t) {
  if (t)
    throw Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function OJ(e) {
  if (!$q(e) || typeof e.type != `string`)
    throw TypeError("Expected node, got `" + e + "`");
}
function kJ(e, t, n) {
  if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function AJ(e) {
  return jJ(e) ? e : new gJ(e);
}
function jJ(e) {
  return !!(e && typeof e == `object` && `message` in e && `messages` in e);
}
