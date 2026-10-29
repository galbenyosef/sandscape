// Create-CEn7EAZs 29 — description
// Lines 9216-9254 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Ru(e, t = []) {
  if (!e.length) return [];
  if (typeof e[0] != `string`) return e;
  let n = new Map();
  for (let e of t) {
    if (typeof e?.name != `string`) continue;
    let t = e.name.toLowerCase(),
      r = n.get(t);
    r ? r.push(e) : n.set(t, [e]);
  }
  let r = e.map((e) => {
      let [t, ...r] = e.split(` – `),
        i = t?.trim() || e;
      return {
        name: i,
        description: r.join(` – `).trim(),
        kept: n.get(i.toLowerCase())?.shift(),
      };
    }),
    i = new Set(r.flatMap((e) => (e.kept ? [e.kept.id] : []))),
    a = 0,
    o = () => {
      let e = `ref-${a++}`;
      for (; i.has(e);) e = `ref-${a++}`;
      return (i.add(e), e);
    };
  return r.map((e) =>
    e.kept
      ? { ...e.kept, name: e.name, description: e.description }
      : {
          id: o(),
          name: e.name,
          category: ``,
          description: e.description,
          keywords: [],
          colors: [],
        },
  );
}
