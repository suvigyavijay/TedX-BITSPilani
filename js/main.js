!function(a) {
    a.fn.countDown = function(t) {
        return config = {},
        a.extend(config, t),
        diffSecs = this.setCountDown(config),
        config.onComplete && a.data(a(this)[0], "callback", config.onComplete),
        config.omitWeeks && a.data(a(this)[0], "omitWeeks", config.omitWeeks),
        a("#" + a(this).attr("id") + " .digit").html('<div class="top"></div><div class="bottom"></div>'),
        a(this).doCountDown(a(this).attr("id"), diffSecs, 500),
        this
    }
    ,
    a.fn.stopCountDown = function() {
        clearTimeout(a.data(this[0], "timer"))
    }
    ,
    a.fn.startCountDown = function() {
        this.doCountDown(a(this).attr("id"), a.data(this[0], "diffSecs"), 500)
    }
    ,
    a.fn.setCountDown = function(t) {
        var e = new Date;
        t.targetDate ? e = new Date(t.targetDate.month + "/" + t.targetDate.day + "/" + t.targetDate.year + " " + t.targetDate.hour + ":" + t.targetDate.min + ":" + t.targetDate.sec + (t.targetDate.utc ? " UTC" : "")) : t.targetOffset && (e.setFullYear(t.targetOffset.year + e.getFullYear()),
            e.setMonth(t.targetOffset.month + e.getMonth()),
            e.setDate(t.targetOffset.day + e.getDate()),
            e.setHours(t.targetOffset.hour + e.getHours()),
            e.setMinutes(t.targetOffset.min + e.getMinutes()),
            e.setSeconds(t.targetOffset.sec + e.getSeconds()));
        var i = new Date;
        return diffSecs = Math.floor((e.valueOf() - i.valueOf()) / 1e3),
        a.data(this[0], "diffSecs", diffSecs),
        diffSecs
    }
    ,
    a.fn.doCountDown = function(i, o, s) {
        $this = a("#" + i),
        0 >= o && (o = 0,
            a.data($this[0], "timer") && clearTimeout(a.data($this[0], "timer"))),
        secs = o % 60,
        mins = Math.floor(o / 60) % 60,
        hours = Math.floor(o / 60 / 60) % 24,
        1 == a.data($this[0], "omitWeeks") ? (days = Math.floor(o / 60 / 60 / 24),
            weeks = Math.floor(o / 60 / 60 / 24 / 7)) : (days = Math.floor(o / 60 / 60 / 24) % 7,
            weeks = Math.floor(o / 60 / 60 / 24 / 7)),
            $this.dashChangeTo(i, "seconds", secs, s ? s : 800),
            $this.dashChangeTo(i, "minutes", mins, s ? s : 1200),
            $this.dashChangeTo(i, "hours", hours, s ? s : 1200),
            $this.dashChangeTo(i, "days", days, s ? s : 1200),
            $this.dashChangeTo(i, "weeks", weeks, s ? s : 1200),
            a.data($this[0], "diffSecs", o),
            o > 0 ? (e = $this,
                t = setTimeout(function() {
                    e.doCountDown(i, o - 1)
                }, 1e3),
                a.data(e[0], "timer", t)) : (cb = a.data($this[0], "callback")) && a.data($this[0], "callback")()
        }
        ,
        a.fn.dashChangeTo = function(t, e, i, o) {
            $this = a("#" + t);
            for (var s = $this.find("." + e + " .digit").length - 1; s >= 0; s--) {
                var n = i % 10;
                i = (i - n) / 10,
                $this.digitChangeTo("#" + $this.attr("id") + " ." + e + " .digit:eq(" + s + ")", n, o)
            }
        }
        ,
        a.fn.digitChangeTo = function(t, e, i) {
            i || (i = 800),
            a(t + " div.top").html() != e + "" && (a(t + " div.top").css({
                display: "none"
            }),
            a(t + " div.top").html(e ? e : "0").slideDown(i),
            a(t + " div.bottom").animate({
                height: ""
            }, i, function() {
                a(t + " div.bottom").html(a(t + " div.top").html()),
                a(t + " div.bottom").css({
                    display: "block",
                    height: ""
                }),
                a(t + " div.top").hide().slideUp(10)
            }))
        }
    }(jQuery);
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(n, e, t, u, a) {
            return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
        },
        easeInQuad: function(n, e, t, u, a) {
            return u * (e /= a) * e + t
        },
        easeOutQuad: function(n, e, t, u, a) {
            return -u * (e /= a) * (e - 2) + t
        },
        easeInOutQuad: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(n, e, t, u, a) {
            return u * (e /= a) * e * e + t
        },
        easeOutCubic: function(n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(n, e, t, u, a) {
            return u * (e /= a) * e * e * e + t
        },
        easeOutQuart: function(n, e, t, u, a) {
            return -u * ((e = e / a - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(n, e, t, u, a) {
            return u * (e /= a) * e * e * e * e + t
        },
        easeOutQuint: function(n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(n, e, t, u, a) {
            return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
        },
        easeOutSine: function(n, e, t, u, a) {
            return u * Math.sin(e / a * (Math.PI / 2)) + t
        },
        easeInOutSine: function(n, e, t, u, a) {
            return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
        },
        easeInExpo: function(n, e, t, u, a) {
            return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
        },
        easeOutExpo: function(n, e, t, u, a) {
            return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
        },
        easeInOutExpo: function(n, e, t, u, a) {
            return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function(n, e, t, u, a) {
            return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
        },
        easeOutCirc: function(n, e, t, u, a) {
            return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
        },
        easeInOutCirc: function(n, e, t, u, a) {
            return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function(n, e, t, u, a) {
            var r = 1.70158
            , i = 0
            , s = u;
            if (0 == e)
                return t;
            if (1 == (e /= a))
                return t + u;
            if (i || (i = .3 * a),
                s < Math.abs(u)) {
                s = u;
            var r = i / 4
        } else
        var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158
        , i = 0
        , s = u;
        if (0 == e)
            return t;
        if (1 == (e /= a))
            return t + u;
        if (i || (i = .3 * a),
            s < Math.abs(u)) {
            s = u;
        var r = i / 4
    } else
    var r = i / (2 * Math.PI) * Math.asin(u / s);
    return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
},
easeInOutElastic: function(n, e, t, u, a) {
    var r = 1.70158
    , i = 0
    , s = u;
    if (0 == e)
        return t;
    if (2 == (e /= a / 2))
        return t + u;
    if (i || (i = .3 * a * 1.5),
        s < Math.abs(u)) {
        s = u;
    var r = i / 4
} else
var r = i / (2 * Math.PI) * Math.asin(u / s);
return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
},
easeInBack: function(n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158),
    u * (e /= a) * e * ((r + 1) * e - r) + t
},
easeOutBack: function(n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158),
    u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
},
easeInOutBack: function(n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158),
    (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
},
easeInBounce: function(n, e, t, u, a) {
    return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
},
easeOutBounce: function(n, e, t, u, a) {
    return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
},
easeInOutBounce: function(n, e, t, u, a) {
    return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
}
});
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
            return -1
        }
        ;
        b = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                var c, d;
                for (c in b)
                    d = b[c],
                null == a[c] && (a[c] = d);
                return a
            }
            ,
            a.prototype.isMobile = function(a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }
            ,
            a.prototype.addEvent = function(a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
            }
            ,
            a.prototype.removeEvent = function(a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
            }
            ,
            a.prototype.innerHeight = function() {
                return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
            }
            ,
            a
        }(),
        c = this.WeakMap || this.MozWeakMap || (c = function() {
            function a() {
                this.keys = [],
                this.values = []
            }
            return a.prototype.get = function(a) {
                var b, c, d, e, f;
                for (f = this.keys,
                    b = d = 0,
                    e = f.length; e > d; b = ++d)
                    if (c = f[b],
                        c === a)
                        return this.values[b]
                }
                ,
                a.prototype.set = function(a, b) {
                    var c, d, e, f, g;
                    for (g = this.keys,
                        c = e = 0,
                        f = g.length; f > e; c = ++e)
                        if (d = g[c],
                            d === a)
                            return void (this.values[c] = b);
                        return this.keys.push(a),
                        this.values.push(b)
                    }
                    ,
                    a
                }()),
        a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0,
            a.prototype.observe = function() {}
            ,
            a
        }()),
        d = this.getComputedStyle || function(a) {
            return this.getPropertyValue = function(b) {
                var c;
                return "float" === b && (b = "styleFloat"),
                e.test(b) && b.replace(e, function(a, b) {
                    return b.toUpperCase()
                }),
                (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }
            ,
            this
        }
        ,
        e = /(\-([a-z]){1})/g,
        this.WOW = function() {
            function e(a) {
                null == a && (a = {}),
                this.scrollCallback = f(this.scrollCallback, this),
                this.scrollHandler = f(this.scrollHandler, this),
                this.start = f(this.start, this),
                this.scrolled = !0,
                this.config = this.util().extend(a, this.defaults),
                this.animationNameCache = new c
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            },
            e.prototype.init = function() {
                var a;
                return this.element = window.document.documentElement,
                "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
            ,
            e.prototype.start = function() {
                var b, c, d, e;
                if (this.stopped = !1,
                    this.boxes = function() {
                        var a, c, d, e;
                        for (d = this.element.querySelectorAll("." + this.config.boxClass),
                            e = [],
                            a = 0,
                            c = d.length; c > a; a++)
                            b = d[a],
                        e.push(b);
                        return e
                    }
                    .call(this),
                    this.all = function() {
                        var a, c, d, e;
                        for (d = this.boxes,
                            e = [],
                            a = 0,
                            c = d.length; c > a; a++)
                            b = d[a],
                        e.push(b);
                        return e
                    }
                    .call(this),
                    this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (e = this.boxes,
                            c = 0,
                            d = e.length; d > c; c++)
                            b = e[c],
                        this.applyStyle(b, !0);
                        return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
                            this.util().addEvent(window, "resize", this.scrollHandler),
                            this.interval = setInterval(this.scrollCallback, 50)),
                        this.config.live ? new a(function(a) {
                            return function(b) {
                                var c, d, e, f, g;
                                for (g = [],
                                    e = 0,
                                    f = b.length; f > e; e++)
                                    d = b[e],
                                g.push(function() {
                                    var a, b, e, f;
                                    for (e = d.addedNodes || [],
                                        f = [],
                                        a = 0,
                                        b = e.length; b > a; a++)
                                        c = e[a],
                                    f.push(this.doSync(c));
                                    return f
                                }
                                .call(a));
                                return g
                            }
                        }(this)).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }) : void 0
                    }
                    ,
                    e.prototype.stop = function() {
                        return this.stopped = !0,
                        this.util().removeEvent(window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0
                    }
                    ,
                    e.prototype.sync = function() {
                        return a.notSupported ? this.doSync(this.element) : void 0
                    }
                    ,
                    e.prototype.doSync = function(a) {
                        var b, c, d, e, f;
                        if (null == a && (a = this.element),
                            1 === a.nodeType) {
                            for (a = a.parentNode || a,
                                e = a.querySelectorAll("." + this.config.boxClass),
                                f = [],
                                c = 0,
                                d = e.length; d > c; c++)
                                b = e[c],
                            g.call(this.all, b) < 0 ? (this.boxes.push(b),
                                this.all.push(b),
                                this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                                f.push(this.scrolled = !0)) : f.push(void 0);
                            return f
                        }
                    }
                    ,
                    e.prototype.show = function(a) {
                        return this.applyStyle(a),
                        a.className = "" + a.className + " " + this.config.animateClass,
                        null != this.config.callback ? this.config.callback(a) : void 0
                    }
                    ,
                    e.prototype.applyStyle = function(a, b) {
                        var c, d, e;
                        return d = a.getAttribute("data-wow-duration"),
                        c = a.getAttribute("data-wow-delay"),
                        e = a.getAttribute("data-wow-iteration"),
                        this.animate(function(f) {
                            return function() {
                                return f.customStyle(a, b, d, c, e)
                            }
                        }(this))
                    }
                    ,
                    e.prototype.animate = function() {
                        return "requestAnimationFrame"in window ? function(a) {
                            return window.requestAnimationFrame(a)
                        }
                        : function(a) {
                            return a()
                        }
                    }(),
                    e.prototype.resetStyle = function() {
                        var a, b, c, d, e;
                        for (d = this.boxes,
                            e = [],
                            b = 0,
                            c = d.length; c > b; b++)
                            a = d[b],
                        e.push(a.style.visibility = "visible");
                        return e
                    }
                    ,
                    e.prototype.customStyle = function(a, b, c, d, e) {
                        return b && this.cacheAnimationName(a),
                        a.style.visibility = b ? "hidden" : "visible",
                        c && this.vendorSet(a.style, {
                            animationDuration: c
                        }),
                        d && this.vendorSet(a.style, {
                            animationDelay: d
                        }),
                        e && this.vendorSet(a.style, {
                            animationIterationCount: e
                        }),
                        this.vendorSet(a.style, {
                            animationName: b ? "none" : this.cachedAnimationName(a)
                        }),
                        a
                    }
                    ,
                    e.prototype.vendors = ["moz", "webkit"],
                    e.prototype.vendorSet = function(a, b) {
                        var c, d, e, f;
                        f = [];
                        for (c in b)
                            d = b[c],
                        a["" + c] = d,
                        f.push(function() {
                            var b, f, g, h;
                            for (g = this.vendors,
                                h = [],
                                b = 0,
                                f = g.length; f > b; b++)
                                e = g[b],
                            h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                            return h
                        }
                        .call(this));
                        return f
                    }
                    ,
                    e.prototype.vendorCSS = function(a, b) {
                        var c, e, f, g, h, i;
                        for (e = d(a),
                            c = e.getPropertyCSSValue(b),
                            i = this.vendors,
                            g = 0,
                            h = i.length; h > g; g++)
                            f = i[g],
                        c = c || e.getPropertyCSSValue("-" + f + "-" + b);
                        return c
                    }
                    ,
                    e.prototype.animationName = function(a) {
                        var b;
                        try {
                            b = this.vendorCSS(a, "animation-name").cssText
                        } catch (c) {
                            b = d(a).getPropertyValue("animation-name")
                        }
                        return "none" === b ? "" : b
                    }
                    ,
                    e.prototype.cacheAnimationName = function(a) {
                        return this.animationNameCache.set(a, this.animationName(a))
                    }
                    ,
                    e.prototype.cachedAnimationName = function(a) {
                        return this.animationNameCache.get(a)
                    }
                    ,
                    e.prototype.scrollHandler = function() {
                        return this.scrolled = !0
                    }
                    ,
                    e.prototype.scrollCallback = function() {
                        var a;
                        return !this.scrolled || (this.scrolled = !1,
                            this.boxes = function() {
                                var b, c, d, e;
                                for (d = this.boxes,
                                    e = [],
                                    b = 0,
                                    c = d.length; c > b; b++)
                                    a = d[b],
                                a && (this.isVisible(a) ? this.show(a) : e.push(a));
                                return e
                            }
                            .call(this),
                            this.boxes.length || this.config.live) ? void 0 : this.stop()
                    }
                    ,
                    e.prototype.offsetTop = function(a) {
                        for (var b; void 0 === a.offsetTop; )
                            a = a.parentNode;
                        for (b = a.offsetTop; a = a.offsetParent; )
                            b += a.offsetTop;
                        return b
                    }
                    ,
                    e.prototype.isVisible = function(a) {
                        var b, c, d, e, f;
                        return c = a.getAttribute("data-wow-offset") || this.config.offset,
                        f = window.pageYOffset,
                        e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
                        d = this.offsetTop(a),
                        b = d + a.clientHeight,
                        e >= d && b >= f
                    }
                    ,
                    e.prototype.util = function() {
                        return null != this._util ? this._util : this._util = new b
                    }
                    ,
                    e.prototype.disabled = function() {
                        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                    }
                    ,
                    e
                }()
            }
            ).call(this);
