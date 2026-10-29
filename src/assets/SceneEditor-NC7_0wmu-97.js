// SceneEditor-NC7_0wmu 97 — jsx
// Lines 45559-45700 of readable/assets/SceneEditor-NC7_0wmu.pretty.js (statement-aligned).
var qw = ({ material: e }) => {
  let t = e,
    n = t.color,
    r = t.emissive,
    i = Cw.map((e) => ({ label: e.label, tex: t[e.key] })).filter(
      (e) => !!e.tex,
    ),
    a = Mw(e) && e.uniforms ? Object.keys(e.uniforms) : [];
  return (0, Y.jsxs)(`div`, {
    className: `flex-1 overflow-y-auto scrollbar-themed p-3 space-y-4`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `flex items-start gap-2 text-[10px] text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded px-2 py-1.5`,
        children: [
          (0, Y.jsx)(y, { className: `w-3 h-3 flex-shrink-0 mt-0.5` }),
          (0, Y.jsxs)(`div`, {
            children: [
              (0, Y.jsx)(`div`, {
                className: `font-semibold mb-0.5`,
                children: `Read-only material`,
              }),
              (0, Y.jsx)(`div`, { className: `opacity-90`, children: Kw(e) }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        children: [
          (0, Y.jsx)(Gw, { children: `Material` }),
          (0, Y.jsx)(Ww, { label: `Type`, value: e.type }),
          e.name && (0, Y.jsx)(Ww, { label: `Name`, value: e.name }),
          (0, Y.jsx)(Ww, { label: `Opacity`, value: e.opacity.toFixed(2) }),
          (0, Y.jsx)(Ww, {
            label: `Transparent`,
            value: e.transparent ? `yes` : `no`,
          }),
          n &&
            (0, Y.jsx)(Ww, { label: `Color`, value: `#` + n.getHexString() }),
          r &&
            (0, Y.jsx)(Ww, {
              label: `Emissive`,
              value: `#` + r.getHexString(),
            }),
          typeof t.roughness == `number` &&
            (0, Y.jsx)(Ww, {
              label: `Roughness`,
              value: t.roughness.toFixed(2),
            }),
          typeof t.metalness == `number` &&
            (0, Y.jsx)(Ww, {
              label: `Metalness`,
              value: t.metalness.toFixed(2),
            }),
        ],
      }),
      i.length > 0 &&
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(Gw, { children: `Texture Maps` }),
            i.map((e) =>
              (0, Y.jsx)(
                Ww,
                { label: e.label, value: e.tex.name || e.tex.uuid.slice(0, 8) },
                e.label,
              ),
            ),
          ],
        }),
      a.length > 0 &&
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(Gw, { children: `Uniforms` }),
            (0, Y.jsx)(`div`, {
              className: `flex flex-wrap gap-1`,
              children: a.map((e) =>
                (0, Y.jsx)(
                  `span`,
                  {
                    className: `text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted/30 text-foreground`,
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
    ],
  });
};
function Jw({ label: e, value: t, min: n, max: r, step: i, onChange: a }) {
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsx)(`label`, {
        className: `text-[10px] text-muted-foreground`,
        children: e,
      }),
      (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [
          (0, Y.jsx)(`input`, {
            type: `range`,
            min: n,
            max: r,
            step: i,
            value: t,
            onChange: (e) => a(parseFloat(e.target.value)),
            className: `flex-1 h-1 accent-primary`,
          }),
          (0, Y.jsx)(`span`, {
            className: `text-[10px] text-muted-foreground w-8 text-right`,
            children: t.toFixed(2),
          }),
        ],
      }),
    ],
  });
}
function Yw({ texture: e }) {
  let t = (0, J.useRef)(null);
  return (
    (0, J.useEffect)(() => {
      let n = t.current;
      if (!n) return;
      let r = n.getContext(`2d`);
      if (r) {
        if (e?.image)
          try {
            r.drawImage(e.image, 0, 0, n.width, n.height);
            return;
          } catch {}
        ((r.fillStyle = `#3b3b3b`), r.fillRect(0, 0, n.width, n.height));
      }
    }, [e]),
    (0, Y.jsx)(`canvas`, {
      ref: t,
      width: 32,
      height: 32,
      className: `rounded border border-border`,
    })
  );
}
