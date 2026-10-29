// Create-CEn7EAZs 119 — setprototypeof
// Lines 39117-39205 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function PM(e, t, n) {
  return (
    (t = RM(t)),
    FM(
      e,
      LM() ? Reflect.construct(t, n || [], RM(e).constructor) : t.apply(e, n),
    )
  );
}
function FM(e, t) {
  if (t && (DM(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return IM(e);
}
function IM(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function LM() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (LM = function () {
    return !!e;
  })();
}
function RM(e) {
  return (
    (RM = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    RM(e)
  );
}
function zM(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && BM(e, t));
}
function BM(e, t) {
  return (
    (BM = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    BM(e, t)
  );
}
function VM(e, t, n) {
  return (
    (t = HM(t)),
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
function HM(e) {
  var t = UM(e, `string`);
  return DM(t) == `symbol` ? t : t + ``;
}
function UM(e, t) {
  if (DM(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (DM(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
