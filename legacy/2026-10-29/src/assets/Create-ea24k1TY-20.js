// Create-ea24k1TY 20 — current
// Lines 6229-6565 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function one({ modelUrl: e, rotation: t, onLoad: n, onError: r }) {
  let i = (0, X.useRef)(null),
    a = (0, X.useRef)(null),
    o = (0, X.useRef)(null),
    s = (0, X.useRef)(null),
    c = (0, X.useRef)(null),
    l = (0, X.useRef)(n),
    u = (0, X.useRef)(r);
  ((l.current = n), (u.current = r));
  let d = (e) => {
    for (let t of [
      `map`,
      `alphaMap`,
      `aoMap`,
      `bumpMap`,
      `displacementMap`,
      `emissiveMap`,
      `envMap`,
      `lightMap`,
      `metalnessMap`,
      `normalMap`,
      `roughnessMap`,
      `specularMap`,
    ])
      e[t]?.dispose();
    e.dispose();
  };
  return (
    (0, X.useEffect)(() => {
      if (!i.current) return;
      let n = new oa();
      ((n.background = new Ui(1710638)), (a.current = n));
      let r = i.current.clientWidth,
        f = i.current.clientHeight,
        p = new ji(50, r / f, 0.1, 1e3);
      (p.position.set(3, 2, 3), p.lookAt(0, 0, 0));
      let m = new Ta({ antialias: !0 });
      (m.setSize(r, f),
        (m.shadowMap.enabled = !0),
        (o.current = m),
        i.current.appendChild(m.domElement));
      let h = new hl(p, m.domElement);
      ((h.enableDamping = !0), (h.dampingFactor = 0.05));
      let g = new Ma(16777215, 0.5);
      n.add(g);
      let _ = new Bi(16777215, 0.8);
      (_.position.set(5, 5, 5), n.add(_));
      let v = new Xi(4, 8, 4473924, 3355443);
      n.add(v);
      let y = sne();
      (y.position.set(0, 0.1, -2), n.add(y));
      let b = cne();
      (b.position.set(0, 0.3, -2.5),
        n.add(b),
        new C().load(
          e,
          (e) => {
            let r = e.scene;
            c.current = r;
            let i = new sa().setFromObject(r),
              a = i.getCenter(new Y()),
              o = i.getSize(new Y()),
              s = 1.5 / Math.max(o.x, o.y, o.z);
            r.scale.setScalar(s);
            let u = i.min.y * s;
            (r.position.set(-a.x * s, -u, -a.z * s),
              r.rotation.set(
                Si.degToRad(t[0]),
                Si.degToRad(t[1]),
                Si.degToRad(t[2]),
              ),
              n.add(r),
              l.current?.());
          },
          void 0,
          (e) => {
            (console.error(`Error loading model:`, e), u.current?.());
          },
        ));
      let x = () => {
        ((s.current = requestAnimationFrame(x)), h.update(), m.render(n, p));
      };
      x();
      let S = () => {
        if (i.current) {
          let e = i.current.clientWidth,
            t = i.current.clientHeight;
          ((p.aspect = e / t), p.updateProjectionMatrix(), m.setSize(e, t));
        }
      };
      return (
        window.addEventListener(`resize`, S),
        () => {
          (s.current && cancelAnimationFrame(s.current),
            h.dispose(),
            n.traverse((e) => {
              let t = e,
                n = e;
              (t.geometry?.dispose(),
                Array.isArray(n.material)
                  ? n.material.forEach(d)
                  : n.material && d(n.material));
            }),
            i.current &&
              m.domElement.parentNode &&
              i.current.removeChild(m.domElement),
            m.dispose(),
            window.removeEventListener(`resize`, S));
        }
      );
    }, [e]),
    (0, X.useEffect)(() => {
      c.current &&
        c.current.rotation.set(
          Si.degToRad(t[0]),
          Si.degToRad(t[1]),
          Si.degToRad(t[2]),
        );
    }, [t]),
    (0, Z.jsx)(`div`, { ref: i, className: `w-full h-full` })
  );
}
function sne() {
  let e = new Ji(),
    t = new Fi({ color: 49151, transparent: !0, opacity: 0.9 }),
    n = new _a(new Pi(0.05, 0.05, 1.2, 8), t);
  ((n.rotation.x = Math.PI / 2), (n.position.z = 0.6), e.add(n));
  let r = new _a(new Li(0.15, 0.4, 8), t);
  return ((r.rotation.x = -Math.PI / 2), (r.position.z = 0), e.add(r), e);
}
function cne() {
  let e = document.createElement(`canvas`);
  ((e.width = 256), (e.height = 64));
  let t = e.getContext(`2d`);
  ((t.fillStyle = `#00BFFF`),
    (t.font = `bold 32px Arial`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    t.fillText(`FORWARD`, 128, 32));
  let n = new Hi(new bi({ map: new na(e), transparent: !0, opacity: 0.8 }));
  return (n.scale.set(1.5, 0.375, 1), n);
}
function Tl({ rotation: e, onRotate: t, onReset: n, disabled: r = !1 }) {
  return (0, Z.jsxs)(`div`, {
    className: `space-y-3`,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `grid grid-cols-6 gap-1`,
        children: [
          (0, Z.jsx)(`button`, {
            onClick: () => t(`X`, -90),
            disabled: r,
            className: `px-2 py-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed`,
            children: `-90° X`,
          }),
          (0, Z.jsx)(`button`, {
            onClick: () => t(`X`, 90),
            disabled: r,
            className: `px-2 py-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed`,
            children: `+90° X`,
          }),
          (0, Z.jsx)(`button`, {
            onClick: () => t(`Y`, -90),
            disabled: r,
            className: `px-2 py-1.5 bg-green-500/20 hover:bg-green-500/40 text-green-400 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed`,
            children: `-90° Y`,
          }),
          (0, Z.jsx)(`button`, {
            onClick: () => t(`Y`, 90),
            disabled: r,
            className: `px-2 py-1.5 bg-green-500/20 hover:bg-green-500/40 text-green-400 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed`,
            children: `+90° Y`,
          }),
          (0, Z.jsx)(`button`, {
            onClick: () => t(`Z`, -90),
            disabled: r,
            className: `px-2 py-1.5 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed`,
            children: `-90° Z`,
          }),
          (0, Z.jsx)(`button`, {
            onClick: () => t(`Z`, 90),
            disabled: r,
            className: `px-2 py-1.5 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed`,
            children: `+90° Z`,
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between text-xs`,
        children: [
          (0, Z.jsxs)(`span`, {
            className: `text-muted-foreground/60`,
            children: [`Current: X=`, e[0], `° Y=`, e[1], `° Z=`, e[2], `°`],
          }),
          (0, Z.jsx)(`button`, {
            onClick: n,
            disabled: r,
            className: `text-muted-foreground hover:text-white disabled:opacity-50`,
            children: `Reset`,
          }),
        ],
      }),
    ],
  });
}
function lne({
  modelUrl: e,
  scale: t,
  onLoad: n,
  onError: r,
  onBoundingBox: i,
}) {
  let a = (0, X.useRef)(null),
    o = (0, X.useRef)(null),
    s = (0, X.useRef)(null),
    c = (0, X.useRef)(null),
    l = (0, X.useRef)(null),
    u = (0, X.useRef)(null),
    d = (0, X.useRef)(null),
    f = (0, X.useRef)(n),
    p = (0, X.useRef)(r),
    m = (0, X.useRef)(i);
  ((f.current = n), (p.current = r), (m.current = i));
  let h = (e) => {
      for (let t of [
        `map`,
        `alphaMap`,
        `aoMap`,
        `bumpMap`,
        `displacementMap`,
        `emissiveMap`,
        `envMap`,
        `lightMap`,
        `metalnessMap`,
        `normalMap`,
        `roughnessMap`,
        `specularMap`,
      ])
        e[t]?.dispose();
      e.dispose();
    },
    g = () => {
      let e = o.current,
        n = c.current,
        r = u.current;
      if (!e || !n || !r) return;
      e.scale.setScalar(t);
      let i = new sa().setFromObject(e),
        a = i.getCenter(new Y());
      (e.position.set(-a.x, -i.min.y, -a.z), e.updateMatrixWorld(!0));
      let l = new sa().setFromObject(e),
        d = l.getCenter(new Y()),
        f = l.getSize(new Y()),
        p = Math.max(f.x, f.y, f.z, 0.1);
      s.current &&
        (s.current.parent?.remove(s.current),
        s.current.geometry.dispose(),
        s.current.material.dispose());
      let h = new fa(e, 2282478);
      ((s.current = h),
        e.parent?.add(h),
        n.position.set(d.x + p * 1.8, d.y + p * 1.2, d.z + p * 1.8),
        n.lookAt(d),
        r.target.copy(d),
        r.update(),
        m.current?.({ x: f.x, y: f.y, z: f.z }));
    };
  return (
    (0, X.useEffect)(() => {
      if (!a.current) return;
      let t = new oa();
      t.background = new Ui(1843760);
      let n = a.current.clientWidth,
        r = a.current.clientHeight,
        i = new ji(50, n / r, 0.1, 1e3);
      (i.position.set(3, 2.2, 3), (c.current = i));
      let s = new Ta({ antialias: !0 });
      (s.setSize(n, r), (l.current = s), a.current.appendChild(s.domElement));
      let m = new hl(i, s.domElement);
      ((m.enableDamping = !0),
        (m.dampingFactor = 0.05),
        (u.current = m),
        t.add(new Ma(16777215, 0.7)));
      let _ = new Bi(16777215, 0.9);
      (_.position.set(5, 6, 5),
        t.add(_),
        t.add(new Xi(8, 16, 4937059, 3621201)),
        new C().load(
          e,
          (e) => {
            let n = e.scene;
            ((o.current = n), t.add(n), g(), f.current?.());
          },
          void 0,
          (e) => {
            (console.error(`Error loading scale viewer model:`, e),
              p.current?.());
          },
        ));
      let v = () => {
        ((d.current = requestAnimationFrame(v)), m.update(), s.render(t, i));
      };
      v();
      let y = () => {
        if (!a.current || !l.current || !c.current) return;
        let e = a.current.clientWidth,
          t = a.current.clientHeight;
        ((c.current.aspect = e / t),
          c.current.updateProjectionMatrix(),
          l.current.setSize(e, t));
      };
      return (
        window.addEventListener(`resize`, y),
        () => {
          (window.removeEventListener(`resize`, y),
            d.current && cancelAnimationFrame(d.current),
            m.dispose(),
            t.traverse((e) => {
              let t = e,
                n = e;
              (t.geometry?.dispose(),
                Array.isArray(n.material)
                  ? n.material.forEach(h)
                  : n.material && h(n.material));
            }),
            s.dispose(),
            a.current?.contains(s.domElement) &&
              a.current.removeChild(s.domElement));
        }
      );
    }, [e]),
    (0, X.useEffect)(() => {
      g();
    }, [t]),
    (0, Z.jsx)(`div`, { ref: a, className: `w-full h-full` })
  );
}
