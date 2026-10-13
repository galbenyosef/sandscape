// assets__Create-ea24k1TY 280 — current
// Lines 94700-95811 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Q5 = new Y(),
  $5 = new _i(),
  e7 = new Ei(),
  t7 = ({
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
      p = (0, X.useRef)(new La()),
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
        quaternion: new _i(),
        position: new Y(),
        scale: new Y(1, 1, 1),
      }),
      I = (0, X.useRef)(null),
      L = (0, X.useRef)(`rotate`),
      R = (0, X.useRef)(`translate`),
      z = (0, X.useRef)([]),
      B = (0, X.useCallback)(() => {
        let e = m8({
          selectedEffector: E.current,
          ikEnabled: z.current,
          attachable: [...T.current.keys()],
          selectedBoneName: I.current,
        });
        return e.kind === `effector` ? e.effector : null;
      }, []),
      V = (0, X.useRef)(new Map()),
      H = (0, X.useRef)(0),
      U = (0, X.useRef)(null),
      ee = (0, X.useRef)(null),
      W = (0, X.useRef)(null),
      G = (0, X.useRef)(null),
      K = (0, X.useRef)(null),
      ne = (0, X.useRef)(() => ``),
      re = (0, X.useRef)(() => ``),
      ie = (0, X.useRef)([]),
      ae = (0, X.useRef)(r !== !1);
    (0, X.useEffect)(() => {
      let e = r !== !1,
        t = ae.current;
      ((ae.current = e),
        e &&
          !t &&
          c.current &&
          s.current &&
          l.current &&
          (u.current?.update(), c.current.render(s.current, l.current)));
    }, [r]);
    let {
        viewMode: oe,
        showGrid: se,
        showRootMotionPath: q,
        isPlaying: ce,
        playbackSpeed: le,
        currentFrame: ue,
        fps: de,
        selectedBoneName: fe,
        selectedBoneNames: pe,
        boneOffsets: me,
        boneGizmoMode: he,
        mutedBones: ge,
        ikKeys: _e,
        ikEnabled: ve,
        selectedEffector: ye,
        ikGizmoMode: be,
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
      } = R6(),
      Ke = (0, X.useMemo)(
        () => ({
          boneOffsets: me,
          mutedBones: ge,
          ikKeys: _e,
          ikEnabled: ve,
          footLock: Se,
          plantRuntime: Ce,
          limbStabilize: we,
          stabilizeRuntime: Te,
          rootMotionConfig: Oe,
        }),
        [me, ge, _e, ve, Se, Ce, we, Te, Oe],
      );
    (0, X.useEffect)(() => {
      ((S.current = Ke), (w.current = z5(Ke)));
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
      let e = K.current,
        t =
          Me && Ae > ke ? { inFrame: ke, outFrame: Ae, blendFrames: je } : null;
      ((Ze.current = e && t ? N8(e, t, de) : null), $e((e) => e + 1));
    }, [ke, Ae, je, Me, de, Ye]);
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
      nt.current = ce;
    }, [ce]),
      (0, X.useEffect)(() => {
        rt.current = le;
      }, [le]),
      (0, X.useEffect)(() => {
        it.current = de;
      }, [de]),
      (0, X.useEffect)(() => {
        at.current = Pe;
      }, [Pe]),
      (0, X.useEffect)(() => {
        I.current = fe;
      }, [fe]),
      (0, X.useEffect)(() => {
        H.current = ue;
      }, [ue]),
      (0, X.useEffect)(() => {
        ne.current = ze;
      }, [ze]),
      (0, X.useEffect)(() => {
        re.current = Be;
      }, [Be]),
      (0, X.useEffect)(() => {
        E.current = ye;
      }, [ye]),
      (0, X.useEffect)(() => {
        L.current = he;
      }, [he]),
      (0, X.useEffect)(() => {
        R.current = be;
      }, [be]),
      (0, X.useEffect)(() => {
        z.current = ve;
      }, [ve]),
      (0, X.useEffect)(() => {
        ie.current = _e;
      }, [_e]));
    let [ot, st] = (0, X.useState)(0),
      ct = (0, X.useCallback)(
        (t) => {
          let n = e.split(`/`).pop() || e,
            r = t.split(`/`).pop();
          return `${Mn.API_BASE_URL}/api/game/${n}/${r}`;
        },
        [e],
      );
    ((0, X.useEffect)(() => {
      if (!o.current) return;
      let e = o.current,
        t = e.clientWidth,
        n = e.clientHeight,
        r = new oa();
      ((r.background = new Ui(657426)), (s.current = r));
      let i = new ji(50, t / n, 0.01, 100);
      (i.position.set(2, 1.5, 3), i.lookAt(0, 0.8, 0), (l.current = i));
      let a = new Ta({ antialias: !0, alpha: !1 });
      (a.setSize(t, n),
        a.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        (a.shadowMap.enabled = !0),
        (a.shadowMap.type = 2),
        (a.outputColorSpace = Sa),
        (c.current = a),
        e.appendChild(a.domElement));
      let h = new hl(i, a.domElement);
      ((h.enableDamping = !0),
        (h.dampingFactor = 0.08),
        h.target.set(0, 0.8, 0),
        (h.minDistance = 0.5),
        (h.maxDistance = 20),
        h.update(),
        (u.current = h));
      let b = new Q6(i, a.domElement);
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
            Q5.subVectors(t.position, i.fkPos);
            let a = ie.current.find((t) => t.effector === r && t.frame === e),
              o = a?.rotation ?? null;
            (R.current === `rotate` &&
              r !== `head` &&
              ($5.copy(i.fkQuat).invert().multiply(t.quaternion),
              e7.setFromQuaternion($5, `XYZ`),
              (o = [n(e7.x), n(e7.y), n(e7.z)])),
              re.current(r, e, {
                offset: [
                  Math.round(Q5.x * 1e5) / 1e5,
                  Math.round(Q5.y * 1e5) / 1e5,
                  Math.round(Q5.z * 1e5) / 1e5,
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
            (Q5.subVectors(a.position, o.position),
              ne.current(i, e, {
                position: [
                  Math.round(Q5.x * 1e5) / 1e5,
                  Math.round(Q5.y * 1e5) / 1e5,
                  Math.round(Q5.z * 1e5) / 1e5,
                ],
              }));
            return;
          }
          if (s === `scale`) {
            let t = (e, t) =>
              Math.abs(t) < 1e-9 ? 1 : Math.round((e / t) * 1e4) / 1e4;
            ne.current(i, e, {
              scale: [
                t(a.scale.x, o.scale.x),
                t(a.scale.y, o.scale.y),
                t(a.scale.z, o.scale.z),
              ],
            });
            return;
          }
          ($5.copy(o.quaternion).invert().multiply(a.quaternion),
            e7.setFromQuaternion($5, `XYZ`),
            ne.current(i, e, { rotation: [n(e7.x), n(e7.y), n(e7.z)] }));
        }));
      let C = new Ma(16777215, 0.7);
      r.add(C);
      let E = new Bi(16777215, 1);
      (E.position.set(3, 5, 4),
        (E.castShadow = !0),
        E.shadow.mapSize.set(1024, 1024),
        r.add(E));
      let D = new Bi(8947967, 0.3);
      (D.position.set(-3, 2, -2), r.add(D));
      let O = new Xi(10, 10, 3355443, 2236962);
      ((O.position.y = 0), r.add(O), (g.current = O));
      let k = () => {
        d.current = requestAnimationFrame(k);
        let e = p.current.getDelta();
        if (!ae.current) return;
        let t = nt.current,
          n = rt.current,
          o = it.current,
          s = N.current,
          c = s ? B() : null,
          l = s && !c ? I.current : null,
          u = A.current,
          g = j.current;
        if (f.current && t) {
          (I8(v.current, g, l), f.current.update(e * n), F8(v.current, g));
          let t = qe.current;
          if (t.active && t.outFrame > t.inFrame && o > 0) {
            let e = t.inFrame / o,
              n = t.outFrame / o,
              r = (t.outFrame - t.inFrame) / o,
              i = y.current?.time ?? f.current.time;
            (i >= n || i < e) &&
              (I8(v.current, g, l),
              f.current.setTime(mhe(i, e, r)),
              F8(v.current, g));
          }
          (P8(v.current, Ze.current, (y.current?.time ?? f.current.time) * o),
            F8(v.current, u));
          let r = b8(y.current?.time ?? f.current.time, o);
          at.current(r);
        }
        let b = I.current,
          C = x.current,
          E = S.current;
        b && !s && C && E && uge(C, u, E, b, F.current);
        let D = x.current,
          O = S.current;
        if (D && O && v.current.length > 0) {
          B5(D, u, O, y.current ? b8(y.current.time, o) : H.current, {
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
              e instanceof _a &&
                (e.geometry?.dispose(),
                Array.isArray(e.material)
                  ? e.material.forEach((e) => e.dispose())
                  : e.material?.dispose());
            }));
        }
      );
    }, [B]),
      (0, X.useEffect)(() => {
        ce && p.current.start();
      }, [ce, le]),
      (0, X.useEffect)(() => {
        ce ||
          !f.current ||
          b.current === 0 ||
          (I8(v.current, j.current),
          f.current.setTime(
            Math.min(Math.fround(ue / de), Math.max(0, b.current - 1e-4)),
          ),
          F8(v.current, j.current),
          P8(v.current, Ze.current, ue),
          F8(v.current, A.current));
      }, [ue, de, ce, Qe]));
    let lt = (0, X.useCallback)(() => {
        let e = s.current,
          t = m.current,
          n = K.current;
        if (!e || !t || !n) return;
        ((U.current &&= (e.remove(U.current), null)),
          (ee.current &&= (e.remove(ee.current), null)),
          (W.current = null),
          (G.current = null));
        let r = (r) => {
            let i = te(t);
            (i.traverse((e) => {
              e instanceof aa &&
                ((e.userData.bindQuaternion = e.quaternion.clone()),
                (e.userData.bindPosition = e.position.clone()));
            }),
              i.traverse((e) => {
                if (e instanceof _a || e instanceof da) {
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
                e instanceof aa ||
                  (e.type === `SkeletonHelper` && (e.visible = !1),
                  e.name.startsWith(`__ikTarget_`) && (e.visible = !1));
              }));
            let a = new xa(i);
            return (
              a.clipAction(n).play(),
              (i.visible = !1),
              e.add(i),
              { group: i, mixer: a }
            );
          },
          i = r(4491519),
          a = r(16729156);
        ((U.current = i.group),
          (ee.current = a.group),
          (W.current = i.mixer),
          (G.current = a.mixer));
      }, []),
      ut = (0, X.useCallback)((e, t, n) => {
        if (!e || !t || !it.current) return;
        let r = (e) => {
            for (let t of e) {
              let e = t.userData.bindQuaternion,
                n = t.userData.bindPosition;
              (e instanceof _i && t.quaternion.copy(e),
                n instanceof Y && t.position.copy(n));
            }
          },
          i = t.userData.poseCtx;
        i ||
          (r(S8(t)),
          (i = T8(t)),
          (t.userData.poseCtx = i),
          e.setTime(0),
          C8(i.bones, i.frame0),
          (t.userData.ghostBase = F8(i.bones)),
          (t.userData.ghostClean = F8(i.bones)));
        let a = t.userData.ghostBase ?? F8(i.bones);
        t.userData.ghostBase = a;
        let o = t.userData.ghostClean ?? F8(i.bones);
        ((t.userData.ghostClean = o),
          I8(i.bones, o),
          e.setTime(Math.fround(n / it.current)),
          F8(i.bones, o),
          m.current && t.position.copy(m.current.position),
          P8(i.bones, Ze.current, n),
          F8(i.bones, a));
        let s = S.current;
        s && B5(i, a, s, n, { prepared: w.current ?? void 0 });
      }, []);
    ((0, X.useEffect)(() => {
      let e = Ne && Me && Ae > ke;
      (U.current &&
        ((U.current.visible = e), e && ut(W.current, U.current, ke)),
        ee.current &&
          ((ee.current.visible = e), e && ut(G.current, ee.current, Ae)));
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
              s = X5(o);
            return Z5({ ...o, state: { ...n.state, ...s } });
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
        t = K.current;
      if (!e || !t) return;
      let n = setTimeout(() => {
        try {
          let n = X5({
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
      me,
      ge,
      _e,
      ve,
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
          (U.current &&= (e.remove(U.current), null)),
          (ee.current &&= (e.remove(ee.current), null)),
          (W.current = null),
          (G.current = null),
          (K.current = null),
          Re([]));
        for (let t of [...e.children])
          (t.userData.__animEditorRoot ||
            t instanceof pa ||
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
                _ge(t.scene);
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
                let e = new sa(),
                  t = new Y();
                n.traverse((n) => {
                  n.isBone && e.expandByPoint(n.getWorldPosition(t));
                });
                let r = e.isEmpty() ? 0 : e.getSize(new Y()).y;
                r > 10 && n.scale.setScalar(1.8 / r);
              }
              let o = new sa().setFromObject(n);
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
              let d = new pa(n);
              ((d.material.linewidth = 2), (h.current = d), e.add(d));
              let p = [];
              (n.traverse((e) => {
                e.isBone && p.push(e);
              }),
                (v.current = p));
              let g = T8(n);
              ((x.current = g),
                Le(
                  p.map((e) => e.name),
                  g.parentByName,
                ));
              for (let e of T.current.values()) e.removeFromParent();
              T.current.clear();
              let S = new qi(0.025),
                C = 1 / (n.scale.x || 1);
              for (let e of T6) {
                if (
                  !D6(g.boneByName, e) ||
                  (e !== `hips` && e !== `head` && !g.chains[e])
                )
                  continue;
                let t = new _a(
                  S,
                  new Fi({
                    color: gge[e],
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
              let w = new Ji();
              w.name = `__jointSpheres`;
              let E = new Ba(0.012, 8, 8),
                D = new Fi({
                  color: 4500223,
                  depthTest: !1,
                  transparent: !0,
                  opacity: 0.9,
                });
              for (let e of p) {
                let t = new _a(E, D.clone());
                ((t.userData.boneName = e.name), (t.renderOrder = 999));
                let n = new Y();
                (e.getWorldPosition(n), t.position.copy(n), w.add(t));
              }
              if (
                (e.add(w),
                (_.current = w),
                (f.current = new xa(n)),
                t.animations.length > 0)
              ) {
                let e = t.animations[0],
                  n = f.current.clipAction(e);
                (n.play(),
                  (y.current = n),
                  (b.current = e.duration),
                  (K.current = e),
                  Fe(y8(e.duration, de)),
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
                  let e = new sa(),
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
      }, [t, ct, de, Fe, Le, Re, lt]),
      (0, X.useEffect)(() => {
        if (!f.current || !m.current) return;
        if (!n) {
          (f.current.stopAllAction(),
            (y.current = null),
            (b.current = 0),
            (K.current = null),
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
                  (K.current = t),
                  Fe(y8(t.duration, de)),
                  f.current.setTime(0),
                  F8(v.current, A.current));
                let a = x.current;
                a && C8(a.bones, a.frame0);
                let o = m.current;
                (a &&
                  o &&
                  i &&
                  Ge(() =>
                    pge({
                      modelTemplate: o,
                      clip: t,
                      state: S.current ?? V5(),
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
                          state: e?.state ?? S.current ?? V5(),
                          fps: e?.fps ?? it.current,
                          loop: e?.loop ?? Je.current,
                          speed: e?.speed ?? rt.current,
                        },
                        i = X5(r);
                      return Z5({ ...r, state: { ...r.state, ...i } });
                    }),
                  lt(),
                  Xe((e) => e + 1));
              } else
                ((y.current = null),
                  (b.current = 0),
                  (K.current = null),
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
      }, [n, ct, de, Fe, lt, ot, i, Ue, Ge]),
      (0, X.useEffect)(() => {
        if (i)
          return () => {
            (Ue(null), Ge(null));
          };
      }, [i, Ue, Ge]),
      (0, X.useEffect)(() => {
        (m.current &&
          m.current.traverse((e) => {
            e instanceof da &&
              (e.visible = oe === `mesh` || oe === `mesh+skeleton`);
          }),
          h.current &&
            (h.current.visible = oe === `skeleton` || oe === `mesh+skeleton`),
          _.current &&
            (_.current.visible = oe === `skeleton` || oe === `mesh+skeleton`));
      }, [oe]),
      (0, X.useEffect)(() => {
        if (!_.current) return;
        let e = new Set(pe),
          t = new Set(ge);
        for (let n of _.current.children) {
          let r = n,
            i = r.material,
            a = r.userData.boneName,
            o = a === fe,
            s = e.has(a);
          (i.color.set(s ? 16768256 : t.has(a) ? 7829367 : 4500223),
            r.scale.setScalar(o ? 2.5 : s ? 1.8 : 1));
        }
      }, [fe, pe, ge]),
      (0, X.useEffect)(() => {
        M.current?.setSpace(xe);
      }, [xe]),
      (0, X.useEffect)(() => {
        g.current && (g.current.visible = se);
      }, [se]),
      (0, X.useEffect)(() => {
        k.current && (k.current.visible = q);
      }, [q]),
      (0, X.useEffect)(() => {
        let e = M.current;
        if (!e) return;
        if (ce) {
          e.detach();
          return;
        }
        let t = m8({
          selectedEffector: ye,
          ikEnabled: ve,
          attachable: [...T.current.keys()],
          selectedBoneName: fe,
        });
        if (t.kind === `effector`) {
          let n = T.current.get(t.effector);
          (e.setMode(h8(t, be) ? be : `translate`), e.attach(n));
          return;
        }
        if (t.kind !== `bone`) {
          e.detach();
          return;
        }
        let n = v.current.find((e) => e.name === fe);
        if (!n) {
          e.detach();
          return;
        }
        (e.setMode(he), e.attach(n));
      }, [fe, ye, ve, be, he, ce]),
      (0, X.useEffect)(() => {
        for (let [e, t] of T.current) t.visible = ve.includes(e);
      }, [ve, ot]),
      (0, X.useEffect)(() => {
        let e = s.current,
          t = f.current;
        if (!e || !t || !v.current.length || !b.current) return;
        k.current &&= (e.remove(k.current), null);
        let n = [`Hips`, `Root`, `Armature`, `mixamorigHips`, `root`, `hips`],
          r = v.current.find((e) => n.includes(e.name));
        if (((r ||= v.current[0]), !r)) return;
        let i = b.current,
          a = Math.max(2, y8(i, de)),
          o = [],
          c = y.current?.time ?? t.time,
          l = y.current?.paused ?? !1,
          u = y.current?.enabled ?? !0;
        I8(v.current, j.current);
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
          F8(v.current, j.current),
          F8(v.current, A.current));
        let d = new la(
          new Qi().setFromPoints(o),
          new wa({
            color: 16737792,
            linewidth: 2,
            transparent: !0,
            opacity: 0.8,
          }),
        );
        ((d.renderOrder = 998), (d.visible = q), e.add(d), (k.current = d));
      }, [n, de, q]));
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
          if (!_8({ movedPx: n, onCanvas: t.onCanvas })) return;
          let r = o.current.getBoundingClientRect(),
            i = new Mi(
              ((e.clientX - r.left) / r.width) * 2 - 1,
              -((e.clientY - r.top) / r.height) * 2 + 1,
            ),
            a = new Ea();
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
          phe({ movedPx: n, onCanvas: t.onCanvas, modifier: c }) && Ie(null);
        },
        [Ie],
      ),
      [gt, _t] = (0, X.useState)(null);
    return (
      (0, X.useEffect)(() => {
        if (r === !1 || !fe || !_.current || !l.current || !o.current) {
          _t(null);
          return;
        }
        let e = () => {
          let e = _.current?.children.find((e) => e.userData.boneName === fe);
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
      }, [fe, r]),
      (0, Z.jsxs)(`div`, {
        ref: o,
        className: `w-full h-full relative`,
        onPointerDown: mt,
        onClick: ht,
        children: [
          a !== !1 && (0, Z.jsx)(fhe, {}),
          fe &&
            gt &&
            (0, Z.jsx)(`div`, {
              className: `absolute pointer-events-none z-10 px-1.5 py-0.5 bg-black/80 text-yellow-300 text-[10px] font-mono rounded whitespace-nowrap`,
              style: { left: gt.x, top: gt.y },
              children: fe,
            }),
        ],
      })
    );
  };
