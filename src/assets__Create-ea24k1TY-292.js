// assets__Create-ea24k1TY 292 — current
// Lines 102491-103207 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var kve = 6,
  Ave = (0, X.forwardRef)(function (
    {
      modelUrl: e,
      clipUrl: t,
      isActive: n,
      onLoaded: r,
      onStrokeEnd: i,
      onBeforeModelSwap: a,
      onError: o,
    },
    s,
  ) {
    let c = (0, X.useRef)(null),
      l = (0, X.useRef)(null),
      u = (0, X.useRef)(null),
      d = (0, X.useRef)(null),
      f = (0, X.useRef)(null),
      p = (0, X.useRef)(null),
      m = (0, X.useRef)(null),
      h = (0, X.useRef)(null),
      g = (0, X.useRef)(null),
      _ = (0, X.useRef)([]),
      v = (0, X.useRef)(new Map()),
      y = (0, X.useRef)([]),
      b = (0, X.useRef)(null),
      x = (0, X.useRef)(null),
      S = (0, X.useRef)(null),
      w = (0, X.useRef)(new Map()),
      T = (0, X.useRef)(null),
      E = (0, X.useRef)(null),
      D = (0, X.useRef)(0),
      O = (0, X.useRef)(-1),
      k = (0, X.useRef)(!1),
      A = (0, X.useRef)(!1),
      j = (0, X.useRef)(null),
      M = (0, X.useRef)(!1),
      [N, P] = (0, X.useState)(0),
      [F, I] = (0, X.useState)(0),
      [L, R] = (0, X.useState)(null),
      {
        selectedBoneName: z,
        brushMode: B,
        brushRadius: V,
        brushStrength: H,
        falloffKind: U,
        brushHardness: ee,
        opacityCap: W,
        mirror: G,
        showOverlay: te,
        showTexture: K,
        showBones: ne,
        isPlaying: re,
        playbackSpeed: ie,
        time: ae,
        selectBone: oe,
        setJointNames: se,
        setSkinStats: q,
        setTime: ce,
        setDuration: le,
        pause: ue,
        play: de,
        stop: fe,
        takeUndo: pe,
        takeRedo: me,
        pushRedo: he,
        pushUndoKeepRedo: ge,
        pushUndo: _e,
        clearHistory: ve,
      } = T9(),
      ye = (0, X.useRef)(n !== !1),
      be = (0, X.useRef)({
        mode: B,
        radius: V,
        strength: H,
        kind: U,
        hardness: ee,
        cap: W,
        mirror: G,
      });
    be.current = {
      mode: B,
      radius: V,
      strength: H,
      kind: U,
      hardness: ee,
      cap: W,
      mirror: G,
    };
    let xe = (0, X.useRef)(z);
    xe.current = z;
    let Se = (0, X.useRef)(te);
    Se.current = te;
    let Ce = (0, X.useRef)(re);
    Ce.current = re;
    let we = (0, X.useRef)(ie);
    we.current = ie;
    let Te = (0, X.useRef)(i);
    Te.current = i;
    let Ee = (0, X.useRef)(r);
    Ee.current = r;
    let De = (0, X.useRef)(o);
    De.current = o;
    let Oe = (0, X.useRef)(a);
    ((Oe.current = a),
      (0, X.useEffect)(() => {
        let e = n !== !1,
          t = ye.current;
        ((ye.current = e),
          e &&
            !t &&
            l.current &&
            u.current &&
            d.current &&
            (f.current?.update(), l.current.render(u.current, d.current)));
      }, [n]));
    let ke = (0, X.useCallback)((e, t) => {
        if (!t) return -1;
        let n = v.current.get(e.key);
        return (n ? n.names : p9(e)).indexOf(t);
      }, []),
      Ae = (0, X.useCallback)(() => {
        let e = xe.current;
        for (let t of _.current) {
          let n = ke(t, e),
            r = Se.current && n >= 0;
          (mve(t, r), r && v9(t, n));
        }
      }, [ke]),
      je = (0, X.useCallback)(() => {
        for (let e of y.current) {
          let t = e.userData.bindPosition,
            n = e.userData.bindQuaternion;
          (t && e.position.copy(t), n && e.quaternion.copy(n));
        }
        D.current += 1;
      }, []);
    ((0, X.useEffect)(() => {
      let e = c.current;
      if (!e) return;
      let t = e.clientWidth || 1,
        n = e.clientHeight || 1,
        r = new oa();
      u.current = r;
      let i = new ji(45, t / n, 0.01, 100);
      (i.position.set(1.6, 1.2, 2.4), (d.current = i));
      let a = new Ta({ antialias: !0 });
      (a.setSize(t, n),
        a.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        gl(a),
        (l.current = a),
        e.appendChild(a.domElement),
        (a.domElement.style.touchAction = `none`));
      let o = _l(r, a);
      S.current = o.envMap;
      let s = new hl(i, a.domElement);
      ((s.enableDamping = !0),
        (s.dampingFactor = 0.08),
        s.target.set(0, 0.9, 0),
        (s.minDistance = 0.2),
        (s.maxDistance = 20),
        s.update(),
        (f.current = s));
      let g = new Q6(i, a.domElement);
      (g.setMode(`rotate`),
        g.setSpace(`local`),
        g.setSize(0.6),
        r.add(g.getHelper()),
        (p.current = g),
        g.addEventListener(`dragging-changed`, (e) => {
          ((s.enabled = !e.value),
            (k.current = e.value),
            e.value
              ? (A.current = !0)
              : requestAnimationFrame(() => {
                  A.current = !1;
                }));
        }),
        g.addEventListener(`objectChange`, () => {
          D.current += 1;
        }));
      let b = 0,
        C = () => {
          m.current = requestAnimationFrame(C);
          let e = (h.current ??= new La()).getDelta();
          if (!ye.current) return;
          let t = T.current;
          if (t && Ce.current) {
            (t.update(e * we.current), (D.current += 1));
            let n = performance.now();
            n - b > 100 && ((b = n), ce(t.time));
          }
          let n = x.current;
          if (n && y.current.length) {
            let e = y.current,
              t = new Y();
            for (let r = 0; r < Math.min(n.children.length, e.length); r++)
              (e[r].getWorldPosition(t), n.children[r].position.copy(t));
          }
          (s.update(), a.render(r, i));
        };
      C();
      let w = new ResizeObserver(() => {
        let t = e.clientWidth || 1,
          n = e.clientHeight || 1;
        ((i.aspect = t / n), i.updateProjectionMatrix(), a.setSize(t, n));
      });
      return (
        w.observe(e),
        () => {
          (w.disconnect(), m.current && cancelAnimationFrame(m.current));
          for (let e of _.current) y9(e);
          ((_.current = []),
            v.current.clear(),
            g.detach(),
            g.dispose(),
            s.dispose(),
            r.traverse((e) => {
              let t = e;
              if (t.isMesh) {
                t.geometry?.dispose();
                let e = t.material;
                Array.isArray(e) ? e.forEach((e) => e.dispose()) : e?.dispose();
              }
            }),
            S.current?.dispose(),
            a.dispose(),
            a.domElement.parentNode?.removeChild(a.domElement));
        }
      );
    }, []),
      (0, X.useEffect)(() => {
        let t = u.current;
        if (!t) return;
        Oe.current?.(_.current);
        let n = _.current.length > 0;
        for (let e of _.current) y9(e);
        if (
          ((_.current = []),
          v.current.clear(),
          w.current.clear(),
          p.current?.detach(),
          T.current?.stopAllAction(),
          (T.current = null),
          (E.current = null),
          (g.current &&= (t.remove(g.current), null)),
          (b.current &&= (t.remove(b.current), null)),
          (x.current &&= (t.remove(x.current), null)),
          (y.current = []),
          !e)
        ) {
          n && (se([]), q(0, 0), oe(-1, null), ve());
          return;
        }
        let r = !1;
        return (
          new C().load(
            e,
            (e) => {
              if (r) return;
              let n = e.scene;
              n.traverse((e) => {
                e.isSkinnedMesh && (e.frustumCulled = !1);
              });
              let i = e.parser.associations,
                a = e.parser.json.nodes ?? [],
                o = [];
              n.traverse((e) => {
                e.isBone && o.push(e);
              });
              let s, c;
              try {
                ((s = fve(n, i, a)), (c = f9(o, i, a)));
              } catch (e) {
                (console.error(`[SkinWeightsViewport] skin read refused:`, e),
                  De.current(
                    e instanceof Error
                      ? e.message
                      : `This rig cannot be painted.`,
                  ));
                return;
              }
              if (s.length === 0) {
                De.current(`This model has no skinned geometry to paint.`);
                return;
              }
              (t.add(n),
                yl(n),
                S.current && vl(n, S.current),
                (g.current = n),
                o.forEach((e, t) => {
                  ((e.userData.rawName = c[t]),
                    (e.userData.bindPosition = e.position.clone()),
                    (e.userData.bindQuaternion = e.quaternion.clone()));
                }),
                (y.current = o));
              let l = new pa(n);
              ((l.material.linewidth = 2), t.add(l), (b.current = l));
              let u = new Ji();
              u.name = `__skinJointSpheres`;
              let p = new Ba(0.012, 8, 8),
                m = new Fi({
                  color: o9,
                  depthTest: !1,
                  transparent: !0,
                  opacity: 0.9,
                });
              (o.forEach((e, t) => {
                let n = new _a(p, m.clone());
                ((n.userData.boneName = c[t]),
                  (n.renderOrder = 999),
                  e.getWorldPosition(n.position),
                  u.add(n));
              }),
                t.add(u),
                (x.current = u));
              let h = 0;
              for (let e of s)
                (v.current.set(e.key, Cve(e)), (h += e.vertexCount));
              ((_.current = s), (D.current += 1), (O.current = -1));
              let C = v.current.get(s[0].key)?.names ?? p9(s[0]);
              (se(C), q(s.length, h), oe(-1, null), ve());
              let w = d.current,
                E = f.current;
              if (w && E) {
                let e = new sa().setFromObject(n).getSize(new Y()),
                  t = bl(n),
                  r =
                    ((Math.max(e.x, e.y, e.z) || 1) /
                      (2 * Math.tan((w.fov * Math.PI) / 360))) *
                    1.6;
                (w.position.set(r * 0.7, t + e.y * 0.15, r * 0.9),
                  E.target.set(0, t, 0),
                  E.update());
              }
              ((T.current = new xa(n)),
                Ae(),
                Ee.current({
                  jointNames: C,
                  primitiveCount: s.length,
                  vertexCount: h,
                }),
                I((e) => e + 1));
            },
            void 0,
            (e) => {
              r ||
                (console.error(`[SkinWeightsViewport] model load failed:`, e),
                De.current(`Could not load the rigged model.`));
            },
          ),
          () => {
            r = !0;
          }
        );
      }, [e, N, se, q, oe, ve, Ae]));
    let Me = (0, X.useCallback)(
      (e) => {
        let t = T.current;
        if (t) {
          if ((t.stopAllAction(), (E.current = null), !e)) {
            (je(), le(0), ce(0));
            return;
          }
          new C().load(
            e,
            (e) => {
              let n = T.current;
              if (!n || n !== t) return;
              let r = e.animations[0];
              if (!r) {
                De.current(`That clip file contains no animation track.`);
                return;
              }
              let i = n.clipAction(r);
              (i.play(),
                (E.current = i),
                n.setTime(0),
                (D.current += 1),
                le(r.duration),
                ce(0));
            },
            void 0,
            (e) => {
              (console.error(`[SkinWeightsViewport] clip load failed:`, e),
                De.current(`Could not load that animation clip.`));
            },
          );
        }
      },
      [je, le, ce],
    );
    ((0, X.useEffect)(() => {
      Me(t);
    }, [t, F, Me]),
      (0, X.useEffect)(() => {
        if (re) return;
        let e = T.current;
        !e || !E.current || (e.setTime(ae), (D.current += 1));
      }, [ae, re]),
      (0, X.useEffect)(() => {
        Ae();
      }, [z, te, F, Ae]),
      (0, X.useEffect)(() => {
        let e = w.current;
        for (let t of _.current) {
          let n = Array.isArray(t.originalMaterial)
            ? t.originalMaterial
            : [t.originalMaterial];
          for (let t of n) {
            let n = t;
            if (!(`map` in n)) continue;
            e.has(t) || e.set(t, n.map ?? null);
            let r = e.get(t) ?? null,
              i = K ? r : null;
            n.map !== i && ((n.map = i), (n.needsUpdate = !0));
          }
        }
      }, [K, F]),
      (0, X.useEffect)(() => {
        (b.current && (b.current.visible = ne),
          x.current && (x.current.visible = ne));
      }, [ne, F]),
      (0, X.useEffect)(() => {
        if (x.current)
          for (let e of x.current.children) {
            let t = e,
              n = t.material,
              r = t.userData.boneName === z;
            (n.color.set(r ? a9 : o9), t.scale.setScalar(r ? 2.4 : 1));
          }
      }, [z, F]),
      (0, X.useEffect)(() => {
        let e = p.current;
        if (!e) return;
        let t = z ? y.current.find((e) => e.userData.rawName === z) : void 0;
        if (!t || re) {
          e.detach();
          return;
        }
        e.attach(t);
      }, [z, re, F]));
    let Ne = (0, X.useMemo)(() => new Ea(), []),
      Pe = (0, X.useCallback)(() => {
        if (O.current !== D.current) {
          for (let e of _.current) e.mesh.computeBoundingSphere();
          O.current = D.current;
        }
      }, []),
      Fe = (0, X.useCallback)(
        (e, t, n, r, i = !1) => {
          if (n < 0) return;
          let a = v.current.get(e.key);
          if (!a) return;
          wve(e, a, D.current);
          let o = be.current,
            s = Tve(e, a, t, o);
          if (s.length === 0) return;
          Eve(e, a, s, r, o.mode === `smooth`);
          let c = eve(e.rows, s, {
            mode: o.mode,
            bone: n,
            strength: o.strength,
            opacityCap: o.cap,
            accum: i ? a.mirrorAccum : a.accum,
            adjacency: a.adjacency,
          });
          if (c.length !== 0 && ((r.touchedAny = !0), m9(e, c), Se.current)) {
            let t = ke(e, xe.current);
            t >= 0 && v9(e, t);
          }
        },
        [ke],
      ),
      Ie = (0, X.useCallback)(
        (e, t) => {
          let n = j.current,
            r = c.current,
            i = d.current;
          if (!n || !r || !i) return;
          let a = _.current;
          if (a.length === 0) return;
          Pe();
          let o = r.getBoundingClientRect(),
            s = new Mi(
              ((e - o.left) / o.width) * 2 - 1,
              -((t - o.top) / o.height) * 2 + 1,
            );
          Ne.setFromCamera(s, i);
          let l = Ne.intersectObjects(
            a.map((e) => e.mesh),
            !1,
          );
          if (l.length === 0) return;
          let u = l[0],
            f = a.find((e) => e.mesh === u.object);
          if (!f) return;
          let p = ke(f, xe.current);
          if ((Fe(f, u.point, p, n), be.current.mirror)) {
            let e = v.current.get(f.key),
              t = e && p >= 0 ? e.mirror[p] : -1;
            e && t >= 0 && t !== p && Fe(f, Ove(g.current, u.point), t, n, !0);
          }
        },
        [Ne, Pe, ke, Fe],
      ),
      Le = (0, X.useCallback)(() => {
        let e = j.current;
        if (
          ((j.current = null),
          f.current && (f.current.enabled = !0),
          !e || !e.touchedAny)
        )
          return;
        M.current = !0;
        let t = [];
        for (let [n, r] of e.partials)
          r.length !== 0 && t.push({ primitiveKey: n, snapshot: Dve(r) });
        t.length !== 0 && (_e(t), Te.current());
      }, [_e]),
      Re = (0, X.useCallback)(
        (e) => {
          if (
            e.button === 0 &&
            !e.altKey &&
            !(A.current || k.current) &&
            ((M.current = !1), !(!xe.current || _.current.length === 0))
          ) {
            for (let e of v.current.values())
              (e.accum.fill(0), e.mirrorAccum.fill(0));
            ((j.current = xve()),
              f.current && (f.current.enabled = !1),
              e.currentTarget.setPointerCapture(e.pointerId),
              e.currentTarget.focus(),
              Ie(e.clientX, e.clientY));
          }
        },
        [Ie],
      ),
      ze = (0, X.useCallback)(
        (e) => {
          let t = c.current,
            n = d.current,
            r = f.current;
          if (t && n && r) {
            let i = t.getBoundingClientRect(),
              a = n.position.distanceTo(r.target) || 1,
              o = i.height / (2 * Math.tan((n.fov * Math.PI) / 360) * a);
            R({
              x: e.clientX - i.left,
              y: e.clientY - i.top,
              px: Math.max(kve, be.current.radius * o * 2),
            });
          }
          j.current && Ie(e.clientX, e.clientY);
        },
        [Ie],
      ),
      Be = (0, X.useCallback)(
        (e) => {
          j.current &&
            (e.currentTarget.hasPointerCapture(e.pointerId) &&
              e.currentTarget.releasePointerCapture(e.pointerId),
            Le());
        },
        [Le],
      ),
      Ve = (0, X.useCallback)(
        (e) => {
          if (A.current || e.altKey) return;
          let t = M.current;
          if (((M.current = !1), t)) return;
          let n = c.current,
            r = d.current;
          if (!n || !r) return;
          let i = n.getBoundingClientRect(),
            a = new Mi(
              ((e.clientX - i.left) / i.width) * 2 - 1,
              -((e.clientY - i.top) / i.height) * 2 + 1,
            );
          Ne.setFromCamera(a, r);
          let o = x.current;
          if (o && o.visible) {
            let e = Ne.intersectObjects(o.children, !1);
            if (e.length > 0) {
              let t = e[0].object.userData.boneName;
              if (t) {
                let e = _.current[0],
                  n = e ? ke(e, t) : -1;
                oe(n, t);
              }
              return;
            }
          }
          Ne.intersectObjects(
            _.current.map((e) => e.mesh),
            !1,
          ).length === 0 &&
            xe.current &&
            oe(-1, null);
        },
        [Ne, ke, oe],
      ),
      He = (0, X.useCallback)(
        (e) => {
          let t = [];
          for (let n of e) {
            let e = _.current.find((e) => e.key === n.primitiveKey);
            if (
              e &&
              (t.push({
                primitiveKey: n.primitiveKey,
                snapshot: u9(e.rows, n.snapshot.vertices),
              }),
              lve(e.rows, n.snapshot),
              m9(e, n.snapshot.vertices),
              Se.current)
            ) {
              let t = ke(e, xe.current);
              t >= 0 && v9(e, t);
            }
          }
          return t;
        },
        [ke],
      ),
      Ue = (0, X.useCallback)(() => {
        let e = pe();
        if (!e) return;
        let t = He(e);
        (t.length > 0 && he(t), Te.current());
      }, [pe, He, he]),
      We = (0, X.useCallback)(() => {
        let e = me();
        if (!e) return;
        let t = He(e);
        (t.length > 0 && ge(t), Te.current());
      }, [me, He, ge]),
      Ge = (0, X.useCallback)(
        (e) => {
          if (!(e.ctrlKey || e.metaKey)) return;
          let t = e.key.toLowerCase();
          t === `z`
            ? (e.preventDefault(), e.shiftKey ? We() : Ue())
            : t === `y` && (e.preventDefault(), We());
        },
        [Ue, We],
      );
    return (
      (0, X.useImperativeHandle)(
        s,
        () => ({
          resetPose: () => {
            (T.current?.stopAllAction(),
              (E.current = null),
              je(),
              ue(),
              ce(0),
              le(0));
          },
          getPrimitives: () => _.current,
          reload: () => P((e) => e + 1),
          undo: Ue,
          redo: We,
          setClip: (e) => Me(e),
          play: () => de(),
          pause: () => ue(),
          stop: () => {
            (fe(), T.current?.setTime(0), (D.current += 1));
          },
          seek: (e) => {
            (ce(e), T.current?.setTime(e), (D.current += 1));
          },
        }),
        [je, ue, de, fe, ce, le, Ue, We, Me],
      ),
      (0, Z.jsx)(`div`, {
        ref: c,
        tabIndex: 0,
        className: `w-full h-full relative outline-none`,
        onPointerDown: Re,
        onPointerMove: ze,
        onPointerUp: Be,
        onPointerCancel: Be,
        onPointerLeave: () => R(null),
        onClick: Ve,
        onKeyDown: Ge,
        children:
          L &&
          z &&
          (0, Z.jsx)(`div`, {
            style: {
              position: `absolute`,
              left: L.x,
              top: L.y,
              width: L.px,
              height: L.px,
              marginLeft: -L.px / 2,
              marginTop: -L.px / 2,
              borderRadius: `50%`,
              border: `1px solid rgba(255,255,255,0.85)`,
              boxShadow: `0 0 0 1px rgba(0,0,0,0.55) inset`,
              pointerEvents: `none`,
              zIndex: 5,
            },
          }),
      })
    );
  }),
  jve = 1500,
  Mve = [
    { id: `add`, label: `Add` },
    { id: `subtract`, label: `Sub` },
    { id: `replace`, label: `Set` },
    { id: `smooth`, label: `Smooth` },
  ],
  Nve = [`smooth`, `linear`, `constant`, `sharp`];
