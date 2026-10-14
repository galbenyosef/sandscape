// assets__dist-DAUR33jS 02 — children
// Lines 298-437 of readable/assets__dist-DAUR33jS.pretty.js (statement-aligned).
function g(e) {
  let t = e + `CollectionProvider`,
    [n, c] = r(t),
    [u, d] = n(t, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new f(),
      setItemMap: l(() => void 0, `setItemMap`),
    }),
    p = l(
      ({ state: e, ...t }) =>
        e ? (0, s.jsx)(h, { ...t, state: e }) : (0, s.jsx)(m, { ...t }),
      `CollectionProvider`,
    );
  p.displayName = t;
  let m = l((e) => {
    let t = T();
    return (0, s.jsx)(h, { ...e, state: t });
  }, `CollectionInit`);
  m.displayName = t + `Init`;
  let h = l((e) => {
    let { scope: t, children: n, state: r } = e,
      i = o.useRef(null),
      [c, l] = o.useState(null),
      d = a(i, l),
      [f, p] = r;
    return (
      o.useEffect(() => {
        if (!c) return;
        let e = b(() => {});
        return (
          e.observe(c, { childList: !0, subtree: !0 }),
          () => {
            e.disconnect();
          }
        );
      }, [c]),
      (0, s.jsx)(u, {
        scope: t,
        itemMap: f,
        setItemMap: p,
        collectionRef: d,
        collectionRefObject: i,
        collectionElement: c,
        children: n,
      })
    );
  }, `CollectionProviderImpl`);
  h.displayName = t + `Impl`;
  let g = e + `CollectionSlot`,
    v = i(g),
    x = o.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = a(t, d(g, n).collectionRef);
      return (0, s.jsx)(v, { ref: i, children: r });
    });
  x.displayName = g;
  let S = e + `CollectionItemSlot`,
    C = i(S),
    w = o.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        c = o.useRef(null),
        [l, u] = o.useState(null),
        p = a(t, c, u),
        { setItemMap: m } = d(S, n),
        h = o.useRef(i);
      _(h.current, i) || (h.current = i);
      let g = h.current;
      return (
        o.useEffect(() => {
          let e = g;
          return (
            m((t) =>
              l
                ? t.has(l)
                  ? t.set(l, { ...e, element: l }).toSorted(y)
                  : (t.set(l, { ...e, element: l }), t.toSorted(y))
                : t,
            ),
            () => {
              m((e) => (!l || !e.has(l) ? e : (e.delete(l), new f(e))));
            }
          );
        }, [l, g, m]),
        (0, s.jsx)(C, { "data-radix-collection-item": ``, ref: p, children: r })
      );
    });
  w.displayName = S;
  function T() {
    return o.useState(new f());
  }
  l(T, `useInitCollection`);
  function E(t) {
    let { itemMap: n } = d(e + `CollectionConsumer`, t);
    return n;
  }
  return (
    l(E, `useCollection`),
    [
      { Provider: p, Slot: x, ItemSlot: w },
      { createCollectionScope: c, useCollection: E, useInitCollection: T },
    ]
  );
}
l(g, `createCollection`);
function _(e, t) {
  if (e === t) return !0;
  if (typeof e != `object` || typeof t != `object` || e == null || t == null)
    return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
l(_, `shallowEqual`);
function v(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
l(v, `isElementPreceding`);
function y(e, t) {
  return !e[1].element || !t[1].element
    ? 0
    : v(e[1].element, t[1].element)
      ? -1
      : 1;
}
l(y, `sortByDocumentPosition`);
function b(e) {
  return new MutationObserver((t) => {
    for (let n of t)
      if (n.type === `childList`) {
        e();
        return;
      }
  });
}
l(b, `getChildListObserver`);
