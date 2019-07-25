(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-common"],
  {
    "034f": function(t, e, n) {
      "use strict";
      var i = n("2589"),
        a = n.n(i);
      a.a;
    },
    "0613": function(t, e, n) {
      "use strict";
      var i = n("2b0e"),
        a = n("2f62"),
        o = n("6fc5"),
        r = n("0759"),
        s = n.n(r),
        c = (n("96cf"), n("3b8d")),
        u = n("d225"),
        l = n("b0b4"),
        f = (function() {
          function t(e, n, i) {
            var a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : function(t) {
                      return t;
                    },
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : function(t) {
                      return t;
                    };
            Object(u["a"])(this, t),
              (this.key = e),
              (this.setItem = n),
              (this.getItem = i),
              (this.toInner = a),
              (this.toOuter = o);
          }
          return (
            Object(l["a"])(t, [
              {
                key: "save",
                value: (function() {
                  var t = Object(c["a"])(
                    regeneratorRuntime.mark(function t(e) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = this.toInner(e)),
                                  this.setItem(this.key, n);
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function e(e) {
                    return t.apply(this, arguments);
                  }
                  return e;
                })()
              },
              {
                key: "load",
                value: (function() {
                  var t = Object(c["a"])(
                    regeneratorRuntime.mark(function t() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.getItem(this.key);
                              case 2:
                                if (((e = t.sent), !e)) {
                                  t.next = 7;
                                  break;
                                }
                                return t.abrupt("return", this.toOuter(e));
                              case 7:
                                return t.abrupt("return", null);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function e() {
                    return t.apply(this, arguments);
                  }
                  return e;
                })()
              }
            ]),
            t
          );
        })(),
        d = n("bd86");
      function h() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "LTM",
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : chrome.storage.sync,
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0;
        return new f(
          t,
          function(t, n) {
            return new Promise(function(i) {
              e.set(Object(d["a"])({}, t, n), i);
            });
          },
          function(t) {
            return new Promise(function(n) {
              e.get([t], function(e) {
                n(e[t]);
              });
            });
          },
          n,
          i
        );
      }
      function p() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "LTM",
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : JSON,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : localStorage;
        return new f(
          t,
          function(t, e) {
            n.setItem(t, e);
          },
          function(t) {
            return n.getItem(t);
          },
          function(t) {
            return e.stringify(t);
          },
          function(t) {
            return e.parse(t);
          }
        );
      }
      function g(t) {
        t();
      }
      function m(t) {
        var e = null;
        function n(t) {
          t.preventDefault(), (t.returnValue = "");
        }
        return function(i) {
          null == e
            ? window.addEventListener("beforeunload", n)
            : window.clearTimeout(e),
            (e = window.setTimeout(function() {
              i(), (e = null), window.removeEventListener("beforeunload", n);
            }, t));
        };
      }
      function y() {
        return !0;
      }
      var b = n("cebc");
      n("02ac");
      function v(t) {
        return t;
      }
      function w(t, e) {
        return Object(b["a"])({}, e, t);
      }
      function k(t) {
        return t;
      }
      var O,
        j,
        S = (function() {
          function t() {
            var e = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = n.execute,
              a = void 0 === i ? g : i,
              o = n.filter,
              r = void 0 === o ? y : o,
              s = n.merge,
              c = void 0 === s ? v : s,
              l = n.reduce,
              f = void 0 === l ? k : l,
              d = n.storage,
              h = void 0 === d ? p() : d;
            Object(u["a"])(this, t),
              (this.resolveReady = function() {}),
              (this.rejectReady = function() {}),
              (this.execute = a),
              (this.filter = r),
              (this.merge = c),
              (this.reduce = f),
              (this.storage = h),
              (this.ready = new Promise(function(t, n) {
                (e.resolveReady = t), (e.rejectReady = n);
              }));
          }
          return (
            Object(l["a"])(t, [
              {
                key: "save",
                value: (function() {
                  var t = Object(c["a"])(
                    regeneratorRuntime.mark(function t(e, n) {
                      var i,
                        a = this;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.filter(e);
                              case 2:
                                if (t.sent) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return");
                              case 4:
                                return (t.next = 6), this.reduce(n);
                              case 6:
                                if (((i = t.sent), i)) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt("return");
                              case 9:
                                this.execute(function() {
                                  a.storage.save(i);
                                });
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function e(e, n) {
                    return t.apply(this, arguments);
                  }
                  return e;
                })()
              },
              {
                key: "load",
                value: (function() {
                  var t = Object(c["a"])(
                    regeneratorRuntime.mark(function t(e) {
                      var n, i;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.storage.load();
                              case 2:
                                if (((n = t.sent), n)) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return", this.resolveReady());
                              case 5:
                                return (t.next = 7), this.merge(n, e.state);
                              case 7:
                                (i = t.sent),
                                  e.replaceState(i),
                                  this.resolveReady();
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function e(e) {
                    return t.apply(this, arguments);
                  }
                  return e;
                })()
              },
              {
                key: "plugin",
                get: function() {
                  var t = this;
                  return function(e) {
                    e.subscribe(function(e, n) {
                      t.save(e, n);
                    }),
                      t.load(e);
                  };
                }
              }
            ]),
            t
          );
        })(),
        D = n("75fc"),
        x = n("308d"),
        M = n("6bb5"),
        R = n("4e2b"),
        T = n("9ab4");
      function C(t) {
        return {
          backgroundColor: null != t.backgroundColor ? t.backgroundColor : null,
          color: null != t.color ? t.color : null,
          fontFamily: null != t.fontFamily ? t.fontFamily : null,
          fontSize:
            null != t.fontSize
              ? "".concat(t.fontSize, "px")
              : null != t.fontScale
                ? "".concat(t.fontScale, "em")
                : null,
          fontStyle: null != t.fontStyle ? "".concat(t.fontStyle) : null,
          fontVariantCaps:
            null != t.fontVariantCaps ? "".concat(t.fontVariantCaps) : null,
          fontWeight: null != t.fontWeight ? "".concat(t.fontWeight) : null,
          lineHeight: null != t.lineHeight ? "".concat(t.lineHeight) : null,
          minHeight: null != t.minHeight ? "".concat(t.minHeight, "px") : null,
          flexGrow: null != t.flexGrow ? "".concat(t.flexGrow) : null,
          width: null != t.width ? "".concat(t.width, "px") : null,
          height: null != t.height ? "".concat(t.height, "px") : null,
          paddingTop:
            null != t.paddingTop ? "".concat(t.paddingTop, "px") : null,
          paddingRight:
            null != t.paddingRight ? "".concat(t.paddingRight, "px") : null,
          paddingBottom:
            null != t.paddingBottom ? "".concat(t.paddingBottom, "px") : null,
          paddingLeft:
            null != t.paddingLeft ? "".concat(t.paddingLeft, "px") : null,
          borderTopLeftRadius:
            null != t.borderTopLeftRadius
              ? "".concat(t.borderTopLeftRadius, "px")
              : null,
          borderTopRightRadius:
            null != t.borderTopRightRadius
              ? "".concat(t.borderTopRightRadius, "px")
              : null,
          borderBottomRightRadius:
            null != t.borderBottomRightRadius
              ? "".concat(t.borderBottomRightRadius, "px")
              : null,
          borderBottomLeftRadius:
            null != t.borderBottomLeftRadius
              ? "".concat(t.borderBottomLeftRadius, "px")
              : null
        };
      }
      (function(t) {
        (t["clock"] = "clock"),
          (t["date"] = "date"),
          (t["motto"] = "motto"),
          (t["separator"] = "separator"),
          (t["snow"] = "snow");
      })(O || (O = {})),
        (function(t) {
          (t[(t["Milliseconds"] = 0)] = "Milliseconds"),
            (t[(t["Centiseconds"] = 1)] = "Centiseconds"),
            (t[(t["Deciseconds"] = 2)] = "Deciseconds"),
            (t[(t["Seconds"] = 3)] = "Seconds"),
            (t[(t["Minutes"] = 4)] = "Minutes"),
            (t[(t["Hours"] = 5)] = "Hours"),
            (t[(t["Days"] = 6)] = "Days");
        })(j || (j = {}));
      var I = (function(t) {
        function e() {
          var t;
          return (
            Object(u["a"])(this, e),
            (t = Object(x["a"])(
              this,
              Object(M["a"])(e).apply(this, arguments)
            )),
            (t.styling = {
              fontFamily: "Source Serif Pro",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.5,
              animationColors: [
                { fg: "#000000", bg: "#f44336" },
                { fg: "#000000", bg: "#ff5722" },
                { fg: "#000000", bg: "#ff9800" },
                { fg: "#000000", bg: "#ffc107" },
                { fg: "#000000", bg: "#ffeb3b" },
                { fg: "#000000", bg: "#cddc39" },
                { fg: "#000000", bg: "#8bc34a" },
                { fg: "#000000", bg: "#4caf50" },
                { fg: "#ffffff", bg: "#009688" },
                { fg: "#000000", bg: "#00bcd4" },
                { fg: "#000000", bg: "#03a9f4" },
                { fg: "#000000", bg: "#2196f3" },
                { fg: "#ffffff", bg: "#3f51b5" },
                { fg: "#ffffff", bg: "#673ab7" },
                { fg: "#ffffff", bg: "#9c27b0" },
                { fg: "#000000", bg: "#e91e63" }
              ]
            }),
            (t.fadeIn = !0),
            (t.style = ""),
            t
          );
        }
        return (
          Object(R["a"])(e, t),
          Object(l["a"])(e, [
            {
              key: "setStyling",
              value: function(t) {
                this.styling = t;
              }
            },
            {
              key: "setFadeIn",
              value: function(t) {
                this.fadeIn = t;
              }
            },
            {
              key: "setStyle",
              value: function(t) {
                this.style = t;
              }
            },
            {
              key: "styleAttr",
              get: function() {
                var t = Object(D["a"])(
                  this.fadeIn ? ["fade-in 2s forwards"] : []
                );
                return Object(b["a"])({}, C(this.styling), {
                  animation: t.join(", ")
                });
              }
            }
          ]),
          e
        );
      })(o["c"]);
      T["a"]([o["b"]], I.prototype, "setStyling", null),
        T["a"]([o["b"]], I.prototype, "setFadeIn", null),
        T["a"]([o["b"]], I.prototype, "setStyle", null),
        (I = T["a"]([Object(o["a"])({ namespaced: !0, name: "common" })], I));
      var _ = I,
        A = (n("ac6a"), n("8615"), n("768b")),
        L = {
          clock: {
            type: O.clock,
            styling: { fontScale: 9 },
            separator: ":",
            showSeconds: !0,
            dimSeconds: !0,
            dimSeparators: !0
          },
          date: {
            type: O.date,
            styling: { fontScale: 2.5 },
            formatString: "dddd, MMMM D, YYYY",
            updateRate: j.Days
          },
          "alternative.date-week": {
            type: O.date,
            styling: { fontScale: 2 },
            formatString: "[Week] W",
            updateRate: j.Days
          },
          motto: {
            type: O.motto,
            styling: { fontScale: 1.5 },
            text:
              "<strong>So what are you waiting for?</strong>\nLive your life in a way that makes traveling light years just to hang out with you worth it."
          },
          separator: {
            type: O.separator,
            styling: { minHeight: 40, flexGrow: 1 }
          },
          snow: {
            type: O.snow,
            styling: {},
            amount: 200,
            symbols: ["❅", "❄", "❆"],
            speed: 60
          }
        },
        E = (function(t) {
          function e() {
            var t;
            return (
              Object(u["a"])(this, e),
              (t = Object(x["a"])(
                this,
                Object(M["a"])(e).apply(this, arguments)
              )),
              (t.configs = [
                L[O.separator],
                L[O.motto],
                L[O.separator],
                L[O.clock],
                L[O.date],
                L["alternative.date-week"],
                L[O.separator]
              ]),
              t
            );
          }
          return (
            Object(R["a"])(e, t),
            Object(l["a"])(e, [
              {
                key: "add",
                value: function(t) {
                  var e = t.id,
                    n = t.type;
                  this.configs.splice(e, 0, L[n]);
                }
              },
              {
                key: "delete",
                value: function(t) {
                  var e = t.id;
                  this.configs.splice(e, 1);
                }
              },
              {
                key: "reorder",
                value: function(t) {
                  var e = t.oldId,
                    n = t.newId,
                    i = this.configs.splice(e, 1),
                    a = Object(A["a"])(i, 1),
                    o = a[0];
                  this.configs.splice(n, 0, o);
                }
              },
              {
                key: "setConfig",
                value: function(t) {
                  var e = t.id,
                    n = t.config;
                  this.configs.splice(e, 1, n);
                }
              },
              {
                key: "active",
                get: function() {
                  return this.configs.map(function(t, e) {
                    var n = t.type;
                    return { type: n, id: e };
                  });
                }
              },
              {
                key: "available",
                get: function() {
                  var t = this;
                  return Object.values(O).map(function(e) {
                    return { type: e, id: t.configs.length };
                  });
                }
              },
              {
                key: "generateStyleAttr",
                get: function() {
                  return function(t) {
                    return C(t);
                  };
                }
              }
            ]),
            e
          );
        })(o["c"]);
      T["a"]([o["b"]], E.prototype, "add", null),
        T["a"]([o["b"]], E.prototype, "delete", null),
        T["a"]([o["b"]], E.prototype, "reorder", null),
        T["a"]([o["b"]], E.prototype, "setConfig", null),
        (E = T["a"]([Object(o["a"])({ namespaced: !0, name: "widgets" })], E));
      var H = E;
      n.d(e, "b", function() {
        return N;
      }),
        n.d(e, "f", function() {
          return B;
        }),
        n.d(e, "e", function() {
          return F;
        }),
        n.d(e, "a", function() {
          return j;
        }),
        n.d(e, "d", function() {
          return L;
        }),
        i["default"].use(a["a"]);
      var q = new S({
          storage:
            chrome && chrome.storage && chrome.storage.sync
              ? h("YANT")
              : p("YANT"),
          execute: m(1e3),
          merge: w
        }),
        V = new a["a"].Store({
          strict: !1,
          state: {},
          modules: { common: _, widgets: H },
          plugins: [
            q.plugin,
            s()({
              predicate: function() {
                return !0;
              }
            })
          ]
        }),
        N = Object(o["d"])(_, V),
        B = Object(o["d"])(H, V),
        F = ((e["c"] = V), q.ready);
    },
    "0d25": function(t, e, n) {
      "use strict";
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              ref: "container",
              staticClass: "flex-container",
              class: t.classes,
              style: t.styleAttr
            },
            [
              t._l(t.widgetsDOM, function(t, e) {
                var i = t.component,
                  a = t.id,
                  o = t.suppressed;
                return n(i, {
                  key: e,
                  tag: "div",
                  staticClass: "widget",
                  class: { suppressed: o },
                  attrs: { "widget-id": a }
                });
              }),
              t._t("default"),
              n("CSS", { attrs: { value: t.customCSS } })
            ],
            2
          );
        },
        a = [],
        o = n("bd86"),
        r = n("cebc"),
        s = n("d225"),
        c = n("b0b4"),
        u = n("308d"),
        l = n("6bb5"),
        f = n("4e2b"),
        d = n("9ab4"),
        h = (n("c5f6"),
        n("20d6"),
        n("14b9"),
        (function() {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3;
            Object(s["a"])(this, t),
              (this.queue = []),
              (this.interval = null),
              (this.removeVisibilityChangeListener = function() {}),
              (this.precision = e);
          }
          return (
            Object(c["a"])(t, [
              {
                key: "start",
                value: function() {
                  var t = this;
                  this.stop();
                  var e = function() {
                    document.hidden ? t.pause() : t.resume();
                  };
                  document.addEventListener("visibilitychange", e),
                    (this.removeVisibilityChangeListener = function() {
                      return document.removeEventListener(
                        "visibilitychange",
                        e
                      );
                    }),
                    this.resume();
                }
              },
              {
                key: "stop",
                value: function() {
                  this.pause(), this.removeVisibilityChangeListener();
                }
              },
              {
                key: "resume",
                value: function() {
                  var t = this;
                  this.pause(),
                    (this.interval = window.setInterval(function() {
                      var e = Date.now(),
                        n = e + t.precision;
                      while (
                        t.queue.length &&
                        t.queue[t.queue.length - 1].timestamp <= n
                      ) {
                        var i = t.queue.pop();
                        if (null != i.repeat) {
                          do {
                            i.timestamp += i.repeat;
                          } while (i.timestamp < e);
                          t.planUnit(i);
                        }
                        window.setTimeout(i.func, i.timestamp - e);
                      }
                      t.queue.length || t.stop();
                    }, this.precision));
                }
              },
              {
                key: "pause",
                value: function() {
                  null != this.interval &&
                    (window.clearInterval(this.interval),
                    (this.interval = null));
                }
              },
              {
                key: "generateRemoveFunction",
                value: function(t) {
                  var e = this;
                  return function() {
                    var n = e.queue.indexOf(t);
                    n >= 0 && e.queue.splice(n, 1);
                  };
                }
              },
              {
                key: "planUnit",
                value: function(t) {
                  var e = this.queue.findIndex(function(e) {
                    var n = e.timestamp;
                    return n < t.timestamp;
                  });
                  this.queue.splice(e < 0 ? this.queue.length : e, 0, t);
                }
              },
              {
                key: "plan",
                value: function(t, e, n) {
                  var i = { timestamp: e, func: t, repeat: n };
                  return (
                    this.planUnit(i),
                    null == this.interval && this.start(),
                    this.generateRemoveFunction(i)
                  );
                }
              }
            ]),
            t
          );
        })()),
        p = new h(),
        g = function(t, e, n) {
          return p.plan(t, e, n);
        };
      function m(t, e) {
        if (t.length < 1) return [];
        var n = 2e3 / e,
          i = 1 / t.length / 2,
          a = Math.min(n, i / 2),
          o = [],
          s = { backgroundColor: t[0].bg, color: t[0].fg };
        o.push(Object(r["a"])({}, s, { offset: 0 }));
        for (var c = 1; c < t.length; ++c) {
          var u = t[c],
            l = t[c - 1],
            f = c / t.length;
          u.fg === l.fg
            ? o.push({ offset: f, backgroundColor: u.bg })
            : o.push(
                { offset: f - i - a, color: l.fg },
                { offset: f - i + a, color: u.fg },
                { offset: f, backgroundColor: u.bg }
              );
        }
        return o.push(Object(r["a"])({}, s, { offset: 1 })), o;
      }
      var y = (function() {
          function t(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            Object(s["a"])(this, t),
              (this.cancelPlan = function() {}),
              (this.element = e),
              (this.delay = null != n.delay ? n.delay : 0),
              (this.duration = null != n.duration ? n.duration : 6e4),
              (this.startTimestamp =
                null != n.start
                  ? n.start
                  : Math.floor(this.duration * Math.random())),
              (this.sync = null != n.sync ? n.sync : null != n.start),
              (this.keyframes = m(
                null != n.colors ? n.colors : [],
                this.duration
              ));
          }
          return (
            Object(c["a"])(t, [
              {
                key: "start",
                value: function() {
                  var t = this;
                  this.stop();
                  var e = this.element.animate(this.keyframes, {
                    duration: this.duration,
                    iterations: Number.POSITIVE_INFINITY
                  });
                  (e.currentTime = Date.now() - this.startTimestamp),
                    (this.animation = e),
                    this.sync &&
                      (this.cancelPlan = g(
                        function() {
                          var n = Date.now(),
                            i = n - t.startTimestamp,
                            a = e.currentTime || 0,
                            o = i - a,
                            r = Math.abs(o);
                          (1 === e.playbackRate && r < 100) ||
                            (r > 1e3
                              ? ((e.playbackRate = 1), (e.currentTime = i))
                              : 1 !== e.playbackRate && r < 10
                                ? (e.playbackRate = 1)
                                : o < 0
                                  ? 0.999 !== e.playbackRate &&
                                    (e.playbackRate = 0.999)
                                  : o > 0 &&
                                    1.001 !== e.playbackRate &&
                                    (e.playbackRate = 1.001));
                        },
                        Date.now(),
                        5e3
                      ));
                }
              },
              {
                key: "stop",
                value: function() {
                  this.cancelPlan(),
                    null != this.animation &&
                      (this.animation.cancel(), (this.animation = void 0));
                }
              }
            ]),
            t
          );
        })(),
        b = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticStyle: { display: "none !important" } });
        },
        v = [],
        w = n("60a3"),
        k = (function(t) {
          function e() {
            var t;
            return (
              Object(s["a"])(this, e),
              (t = Object(u["a"])(
                this,
                Object(l["a"])(e).apply(this, arguments)
              )),
              (t.styleElement = document.createElement("style")),
              t
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "updateStyle",
                value: function() {
                  this.styleElement.innerHTML = this.value;
                }
              },
              {
                key: "created",
                value: function() {
                  this.styleElement.setAttribute("type", "text/css");
                }
              },
              {
                key: "mounted",
                value: function() {
                  this.updateStyle(),
                    document.head.appendChild(this.styleElement);
                }
              },
              {
                key: "beforeDestroy",
                value: function() {
                  this.styleElement.parentNode.removeChild(this.styleElement);
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"]([Object(w["c"])({ required: !0 })], k.prototype, "value", void 0),
        d["a"]([Object(w["e"])("value")], k.prototype, "updateStyle", null),
        (k = d["a"]([w["a"]], k));
      var O = k,
        j = O,
        S = n("2877"),
        D = Object(S["a"])(j, b, v, !1, null, null, null),
        x = D.exports,
        M = n("0613"),
        R = n("a17e"),
        T = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "clock", style: t.styleAttr },
            [
              n("span", { staticClass: "hours" }, [t._v(t._s(t.hours))]),
              n(
                "span",
                {
                  staticClass: "separator between-minutes-and-seconds",
                  class: { dim: t.config.dimSeparators }
                },
                [t._v(t._s(t.config.separator))]
              ),
              n("span", { staticClass: "minutes" }, [t._v(t._s(t.minutes))]),
              t.config.showSeconds
                ? [
                    n(
                      "span",
                      {
                        staticClass: "separator between-minutes-and-seconds",
                        class: { dim: t.config.dimSeparators }
                      },
                      [t._v(t._s(t.config.separator))]
                    ),
                    n(
                      "span",
                      {
                        staticClass: "seconds",
                        class: { dim: t.config.dimSeconds }
                      },
                      [t._v(t._s(t.seconds))]
                    )
                  ]
                : t._e()
            ],
            2
          );
        },
        C = [];
      n("6b54"), n("f576");
      function I(t) {
        return t.setTime(Date.now()), t.setHours(24, 0, 0, 0), t;
      }
      function _(t) {
        return t.setTime(Date.now()), t.setMinutes(60, 0, 0), t;
      }
      function A(t) {
        return t.setTime(Date.now()), t.setSeconds(60, 0), t;
      }
      function L(t) {
        return t.setTime(Date.now()), t.setMilliseconds(1e3), t;
      }
      function E(t) {
        return (
          t.setTime(Date.now()),
          t.setMilliseconds(100 * Math.floor(t.getMilliseconds() / 100 + 1)),
          t
        );
      }
      function H(t) {
        return (
          t.setTime(Date.now()),
          t.setMilliseconds(10 * Math.floor(t.getMilliseconds() / 10 + 1)),
          t
        );
      }
      function q(t) {
        return (
          t.setTime(Date.now()), t.setMilliseconds(t.getMilliseconds() + 1), t
        );
      }
      var V = {
          day: I,
          hour: _,
          minute: A,
          second: L,
          decisecond: E,
          centisecond: H,
          millisecond: q
        },
        N = (function() {
          function t(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : I;
            Object(s["a"])(this, t),
              (this.clearTimeout = function() {}),
              (this.date = new Date()),
              (this.callback = e),
              (this.getNextDate = n);
          }
          return (
            Object(c["a"])(t, [
              {
                key: "setTimeout",
                value: function() {
                  var t = this;
                  this.date = this.getNextDate(this.date);
                  var e = +this.date;
                  this.clearTimeout = g(function() {
                    t.callback(e), t.setTimeout();
                  }, e);
                }
              },
              {
                key: "start",
                value: function(t) {
                  this.stop(), t && (this.getNextDate = t), this.setTimeout();
                }
              },
              {
                key: "stop",
                value: function() {
                  this.clearTimeout();
                }
              }
            ]),
            t
          );
        })(),
        B = (function(t) {
          function e() {
            var t;
            return (
              Object(s["a"])(this, e),
              (t = Object(u["a"])(
                this,
                Object(l["a"])(e).apply(this, arguments)
              )),
              (t.date = new Date()),
              t
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "created",
                value: function() {
                  this.updater = new N(this.updateDate);
                }
              },
              {
                key: "mounted",
                value: function() {
                  this.resetTimeout();
                }
              },
              {
                key: "beforeDestroy",
                value: function() {
                  this.updater.stop();
                }
              },
              {
                key: "resetTimeout",
                value: function() {
                  this.updateDate(),
                    this.config.showSeconds
                      ? this.updater.start(L)
                      : this.updater.start(A);
                }
              },
              {
                key: "updateDate",
                value: function() {
                  this.date = new Date();
                }
              },
              {
                key: "config",
                get: function() {
                  return M["f"].configs[this.widgetId];
                }
              },
              {
                key: "styleAttr",
                get: function() {
                  return M["f"].generateStyleAttr(this.config.styling);
                }
              },
              {
                key: "hours",
                get: function() {
                  return this.date
                    .getHours()
                    .toString()
                    .padStart(2, "0");
                }
              },
              {
                key: "minutes",
                get: function() {
                  return this.date
                    .getMinutes()
                    .toString()
                    .padStart(2, "0");
                }
              },
              {
                key: "seconds",
                get: function() {
                  return this.date
                    .getSeconds()
                    .toString()
                    .padStart(2, "0");
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"](
        [Object(w["c"])({ required: !0 })],
        B.prototype,
        "widgetId",
        void 0
      ),
        d["a"](
          [Object(w["e"])("config.showSeconds")],
          B.prototype,
          "resetTimeout",
          null
        ),
        (B = d["a"]([w["a"]], B));
      var F = B,
        P = F,
        $ = (n("034f"), Object(S["a"])(P, T, C, !1, null, "3fb60a6c", null)),
        W = $.exports,
        Y = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "date", style: t.styleAttr }, [
            t._v("\n  " + t._s(t.textDate) + "\n")
          ]);
        },
        z = [],
        U = n("70f2"),
        G = n.n(U),
        J = (function(t) {
          function e() {
            var t;
            return (
              Object(s["a"])(this, e),
              (t = Object(u["a"])(
                this,
                Object(l["a"])(e).apply(this, arguments)
              )),
              (t.date = Date.now()),
              t
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "created",
                value: function() {
                  this.updater = new N(this.updateDate);
                }
              },
              {
                key: "mounted",
                value: function() {
                  this.resetTimeout();
                }
              },
              {
                key: "beforeDestroy",
                value: function() {
                  this.updater.stop();
                }
              },
              {
                key: "resetTimeout",
                value: function() {
                  var t;
                  switch (
                    (this.updateDate(Date.now()), this.config.updateRate)
                  ) {
                    case M["a"].Days:
                      t = V.day;
                      break;
                    case M["a"].Hours:
                      t = V.hour;
                      break;
                    case M["a"].Minutes:
                      t = V.minute;
                      break;
                    case M["a"].Seconds:
                      t = V.second;
                      break;
                    case M["a"].Deciseconds:
                      t = V.decisecond;
                      break;
                    case M["a"].Centiseconds:
                      t = V.centisecond;
                      break;
                    case M["a"].Milliseconds:
                      t = V.millisecond;
                      break;
                    default:
                      t = V.day;
                  }
                  this.updater.start(t);
                }
              },
              {
                key: "updateDate",
                value: function(t) {
                  this.date = t;
                }
              },
              {
                key: "config",
                get: function() {
                  return M["f"].configs[this.widgetId];
                }
              },
              {
                key: "styleAttr",
                get: function() {
                  return M["f"].generateStyleAttr(this.config.styling);
                }
              },
              {
                key: "textDate",
                get: function() {
                  return G()(this.date, this.config.formatString);
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"](
        [Object(w["c"])({ required: !0 })],
        J.prototype,
        "widgetId",
        void 0
      ),
        d["a"](
          [Object(w["e"])("config.updateRate")],
          J.prototype,
          "resetTimeout",
          null
        ),
        (J = d["a"]([w["a"]], J));
      var K = J,
        Q = K,
        X = (n("3d78"), Object(S["a"])(Q, Y, z, !1, null, "b3f9f882", null)),
        Z = X.exports,
        tt = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "motto",
            style: t.styleAttr,
            domProps: { innerHTML: t._s(t.config.text) }
          });
        },
        et = [],
        nt = (function(t) {
          function e() {
            return (
              Object(s["a"])(this, e),
              Object(u["a"])(this, Object(l["a"])(e).apply(this, arguments))
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "config",
                get: function() {
                  return M["f"].configs[this.widgetId];
                }
              },
              {
                key: "styleAttr",
                get: function() {
                  return M["f"].generateStyleAttr(this.config.styling);
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"](
        [Object(w["c"])({ required: !0 })],
        nt.prototype,
        "widgetId",
        void 0
      ),
        (nt = d["a"]([w["a"]], nt));
      var it = nt,
        at = it,
        ot = (n("7698"),
        Object(S["a"])(at, tt, et, !1, null, "2177200c", null)),
        rt = ot.exports,
        st = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "separator", style: t.styleAttr });
        },
        ct = [],
        ut = (function(t) {
          function e() {
            return (
              Object(s["a"])(this, e),
              Object(u["a"])(this, Object(l["a"])(e).apply(this, arguments))
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "config",
                get: function() {
                  return M["f"].configs[this.widgetId];
                }
              },
              {
                key: "styleAttr",
                get: function() {
                  return M["f"].generateStyleAttr(this.config.styling);
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"](
        [Object(w["c"])({ required: !0 })],
        ut.prototype,
        "widgetId",
        void 0
      ),
        (ut = d["a"]([w["a"]], ut));
      var lt = ut,
        ft = lt,
        dt = (n("611f"),
        Object(S["a"])(ft, st, ct, !1, null, "0389d067", null)),
        ht = dt.exports,
        pt = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "snowflakes" },
            t._l(t.snowflakes, function(e, i) {
              return n(
                "div",
                { key: i, staticClass: "snowflake", style: e.outer },
                [
                  n("div", { style: e.inner }, [
                    t._v("\n      " + t._s(e.symbol) + "\n    ")
                  ])
                ]
              );
            }),
            0
          );
        },
        gt = [],
        mt = n("75fc"),
        yt = (function(t) {
          function e() {
            return (
              Object(s["a"])(this, e),
              Object(u["a"])(this, Object(l["a"])(e).apply(this, arguments))
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "config",
                get: function() {
                  return M["f"].configs[this.widgetId];
                }
              },
              {
                key: "fallDuration",
                get: function() {
                  var t = 10,
                    e = 3600 / this.config.speed - t,
                    n = t + e;
                  return { variable: t, base: e, total: n };
                }
              },
              {
                key: "snowflakes",
                get: function() {
                  var t = this;
                  return Object(mt["a"])(Array(this.config.amount)).map(
                    function(e, n) {
                      var i = "".concat(
                        Math.floor(10 * Math.random() + 15),
                        "px"
                      );
                      return {
                        symbol: t.config.symbols[n % t.config.symbols.length],
                        outer: {
                          left: "".concat(100 * Math.random(), "%"),
                          width: i,
                          height: i,
                          fontSize: i,
                          opacity: "".concat(Math.random() / 2 + 0.5),
                          animationDuration: "".concat(
                            Math.random() * t.fallDuration.variable +
                              t.fallDuration.base,
                            "s"
                          ),
                          animationDelay: "".concat(
                            -Math.random() * t.fallDuration.total,
                            "s"
                          )
                        },
                        inner: {
                          animationDuration: "".concat(
                            2 * Math.random() + 30,
                            "s"
                          ),
                          animationDelay: "".concat(32 * -Math.random(), "s")
                        }
                      };
                    }
                  );
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"](
        [Object(w["c"])({ required: !0 })],
        yt.prototype,
        "widgetId",
        void 0
      ),
        (yt = d["a"]([w["a"]], yt));
      var bt = yt,
        vt = bt,
        wt = (n("6cf9"),
        Object(S["a"])(vt, pt, gt, !1, null, "3d6f492b", null)),
        kt = wt.exports,
        Ot = (function(t) {
          function e() {
            return (
              Object(s["a"])(this, e),
              Object(u["a"])(this, Object(l["a"])(e).apply(this, arguments))
            );
          }
          return (
            Object(f["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "mounted",
                value: function() {
                  this.setUpAnimation();
                }
              },
              {
                key: "beforeDestroy",
                value: function() {
                  this.animationManager && this.animationManager.stop();
                }
              },
              {
                key: "setUpAnimation",
                value: function() {
                  this.animationManager && this.animationManager.stop(),
                    this.animation.colors.length > 1
                      ? ((this.animationManager = new y(
                          this.$refs.container,
                          this.animation
                        )),
                        this.animationManager.start())
                      : (this.animationManager = void 0);
                }
              },
              {
                key: "styleAttr",
                get: function() {
                  if (1 === this.animation.colors.length) {
                    var t = this.animation.colors[0],
                      e = t.bg,
                      n = t.fg;
                    return Object(r["a"])({}, M["b"].styleAttr, {
                      backgroundColor: e,
                      color: n
                    });
                  }
                  return M["b"].styleAttr;
                }
              },
              {
                key: "customCSS",
                get: function() {
                  return M["b"].style;
                }
              },
              {
                key: "widgetsDOM",
                get: function() {
                  return this.widgets.map(function(t) {
                    var e = t.type,
                      n = t.id,
                      i = t.suppressed;
                    return {
                      component: R["b"].get(e).componentName,
                      suppressed: !!i,
                      id: n
                    };
                  });
                }
              },
              {
                key: "classes",
                get: function() {
                  return Object(o["a"])(
                    { shrink: !1 !== this.shrink },
                    M["b"].fadeIn ? "fade-in" : "show-immediatelly",
                    !0
                  );
                }
              },
              {
                key: "animation",
                get: function() {
                  return {
                    colors: M["b"].styling.animationColors || [],
                    duration: M["b"].styling.animationDuration,
                    start: M["b"].styling.animationStart
                  };
                }
              }
            ]),
            e
          );
        })(w["d"]);
      d["a"]([Object(w["c"])({ default: !1 })], Ot.prototype, "shrink", void 0),
        d["a"](
          [Object(w["c"])({ required: !0 })],
          Ot.prototype,
          "widgets",
          void 0
        ),
        d["a"](
          [Object(w["e"])("animation")],
          Ot.prototype,
          "setUpAnimation",
          null
        ),
        (Ot = d["a"](
          [
            Object(w["a"])({
              components: {
                CSS: x,
                ClockView: W,
                DateView: Z,
                MottoView: rt,
                SeparatorView: ht,
                SnowView: kt
              }
            })
          ],
          Ot
        ));
      var jt = Ot,
        St = jt,
        Dt = (n("b3ee"), Object(S["a"])(St, i, a, !1, null, "19e815f6", null));
      e["a"] = Dt.exports;
    },
    1743: function(t, e, n) {},
    2589: function(t, e, n) {},
    "36cc": function(t, e, n) {},
    "3d78": function(t, e, n) {
      "use strict";
      var i = n("1743"),
        a = n.n(i);
      a.a;
    },
    "3dc3": function(t, e, n) {},
    "611f": function(t, e, n) {
      "use strict";
      var i = n("c9b9"),
        a = n.n(i);
      a.a;
    },
    "6cf9": function(t, e, n) {
      "use strict";
      var i = n("36cc"),
        a = n.n(i);
      a.a;
    },
    7698: function(t, e, n) {
      "use strict";
      var i = n("3dc3"),
        a = n.n(i);
      a.a;
    },
    "92c0": function(t, e, n) {},
    a17e: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      }),
        n.d(e, "b", function() {
          return o;
        });
      n("ac6a"), n("5df3"), n("f400");
      var i = [
          [
            "common",
            {
              icon: "mdi-domain",
              name: "Common",
              route: { name: "options-common" },
              preview: { minHeight: "20vh" }
            }
          ],
          [
            "widgets",
            {
              icon: "mdi-reorder-horizontal",
              name: "Widgets",
              route: { name: "options-widgets" },
              preview: { minHeight: "20vh" }
            }
          ],
          [
            "style",
            {
              icon: "mdi-language-css3",
              name: "Style (custom CSS)",
              route: { name: "options-style" },
              preview: { minHeight: "20vh" }
            }
          ]
        ],
        a = [
          [
            "clock",
            {
              icon: "mdi-clock",
              name: "Clock",
              type: "clock",
              componentName: "ClockView",
              route: { name: "options-clock" }
            }
          ],
          [
            "date",
            {
              icon: "mdi-calendar",
              name: "Date",
              type: "date",
              componentName: "DateView",
              route: { name: "options-date" }
            }
          ],
          [
            "motto",
            {
              icon: "mdi-text",
              name: "Motto",
              type: "motto",
              componentName: "MottoView",
              route: { name: "options-motto" }
            }
          ],
          [
            "separator",
            {
              icon: "mdi-minus",
              name: "Separator",
              type: "separator",
              componentName: "SeparatorView",
              route: { name: "options-separator" }
            }
          ],
          [
            "snow",
            {
              icon: "mdi-snowflake",
              name: "Snow",
              type: "snow",
              componentName: "SnowView",
              route: { name: "options-snow" },
              preview: { minHeight: "20vh" }
            }
          ]
        ],
        o = new Map(a),
        r = new Map([].concat(i, a));
    },
    b3ee: function(t, e, n) {
      "use strict";
      var i = n("92c0"),
        a = n.n(i);
      a.a;
    },
    c9b9: function(t, e, n) {}
  }
]);
//# sourceMappingURL=chunk-common.a305b9d9.js.map
