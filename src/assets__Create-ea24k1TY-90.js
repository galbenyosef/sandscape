// assets__Create-ea24k1TY 90 — range
// Lines 28526-28875 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function dC(e, t, n, r) {
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
      dC(
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
        lC.setTime(+t),
        uC.setTime(+r),
        e(lC),
        e(uC),
        Math.floor(n(lC, uC))
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
var fC = dC(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((fC.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? dC(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : fC
)),
  fC.range);
var pC = 1e3,
  mC = pC * 60,
  hC = mC * 60,
  gC = hC * 24,
  _C = gC * 7,
  vC = gC * 30,
  yC = gC * 365,
  bC = dC(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * pC);
    },
    (e, t) => (t - e) / pC,
    (e) => e.getUTCSeconds(),
  );
bC.range;
var xC = dC(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * pC);
  },
  (e, t) => {
    e.setTime(+e + t * mC);
  },
  (e, t) => (t - e) / mC,
  (e) => e.getMinutes(),
);
xC.range;
var SC = dC(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * mC);
  },
  (e, t) => (t - e) / mC,
  (e) => e.getUTCMinutes(),
);
SC.range;
var CC = dC(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * pC - e.getMinutes() * mC,
    );
  },
  (e, t) => {
    e.setTime(+e + t * hC);
  },
  (e, t) => (t - e) / hC,
  (e) => e.getHours(),
);
CC.range;
var wC = dC(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * hC);
  },
  (e, t) => (t - e) / hC,
  (e) => e.getUTCHours(),
);
wC.range;
var TC = dC(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * mC) / gC,
  (e) => e.getDate() - 1,
);
TC.range;
var EC = dC(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / gC,
  (e) => e.getUTCDate() - 1,
);
EC.range;
var DC = dC(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / gC,
  (e) => Math.floor(e / gC),
);
DC.range;
function OC(e) {
  return dC(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * mC) / _C,
  );
}
var kC = OC(0),
  AC = OC(1),
  jC = OC(2),
  MC = OC(3),
  NC = OC(4),
  PC = OC(5),
  FC = OC(6);
(kC.range, AC.range, jC.range, MC.range, NC.range, PC.range, FC.range);
function IC(e) {
  return dC(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / _C,
  );
}
var LC = IC(0),
  RC = IC(1),
  zC = IC(2),
  BC = IC(3),
  VC = IC(4),
  HC = IC(5),
  UC = IC(6);
(LC.range, RC.range, zC.range, BC.range, VC.range, HC.range, UC.range);
var WC = dC(
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
WC.range;
var GC = dC(
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
GC.range;
var KC = dC(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((KC.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : dC(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  KC.range);
var qC = dC(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((qC.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : dC(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  qC.range);
function JC(e, t, n, r, i, a) {
  let o = [
    [bC, 1, pC],
    [bC, 5, 5 * pC],
    [bC, 15, 15 * pC],
    [bC, 30, 30 * pC],
    [a, 1, mC],
    [a, 5, 5 * mC],
    [a, 15, 15 * mC],
    [a, 30, 30 * mC],
    [i, 1, hC],
    [i, 3, 3 * hC],
    [i, 6, 6 * hC],
    [i, 12, 12 * hC],
    [r, 1, gC],
    [r, 2, 2 * gC],
    [n, 1, _C],
    [t, 1, vC],
    [t, 3, 3 * vC],
    [e, 1, yC],
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
      a = hb(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Tb(t / yC, n / yC, r));
    if (a === 0) return fC.every(Math.max(Tb(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [YC, XC] = JC(qC, GC, LC, DC, wC, SC),
  [ZC, QC] = JC(KC, WC, kC, TC, CC, xC);
function $C(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ew(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function tw(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
