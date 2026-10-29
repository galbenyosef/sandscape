// Create-CEn7EAZs 68 — children
// Lines 21554-21900 of readable/assets/Create-CEn7EAZs.pretty.js (statement-aligned).
function Gm(e, t, n) {
  return !e || !e.length
    ? null
    : e.find(function (e) {
        return (
          e && (typeof t == `function` ? t(e) : (0, Fm.default)(e, t)) === n
        );
      });
}
function Km(e, t) {
  for (var n in e)
    if (
      {}.hasOwnProperty.call(e, n) &&
      (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n])
    )
      return !1;
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r))
      return !1;
  return !0;
}
var qm = e(mm());
function Jm(e) {
  "@babel/helpers - typeof";
  return (
    (Jm =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Jm(e)
  );
}
var Kre = [`viewBox`, `children`],
  qre =
    `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
      `.`,
    ),
  Ym = [`points`, `pathLength`],
  Jre = { svg: Kre, polygon: Ym, polyline: Ym },
  Xm =
    `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
      `.`,
    ),
  Zm = function (e, t) {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (((0, X.isValidElement)(e) && (n = e.props), !(0, qm.default)(n)))
      return null;
    var r = {};
    return (
      Object.keys(n).forEach(function (e) {
        Xm.includes(e) &&
          (r[e] =
            t ||
            function (t) {
              return n[e](n, t);
            });
      }),
      r
    );
  },
  Yre = function (e, t, n) {
    return function (r) {
      return (e(t, n, r), null);
    };
  },
  Qm = function (e, t, n) {
    if (!(0, qm.default)(e) || Jm(e) !== `object`) return null;
    var r = null;
    return (
      Object.keys(e).forEach(function (i) {
        var a = e[i];
        Xm.includes(i) &&
          typeof a == `function` &&
          ((r ||= {}), (r[i] = Yre(a, t, n)));
      }),
      r
    );
  },
  $m = e(hm()),
  Xre = Vre(),
  Zre = [`children`],
  Qre = [`children`];
function eh(e, t) {
  if (e == null) return {};
  var n = $re(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function $re(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var th = {
    click: `onClick`,
    mousedown: `onMouseDown`,
    mouseup: `onMouseUp`,
    mouseover: `onMouseOver`,
    mousemove: `onMouseMove`,
    mouseout: `onMouseOut`,
    mouseenter: `onMouseEnter`,
    mouseleave: `onMouseLeave`,
    touchcancel: `onTouchCancel`,
    touchend: `onTouchEnd`,
    touchmove: `onTouchMove`,
    touchstart: `onTouchStart`,
    contextmenu: `onContextMenu`,
    dblclick: `onDoubleClick`,
  },
  nh = function (e) {
    return typeof e == `string`
      ? e
      : e
        ? e.displayName || e.name || `Component`
        : ``;
  },
  rh = null,
  ih = null,
  ah = function e(t) {
    if (t === rh && Array.isArray(ih)) return ih;
    var n = [];
    return (
      X.Children.forEach(t, function (t) {
        (0, Im.default)(t) ||
          ((0, Xre.isFragment)(t)
            ? (n = n.concat(e(t.props.children)))
            : n.push(t));
      }),
      (ih = n),
      (rh = t),
      n
    );
  };
function oh(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t)
      ? t.map(function (e) {
          return nh(e);
        })
      : [nh(t)]),
    ah(e).forEach(function (e) {
      var t =
        (0, Fm.default)(e, `type.displayName`) ||
        (0, Fm.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
function sh(e, t) {
  var n = oh(e, t);
  return n && n[0];
}
var ch = function (e) {
    if (!e || !e.props) return !1;
    var t = e.props,
      n = t.width,
      r = t.height;
    return !(!zm(n) || n <= 0 || !zm(r) || r <= 0);
  },
  eie =
    `a.altGlyph.altGlyphDef.altGlyphItem.animate.animateColor.animateMotion.animateTransform.circle.clipPath.color-profile.cursor.defs.desc.ellipse.feBlend.feColormatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.font.font-face.font-face-format.font-face-name.font-face-url.foreignObject.g.glyph.glyphRef.hkern.image.line.lineGradient.marker.mask.metadata.missing-glyph.mpath.path.pattern.polygon.polyline.radialGradient.rect.script.set.stop.style.svg.switch.symbol.text.textPath.title.tref.tspan.use.view.vkern`.split(
      `.`,
    ),
  tie = function (e) {
    return e && e.type && (0, Nm.default)(e.type) && eie.indexOf(e.type) >= 0;
  },
  nie = function (e, t, n, r) {
    var i = Jre?.[r] ?? [];
    return (
      t.startsWith(`data-`) ||
      (!(0, $m.default)(e) && ((r && i.includes(t)) || qre.includes(t))) ||
      (n && Xm.includes(t))
    );
  },
  lh = function (e, t, n) {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var r = e;
    if (((0, X.isValidElement)(e) && (r = e.props), !(0, qm.default)(r)))
      return null;
    var i = {};
    return (
      Object.keys(r).forEach(function (e) {
        nie(r?.[e], e, t, n) && (i[e] = r[e]);
      }),
      i
    );
  },
  uh = function e(t, n) {
    if (t === n) return !0;
    var r = X.Children.count(t);
    if (r !== X.Children.count(n)) return !1;
    if (r === 0) return !0;
    if (r === 1)
      return dh(Array.isArray(t) ? t[0] : t, Array.isArray(n) ? n[0] : n);
    for (var i = 0; i < r; i++) {
      var a = t[i],
        o = n[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!dh(a, o)) return !1;
    }
    return !0;
  },
  dh = function (e, t) {
    if ((0, Im.default)(e) && (0, Im.default)(t)) return !0;
    if (!(0, Im.default)(e) && !(0, Im.default)(t)) {
      var n = e.props || {},
        r = n.children,
        i = eh(n, Zre),
        a = t.props || {},
        o = a.children,
        s = eh(a, Qre);
      return r && o ? Km(i, s) && uh(r, o) : !r && !o && Km(i, s);
    }
    return !1;
  },
  fh = function (e, t) {
    var n = [],
      r = {};
    return (
      ah(e).forEach(function (e, i) {
        if (tie(e)) n.push(e);
        else if (e) {
          var a = nh(e.type),
            o = t[a] || {},
            s = o.handler,
            c = o.once;
          if (s && (!c || !r[a])) {
            var l = s(e, a, i);
            (n.push(l), (r[a] = !0));
          }
        }
      }),
      n
    );
  },
  rie = function (e) {
    var t = e && e.type;
    return t && th[t] ? th[t] : null;
  },
  iie = function (e, t) {
    return ah(t).indexOf(e);
  },
  aie = [
    `children`,
    `width`,
    `height`,
    `viewBox`,
    `className`,
    `style`,
    `title`,
    `desc`,
  ];
function ph() {
  return (
    (ph = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ph.apply(this, arguments)
  );
}
function oie(e, t) {
  if (e == null) return {};
  var n = sie(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function sie(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function mh(e) {
  var t = e.children,
    n = e.width,
    r = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    s = e.title,
    c = e.desc,
    l = oie(e, aie),
    u = i || { width: n, height: r, x: 0, y: 0 },
    d = h(`recharts-surface`, a);
  return X.createElement(
    `svg`,
    ph({}, lh(l, !0, `svg`), {
      className: d,
      width: n,
      height: r,
      style: o,
      viewBox: `${u.x} ${u.y} ${u.width} ${u.height}`,
    }),
    X.createElement(`title`, null, s),
    X.createElement(`desc`, null, c),
    t,
  );
}
var cie = [`children`, `className`];
