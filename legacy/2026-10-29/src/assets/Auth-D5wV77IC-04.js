// Auth-D5wV77IC 04 — classname
// Lines 798-920 of readable/assets/Auth-D5wV77IC.pretty.js (statement-aligned).
function ke() {
  return window.turnstile
    ? Promise.resolve()
    : Oe ||
        ((Oe = new Promise((e, t) => {
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
        Oe);
}
function Ae({ siteKey: e, resetKey: t, onTokenChange: n }) {
  let r = (0, A.useRef)(null);
  return (
    (0, A.useEffect)(() => {
      if (!e || !r.current) return;
      let t = !1,
        i = null;
      return (
        n(null),
        ke()
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
      ? (0, X.jsx)(`div`, {
          ref: r,
          className: `flex min-h-[65px] justify-center`,
          "aria-label": `Security verification`,
        })
      : null
  );
}
function Z(e, t) {
  return e == null || e === `` ? t : e.toLowerCase() === `true`;
}
var Q = {
  providers: {
    google: Z(void 0, !0),
    github: Z(void 0, !1),
    apple: Z(void 0, !1),
    facebook: Z(void 0, !1),
  },
  turnstileSiteKey: void 0,
  resendCooldownSeconds: 60,
};
function je(e) {
  return e.replace(/\D/g, ``).slice(0, 10);
}
function Me(e) {
  return RegExp(`^\\d{6,10}$`).test(e);
}
var Ne = new Set([
    `chooser`,
    `otp`,
    `password-signin`,
    `recovery`,
    `password-update`,
    `confirmation`,
  ]),
  Pe = new Set([`google`, `github`, `apple`, `facebook`]),
  Fe = [
    {
      provider: `google`,
      enabled: Q.providers.google,
      icon: (0, X.jsx)(De, { className: `h-5 w-5` }),
    },
    {
      provider: `github`,
      enabled: Q.providers.github,
      icon: (0, X.jsx)(Te, { className: `h-5 w-5` }),
    },
    {
      provider: `apple`,
      enabled: Q.providers.apple,
      icon: (0, X.jsx)(Ee, { className: `h-5 w-5` }),
    },
    {
      provider: `facebook`,
      enabled: Q.providers.facebook,
      icon: (0, X.jsx)(Y, { className: `h-5 w-5 text-blue-500` }),
    },
  ];
function Ie(e, t, n) {
  let r = new URLSearchParams({ entryPoint: t });
  return (
    e !== `/` && r.set(`returnTo`, e),
    n && r.set(`provider`, n),
    `/onboarding?${r.toString()}`
  );
}
