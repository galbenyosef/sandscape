// i18n-Ddyvvowz 07 — common
// Lines 8970-9024 of readable/assets/i18n-Ddyvvowz.pretty.js (statement-aligned).
function ze() {
  if (typeof window > `u`) return;
  let e = null;
  try {
    e = window.localStorage.getItem(`sandscape-language`);
  } catch {}
  ((e ??= window.navigator.languages?.[0] || window.navigator.language),
    (e ??= new URLSearchParams(window.location.search).get(`lang`)));
  let t = e?.split(`-`)[0];
  return Z.some((e) => e.code === t) ? t : void 0;
}
var $ = Q ? ze() : void 0;
G.use(n)
  .use(Ae)
  .init({
    ...(Q ? { lng: `en` } : {}),
    fallbackLng: `en`,
    supportedLngs: Z.map((e) => e.code),
    resources: {
      en: { common: je },
      es: { common: Me },
      fr: { common: Ne },
      de: { common: Pe },
      ja: { common: Fe },
      zh: { common: Ie },
      ar: { common: Le },
      ru: { common: Re },
    },
    ns: [`common`],
    defaultNS: `common`,
    interpolation: { escapeValue: !1 },
    react: { useSuspense: !0 },
    detection: {
      order: [`localStorage`, `navigator`, `querystring`],
      lookupQuerystring: `lang`,
      lookupLocalStorage: `sandscape-language`,
      caches: Q ? [] : [`localStorage`],
    },
  });
async function Be() {
  if (!(!$ || $ === G.resolvedLanguage)) {
    await G.changeLanguage($);
    try {
      window.localStorage.setItem(`sandscape-language`, $);
    } catch {}
  }
}
var Ve = [`ar`];
function He(e) {
  if (typeof document > `u`) return;
  let t = (e || G.resolvedLanguage || `en`).split(`-`)[0];
  ((document.documentElement.lang = t),
    (document.documentElement.dir = Ve.includes(t) ? `rtl` : `ltr`));
}
(G.on(`languageChanged`, He), He());
