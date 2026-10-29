// LevelDesignKitPanel-Cm6YODiQ 03 — children
// Lines 538-2334 of readable/assets/LevelDesignKitPanel-Cm6YODiQ.pretty.js (statement-aligned).
var $e = ({ url: e, className: t }) => {
    let n = (0, M.useRef)(null);
    return (
      (0, M.useEffect)(() => {
        let t = n.current;
        if (!t) return;
        let r = !1,
          i = new Ee({ antialias: !0, alpha: !0 });
        (i.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)),
          (i.outputColorSpace = Te),
          (i.toneMapping = 4),
          (i.toneMappingExposure = 1.2),
          i.setSize(t.clientWidth || 320, t.clientHeight || 320, !1),
          (i.domElement.style.width = `100%`),
          (i.domElement.style.height = `100%`),
          (i.domElement.style.display = `block`),
          t.appendChild(i.domElement));
        let a = new we();
        ((a.environment = te(i)), a.add(new Ce(16777215, 3158080, 0.5)));
        let s = new O(16774374, 2.2);
        (s.position.set(2.5, 4, 3), a.add(s));
        let l = new O(12374271, 0.7);
        (l.position.set(-3, 1.5, 2), a.add(l));
        let u = new O(16777215, 1.1);
        (u.position.set(-1.5, 2.5, -3), a.add(u));
        let d = new A(4, 8, 5592405, 3355443);
        ((d.material.transparent = !0),
          (d.material.opacity = 0.25),
          (d.position.y = -1.7 / 2),
          a.add(d));
        let f = new Se(35, 1, 0.05, 100);
        f.position.set(1.9, 1.5, 2.3);
        let p = new c(f, i.domElement);
        ((p.enableDamping = !0),
          (p.dampingFactor = 0.08),
          (p.minDistance = 0.6),
          (p.maxDistance = 12),
          p.target.set(0, 0, 0));
        let m = 0,
          h = !1,
          g = 0,
          _ = new k().copy(f.position),
          v = () => {
            !m && !r && (m = requestAnimationFrame(ee));
          };
        function ee() {
          if (((m = 0), r)) return;
          (p.update(), i.render(a, f));
          let e = f.position.distanceToSquared(_) > 1e-10;
          (_.copy(f.position), (g = e || h ? 0 : g + 1), (h || g < 3) && v());
        }
        (p.addEventListener(`change`, v),
          p.addEventListener(`start`, () => {
            ((h = !0), v());
          }),
          p.addEventListener(`end`, () => {
            ((h = !1), v());
          }));
        let y = () => {
            let e = t.clientWidth || 1,
              n = t.clientHeight || 1;
            (i.setSize(e, n, !1),
              (f.aspect = e / n),
              f.updateProjectionMatrix(),
              v());
          },
          b = new ResizeObserver(y);
        (b.observe(t), y());
        let x = null;
        return (
          new o().load(
            e,
            (e) => {
              if (r) {
                V(e.scene);
                return;
              }
              x = e.scene;
              let t = new j().setFromObject(x);
              if (!t.isEmpty()) {
                let e = t.getSize(new k()),
                  n = Math.max(e.x, e.y, e.z);
                if (n > 0) {
                  let e = B / n;
                  (x.scale.setScalar(e),
                    x.position.copy(t.getCenter(new k())).multiplyScalar(-e));
                }
              }
              (a.add(x), v());
            },
            void 0,
            () => {},
          ),
          () => {
            ((r = !0),
              m && cancelAnimationFrame(m),
              p.removeEventListener(`change`, v),
              p.dispose(),
              b.disconnect(),
              x && V(x),
              a.environment?.dispose(),
              d.geometry.dispose(),
              d.material.dispose(),
              i.dispose(),
              i.domElement.remove());
          }
        );
      }, [e]),
      (0, N.jsx)(`div`, { ref: n, className: t })
    );
  },
  et = (e) => e.split(`/`).pop() || e,
  tt = [
    `floor`,
    `corridor_floor`,
    `arena_floor`,
    `wall`,
    `corridor_wall`,
    `arena_wall`,
    `ceiling`,
    `corridor_ceiling`,
    `arena_ceiling`,
    `door`,
    `column`,
    `beam`,
    `trim`,
    `hero_panel`,
    `decal`,
    `floor_insert`,
    `pillar`,
    `prop`,
    `wall_panel`,
    `light_socket`,
  ],
  nt = new Set([`floor`, `ceiling`, `wall`]),
  rt = new Set([
    `arena_floor`,
    `corridor_floor`,
    `arena_ceiling`,
    `corridor_ceiling`,
    `arena_wall`,
    `corridor_wall`,
  ]),
  it = /(^|[^a-z])(arena|corridor|hall)([^a-z]|$)/i,
  at = ({ url: e, alt: t, size: n = 96, onClick: r, active: i }) => {
    let a = (0, M.useRef)(null),
      o = (0, M.useRef)(null),
      [s, c] = (0, M.useState)(!1),
      [u, f] = (0, M.useState)(!1);
    return (
      (0, M.useEffect)(() => {
        if (s || !a.current) return;
        let e = a.current,
          t = new IntersectionObserver(
            (e) => {
              e.some((e) => e.isIntersecting) && (c(!0), t.disconnect());
            },
            { root: null, rootMargin: `120px` },
          );
        return (t.observe(e), () => t.disconnect());
      }, [s]),
      (0, M.useEffect)(() => {
        let t = !0;
        if (!(!s || !o.current))
          return (
            l(e, o.current, n)
              .then((e) => {
                t && f(e);
              })
              .catch(() => {}),
            () => {
              t = !1;
            }
          );
      }, [s, e, n]),
      (0, N.jsxs)(`div`, {
        ref: a,
        onClick: r,
        role: r ? `button` : void 0,
        title: r ? `${t} — click to enlarge` : t,
        className: `shrink-0 rounded border bg-black/30 overflow-hidden flex items-center
                  justify-center ${r ? `cursor-zoom-in hover:border-primary/60` : ``}
                  ${i ? `border-primary ring-1 ring-primary/40` : `border-border/40`}`,
        style: { width: n, height: n },
        children: [
          (0, N.jsx)(`canvas`, {
            ref: o,
            width: n * 2,
            height: n * 2,
            className: `w-full h-full ${u ? `` : `hidden`}`,
          }),
          !u &&
            (0, N.jsx)(d, {
              size: Math.max(13, Math.round(n / 4)),
              className: `text-muted-foreground/40`,
            }),
        ],
      })
    );
  },
  ot = ({ assetUrl: e, conceptUrl: t, category: n }) => {
    let r = (0, M.useRef)(null),
      [i, a] = (0, M.useState)(!1);
    return (
      (0, M.useEffect)(() => {
        let t = !0;
        return (
          a(!1),
          e &&
            r.current &&
            s(e, n, r.current, 160)
              .then((e) => {
                t && a(e);
              })
              .catch(() => {}),
          () => {
            t = !1;
          }
        );
      }, [e, n]),
      (0, N.jsxs)(N.Fragment, {
        children: [
          (0, N.jsx)(`canvas`, {
            ref: r,
            width: 160,
            height: 160,
            className: `w-full aspect-square rounded border border-border/40 bg-black/40 ${i ? `` : `hidden`}`,
          }),
          !i &&
            t &&
            (0, N.jsx)(`img`, {
              src: t,
              alt: n,
              className: `w-full aspect-square object-cover rounded border border-border/40`,
            }),
          !i &&
            !t &&
            (0, N.jsx)(`div`, {
              className: `w-full aspect-square rounded border border-border/40 bg-muted/20`,
            }),
        ],
      })
    );
  },
  H = ({ title: e, children: t, defaultOpen: n = !0 }) => {
    let [r, i] = (0, M.useState)(n);
    return (0, N.jsxs)(`div`, {
      className: `border-b border-border/60`,
      children: [
        (0, N.jsxs)(`button`, {
          onClick: () => i((e) => !e),
          className: `w-full flex items-center gap-1 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground`,
          children: [
            r ? (0, N.jsx)(ye, { size: 12 }) : (0, N.jsx)(se, { size: 12 }),
            e,
          ],
        }),
        r &&
          (0, N.jsx)(`div`, { className: `px-3 pb-3 space-y-3`, children: t }),
      ],
    });
  },
  st = ({ status: e }) =>
    (0, N.jsxs)(`span`, {
      className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-medium ${{ generating: `bg-amber-500/20 text-amber-300`, ready: `bg-emerald-500/20 text-emerald-300`, partial: `bg-orange-500/20 text-orange-300`, error: `bg-red-500/20 text-red-300` }[e]}`,
      children: [
        e === `generating` &&
          (0, N.jsx)(E, { size: 9, className: `animate-spin` }),
        e,
      ],
    }),
  ct = ({ sessionDir: e }) => {
    let t = p((e) => e.procParams.kitTileVariation) ?? 0.5,
      [n, i] = (0, M.useState)([]),
      a = (0, M.useMemo)(
        () => x(n.map((e) => ({ id: e.kit_id, label: e.name || e.kit_id }))),
        [n],
      ),
      [o, s] = (0, M.useState)(``),
      [c, l] = (0, M.useState)(``),
      [_, te] = (0, M.useState)(``),
      [se, ce] = (0, M.useState)(!0),
      [w, le] = (0, M.useState)(!1),
      [ue, T] = (0, M.useState)(!1),
      [D, pe] = (0, M.useState)(2),
      [ge, ye] = (0, M.useState)(``),
      [Se, Ce] = (0, M.useState)(``),
      [O, k] = (0, M.useState)(``),
      [A, we] = (0, M.useState)(!1),
      j = (0, M.useRef)(null),
      [Te, Ee] = (0, M.useState)(!1),
      P = De(`op:generate_level_kit`),
      Le = De(`op:regenerate_level_kit_category`),
      F = De(`mcp:generate_3d_asset_from_image`),
      Re = w ? 3 * Math.max(1, Math.min(3, D)) : 0,
      ze = P === null || !Re || F === null ? null : P + F * Re,
      [Be, I] = (0, M.useState)(null),
      [Ve, We] = (0, M.useState)(``),
      [Je, Ye] = (0, M.useState)(null),
      [Xe, Ze] = (0, M.useState)(null),
      [z, B] = (0, M.useState)(null),
      [V, ct] = (0, M.useState)(``),
      [lt, ut] = (0, M.useState)(2),
      [dt, ft] = (0, M.useState)(!0),
      [pt, mt] = (0, M.useState)(!1),
      [ht, U] = (0, M.useState)(null),
      [W, gt] = (0, M.useState)(``),
      _t = p((e) => e.procAssetPack),
      { toast: vt } = r(),
      G = (0, M.useCallback)(async () => {
        if (!e) return;
        let t = await h(e);
        t !== null && i(t);
      }, [e]);
    (0, M.useEffect)(() => {
      G();
      let e = () => void G();
      return (
        window.addEventListener(`sandscape-kits-updated`, e),
        () => window.removeEventListener(`sandscape-kits-updated`, e)
      );
    }, [G]);
    let yt = (0, M.useRef)(!1),
      bt = (0, M.useRef)(0);
    ((0, M.useEffect)(() => {
      let e = n.some((e) => e.status === `generating`);
      if (
        (yt.current &&
          !e &&
          window.dispatchEvent(new CustomEvent(`sandscape-kits-updated`)),
        (yt.current = e),
        !e)
      ) {
        bt.current = 0;
        return;
      }
      if (bt.current >= 120) return;
      let t = setInterval(() => {
        ((bt.current += 1), G());
      }, 5e3);
      return () => clearInterval(t);
    }, [n, G]),
      (0, M.useEffect)(
        () => () => {
          O && URL.revokeObjectURL(O);
        },
        [O],
      ));
    let xt = (0, M.useCallback)(() => {
        (Ce(``),
          k((e) => (e && URL.revokeObjectURL(e), ``)),
          j.current && (j.current.value = ``));
      }, []),
      St = async (t) => {
        let n = t.target.files?.[0];
        if (n) {
          if (!n.type.startsWith(`image/`) || n.type.includes(`svg`)) {
            (C.error(`Reference must be a raster image (PNG, JPEG, WebP)`),
              j.current && (j.current.value = ``));
            return;
          }
          we(!0);
          try {
            let t = await v(e, n);
            t?.success && t.reference_image
              ? (Ce(t.reference_image),
                k((e) => (e && URL.revokeObjectURL(e), URL.createObjectURL(n))))
              : C.error(t?.error || `Failed to upload reference image`);
          } finally {
            (we(!1), j.current && (j.current.value = ``));
          }
        }
      },
      Ct = async () => {
        if (!o.trim()) {
          C.error(`Give the kit a name`);
          return;
        }
        Ee(!0);
        try {
          let t = await ee(e, {
            name: o.trim(),
            theme: c.trim(),
            style_prompt: _.trim(),
            include_props: se,
            structural_3d: w,
            variants: D,
            ...(ue ? { texture_model: `flux_pro` } : {}),
            ...(ge ? { wear: ge } : {}),
            ...(Se ? { reference_image: Se } : {}),
            max_charge: P,
            max_3d_charge: F,
          });
          t?.success
            ? (C.success(`Generating kit "${o.trim()}"…`),
              s(``),
              xt(),
              await G())
            : Fe(vt, t, {
                title: `Kit generation failed`,
                fallback: `Failed to start kit generation`,
                variant: `destructive`,
              });
        } catch (e) {
          Fe(
            vt,
            { error: e instanceof Error ? e.message : String(e) },
            {
              title: `Kit generation failed`,
              fallback: `Failed to start kit generation`,
              variant: `destructive`,
            },
          );
        } finally {
          Ee(!1);
        }
      },
      wt = async (t, n, r) => {
        let i = await g(e, t.kit_id, {
          category: n,
          feedback: r,
          max_charge: n ? Le : P,
          max_3d_charge: F,
        });
        i?.success
          ? (C.success(n ? `Regenerating ${n}…` : `Regenerating kit…`),
            await G())
          : Fe(vt, i, {
              title: `Regenerate failed`,
              fallback: `Regenerate failed`,
              variant: `destructive`,
            });
      },
      Tt = async (t) => {
        Ye(t.kit_id);
        try {
          let n = await ae(e, t.kit_id),
            r = Object.keys(n.errors || {}).length;
          (n.updated
            ? (C.success(
                `Tiling enabled on ${n.updated} asset(s)` +
                  (r ? ` — ${r} source could not be measured` : ``),
              ),
              window.dispatchEvent(new CustomEvent(`sandscape-kits-updated`)))
            : r
              ? C.error(
                  `Could not measure any source (${r} error(s)) — re-import instead`,
                )
              : C.info(`Nothing to backfill — this kit already tiles`),
            await G());
        } catch (e) {
          C.error(e instanceof Error ? e.message : `Failed to enable tiling`);
        } finally {
          Ye(null);
        }
      },
      Et = async (t) => {
        Ze(t.kit_id);
        try {
          let n = await b(e, t.kit_id);
          if (n.added) {
            let e = Object.entries(n.categories)
              .map(([e, t]) => `${t} ${e}`)
              .join(`, `);
            (C.success(`Split by region: ${e}`),
              window.dispatchEvent(new CustomEvent(`sandscape-kits-updated`)));
          } else
            C.info(
              `Nothing to split — no imported piece names an arena or corridor folder`,
            );
          await G();
        } catch (e) {
          C.error(
            e instanceof Error ? e.message : `Failed to split kit regions`,
          );
        } finally {
          Ze(null);
        }
      },
      Dt = async (t) => {
        mt(!0);
        try {
          let n = await m(e, t.kit_id, {
            prompt: V.trim(),
            wall_variants: lt,
            include_missing: dt,
            max_charge: P,
          });
          if (!n.success) {
            C.error(n.error || `Failed to start variations`);
            return;
          }
          (C.success(
            `Creating "${n.kit_name}" — variations of "${t.name}" (${n.categories.length} categories)…`,
          ),
            B(null),
            ct(``),
            await G());
        } catch (e) {
          C.error(
            e instanceof Error ? e.message : `Failed to start variations`,
          );
        } finally {
          mt(!1);
        }
      },
      Ot = async (e) => {
        let t = ht;
        if (!t || !W.trim()) return;
        U(null);
        let n = W.trim();
        (gt(``), await wt(e, t.category, n));
      },
      kt = async (t) => {
        let n = await ne(e, t.kit_id, `${t.name} copy`);
        n?.success
          ? (C.success(`Kit duplicated`), await G())
          : C.error(n?.error || `Duplicate failed`);
      },
      At = async (t) => {
        let n = await f(e, t.kit_id);
        n?.success
          ? (C.success(`Kit deleted`),
            _t === t.kit_id && p.getState().setProcAssetPack(null),
            window.dispatchEvent(new CustomEvent(`sandscape-kits-updated`)),
            await G())
          : C.error(n?.error || `Delete failed`);
      },
      jt = async (t) => {
        let n = await re(e, t.kit_id, Ve.trim());
        n?.success
          ? (C.success(`Renamed`),
            I(null),
            window.dispatchEvent(new CustomEvent(`sandscape-kits-updated`)),
            await G())
          : C.error(n?.error || `Rename failed`);
      },
      Mt = (e) => {
        (p.getState().setProcAssetPack(e.kit_id),
          window.dispatchEvent(new CustomEvent(`sandscape-kits-updated`)),
          C.success(
            `"${e.name}" set as active kit — open the Level Editor and click “Replace with Assets”.`,
          ));
      },
      [Nt, K] = (0, M.useState)(!1),
      [q, J] = (0, M.useState)([]),
      [Pt, Ft] = (0, M.useState)(`Imported Kit`),
      [It, Lt] = (0, M.useState)(!1),
      [Rt, Y] = (0, M.useState)(!1),
      [zt, Bt] = (0, M.useState)(null),
      [X, Z] = (0, M.useState)(null),
      [Q, Vt] = (0, M.useState)(`rows`),
      Ht = (0, M.useCallback)(async () => {
        (K(!0), Vt(`rows`), Bt(null), Z(null), Y(!0));
        try {
          let t = ((await me.listAssets(et(e))).assets || [])
            .map((e) => ({
              name: e.asset_name || ``,
              path: e.model_3d_path || ``,
            }))
            .filter((e) => /\.(glb|gltf)$/i.test(e.path))
            .map((e) => ({
              ...e,
              path: e.path.replace(/^generated_assets\//, ``),
            }))
            .map((e) => {
              let { category: t, recognized: n } = He(e.path || e.name);
              return {
                source: e.path,
                label: e.name || e.path.split(`/`).pop() || e.path,
                category: t,
                weight: Ue(t, e.path || e.name),
                include: n,
                mode: `mesh`,
              };
            })
            .sort(
              (e, t) =>
                e.category.localeCompare(t.category) ||
                e.label.localeCompare(t.label),
            );
          (J(t), Z(t.length ? 0 : null));
        } catch {
          (C.error(`Could not list session assets`), J([]));
        } finally {
          Y(!1);
        }
      }, [e]),
      Ut = (0, M.useCallback)(async () => {
        (K(!0), Vt(`scene`), J([]), Z(null), Y(!0));
        try {
          let t = ((await he.getScenes(e)).scenes || [])
            .map((e) => ({
              name: String(e.scene_name || e.name || ``),
              assetId: e.asset_id,
            }))
            .filter((e) => !!e.name);
          (t.length || C.error(`No saved scenes in this session`), Bt(t));
        } catch {
          (C.error(`Could not list scenes`), Bt([]));
        } finally {
          Y(!1);
        }
      }, [e]),
      Wt = (0, M.useCallback)(
        async (t) => {
          Y(!0);
          try {
            let r = Qe((await he.loadScene(e, t.name, t.assetId))?.scene_data);
            if (!r.length) {
              C.error(`That scene places no importable models`);
              return;
            }
            let i = r
              .map((e) => {
                let { category: t, recognized: n } =
                  e.procKind && Ie.includes(e.procKind)
                    ? { category: e.procKind, recognized: !0 }
                    : He(e.source);
                return {
                  source: e.source,
                  label: e.label,
                  category: t,
                  weight: Ue(t, e.source),
                  include: n && !e.alreadyKitArt,
                  mode: Ge(t),
                  count: e.count,
                  alreadyKitArt: e.alreadyKitArt,
                };
              })
              .sort(
                (e, t) =>
                  e.category.localeCompare(t.category) ||
                  e.label.localeCompare(t.label),
              );
            (Ft(
              ie(
                `${t.name} Kit`,
                n.map((e) => e.name || ``),
              ),
            ),
              J(i),
              Z(i.length ? 0 : null),
              Vt(`rows`));
            let a = i.filter((e) => e.alreadyKitArt).length;
            a === i.length
              ? C.warning(
                  `That level is already built from kit art — pick a scene made from the game's own assets to harvest original surfaces.`,
                )
              : a &&
                C.info(
                  `${a} piece(s) are already kit art and were left unticked.`,
                );
          } catch (e) {
            C.error(
              e instanceof Error ? e.message : `Could not load that scene`,
            );
          } finally {
            Y(!1);
          }
        },
        [e],
      ),
      Gt = (0, M.useCallback)((e, t) => {
        J((n) =>
          n.map((n, r) => {
            if (r !== e) return n;
            let i = { ...n, ...t };
            return (
              t.category !== void 0 &&
                t.mode === void 0 &&
                (i.mode = L(i.category)
                  ? L(n.category)
                    ? n.mode
                    : Ge(i.category)
                  : `mesh`),
              i
            );
          }),
        );
      }, []),
      Kt = (0, M.useCallback)(async () => {
        let t = q
          .filter((e) => e.include)
          .map((e) => ({
            source: e.source,
            category: e.category,
            label: e.label,
            weight: e.weight,
            mode: L(e.category) ? e.mode : `mesh`,
          }));
        if (!t.length) {
          C.error(`Select at least one asset`);
          return;
        }
        Lt(!0);
        try {
          await y(e, Pt.trim() || `Imported Kit`, t);
          let n = t.filter((e) => e.mode === `box`).length;
          (C.success(
            n
              ? `Importing ${t.length} asset(s) — ${n} simplified to boxes…`
              : `Importing ${t.length} asset(s)…`,
          ),
            K(!1),
            await G());
        } catch (e) {
          C.error(e instanceof Error ? e.message : `Import failed`);
        } finally {
          Lt(!1);
        }
      }, [q, Pt, e, G]),
      qt = q.filter((e) => e.include).length,
      Jt = (0, M.useMemo)(() => {
        let e = new Map();
        q.forEach((t, n) => {
          if (!t.include) return;
          let r = e.get(t.category) ?? [];
          (r.push(n), e.set(t.category, r));
        });
        let n = Array(q.length).fill(null);
        for (let r of e.values()) {
          let e = r.map((e) => q[e].weight);
          r.forEach((r, i) => {
            n[r] = qe(e, i, t);
          });
        }
        return n;
      }, [q, t]),
      $ = `w-full bg-muted/30 border border-border/60 rounded-md px-2 py-1.5 text-[11px] outline-none focus:border-primary/60`;
    return (0, N.jsxs)(`div`, {
      className: `h-full overflow-y-auto bg-background text-foreground`,
      children: [
        (0, N.jsxs)(`div`, {
          className: `px-3 py-2.5 border-b border-border/60 flex items-center gap-2`,
          children: [
            (0, N.jsx)(d, { size: 14, className: `text-primary` }),
            (0, N.jsx)(`span`, {
              className: `text-[12px] font-semibold`,
              children: `Level Design Kit`,
            }),
          ],
        }),
        (0, N.jsxs)(H, {
          title: `Style Direction`,
          children: [
            (0, N.jsxs)(`p`, {
              className: `text-[10px] text-muted-foreground leading-relaxed`,
              children: [
                `Generate a styled modular kit from the `,
                (0, N.jsx)(`strong`, { children: `Greybox Lego Blocks` }),
                ` template. Structural pieces are textured unit blocks (perfect grid-snap) — or opt into high-fidelity 3D walls below; props are image→3D (opt-in).`,
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, N.jsx)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `Kit name`,
                }),
                (0, N.jsx)(`input`, {
                  className: $,
                  value: o,
                  placeholder: `Rusted Foundry`,
                  maxLength: 200,
                  onChange: (e) => s(e.target.value),
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, N.jsx)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `Theme`,
                }),
                (0, N.jsx)(`input`, {
                  className: $,
                  value: c,
                  placeholder: `industrial / dungeon / sci-fi`,
                  maxLength: 4e3,
                  onChange: (e) => l(e.target.value),
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, N.jsx)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `Style / material direction`,
                }),
                (0, N.jsx)(`textarea`, {
                  className: `${$} resize-none`,
                  rows: 3,
                  value: _,
                  maxLength: 4e3,
                  placeholder: `rusted metal panels, oil stains, amber rim lighting`,
                  onChange: (e) => te(e.target.value),
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, N.jsxs)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: [
                    `Style reference image `,
                    (0, N.jsx)(`span`, {
                      className: `opacity-70`,
                      children: `(optional)`,
                    }),
                  ],
                }),
                (0, N.jsx)(`input`, {
                  ref: j,
                  type: `file`,
                  accept: `image/png,image/jpeg,image/webp,image/bmp,image/gif`,
                  onChange: St,
                  className: `hidden`,
                }),
                Se
                  ? (0, N.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, N.jsx)(`img`, {
                          src: O,
                          alt: `style reference`,
                          className: `w-12 h-12 rounded border border-border/60 object-cover`,
                        }),
                        (0, N.jsx)(`div`, {
                          className: `flex-1 min-w-0`,
                          children: (0, N.jsx)(`p`, {
                            className: `text-[10px] text-muted-foreground leading-tight`,
                            children: `Drives the kit's colours & materials, combined with the prompt above.`,
                          }),
                        }),
                        (0, N.jsx)(`button`, {
                          onClick: xt,
                          title: `Remove reference image`,
                          className: `p-1 rounded text-muted-foreground hover:text-red-400 shrink-0`,
                          children: (0, N.jsx)(be, { size: 13 }),
                        }),
                      ],
                    })
                  : (0, N.jsxs)(`button`, {
                      onClick: () => j.current?.click(),
                      disabled: A,
                      className: `w-full flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] rounded-md border border-dashed border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 disabled:opacity-50`,
                      children: [
                        A
                          ? (0, N.jsx)(E, {
                              size: 13,
                              className: `animate-spin`,
                            })
                          : (0, N.jsx)(Me, { size: 13 }),
                        A ? `Uploading…` : `Upload a reference image`,
                      ],
                    }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2`,
              children: [
                (0, N.jsxs)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: [
                    `Variants per type `,
                    (0, N.jsx)(`span`, {
                      className: `opacity-70`,
                      children: `(more variety per category)`,
                    }),
                  ],
                }),
                (0, N.jsxs)(`select`, {
                  value: D,
                  onChange: (e) => pe(Number(e.target.value)),
                  className: `bg-muted/30 border border-border/60 rounded px-2 py-1 text-[11px] outline-none`,
                  children: [
                    (0, N.jsx)(`option`, { value: 1, children: `1` }),
                    (0, N.jsx)(`option`, { value: 2, children: `2` }),
                    (0, N.jsx)(`option`, { value: 3, children: `3` }),
                  ],
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2`,
              children: [
                (0, N.jsxs)(`label`, {
                  className: `text-[10px] text-muted-foreground`,
                  title: `Auto infers age from your theme/style words. Clean forbids rust/grime/decay even on 'metal' or 'structural' prompts; Weathered makes aging clearly visible and consistent across the whole kit.`,
                  children: [
                    `Surface age `,
                    (0, N.jsx)(`span`, {
                      className: `opacity-70`,
                      children: `(wear, rust, grime)`,
                    }),
                  ],
                }),
                (0, N.jsxs)(`select`, {
                  value: ge,
                  onChange: (e) => ye(e.target.value),
                  className: `bg-muted/30 border border-border/60 rounded px-2 py-1 text-[11px] outline-none`,
                  children: [
                    (0, N.jsx)(`option`, {
                      value: ``,
                      children: `Auto (from prompt)`,
                    }),
                    (0, N.jsx)(`option`, { value: `clean`, children: `Clean` }),
                    (0, N.jsx)(`option`, {
                      value: `weathered`,
                      children: `Weathered`,
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsxs)(`label`, {
              className: `flex items-center gap-2 text-[10px] text-muted-foreground cursor-pointer`,
              children: [
                (0, N.jsx)(`input`, {
                  type: `checkbox`,
                  checked: se,
                  onChange: (e) => ce(e.target.checked),
                }),
                `Generate detail props (pillar, prop, wall panel, light socket — placed with "Place props")`,
              ],
            }),
            (0, N.jsxs)(`label`, {
              className: `flex items-start gap-2 text-[10px] text-muted-foreground cursor-pointer`,
              children: [
                (0, N.jsx)(`input`, {
                  type: `checkbox`,
                  className: `mt-0.5`,
                  checked: w,
                  onChange: (e) => le(e.target.checked),
                }),
                (0, N.jsx)(`span`, {
                  children: `High-fidelity 3D walls (image→3D — experimental, slow). Walls/corridor/arena become real 3D relief; floors & ceilings stay textured. Falls back to a textured box if 3D fails.`,
                }),
              ],
            }),
            (0, N.jsxs)(`label`, {
              className: `flex items-start gap-2 text-[10px] text-muted-foreground cursor-pointer`,
              children: [
                (0, N.jsx)(`input`, {
                  type: `checkbox`,
                  className: `mt-0.5`,
                  checked: ue,
                  onChange: (e) => T(e.target.checked),
                }),
                (0, N.jsx)(`span`, {
                  children: `High-fidelity textures (flux_pro). Seamless albedo with no grain — slower & costlier per generation. Default is the fast model (faint grain, especially on smooth surfaces).`,
                }),
              ],
            }),
            (0, N.jsx)(Pe, {
              onClick: Ct,
              cost: P,
              maxCost: ze,
              label: `Generate Kit`,
              isLoading: Te,
              disabled: !o.trim(),
              className: `w-full`,
            }),
          ],
        }),
        (0, N.jsxs)(H, {
          title: `Use Existing Session Assets`,
          children: [
            (0, N.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground leading-relaxed`,
              children: `Build a kit from 3D assets already in this session — an imported game's modular walls, floors and props become a replacement pack directly, with no generation. Start from a saved level scene to import just the pieces that level actually uses, and simplify its walls, floors and ceilings to lightweight textured boxes that keep the original surfaces.`,
            }),
            (0, N.jsxs)(`div`, {
              className: `space-y-1.5`,
              children: [
                (0, N.jsxs)(`button`, {
                  onClick: () => void Ut(),
                  className: `w-full flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-medium rounded-md border border-border/60 hover:border-primary/50`,
                  children: [
                    (0, N.jsx)(u, { size: 13 }),
                    `Build kit from a level scene…`,
                  ],
                }),
                (0, N.jsxs)(`button`, {
                  onClick: () => void Ht(),
                  className: `w-full flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-medium rounded-md border border-border/60 hover:border-primary/50`,
                  children: [
                    (0, N.jsx)(Ne, { size: 13 }),
                    `Build kit from all session assets…`,
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, N.jsx)(je, {
          open: Nt,
          onOpenChange: (e) => {
            e || (K(!1), Z(null));
          },
          children: (0, N.jsxs)(ke, {
            className: `max-w-[min(1200px,95vw)] w-[95vw] h-[88vh] flex flex-col gap-3 p-5`,
            children: [
              (0, N.jsxs)(Oe, {
                className: `space-y-2`,
                children: [
                  (0, N.jsx)(Ae, {
                    className: `text-sm`,
                    children:
                      Q === `scene`
                        ? `Pick the level to harvest pieces from`
                        : `Build a kit from existing assets`,
                  }),
                  Q === `rows` &&
                    (0, N.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, N.jsx)(`label`, {
                          className: `text-[11px] text-muted-foreground shrink-0`,
                          children: `Kit name`,
                        }),
                        (0, N.jsx)(`input`, {
                          className: `${$} max-w-sm`,
                          value: Pt,
                          placeholder: `Imported Kit`,
                          onChange: (e) => Ft(e.target.value),
                        }),
                        (0, N.jsx)(`span`, { className: `flex-1` }),
                        (0, N.jsxs)(`span`, {
                          className: `text-[11px] text-muted-foreground`,
                          children: [qt, ` of `, q.length, ` selected`],
                        }),
                        (0, N.jsx)(`button`, {
                          className: `text-[11px] hover:text-foreground underline text-muted-foreground`,
                          onClick: () =>
                            J((e) => e.map((e) => ({ ...e, include: !0 }))),
                          children: `All`,
                        }),
                        (0, N.jsx)(`button`, {
                          className: `text-[11px] hover:text-foreground underline text-muted-foreground`,
                          onClick: () =>
                            J((e) => e.map((e) => ({ ...e, include: !1 }))),
                          children: `None`,
                        }),
                      ],
                    }),
                ],
              }),
              Q === `scene`
                ? Rt
                  ? (0, N.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-[11px] text-muted-foreground py-6`,
                      children: [
                        (0, N.jsx)(E, { size: 14, className: `animate-spin` }),
                        ` Reading scenes…`,
                      ],
                    })
                  : zt?.length
                    ? (0, N.jsx)(`div`, {
                        className: `flex-1 min-h-0 overflow-y-auto rounded border border-border/40
                              divide-y divide-border/30`,
                        children: zt.map((e) =>
                          (0, N.jsxs)(
                            `button`,
                            {
                              onClick: () => void Wt(e),
                              className: `w-full flex items-center gap-2 text-left px-3 py-2.5 text-[12px]
                               hover:bg-muted/40`,
                              title: e.name,
                              children: [
                                (0, N.jsx)(u, {
                                  size: 14,
                                  className: `text-muted-foreground shrink-0`,
                                }),
                                (0, N.jsx)(`span`, {
                                  className: `truncate`,
                                  children: e.name,
                                }),
                              ],
                            },
                            e.name,
                          ),
                        ),
                      })
                    : (0, N.jsx)(`p`, {
                        className: `text-[11px] text-muted-foreground py-4`,
                        children: `No saved scenes in this session.`,
                      })
                : Rt
                  ? (0, N.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-[11px] text-muted-foreground py-6`,
                      children: [
                        (0, N.jsx)(E, { size: 14, className: `animate-spin` }),
                        ` Reading assets…`,
                      ],
                    })
                  : q.length === 0
                    ? (0, N.jsx)(`p`, {
                        className: `text-[11px] text-muted-foreground py-4`,
                        children: `No 3D assets found.`,
                      })
                    : (0, N.jsxs)(`div`, {
                        className: `flex-1 min-h-0 flex gap-4`,
                        children: [
                          (0, N.jsx)(`div`, {
                            className: `flex-1 min-w-0 overflow-y-auto rounded border border-border/40 divide-y divide-border/30`,
                            children: q.map((t, n) =>
                              (0, N.jsxs)(
                                `div`,
                                {
                                  onClick: () => Z(n),
                                  className: `flex items-center gap-3 px-3 py-2 cursor-pointer
                                ${X === n ? `bg-primary/10` : `hover:bg-muted/30`}`,
                                  children: [
                                    (0, N.jsx)(`input`, {
                                      type: `checkbox`,
                                      checked: t.include,
                                      className: `shrink-0`,
                                      onClick: (e) => e.stopPropagation(),
                                      onChange: (e) =>
                                        Gt(n, { include: e.target.checked }),
                                    }),
                                    (0, N.jsx)(at, {
                                      url: S(e, t.source),
                                      alt: t.source,
                                      size: 56,
                                      active: X === n,
                                      onClick: () => Z(n),
                                    }),
                                    (0, N.jsxs)(`span`, {
                                      className: `flex-1 min-w-0 text-[11px]`,
                                      children: [
                                        (0, N.jsx)(`span`, {
                                          className: `block truncate`,
                                          title: t.source,
                                          children: t.label,
                                        }),
                                        (0, N.jsxs)(`span`, {
                                          className: `block truncate text-[10px] text-muted-foreground`,
                                          children: [
                                            t.count !== void 0 &&
                                              (0, N.jsxs)(N.Fragment, {
                                                children: [
                                                  `placed ×`,
                                                  t.count,
                                                  ` · `,
                                                ],
                                              }),
                                            t.source,
                                            t.alreadyKitArt &&
                                              (0, N.jsx)(`span`, {
                                                className: `ml-1 text-amber-500/90`,
                                                children: `⚠ already kit art — re-importing degrades it`,
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, N.jsx)(`select`, {
                                      value: t.category,
                                      onClick: (e) => e.stopPropagation(),
                                      onChange: (e) =>
                                        Gt(n, { category: e.target.value }),
                                      className: `bg-muted/30 border border-border/60 rounded px-1.5 py-1 text-[11px] outline-none`,
                                      children: Ie.map((e) =>
                                        (0, N.jsx)(
                                          `option`,
                                          { value: e, children: e },
                                          e,
                                        ),
                                      ),
                                    }),
                                    L(t.category)
                                      ? (0, N.jsxs)(`select`, {
                                          value: t.mode,
                                          onClick: (e) => e.stopPropagation(),
                                          onChange: (e) =>
                                            Gt(n, { mode: e.target.value }),
                                          title: `Simple box: bake this piece's surface onto a lightweight box (optimized, tiles cleanly). Keep mesh: reuse the original geometry.`,
                                          className: `bg-muted/30 border border-border/60 rounded px-1.5 py-1 text-[11px] outline-none`,
                                          children: [
                                            (0, N.jsx)(`option`, {
                                              value: `box`,
                                              children: `simple box`,
                                            }),
                                            (0, N.jsx)(`option`, {
                                              value: `mesh`,
                                              children: `keep mesh`,
                                            }),
                                          ],
                                        })
                                      : (0, N.jsx)(`span`, {
                                          className: `text-[10px] text-muted-foreground w-[72px] text-center`,
                                          children: `keeps mesh`,
                                        }),
                                    (0, N.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5 shrink-0`,
                                      children: [
                                        (0, N.jsx)(`select`, {
                                          value: Ke(t.weight),
                                          onClick: (e) => e.stopPropagation(),
                                          onChange: (e) =>
                                            Gt(n, {
                                              weight: Number(e.target.value),
                                            }),
                                          title: `How often this variant is picked among others of its category.
The weight is RELATIVE, so the share beside it is what actually lands in the level.`,
                                          className: `bg-muted/30 border border-border/60 rounded px-1.5 py-1 text-[11px] outline-none`,
                                          children: R.map((e) =>
                                            (0, N.jsx)(
                                              `option`,
                                              {
                                                value: e.value,
                                                children: e.label,
                                              },
                                              e.label,
                                            ),
                                          ),
                                        }),
                                        (0, N.jsx)(`span`, {
                                          className: `text-[10px] text-muted-foreground w-9 text-right tabular-nums`,
                                          title: `Estimated share of this category's pieces, given every ticked
variant and the level's Tile Variation setting.`,
                                          children:
                                            Jt[n] === null
                                              ? ``
                                              : `${Math.round(Jt[n] * 100)}%`,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.source + n,
                              ),
                            ),
                          }),
                          (0, N.jsx)(`div`, {
                            className: `w-[38%] max-w-[440px] shrink-0 flex flex-col gap-2`,
                            children:
                              X !== null && q[X]
                                ? (0, N.jsxs)(N.Fragment, {
                                    children: [
                                      (0, N.jsx)(
                                        $e,
                                        {
                                          url: S(e, q[X].source),
                                          className: `flex-1 min-h-[260px] rounded border border-border/40 bg-black/30
                                 overflow-hidden cursor-grab active:cursor-grabbing`,
                                        },
                                        q[X].source,
                                      ),
                                      (0, N.jsxs)(`div`, {
                                        className: `text-[11px] space-y-0.5`,
                                        children: [
                                          (0, N.jsx)(`div`, {
                                            className: `font-medium`,
                                            children: q[X].label,
                                          }),
                                          (0, N.jsx)(`div`, {
                                            className: `text-muted-foreground break-all`,
                                            children: q[X].source,
                                          }),
                                          (0, N.jsxs)(`div`, {
                                            className: `text-muted-foreground`,
                                            children: [
                                              q[X].category,
                                              ` · `,
                                              L(q[X].category) &&
                                              q[X].mode === `box`
                                                ? `simplified to a textured box`
                                                : `keeps its original mesh`,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, N.jsx)(`div`, {
                                    className: `flex-1 rounded border border-dashed border-border/40
                                  flex items-center justify-center text-[11px] text-muted-foreground
                                  text-center px-6`,
                                    children: `Select a row to preview the asset.`,
                                  }),
                          }),
                        ],
                      }),
              (0, N.jsxs)(`div`, {
                className: `flex gap-2 pt-1`,
                children: [
                  Q === `rows` &&
                    (0, N.jsxs)(`button`, {
                      onClick: () => void Kt(),
                      disabled: It || !qt,
                      className: `flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[12px] font-medium rounded-md bg-primary/90 text-primary-foreground hover:bg-primary disabled:opacity-50`,
                      children: [
                        It
                          ? (0, N.jsx)(E, {
                              size: 14,
                              className: `animate-spin`,
                            })
                          : (0, N.jsx)(Ne, { size: 14 }),
                        `Import `,
                        qt || ``,
                        ` asset`,
                        qt === 1 ? `` : `s`,
                      ],
                    }),
                  Q === `rows` &&
                    !!zt?.length &&
                    (0, N.jsx)(`button`, {
                      onClick: () => Vt(`scene`),
                      className: `px-4 py-2 text-[12px] rounded-md border border-border/60 hover:border-primary/50`,
                      children: `Back`,
                    }),
                  Q === `scene` && (0, N.jsx)(`span`, { className: `flex-1` }),
                  (0, N.jsx)(`button`, {
                    onClick: () => {
                      (K(!1), Z(null));
                    },
                    className: `px-4 py-2 text-[12px] rounded-md border border-border/60 hover:border-primary/50`,
                    children: `Cancel`,
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, N.jsx)(H, {
          title: `Kits (${n.length})`,
          children:
            n.length === 0
              ? (0, N.jsx)(`p`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: `No kits yet. Generate one above.`,
                })
              : (0, N.jsx)(`div`, {
                  className: `space-y-3`,
                  children: n.map((t) => {
                    let n = _t === t.kit_id,
                      r = tt.filter(
                        (e) =>
                          t.assets?.some((t) => t.category === e) ||
                          t.thumbnails?.[e],
                      ),
                      i =
                        t.source_template === `imported-session-assets` &&
                        !!t.assets?.length &&
                        t.assets.some((e) => e.authored_uv && !e.source_size),
                      o =
                        !!t.assets?.length &&
                        !t.assets.some((e) => rt.has(e.category)) &&
                        t.assets.some(
                          (e) =>
                            nt.has(e.category) &&
                            !!e.source &&
                            it.test(e.source),
                        );
                    return (0, N.jsxs)(
                      `div`,
                      {
                        className: `rounded-md border p-2 space-y-2 ${n ? `border-primary/70 bg-primary/5` : `border-border/60`}`,
                        children: [
                          (0, N.jsx)(`div`, {
                            className: `flex items-center gap-2`,
                            children:
                              Be === t.kit_id
                                ? (0, N.jsxs)(N.Fragment, {
                                    children: [
                                      (0, N.jsx)(`input`, {
                                        className: `${$} flex-1`,
                                        value: Ve,
                                        autoFocus: !0,
                                        onChange: (e) => We(e.target.value),
                                        onKeyDown: (e) => {
                                          (e.key === `Enter` && jt(t),
                                            e.key === `Escape` && I(null));
                                        },
                                      }),
                                      (0, N.jsx)(`button`, {
                                        onClick: () => void jt(t),
                                        className: `text-emerald-400 hover:text-emerald-300`,
                                        children: (0, N.jsx)(oe, { size: 13 }),
                                      }),
                                    ],
                                  })
                                : (0, N.jsxs)(N.Fragment, {
                                    children: [
                                      (0, N.jsx)(`span`, {
                                        className: `flex-1 text-[11px] font-medium truncate`,
                                        title: a.get(t.kit_id) ?? t.name,
                                        children: a.get(t.kit_id) ?? t.name,
                                      }),
                                      t.reference_image &&
                                        (0, N.jsx)(`img`, {
                                          src: S(e, t.reference_image),
                                          alt: `style reference`,
                                          title: `Styled from a reference image`,
                                          className: `w-5 h-5 rounded border border-border/60 object-cover shrink-0`,
                                        }),
                                      t.structural_3d &&
                                        (0, N.jsx)(`span`, {
                                          className: `px-1.5 py-0.5 rounded text-[9px] font-medium bg-violet-500/20 text-violet-300`,
                                          title: `High-fidelity 3D walls`,
                                          children: `3D`,
                                        }),
                                      (0, N.jsx)(st, { status: t.status }),
                                      (0, N.jsxs)(`button`, {
                                        onClick: () => Mt(t),
                                        disabled: !t.assets?.length,
                                        title: `Activate this whole kit as the replacement pack`,
                                        className: `flex items-center gap-1 px-2 py-1 text-[10px] rounded font-medium disabled:opacity-40 ${n ? `bg-primary text-primary-foreground` : `bg-primary/80 text-primary-foreground hover:bg-primary`}`,
                                        children: [
                                          n
                                            ? (0, N.jsx)(oe, { size: 11 })
                                            : (0, N.jsx)(d, { size: 11 }),
                                          n ? `Active` : `Set Active`,
                                        ],
                                      }),
                                      (0, N.jsxs)(`div`, {
                                        className: `flex items-center gap-0.5 shrink-0`,
                                        children: [
                                          (0, N.jsx)(`button`, {
                                            onClick: () => void wt(t),
                                            title: `Regenerate full kit`,
                                            className: `p-1 rounded text-muted-foreground hover:text-foreground`,
                                            children: (0, N.jsx)(fe, {
                                              size: 12,
                                            }),
                                          }),
                                          (0, N.jsx)(`button`, {
                                            onClick: () => {
                                              (B(
                                                z === t.kit_id
                                                  ? null
                                                  : t.kit_id,
                                              ),
                                                U(null));
                                            },
                                            disabled:
                                              !t.assets?.length ||
                                              t.status === `generating`,
                                            title: `Generate more variants styled from this kit's own textures (adds to the kit; costs coins)`,
                                            className: `p-1 rounded disabled:opacity-40 ${z === t.kit_id ? `text-primary` : `text-muted-foreground hover:text-foreground`}`,
                                            children: (0, N.jsx)(ve, {
                                              size: 12,
                                            }),
                                          }),
                                          (0, N.jsx)(`button`, {
                                            onClick: () => {
                                              (I(t.kit_id), We(t.name));
                                            },
                                            title: `Rename`,
                                            className: `p-1 rounded text-muted-foreground hover:text-foreground`,
                                            children: (0, N.jsx)(xe, {
                                              size: 12,
                                            }),
                                          }),
                                          (0, N.jsx)(`button`, {
                                            onClick: () => void kt(t),
                                            title: `Duplicate`,
                                            className: `p-1 rounded text-muted-foreground hover:text-foreground`,
                                            children: (0, N.jsx)(de, {
                                              size: 12,
                                            }),
                                          }),
                                          (0, N.jsx)(`button`, {
                                            onClick: () => void At(t),
                                            title: `Delete`,
                                            className: `p-1 rounded text-red-400 hover:text-red-300`,
                                            children: (0, N.jsx)(_e, {
                                              size: 12,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                          }),
                          o &&
                            (0, N.jsxs)(`div`, {
                              className: `space-y-1`,
                              children: [
                                (0, N.jsx)(`p`, {
                                  className: `text-[10px] leading-relaxed text-amber-400/90`,
                                  children: `Its arena and corridor art share one pool, so corridors draw arena slabs.`,
                                }),
                                (0, N.jsxs)(`button`, {
                                  onClick: () => void Et(t),
                                  disabled: Xe === t.kit_id,
                                  title: `Tag floors/ceilings/walls by the folder they were imported from, so each region keeps its own art (free, no generation, nothing is removed)`,
                                  className: `flex items-center gap-1 px-2 py-1 text-[10px] rounded font-medium bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 disabled:opacity-50`,
                                  children: [
                                    Xe === t.kit_id
                                      ? (0, N.jsx)(E, {
                                          size: 11,
                                          className: `animate-spin`,
                                        })
                                      : (0, N.jsx)(d, { size: 11 }),
                                    `Split by region`,
                                  ],
                                }),
                              ],
                            }),
                          i &&
                            (0, N.jsxs)(`div`, {
                              className: `space-y-1`,
                              children: [
                                (0, N.jsx)(`p`, {
                                  className: `text-[10px] leading-relaxed text-amber-400/90`,
                                  children: `Imported before tile support — its walls and floors still stretch one panel across each run.`,
                                }),
                                (0, N.jsxs)(`button`, {
                                  onClick: () => void Tt(t),
                                  disabled: Je === t.kit_id,
                                  title: `Re-measure the source assets so pieces tile instead of stretching (free, no generation)`,
                                  className: `flex items-center gap-1 px-2 py-1 text-[10px] rounded font-medium bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 disabled:opacity-50`,
                                  children: [
                                    Je === t.kit_id
                                      ? (0, N.jsx)(E, {
                                          size: 11,
                                          className: `animate-spin`,
                                        })
                                      : (0, N.jsx)(d, { size: 11 }),
                                    `Enable tiling`,
                                  ],
                                }),
                              ],
                            }),
                          r.length > 0 &&
                            (0, N.jsx)(`div`, {
                              className: `grid grid-cols-4 gap-1`,
                              children: r.map((n) => {
                                let r = t.assets?.find((e) => e.category === n),
                                  i =
                                    t.assets?.filter((e) => e.category === n)
                                      .length ?? 0;
                                return (0, N.jsxs)(
                                  `div`,
                                  {
                                    className: `relative group`,
                                    title: `${n}${i > 1 ? ` — ${i} variants` : ``}`,
                                    children: [
                                      (0, N.jsx)(ot, {
                                        assetUrl: r ? S(e, r.file) : void 0,
                                        conceptUrl: t.thumbnails?.[n]
                                          ? S(e, t.thumbnails[n])
                                          : void 0,
                                        category: n,
                                      }),
                                      (0, N.jsxs)(`div`, {
                                        className: `absolute inset-0 hidden group-hover:flex items-center justify-center gap-1 bg-black/60 rounded text-white`,
                                        children: [
                                          (0, N.jsx)(`button`, {
                                            onClick: () => void wt(t, n),
                                            title: `Regenerate ${n}`,
                                            className: `p-1 hover:text-primary`,
                                            children: (0, N.jsx)(fe, {
                                              size: 12,
                                            }),
                                          }),
                                          (0, N.jsx)(`button`, {
                                            onClick: () => {
                                              (U({
                                                kitId: t.kit_id,
                                                category: n,
                                              }),
                                                gt(``));
                                            },
                                            title: `Modify ${n} with a prompt`,
                                            className: `p-1 hover:text-primary`,
                                            children: (0, N.jsx)(xe, {
                                              size: 12,
                                            }),
                                          }),
                                        ],
                                      }),
                                      i > 1 &&
                                        (0, N.jsx)(`span`, {
                                          className: `absolute top-0 right-0 px-1 text-[7px] rounded-bl bg-black/60 text-white`,
                                          children: i,
                                        }),
                                      (0, N.jsx)(`span`, {
                                        className: `absolute bottom-0 inset-x-0 text-[7px] text-center bg-black/50 text-white truncate px-0.5`,
                                        children: n,
                                      }),
                                    ],
                                  },
                                  n,
                                );
                              }),
                            }),
                          z === t.kit_id &&
                            (0, N.jsxs)(`div`, {
                              className: `space-y-1.5 rounded border border-border/60 p-1.5`,
                              children: [
                                (0, N.jsx)(`p`, {
                                  className: `text-[10px] text-muted-foreground leading-relaxed`,
                                  children: `Creates a copy of this kit with newly designed pieces added: same materials and palette, but a fresh layout and detailing rather than a re-skin. Your direction leads the generation. Costs coins.`,
                                }),
                                (0, N.jsx)(`textarea`, {
                                  className: `${$} w-full h-12 resize-none`,
                                  value: V,
                                  autoFocus: !0,
                                  placeholder: `What should change? e.g. "more industrial, vertical ribbing, blue accents" — leave blank for a free reinterpretation`,
                                  onChange: (e) => ct(e.target.value),
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, N.jsx)(`label`, {
                                      className: `text-[10px] text-muted-foreground`,
                                      children: `Variants`,
                                    }),
                                    (0, N.jsx)(`select`, {
                                      className: `${$} w-14`,
                                      value: lt,
                                      onChange: (e) =>
                                        ut(Number(e.target.value)),
                                      children: [1, 2, 3].map((e) =>
                                        (0, N.jsx)(
                                          `option`,
                                          { value: e, children: e },
                                          e,
                                        ),
                                      ),
                                    }),
                                    (0, N.jsxs)(`label`, {
                                      className: `flex items-center gap-1 text-[10px] text-muted-foreground`,
                                      title: `Also generate art for categories this kit has none of — the pieces still showing as greybox in a level.`,
                                      children: [
                                        (0, N.jsx)(`input`, {
                                          type: `checkbox`,
                                          checked: dt,
                                          onChange: (e) => ft(e.target.checked),
                                        }),
                                        `Fill missing categories`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `flex items-center gap-1`,
                                  children: [
                                    (0, N.jsxs)(`button`, {
                                      onClick: () => void Dt(t),
                                      disabled: pt,
                                      className: `flex items-center gap-1 px-2 py-1 text-[10px] rounded bg-primary/80 text-primary-foreground hover:bg-primary disabled:opacity-40`,
                                      children: [
                                        pt
                                          ? (0, N.jsx)(E, {
                                              size: 11,
                                              className: `animate-spin`,
                                            })
                                          : (0, N.jsx)(ve, { size: 11 }),
                                        `Generate Variations`,
                                      ],
                                    }),
                                    (0, N.jsx)(`button`, {
                                      onClick: () => B(null),
                                      className: `px-2 py-1 text-[10px] rounded border border-border/60 text-muted-foreground`,
                                      children: `Cancel`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ht?.kitId === t.kit_id &&
                            (0, N.jsxs)(`div`, {
                              className: `flex items-center gap-1`,
                              children: [
                                (0, N.jsx)(`input`, {
                                  className: `${$} flex-1`,
                                  value: W,
                                  autoFocus: !0,
                                  placeholder: `Modify ${ht.category} — e.g. "darker, more rust"`,
                                  onChange: (e) => gt(e.target.value),
                                  onKeyDown: (e) => {
                                    (e.key === `Enter` && Ot(t),
                                      e.key === `Escape` && U(null));
                                  },
                                }),
                                (0, N.jsx)(`button`, {
                                  onClick: () => void Ot(t),
                                  disabled: !W.trim(),
                                  className: `px-2 py-1 text-[10px] rounded bg-primary/80 text-primary-foreground hover:bg-primary disabled:opacity-40`,
                                  children: `Apply`,
                                }),
                                (0, N.jsx)(`button`, {
                                  onClick: () => U(null),
                                  className: `px-2 py-1 text-[10px] rounded border border-border/60 text-muted-foreground`,
                                  children: `✕`,
                                }),
                              ],
                            }),
                          t.errors &&
                            Object.keys(t.errors).length > 0 &&
                            (0, N.jsx)(`p`, {
                              className: `text-[9px] text-red-400`,
                              title: Object.entries(t.errors).map(
                                ([e, t]) => `${e}: ${t}`,
                              ).join(`
`),
                              children: Object.entries(t.errors)
                                .map(([e, t]) =>
                                  e === `_dispatch` ? String(t) : `${e}: ${t}`,
                                )
                                .join(` · `),
                            }),
                          t.three_d &&
                            t.three_d.delivered < t.three_d.planned &&
                            (0, N.jsxs)(`p`, {
                              className: `text-[9px] text-amber-400/90`,
                              title: `These pieces were quoted as high-fidelity 3D but fell back to textured boxes. Regenerate to retry them.`,
                              children: [
                                t.three_d.delivered,
                                `/`,
                                t.three_d.planned,
                                ` 3D pieces delivered`,
                              ],
                            }),
                          t.degraded &&
                            t.degraded.length > 0 &&
                            (0, N.jsxs)(`p`, {
                              className: `text-[9px] text-amber-400/90`,
                              title: `Image generation was unavailable, so these used a plain placeholder texture. Regenerate the category (or the kit) to retry.`,
                              children: [
                                `Placeholder texture: `,
                                t.degraded.join(`, `),
                                ` — regenerate to retry`,
                              ],
                            }),
                        ],
                      },
                      t.kit_id,
                    );
                  }),
                }),
        }),
        (0, N.jsx)(H, {
          title: `How it works`,
          defaultOpen: !1,
          children: (0, N.jsxs)(`ol`, {
            className: `text-[10px] text-muted-foreground leading-relaxed list-decimal pl-3 space-y-1`,
            children: [
              (0, N.jsxs)(`li`, {
                children: [
                  `Enter a theme + style and click `,
                  (0, N.jsx)(`strong`, { children: `Generate Kit` }),
                  `.`,
                ],
              }),
              (0, N.jsx)(`li`, {
                children: `Each greybox category gets a styled, unit-authored GLB.`,
              }),
              (0, N.jsxs)(`li`, {
                children: [
                  `Click `,
                  (0, N.jsx)(`strong`, { children: `Set Active` }),
                  ` on a finished kit.`,
                ],
              }),
              (0, N.jsxs)(`li`, {
                children: [
                  `Open the `,
                  (0, N.jsx)(`strong`, { children: `Level Editor` }),
                  ` → Generate panel → `,
                  (0, N.jsx)(`strong`, { children: `Replace with Assets` }),
                  `.`,
                ],
              }),
              (0, N.jsxs)(`li`, {
                children: [
                  `Revert anytime with `,
                  (0, N.jsx)(`strong`, { children: `Revert to Blockout` }),
                  `. The layout never changes.`,
                ],
              }),
              (0, N.jsxs)(`li`, {
                children: [
                  `Regenerated one category after applying? In the Level Editor, `,
                  (0, N.jsx)(`strong`, { children: `Revert that category` }),
                  ` then `,
                  (0, N.jsx)(`strong`, { children: `Replace` }),
                  ` it (Replace skips pieces that are already assets).`,
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
