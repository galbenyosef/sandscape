// Create-CEn7EAZs 30 — current
// Lines 9255-9779 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function zu({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  gameDesignData: r,
  sessionDir: i,
  onUpdateDesignData: a,
  onOpenEditorTab: o,
}) {
  let s = ru(i),
    c = r?.styleGuide,
    l = za(Ua(e.id)?.id ?? null, s, {}),
    d = (0, X.useRef)(r);
  (0, X.useEffect)(() => {
    d.current = r;
  }, [r]);
  let { toast: f } = u(),
    [p, m] = (0, X.useState)(``),
    [h, g] = (0, X.useState)(`idle`),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(null),
    [x, S] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)({
      primary: [],
      secondary: [],
      accent: [],
      neutral: [],
    }),
    [T, E] = (0, X.useState)([]),
    [D, O] = (0, X.useState)([]),
    k = (0, X.useRef)(D);
  (0, X.useEffect)(() => {
    k.current = D;
  }, [D]);
  let [A, j] = (0, X.useState)(``),
    [M, N] = (0, X.useState)([]),
    P = (0, X.useRef)(M);
  ((0, X.useEffect)(() => {
    P.current = M;
  }, [M]),
    (0, X.useEffect)(() => {
      if (c?.colorGroups)
        w({
          primary: c.colorGroups.primary || [],
          secondary: c.colorGroups.secondary || [],
          accent: c.colorGroups.accent || [],
          neutral: c.colorGroups.neutral || [],
        });
      else if (c?.colorPalette?.length) {
        let e = c.colorPalette.map((e) => e.hex);
        w({
          primary: e.slice(0, Math.ceil(e.length / 3)),
          secondary: e.slice(
            Math.ceil(e.length / 3),
            Math.ceil((2 * e.length) / 3),
          ),
          accent: e.slice(Math.ceil((2 * e.length) / 3)),
          neutral: [],
        });
      }
      (E(c?.styleKeywords || []),
        j(c?.notes || ``),
        O(Ru(c?.moodReferences || [], k.current)),
        c?.moodBoardImages && N(c.moodBoardImages));
    }, [c]));
  let F = (0, X.useMemo)(
      () => [...C.primary, ...C.accent, ...C.secondary],
      [C],
    ),
    I = e.state === `complete` || e.state === `outdated`,
    L = e.state === `in-progress`,
    R = e.state === `available`,
    z = (0, X.useRef)(null),
    B = (0, X.useRef)(null),
    V = (0, X.useRef)(!1),
    H = (0, X.useRef)(null),
    ee = (0, X.useRef)(null),
    te = (0, X.useRef)(0),
    U = (0, X.useCallback)(
      async (e) => {
        if (!s) {
          console.error(
            `[ArtDirection] save with no session id — nothing persisted`,
          );
          return;
        }
        g(`saving`);
        try {
          (await Mee(s, e)).success
            ? ((V.current = !1),
              g(`saved`),
              (B.current = setTimeout(() => g(`idle`), 2e3)))
            : (g(`error`), (B.current = setTimeout(() => g(`idle`), 3e3)));
        } catch {
          (g(`error`), (B.current = setTimeout(() => g(`idle`), 3e3)));
        }
      },
      [s],
    ),
    W = (0, X.useCallback)(
      (e) => {
        ((V.current = !0),
          (ee.current = e),
          z.current && clearTimeout(z.current),
          (z.current = setTimeout(() => U(e), 500)));
      },
      [U],
    ),
    ne = (0, X.useCallback)(async () => {
      if (V.current && z.current) {
        (clearTimeout(z.current), (z.current = null));
        let e = ee.current;
        e && ((ee.current = null), await U(e));
      }
    }, [U]),
    G = (0, X.useCallback)(
      (e) => {
        (H.current && clearTimeout(H.current),
          (H.current = setTimeout(() => {
            a?.(e);
          }, 150)));
      },
      [a],
    );
  (0, X.useEffect)(
    () => () => {
      (z.current && clearTimeout(z.current),
        B.current && clearTimeout(B.current),
        H.current && clearTimeout(H.current));
    },
    [],
  );
  let re = (0, X.useCallback)(
      (e, t) => {
        w((n) => {
          let r = { ...n, [e]: t };
          W({ color_palette: r });
          let i = d.current;
          if (a && i) {
            let e = [
              ...r.primary,
              ...r.secondary,
              ...r.accent,
              ...r.neutral,
            ].map((e, t) => ({ name: `Color ${t + 1}`, hex: e }));
            G({
              ...i,
              styleGuide: {
                ...i.styleGuide,
                colorGroups: {
                  ...r,
                  ui_colors: i.styleGuide?.colorGroups?.ui_colors || {},
                },
                colorPalette: e,
              },
            });
          }
          return r;
        });
      },
      [W, a, G],
    ),
    ie = (0, X.useCallback)(
      (e) => {
        (E(e), U({ style_keywords: e }));
        let t = d.current;
        a &&
          t &&
          a({ ...t, styleGuide: { ...t.styleGuide, styleKeywords: e } });
      },
      [U, a],
    ),
    ae = (0, X.useCallback)(
      (e) => {
        O(e);
        let t = Lu(e);
        U({ mood_references: t });
        let n = d.current;
        a &&
          n &&
          a({ ...n, styleGuide: { ...n.styleGuide, moodReferences: t } });
      },
      [U, a],
    ),
    oe = (0, X.useCallback)(
      (e) => {
        (j(e), U({ notes: e }));
        let t = d.current;
        a && t && a({ ...t, styleGuide: { ...t.styleGuide, notes: e } });
      },
      [U, a],
    ),
    se = (0, X.useCallback)(
      (e) => {
        (N(e), U({ mood_board_images: e }));
        let t = d.current;
        a &&
          t &&
          a({ ...t, styleGuide: { ...t.styleGuide, moodBoardImages: e } });
      },
      [U, a],
    ),
    ce = (0, X.useCallback)(async () => {
      if (!s) {
        f({
          title: `Error`,
          description: `No active session`,
          variant: `destructive`,
        });
        return;
      }
      (await ne(), b(null), v(!0));
      try {
        let e = await Dee(s);
        e.success && e.images
          ? (se(e.images),
            e.error &&
              Qt(f, e, {
                title: `Mood board`,
                fallback: `Some mood images could not be generated.`,
                variant: `default`,
              }))
          : b(
              Qt(f, e, {
                title: `Mood board`,
                fallback: `Mood board generation failed.`,
              }),
            );
      } catch (e) {
        (console.error(`Mood image generation failed:`, e),
          b(
            Qt(
              f,
              {},
              {
                title: `Mood board`,
                fallback: `Mood board generation failed.`,
              },
            ),
          ));
      } finally {
        v(!1);
      }
    }, [s, ne, se, f]),
    K = (0, X.useCallback)(() => {
      let e = P.current;
      if (e.length < 2) return;
      let t = [...e];
      for (let e = t.length - 1; e > 0; e--) {
        let n = Math.floor(Math.random() * (e + 1));
        [t[e], t[n]] = [t[n], t[e]];
      }
      se(t);
    }, [se]),
    le = (0, X.useCallback)(
      (e) => {
        se(P.current.filter((t, n) => n !== e));
      },
      [se],
    ),
    ue = (0, X.useCallback)(
      async (e) => {
        if (!s) {
          f({
            title: `Error`,
            description: `No active session`,
            variant: `destructive`,
          });
          return;
        }
        (b(null), v(!0));
        try {
          let t = await kee(s, e);
          t.success && t.image
            ? se([...P.current, t.image])
            : b(
                Qt(f, t, {
                  title: `Mood board`,
                  fallback: `Could not add an image.`,
                }),
              );
        } catch (e) {
          (console.error(`Add image failed:`, e),
            b(
              Qt(
                f,
                {},
                { title: `Mood board`, fallback: `Could not add an image.` },
              ),
            ));
        } finally {
          v(!1);
        }
      },
      [s, se, f],
    ),
    de = (0, X.useCallback)(
      async (e) => {
        if (!s) {
          console.error(`[ArtDirection] layout change with no session id`);
          return;
        }
        U({ mood_board_layout: e });
        let t = ++te.current;
        try {
          let n = {
              images: e.cells.map((e) => ({
                path: M[e.imageIndex]?.path || ``,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height,
              })),
              canvas_width: e.canvasWidth,
              canvas_height: e.canvasHeight,
            },
            r = await Tee(s, n);
          if (t !== te.current) return;
          if (r.success) b((e) => (e?.startsWith(Iu) ? null : e));
          else {
            let e = r.error || `the server did not say why`;
            (console.error(`Composite render failed:`, e), b(`${Iu}: ${e}`));
          }
        } catch (e) {
          console.error(`Composite render failed:`, e);
        }
      },
      [s, M, U],
    ),
    fe = (0, X.useCallback)(async () => {
      if (!s) {
        f({
          title: `Error`,
          description: `No active session`,
          variant: `destructive`,
        });
        return;
      }
      S(!0);
      try {
        let e = await Cee(s);
        if (e.success && e.palette) {
          (w(e.palette), W({ color_palette: e.palette }));
          let t = d.current;
          if (a && t) {
            let n = [
              ...e.palette.primary,
              ...e.palette.secondary,
              ...e.palette.accent,
              ...e.palette.neutral,
            ].map((e, t) => ({ name: `Color ${t + 1}`, hex: e }));
            a({
              ...t,
              styleGuide: {
                ...t.styleGuide,
                colorGroups: e.palette,
                colorPalette: n,
              },
            });
          }
        } else
          Qt(f, e, {
            title: `Palette extraction failed`,
            fallback: `Could not read a palette from the mood board.`,
          });
      } catch (e) {
        (console.error(`Palette extraction failed:`, e),
          Qt(
            f,
            {},
            {
              title: `Palette extraction failed`,
              fallback: `Could not read a palette from the mood board.`,
            },
          ));
      } finally {
        S(!1);
      }
    }, [s, W, a, f]);
  return (0, Z.jsxs)(`div`, {
    className: `p-4 overflow-hidden`,
    children: [
      (0, Z.jsx)(al, {
        direction: c?.rawStyleGuide?.visual_direction,
        sessionId: s,
      }),
      R &&
        !I &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsxs)(`h4`, {
                  className: `text-sm font-semibold text-foreground/80 mb-2 flex items-center gap-2`,
                  children: [
                    (0, Z.jsx)(Xr, { className: `h-3 w-3` }),
                    `Style Preferences`,
                  ],
                }),
                (0, Z.jsx)(`textarea`, {
                  value: p,
                  onChange: (e) => m(e.target.value),
                  className: `w-full h-20 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
                  placeholder: `Describe the visual style you want (e.g., 'dark fantasy with glowing runes', 'bright cartoon style')...`,
                  disabled: t,
                }),
              ],
            }),
            (0, Z.jsx)($t, {
              onClick: () => {
                let t =
                  p.trim() || `Generate art direction and visual style guide`;
                (n?.(e.id, t), m(``));
              },
              className: `w-full`,
              disabled: t,
              cost: l,
              label: `Generate Art Direction`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: L,
              loadingText: `Generating art direction...`,
              tooltip: `Create visual style guide and color palette`,
              checkBalance: !0,
            }),
          ],
        }),
      L &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-center gap-2 text-sm text-primary py-12`,
          children: [
            (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
            `Generating art direction...`,
          ],
        }),
      I &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            y &&
              (0, Z.jsx)(`div`, {
                className: `mb-2 text-xs text-destructive`,
                role: `alert`,
                children: y,
              }),
            (0, Z.jsx)(du, {
              sessionId: s,
              images: M,
              isGenerating: _,
              onGenerate: ce,
              onShuffle: K,
              onRemoveImage: le,
              onAddImage: ue,
              onLayoutChange: de,
            }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsx)(wu, {
              colorGroups: C,
              onColorGroupChange: re,
              onExtractPalette: fe,
              isExtracting: x,
            }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsx)(Eu, { selectedKeywords: T, onKeywordsChange: ie }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsx)(Pu, {
              selectedReferences: D,
              onReferencesChange: ae,
              paletteColors: F,
            }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsxs)(`div`, {
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
                  children: `Notes`,
                }),
                (0, Z.jsx)(Fu, {
                  value: A,
                  onChange: oe,
                  placeholder: `Add any notes about the style, direction, or special requests...`,
                }),
              ],
            }),
            (0, Z.jsx)(Yl, { status: h }),
            (0, Z.jsxs)(`div`, {
              className: `pt-2 border-t border-border mx-2 mt-4 space-y-2`,
              children: [
                (0, Z.jsx)(`textarea`, {
                  value: p,
                  onChange: (e) => m(e.target.value),
                  className: `w-full h-16 bg-card border border-border rounded-lg p-2.5 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary placeholder-muted-foreground/40`,
                  placeholder: `Describe changes to the style...`,
                  disabled: t,
                }),
                (0, Z.jsx)($t, {
                  variant: `outline`,
                  onClick: async () => {
                    await ne();
                    let t = p.trim()
                      ? `Regenerate art direction with these changes: ${p}`
                      : `Regenerate the art direction and visual style`;
                    (n?.(e.id, t), m(``));
                  },
                  className: `w-full`,
                  disabled: t,
                  cost: l,
                  label: `Regenerate Style`,
                  icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
                  tooltip: `Regenerate visual style with refinements`,
                  checkBalance: !0,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
