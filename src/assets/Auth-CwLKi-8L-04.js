// Auth-CwLKi-8L 04 — classname
// Lines 798-920 of readable/assets/Auth-CwLKi-8L.pretty.js (statement-aligned).
function Oe() {
  return window.turnstile
    ? Promise.resolve()
    : De ||
        ((De = new Promise((e, t) => {
          let n = document.querySelector(
            `script[data-sandscape-turnstile="true"]`,
          );
          if (n) {
            (n.addEventListener(`load`, () => e(), { once: !0 }),
              n.addEventListener(
                `error`,
                () => t(Error(`Turnstile failed to load`)),
                { once: !0 },
              ));
            return;
          }
          let r = document.createElement(`script`);
          ((r.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`),
            (r.async = !0),
            (r.defer = !0),
            (r.dataset.sandscapeTurnstile = `true`),
            (r.onload = () => e()),
            (r.onerror = () => t(Error(`Turnstile failed to load`))),
            document.head.appendChild(r));
        })),
        De);
}
function ke({ siteKey: e, resetKey: t, onTokenChange: n }) {
  let r = (0, j.useRef)(null);
  return (
    (0, j.useEffect)(() => {
      if (!e || !r.current) return;
      let t = !1,
        i = null;
      return (
        n(null),
        Oe()
          .then(() => {
            t ||
              !r.current ||
              !window.turnstile ||
              (i = window.turnstile.render(r.current, {
                sitekey: e,
                theme: `auto`,
                callback: (e) => n(e),
                "expired-callback": () => n(null),
                "error-callback": () => n(null),
              }));
          })
          .catch(() => n(null)),
        () => {
          ((t = !0), i && window.turnstile && window.turnstile.remove(i));
        }
      );
    }, [e, t, n]),
    e
      ? (0, Z.jsx)(`div`, {
          ref: r,
          className: `flex min-h-[65px] justify-center`,
          "aria-label": `Security verification`,
        })
      : null
  );
}
function Q(e, t) {
  return e == null || e === `` ? t : e.toLowerCase() === `true`;
}
var $ = {
  providers: {
    google: Q(void 0, !0),
    github: Q(void 0, !1),
    apple: Q(void 0, !1),
    facebook: Q(void 0, !1),
  },
  turnstileSiteKey: void 0,
  resendCooldownSeconds: 60,
};
function Ae(e) {
  return e.replace(/\D/g, ``).slice(0, 10);
}
function je(e) {
  return RegExp(`^\\d{6,10}$`).test(e);
}
var Me = new Set([
    `chooser`,
    `otp`,
    `password-signin`,
    `recovery`,
    `password-update`,
    `confirmation`,
  ]),
  Ne = new Set([`google`, `github`, `apple`, `facebook`]),
  Pe = [
    {
      provider: `google`,
      enabled: $.providers.google,
      icon: (0, Z.jsx)(Ee, { className: `h-5 w-5` }),
    },
    {
      provider: `github`,
      enabled: $.providers.github,
      icon: (0, Z.jsx)(we, { className: `h-5 w-5` }),
    },
    {
      provider: `apple`,
      enabled: $.providers.apple,
      icon: (0, Z.jsx)(Te, { className: `h-5 w-5` }),
    },
    {
      provider: `facebook`,
      enabled: $.providers.facebook,
      icon: (0, Z.jsx)(X, { className: `h-5 w-5 text-blue-500` }),
    },
  ];
function Fe(e, t, n) {
  let r = new URLSearchParams({ entryPoint: t });
  return (
    e !== `/` && r.set(`returnTo`, e),
    n && r.set(`provider`, n),
    `/onboarding?${r.toString()}`
  );
}
