"use strict"
;(self.webpackChunk_re_docs = self.webpackChunk_re_docs || []).push([
    [127],
    {
        6383: (e, t, r) => {
            r.d(t, { Zo: () => p, kt: () => d })
            var n = r(1672)
            function o(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r),
                    e
                )
            }
            function a(e, t) {
                var r = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e)
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? a(Object(r), !0).forEach(function (t) {
                              o(e, t, r[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : a(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              )
                          })
                }
                return e
            }
            function c(e, t) {
                if (null == e) return {}
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            n,
                            o = {},
                            a = Object.keys(e)
                        for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
                        return o
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            t.indexOf(r) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                ) &&
                                    (o[r] = e[r]))
                }
                return o
            }
            var i = n.createContext({}),
                s = function (e) {
                    var t = n.useContext(i),
                        r = t
                    return (
                        e &&
                            (r =
                                "function" == typeof e ? e(t) : l(l({}, t), e)),
                        r
                    )
                },
                p = function (e) {
                    var t = s(e.components)
                    return n.createElement(i.Provider, { value: t }, e.children)
                },
                u = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children
                        return n.createElement(n.Fragment, {}, t)
                    }
                },
                y = n.forwardRef(function (e, t) {
                    var r = e.components,
                        o = e.mdxType,
                        a = e.originalType,
                        i = e.parentName,
                        p = c(e, [
                            "components",
                            "mdxType",
                            "originalType",
                            "parentName"
                        ]),
                        y = s(r),
                        d = o,
                        m = y["".concat(i, ".").concat(d)] || y[d] || u[d] || a
                    return r
                        ? n.createElement(
                              m,
                              l(l({ ref: t }, p), {}, { components: r })
                          )
                        : n.createElement(m, l({ ref: t }, p))
                })
            function d(e, t) {
                var r = arguments,
                    o = t && t.mdxType
                if ("string" == typeof e || o) {
                    var a = r.length,
                        l = new Array(a)
                    l[0] = y
                    var c = {}
                    for (var i in t) hasOwnProperty.call(t, i) && (c[i] = t[i])
                    ;(c.originalType = e),
                        (c.mdxType = "string" == typeof e ? e : o),
                        (l[1] = c)
                    for (var s = 2; s < a; s++) l[s] = r[s]
                    return n.createElement.apply(null, l)
                }
                return n.createElement.apply(null, r)
            }
            y.displayName = "MDXCreateElement"
        },
        1495: (e, t, r) => {
            r.d(t, { Z: () => O })
            var n = r(1672),
                o = r(4722),
                a = r(6759),
                l = r(816)
            const c = "anchorWithStickyNavbar_Sk3O",
                i = "anchorWithHideOnScrollNavbar_fQkV"
            var s = Object.defineProperty,
                p = Object.defineProperties,
                u = Object.getOwnPropertyDescriptors,
                y = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                f = (e, t, r) =>
                    t in e
                        ? s(e, t, {
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                              value: r
                          })
                        : (e[t] = r),
                h = (e, t) => {
                    for (var r in t || (t = {})) d.call(t, r) && f(e, r, t[r])
                    if (y) for (var r of y(t)) m.call(t, r) && f(e, r, t[r])
                    return e
                },
                g = (e, t) => p(e, u(t)),
                v = (e, t) => {
                    var r = {}
                    for (var n in e)
                        d.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
                    if (null != e && y)
                        for (var n of y(e))
                            t.indexOf(n) < 0 && m.call(e, n) && (r[n] = e[n])
                    return r
                }
            function b(e) {
                var t = e,
                    { as: r, id: s } = t,
                    p = v(t, ["as", "id"])
                const {
                    navbar: { hideOnScroll: u }
                } = (0, l.LU)()
                return s
                    ? n.createElement(
                          r,
                          g(h({}, p), {
                              className: (0, o.Z)("anchor", {
                                  [i]: u,
                                  [c]: !u
                              }),
                              id: s
                          }),
                          p.children,
                          n.createElement(
                              "a",
                              {
                                  className: "hash-link",
                                  href: `#${s}`,
                                  title: (0, a.I)({
                                      id: "theme.common.headingLinkTitle",
                                      message: "Direct link to heading",
                                      description: "Title for link to heading"
                                  })
                              },
                              "\u200b"
                          )
                      )
                    : n.createElement(r, h({}, p))
            }
            function O(e) {
                var t = e,
                    { as: r } = t,
                    o = v(t, ["as"])
                return "h1" === r
                    ? n.createElement(
                          "h1",
                          g(h({}, o), { id: void 0 }),
                          o.children
                      )
                    : n.createElement(b, h({ as: r }, o))
            }
        },
        3314: (e, t, r) => {
            r.d(t, { Z: () => te })
            var n = r(1672),
                o = r(8849),
                a = r(7989),
                l = r(4722)
            const c = {
                plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
                styles: [
                    {
                        types: [
                            "comment",
                            "prolog",
                            "doctype",
                            "cdata",
                            "punctuation"
                        ],
                        style: { color: "#6c6783" }
                    },
                    { types: ["namespace"], style: { opacity: 0.7 } },
                    {
                        types: ["tag", "operator", "number"],
                        style: { color: "#e09142" }
                    },
                    {
                        types: ["property", "function"],
                        style: { color: "#9a86fd" }
                    },
                    {
                        types: ["tag-id", "selector", "atrule-id"],
                        style: { color: "#eeebff" }
                    },
                    { types: ["attr-name"], style: { color: "#c4b9fe" } },
                    {
                        types: [
                            "boolean",
                            "string",
                            "entity",
                            "url",
                            "attr-value",
                            "keyword",
                            "control",
                            "directive",
                            "unit",
                            "statement",
                            "regex",
                            "at-rule",
                            "placeholder",
                            "variable"
                        ],
                        style: { color: "#ffcc99" }
                    },
                    {
                        types: ["deleted"],
                        style: { textDecorationLine: "line-through" }
                    },
                    {
                        types: ["inserted"],
                        style: { textDecorationLine: "underline" }
                    },
                    { types: ["italic"], style: { fontStyle: "italic" } },
                    {
                        types: ["important", "bold"],
                        style: { fontWeight: "bold" }
                    },
                    { types: ["important"], style: { color: "#c4b9fe" } }
                ]
            }
            var i = { Prism: r(1782).default, theme: c }
            function s(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r),
                    e
                )
            }
            function p() {
                return (
                    (p =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t]
                                for (var n in r)
                                    Object.prototype.hasOwnProperty.call(
                                        r,
                                        n
                                    ) && (e[n] = r[n])
                            }
                            return e
                        }),
                    p.apply(this, arguments)
                )
            }
            var u = /\r\n|\r|\n/,
                y = function (e) {
                    0 === e.length
                        ? e.push({ types: ["plain"], content: "\n", empty: !0 })
                        : 1 === e.length &&
                          "" === e[0].content &&
                          ((e[0].content = "\n"), (e[0].empty = !0))
                },
                d = function (e, t) {
                    var r = e.length
                    return r > 0 && e[r - 1] === t ? e : e.concat(t)
                },
                m = function (e, t) {
                    var r = e.plain,
                        n = Object.create(null),
                        o = e.styles.reduce(function (e, r) {
                            var n = r.languages,
                                o = r.style
                            return (
                                (n && !n.includes(t)) ||
                                    r.types.forEach(function (t) {
                                        var r = p({}, e[t], o)
                                        e[t] = r
                                    }),
                                e
                            )
                        }, n)
                    return (
                        (o.root = r),
                        (o.plain = p({}, r, { backgroundColor: null })),
                        o
                    )
                }
            function f(e, t) {
                var r = {}
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                        -1 === t.indexOf(n) &&
                        (r[n] = e[n])
                return r
            }
            const h = (function (e) {
                function t() {
                    for (var t = this, r = [], n = arguments.length; n--; )
                        r[n] = arguments[n]
                    e.apply(this, r),
                        s(this, "getThemeDict", function (e) {
                            if (
                                void 0 !== t.themeDict &&
                                e.theme === t.prevTheme &&
                                e.language === t.prevLanguage
                            )
                                return t.themeDict
                            ;(t.prevTheme = e.theme),
                                (t.prevLanguage = e.language)
                            var r = e.theme ? m(e.theme, e.language) : void 0
                            return (t.themeDict = r)
                        }),
                        s(this, "getLineProps", function (e) {
                            var r = e.key,
                                n = e.className,
                                o = e.style,
                                a = p(
                                    {},
                                    f(e, ["key", "className", "style", "line"]),
                                    {
                                        className: "token-line",
                                        style: void 0,
                                        key: void 0
                                    }
                                ),
                                l = t.getThemeDict(t.props)
                            return (
                                void 0 !== l && (a.style = l.plain),
                                void 0 !== o &&
                                    (a.style =
                                        void 0 !== a.style
                                            ? p({}, a.style, o)
                                            : o),
                                void 0 !== r && (a.key = r),
                                n && (a.className += " " + n),
                                a
                            )
                        }),
                        s(this, "getStyleForToken", function (e) {
                            var r = e.types,
                                n = e.empty,
                                o = r.length,
                                a = t.getThemeDict(t.props)
                            if (void 0 !== a) {
                                if (1 === o && "plain" === r[0])
                                    return n
                                        ? { display: "inline-block" }
                                        : void 0
                                if (1 === o && !n) return a[r[0]]
                                var l = n ? { display: "inline-block" } : {},
                                    c = r.map(function (e) {
                                        return a[e]
                                    })
                                return Object.assign.apply(
                                    Object,
                                    [l].concat(c)
                                )
                            }
                        }),
                        s(this, "getTokenProps", function (e) {
                            var r = e.key,
                                n = e.className,
                                o = e.style,
                                a = e.token,
                                l = p(
                                    {},
                                    f(e, [
                                        "key",
                                        "className",
                                        "style",
                                        "token"
                                    ]),
                                    {
                                        className: "token " + a.types.join(" "),
                                        children: a.content,
                                        style: t.getStyleForToken(a),
                                        key: void 0
                                    }
                                )
                            return (
                                void 0 !== o &&
                                    (l.style =
                                        void 0 !== l.style
                                            ? p({}, l.style, o)
                                            : o),
                                void 0 !== r && (l.key = r),
                                n && (l.className += " " + n),
                                l
                            )
                        }),
                        s(this, "tokenize", function (e, t, r, n) {
                            var o = {
                                code: t,
                                grammar: r,
                                language: n,
                                tokens: []
                            }
                            e.hooks.run("before-tokenize", o)
                            var a = (o.tokens = e.tokenize(
                                o.code,
                                o.grammar,
                                o.language
                            ))
                            return e.hooks.run("after-tokenize", o), a
                        })
                }
                return (
                    e && (t.__proto__ = e),
                    (t.prototype = Object.create(e && e.prototype)),
                    (t.prototype.constructor = t),
                    (t.prototype.render = function () {
                        var e = this.props,
                            t = e.Prism,
                            r = e.language,
                            n = e.code,
                            o = e.children,
                            a = this.getThemeDict(this.props),
                            l = t.languages[r]
                        return o({
                            tokens: (function (e) {
                                for (
                                    var t = [[]],
                                        r = [e],
                                        n = [0],
                                        o = [e.length],
                                        a = 0,
                                        l = 0,
                                        c = [],
                                        i = [c];
                                    l > -1;

                                ) {
                                    for (; (a = n[l]++) < o[l]; ) {
                                        var s = void 0,
                                            p = t[l],
                                            m = r[l][a]
                                        if (
                                            ("string" == typeof m
                                                ? ((p = l > 0 ? p : ["plain"]),
                                                  (s = m))
                                                : ((p = d(p, m.type)),
                                                  m.alias &&
                                                      (p = d(p, m.alias)),
                                                  (s = m.content)),
                                            "string" == typeof s)
                                        ) {
                                            var f = s.split(u),
                                                h = f.length
                                            c.push({ types: p, content: f[0] })
                                            for (var g = 1; g < h; g++)
                                                y(c),
                                                    i.push((c = [])),
                                                    c.push({
                                                        types: p,
                                                        content: f[g]
                                                    })
                                        } else
                                            l++,
                                                t.push(p),
                                                r.push(s),
                                                n.push(0),
                                                o.push(s.length)
                                    }
                                    l--, t.pop(), r.pop(), n.pop(), o.pop()
                                }
                                return y(c), i
                            })(void 0 !== l ? this.tokenize(t, n, l, r) : [n]),
                            className: "prism-code language-" + r,
                            style: void 0 !== a ? a.root : {},
                            getLineProps: this.getLineProps,
                            getTokenProps: this.getTokenProps
                        })
                    }),
                    t
                )
            })(n.Component)
            var g = r(6759),
                v = r(816)
            const b = "codeBlockContainer_Zfna",
                O = "codeBlockContent_RJX5",
                k = "codeBlockTitle_nsR3",
                E = "codeBlock_mMAo",
                j = "codeBlockStandalone_h6zG",
                P = "copyButton_aopU",
                w = "codeBlockLines_hBl6"
            var T = Object.defineProperty,
                N = Object.defineProperties,
                x = Object.getOwnPropertyDescriptors,
                C = Object.getOwnPropertySymbols,
                S = Object.prototype.hasOwnProperty,
                Z = Object.prototype.propertyIsEnumerable,
                D = (e, t, r) =>
                    t in e
                        ? T(e, t, {
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                              value: r
                          })
                        : (e[t] = r),
                _ = (e, t) => {
                    for (var r in t || (t = {})) S.call(t, r) && D(e, r, t[r])
                    if (C) for (var r of C(t)) Z.call(t, r) && D(e, r, t[r])
                    return e
                },
                L = (e, t) => N(e, x(t))
            function B({
                children: e,
                className: t = "",
                metastring: r,
                title: o,
                language: a
            }) {
                var c
                const { prism: s } = (0, v.LU)(),
                    [p, u] = (0, n.useState)(!1),
                    [y, d] = (0, n.useState)(!1)
                ;(0, n.useEffect)(() => {
                    d(!0)
                }, [])
                const m = (0, v.bc)(r) || o,
                    f = (0, v.pJ)()
                if (n.Children.toArray(e).some((e) => (0, n.isValidElement)(e)))
                    return n.createElement(
                        h,
                        L(_({}, i), {
                            key: String(y),
                            theme: f,
                            code: "",
                            language: "text"
                        }),
                        ({ className: r, style: o }) =>
                            n.createElement(
                                "pre",
                                {
                                    tabIndex: 0,
                                    className: (0, l.Z)(
                                        r,
                                        j,
                                        "thin-scrollbar",
                                        b,
                                        t,
                                        v.kM.common.codeBlock
                                    ),
                                    style: o
                                },
                                n.createElement("code", { className: w }, e)
                            )
                    )
                const T = Array.isArray(e) ? e.join("") : e,
                    N =
                        null != (c = null != a ? a : (0, v.Vo)(t))
                            ? c
                            : s.defaultLanguage,
                    { highlightLines: x, code: C } = (0, v.nZ)(T, r, N),
                    S = () => {
                        !(function (e, { target: t = document.body } = {}) {
                            const r = document.createElement("textarea"),
                                n = document.activeElement
                            ;(r.value = e),
                                r.setAttribute("readonly", ""),
                                (r.style.contain = "strict"),
                                (r.style.position = "absolute"),
                                (r.style.left = "-9999px"),
                                (r.style.fontSize = "12pt")
                            const o = document.getSelection()
                            let a = !1
                            o.rangeCount > 0 && (a = o.getRangeAt(0)),
                                t.append(r),
                                r.select(),
                                (r.selectionStart = 0),
                                (r.selectionEnd = e.length)
                            let l = !1
                            try {
                                l = document.execCommand("copy")
                            } catch (c) {}
                            r.remove(),
                                a && (o.removeAllRanges(), o.addRange(a)),
                                n && n.focus()
                        })(C),
                            u(!0),
                            setTimeout(() => u(!1), 2e3)
                    }
                return n.createElement(
                    h,
                    L(_({}, i), {
                        key: String(y),
                        theme: f,
                        code: C,
                        language: null != N ? N : "text"
                    }),
                    ({
                        className: e,
                        style: r,
                        tokens: o,
                        getLineProps: a,
                        getTokenProps: c
                    }) =>
                        n.createElement(
                            "div",
                            {
                                className: (0, l.Z)(
                                    b,
                                    t,
                                    {
                                        [`language-${N}`]:
                                            N && !t.includes(`language-${N}`)
                                    },
                                    v.kM.common.codeBlock
                                )
                            },
                            m &&
                                n.createElement(
                                    "div",
                                    { style: r, className: k },
                                    m
                                ),
                            n.createElement(
                                "div",
                                { className: (0, l.Z)(O, N) },
                                n.createElement(
                                    "pre",
                                    {
                                        tabIndex: 0,
                                        className: (0, l.Z)(
                                            e,
                                            E,
                                            "thin-scrollbar"
                                        ),
                                        style: r
                                    },
                                    n.createElement(
                                        "code",
                                        { className: w },
                                        o.map((e, t) => {
                                            1 === e.length &&
                                                "\n" === e[0].content &&
                                                (e[0].content = "")
                                            const r = a({ line: e, key: t })
                                            return (
                                                x.includes(t) &&
                                                    (r.className +=
                                                        " docusaurus-highlight-code-line"),
                                                n.createElement(
                                                    "span",
                                                    _({ key: t }, r),
                                                    e.map((e, t) =>
                                                        n.createElement(
                                                            "span",
                                                            _(
                                                                { key: t },
                                                                c({
                                                                    token: e,
                                                                    key: t
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    n.createElement("br", null)
                                                )
                                            )
                                        })
                                    )
                                ),
                                n.createElement(
                                    "button",
                                    {
                                        type: "button",
                                        "aria-label": (0, g.I)({
                                            id: "theme.CodeBlock.copyButtonAriaLabel",
                                            message: "Copy code to clipboard",
                                            description:
                                                "The ARIA label for copy code blocks button"
                                        }),
                                        className: (0, l.Z)(P, "clean-btn"),
                                        onClick: S
                                    },
                                    p
                                        ? n.createElement(
                                              g.Z,
                                              {
                                                  id: "theme.CodeBlock.copied",
                                                  description:
                                                      "The copied button label on code blocks"
                                              },
                                              "Copied"
                                          )
                                        : n.createElement(
                                              g.Z,
                                              {
                                                  id: "theme.CodeBlock.copy",
                                                  description:
                                                      "The copy button label on code blocks"
                                              },
                                              "Copy"
                                          )
                                )
                            )
                        )
                )
            }
            var A = r(1495)
            const I = "details_oCsZ"
            var z = Object.defineProperty,
                R = Object.defineProperties,
                F = Object.getOwnPropertyDescriptors,
                M = Object.getOwnPropertySymbols,
                V = Object.prototype.hasOwnProperty,
                U = Object.prototype.propertyIsEnumerable,
                W = (e, t, r) =>
                    t in e
                        ? z(e, t, {
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                              value: r
                          })
                        : (e[t] = r)
            function $(e) {
                var t,
                    r,
                    o = ((e, t) => {
                        var r = {}
                        for (var n in e)
                            V.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
                        if (null != e && M)
                            for (var n of M(e))
                                t.indexOf(n) < 0 &&
                                    U.call(e, n) &&
                                    (r[n] = e[n])
                        return r
                    })(e, [])
                return n.createElement(
                    v.PO,
                    ((t = ((e, t) => {
                        for (var r in t || (t = {}))
                            V.call(t, r) && W(e, r, t[r])
                        if (M) for (var r of M(t)) U.call(t, r) && W(e, r, t[r])
                        return e
                    })({}, o)),
                    (r = {
                        className: (0, l.Z)("alert alert--info", I, o.className)
                    }),
                    R(t, F(r)))
                )
            }
            var J = Object.defineProperty,
                X = Object.defineProperties,
                G = Object.getOwnPropertyDescriptors,
                H = Object.getOwnPropertySymbols,
                Q = Object.prototype.hasOwnProperty,
                q = Object.prototype.propertyIsEnumerable,
                K = (e, t, r) =>
                    t in e
                        ? J(e, t, {
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                              value: r
                          })
                        : (e[t] = r),
                Y = (e, t) => {
                    for (var r in t || (t = {})) Q.call(t, r) && K(e, r, t[r])
                    if (H) for (var r of H(t)) q.call(t, r) && K(e, r, t[r])
                    return e
                }
            function ee(e) {
                var t, r
                if (
                    (null == (t = null == e ? void 0 : e.props)
                        ? void 0
                        : t.mdxType) &&
                    (null == (r = null == e ? void 0 : e.props)
                        ? void 0
                        : r.originalType)
                ) {
                    const t = e.props,
                        { mdxType: r, originalType: o } = t,
                        a = ((e, t) => {
                            var r = {}
                            for (var n in e)
                                Q.call(e, n) &&
                                    t.indexOf(n) < 0 &&
                                    (r[n] = e[n])
                            if (null != e && H)
                                for (var n of H(e))
                                    t.indexOf(n) < 0 &&
                                        q.call(e, n) &&
                                        (r[n] = e[n])
                            return r
                        })(t, ["mdxType", "originalType"])
                    return n.createElement(e.props.originalType, a)
                }
                return e
            }
            const te = {
                head: (e) => {
                    const t = n.Children.map(e.children, (e) => ee(e))
                    return n.createElement(o.Z, Y({}, e), t)
                },
                code: (e) =>
                    n.Children.toArray(e.children).every(
                        (e) => "string" == typeof e && !e.includes("\n")
                    )
                        ? n.createElement("code", Y({}, e))
                        : n.createElement(B, Y({}, e)),
                a: (e) => n.createElement(a.Z, Y({}, e)),
                pre: (e) => {
                    var t
                    return n.createElement(
                        B,
                        Y(
                            {},
                            (0, n.isValidElement)(e.children) &&
                                "code" === e.children.props.originalType
                                ? null == (t = e.children)
                                    ? void 0
                                    : t.props
                                : Y({}, e)
                        )
                    )
                },
                details: (e) => {
                    const t = n.Children.toArray(e.children),
                        r = t.find((e) => {
                            var t
                            return (
                                "summary" ===
                                (null == (t = null == e ? void 0 : e.props)
                                    ? void 0
                                    : t.mdxType)
                            )
                        }),
                        o = n.createElement(
                            n.Fragment,
                            null,
                            t.filter((e) => e !== r)
                        )
                    return n.createElement(
                        $,
                        ((a = Y({}, e)), X(a, G({ summary: r }))),
                        o
                    )
                    var a
                },
                h1: (e) => n.createElement(A.Z, Y({ as: "h1" }, e)),
                h2: (e) => n.createElement(A.Z, Y({ as: "h2" }, e)),
                h3: (e) => n.createElement(A.Z, Y({ as: "h3" }, e)),
                h4: (e) => n.createElement(A.Z, Y({ as: "h4" }, e)),
                h5: (e) => n.createElement(A.Z, Y({ as: "h5" }, e)),
                h6: (e) => n.createElement(A.Z, Y({ as: "h6" }, e))
            }
        }
    }
])
