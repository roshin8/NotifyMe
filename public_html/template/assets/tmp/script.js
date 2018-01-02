!function(e, t, n) {
	function r(e, t) {
	    return typeof e === t
	}
	function o() {
	    var e, t, n, o, i, a, s;
	    for (var l in _)
		if (_.hasOwnProperty(l)) {
		    if (e = [],
		    t = _[l],
		    t.name && (e.push(t.name.toLowerCase()),
		    t.options && t.options.aliases && t.options.aliases.length))
			for (n = 0; n < t.options.aliases.length; n++)
			    e.push(t.options.aliases[n].toLowerCase());
		    for (o = r(t.fn, "function") ? t.fn() : t.fn,
		    i = 0; i < e.length; i++)
			a = e[i],
			s = a.split("."),
			1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]]instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
			Modernizr[s[0]][s[1]] = o),
			S.push((o ? "" : "no-") + s.join("-"))
		}
	}
	function i(e) {
	    var t = x.className
	      , n = Modernizr._config.classPrefix || "";
	    if (w && (t = t.baseVal),
	    Modernizr._config.enableJSClass) {
		var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
		t = t.replace(r, "$1" + n + "js$2")
	    }
	    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
	    w ? x.className.baseVal = t : x.className = t)
	}
	function a(e, t) {
	    if ("object" == typeof e)
		for (var n in e)
		    j(e, n) && a(n, e[n]);
	    else {
		e = e.toLowerCase();
		var r = e.split(".")
		  , o = Modernizr[r[0]];
		if (2 == r.length && (o = o[r[1]]),
		"undefined" != typeof o)
		    return Modernizr;
		t = "function" == typeof t ? t() : t,
		1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]]instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
		Modernizr[r[0]][r[1]] = t),
		i([(t && 0 != t ? "" : "no-") + r.join("-")]),
		Modernizr._trigger(e, t)
	    }
	    return Modernizr
	}
	function s() {
	    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
	}
	function l(e) {
	    return e.replace(/([A-Z])/g, function(e, t) {
		return "-" + t.toLowerCase()
	    }).replace(/^ms-/, "-ms-")
	}
	function u(e) {
	    return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
		return t + n.toUpperCase()
	    }).replace(/^-/, "")
	}
	function f() {
	    var e = t.body;
	    return e || (e = s(w ? "svg" : "body"),
	    e.fake = !0),
	    e
	}
	function c(e, n, r, o) {
	    var i, a, l, u, c = "modernizr", d = s("div"), p = f();
	    if (parseInt(r, 10))
		for (; r--; )
		    l = s("div"),
		    l.id = o ? o[r] : c + (r + 1),
		    d.appendChild(l);
	    return i = s("style"),
	    i.type = "text/css",
	    i.id = "s" + c,
	    (p.fake ? p : d).appendChild(i),
	    p.appendChild(d),
	    i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)),
	    d.id = c,
	    p.fake && (p.style.background = "",
	    p.style.overflow = "hidden",
	    u = x.style.overflow,
	    x.style.overflow = "hidden",
	    x.appendChild(p)),
	    a = n(d, e),
	    p.fake ? (p.parentNode.removeChild(p),
	    x.style.overflow = u,
	    x.offsetHeight) : d.parentNode.removeChild(d),
	    !!a
	}
	function d(e, t) {
	    return !!~("" + e).indexOf(t)
	}
	function p(e, t) {
	    return function() {
		return e.apply(t, arguments)
	    }
	}
	function m(e, t, n) {
	    var o;
	    for (var i in e)
		if (e[i]in t)
		    return n === !1 ? e[i] : (o = t[e[i]],
		    r(o, "function") ? p(o, n || t) : o);
	    return !1
	}
	function h(t, n, r) {
	    var o;
	    if ("getComputedStyle"in e) {
		o = getComputedStyle.call(e, t, n);
		var i = e.console;
		if (null !== o)
		    r && (o = o.getPropertyValue(r));
		else if (i) {
		    var a = i.error ? "error" : "log";
		    i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
		}
	    } else
		o = !n && t.currentStyle && t.currentStyle[r];
	    return o
	}
	function v(t, r) {
	    var o = t.length;
	    if ("CSS"in e && "supports"in e.CSS) {
		for (; o--; )
		    if (e.CSS.supports(l(t[o]), r))
			return !0;
		return !1
	    }
	    if ("CSSSupportsRule"in e) {
		for (var i = []; o--; )
		    i.push("(" + l(t[o]) + ":" + r + ")");
		return i = i.join(" or "),
		c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
		    return "absolute" == h(e, null, "position")
		})
	    }
	    return n
	}
	function g(e, t, o, i) {
	    function a() {
		f && (delete A.style,
		delete A.modElem)
	    }
	    if (i = r(i, "undefined") ? !1 : i,
	    !r(o, "undefined")) {
		var l = v(e, o);
		if (!r(l, "undefined"))
		    return l
	    }
	    for (var f, c, p, m, h, g = ["modernizr", "tspan", "samp"]; !A.style && g.length; )
		f = !0,
		A.modElem = s(g.shift()),
		A.style = A.modElem.style;
	    for (p = e.length,
	    c = 0; p > c; c++)
		if (m = e[c],
		h = A.style[m],
		d(m, "-") && (m = u(m)),
		A.style[m] !== n) {
		    if (i || r(o, "undefined"))
			return a(),
			"pfx" == t ? m : !0;
		    try {
			A.style[m] = o
		    } catch (y) {}
		    if (A.style[m] != h)
			return a(),
			"pfx" == t ? m : !0
		}
	    return a(),
	    !1
	}
	function y(e, t, n, o, i) {
	    var a = e.charAt(0).toUpperCase() + e.slice(1)
	      , s = (e + " " + z.join(a + " ") + a).split(" ");
	    return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) : (s = (e + " " + P.join(a + " ") + a).split(" "),
	    m(s, t, n))
	}
	function C(e, t, r) {
	    return y(e, n, n, t, r)
	}
	var S = []
	  , _ = []
	  , b = {
	    _version: "3.5.0",
	    _config: {
		classPrefix: "",
		enableClasses: !0,
		enableJSClass: !0,
		usePrefixes: !0
	    },
	    _q: [],
	    on: function(e, t) {
		var n = this;
		setTimeout(function() {
		    t(n[e])
		}, 0)
	    },
	    addTest: function(e, t, n) {
		_.push({
		    name: e,
		    fn: t,
		    options: n
		})
	    },
	    addAsyncTest: function(e) {
		_.push({
		    name: null,
		    fn: e
		})
	    }
	}
	  , Modernizr = function() {};
	Modernizr.prototype = b,
	Modernizr = new Modernizr;
	var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
	b._prefixes = E;
	var x = t.documentElement
	  , w = "svg" === x.nodeName.toLowerCase()
	  , N = "Moz O ms Webkit"
	  , P = b._config.usePrefixes ? N.toLowerCase().split(" ") : [];
	b._domPrefixes = P;
	var j;
	!function() {
	    var e = {}.hasOwnProperty;
	    j = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
		return t in e && r(e.constructor.prototype[t], "undefined")
	    }
	    : function(t, n) {
		return e.call(t, n)
	    }
	}(),
	b._l = {},
	b.on = function(e, t) {
	    this._l[e] || (this._l[e] = []),
	    this._l[e].push(t),
	    Modernizr.hasOwnProperty(e) && setTimeout(function() {
		Modernizr._trigger(e, Modernizr[e])
	    }, 0)
	}
	,
	b._trigger = function(e, t) {
	    if (this._l[e]) {
		var n = this._l[e];
		setTimeout(function() {
		    var e, r;
		    for (e = 0; e < n.length; e++)
			(r = n[e])(t)
		}, 0),
		delete this._l[e]
	    }
	}
	,
	Modernizr._q.push(function() {
	    b.addTest = a
	});
	w || !function(e, t) {
	    function n(e, t) {
		var n = e.createElement("p")
		  , r = e.getElementsByTagName("head")[0] || e.documentElement;
		return n.innerHTML = "x<style>" + t + "</style>",
		r.insertBefore(n.lastChild, r.firstChild)
	    }
	    function r() {
		var e = C.elements;
		return "string" == typeof e ? e.split(" ") : e
	    }
	    function o(e, t) {
		var n = C.elements;
		"string" != typeof n && (n = n.join(" ")),
		"string" != typeof e && (e = e.join(" ")),
		C.elements = n + " " + e,
		u(t)
	    }
	    function i(e) {
		var t = y[e[v]];
		return t || (t = {},
		g++,
		e[v] = g,
		y[g] = t),
		t
	    }
	    function a(e, n, r) {
		if (n || (n = t),
		c)
		    return n.createElement(e);
		r || (r = i(n));
		var o;
		return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
		!o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
	    }
	    function s(e, n) {
		if (e || (e = t),
		c)
		    return e.createDocumentFragment();
		n = n || i(e);
		for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++)
		    o.createElement(s[a]);
		return o
	    }
	    function l(e, t) {
		t.cache || (t.cache = {},
		t.createElem = e.createElement,
		t.createFrag = e.createDocumentFragment,
		t.frag = t.createFrag()),
		e.createElement = function(n) {
		    return C.shivMethods ? a(n, e, t) : t.createElem(n)
		}
		,
		e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
		    return t.createElem(e),
		    t.frag.createElement(e),
		    'c("' + e + '")'
		}) + ");return n}")(C, t.frag)
	    }
	    function u(e) {
		e || (e = t);
		var r = i(e);
		return !C.shivCSS || f || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
		c || l(e, r),
		e
	    }
	    var f, c, d = "3.7.3", p = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, v = "_html5shiv", g = 0, y = {};
	    !function() {
		try {
		    var e = t.createElement("a");
		    e.innerHTML = "<xyz></xyz>",
		    f = "hidden"in e,
		    c = 1 == e.childNodes.length || function() {
			t.createElement("a");
			var e = t.createDocumentFragment();
			return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
		    }()
		} catch (n) {
		    f = !0,
		    c = !0
		}
	    }();
	    var C = {
		elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
		version: d,
		shivCSS: p.shivCSS !== !1,
		supportsUnknownElements: c,
		shivMethods: p.shivMethods !== !1,
		type: "default",
		shivDocument: u,
		createElement: a,
		createDocumentFragment: s,
		addElements: o
	    };
	    e.html5 = C,
	    u(t),
	    "object" == typeof module && module.exports && (module.exports = C)
	}("undefined" != typeof e ? e : this, t);
	var z = b._config.usePrefixes ? N.split(" ") : [];
	b._cssomPrefixes = z;
	var T = function(t) {
	    var r, o = E.length, i = e.CSSRule;
	    if ("undefined" == typeof i)
		return n;
	    if (!t)
		return !1;
	    if (t = t.replace(/^@/, ""),
	    r = t.replace(/-/g, "_").toUpperCase() + "_RULE",
	    r in i)
		return "@" + t;
	    for (var a = 0; o > a; a++) {
		var s = E[a]
		  , l = s.toUpperCase() + "_" + r;
		if (l in i)
		    return "@-" + s.toLowerCase() + "-" + t
	    }
	    return !1
	};
	b.atRule = T;
	var k = function() {
	    function e(e, t) {
		var o;
		return e ? (t && "string" != typeof t || (t = s(t || "div")),
		e = "on" + e,
		o = e in t,
		!o && r && (t.setAttribute || (t = s("div")),
		t.setAttribute(e, ""),
		o = "function" == typeof t[e],
		t[e] !== n && (t[e] = n),
		t.removeAttribute(e)),
		o) : !1
	    }
	    var r = !("onblur"in t.documentElement);
	    return e
	}();
	b.hasEvent = k;
	var F = function(e, t) {
	    var n = !1
	      , r = s("div")
	      , o = r.style;
	    if (e in o) {
		var i = P.length;
		for (o[e] = t,
		n = o[e]; i-- && !n; )
		    o[e] = "-" + P[i] + "-" + t,
		    n = o[e]
	    }
	    return "" === n && (n = !1),
	    n
	};
	b.prefixedCSSValue = F;
	var M = function() {
	    var t = e.matchMedia || e.msMatchMedia;
	    return t ? function(e) {
		var n = t(e);
		return n && n.matches || !1
	    }
	    : function(t) {
		var n = !1;
		return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
		    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
		}),
		n
	    }
	}();
	b.mq = M;
	var L = (b.testStyles = c,
	{
	    elem: s("modernizr")
	});
	Modernizr._q.push(function() {
	    delete L.elem
	});
	var A = {
	    style: L.elem.style
	};
	Modernizr._q.unshift(function() {
	    delete A.style
	});
	b.testProp = function(e, t, r) {
	    return g([e], n, t, r)
	}
	;
	b.testAllProps = y;
	var q = b.prefixed = function(e, t, n) {
	    return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = u(e)),
	    t ? y(e, t, n) : y(e, "pfx"))
	}
	;
	b.prefixedCSS = function(e) {
	    var t = q(e);
	    return t && l(t)
	}
	;
	b.testAllProps = C,
	o(),
	i(S),
	delete b.addTest,
	delete b.addAsyncTest;
	for (var O = 0; O < Modernizr._q.length; O++)
	    Modernizr._q[O]();
	e.Modernizr = Modernizr
    }(window, document);
    var lang = {
	"appname": "walldevil",
	"done_button_label": "DONE",
	"confirm_button_label": "CONFIRM",
	"cancel_button_label": "CANCEL",
	"edit_button_label": "EDIT",
	"report_button_label": "REPORT",
	"trash_button_label": "DELETE",
	"close_button_label": "CLOSE",
	"login_button_label": "LOGIN",
	"signup_button_label": "SIGN UP FREE",
	"please_wait_label": "Please wait while...",
	"success_title": "SUCCESSFUL!",
	"error_title": "ERROR!",
	"info_title": "INFO",
	"warning_title": "WARNING!",
	"an_error_text": "Something went wrong. Refresh the page and try again.",
	"login_first_text": "You must login to do this.",
	"copied_label": "Copied!",
	"guest_label": "Guest",
	"adblock_warning": "Oh really! :( You are using AdBlock but WallDevil needs ads to survive. Please disable AdBlock for WallDevil, this will not bother you at all.",
	"edit_comment_placeholder": "Write a new comment...",
	"password_reset_success": "Your password has been successfully changed. You can login with your new password.",
	"blog_add_text_placeholder": "WRITE SOMETHING...",
	"blog_add_field_title_label": "TITLE (OPTIONAL)",
	"download_btn_label": "DOWNLOAD",
	"cropping_btn_process_label": "CROPPING...",
	"upload_title_placeholder": "Title (eg: Blue sky, Red apple)",
	"upload_continue_button_label": "CONTINUE UPLOADING",
	"upload_add_info_button_label": "COMPLETE",
	"upload_success_all_text": "Wallpapers was successfully uploaded! We will review and publish them.",
	"feedback_append_success_text": "Your feedback has been reached to us. We will review it immediately and get back to you.",
	"now": "Now",
	"just_now": "Just now",
	"minute": "1 minute",
	"minutes": "minutes",
	"hour": "hour",
	"hours": "hours",
	"day": "Yesterday",
	"days": "days",
	"month": "1 month",
	"months": "months",
	"year": "1 year",
	"years": "years",
	"ago": "ago",
	"dictDefaultMessage": "Drop them off here or click to select",
	"dictFallbackMessage": "The browser you are using is not supported.",
	"dictFallbackText": "Use the following upload method.",
	"dictFileTooBig": "This file is too large to upload. Please try to share something smaller than {{maxFilesize}} MB.",
	"dictInvalidFileType": "You can only send files in JPG format.",
	"dictResponseError": "Something went wrong. Refresh the page and try again.",
	"dictCancelUpload": "Cancel",
	"dictCanceledUpload": "Canceled.",
	"dictCancelUploadConfirmation": "If you have nothing else to share, confirm this.",
	"dictRemoveFile": "Discard",
	"dictMaxFilesExceeded": "You cannot share more wallpapers in an upload.",
    }
    !function(a, b) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
	    if (!a.document)
		throw new Error("jQuery requires a window with a document");
	    return b(a)
	}
	: b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
	"use strict";
	var c = []
	  , d = a.document
	  , e = Object.getPrototypeOf
	  , f = c.slice
	  , g = c.concat
	  , h = c.push
	  , i = c.indexOf
	  , j = {}
	  , k = j.toString
	  , l = j.hasOwnProperty
	  , m = l.toString
	  , n = m.call(Object)
	  , o = {};
	function p(a, b) {
	    b = b || d;
	    var c = b.createElement("script");
	    c.text = a,
	    b.head.appendChild(c).parentNode.removeChild(c)
	}
	var q = "3.1.1"
	  , r = function(a, b) {
	    return new r.fn.init(a,b)
	}
	  , s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	  , t = /^-ms-/
	  , u = /-([a-z])/g
	  , v = function(a, b) {
	    return b.toUpperCase()
	};
	r.fn = r.prototype = {
	    jquery: q,
	    constructor: r,
	    length: 0,
	    toArray: function() {
		return f.call(this)
	    },
	    get: function(a) {
		return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
	    },
	    pushStack: function(a) {
		var b = r.merge(this.constructor(), a);
		return b.prevObject = this,
		b
	    },
	    each: function(a) {
		return r.each(this, a)
	    },
	    map: function(a) {
		return this.pushStack(r.map(this, function(b, c) {
		    return a.call(b, c, b)
		}))
	    },
	    slice: function() {
		return this.pushStack(f.apply(this, arguments))
	    },
	    first: function() {
		return this.eq(0)
	    },
	    last: function() {
		return this.eq(-1)
	    },
	    eq: function(a) {
		var b = this.length
		  , c = +a + (a < 0 ? b : 0);
		return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
	    },
	    end: function() {
		return this.prevObject || this.constructor()
	    },
	    push: h,
	    sort: c.sort,
	    splice: c.splice
	},
	r.extend = r.fn.extend = function() {
	    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
	    for ("boolean" == typeof g && (j = g,
	    g = arguments[h] || {},
	    h++),
	    "object" == typeof g || r.isFunction(g) || (g = {}),
	    h === i && (g = this,
	    h--); h < i; h++)
		if (null != (a = arguments[h]))
		    for (b in a)
			c = g[b],
			d = a[b],
			g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1,
			f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {},
			g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	    return g
	}
	,
	r.extend({
	    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
	    isReady: !0,
	    error: function(a) {
		throw new Error(a)
	    },
	    noop: function() {},
	    isFunction: function(a) {
		return "function" === r.type(a)
	    },
	    isArray: Array.isArray,
	    isWindow: function(a) {
		return null != a && a === a.window
	    },
	    isNumeric: function(a) {
		var b = r.type(a);
		return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
	    },
	    isPlainObject: function(a) {
		var b, c;
		return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor,
		"function" == typeof c && m.call(c) === n))
	    },
	    isEmptyObject: function(a) {
		var b;
		for (b in a)
		    return !1;
		return !0
	    },
	    type: function(a) {
		return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
	    },
	    globalEval: function(a) {
		p(a)
	    },
	    camelCase: function(a) {
		return a.replace(t, "ms-").replace(u, v)
	    },
	    nodeName: function(a, b) {
		return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
	    },
	    each: function(a, b) {
		var c, d = 0;
		if (w(a)) {
		    for (c = a.length; d < c; d++)
			if (b.call(a[d], d, a[d]) === !1)
			    break
		} else
		    for (d in a)
			if (b.call(a[d], d, a[d]) === !1)
			    break;
		return a
	    },
	    trim: function(a) {
		return null == a ? "" : (a + "").replace(s, "")
	    },
	    makeArray: function(a, b) {
		var c = b || [];
		return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)),
		c
	    },
	    inArray: function(a, b, c) {
		return null == b ? -1 : i.call(b, a, c)
	    },
	    merge: function(a, b) {
		for (var c = +b.length, d = 0, e = a.length; d < c; d++)
		    a[e++] = b[d];
		return a.length = e,
		a
	    },
	    grep: function(a, b, c) {
		for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
		    d = !b(a[f], f),
		    d !== h && e.push(a[f]);
		return e
	    },
	    map: function(a, b, c) {
		var d, e, f = 0, h = [];
		if (w(a))
		    for (d = a.length; f < d; f++)
			e = b(a[f], f, c),
			null != e && h.push(e);
		else
		    for (f in a)
			e = b(a[f], f, c),
			null != e && h.push(e);
		return g.apply([], h)
	    },
	    guid: 1,
	    proxy: function(a, b) {
		var c, d, e;
		if ("string" == typeof b && (c = a[b],
		b = a,
		a = c),
		r.isFunction(a))
		    return d = f.call(arguments, 2),
		    e = function() {
			return a.apply(b || this, d.concat(f.call(arguments)))
		    }
		    ,
		    e.guid = a.guid = a.guid || r.guid++,
		    e
	    },
	    now: Date.now,
	    support: o
	}),
	"function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
	r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
	    j["[object " + b + "]"] = b.toLowerCase()
	});
	function w(a) {
	    var b = !!a && "length"in a && a.length
	      , c = r.type(a);
	    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
	}
	var x = function(a) {
	    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
		return a === b && (l = !0),
		0
	    }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
		for (var c = 0, d = a.length; c < d; c++)
		    if (a[c] === b)
			return c;
		return -1
	    }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+","g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$","g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]","g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
		ID: new RegExp("^#(" + L + ")"),
		CLASS: new RegExp("^\\.(" + L + ")"),
		TAG: new RegExp("^(" + L + "|[*])"),
		ATTR: new RegExp("^" + M),
		PSEUDO: new RegExp("^" + N),
		CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)","i"),
		bool: new RegExp("^(?:" + J + ")$","i"),
		needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)","i")
	    }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)","ig"), aa = function(a, b, c) {
		var d = "0x" + b - 65536;
		return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
	    }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) {
		return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
	    }, da = function() {
		m()
	    }, ea = ta(function(a) {
		return a.disabled === !0 && ("form"in a || "label"in a)
	    }, {
		dir: "parentNode",
		next: "legend"
	    });
	    try {
		G.apply(D = H.call(v.childNodes), v.childNodes),
		D[v.childNodes.length].nodeType
	    } catch (fa) {
		G = {
		    apply: D.length ? function(a, b) {
			F.apply(a, H.call(b))
		    }
		    : function(a, b) {
			var c = a.length
			  , d = 0;
			while (a[c++] = b[d++])
			    ;
			a.length = c - 1
		    }
		}
	    }
	    function ga(a, b, d, e) {
		var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
		if (d = d || [],
		"string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)
		    return d;
		if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
		b = b || n,
		p)) {
		    if (11 !== w && (l = Z.exec(a)))
			if (f = l[1]) {
			    if (9 === w) {
				if (!(j = b.getElementById(f)))
				    return d;
				if (j.id === f)
				    return d.push(j),
				    d
			    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
				return d.push(j),
				d
			} else {
			    if (l[2])
				return G.apply(d, b.getElementsByTagName(a)),
				d;
			    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)
				return G.apply(d, b.getElementsByClassName(f)),
				d
			}
		    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
			if (1 !== w)
			    s = b,
			    r = a;
			else if ("object" !== b.nodeName.toLowerCase()) {
			    (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u),
			    o = g(a),
			    h = o.length;
			    while (h--)
				o[h] = "#" + k + " " + sa(o[h]);
			    r = o.join(","),
			    s = $.test(a) && qa(b.parentNode) || b
			}
			if (r)
			    try {
				return G.apply(d, s.querySelectorAll(r)),
				d
			    } catch (x) {} finally {
				k === u && b.removeAttribute("id")
			    }
		    }
		}
		return i(a.replace(P, "$1"), b, d, e)
	    }
	    function ha() {
		var a = [];
		function b(c, e) {
		    return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
		    b[c + " "] = e
		}
		return b
	    }
	    function ia(a) {
		return a[u] = !0,
		a
	    }
	    function ja(a) {
		var b = n.createElement("fieldset");
		try {
		    return !!a(b)
		} catch (c) {
		    return !1
		} finally {
		    b.parentNode && b.parentNode.removeChild(b),
		    b = null
		}
	    }
	    function ka(a, b) {
		var c = a.split("|")
		  , e = c.length;
		while (e--)
		    d.attrHandle[c[e]] = b
	    }
	    function la(a, b) {
		var c = b && a
		  , d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
		if (d)
		    return d;
		if (c)
		    while (c = c.nextSibling)
			if (c === b)
			    return -1;
		return a ? 1 : -1
	    }
	    function ma(a) {
		return function(b) {
		    var c = b.nodeName.toLowerCase();
		    return "input" === c && b.type === a
		}
	    }
	    function na(a) {
		return function(b) {
		    var c = b.nodeName.toLowerCase();
		    return ("input" === c || "button" === c) && b.type === a
		}
	    }
	    function oa(a) {
		return function(b) {
		    return "form"in b ? b.parentNode && b.disabled === !1 ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label"in b && b.disabled === a
		}
	    }
	    function pa(a) {
		return ia(function(b) {
		    return b = +b,
		    ia(function(c, d) {
			var e, f = a([], c.length, b), g = f.length;
			while (g--)
			    c[e = f[g]] && (c[e] = !(d[e] = c[e]))
		    })
		})
	    }
	    function qa(a) {
		return a && "undefined" != typeof a.getElementsByTagName && a
	    }
	    c = ga.support = {},
	    f = ga.isXML = function(a) {
		var b = a && (a.ownerDocument || a).documentElement;
		return !!b && "HTML" !== b.nodeName
	    }
	    ,
	    m = ga.setDocument = function(a) {
		var b, e, g = a ? a.ownerDocument || a : v;
		return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
		o = n.documentElement,
		p = !f(n),
		v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
		c.attributes = ja(function(a) {
		    return a.className = "i",
		    !a.getAttribute("className")
		}),
		c.getElementsByTagName = ja(function(a) {
		    return a.appendChild(n.createComment("")),
		    !a.getElementsByTagName("*").length
		}),
		c.getElementsByClassName = Y.test(n.getElementsByClassName),
		c.getById = ja(function(a) {
		    return o.appendChild(a).id = u,
		    !n.getElementsByName || !n.getElementsByName(u).length
		}),
		c.getById ? (d.filter.ID = function(a) {
		    var b = a.replace(_, aa);
		    return function(a) {
			return a.getAttribute("id") === b
		    }
		}
		,
		d.find.ID = function(a, b) {
		    if ("undefined" != typeof b.getElementById && p) {
			var c = b.getElementById(a);
			return c ? [c] : []
		    }
		}
		) : (d.filter.ID = function(a) {
		    var b = a.replace(_, aa);
		    return function(a) {
			var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
			return c && c.value === b
		    }
		}
		,
		d.find.ID = function(a, b) {
		    if ("undefined" != typeof b.getElementById && p) {
			var c, d, e, f = b.getElementById(a);
			if (f) {
			    if (c = f.getAttributeNode("id"),
			    c && c.value === a)
				return [f];
			    e = b.getElementsByName(a),
			    d = 0;
			    while (f = e[d++])
				if (c = f.getAttributeNode("id"),
				c && c.value === a)
				    return [f]
			}
			return []
		    }
		}
		),
		d.find.TAG = c.getElementsByTagName ? function(a, b) {
		    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
		}
		: function(a, b) {
		    var c, d = [], e = 0, f = b.getElementsByTagName(a);
		    if ("*" === a) {
			while (c = f[e++])
			    1 === c.nodeType && d.push(c);
			return d
		    }
		    return f
		}
		,
		d.find.CLASS = c.getElementsByClassName && function(a, b) {
		    if ("undefined" != typeof b.getElementsByClassName && p)
			return b.getElementsByClassName(a)
		}
		,
		r = [],
		q = [],
		(c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
		    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
		    a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"),
		    a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"),
		    a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
		    a.querySelectorAll(":checked").length || q.push(":checked"),
		    a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
		}),
		ja(function(a) {
		    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
		    var b = n.createElement("input");
		    b.setAttribute("type", "hidden"),
		    a.appendChild(b).setAttribute("name", "D"),
		    a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="),
		    2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
		    o.appendChild(a).disabled = !0,
		    2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
		    a.querySelectorAll("*,:x"),
		    q.push(",.*:")
		})),
		(c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
		    c.disconnectedMatch = s.call(a, "*"),
		    s.call(a, "[s!='']:x"),
		    r.push("!=", N)
		}),
		q = q.length && new RegExp(q.join("|")),
		r = r.length && new RegExp(r.join("|")),
		b = Y.test(o.compareDocumentPosition),
		t = b || Y.test(o.contains) ? function(a, b) {
		    var c = 9 === a.nodeType ? a.documentElement : a
		      , d = b && b.parentNode;
		    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
		}
		: function(a, b) {
		    if (b)
			while (b = b.parentNode)
			    if (b === a)
				return !0;
		    return !1
		}
		,
		B = b ? function(a, b) {
		    if (a === b)
			return l = !0,
			0;
		    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
		    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
		    1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
		}
		: function(a, b) {
		    if (a === b)
			return l = !0,
			0;
		    var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
		    if (!e || !f)
			return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
		    if (e === f)
			return la(a, b);
		    c = a;
		    while (c = c.parentNode)
			g.unshift(c);
		    c = b;
		    while (c = c.parentNode)
			h.unshift(c);
		    while (g[d] === h[d])
			d++;
		    return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
		}
		,
		n) : n
	    }
	    ,
	    ga.matches = function(a, b) {
		return ga(a, null, null, b)
	    }
	    ,
	    ga.matchesSelector = function(a, b) {
		if ((a.ownerDocument || a) !== n && m(a),
		b = b.replace(S, "='$1']"),
		c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
		    try {
			var d = s.call(a, b);
			if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
			    return d
		    } catch (e) {}
		return ga(b, n, null, [a]).length > 0
	    }
	    ,
	    ga.contains = function(a, b) {
		return (a.ownerDocument || a) !== n && m(a),
		t(a, b)
	    }
	    ,
	    ga.attr = function(a, b) {
		(a.ownerDocument || a) !== n && m(a);
		var e = d.attrHandle[b.toLowerCase()]
		  , f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
		return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
	    }
	    ,
	    ga.escape = function(a) {
		return (a + "").replace(ba, ca)
	    }
	    ,
	    ga.error = function(a) {
		throw new Error("Syntax error, unrecognized expression: " + a)
	    }
	    ,
	    ga.uniqueSort = function(a) {
		var b, d = [], e = 0, f = 0;
		if (l = !c.detectDuplicates,
		k = !c.sortStable && a.slice(0),
		a.sort(B),
		l) {
		    while (b = a[f++])
			b === a[f] && (e = d.push(f));
		    while (e--)
			a.splice(d[e], 1)
		}
		return k = null,
		a
	    }
	    ,
	    e = ga.getText = function(a) {
		var b, c = "", d = 0, f = a.nodeType;
		if (f) {
		    if (1 === f || 9 === f || 11 === f) {
			if ("string" == typeof a.textContent)
			    return a.textContent;
			for (a = a.firstChild; a; a = a.nextSibling)
			    c += e(a)
		    } else if (3 === f || 4 === f)
			return a.nodeValue
		} else
		    while (b = a[d++])
			c += e(b);
		return c
	    }
	    ,
	    d = ga.selectors = {
		cacheLength: 50,
		createPseudo: ia,
		match: V,
		attrHandle: {},
		find: {},
		relative: {
		    ">": {
			dir: "parentNode",
			first: !0
		    },
		    " ": {
			dir: "parentNode"
		    },
		    "+": {
			dir: "previousSibling",
			first: !0
		    },
		    "~": {
			dir: "previousSibling"
		    }
		},
		preFilter: {
		    ATTR: function(a) {
			return a[1] = a[1].replace(_, aa),
			a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa),
			"~=" === a[2] && (a[3] = " " + a[3] + " "),
			a.slice(0, 4)
		    },
		    CHILD: function(a) {
			return a[1] = a[1].toLowerCase(),
			"nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
			a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
			a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
			a
		    },
		    PSEUDO: function(a) {
			var b, c = !a[6] && a[2];
			return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
			a[2] = c.slice(0, b)),
			a.slice(0, 3))
		    }
		},
		filter: {
		    TAG: function(a) {
			var b = a.replace(_, aa).toLowerCase();
			return "*" === a ? function() {
			    return !0
			}
			: function(a) {
			    return a.nodeName && a.nodeName.toLowerCase() === b
			}
		    },
		    CLASS: function(a) {
			var b = y[a + " "];
			return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
			    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
			})
		    },
		    ATTR: function(a, b, c) {
			return function(d) {
			    var e = ga.attr(d, a);
			    return null == e ? "!=" === b : !b || (e += "",
			    "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
			}
		    },
		    CHILD: function(a, b, c, d, e) {
			var f = "nth" !== a.slice(0, 3)
			  , g = "last" !== a.slice(-4)
			  , h = "of-type" === b;
			return 1 === d && 0 === e ? function(a) {
			    return !!a.parentNode
			}
			: function(b, c, i) {
			    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
			    if (q) {
				if (f) {
				    while (p) {
					m = b;
					while (m = m[p])
					    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
						return !1;
					o = p = "only" === a && !o && "nextSibling"
				    }
				    return !0
				}
				if (o = [g ? q.firstChild : q.lastChild],
				g && s) {
				    m = q,
				    l = m[u] || (m[u] = {}),
				    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
				    j = k[a] || [],
				    n = j[0] === w && j[1],
				    t = n && j[2],
				    m = n && q.childNodes[n];
				    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
					if (1 === m.nodeType && ++t && m === b) {
					    k[a] = [w, n, t];
					    break
					}
				} else if (s && (m = b,
				l = m[u] || (m[u] = {}),
				k = l[m.uniqueID] || (l[m.uniqueID] = {}),
				j = k[a] || [],
				n = j[0] === w && j[1],
				t = n),
				t === !1)
				    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
					if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
					k = l[m.uniqueID] || (l[m.uniqueID] = {}),
					k[a] = [w, t]),
					m === b))
					    break;
				return t -= e,
				t === d || t % d === 0 && t / d >= 0
			    }
			}
		    },
		    PSEUDO: function(a, b) {
			var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
			return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
			d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
			    var d, f = e(a, b), g = f.length;
			    while (g--)
				d = I(a, f[g]),
				a[d] = !(c[d] = f[g])
			}) : function(a) {
			    return e(a, 0, c)
			}
			) : e
		    }
		},
		pseudos: {
		    not: ia(function(a) {
			var b = []
			  , c = []
			  , d = h(a.replace(P, "$1"));
			return d[u] ? ia(function(a, b, c, e) {
			    var f, g = d(a, null, e, []), h = a.length;
			    while (h--)
				(f = g[h]) && (a[h] = !(b[h] = f))
			}) : function(a, e, f) {
			    return b[0] = a,
			    d(b, null, f, c),
			    b[0] = null,
			    !c.pop()
			}
		    }),
		    has: ia(function(a) {
			return function(b) {
			    return ga(a, b).length > 0
			}
		    }),
		    contains: ia(function(a) {
			return a = a.replace(_, aa),
			function(b) {
			    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
			}
		    }),
		    lang: ia(function(a) {
			return U.test(a || "") || ga.error("unsupported lang: " + a),
			a = a.replace(_, aa).toLowerCase(),
			function(b) {
			    var c;
			    do
				if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
				    return c = c.toLowerCase(),
				    c === a || 0 === c.indexOf(a + "-");
			    while ((b = b.parentNode) && 1 === b.nodeType);return !1
			}
		    }),
		    target: function(b) {
			var c = a.location && a.location.hash;
			return c && c.slice(1) === b.id
		    },
		    root: function(a) {
			return a === o
		    },
		    focus: function(a) {
			return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
		    },
		    enabled: oa(!1),
		    disabled: oa(!0),
		    checked: function(a) {
			var b = a.nodeName.toLowerCase();
			return "input" === b && !!a.checked || "option" === b && !!a.selected
		    },
		    selected: function(a) {
			return a.parentNode && a.parentNode.selectedIndex,
			a.selected === !0
		    },
		    empty: function(a) {
			for (a = a.firstChild; a; a = a.nextSibling)
			    if (a.nodeType < 6)
				return !1;
			return !0
		    },
		    parent: function(a) {
			return !d.pseudos.empty(a)
		    },
		    header: function(a) {
			return X.test(a.nodeName)
		    },
		    input: function(a) {
			return W.test(a.nodeName)
		    },
		    button: function(a) {
			var b = a.nodeName.toLowerCase();
			return "input" === b && "button" === a.type || "button" === b
		    },
		    text: function(a) {
			var b;
			return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
		    },
		    first: pa(function() {
			return [0]
		    }),
		    last: pa(function(a, b) {
			return [b - 1]
		    }),
		    eq: pa(function(a, b, c) {
			return [c < 0 ? c + b : c]
		    }),
		    even: pa(function(a, b) {
			for (var c = 0; c < b; c += 2)
			    a.push(c);
			return a
		    }),
		    odd: pa(function(a, b) {
			for (var c = 1; c < b; c += 2)
			    a.push(c);
			return a
		    }),
		    lt: pa(function(a, b, c) {
			for (var d = c < 0 ? c + b : c; --d >= 0; )
			    a.push(d);
			return a
		    }),
		    gt: pa(function(a, b, c) {
			for (var d = c < 0 ? c + b : c; ++d < b; )
			    a.push(d);
			return a
		    })
		}
	    },
	    d.pseudos.nth = d.pseudos.eq;
	    for (b in {
		radio: !0,
		checkbox: !0,
		file: !0,
		password: !0,
		image: !0
	    })
		d.pseudos[b] = ma(b);
	    for (b in {
		submit: !0,
		reset: !0
	    })
		d.pseudos[b] = na(b);
	    function ra() {}
	    ra.prototype = d.filters = d.pseudos,
	    d.setFilters = new ra,
	    g = ga.tokenize = function(a, b) {
		var c, e, f, g, h, i, j, k = z[a + " "];
		if (k)
		    return b ? 0 : k.slice(0);
		h = a,
		i = [],
		j = d.preFilter;
		while (h) {
		    c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h),
		    i.push(f = [])),
		    c = !1,
		    (e = R.exec(h)) && (c = e.shift(),
		    f.push({
			value: c,
			type: e[0].replace(P, " ")
		    }),
		    h = h.slice(c.length));
		    for (g in d.filter)
			!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
			f.push({
			    value: c,
			    type: g,
			    matches: e
			}),
			h = h.slice(c.length));
		    if (!c)
			break
		}
		return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
	    }
	    ;
	    function sa(a) {
		for (var b = 0, c = a.length, d = ""; b < c; b++)
		    d += a[b].value;
		return d
	    }
	    function ta(a, b, c) {
		var d = b.dir
		  , e = b.next
		  , f = e || d
		  , g = c && "parentNode" === f
		  , h = x++;
		return b.first ? function(b, c, e) {
		    while (b = b[d])
			if (1 === b.nodeType || g)
			    return a(b, c, e);
		    return !1
		}
		: function(b, c, i) {
		    var j, k, l, m = [w, h];
		    if (i) {
			while (b = b[d])
			    if ((1 === b.nodeType || g) && a(b, c, i))
				return !0
		    } else
			while (b = b[d])
			    if (1 === b.nodeType || g)
				if (l = b[u] || (b[u] = {}),
				k = l[b.uniqueID] || (l[b.uniqueID] = {}),
				e && e === b.nodeName.toLowerCase())
				    b = b[d] || b;
				else {
				    if ((j = k[f]) && j[0] === w && j[1] === h)
					return m[2] = j[2];
				    if (k[f] = m,
				    m[2] = a(b, c, i))
					return !0
				}
		    return !1
		}
	    }
	    function ua(a) {
		return a.length > 1 ? function(b, c, d) {
		    var e = a.length;
		    while (e--)
			if (!a[e](b, c, d))
			    return !1;
		    return !0
		}
		: a[0]
	    }
	    function va(a, b, c) {
		for (var d = 0, e = b.length; d < e; d++)
		    ga(a, b[d], c);
		return c
	    }
	    function wa(a, b, c, d, e) {
		for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
		    (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
		    j && b.push(h)));
		return g
	    }
	    function xa(a, b, c, d, e, f) {
		return d && !d[u] && (d = xa(d)),
		e && !e[u] && (e = xa(e, f)),
		ia(function(f, g, h, i) {
		    var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
		    if (c && c(q, r, h, i),
		    d) {
			j = wa(r, n),
			d(j, [], h, i),
			k = j.length;
			while (k--)
			    (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
		    }
		    if (f) {
			if (e || a) {
			    if (e) {
				j = [],
				k = r.length;
				while (k--)
				    (l = r[k]) && j.push(q[k] = l);
				e(null, r = [], j, i)
			    }
			    k = r.length;
			    while (k--)
				(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
			}
		    } else
			r = wa(r === g ? r.splice(o, r.length) : r),
			e ? e(null, g, r, i) : G.apply(g, r)
		})
	    }
	    function ya(a) {
		for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
		    return a === b
		}, h, !0), l = ta(function(a) {
		    return I(b, a) > -1
		}, h, !0), m = [function(a, c, d) {
		    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
		    return b = null,
		    e
		}
		]; i < f; i++)
		    if (c = d.relative[a[i].type])
			m = [ta(ua(m), c)];
		    else {
			if (c = d.filter[a[i].type].apply(null, a[i].matches),
			c[u]) {
			    for (e = ++i; e < f; e++)
				if (d.relative[a[e].type])
				    break;
			    return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
				value: " " === a[i - 2].type ? "*" : ""
			    })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
			}
			m.push(c)
		    }
		return ua(m)
	    }
	    function za(a, b) {
		var c = b.length > 0
		  , e = a.length > 0
		  , f = function(f, g, h, i, k) {
		    var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
		    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
			if (e && l) {
			    o = 0,
			    g || l.ownerDocument === n || (m(l),
			    h = !p);
			    while (q = a[o++])
				if (q(l, g || n, h)) {
				    i.push(l);
				    break
				}
			    k && (w = y)
			}
			c && ((l = !q && l) && r--,
			f && t.push(l))
		    }
		    if (r += s,
		    c && s !== r) {
			o = 0;
			while (q = b[o++])
			    q(t, u, g, h);
			if (f) {
			    if (r > 0)
				while (s--)
				    t[s] || u[s] || (u[s] = E.call(i));
			    u = wa(u)
			}
			G.apply(i, u),
			k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
		    }
		    return k && (w = y,
		    j = v),
		    t
		};
		return c ? ia(f) : f
	    }
	    return h = ga.compile = function(a, b) {
		var c, d = [], e = [], f = A[a + " "];
		if (!f) {
		    b || (b = g(a)),
		    c = b.length;
		    while (c--)
			f = ya(b[c]),
			f[u] ? d.push(f) : e.push(f);
		    f = A(a, za(e, d)),
		    f.selector = a
		}
		return f
	    }
	    ,
	    i = ga.select = function(a, b, c, e) {
		var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
		if (c = c || [],
		1 === n.length) {
		    if (i = n[0] = n[0].slice(0),
		    i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
			if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0],
			!b)
			    return c;
			m && (b = b.parentNode),
			a = a.slice(i.shift().value.length)
		    }
		    f = V.needsContext.test(a) ? 0 : i.length;
		    while (f--) {
			if (j = i[f],
			d.relative[k = j.type])
			    break;
			if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
			    if (i.splice(f, 1),
			    a = e.length && sa(i),
			    !a)
				return G.apply(c, e),
				c;
			    break
			}
		    }
		}
		return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b),
		c
	    }
	    ,
	    c.sortStable = u.split("").sort(B).join("") === u,
	    c.detectDuplicates = !!l,
	    m(),
	    c.sortDetached = ja(function(a) {
		return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
	    }),
	    ja(function(a) {
		return a.innerHTML = "<a href='#'></a>",
		"#" === a.firstChild.getAttribute("href")
	    }) || ka("type|href|height|width", function(a, b, c) {
		if (!c)
		    return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
	    }),
	    c.attributes && ja(function(a) {
		return a.innerHTML = "<input/>",
		a.firstChild.setAttribute("value", ""),
		"" === a.firstChild.getAttribute("value")
	    }) || ka("value", function(a, b, c) {
		if (!c && "input" === a.nodeName.toLowerCase())
		    return a.defaultValue
	    }),
	    ja(function(a) {
		return null == a.getAttribute("disabled")
	    }) || ka(J, function(a, b, c) {
		var d;
		if (!c)
		    return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
	    }),
	    ga
	}(a);
	r.find = x,
	r.expr = x.selectors,
	r.expr[":"] = r.expr.pseudos,
	r.uniqueSort = r.unique = x.uniqueSort,
	r.text = x.getText,
	r.isXMLDoc = x.isXML,
	r.contains = x.contains,
	r.escapeSelector = x.escape;
	var y = function(a, b, c) {
	    var d = []
	      , e = void 0 !== c;
	    while ((a = a[b]) && 9 !== a.nodeType)
		if (1 === a.nodeType) {
		    if (e && r(a).is(c))
			break;
		    d.push(a)
		}
	    return d
	}
	  , z = function(a, b) {
	    for (var c = []; a; a = a.nextSibling)
		1 === a.nodeType && a !== b && c.push(a);
	    return c
	}
	  , A = r.expr.match.needsContext
	  , B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
	  , C = /^.[^:#\[\.,]*$/;
	function D(a, b, c) {
	    return r.isFunction(b) ? r.grep(a, function(a, d) {
		return !!b.call(a, d, a) !== c
	    }) : b.nodeType ? r.grep(a, function(a) {
		return a === b !== c
	    }) : "string" != typeof b ? r.grep(a, function(a) {
		return i.call(b, a) > -1 !== c
	    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a),
	    r.grep(a, function(a) {
		return i.call(b, a) > -1 !== c && 1 === a.nodeType
	    }))
	}
	r.filter = function(a, b, c) {
	    var d = b[0];
	    return c && (a = ":not(" + a + ")"),
	    1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
		return 1 === a.nodeType
	    }))
	}
	,
	r.fn.extend({
	    find: function(a) {
		var b, c, d = this.length, e = this;
		if ("string" != typeof a)
		    return this.pushStack(r(a).filter(function() {
			for (b = 0; b < d; b++)
			    if (r.contains(e[b], this))
				return !0
		    }));
		for (c = this.pushStack([]),
		b = 0; b < d; b++)
		    r.find(a, e[b], c);
		return d > 1 ? r.uniqueSort(c) : c
	    },
	    filter: function(a) {
		return this.pushStack(D(this, a || [], !1))
	    },
	    not: function(a) {
		return this.pushStack(D(this, a || [], !0))
	    },
	    is: function(a) {
		return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
	    }
	});
	var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function(a, b, c) {
	    var e, f;
	    if (!a)
		return this;
	    if (c = c || E,
	    "string" == typeof a) {
		if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a),
		!e || !e[1] && b)
		    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
		if (e[1]) {
		    if (b = b instanceof r ? b[0] : b,
		    r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
		    B.test(e[1]) && r.isPlainObject(b))
			for (e in b)
			    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
		    return this
		}
		return f = d.getElementById(e[2]),
		f && (this[0] = f,
		this.length = 1),
		this
	    }
	    return a.nodeType ? (this[0] = a,
	    this.length = 1,
	    this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
	}
	;
	G.prototype = r.fn,
	E = r(d);
	var H = /^(?:parents|prev(?:Until|All))/
	  , I = {
	    children: !0,
	    contents: !0,
	    next: !0,
	    prev: !0
	};
	r.fn.extend({
	    has: function(a) {
		var b = r(a, this)
		  , c = b.length;
		return this.filter(function() {
		    for (var a = 0; a < c; a++)
			if (r.contains(this, b[a]))
			    return !0
		})
	    },
	    closest: function(a, b) {
		var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
		if (!A.test(a))
		    for (; d < e; d++)
			for (c = this[d]; c && c !== b; c = c.parentNode)
			    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
				f.push(c);
				break
			    }
		return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
	    },
	    index: function(a) {
		return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
	    },
	    add: function(a, b) {
		return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
	    },
	    addBack: function(a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	    }
	});
	function J(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType)
		;
	    return a
	}
	r.each({
	    parent: function(a) {
		var b = a.parentNode;
		return b && 11 !== b.nodeType ? b : null
	    },
	    parents: function(a) {
		return y(a, "parentNode")
	    },
	    parentsUntil: function(a, b, c) {
		return y(a, "parentNode", c)
	    },
	    next: function(a) {
		return J(a, "nextSibling")
	    },
	    prev: function(a) {
		return J(a, "previousSibling")
	    },
	    nextAll: function(a) {
		return y(a, "nextSibling")
	    },
	    prevAll: function(a) {
		return y(a, "previousSibling")
	    },
	    nextUntil: function(a, b, c) {
		return y(a, "nextSibling", c)
	    },
	    prevUntil: function(a, b, c) {
		return y(a, "previousSibling", c)
	    },
	    siblings: function(a) {
		return z((a.parentNode || {}).firstChild, a)
	    },
	    children: function(a) {
		return z(a.firstChild)
	    },
	    contents: function(a) {
		return a.contentDocument || r.merge([], a.childNodes)
	    }
	}, function(a, b) {
	    r.fn[a] = function(c, d) {
		var e = r.map(this, b, c);
		return "Until" !== a.slice(-5) && (d = c),
		d && "string" == typeof d && (e = r.filter(d, e)),
		this.length > 1 && (I[a] || r.uniqueSort(e),
		H.test(a) && e.reverse()),
		this.pushStack(e)
	    }
	});
	var K = /[^\x20\t\r\n\f]+/g;
	function L(a) {
	    var b = {};
	    return r.each(a.match(K) || [], function(a, c) {
		b[c] = !0
	    }),
	    b
	}
	r.Callbacks = function(a) {
	    a = "string" == typeof a ? L(a) : r.extend({}, a);
	    var b, c, d, e, f = [], g = [], h = -1, i = function() {
		for (e = a.once,
		d = b = !0; g.length; h = -1) {
		    c = g.shift();
		    while (++h < f.length)
			f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
			c = !1)
		}
		a.memory || (c = !1),
		b = !1,
		e && (f = c ? [] : "")
	    }, j = {
		add: function() {
		    return f && (c && !b && (h = f.length - 1,
		    g.push(c)),
		    function d(b) {
			r.each(b, function(b, c) {
			    r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
			})
		    }(arguments),
		    c && !b && i()),
		    this
		},
		remove: function() {
		    return r.each(arguments, function(a, b) {
			var c;
			while ((c = r.inArray(b, f, c)) > -1)
			    f.splice(c, 1),
			    c <= h && h--
		    }),
		    this
		},
		has: function(a) {
		    return a ? r.inArray(a, f) > -1 : f.length > 0
		},
		empty: function() {
		    return f && (f = []),
		    this
		},
		disable: function() {
		    return e = g = [],
		    f = c = "",
		    this
		},
		disabled: function() {
		    return !f
		},
		lock: function() {
		    return e = g = [],
		    c || b || (f = c = ""),
		    this
		},
		locked: function() {
		    return !!e
		},
		fireWith: function(a, c) {
		    return e || (c = c || [],
		    c = [a, c.slice ? c.slice() : c],
		    g.push(c),
		    b || i()),
		    this
		},
		fire: function() {
		    return j.fireWith(this, arguments),
		    this
		},
		fired: function() {
		    return !!d
		}
	    };
	    return j
	}
	;
	function M(a) {
	    return a
	}
	function N(a) {
	    throw a
	}
	function O(a, b, c) {
	    var d;
	    try {
		a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
	    } catch (a) {
		c.call(void 0, a)
	    }
	}
	r.extend({
	    Deferred: function(b) {
		var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]]
		  , d = "pending"
		  , e = {
		    state: function() {
			return d
		    },
		    always: function() {
			return f.done(arguments).fail(arguments),
			this
		    },
		    "catch": function(a) {
			return e.then(null, a)
		    },
		    pipe: function() {
			var a = arguments;
			return r.Deferred(function(b) {
			    r.each(c, function(c, d) {
				var e = r.isFunction(a[d[4]]) && a[d[4]];
				f[d[1]](function() {
				    var a = e && e.apply(this, arguments);
				    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
				})
			    }),
			    a = null
			}).promise()
		    },
		    then: function(b, d, e) {
			var f = 0;
			function g(b, c, d, e) {
			    return function() {
				var h = this
				  , i = arguments
				  , j = function() {
				    var a, j;
				    if (!(b < f)) {
					if (a = d.apply(h, i),
					a === c.promise())
					    throw new TypeError("Thenable self-resolution");
					j = a && ("object" == typeof a || "function" == typeof a) && a.then,
					r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++,
					j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0,
					i = [a]),
					(e || c.resolveWith)(h, i))
				    }
				}
				  , k = e ? j : function() {
				    try {
					j()
				    } catch (a) {
					r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace),
					b + 1 >= f && (d !== N && (h = void 0,
					i = [a]),
					c.rejectWith(h, i))
				    }
				}
				;
				b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()),
				a.setTimeout(k))
			    }
			}
			return r.Deferred(function(a) {
			    c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)),
			    c[1][3].add(g(0, a, r.isFunction(b) ? b : M)),
			    c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
			}).promise()
		    },
		    promise: function(a) {
			return null != a ? r.extend(a, e) : e
		    }
		}
		  , f = {};
		return r.each(c, function(a, b) {
		    var g = b[2]
		      , h = b[5];
		    e[b[1]] = g.add,
		    h && g.add(function() {
			d = h
		    }, c[3 - a][2].disable, c[0][2].lock),
		    g.add(b[3].fire),
		    f[b[0]] = function() {
			return f[b[0] + "With"](this === f ? void 0 : this, arguments),
			this
		    }
		    ,
		    f[b[0] + "With"] = g.fireWith
		}),
		e.promise(f),
		b && b.call(f, f),
		f
	    },
	    when: function(a) {
		var b = arguments.length
		  , c = b
		  , d = Array(c)
		  , e = f.call(arguments)
		  , g = r.Deferred()
		  , h = function(a) {
		    return function(c) {
			d[a] = this,
			e[a] = arguments.length > 1 ? f.call(arguments) : c,
			--b || g.resolveWith(d, e)
		    }
		};
		if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject),
		"pending" === g.state() || r.isFunction(e[c] && e[c].then)))
		    return g.then();
		while (c--)
		    O(e[c], h(c), g.reject);
		return g.promise()
	    }
	});
	var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	r.Deferred.exceptionHook = function(b, c) {
	    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
	}
	,
	r.readyException = function(b) {
	    a.setTimeout(function() {
		throw b
	    })
	}
	;
	var Q = r.Deferred();
	r.fn.ready = function(a) {
	    return Q.then(a)["catch"](function(a) {
		r.readyException(a)
	    }),
	    this
	}
	,
	r.extend({
	    isReady: !1,
	    readyWait: 1,
	    holdReady: function(a) {
		a ? r.readyWait++ : r.ready(!0)
	    },
	    ready: function(a) {
		(a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0,
		a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
	    }
	}),
	r.ready.then = Q.then;
	function R() {
	    d.removeEventListener("DOMContentLoaded", R),
	    a.removeEventListener("load", R),
	    r.ready()
	}
	"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R),
	a.addEventListener("load", R));
	var S = function(a, b, c, d, e, f, g) {
	    var h = 0
	      , i = a.length
	      , j = null == c;
	    if ("object" === r.type(c)) {
		e = !0;
		for (h in c)
		    S(a, b, h, c[h], !0, f, g)
	    } else if (void 0 !== d && (e = !0,
	    r.isFunction(d) || (g = !0),
	    j && (g ? (b.call(a, d),
	    b = null) : (j = b,
	    b = function(a, b, c) {
		return j.call(r(a), c)
	    }
	    )),
	    b))
		for (; h < i; h++)
		    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	}
	  , T = function(a) {
	    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	};
	function U() {
	    this.expando = r.expando + U.uid++
	}
	U.uid = 1,
	U.prototype = {
	    cache: function(a) {
		var b = a[this.expando];
		return b || (b = {},
		T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
		    value: b,
		    configurable: !0
		}))),
		b
	    },
	    set: function(a, b, c) {
		var d, e = this.cache(a);
		if ("string" == typeof b)
		    e[r.camelCase(b)] = c;
		else
		    for (d in b)
			e[r.camelCase(d)] = b[d];
		return e
	    },
	    get: function(a, b) {
		return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
	    },
	    access: function(a, b, c) {
		return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c),
		void 0 !== c ? c : b)
	    },
	    remove: function(a, b) {
		var c, d = a[this.expando];
		if (void 0 !== d) {
		    if (void 0 !== b) {
			r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b),
			b = b in d ? [b] : b.match(K) || []),
			c = b.length;
			while (c--)
			    delete d[b[c]]
		    }
		    (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
		}
	    },
	    hasData: function(a) {
		var b = a[this.expando];
		return void 0 !== b && !r.isEmptyObject(b)
	    }
	};
	var V = new U
	  , W = new U
	  , X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
	  , Y = /[A-Z]/g;
	function Z(a) {
	    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
	}
	function $(a, b, c) {
	    var d;
	    if (void 0 === c && 1 === a.nodeType)
		if (d = "data-" + b.replace(Y, "-$&").toLowerCase(),
		c = a.getAttribute(d),
		"string" == typeof c) {
		    try {
			c = Z(c)
		    } catch (e) {}
		    W.set(a, b, c)
		} else
		    c = void 0;
	    return c
	}
	r.extend({
	    hasData: function(a) {
		return W.hasData(a) || V.hasData(a)
	    },
	    data: function(a, b, c) {
		return W.access(a, b, c)
	    },
	    removeData: function(a, b) {
		W.remove(a, b)
	    },
	    _data: function(a, b, c) {
		return V.access(a, b, c)
	    },
	    _removeData: function(a, b) {
		V.remove(a, b)
	    }
	}),
	r.fn.extend({
	    data: function(a, b) {
		var c, d, e, f = this[0], g = f && f.attributes;
		if (void 0 === a) {
		    if (this.length && (e = W.get(f),
		    1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
			c = g.length;
			while (c--)
			    g[c] && (d = g[c].name,
			    0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)),
			    $(f, d, e[d])));
			V.set(f, "hasDataAttrs", !0)
		    }
		    return e
		}
		return "object" == typeof a ? this.each(function() {
		    W.set(this, a)
		}) : S(this, function(b) {
		    var c;
		    if (f && void 0 === b) {
			if (c = W.get(f, a),
			void 0 !== c)
			    return c;
			if (c = $(f, a),
			void 0 !== c)
			    return c
		    } else
			this.each(function() {
			    W.set(this, a, b)
			})
		}, null, b, arguments.length > 1, null, !0)
	    },
	    removeData: function(a) {
		return this.each(function() {
		    W.remove(this, a)
		})
	    }
	}),
	r.extend({
	    queue: function(a, b, c) {
		var d;
		if (a)
		    return b = (b || "fx") + "queue",
		    d = V.get(a, b),
		    c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)),
		    d || []
	    },
	    dequeue: function(a, b) {
		b = b || "fx";
		var c = r.queue(a, b)
		  , d = c.length
		  , e = c.shift()
		  , f = r._queueHooks(a, b)
		  , g = function() {
		    r.dequeue(a, b)
		};
		"inprogress" === e && (e = c.shift(),
		d--),
		e && ("fx" === b && c.unshift("inprogress"),
		delete f.stop,
		e.call(a, g, f)),
		!d && f && f.empty.fire()
	    },
	    _queueHooks: function(a, b) {
		var c = b + "queueHooks";
		return V.get(a, c) || V.access(a, c, {
		    empty: r.Callbacks("once memory").add(function() {
			V.remove(a, [b + "queue", c])
		    })
		})
	    }
	}),
	r.fn.extend({
	    queue: function(a, b) {
		var c = 2;
		return "string" != typeof a && (b = a,
		a = "fx",
		c--),
		arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
		    var c = r.queue(this, a, b);
		    r._queueHooks(this, a),
		    "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
		})
	    },
	    dequeue: function(a) {
		return this.each(function() {
		    r.dequeue(this, a)
		})
	    },
	    clearQueue: function(a) {
		return this.queue(a || "fx", [])
	    },
	    promise: function(a, b) {
		var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function() {
		    --d || e.resolveWith(f, [f])
		};
		"string" != typeof a && (b = a,
		a = void 0),
		a = a || "fx";
		while (g--)
		    c = V.get(f[g], a + "queueHooks"),
		    c && c.empty && (d++,
		    c.empty.add(h));
		return h(),
		e.promise(b)
	    }
	});
	var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
	  , aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$","i")
	  , ba = ["Top", "Right", "Bottom", "Left"]
	  , ca = function(a, b) {
	    return a = b || a,
	    "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
	}
	  , da = function(a, b, c, d) {
	    var e, f, g = {};
	    for (f in b)
		g[f] = a.style[f],
		a.style[f] = b[f];
	    e = c.apply(a, d || []);
	    for (f in b)
		a.style[f] = g[f];
	    return e
	};
	function ea(a, b, c, d) {
	    var e, f = 1, g = 20, h = d ? function() {
		return d.cur()
	    }
	    : function() {
		return r.css(a, b, "")
	    }
	    , i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
	    if (k && k[3] !== j) {
		j = j || k[3],
		c = c || [],
		k = +i || 1;
		do
		    f = f || ".5",
		    k /= f,
		    r.style(a, b, k + j);
		while (f !== (f = h() / i) && 1 !== f && --g)
	    }
	    return c && (k = +k || +i || 0,
	    e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
	    d && (d.unit = j,
	    d.start = k,
	    d.end = e)),
	    e
	}
	var fa = {};
	function ga(a) {
	    var b, c = a.ownerDocument, d = a.nodeName, e = fa[d];
	    return e ? e : (b = c.body.appendChild(c.createElement(d)),
	    e = r.css(b, "display"),
	    b.parentNode.removeChild(b),
	    "none" === e && (e = "block"),
	    fa[d] = e,
	    e)
	}
	function ha(a, b) {
	    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
		d = a[f],
		d.style && (c = d.style.display,
		b ? ("none" === c && (e[f] = V.get(d, "display") || null,
		e[f] || (d.style.display = "")),
		"" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none",
		V.set(d, "display", c)));
	    for (f = 0; f < g; f++)
		null != e[f] && (a[f].style.display = e[f]);
	    return a
	}
	r.fn.extend({
	    show: function() {
		return ha(this, !0)
	    },
	    hide: function() {
		return ha(this)
	    },
	    toggle: function(a) {
		return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
		    ca(this) ? r(this).show() : r(this).hide()
		})
	    }
	});
	var ia = /^(?:checkbox|radio)$/i
	  , ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
	  , ka = /^$|\/(?:java|ecma)script/i
	  , la = {
	    option: [1, "<select multiple='multiple'>", "</select>"],
	    thead: [1, "<table>", "</table>"],
	    col: [2, "<table><colgroup>", "</colgroup></table>"],
	    tr: [2, "<table><tbody>", "</tbody></table>"],
	    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	    _default: [0, "", ""]
	};
	la.optgroup = la.option,
	la.tbody = la.tfoot = la.colgroup = la.caption = la.thead,
	la.th = la.td;
	function ma(a, b) {
	    var c;
	    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [],
	    void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
	}
	function na(a, b) {
	    for (var c = 0, d = a.length; c < d; c++)
		V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
	}
	var oa = /<|&#?\w+;/;
	function pa(a, b, c, d, e) {
	    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
		if (f = a[n],
		f || 0 === f)
		    if ("object" === r.type(f))
			r.merge(m, f.nodeType ? [f] : f);
		    else if (oa.test(f)) {
			g = g || l.appendChild(b.createElement("div")),
			h = (ja.exec(f) || ["", ""])[1].toLowerCase(),
			i = la[h] || la._default,
			g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2],
			k = i[0];
			while (k--)
			    g = g.lastChild;
			r.merge(m, g.childNodes),
			g = l.firstChild,
			g.textContent = ""
		    } else
			m.push(b.createTextNode(f));
	    l.textContent = "",
	    n = 0;
	    while (f = m[n++])
		if (d && r.inArray(f, d) > -1)
		    e && e.push(f);
		else if (j = r.contains(f.ownerDocument, f),
		g = ma(l.appendChild(f), "script"),
		j && na(g),
		c) {
		    k = 0;
		    while (f = g[k++])
			ka.test(f.type || "") && c.push(f)
		}
	    return l
	}
	!function() {
	    var a = d.createDocumentFragment()
	      , b = a.appendChild(d.createElement("div"))
	      , c = d.createElement("input");
	    c.setAttribute("type", "radio"),
	    c.setAttribute("checked", "checked"),
	    c.setAttribute("name", "t"),
	    b.appendChild(c),
	    o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
	    b.innerHTML = "<textarea>x</textarea>",
	    o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var qa = d.documentElement
	  , ra = /^key/
	  , sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
	  , ta = /^([^.]*)(?:\.(.+)|)/;
	function ua() {
	    return !0
	}
	function va() {
	    return !1
	}
	function wa() {
	    try {
		return d.activeElement
	    } catch (a) {}
	}
	function xa(a, b, c, d, e, f) {
	    var g, h;
	    if ("object" == typeof b) {
		"string" != typeof c && (d = d || c,
		c = void 0);
		for (h in b)
		    xa(a, h, c, d, b[h], f);
		return a
	    }
	    if (null == d && null == e ? (e = c,
	    d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
	    d = void 0) : (e = d,
	    d = c,
	    c = void 0)),
	    e === !1)
		e = va;
	    else if (!e)
		return a;
	    return 1 === f && (g = e,
	    e = function(a) {
		return r().off(a),
		g.apply(this, arguments)
	    }
	    ,
	    e.guid = g.guid || (g.guid = r.guid++)),
	    a.each(function() {
		r.event.add(this, b, e, d, c)
	    })
	}
	r.event = {
	    global: {},
	    add: function(a, b, c, d, e) {
		var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
		if (q) {
		    c.handler && (f = c,
		    c = f.handler,
		    e = f.selector),
		    e && r.find.matchesSelector(qa, e),
		    c.guid || (c.guid = r.guid++),
		    (i = q.events) || (i = q.events = {}),
		    (g = q.handle) || (g = q.handle = function(b) {
			return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
		    }
		    ),
		    b = (b || "").match(K) || [""],
		    j = b.length;
		    while (j--)
			h = ta.exec(b[j]) || [],
			n = p = h[1],
			o = (h[2] || "").split(".").sort(),
			n && (l = r.event.special[n] || {},
			n = (e ? l.delegateType : l.bindType) || n,
			l = r.event.special[n] || {},
			k = r.extend({
			    type: n,
			    origType: p,
			    data: d,
			    handler: c,
			    guid: c.guid,
			    selector: e,
			    needsContext: e && r.expr.match.needsContext.test(e),
			    namespace: o.join(".")
			}, f),
			(m = i[n]) || (m = i[n] = [],
			m.delegateCount = 0,
			l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)),
			l.add && (l.add.call(a, k),
			k.handler.guid || (k.handler.guid = c.guid)),
			e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
			r.event.global[n] = !0)
		}
	    },
	    remove: function(a, b, c, d, e) {
		var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
		if (q && (i = q.events)) {
		    b = (b || "").match(K) || [""],
		    j = b.length;
		    while (j--)
			if (h = ta.exec(b[j]) || [],
			n = p = h[1],
			o = (h[2] || "").split(".").sort(),
			n) {
			    l = r.event.special[n] || {},
			    n = (d ? l.delegateType : l.bindType) || n,
			    m = i[n] || [],
			    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
			    g = f = m.length;
			    while (f--)
				k = m[f],
				!e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
				k.selector && m.delegateCount--,
				l.remove && l.remove.call(a, k));
			    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle),
			    delete i[n])
			} else
			    for (n in i)
				r.event.remove(a, n + b[j], c, d, !0);
		    r.isEmptyObject(i) && V.remove(a, "handle events")
		}
	    },
	    dispatch: function(a) {
		var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
		for (i[0] = b,
		c = 1; c < arguments.length; c++)
		    i[c] = arguments[c];
		if (b.delegateTarget = this,
		!k.preDispatch || k.preDispatch.call(this, b) !== !1) {
		    h = r.event.handlers.call(this, b, j),
		    c = 0;
		    while ((f = h[c++]) && !b.isPropagationStopped()) {
			b.currentTarget = f.elem,
			d = 0;
			while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
			    b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g,
			    b.data = g.data,
			    e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
			    void 0 !== e && (b.result = e) === !1 && (b.preventDefault(),
			    b.stopPropagation()))
		    }
		    return k.postDispatch && k.postDispatch.call(this, b),
		    b.result
		}
	    },
	    handlers: function(a, b) {
		var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
		if (i && j.nodeType && !("click" === a.type && a.button >= 1))
		    for (; j !== this; j = j.parentNode || this)
			if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
			    for (f = [],
			    g = {},
			    c = 0; c < i; c++)
				d = b[c],
				e = d.selector + " ",
				void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length),
				g[e] && f.push(d);
			    f.length && h.push({
				elem: j,
				handlers: f
			    })
			}
		return j = this,
		i < b.length && h.push({
		    elem: j,
		    handlers: b.slice(i)
		}),
		h
	    },
	    addProp: function(a, b) {
		Object.defineProperty(r.Event.prototype, a, {
		    enumerable: !0,
		    configurable: !0,
		    get: r.isFunction(b) ? function() {
			if (this.originalEvent)
			    return b(this.originalEvent)
		    }
		    : function() {
			if (this.originalEvent)
			    return this.originalEvent[a]
		    }
		    ,
		    set: function(b) {
			Object.defineProperty(this, a, {
			    enumerable: !0,
			    configurable: !0,
			    writable: !0,
			    value: b
			})
		    }
		})
	    },
	    fix: function(a) {
		return a[r.expando] ? a : new r.Event(a)
	    },
	    special: {
		load: {
		    noBubble: !0
		},
		focus: {
		    trigger: function() {
			if (this !== wa() && this.focus)
			    return this.focus(),
			    !1
		    },
		    delegateType: "focusin"
		},
		blur: {
		    trigger: function() {
			if (this === wa() && this.blur)
			    return this.blur(),
			    !1
		    },
		    delegateType: "focusout"
		},
		click: {
		    trigger: function() {
			if ("checkbox" === this.type && this.click && r.nodeName(this, "input"))
			    return this.click(),
			    !1
		    },
		    _default: function(a) {
			return r.nodeName(a.target, "a")
		    }
		},
		beforeunload: {
		    postDispatch: function(a) {
			void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
		    }
		}
	    }
	},
	r.removeEvent = function(a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c)
	}
	,
	r.Event = function(a, b) {
	    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a,
	    this.type = a.type,
	    this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va,
	    this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target,
	    this.currentTarget = a.currentTarget,
	    this.relatedTarget = a.relatedTarget) : this.type = a,
	    b && r.extend(this, b),
	    this.timeStamp = a && a.timeStamp || r.now(),
	    void (this[r.expando] = !0)) : new r.Event(a,b)
	}
	,
	r.Event.prototype = {
	    constructor: r.Event,
	    isDefaultPrevented: va,
	    isPropagationStopped: va,
	    isImmediatePropagationStopped: va,
	    isSimulated: !1,
	    preventDefault: function() {
		var a = this.originalEvent;
		this.isDefaultPrevented = ua,
		a && !this.isSimulated && a.preventDefault()
	    },
	    stopPropagation: function() {
		var a = this.originalEvent;
		this.isPropagationStopped = ua,
		a && !this.isSimulated && a.stopPropagation()
	    },
	    stopImmediatePropagation: function() {
		var a = this.originalEvent;
		this.isImmediatePropagationStopped = ua,
		a && !this.isSimulated && a.stopImmediatePropagation(),
		this.stopPropagation()
	    }
	},
	r.each({
	    altKey: !0,
	    bubbles: !0,
	    cancelable: !0,
	    changedTouches: !0,
	    ctrlKey: !0,
	    detail: !0,
	    eventPhase: !0,
	    metaKey: !0,
	    pageX: !0,
	    pageY: !0,
	    shiftKey: !0,
	    view: !0,
	    "char": !0,
	    charCode: !0,
	    key: !0,
	    keyCode: !0,
	    button: !0,
	    buttons: !0,
	    clientX: !0,
	    clientY: !0,
	    offsetX: !0,
	    offsetY: !0,
	    pointerId: !0,
	    pointerType: !0,
	    screenX: !0,
	    screenY: !0,
	    targetTouches: !0,
	    toElement: !0,
	    touches: !0,
	    which: function(a) {
		var b = a.button;
		return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
	    }
	}, r.event.addProp),
	r.each({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout",
	    pointerenter: "pointerover",
	    pointerleave: "pointerout"
	}, function(a, b) {
	    r.event.special[a] = {
		delegateType: b,
		bindType: b,
		handle: function(a) {
		    var c, d = this, e = a.relatedTarget, f = a.handleObj;
		    return e && (e === d || r.contains(d, e)) || (a.type = f.origType,
		    c = f.handler.apply(this, arguments),
		    a.type = b),
		    c
		}
	    }
	}),
	r.fn.extend({
	    on: function(a, b, c, d) {
		return xa(this, a, b, c, d)
	    },
	    one: function(a, b, c, d) {
		return xa(this, a, b, c, d, 1)
	    },
	    off: function(a, b, c) {
		var d, e;
		if (a && a.preventDefault && a.handleObj)
		    return d = a.handleObj,
		    r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
		    this;
		if ("object" == typeof a) {
		    for (e in a)
			this.off(e, b, a[e]);
		    return this
		}
		return b !== !1 && "function" != typeof b || (c = b,
		b = void 0),
		c === !1 && (c = va),
		this.each(function() {
		    r.event.remove(this, a, c, b)
		})
	    }
	});
	var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
	  , za = /<script|<style|<link/i
	  , Aa = /checked\s*(?:[^=]|=\s*.checked.)/i
	  , Ba = /^true\/(.*)/
	  , Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	function Da(a, b) {
	    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
	}
	function Ea(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
	    a
	}
	function Fa(a) {
	    var b = Ba.exec(a.type);
	    return b ? a.type = b[1] : a.removeAttribute("type"),
	    a
	}
	function Ga(a, b) {
	    var c, d, e, f, g, h, i, j;
	    if (1 === b.nodeType) {
		if (V.hasData(a) && (f = V.access(a),
		g = V.set(b, f),
		j = f.events)) {
		    delete g.handle,
		    g.events = {};
		    for (e in j)
			for (c = 0,
			d = j[e].length; c < d; c++)
			    r.event.add(b, e, j[e][c])
		}
		W.hasData(a) && (h = W.access(a),
		i = r.extend({}, h),
		W.set(b, i))
	    }
	}
	function Ha(a, b) {
	    var c = b.nodeName.toLowerCase();
	    "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
	}
	function Ia(a, b, c, d) {
	    b = g.apply([], b);
	    var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
	    if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q))
		return a.each(function(e) {
		    var f = a.eq(e);
		    s && (b[0] = q.call(this, e, f.html())),
		    Ia(f, b, c, d)
		});
	    if (m && (e = pa(b, a[0].ownerDocument, !1, a, d),
	    f = e.firstChild,
	    1 === e.childNodes.length && (e = f),
	    f || d)) {
		for (h = r.map(ma(e, "script"), Ea),
		i = h.length; l < m; l++)
		    j = e,
		    l !== n && (j = r.clone(j, !0, !0),
		    i && r.merge(h, ma(j, "script"))),
		    c.call(a[l], j, l);
		if (i)
		    for (k = h[h.length - 1].ownerDocument,
		    r.map(h, Fa),
		    l = 0; l < i; l++)
			j = h[l],
			ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
	    }
	    return a
	}
	function Ja(a, b, c) {
	    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
		c || 1 !== d.nodeType || r.cleanData(ma(d)),
		d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")),
		d.parentNode.removeChild(d));
	    return a
	}
	r.extend({
	    htmlPrefilter: function(a) {
		return a.replace(ya, "<$1></$2>")
	    },
	    clone: function(a, b, c) {
		var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
		if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
		    for (g = ma(h),
		    f = ma(a),
		    d = 0,
		    e = f.length; d < e; d++)
			Ha(f[d], g[d]);
		if (b)
		    if (c)
			for (f = f || ma(a),
			g = g || ma(h),
			d = 0,
			e = f.length; d < e; d++)
			    Ga(f[d], g[d]);
		    else
			Ga(a, h);
		return g = ma(h, "script"),
		g.length > 0 && na(g, !i && ma(a, "script")),
		h
	    },
	    cleanData: function(a) {
		for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
		    if (T(c)) {
			if (b = c[V.expando]) {
			    if (b.events)
				for (d in b.events)
				    e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
			    c[V.expando] = void 0
			}
			c[W.expando] && (c[W.expando] = void 0)
		    }
	    }
	}),
	r.fn.extend({
	    detach: function(a) {
		return Ja(this, a, !0)
	    },
	    remove: function(a) {
		return Ja(this, a)
	    },
	    text: function(a) {
		return S(this, function(a) {
		    return void 0 === a ? r.text(this) : this.empty().each(function() {
			1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
		    })
		}, null, a, arguments.length)
	    },
	    append: function() {
		return Ia(this, arguments, function(a) {
		    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
			var b = Da(this, a);
			b.appendChild(a)
		    }
		})
	    },
	    prepend: function() {
		return Ia(this, arguments, function(a) {
		    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
			var b = Da(this, a);
			b.insertBefore(a, b.firstChild)
		    }
		})
	    },
	    before: function() {
		return Ia(this, arguments, function(a) {
		    this.parentNode && this.parentNode.insertBefore(a, this)
		})
	    },
	    after: function() {
		return Ia(this, arguments, function(a) {
		    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
		})
	    },
	    empty: function() {
		for (var a, b = 0; null != (a = this[b]); b++)
		    1 === a.nodeType && (r.cleanData(ma(a, !1)),
		    a.textContent = "");
		return this
	    },
	    clone: function(a, b) {
		return a = null != a && a,
		b = null == b ? a : b,
		this.map(function() {
		    return r.clone(this, a, b)
		})
	    },
	    html: function(a) {
		return S(this, function(a) {
		    var b = this[0] || {}
		      , c = 0
		      , d = this.length;
		    if (void 0 === a && 1 === b.nodeType)
			return b.innerHTML;
		    if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
			a = r.htmlPrefilter(a);
			try {
			    for (; c < d; c++)
				b = this[c] || {},
				1 === b.nodeType && (r.cleanData(ma(b, !1)),
				b.innerHTML = a);
			    b = 0
			} catch (e) {}
		    }
		    b && this.empty().append(a)
		}, null, a, arguments.length)
	    },
	    replaceWith: function() {
		var a = [];
		return Ia(this, arguments, function(b) {
		    var c = this.parentNode;
		    r.inArray(this, a) < 0 && (r.cleanData(ma(this)),
		    c && c.replaceChild(b, this))
		}, a)
	    }
	}),
	r.each({
	    appendTo: "append",
	    prependTo: "prepend",
	    insertBefore: "before",
	    insertAfter: "after",
	    replaceAll: "replaceWith"
	}, function(a, b) {
	    r.fn[a] = function(a) {
		for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
		    c = g === f ? this : this.clone(!0),
		    r(e[g])[b](c),
		    h.apply(d, c.get());
		return this.pushStack(d)
	    }
	});
	var Ka = /^margin/
	  , La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$","i")
	  , Ma = function(b) {
	    var c = b.ownerDocument.defaultView;
	    return c && c.opener || (c = a),
	    c.getComputedStyle(b)
	};
	!function() {
	    function b() {
		if (i) {
		    i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
		    i.innerHTML = "",
		    qa.appendChild(h);
		    var b = a.getComputedStyle(i);
		    c = "1%" !== b.top,
		    g = "2px" === b.marginLeft,
		    e = "4px" === b.width,
		    i.style.marginRight = "50%",
		    f = "4px" === b.marginRight,
		    qa.removeChild(h),
		    i = null
		}
	    }
	    var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
	    i.style && (i.style.backgroundClip = "content-box",
	    i.cloneNode(!0).style.backgroundClip = "",
	    o.clearCloneStyle = "content-box" === i.style.backgroundClip,
	    h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
	    h.appendChild(i),
	    r.extend(o, {
		pixelPosition: function() {
		    return b(),
		    c
		},
		boxSizingReliable: function() {
		    return b(),
		    e
		},
		pixelMarginRight: function() {
		    return b(),
		    f
		},
		reliableMarginLeft: function() {
		    return b(),
		    g
		}
	    }))
	}();
	function Na(a, b, c) {
	    var d, e, f, g, h = a.style;
	    return c = c || Ma(a),
	    c && (g = c.getPropertyValue(b) || c[b],
	    "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
	    !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width,
	    e = h.minWidth,
	    f = h.maxWidth,
	    h.minWidth = h.maxWidth = h.width = g,
	    g = c.width,
	    h.width = d,
	    h.minWidth = e,
	    h.maxWidth = f)),
	    void 0 !== g ? g + "" : g
	}
	function Oa(a, b) {
	    return {
		get: function() {
		    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
		}
	    }
	}
	var Pa = /^(none|table(?!-c[ea]).+)/
	  , Qa = {
	    position: "absolute",
	    visibility: "hidden",
	    display: "block"
	}
	  , Ra = {
	    letterSpacing: "0",
	    fontWeight: "400"
	}
	  , Sa = ["Webkit", "Moz", "ms"]
	  , Ta = d.createElement("div").style;
	function Ua(a) {
	    if (a in Ta)
		return a;
	    var b = a[0].toUpperCase() + a.slice(1)
	      , c = Sa.length;
	    while (c--)
		if (a = Sa[c] + b,
		a in Ta)
		    return a
	}
	function Va(a, b, c) {
	    var d = aa.exec(b);
	    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
	}
	function Wa(a, b, c, d, e) {
	    var f, g = 0;
	    for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
		"margin" === c && (g += r.css(a, c + ba[f], !0, e)),
		d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)),
		"margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e),
		"padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
	    return g
	}
	function Xa(a, b, c) {
	    var d, e = !0, f = Ma(a), g = "border-box" === r.css(a, "boxSizing", !1, f);
	    if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]),
	    d <= 0 || null == d) {
		if (d = Na(a, b, f),
		(d < 0 || null == d) && (d = a.style[b]),
		La.test(d))
		    return d;
		e = g && (o.boxSizingReliable() || d === a.style[b]),
		d = parseFloat(d) || 0
	    }
	    return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
	}
	r.extend({
	    cssHooks: {
		opacity: {
		    get: function(a, b) {
			if (b) {
			    var c = Na(a, "opacity");
			    return "" === c ? "1" : c
			}
		    }
		}
	    },
	    cssNumber: {
		animationIterationCount: !0,
		columnCount: !0,
		fillOpacity: !0,
		flexGrow: !0,
		flexShrink: !0,
		fontWeight: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0
	    },
	    cssProps: {
		"float": "cssFloat"
	    },
	    style: function(a, b, c, d) {
		if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
		    var e, f, g, h = r.camelCase(b), i = a.style;
		    return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h),
		    g = r.cssHooks[b] || r.cssHooks[h],
		    void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
		    "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e),
		    f = "number"),
		    null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")),
		    o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
		    g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
		    void 0)
		}
	    },
	    css: function(a, b, c, d) {
		var e, f, g, h = r.camelCase(b);
		return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h),
		g = r.cssHooks[b] || r.cssHooks[h],
		g && "get"in g && (e = g.get(a, !0, c)),
		void 0 === e && (e = Na(a, b, d)),
		"normal" === e && b in Ra && (e = Ra[b]),
		"" === c || c ? (f = parseFloat(e),
		c === !0 || isFinite(f) ? f || 0 : e) : e
	    }
	}),
	r.each(["height", "width"], function(a, b) {
	    r.cssHooks[b] = {
		get: function(a, c, d) {
		    if (c)
			return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() {
			    return Xa(a, b, d)
			})
		},
		set: function(a, c, d) {
		    var e, f = d && Ma(a), g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
		    return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
		    c = r.css(a, b)),
		    Va(a, c, g)
		}
	    }
	}),
	r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) {
	    if (b)
		return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
		    marginLeft: 0
		}, function() {
		    return a.getBoundingClientRect().left
		})) + "px"
	}),
	r.each({
	    margin: "",
	    padding: "",
	    border: "Width"
	}, function(a, b) {
	    r.cssHooks[a + b] = {
		expand: function(c) {
		    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
			e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
		    return e
		}
	    },
	    Ka.test(a) || (r.cssHooks[a + b].set = Va)
	}),
	r.fn.extend({
	    css: function(a, b) {
		return S(this, function(a, b, c) {
		    var d, e, f = {}, g = 0;
		    if (r.isArray(b)) {
			for (d = Ma(a),
			e = b.length; g < e; g++)
			    f[b[g]] = r.css(a, b[g], !1, d);
			return f
		    }
		    return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
		}, a, b, arguments.length > 1)
	    }
	});
	function Ya(a, b, c, d, e) {
	    return new Ya.prototype.init(a,b,c,d,e)
	}
	r.Tween = Ya,
	Ya.prototype = {
	    constructor: Ya,
	    init: function(a, b, c, d, e, f) {
		this.elem = a,
		this.prop = c,
		this.easing = e || r.easing._default,
		this.options = b,
		this.start = this.now = this.cur(),
		this.end = d,
		this.unit = f || (r.cssNumber[c] ? "" : "px")
	    },
	    cur: function() {
		var a = Ya.propHooks[this.prop];
		return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
	    },
	    run: function(a) {
		var b, c = Ya.propHooks[this.prop];
		return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
		this.now = (this.end - this.start) * b + this.start,
		this.options.step && this.options.step.call(this.elem, this.now, this),
		c && c.set ? c.set(this) : Ya.propHooks._default.set(this),
		this
	    }
	},
	Ya.prototype.init.prototype = Ya.prototype,
	Ya.propHooks = {
	    _default: {
		get: function(a) {
		    var b;
		    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""),
		    b && "auto" !== b ? b : 0)
		},
		set: function(a) {
		    r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
		}
	    }
	},
	Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
	    set: function(a) {
		a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
	    }
	},
	r.easing = {
	    linear: function(a) {
		return a
	    },
	    swing: function(a) {
		return .5 - Math.cos(a * Math.PI) / 2
	    },
	    _default: "swing"
	},
	r.fx = Ya.prototype.init,
	r.fx.step = {};
	var Za, $a, _a = /^(?:toggle|show|hide)$/, ab = /queueHooks$/;
	function bb() {
	    $a && (a.requestAnimationFrame(bb),
	    r.fx.tick())
	}
	function cb() {
	    return a.setTimeout(function() {
		Za = void 0
	    }),
	    Za = r.now()
	}
	function db(a, b) {
	    var c, d = 0, e = {
		height: a
	    };
	    for (b = b ? 1 : 0; d < 4; d += 2 - b)
		c = ba[d],
		e["margin" + c] = e["padding" + c] = a;
	    return b && (e.opacity = e.width = a),
	    e
	}
	function eb(a, b, c) {
	    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
		if (d = e[f].call(c, b, a))
		    return d
	}
	function fb(a, b, c) {
	    var d, e, f, g, h, i, j, k, l = "width"in b || "height"in b, m = this, n = {}, o = a.style, p = a.nodeType && ca(a), q = V.get(a, "fxshow");
	    c.queue || (g = r._queueHooks(a, "fx"),
	    null == g.unqueued && (g.unqueued = 0,
	    h = g.empty.fire,
	    g.empty.fire = function() {
		g.unqueued || h()
	    }
	    ),
	    g.unqueued++,
	    m.always(function() {
		m.always(function() {
		    g.unqueued--,
		    r.queue(a, "fx").length || g.empty.fire()
		})
	    }));
	    for (d in b)
		if (e = b[d],
		_a.test(e)) {
		    if (delete b[d],
		    f = f || "toggle" === e,
		    e === (p ? "hide" : "show")) {
			if ("show" !== e || !q || void 0 === q[d])
			    continue;
			p = !0
		    }
		    n[d] = q && q[d] || r.style(a, d)
		}
	    if (i = !r.isEmptyObject(b),
	    i || !r.isEmptyObject(n)) {
		l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
		j = q && q.display,
		null == j && (j = V.get(a, "display")),
		k = r.css(a, "display"),
		"none" === k && (j ? k = j : (ha([a], !0),
		j = a.style.display || j,
		k = r.css(a, "display"),
		ha([a]))),
		("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
		    o.display = j
		}),
		null == j && (k = o.display,
		j = "none" === k ? "" : k)),
		o.display = "inline-block")),
		c.overflow && (o.overflow = "hidden",
		m.always(function() {
		    o.overflow = c.overflow[0],
		    o.overflowX = c.overflow[1],
		    o.overflowY = c.overflow[2]
		})),
		i = !1;
		for (d in n)
		    i || (q ? "hidden"in q && (p = q.hidden) : q = V.access(a, "fxshow", {
			display: j
		    }),
		    f && (q.hidden = !p),
		    p && ha([a], !0),
		    m.done(function() {
			p || ha([a]),
			V.remove(a, "fxshow");
			for (d in n)
			    r.style(a, d, n[d])
		    })),
		    i = eb(p ? q[d] : 0, d, m),
		    d in q || (q[d] = i.start,
		    p && (i.end = i.start,
		    i.start = 0))
	    }
	}
	function gb(a, b) {
	    var c, d, e, f, g;
	    for (c in a)
		if (d = r.camelCase(c),
		e = b[d],
		f = a[c],
		r.isArray(f) && (e = f[1],
		f = a[c] = f[0]),
		c !== d && (a[d] = f,
		delete a[c]),
		g = r.cssHooks[d],
		g && "expand"in g) {
		    f = g.expand(f),
		    delete a[d];
		    for (c in f)
			c in a || (a[c] = f[c],
			b[c] = e)
		} else
		    b[d] = e
	}
	function hb(a, b, c) {
	    var d, e, f = 0, g = hb.prefilters.length, h = r.Deferred().always(function() {
		delete i.elem
	    }), i = function() {
		if (e)
		    return !1;
		for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
		    j.tweens[g].run(f);
		return h.notifyWith(a, [j, f, c]),
		f < 1 && i ? c : (h.resolveWith(a, [j]),
		!1)
	    }, j = h.promise({
		elem: a,
		props: r.extend({}, b),
		opts: r.extend(!0, {
		    specialEasing: {},
		    easing: r.easing._default
		}, c),
		originalProperties: b,
		originalOptions: c,
		startTime: Za || cb(),
		duration: c.duration,
		tweens: [],
		createTween: function(b, c) {
		    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
		    return j.tweens.push(d),
		    d
		},
		stop: function(b) {
		    var c = 0
		      , d = b ? j.tweens.length : 0;
		    if (e)
			return this;
		    for (e = !0; c < d; c++)
			j.tweens[c].run(1);
		    return b ? (h.notifyWith(a, [j, 1, 0]),
		    h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
		    this
		}
	    }), k = j.props;
	    for (gb(k, j.opts.specialEasing); f < g; f++)
		if (d = hb.prefilters[f].call(j, a, k, j.opts))
		    return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
		    d;
	    return r.map(k, eb, j),
	    r.isFunction(j.opts.start) && j.opts.start.call(a, j),
	    r.fx.timer(r.extend(i, {
		elem: a,
		anim: j,
		queue: j.opts.queue
	    })),
	    j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	r.Animation = r.extend(hb, {
	    tweeners: {
		"*": [function(a, b) {
		    var c = this.createTween(a, b);
		    return ea(c.elem, a, aa.exec(b), c),
		    c
		}
		]
	    },
	    tweener: function(a, b) {
		r.isFunction(a) ? (b = a,
		a = ["*"]) : a = a.match(K);
		for (var c, d = 0, e = a.length; d < e; d++)
		    c = a[d],
		    hb.tweeners[c] = hb.tweeners[c] || [],
		    hb.tweeners[c].unshift(b)
	    },
	    prefilters: [fb],
	    prefilter: function(a, b) {
		b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
	    }
	}),
	r.speed = function(a, b, c) {
	    var e = a && "object" == typeof a ? r.extend({}, a) : {
		complete: c || !c && b || r.isFunction(a) && a,
		duration: a,
		easing: c && b || b && !r.isFunction(b) && b
	    };
	    return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default),
	    null != e.queue && e.queue !== !0 || (e.queue = "fx"),
	    e.old = e.complete,
	    e.complete = function() {
		r.isFunction(e.old) && e.old.call(this),
		e.queue && r.dequeue(this, e.queue)
	    }
	    ,
	    e
	}
	,
	r.fn.extend({
	    fadeTo: function(a, b, c, d) {
		return this.filter(ca).css("opacity", 0).show().end().animate({
		    opacity: b
		}, a, c, d)
	    },
	    animate: function(a, b, c, d) {
		var e = r.isEmptyObject(a)
		  , f = r.speed(b, c, d)
		  , g = function() {
		    var b = hb(this, r.extend({}, a), f);
		    (e || V.get(this, "finish")) && b.stop(!0)
		};
		return g.finish = g,
		e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
	    },
	    stop: function(a, b, c) {
		var d = function(a) {
		    var b = a.stop;
		    delete a.stop,
		    b(c)
		};
		return "string" != typeof a && (c = b,
		b = a,
		a = void 0),
		b && a !== !1 && this.queue(a || "fx", []),
		this.each(function() {
		    var b = !0
		      , e = null != a && a + "queueHooks"
		      , f = r.timers
		      , g = V.get(this);
		    if (e)
			g[e] && g[e].stop && d(g[e]);
		    else
			for (e in g)
			    g[e] && g[e].stop && ab.test(e) && d(g[e]);
		    for (e = f.length; e--; )
			f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
			b = !1,
			f.splice(e, 1));
		    !b && c || r.dequeue(this, a)
		})
	    },
	    finish: function(a) {
		return a !== !1 && (a = a || "fx"),
		this.each(function() {
		    var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
		    for (c.finish = !0,
		    r.queue(this, a, []),
		    e && e.stop && e.stop.call(this, !0),
		    b = f.length; b--; )
			f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
			f.splice(b, 1));
		    for (b = 0; b < g; b++)
			d[b] && d[b].finish && d[b].finish.call(this);
		    delete c.finish
		})
	    }
	}),
	r.each(["toggle", "show", "hide"], function(a, b) {
	    var c = r.fn[b];
	    r.fn[b] = function(a, d, e) {
		return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
	    }
	}),
	r.each({
	    slideDown: db("show"),
	    slideUp: db("hide"),
	    slideToggle: db("toggle"),
	    fadeIn: {
		opacity: "show"
	    },
	    fadeOut: {
		opacity: "hide"
	    },
	    fadeToggle: {
		opacity: "toggle"
	    }
	}, function(a, b) {
	    r.fn[a] = function(a, c, d) {
		return this.animate(b, a, c, d)
	    }
	}),
	r.timers = [],
	r.fx.tick = function() {
	    var a, b = 0, c = r.timers;
	    for (Za = r.now(); b < c.length; b++)
		a = c[b],
		a() || c[b] !== a || c.splice(b--, 1);
	    c.length || r.fx.stop(),
	    Za = void 0
	}
	,
	r.fx.timer = function(a) {
	    r.timers.push(a),
	    a() ? r.fx.start() : r.timers.pop()
	}
	,
	r.fx.interval = 13,
	r.fx.start = function() {
	    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
	}
	,
	r.fx.stop = function() {
	    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a),
	    $a = null
	}
	,
	r.fx.speeds = {
	    slow: 600,
	    fast: 200,
	    _default: 400
	},
	r.fn.delay = function(b, c) {
	    return b = r.fx ? r.fx.speeds[b] || b : b,
	    c = c || "fx",
	    this.queue(c, function(c, d) {
		var e = a.setTimeout(c, b);
		d.stop = function() {
		    a.clearTimeout(e)
		}
	    })
	}
	,
	function() {
	    var a = d.createElement("input")
	      , b = d.createElement("select")
	      , c = b.appendChild(d.createElement("option"));
	    a.type = "checkbox",
	    o.checkOn = "" !== a.value,
	    o.optSelected = c.selected,
	    a = d.createElement("input"),
	    a.value = "t",
	    a.type = "radio",
	    o.radioValue = "t" === a.value
	}();
	var ib, jb = r.expr.attrHandle;
	r.fn.extend({
	    attr: function(a, b) {
		return S(this, r.attr, a, b, arguments.length > 1)
	    },
	    removeAttr: function(a) {
		return this.each(function() {
		    r.removeAttr(this, a)
		})
	    }
	}),
	r.extend({
	    attr: function(a, b, c) {
		var d, e, f = a.nodeType;
		if (3 !== f && 8 !== f && 2 !== f)
		    return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
		    void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
		    c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
		    null == d ? void 0 : d))
	    },
	    attrHooks: {
		type: {
		    set: function(a, b) {
			if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
			    var c = a.value;
			    return a.setAttribute("type", b),
			    c && (a.value = c),
			    b
			}
		    }
		}
	    },
	    removeAttr: function(a, b) {
		var c, d = 0, e = b && b.match(K);
		if (e && 1 === a.nodeType)
		    while (c = e[d++])
			a.removeAttribute(c)
	    }
	}),
	ib = {
	    set: function(a, b, c) {
		return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c),
		c
	    }
	},
	r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
	    var c = jb[b] || r.find.attr;
	    jb[b] = function(a, b, d) {
		var e, f, g = b.toLowerCase();
		return d || (f = jb[g],
		jb[g] = e,
		e = null != c(a, b, d) ? g : null,
		jb[g] = f),
		e
	    }
	});
	var kb = /^(?:input|select|textarea|button)$/i
	  , lb = /^(?:a|area)$/i;
	r.fn.extend({
	    prop: function(a, b) {
		return S(this, r.prop, a, b, arguments.length > 1)
	    },
	    removeProp: function(a) {
		return this.each(function() {
		    delete this[r.propFix[a] || a]
		})
	    }
	}),
	r.extend({
	    prop: function(a, b, c) {
		var d, e, f = a.nodeType;
		if (3 !== f && 8 !== f && 2 !== f)
		    return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b,
		    e = r.propHooks[b]),
		    void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
	    },
	    propHooks: {
		tabIndex: {
		    get: function(a) {
			var b = r.find.attr(a, "tabindex");
			return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
		    }
		}
	    },
	    propFix: {
		"for": "htmlFor",
		"class": "className"
	    }
	}),
	o.optSelected || (r.propHooks.selected = {
	    get: function(a) {
		var b = a.parentNode;
		return b && b.parentNode && b.parentNode.selectedIndex,
		null
	    },
	    set: function(a) {
		var b = a.parentNode;
		b && (b.selectedIndex,
		b.parentNode && b.parentNode.selectedIndex)
	    }
	}),
	r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
	    r.propFix[this.toLowerCase()] = this
	});
	function mb(a) {
	    var b = a.match(K) || [];
	    return b.join(" ")
	}
	function nb(a) {
	    return a.getAttribute && a.getAttribute("class") || ""
	}
	r.fn.extend({
	    addClass: function(a) {
		var b, c, d, e, f, g, h, i = 0;
		if (r.isFunction(a))
		    return this.each(function(b) {
			r(this).addClass(a.call(this, b, nb(this)))
		    });
		if ("string" == typeof a && a) {
		    b = a.match(K) || [];
		    while (c = this[i++])
			if (e = nb(c),
			d = 1 === c.nodeType && " " + mb(e) + " ") {
			    g = 0;
			    while (f = b[g++])
				d.indexOf(" " + f + " ") < 0 && (d += f + " ");
			    h = mb(d),
			    e !== h && c.setAttribute("class", h)
			}
		}
		return this
	    },
	    removeClass: function(a) {
		var b, c, d, e, f, g, h, i = 0;
		if (r.isFunction(a))
		    return this.each(function(b) {
			r(this).removeClass(a.call(this, b, nb(this)))
		    });
		if (!arguments.length)
		    return this.attr("class", "");
		if ("string" == typeof a && a) {
		    b = a.match(K) || [];
		    while (c = this[i++])
			if (e = nb(c),
			d = 1 === c.nodeType && " " + mb(e) + " ") {
			    g = 0;
			    while (f = b[g++])
				while (d.indexOf(" " + f + " ") > -1)
				    d = d.replace(" " + f + " ", " ");
			    h = mb(d),
			    e !== h && c.setAttribute("class", h)
			}
		}
		return this
	    },
	    toggleClass: function(a, b) {
		var c = typeof a;
		return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
		    r(this).toggleClass(a.call(this, c, nb(this), b), b)
		}) : this.each(function() {
		    var b, d, e, f;
		    if ("string" === c) {
			d = 0,
			e = r(this),
			f = a.match(K) || [];
			while (b = f[d++])
			    e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
		    } else
			void 0 !== a && "boolean" !== c || (b = nb(this),
			b && V.set(this, "__className__", b),
			this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
		})
	    },
	    hasClass: function(a) {
		var b, c, d = 0;
		b = " " + a + " ";
		while (c = this[d++])
		    if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1)
			return !0;
		return !1
	    }
	});
	var ob = /\r/g;
	r.fn.extend({
	    val: function(a) {
		var b, c, d, e = this[0];
		{
		    if (arguments.length)
			return d = r.isFunction(a),
			this.each(function(c) {
			    var e;
			    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a,
			    null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
				return null == a ? "" : a + ""
			    })),
			    b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()],
			    b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
			});
		    if (e)
			return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()],
			b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
			"string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
		}
	    }
	}),
	r.extend({
	    valHooks: {
		option: {
		    get: function(a) {
			var b = r.find.attr(a, "value");
			return null != b ? b : mb(r.text(a))
		    }
		},
		select: {
		    get: function(a) {
			var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
			for (d = f < 0 ? i : g ? f : 0; d < i; d++)
			    if (c = e[d],
			    (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
				if (b = r(c).val(),
				g)
				    return b;
				h.push(b)
			    }
			return h
		    },
		    set: function(a, b) {
			var c, d, e = a.options, f = r.makeArray(b), g = e.length;
			while (g--)
			    d = e[g],
			    (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
			return c || (a.selectedIndex = -1),
			f
		    }
		}
	    }
	}),
	r.each(["radio", "checkbox"], function() {
	    r.valHooks[this] = {
		set: function(a, b) {
		    if (r.isArray(b))
			return a.checked = r.inArray(r(a).val(), b) > -1
		}
	    },
	    o.checkOn || (r.valHooks[this].get = function(a) {
		return null === a.getAttribute("value") ? "on" : a.value
	    }
	    )
	});
	var pb = /^(?:focusinfocus|focusoutblur)$/;
	r.extend(r.event, {
	    trigger: function(b, c, e, f) {
		var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
		if (h = i = e = e || d,
		3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."),
		p = q.shift(),
		q.sort()),
		k = p.indexOf(":") < 0 && "on" + p,
		b = b[r.expando] ? b : new r.Event(p,"object" == typeof b && b),
		b.isTrigger = f ? 2 : 3,
		b.namespace = q.join("."),
		b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
		b.result = void 0,
		b.target || (b.target = e),
		c = null == c ? [b] : r.makeArray(c, [b]),
		n = r.event.special[p] || {},
		f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
		    if (!f && !n.noBubble && !r.isWindow(e)) {
			for (j = n.delegateType || p,
			pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)
			    o.push(h),
			    i = h;
			i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
		    }
		    g = 0;
		    while ((h = o[g++]) && !b.isPropagationStopped())
			b.type = g > 1 ? j : n.bindType || p,
			m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"),
			m && m.apply(h, c),
			m = k && h[k],
			m && m.apply && T(h) && (b.result = m.apply(h, c),
			b.result === !1 && b.preventDefault());
		    return b.type = p,
		    f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k],
		    i && (e[k] = null),
		    r.event.triggered = p,
		    e[p](),
		    r.event.triggered = void 0,
		    i && (e[k] = i)),
		    b.result
		}
	    },
	    simulate: function(a, b, c) {
		var d = r.extend(new r.Event, c, {
		    type: a,
		    isSimulated: !0
		});
		r.event.trigger(d, null, b)
	    }
	}),
	r.fn.extend({
	    trigger: function(a, b) {
		return this.each(function() {
		    r.event.trigger(a, b, this)
		})
	    },
	    triggerHandler: function(a, b) {
		var c = this[0];
		if (c)
		    return r.event.trigger(a, b, c, !0)
	    }
	}),
	r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
	    r.fn[b] = function(a, c) {
		return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
	    }
	}),
	r.fn.extend({
	    hover: function(a, b) {
		return this.mouseenter(a).mouseleave(b || a)
	    }
	}),
	o.focusin = "onfocusin"in a,
	o.focusin || r.each({
	    focus: "focusin",
	    blur: "focusout"
	}, function(a, b) {
	    var c = function(a) {
		r.event.simulate(b, a.target, r.event.fix(a))
	    };
	    r.event.special[b] = {
		setup: function() {
		    var d = this.ownerDocument || this
		      , e = V.access(d, b);
		    e || d.addEventListener(a, c, !0),
		    V.access(d, b, (e || 0) + 1)
		},
		teardown: function() {
		    var d = this.ownerDocument || this
		      , e = V.access(d, b) - 1;
		    e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0),
		    V.remove(d, b))
		}
	    }
	});
	var qb = a.location
	  , rb = r.now()
	  , sb = /\?/;
	r.parseXML = function(b) {
	    var c;
	    if (!b || "string" != typeof b)
		return null;
	    try {
		c = (new a.DOMParser).parseFromString(b, "text/xml")
	    } catch (d) {
		c = void 0
	    }
	    return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b),
	    c
	}
	;
	var tb = /\[\]$/
	  , ub = /\r?\n/g
	  , vb = /^(?:submit|button|image|reset|file)$/i
	  , wb = /^(?:input|select|textarea|keygen)/i;
	function xb(a, b, c, d) {
	    var e;
	    if (r.isArray(b))
		r.each(b, function(b, e) {
		    c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
		});
	    else if (c || "object" !== r.type(b))
		d(a, b);
	    else
		for (e in b)
		    xb(a + "[" + e + "]", b[e], c, d)
	}
	r.param = function(a, b) {
	    var c, d = [], e = function(a, b) {
		var c = r.isFunction(b) ? b() : b;
		d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
	    };
	    if (r.isArray(a) || a.jquery && !r.isPlainObject(a))
		r.each(a, function() {
		    e(this.name, this.value)
		});
	    else
		for (c in a)
		    xb(c, a[c], b, e);
	    return d.join("&")
	}
	,
	r.fn.extend({
	    serialize: function() {
		return r.param(this.serializeArray())
	    },
	    serializeArray: function() {
		return this.map(function() {
		    var a = r.prop(this, "elements");
		    return a ? r.makeArray(a) : this
		}).filter(function() {
		    var a = this.type;
		    return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
		}).map(function(a, b) {
		    var c = r(this).val();
		    return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
			return {
			    name: b.name,
			    value: a.replace(ub, "\r\n")
			}
		    }) : {
			name: b.name,
			value: c.replace(ub, "\r\n")
		    }
		}).get()
	    }
	});
	var yb = /%20/g
	  , zb = /#.*$/
	  , Ab = /([?&])_=[^&]*/
	  , Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm
	  , Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
	  , Db = /^(?:GET|HEAD)$/
	  , Eb = /^\/\//
	  , Fb = {}
	  , Gb = {}
	  , Hb = "*/".concat("*")
	  , Ib = d.createElement("a");
	Ib.href = qb.href;
	function Jb(a) {
	    return function(b, c) {
		"string" != typeof b && (c = b,
		b = "*");
		var d, e = 0, f = b.toLowerCase().match(K) || [];
		if (r.isFunction(c))
		    while (d = f[e++])
			"+" === d[0] ? (d = d.slice(1) || "*",
			(a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
	    }
	}
	function Kb(a, b, c, d) {
	    var e = {}
	      , f = a === Gb;
	    function g(h) {
		var i;
		return e[h] = !0,
		r.each(a[h] || [], function(a, h) {
		    var j = h(b, c, d);
		    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
		    g(j),
		    !1)
		}),
		i
	    }
	    return g(b.dataTypes[0]) || !e["*"] && g("*")
	}
	function Lb(a, b) {
	    var c, d, e = r.ajaxSettings.flatOptions || {};
	    for (c in b)
		void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	    return d && r.extend(!0, a, d),
	    a
	}
	function Mb(a, b, c) {
	    var d, e, f, g, h = a.contents, i = a.dataTypes;
	    while ("*" === i[0])
		i.shift(),
		void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
	    if (d)
		for (e in h)
		    if (h[e] && h[e].test(d)) {
			i.unshift(e);
			break
		    }
	    if (i[0]in c)
		f = i[0];
	    else {
		for (e in c) {
		    if (!i[0] || a.converters[e + " " + i[0]]) {
			f = e;
			break
		    }
		    g || (g = e)
		}
		f = f || g
	    }
	    if (f)
		return f !== i[0] && i.unshift(f),
		c[f]
	}
	function Nb(a, b, c, d) {
	    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
	    if (k[1])
		for (g in a.converters)
		    j[g.toLowerCase()] = a.converters[g];
	    f = k.shift();
	    while (f)
		if (a.responseFields[f] && (c[a.responseFields[f]] = b),
		!i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
		i = f,
		f = k.shift())
		    if ("*" === f)
			f = i;
		    else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f],
			!g)
			    for (e in j)
				if (h = e.split(" "),
				h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
				    k.unshift(h[1]));
				    break
				}
			if (g !== !0)
			    if (g && a["throws"])
				b = g(b);
			    else
				try {
				    b = g(b)
				} catch (l) {
				    return {
					state: "parsererror",
					error: g ? l : "No conversion from " + i + " to " + f
				    }
				}
		    }
	    return {
		state: "success",
		data: b
	    }
	}
	r.extend({
	    active: 0,
	    lastModified: {},
	    etag: {},
	    ajaxSettings: {
		url: qb.href,
		type: "GET",
		isLocal: Cb.test(qb.protocol),
		global: !0,
		processData: !0,
		async: !0,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		accepts: {
		    "*": Hb,
		    text: "text/plain",
		    html: "text/html",
		    xml: "application/xml, text/xml",
		    json: "application/json, text/javascript"
		},
		contents: {
		    xml: /\bxml\b/,
		    html: /\bhtml/,
		    json: /\bjson\b/
		},
		responseFields: {
		    xml: "responseXML",
		    text: "responseText",
		    json: "responseJSON"
		},
		converters: {
		    "* text": String,
		    "text html": !0,
		    "text json": JSON.parse,
		    "text xml": r.parseXML
		},
		flatOptions: {
		    url: !0,
		    context: !0
		}
	    },
	    ajaxSetup: function(a, b) {
		return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
	    },
	    ajaxPrefilter: Jb(Fb),
	    ajaxTransport: Jb(Gb),
	    ajax: function(b, c) {
		"object" == typeof b && (c = b,
		b = void 0),
		c = c || {};
		var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
		    readyState: 0,
		    getResponseHeader: function(a) {
			var b;
			if (k) {
			    if (!h) {
				h = {};
				while (b = Bb.exec(g))
				    h[b[1].toLowerCase()] = b[2]
			    }
			    b = h[a.toLowerCase()]
			}
			return null == b ? null : b
		    },
		    getAllResponseHeaders: function() {
			return k ? g : null
		    },
		    setRequestHeader: function(a, b) {
			return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a,
			v[a] = b),
			this
		    },
		    overrideMimeType: function(a) {
			return null == k && (o.mimeType = a),
			this
		    },
		    statusCode: function(a) {
			var b;
			if (a)
			    if (k)
				y.always(a[y.status]);
			    else
				for (b in a)
				    u[b] = [u[b], a[b]];
			return this
		    },
		    abort: function(a) {
			var b = a || x;
			return e && e.abort(b),
			A(0, b),
			this
		    }
		};
		if (s.promise(y),
		o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"),
		o.type = c.method || c.type || o.method || o.type,
		o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""],
		null == o.crossDomain) {
		    j = d.createElement("a");
		    try {
			j.href = o.url,
			j.href = j.href,
			o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
		    } catch (z) {
			o.crossDomain = !0
		    }
		}
		if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)),
		Kb(Fb, o, c, y),
		k)
		    return y;
		l = r.event && o.global,
		l && 0 === r.active++ && r.event.trigger("ajaxStart"),
		o.type = o.type.toUpperCase(),
		o.hasContent = !Db.test(o.type),
		f = o.url.replace(zb, ""),
		o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length),
		o.data && (f += (sb.test(f) ? "&" : "?") + o.data,
		delete o.data),
		o.cache === !1 && (f = f.replace(Ab, "$1"),
		n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n),
		o.url = f + n),
		o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
		r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
		(o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType),
		y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
		for (m in o.headers)
		    y.setRequestHeader(m, o.headers[m]);
		if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
		    return y.abort();
		if (x = "abort",
		t.add(o.complete),
		y.done(o.success),
		y.fail(o.error),
		e = Kb(Gb, o, c, y)) {
		    if (y.readyState = 1,
		    l && q.trigger("ajaxSend", [y, o]),
		    k)
			return y;
		    o.async && o.timeout > 0 && (i = a.setTimeout(function() {
			y.abort("timeout")
		    }, o.timeout));
		    try {
			k = !1,
			e.send(v, A)
		    } catch (z) {
			if (k)
			    throw z;
			A(-1, z)
		    }
		} else
		    A(-1, "No Transport");
		function A(b, c, d, h) {
		    var j, m, n, v, w, x = c;
		    k || (k = !0,
		    i && a.clearTimeout(i),
		    e = void 0,
		    g = h || "",
		    y.readyState = b > 0 ? 4 : 0,
		    j = b >= 200 && b < 300 || 304 === b,
		    d && (v = Mb(o, y, d)),
		    v = Nb(o, v, y, j),
		    j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"),
		    w && (r.lastModified[f] = w),
		    w = y.getResponseHeader("etag"),
		    w && (r.etag[f] = w)),
		    204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state,
		    m = v.data,
		    n = v.error,
		    j = !n)) : (n = x,
		    !b && x || (x = "error",
		    b < 0 && (b = 0))),
		    y.status = b,
		    y.statusText = (c || x) + "",
		    j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
		    y.statusCode(u),
		    u = void 0,
		    l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
		    t.fireWith(p, [y, x]),
		    l && (q.trigger("ajaxComplete", [y, o]),
		    --r.active || r.event.trigger("ajaxStop")))
		}
		return y
	    },
	    getJSON: function(a, b, c) {
		return r.get(a, b, c, "json")
	    },
	    getScript: function(a, b) {
		return r.get(a, void 0, b, "script")
	    }
	}),
	r.each(["get", "post"], function(a, b) {
	    r[b] = function(a, c, d, e) {
		return r.isFunction(c) && (e = e || d,
		d = c,
		c = void 0),
		r.ajax(r.extend({
		    url: a,
		    type: b,
		    dataType: e,
		    data: c,
		    success: d
		}, r.isPlainObject(a) && a))
	    }
	}),
	r._evalUrl = function(a) {
	    return r.ajax({
		url: a,
		type: "GET",
		dataType: "script",
		cache: !0,
		async: !1,
		global: !1,
		"throws": !0
	    })
	}
	,
	r.fn.extend({
	    wrapAll: function(a) {
		var b;
		return this[0] && (r.isFunction(a) && (a = a.call(this[0])),
		b = r(a, this[0].ownerDocument).eq(0).clone(!0),
		this[0].parentNode && b.insertBefore(this[0]),
		b.map(function() {
		    var a = this;
		    while (a.firstElementChild)
			a = a.firstElementChild;
		    return a
		}).append(this)),
		this
	    },
	    wrapInner: function(a) {
		return r.isFunction(a) ? this.each(function(b) {
		    r(this).wrapInner(a.call(this, b))
		}) : this.each(function() {
		    var b = r(this)
		      , c = b.contents();
		    c.length ? c.wrapAll(a) : b.append(a)
		})
	    },
	    wrap: function(a) {
		var b = r.isFunction(a);
		return this.each(function(c) {
		    r(this).wrapAll(b ? a.call(this, c) : a)
		})
	    },
	    unwrap: function(a) {
		return this.parent(a).not("body").each(function() {
		    r(this).replaceWith(this.childNodes)
		}),
		this
	    }
	}),
	r.expr.pseudos.hidden = function(a) {
	    return !r.expr.pseudos.visible(a)
	}
	,
	r.expr.pseudos.visible = function(a) {
	    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
	}
	,
	r.ajaxSettings.xhr = function() {
	    try {
		return new a.XMLHttpRequest
	    } catch (b) {}
	}
	;
	var Ob = {
	    0: 200,
	    1223: 204
	}
	  , Pb = r.ajaxSettings.xhr();
	o.cors = !!Pb && "withCredentials"in Pb,
	o.ajax = Pb = !!Pb,
	r.ajaxTransport(function(b) {
	    var c, d;
	    if (o.cors || Pb && !b.crossDomain)
		return {
		    send: function(e, f) {
			var g, h = b.xhr();
			if (h.open(b.type, b.url, b.async, b.username, b.password),
			b.xhrFields)
			    for (g in b.xhrFields)
				h[g] = b.xhrFields[g];
			b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
			b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
			for (g in e)
			    h.setRequestHeader(g, e[g]);
			c = function(a) {
			    return function() {
				c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
				"abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
				    binary: h.response
				} : {
				    text: h.responseText
				}, h.getAllResponseHeaders()))
			    }
			}
			,
			h.onload = c(),
			d = h.onerror = c("error"),
			void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
			    4 === h.readyState && a.setTimeout(function() {
				c && d()
			    })
			}
			,
			c = c("abort");
			try {
			    h.send(b.hasContent && b.data || null)
			} catch (i) {
			    if (c)
				throw i
			}
		    },
		    abort: function() {
			c && c()
		    }
		}
	}),
	r.ajaxPrefilter(function(a) {
	    a.crossDomain && (a.contents.script = !1)
	}),
	r.ajaxSetup({
	    accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	    },
	    contents: {
		script: /\b(?:java|ecma)script\b/
	    },
	    converters: {
		"text script": function(a) {
		    return r.globalEval(a),
		    a
		}
	    }
	}),
	r.ajaxPrefilter("script", function(a) {
	    void 0 === a.cache && (a.cache = !1),
	    a.crossDomain && (a.type = "GET")
	}),
	r.ajaxTransport("script", function(a) {
	    if (a.crossDomain) {
		var b, c;
		return {
		    send: function(e, f) {
			b = r("<script>").prop({
			    charset: a.scriptCharset,
			    src: a.url
			}).on("load error", c = function(a) {
			    b.remove(),
			    c = null,
			    a && f("error" === a.type ? 404 : 200, a.type)
			}
			),
			d.head.appendChild(b[0])
		    },
		    abort: function() {
			c && c()
		    }
		}
	    }
	});
	var Qb = []
	  , Rb = /(=)\?(?=&|$)|\?\?/;
	r.ajaxSetup({
	    jsonp: "callback",
	    jsonpCallback: function() {
		var a = Qb.pop() || r.expando + "_" + rb++;
		return this[a] = !0,
		a
	    }
	}),
	r.ajaxPrefilter("json jsonp", function(b, c, d) {
	    var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
	    if (h || "jsonp" === b.dataTypes[0])
		return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
		h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
		b.converters["script json"] = function() {
		    return g || r.error(e + " was not called"),
		    g[0]
		}
		,
		b.dataTypes[0] = "json",
		f = a[e],
		a[e] = function() {
		    g = arguments
		}
		,
		d.always(function() {
		    void 0 === f ? r(a).removeProp(e) : a[e] = f,
		    b[e] && (b.jsonpCallback = c.jsonpCallback,
		    Qb.push(e)),
		    g && r.isFunction(f) && f(g[0]),
		    g = f = void 0
		}),
		"script"
	}),
	o.createHTMLDocument = function() {
	    var a = d.implementation.createHTMLDocument("").body;
	    return a.innerHTML = "<form></form><form></form>",
	    2 === a.childNodes.length
	}(),
	r.parseHTML = function(a, b, c) {
	    if ("string" != typeof a)
		return [];
	    "boolean" == typeof b && (c = b,
	    b = !1);
	    var e, f, g;
	    return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""),
	    e = b.createElement("base"),
	    e.href = d.location.href,
	    b.head.appendChild(e)) : b = d),
	    f = B.exec(a),
	    g = !c && [],
	    f ? [b.createElement(f[1])] : (f = pa([a], b, g),
	    g && g.length && r(g).remove(),
	    r.merge([], f.childNodes))
	}
	,
	r.fn.load = function(a, b, c) {
	    var d, e, f, g = this, h = a.indexOf(" ");
	    return h > -1 && (d = mb(a.slice(h)),
	    a = a.slice(0, h)),
	    r.isFunction(b) ? (c = b,
	    b = void 0) : b && "object" == typeof b && (e = "POST"),
	    g.length > 0 && r.ajax({
		url: a,
		type: e || "GET",
		dataType: "html",
		data: b
	    }).done(function(a) {
		f = arguments,
		g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
	    }).always(c && function(a, b) {
		g.each(function() {
		    c.apply(this, f || [a.responseText, b, a])
		})
	    }
	    ),
	    this
	}
	,
	r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
	    r.fn[b] = function(a) {
		return this.on(b, a)
	    }
	}),
	r.expr.pseudos.animated = function(a) {
	    return r.grep(r.timers, function(b) {
		return a === b.elem
	    }).length
	}
	;
	function Sb(a) {
	    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	r.offset = {
	    setOffset: function(a, b, c) {
		var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
		"static" === k && (a.style.position = "relative"),
		h = l.offset(),
		f = r.css(a, "top"),
		i = r.css(a, "left"),
		j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
		j ? (d = l.position(),
		g = d.top,
		e = d.left) : (g = parseFloat(f) || 0,
		e = parseFloat(i) || 0),
		r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
		null != b.top && (m.top = b.top - h.top + g),
		null != b.left && (m.left = b.left - h.left + e),
		"using"in b ? b.using.call(a, m) : l.css(m)
	    }
	},
	r.fn.extend({
	    offset: function(a) {
		if (arguments.length)
		    return void 0 === a ? this : this.each(function(b) {
			r.offset.setOffset(this, a, b)
		    });
		var b, c, d, e, f = this[0];
		if (f)
		    return f.getClientRects().length ? (d = f.getBoundingClientRect(),
		    d.width || d.height ? (e = f.ownerDocument,
		    c = Sb(e),
		    b = e.documentElement,
		    {
			top: d.top + c.pageYOffset - b.clientTop,
			left: d.left + c.pageXOffset - b.clientLeft
		    }) : d) : {
			top: 0,
			left: 0
		    }
	    },
	    position: function() {
		if (this[0]) {
		    var a, b, c = this[0], d = {
			top: 0,
			left: 0
		    };
		    return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
		    b = this.offset(),
		    r.nodeName(a[0], "html") || (d = a.offset()),
		    d = {
			top: d.top + r.css(a[0], "borderTopWidth", !0),
			left: d.left + r.css(a[0], "borderLeftWidth", !0)
		    }),
		    {
			top: b.top - d.top - r.css(c, "marginTop", !0),
			left: b.left - d.left - r.css(c, "marginLeft", !0)
		    }
		}
	    },
	    offsetParent: function() {
		return this.map(function() {
		    var a = this.offsetParent;
		    while (a && "static" === r.css(a, "position"))
			a = a.offsetParent;
		    return a || qa
		})
	    }
	}),
	r.each({
	    scrollLeft: "pageXOffset",
	    scrollTop: "pageYOffset"
	}, function(a, b) {
	    var c = "pageYOffset" === b;
	    r.fn[a] = function(d) {
		return S(this, function(a, d, e) {
		    var f = Sb(a);
		    return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
		}, a, d, arguments.length)
	    }
	}),
	r.each(["top", "left"], function(a, b) {
	    r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) {
		if (c)
		    return c = Na(a, b),
		    La.test(c) ? r(a).position()[b] + "px" : c
	    })
	}),
	r.each({
	    Height: "height",
	    Width: "width"
	}, function(a, b) {
	    r.each({
		padding: "inner" + a,
		content: b,
		"": "outer" + a
	    }, function(c, d) {
		r.fn[d] = function(e, f) {
		    var g = arguments.length && (c || "boolean" != typeof e)
		      , h = c || (e === !0 || f === !0 ? "margin" : "border");
		    return S(this, function(b, c, e) {
			var f;
			return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement,
			Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
		    }, b, g ? e : void 0, g)
		}
	    })
	}),
	r.fn.extend({
	    bind: function(a, b, c) {
		return this.on(a, null, b, c)
	    },
	    unbind: function(a, b) {
		return this.off(a, null, b)
	    },
	    delegate: function(a, b, c, d) {
		return this.on(b, a, c, d)
	    },
	    undelegate: function(a, b, c) {
		return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
	    }
	}),
	r.parseJSON = JSON.parse,
	"function" == typeof define && define.amd && define("jquery", [], function() {
	    return r
	});
	var Tb = a.jQuery
	  , Ub = a.$;
	return r.noConflict = function(b) {
	    return a.$ === r && (a.$ = Ub),
	    b && a.jQuery === r && (a.jQuery = Tb),
	    r
	}
	,
	b || (a.jQuery = a.$ = r),
	r
    });
    (function(factory) {
	"use strict";
	if (typeof define === 'function' && define.amd) {
	    define(['jquery'], factory);
	} else {
	    factory((typeof (jQuery) != 'undefined') ? jQuery : window.Zepto);
	}
    }(function($) {
	"use strict";
	var feature = {};
	feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
	feature.formdata = window.FormData !== undefined;
	var hasProp = !!$.fn.prop;
	$.fn.attr2 = function() {
	    if (!hasProp) {
		return this.attr.apply(this, arguments);
	    }
	    var val = this.prop.apply(this, arguments);
	    if ((val && val.jquery) || typeof val === 'string') {
		return val;
	    }
	    return this.attr.apply(this, arguments);
	}
	;
	$.fn.ajaxSubmit = function(options) {
	    if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	    }
	    var method, action, url, $form = this;
	    if (typeof options == 'function') {
		options = {
		    success: options
		};
	    } else if (options === undefined) {
		options = {};
	    }
	    method = options.type || this.attr2('method');
	    action = options.url || this.attr2('action');
	    url = (typeof action === 'string') ? $.trim(action) : '';
	    url = url || window.location.href || '';
	    if (url) {
		url = (url.match(/^([^#]+)/) || [])[1];
	    }
	    options = $.extend(true, {
		url: url,
		success: $.ajaxSettings.success,
		type: method || $.ajaxSettings.type,
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	    }, options);
	    var veto = {};
	    this.trigger('form-pre-serialize', [this, options, veto]);
	    if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	    }
	    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	    }
	    var traditional = options.traditional;
	    if (traditional === undefined) {
		traditional = $.ajaxSettings.traditional;
	    }
	    var elements = [];
	    var qx, a = this.formToArray(options.semantic, elements);
	    if (options.data) {
		options.extraData = options.data;
		qx = $.param(options.data, traditional);
	    }
	    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	    }
	    this.trigger('form-submit-validate', [a, this, options, veto]);
	    if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	    }
	    var q = $.param(a, traditional);
	    if (qx) {
		q = (q ? (q + '&' + qx) : qx);
	    }
	    if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;
	    } else {
		options.data = q;
	    }
	    var callbacks = [];
	    if (options.resetForm) {
		callbacks.push(function() {
		    $form.resetForm();
		});
	    }
	    if (options.clearForm) {
		callbacks.push(function() {
		    $form.clearForm(options.includeHidden);
		});
	    }
	    if (!options.dataType && options.target) {
		var oldSuccess = options.success || function() {}
		;
		callbacks.push(function(data) {
		    var fn = options.replaceTarget ? 'replaceWith' : 'html';
		    $(options.target)[fn](data).each(oldSuccess, arguments);
		});
	    } else if (options.success) {
		callbacks.push(options.success);
	    }
	    options.success = function(data, status, xhr) {
		var context = options.context || this;
		for (var i = 0, max = callbacks.length; i < max; i++) {
		    callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	    }
	    ;
	    if (options.error) {
		var oldError = options.error;
		options.error = function(xhr, status, error) {
		    var context = options.context || this;
		    oldError.apply(context, [xhr, status, error, $form]);
		}
		;
	    }
	    if (options.complete) {
		var oldComplete = options.complete;
		options.complete = function(xhr, status) {
		    var context = options.context || this;
		    oldComplete.apply(context, [xhr, status, $form]);
		}
		;
	    }
	    var fileInputs = $('input[type=file]:enabled', this).filter(function() {
		return $(this).val() !== '';
	    });
	    var hasFileInputs = fileInputs.length > 0;
	    var mp = 'multipart/form-data';
	    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);
	    var fileAPI = feature.fileapi && feature.formdata;
	    log("fileAPI :" + fileAPI);
	    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
	    var jqxhr;
	    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
		if (options.closeKeepAlive) {
		    $.get(options.closeKeepAlive, function() {
			jqxhr = fileUploadIframe(a);
		    });
		} else {
		    jqxhr = fileUploadIframe(a);
		}
	    } else if ((hasFileInputs || multipart) && fileAPI) {
		jqxhr = fileUploadXhr(a);
	    } else {
		jqxhr = $.ajax(options);
	    }
	    $form.removeData('jqxhr').data('jqxhr', jqxhr);
	    for (var k = 0; k < elements.length; k++) {
		elements[k] = null;
	    }
	    this.trigger('form-submit-notify', [this, options]);
	    return this;
	    function deepSerialize(extraData) {
		var serialized = $.param(extraData, options.traditional).split('&');
		var len = serialized.length;
		var result = [];
		var i, part;
		for (i = 0; i < len; i++) {
		    serialized[i] = serialized[i].replace(/\+/g, ' ');
		    part = serialized[i].split('=');
		    result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
		}
		return result;
	    }
	    function fileUploadXhr(a) {
		var formdata = new FormData();
		for (var i = 0; i < a.length; i++) {
		    formdata.append(a[i].name, a[i].value);
		}
		if (options.extraData) {
		    var serializedData = deepSerialize(options.extraData);
		    for (i = 0; i < serializedData.length; i++) {
			if (serializedData[i]) {
			    formdata.append(serializedData[i][0], serializedData[i][1]);
			}
		    }
		}
		options.data = null;
		var s = $.extend(true, {}, $.ajaxSettings, options, {
		    contentType: false,
		    processData: false,
		    cache: false,
		    type: method || 'POST'
		});
		if (options.uploadProgress) {
		    s.xhr = function() {
			var xhr = $.ajaxSettings.xhr();
			if (xhr.upload) {
			    xhr.upload.addEventListener('progress', function(event) {
				var percent = 0;
				var position = event.loaded || event.position;
				var total = event.total;
				if (event.lengthComputable) {
				    percent = Math.ceil(position / total * 100);
				}
				options.uploadProgress(event, position, total, percent);
			    }, false);
			}
			return xhr;
		    }
		    ;
		}
		s.data = null;
		var beforeSend = s.beforeSend;
		s.beforeSend = function(xhr, o) {
		    if (options.formData) {
			o.data = options.formData;
		    } else {
			o.data = formdata;
		    }
		    if (beforeSend) {
			beforeSend.call(this, xhr, o);
		    }
		}
		;
		return $.ajax(s);
	    }
	    function fileUploadIframe(a) {
		var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
		var deferred = $.Deferred();
		deferred.abort = function(status) {
		    xhr.abort(status);
		}
		;
		if (a) {
		    for (i = 0; i < elements.length; i++) {
			el = $(elements[i]);
			if (hasProp) {
			    el.prop('disabled', false);
			} else {
			    el.removeAttr('disabled');
			}
		    }
		}
		s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		id = 'jqFormIO' + (new Date().getTime());
		if (s.iframeTarget) {
		    $io = $(s.iframeTarget);
		    n = $io.attr2('name');
		    if (!n) {
			$io.attr2('name', id);
		    } else {
			id = n;
		    }
		} else {
		    $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
		    $io.css({
			position: 'absolute',
			top: '-1000px',
			left: '-1000px'
		    });
		}
		io = $io[0];
		xhr = {
		    aborted: 0,
		    responseText: null,
		    responseXML: null,
		    status: 0,
		    statusText: 'n/a',
		    getAllResponseHeaders: function() {},
		    getResponseHeader: function() {},
		    setRequestHeader: function() {},
		    abort: function(status) {
			var e = (status === 'timeout' ? 'timeout' : 'aborted');
			log('aborting upload... ' + e);
			this.aborted = 1;
			try {
			    if (io.contentWindow.document.execCommand) {
				io.contentWindow.document.execCommand('Stop');
			    }
			} catch (ignore) {}
			$io.attr('src', s.iframeSrc);
			xhr.error = e;
			if (s.error) {
			    s.error.call(s.context, xhr, e, status);
			}
			if (g) {
			    $.event.trigger("ajaxError", [xhr, s, e]);
			}
			if (s.complete) {
			    s.complete.call(s.context, xhr, e);
			}
		    }
		};
		g = s.global;
		if (g && 0 === $.active++) {
		    $.event.trigger("ajaxStart");
		}
		if (g) {
		    $.event.trigger("ajaxSend", [xhr, s]);
		}
		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
		    if (s.global) {
			$.active--;
		    }
		    deferred.reject();
		    return deferred;
		}
		if (xhr.aborted) {
		    deferred.reject();
		    return deferred;
		}
		sub = form.clk;
		if (sub) {
		    n = sub.name;
		    if (n && !sub.disabled) {
			s.extraData = s.extraData || {};
			s.extraData[n] = sub.value;
			if (sub.type == "image") {
			    s.extraData[n + '.x'] = form.clk_x;
			    s.extraData[n + '.y'] = form.clk_y;
			}
		    }
		}
		var CLIENT_TIMEOUT_ABORT = 1;
		var SERVER_ABORT = 2;
		function getDoc(frame) {
		    var doc = null;
		    try {
			if (frame.contentWindow) {
			    doc = frame.contentWindow.document;
			}
		    } catch (err) {
			log('cannot get iframe.contentWindow document: ' + err);
		    }
		    if (doc) {
			return doc;
		    }
		    try {
			doc = frame.contentDocument ? frame.contentDocument : frame.document;
		    } catch (err) {
			log('cannot get iframe.contentDocument: ' + err);
			doc = frame.document;
		    }
		    return doc;
		}
		var csrf_token = $('meta[name=csrf-token]').attr('content');
		var csrf_param = $('meta[name=csrf-param]').attr('content');
		if (csrf_param && csrf_token) {
		    s.extraData = s.extraData || {};
		    s.extraData[csrf_param] = csrf_token;
		}
		function doSubmit() {
		    var t = $form.attr2('target')
		      , a = $form.attr2('action')
		      , mp = 'multipart/form-data'
		      , et = $form.attr('enctype') || $form.attr('encoding') || mp;
		    form.setAttribute('target', id);
		    if (!method || /post/i.test(method)) {
			form.setAttribute('method', 'POST');
		    }
		    if (a != s.url) {
			form.setAttribute('action', s.url);
		    }
		    if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
			$form.attr({
			    encoding: 'multipart/form-data',
			    enctype: 'multipart/form-data'
			});
		    }
		    if (s.timeout) {
			timeoutHandle = setTimeout(function() {
			    timedOut = true;
			    cb(CLIENT_TIMEOUT_ABORT);
			}, s.timeout);
		    }
		    function checkState() {
			try {
			    var state = getDoc(io).readyState;
			    log('state = ' + state);
			    if (state && state.toLowerCase() == 'uninitialized') {
				setTimeout(checkState, 50);
			    }
			} catch (e) {
			    log('Server abort: ', e, ' (', e.name, ')');
			    cb(SERVER_ABORT);
			    if (timeoutHandle) {
				clearTimeout(timeoutHandle);
			    }
			    timeoutHandle = undefined;
			}
		    }
		    var extraInputs = [];
		    try {
			if (s.extraData) {
			    for (var n in s.extraData) {
				if (s.extraData.hasOwnProperty(n)) {
				    if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
					extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value).appendTo(form)[0]);
				    } else {
					extraInputs.push($('<input type="hidden" name="' + n + '">').val(s.extraData[n]).appendTo(form)[0]);
				    }
				}
			    }
			}
			if (!s.iframeTarget) {
			    $io.appendTo('body');
			}
			if (io.attachEvent) {
			    io.attachEvent('onload', cb);
			} else {
			    io.addEventListener('load', cb, false);
			}
			setTimeout(checkState, 15);
			try {
			    form.submit();
			} catch (err) {
			    var submitFn = document.createElement('form').submit;
			    submitFn.apply(form);
			}
		    } finally {
			form.setAttribute('action', a);
			form.setAttribute('enctype', et);
			if (t) {
			    form.setAttribute('target', t);
			} else {
			    $form.removeAttr('target');
			}
			$(extraInputs).remove();
		    }
		}
		if (s.forceSync) {
		    doSubmit();
		} else {
		    setTimeout(doSubmit, 10);
		}
		var data, doc, domCheckCount = 50, callbackProcessed;
		function cb(e) {
		    if (xhr.aborted || callbackProcessed) {
			return;
		    }
		    doc = getDoc(io);
		    if (!doc) {
			log('cannot access response document');
			e = SERVER_ABORT;
		    }
		    if (e === CLIENT_TIMEOUT_ABORT && xhr) {
			xhr.abort('timeout');
			deferred.reject(xhr, 'timeout');
			return;
		    } else if (e == SERVER_ABORT && xhr) {
			xhr.abort('server abort');
			deferred.reject(xhr, 'error', 'server abort');
			return;
		    }
		    if (!doc || doc.location.href == s.iframeSrc) {
			if (!timedOut) {
			    return;
			}
		    }
		    if (io.detachEvent) {
			io.detachEvent('onload', cb);
		    } else {
			io.removeEventListener('load', cb, false);
		    }
		    var status = 'success', errMsg;
		    try {
			if (timedOut) {
			    throw 'timeout';
			}
			var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
			log('isXml=' + isXml);
			if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
			    if (--domCheckCount) {
				log('requeing onLoad callback, DOM not available');
				setTimeout(cb, 250);
				return;
			    }
			}
			var docRoot = doc.body ? doc.body : doc.documentElement;
			xhr.responseText = docRoot ? docRoot.innerHTML : null;
			xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
			if (isXml) {
			    s.dataType = 'xml';
			}
			xhr.getResponseHeader = function(header) {
			    var headers = {
				'content-type': s.dataType
			    };
			    return headers[header.toLowerCase()];
			}
			;
			if (docRoot) {
			    xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
			    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
			}
			var dt = (s.dataType || '').toLowerCase();
			var scr = /(json|script|text)/.test(dt);
			if (scr || s.textarea) {
			    var ta = doc.getElementsByTagName('textarea')[0];
			    if (ta) {
				xhr.responseText = ta.value;
				xhr.status = Number(ta.getAttribute('status')) || xhr.status;
				xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
			    } else if (scr) {
				var pre = doc.getElementsByTagName('pre')[0];
				var b = doc.getElementsByTagName('body')[0];
				if (pre) {
				    xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
				} else if (b) {
				    xhr.responseText = b.textContent ? b.textContent : b.innerText;
				}
			    }
			} else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
			    xhr.responseXML = toXml(xhr.responseText);
			}
			try {
			    data = httpData(xhr, dt, s);
			} catch (err) {
			    status = 'parsererror';
			    xhr.error = errMsg = (err || status);
			}
		    } catch (err) {
			log('error caught: ', err);
			status = 'error';
			xhr.error = errMsg = (err || status);
		    }
		    if (xhr.aborted) {
			log('upload aborted');
			status = null;
		    }
		    if (xhr.status) {
			status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
		    }
		    if (status === 'success') {
			if (s.success) {
			    s.success.call(s.context, data, 'success', xhr);
			}
			deferred.resolve(xhr.responseText, 'success', xhr);
			if (g) {
			    $.event.trigger("ajaxSuccess", [xhr, s]);
			}
		    } else if (status) {
			if (errMsg === undefined) {
			    errMsg = xhr.statusText;
			}
			if (s.error) {
			    s.error.call(s.context, xhr, status, errMsg);
			}
			deferred.reject(xhr, 'error', errMsg);
			if (g) {
			    $.event.trigger("ajaxError", [xhr, s, errMsg]);
			}
		    }
		    if (g) {
			$.event.trigger("ajaxComplete", [xhr, s]);
		    }
		    if (g && !--$.active) {
			$.event.trigger("ajaxStop");
		    }
		    if (s.complete) {
			s.complete.call(s.context, xhr, status);
		    }
		    callbackProcessed = true;
		    if (s.timeout) {
			clearTimeout(timeoutHandle);
		    }
		    setTimeout(function() {
			if (!s.iframeTarget) {
			    $io.remove();
			} else {
			    $io.attr('src', s.iframeSrc);
			}
			xhr.responseXML = null;
		    }, 100);
		}
		var toXml = $.parseXML || function(s, doc) {
		    if (window.ActiveXObject) {
			doc = new ActiveXObject('Microsoft.XMLDOM');
			doc.async = 'false';
			doc.loadXML(s);
		    } else {
			doc = (new DOMParser()).parseFromString(s, 'text/xml');
		    }
		    return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		}
		;
		var parseJSON = $.parseJSON || function(s) {
		    return window['eval']('(' + s + ')');
		}
		;
		var httpData = function(xhr, type, s) {
		    var ct = xhr.getResponseHeader('content-type') || ''
		      , xml = type === 'xml' || !type && ct.indexOf('xml') >= 0
		      , data = xml ? xhr.responseXML : xhr.responseText;
		    if (xml && data.documentElement.nodeName === 'parsererror') {
			if ($.error) {
			    $.error('parsererror');
			}
		    }
		    if (s && s.dataFilter) {
			data = s.dataFilter(data, type);
		    }
		    if (typeof data === 'string') {
			if (type === 'json' || !type && ct.indexOf('json') >= 0) {
			    data = parseJSON(data);
			} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
			    $.globalEval(data);
			}
		    }
		    return data;
		};
		return deferred;
	    }
	}
	;
	$.fn.ajaxForm = function(options) {
	    options = options || {};
	    options.delegation = options.delegation && $.isFunction($.fn.on);
	    if (!options.delegation && this.length === 0) {
		var o = {
		    s: this.selector,
		    c: this.context
		};
		if (!$.isReady && o.s) {
		    log('DOM not ready, queuing ajaxForm');
		    $(function() {
			$(o.s, o.c).ajaxForm(options);
		    });
		    return this;
		}
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	    }
	    if (options.delegation) {
		$(document).off('submit.form-plugin', this.selector, doAjaxSubmit).off('click.form-plugin', this.selector, captureSubmittingElement).on('submit.form-plugin', this.selector, options, doAjaxSubmit).on('click.form-plugin', this.selector, options, captureSubmittingElement);
		return this;
	    }
	    return this.ajaxFormUnbind().bind('submit.form-plugin', options, doAjaxSubmit).bind('click.form-plugin', options, captureSubmittingElement);
	}
	;
	function doAjaxSubmit(e) {
	    var options = e.data;
	    if (!e.isDefaultPrevented()) {
		e.preventDefault();
		$(e.target).ajaxSubmit(options);
	    }
	}
	function captureSubmittingElement(e) {
	    var target = e.target;
	    var $el = $(target);
	    if (!($el.is("[type=submit],[type=image]"))) {
		var t = $el.closest('[type=submit]');
		if (t.length === 0) {
		    return;
		}
		target = t[0];
	    }
	    var form = this;
	    form.clk = target;
	    if (target.type == 'image') {
		if (e.offsetX !== undefined) {
		    form.clk_x = e.offsetX;
		    form.clk_y = e.offsetY;
		} else if (typeof $.fn.offset == 'function') {
		    var offset = $el.offset();
		    form.clk_x = e.pageX - offset.left;
		    form.clk_y = e.pageY - offset.top;
		} else {
		    form.clk_x = e.pageX - target.offsetLeft;
		    form.clk_y = e.pageY - target.offsetTop;
		}
	    }
	    setTimeout(function() {
		form.clk = form.clk_x = form.clk_y = null;
	    }, 100);
	}
	$.fn.ajaxFormUnbind = function() {
	    return this.unbind('submit.form-plugin click.form-plugin');
	}
	;
	$.fn.formToArray = function(semantic, elements) {
	    var a = [];
	    if (this.length === 0) {
		return a;
	    }
	    var form = this[0];
	    var formId = this.attr('id');
	    var els = semantic ? form.getElementsByTagName('*') : form.elements;
	    var els2;
	    if (els && !/MSIE [678]/.test(navigator.userAgent)) {
		els = $(els).get();
	    }
	    if (formId) {
		els2 = $(':input[form="' + formId + '"]').get();
		if (els2.length) {
		    els = (els || []).concat(els2);
		}
	    }
	    if (!els || !els.length) {
		return a;
	    }
	    var i, j, n, v, el, max, jmax;
	    for (i = 0,
	    max = els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n || el.disabled) {
		    continue;
		}
		if (semantic && form.clk && el.type == "image") {
		    if (form.clk == el) {
			a.push({
			    name: n,
			    value: $(el).val(),
			    type: el.type
			});
			a.push({
			    name: n + '.x',
			    value: form.clk_x
			}, {
			    name: n + '.y',
			    value: form.clk_y
			});
		    }
		    continue;
		}
		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
		    if (elements) {
			elements.push(el);
		    }
		    for (j = 0,
		    jmax = v.length; j < jmax; j++) {
			a.push({
			    name: n,
			    value: v[j]
			});
		    }
		} else if (feature.fileapi && el.type == 'file') {
		    if (elements) {
			elements.push(el);
		    }
		    var files = el.files;
		    if (files.length) {
			for (j = 0; j < files.length; j++) {
			    a.push({
				name: n,
				value: files[j],
				type: el.type
			    });
			}
		    } else {
			a.push({
			    name: n,
			    value: '',
			    type: el.type
			});
		    }
		} else if (v !== null && typeof v != 'undefined') {
		    if (elements) {
			elements.push(el);
		    }
		    a.push({
			name: n,
			value: v,
			type: el.type,
			required: el.required
		    });
		}
	    }
	    if (!semantic && form.clk) {
		var $input = $(form.clk)
		  , input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
		    a.push({
			name: n,
			value: $input.val()
		    });
		    a.push({
			name: n + '.x',
			value: form.clk_x
		    }, {
			name: n + '.y',
			value: form.clk_y
		    });
		}
	    }
	    return a;
	}
	;
	$.fn.formSerialize = function(semantic) {
	    return $.param(this.formToArray(semantic));
	}
	;
	$.fn.fieldSerialize = function(successful) {
	    var a = [];
	    this.each(function() {
		var n = this.name;
		if (!n) {
		    return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
		    for (var i = 0, max = v.length; i < max; i++) {
			a.push({
			    name: n,
			    value: v[i]
			});
		    }
		} else if (v !== null && typeof v != 'undefined') {
		    a.push({
			name: this.name,
			value: v
		    });
		}
	    });
	    return $.param(a);
	}
	;
	$.fn.fieldValue = function(successful) {
	    for (var val = [], i = 0, max = this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
		    continue;
		}
		if (v.constructor == Array) {
		    $.merge(val, v);
		} else {
		    val.push(v);
		}
	    }
	    return val;
	}
	;
	$.fieldValue = function(el, successful) {
	    var n = el.name
	      , t = el.type
	      , tag = el.tagName.toLowerCase();
	    if (successful === undefined) {
		successful = true;
	    }
	    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) {
		return null;
	    }
	    if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
		    return null;
		}
		var a = []
		  , ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index + 1 : ops.length);
		for (var i = (one ? index : 0); i < max; i++) {
		    var op = ops[i];
		    if (op.selected) {
			var v = op.value;
			if (!v) {
			    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
			}
			if (one) {
			    return v;
			}
			a.push(v);
		    }
		}
		return a;
	    }
	    return $(el).val();
	}
	;
	$.fn.clearForm = function(includeHidden) {
	    return this.each(function() {
		$('input,select,textarea', this).clearFields(includeHidden);
	    });
	}
	;
	$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
	    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
	    return this.each(function() {
		var t = this.type
		  , tag = this.tagName.toLowerCase();
		if (re.test(t) || tag == 'textarea') {
		    this.value = '';
		} else if (t == 'checkbox' || t == 'radio') {
		    this.checked = false;
		} else if (tag == 'select') {
		    this.selectedIndex = -1;
		} else if (t == "file") {
		    if (/MSIE/.test(navigator.userAgent)) {
			$(this).replaceWith($(this).clone(true));
		    } else {
			$(this).val('');
		    }
		} else if (includeHidden) {
		    if ((includeHidden === true && /hidden/.test(t)) || (typeof includeHidden == 'string' && $(this).is(includeHidden))) {
			this.value = '';
		    }
		}
	    });
	}
	;
	$.fn.resetForm = function() {
	    return this.each(function() {
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
		    this.reset();
		}
	    });
	}
	;
	$.fn.enable = function(b) {
	    if (b === undefined) {
		b = true;
	    }
	    return this.each(function() {
		this.disabled = !b;
	    });
	}
	;
	$.fn.selected = function(select) {
	    if (select === undefined) {
		select = true;
	    }
	    return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
		    this.checked = select;
		} else if (this.tagName.toLowerCase() == 'option') {
		    var $sel = $(this).parent('select');
		    if (select && $sel[0] && $sel[0].type == 'select-one') {
			$sel.find('option').selected(false);
		    }
		    this.selected = select;
		}
	    });
	}
	;
	$.fn.ajaxSubmit.debug = false;
	function log() {
	    if (!$.fn.ajaxSubmit.debug) {
		return;
	    }
	    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
	    if (window.console && window.console.log) {
		window.console.log(msg);
	    } else if (window.opera && window.opera.postError) {
		window.opera.postError(msg);
	    }
	}
    }));
    ;(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
	    define(['jquery'], factory);
	} else {
	    factory(root.jQuery);
	}
    }(this, function($) {
	'use strict';
	var debug = false;
	var browser = {
	    data: {
		index: 0,
		name: 'scrollbar'
	    },
	    macosx: /mac/i.test(navigator.platform),
	    mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
	    overlay: null,
	    scroll: null,
	    scrolls: [],
	    webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
	};
	browser.scrolls.add = function(instance) {
	    this.remove(instance).push(instance);
	}
	;
	browser.scrolls.remove = function(instance) {
	    while ($.inArray(instance, this) >= 0) {
		this.splice($.inArray(instance, this), 1);
	    }
	    return this;
	}
	;
	var defaults = {
	    "autoScrollSize": true,
	    "autoUpdate": true,
	    "debug": false,
	    "disableBodyScroll": false,
	    "duration": 200,
	    "ignoreMobile": false,
	    "ignoreOverlay": false,
	    "scrollStep": 30,
	    "showArrows": false,
	    "stepScrolling": true,
	    "scrollx": null,
	    "scrolly": null,
	    "onDestroy": null,
	    "onInit": null,
	    "onScroll": null,
	    "onUpdate": null
	};
	var BaseScrollbar = function(container) {
	    if (!browser.scroll) {
		browser.overlay = isScrollOverlaysContent();
		browser.scroll = getBrowserScrollSize();
		updateScrollbars();
		$(window).resize(function() {
		    var forceUpdate = false;
		    if (browser.scroll && (browser.scroll.height || browser.scroll.width)) {
			var scroll = getBrowserScrollSize();
			if (scroll.height !== browser.scroll.height || scroll.width !== browser.scroll.width) {
			    browser.scroll = scroll;
			    forceUpdate = true;
			}
		    }
		    updateScrollbars(forceUpdate);
		});
	    }
	    this.container = container;
	    this.namespace = '.scrollbar_' + browser.data.index++;
	    this.options = $.extend({}, defaults, window.jQueryScrollbarOptions || {});
	    this.scrollTo = null;
	    this.scrollx = {};
	    this.scrolly = {};
	    container.data(browser.data.name, this);
	    browser.scrolls.add(this);
	};
	BaseScrollbar.prototype = {
	    destroy: function() {
		if (!this.wrapper) {
		    return;
		}
		this.container.removeData(browser.data.name);
		browser.scrolls.remove(this);
		var scrollLeft = this.container.scrollLeft();
		var scrollTop = this.container.scrollTop();
		this.container.insertBefore(this.wrapper).css({
		    "height": "",
		    "margin": "",
		    "max-height": ""
		}).removeClass('scroll-content scroll-scrollx_visible scroll-scrolly_visible').off(this.namespace).scrollLeft(scrollLeft).scrollTop(scrollTop);
		this.scrollx.scroll.removeClass('scroll-scrollx_visible').find('div').andSelf().off(this.namespace);
		this.scrolly.scroll.removeClass('scroll-scrolly_visible').find('div').andSelf().off(this.namespace);
		this.wrapper.remove();
		$(document).add('body').off(this.namespace);
		if ($.isFunction(this.options.onDestroy)) {
		    this.options.onDestroy.apply(this, [this.container]);
		}
	    },
	    init: function(options) {
		var S = this
		  , c = this.container
		  , cw = this.containerWrapper || c
		  , namespace = this.namespace
		  , o = $.extend(this.options, options || {})
		  , s = {
		    x: this.scrollx,
		    y: this.scrolly
		}
		  , w = this.wrapper;
		var initScroll = {
		    "scrollLeft": c.scrollLeft(),
		    "scrollTop": c.scrollTop()
		};
		if ((browser.mobile && o.ignoreMobile) || (browser.overlay && o.ignoreOverlay) || (browser.macosx && !browser.webkit)) {
		    return false;
		}
		if (!w) {
		    this.wrapper = w = $('<div>').addClass('scroll-wrapper').addClass(c.attr('class')).css('position', c.css('position') == 'absolute' ? 'absolute' : 'relative').insertBefore(c).append(c);
		    if (c.is('textarea')) {
			this.containerWrapper = cw = $('<div>').insertBefore(c).append(c);
			w.addClass('scroll-textarea');
		    }
		    cw.removeClass(c.attr("class"));
		    cw.addClass('scroll-content').css({
			"height": "auto",
			"margin-bottom": browser.scroll.height * -1 + 'px',
			"margin-right": browser.scroll.width * -1 + 'px',
			"max-height": ""
		    });
		    c.on('scroll' + namespace, function(event) {
			if ($.isFunction(o.onScroll)) {
			    o.onScroll.call(S, {
				"maxScroll": s.y.maxScrollOffset,
				"scroll": c.scrollTop(),
				"size": s.y.size,
				"visible": s.y.visible
			    }, {
				"maxScroll": s.x.maxScrollOffset,
				"scroll": c.scrollLeft(),
				"size": s.x.size,
				"visible": s.x.visible
			    });
			}
			s.x.isVisible && s.x.scroll.bar.css('left', c.scrollLeft() * s.x.kx + 'px');
			s.y.isVisible && s.y.scroll.bar.css('top', c.scrollTop() * s.y.kx + 'px');
		    });
		    w.on('scroll' + namespace, function() {
			w.scrollTop(0).scrollLeft(0);
		    });
		    if (o.disableBodyScroll) {
			var handleMouseScroll = function(event) {
			    isVerticalScroll(event) ? s.y.isVisible && s.y.mousewheel(event) : s.x.isVisible && s.x.mousewheel(event);
			};
			w.on('MozMousePixelScroll' + namespace, handleMouseScroll);
			w.on('mousewheel' + namespace, handleMouseScroll);
			if (browser.mobile) {
			    w.on('touchstart' + namespace, function(event) {
				var touch = event.originalEvent.touches && event.originalEvent.touches[0] || event;
				var originalTouch = {
				    "pageX": touch.pageX,
				    "pageY": touch.pageY
				};
				var originalScroll = {
				    "left": c.scrollLeft(),
				    "top": c.scrollTop()
				};
				$(document).on('touchmove' + namespace, function(event) {
				    var touch = event.originalEvent.targetTouches && event.originalEvent.targetTouches[0] || event;
				    c.scrollLeft(originalScroll.left + originalTouch.pageX - touch.pageX);
				    c.scrollTop(originalScroll.top + originalTouch.pageY - touch.pageY);
				    event.preventDefault();
				});
				$(document).on('touchend' + namespace, function() {
				    $(document).off(namespace);
				});
			    });
			}
		    }
		    if ($.isFunction(o.onInit)) {
			o.onInit.apply(this, [c]);
		    }
		} else {
		    cw.css({
			"height": "auto",
			"margin-bottom": browser.scroll.height * -1 + 'px',
			"margin-right": browser.scroll.width * -1 + 'px',
			"max-height": ""
		    });
		}
		$.each(s, function(d, scrollx) {
		    var scrollCallback = null;
		    var scrollForward = 1;
		    var scrollOffset = (d === 'x') ? 'scrollLeft' : 'scrollTop';
		    var scrollStep = o.scrollStep;
		    var scrollTo = function() {
			var currentOffset = c[scrollOffset]();
			c[scrollOffset](currentOffset + scrollStep);
			if (scrollForward == 1 && (currentOffset + scrollStep) >= scrollToValue)
			    currentOffset = c[scrollOffset]();
			if (scrollForward == -1 && (currentOffset + scrollStep) <= scrollToValue)
			    currentOffset = c[scrollOffset]();
			if (c[scrollOffset]() == currentOffset && scrollCallback) {
			    scrollCallback();
			}
		    }
		    var scrollToValue = 0;
		    if (!scrollx.scroll) {
			scrollx.scroll = S._getScroll(o['scroll' + d]).addClass('scroll-' + d);
			if (o.showArrows) {
			    scrollx.scroll.addClass('scroll-element_arrows_visible');
			}
			scrollx.mousewheel = function(event) {
			    if (!scrollx.isVisible || (d === 'x' && isVerticalScroll(event))) {
				return true;
			    }
			    if (d === 'y' && !isVerticalScroll(event)) {
				s.x.mousewheel(event);
				return true;
			    }
			    var delta = event.originalEvent.wheelDelta * -1 || event.originalEvent.detail;
			    var maxScrollValue = scrollx.size - scrollx.visible - scrollx.offset;
			    if ((delta > 0 && scrollToValue < maxScrollValue) || (delta < 0 && scrollToValue > 0)) {
				scrollToValue = scrollToValue + delta;
				if (scrollToValue < 0)
				    scrollToValue = 0;
				if (scrollToValue > maxScrollValue)
				    scrollToValue = maxScrollValue;
				S.scrollTo = S.scrollTo || {};
				S.scrollTo[scrollOffset] = scrollToValue;
				setTimeout(function() {
				    if (S.scrollTo) {
					c.stop().animate(S.scrollTo, 240, 'linear', function() {
					    scrollToValue = c[scrollOffset]();
					});
					S.scrollTo = null;
				    }
				}, 1);
			    }
			    event.preventDefault();
			    return false;
			}
			;
			scrollx.scroll.on('MozMousePixelScroll' + namespace, scrollx.mousewheel).on('mousewheel' + namespace, scrollx.mousewheel).on('mouseenter' + namespace, function() {
			    scrollToValue = c[scrollOffset]();
			});
			scrollx.scroll.find('.scroll-arrow, .scroll-element_track').on('mousedown' + namespace, function(event) {
			    if (event.which != 1)
				return true;
			    scrollForward = 1;
			    var data = {
				"eventOffset": event[(d === 'x') ? 'pageX' : 'pageY'],
				"maxScrollValue": scrollx.size - scrollx.visible - scrollx.offset,
				"scrollbarOffset": scrollx.scroll.bar.offset()[(d === 'x') ? 'left' : 'top'],
				"scrollbarSize": scrollx.scroll.bar[(d === 'x') ? 'outerWidth' : 'outerHeight']()
			    };
			    var timeout = 0
			      , timer = 0;
			    if ($(this).hasClass('scroll-arrow')) {
				scrollForward = $(this).hasClass("scroll-arrow_more") ? 1 : -1;
				scrollStep = o.scrollStep * scrollForward;
				scrollToValue = scrollForward > 0 ? data.maxScrollValue : 0;
			    } else {
				scrollForward = (data.eventOffset > (data.scrollbarOffset + data.scrollbarSize) ? 1 : (data.eventOffset < data.scrollbarOffset ? -1 : 0));
				scrollStep = Math.round(scrollx.visible * 0.75) * scrollForward;
				scrollToValue = (data.eventOffset - data.scrollbarOffset - (o.stepScrolling ? (scrollForward == 1 ? data.scrollbarSize : 0) : Math.round(data.scrollbarSize / 2)));
				scrollToValue = c[scrollOffset]() + (scrollToValue / scrollx.kx);
			    }
			    S.scrollTo = S.scrollTo || {};
			    S.scrollTo[scrollOffset] = o.stepScrolling ? c[scrollOffset]() + scrollStep : scrollToValue;
			    if (o.stepScrolling) {
				scrollCallback = function() {
				    scrollToValue = c[scrollOffset]();
				    clearInterval(timer);
				    clearTimeout(timeout);
				    timeout = 0;
				    timer = 0;
				}
				;
				timeout = setTimeout(function() {
				    timer = setInterval(scrollTo, 40);
				}, o.duration + 100);
			    }
			    setTimeout(function() {
				if (S.scrollTo) {
				    c.animate(S.scrollTo, o.duration);
				    S.scrollTo = null;
				}
			    }, 1);
			    return S._handleMouseDown(scrollCallback, event);
			});
			scrollx.scroll.bar.on('mousedown' + namespace, function(event) {
			    if (event.which != 1)
				return true;
			    var eventPosition = event[(d === 'x') ? 'pageX' : 'pageY'];
			    var initOffset = c[scrollOffset]();
			    scrollx.scroll.addClass('scroll-draggable');
			    $(document).on('mousemove' + namespace, function(event) {
				var diff = parseInt((event[(d === 'x') ? 'pageX' : 'pageY'] - eventPosition) / scrollx.kx, 10);
				c[scrollOffset](initOffset + diff);
			    });
			    return S._handleMouseDown(function() {
				scrollx.scroll.removeClass('scroll-draggable');
				scrollToValue = c[scrollOffset]();
			    }, event);
			});
		    }
		});
		$.each(s, function(d, scrollx) {
		    var scrollClass = 'scroll-scroll' + d + '_visible';
		    var scrolly = (d == "x") ? s.y : s.x;
		    scrollx.scroll.removeClass(scrollClass);
		    scrolly.scroll.removeClass(scrollClass);
		    cw.removeClass(scrollClass);
		});
		$.each(s, function(d, scrollx) {
		    $.extend(scrollx, (d == "x") ? {
			"offset": parseInt(c.css('left'), 10) || 0,
			"size": c.prop('scrollWidth'),
			"visible": w.width()
		    } : {
			"offset": parseInt(c.css('top'), 10) || 0,
			"size": c.prop('scrollHeight'),
			"visible": w.height()
		    });
		});
		this._updateScroll('x', this.scrollx);
		this._updateScroll('y', this.scrolly);
		if ($.isFunction(o.onUpdate)) {
		    o.onUpdate.apply(this, [c]);
		}
		$.each(s, function(d, scrollx) {
		    var cssOffset = (d === 'x') ? 'left' : 'top';
		    var cssFullSize = (d === 'x') ? 'outerWidth' : 'outerHeight';
		    var cssSize = (d === 'x') ? 'width' : 'height';
		    var offset = parseInt(c.css(cssOffset), 10) || 0;
		    var AreaSize = scrollx.size;
		    var AreaVisible = scrollx.visible + offset;
		    var scrollSize = scrollx.scroll.size[cssFullSize]() + (parseInt(scrollx.scroll.size.css(cssOffset), 10) || 0);
		    if (o.autoScrollSize) {
			scrollx.scrollbarSize = parseInt(scrollSize * AreaVisible / AreaSize, 10);
			scrollx.scroll.bar.css(cssSize, scrollx.scrollbarSize + 'px');
		    }
		    scrollx.scrollbarSize = scrollx.scroll.bar[cssFullSize]();
		    scrollx.kx = ((scrollSize - scrollx.scrollbarSize) / (AreaSize - AreaVisible)) || 1;
		    scrollx.maxScrollOffset = AreaSize - AreaVisible;
		});
		c.scrollLeft(initScroll.scrollLeft).scrollTop(initScroll.scrollTop).trigger('scroll');
	    },
	    _getScroll: function(scroll) {
		var types = {
		    advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', '</div>', '</div>', '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', '</div>', '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', '</div>', '</div>', '</div>'].join(''),
		    simple: ['<div class="scroll-element" s>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', '</div>', '</div>'].join('')
		};
		if (types[scroll]) {
		    scroll = types[scroll];
		}
		if (!scroll) {
		    scroll = types['simple'];
		}
		if (typeof (scroll) == 'string') {
		    scroll = $(scroll).appendTo(this.wrapper);
		} else {
		    scroll = $(scroll);
		}
		$.extend(scroll, {
		    bar: scroll.find('.scroll-bar'),
		    size: scroll.find('.scroll-element_size'),
		    track: scroll.find('.scroll-element_track')
		});
		return scroll;
	    },
	    _handleMouseDown: function(callback, event) {
		var namespace = this.namespace;
		$(document).on('blur' + namespace, function() {
		    $(document).add('body').off(namespace);
		    callback && callback();
		});
		$(document).on('dragstart' + namespace, function(event) {
		    event.preventDefault();
		    return false;
		});
		$(document).on('mouseup' + namespace, function() {
		    $(document).add('body').off(namespace);
		    callback && callback();
		});
		$('body').on('selectstart' + namespace, function(event) {
		    event.preventDefault();
		    return false;
		});
		event && event.preventDefault();
		return false;
	    },
	    _updateScroll: function(d, scrollx) {
		var container = this.container
		  , containerWrapper = this.containerWrapper || container
		  , scrollClass = 'scroll-scroll' + d + '_visible'
		  , scrolly = (d === 'x') ? this.scrolly : this.scrollx
		  , offset = parseInt(this.container.css((d === 'x') ? 'left' : 'top'), 10) || 0
		  , wrapper = this.wrapper;
		var AreaSize = scrollx.size;
		var AreaVisible = scrollx.visible + offset;
		scrollx.isVisible = (AreaSize - AreaVisible) > 1;
		if (scrollx.isVisible) {
		    scrollx.scroll.addClass(scrollClass);
		    scrolly.scroll.addClass(scrollClass);
		    containerWrapper.addClass(scrollClass);
		} else {
		    scrollx.scroll.removeClass(scrollClass);
		    scrolly.scroll.removeClass(scrollClass);
		    containerWrapper.removeClass(scrollClass);
		}
		if (d === 'y') {
		    if (container.is('textarea') || AreaSize < AreaVisible) {
			containerWrapper.css({
			    "height": (AreaVisible + browser.scroll.height) + 'px',
			    "max-height": "none"
			});
		    } else {
			containerWrapper.css({
			    "max-height": (AreaVisible + browser.scroll.height) + 'px'
			});
		    }
		}
		if (scrollx.size != container.prop('scrollWidth') || scrolly.size != container.prop('scrollHeight') || scrollx.visible != wrapper.width() || scrolly.visible != wrapper.height() || scrollx.offset != (parseInt(container.css('left'), 10) || 0) || scrolly.offset != (parseInt(container.css('top'), 10) || 0)) {
		    $.extend(this.scrollx, {
			"offset": parseInt(container.css('left'), 10) || 0,
			"size": container.prop('scrollWidth'),
			"visible": wrapper.width()
		    });
		    $.extend(this.scrolly, {
			"offset": parseInt(container.css('top'), 10) || 0,
			"size": this.container.prop('scrollHeight'),
			"visible": wrapper.height()
		    });
		    this._updateScroll(d === 'x' ? 'y' : 'x', scrolly);
		}
	    }
	};
	var CustomScrollbar = BaseScrollbar;
	$.fn.scrollbar = function(command, args) {
	    if (typeof command !== 'string') {
		args = command;
		command = 'init';
	    }
	    if (typeof args === 'undefined') {
		args = [];
	    }
	    if (!$.isArray(args)) {
		args = [args];
	    }
	    this.not('body, .scroll-wrapper').each(function() {
		var element = $(this)
		  , instance = element.data(browser.data.name);
		if (instance || command === 'init') {
		    if (!instance) {
			instance = new CustomScrollbar(element);
		    }
		    if (instance[command]) {
			instance[command].apply(instance, args);
		    }
		}
	    });
	    return this;
	}
	;
	$.fn.scrollbar.options = defaults;
	var updateScrollbars = (function() {
	    var timer = 0
	      , timerCounter = 0;
	    return function(force) {
		var i, container, options, scroll, wrapper, scrollx, scrolly;
		for (i = 0; i < browser.scrolls.length; i++) {
		    scroll = browser.scrolls[i];
		    container = scroll.container;
		    options = scroll.options;
		    wrapper = scroll.wrapper;
		    scrollx = scroll.scrollx;
		    scrolly = scroll.scrolly;
		    if (force || (options.autoUpdate && wrapper && wrapper.is(':visible') && (container.prop('scrollWidth') != scrollx.size || container.prop('scrollHeight') != scrolly.size || wrapper.width() != scrollx.visible || wrapper.height() != scrolly.visible))) {
			scroll.init();
			if (options.debug) {
			    window.console && console.log({
				scrollHeight: container.prop('scrollHeight') + ':' + scroll.scrolly.size,
				scrollWidth: container.prop('scrollWidth') + ':' + scroll.scrollx.size,
				visibleHeight: wrapper.height() + ':' + scroll.scrolly.visible,
				visibleWidth: wrapper.width() + ':' + scroll.scrollx.visible
			    }, true);
			    timerCounter++;
			}
		    }
		}
		if (debug && timerCounter > 10) {
		    window.console && console.log('Scroll updates exceed 10');
		    updateScrollbars = function() {}
		    ;
		} else {
		    clearTimeout(timer);
		    timer = setTimeout(updateScrollbars, 300);
		}
	    }
	    ;
	}
	)();
	function getBrowserScrollSize(actualSize) {
	    if (browser.webkit && !actualSize) {
		return {
		    "height": 0,
		    "width": 0
		};
	    }
	    if (!browser.data.outer) {
		var css = {
		    "border": "none",
		    "box-sizing": "content-box",
		    "height": "200px",
		    "margin": "0",
		    "padding": "0",
		    "width": "200px"
		};
		browser.data.inner = $("<div>").css($.extend({}, css));
		browser.data.outer = $("<div>").css($.extend({
		    "left": "-1000px",
		    "overflow": "scroll",
		    "position": "absolute",
		    "top": "-1000px"
		}, css)).append(browser.data.inner).appendTo("body");
	    }
	    browser.data.outer.scrollLeft(1000).scrollTop(1000);
	    return {
		"height": Math.ceil((browser.data.outer.offset().top - browser.data.inner.offset().top) || 0),
		"width": Math.ceil((browser.data.outer.offset().left - browser.data.inner.offset().left) || 0)
	    };
	}
	function isScrollOverlaysContent() {
	    var scrollSize = getBrowserScrollSize(true);
	    return !(scrollSize.height || scrollSize.width);
	}
	function isVerticalScroll(event) {
	    var e = event.originalEvent;
	    if (e.axis && e.axis === e.HORIZONTAL_AXIS)
		return false;
	    if (e.wheelDeltaX)
		return false;
	    return true;
	}
	if (window.angular) {
	    (function(angular) {
		angular.module('jQueryScrollbar', []).provider('jQueryScrollbar', function() {
		    var defaultOptions = defaults;
		    return {
			setOptions: function(options) {
			    angular.extend(defaultOptions, options);
			},
			$get: function() {
			    return {
				options: angular.copy(defaultOptions)
			    };
			}
		    };
		}).directive('jqueryScrollbar', ['jQueryScrollbar', '$parse', function(jQueryScrollbar, $parse) {
		    return {
			"restrict": "AC",
			"link": function(scope, element, attrs) {
			    var model = $parse(attrs.jqueryScrollbar)
			      , options = model(scope);
			    element.scrollbar(options || jQueryScrollbar.options).on('$destroy', function() {
				element.scrollbar('destroy');
			    });
			}
		    };
		}
		]);
	    }
	    )(window.angular);
	}
    }));
    (function(global, factory) {
	if (typeof define === 'function' && define.amd) {
	    define(['exports', 'module'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	} else {
	    var mod = {
		exports: {}
	    };
	    factory(mod.exports, mod);
	    global.autosize = mod.exports;
	}
    }
    )(this, function(exports, module) {
	'use strict';
	var map = typeof Map === 'function' ? new Map() : (function() {
	    var keys = [];
	    var values = [];
	    return {
		has: function has(key) {
		    return keys.indexOf(key) > -1;
		},
		get: function get(key) {
		    return values[keys.indexOf(key)];
		},
		set: function set(key, value) {
		    if (keys.indexOf(key) === -1) {
			keys.push(key);
			values.push(value);
		    }
		},
		'delete': function _delete(key) {
		    var index = keys.indexOf(key);
		    if (index > -1) {
			keys.splice(index, 1);
			values.splice(index, 1);
		    }
		}
	    };
	}
	)();
	var createEvent = function createEvent(name) {
	    return new Event(name);
	};
	try {
	    new Event('test');
	} catch (e) {
	    createEvent = function(name) {
		var evt = document.createEvent('Event');
		evt.initEvent(name, true, false);
		return evt;
	    }
	    ;
	}
	function assign(ta) {
	    if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta))
		return;
	    var heightOffset = null;
	    var clientWidth = ta.clientWidth;
	    var cachedHeight = null;
	    function init() {
		var style = window.getComputedStyle(ta, null);
		if (style.resize === 'vertical') {
		    ta.style.resize = 'none';
		} else if (style.resize === 'both') {
		    ta.style.resize = 'horizontal';
		}
		if (style.boxSizing === 'content-box') {
		    heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
		} else {
		    heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		}
		if (isNaN(heightOffset)) {
		    heightOffset = 0;
		}
		update();
	    }
	    function changeOverflow(value) {
		{
		    var width = ta.style.width;
		    ta.style.width = '0px';
		    ta.offsetWidth;
		    ta.style.width = width;
		}
		ta.style.overflowY = value;
		resize();
	    }
	    function getParentOverflows(el) {
		var arr = [];
		while (el && el.parentNode && el.parentNode instanceof Element) {
		    if (el.parentNode.scrollTop) {
			arr.push({
			    node: el.parentNode,
			    scrollTop: el.parentNode.scrollTop
			});
		    }
		    el = el.parentNode;
		}
		return arr;
	    }
	    function resize() {
		var originalHeight = ta.style.height;
		var overflows = getParentOverflows(ta);
		var docTop = document.documentElement && document.documentElement.scrollTop;
		ta.style.height = 'auto';
		var endHeight = ta.scrollHeight + heightOffset;
		if (ta.scrollHeight === 0) {
		    ta.style.height = originalHeight;
		    return;
		}
		ta.style.height = endHeight + 'px';
		clientWidth = ta.clientWidth;
		overflows.forEach(function(el) {
		    el.node.scrollTop = el.scrollTop;
		});
		if (docTop) {
		    document.documentElement.scrollTop = docTop;
		}
	    }
	    function update() {
		resize();
		var computed = window.getComputedStyle(ta, null);
		var computedHeight = Math.round(parseFloat(computed.height));
		var styleHeight = Math.round(parseFloat(ta.style.height));
		if (computedHeight !== styleHeight) {
		    if (computed.overflowY !== 'visible') {
			changeOverflow('visible');
		    }
		} else {
		    if (computed.overflowY !== 'hidden') {
			changeOverflow('hidden');
		    }
		}
		if (cachedHeight !== computedHeight) {
		    cachedHeight = computedHeight;
		    var evt = createEvent('autosize:resized');
		    try {
			ta.dispatchEvent(evt);
		    } catch (err) {}
		}
	    }
	    var pageResize = function pageResize() {
		if (ta.clientWidth !== clientWidth) {
		    update();
		}
	    };
	    var destroy = (function(style) {
		window.removeEventListener('resize', pageResize, false);
		ta.removeEventListener('input', update, false);
		ta.removeEventListener('keyup', update, false);
		ta.removeEventListener('autosize:destroy', destroy, false);
		ta.removeEventListener('autosize:update', update, false);
		Object.keys(style).forEach(function(key) {
		    ta.style[key] = style[key];
		});
		map['delete'](ta);
	    }
	    ).bind(ta, {
		height: ta.style.height,
		resize: ta.style.resize,
		overflowY: ta.style.overflowY,
		overflowX: ta.style.overflowX,
		wordWrap: ta.style.wordWrap
	    });
	    ta.addEventListener('autosize:destroy', destroy, false);
	    if ('onpropertychange'in ta && 'oninput'in ta) {
		ta.addEventListener('keyup', update, false);
	    }
	    window.addEventListener('resize', pageResize, false);
	    ta.addEventListener('input', update, false);
	    ta.addEventListener('autosize:update', update, false);
	    ta.style.overflowX = 'hidden';
	    ta.style.wordWrap = 'break-word';
	    map.set(ta, {
		destroy: destroy,
		update: update
	    });
	    init();
	}
	function destroy(ta) {
	    var methods = map.get(ta);
	    if (methods) {
		methods.destroy();
	    }
	}
	function update(ta) {
	    var methods = map.get(ta);
	    if (methods) {
		methods.update();
	    }
	}
	var autosize = null;
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
	    autosize = function(el) {
		return el;
	    }
	    ;
	    autosize.destroy = function(el) {
		return el;
	    }
	    ;
	    autosize.update = function(el) {
		return el;
	    }
	    ;
	} else {
	    autosize = function(el, options) {
		if (el) {
		    Array.prototype.forEach.call(el.length ? el : [el], function(x) {
			return assign(x, options);
		    });
		}
		return el;
	    }
	    ;
	    autosize.destroy = function(el) {
		if (el) {
		    Array.prototype.forEach.call(el.length ? el : [el], destroy);
		}
		return el;
	    }
	    ;
	    autosize.update = function(el) {
		if (el) {
		    Array.prototype.forEach.call(el.length ? el : [el], update);
		}
		return el;
	    }
	    ;
	}
	module.exports = autosize;
    });
    !function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e()
    }(this, function() {
	"use strict";
	function t(t) {
	    return "function" == typeof t || "object" == typeof t && null !== t
	}
	function e(t) {
	    return "function" == typeof t
	}
	function n(t) {
	    I = t
	}
	function r(t) {
	    J = t
	}
	function o() {
	    return function() {
		return process.nextTick(a)
	    }
	}
	function i() {
	    return "undefined" != typeof H ? function() {
		H(a)
	    }
	    : c()
	}
	function s() {
	    var t = 0
	      , e = new V(a)
	      , n = document.createTextNode("");
	    return e.observe(n, {
		characterData: !0
	    }),
	    function() {
		n.data = t = ++t % 2
	    }
	}
	function u() {
	    var t = new MessageChannel;
	    return t.port1.onmessage = a,
	    function() {
		return t.port2.postMessage(0)
	    }
	}
	function c() {
	    var t = setTimeout;
	    return function() {
		return t(a, 1)
	    }
	}
	function a() {
	    for (var t = 0; t < G; t += 2) {
		var e = $[t]
		  , n = $[t + 1];
		e(n),
		$[t] = void 0,
		$[t + 1] = void 0
	    }
	    G = 0
	}
	function f() {
	    try {
		var t = require
		  , e = t("vertx");
		return H = e.runOnLoop || e.runOnContext,
		i()
	    } catch (n) {
		return c()
	    }
	}
	function l(t, e) {
	    var n = arguments
	      , r = this
	      , o = new this.constructor(p);
	    void 0 === o[et] && k(o);
	    var i = r._state;
	    return i ? !function() {
		var t = n[i - 1];
		J(function() {
		    return x(i, o, t, r._result)
		})
	    }() : E(r, o, t, e),
	    o
	}
	function h(t) {
	    var e = this;
	    if (t && "object" == typeof t && t.constructor === e)
		return t;
	    var n = new e(p);
	    return g(n, t),
	    n
	}
	function p() {}
	function v() {
	    return new TypeError("You cannot resolve a promise with itself")
	}
	function d() {
	    return new TypeError("A promises callback cannot return that same promise.")
	}
	function _(t) {
	    try {
		return t.then
	    } catch (e) {
		return it.error = e,
		it
	    }
	}
	function y(t, e, n, r) {
	    try {
		t.call(e, n, r)
	    } catch (o) {
		return o
	    }
	}
	function m(t, e, n) {
	    J(function(t) {
		var r = !1
		  , o = y(n, e, function(n) {
		    r || (r = !0,
		    e !== n ? g(t, n) : S(t, n))
		}, function(e) {
		    r || (r = !0,
		    j(t, e))
		}, "Settle: " + (t._label || " unknown promise"));
		!r && o && (r = !0,
		j(t, o))
	    }, t)
	}
	function b(t, e) {
	    e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function(e) {
		return g(t, e)
	    }, function(e) {
		return j(t, e)
	    })
	}
	function w(t, n, r) {
	    n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? j(t, it.error) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n)
	}
	function g(e, n) {
	    e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n)
	}
	function A(t) {
	    t._onerror && t._onerror(t._result),
	    P(t)
	}
	function S(t, e) {
	    t._state === nt && (t._result = e,
	    t._state = rt,
	    0 !== t._subscribers.length && J(P, t))
	}
	function j(t, e) {
	    t._state === nt && (t._state = ot,
	    t._result = e,
	    J(A, t))
	}
	function E(t, e, n, r) {
	    var o = t._subscribers
	      , i = o.length;
	    t._onerror = null,
	    o[i] = e,
	    o[i + rt] = n,
	    o[i + ot] = r,
	    0 === i && t._state && J(P, t)
	}
	function P(t) {
	    var e = t._subscribers
	      , n = t._state;
	    if (0 !== e.length) {
		for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3)
		    r = e[s],
		    o = e[s + n],
		    r ? x(n, r, o, i) : o(i);
		t._subscribers.length = 0
	    }
	}
	function T() {
	    this.error = null
	}
	function M(t, e) {
	    try {
		return t(e)
	    } catch (n) {
		return st.error = n,
		st
	    }
	}
	function x(t, n, r, o) {
	    var i = e(r)
	      , s = void 0
	      , u = void 0
	      , c = void 0
	      , a = void 0;
	    if (i) {
		if (s = M(r, o),
		s === st ? (a = !0,
		u = s.error,
		s = null) : c = !0,
		n === s)
		    return void j(n, d())
	    } else
		s = o,
		c = !0;
	    n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s))
	}
	function C(t, e) {
	    try {
		e(function(e) {
		    g(t, e)
		}, function(e) {
		    j(t, e)
		})
	    } catch (n) {
		j(t, n)
	    }
	}
	function O() {
	    return ut++
	}
	function k(t) {
	    t[et] = ut++,
	    t._state = void 0,
	    t._result = void 0,
	    t._subscribers = []
	}
	function Y(t, e) {
	    this._instanceConstructor = t,
	    this.promise = new t(p),
	    this.promise[et] || k(this.promise),
	    B(e) ? (this._input = e,
	    this.length = e.length,
	    this._remaining = e.length,
	    this._result = new Array(this.length),
	    0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0,
	    this._enumerate(),
	    0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q())
	}
	function q() {
	    return new Error("Array Methods must be provided an Array")
	}
	function F(t) {
	    return new Y(this,t).promise
	}
	function D(t) {
	    var e = this;
	    return new e(B(t) ? function(n, r) {
		for (var o = t.length, i = 0; i < o; i++)
		    e.resolve(t[i]).then(n, r)
	    }
	    : function(t, e) {
		return e(new TypeError("You must pass an array to race."))
	    }
	    )
	}
	function K(t) {
	    var e = this
	      , n = new e(p);
	    return j(n, t),
	    n
	}
	function L() {
	    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
	}
	function N() {
	    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
	}
	function U(t) {
	    this[et] = O(),
	    this._result = this._state = void 0,
	    this._subscribers = [],
	    p !== t && ("function" != typeof t && L(),
	    this instanceof U ? C(this, t) : N())
	}
	function W() {
	    var t = void 0;
	    if ("undefined" != typeof global)
		t = global;
	    else if ("undefined" != typeof self)
		t = self;
	    else
		try {
		    t = Function("return this")()
		} catch (e) {
		    throw new Error("polyfill failed because global object is unavailable in this environment")
		}
	    var n = t.Promise;
	    if (n) {
		var r = null;
		try {
		    r = Object.prototype.toString.call(n.resolve())
		} catch (e) {}
		if ("[object Promise]" === r && !n.cast)
		    return
	    }
	    t.Promise = U
	}
	var z = void 0;
	z = Array.isArray ? Array.isArray : function(t) {
	    return "[object Array]" === Object.prototype.toString.call(t)
	}
	;
	var B = z
	  , G = 0
	  , H = void 0
	  , I = void 0
	  , J = function(t, e) {
	    $[G] = t,
	    $[G + 1] = e,
	    G += 2,
	    2 === G && (I ? I(a) : tt())
	}
	  , Q = "undefined" != typeof window ? window : void 0
	  , R = Q || {}
	  , V = R.MutationObserver || R.WebKitMutationObserver
	  , X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
	  , Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
	  , $ = new Array(1e3)
	  , tt = void 0;
	tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c();
	var et = Math.random().toString(36).substring(16)
	  , nt = void 0
	  , rt = 1
	  , ot = 2
	  , it = new T
	  , st = new T
	  , ut = 0;
	return Y.prototype._enumerate = function() {
	    for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++)
		this._eachEntry(e[n], n)
	}
	,
	Y.prototype._eachEntry = function(t, e) {
	    var n = this._instanceConstructor
	      , r = n.resolve;
	    if (r === h) {
		var o = _(t);
		if (o === l && t._state !== nt)
		    this._settledAt(t._state, e, t._result);
		else if ("function" != typeof o)
		    this._remaining--,
		    this._result[e] = t;
		else if (n === U) {
		    var i = new n(p);
		    w(i, t, o),
		    this._willSettleAt(i, e)
		} else
		    this._willSettleAt(new n(function(e) {
			return e(t)
		    }
		    ), e)
	    } else
		this._willSettleAt(r(t), e)
	}
	,
	Y.prototype._settledAt = function(t, e, n) {
	    var r = this.promise;
	    r._state === nt && (this._remaining--,
	    t === ot ? j(r, n) : this._result[e] = n),
	    0 === this._remaining && S(r, this._result)
	}
	,
	Y.prototype._willSettleAt = function(t, e) {
	    var n = this;
	    E(t, void 0, function(t) {
		return n._settledAt(rt, e, t)
	    }, function(t) {
		return n._settledAt(ot, e, t)
	    })
	}
	,
	U.all = F,
	U.race = D,
	U.resolve = h,
	U.reject = K,
	U._setScheduler = n,
	U._setAsap = r,
	U._asap = J,
	U.prototype = {
	    constructor: U,
	    then: l,
	    "catch": function(t) {
		return this.then(null, t)
	    }
	},
	U.polyfill = W,
	U.Promise = U,
	U
    }),
    ES6Promise.polyfill();
    (function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.Sweetalert2 = factory());
    }(this, (function() {
	'use strict';
	var swalPrefix = 'swal2-';
	var prefix = function prefix(items) {
	    var result = {};
	    for (var i in items) {
		result[items[i]] = swalPrefix + items[i];
	    }
	    return result;
	};
	var swalClasses = prefix(['container', 'in', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'spacer', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);
	var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
	var defaultParams = {
	    title: '',
	    text: '',
	    html: '',
	    type: null,
	    customClass: '',
	    animation: true,
	    allowOutsideClick: true,
	    allowEscapeKey: true,
	    showConfirmButton: true,
	    showCancelButton: false,
	    preConfirm: null,
	    confirmButtonText: lang.done_button_label,
	    confirmButtonColor: '#3085d6',
	    confirmButtonClass: null,
	    cancelButtonText: 'Cancel',
	    cancelButtonColor: '#aaa',
	    cancelButtonClass: null,
	    buttonsStyling: true,
	    reverseButtons: false,
	    focusCancel: false,
	    showCloseButton: false,
	    showLoaderOnConfirm: false,
	    imageUrl: null,
	    imageWidth: null,
	    imageHeight: null,
	    imageClass: null,
	    timer: null,
	    width: 500,
	    padding: 0,
	    background: '#fff',
	    input: null,
	    inputPlaceholder: '',
	    inputValue: '',
	    inputOptions: {},
	    inputAutoTrim: true,
	    inputClass: null,
	    inputAttributes: {},
	    inputValidator: null,
	    progressSteps: [],
	    currentProgressStep: null,
	    progressStepsDistance: '40px',
	    onOpen: null,
	    onClose: null
	};
	var sweetHTML = ('\n  <div class="' + swalClasses.modal + '" style="display: none" tabIndex="-1">\n    <ul class="' + swalClasses.progresssteps + '"></ul>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n      <span class="x-mark"><span class="line left"></span><span class="line right"></span></span>\n    </div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n      <span class="line tip"></span> <span class="line long"></span>\n      <div class="placeholder"></div> <div class="fix"></div>\n    </div>\n    <img class="' + swalClasses.image + '">\n    <h2 class="' + swalClasses.title + '"></h2>\n    <div class="' + swalClasses.content + '"></div>\n    <input class="' + swalClasses.input + '">\n    <input type="file" class="' + swalClasses.file + '">\n    <div class="' + swalClasses.range + '">\n      <output></output>\n      <input type="range">\n    </div>\n    <select class="' + swalClasses.select + '"></select>\n    <div class="' + swalClasses.radio + '"></div>\n    <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n      <input type="checkbox">\n    </label>\n    <textarea class="' + swalClasses.textarea + '"></textarea>\n    <div class="' + swalClasses.validationerror + '"></div>\n    <hr class="' + swalClasses.spacer + '">\n    <button type="button" class="' + swalClasses.confirm + '">OK</button>\n    <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n    <span class="' + swalClasses.close + '">&times;</span>\n  </div>\n').replace(/(^|\n)\s*/g, '');
	var sweetContainer = void 0;
	var existingSweetContainers = document.getElementsByClassName(swalClasses.container);
	if (existingSweetContainers.length) {
	    sweetContainer = existingSweetContainers[0];
	} else {
	    sweetContainer = document.createElement('div');
	    sweetContainer.className = swalClasses.container;
	    sweetContainer.innerHTML = sweetHTML;
	}
	var colorLuminance = function colorLuminance(hex, lum) {
	    hex = String(hex).replace(/[^0-9a-f]/gi, '');
	    if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	    }
	    lum = lum || 0;
	    var rgb = '#';
	    for (var i = 0; i < 3; i++) {
		var c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
		rgb += ('00' + c).substr(c.length);
	    }
	    return rgb;
	};
	var states = {
	    previousWindowKeyDown: null,
	    previousActiveElement: null,
	    previousBodyPadding: null
	};
	var init = function init() {
	    if (typeof document === 'undefined') {
		console.error('SweetAlert2 requires document to initialize');
		return;
	    } else if (document.getElementsByClassName(swalClasses.container).length) {
		return;
	    }
	    document.body.appendChild(sweetContainer);
	    var modal = getModal();
	    var input = getChildByClass(modal, swalClasses.input);
	    var file = getChildByClass(modal, swalClasses.file);
	    var range = modal.querySelector('.' + swalClasses.range + ' input');
	    var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
	    var select = getChildByClass(modal, swalClasses.select);
	    var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
	    var textarea = getChildByClass(modal, swalClasses.textarea);
	    input.oninput = function() {
		sweetAlert.resetValidationError();
	    }
	    ;
	    input.onkeydown = function(event) {
		setTimeout(function() {
		    if (event.keyCode === 13) {
			event.stopPropagation();
			sweetAlert.clickConfirm();
		    }
		}, 0);
	    }
	    ;
	    file.onchange = function() {
		sweetAlert.resetValidationError();
	    }
	    ;
	    range.oninput = function() {
		sweetAlert.resetValidationError();
		rangeOutput.value = range.value;
	    }
	    ;
	    range.onchange = function() {
		sweetAlert.resetValidationError();
		range.previousSibling.value = range.value;
	    }
	    ;
	    select.onchange = function() {
		sweetAlert.resetValidationError();
	    }
	    ;
	    checkbox.onchange = function() {
		sweetAlert.resetValidationError();
	    }
	    ;
	    textarea.oninput = function() {
		sweetAlert.resetValidationError();
	    }
	    ;
	    return modal;
	};
	var elementByClass = function elementByClass(className) {
	    return sweetContainer.querySelector('.' + className);
	};
	var getModal = function getModal() {
	    return document.body.querySelector('.' + swalClasses.modal) || init();
	};
	var getIcons = function getIcons() {
	    var modal = getModal();
	    return modal.querySelectorAll('.' + swalClasses.icon);
	};
	var getTitle = function getTitle() {
	    return elementByClass(swalClasses.title);
	};
	var getContent = function getContent() {
	    return elementByClass(swalClasses.content);
	};
	var getImage = function getImage() {
	    return elementByClass(swalClasses.image);
	};
	var getSpacer = function getSpacer() {
	    return elementByClass(swalClasses.spacer);
	};
	var getProgressSteps = function getProgressSteps() {
	    return elementByClass(swalClasses.progresssteps);
	};
	var getValidationError = function getValidationError() {
	    return elementByClass(swalClasses.validationerror);
	};
	var getConfirmButton = function getConfirmButton() {
	    return elementByClass(swalClasses.confirm);
	};
	var getCancelButton = function getCancelButton() {
	    return elementByClass(swalClasses.cancel);
	};
	var getCloseButton = function getCloseButton() {
	    return elementByClass(swalClasses.close);
	};
	var getFocusableElements = function getFocusableElements(focusCancel) {
	    var buttons = [getConfirmButton(), getCancelButton()];
	    if (focusCancel) {
		buttons.reverse();
	    }
	    return buttons.concat(Array.prototype.slice.call(getModal().querySelectorAll('button:not([class^=' + swalPrefix + ']), input:not([type=hidden]), textarea, select')));
	};
	var hasClass = function hasClass(elem, className) {
	    if (elem.classList) {
		return elem.classList.contains(className);
	    }
	    return false;
	};
	var focusInput = function focusInput(input) {
	    input.focus();
	    if (input.type !== 'file') {
		var val = input.value;
		input.value = '';
		input.value = val;
	    }
	};
	var addClass = function addClass(elem, className) {
	    if (!elem || !className) {
		return;
	    }
	    var classes = className.split(/\s+/).filter(Boolean);
	    classes.forEach(function(className) {
		elem.classList.add(className);
	    });
	};
	var removeClass = function removeClass(elem, className) {
	    if (!elem || !className) {
		return;
	    }
	    var classes = className.split(/\s+/).filter(Boolean);
	    classes.forEach(function(className) {
		elem.classList.remove(className);
	    });
	};
	var getChildByClass = function getChildByClass(elem, className) {
	    for (var i = 0; i < elem.childNodes.length; i++) {
		if (hasClass(elem.childNodes[i], className)) {
		    return elem.childNodes[i];
		}
	    }
	};
	var show = function show(elem, display) {
	    if (!display) {
		display = 'block';
	    }
	    elem.style.opacity = '';
	    elem.style.display = display;
	};
	var hide = function hide(elem) {
	    elem.style.opacity = '';
	    elem.style.display = 'none';
	};
	var empty = function empty(elem) {
	    while (elem.firstChild) {
		elem.removeChild(elem.firstChild);
	    }
	};
	var isVisible = function isVisible(elem) {
	    return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
	};
	var removeStyleProperty = function removeStyleProperty(elem, property) {
	    if (elem.style.removeProperty) {
		elem.style.removeProperty(property);
	    } else {
		elem.style.removeAttribute(property);
	    }
	};
	var fireClick = function fireClick(node) {
	    if (typeof MouseEvent === 'function') {
		var mevt = new MouseEvent('click',{
		    view: window,
		    bubbles: false,
		    cancelable: true
		});
		node.dispatchEvent(mevt);
	    } else if (document.createEvent) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('click', false, false);
		node.dispatchEvent(evt);
	    } else if (document.createEventObject) {
		node.fireEvent('onclick');
	    } else if (typeof node.onclick === 'function') {
		node.onclick();
	    }
	};
	var animationEndEvent = function() {
	    var testEl = document.createElement('div');
	    var transEndEventNames = {
		'WebkitAnimation': 'webkitAnimationEnd',
		'OAnimation': 'oAnimationEnd oanimationend',
		'msAnimation': 'MSAnimationEnd',
		'animation': 'animationend'
	    };
	    for (var i in transEndEventNames) {
		if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
		    return transEndEventNames[i];
		}
	    }
	    return false;
	}();
	var resetPrevState = function resetPrevState() {
	    var modal = getModal();
	    window.onkeydown = states.previousWindowKeyDown;
	    if (states.previousActiveElement && states.previousActiveElement.focus) {
		states.previousActiveElement.focus();
	    }
	    clearTimeout(modal.timeout);
	};
	var measureScrollbar = function measureScrollbar() {
	    var scrollDiv = document.createElement('div');
	    scrollDiv.style.width = '50px';
	    scrollDiv.style.height = '50px';
	    scrollDiv.style.overflow = 'scroll';
	    document.body.appendChild(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    document.body.removeChild(scrollDiv);
	    return scrollbarWidth;
	};
	var debounce = function debounce(func, wait) {
	    var timeout = void 0;
	    return function() {
		var later = function later() {
		    timeout = null;
		    func();
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	    }
	    ;
	};
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
	    return typeof obj;
	}
	: function(obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	}
	;
	var asyncGenerator = function() {
	    function AwaitValue(value) {
		this.value = value;
	    }
	    function AsyncGenerator(gen) {
		var front, back;
		function send(key, arg) {
		    return new Promise(function(resolve, reject) {
			var request = {
			    key: key,
			    arg: arg,
			    resolve: resolve,
			    reject: reject,
			    next: null
			};
			if (back) {
			    back = back.next = request;
			} else {
			    front = back = request;
			    resume(key, arg);
			}
		    }
		    );
		}
		function resume(key, arg) {
		    try {
			var result = gen[key](arg);
			var value = result.value;
			if (value instanceof AwaitValue) {
			    Promise.resolve(value.value).then(function(arg) {
				resume("next", arg);
			    }, function(arg) {
				resume("throw", arg);
			    });
			} else {
			    settle(result.done ? "return" : "normal", result.value);
			}
		    } catch (err) {
			settle("throw", err);
		    }
		}
		function settle(type, value) {
		    switch (type) {
		    case "return":
			front.resolve({
			    value: value,
			    done: true
			});
			break;
		    case "throw":
			front.reject(value);
			break;
		    default:
			front.resolve({
			    value: value,
			    done: false
			});
			break;
		    }
		    front = front.next;
		    if (front) {
			resume(front.key, front.arg);
		    } else {
			back = null;
		    }
		}
		this._invoke = send;
		if (typeof gen.return !== "function") {
		    this.return = undefined;
		}
	    }
	    if (typeof Symbol === "function" && Symbol.asyncIterator) {
		AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
		    return this;
		}
		;
	    }
	    AsyncGenerator.prototype.next = function(arg) {
		return this._invoke("next", arg);
	    }
	    ;
	    AsyncGenerator.prototype.throw = function(arg) {
		return this._invoke("throw", arg);
	    }
	    ;
	    AsyncGenerator.prototype.return = function(arg) {
		return this._invoke("return", arg);
	    }
	    ;
	    return {
		wrap: function(fn) {
		    return function() {
			return new AsyncGenerator(fn.apply(this, arguments));
		    }
		    ;
		},
		await: function(value) {
		    return new AwaitValue(value);
		}
	    };
	}();
	var _extends = Object.assign || function(target) {
	    for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];
		for (var key in source) {
		    if (Object.prototype.hasOwnProperty.call(source, key)) {
			target[key] = source[key];
		    }
		}
	    }
	    return target;
	}
	;
	var get = function get(object, property, receiver) {
	    if (object === null)
		object = Function.prototype;
	    var desc = Object.getOwnPropertyDescriptor(object, property);
	    if (desc === undefined) {
		var parent = Object.getPrototypeOf(object);
		if (parent === null) {
		    return undefined;
		} else {
		    return get(parent, property, receiver);
		}
	    } else if ("value"in desc) {
		return desc.value;
	    } else {
		var getter = desc.get;
		if (getter === undefined) {
		    return undefined;
		}
		return getter.call(receiver);
	    }
	};
	var set = function set(object, property, value, receiver) {
	    var desc = Object.getOwnPropertyDescriptor(object, property);
	    if (desc === undefined) {
		var parent = Object.getPrototypeOf(object);
		if (parent !== null) {
		    set(parent, property, value, receiver);
		}
	    } else if ("value"in desc && desc.writable) {
		desc.value = value;
	    } else {
		var setter = desc.set;
		if (setter !== undefined) {
		    setter.call(receiver, value);
		}
	    }
	    return value;
	};
	var modalParams = _extends({}, defaultParams);
	var queue = [];
	var swal2Observer = void 0;
	var setParameters = function setParameters(params) {
	    var modal = getModal();
	    for (var param in params) {
		if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
		    console.warn('SweetAlert2: Unknown parameter "' + param + '"');
		}
	    }
	    modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
	    modal.style.padding = params.padding + 'px';
	    modal.style.background = params.background;
	    var title = getTitle();
	    var content = getContent();
	    var confirmButton = getConfirmButton();
	    var cancelButton = getCancelButton();
	    var closeButton = getCloseButton();
	    title.innerHTML = params.title.split('\n').join('<br>');
	    if (params.text || params.html) {
		if (_typeof(params.html) === 'object') {
		    content.innerHTML = '';
		    if (0 in params.html) {
			for (var i = 0; i in params.html; i++) {
			    content.appendChild(params.html[i].cloneNode(true));
			}
		    } else {
			content.appendChild(params.html.cloneNode(true));
		    }
		} else if (params.html) {
		    content.innerHTML = params.html;
		} else if (params.text) {
		    content.innerHTML = ('' + params.text).split('\n').join('<br>');
		}
		show(content);
	    } else {
		hide(content);
	    }
	    if (params.showCloseButton) {
		show(closeButton);
	    } else {
		hide(closeButton);
	    }
	    modal.className = swalClasses.modal;
	    if (params.customClass) {
		addClass(modal, params.customClass);
	    }
	    var progressStepsContainer = getProgressSteps();
	    var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
	    if (params.progressSteps.length) {
		show(progressStepsContainer);
		empty(progressStepsContainer);
		if (currentProgressStep >= params.progressSteps.length) {
		    console.warn('SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
		}
		params.progressSteps.forEach(function(step, index) {
		    var circle = document.createElement('li');
		    addClass(circle, swalClasses.progresscircle);
		    circle.innerHTML = step;
		    if (index === currentProgressStep) {
			addClass(circle, swalClasses.activeprogressstep);
		    }
		    progressStepsContainer.appendChild(circle);
		    if (index !== params.progressSteps.length - 1) {
			var line = document.createElement('li');
			addClass(line, swalClasses.progressline);
			line.style.width = params.progressStepsDistance;
			progressStepsContainer.appendChild(line);
		    }
		});
	    } else {
		hide(progressStepsContainer);
	    }
	    var icons = getIcons();
	    for (var _i = 0; _i < icons.length; _i++) {
		hide(icons[_i]);
	    }
	    if (params.type) {
		var validType = false;
		for (var iconType in iconTypes) {
		    if (params.type === iconType) {
			validType = true;
			break;
		    }
		}
		if (!validType) {
		    console.error('SweetAlert2: Unknown alert type: ' + params.type);
		    return false;
		}
		var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
		show(icon);
		switch (params.type) {
		case 'success':
		    addClass(icon, 'animate');
		    addClass(icon.querySelector('.tip'), 'animate-success-tip');
		    addClass(icon.querySelector('.long'), 'animate-success-long');
		    break;
		case 'error':
		    addClass(icon, 'animate-error-icon');
		    addClass(icon.querySelector('.x-mark'), 'animate-x-mark');
		    break;
		case 'warning':
		    addClass(icon, 'pulse-warning');
		    break;
		default:
		    break;
		}
	    }
	    var image = getImage();
	    if (params.imageUrl) {
		image.setAttribute('src', params.imageUrl);
		show(image);
		if (params.imageWidth) {
		    image.setAttribute('width', params.imageWidth);
		} else {
		    image.removeAttribute('width');
		}
		if (params.imageHeight) {
		    image.setAttribute('height', params.imageHeight);
		} else {
		    image.removeAttribute('height');
		}
		image.className = swalClasses.image;
		if (params.imageClass) {
		    addClass(image, params.imageClass);
		}
	    } else {
		hide(image);
	    }
	    if (params.showCancelButton) {
		cancelButton.style.display = 'inline-block';
	    } else {
		hide(cancelButton);
	    }
	    if (params.showConfirmButton) {
		removeStyleProperty(confirmButton, 'display');
	    } else {
		hide(confirmButton);
	    }
	    var spacer = getSpacer();
	    if (!params.showConfirmButton && !params.showCancelButton) {
		hide(spacer);
	    } else {
		show(spacer);
	    }
	    confirmButton.innerHTML = params.confirmButtonText;
	    cancelButton.innerHTML = params.cancelButtonText;
	    if (params.buttonsStyling) {
		confirmButton.style.backgroundColor = params.confirmButtonColor;
		cancelButton.style.backgroundColor = params.cancelButtonColor;
	    }
	    confirmButton.className = swalClasses.confirm;
	    addClass(confirmButton, params.confirmButtonClass);
	    cancelButton.className = swalClasses.cancel;
	    addClass(cancelButton, params.cancelButtonClass);
	    if (params.buttonsStyling) {
		addClass(confirmButton, swalClasses.styled);
		addClass(cancelButton, swalClasses.styled);
	    } else {
		removeClass(confirmButton, swalClasses.styled);
		removeClass(cancelButton, swalClasses.styled);
		confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
		cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
	    }
	    if (params.animation === true) {
		removeClass(modal, swalClasses.noanimation);
	    } else {
		addClass(modal, swalClasses.noanimation);
	    }
	};
	var openModal = function openModal(animation, onComplete) {
	    var modal = getModal();
	    if (animation) {
		addClass(modal, swalClasses.show);
		addClass(sweetContainer, swalClasses.fade);
		removeClass(modal, swalClasses.hide);
	    } else {
		removeClass(modal, swalClasses.fade);
	    }
	    show(modal);
	    sweetContainer.style.overflowY = 'hidden';
	    if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
		modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
		    modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
		    sweetContainer.style.overflowY = 'auto';
		});
	    } else {
		sweetContainer.style.overflowY = 'auto';
	    }
	    addClass(sweetContainer, swalClasses.in);
	    addClass(document.body, swalClasses.in);
	    fixScrollbar();
	    iOSfix();
	    states.previousActiveElement = document.activeElement;
	    if (onComplete !== null && typeof onComplete === 'function') {
		onComplete(undefined, modal);
	    }
	};
	var fixScrollbar = function fixScrollbar() {
	    if (states.previousBodyPadding !== null) {
		return;
	    }
	    if (document.body.scrollHeight > window.innerHeight) {
		states.previousBodyPadding = document.body.style.paddingRight;
		if (!window.mobile)
		    document.body.style.paddingRight = window.scrollbarWidth + 'px';
	    }
	};
	var undoScrollbar = function undoScrollbar() {
	    if (states.previousBodyPadding !== null) {
		document.body.style.paddingRight = states.previousBodyPadding;
		states.previousBodyPadding = null;
	    }
	};
	var iOSfix = function iOSfix() {
	    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
		var offset = document.body.scrollTop;
		document.body.style.top = offset * -1 + 'px';
		addClass(document.body, swalClasses.iosfix);
	    }
	};
	var undoIOSfix = function undoIOSfix() {
	    if (hasClass(document.body, swalClasses.iosfix)) {
		var offset = parseInt(document.body.style.top, 10);
		removeClass(document.body, swalClasses.iosfix);
		document.body.scrollTop = offset * -1;
	    }
	};
	var modalDependant = function modalDependant() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	    }
	    if (args[0] === undefined) {
		console.error('SweetAlert2 expects at least 1 attribute!');
		return false;
	    }
	    var params = _extends({}, modalParams);
	    switch (_typeof(args[0])) {
	    case 'string':
		params.title = args[0];
		params.text = args[1];
		params.type = args[2];
		break;
	    case 'object':
		_extends(params, args[0]);
		params.extraParams = args[0].extraParams;
		if (params.input === 'email' && params.inputValidator === null) {
		    params.inputValidator = function(email) {
			return new Promise(function(resolve, reject) {
			    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			    if (emailRegex.test(email)) {
				resolve();
			    } else {
				reject('Invalid email address');
			    }
			}
			);
		    }
		    ;
		}
		break;
	    default:
		console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
		return false;
	    }
	    setParameters(params);
	    var modal = getModal();
	    return new Promise(function(resolve, reject) {
		if (params.timer) {
		    modal.timeout = setTimeout(function() {
			sweetAlert.closeModal(params.onClose);
			reject('timer');
		    }, params.timer);
		}
		var getInput = function getInput(inputType) {
		    inputType = inputType || params.input;
		    switch (inputType) {
		    case 'select':
		    case 'textarea':
		    case 'file':
			return getChildByClass(modal, swalClasses[inputType]);
		    case 'checkbox':
			return modal.querySelector('.' + swalClasses.checkbox + ' input');
		    case 'radio':
			return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
		    case 'range':
			return modal.querySelector('.' + swalClasses.range + ' input');
		    default:
			return getChildByClass(modal, swalClasses.input);
		    }
		};
		var getInputValue = function getInputValue() {
		    var input = getInput();
		    if (!input) {
			return null;
		    }
		    switch (params.input) {
		    case 'checkbox':
			return input.checked ? 1 : 0;
		    case 'radio':
			return input.checked ? input.value : null;
		    case 'file':
			return input.files.length ? input.files[0] : null;
		    default:
			return params.inputAutoTrim ? input.value.trim() : input.value;
		    }
		};
		if (params.input) {
		    setTimeout(function() {
			var input = getInput();
			if (input) {
			    focusInput(input);
			}
		    }, 0);
		}
		var confirm = function confirm(value) {
		    if (params.showLoaderOnConfirm) {
			sweetAlert.showLoading();
		    }
		    if (params.preConfirm) {
			params.preConfirm(value, params.extraParams).then(function(preConfirmValue) {
			    sweetAlert.closeModal(params.onClose);
			    resolve(preConfirmValue || value);
			}, function(error) {
			    sweetAlert.hideLoading();
			    if (error) {
				sweetAlert.showValidationError(error);
			    }
			});
		    } else {
			sweetAlert.closeModal(params.onClose);
			resolve(value);
		    }
		};
		var onButtonEvent = function onButtonEvent(event) {
		    var e = event || window.event;
		    var target = e.target || e.srcElement;
		    var confirmButton = getConfirmButton();
		    var cancelButton = getCancelButton();
		    var targetedConfirm = confirmButton === target || confirmButton.contains(target);
		    var targetedCancel = cancelButton === target || cancelButton.contains(target);
		    switch (e.type) {
		    case 'mouseover':
		    case 'mouseup':
			if (params.buttonsStyling) {
			    if (targetedConfirm) {
				confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
			    } else if (targetedCancel) {
				cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
			    }
			}
			break;
		    case 'mouseout':
			if (params.buttonsStyling) {
			    if (targetedConfirm) {
				confirmButton.style.backgroundColor = params.confirmButtonColor;
			    } else if (targetedCancel) {
				cancelButton.style.backgroundColor = params.cancelButtonColor;
			    }
			}
			break;
		    case 'mousedown':
			if (params.buttonsStyling) {
			    if (targetedConfirm) {
				confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
			    } else if (targetedCancel) {
				cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
			    }
			}
			break;
		    case 'click':
			if (targetedConfirm && sweetAlert.isVisible()) {
			    if (params.input) {
				(function() {
				    var inputValue = getInputValue();
				    if (params.inputValidator) {
					sweetAlert.disableInput();
					params.inputValidator(inputValue, params.extraParams).then(function() {
					    sweetAlert.enableInput();
					    confirm(inputValue);
					}, function(error) {
					    sweetAlert.enableInput();
					    if (error) {
						sweetAlert.showValidationError(error);
					    }
					});
				    } else {
					confirm(inputValue);
				    }
				}
				)();
			    } else {
				confirm(true);
			    }
			} else if (targetedCancel && sweetAlert.isVisible()) {
			    sweetAlert.closeModal(params.onClose);
			}
			break;
		    default:
		    }
		};
		var buttons = modal.querySelectorAll('button');
		for (var i = 0; i < buttons.length; i++) {
		    buttons[i].onclick = onButtonEvent;
		    buttons[i].onmouseover = onButtonEvent;
		    buttons[i].onmouseout = onButtonEvent;
		    buttons[i].onmousedown = onButtonEvent;
		}
		getCloseButton().onclick = function() {
		    sweetAlert.closeModal(params.onClose);
		}
		;
		sweetContainer.onclick = function(e) {
		    if (e.target !== sweetContainer) {
			return;
		    }
		    if (params.allowOutsideClick) {
			sweetAlert.closeModal(params.onClose);
		    }
		}
		;
		var confirmButton = getConfirmButton();
		var cancelButton = getCancelButton();
		if (params.reverseButtons) {
		    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
		} else {
		    confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
		}
		var setFocus = function setFocus(index, increment) {
		    var focusableElements = getFocusableElements(params.focusCancel);
		    for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
			index = index + increment;
			if (index === focusableElements.length) {
			    index = 0;
			} else if (index === -1) {
			    index = focusableElements.length - 1;
			}
			var el = focusableElements[index];
			if (isVisible(el)) {
			    return el.focus();
			}
		    }
		};
		var handleKeyDown = function handleKeyDown(event) {
		    var e = event || window.event;
		    var keyCode = e.keyCode || e.which;
		    if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
			return;
		    }
		    var targetElement = e.target || e.srcElement;
		    var focusableElements = getFocusableElements(params.focusCancel);
		    var btnIndex = -1;
		    for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
			if (targetElement === focusableElements[_i3]) {
			    btnIndex = _i3;
			    break;
			}
		    }
		    if (keyCode === 9) {
			if (!e.shiftKey) {
			    setFocus(btnIndex, 1);
			} else {
			    setFocus(btnIndex, -1);
			}
			e.stopPropagation();
			e.preventDefault();
		    } else {
			if (keyCode === 13 || keyCode === 32) {
			    if (btnIndex === -1) {
				if (params.focusCancel) {
				    fireClick(cancelButton, e);
				} else {
				    fireClick(confirmButton, e);
				}
			    }
			} else if (keyCode === 27 && params.allowEscapeKey === true) {
			    sweetAlert.closeModal(params.onClose);
			}
		    }
		};
		states.previousWindowKeyDown = window.onkeydown;
		window.onkeydown = handleKeyDown;
		if (params.buttonsStyling) {
		    confirmButton.style.borderLeftColor = params.confirmButtonColor;
		    confirmButton.style.borderRightColor = params.confirmButtonColor;
		}
		sweetAlert.showLoading = sweetAlert.enableLoading = function() {
		    show(getSpacer());
		    show(confirmButton, 'inline-block');
		    addClass(confirmButton, swalClasses.loading);
		    addClass(modal, swalClasses.loading);
		    confirmButton.disabled = true;
		    cancelButton.disabled = true;
		}
		;
		sweetAlert.hideLoading = sweetAlert.disableLoading = function() {
		    if (!params.showConfirmButton) {
			hide(confirmButton);
			if (!params.showCancelButton) {
			    hide(getSpacer());
			}
		    }
		    removeClass(confirmButton, swalClasses.loading);
		    removeClass(modal, swalClasses.loading);
		    confirmButton.disabled = false;
		    cancelButton.disabled = false;
		}
		;
		sweetAlert.enableButtons = function() {
		    confirmButton.disabled = false;
		    cancelButton.disabled = false;
		}
		;
		sweetAlert.disableButtons = function() {
		    confirmButton.disabled = true;
		    cancelButton.disabled = true;
		}
		;
		sweetAlert.enableConfirmButton = function() {
		    confirmButton.disabled = false;
		}
		;
		sweetAlert.disableConfirmButton = function() {
		    confirmButton.disabled = true;
		}
		;
		sweetAlert.enableInput = function() {
		    var input = getInput();
		    if (!input) {
			return false;
		    }
		    if (input.type === 'radio') {
			var radiosContainer = input.parentNode.parentNode;
			var radios = radiosContainer.querySelectorAll('input');
			for (var _i4 = 0; _i4 < radios.length; _i4++) {
			    radios[_i4].disabled = false;
			}
		    } else {
			input.disabled = false;
		    }
		}
		;
		sweetAlert.disableInput = function() {
		    var input = getInput();
		    if (!input) {
			return false;
		    }
		    if (input && input.type === 'radio') {
			var radiosContainer = input.parentNode.parentNode;
			var radios = radiosContainer.querySelectorAll('input');
			for (var _i5 = 0; _i5 < radios.length; _i5++) {
			    radios[_i5].disabled = true;
			}
		    } else {
			input.disabled = true;
		    }
		}
		;
		sweetAlert.recalculateHeight = debounce(function() {
		    var modal = getModal();
		    var prevState = modal.style.display;
		    modal.style.minHeight = '';
		    show(modal);
		    modal.style.minHeight = modal.scrollHeight + 1 + 'px';
		    modal.style.display = prevState;
		}, 50);
		sweetAlert.showValidationError = function(error) {
		    var validationError = getValidationError();
		    validationError.innerHTML = error;
		    show(validationError);
		    var input = getInput();
		    focusInput(input);
		    addClass(input, swalClasses.inputerror);
		}
		;
		sweetAlert.resetValidationError = function() {
		    var validationError = getValidationError();
		    hide(validationError);
		    sweetAlert.recalculateHeight();
		    var input = getInput();
		    if (input) {
			removeClass(input, swalClasses.inputerror);
		    }
		}
		;
		sweetAlert.getProgressSteps = function() {
		    return params.progressSteps;
		}
		;
		sweetAlert.setProgressSteps = function(progressSteps) {
		    params.progressSteps = progressSteps;
		    setParameters(params);
		}
		;
		sweetAlert.showProgressSteps = function() {
		    show(getProgressSteps());
		}
		;
		sweetAlert.hideProgressSteps = function() {
		    hide(getProgressSteps());
		}
		;
		sweetAlert.enableButtons();
		sweetAlert.hideLoading();
		sweetAlert.resetValidationError();
		var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
		var input = void 0;
		for (var _i6 = 0; _i6 < inputTypes.length; _i6++) {
		    var inputClass = swalClasses[inputTypes[_i6]];
		    var inputContainer = getChildByClass(modal, inputClass);
		    input = getInput(inputTypes[_i6]);
		    if (input) {
			for (var j in input.attributes) {
			    if (input.attributes.hasOwnProperty(j)) {
				var attrName = input.attributes[j].name;
				if (attrName !== 'type' && attrName !== 'value') {
				    input.removeAttribute(attrName);
				}
			    }
			}
			for (var attr in params.inputAttributes) {
			    input.setAttribute(attr, params.inputAttributes[attr]);
			}
		    }
		    inputContainer.className = inputClass;
		    if (params.inputClass) {
			addClass(inputContainer, params.inputClass);
		    }
		    hide(inputContainer);
		}
		var populateInputOptions = void 0;
		(function() {
		    switch (params.input) {
		    case 'text':
		    case 'email':
		    case 'password':
		    case 'number':
		    case 'tel':
			input = getChildByClass(modal, swalClasses.input);
			input.value = params.inputValue;
			input.placeholder = params.inputPlaceholder;
			input.type = params.input;
			show(input);
			break;
		    case 'file':
			input = getChildByClass(modal, swalClasses.file);
			input.placeholder = params.inputPlaceholder;
			input.type = params.input;
			show(input);
			break;
		    case 'range':
			var range = getChildByClass(modal, swalClasses.range);
			var rangeInput = range.querySelector('input');
			var rangeOutput = range.querySelector('output');
			rangeInput.value = params.inputValue;
			rangeInput.type = params.input;
			rangeOutput.value = params.inputValue;
			show(range);
			break;
		    case 'select':
			var select = getChildByClass(modal, swalClasses.select);
			select.innerHTML = '';
			if (params.inputPlaceholder) {
			    var placeholder = document.createElement('option');
			    placeholder.innerHTML = params.inputPlaceholder;
			    placeholder.value = '';
			    placeholder.disabled = true;
			    placeholder.selected = true;
			    select.appendChild(placeholder);
			}
			populateInputOptions = function populateInputOptions(inputOptions) {
			    for (var optionValue in inputOptions) {
				var option = document.createElement('option');
				option.value = optionValue;
				option.innerHTML = inputOptions[optionValue];
				if (params.inputValue === optionValue) {
				    option.selected = true;
				}
				select.appendChild(option);
			    }
			    show(select);
			    select.focus();
			}
			;
			break;
		    case 'radio':
			var radio = getChildByClass(modal, swalClasses.radio);
			radio.innerHTML = '';
			populateInputOptions = function populateInputOptions(inputOptions) {
			    for (var radioValue in inputOptions) {
				var id = 1;
				var radioInput = document.createElement('input');
				var radioLabel = document.createElement('label');
				var radioLabelSpan = document.createElement('span');
				radioInput.type = 'radio';
				radioInput.name = swalClasses.radio;
				radioInput.value = radioValue;
				radioInput.id = swalClasses.radio + '-' + id++;
				if (params.inputValue === radioValue) {
				    radioInput.checked = true;
				}
				radioLabelSpan.innerHTML = inputOptions[radioValue];
				radioLabel.appendChild(radioInput);
				radioLabel.appendChild(radioLabelSpan);
				radioLabel.for = radioInput.id;
				radio.appendChild(radioLabel);
			    }
			    show(radio);
			    var radios = radio.querySelectorAll('input');
			    if (radios.length) {
				radios[0].focus();
			    }
			}
			;
			break;
		    case 'checkbox':
			var checkbox = getChildByClass(modal, swalClasses.checkbox);
			var checkboxInput = getInput('checkbox');
			checkboxInput.type = 'checkbox';
			checkboxInput.value = 1;
			checkboxInput.id = swalClasses.checkbox;
			checkboxInput.checked = Boolean(params.inputValue);
			var label = checkbox.getElementsByTagName('span');
			if (label.length) {
			    checkbox.removeChild(label[0]);
			}
			label = document.createElement('span');
			label.innerHTML = params.inputPlaceholder;
			checkbox.appendChild(label);
			show(checkbox);
			break;
		    case 'textarea':
			var textarea = getChildByClass(modal, swalClasses.textarea);
			textarea.value = params.inputValue;
			textarea.placeholder = params.inputPlaceholder;
			show(textarea);
			break;
		    case null:
			break;
		    default:
			console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "select", "checkbox", "textarea" or "file", got "' + params.input + '"');
			break;
		    }
		}
		)();
		if (params.input === 'select' || params.input === 'radio') {
		    if (params.inputOptions instanceof Promise) {
			sweetAlert.showLoading();
			params.inputOptions.then(function(inputOptions) {
			    sweetAlert.hideLoading();
			    populateInputOptions(inputOptions);
			});
		    } else if (_typeof(params.inputOptions) === 'object') {
			populateInputOptions(params.inputOptions);
		    } else {
			console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
		    }
		}
		openModal(params.animation, params.onOpen);
		setFocus(-1, 1);
		sweetContainer.scrollTop = 0;
		if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
		    swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
		    swal2Observer.observe(modal, {
			childList: true,
			characterData: true,
			subtree: true
		    });
		}
	    }
	    );
	};
	var sweetAlert = function sweetAlert() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	    }
	    if (sweetAlert.isVisible()) {
		sweetAlert.close();
	    }
	    return modalDependant.apply(undefined, args);
	};
	sweetAlert.isVisible = function() {
	    var modal = getModal();
	    return isVisible(modal);
	}
	;
	sweetAlert.queue = function(steps) {
	    queue = steps;
	    var modal = getModal();
	    var resetQueue = function resetQueue() {
		queue = [];
		modal.removeAttribute('data-queue-step');
	    };
	    var queueResult = [];
	    return new Promise(function(resolve, reject) {
		(function step(i, callback) {
		    if (i < queue.length) {
			modal.setAttribute('data-queue-step', i);
			sweetAlert(queue[i]).then(function(result) {
			    queueResult.push(result);
			    step(i + 1, callback);
			}, function(dismiss) {
			    resetQueue();
			    reject(dismiss);
			});
		    } else {
			resetQueue();
			resolve(queueResult);
		    }
		}
		)(0);
	    }
	    );
	}
	;
	sweetAlert.getQueueStep = function() {
	    return getModal().getAttribute('data-queue-step');
	}
	;
	sweetAlert.insertQueueStep = function(step, index) {
	    if (index && index < queue.length) {
		return queue.splice(index, 0, step);
	    }
	    return queue.push(step);
	}
	;
	sweetAlert.deleteQueueStep = function(index) {
	    if (typeof queue[index] !== 'undefined') {
		queue.splice(index, 1);
	    }
	}
	;
	sweetAlert.close = sweetAlert.closeModal = function(onComplete) {
	    var modal = getModal();
	    removeClass(modal, swalClasses.show);
	    addClass(modal, swalClasses.hide);
	    var successIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.success);
	    removeClass(successIcon, 'animate');
	    removeClass(successIcon.querySelector('.tip'), 'animate-success-tip');
	    removeClass(successIcon.querySelector('.long'), 'animate-success-long');
	    var errorIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.error);
	    removeClass(errorIcon, 'animate-error-icon');
	    removeClass(errorIcon.querySelector('.x-mark'), 'animate-x-mark');
	    var warningIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.warning);
	    removeClass(warningIcon, 'pulse-warning');
	    resetPrevState();
	    var hideModalAndResetState = function hideModalAndResetState() {
		hide(modal);
		modal.style.minHeight = '';
		removeClass(sweetContainer, swalClasses.in);
		removeClass(document.body, swalClasses.in);
		undoScrollbar();
		undoIOSfix();
	    };
	    if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
		modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
		    modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
		    if (hasClass(modal, swalClasses.hide)) {
			hideModalAndResetState();
		    }
		});
	    } else {
		hideModalAndResetState();
	    }
	    if (onComplete !== null && typeof onComplete === 'function') {
		onComplete(undefined, modal);
	    }
	}
	;
	sweetAlert.clickConfirm = function() {
	    return getConfirmButton().click();
	}
	;
	sweetAlert.clickCancel = function() {
	    return getCancelButton().click();
	}
	;
	sweetAlert.setDefaults = function(userParams) {
	    if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
		return console.error('SweetAlert2: the argument for setDefaults() is required and has to be a object');
	    }
	    for (var param in userParams) {
		if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
		    console.warn('SweetAlert2: Unknown parameter "' + param + '"');
		    delete userParams[param];
		}
	    }
	    _extends(modalParams, userParams);
	}
	;
	sweetAlert.resetDefaults = function() {
	    modalParams = _extends({}, defaultParams);
	}
	;
	sweetAlert.noop = function() {}
	;
	sweetAlert.version = '6.1.0';
	return sweetAlert;
    }
    )));
    if (window.Sweetalert2)
	window.sweetAlert = window.swal = window.Sweetalert2;
    (function(root, factory) {
	if (typeof define === 'function' && define.amd) {
	    define(["jquery"], function(a0) {
		return (factory(a0));
	    });
	} else if (typeof exports === 'object') {
	    module.exports = factory(require("jquery"));
	} else {
	    factory(jQuery);
	}
    }(this, function($) {
	var defaults = {
	    animation: 'fade',
	    animationDuration: 250,
	    content: null,
	    contentAsHTML: false,
	    contentCloning: false,
	    debug: true,
	    delay: 300,
	    delayTouch: [300, 500],
	    functionInit: null,
	    functionBefore: null,
	    functionReady: null,
	    functionAfter: null,
	    functionFormat: null,
	    IEmin: 6,
	    interactive: false,
	    multiple: false,
	    parent: 'body',
	    plugins: ['sideTip'],
	    repositionOnScroll: false,
	    restoration: 'current',
	    selfDestruction: true,
	    theme: [],
	    timer: 0,
	    trackerInterval: 500,
	    trackOrigin: false,
	    trackTooltip: false,
	    trigger: 'hover',
	    triggerClose: {
		click: false,
		mouseleave: false,
		originClick: false,
		scroll: false,
		tap: false,
		touchleave: false
	    },
	    triggerOpen: {
		click: false,
		mouseenter: false,
		tap: false,
		touchstart: false
	    },
	    updateAnimation: 'rotate',
	    zIndex: 9999999
	}
	  , win = (typeof window != 'undefined') ? window : null
	  , env = {
	    hasTouchCapability: !!(win && ('ontouchstart'in win || (win.DocumentTouch && win.document instanceof win.DocumentTouch) || win.navigator.maxTouchPoints)),
	    hasTransitions: transitionSupport(),
	    IE: false,
	    semVer: '4.1.6',
	    window: win
	}
	  , core = function() {
	    this.__$emitterPrivate = $({});
	    this.__$emitterPublic = $({});
	    this.__instancesLatestArr = [];
	    this.__plugins = {};
	    this._env = env;
	};
	core.prototype = {
	    __bridge: function(constructor, obj, pluginName) {
		if (!obj[pluginName]) {
		    var fn = function() {};
		    fn.prototype = constructor;
		    var pluginInstance = new fn();
		    if (pluginInstance.__init) {
			pluginInstance.__init(obj);
		    }
		    $.each(constructor, function(methodName, fn) {
			if (methodName.indexOf('__') != 0) {
			    if (!obj[methodName]) {
				obj[methodName] = function() {
				    return pluginInstance[methodName].apply(pluginInstance, Array.prototype.slice.apply(arguments));
				}
				;
				obj[methodName].bridged = pluginInstance;
			    } else if (defaults.debug) {
				console.log('The ' + methodName + ' method of the ' + pluginName + ' plugin conflicts with another plugin or native methods');
			    }
			}
		    });
		    obj[pluginName] = pluginInstance;
		}
		return this;
	    },
	    __setWindow: function(window) {
		env.window = window;
		return this;
	    },
	    _getRuler: function($tooltip) {
		return new Ruler($tooltip);
	    },
	    _off: function() {
		this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    _on: function() {
		this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    _one: function() {
		this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    _plugin: function(plugin) {
		var self = this;
		if (typeof plugin == 'string') {
		    var pluginName = plugin
		      , p = null;
		    if (pluginName.indexOf('.') > 0) {
			p = self.__plugins[pluginName];
		    } else {
			$.each(self.__plugins, function(i, plugin) {
			    if (plugin.name.substring(plugin.name.length - pluginName.length - 1) == '.' + pluginName) {
				p = plugin;
				return false;
			    }
			});
		    }
		    return p;
		} else {
		    if (plugin.name.indexOf('.') < 0) {
			throw new Error('Plugins must be namespaced');
		    }
		    self.__plugins[plugin.name] = plugin;
		    if (plugin.core) {
			self.__bridge(plugin.core, self, plugin.name);
		    }
		    return this;
		}
	    },
	    _trigger: function() {
		var args = Array.prototype.slice.apply(arguments);
		if (typeof args[0] == 'string') {
		    args[0] = {
			type: args[0]
		    };
		}
		this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, args);
		this.__$emitterPublic.trigger.apply(this.__$emitterPublic, args);
		return this;
	    },
	    instances: function(selector) {
		var instances = []
		  , sel = selector || '.tooltipstered';
		$(sel).each(function() {
		    var $this = $(this)
		      , ns = $this.data('tooltipster-ns');
		    if (ns) {
			$.each(ns, function(i, namespace) {
			    instances.push($this.data(namespace));
			});
		    }
		});
		return instances;
	    },
	    instancesLatest: function() {
		return this.__instancesLatestArr;
	    },
	    off: function() {
		this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    on: function() {
		this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    one: function() {
		this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    origins: function(selector) {
		var sel = selector ? selector + ' ' : '';
		return $(sel + '.tooltipstered').toArray();
	    },
	    setDefaults: function(d) {
		$.extend(defaults, d);
		return this;
	    },
	    triggerHandler: function() {
		this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		return this;
	    }
	};
	$.tooltipster = new core();
	$.Tooltipster = function(element, options) {
	    this.__callbacks = {
		close: [],
		open: []
	    };
	    this.__closingTime;
	    this.__Content;
	    this.__contentBcr;
	    this.__destroyed = false;
	    this.__destroying = false;
	    this.__$emitterPrivate = $({});
	    this.__$emitterPublic = $({});
	    this.__enabled = true;
	    this.__garbageCollector;
	    this.__Geometry;
	    this.__lastPosition;
	    this.__namespace = 'tooltipster-' + Math.round(Math.random() * 1000000);
	    this.__options;
	    this.__$originParents;
	    this.__pointerIsOverOrigin = false;
	    this.__previousThemes = [];
	    this.__state = 'closed';
	    this.__timeouts = {
		close: [],
		open: null
	    };
	    this.__touchEvents = [];
	    this.__tracker = null;
	    this._$origin;
	    this._$tooltip;
	    this.__init(element, options);
	}
	;
	$.Tooltipster.prototype = {
	    __init: function(origin, options) {
		var self = this;
		self._$origin = $(origin);
		self.__options = $.extend(true, {}, defaults, options);
		self.__optionsFormat();
		if (!env.IE || env.IE >= self.__options.IEmin) {
		    var initialTitle = null;
		    if (self._$origin.data('tooltipster-initialTitle') === undefined) {
			initialTitle = self._$origin.attr('title');
			if (initialTitle === undefined)
			    initialTitle = null;
			self._$origin.data('tooltipster-initialTitle', initialTitle);
		    }
		    if (self.__options.content !== null) {
			self.__contentSet(self.__options.content);
		    } else {
			var selector = self._$origin.attr('data-tooltip-content'), $el;
			if (selector) {
			    $el = $(selector);
			}
			if ($el && $el[0]) {
			    self.__contentSet($el.first());
			} else {
			    self.__contentSet(initialTitle);
			}
		    }
		    self._$origin.removeAttr('title').addClass('tooltipstered');
		    self.__prepareOrigin();
		    self.__prepareGC();
		    $.each(self.__options.plugins, function(i, pluginName) {
			self._plug(pluginName);
		    });
		    if (env.hasTouchCapability) {
			$('body').on('touchmove.' + self.__namespace + '-triggerOpen', function(event) {
			    self._touchRecordEvent(event);
			});
		    }
		    self._on('created', function() {
			self.__prepareTooltip();
		    })._on('repositioned', function(e) {
			self.__lastPosition = e.position;
		    });
		} else {
		    self.__options.disabled = true;
		}
	    },
	    __contentInsert: function() {
		var self = this
		  , $el = self._$tooltip.find('.tooltipster-content')
		  , formattedContent = self.__Content
		  , format = function(content) {
		    formattedContent = content;
		};
		self._trigger({
		    type: 'format',
		    content: self.__Content,
		    format: format
		});
		if (self.__options.functionFormat) {
		    formattedContent = self.__options.functionFormat.call(self, self, {
			origin: self._$origin[0]
		    }, self.__Content);
		}
		if (typeof formattedContent === 'string' && !self.__options.contentAsHTML) {
		    $el.text(formattedContent);
		} else {
		    $el.empty().append(formattedContent);
		}
		return self;
	    },
	    __contentSet: function(content) {
		if (content instanceof $ && this.__options.contentCloning) {
		    content = content.clone(true);
		}
		this.__Content = content;
		this._trigger({
		    type: 'updated',
		    content: content
		});
		return this;
	    },
	    __destroyError: function() {
		throw new Error('This tooltip has been destroyed and cannot execute your method call.');
	    },
	    __geometry: function() {
		var self = this
		  , $target = self._$origin
		  , originIsArea = self._$origin.is('area');
		if (originIsArea) {
		    var mapName = self._$origin.parent().attr('name');
		    $target = $('img[usemap="#' + mapName + '"]');
		}
		var bcr = $target[0].getBoundingClientRect()
		  , $document = $(env.window.document)
		  , $window = $(env.window)
		  , $parent = $target
		  , geo = {
		    available: {
			document: null,
			window: null
		    },
		    document: {
			size: {
			    height: $document.height(),
			    width: $document.width()
			}
		    },
		    window: {
			scroll: {
			    left: env.window.scrollX || env.window.document.documentElement.scrollLeft,
			    top: env.window.scrollY || env.window.document.documentElement.scrollTop
			},
			size: {
			    height: $window.height(),
			    width: $window.width()
			}
		    },
		    origin: {
			fixedLineage: false,
			offset: {},
			size: {
			    height: bcr.bottom - bcr.top,
			    width: bcr.right - bcr.left
			},
			usemapImage: originIsArea ? $target[0] : null,
			windowOffset: {
			    bottom: bcr.bottom,
			    left: bcr.left,
			    right: bcr.right,
			    top: bcr.top
			}
		    }
		}
		  , geoFixed = false;
		if (originIsArea) {
		    var shape = self._$origin.attr('shape')
		      , coords = self._$origin.attr('coords');
		    if (coords) {
			coords = coords.split(',');
			$.map(coords, function(val, i) {
			    coords[i] = parseInt(val);
			});
		    }
		    if (shape != 'default') {
			switch (shape) {
			case 'circle':
			    var circleCenterLeft = coords[0]
			      , circleCenterTop = coords[1]
			      , circleRadius = coords[2]
			      , areaTopOffset = circleCenterTop - circleRadius
			      , areaLeftOffset = circleCenterLeft - circleRadius;
			    geo.origin.size.height = circleRadius * 2;
			    geo.origin.size.width = geo.origin.size.height;
			    geo.origin.windowOffset.left += areaLeftOffset;
			    geo.origin.windowOffset.top += areaTopOffset;
			    break;
			case 'rect':
			    var areaLeft = coords[0]
			      , areaTop = coords[1]
			      , areaRight = coords[2]
			      , areaBottom = coords[3];
			    geo.origin.size.height = areaBottom - areaTop;
			    geo.origin.size.width = areaRight - areaLeft;
			    geo.origin.windowOffset.left += areaLeft;
			    geo.origin.windowOffset.top += areaTop;
			    break;
			case 'poly':
			    var areaSmallestX = 0
			      , areaSmallestY = 0
			      , areaGreatestX = 0
			      , areaGreatestY = 0
			      , arrayAlternate = 'even';
			    for (var i = 0; i < coords.length; i++) {
				var areaNumber = coords[i];
				if (arrayAlternate == 'even') {
				    if (areaNumber > areaGreatestX) {
					areaGreatestX = areaNumber;
					if (i === 0) {
					    areaSmallestX = areaGreatestX;
					}
				    }
				    if (areaNumber < areaSmallestX) {
					areaSmallestX = areaNumber;
				    }
				    arrayAlternate = 'odd';
				} else {
				    if (areaNumber > areaGreatestY) {
					areaGreatestY = areaNumber;
					if (i == 1) {
					    areaSmallestY = areaGreatestY;
					}
				    }
				    if (areaNumber < areaSmallestY) {
					areaSmallestY = areaNumber;
				    }
				    arrayAlternate = 'even';
				}
			    }
			    geo.origin.size.height = areaGreatestY - areaSmallestY;
			    geo.origin.size.width = areaGreatestX - areaSmallestX;
			    geo.origin.windowOffset.left += areaSmallestX;
			    geo.origin.windowOffset.top += areaSmallestY;
			    break;
			}
		    }
		}
		var edit = function(r) {
		    geo.origin.size.height = r.height,
		    geo.origin.windowOffset.left = r.left,
		    geo.origin.windowOffset.top = r.top,
		    geo.origin.size.width = r.width
		};
		self._trigger({
		    type: 'geometry',
		    edit: edit,
		    geometry: {
			height: geo.origin.size.height,
			left: geo.origin.windowOffset.left,
			top: geo.origin.windowOffset.top,
			width: geo.origin.size.width
		    }
		});
		geo.origin.windowOffset.right = geo.origin.windowOffset.left + geo.origin.size.width;
		geo.origin.windowOffset.bottom = geo.origin.windowOffset.top + geo.origin.size.height;
		geo.origin.offset.left = geo.origin.windowOffset.left + geo.window.scroll.left;
		geo.origin.offset.top = geo.origin.windowOffset.top + geo.window.scroll.top;
		geo.origin.offset.bottom = geo.origin.offset.top + geo.origin.size.height;
		geo.origin.offset.right = geo.origin.offset.left + geo.origin.size.width;
		geo.available.document = {
		    bottom: {
			height: geo.document.size.height - geo.origin.offset.bottom,
			width: geo.document.size.width
		    },
		    left: {
			height: geo.document.size.height,
			width: geo.origin.offset.left
		    },
		    right: {
			height: geo.document.size.height,
			width: geo.document.size.width - geo.origin.offset.right
		    },
		    top: {
			height: geo.origin.offset.top,
			width: geo.document.size.width
		    }
		};
		geo.available.window = {
		    bottom: {
			height: Math.max(geo.window.size.height - Math.max(geo.origin.windowOffset.bottom, 0), 0),
			width: geo.window.size.width
		    },
		    left: {
			height: geo.window.size.height,
			width: Math.max(geo.origin.windowOffset.left, 0)
		    },
		    right: {
			height: geo.window.size.height,
			width: Math.max(geo.window.size.width - Math.max(geo.origin.windowOffset.right, 0), 0)
		    },
		    top: {
			height: Math.max(geo.origin.windowOffset.top, 0),
			width: geo.window.size.width
		    }
		};
		while ($parent[0].tagName.toLowerCase() != 'html') {
		    if ($parent.css('position') == 'fixed') {
			geo.origin.fixedLineage = true;
			break;
		    }
		    $parent = $parent.parent();
		}
		return geo;
	    },
	    __optionsFormat: function() {
		if (typeof this.__options.animationDuration == 'number') {
		    this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration];
		}
		if (typeof this.__options.delay == 'number') {
		    this.__options.delay = [this.__options.delay, this.__options.delay];
		}
		if (typeof this.__options.delayTouch == 'number') {
		    this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch];
		}
		if (typeof this.__options.theme == 'string') {
		    this.__options.theme = [this.__options.theme];
		}
		if (typeof this.__options.parent == 'string') {
		    this.__options.parent = $(this.__options.parent);
		}
		if (this.__options.trigger == 'hover') {
		    this.__options.triggerOpen = {
			mouseenter: true,
			touchstart: true
		    };
		    this.__options.triggerClose = {
			mouseleave: true,
			originClick: true,
			touchleave: true
		    };
		} else if (this.__options.trigger == 'click') {
		    this.__options.triggerOpen = {
			click: true,
			tap: true
		    };
		    this.__options.triggerClose = {
			click: true,
			tap: true
		    };
		}
		this._trigger('options');
		return this;
	    },
	    __prepareGC: function() {
		var self = this;
		if (self.__options.selfDestruction) {
		    self.__garbageCollector = setInterval(function() {
			var now = new Date().getTime();
			self.__touchEvents = $.grep(self.__touchEvents, function(event, i) {
			    return now - event.time > 60000;
			});
			if (!bodyContains(self._$origin)) {
			    self.destroy();
			}
		    }, 20000);
		} else {
		    clearInterval(self.__garbageCollector);
		}
		return self;
	    },
	    __prepareOrigin: function() {
		var self = this;
		self._$origin.off('.' + self.__namespace + '-triggerOpen');
		if (env.hasTouchCapability) {
		    self._$origin.on('touchstart.' + self.__namespace + '-triggerOpen ' + 'touchend.' + self.__namespace + '-triggerOpen ' + 'touchcancel.' + self.__namespace + '-triggerOpen', function(event) {
			self._touchRecordEvent(event);
		    });
		}
		if (self.__options.triggerOpen.click || (self.__options.triggerOpen.tap && env.hasTouchCapability)) {
		    var eventNames = '';
		    if (self.__options.triggerOpen.click) {
			eventNames += 'click.' + self.__namespace + '-triggerOpen ';
		    }
		    if (self.__options.triggerOpen.tap && env.hasTouchCapability) {
			eventNames += 'touchend.' + self.__namespace + '-triggerOpen';
		    }
		    self._$origin.on(eventNames, function(event) {
			if (self._touchIsMeaningfulEvent(event)) {
			    self._open(event);
			}
		    });
		}
		if (self.__options.triggerOpen.mouseenter || (self.__options.triggerOpen.touchstart && env.hasTouchCapability)) {
		    var eventNames = '';
		    if (self.__options.triggerOpen.mouseenter) {
			eventNames += 'mouseenter.' + self.__namespace + '-triggerOpen ';
		    }
		    if (self.__options.triggerOpen.touchstart && env.hasTouchCapability) {
			eventNames += 'touchstart.' + self.__namespace + '-triggerOpen';
		    }
		    self._$origin.on(eventNames, function(event) {
			if (self._touchIsTouchEvent(event) || !self._touchIsEmulatedEvent(event)) {
			    self.__pointerIsOverOrigin = true;
			    self._openShortly(event);
			}
		    });
		}
		if (self.__options.triggerClose.mouseleave || (self.__options.triggerClose.touchleave && env.hasTouchCapability)) {
		    var eventNames = '';
		    if (self.__options.triggerClose.mouseleave) {
			eventNames += 'mouseleave.' + self.__namespace + '-triggerOpen ';
		    }
		    if (self.__options.triggerClose.touchleave && env.hasTouchCapability) {
			eventNames += 'touchend.' + self.__namespace + '-triggerOpen touchcancel.' + self.__namespace + '-triggerOpen';
		    }
		    self._$origin.on(eventNames, function(event) {
			if (self._touchIsMeaningfulEvent(event)) {
			    self.__pointerIsOverOrigin = false;
			}
		    });
		}
		return self;
	    },
	    __prepareTooltip: function() {
		var self = this
		  , p = self.__options.interactive ? 'auto' : '';
		self._$tooltip.attr('id', self.__namespace).css({
		    'pointer-events': p,
		    zIndex: self.__options.zIndex
		});
		$.each(self.__previousThemes, function(i, theme) {
		    self._$tooltip.removeClass(theme);
		});
		$.each(self.__options.theme, function(i, theme) {
		    self._$tooltip.addClass(theme);
		});
		self.__previousThemes = $.merge([], self.__options.theme);
		return self;
	    },
	    __scrollHandler: function(event) {
		var self = this;
		if (self.__options.triggerClose.scroll) {
		    self._close(event);
		} else {
		    if (event.target === env.window.document) {
			if (!self.__Geometry.origin.fixedLineage) {
			    if (self.__options.repositionOnScroll) {
				self.reposition(event);
			    }
			}
		    } else {
			var g = self.__geometry()
			  , overflows = false;
			if (self._$origin.css('position') != 'fixed') {
			    self.__$originParents.each(function(i, el) {
				var $el = $(el)
				  , overflowX = $el.css('overflow-x')
				  , overflowY = $el.css('overflow-y');
				if (overflowX != 'visible' || overflowY != 'visible') {
				    var bcr = el.getBoundingClientRect();
				    if (overflowX != 'visible') {
					if (g.origin.windowOffset.left < bcr.left || g.origin.windowOffset.right > bcr.right) {
					    overflows = true;
					    return false;
					}
				    }
				    if (overflowY != 'visible') {
					if (g.origin.windowOffset.top < bcr.top || g.origin.windowOffset.bottom > bcr.bottom) {
					    overflows = true;
					    return false;
					}
				    }
				}
				if ($el.css('position') == 'fixed') {
				    return false;
				}
			    });
			}
			if (overflows) {
			    self._$tooltip.css('visibility', 'hidden');
			} else {
			    self._$tooltip.css('visibility', 'visible');
			    if (self.__options.repositionOnScroll) {
				self.reposition(event);
			    } else {
				var offsetLeft = g.origin.offset.left - self.__Geometry.origin.offset.left
				  , offsetTop = g.origin.offset.top - self.__Geometry.origin.offset.top;
				self._$tooltip.css({
				    left: self.__lastPosition.coord.left + offsetLeft,
				    top: self.__lastPosition.coord.top + offsetTop
				});
			    }
			}
		    }
		    self._trigger({
			type: 'scroll',
			event: event
		    });
		}
		return self;
	    },
	    __stateSet: function(state) {
		this.__state = state;
		this._trigger({
		    type: 'state',
		    state: state
		});
		return this;
	    },
	    __timeoutsClear: function() {
		clearTimeout(this.__timeouts.open);
		this.__timeouts.open = null;
		$.each(this.__timeouts.close, function(i, timeout) {
		    clearTimeout(timeout);
		});
		this.__timeouts.close = [];
		return this;
	    },
	    __trackerStart: function() {
		var self = this
		  , $content = self._$tooltip.find('.tooltipster-content');
		if (self.__options.trackTooltip) {
		    self.__contentBcr = $content[0].getBoundingClientRect();
		}
		self.__tracker = setInterval(function() {
		    if (!bodyContains(self._$origin) || !bodyContains(self._$tooltip)) {
			self._close();
		    } else {
			if (self.__options.trackOrigin) {
			    var g = self.__geometry()
			      , identical = false;
			    if (areEqual(g.origin.size, self.__Geometry.origin.size)) {
				if (self.__Geometry.origin.fixedLineage) {
				    if (areEqual(g.origin.windowOffset, self.__Geometry.origin.windowOffset)) {
					identical = true;
				    }
				} else {
				    if (areEqual(g.origin.offset, self.__Geometry.origin.offset)) {
					identical = true;
				    }
				}
			    }
			    if (!identical) {
				if (self.__options.triggerClose.mouseleave) {
				    self._close();
				} else {
				    self.reposition();
				}
			    }
			}
			if (self.__options.trackTooltip) {
			    var currentBcr = $content[0].getBoundingClientRect();
			    if (currentBcr.height !== self.__contentBcr.height || currentBcr.width !== self.__contentBcr.width) {
				self.reposition();
				self.__contentBcr = currentBcr;
			    }
			}
		    }
		}, self.__options.trackerInterval);
		return self;
	    },
	    _close: function(event, callback, duration) {
		var self = this
		  , ok = true;
		self._trigger({
		    type: 'close',
		    event: event,
		    stop: function() {
			ok = false;
		    }
		});
		var closeDuration = self.__options.animationDuration[1];
		if (duration != null)
		    closeDuration = 0;
		if (ok || self.__destroying) {
		    if (callback)
			self.__callbacks.close.push(callback);
		    self.__callbacks.open = [];
		    self.__timeoutsClear();
		    var finishCallbacks = function() {
			$.each(self.__callbacks.close, function(i, c) {
			    c.call(self, self, {
				event: event,
				origin: self._$origin[0]
			    });
			});
			self.__callbacks.close = [];
		    };
		    if (self.__state != 'closed') {
			var necessary = true
			  , d = new Date()
			  , now = d.getTime()
			  , newClosingTime = now + closeDuration;
			if (self.__state == 'disappearing') {
			    if (newClosingTime > self.__closingTime) {
				necessary = false;
			    }
			}
			if (necessary) {
			    self.__closingTime = newClosingTime;
			    if (self.__state != 'disappearing') {
				self.__stateSet('disappearing');
			    }
			    var finish = function() {
				clearInterval(self.__tracker);
				self._trigger({
				    type: 'closing',
				    event: event
				});
				self._$tooltip.off('.' + self.__namespace + '-triggerClose').removeClass('tooltipster-dying');
				$(env.window).off('.' + self.__namespace + '-triggerClose');
				self.__$originParents.each(function(i, el) {
				    $(el).off('scroll.' + self.__namespace + '-triggerClose');
				});
				self.__$originParents = null;
				$('body').off('.' + self.__namespace + '-triggerClose');
				self._$origin.off('.' + self.__namespace + '-triggerClose');
				self._off('dismissable');
				self.__stateSet('closed');
				self._trigger({
				    type: 'after',
				    event: event
				});
				if (self.__options.functionAfter) {
				    self.__options.functionAfter.call(self, self, {
					event: event,
					origin: self._$origin[0]
				    });
				}
				finishCallbacks();
			    };
			    if (env.hasTransitions) {
				self._$tooltip.css({
				    '-moz-animation-duration': closeDuration + 'ms',
				    '-ms-animation-duration': closeDuration + 'ms',
				    '-o-animation-duration': closeDuration + 'ms',
				    '-webkit-animation-duration': closeDuration + 'ms',
				    'animation-duration': closeDuration + 'ms',
				    'transition-duration': closeDuration + 'ms'
				});
				self._$tooltip.clearQueue().removeClass('tooltipster-show').addClass('tooltipster-dying');
				if (closeDuration > 0) {
				    self._$tooltip.delay(closeDuration);
				}
				self._$tooltip.queue(finish);
			    } else {
				self._$tooltip.stop().fadeOut(closeDuration, finish);
			    }
			}
		    } else {
			finishCallbacks();
		    }
		}
		return self;
	    },
	    _off: function() {
		this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    _on: function() {
		this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    _one: function() {
		this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments));
		return this;
	    },
	    _open: function(event, callback) {
		var self = this;
		if (!self.__destroying) {
		    if (bodyContains(self._$origin) && self.__enabled) {
			var ok = true;
			if (self.__state == 'closed') {
			    self._trigger({
				type: 'before',
				event: event,
				stop: function() {
				    ok = false;
				}
			    });
			    if (ok && self.__options.functionBefore) {
				ok = self.__options.functionBefore.call(self, self, {
				    event: event,
				    origin: self._$origin[0]
				});
			    }
			}
			if (ok !== false) {
			    if (self.__Content !== null) {
				if (callback) {
				    self.__callbacks.open.push(callback);
				}
				self.__callbacks.close = [];
				self.__timeoutsClear();
				var extraTime, finish = function() {
				    if (self.__state != 'stable') {
					self.__stateSet('stable');
				    }
				    $.each(self.__callbacks.open, function(i, c) {
					c.call(self, self, {
					    origin: self._$origin[0],
					    tooltip: self._$tooltip[0]
					});
				    });
				    self.__callbacks.open = [];
				};
				if (self.__state !== 'closed') {
				    extraTime = 0;
				    if (self.__state === 'disappearing') {
					self.__stateSet('appearing');
					if (env.hasTransitions) {
					    self._$tooltip.clearQueue().removeClass('tooltipster-dying').addClass('tooltipster-show');
					    if (self.__options.animationDuration[0] > 0) {
						self._$tooltip.delay(self.__options.animationDuration[0]);
					    }
					    self._$tooltip.queue(finish);
					} else {
					    self._$tooltip.stop().fadeIn(finish);
					}
				    } else if (self.__state == 'stable') {
					finish();
				    }
				} else {
				    self.__stateSet('appearing');
				    extraTime = self.__options.animationDuration[0];
				    self.__contentInsert();
				    self.reposition(event, true);
				    if (env.hasTransitions) {
					self._$tooltip.addClass('tooltipster-' + self.__options.animation).addClass('tooltipster-initial').css({
					    '-moz-animation-duration': self.__options.animationDuration[0] + 'ms',
					    '-ms-animation-duration': self.__options.animationDuration[0] + 'ms',
					    '-o-animation-duration': self.__options.animationDuration[0] + 'ms',
					    '-webkit-animation-duration': self.__options.animationDuration[0] + 'ms',
					    'animation-duration': self.__options.animationDuration[0] + 'ms',
					    'transition-duration': self.__options.animationDuration[0] + 'ms'
					});
					setTimeout(function() {
					    if (self.__state != 'closed') {
						self._$tooltip.addClass('tooltipster-show').removeClass('tooltipster-initial');
						if (self.__options.animationDuration[0] > 0) {
						    self._$tooltip.delay(self.__options.animationDuration[0]);
						}
						self._$tooltip.queue(finish);
					    }
					}, 0);
				    } else {
					self._$tooltip.css('display', 'none').fadeIn(self.__options.animationDuration[0], finish);
				    }
				    self.__trackerStart();
				    $(env.window).on('resize.' + self.__namespace + '-triggerClose', function(e) {
					var $ae = $(document.activeElement);
					if ((!$ae.is('input') && !$ae.is('textarea')) || !$.contains(self._$tooltip[0], $ae[0])) {
					    self.reposition(e);
					}
				    }).on('scroll.' + self.__namespace + '-triggerClose', function(e) {
					self.__scrollHandler(e);
				    });
				    self.__$originParents = self._$origin.parents();
				    self.__$originParents.each(function(i, parent) {
					$(parent).on('scroll.' + self.__namespace + '-triggerClose', function(e) {
					    self.__scrollHandler(e);
					});
				    });
				    if (self.__options.triggerClose.mouseleave || (self.__options.triggerClose.touchleave && env.hasTouchCapability)) {
					self._on('dismissable', function(event) {
					    if (event.dismissable) {
						if (event.delay) {
						    timeout = setTimeout(function() {
							self._close(event.event);
						    }, event.delay);
						    self.__timeouts.close.push(timeout);
						} else {
						    self._close(event);
						}
					    } else {
						clearTimeout(timeout);
					    }
					});
					var $elements = self._$origin
					  , eventNamesIn = ''
					  , eventNamesOut = ''
					  , timeout = null;
					if (self.__options.interactive) {
					    $elements = $elements.add(self._$tooltip);
					}
					if (self.__options.triggerClose.mouseleave) {
					    eventNamesIn += 'mouseenter.' + self.__namespace + '-triggerClose ';
					    eventNamesOut += 'mouseleave.' + self.__namespace + '-triggerClose ';
					}
					if (self.__options.triggerClose.touchleave && env.hasTouchCapability) {
					    eventNamesIn += 'touchstart.' + self.__namespace + '-triggerClose';
					    eventNamesOut += 'touchend.' + self.__namespace + '-triggerClose touchcancel.' + self.__namespace + '-triggerClose';
					}
					$elements.on(eventNamesOut, function(event) {
					    if (self._touchIsTouchEvent(event) || !self._touchIsEmulatedEvent(event)) {
						var delay = (event.type == 'mouseleave') ? self.__options.delay : self.__options.delayTouch;
						self._trigger({
						    delay: delay[1],
						    dismissable: true,
						    event: event,
						    type: 'dismissable'
						});
					    }
					}).on(eventNamesIn, function(event) {
					    if (self._touchIsTouchEvent(event) || !self._touchIsEmulatedEvent(event)) {
						self._trigger({
						    dismissable: false,
						    event: event,
						    type: 'dismissable'
						});
					    }
					});
				    }
				    if (self.__options.triggerClose.originClick) {
					self._$origin.on('click.' + self.__namespace + '-triggerClose', function(event) {
					    if (!self._touchIsTouchEvent(event) && !self._touchIsEmulatedEvent(event)) {
						self._close(event);
					    }
					});
				    }
				    if (self.__options.triggerClose.click || (self.__options.triggerClose.tap && env.hasTouchCapability)) {
					setTimeout(function() {
					    if (self.__state != 'closed') {
						var eventNames = '';
						if (self.__options.triggerClose.click) {
						    eventNames += 'click.' + self.__namespace + '-triggerClose ';
						}
						if (self.__options.triggerClose.tap && env.hasTouchCapability) {
						    eventNames += 'touchend.' + self.__namespace + '-triggerClose';
						}
						$('body').on(eventNames, function(event) {
						    if (self._touchIsMeaningfulEvent(event)) {
							self._touchRecordEvent(event);
							if (!self.__options.interactive || !$.contains(self._$tooltip[0], event.target)) {
							    self._close(event);
							}
						    }
						});
						if (self.__options.triggerClose.tap && env.hasTouchCapability) {
						    $('body').on('touchstart.' + self.__namespace + '-triggerClose', function(event) {
							self._touchRecordEvent(event);
						    });
						}
					    }
					}, 0);
				    }
				    self._trigger('ready');
				    if (self.__options.functionReady) {
					self.__options.functionReady.call(self, self, {
					    origin: self._$origin[0],
					    tooltip: self._$tooltip[0]
					});
				    }
				}
				if (self.__options.timer > 0) {
				    var timeout = setTimeout(function() {
					self._close();
				    }, self.__options.timer + extraTime);
				    self.__timeouts.close.push(timeout);
				}
			    }
			}
		    }
		}
		return self;
	    },
	    _openShortly: function(event) {
		var self = this
		  , ok = true;
		if (self.__state != 'stable' && self.__state != 'appearing') {
		    if (!self.__timeouts.open) {
			self._trigger({
			    type: 'start',
			    event: event,
			    stop: function() {
				ok = false;
			    }
			});
			if (ok) {
			    var delay = (event.type.indexOf('touch') == 0) ? self.__options.delayTouch : self.__options.delay;
			    if (delay[0]) {
				self.__timeouts.open = setTimeout(function() {
				    self.__timeouts.open = null;
				    if (self.__pointerIsOverOrigin && self._touchIsMeaningfulEvent(event)) {
					self._trigger('startend');
					self._open(event);
				    } else {
					self._trigger('startcancel');
				    }
				}, delay[0]);
			    } else {
				self._trigger('startend');
				self._open(event);
			    }
			}
		    }
		}
		return self;
	    },
	    _optionsExtract: function(pluginName, defaultOptions) {
		var self = this
		  , options = $.extend(true, {}, defaultOptions);
		var pluginOptions = self.__options[pluginName];
		if (!pluginOptions) {
		    pluginOptions = {};
		    $.each(defaultOptions, function(optionName, value) {
			var o = self.__options[optionName];
			if (o !== undefined) {
			    pluginOptions[optionName] = o;
			}
		    });
		}
		$.each(options, function(optionName, value) {
		    if (pluginOptions[optionName] !== undefined) {
			if ((typeof value == 'object' && !(value instanceof Array) && value != null) && (typeof pluginOptions[optionName] == 'object' && !(pluginOptions[optionName]instanceof Array) && pluginOptions[optionName] != null)) {
			    $.extend(options[optionName], pluginOptions[optionName]);
			} else {
			    options[optionName] = pluginOptions[optionName];
			}
		    }
		});
		return options;
	    },
	    _plug: function(pluginName) {
		var plugin = $.tooltipster._plugin(pluginName);
		if (plugin) {
		    if (plugin.instance) {
			$.tooltipster.__bridge(plugin.instance, this, plugin.name);
		    }
		} else {
		    throw new Error('The "' + pluginName + '" plugin is not defined');
		}
		return this;
	    },
	    _touchIsEmulatedEvent: function(event) {
		var isEmulated = false
		  , now = new Date().getTime();
		for (var i = this.__touchEvents.length - 1; i >= 0; i--) {
		    var e = this.__touchEvents[i];
		    if (now - e.time < 500) {
			if (e.target === event.target) {
			    isEmulated = true;
			}
		    } else {
			break;
		    }
		}
		return isEmulated;
	    },
	    _touchIsMeaningfulEvent: function(event) {
		return ((this._touchIsTouchEvent(event) && !this._touchSwiped(event.target)) || (!this._touchIsTouchEvent(event) && !this._touchIsEmulatedEvent(event)));
	    },
	    _touchIsTouchEvent: function(event) {
		return event.type.indexOf('touch') == 0;
	    },
	    _touchRecordEvent: function(event) {
		if (this._touchIsTouchEvent(event)) {
		    event.time = new Date().getTime();
		    this.__touchEvents.push(event);
		}
		return this;
	    },
	    _touchSwiped: function(target) {
		var swiped = false;
		for (var i = this.__touchEvents.length - 1; i >= 0; i--) {
		    var e = this.__touchEvents[i];
		    if (e.type == 'touchmove') {
			swiped = true;
			break;
		    } else if (e.type == 'touchstart' && target === e.target) {
			break;
		    }
		}
		return swiped;
	    },
	    _trigger: function() {
		var args = Array.prototype.slice.apply(arguments);
		if (typeof args[0] == 'string') {
		    args[0] = {
			type: args[0]
		    };
		}
		args[0].instance = this;
		args[0].origin = this._$origin ? this._$origin[0] : null;
		args[0].tooltip = this._$tooltip ? this._$tooltip[0] : null;
		this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, args);
		$.tooltipster._trigger.apply($.tooltipster, args);
		this.__$emitterPublic.trigger.apply(this.__$emitterPublic, args);
		return this;
	    },
	    _unplug: function(pluginName) {
		var self = this;
		if (self[pluginName]) {
		    var plugin = $.tooltipster._plugin(pluginName);
		    if (plugin.instance) {
			$.each(plugin.instance, function(methodName, fn) {
			    if (self[methodName] && self[methodName].bridged === self[pluginName]) {
				delete self[methodName];
			    }
			});
		    }
		    if (self[pluginName].__destroy) {
			self[pluginName].__destroy();
		    }
		    delete self[pluginName];
		}
		return self;
	    },
	    close: function(callback) {
		if (!this.__destroyed) {
		    this._close(null, callback);
		} else {
		    this.__destroyError();
		}
		return this;
	    },
	    content: function(content) {
		var self = this;
		if (content === undefined) {
		    return self.__Content;
		} else {
		    if (!self.__destroyed) {
			self.__contentSet(content);
			if (self.__Content !== null) {
			    if (self.__state !== 'closed') {
				self.__contentInsert();
				self.reposition();
				if (self.__options.updateAnimation) {
				    if (env.hasTransitions) {
					var animation = self.__options.updateAnimation;
					self._$tooltip.addClass('tooltipster-update-' + animation);
					setTimeout(function() {
					    if (self.__state != 'closed') {
						self._$tooltip.removeClass('tooltipster-update-' + animation);
					    }
					}, 1000);
				    } else {
					self._$tooltip.fadeTo(200, 0.5, function() {
					    if (self.__state != 'closed') {
						self._$tooltip.fadeTo(200, 1);
					    }
					});
				    }
				}
			    }
			} else {
			    self._close();
			}
		    } else {
			self.__destroyError();
		    }
		    return self;
		}
	    },
	    destroy: function() {
		var self = this;
		if (!self.__destroyed) {
		    if (!self.__destroying) {
			self.__destroying = true;
			self._close(null, function() {
			    self._trigger('destroy');
			    self.__destroying = false;
			    self.__destroyed = true;
			    self._$origin.removeData(self.__namespace).off('.' + self.__namespace + '-triggerOpen');
			    $('body').off('.' + self.__namespace + '-triggerOpen');
			    var ns = self._$origin.data('tooltipster-ns');
			    if (ns) {
				if (ns.length === 1) {
				    var title = null;
				    if (self.__options.restoration == 'previous') {
					title = self._$origin.data('tooltipster-initialTitle');
				    } else if (self.__options.restoration == 'current') {
					title = (typeof self.__Content == 'string') ? self.__Content : $('<div></div>').append(self.__Content).html();
				    }
				    if (title) {}
				    self._$origin.removeClass('tooltipstered');
				    self._$origin.removeData('tooltipster-ns').removeData('tooltipster-initialTitle');
				} else {
				    ns = $.grep(ns, function(el, i) {
					return el !== self.__namespace;
				    });
				    self._$origin.data('tooltipster-ns', ns);
				}
			    }
			    self._trigger('destroyed');
			    self._off();
			    self.off();
			    self.__Content = null;
			    self.__$emitterPrivate = null;
			    self.__$emitterPublic = null;
			    self.__options.parent = null;
			    self._$origin = null;
			    self._$tooltip = null;
			    $.tooltipster.__instancesLatestArr = $.grep($.tooltipster.__instancesLatestArr, function(el, i) {
				return self !== el;
			    });
			    clearInterval(self.__garbageCollector);
			}, 0);
		    }
		} else {
		    self.__destroyError();
		}
		return self;
	    },
	    disable: function() {
		if (!this.__destroyed) {
		    this._close();
		    this.__enabled = false;
		    return this;
		} else {
		    this.__destroyError();
		}
		return this;
	    },
	    elementOrigin: function() {
		if (!this.__destroyed) {
		    return this._$origin[0];
		} else {
		    this.__destroyError();
		}
	    },
	    elementTooltip: function() {
		return this._$tooltip ? this._$tooltip[0] : null;
	    },
	    enable: function() {
		this.__enabled = true;
		return this;
	    },
	    hide: function(callback) {
		return this.close(callback);
	    },
	    instance: function() {
		return this;
	    },
	    off: function() {
		if (!this.__destroyed) {
		    this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		}
		return this;
	    },
	    on: function() {
		if (!this.__destroyed) {
		    this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		} else {
		    this.__destroyError();
		}
		return this;
	    },
	    one: function() {
		if (!this.__destroyed) {
		    this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		} else {
		    this.__destroyError();
		}
		return this;
	    },
	    open: function(callback) {
		if (!this.__destroyed && !this.__destroying) {
		    this._open(null, callback);
		} else {
		    this.__destroyError();
		}
		return this;
	    },
	    option: function(o, val) {
		if (val === undefined) {
		    return this.__options[o];
		} else {
		    if (!this.__destroyed) {
			this.__options[o] = val;
			this.__optionsFormat();
			if ($.inArray(o, ['trigger', 'triggerClose', 'triggerOpen']) >= 0) {
			    this.__prepareOrigin();
			}
			if (o === 'selfDestruction') {
			    this.__prepareGC();
			}
		    } else {
			this.__destroyError();
		    }
		    return this;
		}
	    },
	    reposition: function(event, tooltipIsDetached) {
		var self = this;
		if (!self.__destroyed) {
		    if (self.__state != 'closed' && bodyContains(self._$origin)) {
			if (tooltipIsDetached || bodyContains(self._$tooltip)) {
			    if (!tooltipIsDetached) {
				self._$tooltip.detach();
			    }
			    self.__Geometry = self.__geometry();
			    self._trigger({
				type: 'reposition',
				event: event,
				helper: {
				    geo: self.__Geometry
				}
			    });
			}
		    }
		} else {
		    self.__destroyError();
		}
		return self;
	    },
	    show: function(callback) {
		return this.open(callback);
	    },
	    status: function() {
		return {
		    destroyed: this.__destroyed,
		    destroying: this.__destroying,
		    enabled: this.__enabled,
		    open: this.__state !== 'closed',
		    state: this.__state
		};
	    },
	    triggerHandler: function() {
		if (!this.__destroyed) {
		    this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments));
		} else {
		    this.__destroyError();
		}
		return this;
	    }
	};
	$.fn.tooltipster = function() {
	    var args = Array.prototype.slice.apply(arguments)
	      , contentCloningWarning = 'You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.';
	    if (this.length === 0) {
		return this;
	    } else {
		if (typeof args[0] === 'string') {
		    var v = '#*$~&';
		    this.each(function() {
			var ns = $(this).data('tooltipster-ns')
			  , self = ns ? $(this).data(ns[0]) : null;
			if (self) {
			    if (typeof self[args[0]] === 'function') {
				if (this.length > 1 && args[0] == 'content' && (args[1]instanceof $ || (typeof args[1] == 'object' && args[1] != null && args[1].tagName)) && !self.__options.contentCloning && self.__options.debug) {
				    console.log(contentCloningWarning);
				}
				var resp = self[args[0]](args[1], args[2]);
			    } else {
				throw new Error('Unknown method "' + args[0] + '"');
			    }
			    if (resp !== self || args[0] === 'instance') {
				v = resp;
				return false;
			    }
			} else {
			    throw new Error('You called Tooltipster\'s "' + args[0] + '" method on an uninitialized element');
			}
		    });
		    return (v !== '#*$~&') ? v : this;
		} else {
		    $.tooltipster.__instancesLatestArr = [];
		    var multipleIsSet = args[0] && args[0].multiple !== undefined
		      , multiple = (multipleIsSet && args[0].multiple) || (!multipleIsSet && defaults.multiple)
		      , contentIsSet = args[0] && args[0].content !== undefined
		      , content = (contentIsSet && args[0].content) || (!contentIsSet && defaults.content)
		      , contentCloningIsSet = args[0] && args[0].contentCloning !== undefined
		      , contentCloning = (contentCloningIsSet && args[0].contentCloning) || (!contentCloningIsSet && defaults.contentCloning)
		      , debugIsSet = args[0] && args[0].debug !== undefined
		      , debug = (debugIsSet && args[0].debug) || (!debugIsSet && defaults.debug);
		    if (this.length > 1 && (content instanceof $ || (typeof content == 'object' && content != null && content.tagName)) && !contentCloning && debug) {
			console.log(contentCloningWarning);
		    }
		    this.each(function() {
			var go = false
			  , $this = $(this)
			  , ns = $this.data('tooltipster-ns')
			  , obj = null;
			if (!ns) {
			    go = true;
			} else if (multiple) {
			    go = true;
			} else if (debug) {
			    console.log('Tooltipster: one or more tooltips are already attached to the element below. Ignoring.');
			    console.log(this);
			}
			if (go) {
			    obj = new $.Tooltipster(this,args[0]);
			    if (!ns)
				ns = [];
			    ns.push(obj.__namespace);
			    $this.data('tooltipster-ns', ns);
			    $this.data(obj.__namespace, obj);
			    if (obj.__options.functionInit) {
				obj.__options.functionInit.call(obj, obj, {
				    origin: this
				});
			    }
			    obj._trigger('init');
			}
			$.tooltipster.__instancesLatestArr.push(obj);
		    });
		    return this;
		}
	    }
	}
	;
	function Ruler($tooltip) {
	    this.$container;
	    this.constraints = null;
	    this.__$tooltip;
	    this.__init($tooltip);
	}
	Ruler.prototype = {
	    __init: function($tooltip) {
		this.__$tooltip = $tooltip;
		this.__$tooltip.css({
		    left: 0,
		    overflow: 'hidden',
		    position: 'absolute',
		    top: 0
		}).find('.tooltipster-content').css('overflow', 'auto');
		this.$container = $('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo('body');
	    },
	    __forceRedraw: function() {
		var $p = this.__$tooltip.parent();
		this.__$tooltip.detach();
		this.__$tooltip.appendTo($p);
	    },
	    constrain: function(width, height) {
		this.constraints = {
		    width: width,
		    height: height
		};
		this.__$tooltip.css({
		    display: 'block',
		    height: '',
		    overflow: 'auto',
		    width: width
		});
		return this;
	    },
	    destroy: function() {
		this.__$tooltip.detach().find('.tooltipster-content').css({
		    display: '',
		    overflow: ''
		});
		this.$container.remove();
	    },
	    free: function() {
		this.constraints = null;
		this.__$tooltip.css({
		    display: '',
		    height: '',
		    overflow: 'visible',
		    width: ''
		});
		return this;
	    },
	    measure: function() {
		this.__forceRedraw();
		var tooltipBcr = this.__$tooltip[0].getBoundingClientRect()
		  , result = {
		    size: {
			height: tooltipBcr.height || tooltipBcr.bottom,
			width: tooltipBcr.width || tooltipBcr.right
		    }
		};
		if (this.constraints) {
		    var $content = this.__$tooltip.find('.tooltipster-content')
		      , height = this.__$tooltip.outerHeight()
		      , contentBcr = $content[0].getBoundingClientRect()
		      , fits = {
			height: height <= this.constraints.height,
			width: (tooltipBcr.width <= this.constraints.width && contentBcr.width >= $content[0].scrollWidth - 1)
		    };
		    result.fits = fits.height && fits.width;
		}
		if (env.IE && env.IE <= 11 && result.size.width !== env.window.document.documentElement.clientWidth) {
		    result.size.width = Math.ceil(result.size.width) + 1;
		}
		return result;
	    }
	};
	function areEqual(a, b) {
	    var same = true;
	    $.each(a, function(i, _) {
		if (b[i] === undefined || a[i] !== b[i]) {
		    same = false;
		    return false;
		}
	    });
	    return same;
	}
	function bodyContains($obj) {
	    var id = $obj.attr('id')
	      , el = id ? env.window.document.getElementById(id) : null;
	    return el ? el === $obj[0] : $.contains(env.window.document.body, $obj[0]);
	}
	var uA = navigator.userAgent.toLowerCase();
	if (uA.indexOf('msie') != -1)
	    env.IE = parseInt(uA.split('msie')[1]);
	else if (uA.toLowerCase().indexOf('trident') !== -1 && uA.indexOf(' rv:11') !== -1)
	    env.IE = 11;
	else if (uA.toLowerCase().indexOf('edge/') != -1)
	    env.IE = parseInt(uA.toLowerCase().split('edge/')[1]);
	function transitionSupport() {
	    if (!win)
		return false;
	    var b = win.document.body || win.document.documentElement
	      , s = b.style
	      , p = 'transition'
	      , v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];
	    if (typeof s[p] == 'string') {
		return true;
	    }
	    p = p.charAt(0).toUpperCase() + p.substr(1);
	    for (var i = 0; i < v.length; i++) {
		if (typeof s[v[i] + p] == 'string') {
		    return true;
		}
	    }
	    return false;
	}
	var pluginName = 'tooltipster.sideTip';
	$.tooltipster._plugin({
	    name: pluginName,
	    instance: {
		__defaults: function() {
		    return {
			arrow: true,
			distance: 6,
			functionPosition: null,
			maxWidth: null,
			minIntersection: 16,
			minWidth: 0,
			position: null,
			side: 'top',
			viewportAware: true
		    };
		},
		__init: function(instance) {
		    var self = this;
		    self.__instance = instance;
		    self.__namespace = 'tooltipster-sideTip-' + Math.round(Math.random() * 1000000);
		    self.__previousState = 'closed';
		    self.__options;
		    self.__optionsFormat();
		    self.__instance._on('state.' + self.__namespace, function(event) {
			if (event.state == 'closed') {
			    self.__close();
			} else if (event.state == 'appearing' && self.__previousState == 'closed') {
			    self.__create();
			}
			self.__previousState = event.state;
		    });
		    self.__instance._on('options.' + self.__namespace, function() {
			self.__optionsFormat();
		    });
		    self.__instance._on('reposition.' + self.__namespace, function(e) {
			self.__reposition(e.event, e.helper);
		    });
		},
		__close: function() {
		    if (this.__instance.content()instanceof $) {
			this.__instance.content().detach();
		    }
		    this.__instance._$tooltip.remove();
		    this.__instance._$tooltip = null;
		},
		__create: function() {
		    var $html = $('<div class="tooltipster-base tooltipster-sidetip">' + '<div class="tooltipster-box">' + '<div class="tooltipster-content"></div>' + '</div>' + '<div class="tooltipster-arrow">' + '<div class="tooltipster-arrow-uncropped">' + '<div class="tooltipster-arrow-border"></div>' + '<div class="tooltipster-arrow-background"></div>' + '</div>' + '</div>' + '</div>');
		    if (!this.__options.arrow) {
			$html.find('.tooltipster-box').css('margin', 0).end().find('.tooltipster-arrow').hide();
		    }
		    if (this.__options.minWidth) {
			$html.css('min-width', this.__options.minWidth + 'px');
		    }
		    if (this.__options.maxWidth) {
			$html.css('max-width', this.__options.maxWidth + 'px');
		    }
		    this.__instance._$tooltip = $html;
		    this.__instance._trigger('created');
		},
		__destroy: function() {
		    this.__instance._off('.' + self.__namespace);
		},
		__optionsFormat: function() {
		    var self = this;
		    self.__options = self.__instance._optionsExtract(pluginName, self.__defaults());
		    if (self.__options.position) {
			self.__options.side = self.__options.position;
		    }
		    if (typeof self.__options.distance != 'object') {
			self.__options.distance = [self.__options.distance];
		    }
		    if (self.__options.distance.length < 4) {
			if (self.__options.distance[1] === undefined)
			    self.__options.distance[1] = self.__options.distance[0];
			if (self.__options.distance[2] === undefined)
			    self.__options.distance[2] = self.__options.distance[0];
			if (self.__options.distance[3] === undefined)
			    self.__options.distance[3] = self.__options.distance[1];
			self.__options.distance = {
			    top: self.__options.distance[0],
			    right: self.__options.distance[1],
			    bottom: self.__options.distance[2],
			    left: self.__options.distance[3]
			};
		    }
		    if (typeof self.__options.side == 'string') {
			var opposites = {
			    'top': 'bottom',
			    'right': 'left',
			    'bottom': 'top',
			    'left': 'right'
			};
			self.__options.side = [self.__options.side, opposites[self.__options.side]];
			if (self.__options.side[0] == 'left' || self.__options.side[0] == 'right') {
			    self.__options.side.push('top', 'bottom');
			} else {
			    self.__options.side.push('right', 'left');
			}
		    }
		    if ($.tooltipster._env.IE === 6 && self.__options.arrow !== true) {
			self.__options.arrow = false;
		    }
		},
		__reposition: function(event, helper) {
		    var self = this, finalResult, targets = self.__targetFind(helper), testResults = [];
		    self.__instance._$tooltip.detach();
		    var $clone = self.__instance._$tooltip.clone()
		      , ruler = $.tooltipster._getRuler($clone)
		      , satisfied = false
		      , animation = self.__instance.option('animation');
		    if (animation) {
			$clone.removeClass('tooltipster-' + animation);
		    }
		    $.each(['window', 'document'], function(i, container) {
			var takeTest = null;
			self.__instance._trigger({
			    container: container,
			    helper: helper,
			    satisfied: satisfied,
			    takeTest: function(bool) {
				takeTest = bool;
			    },
			    results: testResults,
			    type: 'positionTest'
			});
			if (takeTest == true || (takeTest != false && satisfied == false && (container != 'window' || self.__options.viewportAware))) {
			    for (var i = 0; i < self.__options.side.length; i++) {
				var distance = {
				    horizontal: 0,
				    vertical: 0
				}
				  , side = self.__options.side[i];
				if (side == 'top' || side == 'bottom') {
				    distance.vertical = self.__options.distance[side];
				} else {
				    distance.horizontal = self.__options.distance[side];
				}
				self.__sideChange($clone, side);
				$.each(['natural', 'constrained'], function(i, mode) {
				    takeTest = null;
				    self.__instance._trigger({
					container: container,
					event: event,
					helper: helper,
					mode: mode,
					results: testResults,
					satisfied: satisfied,
					side: side,
					takeTest: function(bool) {
					    takeTest = bool;
					},
					type: 'positionTest'
				    });
				    if (takeTest == true || (takeTest != false && satisfied == false)) {
					var testResult = {
					    container: container,
					    distance: distance,
					    fits: null,
					    mode: mode,
					    outerSize: null,
					    side: side,
					    size: null,
					    target: targets[side],
					    whole: null
					};
					var rulerConfigured = (mode == 'natural') ? ruler.free() : ruler.constrain(helper.geo.available[container][side].width - distance.horizontal, helper.geo.available[container][side].height - distance.vertical)
					  , rulerResults = rulerConfigured.measure();
					testResult.size = rulerResults.size;
					testResult.outerSize = {
					    height: rulerResults.size.height + distance.vertical,
					    width: rulerResults.size.width + distance.horizontal
					};
					if (mode == 'natural') {
					    if (helper.geo.available[container][side].width >= testResult.outerSize.width && helper.geo.available[container][side].height >= testResult.outerSize.height) {
						testResult.fits = true;
					    } else {
						testResult.fits = false;
					    }
					} else {
					    testResult.fits = rulerResults.fits;
					}
					if (container == 'window') {
					    if (!testResult.fits) {
						testResult.whole = false;
					    } else {
						if (side == 'top' || side == 'bottom') {
						    testResult.whole = (helper.geo.origin.windowOffset.right >= self.__options.minIntersection && helper.geo.window.size.width - helper.geo.origin.windowOffset.left >= self.__options.minIntersection);
						} else {
						    testResult.whole = (helper.geo.origin.windowOffset.bottom >= self.__options.minIntersection && helper.geo.window.size.height - helper.geo.origin.windowOffset.top >= self.__options.minIntersection);
						}
					    }
					}
					testResults.push(testResult);
					if (testResult.whole) {
					    satisfied = true;
					} else {
					    if (testResult.mode == 'natural' && (testResult.fits || testResult.size.width <= helper.geo.available[container][side].width)) {
						return false;
					    }
					}
				    }
				});
			    }
			}
		    });
		    self.__instance._trigger({
			edit: function(r) {
			    testResults = r;
			},
			event: event,
			helper: helper,
			results: testResults,
			type: 'positionTested'
		    });
		    testResults.sort(function(a, b) {
			if (a.whole && !b.whole) {
			    return -1;
			} else if (!a.whole && b.whole) {
			    return 1;
			} else if (a.whole && b.whole) {
			    var ai = self.__options.side.indexOf(a.side)
			      , bi = self.__options.side.indexOf(b.side);
			    if (ai < bi) {
				return -1;
			    } else if (ai > bi) {
				return 1;
			    } else {
				return a.mode == 'natural' ? -1 : 1;
			    }
			} else {
			    if (a.fits && !b.fits) {
				return -1;
			    } else if (!a.fits && b.fits) {
				return 1;
			    } else if (a.fits && b.fits) {
				var ai = self.__options.side.indexOf(a.side)
				  , bi = self.__options.side.indexOf(b.side);
				if (ai < bi) {
				    return -1;
				} else if (ai > bi) {
				    return 1;
				} else {
				    return a.mode == 'natural' ? -1 : 1;
				}
			    } else {
				if (a.container == 'document' && a.side == 'bottom' && a.mode == 'natural') {
				    return -1;
				} else {
				    return 1;
				}
			    }
			}
		    });
		    finalResult = testResults[0];
		    finalResult.coord = {};
		    switch (finalResult.side) {
		    case 'left':
		    case 'right':
			finalResult.coord.top = Math.floor(finalResult.target - finalResult.size.height / 2);
			break;
		    case 'bottom':
		    case 'top':
			finalResult.coord.left = Math.floor(finalResult.target - finalResult.size.width / 2);
			break;
		    }
		    switch (finalResult.side) {
		    case 'left':
			finalResult.coord.left = helper.geo.origin.windowOffset.left - finalResult.outerSize.width;
			break;
		    case 'right':
			finalResult.coord.left = helper.geo.origin.windowOffset.right + finalResult.distance.horizontal;
			break;
		    case 'top':
			finalResult.coord.top = helper.geo.origin.windowOffset.top - finalResult.outerSize.height;
			break;
		    case 'bottom':
			finalResult.coord.top = helper.geo.origin.windowOffset.bottom + finalResult.distance.vertical;
			break;
		    }
		    if (finalResult.container == 'window') {
			if (finalResult.side == 'top' || finalResult.side == 'bottom') {
			    if (finalResult.coord.left < 0) {
				if (helper.geo.origin.windowOffset.right - this.__options.minIntersection >= 0) {
				    finalResult.coord.left = 0;
				} else {
				    finalResult.coord.left = helper.geo.origin.windowOffset.right - this.__options.minIntersection - 1;
				}
			    } else if (finalResult.coord.left > helper.geo.window.size.width - finalResult.size.width) {
				if (helper.geo.origin.windowOffset.left + this.__options.minIntersection <= helper.geo.window.size.width) {
				    finalResult.coord.left = helper.geo.window.size.width - finalResult.size.width;
				} else {
				    finalResult.coord.left = helper.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - finalResult.size.width;
				}
			    }
			} else {
			    if (finalResult.coord.top < 0) {
				if (helper.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0) {
				    finalResult.coord.top = 0;
				} else {
				    finalResult.coord.top = helper.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1;
				}
			    } else if (finalResult.coord.top > helper.geo.window.size.height - finalResult.size.height) {
				if (helper.geo.origin.windowOffset.top + this.__options.minIntersection <= helper.geo.window.size.height) {
				    finalResult.coord.top = helper.geo.window.size.height - finalResult.size.height;
				} else {
				    finalResult.coord.top = helper.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - finalResult.size.height;
				}
			    }
			}
		    } else {
			if (finalResult.coord.left > helper.geo.window.size.width - finalResult.size.width) {
			    finalResult.coord.left = helper.geo.window.size.width - finalResult.size.width;
			}
			if (finalResult.coord.left < 0) {
			    finalResult.coord.left = 0;
			}
		    }
		    self.__sideChange($clone, finalResult.side);
		    helper.tooltipClone = $clone[0];
		    helper.tooltipParent = self.__instance.option('parent').parent[0];
		    helper.mode = finalResult.mode;
		    helper.whole = finalResult.whole;
		    helper.origin = self.__instance._$origin[0];
		    helper.tooltip = self.__instance._$tooltip[0];
		    delete finalResult.container;
		    delete finalResult.fits;
		    delete finalResult.mode;
		    delete finalResult.outerSize;
		    delete finalResult.whole;
		    finalResult.distance = finalResult.distance.horizontal || finalResult.distance.vertical;
		    var finalResultClone = $.extend(true, {}, finalResult);
		    self.__instance._trigger({
			edit: function(result) {
			    finalResult = result;
			},
			event: event,
			helper: helper,
			position: finalResultClone,
			type: 'position'
		    });
		    if (self.__options.functionPosition) {
			var result = self.__options.functionPosition.call(self, self.__instance, helper, finalResultClone);
			if (result)
			    finalResult = result;
		    }
		    ruler.destroy();
		    var arrowCoord, maxVal;
		    if (finalResult.side == 'top' || finalResult.side == 'bottom') {
			arrowCoord = {
			    prop: 'left',
			    val: finalResult.target - finalResult.coord.left
			};
			maxVal = finalResult.size.width - this.__options.minIntersection;
		    } else {
			arrowCoord = {
			    prop: 'top',
			    val: finalResult.target - finalResult.coord.top
			};
			maxVal = finalResult.size.height - this.__options.minIntersection;
		    }
		    if (arrowCoord.val < this.__options.minIntersection) {
			arrowCoord.val = this.__options.minIntersection;
		    } else if (arrowCoord.val > maxVal) {
			arrowCoord.val = maxVal;
		    }
		    var originParentOffset;
		    if (helper.geo.origin.fixedLineage) {
			originParentOffset = helper.geo.origin.windowOffset;
		    } else {
			originParentOffset = {
			    left: helper.geo.origin.windowOffset.left + helper.geo.window.scroll.left,
			    top: helper.geo.origin.windowOffset.top + helper.geo.window.scroll.top
			};
		    }
		    finalResult.coord = {
			left: originParentOffset.left + (finalResult.coord.left - helper.geo.origin.windowOffset.left),
			top: originParentOffset.top + (finalResult.coord.top - helper.geo.origin.windowOffset.top)
		    };
		    self.__sideChange(self.__instance._$tooltip, finalResult.side);
		    if (helper.geo.origin.fixedLineage) {
			self.__instance._$tooltip.css('position', 'fixed');
		    } else {
			self.__instance._$tooltip.css('position', '');
		    }
		    self.__instance._$tooltip.css({
			left: finalResult.coord.left,
			top: finalResult.coord.top,
			height: finalResult.size.height,
			width: finalResult.size.width
		    }).find('.tooltipster-arrow').css({
			'left': '',
			'top': ''
		    }).css(arrowCoord.prop, arrowCoord.val);
		    self.__instance._$tooltip.appendTo(self.__instance.option('parent'));
		    self.__instance._trigger({
			type: 'repositioned',
			event: event,
			position: finalResult
		    });
		},
		__sideChange: function($obj, side) {
		    $obj.removeClass('tooltipster-bottom').removeClass('tooltipster-left').removeClass('tooltipster-right').removeClass('tooltipster-top').addClass('tooltipster-' + side);
		},
		__targetFind: function(helper) {
		    var target = {}
		      , rects = this.__instance._$origin[0].getClientRects();
		    if (rects.length > 1) {
			var opacity = this.__instance._$origin.css('opacity');
			if (opacity == 1) {
			    this.__instance._$origin.css('opacity', 0.99);
			    rects = this.__instance._$origin[0].getClientRects();
			    this.__instance._$origin.css('opacity', 1);
			}
		    }
		    if (rects.length < 2) {
			target.top = Math.floor(helper.geo.origin.windowOffset.left + (helper.geo.origin.size.width / 2));
			target.bottom = target.top;
			target.left = Math.floor(helper.geo.origin.windowOffset.top + (helper.geo.origin.size.height / 2));
			target.right = target.left;
		    } else {
			var targetRect = rects[0];
			target.top = Math.floor(targetRect.left + (targetRect.right - targetRect.left) / 2);
			if (rects.length > 2) {
			    targetRect = rects[Math.ceil(rects.length / 2) - 1];
			} else {
			    targetRect = rects[0];
			}
			target.right = Math.floor(targetRect.top + (targetRect.bottom - targetRect.top) / 2);
			targetRect = rects[rects.length - 1];
			target.bottom = Math.floor(targetRect.left + (targetRect.right - targetRect.left) / 2);
			if (rects.length > 2) {
			    targetRect = rects[Math.ceil((rects.length + 1) / 2) - 1];
			} else {
			    targetRect = rects[rects.length - 1];
			}
			target.left = Math.floor(targetRect.top + (targetRect.bottom - targetRect.top) / 2);
		    }
		    return target;
		}
	    }
	});
	return $;
    }));
    (function(define) {
	define(['jquery'], function($) {
	    return (function() {
		var $container;
		var listener;
		var toastId = 0;
		var toastType = {
		    error: 'error',
		    info: 'info',
		    success: 'success',
		    warning: 'warning'
		};
		var toastr = {
		    clear: clear,
		    remove: remove,
		    error: error,
		    getContainer: getContainer,
		    info: info,
		    options: {},
		    subscribe: subscribe,
		    success: success,
		    version: '2.1.3',
		    warning: warning
		};
		var previousToast;
		return toastr;
		function error(message, title, optionsOverride) {
		    return notify({
			type: toastType.error,
			iconClass: getOptions().iconClasses.error,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		    });
		}
		function getContainer(options, create) {
		    if (!options) {
			options = getOptions();
		    }
		    $container = $('#' + options.containerId);
		    if ($container.length) {
			return $container;
		    }
		    if (create) {
			$container = createContainer(options);
		    }
		    return $container;
		}
		function info(message, title, optionsOverride) {
		    return notify({
			type: toastType.info,
			iconClass: getOptions().iconClasses.info,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		    });
		}
		function subscribe(callback) {
		    listener = callback;
		}
		function success(message, title, optionsOverride) {
		    return notify({
			type: toastType.success,
			iconClass: getOptions().iconClasses.success,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		    });
		}
		function warning(message, title, optionsOverride) {
		    return notify({
			type: toastType.warning,
			iconClass: getOptions().iconClasses.warning,
			message: message,
			optionsOverride: optionsOverride,
			title: title
		    });
		}
		function clear($toastElement, clearOptions) {
		    var options = getOptions();
		    if (!$container) {
			getContainer(options);
		    }
		    if (!clearToast($toastElement, options, clearOptions)) {
			clearContainer(options);
		    }
		}
		function remove($toastElement) {
		    var options = getOptions();
		    if (!$container) {
			getContainer(options);
		    }
		    if ($toastElement && $(':focus', $toastElement).length === 0) {
			removeToast($toastElement);
			return;
		    }
		    if ($container.children().length) {
			$container.remove();
		    }
		}
		function clearContainer(options) {
		    var toastsToClear = $container.children();
		    for (var i = toastsToClear.length - 1; i >= 0; i--) {
			clearToast($(toastsToClear[i]), options);
		    }
		}
		function clearToast($toastElement, options, clearOptions) {
		    var force = clearOptions && clearOptions.force ? clearOptions.force : false;
		    if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
			$toastElement[options.hideMethod]({
			    duration: options.hideDuration,
			    easing: options.hideEasing,
			    complete: function() {
				removeToast($toastElement);
			    }
			});
			return true;
		    }
		    return false;
		}
		function createContainer(options) {
		    $container = $('<div/>').attr('id', options.containerId).addClass(options.positionClass);
		    $container.appendTo($(options.target));
		    return $container;
		}
		function getDefaults() {
		    return {
			tapToDismiss: true,
			toastClass: 'toast',
			containerId: 'toast-container',
			debug: false,
			showMethod: 'fadeIn',
			showDuration: 300,
			showEasing: 'swing',
			onShown: undefined,
			hideMethod: 'fadeOut',
			hideDuration: 1000,
			hideEasing: 'swing',
			onHidden: undefined,
			closeMethod: false,
			closeDuration: false,
			closeEasing: false,
			closeOnHover: true,
			extendedTimeOut: 1000,
			iconClasses: {
			    error: 'toast-error',
			    info: 'toast-info',
			    success: 'toast-success',
			    warning: 'toast-warning'
			},
			iconClass: 'toast-info',
			positionClass: 'toast-top-right',
			timeOut: 5000,
			titleClass: 'toast-title',
			messageClass: 'toast-message',
			escapeHtml: false,
			target: 'body',
			closeHtml: '<button type="button">&times;</button>',
			closeClass: 'toast-close-button',
			newestOnTop: true,
			preventDuplicates: false,
			progressBar: false,
			progressClass: 'toast-progress',
			rtl: false
		    };
		}
		function publish(args) {
		    if (!listener) {
			return;
		    }
		    listener(args);
		}
		function notify(map) {
		    var options = getOptions();
		    var iconClass = map.iconClass || options.iconClass;
		    if (typeof (map.optionsOverride) !== 'undefined') {
			options = $.extend(options, map.optionsOverride);
			iconClass = map.optionsOverride.iconClass || iconClass;
		    }
		    if (shouldExit(options, map)) {
			return;
		    }
		    toastId++;
		    $container = getContainer(options, true);
		    var intervalId = null;
		    var $toastElement = $('<div/>');
		    var $titleElement = $('<div/>');
		    var $messageElement = $('<div/>');
		    var $progressElement = $('<div/>');
		    var $closeElement = $(options.closeHtml);
		    var progressBar = {
			intervalId: null,
			hideEta: null,
			maxHideTime: null
		    };
		    var response = {
			toastId: toastId,
			state: 'visible',
			startTime: new Date(),
			options: options,
			map: map
		    };
		    personalizeToast();
		    displayToast();
		    handleEvents();
		    publish(response);
		    if (options.debug && console) {
			console.log(response);
		    }
		    return $toastElement;
		    function escapeHtml(source) {
			if (source == null) {
			    source = '';
			}
			return source.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		    }
		    function personalizeToast() {
			setIcon();
			setTitle();
			setMessage();
			setCloseButton();
			setProgressBar();
			setRTL();
			setSequence();
			setAria();
		    }
		    function setAria() {
			var ariaValue = '';
			switch (map.iconClass) {
			case 'toast-success':
			case 'toast-info':
			    ariaValue = 'polite';
			    break;
			default:
			    ariaValue = 'assertive';
			}
			$toastElement.attr('aria-live', ariaValue);
		    }
		    function handleEvents() {
			if (options.closeOnHover) {
			    $toastElement.hover(stickAround, delayedHideToast);
			}
			if (!options.onclick && options.tapToDismiss) {
			    $toastElement.click(hideToast);
			}
			if (options.closeButton && $closeElement) {
			    $closeElement.click(function(event) {
				if (event.stopPropagation) {
				    event.stopPropagation();
				} else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
				    event.cancelBubble = true;
				}
				if (options.onCloseClick) {
				    options.onCloseClick(event);
				}
				hideToast(true);
			    });
			}
			if (options.onclick) {
			    $toastElement.click(function(event) {
				options.onclick(event);
				hideToast();
			    });
			}
		    }
		    function displayToast() {
			$toastElement.hide();
			$toastElement[options.showMethod]({
			    duration: options.showDuration,
			    easing: options.showEasing,
			    complete: options.onShown
			});
			if (options.timeOut > 0) {
			    intervalId = setTimeout(hideToast, options.timeOut);
			    progressBar.maxHideTime = parseFloat(options.timeOut);
			    progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
			    if (options.progressBar) {
				progressBar.intervalId = setInterval(updateProgress, 10);
			    }
			}
		    }
		    function setIcon() {
			if (map.iconClass) {
			    $toastElement.addClass(options.toastClass).addClass(iconClass);
			}
		    }
		    function setSequence() {
			if (options.newestOnTop) {
			    $container.prepend($toastElement);
			} else {
			    $container.append($toastElement);
			}
		    }
		    function setTitle() {
			if (map.title) {
			    var suffix = map.title;
			    if (options.escapeHtml) {
				suffix = escapeHtml(map.title);
			    }
			    $titleElement.append(suffix).addClass(options.titleClass);
			    $toastElement.append($titleElement);
			}
		    }
		    function setMessage() {
			if (map.message) {
			    var suffix = map.message;
			    if (options.escapeHtml) {
				suffix = escapeHtml(map.message);
			    }
			    $messageElement.append(suffix).addClass(options.messageClass);
			    $toastElement.append($messageElement);
			}
		    }
		    function setCloseButton() {
			if (options.closeButton) {
			    $closeElement.addClass(options.closeClass).attr('role', 'button');
			    $toastElement.prepend($closeElement);
			}
		    }
		    function setProgressBar() {
			if (options.progressBar) {
			    $progressElement.addClass(options.progressClass);
			    $toastElement.prepend($progressElement);
			}
		    }
		    function setRTL() {
			if (options.rtl) {
			    $toastElement.addClass('rtl');
			}
		    }
		    function shouldExit(options, map) {
			if (options.preventDuplicates) {
			    if (map.message === previousToast) {
				return true;
			    } else {
				previousToast = map.message;
			    }
			}
			return false;
		    }
		    function hideToast(override) {
			var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
			var duration = override && options.closeDuration !== false ? options.closeDuration : options.hideDuration;
			var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
			if ($(':focus', $toastElement).length && !override) {
			    return;
			}
			clearTimeout(progressBar.intervalId);
			return $toastElement[method]({
			    duration: duration,
			    easing: easing,
			    complete: function() {
				removeToast($toastElement);
				clearTimeout(intervalId);
				if (options.onHidden && response.state !== 'hidden') {
				    options.onHidden();
				}
				response.state = 'hidden';
				response.endTime = new Date();
				publish(response);
			    }
			});
		    }
		    function delayedHideToast() {
			if (options.timeOut > 0 || options.extendedTimeOut > 0) {
			    intervalId = setTimeout(hideToast, options.extendedTimeOut);
			    progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
			    progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
			}
		    }
		    function stickAround() {
			clearTimeout(intervalId);
			progressBar.hideEta = 0;
			$toastElement.stop(true, true)[options.showMethod]({
			    duration: options.showDuration,
			    easing: options.showEasing
			});
		    }
		    function updateProgress() {
			var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
			$progressElement.width(percentage + '%');
		    }
		}
		function getOptions() {
		    return $.extend({}, getDefaults(), toastr.options);
		}
		function removeToast($toastElement) {
		    if (!$container) {
			$container = getContainer();
		    }
		    if ($toastElement.is(':visible')) {
			return;
		    }
		    $toastElement.remove();
		    $toastElement = null;
		    if ($container.children().length === 0) {
			$container.remove();
			previousToast = undefined;
		    }
		}
	    }
	    )();
	});
    }(typeof define === 'function' && define.amd ? define : function(deps, factory) {
	if (typeof module !== 'undefined' && module.exports) {
	    module.exports = factory(require('jquery'));
	} else {
	    window.toastr = factory(window.jQuery);
	}
    }
    ));
    ;(function(factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
	    define(factory);
	    registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
	    module.exports = factory();
	    registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
	    var OldCookies = window.Cookies;
	    var api = window.Cookies = factory();
	    api.noConflict = function() {
		window.Cookies = OldCookies;
		return api;
	    }
	    ;
	}
    }(function() {
	function extend() {
	    var i = 0;
	    var result = {};
	    for (; i < arguments.length; i++) {
		var attributes = arguments[i];
		for (var key in attributes) {
		    result[key] = attributes[key];
		}
	    }
	    return result;
	}
	function init(converter) {
	    function api(key, value, attributes) {
		var result;
		if (typeof document === 'undefined') {
		    return;
		}
		if (arguments.length > 1) {
		    attributes = extend({
			path: '/'
		    }, api.defaults, attributes);
		    if (typeof attributes.expires === 'number') {
			var expires = new Date();
			expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
			attributes.expires = expires;
		    }
		    try {
			result = JSON.stringify(value);
			if (/^[\{\[]/.test(result)) {
			    value = result;
			}
		    } catch (e) {}
		    if (!converter.write) {
			value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
		    } else {
			value = converter.write(value, key);
		    }
		    key = encodeURIComponent(String(key));
		    key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
		    key = key.replace(/[\(\)]/g, escape);
		    return (document.cookie = [key, '=', value, attributes.expires ? ', expires=' + attributes.expires.toUTCString() : '', attributes.path ? ', path=' + attributes.path : '', attributes.domain ? ', domain=' + attributes.domain : '', attributes.secure ? ', secure' : ''].join(''));
		}
		if (!key) {
		    result = {};
		}
		var cookies = document.cookie ? document.cookie.split(', ') : [];
		var rdecode = /(%[0-9A-Z]{2})+/g;
		var i = 0;
		for (; i < cookies.length; i++) {
		    var parts = cookies[i].split('=');
		    var cookie = parts.slice(1).join('=');
		    if (cookie.charAt(0) === '"') {
			cookie = cookie.slice(1, -1);
		    }
		    try {
			var name = parts[0].replace(rdecode, decodeURIComponent);
			cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
			if (this.json) {
			    try {
				cookie = JSON.parse(cookie);
			    } catch (e) {}
			}
			if (key === name) {
			    result = cookie;
			    break;
			}
			if (!key) {
			    result[name] = cookie;
			}
		    } catch (e) {}
		}
		return result;
	    }
	    api.set = api;
	    api.get = function(key) {
		return api.call(api, key);
	    }
	    ;
	    api.getJSON = function() {
		return api.apply({
		    json: true
		}, [].slice.call(arguments));
	    }
	    ;
	    api.defaults = {};
	    api.remove = function(key, attributes) {
		api(key, '', extend(attributes, {
		    expires: -1
		}));
	    }
	    ;
	    api.withConverter = init;
	    return api;
	}
	return init(function() {});
    }));
    (function($) {
	'use strict';
	if (!$.event.special.destroyed) {
	    $.event.special.destroyed = {
		remove: function(o) {
		    if (o.handler) {
			o.handler();
		    }
		}
	    };
	}
	$.fn.extend({
	    maxlength: function(options, callback) {
		var documentBody = $('body')
		  , defaults = {
		    showOnReady: false,
		    alwaysShow: false,
		    threshold: 10,
		    warningClass: 'label label-success',
		    limitReachedClass: 'label label-important label-danger',
		    separator: ' / ',
		    preText: '',
		    postText: '',
		    showMaxLength: true,
		    placement: 'bottom',
		    message: null,
		    showCharsTyped: true,
		    validate: false,
		    utf8: false,
		    appendToParent: false,
		    twoCharLinebreak: true,
		    customMaxAttribute: null,
		    allowOverMax: false
		};
		if ($.isFunction(options) && !callback) {
		    callback = options;
		    options = {};
		}
		options = $.extend(defaults, options);
		function utf8Length(string) {
		    var utf8length = 0;
		    for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
			    utf8length++;
			} else if ((c > 127) && (c < 2048)) {
			    utf8length = utf8length + 2;
			} else {
			    utf8length = utf8length + 3;
			}
		    }
		    return utf8length;
		}
		function inputLength(input) {
		    var text = input.val();
		    if (options.twoCharLinebreak) {
			text = text.replace(/\r(?!\n)|\n(?!\r)/g, '\r\n');
		    } else {
			text = text.replace(new RegExp('\r?\n','g'), '\n');
		    }
		    var currentLength = 0;
		    if (options.utf8) {
			currentLength = utf8Length(text);
		    } else {
			currentLength = text.length;
		    }
		    return currentLength;
		}
		function truncateChars(input, maxlength) {
		    var text = input.val();
		    var newlines = 0;
		    if (options.twoCharLinebreak) {
			text = text.replace(/\r(?!\n)|\n(?!\r)/g, '\r\n');
			if (text.substr(text.length - 1) === '\n' && text.length % 2 === 1) {
			    newlines = 1;
			}
		    }
		    input.val(text.substr(0, maxlength - newlines));
		}
		function charsLeftThreshold(input, thereshold, maxlength) {
		    var output = true;
		    if (!options.alwaysShow && (maxlength - inputLength(input) > thereshold)) {
			output = false;
		    }
		    return output;
		}
		function remainingChars(input, maxlength) {
		    var length = maxlength - inputLength(input);
		    return length;
		}
		function showRemaining(currentInput, indicator) {
		    indicator.css({
			display: 'block'
		    });
		    currentInput.trigger('maxlength.shown');
		}
		function hideRemaining(currentInput, indicator) {
		    if (options.alwaysShow) {
			return;
		    }
		    indicator.css({
			display: 'none'
		    });
		    currentInput.trigger('maxlength.hidden');
		}
		function updateMaxLengthHTML(currentInputText, maxLengthThisInput, typedChars) {
		    var output = '';
		    if (options.message) {
			if (typeof options.message === 'function') {
			    output = options.message(currentInputText, maxLengthThisInput);
			} else {
			    output = options.message.replace('%charsTyped%', typedChars).replace('%charsRemaining%', maxLengthThisInput - typedChars).replace('%charsTotal%', maxLengthThisInput);
			}
		    } else {
			if (options.preText) {
			    output += options.preText;
			}
			if (!options.showCharsTyped) {
			    output += maxLengthThisInput - typedChars;
			} else {
			    output += typedChars;
			}
			if (options.showMaxLength) {
			    output += options.separator + maxLengthThisInput;
			}
			if (options.postText) {
			    output += options.postText;
			}
		    }
		    return output;
		}
		function manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator) {
		    if (maxLengthIndicator) {
			maxLengthIndicator.html(updateMaxLengthHTML(currentInput.val(), maxLengthCurrentInput, (maxLengthCurrentInput - remaining)));
			if (remaining > 0) {
			    if (charsLeftThreshold(currentInput, options.threshold, maxLengthCurrentInput)) {
				showRemaining(currentInput, maxLengthIndicator.removeClass(options.limitReachedClass).addClass(options.warningClass));
			    } else {
				hideRemaining(currentInput, maxLengthIndicator);
			    }
			} else {
			    showRemaining(currentInput, maxLengthIndicator.removeClass(options.warningClass).addClass(options.limitReachedClass));
			}
		    }
		    if (options.customMaxAttribute) {
			if (remaining < 0) {
			    currentInput.addClass('overmax');
			} else {
			    currentInput.removeClass('overmax');
			}
		    }
		}
		function getPosition(currentInput) {
		    var el = currentInput[0];
		    return $.extend({}, (typeof el.getBoundingClientRect === 'function') ? el.getBoundingClientRect() : {
			width: el.offsetWidth,
			height: el.offsetHeight
		    }, currentInput.offset());
		}
		function placeWithCSS(placement, maxLengthIndicator) {
		    if (!placement || !maxLengthIndicator) {
			return;
		    }
		    var POSITION_KEYS = ['top', 'bottom', 'left', 'right', 'position'];
		    var cssPos = {};
		    $.each(POSITION_KEYS, function(i, key) {
			var val = options.placement[key];
			if (typeof val !== 'undefined') {
			    cssPos[key] = val;
			}
		    });
		    maxLengthIndicator.css(cssPos);
		    return;
		}
		function place(currentInput, maxLengthIndicator) {
		    var pos = getPosition(currentInput);
		    if ($.type(options.placement) === 'function') {
			options.placement(currentInput, maxLengthIndicator, pos);
			return;
		    }
		    if ($.isPlainObject(options.placement)) {
			placeWithCSS(options.placement, maxLengthIndicator);
			return;
		    }
		    var inputOuter = currentInput.outerWidth()
		      , outerWidth = maxLengthIndicator.outerWidth()
		      , actualWidth = maxLengthIndicator.width()
		      , actualHeight = maxLengthIndicator.height();
		    if (options.appendToParent) {
			pos.top -= currentInput.parent().offset().top;
			pos.left -= currentInput.parent().offset().left;
		    }
		    switch (options.placement) {
		    case 'bottom':
			maxLengthIndicator.css({
			    top: pos.top + pos.height,
			    left: pos.left + pos.width / 2 - actualWidth / 2
			});
			break;
		    case 'top':
			maxLengthIndicator.css({
			    top: pos.top - actualHeight,
			    left: pos.left + pos.width / 2 - actualWidth / 2
			});
			break;
		    case 'left':
			maxLengthIndicator.css({
			    top: pos.top + pos.height / 2 - actualHeight / 2,
			    left: pos.left - actualWidth
			});
			break;
		    case 'right':
			maxLengthIndicator.css({
			    top: pos.top + pos.height / 2 - actualHeight / 2,
			    left: pos.left + pos.width
			});
			break;
		    case 'bottom-right':
			maxLengthIndicator.css({
			    top: pos.top + pos.height,
			    left: pos.left + pos.width
			});
			break;
		    case 'top-right':
			maxLengthIndicator.css({
			    top: pos.top - actualHeight,
			    left: pos.left + inputOuter
			});
			break;
		    case 'top-left':
			maxLengthIndicator.css({
			    top: pos.top - actualHeight,
			    left: pos.left - outerWidth
			});
			break;
		    case 'bottom-left':
			maxLengthIndicator.css({
			    top: pos.top + currentInput.outerHeight(),
			    left: pos.left - outerWidth
			});
			break;
		    case 'centered-right':
			maxLengthIndicator.css({
			    top: pos.top + (actualHeight / 2),
			    left: pos.left + inputOuter - outerWidth - 3
			});
			break;
		    case 'bottom-right-inside':
			maxLengthIndicator.css({
			    top: pos.top + pos.height,
			    left: pos.left + pos.width - outerWidth
			});
			break;
		    case 'top-right-inside':
			maxLengthIndicator.css({
			    top: pos.top - actualHeight,
			    left: pos.left + inputOuter - outerWidth
			});
			break;
		    case 'top-left-inside':
			maxLengthIndicator.css({
			    top: pos.top - actualHeight,
			    left: pos.left
			});
			break;
		    case 'bottom-left-inside':
			maxLengthIndicator.css({
			    top: pos.top + currentInput.outerHeight(),
			    left: pos.left
			});
			break;
		    }
		}
		function isPlacementMutable() {
		    return options.placement === 'bottom-right-inside' || options.placement === 'top-right-inside' || typeof options.placement === 'function' || (options.message && typeof options.message === 'function');
		}
		function getMaxLength(currentInput) {
		    var max = currentInput.attr('maxlength') || options.customMaxAttribute;
		    if (options.customMaxAttribute && !options.allowOverMax) {
			var custom = currentInput.attr(options.customMaxAttribute);
			if (!max || custom < max) {
			    max = custom;
			}
		    }
		    if (!max) {
			max = currentInput.attr('size');
		    }
		    return max;
		}
		return this.each(function() {
		    var currentInput = $(this), maxLengthCurrentInput, maxLengthIndicator;
		    $(window).resize(function() {
			if (maxLengthIndicator) {
			    place(currentInput, maxLengthIndicator);
			}
		    });
		    function firstInit() {
			var maxlengthContent = updateMaxLengthHTML(currentInput.val(), maxLengthCurrentInput, '0');
			maxLengthCurrentInput = getMaxLength(currentInput);
			if (!maxLengthIndicator) {
			    maxLengthIndicator = $('<span class="bootstrap-maxlength"></span>').css({
				display: 'none',
				position: 'absolute',
				whiteSpace: 'nowrap',
				zIndex: 1099
			    }).html(maxlengthContent);
			}
			if (currentInput.is('textarea')) {
			    currentInput.data('maxlenghtsizex', currentInput.outerWidth());
			    currentInput.data('maxlenghtsizey', currentInput.outerHeight());
			    currentInput.mouseup(function() {
				if (currentInput.outerWidth() !== currentInput.data('maxlenghtsizex') || currentInput.outerHeight() !== currentInput.data('maxlenghtsizey')) {
				    place(currentInput, maxLengthIndicator);
				}
				currentInput.data('maxlenghtsizex', currentInput.outerWidth());
				currentInput.data('maxlenghtsizey', currentInput.outerHeight());
			    });
			}
			if (options.appendToParent) {
			    currentInput.parent().append(maxLengthIndicator);
			    currentInput.parent().css('position', 'relative');
			} else {
			    documentBody.append(maxLengthIndicator);
			}
			var remaining = remainingChars(currentInput, getMaxLength(currentInput));
			manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
			place(currentInput, maxLengthIndicator);
		    }
		    if (options.showOnReady) {
			currentInput.ready(function() {
			    firstInit();
			});
		    } else {
			currentInput.focus(function() {
			    firstInit();
			});
		    }
		    currentInput.on('maxlength.reposition', function() {
			place(currentInput, maxLengthIndicator);
		    });
		    currentInput.on('destroyed', function() {
			if (maxLengthIndicator) {
			    maxLengthIndicator.remove();
			}
		    });
		    currentInput.on('blur', function() {
			if (maxLengthIndicator && !options.showOnReady) {
			    maxLengthIndicator.remove();
			}
		    });
		    currentInput.on('input', function() {
			var maxlength = getMaxLength(currentInput)
			  , remaining = remainingChars(currentInput, maxlength)
			  , output = true;
			if (options.validate && remaining < 0) {
			    truncateChars(currentInput, maxlength);
			    output = false;
			} else {
			    manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
			}
			if (isPlacementMutable()) {
			    place(currentInput, maxLengthIndicator);
			}
			return output;
		    });
		});
	    }
	});
    }(jQuery));
    (function(factory) {
	if (typeof define === 'function' && define.amd) {
	    define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
	    factory(require('jquery'));
	} else {
	    factory(jQuery);
	}
    }(function($) {
	$.timeago = function(timestamp) {
	    if (timestamp instanceof Date) {
		return inWords(timestamp);
	    } else if (typeof timestamp === "string") {
		return inWords($.timeago.parse(timestamp));
	    } else if (typeof timestamp === "number") {
		return inWords(new Date(timestamp));
	    } else {
		return inWords($.timeago.datetime(timestamp));
	    }
	}
	;
	var $t = $.timeago;
	$.extend($.timeago, {
	    settings: {
		refreshMillis: 5000,
		allowPast: true,
		allowFuture: false,
		localeTitle: false,
		cutoff: 0,
		autoDispose: true,
		strings: {
		    prefixAgo: "",
		    prefixFromNow: null,
		    suffixAgo: "",
		    suffixFromNow: "from now",
		    inPast: lang.now,
		    seconds: lang.just_now,
		    minute: lang.minute,
		    minutes: "%d " + lang.minutes,
		    hour: "%d " + lang.hour,
		    hours: "%d " + lang.hours,
		    day: lang.day,
		    days: "%d " + lang.days,
		    month: lang.month,
		    months: "%d " + lang.months,
		    year: lang.year,
		    years: "%d " + lang.years,
		    wordSeparator: " ",
		    numbers: []
		}
	    },
	    inWords: function(distanceMillis) {
		if (!this.settings.allowPast && !this.settings.allowFuture) {
		    throw 'timeago allowPast and allowFuture settings can not both be set to false.';
		}
		var $l = this.settings.strings;
		var prefix = $l.prefixAgo;
		var suffix = $l.suffixAgo;
		if (this.settings.allowFuture) {
		    if (distanceMillis < 0) {
			prefix = $l.prefixFromNow;
			suffix = $l.suffixFromNow;
		    }
		}
		if (!this.settings.allowPast && distanceMillis >= 0) {
		    return this.settings.strings.inPast;
		}
		var seconds = Math.abs(distanceMillis) / 1000;
		var minutes = seconds / 60;
		var hours = minutes / 60;
		var days = hours / 24;
		var years = days / 365;
		function substitute(stringOrFunction, number) {
		    var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
		    var value = ($l.numbers && $l.numbers[number]) || number;
		    return string.replace(/%d/i, value);
		}
		var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) || seconds < 90 && substitute($l.minute, 1) || minutes < 45 && substitute($l.minutes, Math.round(minutes)) || minutes < 90 && substitute($l.hour, 1) || hours < 24 && substitute($l.hours, Math.round(hours)) || hours < 42 && substitute($l.day, 1) || days < 30 && substitute($l.days, Math.round(days)) || days < 45 && substitute($l.month, 1) || days < 365 && substitute($l.months, Math.round(days / 30)) || years < 1.5 && substitute($l.year, 1) || substitute($l.years, Math.round(years));
		var separator = $l.wordSeparator || "";
		if ($l.wordSeparator === undefined) {
		    separator = " ";
		}
		return $.trim([prefix, words, suffix].join(separator));
	    },
	    parse: function(iso8601) {
		var s = $.trim(iso8601);
		s = s.replace(/\.\d+/, "");
		s = s.replace(/-/, "/").replace(/-/, "/");
		s = s.replace(/T/, " ").replace(/Z/, " UTC");
		s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
		s = s.replace(/([\+\-]\d\d)$/, " $100");
		return new Date(s);
	    },
	    datetime: function(elem) {
		var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
		return $t.parse(iso8601);
	    },
	    isTime: function(elem) {
		return $(elem).get(0).tagName.toLowerCase() === "time";
	    }
	});
	var functions = {
	    init: function() {
		var refresh_el = $.proxy(refresh, this);
		refresh_el();
		var $s = $t.settings;
		if ($s.refreshMillis > 0) {
		    this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
		}
	    },
	    update: function(timestamp) {
		var date = (timestamp instanceof Date) ? timestamp : $t.parse(timestamp);
		$(this).data('timeago', {
		    datetime: date
		});
		if ($t.settings.localeTitle) {
		    $(this).attr("title", date.toLocaleString());
		}
		refresh.apply(this);
	    },
	    updateFromDOM: function() {
		$(this).data('timeago', {
		    datetime: $t.parse($t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title"))
		});
		refresh.apply(this);
	    },
	    dispose: function() {
		if (this._timeagoInterval) {
		    window.clearInterval(this._timeagoInterval);
		    this._timeagoInterval = null;
		}
	    }
	};
	$.fn.timeago = function(action, options) {
	    var fn = action ? functions[action] : functions.init;
	    if (!fn) {
		throw new Error("Unknown function name '" + action + "' for timeago");
	    }
	    this.each(function() {
		fn.call(this, options);
	    });
	    return this;
	}
	;
	function refresh() {
	    var $s = $t.settings;
	    if ($s.autoDispose && !$.contains(document.documentElement, this)) {
		$(this).timeago("dispose");
		return this;
	    }
	    var data = prepareData(this);
	    if (!isNaN(data.datetime)) {
		if ($s.cutoff === 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
		    var prefix = new String
		      , suffix = new String
		      , label = inWords(data.datetime);
		    if ($(this).attr("prefix"))
			prefix = $(this).attr("prefix");
		    if ($(this).attr("suffix") && label != lang.day && label != lang.just_now)
			suffix = " " + lang.ago;
		    $(this).text(prefix + inWords(data.datetime) + suffix);
		} else {
		    if ($(this).attr('title').length > 0) {
			$(this).text($(this).attr('title'));
		    }
		}
	    }
	    return this;
	}
	function prepareData(element) {
	    element = $(element);
	    if (!element.data("timeago")) {
		element.data("timeago", {
		    datetime: $t.datetime(element)
		});
		var text = $.trim(element.text());
		if ($t.settings.localeTitle) {
		    element.attr("title", element.data('timeago').datetime.toLocaleString());
		} else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
		    element.attr("title", text);
		}
	    }
	    return element.data("timeago");
	}
	function inWords(date) {
	    return $t.inWords(distance(date));
	}
	function distance(date) {
	    return (new Date().getTime() - date.getTime());
	}
	document.createElement("abbr");
	document.createElement("time");
    }));
    $(document).ready(function(e) {
	window.vars = new Array;
	window.vars.confirm = new Array;
	scrollbarWidth();
	reoptions();
	if (document.getElementById("GlonfXuqVJae")) {
	    GlonfXuqVJae = "No";
	} else {
	    GlonfXuqVJae = "Yes";
	    $(".wad > div").html('<div class="adb" color="yellow">' + lang.adblock_warning + '</div>');
	}
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 150 && $(document).height() > 1500)
		$(".go-top").css({
		    "opacity": 1,
		    "z-index": "1"
		});
	    else
		$(".go-top").css({
		    "opacity": 0,
		    "z-index": -999
		});
	});
	$(document).on("click", ".go-top", function() {
	    $("html, body").animate({
		scrollTop: 0
	    }, 300);
	});
	if (typeof ga !== "undefined") {
	    ga("send", "event", "Blocking Ads", GlonfXuqVJae, {
		"nonInteraction": 1
	    });
	} else if (typeof _gaq !== 'undefined') {
	    _gaq.push(["_trackEvent", "Blocking Ads", GlonfXuqVJae, undefined, undefined, true]);
	}

	$(document).on("click", ".tabs > [scrollbar] > ul > li:not([active])", function() {
	    $(".tabs > [scrollbar] li").removeAttr("active");
	    $(this).attr("active", true);
	    $(this).closest(".tabs").find(".tab-content").hide();
	    $(this).parent("ul").animate({
		scrollLeft: $(this).offset().left - $(this).parent("ul").offset().left
	    }, 300, "swing");
	    showTabContent($(this));
	});
	showTabContent($(".tabs > [scrollbar] li[active]"));
	$(document).on("click", "[toggle-class]", function() {
	    var d = $(this).attr("toggle-class").split(",")
	    e = d[0]
	    c = d[1];
	    $(e).toggleClass(c);
	});
	$(document).on("click", "[toggle]", function() {
	    $(this).toggleClass("active");
	    $($(this).attr("toggle")).toggle();
	    if ($(this).attr("focus") == "true")
		$(this).find("input:visible, textarea").first().focus();
	    return false;
	});
	$(document).on("click", ".page-text > span[bottom]", function() {
	    $(this).parent().find(".inner").css({
		"height": "inherit"
	    });
	    $(this).remove();
	});
	$(document).on("click", "[dropdown]", function() {
	    var e = $(this)
	      , d = e.parent().find(".menu")
	      , o = ($(window).width() - (e.offset().left + e.outerWidth()))
	      , l = e.offset().left;
	    $(".dropdown > .menu").not(d).hide().closest(".dropdown").removeClass("open");
	    if (l < d.outerWidth())
		d.css({
		    "left": 0,
		    "right": "inherit"
		});
	    if (o < d.outerWidth())
		d.css({
		    "right": 0
		});
	    d.toggle().closest(".dropdown").toggleClass("open");
	    return false;
	});
	$(document).on("click", function() {
	    $(".dropdown > .menu").not("[unclosable]").hide().closest(".dropdown").removeClass("open");
	});
	$(document).on("click", "[confirm]", function(event) {
	    var e = $(this)
	      , s = e.attr("confirm");
	    var c = '<a href="#" color="red" submit="' + s + '"><i class="icon-arrow-right"></i> ' + lang.confirm_button_label + '</a>' + '<a href="#" color="yellow" cancel><i class="icon-action-undo"></i> ' + lang.cancel_button_label + '</a>';
	    e.hide().after(c);
	    return false;
	});
	$(document).on("click", ".dropdown > .menu.actions a[cancel]", function(event) {
	    var e = $(this)
	      , p = e.parent();
	    p.find("[confirm]").show();
	    p.find("[submit], [cancel]").remove();
	    return false;
	});
	$(document).on("click", "[click]", function() {
	    window[$(this).attr("click")]();
	});
	$(document).on("click", "a[false]", function() {
	    return false;
	});
	$("[rel*='external']").attr("target", "_blank");
	$(document).on("click", "[browse]", function(event) {
	    $("#" + $(this).attr("browse")).click();
	});
	$(document).on("change", ".options input.checkbox", function(event) {
	    var o = $(".options input.checkbox")
	      , d = new Object
	      , c = new Object;
	    o.each(function(i, e) {
		if ($(e).is(":checked")) {
		    d[$(e).attr("id")] = 1;
		} else {
		    d[$(e).attr("id")] = 0;
		}
	    });
	    Cookies.set("options", d, {
		expires: 7,
		domain: "." + window.domain
	    });
	});
	$(document).on("click", "form[must-login] input, form[must-login] textarea", function() {
	    if (!window.login && !window.mobile) {
		loginSwal();
		$(this).closest("form").removeAttr("must-login");
	    }
	});
//	$(document).on("click", "[submit]", function() {
//	    window.form = $("form[" + $(this).attr("submit") + "]")[0];
//	    if ($(window.form).attr("must-login") && !window.login) {
//		loginSwal();
//	    } else {
//		$(window.form).submit();
//	    }
//	    return false;
//	});
//	window.ajaxform = function() {
//	    $(document).off("submit", "form[ajax]").on("submit", "form[ajax]", function() {
//		window.form = $(this)[0];
//		window.button = $(this).find("button[type='submit']")[0];
//	    });
//	    $("form[ajax]").ajaxForm({
//		beforeSubmit: function(arr, $form, options) {
//		    window.form = $form[0];
//		    window.button = $(window.form).find("button[type='submit']")[0];
//		    if ($(window.form).attr("must-login") && !window.login) {
//			loginSwal();
//			return false;
//		    }
//		    if (invalidInputs(window.form))
//			return false;
//		    $(window.button).prop("disabled", true);
//		    $(window.form).find(".tooltipstered[tooltip-error]").removeAttr("tooltip-error").tooltipster("destroy");
//		},
//		error: function() {
//		    anError();
//		},
//		success: function(data) {
//		    try {
//			var response = $.parseJSON(data);
//			if (response.result == "true") {
//			    if (response.text && !response.callback) {
//				swal({
//				    title: lang.success_title,
//				    text: response.text,
//				    type: "success",
//				});
//			    }
//			    if ($(window.form).attr("reset") == "true")
//				$(window.form)[0].reset();
//			    if (response.callback) {
//				window[response.callback](response);
//			    } else if (response.redirect) {
//				setTimeout(function() {
//				    if (response.redirect == "reload")
//					window.location.reload();
//				    else
//					window.location.href = response.redirect;
//				}, response.timeout);
//			    } else if ($(window.form).attr("redirect")) {
//				setTimeout(function() {
//				    if ($(window.form).attr("redirect") == "reload")
//					window.location.reload();
//				    else
//					window.location.href = $(window.form).attr("redirect");
//				}, $(window.form).attr("delay"));
//			    }
//			} else {
//			    var elements = new Array
//			      , type = new String
//			      , content = new String
//			      , title = new String;
//			    $(response.errors).each(function(i, error) {
//				if ($(window.form).find("*[tip='" + error.element + "']").length)
//				    var element = $(window.form).find("*[tip='" + error.element + "']");
//				else
//				    var element = $(window.form).find("*[name='" + error.element + "']");
//				if ($(element).length) {
//				    $(element).attr({
//					"tooltip-error": "",
//					"error": ""
//				    });
//				    if (error.text != "mark-error") {
//					$(element).attr("title", error.text);
//					elements.push($(element));
//				    }
//				} else {
//				    content = content + "<li>" + error.text + "</li>";
//				}
//			    });
//			    if (elements.length > 0) {
//				if (!$(".modal:visible").length) {
//				    $("html, body").animate({
//					scrollTop: $("[error]:first").offset().top - 75
//				    }, 300);
//				}
//				window.tooltip();
//				setTimeout(function() {
//				    $(window.form).find(".tooltipstered[tooltip-error]").tooltipster("show");
//				}, 50);
//			    } else {
//				switch (response.type) {
//				case "info":
//				    title = lang.info_title;
//				    type = "info";
//				    break;
//				case "warning":
//				    title = lang.warning_title;
//				    type = "warning";
//				    break;
//				default:
//				    title = lang.error_title;
//				    type = "error";
//				    break;
//				}
//				swal({
//				    title: title,
//				    text: content,
//				    type: type,
//				});
//			    }
//			    if (response.redirect) {
//				setTimeout(function() {
//				    window.location.href = response.redirect;
//				}, response.timeout);
//			    }
//			}
//			if ($(window.form).attr("callback"))
//			    window[$(window.form).attr("callback")](response);
//		    } catch (error) {
//			anError();
//		    }
//		    setTimeout(function() {
//			$(window.button).prop("disabled", false);
//		    }, 2000);
//		}
//	    });
//	    $("form[ajax] button[submit]").attr("type", "submit").removeAttr("submit");
//	}
//	window.ajaxform();
	$(document).on("click", ".tooltipstered[tooltip-error]", function() {
	    $(this).removeAttr("tooltip-error").tooltipster("destroy");
	});
	window.tooltip = function() {
	    $("[tooltip-error]:not([title=''])").tooltipster({
		theme: "tooltipster-borderless-error",
		animation: "grow"
	    });
	    $("[tooltip]:not([title=''])").tooltipster({
		theme: "tooltipster-borderless",
		animation: "grow"
	    });
	}
	window.tooltip();
	window.timeago = function() {
	    $("time").timeago();
	}
	window.timeago();
	window.maxlength = function() {
	    $("[maxlength]").maxlength({
		threshold: 20,
	    });
	}
	window.maxlength();
	autosize($("textarea"));
	window.scrollbar = function() {
	    $("[scrollbar]").scrollbar({
		"onInit": function(y, x) {
		    var thickness = y.attr("scrollbar");
		    y.removeAttr("scrollbar").closest(".scroll-wrapper").addClass(thickness).attr("scrollbar", "true");
		}
	    });
	    $("[wheel-scroll]").bind("mousewheel DOMMouseScroll", function(e) {
		var o = $(this)
		  , d = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail)
		  , s = o[0].scrollWidth
		  , w = s / 5;
		d = (d < 0 ? w : (w * -1));
		$(this).stop().animate({
		    scrollLeft: $(o).scrollLeft() + d
		}, 100, "swing");
		if ((s - 10) > o.width())
		    e.preventDefault();
	    });
	}
	window.scrollbar();
	$("[hidden-scroll]").wrapInner('<div class="hsw" style="margin-right: -' + window.scrollbarWidth + 'px"></div>');
//	$.post(window.url + "async/", function(data) {
//	    $("body").append(data);
//	    if (!window.login) {
//		$.post(window.url + "ajax/user/user.ajax.php?a=facebook-login-url", function(url) {
//		    $("a[facebook-login-url]").attr("href", url).removeAttr("false");
//		});
//	    }
//	});
//	$(document).on("click", "a[facebook-login-url]:not([false])", function() {
//	    $(this).attr("false", true).find("span").text(lang.please_wait_label);
//	});
	$(document).on("click", "*[modal]", function() {
	    modalOpen(this);
	    return false;
	});
	$(document).on("click", ".modal-body > .icon-close", function() {
	    modalClose($(this).closest(".modal"));
	});
	$(document).on("click", function(e) {
	    if ($(e.target).attr("class") == "modal")
		modalClose($(e.target));
	});
	$(document).on("click", "[feedback-modal]", function() {
	    if (window.login) {
		var d = JSON.parse($(this).closest("[data]").attr("data"))
		  , m = $("#feedback-modal");
		m.find('[name="mod"]').val(d[1]);
		m.find('[name="mod_id"]').val(d[0]);
		modalOpen("#feedback-modal");
	    } else {
		loginSwal();
	    }
	    return false;
	});
	$(document).on("click", ".login-swal button.swal2-cancel", function() {
	    setTimeout(function() {
		modalOpen($("[modal='#signin-modal']"));
	    }, 300);
	});
	$(document).on("click", ".login-swal button.swal2-confirm", function() {
	    document.location.href = window.url + "signup/";
	});
	$(document).on("click", ".dropdown > .menu.actions > a[action]", function() {
	    var e = $(this)
	      , r = $(this).closest(".actions");
	    d = r.attr("data");
	    r.hide();
	    window[$(e).attr("action")](e, d);
	    return false;
	});
	$(document).on("keyup", function(e) {
	    var keyCode = e.keyCode || e.which;
	    if (keyCode == 27) {
		if ($(".cropper-hidden").length)
		    $("span[download] div[custom]").click();
		$(".modal").fadeOut();
		$(".zoom i").click();
	    }
	});
	$("body").attr("transition-sub", true);
    });
    function showTabContent(elements) {
	$(elements).each(function(index, element) {
	    $($(element).attr("target")).show();
	});
    }
    function invalidInputs(wrapper) {
	var errors = 0;
	$("[error]").removeAttr("error");
	$(wrapper).find("*[req]").each(function(index, element) {
	    if ($(element).attr("type") == "radio") {
		var label = $(wrapper).find("label[" + $(element).attr("name") + "]");
		if ($(wrapper).find("input[name='" + $(element).attr("name") + "']:checked").length == 0) {
		    label.attr("error", "");
		    errors++;
		} else {
		    label.removeAttr("error");
		}
	    } else {
		if (!$(element).val()) {
		    $(element).attr("error", "");
		    errors++;
		} else {
		    $(element).removeAttr("error");
		}
	    }
	});
	if (errors > 0)
	    return true;
    }
    function anError() {
	swal({
	    title: lang.error_title,
	    text: lang.an_error_text,
	    type: "error",
	});
//	setTimeout(function() {
//	    $(window.button).prop("disabled", false);
//	}, 2500);
    }
    function loginSwal() {
	swal({
	    title: lang.info_title,
	    text: lang.login_first_text,
	    type: "info",
	    confirmButtonText: lang.signup_button_label,
	    cancelButtonText: lang.login_button_label,
	    showCancelButton: true,
	    customClass: "login-swal",
	});
    }
    function feedbackAppend() {
	var m = $("#feedback-modal");
	m.find("input").val("");
	m.find("form")[0].reset();
	m.fadeOut(300);
	setTimeout(function() {
	    swal({
		title: lang.success_title,
		text: lang.feedback_append_success_text,
		type: "success",
	    });
	}, 300);
    }
    function modalOpen(e) {
	var element = $($(e).attr("modal"))
	  , timeout = 0;
	if (typeof e == "string") {
	    element = $(e);
	}
	if (!element.length)
	    return false;
	if ($(".modal:visible").length) {
	    timeout = 300;
	    modalClose(".modal");
	}
	setTimeout(function() {
	    element.fadeIn(300);
	    element.find("input:visible, textarea").each(function(i, e) {
		if (!$(e).val()) {
		    $(e).focus();
		    return false;
		}
	    });
	    if (!window.mobile && $("body")[0].scrollHeight < $("body").height())
		$("body").css({
		    "overflow": "hidden",
		    "padding-right": window.scrollbarWidth
		});
	}, timeout);
    }
    function modalClose(e) {
	$(e).fadeOut(300);
	setTimeout(function() {
	    $("body").removeAttr("style");
	}, 300);
    }
    function scrollbarWidth() {
	var o = $('<div>').css({
	    visibility: "hidden",
	    width: 100,
	    overflow: "scroll"
	}).appendTo("body")
	  , w = $('<div>').css({
	    width: '100%'
	}).appendTo(o).outerWidth();
	o.remove();
	window.scrollbarWidth = 100 - w;
    }
    function domCount(e, i) {
	typeof i == "undefined" ? i = "inc" : is = "dec";
	$(e).each(function(index, element) {
	    var c = parseInt($(element).text());
	    if (i == "inc") {
		$(element).text(c + 1);
	    } else {
		if (c > 0)
		    $(element).text(c - 1);
	    }
	});
    }
    function preloader(e) {
	$(e).addClass("preloader");
    }
    function reoptions() {
	if (typeof Cookies.get("options") == "undefined")
	    {
            Cookies.set("options", window.doptions, {
            expires: 7,
            domain: "." + window.domain
            });
	    }

	window.options = $.parseJSON(Cookies.get("options"));
    }
    