!function() {
    function e() {
        {
            var e = document.getElementById("map")
            , t = new google.maps.LatLng($(".event-map").data("latitude"),$(".event-map").data("longitude"))
            , i = {
                center: t,
                zoom: 16,
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 65
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "transit",
                    stylers: [{
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "administrative.province",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.locality",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative.neighborhood",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    }]
                }],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            , a = new google.maps.Map(e,i);
            new google.maps.Marker({
                position: t,
                map: a
            })
        }
    }
    $("#countdown").countDown({
        targetDate: {
            day: parseInt($("#countdown").data("day")),
            month: parseInt($("#countdown").data("month")),
            year: parseInt($("#countdown").data("year")),
            hour: 0,
            min: 0,
            sec: 0
        },
        omitWeeks: !0
    }),
    new WOW({
        mobile: !1
    }).init(),
    google.maps.event.addDomListener(window, "load", e),
    $("[data-scroll]").on("click", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top
        }, 2e3, "easeOutCubic"),
        e.preventDefault()
    }),
    $("#schedule-tabs a").click(function(e) {
        e.preventDefault(),
        $(this).tab("show")
    })
}();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB7UL5RtXguFvrmekjyRzGRj49RyR1t-1Q",
    authDomain: "tedxbitspilani-52a40.firebaseapp.com",
    databaseURL: "https://tedxbitspilani-52a40.firebaseio.com",
    storageBucket: "tedxbitspilani-52a40.appspot.com",
    messagingSenderId: "557868714729"
};
firebase.initializeApp(config);

