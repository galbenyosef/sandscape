// SceneEditor-NC7_0wmu 14 — getitem
// Lines 6879-7007 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
function ws(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
  return !0;
}
function Ts({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: i,
  precision: a = 3,
}) {
  let o = n[i],
    s;
  return (
    (s =
      o == null
        ? e == null
          ? `1`
          : e.toPrecision(a)
        : r.length === 1
          ? `1`
          : o.toPrecision(a)),
    {
      flexBasis: 0,
      flexGrow: s,
      flexShrink: 1,
      overflow: `hidden`,
      pointerEvents: t === null ? void 0 : `none`,
    }
  );
}
function Es(e, t = 10) {
  let n = null;
  return (...r) => {
    (n !== null && clearTimeout(n),
      (n = setTimeout(() => {
        e(...r);
      }, t)));
  };
}
function Ds(e) {
  try {
    if (typeof localStorage < `u`)
      ((e.getItem = (e) => localStorage.getItem(e)),
        (e.setItem = (e, t) => {
          localStorage.setItem(e, t);
        }));
    else throw Error(`localStorage not supported in this environment`);
  } catch (t) {
    (console.error(t), (e.getItem = () => null), (e.setItem = () => {}));
  }
}
function Os(e) {
  return `react-resizable-panels:${e}`;
}
function ks(e) {
  return e
    .map((e) => {
      let { constraints: t, id: n, idIsFromProps: r, order: i } = e;
      return r ? n : i ? `${i}:${JSON.stringify(t)}` : JSON.stringify(t);
    })
    .sort((e, t) => e.localeCompare(t))
    .join(`,`);
}
function As(e, t) {
  try {
    let n = Os(e),
      r = t.getItem(n);
    if (r) {
      let e = JSON.parse(r);
      if (typeof e == `object` && e) return e;
    }
  } catch {}
  return null;
}
function js(e, t, n) {
  return (As(e, n) ?? {})[ks(t)] ?? null;
}
function Ms(e, t, n, r, i) {
  let a = Os(e),
    o = ks(t),
    s = As(e, i) ?? {};
  s[o] = { expandToSizes: Object.fromEntries(n.entries()), layout: r };
  try {
    i.setItem(a, JSON.stringify(s));
  } catch (e) {
    console.error(e);
  }
}
function Ns({ layout: e, panelConstraints: t }) {
  let n = [...e],
    r = n.reduce((e, t) => e + t, 0);
  if (n.length !== t.length)
    throw Error(
      `Invalid ${t.length} panel layout: ${n.map((e) => `${e}%`).join(`, `)}`,
    );
  if (!os(r, 100) && n.length > 0)
    for (let e = 0; e < t.length; e++) {
      let t = n[e];
      (Z(t != null, `No layout data found for index ${e}`),
        (n[e] = (100 / r) * t));
    }
  let i = 0;
  for (let e = 0; e < t.length; e++) {
    let r = n[e];
    Z(r != null, `No layout data found for index ${e}`);
    let a = cs({ panelConstraints: t, panelIndex: e, size: r });
    r != a && ((i += r - a), (n[e] = a));
  }
  if (!os(i, 0))
    for (let e = 0; e < t.length; e++) {
      let r = n[e];
      Z(r != null, `No layout data found for index ${e}`);
      let a = r + i,
        o = cs({ panelConstraints: t, panelIndex: e, size: a });
      if (r !== o && ((i -= o - r), (n[e] = o), os(i, 0))) break;
    }
  return n;
}
var Ps = 100,
  Fs = {
    getItem: (e) => (Ds(Fs), Fs.getItem(e)),
    setItem: (e, t) => {
      (Ds(Fs), Fs.setItem(e, t));
    },
  },
  Is = {};
