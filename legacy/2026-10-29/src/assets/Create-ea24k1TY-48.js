// Create-ea24k1TY 48 — classname
// Lines 15170-15538 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function qf({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  gameDesignData: r,
  sessionDir: i,
  onUpdateDesignData: a,
  needsInitialization: o,
}) {
  let s = Nl(i),
    c = r?.gameDesignConcept,
    l = tn(un(e.id)),
    [u, d] = (0, X.useState)(!1),
    f = (0, X.useRef)(r);
  (0, X.useEffect)(() => {
    f.current = r;
  }, [r]);
  let [p, m] = (0, X.useState)(``),
    [h, g] = (0, X.useState)(`idle`),
    [_, v] = (0, X.useState)(``),
    [y, b] = (0, X.useState)(``),
    [x, S] = (0, X.useState)([]),
    [C, w] = (0, X.useState)([]),
    [T, E] = (0, X.useState)(),
    [D, O] = (0, X.useState)(``),
    [k, A] = (0, X.useState)(``),
    [j, M] = (0, X.useState)([]),
    [N, P] = (0, X.useState)(``),
    [F, I] = (0, X.useState)(``),
    [L, R] = (0, X.useState)(``),
    [z, B] = (0, X.useState)(``),
    [V, H] = (0, X.useState)(``),
    [U, ee] = (0, X.useState)(``);
  (0, X.useEffect)(() => {
    c &&
      (v(c.title || ``),
      b(c.elevator_pitch || ``),
      S(Gf(c)),
      w(c.core_gameplay_loop || []),
      E(c.key_art_path),
      O(c.perspective || ``),
      A(c.art_style || ``),
      M(c.core_mechanics || []),
      P(c.setting_theme || ``),
      I(c.player_experience || ``),
      R(c.target_audience || ``),
      B(c.unique_hook || ``),
      H(c.narrative_elements || ``),
      ee(c.technical_scope || ``));
  }, [c]);
  let W = e.state === `complete` || e.state === `outdated`,
    G = e.state === `in-progress`,
    te = e.state === `available`,
    K = (0, X.useRef)(null),
    ne = (0, X.useRef)(null),
    re = (0, X.useRef)(!1),
    ie = (0, X.useRef)(null),
    ae = (0, X.useCallback)(
      async (e) => {
        if (s) {
          g(`saving`);
          try {
            (await Vr(s, e)).success
              ? ((re.current = !1),
                g(`saved`),
                (ne.current = setTimeout(() => g(`idle`), 2e3)))
              : (g(`error`), (ne.current = setTimeout(() => g(`idle`), 3e3)));
          } catch {
            (g(`error`), (ne.current = setTimeout(() => g(`idle`), 3e3)));
          }
        }
      },
      [s],
    ),
    oe = (0, X.useCallback)(
      (e) => {
        ((re.current = !0),
          (ie.current = e),
          K.current && clearTimeout(K.current),
          (K.current = setTimeout(() => ae(e), 500)));
      },
      [ae],
    );
  (0, X.useEffect)(
    () => () => {
      (K.current && clearTimeout(K.current),
        ne.current && clearTimeout(ne.current));
    },
    [],
  );
  let se = (0, X.useCallback)(
      (e) => {
        let t = f.current;
        !t ||
          !a ||
          a({ ...t, gameDesignConcept: { ...t.gameDesignConcept, ...e } });
      },
      [a],
    ),
    q = (0, X.useCallback)(
      (e) => {
        (v(e), ae({ title: e }), se({ title: e }));
      },
      [ae, se],
    ),
    ce = (0, X.useCallback)(
      (e) => {
        (b(e), ae({ elevator_pitch: e }), se({ elevator_pitch: e }));
      },
      [ae, se],
    ),
    le = (0, X.useCallback)(
      (e) => {
        S(e);
        let t = e.map((e) => e.label);
        (ae({ genre_tags: t }), se({ genre_tags: t }));
      },
      [ae, se],
    ),
    ue = (0, X.useCallback)(
      (e) => {
        (w(e), oe({ core_gameplay_loop: e }), se({ core_gameplay_loop: e }));
      },
      [oe, se],
    ),
    de = (0, X.useCallback)(
      (e, t) => {
        (({
          perspective: O,
          art_style: A,
          core_mechanics: M,
          setting_theme: P,
          player_experience: I,
          target_audience: R,
          unique_hook: B,
          narrative_elements: H,
          technical_scope: ee,
        })[e]?.(t),
          ae({ [e]: t }),
          se({ [e]: t }));
      },
      [ae, se],
    );
  return o
    ? (0, Z.jsx)(`div`, {
        className: `p-4`,
        children: (0, Z.jsxs)(`div`, {
          className: `rounded-xl border border-primary/40 bg-primary/5 p-5 space-y-4`,
          children: [
            (0, Z.jsxs)(`div`, {
              className: `flex items-start gap-3`,
              children: [
                (0, Z.jsx)(`div`, {
                  className: `mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary`,
                  children: (0, Z.jsx)(Dee, { className: `h-5 w-5` }),
                }),
                (0, Z.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    (0, Z.jsxs)(`h3`, {
                      className: `text-base font-semibold text-foreground`,
                      children: [
                        `To start editing this project, run initialization (`,
                        Kf,
                        ` coins)`,
                      ],
                    }),
                    (0, Z.jsx)(`p`, {
                      className: `text-sm text-muted-foreground leading-relaxed`,
                      children: `This project was imported but has no design context yet. Initializing analyzes your code and assets to build the concept and style guide. Publishing stays free.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, Z.jsx)(`button`, {
              type: `button`,
              onClick: async () => {
                if (!(!s || u)) {
                  d(!0);
                  try {
                    let e = await Br.triggerInitialization(s);
                    if (e.status === `completed`) {
                      (Hr.success(
                        `Project initialized — building your design context…`,
                      ),
                        window.location.reload());
                      return;
                    }
                    e.status === `insufficient_coins`
                      ? Hr.error(
                          e.message ||
                            `Not enough coins to initialize this project.`,
                        )
                      : e.status === `locked`
                        ? Hr.error(
                            e.message ||
                              `Initialization is already running for this project.`,
                          )
                        : Hr.error(
                            e.message ||
                              e.error ||
                              `Initialization failed. Please try again.`,
                          );
                  } catch (e) {
                    (console.error(`Initialization error:`, e),
                      Hr.error(
                        `Failed to initialize project. Please try again.`,
                      ));
                  } finally {
                    d(!1);
                  }
                }
              },
              disabled: u,
              className: `inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60`,
              children: u
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                      `Initializing…`,
                    ],
                  })
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
                      `Initialize project (`,
                      Kf,
                      ` coins)`,
                    ],
                  }),
            }),
          ],
        }),
      })
    : !c && !W
      ? (0, Z.jsxs)(`div`, {
          className: `p-4 space-y-4`,
          children: [
            (te || G) &&
              (0, Z.jsx)(`textarea`, {
                value: p,
                onChange: (e) => m(e.target.value),
                className: `w-full h-20 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40`,
                placeholder: `Describe the gameplay you want...`,
                disabled: t,
              }),
            (0, Z.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                te &&
                  (0, Z.jsx)(an, {
                    onClick: () => {
                      let t =
                        p.trim() ||
                        `Design the core game mechanics and gameplay loop`;
                      (n?.(e.id, t), m(``));
                    },
                    className: `w-full`,
                    disabled: t,
                    cost: l,
                    label: `Generate Game Design`,
                    icon: (0, Z.jsx)(Yr, { className: `h-4 w-4` }),
                    isLoading: G,
                    loadingText: `Designing concept...`,
                    tooltip: `Create core game concept and gameplay loop`,
                    checkBalance: !0,
                  }),
                G &&
                  !t &&
                  (0, Z.jsxs)(`div`, {
                    className: `flex items-center justify-center gap-2 text-sm text-primary`,
                    children: [
                      (0, Z.jsx)(`div`, {
                        className: `w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin`,
                      }),
                      `Designing concept...`,
                    ],
                  }),
              ],
            }),
          ],
        })
      : (0, Z.jsxs)(`div`, {
          className: `p-4 space-y-4`,
          children: [
            (0, Z.jsx)(Df, {
              title: _,
              description: y,
              genreTags: x,
              keyArtPath: T,
              sessionId: s,
              onTitleChange: q,
              onDescriptionChange: ce,
              onGenreTagsChange: le,
            }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsx)(Vf, {
              steps: C,
              onStepsChange: ue,
              onAutoOptimize: W
                ? () => {
                    n?.(
                      e.id,
                      `Refine and optimize the core gameplay loop — improve step names, balance the flow, and make the loop more engaging`,
                    );
                  }
                : void 0,
            }),
            (0, Z.jsx)(`div`, {
              className: `border-t border-border mx-2 my-4`,
            }),
            (0, Z.jsx)(Wf, {
              perspective: D,
              artStyle: k,
              coreMechanics: j,
              settingTheme: N,
              playerExperience: F,
              targetAudience: L,
              uniqueHook: z,
              narrativeElements: V,
              technicalScope: U,
              onFieldChange: de,
            }),
            (0, Z.jsx)(El, { status: h }),
            W &&
              (0, Z.jsxs)(Z.Fragment, {
                children: [
                  (0, Z.jsx)(`textarea`, {
                    value: p,
                    onChange: (e) => m(e.target.value),
                    className: `w-full h-16 bg-card border border-border rounded-lg p-3 text-sm text-foreground/80 resize-none focus:outline-none focus:border-primary/40 placeholder-muted-foreground/40`,
                    placeholder: `Describe changes to the concept...`,
                    disabled: t,
                  }),
                  (0, Z.jsx)(an, {
                    variant: `outline`,
                    onClick: () => {
                      let t = p.trim()
                        ? `Revise the game design: ${p}`
                        : `Revise and improve the game design`;
                      (n?.(e.id, t), m(``));
                    },
                    className: `w-full`,
                    disabled: t,
                    cost: l,
                    label: `Revise Concept`,
                    icon: (0, Z.jsx)(xn, { className: `h-4 w-4` }),
                    tooltip: `Revise game concept with AI`,
                    checkBalance: !0,
                  }),
                ],
              }),
            G &&
              !t &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-center gap-2 text-sm text-primary`,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin`,
                  }),
                  `Designing concept...`,
                ],
              }),
          ],
        });
}
