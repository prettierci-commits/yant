(function(t) {
  function e(e) {
    for (
      var r, a, i = e[0], u = e[1], s = e[2], f = 0, p = [];
      f < i.length;
      f++
    )
      (a = i[f]), c[a] && p.push(c[a][0]), (c[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
    l && l(e);
    while (p.length) p.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== c[u] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = a((a.s = n[0]))));
    }
    return t;
  }
  var r = {},
    c = { index: 0 },
    o = [];
  function a(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = t),
    (a.c = r),
    (a.d = function(t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          a.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var s = 0; s < i.length; s++) e(i[s]);
  var l = u;
  o.push([0, "chunk-index-vendors", "chunk-common"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("8aac");
  },
  "69f8": function(t, e, n) {},
  "6c92": function(t, e, n) {
    "use strict";
    var r = n("7ce0"),
      c = n.n(r);
    c.a;
  },
  "7ce0": function(t, e, n) {},
  "8aac": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d"), n("f65e");
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.ready
          ? n(
              "div",
              { attrs: { id: "app" } },
              [
                n("RootView", { attrs: { widgets: t.widgets } }, [
                  n(
                    "a",
                    {
                      staticClass: "options-button",
                      attrs: { href: t.optionsLink }
                    },
                    [n("SettingsIcon")],
                    1
                  )
                ])
              ],
              1
            )
          : t._e();
      },
      c = [],
      o = (n("96cf"), n("3b8d")),
      a = n("d225"),
      i = n("b0b4"),
      u = n("308d"),
      s = n("6bb5"),
      l = n("4e2b"),
      f = n("9ab4"),
      p = n("0d25"),
      d = n("60a3"),
      b = n("0613"),
      h = {
        functional: !0,
        render(t, e) {
          const { _c: n, _v: r, data: c, children: o = [] } = e,
            {
              class: a,
              staticClass: i,
              style: u,
              staticStyle: s,
              attrs: l = {},
              ...f
            } = c;
          return n(
            "svg",
            {
              class: [a, i],
              style: [u, s],
              attrs: Object.assign(
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                l
              ),
              ...f
            },
            o.concat([
              n("path", {
                attrs: {
                  d:
                    "M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"
                }
              })
            ])
          );
        }
      },
      v = (function(t) {
        function e() {
          var t;
          return (
            Object(a["a"])(this, e),
            (t = Object(u["a"])(
              this,
              Object(s["a"])(e).apply(this, arguments)
            )),
            (t.ready = !1),
            t
          );
        }
        return (
          Object(l["a"])(e, t),
          Object(i["a"])(e, [
            {
              key: "mounted",
              value: (function() {
                var t = Object(o["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), b["e"];
                            case 2:
                              this.ready = !0;
                            case 3:
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
            },
            {
              key: "widgets",
              get: function() {
                return b["f"].configs.map(function(t, e) {
                  var n = t.type;
                  return { type: n, id: e };
                });
              }
            },
            {
              key: "optionsLink",
              get: function() {
                return "./options.html#".concat(location.hash.slice(1));
              }
            }
          ]),
          e
        );
      })(d["d"]);
    v = f["a"](
      [Object(d["a"])({ components: { RootView: p["a"], SettingsIcon: h } })],
      v
    );
    var y = v,
      g = y,
      w = (n("6c92"), n("fac5"), n("2877")),
      m = Object(w["a"])(g, r, c, !1, null, "158e2294", null),
      O = m.exports,
      j = n("2b0e");
    (j["default"].config.productionTip = !1),
      new j["default"]({
        store: b["c"],
        render: function(t) {
          return t(O);
        }
      }).$mount("#app");
  },
  fac5: function(t, e, n) {
    "use strict";
    var r = n("69f8"),
      c = n.n(r);
    c.a;
  }
});
//# sourceMappingURL=index.797086ec.js.map
