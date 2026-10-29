// Create-CEn7EAZs 45 — jsx
// Lines 14405-14752 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Jf({
  sessionDir: e,
  assets: t,
  generatingAssetNames: n,
  onOpenEditorTab: r,
}) {
  let i = ru(e),
    a = n ?? new Set(),
    [o, s] = (0, X.useState)(``),
    [c, l] = (0, X.useState)(`all`),
    [u, d] = (0, X.useState)(`updated`),
    [f, p] = (0, X.useState)(`grid`),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(!1),
    [v, y] = (0, X.useState)(!1),
    [b, x] = (0, X.useState)(null),
    [C, w] = (0, X.useState)(null),
    T = r,
    E = (0, X.useMemo)(
      () => Tf(t, { group: c, query: o, sort: u }),
      [t, c, o, u],
    ),
    D = (0, X.useMemo)(() => t.find((e) => e.asset_name === m) ?? null, [t, m]),
    O = Ua(`asset-plan`),
    k = Ia(O),
    A = (0, X.useCallback)(
      async (e) => {
        if (i) {
          (y(!0), w(null));
          try {
            let t = await vr.addAsset(i, e);
            if (!t.success) throw Error(t.error || `Failed to create asset`);
            (_(!1), h(e.asset_name));
            let n = Af(t.generation);
            n &&
              w(
                `"${e.asset_name}" was created, but generation did not start: ${n}`,
              );
          } catch (e) {
            w(e instanceof Error ? e.message : `Failed to create asset`);
          } finally {
            y(!1);
          }
        }
      },
      [i],
    ),
    j = (0, X.useCallback)(
      async (e, t) => {
        if (!i) return;
        let n = await vr.updateAsset(i, e, { asset_name: t });
        if (!n.success) throw Error(n.error || `Rename failed`);
        h(t);
      },
      [i],
    ),
    M = (0, X.useCallback)(
      async (e, t) => {
        if (!i) return;
        let n = await vr.updateAsset(i, e, { description: t });
        if (!n.success) throw Error(n.error || `Update failed`);
      },
      [i],
    ),
    N = (0, X.useCallback)(
      async (e, t) => {
        if (!i) return;
        let n = await vr.updateAsset(i, e, { body_plan: t });
        if (!n.success)
          throw Error(n.error || `The body plan change was refused`);
      },
      [i],
    ),
    P = (0, X.useCallback)(
      async (e) => {
        if (!i) return;
        let t = e.id || e.asset_name;
        (x(null), m === e.asset_name && h(null));
        let n = await vr.deleteAsset(i, t);
        n.success || w(n.error || `Delete failed`);
      },
      [i, m],
    ),
    F = (0, X.useCallback)(async () => {
      if (!i || !O) return;
      w(null);
      let e = await kn.invoke(O.id, i, {});
      e.success || w(e.error || `Could not start the asset draft`);
    }, [i, O]);
  return (0, Z.jsxs)(`div`, {
    className: `flex flex-col h-full w-full min-w-0 overflow-x-hidden`,
    onKeyDown: (0, X.useCallback)(
      (e) => {
        if (e.key === `Escape`) h(null);
        else if (e.key === `Delete` && D) {
          let t = e.target.tagName;
          if (t === `INPUT` || t === `TEXTAREA`) return;
          x(D);
        }
      },
      [D],
    ),
    tabIndex: -1,
    children: [
      (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-2 p-3 border-b border-border`,
        children: [
          (0, Z.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-2`,
            children: [
              (0, Z.jsxs)(`div`, {
                className: `relative flex-1 min-w-0 basis-full`,
                children: [
                  (0, Z.jsx)(kr, {
                    className: `absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground`,
                  }),
                  (0, Z.jsx)(Ar, {
                    value: o,
                    onChange: (e) => s(e.target.value),
                    placeholder: `Search assets…`,
                    className: `pl-8 h-9`,
                  }),
                ],
              }),
              (0, Z.jsxs)(Fe, {
                value: u,
                onValueChange: (e) => d(e),
                children: [
                  (0, Z.jsx)(Re, {
                    className: `h-9 w-[130px]`,
                    children: (0, Z.jsx)(Me, {}),
                  }),
                  (0, Z.jsxs)(Le, {
                    children: [
                      (0, Z.jsx)(je, {
                        value: `updated`,
                        children: `Recently updated`,
                      }),
                      (0, Z.jsx)(je, { value: `name`, children: `Name` }),
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: `flex items-center rounded-md border border-border overflow-hidden`,
                children: [
                  (0, Z.jsx)(`button`, {
                    type: `button`,
                    onClick: () => p(`grid`),
                    className: `p-2 ${f === `grid` ? `bg-secondary/60 text-foreground` : `text-muted-foreground`}`,
                    title: `Grid`,
                    children: (0, Z.jsx)(ds, { className: `w-4 h-4` }),
                  }),
                  (0, Z.jsx)(`button`, {
                    type: `button`,
                    onClick: () => p(`list`),
                    className: `p-2 ${f === `list` ? `bg-secondary/60 text-foreground` : `text-muted-foreground`}`,
                    title: `List`,
                    children: (0, Z.jsx)(ms, { className: `w-4 h-4` }),
                  }),
                ],
              }),
              (0, Z.jsx)(S, {
                size: `sm`,
                className: `h-9 px-2.5`,
                onClick: () => _(!0),
                title: `New asset`,
                children: (0, Z.jsx)(Br, { className: `w-4 h-4` }),
              }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `flex items-center gap-1 flex-wrap`,
            children: Sf.map((e) =>
              (0, Z.jsx)(
                `button`,
                {
                  type: `button`,
                  onClick: () => l(e),
                  className: `text-[11px] px-2 py-1 rounded-full border transition-colors ${c === e ? `border-primary/60 bg-primary/10 text-primary` : `border-border text-muted-foreground hover:text-foreground`}`,
                  children: Cf[e],
                },
                e,
              ),
            ),
          }),
        ],
      }),
      C &&
        (0, Z.jsx)(`div`, {
          className: `mx-3 mt-2 text-[11px] text-red-300 bg-red-950/40 border border-red-700/30 rounded px-2 py-1.5`,
          children: C,
        }),
      (0, Z.jsx)(`div`, {
        className: `flex-1 flex min-h-0`,
        children: D
          ? (0, Z.jsx)(`div`, {
              className: `flex-1 min-w-0 bg-card/40`,
              children: (0, Z.jsx)(Gf, {
                asset: D,
                sessionId: i,
                sessionDir: e,
                generatingAssetNames: a,
                onRename: j,
                onDescribe: M,
                onBodyPlanChange: N,
                onRequestDelete: x,
                onOpenEditor: T ? (e, t) => T(e, { assetId: t }) : void 0,
                onClose: () => h(null),
              }),
            })
          : (0, Z.jsx)(`div`, {
              className: `flex-1 overflow-y-auto p-3`,
              children:
                t.length === 0
                  ? (0, Z.jsxs)(`div`, {
                      className: `h-full flex flex-col items-center justify-center text-center gap-3 py-10`,
                      children: [
                        (0, Z.jsx)(qr, {
                          className: `w-10 h-10 text-muted-foreground/40`,
                        }),
                        (0, Z.jsx)(`p`, {
                          className: `text-sm text-muted-foreground`,
                          children: `No assets yet`,
                        }),
                        (0, Z.jsxs)(`div`, {
                          className: `flex flex-col items-center gap-2`,
                          children: [
                            (0, Z.jsxs)(S, {
                              size: `sm`,
                              onClick: () => _(!0),
                              children: [
                                (0, Z.jsx)(Br, { className: `w-4 h-4 mr-1` }),
                                `New asset`,
                              ],
                            }),
                            (0, Z.jsx)($t, {
                              variant: `outline`,
                              size: `sm`,
                              onClick: F,
                              cost: k,
                              label: `Draft a list from my concept`,
                              icon: (0, Z.jsx)(Nr, { className: `w-4 h-4` }),
                              disabled: !O,
                              checkBalance: !0,
                            }),
                          ],
                        }),
                      ],
                    })
                  : E.length === 0
                    ? (0, Z.jsx)(`div`, {
                        className: `h-full flex items-center justify-center text-sm text-muted-foreground`,
                        children: `No assets match this filter.`,
                      })
                    : f === `grid`
                      ? (0, Z.jsx)(`div`, {
                          className: `grid grid-cols-2 gap-2`,
                          children: E.map((t) =>
                            (0, Z.jsx)(
                              Rf,
                              {
                                asset: t,
                                sessionDir: e,
                                status: kf(t, a),
                                selected: t.asset_name === m,
                                view: `grid`,
                                onSelect: () => h(t.asset_name),
                              },
                              t.id || t.asset_name,
                            ),
                          ),
                        })
                      : (0, Z.jsx)(`div`, {
                          className: `space-y-1.5`,
                          children: E.map((t) =>
                            (0, Z.jsx)(
                              Rf,
                              {
                                asset: t,
                                sessionDir: e,
                                status: kf(t, a),
                                selected: t.asset_name === m,
                                view: `list`,
                                onSelect: () => h(t.asset_name),
                              },
                              t.id || t.asset_name,
                            ),
                          ),
                        }),
            }),
      }),
      (0, Z.jsx)(qf, {
        open: g,
        onOpenChange: _,
        existing: t,
        submitting: v,
        onCreate: A,
      }),
      (0, Z.jsx)(so, {
        open: b !== null,
        onOpenChange: (e) => {
          e || x(null);
        },
        onConfirm: () => {
          b && P(b);
        },
        title: b ? `Delete "${b.asset_name}"?` : `Delete asset?`,
        description: `This removes the registry entry and the files below — every stored version of them and the asset's LOD folder included. This cannot be undone.`,
        confirmLabel: `Delete`,
        confirmVariant: `destructive`,
        details: b ? If(b).map((e) => ({ label: `File`, value: e })) : [],
      }),
    ],
  });
}
function Yf(e) {
  let t = e ? Ht[e] : void 0;
  return t === `3d`
    ? `3d`
    : t === `2d`
      ? `image`
      : t === `audio` || t === `voice`
        ? `audio`
        : `other`;
}
function Xf(e) {
  return {
    id: e.id,
    name: e.asset_name || ``,
    path: ``,
    asset_name: e.asset_name,
    asset_type: e.asset_type || ``,
    description: e.description || ``,
    size: 0,
    size_human: ``,
    modified: Date.now(),
    type: Yf(e.asset_type),
    location: `registry`,
    last_updated: new Date().toISOString(),
    priority: e.priority || `medium`,
    format: e.format || ``,
    ...e,
  };
}
function Zf(e, t) {
  return e.id === t || e.asset_name === t;
}
