// CookieConsentBanner-BrtZ2LZ4 03 — children
// Lines 412-464 of readable/assets/CookieConsentBanner-BrtZ2LZ4.pretty.js (statement-aligned).
var y = v,
  b = n(),
  x = () => {
    let { t: e } = r();
    return (0, b.jsx)(y, {
      location: `none`,
      disableStyles: !0,
      containerClasses: `fixed bottom-4 right-4 max-w-sm bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col sm:flex-row items-center`,
      contentClasses: `text-sm`,
      buttonWrapperClasses: `flex space-x-2 sm:ml-auto mt-2 sm:mt-0`,
      buttonClasses: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded`,
      declineButtonClasses: `bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded`,
      enableDeclineButton: !0,
      buttonText: e(`cookies.accept`, `Accept all`),
      declineButtonText: e(`cookies.decline`, `Reject all`),
      cookieName: `sandscapeCookieConsent`,
      onAccept: () => {
        window.dispatchEvent(
          new StorageEvent(`storage`, {
            key: `sandscapeCookieConsent`,
            newValue: `true`,
          }),
        );
      },
      onDecline: () => {
        window.dispatchEvent(
          new StorageEvent(`storage`, {
            key: `sandscapeCookieConsent`,
            newValue: `false`,
          }),
        );
      },
      children: (0, b.jsxs)(`div`, {
        children: [
          (0, b.jsx)(`h3`, {
            className: `font-bold text-md mb-2`,
            children: e(`cookies.notice`, `Cookie Notice`),
          }),
          e(
            `cookies.message`,
            `We use optional analytics and advertising cookies that you can accept or reject. Read our`,
          ),
          ` `,
          (0, b.jsx)(`a`, {
            href: `/about/cookie`,
            className: `text-indigo-300 hover:text-indigo-200 underline underline-offset-2`,
            children: e(`cookies.policy`, `cookie policy`),
          }),
          `.`,
        ],
      }),
    });
  };
