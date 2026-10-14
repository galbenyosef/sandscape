// assets__Create-ea24k1TY 249 — current
// Lines 84155-84474 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
function zpe({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: n,
  value: r,
  language: i,
  path: a,
  theme: o = `light`,
  line: s,
  loading: c = `Loading...`,
  options: l = {},
  overrideServices: u = {},
  saveViewState: d = !0,
  keepCurrentModel: f = !1,
  width: p = `100%`,
  height: m = `100%`,
  className: h,
  wrapperProps: g = {},
  beforeMount: _ = n3,
  onMount: v = n3,
  onChange: y,
  onValidate: b = n3,
}) {
  let [x, S] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)(!0),
    T = (0, X.useRef)(null),
    E = (0, X.useRef)(null),
    D = (0, X.useRef)(null),
    O = (0, X.useRef)(v),
    k = (0, X.useRef)(_),
    A = (0, X.useRef)(),
    j = (0, X.useRef)(r),
    M = Rpe(a),
    N = (0, X.useRef)(!1),
    P = (0, X.useRef)(!1);
  (e3(() => {
    let e = Z4.init();
    return (
      e
        .then((e) => (T.current = e) && w(!1))
        .catch(
          (e) =>
            e?.type !== `cancelation` &&
            console.error(`Monaco initialization: error:`, e),
        ),
      () => (E.current ? I() : e.cancel())
    );
  }),
    t3(
      () => {
        let o = r3(T.current, e || r || ``, t || i || ``, a || n || ``);
        o !== E.current?.getModel() &&
          (d && a3.set(M, E.current?.saveViewState()),
          E.current?.setModel(o),
          d && E.current?.restoreViewState(a3.get(a)));
      },
      [a],
      x,
    ),
    t3(
      () => {
        E.current?.updateOptions(l);
      },
      [l],
      x,
    ),
    t3(
      () => {
        !E.current ||
          r === void 0 ||
          (E.current.getOption(T.current.editor.EditorOption.readOnly)
            ? E.current.setValue(r)
            : r !== E.current.getValue() &&
              ((P.current = !0),
              E.current.executeEdits(``, [
                {
                  range: E.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              E.current.pushUndoStop(),
              (P.current = !1)));
      },
      [r],
      x,
    ),
    t3(
      () => {
        let e = E.current?.getModel();
        e && i && T.current?.editor.setModelLanguage(e, i);
      },
      [i],
      x,
    ),
    t3(
      () => {
        s !== void 0 && E.current?.revealLine(s);
      },
      [s],
      x,
    ),
    t3(
      () => {
        T.current?.editor.setTheme(o);
      },
      [o],
      x,
    ));
  let F = (0, X.useCallback)(() => {
    if (!(!D.current || !T.current) && !N.current) {
      k.current(T.current);
      let c = a || n,
        f = r3(T.current, r || e || ``, t || i || ``, c || ``);
      ((E.current = T.current?.editor.create(
        D.current,
        { model: f, automaticLayout: !0, ...l },
        u,
      )),
        d && E.current.restoreViewState(a3.get(c)),
        T.current.editor.setTheme(o),
        s !== void 0 && E.current.revealLine(s),
        S(!0),
        (N.current = !0));
    }
  }, [e, t, n, r, i, a, l, u, d, o, s]);
  ((0, X.useEffect)(() => {
    x && O.current(E.current, T.current);
  }, [x]),
    (0, X.useEffect)(() => {
      !C && !x && F();
    }, [C, x, F]),
    (j.current = r),
    (0, X.useEffect)(() => {
      x &&
        y &&
        (A.current?.dispose(),
        (A.current = E.current?.onDidChangeModelContent((e) => {
          P.current || y(E.current.getValue(), e);
        })));
    }, [x, y]),
    (0, X.useEffect)(() => {
      if (x) {
        let e = T.current.editor.onDidChangeMarkers((e) => {
          let t = E.current.getModel()?.uri;
          if (t && e.find((e) => e.path === t.path)) {
            let e = T.current.editor.getModelMarkers({ resource: t });
            b?.(e);
          }
        });
        return () => {
          e?.dispose();
        };
      }
      return () => {};
    }, [x, b]));
  function I() {
    (A.current?.dispose(),
      f
        ? d && a3.set(a, E.current.saveViewState())
        : E.current.getModel()?.dispose(),
      E.current.dispose());
  }
  return X.createElement($4, {
    width: p,
    height: m,
    isEditorReady: x,
    loading: c,
    _ref: D,
    className: h,
    wrapperProps: g,
  });
}
var Bpe = (0, X.memo)(zpe),
  Vpe = {
    js: `javascript`,
    mjs: `javascript`,
    jsx: `javascript`,
    ts: `typescript`,
    tsx: `typescript`,
    html: `html`,
    htm: `html`,
    css: `css`,
    json: `json`,
    md: `markdown`,
    py: `python`,
    glsl: `glsl`,
    xml: `xml`,
    scss: `scss`,
    less: `less`,
    yaml: `yaml`,
    yml: `yaml`,
    sh: `shell`,
    bash: `shell`,
    svg: `xml`,
    vert: `glsl`,
    frag: `glsl`,
    shader: `glsl`,
    txt: `plaintext`,
    log: `plaintext`,
  };
function Hpe(e) {
  return Vpe[e.split(`.`).pop()?.toLowerCase() || ``] || `plaintext`;
}
var o3 = {
    base: `vs-dark`,
    inherit: !0,
    rules: [],
    colors: {
      "editor.background": `#0c0e12`,
      "editor.foreground": `#fafafa`,
      "editorLineNumber.foreground": `#8c8c8c`,
      "editorLineNumber.activeForeground": `#fafafa`,
      "editor.selectionBackground": `#7012d333`,
      "editor.lineHighlightBackground": `#1b1c23`,
      "editorCursor.foreground": `#7012d3`,
      "editorWidget.background": `#1b1c23`,
      "editorWidget.border": `#17181c`,
      "input.background": `#0c0e12`,
      "input.border": `#17181c`,
      "dropdown.background": `#1b1c23`,
      "list.activeSelectionBackground": `#7012d333`,
      "list.hoverBackground": `#1b1c2380`,
      "diffEditor.insertedTextBackground": `#22c55e18`,
      "diffEditor.removedTextBackground": `#ef444418`,
    },
  },
  Upe = ({ file: e, onChange: t, onSave: n, isActive: r }) => {
    let i = (0, X.useRef)(null);
    (0, X.useEffect)(() => {
      r !== !1 && i.current?.layout();
    }, [r]);
    let a = (0, X.useCallback)(
        (t, r) => {
          ((i.current = t),
            r.editor.defineTheme(`sandscape-dark`, o3),
            r.editor.setTheme(`sandscape-dark`),
            t.addCommand(r.KeyMod.CtrlCmd | r.KeyCode.KeyS, () => {
              n(e.path);
            }),
            t.focus());
        },
        [e.path, n],
      ),
      o = (0, X.useCallback)(
        (n) => {
          n !== void 0 && t(e.path, n);
        },
        [e.path, t],
      );
    if (e.binary) {
      let t = e.name.split(`.`).pop()?.toLowerCase() || ``,
        n = [`png`, `jpg`, `jpeg`, `gif`, `svg`, `webp`, `ico`, `bmp`].includes(
          t,
        ),
        r = [`glb`, `gltf`, `obj`, `fbx`, `stl`, `dae`].includes(t),
        i = [`mp3`, `wav`, `ogg`, `flac`, `aac`].includes(t),
        a = n ? yo : r ? S : i ? jt : bo,
        o = n ? `Image` : r ? `3D Model` : i ? `Audio` : `Binary`;
      return (0, Z.jsx)(`div`, {
        className: `h-full flex items-center justify-center bg-card text-muted-foreground`,
        children: (0, Z.jsxs)(`div`, {
          className: `text-center`,
          children: [
            (0, Z.jsx)(a, { className: `h-16 w-16 mx-auto mb-4 opacity-30` }),
            (0, Z.jsx)(`p`, {
              className: `text-lg font-mono text-gray-300`,
              children: e.name,
            }),
            (0, Z.jsxs)(`p`, {
              className: `text-sm mt-2`,
              children: [o, ` file`],
            }),
            (0, Z.jsx)(`p`, {
              className: `text-xs text-gray-600 mt-1`,
              children: `Binary files cannot be edited in the code editor`,
            }),
          ],
        }),
      });
    }
    return (0, Z.jsx)(Bpe, {
      height: `100%`,
      path: e.path,
      language: e.language,
      value: e.content,
      theme: `sandscape-dark`,
      onChange: o,
      onMount: a,
      options: {
        fontSize: 13,
        fontFamily: `'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, monospace`,
        minimap: { enabled: !1 },
        lineNumbers: `on`,
        bracketPairColorization: { enabled: !0 },
        autoClosingBrackets: `always`,
        autoClosingQuotes: `always`,
        tabSize: 2,
        scrollBeyondLastLine: !1,
        wordWrap: `on`,
        smoothScrolling: !0,
        cursorBlinking: `smooth`,
        renderWhitespace: `selection`,
        suggestOnTriggerCharacters: !0,
        quickSuggestions: !0,
        wordBasedSuggestions: `allDocuments`,
        padding: { top: 8, bottom: 8 },
      },
    });
  };
function Wpe(e) {
  let t = Date.now() - new Date(e).getTime(),
    n = Math.floor(t / 6e4);
  if (n < 1) return `just now`;
  if (n < 60) return `${n}m ago`;
  let r = Math.floor(n / 60);
  if (r < 24) return `${r}h ago`;
  let i = Math.floor(r / 24);
  return i < 30 ? `${i}d ago` : new Date(e).toLocaleDateString();
}
