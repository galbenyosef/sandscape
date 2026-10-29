// SceneEditor-NC7_0wmu 78 — current
// Lines 36884-38647 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var zx = ({
    sceneRef: e,
    cameraRef: t,
    rendererRef: n,
    historyRef: r,
    loadModelRef: i,
    focusObjectRef: a,
    dropToGroundRef: o,
    invalidateRef: s,
    editorContainerRef: c,
    onObjectChange: l,
    onSceneGraphChange: u,
    sessionDir: d,
    isActive: f,
    onAssignMaterial: p,
  }) => {
    let m = (0, J.useRef)(null),
      g = (0, J.useRef)(null),
      _ = (0, J.useRef)(null),
      v = (0, J.useRef)(null),
      y = (0, J.useRef)(null),
      b = (0, J.useRef)(null),
      x = (0, J.useRef)(null),
      S = (0, J.useRef)(null),
      C = (0, J.useRef)(null),
      w = (0, J.useRef)([]),
      T = (0, J.useRef)(null),
      E = (0, J.useRef)(null),
      [D, O] = (0, J.useState)(null),
      [k, j] = (0, J.useState)(0),
      M = (0, J.useRef)(null),
      N = (0, J.useRef)(null),
      P = (0, J.useRef)(null),
      F = (0, J.useRef)(new Set()),
      ee = (0, J.useRef)(!0),
      I = (0, J.useCallback)(() => {
        ee.current = !0;
      }, []),
      te = (0, J.useRef)(f !== !1);
    (0, J.useEffect)(() => {
      let e = f !== !1,
        t = te.current;
      ((te.current = e), e && !t && ((ee.current = !0), g.current?.update()));
    }, [f]);
    let ne = (0, J.useRef)(!1),
      L = (0, J.useCallback)(() => {
        let t = e.current;
        if (!t) {
          ne.current = !1;
          return;
        }
        let n = !1;
        (t.traverse((e) => {
          e instanceof Qp && (n = !0);
        }),
          (ne.current = n));
      }, [e]),
      re = (0, J.useRef)(!1),
      ie = (0, J.useRef)(null),
      ae = (0, J.useRef)(null),
      oe = (0, J.useRef)(null),
      se = (0, J.useRef)(null),
      ce = (0, J.useRef)(!1),
      le = (0, J.useRef)(!1),
      ue = (0, J.useRef)(null),
      pe = (0, J.useRef)(null),
      he = (0, J.useRef)(new Set()),
      ge = (0, J.useRef)(5),
      B = (0, J.useRef)(null),
      _e = (0, J.useRef)(new Wt()),
      ve = (0, J.useRef)(new V()),
      ye = (0, J.useRef)(null),
      xe = (0, J.useRef)(new Map()),
      Ce = (0, J.useRef)(null),
      we = (0, J.useRef)(d),
      Ee = (0, J.useRef)(`translate`),
      De = (0, J.useRef)(`world`),
      Oe = (0, J.useRef)(!1),
      Ae = (0, J.useRef)({ translate: 1, rotate: 15, scale: 0.25 }),
      je = (0, J.useRef)(!1),
      Me = (0, J.useRef)(0.5),
      Ne = (0, J.useRef)([]),
      Pe = (0, J.useRef)(null),
      Fe = (0, J.useRef)([]),
      Ie = (0, J.useRef)(!0),
      Le = (0, J.useRef)(!1),
      Re = (0, J.useRef)(1.2),
      ze = (0, J.useRef)({}),
      { applyViewMode: Be } = Mb(),
      H = (0, J.useRef)(Be);
    (0, J.useEffect)(() => {
      ((H.current = Be), I());
    }, [Be, I]);
    let Ve = (0, J.useCallback)(() => {
        B.current &&
          (e.current && e.current.remove(B.current),
          B.current.geometry.dispose(),
          B.current.material.dispose(),
          (B.current = null),
          I());
      }, [e, I]),
      He = (0, J.useRef)(l),
      Ue = (0, J.useRef)(u);
    ((0, J.useEffect)(() => {
      He.current = l;
    }, [l]),
      (0, J.useEffect)(() => {
        Ue.current = u;
      }, [u]));
    let We = (0, J.useCallback)(
        (t) => {
          let n = e.current;
          if (!n || t.length === 0) return [];
          let r = new Set(t),
            i = new Map();
          return (
            n.traverse((e) => {
              r.has(e.uuid) && i.set(e.uuid, e);
            }),
            t.map((e) => i.get(e)).filter((e) => e !== void 0)
          );
        },
        [e],
      ),
      Ge = (0, J.useCallback)(() => {
        let t = e.current;
        for (let e of w.current) (t?.remove(e), e.dispose());
        w.current = [];
      }, [e]),
      Ke = (0, J.useCallback)(
        (t) => {
          let n = e.current,
            r = T.current;
          if (!n || !r || t.length === 0) return;
          let i = null;
          if (Ee.current === `translate`) {
            let e = new wt(),
              n = new wt();
            for (let r of t) (Jy(r, n), n.isEmpty() || e.union(n));
            e.isEmpty() || (i = e.min.clone());
          }
          ((i ||= Fx(t)),
            i &&
              (r.position.copy(n.worldToLocal(i)),
              r.quaternion.identity(),
              r.scale.set(1, 1, 1),
              r.updateMatrixWorld(!0)));
        },
        [e],
      ),
      qe = (0, J.useCallback)(
        (t) => {
          let n = e.current;
          if (!n) return null;
          if (!T.current) {
            let e = new Se();
            ((e.name = `__selection_pivot`),
              (e.userData.editorOnly = !0),
              (T.current = e));
          }
          let r = T.current;
          return (r.parent !== n && n.add(r), Ke(t), r);
        },
        [e, Ke],
      ),
      Je = (0, J.useCallback)(() => {
        let e = T.current;
        e?.parent && e.parent.remove(e);
      }, []),
      Ye = (0, J.useCallback)(
        (t) => {
          let n = e.current;
          if (!n || !je.current) {
            Ne.current = [];
            return;
          }
          let r = new Set();
          for (let e of t) e.traverse((e) => r.add(e));
          let i = [];
          for (let e of n.children) {
            if (r.has(e) || Dx(e) || !e.visible || Ix(e, n, ze.current))
              continue;
            let t = Jy(e);
            t.isEmpty() || i.push(t);
          }
          Ne.current = i;
        },
        [e],
      ),
      Xe = (0, J.useCallback)(
        (t) => {
          let n = e.current;
          if (n) {
            if (!t) {
              Pe.current &&=
                (n.remove(Pe.current),
                Pe.current.geometry.dispose(),
                Pe.current.material.dispose(),
                null);
              return;
            }
            if (Pe.current)
              (Pe.current.box.copy(t), Pe.current.updateMatrixWorld(!0));
            else {
              let e = new Kt(t.clone(), new W(Ox));
              ((e.userData.editorOnly = !0),
                (e.renderOrder = 999),
                (e.material.depthTest = !1),
                (Pe.current = e),
                n.add(e));
            }
          }
        },
        [e],
      ),
      Ze = (0, J.useCallback)((e) => {
        if (!C_(e)) return Jy(e);
        let t = e.getWorldPosition(new U());
        return new wt(t.clone(), t.clone());
      }, []),
      Qe = (0, J.useCallback)(
        (e, t) => {
          if (t.isEmpty()) return;
          let n = null;
          if (je.current) {
            let e = Zy(t, Ne.current, Me.current);
            e
              ? ((n = e.delta), Xe(Ne.current[e.hits[0].targetIndex] ?? null))
              : Xe(null);
          }
          if (!n && Oe.current) {
            let e = Ae.current.translate;
            n = Yy(t.min, e, kx).sub(t.min);
          }
          if (!n || (n.x === 0 && n.y === 0 && n.z === 0)) return;
          let r = e.parent;
          if (r && r.type !== `Scene`) {
            let t = r.worldToLocal(Ax.copy(e.getWorldPosition(jx))),
              i = r.worldToLocal(jx.copy(e.getWorldPosition(Mx)).add(n));
            e.position.add(i.sub(t));
          } else e.position.add(n);
          e.updateMatrixWorld(!0);
        },
        [Xe],
      ),
      $e = (0, J.useCallback)((e) => {
        let t = new wt(),
          n = new wt();
        for (let r of e) (Jy(r, n), n.isEmpty() || t.union(n));
        return t;
      }, []),
      et = (0, J.useCallback)(() => {
        let t = e.current;
        if (!t || E.current) return;
        t.updateMatrixWorld(!0);
        let n = pv(We(Fe.current).filter((e) => !Ix(e, t, ze.current)));
        if (n.length === 0) return;
        let r = le.current,
          a = ce.current;
        if (!a && !r) return;
        let o = new z(),
          s = {
            objects: n,
            startLocal: n.map((e) => ({
              position: e.position.clone(),
              quaternion: e.quaternion.clone(),
              scale: e.scale.clone(),
            })),
            startWorld: n.map((e) => e.matrixWorld.clone()),
            parentInverse: n.map((e) =>
              new z().copy(e.parent?.matrixWorld ?? o).invert(),
            ),
            pivotStartInverse:
              a && T.current ? T.current.matrixWorld.clone().invert() : null,
            duplicates: [],
            duplicating: r,
          };
        if (r) {
          for (let e of n) {
            if (S_(e) || C_(e)) continue;
            let { clone: n, parent: r, wrappers: a } = fv(e, t);
            r.add(n);
            for (let e of a) {
              let t = e.userData.modelPath;
              t && i.current?.(e, t);
            }
            s.duplicates.push({ object: n, parent: r });
          }
          Ue.current();
        }
        se.current = s;
      }, [e, i, We]),
      tt = (0, J.useCallback)((e) => {
        let t = T.current;
        if (!t || !e.pivotStartInverse) return;
        t.updateMatrixWorld(!0);
        let n = new z().multiplyMatrices(t.matrixWorld, e.pivotStartInverse),
          r = new z();
        e.objects.forEach((t, i) => {
          (r.multiplyMatrices(n, e.startWorld[i]),
            r.premultiply(e.parentInverse[i]),
            r.decompose(t.position, t.quaternion, t.scale),
            t.updateMatrixWorld(!0),
            He.current(t));
        });
      }, []),
      nt = (0, J.useCallback)(() => {
        let t = se.current;
        se.current = null;
        let n = e.current,
          i = r.current;
        if (!t || !n || !i) return;
        let a = He.current,
          o = [],
          s = [],
          c = new Map(),
          l = (e) => {
            let t = c.get(e);
            return (
              t ||
                ((t = {
                  object: e,
                  toX: e.position.x,
                  toY: e.position.y,
                  toZ: e.position.z,
                }),
                s.push(t),
                c.set(e, t)),
              t
            );
          },
          u = [],
          d = new Set();
        t.objects.forEach((e, r) => {
          let i = t.startLocal[r],
            s = C_(e),
            c = !s && S_(e);
          if (
            (e.position.equals(i.position) ||
              (c
                ? (u.push({
                    object: e,
                    fromX: i.position.x,
                    fromZ: i.position.z,
                    toX: e.position.x,
                    toZ: e.position.z,
                  }),
                  d.add(e))
                : s
                  ? l(e)
                  : o.push(new Ch(n, a, e, e.position.clone(), i.position))),
            !e.quaternion.equals(i.quaternion) && !d.has(e))
          ) {
            let t = new be().setFromQuaternion(i.quaternion, e.rotation.order),
              r = Math.round(e.rotation.y * fe.RAD2DEG);
            s
              ? (l(e).facingDeg = r)
              : o.push(new wh(n, a, e, e.rotation.clone(), t));
          }
          !e.scale.equals(i.scale) &&
            !d.has(e) &&
            o.push(new Th(n, a, e, e.scale.clone(), i.scale));
        });
        let f =
          s.length || u.length
            ? my(n, a, {
                markerDrags: s,
                doorDrags: u,
                duplicate: t.duplicating,
              })
            : null;
        if (o.length === 0 && !f) {
          if (t.duplicates.length > 0) {
            for (let e of t.duplicates)
              (e.parent.remove(e.object), og(e.object, { keepShared: !0 }));
            Ue.current();
          }
          I();
          return;
        }
        let p = [];
        for (let e of t.duplicates)
          (e.parent.remove(e.object), p.push(new Bh(n, a, e.object, e.parent)));
        (p.push(...o), f && p.push(f.command));
        let m = new Uh(n, a, p);
        if (
          ((m.name =
            t.duplicates.length > 0 || (t.duplicating && f)
              ? `Duplicate Objects`
              : `Transform Objects`),
          (m.changesSceneGraph = t.duplicates.length > 0 || !!f),
          (m.updatable = !1),
          i.execute(m),
          (t.duplicates.length > 0 || f) && Ue.current(),
          f && t.objects.length === 1)
        ) {
          let e = f.markerLanded[0]
            ? Ty(n, f.markerLanded[0])
            : f.doorLanded[0] && uy(n, f.doorLanded[0]);
          e && X.getState().setSelectedObjectUuid(e.uuid);
        }
        (Ke(t.objects), I());
      }, [e, r, Ke, I]),
      rt = X((e) => e.transformMode),
      it = X((e) => e.transformSpace),
      at = X((e) => e.snapEnabled),
      ot = X((e) => e.snapValues),
      st = X((e) => e.magnetEnabled),
      ct = X((e) => e.magnetRadius),
      lt = X((e) => e.selectedObjectUuids),
      ut = X((e) => e.showGrid),
      dt = X((e) => e.showLightGizmos),
      ft = X((e) => e.procLayout),
      pt = X((e) => e.environmentSource),
      mt = X((e) => e.environmentHdrUrl),
      ht = X((e) => e.environmentAsBackground),
      gt = X((e) => e.toneMappingExposure),
      _t = X((e) => e.setSelectedObjectUuid),
      vt = X((e) => e.addSelectedObjectUuid),
      yt = X((e) => e.toggleSelectedObjectUuid),
      xt = X((e) => e.objectChangeVersion),
      St = X((e) => e.sceneGraphVersion),
      Ct = X((e) => e.procParams.macroVariation),
      Tt = X((e) => e.procParams.macroShader),
      Et = X((e) => e.procParams.triplanar),
      Dt = X((e) => e.procParams.triplanarScale),
      Ot = X((e) => e.procParams.textureScale),
      kt = X((e) => e.procParams.projectionBlend),
      jt = X((e) => e.procParams.textureRotation),
      Mt = X((e) => e.procParams.cellSize),
      Nt = X((e) => e.visualizerBindings),
      Pt = X((e) => e.editorVisibility);
    ((0, J.useEffect)(() => {
      (cb(X.getState().procSeed, Tt ? Ct : 0),
        lb(Et, yv(Dt * (Ot ?? 1), Mt)),
        ub(kt ?? 4),
        db(jt ?? 0),
        s.current?.());
    }, [Ct, Tt, Et, Dt, Ot, Mt, kt, jt, s]),
      (0, J.useEffect)(() => {
        Ee.current = rt;
      }, [rt]),
      (0, J.useEffect)(() => {
        De.current = it;
      }, [it]),
      (0, J.useEffect)(() => {
        Oe.current = at;
      }, [at]),
      (0, J.useEffect)(() => {
        Ae.current = ot;
      }, [ot]),
      (0, J.useEffect)(() => {
        je.current = st;
      }, [st]),
      (0, J.useEffect)(() => {
        Me.current = ct;
      }, [ct]),
      (0, J.useEffect)(() => {
        Fe.current = lt;
      }, [lt]),
      (0, J.useEffect)(() => {
        Ie.current = ut;
      }, [ut]),
      (0, J.useEffect)(() => {
        ((ze.current = Pt), I());
      }, [Pt, I]),
      (0, J.useEffect)(() => {
        we.current = d;
      }, [d]));
    let It = (0, J.useCallback)(
        (t, n) => {
          let r = e.current;
          if (!r || !r.getObjectByProperty(`uuid`, t.uuid)) return;
          let i = t.children.filter(
            (e) =>
              e.userData.editorAssetContent ||
              e.userData.editorAssetPlaceholder,
          );
          for (let e of i)
            (t.remove(e),
              e.traverse((e) => {
                if (
                  e.constructor.name === `SplatMesh` &&
                  typeof e.dispose == `function`
                ) {
                  e.dispose();
                  return;
                }
                if (e instanceof G) {
                  e.geometry?.dispose();
                  let t = Array.isArray(e.material)
                    ? e.material
                    : e.material
                      ? [e.material]
                      : [];
                  for (let e of t) nv(e) || e.dispose();
                }
              }));
          ((n.name = `${t.name || `Asset`} (preview)`),
            n.position.set(0, 0, 0),
            n.rotation.set(0, 0, 0),
            n.scale.set(1, 1, 1),
            (n.userData = {
              ...n.userData,
              editorOnly: !0,
              editorAssetContent: !0,
            }));
          let a = Ev(t);
          if (a) {
            if (Math.abs(Math.sin(2 * a)) > 1e-9)
              throw Error(
                `kit content yaw must be a multiple of PI/2 (got ${a})`,
              );
            n.rotation.y = a;
          }
          let o = Og(t, n, j_(t));
          (o.hasDims &&
            o.boxUsable &&
            wx.has(String(t.userData.procKind)) &&
            Math.max(
              Math.abs(o.box.min.x + 0.5),
              Math.abs(o.box.min.y + 0.5),
              Math.abs(o.box.min.z + 0.5),
            ) > 0.001 &&
            console.warn(
              `[SceneEditor] kit asset "${t.userData.modelPath}" (${t.userData.procKind}) is not a centred unit cube (min ${o.box.min
                .toArray()
                .map((e) => e.toFixed(3))
                .join(`, `)}); it will render offset. Regenerate the kit.`,
            ),
            t.add(n));
          let s = K_(r, t),
            c = null;
          if (
            (s?.materialUuid &&
              ((c = $_(r, s.materialUuid)),
              c
                ? tv(n, c)
                : console.warn(
                    `[SceneEditor] surface override on "${t.name || t.uuid}" points at material ${s.materialUuid}, which is not in this scene — showing the asset's own material.`,
                  )),
            t.userData.proc)
          ) {
            t.updateMatrixWorld(!0);
            let e = X.getState().procParams,
              r = t.userData.procKind,
              i = (e.triplanarScale ?? 4) * (e.textureScale ?? 1),
              o = e.triplanar && r && yb.has(r) ? i : void 0,
              l = t.userData.authoredUV === !0;
            !l &&
              !a &&
              xv(
                n,
                r,
                t.userData.tileWorldSize,
                {
                  textureScale: e.textureScale ?? 1,
                  uvDensity: e.uvDensity ?? 1,
                  rotationRad: ((e.textureRotation ?? 0) * Math.PI) / 180,
                },
                o,
                e.cellSize,
                { preserveSampler: !!c },
              );
            let u = X.getState(),
              d = u.procParams.macroVariation ?? 0,
              f = !!u.procParams.macroShader && !c,
              p = !!u.procParams.triplanar && !c,
              m = !!u.procParams.parallax && !c;
            if (!c)
              if (f || p || m)
                (cb(u.procSeed, f ? d : 0),
                  lb(
                    p,
                    yv(
                      (u.procParams.triplanarScale ?? 4) *
                        (u.procParams.textureScale ?? 1),
                      u.procParams.cellSize,
                    ),
                  ),
                  ub(u.procParams.projectionBlend ?? 4),
                  db(u.procParams.textureRotation ?? 0),
                  fb(m, u.procParams.parallaxDepth ?? 0.05),
                  Db(n, t.userData.procKind, {
                    authoredUV: l,
                    uvOverridden: !!s?.uv,
                  }));
              else {
                let e = n.getWorldPosition(new U());
                ib(n, e.x, e.z, u.procSeed, d);
              }
            let h = t.userData.procKind === `light_socket`;
            c ||
              n.traverse((e) => {
                let t = e.material,
                  n = Array.isArray(t) ? t : t ? [t] : [];
                for (let e of n) {
                  let t = e;
                  !t ||
                    !t.isMeshStandardMaterial ||
                    (t.emissiveMap && !l
                      ? ((t.emissive = new W(16777215)),
                        (t.emissiveIntensity = h ? 1.6 : 1.3),
                        (t.needsUpdate = !0))
                      : h &&
                        !t.emissiveMap &&
                        ((t.emissive = new W(16765562)),
                        (t.emissiveIntensity = 0.9),
                        (t.needsUpdate = !0)));
                }
              });
          }
          (s?.uv && av(n, s.uv), L(), I(), Ue.current());
        },
        [e, L, I],
      ),
      Rt = (0, J.useCallback)((e) => {
        let t = xe.current,
          n = t.get(e);
        if (n) return (t.delete(e), t.set(e, n), n);
        ye.current ||= new dr();
        let r = new Promise((n, r) => {
          ye.current.load(
            e,
            (e) => {
              let t = e.scene;
              (t.traverse((e) => {
                e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
              }),
                n(t));
            },
            void 0,
            (n) => {
              (t.delete(e), r(n));
            },
          );
        });
        for (t.set(e, r); t.size > Ex;) {
          let e = t.keys().next().value,
            n = t.get(e);
          (t.delete(e), n?.then((e) => Tx(e)).catch(() => {}));
        }
        return r;
      }, []),
      zt = (0, J.useCallback)((e, t) => {
        let n = e.children.find((e) => e.userData.editorAssetPlaceholder);
        n && (n.userData.loadError = String(t));
      }, []),
      Bt = (0, J.useCallback)(
        (e, t) => {
          Rt(t)
            .then((t) => {
              It(e, Gy(e, t));
            })
            .catch((t) => {
              (console.error(`[SceneEditorViewport] Failed to load GLTF:`, t),
                zt(e, t));
            });
        },
        [Rt, zt, It],
      ),
      Vt = (0, J.useCallback)(
        (e, t, n) => {
          let r = My(
              e.userData?.procKind,
              e.userData?.canonicalAxis,
              e.userData?.dims,
            ),
            i = n(t.u[0]);
          if (!r || !t.u.length) {
            Bt(e, i);
            return;
          }
          Promise.allSettled(t.u.map((e) => Rt(n(e))))
            .then((n) => {
              let i = n[0];
              if (i.status !== `fulfilled`) {
                (console.error(
                  `[SceneEditorViewport] Failed to load GLTF:`,
                  i.reason,
                ),
                  zt(e, i.reason));
                return;
              }
              let a = n.map((e, n) =>
                e.status === `fulfilled`
                  ? e.value
                  : (console.warn(
                      `[SceneEditorViewport] kit tile variant failed to load (${t.u[n]}); falling back to the region panel for those tiles`,
                      e.reason,
                    ),
                    i.value),
              );
              It(e, Ky(a, t, r));
            })
            .catch((t) => {
              (console.error(
                `[SceneEditorViewport] Failed to mount tiled kit content:`,
                t,
              ),
                zt(e, t));
            });
        },
        [Rt, zt, It, Bt],
      ),
      Ht = (0, J.useCallback)(
        async (t, n) => {
          if (!(!e.current || !Ce.current))
            try {
              let r = new Qp({ url: n });
              if ((await r.initialized, !e.current)) {
                typeof r.dispose == `function` && r.dispose();
                return;
              }
              (Ce.current && (Ce.current.visible = !0), It(t, r));
            } catch (e) {
              (console.error(`[SceneEditorViewport] Failed to load splat:`, e),
                zt(t, e));
            }
        },
        [e, zt, It],
      ),
      Gt = (0, J.useCallback)(
        (t, n) => {
          if (!e.current || !n) return;
          let r = t.userData?.assetModified,
            i = (e) =>
              /^(https?:|blob:|\/)/.test(e)
                ? e
                : A.getAssetUrl(
                    we.current,
                    e,
                    r == null ? void 0 : { version: r },
                  ),
            a = t.userData?.tiles;
          n.toLowerCase().endsWith(`.spz`)
            ? Ht(t, i(n))
            : a && Array.isArray(a.n) && Array.isArray(a.u) && a.u.length
              ? Vt(t, a, i)
              : Bt(t, i(n));
        },
        [e, Bt, Vt, Ht],
      );
    ((0, J.useEffect)(
      () => (
        (i.current = Gt),
        () => {
          i.current = null;
        }
      ),
      [i, Gt],
    ),
      (0, J.useEffect)(() => {
        let t = e.current;
        t &&
          t.children.forEach((e) => {
            let t = e.userData?.modelPath;
            if (!t) return;
            let n = e.children.some((e) => e.userData?.editorAssetContent),
              r = e.children.some((e) => e.userData?.editorAssetPlaceholder);
            !n && !r && Gt(e, t);
          });
      }, [St, Gt, e]),
      (0, J.useEffect)(() => {
        let e = () => {
          let e = xe.current;
          (e.forEach((e) => e.then((e) => Tx(e)).catch(() => {})), e.clear());
        };
        return (
          window.addEventListener(`sandscape-kits-updated`, e),
          () => window.removeEventListener(`sandscape-kits-updated`, e)
        );
      }, []),
      (0, J.useEffect)(
        () => (
          (s.current = I),
          () => {
            s.current = null;
          }
        ),
        [s, I],
      ),
      (0, J.useEffect)(() => {
        if (!m.current) return;
        let i = m.current,
          s = i.clientWidth,
          l = i.clientHeight,
          u = new Ut({ antialias: !0, alpha: !1 });
        (u.setSize(s, l), pi(u), (n.current = u), i.appendChild(u.domElement));
        let d = new ke(50, s / l, 0.01, 1e3);
        (d.position.set(5, 5, 5), d.lookAt(0, 0, 0), (t.current = d));
        let f = new bt();
        ((f.background = new W(0)), (e.current = f), mi(f));
        let p = hi(u);
        ((p.userData.editorManaged = !0),
          (f.environment = p),
          (x.current = p),
          (S.current = p));
        let h = _i();
        (f.add(h), (b.current = h));
        let D = new or(d, u.domElement);
        ((D.enableDamping = !0),
          (D.dampingFactor = 0.1),
          D.update(),
          (g.current = D),
          D.addEventListener(`change`, I),
          (a.current = (e) => {
            let t = Array.isArray(e) ? e : [e];
            if (t.length === 0) return;
            let n = new wt();
            for (let e of t) n.expandByObject(e);
            if (n.isEmpty()) return;
            let r = n.getCenter(new U()),
              i = n.getSize(new U()),
              a = Math.max(i.x, i.y, i.z),
              o = d.fov * (Math.PI / 180),
              s = (a / (2 * Math.tan(o / 2))) * 1.5,
              c = new U();
            (d.getWorldDirection(c),
              d.position.copy(r).sub(c.multiplyScalar(s)),
              D.target.copy(r),
              D.update());
          }),
          (o.current = (t) => {
            let n = e.current,
              i = r.current;
            if (!n || !i) return;
            let a = pv(t).filter(
              (e) => !Dx(e) && !e.userData?.locked && !Ix(e, n, ze.current),
            );
            if (a.length === 0) return;
            let o = new Set();
            for (let e of a) e.traverse((e) => o.add(e));
            let s = n.children.filter(
                (e) =>
                  !o.has(e) && !Dx(e) && e.visible && !Ix(e, n, ze.current),
              ),
              c = [],
              l = new wt();
            for (let e of a) {
              if ((Jy(e, l), l.isEmpty())) continue;
              let t = $y(l, s, _e.current);
              if (Math.abs(t) < 1e-6) continue;
              let r = e.position.clone();
              if (((r.y += t), e.parent && e.parent.type !== `Scene`)) {
                let n = e.getWorldPosition(new U());
                ((n.y += t), r.copy(e.parent.worldToLocal(n)));
              }
              c.push(new Ch(n, He.current, e, r, e.position.clone()));
            }
            if (c.length === 0) return;
            let u = new Uh(n, He.current, c);
            ((u.name =
              c.length > 1
                ? `Drop ${c.length} Objects to Ground`
                : `Drop to Ground`),
              (u.updatable = !1),
              i.execute(u),
              I());
          }));
        let O = new ac(d, u.domElement),
          k = O;
        ((k.location.top = 0),
          (k.location.right = 0),
          (O.center = D.target),
          O.traverse((e) => {
            if (e.isSprite && e.userData.type?.startsWith(`neg`)) {
              let t = e.material;
              (t.color.set(`#888888`), (t.opacity = 0.5));
            }
          }),
          (M.current = O));
        let A = new Up({ renderer: u });
        ((A.userData.editorOnly = !0),
          (A.visible = !1),
          f.add(A),
          (Ce.current = A));
        let N = new Zn(d, u.domElement),
          L = N;
        ((N.userData.editorOnly = !0),
          f.add(N),
          (_.current = N),
          L.addEventListener(`change`, I),
          L.addEventListener(`objectChange`, I),
          L.addEventListener(`dragging-changed`, (t) => {
            if (((D.enabled = !t.value), t.value)) {
              re.current = !0;
              let t = L.object;
              if (
                (t &&
                  ((ie.current = t.position.clone()),
                  (ae.current = t.rotation.clone()),
                  (oe.current = t.scale.clone())),
                et(),
                !E.current)
              ) {
                let t = e.current,
                  n = t
                    ? pv(We(Fe.current).filter((e) => !Ix(e, t, ze.current)))
                    : [];
                Ye(n);
              }
            } else {
              ((re.current = !1), (Ne.current = []), Xe(null));
              let t = !!se.current;
              (nt(), j((e) => e + 1));
              let n = L.object,
                i = e.current,
                a = !!ie.current && !n?.position.equals(ie.current),
                o = !!ae.current && n?.rotation.y !== ae.current.y;
              if (
                !t &&
                !E.current &&
                n &&
                i &&
                r.current &&
                C_(n) &&
                (a || o)
              ) {
                let e = wy(i, He.current, [
                  {
                    object: n,
                    toX: n.position.x,
                    toY: n.position.y,
                    toZ: n.position.z,
                    ...(o
                      ? { facingDeg: Math.round(n.rotation.y * fe.RAD2DEG) }
                      : {}),
                  },
                ]);
                if (e) {
                  (r.current.execute(e.command), Ue.current());
                  let t = e.landed[0] && Ty(i, e.landed[0]);
                  t && _t(t.uuid);
                }
                I();
              }
              if (
                !t &&
                !E.current &&
                n &&
                i &&
                r.current &&
                S_(n) &&
                a &&
                ie.current
              ) {
                let e = ie.current,
                  t = ay(i, He.current, [
                    {
                      object: n,
                      fromX: e.x,
                      fromZ: e.z,
                      toX: n.position.x,
                      toZ: n.position.z,
                    },
                  ]);
                if (t) {
                  (r.current.execute(t.command), Ue.current());
                  let e = t.landed[0] && uy(i, t.landed[0]);
                  e && _t(e.uuid);
                }
                I();
              }
              let s = E.current,
                c = L.object,
                l = e.current;
              if (s && c && l && r.current) {
                let e = l.getObjectByProperty(`uuid`, s.ownerUuid);
                if (e) {
                  let t = c.getWorldPosition(new U()),
                    n = s.local ? e.worldToLocal(t.clone()) : t,
                    i = Lx(Zh(e.userData, s.valuePath), n);
                  r.current.execute(new ng(l, He.current, e, s.valuePath, i));
                }
              }
              setTimeout(() => {
                ((ie.current = null), (ae.current = null), (oe.current = null));
              }, 0);
            }
          }),
          L.addEventListener(`objectChange`, () => {
            if (E.current) {
              I();
              return;
            }
            let t = se.current;
            if (t) {
              if (t.pivotStartInverse) {
                if (L.mode === `translate`) {
                  let e = T.current;
                  e && (tt(t), Qe(e, $e(t.objects)));
                }
                tt(t);
              } else
                (L.mode === `translate` &&
                  t.objects[0] &&
                  Qe(t.objects[0], Ze(t.objects[0])),
                  He.current(t.objects[0]));
              I();
              return;
            }
            let n = L.object;
            if (!n || !e.current || !r.current) return;
            let i = L.mode;
            if (
              (i === `translate` && !E.current && Qe(n, Ze(n)),
              i === `translate` && ie.current)
            ) {
              if (C_(n) || S_(n)) {
                I();
                return;
              }
              let t = new Ch(
                e.current,
                He.current,
                n,
                n.position.clone(),
                ie.current,
              );
              r.current.execute(t);
            } else if (i === `rotate` && ae.current) {
              if (C_(n)) {
                I();
                return;
              }
              let t = new wh(
                e.current,
                He.current,
                n,
                n.rotation.clone(),
                ae.current,
              );
              r.current.execute(t);
            } else if (i === `scale` && oe.current) {
              let t = new Th(
                e.current,
                He.current,
                n,
                n.scale.clone(),
                oe.current,
              );
              r.current.execute(t);
            }
          }));
        let z = c.current,
          ce = (e) => {
            let t = e.target;
            if (
              t.tagName === `INPUT` ||
              t.tagName === `TEXTAREA` ||
              t.tagName === `SELECT` ||
              t.isContentEditable ||
              e.ctrlKey ||
              e.metaKey ||
              e.altKey ||
              (z && !z.contains(t) && t !== document.body)
            )
              return;
            let n = e.key.toLowerCase();
            `wasdqe`.includes(n) && n.length === 1 && he.current.add(n);
          },
          de = (e) => {
            he.current.delete(e.key.toLowerCase());
          },
          pe = () => {
            he.current.clear();
          },
          me = () => {
            document.hidden || (ee.current = !0);
          },
          B = N,
          ve = () => {
            let e = ue.current;
            e &&
              ((ue.current = null),
              (D.enabled = e.controlsWereEnabled),
              window.removeEventListener(`pointermove`, ye, !0),
              window.removeEventListener(`pointerup`, be, !0),
              window.removeEventListener(`pointercancel`, be, !0));
          };
        function ye(e) {
          let t = ue.current;
          if (!t) return;
          (e.preventDefault(), e.stopPropagation());
          let n = u.domElement.clientHeight || 1,
            r = (2 * Math.PI) / n,
            i = -(e.clientX - t.lastX) * r,
            a = -(e.clientY - t.lastY) * r;
          if (
            ((t.lastX = e.clientX), (t.lastY = e.clientY), i === 0 && a === 0)
          )
            return;
          let o = new U().setFromMatrixColumn(d.matrixWorld, 0).normalize(),
            s = new R()
              .setFromAxisAngle(d.up, i)
              .multiply(new R().setFromAxisAngle(o, a)),
            c = (e, n) => e.sub(t.pivot).applyQuaternion(n).add(t.pivot),
            l = new U(0, 0, -1).applyQuaternion(
              new R().multiplyQuaternions(s, d.quaternion),
            ),
            f =
              Math.abs(l.dot(d.up)) < 0.995
                ? s
                : new R().setFromAxisAngle(d.up, i);
          (c(d.position, f),
            c(D.target, f),
            d.quaternion.premultiply(f),
            d.updateMatrixWorld(),
            I());
        }
        function be(e) {
          (e.stopPropagation(), ve());
        }
        let Se = (t) => {
          let n = B.axis !== null && N.visible;
          if (
            ((le.current = t.altKey && n),
            !t.altKey || n || t.button !== 0 || t.target !== u.domElement)
          )
            return;
          let r = e.current;
          if (!r) return;
          let i = Fx(We(Fe.current).filter((e) => !Ix(e, r, ze.current)));
          i &&
            (t.preventDefault(),
            t.stopPropagation(),
            (ue.current = {
              pivot: i,
              lastX: t.clientX,
              lastY: t.clientY,
              controlsWereEnabled: D.enabled,
            }),
            (D.enabled = !1),
            window.addEventListener(`pointermove`, ye, !0),
            window.addEventListener(`pointerup`, be, !0),
            window.addEventListener(`pointercancel`, be, !0));
        };
        (window.addEventListener(`pointerdown`, Se, !0),
          window.addEventListener(`keydown`, ce),
          window.addEventListener(`keyup`, de),
          window.addEventListener(`blur`, pe),
          document.addEventListener(`visibilitychange`, me));
        let we = new ln(),
          Te = {
            isHidden: (e) => Ix(e, f, ze.current),
            isSelected: (e) => F.current.has(e),
          },
          Ee = new U(),
          De = new U(),
          Oe = new U(),
          Ae = () => {
            v.current = requestAnimationFrame(Ae);
            let e = we.getDelta();
            if (document.hidden || !te.current) return;
            let t = he.current;
            if (t.size > 0) {
              let n = ge.current * e;
              (d.getWorldDirection(De),
                (De.y = 0),
                De.normalize(),
                Oe.crossVectors(De, d.up).normalize(),
                Ee.set(0, 0, 0),
                t.has(`w`) && Ee.add(De),
                t.has(`s`) && Ee.sub(De),
                t.has(`d`) && Ee.add(Oe),
                t.has(`a`) && Ee.sub(Oe),
                t.has(`e`) && (Ee.y += 1),
                t.has(`q`) && --Ee.y,
                Ee.lengthSq() > 0 &&
                  (Ee.normalize().multiplyScalar(n),
                  d.position.add(Ee),
                  D.target.add(Ee),
                  (ee.current = !0)));
            }
            if (
              (D.update(),
              O.animating && (O.update(e), (ee.current = !0)),
              ne.current && (ee.current = !0),
              ee.current)
            ) {
              ee.current = !1;
              for (let e of w.current) e.update();
              (P.current && gx(P.current, d, Te),
                H.current(f),
                Rx(u, f, d, ze.current),
                (u.autoClear = !1),
                O.render(u),
                (u.autoClear = !0));
            }
          };
        Ae();
        let V = new ResizeObserver(() => {
          let e = i.clientWidth,
            t = i.clientHeight;
          e === 0 ||
            t === 0 ||
            ((d.aspect = e / t),
            d.updateProjectionMatrix(),
            u.setSize(e, t),
            (ee.current = !0));
        });
        return (
          V.observe(i),
          () => {
            (ve(),
              window.removeEventListener(`pointerdown`, Se, !0),
              window.removeEventListener(`keydown`, ce),
              window.removeEventListener(`keyup`, de),
              window.removeEventListener(`blur`, pe),
              document.removeEventListener(`visibilitychange`, me),
              V.disconnect(),
              v.current && cancelAnimationFrame(v.current),
              (M.current &&= (M.current.dispose(), null)),
              N.detach(),
              N.dispose(),
              D.dispose(),
              Ge(),
              Je(),
              (T.current = null),
              (se.current = null),
              x.current && x.current.dispose(),
              C.current && C.current !== x.current && C.current.dispose(),
              (S.current = null),
              (C.current = null),
              f.traverse((e) => {
                e instanceof Qp &&
                  typeof e.dispose == `function` &&
                  e.dispose();
              }),
              (Ce.current &&=
                (Ce.current.parent && Ce.current.parent.remove(Ce.current),
                typeof Ce.current.dispose == `function` && Ce.current.dispose(),
                null)),
              f.traverse((e) => {
                e instanceof G &&
                  (e.geometry?.dispose(),
                  Array.isArray(e.material)
                    ? e.material.forEach((e) => e.dispose())
                    : e.material?.dispose());
              }),
              xe.current.forEach((e) => {
                e.then((e) => Tx(e)).catch(() => {});
              }),
              xe.current.clear(),
              u.domElement.parentNode &&
                u.domElement.parentNode.removeChild(u.domElement),
              u.dispose(),
              u.forceContextLoss(),
              (e.current = null),
              (t.current = null),
              (n.current = null),
              (g.current = null),
              (_.current = null),
              (y.current = null),
              (b.current = null),
              (x.current = null));
          }
        );
      }, []),
      (0, J.useEffect)(() => {
        let t = _.current;
        if (t) {
          if ((t.setMode(rt), ce.current)) {
            let t = e.current;
            t && Ke(pv(We(Fe.current).filter((e) => !Ix(e, t, ze.current))));
          }
          I();
        }
      }, [rt, I, Ke, e, We]),
      (0, J.useEffect)(() => {
        let e = _.current;
        e && (e.setSpace(it), I());
      }, [it, I]),
      (0, J.useEffect)(() => {
        let e = _.current;
        e &&
          (e.setTranslationSnap(
            at && !st && ot.translate > 0 ? ot.translate : null,
          ),
          e.setRotationSnap(
            at && ot.rotate > 0 ? fe.degToRad(ot.rotate) : null,
          ),
          e.setScaleSnap(at && ot.scale > 0 ? ot.scale : null));
      }, [at, ot, st]),
      (0, J.useEffect)(() => {
        ((F.current = new Set(lt)), I());
      }, [lt, I]),
      (0, J.useEffect)(() => {
        I();
      }, [xt, I]),
      (0, J.useEffect)(() => {
        (L(), I());
      }, [St, L, I]),
      (0, J.useEffect)(() => {
        let t = e.current;
        if (!t) return;
        N.current && (t.remove(N.current), Gb(N.current));
        let n = Wb(t, Nt);
        return (
          t.add(n),
          (N.current = n),
          I(),
          () => {
            (n.parent && n.parent.remove(n),
              Gb(n),
              N.current === n && (N.current = null));
          }
        );
      }, [Nt, xt, St, e, I]));
    let qt = (0, J.useMemo)(() => {
      let t = e.current;
      return t && dt ? mx(t, Dx) : ``;
    }, [dt, xt, St, e]);
    ((0, J.useEffect)(() => {
      let t = e.current;
      if (!t || !qt) return;
      let n = hx(t, Dx);
      return (
        t.add(n),
        (P.current = n),
        I(),
        () => {
          (n.parent && n.parent.remove(n),
            yx(n),
            P.current === n && (P.current = null),
            I());
        }
      );
    }, [qt, e, I]),
      (0, J.useEffect)(() => {
        let e = _.current;
        if (!e || !D) return;
        let t = [];
        N.current?.traverse((e) => {
          e.userData.visualizerEdit?.id === D && t.push(e);
        });
        let n = t[0];
        (n
          ? (Ge(), Je(), e.setMode(`translate`), e.attach(n))
          : (e.detach(), (E.current = null), O(null)),
          I());
      }, [D, Nt, xt, St, e, I, Ge, Je]),
      (0, J.useEffect)(() => {
        Le.current = ht;
      }, [ht]),
      (0, J.useEffect)(() => {
        Re.current = gt;
      }, [gt]),
      (0, J.useEffect)(() => {
        let t = e.current,
          r = n.current;
        if (!(!t || !r)) {
          if (pt === `scene`) {
            I();
            return;
          }
          if (pt === `none`) {
            ((t.environment = null),
              t.background instanceof me && (t.background = new W(0)),
              I());
            return;
          }
          if (pt === `studio`) {
            let e = S.current;
            (e &&
              ((t.environment = e), (x.current = e), ht && (t.background = e)),
              I());
            return;
          }
          if (pt === `asset` && mt) {
            let t = Cx(mt, (e) => A.getAssetUrl(we.current, e, !1)),
              r = (t) => {
                if (!e.current || !n.current) return;
                let r = new tn(n.current),
                  i = r.fromEquirectangular(t).texture;
                (r.dispose(),
                  t.dispose(),
                  C.current && C.current.dispose(),
                  (i.userData.editorManaged = !0),
                  (C.current = i),
                  (x.current = i),
                  (e.current.environment = i),
                  Le.current && (e.current.background = i),
                  I());
              };
            mt.toLowerCase().includes(`.hdr`)
              ? new ic().load(t, r, void 0, (e) => {
                  console.error(`[SceneEditorViewport] Failed to load HDR:`, e);
                })
              : new de().load(
                  t,
                  (e) => {
                    ((e.mapping = 303), (e.colorSpace = Ft), r(e));
                  },
                  void 0,
                  (e) => {
                    console.error(
                      `[SceneEditorViewport] Failed to load environment image:`,
                      e,
                    );
                  },
                );
          }
        }
      }, [pt, mt]),
      (0, J.useEffect)(() => {
        let t = e.current;
        t &&
          pt === `asset` &&
          (ht && t.environment
            ? (t.background = t.environment)
            : ht ||
              ((t.background instanceof me || t.background === t.environment) &&
                (t.background = new W(0))),
          I());
      }, [ht, pt]),
      (0, J.useEffect)(() => {
        let e = n.current;
        e && ((e.toneMappingExposure = gt), I());
      }, [gt]));
    let Jt = ft
      ? Math.max(ft.params.gridWidth, ft.params.gridDepth) * ft.params.cellSize
      : 20;
    ((0, J.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let n = ot.translate > 0 ? ot.translate : 1,
        r = Math.min(400, Math.max(1, Math.round(Math.max(20, Jt) / n))),
        i = r * n,
        a = y.current;
      if (a) {
        (t.remove(a), a.geometry.dispose());
        let e = a.material;
        Array.isArray(e) ? e.forEach((e) => e.dispose()) : e.dispose();
      }
      let o = gi(i, r);
      ((o.visible = ut), t.add(o), (y.current = o), I());
    }, [ot.translate, Jt, ut, e, I]),
      (0, J.useEffect)(() => {
        let t = e.current,
          n = _.current;
        if (!t || !n || D || re.current) return;
        Ge();
        let r = We(lt).filter((e) => !Ix(e, t, Pt));
        if (r.length === 0) {
          (n.detach(), Je(), (ce.current = !1), I());
          return;
        }
        let i = r[r.length - 1];
        for (let e of r) {
          let n = new At(e, e === i ? Nx : Px);
          ((n.userData.editorOnly = !0), t.add(n), w.current.push(n));
        }
        let a = pv(r);
        if (a.length === 1) (Je(), (ce.current = !1), n.attach(a[0]));
        else {
          let e = qe(a);
          ((ce.current = !!e), e ? n.attach(e) : n.detach());
        }
        I();
      }, [lt, Pt, D, St, k]),
      (0, J.useEffect)(() => {
        if (re.current || !ce.current) return;
        let t = e.current;
        if (!t || !T.current) return;
        let n = pv(We(lt).filter((e) => !Ix(e, t, Pt)));
        n.length > 1 && Ke(n);
      }, [xt]));
    let Yt = (0, J.useCallback)((e) => {
        let t = e.parent;
        for (; t;) {
          if (
            t.userData.editorAssetContent ||
            t.userData.editorAssetPlaceholder
          )
            return !0;
          t = t.parent;
        }
        return !1;
      }, []),
      Xt = (0, J.useCallback)(
        (t) => {
          let n = t;
          for (; n;) {
            if (
              n.userData.editorAssetContent ||
              n.userData.editorAssetPlaceholder
            ) {
              n = n.parent;
              continue;
            }
            if (Yt(n)) {
              n = n.parent;
              continue;
            }
            if (rg(n) || n.parent === e.current) return n;
            if (n.parent?.userData.editorAssetContent) {
              n = n.parent.parent;
              continue;
            }
            n = n.parent;
          }
          return null;
        },
        [e, Yt],
      ),
      Zt = (0, J.useCallback)((e) => {
        let t = e;
        for (; t;) {
          if (
            (t.userData.editorOnly &&
              !t.userData.editorAssetContent &&
              !t.userData.editorAssetPlaceholder) ||
            t.name === `__ground_plane`
          )
            return !0;
          t = t.parent;
        }
        return !1;
      }, []),
      Qt = (0, J.useCallback)((e) => {
        let t = e;
        for (; t;) {
          if (
            t.type === `TransformControlsGizmo` ||
            t.type === `TransformControlsPlane`
          )
            return !0;
          t = t.parent;
        }
        return !1;
      }, []),
      $t = (0, J.useCallback)((e) => {
        pe.current = { x: e.clientX, y: e.clientY };
      }, []),
      en = (0, J.useCallback)(
        (n) => {
          let r = pe.current;
          if (((pe.current = null), !r)) return;
          let i = n.clientX - r.x,
            a = n.clientY - r.y;
          if (Math.abs(i) > 5 || Math.abs(a) > 5) return;
          let o = t.current,
            s = e.current,
            c = m.current;
          if (!o || !s || !c) return;
          let l = c.getBoundingClientRect();
          (ve.current.set(
            ((n.clientX - l.left) / l.width) * 2 - 1,
            -((n.clientY - l.top) / l.height) * 2 + 1,
          ),
            _e.current.setFromCamera(ve.current, o));
          let u = N.current;
          if (u) {
            let e = [];
            u.traverse((t) => {
              t.userData.visualizerEdit && e.push(t);
            });
            let t = _e.current.intersectObjects(e, !0);
            if (t.length > 0) {
              let e = t[0].object;
              for (; e && !e.userData.visualizerEdit;) e = e.parent;
              let n = e?.userData.visualizerEdit;
              if (n) {
                ((E.current = n), _t(null), O(n.id));
                return;
              }
            }
          }
          E.current && ((E.current = null), O(null));
          let d = _x(P.current);
          if (d.length > 0) {
            let e = _e.current.intersectObjects(d, !1),
              t = e.length > 0 ? vx(e[0].object) : null;
            if (t) {
              n.ctrlKey || n.metaKey ? yt(t) : n.shiftKey ? vt(t) : _t(t);
              return;
            }
          }
          let f = [];
          s.traverse((e) => {
            e !== s && (Zt(e) || Qt(e) || (e.isMesh && f.push(e)));
          });
          let p = _e.current.intersectObjects(f, !1),
            h = n.shiftKey,
            g = n.ctrlKey || n.metaKey;
          if (p.length > 0) {
            let e = Xt(p[0].object);
            if (e && !Zt(e)) {
              g ? yt(e.uuid) : h ? vt(e.uuid) : _t(e.uuid);
              return;
            }
          }
          h || g || _t(null);
        },
        [t, e, _t, vt, yt, O, Xt, Zt, Qt],
      ),
      nn = (0, J.useCallback)(
        (n, r) => {
          if (n.kind === `material`) return;
          let i = t.current,
            a = e.current,
            o = b.current,
            s = m.current;
          if (!i || !a || !o || !s) return;
          o.visible = !0;
          let c = s.getBoundingClientRect();
          (ve.current.set(
            ((r.x - c.left) / c.width) * 2 - 1,
            -((r.y - c.top) / c.height) * 2 + 1,
          ),
            _e.current.setFromCamera(ve.current, i));
          let l = _e.current.intersectObject(o);
          if (l.length === 0) return;
          let u = E_(n.payload?.assetType);
          if (
            (B.current && B.current.userData.pivot !== u && Ve(), !B.current)
          ) {
            let e = new Lt(1, 1, 1),
              t = Tg(u);
            e.translate(t.x, t.y, t.z);
            let n = new G(
              e,
              new Te({
                color: 4491519,
                transparent: !0,
                opacity: 0.4,
                depthWrite: !1,
              }),
            );
            ((n.userData.editorOnly = !0),
              (n.userData.pivot = u),
              (n.renderOrder = 999),
              a.add(n),
              (B.current = n));
          }
          let d = l[0].point;
          (B.current.position.set(d.x, d.y, d.z), I());
        },
        [t, e, b, I, Ve],
      ),
      rn = (0, J.useCallback)(
        (n, r) => {
          let i = t.current,
            a = e.current,
            o = m.current;
          if (!i || !a || !o) return null;
          let s = o.getBoundingClientRect();
          (ve.current.set(
            ((n - s.left) / s.width) * 2 - 1,
            -((r - s.top) / s.height) * 2 + 1,
          ),
            _e.current.setFromCamera(ve.current, i));
          let c = [];
          a.traverse((e) => {
            e !== a && (Zt(e) || Qt(e) || (e.isMesh && c.push(e)));
          });
          let l = _e.current.intersectObjects(c, !1);
          if (l.length === 0) return null;
          let u = Xt(l[0].object);
          return u && !Zt(u) ? u : null;
        },
        [t, e, Xt, Zt, Qt],
      ),
      { dropProps: an } = h({
        accept: [`scene-asset`, `material`],
        onDragOver: nn,
        onDrop: (0, J.useCallback)(
          (n, i) => {
            if (n.kind === `material`) {
              (Ve(), b.current && (b.current.visible = !1));
              let e = rn(i.x, i.y),
                t = n.payload?.materialId;
              e && t && p?.(e.uuid, t);
              return;
            }
            let a = n.payload,
              o = t.current,
              s = e.current,
              c = b.current,
              l = m.current;
            if (!a || !o || !s || !c || !l || !r.current) return;
            let u = l.getBoundingClientRect();
            (ve.current.set(
              ((i.x - u.left) / u.width) * 2 - 1,
              -((i.y - u.top) / u.height) * 2 + 1,
            ),
              _e.current.setFromCamera(ve.current, o));
            let d = _e.current.intersectObject(c);
            if ((Ve(), (c.visible = !1), d.length === 0)) return;
            let f = d[0].point,
              h = Sx(a.modelPath || ``),
              g = new Se();
            (g.position.set(f.x, f.y, f.z),
              (g.name = a.name),
              (g.userData.assetId = a.assetId),
              (g.userData.assetName = a.name),
              (g.userData.modelPath = h),
              a.assetType && (g.userData.assetType = a.assetType));
            let _ = j_(g);
            g.userData.pivot = _;
            let v = new Lt(1, 1, 1),
              y = Tg(_);
            v.translate(y.x, y.y, y.z);
            let x = new G(v, new Te({ color: 8947848, wireframe: !0 }));
            ((x.name = `${a.name} (loading)`),
              (x.userData.editorOnly = !0),
              (x.userData.editorAssetPlaceholder = !0),
              g.add(x));
            let S = new Bh(s, He.current, g);
            (r.current.execute(S),
              Ue.current(),
              I(),
              _t(g.uuid),
              h && Gt(g, h));
          },
          [t, e, b, r, _t, Gt, I, Ve, rn, p],
        ),
        onDragLeave: (0, J.useCallback)(() => {
          (Ve(), b.current && (b.current.visible = !1));
        }, [Ve, b]),
        autoScroll: !1,
      }),
      on = an.ref,
      sn = (0, J.useRef)(on);
    return (
      (sn.current = on),
      (0, Y.jsx)(`div`, {
        ref: (0, J.useCallback)((e) => {
          ((m.current = e), sn.current(e));
        }, []),
        "data-dnd-zone": an[`data-dnd-zone`],
        className: `relative w-full h-full`,
        style: { touchAction: `none` },
        onPointerDown: $t,
        onPointerUp: en,
        children: (0, Y.jsx)(`div`, {
          className: `absolute top-0 right-0 w-32 h-32 z-10`,
          style: { cursor: `pointer` },
          onPointerUp: (e) => {
            (e.stopPropagation(), M.current?.handleClick(e.nativeEvent));
          },
          onPointerDown: (e) => e.stopPropagation(),
        }),
      })
    );
  },
  Bx = {
    translate: `Move`,
    rotate: `Rotate`,
    scale: `Scale`,
    toggleGrid: `Toggle Grid`,
    toggleSnap: `Toggle Grid Snap`,
    toggleMagnet: `Toggle Object Magnet`,
    dropToGround: `Drop to Ground`,
    focusSelected: `Focus Selected`,
    deleteSelected: `Delete Selected`,
    undo: `Undo`,
    redo: `Redo`,
    duplicate: `Duplicate`,
    groupSelection: `Group Selection`,
    save: `Save`,
  };
