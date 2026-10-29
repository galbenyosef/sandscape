// ErrorBoundary-DpHQd_gF 06 — classname
// Lines 1860-1924 of readable/assets/ErrorBoundary-DpHQd_gF.pretty.js (statement-aligned).
var tr = class extends k.Component {
  constructor(e) {
    (super(e), (this.state = { hasError: !1, error: null, errorInfo: null }));
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, error: e };
  }
  componentDidCatch(e, t) {
    (this.setState({ errorInfo: t }),
      console.error(`[ErrorBoundary] Caught error:`, e),
      console.error(`[ErrorBoundary] Component stack:`, t.componentStack),
      this.props.onError?.(e, t));
  }
  handleReset = () => {
    (this.setState({ hasError: !1, error: null, errorInfo: null }),
      this.props.onReset?.());
  };
  render() {
    let { hasError: e, error: t, errorInfo: n } = this.state,
      {
        children: r,
        fallback: i,
        fallbackRender: a,
        className: o,
      } = this.props;
    return e
      ? a && t
        ? a(t)
        : i ||
          (0, A.jsxs)(`div`, {
            role: `alert`,
            className: c(
              `flex flex-col items-center justify-center min-h-[200px] p-6`,
              `bg-red-500/10 border border-red-500/30 rounded-lg`,
              `text-red-700 dark:text-red-300`,
              o,
            ),
            children: [
              (0, A.jsx)(Oe, { className: `h-12 w-12 mb-4 opacity-80` }),
              (0, A.jsx)(`h2`, {
                className: `text-lg font-semibold mb-2`,
                children: `Something went wrong`,
              }),
              (0, A.jsx)(`p`, {
                className: `text-sm text-center mb-4 max-w-md opacity-90`,
                children:
                  t?.message ||
                  `An unexpected error occurred while rendering this component.`,
              }),
              !1,
              (0, A.jsxs)(ne, {
                variant: `outline`,
                size: `sm`,
                onClick: this.handleReset,
                className: `gap-1.5 border-red-500/50 hover:bg-red-500/20`,
                children: [
                  (0, A.jsx)(D, { className: `h-3.5 w-3.5` }),
                  `Try again`,
                ],
              }),
            ],
          })
      : r;
  }
};
