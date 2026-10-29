// Create-CEn7EAZs 282 — current
// Lines 95479-96590 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Z5 = new Y(),
  Q5 = new gi(),
  $5 = new Di(),
  e7 = ({
    sessionDir: e,
    modelPath: t,
    animationPath: n,
    isActive: r,
    registerSampler: i = !1,
    showTools: a = !0,
  }) => {
    let o = (0, X.useRef)(null),
      s = (0, X.useRef)(null),
      c = (0, X.useRef)(null),
      l = (0, X.useRef)(null),
      u = (0, X.useRef)(null),
      d = (0, X.useRef)(null),
      f = (0, X.useRef)(null),
      p = (0, X.useRef)(new Ta()),
      m = (0, X.useRef)(null),
      h = (0, X.useRef)(null),
      g = (0, X.useRef)(null),
      _ = (0, X.useRef)(null),
      v = (0, X.useRef)([]),
      y = (0, X.useRef)(null),
      b = (0, X.useRef)(0),
      x = (0, X.useRef)(null),
      S = (0, X.useRef)(null),
      w = (0, X.useRef)(null),
      T = (0, X.useRef)(new Map()),
      E = (0, X.useRef)(null),
      D = (0, X.useRef)(0),
      O = (0, X.useRef)(0),
      k = (0, X.useRef)(null),
      A = (0, X.useRef)(new Map()),
      j = (0, X.useRef)(new Map()),
      M = (0, X.useRef)(null),
      N = (0, X.useRef)(!1),
      P = (0, X.useRef)(!1),
      F = (0, X.useRef)({
        quaternion: new gi(),
        position: new Y(),
        scale: new Y(1, 1, 1),
      }),
      I = (0, X.useRef)(null),
      L = (0, X.useRef)(`rotate`),
      R = (0, X.useRef)(`translate`),
      z = (0, X.useRef)([]),
      B = (0, X.useCallback)(() => {
        let e = p8({
          selectedEffector: E.current,
          ikEnabled: z.current,
          attachable: [...T.current.keys()],
          selectedBoneName: I.current,
        });
        return e.kind === `effector` ? e.effector : null;
      }, []),
      V = (0, X.useRef)(new Map()),
      H = (0, X.useRef)(0),
      ee = (0, X.useRef)(null),
      te = (0, X.useRef)(null),
      U = (0, X.useRef)(null),
      W = (0, X.useRef)(null),
      G = (0, X.useRef)(null),
      re = (0, X.useRef)(() => ``),
      ie = (0, X.useRef)(() => ``),
      ae = (0, X.useRef)([]),
      oe = (0, X.useRef)(r !== !1);
    (0, X.useEffect)(() => {
      let e = r !== !1,
        t = oe.current;
      ((oe.current = e),
        e &&
          !t &&
          c.current &&
          s.current &&
          l.current &&
          (u.current?.update(), c.current.render(s.current, l.current)));
    }, [r]);
    let {
        viewMode: se,
        showGrid: ce,
        showRootMotionPath: K,
        isPlaying: le,
        playbackSpeed: ue,
        currentFrame: de,
        fps: fe,
        selectedBoneName: pe,
        selectedBoneNames: me,
        boneOffsets: he,
        boneGizmoMode: ge,
        mutedBones: _e,
        ikKeys: ve,
        ikEnabled: ye,
        selectedEffector: be,
        ikGizmoMode: q,
        gizmoSpace: xe,
        footLock: Se,
        plantRuntime: Ce,
        limbStabilize: we,
        stabilizeRuntime: Te,
        isLoopPreview: Ee,
        positionOffset: De,
        rootMotionConfig: Oe,
        loopInFrame: ke,
        loopOutFrame: Ae,
        loopBlendFrames: je,
        loopConfigured: Me,
        showLoopGhosts: Ne,
        setFrame: Pe,
        setTotalFrames: Fe,
        selectBone: Ie,
        setBoneNames: Le,
        setAttachableEffectors: Re,
        upsertBoneOffsetAtFrame: ze,
        upsertIKKeyAtFrame: Be,
        setPlantRuntime: Ve,
        setStabilizeRuntime: He,
        setBakeSampler: Ue,
        setClipFileSampler: We,
        setHipsRestMeasure: Ge,
      } = L6(),
      Ke = (0, X.useMemo)(
        () => ({
          boneOffsets: he,
          mutedBones: _e,
          ikKeys: ve,
          ikEnabled: ye,
          footLock: Se,
          plantRuntime: Ce,
          limbStabilize: we,
          stabilizeRuntime: Te,
          rootMotionConfig: Oe,
        }),
        [he, _e, ve, ye, Se, Ce, we, Te, Oe],
      );
    (0, X.useEffect)(() => {
      ((S.current = Ke), (w.current = R5(Ke)));
    }, [Ke]);
    let qe = (0, X.useRef)({
      active: !1,
      inFrame: 0,
      outFrame: 0,
      blendFrames: 8,
    });
    (0, X.useEffect)(() => {
      qe.current = { active: Ee, inFrame: ke, outFrame: Ae, blendFrames: je };
    }, [Ee, ke, Ae, je]);
    let Je = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
      Je.current =
        Me && Ae > ke ? { inFrame: ke, outFrame: Ae, blendFrames: je } : null;
    }, [ke, Ae, je, Me]);
    let [Ye, Xe] = (0, X.useState)(0),
      Ze = (0, X.useRef)(null),
      [Qe, $e] = (0, X.useState)(0);
    (0, X.useEffect)(() => {
      let e = G.current,
        t =
          Me && Ae > ke ? { inFrame: ke, outFrame: Ae, blendFrames: je } : null;
      ((Ze.current = e && t ? M8(e, t, fe) : null), $e((e) => e + 1));
    }, [ke, Ae, je, Me, fe, Ye]);
    let et = (0, X.useRef)([0, 0, 0]);
    (0, X.useEffect)(() => {
      et.current = De;
    }, [De]);
    let tt = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
      tt.current = Oe;
    }, [Oe]);
    let nt = (0, X.useRef)(!1),
      rt = (0, X.useRef)(1),
      it = (0, X.useRef)(30),
      at = (0, X.useRef)(Pe);
    ((0, X.useEffect)(() => {
      nt.current = le;
    }, [le]),
      (0, X.useEffect)(() => {
        rt.current = ue;
      }, [ue]),
      (0, X.useEffect)(() => {
        it.current = fe;
      }, [fe]),
      (0, X.useEffect)(() => {
        at.current = Pe;
      }, [Pe]),
      (0, X.useEffect)(() => {
        I.current = pe;
      }, [pe]),
      (0, X.useEffect)(() => {
        H.current = de;
      }, [de]),
      (0, X.useEffect)(() => {
        re.current = ze;
      }, [ze]),
      (0, X.useEffect)(() => {
        ie.current = Be;
      }, [Be]),
      (0, X.useEffect)(() => {
        E.current = be;
      }, [be]),
      (0, X.useEffect)(() => {
        L.current = ge;
      }, [ge]),
      (0, X.useEffect)(() => {
        R.current = q;
      }, [q]),
      (0, X.useEffect)(() => {
        z.current = ye;
      }, [ye]),
      (0, X.useEffect)(() => {
        ae.current = ve;
      }, [ve]));
    let [ot, st] = (0, X.useState)(0),
      ct = (0, X.useCallback)(
        (t) => {
          let n = e.split(`/`).pop() || e,
            r = t.split(`/`).pop();
          return `${yn.API_BASE_URL}/api/game/${n}/${r}`;
        },
        [e],
      );
    ((0, X.useEffect)(() => {
      if (!o.current) return;
      let e = o.current,
        t = e.clientWidth,
        n = e.clientHeight,
        r = new $i();
      ((r.background = new Ui(657426)), (s.current = r));
      let i = new Mi(50, t / n, 0.01, 100);
      (i.position.set(2, 1.5, 3), i.lookAt(0, 0.8, 0), (l.current = i));
      let a = new ha({ antialias: !0, alpha: !1 });
      (a.setSize(t, n),
        a.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        (a.shadowMap.enabled = !0),
        (a.shadowMap.type = 2),
        (a.outputColorSpace = fa),
        (c.current = a),
        e.appendChild(a.domElement));
      let h = new yl(i, a.domElement);
      ((h.enableDamping = !0),
        (h.dampingFactor = 0.08),
        h.target.set(0, 0.8, 0),
        (h.minDistance = 0.5),
        (h.maxDistance = 20),
        h.update(),
        (u.current = h));
      let b = new Z6(i, a.domElement);
      (b.setMode(`rotate`),
        b.setSpace(`local`),
        b.setSize(0.6),
        r.add(b.getHelper()),
        (M.current = b),
        b.addEventListener(`dragging-changed`, (e) => {
          ((h.enabled = !e.value),
            (N.current = e.value),
            e.value
              ? (P.current = !0)
              : requestAnimationFrame(() => {
                  P.current = !1;
                }));
        }),
        b.addEventListener(`objectChange`, () => {
          let e = H.current,
            t = 180 / Math.PI,
            n = (e) => Math.round(e * t * 10) / 10,
            r = B();
          if (r) {
            let t = T.current.get(r),
              i = V.current.get(r);
            if (!t || !i) return;
            Z5.subVectors(t.position, i.fkPos);
            let a = ae.current.find((t) => t.effector === r && t.frame === e),
              o = a?.rotation ?? null;
            (R.current === `rotate` &&
              r !== `head` &&
              (Q5.copy(i.fkQuat).invert().multiply(t.quaternion),
              $5.setFromQuaternion(Q5, `XYZ`),
              (o = [n($5.x), n($5.y), n($5.z)])),
              ie.current(r, e, {
                offset: [
                  Math.round(Z5.x * 1e5) / 1e5,
                  Math.round(Z5.y * 1e5) / 1e5,
                  Math.round(Z5.z * 1e5) / 1e5,
                ],
                rotation: o,
                weight: a?.weight ?? 1,
              }));
            return;
          }
          let i = I.current;
          if (!i) return;
          let a = v.current.find((e) => e.name === i);
          if (!a) return;
          let o = F.current,
            s = L.current;
          if (s === `translate`) {
            (Z5.subVectors(a.position, o.position),
              re.current(i, e, {
                position: [
                  Math.round(Z5.x * 1e5) / 1e5,
                  Math.round(Z5.y * 1e5) / 1e5,
                  Math.round(Z5.z * 1e5) / 1e5,
                ],
              }));
            return;
          }
          if (s === `scale`) {
            let t = (e, t) =>
              Math.abs(t) < 1e-9 ? 1 : Math.round((e / t) * 1e4) / 1e4;
            re.current(i, e, {
              scale: [
                t(a.scale.x, o.scale.x),
                t(a.scale.y, o.scale.y),
                t(a.scale.z, o.scale.z),
              ],
            });
            return;
          }
          (Q5.copy(o.quaternion).invert().multiply(a.quaternion),
            $5.setFromQuaternion(Q5, `XYZ`),
            re.current(i, e, { rotation: [n($5.x), n($5.y), n($5.z)] }));
        }));
      let C = new va(16777215, 0.7);
      r.add(C);
      let E = new Vi(16777215, 1);
      (E.position.set(3, 5, 4),
        (E.castShadow = !0),
        E.shadow.mapSize.set(1024, 1024),
        r.add(E));
      let D = new Vi(8947967, 0.3);
      (D.position.set(-3, 2, -2), r.add(D));
      let O = new Ji(10, 10, 3355443, 2236962);
      ((O.position.y = 0), r.add(O), (g.current = O));
      let k = () => {
        d.current = requestAnimationFrame(k);
        let e = p.current.getDelta();
        if (!oe.current) return;
        let t = nt.current,
          n = rt.current,
          o = it.current,
          s = N.current,
          c = s ? B() : null,
          l = s && !c ? I.current : null,
          u = A.current,
          g = j.current;
        if (f.current && t) {
          (F8(v.current, g, l), f.current.update(e * n), P8(v.current, g));
          let t = qe.current;
          if (t.active && t.outFrame > t.inFrame && o > 0) {
            let e = t.inFrame / o,
              n = t.outFrame / o,
              r = (t.outFrame - t.inFrame) / o,
              i = y.current?.time ?? f.current.time;
            (i >= n || i < e) &&
              (F8(v.current, g, l),
              f.current.setTime(qhe(i, e, r)),
              P8(v.current, g));
          }
          (N8(v.current, Ze.current, (y.current?.time ?? f.current.time) * o),
            P8(v.current, u));
          let r = y8(y.current?.time ?? f.current.time, o);
          at.current(r);
        }
        let b = I.current,
          C = x.current,
          E = S.current;
        b && !s && C && E && Uge(C, u, E, b, F.current);
        let D = x.current,
          O = S.current;
        if (D && O && v.current.length > 0) {
          z5(D, u, O, y.current ? y8(y.current.time, o) : H.current, {
            prepared: w.current ?? void 0,
            skipBone: l,
            ikOut: V.current,
          });
          for (let [e, t] of T.current) {
            if (!t.visible || e === c) continue;
            let n = V.current.get(e);
            n &&
              (t.position.copy(n.targetPos), t.quaternion.copy(n.targetQuat));
          }
        }
        if (_.current && v.current.length > 0) {
          let e = _.current.children,
            t = v.current,
            n = new Y();
          for (let r = 0; r < Math.min(e.length, t.length); r++)
            (t[r].getWorldPosition(n), e[r].position.copy(n));
        }
        if (m.current) {
          let e = et.current;
          ((m.current.position.x = (m.current.userData.baseX ?? 0) + e[0]),
            (m.current.position.y = (m.current.userData.baseY ?? 0) + e[1]),
            (m.current.position.z = (m.current.userData.baseZ ?? 0) + e[2]));
        }
        (h.update(), a.render(r, i));
      };
      k();
      let z = new ResizeObserver(() => {
        if (!e) return;
        let t = e.clientWidth,
          n = e.clientHeight;
        ((i.aspect = t / n), i.updateProjectionMatrix(), a.setSize(t, n));
      });
      return (
        z.observe(e),
        () => {
          (z.disconnect(),
            d.current && cancelAnimationFrame(d.current),
            h.dispose(),
            a.dispose(),
            a.domElement.parentNode &&
              a.domElement.parentNode.removeChild(a.domElement),
            r.traverse((e) => {
              e instanceof ca &&
                (e.geometry?.dispose(),
                Array.isArray(e.material)
                  ? e.material.forEach((e) => e.dispose())
                  : e.material?.dispose());
            }));
        }
      );
    }, [B]),
      (0, X.useEffect)(() => {
        le && p.current.start();
      }, [le, ue]),
      (0, X.useEffect)(() => {
        le ||
          !f.current ||
          b.current === 0 ||
          (F8(v.current, j.current),
          f.current.setTime(
            Math.min(Math.fround(de / fe), Math.max(0, b.current - 1e-4)),
          ),
          P8(v.current, j.current),
          N8(v.current, Ze.current, de),
          P8(v.current, A.current));
      }, [de, fe, le, Qe]));
    let lt = (0, X.useCallback)(() => {
        let e = s.current,
          t = m.current,
          n = G.current;
        if (!e || !t || !n) return;
        ((ee.current &&= (e.remove(ee.current), null)),
          (te.current &&= (e.remove(te.current), null)),
          (U.current = null),
          (W.current = null));
        let r = (r) => {
            let i = ne(t);
            (i.traverse((e) => {
              e instanceof Qi &&
                ((e.userData.bindQuaternion = e.quaternion.clone()),
                (e.userData.bindPosition = e.position.clone()));
            }),
              i.traverse((e) => {
                if (e instanceof ca || e instanceof ia) {
                  let t = e.material.clone();
                  ((t.transparent = !0),
                    (t.opacity = 0.25),
                    (t.color = new Ui(r)),
                    (t.emissive = new Ui(r)),
                    (t.emissiveIntensity = 0.3),
                    (t.depthWrite = !1),
                    (e.material = t),
                    (e.renderOrder = 1));
                }
              }),
              i.traverse((e) => {
                e instanceof Qi ||
                  (e.type === `SkeletonHelper` && (e.visible = !1),
                  e.name.startsWith(`__ikTarget_`) && (e.visible = !1));
              }));
            let a = new da(i);
            return (
              a.clipAction(n).play(),
              (i.visible = !1),
              e.add(i),
              { group: i, mixer: a }
            );
          },
          i = r(4491519),
          a = r(16729156);
        ((ee.current = i.group),
          (te.current = a.group),
          (U.current = i.mixer),
          (W.current = a.mixer));
      }, []),
      ut = (0, X.useCallback)((e, t, n) => {
        if (!e || !t || !it.current) return;
        let r = (e) => {
            for (let t of e) {
              let e = t.userData.bindQuaternion,
                n = t.userData.bindPosition;
              (e instanceof gi && t.quaternion.copy(e),
                n instanceof Y && t.position.copy(n));
            }
          },
          i = t.userData.poseCtx;
        i ||
          (r(x8(t)),
          (i = w8(t)),
          (t.userData.poseCtx = i),
          e.setTime(0),
          S8(i.bones, i.frame0),
          (t.userData.ghostBase = P8(i.bones)),
          (t.userData.ghostClean = P8(i.bones)));
        let a = t.userData.ghostBase ?? P8(i.bones);
        t.userData.ghostBase = a;
        let o = t.userData.ghostClean ?? P8(i.bones);
        ((t.userData.ghostClean = o),
          F8(i.bones, o),
          e.setTime(Math.fround(n / it.current)),
          P8(i.bones, o),
          m.current && t.position.copy(m.current.position),
          N8(i.bones, Ze.current, n),
          P8(i.bones, a));
        let s = S.current;
        s && z5(i, a, s, n, { prepared: w.current ?? void 0 });
      }, []);
    ((0, X.useEffect)(() => {
      let e = Ne && Me && Ae > ke;
      (ee.current &&
        ((ee.current.visible = e), e && ut(U.current, ee.current, ke)),
        te.current &&
          ((te.current.visible = e), e && ut(W.current, te.current, Ae)));
    }, [ke, Ae, Me, Ne, ut, Ke, Qe]),
      (0, X.useEffect)(() => {
        if (!i) return;
        let e = m.current;
        if (!e) {
          We(null);
          return;
        }
        return (
          We(async (t, n) => {
            let r = await new C().loadAsync(ct(t)),
              i = r.animations[0];
            if (!i) throw Error(`that clip file carries no animation`);
            let a = new Set();
            r.scene.traverse((e) => {
              e.name && a.add(e.name);
            });
            let o = {
                modelTemplate: e,
                clip: i,
                clipNodeNames: a,
                state: n.state,
                fps: n.fps,
                loop: n.loop,
                speed: n.speed,
              },
              s = Y5(o);
            return X5({ ...o, state: { ...n.state, ...s } });
          }),
          () => We(null)
        );
      }, [ot, i, ct, We]));
    let dt = Se.keys.length > 0,
      ft = we.knees.enabled || we.elbows.enabled;
    ((0, X.useEffect)(() => {
      if (!i) return;
      if (!dt && !ft) {
        (Ce.length > 0 && Ve([]), Object.keys(Te).length > 0 && He({}));
        return;
      }
      let e = m.current,
        t = G.current;
      if (!e || !t) return;
      let n = setTimeout(() => {
        try {
          let n = Y5({
            modelTemplate: e,
            clip: t,
            state: { ...Ke, plantRuntime: [], stabilizeRuntime: {} },
            fps: it.current,
            loop: Je.current,
          });
          (Ve(n.plantRuntime), He(n.stabilizeRuntime));
        } catch (e) {
          (console.error(
            `[AnimationViewport] Clip runtime resolution failed:`,
            e,
          ),
            Ve([]),
            He({}));
        }
      }, 300);
      return () => clearTimeout(n);
    }, [
      ot,
      Ye,
      he,
      _e,
      ve,
      ye,
      Oe,
      ke,
      Ae,
      je,
      Me,
      i,
      Ve,
      He,
      Se.keys,
      dt,
      ft,
      we,
    ]),
      (0, X.useEffect)(() => {
        let e = s.current;
        if (!e || !t) return;
        ((m.current &&= (e.remove(m.current), null)),
          (h.current &&= (e.remove(h.current), null)),
          _.current &&
            (e.remove(_.current), (_.current = null), (v.current = [])),
          (f.current &&= (f.current.stopAllAction(), null)),
          (ee.current &&= (e.remove(ee.current), null)),
          (te.current &&= (e.remove(te.current), null)),
          (U.current = null),
          (W.current = null),
          (G.current = null),
          Re([]));
        for (let t of [...e.children])
          (t.userData.__animEditorRoot ||
            t instanceof aa ||
            t.name === `__jointSpheres`) &&
            e.remove(t);
        let n = new C(),
          r = ct(t),
          i = ++D.current,
          a = () => i !== D.current;
        return (
          n.load(
            r,
            (t) => {
              if (a()) {
                Xge(t.scene);
                return;
              }
              let n = t.scene;
              ((n.userData.__animEditorRoot = !0), (m.current = n));
              let r = !1,
                i = !1;
              if (
                (n.traverse((e) => {
                  let t = e;
                  ((t.isMesh || t.isLine || t.isPoints) && (r = !0),
                    t.isBone && (i = !0));
                }),
                !r &&
                  !i &&
                  n.traverse((e) => {
                    e !== n && (e.isBone = !0);
                  }),
                !r)
              ) {
                n.updateMatrixWorld(!0);
                let e = new ea(),
                  t = new Y();
                n.traverse((n) => {
                  n.isBone && e.expandByPoint(n.getWorldPosition(t));
                });
                let r = e.isEmpty() ? 0 : e.getSize(new Y()).y;
                r > 10 && n.scale.setScalar(1.8 / r);
              }
              let o = new ea().setFromObject(n);
              if (o.isEmpty()) {
                n.updateMatrixWorld(!0);
                let e = new Y();
                n.traverse((t) => {
                  t.isBone && o.expandByPoint(t.getWorldPosition(e));
                });
              }
              o.isEmpty() && o.set(new Y(-0.5, 0, -0.5), new Y(0.5, 1.8, 0.5));
              let s = o.getCenter(new Y()),
                c = o.getSize(new Y());
              ((n.position.x = -s.x),
                (n.position.y = -o.min.y),
                (n.position.z = -s.z),
                (n.userData.baseX = n.position.x),
                (n.userData.baseY = n.position.y),
                (n.userData.baseZ = n.position.z),
                e.add(n));
              let d = new aa(n);
              ((d.material.linewidth = 2), (h.current = d), e.add(d));
              let p = [];
              (n.traverse((e) => {
                e.isBone && p.push(e);
              }),
                (v.current = p));
              let g = w8(n);
              ((x.current = g),
                Le(
                  p.map((e) => e.name),
                  g.parentByName,
                ));
              for (let e of T.current.values()) e.removeFromParent();
              T.current.clear();
              let S = new Ki(0.025),
                C = 1 / (n.scale.x || 1);
              for (let e of w6) {
                if (
                  !E6(g.boneByName, e) ||
                  (e !== `hips` && e !== `head` && !g.chains[e])
                )
                  continue;
                let t = new ca(
                  S,
                  new Ii({
                    color: Yge[e],
                    depthTest: !1,
                    transparent: !0,
                    opacity: 0.9,
                  }),
                );
                ((t.name = `__ikTarget_${e}`),
                  (t.renderOrder = 1e3),
                  (t.visible = !1),
                  t.scale.setScalar(C),
                  n.add(t),
                  T.current.set(e, t));
              }
              Re([...T.current.keys()]);
              for (let e of p)
                ((e.userData.bindPosition = e.position.clone()),
                  (e.userData.bindQuaternion = e.quaternion.clone()),
                  (e.userData.bindScale = e.scale.clone()));
              _.current && e.remove(_.current);
              let w = new qi();
              w.name = `__jointSpheres`;
              let E = new Oa(0.012, 8, 8),
                D = new Ii({
                  color: 4500223,
                  depthTest: !1,
                  transparent: !0,
                  opacity: 0.9,
                });
              for (let e of p) {
                let t = new ca(E, D.clone());
                ((t.userData.boneName = e.name), (t.renderOrder = 999));
                let n = new Y();
                (e.getWorldPosition(n), t.position.copy(n), w.add(t));
              }
              if (
                (e.add(w),
                (_.current = w),
                (f.current = new da(n)),
                t.animations.length > 0)
              ) {
                let e = t.animations[0],
                  n = f.current.clipAction(e);
                (n.play(),
                  (y.current = n),
                  (b.current = e.duration),
                  (G.current = e),
                  Fe(v8(e.duration, fe)),
                  lt());
              }
              let O = l.current,
                k = u.current;
              if (O && k) {
                if (r) {
                  let e = Math.max(0.5, c.x, c.y, c.z),
                    t = O.fov * (Math.PI / 180),
                    n = (e / (2 * Math.tan(t / 2))) * 1.5;
                  (O.position.set(n * 0.8, c.y * 0.6, n * 0.8),
                    k.target.set(0, c.y * 0.4, 0));
                } else {
                  f.current &&
                    y.current &&
                    (f.current.update(0), n.updateMatrixWorld(!0));
                  let e = new ea(),
                    t = new Y();
                  n.traverse((n) => {
                    n.isBone && e.expandByPoint(n.getWorldPosition(t));
                  });
                  let r = e.isEmpty() ? o : e,
                    i = r.getSize(new Y()),
                    a = r.getCenter(new Y()),
                    s = Math.max(0.5, i.x, i.y, i.z),
                    c = O.fov * (Math.PI / 180),
                    l = (s / (2 * Math.tan(c / 2))) * 1.5;
                  (O.position.set(
                    a.x + l * 0.8,
                    a.y + i.y * 0.3,
                    a.z + l * 0.8,
                  ),
                    k.target.copy(a));
                }
                k.update();
              }
              st((e) => e + 1);
            },
            void 0,
            (e) => {
              a() ||
                console.error(`[AnimationViewport] Error loading model:`, e);
            },
          ),
          () => {
            D.current++;
          }
        );
      }, [t, ct, fe, Fe, Le, Re, lt]),
      (0, X.useEffect)(() => {
        if (!f.current || !m.current) return;
        if (!n) {
          (f.current.stopAllAction(),
            (y.current = null),
            (b.current = 0),
            (G.current = null),
            A.current.clear(),
            j.current.clear(),
            i && (Ue(null), Ge(null)),
            Fe(0));
          for (let e of v.current)
            (e.userData.bindQuaternion &&
              e.quaternion.copy(e.userData.bindQuaternion),
              e.userData.bindPosition &&
                e.position.copy(e.userData.bindPosition),
              e.userData.bindScale && e.scale.copy(e.userData.bindScale));
          Xe((e) => e + 1);
          return;
        }
        let e = new C(),
          t = ct(n),
          r = ++O.current,
          a = () => r !== O.current;
        return (
          e.load(
            t,
            (e) => {
              if (!f.current || a()) return;
              f.current.stopAllAction();
              for (let e of v.current)
                (e.userData.bindQuaternion &&
                  e.quaternion.copy(e.userData.bindQuaternion),
                  e.userData.bindPosition &&
                    e.position.copy(e.userData.bindPosition),
                  e.userData.bindScale && e.scale.copy(e.userData.bindScale));
              (A.current.clear(), j.current.clear());
              let n = new Set();
              if (
                (e.scene.traverse((e) => {
                  e.name && n.add(e.name);
                }),
                e.animations.length > 0)
              ) {
                let t = e.animations[0],
                  r = f.current.clipAction(t);
                (r.play(),
                  (y.current = r),
                  (b.current = t.duration),
                  (G.current = t),
                  Fe(v8(t.duration, fe)),
                  f.current.setTime(0),
                  P8(v.current, A.current));
                let a = x.current;
                a && S8(a.bones, a.frame0);
                let o = m.current;
                (a &&
                  o &&
                  i &&
                  Ge(() =>
                    Kge({
                      modelTemplate: o,
                      clip: t,
                      state: S.current ?? B5(),
                      fps: it.current,
                      loop: Je.current,
                    }),
                  ),
                  a &&
                    o &&
                    i &&
                    Ue((e) => {
                      let r = {
                          modelTemplate: o,
                          clip: t,
                          clipNodeNames: n,
                          state: e?.state ?? S.current ?? B5(),
                          fps: e?.fps ?? it.current,
                          loop: e?.loop ?? Je.current,
                          speed: e?.speed ?? rt.current,
                        },
                        i = Y5(r);
                      return X5({ ...r, state: { ...r.state, ...i } });
                    }),
                  lt(),
                  Xe((e) => e + 1));
              } else
                ((y.current = null),
                  (b.current = 0),
                  (G.current = null),
                  A.current.clear(),
                  j.current.clear(),
                  i && (Ue(null), Ge(null)),
                  Fe(0),
                  Xe((e) => e + 1),
                  console.warn(
                    `[AnimationViewport] clip GLB carries no animation:`,
                    t,
                  ));
            },
            void 0,
            (e) => {
              a() ||
                (console.error(
                  `[AnimationViewport] Error loading animation:`,
                  e,
                ),
                i && (Ue(null), Ge(null)));
            },
          ),
          () => {
            O.current++;
          }
        );
      }, [n, ct, fe, Fe, lt, ot, i, Ue, Ge]),
      (0, X.useEffect)(() => {
        if (i)
          return () => {
            (Ue(null), Ge(null));
          };
      }, [i, Ue, Ge]),
      (0, X.useEffect)(() => {
        (m.current &&
          m.current.traverse((e) => {
            e instanceof ia &&
              (e.visible = se === `mesh` || se === `mesh+skeleton`);
          }),
          h.current &&
            (h.current.visible = se === `skeleton` || se === `mesh+skeleton`),
          _.current &&
            (_.current.visible = se === `skeleton` || se === `mesh+skeleton`));
      }, [se]),
      (0, X.useEffect)(() => {
        if (!_.current) return;
        let e = new Set(me),
          t = new Set(_e);
        for (let n of _.current.children) {
          let r = n,
            i = r.material,
            a = r.userData.boneName,
            o = a === pe,
            s = e.has(a);
          (i.color.set(s ? 16768256 : t.has(a) ? 7829367 : 4500223),
            r.scale.setScalar(o ? 2.5 : s ? 1.8 : 1));
        }
      }, [pe, me, _e]),
      (0, X.useEffect)(() => {
        M.current?.setSpace(xe);
      }, [xe]),
      (0, X.useEffect)(() => {
        g.current && (g.current.visible = ce);
      }, [ce]),
      (0, X.useEffect)(() => {
        k.current && (k.current.visible = K);
      }, [K]),
      (0, X.useEffect)(() => {
        let e = M.current;
        if (!e) return;
        if (le) {
          e.detach();
          return;
        }
        let t = p8({
          selectedEffector: be,
          ikEnabled: ye,
          attachable: [...T.current.keys()],
          selectedBoneName: pe,
        });
        if (t.kind === `effector`) {
          let n = T.current.get(t.effector);
          (e.setMode(m8(t, q) ? q : `translate`), e.attach(n));
          return;
        }
        if (t.kind !== `bone`) {
          e.detach();
          return;
        }
        let n = v.current.find((e) => e.name === pe);
        if (!n) {
          e.detach();
          return;
        }
        (e.setMode(ge), e.attach(n));
      }, [pe, be, ye, q, ge, le]),
      (0, X.useEffect)(() => {
        for (let [e, t] of T.current) t.visible = ye.includes(e);
      }, [ye, ot]),
      (0, X.useEffect)(() => {
        let e = s.current,
          t = f.current;
        if (!e || !t || !v.current.length || !b.current) return;
        k.current &&= (e.remove(k.current), null);
        let n = [`Hips`, `Root`, `Armature`, `mixamorigHips`, `root`, `hips`],
          r = v.current.find((e) => n.includes(e.name));
        if (((r ||= v.current[0]), !r)) return;
        let i = b.current,
          a = Math.max(2, v8(i, fe)),
          o = [],
          c = y.current?.time ?? t.time,
          l = y.current?.paused ?? !1,
          u = y.current?.enabled ?? !0;
        F8(v.current, j.current);
        for (let e = 0; e <= a; e++) {
          let n = (e / a) * i;
          (y.current && (y.current.paused = !1), t.setTime(n), t.update(0));
          let s = new Y();
          (r.getWorldPosition(s), o.push(s.clone()));
        }
        (y.current && (y.current.paused = !1),
          t.setTime(c),
          t.update(0),
          y.current && ((y.current.paused = l), (y.current.enabled = u)),
          P8(v.current, j.current),
          P8(v.current, A.current));
        let d = new na(
          new Yi().setFromPoints(o),
          new ma({
            color: 16737792,
            linewidth: 2,
            transparent: !0,
            opacity: 0.8,
          }),
        );
        ((d.renderOrder = 998), (d.visible = K), e.add(d), (k.current = d));
      }, [n, fe, K]));
    let pt = (0, X.useRef)(null),
      mt = (0, X.useCallback)((e) => {
        let t = c.current?.domElement;
        pt.current = {
          x: e.clientX,
          y: e.clientY,
          onCanvas: !!t && e.target === t,
        };
      }, []),
      ht = (0, X.useCallback)(
        (e) => {
          if (P.current || !o.current || !l.current || !_.current) return;
          let t = pt.current;
          if (((pt.current = null), !t)) return;
          let n = Math.hypot(e.clientX - t.x, e.clientY - t.y);
          if (!g8({ movedPx: n, onCanvas: t.onCanvas })) return;
          let r = o.current.getBoundingClientRect(),
            i = new Ni(
              ((e.clientX - r.left) / r.width) * 2 - 1,
              -((e.clientY - r.top) / r.height) * 2 + 1,
            ),
            a = new ga();
          a.setFromCamera(i, l.current);
          let s = a.intersectObjects(_.current.children, !1),
            c = e.shiftKey || e.ctrlKey || e.metaKey;
          if (s.length > 0) {
            let t = s[0].object.userData.boneName,
              n = e.shiftKey
                ? `range`
                : e.ctrlKey || e.metaKey
                  ? `toggle`
                  : `replace`;
            Ie(t || null, n);
            return;
          }
          Khe({ movedPx: n, onCanvas: t.onCanvas, modifier: c }) && Ie(null);
        },
        [Ie],
      ),
      [gt, _t] = (0, X.useState)(null);
    return (
      (0, X.useEffect)(() => {
        if (r === !1 || !pe || !_.current || !l.current || !o.current) {
          _t(null);
          return;
        }
        let e = () => {
          let e = _.current?.children.find((e) => e.userData.boneName === pe);
          if (!e || !l.current || !o.current) {
            _t(null);
            return;
          }
          let t = new Y();
          (e.getWorldPosition(t), t.project(l.current));
          let n = o.current.getBoundingClientRect();
          _t({
            x: ((t.x + 1) / 2) * n.width + 12,
            y: ((-t.y + 1) / 2) * n.height - 8,
          });
        };
        e();
        let t = setInterval(e, 100);
        return () => clearInterval(t);
      }, [pe, r]),
      (0, Z.jsxs)(`div`, {
        ref: o,
        className: `w-full h-full relative`,
        onPointerDown: mt,
        onClick: ht,
        children: [
          a !== !1 && (0, Z.jsx)(Ghe, {}),
          pe &&
            gt &&
            (0, Z.jsx)(`div`, {
              className: `absolute pointer-events-none z-10 px-1.5 py-0.5 bg-black/80 text-yellow-300 text-[10px] font-mono rounded whitespace-nowrap`,
              style: { left: gt.x, top: gt.y },
              children: pe,
            }),
        ],
      })
    );
  };
