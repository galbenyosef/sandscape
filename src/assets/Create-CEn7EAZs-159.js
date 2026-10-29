// Create-CEn7EAZs 159 — classname
// Lines 52859-53207 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function vH({
  node: e,
  isCodingAgentRunning: t,
  onExecute: n,
  assets: r,
  sessionDir: i,
  gameDesignData: a,
  onUpdateDesignData: o,
  audioKind: s,
}) {
  let [c, l] = (0, X.useState)(``),
    [u, d] = (0, X.useState)(!1),
    [f, p] = (0, X.useState)(null),
    [m, h] = (0, X.useState)(null),
    [g, _] = (0, X.useState)(null),
    v = i?.split(`/`).pop() || i || ``,
    y = s === `sfx`,
    b = y ? `SFX` : `music`,
    x = (0, X.useMemo)(() => gH(s, a?.assets || [], r), [s, a?.assets, r]),
    C = (0, X.useMemo)(() => x.filter((e) => e.hasAudio), [x]),
    w = x.length,
    T = e.state === `in-progress`,
    E = Ua(e.id),
    D = (0, X.useCallback)(
      (e) =>
        r.find((t) => t.asset_name === e.asset_name)?.id || e.asset_name || ``,
      [r],
    ),
    O = Va(E?.id ?? null, v, { missing_only: !0 }),
    k = Va(E?.id ?? null, v, { regenerate: !0 }),
    A = C.length,
    j = w - A,
    M = () => {
      n?.(e.id, `Generate ${b} for assets that are missing it`, {
        params: { missing_only: !0 },
      });
    },
    N = () => {
      n?.(e.id, `Regenerate all ${b} assets`, { params: { regenerate: !0 } });
    },
    P = (0, X.useCallback)(async () => {
      let e = c.trim();
      if (!(!e || !v)) {
        (d(!0), p(null));
        try {
          let t = await vr.addAsset(v, {
            asset_name: e,
            asset_type: hH[s],
            description: ``,
            priority: `medium`,
          });
          if (!t.success) throw Error(t.error || `Failed to add asset`);
          (o && t.asset && o({ assets: [...(a?.assets || []), t.asset] }),
            l(``));
        } catch (e) {
          p(e instanceof Error ? e.message : `Failed to add asset`);
        } finally {
          d(!1);
        }
      }
    }, [c, s, v, a?.assets, o]),
    F = (0, X.useCallback)(
      async (e, t) => {
        if (!v) return;
        let n = D(e);
        (h(e.asset_name), _(null));
        try {
          let r = await Sn(v, n, wn(e.asset_type), {
            regenerate: !0,
            ...(t ? { feedback: t } : {}),
          });
          if (!r.success) throw Error(r.error || `Failed to generate audio`);
        } catch (e) {
          (console.error(`Failed to generate audio:`, e),
            _(e instanceof Error ? e.message : `Failed to generate audio`));
        } finally {
          h(null);
        }
      },
      [v, D],
    ),
    I = (0, X.useMemo)(() => {
      let e = new Map();
      for (let t of x) {
        let n = t.audio_path || t.sfx_path;
        if (!n) continue;
        let r = t.asset_name || t.name || ``;
        e.set(r, vr.getAssetUrl(i, n, { version: t.modified }));
      }
      return e;
    }, [x, i]),
    L = (0, X.useCallback)(
      (e) => I.get(e.asset_name || e.name || ``) || null,
      [I],
    );
  return (0, Z.jsxs)(`div`, {
    className: `p-4 space-y-4`,
    children: [
      g &&
        (0, Z.jsxs)(`div`, {
          className: `flex items-start gap-2 rounded-md border border-red-700/30 bg-red-950/40 px-3 py-2`,
          children: [
            (0, Z.jsx)(te, {
              className: `h-3.5 w-3.5 flex-shrink-0 text-red-400 mt-0.5`,
            }),
            (0, Z.jsx)(`span`, {
              className: `text-[11px] text-red-300`,
              children: g,
            }),
          ],
        }),
      w > 0 &&
        (0, Z.jsx)(`div`, {
          className: `flex items-center justify-end`,
          children: (0, Z.jsxs)(`span`, {
            className: `text-[10px] text-muted-foreground bg-card px-2 py-0.5 rounded`,
            children: [A, `/`, w, ` generated`],
          }),
        }),
      x.length === 0 &&
        (0, Z.jsxs)(`div`, {
          className: `py-8 text-center`,
          children: [
            (0, Z.jsx)(te, {
              className: `h-8 w-8 text-muted-foreground/30 mx-auto mb-2`,
            }),
            (0, Z.jsxs)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: [`No `, b, ` assets planned yet.`],
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-muted-foreground/50 mt-1`,
              children: `Add assets from the Assets tab.`,
            }),
          ],
        }),
      x.length > 0 &&
        (0, Z.jsx)(`div`, {
          className: `space-y-2`,
          children: x.map((e) =>
            (0, Z.jsx)(
              _H,
              {
                asset: e,
                audioKind: s,
                assetId: D(e),
                sessionId: v,
                audioUrl: L(e),
                isGenerating: m === e.asset_name,
                onGenerate: F,
              },
              e.asset_name || e.name,
            ),
          ),
        }),
      (0, Z.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          !T &&
            j > 0 &&
            (0, Z.jsx)($t, {
              onClick: M,
              className: `w-full`,
              disabled: t,
              cost: O?.total ?? null,
              maxCost: O?.maxTotal ?? null,
              label:
                A > 0
                  ? `Generate Remaining (${j})`
                  : `Generate All ${y ? `SFX` : `Music`}`,
              icon: (0, Z.jsx)(Nr, { className: `h-4 w-4` }),
              isLoading: T,
              loadingText: `Generating ${b}...`,
              tooltip: `Generate ${b} for ${j} assets`,
              checkBalance: !0,
            }),
          !T &&
            A > 0 &&
            (0, Z.jsx)($t, {
              variant: `outline`,
              onClick: N,
              className: `w-full`,
              disabled: t,
              cost: k?.total ?? null,
              maxCost: k?.maxTotal ?? null,
              label: `Regenerate All`,
              icon: (0, Z.jsx)(ln, { className: `h-4 w-4` }),
              tooltip: `Regenerate all ${w} ${b} assets`,
              checkBalance: !0,
            }),
          T &&
            !t &&
            (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-center gap-2 text-sm text-primary`,
              children: [
                (0, Z.jsx)(J, { className: `h-4 w-4 animate-spin` }),
                `Generating `,
                b,
                `...`,
              ],
            }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        className: `pt-4 border-t border-border`,
        children: [
          (0, Z.jsxs)(`label`, {
            className: `text-[10px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-2 block`,
            children: [`Add `, y ? `SFX` : `Music`, ` Asset`],
          }),
          (0, Z.jsxs)(`div`, {
            className: `flex gap-2 mb-2`,
            children: [
              (0, Z.jsx)(`input`, {
                type: `text`,
                value: c,
                onChange: (e) => {
                  (l(e.target.value), p(null));
                },
                placeholder: y
                  ? `e.g., Jump sound effect`
                  : `e.g., Main menu theme`,
                className: `flex-1 h-10 bg-card border border-border rounded-lg px-3 text-sm text-foreground/80 placeholder-muted-foreground/40 focus:outline-none focus:border-primary/40`,
                disabled: t || u,
                onKeyDown: (e) => e.key === `Enter` && P(),
              }),
              (0, Z.jsx)(S, {
                size: `sm`,
                onClick: P,
                disabled: !c.trim() || t || u,
                className: `h-10 px-4`,
                children: u
                  ? (0, Z.jsx)(J, { className: `w-4 h-4 animate-spin` })
                  : (0, Z.jsx)(Br, { className: `w-4 h-4` }),
              }),
            ],
          }),
          f &&
            (0, Z.jsx)(`p`, {
              className: `text-xs text-red-400 mt-1`,
              children: f,
            }),
        ],
      }),
    ],
  });
}
function yH(e, t) {
  let n = t || {};
  return (e[e.length - 1] === `` ? [...e, ``] : e)
    .join((n.padRight ? ` ` : ``) + `,` + (n.padLeft === !1 ? `` : ` `))
    .trim();
}
var bH = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  xH = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  SH = {};
function CH(e, t) {
  return ((t || SH).jsx ? xH : bH).test(e);
}
var wH = /[ \t\n\f\r]/g;
function TH(e) {
  return typeof e == `object` ? e.type === `text` && EH(e.value) : EH(e);
}
function EH(e) {
  return e.replace(wH, ``) === ``;
}
var DH = class {
  constructor(e, t, n) {
    ((this.normal = t), (this.property = e), n && (this.space = n));
  }
};
((DH.prototype.normal = {}),
  (DH.prototype.property = {}),
  (DH.prototype.space = void 0));
