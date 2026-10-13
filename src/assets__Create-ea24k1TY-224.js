// assets__Create-ea24k1TY 224 — domelement
// Lines 75985-76316 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Kue({ isActive: e = !0, className: t }) {
  let n = (0, X.useRef)(null),
    [r, i] = (0, X.useState)(!1),
    a = Qr(),
    o = (0, X.useRef)(e),
    s = (0, X.useRef)(null);
  return (
    (0, X.useEffect)(() => {
      ((o.current = e), s.current?.());
    }, [e]),
    (0, X.useEffect)(() => {
      let e = n.current;
      if (!e) return;
      let t = Fue[a],
        r;
      try {
        r = new Ta({
          antialias: !t.bloom,
          alpha: !1,
          powerPreference: t.powerPreference,
        });
      } catch {
        i(!0);
        return;
      }
      (i(!1),
        (r.outputColorSpace = Sa),
        (r.toneMapping = 4),
        (r.toneMappingExposure = 0.95),
        r.setClearColor(z0, 1),
        (r.domElement.style.display = `block`),
        (r.domElement.style.width = `100%`),
        (r.domElement.style.height = `100%`),
        (r.domElement.style.touchAction = `pan-y`),
        e.appendChild(r.domElement));
      let c = Rue(t),
        l = new oa();
      l.background = null;
      let u = new Ti(-1, 1, 1, -1, 0.1, 100);
      u.position.set(0, 0, 10);
      let d = Hue();
      ((d.position.z = -3), l.add(d));
      let f = Vue();
      (f.position.set(0, M0, -0.5), l.add(f));
      let p = new Ji();
      ((p.position.y = M0), l.add(p));
      let m = new Ji();
      p.add(m);
      let h = zue(wue),
        g = [...h, ...h],
        _ = [...H0(h, j0), ...H0(h, j0.clone().multiplyScalar(-1))],
        v = new Float32Array(g),
        y = W0(v, 15722239, 1.3, 0.85),
        b = W0(v, 10898943, 2.8, 0.42),
        x = W0(v, 6955007, 5.6, 0.1);
      m.add(x, b, y);
      let S = new _a(new Ba(Mue, 16, 12), new Fi({ visible: !1 }));
      ((S.position.y = M0), l.add(S));
      let C = null,
        w = null,
        T = null,
        E = null,
        D = () => {
          ((E = new Di(1, 1, { type: Zi, samples: 4 })),
            (C = new ce(r, E)),
            C.addPass(new ue(c.scene, c.camera)));
          let e = new ue(l, u);
          ((e.clear = !1),
            (e.clearDepth = !0),
            C.addPass(e),
            (w = new me(new Mi(1, 1), 0.58, 0.6, 0.08)),
            C.addPass(w),
            (T = new mue()),
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
            for (let e of [y, b, x]) U0(e.geometry).needsUpdate = !0;
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
            l = n < Due ? Eue : Tue;
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
        U = 0,
        ee = A0,
        W = A0,
        G = 0,
        te = new La(),
        K = !1,
        ne = 0,
        re = 0,
        ie = 0,
        ae = -1,
        oe = new Ea(),
        se = new Mi(),
        q = [],
        le = () => {
          F = requestAnimationFrame(le);
          let e = performance.now();
          if (!K && t.minFrameMs > 0 && e - G < t.minFrameMs) return;
          G = e;
          let n = Math.min(te.getDelta(), 0.05);
          ((U += n), K || (H += n * bue), (c.uniforms.uTime.value = U));
          let r = Uue(H);
          if ((A(r), !K)) {
            let e = Gue(H),
              t = e + Math.round((ee - e) / k0) * k0,
              r = 1 - Math.exp(-n / Oue);
            ((ee += (t - ee) * r), (ne += (0 - ne) * r));
          }
          let i = G0(r),
            a = Math.sin(U * 0.8) * 0.012;
          ((p.rotation.z = -0.02 + Math.sin(U * 0.5) * 0.008 + i * Cue),
            (m.rotation.x = Si.clamp(
              -0.6 + ne + i * 0.05 + i * Sue,
              -1.4,
              0.25,
            )),
            (m.rotation.y = (ee + i * xue) % k0),
            m.scale.setScalar((1 + a) * Si.lerp(1, 0.86, i)));
          let o = Math.abs(ee - W) / Math.max(n, 1e-4);
          W = ee;
          let s = Si.clamp(o / 10, 0, 1);
          ((b.material.opacity = 0.34 + s * 0.04),
            (x.material.opacity = 0.06 + s * 0.015),
            (f.material.opacity = 0.08 + s * 0.012),
            w && (w.strength = 0.4 + s * 0.06),
            j(),
            K ? (z = e) : B || de(e));
        },
        de = (e) => {
          let t = e - z;
          if (((z = e), (L += 1), L <= B0)) return;
          R += t;
          let n = L - B0;
          n < Nue ||
            ((B = !0),
            !(R / n <= Pue) &&
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
        fe = () => {
          let e = o.current && !document.hidden && !V && !N;
          e !== I &&
            ((I = e),
            e
              ? (te.getDelta(),
                (G = 0),
                (z = performance.now()),
                (F = requestAnimationFrame(le)))
              : (cancelAnimationFrame(F),
                (K = !1),
                (ae = -1),
                (r.domElement.style.cursor = ``)));
        };
      s.current = fe;
      let pe = () => fe();
      document.addEventListener(`visibilitychange`, pe);
      let he = (e) => {
        (e.preventDefault(),
          (V = !0),
          fe(),
          P?.disconnect(),
          (r.domElement.style.display = `none`),
          i(!0));
      };
      r.domElement.addEventListener(`webglcontextlost`, he);
      let ge = (e) => {
          let t = r.domElement.getBoundingClientRect();
          return t.width === 0 || t.height === 0
            ? !1
            : ((se.x = ((e.clientX - t.left) / t.width) * 2 - 1),
              (se.y = -((e.clientY - t.top) / t.height) * 2 + 1),
              oe.setFromCamera(se, u),
              (q.length = 0),
              oe.intersectObject(S, !1, q),
              q.length > 0);
        },
        _e = (e) => {
          if (!(N || V || !I || K) && ge(e)) {
            ((K = !0),
              (ae = e.pointerId),
              (re = e.clientX),
              (ie = e.clientY),
              (r.domElement.style.cursor = `grabbing`));
            try {
              r.domElement.setPointerCapture(e.pointerId);
            } catch {}
          }
        },
        ve = (e) => {
          if (!(K && e.pointerId !== ae)) {
            if (!K) {
              !N && !V && (r.domElement.style.cursor = ge(e) ? `grab` : ``);
              return;
            }
            ((ee -= (e.clientX - re) * kue),
              (ne = Si.clamp(ne - (e.clientY - ie) * Aue, -0.7, jue)),
              (re = e.clientX),
              (ie = e.clientY));
          }
        },
        ye = (e) => {
          if (!(!K || e.pointerId !== ae)) {
            ((K = !1),
              (ae = -1),
              (r.domElement.style.cursor = ge(e) ? `grab` : ``));
            try {
              r.domElement.releasePointerCapture(e.pointerId);
            } catch {}
          }
        };
      return (
        r.domElement.addEventListener(`pointerdown`, _e),
        r.domElement.addEventListener(`pointermove`, ve),
        r.domElement.addEventListener(`pointerup`, ye),
        r.domElement.addEventListener(`pointercancel`, ye),
        r.domElement.addEventListener(`lostpointercapture`, ye),
        N &&
          (A(1),
          (p.rotation.z = 0),
          (m.rotation.x = -0.44999999999999996),
          (m.rotation.y = 3.407),
          m.scale.setScalar(0.86)),
        M(),
        (P = new ResizeObserver(M)),
        P.observe(e),
        fe(),
        () => {
          (cancelAnimationFrame(F),
            (s.current = null),
            document.removeEventListener(`visibilitychange`, pe),
            r.domElement.removeEventListener(`webglcontextlost`, he),
            r.domElement.removeEventListener(`pointerdown`, _e),
            r.domElement.removeEventListener(`pointermove`, ve),
            r.domElement.removeEventListener(`pointerup`, ye),
            r.domElement.removeEventListener(`pointercancel`, ye),
            r.domElement.removeEventListener(`lostpointercapture`, ye),
            P?.disconnect(),
            q0(c.scene),
            q0(l),
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
function que({ isActive: e }) {
  return (0, Z.jsx)(`div`, {
    className: `h-full relative`,
    children: (0, Z.jsx)(`div`, {
      className: `absolute inset-0 bg-background overflow-hidden`,
      children: (0, Z.jsx)(Kue, { className: `absolute inset-0`, isActive: e }),
    }),
  });
}
