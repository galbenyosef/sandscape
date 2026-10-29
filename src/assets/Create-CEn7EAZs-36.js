// Create-CEn7EAZs 36 — math
// Lines 11449-11743 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
var Od = [8, 12, 16],
  kd = [8, 10, 12],
  Ad = [128, 256, 512],
  jd = [`Idle`, `Walk`, `Run`, `Jump`, `Attack`, `Hurt`, `Die`],
  Md = new Set([`attack`, `jump`, `hurt`, `die`]);
function Nd(e) {
  return !Md.has(Ld(e));
}
function Pd(e) {
  if (!Number.isFinite(e)) return 8;
  let t = Math.round(e);
  return t <= 9 ? 8 : t <= 13 ? 12 : 16;
}
function Fd(e) {
  return Number.isFinite(e)
    ? Ad.reduce((t, n) => (Math.abs(n - e) < Math.abs(t - e) ? n : t))
    : 256;
}
function Id(e) {
  return Number.isFinite(e) ? Math.min(30, Math.max(1, Math.round(e))) : 10;
}
function Ld(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, `_`);
}
function Rd(e, t) {
  let n = (e || ``).trim(),
    r = t.trim().toLowerCase().replace(/\s+/g, ` `);
  return n ? `${n} ${r}` : r;
}
function zd(e) {
  let t = (e.feedback || ``).trim();
  return {
    animation_name: Ld(e.animationName),
    frame_count: Pd(e.frameCount),
    fps: Id(e.fps),
    loop: e.loop,
    cell_height: Fd(e.cellHeight),
    skip_first: !!e.skipFirst,
    skip_last: !!e.skipLast,
    ...(t ? { feedback: t } : {}),
  };
}
function Bd(e, t) {
  let n = (t || ``).trim();
  return { ...(e ? { regenerate: !0 } : {}), ...(n ? { feedback: n } : {}) };
}
function Vd(e, t) {
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
function Hd(e, t) {
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
function Ud(e) {
  let t = Math.max(1, e.frame_count),
    n = Number.isFinite(e.play_start) ? e.play_start : 0,
    r = Math.min(Math.max(0, Math.round(n)), t - 1),
    i = Number.isFinite(e.play_count) ? e.play_count : t;
  return { start: r, count: Math.min(Math.max(1, Math.round(i)), t - r) };
}
function Wd(e, t) {
  let { start: n, count: r } = Ud(t ?? { frame_count: 1 });
  return Number.isFinite(e) && e >= n && e < n + r ? Math.round(e) : n;
}
function Gd(e, t, n) {
  let r = Math.max(1, Math.round(e)),
    i = t && r > 1 ? 1 : 0,
    a = n && r - i > 1 ? 1 : 0;
  return { play_start: i, play_count: Math.max(1, r - i - a) };
}
function Kd(e) {
  let { start: t, count: n } = Ud(e);
  return { skipFirst: t > 0, skipLast: t + n < Math.max(1, e.frame_count) };
}
function qd(e) {
  return `${e.frame_count} frames · ${e.frame_width}x${e.frame_height}`;
}
function Jd(e) {
  let t = `${e.fps} fps · ${e.loop === !1 ? `plays once` : `loops`}`,
    { start: n, count: r } = Ud(e);
  return n === 0 && r === Math.max(1, e.frame_count)
    ? t
    : `${t} · plays ${n + 1}-${n + r} of ${e.frame_count}`;
}
var Yd = 1024;
function Xd(e) {
  return Number.isFinite(e) ? Math.max(-1024, Math.min(Yd, Math.round(e))) : 0;
}
function Zd(e) {
  let t = Math.max(1, e?.frame_count ?? 1),
    n = e?.frame_offsets ?? [];
  return Array.from({ length: t }, (e, t) => {
    let r = n[t];
    return Array.isArray(r) ? [Xd(Number(r[0])), Xd(Number(r[1]))] : [0, 0];
  });
}
function Qd(e, t, n, r) {
  if (t < 0 || t >= e.length) return e;
  let i = e.map((e) => [e[0], e[1]]);
  return ((i[t] = [Xd(n), Xd(r)]), i);
}
function $d(e, t) {
  let n = t ?? [0, 0];
  return [e[0] - n[0], e[1] - n[1]];
}
function ef(e, t, n, r) {
  let i = Number.isFinite(r) && r > 0 ? r : 1;
  return [Xd(e[0] + t * i), Xd(e[1] + n * i)];
}
function tf(e, t, n) {
  let r = Math.max(0, Math.floor(t));
  return r < 2 || e < 0 || e >= r
    ? { prev: null, next: null }
    : {
        prev: e > 0 ? e - 1 : n ? r - 1 : null,
        next: e < r - 1 ? e + 1 : n ? 0 : null,
      };
}
function nf(e, t) {
  return (
    e.length === t.length &&
    e.every((e, n) => e[0] === t[n][0] && e[1] === t[n][1])
  );
}
function rf({
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
  let d = !kd.includes(n);
  return (0, Z.jsxs)(`div`, {
    className: `space-y-2.5`,
    children: [
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: Gu, children: `Frames` }),
          (0, Z.jsxs)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: [
              Od.map((n) =>
                (0, Z.jsx)(
                  `button`,
                  {
                    type: `button`,
                    disabled: u,
                    onClick: () => t(n),
                    className: `${Ku} ${e === n ? qu : Ju}`,
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
          (0, Z.jsx)(`div`, { className: Gu, children: `Speed` }),
          (0, Z.jsxs)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: [
              kd.map((e) =>
                (0, Z.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    disabled: u,
                    onClick: () => r(e),
                    className: `${Ku} ${n === e ? qu : Ju}`,
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
                  e.target.value !== `` && r(Id(Number(e.target.value)));
                },
                className: `h-10 w-[74px] px-2 text-xs ${$u} ${d ? `border-white/20 text-foreground` : ``}`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: Gu, children: `Playback` }),
          (0, Z.jsxs)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                disabled: u,
                onClick: () => a(!0),
                className: `${Ku} ${i ? qu : Ju}`,
                children: `Loops`,
              }),
              (0, Z.jsx)(`button`, {
                type: `button`,
                disabled: u,
                onClick: () => a(!1),
                className: `${Ku} ${i ? Ju : qu}`,
                children: `Plays once`,
              }),
            ],
          }),
        ],
      }),
      (0, Z.jsxs)(`div`, {
        children: [
          (0, Z.jsx)(`div`, { className: Gu, children: `Size` }),
          (0, Z.jsx)(`div`, {
            className: `mt-1 flex flex-wrap items-center gap-1.5`,
            children: Ad.map((e) =>
              (0, Z.jsxs)(
                `button`,
                {
                  type: `button`,
                  disabled: u,
                  onClick: () => s(e),
                  className: `${Ku} ${o === e ? qu : Ju}`,
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
            className: Gu,
            children: `Direction (optional)`,
          }),
          (0, Z.jsx)(`input`, {
            type: `text`,
            value: c,
            disabled: u,
            onChange: (e) => l(e.target.value),
            placeholder: `e.g. bouncy, weight on the down beat`,
            className: `mt-1 h-10 w-full px-3 text-xs ${$u}`,
          }),
        ],
      }),
    ],
  });
}
