// assets__Create-ea24k1TY 211 — push
// Lines 71872-72049 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function Lle() {
  let e = [],
    t = new Set(ac.filter(N1).map((e) => e.id));
  for (let n of F1)
    t.has(n) || e.push(`SPINE names '${n}', which is not a workflow node`);
  for (let t of F1) {
    if (t === `concept-lock-in`) continue;
    let n = V1(t);
    n.length > 0 &&
      e.push(
        `spine node '${t}' has drawn children [${n.join(`, `)}] — nothing hangs off the spine`,
      );
  }
  let n = new Set([P1]),
    r = [P1];
  for (; r.length > 0;) {
    let e = r.pop();
    for (let t of V1(e)) n.has(t) || (n.add(t), r.push(t));
  }
  for (let r of t)
    F1.includes(r) ||
      n.has(r) ||
      e.push(`'${r}' is not reachable from '${P1}' through the drawn graph`);
  let i = new Set([...I1, ...L1]);
  for (let t of I1)
    L1.includes(t) &&
      e.push(`'${t}' is listed in both UP_ROOTS and DOWN_ORDER`);
  let a = V1(P1).filter((e) => !F1.includes(e));
  for (let t of a)
    i.has(t) ||
      e.push(`concept child '${t}' is in neither UP_ROOTS nor DOWN_ORDER`);
  for (let t of i)
    a.includes(t) ||
      e.push(
        `'${t}' is listed as a cascade root but is not a drawn child of '${P1}'`,
      );
  for (let t of G1().unplaced)
    e.push(
      `'${t}' is unplaced by the cascade — it would land in the fallback row`,
    );
  return e;
}
function K1() {
  for (let e of Lle()) console.error(`[treeLayout] ${e}`);
  let { positions: e, unplaced: t } = G1(),
    n = 0;
  for (let t of e.values()) t.y > n && (n = t.y);
  return (
    t.forEach((t, r) => {
      e.set(t, { x: r * 130, y: n + 200 });
    }),
    e
  );
}
var q1 = null;
function Rle() {
  return ((q1 ||= K1()), q1);
}
function J1(e) {
  let t = Rle();
  return [...e].sort((e, n) => {
    let r = t.get(e),
      i = t.get(n);
    return !r && !i
      ? e.localeCompare(n)
      : r
        ? i
          ? r.x - i.x || r.y - i.y || e.localeCompare(n)
          : -1
        : 1;
  });
}
function Y1(e, t, n, r, i = 42 / 2, a = i) {
  if (r !== t) {
    let o = Math.sign(r - t),
      s = t + o * i,
      c = r - o * a,
      l = (s + c) / 2;
    return `M ${e} ${s} C ${e} ${l}, ${n} ${l}, ${n} ${c}`;
  }
  let o = Math.sign(n - e) || 1,
    s = e + o * i,
    c = n - o * a,
    l = (s + c) / 2;
  return `M ${s} ${t} C ${l} ${t}, ${l} ${r}, ${c} ${r}`;
}
var zle = new Set([`complete`, `outdated`]);
function Ble(e) {
  if (Ps.has(e)) return !1;
  let t = sc(e);
  return !!t && N1(t);
}
function Vle(e, t) {
  let n = sc(e);
  return n
    ? n.prerequisites.map((e) => ({
        nodeId: e,
        name: sc(e)?.name ?? e,
        met: zle.has(t.get(e)?.state ?? `locked`),
      }))
    : [];
}
function Hle(e, t, n) {
  return t.has(e) && !n?.has(e);
}
function Ule(e, t, n) {
  return Hle(e, t, n) ? J1(V1(e).filter((e) => !t.has(e) && Ble(e))) : [];
}
function Wle(e, t) {
  let n = [];
  for (let r of J1(e)) {
    let i = Ule(r, e, t);
    i.length !== 0 && n.push({ parentId: r, slotNodeId: i[0], options: i });
  }
  return n;
}
var X1 = 11,
  Z1 = 0.35,
  Q1 = 2.5,
  $1 = 1.25,
  e0 = (e) => Math.min(Q1, Math.max(Z1, e));
function t0(e, t, n, r) {
  let i = e0(t);
  if (i === e.z) return e;
  let a = i / e.z;
  return { x: n - (n - e.x) * a, y: r - (r - e.y) * a, z: i };
}
var Gle = `
@keyframes tree-node-scale-in {
  0% { transform: scale(0.6); }
  70% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
@keyframes tree-node-ring-pulse {
  0% { transform: scale(1); opacity: 0.85; }
  100% { transform: scale(1.8); opacity: 0; }
}
.tree-node-appear {
  transform-box: fill-box;
  transform-origin: center;
  animation: tree-node-scale-in 350ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.tree-node-appear-ring {
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0;
  animation: tree-node-ring-pulse 700ms ease-out 350ms 3;
}
`,
  Kle = {
    locked: { stroke: `#333`, fill: `#1a1a22`, opacity: 0.35 },
    available: { stroke: `#555`, fill: `#1e1e2a`, opacity: 0.8 },
    "in-progress": {
      stroke: `hsl(269 84% 45%)`,
      fill: `#1e1e2a`,
      opacity: 1,
      animate: !0,
    },
    complete: { stroke: `#34d399`, fill: `#1e2a24`, opacity: 1 },
    "needs-review": { stroke: `#fbbf24`, fill: `#2a2618`, opacity: 1 },
    outdated: { stroke: `#f87171`, fill: `#2a1a1a`, opacity: 1 },
  },
  qle = {
    locked: `Locked`,
    available: `Ready`,
    "in-progress": `In Progress`,
    complete: `Complete`,
    "needs-review": `Needs Review`,
    outdated: `Outdated`,
  },
  Jle = {
    locked: `bg-gray-500`,
    available: `bg-white`,
    "in-progress": `bg-primary animate-pulse`,
    complete: `bg-emerald-400`,
    "needs-review": `bg-amber-400`,
    outdated: `bg-red-400`,
  };
