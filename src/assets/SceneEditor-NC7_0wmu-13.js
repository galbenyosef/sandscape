// SceneEditor-NC7_0wmu 13 — math
// Lines 6532-6878 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function ls({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: i,
  trigger: a,
}) {
  if (os(e, 0)) return t;
  let o = [...t],
    [s, c] = r;
  (Z(s != null, `Invalid first pivot index`),
    Z(c != null, `Invalid second pivot index`));
  let l = 0;
  if (a === `keyboard`) {
    {
      let r = e < 0 ? c : s,
        i = n[r];
      Z(i, `Panel constraints not found for index ${r}`);
      let { collapsedSize: a = 0, collapsible: o, minSize: l = 0 } = i;
      if (o) {
        let n = t[r];
        if (
          (Z(n != null, `Previous layout not found for panel index ${r}`),
          os(n, a))
        ) {
          let t = l - n;
          is(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
        }
      }
    }
    {
      let r = e < 0 ? s : c,
        i = n[r];
      Z(i, `No panel constraints found for index ${r}`);
      let { collapsedSize: a = 0, collapsible: o, minSize: l = 0 } = i;
      if (o) {
        let n = t[r];
        if (
          (Z(n != null, `Previous layout not found for panel index ${r}`),
          os(n, l))
        ) {
          let t = n - a;
          is(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
        }
      }
    }
  }
  {
    let r = e < 0 ? 1 : -1,
      i = e < 0 ? c : s,
      a = 0;
    for (;;) {
      let e = t[i];
      Z(e != null, `Previous layout not found for panel index ${i}`);
      let o = cs({ panelConstraints: n, panelIndex: i, size: 100 }) - e;
      if (((a += o), (i += r), i < 0 || i >= n.length)) break;
    }
    let o = Math.min(Math.abs(e), Math.abs(a));
    e = e < 0 ? 0 - o : o;
  }
  {
    let r = e < 0 ? s : c;
    for (; r >= 0 && r < n.length;) {
      let i = Math.abs(e) - Math.abs(l),
        a = t[r];
      Z(a != null, `Previous layout not found for panel index ${r}`);
      let s = a - i,
        c = cs({ panelConstraints: n, panelIndex: r, size: s });
      if (
        !os(a, c) &&
        ((l += a - c),
        (o[r] = c),
        l
          .toPrecision(3)
          .localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >=
          0)
      )
        break;
      e < 0 ? r-- : r++;
    }
  }
  if (ss(i, o)) return i;
  {
    let r = e < 0 ? c : s,
      i = t[r];
    Z(i != null, `Previous layout not found for panel index ${r}`);
    let a = i + l,
      u = cs({ panelConstraints: n, panelIndex: r, size: a });
    if (((o[r] = u), !os(u, a))) {
      let t = a - u,
        r = e < 0 ? c : s;
      for (; r >= 0 && r < n.length;) {
        let i = o[r];
        Z(i != null, `Previous layout not found for panel index ${r}`);
        let a = i + t,
          s = cs({ panelConstraints: n, panelIndex: r, size: a });
        if ((os(i, s) || ((t -= s - i), (o[r] = s)), os(t, 0))) break;
        e > 0 ? r-- : r++;
      }
    }
  }
  return os(
    o.reduce((e, t) => t + e, 0),
    100,
  )
    ? o
    : i;
}
function us({ layout: e, panelsArray: t, pivotIndices: n }) {
  let r = 0,
    i = 100,
    a = 0,
    o = 0,
    s = n[0];
  return (
    Z(s != null, `No pivot index found`),
    t.forEach((e, t) => {
      let { constraints: n } = e,
        { maxSize: c = 100, minSize: l = 0 } = n;
      t === s ? ((r = l), (i = c)) : ((a += l), (o += c));
    }),
    {
      valueMax: Math.min(i, 100 - a),
      valueMin: Math.max(r, 100 - o),
      valueNow: e[s],
    }
  );
}
function ds(e, t = document) {
  return Array.from(
    t.querySelectorAll(`[${ro.resizeHandleId}][data-panel-group-id="${e}"]`),
  );
}
function fs(e, t, n = document) {
  return (
    ds(e, n).findIndex((e) => e.getAttribute(ro.resizeHandleId) === t) ?? null
  );
}
function ps(e, t, n) {
  let r = fs(e, t, n);
  return r == null ? [-1, -1] : [r, r + 1];
}
function ms(e, t = document) {
  return t instanceof HTMLElement && t?.dataset?.panelGroupId == e
    ? t
    : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null;
}
function hs(e, t = document) {
  return t.querySelector(`[${ro.resizeHandleId}="${e}"]`) || null;
}
function gs(e, t, n, r = document) {
  let i = hs(t, r),
    a = ds(e, r),
    o = i ? a.indexOf(i) : -1;
  return [n[o]?.id ?? null, n[o + 1]?.id ?? null];
}
function _s({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: i,
  panelGroupElement: a,
  setLayout: o,
}) {
  ((0, J.useRef)({ didWarnAboutMissingResizeHandle: !1 }),
    ao(() => {
      if (!a) return;
      let e = ds(n, a);
      for (let t = 0; t < i.length - 1; t++) {
        let {
            valueMax: n,
            valueMin: a,
            valueNow: o,
          } = us({ layout: r, panelsArray: i, pivotIndices: [t, t + 1] }),
          s = e[t];
        if (s != null) {
          let e = i[t];
          (Z(e, `No panel data found for index "${t}"`),
            s.setAttribute(`aria-controls`, e.id),
            s.setAttribute(`aria-valuemax`, `` + Math.round(n)),
            s.setAttribute(`aria-valuemin`, `` + Math.round(a)),
            s.setAttribute(
              `aria-valuenow`,
              o == null ? `` : `` + Math.round(o),
            ));
        }
      }
      return () => {
        e.forEach((e, t) => {
          (e.removeAttribute(`aria-controls`),
            e.removeAttribute(`aria-valuemax`),
            e.removeAttribute(`aria-valuemin`),
            e.removeAttribute(`aria-valuenow`));
        });
      };
    }, [n, r, i, a]),
    (0, J.useEffect)(() => {
      if (!a) return;
      let e = t.current;
      Z(e, `Eager values not found`);
      let { panelDataArray: i } = e;
      Z(ms(n, a) != null, `No group found for id "${n}"`);
      let s = ds(n, a);
      Z(s, `No resize handles found for group id "${n}"`);
      let c = s.map((e) => {
        let t = e.getAttribute(ro.resizeHandleId);
        Z(t, `Resize handle element has no handle id attribute`);
        let [s, c] = gs(n, t, i, a);
        if (s == null || c == null) return () => {};
        let l = (e) => {
          if (!e.defaultPrevented)
            switch (e.key) {
              case `Enter`: {
                e.preventDefault();
                let c = i.findIndex((e) => e.id === s);
                if (c >= 0) {
                  let e = i[c];
                  Z(e, `No panel data found for index ${c}`);
                  let s = r[c],
                    {
                      collapsedSize: l = 0,
                      collapsible: u,
                      minSize: d = 0,
                    } = e.constraints;
                  if (s != null && u) {
                    let e = ls({
                      delta: os(s, l) ? d - l : l - s,
                      initialLayout: r,
                      panelConstraints: i.map((e) => e.constraints),
                      pivotIndices: ps(n, t, a),
                      prevLayout: r,
                      trigger: `keyboard`,
                    });
                    r !== e && o(e);
                  }
                }
                break;
              }
            }
        };
        return (
          e.addEventListener(`keydown`, l),
          () => {
            e.removeEventListener(`keydown`, l);
          }
        );
      });
      return () => {
        c.forEach((e) => e());
      };
    }, [a, e, t, n, r, i, o]));
}
function vs(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ys(e, t) {
  let n = e === `horizontal`,
    { x: r, y: i } = To(t);
  return n ? r : i;
}
function bs(e, t, n, r, i) {
  let a = n === `horizontal`,
    o = hs(t, i);
  Z(o, `No resize handle element found for id "${t}"`);
  let s = o.getAttribute(ro.groupId);
  Z(s, `Resize handle element has no group id attribute`);
  let { initialCursorPosition: c } = r,
    l = ys(n, e),
    u = ms(s, i);
  Z(u, `No group element found for id "${s}"`);
  let d = u.getBoundingClientRect(),
    f = a ? d.width : d.height;
  return ((l - c) / f) * 100;
}
function xs(e, t, n, r, i, a) {
  if (So(e)) {
    let t = n === `horizontal`,
      r = 0;
    r = e.shiftKey ? 100 : (i ?? 10);
    let a = 0;
    switch (e.key) {
      case `ArrowDown`:
        a = t ? 0 : r;
        break;
      case `ArrowLeft`:
        a = t ? -r : 0;
        break;
      case `ArrowRight`:
        a = t ? r : 0;
        break;
      case `ArrowUp`:
        a = t ? 0 : -r;
        break;
      case `End`:
        a = 100;
        break;
      case `Home`:
        a = -100;
        break;
    }
    return a;
  } else return r == null ? 0 : bs(e, t, n, r, a);
}
function Ss({ panelDataArray: e }) {
  let t = Array(e.length),
    n = e.map((e) => e.constraints),
    r = 0,
    i = 100;
  for (let a = 0; a < e.length; a++) {
    let e = n[a];
    Z(e, `Panel constraints not found for index ${a}`);
    let { defaultSize: o } = e;
    o != null && (r++, (t[a] = o), (i -= o));
  }
  for (let a = 0; a < e.length; a++) {
    let o = n[a];
    Z(o, `Panel constraints not found for index ${a}`);
    let { defaultSize: s } = o;
    if (s != null) continue;
    let c = e.length - r,
      l = i / c;
    (r++, (t[a] = l), (i -= l));
  }
  return t;
}
function Cs(e, t, n) {
  t.forEach((t, r) => {
    let i = e[r];
    Z(i, `Panel data not found for index ${r}`);
    let { callbacks: a, constraints: o, id: s } = i,
      { collapsedSize: c = 0, collapsible: l } = o,
      u = n[s];
    if (u == null || t !== u) {
      n[s] = t;
      let { onCollapse: e, onExpand: r, onResize: i } = a;
      (i && i(t, u),
        l &&
          (e || r) &&
          (r && (u == null || as(u, c)) && !as(t, c) && r(),
          e && (u == null || !as(u, c)) && as(t, c) && e()));
    }
  });
}
