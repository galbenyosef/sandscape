// dnd-CfiPSimc 07 — current
// Lines 1467-1568 of readable/assets/dnd-CfiPSimc.pretty.js (statement-aligned).
function ve(e, t) {
  return t
    ? () => !1
    : typeof e == `function`
      ? e
      : Array.isArray(e)
        ? (t) => e.includes(t.kind)
        : (t) => t.kind === e;
}
function X(e) {
  let t = (0, f.useId)(),
    { registerZone: n, unregisterZone: r } = pe(),
    i = (0, f.useRef)(e);
  i.current = e;
  let a = (0, f.useCallback)(
      (e) => {
        e
          ? ((e.dataset.dndZone = t),
            n(t, {
              el: e,
              accept: (e) => ve(i.current.accept, i.current.disabled)(e),
              onDrop: (e, t) => i.current.onDrop(e, t),
              onDragOver: (e, t) => i.current.onDragOver?.(e, t),
              onDragEnter: () => i.current.onDragEnter?.(),
              onDragLeave: () => i.current.onDragLeave?.(),
              get autoScroll() {
                return i.current.autoScroll;
              },
            }))
          : r(t);
      },
      [t, n, r],
    ),
    o = V((e) => e.active),
    s = V((e) => e.hoveredZoneId),
    c = V((e) => e.kind),
    l = V((e) => e.payload);
  return {
    dropProps: { ref: a, "data-dnd-zone": t },
    isOver: o && s === t,
    activeData: o && c !== null ? { kind: c, payload: l } : null,
  };
}
function Z(e) {
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
    { dragProps: d, isDragging: p } = _e({
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
    { dropProps: h, isOver: g } = X({
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
function ye() {
  return { active: V((e) => e.active), kind: V((e) => e.kind) };
}
