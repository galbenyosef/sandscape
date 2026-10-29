// LevelDesignKitPanel-Cm6YODiQ 02 — prockind
// Lines 350-537 of readable/assets/LevelDesignKitPanel-Cm6YODiQ.pretty.js (statement-aligned).
function F(e) {
  return Le(e.split(/[\\/]/).pop() || e);
}
function Re(e) {
  let t = e.split(/[\\/]/);
  return (t.pop(), t.reverse().flatMap(Le));
}
var ze =
    `barrel.barrels.drum.drums.crate.crates.box.boxes.container.containers.tank.tanks.canister.cylinder.bucket.sack.sandbag.pallet.bin.dumpster.debris.rubble.rock.rocks.stone.stones.log.plank.planks.pipe.pipes.duct.cable.cables.wire.wires.valve.tire.tyre.wheel.bench.table.chair.stool.desk.shelf.shelves.locker.cabinet.chest.cart.trolley.ladder.fence.barrier.barricade.sign.signpost.board.generator.machine.console.terminal.computer.monitor.screen.radio.toolbox.statue.plant.tree.bush.trash.rubbish`.split(
      `.`,
    ),
  Be = [
    [(e) => e.has(`ceiling`) || e.has(`cieling`) || e.has(`ceil`), `ceiling`],
    [
      (e) =>
        e.has(`door`) ||
        e.has(`arch`) ||
        e.has(`archway`) ||
        e.has(`gate`) ||
        e.has(`entrance`) ||
        e.has(`entranec`),
      `door`,
    ],
    [(e) => e.has(`wall`) && e.has(`panel`), `wall_panel`],
    [
      (e) => e.has(`wall`) && (e.has(`corridor`) || e.has(`hall`)),
      `corridor_wall`,
    ],
    [(e) => e.has(`wall`) && e.has(`arena`), `arena_wall`],
    [(e) => e.has(`wall`), `wall`],
    [(e) => e.has(`floor`) || e.has(`ground`) || e.has(`deck`), `floor`],
    [(e) => e.has(`column`) || e.has(`pillar`) || e.has(`post`), `column`],
    [(e) => e.has(`beam`) || e.has(`girder`), `beam`],
    [(e) => e.has(`trim`) || e.has(`skirting`) || e.has(`molding`), `trim`],
    [
      (e) =>
        e.has(`light`) || e.has(`lamp`) || e.has(`sconce`) || e.has(`socket`),
      `light_socket`,
    ],
    [(e) => e.has(`vent`) || e.has(`grate`) || e.has(`grille`), `floor_insert`],
    [(e) => ze.some((t) => e.has(t)), `prop`],
  ],
  I = new Set([`floor`, `wall`, `ceiling`]);
function Ve(e) {
  for (let t of [...Re(e), ...F(e)]) {
    if (t === `arena`) return `arena`;
    if (t === `corridor` || t === `hall`) return `corridor`;
  }
  return null;
}
function He(e) {
  let t = new Set(F(e));
  for (let [n, r] of Be) {
    if (!n(t)) continue;
    if (!I.has(r)) return { category: r, recognized: !0 };
    let i = Ve(e);
    return { category: i ? `${i}_${r}` : r, recognized: !0 };
  }
  return { category: `prop`, recognized: !1 };
}
function Ue(e, t) {
  if (!(e === `wall` || e === `corridor_wall` || e === `arena_wall`)) return 1;
  let n = new Set(F(t));
  return [`long`, `band`, `base`, `low`, `short`, `skirt`].some((e) => n.has(e))
    ? R[1].value
    : R[0].value;
}
var We = new Set([
  `floor`,
  `corridor_floor`,
  `arena_floor`,
  `wall`,
  `corridor_wall`,
  `arena_wall`,
  `ceiling`,
  `corridor_ceiling`,
  `arena_ceiling`,
]);
function L(e) {
  return We.has(e);
}
function Ge(e) {
  return L(e) ? `box` : `mesh`;
}
var R = [
  { label: `common`, value: 1 },
  { label: `uncommon`, value: 0.35 },
  { label: `rare`, value: 0.1 },
];
function Ke(e) {
  let t = R[0].value;
  for (let n of R) Math.abs(n.value - e) < Math.abs(t - e) && (t = n.value);
  return t;
}
function qe(e, t, n = 0.5) {
  let r = e.map((e) => (e > 0 ? e : 1)),
    i = r.reduce((e, t) => e + t, 0);
  if (!(i > 0) || t < 0 || t >= r.length) return 0;
  if (r.length === 1) return 1;
  let a = Math.min(1, Math.max(0, n)),
    o = 0;
  for (let e = 0; e < r.length; e += 1) {
    let n = r[e] / i;
    if (e === t) o += n * (1 - a);
    else {
      let s = i - r[e];
      s > 0 && (o += n * a * (r[t] / s));
    }
  }
  return o;
}
function Je(e) {
  return /^kits\//i.test(e);
}
var Ye = /\.(glb|gltf)(\?.*)?$/i,
  Xe = /\/api\/game\/[^/]+\/(.+)$/i;
function Ze(e) {
  if (typeof e != `string` || !e.trim()) return null;
  let t = e.trim(),
    n = Xe.exec(t);
  if (n) {
    let e = n[1].split(`?`)[0];
    try {
      e = decodeURIComponent(e);
    } catch {}
    t = e.replace(/^generated_assets\//, ``);
  } else t = _(t).split(`?`)[0];
  return !Ye.test(t) ||
    t.startsWith(`/`) ||
    t.includes(`..`) ||
    t.includes(`\0`)
    ? null
    : t;
}
function z(e) {
  let t = e?.children;
  return Array.isArray(t) ? t : [];
}
function Qe(e) {
  let t = e?.object;
  if (!t) return [];
  let n = new Map(),
    r = z(t);
  for (; r.length;) {
    let e = r.pop();
    r.push(...z(e));
    let t = e?.userData;
    if (!t || typeof t != `object` || t.editorOnly || !t.isAssetReference)
      continue;
    let i = Ze(String(t.modelPath ?? ``));
    if (!i) continue;
    let a = n.get(i);
    if (a) {
      ((a.count += 1),
        !a.procKind &&
          typeof t.procKind == `string` &&
          (a.procKind = t.procKind));
      continue;
    }
    let o = i.split(`/`).pop() || i,
      s = typeof t.assetName == `string` ? t.assetName : ``;
    n.set(i, {
      source: i,
      label: o.replace(/\.(glb|gltf)$/i, ``),
      assetName: s && s !== o ? s : void 0,
      procKind: typeof t.procKind == `string` ? t.procKind : void 0,
      count: 1,
      alreadyKitArt: Je(i),
    });
  }
  return [...n.values()].sort(
    (e, t) => t.count - e.count || e.source.localeCompare(t.source),
  );
}
var B = 1.7;
function V(e) {
  e.traverse((e) => {
    let t = e;
    if (t.isMesh) {
      t.geometry?.dispose();
      for (let e of Array.isArray(t.material) ? t.material : [t.material])
        if (e) {
          for (let t of Object.values(e)) t?.isTexture && t.dispose();
          e.dispose();
        }
    }
  });
}
