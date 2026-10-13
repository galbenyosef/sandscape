// assets__Create-ea24k1TY 248 — current
// Lines 83812-84154 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function W4(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], W4(e[n], t[n]));
    }),
    P4(P4({}, e), t)
  );
}
var vpe = { type: `cancelation`, msg: `operation is manually canceled` };
function G4(e) {
  var t = !1,
    n = new Promise(function (n, r) {
      (e.then(function (e) {
        return t ? r(vpe) : n(e);
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
var ype = [`monaco`],
  K4 = Kfe(
    lpe.create({
      config: upe,
      isInitialized: !1,
      resolve: null,
      reject: null,
      monaco: null,
    }),
    2,
  ),
  q4 = K4[0],
  J4 = K4[1];
function bpe(e) {
  var t = gpe.config(e),
    n = t.monaco,
    r = Wfe(t, ype);
  J4(function (e) {
    return { config: W4(e.config, r), monaco: n };
  });
}
function xpe() {
  var e = q4(function (e) {
    return {
      monaco: e.monaco,
      isInitialized: e.isInitialized,
      resolve: e.resolve,
    };
  });
  if (!e.isInitialized) {
    if ((J4({ isInitialized: !0 }), e.monaco))
      return (e.resolve(e.monaco), G4(X4));
    if (window.monaco && window.monaco.editor)
      return (Y4(window.monaco), e.resolve(window.monaco), G4(X4));
    _pe(Spe, wpe)(Tpe);
  }
  return G4(X4);
}
function Spe(e) {
  return document.body.appendChild(e);
}
function Cpe(e) {
  var t = document.createElement(`script`);
  return (e && (t.src = e), t);
}
function wpe(e) {
  var t = q4(function (e) {
      return { config: e.config, reject: e.reject };
    }),
    n = Cpe(`${t.config.paths.vs}/loader.js`);
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function Tpe() {
  var e = q4(function (e) {
      return { config: e.config, resolve: e.resolve, reject: e.reject };
    }),
    t = window.require;
  (t.config(e.config),
    t(
      [`vs/editor/editor.main`],
      function (t) {
        var n = t.m || t;
        (Y4(n), e.resolve(n));
      },
      function (t) {
        e.reject(t);
      },
    ));
}
function Y4(e) {
  q4().monaco || J4({ monaco: e });
}
function Epe() {
  return q4(function (e) {
    return e.monaco;
  });
}
var X4 = new Promise(function (e, t) {
    return J4({ resolve: e, reject: t });
  }),
  Z4 = { config: bpe, init: xpe, __getMonacoInstance: Epe },
  Q4 = {
    wrapper: { display: `flex`, position: `relative`, textAlign: `initial` },
    fullWidth: { width: `100%` },
    hide: { display: `none` },
  },
  Dpe = {
    container: {
      display: `flex`,
      height: `100%`,
      width: `100%`,
      justifyContent: `center`,
      alignItems: `center`,
    },
  };
function Ope({ children: e }) {
  return X.createElement(`div`, { style: Dpe.container }, e);
}
var kpe = Ope;
function Ape({
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
    { style: { ...Q4.wrapper, width: e, height: t }, ...o },
    !n && X.createElement(kpe, null, r),
    X.createElement(`div`, {
      ref: i,
      style: { ...Q4.fullWidth, ...(!n && Q4.hide) },
      className: a,
    }),
  );
}
var $4 = (0, X.memo)(Ape);
function jpe(e) {
  (0, X.useEffect)(e, []);
}
var e3 = jpe;
function Mpe(e, t, n = !0) {
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
var t3 = Mpe;
function n3() {}
function r3(e, t, n, r) {
  return Npe(e, r) || Ppe(e, t, n, r);
}
function Npe(e, t) {
  return e.editor.getModel(i3(e, t));
}
function Ppe(e, t, n, r) {
  return e.editor.createModel(t, n, r ? i3(e, r) : void 0);
}
function i3(e, t) {
  return e.Uri.parse(t);
}
function Fpe({
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
  beforeMount: g = n3,
  onMount: _ = n3,
}) {
  let [v, y] = (0, X.useState)(!1),
    [b, x] = (0, X.useState)(!0),
    S = (0, X.useRef)(null),
    C = (0, X.useRef)(null),
    w = (0, X.useRef)(null),
    T = (0, X.useRef)(_),
    E = (0, X.useRef)(g),
    D = (0, X.useRef)(!1);
  (e3(() => {
    let e = Z4.init();
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
    t3(
      () => {
        if (S.current && C.current) {
          let t = S.current.getOriginalEditor(),
            i = r3(C.current, e || ``, r || n || `text`, a || ``);
          i !== t.getModel() && t.setModel(i);
        }
      },
      [a],
      v,
    ),
    t3(
      () => {
        if (S.current && C.current) {
          let e = S.current.getModifiedEditor(),
            r = r3(C.current, t || ``, i || n || `text`, o || ``);
          r !== e.getModel() && e.setModel(r);
        }
      },
      [o],
      v,
    ),
    t3(
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
    t3(
      () => {
        S.current?.getModel()?.original.setValue(e || ``);
      },
      [e],
      v,
    ),
    t3(
      () => {
        let { original: e, modified: t } = S.current.getModel();
        (C.current.editor.setModelLanguage(e, r || n || `text`),
          C.current.editor.setModelLanguage(t, i || n || `text`));
      },
      [n, r, i],
      v,
    ),
    t3(
      () => {
        C.current?.editor.setTheme(l);
      },
      [l],
      v,
    ),
    t3(
      () => {
        S.current?.updateOptions(d);
      },
      [d],
      v,
    ));
  let O = (0, X.useCallback)(() => {
      if (!C.current) return;
      E.current(C.current);
      let s = r3(C.current, e || ``, r || n || `text`, a || ``),
        c = r3(C.current, t || ``, i || n || `text`, o || ``);
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
  return X.createElement($4, {
    width: p,
    height: f,
    isEditorReady: v,
    loading: u,
    _ref: w,
    className: m,
    wrapperProps: h,
  });
}
var Ipe = (0, X.memo)(Fpe);
function Lpe(e) {
  let t = (0, X.useRef)();
  return (
    (0, X.useEffect)(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var Rpe = Lpe,
  a3 = new Map();
