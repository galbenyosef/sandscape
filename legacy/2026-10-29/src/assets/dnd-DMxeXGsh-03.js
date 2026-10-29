// dnd-DMxeXGsh 03 — kind
// Lines 529-587 of readable/assets/dnd-DMxeXGsh.pretty.js (statement-aligned).
function B(e) {
  let {
      listId: t,
      index: n,
      axis: r = `y`,
      onReorder: i,
      preview: a,
      disabled: o,
    } = e,
    s = `reorder:${t}`,
    c = (0, f.useRef)(null),
    [l, u] = (0, f.useState)(null),
    { dragProps: d, isDragging: p } = L({
      kind: s,
      payload: () => ({ listId: t, index: n }),
      preview: a,
      disabled: o,
    }),
    m = (0, f.useCallback)(
      (e) => {
        let t = c.current;
        if (!t) return `before`;
        let n = t.getBoundingClientRect(),
          i = r === `y` ? n.top + n.height / 2 : n.left + n.width / 2;
        return (r === `y` ? e.y : e.x) < i ? `before` : `after`;
      },
      [r],
    ),
    { dropProps: h, isOver: g } = z({
      accept: (e) => e.kind === s && e.payload?.listId === t,
      onDragOver: (e, t) => u(m(t)),
      onDragLeave: () => u(null),
      onDrop: (e, t) => {
        let r = e.payload.index,
          a = m(t) === `before` ? n : n + 1;
        (r < a && --a, u(null), a !== r && i(r, a));
      },
    });
  return {
    sortableProps: {
      ref: (0, f.useCallback)(
        (e) => {
          ((c.current = e), h.ref(e));
        },
        [h],
      ),
      onPointerDown: d.onPointerDown,
      style: d.style,
      draggable: !1,
      "data-dnd-zone": h[`data-dnd-zone`],
    },
    isDragging: p,
    isOver: g,
    dropSide: g ? l : null,
  };
}
function V() {
  return { active: b((e) => e.active), kind: b((e) => e.kind) };
}
