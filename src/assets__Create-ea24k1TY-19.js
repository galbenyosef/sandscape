// assets__Create-ea24k1TY 19 — current
// Lines 5891-6228 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function wl({
  mainModelUrl: e,
  collisionMeshUrl: t,
  lodOverlayUrl: n,
  lodPreviewMode: r = `textured`,
  showWireframe: i = !0,
  showSolid: a = !0,
  wireframeColor: o = `#00FFFF`,
  onLoad: s,
  onError: c,
  mainModelWireframe: l = `textured`,
  onModelStats: u,
  simpleCollisionPrimitives: d,
  selectedPrimitiveId: f,
  onPrimitiveSelect: p,
  isActive: m,
}) {
  let h = (0, X.useRef)(null),
    g = (0, X.useRef)(null),
    _ = (0, X.useRef)(null),
    v = (0, X.useRef)(null),
    y = (0, X.useRef)(null),
    b = (0, X.useRef)(null),
    x = (0, X.useRef)(null),
    S = (0, X.useRef)(null),
    w = (0, X.useRef)(new Map()),
    T = (0, X.useRef)(null),
    E = (0, X.useRef)(s),
    D = (0, X.useRef)(c),
    O = (0, X.useRef)(u),
    k = (0, X.useRef)(p);
  ((E.current = s), (D.current = c), (O.current = u), (k.current = p));
  let A = (0, X.useRef)(m !== !1);
  return (
    (0, X.useEffect)(() => {
      let e = m !== !1,
        t = A.current;
      ((A.current = e),
        e &&
          !t &&
          v.current &&
          g.current &&
          _.current &&
          v.current.render(g.current, _.current));
    }, [m]),
    (0, X.useEffect)(() => {
      if (!h.current) return;
      let n = new oa();
      g.current = n;
      let r = h.current.clientWidth,
        s = h.current.clientHeight,
        c = new ji(40, r / s, 0.1, 100);
      (c.position.set(4, 3, 4), c.lookAt(0, 1.5, 0), (_.current = c));
      let u = new Ta({ antialias: !0 });
      (u.setSize(r, s),
        u.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        gl(u),
        (v.current = u),
        h.current.appendChild(u.domElement));
      let { envMap: d } = _l(n, u),
        f = new hl(c, u.domElement);
      ((f.enableDamping = !0), (f.dampingFactor = 0.05));
      let p = { current: f },
        m = new Ji();
      ((m.name = `simpleCollisionPrimitives`), n.add(m), (T.current = m));
      let j = new Ea(),
        M = new Mi(),
        N = { x: 0, y: 0 },
        P = (e) => {
          N = { x: e.clientX, y: e.clientY };
        },
        F = (e) => {
          let t = e.clientX - N.x,
            n = e.clientY - N.y;
          if (
            Math.abs(t) > 3 ||
            Math.abs(n) > 3 ||
            !h.current ||
            m.children.length === 0
          )
            return;
          let r = u.domElement.getBoundingClientRect();
          ((M.x = ((e.clientX - r.left) / r.width) * 2 - 1),
            (M.y = -((e.clientY - r.top) / r.height) * 2 + 1),
            j.setFromCamera(M, c));
          let i = j.intersectObjects(m.children, !1);
          if (i.length > 0) {
            let e = i[0].object.userData.primitiveId;
            e && k.current?.(e);
          } else k.current?.(null);
        };
      (u.domElement.addEventListener(`mousedown`, P),
        u.domElement.addEventListener(`click`, F));
      let I = new C(),
        L = (e, t = 3) => {
          let n = new sa().setFromObject(e),
            r = n.getCenter(new Y()),
            i = n.getSize(new Y()),
            a = t / Math.max(i.x, i.y, i.z);
          (e.scale.setScalar(a), e.position.copy(r.multiplyScalar(-a)));
        };
      (I.load(
        e,
        (e) => {
          let t = e.scene;
          if (((b.current = t), O.current)) {
            let e = 0,
              n = 0;
            t.traverse((t) => {
              if (t instanceof _a && t.geometry) {
                let r = t.geometry;
                ((e += r.attributes.position?.count || 0),
                  (n += r.index
                    ? r.index.count / 3
                    : (r.attributes.position?.count || 0) / 3));
              }
            });
            let r = new sa().setFromObject(t).getSize(new Y());
            O.current({
              vertexCount: e,
              faceCount: Math.round(n),
              dimensions: { x: r.x, y: r.y, z: r.z },
            });
          }
          (L(t), yl(t), vl(t, d), (t.visible = a), n.add(t));
          let r = bl(t);
          (f.target.set(0, r, 0),
            f.update(),
            l !== `textured` && Cl(t, l),
            E.current?.());
        },
        void 0,
        (e) => {
          (console.error(`Error loading main model:`, e), D.current?.());
        },
      ),
        t &&
          I.load(
            t,
            (e) => {
              let t = e.scene;
              ((x.current = t),
                L(t),
                t.traverse((e) => {
                  e instanceof _a &&
                    (Array.isArray(e.material)
                      ? e.material.forEach((e) => e.dispose())
                      : e.material && e.material.dispose(),
                    (e.material = new Fi({
                      color: o,
                      wireframe: !0,
                      transparent: !0,
                      opacity: 0.8,
                    })));
                }),
                yl(t),
                (t.visible = i),
                n.add(t));
            },
            void 0,
            (e) => {
              console.warn(`Error loading collision mesh:`, e);
            },
          ));
      let R = () => {
        ((y.current = requestAnimationFrame(R)),
          A.current && (f.update(), u.render(n, c)));
      };
      R();
      let z = () => {
        if (h.current) {
          let e = h.current.clientWidth,
            t = h.current.clientHeight;
          ((c.aspect = e / t), c.updateProjectionMatrix(), u.setSize(e, t));
        }
      };
      return (
        window.addEventListener(`resize`, z),
        () => {
          (y.current && cancelAnimationFrame(y.current),
            u.domElement.removeEventListener(`mousedown`, P),
            u.domElement.removeEventListener(`click`, F),
            p.current.dispose());
          let e = (e) => {
              for (let t of Object.values(e)) t instanceof wi && t.dispose();
              e.dispose();
            },
            t = (t) => {
              t.traverse((t) => {
                t instanceof _a &&
                  (t.geometry?.dispose(),
                  Array.isArray(t.material)
                    ? t.material.forEach(e)
                    : t.material && e(t.material));
              });
            };
          (b.current && t(b.current),
            x.current && t(x.current),
            S.current && t(S.current));
          for (let [, e] of w.current.entries())
            (e.geometry.dispose(), e.material.dispose());
          (w.current.clear(),
            (T.current = null),
            h.current &&
              u.domElement.parentNode &&
              h.current.removeChild(u.domElement),
            d.dispose(),
            u.dispose(),
            window.removeEventListener(`resize`, z));
        }
      );
    }, [e, t, o]),
    (0, X.useEffect)(() => {
      (b.current && (b.current.visible = a),
        x.current && (x.current.visible = i));
    }, [a, i]),
    (0, X.useEffect)(() => {
      b.current && !n && Cl(b.current, l);
    }, [l, n]),
    (0, X.useEffect)(() => {
      let e = g.current;
      if (!e) return;
      if (
        ((S.current &&=
          (S.current.traverse((e) => {
            e instanceof _a &&
              (e.geometry?.dispose(),
              Array.isArray(e.material)
                ? e.material.forEach((e) => e.dispose())
                : e.material && e.material.dispose());
          }),
          e.remove(S.current),
          null)),
        !n)
      ) {
        b.current && (b.current.visible = a);
        return;
      }
      b.current && (b.current.visible = !1);
      let t = [];
      (b.current &&
        b.current.traverse((e) => {
          if (e instanceof _a && e.material) {
            let n = Array.isArray(e.material) ? e.material : [e.material];
            for (let e of n) t.includes(e) || t.push(e);
          }
        }),
        new C().load(
          n,
          (n) => {
            let i = n.scene;
            S.current = i;
            let a = new sa().setFromObject(i),
              o = a.getCenter(new Y()),
              s = a.getSize(new Y()),
              c = 3 / Math.max(s.x, s.y, s.z);
            (i.scale.setScalar(c), i.position.copy(o.multiplyScalar(-c)));
            let l = 0;
            (i.traverse((e) => {
              if (e instanceof _a) {
                Array.isArray(e.material)
                  ? e.material.forEach((e) => e.dispose())
                  : e.material && e.material.dispose();
                let n = t[l % t.length] || t[0];
                (n
                  ? (e.material = n.clone())
                  : (e.material = new ki({ color: 8947848 })),
                  l++);
              }
            }),
              yl(i),
              e.add(i),
              Cl(i, r));
          },
          void 0,
          (e) => {
            (console.warn(`Error loading LOD preview:`, e),
              b.current && (b.current.visible = a));
          },
        ));
    }, [n]),
    (0, X.useEffect)(() => {
      S.current && Cl(S.current, r);
    }, [r]),
    (0, X.useEffect)(() => {
      let e = T.current;
      if (!e) return;
      let t = d || [],
        n = new Set(t.map((e) => e.id)),
        r = w.current;
      for (let [t, i] of r.entries())
        n.has(t) ||
          (e.remove(i),
          i.geometry.dispose(),
          i.material.dispose(),
          r.delete(t));
      for (let n of t) {
        let t = r.get(n.id);
        if (!t) {
          let i;
          i =
            n.type === `sphere`
              ? new Ba(0.5, 16, 12)
              : n.type === `cylinder`
                ? new Pi(0.5, 0.5, 1, 16)
                : new Ca(1, 1, 1);
          let a = new Fi({
            color: `#00FF00`,
            wireframe: !0,
            transparent: !0,
            opacity: 0.6,
          });
          ((t = new _a(i, a)),
            (t.userData.primitiveId = n.id),
            r.set(n.id, t),
            e.add(t));
        }
        (t.position.set(...n.position),
          t.rotation.set(
            (n.rotation[0] * Math.PI) / 180,
            (n.rotation[1] * Math.PI) / 180,
            (n.rotation[2] * Math.PI) / 180,
          ),
          t.scale.set(...n.scale));
      }
    }, [d]),
    (0, X.useEffect)(() => {
      let e = w.current;
      for (let [t, n] of e.entries()) {
        let e = n.material;
        t === f
          ? (e.color.set(`#66FF66`), (e.opacity = 0.9))
          : (e.color.set(`#00FF00`), (e.opacity = 0.6));
      }
    }, [f]),
    (0, Z.jsx)(`div`, { ref: h, className: `w-full h-full` })
  );
}
