// Create-CEn7EAZs 130 — classname
// Lines 44131-44206 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function wI(e) {
  let t = { name: ``, dirs: new Map(), files: [] };
  for (let [n, r] of Object.entries(e)) {
    let e = CI(n).split(`/`),
      i = t;
    for (let t of e.slice(0, -1)) {
      let e = i.dirs.get(t);
      (e || ((e = { name: t, dirs: new Map(), files: [] }), i.dirs.set(t, e)),
        (i = e));
    }
    i.files.push({ name: e[e.length - 1], fullPath: n, summary: r });
  }
  let n = (e) => {
    e.files.sort((e, t) => e.name.localeCompare(t.name));
    for (let t of e.dirs.values()) n(t);
  };
  return (n(t), t);
}
var TI = new Set([
    `js`,
    `ts`,
    `jsx`,
    `tsx`,
    `json`,
    `html`,
    `htm`,
    `css`,
    `md`,
    `txt`,
    `xml`,
    `svg`,
    `csv`,
    `yml`,
    `yaml`,
    `glsl`,
    `vert`,
    `frag`,
  ]),
  EI = new Set([`png`, `jpg`, `jpeg`, `webp`, `gif`]),
  DI = new Set([`mp3`, `wav`, `ogg`, `flac`, `m4a`, `aac`]);
function OI(e) {
  let t = e.lastIndexOf(`.`);
  return t >= 0 ? e.slice(t + 1).toLowerCase() : ``;
}
function kI(e) {
  let t = OI(e);
  return EI.has(t) || t === `svg` ? Wo : DI.has(t) ? Ko : TI.has(t) ? Uo : Yo;
}
function AI(e) {
  return e < 1024
    ? `${e} B`
    : e < 1024 * 1024
      ? `${(e / 1024).toFixed(1)} KB`
      : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function jI(e) {
  try {
    return vee(new Date(e), { addSuffix: !0 });
  } catch {
    return e;
  }
}
var MI = {
  push: { label: `push`, className: `bg-blue-500/15 text-blue-400` },
  editor: { label: `editor`, className: `bg-emerald-500/15 text-emerald-400` },
  generation: { label: `AI`, className: `bg-purple-500/15 text-purple-400` },
  checkout: { label: `restore`, className: `bg-amber-500/15 text-amber-400` },
  baseline: { label: `earlier`, className: `bg-gray-500/15 text-gray-400` },
};
function NI(e) {
  return e.author_name
    ? e.author_name
    : e.author_id
      ? e.author_id.slice(0, 8)
      : null;
}
