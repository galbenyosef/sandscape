// Create-ea24k1TY 219 — material
// Lines 74698-75013 of readable/assets/Create-ea24k1TY.pretty.js (statement-aligned).
function fue({
  openTabs: e,
  activeTab: t,
  onTabSelect: n,
  onTabClose: r,
  children: i,
}) {
  let a = s0.filter((t) => e.includes(t.id));
  return (0, Z.jsxs)(`div`, {
    className: `h-full flex flex-col`,
    children: [
      (0, Z.jsx)(Sr, {
        children:
          a.length > 1 &&
          (0, Z.jsx)(_r.div, {
            initial: { height: 0, opacity: 0 },
            animate: { height: `auto`, opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: `easeInOut` },
            className: `overflow-hidden shrink-0`,
            children: (0, Z.jsx)(`div`, {
              className: `flex items-center gap-0.5 px-2 pt-1.5 pb-0 border-b border-border bg-background/50`,
              children: (0, Z.jsx)(Sr, {
                initial: !1,
                children: a.map((e) => {
                  let i = e.icon,
                    a = e.id === t;
                  return (0, Z.jsxs)(
                    _r.button,
                    {
                      layout: !0,
                      initial: { opacity: 0, scale: 0.8, width: 0 },
                      animate: { opacity: 1, scale: 1, width: `auto` },
                      exit: { opacity: 0, scale: 0.8, width: 0 },
                      transition: { duration: 0.2, ease: `easeInOut` },
                      onClick: () => n(e.id),
                      className: p(
                        `group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-t-md transition-colors`,
                        `border border-b-0 border-transparent`,
                        a
                          ? `bg-card text-white border-border`
                          : `text-white/50 hover:text-white/80 hover:bg-white/5`,
                      ),
                      children: [
                        (0, Z.jsx)(i, { className: `h-3.5 w-3.5 shrink-0` }),
                        (0, Z.jsx)(`span`, {
                          className: `truncate`,
                          children: e.label,
                        }),
                        e.closable &&
                          (0, Z.jsx)(`span`, {
                            role: `button`,
                            onClick: (t) => {
                              (t.stopPropagation(), r(e.id));
                            },
                            className: p(
                              `ml-1 p-0.5 rounded hover:bg-white/10 transition-colors shrink-0`,
                              a
                                ? `opacity-70 hover:opacity-100`
                                : `opacity-0 group-hover:opacity-50 hover:!opacity-100`,
                            ),
                            children: (0, Z.jsx)(li, { className: `h-3 w-3` }),
                          }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
            }),
          }),
      }),
      (0, Z.jsx)(`div`, {
        className: `flex-1 overflow-hidden min-h-0 relative`,
        children: i,
      }),
    ],
  });
}
var pue = s0.map((e) => e.id),
  c0 = {
    name: `OutputShader`,
    uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } },
    vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`,
  },
  mue = class extends Zee {
    constructor() {
      (super(),
        (this.isOutputPass = !0),
        (this.uniforms = Ii.clone(c0.uniforms)),
        (this.material = new ha({
          name: c0.name,
          uniforms: this.uniforms,
          vertexShader: c0.vertexShader,
          fragmentShader: c0.fragmentShader,
        })),
        (this._fsQuad = new Qee(this.material)),
        (this._outputColorSpace = null),
        (this._toneMapping = null));
    }
    render(e, t, n) {
      ((this.uniforms.tDiffuse.value = n.texture),
        (this.uniforms.toneMappingExposure.value = e.toneMappingExposure),
        (this._outputColorSpace !== e.outputColorSpace ||
          this._toneMapping !== e.toneMapping) &&
          ((this._outputColorSpace = e.outputColorSpace),
          (this._toneMapping = e.toneMapping),
          (this.material.defines = {}),
          Ci.getTransfer(this._outputColorSpace) === `srgb` &&
            (this.material.defines.SRGB_TRANSFER = ``),
          this._toneMapping === 1
            ? (this.material.defines.LINEAR_TONE_MAPPING = ``)
            : this._toneMapping === 2
              ? (this.material.defines.REINHARD_TONE_MAPPING = ``)
              : this._toneMapping === 3
                ? (this.material.defines.CINEON_TONE_MAPPING = ``)
                : this._toneMapping === 4
                  ? (this.material.defines.ACES_FILMIC_TONE_MAPPING = ``)
                  : this._toneMapping === 6
                    ? (this.material.defines.AGX_TONE_MAPPING = ``)
                    : this._toneMapping === 7
                      ? (this.material.defines.NEUTRAL_TONE_MAPPING = ``)
                      : this._toneMapping === 5 &&
                        (this.material.defines.CUSTOM_TONE_MAPPING = ``),
          (this.material.needsUpdate = !0)),
        this.renderToScreen === !0
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  l0 = new sa(),
  u0 = new Y(),
  d0 = class extends ja {
    constructor() {
      (super(),
        (this.isLineSegmentsGeometry = !0),
        (this.type = `LineSegmentsGeometry`),
        this.setIndex([0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]),
        this.setAttribute(
          `position`,
          new Ki(
            [
              -1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1,
              0, 1, -1, 0,
            ],
            3,
          ),
        ),
        this.setAttribute(
          `uv`,
          new Ki([-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], 2),
        ));
    }
    applyMatrix4(e) {
      let t = this.attributes.instanceStart,
        n = this.attributes.instanceEnd;
      return (
        t !== void 0 &&
          (t.applyMatrix4(e), n.applyMatrix4(e), (t.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
      );
    }
    setPositions(e) {
      let t;
      e instanceof Float32Array
        ? (t = e)
        : Array.isArray(e) && (t = new Float32Array(e));
      let n = new ga(t, 6, 1);
      return (
        this.setAttribute(`instanceStart`, new Pa(n, 3, 0)),
        this.setAttribute(`instanceEnd`, new Pa(n, 3, 3)),
        (this.instanceCount = this.attributes.instanceStart.count),
        this.computeBoundingBox(),
        this.computeBoundingSphere(),
        this
      );
    }
    setColors(e) {
      let t;
      e instanceof Float32Array
        ? (t = e)
        : Array.isArray(e) && (t = new Float32Array(e));
      let n = new ga(t, 6, 1);
      return (
        this.setAttribute(`instanceColorStart`, new Pa(n, 3, 0)),
        this.setAttribute(`instanceColorEnd`, new Pa(n, 3, 3)),
        this
      );
    }
    fromWireframeGeometry(e) {
      return (this.setPositions(e.attributes.position.array), this);
    }
    fromEdgesGeometry(e) {
      return (this.setPositions(e.attributes.position.array), this);
    }
    fromMesh(e) {
      return (this.fromWireframeGeometry(new Gi(e.geometry)), this);
    }
    fromLineSegments(e) {
      let t = e.geometry;
      return (this.setPositions(t.attributes.position.array), this);
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new sa());
      let e = this.attributes.instanceStart,
        t = this.attributes.instanceEnd;
      e !== void 0 &&
        t !== void 0 &&
        (this.boundingBox.setFromBufferAttribute(e),
        l0.setFromBufferAttribute(t),
        this.boundingBox.union(l0));
    }
    computeBoundingSphere() {
      (this.boundingSphere === null && (this.boundingSphere = new Ia()),
        this.boundingBox === null && this.computeBoundingBox());
      let e = this.attributes.instanceStart,
        t = this.attributes.instanceEnd;
      if (e !== void 0 && t !== void 0) {
        let n = this.boundingSphere.center;
        this.boundingBox.getCenter(n);
        let r = 0;
        for (let i = 0, a = e.count; i < a; i++)
          (u0.fromBufferAttribute(e, i),
            (r = Math.max(r, n.distanceToSquared(u0))),
            u0.fromBufferAttribute(t, i),
            (r = Math.max(r, n.distanceToSquared(u0))));
        ((this.boundingSphere.radius = Math.sqrt(r)),
          isNaN(this.boundingSphere.radius) &&
            console.error(
              `THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,
              this,
            ));
      }
    }
    toJSON() {}
  };
