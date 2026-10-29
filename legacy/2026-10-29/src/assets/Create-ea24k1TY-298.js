// Create-ea24k1TY 298 — classname
// Lines 105239-105954 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function Zve({ assets: e, sessionDir: t, isActive: n, refreshAssets: r }) {
  let { portalTarget: i, requestedAsset: a, consumeRequestedAsset: o } = ie(),
    { selectNode: s } = Pc(),
    { toast: c } = u(),
    l = sn(`mcp:edit_image`),
    d = (0, X.useMemo)(() => {
      let t = [];
      for (let n of e) {
        let e = n.id ?? n.asset_name;
        if (e)
          if (Al(n.asset_type) === `2d`) {
            let r =
              n.concept_art_path || (n.type === `image` ? n.path : void 0);
            t.push({
              key: `2d:${e}`,
              assetId: e,
              asset: n,
              imagePath: r,
              variant: `asset`,
              groupLabel: jl(n.asset_type).label,
            });
          } else
            n.concept_art_path &&
              t.push({
                key: `concept:${e}`,
                assetId: e,
                asset: n,
                imagePath: n.concept_art_path,
                variant: `concept`,
                groupLabel: `Concept Art`,
              });
      }
      return t;
    }, [e]),
    [f, m] = (0, X.useState)(null),
    [h, g] = (0, X.useState)(``),
    _ = (0, X.useRef)(null),
    v = (0, X.useCallback)((e) => {
      ((_.current = e), m(e));
    }, []),
    y = (0, X.useMemo)(() => d.find((e) => e.key === f) || null, [d, f]);
  (0, X.useEffect)(() => {
    if (d.length === 0) return;
    if (n) {
      let e = o(`image`);
      if (e) {
        let t = d.find(
          (t) => t.assetId === e.assetId || t.asset.asset_name === e.assetId,
        );
        if (t) {
          v(t.key);
          return;
        }
        c({
          title: `${e.assetId} is not editable in the Image Editor`,
          description: `The Image Editor opens 2D images and concept art only.`,
        });
        return;
      }
    }
    let e = _.current;
    if (e && d.some((t) => t.key === e)) return;
    let t = d.find((e) => e.imagePath) || d[0];
    v(t ? t.key : null);
  }, [d, n, a, o, f, v, c]);
  let b = (0, X.useMemo)(() => {
      let e = h.trim().toLowerCase(),
        t = new Map();
      for (let n of d) {
        if (e && !n.asset.asset_name.toLowerCase().includes(e)) continue;
        let r = t.get(n.groupLabel) || [];
        (r.push(n), t.set(n.groupLabel, r));
      }
      return Array.from(t.entries());
    }, [d, h]),
    x = (0, X.useRef)(null),
    [S, C] = (0, X.useState)(!1),
    [w, T] = (0, X.useState)(!1);
  (0, X.useEffect)(() => {
    let e = x.current;
    if (!e) return;
    let t = new ResizeObserver(() => {
      let t = e.clientWidth;
      (C(t > 0 && t < Yve), T(t > 0 && t < Xve));
    });
    return (t.observe(e), () => t.disconnect());
  }, []);
  let E = (0, X.useRef)(null),
    [D, O] = (0, X.useState)(1),
    [k, A] = (0, X.useState)({ x: 0, y: 0 }),
    [j, M] = (0, X.useState)(null),
    N = (0, X.useRef)(null),
    P = (0, X.useCallback)(() => {
      let e = E.current,
        t = ge.current;
      if (!e || !t || !t.width || !t.height) {
        (O(1), A({ x: 0, y: 0 }));
        return;
      }
      let n = 0.94,
        r = Math.min(
          (e.clientWidth * n) / t.width,
          (e.clientHeight * n) / t.height,
        );
      (O(Number.isFinite(r) && r > 0 ? Math.min(1, r) : 1), A({ x: 0, y: 0 }));
    }, []),
    F =
      y?.variant === `concept` || Al(y?.asset.asset_type) === `2d`
        ? `concept_art_path`
        : ``,
    I = y && F ? Rve(y.asset, F) : [],
    [L, R] = (0, X.useState)(null);
  (0, X.useEffect)(() => {
    R(null);
  }, [f]);
  let z = y?.imagePath,
    B = L || z,
    V = !!L && L !== z,
    H =
      y && B
        ? jr.getAssetUrl(t, B, { version: y.asset.concept_art_version })
        : null,
    ee = B ? B.split(`/`).pop() || B : null,
    [W, G] = (0, X.useState)(j9),
    [te, K] = (0, X.useState)(`clean`),
    ne = (0, X.useRef)(new Map()),
    re = (0, X.useRef)(null),
    ae = (0, X.useRef)(!0);
  (0, X.useEffect)(
    () => (
      (ae.current = !0),
      () => {
        ae.current = !1;
      }
    ),
    [],
  );
  let [oe, se] = (0, X.useState)(null);
  y &&
    oe !== y.key &&
    (se(y.key),
    G(Bve(y.asset.image_state)),
    ne.current.delete(y.assetId),
    K(`clean`));
  let [q, ce] = (0, X.useState)(null),
    [le, ue] = (0, X.useState)(null);
  (0, X.useEffect)(() => {
    let e = !1;
    if ((ce(null), ue(null), M(null), !H)) return;
    let t = new AbortController();
    return (
      (async () => {
        try {
          let n = await Hve(H, t.signal);
          if (e) return;
          (ce(n), M({ w: n.width, h: n.height }));
        } catch (n) {
          if (e || t.signal.aborted) return;
          ue(n instanceof Error ? n.message : `Could not load image`);
        }
      })(),
      () => {
        ((e = !0), t.abort());
      }
    );
  }, [H]);
  let [de, fe] = (0, X.useState)(!1),
    [pe, me] = (0, X.useState)(null),
    he = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    (fe(!1), me(null));
  }, [f]);
  let ge = (0, X.useRef)(null),
    _e = (0, X.useMemo)(
      () =>
        de
          ? {
              crop: null,
              rotate_deg: W.rotate_deg,
              flip_h: W.flip_h,
              flip_v: W.flip_v,
              adjustments: W.adjustments,
            }
          : W,
      [de, W],
    );
  ((0, X.useEffect)(() => {
    let e = ge.current;
    if (!e || !q) return;
    let t = P9(q, _e);
    ((e.width = t.width), (e.height = t.height));
    let n = e.getContext(`2d`);
    n && n.drawImage(t, 0, 0);
  }, [q, _e]),
    (0, X.useEffect)(() => {
      q && P();
    }, [q, P]));
  let ve = !!y && !!q && !V,
    ye = !N9(W),
    [be, xe] = (0, X.useState)(0),
    Ce = y?.assetId ?? null,
    we = (0, X.useRef)(null);
  (0, X.useEffect)(() => {
    we.current = Ce;
  }, [Ce]);
  let Te = (0, X.useCallback)(async (e, t) => {
      let { sessionId: n, state: r, bmp: i } = t,
        a = JSON.stringify(r),
        o = (t) => {
          ae.current && we.current === e && t();
        };
      o(() => K(`saving`));
      let s = !1;
      try {
        if ((await L9.saveImageState(n, e, r)).success) {
          let t = N9(r) || !i ? null : await Uve(i, r);
          s = (await L9.bakeImage(n, e, r, t)).success;
        }
      } catch (e) {
        (console.error(`[ImageEditor] autosave/bake failed:`, e), (s = !1));
      }
      (s && ne.current.set(e, a),
        !re.current?.hasPending(e) &&
          (o(() => K(s ? `clean` : `error`)), ae.current && xe((e) => e + 1)));
    }, []),
    Ee = (0, X.useMemo)(() => i9(Te), [Te]);
  ((re.current = Ee),
    (0, X.useEffect)(() => {
      if (!ve || !Ce) return;
      let e = U9(t),
        n = JSON.stringify(W),
        r = ne.current.get(Ce);
      if (r === void 0) {
        ne.current.set(Ce, n);
        return;
      }
      if (n === r) return;
      let i = W,
        a = q,
        o = setTimeout(() => {
          Ee.push(Ce, { sessionId: e, state: i, bmp: a });
        }, Jve);
      return () => clearTimeout(o);
    }, [W, ve, Ce, t, q, Ee, be]));
  let De = (0, X.useCallback)((e) => {
      G((t) => ({
        ...t,
        rotate_deg: (((t.rotate_deg + e * 90) % 360) + 360) % 360,
      }));
    }, []),
    Oe = (0, X.useCallback)((e) => {
      G((t) =>
        e === `h` ? { ...t, flip_h: !t.flip_h } : { ...t, flip_v: !t.flip_v },
      );
    }, []),
    ke = (0, X.useCallback)((e, t) => {
      G((n) => ({ ...n, adjustments: { ...n.adjustments, [e]: t } }));
    }, []),
    Ae = (0, X.useCallback)((e) => {
      G((t) => ({ ...t, adjustments: { ...t.adjustments, [e]: 1 } }));
    }, []),
    je = (0, X.useCallback)(() => {
      G((e) => ({ ...e, crop: null }));
    }, []),
    Me = (0, X.useCallback)(() => {
      G({ ...j9, adjustments: { ...j9.adjustments } });
    }, []),
    Ne = (0, X.useCallback)(() => {
      let e = ge.current;
      if (!e || !pe || pe.w < 4 || pe.h < 4) {
        (fe(!1), me(null));
        return;
      }
      let t = e.getBoundingClientRect(),
        n = (pe.x - t.left) / t.width,
        r = (pe.y - t.top) / t.height,
        i = n + pe.w / t.width,
        a = r + pe.h / t.height,
        o = W.rotate_deg === 90 || W.rotate_deg === 270,
        s = e.width,
        c = e.height,
        l = o ? c : s,
        u = o ? s : c,
        d = (-W.rotate_deg * Math.PI) / 180,
        f = Math.round(Math.cos(d)),
        p = Math.round(Math.sin(d)),
        m = (e, t) => {
          let n = e * s - s / 2,
            r = t * c - c / 2;
          (W.flip_h && (n = -n), W.flip_v && (r = -r));
          let i = n * f - r * p,
            a = n * p + r * f;
          return { a: (i + l / 2) / l, b: (a + u / 2) / u };
        },
        h = m(n, r),
        g = m(i, a),
        _ = (e) => Math.min(1, Math.max(0, e)),
        v = _(Math.min(h.a, g.a)),
        y = _(Math.min(h.b, g.b)),
        b = Math.min(1 - v, Math.max(0.01, Math.abs(g.a - h.a))),
        x = Math.min(1 - y, Math.max(0.01, Math.abs(g.b - h.b)));
      (G((e) => ({ ...e, crop: { x: v, y, width: b, height: x } })),
        fe(!1),
        me(null));
    }, [pe, W.rotate_deg, W.flip_h, W.flip_v]),
    Pe = (0, X.useCallback)(() => {
      (fe(!1), me(null));
    }, []),
    Fe = (0, X.useCallback)((e) => {
      (e.preventDefault(),
        O((t) => Math.min(8, Math.max(0.1, t * (e.deltaY < 0 ? 1.1 : 0.9)))));
    }, []),
    Ie = (0, X.useCallback)(
      (e) => {
        if (de) {
          ((he.current = { x: e.clientX, y: e.clientY }),
            me({ x: e.clientX, y: e.clientY, w: 0, h: 0 }),
            e.target.setPointerCapture(e.pointerId));
          return;
        }
        ((N.current = { x: e.clientX, y: e.clientY, ox: k.x, oy: k.y }),
          e.target.setPointerCapture(e.pointerId));
      },
      [de, k],
    ),
    Le = (0, X.useCallback)(
      (e) => {
        if (de) {
          let t = he.current;
          if (!t) return;
          let n = Math.min(t.x, e.clientX),
            r = Math.min(t.y, e.clientY),
            i = Math.abs(e.clientX - t.x),
            a = Math.abs(e.clientY - t.y);
          me({ x: n, y: r, w: i, h: a });
          return;
        }
        let t = N.current;
        t && A({ x: t.ox + (e.clientX - t.x), y: t.oy + (e.clientY - t.y) });
      },
      [de],
    ),
    Re = (0, X.useCallback)((e) => {
      ((he.current = null),
        (N.current = null),
        e.target.releasePointerCapture?.(e.pointerId));
    }, []),
    [ze, Be] = (0, X.useState)(``),
    [Ve, He] = (0, X.useState)(!1),
    Ue = (0, X.useCallback)(async () => {
      if (!y || !ze.trim()) return;
      let e = U9(t);
      He(!0);
      try {
        let t = await L9.aiEditImage(e, y.assetId, ze.trim());
        if (!t.success) {
          cn(c, t, {
            title: `Image edit failed`,
            fallback: `The AI edit did not complete.`,
          });
          return;
        }
        (c({ title: `Image edited`, description: `Saved as a new version.` }),
          Be(``),
          await r?.());
      } catch (e) {
        cn(
          c,
          { success: !1, error: e instanceof Error ? e.message : String(e) },
          {
            title: `Image edit failed`,
            fallback: `The AI edit did not complete.`,
          },
        );
      } finally {
        He(!1);
      }
    }, [y, ze, t, c, r]),
    We = (0, Z.jsxs)(`div`, {
      className: `flex flex-col h-full bg-card`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `p-2 border-b border-border`,
          children: (0, Z.jsxs)(`div`, {
            className: `relative`,
            children: [
              (0, Z.jsx)(Gr, {
                className: `absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground`,
              }),
              (0, Z.jsx)(`input`, {
                value: h,
                onChange: (e) => g(e.target.value),
                placeholder: `Search images`,
                className: `w-full pl-7 pr-2 py-1.5 text-xs rounded-md bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40`,
              }),
            ],
          }),
        }),
        (0, Z.jsxs)(`div`, {
          className: `flex-1 overflow-y-auto p-2 space-y-3`,
          children: [
            b.length === 0 &&
              (0, Z.jsx)(`p`, {
                className: `text-xs text-muted-foreground px-1 py-4 text-center`,
                children: `No images yet.`,
              }),
            b.map(([e, t]) =>
              (0, Z.jsxs)(
                `div`,
                {
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `text-[10px] uppercase tracking-wide text-muted-foreground px-1 mb-1`,
                      children: e,
                    }),
                    (0, Z.jsx)(`div`, {
                      className: `space-y-0.5`,
                      children: t.map((e) =>
                        (0, Z.jsxs)(
                          `button`,
                          {
                            onClick: () => v(e.key),
                            className: p(
                              `w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left text-xs transition-colors`,
                              e.key === f
                                ? `bg-primary/15 text-foreground`
                                : `text-muted-foreground hover:bg-accent hover:text-foreground`,
                            ),
                            children: [
                              (0, Z.jsx)(`span`, {
                                className: p(
                                  `h-1.5 w-1.5 rounded-full shrink-0`,
                                  e.imagePath
                                    ? `bg-emerald-400`
                                    : `bg-muted-foreground/40`,
                                ),
                              }),
                              (0, Z.jsx)(`span`, {
                                className: `truncate`,
                                children: e.asset.asset_name,
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                },
                e,
              ),
            ),
          ],
        }),
      ],
    }),
    Ge = `p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none`,
    Ke =
      te === `saving`
        ? {
            label: `Saving`,
            className: `border-sky-500/40 text-sky-300 bg-sky-500/10`,
            Icon: J,
            spin: !0,
            filled: !1,
          }
        : te === `error`
          ? {
              label: `Not saved`,
              className: `border-red-500/40 text-red-300 bg-red-500/10`,
              Icon: U,
              spin: !1,
              filled: !1,
            }
          : ye
            ? {
                label: `Edited`,
                className: `border-amber-500/40 text-amber-300 bg-amber-500/10`,
                Icon: Se,
                spin: !1,
                filled: !0,
              }
            : {
                label: `Original`,
                className: `border-gray-600/40 text-gray-400 bg-gray-800/40`,
                Icon: Se,
                spin: !1,
                filled: !1,
              };
  return (0, Z.jsxs)(`div`, {
    className: `flex h-full`,
    children: [
      n !== !1 && i && (0, js.createPortal)(We, i),
      n !== !1 &&
        !i &&
        (0, Z.jsx)(`div`, {
          className: `w-56 flex-shrink-0 border-r border-border`,
          children: We,
        }),
      (0, Z.jsxs)(`div`, {
        ref: x,
        className: `flex-1 flex flex-col min-w-0`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: p(
              `flex-1 flex min-w-0 min-h-0`,
              S ? `flex-col` : `flex-row`,
            ),
            children: [
              (0, Z.jsxs)(`div`, {
                className: `flex-1 flex flex-col min-w-0 min-h-0`,
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 px-3 py-2 border-b border-border bg-background/50 shrink-0`,
                    children: [
                      (0, Z.jsx)(`button`, {
                        onClick: () => O((e) => Math.max(0.1, e * 0.9)),
                        className: Ge,
                        title: `Zoom out`,
                        children: (0, Z.jsx)(us, { className: `h-4 w-4` }),
                      }),
                      (0, Z.jsxs)(`span`, {
                        className: `text-[11px] font-mono text-muted-foreground w-11 text-center`,
                        children: [Math.round(D * 100), `%`],
                      }),
                      (0, Z.jsx)(`button`, {
                        onClick: () => O((e) => Math.min(8, e * 1.1)),
                        className: Ge,
                        title: `Zoom in`,
                        children: (0, Z.jsx)(ls, { className: `h-4 w-4` }),
                      }),
                      (0, Z.jsx)(`button`, {
                        onClick: P,
                        className: Ge,
                        title: `Fit`,
                        children: (0, Z.jsx)(gn, { className: `h-4 w-4` }),
                      }),
                      (0, Z.jsx)(`div`, { className: `flex-1` }),
                      y &&
                        (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsxs)(`button`, {
                              onClick: Me,
                              disabled: !ve || !ye,
                              title: `Discard every edit and go back to the original`,
                              className: `flex items-center gap-1 shrink-0 whitespace-nowrap px-2 py-1 rounded text-xs text-muted-foreground hover:bg-accent hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors`,
                              children: [
                                (0, Z.jsx)(Sn, { className: `h-3.5 w-3.5` }),
                                !w && `Reset all`,
                              ],
                            }),
                            (0, Z.jsxs)(`span`, {
                              className: p(
                                `inline-flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-medium`,
                                Ke.className,
                              ),
                              title: `Whether the in-game image reflects your edits`,
                              children: [
                                (0, Z.jsx)(Ke.Icon, {
                                  className: p(
                                    `h-3 w-3`,
                                    Ke.spin && `animate-spin`,
                                  ),
                                  fill: Ke.filled ? `currentColor` : `none`,
                                }),
                                Ke.label,
                              ],
                            }),
                            (0, Z.jsx)(`div`, {
                              className: `w-px h-5 bg-border mx-1`,
                            }),
                            (0, Z.jsxs)(`button`, {
                              onClick: () => s(`assets`),
                              className: `flex items-center gap-1.5 shrink-0 whitespace-nowrap px-1 py-1 rounded text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition-colors`,
                              title: `Open source asset in the Assets folder`,
                              children: [
                                (0, Z.jsx)(ci, { className: `h-3.5 w-3.5` }),
                                !w && `Open in folder`,
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, Z.jsxs)(`div`, {
                    ref: E,
                    title: de
                      ? `Drag a crop region`
                      : `Scroll to zoom, drag to move`,
                    className: `flex-1 relative overflow-hidden bg-[#0d0d12] min-h-0`,
                    onWheel: Fe,
                    onPointerDown: Ie,
                    onPointerMove: Le,
                    onPointerUp: Re,
                    style: {
                      cursor: de
                        ? `crosshair`
                        : N.current
                          ? `grabbing`
                          : `grab`,
                      touchAction: `none`,
                    },
                    children: [
                      H && !le
                        ? (0, Z.jsx)(`canvas`, {
                            ref: ge,
                            className: `absolute top-1/2 left-1/2 max-w-none select-none`,
                            style: {
                              transform: `translate(-50%, -50%) translate(${k.x}px, ${k.y}px) scale(${D})`,
                              imageRendering: D > 2 ? `pixelated` : `auto`,
                            },
                          })
                        : (0, Z.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center justify-center`,
                            children: (0, Z.jsx)(`p`, {
                              className: `text-sm text-muted-foreground`,
                              children: le
                                ? `Could not load image: ${le}`
                                : y
                                  ? `No image generated for this asset yet.`
                                  : `Select an image to view.`,
                            }),
                          }),
                      de &&
                        pe &&
                        (() => {
                          let e = E.current?.getBoundingClientRect();
                          return (0, Z.jsx)(`div`, {
                            className: `absolute border-2 border-primary bg-primary/10 pointer-events-none z-10`,
                            style: {
                              left: e ? pe.x - e.left : pe.x,
                              top: e ? pe.y - e.top : pe.y,
                              width: pe.w,
                              height: pe.h,
                            },
                          });
                        })(),
                      de &&
                        (0, Z.jsxs)(`div`, {
                          className: `absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/90 border border-border text-xs`,
                          children: [
                            (0, Z.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `Drag a crop region`,
                            }),
                            (0, Z.jsx)(`button`, {
                              onClick: Ne,
                              className: `px-2 py-0.5 rounded bg-primary text-primary-foreground`,
                              children: `Apply`,
                            }),
                            (0, Z.jsx)(`button`, {
                              onClick: Pe,
                              className: `px-2 py-0.5 rounded hover:bg-accent text-muted-foreground`,
                              children: `Cancel`,
                            }),
                          ],
                        }),
                      V &&
                        (0, Z.jsx)(`div`, {
                          className: `absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-md bg-background/90 border border-border text-xs text-muted-foreground`,
                          children: `Viewing a past version. Select the latest to edit.`,
                        }),
                    ],
                  }),
                ],
              }),
              y &&
                (0, Z.jsx)(qve, {
                  variant: S ? `stacked` : `rail`,
                  editable: ve,
                  imageState: W,
                  cropMode: de,
                  onToggleCrop: () => (de ? Pe() : fe(!0)),
                  onRotate: De,
                  onFlip: Oe,
                  onAdjust: ke,
                  onResetAdjustment: Ae,
                  onClearCrop: je,
                  versions: I,
                  versionPath: L,
                  currentPath: z ?? null,
                  onSelectVersion: R,
                  editPrompt: ze,
                  onEditPromptChange: Be,
                  onRunAiEdit: Ue,
                  editing: Ve,
                  editPrice: l ?? null,
                }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `flex items-center gap-3 px-3 pr-16 py-1.5 border-t border-border bg-background/50 shrink-0 text-[11px] font-mono text-muted-foreground`,
            children:
              y &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `truncate max-w-[28%]`,
                    children: y.asset.asset_name,
                  }),
                  ee &&
                    (0, Z.jsx)(`span`, {
                      className: `truncate max-w-[34%]`,
                      children: ee,
                    }),
                  j && (0, Z.jsxs)(`span`, { children: [j.w, `×`, j.h] }),
                  y.asset.size_human &&
                    (0, Z.jsx)(`span`, { children: y.asset.size_human }),
                ],
              }),
          }),
        ],
      }),
    ],
  });
}
