// assets__Create-ea24k1TY 22 — colspan
// Lines 6821-7014 of readable/assets__Create-ea24k1TY.pretty.js (statement-aligned).
var Pl = 4,
  Fl = [
    {
      id: `3-hero-left`,
      imageCount: 3,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 4 },
        { colStart: 5, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 3, rowSpan: 2 },
      ],
    },
    {
      id: `3-hero-top`,
      imageCount: 3,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 6, rowStart: 1, rowSpan: 2 },
        { colStart: 1, colSpan: 3, rowStart: 3, rowSpan: 2 },
        { colStart: 4, colSpan: 3, rowStart: 3, rowSpan: 2 },
      ],
    },
    {
      id: `4-hero-left`,
      imageCount: 4,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 4 },
        { colStart: 5, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 3, rowSpan: 1 },
        { colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 1 },
      ],
    },
    {
      id: `4-grid`,
      imageCount: 4,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 3, rowStart: 1, rowSpan: 2 },
        { colStart: 4, colSpan: 3, rowStart: 1, rowSpan: 2 },
        { colStart: 1, colSpan: 3, rowStart: 3, rowSpan: 2 },
        { colStart: 4, colSpan: 3, rowStart: 3, rowSpan: 2 },
      ],
    },
    {
      id: `4-L-shape`,
      imageCount: 4,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 3, rowStart: 1, rowSpan: 2 },
        { colStart: 4, colSpan: 3, rowStart: 1, rowSpan: 4 },
        { colStart: 1, colSpan: 3, rowStart: 3, rowSpan: 1 },
        { colStart: 1, colSpan: 3, rowStart: 4, rowSpan: 1 },
      ],
    },
    {
      id: `5-mixed`,
      imageCount: 5,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 3, rowStart: 1, rowSpan: 2 },
        { colStart: 4, colSpan: 3, rowStart: 1, rowSpan: 2 },
        { colStart: 1, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 3, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 3, rowSpan: 2 },
      ],
    },
    {
      id: `5-hero-center`,
      imageCount: 5,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 3, colSpan: 2, rowStart: 1, rowSpan: 4 },
        { colStart: 5, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 1, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 3, rowSpan: 2 },
      ],
    },
    {
      id: `6-grid`,
      imageCount: 6,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 3, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 1, rowSpan: 2 },
        { colStart: 1, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 3, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 3, rowSpan: 2 },
      ],
    },
    {
      id: `6-mosaic`,
      imageCount: 6,
      columns: 6,
      rows: 4,
      cells: [
        { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 1, rowSpan: 1 },
        { colStart: 5, colSpan: 2, rowStart: 2, rowSpan: 1 },
        { colStart: 1, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 3, colSpan: 2, rowStart: 3, rowSpan: 2 },
        { colStart: 5, colSpan: 2, rowStart: 3, rowSpan: 2 },
      ],
    },
  ];
function Il(e) {
  let t = Fl.filter((t) => t.imageCount === e);
  if (t.length > 0) return t;
  let n =
    [...new Set(Fl.map((e) => e.imageCount))].sort(
      (t, n) => Math.abs(t - e) - Math.abs(n - e),
    )[0] ?? 4;
  return Fl.filter((e) => e.imageCount === n);
}
function dne(e) {
  let t = [...e];
  for (let e = t.length - 1; e > 0; e--) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t;
}
function fne(e, t, n) {
  let r = n / e.columns,
    i = r,
    a = i * e.rows;
  return {
    cells: e.cells.map((e, n) => ({
      imageIndex: t[n] ?? n,
      x: Math.round((e.colStart - 1) * r),
      y: Math.round((e.rowStart - 1) * i),
      width: Math.round(e.colSpan * r),
      height: Math.round(e.rowSpan * i),
    })),
    canvasWidth: n,
    canvasHeight: Math.round(a),
  };
}
function pne({ src: e, cell: t, onRemove: n }) {
  let [r, i] = (0, X.useState)(!1);
  return (0, Z.jsxs)(`div`, {
    className: `relative group overflow-hidden`,
    style: {
      gridColumn: `${t.colStart} / span ${t.colSpan}`,
      gridRow: `${t.rowStart} / span ${t.rowSpan}`,
    },
    children: [
      r
        ? (0, Z.jsx)(`div`, {
            className: `w-full h-full bg-secondary/30 flex items-center justify-center`,
            children: (0, Z.jsx)(pn, {
              className: `h-5 w-5 text-muted-foreground/30`,
            }),
          })
        : (0, Z.jsx)(`img`, {
            src: e,
            alt: ``,
            crossOrigin: `anonymous`,
            className: `w-full h-full object-cover`,
            onError: () => i(!0),
            loading: `lazy`,
          }),
      (0, Z.jsx)(`button`, {
        onClick: (e) => {
          (e.stopPropagation(), n());
        },
        className: `absolute top-1.5 right-1.5 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80`,
        children: (0, Z.jsx)(li, { className: `h-3 w-3` }),
      }),
    ],
  });
}
function mne({ cell: e }) {
  return (0, Z.jsx)(`div`, {
    className: `bg-secondary/30 animate-pulse flex items-center justify-center`,
    style: {
      gridColumn: `${e.colStart} / span ${e.colSpan}`,
      gridRow: `${e.rowStart} / span ${e.rowSpan}`,
    },
    children: (0, Z.jsx)(J, {
      className: `h-4 w-4 animate-spin text-muted-foreground/30`,
    }),
  });
}
