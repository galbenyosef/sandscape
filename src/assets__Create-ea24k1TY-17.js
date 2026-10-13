// assets__Create-ea24k1TY 17 — children
// Lines 5517-5818 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var xl = ({ modelUrl: e, onLoad: t, onError: n, isModal: r = !1 }) => {
  let i = (0, X.useRef)(null),
    a = (0, X.useRef)(null),
    o = (0, X.useRef)(null),
    s = (0, X.useRef)(null),
    c = (0, X.useRef)(1.5),
    l = (0, X.useRef)(t),
    u = (0, X.useRef)(n);
  return (
    (0, X.useEffect)(() => {
      ((l.current = t), (u.current = n));
    }, [t, n]),
    (0, X.useEffect)(() => {
      if (!i.current) return;
      let t = i.current,
        n = new oa(),
        d = t.clientWidth,
        f = t.clientHeight,
        p = !1,
        m = new ji(40, d / f, 0.1, 100);
      (m.position.set(4, 3, 4), m.lookAt(0, 1.5, 0), (o.current = m));
      let h = new Ta({ antialias: !0 });
      (h.setSize(d, f),
        h.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        gl(h),
        t.appendChild(h.domElement));
      let { envMap: g } = _l(n, h),
        _ = r ? new hl(m, h.domElement) : null;
      (_ &&
        ((_.enableDamping = !0),
        (_.dampingFactor = 0.05),
        (_.autoRotate = !1),
        (_.enableZoom = !0),
        (_.enablePan = !0),
        _.target.set(0, 1.5, 0),
        (_.minDistance = 1.5),
        (_.maxDistance = 12),
        (a.current = _)),
        new C().load(
          e,
          (e) => {
            let t = e.scene;
            if (p) {
              Sl(t);
              return;
            }
            let i = new sa().setFromObject(t),
              a = i.getCenter(new Y()),
              o = i.getSize(new Y()),
              s = Math.max(o.x, o.y, o.z);
            if (!Number.isFinite(s) || s <= 0) {
              (Sl(t), u.current?.());
              return;
            }
            let d = (r ? 3 : 1.5) / s;
            (t.scale.setScalar(d),
              t.position.copy(a.multiplyScalar(-d)),
              yl(t),
              vl(t, g),
              n.add(t));
            let f = bl(t);
            ((c.current = f),
              _ && (_.target.set(0, f, 0), _.update()),
              m.lookAt(0, f, 0),
              l.current?.());
          },
          void 0,
          (e) => {
            p || (console.error(`Error loading 3D model:`, e), u.current?.());
          },
        ));
      let v = 0,
        y = () => {
          if (!p) {
            if (((s.current = requestAnimationFrame(y)), (v += 0.005), _))
              _.update();
            else {
              let e = n.children.find((e) => e.type === `Group`);
              e && (e.rotation.y = v);
            }
            h.render(n, m);
          }
        };
      y();
      let b = () => {
        if (i.current && r) {
          let e = i.current.clientWidth,
            t = i.current.clientHeight;
          ((m.aspect = e / t), m.updateProjectionMatrix(), h.setSize(e, t));
        }
      };
      return (
        r && window.addEventListener(`resize`, b),
        () => {
          ((p = !0),
            (s.current &&= (cancelAnimationFrame(s.current), null)),
            h.domElement.parentNode === t && t.removeChild(h.domElement),
            _?.dispose(),
            (a.current = null),
            (o.current = null),
            Sl(n),
            g.dispose(),
            h.renderLists.dispose(),
            h.dispose(),
            r && window.removeEventListener(`resize`, b));
        }
      );
    }, [e, r]),
    (0, Z.jsx)(`div`, {
      ref: i,
      className: `w-full h-full relative`,
      children:
        r &&
        (0, Z.jsxs)(`div`, {
          className: `absolute bottom-3 right-3 z-10 flex flex-col items-end gap-1.5`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-center gap-3 bg-card/70 backdrop-blur-sm rounded-md px-2.5 py-1.5 text-[10px] text-muted-foreground`,
              children: [
                (0, Z.jsxs)(`span`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, Z.jsx)(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `2`,
                      children: (0, Z.jsx)(`path`, {
                        d: `M5 9l4-4 4 4M5 15l4 4 4-4`,
                      }),
                    }),
                    `Drag to rotate`,
                  ],
                }),
                (0, Z.jsxs)(`span`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, Z.jsxs)(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `2`,
                      children: [
                        (0, Z.jsx)(`circle`, { cx: `12`, cy: `12`, r: `3` }),
                        (0, Z.jsx)(`path`, {
                          d: `M12 5v2M12 17v2M5 12h2M17 12h2`,
                        }),
                      ],
                    }),
                    `Scroll to zoom`,
                  ],
                }),
              ],
            }),
            (0, Z.jsx)(`button`, {
              onClick: () => {
                if (a.current && o.current) {
                  let e = c.current;
                  (o.current.position.set(4, 3, 4),
                    a.current.target.set(0, e, 0),
                    a.current.update());
                }
              },
              className: `bg-card/70 backdrop-blur-sm rounded-md p-1.5 text-muted-foreground hover:text-foreground transition-colors`,
              title: `Recenter view`,
              children: (0, Z.jsxs)(`svg`, {
                width: `14`,
                height: `14`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `2`,
                children: [
                  (0, Z.jsx)(`path`, {
                    d: `M3 8V5a2 2 0 012-2h3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M21 16v3a2 2 0 01-2 2h-3`,
                  }),
                  (0, Z.jsx)(`circle`, { cx: `12`, cy: `12`, r: `2` }),
                ],
              }),
            }),
          ],
        }),
    })
  );
};
function Sl(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set();
  e.traverse((e) => {
    let i = e;
    if (
      (i.geometry &&
        !r.has(i.geometry) &&
        (r.add(i.geometry), i.geometry.dispose()),
      !i.material)
    )
      return;
    let a = Array.isArray(i.material) ? i.material : [i.material];
    for (let e of a)
      if (!n.has(e)) {
        n.add(e);
        for (let n of Object.values(e))
          n instanceof wi && !t.has(n) && (t.add(n), n.dispose());
        e.dispose();
      }
  });
}
function ine({
  isOpen: e,
  onClose: t,
  modelUrl: n,
  title: r,
  subtitle: i,
  children: a,
  actions: o,
}) {
  let [s, c] = (0, X.useState)(!0),
    [l, u] = (0, X.useState)(!1);
  return e
    ? (0, Z.jsx)(`div`, {
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4`,
        onClick: t,
        children: (0, Z.jsxs)(`div`, {
          className: `bg-card rounded-xl border border-border max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col`,
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, Z.jsxs)(`div`, {
              className: `px-4 py-3 border-b border-border flex items-center justify-between shrink-0`,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    (0, Z.jsx)(`h3`, {
                      className: `text-sm font-semibold text-white truncate`,
                      children: r,
                    }),
                    i &&
                      (0, Z.jsx)(`p`, {
                        className: `text-xs text-muted-foreground truncate`,
                        children: i,
                      }),
                  ],
                }),
                (0, Z.jsx)(x, {
                  variant: `ghost`,
                  size: `sm`,
                  onClick: t,
                  className: `text-muted-foreground hover:text-white -mr-2 shrink-0`,
                  children: (0, Z.jsx)(li, { className: `h-4 w-4` }),
                }),
              ],
            }),
            (0, Z.jsxs)(`div`, {
              className: `relative aspect-square bg-card overflow-hidden`,
              children: [
                s &&
                  !l &&
                  (0, Z.jsx)(`div`, {
                    className: `absolute inset-0 flex items-center justify-center bg-background/60 z-10`,
                    children: (0, Z.jsx)(J, {
                      className: `h-8 w-8 text-primary animate-spin`,
                    }),
                  }),
                l
                  ? (0, Z.jsxs)(`div`, {
                      className: `absolute inset-0 flex flex-col items-center justify-center text-muted-foreground`,
                      children: [
                        (0, Z.jsx)(U, { className: `h-8 w-8 mb-2` }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm`,
                          children: `Failed to load 3D model`,
                        }),
                      ],
                    })
                  : (0, Z.jsx)(xl, {
                      modelUrl: n,
                      isModal: !0,
                      onLoad: () => {
                        (c(!1), u(!1));
                      },
                      onError: () => {
                        (c(!1), u(!0));
                      },
                    }),
              ],
            }),
            a &&
              (0, Z.jsx)(`div`, {
                className: `p-4 border-t border-border`,
                children: a,
              }),
            o && (0, Z.jsx)(`div`, { className: `px-4 pb-4`, children: o }),
          ],
        }),
      })
    : null;
}
