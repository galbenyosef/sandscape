import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { n as t, t as n } from "./jsx-runtime-BtyjnKZj.js";
import { t as r } from "./react-dom-CWn-H0Rd.js";
import { r as i } from "./button-gyaE5cND.js";
var a = i(`ChevronRight`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  o = i(`Circle`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }]]),
  s = i(`Globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` },
    ],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  c = i(`Moon`, [
    [`path`, { d: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z`, key: `a7tn18` }],
  ]),
  l = i(`Paintbrush`, [
    [`path`, { d: `m14.622 17.897-10.68-2.913`, key: `vj2p1u` }],
    [
      `path`,
      {
        d: `M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z`,
        key: `18tc5c`,
      },
    ],
    [
      `path`,
      {
        d: `M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15`,
        key: `ytzfxy`,
      },
    ],
  ]),
  u = i(`Palette`, [
    [
      `circle`,
      { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` },
    ],
    [
      `circle`,
      { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` },
    ],
    [
      `circle`,
      { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` },
    ],
    [
      `circle`,
      { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` },
    ],
    [
      `path`,
      {
        d: `M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z`,
        key: `12rzf8`,
      },
    ],
  ]),
  d = i(`Sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  f = e(t(), 1),
  p = e(r(), 1),
  m = (e) => {
    switch (e) {
      case `success`:
        return _;
      case `info`:
        return y;
      case `warning`:
        return v;
      case `error`:
        return b;
      default:
        return null;
    }
  },
  h = Array(12).fill(0),
  g = ({ visible: e, className: t }) =>
    f.createElement(
      `div`,
      {
        className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
        "data-visible": e,
      },
      f.createElement(
        `div`,
        { className: `sonner-spinner` },
        h.map((e, t) =>
          f.createElement(`div`, {
            className: `sonner-loading-bar`,
            key: `spinner-bar-${t}`,
          }),
        ),
      ),
    ),
  _ = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    }),
  ),
  v = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    }),
  ),
  y = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    }),
  ),
  b = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    f.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    }),
  ),
  x = f.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    f.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    f.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
  ),
  S = () => {
    let [e, t] = f.useState(document.hidden);
    return (
      f.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  C = 1,
  w = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : C++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 || e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((e) => {
              this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) =>
          this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description:
                typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), f.isValidElement(e)))
                  ((i = !1),
                    this.create({ id: n, type: `default`, message: e }));
                else if (E(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: `error`,
                    message: r,
                    description: a,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r =
                      typeof t.success == `function`
                        ? await t.success(e)
                        : t.success,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description;
                  this.create({
                    id: n,
                    type: `success`,
                    message: r,
                    description: a,
                  });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description;
                  this.create({
                    id: n,
                    type: `error`,
                    message: r,
                    description: a,
                  });
                }
              })
              .finally(() => {
                var e;
                (i && (this.dismiss(n), (n = void 0)),
                  (e = t.finally) == null || e.call(t));
              }),
            s = () =>
              new Promise((e, t) =>
                o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t),
              );
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || C++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  T = (e, t) => {
    let n = t?.id || C++;
    return (w.addToast({ title: e, ...t, id: n }), n);
  },
  E = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  ee = Object.assign(
    T,
    {
      success: w.success,
      info: w.info,
      warning: w.warning,
      error: w.error,
      custom: w.custom,
      message: w.message,
      promise: w.promise,
      dismiss: w.dismiss,
      loading: w.loading,
    },
    { getHistory: () => w.toasts, getToasts: () => w.getActiveToasts() },
  );
