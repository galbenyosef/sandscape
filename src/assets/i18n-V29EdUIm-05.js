// i18n-V29EdUIm 05 — options
// Lines 2487-2572 of readable/assets/i18n-V29EdUIm.pretty.js (statement-aligned).
var ke = () => ({
    order: Oe,
    lookupQuerystring: `lng`,
    lookupCookie: `i18next`,
    lookupLocalStorage: `i18nextLng`,
    lookupSessionStorage: `i18nextLng`,
    caches: [`localStorage`],
    excludeCacheFor: [`cimode`],
    convertDetectedLanguage: (e) => e,
  }),
  Ae = class {
    constructor(e) {
      let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      ((this.type = `languageDetector`),
        (this.detectors = {}),
        this.init(e, t));
    }
    init() {
      let e =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { languageUtils: {} },
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      ((this.services = e),
        (this.options = me(t, this.options || {}, ke())),
        typeof this.options.convertDetectedLanguage == `string` &&
          this.options.convertDetectedLanguage.indexOf(`15897`) > -1 &&
          (this.options.convertDetectedLanguage = (e) => e.replace(`-`, `_`)),
        this.options.lookupFromUrlIndex &&
          (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
        (this.i18nOptions = n),
        this.addDetector(_e),
        this.addDetector(ve),
        this.addDetector(be),
        this.addDetector(Se),
        this.addDetector(Ce),
        this.addDetector(we),
        this.addDetector(Te),
        this.addDetector(Ee),
        this.addDetector(ye));
    }
    addDetector(e) {
      return ((this.detectors[e.name] = e), this);
    }
    detect() {
      let e =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : this.options.order,
        t = [];
      return (
        e.forEach((e) => {
          if (this.detectors[e]) {
            let n = this.detectors[e].lookup(this.options);
            (n && typeof n == `string` && (n = [n]), n && (t = t.concat(n)));
          }
        }),
        (t = t
          .filter((e) => e != null && !he(e))
          .map((e) => this.options.convertDetectedLanguage(e))),
        this.services &&
        this.services.languageUtils &&
        this.services.languageUtils.getBestMatchFromCodes
          ? t
          : t.length > 0
            ? t[0]
            : null
      );
    }
    cacheUserLanguage(e) {
      let t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : this.options.caches;
      t &&
        ((this.options.excludeCacheFor &&
          this.options.excludeCacheFor.indexOf(e) > -1) ||
          t.forEach((t) => {
            this.detectors[t] &&
              this.detectors[t].cacheUserLanguage(e, this.options);
          }));
    }
  };
Ae.type = `languageDetector`;
