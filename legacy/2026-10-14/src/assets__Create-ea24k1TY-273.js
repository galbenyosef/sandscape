// assets__Create-ea24k1TY 273 — classname
// Lines 91755-92764 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var H6 = `character-rigging`,
  nhe = ({
    characters: e,
    animationPlan: t,
    sessionDir: n,
    sessionId: r,
    onRigCharacter: i,
    onUploaded: a,
    className: o,
  }) => {
    let {
        selectedCharacterId: s,
        selectedAnimationId: c,
        selectedScope: l,
        selectCharacter: d,
        selectAnimation: f,
        selectLibraryAnimation: m,
      } = R6(),
      { toast: h } = u(),
      [g, _] = (0, X.useState)(null),
      [v, y] = (0, X.useState)(``),
      b = (0, X.useRef)(null),
      [x, S] = (0, X.useState)(!1),
      [C, w] = (0, X.useState)(null),
      [T, E] = (0, X.useState)(``),
      [D, O] = (0, X.useState)(null),
      k = (0, X.useCallback)(() => {
        (w(null), E(``), b.current && (b.current.value = ``));
      }, []),
      A = (0, X.useCallback)((e) => {
        let t = e.target.files?.[0];
        t && (w(t), E(t.name.replace(/\.(glb|fbx)$/i, ``)));
      }, []),
      j = (0, X.useCallback)(async () => {
        let e = T.trim();
        if (!(!C || !r || !e)) {
          if (C.size > 104857600) {
            h({
              title: `File too large`,
              description: `"${C.name}" is ${(C.size / (1024 * 1024)).toFixed(1)} MB — the upload limit is 100 MB.`,
              variant: `destructive`,
            });
            return;
          }
          try {
            let t = /\.fbx$/i.test(C.name),
              n,
              i,
              o,
              s,
              c = [];
            if (t) {
              O(`converting`);
              let e = await the(C);
              ((n = e.blob),
                c.push(...e.warnings),
                (i = C.name.replace(/\.fbx$/i, `.glb`)),
                (o = C),
                (s = C.name));
            } else ((n = C), (i = C.name));
            O(`uploading`);
            let l = await kI.uploadLibraryAnimation(r, {
              file: n,
              fileName: i,
              sourceFile: o,
              sourceFileName: s,
              name: e,
            });
            if (l.success) {
              let t = [...c, ...(l.warnings || [])];
              (h({
                title:
                  t.length > 0
                    ? `Animation uploaded with a warning`
                    : `Animation uploaded`,
                description:
                  t.length > 0
                    ? `Added "${e}". ${t.join(` `)}`
                    : `Added "${e}"`,
              }),
                S(!1),
                k(),
                await a?.(l.animation?.animation_id ?? null));
            } else
              h({
                title: `Upload failed`,
                description: l.error || `Could not upload animation`,
                variant: `destructive`,
              });
          } catch (e) {
            h({
              title: `Upload failed`,
              description:
                e instanceof Error
                  ? e.message
                  : `Could not convert or upload the file`,
              variant: `destructive`,
            });
          } finally {
            O(null);
          }
        }
      }, [T, C, r, h, k, a]),
      M = (e) => e.id || e.asset_name || ``,
      N = e.find((e) => M(e) === s),
      P = (e) => {
        let n = M(e);
        return (
          t?.characters.find(
            (t) => t.asset_id === n || t.asset_name === e.asset_name,
          )?.animations || []
        );
      },
      F = (0, X.useMemo)(() => {
        if (!N) return [];
        let e = M(N);
        return (
          t?.characters.find(
            (t) => t.asset_id === e || t.asset_name === N.asset_name,
          )?.animations || []
        );
      }, [t, N]),
      I = (0, X.useMemo)(() => {
        if (!v.trim()) return F;
        let e = v.toLowerCase();
        return F.filter(
          (t) =>
            (t.name || ``).toLowerCase().includes(e) ||
            (t.category || ``).toLowerCase().includes(e),
        );
      }, [F, v]),
      L = (0, X.useMemo)(() => t?.library || [], [t]),
      R = (e) => {
        let t = e.concept_art_path || e.tpose_image_path;
        if (!t) return null;
        let r = n.split(`/`).pop() || n,
          i = t.split(`/`).pop();
        return `${Mn.API_BASE_URL}/api/game/${r}/${i}`;
      },
      z = N && !et(N) && N.concept_art_path ? s : null,
      B = un(H6),
      V = fn(z ? (B?.id ?? null) : null, z ? (r ?? null) : null, {
        target: z ?? ``,
      }),
      H = (0, X.useCallback)(
        async (e, t) => {
          if ((t.stopPropagation(), i)) {
            _(e);
            try {
              await i(e);
            } finally {
              _(null);
            }
          }
        },
        [i],
      ),
      ee = (0, Z.jsxs)(hn, {
        open: x,
        onOpenChange: (e) => {
          D || (S(e), e || k());
        },
        children: [
          (0, Z.jsx)(cee, {
            asChild: !0,
            children: (0, Z.jsx)(`button`, {
              type: `button`,
              title: `Upload animation (.glb or .fbx)`,
              className: `p-1 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors`,
              children: (0, Z.jsx)(En, { className: `h-3.5 w-3.5` }),
            }),
          }),
          (0, Z.jsxs)(lee, {
            align: `end`,
            className: `w-64 p-3 text-xs`,
            children: [
              (0, Z.jsxs)(`h4`, {
                className: `font-semibold text-foreground/80 mb-2 flex items-center gap-1.5`,
                children: [
                  (0, Z.jsx)(En, { className: `h-3.5 w-3.5` }),
                  `Upload animation`,
                ],
              }),
              (0, Z.jsx)(`input`, {
                ref: b,
                type: `file`,
                accept: `.glb,.fbx`,
                className: `hidden`,
                onChange: A,
              }),
              C
                ? (0, Z.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `truncate text-[10px] text-muted-foreground`,
                        title: C.name,
                        children: C.name,
                      }),
                      (0, Z.jsxs)(`div`, {
                        children: [
                          (0, Z.jsx)(`label`, {
                            className: `text-muted-foreground text-[10px]`,
                            children: `Clip name`,
                          }),
                          (0, Z.jsx)(`input`, {
                            type: `text`,
                            value: T,
                            maxLength: 200,
                            placeholder: `e.g. run_cycle`,
                            disabled: !!D,
                            onChange: (e) => E(e.target.value),
                            className: `w-full mt-0.5 bg-muted border border-border text-foreground rounded px-1.5 py-1 text-[11px] disabled:opacity-50`,
                          }),
                        ],
                      }),
                      /\.fbx$/i.test(C.name) &&
                        (0, Z.jsx)(`p`, {
                          className: `text-[10px] text-muted-foreground/70`,
                          children: `FBX is converted to GLB in your browser; the original FBX is kept for retargeting.`,
                        }),
                      (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [
                          (0, Z.jsxs)(`button`, {
                            type: `button`,
                            onClick: j,
                            disabled: !!D || T.trim().length === 0,
                            className: `flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`,
                            children: [
                              D
                                ? (0, Z.jsx)(J, {
                                    className: `h-3 w-3 animate-spin`,
                                  })
                                : (0, Z.jsx)(En, { className: `h-3 w-3` }),
                              D === `converting`
                                ? `Converting…`
                                : D === `uploading`
                                  ? `Uploading…`
                                  : `Upload`,
                            ],
                          }),
                          (0, Z.jsx)(`button`, {
                            type: `button`,
                            onClick: k,
                            disabled: !!D,
                            className: `px-2 py-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-30`,
                            children: `Clear`,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, Z.jsx)(`button`, {
                    type: `button`,
                    onClick: () => b.current?.click(),
                    className: `w-full px-2 py-1.5 bg-muted border border-border rounded text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors`,
                    children: `Choose .glb or .fbx…`,
                  }),
            ],
          }),
        ],
      });
    return (0, Z.jsxs)(`div`, {
      className: p(`flex flex-col h-full`, o),
      children: [
        (0, Z.jsx)(`div`, {
          className: `p-2 border-b border-border`,
          children: (0, Z.jsx)(`h3`, {
            className: `text-xs font-semibold text-muted-foreground uppercase tracking-wider`,
            children: `Characters`,
          }),
        }),
        (0, Z.jsx)($r, {
          className: `flex-1 min-h-0`,
          children: (0, Z.jsx)(`div`, {
            className: `p-1.5 space-y-1`,
            children:
              e.length === 0
                ? (0, Z.jsxs)(`div`, {
                    className: `p-4 text-center text-muted-foreground text-xs`,
                    children: [
                      (0, Z.jsx)(On, {
                        className: `h-6 w-6 mx-auto mb-2 opacity-50`,
                      }),
                      (0, Z.jsx)(`p`, { children: `No animatable characters` }),
                      (0, Z.jsx)(`p`, {
                        className: `text-[10px] mt-1 text-muted-foreground/60`,
                        children: `Only bipeds are rigged, and only a rig can be animated. Add one from the Assets tab, or check a character's body plan in Character Creation.`,
                      }),
                    ],
                  })
                : e.map((e, t) => {
                    let n = M(e),
                      r = R(e),
                      a = P(e).length,
                      o = s === n,
                      c = et(e),
                      l = g === n,
                      u = !!e.concept_art_path;
                    return (0, Z.jsxs)(
                      `div`,
                      {
                        children: [
                          (0, Z.jsxs)(`button`, {
                            onClick: () => d(n),
                            className: p(
                              `w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left transition-colors border`,
                              o
                                ? `bg-primary/15 text-foreground border-primary/30`
                                : `text-muted-foreground hover:bg-secondary border-transparent`,
                            ),
                            children: [
                              (0, Z.jsxs)(`div`, {
                                className: `w-9 h-9 rounded-md overflow-hidden flex-shrink-0 bg-secondary`,
                                children: [
                                  r
                                    ? (0, Z.jsx)(`img`, {
                                        src: r,
                                        alt: e.asset_name,
                                        className: `w-full h-full object-cover`,
                                        loading: `lazy`,
                                        onError: (e) => {
                                          ((e.target.style.display = `none`),
                                            e.target.nextElementSibling?.classList.remove(
                                              `hidden`,
                                            ));
                                        },
                                      })
                                    : null,
                                  (0, Z.jsx)(`div`, {
                                    className: p(
                                      `w-full h-full flex items-center justify-center`,
                                      r ? `hidden` : ``,
                                    ),
                                    children: (0, Z.jsx)(On, {
                                      className: `h-4 w-4 text-muted-foreground`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Z.jsxs)(`div`, {
                                className: `min-w-0 flex-1`,
                                children: [
                                  (0, Z.jsx)(`span`, {
                                    className: `text-xs text-foreground truncate block`,
                                    children: (
                                      e.asset_name || `Character`
                                    ).replace(/_/g, ` `),
                                  }),
                                  c
                                    ? (0, Z.jsxs)(`span`, {
                                        className: `text-[10px] text-green-400 flex items-center gap-1 mt-0.5`,
                                        children: [
                                          (0, Z.jsx)(bn, {
                                            className: `h-2.5 w-2.5`,
                                          }),
                                          a,
                                          ` animation`,
                                          a === 1 ? `` : `s`,
                                        ],
                                      })
                                    : (0, Z.jsxs)(`span`, {
                                        className: `text-[10px] text-yellow-400/70 flex items-center gap-1 mt-0.5`,
                                        children: [
                                          (0, Z.jsx)(U, {
                                            className: `h-2.5 w-2.5`,
                                          }),
                                          `Not created`,
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          }),
                          o &&
                            !c &&
                            (0, Z.jsx)(`div`, {
                              className: `px-2 py-1.5`,
                              children: u
                                ? (0, Z.jsx)(an, {
                                    onClick: (e) => H(n, e),
                                    disabled: !i,
                                    cost: V,
                                    label: `Create Character`,
                                    icon: (0, Z.jsx)(On, {
                                      className: `h-3 w-3`,
                                    }),
                                    isLoading: l,
                                    loadingText: `Creating...`,
                                    checkBalance: !0,
                                    size: `sm`,
                                    className: `w-full h-7 text-[11px]`,
                                    tooltip: `Create ${(e.asset_name || `this character`).replace(/_/g, ` `)}`,
                                  })
                                : (0, Z.jsx)(`p`, {
                                    className: `text-[10px] text-muted-foreground text-center`,
                                    children: `Generate concept art first`,
                                  }),
                            }),
                        ],
                      },
                      n || `char-${t}`,
                    );
                  }),
          }),
        }),
        (0, Z.jsx)(`div`, {
          className: `px-2 pt-2 pb-1 border-t border-border`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [
              (0, Z.jsxs)(`h3`, {
                className: `text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5`,
                children: [
                  `Animation Library`,
                  D &&
                    (0, Z.jsx)(J, {
                      className: `h-3 w-3 animate-spin text-primary`,
                    }),
                ],
              }),
              ee,
            ],
          }),
        }),
        (0, Z.jsx)(`div`, {
          className: `max-h-56 overflow-y-auto p-1.5 space-y-0.5`,
          children:
            L.length === 0
              ? (0, Z.jsx)(`div`, {
                  className: `p-3 text-center text-muted-foreground text-[10px]`,
                  children: `No uploads yet. Upload a .glb or .fbx to retarget onto a character.`,
                })
              : L.map((e) => {
                  let t = l === `library` && c === e.animation_id,
                    n = e.duration_sec ?? e.estimated_duration_sec,
                    r = e.source === `cut`,
                    i = !!e.source_file_path;
                  return (0, Z.jsxs)(
                    `button`,
                    {
                      onClick: () => m(e.animation_id),
                      className: p(
                        `w-full text-left px-2 py-1.5 rounded text-xs transition-colors`,
                        t
                          ? `bg-primary/15 text-foreground`
                          : `text-muted-foreground hover:bg-secondary hover:text-foreground`,
                      ),
                      children: [
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center justify-between gap-1`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `truncate flex items-center gap-1`,
                              children: [
                                r
                                  ? (0, Z.jsx)(Uo, {
                                      className: `h-2.5 w-2.5 flex-shrink-0 text-amber-400`,
                                    })
                                  : (0, Z.jsx)(Qt, {
                                      className: `h-2.5 w-2.5 flex-shrink-0 opacity-60`,
                                    }),
                                e.name,
                              ],
                            }),
                            (0, Z.jsx)(`span`, {
                              className: p(
                                `text-[10px] flex-shrink-0`,
                                e.status === `generated`
                                  ? `text-green-400`
                                  : e.status === `failed`
                                    ? `text-red-400`
                                    : e.status === `edited`
                                      ? `text-blue-400`
                                      : `text-muted-foreground`,
                              ),
                              children: e.status,
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-1.5 mt-0.5`,
                          children: [
                            n != null &&
                              (0, Z.jsxs)(`span`, {
                                className: `text-[10px] text-muted-foreground/60`,
                                children: [n.toFixed(1), `s`],
                              }),
                            i &&
                              (0, Z.jsx)(`span`, {
                                className: `text-[9px] px-1 rounded bg-secondary text-muted-foreground/80 border border-border`,
                                children: `FBX`,
                              }),
                          ],
                        }),
                        e.status === `failed` &&
                          e.error &&
                          (0, Z.jsx)(`div`, {
                            className: `text-[9px] text-red-400/80 mt-0.5 truncate`,
                            title: e.error,
                            children: e.error,
                          }),
                      ],
                    },
                    e.animation_id,
                  );
                }),
        }),
        N &&
          et(N) &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(`div`, {
                className: `px-2 pt-2 pb-1 border-t border-border`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `flex items-center justify-between mb-1.5`,
                    children: (0, Z.jsx)(`h3`, {
                      className: `text-xs font-semibold text-muted-foreground uppercase tracking-wider`,
                      children: `Animations`,
                    }),
                  }),
                  (0, Z.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, Z.jsx)(Gr, {
                        className: `absolute left-1.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground`,
                      }),
                      (0, Z.jsx)(`input`, {
                        type: `text`,
                        placeholder: `Search animations...`,
                        value: v,
                        onChange: (e) => y(e.target.value),
                        className: `w-full bg-muted border border-border text-foreground rounded pl-6 pr-2 py-1 text-[11px] placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Z.jsx)($r, {
                className: `flex-1 min-h-0`,
                children: (0, Z.jsx)(`div`, {
                  className: `p-1.5 space-y-0.5`,
                  children:
                    I.length === 0
                      ? (0, Z.jsx)(`div`, {
                          className: `p-3 text-center text-muted-foreground text-[10px]`,
                          children: v
                            ? `No matching animations`
                            : `No animations planned yet`,
                        })
                      : I.map((e) =>
                          (0, Z.jsxs)(
                            `button`,
                            {
                              onClick: () => f(e.animation_id),
                              className: p(
                                `w-full text-left px-2 py-1.5 rounded text-xs transition-colors`,
                                l === `character` && c === e.animation_id
                                  ? `bg-primary/15 text-foreground`
                                  : `text-muted-foreground hover:bg-secondary hover:text-foreground`,
                              ),
                              children: [
                                (0, Z.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    (0, Z.jsx)(`span`, {
                                      className: `truncate`,
                                      children: e.name,
                                    }),
                                    (0, Z.jsx)(`span`, {
                                      className: p(
                                        `text-[10px] flex-shrink-0 ml-1`,
                                        e.status === `generated`
                                          ? `text-green-400`
                                          : e.status === `failed`
                                            ? `text-red-400`
                                            : e.status === `edited`
                                              ? `text-blue-400`
                                              : `text-muted-foreground`,
                                      ),
                                      children: e.status,
                                    }),
                                  ],
                                }),
                                e.duration_sec != null &&
                                  (0, Z.jsxs)(`span`, {
                                    className: `text-[10px] text-muted-foreground/60`,
                                    children: [
                                      e.duration_sec.toFixed(1),
                                      `s `,
                                      e.loop ? `🔁` : ``,
                                    ],
                                  }),
                              ],
                            },
                            e.animation_id,
                          ),
                        ),
                }),
              }),
              (0, Z.jsxs)(`div`, {
                className: `px-2 py-1.5 border-t border-border text-[10px] text-muted-foreground`,
                children: [F.length, ` animation`, F.length === 1 ? `` : `s`],
              }),
            ],
          }),
      ],
    });
  },
  U6 = new Ea(),
  W6 = new Y(),
  G6 = new Y(),
  K6 = new _i(),
  q6 = { X: new Y(1, 0, 0), Y: new Y(0, 1, 0), Z: new Y(0, 0, 1) },
  J6 = { type: `change` },
  Y6 = { type: `mouseDown`, mode: null },
  X6 = { type: `mouseUp`, mode: null },
  Z6 = { type: `objectChange` },
  Q6 = class extends va {
    constructor(e, t = null) {
      super(void 0, t);
      let n = new che(this);
      this._root = n;
      let r = new lhe();
      ((this._gizmo = r), n.add(r));
      let i = new uhe();
      ((this._plane = i), n.add(i));
      let a = this;
      function o(e, t) {
        let n = t;
        (Object.defineProperty(a, e, {
          get: function () {
            return n === void 0 ? t : n;
          },
          set: function (t) {
            n !== t &&
              ((n = t),
              (i[e] = t),
              (r[e] = t),
              a.dispatchEvent({ type: e + `-changed`, value: t }),
              a.dispatchEvent(J6));
          },
        }),
          (a[e] = t),
          (i[e] = t),
          (r[e] = t));
      }
      (o(`camera`, e),
        o(`object`, void 0),
        o(`enabled`, !0),
        o(`axis`, null),
        o(`mode`, `translate`),
        o(`translationSnap`, null),
        o(`rotationSnap`, null),
        o(`scaleSnap`, null),
        o(`space`, `world`),
        o(`size`, 1),
        o(`dragging`, !1),
        o(`showX`, !0),
        o(`showY`, !0),
        o(`showZ`, !0),
        o(`showXY`, !0),
        o(`showYZ`, !0),
        o(`showXZ`, !0),
        o(`minX`, -1 / 0),
        o(`maxX`, 1 / 0),
        o(`minY`, -1 / 0),
        o(`maxY`, 1 / 0),
        o(`minZ`, -1 / 0),
        o(`maxZ`, 1 / 0));
      let s = new Y(),
        c = new Y(),
        l = new _i(),
        u = new _i(),
        d = new Y(),
        f = new _i(),
        p = new Y(),
        m = new Y(),
        h = new Y(),
        g = new Y();
      (o(`worldPosition`, s),
        o(`worldPositionStart`, c),
        o(`worldQuaternion`, l),
        o(`worldQuaternionStart`, u),
        o(`cameraPosition`, d),
        o(`cameraQuaternion`, f),
        o(`pointStart`, p),
        o(`pointEnd`, m),
        o(`rotationAxis`, h),
        o(`rotationAngle`, 0),
        o(`eye`, g),
        (this._offset = new Y()),
        (this._startNorm = new Y()),
        (this._endNorm = new Y()),
        (this._cameraScale = new Y()),
        (this._parentPosition = new Y()),
        (this._parentQuaternion = new _i()),
        (this._parentQuaternionInv = new _i()),
        (this._parentScale = new Y()),
        (this._worldScaleStart = new Y()),
        (this._worldQuaternionInv = new _i()),
        (this._worldScale = new Y()),
        (this._positionStart = new Y()),
        (this._quaternionStart = new _i()),
        (this._scaleStart = new Y()),
        (this._getPointer = rhe.bind(this)),
        (this._onPointerDown = ahe.bind(this)),
        (this._onPointerHover = ihe.bind(this)),
        (this._onPointerMove = ohe.bind(this)),
        (this._onPointerUp = she.bind(this)),
        t !== null && this.connect(t));
    }
    connect(e) {
      (super.connect(e),
        this.domElement.addEventListener(`pointerdown`, this._onPointerDown),
        this.domElement.addEventListener(`pointermove`, this._onPointerHover),
        this.domElement.addEventListener(`pointerup`, this._onPointerUp),
        (this.domElement.style.touchAction = `none`));
    }
    disconnect() {
      (this.domElement.removeEventListener(`pointerdown`, this._onPointerDown),
        this.domElement.removeEventListener(
          `pointermove`,
          this._onPointerHover,
        ),
        this.domElement.removeEventListener(`pointermove`, this._onPointerMove),
        this.domElement.removeEventListener(`pointerup`, this._onPointerUp),
        (this.domElement.style.touchAction = ``));
    }
    getHelper() {
      return this._root;
    }
    pointerHover(e) {
      if (this.object === void 0 || this.dragging === !0) return;
      e !== null && U6.setFromCamera(e, this.camera);
      let t = $6(this._gizmo.picker[this.mode], U6);
      t ? (this.axis = t.object.name) : (this.axis = null);
    }
    pointerDown(e) {
      if (
        !(
          this.object === void 0 ||
          this.dragging === !0 ||
          (e != null && e.button !== 0)
        ) &&
        this.axis !== null
      ) {
        e !== null && U6.setFromCamera(e, this.camera);
        let t = $6(this._plane, U6, !0);
        (t &&
          (this.object.updateMatrixWorld(),
          this.object.parent.updateMatrixWorld(),
          this._positionStart.copy(this.object.position),
          this._quaternionStart.copy(this.object.quaternion),
          this._scaleStart.copy(this.object.scale),
          this.object.matrixWorld.decompose(
            this.worldPositionStart,
            this.worldQuaternionStart,
            this._worldScaleStart,
          ),
          this.pointStart.copy(t.point).sub(this.worldPositionStart)),
          (this.dragging = !0),
          (Y6.mode = this.mode),
          this.dispatchEvent(Y6));
      }
    }
    pointerMove(e) {
      let t = this.axis,
        n = this.mode,
        r = this.object,
        i = this.space;
      if (
        (n === `scale`
          ? (i = `local`)
          : (t === `E` || t === `XYZE` || t === `XYZ`) && (i = `world`),
        r === void 0 ||
          t === null ||
          this.dragging === !1 ||
          (e !== null && e.button !== -1))
      )
        return;
      e !== null && U6.setFromCamera(e, this.camera);
      let a = $6(this._plane, U6, !0);
      if (a) {
        if (
          (this.pointEnd.copy(a.point).sub(this.worldPositionStart),
          n === `translate`)
        )
          (this._offset.copy(this.pointEnd).sub(this.pointStart),
            i === `local` &&
              t !== `XYZ` &&
              this._offset.applyQuaternion(this._worldQuaternionInv),
            t.indexOf(`X`) === -1 && (this._offset.x = 0),
            t.indexOf(`Y`) === -1 && (this._offset.y = 0),
            t.indexOf(`Z`) === -1 && (this._offset.z = 0),
            i === `local` && t !== `XYZ`
              ? this._offset
                  .applyQuaternion(this._quaternionStart)
                  .divide(this._parentScale)
              : this._offset
                  .applyQuaternion(this._parentQuaternionInv)
                  .divide(this._parentScale),
            r.position.copy(this._offset).add(this._positionStart),
            this.translationSnap &&
              (i === `local` &&
                (r.position.applyQuaternion(
                  K6.copy(this._quaternionStart).invert(),
                ),
                t.search(`X`) !== -1 &&
                  (r.position.x =
                    Math.round(r.position.x / this.translationSnap) *
                    this.translationSnap),
                t.search(`Y`) !== -1 &&
                  (r.position.y =
                    Math.round(r.position.y / this.translationSnap) *
                    this.translationSnap),
                t.search(`Z`) !== -1 &&
                  (r.position.z =
                    Math.round(r.position.z / this.translationSnap) *
                    this.translationSnap),
                r.position.applyQuaternion(this._quaternionStart)),
              i === `world` &&
                (r.parent &&
                  r.position.add(
                    W6.setFromMatrixPosition(r.parent.matrixWorld),
                  ),
                t.search(`X`) !== -1 &&
                  (r.position.x =
                    Math.round(r.position.x / this.translationSnap) *
                    this.translationSnap),
                t.search(`Y`) !== -1 &&
                  (r.position.y =
                    Math.round(r.position.y / this.translationSnap) *
                    this.translationSnap),
                t.search(`Z`) !== -1 &&
                  (r.position.z =
                    Math.round(r.position.z / this.translationSnap) *
                    this.translationSnap),
                r.parent &&
                  r.position.sub(
                    W6.setFromMatrixPosition(r.parent.matrixWorld),
                  ))),
            (r.position.x = Math.max(
              this.minX,
              Math.min(this.maxX, r.position.x),
            )),
            (r.position.y = Math.max(
              this.minY,
              Math.min(this.maxY, r.position.y),
            )),
            (r.position.z = Math.max(
              this.minZ,
              Math.min(this.maxZ, r.position.z),
            )));
        else if (n === `scale`) {
          if (t.search(`XYZ`) !== -1) {
            let e = this.pointEnd.length() / this.pointStart.length();
            (this.pointEnd.dot(this.pointStart) < 0 && (e *= -1),
              G6.set(e, e, e));
          } else
            (W6.copy(this.pointStart),
              G6.copy(this.pointEnd),
              W6.applyQuaternion(this._worldQuaternionInv),
              G6.applyQuaternion(this._worldQuaternionInv),
              G6.divide(W6),
              t.search(`X`) === -1 && (G6.x = 1),
              t.search(`Y`) === -1 && (G6.y = 1),
              t.search(`Z`) === -1 && (G6.z = 1));
          (r.scale.copy(this._scaleStart).multiply(G6),
            this.scaleSnap &&
              (t.search(`X`) !== -1 &&
                (r.scale.x =
                  Math.round(r.scale.x / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap),
              t.search(`Y`) !== -1 &&
                (r.scale.y =
                  Math.round(r.scale.y / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap),
              t.search(`Z`) !== -1 &&
                (r.scale.z =
                  Math.round(r.scale.z / this.scaleSnap) * this.scaleSnap ||
                  this.scaleSnap)));
        } else if (n === `rotate`) {
          this._offset.copy(this.pointEnd).sub(this.pointStart);
          let e =
              20 /
              this.worldPosition.distanceTo(
                W6.setFromMatrixPosition(this.camera.matrixWorld),
              ),
            n = !1;
          (t === `XYZE`
            ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),
              (this.rotationAngle =
                this._offset.dot(W6.copy(this.rotationAxis).cross(this.eye)) *
                e))
            : (t === `X` || t === `Y` || t === `Z`) &&
              (this.rotationAxis.copy(q6[t]),
              W6.copy(q6[t]),
              i === `local` && W6.applyQuaternion(this.worldQuaternion),
              W6.cross(this.eye),
              W6.length() === 0
                ? (n = !0)
                : (this.rotationAngle = this._offset.dot(W6.normalize()) * e)),
            (t === `E` || n) &&
              (this.rotationAxis.copy(this.eye),
              (this.rotationAngle = this.pointEnd.angleTo(this.pointStart)),
              this._startNorm.copy(this.pointStart).normalize(),
              this._endNorm.copy(this.pointEnd).normalize(),
              (this.rotationAngle *=
                this._endNorm.cross(this._startNorm).dot(this.eye) < 0
                  ? 1
                  : -1)),
            this.rotationSnap &&
              (this.rotationAngle =
                Math.round(this.rotationAngle / this.rotationSnap) *
                this.rotationSnap),
            i === `local` && t !== `E` && t !== `XYZE`
              ? (r.quaternion.copy(this._quaternionStart),
                r.quaternion
                  .multiply(
                    K6.setFromAxisAngle(this.rotationAxis, this.rotationAngle),
                  )
                  .normalize())
              : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv),
                r.quaternion.copy(
                  K6.setFromAxisAngle(this.rotationAxis, this.rotationAngle),
                ),
                r.quaternion.multiply(this._quaternionStart).normalize()));
        }
        (this.dispatchEvent(J6), this.dispatchEvent(Z6));
      }
    }
    pointerUp(e) {
      (e !== null && e.button !== 0) ||
        (this.dragging &&
          this.axis !== null &&
          ((X6.mode = this.mode), this.dispatchEvent(X6)),
        (this.dragging = !1),
        (this.axis = null));
    }
    dispose() {
      (this.disconnect(), this._root.dispose());
    }
    attach(e) {
      return ((this.object = e), (this._root.visible = !0), this);
    }
    detach() {
      return (
        (this.object = void 0),
        (this.axis = null),
        (this._root.visible = !1),
        this
      );
    }
    reset() {
      this.enabled &&
        this.dragging &&
        (this.object.position.copy(this._positionStart),
        this.object.quaternion.copy(this._quaternionStart),
        this.object.scale.copy(this._scaleStart),
        this.dispatchEvent(J6),
        this.dispatchEvent(Z6),
        this.pointStart.copy(this.pointEnd));
    }
    getRaycaster() {
      return U6;
    }
    getMode() {
      return this.mode;
    }
    setMode(e) {
      this.mode = e;
    }
    setTranslationSnap(e) {
      this.translationSnap = e;
    }
    setRotationSnap(e) {
      this.rotationSnap = e;
    }
    setScaleSnap(e) {
      this.scaleSnap = e;
    }
    setSize(e) {
      this.size = e;
    }
    setSpace(e) {
      this.space = e;
    }
    setColors(e, t, n, r) {
      let i = this._gizmo.materialLib;
      (i.xAxis.color.set(e),
        i.yAxis.color.set(t),
        i.zAxis.color.set(n),
        i.active.color.set(r),
        i.xAxisTransparent.color.set(e),
        i.yAxisTransparent.color.set(t),
        i.zAxisTransparent.color.set(n),
        i.activeTransparent.color.set(r),
        i.xAxis._color && i.xAxis._color.set(e),
        i.yAxis._color && i.yAxis._color.set(t),
        i.zAxis._color && i.zAxis._color.set(n),
        i.active._color && i.active._color.set(r),
        i.xAxisTransparent._color && i.xAxisTransparent._color.set(e),
        i.yAxisTransparent._color && i.yAxisTransparent._color.set(t),
        i.zAxisTransparent._color && i.zAxisTransparent._color.set(n),
        i.activeTransparent._color && i.activeTransparent._color.set(r));
    }
  };
