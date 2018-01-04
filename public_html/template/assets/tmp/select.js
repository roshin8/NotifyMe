!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b = function() {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd)
            var b = a.fn.select2.amd;
        var b;
        return function() {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};
                var a, c, d;
                !function(b) {
                    function e(a, b) {
                        return u.call(a, b)
                    }
                    function f(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {};
                        if (a && "." === a.charAt(0))
                            if (b) {
                                for (a = a.split("/"),
                                g = a.length - 1,
                                s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")),
                                a = n.slice(0, n.length - 1).concat(a),
                                k = 0; k < a.length; k += 1)
                                    if (m = a[k],
                                    "." === m)
                                        a.splice(k, 1),
                                        k -= 1;
                                    else if (".." === m) {
                                        if (1 === k && (".." === a[2] || ".." === a[0]))
                                            break;
                                        k > 0 && (a.splice(k - 1, 2),
                                        k -= 2)
                                    }
                                a = a.join("/")
                            } else
                                0 === a.indexOf("./") && (a = a.substring(2));
                        if ((n || p) && o) {
                            for (c = a.split("/"),
                            k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"),
                                n)
                                    for (l = n.length; l > 0; l -= 1)
                                        if (e = o[n.slice(0, l).join("/")],
                                        e && (e = e[d])) {
                                            f = e,
                                            h = k;
                                            break
                                        }
                                if (f)
                                    break;
                                !i && p && p[d] && (i = p[d],
                                j = k)
                            }
                            !f && i && (f = i,
                            h = j),
                            f && (c.splice(0, h, f),
                            a = c.join("/"))
                        }
                        return a
                    }
                    function g(a, c) {
                        return function() {
                            var d = v.call(arguments, 0);
                            return "string" != typeof d[0] && 1 === d.length && d.push(null),
                            n.apply(b, d.concat([a, c]))
                        }
                    }
                    function h(a) {
                        return function(b) {
                            return f(b, a)
                        }
                    }
                    function i(a) {
                        return function(b) {
                            q[a] = b
                        }
                    }
                    function j(a) {
                        if (e(r, a)) {
                            var c = r[a];
                            delete r[a],
                            t[a] = !0,
                            m.apply(b, c)
                        }
                        if (!e(q, a) && !e(t, a))
                            throw new Error("No " + a);
                        return q[a]
                    }
                    function k(a) {
                        var b, c = a ? a.indexOf("!") : -1;
                        return c > -1 && (b = a.substring(0, c),
                        a = a.substring(c + 1, a.length)),
                        [b, a]
                    }
                    function l(a) {
                        return function() {
                            return s && s.config && s.config[a] || {}
                        }
                    }
                    var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice, w = /\.js$/;
                    o = function(a, b) {
                        var c, d = k(a), e = d[0];
                        return a = d[1],
                        e && (e = f(e, b),
                        c = j(e)),
                        e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b),
                        d = k(a),
                        e = d[0],
                        a = d[1],
                        e && (c = j(e))),
                        {
                            f: e ? e + "!" + a : a,
                            n: a,
                            pr: e,
                            p: c
                        }
                    }
                    ,
                    p = {
                        require: function(a) {
                            return g(a)
                        },
                        exports: function(a) {
                            var b = q[a];
                            return "undefined" != typeof b ? b : q[a] = {}
                        },
                        module: function(a) {
                            return {
                                id: a,
                                uri: "",
                                exports: q[a],
                                config: l(a)
                            }
                        }
                    },
                    m = function(a, c, d, f) {
                        var h, k, l, m, n, s, u = [], v = typeof d;
                        if (f = f || a,
                        "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length ? ["require", "exports", "module"] : c,
                            n = 0; n < c.length; n += 1)
                                if (m = o(c[n], f),
                                k = m.f,
                                "require" === k)
                                    u[n] = p.require(a);
                                else if ("exports" === k)
                                    u[n] = p.exports(a),
                                    s = !0;
                                else if ("module" === k)
                                    h = u[n] = p.module(a);
                                else if (e(q, k) || e(r, k) || e(t, k))
                                    u[n] = j(k);
                                else {
                                    if (!m.p)
                                        throw new Error(a + " missing " + k);
                                    m.p.load(m.n, g(f, !0), i(k), {}),
                                    u[n] = q[k]
                                }
                            l = d ? d.apply(q[a], u) : void 0,
                            a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                        } else
                            a && (q[a] = d)
                    }
                    ,
                    a = c = n = function(a, c, d, e, f) {
                        if ("string" == typeof a)
                            return p[a] ? p[a](c) : j(o(a, c).f);
                        if (!a.splice) {
                            if (s = a,
                            s.deps && n(s.deps, s.callback),
                            !c)
                                return;
                            c.splice ? (a = c,
                            c = d,
                            d = null) : a = b
                        }
                        return c = c || function() {}
                        ,
                        "function" == typeof d && (d = e,
                        e = f),
                        e ? m(b, a, c, d) : setTimeout(function() {
                            m(b, a, c, d)
                        }, 4),
                        n
                    }
                    ,
                    n.config = function(a) {
                        return n(a)
                    }
                    ,
                    a._defined = q,
                    d = function(a, b, c) {
                        if ("string" != typeof a)
                            throw new Error("See almond README: incorrect module build, no module name");
                        b.splice || (c = b,
                        b = []),
                        e(q, a) || e(r, a) || (r[a] = [a, b, c])
                    }
                    ,
                    d.amd = {
                        jQuery: !0
                    }
                }(),
                b.requirejs = a,
                b.require = c,
                b.define = d
            }
        }(),
        b.define("almond", function() {}),
        b.define("jquery", [], function() {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            b
        }),
        b.define("select2/utils", ["jquery"], function(a) {
            function b(a) {
                var b = a.prototype
                  , c = [];
                for (var d in b) {
                    var e = b[d];
                    "function" == typeof e && "constructor" !== d && c.push(d)
                }
                return c
            }
            var c = {};
            c.Extend = function(a, b) {
                function c() {
                    this.constructor = a
                }
                var d = {}.hasOwnProperty;
                for (var e in b)
                    d.call(b, e) && (a[e] = b[e]);
                return c.prototype = b.prototype,
                a.prototype = new c,
                a.__super__ = b.prototype,
                a
            }
            ,
            c.Decorate = function(a, c) {
                function d() {
                    var b = Array.prototype.unshift
                      , d = c.prototype.constructor.length
                      , e = a.prototype.constructor;
                    d > 0 && (b.call(arguments, a.prototype.constructor),
                    e = c.prototype.constructor),
                    e.apply(this, arguments)
                }
                function e() {
                    this.constructor = d
                }
                var f = b(c)
                  , g = b(a);
                c.displayName = a.displayName,
                d.prototype = new e;
                for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    d.prototype[i] = a.prototype[i]
                }
                for (var j = (function(a) {
                    var b = function() {};
                    a in d.prototype && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function() {
                        var a = Array.prototype.unshift;
                        return a.call(arguments, b),
                        e.apply(this, arguments)
                    }
                }), k = 0; k < f.length; k++) {
                    var l = f[k];
                    d.prototype[l] = j(l)
                }
                return d
            }
            ;
            var d = function() {
                this.listeners = {}
            };
            return d.prototype.on = function(a, b) {
                this.listeners = this.listeners || {},
                a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
            }
            ,
            d.prototype.trigger = function(a) {
                var b = Array.prototype.slice
                  , c = b.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == c && (c = []),
                0 === c.length && c.push({}),
                c[0]._type = a,
                a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            d.prototype.invoke = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    a[c].apply(this, b)
            }
            ,
            c.Observable = d,
            c.generateChars = function(a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());
                    b += d.toString(36)
                }
                return b
            }
            ,
            c.bind = function(a, b) {
                return function() {
                    a.apply(b, arguments)
                }
            }
            ,
            c._convertData = function(a) {
                for (var b in a) {
                    var c = b.split("-")
                      , d = a;
                    if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f = f.substring(0, 1).toLowerCase() + f.substring(1),
                            f in d || (d[f] = {}),
                            e == c.length - 1 && (d[f] = a[b]),
                            d = d[f]
                        }
                        delete a[b]
                    }
                }
                return a
            }
            ,
            c.hasScroll = function(b, c) {
                var d = a(c)
                  , e = c.style.overflowX
                  , f = c.style.overflowY;
                return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
            }
            ,
            c.escapeMarkup = function(a) {
                var b = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                    return b[a]
                })
            }
            ,
            c.appendMany = function(b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();
                    a.map(c, function(a) {
                        d = d.add(a)
                    }),
                    c = d
                }
                b.append(c)
            }
            ,
            c
        }),
        b.define("select2/results", ["jquery", "./utils"], function(a, b) {
            function c(a, b, d) {
                this.$element = a,
                this.data = d,
                this.options = b,
                c.__super__.constructor.call(this)
            }
            return b.Extend(c, b.Observable),
            c.prototype.render = function() {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && b.attr("aria-multiselectable", "true"),
                this.$results = b,
                b
            }
            ,
            c.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            c.prototype.displayMessage = function(b) {
                var c = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>')
                  , e = this.options.get("translations").get(b.message);
                d.append(c(e(b.args))),
                d[0].className += " select2-results__message",
                this.$results.append(d)
            }
            ,
            c.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            c.prototype.append = function(a) {
                this.hideLoading();
                var b = [];
                if (null == a.results || 0 === a.results.length)
                    return void (0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                a.results = this.sort(a.results);
                for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c]
                      , e = this.option(d);
                    b.push(e)
                }
                this.$results.append(b)
            }
            ,
            c.prototype.position = function(a, b) {
                var c = b.find(".select2-results");
                c.append(a)
            }
            ,
            c.prototype.sort = function(a) {
                var b = this.options.get("sorter");
                return b(a)
            }
            ,
            c.prototype.highlightFirstItem = function() {
                var a = this.$results.find(".select2-results__option[aria-selected]")
                  , b = a.filter("[aria-selected=true]");
                b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"),
                this.ensureHighlightVisible()
            }
            ,
            c.prototype.setClasses = function() {
                var b = this;
                this.data.current(function(c) {
                    var d = a.map(c, function(a) {
                        return a.id.toString()
                    })
                      , e = b.$results.find(".select2-results__option[aria-selected]");
                    e.each(function() {
                        var b = a(this)
                          , c = a.data(this, "data")
                          , e = "" + c.id;
                        null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                    })
                })
            }
            ,
            c.prototype.showLoading = function(a) {
                this.hideLoading();
                var b = this.options.get("translations").get("searching")
                  , c = {
                    disabled: !0,
                    loading: !0,
                    text: b(a)
                }
                  , d = this.option(c);
                d.className += " loading-results",
                this.$results.prepend(d)
            }
            ,
            c.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            c.prototype.option = function(b) {
                var c = document.createElement("li");
                c.className = "select2-results__option";
                var d = {
                    role: "treeitem",
                    "aria-selected": "false"
                };
                b.disabled && (delete d["aria-selected"],
                d["aria-disabled"] = "true"),
                null == b.id && delete d["aria-selected"],
                null != b._resultId && (c.id = b._resultId),
                b.title && (c.title = b.title),
                b.children && (d.role = "group",
                d["aria-label"] = b.text,
                delete d["aria-selected"]);
                for (var e in d) {
                    var f = d[e];
                    c.setAttribute(e, f)
                }
                if (b.children) {
                    var g = a(c)
                      , h = document.createElement("strong");
                    h.className = "select2-results__group";
                    a(h);
                    this.template(b, h);
                    for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j]
                          , l = this.option(k);
                        i.push(l)
                    }
                    var m = a("<ul></ul>", {
                        "class": "select2-results__options select2-results__options--nested"
                    });
                    m.append(i),
                    g.append(h),
                    g.append(m)
                } else
                    this.template(b, c);
                return a.data(c, "data", b),
                c
            }
            ,
            c.prototype.bind = function(b, c) {
                var d = this
                  , e = b.id + "-results";
                this.$results.attr("id", e),
                b.on("results:all", function(a) {
                    d.clear(),
                    d.append(a.data),
                    b.isOpen() && (d.setClasses(),
                    d.highlightFirstItem())
                }),
                b.on("results:append", function(a) {
                    d.append(a.data),
                    b.isOpen() && d.setClasses()
                }),
                b.on("query", function(a) {
                    d.hideMessages(),
                    d.showLoading(a)
                }),
                b.on("select", function() {
                    b.isOpen() && (d.setClasses(),
                    d.highlightFirstItem())
                }),
                b.on("unselect", function() {
                    b.isOpen() && (d.setClasses(),
                    d.highlightFirstItem())
                }),
                b.on("open", function() {
                    d.$results.attr("aria-expanded", "true"),
                    d.$results.attr("aria-hidden", "false"),
                    d.setClasses(),
                    d.ensureHighlightVisible()
                }),
                b.on("close", function() {
                    d.$results.attr("aria-expanded", "false"),
                    d.$results.attr("aria-hidden", "true"),
                    d.$results.removeAttr("aria-activedescendant")
                }),
                b.on("results:toggle", function() {
                    var a = d.getHighlightedResults();
                    0 !== a.length && a.trigger("mouseup")
                }),
                b.on("results:select", function() {
                    var a = d.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = a.data("data");
                        "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                            data: b
                        })
                    }
                }),
                b.on("results:previous", function() {
                    var a = d.getHighlightedResults()
                      , b = d.$results.find("[aria-selected]")
                      , c = b.index(a);
                    if (0 !== c) {
                        var e = c - 1;
                        0 === a.length && (e = 0);
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top
                          , h = f.offset().top
                          , i = d.$results.scrollTop() + (h - g);
                        0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                    }
                }),
                b.on("results:next", function() {
                    var a = d.getHighlightedResults()
                      , b = d.$results.find("[aria-selected]")
                      , c = b.index(a)
                      , e = c + 1;
                    if (!(e >= b.length)) {
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top + d.$results.outerHeight(!1)
                          , h = f.offset().top + f.outerHeight(!1)
                          , i = d.$results.scrollTop() + h - g;
                        0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                    }
                }),
                b.on("results:focus", function(a) {
                    a.element.addClass("select2-results__option--highlighted")
                }),
                b.on("results:message", function(a) {
                    d.displayMessage(a)
                }),
                a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                    var b = d.$results.scrollTop()
                      , c = d.$results.get(0).scrollHeight - b + a.deltaY
                      , e = a.deltaY > 0 && b - a.deltaY <= 0
                      , f = a.deltaY < 0 && c <= d.$results.height();
                    e ? (d.$results.scrollTop(0),
                    a.preventDefault(),
                    a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()),
                    a.preventDefault(),
                    a.stopPropagation())
                }),
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                    var c = a(this)
                      , e = c.data("data");
                    return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", {
                        originalEvent: b,
                        data: e
                    }) : d.trigger("close", {})) : void d.trigger("select", {
                        originalEvent: b,
                        data: e
                    })
                }),
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                    var c = a(this).data("data");
                    d.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                    d.trigger("results:focus", {
                        data: c,
                        element: a(this)
                    })
                })
            }
            ,
            c.prototype.getHighlightedResults = function() {
                var a = this.$results.find(".select2-results__option--highlighted");
                return a
            }
            ,
            c.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            c.prototype.ensureHighlightVisible = function() {
                var a = this.getHighlightedResults();
                if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]")
                      , c = b.index(a)
                      , d = this.$results.offset().top
                      , e = a.offset().top
                      , f = this.$results.scrollTop() + (e - d)
                      , g = e - d;
                    f -= 2 * a.outerHeight(!1),
                    2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                }
            }
            ,
            c.prototype.template = function(b, c) {
                var d = this.options.get("templateResult")
                  , e = this.options.get("escapeMarkup")
                  , f = d(b, c);
                null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
            }
            ,
            c
        }),
        b.define("select2/keys", [], function() {
            var a = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return a
        }),
        b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
            function d(a, b) {
                this.$element = a,
                this.options = b,
                d.__super__.constructor.call(this)
            }
            return b.Extend(d, b.Observable),
            d.prototype.render = function() {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0,
                null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                b.attr("title", this.$element.attr("title")),
                b.attr("tabindex", this._tabindex),
                this.$selection = b,
                b
            }
            ,
            d.prototype.bind = function(a, b) {
                var d = this
                  , e = (a.id + "-container",
                a.id + "-results");
                this.container = a,
                this.$selection.on("focus", function(a) {
                    d.trigger("focus", a)
                }),
                this.$selection.on("blur", function(a) {
                    d._handleBlur(a)
                }),
                this.$selection.on("keydown", function(a) {
                    d.trigger("keypress", a),
                    a.which === c.SPACE && a.preventDefault()
                }),
                a.on("results:focus", function(a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId)
                }),
                a.on("selection:update", function(a) {
                    d.update(a.data)
                }),
                a.on("open", function() {
                    d.$selection.attr("aria-expanded", "true"),
                    d.$selection.attr("aria-owns", e),
                    d._attachCloseHandler(a)
                }),
                a.on("close", function() {
                    d.$selection.attr("aria-expanded", "false"),
                    d.$selection.removeAttr("aria-activedescendant"),
                    d.$selection.removeAttr("aria-owns"),
                    d.$selection.focus(),
                    d._detachCloseHandler(a)
                }),
                a.on("enable", function() {
                    d.$selection.attr("tabindex", d._tabindex)
                }),
                a.on("disable", function() {
                    d.$selection.attr("tabindex", "-1")
                })
            }
            ,
            d.prototype._handleBlur = function(b) {
                var c = this;
                window.setTimeout(function() {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                }, 1)
            }
            ,
            d.prototype._attachCloseHandler = function(b) {
                a(document.body).on("mousedown.select2." + b.id, function(b) {
                    var c = a(b.target)
                      , d = c.closest(".select2")
                      , e = a(".select2.select2-container--open");
                    e.each(function() {
                        var b = a(this);
                        if (this != d[0]) {
                            var c = b.data("element");
                            c.select2("close")
                        }
                    })
                })
            }
            ,
            d.prototype._detachCloseHandler = function(b) {
                a(document.body).off("mousedown.select2." + b.id)
            }
            ,
            d.prototype.position = function(a, b) {
                var c = b.find(".selection");
                c.append(a)
            }
            ,
            d.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            d.prototype.update = function(a) {
                throw new Error("The `update` method must be defined in child classes.")
            }
            ,
            d
        }),
        b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments)
            }
            return c.Extend(e, b),
            e.prototype.render = function() {
                var a = e.__super__.render.call(this);
                return a.addClass("select2-selection--single"),
                a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                a
            }
            ,
            e.prototype.bind = function(a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", d),
                this.$selection.attr("aria-labelledby", d),
                this.$selection.on("mousedown", function(a) {
                    1 === a.which && c.trigger("toggle", {
                        originalEvent: a
                    })
                }),
                this.$selection.on("focus", function(a) {}),
                this.$selection.on("blur", function(a) {}),
                a.on("focus", function(b) {
                    a.isOpen() || c.$selection.focus()
                }),
                a.on("selection:update", function(a) {
                    c.update(a.data)
                })
            }
            ,
            e.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            e.prototype.display = function(a, b) {
                var c = this.options.get("templateSelection")
                  , d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }
            ,
            e.prototype.selectionContainer = function() {
                return a("<span></span>")
            }
            ,
            e.prototype.update = function(a) {
                if (0 === a.length)
                    return void this.clear();
                var b = a[0]
                  , c = this.$selection.find(".select2-selection__rendered")
                  , d = this.display(b, c);
                c.empty().append(d),
                c.prop("title", b.title || b.text)
            }
            ,
            e
        }),
        b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments)
            }
            return c.Extend(d, b),
            d.prototype.render = function() {
                var a = d.__super__.render.call(this);
                return a.addClass("select2-selection--multiple"),
                a.html('<ul class="select2-selection__rendered"></ul>'),
                a
            }
            ,
            d.prototype.bind = function(b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments),
                this.$selection.on("click", function(a) {
                    e.trigger("toggle", {
                        originalEvent: a
                    })
                }),
                this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this)
                          , d = c.parent()
                          , f = d.data("data");
                        e.trigger("unselect", {
                            originalEvent: b,
                            data: f
                        })
                    }
                })
            }
            ,
            d.prototype.clear = function() {
                this.$selection.find(".select2-selection__rendered").empty()
            }
            ,
            d.prototype.display = function(a, b) {
                var c = this.options.get("templateSelection")
                  , d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }
            ,
            d.prototype.selectionContainer = function() {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return b
            }
            ,
            d.prototype.update = function(a) {
                if (this.clear(),
                0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d]
                          , f = this.selectionContainer()
                          , g = this.display(e, f);
                        f.append(g),
                        f.prop("title", e.title || e.text),
                        f.data("data", e),
                        b.push(f)
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    c.appendMany(h, b)
                }
            }
            ,
            d
        }),
        b.define("select2/selection/placeholder", ["../utils"], function(a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")),
                a.call(this, b, c)
            }
            return b.prototype.normalizePlaceholder = function(a, b) {
                return "string" == typeof b && (b = {
                    id: "",
                    text: b
                }),
                b
            }
            ,
            b.prototype.createPlaceholder = function(a, b) {
                var c = this.selectionContainer();
                return c.html(this.display(b)),
                c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                c
            }
            ,
            b.prototype.update = function(a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id
                  , d = b.length > 1;
                if (d || c)
                    return a.call(this, b);
                this.clear();
                var e = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(e)
            }
            ,
            b
        }),
        b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
            function c() {}
            return c.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                    d._handleClear(a)
                }),
                b.on("keypress", function(a) {
                    d._handleKeyboardClear(a, b)
                })
            }
            ,
            c.prototype._handleClear = function(a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");
                    if (0 !== c.length) {
                        b.stopPropagation();
                        for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = {
                                data: d[e]
                            };
                            if (this.trigger("unselect", f),
                            f.prevented)
                                return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {})
                    }
                }
            }
            ,
            c.prototype._handleKeyboardClear = function(a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
            }
            ,
            c.prototype.update = function(b, c) {
                if (b.call(this, c),
                !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');
                    d.data("data", c),
                    this.$selection.find(".select2-selection__rendered").prepend(d)
                }
            }
            ,
            c
        }),
        b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c)
            }
            return d.prototype.render = function(b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" placeholder="SEARCH" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = c,
                this.$search = c.find("input");
                var d = b.call(this);
                return this._transferTabIndex(),
                d
            }
            ,
            d.prototype.bind = function(a, b, d) {
                var e = this;
                a.call(this, b, d),
                b.on("open", function() {
                    e.$search.trigger("focus")
                }),
                b.on("close", function() {
                    e.$search.val(""),
                    e.$search.removeAttr("aria-activedescendant"),
                    e.$search.trigger("focus")
                }),
                b.on("enable", function() {
                    e.$search.prop("disabled", !1),
                    e._transferTabIndex()
                }),
                b.on("disable", function() {
                    e.$search.prop("disabled", !0)
                }),
                b.on("focus", function(a) {
                    e.$search.trigger("focus")
                }),
                b.on("results:focus", function(a) {
                    e.$search.attr("aria-activedescendant", a.id)
                }),
                this.$selection.on("focusin", ".select2-search--inline", function(a) {
                    e.trigger("focus", a)
                }),
                this.$selection.on("focusout", ".select2-search--inline", function(a) {
                    e._handleBlur(a)
                }),
                this.$selection.on("keydown", ".select2-search--inline", function(a) {
                    a.stopPropagation(),
                    e.trigger("keypress", a),
                    e._keyUpPrevented = a.isDefaultPrevented();
                    var b = a.which;
                    if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");
                        if (d.length > 0) {
                            var f = d.data("data");
                            e.searchRemoveChoice(f),
                            a.preventDefault()
                        }
                    }
                });
                var f = document.documentMode
                  , g = f && 11 >= f;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                }),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                    if (g && "input" === a.type)
                        return void e.$selection.off("input.search input.searchcheck");
                    var b = a.which;
                    b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                })
            }
            ,
            d.prototype._transferTabIndex = function(a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1")
            }
            ,
            d.prototype.createPlaceholder = function(a, b) {
                this.$search.attr("placeholder", b.text)
            }
            ,
            d.prototype.update = function(a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                a.call(this, b),
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                this.resizeSearch(),
                c && this.$search.focus()
            }
            ,
            d.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var a = this.$search.val();
                    this.trigger("query", {
                        term: a
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            d.prototype.searchRemoveChoice = function(a, b) {
                this.trigger("unselect", {
                    data: b
                }),
                this.$search.val(b.text),
                this.handleSearch()
            }
            ,
            d.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder"))
                    a = this.$selection.find(".select2-selection__rendered").innerWidth();
                else {
                    var b = this.$search.val().length + 1;
                    a = .75 * b + "em"
                }
                this.$search.css("width", a)
            }
            ,
            d
        }),
        b.define("select2/selection/eventRelay", ["jquery"], function(a) {
            function b() {}
            return b.prototype.bind = function(b, c, d) {
                var e = this
                  , f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"]
                  , g = ["opening", "closing", "selecting", "unselecting"];
                b.call(this, c, d),
                c.on("*", function(b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};
                        var d = a.Event("select2:" + b, {
                            params: c
                        });
                        e.$element.trigger(d),
                        -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                    }
                })
            }
            ,
            b
        }),
        b.define("select2/translation", ["jquery", "require"], function(a, b) {
            function c(a) {
                this.dict = a || {}
            }
            return c.prototype.all = function() {
                return this.dict
            }
            ,
            c.prototype.get = function(a) {
                return this.dict[a]
            }
            ,
            c.prototype.extend = function(b) {
                this.dict = a.extend({}, b.all(), this.dict)
            }
            ,
            c._cache = {},
            c.loadPath = function(a) {
                if (!(a in c._cache)) {
                    var d = b(a);
                    c._cache[a] = d
                }
                return new c(c._cache[a])
            }
            ,
            c
        }),
        b.define("select2/diacritics", [], function() {
            var a = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
            return a
        }),
        b.define("select2/data/base", ["../utils"], function(a) {
            function b(a, c) {
                b.__super__.constructor.call(this)
            }
            return a.Extend(b, a.Observable),
            b.prototype.current = function(a) {
                throw new Error("The `current` method must be defined in child classes.")
            }
            ,
            b.prototype.query = function(a, b) {
                throw new Error("The `query` method must be defined in child classes.")
            }
            ,
            b.prototype.bind = function(a, b) {}
            ,
            b.prototype.destroy = function() {}
            ,
            b.prototype.generateResultId = function(b, c) {
                var d = b.id + "-result-";
                return d += a.generateChars(4),
                d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
            }
            ,
            b
        }),
        b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
            function d(a, b) {
                this.$element = a,
                this.options = b,
                d.__super__.constructor.call(this)
            }
            return b.Extend(d, a),
            d.prototype.current = function(a) {
                var b = []
                  , d = this;
                this.$element.find(":selected").each(function() {
                    var a = c(this)
                      , e = d.item(a);
                    b.push(e)
                }),
                a(b)
            }
            ,
            d.prototype.select = function(a) {
                var b = this;
                if (a.selected = !0,
                c(a.element).is("option"))
                    return a.element.selected = !0,
                    void this.$element.trigger("change");
                if (this.$element.prop("multiple"))
                    this.current(function(d) {
                        var e = [];
                        a = [a],
                        a.push.apply(a, d);
                        for (var f = 0; f < a.length; f++) {
                            var g = a[f].id;
                            -1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e),
                        b.$element.trigger("change")
                    });
                else {
                    var d = a.id;
                    this.$element.val(d),
                    this.$element.trigger("change")
                }
            }
            ,
            d.prototype.unselect = function(a) {
                var b = this;
                if (this.$element.prop("multiple"))
                    return a.selected = !1,
                    c(a.element).is("option") ? (a.element.selected = !1,
                    void this.$element.trigger("change")) : void this.current(function(d) {
                        for (var e = [], f = 0; f < d.length; f++) {
                            var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e),
                        b.$element.trigger("change")
                    })
            }
            ,
            d.prototype.bind = function(a, b) {
                var c = this;
                this.container = a,
                a.on("select", function(a) {
                    c.select(a.data)
                }),
                a.on("unselect", function(a) {
                    c.unselect(a.data)
                })
            }
            ,
            d.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    c.removeData(this, "data")
                })
            }
            ,
            d.prototype.query = function(a, b) {
                var d = []
                  , e = this
                  , f = this.$element.children();
                f.each(function() {
                    var b = c(this);
                    if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b)
                          , g = e.matches(a, f);
                        null !== g && d.push(g)
                    }
                }),
                b({
                    results: d
                })
            }
            ,
            d.prototype.addOptions = function(a) {
                b.appendMany(this.$element, a)
            }
            ,
            d.prototype.option = function(a) {
                var b;
                a.children ? (b = document.createElement("optgroup"),
                b.label = a.text) : (b = document.createElement("option"),
                void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text),
                a.id && (b.value = a.id),
                a.disabled && (b.disabled = !0),
                a.selected && (b.selected = !0),
                a.title && (b.title = a.title);
                var d = c(b)
                  , e = this._normalizeItem(a);
                return e.element = b,
                c.data(b, "data", e),
                d
            }
            ,
            d.prototype.item = function(a) {
                var b = {};
                if (b = c.data(a[0], "data"),
                null != b)
                    return b;
                if (a.is("option"))
                    b = {
                        id: a.val(),
                        text: a.text(),
                        disabled: a.prop("disabled"),
                        selected: a.prop("selected"),
                        title: a.prop("title")
                    };
                else if (a.is("optgroup")) {
                    b = {
                        text: a.prop("label"),
                        children: [],
                        title: a.prop("title")
                    };
                    for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f])
                          , h = this.item(g);
                        e.push(h)
                    }
                    b.children = e
                }
                return b = this._normalizeItem(b),
                b.element = a[0],
                c.data(a[0], "data", b),
                b
            }
            ,
            d.prototype._normalizeItem = function(a) {
                c.isPlainObject(a) || (a = {
                    id: a,
                    text: a
                }),
                a = c.extend({}, {
                    text: ""
                }, a);
                var b = {
                    selected: !1,
                    disabled: !1
                };
                return null != a.id && (a.id = a.id.toString()),
                null != a.text && (a.text = a.text.toString()),
                null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)),
                c.extend({}, b, a)
            }
            ,
            d.prototype.matches = function(a, b) {
                var c = this.options.get("matcher");
                return c(a, b)
            }
            ,
            d
        }),
        b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];
                d.__super__.constructor.call(this, a, b),
                this.addOptions(this.convertToOptions(c))
            }
            return b.Extend(d, a),
            d.prototype.select = function(a) {
                var b = this.$element.find("option").filter(function(b, c) {
                    return c.value == a.id.toString()
                });
                0 === b.length && (b = this.option(a),
                this.addOptions(b)),
                d.__super__.select.call(this, a)
            }
            ,
            d.prototype.convertToOptions = function(a) {
                function d(a) {
                    return function() {
                        return c(this).val() == a.id
                    }
                }
                for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                    return e.item(c(this)).id
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);
                    if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j))
                          , l = this.item(k)
                          , m = c.extend(!0, {}, j, l)
                          , n = this.option(m);
                        k.replaceWith(n)
                    } else {
                        var o = this.option(j);
                        if (j.children) {
                            var p = this.convertToOptions(j.children);
                            b.appendMany(o, p)
                        }
                        h.push(o)
                    }
                }
                return h
            }
            ,
            d
        }),
        b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                d.__super__.constructor.call(this, a, b)
            }
            return b.Extend(d, a),
            d.prototype._applyDefaults = function(a) {
                var b = {
                    data: function(a) {
                        return c.extend({}, a, {
                            q: a.term
                        })
                    },
                    transport: function(a, b, d) {
                        var e = c.ajax(a);
                        return e.then(b),
                        e.fail(d),
                        e
                    }
                };
                return c.extend({}, b, a, !0)
            }
            ,
            d.prototype.processResults = function(a) {
                return a
            }
            ,
            d.prototype.query = function(a, b) {
                function d() {
                    var d = f.transport(f, function(d) {
                        var f = e.processResults(d, a);
                        e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        b(f)
                    }, function() {
                        d.status && "0" === d.status || e.trigger("results:message", {
                            message: "errorLoading"
                        })
                    });
                    e._request = d
                }
                var e = this;
                null != this._request && (c.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                var f = c.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof f.url && (f.url = f.url.call(this.$element, a)),
                "function" == typeof f.data && (f.data = f.data.call(this.$element, a)),
                this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
            }
            ,
            d
        }),
        b.define("select2/data/tags", ["jquery"], function(a) {
            function b(b, c, d) {
                var e = d.get("tags")
                  , f = d.get("createTag");
                void 0 !== f && (this.createTag = f);
                var g = d.get("insertTag");
                if (void 0 !== g && (this.insertTag = g),
                b.call(this, c, d),
                a.isArray(e))
                    for (var h = 0; h < e.length; h++) {
                        var i = e[h]
                          , j = this._normalizeItem(i)
                          , k = this.option(j);
                        this.$element.append(k)
                    }
            }
            return b.prototype.query = function(a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h]
                          , j = null != i.children && !d({
                            results: i.children
                        }, !0)
                          , k = i.text === b.term;
                        if (k || j)
                            return f ? !1 : (a.data = g,
                            void c(a))
                    }
                    if (f)
                        return !0;
                    var l = e.createTag(b);
                    if (null != l) {
                        var m = e.option(l);
                        m.attr("data-select2-tag", !0),
                        e.addOptions([m]),
                        e.insertTag(g, l)
                    }
                    a.results = g,
                    c(a)
                }
                var e = this;
                return this._removeOldTags(),
                null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
            }
            ,
            b.prototype.createTag = function(b, c) {
                var d = a.trim(c.term);
                return "" === d ? null : {
                    id: d,
                    text: d
                }
            }
            ,
            b.prototype.insertTag = function(a, b, c) {
                b.unshift(c)
            }
            ,
            b.prototype._removeOldTags = function(b) {
                var c = (this._lastTag,
                this.$element.find("option[data-select2-tag]"));
                c.each(function() {
                    this.selected || a(this).remove()
                })
            }
            ,
            b
        }),
        b.define("select2/data/tokenizer", ["jquery"], function(a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");
                void 0 !== d && (this.tokenizer = d),
                a.call(this, b, c)
            }
            return b.prototype.bind = function(a, b, c) {
                a.call(this, b, c),
                this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
            }
            ,
            b.prototype.query = function(b, c, d) {
                function e(b) {
                    var c = g._normalizeItem(b)
                      , d = g.$element.find("option").filter(function() {
                        return a(this).val() === c.id
                    });
                    if (!d.length) {
                        var e = g.option(c);
                        e.attr("data-select2-tag", !0),
                        g._removeOldTags(),
                        g.addOptions([e])
                    }
                    f(c)
                }
                function f(a) {
                    g.trigger("select", {
                        data: a
                    })
                }
                var g = this;
                c.term = c.term || "";
                var h = this.tokenizer(c, this.options, e);
                h.term !== c.term && (this.$search.length && (this.$search.val(h.term),
                this.$search.focus()),
                c.term = h.term),
                b.call(this, c, d)
            }
            ,
            b.prototype.tokenizer = function(b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                    return {
                        id: a.term,
                        text: a.term
                    }
                }
                ; h < g.length; ) {
                    var j = g[h];
                    if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h)
                          , l = a.extend({}, c, {
                            term: k
                        })
                          , m = i(l);
                        null != m ? (e(m),
                        g = g.substr(h + 1) || "",
                        h = 0) : h++
                    } else
                        h++
                }
                return {
                    term: g
                }
            }
            ,
            b
        }),
        b.define("select2/data/minimumInputLength", [], function() {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"),
                a.call(this, b, c)
            }
            return a.prototype.query = function(a, b, c) {
                return b.term = b.term || "",
                b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: b.term,
                        params: b
                    }
                }) : void a.call(this, b, c)
            }
            ,
            a
        }),
        b.define("select2/data/maximumInputLength", [], function() {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"),
                a.call(this, b, c)
            }
            return a.prototype.query = function(a, b, c) {
                return b.term = b.term || "",
                this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: b.term,
                        params: b
                    }
                }) : void a.call(this, b, c)
            }
            ,
            a
        }),
        b.define("select2/data/maximumSelectionLength", [], function() {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"),
                a.call(this, b, c)
            }
            return a.prototype.query = function(a, b, c) {
                var d = this;
                this.current(function(e) {
                    var f = null != e ? e.length : 0;
                    return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: d.maximumSelectionLength
                        }
                    }) : void a.call(d, b, c)
                })
            }
            ,
            a
        }),
        b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
            function c(a, b) {
                this.$element = a,
                this.options = b,
                c.__super__.constructor.call(this)
            }
            return b.Extend(c, b.Observable),
            c.prototype.render = function() {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return b.attr("dir", this.options.get("dir")),
                this.$dropdown = b,
                b
            }
            ,
            c.prototype.bind = function() {}
            ,
            c.prototype.position = function(a, b) {}
            ,
            c.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            c
        }),
        b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
            function c() {}
            return c.prototype.render = function(b) {
                var c = b.call(this)
                  , d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" placeholder="SEARCH" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = d,
                this.$search = d.find("input"),
                c.prepend(d),
                c
            }
            ,
            c.prototype.bind = function(b, c, d) {
                var e = this;
                b.call(this, c, d),
                this.$search.on("keydown", function(a) {
                    e.trigger("keypress", a),
                    e._keyUpPrevented = a.isDefaultPrevented()
                }),
                this.$search.on("input", function(b) {
                    a(this).off("keyup")
                }),
                this.$search.on("keyup input", function(a) {
                    e.handleSearch(a)
                }),
                c.on("open", function() {
                    e.$search.attr("tabindex", 0),
                    e.$search.focus(),
                    window.setTimeout(function() {
                        e.$search.focus()
                    }, 0)
                }),
                c.on("close", function() {
                    e.$search.attr("tabindex", -1),
                    e.$search.val("")
                }),
                c.on("focus", function() {
                    c.isOpen() && e.$search.focus()
                }),
                c.on("results:all", function(a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);
                        b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }
            ,
            c.prototype.handleSearch = function(a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {
                        term: b
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            c.prototype.showSearch = function(a, b) {
                return !0
            }
            ,
            c
        }),
        b.define("select2/dropdown/hidePlaceholder", [], function() {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")),
                a.call(this, b, c, d)
            }
            return a.prototype.append = function(a, b) {
                b.results = this.removePlaceholder(b.results),
                a.call(this, b)
            }
            ,
            a.prototype.normalizePlaceholder = function(a, b) {
                return "string" == typeof b && (b = {
                    id: "",
                    text: b
                }),
                b
            }
            ,
            a.prototype.removePlaceholder = function(a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];
                    this.placeholder.id === e.id && c.splice(d, 1)
                }
                return c
            }
            ,
            a
        }),
        b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
            function b(a, b, c, d) {
                this.lastParams = {},
                a.call(this, b, c, d),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1
            }
            return b.prototype.append = function(a, b) {
                this.$loadingMore.remove(),
                this.loading = !1,
                a.call(this, b),
                this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
            }
            ,
            b.prototype.bind = function(b, c, d) {
                var e = this;
                b.call(this, c, d),
                c.on("query", function(a) {
                    e.lastParams = a,
                    e.loading = !0
                }),
                c.on("query:append", function(a) {
                    e.lastParams = a,
                    e.loading = !0
                }),
                this.$results.on("scroll", function() {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);
                    if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1)
                          , d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                        c + 50 >= d && e.loadMore()
                    }
                })
            }
            ,
            b.prototype.loadMore = function() {
                this.loading = !0;
                var b = a.extend({}, {
                    page: 1
                }, this.lastParams);
                b.page++,
                this.trigger("query:append", b)
            }
            ,
            b.prototype.showLoadingMore = function(a, b) {
                return b.pagination && b.pagination.more
            }
            ,
            b.prototype.createLoadingMore = function() {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>')
                  , c = this.options.get("translations").get("loadingMore");
                return b.html(c(this.lastParams)),
                b
            }
            ,
            b
        }),
        b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body),
                b.call(this, c, d)
            }
            return c.prototype.bind = function(a, b, c) {
                var d = this
                  , e = !1;
                a.call(this, b, c),
                b.on("open", function() {
                    d._showDropdown(),
                    d._attachPositioningHandler(b),
                    e || (e = !0,
                    b.on("results:all", function() {
                        d._positionDropdown(),
                        d._resizeDropdown()
                    }),
                    b.on("results:append", function() {
                        d._positionDropdown(),
                        d._resizeDropdown()
                    }))
                }),
                b.on("close", function() {
                    d._hideDropdown(),
                    d._detachPositioningHandler(b)
                }),
                this.$dropdownContainer.on("mousedown", function(a) {
                    a.stopPropagation()
                })
            }
            ,
            c.prototype.destroy = function(a) {
                a.call(this),
                this.$dropdownContainer.remove()
            }
            ,
            c.prototype.position = function(a, b, c) {
                b.attr("class", c.attr("class")),
                b.removeClass("select2"),
                b.addClass("select2-container--open"),
                b.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = c
            }
            ,
            c.prototype.render = function(b) {
                var c = a("<span></span>")
                  , d = b.call(this);
                return c.append(d),
                this.$dropdownContainer = c,
                c
            }
            ,
            c.prototype._hideDropdown = function(a) {
                this.$dropdownContainer.detach()
            }
            ,
            c.prototype._attachPositioningHandler = function(c, d) {
                var e = this
                  , f = "scroll.select2." + d.id
                  , g = "resize.select2." + d.id
                  , h = "orientationchange.select2." + d.id
                  , i = this.$container.parents().filter(b.hasScroll);
                i.each(function() {
                    a(this).data("select2-scroll-position", {
                        x: a(this).scrollLeft(),
                        y: a(this).scrollTop()
                    })
                }),
                i.on(f, function(b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y)
                }),
                a(window).on(f + " " + g + " " + h, function(a) {
                    e._positionDropdown(),
                    e._resizeDropdown()
                })
            }
            ,
            c.prototype._detachPositioningHandler = function(c, d) {
                var e = "scroll.select2." + d.id
                  , f = "resize.select2." + d.id
                  , g = "orientationchange.select2." + d.id
                  , h = this.$container.parents().filter(b.hasScroll);
                h.off(e),
                a(window).off(e + " " + f + " " + g)
            }
            ,
            c.prototype._positionDropdown = function() {
                var b = a(window)
                  , c = this.$dropdown.hasClass("select2-dropdown--above")
                  , d = this.$dropdown.hasClass("select2-dropdown--below")
                  , e = null
                  , f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = {
                    height: this.$container.outerHeight(!1)
                };
                g.top = f.top,
                g.bottom = f.top + g.height;
                var h = {
                    height: this.$dropdown.outerHeight(!1)
                }
                  , i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height()
                }
                  , j = i.top < f.top - h.height
                  , k = i.bottom > f.bottom + h.height
                  , l = {
                    left: f.left,
                    top: g.bottom
                }
                  , m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                l.top -= n.top,
                l.left -= n.left,
                c || d || (e = "below"),
                k || !j || c ? !j && k && c && (e = "below") : e = "above",
                ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height),
                null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)),
                this.$dropdownContainer.css(l)
            }
            ,
            c.prototype._resizeDropdown = function() {
                var a = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (a.minWidth = a.width,
                a.position = "relative",
                a.width = "auto"),
                this.$dropdown.css(a)
            }
            ,
            c.prototype._showDropdown = function(a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown()
            }
            ,
            c
        }),
        b.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.children ? c += a(e.children) : c++
                }
                return c
            }
            function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                a.call(this, b, c, d)
            }
            return b.prototype.showSearch = function(b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
            }
            ,
            b
        }),
        b.define("select2/dropdown/selectOnClose", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c),
                b.on("close", function(a) {
                    d._handleSelectOnClose(a)
                })
            }
            ,
            a.prototype._handleSelectOnClose = function(a, b) {
                if (b && null != b.originalSelect2Event) {
                    var c = b.originalSelect2Event;
                    if ("select" === c._type || "unselect" === c._type)
                        return
                }
                var d = this.getHighlightedResults();
                if (!(d.length < 1)) {
                    var e = d.data("data");
                    null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                        data: e
                    })
                }
            }
            ,
            a
        }),
        b.define("select2/dropdown/closeOnSelect", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
                var d = this;
                a.call(this, b, c),
                b.on("select", function(a) {
                    d._selectTriggered(a)
                }),
                b.on("unselect", function(a) {
                    d._selectTriggered(a)
                })
            }
            ,
            a.prototype._selectTriggered = function(a, b) {
                var c = b.originalEvent;
                c && c.ctrlKey || this.trigger("close", {
                    originalEvent: c,
                    originalSelect2Event: b
                })
            }
            ,
            a
        }),
        b.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(a) {
                    var b = a.input.length - a.maximum
                      , c = "Please delete " + b + " character";
                    return 1 != b && (c += "s"),
                    c
                },
                inputTooShort: function(a) {
                    var b = a.minimum - a.input.length
                      , c = "Please enter " + b + " or more characters";
                    return c
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(a) {
                    var b = "You can only select " + a.maximum + " item";
                    return 1 != a.maximum && (b += "s"),
                    b
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                }
            }
        }),
        b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset()
            }
            D.prototype.apply = function(l) {
                if (l = a.extend(!0, {}, this.defaults, l),
                null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m,
                    l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)),
                    l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)),
                    l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)),
                    l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)),
                    (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)),
                    null != l.query) {
                        var C = b(l.amdBase + "compat/query");
                        l.dataAdapter = j.Decorate(l.dataAdapter, C)
                    }
                    if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");
                        l.dataAdapter = j.Decorate(l.dataAdapter, D)
                    }
                }
                if (null == l.resultsAdapter && (l.resultsAdapter = c,
                null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)),
                null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)),
                l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))),
                null == l.dropdownAdapter) {
                    if (l.multiple)
                        l.dropdownAdapter = u;
                    else {
                        var E = j.Decorate(u, v);
                        l.dropdownAdapter = E
                    }
                    if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)),
                    l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)),
                    null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                    }
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                }
                if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d,
                    null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)),
                    l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)),
                    l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)),
                    null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                    }
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                }
                if ("string" == typeof l.language)
                    if (l.language.indexOf("-") > 0) {
                        var H = l.language.split("-")
                          , I = H[0];
                        l.language = [l.language, I]
                    } else
                        l.language = [l.language];
                if (a.isArray(l.language)) {
                    var J = new k;
                    l.language.push("en");
                    for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L]
                          , N = {};
                        try {
                            N = k.loadPath(M)
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M,
                                N = k.loadPath(M)
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        J.extend(N)
                    }
                    l.translations = J
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en")
                      , R = new k(l.language);
                    R.extend(Q),
                    l.translations = R
                }
                return l
            }
            ,
            D.prototype.reset = function() {
                function b(a) {
                    function b(a) {
                        return l[a] || a
                    }
                    return a.replace(/[^\u0000-\u007E]/g, b)
                }
                function c(d, e) {
                    if ("" === a.trim(d.term))
                        return e;
                    if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g]
                              , i = c(d, h);
                            null == i && f.children.splice(g, 1)
                        }
                        return f.children.length > 0 ? f : c(d, f)
                    }
                    var j = b(e.text).toUpperCase()
                      , k = b(d.term).toUpperCase();
                    return j.indexOf(k) > -1 ? e : null
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: j.escapeMarkup,
                    language: C,
                    matcher: c,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function(a) {
                        return a
                    },
                    templateResult: function(a) {
                        return a.text
                    },
                    templateSelection: function(a) {
                        return a.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            D.prototype.set = function(b, c) {
                var d = a.camelCase(b)
                  , e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f)
            }
            ;
            var E = new D;
            return E
        }),
        b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
            function e(b, e) {
                if (this.options = b,
                null != e && this.fromElement(e),
                this.options = c.apply(this.options),
                e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                }
            }
            return e.prototype.fromElement = function(a) {
                var c = ["select2"];
                null == this.options.multiple && (this.options.multiple = a.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = a.prop("disabled")),
                null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))),
                null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                a.prop("disabled", this.options.disabled),
                a.prop("multiple", this.options.multiple),
                a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                a.data("data", a.data("select2Tags")),
                a.data("tags", !0)),
                a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                a.attr("ajax--url", a.data("ajaxUrl")),
                a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)
                    b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                return this
            }
            ,
            e.prototype.get = function(a) {
                return this.options[a]
            }
            ,
            e.prototype.set = function(a, b) {
                this.options[a] = b
            }
            ,
            e
        }),
        b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
            var e = function(a, c) {
                null != a.data("select2") && a.data("select2").destroy(),
                this.$element = a,
                this.id = this._generateId(a),
                c = c || {},
                this.options = new b(c,a),
                e.__super__.constructor.call(this);
                var d = a.attr("tabindex") || 0;
                a.data("old-tabindex", d),
                a.attr("tabindex", "-1");
                var f = this.options.get("dataAdapter");
                this.dataAdapter = new f(a,this.options);
                var g = this.render();
                this._placeContainer(g);
                var h = this.options.get("selectionAdapter");
                this.selection = new h(a,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, g);
                var i = this.options.get("dropdownAdapter");
                this.dropdown = new i(a,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, g);
                var j = this.options.get("resultsAdapter");
                this.results = new j(a,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var k = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function(a) {
                    k.trigger("selection:update", {
                        data: a
                    })
                }),
                a.addClass("select2-hidden-accessible"),
                a.attr("aria-hidden", "true"),
                this._syncAttributes(),
                a.data("select2", this)
            };
            return c.Extend(e, c.Observable),
            e.prototype._generateId = function(a) {
                var b = "";
                return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4),
                b = b.replace(/(:|\.|\[|\]|,)/g, ""),
                b = "select2-" + b
            }
            ,
            e.prototype._placeContainer = function(a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(this.$element, this.options.get("width"));
                null != b && a.css("width", b)
            }
            ,
            e.prototype._resolveWidth = function(a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");
                    return null != d ? d : this._resolveWidth(a, "element")
                }
                if ("element" == b) {
                    var e = a.outerWidth(!1);
                    return 0 >= e ? "auto" : e + 56 + "px"  // Adding default value 45
                }
                if ("style" == b) {
                    var f = a.attr("style");
                    if ("string" != typeof f)
                        return null;
                    for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, "")
                          , k = j.match(c);
                        if (null !== k && k.length >= 1)
                            return k[1]
                    }
                    return null
                }
                return b
            }
            ,
            e.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container)
            }
            ,
            e.prototype._registerDomEvents = function() {
                var b = this;
                this.$element.on("change.select2", function() {
                    b.dataAdapter.current(function(a) {
                        b.trigger("selection:update", {
                            data: a
                        })
                    })
                }),
                this.$element.on("focus.select2", function(a) {
                    b.trigger("focus", a)
                }),
                this._syncA = c.bind(this._syncAttributes, this),
                this._syncS = c.bind(this._syncSubtree, this),
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != d ? (this._observer = new d(function(c) {
                    a.each(c, b._syncA),
                    a.each(c, b._syncS)
                }
                ),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
            }
            ,
            e.prototype._registerDataEvents = function() {
                var a = this;
                this.dataAdapter.on("*", function(b, c) {
                    a.trigger(b, c)
                })
            }
            ,
            e.prototype._registerSelectionEvents = function() {
                var b = this
                  , c = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                    b.toggleDropdown()
                }),
                this.selection.on("focus", function(a) {
                    b.focus(a)
                }),
                this.selection.on("*", function(d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e)
                })
            }
            ,
            e.prototype._registerDropdownEvents = function() {
                var a = this;
                this.dropdown.on("*", function(b, c) {
                    a.trigger(b, c)
                })
            }
            ,
            e.prototype._registerResultsEvents = function() {
                var a = this;
                this.results.on("*", function(b, c) {
                    a.trigger(b, c)
                })
            }
            ,
            e.prototype._registerEvents = function() {
                var a = this;
                this.on("open", function() {
                    a.$container.addClass("select2-container--open")
                }),
                this.on("close", function() {
                    a.$container.removeClass("select2-container--open")
                }),
                this.on("enable", function() {
                    a.$container.removeClass("select2-container--disabled")
                }),
                this.on("disable", function() {
                    a.$container.addClass("select2-container--disabled")
                }),
                this.on("blur", function() {
                    a.$container.removeClass("select2-container--focus")
                }),
                this.on("query", function(b) {
                    a.isOpen() || a.trigger("open", {}),
                    this.dataAdapter.query(b, function(c) {
                        a.trigger("results:all", {
                            data: c,
                            query: b
                        })
                    })
                }),
                this.on("query:append", function(b) {
                    this.dataAdapter.query(b, function(c) {
                        a.trigger("results:append", {
                            data: c,
                            query: b
                        })
                    })
                }),
                this.on("keypress", function(b) {
                    var c = b.which;
                    a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(),
                    b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}),
                    b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}),
                    b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}),
                    b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}),
                    b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(),
                    b.preventDefault())
                })
            }
            ,
            e.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.options.get("disabled") ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            e.prototype._syncSubtree = function(a, b) {
                var c = !1
                  , d = this;
                if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                    if (b)
                        if (b.addedNodes && b.addedNodes.length > 0)
                            for (var e = 0; e < b.addedNodes.length; e++) {
                                var f = b.addedNodes[e];
                                f.selected && (c = !0)
                            }
                        else
                            b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                    else
                        c = !0;
                    c && this.dataAdapter.current(function(a) {
                        d.trigger("selection:update", {
                            data: a
                        })
                    })
                }
            }
            ,
            e.prototype.trigger = function(a, b) {
                var c = e.__super__.trigger
                  , d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting"
                };
                if (void 0 === b && (b = {}),
                a in d) {
                    var f = d[a]
                      , g = {
                        prevented: !1,
                        name: a,
                        args: b
                    };
                    if (c.call(this, f, g),
                    g.prevented)
                        return void (b.prevented = !0)
                }
                c.call(this, a, b)
            }
            ,
            e.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }
            ,
            e.prototype.open = function() {
                this.isOpen() || this.trigger("query", {})
            }
            ,
            e.prototype.close = function() {
                this.isOpen() && this.trigger("close", {})
            }
            ,
            e.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }
            ,
            e.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }
            ,
            e.prototype.focus = function(a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            e.prototype.enable = function(a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                (null == a || 0 === a.length) && (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b)
            }
            ,
            e.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var a = [];
                return this.dataAdapter.current(function(b) {
                    a = b
                }),
                a
            }
            ,
            e.prototype.val = function(b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == b || 0 === b.length)
                    return this.$element.val();
                var c = b[0];
                a.isArray(c) && (c = a.map(c, function(a) {
                    return a.toString()
                })),
                this.$element.val(c).trigger("change")
            }
            ,
            e.prototype.destroy = function() {
                this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", this.$element.data("old-tabindex")),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null;
            }
            ,
            e.prototype.render = function() {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return b.attr("dir", this.options.get("dir")),
                this.$container = b,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                b.data("element", this.$element),
                b
            }
            ,
            e
        }),
        b.define("jquery-mousewheel", ["jquery"], function(a) {
            return a
        }),
        b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
            if (null == a.fn.select2) {
                var e = ["open", "close", "destroy"];
                a.fn.select2 = function(b) {
                    if (b = b || {},
                    "object" == typeof b)
                        return this.each(function() {
                            var d = a.extend(!0, {}, b);
                            new c(a(this),d)
                        }),
                        this;
                    if ("string" == typeof b) {
                        var d, f = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var c = a(this).data("select2");
                            null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."),
                            d = c[b].apply(c, f)
                        }),
                        a.inArray(b, e) > -1 ? this : d
                    }
                    throw new Error("Invalid arguments for Select2: " + b)
                }
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d),
            c
        }),
        {
            define: b.define,
            require: b.require
        }
    }()
      , c = b.require("jquery.select2");
    return a.fn.select2.amd = b,
    c
});
"classList"in document.createElement("_") || !function(a) {
    "use strict";
    if ("Element"in a) {
        var b = "classList"
          , c = "prototype"
          , d = a.Element[c]
          , e = Object
          , f = String[c].trim || function() {
            return this.replace(/^\s+|\s+$/g, "")
        }
          , g = Array[c].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        }
          , h = function(a, b) {
            this.name = a,
            this.code = DOMException[a],
            this.message = b
        }
          , i = function(a, b) {
            if ("" === b)
                throw new h("SYNTAX_ERR","An invalid or illegal string was specified");
            if (/\s/.test(b))
                throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");
            return g.call(a, b)
        }
          , j = function(a) {
            for (var b = f.call(a.getAttribute("class") || ""), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; e > d; d++)
                this.push(c[d]);
            this._updateClassName = function() {
                a.setAttribute("class", this.toString())
            }
        }
          , k = j[c] = []
          , l = function() {
            return new j(this)
        };
        if (h[c] = Error[c],
        k.item = function(a) {
            return this[a] || null
        }
        ,
        k.contains = function(a) {
            return a += "",
            -1 !== i(this, a)
        }
        ,
        k.add = function() {
            var a, b = arguments, c = 0, d = b.length, e = !1;
            do
                a = b[c] + "",
                -1 === i(this, a) && (this.push(a),
                e = !0);
            while (++c < d);e && this._updateClassName()
        }
        ,
        k.remove = function() {
            var a, b, c = arguments, d = 0, e = c.length, f = !1;
            do
                for (a = c[d] + "",
                b = i(this, a); -1 !== b; )
                    this.splice(b, 1),
                    f = !0,
                    b = i(this, a);
            while (++d < e);f && this._updateClassName()
        }
        ,
        k.toggle = function(a, b) {
            a += "";
            var c = this.contains(a)
              , d = c ? b !== !0 && "remove" : b !== !1 && "add";
            return d && this[d](a),
            b === !0 || b === !1 ? b : !c
        }
        ,
        k.toString = function() {
            return this.join(" ")
        }
        ,
        e.defineProperty) {
            var m = {
                get: l,
                enumerable: !0,
                configurable: !0
            };
            try {
                e.defineProperty(d, b, m)
            } catch (n) {
                -2146823252 === n.number && (m.enumerable = !1,
                e.defineProperty(d, b, m))
            }
        } else
            e[c].__defineGetter__ && d.__defineGetter__(b, l)
    }
}(self),
function(a) {
    "use strict";
    if (a.URL = a.URL || a.webkitURL,
    a.Blob && a.URL)
        try {
            return void new Blob
        } catch (b) {}
    var c = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || function(a) {
        var b = function(a) {
            return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
        }
          , c = function() {
            this.data = []
        }
          , d = function(a, b, c) {
            this.data = a,
            this.size = a.length,
            this.type = b,
            this.encoding = c
        }
          , e = c.prototype
          , f = d.prototype
          , g = a.FileReaderSync
          , h = function(a) {
            this.code = this[this.name = a]
        }
          , i = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" ")
          , j = i.length
          , k = a.URL || a.webkitURL || a
          , l = k.createObjectURL
          , m = k.revokeObjectURL
          , n = k
          , o = a.btoa
          , p = a.atob
          , q = a.ArrayBuffer
          , r = a.Uint8Array
          , s = /^[\w-]+:\/\*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        for (d.fake = f.fake = !0; j--; )
            h.prototype[i[j]] = j + 1;
        return k.createObjectURL || (n = a.URL = function(a) {
            var b, c = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            return c.href = a,
            "origin"in c || ("data:" === c.protocol.toLowerCase() ? c.origin = null : (b = a.match(s),
            c.origin = b && b[1])),
            c
        }
        ),
        n.createObjectURL = function(a) {
            var b, c = a.type;
            return null === c && (c = "application/octet-stream"),
            a instanceof d ? (b = "data:" + c,
            "base64" === a.encoding ? b + ";base64," + a.data : "URI" === a.encoding ? b + "," + decodeURIComponent(a.data) : o ? b + ";base64," + o(a.data) : b + "," + encodeURIComponent(a.data)) : l ? l.call(k, a) : void 0
        }
        ,
        n.revokeObjectURL = function(a) {
            "data:" !== a.substring(0, 5) && m && m.call(k, a)
        }
        ,
        e.append = function(a) {
            var c = this.data;
            if (r && (a instanceof q || a instanceof r)) {
                for (var e = "", f = new r(a), i = 0, j = f.length; j > i; i++)
                    e += String.fromCharCode(f[i]);
                c.push(e)
            } else if ("Blob" === b(a) || "File" === b(a)) {
                if (!g)
                    throw new h("NOT_READABLE_ERR");
                var k = new g;
                c.push(k.readAsBinaryString(a))
            } else
                a instanceof d ? "base64" === a.encoding && p ? c.push(p(a.data)) : "URI" === a.encoding ? c.push(decodeURIComponent(a.data)) : "raw" === a.encoding && c.push(a.data) : ("string" != typeof a && (a += ""),
                c.push(unescape(encodeURIComponent(a))))
        }
        ,
        e.getBlob = function(a) {
            return arguments.length || (a = null),
            new d(this.data.join(""),a,"raw")
        }
        ,
        e.toString = function() {
            return "[object BlobBuilder]"
        }
        ,
        f.slice = function(a, b, c) {
            var e = arguments.length;
            return 3 > e && (c = null),
            new d(this.data.slice(a, e > 1 ? b : this.data.length),c,this.encoding)
        }
        ,
        f.toString = function() {
            return "[object Blob]"
        }
        ,
        f.close = function() {
            this.size = 0,
            delete this.data
        }
        ,
        c
    }(a);
    a.Blob = function(a, b) {
        var d = b ? b.type || "" : ""
          , e = new c;
        if (a)
            for (var f = 0, g = a.length; g > f; f++)
                Uint8Array && a[f]instanceof Uint8Array ? e.append(a[f].buffer) : e.append(a[f]);
        var h = e.getBlob(d);
        return !h.slice && h.webkitSlice && (h.slice = h.webkitSlice),
        h
    }
    ;
    var d = Object.getPrototypeOf || function(a) {
        return a.__proto__
    }
    ;
    a.Blob.prototype = d(new a.Blob)
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content || this),
function(a, b) {
    "use strict";
    var c = "object" == typeof module && "undefined" != typeof process && process && process.versions && process.versions.electron;
    c || "object" != typeof module ? "function" == typeof define && define.amd ? define(function() {
        return b
    }) : a.MediumEditor = b : module.exports = b
}(this, function() {
    "use strict";
    function a(a, b) {
        return this.init(a, b)
    }
    return a.extensions = {},
    function(b) {
        function c(a, b) {
            var c, d = Array.prototype.slice.call(arguments, 2);
            b = b || {};
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                if (f)
                    for (c in f)
                        f.hasOwnProperty(c) && "undefined" != typeof f[c] && (a || b.hasOwnProperty(c) === !1) && (b[c] = f[c])
            }
            return b
        }
        var d = !1;
        try {
            var e = document.createElement("div")
              , f = document.createTextNode(" ");
            e.appendChild(f),
            d = e.contains(f)
        } catch (g) {}
        var h = {
            isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),
            isEdge: null !== /Edge\/\d+/.exec(navigator.userAgent),
            isFF: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
            isMac: b.navigator.platform.toUpperCase().indexOf("MAC") >= 0,
            keyCode: {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESCAPE: 27,
                SPACE: 32,
                DELETE: 46,
                K: 75,
                M: 77,
                V: 86
            },
            isMetaCtrlKey: function(a) {
                return !!(h.isMac && a.metaKey || !h.isMac && a.ctrlKey)
            },
            isKey: function(a, b) {
                var c = h.getKeyCode(a);
                return !1 === Array.isArray(b) ? c === b : -1 !== b.indexOf(c)
            },
            getKeyCode: function(a) {
                var b = a.which;
                return null === b && (b = null !== a.charCode ? a.charCode : a.keyCode),
                b
            },
            blockContainerElementNames: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "ul", "li", "ol", "address", "article", "aside", "audio", "canvas", "dd", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "header", "hgroup", "main", "nav", "noscript", "output", "section", "video", "table", "thead", "tbody", "tfoot", "tr", "th", "td"],
            emptyElementNames: ["br", "col", "colgroup", "hr", "img", "input", "source", "wbr"],
            extend: function() {
                var a = [!0].concat(Array.prototype.slice.call(arguments));
                return c.apply(this, a)
            },
            defaults: function() {
                var a = [!1].concat(Array.prototype.slice.call(arguments));
                return c.apply(this, a)
            },
            createLink: function(a, b, c, d) {
                var e = a.createElement("a");
                return h.moveTextRangeIntoElement(b[0], b[b.length - 1], e),
                e.setAttribute("href", c),
                d && e.setAttribute("target", d),
                e
            },
            findOrCreateMatchingTextNodes: function(a, b, c) {
                for (var d = a.createTreeWalker(b, NodeFilter.SHOW_ALL, null, !1), e = [], f = 0, g = !1, i = null, j = null; null !== (i = d.nextNode()); )
                    if (!(i.nodeType > 3))
                        if (3 === i.nodeType) {
                            if (!g && c.start < f + i.nodeValue.length && (g = !0,
                            j = h.splitStartNodeIfNeeded(i, c.start, f)),
                            g && h.splitEndNodeIfNeeded(i, j, c.end, f),
                            g && f === c.end)
                                break;
                            if (g && f > c.end + 1)
                                throw new Error("PerformLinking overshot the target!");
                            g && e.push(j || i),
                            f += i.nodeValue.length,
                            null !== j && (f += j.nodeValue.length,
                            d.nextNode()),
                            j = null
                        } else
                            "img" === i.tagName.toLowerCase() && (!g && c.start <= f && (g = !0),
                            g && e.push(i));
                return e
            },
            splitStartNodeIfNeeded: function(a, b, c) {
                return b !== c ? a.splitText(b - c) : null
            },
            splitEndNodeIfNeeded: function(a, b, c, d) {
                var e, f;
                e = d + a.nodeValue.length + (b ? b.nodeValue.length : 0) - 1,
                f = c - d - (b ? a.nodeValue.length : 0),
                e >= c && d !== e && 0 !== f && (b || a).splitText(f)
            },
            splitByBlockElements: function(b) {
                if (3 !== b.nodeType && 1 !== b.nodeType)
                    return [];
                var c = []
                  , d = a.util.blockContainerElementNames.join(",");
                if (3 === b.nodeType || 0 === b.querySelectorAll(d).length)
                    return [b];
                for (var e = 0; e < b.childNodes.length; e++) {
                    var f = b.childNodes[e];
                    if (3 === f.nodeType)
                        c.push(f);
                    else if (1 === f.nodeType) {
                        var g = f.querySelectorAll(d);
                        0 === g.length ? c.push(f) : c = c.concat(a.util.splitByBlockElements(f))
                    }
                }
                return c
            },
            findAdjacentTextNodeWithContent: function(a, b, c) {
                var d, e = !1, f = c.createNodeIterator(a, NodeFilter.SHOW_TEXT, null, !1);
                for (d = f.nextNode(); d; ) {
                    if (d === b)
                        e = !0;
                    else if (e && 3 === d.nodeType && d.nodeValue && d.nodeValue.trim().length > 0)
                        break;
                    d = f.nextNode()
                }
                return d
            },
            findPreviousSibling: function(a) {
                if (!a || h.isMediumEditorElement(a))
                    return !1;
                for (var b = a.previousSibling; !b && !h.isMediumEditorElement(a.parentNode); )
                    a = a.parentNode,
                    b = a.previousSibling;
                return b
            },
            isDescendant: function(a, b, c) {
                if (!a || !b)
                    return !1;
                if (a === b)
                    return !!c;
                if (1 !== a.nodeType)
                    return !1;
                if (d || 3 !== b.nodeType)
                    return a.contains(b);
                for (var e = b.parentNode; null !== e; ) {
                    if (e === a)
                        return !0;
                    e = e.parentNode
                }
                return !1
            },
            isElement: function(a) {
                return !(!a || 1 !== a.nodeType)
            },
            throttle: function(a, b) {
                var c, d, e, f = 50, g = null, h = 0, i = function() {
                    h = Date.now(),
                    g = null,
                    e = a.apply(c, d),
                    g || (c = d = null)
                };
                return b || 0 === b || (b = f),
                function() {
                    var f = Date.now()
                      , j = b - (f - h);
                    return c = this,
                    d = arguments,
                    0 >= j || j > b ? (g && (clearTimeout(g),
                    g = null),
                    h = f,
                    e = a.apply(c, d),
                    g || (c = d = null)) : g || (g = setTimeout(i, j)),
                    e
                }
            },
            traverseUp: function(a, b) {
                if (!a)
                    return !1;
                do {
                    if (1 === a.nodeType) {
                        if (b(a))
                            return a;
                        if (h.isMediumEditorElement(a))
                            return !1
                    }
                    a = a.parentNode
                } while (a);return !1
            },
            htmlEntities: function(a) {
                return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            },
            insertHTMLCommand: function(b, c) {
                var d, e, f, g, i, j, k, l = !1, m = ["insertHTML", !1, c];
                if (!a.util.isEdge && b.queryCommandSupported("insertHTML"))
                    try {
                        return b.execCommand.apply(b, m)
                    } catch (n) {}
                if (d = b.getSelection(),
                d.rangeCount) {
                    if (e = d.getRangeAt(0),
                    k = e.commonAncestorContainer,
                    h.isMediumEditorElement(k) && !k.firstChild)
                        e.selectNode(k.appendChild(b.createTextNode("")));
                    else if (3 === k.nodeType && 0 === e.startOffset && e.endOffset === k.nodeValue.length || 3 !== k.nodeType && k.innerHTML === e.toString()) {
                        for (; !h.isMediumEditorElement(k) && k.parentNode && 1 === k.parentNode.childNodes.length && !h.isMediumEditorElement(k.parentNode); )
                            k = k.parentNode;
                        e.selectNode(k)
                    }
                    for (e.deleteContents(),
                    f = b.createElement("div"),
                    f.innerHTML = c,
                    g = b.createDocumentFragment(); f.firstChild; )
                        i = f.firstChild,
                        j = g.appendChild(i);
                    e.insertNode(g),
                    j && (e = e.cloneRange(),
                    e.setStartAfter(j),
                    e.collapse(!0),
                    a.selection.selectRange(b, e)),
                    l = !0
                }
                return b.execCommand.callListeners && b.execCommand.callListeners(m, l),
                l
            },
            execFormatBlock: function(b, c) {
                var d, e = h.getTopBlockContainer(a.selection.getSelectionStart(b));
                if ("blockquote" === c) {
                    if (e && (d = Array.prototype.slice.call(e.childNodes),
                    d.some(function(a) {
                        return h.isBlockContainer(a)
                    })))
                        return b.execCommand("outdent", !1, null);
                    if (h.isIE)
                        return b.execCommand("indent", !1, c)
                }
                if (e && c === e.nodeName.toLowerCase() && (c = "p"),
                h.isIE && (c = "<" + c + ">"),
                e && "blockquote" === e.nodeName.toLowerCase()) {
                    if (h.isIE && "<p>" === c)
                        return b.execCommand("outdent", !1, c);
                    if ((h.isFF || h.isEdge) && "p" === c)
                        return d = Array.prototype.slice.call(e.childNodes),
                        d.some(function(a) {
                            return !h.isBlockContainer(a)
                        }) && b.execCommand("formatBlock", !1, c),
                        b.execCommand("outdent", !1, c)
                }
                return b.execCommand("formatBlock", !1, c)
            },
            setTargetBlank: function(a, b) {
                var c, d = b || !1;
                if ("a" === a.nodeName.toLowerCase())
                    a.target = "_blank";
                else
                    for (a = a.getElementsByTagName("a"),
                    c = 0; c < a.length; c += 1)
                        !1 !== d && d !== a[c].attributes.href.value || (a[c].target = "_blank")
            },
            removeTargetBlank: function(a, b) {
                var c;
                if ("a" === a.nodeName.toLowerCase())
                    a.removeAttribute("target");
                else
                    for (a = a.getElementsByTagName("a"),
                    c = 0; c < a.length; c += 1)
                        b === a[c].attributes.href.value && a[c].removeAttribute("target")
            },
            addClassToAnchors: function(a, b) {
                var c, d, e = b.split(" ");
                if ("a" === a.nodeName.toLowerCase())
                    for (d = 0; d < e.length; d += 1)
                        a.classList.add(e[d]);
                else {
                    var f = a.getElementsByTagName("a");
                    if (0 === f.length) {
                        var g = h.getClosestTag(a, "a");
                        a = g ? [g] : []
                    } else
                        a = f;
                    for (c = 0; c < a.length; c += 1)
                        for (d = 0; d < e.length; d += 1)
                            a[c].classList.add(e[d])
                }
            },
            isListItem: function(a) {
                if (!a)
                    return !1;
                if ("li" === a.nodeName.toLowerCase())
                    return !0;
                for (var b = a.parentNode, c = b.nodeName.toLowerCase(); "li" === c || !h.isBlockContainer(b) && "div" !== c; ) {
                    if ("li" === c)
                        return !0;
                    if (b = b.parentNode,
                    !b)
                        return !1;
                    c = b.nodeName.toLowerCase()
                }
                return !1
            },
            cleanListDOM: function(b, c) {
                if ("li" === c.nodeName.toLowerCase()) {
                    var d = c.parentElement;
                    "p" === d.parentElement.nodeName.toLowerCase() && (h.unwrap(d.parentElement, b),
                    a.selection.moveCursor(b, c.firstChild, c.firstChild.textContent.length))
                }
            },
            splitOffDOMTree: function(a, b, c) {
                for (var d = b, e = null, f = !c; d !== a; ) {
                    var g, h = d.parentNode, i = h.cloneNode(!1), j = f ? d : h.firstChild;
                    for (e && (f ? i.appendChild(e) : g = e),
                    e = i; j; ) {
                        var k = j.nextSibling;
                        j === d ? (j.hasChildNodes() ? j = j.cloneNode(!1) : j.parentNode.removeChild(j),
                        j.textContent && e.appendChild(j),
                        j = f ? k : null) : (j.parentNode.removeChild(j),
                        (j.hasChildNodes() || j.textContent) && e.appendChild(j),
                        j = k)
                    }
                    g && e.appendChild(g),
                    d = h
                }
                return e
            },
            moveTextRangeIntoElement: function(a, b, c) {
                if (!a || !b)
                    return !1;
                var d = h.findCommonRoot(a, b);
                if (!d)
                    return !1;
                if (b === a) {
                    var e = a.parentNode
                      , f = a.nextSibling;
                    return e.removeChild(a),
                    c.appendChild(a),
                    f ? e.insertBefore(c, f) : e.appendChild(c),
                    c.hasChildNodes()
                }
                for (var g, i, j, k = [], l = 0; l < d.childNodes.length; l++)
                    if (j = d.childNodes[l],
                    g) {
                        if (h.isDescendant(j, b, !0)) {
                            i = j;
                            break
                        }
                        k.push(j)
                    } else
                        h.isDescendant(j, a, !0) && (g = j);
                var m = i.nextSibling
                  , n = d.ownerDocument.createDocumentFragment();
                return g === a ? (g.parentNode.removeChild(g),
                n.appendChild(g)) : n.appendChild(h.splitOffDOMTree(g, a)),
                k.forEach(function(a) {
                    a.parentNode.removeChild(a),
                    n.appendChild(a)
                }),
                i === b ? (i.parentNode.removeChild(i),
                n.appendChild(i)) : n.appendChild(h.splitOffDOMTree(i, b, !0)),
                c.appendChild(n),
                i.parentNode === d ? d.insertBefore(c, i) : m ? d.insertBefore(c, m) : d.appendChild(c),
                c.hasChildNodes()
            },
            depthOfNode: function(a) {
                for (var b = 0, c = a; null !== c.parentNode; )
                    c = c.parentNode,
                    b++;
                return b
            },
            findCommonRoot: function(a, b) {
                for (var c = h.depthOfNode(a), d = h.depthOfNode(b), e = a, f = b; c !== d; )
                    c > d ? (e = e.parentNode,
                    c -= 1) : (f = f.parentNode,
                    d -= 1);
                for (; e !== f; )
                    e = e.parentNode,
                    f = f.parentNode;
                return e
            },
            isElementAtBeginningOfBlock: function(a) {
                for (var b, c; !h.isBlockContainer(a) && !h.isMediumEditorElement(a); ) {
                    for (c = a; c = c.previousSibling; )
                        if (b = 3 === c.nodeType ? c.nodeValue : c.textContent,
                        b.length > 0)
                            return !1;
                    a = a.parentNode
                }
                return !0
            },
            isMediumEditorElement: function(a) {
                return a && a.getAttribute && !!a.getAttribute("data-medium-editor-element")
            },
            getContainerEditorElement: function(a) {
                return h.traverseUp(a, function(a) {
                    return h.isMediumEditorElement(a)
                })
            },
            isBlockContainer: function(a) {
                return a && 3 !== a.nodeType && -1 !== h.blockContainerElementNames.indexOf(a.nodeName.toLowerCase())
            },
            getClosestBlockContainer: function(a) {
                return h.traverseUp(a, function(a) {
                    return h.isBlockContainer(a) || h.isMediumEditorElement(a)
                })
            },
            getTopBlockContainer: function(a) {
                var b = h.isBlockContainer(a) ? a : !1;
                return h.traverseUp(a, function(a) {
                    return h.isBlockContainer(a) && (b = a),
                    !b && h.isMediumEditorElement(a) ? (b = a,
                    !0) : !1
                }),
                b
            },
            getFirstSelectableLeafNode: function(a) {
                for (; a && a.firstChild; )
                    a = a.firstChild;
                if (a = h.traverseUp(a, function(a) {
                    return -1 === h.emptyElementNames.indexOf(a.nodeName.toLowerCase())
                }),
                "table" === a.nodeName.toLowerCase()) {
                    var b = a.querySelector("th, td");
                    b && (a = b)
                }
                return a
            },
            getFirstTextNode: function(a) {
                return h.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"),
                h._getFirstTextNode(a)
            },
            _getFirstTextNode: function(a) {
                if (3 === a.nodeType)
                    return a;
                for (var b = 0; b < a.childNodes.length; b++) {
                    var c = h._getFirstTextNode(a.childNodes[b]);
                    if (null !== c)
                        return c
                }
                return null
            },
            ensureUrlHasProtocol: function(a) {
                return -1 === a.indexOf("://") ? "http://" + a : a
            },
            warn: function() {
                void 0 !== b.console && "function" == typeof b.console.warn && b.console.warn.apply(b.console, arguments)
            },
            deprecated: function(a, b, c) {
                var d = a + " is deprecated, please use " + b + " instead.";
                c && (d += " Will be removed in " + c),
                h.warn(d)
            },
            deprecatedMethod: function(a, b, c, d) {
                h.deprecated(a, b, d),
                "function" == typeof this[b] && this[b].apply(this, c)
            },
            cleanupAttrs: function(a, b) {
                b.forEach(function(b) {
                    a.removeAttribute(b)
                })
            },
            cleanupTags: function(a, b) {
                -1 !== b.indexOf(a.nodeName.toLowerCase()) && a.parentNode.removeChild(a)
            },
            unwrapTags: function(b, c) {
                -1 !== c.indexOf(b.nodeName.toLowerCase()) && a.util.unwrap(b, document)
            },
            getClosestTag: function(a, b) {
                return h.traverseUp(a, function(a) {
                    return a.nodeName.toLowerCase() === b.toLowerCase()
                })
            },
            unwrap: function(a, b) {
                for (var c = b.createDocumentFragment(), d = Array.prototype.slice.call(a.childNodes), e = 0; e < d.length; e++)
                    c.appendChild(d[e]);
                c.childNodes.length ? a.parentNode.replaceChild(c, a) : a.parentNode.removeChild(a)
            },
            guid: function() {
                function a() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }
        };
        a.util = h
    }(window),
    function() {
        var b = function(b) {
            a.util.extend(this, b)
        };
        b.extend = function(b) {
            var c, d = this;
            c = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
                return d.apply(this, arguments)
            }
            ,
            a.util.extend(c, d);
            var e = function() {
                this.constructor = c
            };
            return e.prototype = d.prototype,
            c.prototype = new e,
            b && a.util.extend(c.prototype, b),
            c
        }
        ,
        b.prototype = {
            init: function() {},
            base: void 0,
            name: void 0,
            checkState: void 0,
            destroy: void 0,
            queryCommandState: void 0,
            isActive: void 0,
            isAlreadyApplied: void 0,
            setActive: void 0,
            setInactive: void 0,
            getInteractionElements: void 0,
            window: void 0,
            document: void 0,
            getEditorElements: function() {
                return this.base.elements
            },
            getEditorId: function() {
                return this.base.id
            },
            getEditorOption: function(a) {
                return this.base.options[a]
            }
        },
        ["execAction", "on", "off", "subscribe", "trigger"].forEach(function(a) {
            b.prototype[a] = function() {
                return this.base[a].apply(this.base, arguments)
            }
        }),
        a.Extension = b
    }(),
    function() {
        function b(b) {
            return a.util.isBlockContainer(b) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
        var c = {
            findMatchingSelectionParent: function(b, c) {
                var d, e, f = c.getSelection();
                return 0 === f.rangeCount ? !1 : (d = f.getRangeAt(0),
                e = d.commonAncestorContainer,
                a.util.traverseUp(e, b))
            },
            getSelectionElement: function(b) {
                return this.findMatchingSelectionParent(function(b) {
                    return a.util.isMediumEditorElement(b)
                }, b)
            },
            exportSelection: function(a, b) {
                if (!a)
                    return null;
                var c = null
                  , d = b.getSelection();
                if (d.rangeCount > 0) {
                    var e, f = d.getRangeAt(0), g = f.cloneRange();
                    g.selectNodeContents(a),
                    g.setEnd(f.startContainer, f.startOffset),
                    e = g.toString().length,
                    c = {
                        start: e,
                        end: e + f.toString().length
                    },
                    this.doesRangeStartWithImages(f, b) && (c.startsWithImage = !0);
                    var h = this.getTrailingImageCount(a, c, f.endContainer, f.endOffset);
                    if (h && (c.trailingImageCount = h),
                    0 !== e) {
                        var i = this.getIndexRelativeToAdjacentEmptyBlocks(b, a, f.startContainer, f.startOffset);
                        -1 !== i && (c.emptyBlocksIndex = i)
                    }
                }
                return c
            },
            importSelection: function(a, b, c, d) {
                if (a && b) {
                    var e = c.createRange();
                    e.setStart(b, 0),
                    e.collapse(!0);
                    var f, g = b, h = [], i = 0, j = !1, k = !1, l = 0, m = !1, n = !1, o = null;
                    for ((d || a.startsWithImage || "undefined" != typeof a.emptyBlocksIndex) && (n = !0); !m && g; )
                        if (g.nodeType > 3)
                            g = h.pop();
                        else {
                            if (3 !== g.nodeType || k) {
                                if (a.trailingImageCount && k && ("img" === g.nodeName.toLowerCase() && l++,
                                l === a.trailingImageCount)) {
                                    for (var p = 0; g.parentNode.childNodes[p] !== g; )
                                        p++;
                                    e.setEnd(g.parentNode, p + 1),
                                    m = !0
                                }
                                if (!m && 1 === g.nodeType)
                                    for (var q = g.childNodes.length - 1; q >= 0; )
                                        h.push(g.childNodes[q]),
                                        q -= 1
                            } else
                                f = i + g.length,
                                !j && a.start >= i && a.start <= f && (n || a.start < f ? (e.setStart(g, a.start - i),
                                j = !0) : o = g),
                                j && a.end >= i && a.end <= f && (a.trailingImageCount ? k = !0 : (e.setEnd(g, a.end - i),
                                m = !0)),
                                i = f;
                            m || (g = h.pop())
                        }
                    !j && o && (e.setStart(o, o.length),
                    e.setEnd(o, o.length)),
                    "undefined" != typeof a.emptyBlocksIndex && (e = this.importSelectionMoveCursorPastBlocks(c, b, a.emptyBlocksIndex, e)),
                    d && (e = this.importSelectionMoveCursorPastAnchor(a, e)),
                    this.selectRange(c, e)
                }
            },
            importSelectionMoveCursorPastAnchor: function(b, c) {
                var d = function(a) {
                    return "a" === a.nodeName.toLowerCase()
                };
                if (b.start === b.end && 3 === c.startContainer.nodeType && c.startOffset === c.startContainer.nodeValue.length && a.util.traverseUp(c.startContainer, d)) {
                    for (var e = c.startContainer, f = c.startContainer.parentNode; null !== f && "a" !== f.nodeName.toLowerCase(); )
                        f.childNodes[f.childNodes.length - 1] !== e ? f = null : (e = f,
                        f = f.parentNode);
                    if (null !== f && "a" === f.nodeName.toLowerCase()) {
                        for (var g = null, h = 0; null === g && h < f.parentNode.childNodes.length; h++)
                            f.parentNode.childNodes[h] === f && (g = h);
                        c.setStart(f.parentNode, g + 1),
                        c.collapse(!0)
                    }
                }
                return c
            },
            importSelectionMoveCursorPastBlocks: function(c, d, e, f) {
                var g, h, i = c.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, b, !1), j = f.startContainer, k = 0;
                for (e = e || 1,
                g = 3 === j.nodeType && a.util.isBlockContainer(j.previousSibling) ? j.previousSibling : a.util.getClosestBlockContainer(j); i.nextNode(); )
                    if (h) {
                        if (h = i.currentNode,
                        k++,
                        k === e)
                            break;
                        if (h.textContent.length > 0)
                            break
                    } else
                        g === i.currentNode && (h = i.currentNode);
                return h || (h = g),
                f.setStart(a.util.getFirstSelectableLeafNode(h), 0),
                f
            },
            getIndexRelativeToAdjacentEmptyBlocks: function(c, d, e, f) {
                if (e.textContent.length > 0 && f > 0)
                    return -1;
                var g = e;
                if (3 !== g.nodeType && (g = e.childNodes[f]),
                g) {
                    if (!a.util.isElementAtBeginningOfBlock(g))
                        return -1;
                    var h = a.util.findPreviousSibling(g);
                    if (!h)
                        return -1;
                    if (h.nodeValue)
                        return -1
                }
                for (var i = a.util.getClosestBlockContainer(e), j = c.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, b, !1), k = 0; j.nextNode(); ) {
                    var l = "" === j.currentNode.textContent;
                    if ((l || k > 0) && (k += 1),
                    j.currentNode === i)
                        return k;
                    l || (k = 0)
                }
                return k
            },
            doesRangeStartWithImages: function(a, b) {
                if (0 !== a.startOffset || 1 !== a.startContainer.nodeType)
                    return !1;
                if ("img" === a.startContainer.nodeName.toLowerCase())
                    return !0;
                var c = a.startContainer.querySelector("img");
                if (!c)
                    return !1;
                for (var d = b.createTreeWalker(a.startContainer, NodeFilter.SHOW_ALL, null, !1); d.nextNode(); ) {
                    var e = d.currentNode;
                    if (e === c)
                        break;
                    if (e.nodeValue)
                        return !1
                }
                return !0
            },
            getTrailingImageCount: function(a, b, c, d) {
                if (0 === d || 1 !== c.nodeType)
                    return 0;
                if ("img" !== c.nodeName.toLowerCase() && !c.querySelector("img"))
                    return 0;
                for (var e = c.childNodes[d - 1]; e.hasChildNodes(); )
                    e = e.lastChild;
                for (var f, g = a, h = [], i = 0, j = !1, k = !1, l = !1, m = 0; !l && g; )
                    if (g.nodeType > 3)
                        g = h.pop();
                    else {
                        if (3 !== g.nodeType || k) {
                            if ("img" === g.nodeName.toLowerCase() && m++,
                            g === e)
                                l = !0;
                            else if (1 === g.nodeType)
                                for (var n = g.childNodes.length - 1; n >= 0; )
                                    h.push(g.childNodes[n]),
                                    n -= 1
                        } else
                            m = 0,
                            f = i + g.length,
                            !j && b.start >= i && b.start <= f && (j = !0),
                            j && b.end >= i && b.end <= f && (k = !0),
                            i = f;
                        l || (g = h.pop())
                    }
                return m
            },
            selectionContainsContent: function(a) {
                var b = a.getSelection();
                if (!b || b.isCollapsed || !b.rangeCount)
                    return !1;
                if ("" !== b.toString().trim())
                    return !0;
                var c = this.getSelectedParentElement(b.getRangeAt(0));
                return !(!c || !("img" === c.nodeName.toLowerCase() || 1 === c.nodeType && c.querySelector("img")))
            },
            selectionInContentEditableFalse: function(a) {
                var b, c = this.findMatchingSelectionParent(function(a) {
                    var c = a && a.getAttribute("contenteditable");
                    return "true" === c && (b = !0),
                    "#text" !== a.nodeName && "false" === c
                }, a);
                return !b && c
            },
            getSelectionHtml: function(a) {
                var b, c, d, e = "", f = a.getSelection();
                if (f.rangeCount) {
                    for (d = a.createElement("div"),
                    b = 0,
                    c = f.rangeCount; c > b; b += 1)
                        d.appendChild(f.getRangeAt(b).cloneContents());
                    e = d.innerHTML
                }
                return e
            },
            getCaretOffsets: function(a, b) {
                var c, d;
                return b || (b = window.getSelection().getRangeAt(0)),
                c = b.cloneRange(),
                d = b.cloneRange(),
                c.selectNodeContents(a),
                c.setEnd(b.endContainer, b.endOffset),
                d.selectNodeContents(a),
                d.setStart(b.endContainer, b.endOffset),
                {
                    left: c.toString().length,
                    right: d.toString().length
                }
            },
            rangeSelectsSingleNode: function(a) {
                var b = a.startContainer;
                return b === a.endContainer && b.hasChildNodes() && a.endOffset === a.startOffset + 1
            },
            getSelectedParentElement: function(a) {
                return a ? this.rangeSelectsSingleNode(a) && 3 !== a.startContainer.childNodes[a.startOffset].nodeType ? a.startContainer.childNodes[a.startOffset] : 3 === a.startContainer.nodeType ? a.startContainer.parentNode : a.startContainer : null
            },
            getSelectedElements: function(a) {
                var b, c, d, e = a.getSelection();
                if (!e.rangeCount || e.isCollapsed || !e.getRangeAt(0).commonAncestorContainer)
                    return [];
                if (b = e.getRangeAt(0),
                3 === b.commonAncestorContainer.nodeType) {
                    for (c = [],
                    d = b.commonAncestorContainer; d.parentNode && 1 === d.parentNode.childNodes.length; )
                        c.push(d.parentNode),
                        d = d.parentNode;
                    return c
                }
                return [].filter.call(b.commonAncestorContainer.getElementsByTagName("*"), function(a) {
                    return "function" == typeof e.containsNode ? e.containsNode(a, !0) : !0
                })
            },
            selectNode: function(a, b) {
                var c = b.createRange();
                c.selectNodeContents(a),
                this.selectRange(b, c)
            },
            select: function(a, b, c, d, e) {
                var f = a.createRange();
                return f.setStart(b, c),
                d ? f.setEnd(d, e) : f.collapse(!0),
                this.selectRange(a, f),
                f
            },
            clearSelection: function(a, b) {
                b ? a.getSelection().collapseToStart() : a.getSelection().collapseToEnd()
            },
            moveCursor: function(a, b, c) {
                this.select(a, b, c)
            },
            getSelectionRange: function(a) {
                var b = a.getSelection();
                return 0 === b.rangeCount ? null : b.getRangeAt(0)
            },
            selectRange: function(a, b) {
                var c = a.getSelection();
                c.removeAllRanges(),
                c.addRange(b)
            },
            getSelectionStart: function(a) {
                var b = a.getSelection().anchorNode
                  , c = b && 3 === b.nodeType ? b.parentNode : b;
                return c
            }
        };
        a.selection = c
    }(),
    function() {
        function b(b, c) {
            return b.some(function(b) {
                if ("function" != typeof b.getInteractionElements)
                    return !1;
                var d = b.getInteractionElements();
                return d ? (Array.isArray(d) || (d = [d]),
                d.some(function(b) {
                    return a.util.isDescendant(b, c, !0)
                })) : !1
            })
        }
        var c = function(a) {
            this.base = a,
            this.options = this.base.options,
            this.events = [],
            this.disabledEvents = {},
            this.customEvents = {},
            this.listeners = {}
        };
        c.prototype = {
            InputEventOnContenteditableSupported: !a.util.isIE && !a.util.isEdge,
            attachDOMEvent: function(b, c, d, e) {
                var f = this.base.options.contentWindow
                  , g = this.base.options.ownerDocument;
                b = a.util.isElement(b) || [f, g].indexOf(b) > -1 ? [b] : b,
                Array.prototype.forEach.call(b, function(a) {
                    a.addEventListener(c, d, e),
                    this.events.push([a, c, d, e])
                }
                .bind(this))
            },
            detachDOMEvent: function(b, c, d, e) {
                var f, g, h = this.base.options.contentWindow, i = this.base.options.ownerDocument;
                null !== b && (b = a.util.isElement(b) || [h, i].indexOf(b) > -1 ? [b] : b,
                Array.prototype.forEach.call(b, function(a) {
                    f = this.indexOfListener(a, c, d, e),
                    -1 !== f && (g = this.events.splice(f, 1)[0],
                    g[0].removeEventListener(g[1], g[2], g[3]))
                }
                .bind(this)))
            },
            indexOfListener: function(a, b, c, d) {
                var e, f, g;
                for (e = 0,
                f = this.events.length; f > e; e += 1)
                    if (g = this.events[e],
                    g[0] === a && g[1] === b && g[2] === c && g[3] === d)
                        return e;
                return -1
            },
            detachAllDOMEvents: function() {
                for (var a = this.events.pop(); a; )
                    a[0].removeEventListener(a[1], a[2], a[3]),
                    a = this.events.pop()
            },
            detachAllEventsFromElement: function(a) {
                for (var b = this.events.filter(function(b) {
                    return b && b[0].getAttribute && b[0].getAttribute("medium-editor-index") === a.getAttribute("medium-editor-index")
                }), c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    this.detachDOMEvent(e[0], e[1], e[2], e[3])
                }
            },
            attachAllEventsToElement: function(a) {
                this.listeners.editableInput && (this.contentCache[a.getAttribute("medium-editor-index")] = a.innerHTML),
                this.eventsCache && this.eventsCache.forEach(function(b) {
                    this.attachDOMEvent(a, b.name, b.handler.bind(this))
                }, this)
            },
            enableCustomEvent: function(a) {
                void 0 !== this.disabledEvents[a] && delete this.disabledEvents[a]
            },
            disableCustomEvent: function(a) {
                this.disabledEvents[a] = !0
            },
            attachCustomEvent: function(a, b) {
                this.setupListener(a),
                this.customEvents[a] || (this.customEvents[a] = []),
                this.customEvents[a].push(b)
            },
            detachCustomEvent: function(a, b) {
                var c = this.indexOfCustomListener(a, b);
                -1 !== c && this.customEvents[a].splice(c, 1)
            },
            indexOfCustomListener: function(a, b) {
                return this.customEvents[a] && this.customEvents[a].length ? this.customEvents[a].indexOf(b) : -1
            },
            detachAllCustomEvents: function() {
                this.customEvents = {}
            },
            triggerCustomEvent: function(a, b, c) {
                this.customEvents[a] && !this.disabledEvents[a] && this.customEvents[a].forEach(function(a) {
                    a(b, c)
                })
            },
            destroy: function() {
                this.detachAllDOMEvents(),
                this.detachAllCustomEvents(),
                this.detachExecCommand(),
                this.base.elements && this.base.elements.forEach(function(a) {
                    a.removeAttribute("data-medium-focused")
                })
            },
            attachToExecCommand: function() {
                this.execCommandListener || (this.execCommandListener = function(a) {
                    this.handleDocumentExecCommand(a)
                }
                .bind(this),
                this.wrapExecCommand(),
                this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))
            },
            detachExecCommand: function() {
                var a = this.options.ownerDocument;
                if (this.execCommandListener && a.execCommand.listeners) {
                    var b = a.execCommand.listeners.indexOf(this.execCommandListener);
                    -1 !== b && a.execCommand.listeners.splice(b, 1),
                    a.execCommand.listeners.length || this.unwrapExecCommand()
                }
            },
            wrapExecCommand: function() {
                var a = this.options.ownerDocument;
                if (!a.execCommand.listeners) {
                    var b = function(b, c) {
                        a.execCommand.listeners && a.execCommand.listeners.forEach(function(a) {
                            a({
                                command: b[0],
                                value: b[2],
                                args: b,
                                result: c
                            })
                        })
                    }
                      , c = function() {
                        var c = a.execCommand.orig.apply(this, arguments);
                        if (!a.execCommand.listeners)
                            return c;
                        var d = Array.prototype.slice.call(arguments);
                        return b(d, c),
                        c
                    };
                    c.orig = a.execCommand,
                    c.listeners = [],
                    c.callListeners = b,
                    a.execCommand = c
                }
            },
            unwrapExecCommand: function() {
                var a = this.options.ownerDocument;
                a.execCommand.orig && (a.execCommand = a.execCommand.orig)
            },
            setupListener: function(a) {
                if (!this.listeners[a]) {
                    switch (a) {
                    case "externalInteraction":
                        this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0),
                        this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0),
                        this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0);
                        break;
                    case "blur":
                        this.setupListener("externalInteraction");
                        break;
                    case "focus":
                        this.setupListener("externalInteraction");
                        break;
                    case "editableInput":
                        this.contentCache = {},
                        this.base.elements.forEach(function(a) {
                            this.contentCache[a.getAttribute("medium-editor-index")] = a.innerHTML
                        }, this),
                        this.InputEventOnContenteditableSupported && this.attachToEachElement("input", this.handleInput),
                        this.InputEventOnContenteditableSupported || (this.setupListener("editableKeypress"),
                        this.keypressUpdateInput = !0,
                        this.attachDOMEvent(document, "selectionchange", this.handleDocumentSelectionChange.bind(this)),
                        this.attachToExecCommand());
                        break;
                    case "editableClick":
                        this.attachToEachElement("click", this.handleClick);
                        break;
                    case "editableBlur":
                        this.attachToEachElement("blur", this.handleBlur);
                        break;
                    case "editableKeypress":
                        this.attachToEachElement("keypress", this.handleKeypress);
                        break;
                    case "editableKeyup":
                        this.attachToEachElement("keyup", this.handleKeyup);
                        break;
                    case "editableKeydown":
                        this.attachToEachElement("keydown", this.handleKeydown);
                        break;
                    case "editableKeydownSpace":
                        this.setupListener("editableKeydown");
                        break;
                    case "editableKeydownEnter":
                        this.setupListener("editableKeydown");
                        break;
                    case "editableKeydownTab":
                        this.setupListener("editableKeydown");
                        break;
                    case "editableKeydownDelete":
                        this.setupListener("editableKeydown");
                        break;
                    case "editableMouseover":
                        this.attachToEachElement("mouseover", this.handleMouseover);
                        break;
                    case "editableDrag":
                        this.attachToEachElement("dragover", this.handleDragging),
                        this.attachToEachElement("dragleave", this.handleDragging);
                        break;
                    case "editableDrop":
                        this.attachToEachElement("drop", this.handleDrop);
                        break;
                    case "editablePaste":
                        this.attachToEachElement("paste", this.handlePaste)
                    }
                    this.listeners[a] = !0
                }
            },
            attachToEachElement: function(a, b) {
                this.eventsCache || (this.eventsCache = []),
                this.base.elements.forEach(function(c) {
                    this.attachDOMEvent(c, a, b.bind(this))
                }, this),
                this.eventsCache.push({
                    name: a,
                    handler: b
                })
            },
            cleanupElement: function(a) {
                var b = a.getAttribute("medium-editor-index");
                b && (this.detachAllEventsFromElement(a),
                this.contentCache && delete this.contentCache[b])
            },
            focusElement: function(a) {
                a.focus(),
                this.updateFocus(a, {
                    target: a,
                    type: "focus"
                })
            },
            updateFocus: function(c, d) {
                var e, f = this.base.getFocusedElement();
                f && "click" === d.type && this.lastMousedownTarget && (a.util.isDescendant(f, this.lastMousedownTarget, !0) || b(this.base.extensions, this.lastMousedownTarget)) && (e = f),
                e || this.base.elements.some(function(b) {
                    return !e && a.util.isDescendant(b, c, !0) && (e = b),
                    !!e
                }, this);
                var g = !a.util.isDescendant(f, c, !0) && !b(this.base.extensions, c);
                e !== f && (f && g && (f.removeAttribute("data-medium-focused"),
                this.triggerCustomEvent("blur", d, f)),
                e && (e.setAttribute("data-medium-focused", !0),
                this.triggerCustomEvent("focus", d, e))),
                g && this.triggerCustomEvent("externalInteraction", d)
            },
            updateInput: function(a, b) {
                if (this.contentCache) {
                    var c = a.getAttribute("medium-editor-index")
                      , d = a.innerHTML;
                    d !== this.contentCache[c] && this.triggerCustomEvent("editableInput", b, a),
                    this.contentCache[c] = d
                }
            },
            handleDocumentSelectionChange: function(b) {
                if (b.currentTarget && b.currentTarget.activeElement) {
                    var c, d = b.currentTarget.activeElement;
                    this.base.elements.some(function(b) {
                        return a.util.isDescendant(b, d, !0) ? (c = b,
                        !0) : !1
                    }, this),
                    c && this.updateInput(c, {
                        target: d,
                        currentTarget: c
                    })
                }
            },
            handleDocumentExecCommand: function() {
                var a = this.base.getFocusedElement();
                a && this.updateInput(a, {
                    target: a,
                    currentTarget: a
                })
            },
            handleBodyClick: function(a) {
                this.updateFocus(a.target, a)
            },
            handleBodyFocus: function(a) {
                this.updateFocus(a.target, a)
            },
            handleBodyMousedown: function(a) {
                this.lastMousedownTarget = a.target
            },
            handleInput: function(a) {
                this.updateInput(a.currentTarget, a)
            },
            handleClick: function(a) {
                this.triggerCustomEvent("editableClick", a, a.currentTarget);
            },
            handleBlur: function(a) {
                this.triggerCustomEvent("editableBlur", a, a.currentTarget)
            },
            handleKeypress: function(a) {
                if (this.triggerCustomEvent("editableKeypress", a, a.currentTarget),
                this.keypressUpdateInput) {
                    var b = {
                        target: a.target,
                        currentTarget: a.currentTarget
                    };
                    setTimeout(function() {
                        this.updateInput(b.currentTarget, b)
                    }
                    .bind(this), 0)
                }
            },
            handleKeyup: function(a) {
                this.triggerCustomEvent("editableKeyup", a, a.currentTarget)
            },
            handleMouseover: function(a) {
                this.triggerCustomEvent("editableMouseover", a, a.currentTarget)
            },
            handleDragging: function(a) {
                this.triggerCustomEvent("editableDrag", a, a.currentTarget)
            },
            handleDrop: function(a) {
                this.triggerCustomEvent("editableDrop", a, a.currentTarget)
            },
            handlePaste: function(a) {
                this.triggerCustomEvent("editablePaste", a, a.currentTarget)
            },
            handleKeydown: function(b) {
                return this.triggerCustomEvent("editableKeydown", b, b.currentTarget),
                a.util.isKey(b, a.util.keyCode.SPACE) ? this.triggerCustomEvent("editableKeydownSpace", b, b.currentTarget) : a.util.isKey(b, a.util.keyCode.ENTER) || b.ctrlKey && a.util.isKey(b, a.util.keyCode.M) ? this.triggerCustomEvent("editableKeydownEnter", b, b.currentTarget) : a.util.isKey(b, a.util.keyCode.TAB) ? this.triggerCustomEvent("editableKeydownTab", b, b.currentTarget) : a.util.isKey(b, [a.util.keyCode.DELETE, a.util.keyCode.BACKSPACE]) ? this.triggerCustomEvent("editableKeydownDelete", b, b.currentTarget) : void 0
            }
        },
        a.Events = c
    }(),
    function() {
        var b = a.Extension.extend({
            action: void 0,
            aria: void 0,
            tagNames: void 0,
            style: void 0,
            useQueryState: void 0,
            contentDefault: void 0,
            contentFA: void 0,
            classList: void 0,
            attrs: void 0,
            constructor: function(c) {
                b.isBuiltInButton(c) ? a.Extension.call(this, this.defaults[c]) : a.Extension.call(this, c)
            },
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.button = this.createButton(),
                this.on(this.button, "click", this.handleClick.bind(this))
            },
            getButton: function() {
                return this.button
            },
            getAction: function() {
                return "function" == typeof this.action ? this.action(this.base.options) : this.action
            },
            getAria: function() {
                return "function" == typeof this.aria ? this.aria(this.base.options) : this.aria
            },
            getTagNames: function() {
                return "function" == typeof this.tagNames ? this.tagNames(this.base.options) : this.tagNames
            },
            createButton: function() {
                var a = this.document.createElement("button")
                  , b = this.contentDefault
                  , c = this.getAria()
                  , d = this.getEditorOption("buttonLabels");
                return a.classList.add("medium-editor-action"),
                a.classList.add("medium-editor-action-" + this.name),
                this.classList && this.classList.forEach(function(b) {
                    a.classList.add(b)
                }),
                a.setAttribute("data-action", this.getAction()),
                c && (a.setAttribute("title", c),
                a.setAttribute("aria-label", c)),
                this.attrs && Object.keys(this.attrs).forEach(function(b) {
                    a.setAttribute(b, this.attrs[b])
                }, this),
                "fontawesome" === d && this.contentFA && (b = this.contentFA),
                a.innerHTML = b,
                a
            },
            handleClick: function(a) {
                a.preventDefault(),
                a.stopPropagation();
                var b = this.getAction();
                b && this.execAction(b)
            },
            isActive: function() {
                return this.button.classList.contains(this.getEditorOption("activeButtonClass"))
            },
            setInactive: function() {
                this.button.classList.remove(this.getEditorOption("activeButtonClass")),
                delete this.knownState
            },
            setActive: function() {
                this.button.classList.add(this.getEditorOption("activeButtonClass")),
                delete this.knownState
            },
            queryCommandState: function() {
                var a = null;
                return this.useQueryState && (a = this.base.queryCommandState(this.getAction())),
                a
            },
            isAlreadyApplied: function(a) {
                var b, c, d = !1, e = this.getTagNames();
                return this.knownState === !1 || this.knownState === !0 ? this.knownState : (e && e.length > 0 && (d = -1 !== e.indexOf(a.nodeName.toLowerCase())),
                !d && this.style && (b = this.style.value.split("|"),
                c = this.window.getComputedStyle(a, null).getPropertyValue(this.style.prop),
                b.forEach(function(a) {
                    this.knownState || (d = -1 !== c.indexOf(a),
                    (d || "text-decoration" !== this.style.prop) && (this.knownState = d))
                }, this)),
                d)
            }
        });
        b.isBuiltInButton = function(b) {
            return "string" == typeof b && a.extensions.button.prototype.defaults.hasOwnProperty(b)
        }
        ,
        a.extensions.button = b
    }(),
    function() {
        a.extensions.button.prototype.defaults = {
            bold: {
                name: "bold",
                action: "bold",
                aria: "bold",
                tagNames: ["b", "strong"],
                style: {
                    prop: "font-weight",
                    value: "700|bold"
                },
                useQueryState: !0,
                contentDefault: "<b>B</b>",
                contentFA: '<i class="fa fa-bold"></i>'
            },
            italic: {
                name: "italic",
                action: "italic",
                aria: "italic",
                tagNames: ["i", "em"],
                style: {
                    prop: "font-style",
                    value: "italic"
                },
                useQueryState: !0,
                contentDefault: "<b><i>I</i></b>",
                contentFA: '<i class="fa fa-italic"></i>'
            },
            underline: {
                name: "underline",
                action: "underline",
                aria: "underline",
                tagNames: ["u"],
                style: {
                    prop: "text-decoration",
                    value: "underline"
                },
                useQueryState: !0,
                contentDefault: "<b><u>U</u></b>",
                contentFA: '<i class="fa fa-underline"></i>'
            },
            strikethrough: {
                name: "strikethrough",
                action: "strikethrough",
                aria: "strike through",
                tagNames: ["strike"],
                style: {
                    prop: "text-decoration",
                    value: "line-through"
                },
                useQueryState: !0,
                contentDefault: "<s>A</s>",
                contentFA: '<i class="fa fa-strikethrough"></i>'
            },
            superscript: {
                name: "superscript",
                action: "superscript",
                aria: "superscript",
                tagNames: ["sup"],
                contentDefault: "<b>x<sup>1</sup></b>",
                contentFA: '<i class="fa fa-superscript"></i>'
            },
            subscript: {
                name: "subscript",
                action: "subscript",
                aria: "subscript",
                tagNames: ["sub"],
                contentDefault: "<b>x<sub>1</sub></b>",
                contentFA: '<i class="fa fa-subscript"></i>'
            },
            image: {
                name: "image",
                action: "image",
                aria: "image",
                tagNames: ["img"],
                contentDefault: "<b>image</b>",
                contentFA: '<i class="fa fa-picture-o"></i>'
            },
            html: {
                name: "html",
                action: "html",
                aria: "evaluate html",
                tagNames: ["iframe", "object"],
                contentDefault: "<b>html</b>",
                contentFA: '<i class="fa fa-code"></i>'
            },
            orderedlist: {
                name: "orderedlist",
                action: "insertorderedlist",
                aria: "ordered list",
                tagNames: ["ol"],
                useQueryState: !0,
                contentDefault: "<b>1.</b>",
                contentFA: '<i class="fa fa-list-ol"></i>'
            },
            unorderedlist: {
                name: "unorderedlist",
                action: "insertunorderedlist",
                aria: "unordered list",
                tagNames: ["ul"],
                useQueryState: !0,
                contentDefault: "<b>&bull;</b>",
                contentFA: '<i class="fa fa-list-ul"></i>'
            },
            indent: {
                name: "indent",
                action: "indent",
                aria: "indent",
                tagNames: [],
                contentDefault: "<b>&rarr;</b>",
                contentFA: '<i class="fa fa-indent"></i>'
            },
            outdent: {
                name: "outdent",
                action: "outdent",
                aria: "outdent",
                tagNames: [],
                contentDefault: "<b>&larr;</b>",
                contentFA: '<i class="fa fa-outdent"></i>'
            },
            justifyCenter: {
                name: "justifyCenter",
                action: "justifyCenter",
                aria: "center justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "center"
                },
                contentDefault: "<b>C</b>",
                contentFA: '<i class="fa fa-align-center"></i>'
            },
            justifyFull: {
                name: "justifyFull",
                action: "justifyFull",
                aria: "full justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "justify"
                },
                contentDefault: "<b>J</b>",
                contentFA: '<i class="fa fa-align-justify"></i>'
            },
            justifyLeft: {
                name: "justifyLeft",
                action: "justifyLeft",
                aria: "left justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "left"
                },
                contentDefault: "<b>L</b>",
                contentFA: '<i class="fa fa-align-left"></i>'
            },
            justifyRight: {
                name: "justifyRight",
                action: "justifyRight",
                aria: "right justify",
                tagNames: [],
                style: {
                    prop: "text-align",
                    value: "right"
                },
                contentDefault: "<b>R</b>",
                contentFA: '<i class="fa fa-align-right"></i>'
            },
            removeFormat: {
                name: "removeFormat",
                aria: "remove formatting",
                action: "removeFormat",
                contentDefault: "<b>X</b>",
                contentFA: '<i class="fa fa-eraser"></i>'
            },
            quote: {
                name: "quote",
                action: "append-blockquote",
                aria: "blockquote",
                tagNames: ["blockquote"],
                contentDefault: "<b>&ldquo;</b>",
                contentFA: '<i class="fa fa-quote-right"></i>'
            },
            pre: {
                name: "pre",
                action: "append-pre",
                aria: "preformatted text",
                tagNames: ["pre"],
                contentDefault: "<b>0101</b>",
                contentFA: '<i class="fa fa-code fa-lg"></i>'
            },
            h1: {
                name: "h1",
                action: "append-h1",
                aria: "header type one",
                tagNames: ["h1"],
                contentDefault: "<b>H1</b>",
                contentFA: '<i class="fa fa-header"><sup>1</sup>'
            },
            h2: {
                name: "h2",
                action: "append-h2",
                aria: "header type two",
                tagNames: ["h2"],
                contentDefault: "<b>H2</b>",
                contentFA: '<i class="fa fa-header"><sup>2</sup>'
            },
            h3: {
                name: "h3",
                action: "append-h3",
                aria: "header type three",
                tagNames: ["h3"],
                contentDefault: "<b>H3</b>",
                contentFA: '<i class="fa fa-header"><sup>3</sup>'
            },
            h4: {
                name: "h4",
                action: "append-h4",
                aria: "header type four",
                tagNames: ["h4"],
                contentDefault: "<b>H4</b>",
                contentFA: '<i class="fa fa-header"><sup>4</sup>'
            },
            h5: {
                name: "h5",
                action: "append-h5",
                aria: "header type five",
                tagNames: ["h5"],
                contentDefault: "<b>H5</b>",
                contentFA: '<i class="fa fa-header"><sup>5</sup>'
            },
            h6: {
                name: "h6",
                action: "append-h6",
                aria: "header type six",
                tagNames: ["h6"],
                contentDefault: "<b>H6</b>",
                contentFA: '<i class="fa fa-header"><sup>6</sup>'
            }
        }
    }(),
    function() {
        var b = a.extensions.button.extend({
            init: function() {
                a.extensions.button.prototype.init.apply(this, arguments)
            },
            formSaveLabel: "&#10003;",
            formCloseLabel: "&times;",
            activeClass: "medium-editor-toolbar-form-active",
            hasForm: !0,
            getForm: function() {},
            isDisplayed: function() {
                return this.hasForm ? this.getForm().classList.contains(this.activeClass) : !1
            },
            showForm: function() {
                this.hasForm && this.getForm().classList.add(this.activeClass)
            },
            hideForm: function() {
                this.hasForm && this.getForm().classList.remove(this.activeClass)
            },
            showToolbarDefaultActions: function() {
                var a = this.base.getExtensionByName("toolbar");
                a && a.showToolbarDefaultActions()
            },
            hideToolbarDefaultActions: function() {
                var a = this.base.getExtensionByName("toolbar");
                a && a.hideToolbarDefaultActions()
            },
            setToolbarPosition: function() {
                var a = this.base.getExtensionByName("toolbar");
                a && a.setToolbarPosition()
            }
        });
        a.extensions.form = b
    }(),
    function() {
        var b = a.extensions.form.extend({
            customClassOption: null,
            customClassOptionText: "Button",
            linkValidation: !1,
            placeholderText: "Paste or type a link",
            targetCheckbox: !1,
            targetCheckboxText: "Open in new window",
            name: "anchor",
            action: "createLink",
            aria: "link",
            tagNames: ["a"],
            contentDefault: "<b>#</b>",
            contentFA: '<i class="fa fa-link"></i>',
            init: function() {
                a.extensions.form.prototype.init.apply(this, arguments),
                this.subscribe("editableKeydown", this.handleKeydown.bind(this))
            },
            handleClick: function(b) {
                b.preventDefault(),
                b.stopPropagation();
                var c = a.selection.getSelectionRange(this.document);
                return "a" === c.startContainer.nodeName.toLowerCase() || "a" === c.endContainer.nodeName.toLowerCase() || a.util.getClosestTag(a.selection.getSelectedParentElement(c), "a") ? this.execAction("unlink") : (this.isDisplayed() || this.showForm(),
                !1)
            },
            handleKeydown: function(b) {
                a.util.isKey(b, a.util.keyCode.K) && a.util.isMetaCtrlKey(b) && !b.shiftKey && this.handleClick(b)
            },
            getForm: function() {
                return this.form || (this.form = this.createForm()),
                this.form
            },
            getTemplate: function() {
                var a = ['<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'];
                return a.push('<a href="#" class="medium-editor-toolbar-save">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : this.formSaveLabel, "</a>"),
                a.push('<a href="#" class="medium-editor-toolbar-close">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : this.formCloseLabel, "</a>"),
                this.targetCheckbox && a.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target">', "<label>", this.targetCheckboxText, "</label>", "</div>"),
                this.customClassOption && a.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', "<label>", this.customClassOptionText, "</label>", "</div>"),
                a.join("")
            },
            isDisplayed: function() {
                return a.extensions.form.prototype.isDisplayed.apply(this)
            },
            hideForm: function() {
                a.extensions.form.prototype.hideForm.apply(this),
                this.getInput().value = ""
            },
            showForm: function(b) {
                var c = this.getInput()
                  , d = this.getAnchorTargetCheckbox()
                  , e = this.getAnchorButtonCheckbox();
                if (b = b || {
                    value: ""
                },
                "string" == typeof b && (b = {
                    value: b
                }),
                this.base.saveSelection(),
                this.hideToolbarDefaultActions(),
                a.extensions.form.prototype.showForm.apply(this),
                this.setToolbarPosition(),
                c.value = b.value,
                c.focus(),
                d && (d.checked = "_blank" === b.target),
                e) {
                    var f = b.buttonClass ? b.buttonClass.split(" ") : [];
                    e.checked = -1 !== f.indexOf(this.customClassOption)
                }
            },
            destroy: function() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form),
                void delete this.form) : !1
            },
            getFormOpts: function() {
                var a = this.getAnchorTargetCheckbox()
                  , b = this.getAnchorButtonCheckbox()
                  , c = {
                    value: this.getInput().value.trim()
                };
                return this.linkValidation && (c.value = this.checkLinkFormat(c.value)),
                c.target = "_self",
                a && a.checked && (c.target = "_blank"),
                b && b.checked && (c.buttonClass = this.customClassOption),
                c
            },
            doFormSave: function() {
                var a = this.getFormOpts();
                this.completeFormSave(a)
            },
            completeFormSave: function(a) {
                this.base.restoreSelection(),
                this.execAction(this.action, a),
                this.base.checkSelection()
            },
            ensureEncodedUri: function(a) {
                return a === decodeURI(a) ? encodeURI(a) : a
            },
            ensureEncodedUriComponent: function(a) {
                return a === decodeURIComponent(a) ? encodeURIComponent(a) : a
            },
            ensureEncodedParam: function(a) {
                var b = a.split("=")
                  , c = b[0]
                  , d = b[1];
                return c + (void 0 === d ? "" : "=" + this.ensureEncodedUriComponent(d))
            },
            ensureEncodedQuery: function(a) {
                return a.split("&").map(this.ensureEncodedParam.bind(this)).join("&")
            },
            checkLinkFormat: function(a) {
                var b = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i
                  , c = b.test(a)
                  , d = ""
                  , e = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/
                  , f = a.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/)
                  , g = f[1]
                  , h = f[2]
                  , i = f[3];
                if (e.test(a))
                    return "tel:" + a;
                if (!c) {
                    var j = g.split("/")[0];
                    (j.match(/.+(\.|:).+/) || "localhost" === j) && (d = "http://")
                }
                return d + this.ensureEncodedUri(g) + (void 0 === h ? "" : "?" + this.ensureEncodedQuery(h)) + (void 0 === i ? "" : "#" + i)
            },
            doFormCancel: function() {
                this.base.restoreSelection(),
                this.base.checkSelection()
            },
            attachFormEvents: function(a) {
                var b = a.querySelector(".medium-editor-toolbar-close")
                  , c = a.querySelector(".medium-editor-toolbar-save")
                  , d = a.querySelector(".medium-editor-toolbar-input");
                this.on(a, "click", this.handleFormClick.bind(this)),
                this.on(d, "keyup", this.handleTextboxKeyup.bind(this)),
                this.on(b, "click", this.handleCloseClick.bind(this)),
                this.on(c, "click", this.handleSaveClick.bind(this), !0)
            },
            createForm: function() {
                var a = this.document
                  , b = a.createElement("div");
                return b.className = "medium-editor-toolbar-form",
                b.id = "medium-editor-toolbar-form-anchor-" + this.getEditorId(),
                b.innerHTML = this.getTemplate(),
                this.attachFormEvents(b),
                b
            },
            getInput: function() {
                return this.getForm().querySelector("input.medium-editor-toolbar-input")
            },
            getAnchorTargetCheckbox: function() {
                return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")
            },
            getAnchorButtonCheckbox: function() {
                return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")
            },
            handleTextboxKeyup: function(b) {
                return b.keyCode === a.util.keyCode.ENTER ? (b.preventDefault(),
                void this.doFormSave()) : void (b.keyCode === a.util.keyCode.ESCAPE && (b.preventDefault(),
                this.doFormCancel()))
            },
            handleFormClick: function(a) {
                a.stopPropagation()
            },
            handleSaveClick: function(a) {
                a.preventDefault(),
                this.doFormSave()
            },
            handleCloseClick: function(a) {
                a.preventDefault(),
                this.doFormCancel()
            }
        });
        a.extensions.anchor = b
    }(),
    function() {
        var b = a.Extension.extend({
            name: "anchor-preview",
            hideDelay: 500,
            previewValueSelector: "a",
            showWhenToolbarIsVisible: !1,
            showOnEmptyLinks: !0,
            init: function() {
                this.anchorPreview = this.createPreview(),
                this.getEditorOption("elementsContainer").appendChild(this.anchorPreview),
                this.attachToEditables()
            },
            getInteractionElements: function() {
                return this.getPreviewElement()
            },
            getPreviewElement: function() {
                return this.anchorPreview
            },
            createPreview: function() {
                var a = this.document.createElement("div");
                return a.id = "medium-editor-anchor-preview-" + this.getEditorId(),
                a.className = "medium-editor-anchor-preview",
                a.innerHTML = this.getTemplate(),
                this.on(a, "click", this.handleClick.bind(this)),
                a
            },
            getTemplate: function() {
                return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'
            },
            destroy: function() {
                this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview),
                delete this.anchorPreview)
            },
            hidePreview: function() {
                this.anchorPreview && this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"),
                this.activeAnchor = null
            },
            showPreview: function(a) {
                return this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || a.getAttribute("data-disable-preview") ? !0 : (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = a.attributes.href.value,
                this.anchorPreview.querySelector(this.previewValueSelector).href = a.attributes.href.value),
                this.anchorPreview.classList.add("medium-toolbar-arrow-over"),
                this.anchorPreview.classList.remove("medium-toolbar-arrow-under"),
                this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"),
                this.activeAnchor = a,
                this.positionPreview(),
                this.attachPreviewHandlers(),
                this)
            },
            positionPreview: function(a) {
                a = a || this.activeAnchor;
                var b, c, d, e, f, g = this.window.innerWidth, h = this.anchorPreview.offsetHeight, i = a.getBoundingClientRect(), j = this.diffLeft, k = this.diffTop, l = this.getEditorOption("elementsContainer"), m = ["absolute", "fixed"].indexOf(window.getComputedStyle(l).getPropertyValue("position")) > -1, n = {};
                b = this.anchorPreview.offsetWidth / 2;
                var o = this.base.getExtensionByName("toolbar");
                o && (j = o.diffLeft,
                k = o.diffTop),
                c = j - b,
                m ? (e = l.getBoundingClientRect(),
                ["top", "left"].forEach(function(a) {
                    n[a] = i[a] - e[a]
                }),
                n.width = i.width,
                n.height = i.height,
                i = n,
                g = e.width,
                f = l.scrollTop) : f = this.window.pageYOffset,
                d = i.left + i.width / 2,
                f += h + i.top + i.height - k - this.anchorPreview.offsetHeight,
                this.anchorPreview.style.top = Math.round(f) + "px",
                this.anchorPreview.style.right = "initial",
                b > d ? (this.anchorPreview.style.left = c + b + "px",
                this.anchorPreview.style.right = "initial") : b > g - d ? (this.anchorPreview.style.left = "auto",
                this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = c + d + "px",
                this.anchorPreview.style.right = "initial")
            },
            attachToEditables: function() {
                this.subscribe("editableMouseover", this.handleEditableMouseover.bind(this)),
                this.subscribe("positionedToolbar", this.handlePositionedToolbar.bind(this))
            },
            handlePositionedToolbar: function() {
                this.showWhenToolbarIsVisible || this.hidePreview()
            },
            handleClick: function(a) {
                var b = this.base.getExtensionByName("anchor")
                  , c = this.activeAnchor;
                b && c && (a.preventDefault(),
                this.base.selectElement(this.activeAnchor),
                this.base.delay(function() {
                    if (c) {
                        var a = {
                            value: c.attributes.href.value,
                            target: c.getAttribute("target"),
                            buttonClass: c.getAttribute("class")
                        };
                        b.showForm(a),
                        c = null
                    }
                }
                .bind(this))),
                this.hidePreview()
            },
            handleAnchorMouseout: function() {
                this.anchorToPreview = null,
                this.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout),
                this.instanceHandleAnchorMouseout = null
            },
            handleEditableMouseover: function(b) {
                var c = a.util.getClosestTag(b.target, "a");
                if (!1 !== c) {
                    if (!this.showOnEmptyLinks && (!/href=["']\S+["']/.test(c.outerHTML) || /href=["']#\S+["']/.test(c.outerHTML)))
                        return !0;
                    var d = this.base.getExtensionByName("toolbar");
                    if (!this.showWhenToolbarIsVisible && d && d.isDisplayed && d.isDisplayed())
                        return !0;
                    this.activeAnchor && this.activeAnchor !== c && this.detachPreviewHandlers(),
                    this.anchorToPreview = c,
                    this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this),
                    this.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout),
                    this.base.delay(function() {
                        this.anchorToPreview && this.showPreview(this.anchorToPreview)
                    }
                    .bind(this))
                }
            },
            handlePreviewMouseover: function() {
                this.lastOver = (new Date).getTime(),
                this.hovering = !0
            },
            handlePreviewMouseout: function(a) {
                a.relatedTarget && /anchor-preview/.test(a.relatedTarget.className) || (this.hovering = !1)
            },
            updatePreview: function() {
                if (this.hovering)
                    return !0;
                var a = (new Date).getTime() - this.lastOver;
                a > this.hideDelay && this.detachPreviewHandlers()
            },
            detachPreviewHandlers: function() {
                clearInterval(this.intervalTimer),
                this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover),
                this.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout),
                this.activeAnchor && (this.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover),
                this.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))),
                this.hidePreview(),
                this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null
            },
            attachPreviewHandlers: function() {
                this.lastOver = (new Date).getTime(),
                this.hovering = !0,
                this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this),
                this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this),
                this.intervalTimer = setInterval(this.updatePreview.bind(this), 200),
                this.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover),
                this.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout),
                this.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover),
                this.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout)
            }
        });
        a.extensions.anchorPreview = b
    }(),
    function() {
        function b(b) {
            return !a.util.getClosestTag(b, "a")
        }
        var c, d, e, f, g;
        c = [" ", " ", "\n", "\r", " ", " ", " ", " ", " ", "\u2028", "\u2029"],
        d = "com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw",
        e = "(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](" + d + ")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(" + d + "))",
        f = new RegExp("^(" + d + ")$","i"),
        g = new RegExp(e,"gi");
        var h = a.Extension.extend({
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.disableEventHandling = !1,
                this.subscribe("editableKeypress", this.onKeypress.bind(this)),
                this.subscribe("editableBlur", this.onBlur.bind(this)),
                this.document.execCommand("AutoUrlDetect", !1, !1)
            },
            isLastInstance: function() {
                for (var a = 0, b = 0; b < this.window._mediumEditors.length; b++) {
                    var c = this.window._mediumEditors[b];
                    null !== c && void 0 !== c.getExtensionByName("autoLink") && a++
                }
                return 1 === a
            },
            destroy: function() {
                this.document.queryCommandSupported("AutoUrlDetect") && this.isLastInstance() && this.document.execCommand("AutoUrlDetect", !1, !0)
            },
            onBlur: function(a, b) {
                this.performLinking(b)
            },
            onKeypress: function(b) {
                this.disableEventHandling || a.util.isKey(b, [a.util.keyCode.SPACE, a.util.keyCode.ENTER]) && (clearTimeout(this.performLinkingTimeout),
                this.performLinkingTimeout = setTimeout(function() {
                    try {
                        var a = this.base.exportSelection();
                        this.performLinking(b.target) && this.base.importSelection(a, !0)
                    } catch (c) {
                        window.console && window.console.error("Failed to perform linking", c),
                        this.disableEventHandling = !0
                    }
                }
                .bind(this), 0))
            },
            performLinking: function(b) {
                var c = a.util.splitByBlockElements(b)
                  , d = !1;
                0 === c.length && (c = [b]);
                for (var e = 0; e < c.length; e++)
                    d = this.removeObsoleteAutoLinkSpans(c[e]) || d,
                    d = this.performLinkingWithinElement(c[e]) || d;
                return this.base.events.updateInput(b, {
                    target: b,
                    currentTarget: b
                }),
                d
            },
            removeObsoleteAutoLinkSpans: function(c) {
                if (!c || 3 === c.nodeType)
                    return !1;
                for (var d = c.querySelectorAll('span[data-auto-link="true"]'), e = !1, f = 0; f < d.length; f++) {
                    var g = d[f].textContent;
                    if (-1 === g.indexOf("://") && (g = a.util.ensureUrlHasProtocol(g)),
                    d[f].getAttribute("data-href") !== g && b(d[f])) {
                        e = !0;
                        var h = g.replace(/\s+$/, "");
                        if (d[f].getAttribute("data-href") === h) {
                            var i = g.length - h.length
                              , j = a.util.splitOffDOMTree(d[f], this.splitTextBeforeEnd(d[f], i));
                            d[f].parentNode.insertBefore(j, d[f].nextSibling)
                        } else
                            a.util.unwrap(d[f], this.document)
                    }
                }
                return e
            },
            splitTextBeforeEnd: function(a, b) {
                for (var c = this.document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1), d = !0; d; )
                    d = null !== c.lastChild();
                for (var e, f, g; b > 0 && null !== g; )
                    e = c.currentNode,
                    f = e.nodeValue,
                    f.length > b ? (g = e.splitText(f.length - b),
                    b = 0) : (g = c.previousNode(),
                    b -= f.length);
                return g
            },
            performLinkingWithinElement: function(b) {
                for (var c = this.findLinkableText(b), d = !1, e = 0; e < c.length; e++) {
                    var f = a.util.findOrCreateMatchingTextNodes(this.document, b, c[e]);
                    this.shouldNotLink(f) || this.createAutoLink(f, c[e].href)
                }
                return d
            },
            shouldNotLink: function(b) {
                for (var c = !1, d = 0; d < b.length && c === !1; d++)
                    c = !!a.util.traverseUp(b[d], function(a) {
                        return "a" === a.nodeName.toLowerCase() || a.getAttribute && "true" === a.getAttribute("data-auto-link")
                    });
                return c
            },
            findLinkableText: function(a) {
                for (var b = a.textContent, d = null, e = []; null !== (d = g.exec(b)); ) {
                    var h = !0
                      , i = d.index + d[0].length;
                    h = !(0 !== d.index && -1 === c.indexOf(b[d.index - 1]) || i !== b.length && -1 === c.indexOf(b[i])),
                    h = h && (-1 !== d[0].indexOf("/") || f.test(d[0].split(".").pop().split("?").shift())),
                    h && e.push({
                        href: d[0],
                        start: d.index,
                        end: i
                    })
                }
                return e
            },
            createAutoLink: function(b, c) {
                c = a.util.ensureUrlHasProtocol(c);
                var d = a.util.createLink(this.document, b, c, this.getEditorOption("targetBlank") ? "_blank" : null)
                  , e = this.document.createElement("span");
                for (e.setAttribute("data-auto-link", "true"),
                e.setAttribute("data-href", c),
                d.insertBefore(e, d.firstChild); d.childNodes.length > 1; )
                    e.appendChild(d.childNodes[1])
            }
        });
        a.extensions.autoLink = h
    }(),
    function() {
        function b(b) {
            var d = a.util.getContainerEditorElement(b)
              , e = Array.prototype.slice.call(d.parentElement.querySelectorAll("." + c));
            e.forEach(function(a) {
                a.classList.remove(c)
            })
        }
        var c = "medium-editor-dragover"
          , d = a.Extension.extend({
            name: "fileDragging",
            allowedTypes: ["image"],
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.subscribe("editableDrag", this.handleDrag.bind(this)),
                this.subscribe("editableDrop", this.handleDrop.bind(this))
            },
            handleDrag: function(a) {
                a.preventDefault(),
                a.dataTransfer.dropEffect = "copy";
                var d = a.target.classList ? a.target : a.target.parentElement;
                b(d),
                "dragover" === a.type && d.classList.add(c)
            },
            handleDrop: function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                this.base.selectElement(a.target);
                var c = this.base.exportSelection();
                c.start = c.end,
                this.base.importSelection(c),
                a.dataTransfer.files && Array.prototype.slice.call(a.dataTransfer.files).forEach(function(a) {
                    this.isAllowedFile(a) && a.type.match("image") && this.insertImageFile(a)
                }, this),
                b(a.target)
            },
            isAllowedFile: function(a) {
                return this.allowedTypes.some(function(b) {
                    return !!a.type.match(b)
                })
            },
            insertImageFile: function(b) {
                if ("function" == typeof FileReader) {
                    var c = new FileReader;
                    c.readAsDataURL(b),
                    c.addEventListener("load", function(b) {
                        var c = this.document.createElement("img");
                        c.src = b.target.result,
                        a.util.insertHTMLCommand(this.document, c.outerHTML)
                    }
                    .bind(this))
                }
            }
        });
        a.extensions.fileDragging = d
    }(),
    function() {
        var b = a.Extension.extend({
            name: "keyboard-commands",
            commands: [{
                command: "bold",
                key: "B",
                meta: !0,
                shift: !1,
                alt: !1
            }, {
                command: "italic",
                key: "I",
                meta: !0,
                shift: !1,
                alt: !1
            }, {
                command: "underline",
                key: "U",
                meta: !0,
                shift: !1,
                alt: !1
            }],
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.subscribe("editableKeydown", this.handleKeydown.bind(this)),
                this.keys = {},
                this.commands.forEach(function(a) {
                    var b = a.key.charCodeAt(0);
                    this.keys[b] || (this.keys[b] = []),
                    this.keys[b].push(a)
                }, this)
            },
            handleKeydown: function(b) {
                var c = a.util.getKeyCode(b);
                if (this.keys[c]) {
                    var d = a.util.isMetaCtrlKey(b)
                      , e = !!b.shiftKey
                      , f = !!b.altKey;
                    this.keys[c].forEach(function(a) {
                        a.meta !== d || a.shift !== e || a.alt !== f && void 0 !== a.alt || (b.preventDefault(),
                        b.stopPropagation(),
                        "function" == typeof a.command ? a.command.apply(this) : !1 !== a.command && this.execAction(a.command))
                    }, this)
                }
            }
        });
        a.extensions.keyboardCommands = b
    }(),
    function() {
        var b = a.extensions.form.extend({
            name: "fontname",
            action: "fontName",
            aria: "change font name",
            contentDefault: "&#xB1;",
            contentFA: '<i class="fa fa-font"></i>',
            fonts: ["", "Arial", "Verdana", "Times New Roman"],
            init: function() {
                a.extensions.form.prototype.init.apply(this, arguments)
            },
            handleClick: function(a) {
                if (a.preventDefault(),
                a.stopPropagation(),
                !this.isDisplayed()) {
                    var b = this.document.queryCommandValue("fontName") + "";
                    this.showForm(b)
                }
                return !1
            },
            getForm: function() {
                return this.form || (this.form = this.createForm()),
                this.form
            },
            isDisplayed: function() {
                return "block" === this.getForm().style.display
            },
            hideForm: function() {
                this.getForm().style.display = "none",
                this.getSelect().value = ""
            },
            showForm: function(a) {
                var b = this.getSelect();
                this.base.saveSelection(),
                this.hideToolbarDefaultActions(),
                this.getForm().style.display = "block",
                this.setToolbarPosition(),
                b.value = a || "",
                b.focus()
            },
            destroy: function() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form),
                void delete this.form) : !1
            },
            doFormSave: function() {
                this.base.restoreSelection(),
                this.base.checkSelection()
            },
            doFormCancel: function() {
                this.base.restoreSelection(),
                this.clearFontName(),
                this.base.checkSelection()
            },
            createForm: function() {
                var a, b = this.document, c = b.createElement("div"), d = b.createElement("select"), e = b.createElement("a"), f = b.createElement("a");
                c.className = "medium-editor-toolbar-form",
                c.id = "medium-editor-toolbar-form-fontname-" + this.getEditorId(),
                this.on(c, "click", this.handleFormClick.bind(this));
                for (var g = 0; g < this.fonts.length; g++)
                    a = b.createElement("option"),
                    a.innerHTML = this.fonts[g],
                    a.value = this.fonts[g],
                    d.appendChild(a);
                return d.className = "medium-editor-toolbar-select",
                c.appendChild(d),
                this.on(d, "change", this.handleFontChange.bind(this)),
                f.setAttribute("href", "#"),
                f.className = "medium-editor-toobar-save",
                f.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;",
                c.appendChild(f),
                this.on(f, "click", this.handleSaveClick.bind(this), !0),
                e.setAttribute("href", "#"),
                e.className = "medium-editor-toobar-close",
                e.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;",
                c.appendChild(e),
                this.on(e, "click", this.handleCloseClick.bind(this)),
                c
            },
            getSelect: function() {
                return this.getForm().querySelector("select.medium-editor-toolbar-select")
            },
            clearFontName: function() {
                a.selection.getSelectedElements(this.document).forEach(function(a) {
                    "font" === a.nodeName.toLowerCase() && a.hasAttribute("face") && a.removeAttribute("face")
                })
            },
            handleFontChange: function() {
                var a = this.getSelect().value;
                "" === a ? this.clearFontName() : this.execAction("fontName", {
                    value: a
                })
            },
            handleFormClick: function(a) {
                a.stopPropagation()
            },
            handleSaveClick: function(a) {
                a.preventDefault(),
                this.doFormSave()
            },
            handleCloseClick: function(a) {
                a.preventDefault(),
                this.doFormCancel()
            }
        });
        a.extensions.fontName = b
    }(),
    function() {
        var b = a.extensions.form.extend({
            name: "fontsize",
            action: "fontSize",
            aria: "increase/decrease font size",
            contentDefault: "&#xB1;",
            contentFA: '<i class="fa fa-text-height"></i>',
            init: function() {
                a.extensions.form.prototype.init.apply(this, arguments)
            },
            handleClick: function(a) {
                if (a.preventDefault(),
                a.stopPropagation(),
                !this.isDisplayed()) {
                    var b = this.document.queryCommandValue("fontSize") + "";
                    this.showForm(b)
                }
                return !1
            },
            getForm: function() {
                return this.form || (this.form = this.createForm()),
                this.form
            },
            isDisplayed: function() {
                return "block" === this.getForm().style.display
            },
            hideForm: function() {
                this.getForm().style.display = "none",
                this.getInput().value = ""
            },
            showForm: function(a) {
                var b = this.getInput();
                this.base.saveSelection(),
                this.hideToolbarDefaultActions(),
                this.getForm().style.display = "block",
                this.setToolbarPosition(),
                b.value = a || "",
                b.focus()
            },
            destroy: function() {
                return this.form ? (this.form.parentNode && this.form.parentNode.removeChild(this.form),
                void delete this.form) : !1
            },
            doFormSave: function() {
                this.base.restoreSelection(),
                this.base.checkSelection()
            },
            doFormCancel: function() {
                this.base.restoreSelection(),
                this.clearFontSize(),
                this.base.checkSelection()
            },
            createForm: function() {
                var a = this.document
                  , b = a.createElement("div")
                  , c = a.createElement("input")
                  , d = a.createElement("a")
                  , e = a.createElement("a");
                return b.className = "medium-editor-toolbar-form",
                b.id = "medium-editor-toolbar-form-fontsize-" + this.getEditorId(),
                this.on(b, "click", this.handleFormClick.bind(this)),
                c.setAttribute("type", "range"),
                c.setAttribute("min", "1"),
                c.setAttribute("max", "7"),
                c.className = "medium-editor-toolbar-input",
                b.appendChild(c),
                this.on(c, "change", this.handleSliderChange.bind(this)),
                e.setAttribute("href", "#"),
                e.className = "medium-editor-toobar-save",
                e.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;",
                b.appendChild(e),
                this.on(e, "click", this.handleSaveClick.bind(this), !0),
                d.setAttribute("href", "#"),
                d.className = "medium-editor-toobar-close",
                d.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;",
                b.appendChild(d),
                this.on(d, "click", this.handleCloseClick.bind(this)),
                b
            },
            getInput: function() {
                return this.getForm().querySelector("input.medium-editor-toolbar-input")
            },
            clearFontSize: function() {
                a.selection.getSelectedElements(this.document).forEach(function(a) {
                    "font" === a.nodeName.toLowerCase() && a.hasAttribute("size") && a.removeAttribute("size")
                })
            },
            handleSliderChange: function() {
                var a = this.getInput().value;
                "4" === a ? this.clearFontSize() : this.execAction("fontSize", {
                    value: a
                })
            },
            handleFormClick: function(a) {
                a.stopPropagation()
            },
            handleSaveClick: function(a) {
                a.preventDefault(),
                this.doFormSave()
            },
            handleCloseClick: function(a) {
                a.preventDefault(),
                this.doFormCancel()
            }
        });
        a.extensions.fontSize = b
    }(),
    function() {
        function b() {
            return [[new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ""], [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ""], [new RegExp(/<br>$/i), ""], [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""], [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""], [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "], [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"], [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'], [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'], [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'], [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"], [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'], [new RegExp(/<\/p>\n+/gi), "</p>"], [new RegExp(/\n+<p/gi), "<p"], [new RegExp(/<\/?o:[a-z]*>/gi), ""], [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), "$1"]]
        }
        function c(a, b, c) {
            var d = a.clipboardData || b.clipboardData || c.dataTransfer
              , e = {};
            if (!d)
                return e;
            if (d.getData) {
                var f = d.getData("Text");
                f && f.length > 0 && (e["text/plain"] = f)
            }
            if (d.types)
                for (var g = 0; g < d.types.length; g++) {
                    var h = d.types[g];
                    e[h] = d.getData(h)
                }
            return e
        }
        var d = "%ME_PASTEBIN%"
          , e = null
          , f = null
          , g = function(a) {
            a.stopPropagation()
        }
          , h = a.Extension.extend({
            forcePlainText: !0,
            cleanPastedHTML: !1,
            preCleanReplacements: [],
            cleanReplacements: [],
            cleanAttrs: ["class", "style", "dir"],
            cleanTags: ["meta"],
            unwrapTags: [],
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                (this.forcePlainText || this.cleanPastedHTML) && (this.subscribe("editableKeydown", this.handleKeydown.bind(this)),
                this.getEditorElements().forEach(function(a) {
                    this.on(a, "paste", this.handlePaste.bind(this))
                }, this),
                this.subscribe("addElement", this.handleAddElement.bind(this)))
            },
            handleAddElement: function(a, b) {
                this.on(b, "paste", this.handlePaste.bind(this))
            },
            destroy: function() {
                (this.forcePlainText || this.cleanPastedHTML) && this.removePasteBin()
            },
            handlePaste: function(a, b) {
                if (!a.defaultPrevented) {
                    var d = c(a, this.window, this.document)
                      , e = d["text/html"]
                      , f = d["text/plain"];
                    this.window.clipboardData && void 0 === a.clipboardData && !e && (e = f),
                    (e || f) && (a.preventDefault(),
                    this.doPaste(e, f, b))
                }
            },
            doPaste: function(b, c, d) {
                var e, f, g = "";
                if (this.cleanPastedHTML && b)
                    return this.cleanPaste(b);
                if (this.getEditorOption("disableReturn") || d && d.getAttribute("data-disable-return"))
                    g = a.util.htmlEntities(c);
                else if (e = c.split(/[\r\n]+/g),
                e.length > 1)
                    for (f = 0; f < e.length; f += 1)
                        "" !== e[f] && (g += "<p>" + a.util.htmlEntities(e[f]) + "</p>");
                else
                    g = a.util.htmlEntities(e[0]);
                a.util.insertHTMLCommand(this.document, g)
            },
            handlePasteBinPaste: function(a) {
                if (a.defaultPrevented)
                    return void this.removePasteBin();
                var b = c(a, this.window, this.document)
                  , d = b["text/html"]
                  , e = b["text/plain"]
                  , g = f;
                return !this.cleanPastedHTML || d ? (a.preventDefault(),
                this.removePasteBin(),
                this.doPaste(d, e, g),
                void this.trigger("editablePaste", {
                    currentTarget: g,
                    target: g
                }, g)) : void setTimeout(function() {
                    this.cleanPastedHTML && (d = this.getPasteBinHtml()),
                    this.removePasteBin(),
                    this.doPaste(d, e, g),
                    this.trigger("editablePaste", {
                        currentTarget: g,
                        target: g
                    }, g)
                }
                .bind(this), 0)
            },
            handleKeydown: function(b, c) {
                a.util.isKey(b, a.util.keyCode.V) && a.util.isMetaCtrlKey(b) && (b.stopImmediatePropagation(),
                this.removePasteBin(),
                this.createPasteBin(c))
            },
            createPasteBin: function(b) {
                var c, h = a.selection.getSelectionRange(this.document), i = this.window.pageYOffset;
                f = b,
                h && (c = h.getClientRects(),
                i += c.length ? c[0].top : h.startContainer.getBoundingClientRect().top),
                e = h;
                var j = this.document.createElement("div");
                j.id = this.pasteBinId = "medium-editor-pastebin-" + +Date.now(),
                j.setAttribute("style", "border: 1px red solid; position: absolute; top: " + i + "px; width: 10px; height: 10px; overflow: hidden; opacity: 0"),
                j.setAttribute("contentEditable", !0),
                j.innerHTML = d,
                this.document.body.appendChild(j),
                this.on(j, "focus", g),
                this.on(j, "focusin", g),
                this.on(j, "focusout", g),
                j.focus(),
                a.selection.selectNode(j, this.document),
                this.boundHandlePaste || (this.boundHandlePaste = this.handlePasteBinPaste.bind(this)),
                this.on(j, "paste", this.boundHandlePaste)
            },
            removePasteBin: function() {
                null !== e && (a.selection.selectRange(this.document, e),
                e = null),
                null !== f && (f = null);
                var b = this.getPasteBin();
                b && b && (this.off(b, "focus", g),
                this.off(b, "focusin", g),
                this.off(b, "focusout", g),
                this.off(b, "paste", this.boundHandlePaste),
                b.parentElement.removeChild(b))
            },
            getPasteBin: function() {
                return this.document.getElementById(this.pasteBinId)
            },
            getPasteBinHtml: function() {
                var a = this.getPasteBin();
                if (!a)
                    return !1;
                if (a.firstChild && "mcepastebin" === a.firstChild.id)
                    return !1;
                var b = a.innerHTML;
                return b && b !== d ? b : !1
            },
            cleanPaste: function(a) {
                var c, d, e, f, g = /<p|<br|<div/.test(a), h = [].concat(this.preCleanReplacements || [], b(), this.cleanReplacements || []);
                for (c = 0; c < h.length; c += 1)
                    a = a.replace(h[c][0], h[c][1]);
                if (!g)
                    return this.pasteHTML(a);
                for (e = this.document.createElement("div"),
                e.innerHTML = "<p>" + a.split("<br><br>").join("</p><p>") + "</p>",
                d = e.querySelectorAll("a,p,div,br"),
                c = 0; c < d.length; c += 1)
                    switch (f = d[c],
                    f.innerHTML = f.innerHTML.replace(/\n/gi, " "),
                    f.nodeName.toLowerCase()) {
                    case "p":
                    case "div":
                        this.filterCommonBlocks(f);
                        break;
                    case "br":
                        this.filterLineBreak(f)
                    }
                this.pasteHTML(e.innerHTML)
            },
            pasteHTML: function(b, c) {
                c = a.util.defaults({}, c, {
                    cleanAttrs: this.cleanAttrs,
                    cleanTags: this.cleanTags,
                    unwrapTags: this.unwrapTags
                });
                var d, e, f, g, h = this.document.createDocumentFragment();
                for (h.appendChild(this.document.createElement("body")),
                g = h.querySelector("body"),
                g.innerHTML = b,
                this.cleanupSpans(g),
                d = g.querySelectorAll("*"),
                f = 0; f < d.length; f += 1)
                    e = d[f],
                    "a" === e.nodeName.toLowerCase() && this.getEditorOption("targetBlank") && a.util.setTargetBlank(e),
                    a.util.cleanupAttrs(e, c.cleanAttrs),
                    a.util.cleanupTags(e, c.cleanTags),
                    a.util.unwrapTags(e, c.unwrapTags);
                a.util.insertHTMLCommand(this.document, g.innerHTML.replace(/&nbsp;/g, " "))
            },
            isCommonBlock: function(a) {
                return a && ("p" === a.nodeName.toLowerCase() || "div" === a.nodeName.toLowerCase())
            },
            filterCommonBlocks: function(a) {
                /^\s*$/.test(a.textContent) && a.parentNode && a.parentNode.removeChild(a)
            },
            filterLineBreak: function(a) {
                this.isCommonBlock(a.previousElementSibling) ? this.removeWithParent(a) : !this.isCommonBlock(a.parentNode) || a.parentNode.firstChild !== a && a.parentNode.lastChild !== a ? a.parentNode && 1 === a.parentNode.childElementCount && "" === a.parentNode.textContent && this.removeWithParent(a) : this.removeWithParent(a)
            },
            removeWithParent: function(a) {
                a && a.parentNode && (a.parentNode.parentNode && 1 === a.parentNode.childElementCount ? a.parentNode.parentNode.removeChild(a.parentNode) : a.parentNode.removeChild(a))
            },
            cleanupSpans: function(b) {
                var c, d, e, f = b.querySelectorAll(".replace-with"), g = function(a) {
                    return a && "#text" !== a.nodeName && "false" === a.getAttribute("contenteditable")
                };
                for (c = 0; c < f.length; c += 1)
                    d = f[c],
                    e = this.document.createElement(d.classList.contains("bold") ? "b" : "i"),
                    d.classList.contains("bold") && d.classList.contains("italic") ? e.innerHTML = "<i>" + d.innerHTML + "</i>" : e.innerHTML = d.innerHTML,
                    d.parentNode.replaceChild(e, d);
                for (f = b.querySelectorAll("span"),
                c = 0; c < f.length; c += 1) {
                    if (d = f[c],
                    a.util.traverseUp(d, g))
                        return !1;
                    a.util.unwrap(d, this.document)
                }
            }
        });
        a.extensions.paste = h
    }(),
    function() {
        var b = a.Extension.extend({
            name: "placeholder",
            text: "Type your text",
            hideOnClick: !0,
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.initPlaceholders(),
                this.attachEventHandlers()
            },
            initPlaceholders: function() {
                this.getEditorElements().forEach(this.initElement, this)
            },
            handleAddElement: function(a, b) {
                this.initElement(b)
            },
            initElement: function(a) {
                a.getAttribute("data-placeholder") || a.setAttribute("data-placeholder", this.text),
                this.updatePlaceholder(a)
            },
            destroy: function() {
                this.getEditorElements().forEach(this.cleanupElement, this)
            },
            handleRemoveElement: function(a, b) {
                this.cleanupElement(b)
            },
            cleanupElement: function(a) {
                a.getAttribute("data-placeholder") === this.text && a.removeAttribute("data-placeholder")
            },
            showPlaceholder: function(b) {
                b && (a.util.isFF && 0 === b.childNodes.length ? (b.classList.add("medium-editor-placeholder-relative"),
                b.classList.remove("medium-editor-placeholder")) : (b.classList.add("medium-editor-placeholder"),
                b.classList.remove("medium-editor-placeholder-relative")))
            },
            hidePlaceholder: function(a) {
                a && (a.classList.remove("medium-editor-placeholder"),
                a.classList.remove("medium-editor-placeholder-relative"))
            },
            updatePlaceholder: function(a, b) {
                return a.querySelector("img, blockquote, ul, ol, table") || "" !== a.textContent.replace(/^\s+|\s+$/g, "") ? this.hidePlaceholder(a) : void (b || this.showPlaceholder(a))
            },
            attachEventHandlers: function() {
                this.hideOnClick && this.subscribe("focus", this.handleFocus.bind(this)),
                this.subscribe("editableInput", this.handleInput.bind(this)),
                this.subscribe("blur", this.handleBlur.bind(this)),
                this.subscribe("addElement", this.handleAddElement.bind(this)),
                this.subscribe("removeElement", this.handleRemoveElement.bind(this))
            },
            handleInput: function(a, b) {
                var c = this.hideOnClick && b === this.base.getFocusedElement();
                this.updatePlaceholder(b, c)
            },
            handleFocus: function(a, b) {
                this.hidePlaceholder(b)
            },
            handleBlur: function(a, b) {
                this.updatePlaceholder(b)
            }
        });
        a.extensions.placeholder = b
    }(),
    function() {
        var b = a.Extension.extend({
            name: "toolbar",
            align: "center",
            allowMultiParagraphSelection: !0,
            buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
            diffLeft: 0,
            diffTop: -10,
            firstButtonClass: "medium-editor-button-first",
            lastButtonClass: "medium-editor-button-last",
            standardizeSelectionStart: !1,
            "static": !1,
            sticky: !1,
            stickyTopOffset: 0,
            updateOnEmptySelection: !1,
            relativeContainer: null,
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.initThrottledMethods(),
                this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement())
            },
            forEachExtension: function(a, b) {
                return this.base.extensions.forEach(function(c) {
                    return c !== this ? a.apply(b || this, arguments) : void 0
                }, this)
            },
            createToolbar: function() {
                var a = this.document.createElement("div");
                return a.id = "medium-editor-toolbar-" + this.getEditorId(),
                a.className = "medium-editor-toolbar",
                this["static"] ? a.className += " static-toolbar" : this.relativeContainer ? a.className += " medium-editor-relative-toolbar" : a.className += " medium-editor-stalker-toolbar",
                a.appendChild(this.createToolbarButtons()),
                this.forEachExtension(function(b) {
                    b.hasForm && a.appendChild(b.getForm())
                }),
                this.attachEventHandlers(),
                a
            },
            createToolbarButtons: function() {
                var b, c, d, e, f, g, h = this.document.createElement("ul");
                return h.id = "medium-editor-toolbar-actions" + this.getEditorId(),
                h.className = "medium-editor-toolbar-actions",
                h.style.display = "block",
                this.buttons.forEach(function(d) {
                    "string" == typeof d ? (f = d,
                    g = null) : (f = d.name,
                    g = d),
                    e = this.base.addBuiltInExtension(f, g),
                    e && "function" == typeof e.getButton && (c = e.getButton(this.base),
                    b = this.document.createElement("li"),
                    a.util.isElement(c) ? b.appendChild(c) : b.innerHTML = c,
                    h.appendChild(b))
                }, this),
                d = h.querySelectorAll("button"),
                d.length > 0 && (d[0].classList.add(this.firstButtonClass),
                d[d.length - 1].classList.add(this.lastButtonClass)),
                h
            },
            destroy: function() {
                this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar),
                delete this.toolbar)
            },
            getInteractionElements: function() {
                return this.getToolbarElement()
            },
            getToolbarElement: function() {
                return this.toolbar || (this.toolbar = this.createToolbar()),
                this.toolbar
            },
            getToolbarActionsElement: function() {
                return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")
            },
            initThrottledMethods: function() {
                this.throttledPositionToolbar = a.util.throttle(function() {
                    this.base.isActive && this.positionToolbarIfShown()
                }
                .bind(this))
            },
            attachEventHandlers: function() {
                this.subscribe("blur", this.handleBlur.bind(this)),
                this.subscribe("focus", this.handleFocus.bind(this)),
                this.subscribe("editableClick", this.handleEditableClick.bind(this)),
                this.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)),
                this.on(this.document.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)),
                this["static"] && this.sticky && this.on(this.window, "scroll", this.handleWindowScroll.bind(this), !0),
                this.on(this.window, "resize", this.handleWindowResize.bind(this))
            },
            handleWindowScroll: function() {
                this.positionToolbarIfShown()
            },
            handleWindowResize: function() {
                this.throttledPositionToolbar()
            },
            handleDocumentMouseup: function(b) {
                return b && b.target && a.util.isDescendant(this.getToolbarElement(), b.target) ? !1 : void this.checkState()
            },
            handleEditableClick: function() {
                setTimeout(function() {
                    this.checkState()
                }
                .bind(this), 0)
            },
            handleEditableKeyup: function() {
                this.checkState()
            },
            handleBlur: function() {
                clearTimeout(this.hideTimeout),
                clearTimeout(this.delayShowTimeout),
                this.hideTimeout = setTimeout(function() {
                    this.hideToolbar()
                }
                .bind(this), 1)
            },
            handleFocus: function() {
                this.checkState()
            },
            isDisplayed: function() {
                return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")
            },
            showToolbar: function() {
                clearTimeout(this.hideTimeout),
                this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"),
                this.trigger("showToolbar", {}, this.base.getFocusedElement()))
            },
            hideToolbar: function() {
                this.isDisplayed() && (this.getToolbarElement().classList.remove("medium-editor-toolbar-active"),
                this.trigger("hideToolbar", {}, this.base.getFocusedElement()))
            },
            isToolbarDefaultActionsDisplayed: function() {
                return "block" === this.getToolbarActionsElement().style.display
            },
            hideToolbarDefaultActions: function() {
                this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none")
            },
            showToolbarDefaultActions: function() {
                this.hideExtensionForms(),
                this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"),
                this.delayShowTimeout = this.base.delay(function() {
                    this.showToolbar()
                }
                .bind(this))
            },
            hideExtensionForms: function() {
                this.forEachExtension(function(a) {
                    a.hasForm && a.isDisplayed() && a.hideForm()
                })
            },
            multipleBlockElementsSelected: function() {
                var b = /<[^\/>][^>]*><\/[^>]+>/gim
                  , c = new RegExp("<(" + a.util.blockContainerElementNames.join("|") + ")[^>]*>","g")
                  , d = a.selection.getSelectionHtml(this.document).replace(b, "")
                  , e = d.match(c);
                return !!e && e.length > 1
            },
            modifySelection: function() {
                var b = this.window.getSelection()
                  , c = b.getRangeAt(0);
                if (this.standardizeSelectionStart && c.startContainer.nodeValue && c.startOffset === c.startContainer.nodeValue.length) {
                    var d = a.util.findAdjacentTextNodeWithContent(a.selection.getSelectionElement(this.window), c.startContainer, this.document);
                    if (d) {
                        for (var e = 0; 0 === d.nodeValue.substr(e, 1).trim().length; )
                            e += 1;
                        c = a.selection.select(this.document, d, e, c.endContainer, c.endOffset)
                    }
                }
            },
            checkState: function() {
                if (!this.base.preventSelectionUpdates) {
                    if (!this.base.getFocusedElement() || a.selection.selectionInContentEditableFalse(this.window))
                        return this.hideToolbar();
                    var b = a.selection.getSelectionElement(this.window);
                    return !b || -1 === this.getEditorElements().indexOf(b) || b.getAttribute("data-disable-toolbar") ? this.hideToolbar() : this.updateOnEmptySelection && this["static"] ? this.showAndUpdateToolbar() : !a.selection.selectionContainsContent(this.document) || this.allowMultiParagraphSelection === !1 && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar()
                }
            },
            showAndUpdateToolbar: function() {
                this.modifySelection(),
                this.setToolbarButtonStates(),
                this.trigger("positionToolbar", {}, this.base.getFocusedElement()),
                this.showToolbarDefaultActions(),
                this.setToolbarPosition()
            },
            setToolbarButtonStates: function() {
                this.forEachExtension(function(a) {
                    "function" == typeof a.isActive && "function" == typeof a.setInactive && a.setInactive()
                }),
                this.checkActiveButtons()
            },
            checkActiveButtons: function() {
                var b, c = [], d = null, e = a.selection.getSelectionRange(this.document), f = function(a) {
                    "function" == typeof a.checkState ? a.checkState(b) : "function" == typeof a.isActive && "function" == typeof a.isAlreadyApplied && "function" == typeof a.setActive && !a.isActive() && a.isAlreadyApplied(b) && a.setActive()
                };
                if (e && (this.forEachExtension(function(a) {
                    return "function" == typeof a.queryCommandState && (d = a.queryCommandState(),
                    null !== d) ? void (d && "function" == typeof a.setActive && a.setActive()) : void c.push(a)
                }),
                b = a.selection.getSelectedParentElement(e),
                this.getEditorElements().some(function(c) {
                    return a.util.isDescendant(c, b, !0)
                })))
                    for (; b && (c.forEach(f),
                    !a.util.isMediumEditorElement(b)); )
                        b = b.parentNode
            },
            positionToolbarIfShown: function() {
                this.isDisplayed() && this.setToolbarPosition()
            },
            setToolbarPosition: function() {
                var a = this.base.getFocusedElement()
                  , b = this.window.getSelection();
                return a ? void (!this["static"] && b.isCollapsed || (this.showToolbar(),
                this.relativeContainer || (this["static"] ? this.positionStaticToolbar(a) : this.positionToolbar(b)),
                this.trigger("positionedToolbar", {}, this.base.getFocusedElement()))) : this
            },
            positionStaticToolbar: function(a) {
                this.getToolbarElement().style.left = "0";
                var b, c = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop, d = this.window.innerWidth, e = this.getToolbarElement(), f = a.getBoundingClientRect(), g = f.top + c, h = f.left + f.width / 2, i = e.offsetHeight, j = e.offsetWidth, k = j / 2;
                switch (this.sticky ? c > g + a.offsetHeight - i - this.stickyTopOffset ? (e.style.top = g + a.offsetHeight - i + "px",
                e.classList.remove("medium-editor-sticky-toolbar")) : c > g - i - this.stickyTopOffset ? (e.classList.add("medium-editor-sticky-toolbar"),
                e.style.top = this.stickyTopOffset + "px") : (e.classList.remove("medium-editor-sticky-toolbar"),
                e.style.top = g - i + "px") : e.style.top = g - i + "px",
                this.align) {
                case "left":
                    b = f.left;
                    break;
                case "right":
                    b = f.right - j;
                    break;
                case "center":
                    b = h - k
                }
                0 > b ? b = 0 : b + j > d && (b = d - Math.ceil(j) - 1),
                e.style.left = b + "px"
            },
            positionToolbar: function(a) {
                this.getToolbarElement().style.left = "0",
                this.getToolbarElement().style.right = "initial";
                var b = a.getRangeAt(0)
                  , c = b.getBoundingClientRect();
                (!c || 0 === c.height && 0 === c.width && b.startContainer === b.endContainer) && (c = 1 === b.startContainer.nodeType && b.startContainer.querySelector("img") ? b.startContainer.querySelector("img").getBoundingClientRect() : b.startContainer.getBoundingClientRect());
                var d, e, f = this.window.innerWidth, g = this.getToolbarElement(), h = g.offsetHeight, i = g.offsetWidth, j = i / 2, k = 50, l = this.diffLeft - j, m = this.getEditorOption("elementsContainer"), n = ["absolute", "fixed"].indexOf(window.getComputedStyle(m).getPropertyValue("position")) > -1, o = {}, p = {};
                n ? (e = m.getBoundingClientRect(),
                ["top", "left"].forEach(function(a) {
                    p[a] = c[a] - e[a]
                }),
                p.width = c.width,
                p.height = c.height,
                c = p,
                f = e.width,
                o.top = m.scrollTop) : o.top = this.window.pageYOffset,
                d = c.left + c.width / 2,
                o.top += c.top - h,
                c.top < k ? (g.classList.add("medium-toolbar-arrow-over"),
                g.classList.remove("medium-toolbar-arrow-under"),
                o.top += k + c.height - this.diffTop) : (g.classList.add("medium-toolbar-arrow-under"),
                g.classList.remove("medium-toolbar-arrow-over"),
                o.top += this.diffTop),
                j > d ? (o.left = l + j,
                o.right = "initial") : j > f - d ? (o.left = "auto",
                o.right = 0) : (o.left = l + d,
                o.right = "initial"),
                ["top", "left", "right"].forEach(function(a) {
                    g.style[a] = o[a] + (isNaN(o[a]) ? "" : "px")
                })
            }
        });
        a.extensions.toolbar = b
    }(),
    function() {
        var b = a.Extension.extend({
            init: function() {
                a.Extension.prototype.init.apply(this, arguments),
                this.subscribe("editableDrag", this.handleDrag.bind(this)),
                this.subscribe("editableDrop", this.handleDrop.bind(this))
            },
            handleDrag: function(a) {
                var b = "medium-editor-dragover";
                a.preventDefault(),
                a.dataTransfer.dropEffect = "copy",
                "dragover" === a.type ? a.target.classList.add(b) : "dragleave" === a.type && a.target.classList.remove(b)
            },
            handleDrop: function(b) {
                var c, d = "medium-editor-dragover";
                b.preventDefault(),
                b.stopPropagation(),
                b.dataTransfer.files && (c = Array.prototype.slice.call(b.dataTransfer.files, 0),
                c.some(function(b) {
                    if (b.type.match("image")) {
                        var c, d;
                        c = new FileReader,
                        c.readAsDataURL(b),
                        d = "medium-img-" + +new Date,
                        a.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + d + '" />'),
                        c.onload = function() {
                            var a = this.document.getElementById(d);
                            a && (a.removeAttribute("id"),
                            a.removeAttribute("class"),
                            a.src = c.result)
                        }
                        .bind(this)
                    }
                }
                .bind(this))),
                b.target.classList.remove(d)
            }
        });
        a.extensions.imageDragging = b
    }(),
    function() {
        function b(b) {
            var c = a.selection.getSelectionStart(this.options.ownerDocument)
              , d = c.textContent
              , e = a.selection.getCaretOffsets(c);
            (void 0 === d[e.left - 1] || "" === d[e.left - 1].trim() || void 0 !== d[e.left] && "" === d[e.left].trim()) && b.preventDefault()
        }
        function c(b, c) {
            if (this.options.disableReturn || c.getAttribute("data-disable-return"))
                b.preventDefault();
            else if (this.options.disableDoubleReturn || c.getAttribute("data-disable-double-return")) {
                var d = a.selection.getSelectionStart(this.options.ownerDocument);
                (d && "" === d.textContent.trim() && "li" !== d.nodeName.toLowerCase() || d.previousElementSibling && "br" !== d.previousElementSibling.nodeName.toLowerCase() && "" === d.previousElementSibling.textContent.trim()) && b.preventDefault()
            }
        }
        function d(b) {
            var c = a.selection.getSelectionStart(this.options.ownerDocument)
              , d = c && c.nodeName.toLowerCase();
            "pre" === d && (b.preventDefault(),
            a.util.insertHTMLCommand(this.options.ownerDocument, "    ")),
            a.util.isListItem(c) && (b.preventDefault(),
            b.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null))
        }
        function e(b) {
            var c, d = a.selection.getSelectionStart(this.options.ownerDocument), e = d.nodeName.toLowerCase(), f = /^(\s+|<br\/?>)?$/i, g = /h\d/i;
            a.util.isKey(b, [a.util.keyCode.BACKSPACE, a.util.keyCode.ENTER]) && d.previousElementSibling && g.test(e) && 0 === a.selection.getCaretOffsets(d).left ? a.util.isKey(b, a.util.keyCode.BACKSPACE) && f.test(d.previousElementSibling.innerHTML) ? (d.previousElementSibling.parentNode.removeChild(d.previousElementSibling),
            b.preventDefault()) : !this.options.disableDoubleReturn && a.util.isKey(b, a.util.keyCode.ENTER) && (c = this.options.ownerDocument.createElement("p"),
            c.innerHTML = "<br>",
            d.previousElementSibling.parentNode.insertBefore(c, d),
            b.preventDefault()) : a.util.isKey(b, a.util.keyCode.DELETE) && d.nextElementSibling && d.previousElementSibling && !g.test(e) && f.test(d.innerHTML) && g.test(d.nextElementSibling.nodeName.toLowerCase()) ? (a.selection.moveCursor(this.options.ownerDocument, d.nextElementSibling),
            d.previousElementSibling.parentNode.removeChild(d),
            b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && "li" === e && f.test(d.innerHTML) && !d.previousElementSibling && !d.parentElement.previousElementSibling && d.nextElementSibling && "li" === d.nextElementSibling.nodeName.toLowerCase() ? (c = this.options.ownerDocument.createElement("p"),
            c.innerHTML = "<br>",
            d.parentElement.parentElement.insertBefore(c, d.parentElement),
            a.selection.moveCursor(this.options.ownerDocument, c),
            d.parentElement.removeChild(d),
            b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && a.util.getClosestTag(d, "blockquote") !== !1 && 0 === a.selection.getCaretOffsets(d).left ? (b.preventDefault(),
            a.util.execFormatBlock(this.options.ownerDocument, "p")) : a.util.isKey(b, a.util.keyCode.ENTER) && a.util.getClosestTag(d, "blockquote") !== !1 && 0 === a.selection.getCaretOffsets(d).right ? (c = this.options.ownerDocument.createElement("p"),
            c.innerHTML = "<br>",
            d.parentElement.insertBefore(c, d.nextSibling),
            a.selection.moveCursor(this.options.ownerDocument, c),
            b.preventDefault()) : a.util.isKey(b, a.util.keyCode.BACKSPACE) && a.util.isMediumEditorElement(d.parentElement) && !d.previousElementSibling && d.nextElementSibling && f.test(d.innerHTML) && (b.preventDefault(),
            a.selection.moveCursor(this.options.ownerDocument, d.nextSibling),
            d.parentElement.removeChild(d))
        }
        function f(b) {
            var c, d = a.selection.getSelectionStart(this.options.ownerDocument);
            d && (a.util.isMediumEditorElement(d) && 0 === d.children.length && !a.util.isBlockContainer(d) && this.options.ownerDocument.execCommand("formatBlock", !1, "p"),
            !a.util.isKey(b, a.util.keyCode.ENTER) || a.util.isListItem(d) || a.util.isBlockContainer(d) || (c = d.nodeName.toLowerCase(),
            "a" === c ? this.options.ownerDocument.execCommand("unlink", !1, null) : b.shiftKey || b.ctrlKey || this.options.ownerDocument.execCommand("formatBlock", !1, "p")))
        }
        function g(a, b) {
            var c = b.parentNode.querySelector('textarea[medium-editor-textarea-id="' + b.getAttribute("medium-editor-textarea-id") + '"]');
            c && (c.value = b.innerHTML.trim())
        }
        function h(a) {
            a._mediumEditors || (a._mediumEditors = [null]),
            this.id || (this.id = a._mediumEditors.length),
            a._mediumEditors[this.id] = this
        }
        function i(a) {
            a._mediumEditors && a._mediumEditors[this.id] && (a._mediumEditors[this.id] = null)
        }
        function j(b, c, d) {
            var e = [];
            if (b || (b = []),
            "string" == typeof b && (b = c.querySelectorAll(b)),
            a.util.isElement(b) && (b = [b]),
            d)
                for (var f = 0; f < b.length; f++) {
                    var g = b[f];
                    !a.util.isElement(g) || g.getAttribute("data-medium-editor-element") || g.getAttribute("medium-editor-textarea-id") || e.push(g)
                }
            else
                e = Array.prototype.slice.apply(b);
            return e
        }
        function k(a) {
            var b = a.parentNode.querySelector('textarea[medium-editor-textarea-id="' + a.getAttribute("medium-editor-textarea-id") + '"]');
            b && (b.classList.remove("medium-editor-hidden"),
            b.removeAttribute("medium-editor-textarea-id")),
            a.parentNode && a.parentNode.removeChild(a)
        }
        function l(a, b) {
            return Object.keys(b).forEach(function(c) {
                void 0 === a[c] && (a[c] = b[c])
            }),
            a
        }
        function m(a, b, c) {
            var d = {
                window: c.options.contentWindow,
                document: c.options.ownerDocument,
                base: c
            };
            return a = l(a, d),
            "function" == typeof a.init && a.init(),
            a.name || (a.name = b),
            a
        }
        function n() {
            return this.elements.every(function(a) {
                return !!a.getAttribute("data-disable-toolbar")
            }) ? !1 : this.options.toolbar !== !1
        }
        function o() {
            return n.call(this) ? this.options.anchorPreview !== !1 : !1
        }
        function p() {
            return this.options.placeholder !== !1
        }
        function q() {
            return this.options.autoLink !== !1
        }
        function r() {
            return this.options.imageDragging !== !1
        }
        function s() {
            return this.options.keyboardCommands !== !1
        }
        function t() {
            return !this.options.extensions.imageDragging
        }
        function u(a) {
            for (var b = this.options.ownerDocument.createElement("div"), c = Date.now(), d = "medium-editor-" + c, e = a.attributes; this.options.ownerDocument.getElementById(d); )
                c++,
                d = "medium-editor-" + c;
            b.className = a.className,
            b.id = d,
            b.innerHTML = a.value,
            a.setAttribute("medium-editor-textarea-id", d);
            for (var f = 0, g = e.length; g > f; f++)
                b.hasAttribute(e[f].nodeName) || b.setAttribute(e[f].nodeName, e[f].nodeValue);
            return a.form && this.on(a.form, "reset", function(a) {
                a.defaultPrevented || this.resetContent(this.options.ownerDocument.getElementById(d))
            }
            .bind(this)),
            a.classList.add("medium-editor-hidden"),
            a.parentNode.insertBefore(b, a),
            b
        }
        function v(b, d) {
            if (!b.getAttribute("data-medium-editor-element")) {
                "textarea" === b.nodeName.toLowerCase() && (b = u.call(this, b),
                this.instanceHandleEditableInput || (this.instanceHandleEditableInput = g.bind(this),
                this.subscribe("editableInput", this.instanceHandleEditableInput))),
                this.options.disableEditing || b.getAttribute("data-disable-editing") || (b.setAttribute("contentEditable", !0),
                b.setAttribute("spellcheck", this.options.spellcheck)),
                this.instanceHandleEditableKeydownEnter || (b.getAttribute("data-disable-return") || b.getAttribute("data-disable-double-return")) && (this.instanceHandleEditableKeydownEnter = c.bind(this),
                this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter)),
                this.options.disableReturn || b.getAttribute("data-disable-return") || this.on(b, "keyup", f.bind(this));
                var e = a.util.guid();
                b.setAttribute("data-medium-editor-element", !0),
                b.classList.add("medium-editor-element"),
                b.setAttribute("role", "textbox"),
                b.setAttribute("aria-multiline", !0),
                b.setAttribute("data-medium-editor-editor-index", d),
                b.setAttribute("medium-editor-index", e),
                B[e] = b.innerHTML,
                this.events.attachAllEventsToElement(b)
            }
            return b
        }
        function w() {
            this.subscribe("editableKeydownTab", d.bind(this)),
            this.subscribe("editableKeydownDelete", e.bind(this)),
            this.subscribe("editableKeydownEnter", e.bind(this)),
            this.options.disableExtraSpaces && this.subscribe("editableKeydownSpace", b.bind(this)),
            this.instanceHandleEditableKeydownEnter || (this.options.disableReturn || this.options.disableDoubleReturn) && (this.instanceHandleEditableKeydownEnter = c.bind(this),
            this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter))
        }
        function x() {
            if (this.extensions = [],
            Object.keys(this.options.extensions).forEach(function(a) {
                "toolbar" !== a && this.options.extensions[a] && this.extensions.push(m(this.options.extensions[a], a, this))
            }, this),
            t.call(this)) {
                var b = this.options.fileDragging;
                b || (b = {},
                r.call(this) || (b.allowedTypes = [])),
                this.addBuiltInExtension("fileDragging", b)
            }
            var c = {
                paste: !0,
                "anchor-preview": o.call(this),
                autoLink: q.call(this),
                keyboardCommands: s.call(this),
                placeholder: p.call(this)
            };
            Object.keys(c).forEach(function(a) {
                c[a] && this.addBuiltInExtension(a)
            }, this);
            var d = this.options.extensions.toolbar;
            if (!d && n.call(this)) {
                var e = a.util.extend({}, this.options.toolbar, {
                    allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
                });
                d = new a.extensions.toolbar(e)
            }
            d && this.extensions.push(m(d, "toolbar", this))
        }
        function y(b, c) {
            var d = [["allowMultiParagraphSelection", "toolbar.allowMultiParagraphSelection"]];
            return c && d.forEach(function(b) {
                c.hasOwnProperty(b[0]) && void 0 !== c[b[0]] && a.util.deprecated(b[0], b[1], "v6.0.0")
            }),
            a.util.defaults({}, c, b)
        }
        function z(b, c) {
            var d, e, f = /^append-(.+)$/gi, g = /justify([A-Za-z]*)$/g;
            if (d = f.exec(b))
                return a.util.execFormatBlock(this.options.ownerDocument, d[1]);
            if ("fontSize" === b)
                return c.size && a.util.deprecated(".size option for fontSize command", ".value", "6.0.0"),
                e = c.value || c.size,
                this.options.ownerDocument.execCommand("fontSize", !1, e);
            if ("fontName" === b)
                return c.name && a.util.deprecated(".name option for fontName command", ".value", "6.0.0"),
                e = c.value || c.name,
                this.options.ownerDocument.execCommand("fontName", !1, e);
            if ("createLink" === b)
                return this.createLink(c);
            if ("image" === b) {
                var h = this.options.contentWindow.getSelection().toString().trim();
                return this.options.ownerDocument.execCommand("insertImage", !1, h)
            }
            if ("html" === b) {
                var i = this.options.contentWindow.getSelection().toString().trim();
                return a.util.insertHTMLCommand(this.options.ownerDocument, i)
            }
            if (g.exec(b)) {
                var j = this.options.ownerDocument.execCommand(b, !1, null)
                  , k = a.selection.getSelectedParentElement(a.selection.getSelectionRange(this.options.ownerDocument));
                return k && A.call(this, a.util.getTopBlockContainer(k)),
                j
            }
            return e = c && c.value,
            this.options.ownerDocument.execCommand(b, !1, e)
        }
        function A(b) {
            if (b) {
                var c, d = Array.prototype.slice.call(b.childNodes).filter(function(a) {
                    var b = "div" === a.nodeName.toLowerCase();
                    return b && !c && (c = a.style.textAlign),
                    b
                });
                d.length && (this.saveSelection(),
                d.forEach(function(b) {
                    if (b.style.textAlign === c) {
                        var d = b.lastChild;
                        if (d) {
                            a.util.unwrap(b, this.options.ownerDocument);
                            var e = this.options.ownerDocument.createElement("BR");
                            d.parentNode.insertBefore(e, d.nextSibling)
                        }
                    }
                }, this),
                b.style.textAlign = c,
                this.restoreSelection())
            }
        }
        var B = {};
        a.prototype = {
            init: function(a, b) {
                return this.options = y.call(this, this.defaults, b),
                this.origElements = a,
                this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body),
                this.setup()
            },
            setup: function() {
                this.isActive || (h.call(this, this.options.contentWindow),
                this.events = new a.Events(this),
                this.elements = [],
                this.addElements(this.origElements),
                0 !== this.elements.length && (this.isActive = !0,
                x.call(this),
                w.call(this)))
            },
            destroy: function() {
                this.isActive && (this.isActive = !1,
                this.extensions.forEach(function(a) {
                    "function" == typeof a.destroy && a.destroy()
                }, this),
                this.events.destroy(),
                this.elements.forEach(function(a) {
                    this.options.spellcheck && (a.innerHTML = a.innerHTML),
                    a.removeAttribute("contentEditable"),
                    a.removeAttribute("spellcheck"),
                    a.removeAttribute("data-medium-editor-element"),
                    a.classList.remove("medium-editor-element"),
                    a.removeAttribute("role"),
                    a.removeAttribute("aria-multiline"),
                    a.removeAttribute("medium-editor-index"),
                    a.removeAttribute("data-medium-editor-editor-index"),
                    a.getAttribute("medium-editor-textarea-id") && k(a)
                }, this),
                this.elements = [],
                this.instanceHandleEditableKeydownEnter = null,
                this.instanceHandleEditableInput = null,
                i.call(this, this.options.contentWindow))
            },
            on: function(a, b, c, d) {
                return this.events.attachDOMEvent(a, b, c, d),
                this
            },
            off: function(a, b, c, d) {
                return this.events.detachDOMEvent(a, b, c, d),
                this
            },
            subscribe: function(a, b) {
                return this.events.attachCustomEvent(a, b),
                this
            },
            unsubscribe: function(a, b) {
                return this.events.detachCustomEvent(a, b),
                this
            },
            trigger: function(a, b, c) {
                return this.events.triggerCustomEvent(a, b, c),
                this
            },
            delay: function(a) {
                var b = this;
                return setTimeout(function() {
                    b.isActive && a()
                }, this.options.delay)
            },
            serialize: function() {
                var a, b, c = {}, d = this.elements.length;
                for (a = 0; d > a; a += 1)
                    b = "" !== this.elements[a].id ? this.elements[a].id : "element-" + a,
                    c[b] = {
                        value: this.elements[a].innerHTML.trim()
                    };
                return c
            },
            getExtensionByName: function(a) {
                var b;
                return this.extensions && this.extensions.length && this.extensions.some(function(c) {
                    return c.name === a ? (b = c,
                    !0) : !1
                }),
                b
            },
            addBuiltInExtension: function(b, c) {
                var d, e = this.getExtensionByName(b);
                if (e)
                    return e;
                switch (b) {
                case "anchor":
                    d = a.util.extend({}, this.options.anchor, c),
                    e = new a.extensions.anchor(d);
                    break;
                case "anchor-preview":
                    e = new a.extensions.anchorPreview(this.options.anchorPreview);
                    break;
                case "autoLink":
                    e = new a.extensions.autoLink;
                    break;
                case "fileDragging":
                    e = new a.extensions.fileDragging(c);
                    break;
                case "fontname":
                    e = new a.extensions.fontName(this.options.fontName);
                    break;
                case "fontsize":
                    e = new a.extensions.fontSize(c);
                    break;
                case "keyboardCommands":
                    e = new a.extensions.keyboardCommands(this.options.keyboardCommands);
                    break;
                case "paste":
                    e = new a.extensions.paste(this.options.paste);
                    break;
                case "placeholder":
                    e = new a.extensions.placeholder(this.options.placeholder);
                    break;
                default:
                    a.extensions.button.isBuiltInButton(b) && (c ? (d = a.util.defaults({}, c, a.extensions.button.prototype.defaults[b]),
                    e = new a.extensions.button(d)) : e = new a.extensions.button(b))
                }
                return e && this.extensions.push(m(e, b, this)),
                e
            },
            stopSelectionUpdates: function() {
                this.preventSelectionUpdates = !0
            },
            startSelectionUpdates: function() {
                this.preventSelectionUpdates = !1
            },
            checkSelection: function() {
                var a = this.getExtensionByName("toolbar");
                return a && a.checkState(),
                this
            },
            queryCommandState: function(a) {
                var b, c = /^full-(.+)$/gi, d = null;
                b = c.exec(a),
                b && (a = b[1]);
                try {
                    d = this.options.ownerDocument.queryCommandState(a)
                } catch (e) {
                    d = null
                }
                return d
            },
            execAction: function(b, c) {
                var d, e, f = /^full-(.+)$/gi;
                return d = f.exec(b),
                d ? (this.saveSelection(),
                this.selectAllContents(),
                e = z.call(this, d[1], c),
                this.restoreSelection()) : e = z.call(this, b, c),
                "insertunorderedlist" !== b && "insertorderedlist" !== b || a.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()),
                this.checkSelection(),
                e
            },
            getSelectedParentElement: function(b) {
                return void 0 === b && (b = this.options.contentWindow.getSelection().getRangeAt(0)),
                a.selection.getSelectedParentElement(b)
            },
            selectAllContents: function() {
                var b = a.selection.getSelectionElement(this.options.contentWindow);
                if (b) {
                    for (; 1 === b.children.length; )
                        b = b.children[0];
                    this.selectElement(b)
                }
            },
            selectElement: function(b) {
                a.selection.selectNode(b, this.options.ownerDocument);
                var c = a.selection.getSelectionElement(this.options.contentWindow);
                c && this.events.focusElement(c)
            },
            getFocusedElement: function() {
                var a;
                return this.elements.some(function(b) {
                    return !a && b.getAttribute("data-medium-focused") && (a = b),
                    !!a
                }, this),
                a
            },
            exportSelection: function() {
                var b = a.selection.getSelectionElement(this.options.contentWindow)
                  , c = this.elements.indexOf(b)
                  , d = null;
                return c >= 0 && (d = a.selection.exportSelection(b, this.options.ownerDocument)),
                null !== d && 0 !== c && (d.editableElementIndex = c),
                d
            },
            saveSelection: function() {
                this.selectionState = this.exportSelection()
            },
            importSelection: function(b, c) {
                if (b) {
                    var d = this.elements[b.editableElementIndex || 0];
                    a.selection.importSelection(b, d, this.options.ownerDocument, c)
                }
            },
            restoreSelection: function() {
                this.importSelection(this.selectionState)
            },
            createLink: function(b) {
                var c, d = a.selection.getSelectionElement(this.options.contentWindow), e = {};
                if (-1 !== this.elements.indexOf(d)) {
                    try {
                        if (this.events.disableCustomEvent("editableInput"),
                        b.url && a.util.deprecated(".url option for createLink", ".value", "6.0.0"),
                        c = b.url || b.value,
                        c && c.trim().length > 0) {
                            var f = this.options.contentWindow.getSelection();
                            if (f) {
                                var g, h, i, j, k = f.getRangeAt(0), l = k.commonAncestorContainer;
                                if (3 === k.endContainer.nodeType && 3 !== k.startContainer.nodeType && 0 === k.startOffset && k.startContainer.firstChild === k.endContainer && (l = k.endContainer),
                                h = a.util.getClosestBlockContainer(k.startContainer),
                                i = a.util.getClosestBlockContainer(k.endContainer),
                                3 !== l.nodeType && 0 !== l.textContent.length && h === i) {
                                    var m = h || d
                                      , n = this.options.ownerDocument.createDocumentFragment();
                                    this.execAction("unlink"),
                                    g = this.exportSelection(),
                                    n.appendChild(m.cloneNode(!0)),
                                    d === m ? a.selection.select(this.options.ownerDocument, m.firstChild, 0, m.lastChild, 3 === m.lastChild.nodeType ? m.lastChild.nodeValue.length : m.lastChild.childNodes.length) : a.selection.select(this.options.ownerDocument, m, 0, m, m.childNodes.length);
                                    var o = this.exportSelection();
                                    j = a.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, n, {
                                        start: g.start - o.start,
                                        end: g.end - o.start,
                                        editableElementIndex: g.editableElementIndex
                                    }),
                                    0 === j.length && (n = this.options.ownerDocument.createDocumentFragment(),
                                    n.appendChild(l.cloneNode(!0)),
                                    j = [n.firstChild.firstChild, n.firstChild.lastChild]),
                                    a.util.createLink(this.options.ownerDocument, j, c.trim());
                                    var p = (n.firstChild.innerHTML.match(/^\s+/) || [""])[0].length;
                                    a.util.insertHTMLCommand(this.options.ownerDocument, n.firstChild.innerHTML.replace(/^\s+/, "")),
                                    g.start -= p,
                                    g.end -= p,
                                    this.importSelection(g)
                                } else
                                    this.options.ownerDocument.execCommand("createLink", !1, c);
                                this.options.targetBlank || "_blank" === b.target ? a.util.setTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument), c) : a.util.removeTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument), c),
                                b.buttonClass && a.util.addClassToAnchors(a.selection.getSelectionStart(this.options.ownerDocument), b.buttonClass)
                            }
                        }
                        if (this.options.targetBlank || "_blank" === b.target || b.buttonClass) {
                            e = this.options.ownerDocument.createEvent("HTMLEvents"),
                            e.initEvent("input", !0, !0, this.options.contentWindow);
                            for (var q = 0, r = this.elements.length; r > q; q += 1)
                                this.elements[q].dispatchEvent(e)
                        }
                    } finally {
                        this.events.enableCustomEvent("editableInput")
                    }
                    this.events.triggerCustomEvent("editableInput", e, d)
                }
            },
            cleanPaste: function(a) {
                this.getExtensionByName("paste").cleanPaste(a)
            },
            pasteHTML: function(a, b) {
                this.getExtensionByName("paste").pasteHTML(a, b)
            },
            setContent: function(a, b) {
                if (b = b || 0,
                this.elements[b]) {
                    var c = this.elements[b];
                    c.innerHTML = a,
                    this.checkContentChanged(c)
                }
            },
            getContent: function(a) {
                return a = a || 0,
                this.elements[a] ? this.elements[a].innerHTML.trim() : null
            },
            checkContentChanged: function(b) {
                b = b || a.selection.getSelectionElement(this.options.contentWindow),
                this.events.updateInput(b, {
                    target: b,
                    currentTarget: b
                })
            },
            resetContent: function(a) {
                if (a) {
                    var b = this.elements.indexOf(a);
                    return void (-1 !== b && this.setContent(B[a.getAttribute("medium-editor-index")], b))
                }
                this.elements.forEach(function(a, b) {
                    this.setContent(B[a.getAttribute("medium-editor-index")], b)
                }, this)
            },
            addElements: function(a) {
                var b = j(a, this.options.ownerDocument, !0);
                return 0 === b.length ? !1 : void b.forEach(function(a) {
                    a = v.call(this, a, this.id),
                    this.elements.push(a),
                    this.trigger("addElement", {
                        target: a,
                        currentTarget: a
                    }, a)
                }, this)
            },
            removeElements: function(a) {
                var b = j(a, this.options.ownerDocument)
                  , c = b.map(function(a) {
                    return a.getAttribute("medium-editor-textarea-id") && a.parentNode ? a.parentNode.querySelector('div[medium-editor-textarea-id="' + a.getAttribute("medium-editor-textarea-id") + '"]') : a
                });
                this.elements = this.elements.filter(function(a) {
                    return -1 !== c.indexOf(a) ? (this.events.cleanupElement(a),
                    a.getAttribute("medium-editor-textarea-id") && k(a),
                    this.trigger("removeElement", {
                        target: a,
                        currentTarget: a
                    }, a),
                    !1) : !0
                }, this)
            }
        },
        a.getEditorFromElement = function(a) {
            var b = a.getAttribute("data-medium-editor-editor-index")
              , c = a && a.ownerDocument && (a.ownerDocument.defaultView || a.ownerDocument.parentWindow);
            return c && c._mediumEditors && c._mediumEditors[b] ? c._mediumEditors[b] : null
        }
    }(),
    function() {
        a.prototype.defaults = {
            activeButtonClass: "medium-editor-button-active",
            buttonLabels: !1,
            delay: 0,
            disableReturn: !1,
            disableDoubleReturn: !1,
            disableExtraSpaces: !1,
            disableEditing: !1,
            autoLink: !1,
            elementsContainer: !1,
            contentWindow: window,
            ownerDocument: document,
            targetBlank: !1,
            extensions: {},
            spellcheck: !0
        }
    }(),
    a.parseVersionString = function(a) {
        var b = a.split("-")
          , c = b[0].split(".")
          , d = b.length > 1 ? b[1] : "";
        return {
            major: parseInt(c[0], 10),
            minor: parseInt(c[1], 10),
            revision: parseInt(c[2], 10),
            preRelease: d,
            toString: function() {
                return [c[0], c[1], c[2]].join(".") + (d ? "-" + d : "")
            }
        }
    }
    ,
    a.version = a.parseVersionString.call(this, {
        version: "5.23.0"
    }.version),
    a
}());
$(document).ready(function(e) {
    $("[select2]").select2().on("change", function() {
        var s = $(this).parent().find(".select2");
        if ($(this).val())
            s.addClass("selected-value");
        else
            s.removeClass("selected-value");
    });
    $(document).on("click", "button[field]", function() {
        var e = $(this)
          , f = $(this).attr("field");
        if (f == "text") {
            var a = '<div class="actions"><i class="icon-arrow-up-circle"></i><i class="icon-arrow-down-circle"></i><i class="icon-close"></i></div>'
              , t = '<div class="field" field="text">' + a + '<div class="text-editor"></div></div>';
            $(".fields").append(t);
            textEditor();
        } else if (f == "wallpaper") {
            modalOpen("#wallpaper-modal");
        } else if (f == "video") {
            modalOpen("#video-modal");
        }
    });
    $(document).on("click", ".fields .icon-arrow-up-circle", function() {
        var f = $(this).closest(".field");
        f.prev().insertAfter(f);
    });
    $(document).on("click", ".fields .icon-arrow-down-circle", function() {
        var f = $(this).closest(".field");
        f.next().insertBefore(f);
    });
    $(document).on("click", ".fields .icon-close", function() {
        $(this).closest(".field").remove();
    });
    textEditor();
    $(document).on("change", "#image", function(event) {
        var e = $(this)
          , v = e.val();
        $('[browse="image"] img').remove();
        if (v) {
            $('[browse="image"]').append('<img src="' + URL.createObjectURL(event.target.files[0]) + '">');
        } else {
            $("#image").val("");
        }
    });
    $(document).on("click", ".blog button[type='submit']", function(e) {
        var data = new Array;
        $(".fields .field").each(function(index, element) {
            var e = $(element)
              , f = e.attr("field");
            if (f == "text") {
                if (e.find(".text-editor").html())
                    data.push({
                        field: "text",
                        content: e.find(".text-editor").html()
                    });
            } else if (f == "wallpaper") {
                if (e.find("span[data]").html())
                    data.push({
                        field: "wallpaper",
                        title: e.find("input[wtitle]").val(),
                        content: JSON.parse(e.find("span[data]").text())
                    });
            } else if (f == "video") {
                if (e.find("span[data]").html())
                    data.push({
                        field: "video",
                        title: e.find("input[vtitle]").val(),
                        content: JSON.parse(e.find("span[data]").text())
                    });
            }
        });
        $(this).closest("form").find('textarea[name="content"]').val(JSON.stringify(data));
    });
});
function textEditor() {
    new MediumEditor(".text-editor",{
        placeholder: {
            text: lang.blog_add_text_placeholder,
            hideOnClick: false
        }
    });
}
function addWallpaper(res) {
    var a = '<div class="actions"><i class="icon-arrow-up-circle"></i><i class="icon-arrow-down-circle"></i><i class="icon-close"></i></div>'
      , t = '<div class="field" field="wallpaper"><span data>' + JSON.stringify(res.data.wallpaper) + '</span>' + a + '<input type="text" maxlength="140" placeholder="' + lang.blog_add_field_title_label + '" rounded="3" wtitle><img src="' + window.wallpapers + res.data.image + '"></div>';
    $(".fields").append(t);
    modalClose("#wallpaper-modal");
}
function addVideo(res) {
    var a = '<div class="actions"><i class="icon-arrow-up-circle"></i><i class="icon-arrow-down-circle"></i><i class="icon-close"></i></div>'
      , t = '<div class="field" field="video"><span data>' + JSON.stringify(res.data.video) + '</span>' + a + '<input type="text" maxlength="140" placeholder="' + lang.blog_add_field_title_label + '" rounded="3" vtitle>' + res.data.embed + '</div>';
    $(".fields").append(t);
    modalClose("#video-modal");
}

