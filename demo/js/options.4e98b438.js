(function(t) {
  function e(e) {
    for (
      var a, r, s = e[0], l = e[1], c = e[2], f = 0, d = [];
      f < s.length;
      f++
    )
      (r = s[f]), i[r] && d.push(i[r][0]), (i[r] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
    u && u(e);
    while (d.length) d.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], a = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== i[l] && (a = !1);
      }
      a && (o.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var a = {},
    i = { options: 0 },
    o = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            n,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var c = 0; c < s.length; c++) e(s[c]);
  var u = l;
  o.push([1, "chunk-options-vendors", "chunk-common"]), n();
})({
  "0170": function(t, e, n) {},
  1: function(t, e, n) {
    t.exports = n("d1a2");
  },
  "2c5c": function(t, e, n) {},
  3625: function(t, e, n) {
    "use strict";
    var a = n("0170"),
      i = n.n(a);
    i.a;
  },
  "5f86": function(t, e, n) {
    "use strict";
    var a = n("e287"),
      i = n.n(a);
    i.a;
  },
  7123: function(t, e, n) {
    "use strict";
    var a = n("e8d6"),
      i = n.n(a);
    i.a;
  },
  8497: function(t, e, n) {
    "use strict";
    var a = n("9b80"),
      i = n.n(a);
    i.a;
  },
  "8eb2": function(t, e, n) {},
  "8f5f": function(t, e, n) {
    "use strict";
    var a = n("bf9b"),
      i = n.n(a);
    i.a;
  },
  "9b80": function(t, e, n) {},
  a38b: function(t, e, n) {},
  bf9b: function(t, e, n) {},
  d1a2: function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d"), n("d68f"), n("5363");
    var a = n("2b0e"),
      i = n("bb71"),
      o = n("c0a4"),
      r = n.n(o),
      s = r.a.yellow;
    a["default"].use(i["a"], {
      theme: { primary: s.base, secondary: s.base, accent: s.base },
      options: { customProperties: !0 },
      iconfont: "mdi"
    });
    n("f65e");
    var l = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.ready
          ? n("div", { attrs: { id: "app" } }, [n("router-view")], 1)
          : t._e();
      },
      c = [],
      u = (n("96cf"), n("3b8d")),
      f = n("d225"),
      d = n("b0b4"),
      v = n("308d"),
      p = n("6bb5"),
      m = n("4e2b"),
      h = n("9ab4"),
      b = n("60a3"),
      g = n("0613"),
      y = (function(t) {
        function e() {
          var t;
          return (
            Object(f["a"])(this, e),
            (t = Object(v["a"])(
              this,
              Object(p["a"])(e).apply(this, arguments)
            )),
            (t.ready = !1),
            t
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "mounted",
              value: (function() {
                var t = Object(u["a"])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), g["e"];
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
            }
          ]),
          e
        );
      })(b["d"]);
    y = h["a"]([b["a"]], y);
    var x = y,
      k = x,
      O = (n("e9fa"), n("2877")),
      j = Object(O["a"])(k, l, c, !1, null, null, null),
      w = j.exports,
      S = n("8c4f"),
      C = n("a17e"),
      _ = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-app",
          { attrs: { dark: "" } },
          [
            n(
              "v-navigation-drawer",
              {
                attrs: { app: "", clipped: "", fixed: "" },
                model: {
                  value: t.drawer,
                  callback: function(e) {
                    t.drawer = e;
                  },
                  expression: "drawer"
                }
              },
              [
                n(
                  "v-list",
                  { attrs: { dense: "" } },
                  t._l(t.drawerItems, function(e, a) {
                    var i = e.icon,
                      o = e.name,
                      r = e.route,
                      s = e.id;
                    return n(
                      "v-list-tile",
                      {
                        key: a,
                        attrs: { to: r },
                        on: {
                          click: function(t) {
                            t.stopPropagation();
                          }
                        }
                      },
                      [
                        n(
                          "v-list-tile-action",
                          [n("v-icon", [t._v(t._s(i))])],
                          1
                        ),
                        n(
                          "v-list-tile-content",
                          [
                            n("v-list-tile-title", [
                              t._v(
                                "\n            " + t._s(o) + "\n            "
                              ),
                              s ? n("sup", [t._v(t._s(s))]) : t._e()
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    );
                  }),
                  1
                )
              ],
              1
            ),
            n(
              "v-toolbar",
              {
                attrs: {
                  app: "",
                  "clipped-left": "",
                  color: "primary",
                  fixed: "",
                  light: ""
                }
              },
              [
                n("v-toolbar-side-icon", {
                  on: {
                    click: function(e) {
                      e.stopPropagation(), (t.drawer = !t.drawer);
                    }
                  }
                }),
                n("v-toolbar-title", [t._v("YANT")]),
                n("v-spacer"),
                n(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: t.openNewtab } },
                  [n("v-icon", [t._v("mdi-open-in-new")])],
                  1
                ),
                n(
                  "v-btn",
                  { attrs: { href: t.newtabLink, icon: "" } },
                  [n("v-icon", [t._v("mdi-close")])],
                  1
                )
              ],
              1
            ),
            n(
              "v-content",
              { staticClass: "body-1 options-content" },
              [
                n(
                  "v-container",
                  { attrs: { fluid: "", "pa-0": "" } },
                  [
                    n(
                      "v-layout",
                      { attrs: { reverse: t.sideBySide, row: "", wrap: "" } },
                      [
                        n(
                          "v-flex",
                          {
                            staticClass: "preview-container",
                            class: t.previewContainerClass,
                            attrs: { xs12: "", xl6: "" }
                          },
                          [
                            n("RootView", {
                              style: t.previewStyle,
                              attrs: {
                                shrink: !t.sideBySide,
                                widgets: t.widgets
                              }
                            })
                          ],
                          1
                        ),
                        n(
                          "v-flex",
                          { attrs: { xs12: "", xl6: "" } },
                          [
                            n(
                              "v-fade-transition",
                              { attrs: { mode: "out-in" } },
                              [
                                n("router-view", {
                                  key: t.$route.fullPath,
                                  staticClass: "router-options",
                                  attrs: { "widget-id": t.$route.params.id }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      V = [],
      D = (n("7f7f"), n("cebc")),
      M = n("75fc"),
      T = n("0d25"),
      H = (function(t) {
        function e() {
          var t;
          return (
            Object(f["a"])(this, e),
            (t = Object(v["a"])(
              this,
              Object(p["a"])(e).apply(this, arguments)
            )),
            (t.drawer = !0),
            t
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "openNewtab",
              value: function() {
                window.open(this.newtabLink, "", "chrome");
              }
            },
            {
              key: "drawerItems",
              get: function() {
                return [
                  C["a"].get("common"),
                  C["a"].get("widgets"),
                  C["a"].get("style")
                ].concat(
                  Object(M["a"])(
                    g["f"].active.map(function(t) {
                      var e = t.type,
                        n = t.id,
                        a = C["a"].get(e);
                      return Object(
                        D["a"]
                      )({}, a, { id: n, route: Object(D["a"])({}, a.route, { params: { id: "".concat(n) } }) });
                    })
                  )
                );
              }
            },
            {
              key: "widgets",
              get: function() {
                var t = this;
                return this.$route.meta &&
                  this.$route.meta.type &&
                  null != this.$route.params.id
                  ? g["f"].configs.map(function(e, n) {
                      var a = e.type;
                      return {
                        type: a,
                        id: n,
                        suppressed:
                          t.$route.meta.type !== a || +t.$route.params.id !== n
                      };
                    })
                  : g["f"].configs.map(function(t, e) {
                      var n = t.type;
                      return { type: n, id: e };
                    });
              }
            },
            {
              key: "sideBySide",
              get: function() {
                return "xl" === this.$vuetify.breakpoint.name;
              }
            },
            {
              key: "previewContainerClass",
              get: function() {
                return { "side-by-side": this.sideBySide };
              }
            },
            {
              key: "previewStyle",
              get: function() {
                return {
                  minHeight:
                    !this.sideBySide &&
                    this.$route.meta &&
                    this.$route.meta.preview
                      ? this.$route.meta.preview.minHeight
                      : null
                };
              }
            },
            {
              key: "newtabLink",
              get: function() {
                return "./index.html#".concat(this.$route.path);
              }
            }
          ]),
          e
        );
      })(b["d"]);
    H = h["a"]([Object(b["a"])({ components: { RootView: T["a"] } })], H);
    var F = H,
      L = F,
      I = (n("8f5f"), n("6544")),
      P = n.n(I),
      $ = n("7496"),
      Y = n("8336"),
      R = n("a523"),
      z = n("549c"),
      W = n("0789"),
      B = n("0e8f"),
      q = n("132d"),
      E = n("a722"),
      A = n("8860"),
      N = n("ba95"),
      G = n("40fe"),
      U = n("5d23"),
      Q = n("f774"),
      Z = n("9910"),
      J = n("71d9"),
      X = n("706c"),
      K = n("2a7f"),
      tt = Object(O["a"])(L, _, V, !1, null, "701ce60a", null),
      et = tt.exports;
    P()(tt, {
      VApp: $["a"],
      VBtn: Y["a"],
      VContainer: R["a"],
      VContent: z["a"],
      VFadeTransition: W["c"],
      VFlex: B["a"],
      VIcon: q["a"],
      VLayout: E["a"],
      VList: A["a"],
      VListTile: N["a"],
      VListTileAction: G["a"],
      VListTileContent: U["a"],
      VListTileTitle: U["b"],
      VNavigationDrawer: Q["a"],
      VSpacer: Z["a"],
      VToolbar: J["a"],
      VToolbarSideIcon: X["a"],
      VToolbarTitle: K["a"]
    });
    var nt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "", md3: "" } },
                  [
                    n("v-text-field", {
                      attrs: { label: "Separator" },
                      model: {
                        value: t.separator,
                        callback: function(e) {
                          t.separator = e;
                        },
                        expression: "separator"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "", md3: "" } },
                  [
                    n("v-switch", {
                      attrs: { label: "Seconds" },
                      model: {
                        value: t.showSeconds,
                        callback: function(e) {
                          t.showSeconds = e;
                        },
                        expression: "showSeconds"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "", md3: "" } },
                  [
                    n("v-switch", {
                      attrs: { label: "Dim seconds" },
                      model: {
                        value: t.dimSeconds,
                        callback: function(e) {
                          t.dimSeconds = e;
                        },
                        expression: "dimSeconds"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "", md3: "" } },
                  [
                    n("v-switch", {
                      attrs: { label: "Dim separators" },
                      model: {
                        value: t.dimSeparators,
                        callback: function(e) {
                          t.dimSeparators = e;
                        },
                        expression: "dimSeparators"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("Styling", {
                      model: {
                        value: t.styling,
                        callback: function(e) {
                          t.styling = e;
                        },
                        expression: "styling"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      at = [],
      it = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "", "pa-0": "" } },
          [
            !1 === t.nosize || !1 === t.nopadding
              ? n(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    n(
                      "v-flex",
                      { attrs: { xs12: "", title: "", "pt-5": "" } },
                      [t._v("\n      Dimensions\n    ")]
                    ),
                    n(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        !1 === t.nosize && !1 === t.nopadding
                          ? n("NumberSet", {
                              attrs: {
                                labels: [
                                  "Width",
                                  "Height",
                                  "Top",
                                  "Right",
                                  "Bottom",
                                  "Left"
                                ],
                                min: 0,
                                step: 1,
                                units: ["px", "px", "px", "px", "px", "px"]
                              },
                              model: {
                                value: t.dimensionsFull,
                                callback: function(e) {
                                  t.dimensionsFull = e;
                                },
                                expression: "dimensionsFull"
                              }
                            })
                          : t._e(),
                        !1 !== t.nosize && !1 === t.nopadding
                          ? n("NumberSet", {
                              attrs: {
                                labels: ["Top", "Right", "Bottom", "Left"],
                                min: 0,
                                step: 1,
                                units: ["px", "px", "px", "px"]
                              },
                              model: {
                                value: t.dimensionsPadding,
                                callback: function(e) {
                                  t.dimensionsPadding = e;
                                },
                                expression: "dimensionsPadding"
                              }
                            })
                          : t._e(),
                        !1 === t.nosize && !1 !== t.nopadding
                          ? n("NumberSet", {
                              attrs: {
                                labels: ["Width", "Height"],
                                min: 0,
                                step: 1,
                                units: ["px", "px"]
                              },
                              model: {
                                value: t.dimensionsSize,
                                callback: function(e) {
                                  t.dimensionsSize = e;
                                },
                                expression: "dimensionsSize"
                              }
                            })
                          : t._e()
                      ],
                      1
                    )
                  ],
                  1
                )
              : t._e(),
            !1 === t.nofont
              ? [
                  n(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      n(
                        "v-flex",
                        { attrs: { xs12: "", title: "", "pt-5": "" } },
                        [t._v("\n        Font\n      ")]
                      ),
                      n(
                        "v-flex",
                        { attrs: { xs12: "", lg6: "" } },
                        [
                          n("v-text-field", {
                            attrs: { label: "Font family", clearable: "" },
                            model: {
                              value: t.fontFamily,
                              callback: function(e) {
                                t.fontFamily = t._n(e);
                              },
                              expression: "fontFamily"
                            }
                          })
                        ],
                        1
                      ),
                      n(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "", lg2: "" } },
                        [
                          !1 !== t.absolute
                            ? n("v-text-field", {
                                attrs: {
                                  clearable: "",
                                  label: "Font size",
                                  min: "1",
                                  step: "1",
                                  suffix: "px",
                                  type: "number"
                                },
                                model: {
                                  value: t.fontSize,
                                  callback: function(e) {
                                    t.fontSize = t._n(e);
                                  },
                                  expression: "fontSize"
                                }
                              })
                            : n("v-text-field", {
                                attrs: {
                                  clearable: "",
                                  label: "Font scale",
                                  min: "0.1",
                                  step: "0.1",
                                  type: "number"
                                },
                                model: {
                                  value: t.fontScale,
                                  callback: function(e) {
                                    t.fontScale = t._n(e);
                                  },
                                  expression: "fontScale"
                                }
                              })
                        ],
                        1
                      ),
                      n(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "", lg2: "" } },
                        [
                          n("v-text-field", {
                            attrs: {
                              label: "Line height",
                              min: "0",
                              step: "0.1",
                              type: "number",
                              clearable: ""
                            },
                            model: {
                              value: t.lineHeight,
                              callback: function(e) {
                                t.lineHeight = t._n(e);
                              },
                              expression: "lineHeight"
                            }
                          })
                        ],
                        1
                      ),
                      n(
                        "v-flex",
                        { attrs: { xs12: "", sm4: "", lg2: "" } },
                        [
                          n("v-text-field", {
                            attrs: {
                              label: "Font weight",
                              max: "1000",
                              min: "100",
                              step: "100",
                              type: "number",
                              clearable: ""
                            },
                            model: {
                              value: t.fontWeight,
                              callback: function(e) {
                                t.fontWeight = t._n(e);
                              },
                              expression: "fontWeight"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  n(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      n(
                        "v-flex",
                        { attrs: { xs12: "", md6: "" } },
                        [
                          n("v-select", {
                            attrs: {
                              items: t.items.fontVariantCaps,
                              clearable: "",
                              label: "Caps"
                            },
                            model: {
                              value: t.fontVariantCaps,
                              callback: function(e) {
                                t.fontVariantCaps = e;
                              },
                              expression: "fontVariantCaps"
                            }
                          })
                        ],
                        1
                      ),
                      n(
                        "v-flex",
                        { attrs: { xs12: "", md6: "" } },
                        [
                          n("v-select", {
                            attrs: {
                              items: t.items.fontStyle,
                              clearable: "",
                              label: "Font style"
                            },
                            model: {
                              value: t.fontStyle,
                              callback: function(e) {
                                t.fontStyle = e;
                              },
                              expression: "fontStyle"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              : t._e(),
            !1 === t.nocorners
              ? n(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    n(
                      "v-flex",
                      { attrs: { xs12: "", title: "", "pt-5": "" } },
                      [t._v("\n      Corners\n    ")]
                    ),
                    n(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        n("NumberSet", {
                          attrs: {
                            labels: [
                              "Topleft",
                              "Topright",
                              "Bottomright",
                              "Bottomleft"
                            ],
                            min: 0,
                            step: 1,
                            units: ["px", "px", "px", "px"]
                          },
                          model: {
                            value: t.borderRadiuses,
                            callback: function(e) {
                              t.borderRadiuses = e;
                            },
                            expression: "borderRadiuses"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : t._e(),
            !1 === t.animatedColors
              ? n(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    n(
                      "v-flex",
                      { attrs: { xs12: "", title: "", "pt-5": "" } },
                      [t._v("\n      Color\n    ")]
                    ),
                    !1 === t.nofont
                      ? n(
                          "v-flex",
                          { attrs: { xs12: "", md6: "" } },
                          [
                            n("Color", {
                              attrs: {
                                alpha: "",
                                clearable: "",
                                label: "Font color"
                              },
                              model: {
                                value: t.color,
                                callback: function(e) {
                                  t.color = e;
                                },
                                expression: "color"
                              }
                            })
                          ],
                          1
                        )
                      : t._e(),
                    n(
                      "v-flex",
                      { attrs: { md6: !1 === t.nofont, xs12: "" } },
                      [
                        n("Color", {
                          attrs: {
                            alpha: "",
                            clearable: "",
                            label: "Background"
                          },
                          model: {
                            value: t.backgroundColor,
                            callback: function(e) {
                              t.backgroundColor = e;
                            },
                            expression: "backgroundColor"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : t._e(),
            !1 !== t.animatedColors
              ? n(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    n(
                      "v-flex",
                      { attrs: { xs12: "", title: "", "pt-5": "" } },
                      [t._v("\n      Colors\n    ")]
                    ),
                    n(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "" } },
                      [
                        n("v-text-field", {
                          attrs: {
                            messages: [t.animationDurationMessage],
                            clearable: "",
                            label: "Animation duration",
                            min: "1",
                            step: "1",
                            suffix: "s",
                            type: "number"
                          },
                          model: {
                            value: t.animationDuration,
                            callback: function(e) {
                              t.animationDuration = t._n(e);
                            },
                            expression: "animationDuration"
                          }
                        })
                      ],
                      1
                    ),
                    n(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "" } },
                      [
                        n("DateTime", {
                          attrs: { clearable: "", label: "Animation start" },
                          model: {
                            value: t.animationStart,
                            callback: function(e) {
                              t.animationStart = e;
                            },
                            expression: "animationStart"
                          }
                        })
                      ],
                      1
                    ),
                    n(
                      "v-flex",
                      { attrs: { xs12: "", "pt-3": "" } },
                      [
                        n("ColorList", {
                          attrs: { labels: t.animationStepLabels },
                          model: {
                            value: t.animationColors,
                            callback: function(e) {
                              t.animationColors = e;
                            },
                            expression: "animationColors"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : t._e()
          ],
          2
        );
      },
      ot = [],
      rt = (n("ac6a"),
      function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "color-picker", staticStyle: { width: "200px" } },
          [
            n(
              "div",
              { staticClass: "title pa-2 white--text" },
              [
                n("v-switch", {
                  staticStyle: { display: "inline-block" },
                  attrs: {
                    disabled: !1 === t.clearable,
                    "input-value": null != t.value
                  },
                  on: {
                    change: function(e) {
                      return t.$emit("input", e ? "#ffffff" : null);
                    }
                  }
                }),
                t._v("\n    " + t._s(t.label) + "\n  ")
              ],
              1
            ),
            n("Sketch", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: null != t.value,
                  expression: "value != null"
                }
              ],
              attrs: {
                "disable-alpha": !1 === t.alpha,
                "preset-colors": t.colors,
                value: { hex: t.value }
              },
              on: {
                input: function(e) {
                  return t.$emit("input", e.hex);
                }
              }
            })
          ],
          1
        );
      }),
      st = [],
      lt = (n("8615"), n("c345")),
      ct = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "colors",
              get: function() {
                var t;
                return (t = [
                  "#ffffff",
                  "#cdcdcd",
                  "#888888",
                  "#303030",
                  "#000000"
                ]).concat.apply(
                  t,
                  Object(M["a"])(
                    Object.values(r.a).map(function(t) {
                      var e = t.base;
                      return e ? [e] : [];
                    })
                  )
                );
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], ct.prototype, "value", void 0),
      h["a"]([Object(b["c"])({ required: !0 })], ct.prototype, "label", void 0),
      h["a"](
        [Object(b["c"])({ default: !1 })],
        ct.prototype,
        "clearable",
        void 0
      ),
      h["a"]([Object(b["c"])({ default: !1 })], ct.prototype, "alpha", void 0),
      (ct = h["a"](
        [Object(b["a"])({ components: { Sketch: lt["Sketch"] } })],
        ct
      ));
    var ut = ct,
      ft = ut,
      dt = (n("5f86"), n("b73d")),
      vt = Object(O["a"])(ft, rt, st, !1, null, "107e7356", null),
      pt = vt.exports;
    P()(vt, { VSwitch: dt["a"] });
    var mt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "color-tile-grid" },
          [
            n("div", { staticClass: "header" }),
            n("div", { staticClass: "header" }, [t._v("\n    Font\n  ")]),
            n("div", { staticClass: "header" }, [t._v("\n    Background\n  ")]),
            n("div", { staticClass: "header" }),
            t._l(t.colors, function(e, a) {
              var i = e.fg,
                o = e.bg,
                r = e.fgHint;
              return [
                n("div", { key: "index-" + a, staticClass: "index" }, [
                  t._v("\n      " + t._s(a + 1) + "\n    ")
                ]),
                n("ColorTileWithHint", {
                  key: "fg-" + a,
                  staticClass: "tile",
                  attrs: { hint: r, value: i, title: "Foreground" },
                  on: {
                    input: function(e) {
                      return t.emitInput(a, "fg", e);
                    }
                  }
                }),
                n("ColorTile", {
                  key: "bg-" + a,
                  staticClass: "tile",
                  attrs: { value: o, title: "Background" },
                  on: {
                    input: function(e) {
                      return t.emitInput(a, "bg", e);
                    }
                  }
                }),
                n(
                  "div",
                  {
                    key: "label-" + a,
                    staticClass: "label",
                    attrs: { title: t.labels[a].title }
                  },
                  [t._v("\n      " + t._s(t.labels[a].text) + "\n    ")]
                )
              ];
            }),
            n(
              "div",
              { staticClass: "footer" },
              [
                n(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: t.add } },
                  [n("v-icon", [t._v("mdi-plus")])],
                  1
                ),
                n(
                  "v-btn",
                  { attrs: { icon: "" }, on: { click: t.remove } },
                  [n("v-icon", [t._v("mdi-minus")])],
                  1
                )
              ],
              1
            )
          ],
          2
        );
      },
      ht = [],
      bt = n("bd86"),
      gt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            ref: "container",
            staticClass: "color-container",
            class: t.classes
          },
          [
            n("Sketch", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showPicker,
                  expression: "showPicker"
                }
              ],
              staticClass: "color-picker",
              style: t.pickerStyle,
              attrs: {
                "preset-colors": t.colors,
                value: { hex: t.value },
                "disable-alpha": ""
              },
              on: {
                click: function(t) {
                  t.stopPropagation();
                },
                input: function(e) {
                  return t.$emit("input", e.hex);
                }
              }
            }),
            n(
              "div",
              {
                staticClass: "color-tile",
                style: t.tileStyle,
                on: {
                  click: function(e) {
                    return e.stopPropagation(), t.openPicker(e);
                  }
                }
              },
              [t._t("default")],
              2
            ),
            n("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showPicker,
                  expression: "showPicker"
                }
              ],
              staticClass: "overlay",
              on: {
                click: function(e) {
                  e.stopPropagation(), (t.showPicker = !1);
                }
              }
            })
          ],
          1
        );
      },
      yt = [],
      xt = (function(t) {
        function e() {
          var t;
          return (
            Object(f["a"])(this, e),
            (t = Object(v["a"])(
              this,
              Object(p["a"])(e).apply(this, arguments)
            )),
            (t.showPicker = !1),
            (t.pickerWidth = 220),
            (t.pickerLeft = 0),
            t
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "openPicker",
              value: function() {
                var t = this.$refs.container,
                  e = 40,
                  n = t.getBoundingClientRect(),
                  a = n.width / 2 - this.pickerWidth / 2,
                  i = 0 - (n.left + a - e),
                  o =
                    n.left +
                    a +
                    this.pickerWidth +
                    e -
                    document.body.offsetWidth;
                i > 0 && o <= 0 ? (a += i) : o > 0 && i <= 0 && (a -= o),
                  (this.pickerLeft = a),
                  (this.showPicker = !0);
              }
            },
            {
              key: "pickerStyle",
              get: function() {
                return { left: "".concat(this.pickerLeft, "px") };
              }
            },
            {
              key: "tileStyle",
              get: function() {
                return { backgroundColor: this.value };
              }
            },
            {
              key: "classes",
              get: function() {
                return { open: this.showPicker };
              }
            },
            {
              key: "colors",
              get: function() {
                var t;
                return (t = [
                  "#ffffff",
                  "#cdcdcd",
                  "#888888",
                  "#303030",
                  "#000000"
                ]).concat.apply(
                  t,
                  Object(M["a"])(
                    Object.values(r.a).map(function(t) {
                      var e = t.base;
                      return e ? [e] : [];
                    })
                  )
                );
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], xt.prototype, "value", void 0),
      (xt = h["a"](
        [Object(b["a"])({ components: { Sketch: lt["Sketch"] } })],
        xt
      ));
    var kt = xt,
      Ot = kt,
      jt = (n("7123"), Object(O["a"])(Ot, gt, yt, !1, null, "0d0ad11f", null)),
      wt = jt.exports,
      St = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "ColorTile",
          {
            attrs: { title: "Foreground" },
            model: {
              value: t.color,
              callback: function(e) {
                t.color = e;
              },
              expression: "color"
            }
          },
          [
            n("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.color !== t.hint,
                  expression: "color !== hint"
                }
              ],
              staticClass: "hint",
              style: { backgroundColor: t.hint },
              attrs: { title: "Recommended color" },
              on: {
                click: function(e) {
                  e.stopPropagation(), (t.color = t.hint);
                }
              }
            }),
            t._t("default")
          ],
          2
        );
      },
      Ct = [],
      _t = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "input",
              value: function(t) {
                return t;
              }
            },
            {
              key: "color",
              get: function() {
                return this.value;
              },
              set: function(t) {
                this.input(t);
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], _t.prototype, "value", void 0),
      h["a"]([Object(b["c"])({ required: !0 })], _t.prototype, "hint", void 0),
      h["a"]([Object(b["b"])()], _t.prototype, "input", null),
      (_t = h["a"]([Object(b["a"])({ components: { ColorTile: wt } })], _t));
    var Vt = _t,
      Dt = Vt,
      Mt = (n("8497"), Object(O["a"])(Dt, St, Ct, !1, null, "348a6fa0", null)),
      Tt = Mt.exports,
      Ht = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "getFgHint",
              value: function(t) {
                return this.isColorLight(t) ? "#000000" : "#ffffff";
              }
            },
            {
              key: "isColorLight",
              value: function(t) {
                var e = parseInt(t.slice(1, 3), 16),
                  n = parseInt(t.slice(3, 5), 16),
                  a = parseInt(t.slice(5, 7), 16),
                  i = Math.sqrt(e * e * 0.299 + n * n * 0.587 + a * a * 0.114);
                return i > 127.5;
              }
            },
            {
              key: "add",
              value: function() {
                var t = this.colorPool[
                    Math.floor(this.colorPool.length * Math.random())
                  ],
                  e = this.getFgHint(t);
                return [].concat(Object(M["a"])(this.value), [
                  { fg: e, bg: t }
                ]);
              }
            },
            {
              key: "remove",
              value: function() {
                return this.value.slice(0, -1);
              }
            },
            {
              key: "emitInput",
              value: function(t, e, n) {
                return [].concat(
                  Object(M["a"])(this.value.slice(0, t)),
                  [
                    Object(D["a"])({}, this.value[t], Object(bt["a"])({}, e, n))
                  ],
                  Object(M["a"])(this.value.slice(t + 1))
                );
              }
            },
            {
              key: "colors",
              get: function() {
                var t = this;
                return this.value.map(function(e) {
                  var n = e.fg,
                    a = e.bg;
                  return { fg: n, bg: a, fgHint: t.getFgHint(a) };
                });
              }
            },
            {
              key: "colorPool",
              get: function() {
                return Object.values(r.a)
                  .map(function(t) {
                    return Object.values(t);
                  })
                  .flat(1);
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], Ht.prototype, "value", void 0),
      h["a"](
        [
          Object(b["c"])({
            default: function() {
              return [];
            }
          })
        ],
        Ht.prototype,
        "labels",
        void 0
      ),
      h["a"]([Object(b["b"])("input")], Ht.prototype, "add", null),
      h["a"]([Object(b["b"])("input")], Ht.prototype, "remove", null),
      h["a"]([Object(b["b"])("input")], Ht.prototype, "emitInput", null),
      (Ht = h["a"](
        [
          Object(b["a"])({
            components: { ColorTile: wt, ColorTileWithHint: Tt }
          })
        ],
        Ht
      ));
    var Ft = Ht,
      Lt = Ft,
      It = (n("d849"), Object(O["a"])(Lt, mt, ht, !1, null, "4df2e309", null)),
      Pt = It.exports;
    P()(It, { VBtn: Y["a"], VIcon: q["a"] });
    var $t = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-layout",
          { attrs: { row: "", wrap: "" } },
          [
            n(
              "v-flex",
              { attrs: { xs12: "", sm6: "", md4: "" } },
              [
                n(
                  "v-menu",
                  {
                    attrs: {
                      "close-on-content-click": !1,
                      lazy: "",
                      transition: "scale-transition",
                      "offset-y": "",
                      "full-width": ""
                    },
                    model: {
                      value: t.showDate,
                      callback: function(e) {
                        t.showDate = e;
                      },
                      expression: "showDate"
                    }
                  },
                  [
                    n("v-text-field", {
                      attrs: {
                        slot: "activator",
                        label: t.label,
                        readonly: ""
                      },
                      slot: "activator",
                      model: {
                        value: t.date,
                        callback: function(e) {
                          t.date = e;
                        },
                        expression: "date"
                      }
                    }),
                    n(
                      "v-date-picker",
                      {
                        attrs: { type: "date" },
                        model: {
                          value: t.date,
                          callback: function(e) {
                            t.date = e;
                          },
                          expression: "date"
                        }
                      },
                      [
                        n("v-spacer"),
                        n(
                          "v-btn",
                          {
                            attrs: { flat: "" },
                            on: {
                              click: function(e) {
                                t.showDate = !1;
                              }
                            }
                          },
                          [t._v("\n          Okay\n        ")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            n(
              "v-flex",
              { attrs: { xs12: "", sm6: "", md4: "" } },
              [
                n(
                  "v-menu",
                  {
                    attrs: {
                      "close-on-content-click": !1,
                      lazy: "",
                      transition: "scale-transition",
                      "offset-y": "",
                      "full-width": ""
                    },
                    model: {
                      value: t.showTime,
                      callback: function(e) {
                        t.showTime = e;
                      },
                      expression: "showTime"
                    }
                  },
                  [
                    n("v-text-field", {
                      attrs: { slot: "activator", label: "Time", readonly: "" },
                      slot: "activator",
                      model: {
                        value: t.time,
                        callback: function(e) {
                          t.time = e;
                        },
                        expression: "time"
                      }
                    }),
                    n(
                      "v-time-picker",
                      {
                        attrs: { format: "24hr" },
                        model: {
                          value: t.time,
                          callback: function(e) {
                            t.time = e;
                          },
                          expression: "time"
                        }
                      },
                      [
                        n("v-spacer"),
                        n(
                          "v-btn",
                          {
                            attrs: { flat: "" },
                            on: {
                              click: function(e) {
                                t.showTime = !1;
                              }
                            }
                          },
                          [t._v("\n          Okay\n        ")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            n(
              "v-flex",
              { attrs: { xs12: "", sm6: "", md4: "" } },
              [
                n("v-text-field", {
                  attrs: { clearable: "", label: "Seconds", type: "number" },
                  model: {
                    value: t.seconds,
                    callback: function(e) {
                      t.seconds = t._n(e);
                    },
                    expression: "seconds"
                  }
                })
              ],
              1
            )
          ],
          1
        );
      },
      Yt = [],
      Rt = (n("28a5"), n("768b")),
      zt = n("70f2"),
      Wt = n.n(zt),
      Bt = (function(t) {
        function e() {
          var t;
          return (
            Object(f["a"])(this, e),
            (t = Object(v["a"])(
              this,
              Object(p["a"])(e).apply(this, arguments)
            )),
            (t.showDate = !1),
            (t.showTime = !1),
            t
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "newDate",
              value: function() {
                if (null != this.value) return new Date(this.value);
                var t = new Date();
                return t.setHours(0, 0, 0, 0), t;
              }
            },
            {
              key: "input",
              value: function(t) {
                return t;
              }
            },
            {
              key: "date",
              get: function() {
                return null != this.value ? Wt()(this.value, "YYYY-MM-DD") : "";
              },
              set: function(t) {
                var e = this.newDate(),
                  n = t.split("-"),
                  a = Object(Rt["a"])(n, 3),
                  i = a[0],
                  o = a[1],
                  r = a[2];
                e.setFullYear(+i, +o - 1, +r), this.input(+e);
              }
            },
            {
              key: "time",
              get: function() {
                return null != this.value ? Wt()(this.value, "HH:mm") : "";
              },
              set: function(t) {
                var e = this.newDate(),
                  n = t.split(":"),
                  a = Object(Rt["a"])(n, 2),
                  i = a[0],
                  o = a[1];
                e.setHours(+i, +o), this.input(+e);
              }
            },
            {
              key: "seconds",
              get: function() {
                if (null != this.value) {
                  var t = new Date(this.value);
                  return t.getSeconds() + t.getMilliseconds() / 1e3;
                }
                return null;
              },
              set: function(t) {
                if (null != t) {
                  var e = this.newDate();
                  e.setSeconds(t), this.input(+e);
                } else this.input(null);
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"](
      [Object(b["c"])({ default: "Date" })],
      Bt.prototype,
      "label",
      void 0
    ),
      h["a"]([Object(b["c"])({ required: !0 })], Bt.prototype, "value", void 0),
      h["a"]([Object(b["b"])()], Bt.prototype, "input", null),
      (Bt = h["a"]([b["a"]], Bt));
    var qt = Bt,
      Et = qt,
      At = n("2e4b"),
      Nt = n("e449"),
      Gt = n("2677"),
      Ut = n("c964"),
      Qt = Object(O["a"])(Et, $t, Yt, !1, null, null, null),
      Zt = Qt.exports;
    P()(Qt, {
      VBtn: Y["a"],
      VDatePicker: At["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VMenu: Nt["a"],
      VSpacer: Z["a"],
      VTextField: Gt["a"],
      VTimePicker: Ut["a"]
    });
    var Jt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-layout",
          { attrs: { row: "", wrap: "" } },
          t._l(t.value, function(e, a) {
            return n(
              "v-flex",
              t._b({ key: a }, "v-flex", t.flexSizing, !1),
              [
                n("v-text-field", {
                  attrs: {
                    label: t.labels[a],
                    max: t.max,
                    min: t.min,
                    step: t.step,
                    suffix: t.units[a],
                    value: e,
                    clearable: "",
                    type: "number"
                  },
                  on: {
                    input: function(e) {
                      return t.emitUpdate(a, parseFloat(e));
                    }
                  }
                })
              ],
              1
            );
          }),
          1
        );
      },
      Xt = [],
      Kt = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "emitUpdate",
              value: function(t, e) {
                return [].concat(
                  Object(M["a"])(this.value.slice(0, t)),
                  [isNaN(e) ? null : e],
                  Object(M["a"])(this.value.slice(t + 1))
                );
              }
            },
            {
              key: "flexSizing",
              get: function() {
                return this.value.length <= 1
                  ? { xs12: !0 }
                  : this.value.length <= 2
                    ? { xs12: !0, sm6: !0 }
                    : this.value.length <= 3
                      ? { xs12: !0, sm6: !0, md4: !0 }
                      : this.value.length <= 4
                        ? { xs12: !0, sm6: !0, md3: !0 }
                        : this.value.length <= 6
                          ? { xs12: !0, sm6: !0, md4: !0, lg2: !0 }
                          : { xs12: !0, sm6: !0, md3: !0, lg2: !0, xl1: !0 };
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], Kt.prototype, "value", void 0),
      h["a"](
        [Object(b["c"])({ required: !0 })],
        Kt.prototype,
        "labels",
        void 0
      ),
      h["a"](
        [
          Object(b["c"])({
            default: function() {
              return [];
            }
          })
        ],
        Kt.prototype,
        "units",
        void 0
      ),
      h["a"](
        [Object(b["c"])({ default: void 0 })],
        Kt.prototype,
        "max",
        void 0
      ),
      h["a"](
        [Object(b["c"])({ default: void 0 })],
        Kt.prototype,
        "min",
        void 0
      ),
      h["a"](
        [Object(b["c"])({ default: void 0 })],
        Kt.prototype,
        "step",
        void 0
      ),
      h["a"]([Object(b["b"])("input")], Kt.prototype, "emitUpdate", null),
      (Kt = h["a"]([b["a"]], Kt));
    var te = Kt,
      ee = te,
      ne = Object(O["a"])(ee, Jt, Xt, !1, null, null, null),
      ae = ne.exports;
    P()(ne, { VFlex: B["a"], VLayout: E["a"], VTextField: Gt["a"] });
    var ie = (function(t) {
      function e() {
        var t;
        return (
          Object(f["a"])(this, e),
          (t = Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))),
          (t.items = {
            fontStyle: [
              { text: "Normal", value: "normal" },
              { text: "Italic", value: "italic" },
              { text: "Oblique", value: "oblique" }
            ],
            fontVariantCaps: [
              { text: "Normal", value: "normal" },
              { text: "Small caps", value: "small-caps" },
              { text: "All small caps", value: "all-small-caps" }
            ]
          }),
          t
        );
      }
      return (
        Object(m["a"])(e, t),
        Object(d["a"])(e, [
          {
            key: "emitStylingChange",
            value: function(t, e) {
              this.emitStylingChanges([{ key: t, value: e }]);
            }
          },
          {
            key: "emitStylingChanges",
            value: function(t) {
              var e = Object(D["a"])({}, this.value);
              return (
                t.forEach(function(t) {
                  var n = t.key,
                    a = t.value;
                  e[n] = a;
                }),
                e
              );
            }
          },
          {
            key: "animationColors",
            get: function() {
              return this.value.animationColors;
            },
            set: function(t) {
              this.emitStylingChange("animationColors", t);
            }
          },
          {
            key: "animationDuration",
            get: function() {
              return null != this.value.animationDuration
                ? this.value.animationDuration / 1e3
                : null;
            },
            set: function(t) {
              this.emitStylingChange(
                "animationDuration",
                null != t ? 1e3 * t : void 0
              );
            }
          },
          {
            key: "animationDurationMessage",
            get: function() {
              if (!this.value.animationDuration) return "";
              var t = [],
                e = Math.floor(
                  this.value.animationDuration / 1e3 / 60 / 60 / 24
                );
              e > 0 && t.push("".concat(e, "&nbsp;d"));
              var n = Math.floor(
                (this.value.animationDuration / 1e3 / 60 / 60) % 24
              );
              n > 0 && t.push("".concat(n, "&nbsp;h"));
              var a = Math.floor(
                (this.value.animationDuration / 1e3 / 60) % 60
              );
              a > 0 && t.push("".concat(a, "&nbsp;m"));
              var i = Math.floor((this.value.animationDuration / 1e3) % 60);
              i > 0 && t.push("".concat(i, "&nbsp;s"));
              var o = Math.floor(this.value.animationDuration % 1e3);
              return o > 0 && t.push("".concat(o, "&nbsp;ms")), t.join(", ");
            }
          },
          {
            key: "animationStart",
            get: function() {
              return this.value.animationStart;
            },
            set: function(t) {
              this.emitStylingChange("animationStart", t);
            }
          },
          {
            key: "animationStepLabels",
            get: function() {
              var t = this,
                e = this.value.animationColors || [],
                n = this.value.animationDuration,
                a = this.value.animationStart;
              if (null != n && null != a) {
                var i = n / e.length;
                return e.map(function(e, n) {
                  var o = Math.round(a + n * i);
                  return {
                    text: Wt()(o, t.animationStepLabelFormat),
                    title: new Date(o).toLocaleString()
                  };
                });
              }
              return e.map(function() {
                return { text: "", title: "" };
              });
            }
          },
          {
            key: "animationStepLabelFormat",
            get: function() {
              var t = this.value.animationDuration;
              return null == t
                ? "[]"
                : t <= 6e4
                  ? "ss.SSS"
                  : t <= 36e5
                    ? "HH:mm:ss.SSS"
                    : t <= 864e5
                      ? "HH:mm:ss"
                      : t <= 31536e6
                        ? "MM/DD - HH:mm:ss"
                        : "YYYY/MM/DD - HH:mm:ss.SSS";
            }
          },
          {
            key: "fontStyle",
            get: function() {
              return this.value.fontStyle;
            },
            set: function(t) {
              this.emitStylingChange("fontStyle", t);
            }
          },
          {
            key: "fontVariantCaps",
            get: function() {
              return this.value.fontVariantCaps;
            },
            set: function(t) {
              this.emitStylingChange("fontVariantCaps", t);
            }
          },
          {
            key: "fontFamily",
            get: function() {
              return this.value.fontFamily;
            },
            set: function(t) {
              this.emitStylingChange("fontFamily", t);
            }
          },
          {
            key: "fontSize",
            get: function() {
              return this.value.fontSize;
            },
            set: function(t) {
              this.emitStylingChange("fontSize", t);
            }
          },
          {
            key: "fontScale",
            get: function() {
              return this.value.fontScale;
            },
            set: function(t) {
              this.emitStylingChange("fontScale", t);
            }
          },
          {
            key: "lineHeight",
            get: function() {
              return this.value.lineHeight;
            },
            set: function(t) {
              this.emitStylingChange("lineHeight", t);
            }
          },
          {
            key: "fontWeight",
            get: function() {
              return this.value.fontWeight;
            },
            set: function(t) {
              this.emitStylingChange("fontWeight", t);
            }
          },
          {
            key: "color",
            get: function() {
              return this.value.color;
            },
            set: function(t) {
              this.emitStylingChange("color", t);
            }
          },
          {
            key: "backgroundColor",
            get: function() {
              return this.value.backgroundColor;
            },
            set: function(t) {
              this.emitStylingChange("backgroundColor", t);
            }
          },
          {
            key: "dimensionsFull",
            get: function() {
              return [].concat(
                Object(M["a"])(this.dimensionsSize),
                Object(M["a"])(this.dimensionsPadding)
              );
            },
            set: function(t) {
              this.emitStylingChanges([
                { key: "width", value: t[0] },
                { key: "height", value: t[1] },
                { key: "paddingTop", value: t[2] },
                { key: "paddingRight", value: t[3] },
                { key: "paddingBottom", value: t[4] },
                { key: "paddingLeft", value: t[5] }
              ]);
            }
          },
          {
            key: "dimensionsSize",
            get: function() {
              return [this.value.width, this.value.height];
            },
            set: function(t) {
              this.emitStylingChanges([
                { key: "width", value: t[0] },
                { key: "height", value: t[1] }
              ]);
            }
          },
          {
            key: "dimensionsPadding",
            get: function() {
              return [
                this.value.paddingTop,
                this.value.paddingRight,
                this.value.paddingBottom,
                this.value.paddingLeft
              ];
            },
            set: function(t) {
              this.emitStylingChanges([
                { key: "paddingTop", value: t[0] },
                { key: "paddingRight", value: t[1] },
                { key: "paddingBottom", value: t[2] },
                { key: "paddingLeft", value: t[3] }
              ]);
            }
          },
          {
            key: "borderRadiuses",
            get: function() {
              return [
                this.value.borderTopLeftRadius,
                this.value.borderTopRightRadius,
                this.value.borderBottomRightRadius,
                this.value.borderBottomLeftRadius
              ];
            },
            set: function(t) {
              this.emitStylingChanges([
                { key: "borderTopLeftRadius", value: t[0] },
                { key: "borderTopRightRadius", value: t[1] },
                { key: "borderBottomRightRadius", value: t[2] },
                { key: "borderBottomLeftRadius", value: t[3] }
              ]);
            }
          }
        ]),
        e
      );
    })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], ie.prototype, "value", void 0),
      h["a"](
        [Object(b["c"])({ default: !1 })],
        ie.prototype,
        "absolute",
        void 0
      ),
      h["a"]([Object(b["c"])({ default: !1 })], ie.prototype, "nofont", void 0),
      h["a"]([Object(b["c"])({ default: !1 })], ie.prototype, "nosize", void 0),
      h["a"](
        [Object(b["c"])({ default: !1 })],
        ie.prototype,
        "nopadding",
        void 0
      ),
      h["a"](
        [Object(b["c"])({ default: !1 })],
        ie.prototype,
        "nocorners",
        void 0
      ),
      h["a"](
        [Object(b["c"])({ default: !1 })],
        ie.prototype,
        "animatedColors",
        void 0
      ),
      h["a"](
        [Object(b["b"])("input")],
        ie.prototype,
        "emitStylingChanges",
        null
      ),
      (ie = h["a"](
        [
          Object(b["a"])({
            components: {
              Color: pt,
              ColorList: Pt,
              DateTime: Zt,
              NumberSet: ae
            }
          })
        ],
        ie
      ));
    var oe = ie,
      re = oe,
      se = n("b56d"),
      le = Object(O["a"])(re, it, ot, !1, null, null, null),
      ce = le.exports;
    P()(le, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VSelect: se["a"],
      VTextField: Gt["a"]
    });
    var ue = (function(t) {
      function e() {
        return (
          Object(f["a"])(this, e),
          Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
        );
      }
      return (
        Object(m["a"])(e, t),
        Object(d["a"])(e, [
          {
            key: "setConfig",
            value: function(t) {
              g["f"].setConfig({
                id: this.widgetId,
                config: Object(D["a"])({}, this.config, t)
              });
            }
          },
          {
            key: "config",
            get: function() {
              return g["f"].configs[this.widgetId];
            }
          },
          {
            key: "styling",
            get: function() {
              return this.config.styling;
            },
            set: function(t) {
              this.setConfig({ styling: t });
            }
          },
          {
            key: "separator",
            get: function() {
              return this.config.separator;
            },
            set: function(t) {
              this.setConfig({ separator: t });
            }
          },
          {
            key: "showSeconds",
            get: function() {
              return this.config.showSeconds;
            },
            set: function(t) {
              this.setConfig({ showSeconds: t });
            }
          },
          {
            key: "dimSeconds",
            get: function() {
              return this.config.dimSeconds;
            },
            set: function(t) {
              this.setConfig({ dimSeconds: t });
            }
          },
          {
            key: "dimSeparators",
            get: function() {
              return this.config.dimSeparators;
            },
            set: function(t) {
              this.setConfig({ dimSeparators: t });
            }
          }
        ]),
        e
      );
    })(b["d"]);
    h["a"](
      [Object(b["c"])({ required: !0 })],
      ue.prototype,
      "widgetId",
      void 0
    ),
      (ue = h["a"]([Object(b["a"])({ components: { Styling: ce } })], ue));
    var fe = ue,
      de = fe,
      ve = Object(O["a"])(de, nt, at, !1, null, "46e310de", null),
      pe = ve.exports;
    P()(ve, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VSwitch: dt["a"],
      VTextField: Gt["a"]
    });
    var me = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("v-switch", {
                      attrs: { label: "Fade in" },
                      model: {
                        value: t.fadeIn,
                        callback: function(e) {
                          t.fadeIn = e;
                        },
                        expression: "fadeIn"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("Styling", {
                      attrs: {
                        absolute: "",
                        "animated-colors": "",
                        nosize: "",
                        nocorners: ""
                      },
                      model: {
                        value: t.styling,
                        callback: function(e) {
                          t.styling = e;
                        },
                        expression: "styling"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      he = [],
      be = (function(t) {
        function e() {
          var t;
          return (
            Object(f["a"])(this, e),
            (t = Object(v["a"])(
              this,
              Object(p["a"])(e).apply(this, arguments)
            )),
            (t.storeModule = g["b"]),
            t
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "styling",
              get: function() {
                return this.storeModule.styling;
              },
              set: function(t) {
                this.storeModule.setStyling(t);
              }
            },
            {
              key: "fadeIn",
              get: function() {
                return this.storeModule.fadeIn;
              },
              set: function(t) {
                this.storeModule.setFadeIn(t);
              }
            }
          ]),
          e
        );
      })(b["d"]);
    be = h["a"](
      [Object(b["a"])({ components: { Color: pt, Styling: ce } })],
      be
    );
    var ge = be,
      ye = ge,
      xe = Object(O["a"])(ye, me, he, !1, null, "6e15cb8f", null),
      ke = xe.exports;
    P()(xe, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VSwitch: dt["a"]
    });
    var Oe = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("v-text-field", {
                      attrs: { clearable: "", label: "Format" },
                      model: {
                        value: t.formatString,
                        callback: function(e) {
                          t.formatString = e;
                        },
                        expression: "formatString"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("v-autocomplete", {
                      attrs: {
                        items: t.formatStringItems,
                        label: "Append to format"
                      },
                      on: {
                        change: function(e) {
                          return (t.formatString += e);
                        }
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("Styling", {
                      model: {
                        value: t.styling,
                        callback: function(e) {
                          t.styling = e;
                        },
                        expression: "styling"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      je = [],
      we = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "setConfig",
              value: function(t) {
                g["f"].setConfig({
                  id: this.widgetId,
                  config: Object(D["a"])({}, this.config, t)
                });
              }
            },
            {
              key: "computeUpdateRate",
              value: function(t) {
                var e = new Date(0),
                  n = new Date(e);
                function a() {
                  return Wt()(e, t) !== Wt()(n, t);
                }
                return (
                  n.setMilliseconds(9),
                  a()
                    ? g["a"].Milliseconds
                    : (n.setMilliseconds(99),
                      a()
                        ? g["a"].Centiseconds
                        : (n.setMilliseconds(999),
                          a()
                            ? g["a"].Deciseconds
                            : (n.setSeconds(59),
                              a()
                                ? g["a"].Seconds
                                : (n.setMinutes(59),
                                  a()
                                    ? g["a"].Minutes
                                    : (n.setHours(23),
                                      a() ? g["a"].Hours : g["a"].Days)))))
                );
              }
            },
            {
              key: "config",
              get: function() {
                return g["f"].configs[this.widgetId];
              }
            },
            {
              key: "styling",
              get: function() {
                return this.config.styling;
              },
              set: function(t) {
                this.setConfig({ styling: t });
              }
            },
            {
              key: "formatString",
              get: function() {
                return this.config.formatString;
              },
              set: function(t) {
                var e = t || " ";
                this.setConfig({
                  formatString: e,
                  updateRate: this.computeUpdateRate(e)
                });
              }
            },
            {
              key: "formatStringItems",
              get: function() {
                return [
                  {
                    text: "Date and time",
                    value: "dddd, MMMM D, YYYY - HH:mm:ss"
                  },
                  { text: "Date", value: "dddd, MMMM D, YYYY" },
                  { text: "Date", value: "YYYY/MM/DD" },
                  { text: "Date", value: "D. M. YYYY" },
                  { text: "Time", value: "H:mm" },
                  { text: "Time", value: "HH:mm" },
                  { text: "Time", value: "H:mm:ss" },
                  { text: "Time", value: "HH:mm:ss" },
                  { text: "Week", value: "[Week] W" },
                  { text: "Month", value: "M" },
                  { text: "Month", value: "Mo" },
                  { text: "Month", value: "MM" },
                  { text: "Month", value: "MMM" },
                  { text: "Month", value: "MMMM" },
                  { text: "Quarter", value: "Q" },
                  { text: "Quarter", value: "Qo" },
                  { text: "Day of month", value: "D" },
                  { text: "Day of month", value: "Do" },
                  { text: "Day of month", value: "DD" },
                  { text: "Day of year", value: "DDD" },
                  { text: "Day of year", value: "DDDo" },
                  { text: "Day of year", value: "DDDD" },
                  { text: "Day of week", value: "d" },
                  { text: "Day of week", value: "do" },
                  { text: "Day of week", value: "dd" },
                  { text: "Day of week", value: "ddd" },
                  { text: "Day of week", value: "dddd" },
                  { text: "Day of ISO week", value: "E" },
                  { text: "ISO week", value: "W" },
                  { text: "ISO week", value: "Wo" },
                  { text: "ISO week", value: "WW" },
                  { text: "Year", value: "YY" },
                  { text: "Year", value: "YYYY" },
                  { text: "ISO week-numbering year", value: "GG" },
                  { text: "ISO week-numbering year", value: "GGGG" },
                  { text: "AM/PM", value: "A" },
                  { text: "AM/PM", value: "a" },
                  { text: "AM/PM", value: "aa" },
                  { text: "Hour", value: "H" },
                  { text: "Hour", value: "HH" },
                  { text: "Hour", value: "h" },
                  { text: "Hour", value: "hh" },
                  { text: "Minute", value: "m" },
                  { text: "Minute", value: "mm" },
                  { text: "Second", value: "s" },
                  { text: "Second", value: "ss" },
                  { text: "1/10 of second", value: "S" },
                  { text: "1/100 of second", value: "SS" },
                  { text: "Millisecond", value: "SSS" },
                  { text: "Timezone", value: "Z" },
                  { text: "Timezone", value: "ZZ" },
                  { text: "Seconds timestamp", value: "X" },
                  { text: "Milliseconds timestamp", value: "x" }
                ].map(function(t) {
                  var e = t.text,
                    n = t.value;
                  return {
                    text: "".concat(e, ": ").concat(Wt()(1111, n)),
                    value: n
                  };
                });
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"](
      [Object(b["c"])({ required: !0 })],
      we.prototype,
      "widgetId",
      void 0
    ),
      (we = h["a"]([Object(b["a"])({ components: { Styling: ce } })], we));
    var Se = we,
      Ce = Se,
      _e = n("c6a6"),
      Ve = Object(O["a"])(Ce, Oe, je, !1, null, "c6090f52", null),
      De = Ve.exports;
    P()(Ve, {
      VAutocomplete: _e["a"],
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VTextField: Gt["a"]
    });
    var Me = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("v-textarea", {
                      attrs: { "auto-grow": "", label: "Text" },
                      model: {
                        value: t.text,
                        callback: function(e) {
                          t.text = e;
                        },
                        expression: "text"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("Styling", {
                      model: {
                        value: t.styling,
                        callback: function(e) {
                          t.styling = e;
                        },
                        expression: "styling"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      Te = [],
      He = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "setConfig",
              value: function(t) {
                g["f"].setConfig({
                  id: this.widgetId,
                  config: Object(D["a"])({}, this.config, t)
                });
              }
            },
            {
              key: "config",
              get: function() {
                return g["f"].configs[this.widgetId];
              }
            },
            {
              key: "styling",
              get: function() {
                return this.config.styling;
              },
              set: function(t) {
                this.setConfig({ styling: t });
              }
            },
            {
              key: "text",
              get: function() {
                return this.config.text;
              },
              set: function(t) {
                this.setConfig({ text: t });
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"](
      [Object(b["c"])({ required: !0 })],
      He.prototype,
      "widgetId",
      void 0
    ),
      (He = h["a"]([Object(b["a"])({ components: { Styling: ce } })], He));
    var Fe = He,
      Le = Fe,
      Ie = n("a844"),
      Pe = Object(O["a"])(Le, Me, Te, !1, null, null, null),
      $e = Pe.exports;
    P()(Pe, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VTextarea: Ie["a"]
    });
    var Ye = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [
                    n("v-text-field", {
                      attrs: {
                        min: 0,
                        step: 1,
                        label: "Fill available space (flex grow)",
                        type: "number"
                      },
                      model: {
                        value: t.flexGrow,
                        callback: function(e) {
                          t.flexGrow = t._n(e);
                        },
                        expression: "flexGrow"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [
                    n("v-text-field", {
                      attrs: {
                        min: 0,
                        step: 1,
                        label: "Minimum height",
                        type: "number"
                      },
                      model: {
                        value: t.minHeight,
                        callback: function(e) {
                          t.minHeight = t._n(e);
                        },
                        expression: "minHeight"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      Re = [],
      ze = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "setConfig",
              value: function(t) {
                g["f"].setConfig({
                  id: this.widgetId,
                  config: Object(D["a"])({}, this.config, t)
                });
              }
            },
            {
              key: "setStyling",
              value: function(t) {
                this.setConfig({
                  styling: Object(D["a"])({}, this.styling, t)
                });
              }
            },
            {
              key: "config",
              get: function() {
                return g["f"].configs[this.widgetId];
              }
            },
            {
              key: "styling",
              get: function() {
                return this.config.styling;
              },
              set: function(t) {
                this.setConfig({ styling: t });
              }
            },
            {
              key: "flexGrow",
              get: function() {
                return this.styling.flexGrow;
              },
              set: function(t) {
                this.setStyling({ flexGrow: t });
              }
            },
            {
              key: "minHeight",
              get: function() {
                return this.styling.minHeight;
              },
              set: function(t) {
                this.setStyling({ minHeight: t });
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"](
      [Object(b["c"])({ required: !0 })],
      ze.prototype,
      "widgetId",
      void 0
    ),
      (ze = h["a"]([Object(b["a"])({ components: { Styling: ce } })], ze));
    var We = ze,
      Be = We,
      qe = Object(O["a"])(Be, Ye, Re, !1, null, null, null),
      Ee = qe.exports;
    P()(qe, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VTextField: Gt["a"]
    });
    var Ae = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [
                    n("v-text-field", {
                      attrs: { label: "Amount", type: "number" },
                      model: {
                        value: t.amount,
                        callback: function(e) {
                          t.amount = t._n(e);
                        },
                        expression: "amount"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [
                    n("v-text-field", {
                      attrs: {
                        label: "Speed",
                        type: "number",
                        suffix: "per hour"
                      },
                      model: {
                        value: t.speed,
                        callback: function(e) {
                          t.speed = t._n(e);
                        },
                        expression: "speed"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("v-text-field", {
                      attrs: { label: "Symbols", clearable: "" },
                      model: {
                        value: t.symbols,
                        callback: function(e) {
                          t.symbols = e;
                        },
                        expression: "symbols"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      Ne = [],
      Ge = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "setConfig",
              value: function(t) {
                g["f"].setConfig({
                  id: this.widgetId,
                  config: Object(D["a"])({}, this.config, t)
                });
              }
            },
            {
              key: "config",
              get: function() {
                return g["f"].configs[this.widgetId];
              }
            },
            {
              key: "amount",
              get: function() {
                return this.config.amount;
              },
              set: function(t) {
                this.setConfig({ amount: t });
              }
            },
            {
              key: "speed",
              get: function() {
                return this.config.speed;
              },
              set: function(t) {
                this.setConfig({ speed: t });
              }
            },
            {
              key: "symbols",
              get: function() {
                return this.config.symbols.join("");
              },
              set: function(t) {
                this.setConfig({
                  symbols: t && t.length ? t.split("") : g["d"].snow.symbols
                });
              }
            }
          ]),
          e
        );
      })(b["d"]);
    h["a"](
      [Object(b["c"])({ required: !0 })],
      Ge.prototype,
      "widgetId",
      void 0
    ),
      (Ge = h["a"]([b["a"]], Ge));
    var Ue = Ge,
      Qe = Ue,
      Ze = Object(O["a"])(Qe, Ae, Ne, !1, null, null, null),
      Je = Ze.exports;
    P()(Ze, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VTextField: Gt["a"]
    });
    var Xe = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    n("v-textarea", {
                      attrs: { "auto-grow": "", label: "CSS", rows: "10" },
                      model: {
                        value: t.style,
                        callback: function(e) {
                          t.style = e;
                        },
                        expression: "style"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      Ke = [],
      tn = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return (
          Object(m["a"])(e, t),
          Object(d["a"])(e, [
            {
              key: "style",
              get: function() {
                return g["b"].style;
              },
              set: function(t) {
                g["b"].setStyle(t);
              }
            }
          ]),
          e
        );
      })(b["d"]);
    tn = h["a"]([b["a"]], tn);
    var en = tn,
      nn = en,
      an = Object(O["a"])(nn, Xe, Ke, !1, null, null, null),
      on = an.exports;
    P()(an, {
      VContainer: R["a"],
      VFlex: B["a"],
      VLayout: E["a"],
      VTextarea: Ie["a"]
    });
    var rn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { attrs: { "grid-list-md": "" } },
          [
            n(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [
                    n("DraggableWidgetList", {
                      attrs: {
                        widgets: [].concat(t.available),
                        header: "Available"
                      }
                    })
                  ],
                  1
                ),
                n(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [
                    n("DraggableWidgetList", {
                      attrs: { widgets: [].concat(t.active), header: "Active" },
                      on: { change: t.updateActive }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      sn = [],
      ln = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-list",
          { attrs: { "two-line": "" } },
          [
            n("v-subheader", [t._v("\n    " + t._s(t.header) + "\n  ")]),
            n(
              "draggable",
              {
                attrs: { value: t.widgets, group: "modules" },
                on: {
                  change: function(e) {
                    return t.$emit("change", e);
                  }
                }
              },
              t._l(t.widgets, function(e) {
                var a = e.name,
                  i = e.icon,
                  o = e.id,
                  r = e.key;
                return n(
                  "v-list-tile",
                  {
                    key: r,
                    staticClass: "draggable",
                    attrs: { id: o, icon: i, name: a, avatar: "" }
                  },
                  [
                    n(
                      "v-list-tile-avatar",
                      [
                        n("v-icon", [
                          t._v("\n          " + t._s(i) + "\n        ")
                        ])
                      ],
                      1
                    ),
                    n(
                      "v-list-tile-content",
                      [
                        n("v-list-tile-title", [
                          t._v("\n          " + t._s(a) + "\n          "),
                          n("sup", [t._v(t._s(o))])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                );
              }),
              1
            )
          ],
          1
        );
      },
      cn = [],
      un = n("1980"),
      fn = n.n(un),
      dn = (function(t) {
        function e() {
          return (
            Object(f["a"])(this, e),
            Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
          );
        }
        return Object(m["a"])(e, t), e;
      })(b["d"]);
    h["a"]([Object(b["c"])({ required: !0 })], dn.prototype, "header", void 0),
      h["a"](
        [Object(b["c"])({ required: !0 })],
        dn.prototype,
        "widgets",
        void 0
      ),
      (dn = h["a"]([Object(b["a"])({ components: { draggable: fn.a } })], dn));
    var vn = dn,
      pn = vn,
      mn = (n("dede"), n("c954")),
      hn = n("e0c7"),
      bn = Object(O["a"])(pn, ln, cn, !1, null, "824133a4", null),
      gn = bn.exports;
    P()(bn, {
      VIcon: q["a"],
      VList: A["a"],
      VListTile: N["a"],
      VListTileAvatar: mn["a"],
      VListTileContent: U["a"],
      VListTileTitle: U["b"],
      VSubheader: hn["a"]
    });
    var yn = (function(t) {
      function e() {
        return (
          Object(f["a"])(this, e),
          Object(v["a"])(this, Object(p["a"])(e).apply(this, arguments))
        );
      }
      return (
        Object(m["a"])(e, t),
        Object(d["a"])(e, [
          {
            key: "updateActive",
            value: function(t) {
              var e = t.added,
                n = t.removed,
                a = t.moved;
              e && g["f"].add({ id: e.newIndex, type: e.element.type }),
                n && g["f"].delete({ id: n.oldIndex }),
                a && g["f"].reorder({ oldId: a.oldIndex, newId: a.newIndex });
            }
          },
          {
            key: "active",
            get: function() {
              return g["f"].active.map(function(t, e) {
                var n = t.type,
                  a = t.id;
                return Object(
                  D["a"]
                )({ id: a, key: "a".concat(e), type: n }, C["a"].get(n));
              });
            }
          },
          {
            key: "available",
            get: function() {
              return g["f"].available.map(function(t, e) {
                var n = t.type,
                  a = t.id;
                return Object(
                  D["a"]
                )({ id: a, key: "b".concat(e), type: n }, C["a"].get(n));
              });
            }
          }
        ]),
        e
      );
    })(b["d"]);
    yn = h["a"](
      [
        Object(b["a"])({
          components: { DraggableWidgetList: gn, draggable: fn.a }
        })
      ],
      yn
    );
    var xn = yn,
      kn = xn,
      On = (n("3625"), Object(O["a"])(kn, rn, sn, !1, null, "872f8a02", null)),
      jn = On.exports;
    P()(On, { VContainer: R["a"], VFlex: B["a"], VLayout: E["a"] }),
      a["default"].use(S["a"]);
    var wn = [
        {
          path: "/",
          name: "options",
          redirect: { name: "options-common" },
          component: et,
          children: [
            {
              path: "common",
              name: "options-common",
              component: ke,
              meta: C["a"].get("common")
            },
            {
              path: "clock/:id",
              name: "options-clock",
              component: pe,
              meta: C["a"].get("clock")
            },
            {
              path: "date/:id",
              name: "options-date",
              component: De,
              meta: C["a"].get("date")
            },
            {
              path: "motto/:id",
              name: "options-motto",
              component: $e,
              meta: C["a"].get("motto")
            },
            {
              path: "separator/:id",
              name: "options-separator",
              component: Ee,
              meta: C["a"].get("separator")
            },
            {
              path: "snow/:id",
              name: "options-snow",
              component: Je,
              meta: C["a"].get("snow")
            },
            {
              path: "widgets",
              name: "options-widgets",
              component: jn,
              meta: C["a"].get("widgets")
            },
            {
              path: "style",
              name: "options-style",
              component: on,
              meta: C["a"].get("style")
            }
          ]
        },
        { path: "*", redirect: { name: "options" } }
      ],
      Sn = new S["a"]({ mode: "hash", routes: wn });
    (a["default"].config.productionTip = !1),
      new a["default"]({
        store: g["c"],
        router: Sn,
        render: function(t) {
          return t(w);
        }
      }).$mount("#app");
  },
  d68f: function(t, e, n) {},
  d849: function(t, e, n) {
    "use strict";
    var a = n("a38b"),
      i = n.n(a);
    i.a;
  },
  dede: function(t, e, n) {
    "use strict";
    var a = n("8eb2"),
      i = n.n(a);
    i.a;
  },
  e287: function(t, e, n) {},
  e8d6: function(t, e, n) {},
  e9fa: function(t, e, n) {
    "use strict";
    var a = n("2c5c"),
      i = n.n(a);
    i.a;
  }
});
//# sourceMappingURL=options.4e98b438.js.map
