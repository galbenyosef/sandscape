// Create-ea24k1TY 137 — node
// Lines 45857-46194 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function yL(e) {
  e ||= bL;
  function t(t, n) {
    return t && n ? e(t.__data__, n.__data__) : !t - !n;
  }
  for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
    for (
      var o = n[a], s = o.length, c = (i[a] = Array(s)), l, u = 0;
      u < s;
      ++u
    )
      (l = o[u]) && (c[u] = l);
    c.sort(t);
  }
  return new jR(i, this._parents).order();
}
function bL(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xL() {
  var e = arguments[0];
  return ((arguments[0] = this), e.apply(null, arguments), this);
}
function SL() {
  return Array.from(this);
}
function CL() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function wL() {
  let e = 0;
  for (let t of this) ++e;
  return e;
}
function TL() {
  return !this.node();
}
function EL(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && e.call(s, s.__data__, a, i);
  return this;
}
function DL(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function OL(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function kL(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function AL(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function jL(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ML(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, n);
  };
}
function NL(e, t) {
  var n = LI(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? OL
        : DL
      : typeof t == `function`
        ? n.local
          ? ML
          : jL
        : n.local
          ? AL
          : kL)(n, t),
  );
}
function PL(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function FL(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function IL(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function LL(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function RL(e, t, n) {
  return arguments.length > 1
    ? this.each(
        (t == null ? FL : typeof t == `function` ? LL : IL)(e, t, n ?? ``),
      )
    : zL(this.node(), e);
}
function zL(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    PL(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function BL(e) {
  return function () {
    delete this[e];
  };
}
function VL(e, t) {
  return function () {
    this[e] = t;
  };
}
function HL(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function UL(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? BL : typeof t == `function` ? HL : VL)(e, t))
    : this.node()[e];
}
function WL(e) {
  return e.trim().split(/^|\s+/);
}
function GL(e) {
  return e.classList || new KL(e);
}
function KL(e) {
  ((this._node = e), (this._names = WL(e.getAttribute(`class`) || ``)));
}
KL.prototype = {
  add: function (e) {
    this._names.indexOf(e) < 0 &&
      (this._names.push(e),
      this._node.setAttribute(`class`, this._names.join(` `)));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute(`class`, this._names.join(` `)));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function qL(e, t) {
  for (var n = GL(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function JL(e, t) {
  for (var n = GL(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function YL(e) {
  return function () {
    qL(this, e);
  };
}
function XL(e) {
  return function () {
    JL(this, e);
  };
}
function ZL(e, t) {
  return function () {
    (t.apply(this, arguments) ? qL : JL)(this, e);
  };
}
function QL(e, t) {
  var n = WL(e + ``);
  if (arguments.length < 2) {
    for (var r = GL(this.node()), i = -1, a = n.length; ++i < a;)
      if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == `function` ? ZL : t ? YL : XL)(n, t));
}
function $L() {
  this.textContent = ``;
}
function eR(e) {
  return function () {
    this.textContent = e;
  };
}
function tR(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? ``;
  };
}
function nR(e) {
  return arguments.length
    ? this.each(e == null ? $L : (typeof e == `function` ? tR : eR)(e))
    : this.node().textContent;
}
function rR() {
  this.innerHTML = ``;
}
function iR(e) {
  return function () {
    this.innerHTML = e;
  };
}
function aR(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? ``;
  };
}
function oR(e) {
  return arguments.length
    ? this.each(e == null ? rR : (typeof e == `function` ? aR : iR)(e))
    : this.node().innerHTML;
}
function sR() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function cR() {
  return this.each(sR);
}
function lR() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function uR() {
  return this.each(lR);
}
function dR(e) {
  var t = typeof e == `function` ? e : BI(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function fR() {
  return null;
}
function pR(e, t) {
  var n = typeof e == `function` ? e : BI(e),
    r = t == null ? fR : typeof t == `function` ? t : HI(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null,
    );
  });
}
function mR() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function hR() {
  return this.each(mR);
}
function gR() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function _R() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function vR(e) {
  return this.select(e ? _R : gR);
}
function yR(e) {
  return arguments.length ? this.property(`__data__`, e) : this.node().__data__;
}
function bR(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function xR(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var t = ``,
        n = e.indexOf(`.`);
      return (
        n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
        { type: e, name: t }
      );
    });
}
function SR(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, a; n < i; ++n)
        ((a = t[n]),
          (!e.type || a.type === e.type) && a.name === e.name
            ? this.removeEventListener(a.type, a.listener, a.options)
            : (t[++r] = a));
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