function submitContact() {
    check = "process";
    var database = firebase.database().ref();
    var json = {
        'Name': $('#cname').val(),
        'Contact No': $('#cno').val(),
        'Email': $('#cemail').val(),
        'Message': $('#cmessage').val()
    }
    var timestamp = new Date().toString();
    database.child(timestamp).set(json);
    return "ok";
}

var check = "default";

$('#submitButton').click(function () {
    if ($('#cname').val()!="" && $('#cno').val()!="" && $('#cemail').val()!="" && $('#cmessage').val()!="") {
        check = submitContact();
        if (check == "ok")
            $('.alert-success').fadeIn();
        else if (check == "process")
            $('.alert-warning').fadeIn();
    }
    else
        $('.alert-info').fadeIn();
    $('#cname').val("");
    $('#cno').val("");
    $('#cemail').val("");
    $('#cmessage').val("");
});

window.onload = function() {
    htmlStr = '<div class="item active"> <img src="img/gallery/1.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/2.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/3.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/4.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/5.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/6.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/7.jpg" class="img-responsive"> </div> <div class="item"> <img src="img/gallery/8.jpg" class="img-responsive"> </div>';
    $('.carousel-inner').html(htmlStr);
}

//function ellipsizeTextBox(className) {
//    var el = document.getElementsByClassName(className);
//    console.log(el);
//    for (var i=0; i < el.length; i++) {
//    var wordArray = el[i].innerHTML.split(' ');
//    while (el[i].scrollHeight > el[i].offsetHeight) {
//        wordArray.pop();
//        el[i].innerHTML = wordArray.join(' ') + '...';
//     }  
//    }
//}
//
//ellipsizeTextBox('speaker-desc');

