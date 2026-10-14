// i18n-Ddyvvowz 03 — options
// Lines 375-2188 of readable/assets/i18n-Ddyvvowz.pretty.js (statement-aligned).
var te = {},
  M = (e) => !r(e) && typeof e != `boolean` && typeof e != `number`,
  N = class e extends D {
    constructor(e, t = {}) {
      (super(),
        o(
          [
            `resourceStore`,
            `languageUtils`,
            `pluralResolver`,
            `interpolator`,
            `backendConnector`,
            `i18nFormat`,
            `utils`,
          ],
          e,
          this,
        ),
        (this.options = t),
        this.options.keySeparator === void 0 &&
          (this.options.keySeparator = `.`),
        (this.logger = E.create(`translator`)));
    }
    changeLanguage(e) {
      e && (this.language = e);
    }
    exists(e, t = { interpolation: {} }) {
      let n = { ...t };
      if (e == null) return !1;
      let r = this.resolve(e, n);
      if (r?.res === void 0) return !1;
      let i = M(r.res);
      return !(n.returnObjects === !1 && i);
    }
    extractFromKey(e, t) {
      let n =
        t.nsSeparator === void 0 ? this.options.nsSeparator : t.nsSeparator;
      n === void 0 && (n = `:`);
      let i =
          t.keySeparator === void 0
            ? this.options.keySeparator
            : t.keySeparator,
        a = t.ns || this.options.defaultNS || [],
        o = n && e.indexOf(n) > -1,
        s =
          !this.options.userDefinedKeySeparator &&
          !t.keySeparator &&
          !this.options.userDefinedNsSeparator &&
          !t.nsSeparator &&
          !S(e, n, i);
      if (o && !s) {
        let t = e.match(this.interpolator.nestingRegexp);
        if (t && t.length > 0) return { key: e, namespaces: r(a) ? [a] : a };
        let o = e.split(n);
        ((n !== i || (n === i && this.options.ns.indexOf(o[0]) > -1)) &&
          (a = o.shift()),
          (e = o.join(i)));
      }
      return { key: e, namespaces: r(a) ? [a] : a };
    }
    translate(t, n, i) {
      let a = typeof n == `object` ? { ...n } : n;
      if (
        (typeof a != `object` &&
          this.options.overloadTranslationOptionHandler &&
          (a = this.options.overloadTranslationOptionHandler(arguments)),
        typeof a == `object` && (a = { ...a }),
        (a ||= {}),
        t == null)
      )
        return ``;
      (typeof t == `function` && (t = j(t, { ...this.options, ...a })),
        Array.isArray(t) || (t = [String(t)]),
        (t = t.map((e) =>
          typeof e == `function` ? j(e, { ...this.options, ...a }) : String(e),
        )));
      let o =
          a.returnDetails === void 0
            ? this.options.returnDetails
            : a.returnDetails,
        s =
          a.keySeparator === void 0
            ? this.options.keySeparator
            : a.keySeparator,
        { key: c, namespaces: l } = this.extractFromKey(t[t.length - 1], a),
        u = l[l.length - 1],
        d = a.nsSeparator === void 0 ? this.options.nsSeparator : a.nsSeparator;
      d === void 0 && (d = `:`);
      let f = a.lng || this.language,
        p = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (f?.toLowerCase() === `cimode`)
        return p
          ? o
            ? {
                res: `${u}${d}${c}`,
                usedKey: c,
                exactUsedKey: c,
                usedLng: f,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(a),
              }
            : `${u}${d}${c}`
          : o
            ? {
                res: c,
                usedKey: c,
                exactUsedKey: c,
                usedLng: f,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(a),
              }
            : c;
      let m = this.resolve(t, a),
        h = m?.res,
        g = m?.usedKey || c,
        _ = m?.exactUsedKey || c,
        v = [`[object Number]`, `[object Function]`, `[object RegExp]`],
        y = a.joinArrays === void 0 ? this.options.joinArrays : a.joinArrays,
        b = !this.i18nFormat || this.i18nFormat.handleAsObject,
        x = a.count !== void 0 && !r(a.count),
        S = e.hasDefaultValue(a),
        C = x ? this.pluralResolver.getSuffix(f, a.count, a) : ``,
        w =
          a.ordinal && x
            ? this.pluralResolver.getSuffix(f, a.count, { ordinal: !1 })
            : ``,
        T = x && !a.ordinal && a.count === 0,
        E =
          (T && a[`defaultValue${this.options.pluralSeparator}zero`]) ||
          a[`defaultValue${C}`] ||
          a[`defaultValue${w}`] ||
          a.defaultValue,
        D = h;
      b && !h && S && (D = E);
      let O = M(D),
        k = Object.prototype.toString.apply(D);
      if (b && D && O && v.indexOf(k) < 0 && !(r(y) && Array.isArray(D))) {
        if (!a.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler ||
            this.logger.warn(
              `accessing an object - but returnObjects options is not enabled!`,
            );
          let e = this.options.returnedObjectHandler
            ? this.options.returnedObjectHandler(g, D, { ...a, ns: l })
            : `key '${c} (${this.language})' returned an object instead of string.`;
          return o
            ? ((m.res = e), (m.usedParams = this.getUsedParamsDetails(a)), m)
            : e;
        }
        if (s) {
          let e = Array.isArray(D),
            t = e ? [] : {},
            n = e ? _ : g;
          for (let e in D)
            if (Object.prototype.hasOwnProperty.call(D, e)) {
              let r = `${n}${s}${e}`;
              (S && !h
                ? (t[e] = this.translate(r, {
                    ...a,
                    defaultValue: M(E) ? E[e] : void 0,
                    joinArrays: !1,
                    ns: l,
                  }))
                : (t[e] = this.translate(r, { ...a, joinArrays: !1, ns: l })),
                t[e] === r && (t[e] = D[e]));
            }
          h = t;
        }
      } else if (b && r(y) && Array.isArray(h))
        ((h = h.join(y)), (h &&= this.extendTranslation(h, t, a, i)));
      else {
        let e = !1,
          n = !1;
        (!this.isValidLookup(h) && S && ((e = !0), (h = E)),
          this.isValidLookup(h) || ((n = !0), (h = c)));
        let r =
            (a.missingKeyNoValueFallbackToKey ||
              this.options.missingKeyNoValueFallbackToKey) &&
            n
              ? void 0
              : h,
          o = S && E !== h && this.options.updateMissing;
        if (n || e || o) {
          if (
            (this.logger.log(
              o ? `updateKey` : `missingKey`,
              f,
              u,
              c,
              o ? E : h,
            ),
            s)
          ) {
            let e = this.resolve(c, { ...a, keySeparator: !1 });
            e &&
              e.res &&
              this.logger.warn(
                `Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`,
              );
          }
          let e = [],
            t = this.languageUtils.getFallbackCodes(
              this.options.fallbackLng,
              a.lng || this.language,
            );
          if (this.options.saveMissingTo === `fallback` && t && t[0])
            for (let n = 0; n < t.length; n++) e.push(t[n]);
          else
            this.options.saveMissingTo === `all`
              ? (e = this.languageUtils.toResolveHierarchy(
                  a.lng || this.language,
                ))
              : e.push(a.lng || this.language);
          let n = (e, t, n) => {
            let i = S && n !== h ? n : r;
            (this.options.missingKeyHandler
              ? this.options.missingKeyHandler(e, u, t, i, o, a)
              : this.backendConnector?.saveMissing &&
                this.backendConnector.saveMissing(e, u, t, i, o, a),
              this.emit(`missingKey`, e, u, t, h));
          };
          this.options.saveMissing &&
            (this.options.saveMissingPlurals && x
              ? e.forEach((e) => {
                  let t = this.pluralResolver.getSuffixes(e, a);
                  (T &&
                    a[`defaultValue${this.options.pluralSeparator}zero`] &&
                    t.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                    t.push(`${this.options.pluralSeparator}zero`),
                    t.forEach((t) => {
                      n([e], c + t, a[`defaultValue${t}`] || E);
                    }));
                })
              : n(e, c, E));
        }
        ((h = this.extendTranslation(h, t, a, m, i)),
          n &&
            h === c &&
            this.options.appendNamespaceToMissingKey &&
            (h = `${u}${d}${c}`),
          (n || e) &&
            this.options.parseMissingKeyHandler &&
            (h = this.options.parseMissingKeyHandler(
              this.options.appendNamespaceToMissingKey ? `${u}${d}${c}` : c,
              e ? h : void 0,
              a,
            )));
      }
      return o
        ? ((m.res = h), (m.usedParams = this.getUsedParamsDetails(a)), m)
        : h;
    }
    extendTranslation(e, t, n, i, a) {
      if (this.i18nFormat?.parse)
        e = this.i18nFormat.parse(
          e,
          { ...this.options.interpolation.defaultVariables, ...n },
          n.lng || this.language || i.usedLng,
          i.usedNS,
          i.usedKey,
          { resolved: i },
        );
      else if (!n.skipInterpolation) {
        n.interpolation &&
          this.interpolator.init({
            ...n,
            interpolation: {
              ...this.options.interpolation,
              ...n.interpolation,
            },
          });
        let o =
            r(e) &&
            (n?.interpolation?.skipOnVariables === void 0
              ? this.options.interpolation.skipOnVariables
              : n.interpolation.skipOnVariables),
          s;
        if (o) {
          let t = e.match(this.interpolator.nestingRegexp);
          s = t && t.length;
        }
        let c = n.replace && !r(n.replace) ? n.replace : n;
        if (
          (this.options.interpolation.defaultVariables &&
            (c = { ...this.options.interpolation.defaultVariables, ...c }),
          (e = this.interpolator.interpolate(
            e,
            c,
            n.lng || this.language || i.usedLng,
            n,
          )),
          o)
        ) {
          let t = e.match(this.interpolator.nestingRegexp),
            r = t && t.length;
          s < r && (n.nest = !1);
        }
        (!n.lng && i && i.res && (n.lng = this.language || i.usedLng),
          n.nest !== !1 &&
            (e = this.interpolator.nest(
              e,
              (...e) =>
                a?.[0] === e[0] && !n.context
                  ? (this.logger.warn(
                      `It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`,
                    ),
                    null)
                  : this.translate(...e, t),
              n,
            )),
          n.interpolation && this.interpolator.reset());
      }
      let o = n.postProcess || this.options.postProcess,
        s = r(o) ? [o] : o;
      return (
        e != null &&
          s?.length &&
          n.applyPostProcessor !== !1 &&
          (e = k.handle(
            s,
            e,
            t,
            this.options && this.options.postProcessPassResolved
              ? {
                  i18nResolved: {
                    ...i,
                    usedParams: this.getUsedParamsDetails(n),
                  },
                  ...n,
                }
              : n,
            this,
          )),
        e
      );
    }
    resolve(e, t = {}) {
      let n, i, a, o, s;
      return (
        r(e) && (e = [e]),
        Array.isArray(e) &&
          (e = e.map((e) =>
            typeof e == `function` ? j(e, { ...this.options, ...t }) : e,
          )),
        e.forEach((e) => {
          if (this.isValidLookup(n)) return;
          let c = this.extractFromKey(e, t),
            l = c.key;
          i = l;
          let u = c.namespaces;
          this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
          let d = t.count !== void 0 && !r(t.count),
            f = d && !t.ordinal && t.count === 0,
            p =
              t.context !== void 0 &&
              (r(t.context) || typeof t.context == `number`) &&
              t.context !== ``,
            m = t.lngs
              ? t.lngs
              : this.languageUtils.toResolveHierarchy(
                  t.lng || this.language,
                  t.fallbackLng,
                );
          u.forEach((e) => {
            this.isValidLookup(n) ||
              ((s = e),
              !te[`${m[0]}-${e}`] &&
                this.utils?.hasLoadedNamespace &&
                !this.utils?.hasLoadedNamespace(s) &&
                ((te[`${m[0]}-${e}`] = !0),
                this.logger.warn(
                  `key "${i}" for languages "${m.join(`, `)}" won't get resolved as namespace "${s}" was not yet loaded`,
                  `This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`,
                )),
              m.forEach((r) => {
                if (this.isValidLookup(n)) return;
                o = r;
                let i = [l];
                if (this.i18nFormat?.addLookupKeys)
                  this.i18nFormat.addLookupKeys(i, l, r, e, t);
                else {
                  let e;
                  d && (e = this.pluralResolver.getSuffix(r, t.count, t));
                  let n = `${this.options.pluralSeparator}zero`,
                    a = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                  if (
                    (d &&
                      (t.ordinal &&
                        e.indexOf(a) === 0 &&
                        i.push(l + e.replace(a, this.options.pluralSeparator)),
                      i.push(l + e),
                      f && i.push(l + n)),
                    p)
                  ) {
                    let r = `${l}${this.options.contextSeparator || `_`}${t.context}`;
                    (i.push(r),
                      d &&
                        (t.ordinal &&
                          e.indexOf(a) === 0 &&
                          i.push(
                            r + e.replace(a, this.options.pluralSeparator),
                          ),
                        i.push(r + e),
                        f && i.push(r + n)));
                  }
                }
                let s;
                for (; (s = i.pop());)
                  this.isValidLookup(n) ||
                    ((a = s), (n = this.getResource(r, e, s, t)));
              }));
          });
        }),
        { res: n, usedKey: i, exactUsedKey: a, usedLng: o, usedNS: s }
      );
    }
    isValidLookup(e) {
      return (
        e !== void 0 &&
        !(!this.options.returnNull && e === null) &&
        !(!this.options.returnEmptyString && e === ``)
      );
    }
    getResource(e, t, n, r = {}) {
      return this.i18nFormat?.getResource
        ? this.i18nFormat.getResource(e, t, n, r)
        : this.resourceStore.getResource(e, t, n, r);
    }
    getUsedParamsDetails(e = {}) {
      let t = [
          `defaultValue`,
          `ordinal`,
          `context`,
          `replace`,
          `lng`,
          `lngs`,
          `fallbackLng`,
          `ns`,
          `keySeparator`,
          `nsSeparator`,
          `returnObjects`,
          `returnDetails`,
          `joinArrays`,
          `postProcess`,
          `interpolation`,
        ],
        n = e.replace && !r(e.replace),
        i = n ? e.replace : e;
      if (
        (n && e.count !== void 0 && (i.count = e.count),
        this.options.interpolation.defaultVariables &&
          (i = { ...this.options.interpolation.defaultVariables, ...i }),
        !n)
      ) {
        i = { ...i };
        for (let e of t) delete i[e];
      }
      return i;
    }
    static hasDefaultValue(e) {
      for (let t in e)
        if (
          Object.prototype.hasOwnProperty.call(e, t) &&
          t.substring(0, 12) === `defaultValue` &&
          e[t] !== void 0
        )
          return !0;
      return !1;
    }
  },
  P = class {
    constructor(e) {
      ((this.options = e),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = E.create(`languageUtils`)));
    }
    getScriptPartFromCode(e) {
      if (((e = w(e)), !e || e.indexOf(`-`) < 0)) return null;
      let t = e.split(`-`);
      return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === `x`)
        ? null
        : this.formatLanguageCode(t.join(`-`));
    }
    getLanguagePartFromCode(e) {
      if (((e = w(e)), !e || e.indexOf(`-`) < 0)) return e;
      let t = e.split(`-`);
      return this.formatLanguageCode(t[0]);
    }
    formatLanguageCode(e) {
      if (r(e) && e.indexOf(`-`) > -1) {
        let t;
        try {
          t = Intl.getCanonicalLocales(e)[0];
        } catch {}
        return (
          t && this.options.lowerCaseLng && (t = t.toLowerCase()),
          t || (this.options.lowerCaseLng ? e.toLowerCase() : e)
        );
      }
      return this.options.cleanCode || this.options.lowerCaseLng
        ? e.toLowerCase()
        : e;
    }
    isSupportedCode(e) {
      return (
        (this.options.load === `languageOnly` ||
          this.options.nonExplicitSupportedLngs) &&
          (e = this.getLanguagePartFromCode(e)),
        !this.supportedLngs ||
          !this.supportedLngs.length ||
          this.supportedLngs.indexOf(e) > -1
      );
    }
    getBestMatchFromCodes(e) {
      if (!e) return null;
      let t;
      return (
        e.forEach((e) => {
          if (t) return;
          let n = this.formatLanguageCode(e);
          (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
        }),
        !t &&
          this.options.supportedLngs &&
          e.forEach((e) => {
            if (t) return;
            let n = this.getScriptPartFromCode(e);
            if (this.isSupportedCode(n)) return (t = n);
            let r = this.getLanguagePartFromCode(e);
            if (this.isSupportedCode(r)) return (t = r);
            t = this.options.supportedLngs.find((e) => {
              if (
                e === r ||
                (!(e.indexOf(`-`) < 0 && r.indexOf(`-`) < 0) &&
                  ((e.indexOf(`-`) > 0 &&
                    r.indexOf(`-`) < 0 &&
                    e.substring(0, e.indexOf(`-`)) === r) ||
                    (e.indexOf(r) === 0 && r.length > 1)))
              )
                return e;
            });
          }),
        (t ||= this.getFallbackCodes(this.options.fallbackLng)[0]),
        t
      );
    }
    getFallbackCodes(e, t) {
      if (!e) return [];
      if (
        (typeof e == `function` && (e = e(t)),
        r(e) && (e = [e]),
        Array.isArray(e))
      )
        return e;
      if (!t) return e.default || [];
      let n = e[t];
      return (
        (n ||= e[this.getScriptPartFromCode(t)]),
        (n ||= e[this.formatLanguageCode(t)]),
        (n ||= e[this.getLanguagePartFromCode(t)]),
        (n ||= e.default),
        n || []
      );
    }
    toResolveHierarchy(e, t) {
      let n = this.getFallbackCodes(
          (t === !1 ? [] : t) || this.options.fallbackLng || [],
          e,
        ),
        i = [],
        a = (e) => {
          e &&
            (this.isSupportedCode(e)
              ? i.push(e)
              : this.logger.warn(
                  `rejecting language code not found in supportedLngs: ${e}`,
                ));
        };
      return (
        r(e) && (e.indexOf(`-`) > -1 || e.indexOf(`_`) > -1)
          ? (this.options.load !== `languageOnly` &&
              a(this.formatLanguageCode(e)),
            this.options.load !== `languageOnly` &&
              this.options.load !== `currentOnly` &&
              a(this.getScriptPartFromCode(e)),
            this.options.load !== `currentOnly` &&
              a(this.getLanguagePartFromCode(e)))
          : r(e) && a(this.formatLanguageCode(e)),
        n.forEach((e) => {
          i.indexOf(e) < 0 && a(this.formatLanguageCode(e));
        }),
        i
      );
    }
  },
  F = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  I = {
    select: (e) => (e === 1 ? `one` : `other`),
    resolvedOptions: () => ({ pluralCategories: [`one`, `other`] }),
  },
  ne = class {
    constructor(e, t = {}) {
      ((this.languageUtils = e),
        (this.options = t),
        (this.logger = E.create(`pluralResolver`)),
        (this.pluralRulesCache = {}));
    }
    clearCache() {
      this.pluralRulesCache = {};
    }
    getRule(e, t = {}) {
      let n = w(e === `dev` ? `en` : e),
        r = t.ordinal ? `ordinal` : `cardinal`,
        i = JSON.stringify({ cleanedCode: n, type: r });
      if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
      let a;
      try {
        a = new Intl.PluralRules(n, { type: r });
      } catch {
        if (typeof Intl > `u`)
          return (
            this.logger.error(`No Intl support, please use an Intl polyfill!`),
            I
          );
        if (!e.match(/-|_/)) return I;
        let n = this.languageUtils.getLanguagePartFromCode(e);
        a = this.getRule(n, t);
      }
      return ((this.pluralRulesCache[i] = a), a);
    }
    needsPlural(e, t = {}) {
      let n = this.getRule(e, t);
      return (
        (n ||= this.getRule(`dev`, t)),
        n?.resolvedOptions().pluralCategories.length > 1
      );
    }
    getPluralFormsOfKey(e, t, n = {}) {
      return this.getSuffixes(e, n).map((e) => `${t}${e}`);
    }
    getSuffixes(e, t = {}) {
      let n = this.getRule(e, t);
      return (
        (n ||= this.getRule(`dev`, t)),
        n
          ? n
              .resolvedOptions()
              .pluralCategories.sort((e, t) => F[e] - F[t])
              .map(
                (e) =>
                  `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ``}${e}`,
              )
          : []
      );
    }
    getSuffix(e, t, n = {}) {
      let r = this.getRule(e, n);
      return r
        ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ``}${r.select(t)}`
        : (this.logger.warn(`no plural rule found for: ${e}`),
          this.getSuffix(`dev`, t, n));
    }
  },
  L = (e, t, n, i = `.`, a = !0) => {
    let o = m(e, t, n);
    return (
      !o && a && r(n) && ((o = C(e, n, i)), o === void 0 && (o = C(t, n, i))),
      o
    );
  },
  R = (e) => e.replace(/\$/g, `$$$$`),
  z = class {
    constructor(e = {}) {
      ((this.logger = E.create(`interpolator`)),
        (this.options = e),
        (this.format = e?.interpolation?.format || ((e) => e)),
        this.init(e));
    }
    init(e = {}) {
      e.interpolation ||= { escapeValue: !0 };
      let {
        escape: t,
        escapeValue: n,
        useRawValueToEscape: r,
        prefix: i,
        prefixEscaped: a,
        suffix: o,
        suffixEscaped: s,
        formatSeparator: c,
        unescapeSuffix: l,
        unescapePrefix: u,
        nestingPrefix: d,
        nestingPrefixEscaped: f,
        nestingSuffix: p,
        nestingSuffixEscaped: m,
        nestingOptionsSeparator: h,
        maxReplaces: _,
        alwaysFormat: y,
      } = e.interpolation;
      ((this.escape = t === void 0 ? v : t),
        (this.escapeValue = n === void 0 || n),
        (this.useRawValueToEscape = r !== void 0 && r),
        (this.prefix = i ? g(i) : a || `{{`),
        (this.suffix = o ? g(o) : s || `}}`),
        (this.formatSeparator = c || `,`),
        (this.unescapePrefix = l ? `` : u || `-`),
        (this.unescapeSuffix = this.unescapePrefix ? `` : l || ``),
        (this.nestingPrefix = d ? g(d) : f || g(`$t(`)),
        (this.nestingSuffix = p ? g(p) : m || g(`)`)),
        (this.nestingOptionsSeparator = h || `,`),
        (this.maxReplaces = _ || 1e3),
        (this.alwaysFormat = y !== void 0 && y),
        this.resetRegExp());
    }
    reset() {
      this.options && this.init(this.options);
    }
    resetRegExp() {
      let e = (e, t) =>
        e?.source === t ? ((e.lastIndex = 0), e) : new RegExp(t, `g`);
      ((this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
        (this.regexpUnescape = e(
          this.regexpUnescape,
          `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
        )),
        (this.nestingRegexp = e(
          this.nestingRegexp,
          `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
        )));
    }
    interpolate(e, t, n, i) {
      let o,
        s,
        c,
        l =
          (this.options &&
            this.options.interpolation &&
            this.options.interpolation.defaultVariables) ||
          {},
        u = (e) => {
          if (e.indexOf(this.formatSeparator) < 0) {
            let r = L(
              t,
              l,
              e,
              this.options.keySeparator,
              this.options.ignoreJSONStructure,
            );
            return this.alwaysFormat
              ? this.format(r, void 0, n, { ...i, ...t, interpolationkey: e })
              : r;
          }
          let r = e.split(this.formatSeparator),
            a = r.shift().trim(),
            o = r.join(this.formatSeparator).trim();
          return this.format(
            L(
              t,
              l,
              a,
              this.options.keySeparator,
              this.options.ignoreJSONStructure,
            ),
            o,
            n,
            { ...i, ...t, interpolationkey: a },
          );
        };
      this.resetRegExp();
      let d =
          i?.missingInterpolationHandler ||
          this.options.missingInterpolationHandler,
        f =
          i?.interpolation?.skipOnVariables === void 0
            ? this.options.interpolation.skipOnVariables
            : i.interpolation.skipOnVariables;
      return (
        [
          { regex: this.regexpUnescape, safeValue: (e) => R(e) },
          {
            regex: this.regexp,
            safeValue: (e) => (this.escapeValue ? R(this.escape(e)) : R(e)),
          },
        ].forEach((t) => {
          for (c = 0; (o = t.regex.exec(e));) {
            let n = o[1].trim();
            if (((s = u(n)), s === void 0))
              if (typeof d == `function`) {
                let t = d(e, o, i);
                s = r(t) ? t : ``;
              } else if (i && Object.prototype.hasOwnProperty.call(i, n))
                s = ``;
              else if (f) {
                s = o[0];
                continue;
              } else
                (this.logger.warn(
                  `missed to pass in variable ${n} for interpolating ${e}`,
                ),
                  (s = ``));
            else !r(s) && !this.useRawValueToEscape && (s = a(s));
            let l = t.safeValue(s);
            if (
              ((e = e.replace(o[0], l)),
              f
                ? ((t.regex.lastIndex += s.length),
                  (t.regex.lastIndex -= o[0].length))
                : (t.regex.lastIndex = 0),
              c++,
              c >= this.maxReplaces)
            )
              break;
          }
        }),
        e
      );
    }
    nest(e, t, n = {}) {
      let i,
        o,
        s,
        c = (e, t) => {
          let n = this.nestingOptionsSeparator;
          if (e.indexOf(n) < 0) return e;
          let r = e.split(RegExp(`${g(n)}[ ]*{`)),
            i = `{${r[1]}`;
          ((e = r[0]), (i = this.interpolate(i, s)));
          let a = i.match(/'/g),
            o = i.match(/"/g);
          (((a?.length ?? 0) % 2 == 0 && !o) || (o?.length ?? 0) % 2 != 0) &&
            (i = i.replace(/'/g, `"`));
          try {
            ((s = JSON.parse(i)), t && (s = { ...t, ...s }));
          } catch (t) {
            return (
              this.logger.warn(
                `failed parsing options string in nesting for key ${e}`,
                t,
              ),
              `${e}${n}${i}`
            );
          }
          return (
            s.defaultValue &&
              s.defaultValue.indexOf(this.prefix) > -1 &&
              delete s.defaultValue,
            e
          );
        };
      for (; (i = this.nestingRegexp.exec(e));) {
        let l = [];
        ((s = { ...n }),
          (s = s.replace && !r(s.replace) ? s.replace : s),
          (s.applyPostProcessor = !1),
          delete s.defaultValue);
        let u = /{.*}/.test(i[1])
          ? i[1].lastIndexOf(`}`) + 1
          : i[1].indexOf(this.formatSeparator);
        if (
          (u !== -1 &&
            ((l = i[1]
              .slice(u)
              .split(this.formatSeparator)
              .map((e) => e.trim())
              .filter(Boolean)),
            (i[1] = i[1].slice(0, u))),
          (o = t(c.call(this, i[1].trim(), s), s)),
          o && i[0] === e && !r(o))
        )
          return o;
        (r(o) || (o = a(o)),
          (o ||=
            (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),
            ``)),
          l.length &&
            (o = l.reduce(
              (e, t) =>
                this.format(e, t, n.lng, {
                  ...n,
                  interpolationkey: i[1].trim(),
                }),
              o.trim(),
            )),
          (e = e.replace(i[0], o)),
          (this.regexp.lastIndex = 0));
      }
      return e;
    }
  },
  re = (e) => {
    let t = e.toLowerCase().trim(),
      n = {};
    if (e.indexOf(`(`) > -1) {
      let r = e.split(`(`);
      t = r[0].toLowerCase().trim();
      let i = r[1].substring(0, r[1].length - 1);
      t === `currency` && i.indexOf(`:`) < 0
        ? (n.currency ||= i.trim())
        : t === `relativetime` && i.indexOf(`:`) < 0
          ? (n.range ||= i.trim())
          : i.split(`;`).forEach((e) => {
              if (e) {
                let [t, ...r] = e.split(`:`),
                  i = r
                    .join(`:`)
                    .trim()
                    .replace(/^'+|'+$/g, ``),
                  a = t.trim();
                (n[a] || (n[a] = i),
                  i === `false` && (n[a] = !1),
                  i === `true` && (n[a] = !0),
                  isNaN(i) || (n[a] = parseInt(i, 10)));
              }
            });
    }
    return { formatName: t, formatOptions: n };
  },
  B = (e) => {
    let t = {};
    return (n, r, i) => {
      let a = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (a = { ...a, [i.interpolationkey]: void 0 });
      let o = r + JSON.stringify(a),
        s = t[o];
      return (s || ((s = e(w(r), i)), (t[o] = s)), s(n));
    };
  },
  ie = (e) => (t, n, r) => e(w(n), r)(t),
  ae = class {
    constructor(e = {}) {
      ((this.logger = E.create(`formatter`)), (this.options = e), this.init(e));
    }
    init(e, t = { interpolation: {} }) {
      this.formatSeparator = t.interpolation.formatSeparator || `,`;
      let n = t.cacheInBuiltFormats ? B : ie;
      this.formats = {
        number: n((e, t) => {
          let n = new Intl.NumberFormat(e, { ...t });
          return (e) => n.format(e);
        }),
        currency: n((e, t) => {
          let n = new Intl.NumberFormat(e, { ...t, style: `currency` });
          return (e) => n.format(e);
        }),
        datetime: n((e, t) => {
          let n = new Intl.DateTimeFormat(e, { ...t });
          return (e) => n.format(e);
        }),
        relativetime: n((e, t) => {
          let n = new Intl.RelativeTimeFormat(e, { ...t });
          return (e) => n.format(e, t.range || `day`);
        }),
        list: n((e, t) => {
          let n = new Intl.ListFormat(e, { ...t });
          return (e) => n.format(e);
        }),
      };
    }
    add(e, t) {
      this.formats[e.toLowerCase().trim()] = t;
    }
    addCached(e, t) {
      this.formats[e.toLowerCase().trim()] = B(t);
    }
    format(e, t, n, r = {}) {
      let i = t.split(this.formatSeparator);
      if (
        i.length > 1 &&
        i[0].indexOf(`(`) > 1 &&
        i[0].indexOf(`)`) < 0 &&
        i.find((e) => e.indexOf(`)`) > -1)
      ) {
        let e = i.findIndex((e) => e.indexOf(`)`) > -1);
        i[0] = [i[0], ...i.splice(1, e)].join(this.formatSeparator);
      }
      return i.reduce((e, t) => {
        let { formatName: i, formatOptions: a } = re(t);
        if (this.formats[i]) {
          let t = e;
          try {
            let o = r?.formatParams?.[r.interpolationkey] || {},
              s = o.locale || o.lng || r.locale || r.lng || n;
            t = this.formats[i](e, s, { ...a, ...r, ...o });
          } catch (e) {
            this.logger.warn(e);
          }
          return t;
        } else this.logger.warn(`there was no format function for ${i}`);
        return e;
      }, e);
    }
  },
  oe = (e, t) => {
    e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
  },
  se = class extends D {
    constructor(e, t, n, r = {}) {
      (super(),
        (this.backend = e),
        (this.store = t),
        (this.services = n),
        (this.languageUtils = n.languageUtils),
        (this.options = r),
        (this.logger = E.create(`backendConnector`)),
        (this.waitingReads = []),
        (this.maxParallelReads = r.maxParallelReads || 10),
        (this.readingCalls = 0),
        (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
        (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
        (this.state = {}),
        (this.queue = []),
        this.backend?.init?.(n, r.backend, r));
    }
    queueLoad(e, t, n, r) {
      let i = {},
        a = {},
        o = {},
        s = {};
      return (
        e.forEach((e) => {
          let r = !0;
          (t.forEach((t) => {
            let o = `${e}|${t}`;
            !n.reload && this.store.hasResourceBundle(e, t)
              ? (this.state[o] = 2)
              : this.state[o] < 0 ||
                (this.state[o] === 1
                  ? a[o] === void 0 && (a[o] = !0)
                  : ((this.state[o] = 1),
                    (r = !1),
                    a[o] === void 0 && (a[o] = !0),
                    i[o] === void 0 && (i[o] = !0),
                    s[t] === void 0 && (s[t] = !0)));
          }),
            r || (o[e] = !0));
        }),
        (Object.keys(i).length || Object.keys(a).length) &&
          this.queue.push({
            pending: a,
            pendingCount: Object.keys(a).length,
            loaded: {},
            errors: [],
            callback: r,
          }),
        {
          toLoad: Object.keys(i),
          pending: Object.keys(a),
          toLoadLanguages: Object.keys(o),
          toLoadNamespaces: Object.keys(s),
        }
      );
    }
    loaded(e, t, n) {
      let r = e.split(`|`),
        i = r[0],
        a = r[1];
      (t && this.emit(`failedLoading`, i, a, t),
        !t &&
          n &&
          this.store.addResourceBundle(i, a, n, void 0, void 0, {
            skipCopy: !0,
          }),
        (this.state[e] = t ? -1 : 2),
        t && n && (this.state[e] = 0));
      let o = {};
      (this.queue.forEach((n) => {
        (f(n.loaded, [i], a),
          oe(n, e),
          t && n.errors.push(t),
          n.pendingCount === 0 &&
            !n.done &&
            (Object.keys(n.loaded).forEach((e) => {
              o[e] || (o[e] = {});
              let t = n.loaded[e];
              t.length &&
                t.forEach((t) => {
                  o[e][t] === void 0 && (o[e][t] = !0);
                });
            }),
            (n.done = !0),
            n.errors.length ? n.callback(n.errors) : n.callback()));
      }),
        this.emit(`loaded`, o),
        (this.queue = this.queue.filter((e) => !e.done)));
    }
    read(e, t, n, r = 0, i = this.retryTimeout, a) {
      if (!e.length) return a(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: e,
          ns: t,
          fcName: n,
          tried: r,
          wait: i,
          callback: a,
        });
        return;
      }
      this.readingCalls++;
      let o = (o, s) => {
          if ((this.readingCalls--, this.waitingReads.length > 0)) {
            let e = this.waitingReads.shift();
            this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
          }
          if (o && s && r < this.maxRetries) {
            setTimeout(() => {
              this.read.call(this, e, t, n, r + 1, i * 2, a);
            }, i);
            return;
          }
          a(o, s);
        },
        s = this.backend[n].bind(this.backend);
      if (s.length === 2) {
        try {
          let n = s(e, t);
          n && typeof n.then == `function`
            ? n.then((e) => o(null, e)).catch(o)
            : o(null, n);
        } catch (e) {
          o(e);
        }
        return;
      }
      return s(e, t, o);
    }
    prepareLoading(e, t, n = {}, i) {
      if (!this.backend)
        return (
          this.logger.warn(
            `No backend was added via i18next.use. Will not load resources.`,
          ),
          i && i()
        );
      (r(e) && (e = this.languageUtils.toResolveHierarchy(e)),
        r(t) && (t = [t]));
      let a = this.queueLoad(e, t, n, i);
      if (!a.toLoad.length) return (a.pending.length || i(), null);
      a.toLoad.forEach((e) => {
        this.loadOne(e);
      });
    }
    load(e, t, n) {
      this.prepareLoading(e, t, {}, n);
    }
    reload(e, t, n) {
      this.prepareLoading(e, t, { reload: !0 }, n);
    }
    loadOne(e, t = ``) {
      let n = e.split(`|`),
        r = n[0],
        i = n[1];
      this.read(r, i, `read`, void 0, void 0, (n, a) => {
        (n &&
          this.logger.warn(
            `${t}loading namespace ${i} for language ${r} failed`,
            n,
          ),
          !n &&
            a &&
            this.logger.log(`${t}loaded namespace ${i} for language ${r}`, a),
          this.loaded(e, n, a));
      });
    }
    saveMissing(e, t, n, r, i, a = {}, o = () => {}) {
      if (
        this.services?.utils?.hasLoadedNamespace &&
        !this.services?.utils?.hasLoadedNamespace(t)
      ) {
        this.logger.warn(
          `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
          `This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`,
        );
        return;
      }
      if (!(n == null || n === ``)) {
        if (this.backend?.create) {
          let s = { ...a, isUpdate: i },
            c = this.backend.create.bind(this.backend);
          if (c.length < 6)
            try {
              let i;
              ((i = c.length === 5 ? c(e, t, n, r, s) : c(e, t, n, r)),
                i && typeof i.then == `function`
                  ? i.then((e) => o(null, e)).catch(o)
                  : o(null, i));
            } catch (e) {
              o(e);
            }
          else c(e, t, n, r, o, s);
        }
        !e || !e[0] || this.store.addResource(e[0], t, n, r);
      }
    }
  },
  V = () => ({
    debug: !1,
    initAsync: !0,
    ns: [`translation`],
    defaultNS: [`translation`],
    fallbackLng: [`dev`],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: `all`,
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: `.`,
    nsSeparator: `:`,
    pluralSeparator: `_`,
    contextSeparator: `_`,
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: `fallback`,
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == `object` && (t = e[1]),
        r(e[1]) && (t.defaultValue = e[1]),
        r(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == `object` || typeof e[3] == `object`)
      ) {
        let n = e[3] || e[2];
        Object.keys(n).forEach((e) => {
          t[e] = n[e];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: `{{`,
      suffix: `}}`,
      formatSeparator: `,`,
      unescapePrefix: `-`,
      nestingPrefix: `$t(`,
      nestingSuffix: `)`,
      nestingOptionsSeparator: `,`,
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  H = (e) => (
    r(e.ns) && (e.ns = [e.ns]),
    r(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    r(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs?.indexOf?.(`cimode`) < 0 &&
      (e.supportedLngs = e.supportedLngs.concat([`cimode`])),
    typeof e.initImmediate == `boolean` && (e.initAsync = e.initImmediate),
    e
  ),
  U = () => {},
  ce = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
      typeof e[t] == `function` && (e[t] = e[t].bind(e));
    });
  },
  W = `__i18next_supportNoticeShown`,
  le = () =>
    !!(
      (typeof globalThis < `u` && globalThis[W]) ||
      (typeof process < `u` && {}.I18NEXT_NO_SUPPORT_NOTICE) ||
      typeof process < `u`
    ),
  ue = () => {
    typeof globalThis < `u` && (globalThis[W] = !0);
  },
  de = (e) =>
    !!(
      e?.modules?.backend?.name?.indexOf(`Locize`) > 0 ||
      e?.modules?.backend?.constructor?.name?.indexOf(`Locize`) > 0 ||
      (e?.options?.backend?.backends &&
        e.options.backend.backends.some(
          (e) =>
            e?.name?.indexOf(`Locize`) > 0 ||
            e?.constructor?.name?.indexOf(`Locize`) > 0,
        )) ||
      e?.options?.backend?.projectId ||
      (e?.options?.backend?.backendOptions &&
        e.options.backend.backendOptions.some((e) => e?.projectId))
    ),
  G = class e extends D {
    constructor(e = {}, t) {
      if (
        (super(),
        (this.options = H(e)),
        (this.services = {}),
        (this.logger = E),
        (this.modules = { external: [] }),
        ce(this),
        t && !this.isInitialized && !e.isClone)
      ) {
        if (!this.options.initAsync) return (this.init(e, t), this);
        setTimeout(() => {
          this.init(e, t);
        }, 0);
      }
    }
    init(e = {}, t) {
      ((this.isInitializing = !0),
        typeof e == `function` && ((t = e), (e = {})),
        e.defaultNS == null &&
          e.ns &&
          (r(e.ns)
            ? (e.defaultNS = e.ns)
            : e.ns.indexOf(`translation`) < 0 && (e.defaultNS = e.ns[0])));
      let n = V();
      ((this.options = { ...n, ...this.options, ...H(e) }),
        (this.options.interpolation = {
          ...n.interpolation,
          ...this.options.interpolation,
        }),
        e.keySeparator !== void 0 &&
          (this.options.userDefinedKeySeparator = e.keySeparator),
        e.nsSeparator !== void 0 &&
          (this.options.userDefinedNsSeparator = e.nsSeparator),
        typeof this.options.overloadTranslationOptionHandler != `function` &&
          (this.options.overloadTranslationOptionHandler =
            n.overloadTranslationOptionHandler),
        this.options.showSupportNotice !== !1 &&
          !de(this) &&
          !le() &&
          (typeof console < `u` &&
            console.info !== void 0 &&
            console.info(
              `🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙`,
            ),
          ue()));
      let a = (e) => (e ? (typeof e == `function` ? new e() : e) : null);
      if (!this.options.isClone) {
        this.modules.logger
          ? E.init(a(this.modules.logger), this.options)
          : E.init(null, this.options);
        let e;
        e = this.modules.formatter ? this.modules.formatter : ae;
        let t = new P(this.options);
        this.store = new O(this.options.resources, this.options);
        let r = this.services;
        ((r.logger = E),
          (r.resourceStore = this.store),
          (r.languageUtils = t),
          (r.pluralResolver = new ne(t, {
            prepend: this.options.pluralSeparator,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix,
          })),
          this.options.interpolation.format &&
            this.options.interpolation.format !== n.interpolation.format &&
            this.logger.deprecate(
              `init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`,
            ),
          e &&
            (!this.options.interpolation.format ||
              this.options.interpolation.format === n.interpolation.format) &&
            ((r.formatter = a(e)),
            r.formatter.init && r.formatter.init(r, this.options),
            (this.options.interpolation.format = r.formatter.format.bind(
              r.formatter,
            ))),
          (r.interpolator = new z(this.options)),
          (r.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
          }),
          (r.backendConnector = new se(
            a(this.modules.backend),
            r.resourceStore,
            r,
            this.options,
          )),
          r.backendConnector.on(`*`, (e, ...t) => {
            this.emit(e, ...t);
          }),
          this.modules.languageDetector &&
            ((r.languageDetector = a(this.modules.languageDetector)),
            r.languageDetector.init &&
              r.languageDetector.init(r, this.options.detection, this.options)),
          this.modules.i18nFormat &&
            ((r.i18nFormat = a(this.modules.i18nFormat)),
            r.i18nFormat.init && r.i18nFormat.init(this)),
          (this.translator = new N(this.services, this.options)),
          this.translator.on(`*`, (e, ...t) => {
            this.emit(e, ...t);
          }),
          this.modules.external.forEach((e) => {
            e.init && e.init(this);
          }));
      }
      if (
        ((this.format = this.options.interpolation.format),
        (t ||= U),
        this.options.fallbackLng &&
          !this.services.languageDetector &&
          !this.options.lng)
      ) {
        let e = this.services.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
        );
        e.length > 0 && e[0] !== `dev` && (this.options.lng = e[0]);
      }
      (!this.services.languageDetector &&
        !this.options.lng &&
        this.logger.warn(
          `init: no languageDetector is used and no lng is defined`,
        ),
        [
          `getResource`,
          `hasResourceBundle`,
          `getResourceBundle`,
          `getDataByLanguage`,
        ].forEach((e) => {
          this[e] = (...t) => this.store[e](...t);
        }),
        [
          `addResource`,
          `addResources`,
          `addResourceBundle`,
          `removeResourceBundle`,
        ].forEach((e) => {
          this[e] = (...t) => (this.store[e](...t), this);
        }));
      let o = i(),
        s = () => {
          let e = (e, n) => {
            ((this.isInitializing = !1),
              this.isInitialized &&
                !this.initializedStoreOnce &&
                this.logger.warn(
                  `init: i18next is already initialized. You should call init just once!`,
                ),
              (this.isInitialized = !0),
              this.options.isClone ||
                this.logger.log(`initialized`, this.options),
              this.emit(`initialized`, this.options),
              o.resolve(n),
              t(e, n));
          };
          if (this.languages && !this.isInitialized)
            return e(null, this.t.bind(this));
          this.changeLanguage(this.options.lng, e);
        };
      return (
        this.options.resources || !this.options.initAsync
          ? s()
          : setTimeout(s, 0),
        o
      );
    }
    loadResources(e, t = U) {
      let n = t,
        i = r(e) ? e : this.language;
      if (
        (typeof e == `function` && (n = e),
        !this.options.resources || this.options.partialBundledLanguages)
      ) {
        if (
          i?.toLowerCase() === `cimode` &&
          (!this.options.preload || this.options.preload.length === 0)
        )
          return n();
        let e = [],
          t = (t) => {
            t &&
              t !== `cimode` &&
              this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
                t !== `cimode` && e.indexOf(t) < 0 && e.push(t);
              });
          };
        (i
          ? t(i)
          : this.services.languageUtils
              .getFallbackCodes(this.options.fallbackLng)
              .forEach((e) => t(e)),
          this.options.preload?.forEach?.((e) => t(e)),
          this.services.backendConnector.load(e, this.options.ns, (e) => {
            (!e &&
              !this.resolvedLanguage &&
              this.language &&
              this.setResolvedLanguage(this.language),
              n(e));
          }));
      } else n(null);
    }
    reloadResources(e, t, n) {
      let r = i();
      return (
        typeof e == `function` && ((n = e), (e = void 0)),
        typeof t == `function` && ((n = t), (t = void 0)),
        (e ||= this.languages),
        (t ||= this.options.ns),
        (n ||= U),
        this.services.backendConnector.reload(e, t, (e) => {
          (r.resolve(), n(e));
        }),
        r
      );
    }
    use(e) {
      if (!e)
        throw Error(
          `You are passing an undefined module! Please check the object you are passing to i18next.use()`,
        );
      if (!e.type)
        throw Error(
          `You are passing a wrong module! Please check the object you are passing to i18next.use()`,
        );
      return (
        e.type === `backend` && (this.modules.backend = e),
        (e.type === `logger` || (e.log && e.warn && e.error)) &&
          (this.modules.logger = e),
        e.type === `languageDetector` && (this.modules.languageDetector = e),
        e.type === `i18nFormat` && (this.modules.i18nFormat = e),
        e.type === `postProcessor` && k.addPostProcessor(e),
        e.type === `formatter` && (this.modules.formatter = e),
        e.type === `3rdParty` && this.modules.external.push(e),
        this
      );
    }
    setResolvedLanguage(e) {
      if (!(!e || !this.languages) && !([`cimode`, `dev`].indexOf(e) > -1)) {
        for (let e = 0; e < this.languages.length; e++) {
          let t = this.languages[e];
          if (
            !([`cimode`, `dev`].indexOf(t) > -1) &&
            this.store.hasLanguageSomeTranslations(t)
          ) {
            this.resolvedLanguage = t;
            break;
          }
        }
        !this.resolvedLanguage &&
          this.languages.indexOf(e) < 0 &&
          this.store.hasLanguageSomeTranslations(e) &&
          ((this.resolvedLanguage = e), this.languages.unshift(e));
      }
    }
    changeLanguage(e, t) {
      this.isLanguageChangingTo = e;
      let n = i();
      this.emit(`languageChanging`, e);
      let a = (e) => {
          ((this.language = e),
            (this.languages =
              this.services.languageUtils.toResolveHierarchy(e)),
            (this.resolvedLanguage = void 0),
            this.setResolvedLanguage(e));
        },
        o = (r, i) => {
          (i
            ? this.isLanguageChangingTo === e &&
              (a(i),
              this.translator.changeLanguage(i),
              (this.isLanguageChangingTo = void 0),
              this.emit(`languageChanged`, i),
              this.logger.log(`languageChanged`, i))
            : (this.isLanguageChangingTo = void 0),
            n.resolve((...e) => this.t(...e)),
            t && t(r, (...e) => this.t(...e)));
        },
        s = (t) => {
          !e && !t && this.services.languageDetector && (t = []);
          let n = r(t) ? t : t && t[0],
            i = this.store.hasLanguageSomeTranslations(n)
              ? n
              : this.services.languageUtils.getBestMatchFromCodes(
                  r(t) ? [t] : t,
                );
          (i &&
            (this.language || a(i),
            this.translator.language || this.translator.changeLanguage(i),
            this.services.languageDetector?.cacheUserLanguage?.(i)),
            this.loadResources(i, (e) => {
              o(e, i);
            }));
        };
      return (
        !e &&
        this.services.languageDetector &&
        !this.services.languageDetector.async
          ? s(this.services.languageDetector.detect())
          : !e &&
              this.services.languageDetector &&
              this.services.languageDetector.async
            ? this.services.languageDetector.detect.length === 0
              ? this.services.languageDetector.detect().then(s)
              : this.services.languageDetector.detect(s)
            : s(e),
        n
      );
    }
    getFixedT(e, t, n) {
      let i = (e, t, ...r) => {
        let a;
        ((a =
          typeof t == `object`
            ? { ...t }
            : this.options.overloadTranslationOptionHandler([e, t].concat(r))),
          (a.lng = a.lng || i.lng),
          (a.lngs = a.lngs || i.lngs),
          (a.ns = a.ns || i.ns),
          a.keyPrefix !== `` &&
            (a.keyPrefix = a.keyPrefix || n || i.keyPrefix));
        let o = { ...this.options, ...a };
        typeof a.keyPrefix == `function` && (a.keyPrefix = j(a.keyPrefix, o));
        let s = this.options.keySeparator || `.`,
          c;
        return (
          a.keyPrefix && Array.isArray(e)
            ? (c = e.map(
                (e) => (
                  typeof e == `function` && (e = j(e, o)),
                  `${a.keyPrefix}${s}${e}`
                ),
              ))
            : (typeof e == `function` && (e = j(e, o)),
              (c = a.keyPrefix ? `${a.keyPrefix}${s}${e}` : e)),
          this.t(c, a)
        );
      };
      return (
        r(e) ? (i.lng = e) : (i.lngs = e),
        (i.ns = t),
        (i.keyPrefix = n),
        i
      );
    }
    t(...e) {
      return this.translator?.translate(...e);
    }
    exists(...e) {
      return this.translator?.exists(...e);
    }
    setDefaultNamespace(e) {
      this.options.defaultNS = e;
    }
    hasLoadedNamespace(e, t = {}) {
      if (!this.isInitialized)
        return (
          this.logger.warn(
            `hasLoadedNamespace: i18next was not initialized`,
            this.languages,
          ),
          !1
        );
      if (!this.languages || !this.languages.length)
        return (
          this.logger.warn(
            `hasLoadedNamespace: i18n.languages were undefined or empty`,
            this.languages,
          ),
          !1
        );
      let n = t.lng || this.resolvedLanguage || this.languages[0],
        r = this.options ? this.options.fallbackLng : !1,
        i = this.languages[this.languages.length - 1];
      if (n.toLowerCase() === `cimode`) return !0;
      let a = (e, t) => {
        let n = this.services.backendConnector.state[`${e}|${t}`];
        return n === -1 || n === 0 || n === 2;
      };
      if (t.precheck) {
        let e = t.precheck(this, a);
        if (e !== void 0) return e;
      }
      return !!(
        this.hasResourceBundle(n, e) ||
        !this.services.backendConnector.backend ||
        (this.options.resources && !this.options.partialBundledLanguages) ||
        (a(n, e) && (!r || a(i, e)))
      );
    }
    loadNamespaces(e, t) {
      let n = i();
      return this.options.ns
        ? (r(e) && (e = [e]),
          e.forEach((e) => {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          }),
          this.loadResources((e) => {
            (n.resolve(), t && t(e));
          }),
          n)
        : (t && t(), Promise.resolve());
    }
    loadLanguages(e, t) {
      let n = i();
      r(e) && (e = [e]);
      let a = this.options.preload || [],
        o = e.filter(
          (e) =>
            a.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e),
        );
      return o.length
        ? ((this.options.preload = a.concat(o)),
          this.loadResources((e) => {
            (n.resolve(), t && t(e));
          }),
          n)
        : (t && t(), Promise.resolve());
    }
    dir(e) {
      if (
        ((e ||=
          this.resolvedLanguage ||
          (this.languages?.length > 0 ? this.languages[0] : this.language)),
        !e)
      )
        return `rtl`;
      try {
        let t = new Intl.Locale(e);
        if (t && t.getTextInfo) {
          let e = t.getTextInfo();
          if (e && e.direction) return e.direction;
        }
      } catch {}
      let t =
          `ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(
            `.`,
          ),
        n = this.services?.languageUtils || new P(V());
      return e.toLowerCase().indexOf(`-latn`) > 1
        ? `ltr`
        : t.indexOf(n.getLanguagePartFromCode(e)) > -1 ||
            e.toLowerCase().indexOf(`-arab`) > 1
          ? `rtl`
          : `ltr`;
    }
    static createInstance(t = {}, n) {
      let r = new e(t, n);
      return ((r.createInstance = e.createInstance), r);
    }
    cloneInstance(t = {}, n = U) {
      let r = t.forkResourceStore;
      r && delete t.forkResourceStore;
      let i = { ...this.options, ...t, isClone: !0 },
        a = new e(i);
      if (
        ((t.debug !== void 0 || t.prefix !== void 0) &&
          (a.logger = a.logger.clone(t)),
        [`store`, `services`, `language`].forEach((e) => {
          a[e] = this[e];
        }),
        (a.services = { ...this.services }),
        (a.services.utils = {
          hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
        }),
        r &&
          ((a.store = new O(
            Object.keys(this.store.data).reduce(
              (e, t) => (
                (e[t] = { ...this.store.data[t] }),
                (e[t] = Object.keys(e[t]).reduce(
                  (n, r) => ((n[r] = { ...e[t][r] }), n),
                  e[t],
                )),
                e
              ),
              {},
            ),
            i,
          )),
          (a.services.resourceStore = a.store)),
        t.interpolation)
      ) {
        let e = {
            ...V().interpolation,
            ...this.options.interpolation,
            ...t.interpolation,
          },
          n = { ...i, interpolation: e };
        a.services.interpolator = new z(n);
      }
      return (
        (a.translator = new N(a.services, i)),
        a.translator.on(`*`, (e, ...t) => {
          a.emit(e, ...t);
        }),
        a.init(i, n),
        (a.translator.options = i),
        (a.translator.backendConnector.services.utils = {
          hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
        }),
        a
      );
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage,
      };
    }
  }.createInstance();
