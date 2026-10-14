// authErrors-DEBvXlic 01 — includes
// Lines 1-47 of readable/assets/authErrors-DEBvXlic.pretty.js (statement-aligned).
function e(e) {
  let t = e ?? {},
    n = `${t.code ?? ``}`.toLowerCase(),
    r = `${t.message ?? ``}`.toLowerCase();
  return n === `23505` || n.includes(`unique`) || r.includes(`duplicate key`)
    ? {
        category: `username_taken`,
        messageKey: `authPage.errors.usernameTaken`,
      }
    : n.includes(`otp_expired`) ||
        n.includes(`otp_disabled`) ||
        r.includes(`token has expired`) ||
        r.includes(`invalid token`) ||
        r.includes(`invalid otp`)
      ? {
          category: `invalid_or_expired_code`,
          messageKey: `authPage.errors.invalidCode`,
        }
      : t.status === 429 ||
          n.includes(`over_request_rate_limit`) ||
          r.includes(`rate limit`) ||
          r.includes(`security purposes`)
        ? {
            category: `rate_limited`,
            messageKey: `authPage.errors.rateLimited`,
          }
        : n.includes(`captcha`) || r.includes(`captcha`)
          ? { category: `captcha`, messageKey: `authPage.errors.captcha` }
          : n.includes(`invalid_credentials`) ||
              r.includes(`invalid login credentials`) ||
              r.includes(`email not confirmed`)
            ? {
                category: `invalid_credentials`,
                messageKey: `authPage.errors.invalidCredentials`,
              }
            : r.includes(`failed to fetch`) || r.includes(`network`)
              ? { category: `network`, messageKey: `authPage.errors.network` }
              : n.includes(`validation`) || r.includes(`username`)
                ? {
                    category: `validation`,
                    messageKey: `authPage.errors.validation`,
                  }
                : {
                    category: `unknown`,
                    messageKey: `authPage.errors.generic`,
                  };
}