//$('.speaker-desc').click(
//    function () {
//    var elem = $(this);
//    elem.parent().parent().fadeTo(200, 0.01);
//
//    function f1(elem) {
//        elem.parent().parent().removeClass('col-sm-6 col-xs-12').addClass('col-sm-10 col-xs-12 col-sm-offset-1').fadeTo(400, 1);
//        elem.removeClass('speaker-desc').addClass('speaker-big');
//    }
//    setTimeout(function () {
//        f1(elem)
//    }, 300);
//    resetSpeakers('.speaker-big');
//    }
//);
//
//function resetSpeakers(selectedElement) {
//    var elem = $(selectedElement);
//    if (elem!=undefined) {
//        for (var i=0; i < elem.length; i++) {
//        elem.parent().parent().fadeTo(200, 0.01);
//        function f2() {
//            elem.addClass('speaker-desc').removeClass('speaker-big');
//             elem.parent().parent().removeClass('col-sm-10 col-xs-12 col-sm-offset-1').addClass('col-sm-6 col-xs-12').fadeTo(400, 1);
//        }
//        setTimeout(function () {
//            f2(elem)
//        }, 300);
//        }
//    }
//}
//
//$('.speaker-big').click(resetSpeakers('.speaker-big'));

var speakers = [
    {
        id:1,
        name:"Jagdish Chaturvedi",
        designation:"ENT Surgeon",
        image:"img/speakers/jc.jpg",
        description:"Dr Jagdish Chaturvedi is a 32 year old ear, nose and throat surgeon credited with several affordable medical inventions. In August, he made it to the annual list of the &lsquo;Innovators under 35&rsquo; list of the prestigious MIT Technology Review, a magazine published by the Massachusetts Institute of Technology, for the year 2016 in the humanitarian category. <br>He was inspired to create something entirely unconventional when he witnessed several cases in rural areas where the farmers with throat cancer were too late in consulting a doctor for the disease. He observed that this was mainly due to the primitive methods of &lsquo;self medication&rsquo; taken up by the villagers. Mr. Chaturvedi had a rough sailing in the beginning when he was in search of an engineer and a designer who could help him turn his dream into reality. What emerged was a result of his persistent hard work and determination-Ear Nose Throat Multiscope Recorder. Since then he has 18 medical device inventions in his account.",
        links: {
            website:"http://jagdishchaturvedi.com/",
            fb:"",
            twitter:"https://twitter.com/drjagdishchatur",
            linkedin:"https://in.linkedin.com/in/dr-jagdish-chaturvedi-832b0a3b"
        }
    },
    {
        id:2,
        name:"Mohammad Aamir Khan",
        designation:"Author",
        image:"img/speakers/mha.jpg",
        description:"14 years. Time is relative. For us 14 years may not be such a big deal when we live amidst all the luxuries but for a person whose life is filled with sufferings, sufferings which he isn&rsquo;t even entitled to, it is eternity. This is the story of Mohammad Amir Khan. On a February night in 1998, he left his house to run an errand. Little did he know what time had in store for him beyond this. He was abducted by a strange van moving in the lanes, and then tortured and made to sign on blank papers. This was the inception of turmoil his life was to going to be in.<br> He was charged for a total of 19 cases, for crimes including murder, terrorism and waging war against the nation. He was finally released in 2012 after witnessing horror for 14 years. He has written a book Framed as a Terrorist: My 14-year Struggle to Prove My Innocence where he shares his horrendous experience. After spending the best years of his youth in prison, he has been trying to live his remaining life to the fullest.",
        links: {
            website:"",
            fb:"https://www.facebook.com/mohammadaamir.khan.37",
            twitter:"",
            linkedin:""
        }
    },
    {
        id:3,
        name:"Amit Shah",
        designation:"President & Country Head, YES BANK",
        image:"img/speakers/as.jpg",
        description:"Amit Shah, is a famous design-thinker with extensive experience in transformational leadership In financial and consulting services. He is the President and Country Head for Corporate Strategy, Marketing Brand &amp; Communications of &lsquo;YES Bank&rsquo; and a founding member of the &lsquo;YES Institute&rsquo;. Recognized by LinkedIn as a key social media influencer with his profile featuring among the LinkedIn Power Profiles 2016, Amit Shah has been instrumental in creating the &lsquo;YES Bank&rsquo; brand for the past eight years. His tenure has been an effective one, during which the bank&rsquo;s profits grew tenfold and the bank emerged as one of the top 500 Banking Brands globally.<br> Amit completed his engineering from NIT-Surathkal and did his MBA from NITIE-Mumbai. His contributions to the public understanding of FINTECH and Digital Banking have been noteworthy.",
        links: {
            website:"",
            fb:"",
            twitter:"https://twitter.com/amitshah_k",
            linkedin:"https://in.linkedin.com/in/amitkshah"
        }
    },
	{
        id:4,
        name:"Puja Marwaha",
        designation:"CEO, Child Rights and You",
        image:"img/speakers/pm.jpg",
        description:"Puja Marwaha is currently the CEO of a non-profit organisation &quot;Child Rights and You&quot;, commonly abbreviated as CRY. This organisation, established in 1979, aims to restore children's rights. After passing out from Xaviers Institute of Social Service, she joined CRY to start its human resources function. She later moved out of the corporate sector and worked as the regional director of CRY for 8 years. Her passion for the work led her to becoming the CEO of CRY. She is a member of the NGO advisory group of the Indian National Human Rights Commission and an Aspire India Fellow. Puja is known to have the rare combination of maturity, a strong development perspective and solid business acumen that is required for an organisation like CRY. She also serves on the jury of the Ashoka fellowships. She is a respected columnist and writes inspiring articles for leading newspapers and blogs.",
        links: {
            website:"",
            fb:"https://www.facebook.com/CRYINDIA/",
            twitter:"https://twitter.com/PujaMarwaha",
            linkedin:"https://www.linkedin.com/in/puja-marwaha-19121a16"
        }
    },
    {
        id:5,
        name:"Siddhartha Joshi",
        designation:"The Wanderer",
        image:"img/speakers/sj.jpg",
        description:"He is currently based in Pune, Maharashtra and shuffles between work and travel. Siddhartha Joshi is one of the few Indian travellers who have emerged as a great success story. He has been inspiring others to witness the miracles of the world through his engaging anecdotes. He is known for his innovative ways of describing his expeditions which are so compelling, almost urging you to seize hold of your bag pack and start the journey of your life, well in this case only literally.<br> He has been featured on &lsquo;Thrillophilia&rsquo; in an article on India's best travel bloggers. His vision is &lsquo;A world without borders&rsquo; and he hopes to &ldquo;throw his passport in a bin and travel freely across the world&rdquo; someday. From the biggest cruise ship in the world to the Dead Sea in Jordan, he has seen it all. The accounts of his voyage are innumerable and very addictive. Calling himself a curator of stories, a title so apt, Siddhartha believes that travelling can break the barriers and make us more tolerant of our differences.",
        links: {
            website:"http://www.sid-thewanderer.com/",
            fb:"https://www.facebook.com/sid.the.wanderer",
            twitter:"https://twitter.com/sid_travel",
            linkedin:""
        }
    },
    {
        id:6,
        name:"Kala Ramnath",
        designation:"Classical Violinist",
        image:"img/speakers/kr.jpg",
        description:"Kala Ramnath is a renowned Indian classical violinist. A proud recipient of the Rashtriya Kumar Gandharva Sanman in 2008 and the Pandit Jasraj Gaurav Puraskar in 1999, her album &lsquo;Miles from India&rsquo;, was nominated in the Grammy awards. She is the first Indian violinist to be featured in the violin Bible, &lsquo;The Strad&rsquo;. She frequently features in Hollywood soundtracks, including the Oscar nominated 'Blood Diamond'.Born into a family of prodigious musical talent, Kala&rsquo;s genius with the violin manifested itself during her childhood. Out of her several recordings best selling albums, &lsquo;Samvad&rsquo; was &lsquo;Top of the World&rsquo; in the charts for the year 2004, &lsquo;Yashila&rsquo; for 2006 and &lsquo;Samaya&rsquo; for 2008. An established name in the world music scene, Kala today is keen to enrich the lives of under-privileged and sick children through music in the form of her foundation, &lsquo;Kalashree&rsquo;.",
        links: {
            website:"http://kalaramnath.com/",
            fb:"https://www.facebook.com/violinkala/",
            twitter:"https://twitter.com/kalaramnath",
            linkedin:""
        }
    },
    {
        id:7,
        name:"Priyadarshini Chatterjee",
        designation:"Femina Miss India 2016",
        image:"img/speakers/pc.jpg",
        description:"Priyadarshini Chatterjee, an Indian model and beauty pageant titleholder who was crowned Femina Miss India in April, 2016. She also represented India at the Miss World pageant held in December, 2016, being the first to represent India at the Femina Miss World from a northeast Indian state. Diagnosed with health issues constantly from the age of 9, she craved for a normal life all her teenage years, and has been a fighter throughout her childhood. She believes that everyone is born with a purpose and as we grow up, we find out what the purpose is and make a difference in this world.",
        links: {
            website:"",
            fb:"https://www.facebook.com/missworldindia2016/",
            twitter:"https://twitter.com/priyadarshini0?lang=en",
            linkedin:""
        }
    },
    {
        id:8,
        name:"Anahita Dhondy",
        designation:"Chef Manager, Soda Bottle Opener Wala",
        image:"img/speakers/ad.jpg",
        description:"Anahita Dhondy is India&rsquo;s youngest female chef, who is currently, a Chef Manager at the very famous &lsquo;Soda Bottle Opener Wala&rsquo;, in Delhi. Hailing from a Parsi family, cooking and eating were never a problem for her. Her palette was exposed to the most authentic kinds of cuisines cooked at home itself, by her mom who is a home-baker. Helping her mom in cooking developed her passion for cooking, which culminated in her success and survival in this hectic and male-dominated industry of crass language with colleagues and hard work. Anahita is a perfectionist in Parsi cuisine and works hard to ensure quality and authenticity in her food. She advises all budding chefs to be passionate about food and not to give up on this seldom travelled path.",
        links: {
            website:"",
            fb:"",
            twitter:"https://twitter.com/anahita_dhondy",
            linkedin:"https://in.linkedin.com/in/anahita-n-dhondy-61043831"
        }
    },
    {
        id:9,
        name:"Ishan Shukla",
        designation:"CG Artist & Filmmaker",
        image:"img/speakers/is.jpg",
        description:"Ishan Shukla, a BITSian dropout is the first Indian to have his short, animated film qualify for Oscars. His film Schirkoa is a 14-minutes film which stood among 70 strong contenders in the race for the top honor. The film tells a dark tale of a politician and choices he is forced to make in his political career. It is set in a dystopian city where everyone wears bags over their heads and takes viewers on a vivid and visually-rich experience.<br>Ishan made the film in duration of 4 years on his own personal computer. The film has till now been screened in 30 festivals and has won the top honors in 13 of them. The list does not end here. It is also the first Indian animated short film to win the &lsquo;Best of Show&rsquo; at SIGGRAPH Asia Macao. Apart from this, the film gained recognition as the Best Animated Short Film at the Sydney World Film Festival. Ishan plans to publish his film on Vimeo to make it public.",
        links: {
            website:"http://www.ishanshukla.com/",
            fb:"https://www.facebook.com/profile.php?id=100014612675864",
            twitter:"",
            linkedin:""
        }
    },
    {
        id:10,
        name:"Sibesh Kar",
        designation:"Founder & Team Leader, Hyperloop India",
        image:"img/speakers/sk.jpg",
        description:"Sibesh Kar, a third year undergraduate at BITS Pilani, at just the age of 20, is the founder and team leader of India's largest multi-disciplinary multi-campus student-driven team, Hyperloop India, spread across all three Indian BITS campuses as well as Indian School of Business and IIM-A, focusing on both the engineering and business aspects of leapfrogging India's ailing transport infrastructure. After his first year, Sibesh was selected on a global basis to do physics research under Dr. Stephen Wolfram, and after his second year to expand on his work on the physics of cellular automata at CSAIL, Massachusetts Institute of Technology. An expert generalist, Sibesh believes that his stints with physics have given him the first-principles thinking framework required to quickly adapt to the challenges of working on the Hyperloop, a fifth mode of transport first proposed by SpaceX/Tesla CEO Elon Musk, which requires a multi-disciplinary understanding of fields ranging from mechanical &amp; electrical engineering, to economics, government &amp; policy.",
        links: {
            website:"",
            fb:"https://www.facebook.com/sibeshk",
            twitter:"",
            linkedin:"https://in.linkedin.com/in/sibesh-kar-84717b9a"
        }
    },
    {
        id:11,
        name:"R Balasubramaniam",
        designation:"Development Activist, Social Innovator",
        image:"img/speakers/bs.jpg",
        description:"R Balasubramaniam is development scholar, author, public policy advocate, leadership trainer and activist. He studied medicine at Mysore Medical College, did management from BITS Pilani and masters in Public Administration from Harvard University. He is credited for his profound contribution in development of rural Saragur in Mysore. Apart from this, he was the Frank H T Rhodes Professor at Cornell University between 2012 to 2014 and continues to hold prominent positions in other universities.<br>Also, he is the founder of nation&rsquo;s leading non-profit organization, Swami Vivekananda Youth Movement (SVYM), a development organization which is based in Saragur. Under this project he worked on issues pertaining to health care, water, sanitation, HIV-AIDS for marginalized rural and tribal communities. He is the chairman of Grassroots Research and Advocacy Movement (GRAAM), a public policy research institute based in Mysore. He has also authored the book-I, the citizen which is a compilation of narratives and reflections of a development activist. This book was released in 2015 by Prime Minister&rsquo;s office.",
        links: {
            website:"",
            fb:"",
            twitter:"https://twitter.com/drrbalu",
            linkedin:"https://in.linkedin.com/in/r-balasubramaniam-balu-8b3b4b16"
        }
    }
//    {
//        id:1,
//        name:"",
//        designation:"img/speakers/.jpg",
//        image:"",
//        description:"",
//        links: {
//                website:"",
//                fb:"",
//                twitter:"",
//                linkedin:""
//            }
//    }
];

