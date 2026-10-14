// Create-ea24k1TY 283 — classname
// Lines 97217-97375 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function I7(e) {
  return (t) => (t.pointerType === `mouse` ? void 0 : e(t));
}
C7(I7, `whenTouchOrPen`);
var a_e = e_e,
  o_e = n_e,
  s_e = X.forwardRef(({ className: e, inset: t, children: n, ...r }, i) =>
    (0, Z.jsxs)(P7, {
      ref: i,
      className: p(
        `flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`,
        t && `pl-8`,
        e,
      ),
      ...r,
      children: [n, (0, Z.jsx)(De, { className: `ml-auto h-4 w-4` })],
    }),
  );
s_e.displayName = P7.displayName;
var c_e = X.forwardRef(({ className: e, ...t }, n) =>
  (0, Z.jsx)(F7, {
    ref: n,
    className: p(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
      e,
    ),
    ...t,
  }),
);
c_e.displayName = F7.displayName;
var L7 = X.forwardRef(({ className: e, ...t }, n) =>
  (0, Z.jsx)(r_e, {
    children: (0, Z.jsx)(D7, {
      ref: n,
      className: p(
        `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e,
      ),
      ...t,
    }),
  }),
);
L7.displayName = D7.displayName;
var R7 = X.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, Z.jsx)(k7, {
    ref: r,
    className: p(
      `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
);
R7.displayName = k7.displayName;
var l_e = X.forwardRef(({ className: e, children: t, checked: n, ...r }, i) =>
  (0, Z.jsxs)(A7, {
    ref: i,
    className: p(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    checked: n,
    ...r,
    children: [
      (0, Z.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, Z.jsx)(M7, {
          children: (0, Z.jsx)(ve, { className: `h-4 w-4` }),
        }),
      }),
      t,
    ],
  }),
);
l_e.displayName = A7.displayName;
var u_e = X.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, Z.jsxs)(j7, {
    ref: r,
    className: p(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, Z.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, Z.jsx)(M7, {
          children: (0, Z.jsx)(Se, { className: `h-2 w-2 fill-current` }),
        }),
      }),
      t,
    ],
  }),
);
u_e.displayName = j7.displayName;
var z7 = X.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, Z.jsx)(O7, {
    ref: r,
    className: p(
      `px-2 py-1.5 text-sm font-semibold text-foreground`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
);
z7.displayName = O7.displayName;
var B7 = X.forwardRef(({ className: e, ...t }, n) =>
  (0, Z.jsx)(N7, {
    ref: n,
    className: p(`-mx-1 my-1 h-px bg-border`, e),
    ...t,
  }),
);
B7.displayName = N7.displayName;
var d_e = ({ className: e, ...t }) =>
  (0, Z.jsx)(`span`, {
    className: p(`ml-auto text-xs tracking-widest text-muted-foreground`, e),
    ...t,
  });
d_e.displayName = `ContextMenuShortcut`;
function f_e(e) {
  let {
      selectedBoneNames: t,
      boneOffsets: n,
      mutedBones: r,
      currentFrame: i,
      upsertBoneOffsetAtFrame: a,
      removeBoneOffsets: o,
      setBonesMuted: s,
      selectChildren: c,
    } = R6(),
    l = e?.length ? e : t,
    u = (0, X.useMemo)(() => new Set(l), [l]),
    d = (0, X.useMemo)(() => n.filter((e) => u.has(e.boneName)), [n, u]),
    f = (0, X.useMemo)(() => d.filter((e) => e.frame === i).length, [d, i]),
    p = (0, X.useMemo)(() => r.filter((e) => u.has(e)).length, [r, u]);
  return {
    targets: l,
    setOffsetKeysAtPlayhead: (0, X.useCallback)(() => {
      for (let e of l)
        n.find((t) => t.boneName === e && t.frame === i) ||
          a(e, i, { rotation: [0, 0, 0] });
    }, [l, n, i, a]),
    deleteOffsetKeysAtPlayhead: (0, X.useCallback)(() => {
      o(d.filter((e) => e.frame === i).map((e) => e.id));
    }, [o, d, i]),
    deleteAllOffsetKeys: (0, X.useCallback)(() => {
      o(d.map((e) => e.id));
    }, [o, d]),
    eraseAnimation: (0, X.useCallback)(() => s(l, !0), [s, l]),
    restoreAnimation: (0, X.useCallback)(() => s(l, !1), [s, l]),
    selectChildren: c,
    mutedCount: p,
    offsetKeyCount: d.length,
    keysAtPlayhead: f,
  };
}
