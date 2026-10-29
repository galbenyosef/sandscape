// i18n-V29EdUIm 01 — options
// Lines 1-350 of readable/assets/i18n-V29EdUIm.pretty.js (statement-aligned).
import { i as e, o as t } from "./useTranslation-BdauNPOZ.js";
var n = {
    type: `3rdParty`,
    init(n) {
      (t(n.options.react), e(n));
    },
  },
  r = (e) => typeof e == `string`,
  i = () => {
    let e,
      t,
      n = new Promise((n, r) => {
        ((e = n), (t = r));
      });
    return ((n.resolve = e), (n.reject = t), n);
  },
  a = (e) => (e == null ? `` : `` + e),
  o = (e, t, n) => {
    e.forEach((e) => {
      t[e] && (n[e] = t[e]);
    });
  },
  s = /###/g,
  c = (e) => (e && e.indexOf(`###`) > -1 ? e.replace(s, `.`) : e),
  l = (e) => !e || r(e),
  u = (e, t, n) => {
    let i = r(t) ? t.split(`.`) : t,
      a = 0;
    for (; a < i.length - 1;) {
      if (l(e)) return {};
      let t = c(i[a]);
      (!e[t] && n && (e[t] = new n()),
        (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
        ++a);
    }
    return l(e) ? {} : { obj: e, k: c(i[a]) };
  },
  d = (e, t, n) => {
    let { obj: r, k: i } = u(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[i] = n;
      return;
    }
    let a = t[t.length - 1],
      o = t.slice(0, t.length - 1),
      s = u(e, o, Object);
    for (; s.obj === void 0 && o.length;)
      ((a = `${o[o.length - 1]}.${a}`),
        (o = o.slice(0, o.length - 1)),
        (s = u(e, o, Object)),
        s?.obj && s.obj[`${s.k}.${a}`] !== void 0 && (s.obj = void 0));
    s.obj[`${s.k}.${a}`] = n;
  },
  f = (e, t, n, r) => {
    let { obj: i, k: a } = u(e, t, Object);
    ((i[a] = i[a] || []), i[a].push(n));
  },
  p = (e, t) => {
    let { obj: n, k: r } = u(e, t);
    if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
  },
  m = (e, t, n) => {
    let r = p(e, n);
    return r === void 0 ? p(t, n) : r;
  },
  h = (e, t, n) => {
    for (let i in t)
      i !== `__proto__` &&
        i !== `constructor` &&
        (i in e
          ? r(e[i]) ||
            e[i] instanceof String ||
            r(t[i]) ||
            t[i] instanceof String
            ? n && (e[i] = t[i])
            : h(e[i], t[i], n)
          : (e[i] = t[i]));
    return e;
  },
  g = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, `\\$&`),
  _ = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`,
    "/": `&#x2F;`,
  },
  v = (e) => (r(e) ? e.replace(/[&<>"'\/]/g, (e) => _[e]) : e),
  y = class {
    constructor(e) {
      ((this.capacity = e),
        (this.regExpMap = new Map()),
        (this.regExpQueue = []));
    }
    getRegExp(e) {
      let t = this.regExpMap.get(e);
      if (t !== void 0) return t;
      let n = new RegExp(e);
      return (
        this.regExpQueue.length === this.capacity &&
          this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(e, n),
        this.regExpQueue.push(e),
        n
      );
    }
  },
  b = [` `, `,`, `?`, `!`, `;`],
  x = new y(20),
  S = (e, t, n) => {
    ((t ||= ``), (n ||= ``));
    let r = b.filter((e) => t.indexOf(e) < 0 && n.indexOf(e) < 0);
    if (r.length === 0) return !0;
    let i = x.getRegExp(`(${r.map((e) => (e === `?` ? `\\?` : e)).join(`|`)})`),
      a = !i.test(e);
    if (!a) {
      let t = e.indexOf(n);
      t > 0 && !i.test(e.substring(0, t)) && (a = !0);
    }
    return a;
  },
  C = (e, t, n = `.`) => {
    if (!e) return;
    if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    let r = t.split(n),
      i = e;
    for (let e = 0; e < r.length;) {
      if (!i || typeof i != `object`) return;
      let t,
        a = ``;
      for (let o = e; o < r.length; ++o)
        if ((o !== e && (a += n), (a += r[o]), (t = i[a]), t !== void 0)) {
          if (
            [`string`, `number`, `boolean`].indexOf(typeof t) > -1 &&
            o < r.length - 1
          )
            continue;
          e += o - e + 1;
          break;
        }
      i = t;
    }
    return i;
  },
  w = (e) => e?.replace(/_/g, `-`),
  T = {
    type: `logger`,
    log(e) {
      this.output(`log`, e);
    },
    warn(e) {
      this.output(`warn`, e);
    },
    error(e) {
      this.output(`error`, e);
    },
    output(e, t) {
      console?.[e]?.apply?.(console, t);
    },
  },
  E = new (class e {
    constructor(e, t = {}) {
      this.init(e, t);
    }
    init(e, t = {}) {
      ((this.prefix = t.prefix || `i18next:`),
        (this.logger = e || T),
        (this.options = t),
        (this.debug = t.debug));
    }
    log(...e) {
      return this.forward(e, `log`, ``, !0);
    }
    warn(...e) {
      return this.forward(e, `warn`, ``, !0);
    }
    error(...e) {
      return this.forward(e, `error`, ``);
    }
    deprecate(...e) {
      return this.forward(e, `warn`, `WARNING DEPRECATED: `, !0);
    }
    forward(e, t, n, i) {
      return i && !this.debug
        ? null
        : (r(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
    }
    create(t) {
      return new e(this.logger, {
        prefix: `${this.prefix}:${t}:`,
        ...this.options,
      });
    }
    clone(t) {
      return (
        (t ||= this.options),
        (t.prefix = t.prefix || this.prefix),
        new e(this.logger, t)
      );
    }
  })(),
  D = class {
    constructor() {
      this.observers = {};
    }
    on(e, t) {
      return (
        e.split(` `).forEach((e) => {
          this.observers[e] || (this.observers[e] = new Map());
          let n = this.observers[e].get(t) || 0;
          this.observers[e].set(t, n + 1);
        }),
        this
      );
    }
    off(e, t) {
      if (this.observers[e]) {
        if (!t) {
          delete this.observers[e];
          return;
        }
        this.observers[e].delete(t);
      }
    }
    emit(e, ...t) {
      (this.observers[e] &&
        Array.from(this.observers[e].entries()).forEach(([e, n]) => {
          for (let r = 0; r < n; r++) e(...t);
        }),
        this.observers[`*`] &&
          Array.from(this.observers[`*`].entries()).forEach(([n, r]) => {
            for (let i = 0; i < r; i++) n.apply(n, [e, ...t]);
          }));
    }
  },
  O = class extends D {
    constructor(e, t = { ns: [`translation`], defaultNS: `translation` }) {
      (super(),
        (this.data = e || {}),
        (this.options = t),
        this.options.keySeparator === void 0 &&
          (this.options.keySeparator = `.`),
        this.options.ignoreJSONStructure === void 0 &&
          (this.options.ignoreJSONStructure = !0));
    }
    addNamespaces(e) {
      this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
    }
    removeNamespaces(e) {
      let t = this.options.ns.indexOf(e);
      t > -1 && this.options.ns.splice(t, 1);
    }
    getResource(e, t, n, i = {}) {
      let a =
          i.keySeparator === void 0
            ? this.options.keySeparator
            : i.keySeparator,
        o =
          i.ignoreJSONStructure === void 0
            ? this.options.ignoreJSONStructure
            : i.ignoreJSONStructure,
        s;
      e.indexOf(`.`) > -1
        ? (s = e.split(`.`))
        : ((s = [e, t]),
          n &&
            (Array.isArray(n)
              ? s.push(...n)
              : r(n) && a
                ? s.push(...n.split(a))
                : s.push(n)));
      let c = p(this.data, s);
      return (
        !c &&
          !t &&
          !n &&
          e.indexOf(`.`) > -1 &&
          ((e = s[0]), (t = s[1]), (n = s.slice(2).join(`.`))),
        c || !o || !r(n) ? c : C(this.data?.[e]?.[t], n, a)
      );
    }
    addResource(e, t, n, r, i = { silent: !1 }) {
      let a =
          i.keySeparator === void 0
            ? this.options.keySeparator
            : i.keySeparator,
        o = [e, t];
      (n && (o = o.concat(a ? n.split(a) : n)),
        e.indexOf(`.`) > -1 && ((o = e.split(`.`)), (r = t), (t = o[1])),
        this.addNamespaces(t),
        d(this.data, o, r),
        i.silent || this.emit(`added`, e, t, n, r));
    }
    addResources(e, t, n, i = { silent: !1 }) {
      for (let i in n)
        (r(n[i]) || Array.isArray(n[i])) &&
          this.addResource(e, t, i, n[i], { silent: !0 });
      i.silent || this.emit(`added`, e, t, n);
    }
    addResourceBundle(e, t, n, r, i, a = { silent: !1, skipCopy: !1 }) {
      let o = [e, t];
      (e.indexOf(`.`) > -1 &&
        ((o = e.split(`.`)), (r = n), (n = t), (t = o[1])),
        this.addNamespaces(t));
      let s = p(this.data, o) || {};
      (a.skipCopy || (n = JSON.parse(JSON.stringify(n))),
        r ? h(s, n, i) : (s = { ...s, ...n }),
        d(this.data, o, s),
        a.silent || this.emit(`added`, e, t, n));
    }
    removeResourceBundle(e, t) {
      (this.hasResourceBundle(e, t) && delete this.data[e][t],
        this.removeNamespaces(t),
        this.emit(`removed`, e, t));
    }
    hasResourceBundle(e, t) {
      return this.getResource(e, t) !== void 0;
    }
    getResourceBundle(e, t) {
      return ((t ||= this.options.defaultNS), this.getResource(e, t));
    }
    getDataByLanguage(e) {
      return this.data[e];
    }
    hasLanguageSomeTranslations(e) {
      let t = this.getDataByLanguage(e);
      return !!((t && Object.keys(t)) || []).find(
        (e) => t[e] && Object.keys(t[e]).length > 0,
      );
    }
    toJSON() {
      return this.data;
    }
  },
  k = {
    processors: {},
    addPostProcessor(e) {
      this.processors[e.name] = e;
    },
    handle(e, t, n, r, i) {
      return (
        e.forEach((e) => {
          t = this.processors[e]?.process(t, n, r, i) ?? t;
        }),
        t
      );
    },
  },
  A = Symbol(`i18next/PATH_KEY`);
