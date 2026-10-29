// Create-CEn7EAZs 155 — jsx
// Lines 51811-52125 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function lH({
  clips: e,
  sessionDir: t,
  selected: n,
  onSelect: r,
  busy: i,
  disabled: a,
  onSave: o,
  onBake: s,
  onCapture: c,
}) {
  let [l, u] = (0, X.useState)(`all`),
    d = e.find((e) => e.key === n);
  if (d)
    return (0, Z.jsx)(
      cH,
      {
        clip: d,
        sessionDir: t,
        busy: i,
        disabled: a,
        onSave: o,
        onBake: s,
        onBack: () => r(null),
      },
      `${d.key}:${d.animation.baked_animation_path}:${d.animation.bake_stale}`,
    );
  let f = Array.from(
      new Map(e.map((e) => [e.assetId || `library`, e.character])).entries(),
    ),
    p = e.filter((e) => l === `all` || (e.assetId || `library`) === l);
  return (0, Z.jsxs)(`div`, {
    className: `motion-library`,
    children: [
      f.length > 1 &&
        (0, Z.jsxs)(`label`, {
          className: `motion-library-filter`,
          children: [
            `Show`,
            (0, Z.jsxs)(`select`, {
              value: l,
              onChange: (e) => u(e.target.value),
              children: [
                (0, Z.jsx)(`option`, {
                  value: `all`,
                  children: `All characters & uploads`,
                }),
                f.map(([e, t]) =>
                  (0, Z.jsx)(
                    `option`,
                    { value: e, children: t.replace(/_/g, ` `) },
                    e,
                  ),
                ),
              ],
            }),
          ],
        }),
      !e.length &&
        (0, Z.jsxs)(`div`, {
          className: `motion-library-empty`,
          children: [
            (0, Z.jsx)(Zt, { size: 32, strokeWidth: 1.3 }),
            (0, Z.jsx)(`h4`, { children: `No animations yet` }),
            (0, Z.jsx)(`button`, {
              className: `motion-button`,
              onClick: c,
              children: `Capture a performance`,
            }),
          ],
        }),
      (0, Z.jsx)(`div`, {
        className: `motion-clip-list`,
        children: p.map((e) => {
          let n = !!e.animation.animation_path,
            a = e.animation.status === `generating`;
          return (0, Z.jsxs)(
            `button`,
            {
              className: `motion-clip-row`,
              disabled: !n || i,
              onClick: () => r(e.key),
              children: [
                (0, Z.jsx)(`span`, {
                  className: `motion-clip-symbol`,
                  children: a
                    ? (0, Z.jsx)(J, { size: 19, className: `animate-spin` })
                    : e.assetId
                      ? (0, Z.jsx)($V, {
                          imageUrl: e.imagePath
                            ? vr.getAssetUrl(t, e.imagePath)
                            : void 0,
                          modelUrl: e.modelPath
                            ? vr.getAssetUrl(t, e.modelPath)
                            : void 0,
                        })
                      : (0, Z.jsx)(Zt, { size: 19 }),
                }),
                (0, Z.jsxs)(`span`, {
                  className: `motion-clip-text`,
                  children: [
                    (0, Z.jsx)(`strong`, { children: e.animation.name }),
                    (0, Z.jsxs)(`small`, {
                      children: [
                        e.character.replace(/_/g, ` `),
                        e.animation.source === `performance_capture`
                          ? ` · Captured`
                          : ``,
                      ],
                    }),
                    e.animation.status === `failed` &&
                      (0, Z.jsx)(`small`, {
                        className: `motion-failed`,
                        children: e.animation.error || `Generation failed`,
                      }),
                  ],
                }),
                (0, Z.jsxs)(`span`, {
                  className: `motion-clip-end`,
                  children: [
                    e.animation.loop && (0, Z.jsx)(Os, { size: 13 }),
                    n
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            (0, Z.jsx)(`span`, {
                              children:
                                e.animation.duration_sec == null
                                  ? ``
                                  : `${e.animation.duration_sec.toFixed(1)}s`,
                            }),
                            (0, Z.jsx)(Ms, { size: 16 }),
                          ],
                        })
                      : (0, Z.jsx)(`span`, {
                          children: a
                            ? `Converting`
                            : e.animation.status === `failed`
                              ? `Failed`
                              : `Planned`,
                        }),
                  ],
                }),
              ],
            },
            e.key,
          );
        }),
      }),
    ],
  });
}
function uH(e) {
  let {
      assets: t,
      sessionDir: n = ``,
      gameDesignData: r,
      onUpdateDesignData: i,
      onOpenEditorTab: a,
      isCodingAgentRunning: o,
    } = e,
    [s, c] = (0, X.useState)(`library`),
    [l, u] = (0, X.useState)(null),
    d = (0, X.useRef)(null),
    f = (0, X.useId)(),
    p = r?.animation_plan,
    m = (0, X.useMemo)(() => sH(p, t), [p, t]),
    h = (0, X.useCallback)((e) => i?.({ animation_plan: e }), [i]),
    g = BV(ru(n), h),
    _ = Fa(`op:capture_animation`),
    v = t
      .filter((e) => tt(e) && e.id)
      .map((e) => {
        let t = e.tpose_image_path || e.concept_art_path;
        return {
          id: e.id,
          name: e.asset_name || `Character`,
          modelUrl: vr.getAssetUrl(n, e.rigged_model_path),
          imageUrl: t ? vr.getAssetUrl(n, t) : void 0,
        };
      }),
    y = !!o || e.node.state === `in-progress`,
    b = [
      { id: `library`, label: `Animations`, Icon: Zt },
      { id: `capture`, label: `Capture`, Icon: ee },
      { id: `generate`, label: `Generate`, Icon: Nr },
    ];
  return (
    (0, X.useLayoutEffect)(() => {
      d.current
        ?.closest(`[data-radix-scroll-area-viewport]`)
        ?.scrollTo({ top: 0 });
    }, [s, l]),
    (0, Z.jsxs)(`div`, {
      ref: d,
      className: `animation-studio`,
      children: [
        (0, Z.jsx)(`div`, {
          className: `motion-tabs`,
          role: `tablist`,
          "aria-label": `Animation studio`,
          children: b.map(({ id: e, label: t, Icon: n }, r) =>
            (0, Z.jsxs)(
              `button`,
              {
                role: `tab`,
                id: `${f}-tab-${e}`,
                "aria-controls": `${f}-panel-${e}`,
                "aria-selected": s === e,
                tabIndex: s === e ? 0 : -1,
                disabled: g.busy,
                onClick: () => {
                  (c(e), g.clearError());
                },
                onKeyDown: (e) => {
                  let t =
                    e.key === `ArrowRight`
                      ? (r + 1) % b.length
                      : e.key === `ArrowLeft`
                        ? (r + b.length - 1) % b.length
                        : e.key === `Home`
                          ? 0
                          : e.key === `End`
                            ? b.length - 1
                            : null;
                  t !== null &&
                    (e.preventDefault(),
                    c(b[t].id),
                    g.clearError(),
                    document.getElementById(`${f}-tab-${b[t].id}`)?.focus());
                },
                children: [(0, Z.jsx)(n, { size: 16 }), t],
              },
              e,
            ),
          ),
        }),
        g.error &&
          (0, Z.jsxs)(`div`, {
            className: `motion-error`,
            role: `alert`,
            children: [
              (0, Z.jsx)(`span`, { children: g.error }),
              (0, Z.jsx)(`button`, {
                className: `motion-icon-button`,
                onClick: g.clearError,
                "aria-label": `Dismiss error`,
                children: (0, Z.jsx)(Jr, { size: 16 }),
              }),
            ],
          }),
        (0, Z.jsx)(`div`, {
          role: `tabpanel`,
          id: `${f}-panel-library`,
          "aria-labelledby": `${f}-tab-library`,
          hidden: s !== `library`,
          children:
            s === `library` &&
            (0, Z.jsx)(lH, {
              clips: m,
              sessionDir: n,
              selected: l,
              onSelect: u,
              busy: g.busy,
              disabled: y,
              onBake: g.bake,
              onCapture: () => c(`capture`),
              onSave: async (e) => {
                let t = await g.save(e);
                return (
                  t && u(`${e.asset_id || `library`}:${t.animation_id}`),
                  t
                );
              },
            }),
        }),
        (0, Z.jsx)(`div`, {
          role: `tabpanel`,
          id: `${f}-panel-capture`,
          "aria-labelledby": `${f}-tab-capture`,
          hidden: s !== `capture`,
          children: (0, Z.jsx)(eH, {
            active: s === `capture`,
            characters: v,
            plan: p,
            capabilities: g.capabilities,
            cost: _,
            busy: g.busy,
            disabled: y,
            onCapture: async (e) => {
              let t = await g.capture(e);
              t && (u(`${e.assetId}:${t.animation_id}`), c(`library`));
            },
          }),
        }),
        (0, Z.jsx)(`div`, {
          role: `tabpanel`,
          id: `${f}-panel-generate`,
          "aria-labelledby": `${f}-tab-generate`,
          hidden: s !== `generate`,
          children: s === `generate` && (0, Z.jsx)(HV, { ...e }),
        }),
        s !== `generate` &&
          a &&
          (0, Z.jsx)(`div`, {
            className: `motion-desktop-editor`,
            children: (0, Z.jsx)(_p, {
              tabId: `character`,
              label: `Open full Animation Editor`,
              onOpenEditorTab: a,
            }),
          }),
      ],
    })
  );
}
