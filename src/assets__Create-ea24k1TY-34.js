// assets__Create-ea24k1TY 34 — math
// Lines 10810-11104 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Qu = [8, 12, 16],
  $u = [8, 10, 12],
  ed = [128, 256, 512],
  td = [`Idle`, `Walk`, `Run`, `Jump`, `Attack`, `Hurt`, `Die`],
  nd = new Set([`attack`, `jump`, `hurt`, `die`]);
function rd(e) {
  return !nd.has(sd(e));
}
function id(e) {
  if (!Number.isFinite(e)) return 8;
  let t = Math.round(e);
  return t <= 9 ? 8 : t <= 13 ? 12 : 16;
}
function ad(e) {
  return Number.isFinite(e)
    ? ed.reduce((t, n) => (Math.abs(n - e) < Math.abs(t - e) ? n : t))
    : 256;
}
function od(e) {
  return Number.isFinite(e) ? Math.min(30, Math.max(1, Math.round(e))) : 10;
}
function sd(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, `_`);
}
function cd(e, t) {
  let n = (e || ``).trim(),
    r = t.trim().toLowerCase().replace(/\s+/g, ` `);
  return n ? `${n} ${r}` : r;
}
function ld(e) {
  let t = (e.feedback || ``).trim();
  return {
    animation_name: sd(e.animationName),
    frame_count: id(e.frameCount),
    fps: od(e.fps),
    loop: e.loop,
    cell_height: ad(e.cellHeight),
    skip_first: !!e.skipFirst,
    skip_last: !!e.skipLast,
    ...(t ? { feedback: t } : {}),
  };
}
function ud(e, t) {
  let n = (t || ``).trim();
  return { ...(e ? { regenerate: !0 } : {}), ...(n ? { feedback: n } : {}) };
}
function dd(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = t.id || t.asset_name;
    (t.id && n.set(t.id, e), t.asset_name && n.set(t.asset_name, e));
  }
  let r = new Map(),
    i = [];
  for (let e of t) {
    let t = e.source_asset_id ? n.get(e.source_asset_id) : void 0;
    if (!t) {
      i.push(e);
      continue;
    }
    let a = r.get(t);
    a ? a.push(e) : r.set(t, [e]);
  }
  return { byCharacter: r, orphans: i };
}
function fd(e, t) {
  let n = (e || ``).replace(/_/g, ` `).trim(),
    r = (t || ``).replace(/_/g, ` `).trim();
  if (!r) return n;
  let i = n.toLowerCase(),
    a = r.toLowerCase();
  return (
    (i.startsWith(a) &&
      n.length > r.length &&
      n.slice(r.length).replace(/^[\s_-]+/, ``)) ||
    n
  );
}
function pd(e) {
  let t = Math.max(1, e.frame_count),
    n = Number.isFinite(e.play_start) ? e.play_start : 0,
    r = Math.min(Math.max(0, Math.round(n)), t - 1),
    i = Number.isFinite(e.play_count) ? e.play_count : t;
  return { start: r, count: Math.min(Math.max(1, Math.round(i)), t - r) };
}
function md(e, t) {
  let { start: n, count: r } = pd(t ?? { frame_count: 1 });
  return Number.isFinite(e) && e >= n && e < n + r ? Math.round(e) : n;
}
function hd(e, t, n) {
  let r = Math.max(1, Math.round(e)),
    i = t && r > 1 ? 1 : 0,
    a = n && r - i > 1 ? 1 : 0;
  return { play_start: i, play_count: Math.max(1, r - i - a) };
}
function gd(e) {
  let { start: t, count: n } = pd(e);
  return { skipFirst: t > 0, skipLast: t + n < Math.max(1, e.frame_count) };
}
function _d(e) {
  return `${e.frame_count} frames · ${e.frame_width}x${e.frame_height}`;
}
function vd(e) {
  let t = `${e.fps} fps · ${e.loop === !1 ? `plays once` : `loops`}`,
    { start: n, count: r } = pd(e);
  return n === 0 && r === Math.max(1, e.frame_count)
    ? t
    : `${t} · plays ${n + 1}-${n + r} of ${e.frame_count}`;
}
var yd = 1024;
function bd(e) {
  return Number.isFinite(e) ? Math.max(-1024, Math.min(yd, Math.round(e))) : 0;
}
function xd(e) {
  let t = Math.max(1, e?.frame_count ?? 1),
    n = e?.frame_offsets ?? [];
  return Array.from({ length: t }, (e, t) => {
    let r = n[t];
    return Array.isArray(r) ? [bd(Number(r[0])), bd(Number(r[1]))] : [0, 0];
  });
}
function Sd(e, t, n, r) {
  if (t < 0 || t >= e.length) return e;
  let i = e.map((e) => [e[0], e[1]]);
  return ((i[t] = [bd(n), bd(r)]), i);
}
function Cd(e, t) {
  let n = t ?? [0, 0];
  return [e[0] - n[0], e[1] - n[1]];
}
function wd(e, t, n, r) {
  let i = Number.isFinite(r) && r > 0 ? r : 1;
  return [bd(e[0] + t * i), bd(e[1] + n * i)];
}
function Td(e, t, n) {
  let r = Math.max(0, Math.floor(t));
  return r < 2 || e < 0 || e >= r
    ? { prev: null, next: null }
    : {
        prev: e > 0 ? e - 1 : n ? r - 1 : null,
        next: e < r - 1 ? e + 1 : n ? 0 : null,
      };
}
function Ed(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => e[0] === t[n][0] && e[1] === t[n][1])
  );
}
function Dd({
  frameCount: e,
  onFrameCount: t,
  fps: n,
  onFps: r,
  loop: i,
  onLoop: a,
  cellHeight: o,
  onCellHeight: s,
  direction: c,
  onDirection: l,
  disabled: u = !1,
}) {
  let d = !$u.includes(n);
  return (0, Z.jsxs)(`div`, {
    className: `space-y-2.5`,
    children: [
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: hu, children: `Frames` }),
          (0, Z.jsxs)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: [
              Qu.map((n) =>
                (0, Z.jsx)(
                  `button`,
                  {
                    type: `button`,
                    disabled: u,
                    onClick: () => t(n),
                    className: `${gu} ${e === n ? _u : vu}`,
                    children: n,
                  },
                  n,
                ),
              ),
              (0, Z.jsx)(`span`, {
                className: `text-[10px] text-muted-foreground/40`,
                children: `More frames, smoother motion`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: hu, children: `Speed` }),
          (0, Z.jsxs)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: [
              $u.map((e) =>
                (0, Z.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    disabled: u,
                    onClick: () => r(e),
                    className: `${gu} ${n === e ? _u : vu}`,
                    children: [e, ` fps`],
                  },
                  e,
                ),
              ),
              (0, Z.jsx)(`input`, {
                type: `number`,
                min: 1,
                max: 30,
                value: d ? n : ``,
                placeholder: `Other`,
                disabled: u,
                onChange: (e) => {
                  e.target.value !== `` && r(od(Number(e.target.value)));
                },
                className: `h-10 w-[74px] px-2 text-xs ${Cu} ${d ? `border-white/20 text-foreground` : ``}`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: hu, children: `Playback` }),
          (0, Z.jsxs)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                disabled: u,
                onClick: () => a(!0),
                className: `${gu} ${i ? _u : vu}`,
                children: `Loops`,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                disabled: u,
                onClick: () => a(!1),
                className: `${gu} ${i ? vu : _u}`,
                children: `Plays once`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: hu, children: `Size` }),
          (0, Z.jsx)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: ed.map((e) =>
              (0, Z.jsxs)(
                `button`,
                {
                  type: `button`,
                  disabled: u,
                  onClick: () => s(e),
                  className: `${gu} ${o === e ? _u : vu}`,
                  children: [e, `px`],
                },
                e,
              ),
            ),
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, {
            className: hu,
            children: `Direction (optional)`,
          }),
          (0, Z.jsx)(`input`, {
            type: `text`,
            value: c,
            disabled: u,
            onChange: (e) => l(e.target.value),
            placeholder: `e.g. bouncy, weight on the down beat`,
            className: `mt-1 h-10 w-full px-3 text-xs ${Cu}`,
          }),
        ],
      }),
    ],
  });
}
