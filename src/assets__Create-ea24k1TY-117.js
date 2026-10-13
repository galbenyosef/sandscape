// assets__Create-ea24k1TY 117 — setprototypeof
// Lines 38344-38432 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function vM(e, t, n) {
  return (
    (t = SM(t)),
    yM(
      e,
      xM() ? Reflect.construct(t, n || [], SM(e).constructor) : t.apply(e, n),
    )
  );
}
function yM(e, t) {
  if (t && (dM(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return bM(e);
}
function bM(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function xM() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (xM = function () {
    return !!e;
  })();
}
function SM(e) {
  return (
    (SM = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    SM(e)
  );
}
function CM(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wM(e, t));
}
function wM(e, t) {
  return (
    (wM = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    wM(e, t)
  );
}
function TM(e, t, n) {
  return (
    (t = EM(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function EM(e) {
  var t = DM(e, `string`);
  return dM(t) == `symbol` ? t : t + ``;
}
function DM(e, t) {
  if (dM(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (dM(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
