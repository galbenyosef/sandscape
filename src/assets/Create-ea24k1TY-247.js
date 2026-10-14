// Create-ea24k1TY 247 — current
// Lines 83463-83811 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function M4(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Bfe(e) {
  if (Array.isArray(e)) return e;
}
function Vfe(e, t, n) {
  return (
    (t = Jfe(t)) in e
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
function Hfe(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Ufe() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N4(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function P4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? N4(Object(n), !0).forEach(function (t) {
          Vfe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : N4(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Wfe(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Gfe(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Gfe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Kfe(e, t) {
  return Bfe(e) || Hfe(e, t) || Yfe(e, t) || Ufe();
}
function qfe(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Jfe(e) {
  var t = qfe(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Yfe(e, t) {
  if (e) {
    if (typeof e == `string`) return M4(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? M4(e, t)
          : void 0
    );
  }
}
function Xfe(e, t, n) {
  return (
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
function F4(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function I4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? F4(Object(n), !0).forEach(function (t) {
          Xfe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : F4(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Zfe() {
  var e = [...arguments];
  return function (t) {
    return e.reduceRight(function (e, t) {
      return t(e);
    }, t);
  };
}
function L4(e) {
  return function t() {
    var n = this,
      r = [...arguments];
    return r.length >= e.length
      ? e.apply(this, r)
      : function () {
          var e = [...arguments];
          return t.apply(n, [].concat(r, e));
        };
  };
}
function R4(e) {
  return {}.toString.call(e).includes(`Object`);
}
function Qfe(e) {
  return !Object.keys(e).length;
}
function z4(e) {
  return typeof e == `function`;
}
function $fe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function epe(e, t) {
  return (
    R4(t) || B4(`changeType`),
    Object.keys(t).some(function (t) {
      return !$fe(e, t);
    }) && B4(`changeField`),
    t
  );
}
function tpe(e) {
  z4(e) || B4(`selectorType`);
}
function npe(e) {
  (z4(e) || R4(e) || B4(`handlerType`),
    R4(e) &&
      Object.values(e).some(function (e) {
        return !z4(e);
      }) &&
      B4(`handlersType`));
}
function rpe(e) {
  (e || B4(`initialIsRequired`),
    R4(e) || B4(`initialType`),
    Qfe(e) && B4(`initialContent`));
}
function ipe(e, t) {
  throw Error(e[t] || e.default);
}
var B4 = L4(ipe)({
    initialIsRequired: `initial state is required`,
    initialType: `initial state should be an object`,
    initialContent: `initial state shouldn't be an empty object`,
    handlerType: `handler should be an object or a function`,
    handlersType: `all handlers should be a functions`,
    selectorType: `selector should be a function`,
    changeType: `provided value of changes should be an object`,
    changeField: `it seams you want to change a field in the state which is not specified in the "initial" state`,
    default: "an unknown error accured in `state-local` package",
  }),
  V4 = { changes: epe, selector: tpe, handler: npe, initial: rpe };
function ape(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  (V4.initial(e), V4.handler(t));
  var n = { current: e },
    r = L4(cpe)(n, t),
    i = L4(spe)(n),
    a = L4(V4.changes)(e),
    o = L4(ope)(n);
  function s() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (e) {
            return e;
          };
    return (V4.selector(e), e(n.current));
  }
  function c(e) {
    Zfe(r, i, a, o)(e);
  }
  return [s, c];
}
function ope(e, t) {
  return z4(t) ? t(e.current) : t;
}
function spe(e, t) {
  return ((e.current = I4(I4({}, e.current), t)), t);
}
function cpe(e, t, n) {
  return (
    z4(t)
      ? t(e.current)
      : Object.keys(n).forEach(function (n) {
          return t[n]?.call(t, e.current[n]);
        }),
    n
  );
}
var lpe = { create: ape },
  upe = {
    paths: { vs: `https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs` },
  };
function dpe(e) {
  return function t() {
    var n = this,
      r = [...arguments];
    return r.length >= e.length
      ? e.apply(this, r)
      : function () {
          var e = [...arguments];
          return t.apply(n, [].concat(r, e));
        };
  };
}
function fpe(e) {
  return {}.toString.call(e).includes(`Object`);
}
function ppe(e) {
  return (
    e || U4(`configIsRequired`),
    fpe(e) || U4(`configType`),
    e.urls ? (mpe(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function mpe() {
  console.warn(H4.deprecation);
}
function hpe(e, t) {
  throw Error(e[t] || e.default);
}
var H4 = {
    configIsRequired: `the configuration object is required`,
    configType: `the configuration object should be an object`,
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  U4 = dpe(hpe)(H4),
  gpe = { config: ppe },
  _pe = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduceRight(function (e, t) {
        return t(e);
      }, t);
    };
  };
