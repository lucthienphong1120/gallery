! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).ImgPreviewer = t()
}(this, function () {
	"use strict";

	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}

	function t(e) {
		e.preventDefault()
	}

	function n(e, t, n) {
		var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
			o = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
			s = t.start || 0,
			a = t.end || 0,
			c = t.step,
			l = null;
		! function d() {
			c > 0 && s < a || c < 0 && s > a ? (s += c, e.style[t.style] = t.template.replace("$", s), l = i(d)) : (n && n(), o(l))
		}()
	}

	function i(e, t, n) {
		var i = d * n / e,
			o = l * n / t;
		return i > o ? o : i
	}

	function o(e, t, n, i, o) {
		e.style.cssText = "width: 220px;height: unset;position:fixed; top:".concat(o, "px; left:").concat(i, "px;")
	}

	function s(e) {
		r.style.display = e ? "block" : "none"
	}

	function a(e) {
		c.style.overflow = e ? "auto" : "hidden"
	}
	var c, l, d, r = null,
		u = null,
		m = null,
		h = 0,
		f = {
			ratio: .9,
			zoom: {
				min: .1,
				max: 5,
				step: .1
			},
			opacity: .6,
			scrollbar: !1
		};
	return function () {
		function g(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, g), this.selector = e, this.options = t, this.config = Object.assign({}, f, t), this.index = 0, this.imageElements = [], !e || "string" != typeof e) throw new Error("ImagePreviewer plugin should css string selector that on first params,like #el,.el");
			if (!document.querySelector(e)) throw new Error("selector is invalid");
			this.init()
		}
		var p, v, y;
		return p = g, y = [{
			key: "setImageAnimationParams",
			value: function (e) {
				u.style.setProperty("--offsetX", "".concat(e.endX, "px")), u.style.setProperty("--offsetY", "".concat(e.endY + 30, "px")), u.style.setProperty("--scale", "".concat(e.scale)), u.style.setProperty("--rotate", "".concat(e.rotate, "deg"))
			}
		}], (v = [{
			key: "update",
			value: function () {
				var e = this;
				this.imageElements = document.querySelectorAll("".concat(this.selector, " img:not(#preview-image)")), this.imageElements.forEach(function (t, n) {
					t.onclick = null, t.onclick = function (t) {
						e.handleOpen(t, n), s(!0), e.updateIndex(n)
					}
				})
			}
		}, {
			key: "bindEvent",
			value: function () {
				var e = this,
					n = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(window.navigator.userAgent),
					i = n ? "touchstart" : "mousedown",
					o = n ? "touchend" : "mouseup",
					a = n ? "touchmove" : "mousemove";
				this.imageElements.forEach(function (t, n) {
					t.onclick = function (t) {
						e.handleOpen(t, n), s(!0), e.updateIndex(n)
					}
				}), document.getElementById("close").addEventListener("click", function () {
					e.handleClose()
				}), document.getElementById("reset").addEventListener("click", function () {
					e.handleReset()
				}), document.getElementById("prev").addEventListener("click", function () {
					e.prev()
				}), document.getElementById("next").addEventListener("click", function () {
					e.next()
				}), r.addEventListener("click", function (t) {
					"image-container" === t.target.classList[0] && e.handleClose()
				}), u.addEventListener(i, function (e) {
					var t = e.clientX - u.offsetLeft,
						n = e.clientY - u.offsetTop;
					this.classList.add("moving"), this["on".concat(a)] = function (e) {
						var i = e.clientX - t,
							o = e.clientY - n;
						this.style.left = "".concat(i, "px"), this.style.top = "".concat(o, "px")
					}, this["on".concat(o)] = function () {
						this.classList.remove("moving"), this.onmousemove = null
					}, this.onmouseout = function () {
						this.classList.remove("moving"), this.onmousemove = null
					}
				}), u.addEventListener("mousewheel", function (t) {
					var n = e.config.zoom,
						i = n.min,
						o = n.max,
						s = n.step;
					t.wheelDelta > 0 && h < o ? h += s : h > i && (h -= s), u.style.setProperty("--scale", "".concat(h.toFixed(2)))
				}, !0), document.getElementById("rotate-right").addEventListener("click", function () {
					e.handelRotateRight()
				}), document.getElementById("rotate-left").addEventListener("click", function () {
					e.handelRotateLeft()
				}), r.addEventListener("mousewheel", t), document.ondragstart = t, document.ondragend = t, window.onresize = function (e, t) {
					var n = null;
					return function (i) {
						clearTimeout(n), n = setTimeout(function () {
							e(i), clearTimeout(n)
						}, t)
					}
				}.bind(null, function () {
					e.handleClose(), d = window.innerWidth, l = window.innerHeight
				}, 100)()
			}
		}, {
			key: "handleReset",
			value: function () {
				u.style.top = "".concat(m.startY, "px"), u.style.left = "".concat(m.startX, "px"), u.style.setProperty("--rotate", "".concat(0, "deg")), u.style.setProperty("--scale", "".concat(m.scale))
			}
		}, {
			key: "handleOpen",
			value: function (e, t) {
				var n = this.config.ratio,
					s = this.imageElements,
					c = e.target,
					f = c.width,
					p = c.height,
					v = e.clientX - e.offsetX,
					y = e.clientY - e.offsetY + 1;
				h = i(f, p, n), m = {
					startX: v,
					startY: y,
					endX: d / 2 - f / 2 - v,
					endY: l / 2 - p / 2 - y,
					scale: h,
					rotate: 0
				}, u.src = s[t].src, o(u, f, p, v, y), setTimeout(function () {
					g.setImageAnimationParams(m)
				}), r.classList.add("show"), !this.config.scrollbar && a(!1)
			}
		}, {
			key: "handleClose",
			value: function () {
				var e, t, i, o, c, l = this.config.opacity,
					d = this.imageElements[this.index];
				if (e = d, t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, i = e.offsetTop, o = e.offsetHeight, c = document.documentElement.scrollTop, o + i > c && i - c <= t + 100) {
					n(r, {
						start: l,
						end: 0,
						step: -.02,
						style: "background",
						template: "rgba(0, 0, 0, $)"
					}, function () {
						u.style = "", u.src = "", r.style.background = "", r.classList.remove("hiding"), s(!1)
					});
					var m = function (e) {
						return e.getBoundingClientRect()
					}(d),
						h = m.top,
						f = m.left,
						g = m.width,
						p = m.height;
					u.style.cssText = "width: 220px;height: unset;position:fixed; top:".concat(h, "px; left: ").concat(f, "px;")
				} else u.style.display = "none", n(r, {
					start: l,
					end: 0,
					step: -.05,
					style: "background",
					template: "rgba(0, 0, 0, $)"
				}, function () {
					u.src = "", u.style = "", r.style = "", r.classList.remove("hiding"), s(!1)
				});
				r.classList.remove("show"), r.classList.add("hiding"), !this.config.scrollbar && a(!0)
			}
		}, {
			key: "handelRotateLeft",
			value: function () {
				m.rotate -= 90, u.style.setProperty("--rotate", "".concat(m.rotate, "deg"))
			}
		}, {
			key: "handelRotateRight",
			value: function () {
				m.rotate += 90, u.style.setProperty("--rotate", "".concat(m.rotate, "deg"))
			}
		}, {
			key: "prev",
			value: function () {
				0 !== this.index && (this.index -= 1, this.updateIndex(this.index), this.useIndexUpdateImage(this.index))
			}
		}, {
			key: "next",
			value: function () {
				this.index < this.imageElements.length - 1 && (this.index += 1, this.updateIndex(this.index), this.useIndexUpdateImage(this.index))
			}
		}, {
			key: "useIndexUpdateImage",
			value: function (e) {
				var t = this.config.ratio,
					n = this.imageElements[e],
					s = n.height,
					a = n.width,
					c = n.src;
				u.classList.add("moving"), o(u, a, s, d / 2 - a / 2, l / 2 - s / 2), m = {
					endX: 0,
					endY: 0,
					scale: i(a, s, t),
					rotate: 0
				}, u.src = c, g.setImageAnimationParams(m), setTimeout(function () {
					u.classList.remove("moving")
				})
			}
		}, {
			key: "updateIndex",
			value: function (e) {
				this.index = e, document.getElementById("total-nums").innerText = this.imageElements.length, document.getElementById("current-index").innerText = e + 1
			}
		}, {
			key: "render",
			value: function () {
				var e = document.getElementById("image-preview-container");
				e ? r = e : ((r = document.createElement("div")).classList.add("image-preview-container"), r.id = "image-preview-container",
					r.innerHTML = `
<div class="preview-header">
    <div class="nums">
        <button id="prev" data-tooltip="Preview"><i class="iconfont icon-shangyige"></i></button>
        <p>
            <span id="current-index"></span>
            &nbsp;/&nbsp;
            <span id="total-nums"></span>
        </p>
        <button id="next" data-tooltip="Next"><i class="iconfont icon-xiayige"></i></button>
    </div>
    <div class="tool-btn">
        <button id="rotate-left" data-tooltip="Rotate Left"><i class="iconfont icon-xuanzhuan"></i></button>
        <button id="rotate-right" data-tooltip="Rotate Right"><i class="iconfont icon-xuanzhuan1"></i></button>
        <button id="reset" data-tooltip="Reset"><i class="iconfont icon-zhongzhi"></i></button>
        <button id="close" data-tooltip="Close"><i class="iconfont icon-account-practice-lesson-close"></i></button>
    </div>
</div>
<div class="image-container">
    <div class="img-content" id="image-content"><img id="preview-image" src="" alt="" /></div>
</div>`,
				c.appendChild(r)), u = document.getElementById("preview-image")
			}
		}, {
			key: "init",
			value: function () {
				c = document && document.body || document.getElementsByTagName("body")[0], d = window.innerWidth, l = window.innerHeight, this.imageElements = document.querySelectorAll("".concat(this.selector, " img"));
				for (var e = 0, t = this.imageElements.length; e < t; e++) this.imageElements[e].classList.add("zoom-in");
				this.render(), this.updateIndex(this.index), this.bindEvent(this.imageElements), this.options.onInited && this.options.onInited()
			}
		}]) && e(p.prototype, v), y && e(p, y), g
	}()
});