function D(e, { insertAt: t } = {}) {
  if (!e || typeof document > `u`) return;
  let n = document.head || document.getElementsByTagName(`head`)[0],
    r = document.createElement(`style`);
  ((r.type = `text/css`),
    t === `top` && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
D(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function O(e) {
  return e.label !== void 0;
}
var k = 3,
  A = `32px`,
  j = `16px`,
  M = 4e3,
  te = 356,
  N = 14,
  ne = 20,
  re = 200;
function P(...e) {
  return e.filter(Boolean).join(` `);
}
function F(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var I = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: p,
      closeButton: h,
      style: _,
      cancelButtonStyle: v,
      actionButtonStyle: y,
      className: b = ``,
      descriptionClassName: C = ``,
      duration: w,
      position: T,
      gap: E,
      loadingIcon: ee,
      expandByDefault: D,
      classNames: k,
      icons: A,
      closeButtonAriaLabel: j = `Close toast`,
      pauseWhenPageIsHidden: te,
    } = e,
    [N, I] = f.useState(null),
    [ie, ae] = f.useState(null),
    [L, R] = f.useState(!1),
    [z, oe] = f.useState(!1),
    [se, B] = f.useState(!1),
    [ce, le] = f.useState(!1),
    [V, H] = f.useState(!1),
    [ue, U] = f.useState(0),
    [de, W] = f.useState(0),
    G = f.useRef(n.duration || w || M),
    fe = f.useRef(null),
    K = f.useRef(null),
    pe = c === 0,
    me = c + 1 <= o,
    q = n.type,
    J = n.dismissible !== !1,
    he = n.className || ``,
    ge = n.descriptionClassName || ``,
    Y = f.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]),
    _e = f.useMemo(() => n.closeButton ?? h, [n.closeButton, h]),
    ve = f.useMemo(() => n.duration || w || M, [n.duration, w]),
    X = f.useRef(0),
    Z = f.useRef(0),
    ye = f.useRef(0),
    Q = f.useRef(null),
    [be, xe] = T.split(`-`),
    Se = f.useMemo(
      () => s.reduce((e, t, n) => (n >= Y ? e : e + t.height), 0),
      [s, Y],
    ),
    Ce = S(),
    we = n.invert || t,
    Te = q === `loading`;
  ((Z.current = f.useMemo(() => Y * E + Se, [Y, Se])),
    f.useEffect(() => {
      G.current = ve;
    }, [ve]),
    f.useEffect(() => {
      R(!0);
    }, []),
    f.useEffect(() => {
      let e = K.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          W(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    f.useLayoutEffect(() => {
      if (!L) return;
      let e = K.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        W(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [L, n.title, n.description, a, n.id]));
  let $ = f.useCallback(() => {
    (oe(!0),
      U(Z.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, re));
  }, [n, d, a, Z]);
  (f.useEffect(() => {
    if (
      (n.promise && q === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || (te && Ce)
        ? (() => {
            if (ye.current < X.current) {
              let e = new Date().getTime() - X.current;
              G.current -= e;
            }
            ye.current = new Date().getTime();
          })()
        : G.current !== 1 / 0 &&
          ((X.current = new Date().getTime()),
          (e = setTimeout(() => {
            var e;
            ((e = n.onAutoClose) == null || e.call(n, n), $());
          }, G.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, q, te, Ce, $]),
    f.useEffect(() => {
      n.delete && $();
    }, [$, n.delete]));
  function Ee() {
    return A != null && A.loading
      ? f.createElement(
          `div`,
          {
            className: P(k?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": q === `loading`,
          },
          A.loading,
        )
      : ee
        ? f.createElement(
            `div`,
            {
              className: P(k?.loader, n?.classNames?.loader, `sonner-loader`),
              "data-visible": q === `loading`,
            },
            ee,
          )
        : f.createElement(g, {
            className: P(k?.loader, n?.classNames?.loader),
            visible: q === `loading`,
          });
  }
  return f.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: K,
      className: P(
        b,
        he,
        k?.toast,
        n?.classNames?.toast,
        k?.default,
        k?.[q],
        n?.classNames?.[q],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? p,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": L,
      "data-promise": !!n.promise,
      "data-swiped": V,
      "data-removed": z,
      "data-visible": me,
      "data-y-position": be,
      "data-x-position": xe,
      "data-index": c,
      "data-front": pe,
      "data-swiping": se,
      "data-dismissible": J,
      "data-type": q,
      "data-invert": we,
      "data-swipe-out": ce,
      "data-swipe-direction": ie,
      "data-expanded": !!(u || (D && L)),
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${z ? ue : Z.current}px`,
        "--initial-height": D ? `auto` : `${de}px`,
        ..._,
        ...n.style,
      },
      onDragEnd: () => {
        (B(!1), I(null), (Q.current = null));
      },
      onPointerDown: (e) => {
        Te ||
          !J ||
          ((fe.current = new Date()),
          U(Z.current),
          e.target.setPointerCapture(e.pointerId),
          e.target.tagName !== `BUTTON` &&
            (B(!0), (Q.current = { x: e.clientX, y: e.clientY })));
      },
      onPointerUp: () => {
        var e;
        if (ce || !J) return;
        Q.current = null;
        let t = Number(
            K.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0,
          ),
          r = Number(
            K.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0,
          ),
          i = new Date().getTime() - fe.current?.getTime(),
          a = N === `x` ? t : r,
          o = Math.abs(a) / i;
        if (Math.abs(a) >= ne || o > 0.11) {
          (U(Z.current),
            (e = n.onDismiss) == null || e.call(n, n),
            ae(N === `x` ? (t > 0 ? `right` : `left`) : r > 0 ? `down` : `up`),
            $(),
            le(!0),
            H(!1));
          return;
        }
        (B(!1), I(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!Q.current || !J || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - Q.current.y,
          a = t.clientX - Q.current.x,
          o = e.swipeDirections ?? F(T);
        !N &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          I(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 };
        (N === `y`
          ? (o.includes(`top`) || o.includes(`bottom`)) &&
            ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0)) &&
            (s.y = i)
          : N === `x` &&
            (o.includes(`left`) || o.includes(`right`)) &&
            ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0)) &&
            (s.x = a),
          (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && H(!0),
          (n = K.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = K.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    _e && !n.jsx
      ? f.createElement(
          `button`,
          {
            "aria-label": j,
            "data-disabled": Te,
            "data-close-button": !0,
            onClick:
              Te || !J
                ? () => {}
                : () => {
                    var e;
                    ($(), (e = n.onDismiss) == null || e.call(n, n));
                  },
            className: P(k?.closeButton, n?.classNames?.closeButton),
          },
          A?.close ?? x,
        )
      : null,
    n.jsx || (0, f.isValidElement)(n.title)
      ? n.jsx
        ? n.jsx
        : typeof n.title == `function`
          ? n.title()
          : n.title
      : f.createElement(
          f.Fragment,
          null,
          q || n.icon || n.promise
            ? f.createElement(
                `div`,
                { "data-icon": ``, className: P(k?.icon, n?.classNames?.icon) },
                n.promise || (n.type === `loading` && !n.icon)
                  ? n.icon || Ee()
                  : null,
                n.type === `loading` ? null : n.icon || A?.[q] || m(q),
              )
            : null,
          f.createElement(
            `div`,
            {
              "data-content": ``,
              className: P(k?.content, n?.classNames?.content),
            },
            f.createElement(
              `div`,
              {
                "data-title": ``,
                className: P(k?.title, n?.classNames?.title),
              },
              typeof n.title == `function` ? n.title() : n.title,
            ),
            n.description
              ? f.createElement(
                  `div`,
                  {
                    "data-description": ``,
                    className: P(
                      C,
                      ge,
                      k?.description,
                      n?.classNames?.description,
                    ),
                  },
                  typeof n.description == `function`
                    ? n.description()
                    : n.description,
                )
              : null,
          ),
          (0, f.isValidElement)(n.cancel)
            ? n.cancel
            : n.cancel && O(n.cancel)
              ? f.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: n.cancelButtonStyle || v,
                    onClick: (e) => {
                      var t, r;
                      O(n.cancel) &&
                        J &&
                        ((r = (t = n.cancel).onClick) == null || r.call(t, e),
                        $());
                    },
                    className: P(k?.cancelButton, n?.classNames?.cancelButton),
                  },
                  n.cancel.label,
                )
              : null,
          (0, f.isValidElement)(n.action)
            ? n.action
            : n.action && O(n.action)
              ? f.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: n.actionButtonStyle || y,
                    onClick: (e) => {
                      var t, r;
                      O(n.action) &&
                        ((r = (t = n.action).onClick) == null || r.call(t, e),
                        !e.defaultPrevented && $());
                    },
                    className: P(k?.actionButton, n?.classNames?.actionButton),
                  },
                  n.action.label,
                )
              : null,
        ),
  );
};
function ie() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function ae(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? j : A;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var L = (0, f.forwardRef)(function (e, t) {
    let {
        invert: n,
        position: r = `bottom-right`,
        hotkey: i = [`altKey`, `KeyT`],
        expand: a,
        closeButton: o,
        className: s,
        offset: c,
        mobileOffset: l,
        theme: u = `light`,
        richColors: d,
        duration: m,
        style: h,
        visibleToasts: g = k,
        toastOptions: _,
        dir: v = ie(),
        gap: y = N,
        loadingIcon: b,
        icons: x,
        containerAriaLabel: S = `Notifications`,
        pauseWhenPageIsHidden: C,
      } = e,
      [T, E] = f.useState([]),
      ee = f.useMemo(
        () =>
          Array.from(
            new Set(
              [r].concat(T.filter((e) => e.position).map((e) => e.position)),
            ),
          ),
        [T, r],
      ),
      [D, O] = f.useState([]),
      [A, j] = f.useState(!1),
      [M, ne] = f.useState(!1),
      [re, P] = f.useState(
        u === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : u,
      ),
      F = f.useRef(null),
      L = i.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      R = f.useRef(null),
      z = f.useRef(!1),
      oe = f.useCallback((e) => {
        E((t) => {
          var n;
          return (
            ((n = t.find((t) => t.id === e.id)) != null && n.delete) ||
              w.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          );
        });
      }, []);
    return (
      f.useEffect(
        () =>
          w.subscribe((e) => {
            if (e.dismiss) {
              E((t) =>
                t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
              );
              return;
            }
            setTimeout(() => {
              p.flushSync(() => {
                E((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        [],
      ),
      f.useEffect(() => {
        if (u !== `system`) {
          P(u);
          return;
        }
        if (
          (u === `system` &&
            (window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? P(`dark`)
              : P(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            P(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              P(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [u]),
      f.useEffect(() => {
        T.length <= 1 && j(!1);
      }, [T]),
      f.useEffect(() => {
        let e = (e) => {
          var t, n;
          (i.every((t) => e[t] || e.code === t) &&
            (j(!0), (t = F.current) == null || t.focus()),
            e.code === `Escape` &&
              (document.activeElement === F.current ||
                ((n = F.current) != null &&
                  n.contains(document.activeElement))) &&
              j(!1));
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [i]),
      f.useEffect(() => {
        if (F.current)
          return () => {
            R.current &&
              (R.current.focus({ preventScroll: !0 }),
              (R.current = null),
              (z.current = !1));
          };
      }, [F.current]),
      f.createElement(
        `section`,
        {
          ref: t,
          "aria-label": `${S} ${L}`,
          tabIndex: -1,
          "aria-live": `polite`,
          "aria-relevant": `additions text`,
          "aria-atomic": `false`,
          suppressHydrationWarning: !0,
        },
        ee.map((t, r) => {
          let [i, u] = t.split(`-`);
          return T.length
            ? f.createElement(
                `ol`,
                {
                  key: t,
                  dir: v === `auto` ? ie() : v,
                  tabIndex: -1,
                  ref: F,
                  className: s,
                  "data-sonner-toaster": !0,
                  "data-theme": re,
                  "data-y-position": i,
                  "data-lifted": A && T.length > 1 && !a,
                  "data-x-position": u,
                  style: {
                    "--front-toast-height": `${D[0]?.height || 0}px`,
                    "--width": `${te}px`,
                    "--gap": `${y}px`,
                    ...h,
                    ...ae(c, l),
                  },
                  onBlur: (e) => {
                    z.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((z.current = !1),
                      (R.current &&=
                        (R.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      z.current ||
                      ((z.current = !0), (R.current = e.relatedTarget));
                  },
                  onMouseEnter: () => j(!0),
                  onMouseMove: () => j(!0),
                  onMouseLeave: () => {
                    M || j(!1);
                  },
                  onDragEnd: () => j(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      ne(!0);
                  },
                  onPointerUp: () => ne(!1),
                },
                T.filter(
                  (e) => (!e.position && r === 0) || e.position === t,
                ).map((r, i) =>
                  f.createElement(I, {
                    key: r.id,
                    icons: x,
                    index: i,
                    toast: r,
                    defaultRichColors: d,
                    duration: _?.duration ?? m,
                    className: _?.className,
                    descriptionClassName: _?.descriptionClassName,
                    invert: n,
                    visibleToasts: g,
                    closeButton: _?.closeButton ?? o,
                    interacting: M,
                    position: t,
                    style: _?.style,
                    unstyled: _?.unstyled,
                    classNames: _?.classNames,
                    cancelButtonStyle: _?.cancelButtonStyle,
                    actionButtonStyle: _?.actionButtonStyle,
                    removeToast: oe,
                    toasts: T.filter((e) => e.position == r.position),
                    heights: D.filter((e) => e.position == r.position),
                    setHeights: O,
                    expandByDefault: a,
                    gap: y,
                    loadingIcon: b,
                    expanded: A,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  }),
                ),
              )
            : null;
        }),
      )
    );
  }),
  R = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          ((t =
            (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e)));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  },
  z = (e) => (e ? R(e) : R),
  oe = (e) => e;
function se(e, t = oe) {
  let n = f.useSyncExternalStore(
    e.subscribe,
    f.useCallback(() => t(e.getState()), [e, t]),
    f.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return (f.useDebugValue(n), n);
}
var B = (e) => {
    let t = z(e),
      n = (e) => se(t, e);
    return (Object.assign(n, t), n);
  },
  ce = (e) => (e ? B(e) : B),
  le = {
    active: !1,
    kind: null,
    payload: null,
    pointer: { x: 0, y: 0 },
    hoveredZoneId: null,
    canDrop: !1,
  },
  V = ce((e) => ({
    ...le,
    begin: (t, n, r, i) =>
      e({
        active: !0,
        kind: t,
        payload: n,
        pointer: { x: r, y: i },
        hoveredZoneId: null,
        canDrop: !1,
      }),
    setPointer: (t, n) => e({ pointer: { x: t, y: n } }),
    setHover: (t, n) => e({ hoveredZoneId: t, canDrop: n }),
    clear: () => e(le),
  })),
  H = n(),
  ue = 14;
function U() {
  let e = V((e) => e.active),
    t = V((e) => e.pointer),
    n = K();
  return e
    ? (0, p.createPortal)(
        (0, H.jsx)(`div`, {
          className: `fixed left-0 top-0 z-[100] pointer-events-none`,
          style: {
            transform: `translate3d(${t.x + ue}px, ${t.y + ue}px, 0) scale(1.02)`,
            opacity: 0.92,
            filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.55))`,
            willChange: `transform`,
          },
          children: n.current,
        }),
        document.body,
      )
    : null;
}
var de = (0, f.createContext)(null),
  W = 36,
  G = 18,
  fe = (0, f.createContext)(null);
function K() {
  let e = (0, f.useContext)(fe);
  if (!e) throw Error(`useDragGhost must be used within <DragProvider>`);
  return e;
}
function pe() {
  let e = (0, f.useContext)(de);
  if (!e) throw Error(`useDragContext must be used within <DragProvider>`);
  return e;
}
function me(e, t) {
  let n = e;
  for (; n && n !== document.body && n instanceof HTMLElement;) {
    let e = getComputedStyle(n),
      r = t === `y` ? e.overflowY : e.overflowX,
      i = r === `auto` || r === `scroll`,
      a =
        t === `y`
          ? n.scrollHeight > n.clientHeight
          : n.scrollWidth > n.clientWidth;
    if (i && a) return n;
    n = n.parentElement;
  }
  let r = document.scrollingElement;
  return r &&
    (t === `y`
      ? r.scrollHeight > r.clientHeight
      : r.scrollWidth > r.clientWidth)
    ? r
    : null;
}
function q(e) {
  if (e === document.scrollingElement || e === document.documentElement)
    return {
      top: 0,
      bottom: window.innerHeight,
      left: 0,
      right: window.innerWidth,
    };
  let t = e.getBoundingClientRect();
  return { top: t.top, bottom: t.bottom, left: t.left, right: t.right };
}
function J({ children: e }) {
  let t = (0, f.useRef)(new Map()),
    n = (0, f.useRef)(null),
    r = (0, f.useRef)(null),
    i = (0, f.useRef)(null),
    a = (0, f.useRef)(null),
    o = V,
    s = (0, f.useCallback)(() => {
      (i.current !== null &&
        (cancelAnimationFrame(i.current), (i.current = null)),
        (a.current = null));
    }, []),
    c = (0, f.useCallback)(() => {
      i.current = null;
      let e = a.current;
      if (!e) return;
      let t = document.elementFromPoint(e.x, e.y),
        n = me(t, `y`),
        r = me(t, `x`),
        o = !1;
      if (n) {
        let t = q(n);
        e.y - t.top < W
          ? ((n.scrollTop -= G), (o = !0))
          : t.bottom - e.y < W && ((n.scrollTop += G), (o = !0));
      }
      if (r) {
        let t = q(r);
        e.x - t.left < W
          ? ((r.scrollLeft -= G), (o = !0))
          : t.right - e.x < W && ((r.scrollLeft += G), (o = !0));
      }
      o ? (i.current = requestAnimationFrame(c)) : (a.current = null);
    }, []),
    l = (0, f.useCallback)(
      (e, t) => {
        ((a.current = { x: e, y: t }),
          i.current === null && (i.current = requestAnimationFrame(c)));
      },
      [c],
    ),
    u = (0, f.useRef)(null),
    d = (0, f.useCallback)(() => {
      let e = u.current;
      e &&
        (window.removeEventListener(`pointermove`, e.move),
        window.removeEventListener(`pointerup`, e.up),
        window.removeEventListener(`pointercancel`, e.cancel),
        window.removeEventListener(`keydown`, e.key),
        (u.current = null));
    }, []),
    p = (0, f.useCallback)(() => {
      ((document.body.style.cursor = ``),
        (document.body.style.userSelect = ``));
    }, []),
    m = (0, f.useCallback)(
      (e) => {
        let i = r.current,
          a = !!i?.active;
        (i?.lastZoneId && t.current.get(i.lastZoneId)?.onDragLeave?.(),
          i?.onDragEnd?.(e),
          (r.current = null),
          d(),
          s(),
          a && (p(), (n.current = null), o.getState().clear()));
      },
      [d, s, p, o],
    ),
    h = (0, f.useCallback)(
      (e) => {
        (r.current && m(!1),
          (r.current = {
            data: e.data,
            onDragEnd: e.onDragEnd,
            startX: e.startX,
            startY: e.startY,
            thresholdPx: e.thresholdPx ?? 5,
            active: !1,
            lastZoneId: null,
          }),
          (n.current = e.preview));
        let i = (t, n) => {
            let i = r.current;
            !i ||
              i.active ||
              ((i.active = !0),
              (document.body.style.cursor = `grabbing`),
              (document.body.style.userSelect = `none`),
              o.getState().begin(i.data.kind, i.data.payload, t, n),
              e.onActivate?.());
          },
          a = (e) => {
            let n = r.current;
            if (!n) return;
            let { clientX: a, clientY: c } = e;
            if (!n.active) {
              if (Math.hypot(a - n.startX, c - n.startY) < n.thresholdPx)
                return;
              i(a, c);
            }
            o.getState().setPointer(a, c);
            let u = { x: a, y: c },
              d =
                document.elementFromPoint(a, c)?.closest(`[data-dnd-zone]`)
                  ?.dataset.dndZone ?? null,
              f = d ? (t.current.get(d) ?? null) : null,
              p = !!f && f.accept(n.data);
            (d !== n.lastZoneId &&
              (n.lastZoneId && t.current.get(n.lastZoneId)?.onDragLeave?.(),
              f && f.onDragEnter?.(),
              (n.lastZoneId = d)),
              f?.onDragOver?.(n.data, u),
              o.getState().setHover(d, p),
              f && f.autoScroll !== !1 ? l(a, c) : s());
          },
          c = (e) => {
            let n = r.current;
            if (!n) {
              (d(), s());
              return;
            }
            let i = !1;
            if (n.active) {
              let r = { x: e.clientX, y: e.clientY },
                a = n.lastZoneId ? t.current.get(n.lastZoneId) : null;
              a && a.accept(n.data) && (a.onDrop(n.data, r), (i = !0));
            }
            m(i);
          },
          f = () => m(!1),
          p = (e) => {
            e.key === `Escape` &&
              r.current?.active &&
              (e.preventDefault(), m(!1));
          };
        ((u.current = { move: a, up: c, cancel: f, key: p }),
          window.addEventListener(`pointermove`, a),
          window.addEventListener(`pointerup`, c),
          window.addEventListener(`pointercancel`, f),
          window.addEventListener(`keydown`, p));
      },
      [m, d, l, s, o],
    ),
    g = (0, f.useCallback)((e, n) => {
      t.current.set(e, n);
    }, []),
    _ = (0, f.useCallback)((e) => {
      t.current.delete(e);
    }, []);
  (0, f.useEffect)(
    () => () => {
      (d(), s(), p());
    },
    [d, s, p],
  );
  let v = (0, f.useRef)({ registerZone: g, unregisterZone: _, beginDrag: h });
  return (
    (v.current.registerZone = g),
    (v.current.unregisterZone = _),
    (v.current.beginDrag = h),
    (0, H.jsx)(de.Provider, {
      value: v.current,
      children: (0, H.jsxs)(fe.Provider, {
        value: n,
        children: [e, (0, H.jsx)(U, {})],
      }),
    })
  );
}
var he = { touchAction: `manipulation`, cursor: `grab`, userSelect: `none` },
  ge = 320,
  Y = 8;
function _e(e) {
  let { beginDrag: t } = pe(),
    n = (0, f.useRef)(e);
  n.current = e;
  let [r, i] = (0, f.useState)(!1),
    a = (0, f.useRef)(null);
  return (
    (0, f.useEffect)(
      () => () => {
        a.current?.();
      },
      [],
    ),
    {
      dragProps: {
        onPointerDown: (0, f.useCallback)(
          (e) => {
            let r = n.current;
            if (r.disabled || e.button !== 0) return;
            let o = typeof r.payload == `function` ? r.payload() : r.payload,
              s = typeof r.preview == `function` ? r.preview() : r.preview,
              c = e.currentTarget,
              l = { dragStarted: !1 },
              u = (e) => {
                (l.dragStarted && (e.stopPropagation(), e.preventDefault()),
                  c.removeEventListener(`click`, u, !0));
              };
            c.addEventListener(`click`, u, !0);
            let d = e.pointerType === `touch`,
              f = e.pointerId,
              p = e.clientX,
              m = e.clientY,
              h = (e) => e.preventDefault(),
              g = !1,
              _ = () => {
                g && ((g = !1), c.removeEventListener(`touchmove`, h));
              },
              v = null,
              y = () => {
                (r.onDragStart?.(),
                  t({
                    data: { kind: r.kind, payload: o },
                    preview: s,
                    startX: p,
                    startY: m,
                    thresholdPx: d ? 0 : r.thresholdPx,
                    onActivate: () => {
                      ((l.dragStarted = !0), i(!0));
                    },
                    onDragEnd: (e) => {
                      (v?.(),
                        i(!1),
                        n.current.onDragEnd?.(e),
                        l.dragStarted
                          ? setTimeout(
                              () => c.removeEventListener(`click`, u, !0),
                              0,
                            )
                          : c.removeEventListener(`click`, u, !0));
                    },
                  }));
              };
            if (!d) {
              y();
              return;
            }
            if (a.current) return;
            let b = null,
              x = !1,
              S = () => {
                (b !== null && (window.clearTimeout(b), (b = null)),
                  window.removeEventListener(`pointermove`, w),
                  window.removeEventListener(`pointerup`, C),
                  window.removeEventListener(`pointercancel`, C));
              };
            ((v = () => {
              a.current === v &&
                ((a.current = null),
                S(),
                _(),
                x || c.removeEventListener(`click`, u, !0));
            }),
              (a.current = v));
            function C(e) {
              e.pointerId === f && v?.();
            }
            function w(e) {
              e.pointerId === f &&
                Math.hypot(e.clientX - p, e.clientY - m) > Y &&
                v?.();
            }
            (window.addEventListener(`pointermove`, w),
              window.addEventListener(`pointerup`, C),
              window.addEventListener(`pointercancel`, C),
              (b = window.setTimeout(() => {
                ((b = null),
                  S(),
                  (x = !0),
                  c.addEventListener(`touchmove`, h, { passive: !1 }),
                  (g = !0),
                  y());
              }, ge)));
          },
          [t],
        ),
        style: he,
        draggable: !1,
      },
      isDragging: r,
    }
  );
}
function ve(e, t) {
  return t
    ? () => !1
    : typeof e == `function`
      ? e
      : Array.isArray(e)
        ? (t) => e.includes(t.kind)
        : (t) => t.kind === e;
}
function X(e) {
  let t = (0, f.useId)(),
    { registerZone: n, unregisterZone: r } = pe(),
    i = (0, f.useRef)(e);
  i.current = e;
  let a = (0, f.useCallback)(
      (e) => {
        e
          ? ((e.dataset.dndZone = t),
            n(t, {
              el: e,
              accept: (e) => ve(i.current.accept, i.current.disabled)(e),
              onDrop: (e, t) => i.current.onDrop(e, t),
              onDragOver: (e, t) => i.current.onDragOver?.(e, t),
              onDragEnter: () => i.current.onDragEnter?.(),
              onDragLeave: () => i.current.onDragLeave?.(),
              get autoScroll() {
                return i.current.autoScroll;
              },
            }))
          : r(t);
      },
      [t, n, r],
    ),
    o = V((e) => e.active),
    s = V((e) => e.hoveredZoneId),
    c = V((e) => e.kind),
    l = V((e) => e.payload);
  return {
    dropProps: { ref: a, "data-dnd-zone": t },
    isOver: o && s === t,
    activeData: o && c !== null ? { kind: c, payload: l } : null,
  };
}
function Z(e) {
  let {
      listId: t,
      index: n,
      axis: r = `y`,
      onReorder: i,
      preview: a,
      disabled: o,
    } = e,
    s = `reorder:${t}`,
    c = (0, f.useRef)(null),
    [l, u] = (0, f.useState)(null),
    { dragProps: d, isDragging: p } = _e({
      kind: s,
      payload: () => ({ listId: t, index: n }),
      preview: a,
      disabled: o,
    }),
    m = (0, f.useCallback)(
      (e) => {
        let t = c.current;
        if (!t) return `before`;
        let n = t.getBoundingClientRect(),
          i = r === `y` ? n.top + n.height / 2 : n.left + n.width / 2;
        return (r === `y` ? e.y : e.x) < i ? `before` : `after`;
      },
      [r],
    ),
    { dropProps: h, isOver: g } = X({
      accept: (e) => e.kind === s && e.payload?.listId === t,
      onDragOver: (e, t) => u(m(t)),
      onDragLeave: () => u(null),
      onDrop: (e, t) => {
        let r = e.payload.index,
          a = m(t) === `before` ? n : n + 1;
        (r < a && --a, u(null), a !== r && i(r, a));
      },
    });
  return {
    sortableProps: {
      ref: (0, f.useCallback)(
        (e) => {
          ((c.current = e), h.ref(e));
        },
        [h],
      ),
      onPointerDown: d.onPointerDown,
      style: d.style,
      draggable: !1,
      "data-dnd-zone": h[`data-dnd-zone`],
    },
    isDragging: p,
    isOver: g,
    dropSide: g ? l : null,
  };
}
function ye() {
  return { active: V((e) => e.active), kind: V((e) => e.kind) };
}
export {
  J as a,
  ee as c,
  l as d,
  c as f,
  a as h,
  _e as i,
  d as l,
  o as m,
  Z as n,
  ce as o,
  s as p,
  X as r,
  L as s,
  ye as t,
  u,
};
