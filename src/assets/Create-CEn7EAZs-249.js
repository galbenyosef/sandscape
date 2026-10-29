// Create-CEn7EAZs 249 — current
// Lines 84245-84593 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function j4(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ype(e) {
  if (Array.isArray(e)) return e;
}
function bpe(e, t, n) {
  return (
    (t = Dpe(t)) in e
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
function xpe(e, t) {
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
function Spe() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M4(e, t) {
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
function N4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? M4(Object(n), !0).forEach(function (t) {
          bpe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : M4(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Cpe(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = wpe(e, t);
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
function wpe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Tpe(e, t) {
  return ype(e) || xpe(e, t) || Ope(e, t) || Spe();
}
function Epe(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Dpe(e) {
  var t = Epe(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ope(e, t) {
  if (e) {
    if (typeof e == `string`) return j4(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? j4(e, t)
          : void 0
    );
  }
}
function kpe(e, t, n) {
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
function P4(e, t) {
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
function F4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? P4(Object(n), !0).forEach(function (t) {
          kpe(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : P4(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ape() {
  var e = [...arguments];
  return function (t) {
    return e.reduceRight(function (e, t) {
      return t(e);
    }, t);
  };
}
function I4(e) {
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
function L4(e) {
  return {}.toString.call(e).includes(`Object`);
}
function jpe(e) {
  return !Object.keys(e).length;
}
function R4(e) {
  return typeof e == `function`;
}
function Mpe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Npe(e, t) {
  return (
    L4(t) || z4(`changeType`),
    Object.keys(t).some(function (t) {
      return !Mpe(e, t);
    }) && z4(`changeField`),
    t
  );
}
function Ppe(e) {
  R4(e) || z4(`selectorType`);
}
function Fpe(e) {
  (R4(e) || L4(e) || z4(`handlerType`),
    L4(e) &&
      Object.values(e).some(function (e) {
        return !R4(e);
      }) &&
      z4(`handlersType`));
}
function Ipe(e) {
  (e || z4(`initialIsRequired`),
    L4(e) || z4(`initialType`),
    jpe(e) && z4(`initialContent`));
}
function Lpe(e, t) {
  throw Error(e[t] || e.default);
}
var z4 = I4(Lpe)({
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
  B4 = { changes: Npe, selector: Ppe, handler: Fpe, initial: Ipe };
function Rpe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  (B4.initial(e), B4.handler(t));
  var n = { current: e },
    r = I4(Vpe)(n, t),
    i = I4(Bpe)(n),
    a = I4(B4.changes)(e),
    o = I4(zpe)(n);
  function s() {
    var e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (e) {
            return e;
          };
    return (B4.selector(e), e(n.current));
  }
  function c(e) {
    Ape(r, i, a, o)(e);
  }
  return [s, c];
}
function zpe(e, t) {
  return R4(t) ? t(e.current) : t;
}
function Bpe(e, t) {
  return ((e.current = F4(F4({}, e.current), t)), t);
}
function Vpe(e, t, n) {
  return (
    R4(t)
      ? t(e.current)
      : Object.keys(n).forEach(function (n) {
          return t[n]?.call(t, e.current[n]);
        }),
    n
  );
}
var Hpe = { create: Rpe },
  Upe = {
    paths: { vs: `https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs` },
  };
function Wpe(e) {
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
function Gpe(e) {
  return {}.toString.call(e).includes(`Object`);
}
function Kpe(e) {
  return (
    e || H4(`configIsRequired`),
    Gpe(e) || H4(`configType`),
    e.urls ? (qpe(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function qpe() {
  console.warn(V4.deprecation);
}
function Jpe(e, t) {
  throw Error(e[t] || e.default);
}
var V4 = {
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
  H4 = Wpe(Jpe)(V4),
  Ype = { config: Kpe },
  Xpe = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduceRight(function (e, t) {
        return t(e);
      }, t);
    };
  };
