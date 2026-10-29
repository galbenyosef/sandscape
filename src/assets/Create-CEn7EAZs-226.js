// Create-CEn7EAZs 226 — domelement
// Lines 76765-77096 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Tde({ isActive: e = !0, className: t }) {
  let n = (0, X.useRef)(null),
    [r, i] = (0, X.useState)(!1),
    a = Ir(),
    o = (0, X.useRef)(e),
    s = (0, X.useRef)(null);
  return (
    (0, X.useEffect)(() => {
      ((o.current = e), s.current?.());
    }, [e]),
    (0, X.useEffect)(() => {
      let e = n.current;
      if (!e) return;
      let t = mde[a],
        r;
      try {
        r = new ha({
          antialias: !t.bloom,
          alpha: !1,
          powerPreference: t.powerPreference,
        });
      } catch {
        i(!0);
        return;
      }
      (i(!1),
        (r.outputColorSpace = fa),
        (r.toneMapping = 4),
        (r.toneMappingExposure = 0.95),
        r.setClearColor(R0, 1),
        (r.domElement.style.display = `block`),
        (r.domElement.style.width = `100%`),
        (r.domElement.style.height = `100%`),
        (r.domElement.style.touchAction = `pan-y`),
        e.appendChild(r.domElement));
      let c = _de(t),
        l = new $i();
      l.background = null;
      let u = new Ei(-1, 1, 1, -1, 0.1, 100);
      u.position.set(0, 0, 10);
      let d = xde();
      ((d.position.z = -3), l.add(d));
      let f = bde();
      (f.position.set(0, j0, -0.5), l.add(f));
      let p = new qi();
      ((p.position.y = j0), l.add(p));
      let m = new qi();
      p.add(m);
      let h = vde(rde),
        g = [...h, ...h],
        _ = [...V0(h, A0), ...V0(h, A0.clone().multiplyScalar(-1))],
        v = new Float32Array(g),
        y = U0(v, 15722239, 1.3, 0.85),
        b = U0(v, 10898943, 2.8, 0.42),
        x = U0(v, 6955007, 5.6, 0.1);
      m.add(x, b, y);
      let S = new ca(new Oa(dde, 16, 12), new Ii({ visible: !1 }));
      ((S.position.y = j0), l.add(S));
      let C = null,
        w = null,
        T = null,
        E = null,
        D = () => {
          ((E = new Oi(1, 1, { type: Lee, samples: 4 })),
            (C = new le(r, E)),
            C.addPass(new de(c.scene, c.camera)));
          let e = new de(l, u);
          ((e.clear = !1),
            (e.clearDepth = !0),
            C.addPass(e),
            (w = new he(new Ni(1, 1), 0.58, 0.6, 0.08)),
            C.addPass(w),
            (T = new que()),
            C.addPass(T));
        },
        O = () => {
          r.autoClear = !1;
        };
      t.bloom ? D() : O();
      let k = -1,
        A = (e) => {
          if (!(Math.abs(e - k) < 1e-4)) {
            k = e;
            for (let t = 0; t < v.length; t += 1)
              v[t] = g[t] + (_[t] - g[t]) * e;
            for (let e of [y, b, x]) H0(e.geometry).needsUpdate = !0;
            f.scale.setScalar(3.5 + e);
          }
        },
        j = () => {
          if (C) {
            C.render();
            return;
          }
          (r.clear(),
            r.render(c.scene, c.camera),
            r.clearDepth(),
            r.render(l, u));
        },
        M = () => {
          let n = e.clientWidth,
            i = e.clientHeight;
          if (n === 0 || i === 0) return;
          let a = Math.sqrt(t.maxRenderPixels / Math.max(1, n * i)),
            o = Math.min(window.devicePixelRatio, t.maxPixelRatio, a),
            s = n / i,
            l = n < ode ? ade : ide;
          ((u.left = (-l * s) / 2),
            (u.right = (l * s) / 2),
            (u.top = l / 2),
            (u.bottom = -l / 2),
            u.updateProjectionMatrix(),
            (c.camera.aspect = s),
            c.camera.updateProjectionMatrix(),
            r.setPixelRatio(o),
            r.setSize(n, i),
            C?.setPixelRatio(o),
            C?.setSize(n, i),
            y.material.resolution.set(n, i),
            b.material.resolution.set(n, i),
            x.material.resolution.set(n, i),
            j());
        },
        N =
          typeof window.matchMedia == `function` &&
          window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        P = null,
        F = 0,
        I = !1,
        L = 0,
        R = 0,
        z = 0,
        B = !t.bloom,
        V = !1,
        H = 0,
        ee = 0,
        te = k0,
        U = k0,
        W = 0,
        ne = new Ta(),
        G = !1,
        re = 0,
        ie = 0,
        ae = 0,
        oe = -1,
        se = new ga(),
        ce = new Ni(),
        K = [],
        ue = () => {
          F = requestAnimationFrame(ue);
          let e = performance.now();
          if (!G && t.minFrameMs > 0 && e - W < t.minFrameMs) return;
          W = e;
          let n = Math.min(ne.getDelta(), 0.05);
          ((ee += n), G || (H += n * $ue), (c.uniforms.uTime.value = ee));
          let r = Sde(H);
          if ((A(r), !G)) {
            let e = wde(H),
              t = e + Math.round((te - e) / O0) * O0,
              r = 1 - Math.exp(-n / sde);
            ((te += (t - te) * r), (re += (0 - re) * r));
          }
          let i = W0(r),
            a = Math.sin(ee * 0.8) * 0.012;
          ((p.rotation.z = -0.02 + Math.sin(ee * 0.5) * 0.008 + i * nde),
            (m.rotation.x = Ci.clamp(
              -0.6 + re + i * 0.05 + i * tde,
              -1.4,
              0.25,
            )),
            (m.rotation.y = (te + i * ede) % O0),
            m.scale.setScalar((1 + a) * Ci.lerp(1, 0.86, i)));
          let o = Math.abs(te - U) / Math.max(n, 1e-4);
          U = te;
          let s = Ci.clamp(o / 10, 0, 1);
          ((b.material.opacity = 0.34 + s * 0.04),
            (x.material.opacity = 0.06 + s * 0.015),
            (f.material.opacity = 0.08 + s * 0.012),
            w && (w.strength = 0.4 + s * 0.06),
            j(),
            G ? (z = e) : B || fe(e));
        },
        fe = (e) => {
          let t = e - z;
          if (((z = e), (L += 1), L <= z0)) return;
          R += t;
          let n = L - z0;
          n < fde ||
            ((B = !0),
            !(R / n <= pde) &&
              (w?.dispose(),
              T?.dispose(),
              C?.dispose(),
              E?.dispose(),
              (C = null),
              (w = null),
              (T = null),
              (E = null),
              O(),
              M()));
        },
        pe = () => {
          let e = o.current && !document.hidden && !V && !N;
          e !== I &&
            ((I = e),
            e
              ? (ne.getDelta(),
                (W = 0),
                (z = performance.now()),
                (F = requestAnimationFrame(ue)))
              : (cancelAnimationFrame(F),
                (G = !1),
                (oe = -1),
                (r.domElement.style.cursor = ``)));
        };
      s.current = pe;
      let me = () => pe();
      document.addEventListener(`visibilitychange`, me);
      let ge = (e) => {
        (e.preventDefault(),
          (V = !0),
          pe(),
          P?.disconnect(),
          (r.domElement.style.display = `none`),
          i(!0));
      };
      r.domElement.addEventListener(`webglcontextlost`, ge);
      let _e = (e) => {
          let t = r.domElement.getBoundingClientRect();
          return t.width === 0 || t.height === 0
            ? !1
            : ((ce.x = ((e.clientX - t.left) / t.width) * 2 - 1),
              (ce.y = -((e.clientY - t.top) / t.height) * 2 + 1),
              se.setFromCamera(ce, u),
              (K.length = 0),
              se.intersectObject(S, !1, K),
              K.length > 0);
        },
        ve = (e) => {
          if (!(N || V || !I || G) && _e(e)) {
            ((G = !0),
              (oe = e.pointerId),
              (ie = e.clientX),
              (ae = e.clientY),
              (r.domElement.style.cursor = `grabbing`));
            try {
              r.domElement.setPointerCapture(e.pointerId);
            } catch {}
          }
        },
        ye = (e) => {
          if (!(G && e.pointerId !== oe)) {
            if (!G) {
              !N && !V && (r.domElement.style.cursor = _e(e) ? `grab` : ``);
              return;
            }
            ((te -= (e.clientX - ie) * cde),
              (re = Ci.clamp(re - (e.clientY - ae) * lde, -0.7, ude)),
              (ie = e.clientX),
              (ae = e.clientY));
          }
        },
        be = (e) => {
          if (!(!G || e.pointerId !== oe)) {
            ((G = !1),
              (oe = -1),
              (r.domElement.style.cursor = _e(e) ? `grab` : ``));
            try {
              r.domElement.releasePointerCapture(e.pointerId);
            } catch {}
          }
        };
      return (
        r.domElement.addEventListener(`pointerdown`, ve),
        r.domElement.addEventListener(`pointermove`, ye),
        r.domElement.addEventListener(`pointerup`, be),
        r.domElement.addEventListener(`pointercancel`, be),
        r.domElement.addEventListener(`lostpointercapture`, be),
        N &&
          (A(1),
          (p.rotation.z = 0),
          (m.rotation.x = -0.44999999999999996),
          (m.rotation.y = 3.407),
          m.scale.setScalar(0.86)),
        M(),
        (P = new ResizeObserver(M)),
        P.observe(e),
        pe(),
        () => {
          (cancelAnimationFrame(F),
            (s.current = null),
            document.removeEventListener(`visibilitychange`, me),
            r.domElement.removeEventListener(`webglcontextlost`, ge),
            r.domElement.removeEventListener(`pointerdown`, ve),
            r.domElement.removeEventListener(`pointermove`, ye),
            r.domElement.removeEventListener(`pointerup`, be),
            r.domElement.removeEventListener(`pointercancel`, be),
            r.domElement.removeEventListener(`lostpointercapture`, be),
            P?.disconnect(),
            K0(c.scene),
            K0(l),
            w?.dispose(),
            T?.dispose(),
            C?.dispose(),
            E?.dispose(),
            r.forceContextLoss(),
            r.dispose(),
            r.domElement.parentNode === e && e.removeChild(r.domElement));
        }
      );
    }, [a]),
    (0, Z.jsx)(`div`, {
      ref: n,
      className: t,
      "aria-hidden": `true`,
      children:
        r &&
        (0, Z.jsx)(`div`, {
          className: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a0a3a_0%,#030106_70%)]`,
        }),
    })
  );
}
function Ede({ isActive: e }) {
  return (0, Z.jsx)(`div`, {
    className: `h-full relative`,
    children: (0, Z.jsx)(`div`, {
      className: `absolute inset-0 bg-background overflow-hidden`,
      children: (0, Z.jsx)(Tde, { className: `absolute inset-0`, isActive: e }),
    }),
  });
}
