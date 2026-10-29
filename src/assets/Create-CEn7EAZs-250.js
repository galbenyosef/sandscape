// Create-CEn7EAZs 250 — current
// Lines 84594-84936 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function U4(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], U4(e[n], t[n]));
    }),
    N4(N4({}, e), t)
  );
}
var Zpe = { type: `cancelation`, msg: `operation is manually canceled` };
function W4(e) {
  var t = !1,
    n = new Promise(function (n, r) {
      (e.then(function (e) {
        return t ? r(Zpe) : n(e);
      }),
        e.catch(r));
    });
  return (
    (n.cancel = function () {
      return (t = !0);
    }),
    n
  );
}
var Qpe = [`monaco`],
  G4 = Tpe(
    Hpe.create({
      config: Upe,
      isInitialized: !1,
      resolve: null,
      reject: null,
      monaco: null,
    }),
    2,
  ),
  K4 = G4[0],
  q4 = G4[1];
function $pe(e) {
  var t = Ype.config(e),
    n = t.monaco,
    r = Cpe(t, Qpe);
  q4(function (e) {
    return { config: U4(e.config, r), monaco: n };
  });
}
function eme() {
  var e = K4(function (e) {
    return {
      monaco: e.monaco,
      isInitialized: e.isInitialized,
      resolve: e.resolve,
    };
  });
  if (!e.isInitialized) {
    if ((q4({ isInitialized: !0 }), e.monaco))
      return (e.resolve(e.monaco), W4(Y4));
    if (window.monaco && window.monaco.editor)
      return (J4(window.monaco), e.resolve(window.monaco), W4(Y4));
    Xpe(tme, rme)(ime);
  }
  return W4(Y4);
}
function tme(e) {
  return document.body.appendChild(e);
}
function nme(e) {
  var t = document.createElement(`script`);
  return (e && (t.src = e), t);
}
function rme(e) {
  var t = K4(function (e) {
      return { config: e.config, reject: e.reject };
    }),
    n = nme(`${t.config.paths.vs}/loader.js`);
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function ime() {
  var e = K4(function (e) {
      return { config: e.config, resolve: e.resolve, reject: e.reject };
    }),
    t = window.require;
  (t.config(e.config),
    t(
      [`vs/editor/editor.main`],
      function (t) {
        var n = t.m || t;
        (J4(n), e.resolve(n));
      },
      function (t) {
        e.reject(t);
      },
    ));
}
function J4(e) {
  K4().monaco || q4({ monaco: e });
}
function ame() {
  return K4(function (e) {
    return e.monaco;
  });
}
var Y4 = new Promise(function (e, t) {
    return q4({ resolve: e, reject: t });
  }),
  X4 = { config: $pe, init: eme, __getMonacoInstance: ame },
  Z4 = {
    wrapper: { display: `flex`, position: `relative`, textAlign: `initial` },
    fullWidth: { width: `100%` },
    hide: { display: `none` },
  },
  ome = {
    container: {
      display: `flex`,
      height: `100%`,
      width: `100%`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  };
function sme({ children: e }) {
  return X.createElement(`div`, { style: ome.container }, e);
}
var cme = sme;
function lme({
  width: e,
  height: t,
  isEditorReady: n,
  loading: r,
  _ref: i,
  className: a,
  wrapperProps: o,
}) {
  return X.createElement(
    `section`,
    { style: { ...Z4.wrapper, width: e, height: t }, ...o },
    !n && X.createElement(cme, null, r),
    X.createElement(`div`, {
      ref: i,
      style: { ...Z4.fullWidth, ...(!n && Z4.hide) },
      className: a,
    }),
  );
}
var Q4 = (0, X.memo)(lme);
function ume(e) {
  (0, X.useEffect)(e, []);
}
var $4 = ume;
function dme(e, t, n = !0) {
  let r = (0, X.useRef)(!0);
  (0, X.useEffect)(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t,
  );
}
var e3 = dme;
function t3() {}
function n3(e, t, n, r) {
  return fme(e, r) || pme(e, t, n, r);
}
function fme(e, t) {
  return e.editor.getModel(r3(e, t));
}
function pme(e, t, n, r) {
  return e.editor.createModel(t, n, r ? r3(e, r) : void 0);
}
function r3(e, t) {
  return e.Uri.parse(t);
}
function mme({
  original: e,
  modified: t,
  language: n,
  originalLanguage: r,
  modifiedLanguage: i,
  originalModelPath: a,
  modifiedModelPath: o,
  keepCurrentOriginalModel: s = !1,
  keepCurrentModifiedModel: c = !1,
  theme: l = `light`,
  loading: u = `Loading...`,
  options: d = {},
  height: f = `100%`,
  width: p = `100%`,
  className: m,
  wrapperProps: h = {},
  beforeMount: g = t3,
  onMount: _ = t3,
}) {
  let [v, y] = (0, X.useState)(!1),
    [b, x] = (0, X.useState)(!0),
    S = (0, X.useRef)(null),
    C = (0, X.useRef)(null),
    w = (0, X.useRef)(null),
    T = (0, X.useRef)(_),
    E = (0, X.useRef)(g),
    D = (0, X.useRef)(!1);
  ($4(() => {
    let e = X4.init();
    return (
      e
        .then((e) => (C.current = e) && x(!1))
        .catch(
          (e) =>
            e?.type !== `cancelation` &&
            console.error(`Monaco initialization: error:`, e),
        ),
      () => (S.current ? A() : e.cancel())
    );
  }),
    e3(
      () => {
        if (S.current && C.current) {
          let t = S.current.getOriginalEditor(),
            i = n3(C.current, e || ``, r || n || `text`, a || ``);
          i !== t.getModel() && t.setModel(i);
        }
      },
      [a],
      v,
    ),
    e3(
      () => {
        if (S.current && C.current) {
          let e = S.current.getModifiedEditor(),
            r = n3(C.current, t || ``, i || n || `text`, o || ``);
          r !== e.getModel() && e.setModel(r);
        }
      },
      [o],
      v,
    ),
    e3(
      () => {
        let e = S.current.getModifiedEditor();
        e.getOption(C.current.editor.EditorOption.readOnly)
          ? e.setValue(t || ``)
          : t !== e.getValue() &&
            (e.executeEdits(``, [
              {
                range: e.getModel().getFullModelRange(),
                text: t || ``,
                forceMoveMarkers: !0,
              },
            ]),
            e.pushUndoStop());
      },
      [t],
      v,
    ),
    e3(
      () => {
        S.current?.getModel()?.original.setValue(e || ``);
      },
      [e],
      v,
    ),
    e3(
      () => {
        let { original: e, modified: t } = S.current.getModel();
        (C.current.editor.setModelLanguage(e, r || n || `text`),
          C.current.editor.setModelLanguage(t, i || n || `text`));
      },
      [n, r, i],
      v,
    ),
    e3(
      () => {
        C.current?.editor.setTheme(l);
      },
      [l],
      v,
    ),
    e3(
      () => {
        S.current?.updateOptions(d);
      },
      [d],
      v,
    ));
  let O = (0, X.useCallback)(() => {
      if (!C.current) return;
      E.current(C.current);
      let s = n3(C.current, e || ``, r || n || `text`, a || ``),
        c = n3(C.current, t || ``, i || n || `text`, o || ``);
      S.current?.setModel({ original: s, modified: c });
    }, [n, t, i, e, r, a, o]),
    k = (0, X.useCallback)(() => {
      !D.current &&
        w.current &&
        ((S.current = C.current.editor.createDiffEditor(w.current, {
          automaticLayout: !0,
          ...d,
        })),
        O(),
        C.current?.editor.setTheme(l),
        y(!0),
        (D.current = !0));
    }, [d, l, O]);
  ((0, X.useEffect)(() => {
    v && T.current(S.current, C.current);
  }, [v]),
    (0, X.useEffect)(() => {
      !b && !v && k();
    }, [b, v, k]));
  function A() {
    let e = S.current?.getModel();
    (s || e?.original?.dispose(),
      c || e?.modified?.dispose(),
      S.current?.dispose());
  }
  return X.createElement(Q4, {
    width: p,
    height: f,
    isEditorReady: v,
    loading: u,
    _ref: w,
    className: m,
    wrapperProps: h,
  });
}
var hme = (0, X.memo)(mme);
function gme(e) {
  let t = (0, X.useRef)();
  return (
    (0, X.useEffect)(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var _me = gme,
  i3 = new Map();
