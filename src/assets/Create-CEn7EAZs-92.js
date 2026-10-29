// Create-CEn7EAZs 92 — range
// Lines 29299-29648 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function uT(e, t, n, r) {
  function i(t) {
    return (e((t = arguments.length === 0 ? new Date() : new Date(+t))), t);
  }
  return (
    (i.floor = (t) => (e((t = new Date(+t))), t)),
    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
    (i.round = (e) => {
      let t = i(e),
        n = i.ceil(e);
      return e - t < n - e ? t : n;
    }),
    (i.offset = (e, n) => (
      t((e = new Date(+e)), n == null ? 1 : Math.floor(n)),
      e
    )),
    (i.range = (n, r, a) => {
      let o = [];
      if (
        ((n = i.ceil(n)),
        (a = a == null ? 1 : Math.floor(a)),
        !(n < r) || !(a > 0))
      )
        return o;
      let s;
      do (o.push((s = new Date(+n))), t(n, a), e(n));
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      uT(
        (t) => {
          if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e)
            if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
            else for (; --r >= 0;) for (; t(e, 1), !n(e););
        },
      )),
    n &&
      ((i.count = (t, r) => (
        cT.setTime(+t),
        lT.setTime(+r),
        e(cT),
        e(lT),
        Math.floor(n(cT, lT))
      )),
      (i.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? i.filter(
                r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0,
              )
            : i
      ))),
    i
  );
}
var dT = uT(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((dT.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? uT(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : dT
)),
  dT.range);
var fT = 1e3,
  pT = fT * 60,
  mT = pT * 60,
  hT = mT * 24,
  gT = hT * 7,
  _T = hT * 30,
  vT = hT * 365,
  yT = uT(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * fT);
    },
    (e, t) => (t - e) / fT,
    (e) => e.getUTCSeconds(),
  );
yT.range;
var bT = uT(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * fT);
  },
  (e, t) => {
    e.setTime(+e + t * pT);
  },
  (e, t) => (t - e) / pT,
  (e) => e.getMinutes(),
);
bT.range;
var xT = uT(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * pT);
  },
  (e, t) => (t - e) / pT,
  (e) => e.getUTCMinutes(),
);
xT.range;
var ST = uT(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * fT - e.getMinutes() * pT,
    );
  },
  (e, t) => {
    e.setTime(+e + t * mT);
  },
  (e, t) => (t - e) / mT,
  (e) => e.getHours(),
);
ST.range;
var CT = uT(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * mT);
  },
  (e, t) => (t - e) / mT,
  (e) => e.getUTCHours(),
);
CT.range;
var wT = uT(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * pT) / hT,
  (e) => e.getDate() - 1,
);
wT.range;
var TT = uT(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / hT,
  (e) => e.getUTCDate() - 1,
);
TT.range;
var ET = uT(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / hT,
  (e) => Math.floor(e / hT),
);
ET.range;
function DT(e) {
  return uT(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * pT) / gT,
  );
}
var OT = DT(0),
  kT = DT(1),
  jie = DT(2),
  Mie = DT(3),
  AT = DT(4),
  Nie = DT(5),
  Pie = DT(6);
(OT.range, kT.range, jie.range, Mie.range, AT.range, Nie.range, Pie.range);
function jT(e) {
  return uT(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / gT,
  );
}
var MT = jT(0),
  NT = jT(1),
  Fie = jT(2),
  Iie = jT(3),
  PT = jT(4),
  Lie = jT(5),
  Rie = jT(6);
(MT.range, NT.range, Fie.range, Iie.range, PT.range, Lie.range, Rie.range);
var FT = uT(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
FT.range;
var IT = uT(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
IT.range;
var LT = uT(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((LT.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : uT(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  LT.range);
var RT = uT(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((RT.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : uT(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  RT.range);
function zT(e, t, n, r, i, a) {
  let o = [
    [yT, 1, fT],
    [yT, 5, 5 * fT],
    [yT, 15, 15 * fT],
    [yT, 30, 30 * fT],
    [a, 1, pT],
    [a, 5, 5 * pT],
    [a, 15, 15 * pT],
    [a, 30, 30 * pT],
    [i, 1, mT],
    [i, 3, 3 * mT],
    [i, 6, 6 * mT],
    [i, 12, 12 * mT],
    [r, 1, hT],
    [r, 2, 2 * hT],
    [n, 1, gT],
    [t, 1, _T],
    [t, 3, 3 * _T],
    [e, 1, vT],
  ];
  function s(e, t, n) {
    let r = t < e;
    r && ([e, t] = [t, e]);
    let i = n && typeof n.range == `function` ? n : c(e, t, n),
      a = i ? i.range(e, +t + 1) : [];
    return r ? a.reverse() : a;
  }
  function c(t, n, r) {
    let i = Math.abs(n - t) / r,
      a = hS(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(PS(t / vT, n / vT, r));
    if (a === 0) return dT.every(Math.max(PS(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [zie, Bie] = zT(RT, IT, MT, ET, CT, xT),
  [Vie, Hie] = zT(LT, FT, OT, wT, ST, bT);
function BT(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function VT(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function HT(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
