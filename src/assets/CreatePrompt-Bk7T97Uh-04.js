// CreatePrompt-Bk7T97Uh 04 — math
// Lines 901-1171 of readable/assets/CreatePrompt-Bk7T97Uh.pretty.js (statement-aligned).
function Ie({ className: e, alignTo: t }) {
  let n = (0, G.useRef)(null),
    [r, i] = (0, G.useState)(!1),
    a = C(),
    s = D();
  return (
    (0, G.useEffect)(() => {
      let e = n.current;
      if (!e) return;
      let r = ye[a],
        l = s === `light` ? ge : he,
        u;
      try {
        u = new ae({
          antialias: !1,
          alpha: !1,
          powerPreference: r.powerPreference,
        });
      } catch {
        i(!0);
        return;
      }
      (i((e) => e && !1),
        u.setClearColor(l.clear, 1),
        (u.outputColorSpace = re),
        (u.toneMapping = l.toneMapping),
        (u.toneMappingExposure = r.exposure),
        (u.domElement.style.display = `block`),
        (u.domElement.style.opacity = String(l.opacity)),
        e.appendChild(u.domElement));
      let {
          scene: f,
          camera: p,
          uniforms: m,
          updateWaveGeometry: h,
          fitAtmosphere: g,
        } = Pe(r, l),
        _ = null,
        v = null;
      r.bloom &&
        l.bloom &&
        ((_ = new o(u)),
        _.addPass(new c(f, p)),
        (v = new d(new I(1, 1), r.bloomStrength, 0.84, 0.04)),
        _.addPass(v));
      let y = () => {
          _ ? _.render() : u.render(f, p);
        },
        b = (t) => {
          let n = 0,
            r = t.parentElement;
          for (; r && r !== e;) ((n += r.scrollTop), (r = r.parentElement));
          return n;
        },
        x = () => {
          let n = t?.current;
          if (!n) return 0.5;
          let r = e.getBoundingClientRect(),
            i = n.getBoundingClientRect();
          if (r.height === 0 || i.height === 0) return 0.5;
          let a = i.top + i.height / 2 - r.top + b(n);
          return N.clamp(a / r.height, 0.12, 0.88);
        },
        S = () => {
          let e = 2 * Math.tan(N.degToRad(p.fov * 0.5)) * p.position.z;
          return (x() - 0.5) * e;
        },
        C = () => {
          let e = S();
          return Math.abs(e - p.position.y) < 0.002
            ? !1
            : ((p.position.y = e), g(), !0);
        },
        w = () => {
          let t = e.clientWidth || window.innerWidth,
            n = e.clientHeight || window.innerHeight;
          if (t === 0 || n === 0) return;
          let i = Math.sqrt(r.maxRenderPixels / Math.max(1, t * n)),
            a = Math.min(window.devicePixelRatio, r.maxPixelRatio, i),
            o = t / n;
          p.aspect = o;
          let s = Math.tan(N.degToRad(p.fov * 0.5));
          ((p.position.z =
            o < 1 ? Math.min(J / o, _e) : Math.min(J, ve / (s * o))),
            (p.position.y = S()),
            p.updateProjectionMatrix(),
            (m.uCameraZ.value = p.position.z),
            g(),
            u.setPixelRatio(a),
            u.setSize(t, n),
            _?.setPixelRatio(a),
            _?.setSize(t, n),
            (m.uPixelRatio.value = a),
            y());
        };
      w();
      let T = new ResizeObserver(w);
      T.observe(e);
      let E = 0,
        D = 0,
        O = (e) => {
          (e.preventDefault(),
            cancelAnimationFrame(E),
            clearInterval(D),
            T.disconnect(),
            r.pointer &&
              (window.removeEventListener(`pointermove`, P),
              window.removeEventListener(`pointerdown`, P),
              window.removeEventListener(`pointerleave`, F)),
            (u.domElement.style.display = `none`),
            i(!0));
        };
      if (
        (u.domElement.addEventListener(`webglcontextlost`, O),
        typeof window.matchMedia == `function` &&
          window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
      )
        return (
          h(0, 0),
          y(),
          (D = window.setInterval(() => {
            C() && y();
          }, 500)),
          () => {
            (clearInterval(D),
              T.disconnect(),
              u.domElement.removeEventListener(`webglcontextlost`, O),
              Fe(f),
              v?.dispose(),
              _?.dispose(),
              u.forceContextLoss(),
              u.dispose(),
              u.domElement.parentNode === e && e.removeChild(u.domElement));
          }
        );
      let k = new I(100, 0),
        A = new I(100, 0),
        j = 0,
        M = 0,
        P = (t) => {
          let n = e.getBoundingClientRect();
          if (n.width === 0 || n.height === 0) return;
          let r = 2 * Math.tan(N.degToRad(p.fov * 0.5)) * p.position.z,
            i = r * p.aspect;
          (A.set(
            ((t.clientX - n.left) / n.width - 0.5) * i,
            (0.5 - (t.clientY - n.top) / n.height) * r + p.position.y,
          ),
            (M = 1));
        },
        F = () => {
          M = 0;
        };
      r.pointer &&
        (window.addEventListener(`pointermove`, P, { passive: !0 }),
        window.addEventListener(`pointerdown`, P, { passive: !0 }),
        window.addEventListener(`pointerleave`, F));
      let L = 0,
        R = performance.now(),
        z = 0,
        B = (e) => {
          E = requestAnimationFrame(B);
          let t = Math.min((e - R) / 1e3, 0.05);
          ((R = e),
            (L += t),
            k.lerp(A, 1 - Math.exp(-t * 2.2)),
            (j = N.lerp(j, M, 1 - Math.exp(-t * 1.8))));
          let n = ((L % pe) / pe) * q;
          ((m.uTime.value = n),
            (m.uTravelTime.value = L),
            m.uPointer.value.copy(k),
            (m.uPointerStrength.value = j),
            (z += 1),
            z >= 20 && ((z = 0), C()),
            h(n, L),
            y());
        };
      return (
        h(0, 0),
        (E = requestAnimationFrame(B)),
        () => {
          (cancelAnimationFrame(E),
            T.disconnect(),
            u.domElement.removeEventListener(`webglcontextlost`, O),
            r.pointer &&
              (window.removeEventListener(`pointermove`, P),
              window.removeEventListener(`pointerdown`, P),
              window.removeEventListener(`pointerleave`, F)),
            Fe(f),
            v?.dispose(),
            _?.dispose(),
            u.forceContextLoss(),
            u.dispose(),
            u.domElement.parentNode === e && e.removeChild(u.domElement));
        }
      );
    }, [a, t, s]),
    (0, K.jsx)(`div`, {
      ref: n,
      className: e,
      "aria-hidden": `true`,
      children:
        r &&
        (0, K.jsx)(`div`, {
          className: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ece5ff_0%,#f7f4ff_70%)] dark:bg-[radial-gradient(ellipse_at_center,#1a0a3a_0%,#020214_70%)]`,
        }),
    })
  );
}
var Z = [
    { value: `Action`, labelKey: `createPrompt.genres.action`, icon: fe },
    { value: `Adventure`, labelKey: `createPrompt.genres.adventure`, icon: f },
    { value: `FPS`, labelKey: `createPrompt.genres.fps`, icon: l },
    { value: `TPS`, labelKey: `createPrompt.genres.tps`, icon: S },
    {
      value: `Simulation`,
      labelKey: `createPrompt.genres.simulation`,
      icon: de,
    },
    { value: `Puzzle`, labelKey: `createPrompt.genres.puzzle`, icon: ue },
    { value: `RPG`, labelKey: `createPrompt.genres.rpg`, icon: u },
    { value: `Racing`, labelKey: `createPrompt.genres.racing`, icon: ce },
    { value: `Strategy`, labelKey: `createPrompt.genres.strategy`, icon: h },
    { value: `Survival`, labelKey: `createPrompt.genres.survival`, icon: s },
    { value: `Horror`, labelKey: `createPrompt.genres.horror`, icon: le },
  ],
  Le = 6,
  Q = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-colors`,
  Re = `border-primary/60 bg-primary/15 text-primary dark:bg-primary/20 dark:text-white`,
  ze = `border-border bg-background/60 text-foreground/75 hover:border-foreground/25 hover:bg-background/90 hover:text-foreground dark:border-white/12 dark:bg-white/[0.04] dark:text-white/75 dark:hover:border-white/25 dark:hover:bg-white/[0.08] dark:hover:text-white`,
  $ = new Map();
function Be(e, t) {
  let n = e ? new Date(e) : null;
  return !n || Number.isNaN(n.getTime())
    ? ``
    : y(n, { addSuffix: !0, locale: A(t) });
}
function Ve(e) {
  return se(e)
    .then((t) => {
      let n = t.thumbnail_url ? oe(t.thumbnail_url) : ``;
      return (n || $.delete(e), n);
    })
    .catch(
      (t) => (
        console.warn(`[create] cover lookup failed for ${e}`, t),
        $.delete(e),
        ``
      ),
    );
}
function He(e) {
  let t = e.filter((e) => !$.has(e));
  if (t.length > 0) {
    let e = k(t).catch(
      (e) => (console.warn(`[create] published poster lookup failed`, e), {}),
    );
    for (let n of t)
      $.set(
        n,
        e.then((e) => e[n] ?? Ve(n)),
      );
  }
  return new Map(e.map((e) => [e, $.get(e)]));
}
function Ue() {
  let { isAuthenticated: e, canCreate: t, loading: n } = x();
  return e && !n && !t
    ? (0, K.jsx)(i, { to: E, replace: !0 })
    : (0, K.jsx)(We, {});
}
