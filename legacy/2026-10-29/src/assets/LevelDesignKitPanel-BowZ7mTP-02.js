// LevelDesignKitPanel-BowZ7mTP 02 — children
// Lines 289-637 of readable/assets/LevelDesignKitPanel-BowZ7mTP.pretty.js (statement-aligned).
function it({
  cost: e,
  maxCost: t = null,
  label: n,
  icon: r,
  isLoading: i = !1,
  loadingText: o,
  checkBalance: s = !0,
  currentBalance: c,
  onInsufficientBalance: l,
  tooltip: u,
  showCostBreakdown: d = !1,
  costBreakdown: f,
  disabled: p,
  className: m = ``,
  variant: h = `default`,
  ...g
}) {
  let [_, v] = (0, P.useState)(c ?? null),
    [ee, y] = (0, P.useState)(!1);
  ((0, P.useEffect)(() => {
    s && c === void 0
      ? (y(!0),
        w.getBalance().then((e) => {
          (e.success && v(e.balance), y(!1));
        }))
      : c !== void 0 && v(c);
  }, [s, c]),
    (0, P.useEffect)(() => {
      let e = async () => {
        let e = await w.getBalance();
        e.success && v(e.balance);
      };
      return (
        window.addEventListener(`coin-balance-refresh`, e),
        () => window.removeEventListener(`coin-balance-refresh`, e)
      );
    }, []));
  let b = s && e !== null && _ !== null && _ < e,
    x = e !== null && t !== null && t > e,
    S = k(),
    te = p || i || ee || b || S;
  (0, P.useEffect)(() => {
    b && l && l();
  }, [b, l]);
  let ne = (0, N.jsx)(a, {
    variant: b ? `outline` : h,
    disabled: te,
    className: `gap-2 ${b ? `opacity-60` : ``} ${m}`,
    ...g,
    children: i
      ? (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(T, { className: `h-4 w-4 animate-spin` }),
            o || `Processing...`,
          ],
        })
      : (0, N.jsxs)(N.Fragment, {
          children: [
            r,
            (0, N.jsx)(`span`, { children: n }),
            e !== null &&
              (0, N.jsxs)(`span`, {
                className: `inline-flex items-center gap-0.5 text-amber-400`,
                children: [
                  (0, N.jsxs)(`span`, {
                    className: `text-xs`,
                    children: [`(`, e, x ? `–${t}` : ``],
                  }),
                  (0, N.jsx)(pe, { className: `h-3 w-3` }),
                  (0, N.jsx)(`span`, { className: `text-xs`, children: `)` }),
                ],
              }),
          ],
        }),
  });
  return !u && !d && !b
    ? ne
    : (0, N.jsx)(ce, {
        children: (0, N.jsxs)(fe, {
          children: [
            (0, N.jsx)(de, { asChild: !0, children: ne }),
            (0, N.jsx)(le, {
              side: `top`,
              className: `bg-gray-900 border-gray-700 text-gray-200 p-3 max-w-xs`,
              children: (0, N.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  u && (0, N.jsx)(`p`, { className: `text-sm`, children: u }),
                  x &&
                    (0, N.jsxs)(`div`, {
                      className: `text-xs text-gray-400`,
                      children: [
                        e,
                        ` coins are held up front; up to `,
                        t,
                        ` if the agent adds assets the direction needs.`,
                      ],
                    }),
                  b &&
                    (0, N.jsxs)(`div`, {
                      className: `text-red-400 text-sm`,
                      children: [
                        `Insufficient balance! You need `,
                        e,
                        ` coins but have`,
                        ` `,
                        _ ?? 0,
                        `.`,
                      ],
                    }),
                  d &&
                    f &&
                    f.length > 0 &&
                    (0, N.jsxs)(`div`, {
                      className: `border-t border-gray-700 pt-2 mt-2`,
                      children: [
                        (0, N.jsx)(`div`, {
                          className: `text-xs text-gray-400 mb-1`,
                          children: `Cost Breakdown:`,
                        }),
                        f.map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex justify-between text-xs text-gray-300`,
                              children: [
                                (0, N.jsx)(`span`, { children: e.label }),
                                (0, N.jsxs)(`span`, {
                                  className: `text-amber-400`,
                                  children: [
                                    e.cost,
                                    ` `,
                                    (0, N.jsx)(pe, {
                                      className: `h-2.5 w-2.5 inline`,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                        e !== null &&
                          (0, N.jsxs)(`div`, {
                            className: `flex justify-between text-xs font-semibold text-white border-t border-gray-700 mt-1 pt-1`,
                            children: [
                              (0, N.jsx)(`span`, { children: `Total` }),
                              (0, N.jsxs)(`span`, {
                                className: `text-amber-400`,
                                children: [
                                  e,
                                  ` `,
                                  (0, N.jsx)(pe, {
                                    className: `h-2.5 w-2.5 inline`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  s &&
                    _ !== null &&
                    !b &&
                    (0, N.jsxs)(`div`, {
                      className: `text-xs text-gray-400 border-t border-gray-700 pt-2 mt-2`,
                      children: [
                        `Your balance: `,
                        _,
                        ` coins`,
                        e !== null && ` (after: ${_ - e})`,
                      ],
                    }),
                ],
              }),
            }),
          ],
        }),
      });
}
var at = `/settings?tab=billing`;
function ot() {
  window.open(at, `_blank`, `noopener`);
}
function U(e, t) {
  return (
    e({
      title: `Insufficient Sandcoins`,
      description: t,
      variant: `destructive`,
      action: (0, N.jsx)(Te, {
        altText: `Get more Sandcoins`,
        onClick: ot,
        children: `Get Sandcoins`,
      }),
    }),
    ue(),
    t
  );
}
function st(e, t, n) {
  let r = t.error,
    i =
      typeof r == `string` && r
        ? r
        : r == null
          ? n.fallback
          : ct(r) || n.fallback;
  return t.error_code === `INSUFFICIENT_BALANCE`
    ? U(e, i)
    : (e({
        title: n.title,
        description: i,
        variant: n.variant ?? `destructive`,
      }),
      i);
}
function ct(e) {
  if (Array.isArray(e)) {
    let t = e
      .map((e) =>
        typeof e == `string` ? e : typeof e?.msg == `string` ? e.msg : ``,
      )
      .filter(Boolean);
    if (t.length) return t.join(`; `);
  }
  if (e && typeof e == `object`) {
    let t = e.msg ?? e.message;
    if (typeof t == `string` && t) return t;
  }
  try {
    return typeof e == `string` ? e : (JSON.stringify(e) ?? ``);
  } catch {
    return ``;
  }
}
var lt = [
  `floor`,
  `corridor_floor`,
  `arena_floor`,
  `wall`,
  `corridor_wall`,
  `arena_wall`,
  `ceiling`,
  `corridor_ceiling`,
  `arena_ceiling`,
  `door`,
  `column`,
  `beam`,
  `trim`,
  `pillar`,
  `prop`,
  `wall_panel`,
  `light_socket`,
  `floor_insert`,
];
function ut(e) {
  return e
    .replace(/\.[a-z0-9]+$/i, ``)
    .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}
function dt(e) {
  return ut(e.split(/[\\/]/).pop() || e);
}
function ft(e) {
  let t = e.split(/[\\/]/);
  return (t.pop(), t.reverse().flatMap(ut));
}
var pt =
    `barrel.barrels.drum.drums.crate.crates.box.boxes.container.containers.tank.tanks.canister.cylinder.bucket.sack.sandbag.pallet.bin.dumpster.debris.rubble.rock.rocks.stone.stones.log.plank.planks.pipe.pipes.duct.cable.cables.wire.wires.valve.tire.tyre.wheel.bench.table.chair.stool.desk.shelf.shelves.locker.cabinet.chest.cart.trolley.ladder.fence.barrier.barricade.sign.signpost.board.generator.machine.console.terminal.computer.monitor.screen.radio.toolbox.statue.plant.tree.bush.trash.rubbish`.split(
      `.`,
    ),
  mt = [
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
    [(e) => pt.some((t) => e.has(t)), `prop`],
  ],
  ht = new Set([`floor`, `wall`, `ceiling`]);
function gt(e) {
  for (let t of [...ft(e), ...dt(e)]) {
    if (t === `arena`) return `arena`;
    if (t === `corridor` || t === `hall`) return `corridor`;
  }
  return null;
}
function _t(e) {
  let t = new Set(dt(e));
  for (let [n, r] of mt) {
    if (!n(t)) continue;
    if (!ht.has(r)) return { category: r, recognized: !0 };
    let i = gt(e);
    return { category: i ? `${i}_${r}` : r, recognized: !0 };
  }
  return { category: `prop`, recognized: !1 };
}
function vt(e, t) {
  if (!(e === `wall` || e === `corridor_wall` || e === `arena_wall`)) return 1;
  let n = new Set(dt(t));
  return [`long`, `band`, `base`, `low`, `short`, `skirt`].some((e) => n.has(e))
    ? G[1].value
    : G[0].value;
}
var yt = new Set([
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
function W(e) {
  return yt.has(e);
}
function bt(e) {
  return W(e) ? `box` : `mesh`;
}
