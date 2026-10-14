// assets__chunk-KS7C4IRE-CgpSK45w 05 — pathname
// Lines 1311-1652 of readable/assets__chunk-KS7C4IRE-CgpSK45w.pretty.js (statement-aligned).
function Ct(e = ``) {
  return new URLSearchParams(
    typeof e == `string` || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, n) => {
          let r = e[n];
          return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
        }, []),
  );
}
function wt(e, t) {
  let n = Ct(e);
  return (
    t &&
      t.forEach((e, r) => {
        n.has(r) ||
          t.getAll(r).forEach((e) => {
            n.append(r, e);
          });
      }),
    n
  );
}
var J = null;
function Tt() {
  if (J === null)
    try {
      (new FormData(document.createElement(`form`), 0), (J = !1));
    } catch {
      J = !0;
    }
  return J;
}
var Et = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function Dt(e) {
  return e != null && !Et.has(e)
    ? (d(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${K}"`,
      ),
      null)
    : e;
}
function Ot(e, t) {
  let n, r, i, a, o;
  if (yt(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? k(o, t) : null),
      (n = e.getAttribute(`method`) || G),
      (i = Dt(e.getAttribute(`enctype`)) || K),
      (a = new FormData(e)));
  } else if (vt(e) || (bt(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? k(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || G),
      (i =
        Dt(e.getAttribute(`formenctype`)) ||
        Dt(o.getAttribute(`enctype`)) ||
        K),
      (a = new FormData(o, e)),
      !Tt())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (q(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = G), (r = null), (i = K), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var kt = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  At = /[&><\u2028\u2029]/g;
function jt(e) {
  return e.replace(At, (e) => kt[e]);
}
function Mt(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function Nt(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && k(i.pathname, t) === `/`
          ? (i.pathname = `${M(t)}/_root.${r}`)
          : (i.pathname = `${M(i.pathname)}.${r}`),
    i
  );
}
async function Pt(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await n(() => import(e.module), []);
    return ((t[e.id] = r), r);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ft(e) {
  return e != null && typeof e.page == `string`;
}
function It(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function Lt(e, t, n) {
  return Ht(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await Pt(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(It)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function Rt(e, t, n, r, i, a) {
  let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function zt(e, t, { includeHydrateFallback: n } = {}) {
  return Bt(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function Bt(e) {
  return [...new Set(e)];
}
function Vt(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Ht(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !Ft(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(Vt(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function Ut() {
  let e = r.useContext(N);
  return (
    Mt(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function Wt() {
  let e = r.useContext(P);
  return (
    Mt(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var Y = r.createContext(void 0);
Y.displayName = `FrameworkContext`;
function X() {
  let e = r.useContext(Y);
  return (
    Mt(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function Gt(e, t) {
  let n = r.useContext(Y),
    [i, a] = r.useState(!1),
    [o, s] = r.useState(!1),
    {
      onFocus: c,
      onBlur: l,
      onMouseEnter: u,
      onMouseLeave: d,
      onTouchStart: f,
    } = t,
    p = r.useRef(null);
  (r.useEffect(() => {
    if ((e === `render` && s(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            s(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        p.current && e.observe(p.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    r.useEffect(() => {
      if (i) {
        let e = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [i]));
  let m = () => {
      a(!0);
    },
    h = () => {
      (a(!1), s(!1));
    };
  return n
    ? e === `intent`
      ? [
          o,
          p,
          {
            onFocus: Z(c, m),
            onBlur: Z(l, h),
            onMouseEnter: Z(u, m),
            onMouseLeave: Z(d, h),
            onTouchStart: Z(f, m),
          },
        ]
      : [o, p, {}]
    : [!1, p, {}];
}
function Z(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