function generateSpeakers(speakers) {
    var html;
    for (var i=0; i<speakers.length; i++) {
        var speaker = speakers[i];
        if (i%2 == 0){
            html = '<div class="row">';
        }
        html += '<div class="speaker-details col-sm-6 col-xs-12"> <div class="col-sm-6 col-sm-offset-0 col-xs-8 col-xs-offset-2 wow fadeInUp"> <div class="speaker-social-links text-center">';
        if (speaker.links.website != "")
            html += '<a href='+speaker.links.website+' target="_blank"> <i class="fa fa-link wow bounceIn"></i> </a>';
        if (speaker.links.fb != "")
            html += '<a href='+speaker.links.fb+' target="_blank"> <i class="fa fa-facebook wow bounceIn"></i> </a>';
        if (speaker.links.twitter != "")
            html += '<a href='+speaker.links.twitter+' target="_blank"> <i class="fa fa-twitter wow bounceIn"></i> </a>';
        if (speaker.links.linkedin != "")
            html += '<a href='+speaker.links.linkedin+' target="_blank"> <i class="fa fa-linkedin wow bounceIn"></i> </a>'; 
        html += '</div><img src='+speaker.image+' alt='+speaker.name+' class="img-responsive"> </div> <div class="col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1 wow fadeInUp" data-wow-delay="0.2s" onclick="openModal(speakers['+i.toString()+'])"><h2>'+speaker.name+'</h2>';
        if (speaker.designation != "")
            html += '<h4>'+speaker.designation+'</h4>';
        html += '<p class="speaker-desc">'+speaker.description+'</p> </div> </div>';
        if (i%2!==0 || i==speakers.length-1){
            html += '</div>';
            $('.speakers-content').append(html);
            
        }
    }
};

generateSpeakers(speakers);

function openModal(speaker) {
    $('.modal-title').html(speaker.name);
    $('.modal-desg').html(speaker.designation);
    $('.modal-image').attr('src', speaker.image);
    $('.modal-desc').html(speaker.description);
    $('#speakerModal').modal('show');
}




