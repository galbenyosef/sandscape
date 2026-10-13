// assets__CookieConsentBanner-BrtZ2LZ4 02 — props
// Lines 82-411 of readable/assets__CookieConsentBanner-BrtZ2LZ4.pretty.js (statement-aligned).
var c = s(o, { path: `/` }),
  l = ({ condition: e, wrapper: t, children: n }) => (e ? t(n) : n),
  u = { TOP: `top`, BOTTOM: `bottom`, NONE: `none` },
  d = ((e) => ((e.STRICT = `strict`), (e.LAX = `lax`), (e.NONE = `none`), e))(
    d || {},
  ),
  f = { HIDDEN: `hidden`, SHOW: `show`, BY_COOKIE_VALUE: `byCookieValue` },
  p = `CookieConsent`,
  m = {
    disableStyles: !1,
    hideOnAccept: !0,
    hideOnDecline: !0,
    location: u.BOTTOM,
    visible: f.BY_COOKIE_VALUE,
    onAccept: (e) => {},
    onDecline: () => {},
    cookieName: p,
    cookieValue: `true`,
    declineCookieValue: `false`,
    setDeclineCookie: !0,
    buttonText: `I understand`,
    declineButtonText: `I decline`,
    debug: !1,
    expires: 365,
    containerClasses: `CookieConsent`,
    contentClasses: ``,
    buttonClasses: ``,
    buttonWrapperClasses: ``,
    declineButtonClasses: ``,
    buttonId: `rcc-confirm-button`,
    declineButtonId: `rcc-decline-button`,
    extraCookieOptions: {},
    disableButtonStyles: !1,
    enableDeclineButton: !1,
    flipButtons: !1,
    sameSite: d.LAX,
    ButtonComponent: ({ children: e, ...t }) =>
      i.createElement(`button`, { ...t }, e),
    overlay: !1,
    overlayClasses: ``,
    onOverlayClick: () => {},
    acceptOnOverlayClick: !1,
    ariaAcceptLabel: `Accept cookies`,
    ariaDeclineLabel: `Decline cookies`,
    acceptOnScroll: !1,
    acceptOnScrollPercentage: 25,
    customContentAttributes: {},
    customContainerAttributes: {},
    customButtonProps: {},
    customDeclineButtonProps: {},
    customButtonWrapperAttributes: {},
    style: {},
    buttonStyle: {},
    declineButtonStyle: {},
    contentStyle: {},
    overlayStyle: {},
  },
  h = {
    visible: !1,
    style: {
      alignItems: `baseline`,
      background: `#353535`,
      color: `white`,
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      left: `0`,
      position: `fixed`,
      width: `100%`,
      zIndex: `999`,
    },
    buttonStyle: {
      background: `#ffd42d`,
      border: `0`,
      borderRadius: `0px`,
      boxShadow: `none`,
      color: `black`,
      cursor: `pointer`,
      flex: `0 0 auto`,
      padding: `5px 10px`,
      margin: `15px`,
    },
    declineButtonStyle: {
      background: `#c12a2a`,
      border: `0`,
      borderRadius: `0px`,
      boxShadow: `none`,
      color: `#e5e5e5`,
      cursor: `pointer`,
      flex: `0 0 auto`,
      padding: `5px 10px`,
      margin: `15px`,
    },
    contentStyle: { flex: `1 0 300px`, margin: `15px` },
    overlayStyle: {
      position: `fixed`,
      left: 0,
      top: 0,
      width: `100%`,
      height: `100%`,
      zIndex: `999`,
      backgroundColor: `rgba(0,0,0,0.3)`,
    },
  },
  g = (e = p) => {
    let t = c.get(e);
    return t === void 0 ? c.get(_(e)) : t;
  },
  _ = (e) => `${e}-legacy`,
  v = class extends i.Component {
    constructor() {
      (super(...arguments),
        (this.state = h),
        (this.handleScroll = () => {
          let { acceptOnScrollPercentage: e } = { ...m, ...this.props },
            t = document.documentElement,
            n = document.body,
            r = `scrollTop`,
            i = `scrollHeight`;
          ((t[r] || n[r]) / ((t[i] || n[i]) - t.clientHeight)) * 100 > e &&
            this.accept(!0);
        }),
        (this.removeScrollListener = () => {
          let { acceptOnScroll: e } = this.props;
          e && globalThis.removeEventListener(`scroll`, this.handleScroll);
        }));
    }
    componentDidMount() {
      let { debug: e } = this.props;
      (this.getCookieValue() === void 0 || e) &&
        (this.setState({ visible: !0 }),
        this.props.acceptOnScroll &&
          globalThis.addEventListener(`scroll`, this.handleScroll, {
            passive: !0,
          }));
    }
    componentWillUnmount() {
      this.removeScrollListener();
    }
    accept(e = !1) {
      let {
        cookieName: t,
        cookieValue: n,
        hideOnAccept: r,
        onAccept: i,
      } = { ...m, ...this.props };
      (this.setCookie(t, n),
        i(e ?? !1),
        r && (this.setState({ visible: !1 }), this.removeScrollListener()));
    }
    overlayClick() {
      let { acceptOnOverlayClick: e, onOverlayClick: t } = {
        ...m,
        ...this.props,
      };
      (e && this.accept(), t());
    }
    decline() {
      let {
        cookieName: e,
        declineCookieValue: t,
        hideOnDecline: n,
        onDecline: r,
        setDeclineCookie: i,
      } = { ...m, ...this.props };
      (i && this.setCookie(e, t), r(), n && this.setState({ visible: !1 }));
    }
    setCookie(e, t) {
      let { extraCookieOptions: n, expires: r, sameSite: i } = this.props,
        { cookieSecurity: a } = this.props;
      a === void 0 &&
        (a = !globalThis.location || globalThis.location.protocol === `https:`);
      let o = { expires: r, ...n, sameSite: i, secure: a };
      (i === d.NONE && c.set(_(e), t, o), c.set(e, t, o));
    }
    getCookieValue() {
      let { cookieName: e } = this.props;
      return g(e);
    }
    render() {
      switch (this.props.visible) {
        case f.HIDDEN:
          return null;
        case f.BY_COOKIE_VALUE:
          if (!this.state.visible) return null;
          break;
      }
      let {
          location: e,
          style: t,
          buttonStyle: n,
          declineButtonStyle: r,
          contentStyle: a,
          disableStyles: o,
          buttonText: s,
          declineButtonText: c,
          containerClasses: d,
          contentClasses: p,
          buttonClasses: m,
          buttonWrapperClasses: h,
          declineButtonClasses: g,
          buttonId: _,
          declineButtonId: v,
          disableButtonStyles: y,
          enableDeclineButton: b,
          flipButtons: x,
          ButtonComponent: S,
          overlay: C,
          overlayClasses: w,
          overlayStyle: T,
          ariaAcceptLabel: E,
          ariaDeclineLabel: D,
          customContainerAttributes: O,
          customContentAttributes: k,
          customButtonProps: A,
          customDeclineButtonProps: j,
          customButtonWrapperAttributes: M,
        } = this.props,
        N = {},
        P = {},
        F = {},
        I = {},
        L = {};
      switch (
        (o
          ? ((N = Object.assign({}, t)),
            (P = Object.assign({}, n)),
            (F = Object.assign({}, r)),
            (I = Object.assign({}, a)),
            (L = Object.assign({}, T)))
          : ((N = Object.assign({}, { ...this.state.style, ...t })),
            (I = Object.assign({}, { ...this.state.contentStyle, ...a })),
            (L = Object.assign({}, { ...this.state.overlayStyle, ...T })),
            y
              ? ((P = Object.assign({}, n)), (F = Object.assign({}, r)))
              : ((P = Object.assign({}, { ...this.state.buttonStyle, ...n })),
                (F = Object.assign(
                  {},
                  { ...this.state.declineButtonStyle, ...r },
                )))),
        e)
      ) {
        case u.TOP:
          N.top = `0`;
          break;
        case u.BOTTOM:
          N.bottom = `0`;
          break;
      }
      let R = [];
      return (
        b &&
          R.push(
            i.createElement(
              S,
              {
                key: `declineButton`,
                style: F,
                className: g,
                id: v,
                "aria-label": D,
                onClick: () => {
                  this.decline();
                },
                ...j,
              },
              c,
            ),
          ),
        R.push(
          i.createElement(
            S,
            {
              key: `acceptButton`,
              style: P,
              className: m,
              id: _,
              "aria-label": E,
              onClick: () => {
                this.accept();
              },
              ...A,
            },
            s,
          ),
        ),
        x && R.reverse(),
        i.createElement(
          l,
          {
            condition: C,
            wrapper: (e) =>
              i.createElement(
                `div`,
                {
                  style: L,
                  className: w,
                  onClick: () => {
                    this.overlayClick();
                  },
                  onKeyDown: (e) => {
                    (e.key === `Enter` || e.key === ` `) &&
                      (e.preventDefault(), this.overlayClick());
                  },
                  role: `button`,
                  tabIndex: 0,
                  "aria-label": `Close cookie consent banner`,
                },
                e,
              ),
          },
          i.createElement(
            `div`,
            { className: `${d}`, style: N, ...O },
            i.createElement(
              `div`,
              { style: I, className: p, ...k },
              this.props.children,
            ),
            i.createElement(
              `div`,
              { className: `${h}`, ...M },
              R.map((e) => e),
            ),
          ),
        )
      );
    }
  };
v.defaultProps = m;
