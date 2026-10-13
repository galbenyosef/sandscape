// assets__Create-ea24k1TY 200 — current
// Lines 68097-68369 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var W$ = (0, X.forwardRef)(function (
    {
      modelUrl: e,
      gizmoMode: t = `translate`,
      selectedPartName: n,
      hiddenParts: r,
      onPartsLoaded: i,
      onSelectPart: a,
      onPartTransform: o,
      onLoad: s,
      onError: c,
      isActive: l,
    },
    u,
  ) {
    let d = (0, X.useRef)(null),
      f = (0, X.useRef)(null),
      p = (0, X.useRef)(null),
      m = (0, X.useRef)(null),
      h = (0, X.useRef)(null),
      g = (0, X.useRef)(null),
      _ = (0, X.useRef)(null),
      v = (0, X.useRef)(new Map()),
      y = (0, X.useRef)(null),
      b = (0, X.useRef)(s),
      x = (0, X.useRef)(c),
      S = (0, X.useRef)(i),
      w = (0, X.useRef)(a),
      T = (0, X.useRef)(o);
    ((b.current = s),
      (x.current = c),
      (S.current = i),
      (w.current = a),
      (T.current = o));
    let E = (0, X.useRef)(l !== !1);
    return (
      (0, X.useEffect)(() => {
        let e = l !== !1,
          t = E.current;
        ((E.current = e),
          e &&
            !t &&
            m.current &&
            f.current &&
            p.current &&
            m.current.render(f.current, p.current));
      }, [l]),
      (0, X.useImperativeHandle)(u, () => ({
        exportSegmentedGLB: async () => {
          let e = g.current;
          if (!e) return null;
          try {
            let t = new o$(),
              n = await new Promise((n, r) => {
                t.parse(
                  e,
                  (e) => n(e),
                  (e) => r(e),
                  { binary: !0, onlyVisible: !1 },
                );
              });
            return new Blob([n], { type: `model/gltf-binary` });
          } catch (e) {
            return (
              console.error(`[SegmentViewer] GLB export failed:`, e),
              null
            );
          }
        },
        setPartTransform: (e, t, n, r) => {
          let i = v.current.get(e);
          if (!i) return;
          if (t === `position`) i.position.setComponent(n, r);
          else if (t === `scale`) i.scale.setComponent(n, r);
          else {
            let e = i.rotation,
              t = r * H$;
            n === 0 ? (e.x = t) : n === 1 ? (e.y = t) : (e.z = t);
          }
          T.current?.(e, U$(i));
          let a = m.current,
            o = f.current,
            s = p.current;
          a && o && s && a.render(o, s);
        },
      })),
      (0, X.useEffect)(() => {
        if (!d.current) return;
        let n = new oa();
        f.current = n;
        let r = d.current.clientWidth,
          i = d.current.clientHeight,
          a = new ji(40, r / i, 0.1, 100);
        (a.position.set(4, 3, 4), a.lookAt(0, 1.5, 0), (p.current = a));
        let o = new Ta({ antialias: !0 });
        (o.setSize(r, i),
          o.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
          gl(o),
          (m.current = o),
          d.current.appendChild(o.domElement));
        let { envMap: s } = _l(n, o),
          c = new hl(a, o.domElement);
        ((c.enableDamping = !0), (c.dampingFactor = 0.05));
        let l = new P(a, o.domElement),
          u = l;
        (l.setMode(t),
          n.add(l),
          (y.current = l),
          u.addEventListener(`dragging-changed`, (e) => {
            c.enabled = !e.value;
          }),
          u.addEventListener(`objectChange`, () => {
            let e = u.object;
            if (!e) return;
            let t = e.userData?.partName || e.name;
            t && T.current?.(t, U$(e));
          }));
        let D = new Ea(),
          O = new Mi(),
          k = { x: 0, y: 0 },
          A = (e) => {
            k = { x: e.clientX, y: e.clientY };
          },
          j = (e) => {
            if (
              Math.abs(e.clientX - k.x) > 3 ||
              Math.abs(e.clientY - k.y) > 3 ||
              u.dragging
            )
              return;
            let t = _.current;
            if (!t) return;
            let n = o.domElement.getBoundingClientRect();
            if (
              ((O.x = ((e.clientX - n.left) / n.width) * 2 - 1),
              (O.y = -((e.clientY - n.top) / n.height) * 2 + 1),
              D.setFromCamera(O, a),
              D.intersectObject(l, !0).length > 0)
            )
              return;
            let r = D.intersectObjects(t.children, !0);
            if (r.length > 0) {
              let e = r[0].object;
              for (; e && e.parent !== t;) e = e.parent;
              let n = e?.userData?.partName;
              w.current?.(n ?? null);
            } else w.current?.(null);
          };
        (o.domElement.addEventListener(`mousedown`, A),
          o.domElement.addEventListener(`click`, j),
          new C().load(
            e,
            (e) => {
              let t = e.scene;
              g.current = t;
              let r = t;
              for (
                ;
                r.children.length === 1 && r.children[0].children.length > 0;
              )
                r = r.children[0];
              _.current = r;
              let i = [],
                l = v.current;
              (l.clear(),
                r.children.forEach((e, t) => {
                  let n = e.name && e.name.trim() ? e.name : `segment_${t}`;
                  ((e.userData.partName = n),
                    l.set(n, e),
                    i.push({ name: n, transform: U$(e) }));
                }));
              let u = new Ji();
              u.add(t);
              let d = new sa().setFromObject(t),
                f = d.getCenter(new Y()),
                p = d.getSize(new Y()),
                m = 3 / (Math.max(p.x, p.y, p.z) || 1);
              (u.scale.setScalar(m),
                u.position.copy(f.multiplyScalar(-m)),
                n.add(u));
              let h = new sa().setFromObject(u);
              ((u.position.y -= h.min.y), vl(t, s));
              let y = new sa().setFromObject(u).getCenter(new Y());
              (c.target.copy(y),
                c.update(),
                S.current?.(i),
                b.current?.(),
                o.render(n, a));
            },
            void 0,
            (e) => {
              (console.error(
                `[SegmentViewer] Error loading segmented model:`,
                e,
              ),
                x.current?.());
            },
          ));
        let M = () => {
          ((h.current = requestAnimationFrame(M)),
            E.current && (c.update(), o.render(n, a)));
        };
        M();
        let N = () => {
          if (!d.current) return;
          let e = d.current.clientWidth,
            t = d.current.clientHeight;
          ((a.aspect = e / t), a.updateProjectionMatrix(), o.setSize(e, t));
        };
        return (
          window.addEventListener(`resize`, N),
          () => {
            (h.current && cancelAnimationFrame(h.current),
              o.domElement.removeEventListener(`mousedown`, A),
              o.domElement.removeEventListener(`click`, j),
              l.detach(),
              n.remove(l),
              l.dispose(),
              c.dispose());
            let e = (e) => {
              for (let t of Object.values(e)) t instanceof wi && t.dispose();
              e.dispose();
            };
            (g.current &&
              g.current.traverse((t) => {
                t instanceof _a &&
                  (t.geometry?.dispose(),
                  Array.isArray(t.material)
                    ? t.material.forEach(e)
                    : t.material && e(t.material));
              }),
              v.current.clear(),
              (_.current = null),
              (g.current = null),
              (y.current = null),
              d.current &&
                o.domElement.parentNode &&
                d.current.removeChild(o.domElement),
              s.dispose(),
              o.dispose(),
              window.removeEventListener(`resize`, N));
          }
        );
      }, [e]),
      (0, X.useEffect)(() => {
        let e = y.current;
        if (!e) return;
        if (n) {
          let t = v.current.get(n);
          t ? e.attach(t) : e.detach();
        } else e.detach();
        let t = m.current,
          r = f.current,
          i = p.current;
        t && r && i && t.render(r, i);
      }, [n]),
      (0, X.useEffect)(() => {
        y.current?.setMode(t);
      }, [t]),
      (0, X.useEffect)(() => {
        let e = new Set(r || []);
        for (let [t, n] of v.current.entries()) n.visible = !e.has(t);
        let t = m.current,
          n = f.current,
          i = p.current;
        t && n && i && t.render(n, i);
      }, [r]),
      (0, Z.jsx)(`div`, { ref: d, className: `w-full h-full` })
    );
  }),
  G$ = 100,
  K$ = 3e5,
  q$ = `h-6 bg-gray-800/50 border border-gray-700/50 rounded px-1 text-[10px] text-gray-300 focus:outline-none focus:border-purple-500/50 disabled:opacity-40 disabled:cursor-not-allowed`;