function OH(e, t) {
  let n = {},
    r = {};
  for (let t of e) (Object.assign(n, t.property), Object.assign(r, t.normal));
  return new DH(n, r, t);
}
function kH(e) {
  return e.toLowerCase();
}
var AH = class {
  constructor(e, t) {
    ((this.attribute = t), (this.property = e));
  }
};
((AH.prototype.attribute = ``),
  (AH.prototype.booleanish = !1),
  (AH.prototype.boolean = !1),
  (AH.prototype.commaOrSpaceSeparated = !1),
  (AH.prototype.commaSeparated = !1),
  (AH.prototype.defined = !1),
  (AH.prototype.mustUseProperty = !1),
  (AH.prototype.number = !1),
  (AH.prototype.overloadedBoolean = !1),
  (AH.prototype.property = ``),
  (AH.prototype.spaceSeparated = !1),
  (AH.prototype.space = void 0));
var jH = t({
    boolean: () => NH,
    booleanish: () => PH,
    commaOrSpaceSeparated: () => RH,
    commaSeparated: () => LH,
    number: () => $,
    overloadedBoolean: () => FH,
    spaceSeparated: () => IH,
  }),
  MH = 0,
  NH = zH(),
  PH = zH(),
  FH = zH(),
  $ = zH(),
  IH = zH(),
  LH = zH(),
  RH = zH();
function zH() {
  return 2 ** ++MH;
}
var BH = Object.keys(jH),
  VH = class extends AH {
    constructor(e, t, n, r) {
      let i = -1;
      if ((super(e, t), HH(this, `space`, r), typeof n == `number`))
        for (; ++i < BH.length;) {
          let e = BH[i];
          HH(this, BH[i], (n & jH[e]) === jH[e]);
        }
    }
  };
VH.prototype.defined = !0;
function HH(e, t, n) {
  n && (e[t] = n);
}
function UH(e) {
  let t = {},
    n = {};
  for (let [r, i] of Object.entries(e.properties)) {
    let a = new VH(r, e.transform(e.attributes || {}, r), i, e.space);
    (e.mustUseProperty &&
      e.mustUseProperty.includes(r) &&
      (a.mustUseProperty = !0),
      (t[r] = a),
      (n[kH(r)] = r),
      (n[kH(a.attribute)] = r));
  }
  return new DH(t, n, e.space);
}
