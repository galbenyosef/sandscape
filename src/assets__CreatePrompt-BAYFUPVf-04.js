// assets__CreatePrompt-BAYFUPVf 04 — math
// Lines 901-1165 of readable/assets__CreatePrompt-BAYFUPVf.pretty.js (statement-aligned).
function Fe({ className: e, alignTo: t }) {
  let n = (0, q.useRef)(null),
    [r, i] = (0, q.useState)(!1),
    o = C(),
    c = E();
  return (
    (0, q.useEffect)(() => {
      let e = n.current;
      if (!e) return;
      let r = _e[o],
        l = c === `light` ? me : pe,
        d;
      try {
        d = new G({
          antialias: !1,
          alpha: !1,
          powerPreference: r.powerPreference,
        });
      } catch {
        i(!0);
        return;
      }
      (i((e) => e && !1),
        d.setClearColor(l.clear, 1),
        (d.outputColorSpace = U),
        (d.toneMapping = l.toneMapping),
        (d.toneMappingExposure = r.exposure),
        (d.domElement.style.display = `block`),
        (d.domElement.style.opacity = String(l.opacity)),
        e.appendChild(d.domElement));
      let {
          scene: f,
          camera: p,
          uniforms: m,
          updateWaveGeometry: h,
          fitAtmosphere: g,
        } = Ne(r, l),
        _ = null,
        v = null;
      r.bloom &&
        l.bloom &&
        ((_ = new a(d)),
        _.addPass(new s(f, p)),
        (v = new u(new F(1, 1), r.bloomStrength, 0.84, 0.04)),
        _.addPass(v));
      let y = () => {
          _ ? _.render() : d.render(f, p);
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
          return M.clamp(a / r.height, 0.12, 0.88);
        },
        S = () => {
          let e = 2 * Math.tan(M.degToRad(p.fov * 0.5)) * p.position.z;
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
          let s = Math.tan(M.degToRad(p.fov * 0.5));
          ((p.position.z =
            o < 1 ? Math.min(Y / o, he) : Math.min(Y, ge / (s * o))),
            (p.position.y = S()),
            p.updateProjectionMatrix(),
            (m.uCameraZ.value = p.position.z),
            g(),
            d.setPixelRatio(a),
            d.setSize(t, n),
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
              window.removeEventListener(`pointerleave`, I)),
            (d.domElement.style.display = `none`),
            i(!0));
        };
      if (
        (d.domElement.addEventListener(`webglcontextlost`, O),
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
              d.domElement.removeEventListener(`webglcontextlost`, O),
              Pe(f),
              v?.dispose(),
              _?.dispose(),
              d.forceContextLoss(),
              d.dispose(),
              d.domElement.parentNode === e && e.removeChild(d.domElement));
          }
        );
      let k = new F(100, 0),
        A = new F(100, 0),
        j = 0,
        N = 0,
        P = (t) => {
          let n = e.getBoundingClientRect();
          if (n.width === 0 || n.height === 0) return;
          let r = 2 * Math.tan(M.degToRad(p.fov * 0.5)) * p.position.z,
            i = r * p.aspect;
          (A.set(
            ((t.clientX - n.left) / n.width - 0.5) * i,
            (0.5 - (t.clientY - n.top) / n.height) * r + p.position.y,
          ),
            (N = 1));
        },
        I = () => {
          N = 0;
        };
      r.pointer &&
        (window.addEventListener(`pointermove`, P, { passive: !0 }),
        window.addEventListener(`pointerdown`, P, { passive: !0 }),
        window.addEventListener(`pointerleave`, I));
      let L = 0,
        R = performance.now(),
        z = 0,
        B = (e) => {
          E = requestAnimationFrame(B);
          let t = Math.min((e - R) / 1e3, 0.05);
          ((R = e),
            (L += t),
            k.lerp(A, 1 - Math.exp(-t * 2.2)),
            (j = M.lerp(j, N, 1 - Math.exp(-t * 1.8))));
          let n = ((L % de) / de) * ue;
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
            d.domElement.removeEventListener(`webglcontextlost`, O),
            r.pointer &&
              (window.removeEventListener(`pointermove`, P),
              window.removeEventListener(`pointerdown`, P),
              window.removeEventListener(`pointerleave`, I)),
            Pe(f),
            v?.dispose(),
            _?.dispose(),
            d.forceContextLoss(),
            d.dispose(),
            d.domElement.parentNode === e && e.removeChild(d.domElement));
        }
      );
    }, [o, t, c]),
    (0, J.jsx)(`div`, {
      ref: n,
      className: e,
      "aria-hidden": `true`,
      children:
        r &&
        (0, J.jsx)(`div`, {
          className: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ece5ff_0%,#f7f4ff_70%)] dark:bg-[radial-gradient(ellipse_at_center,#1a0a3a_0%,#020214_70%)]`,
        }),
    })
  );
}
var Z = [
    { value: `Action`, labelKey: `createPrompt.genres.action`, icon: le },
    { value: `Adventure`, labelKey: `createPrompt.genres.adventure`, icon: d },
    { value: `FPS`, labelKey: `createPrompt.genres.fps`, icon: c },
    { value: `TPS`, labelKey: `createPrompt.genres.tps`, icon: S },
    {
      value: `Simulation`,
      labelKey: `createPrompt.genres.simulation`,
      icon: ce,
    },
    { value: `Puzzle`, labelKey: `createPrompt.genres.puzzle`, icon: se },
    { value: `RPG`, labelKey: `createPrompt.genres.rpg`, icon: l },
    { value: `Racing`, labelKey: `createPrompt.genres.racing`, icon: ie },
    { value: `Strategy`, labelKey: `createPrompt.genres.strategy`, icon: m },
    { value: `Survival`, labelKey: `createPrompt.genres.survival`, icon: o },
    { value: `Horror`, labelKey: `createPrompt.genres.horror`, icon: oe },
  ],
  Ie = 6,
  Q = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-colors`,
  Le = `border-primary/60 bg-primary/15 text-primary dark:bg-primary/20 dark:text-white`,
  Re = `border-border bg-background/60 text-foreground/75 hover:border-foreground/25 hover:bg-background/90 hover:text-foreground dark:border-white/12 dark:bg-white/[0.04] dark:text-white/75 dark:hover:border-white/25 dark:hover:bg-white/[0.08] dark:hover:text-white`,
  $ = new Map();
function ze(e, t) {
  let n = e ? new Date(e) : null;
  return !n || Number.isNaN(n.getTime())
    ? ``
    : v(n, { addSuffix: !0, locale: k(t) });
}
function Be(e) {
  return re(e)
    .then((t) => {
      let n = t.thumbnail_url ? ne(t.thumbnail_url) : ``;
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
function Ve(e) {
  let t = e.filter((e) => !$.has(e));
  if (t.length > 0) {
    let e = O(t).catch(
      (e) => (console.warn(`[create] published poster lookup failed`, e), {}),
    );
    for (let n of t)
      $.set(
        n,
        e.then((e) => e[n] ?? Be(n)),
      );
  }
  return new Map(e.map((e) => [e, $.get(e)]));
}
