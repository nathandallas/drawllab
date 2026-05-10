function Fb(r, n) {
  for (var u = 0; u < n.length; u++) {
    const i = n[u];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const c in i)
        if (c !== "default" && !(c in r)) {
          const s = Object.getOwnPropertyDescriptor(i, c);
          s && Object.defineProperty(r, c, s.get ? s : { enumerable: !0, get: () => i[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) i(c);
  new MutationObserver(c => {
    for (const s of c) if (s.type === "childList") for (const f of s.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const s = {};
    return (
      c.integrity && (s.integrity = c.integrity),
      c.referrerPolicy && (s.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(c) {
    if (c.ep) return;
    c.ep = !0;
    const s = u(c);
    fetch(c.href, s);
  }
})();
var qu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ms = { exports: {} },
  $l = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G4;
function $b() {
  if (G4) return $l;
  G4 = 1;
  var r = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function u(i, c, s) {
    var f = null;
    if ((s !== void 0 && (f = "" + s), c.key !== void 0 && (f = "" + c.key), "key" in c)) {
      s = {};
      for (var d in c) d !== "key" && (s[d] = c[d]);
    } else s = c;
    return ((c = s.ref), { $$typeof: r, type: i, key: f, ref: c !== void 0 ? c : null, props: s });
  }
  return (($l.Fragment = n), ($l.jsx = u), ($l.jsxs = u), $l);
}
var k4;
function Jb() {
  return (k4 || ((k4 = 1), (Ms.exports = $b())), Ms.exports);
}
var K = Jb(),
  Rs = { exports: {} },
  Jl = {},
  zs = { exports: {} },
  qs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V4;
function Ib() {
  return (
    V4 ||
      ((V4 = 1),
      (function (r) {
        function n(U, Z) {
          var re = U.length;
          U.push(Z);
          e: for (; 0 < re; ) {
            var ce = (re - 1) >>> 1,
              C = U[ce];
            if (0 < c(C, Z)) ((U[ce] = Z), (U[re] = C), (re = ce));
            else break e;
          }
        }
        function u(U) {
          return U.length === 0 ? null : U[0];
        }
        function i(U) {
          if (U.length === 0) return null;
          var Z = U[0],
            re = U.pop();
          if (re !== Z) {
            U[0] = re;
            e: for (var ce = 0, C = U.length, P = C >>> 1; ce < P; ) {
              var W = 2 * (ce + 1) - 1,
                te = U[W],
                oe = W + 1,
                ve = U[oe];
              if (0 > c(te, re)) oe < C && 0 > c(ve, te) ? ((U[ce] = ve), (U[oe] = re), (ce = oe)) : ((U[ce] = te), (U[W] = re), (ce = W));
              else if (oe < C && 0 > c(ve, re)) ((U[ce] = ve), (U[oe] = re), (ce = oe));
              else break e;
            }
          }
          return Z;
        }
        function c(U, Z) {
          var re = U.sortIndex - Z.sortIndex;
          return re !== 0 ? re : U.id - Z.id;
        }
        if (((r.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var s = performance;
          r.unstable_now = function () {
            return s.now();
          };
        } else {
          var f = Date,
            d = f.now();
          r.unstable_now = function () {
            return f.now() - d;
          };
        }
        var v = [],
          p = [],
          g = 1,
          A = null,
          m = 3,
          x = !1,
          w = !1,
          O = !1,
          R = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function k(U) {
          for (var Z = u(p); Z !== null; ) {
            if (Z.callback === null) i(p);
            else if (Z.startTime <= U) (i(p), (Z.sortIndex = Z.expirationTime), n(v, Z));
            else break;
            Z = u(p);
          }
        }
        function G(U) {
          if (((O = !1), k(U), !w))
            if (u(v) !== null) ((w = !0), Y || ((Y = !0), _e()));
            else {
              var Z = u(p);
              Z !== null && Se(G, Z.startTime - U);
            }
        }
        var Y = !1,
          J = -1,
          ue = 5,
          fe = -1;
        function ye() {
          return R ? !0 : !(r.unstable_now() - fe < ue);
        }
        function le() {
          if (((R = !1), Y)) {
            var U = r.unstable_now();
            fe = U;
            var Z = !0;
            try {
              e: {
                ((w = !1), O && ((O = !1), D(J), (J = -1)), (x = !0));
                var re = m;
                try {
                  t: {
                    for (k(U), A = u(v); A !== null && !(A.expirationTime > U && ye()); ) {
                      var ce = A.callback;
                      if (typeof ce == "function") {
                        ((A.callback = null), (m = A.priorityLevel));
                        var C = ce(A.expirationTime <= U);
                        if (((U = r.unstable_now()), typeof C == "function")) {
                          ((A.callback = C), k(U), (Z = !0));
                          break t;
                        }
                        (A === u(v) && i(v), k(U));
                      } else i(v);
                      A = u(v);
                    }
                    if (A !== null) Z = !0;
                    else {
                      var P = u(p);
                      (P !== null && Se(G, P.startTime - U), (Z = !1));
                    }
                  }
                  break e;
                } finally {
                  ((A = null), (m = re), (x = !1));
                }
                Z = void 0;
              }
            } finally {
              Z ? _e() : (Y = !1);
            }
          }
        }
        var _e;
        if (typeof L == "function")
          _e = function () {
            L(le);
          };
        else if (typeof MessageChannel < "u") {
          var me = new MessageChannel(),
            Ae = me.port2;
          ((me.port1.onmessage = le),
            (_e = function () {
              Ae.postMessage(null);
            }));
        } else
          _e = function () {
            H(le, 0);
          };
        function Se(U, Z) {
          J = H(function () {
            U(r.unstable_now());
          }, Z);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (r.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ue = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (r.unstable_next = function (U) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = m;
            }
            var re = m;
            m = Z;
            try {
              return U();
            } finally {
              m = re;
            }
          }),
          (r.unstable_requestPaint = function () {
            R = !0;
          }),
          (r.unstable_runWithPriority = function (U, Z) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var re = m;
            m = U;
            try {
              return Z();
            } finally {
              m = re;
            }
          }),
          (r.unstable_scheduleCallback = function (U, Z, re) {
            var ce = r.unstable_now();
            switch (
              (typeof re == "object" && re !== null ? ((re = re.delay), (re = typeof re == "number" && 0 < re ? ce + re : ce)) : (re = ce),
              U)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = re + C),
              (U = { id: g++, callback: Z, priorityLevel: U, startTime: re, expirationTime: C, sortIndex: -1 }),
              re > ce
                ? ((U.sortIndex = re), n(p, U), u(v) === null && U === u(p) && (O ? (D(J), (J = -1)) : (O = !0), Se(G, re - ce)))
                : ((U.sortIndex = C), n(v, U), w || x || ((w = !0), Y || ((Y = !0), _e()))),
              U
            );
          }),
          (r.unstable_shouldYield = ye),
          (r.unstable_wrapCallback = function (U) {
            var Z = m;
            return function () {
              var re = m;
              m = Z;
              try {
                return U.apply(this, arguments);
              } finally {
                m = re;
              }
            };
          }));
      })(qs)),
    qs
  );
}
var Y4;
function Wb() {
  return (Y4 || ((Y4 = 1), (zs.exports = Ib())), zs.exports);
}
var Ds = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X4;
function e9() {
  if (X4) return we;
  X4 = 1;
  var r = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    A = Symbol.iterator;
  function m(C) {
    return C === null || typeof C != "object" ? null : ((C = (A && C[A]) || C["@@iterator"]), typeof C == "function" ? C : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    O = {};
  function R(C, P, W) {
    ((this.props = C), (this.context = P), (this.refs = O), (this.updater = W || x));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (C, P) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, C, P, "setState");
    }),
    (R.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    }));
  function H() {}
  H.prototype = R.prototype;
  function D(C, P, W) {
    ((this.props = C), (this.context = P), (this.refs = O), (this.updater = W || x));
  }
  var L = (D.prototype = new H());
  ((L.constructor = D), w(L, R.prototype), (L.isPureReactComponent = !0));
  var k = Array.isArray,
    G = { H: null, A: null, T: null, S: null, V: null },
    Y = Object.prototype.hasOwnProperty;
  function J(C, P, W, te, oe, ve) {
    return ((W = ve.ref), { $$typeof: r, type: C, key: P, ref: W !== void 0 ? W : null, props: ve });
  }
  function ue(C, P) {
    return J(C.type, P, void 0, void 0, void 0, C.props);
  }
  function fe(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function ye(C) {
    var P = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (W) {
        return P[W];
      })
    );
  }
  var le = /\/+/g;
  function _e(C, P) {
    return typeof C == "object" && C !== null && C.key != null ? ye("" + C.key) : P.toString(36);
  }
  function me() {}
  function Ae(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (
          (typeof C.status == "string"
            ? C.then(me, me)
            : ((C.status = "pending"),
              C.then(
                function (P) {
                  C.status === "pending" && ((C.status = "fulfilled"), (C.value = P));
                },
                function (P) {
                  C.status === "pending" && ((C.status = "rejected"), (C.reason = P));
                },
              )),
          C.status)
        ) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function Se(C, P, W, te, oe) {
    var ve = typeof C;
    (ve === "undefined" || ve === "boolean") && (C = null);
    var he = !1;
    if (C === null) he = !0;
    else
      switch (ve) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case r:
            case n:
              he = !0;
              break;
            case g:
              return ((he = C._init), Se(he(C._payload), P, W, te, oe));
          }
      }
    if (he)
      return (
        (oe = oe(C)),
        (he = te === "" ? "." + _e(C, 0) : te),
        k(oe)
          ? ((W = ""),
            he != null && (W = he.replace(le, "$&/") + "/"),
            Se(oe, P, W, "", function (Xe) {
              return Xe;
            }))
          : oe != null &&
            (fe(oe) && (oe = ue(oe, W + (oe.key == null || (C && C.key === oe.key) ? "" : ("" + oe.key).replace(le, "$&/") + "/") + he)),
            P.push(oe)),
        1
      );
    he = 0;
    var at = te === "" ? "." : te + ":";
    if (k(C)) for (var De = 0; De < C.length; De++) ((te = C[De]), (ve = at + _e(te, De)), (he += Se(te, P, W, ve, oe)));
    else if (((De = m(C)), typeof De == "function"))
      for (C = De.call(C), De = 0; !(te = C.next()).done; ) ((te = te.value), (ve = at + _e(te, De++)), (he += Se(te, P, W, ve, oe)));
    else if (ve === "object") {
      if (typeof C.then == "function") return Se(Ae(C), P, W, te, oe);
      throw (
        (P = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (P === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : P) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return he;
  }
  function U(C, P, W) {
    if (C == null) return C;
    var te = [],
      oe = 0;
    return (
      Se(C, te, "", "", function (ve) {
        return P.call(W, ve, oe++);
      }),
      te
    );
  }
  function Z(C) {
    if (C._status === -1) {
      var P = C._result;
      ((P = P()),
        P.then(
          function (W) {
            (C._status === 0 || C._status === -1) && ((C._status = 1), (C._result = W));
          },
          function (W) {
            (C._status === 0 || C._status === -1) && ((C._status = 2), (C._result = W));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = P)));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var re =
    typeof reportError == "function"
      ? reportError
      : function (C) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var P = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
              error: C,
            });
            if (!window.dispatchEvent(P)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", C);
            return;
          }
          console.error(C);
        };
  function ce() {}
  return (
    (we.Children = {
      map: U,
      forEach: function (C, P, W) {
        U(
          C,
          function () {
            P.apply(this, arguments);
          },
          W,
        );
      },
      count: function (C) {
        var P = 0;
        return (
          U(C, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (C) {
        return (
          U(C, function (P) {
            return P;
          }) || []
        );
      },
      only: function (C) {
        if (!fe(C)) throw Error("React.Children.only expected to receive a single React element child.");
        return C;
      },
    }),
    (we.Component = R),
    (we.Fragment = u),
    (we.Profiler = c),
    (we.PureComponent = D),
    (we.StrictMode = i),
    (we.Suspense = v),
    (we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (we.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (C) {
        return G.H.useMemoCache(C);
      },
    }),
    (we.cache = function (C) {
      return function () {
        return C.apply(null, arguments);
      };
    }),
    (we.cloneElement = function (C, P, W) {
      if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
      var te = w({}, C.props),
        oe = C.key,
        ve = void 0;
      if (P != null)
        for (he in (P.ref !== void 0 && (ve = void 0), P.key !== void 0 && (oe = "" + P.key), P))
          !Y.call(P, he) || he === "key" || he === "__self" || he === "__source" || (he === "ref" && P.ref === void 0) || (te[he] = P[he]);
      var he = arguments.length - 2;
      if (he === 1) te.children = W;
      else if (1 < he) {
        for (var at = Array(he), De = 0; De < he; De++) at[De] = arguments[De + 2];
        te.children = at;
      }
      return J(C.type, oe, void 0, void 0, ve, te);
    }),
    (we.createContext = function (C) {
      return (
        (C = { $$typeof: f, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null }),
        (C.Provider = C),
        (C.Consumer = { $$typeof: s, _context: C }),
        C
      );
    }),
    (we.createElement = function (C, P, W) {
      var te,
        oe = {},
        ve = null;
      if (P != null)
        for (te in (P.key !== void 0 && (ve = "" + P.key), P))
          Y.call(P, te) && te !== "key" && te !== "__self" && te !== "__source" && (oe[te] = P[te]);
      var he = arguments.length - 2;
      if (he === 1) oe.children = W;
      else if (1 < he) {
        for (var at = Array(he), De = 0; De < he; De++) at[De] = arguments[De + 2];
        oe.children = at;
      }
      if (C && C.defaultProps) for (te in ((he = C.defaultProps), he)) oe[te] === void 0 && (oe[te] = he[te]);
      return J(C, ve, void 0, void 0, null, oe);
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (C) {
      return { $$typeof: d, render: C };
    }),
    (we.isValidElement = fe),
    (we.lazy = function (C) {
      return { $$typeof: g, _payload: { _status: -1, _result: C }, _init: Z };
    }),
    (we.memo = function (C, P) {
      return { $$typeof: p, type: C, compare: P === void 0 ? null : P };
    }),
    (we.startTransition = function (C) {
      var P = G.T,
        W = {};
      G.T = W;
      try {
        var te = C(),
          oe = G.S;
        (oe !== null && oe(W, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(ce, re));
      } catch (ve) {
        re(ve);
      } finally {
        G.T = P;
      }
    }),
    (we.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (we.use = function (C) {
      return G.H.use(C);
    }),
    (we.useActionState = function (C, P, W) {
      return G.H.useActionState(C, P, W);
    }),
    (we.useCallback = function (C, P) {
      return G.H.useCallback(C, P);
    }),
    (we.useContext = function (C) {
      return G.H.useContext(C);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (C, P) {
      return G.H.useDeferredValue(C, P);
    }),
    (we.useEffect = function (C, P, W) {
      var te = G.H;
      if (typeof W == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return te.useEffect(C, P);
    }),
    (we.useId = function () {
      return G.H.useId();
    }),
    (we.useImperativeHandle = function (C, P, W) {
      return G.H.useImperativeHandle(C, P, W);
    }),
    (we.useInsertionEffect = function (C, P) {
      return G.H.useInsertionEffect(C, P);
    }),
    (we.useLayoutEffect = function (C, P) {
      return G.H.useLayoutEffect(C, P);
    }),
    (we.useMemo = function (C, P) {
      return G.H.useMemo(C, P);
    }),
    (we.useOptimistic = function (C, P) {
      return G.H.useOptimistic(C, P);
    }),
    (we.useReducer = function (C, P, W) {
      return G.H.useReducer(C, P, W);
    }),
    (we.useRef = function (C) {
      return G.H.useRef(C);
    }),
    (we.useState = function (C) {
      return G.H.useState(C);
    }),
    (we.useSyncExternalStore = function (C, P, W) {
      return G.H.useSyncExternalStore(C, P, W);
    }),
    (we.useTransition = function () {
      return G.H.useTransition();
    }),
    (we.version = "19.1.0"),
    we
  );
}
var Z4;
function un() {
  return (Z4 || ((Z4 = 1), (Ds.exports = e9())), Ds.exports);
}
var Hs = { exports: {} },
  mt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K4;
function t9() {
  if (K4) return mt;
  K4 = 1;
  var r = un();
  function n(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++) p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(n(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function s(v, p, g) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: A == null ? null : "" + A, children: v, containerInfo: p, implementation: g };
  }
  var f = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(v, p) {
    if (v === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (mt.createPortal = function (v, p) {
      var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(n(299));
      return s(v, p, null, g);
    }),
    (mt.flushSync = function (v) {
      var p = f.T,
        g = i.p;
      try {
        if (((f.T = null), (i.p = 2), v)) return v();
      } finally {
        ((f.T = p), (i.p = g), i.d.f());
      }
    }),
    (mt.preconnect = function (v, p) {
      typeof v == "string" &&
        (p ? ((p = p.crossOrigin), (p = typeof p == "string" ? (p === "use-credentials" ? p : "") : void 0)) : (p = null), i.d.C(v, p));
    }),
    (mt.prefetchDNS = function (v) {
      typeof v == "string" && i.d.D(v);
    }),
    (mt.preinit = function (v, p) {
      if (typeof v == "string" && p && typeof p.as == "string") {
        var g = p.as,
          A = d(g, p.crossOrigin),
          m = typeof p.integrity == "string" ? p.integrity : void 0,
          x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        g === "style"
          ? i.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: A, integrity: m, fetchPriority: x })
          : g === "script" &&
            i.d.X(v, { crossOrigin: A, integrity: m, fetchPriority: x, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
      }
    }),
    (mt.preinitModule = function (v, p) {
      if (typeof v == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = d(p.as, p.crossOrigin);
            i.d.M(v, {
              crossOrigin: g,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(v);
    }),
    (mt.preload = function (v, p) {
      if (typeof v == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var g = p.as,
          A = d(g, p.crossOrigin);
        i.d.L(v, g, {
          crossOrigin: A,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (mt.preloadModule = function (v, p) {
      if (typeof v == "string")
        if (p) {
          var g = d(p.as, p.crossOrigin);
          i.d.m(v, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(v);
    }),
    (mt.requestFormReset = function (v) {
      i.d.r(v);
    }),
    (mt.unstable_batchedUpdates = function (v, p) {
      return v(p);
    }),
    (mt.useFormState = function (v, p, g) {
      return f.H.useFormState(v, p, g);
    }),
    (mt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (mt.version = "19.1.0"),
    mt
  );
}
var P4;
function a9() {
  if (P4) return Hs.exports;
  P4 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return (r(), (Hs.exports = t9()), Hs.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F4;
function n9() {
  if (F4) return Jl;
  F4 = 1;
  var r = Wb(),
    n = un(),
    u = a9();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function s(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (s(e) !== e) throw Error(i(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = s(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var o = a.return;
      if (o === null) break;
      var h = o.alternate;
      if (h === null) {
        if (((l = o.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (o.child === h.child) {
        for (h = o.child; h; ) {
          if (h === a) return (d(o), e);
          if (h === l) return (d(o), t);
          h = h.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== l.return) ((a = o), (l = h));
      else {
        for (var b = !1, y = o.child; y; ) {
          if (y === a) {
            ((b = !0), (a = o), (l = h));
            break;
          }
          if (y === l) {
            ((b = !0), (l = o), (a = h));
            break;
          }
          y = y.sibling;
        }
        if (!b) {
          for (y = h.child; y; ) {
            if (y === a) {
              ((b = !0), (a = h), (l = o));
              break;
            }
            if (y === l) {
              ((b = !0), (l = h), (a = o));
              break;
            }
            y = y.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (a.alternate !== l) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    A = Symbol.for("react.element"),
    m = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    H = Symbol.for("react.provider"),
    D = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    k = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    ue = Symbol.for("react.lazy"),
    fe = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    le = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : ((e = (le && e[le]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var me = Symbol.for("react.client.reference");
  function Ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case w:
        return "Fragment";
      case R:
        return "Profiler";
      case O:
        return "StrictMode";
      case G:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case x:
          return "Portal";
        case L:
          return (e.displayName || "Context") + ".Provider";
        case D:
          return (e._context.displayName || "Context") + ".Consumer";
        case k:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case J:
          return ((t = e.displayName || null), t !== null ? t : Ae(e.type) || "Memo");
        case ue:
          ((t = e._payload), (e = e._init));
          try {
            return Ae(e(t));
          } catch {}
      }
    return null;
  }
  var Se = Array.isArray,
    U = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    re = { pending: !1, data: null, method: null, action: null },
    ce = [],
    C = -1;
  function P(e) {
    return { current: e };
  }
  function W(e) {
    0 > C || ((e.current = ce[C]), (ce[C] = null), C--);
  }
  function te(e, t) {
    (C++, (ce[C] = e.current), (e.current = t));
  }
  var oe = P(null),
    ve = P(null),
    he = P(null),
    at = P(null);
  function De(e, t) {
    switch ((te(he, t), te(ve, e), te(oe, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? v4(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = v4(t)), (e = g4(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (W(oe), te(oe, e));
  }
  function Xe() {
    (W(oe), W(ve), W(he));
  }
  function Ke(e) {
    e.memoizedState !== null && te(at, e);
    var t = oe.current,
      a = g4(t, e.type);
    t !== a && (te(ve, e), te(oe, a));
  }
  function Gt(e) {
    (ve.current === e && (W(oe), W(ve)), at.current === e && (W(at), (Xl._currentValue = re)));
  }
  var kt = Object.prototype.hasOwnProperty,
    E = r.unstable_scheduleCallback,
    z = r.unstable_cancelCallback,
    _ = r.unstable_shouldYield,
    I = r.unstable_requestPaint,
    $ = r.unstable_now,
    ae = r.unstable_getCurrentPriorityLevel,
    Ce = r.unstable_ImmediatePriority,
    Ue = r.unstable_UserBlockingPriority,
    je = r.unstable_NormalPriority,
    Fe = r.unstable_LowPriority,
    $e = r.unstable_IdlePriority,
    ut = r.log,
    Nn = r.unstable_setDisableYieldValue,
    on = null,
    vt = null;
  function At(e) {
    if ((typeof ut == "function" && Nn(e), vt && typeof vt.setStrictMode == "function"))
      try {
        vt.setStrictMode(on, e);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Ai,
    mi = Math.log,
    gc = Math.LN2;
  function Ai(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((mi(e) / gc) | 0)) | 0);
  }
  var zt = 256,
    Vt = 4194304;
  function sn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function xi(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      h = e.suspendedLanes,
      b = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0
        ? ((l = y & ~h), l !== 0 ? (o = sn(l)) : ((b &= y), b !== 0 ? (o = sn(b)) : a || ((a = y & ~e), a !== 0 && (o = sn(a)))))
        : ((y = l & ~h), y !== 0 ? (o = sn(y)) : b !== 0 ? (o = sn(b)) : a || ((a = l & ~e), a !== 0 && (o = sn(a)))),
      o === 0 ? 0 : t !== 0 && t !== o && (t & h) === 0 && ((h = o & -o), (a = t & -t), h >= a || (h === 32 && (a & 4194048) !== 0)) ? t : o
    );
  }
  function el(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function B8(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function I2() {
    var e = zt;
    return ((zt <<= 1), (zt & 4194048) === 0 && (zt = 256), e);
  }
  function W2() {
    var e = Vt;
    return ((Vt <<= 1), (Vt & 62914560) === 0 && (Vt = 4194304), e);
  }
  function bc(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function tl(e, t) {
    ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function N8(e, t, a, l, o, h) {
    var b = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var y = e.entanglements,
      T = e.expirationTimes,
      B = e.hiddenUpdates;
    for (a = b & ~a; 0 < a; ) {
      var V = 31 - gt(a),
        F = 1 << V;
      ((y[V] = 0), (T[V] = -1));
      var N = B[V];
      if (N !== null)
        for (B[V] = null, V = 0; V < N.length; V++) {
          var Q = N[V];
          Q !== null && (Q.lane &= -536870913);
        }
      a &= ~F;
    }
    (l !== 0 && eh(e, l, 0), h !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(b & ~t)));
  }
  function eh(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - gt(t);
    ((e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function th(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - gt(a),
        o = 1 << l;
      ((o & t) | (e[l] & t) && (e[l] |= t), (a &= ~o));
    }
  }
  function yc(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function mc(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function ah() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : j4(e.type));
  }
  function Q8(e, t) {
    var a = Z.p;
    try {
      return ((Z.p = e), t());
    } finally {
      Z.p = a;
    }
  }
  var Da = Math.random().toString(36).slice(2),
    bt = "__reactFiber$" + Da,
    _t = "__reactProps$" + Da,
    Qn = "__reactContainer$" + Da,
    Ac = "__reactEvents$" + Da,
    U8 = "__reactListeners$" + Da,
    L8 = "__reactHandles$" + Da,
    nh = "__reactResources$" + Da,
    al = "__reactMarker$" + Da;
  function xc(e) {
    (delete e[bt], delete e[_t], delete e[Ac], delete e[U8], delete e[L8]);
  }
  function Un(e) {
    var t = e[bt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[Qn] || a[bt])) {
        if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
          for (e = A4(e); e !== null; ) {
            if ((a = e[bt])) return a;
            e = A4(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Ln(e) {
    if ((e = e[bt] || e[Qn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function nl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Gn(e) {
    var t = e[nh];
    return (t || (t = e[nh] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function ct(e) {
    e[al] = !0;
  }
  var rh = new Set(),
    lh = {};
  function fn(e, t) {
    (kn(e, t), kn(e + "Capture", t));
  }
  function kn(e, t) {
    for (lh[e] = t, e = 0; e < t.length; e++) rh.add(t[e]);
  }
  var G8 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ih = {},
    uh = {};
  function k8(e) {
    return kt.call(uh, e) ? !0 : kt.call(ih, e) ? !1 : G8.test(e) ? (uh[e] = !0) : ((ih[e] = !0), !1);
  }
  function _i(e, t, a) {
    if (k8(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Si(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function va(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var _c, ch;
  function Vn(e) {
    if (_c === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((_c = (t && t[1]) || ""),
          (ch =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      _c +
      e +
      ch
    );
  }
  var Sc = !1;
  function Ec(e, t) {
    if (!e || Sc) return "";
    Sc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var F = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(F.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(F, []);
                } catch (Q) {
                  var N = Q;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (Q) {
                  N = Q;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                N = Q;
              }
              (F = e()) && typeof F.catch == "function" && F.catch(function () {});
            }
          } catch (Q) {
            if (Q && N && typeof Q.stack == "string") return [Q.stack, N.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      o && o.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var h = l.DetermineComponentFrameRoot(),
        b = h[0],
        y = h[1];
      if (b && y) {
        var T = b.split(`
`),
          B = y.split(`
`);
        for (o = l = 0; l < T.length && !T[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; o < B.length && !B[o].includes("DetermineComponentFrameRoot"); ) o++;
        if (l === T.length || o === B.length) for (l = T.length - 1, o = B.length - 1; 1 <= l && 0 <= o && T[l] !== B[o]; ) o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (T[l] !== B[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || T[l] !== B[o])) {
                  var V =
                    `
` + T[l].replace(" at new ", " at ");
                  return (e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V);
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      ((Sc = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Vn(a) : "";
  }
  function V8(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Vn(e.type);
      case 16:
        return Vn("Lazy");
      case 13:
        return Vn("Suspense");
      case 19:
        return Vn("SuspenseList");
      case 0:
      case 15:
        return Ec(e.type, !1);
      case 11:
        return Ec(e.type.render, !1);
      case 1:
        return Ec(e.type, !0);
      case 31:
        return Vn("Activity");
      default:
        return "";
    }
  }
  function oh(e) {
    try {
      var t = "";
      do ((t += V8(e)), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function sh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Y8(e) {
    var t = sh(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var o = a.get,
        h = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (b) {
            ((l = "" + b), h.call(this, b));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (b) {
            l = "" + b;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ei(e) {
    e._valueTracker || (e._valueTracker = Y8(e));
  }
  function fh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (e && (l = sh(e) ? (e.checked ? "true" : "false") : e.value), (e = l), e !== a ? (t.setValue(e), !0) : !1);
  }
  function Ci(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var X8 = /[\n"\\]/g;
  function Xt(e) {
    return e.replace(X8, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Cc(e, t, a, l, o, h, b, y) {
    ((e.name = ""),
      b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? (e.type = b) : e.removeAttribute("type"),
      t != null
        ? b === "number"
          ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + Yt(t))
          : e.value !== "" + Yt(t) && (e.value = "" + Yt(t))
        : (b !== "submit" && b !== "reset") || e.removeAttribute("value"),
      t != null ? wc(e, b, Yt(t)) : a != null ? wc(e, b, Yt(a)) : l != null && e.removeAttribute("value"),
      o == null && h != null && (e.defaultChecked = !!h),
      o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean"
        ? (e.name = "" + Yt(y))
        : e.removeAttribute("name"));
  }
  function hh(e, t, a, l, o, h, b, y) {
    if ((h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.type = h), t != null || a != null)) {
      if (!((h !== "submit" && h !== "reset") || t != null)) return;
      ((a = a != null ? "" + Yt(a) : ""), (t = t != null ? "" + Yt(t) : a), y || t === e.value || (e.value = t), (e.defaultValue = t));
    }
    ((l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = y ? e.checked : !!l),
      (e.defaultChecked = !!l),
      b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b));
  }
  function wc(e, t, a) {
    (t === "number" && Ci(e.ownerDocument) === e) || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Yn(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < a.length; o++) t["$" + a[o]] = !0;
      for (a = 0; a < e.length; a++)
        ((o = t.hasOwnProperty("$" + e[a].value)), e[a].selected !== o && (e[a].selected = o), o && l && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + Yt(a), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === a) {
          ((e[o].selected = !0), l && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function dh(e, t, a) {
    if (t != null && ((t = "" + Yt(t)), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function ph(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(i(92));
        if (Se(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = Yt(t)), (e.defaultValue = a), (l = e.textContent), l === a && l !== "" && l !== null && (e.value = l));
  }
  function Xn(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Z8 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function vh(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Z8.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function gh(e, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? (e.cssFloat = "") : (e[l] = ""));
      for (var o in t) ((l = t[o]), t.hasOwnProperty(o) && a[o] !== l && vh(e, o, l));
    } else for (var h in t) t.hasOwnProperty(h) && vh(e, h, t[h]);
  }
  function Tc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var K8 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    P8 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wi(e) {
    return P8.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Oc = null;
  function Mc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Zn = null,
    Kn = null;
  function bh(e) {
    var t = Ln(e);
    if (t && (e = t.stateNode)) {
      var a = e[_t] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Cc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + Xt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var o = l[_t] || null;
                if (!o) throw Error(i(90));
                Cc(l, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (t = 0; t < a.length; t++) ((l = a[t]), l.form === e.form && fh(l));
          }
          break e;
        case "textarea":
          dh(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Yn(e, !!a.multiple, t, !1));
      }
    }
  }
  var Rc = !1;
  function yh(e, t, a) {
    if (Rc) return e(t, a);
    Rc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (((Rc = !1), (Zn !== null || Kn !== null) && (fu(), Zn && ((t = Zn), (e = Kn), (Kn = Zn = null), bh(t), e))))
        for (t = 0; t < e.length; t++) bh(e[t]);
    }
  }
  function rl(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[_t] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) || ((e = e.type), (l = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(i(231, t, typeof a));
    return a;
  }
  var ga = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    zc = !1;
  if (ga)
    try {
      var ll = {};
      (Object.defineProperty(ll, "passive", {
        get: function () {
          zc = !0;
        },
      }),
        window.addEventListener("test", ll, ll),
        window.removeEventListener("test", ll, ll));
    } catch {
      zc = !1;
    }
  var Ha = null,
    qc = null,
    Ti = null;
  function mh() {
    if (Ti) return Ti;
    var e,
      t = qc,
      a = t.length,
      l,
      o = "value" in Ha ? Ha.value : Ha.textContent,
      h = o.length;
    for (e = 0; e < a && t[e] === o[e]; e++);
    var b = a - e;
    for (l = 1; l <= b && t[a - l] === o[h - l]; l++);
    return (Ti = o.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Oi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mi() {
    return !0;
  }
  function Ah() {
    return !1;
  }
  function St(e) {
    function t(a, l, o, h, b) {
      ((this._reactName = a),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = b),
        (this.currentTarget = null));
      for (var y in e) e.hasOwnProperty(y) && ((a = e[y]), (this[y] = a ? a(h) : h[y]));
      return (
        (this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Mi : Ah),
        (this.isPropagationStopped = Ah),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Mi));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Mi));
        },
        persist: function () {},
        isPersistent: Mi,
      }),
      t
    );
  }
  var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ri = St(hn),
    il = g({}, hn, { view: 0, detail: 0 }),
    F8 = St(il),
    Dc,
    Hc,
    ul,
    zi = g({}, il, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ul &&
              (ul && e.type === "mousemove" ? ((Dc = e.screenX - ul.screenX), (Hc = e.screenY - ul.screenY)) : (Hc = Dc = 0), (ul = e)),
            Dc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Hc;
      },
    }),
    xh = St(zi),
    $8 = g({}, zi, { dataTransfer: 0 }),
    J8 = St($8),
    I8 = g({}, il, { relatedTarget: 0 }),
    jc = St(I8),
    W8 = g({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e7 = St(W8),
    t7 = g({}, hn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    a7 = St(t7),
    n7 = g({}, hn, { data: 0 }),
    _h = St(n7),
    r7 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    l7 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    i7 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function u7(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = i7[e]) ? !!t[e] : !1;
  }
  function Bc() {
    return u7;
  }
  var c7 = g({}, il, {
      key: function (e) {
        if (e.key) {
          var t = r7[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? l7[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bc,
      charCode: function (e) {
        return e.type === "keypress" ? Oi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
    }),
    o7 = St(c7),
    s7 = g({}, zi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Sh = St(s7),
    f7 = g({}, il, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bc,
    }),
    h7 = St(f7),
    d7 = g({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    p7 = St(d7),
    v7 = g({}, zi, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    g7 = St(v7),
    b7 = g({}, hn, { newState: 0, oldState: 0 }),
    y7 = St(b7),
    m7 = [9, 13, 27, 32],
    Nc = ga && "CompositionEvent" in window,
    cl = null;
  ga && "documentMode" in document && (cl = document.documentMode);
  var A7 = ga && "TextEvent" in window && !cl,
    Eh = ga && (!Nc || (cl && 8 < cl && 11 >= cl)),
    Ch = " ",
    wh = !1;
  function Th(e, t) {
    switch (e) {
      case "keyup":
        return m7.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Oh(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var Pn = !1;
  function x7(e, t) {
    switch (e) {
      case "compositionend":
        return Oh(t);
      case "keypress":
        return t.which !== 32 ? null : ((wh = !0), Ch);
      case "textInput":
        return ((e = t.data), e === Ch && wh ? null : e);
      default:
        return null;
    }
  }
  function _7(e, t) {
    if (Pn) return e === "compositionend" || (!Nc && Th(e, t)) ? ((e = mh()), (Ti = qc = Ha = null), (Pn = !1), e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Eh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S7 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Mh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!S7[e.type] : t === "textarea";
  }
  function Rh(e, t, a, l) {
    (Zn ? (Kn ? Kn.push(l) : (Kn = [l])) : (Zn = l),
      (t = bu(t, "onChange")),
      0 < t.length && ((a = new Ri("onChange", "change", null, a, l)), e.push({ event: a, listeners: t })));
  }
  var ol = null,
    sl = null;
  function E7(e) {
    s4(e, 0);
  }
  function qi(e) {
    var t = nl(e);
    if (fh(t)) return e;
  }
  function zh(e, t) {
    if (e === "change") return t;
  }
  var qh = !1;
  if (ga) {
    var Qc;
    if (ga) {
      var Uc = "oninput" in document;
      if (!Uc) {
        var Dh = document.createElement("div");
        (Dh.setAttribute("oninput", "return;"), (Uc = typeof Dh.oninput == "function"));
      }
      Qc = Uc;
    } else Qc = !1;
    qh = Qc && (!document.documentMode || 9 < document.documentMode);
  }
  function Hh() {
    ol && (ol.detachEvent("onpropertychange", jh), (sl = ol = null));
  }
  function jh(e) {
    if (e.propertyName === "value" && qi(sl)) {
      var t = [];
      (Rh(t, sl, e, Mc(e)), yh(E7, t));
    }
  }
  function C7(e, t, a) {
    e === "focusin" ? (Hh(), (ol = t), (sl = a), ol.attachEvent("onpropertychange", jh)) : e === "focusout" && Hh();
  }
  function w7(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return qi(sl);
  }
  function T7(e, t) {
    if (e === "click") return qi(t);
  }
  function O7(e, t) {
    if (e === "input" || e === "change") return qi(t);
  }
  function M7(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var qt = typeof Object.is == "function" ? Object.is : M7;
  function fl(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var o = a[l];
      if (!kt.call(t, o) || !qt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Bh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nh(e, t) {
    var a = Bh(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t)) return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Bh(a);
    }
  }
  function Qh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Qh(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Uh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ci(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ci(e.document);
    }
    return t;
  }
  function Lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var R7 = ga && "documentMode" in document && 11 >= document.documentMode,
    Fn = null,
    Gc = null,
    hl = null,
    kc = !1;
  function Lh(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    kc ||
      Fn == null ||
      Fn !== Ci(l) ||
      ((l = Fn),
      "selectionStart" in l && Lc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset })),
      (hl && fl(hl, l)) ||
        ((hl = l),
        (l = bu(Gc, "onSelect")),
        0 < l.length && ((t = new Ri("onSelect", "select", null, t, a)), e.push({ event: t, listeners: l }), (t.target = Fn))));
  }
  function dn(e, t) {
    var a = {};
    return ((a[e.toLowerCase()] = t.toLowerCase()), (a["Webkit" + e] = "webkit" + t), (a["Moz" + e] = "moz" + t), a);
  }
  var $n = {
      animationend: dn("Animation", "AnimationEnd"),
      animationiteration: dn("Animation", "AnimationIteration"),
      animationstart: dn("Animation", "AnimationStart"),
      transitionrun: dn("Transition", "TransitionRun"),
      transitionstart: dn("Transition", "TransitionStart"),
      transitioncancel: dn("Transition", "TransitionCancel"),
      transitionend: dn("Transition", "TransitionEnd"),
    },
    Vc = {},
    Gh = {};
  ga &&
    ((Gh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation),
    "TransitionEvent" in window || delete $n.transitionend.transition);
  function pn(e) {
    if (Vc[e]) return Vc[e];
    if (!$n[e]) return e;
    var t = $n[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Gh) return (Vc[e] = t[a]);
    return e;
  }
  var kh = pn("animationend"),
    Vh = pn("animationiteration"),
    Yh = pn("animationstart"),
    z7 = pn("transitionrun"),
    q7 = pn("transitionstart"),
    D7 = pn("transitioncancel"),
    Xh = pn("transitionend"),
    Zh = new Map(),
    Yc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Yc.push("scrollEnd");
  function ta(e, t) {
    (Zh.set(e, t), fn(t, [e]));
  }
  var Kh = new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Kh.get(e);
      return a !== void 0 ? a : ((t = { value: e, source: t, stack: oh(t) }), Kh.set(e, t), t);
    }
    return { value: e, source: t, stack: oh(t) };
  }
  var Kt = [],
    Jn = 0,
    Xc = 0;
  function Di() {
    for (var e = Jn, t = (Xc = Jn = 0); t < e; ) {
      var a = Kt[t];
      Kt[t++] = null;
      var l = Kt[t];
      Kt[t++] = null;
      var o = Kt[t];
      Kt[t++] = null;
      var h = Kt[t];
      if (((Kt[t++] = null), l !== null && o !== null)) {
        var b = l.pending;
        (b === null ? (o.next = o) : ((o.next = b.next), (b.next = o)), (l.pending = o));
      }
      h !== 0 && Ph(a, o, h);
    }
  }
  function Hi(e, t, a, l) {
    ((Kt[Jn++] = e),
      (Kt[Jn++] = t),
      (Kt[Jn++] = a),
      (Kt[Jn++] = l),
      (Xc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Zc(e, t, a, l) {
    return (Hi(e, t, a, l), ji(e));
  }
  function In(e, t) {
    return (Hi(e, null, null, t), ji(e));
  }
  function Ph(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var o = !1, h = e.return; h !== null; )
      ((h.childLanes |= a),
        (l = h.alternate),
        l !== null && (l.childLanes |= a),
        h.tag === 22 && ((e = h.stateNode), e === null || e._visibility & 1 || (o = !0)),
        (e = h),
        (h = h.return));
    return e.tag === 3
      ? ((h = e.stateNode),
        o &&
          t !== null &&
          ((o = 31 - gt(a)), (e = h.hiddenUpdates), (l = e[o]), l === null ? (e[o] = [t]) : l.push(t), (t.lane = a | 536870912)),
        h)
      : null;
  }
  function ji(e) {
    if (50 < Nl) throw ((Nl = 0), (Wo = null), Error(i(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wn = {};
  function H7(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Dt(e, t, a, l) {
    return new H7(e, t, a, l);
  }
  function Kc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ba(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Dt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t), (a.type = e.type), (a.flags = 0), (a.subtreeFlags = 0), (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Fh(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Bi(e, t, a, l, o, h) {
    var b = 0;
    if (((l = e), typeof e == "function")) Kc(e) && (b = 1);
    else if (typeof e == "string") b = Bb(e, a, oe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return ((e = Dt(31, a, t, o)), (e.elementType = fe), (e.lanes = h), e);
        case w:
          return vn(a.children, o, h, t);
        case O:
          ((b = 8), (o |= 24));
          break;
        case R:
          return ((e = Dt(12, a, t, o | 2)), (e.elementType = R), (e.lanes = h), e);
        case G:
          return ((e = Dt(13, a, t, o)), (e.elementType = G), (e.lanes = h), e);
        case Y:
          return ((e = Dt(19, a, t, o)), (e.elementType = Y), (e.lanes = h), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
              case L:
                b = 10;
                break e;
              case D:
                b = 9;
                break e;
              case k:
                b = 11;
                break e;
              case J:
                b = 14;
                break e;
              case ue:
                ((b = 16), (l = null));
                break e;
            }
          ((b = 29), (a = Error(i(130, e === null ? "null" : typeof e, ""))), (l = null));
      }
    return ((t = Dt(b, a, t, o)), (t.elementType = e), (t.type = l), (t.lanes = h), t);
  }
  function vn(e, t, a, l) {
    return ((e = Dt(7, e, l, t)), (e.lanes = a), e);
  }
  function Pc(e, t, a) {
    return ((e = Dt(6, e, null, t)), (e.lanes = a), e);
  }
  function Fc(e, t, a) {
    return (
      (t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  var er = [],
    tr = 0,
    Ni = null,
    Qi = 0,
    Pt = [],
    Ft = 0,
    gn = null,
    ya = 1,
    ma = "";
  function bn(e, t) {
    ((er[tr++] = Qi), (er[tr++] = Ni), (Ni = e), (Qi = t));
  }
  function $h(e, t, a) {
    ((Pt[Ft++] = ya), (Pt[Ft++] = ma), (Pt[Ft++] = gn), (gn = e));
    var l = ya;
    e = ma;
    var o = 32 - gt(l) - 1;
    ((l &= ~(1 << o)), (a += 1));
    var h = 32 - gt(t) + o;
    if (30 < h) {
      var b = o - (o % 5);
      ((h = (l & ((1 << b) - 1)).toString(32)), (l >>= b), (o -= b), (ya = (1 << (32 - gt(t) + o)) | (a << o) | l), (ma = h + e));
    } else ((ya = (1 << h) | (a << o) | l), (ma = e));
  }
  function $c(e) {
    e.return !== null && (bn(e, 1), $h(e, 1, 0));
  }
  function Jc(e) {
    for (; e === Ni; ) ((Ni = er[--tr]), (er[tr] = null), (Qi = er[--tr]), (er[tr] = null));
    for (; e === gn; ) ((gn = Pt[--Ft]), (Pt[Ft] = null), (ma = Pt[--Ft]), (Pt[Ft] = null), (ya = Pt[--Ft]), (Pt[Ft] = null));
  }
  var xt = null,
    Ie = null,
    Be = !1,
    yn = null,
    ca = !1,
    Ic = Error(i(519));
  function mn(e) {
    var t = Error(i(418, ""));
    throw (vl(Zt(t, e)), Ic);
  }
  function Jh(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[bt] = e), (t[_t] = l), a)) {
      case "dialog":
        (Re("cancel", t), Re("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ul.length; a++) Re(Ul[a], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Re("error", t), Re("load", t));
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        (Re("invalid", t), hh(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), Ei(t));
        break;
      case "select":
        Re("invalid", t);
        break;
      case "textarea":
        (Re("invalid", t), ph(t, l.value, l.defaultValue, l.children), Ei(t));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      p4(t.textContent, a)
        ? (l.popover != null && (Re("beforetoggle", t), Re("toggle", t)),
          l.onScroll != null && Re("scroll", t),
          l.onScrollEnd != null && Re("scrollend", t),
          l.onClick != null && (t.onclick = yu),
          (t = !0))
        : (t = !1),
      t || mn(e));
  }
  function Ih(e) {
    for (xt = e.return; xt; )
      switch (xt.tag) {
        case 5:
        case 13:
          ca = !1;
          return;
        case 27:
        case 3:
          ca = !0;
          return;
        default:
          xt = xt.return;
      }
  }
  function dl(e) {
    if (e !== xt) return !1;
    if (!Be) return (Ih(e), (Be = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) && ((a = e.type), (a = !(a !== "form" && a !== "button") || vs(e.type, e.memoizedProps))), (a = !a)),
      a && Ie && mn(e),
      Ih(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (t === 0) {
                Ie = na(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          e = e.nextSibling;
        }
        Ie = null;
      }
    } else
      t === 27 ? ((t = Ie), $a(e.type) ? ((e = ms), (ms = null), (Ie = e)) : (Ie = t)) : (Ie = xt ? na(e.stateNode.nextSibling) : null);
    return !0;
  }
  function pl() {
    ((Ie = xt = null), (Be = !1));
  }
  function Wh() {
    var e = yn;
    return (e !== null && (wt === null ? (wt = e) : wt.push.apply(wt, e), (yn = null)), e);
  }
  function vl(e) {
    yn === null ? (yn = [e]) : yn.push(e);
  }
  var Wc = P(null),
    An = null,
    Aa = null;
  function ja(e, t, a) {
    (te(Wc, t._currentValue), (t._currentValue = a));
  }
  function xa(e) {
    ((e._currentValue = Wc.current), W(Wc));
  }
  function eo(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function to(e, t, a, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var h = o.dependencies;
      if (h !== null) {
        var b = o.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var y = h;
          h = o;
          for (var T = 0; T < t.length; T++)
            if (y.context === t[T]) {
              ((h.lanes |= a), (y = h.alternate), y !== null && (y.lanes |= a), eo(h.return, a, e), l || (b = null));
              break e;
            }
          h = y.next;
        }
      } else if (o.tag === 18) {
        if (((b = o.return), b === null)) throw Error(i(341));
        ((b.lanes |= a), (h = b.alternate), h !== null && (h.lanes |= a), eo(b, a, e), (b = null));
      } else b = o.child;
      if (b !== null) b.return = o;
      else
        for (b = o; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (((o = b.sibling), o !== null)) {
            ((o.return = b.return), (b = o));
            break;
          }
          b = b.return;
        }
      o = b;
    }
  }
  function gl(e, t, a, l) {
    e = null;
    for (var o = t, h = !1; o !== null; ) {
      if (!h) {
        if ((o.flags & 524288) !== 0) h = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var b = o.alternate;
        if (b === null) throw Error(i(387));
        if (((b = b.memoizedProps), b !== null)) {
          var y = o.type;
          qt(o.pendingProps.value, b.value) || (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (o === at.current) {
        if (((b = o.alternate), b === null)) throw Error(i(387));
        b.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Xl) : (e = [Xl]));
      }
      o = o.return;
    }
    (e !== null && to(t, e, a, l), (t.flags |= 262144));
  }
  function Ui(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function xn(e) {
    ((An = e), (Aa = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function yt(e) {
    return e3(An, e);
  }
  function Li(e, t) {
    return (An === null && xn(e), e3(e, t));
  }
  function e3(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Aa === null)) {
      if (e === null) throw Error(i(308));
      ((Aa = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else Aa = Aa.next = t;
    return a;
  }
  var j7 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    B7 = r.unstable_scheduleCallback,
    N7 = r.unstable_NormalPriority,
    lt = { $$typeof: L, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function ao() {
    return { controller: new j7(), data: new Map(), refCount: 0 };
  }
  function bl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        B7(N7, function () {
          e.controller.abort();
        }));
  }
  var yl = null,
    no = 0,
    ar = 0,
    nr = null;
  function Q7(e, t) {
    if (yl === null) {
      var a = (yl = []);
      ((no = 0),
        (ar = is()),
        (nr = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (no++, t.then(t3, t3), t);
  }
  function t3() {
    if (--no === 0 && yl !== null) {
      nr !== null && (nr.status = "fulfilled");
      var e = yl;
      ((yl = null), (ar = 0), (nr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function U7(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          a.push(o);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < a.length; o++) (0, a[o])(void 0);
        },
      ),
      l
    );
  }
  var a3 = U.S;
  U.S = function (e, t) {
    (typeof t == "object" && t !== null && typeof t.then == "function" && Q7(e, t), a3 !== null && a3(e, t));
  };
  var _n = P(null);
  function ro() {
    var e = _n.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Gi(e, t) {
    t === null ? te(_n, _n.current) : te(_n, t.pool);
  }
  function n3() {
    var e = ro();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var ml = Error(i(460)),
    r3 = Error(i(474)),
    ki = Error(i(542)),
    lo = { then: function () {} };
  function l3(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Vi() {}
  function i3(e, t, a) {
    switch (((a = e[a]), a === void 0 ? e.push(t) : a !== t && (t.then(Vi, Vi), (t = a)), t.status)) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), c3(e), e);
      default:
        if (typeof t.status == "string") t.then(Vi, Vi);
        else {
          if (((e = Ye), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "fulfilled"), (o.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  ((o.status = "rejected"), (o.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), c3(e), e);
        }
        throw ((Al = t), ml);
    }
  }
  var Al = null;
  function u3() {
    if (Al === null) throw Error(i(459));
    var e = Al;
    return ((Al = null), e);
  }
  function c3(e) {
    if (e === ml || e === ki) throw Error(i(483));
  }
  var Ba = !1;
  function io(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uo(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Na(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Qa(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ne & 2) !== 0)) {
      var o = l.pending;
      return (o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (l.pending = t), (t = ji(e)), Ph(e, null, a), t);
    }
    return (Hi(e, l, t, a), ji(e));
  }
  function xl(e, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), th(e, a));
    }
  }
  function co(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var o = null,
        h = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var b = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (h === null ? (o = h = b) : (h = h.next = b), (a = a.next));
        } while (a !== null);
        h === null ? (o = h = t) : (h = h.next = t);
      } else o = h = t;
      ((a = { baseState: l.baseState, firstBaseUpdate: o, lastBaseUpdate: h, shared: l.shared, callbacks: l.callbacks }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate), e === null ? (a.firstBaseUpdate = t) : (e.next = t), (a.lastBaseUpdate = t));
  }
  var oo = !1;
  function _l() {
    if (oo) {
      var e = nr;
      if (e !== null) throw e;
    }
  }
  function Sl(e, t, a, l) {
    oo = !1;
    var o = e.updateQueue;
    Ba = !1;
    var h = o.firstBaseUpdate,
      b = o.lastBaseUpdate,
      y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var T = y,
        B = T.next;
      ((T.next = null), b === null ? (h = B) : (b.next = B), (b = T));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== b && (y === null ? (V.firstBaseUpdate = B) : (y.next = B), (V.lastBaseUpdate = T)));
    }
    if (h !== null) {
      var F = o.baseState;
      ((b = 0), (V = B = T = null), (y = h));
      do {
        var N = y.lane & -536870913,
          Q = N !== y.lane;
        if (Q ? (qe & N) === N : (l & N) === N) {
          (N !== 0 && N === ar && (oo = !0),
            V !== null && (V = V.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null }));
          e: {
            var be = e,
              de = y;
            N = t;
            var ke = a;
            switch (de.tag) {
              case 1:
                if (((be = de.payload), typeof be == "function")) {
                  F = be.call(ke, F, N);
                  break e;
                }
                F = be;
                break e;
              case 3:
                be.flags = (be.flags & -65537) | 128;
              case 0:
                if (((be = de.payload), (N = typeof be == "function" ? be.call(ke, F, N) : be), N == null)) break e;
                F = g({}, F, N);
                break e;
              case 2:
                Ba = !0;
            }
          }
          ((N = y.callback),
            N !== null && ((e.flags |= 64), Q && (e.flags |= 8192), (Q = o.callbacks), Q === null ? (o.callbacks = [N]) : Q.push(N)));
        } else
          ((Q = { lane: N, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            V === null ? ((B = V = Q), (T = F)) : (V = V.next = Q),
            (b |= N));
        if (((y = y.next), y === null)) {
          if (((y = o.shared.pending), y === null)) break;
          ((Q = y), (y = Q.next), (Q.next = null), (o.lastBaseUpdate = Q), (o.shared.pending = null));
        }
      } while (!0);
      (V === null && (T = F),
        (o.baseState = T),
        (o.firstBaseUpdate = B),
        (o.lastBaseUpdate = V),
        h === null && (o.shared.lanes = 0),
        (Za |= b),
        (e.lanes = b),
        (e.memoizedState = F));
    }
  }
  function o3(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function s3(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) o3(a[e], t);
  }
  var rr = P(null),
    Yi = P(0);
  function f3(e, t) {
    ((e = Oa), te(Yi, e), te(rr, t), (Oa = e | t.baseLanes));
  }
  function so() {
    (te(Yi, Oa), te(rr, rr.current));
  }
  function fo() {
    ((Oa = Yi.current), W(rr), W(Yi));
  }
  var Ua = 0,
    Te = null,
    Le = null,
    nt = null,
    Xi = !1,
    lr = !1,
    Sn = !1,
    Zi = 0,
    El = 0,
    ir = null,
    L7 = 0;
  function et() {
    throw Error(i(321));
  }
  function ho(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++) if (!qt(e[a], t[a])) return !1;
    return !0;
  }
  function po(e, t, a, l, o, h) {
    return (
      (Ua = h),
      (Te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (U.H = e === null || e.memoizedState === null ? P3 : F3),
      (Sn = !1),
      (h = a(l, o)),
      (Sn = !1),
      lr && (h = d3(t, a, l, o)),
      h3(e),
      h
    );
  }
  function h3(e) {
    U.H = Ii;
    var t = Le !== null && Le.next !== null;
    if (((Ua = 0), (nt = Le = Te = null), (Xi = !1), (El = 0), (ir = null), t)) throw Error(i(300));
    e === null || ot || ((e = e.dependencies), e !== null && Ui(e) && (ot = !0));
  }
  function d3(e, t, a, l) {
    Te = e;
    var o = 0;
    do {
      if ((lr && (ir = null), (El = 0), (lr = !1), 25 <= o)) throw Error(i(301));
      if (((o += 1), (nt = Le = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        ((h.lastEffect = null), (h.events = null), (h.stores = null), h.memoCache != null && (h.memoCache.index = 0));
      }
      ((U.H = K7), (h = t(a, l)));
    } while (lr);
    return h;
  }
  function G7() {
    var e = U.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Cl(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (Te.flags |= 1024),
      t
    );
  }
  function vo() {
    var e = Zi !== 0;
    return ((Zi = 0), e);
  }
  function go(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function bo(e) {
    if (Xi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Xi = !1;
    }
    ((Ua = 0), (nt = Le = Te = null), (lr = !1), (El = Zi = 0), (ir = null));
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (nt === null ? (Te.memoizedState = nt = e) : (nt = nt.next = e), nt);
  }
  function rt() {
    if (Le === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = nt === null ? Te.memoizedState : nt.next;
    if (t !== null) ((nt = t), (Le = e));
    else {
      if (e === null) throw Te.alternate === null ? Error(i(467)) : Error(i(310));
      ((Le = e),
        (e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }),
        nt === null ? (Te.memoizedState = nt = e) : (nt = nt.next = e));
    }
    return nt;
  }
  function yo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cl(e) {
    var t = El;
    return (
      (El += 1),
      ir === null && (ir = []),
      (e = i3(ir, e, t)),
      (t = Te),
      (nt === null ? t.memoizedState : nt.next) === null && ((t = t.alternate), (U.H = t === null || t.memoizedState === null ? P3 : F3)),
      e
    );
  }
  function Ki(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Cl(e);
      if (e.$$typeof === L) return yt(e);
    }
    throw Error(i(438, String(e)));
  }
  function mo(e) {
    var t = null,
      a = Te.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = Te.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = yo()), (Te.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = ye;
    return (t.index++, a);
  }
  function _a(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pi(e) {
    var t = rt();
    return Ao(t, Le, e);
  }
  function Ao(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = a;
    var o = e.baseQueue,
      h = l.pending;
    if (h !== null) {
      if (o !== null) {
        var b = o.next;
        ((o.next = h.next), (h.next = b));
      }
      ((t.baseQueue = o = h), (l.pending = null));
    }
    if (((h = e.baseState), o === null)) e.memoizedState = h;
    else {
      t = o.next;
      var y = (b = null),
        T = null,
        B = t,
        V = !1;
      do {
        var F = B.lane & -536870913;
        if (F !== B.lane ? (qe & F) === F : (Ua & F) === F) {
          var N = B.revertLane;
          if (N === 0)
            (T !== null &&
              (T = T.next =
                { lane: 0, revertLane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }),
              F === ar && (V = !0));
          else if ((Ua & N) === N) {
            ((B = B.next), N === ar && (V = !0));
            continue;
          } else
            ((F = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              T === null ? ((y = T = F), (b = h)) : (T = T.next = F),
              (Te.lanes |= N),
              (Za |= N));
          ((F = B.action), Sn && a(h, F), (h = B.hasEagerState ? B.eagerState : a(h, F)));
        } else
          ((N = {
            lane: F,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            T === null ? ((y = T = N), (b = h)) : (T = T.next = N),
            (Te.lanes |= F),
            (Za |= F));
        B = B.next;
      } while (B !== null && B !== t);
      if ((T === null ? (b = h) : (T.next = y), !qt(h, e.memoizedState) && ((ot = !0), V && ((a = nr), a !== null)))) throw a;
      ((e.memoizedState = h), (e.baseState = b), (e.baseQueue = T), (l.lastRenderedState = h));
    }
    return (o === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function xo(e) {
    var t = rt(),
      a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      o = a.pending,
      h = t.memoizedState;
    if (o !== null) {
      a.pending = null;
      var b = (o = o.next);
      do ((h = e(h, b.action)), (b = b.next));
      while (b !== o);
      (qt(h, t.memoizedState) || (ot = !0), (t.memoizedState = h), t.baseQueue === null && (t.baseState = h), (a.lastRenderedState = h));
    }
    return [h, l];
  }
  function p3(e, t, a) {
    var l = Te,
      o = rt(),
      h = Be;
    if (h) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var b = !qt((Le || o).memoizedState, a);
    (b && ((o.memoizedState = a), (ot = !0)), (o = o.queue));
    var y = b3.bind(null, l, o, e);
    if ((wl(2048, 8, y, [e]), o.getSnapshot !== t || b || (nt !== null && nt.memoizedState.tag & 1))) {
      if (((l.flags |= 2048), ur(9, Fi(), g3.bind(null, l, o, a, t), null), Ye === null)) throw Error(i(349));
      h || (Ua & 124) !== 0 || v3(l, t, a);
    }
    return a;
  }
  function v3(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = Te.updateQueue),
      t === null ? ((t = yo()), (Te.updateQueue = t), (t.stores = [e])) : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function g3(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), y3(t) && m3(e));
  }
  function b3(e, t, a) {
    return a(function () {
      y3(t) && m3(e);
    });
  }
  function y3(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !qt(e, a);
    } catch {
      return !0;
    }
  }
  function m3(e) {
    var t = In(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function _o(e) {
    var t = Et();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Sn)) {
        At(!0);
        try {
          a();
        } finally {
          At(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: e }),
      t
    );
  }
  function A3(e, t, a, l) {
    return ((e.baseState = a), Ao(e, Le, typeof l == "function" ? l : _a));
  }
  function k7(e, t, a, l, o) {
    if (Ji(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var h = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          h.listeners.push(b);
        },
      };
      (U.T !== null ? a(!0) : (h.isTransition = !1),
        l(h),
        (a = t.pending),
        a === null ? ((h.next = t.pending = h), x3(t, h)) : ((h.next = a.next), (t.pending = a.next = h)));
    }
  }
  function x3(e, t) {
    var a = t.action,
      l = t.payload,
      o = e.state;
    if (t.isTransition) {
      var h = U.T,
        b = {};
      U.T = b;
      try {
        var y = a(o, l),
          T = U.S;
        (T !== null && T(b, y), _3(e, t, y));
      } catch (B) {
        So(e, t, B);
      } finally {
        U.T = h;
      }
    } else
      try {
        ((h = a(o, l)), _3(e, t, h));
      } catch (B) {
        So(e, t, B);
      }
  }
  function _3(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            S3(e, t, l);
          },
          function (l) {
            return So(e, t, l);
          },
        )
      : S3(e, t, a);
  }
  function S3(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      E3(t),
      (e.state = a),
      (t = e.pending),
      t !== null && ((a = t.next), a === t ? (e.pending = null) : ((a = a.next), (t.next = a), x3(e, a))));
  }
  function So(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = a), E3(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function E3(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function C3(e, t) {
    return t;
  }
  function w3(e, t) {
    if (Be) {
      var a = Ye.formState;
      if (a !== null) {
        e: {
          var l = Te;
          if (Be) {
            if (Ie) {
              t: {
                for (var o = Ie, h = ca; o.nodeType !== 8; ) {
                  if (!h) {
                    o = null;
                    break t;
                  }
                  if (((o = na(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                ((h = o.data), (o = h === "F!" || h === "F" ? o : null));
              }
              if (o) {
                ((Ie = na(o.nextSibling)), (l = o.data === "F!"));
                break e;
              }
            }
            mn(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = Et()),
      (a.memoizedState = a.baseState = t),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: C3, lastRenderedState: t }),
      (a.queue = l),
      (a = X3.bind(null, Te, l)),
      (l.dispatch = a),
      (l = _o(!1)),
      (h = Oo.bind(null, Te, !1, l.queue)),
      (l = Et()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = o),
      (a = k7.bind(null, Te, o, h, a)),
      (o.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function T3(e) {
    var t = rt();
    return O3(t, Le, e);
  }
  function O3(e, t, a) {
    if (((t = Ao(e, t, C3)[0]), (e = Pi(_a)[0]), typeof t == "object" && t !== null && typeof t.then == "function"))
      try {
        var l = Cl(t);
      } catch (b) {
        throw b === ml ? ki : b;
      }
    else l = t;
    t = rt();
    var o = t.queue,
      h = o.dispatch;
    return (a !== t.memoizedState && ((Te.flags |= 2048), ur(9, Fi(), V7.bind(null, o, a), null)), [l, h, e]);
  }
  function V7(e, t) {
    e.action = t;
  }
  function M3(e) {
    var t = rt(),
      a = Le;
    if (a !== null) return O3(t, a, e);
    (rt(), (t = t.memoizedState), (a = rt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function ur(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = Te.updateQueue),
      t === null && ((t = yo()), (Te.updateQueue = t)),
      (a = t.lastEffect),
      a === null ? (t.lastEffect = e.next = e) : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Fi() {
    return { destroy: void 0, resource: void 0 };
  }
  function R3() {
    return rt().memoizedState;
  }
  function $i(e, t, a, l) {
    var o = Et();
    ((l = l === void 0 ? null : l), (Te.flags |= e), (o.memoizedState = ur(1 | t, Fi(), a, l)));
  }
  function wl(e, t, a, l) {
    var o = rt();
    l = l === void 0 ? null : l;
    var h = o.memoizedState.inst;
    Le !== null && l !== null && ho(l, Le.memoizedState.deps)
      ? (o.memoizedState = ur(t, h, a, l))
      : ((Te.flags |= e), (o.memoizedState = ur(1 | t, h, a, l)));
  }
  function z3(e, t) {
    $i(8390656, 8, e, t);
  }
  function q3(e, t) {
    wl(2048, 8, e, t);
  }
  function D3(e, t) {
    return wl(4, 2, e, t);
  }
  function H3(e, t) {
    return wl(4, 4, e, t);
  }
  function j3(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function B3(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), wl(4, 4, j3.bind(null, t, e), a));
  }
  function Eo() {}
  function N3(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && ho(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Q3(e, t) {
    var a = rt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && ho(t, l[1])) return l[0];
    if (((l = e()), Sn)) {
      At(!0);
      try {
        e();
      } finally {
        At(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function Co(e, t, a) {
    return a === void 0 || (Ua & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Gd()), (Te.lanes |= e), (Za |= e), a);
  }
  function U3(e, t, a, l) {
    return qt(a, t)
      ? a
      : rr.current !== null
        ? ((e = Co(e, a, l)), qt(e, t) || (ot = !0), e)
        : (Ua & 42) === 0
          ? ((ot = !0), (e.memoizedState = a))
          : ((e = Gd()), (Te.lanes |= e), (Za |= e), t);
  }
  function L3(e, t, a, l, o) {
    var h = Z.p;
    Z.p = h !== 0 && 8 > h ? h : 8;
    var b = U.T,
      y = {};
    ((U.T = y), Oo(e, !1, t, a));
    try {
      var T = o(),
        B = U.S;
      if ((B !== null && B(y, T), T !== null && typeof T == "object" && typeof T.then == "function")) {
        var V = U7(T, l);
        Tl(e, t, V, Nt(e));
      } else Tl(e, t, l, Nt(e));
    } catch (F) {
      Tl(e, t, { then: function () {}, status: "rejected", reason: F }, Nt());
    } finally {
      ((Z.p = h), (U.T = b));
    }
  }
  function Y7() {}
  function wo(e, t, a, l) {
    if (e.tag !== 5) throw Error(i(476));
    var o = G3(e).queue;
    L3(
      e,
      o,
      t,
      re,
      a === null
        ? Y7
        : function () {
            return (k3(e), a(l));
          },
    );
  }
  function G3(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: re },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: a },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function k3(e) {
    var t = G3(e).next.queue;
    Tl(e, t, {}, Nt());
  }
  function To() {
    return yt(Xl);
  }
  function V3() {
    return rt().memoizedState;
  }
  function Y3() {
    return rt().memoizedState;
  }
  function X7(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Nt();
          e = Na(a);
          var l = Qa(t, e, a);
          (l !== null && (Qt(l, t, a), xl(l, t, a)), (t = { cache: ao() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Z7(e, t, a) {
    var l = Nt();
    ((a = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null }),
      Ji(e) ? Z3(t, a) : ((a = Zc(e, t, a, l)), a !== null && (Qt(a, e, l), K3(a, t, l))));
  }
  function X3(e, t, a) {
    var l = Nt();
    Tl(e, t, a, l);
  }
  function Tl(e, t, a, l) {
    var o = { lane: l, revertLane: 0, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (Ji(e)) Z3(t, o);
    else {
      var h = e.alternate;
      if (e.lanes === 0 && (h === null || h.lanes === 0) && ((h = t.lastRenderedReducer), h !== null))
        try {
          var b = t.lastRenderedState,
            y = h(b, a);
          if (((o.hasEagerState = !0), (o.eagerState = y), qt(y, b))) return (Hi(e, t, o, 0), Ye === null && Di(), !1);
        } catch {
        } finally {
        }
      if (((a = Zc(e, t, o, l)), a !== null)) return (Qt(a, e, l), K3(a, t, l), !0);
    }
    return !1;
  }
  function Oo(e, t, a, l) {
    if (((l = { lane: 2, revertLane: is(), action: l, hasEagerState: !1, eagerState: null, next: null }), Ji(e))) {
      if (t) throw Error(i(479));
    } else ((t = Zc(e, a, l, 2)), t !== null && Qt(t, e, 2));
  }
  function Ji(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function Z3(e, t) {
    lr = Xi = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (e.pending = t));
  }
  function K3(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), th(e, a));
    }
  }
  var Ii = {
      readContext: yt,
      use: Ki,
      useCallback: et,
      useContext: et,
      useEffect: et,
      useImperativeHandle: et,
      useLayoutEffect: et,
      useInsertionEffect: et,
      useMemo: et,
      useReducer: et,
      useRef: et,
      useState: et,
      useDebugValue: et,
      useDeferredValue: et,
      useTransition: et,
      useSyncExternalStore: et,
      useId: et,
      useHostTransitionStatus: et,
      useFormState: et,
      useActionState: et,
      useOptimistic: et,
      useMemoCache: et,
      useCacheRefresh: et,
    },
    P3 = {
      readContext: yt,
      use: Ki,
      useCallback: function (e, t) {
        return ((Et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: yt,
      useEffect: z3,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null), $i(4194308, 4, j3.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return $i(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        $i(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = Et();
        t = t === void 0 ? null : t;
        var l = e();
        if (Sn) {
          At(!0);
          try {
            e();
          } finally {
            At(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = Et();
        if (a !== void 0) {
          var o = a(t);
          if (Sn) {
            At(!0);
            try {
              a(t);
            } finally {
              At(!1);
            }
          }
        } else o = t;
        return (
          (l.memoizedState = l.baseState = o),
          (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }),
          (l.queue = e),
          (e = e.dispatch = Z7.bind(null, Te, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = _o(e);
        var t = e.queue,
          a = X3.bind(null, Te, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var a = Et();
        return Co(a, e, t);
      },
      useTransition: function () {
        var e = _o(!1);
        return ((e = L3.bind(null, Te, e.queue, !0, !1)), (Et().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, a) {
        var l = Te,
          o = Et();
        if (Be) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = t()), Ye === null)) throw Error(i(349));
          (qe & 124) !== 0 || v3(l, t, a);
        }
        o.memoizedState = a;
        var h = { value: a, getSnapshot: t };
        return ((o.queue = h), z3(b3.bind(null, l, h, e), [e]), (l.flags |= 2048), ur(9, Fi(), g3.bind(null, l, h, a, t), null), a);
      },
      useId: function () {
        var e = Et(),
          t = Ye.identifierPrefix;
        if (Be) {
          var a = ma,
            l = ya;
          ((a = (l & ~(1 << (32 - gt(l) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = Zi++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»"));
        } else ((a = L7++), (t = "«" + t + "r" + a.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: To,
      useFormState: w3,
      useActionState: w3,
      useOptimistic: function (e) {
        var t = Et();
        t.memoizedState = t.baseState = e;
        var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((t.queue = a), (t = Oo.bind(null, Te, !0, a)), (a.dispatch = t), [e, t]);
      },
      useMemoCache: mo,
      useCacheRefresh: function () {
        return (Et().memoizedState = X7.bind(null, Te));
      },
    },
    F3 = {
      readContext: yt,
      use: Ki,
      useCallback: N3,
      useContext: yt,
      useEffect: q3,
      useImperativeHandle: B3,
      useInsertionEffect: D3,
      useLayoutEffect: H3,
      useMemo: Q3,
      useReducer: Pi,
      useRef: R3,
      useState: function () {
        return Pi(_a);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var a = rt();
        return U3(a, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Pi(_a)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), t];
      },
      useSyncExternalStore: p3,
      useId: V3,
      useHostTransitionStatus: To,
      useFormState: T3,
      useActionState: T3,
      useOptimistic: function (e, t) {
        var a = rt();
        return A3(a, Le, e, t);
      },
      useMemoCache: mo,
      useCacheRefresh: Y3,
    },
    K7 = {
      readContext: yt,
      use: Ki,
      useCallback: N3,
      useContext: yt,
      useEffect: q3,
      useImperativeHandle: B3,
      useInsertionEffect: D3,
      useLayoutEffect: H3,
      useMemo: Q3,
      useReducer: xo,
      useRef: R3,
      useState: function () {
        return xo(_a);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var a = rt();
        return Le === null ? Co(a, e, t) : U3(a, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xo(_a)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), t];
      },
      useSyncExternalStore: p3,
      useId: V3,
      useHostTransitionStatus: To,
      useFormState: M3,
      useActionState: M3,
      useOptimistic: function (e, t) {
        var a = rt();
        return Le !== null ? A3(a, Le, e, t) : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: mo,
      useCacheRefresh: Y3,
    },
    cr = null,
    Ol = 0;
  function Wi(e) {
    var t = Ol;
    return ((Ol += 1), cr === null && (cr = []), i3(cr, e, t));
  }
  function Ml(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function eu(e, t) {
    throw t.$$typeof === A
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function $3(e) {
    var t = e._init;
    return t(e._payload);
  }
  function J3(e) {
    function t(q, M) {
      if (e) {
        var j = q.deletions;
        j === null ? ((q.deletions = [M]), (q.flags |= 16)) : j.push(M);
      }
    }
    function a(q, M) {
      if (!e) return null;
      for (; M !== null; ) (t(q, M), (M = M.sibling));
      return null;
    }
    function l(q) {
      for (var M = new Map(); q !== null; ) (q.key !== null ? M.set(q.key, q) : M.set(q.index, q), (q = q.sibling));
      return M;
    }
    function o(q, M) {
      return ((q = ba(q, M)), (q.index = 0), (q.sibling = null), q);
    }
    function h(q, M, j) {
      return (
        (q.index = j),
        e
          ? ((j = q.alternate), j !== null ? ((j = j.index), j < M ? ((q.flags |= 67108866), M) : j) : ((q.flags |= 67108866), M))
          : ((q.flags |= 1048576), M)
      );
    }
    function b(q) {
      return (e && q.alternate === null && (q.flags |= 67108866), q);
    }
    function y(q, M, j, X) {
      return M === null || M.tag !== 6 ? ((M = Pc(j, q.mode, X)), (M.return = q), M) : ((M = o(M, j)), (M.return = q), M);
    }
    function T(q, M, j, X) {
      var ie = j.type;
      return ie === w
        ? V(q, M, j.props.children, X, j.key)
        : M !== null && (M.elementType === ie || (typeof ie == "object" && ie !== null && ie.$$typeof === ue && $3(ie) === M.type))
          ? ((M = o(M, j.props)), Ml(M, j), (M.return = q), M)
          : ((M = Bi(j.type, j.key, j.props, null, q.mode, X)), Ml(M, j), (M.return = q), M);
    }
    function B(q, M, j, X) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation
        ? ((M = Fc(j, q.mode, X)), (M.return = q), M)
        : ((M = o(M, j.children || [])), (M.return = q), M);
    }
    function V(q, M, j, X, ie) {
      return M === null || M.tag !== 7 ? ((M = vn(j, q.mode, X, ie)), (M.return = q), M) : ((M = o(M, j)), (M.return = q), M);
    }
    function F(q, M, j) {
      if ((typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint")
        return ((M = Pc("" + M, q.mode, j)), (M.return = q), M);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case m:
            return ((j = Bi(M.type, M.key, M.props, null, q.mode, j)), Ml(j, M), (j.return = q), j);
          case x:
            return ((M = Fc(M, q.mode, j)), (M.return = q), M);
          case ue:
            var X = M._init;
            return ((M = X(M._payload)), F(q, M, j));
        }
        if (Se(M) || _e(M)) return ((M = vn(M, q.mode, j, null)), (M.return = q), M);
        if (typeof M.then == "function") return F(q, Wi(M), j);
        if (M.$$typeof === L) return F(q, Li(q, M), j);
        eu(q, M);
      }
      return null;
    }
    function N(q, M, j, X) {
      var ie = M !== null ? M.key : null;
      if ((typeof j == "string" && j !== "") || typeof j == "number" || typeof j == "bigint")
        return ie !== null ? null : y(q, M, "" + j, X);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case m:
            return j.key === ie ? T(q, M, j, X) : null;
          case x:
            return j.key === ie ? B(q, M, j, X) : null;
          case ue:
            return ((ie = j._init), (j = ie(j._payload)), N(q, M, j, X));
        }
        if (Se(j) || _e(j)) return ie !== null ? null : V(q, M, j, X, null);
        if (typeof j.then == "function") return N(q, M, Wi(j), X);
        if (j.$$typeof === L) return N(q, M, Li(q, j), X);
        eu(q, j);
      }
      return null;
    }
    function Q(q, M, j, X, ie) {
      if ((typeof X == "string" && X !== "") || typeof X == "number" || typeof X == "bigint")
        return ((q = q.get(j) || null), y(M, q, "" + X, ie));
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case m:
            return ((q = q.get(X.key === null ? j : X.key) || null), T(M, q, X, ie));
          case x:
            return ((q = q.get(X.key === null ? j : X.key) || null), B(M, q, X, ie));
          case ue:
            var Oe = X._init;
            return ((X = Oe(X._payload)), Q(q, M, j, X, ie));
        }
        if (Se(X) || _e(X)) return ((q = q.get(j) || null), V(M, q, X, ie, null));
        if (typeof X.then == "function") return Q(q, M, j, Wi(X), ie);
        if (X.$$typeof === L) return Q(q, M, j, Li(M, X), ie);
        eu(M, X);
      }
      return null;
    }
    function be(q, M, j, X) {
      for (var ie = null, Oe = null, se = M, pe = (M = 0), ft = null; se !== null && pe < j.length; pe++) {
        se.index > pe ? ((ft = se), (se = null)) : (ft = se.sibling);
        var He = N(q, se, j[pe], X);
        if (He === null) {
          se === null && (se = ft);
          break;
        }
        (e && se && He.alternate === null && t(q, se),
          (M = h(He, M, pe)),
          Oe === null ? (ie = He) : (Oe.sibling = He),
          (Oe = He),
          (se = ft));
      }
      if (pe === j.length) return (a(q, se), Be && bn(q, pe), ie);
      if (se === null) {
        for (; pe < j.length; pe++)
          ((se = F(q, j[pe], X)), se !== null && ((M = h(se, M, pe)), Oe === null ? (ie = se) : (Oe.sibling = se), (Oe = se)));
        return (Be && bn(q, pe), ie);
      }
      for (se = l(se); pe < j.length; pe++)
        ((ft = Q(se, q, pe, j[pe], X)),
          ft !== null &&
            (e && ft.alternate !== null && se.delete(ft.key === null ? pe : ft.key),
            (M = h(ft, M, pe)),
            Oe === null ? (ie = ft) : (Oe.sibling = ft),
            (Oe = ft)));
      return (
        e &&
          se.forEach(function (tn) {
            return t(q, tn);
          }),
        Be && bn(q, pe),
        ie
      );
    }
    function de(q, M, j, X) {
      if (j == null) throw Error(i(151));
      for (var ie = null, Oe = null, se = M, pe = (M = 0), ft = null, He = j.next(); se !== null && !He.done; pe++, He = j.next()) {
        se.index > pe ? ((ft = se), (se = null)) : (ft = se.sibling);
        var tn = N(q, se, He.value, X);
        if (tn === null) {
          se === null && (se = ft);
          break;
        }
        (e && se && tn.alternate === null && t(q, se),
          (M = h(tn, M, pe)),
          Oe === null ? (ie = tn) : (Oe.sibling = tn),
          (Oe = tn),
          (se = ft));
      }
      if (He.done) return (a(q, se), Be && bn(q, pe), ie);
      if (se === null) {
        for (; !He.done; pe++, He = j.next())
          ((He = F(q, He.value, X)), He !== null && ((M = h(He, M, pe)), Oe === null ? (ie = He) : (Oe.sibling = He), (Oe = He)));
        return (Be && bn(q, pe), ie);
      }
      for (se = l(se); !He.done; pe++, He = j.next())
        ((He = Q(se, q, pe, He.value, X)),
          He !== null &&
            (e && He.alternate !== null && se.delete(He.key === null ? pe : He.key),
            (M = h(He, M, pe)),
            Oe === null ? (ie = He) : (Oe.sibling = He),
            (Oe = He)));
      return (
        e &&
          se.forEach(function (Pb) {
            return t(q, Pb);
          }),
        Be && bn(q, pe),
        ie
      );
    }
    function ke(q, M, j, X) {
      if (
        (typeof j == "object" && j !== null && j.type === w && j.key === null && (j = j.props.children), typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case m:
            e: {
              for (var ie = j.key; M !== null; ) {
                if (M.key === ie) {
                  if (((ie = j.type), ie === w)) {
                    if (M.tag === 7) {
                      (a(q, M.sibling), (X = o(M, j.props.children)), (X.return = q), (q = X));
                      break e;
                    }
                  } else if (M.elementType === ie || (typeof ie == "object" && ie !== null && ie.$$typeof === ue && $3(ie) === M.type)) {
                    (a(q, M.sibling), (X = o(M, j.props)), Ml(X, j), (X.return = q), (q = X));
                    break e;
                  }
                  a(q, M);
                  break;
                } else t(q, M);
                M = M.sibling;
              }
              j.type === w
                ? ((X = vn(j.props.children, q.mode, X, j.key)), (X.return = q), (q = X))
                : ((X = Bi(j.type, j.key, j.props, null, q.mode, X)), Ml(X, j), (X.return = q), (q = X));
            }
            return b(q);
          case x:
            e: {
              for (ie = j.key; M !== null; ) {
                if (M.key === ie)
                  if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                    (a(q, M.sibling), (X = o(M, j.children || [])), (X.return = q), (q = X));
                    break e;
                  } else {
                    a(q, M);
                    break;
                  }
                else t(q, M);
                M = M.sibling;
              }
              ((X = Fc(j, q.mode, X)), (X.return = q), (q = X));
            }
            return b(q);
          case ue:
            return ((ie = j._init), (j = ie(j._payload)), ke(q, M, j, X));
        }
        if (Se(j)) return be(q, M, j, X);
        if (_e(j)) {
          if (((ie = _e(j)), typeof ie != "function")) throw Error(i(150));
          return ((j = ie.call(j)), de(q, M, j, X));
        }
        if (typeof j.then == "function") return ke(q, M, Wi(j), X);
        if (j.$$typeof === L) return ke(q, M, Li(q, j), X);
        eu(q, j);
      }
      return (typeof j == "string" && j !== "") || typeof j == "number" || typeof j == "bigint"
        ? ((j = "" + j),
          M !== null && M.tag === 6
            ? (a(q, M.sibling), (X = o(M, j)), (X.return = q), (q = X))
            : (a(q, M), (X = Pc(j, q.mode, X)), (X.return = q), (q = X)),
          b(q))
        : a(q, M);
    }
    return function (q, M, j, X) {
      try {
        Ol = 0;
        var ie = ke(q, M, j, X);
        return ((cr = null), ie);
      } catch (se) {
        if (se === ml || se === ki) throw se;
        var Oe = Dt(29, se, null, q.mode);
        return ((Oe.lanes = X), (Oe.return = q), Oe);
      } finally {
      }
    };
  }
  var or = J3(!0),
    I3 = J3(!1),
    $t = P(null),
    oa = null;
  function La(e) {
    var t = e.alternate;
    (te(it, it.current & 1), te($t, e), oa === null && (t === null || rr.current !== null || t.memoizedState !== null) && (oa = e));
  }
  function W3(e) {
    if (e.tag === 22) {
      if ((te(it, it.current), te($t, e), oa === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (oa = e);
      }
    } else Ga();
  }
  function Ga() {
    (te(it, it.current), te($t, $t.current));
  }
  function Sa(e) {
    (W($t), oa === e && (oa = null), W(it));
  }
  var it = P(0);
  function tu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || a.data === "$?" || ys(a))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Mo(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : g({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Ro = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = Nt(),
        o = Na(l);
      ((o.payload = t), a != null && (o.callback = a), (t = Qa(e, o, l)), t !== null && (Qt(t, e, l), xl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = Nt(),
        o = Na(l);
      ((o.tag = 1), (o.payload = t), a != null && (o.callback = a), (t = Qa(e, o, l)), t !== null && (Qt(t, e, l), xl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Nt(),
        l = Na(a);
      ((l.tag = 2), t != null && (l.callback = t), (t = Qa(e, l, a)), t !== null && (Qt(t, e, a), xl(t, e, a)));
    },
  };
  function ed(e, t, a, l, o, h, b) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, h, b)
        : t.prototype && t.prototype.isPureReactComponent
          ? !fl(a, l) || !fl(o, h)
          : !0
    );
  }
  function td(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && Ro.enqueueReplaceState(t, t.state, null));
  }
  function En(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = g({}, a));
      for (var o in e) a[o] === void 0 && (a[o] = e[o]);
    }
    return a;
  }
  var au =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function ad(e) {
    au(e);
  }
  function nd(e) {
    console.error(e);
  }
  function rd(e) {
    au(e);
  }
  function nu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function ld(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function zo(e, t, a) {
    return (
      (a = Na(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        nu(e, t);
      }),
      a
    );
  }
  function id(e) {
    return ((e = Na(e)), (e.tag = 3), e);
  }
  function ud(e, t, a, l) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var h = l.value;
      ((e.payload = function () {
        return o(h);
      }),
        (e.callback = function () {
          ld(t, a, l);
        }));
    }
    var b = a.stateNode;
    b !== null &&
      typeof b.componentDidCatch == "function" &&
      (e.callback = function () {
        (ld(t, a, l), typeof o != "function" && (Ka === null ? (Ka = new Set([this])) : Ka.add(this)));
        var y = l.stack;
        this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
      });
  }
  function P7(e, t, a, l, o) {
    if (((a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
      if (((t = a.alternate), t !== null && gl(t, a, o, !0), (a = $t.current), a !== null)) {
        switch (a.tag) {
          case 13:
            return (
              oa === null ? ts() : a.alternate === null && We === 0 && (We = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = o),
              l === lo ? (a.flags |= 16384) : ((t = a.updateQueue), t === null ? (a.updateQueue = new Set([l])) : t.add(l), ns(e, l, o)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === lo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }), (a.updateQueue = t))
                    : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  ns(e, l, o)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return (ns(e, l, o), ts(), !1);
    }
    if (Be)
      return (
        (t = $t.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = o),
            l !== Ic && ((e = Error(i(422), { cause: l })), vl(Zt(e, a))))
          : (l !== Ic && ((t = Error(i(423), { cause: l })), vl(Zt(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (o &= -o),
            (e.lanes |= o),
            (l = Zt(l, a)),
            (o = zo(e.stateNode, l, o)),
            co(e, o),
            We !== 4 && (We = 2)),
        !1
      );
    var h = Error(i(520), { cause: l });
    if (((h = Zt(h, a)), Bl === null ? (Bl = [h]) : Bl.push(h), We !== 4 && (We = 2), t === null)) return !0;
    ((l = Zt(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return ((a.flags |= 65536), (e = o & -o), (a.lanes |= e), (e = zo(a.stateNode, l, e)), co(a, e), !1);
        case 1:
          if (
            ((t = a.type),
            (h = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (h !== null && typeof h.componentDidCatch == "function" && (Ka === null || !Ka.has(h)))))
          )
            return ((a.flags |= 65536), (o &= -o), (a.lanes |= o), (o = id(o)), ud(o, e, a, l), co(a, o), !1);
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cd = Error(i(461)),
    ot = !1;
  function ht(e, t, a, l) {
    t.child = e === null ? I3(t, null, a, l) : or(t, e.child, a, l);
  }
  function od(e, t, a, l, o) {
    a = a.render;
    var h = t.ref;
    if ("ref" in l) {
      var b = {};
      for (var y in l) y !== "ref" && (b[y] = l[y]);
    } else b = l;
    return (
      xn(t),
      (l = po(e, t, a, b, h, o)),
      (y = vo()),
      e !== null && !ot ? (go(e, t, o), Ea(e, t, o)) : (Be && y && $c(t), (t.flags |= 1), ht(e, t, l, o), t.child)
    );
  }
  function sd(e, t, a, l, o) {
    if (e === null) {
      var h = a.type;
      return typeof h == "function" && !Kc(h) && h.defaultProps === void 0 && a.compare === null
        ? ((t.tag = 15), (t.type = h), fd(e, t, h, l, o))
        : ((e = Bi(a.type, null, l, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((h = e.child), !Uo(e, o))) {
      var b = h.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : fl), a(b, l) && e.ref === t.ref)) return Ea(e, t, o);
    }
    return ((t.flags |= 1), (e = ba(h, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function fd(e, t, a, l, o) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (fl(h, l) && e.ref === t.ref)
        if (((ot = !1), (t.pendingProps = l = h), Uo(e, o))) (e.flags & 131072) !== 0 && (ot = !0);
        else return ((t.lanes = e.lanes), Ea(e, t, o));
    }
    return qo(e, t, a, l, o);
  }
  function hd(e, t, a) {
    var l = t.pendingProps,
      o = l.children,
      h = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = h !== null ? h.baseLanes | a : a), e !== null)) {
          for (o = t.child = e.child, h = 0; o !== null; ) ((h = h | o.lanes | o.childLanes), (o = o.sibling));
          t.childLanes = h & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return dd(e, t, l, a);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Gi(t, h !== null ? h.cachePool : null),
          h !== null ? f3(t, h) : so(),
          W3(t));
      else return ((t.lanes = t.childLanes = 536870912), dd(e, t, h !== null ? h.baseLanes | a : a, a));
    } else h !== null ? (Gi(t, h.cachePool), f3(t, h), Ga(), (t.memoizedState = null)) : (e !== null && Gi(t, null), so(), Ga());
    return (ht(e, t, o, a), t.child);
  }
  function dd(e, t, a, l) {
    var o = ro();
    return (
      (o = o === null ? null : { parent: lt._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: a, cachePool: o }),
      e !== null && Gi(t, null),
      so(),
      W3(t),
      e !== null && gl(e, t, l, !0),
      null
    );
  }
  function ru(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function qo(e, t, a, l, o) {
    return (
      xn(t),
      (a = po(e, t, a, l, void 0, o)),
      (l = vo()),
      e !== null && !ot ? (go(e, t, o), Ea(e, t, o)) : (Be && l && $c(t), (t.flags |= 1), ht(e, t, a, o), t.child)
    );
  }
  function pd(e, t, a, l, o, h) {
    return (
      xn(t),
      (t.updateQueue = null),
      (a = d3(t, l, a, o)),
      h3(e),
      (l = vo()),
      e !== null && !ot ? (go(e, t, h), Ea(e, t, h)) : (Be && l && $c(t), (t.flags |= 1), ht(e, t, a, h), t.child)
    );
  }
  function vd(e, t, a, l, o) {
    if ((xn(t), t.stateNode === null)) {
      var h = Wn,
        b = a.contextType;
      (typeof b == "object" && b !== null && (h = yt(b)),
        (h = new a(l, h)),
        (t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Ro),
        (t.stateNode = h),
        (h._reactInternals = t),
        (h = t.stateNode),
        (h.props = l),
        (h.state = t.memoizedState),
        (h.refs = {}),
        io(t),
        (b = a.contextType),
        (h.context = typeof b == "object" && b !== null ? yt(b) : Wn),
        (h.state = t.memoizedState),
        (b = a.getDerivedStateFromProps),
        typeof b == "function" && (Mo(t, a, b, l), (h.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function") ||
          ((b = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(),
          b !== h.state && Ro.enqueueReplaceState(h, h.state, null),
          Sl(t, l, h, o),
          _l(),
          (h.state = t.memoizedState)),
        typeof h.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      h = t.stateNode;
      var y = t.memoizedProps,
        T = En(a, y);
      h.props = T;
      var B = h.context,
        V = a.contextType;
      ((b = Wn), typeof V == "object" && V !== null && (b = yt(V)));
      var F = a.getDerivedStateFromProps;
      ((V = typeof F == "function" || typeof h.getSnapshotBeforeUpdate == "function"),
        (y = t.pendingProps !== y),
        V ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function") ||
          ((y || B !== b) && td(t, h, l, b)),
        (Ba = !1));
      var N = t.memoizedState;
      ((h.state = N),
        Sl(t, l, h, o),
        _l(),
        (B = t.memoizedState),
        y || N !== B || Ba
          ? (typeof F == "function" && (Mo(t, a, F, l), (B = t.memoizedState)),
            (T = Ba || ed(t, a, T, l, N, B, b))
              ? (V ||
                  (typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" && h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = l), (t.memoizedState = B)),
            (h.props = l),
            (h.state = B),
            (h.context = b),
            (l = T))
          : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), (l = !1)));
    } else {
      ((h = t.stateNode),
        uo(e, t),
        (b = t.memoizedProps),
        (V = En(a, b)),
        (h.props = V),
        (F = t.pendingProps),
        (N = h.context),
        (B = a.contextType),
        (T = Wn),
        typeof B == "object" && B !== null && (T = yt(B)),
        (y = a.getDerivedStateFromProps),
        (B = typeof y == "function" || typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function") ||
          ((b !== F || N !== T) && td(t, h, l, T)),
        (Ba = !1),
        (N = t.memoizedState),
        (h.state = N),
        Sl(t, l, h, o),
        _l());
      var Q = t.memoizedState;
      b !== F || N !== Q || Ba || (e !== null && e.dependencies !== null && Ui(e.dependencies))
        ? (typeof y == "function" && (Mo(t, a, y, l), (Q = t.memoizedState)),
          (V = Ba || ed(t, a, V, l, N, Q, T) || (e !== null && e.dependencies !== null && Ui(e.dependencies)))
            ? (B ||
                (typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, Q, T),
                typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, Q, T)),
              typeof h.componentDidUpdate == "function" && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Q)),
          (h.props = l),
          (h.state = Q),
          (h.context = T),
          (l = V))
        : (typeof h.componentDidUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 1024),
          (l = !1));
    }
    return (
      (h = l),
      ru(e, t),
      (l = (t.flags & 128) !== 0),
      h || l
        ? ((h = t.stateNode),
          (a = l && typeof a.getDerivedStateFromError != "function" ? null : h.render()),
          (t.flags |= 1),
          e !== null && l ? ((t.child = or(t, e.child, null, o)), (t.child = or(t, null, a, o))) : ht(e, t, a, o),
          (t.memoizedState = h.state),
          (e = t.child))
        : (e = Ea(e, t, o)),
      e
    );
  }
  function gd(e, t, a, l) {
    return (pl(), (t.flags |= 256), ht(e, t, a, l), t.child);
  }
  var Do = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ho(e) {
    return { baseLanes: e, cachePool: n3() };
  }
  function jo(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Jt), e);
  }
  function bd(e, t, a) {
    var l = t.pendingProps,
      o = !1,
      h = (t.flags & 128) !== 0,
      b;
    if (
      ((b = h) || (b = e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0),
      b && ((o = !0), (t.flags &= -129)),
      (b = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Be) {
        if ((o ? La(t) : Ga(), Be)) {
          var y = Ie,
            T;
          if ((T = y)) {
            e: {
              for (T = y, y = ca; T.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((T = na(T.nextSibling)), T === null)) {
                  y = null;
                  break e;
                }
              }
              y = T;
            }
            y !== null
              ? ((t.memoizedState = {
                  dehydrated: y,
                  treeContext: gn !== null ? { id: ya, overflow: ma } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Dt(18, null, null, 0)),
                (T.stateNode = y),
                (T.return = t),
                (t.child = T),
                (xt = t),
                (Ie = null),
                (T = !0))
              : (T = !1);
          }
          T || mn(t);
        }
        if (((y = t.memoizedState), y !== null && ((y = y.dehydrated), y !== null)))
          return (ys(y) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        Sa(t);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        o
          ? (Ga(),
            (o = t.mode),
            (y = lu({ mode: "hidden", children: y }, o)),
            (l = vn(l, o, a, null)),
            (y.return = t),
            (l.return = t),
            (y.sibling = l),
            (t.child = y),
            (o = t.child),
            (o.memoizedState = Ho(a)),
            (o.childLanes = jo(e, b, a)),
            (t.memoizedState = Do),
            l)
          : (La(t), Bo(t, y))
      );
    }
    if (((T = e.memoizedState), T !== null && ((y = T.dehydrated), y !== null))) {
      if (h)
        t.flags & 256
          ? (La(t), (t.flags &= -257), (t = No(e, t, a)))
          : t.memoizedState !== null
            ? (Ga(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ga(),
              (o = l.fallback),
              (y = t.mode),
              (l = lu({ mode: "visible", children: l.children }, y)),
              (o = vn(o, y, a, null)),
              (o.flags |= 2),
              (l.return = t),
              (o.return = t),
              (l.sibling = o),
              (t.child = l),
              or(t, e.child, null, a),
              (l = t.child),
              (l.memoizedState = Ho(a)),
              (l.childLanes = jo(e, b, a)),
              (t.memoizedState = Do),
              (t = o));
      else if ((La(t), ys(y))) {
        if (((b = y.nextSibling && y.nextSibling.dataset), b)) var B = b.dgst;
        ((b = B), (l = Error(i(419))), (l.stack = ""), (l.digest = b), vl({ value: l, source: null, stack: null }), (t = No(e, t, a)));
      } else if ((ot || gl(e, t, a, !1), (b = (a & e.childLanes) !== 0), ot || b)) {
        if (
          ((b = Ye),
          b !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : yc(l)),
            (l = (l & (b.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), In(e, l), Qt(b, e, l), cd);
        (y.data === "$?" || ts(), (t = No(e, t, a)));
      } else
        y.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = T.treeContext),
            (Ie = na(y.nextSibling)),
            (xt = t),
            (Be = !0),
            (yn = null),
            (ca = !1),
            e !== null && ((Pt[Ft++] = ya), (Pt[Ft++] = ma), (Pt[Ft++] = gn), (ya = e.id), (ma = e.overflow), (gn = t)),
            (t = Bo(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? (Ga(),
        (o = l.fallback),
        (y = t.mode),
        (T = e.child),
        (B = T.sibling),
        (l = ba(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        B !== null ? (o = ba(B, o)) : ((o = vn(o, y, a, null)), (o.flags |= 2)),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = Ho(a))
          : ((T = y.cachePool),
            T !== null ? ((B = lt._currentValue), (T = T.parent !== B ? { parent: B, pool: B } : T)) : (T = n3()),
            (y = { baseLanes: y.baseLanes | a, cachePool: T })),
        (o.memoizedState = y),
        (o.childLanes = jo(e, b, a)),
        (t.memoizedState = Do),
        l)
      : (La(t),
        (a = e.child),
        (e = a.sibling),
        (a = ba(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null && ((b = t.deletions), b === null ? ((t.deletions = [e]), (t.flags |= 16)) : b.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Bo(e, t) {
    return ((t = lu({ mode: "visible", children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function lu(e, t) {
    return (
      (e = Dt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
      e
    );
  }
  function No(e, t, a) {
    return (or(t, e.child, null, a), (e = Bo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e);
  }
  function yd(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), eo(e.return, t, a));
  }
  function Qo(e, t, a, l, o) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: a, tailMode: o })
      : ((h.isBackwards = t), (h.rendering = null), (h.renderingStartTime = 0), (h.last = l), (h.tail = a), (h.tailMode = o));
  }
  function md(e, t, a) {
    var l = t.pendingProps,
      o = l.revealOrder,
      h = l.tail;
    if ((ht(e, t, l.children, a), (l = it.current), (l & 2) !== 0)) ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && yd(e, a, t);
          else if (e.tag === 19) yd(e, a, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((te(it, l), o)) {
      case "forwards":
        for (a = t.child, o = null; a !== null; ) ((e = a.alternate), e !== null && tu(e) === null && (o = a), (a = a.sibling));
        ((a = o), a === null ? ((o = t.child), (t.child = null)) : ((o = a.sibling), (a.sibling = null)), Qo(t, !1, o, a, h));
        break;
      case "backwards":
        for (a = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && tu(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = a), (a = o), (o = e));
        }
        Qo(t, !0, a, null, h);
        break;
      case "together":
        Qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ea(e, t, a) {
    if ((e !== null && (t.dependencies = e.dependencies), (Za |= t.lanes), (a & t.childLanes) === 0))
      if (e !== null) {
        if ((gl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, a = ba(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        ((e = e.sibling), (a = a.sibling = ba(e, e.pendingProps)), (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Uo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Ui(e)));
  }
  function F7(e, t, a) {
    switch (t.tag) {
      case 3:
        (De(t, t.stateNode.containerInfo), ja(t, lt, e.memoizedState.cache), pl());
        break;
      case 27:
      case 5:
        Ke(t);
        break;
      case 4:
        De(t, t.stateNode.containerInfo);
        break;
      case 10:
        ja(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (La(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? bd(e, t, a)
              : (La(t), (e = Ea(e, t, a)), e !== null ? e.sibling : null);
        La(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (((l = (a & t.childLanes) !== 0), l || (gl(e, t, a, !1), (l = (a & t.childLanes) !== 0)), o)) {
          if (l) return md(e, t, a);
          t.flags |= 128;
        }
        if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), te(it, it.current), l))
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), hd(e, t, a));
      case 24:
        ja(t, lt, e.memoizedState.cache);
    }
    return Ea(e, t, a);
  }
  function Ad(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ot = !0;
      else {
        if (!Uo(e, a) && (t.flags & 128) === 0) return ((ot = !1), F7(e, t, a));
        ot = (e.flags & 131072) !== 0;
      }
    else ((ot = !1), Be && (t.flags & 1048576) !== 0 && $h(t, Qi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            o = l._init;
          if (((l = o(l._payload)), (t.type = l), typeof l == "function"))
            Kc(l) ? ((e = En(l, e)), (t.tag = 1), (t = vd(null, t, l, e, a))) : ((t.tag = 0), (t = qo(null, t, l, e, a)));
          else {
            if (l != null) {
              if (((o = l.$$typeof), o === k)) {
                ((t.tag = 11), (t = od(null, t, l, e, a)));
                break e;
              } else if (o === J) {
                ((t.tag = 14), (t = sd(null, t, l, e, a)));
                break e;
              }
            }
            throw ((t = Ae(l) || l), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return qo(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (o = En(l, t.pendingProps)), vd(e, t, l, o, a));
      case 3:
        e: {
          if ((De(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
          l = t.pendingProps;
          var h = t.memoizedState;
          ((o = h.element), uo(e, t), Sl(t, l, null, a));
          var b = t.memoizedState;
          if (((l = b.cache), ja(t, lt, l), l !== h.cache && to(t, [lt], a, !0), _l(), (l = b.element), h.isDehydrated))
            if (
              ((h = { element: l, isDehydrated: !1, cache: b.cache }), (t.updateQueue.baseState = h), (t.memoizedState = h), t.flags & 256)
            ) {
              t = gd(e, t, l, a);
              break e;
            } else if (l !== o) {
              ((o = Zt(Error(i(424)), t)), vl(o), (t = gd(e, t, l, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ie = na(e.firstChild), xt = t, Be = !0, yn = null, ca = !0, a = I3(t, null, l, a), t.child = a; a; )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((pl(), l === o)) {
              t = Ea(e, t, a);
              break e;
            }
            ht(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ru(e, t),
          e === null
            ? (a = E4(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Be ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = mu(he.current).createElement(a)),
                (l[bt] = t),
                (l[_t] = e),
                pt(l, a, e),
                ct(l),
                (t.stateNode = l))
            : (t.memoizedState = E4(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ke(t),
          e === null &&
            Be &&
            ((l = t.stateNode = x4(t.type, t.pendingProps, he.current)),
            (xt = t),
            (ca = !0),
            (o = Ie),
            $a(t.type) ? ((ms = o), (Ie = na(l.firstChild))) : (Ie = o)),
          ht(e, t, t.pendingProps.children, a),
          ru(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Be &&
            ((o = l = Ie) &&
              ((l = Sb(l, t.type, t.pendingProps, ca)),
              l !== null ? ((t.stateNode = l), (xt = t), (Ie = na(l.firstChild)), (ca = !1), (o = !0)) : (o = !1)),
            o || mn(t)),
          Ke(t),
          (o = t.type),
          (h = t.pendingProps),
          (b = e !== null ? e.memoizedProps : null),
          (l = h.children),
          vs(o, h) ? (l = null) : b !== null && vs(o, b) && (t.flags |= 32),
          t.memoizedState !== null && ((o = po(e, t, G7, null, null, a)), (Xl._currentValue = o)),
          ru(e, t),
          ht(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Be &&
            ((e = a = Ie) &&
              ((a = Eb(a, t.pendingProps, ca)), a !== null ? ((t.stateNode = a), (xt = t), (Ie = null), (e = !0)) : (e = !1)),
            e || mn(t)),
          null
        );
      case 13:
        return bd(e, t, a);
      case 4:
        return (
          De(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = or(t, null, l, a)) : ht(e, t, l, a),
          t.child
        );
      case 11:
        return od(e, t, t.type, t.pendingProps, a);
      case 7:
        return (ht(e, t, t.pendingProps, a), t.child);
      case 8:
        return (ht(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (ht(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return ((l = t.pendingProps), ja(t, t.type, l.value), ht(e, t, l.children, a), t.child);
      case 9:
        return (
          (o = t.type._context),
          (l = t.pendingProps.children),
          xn(t),
          (o = yt(o)),
          (l = l(o)),
          (t.flags |= 1),
          ht(e, t, l, a),
          t.child
        );
      case 14:
        return sd(e, t, t.type, t.pendingProps, a);
      case 15:
        return fd(e, t, t.type, t.pendingProps, a);
      case 19:
        return md(e, t, a);
      case 31:
        return (
          (l = t.pendingProps),
          (a = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((a = lu(l, a)), (a.ref = t.ref), (t.child = a), (a.return = t), (t = a))
            : ((a = ba(e.child, l)), (a.ref = t.ref), (t.child = a), (a.return = t), (t = a)),
          t
        );
      case 22:
        return hd(e, t, a);
      case 24:
        return (
          xn(t),
          (l = yt(lt)),
          e === null
            ? ((o = ro()),
              o === null && ((o = Ye), (h = ao()), (o.pooledCache = h), h.refCount++, h !== null && (o.pooledCacheLanes |= a), (o = h)),
              (t.memoizedState = { parent: l, cache: o }),
              io(t),
              ja(t, lt, o))
            : ((e.lanes & a) !== 0 && (uo(e, t), Sl(t, null, null, a), _l()),
              (o = e.memoizedState),
              (h = t.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (t.memoizedState = o),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o),
                  ja(t, lt, l))
                : ((l = h.cache), ja(t, lt, l), l !== o.cache && to(t, [lt], a, !0))),
          ht(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function Ca(e) {
    e.flags |= 4;
  }
  function xd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !M4(t))) {
      if (
        ((t = $t.current),
        t !== null && ((qe & 4194048) === qe ? oa !== null : ((qe & 62914560) !== qe && (qe & 536870912) === 0) || t !== oa))
      )
        throw ((Al = lo), r3);
      e.flags |= 8192;
    }
  }
  function iu(e, t) {
    (t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? W2() : 536870912), (e.lanes |= t), (dr |= t)));
  }
  function Rl(e, t) {
    if (!Be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; ) (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; ) (a.alternate !== null && (l = a), (a = a.sibling));
          l === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (l.sibling = null);
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var o = e.child; o !== null; )
        ((a |= o.lanes | o.childLanes), (l |= o.subtreeFlags & 65011712), (l |= o.flags & 65011712), (o.return = e), (o = o.sibling));
    else
      for (o = e.child; o !== null; )
        ((a |= o.lanes | o.childLanes), (l |= o.subtreeFlags), (l |= o.flags), (o.return = e), (o = o.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function $7(e, t, a) {
    var l = t.pendingProps;
    switch ((Jc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Je(t), null);
      case 1:
        return (Je(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          xa(lt),
          Xe(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (dl(t) ? Ca(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), Wh())),
          Je(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (Ca(t), a !== null ? (Je(t), xd(t, a)) : (Je(t), (t.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (Ca(t), Je(t), xd(t, a))
                : (Je(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && Ca(t), Je(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Gt(t), (a = he.current));
        var o = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Ca(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (Je(t), null);
          }
          ((e = oe.current), dl(t) ? Jh(t) : ((e = x4(o, l, a)), (t.stateNode = e), Ca(t)));
        }
        return (Je(t), null);
      case 5:
        if ((Gt(t), (a = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== l && Ca(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return (Je(t), null);
          }
          if (((e = oe.current), dl(t))) Jh(t);
          else {
            switch (((o = mu(he.current)), e)) {
              case 1:
                e = o.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = o.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                  case "script":
                    ((e = o.createElement("div")), (e.innerHTML = "<script><\/script>"), (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e = typeof l.is == "string" ? o.createElement("select", { is: l.is }) : o.createElement("select")),
                      l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size));
                    break;
                  default:
                    e = typeof l.is == "string" ? o.createElement(a, { is: l.is }) : o.createElement(a);
                }
            }
            ((e[bt] = t), (e[_t] = l));
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ((o.child.return = o), (o = o.child));
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e;
                o = o.return;
              }
              ((o.sibling.return = o.return), (o = o.sibling));
            }
            t.stateNode = e;
            e: switch ((pt(e, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ca(t);
          }
        }
        return (Je(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Ca(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = he.current), dl(t))) {
            if (((e = t.stateNode), (a = t.memoizedProps), (l = null), (o = xt), o !== null))
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            ((e[bt] = t),
              (e = !!(e.nodeValue === a || (l !== null && l.suppressHydrationWarning === !0) || p4(e.nodeValue, a))),
              e || mn(t));
          } else ((e = mu(e).createTextNode(l)), (e[bt] = t), (t.stateNode = e));
        }
        return (Je(t), null);
      case 13:
        if (((l = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((o = dl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(i(317));
              o[bt] = t;
            } else (pl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Je(t), (o = !1));
          } else ((o = Wh()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), (o = !0));
          if (!o) return t.flags & 256 ? (Sa(t), t) : (Sa(t), null);
        }
        if ((Sa(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t);
        if (((a = l !== null), (e = e !== null && e.memoizedState !== null), a)) {
          ((l = t.child),
            (o = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (o = l.alternate.memoizedState.cachePool.pool));
          var h = null;
          (l.memoizedState !== null && l.memoizedState.cachePool !== null && (h = l.memoizedState.cachePool.pool),
            h !== o && (l.flags |= 2048));
        }
        return (a !== e && a && (t.child.flags |= 8192), iu(t, t.updateQueue), Je(t), null);
      case 4:
        return (Xe(), e === null && ss(t.stateNode.containerInfo), Je(t), null);
      case 10:
        return (xa(t.type), Je(t), null);
      case 19:
        if ((W(it), (o = t.memoizedState), o === null)) return (Je(t), null);
        if (((l = (t.flags & 128) !== 0), (h = o.rendering), h === null))
          if (l) Rl(o, !1);
          else {
            if (We !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = tu(e)), h !== null)) {
                  for (
                    t.flags |= 128, Rl(o, !1), e = h.updateQueue, t.updateQueue = e, iu(t, e), t.subtreeFlags = 0, e = a, a = t.child;
                    a !== null;
                  )
                    (Fh(a, e), (a = a.sibling));
                  return (te(it, (it.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null && $() > ou && ((t.flags |= 128), (l = !0), Rl(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = tu(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                iu(t, e),
                Rl(o, !0),
                o.tail === null && o.tailMode === "hidden" && !h.alternate && !Be)
              )
                return (Je(t), null);
            } else 2 * $() - o.renderingStartTime > ou && a !== 536870912 && ((t.flags |= 128), (l = !0), Rl(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((e = o.last), e !== null ? (e.sibling = h) : (t.child = h), (o.last = h));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = $()),
            (t.sibling = null),
            (e = it.current),
            te(it, l ? (e & 1) | 2 : e & 1),
            t)
          : (Je(t), null);
      case 22:
      case 23:
        return (
          Sa(t),
          fo(),
          (l = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
          l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t),
          (a = t.updateQueue),
          a !== null && iu(t, a.retryQueue),
          (a = null),
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && W(_n),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          xa(lt),
          Je(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function J7(e, t) {
    switch ((Jc(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (xa(lt), Xe(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 26:
      case 27:
      case 5:
        return (Gt(t), null);
      case 13:
        if ((Sa(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          pl();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (W(it), null);
      case 4:
        return (Xe(), null);
      case 10:
        return (xa(t.type), null);
      case 22:
      case 23:
        return (Sa(t), fo(), e !== null && W(_n), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 24:
        return (xa(lt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _d(e, t) {
    switch ((Jc(t), t.tag)) {
      case 3:
        (xa(lt), Xe());
        break;
      case 26:
      case 27:
      case 5:
        Gt(t);
        break;
      case 4:
        Xe();
        break;
      case 13:
        Sa(t);
        break;
      case 19:
        W(it);
        break;
      case 10:
        xa(t.type);
        break;
      case 22:
      case 23:
        (Sa(t), fo(), e !== null && W(_n));
        break;
      case 24:
        xa(lt);
    }
  }
  function zl(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        a = o;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var h = a.create,
              b = a.inst;
            ((l = h()), (b.destroy = l));
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (y) {
      Ve(t, t.return, y);
    }
  }
  function ka(e, t, a) {
    try {
      var l = t.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var h = o.next;
        l = h;
        do {
          if ((l.tag & e) === e) {
            var b = l.inst,
              y = b.destroy;
            if (y !== void 0) {
              ((b.destroy = void 0), (o = t));
              var T = a,
                B = y;
              try {
                B();
              } catch (V) {
                Ve(o, T, V);
              }
            }
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (V) {
      Ve(t, t.return, V);
    }
  }
  function Sd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        s3(t, a);
      } catch (l) {
        Ve(e, e.return, l);
      }
    }
  }
  function Ed(e, t, a) {
    ((a.props = En(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ve(e, t, l);
    }
  }
  function ql(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (o) {
      Ve(e, t, o);
    }
  }
  function sa(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Ve(e, t, o);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Ve(e, t, o);
        }
      else a.current = null;
  }
  function Cd(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (o) {
      Ve(e, e.return, o);
    }
  }
  function Lo(e, t, a) {
    try {
      var l = e.stateNode;
      (yb(l, e.type, a, t), (l[_t] = t));
    } catch (o) {
      Ve(e, e.return, o);
    }
  }
  function wd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && $a(e.type)) || e.tag === 4;
  }
  function Go(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || wd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if ((e.tag === 27 && $a(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ko(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)
          : ((t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = yu)));
    else if (l !== 4 && (l === 27 && $a(e.type) && ((a = e.stateNode), (t = null)), (e = e.child), e !== null))
      for (ko(e, t, a), e = e.sibling; e !== null; ) (ko(e, t, a), (e = e.sibling));
  }
  function uu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (l !== 4 && (l === 27 && $a(e.type) && (a = e.stateNode), (e = e.child), e !== null))
      for (uu(e, t, a), e = e.sibling; e !== null; ) (uu(e, t, a), (e = e.sibling));
  }
  function Td(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
      (pt(t, l, a), (t[bt] = e), (t[_t] = a));
    } catch (h) {
      Ve(e, e.return, h);
    }
  }
  var wa = !1,
    tt = !1,
    Vo = !1,
    Od = typeof WeakSet == "function" ? WeakSet : Set,
    st = null;
  function I7(e, t) {
    if (((e = e.containerInfo), (ds = Cu), (e = Uh(e)), Lc(e))) {
      if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var o = l.anchorOffset,
              h = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, h.nodeType);
            } catch {
              a = null;
              break e;
            }
            var b = 0,
              y = -1,
              T = -1,
              B = 0,
              V = 0,
              F = e,
              N = null;
            t: for (;;) {
              for (
                var Q;
                F !== a || (o !== 0 && F.nodeType !== 3) || (y = b + o),
                  F !== h || (l !== 0 && F.nodeType !== 3) || (T = b + l),
                  F.nodeType === 3 && (b += F.nodeValue.length),
                  (Q = F.firstChild) !== null;
              )
                ((N = F), (F = Q));
              for (;;) {
                if (F === e) break t;
                if ((N === a && ++B === o && (y = b), N === h && ++V === l && (T = b), (Q = F.nextSibling) !== null)) break;
                ((F = N), (N = F.parentNode));
              }
              F = Q;
            }
            a = y === -1 || T === -1 ? null : { start: y, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ps = { focusedElem: e, selectionRange: a }, Cu = !1, st = t; st !== null; )
      if (((t = st), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)) ((e.return = t), (st = e));
      else
        for (; st !== null; ) {
          switch (((t = st), (h = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && h !== null) {
                ((e = void 0), (a = t), (o = h.memoizedProps), (h = h.memoizedState), (l = a.stateNode));
                try {
                  var be = En(a.type, o, a.elementType === a.type);
                  ((e = l.getSnapshotBeforeUpdate(be, h)), (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (de) {
                  Ve(a, a.return, de);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)) bs(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bs(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (st = e));
            break;
          }
          st = t.return;
        }
  }
  function Md(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Va(e, a), l & 4 && zl(5, a));
        break;
      case 1:
        if ((Va(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (b) {
              Ve(a, a.return, b);
            }
          else {
            var o = En(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              Ve(a, a.return, b);
            }
          }
        (l & 64 && Sd(a), l & 512 && ql(a, a.return));
        break;
      case 3:
        if ((Va(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            s3(e, t);
          } catch (b) {
            Ve(a, a.return, b);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Td(a);
      case 26:
      case 5:
        (Va(e, a), t === null && l & 4 && Cd(a), l & 512 && ql(a, a.return));
        break;
      case 12:
        Va(e, a);
        break;
      case 13:
        (Va(e, a),
          l & 4 && qd(e, a),
          l & 64 && ((e = a.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((a = ub.bind(null, a)), Cb(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || wa), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || tt), (o = wa));
          var h = tt;
          ((wa = l), (tt = t) && !h ? Ya(e, a, (a.subtreeFlags & 8772) !== 0) : Va(e, a), (wa = o), (tt = h));
        }
        break;
      case 30:
        break;
      default:
        Va(e, a);
    }
  }
  function Rd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Rd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xc(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Pe = null,
    Ct = !1;
  function Ta(e, t, a) {
    for (a = a.child; a !== null; ) (zd(e, t, a), (a = a.sibling));
  }
  function zd(e, t, a) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(on, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (tt || sa(a, t),
          Ta(e, t, a),
          a.memoizedState ? a.memoizedState.count-- : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        tt || sa(a, t);
        var l = Pe,
          o = Ct;
        ($a(a.type) && ((Pe = a.stateNode), (Ct = !1)), Ta(e, t, a), Gl(a.stateNode), (Pe = l), (Ct = o));
        break;
      case 5:
        tt || sa(a, t);
      case 6:
        if (((l = Pe), (o = Ct), (Pe = null), Ta(e, t, a), (Pe = l), (Ct = o), Pe !== null))
          if (Ct)
            try {
              (Pe.nodeType === 9 ? Pe.body : Pe.nodeName === "HTML" ? Pe.ownerDocument.body : Pe).removeChild(a.stateNode);
            } catch (h) {
              Ve(a, t, h);
            }
          else
            try {
              Pe.removeChild(a.stateNode);
            } catch (h) {
              Ve(a, t, h);
            }
        break;
      case 18:
        Pe !== null &&
          (Ct
            ? ((e = Pe), m4(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Fl(e))
            : m4(Pe, a.stateNode));
        break;
      case 4:
        ((l = Pe), (o = Ct), (Pe = a.stateNode.containerInfo), (Ct = !0), Ta(e, t, a), (Pe = l), (Ct = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (tt || ka(2, a, t), tt || ka(4, a, t), Ta(e, t, a));
        break;
      case 1:
        (tt || (sa(a, t), (l = a.stateNode), typeof l.componentWillUnmount == "function" && Ed(a, t, l)), Ta(e, t, a));
        break;
      case 21:
        Ta(e, t, a);
        break;
      case 22:
        ((tt = (l = tt) || a.memoizedState !== null), Ta(e, t, a), (tt = l));
        break;
      default:
        Ta(e, t, a);
    }
  }
  function qd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Fl(e);
      } catch (a) {
        Ve(t, t.return, a);
      }
  }
  function W7(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Od()), t);
      case 22:
        return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Od()), t);
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Yo(e, t) {
    var a = W7(e);
    t.forEach(function (l) {
      var o = cb.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(o, o));
    });
  }
  function Ht(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var o = a[l],
          h = e,
          b = t,
          y = b;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if ($a(y.type)) {
                ((Pe = y.stateNode), (Ct = !1));
                break e;
              }
              break;
            case 5:
              ((Pe = y.stateNode), (Ct = !1));
              break e;
            case 3:
            case 4:
              ((Pe = y.stateNode.containerInfo), (Ct = !0));
              break e;
          }
          y = y.return;
        }
        if (Pe === null) throw Error(i(160));
        (zd(h, b, o), (Pe = null), (Ct = !1), (h = o.alternate), h !== null && (h.return = null), (o.return = null));
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) (Dd(t, e), (t = t.sibling));
  }
  var aa = null;
  function Dd(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ht(t, e), jt(e), l & 4 && (ka(3, e, e.return), zl(3, e), ka(5, e, e.return)));
        break;
      case 1:
        (Ht(t, e),
          jt(e),
          l & 512 && (tt || a === null || sa(a, a.return)),
          l & 64 &&
            wa &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null && ((a = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var o = aa;
        if ((Ht(t, e), jt(e), l & 512 && (tt || a === null || sa(a, a.return)), l & 4)) {
          var h = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type), (a = e.memoizedProps), (o = o.ownerDocument || o));
                  t: switch (l) {
                    case "title":
                      ((h = o.getElementsByTagName("title")[0]),
                        (!h || h[al] || h[bt] || h.namespaceURI === "http://www.w3.org/2000/svg" || h.hasAttribute("itemprop")) &&
                          ((h = o.createElement(l)), o.head.insertBefore(h, o.querySelector("head > title"))),
                        pt(h, l, a),
                        (h[bt] = e),
                        ct(h),
                        (l = h));
                      break e;
                    case "link":
                      var b = T4("link", "href", o).get(l + (a.href || ""));
                      if (b) {
                        for (var y = 0; y < b.length; y++)
                          if (
                            ((h = b[y]),
                            h.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) &&
                              h.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              h.getAttribute("title") === (a.title == null ? null : a.title) &&
                              h.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            b.splice(y, 1);
                            break t;
                          }
                      }
                      ((h = o.createElement(l)), pt(h, l, a), o.head.appendChild(h));
                      break;
                    case "meta":
                      if ((b = T4("meta", "content", o).get(l + (a.content || "")))) {
                        for (y = 0; y < b.length; y++)
                          if (
                            ((h = b[y]),
                            h.getAttribute("content") === (a.content == null ? null : "" + a.content) &&
                              h.getAttribute("name") === (a.name == null ? null : a.name) &&
                              h.getAttribute("property") === (a.property == null ? null : a.property) &&
                              h.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) &&
                              h.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            b.splice(y, 1);
                            break t;
                          }
                      }
                      ((h = o.createElement(l)), pt(h, l, a), o.head.appendChild(h));
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  ((h[bt] = e), ct(h), (l = h));
                }
                e.stateNode = l;
              } else O4(o, e.type, e.stateNode);
            else e.stateNode = w4(o, l, e.memoizedProps);
          else
            h !== l
              ? (h === null ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a)) : h.count--,
                l === null ? O4(o, e.type, e.stateNode) : w4(o, l, e.memoizedProps))
              : l === null && e.stateNode !== null && Lo(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ht(t, e), jt(e), l & 512 && (tt || a === null || sa(a, a.return)), a !== null && l & 4 && Lo(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((Ht(t, e), jt(e), l & 512 && (tt || a === null || sa(a, a.return)), e.flags & 32)) {
          o = e.stateNode;
          try {
            Xn(o, "");
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        (l & 4 && e.stateNode != null && ((o = e.memoizedProps), Lo(e, o, a !== null ? a.memoizedProps : o)), l & 1024 && (Vo = !0));
        break;
      case 6:
        if ((Ht(t, e), jt(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          ((_u = null),
          (o = aa),
          (aa = Au(t.containerInfo)),
          Ht(t, e),
          (aa = o),
          jt(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Fl(t.containerInfo);
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        Vo && ((Vo = !1), Hd(e));
        break;
      case 4:
        ((l = aa), (aa = Au(e.stateNode.containerInfo)), Ht(t, e), jt(e), (aa = l));
        break;
      case 12:
        (Ht(t, e), jt(e));
        break;
      case 13:
        (Ht(t, e),
          jt(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (a !== null && a.memoizedState !== null) && ($o = $()),
          l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Yo(e, l))));
        break;
      case 22:
        o = e.memoizedState !== null;
        var T = a !== null && a.memoizedState !== null,
          B = wa,
          V = tt;
        if (((wa = B || o), (tt = V || T), Ht(t, e), (tt = V), (wa = B), jt(e), l & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = o ? t._visibility & -2 : t._visibility | 1,
              o && (a === null || T || wa || tt || Cn(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                T = a = t;
                try {
                  if (((h = T.stateNode), o))
                    ((b = h.style),
                      typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : (b.display = "none"));
                  else {
                    y = T.stateNode;
                    var F = T.memoizedProps.style,
                      N = F != null && F.hasOwnProperty("display") ? F.display : null;
                    y.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (Q) {
                  Ve(T, T.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = o ? "" : T.memoizedProps;
                } catch (Q) {
                  Ve(T, T.return, Q);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        l & 4 && ((l = e.updateQueue), l !== null && ((a = l.retryQueue), a !== null && ((l.retryQueue = null), Yo(e, a))));
        break;
      case 19:
        (Ht(t, e), jt(e), l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Yo(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ht(t, e), jt(e));
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (wd(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode,
              h = Go(e);
            uu(e, h, o);
            break;
          case 5:
            var b = a.stateNode;
            a.flags & 32 && (Xn(b, ""), (a.flags &= -33));
            var y = Go(e);
            uu(e, y, b);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo,
              B = Go(e);
            ko(e, B, T);
            break;
          default:
            throw Error(i(161));
        }
      } catch (V) {
        Ve(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Va(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (Md(e, t.alternate, t), (t = t.sibling));
  }
  function Cn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ka(4, t, t.return), Cn(t));
          break;
        case 1:
          sa(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Ed(t, t.return, a), Cn(t));
          break;
        case 27:
          Gl(t.stateNode);
        case 26:
        case 5:
          (sa(t, t.return), Cn(t));
          break;
        case 22:
          t.memoizedState === null && Cn(t);
          break;
        case 30:
          Cn(t);
          break;
        default:
          Cn(t);
      }
      e = e.sibling;
    }
  }
  function Ya(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        o = e,
        h = t,
        b = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (Ya(o, h, a), zl(4, h));
          break;
        case 1:
          if ((Ya(o, h, a), (l = h), (o = l.stateNode), typeof o.componentDidMount == "function"))
            try {
              o.componentDidMount();
            } catch (B) {
              Ve(l, l.return, B);
            }
          if (((l = h), (o = l.updateQueue), o !== null)) {
            var y = l.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++) o3(T[o], y);
            } catch (B) {
              Ve(l, l.return, B);
            }
          }
          (a && b & 64 && Sd(h), ql(h, h.return));
          break;
        case 27:
          Td(h);
        case 26:
        case 5:
          (Ya(o, h, a), a && l === null && b & 4 && Cd(h), ql(h, h.return));
          break;
        case 12:
          Ya(o, h, a);
          break;
        case 13:
          (Ya(o, h, a), a && b & 4 && qd(o, h));
          break;
        case 22:
          (h.memoizedState === null && Ya(o, h, a), ql(h, h.return));
          break;
        case 30:
          break;
        default:
          Ya(o, h, a);
      }
      t = t.sibling;
    }
  }
  function Xo(e, t) {
    var a = null;
    (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && bl(a)));
  }
  function Zo(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && bl(e)));
  }
  function fa(e, t, a, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (jd(e, t, a, l), (t = t.sibling));
  }
  function jd(e, t, a, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (fa(e, t, a, l), o & 2048 && zl(9, t));
        break;
      case 1:
        fa(e, t, a, l);
        break;
      case 3:
        (fa(e, t, a, l),
          o & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && bl(e))));
        break;
      case 12:
        if (o & 2048) {
          (fa(e, t, a, l), (e = t.stateNode));
          try {
            var h = t.memoizedProps,
              b = h.id,
              y = h.onPostCommit;
            typeof y == "function" && y(b, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (T) {
            Ve(t, t.return, T);
          }
        } else fa(e, t, a, l);
        break;
      case 13:
        fa(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((h = t.stateNode),
          (b = t.alternate),
          t.memoizedState !== null
            ? h._visibility & 2
              ? fa(e, t, a, l)
              : Dl(e, t)
            : h._visibility & 2
              ? fa(e, t, a, l)
              : ((h._visibility |= 2), sr(e, t, a, l, (t.subtreeFlags & 10256) !== 0)),
          o & 2048 && Xo(b, t));
        break;
      case 24:
        (fa(e, t, a, l), o & 2048 && Zo(t.alternate, t));
        break;
      default:
        fa(e, t, a, l);
    }
  }
  function sr(e, t, a, l, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var h = e,
        b = t,
        y = a,
        T = l,
        B = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          (sr(h, b, y, T, o), zl(8, b));
          break;
        case 23:
          break;
        case 22:
          var V = b.stateNode;
          (b.memoizedState !== null ? (V._visibility & 2 ? sr(h, b, y, T, o) : Dl(h, b)) : ((V._visibility |= 2), sr(h, b, y, T, o)),
            o && B & 2048 && Xo(b.alternate, b));
          break;
        case 24:
          (sr(h, b, y, T, o), o && B & 2048 && Zo(b.alternate, b));
          break;
        default:
          sr(h, b, y, T, o);
      }
      t = t.sibling;
    }
  }
  function Dl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          o = l.flags;
        switch (l.tag) {
          case 22:
            (Dl(a, l), o & 2048 && Xo(l.alternate, l));
            break;
          case 24:
            (Dl(a, l), o & 2048 && Zo(l.alternate, l));
            break;
          default:
            Dl(a, l);
        }
        t = t.sibling;
      }
  }
  var Hl = 8192;
  function fr(e) {
    if (e.subtreeFlags & Hl) for (e = e.child; e !== null; ) (Bd(e), (e = e.sibling));
  }
  function Bd(e) {
    switch (e.tag) {
      case 26:
        (fr(e), e.flags & Hl && e.memoizedState !== null && Qb(aa, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        fr(e);
        break;
      case 3:
      case 4:
        var t = aa;
        ((aa = Au(e.stateNode.containerInfo)), fr(e), (aa = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate), t !== null && t.memoizedState !== null ? ((t = Hl), (Hl = 16777216), fr(e), (Hl = t)) : fr(e));
        break;
      default:
        fr(e);
    }
  }
  function Nd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function jl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((st = l), Ud(l, e));
        }
      Nd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Qd(e), (e = e.sibling));
  }
  function Qd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (jl(e), e.flags & 2048 && ka(9, e, e.return));
        break;
      case 3:
        jl(e);
        break;
      case 12:
        jl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), cu(e))
          : jl(e);
        break;
      default:
        jl(e);
    }
  }
  function cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((st = l), Ud(l, e));
        }
      Nd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ka(8, t, t.return), cu(t));
          break;
        case 22:
          ((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), cu(t)));
          break;
        default:
          cu(t);
      }
      e = e.sibling;
    }
  }
  function Ud(e, t) {
    for (; st !== null; ) {
      var a = st;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ka(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          bl(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (st = l));
      else
        e: for (a = e; st !== null; ) {
          l = st;
          var o = l.sibling,
            h = l.return;
          if ((Rd(l), l === a)) {
            st = null;
            break e;
          }
          if (o !== null) {
            ((o.return = h), (st = o));
            break e;
          }
          st = h;
        }
    }
  }
  var eb = {
      getCacheForType: function (e) {
        var t = yt(lt),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
    },
    tb = typeof WeakMap == "function" ? WeakMap : Map,
    Ne = 0,
    Ye = null,
    Me = null,
    qe = 0,
    Qe = 0,
    Bt = null,
    Xa = !1,
    hr = !1,
    Ko = !1,
    Oa = 0,
    We = 0,
    Za = 0,
    wn = 0,
    Po = 0,
    Jt = 0,
    dr = 0,
    Bl = null,
    wt = null,
    Fo = !1,
    $o = 0,
    ou = 1 / 0,
    su = null,
    Ka = null,
    dt = 0,
    Pa = null,
    pr = null,
    vr = 0,
    Jo = 0,
    Io = null,
    Ld = null,
    Nl = 0,
    Wo = null;
  function Nt() {
    if ((Ne & 2) !== 0 && qe !== 0) return qe & -qe;
    if (U.T !== null) {
      var e = ar;
      return e !== 0 ? e : is();
    }
    return ah();
  }
  function Gd() {
    Jt === 0 && (Jt = (qe & 536870912) === 0 || Be ? I2() : 536870912);
    var e = $t.current;
    return (e !== null && (e.flags |= 32), Jt);
  }
  function Qt(e, t, a) {
    (((e === Ye && (Qe === 2 || Qe === 9)) || e.cancelPendingCommit !== null) && (gr(e, 0), Fa(e, qe, Jt, !1)),
      tl(e, a),
      ((Ne & 2) === 0 || e !== Ye) && (e === Ye && ((Ne & 2) === 0 && (wn |= a), We === 4 && Fa(e, qe, Jt, !1)), ha(e)));
  }
  function kd(e, t, a) {
    if ((Ne & 6) !== 0) throw Error(i(327));
    var l = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || el(e, t),
      o = l ? rb(e, t) : as(e, t, !0),
      h = l;
    do {
      if (o === 0) {
        hr && !l && Fa(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), h && !ab(a))) {
          ((o = as(e, t, !1)), (h = !1));
          continue;
        }
        if (o === 2) {
          if (((h = t), e.errorRecoveryDisabledLanes & h)) var b = 0;
          else ((b = e.pendingLanes & -536870913), (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0));
          if (b !== 0) {
            t = b;
            e: {
              var y = e;
              o = Bl;
              var T = y.current.memoizedState.isDehydrated;
              if ((T && (gr(y, b).flags |= 256), (b = as(y, b, !1)), b !== 2)) {
                if (Ko && !T) {
                  ((y.errorRecoveryDisabledLanes |= h), (wn |= h), (o = 4));
                  break e;
                }
                ((h = wt), (wt = o), h !== null && (wt === null ? (wt = h) : wt.push.apply(wt, h)));
              }
              o = b;
            }
            if (((h = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          (gr(e, 0), Fa(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (h = o), h)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Fa(l, t, Jt, !Xa);
              break e;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((o = $o + 300 - $()), 10 < o)) {
            if ((Fa(l, t, Jt, !Xa), xi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = b4(Vd.bind(null, l, a, wt, su, Fo, t, Jt, wn, dr, Xa, h, 2, -0, 0), o);
            break e;
          }
          Vd(l, a, wt, su, Fo, t, Jt, wn, dr, Xa, h, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ha(e);
  }
  function Vd(e, t, a, l, o, h, b, y, T, B, V, F, N, Q) {
    if (
      ((e.timeoutHandle = -1),
      (F = t.subtreeFlags),
      (F & 8192 || (F & 16785408) === 16785408) && ((Yl = { stylesheets: null, count: 0, unsuspend: Nb }), Bd(t), (F = Ub()), F !== null))
    ) {
      ((e.cancelPendingCommit = F($d.bind(null, e, t, h, a, l, o, b, y, T, V, 1, N, Q))), Fa(e, h, b, !B));
      return;
    }
    $d(e, t, h, a, l, o, b, y, T);
  }
  function ab(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null)))
        for (var l = 0; l < a.length; l++) {
          var o = a[l],
            h = o.getSnapshot;
          o = o.value;
          try {
            if (!qt(h(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Fa(e, t, a, l) {
    ((t &= ~Po), (t &= ~wn), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), l && (e.warmLanes |= t), (l = e.expirationTimes));
    for (var o = t; 0 < o; ) {
      var h = 31 - gt(o),
        b = 1 << h;
      ((l[h] = -1), (o &= ~b));
    }
    a !== 0 && eh(e, a, t);
  }
  function fu() {
    return (Ne & 6) === 0 ? (Ql(0), !1) : !0;
  }
  function es() {
    if (Me !== null) {
      if (Qe === 0) var e = Me.return;
      else ((e = Me), (Aa = An = null), bo(e), (cr = null), (Ol = 0), (e = Me));
      for (; e !== null; ) (_d(e.alternate, e), (e = e.return));
      Me = null;
    }
  }
  function gr(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Ab(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      es(),
      (Ye = e),
      (Me = a = ba(e.current, null)),
      (qe = t),
      (Qe = 0),
      (Bt = null),
      (Xa = !1),
      (hr = el(e, t)),
      (Ko = !1),
      (dr = Jt = Po = wn = Za = We = 0),
      (wt = Bl = null),
      (Fo = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - gt(l),
          h = 1 << o;
        ((t |= e[o]), (l &= ~h));
      }
    return ((Oa = t), Di(), a);
  }
  function Yd(e, t) {
    ((Te = null),
      (U.H = Ii),
      t === ml || t === ki
        ? ((t = u3()), (Qe = 3))
        : t === r3
          ? ((t = u3()), (Qe = 4))
          : (Qe = t === cd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1),
      (Bt = t),
      Me === null && ((We = 1), nu(e, Zt(t, e.current))));
  }
  function Xd() {
    var e = U.H;
    return ((U.H = Ii), e === null ? Ii : e);
  }
  function Zd() {
    var e = U.A;
    return ((U.A = eb), e);
  }
  function ts() {
    ((We = 4),
      Xa || ((qe & 4194048) !== qe && $t.current !== null) || (hr = !0),
      ((Za & 134217727) === 0 && (wn & 134217727) === 0) || Ye === null || Fa(Ye, qe, Jt, !1));
  }
  function as(e, t, a) {
    var l = Ne;
    Ne |= 2;
    var o = Xd(),
      h = Zd();
    ((Ye !== e || qe !== t) && ((su = null), gr(e, t)), (t = !1));
    var b = We;
    e: do
      try {
        if (Qe !== 0 && Me !== null) {
          var y = Me,
            T = Bt;
          switch (Qe) {
            case 8:
              (es(), (b = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              $t.current === null && (t = !0);
              var B = Qe;
              if (((Qe = 0), (Bt = null), br(e, y, T, B), a && hr)) {
                b = 0;
                break e;
              }
              break;
            default:
              ((B = Qe), (Qe = 0), (Bt = null), br(e, y, T, B));
          }
        }
        (nb(), (b = We));
        break;
      } catch (V) {
        Yd(e, V);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Aa = An = null),
      (Ne = l),
      (U.H = o),
      (U.A = h),
      Me === null && ((Ye = null), (qe = 0), Di()),
      b
    );
  }
  function nb() {
    for (; Me !== null; ) Kd(Me);
  }
  function rb(e, t) {
    var a = Ne;
    Ne |= 2;
    var l = Xd(),
      o = Zd();
    Ye !== e || qe !== t ? ((su = null), (ou = $() + 500), gr(e, t)) : (hr = el(e, t));
    e: do
      try {
        if (Qe !== 0 && Me !== null) {
          t = Me;
          var h = Bt;
          t: switch (Qe) {
            case 1:
              ((Qe = 0), (Bt = null), br(e, t, h, 1));
              break;
            case 2:
            case 9:
              if (l3(h)) {
                ((Qe = 0), (Bt = null), Pd(t));
                break;
              }
              ((t = function () {
                ((Qe !== 2 && Qe !== 9) || Ye !== e || (Qe = 7), ha(e));
              }),
                h.then(t, t));
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              l3(h) ? ((Qe = 0), (Bt = null), Pd(t)) : ((Qe = 0), (Bt = null), br(e, t, h, 7));
              break;
            case 5:
              var b = null;
              switch (Me.tag) {
                case 26:
                  b = Me.memoizedState;
                case 5:
                case 27:
                  var y = Me;
                  if (!b || M4(b)) {
                    ((Qe = 0), (Bt = null));
                    var T = y.sibling;
                    if (T !== null) Me = T;
                    else {
                      var B = y.return;
                      B !== null ? ((Me = B), hu(B)) : (Me = null);
                    }
                    break t;
                  }
              }
              ((Qe = 0), (Bt = null), br(e, t, h, 5));
              break;
            case 6:
              ((Qe = 0), (Bt = null), br(e, t, h, 6));
              break;
            case 8:
              (es(), (We = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        lb();
        break;
      } catch (V) {
        Yd(e, V);
      }
    while (!0);
    return ((Aa = An = null), (U.H = l), (U.A = o), (Ne = a), Me !== null ? 0 : ((Ye = null), (qe = 0), Di(), We));
  }
  function lb() {
    for (; Me !== null && !_(); ) Kd(Me);
  }
  function Kd(e) {
    var t = Ad(e.alternate, e, Oa);
    ((e.memoizedProps = e.pendingProps), t === null ? hu(e) : (Me = t));
  }
  function Pd(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = pd(a, t, t.pendingProps, t.type, void 0, qe);
        break;
      case 11:
        t = pd(a, t, t.pendingProps, t.type.render, t.ref, qe);
        break;
      case 5:
        bo(t);
      default:
        (_d(a, t), (t = Me = Fh(t, Oa)), (t = Ad(a, t, Oa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? hu(e) : (Me = t));
  }
  function br(e, t, a, l) {
    ((Aa = An = null), bo(t), (cr = null), (Ol = 0));
    var o = t.return;
    try {
      if (P7(e, o, t, a, qe)) {
        ((We = 1), nu(e, Zt(a, e.current)), (Me = null));
        return;
      }
    } catch (h) {
      if (o !== null) throw ((Me = o), h);
      ((We = 1), nu(e, Zt(a, e.current)), (Me = null));
      return;
    }
    t.flags & 32768
      ? (Be || l === 1
          ? (e = !0)
          : hr || (qe & 536870912) !== 0
            ? (e = !1)
            : ((Xa = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) && ((l = $t.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Fd(t, e))
      : hu(t);
  }
  function hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fd(t, Xa);
        return;
      }
      e = t.return;
      var a = $7(t.alternate, t, Oa);
      if (a !== null) {
        Me = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function Fd(e, t) {
    do {
      var a = J7(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (Me = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Me = e;
        return;
      }
      Me = e = a;
    } while (e !== null);
    ((We = 6), (Me = null));
  }
  function $d(e, t, a, l, o, h, b, y, T) {
    e.cancelPendingCommit = null;
    do du();
    while (dt !== 0);
    if ((Ne & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((h = t.lanes | t.childLanes),
        (h |= Xc),
        N8(e, a, h, b, y, T),
        e === Ye && ((Me = Ye = null), (qe = 0)),
        (pr = t),
        (Pa = e),
        (vr = a),
        (Jo = h),
        (Io = o),
        (Ld = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            ob(je, function () {
              return (t4(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = U.T), (U.T = null), (o = Z.p), (Z.p = 2), (b = Ne), (Ne |= 4));
        try {
          I7(e, t, a);
        } finally {
          ((Ne = b), (Z.p = o), (U.T = l));
        }
      }
      ((dt = 1), Jd(), Id(), Wd());
    }
  }
  function Jd() {
    if (dt === 1) {
      dt = 0;
      var e = Pa,
        t = pr,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = U.T), (U.T = null));
        var l = Z.p;
        Z.p = 2;
        var o = Ne;
        Ne |= 4;
        try {
          Dd(t, e);
          var h = ps,
            b = Uh(e.containerInfo),
            y = h.focusedElem,
            T = h.selectionRange;
          if (b !== y && y && y.ownerDocument && Qh(y.ownerDocument.documentElement, y)) {
            if (T !== null && Lc(y)) {
              var B = T.start,
                V = T.end;
              if ((V === void 0 && (V = B), "selectionStart" in y))
                ((y.selectionStart = B), (y.selectionEnd = Math.min(V, y.value.length)));
              else {
                var F = y.ownerDocument || document,
                  N = (F && F.defaultView) || window;
                if (N.getSelection) {
                  var Q = N.getSelection(),
                    be = y.textContent.length,
                    de = Math.min(T.start, be),
                    ke = T.end === void 0 ? de : Math.min(T.end, be);
                  !Q.extend && de > ke && ((b = ke), (ke = de), (de = b));
                  var q = Nh(y, de),
                    M = Nh(y, ke);
                  if (
                    q &&
                    M &&
                    (Q.rangeCount !== 1 ||
                      Q.anchorNode !== q.node ||
                      Q.anchorOffset !== q.offset ||
                      Q.focusNode !== M.node ||
                      Q.focusOffset !== M.offset)
                  ) {
                    var j = F.createRange();
                    (j.setStart(q.node, q.offset),
                      Q.removeAllRanges(),
                      de > ke ? (Q.addRange(j), Q.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), Q.addRange(j)));
                  }
                }
              }
            }
            for (F = [], Q = y; (Q = Q.parentNode); ) Q.nodeType === 1 && F.push({ element: Q, left: Q.scrollLeft, top: Q.scrollTop });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < F.length; y++) {
              var X = F[y];
              ((X.element.scrollLeft = X.left), (X.element.scrollTop = X.top));
            }
          }
          ((Cu = !!ds), (ps = ds = null));
        } finally {
          ((Ne = o), (Z.p = l), (U.T = a));
        }
      }
      ((e.current = t), (dt = 2));
    }
  }
  function Id() {
    if (dt === 2) {
      dt = 0;
      var e = Pa,
        t = pr,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = U.T), (U.T = null));
        var l = Z.p;
        Z.p = 2;
        var o = Ne;
        Ne |= 4;
        try {
          Md(e, t.alternate, t);
        } finally {
          ((Ne = o), (Z.p = l), (U.T = a));
        }
      }
      dt = 3;
    }
  }
  function Wd() {
    if (dt === 4 || dt === 3) {
      ((dt = 0), I());
      var e = Pa,
        t = pr,
        a = vr,
        l = Ld;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (dt = 5) : ((dt = 0), (pr = Pa = null), e4(e, e.pendingLanes));
      var o = e.pendingLanes;
      if ((o === 0 && (Ka = null), mc(a), (t = t.stateNode), vt && typeof vt.onCommitFiberRoot == "function"))
        try {
          vt.onCommitFiberRoot(on, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = U.T), (o = Z.p), (Z.p = 2), (U.T = null));
        try {
          for (var h = e.onRecoverableError, b = 0; b < l.length; b++) {
            var y = l[b];
            h(y.value, { componentStack: y.stack });
          }
        } finally {
          ((U.T = t), (Z.p = o));
        }
      }
      ((vr & 3) !== 0 && du(),
        ha(e),
        (o = e.pendingLanes),
        (a & 4194090) !== 0 && (o & 42) !== 0 ? (e === Wo ? Nl++ : ((Nl = 0), (Wo = e))) : (Nl = 0),
        Ql(0));
    }
  }
  function e4(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), bl(t)));
  }
  function du(e) {
    return (Jd(), Id(), Wd(), t4());
  }
  function t4() {
    if (dt !== 5) return !1;
    var e = Pa,
      t = Jo;
    Jo = 0;
    var a = mc(vr),
      l = U.T,
      o = Z.p;
    try {
      ((Z.p = 32 > a ? 32 : a), (U.T = null), (a = Io), (Io = null));
      var h = Pa,
        b = vr;
      if (((dt = 0), (pr = Pa = null), (vr = 0), (Ne & 6) !== 0)) throw Error(i(331));
      var y = Ne;
      if (((Ne |= 4), Qd(h.current), jd(h, h.current, b, a), (Ne = y), Ql(0, !1), vt && typeof vt.onPostCommitFiberRoot == "function"))
        try {
          vt.onPostCommitFiberRoot(on, h);
        } catch {}
      return !0;
    } finally {
      ((Z.p = o), (U.T = l), e4(e, t));
    }
  }
  function a4(e, t, a) {
    ((t = Zt(a, t)), (t = zo(e.stateNode, t, 2)), (e = Qa(e, t, 2)), e !== null && (tl(e, 2), ha(e)));
  }
  function Ve(e, t, a) {
    if (e.tag === 3) a4(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          a4(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Ka === null || !Ka.has(l)))
          ) {
            ((e = Zt(a, e)), (a = id(2)), (l = Qa(t, a, 2)), l !== null && (ud(a, l, t, e), tl(l, 2), ha(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ns(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new tb();
      var o = new Set();
      l.set(t, o);
    } else ((o = l.get(t)), o === void 0 && ((o = new Set()), l.set(t, o)));
    o.has(a) || ((Ko = !0), o.add(a), (e = ib.bind(null, e, t, a)), t.then(e, e));
  }
  function ib(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ye === e &&
        (qe & a) === a &&
        (We === 4 || (We === 3 && (qe & 62914560) === qe && 300 > $() - $o) ? (Ne & 2) === 0 && gr(e, 0) : (Po |= a),
        dr === qe && (dr = 0)),
      ha(e));
  }
  function n4(e, t) {
    (t === 0 && (t = W2()), (e = In(e, t)), e !== null && (tl(e, t), ha(e)));
  }
  function ub(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), n4(e, a));
  }
  function cb(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          o = e.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (l !== null && l.delete(t), n4(e, a));
  }
  function ob(e, t) {
    return E(e, t);
  }
  var pu = null,
    yr = null,
    rs = !1,
    vu = !1,
    ls = !1,
    Tn = 0;
  function ha(e) {
    (e !== yr && e.next === null && (yr === null ? (pu = yr = e) : (yr = yr.next = e)), (vu = !0), rs || ((rs = !0), fb()));
  }
  function Ql(e, t) {
    if (!ls && vu) {
      ls = !0;
      do
        for (var a = !1, l = pu; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var h = 0;
            else {
              var b = l.suspendedLanes,
                y = l.pingedLanes;
              ((h = (1 << (31 - gt(42 | e) + 1)) - 1), (h &= o & ~(b & ~y)), (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0));
            }
            h !== 0 && ((a = !0), u4(l, h));
          } else
            ((h = qe),
              (h = xi(l, l === Ye ? h : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
              (h & 3) === 0 || el(l, h) || ((a = !0), u4(l, h)));
          l = l.next;
        }
      while (a);
      ls = !1;
    }
  }
  function sb() {
    r4();
  }
  function r4() {
    vu = rs = !1;
    var e = 0;
    Tn !== 0 && (mb() && (e = Tn), (Tn = 0));
    for (var t = $(), a = null, l = pu; l !== null; ) {
      var o = l.next,
        h = l4(l, t);
      (h === 0
        ? ((l.next = null), a === null ? (pu = o) : (a.next = o), o === null && (yr = a))
        : ((a = l), (e !== 0 || (h & 3) !== 0) && (vu = !0)),
        (l = o));
    }
    Ql(e);
  }
  function l4(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, h = e.pendingLanes & -62914561; 0 < h; ) {
      var b = 31 - gt(h),
        y = 1 << b,
        T = o[b];
      (T === -1 ? ((y & a) === 0 || (y & l) !== 0) && (o[b] = B8(y, t)) : T <= t && (e.expiredLanes |= y), (h &= ~y));
    }
    if (
      ((t = Ye),
      (a = qe),
      (a = xi(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (l = e.callbackNode),
      a === 0 || (e === t && (Qe === 2 || Qe === 9)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && z(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((a & 3) === 0 || el(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && z(l), mc(a))) {
        case 2:
        case 8:
          a = Ue;
          break;
        case 32:
          a = je;
          break;
        case 268435456:
          a = $e;
          break;
        default:
          a = je;
      }
      return ((l = i4.bind(null, e)), (a = E(a, l)), (e.callbackPriority = t), (e.callbackNode = a), t);
    }
    return (l !== null && l !== null && z(l), (e.callbackPriority = 2), (e.callbackNode = null), 2);
  }
  function i4(e, t) {
    if (dt !== 0 && dt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (du() && e.callbackNode !== a) return null;
    var l = qe;
    return (
      (l = xi(e, e === Ye ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      l === 0 ? null : (kd(e, l, t), l4(e, $()), e.callbackNode != null && e.callbackNode === a ? i4.bind(null, e) : null)
    );
  }
  function u4(e, t) {
    if (du()) return null;
    kd(e, t, !0);
  }
  function fb() {
    xb(function () {
      (Ne & 6) !== 0 ? E(Ce, sb) : r4();
    });
  }
  function is() {
    return (Tn === 0 && (Tn = I2()), Tn);
  }
  function c4(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wi("" + e);
  }
  function o4(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function hb(e, t, a, l, o) {
    if (t === "submit" && a && a.stateNode === o) {
      var h = c4((o[_t] || null).action),
        b = l.submitter;
      b && ((t = (t = b[_t] || null) ? c4(t.formAction) : b.getAttribute("formAction")), t !== null && ((h = t), (b = null)));
      var y = new Ri("action", "action", null, l, o);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Tn !== 0) {
                  var T = b ? o4(o, b) : new FormData(o);
                  wo(a, { pending: !0, data: T, method: o.method, action: h }, null, T);
                }
              } else
                typeof h == "function" &&
                  (y.preventDefault(),
                  (T = b ? o4(o, b) : new FormData(o)),
                  wo(a, { pending: !0, data: T, method: o.method, action: h }, h, T));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var us = 0; us < Yc.length; us++) {
    var cs = Yc[us],
      db = cs.toLowerCase(),
      pb = cs[0].toUpperCase() + cs.slice(1);
    ta(db, "on" + pb);
  }
  (ta(kh, "onAnimationEnd"),
    ta(Vh, "onAnimationIteration"),
    ta(Yh, "onAnimationStart"),
    ta("dblclick", "onDoubleClick"),
    ta("focusin", "onFocus"),
    ta("focusout", "onBlur"),
    ta(z7, "onTransitionRun"),
    ta(q7, "onTransitionStart"),
    ta(D7, "onTransitionCancel"),
    ta(Xh, "onTransitionEnd"),
    kn("onMouseEnter", ["mouseout", "mouseover"]),
    kn("onMouseLeave", ["mouseout", "mouseover"]),
    kn("onPointerEnter", ["pointerout", "pointerover"]),
    kn("onPointerLeave", ["pointerout", "pointerover"]),
    fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")));
  var Ul =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    vb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));
  function s4(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        o = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var b = l.length - 1; 0 <= b; b--) {
            var y = l[b],
              T = y.instance,
              B = y.currentTarget;
            if (((y = y.listener), T !== h && o.isPropagationStopped())) break e;
            ((h = y), (o.currentTarget = B));
            try {
              h(o);
            } catch (V) {
              au(V);
            }
            ((o.currentTarget = null), (h = T));
          }
        else
          for (b = 0; b < l.length; b++) {
            if (((y = l[b]), (T = y.instance), (B = y.currentTarget), (y = y.listener), T !== h && o.isPropagationStopped())) break e;
            ((h = y), (o.currentTarget = B));
            try {
              h(o);
            } catch (V) {
              au(V);
            }
            ((o.currentTarget = null), (h = T));
          }
      }
    }
  }
  function Re(e, t) {
    var a = t[Ac];
    a === void 0 && (a = t[Ac] = new Set());
    var l = e + "__bubble";
    a.has(l) || (f4(t, e, 2, !1), a.add(l));
  }
  function os(e, t, a) {
    var l = 0;
    (t && (l |= 4), f4(a, e, l, t));
  }
  var gu = "_reactListening" + Math.random().toString(36).slice(2);
  function ss(e) {
    if (!e[gu]) {
      ((e[gu] = !0),
        rh.forEach(function (a) {
          a !== "selectionchange" && (vb.has(a) || os(a, !1, e), os(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gu] || ((t[gu] = !0), os("selectionchange", !1, t));
    }
  }
  function f4(e, t, a, l) {
    switch (j4(t)) {
      case 2:
        var o = kb;
        break;
      case 8:
        o = Vb;
        break;
      default:
        o = Es;
    }
    ((a = o.bind(null, t, a, e)),
      (o = void 0),
      !zc || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
      l
        ? o !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: o })
          : e.addEventListener(t, a, !0)
        : o !== void 0
          ? e.addEventListener(t, a, { passive: o })
          : e.addEventListener(t, a, !1));
  }
  function fs(e, t, a, l, o) {
    var h = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var y = l.stateNode.containerInfo;
          if (y === o) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var T = b.tag;
              if ((T === 3 || T === 4) && b.stateNode.containerInfo === o) return;
              b = b.return;
            }
          for (; y !== null; ) {
            if (((b = Un(y)), b === null)) return;
            if (((T = b.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = h = b;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    yh(function () {
      var B = h,
        V = Mc(a),
        F = [];
      e: {
        var N = Zh.get(e);
        if (N !== void 0) {
          var Q = Ri,
            be = e;
          switch (e) {
            case "keypress":
              if (Oi(a) === 0) break e;
            case "keydown":
            case "keyup":
              Q = o7;
              break;
            case "focusin":
              ((be = "focus"), (Q = jc));
              break;
            case "focusout":
              ((be = "blur"), (Q = jc));
              break;
            case "beforeblur":
            case "afterblur":
              Q = jc;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = xh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = J8;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = h7;
              break;
            case kh:
            case Vh:
            case Yh:
              Q = e7;
              break;
            case Xh:
              Q = p7;
              break;
            case "scroll":
            case "scrollend":
              Q = F8;
              break;
            case "wheel":
              Q = g7;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = a7;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Sh;
              break;
            case "toggle":
            case "beforetoggle":
              Q = y7;
          }
          var de = (t & 4) !== 0,
            ke = !de && (e === "scroll" || e === "scrollend"),
            q = de ? (N !== null ? N + "Capture" : null) : N;
          de = [];
          for (var M = B, j; M !== null; ) {
            var X = M;
            if (
              ((j = X.stateNode),
              (X = X.tag),
              (X !== 5 && X !== 26 && X !== 27) || j === null || q === null || ((X = rl(M, q)), X != null && de.push(Ll(M, X, j))),
              ke)
            )
              break;
            M = M.return;
          }
          0 < de.length && ((N = new Q(N, be, null, a, V)), F.push({ event: N, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            N && a !== Oc && (be = a.relatedTarget || a.fromElement) && (Un(be) || be[Qn]))
          )
            break e;
          if (
            (Q || N) &&
            ((N = V.window === V ? V : (N = V.ownerDocument) ? N.defaultView || N.parentWindow : window),
            Q
              ? ((be = a.relatedTarget || a.toElement),
                (Q = B),
                (be = be ? Un(be) : null),
                be !== null && ((ke = s(be)), (de = be.tag), be !== ke || (de !== 5 && de !== 27 && de !== 6)) && (be = null))
              : ((Q = null), (be = B)),
            Q !== be)
          ) {
            if (
              ((de = xh),
              (X = "onMouseLeave"),
              (q = "onMouseEnter"),
              (M = "mouse"),
              (e === "pointerout" || e === "pointerover") && ((de = Sh), (X = "onPointerLeave"), (q = "onPointerEnter"), (M = "pointer")),
              (ke = Q == null ? N : nl(Q)),
              (j = be == null ? N : nl(be)),
              (N = new de(X, M + "leave", Q, a, V)),
              (N.target = ke),
              (N.relatedTarget = j),
              (X = null),
              Un(V) === B && ((de = new de(q, M + "enter", be, a, V)), (de.target = j), (de.relatedTarget = ke), (X = de)),
              (ke = X),
              Q && be)
            )
              t: {
                for (de = Q, q = be, M = 0, j = de; j; j = mr(j)) M++;
                for (j = 0, X = q; X; X = mr(X)) j++;
                for (; 0 < M - j; ) ((de = mr(de)), M--);
                for (; 0 < j - M; ) ((q = mr(q)), j--);
                for (; M--; ) {
                  if (de === q || (q !== null && de === q.alternate)) break t;
                  ((de = mr(de)), (q = mr(q)));
                }
                de = null;
              }
            else de = null;
            (Q !== null && h4(F, N, Q, de, !1), be !== null && ke !== null && h4(F, ke, be, de, !0));
          }
        }
        e: {
          if (
            ((N = B ? nl(B) : window), (Q = N.nodeName && N.nodeName.toLowerCase()), Q === "select" || (Q === "input" && N.type === "file"))
          )
            var ie = zh;
          else if (Mh(N))
            if (qh) ie = O7;
            else {
              ie = w7;
              var Oe = C7;
            }
          else
            ((Q = N.nodeName),
              !Q || Q.toLowerCase() !== "input" || (N.type !== "checkbox" && N.type !== "radio")
                ? B && Tc(B.elementType) && (ie = zh)
                : (ie = T7));
          if (ie && (ie = ie(e, B))) {
            Rh(F, ie, a, V);
            break e;
          }
          (Oe && Oe(e, N, B), e === "focusout" && B && N.type === "number" && B.memoizedProps.value != null && wc(N, "number", N.value));
        }
        switch (((Oe = B ? nl(B) : window), e)) {
          case "focusin":
            (Mh(Oe) || Oe.contentEditable === "true") && ((Fn = Oe), (Gc = B), (hl = null));
            break;
          case "focusout":
            hl = Gc = Fn = null;
            break;
          case "mousedown":
            kc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((kc = !1), Lh(F, a, V));
            break;
          case "selectionchange":
            if (R7) break;
          case "keydown":
          case "keyup":
            Lh(F, a, V);
        }
        var se;
        if (Nc)
          e: {
            switch (e) {
              case "compositionstart":
                var pe = "onCompositionStart";
                break e;
              case "compositionend":
                pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pe = "onCompositionUpdate";
                break e;
            }
            pe = void 0;
          }
        else Pn ? Th(e, a) && (pe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (pe = "onCompositionStart");
        (pe &&
          (Eh &&
            a.locale !== "ko" &&
            (Pn || pe !== "onCompositionStart"
              ? pe === "onCompositionEnd" && Pn && (se = mh())
              : ((Ha = V), (qc = "value" in Ha ? Ha.value : Ha.textContent), (Pn = !0))),
          (Oe = bu(B, pe)),
          0 < Oe.length &&
            ((pe = new _h(pe, e, null, a, V)),
            F.push({ event: pe, listeners: Oe }),
            se ? (pe.data = se) : ((se = Oh(a)), se !== null && (pe.data = se)))),
          (se = A7 ? x7(e, a) : _7(e, a)) &&
            ((pe = bu(B, "onBeforeInput")),
            0 < pe.length &&
              ((Oe = new _h("onBeforeInput", "beforeinput", null, a, V)), F.push({ event: Oe, listeners: pe }), (Oe.data = se))),
          hb(F, e, B, a, V));
      }
      s4(F, t);
    });
  }
  function Ll(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function bu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var o = e,
        h = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          h === null ||
          ((o = rl(e, a)), o != null && l.unshift(Ll(e, o, h)), (o = rl(e, t)), o != null && l.push(Ll(e, o, h))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function mr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function h4(e, t, a, l, o) {
    for (var h = t._reactName, b = []; a !== null && a !== l; ) {
      var y = a,
        T = y.alternate,
        B = y.stateNode;
      if (((y = y.tag), T !== null && T === l)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        B === null ||
        ((T = B), o ? ((B = rl(a, h)), B != null && b.unshift(Ll(a, B, T))) : o || ((B = rl(a, h)), B != null && b.push(Ll(a, B, T)))),
        (a = a.return));
    }
    b.length !== 0 && e.push({ event: t, listeners: b });
  }
  var gb = /\r\n?/g,
    bb = /\u0000|\uFFFD/g;
  function d4(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        gb,
        `
`,
      )
      .replace(bb, "");
  }
  function p4(e, t) {
    return ((t = d4(t)), d4(e) === t);
  }
  function yu() {}
  function Ge(e, t, a, l, o, h) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Xn(e, l)
          : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Xn(e, "" + l);
        break;
      case "className":
        Si(e, "class", l);
        break;
      case "tabIndex":
        Si(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Si(e, a, l);
        break;
      case "style":
        gh(e, l, h);
        break;
      case "data":
        if (t !== "object") {
          Si(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = wi("" + l)), e.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof h == "function" &&
            (a === "formAction"
              ? (t !== "input" && Ge(e, t, "name", o.name, o, null),
                Ge(e, t, "formEncType", o.formEncType, o, null),
                Ge(e, t, "formMethod", o.formMethod, o, null),
                Ge(e, t, "formTarget", o.formTarget, o, null))
              : (Ge(e, t, "encType", o.encType, o, null), Ge(e, t, "method", o.method, o, null), Ge(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = wi("" + l)), e.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (e.onclick = yu);
        break;
      case "onScroll":
        l != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((a = l.__html), a != null)) {
            if (o.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = wi("" + l)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol"
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        (Re("beforetoggle", e), Re("toggle", e), _i(e, "popover", l));
        break;
      case "xlinkActuate":
        va(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        va(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        va(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        va(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        va(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        va(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        _i(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) && ((a = K8.get(a) || a), _i(e, a, l));
    }
  }
  function hs(e, t, a, l, o, h) {
    switch (a) {
      case "style":
        gh(e, l, h);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((a = l.__html), a != null)) {
            if (o.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Xn(e, l) : (typeof l == "number" || typeof l == "bigint") && Xn(e, "" + l);
        break;
      case "onScroll":
        l != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Re("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = yu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!lh.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((o = a.endsWith("Capture")),
              (t = a.slice(2, o ? a.length - 7 : void 0)),
              (h = e[_t] || null),
              (h = h != null ? h[a] : null),
              typeof h == "function" && e.removeEventListener(t, h, o),
              typeof l == "function")
            ) {
              (typeof h != "function" && h !== null && (a in e ? (e[a] = null) : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, o));
              break e;
            }
            a in e ? (e[a] = l) : l === !0 ? e.setAttribute(a, "") : _i(e, a, l);
          }
    }
  }
  function pt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Re("error", e), Re("load", e));
        var l = !1,
          o = !1,
          h;
        for (h in a)
          if (a.hasOwnProperty(h)) {
            var b = a[h];
            if (b != null)
              switch (h) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Ge(e, t, h, b, a, null);
              }
          }
        (o && Ge(e, t, "srcSet", a.srcSet, a, null), l && Ge(e, t, "src", a.src, a, null));
        return;
      case "input":
        Re("invalid", e);
        var y = (h = b = o = null),
          T = null,
          B = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var V = a[l];
            if (V != null)
              switch (l) {
                case "name":
                  o = V;
                  break;
                case "type":
                  b = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  B = V;
                  break;
                case "value":
                  h = V;
                  break;
                case "defaultValue":
                  y = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(i(137, t));
                  break;
                default:
                  Ge(e, t, l, V, a, null);
              }
          }
        (hh(e, h, y, T, B, b, o, !1), Ei(e));
        return;
      case "select":
        (Re("invalid", e), (l = b = h = null));
        for (o in a)
          if (a.hasOwnProperty(o) && ((y = a[o]), y != null))
            switch (o) {
              case "value":
                h = y;
                break;
              case "defaultValue":
                b = y;
                break;
              case "multiple":
                l = y;
              default:
                Ge(e, t, o, y, a, null);
            }
        ((t = h), (a = b), (e.multiple = !!l), t != null ? Yn(e, !!l, t, !1) : a != null && Yn(e, !!l, a, !0));
        return;
      case "textarea":
        (Re("invalid", e), (h = o = l = null));
        for (b in a)
          if (a.hasOwnProperty(b) && ((y = a[b]), y != null))
            switch (b) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                h = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(i(91));
                break;
              default:
                Ge(e, t, b, y, a, null);
            }
        (ph(e, l, o, h), Ei(e));
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && ((l = a[T]), l != null))
            switch (T) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ge(e, t, T, l, a, null);
            }
        return;
      case "dialog":
        (Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e));
        break;
      case "iframe":
      case "object":
        Re("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ul.length; l++) Re(Ul[l], e);
        break;
      case "image":
        (Re("error", e), Re("load", e));
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Re("error", e), Re("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in a)
          if (a.hasOwnProperty(B) && ((l = a[B]), l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ge(e, t, B, l, a, null);
            }
        return;
      default:
        if (Tc(t)) {
          for (V in a) a.hasOwnProperty(V) && ((l = a[V]), l !== void 0 && hs(e, t, V, l, a, void 0));
          return;
        }
    }
    for (y in a) a.hasOwnProperty(y) && ((l = a[y]), l != null && Ge(e, t, y, l, a, null));
  }
  function yb(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          h = null,
          b = null,
          y = null,
          T = null,
          B = null,
          V = null;
        for (Q in a) {
          var F = a[Q];
          if (a.hasOwnProperty(Q) && F != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = F;
              default:
                l.hasOwnProperty(Q) || Ge(e, t, Q, null, l, F);
            }
        }
        for (var N in l) {
          var Q = l[N];
          if (((F = a[N]), l.hasOwnProperty(N) && (Q != null || F != null)))
            switch (N) {
              case "type":
                h = Q;
                break;
              case "name":
                o = Q;
                break;
              case "checked":
                B = Q;
                break;
              case "defaultChecked":
                V = Q;
                break;
              case "value":
                b = Q;
                break;
              case "defaultValue":
                y = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(i(137, t));
                break;
              default:
                Q !== F && Ge(e, t, N, Q, l, F);
            }
        }
        Cc(e, b, y, T, B, V, h, o);
        return;
      case "select":
        Q = b = y = N = null;
        for (h in a)
          if (((T = a[h]), a.hasOwnProperty(h) && T != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                Q = T;
              default:
                l.hasOwnProperty(h) || Ge(e, t, h, null, l, T);
            }
        for (o in l)
          if (((h = l[o]), (T = a[o]), l.hasOwnProperty(o) && (h != null || T != null)))
            switch (o) {
              case "value":
                N = h;
                break;
              case "defaultValue":
                y = h;
                break;
              case "multiple":
                b = h;
              default:
                h !== T && Ge(e, t, o, h, l, T);
            }
        ((t = y),
          (a = b),
          (l = Q),
          N != null ? Yn(e, !!a, N, !1) : !!l != !!a && (t != null ? Yn(e, !!a, t, !0) : Yn(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        Q = N = null;
        for (y in a)
          if (((o = a[y]), a.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y)))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ge(e, t, y, null, l, o);
            }
        for (b in l)
          if (((o = l[b]), (h = a[b]), l.hasOwnProperty(b) && (o != null || h != null)))
            switch (b) {
              case "value":
                N = o;
                break;
              case "defaultValue":
                Q = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(i(91));
                break;
              default:
                o !== h && Ge(e, t, b, o, l, h);
            }
        dh(e, N, Q);
        return;
      case "option":
        for (var be in a)
          if (((N = a[be]), a.hasOwnProperty(be) && N != null && !l.hasOwnProperty(be)))
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ge(e, t, be, null, l, N);
            }
        for (T in l)
          if (((N = l[T]), (Q = a[T]), l.hasOwnProperty(T) && N !== Q && (N != null || Q != null)))
            switch (T) {
              case "selected":
                e.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Ge(e, t, T, N, l, Q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var de in a) ((N = a[de]), a.hasOwnProperty(de) && N != null && !l.hasOwnProperty(de) && Ge(e, t, de, null, l, N));
        for (B in l)
          if (((N = l[B]), (Q = a[B]), l.hasOwnProperty(B) && N !== Q && (N != null || Q != null)))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(i(137, t));
                break;
              default:
                Ge(e, t, B, N, l, Q);
            }
        return;
      default:
        if (Tc(t)) {
          for (var ke in a) ((N = a[ke]), a.hasOwnProperty(ke) && N !== void 0 && !l.hasOwnProperty(ke) && hs(e, t, ke, void 0, l, N));
          for (V in l) ((N = l[V]), (Q = a[V]), !l.hasOwnProperty(V) || N === Q || (N === void 0 && Q === void 0) || hs(e, t, V, N, l, Q));
          return;
        }
    }
    for (var q in a) ((N = a[q]), a.hasOwnProperty(q) && N != null && !l.hasOwnProperty(q) && Ge(e, t, q, null, l, N));
    for (F in l) ((N = l[F]), (Q = a[F]), !l.hasOwnProperty(F) || N === Q || (N == null && Q == null) || Ge(e, t, F, N, l, Q));
  }
  var ds = null,
    ps = null;
  function mu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function v4(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function g4(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function vs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var gs = null;
  function mb() {
    var e = window.event;
    return e && e.type === "popstate" ? (e === gs ? !1 : ((gs = e), !0)) : ((gs = null), !1);
  }
  var b4 = typeof setTimeout == "function" ? setTimeout : void 0,
    Ab = typeof clearTimeout == "function" ? clearTimeout : void 0,
    y4 = typeof Promise == "function" ? Promise : void 0,
    xb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof y4 < "u"
          ? function (e) {
              return y4.resolve(null).then(e).catch(_b);
            }
          : b4;
  function _b(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function $a(e) {
    return e === "head";
  }
  function m4(e, t) {
    var a = t,
      l = 0,
      o = 0;
    do {
      var h = a.nextSibling;
      if ((e.removeChild(a), h && h.nodeType === 8))
        if (((a = h.data), a === "/$")) {
          if (0 < l && 8 > l) {
            a = l;
            var b = e.ownerDocument;
            if ((a & 1 && Gl(b.documentElement), a & 2 && Gl(b.body), a & 4))
              for (a = b.head, Gl(a), b = a.firstChild; b; ) {
                var y = b.nextSibling,
                  T = b.nodeName;
                (b[al] || T === "SCRIPT" || T === "STYLE" || (T === "LINK" && b.rel.toLowerCase() === "stylesheet") || a.removeChild(b),
                  (b = y));
              }
          }
          if (o === 0) {
            (e.removeChild(h), Fl(t));
            return;
          }
          o--;
        } else a === "$" || a === "$?" || a === "$!" ? o++ : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = h;
    } while (a);
    Fl(t);
  }
  function bs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (bs(a), xc(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Sb(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var o = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[al])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (((h = e.getAttribute("rel")), h === "stylesheet" && e.hasAttribute("data-precedence"))) break;
              if (
                h !== o.rel ||
                e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) ||
                e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) ||
                e.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((h = e.getAttribute("src")),
                (h !== (o.src == null ? null : o.src) ||
                  e.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  h &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var h = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === h) return e;
      } else return e;
      if (((e = na(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Eb(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a) || ((e = na(e.nextSibling)), e === null)) return null;
    return e;
  }
  function ys(e) {
    return e.data === "$!" || (e.data === "$?" && e.ownerDocument.readyState === "complete");
  }
  function Cb(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") t();
    else {
      var l = function () {
        (t(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function na(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var ms = null;
  function A4(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function x4(e, t, a) {
    switch (((t = mu(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Gl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    xc(e);
  }
  var It = new Map(),
    _4 = new Set();
  function Au(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ma = Z.d;
  Z.d = { f: wb, r: Tb, D: Ob, C: Mb, L: Rb, m: zb, X: Db, S: qb, M: Hb };
  function wb() {
    var e = Ma.f(),
      t = fu();
    return e || t;
  }
  function Tb(e) {
    var t = Ln(e);
    t !== null && t.tag === 5 && t.type === "form" ? k3(t) : Ma.r(e);
  }
  var Ar = typeof document > "u" ? null : document;
  function S4(e, t, a) {
    var l = Ar;
    if (l && typeof t == "string" && t) {
      var o = Xt(t);
      ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
        _4.has(o) ||
          (_4.add(o),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(o) === null && ((t = l.createElement("link")), pt(t, "link", e), ct(t), l.head.appendChild(t))));
    }
  }
  function Ob(e) {
    (Ma.D(e), S4("dns-prefetch", e, null));
  }
  function Mb(e, t) {
    (Ma.C(e, t), S4("preconnect", e, t));
  }
  function Rb(e, t, a) {
    Ma.L(e, t, a);
    var l = Ar;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((o += '[imagesrcset="' + Xt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" && (o += '[imagesizes="' + Xt(a.imageSizes) + '"]'))
        : (o += '[href="' + Xt(e) + '"]');
      var h = o;
      switch (t) {
        case "style":
          h = xr(e);
          break;
        case "script":
          h = _r(e);
      }
      It.has(h) ||
        ((e = g({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t }, a)),
        It.set(h, e),
        l.querySelector(o) !== null ||
          (t === "style" && l.querySelector(kl(h))) ||
          (t === "script" && l.querySelector(Vl(h))) ||
          ((t = l.createElement("link")), pt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function zb(e, t) {
    Ma.m(e, t);
    var a = Ar;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        o = 'link[rel="modulepreload"][as="' + Xt(l) + '"][href="' + Xt(e) + '"]',
        h = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = _r(e);
      }
      if (!It.has(h) && ((e = g({ rel: "modulepreload", href: e }, t)), It.set(h, e), a.querySelector(o) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Vl(h))) return;
        }
        ((l = a.createElement("link")), pt(l, "link", e), ct(l), a.head.appendChild(l));
      }
    }
  }
  function qb(e, t, a) {
    Ma.S(e, t, a);
    var l = Ar;
    if (l && e) {
      var o = Gn(l).hoistableStyles,
        h = xr(e);
      t = t || "default";
      var b = o.get(h);
      if (!b) {
        var y = { loading: 0, preload: null };
        if ((b = l.querySelector(kl(h)))) y.loading = 5;
        else {
          ((e = g({ rel: "stylesheet", href: e, "data-precedence": t }, a)), (a = It.get(h)) && As(e, a));
          var T = (b = l.createElement("link"));
          (ct(T),
            pt(T, "link", e),
            (T._p = new Promise(function (B, V) {
              ((T.onload = B), (T.onerror = V));
            })),
            T.addEventListener("load", function () {
              y.loading |= 1;
            }),
            T.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            xu(b, t, l));
        }
        ((b = { type: "stylesheet", instance: b, count: 1, state: y }), o.set(h, b));
      }
    }
  }
  function Db(e, t) {
    Ma.X(e, t);
    var a = Ar;
    if (a && e) {
      var l = Gn(a).hoistableScripts,
        o = _r(e),
        h = l.get(o);
      h ||
        ((h = a.querySelector(Vl(o))),
        h ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = It.get(o)) && xs(e, t),
          (h = a.createElement("script")),
          ct(h),
          pt(h, "link", e),
          a.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        l.set(o, h));
    }
  }
  function Hb(e, t) {
    Ma.M(e, t);
    var a = Ar;
    if (a && e) {
      var l = Gn(a).hoistableScripts,
        o = _r(e),
        h = l.get(o);
      h ||
        ((h = a.querySelector(Vl(o))),
        h ||
          ((e = g({ src: e, async: !0, type: "module" }, t)),
          (t = It.get(o)) && xs(e, t),
          (h = a.createElement("script")),
          ct(h),
          pt(h, "link", e),
          a.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        l.set(o, h));
    }
  }
  function E4(e, t, a, l) {
    var o = (o = he.current) ? Au(o) : null;
    if (!o) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = xr(a.href)),
            (a = Gn(o).hoistableStyles),
            (l = a.get(t)),
            l || ((l = { type: "style", instance: null, count: 0, state: null }), a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = xr(a.href);
          var h = Gn(o).hoistableStyles,
            b = h.get(e);
          if (
            (b ||
              ((o = o.ownerDocument || o),
              (b = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
              h.set(e, b),
              (h = o.querySelector(kl(e))) && !h._p && ((b.instance = h), (b.state.loading = 5)),
              It.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                It.set(e, a),
                h || jb(o, e, a, b.state))),
            t && l === null)
          )
            throw Error(i(528, ""));
          return b;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = _r(a)),
              (a = Gn(o).hoistableScripts),
              (l = a.get(t)),
              l || ((l = { type: "script", instance: null, count: 0, state: null }), a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function xr(e) {
    return 'href="' + Xt(e) + '"';
  }
  function kl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function C4(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function jb(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        pt(t, "link", a),
        ct(t),
        e.head.appendChild(t));
  }
  function _r(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function Vl(e) {
    return "script[async]" + e;
  }
  function w4(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Xt(a.href) + '"]');
          if (l) return ((t.instance = l), ct(l), l);
          var o = g({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
          return ((l = (e.ownerDocument || e).createElement("style")), ct(l), pt(l, "style", o), xu(l, a.precedence, e), (t.instance = l));
        case "stylesheet":
          o = xr(a.href);
          var h = e.querySelector(kl(o));
          if (h) return ((t.state.loading |= 4), (t.instance = h), ct(h), h);
          ((l = C4(a)), (o = It.get(o)) && As(l, o), (h = (e.ownerDocument || e).createElement("link")), ct(h));
          var b = h;
          return (
            (b._p = new Promise(function (y, T) {
              ((b.onload = y), (b.onerror = T));
            })),
            pt(h, "link", l),
            (t.state.loading |= 4),
            xu(h, a.precedence, e),
            (t.instance = h)
          );
        case "script":
          return (
            (h = _r(a.src)),
            (o = e.querySelector(Vl(h)))
              ? ((t.instance = o), ct(o), o)
              : ((l = a),
                (o = It.get(h)) && ((l = g({}, a)), xs(l, o)),
                (e = e.ownerDocument || e),
                (o = e.createElement("script")),
                ct(o),
                pt(o, "link", l),
                e.head.appendChild(o),
                (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && ((l = t.instance), (t.state.loading |= 4), xu(l, a.precedence, e));
    return t.instance;
  }
  function xu(e, t, a) {
    for (
      var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        o = l.length ? l[l.length - 1] : null,
        h = o,
        b = 0;
      b < l.length;
      b++
    ) {
      var y = l[b];
      if (y.dataset.precedence === t) h = y;
      else if (h !== o) break;
    }
    h ? h.parentNode.insertBefore(e, h.nextSibling) : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function As(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function xs(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var _u = null;
  function T4(e, t, a) {
    if (_u === null) {
      var l = new Map(),
        o = (_u = new Map());
      o.set(a, l);
    } else ((o = _u), (l = o.get(a)), l || ((l = new Map()), o.set(a, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
      var h = a[o];
      if (
        !(h[al] || h[bt] || (e === "link" && h.getAttribute("rel") === "stylesheet")) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var b = h.getAttribute(t) || "";
        b = e + b;
        var y = l.get(b);
        y ? y.push(h) : l.set(b, [h]);
      }
    }
    return l;
  }
  function O4(e, t, a) {
    ((e = e.ownerDocument || e), e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null));
  }
  function Bb(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return ((e = t.disabled), typeof t.precedence == "string" && e == null);
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function M4(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Yl = null;
  function Nb() {}
  function Qb(e, t, a) {
    if (Yl === null) throw Error(i(475));
    var l = Yl;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = xr(a.href),
          h = e.querySelector(kl(o));
        if (h) {
          ((e = h._p),
            e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, (l = Su.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = h),
            ct(h));
          return;
        }
        ((h = e.ownerDocument || e), (a = C4(a)), (o = It.get(o)) && As(a, o), (h = h.createElement("link")), ct(h));
        var b = h;
        ((b._p = new Promise(function (y, T) {
          ((b.onload = y), (b.onerror = T));
        })),
          pt(h, "link", a),
          (t.instance = h));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++, (t = Su.bind(l)), e.addEventListener("load", t), e.addEventListener("error", t)));
    }
  }
  function Ub() {
    if (Yl === null) throw Error(i(475));
    var e = Yl;
    return (
      e.stylesheets && e.count === 0 && _s(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && _s(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function Su() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) _s(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Eu = null;
  function _s(e, t) {
    ((e.stylesheets = null), e.unsuspend !== null && (e.count++, (Eu = new Map()), t.forEach(Lb, e), (Eu = null), Su.call(e)));
  }
  function Lb(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Eu.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Eu.set(e, a));
        for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), h = 0; h < o.length; h++) {
          var b = o[h];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (a.set(b.dataset.precedence, b), (l = b));
        }
        l && a.set(null, l);
      }
      ((o = t.instance),
        (b = o.getAttribute("data-precedence")),
        (h = a.get(b) || l),
        h === l && a.set(null, o),
        a.set(b, o),
        this.count++,
        (l = Su.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        h ? h.parentNode.insertBefore(o, h.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Xl = { $$typeof: L, Provider: null, Consumer: null, _currentValue: re, _currentValue2: re, _threadCount: 0 };
  function Gb(e, t, a, l, o, h, b, y) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = bc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bc(0)),
      (this.hiddenUpdates = bc(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = h),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function R4(e, t, a, l, o, h, b, y, T, B, V, F) {
    return (
      (e = new Gb(e, t, a, b, y, T, B, F)),
      (t = 1),
      h === !0 && (t |= 24),
      (h = Dt(3, null, null, t)),
      (e.current = h),
      (h.stateNode = e),
      (t = ao()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (h.memoizedState = { element: l, isDehydrated: a, cache: t }),
      io(h),
      e
    );
  }
  function z4(e) {
    return e ? ((e = Wn), e) : Wn;
  }
  function q4(e, t, a, l, o, h) {
    ((o = z4(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = Na(t)),
      (l.payload = { element: a }),
      (h = h === void 0 ? null : h),
      h !== null && (l.callback = h),
      (a = Qa(e, l, t)),
      a !== null && (Qt(a, e, t), xl(a, e, t)));
  }
  function D4(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ss(e, t) {
    (D4(e, t), (e = e.alternate) && D4(e, t));
  }
  function H4(e) {
    if (e.tag === 13) {
      var t = In(e, 67108864);
      (t !== null && Qt(t, e, 67108864), Ss(e, 67108864));
    }
  }
  var Cu = !0;
  function kb(e, t, a, l) {
    var o = U.T;
    U.T = null;
    var h = Z.p;
    try {
      ((Z.p = 2), Es(e, t, a, l));
    } finally {
      ((Z.p = h), (U.T = o));
    }
  }
  function Vb(e, t, a, l) {
    var o = U.T;
    U.T = null;
    var h = Z.p;
    try {
      ((Z.p = 8), Es(e, t, a, l));
    } finally {
      ((Z.p = h), (U.T = o));
    }
  }
  function Es(e, t, a, l) {
    if (Cu) {
      var o = Cs(l);
      if (o === null) (fs(e, t, l, wu, a), B4(e, l));
      else if (Xb(o, e, t, a, l)) l.stopPropagation();
      else if ((B4(e, l), t & 4 && -1 < Yb.indexOf(e))) {
        for (; o !== null; ) {
          var h = Ln(o);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var b = sn(h.pendingLanes);
                  if (b !== 0) {
                    var y = h;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; b; ) {
                      var T = 1 << (31 - gt(b));
                      ((y.entanglements[1] |= T), (b &= ~T));
                    }
                    (ha(h), (Ne & 6) === 0 && ((ou = $() + 500), Ql(0)));
                  }
                }
                break;
              case 13:
                ((y = In(h, 2)), y !== null && Qt(y, h, 2), fu(), Ss(h, 2));
            }
          if (((h = Cs(l)), h === null && fs(e, t, l, wu, a), h === o)) break;
          o = h;
        }
        o !== null && l.stopPropagation();
      } else fs(e, t, l, null, a);
    }
  }
  function Cs(e) {
    return ((e = Mc(e)), ws(e));
  }
  var wu = null;
  function ws(e) {
    if (((wu = null), (e = Un(e)), e !== null)) {
      var t = s(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((wu = e), null);
  }
  function j4(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ae()) {
          case Ce:
            return 2;
          case Ue:
            return 8;
          case je:
          case Fe:
            return 32;
          case $e:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ts = !1,
    Ja = null,
    Ia = null,
    Wa = null,
    Zl = new Map(),
    Kl = new Map(),
    en = [],
    Yb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function B4(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ja = null;
        break;
      case "dragenter":
      case "dragleave":
        Ia = null;
        break;
      case "mouseover":
      case "mouseout":
        Wa = null;
        break;
      case "pointerover":
      case "pointerout":
        Zl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kl.delete(t.pointerId);
    }
  }
  function Pl(e, t, a, l, o, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = { blockedOn: t, domEventName: a, eventSystemFlags: l, nativeEvent: h, targetContainers: [o] }),
        t !== null && ((t = Ln(t)), t !== null && H4(t)),
        e)
      : ((e.eventSystemFlags |= l), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Xb(e, t, a, l, o) {
    switch (t) {
      case "focusin":
        return ((Ja = Pl(Ja, e, t, a, l, o)), !0);
      case "dragenter":
        return ((Ia = Pl(Ia, e, t, a, l, o)), !0);
      case "mouseover":
        return ((Wa = Pl(Wa, e, t, a, l, o)), !0);
      case "pointerover":
        var h = o.pointerId;
        return (Zl.set(h, Pl(Zl.get(h) || null, e, t, a, l, o)), !0);
      case "gotpointercapture":
        return ((h = o.pointerId), Kl.set(h, Pl(Kl.get(h) || null, e, t, a, l, o)), !0);
    }
    return !1;
  }
  function N4(e) {
    var t = Un(e.target);
    if (t !== null) {
      var a = s(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = f(a)), t !== null)) {
            ((e.blockedOn = t),
              Q8(e.priority, function () {
                if (a.tag === 13) {
                  var l = Nt();
                  l = yc(l);
                  var o = In(a, l);
                  (o !== null && Qt(o, a, l), Ss(a, l));
                }
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Cs(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Oc = l), a.target.dispatchEvent(l), (Oc = null));
      } else return ((t = Ln(a)), t !== null && H4(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Q4(e, t, a) {
    Tu(e) && a.delete(t);
  }
  function Zb() {
    ((Ts = !1),
      Ja !== null && Tu(Ja) && (Ja = null),
      Ia !== null && Tu(Ia) && (Ia = null),
      Wa !== null && Tu(Wa) && (Wa = null),
      Zl.forEach(Q4),
      Kl.forEach(Q4));
  }
  function Ou(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), Ts || ((Ts = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Zb)));
  }
  var Mu = null;
  function U4(e) {
    Mu !== e &&
      ((Mu = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Mu === e && (Mu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            o = e[t + 2];
          if (typeof l != "function") {
            if (ws(l || a) === null) continue;
            break;
          }
          var h = Ln(a);
          h !== null && (e.splice(t, 3), (t -= 3), wo(h, { pending: !0, data: o, method: a.method, action: l }, l, o));
        }
      }));
  }
  function Fl(e) {
    function t(T) {
      return Ou(T, e);
    }
    (Ja !== null && Ou(Ja, e), Ia !== null && Ou(Ia, e), Wa !== null && Ou(Wa, e), Zl.forEach(t), Kl.forEach(t));
    for (var a = 0; a < en.length; a++) {
      var l = en[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < en.length && ((a = en[0]), a.blockedOn === null); ) (N4(a), a.blockedOn === null && en.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var o = a[l],
          h = a[l + 1],
          b = o[_t] || null;
        if (typeof h == "function") b || U4(a);
        else if (b) {
          var y = null;
          if (h && h.hasAttribute("formAction")) {
            if (((o = h), (b = h[_t] || null))) y = b.formAction;
            else if (ws(o) !== null) continue;
          } else y = b.action;
          (typeof y == "function" ? (a[l + 1] = y) : (a.splice(l, 3), (l -= 3)), U4(a));
        }
      }
  }
  function Os(e) {
    this._internalRoot = e;
  }
  ((Ru.prototype.render = Os.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var a = t.current,
        l = Nt();
      q4(a, l, e, t, null, null);
    }),
    (Ru.prototype.unmount = Os.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (q4(e.current, 2, null, e, null, null), fu(), (t[Qn] = null));
        }
      }));
  function Ru(e) {
    this._internalRoot = e;
  }
  Ru.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ah();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < en.length && t !== 0 && t < en[a].priority; a++);
      (en.splice(a, 0, e), a === 0 && N4(e));
    }
  };
  var L4 = n.version;
  if (L4 !== "19.1.0") throw Error(i(527, L4, "19.1.0"));
  Z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return ((e = v(t)), (e = e !== null ? p(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var Kb = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: U, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zu.isDisabled && zu.supportsFiber)
      try {
        ((on = zu.inject(Kb)), (vt = zu));
      } catch {}
  }
  return (
    (Jl.createRoot = function (e, t) {
      if (!c(e)) throw Error(i(299));
      var a = !1,
        l = "",
        o = ad,
        h = nd,
        b = rd,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (h = t.onCaughtError),
          t.onRecoverableError !== void 0 && (b = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)),
        (t = R4(e, 1, !1, null, null, a, l, o, h, b, y, null)),
        (e[Qn] = t.current),
        ss(e),
        new Os(t)
      );
    }),
    (Jl.hydrateRoot = function (e, t, a) {
      if (!c(e)) throw Error(i(299));
      var l = !1,
        o = "",
        h = ad,
        b = nd,
        y = rd,
        T = null,
        B = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (h = a.onUncaughtError),
          a.onCaughtError !== void 0 && (b = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 && (T = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (B = a.formState)),
        (t = R4(e, 1, !0, t, a ?? null, l, o, h, b, y, T, B)),
        (t.context = z4(null)),
        (a = t.current),
        (l = Nt()),
        (l = yc(l)),
        (o = Na(l)),
        (o.callback = null),
        Qa(a, o, l),
        (a = l),
        (t.current.lanes = a),
        tl(t, a),
        ha(t),
        (e[Qn] = t.current),
        ss(e),
        new Ru(t)
      );
    }),
    (Jl.version = "19.1.0"),
    Jl
  );
}
var $4;
function r9() {
  if ($4) return Rs.exports;
  $4 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return (r(), (Rs.exports = n9()), Rs.exports);
}
var l9 = r9(),
  Ee = un();
const S = Fr(Ee),
  i9 = Fb({ __proto__: null, default: S }, [Ee]);
function u9(r, n) {
  if (r instanceof RegExp) return { keys: !1, pattern: r };
  var u,
    i,
    c,
    s,
    f = [],
    d = "",
    v = r.split("/");
  for (v[0] || v.shift(); (c = v.shift()); )
    ((u = c[0]),
      u === "*"
        ? (f.push(u), (d += c[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : u === ":"
          ? ((i = c.indexOf("?", 1)),
            (s = c.indexOf(".", 1)),
            f.push(c.substring(1, ~i ? i : ~s ? s : c.length)),
            (d += ~i && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~s && (d += (~i ? "?" : "") + "\\" + c.substring(s)))
          : (d += "/" + c));
  return { keys: f, pattern: new RegExp("^" + d + (n ? "(?=$|/)" : "/?$"), "i") };
}
var js = { exports: {} },
  Bs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J4;
function c9() {
  if (J4) return Bs;
  J4 = 1;
  var r = un();
  function n(A, m) {
    return (A === m && (A !== 0 || 1 / A === 1 / m)) || (A !== A && m !== m);
  }
  var u = typeof Object.is == "function" ? Object.is : n,
    i = r.useState,
    c = r.useEffect,
    s = r.useLayoutEffect,
    f = r.useDebugValue;
  function d(A, m) {
    var x = m(),
      w = i({ inst: { value: x, getSnapshot: m } }),
      O = w[0].inst,
      R = w[1];
    return (
      s(
        function () {
          ((O.value = x), (O.getSnapshot = m), v(O) && R({ inst: O }));
        },
        [A, x, m],
      ),
      c(
        function () {
          return (
            v(O) && R({ inst: O }),
            A(function () {
              v(O) && R({ inst: O });
            })
          );
        },
        [A],
      ),
      f(x),
      x
    );
  }
  function v(A) {
    var m = A.getSnapshot;
    A = A.value;
    try {
      var x = m();
      return !u(A, x);
    } catch {
      return !0;
    }
  }
  function p(A, m) {
    return m();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : d;
  return ((Bs.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : g), Bs);
}
var I4;
function o9() {
  return (I4 || ((I4 = 1), (js.exports = c9())), js.exports);
}
var s9 = o9();
const f9 = i9.useInsertionEffect,
  h9 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  d9 = h9 ? Ee.useLayoutEffect : Ee.useEffect,
  p9 = f9 || d9,
  dg = r => {
    const n = Ee.useRef([r, (...u) => n[0](...u)]).current;
    return (
      p9(() => {
        n[0] = r;
      }),
      n[1]
    );
  },
  v9 = "popstate",
  r2 = "pushState",
  l2 = "replaceState",
  g9 = "hashchange",
  W4 = [v9, r2, l2, g9],
  b9 = r => {
    for (const n of W4) addEventListener(n, r);
    return () => {
      for (const n of W4) removeEventListener(n, r);
    };
  },
  pg = (r, n) => s9.useSyncExternalStore(b9, r, n),
  y9 = () => location.search,
  m9 = ({ ssrSearch: r = "" } = {}) => pg(y9, () => r),
  ep = () => location.pathname,
  A9 = ({ ssrPath: r } = {}) => pg(ep, r ? () => r : ep),
  x9 = (r, { replace: n = !1, state: u = null } = {}) => history[n ? l2 : r2](u, "", r),
  _9 = (r = {}) => [A9(r), x9],
  tp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[tp] > "u") {
  for (const r of [r2, l2]) {
    const n = history[r];
    history[r] = function () {
      const u = n.apply(this, arguments),
        i = new Event(r);
      return ((i.arguments = arguments), dispatchEvent(i), u);
    };
  }
  Object.defineProperty(window, tp, { value: !0 });
}
const S9 = (r, n) => (n.toLowerCase().indexOf(r.toLowerCase()) ? "~" + n : n.slice(r.length) || "/"),
  vg = (r = "") => (r === "/" ? "" : r),
  E9 = (r, n) => (r[0] === "~" ? r.slice(1) : vg(n) + r),
  C9 = (r = "", n) => S9(ap(vg(r)), ap(n)),
  ap = r => {
    try {
      return decodeURI(r);
    } catch {
      return r;
    }
  },
  gg = { hook: _9, searchHook: m9, parser: u9, base: "", ssrPath: void 0, ssrSearch: void 0, ssrContext: void 0, hrefs: r => r },
  bg = Ee.createContext(gg),
  ec = () => Ee.useContext(bg),
  yg = {},
  mg = Ee.createContext(yg),
  w9 = () => Ee.useContext(mg),
  i2 = r => {
    const [n, u] = r.hook(r);
    return [C9(r.base, n), dg((i, c) => u(E9(i, r.base), c))];
  },
  Ag = (r, n, u, i) => {
    const { pattern: c, keys: s } = n instanceof RegExp ? { keys: !1, pattern: n } : r(n || "*", i),
      f = c.exec(u) || [],
      [d, ...v] = f;
    return d !== void 0
      ? [
          !0,
          (() => {
            const p = s !== !1 ? Object.fromEntries(s.map((A, m) => [A, v[m]])) : f.groups;
            let g = { ...v };
            return (p && Object.assign(g, p), g);
          })(),
          ...(i ? [d] : []),
        ]
      : [!1, null];
  },
  T9 = ({ children: r, ...n }) => {
    const u = ec(),
      i = n.hook ? gg : u;
    let c = i;
    const [s, f] = n.ssrPath?.split("?") ?? [];
    (f && ((n.ssrSearch = f), (n.ssrPath = s)), (n.hrefs = n.hrefs ?? n.hook?.hrefs));
    let d = Ee.useRef({}),
      v = d.current,
      p = v;
    for (let g in i) {
      const A = g === "base" ? i[g] + (n[g] || "") : n[g] || i[g];
      (v === p && A !== p[g] && (d.current = p = { ...p }), (p[g] = A), (A !== i[g] || A !== c[g]) && (c = p));
    }
    return Ee.createElement(bg.Provider, { value: c, children: r });
  },
  np = ({ children: r, component: n }, u) => (n ? Ee.createElement(n, { params: u }) : typeof r == "function" ? r(u) : r),
  O9 = r => {
    let n = Ee.useRef(yg);
    const u = n.current;
    return (n.current = Object.keys(r).length !== Object.keys(u).length || Object.entries(r).some(([i, c]) => c !== u[i]) ? r : u);
  },
  Ns = ({ path: r, nest: n, match: u, ...i }) => {
    const c = ec(),
      [s] = i2(c),
      [f, d, v] = u ?? Ag(c.parser, r, s, n),
      p = O9({ ...w9(), ...d });
    if (!f) return null;
    const g = v ? Ee.createElement(T9, { base: v }, np(i, p)) : np(i, p);
    return Ee.createElement(mg.Provider, { value: p, children: g });
  },
  Pr = Ee.forwardRef((r, n) => {
    const u = ec(),
      [i, c] = i2(u),
      { to: s = "", href: f = s, onClick: d, asChild: v, children: p, className: g, replace: A, state: m, ...x } = r,
      w = dg(R => {
        R.ctrlKey || R.metaKey || R.altKey || R.shiftKey || R.button !== 0 || (d?.(R), R.defaultPrevented || (R.preventDefault(), c(f, r)));
      }),
      O = u.hrefs(f[0] === "~" ? f.slice(1) : u.base + f, u);
    return v && Ee.isValidElement(p)
      ? Ee.cloneElement(p, { onClick: w, href: O })
      : Ee.createElement("a", { ...x, onClick: w, href: O, className: g?.call ? g(i === f) : g, children: p, ref: n });
  }),
  xg = r => (Array.isArray(r) ? r.flatMap(n => xg(n && n.type === Ee.Fragment ? n.props.children : n)) : [r]),
  M9 = ({ children: r, location: n }) => {
    const u = ec(),
      [i] = i2(u);
    for (const c of xg(r)) {
      let s = 0;
      if (Ee.isValidElement(c) && (s = Ag(u.parser, c.props.path, n || i, c.props.nest))[0]) return Ee.cloneElement(c, { match: s });
    }
    return null;
  },
  R9 = "" + new URL("drawllab-logo-BlsAwChl.svg", import.meta.url).href,
  z9 = "" + new URL("drawllab-icon-C__svyG8.svg", import.meta.url).href,
  q9 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20width='13.522069mm'%20height='17.325792mm'%20viewBox='0%200%2013.522069%2017.325792'%20version='1.1'%20id='svg8'%20inkscape:version='0.92.4%20(5da689c313,%202019-01-14)'%20sodipodi:docname='drawllab-icon-mouse.svg'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='base'%20pagecolor='%23ffffff'%20bordercolor='%23666666'%20borderopacity='1.0'%20inkscape:pageopacity='0.0'%20inkscape:pageshadow='2'%20inkscape:zoom='3.959798'%20inkscape:cx='-49.19707'%20inkscape:cy='70.805623'%20inkscape:document-units='mm'%20inkscape:current-layer='layer1'%20showgrid='false'%20inkscape:window-width='1806'%20inkscape:window-height='1408'%20inkscape:window-x='2177'%20inkscape:window-y='86'%20inkscape:window-maximized='1'%20/%3e%3cmetadata%20id='metadata5'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'%20/%3e%3cdc:title%3e%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cg%20inkscape:label='Layer%201'%20inkscape:groupmode='layer'%20id='layer1'%20transform='translate(-239.03321,251.91112)'%3e%3cpath%20style='fill:%235e878b;fill-opacity:1;stroke-width:0.08466667'%20d='m%20252.29351,-241.59649%20c%20-0.70411,0.30879%20-1.52448,0.0211%20-2.27629,0.0885%20-0.76042,-0.0109%20-1.50728,0.0119%20-2.26731,-0.12629%20-0.47038,0.14568%20-1.60438,-0.59423%20-1.69731,0.08%200.38043,0.69088%200.81272,1.39502%201.16179,2.09364%200.41395,0.53507%200.66221,1.1427%201.07978,1.65963%200.38027,0.5959%200.885,1.24497%200.62265,1.99587%20-0.10805,0.80058%20-0.99895,1.49571%20-1.78946,1.11045%20-0.94336,-0.14756%20-1.15797,-1.05559%20-1.68178,-1.67869%20-0.39395,-0.7043%20-0.7261,-1.44595%20-1.14093,-2.14445%20-0.2924,-0.58899%20-0.58221,-1.1811%20-0.80904,-1.79907%20-1.00285,1.36046%20-2.1152,3.11064%20-3.08665,4.49402%20-0.18913,0.44146%20-0.74259,0.98942%20-0.93713,0.22538%20-0.28178,-0.81968%20-0.34699,-1.71974%20-0.37157,-2.59007%200.13078,-2.19538%20-0.0866,-4.69545%20-0.01,-6.9671%20-0.006,-0.6375%20-0.0903,-1.29508%20-0.0297,-1.93998%20-0.0826,-0.81958%200.0526,-1.67622%200.007,-2.51351%200.003,-0.73756%20-0.08,-1.46357%200.12385,-2.19257%200.69824,-0.42472%201.33041,0.49252%201.92134,0.78691%200.6515,0.40112%201.2169,0.89638%201.79928,1.36282%200.50597,0.54006%201.0696,1.03993%201.70262,1.45065%200.55341,0.47436%201.11949,0.92212%201.73372,1.30959%200.6377,0.47674%201.31185,0.89571%201.91775,1.41497%200.60487,0.41665%201.12867,0.9441%201.75067,1.36051%200.6086,0.39265%201.02864,1.01385%201.6373,1.40446%200.24188,0.27751%201.41614,0.66458%200.6389,1.11431%20z'%20id='path5104'%20inkscape:connector-curvature='0'%20sodipodi:nodetypes='ccccccccccccccccccccccccccc'%20/%3e%3c/g%3e%3c/svg%3e";
function D9() {
  return K.jsxs("div", {
    className: "home",
    children: [
      K.jsx("div", { className: "home__logo", children: K.jsx("img", { src: R9, alt: "", className: "home__logo" }) }),
      K.jsx("h2", { children: "a browser based drawing application" }),
      K.jsx("div", { className: "home__graphic", children: K.jsx("img", { src: z9, alt: "drawllab icon", className: "home__icon" }) }),
      K.jsx("div", { className: "home__graphic", children: K.jsx("img", { src: q9, alt: "drawllab icon", className: "home__icon2" }) }),
      K.jsxs("div", {
        className: "home__button-container",
        children: [
          K.jsx(Pr, { to: "/canvas", children: K.jsx("button", { className: "home__canvas", children: "Start Drawing" }) }),
          K.jsx(Pr, { to: "/about", children: K.jsx("button", { className: "home__about", children: "About" }) }),
        ],
      }),
    ],
  });
}
function Qs(r, n, u) {
  if (r && r.length) {
    const [i, c] = n,
      s = (Math.PI / 180) * u,
      f = Math.cos(s),
      d = Math.sin(s);
    for (const v of r) {
      const [p, g] = v;
      ((v[0] = (p - i) * f - (g - c) * d + i), (v[1] = (p - i) * d + (g - c) * f + c));
    }
  }
}
function H9(r, n) {
  return r[0] === n[0] && r[1] === n[1];
}
function j9(r, n, u, i = 1) {
  const c = u,
    s = Math.max(n, 0.1),
    f = r[0] && r[0][0] && typeof r[0][0] == "number" ? [r] : r,
    d = [0, 0];
  if (c) for (const p of f) Qs(p, d, c);
  const v = (function (p, g, A) {
    const m = [];
    for (const D of p) {
      const L = [...D];
      (H9(L[0], L[L.length - 1]) || L.push([L[0][0], L[0][1]]), L.length > 2 && m.push(L));
    }
    const x = [];
    g = Math.max(g, 0.1);
    const w = [];
    for (const D of m)
      for (let L = 0; L < D.length - 1; L++) {
        const k = D[L],
          G = D[L + 1];
        if (k[1] !== G[1]) {
          const Y = Math.min(k[1], G[1]);
          w.push({ ymin: Y, ymax: Math.max(k[1], G[1]), x: Y === k[1] ? k[0] : G[0], islope: (G[0] - k[0]) / (G[1] - k[1]) });
        }
      }
    if (
      (w.sort((D, L) =>
        D.ymin < L.ymin
          ? -1
          : D.ymin > L.ymin
            ? 1
            : D.x < L.x
              ? -1
              : D.x > L.x
                ? 1
                : D.ymax === L.ymax
                  ? 0
                  : (D.ymax - L.ymax) / Math.abs(D.ymax - L.ymax),
      ),
      !w.length)
    )
      return x;
    let O = [],
      R = w[0].ymin,
      H = 0;
    for (; O.length || w.length; ) {
      if (w.length) {
        let D = -1;
        for (let L = 0; L < w.length && !(w[L].ymin > R); L++) D = L;
        w.splice(0, D + 1).forEach(L => {
          O.push({ s: R, edge: L });
        });
      }
      if (
        ((O = O.filter(D => !(D.edge.ymax <= R))),
        O.sort((D, L) => (D.edge.x === L.edge.x ? 0 : (D.edge.x - L.edge.x) / Math.abs(D.edge.x - L.edge.x))),
        (A !== 1 || H % g == 0) && O.length > 1)
      )
        for (let D = 0; D < O.length; D += 2) {
          const L = D + 1;
          if (L >= O.length) break;
          const k = O[D].edge,
            G = O[L].edge;
          x.push([
            [Math.round(k.x), R],
            [Math.round(G.x), R],
          ]);
        }
      ((R += A),
        O.forEach(D => {
          D.edge.x = D.edge.x + A * D.edge.islope;
        }),
        H++);
    }
    return x;
  })(f, s, i);
  if (c) {
    for (const p of f) Qs(p, d, -c);
    (function (p, g, A) {
      const m = [];
      (p.forEach(x => m.push(...x)), Qs(m, g, A));
    })(v, d, -c);
  }
  return v;
}
function pi(r, n) {
  var u;
  const i = n.hachureAngle + 90;
  let c = n.hachureGap;
  (c < 0 && (c = 4 * n.strokeWidth), (c = Math.round(Math.max(c, 0.1))));
  let s = 1;
  return (
    n.roughness >= 1 && (((u = n.randomizer) === null || u === void 0 ? void 0 : u.next()) || Math.random()) > 0.7 && (s = c),
    j9(r, c, i, s || 1)
  );
}
class u2 {
  constructor(n) {
    this.helper = n;
  }
  fillPolygons(n, u) {
    return this._fillPolygons(n, u);
  }
  _fillPolygons(n, u) {
    const i = pi(n, u);
    return { type: "fillSketch", ops: this.renderLines(i, u) };
  }
  renderLines(n, u) {
    const i = [];
    for (const c of n) i.push(...this.helper.doubleLineOps(c[0][0], c[0][1], c[1][0], c[1][1], u));
    return i;
  }
}
function tc(r) {
  const n = r[0],
    u = r[1];
  return Math.sqrt(Math.pow(n[0] - u[0], 2) + Math.pow(n[1] - u[1], 2));
}
class B9 extends u2 {
  fillPolygons(n, u) {
    let i = u.hachureGap;
    (i < 0 && (i = 4 * u.strokeWidth), (i = Math.max(i, 0.1)));
    const c = pi(n, Object.assign({}, u, { hachureGap: i })),
      s = (Math.PI / 180) * u.hachureAngle,
      f = [],
      d = 0.5 * i * Math.cos(s),
      v = 0.5 * i * Math.sin(s);
    for (const [p, g] of c) tc([p, g]) && f.push([[p[0] - d, p[1] + v], [...g]], [[p[0] + d, p[1] - v], [...g]]);
    return { type: "fillSketch", ops: this.renderLines(f, u) };
  }
}
class N9 extends u2 {
  fillPolygons(n, u) {
    const i = this._fillPolygons(n, u),
      c = Object.assign({}, u, { hachureAngle: u.hachureAngle + 90 }),
      s = this._fillPolygons(n, c);
    return ((i.ops = i.ops.concat(s.ops)), i);
  }
}
class Q9 {
  constructor(n) {
    this.helper = n;
  }
  fillPolygons(n, u) {
    const i = pi(n, (u = Object.assign({}, u, { hachureAngle: 0 })));
    return this.dotsOnLines(i, u);
  }
  dotsOnLines(n, u) {
    const i = [];
    let c = u.hachureGap;
    (c < 0 && (c = 4 * u.strokeWidth), (c = Math.max(c, 0.1)));
    let s = u.fillWeight;
    s < 0 && (s = u.strokeWidth / 2);
    const f = c / 4;
    for (const d of n) {
      const v = tc(d),
        p = v / c,
        g = Math.ceil(p) - 1,
        A = v - g * c,
        m = (d[0][0] + d[1][0]) / 2 - c / 4,
        x = Math.min(d[0][1], d[1][1]);
      for (let w = 0; w < g; w++) {
        const O = x + A + w * c,
          R = m - f + 2 * Math.random() * f,
          H = O - f + 2 * Math.random() * f,
          D = this.helper.ellipse(R, H, s, s, u);
        i.push(...D.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class U9 {
  constructor(n) {
    this.helper = n;
  }
  fillPolygons(n, u) {
    const i = pi(n, u);
    return { type: "fillSketch", ops: this.dashedLine(i, u) };
  }
  dashedLine(n, u) {
    const i = u.dashOffset < 0 ? (u.hachureGap < 0 ? 4 * u.strokeWidth : u.hachureGap) : u.dashOffset,
      c = u.dashGap < 0 ? (u.hachureGap < 0 ? 4 * u.strokeWidth : u.hachureGap) : u.dashGap,
      s = [];
    return (
      n.forEach(f => {
        const d = tc(f),
          v = Math.floor(d / (i + c)),
          p = (d + c - v * (i + c)) / 2;
        let g = f[0],
          A = f[1];
        g[0] > A[0] && ((g = f[1]), (A = f[0]));
        const m = Math.atan((A[1] - g[1]) / (A[0] - g[0]));
        for (let x = 0; x < v; x++) {
          const w = x * (i + c),
            O = w + i,
            R = [g[0] + w * Math.cos(m) + p * Math.cos(m), g[1] + w * Math.sin(m) + p * Math.sin(m)],
            H = [g[0] + O * Math.cos(m) + p * Math.cos(m), g[1] + O * Math.sin(m) + p * Math.sin(m)];
          s.push(...this.helper.doubleLineOps(R[0], R[1], H[0], H[1], u));
        }
      }),
      s
    );
  }
}
let L9 = class {
  constructor(n) {
    this.helper = n;
  }
  fillPolygons(n, u) {
    const i = u.hachureGap < 0 ? 4 * u.strokeWidth : u.hachureGap,
      c = u.zigzagOffset < 0 ? i : u.zigzagOffset,
      s = pi(n, (u = Object.assign({}, u, { hachureGap: i + c })));
    return { type: "fillSketch", ops: this.zigzagLines(s, c, u) };
  }
  zigzagLines(n, u, i) {
    const c = [];
    return (
      n.forEach(s => {
        const f = tc(s),
          d = Math.round(f / (2 * u));
        let v = s[0],
          p = s[1];
        v[0] > p[0] && ((v = s[1]), (p = s[0]));
        const g = Math.atan((p[1] - v[1]) / (p[0] - v[0]));
        for (let A = 0; A < d; A++) {
          const m = 2 * A * u,
            x = 2 * (A + 1) * u,
            w = Math.sqrt(2 * Math.pow(u, 2)),
            O = [v[0] + m * Math.cos(g), v[1] + m * Math.sin(g)],
            R = [v[0] + x * Math.cos(g), v[1] + x * Math.sin(g)],
            H = [O[0] + w * Math.cos(g + Math.PI / 4), O[1] + w * Math.sin(g + Math.PI / 4)];
          c.push(...this.helper.doubleLineOps(O[0], O[1], H[0], H[1], i), ...this.helper.doubleLineOps(H[0], H[1], R[0], R[1], i));
        }
      }),
      c
    );
  }
};
const Tt = {};
class G9 {
  constructor(n) {
    this.seed = n;
  }
  next() {
    return this.seed ? ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const k9 = 0,
  Us = 1,
  rp = 2,
  Du = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Ls(r, n) {
  return r.type === n;
}
function c2(r) {
  const n = [],
    u = (function (f) {
      const d = new Array();
      for (; f !== ""; )
        if (f.match(/^([ \t\r\n,]+)/)) f = f.substr(RegExp.$1.length);
        else if (f.match(/^([aAcChHlLmMqQsStTvVzZ])/)) ((d[d.length] = { type: k9, text: RegExp.$1 }), (f = f.substr(RegExp.$1.length)));
        else {
          if (!f.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
          ((d[d.length] = { type: Us, text: `${parseFloat(RegExp.$1)}` }), (f = f.substr(RegExp.$1.length)));
        }
      return ((d[d.length] = { type: rp, text: "" }), d);
    })(r);
  let i = "BOD",
    c = 0,
    s = u[c];
  for (; !Ls(s, rp); ) {
    let f = 0;
    const d = [];
    if (i === "BOD") {
      if (s.text !== "M" && s.text !== "m") return c2("M0,0" + r);
      (c++, (f = Du[s.text]), (i = s.text));
    } else Ls(s, Us) ? (f = Du[i]) : (c++, (f = Du[s.text]), (i = s.text));
    if (!(c + f < u.length)) throw new Error("Path data ended short");
    for (let v = c; v < c + f; v++) {
      const p = u[v];
      if (!Ls(p, Us)) throw new Error("Param not a number: " + i + "," + p.text);
      d[d.length] = +p.text;
    }
    if (typeof Du[i] != "number") throw new Error("Bad segment: " + i);
    {
      const v = { key: i, data: d };
      (n.push(v), (c += f), (s = u[c]), i === "M" && (i = "L"), i === "m" && (i = "l"));
    }
  }
  return n;
}
function _g(r) {
  let n = 0,
    u = 0,
    i = 0,
    c = 0;
  const s = [];
  for (const { key: f, data: d } of r)
    switch (f) {
      case "M":
        (s.push({ key: "M", data: [...d] }), ([n, u] = d), ([i, c] = d));
        break;
      case "m":
        ((n += d[0]), (u += d[1]), s.push({ key: "M", data: [n, u] }), (i = n), (c = u));
        break;
      case "L":
        (s.push({ key: "L", data: [...d] }), ([n, u] = d));
        break;
      case "l":
        ((n += d[0]), (u += d[1]), s.push({ key: "L", data: [n, u] }));
        break;
      case "C":
        (s.push({ key: "C", data: [...d] }), (n = d[4]), (u = d[5]));
        break;
      case "c": {
        const v = d.map((p, g) => (g % 2 ? p + u : p + n));
        (s.push({ key: "C", data: v }), (n = v[4]), (u = v[5]));
        break;
      }
      case "Q":
        (s.push({ key: "Q", data: [...d] }), (n = d[2]), (u = d[3]));
        break;
      case "q": {
        const v = d.map((p, g) => (g % 2 ? p + u : p + n));
        (s.push({ key: "Q", data: v }), (n = v[2]), (u = v[3]));
        break;
      }
      case "A":
        (s.push({ key: "A", data: [...d] }), (n = d[5]), (u = d[6]));
        break;
      case "a":
        ((n += d[5]), (u += d[6]), s.push({ key: "A", data: [d[0], d[1], d[2], d[3], d[4], n, u] }));
        break;
      case "H":
        (s.push({ key: "H", data: [...d] }), (n = d[0]));
        break;
      case "h":
        ((n += d[0]), s.push({ key: "H", data: [n] }));
        break;
      case "V":
        (s.push({ key: "V", data: [...d] }), (u = d[0]));
        break;
      case "v":
        ((u += d[0]), s.push({ key: "V", data: [u] }));
        break;
      case "S":
        (s.push({ key: "S", data: [...d] }), (n = d[2]), (u = d[3]));
        break;
      case "s": {
        const v = d.map((p, g) => (g % 2 ? p + u : p + n));
        (s.push({ key: "S", data: v }), (n = v[2]), (u = v[3]));
        break;
      }
      case "T":
        (s.push({ key: "T", data: [...d] }), (n = d[0]), (u = d[1]));
        break;
      case "t":
        ((n += d[0]), (u += d[1]), s.push({ key: "T", data: [n, u] }));
        break;
      case "Z":
      case "z":
        (s.push({ key: "Z", data: [] }), (n = i), (u = c));
    }
  return s;
}
function Sg(r) {
  const n = [];
  let u = "",
    i = 0,
    c = 0,
    s = 0,
    f = 0,
    d = 0,
    v = 0;
  for (const { key: p, data: g } of r) {
    switch (p) {
      case "M":
        (n.push({ key: "M", data: [...g] }), ([i, c] = g), ([s, f] = g));
        break;
      case "C":
        (n.push({ key: "C", data: [...g] }), (i = g[4]), (c = g[5]), (d = g[2]), (v = g[3]));
        break;
      case "L":
        (n.push({ key: "L", data: [...g] }), ([i, c] = g));
        break;
      case "H":
        ((i = g[0]), n.push({ key: "L", data: [i, c] }));
        break;
      case "V":
        ((c = g[0]), n.push({ key: "L", data: [i, c] }));
        break;
      case "S": {
        let A = 0,
          m = 0;
        (u === "C" || u === "S" ? ((A = i + (i - d)), (m = c + (c - v))) : ((A = i), (m = c)),
          n.push({ key: "C", data: [A, m, ...g] }),
          (d = g[0]),
          (v = g[1]),
          (i = g[2]),
          (c = g[3]));
        break;
      }
      case "T": {
        const [A, m] = g;
        let x = 0,
          w = 0;
        u === "Q" || u === "T" ? ((x = i + (i - d)), (w = c + (c - v))) : ((x = i), (w = c));
        const O = i + (2 * (x - i)) / 3,
          R = c + (2 * (w - c)) / 3,
          H = A + (2 * (x - A)) / 3,
          D = m + (2 * (w - m)) / 3;
        (n.push({ key: "C", data: [O, R, H, D, A, m] }), (d = x), (v = w), (i = A), (c = m));
        break;
      }
      case "Q": {
        const [A, m, x, w] = g,
          O = i + (2 * (A - i)) / 3,
          R = c + (2 * (m - c)) / 3,
          H = x + (2 * (A - x)) / 3,
          D = w + (2 * (m - w)) / 3;
        (n.push({ key: "C", data: [O, R, H, D, x, w] }), (d = A), (v = m), (i = x), (c = w));
        break;
      }
      case "A": {
        const A = Math.abs(g[0]),
          m = Math.abs(g[1]),
          x = g[2],
          w = g[3],
          O = g[4],
          R = g[5],
          H = g[6];
        A === 0 || m === 0
          ? (n.push({ key: "C", data: [i, c, R, H, R, H] }), (i = R), (c = H))
          : (i !== R || c !== H) &&
            (Eg(i, c, R, H, A, m, x, w, O).forEach(function (D) {
              n.push({ key: "C", data: D });
            }),
            (i = R),
            (c = H));
        break;
      }
      case "Z":
        (n.push({ key: "Z", data: [] }), (i = s), (c = f));
    }
    u = p;
  }
  return n;
}
function Il(r, n, u) {
  return [r * Math.cos(u) - n * Math.sin(u), r * Math.sin(u) + n * Math.cos(u)];
}
function Eg(r, n, u, i, c, s, f, d, v, p) {
  const g = ((A = f), (Math.PI * A) / 180);
  var A;
  let m = [],
    x = 0,
    w = 0,
    O = 0,
    R = 0;
  if (p) [x, w, O, R] = p;
  else {
    (([r, n] = Il(r, n, -g)), ([u, i] = Il(u, i, -g)));
    const me = (r - u) / 2,
      Ae = (n - i) / 2;
    let Se = (me * me) / (c * c) + (Ae * Ae) / (s * s);
    Se > 1 && ((Se = Math.sqrt(Se)), (c *= Se), (s *= Se));
    const U = c * c,
      Z = s * s,
      re = U * Z - U * Ae * Ae - Z * me * me,
      ce = U * Ae * Ae + Z * me * me,
      C = (d === v ? -1 : 1) * Math.sqrt(Math.abs(re / ce));
    ((O = (C * c * Ae) / s + (r + u) / 2),
      (R = (C * -s * me) / c + (n + i) / 2),
      (x = Math.asin(parseFloat(((n - R) / s).toFixed(9)))),
      (w = Math.asin(parseFloat(((i - R) / s).toFixed(9)))),
      r < O && (x = Math.PI - x),
      u < O && (w = Math.PI - w),
      x < 0 && (x = 2 * Math.PI + x),
      w < 0 && (w = 2 * Math.PI + w),
      v && x > w && (x -= 2 * Math.PI),
      !v && w > x && (w -= 2 * Math.PI));
  }
  let H = w - x;
  if (Math.abs(H) > (120 * Math.PI) / 180) {
    const me = w,
      Ae = u,
      Se = i;
    ((w = v && w > x ? x + ((120 * Math.PI) / 180) * 1 : x + ((120 * Math.PI) / 180) * -1),
      (m = Eg((u = O + c * Math.cos(w)), (i = R + s * Math.sin(w)), Ae, Se, c, s, f, 0, v, [w, me, O, R])));
  }
  H = w - x;
  const D = Math.cos(x),
    L = Math.sin(x),
    k = Math.cos(w),
    G = Math.sin(w),
    Y = Math.tan(H / 4),
    J = (4 / 3) * c * Y,
    ue = (4 / 3) * s * Y,
    fe = [r, n],
    ye = [r + J * L, n - ue * D],
    le = [u + J * G, i - ue * k],
    _e = [u, i];
  if (((ye[0] = 2 * fe[0] - ye[0]), (ye[1] = 2 * fe[1] - ye[1]), p)) return [ye, le, _e].concat(m);
  {
    m = [ye, le, _e].concat(m);
    const me = [];
    for (let Ae = 0; Ae < m.length; Ae += 3) {
      const Se = Il(m[Ae][0], m[Ae][1], g),
        U = Il(m[Ae + 1][0], m[Ae + 1][1], g),
        Z = Il(m[Ae + 2][0], m[Ae + 2][1], g);
      me.push([Se[0], Se[1], U[0], U[1], Z[0], Z[1]]);
    }
    return me;
  }
}
const V9 = {
  randOffset: function (r, n) {
    return ge(r, n);
  },
  randOffsetWithRange: function (r, n, u) {
    return Vu(r, n, u);
  },
  ellipse: function (r, n, u, i, c) {
    const s = wg(u, i, c);
    return Kf(r, n, c, s).opset;
  },
  doubleLineOps: function (r, n, u, i, c) {
    return nn(r, n, u, i, c, !0);
  },
};
function Cg(r, n, u, i, c) {
  return { type: "path", ops: nn(r, n, u, i, c) };
}
function Lu(r, n, u) {
  const i = (r || []).length;
  if (i > 2) {
    const c = [];
    for (let s = 0; s < i - 1; s++) c.push(...nn(r[s][0], r[s][1], r[s + 1][0], r[s + 1][1], u));
    return (n && c.push(...nn(r[i - 1][0], r[i - 1][1], r[0][0], r[0][1], u)), { type: "path", ops: c });
  }
  return i === 2 ? Cg(r[0][0], r[0][1], r[1][0], r[1][1], u) : { type: "path", ops: [] };
}
function Y9(r, n, u, i, c) {
  return (function (s, f) {
    return Lu(s, !0, f);
  })(
    [
      [r, n],
      [r + u, n],
      [r + u, n + i],
      [r, n + i],
    ],
    c,
  );
}
function lp(r, n) {
  if (r.length) {
    const u = typeof r[0][0] == "number" ? [r] : r,
      i = Hu(u[0], 1 * (1 + 0.2 * n.roughness), n),
      c = n.disableMultiStroke ? [] : Hu(u[0], 1.5 * (1 + 0.22 * n.roughness), cp(n));
    for (let s = 1; s < u.length; s++) {
      const f = u[s];
      if (f.length) {
        const d = Hu(f, 1 * (1 + 0.2 * n.roughness), n),
          v = n.disableMultiStroke ? [] : Hu(f, 1.5 * (1 + 0.22 * n.roughness), cp(n));
        for (const p of d) p.op !== "move" && i.push(p);
        for (const p of v) p.op !== "move" && c.push(p);
      }
    }
    return { type: "path", ops: i.concat(c) };
  }
  return { type: "path", ops: [] };
}
function wg(r, n, u) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(r / 2, 2) + Math.pow(n / 2, 2)) / 2)),
    c = Math.ceil(Math.max(u.curveStepCount, (u.curveStepCount / Math.sqrt(200)) * i)),
    s = (2 * Math.PI) / c;
  let f = Math.abs(r / 2),
    d = Math.abs(n / 2);
  const v = 1 - u.curveFitting;
  return ((f += ge(f * v, u)), (d += ge(d * v, u)), { increment: s, rx: f, ry: d });
}
function Kf(r, n, u, i) {
  const [c, s] = op(i.increment, r, n, i.rx, i.ry, 1, i.increment * Vu(0.1, Vu(0.4, 1, u), u), u);
  let f = Yu(c, null, u);
  if (!u.disableMultiStroke && u.roughness !== 0) {
    const [d] = op(i.increment, r, n, i.rx, i.ry, 1.5, 0, u),
      v = Yu(d, null, u);
    f = f.concat(v);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: f } };
}
function ip(r, n, u, i, c, s, f, d, v) {
  const p = r,
    g = n;
  let A = Math.abs(u / 2),
    m = Math.abs(i / 2);
  ((A += ge(0.01 * A, v)), (m += ge(0.01 * m, v)));
  let x = c,
    w = s;
  for (; x < 0; ) ((x += 2 * Math.PI), (w += 2 * Math.PI));
  w - x > 2 * Math.PI && ((x = 0), (w = 2 * Math.PI));
  const O = (2 * Math.PI) / v.curveStepCount,
    R = Math.min(O / 2, (w - x) / 2),
    H = sp(R, p, g, A, m, x, w, 1, v);
  if (!v.disableMultiStroke) {
    const D = sp(R, p, g, A, m, x, w, 1.5, v);
    H.push(...D);
  }
  return (
    f &&
      (d
        ? H.push(...nn(p, g, p + A * Math.cos(x), g + m * Math.sin(x), v), ...nn(p, g, p + A * Math.cos(w), g + m * Math.sin(w), v))
        : H.push({ op: "lineTo", data: [p, g] }, { op: "lineTo", data: [p + A * Math.cos(x), g + m * Math.sin(x)] })),
    { type: "path", ops: H }
  );
}
function up(r, n) {
  const u = Sg(_g(c2(r))),
    i = [];
  let c = [0, 0],
    s = [0, 0];
  for (const { key: f, data: d } of u)
    switch (f) {
      case "M":
        ((s = [d[0], d[1]]), (c = [d[0], d[1]]));
        break;
      case "L":
        (i.push(...nn(s[0], s[1], d[0], d[1], n)), (s = [d[0], d[1]]));
        break;
      case "C": {
        const [v, p, g, A, m, x] = d;
        (i.push(...X9(v, p, g, A, m, x, s, n)), (s = [m, x]));
        break;
      }
      case "Z":
        (i.push(...nn(s[0], s[1], c[0], c[1], n)), (s = [c[0], c[1]]));
    }
  return { type: "path", ops: i };
}
function Gs(r, n) {
  const u = [];
  for (const i of r)
    if (i.length) {
      const c = n.maxRandomnessOffset || 0,
        s = i.length;
      if (s > 2) {
        u.push({ op: "move", data: [i[0][0] + ge(c, n), i[0][1] + ge(c, n)] });
        for (let f = 1; f < s; f++) u.push({ op: "lineTo", data: [i[f][0] + ge(c, n), i[f][1] + ge(c, n)] });
      }
    }
  return { type: "fillPath", ops: u };
}
function Sr(r, n) {
  return (function (u, i) {
    let c = u.fillStyle || "hachure";
    if (!Tt[c])
      switch (c) {
        case "zigzag":
          Tt[c] || (Tt[c] = new B9(i));
          break;
        case "cross-hatch":
          Tt[c] || (Tt[c] = new N9(i));
          break;
        case "dots":
          Tt[c] || (Tt[c] = new Q9(i));
          break;
        case "dashed":
          Tt[c] || (Tt[c] = new U9(i));
          break;
        case "zigzag-line":
          Tt[c] || (Tt[c] = new L9(i));
          break;
        default:
          ((c = "hachure"), Tt[c] || (Tt[c] = new u2(i)));
      }
    return Tt[c];
  })(n, V9).fillPolygons(r, n);
}
function cp(r) {
  const n = Object.assign({}, r);
  return ((n.randomizer = void 0), r.seed && (n.seed = r.seed + 1), n);
}
function Tg(r) {
  return (r.randomizer || (r.randomizer = new G9(r.seed || 0)), r.randomizer.next());
}
function Vu(r, n, u, i = 1) {
  return u.roughness * i * (Tg(u) * (n - r) + r);
}
function ge(r, n, u = 1) {
  return Vu(-r, r, n, u);
}
function nn(r, n, u, i, c, s = !1) {
  const f = s ? c.disableMultiStrokeFill : c.disableMultiStroke,
    d = Pf(r, n, u, i, c, !0, !1);
  if (f) return d;
  const v = Pf(r, n, u, i, c, !0, !0);
  return d.concat(v);
}
function Pf(r, n, u, i, c, s, f) {
  const d = Math.pow(r - u, 2) + Math.pow(n - i, 2),
    v = Math.sqrt(d);
  let p = 1;
  p = v < 200 ? 1 : v > 500 ? 0.4 : -0.0016668 * v + 1.233334;
  let g = c.maxRandomnessOffset || 0;
  g * g * 100 > d && (g = v / 10);
  const A = g / 2,
    m = 0.2 + 0.2 * Tg(c);
  let x = (c.bowing * c.maxRandomnessOffset * (i - n)) / 200,
    w = (c.bowing * c.maxRandomnessOffset * (r - u)) / 200;
  ((x = ge(x, c, p)), (w = ge(w, c, p)));
  const O = [],
    R = () => ge(A, c, p),
    H = () => ge(g, c, p),
    D = c.preserveVertices;
  return (
    f
      ? O.push({ op: "move", data: [r + (D ? 0 : R()), n + (D ? 0 : R())] })
      : O.push({ op: "move", data: [r + (D ? 0 : ge(g, c, p)), n + (D ? 0 : ge(g, c, p))] }),
    f
      ? O.push({
          op: "bcurveTo",
          data: [
            x + r + (u - r) * m + R(),
            w + n + (i - n) * m + R(),
            x + r + 2 * (u - r) * m + R(),
            w + n + 2 * (i - n) * m + R(),
            u + (D ? 0 : R()),
            i + (D ? 0 : R()),
          ],
        })
      : O.push({
          op: "bcurveTo",
          data: [
            x + r + (u - r) * m + H(),
            w + n + (i - n) * m + H(),
            x + r + 2 * (u - r) * m + H(),
            w + n + 2 * (i - n) * m + H(),
            u + (D ? 0 : H()),
            i + (D ? 0 : H()),
          ],
        }),
    O
  );
}
function Hu(r, n, u) {
  if (!r.length) return [];
  const i = [];
  (i.push([r[0][0] + ge(n, u), r[0][1] + ge(n, u)]), i.push([r[0][0] + ge(n, u), r[0][1] + ge(n, u)]));
  for (let c = 1; c < r.length; c++)
    (i.push([r[c][0] + ge(n, u), r[c][1] + ge(n, u)]), c === r.length - 1 && i.push([r[c][0] + ge(n, u), r[c][1] + ge(n, u)]));
  return Yu(i, null, u);
}
function Yu(r, n, u) {
  const i = r.length,
    c = [];
  if (i > 3) {
    const s = [],
      f = 1 - u.curveTightness;
    c.push({ op: "move", data: [r[1][0], r[1][1]] });
    for (let d = 1; d + 2 < i; d++) {
      const v = r[d];
      ((s[0] = [v[0], v[1]]),
        (s[1] = [v[0] + (f * r[d + 1][0] - f * r[d - 1][0]) / 6, v[1] + (f * r[d + 1][1] - f * r[d - 1][1]) / 6]),
        (s[2] = [r[d + 1][0] + (f * r[d][0] - f * r[d + 2][0]) / 6, r[d + 1][1] + (f * r[d][1] - f * r[d + 2][1]) / 6]),
        (s[3] = [r[d + 1][0], r[d + 1][1]]),
        c.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] }));
    }
  } else
    i === 3
      ? (c.push({ op: "move", data: [r[1][0], r[1][1]] }),
        c.push({ op: "bcurveTo", data: [r[1][0], r[1][1], r[2][0], r[2][1], r[2][0], r[2][1]] }))
      : i === 2 && c.push(...Pf(r[0][0], r[0][1], r[1][0], r[1][1], u, !0, !0));
  return c;
}
function op(r, n, u, i, c, s, f, d) {
  const v = [],
    p = [];
  if (d.roughness === 0) {
    ((r /= 4), p.push([n + i * Math.cos(-r), u + c * Math.sin(-r)]));
    for (let g = 0; g <= 2 * Math.PI; g += r) {
      const A = [n + i * Math.cos(g), u + c * Math.sin(g)];
      (v.push(A), p.push(A));
    }
    (p.push([n + i * Math.cos(0), u + c * Math.sin(0)]), p.push([n + i * Math.cos(r), u + c * Math.sin(r)]));
  } else {
    const g = ge(0.5, d) - Math.PI / 2;
    p.push([ge(s, d) + n + 0.9 * i * Math.cos(g - r), ge(s, d) + u + 0.9 * c * Math.sin(g - r)]);
    const A = 2 * Math.PI + g - 0.01;
    for (let m = g; m < A; m += r) {
      const x = [ge(s, d) + n + i * Math.cos(m), ge(s, d) + u + c * Math.sin(m)];
      (v.push(x), p.push(x));
    }
    (p.push([ge(s, d) + n + i * Math.cos(g + 2 * Math.PI + 0.5 * f), ge(s, d) + u + c * Math.sin(g + 2 * Math.PI + 0.5 * f)]),
      p.push([ge(s, d) + n + 0.98 * i * Math.cos(g + f), ge(s, d) + u + 0.98 * c * Math.sin(g + f)]),
      p.push([ge(s, d) + n + 0.9 * i * Math.cos(g + 0.5 * f), ge(s, d) + u + 0.9 * c * Math.sin(g + 0.5 * f)]));
  }
  return [p, v];
}
function sp(r, n, u, i, c, s, f, d, v) {
  const p = s + ge(0.1, v),
    g = [];
  g.push([ge(d, v) + n + 0.9 * i * Math.cos(p - r), ge(d, v) + u + 0.9 * c * Math.sin(p - r)]);
  for (let A = p; A <= f; A += r) g.push([ge(d, v) + n + i * Math.cos(A), ge(d, v) + u + c * Math.sin(A)]);
  return (g.push([n + i * Math.cos(f), u + c * Math.sin(f)]), g.push([n + i * Math.cos(f), u + c * Math.sin(f)]), Yu(g, null, v));
}
function X9(r, n, u, i, c, s, f, d) {
  const v = [],
    p = [d.maxRandomnessOffset || 1, (d.maxRandomnessOffset || 1) + 0.3];
  let g = [0, 0];
  const A = d.disableMultiStroke ? 1 : 2,
    m = d.preserveVertices;
  for (let x = 0; x < A; x++)
    (x === 0
      ? v.push({ op: "move", data: [f[0], f[1]] })
      : v.push({ op: "move", data: [f[0] + (m ? 0 : ge(p[0], d)), f[1] + (m ? 0 : ge(p[0], d))] }),
      (g = m ? [c, s] : [c + ge(p[x], d), s + ge(p[x], d)]),
      v.push({ op: "bcurveTo", data: [r + ge(p[x], d), n + ge(p[x], d), u + ge(p[x], d), i + ge(p[x], d), g[0], g[1]] }));
  return v;
}
function Wl(r) {
  return [...r];
}
function fp(r, n = 0) {
  const u = r.length;
  if (u < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (u === 3) i.push(Wl(r[0]), Wl(r[1]), Wl(r[2]), Wl(r[2]));
  else {
    const c = [];
    c.push(r[0], r[0]);
    for (let d = 1; d < r.length; d++) (c.push(r[d]), d === r.length - 1 && c.push(r[d]));
    const s = [],
      f = 1 - n;
    i.push(Wl(c[0]));
    for (let d = 1; d + 2 < c.length; d++) {
      const v = c[d];
      ((s[0] = [v[0], v[1]]),
        (s[1] = [v[0] + (f * c[d + 1][0] - f * c[d - 1][0]) / 6, v[1] + (f * c[d + 1][1] - f * c[d - 1][1]) / 6]),
        (s[2] = [c[d + 1][0] + (f * c[d][0] - f * c[d + 2][0]) / 6, c[d + 1][1] + (f * c[d][1] - f * c[d + 2][1]) / 6]),
        (s[3] = [c[d + 1][0], c[d + 1][1]]),
        i.push(s[1], s[2], s[3]));
    }
  }
  return i;
}
function Gu(r, n) {
  return Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2);
}
function Z9(r, n, u) {
  const i = Gu(n, u);
  if (i === 0) return Gu(r, n);
  let c = ((r[0] - n[0]) * (u[0] - n[0]) + (r[1] - n[1]) * (u[1] - n[1])) / i;
  return ((c = Math.max(0, Math.min(1, c))), Gu(r, On(n, u, c)));
}
function On(r, n, u) {
  return [r[0] + (n[0] - r[0]) * u, r[1] + (n[1] - r[1]) * u];
}
function Ff(r, n, u, i) {
  const c = i || [];
  if (
    (function (d, v) {
      const p = d[v + 0],
        g = d[v + 1],
        A = d[v + 2],
        m = d[v + 3];
      let x = 3 * g[0] - 2 * p[0] - m[0];
      x *= x;
      let w = 3 * g[1] - 2 * p[1] - m[1];
      w *= w;
      let O = 3 * A[0] - 2 * m[0] - p[0];
      O *= O;
      let R = 3 * A[1] - 2 * m[1] - p[1];
      return ((R *= R), x < O && (x = O), w < R && (w = R), x + w);
    })(r, n) < u
  ) {
    const d = r[n + 0];
    (c.length ? ((s = c[c.length - 1]), (f = d), Math.sqrt(Gu(s, f)) > 1 && c.push(d)) : c.push(d), c.push(r[n + 3]));
  } else {
    const v = r[n + 0],
      p = r[n + 1],
      g = r[n + 2],
      A = r[n + 3],
      m = On(v, p, 0.5),
      x = On(p, g, 0.5),
      w = On(g, A, 0.5),
      O = On(m, x, 0.5),
      R = On(x, w, 0.5),
      H = On(O, R, 0.5);
    (Ff([v, m, O, H], 0, u, c), Ff([H, R, w, A], 0, u, c));
  }
  var s, f;
  return c;
}
function K9(r, n) {
  return Xu(r, 0, r.length, n);
}
function Xu(r, n, u, i, c) {
  const s = c || [],
    f = r[n],
    d = r[u - 1];
  let v = 0,
    p = 1;
  for (let g = n + 1; g < u - 1; ++g) {
    const A = Z9(r[g], f, d);
    A > v && ((v = A), (p = g));
  }
  return (Math.sqrt(v) > i ? (Xu(r, n, p + 1, i, s), Xu(r, p, u, i, s)) : (s.length || s.push(f), s.push(d)), s);
}
function ks(r, n = 0.15, u) {
  const i = [],
    c = (r.length - 1) / 3;
  for (let s = 0; s < c; s++) Ff(r, 3 * s, n, i);
  return u && u > 0 ? Xu(i, 0, i.length, u) : i;
}
const Ut = "none";
class Zu {
  constructor(n) {
    ((this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: "#000",
      strokeWidth: 1,
      curveTightness: 0,
      curveFitting: 0.95,
      curveStepCount: 9,
      fillStyle: "hachure",
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1,
      dashOffset: -1,
      dashGap: -1,
      zigzagOffset: -1,
      seed: 0,
      disableMultiStroke: !1,
      disableMultiStrokeFill: !1,
      preserveVertices: !1,
      fillShapeRoughnessGain: 0.8,
    }),
      (this.config = n || {}),
      this.config.options && (this.defaultOptions = this._o(this.config.options)));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(n) {
    return n ? Object.assign({}, this.defaultOptions, n) : this.defaultOptions;
  }
  _d(n, u, i) {
    return { shape: n, sets: u || [], options: i || this.defaultOptions };
  }
  line(n, u, i, c, s) {
    const f = this._o(s);
    return this._d("line", [Cg(n, u, i, c, f)], f);
  }
  rectangle(n, u, i, c, s) {
    const f = this._o(s),
      d = [],
      v = Y9(n, u, i, c, f);
    if (f.fill) {
      const p = [
        [n, u],
        [n + i, u],
        [n + i, u + c],
        [n, u + c],
      ];
      f.fillStyle === "solid" ? d.push(Gs([p], f)) : d.push(Sr([p], f));
    }
    return (f.stroke !== Ut && d.push(v), this._d("rectangle", d, f));
  }
  ellipse(n, u, i, c, s) {
    const f = this._o(s),
      d = [],
      v = wg(i, c, f),
      p = Kf(n, u, f, v);
    if (f.fill)
      if (f.fillStyle === "solid") {
        const g = Kf(n, u, f, v).opset;
        ((g.type = "fillPath"), d.push(g));
      } else d.push(Sr([p.estimatedPoints], f));
    return (f.stroke !== Ut && d.push(p.opset), this._d("ellipse", d, f));
  }
  circle(n, u, i, c) {
    const s = this.ellipse(n, u, i, i, c);
    return ((s.shape = "circle"), s);
  }
  linearPath(n, u) {
    const i = this._o(u);
    return this._d("linearPath", [Lu(n, !1, i)], i);
  }
  arc(n, u, i, c, s, f, d = !1, v) {
    const p = this._o(v),
      g = [],
      A = ip(n, u, i, c, s, f, d, !0, p);
    if (d && p.fill)
      if (p.fillStyle === "solid") {
        const m = Object.assign({}, p);
        m.disableMultiStroke = !0;
        const x = ip(n, u, i, c, s, f, !0, !1, m);
        ((x.type = "fillPath"), g.push(x));
      } else
        g.push(
          (function (m, x, w, O, R, H, D) {
            const L = m,
              k = x;
            let G = Math.abs(w / 2),
              Y = Math.abs(O / 2);
            ((G += ge(0.01 * G, D)), (Y += ge(0.01 * Y, D)));
            let J = R,
              ue = H;
            for (; J < 0; ) ((J += 2 * Math.PI), (ue += 2 * Math.PI));
            ue - J > 2 * Math.PI && ((J = 0), (ue = 2 * Math.PI));
            const fe = (ue - J) / D.curveStepCount,
              ye = [];
            for (let le = J; le <= ue; le += fe) ye.push([L + G * Math.cos(le), k + Y * Math.sin(le)]);
            return (ye.push([L + G * Math.cos(ue), k + Y * Math.sin(ue)]), ye.push([L, k]), Sr([ye], D));
          })(n, u, i, c, s, f, p),
        );
    return (p.stroke !== Ut && g.push(A), this._d("arc", g, p));
  }
  curve(n, u) {
    const i = this._o(u),
      c = [],
      s = lp(n, i);
    if (i.fill && i.fill !== Ut)
      if (i.fillStyle === "solid") {
        const f = lp(
          n,
          Object.assign(Object.assign({}, i), {
            disableMultiStroke: !0,
            roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0,
          }),
        );
        c.push({ type: "fillPath", ops: this._mergedShape(f.ops) });
      } else {
        const f = [],
          d = n;
        if (d.length) {
          const v = typeof d[0][0] == "number" ? [d] : d;
          for (const p of v)
            p.length < 3
              ? f.push(...p)
              : p.length === 3
                ? f.push(...ks(fp([p[0], p[0], p[1], p[2]]), 10, (1 + i.roughness) / 2))
                : f.push(...ks(fp(p), 10, (1 + i.roughness) / 2));
        }
        f.length && c.push(Sr([f], i));
      }
    return (i.stroke !== Ut && c.push(s), this._d("curve", c, i));
  }
  polygon(n, u) {
    const i = this._o(u),
      c = [],
      s = Lu(n, !0, i);
    return (
      i.fill && (i.fillStyle === "solid" ? c.push(Gs([n], i)) : c.push(Sr([n], i))),
      i.stroke !== Ut && c.push(s),
      this._d("polygon", c, i)
    );
  }
  path(n, u) {
    const i = this._o(u),
      c = [];
    if (!n) return this._d("path", c, i);
    n = (n || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = i.fill && i.fill !== "transparent" && i.fill !== Ut,
      f = i.stroke !== Ut,
      d = !!(i.simplification && i.simplification < 1),
      v = (function (g, A, m) {
        const x = Sg(_g(c2(g))),
          w = [];
        let O = [],
          R = [0, 0],
          H = [];
        const D = () => {
            (H.length >= 4 && O.push(...ks(H, A)), (H = []));
          },
          L = () => {
            (D(), O.length && (w.push(O), (O = [])));
          };
        for (const { key: G, data: Y } of x)
          switch (G) {
            case "M":
              (L(), (R = [Y[0], Y[1]]), O.push(R));
              break;
            case "L":
              (D(), O.push([Y[0], Y[1]]));
              break;
            case "C":
              if (!H.length) {
                const J = O.length ? O[O.length - 1] : R;
                H.push([J[0], J[1]]);
              }
              (H.push([Y[0], Y[1]]), H.push([Y[2], Y[3]]), H.push([Y[4], Y[5]]));
              break;
            case "Z":
              (D(), O.push([R[0], R[1]]));
          }
        if ((L(), !m)) return w;
        const k = [];
        for (const G of w) {
          const Y = K9(G, m);
          Y.length && k.push(Y);
        }
        return k;
      })(n, 1, d ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2),
      p = up(n, i);
    if (s)
      if (i.fillStyle === "solid")
        if (v.length === 1) {
          const g = up(
            n,
            Object.assign(Object.assign({}, i), {
              disableMultiStroke: !0,
              roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0,
            }),
          );
          c.push({ type: "fillPath", ops: this._mergedShape(g.ops) });
        } else c.push(Gs(v, i));
      else c.push(Sr(v, i));
    return (
      f &&
        (d
          ? v.forEach(g => {
              c.push(Lu(g, !1, i));
            })
          : c.push(p)),
      this._d("path", c, i)
    );
  }
  opsToPath(n, u) {
    let i = "";
    for (const c of n.ops) {
      const s = typeof u == "number" && u >= 0 ? c.data.map(f => +f.toFixed(u)) : c.data;
      switch (c.op) {
        case "move":
          i += `M${s[0]} ${s[1]} `;
          break;
        case "bcurveTo":
          i += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
          break;
        case "lineTo":
          i += `L${s[0]} ${s[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(n) {
    const u = n.sets || [],
      i = n.options || this.defaultOptions,
      c = [];
    for (const s of u) {
      let f = null;
      switch (s.type) {
        case "path":
          f = { d: this.opsToPath(s), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Ut };
          break;
        case "fillPath":
          f = { d: this.opsToPath(s), stroke: Ut, strokeWidth: 0, fill: i.fill || Ut };
          break;
        case "fillSketch":
          f = this.fillSketch(s, i);
      }
      f && c.push(f);
    }
    return c;
  }
  fillSketch(n, u) {
    let i = u.fillWeight;
    return (i < 0 && (i = u.strokeWidth / 2), { d: this.opsToPath(n), stroke: u.fill || Ut, strokeWidth: i, fill: Ut });
  }
  _mergedShape(n) {
    return n.filter((u, i) => i === 0 || u.op !== "move");
  }
}
class P9 {
  constructor(n, u) {
    ((this.canvas = n), (this.ctx = this.canvas.getContext("2d")), (this.gen = new Zu(u)));
  }
  draw(n) {
    const u = n.sets || [],
      i = n.options || this.getDefaultOptions(),
      c = this.ctx,
      s = n.options.fixedDecimalPlaceDigits;
    for (const f of u)
      switch (f.type) {
        case "path":
          (c.save(),
            (c.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke),
            (c.lineWidth = i.strokeWidth),
            i.strokeLineDash && c.setLineDash(i.strokeLineDash),
            i.strokeLineDashOffset && (c.lineDashOffset = i.strokeLineDashOffset),
            this._drawToContext(c, f, s),
            c.restore());
          break;
        case "fillPath": {
          (c.save(), (c.fillStyle = i.fill || ""));
          const d = n.shape === "curve" || n.shape === "polygon" || n.shape === "path" ? "evenodd" : "nonzero";
          (this._drawToContext(c, f, s, d), c.restore());
          break;
        }
        case "fillSketch":
          this.fillSketch(c, f, i);
      }
  }
  fillSketch(n, u, i) {
    let c = i.fillWeight;
    (c < 0 && (c = i.strokeWidth / 2),
      n.save(),
      i.fillLineDash && n.setLineDash(i.fillLineDash),
      i.fillLineDashOffset && (n.lineDashOffset = i.fillLineDashOffset),
      (n.strokeStyle = i.fill || ""),
      (n.lineWidth = c),
      this._drawToContext(n, u, i.fixedDecimalPlaceDigits),
      n.restore());
  }
  _drawToContext(n, u, i, c = "nonzero") {
    n.beginPath();
    for (const s of u.ops) {
      const f = typeof i == "number" && i >= 0 ? s.data.map(d => +d.toFixed(i)) : s.data;
      switch (s.op) {
        case "move":
          n.moveTo(f[0], f[1]);
          break;
        case "bcurveTo":
          n.bezierCurveTo(f[0], f[1], f[2], f[3], f[4], f[5]);
          break;
        case "lineTo":
          n.lineTo(f[0], f[1]);
      }
    }
    u.type === "fillPath" ? n.fill(c) : n.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(n, u, i, c, s) {
    const f = this.gen.line(n, u, i, c, s);
    return (this.draw(f), f);
  }
  rectangle(n, u, i, c, s) {
    const f = this.gen.rectangle(n, u, i, c, s);
    return (this.draw(f), f);
  }
  ellipse(n, u, i, c, s) {
    const f = this.gen.ellipse(n, u, i, c, s);
    return (this.draw(f), f);
  }
  circle(n, u, i, c) {
    const s = this.gen.circle(n, u, i, c);
    return (this.draw(s), s);
  }
  linearPath(n, u) {
    const i = this.gen.linearPath(n, u);
    return (this.draw(i), i);
  }
  polygon(n, u) {
    const i = this.gen.polygon(n, u);
    return (this.draw(i), i);
  }
  arc(n, u, i, c, s, f, d = !1, v) {
    const p = this.gen.arc(n, u, i, c, s, f, d, v);
    return (this.draw(p), p);
  }
  curve(n, u) {
    const i = this.gen.curve(n, u);
    return (this.draw(i), i);
  }
  path(n, u) {
    const i = this.gen.path(n, u);
    return (this.draw(i), i);
  }
}
const ju = "http://www.w3.org/2000/svg";
class F9 {
  constructor(n, u) {
    ((this.svg = n), (this.gen = new Zu(u)));
  }
  draw(n) {
    const u = n.sets || [],
      i = n.options || this.getDefaultOptions(),
      c = this.svg.ownerDocument || window.document,
      s = c.createElementNS(ju, "g"),
      f = n.options.fixedDecimalPlaceDigits;
    for (const d of u) {
      let v = null;
      switch (d.type) {
        case "path":
          ((v = c.createElementNS(ju, "path")),
            v.setAttribute("d", this.opsToPath(d, f)),
            v.setAttribute("stroke", i.stroke),
            v.setAttribute("stroke-width", i.strokeWidth + ""),
            v.setAttribute("fill", "none"),
            i.strokeLineDash && v.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()),
            i.strokeLineDashOffset && v.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`));
          break;
        case "fillPath":
          ((v = c.createElementNS(ju, "path")),
            v.setAttribute("d", this.opsToPath(d, f)),
            v.setAttribute("stroke", "none"),
            v.setAttribute("stroke-width", "0"),
            v.setAttribute("fill", i.fill || ""),
            (n.shape !== "curve" && n.shape !== "polygon") || v.setAttribute("fill-rule", "evenodd"));
          break;
        case "fillSketch":
          v = this.fillSketch(c, d, i);
      }
      v && s.appendChild(v);
    }
    return s;
  }
  fillSketch(n, u, i) {
    let c = i.fillWeight;
    c < 0 && (c = i.strokeWidth / 2);
    const s = n.createElementNS(ju, "path");
    return (
      s.setAttribute("d", this.opsToPath(u, i.fixedDecimalPlaceDigits)),
      s.setAttribute("stroke", i.fill || ""),
      s.setAttribute("stroke-width", c + ""),
      s.setAttribute("fill", "none"),
      i.fillLineDash && s.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()),
      i.fillLineDashOffset && s.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`),
      s
    );
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(n, u) {
    return this.gen.opsToPath(n, u);
  }
  line(n, u, i, c, s) {
    const f = this.gen.line(n, u, i, c, s);
    return this.draw(f);
  }
  rectangle(n, u, i, c, s) {
    const f = this.gen.rectangle(n, u, i, c, s);
    return this.draw(f);
  }
  ellipse(n, u, i, c, s) {
    const f = this.gen.ellipse(n, u, i, c, s);
    return this.draw(f);
  }
  circle(n, u, i, c) {
    const s = this.gen.circle(n, u, i, c);
    return this.draw(s);
  }
  linearPath(n, u) {
    const i = this.gen.linearPath(n, u);
    return this.draw(i);
  }
  polygon(n, u) {
    const i = this.gen.polygon(n, u);
    return this.draw(i);
  }
  arc(n, u, i, c, s, f, d = !1, v) {
    const p = this.gen.arc(n, u, i, c, s, f, d, v);
    return this.draw(p);
  }
  curve(n, u) {
    const i = this.gen.curve(n, u);
    return this.draw(i);
  }
  path(n, u) {
    const i = this.gen.path(n, u);
    return this.draw(i);
  }
}
var Og = { canvas: (r, n) => new P9(r, n), svg: (r, n) => new F9(r, n), generator: r => new Zu(r), newSeed: () => Zu.newSeed() };
function hp(r, n, u, i = c => c) {
  return r * i(0.5 - n * (0.5 - u));
}
function $9(r) {
  return [-r[0], -r[1]];
}
function la(r, n) {
  return [r[0] + n[0], r[1] + n[1]];
}
function Wt(r, n) {
  return [r[0] - n[0], r[1] - n[1]];
}
function ra(r, n) {
  return [r[0] * n, r[1] * n];
}
function J9(r, n) {
  return [r[0] / n, r[1] / n];
}
function ei(r) {
  return [r[1], -r[0]];
}
function dp(r, n) {
  return r[0] * n[0] + r[1] * n[1];
}
function I9(r, n) {
  return r[0] === n[0] && r[1] === n[1];
}
function W9(r) {
  return Math.hypot(r[0], r[1]);
}
function ey(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function pp(r, n) {
  return ey(Wt(r, n));
}
function Mg(r) {
  return J9(r, W9(r));
}
function ty(r, n) {
  return Math.hypot(r[1] - n[1], r[0] - n[0]);
}
function ti(r, n, u) {
  let i = Math.sin(u),
    c = Math.cos(u),
    s = r[0] - n[0],
    f = r[1] - n[1],
    d = s * c - f * i,
    v = s * i + f * c;
  return [d + n[0], v + n[1]];
}
function $f(r, n, u) {
  return la(r, ra(Wt(n, r), u));
}
function vp(r, n, u) {
  return la(r, ra(n, u));
}
var { min: Er, PI: ay } = Math,
  gp = 0.275,
  ai = ay + 1e-4;
function ny(r, n = {}) {
  let {
      size: u = 16,
      smoothing: i = 0.5,
      thinning: c = 0.5,
      simulatePressure: s = !0,
      easing: f = Z => Z,
      start: d = {},
      end: v = {},
      last: p = !1,
    } = n,
    { cap: g = !0, easing: A = Z => Z * (2 - Z) } = d,
    { cap: m = !0, easing: x = Z => --Z * Z * Z + 1 } = v;
  if (r.length === 0 || u <= 0) return [];
  let w = r[r.length - 1].runningLength,
    O = d.taper === !1 ? 0 : d.taper === !0 ? Math.max(u, w) : d.taper,
    R = v.taper === !1 ? 0 : v.taper === !0 ? Math.max(u, w) : v.taper,
    H = Math.pow(u * i, 2),
    D = [],
    L = [],
    k = r.slice(0, 10).reduce((Z, re) => {
      let ce = re.pressure;
      if (s) {
        let C = Er(1, re.distance / u),
          P = Er(1, 1 - C);
        ce = Er(1, Z + (P - Z) * (C * gp));
      }
      return (Z + ce) / 2;
    }, r[0].pressure),
    G = hp(u, c, r[r.length - 1].pressure, f),
    Y,
    J = r[0].vector,
    ue = r[0].point,
    fe = ue,
    ye = ue,
    le = fe,
    _e = !1;
  for (let Z = 0; Z < r.length; Z++) {
    let { pressure: re } = r[Z],
      { point: ce, vector: C, distance: P, runningLength: W } = r[Z];
    if (Z < r.length - 1 && w - W < 3) continue;
    if (c) {
      if (s) {
        let Ke = Er(1, P / u),
          Gt = Er(1, 1 - Ke);
        re = Er(1, k + (Gt - k) * (Ke * gp));
      }
      G = hp(u, c, re, f);
    } else G = u / 2;
    Y === void 0 && (Y = G);
    let te = W < O ? A(W / O) : 1,
      oe = w - W < R ? x((w - W) / R) : 1;
    G = Math.max(0.01, G * Math.min(te, oe));
    let ve = (Z < r.length - 1 ? r[Z + 1] : r[Z]).vector,
      he = Z < r.length - 1 ? dp(C, ve) : 1,
      at = dp(C, J) < 0 && !_e,
      De = he !== null && he < 0;
    if (at || De) {
      let Ke = ra(ei(J), G);
      for (let Gt = 1 / 13, kt = 0; kt <= 1; kt += Gt)
        ((ye = ti(Wt(ce, Ke), ce, ai * kt)), D.push(ye), (le = ti(la(ce, Ke), ce, ai * -kt)), L.push(le));
      ((ue = ye), (fe = le), De && (_e = !0));
      continue;
    }
    if (((_e = !1), Z === r.length - 1)) {
      let Ke = ra(ei(C), G);
      (D.push(Wt(ce, Ke)), L.push(la(ce, Ke)));
      continue;
    }
    let Xe = ra(ei($f(ve, C, he)), G);
    ((ye = Wt(ce, Xe)),
      (Z <= 1 || pp(ue, ye) > H) && (D.push(ye), (ue = ye)),
      (le = la(ce, Xe)),
      (Z <= 1 || pp(fe, le) > H) && (L.push(le), (fe = le)),
      (k = re),
      (J = C));
  }
  let me = r[0].point.slice(0, 2),
    Ae = r.length > 1 ? r[r.length - 1].point.slice(0, 2) : la(r[0].point, [1, 1]),
    Se = [],
    U = [];
  if (r.length === 1) {
    if (!(O || R) || p) {
      let Z = vp(me, Mg(ei(Wt(me, Ae))), -(Y || G)),
        re = [];
      for (let ce = 1 / 13, C = ce; C <= 1; C += ce) re.push(ti(Z, me, ai * 2 * C));
      return re;
    }
  } else {
    if (!(O || (R && r.length === 1)))
      if (g)
        for (let re = 1 / 13, ce = re; ce <= 1; ce += re) {
          let C = ti(L[0], me, ai * ce);
          Se.push(C);
        }
      else {
        let re = Wt(D[0], L[0]),
          ce = ra(re, 0.5),
          C = ra(re, 0.51);
        Se.push(Wt(me, ce), Wt(me, C), la(me, C), la(me, ce));
      }
    let Z = ei($9(r[r.length - 1].vector));
    if (R || (O && r.length === 1)) U.push(Ae);
    else if (m) {
      let re = vp(Ae, Z, G);
      for (let ce = 1 / 29, C = ce; C < 1; C += ce) U.push(ti(re, Ae, ai * 3 * C));
    } else U.push(la(Ae, ra(Z, G)), la(Ae, ra(Z, G * 0.99)), Wt(Ae, ra(Z, G * 0.99)), Wt(Ae, ra(Z, G)));
  }
  return D.concat(U, L.reverse(), Se);
}
function ry(r, n = {}) {
  var u;
  let { streamline: i = 0.5, size: c = 16, last: s = !1 } = n;
  if (r.length === 0) return [];
  let f = 0.15 + (1 - i) * 0.85,
    d = Array.isArray(r[0]) ? r : r.map(({ x, y: w, pressure: O = 0.5 }) => [x, w, O]);
  if (d.length === 2) {
    let x = d[1];
    d = d.slice(0, -1);
    for (let w = 1; w < 5; w++) d.push($f(d[0], x, w / 4));
  }
  d.length === 1 && (d = [...d, [...la(d[0], [1, 1]), ...d[0].slice(2)]]);
  let v = [{ point: [d[0][0], d[0][1]], pressure: d[0][2] >= 0 ? d[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }],
    p = !1,
    g = 0,
    A = v[0],
    m = d.length - 1;
  for (let x = 1; x < d.length; x++) {
    let w = s && x === m ? d[x].slice(0, 2) : $f(A.point, d[x], f);
    if (I9(A.point, w)) continue;
    let O = ty(w, A.point);
    if (((g += O), x < m && !p)) {
      if (g < c) continue;
      p = !0;
    }
    ((A = { point: w, pressure: d[x][2] >= 0 ? d[x][2] : 0.5, vector: Mg(Wt(A.point, w)), distance: O, runningLength: g }), v.push(A));
  }
  return ((v[0].vector = ((u = v[1]) == null ? void 0 : u.vector) || [0, 0]), v);
}
function ly(r, n = {}) {
  return ny(ry(r, n), n);
}
var Ot = {},
  Cr = {},
  Vs,
  bp;
function Rg() {
  if (bp) return Vs;
  bp = 1;
  var r = typeof qu == "object" && qu && qu.Object === Object && qu;
  return ((Vs = r), Vs);
}
var Ys, yp;
function pa() {
  if (yp) return Ys;
  yp = 1;
  var r = Rg(),
    n = typeof self == "object" && self && self.Object === Object && self,
    u = r || n || Function("return this")();
  return ((Ys = u), Ys);
}
var Xs, mp;
function vi() {
  if (mp) return Xs;
  mp = 1;
  var r = pa(),
    n = r.Symbol;
  return ((Xs = n), Xs);
}
var Zs, Ap;
function iy() {
  if (Ap) return Zs;
  Ap = 1;
  var r = vi(),
    n = Object.prototype,
    u = n.hasOwnProperty,
    i = n.toString,
    c = r ? r.toStringTag : void 0;
  function s(f) {
    var d = u.call(f, c),
      v = f[c];
    try {
      f[c] = void 0;
      var p = !0;
    } catch {}
    var g = i.call(f);
    return (p && (d ? (f[c] = v) : delete f[c]), g);
  }
  return ((Zs = s), Zs);
}
var Ks, xp;
function uy() {
  if (xp) return Ks;
  xp = 1;
  var r = Object.prototype,
    n = r.toString;
  function u(i) {
    return n.call(i);
  }
  return ((Ks = u), Ks);
}
var Ps, _p;
function Rn() {
  if (_p) return Ps;
  _p = 1;
  var r = vi(),
    n = iy(),
    u = uy(),
    i = "[object Null]",
    c = "[object Undefined]",
    s = r ? r.toStringTag : void 0;
  function f(d) {
    return d == null ? (d === void 0 ? c : i) : s && s in Object(d) ? n(d) : u(d);
  }
  return ((Ps = f), Ps);
}
var Fs, Sp;
function ia() {
  if (Sp) return Fs;
  Sp = 1;
  var r = Array.isArray;
  return ((Fs = r), Fs);
}
var $s, Ep;
function Ra() {
  if (Ep) return $s;
  Ep = 1;
  function r(n) {
    return n != null && typeof n == "object";
  }
  return (($s = r), $s);
}
var Js, Cp;
function cy() {
  if (Cp) return Js;
  Cp = 1;
  var r = Rn(),
    n = ia(),
    u = Ra(),
    i = "[object String]";
  function c(s) {
    return typeof s == "string" || (!n(s) && u(s) && r(s) == i);
  }
  return ((Js = c), Js);
}
var Is, wp;
function oy() {
  if (wp) return Is;
  wp = 1;
  function r(n) {
    return function (u, i, c) {
      for (var s = -1, f = Object(u), d = c(u), v = d.length; v--; ) {
        var p = d[n ? v : ++s];
        if (i(f[p], p, f) === !1) break;
      }
      return u;
    };
  }
  return ((Is = r), Is);
}
var Ws, Tp;
function sy() {
  if (Tp) return Ws;
  Tp = 1;
  var r = oy(),
    n = r();
  return ((Ws = n), Ws);
}
var e1, Op;
function fy() {
  if (Op) return e1;
  Op = 1;
  function r(n, u) {
    for (var i = -1, c = Array(n); ++i < n; ) c[i] = u(i);
    return c;
  }
  return ((e1 = r), e1);
}
var t1, Mp;
function hy() {
  if (Mp) return t1;
  Mp = 1;
  var r = Rn(),
    n = Ra(),
    u = "[object Arguments]";
  function i(c) {
    return n(c) && r(c) == u;
  }
  return ((t1 = i), t1);
}
var a1, Rp;
function zg() {
  if (Rp) return a1;
  Rp = 1;
  var r = hy(),
    n = Ra(),
    u = Object.prototype,
    i = u.hasOwnProperty,
    c = u.propertyIsEnumerable,
    s = r(
      (function () {
        return arguments;
      })(),
    )
      ? r
      : function (f) {
          return n(f) && i.call(f, "callee") && !c.call(f, "callee");
        };
  return ((a1 = s), a1);
}
var ii = { exports: {} },
  n1,
  zp;
function dy() {
  if (zp) return n1;
  zp = 1;
  function r() {
    return !1;
  }
  return ((n1 = r), n1);
}
ii.exports;
var qp;
function o2() {
  return (
    qp ||
      ((qp = 1),
      (function (r, n) {
        var u = pa(),
          i = dy(),
          c = n && !n.nodeType && n,
          s = c && !0 && r && !r.nodeType && r,
          f = s && s.exports === c,
          d = f ? u.Buffer : void 0,
          v = d ? d.isBuffer : void 0,
          p = v || i;
        r.exports = p;
      })(ii, ii.exports)),
    ii.exports
  );
}
var r1, Dp;
function qg() {
  if (Dp) return r1;
  Dp = 1;
  var r = 9007199254740991,
    n = /^(?:0|[1-9]\d*)$/;
  function u(i, c) {
    var s = typeof i;
    return ((c = c ?? r), !!c && (s == "number" || (s != "symbol" && n.test(i))) && i > -1 && i % 1 == 0 && i < c);
  }
  return ((r1 = u), r1);
}
var l1, Hp;
function s2() {
  if (Hp) return l1;
  Hp = 1;
  var r = 9007199254740991;
  function n(u) {
    return typeof u == "number" && u > -1 && u % 1 == 0 && u <= r;
  }
  return ((l1 = n), l1);
}
var i1, jp;
function py() {
  if (jp) return i1;
  jp = 1;
  var r = Rn(),
    n = s2(),
    u = Ra(),
    i = "[object Arguments]",
    c = "[object Array]",
    s = "[object Boolean]",
    f = "[object Date]",
    d = "[object Error]",
    v = "[object Function]",
    p = "[object Map]",
    g = "[object Number]",
    A = "[object Object]",
    m = "[object RegExp]",
    x = "[object Set]",
    w = "[object String]",
    O = "[object WeakMap]",
    R = "[object ArrayBuffer]",
    H = "[object DataView]",
    D = "[object Float32Array]",
    L = "[object Float64Array]",
    k = "[object Int8Array]",
    G = "[object Int16Array]",
    Y = "[object Int32Array]",
    J = "[object Uint8Array]",
    ue = "[object Uint8ClampedArray]",
    fe = "[object Uint16Array]",
    ye = "[object Uint32Array]",
    le = {};
  ((le[D] = le[L] = le[k] = le[G] = le[Y] = le[J] = le[ue] = le[fe] = le[ye] = !0),
    (le[i] = le[c] = le[R] = le[s] = le[H] = le[f] = le[d] = le[v] = le[p] = le[g] = le[A] = le[m] = le[x] = le[w] = le[O] = !1));
  function _e(me) {
    return u(me) && n(me.length) && !!le[r(me)];
  }
  return ((i1 = _e), i1);
}
var u1, Bp;
function f2() {
  if (Bp) return u1;
  Bp = 1;
  function r(n) {
    return function (u) {
      return n(u);
    };
  }
  return ((u1 = r), u1);
}
var ui = { exports: {} };
ui.exports;
var Np;
function h2() {
  return (
    Np ||
      ((Np = 1),
      (function (r, n) {
        var u = Rg(),
          i = n && !n.nodeType && n,
          c = i && !0 && r && !r.nodeType && r,
          s = c && c.exports === i,
          f = s && u.process,
          d = (function () {
            try {
              var v = c && c.require && c.require("util").types;
              return v || (f && f.binding && f.binding("util"));
            } catch {}
          })();
        r.exports = d;
      })(ui, ui.exports)),
    ui.exports
  );
}
var c1, Qp;
function Dg() {
  if (Qp) return c1;
  Qp = 1;
  var r = py(),
    n = f2(),
    u = h2(),
    i = u && u.isTypedArray,
    c = i ? n(i) : r;
  return ((c1 = c), c1);
}
var o1, Up;
function Hg() {
  if (Up) return o1;
  Up = 1;
  var r = fy(),
    n = zg(),
    u = ia(),
    i = o2(),
    c = qg(),
    s = Dg(),
    f = Object.prototype,
    d = f.hasOwnProperty;
  function v(p, g) {
    var A = u(p),
      m = !A && n(p),
      x = !A && !m && i(p),
      w = !A && !m && !x && s(p),
      O = A || m || x || w,
      R = O ? r(p.length, String) : [],
      H = R.length;
    for (var D in p)
      (g || d.call(p, D)) &&
        !(
          O &&
          (D == "length" ||
            (x && (D == "offset" || D == "parent")) ||
            (w && (D == "buffer" || D == "byteLength" || D == "byteOffset")) ||
            c(D, H))
        ) &&
        R.push(D);
    return R;
  }
  return ((o1 = v), o1);
}
var s1, Lp;
function d2() {
  if (Lp) return s1;
  Lp = 1;
  var r = Object.prototype;
  function n(u) {
    var i = u && u.constructor,
      c = (typeof i == "function" && i.prototype) || r;
    return u === c;
  }
  return ((s1 = n), s1);
}
var f1, Gp;
function jg() {
  if (Gp) return f1;
  Gp = 1;
  function r(n, u) {
    return function (i) {
      return n(u(i));
    };
  }
  return ((f1 = r), f1);
}
var h1, kp;
function vy() {
  if (kp) return h1;
  kp = 1;
  var r = jg(),
    n = r(Object.keys, Object);
  return ((h1 = n), h1);
}
var d1, Vp;
function gy() {
  if (Vp) return d1;
  Vp = 1;
  var r = d2(),
    n = vy(),
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s) {
    if (!r(s)) return n(s);
    var f = [];
    for (var d in Object(s)) i.call(s, d) && d != "constructor" && f.push(d);
    return f;
  }
  return ((d1 = c), d1);
}
var p1, Yp;
function $r() {
  if (Yp) return p1;
  Yp = 1;
  function r(n) {
    var u = typeof n;
    return n != null && (u == "object" || u == "function");
  }
  return ((p1 = r), p1);
}
var v1, Xp;
function Bg() {
  if (Xp) return v1;
  Xp = 1;
  var r = Rn(),
    n = $r(),
    u = "[object AsyncFunction]",
    i = "[object Function]",
    c = "[object GeneratorFunction]",
    s = "[object Proxy]";
  function f(d) {
    if (!n(d)) return !1;
    var v = r(d);
    return v == i || v == c || v == u || v == s;
  }
  return ((v1 = f), v1);
}
var g1, Zp;
function ac() {
  if (Zp) return g1;
  Zp = 1;
  var r = Bg(),
    n = s2();
  function u(i) {
    return i != null && n(i.length) && !r(i);
  }
  return ((g1 = u), g1);
}
var b1, Kp;
function gi() {
  if (Kp) return b1;
  Kp = 1;
  var r = Hg(),
    n = gy(),
    u = ac();
  function i(c) {
    return u(c) ? r(c) : n(c);
  }
  return ((b1 = i), b1);
}
var y1, Pp;
function Ng() {
  if (Pp) return y1;
  Pp = 1;
  var r = sy(),
    n = gi();
  function u(i, c) {
    return i && r(i, c, n);
  }
  return ((y1 = u), y1);
}
var m1, Fp;
function Qg() {
  if (Fp) return m1;
  Fp = 1;
  function r(n) {
    return n;
  }
  return ((m1 = r), m1);
}
var A1, $p;
function by() {
  if ($p) return A1;
  $p = 1;
  var r = Qg();
  function n(u) {
    return typeof u == "function" ? u : r;
  }
  return ((A1 = n), A1);
}
var x1, Jp;
function p2() {
  if (Jp) return x1;
  Jp = 1;
  var r = Ng(),
    n = by();
  function u(i, c) {
    return i && r(i, n(c));
  }
  return ((x1 = u), x1);
}
var _1, Ip;
function v2() {
  if (Ip) return _1;
  Ip = 1;
  var r = jg(),
    n = r(Object.getPrototypeOf, Object);
  return ((_1 = n), _1);
}
var S1, Wp;
function yy() {
  if (Wp) return S1;
  Wp = 1;
  var r = Rn(),
    n = v2(),
    u = Ra(),
    i = "[object Object]",
    c = Function.prototype,
    s = Object.prototype,
    f = c.toString,
    d = s.hasOwnProperty,
    v = f.call(Object);
  function p(g) {
    if (!u(g) || r(g) != i) return !1;
    var A = n(g);
    if (A === null) return !0;
    var m = d.call(A, "constructor") && A.constructor;
    return typeof m == "function" && m instanceof m && f.call(m) == v;
  }
  return ((S1 = p), S1);
}
var E1, e5;
function Ug() {
  if (e5) return E1;
  e5 = 1;
  function r(n, u) {
    for (var i = -1, c = n == null ? 0 : n.length, s = Array(c); ++i < c; ) s[i] = u(n[i], i, n);
    return s;
  }
  return ((E1 = r), E1);
}
var C1, t5;
function my() {
  if (t5) return C1;
  t5 = 1;
  function r() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((C1 = r), C1);
}
var w1, a5;
function g2() {
  if (a5) return w1;
  a5 = 1;
  function r(n, u) {
    return n === u || (n !== n && u !== u);
  }
  return ((w1 = r), w1);
}
var T1, n5;
function nc() {
  if (n5) return T1;
  n5 = 1;
  var r = g2();
  function n(u, i) {
    for (var c = u.length; c--; ) if (r(u[c][0], i)) return c;
    return -1;
  }
  return ((T1 = n), T1);
}
var O1, r5;
function Ay() {
  if (r5) return O1;
  r5 = 1;
  var r = nc(),
    n = Array.prototype,
    u = n.splice;
  function i(c) {
    var s = this.__data__,
      f = r(s, c);
    if (f < 0) return !1;
    var d = s.length - 1;
    return (f == d ? s.pop() : u.call(s, f, 1), --this.size, !0);
  }
  return ((O1 = i), O1);
}
var M1, l5;
function xy() {
  if (l5) return M1;
  l5 = 1;
  var r = nc();
  function n(u) {
    var i = this.__data__,
      c = r(i, u);
    return c < 0 ? void 0 : i[c][1];
  }
  return ((M1 = n), M1);
}
var R1, i5;
function _y() {
  if (i5) return R1;
  i5 = 1;
  var r = nc();
  function n(u) {
    return r(this.__data__, u) > -1;
  }
  return ((R1 = n), R1);
}
var z1, u5;
function Sy() {
  if (u5) return z1;
  u5 = 1;
  var r = nc();
  function n(u, i) {
    var c = this.__data__,
      s = r(c, u);
    return (s < 0 ? (++this.size, c.push([u, i])) : (c[s][1] = i), this);
  }
  return ((z1 = n), z1);
}
var q1, c5;
function rc() {
  if (c5) return q1;
  c5 = 1;
  var r = my(),
    n = Ay(),
    u = xy(),
    i = _y(),
    c = Sy();
  function s(f) {
    var d = -1,
      v = f == null ? 0 : f.length;
    for (this.clear(); ++d < v; ) {
      var p = f[d];
      this.set(p[0], p[1]);
    }
  }
  return (
    (s.prototype.clear = r),
    (s.prototype.delete = n),
    (s.prototype.get = u),
    (s.prototype.has = i),
    (s.prototype.set = c),
    (q1 = s),
    q1
  );
}
var D1, o5;
function Ey() {
  if (o5) return D1;
  o5 = 1;
  var r = rc();
  function n() {
    ((this.__data__ = new r()), (this.size = 0));
  }
  return ((D1 = n), D1);
}
var H1, s5;
function Cy() {
  if (s5) return H1;
  s5 = 1;
  function r(n) {
    var u = this.__data__,
      i = u.delete(n);
    return ((this.size = u.size), i);
  }
  return ((H1 = r), H1);
}
var j1, f5;
function wy() {
  if (f5) return j1;
  f5 = 1;
  function r(n) {
    return this.__data__.get(n);
  }
  return ((j1 = r), j1);
}
var B1, h5;
function Ty() {
  if (h5) return B1;
  h5 = 1;
  function r(n) {
    return this.__data__.has(n);
  }
  return ((B1 = r), B1);
}
var N1, d5;
function Oy() {
  if (d5) return N1;
  d5 = 1;
  var r = pa(),
    n = r["__core-js_shared__"];
  return ((N1 = n), N1);
}
var Q1, p5;
function My() {
  if (p5) return Q1;
  p5 = 1;
  var r = Oy(),
    n = (function () {
      var i = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
      return i ? "Symbol(src)_1." + i : "";
    })();
  function u(i) {
    return !!n && n in i;
  }
  return ((Q1 = u), Q1);
}
var U1, v5;
function Lg() {
  if (v5) return U1;
  v5 = 1;
  var r = Function.prototype,
    n = r.toString;
  function u(i) {
    if (i != null) {
      try {
        return n.call(i);
      } catch {}
      try {
        return i + "";
      } catch {}
    }
    return "";
  }
  return ((U1 = u), U1);
}
var L1, g5;
function Ry() {
  if (g5) return L1;
  g5 = 1;
  var r = Bg(),
    n = My(),
    u = $r(),
    i = Lg(),
    c = /[\\^$.*+?()[\]{}|]/g,
    s = /^\[object .+?Constructor\]$/,
    f = Function.prototype,
    d = Object.prototype,
    v = f.toString,
    p = d.hasOwnProperty,
    g = RegExp(
      "^" +
        v
          .call(p)
          .replace(c, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function A(m) {
    if (!u(m) || n(m)) return !1;
    var x = r(m) ? g : s;
    return x.test(i(m));
  }
  return ((L1 = A), L1);
}
var G1, b5;
function zy() {
  if (b5) return G1;
  b5 = 1;
  function r(n, u) {
    return n?.[u];
  }
  return ((G1 = r), G1);
}
var k1, y5;
function zn() {
  if (y5) return k1;
  y5 = 1;
  var r = Ry(),
    n = zy();
  function u(i, c) {
    var s = n(i, c);
    return r(s) ? s : void 0;
  }
  return ((k1 = u), k1);
}
var V1, m5;
function b2() {
  if (m5) return V1;
  m5 = 1;
  var r = zn(),
    n = pa(),
    u = r(n, "Map");
  return ((V1 = u), V1);
}
var Y1, A5;
function lc() {
  if (A5) return Y1;
  A5 = 1;
  var r = zn(),
    n = r(Object, "create");
  return ((Y1 = n), Y1);
}
var X1, x5;
function qy() {
  if (x5) return X1;
  x5 = 1;
  var r = lc();
  function n() {
    ((this.__data__ = r ? r(null) : {}), (this.size = 0));
  }
  return ((X1 = n), X1);
}
var Z1, _5;
function Dy() {
  if (_5) return Z1;
  _5 = 1;
  function r(n) {
    var u = this.has(n) && delete this.__data__[n];
    return ((this.size -= u ? 1 : 0), u);
  }
  return ((Z1 = r), Z1);
}
var K1, S5;
function Hy() {
  if (S5) return K1;
  S5 = 1;
  var r = lc(),
    n = "__lodash_hash_undefined__",
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s) {
    var f = this.__data__;
    if (r) {
      var d = f[s];
      return d === n ? void 0 : d;
    }
    return i.call(f, s) ? f[s] : void 0;
  }
  return ((K1 = c), K1);
}
var P1, E5;
function jy() {
  if (E5) return P1;
  E5 = 1;
  var r = lc(),
    n = Object.prototype,
    u = n.hasOwnProperty;
  function i(c) {
    var s = this.__data__;
    return r ? s[c] !== void 0 : u.call(s, c);
  }
  return ((P1 = i), P1);
}
var F1, C5;
function By() {
  if (C5) return F1;
  C5 = 1;
  var r = lc(),
    n = "__lodash_hash_undefined__";
  function u(i, c) {
    var s = this.__data__;
    return ((this.size += this.has(i) ? 0 : 1), (s[i] = r && c === void 0 ? n : c), this);
  }
  return ((F1 = u), F1);
}
var $1, w5;
function Ny() {
  if (w5) return $1;
  w5 = 1;
  var r = qy(),
    n = Dy(),
    u = Hy(),
    i = jy(),
    c = By();
  function s(f) {
    var d = -1,
      v = f == null ? 0 : f.length;
    for (this.clear(); ++d < v; ) {
      var p = f[d];
      this.set(p[0], p[1]);
    }
  }
  return (
    (s.prototype.clear = r),
    (s.prototype.delete = n),
    (s.prototype.get = u),
    (s.prototype.has = i),
    (s.prototype.set = c),
    ($1 = s),
    $1
  );
}
var J1, T5;
function Qy() {
  if (T5) return J1;
  T5 = 1;
  var r = Ny(),
    n = rc(),
    u = b2();
  function i() {
    ((this.size = 0), (this.__data__ = { hash: new r(), map: new (u || n)(), string: new r() }));
  }
  return ((J1 = i), J1);
}
var I1, O5;
function Uy() {
  if (O5) return I1;
  O5 = 1;
  function r(n) {
    var u = typeof n;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? n !== "__proto__" : n === null;
  }
  return ((I1 = r), I1);
}
var W1, M5;
function ic() {
  if (M5) return W1;
  M5 = 1;
  var r = Uy();
  function n(u, i) {
    var c = u.__data__;
    return r(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
  }
  return ((W1 = n), W1);
}
var e0, R5;
function Ly() {
  if (R5) return e0;
  R5 = 1;
  var r = ic();
  function n(u) {
    var i = r(this, u).delete(u);
    return ((this.size -= i ? 1 : 0), i);
  }
  return ((e0 = n), e0);
}
var t0, z5;
function Gy() {
  if (z5) return t0;
  z5 = 1;
  var r = ic();
  function n(u) {
    return r(this, u).get(u);
  }
  return ((t0 = n), t0);
}
var a0, q5;
function ky() {
  if (q5) return a0;
  q5 = 1;
  var r = ic();
  function n(u) {
    return r(this, u).has(u);
  }
  return ((a0 = n), a0);
}
var n0, D5;
function Vy() {
  if (D5) return n0;
  D5 = 1;
  var r = ic();
  function n(u, i) {
    var c = r(this, u),
      s = c.size;
    return (c.set(u, i), (this.size += c.size == s ? 0 : 1), this);
  }
  return ((n0 = n), n0);
}
var r0, H5;
function y2() {
  if (H5) return r0;
  H5 = 1;
  var r = Qy(),
    n = Ly(),
    u = Gy(),
    i = ky(),
    c = Vy();
  function s(f) {
    var d = -1,
      v = f == null ? 0 : f.length;
    for (this.clear(); ++d < v; ) {
      var p = f[d];
      this.set(p[0], p[1]);
    }
  }
  return (
    (s.prototype.clear = r),
    (s.prototype.delete = n),
    (s.prototype.get = u),
    (s.prototype.has = i),
    (s.prototype.set = c),
    (r0 = s),
    r0
  );
}
var l0, j5;
function Yy() {
  if (j5) return l0;
  j5 = 1;
  var r = rc(),
    n = b2(),
    u = y2(),
    i = 200;
  function c(s, f) {
    var d = this.__data__;
    if (d instanceof r) {
      var v = d.__data__;
      if (!n || v.length < i - 1) return (v.push([s, f]), (this.size = ++d.size), this);
      d = this.__data__ = new u(v);
    }
    return (d.set(s, f), (this.size = d.size), this);
  }
  return ((l0 = c), l0);
}
var i0, B5;
function m2() {
  if (B5) return i0;
  B5 = 1;
  var r = rc(),
    n = Ey(),
    u = Cy(),
    i = wy(),
    c = Ty(),
    s = Yy();
  function f(d) {
    var v = (this.__data__ = new r(d));
    this.size = v.size;
  }
  return (
    (f.prototype.clear = n),
    (f.prototype.delete = u),
    (f.prototype.get = i),
    (f.prototype.has = c),
    (f.prototype.set = s),
    (i0 = f),
    i0
  );
}
var u0, N5;
function Xy() {
  if (N5) return u0;
  N5 = 1;
  var r = "__lodash_hash_undefined__";
  function n(u) {
    return (this.__data__.set(u, r), this);
  }
  return ((u0 = n), u0);
}
var c0, Q5;
function Zy() {
  if (Q5) return c0;
  Q5 = 1;
  function r(n) {
    return this.__data__.has(n);
  }
  return ((c0 = r), c0);
}
var o0, U5;
function Ky() {
  if (U5) return o0;
  U5 = 1;
  var r = y2(),
    n = Xy(),
    u = Zy();
  function i(c) {
    var s = -1,
      f = c == null ? 0 : c.length;
    for (this.__data__ = new r(); ++s < f; ) this.add(c[s]);
  }
  return ((i.prototype.add = i.prototype.push = n), (i.prototype.has = u), (o0 = i), o0);
}
var s0, L5;
function Py() {
  if (L5) return s0;
  L5 = 1;
  function r(n, u) {
    for (var i = -1, c = n == null ? 0 : n.length; ++i < c; ) if (u(n[i], i, n)) return !0;
    return !1;
  }
  return ((s0 = r), s0);
}
var f0, G5;
function Fy() {
  if (G5) return f0;
  G5 = 1;
  function r(n, u) {
    return n.has(u);
  }
  return ((f0 = r), f0);
}
var h0, k5;
function Gg() {
  if (k5) return h0;
  k5 = 1;
  var r = Ky(),
    n = Py(),
    u = Fy(),
    i = 1,
    c = 2;
  function s(f, d, v, p, g, A) {
    var m = v & i,
      x = f.length,
      w = d.length;
    if (x != w && !(m && w > x)) return !1;
    var O = A.get(f),
      R = A.get(d);
    if (O && R) return O == d && R == f;
    var H = -1,
      D = !0,
      L = v & c ? new r() : void 0;
    for (A.set(f, d), A.set(d, f); ++H < x; ) {
      var k = f[H],
        G = d[H];
      if (p) var Y = m ? p(G, k, H, d, f, A) : p(k, G, H, f, d, A);
      if (Y !== void 0) {
        if (Y) continue;
        D = !1;
        break;
      }
      if (L) {
        if (
          !n(d, function (J, ue) {
            if (!u(L, ue) && (k === J || g(k, J, v, p, A))) return L.push(ue);
          })
        ) {
          D = !1;
          break;
        }
      } else if (!(k === G || g(k, G, v, p, A))) {
        D = !1;
        break;
      }
    }
    return (A.delete(f), A.delete(d), D);
  }
  return ((h0 = s), h0);
}
var d0, V5;
function kg() {
  if (V5) return d0;
  V5 = 1;
  var r = pa(),
    n = r.Uint8Array;
  return ((d0 = n), d0);
}
var p0, Y5;
function $y() {
  if (Y5) return p0;
  Y5 = 1;
  function r(n) {
    var u = -1,
      i = Array(n.size);
    return (
      n.forEach(function (c, s) {
        i[++u] = [s, c];
      }),
      i
    );
  }
  return ((p0 = r), p0);
}
var v0, X5;
function Jy() {
  if (X5) return v0;
  X5 = 1;
  function r(n) {
    var u = -1,
      i = Array(n.size);
    return (
      n.forEach(function (c) {
        i[++u] = c;
      }),
      i
    );
  }
  return ((v0 = r), v0);
}
var g0, Z5;
function Iy() {
  if (Z5) return g0;
  Z5 = 1;
  var r = vi(),
    n = kg(),
    u = g2(),
    i = Gg(),
    c = $y(),
    s = Jy(),
    f = 1,
    d = 2,
    v = "[object Boolean]",
    p = "[object Date]",
    g = "[object Error]",
    A = "[object Map]",
    m = "[object Number]",
    x = "[object RegExp]",
    w = "[object Set]",
    O = "[object String]",
    R = "[object Symbol]",
    H = "[object ArrayBuffer]",
    D = "[object DataView]",
    L = r ? r.prototype : void 0,
    k = L ? L.valueOf : void 0;
  function G(Y, J, ue, fe, ye, le, _e) {
    switch (ue) {
      case D:
        if (Y.byteLength != J.byteLength || Y.byteOffset != J.byteOffset) return !1;
        ((Y = Y.buffer), (J = J.buffer));
      case H:
        return !(Y.byteLength != J.byteLength || !le(new n(Y), new n(J)));
      case v:
      case p:
      case m:
        return u(+Y, +J);
      case g:
        return Y.name == J.name && Y.message == J.message;
      case x:
      case O:
        return Y == J + "";
      case A:
        var me = c;
      case w:
        var Ae = fe & f;
        if ((me || (me = s), Y.size != J.size && !Ae)) return !1;
        var Se = _e.get(Y);
        if (Se) return Se == J;
        ((fe |= d), _e.set(Y, J));
        var U = i(me(Y), me(J), fe, ye, le, _e);
        return (_e.delete(Y), U);
      case R:
        if (k) return k.call(Y) == k.call(J);
    }
    return !1;
  }
  return ((g0 = G), g0);
}
var b0, K5;
function Vg() {
  if (K5) return b0;
  K5 = 1;
  function r(n, u) {
    for (var i = -1, c = u.length, s = n.length; ++i < c; ) n[s + i] = u[i];
    return n;
  }
  return ((b0 = r), b0);
}
var y0, P5;
function Yg() {
  if (P5) return y0;
  P5 = 1;
  var r = Vg(),
    n = ia();
  function u(i, c, s) {
    var f = c(i);
    return n(i) ? f : r(f, s(i));
  }
  return ((y0 = u), y0);
}
var m0, F5;
function Wy() {
  if (F5) return m0;
  F5 = 1;
  function r(n, u) {
    for (var i = -1, c = n == null ? 0 : n.length, s = 0, f = []; ++i < c; ) {
      var d = n[i];
      u(d, i, n) && (f[s++] = d);
    }
    return f;
  }
  return ((m0 = r), m0);
}
var A0, $5;
function Xg() {
  if ($5) return A0;
  $5 = 1;
  function r() {
    return [];
  }
  return ((A0 = r), A0);
}
var x0, J5;
function A2() {
  if (J5) return x0;
  J5 = 1;
  var r = Wy(),
    n = Xg(),
    u = Object.prototype,
    i = u.propertyIsEnumerable,
    c = Object.getOwnPropertySymbols,
    s = c
      ? function (f) {
          return f == null
            ? []
            : ((f = Object(f)),
              r(c(f), function (d) {
                return i.call(f, d);
              }));
        }
      : n;
  return ((x0 = s), x0);
}
var _0, I5;
function Zg() {
  if (I5) return _0;
  I5 = 1;
  var r = Yg(),
    n = A2(),
    u = gi();
  function i(c) {
    return r(c, u, n);
  }
  return ((_0 = i), _0);
}
var S0, W5;
function em() {
  if (W5) return S0;
  W5 = 1;
  var r = Zg(),
    n = 1,
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s, f, d, v, p, g) {
    var A = d & n,
      m = r(s),
      x = m.length,
      w = r(f),
      O = w.length;
    if (x != O && !A) return !1;
    for (var R = x; R--; ) {
      var H = m[R];
      if (!(A ? H in f : i.call(f, H))) return !1;
    }
    var D = g.get(s),
      L = g.get(f);
    if (D && L) return D == f && L == s;
    var k = !0;
    (g.set(s, f), g.set(f, s));
    for (var G = A; ++R < x; ) {
      H = m[R];
      var Y = s[H],
        J = f[H];
      if (v) var ue = A ? v(J, Y, H, f, s, g) : v(Y, J, H, s, f, g);
      if (!(ue === void 0 ? Y === J || p(Y, J, d, v, g) : ue)) {
        k = !1;
        break;
      }
      G || (G = H == "constructor");
    }
    if (k && !G) {
      var fe = s.constructor,
        ye = f.constructor;
      fe != ye &&
        "constructor" in s &&
        "constructor" in f &&
        !(typeof fe == "function" && fe instanceof fe && typeof ye == "function" && ye instanceof ye) &&
        (k = !1);
    }
    return (g.delete(s), g.delete(f), k);
  }
  return ((S0 = c), S0);
}
var E0, e6;
function tm() {
  if (e6) return E0;
  e6 = 1;
  var r = zn(),
    n = pa(),
    u = r(n, "DataView");
  return ((E0 = u), E0);
}
var C0, t6;
function am() {
  if (t6) return C0;
  t6 = 1;
  var r = zn(),
    n = pa(),
    u = r(n, "Promise");
  return ((C0 = u), C0);
}
var w0, a6;
function nm() {
  if (a6) return w0;
  a6 = 1;
  var r = zn(),
    n = pa(),
    u = r(n, "Set");
  return ((w0 = u), w0);
}
var T0, n6;
function rm() {
  if (n6) return T0;
  n6 = 1;
  var r = zn(),
    n = pa(),
    u = r(n, "WeakMap");
  return ((T0 = u), T0);
}
var O0, r6;
function uc() {
  if (r6) return O0;
  r6 = 1;
  var r = tm(),
    n = b2(),
    u = am(),
    i = nm(),
    c = rm(),
    s = Rn(),
    f = Lg(),
    d = "[object Map]",
    v = "[object Object]",
    p = "[object Promise]",
    g = "[object Set]",
    A = "[object WeakMap]",
    m = "[object DataView]",
    x = f(r),
    w = f(n),
    O = f(u),
    R = f(i),
    H = f(c),
    D = s;
  return (
    ((r && D(new r(new ArrayBuffer(1))) != m) ||
      (n && D(new n()) != d) ||
      (u && D(u.resolve()) != p) ||
      (i && D(new i()) != g) ||
      (c && D(new c()) != A)) &&
      (D = function (L) {
        var k = s(L),
          G = k == v ? L.constructor : void 0,
          Y = G ? f(G) : "";
        if (Y)
          switch (Y) {
            case x:
              return m;
            case w:
              return d;
            case O:
              return p;
            case R:
              return g;
            case H:
              return A;
          }
        return k;
      }),
    (O0 = D),
    O0
  );
}
var M0, l6;
function lm() {
  if (l6) return M0;
  l6 = 1;
  var r = m2(),
    n = Gg(),
    u = Iy(),
    i = em(),
    c = uc(),
    s = ia(),
    f = o2(),
    d = Dg(),
    v = 1,
    p = "[object Arguments]",
    g = "[object Array]",
    A = "[object Object]",
    m = Object.prototype,
    x = m.hasOwnProperty;
  function w(O, R, H, D, L, k) {
    var G = s(O),
      Y = s(R),
      J = G ? g : c(O),
      ue = Y ? g : c(R);
    ((J = J == p ? A : J), (ue = ue == p ? A : ue));
    var fe = J == A,
      ye = ue == A,
      le = J == ue;
    if (le && f(O)) {
      if (!f(R)) return !1;
      ((G = !0), (fe = !1));
    }
    if (le && !fe) return (k || (k = new r()), G || d(O) ? n(O, R, H, D, L, k) : u(O, R, J, H, D, L, k));
    if (!(H & v)) {
      var _e = fe && x.call(O, "__wrapped__"),
        me = ye && x.call(R, "__wrapped__");
      if (_e || me) {
        var Ae = _e ? O.value() : O,
          Se = me ? R.value() : R;
        return (k || (k = new r()), L(Ae, Se, H, D, k));
      }
    }
    return le ? (k || (k = new r()), i(O, R, H, D, L, k)) : !1;
  }
  return ((M0 = w), M0);
}
var R0, i6;
function Kg() {
  if (i6) return R0;
  i6 = 1;
  var r = lm(),
    n = Ra();
  function u(i, c, s, f, d) {
    return i === c ? !0 : i == null || c == null || (!n(i) && !n(c)) ? i !== i && c !== c : r(i, c, s, f, u, d);
  }
  return ((R0 = u), R0);
}
var z0, u6;
function im() {
  if (u6) return z0;
  u6 = 1;
  var r = m2(),
    n = Kg(),
    u = 1,
    i = 2;
  function c(s, f, d, v) {
    var p = d.length,
      g = p,
      A = !v;
    if (s == null) return !g;
    for (s = Object(s); p--; ) {
      var m = d[p];
      if (A && m[2] ? m[1] !== s[m[0]] : !(m[0] in s)) return !1;
    }
    for (; ++p < g; ) {
      m = d[p];
      var x = m[0],
        w = s[x],
        O = m[1];
      if (A && m[2]) {
        if (w === void 0 && !(x in s)) return !1;
      } else {
        var R = new r();
        if (v) var H = v(w, O, x, s, f, R);
        if (!(H === void 0 ? n(O, w, u | i, v, R) : H)) return !1;
      }
    }
    return !0;
  }
  return ((z0 = c), z0);
}
var q0, c6;
function Pg() {
  if (c6) return q0;
  c6 = 1;
  var r = $r();
  function n(u) {
    return u === u && !r(u);
  }
  return ((q0 = n), q0);
}
var D0, o6;
function um() {
  if (o6) return D0;
  o6 = 1;
  var r = Pg(),
    n = gi();
  function u(i) {
    for (var c = n(i), s = c.length; s--; ) {
      var f = c[s],
        d = i[f];
      c[s] = [f, d, r(d)];
    }
    return c;
  }
  return ((D0 = u), D0);
}
var H0, s6;
function Fg() {
  if (s6) return H0;
  s6 = 1;
  function r(n, u) {
    return function (i) {
      return i == null ? !1 : i[n] === u && (u !== void 0 || n in Object(i));
    };
  }
  return ((H0 = r), H0);
}
var j0, f6;
function cm() {
  if (f6) return j0;
  f6 = 1;
  var r = im(),
    n = um(),
    u = Fg();
  function i(c) {
    var s = n(c);
    return s.length == 1 && s[0][2]
      ? u(s[0][0], s[0][1])
      : function (f) {
          return f === c || r(f, c, s);
        };
  }
  return ((j0 = i), j0);
}
var B0, h6;
function x2() {
  if (h6) return B0;
  h6 = 1;
  var r = Rn(),
    n = Ra(),
    u = "[object Symbol]";
  function i(c) {
    return typeof c == "symbol" || (n(c) && r(c) == u);
  }
  return ((B0 = i), B0);
}
var N0, d6;
function _2() {
  if (d6) return N0;
  d6 = 1;
  var r = ia(),
    n = x2(),
    u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    i = /^\w*$/;
  function c(s, f) {
    if (r(s)) return !1;
    var d = typeof s;
    return d == "number" || d == "symbol" || d == "boolean" || s == null || n(s)
      ? !0
      : i.test(s) || !u.test(s) || (f != null && s in Object(f));
  }
  return ((N0 = c), N0);
}
var Q0, p6;
function om() {
  if (p6) return Q0;
  p6 = 1;
  var r = y2(),
    n = "Expected a function";
  function u(i, c) {
    if (typeof i != "function" || (c != null && typeof c != "function")) throw new TypeError(n);
    var s = function () {
      var f = arguments,
        d = c ? c.apply(this, f) : f[0],
        v = s.cache;
      if (v.has(d)) return v.get(d);
      var p = i.apply(this, f);
      return ((s.cache = v.set(d, p) || v), p);
    };
    return ((s.cache = new (u.Cache || r)()), s);
  }
  return ((u.Cache = r), (Q0 = u), Q0);
}
var U0, v6;
function sm() {
  if (v6) return U0;
  v6 = 1;
  var r = om(),
    n = 500;
  function u(i) {
    var c = r(i, function (f) {
        return (s.size === n && s.clear(), f);
      }),
      s = c.cache;
    return c;
  }
  return ((U0 = u), U0);
}
var L0, g6;
function fm() {
  if (g6) return L0;
  g6 = 1;
  var r = sm(),
    n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    u = /\\(\\)?/g,
    i = r(function (c) {
      var s = [];
      return (
        c.charCodeAt(0) === 46 && s.push(""),
        c.replace(n, function (f, d, v, p) {
          s.push(v ? p.replace(u, "$1") : d || f);
        }),
        s
      );
    });
  return ((L0 = i), L0);
}
var G0, b6;
function hm() {
  if (b6) return G0;
  b6 = 1;
  var r = vi(),
    n = Ug(),
    u = ia(),
    i = x2(),
    c = r ? r.prototype : void 0,
    s = c ? c.toString : void 0;
  function f(d) {
    if (typeof d == "string") return d;
    if (u(d)) return n(d, f) + "";
    if (i(d)) return s ? s.call(d) : "";
    var v = d + "";
    return v == "0" && 1 / d == -1 / 0 ? "-0" : v;
  }
  return ((G0 = f), G0);
}
var k0, y6;
function dm() {
  if (y6) return k0;
  y6 = 1;
  var r = hm();
  function n(u) {
    return u == null ? "" : r(u);
  }
  return ((k0 = n), k0);
}
var V0, m6;
function $g() {
  if (m6) return V0;
  m6 = 1;
  var r = ia(),
    n = _2(),
    u = fm(),
    i = dm();
  function c(s, f) {
    return r(s) ? s : n(s, f) ? [s] : u(i(s));
  }
  return ((V0 = c), V0);
}
var Y0, A6;
function cc() {
  if (A6) return Y0;
  A6 = 1;
  var r = x2();
  function n(u) {
    if (typeof u == "string" || r(u)) return u;
    var i = u + "";
    return i == "0" && 1 / u == -1 / 0 ? "-0" : i;
  }
  return ((Y0 = n), Y0);
}
var X0, x6;
function Jg() {
  if (x6) return X0;
  x6 = 1;
  var r = $g(),
    n = cc();
  function u(i, c) {
    c = r(c, i);
    for (var s = 0, f = c.length; i != null && s < f; ) i = i[n(c[s++])];
    return s && s == f ? i : void 0;
  }
  return ((X0 = u), X0);
}
var Z0, _6;
function pm() {
  if (_6) return Z0;
  _6 = 1;
  var r = Jg();
  function n(u, i, c) {
    var s = u == null ? void 0 : r(u, i);
    return s === void 0 ? c : s;
  }
  return ((Z0 = n), Z0);
}
var K0, S6;
function vm() {
  if (S6) return K0;
  S6 = 1;
  function r(n, u) {
    return n != null && u in Object(n);
  }
  return ((K0 = r), K0);
}
var P0, E6;
function gm() {
  if (E6) return P0;
  E6 = 1;
  var r = $g(),
    n = zg(),
    u = ia(),
    i = qg(),
    c = s2(),
    s = cc();
  function f(d, v, p) {
    v = r(v, d);
    for (var g = -1, A = v.length, m = !1; ++g < A; ) {
      var x = s(v[g]);
      if (!(m = d != null && p(d, x))) break;
      d = d[x];
    }
    return m || ++g != A ? m : ((A = d == null ? 0 : d.length), !!A && c(A) && i(x, A) && (u(d) || n(d)));
  }
  return ((P0 = f), P0);
}
var F0, C6;
function bm() {
  if (C6) return F0;
  C6 = 1;
  var r = vm(),
    n = gm();
  function u(i, c) {
    return i != null && n(i, c, r);
  }
  return ((F0 = u), F0);
}
var $0, w6;
function ym() {
  if (w6) return $0;
  w6 = 1;
  var r = Kg(),
    n = pm(),
    u = bm(),
    i = _2(),
    c = Pg(),
    s = Fg(),
    f = cc(),
    d = 1,
    v = 2;
  function p(g, A) {
    return i(g) && c(A)
      ? s(f(g), A)
      : function (m) {
          var x = n(m, g);
          return x === void 0 && x === A ? u(m, g) : r(A, x, d | v);
        };
  }
  return (($0 = p), $0);
}
var J0, T6;
function mm() {
  if (T6) return J0;
  T6 = 1;
  function r(n) {
    return function (u) {
      return u?.[n];
    };
  }
  return ((J0 = r), J0);
}
var I0, O6;
function Am() {
  if (O6) return I0;
  O6 = 1;
  var r = Jg();
  function n(u) {
    return function (i) {
      return r(i, u);
    };
  }
  return ((I0 = n), I0);
}
var W0, M6;
function xm() {
  if (M6) return W0;
  M6 = 1;
  var r = mm(),
    n = Am(),
    u = _2(),
    i = cc();
  function c(s) {
    return u(s) ? r(i(s)) : n(s);
  }
  return ((W0 = c), W0);
}
var ef, R6;
function _m() {
  if (R6) return ef;
  R6 = 1;
  var r = cm(),
    n = ym(),
    u = Qg(),
    i = ia(),
    c = xm();
  function s(f) {
    return typeof f == "function" ? f : f == null ? u : typeof f == "object" ? (i(f) ? n(f[0], f[1]) : r(f)) : c(f);
  }
  return ((ef = s), ef);
}
var tf, z6;
function Sm() {
  if (z6) return tf;
  z6 = 1;
  var r = ac();
  function n(u, i) {
    return function (c, s) {
      if (c == null) return c;
      if (!r(c)) return u(c, s);
      for (var f = c.length, d = i ? f : -1, v = Object(c); (i ? d-- : ++d < f) && s(v[d], d, v) !== !1; );
      return c;
    };
  }
  return ((tf = n), tf);
}
var af, q6;
function Em() {
  if (q6) return af;
  q6 = 1;
  var r = Ng(),
    n = Sm(),
    u = n(r);
  return ((af = u), af);
}
var nf, D6;
function Cm() {
  if (D6) return nf;
  D6 = 1;
  var r = Em(),
    n = ac();
  function u(i, c) {
    var s = -1,
      f = n(i) ? Array(i.length) : [];
    return (
      r(i, function (d, v, p) {
        f[++s] = c(d, v, p);
      }),
      f
    );
  }
  return ((nf = u), nf);
}
var rf, H6;
function wm() {
  if (H6) return rf;
  H6 = 1;
  var r = Ug(),
    n = _m(),
    u = Cm(),
    i = ia();
  function c(s, f) {
    var d = i(s) ? r : u;
    return d(s, n(f, 3));
  }
  return ((rf = c), rf);
}
var j6;
function Tm() {
  if (j6) return Cr;
  ((j6 = 1), Object.defineProperty(Cr, "__esModule", { value: !0 }), (Cr.flattenNames = void 0));
  var r = cy(),
    n = v(r),
    u = p2(),
    i = v(u),
    c = yy(),
    s = v(c),
    f = wm(),
    d = v(f);
  function v(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var p = (Cr.flattenNames = function g() {
    var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      m = [];
    return (
      (0, d.default)(A, function (x) {
        Array.isArray(x)
          ? g(x).map(function (w) {
              return m.push(w);
            })
          : (0, s.default)(x)
            ? (0, i.default)(x, function (w, O) {
                (w === !0 && m.push(O), m.push(O + "-" + w));
              })
            : (0, n.default)(x) && m.push(x);
      }),
      m
    );
  });
  return ((Cr.default = p), Cr);
}
var wr = {},
  lf,
  B6;
function Om() {
  if (B6) return lf;
  B6 = 1;
  function r(n, u) {
    for (var i = -1, c = n == null ? 0 : n.length; ++i < c && u(n[i], i, n) !== !1; );
    return n;
  }
  return ((lf = r), lf);
}
var uf, N6;
function Mm() {
  if (N6) return uf;
  N6 = 1;
  var r = zn(),
    n = (function () {
      try {
        var u = r(Object, "defineProperty");
        return (u({}, "", {}), u);
      } catch {}
    })();
  return ((uf = n), uf);
}
var cf, Q6;
function Ig() {
  if (Q6) return cf;
  Q6 = 1;
  var r = Mm();
  function n(u, i, c) {
    i == "__proto__" && r ? r(u, i, { configurable: !0, enumerable: !0, value: c, writable: !0 }) : (u[i] = c);
  }
  return ((cf = n), cf);
}
var of, U6;
function Wg() {
  if (U6) return of;
  U6 = 1;
  var r = Ig(),
    n = g2(),
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s, f, d) {
    var v = s[f];
    (!(i.call(s, f) && n(v, d)) || (d === void 0 && !(f in s))) && r(s, f, d);
  }
  return ((of = c), of);
}
var sf, L6;
function oc() {
  if (L6) return sf;
  L6 = 1;
  var r = Wg(),
    n = Ig();
  function u(i, c, s, f) {
    var d = !s;
    s || (s = {});
    for (var v = -1, p = c.length; ++v < p; ) {
      var g = c[v],
        A = f ? f(s[g], i[g], g, s, i) : void 0;
      (A === void 0 && (A = i[g]), d ? n(s, g, A) : r(s, g, A));
    }
    return s;
  }
  return ((sf = u), sf);
}
var ff, G6;
function Rm() {
  if (G6) return ff;
  G6 = 1;
  var r = oc(),
    n = gi();
  function u(i, c) {
    return i && r(c, n(c), i);
  }
  return ((ff = u), ff);
}
var hf, k6;
function zm() {
  if (k6) return hf;
  k6 = 1;
  function r(n) {
    var u = [];
    if (n != null) for (var i in Object(n)) u.push(i);
    return u;
  }
  return ((hf = r), hf);
}
var df, V6;
function qm() {
  if (V6) return df;
  V6 = 1;
  var r = $r(),
    n = d2(),
    u = zm(),
    i = Object.prototype,
    c = i.hasOwnProperty;
  function s(f) {
    if (!r(f)) return u(f);
    var d = n(f),
      v = [];
    for (var p in f) (p == "constructor" && (d || !c.call(f, p))) || v.push(p);
    return v;
  }
  return ((df = s), df);
}
var pf, Y6;
function S2() {
  if (Y6) return pf;
  Y6 = 1;
  var r = Hg(),
    n = qm(),
    u = ac();
  function i(c) {
    return u(c) ? r(c, !0) : n(c);
  }
  return ((pf = i), pf);
}
var vf, X6;
function Dm() {
  if (X6) return vf;
  X6 = 1;
  var r = oc(),
    n = S2();
  function u(i, c) {
    return i && r(c, n(c), i);
  }
  return ((vf = u), vf);
}
var ci = { exports: {} };
ci.exports;
var Z6;
function Hm() {
  return (
    Z6 ||
      ((Z6 = 1),
      (function (r, n) {
        var u = pa(),
          i = n && !n.nodeType && n,
          c = i && !0 && r && !r.nodeType && r,
          s = c && c.exports === i,
          f = s ? u.Buffer : void 0,
          d = f ? f.allocUnsafe : void 0;
        function v(p, g) {
          if (g) return p.slice();
          var A = p.length,
            m = d ? d(A) : new p.constructor(A);
          return (p.copy(m), m);
        }
        r.exports = v;
      })(ci, ci.exports)),
    ci.exports
  );
}
var gf, K6;
function jm() {
  if (K6) return gf;
  K6 = 1;
  function r(n, u) {
    var i = -1,
      c = n.length;
    for (u || (u = Array(c)); ++i < c; ) u[i] = n[i];
    return u;
  }
  return ((gf = r), gf);
}
var bf, P6;
function Bm() {
  if (P6) return bf;
  P6 = 1;
  var r = oc(),
    n = A2();
  function u(i, c) {
    return r(i, n(i), c);
  }
  return ((bf = u), bf);
}
var yf, F6;
function e8() {
  if (F6) return yf;
  F6 = 1;
  var r = Vg(),
    n = v2(),
    u = A2(),
    i = Xg(),
    c = Object.getOwnPropertySymbols,
    s = c
      ? function (f) {
          for (var d = []; f; ) (r(d, u(f)), (f = n(f)));
          return d;
        }
      : i;
  return ((yf = s), yf);
}
var mf, $6;
function Nm() {
  if ($6) return mf;
  $6 = 1;
  var r = oc(),
    n = e8();
  function u(i, c) {
    return r(i, n(i), c);
  }
  return ((mf = u), mf);
}
var Af, J6;
function Qm() {
  if (J6) return Af;
  J6 = 1;
  var r = Yg(),
    n = e8(),
    u = S2();
  function i(c) {
    return r(c, u, n);
  }
  return ((Af = i), Af);
}
var xf, I6;
function Um() {
  if (I6) return xf;
  I6 = 1;
  var r = Object.prototype,
    n = r.hasOwnProperty;
  function u(i) {
    var c = i.length,
      s = new i.constructor(c);
    return (c && typeof i[0] == "string" && n.call(i, "index") && ((s.index = i.index), (s.input = i.input)), s);
  }
  return ((xf = u), xf);
}
var _f, W6;
function E2() {
  if (W6) return _f;
  W6 = 1;
  var r = kg();
  function n(u) {
    var i = new u.constructor(u.byteLength);
    return (new r(i).set(new r(u)), i);
  }
  return ((_f = n), _f);
}
var Sf, ev;
function Lm() {
  if (ev) return Sf;
  ev = 1;
  var r = E2();
  function n(u, i) {
    var c = i ? r(u.buffer) : u.buffer;
    return new u.constructor(c, u.byteOffset, u.byteLength);
  }
  return ((Sf = n), Sf);
}
var Ef, tv;
function Gm() {
  if (tv) return Ef;
  tv = 1;
  var r = /\w*$/;
  function n(u) {
    var i = new u.constructor(u.source, r.exec(u));
    return ((i.lastIndex = u.lastIndex), i);
  }
  return ((Ef = n), Ef);
}
var Cf, av;
function km() {
  if (av) return Cf;
  av = 1;
  var r = vi(),
    n = r ? r.prototype : void 0,
    u = n ? n.valueOf : void 0;
  function i(c) {
    return u ? Object(u.call(c)) : {};
  }
  return ((Cf = i), Cf);
}
var wf, nv;
function Vm() {
  if (nv) return wf;
  nv = 1;
  var r = E2();
  function n(u, i) {
    var c = i ? r(u.buffer) : u.buffer;
    return new u.constructor(c, u.byteOffset, u.length);
  }
  return ((wf = n), wf);
}
var Tf, rv;
function Ym() {
  if (rv) return Tf;
  rv = 1;
  var r = E2(),
    n = Lm(),
    u = Gm(),
    i = km(),
    c = Vm(),
    s = "[object Boolean]",
    f = "[object Date]",
    d = "[object Map]",
    v = "[object Number]",
    p = "[object RegExp]",
    g = "[object Set]",
    A = "[object String]",
    m = "[object Symbol]",
    x = "[object ArrayBuffer]",
    w = "[object DataView]",
    O = "[object Float32Array]",
    R = "[object Float64Array]",
    H = "[object Int8Array]",
    D = "[object Int16Array]",
    L = "[object Int32Array]",
    k = "[object Uint8Array]",
    G = "[object Uint8ClampedArray]",
    Y = "[object Uint16Array]",
    J = "[object Uint32Array]";
  function ue(fe, ye, le) {
    var _e = fe.constructor;
    switch (ye) {
      case x:
        return r(fe);
      case s:
      case f:
        return new _e(+fe);
      case w:
        return n(fe, le);
      case O:
      case R:
      case H:
      case D:
      case L:
      case k:
      case G:
      case Y:
      case J:
        return c(fe, le);
      case d:
        return new _e();
      case v:
      case A:
        return new _e(fe);
      case p:
        return u(fe);
      case g:
        return new _e();
      case m:
        return i(fe);
    }
  }
  return ((Tf = ue), Tf);
}
var Of, lv;
function Xm() {
  if (lv) return Of;
  lv = 1;
  var r = $r(),
    n = Object.create,
    u = (function () {
      function i() {}
      return function (c) {
        if (!r(c)) return {};
        if (n) return n(c);
        i.prototype = c;
        var s = new i();
        return ((i.prototype = void 0), s);
      };
    })();
  return ((Of = u), Of);
}
var Mf, iv;
function Zm() {
  if (iv) return Mf;
  iv = 1;
  var r = Xm(),
    n = v2(),
    u = d2();
  function i(c) {
    return typeof c.constructor == "function" && !u(c) ? r(n(c)) : {};
  }
  return ((Mf = i), Mf);
}
var Rf, uv;
function Km() {
  if (uv) return Rf;
  uv = 1;
  var r = uc(),
    n = Ra(),
    u = "[object Map]";
  function i(c) {
    return n(c) && r(c) == u;
  }
  return ((Rf = i), Rf);
}
var zf, cv;
function Pm() {
  if (cv) return zf;
  cv = 1;
  var r = Km(),
    n = f2(),
    u = h2(),
    i = u && u.isMap,
    c = i ? n(i) : r;
  return ((zf = c), zf);
}
var qf, ov;
function Fm() {
  if (ov) return qf;
  ov = 1;
  var r = uc(),
    n = Ra(),
    u = "[object Set]";
  function i(c) {
    return n(c) && r(c) == u;
  }
  return ((qf = i), qf);
}
var Df, sv;
function $m() {
  if (sv) return Df;
  sv = 1;
  var r = Fm(),
    n = f2(),
    u = h2(),
    i = u && u.isSet,
    c = i ? n(i) : r;
  return ((Df = c), Df);
}
var Hf, fv;
function Jm() {
  if (fv) return Hf;
  fv = 1;
  var r = m2(),
    n = Om(),
    u = Wg(),
    i = Rm(),
    c = Dm(),
    s = Hm(),
    f = jm(),
    d = Bm(),
    v = Nm(),
    p = Zg(),
    g = Qm(),
    A = uc(),
    m = Um(),
    x = Ym(),
    w = Zm(),
    O = ia(),
    R = o2(),
    H = Pm(),
    D = $r(),
    L = $m(),
    k = gi(),
    G = S2(),
    Y = 1,
    J = 2,
    ue = 4,
    fe = "[object Arguments]",
    ye = "[object Array]",
    le = "[object Boolean]",
    _e = "[object Date]",
    me = "[object Error]",
    Ae = "[object Function]",
    Se = "[object GeneratorFunction]",
    U = "[object Map]",
    Z = "[object Number]",
    re = "[object Object]",
    ce = "[object RegExp]",
    C = "[object Set]",
    P = "[object String]",
    W = "[object Symbol]",
    te = "[object WeakMap]",
    oe = "[object ArrayBuffer]",
    ve = "[object DataView]",
    he = "[object Float32Array]",
    at = "[object Float64Array]",
    De = "[object Int8Array]",
    Xe = "[object Int16Array]",
    Ke = "[object Int32Array]",
    Gt = "[object Uint8Array]",
    kt = "[object Uint8ClampedArray]",
    E = "[object Uint16Array]",
    z = "[object Uint32Array]",
    _ = {};
  ((_[fe] =
    _[ye] =
    _[oe] =
    _[ve] =
    _[le] =
    _[_e] =
    _[he] =
    _[at] =
    _[De] =
    _[Xe] =
    _[Ke] =
    _[U] =
    _[Z] =
    _[re] =
    _[ce] =
    _[C] =
    _[P] =
    _[W] =
    _[Gt] =
    _[kt] =
    _[E] =
    _[z] =
      !0),
    (_[me] = _[Ae] = _[te] = !1));
  function I($, ae, Ce, Ue, je, Fe) {
    var $e,
      ut = ae & Y,
      Nn = ae & J,
      on = ae & ue;
    if ((Ce && ($e = je ? Ce($, Ue, je, Fe) : Ce($)), $e !== void 0)) return $e;
    if (!D($)) return $;
    var vt = O($);
    if (vt) {
      if ((($e = m($)), !ut)) return f($, $e);
    } else {
      var At = A($),
        gt = At == Ae || At == Se;
      if (R($)) return s($, ut);
      if (At == re || At == fe || (gt && !je)) {
        if ((($e = Nn || gt ? {} : w($)), !ut)) return Nn ? v($, c($e, $)) : d($, i($e, $));
      } else {
        if (!_[At]) return je ? $ : {};
        $e = x($, At, ut);
      }
    }
    Fe || (Fe = new r());
    var mi = Fe.get($);
    if (mi) return mi;
    (Fe.set($, $e),
      L($)
        ? $.forEach(function (zt) {
            $e.add(I(zt, ae, Ce, zt, $, Fe));
          })
        : H($) &&
          $.forEach(function (zt, Vt) {
            $e.set(Vt, I(zt, ae, Ce, Vt, $, Fe));
          }));
    var gc = on ? (Nn ? g : p) : Nn ? G : k,
      Ai = vt ? void 0 : gc($);
    return (
      n(Ai || $, function (zt, Vt) {
        (Ai && ((Vt = zt), (zt = $[Vt])), u($e, Vt, I(zt, ae, Ce, Vt, $, Fe)));
      }),
      $e
    );
  }
  return ((Hf = I), Hf);
}
var jf, hv;
function Im() {
  if (hv) return jf;
  hv = 1;
  var r = Jm(),
    n = 1,
    u = 4;
  function i(c) {
    return r(c, n | u);
  }
  return ((jf = i), jf);
}
var dv;
function Wm() {
  if (dv) return wr;
  ((dv = 1), Object.defineProperty(wr, "__esModule", { value: !0 }), (wr.mergeClasses = void 0));
  var r = p2(),
    n = s(r),
    u = Im(),
    i = s(u),
    c =
      Object.assign ||
      function (d) {
        for (var v = 1; v < arguments.length; v++) {
          var p = arguments[v];
          for (var g in p) Object.prototype.hasOwnProperty.call(p, g) && (d[g] = p[g]);
        }
        return d;
      };
  function s(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var f = (wr.mergeClasses = function (v) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      g = (v.default && (0, i.default)(v.default)) || {};
    return (
      p.map(function (A) {
        var m = v[A];
        return (
          m &&
            (0, n.default)(m, function (x, w) {
              (g[w] || (g[w] = {}), (g[w] = c({}, g[w], m[w])));
            }),
          A
        );
      }),
      g
    );
  });
  return ((wr.default = f), wr);
}
var Tr = {},
  pv;
function eA() {
  if (pv) return Tr;
  ((pv = 1), Object.defineProperty(Tr, "__esModule", { value: !0 }), (Tr.autoprefix = void 0));
  var r = p2(),
    n = i(r),
    u =
      Object.assign ||
      function (f) {
        for (var d = 1; d < arguments.length; d++) {
          var v = arguments[d];
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (f[p] = v[p]);
        }
        return f;
      };
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var c = {
      borderRadius: function (d) {
        return { msBorderRadius: d, MozBorderRadius: d, OBorderRadius: d, WebkitBorderRadius: d, borderRadius: d };
      },
      boxShadow: function (d) {
        return { msBoxShadow: d, MozBoxShadow: d, OBoxShadow: d, WebkitBoxShadow: d, boxShadow: d };
      },
      userSelect: function (d) {
        return { WebkitTouchCallout: d, KhtmlUserSelect: d, MozUserSelect: d, msUserSelect: d, WebkitUserSelect: d, userSelect: d };
      },
      flex: function (d) {
        return { WebkitBoxFlex: d, MozBoxFlex: d, WebkitFlex: d, msFlex: d, flex: d };
      },
      flexBasis: function (d) {
        return { WebkitFlexBasis: d, flexBasis: d };
      },
      justifyContent: function (d) {
        return { WebkitJustifyContent: d, justifyContent: d };
      },
      transition: function (d) {
        return { msTransition: d, MozTransition: d, OTransition: d, WebkitTransition: d, transition: d };
      },
      transform: function (d) {
        return { msTransform: d, MozTransform: d, OTransform: d, WebkitTransform: d, transform: d };
      },
      absolute: function (d) {
        var v = d && d.split(" ");
        return { position: "absolute", top: v && v[0], right: v && v[1], bottom: v && v[2], left: v && v[3] };
      },
      extend: function (d, v) {
        var p = v[d];
        return p || { extend: d };
      },
    },
    s = (Tr.autoprefix = function (d) {
      var v = {};
      return (
        (0, n.default)(d, function (p, g) {
          var A = {};
          ((0, n.default)(p, function (m, x) {
            var w = c[x];
            w ? (A = u({}, A, w(m))) : (A[x] = m);
          }),
            (v[g] = A));
        }),
        v
      );
    });
  return ((Tr.default = s), Tr);
}
var Or = {},
  vv;
function tA() {
  if (vv) return Or;
  ((vv = 1), Object.defineProperty(Or, "__esModule", { value: !0 }), (Or.hover = void 0));
  var r =
      Object.assign ||
      function (v) {
        for (var p = 1; p < arguments.length; p++) {
          var g = arguments[p];
          for (var A in g) Object.prototype.hasOwnProperty.call(g, A) && (v[A] = g[A]);
        }
        return v;
      },
    n = un(),
    u = i(n);
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function c(v, p) {
    if (!(v instanceof p)) throw new TypeError("Cannot call a class as a function");
  }
  function s(v, p) {
    if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return p && (typeof p == "object" || typeof p == "function") ? p : v;
  }
  function f(v, p) {
    if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
    ((v.prototype = Object.create(p && p.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } })),
      p && (Object.setPrototypeOf ? Object.setPrototypeOf(v, p) : (v.__proto__ = p)));
  }
  var d = (Or.hover = function (p) {
    var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (A) {
      f(m, A);
      function m() {
        var x, w, O, R;
        c(this, m);
        for (var H = arguments.length, D = Array(H), L = 0; L < H; L++) D[L] = arguments[L];
        return (
          (R =
            ((w = ((O = s(this, (x = m.__proto__ || Object.getPrototypeOf(m)).call.apply(x, [this].concat(D)))), O)),
            (O.state = { hover: !1 }),
            (O.handleMouseOver = function () {
              return O.setState({ hover: !0 });
            }),
            (O.handleMouseOut = function () {
              return O.setState({ hover: !1 });
            }),
            (O.render = function () {
              return u.default.createElement(
                g,
                { onMouseOver: O.handleMouseOver, onMouseOut: O.handleMouseOut },
                u.default.createElement(p, r({}, O.props, O.state)),
              );
            }),
            w)),
          s(O, R)
        );
      }
      return m;
    })(u.default.Component);
  });
  return ((Or.default = d), Or);
}
var Mr = {},
  gv;
function aA() {
  if (gv) return Mr;
  ((gv = 1), Object.defineProperty(Mr, "__esModule", { value: !0 }), (Mr.active = void 0));
  var r =
      Object.assign ||
      function (v) {
        for (var p = 1; p < arguments.length; p++) {
          var g = arguments[p];
          for (var A in g) Object.prototype.hasOwnProperty.call(g, A) && (v[A] = g[A]);
        }
        return v;
      },
    n = un(),
    u = i(n);
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function c(v, p) {
    if (!(v instanceof p)) throw new TypeError("Cannot call a class as a function");
  }
  function s(v, p) {
    if (!v) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return p && (typeof p == "object" || typeof p == "function") ? p : v;
  }
  function f(v, p) {
    if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
    ((v.prototype = Object.create(p && p.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } })),
      p && (Object.setPrototypeOf ? Object.setPrototypeOf(v, p) : (v.__proto__ = p)));
  }
  var d = (Mr.active = function (p) {
    var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (A) {
      f(m, A);
      function m() {
        var x, w, O, R;
        c(this, m);
        for (var H = arguments.length, D = Array(H), L = 0; L < H; L++) D[L] = arguments[L];
        return (
          (R =
            ((w = ((O = s(this, (x = m.__proto__ || Object.getPrototypeOf(m)).call.apply(x, [this].concat(D)))), O)),
            (O.state = { active: !1 }),
            (O.handleMouseDown = function () {
              return O.setState({ active: !0 });
            }),
            (O.handleMouseUp = function () {
              return O.setState({ active: !1 });
            }),
            (O.render = function () {
              return u.default.createElement(
                g,
                { onMouseDown: O.handleMouseDown, onMouseUp: O.handleMouseUp },
                u.default.createElement(p, r({}, O.props, O.state)),
              );
            }),
            w)),
          s(O, R)
        );
      }
      return m;
    })(u.default.Component);
  });
  return ((Mr.default = d), Mr);
}
var Bu = {},
  bv;
function nA() {
  if (bv) return Bu;
  ((bv = 1), Object.defineProperty(Bu, "__esModule", { value: !0 }));
  var r = function (u, i) {
    var c = {},
      s = function (d) {
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        c[d] = v;
      };
    return (
      u === 0 && s("first-child"),
      u === i - 1 && s("last-child"),
      (u === 0 || u % 2 === 0) && s("even"),
      Math.abs(u % 2) === 1 && s("odd"),
      s("nth-child", u),
      c
    );
  };
  return ((Bu.default = r), Bu);
}
var yv;
function rA() {
  if (yv) return Ot;
  ((yv = 1),
    Object.defineProperty(Ot, "__esModule", { value: !0 }),
    (Ot.ReactCSS = Ot.loop = Ot.handleActive = Ot.handleHover = Ot.hover = void 0));
  var r = Tm(),
    n = m(r),
    u = Wm(),
    i = m(u),
    c = eA(),
    s = m(c),
    f = tA(),
    d = m(f),
    v = aA(),
    p = m(v),
    g = nA(),
    A = m(g);
  function m(w) {
    return w && w.__esModule ? w : { default: w };
  }
  ((Ot.hover = d.default), (Ot.handleHover = d.default), (Ot.handleActive = p.default), (Ot.loop = A.default));
  var x = (Ot.ReactCSS = function (O) {
    for (var R = arguments.length, H = Array(R > 1 ? R - 1 : 0), D = 1; D < R; D++) H[D - 1] = arguments[D];
    var L = (0, n.default)(H),
      k = (0, i.default)(O, L);
    return (0, s.default)(k);
  });
  return ((Ot.default = x), Ot);
}
var C2 = rA();
const xe = Fr(C2);
var lA = function (n, u, i, c, s) {
    var f = s.clientWidth,
      d = s.clientHeight,
      v = typeof n.pageX == "number" ? n.pageX : n.touches[0].pageX,
      p = typeof n.pageY == "number" ? n.pageY : n.touches[0].pageY,
      g = v - (s.getBoundingClientRect().left + window.pageXOffset),
      A = p - (s.getBoundingClientRect().top + window.pageYOffset);
    if (i === "vertical") {
      var m = void 0;
      if ((A < 0 ? (m = 0) : A > d ? (m = 1) : (m = Math.round((A * 100) / d) / 100), u.a !== m))
        return { h: u.h, s: u.s, l: u.l, a: m, source: "rgb" };
    } else {
      var x = void 0;
      if ((g < 0 ? (x = 0) : g > f ? (x = 1) : (x = Math.round((g * 100) / f) / 100), c !== x))
        return { h: u.h, s: u.s, l: u.l, a: x, source: "rgb" };
    }
    return null;
  },
  Bf = {},
  iA = function (n, u, i, c) {
    if (typeof document > "u" && !c) return null;
    var s = c ? new c() : document.createElement("canvas");
    ((s.width = i * 2), (s.height = i * 2));
    var f = s.getContext("2d");
    return f
      ? ((f.fillStyle = n),
        f.fillRect(0, 0, s.width, s.height),
        (f.fillStyle = u),
        f.fillRect(0, 0, i, i),
        f.translate(i, i),
        f.fillRect(0, 0, i, i),
        s.toDataURL())
      : null;
  },
  uA = function (n, u, i, c) {
    var s = n + "-" + u + "-" + i + (c ? "-server" : "");
    if (Bf[s]) return Bf[s];
    var f = iA(n, u, i, c);
    return ((Bf[s] = f), f);
  },
  mv =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  Jr = function (n) {
    var u = n.white,
      i = n.grey,
      c = n.size,
      s = n.renderers,
      f = n.borderRadius,
      d = n.boxShadow,
      v = n.children,
      p = xe({
        default: {
          grid: {
            borderRadius: f,
            boxShadow: d,
            absolute: "0px 0px 0px 0px",
            background: "url(" + uA(u, i, c, s.canvas) + ") center left",
          },
        },
      });
    return Ee.isValidElement(v)
      ? S.cloneElement(v, mv({}, v.props, { style: mv({}, v.props.style, p.grid) }))
      : S.createElement("div", { style: p.grid });
  };
Jr.defaultProps = { size: 8, white: "transparent", grey: "rgba(0,0,0,.08)", renderers: {} };
var cA =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  oA = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function sA(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Av(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function fA(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var w2 = (function (r) {
    fA(n, r);
    function n() {
      var u, i, c, s;
      sA(this, n);
      for (var f = arguments.length, d = Array(f), v = 0; v < f; v++) d[v] = arguments[v];
      return (
        (s =
          ((i = ((c = Av(this, (u = n.__proto__ || Object.getPrototypeOf(n)).call.apply(u, [this].concat(d)))), c)),
          (c.handleChange = function (p) {
            var g = lA(p, c.props.hsl, c.props.direction, c.props.a, c.container);
            g && typeof c.props.onChange == "function" && c.props.onChange(g, p);
          }),
          (c.handleMouseDown = function (p) {
            (c.handleChange(p), window.addEventListener("mousemove", c.handleChange), window.addEventListener("mouseup", c.handleMouseUp));
          }),
          (c.handleMouseUp = function () {
            c.unbindEventListeners();
          }),
          (c.unbindEventListeners = function () {
            (window.removeEventListener("mousemove", c.handleChange), window.removeEventListener("mouseup", c.handleMouseUp));
          }),
          i)),
        Av(c, s)
      );
    }
    return (
      oA(n, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              c = this.props.rgb,
              s = xe(
                {
                  default: {
                    alpha: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                    checkboard: { absolute: "0px 0px 0px 0px", overflow: "hidden", borderRadius: this.props.radius },
                    gradient: {
                      absolute: "0px 0px 0px 0px",
                      background:
                        "linear-gradient(to right, rgba(" +
                        c.r +
                        "," +
                        c.g +
                        "," +
                        c.b +
                        `, 0) 0%,
           rgba(` +
                        c.r +
                        "," +
                        c.g +
                        "," +
                        c.b +
                        ", 1) 100%)",
                      boxShadow: this.props.shadow,
                      borderRadius: this.props.radius,
                    },
                    container: { position: "relative", height: "100%", margin: "0 3px" },
                    pointer: { position: "absolute", left: c.a * 100 + "%" },
                    slider: {
                      width: "4px",
                      borderRadius: "1px",
                      height: "8px",
                      boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                      background: "#fff",
                      marginTop: "1px",
                      transform: "translateX(-2px)",
                    },
                  },
                  vertical: {
                    gradient: {
                      background:
                        "linear-gradient(to bottom, rgba(" +
                        c.r +
                        "," +
                        c.g +
                        "," +
                        c.b +
                        `, 0) 0%,
           rgba(` +
                        c.r +
                        "," +
                        c.g +
                        "," +
                        c.b +
                        ", 1) 100%)",
                    },
                    pointer: { left: 0, top: c.a * 100 + "%" },
                  },
                  overwrite: cA({}, this.props.style),
                },
                { vertical: this.props.direction === "vertical", overwrite: !0 },
              );
            return S.createElement(
              "div",
              { style: s.alpha },
              S.createElement("div", { style: s.checkboard }, S.createElement(Jr, { renderers: this.props.renderers })),
              S.createElement("div", { style: s.gradient }),
              S.createElement(
                "div",
                {
                  style: s.container,
                  ref: function (d) {
                    return (i.container = d);
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange,
                },
                S.createElement(
                  "div",
                  { style: s.pointer },
                  this.props.pointer ? S.createElement(this.props.pointer, this.props) : S.createElement("div", { style: s.slider }),
                ),
              ),
            );
          },
        },
      ]),
      n
    );
  })(Ee.PureComponent || Ee.Component),
  hA = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function dA(r, n, u) {
  return (n in r ? Object.defineProperty(r, n, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (r[n] = u), r);
}
function pA(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function vA(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function gA(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var bA = 1,
  t8 = 38,
  yA = 40,
  mA = [t8, yA],
  AA = function (n) {
    return mA.indexOf(n) > -1;
  },
  xA = function (n) {
    return Number(String(n).replace(/%/g, ""));
  },
  _A = 1,
  ze = (function (r) {
    gA(n, r);
    function n(u) {
      pA(this, n);
      var i = vA(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
      return (
        (i.handleBlur = function () {
          i.state.blurValue && i.setState({ value: i.state.blurValue, blurValue: null });
        }),
        (i.handleChange = function (c) {
          i.setUpdatedValue(c.target.value, c);
        }),
        (i.handleKeyDown = function (c) {
          var s = xA(c.target.value);
          if (!isNaN(s) && AA(c.keyCode)) {
            var f = i.getArrowOffset(),
              d = c.keyCode === t8 ? s + f : s - f;
            i.setUpdatedValue(d, c);
          }
        }),
        (i.handleDrag = function (c) {
          if (i.props.dragLabel) {
            var s = Math.round(i.props.value + c.movementX);
            s >= 0 && s <= i.props.dragMax && i.props.onChange && i.props.onChange(i.getValueObjectWithLabel(s), c);
          }
        }),
        (i.handleMouseDown = function (c) {
          i.props.dragLabel &&
            (c.preventDefault(),
            i.handleDrag(c),
            window.addEventListener("mousemove", i.handleDrag),
            window.addEventListener("mouseup", i.handleMouseUp));
        }),
        (i.handleMouseUp = function () {
          i.unbindEventListeners();
        }),
        (i.unbindEventListeners = function () {
          (window.removeEventListener("mousemove", i.handleDrag), window.removeEventListener("mouseup", i.handleMouseUp));
        }),
        (i.state = { value: String(u.value).toUpperCase(), blurValue: String(u.value).toUpperCase() }),
        (i.inputId = "rc-editable-input-" + _A++),
        i
      );
    }
    return (
      hA(n, [
        {
          key: "componentDidUpdate",
          value: function (i, c) {
            this.props.value !== this.state.value &&
              (i.value !== this.props.value || c.value !== this.state.value) &&
              (this.input === document.activeElement
                ? this.setState({ blurValue: String(this.props.value).toUpperCase() })
                : this.setState({
                    value: String(this.props.value).toUpperCase(),
                    blurValue: !this.state.blurValue && String(this.props.value).toUpperCase(),
                  }));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "getValueObjectWithLabel",
          value: function (i) {
            return dA({}, this.props.label, i);
          },
        },
        {
          key: "getArrowOffset",
          value: function () {
            return this.props.arrowOffset || bA;
          },
        },
        {
          key: "setUpdatedValue",
          value: function (i, c) {
            var s = this.props.label ? this.getValueObjectWithLabel(i) : i;
            (this.props.onChange && this.props.onChange(s, c), this.setState({ value: i }));
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              c = xe(
                {
                  default: { wrap: { position: "relative" } },
                  "user-override": {
                    wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                    input: this.props.style && this.props.style.input ? this.props.style.input : {},
                    label: this.props.style && this.props.style.label ? this.props.style.label : {},
                  },
                  "dragLabel-true": { label: { cursor: "ew-resize" } },
                },
                { "user-override": !0 },
                this.props,
              );
            return S.createElement(
              "div",
              { style: c.wrap },
              S.createElement("input", {
                id: this.inputId,
                style: c.input,
                ref: function (f) {
                  return (i.input = f);
                },
                value: this.state.value,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                placeholder: this.props.placeholder,
                spellCheck: "false",
              }),
              this.props.label && !this.props.hideLabel
                ? S.createElement("label", { htmlFor: this.inputId, style: c.label, onMouseDown: this.handleMouseDown }, this.props.label)
                : null,
            );
          },
        },
      ]),
      n
    );
  })(Ee.PureComponent || Ee.Component),
  SA = function (n, u, i, c) {
    var s = c.clientWidth,
      f = c.clientHeight,
      d = typeof n.pageX == "number" ? n.pageX : n.touches[0].pageX,
      v = typeof n.pageY == "number" ? n.pageY : n.touches[0].pageY,
      p = d - (c.getBoundingClientRect().left + window.pageXOffset),
      g = v - (c.getBoundingClientRect().top + window.pageYOffset);
    if (u === "vertical") {
      var A = void 0;
      if (g < 0) A = 359;
      else if (g > f) A = 0;
      else {
        var m = -((g * 100) / f) + 100;
        A = (360 * m) / 100;
      }
      if (i.h !== A) return { h: A, s: i.s, l: i.l, a: i.a, source: "hsl" };
    } else {
      var x = void 0;
      if (p < 0) x = 0;
      else if (p > s) x = 359;
      else {
        var w = (p * 100) / s;
        x = (360 * w) / 100;
      }
      if (i.h !== x) return { h: x, s: i.s, l: i.l, a: i.a, source: "hsl" };
    }
    return null;
  },
  EA = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function CA(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function xv(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function wA(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var Ir = (function (r) {
    wA(n, r);
    function n() {
      var u, i, c, s;
      CA(this, n);
      for (var f = arguments.length, d = Array(f), v = 0; v < f; v++) d[v] = arguments[v];
      return (
        (s =
          ((i = ((c = xv(this, (u = n.__proto__ || Object.getPrototypeOf(n)).call.apply(u, [this].concat(d)))), c)),
          (c.handleChange = function (p) {
            var g = SA(p, c.props.direction, c.props.hsl, c.container);
            g && typeof c.props.onChange == "function" && c.props.onChange(g, p);
          }),
          (c.handleMouseDown = function (p) {
            (c.handleChange(p), window.addEventListener("mousemove", c.handleChange), window.addEventListener("mouseup", c.handleMouseUp));
          }),
          (c.handleMouseUp = function () {
            c.unbindEventListeners();
          }),
          i)),
        xv(c, s)
      );
    }
    return (
      EA(n, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "unbindEventListeners",
          value: function () {
            (window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp));
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              c = this.props.direction,
              s = c === void 0 ? "horizontal" : c,
              f = xe(
                {
                  default: {
                    hue: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius, boxShadow: this.props.shadow },
                    container: { padding: "0 2px", position: "relative", height: "100%", borderRadius: this.props.radius },
                    pointer: { position: "absolute", left: (this.props.hsl.h * 100) / 360 + "%" },
                    slider: {
                      marginTop: "1px",
                      width: "4px",
                      borderRadius: "1px",
                      height: "8px",
                      boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                      background: "#fff",
                      transform: "translateX(-2px)",
                    },
                  },
                  vertical: { pointer: { left: "0px", top: -((this.props.hsl.h * 100) / 360) + 100 + "%" } },
                },
                { vertical: s === "vertical" },
              );
            return S.createElement(
              "div",
              { style: f.hue },
              S.createElement(
                "div",
                {
                  className: "hue-" + s,
                  style: f.container,
                  ref: function (v) {
                    return (i.container = v);
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange,
                },
                S.createElement(
                  "style",
                  null,
                  `
            .hue-horizontal {
              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to right, #f00 0%, #ff0
                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }

            .hue-vertical {
              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }
          `,
                ),
                S.createElement(
                  "div",
                  { style: f.pointer },
                  this.props.pointer ? S.createElement(this.props.pointer, this.props) : S.createElement("div", { style: f.slider }),
                ),
              ),
            );
          },
        },
      ]),
      n
    );
  })(Ee.PureComponent || Ee.Component),
  Nf = { exports: {} },
  Qf,
  _v;
function TA() {
  if (_v) return Qf;
  _v = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((Qf = r), Qf);
}
var Uf, Sv;
function OA() {
  if (Sv) return Uf;
  Sv = 1;
  var r = TA();
  function n() {}
  function u() {}
  return (
    (u.resetWarningCache = n),
    (Uf = function () {
      function i(f, d, v, p, g, A) {
        if (A !== r) {
          var m = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((m.name = "Invariant Violation"), m);
        }
      }
      i.isRequired = i;
      function c() {
        return i;
      }
      var s = {
        array: i,
        bool: i,
        func: i,
        number: i,
        object: i,
        string: i,
        symbol: i,
        any: i,
        arrayOf: c,
        element: i,
        elementType: i,
        instanceOf: c,
        node: i,
        objectOf: c,
        oneOf: c,
        oneOfType: c,
        shape: c,
        exact: c,
        checkPropTypes: u,
        resetWarningCache: n,
      };
      return ((s.PropTypes = s), s);
    }),
    Uf
  );
}
var Ev;
function MA() {
  return (Ev || ((Ev = 1), (Nf.exports = OA()())), Nf.exports);
}
var RA = MA();
const ee = Fr(RA);
function zA() {
  ((this.__data__ = []), (this.size = 0));
}
function bi(r, n) {
  return r === n || (r !== r && n !== n);
}
function sc(r, n) {
  for (var u = r.length; u--; ) if (bi(r[u][0], n)) return u;
  return -1;
}
var qA = Array.prototype,
  DA = qA.splice;
function HA(r) {
  var n = this.__data__,
    u = sc(n, r);
  if (u < 0) return !1;
  var i = n.length - 1;
  return (u == i ? n.pop() : DA.call(n, u, 1), --this.size, !0);
}
function jA(r) {
  var n = this.__data__,
    u = sc(n, r);
  return u < 0 ? void 0 : n[u][1];
}
function BA(r) {
  return sc(this.__data__, r) > -1;
}
function NA(r, n) {
  var u = this.__data__,
    i = sc(u, r);
  return (i < 0 ? (++this.size, u.push([r, n])) : (u[i][1] = n), this);
}
function za(r) {
  var n = -1,
    u = r == null ? 0 : r.length;
  for (this.clear(); ++n < u; ) {
    var i = r[n];
    this.set(i[0], i[1]);
  }
}
za.prototype.clear = zA;
za.prototype.delete = HA;
za.prototype.get = jA;
za.prototype.has = BA;
za.prototype.set = NA;
function QA() {
  ((this.__data__ = new za()), (this.size = 0));
}
function UA(r) {
  var n = this.__data__,
    u = n.delete(r);
  return ((this.size = n.size), u);
}
function LA(r) {
  return this.__data__.get(r);
}
function GA(r) {
  return this.__data__.has(r);
}
var a8 = typeof global == "object" && global && global.Object === Object && global,
  kA = typeof self == "object" && self && self.Object === Object && self,
  ua = a8 || kA || Function("return this")(),
  rn = ua.Symbol,
  n8 = Object.prototype,
  VA = n8.hasOwnProperty,
  YA = n8.toString,
  ni = rn ? rn.toStringTag : void 0;
function XA(r) {
  var n = VA.call(r, ni),
    u = r[ni];
  try {
    r[ni] = void 0;
    var i = !0;
  } catch {}
  var c = YA.call(r);
  return (i && (n ? (r[ni] = u) : delete r[ni]), c);
}
var ZA = Object.prototype,
  KA = ZA.toString;
function PA(r) {
  return KA.call(r);
}
var FA = "[object Null]",
  $A = "[object Undefined]",
  Cv = rn ? rn.toStringTag : void 0;
function qn(r) {
  return r == null ? (r === void 0 ? $A : FA) : Cv && Cv in Object(r) ? XA(r) : PA(r);
}
function ea(r) {
  var n = typeof r;
  return r != null && (n == "object" || n == "function");
}
var JA = "[object AsyncFunction]",
  IA = "[object Function]",
  WA = "[object GeneratorFunction]",
  ex = "[object Proxy]";
function T2(r) {
  if (!ea(r)) return !1;
  var n = qn(r);
  return n == IA || n == WA || n == JA || n == ex;
}
var Lf = ua["__core-js_shared__"],
  wv = (function () {
    var r = /[^.]+$/.exec((Lf && Lf.keys && Lf.keys.IE_PROTO) || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
function tx(r) {
  return !!wv && wv in r;
}
var ax = Function.prototype,
  nx = ax.toString;
function Dn(r) {
  if (r != null) {
    try {
      return nx.call(r);
    } catch {}
    try {
      return r + "";
    } catch {}
  }
  return "";
}
var rx = /[\\^$.*+?()[\]{}|]/g,
  lx = /^\[object .+?Constructor\]$/,
  ix = Function.prototype,
  ux = Object.prototype,
  cx = ix.toString,
  ox = ux.hasOwnProperty,
  sx = RegExp(
    "^" +
      cx
        .call(ox)
        .replace(rx, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$",
  );
function fx(r) {
  if (!ea(r) || tx(r)) return !1;
  var n = T2(r) ? sx : lx;
  return n.test(Dn(r));
}
function hx(r, n) {
  return r?.[n];
}
function Hn(r, n) {
  var u = hx(r, n);
  return fx(u) ? u : void 0;
}
var hi = Hn(ua, "Map"),
  di = Hn(Object, "create");
function dx() {
  ((this.__data__ = di ? di(null) : {}), (this.size = 0));
}
function px(r) {
  var n = this.has(r) && delete this.__data__[r];
  return ((this.size -= n ? 1 : 0), n);
}
var vx = "__lodash_hash_undefined__",
  gx = Object.prototype,
  bx = gx.hasOwnProperty;
function yx(r) {
  var n = this.__data__;
  if (di) {
    var u = n[r];
    return u === vx ? void 0 : u;
  }
  return bx.call(n, r) ? n[r] : void 0;
}
var mx = Object.prototype,
  Ax = mx.hasOwnProperty;
function xx(r) {
  var n = this.__data__;
  return di ? n[r] !== void 0 : Ax.call(n, r);
}
var _x = "__lodash_hash_undefined__";
function Sx(r, n) {
  var u = this.__data__;
  return ((this.size += this.has(r) ? 0 : 1), (u[r] = di && n === void 0 ? _x : n), this);
}
function Mn(r) {
  var n = -1,
    u = r == null ? 0 : r.length;
  for (this.clear(); ++n < u; ) {
    var i = r[n];
    this.set(i[0], i[1]);
  }
}
Mn.prototype.clear = dx;
Mn.prototype.delete = px;
Mn.prototype.get = yx;
Mn.prototype.has = xx;
Mn.prototype.set = Sx;
function Ex() {
  ((this.size = 0), (this.__data__ = { hash: new Mn(), map: new (hi || za)(), string: new Mn() }));
}
function Cx(r) {
  var n = typeof r;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null;
}
function fc(r, n) {
  var u = r.__data__;
  return Cx(n) ? u[typeof n == "string" ? "string" : "hash"] : u.map;
}
function wx(r) {
  var n = fc(this, r).delete(r);
  return ((this.size -= n ? 1 : 0), n);
}
function Tx(r) {
  return fc(this, r).get(r);
}
function Ox(r) {
  return fc(this, r).has(r);
}
function Mx(r, n) {
  var u = fc(this, r),
    i = u.size;
  return (u.set(r, n), (this.size += u.size == i ? 0 : 1), this);
}
function qa(r) {
  var n = -1,
    u = r == null ? 0 : r.length;
  for (this.clear(); ++n < u; ) {
    var i = r[n];
    this.set(i[0], i[1]);
  }
}
qa.prototype.clear = Ex;
qa.prototype.delete = wx;
qa.prototype.get = Tx;
qa.prototype.has = Ox;
qa.prototype.set = Mx;
var Rx = 200;
function zx(r, n) {
  var u = this.__data__;
  if (u instanceof za) {
    var i = u.__data__;
    if (!hi || i.length < Rx - 1) return (i.push([r, n]), (this.size = ++u.size), this);
    u = this.__data__ = new qa(i);
  }
  return (u.set(r, n), (this.size = u.size), this);
}
function da(r) {
  var n = (this.__data__ = new za(r));
  this.size = n.size;
}
da.prototype.clear = QA;
da.prototype.delete = UA;
da.prototype.get = LA;
da.prototype.has = GA;
da.prototype.set = zx;
var Ku = (function () {
  try {
    var r = Hn(Object, "defineProperty");
    return (r({}, "", {}), r);
  } catch {}
})();
function O2(r, n, u) {
  n == "__proto__" && Ku ? Ku(r, n, { configurable: !0, enumerable: !0, value: u, writable: !0 }) : (r[n] = u);
}
function Jf(r, n, u) {
  ((u !== void 0 && !bi(r[n], u)) || (u === void 0 && !(n in r))) && O2(r, n, u);
}
function qx(r) {
  return function (n, u, i) {
    for (var c = -1, s = Object(n), f = i(n), d = f.length; d--; ) {
      var v = f[++c];
      if (u(s[v], v, s) === !1) break;
    }
    return n;
  };
}
var r8 = qx(),
  l8 = typeof exports == "object" && exports && !exports.nodeType && exports,
  Tv = l8 && typeof module == "object" && module && !module.nodeType && module,
  Dx = Tv && Tv.exports === l8,
  Ov = Dx ? ua.Buffer : void 0;
Ov && Ov.allocUnsafe;
function Hx(r, n) {
  return r.slice();
}
var Pu = ua.Uint8Array;
function jx(r) {
  var n = new r.constructor(r.byteLength);
  return (new Pu(n).set(new Pu(r)), n);
}
function Bx(r, n) {
  var u = jx(r.buffer);
  return new r.constructor(u, r.byteOffset, r.length);
}
function Nx(r, n) {
  var u = -1,
    i = r.length;
  for (n || (n = Array(i)); ++u < i; ) n[u] = r[u];
  return n;
}
var Mv = Object.create,
  Qx = (function () {
    function r() {}
    return function (n) {
      if (!ea(n)) return {};
      if (Mv) return Mv(n);
      r.prototype = n;
      var u = new r();
      return ((r.prototype = void 0), u);
    };
  })();
function i8(r, n) {
  return function (u) {
    return r(n(u));
  };
}
var u8 = i8(Object.getPrototypeOf, Object),
  Ux = Object.prototype;
function M2(r) {
  var n = r && r.constructor,
    u = (typeof n == "function" && n.prototype) || Ux;
  return r === u;
}
function Lx(r) {
  return typeof r.constructor == "function" && !M2(r) ? Qx(u8(r)) : {};
}
function ln(r) {
  return r != null && typeof r == "object";
}
var Gx = "[object Arguments]";
function Rv(r) {
  return ln(r) && qn(r) == Gx;
}
var c8 = Object.prototype,
  kx = c8.hasOwnProperty,
  Vx = c8.propertyIsEnumerable,
  Fu = Rv(
    (function () {
      return arguments;
    })(),
  )
    ? Rv
    : function (r) {
        return ln(r) && kx.call(r, "callee") && !Vx.call(r, "callee");
      },
  Lt = Array.isArray,
  Yx = 9007199254740991;
function R2(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Yx;
}
function Wr(r) {
  return r != null && R2(r.length) && !T2(r);
}
function Xx(r) {
  return ln(r) && Wr(r);
}
function Zx() {
  return !1;
}
var o8 = typeof exports == "object" && exports && !exports.nodeType && exports,
  zv = o8 && typeof module == "object" && module && !module.nodeType && module,
  Kx = zv && zv.exports === o8,
  qv = Kx ? ua.Buffer : void 0,
  Px = qv ? qv.isBuffer : void 0,
  $u = Px || Zx,
  Fx = "[object Object]",
  $x = Function.prototype,
  Jx = Object.prototype,
  s8 = $x.toString,
  Ix = Jx.hasOwnProperty,
  Wx = s8.call(Object);
function e_(r) {
  if (!ln(r) || qn(r) != Fx) return !1;
  var n = u8(r);
  if (n === null) return !0;
  var u = Ix.call(n, "constructor") && n.constructor;
  return typeof u == "function" && u instanceof u && s8.call(u) == Wx;
}
var t_ = "[object Arguments]",
  a_ = "[object Array]",
  n_ = "[object Boolean]",
  r_ = "[object Date]",
  l_ = "[object Error]",
  i_ = "[object Function]",
  u_ = "[object Map]",
  c_ = "[object Number]",
  o_ = "[object Object]",
  s_ = "[object RegExp]",
  f_ = "[object Set]",
  h_ = "[object String]",
  d_ = "[object WeakMap]",
  p_ = "[object ArrayBuffer]",
  v_ = "[object DataView]",
  g_ = "[object Float32Array]",
  b_ = "[object Float64Array]",
  y_ = "[object Int8Array]",
  m_ = "[object Int16Array]",
  A_ = "[object Int32Array]",
  x_ = "[object Uint8Array]",
  __ = "[object Uint8ClampedArray]",
  S_ = "[object Uint16Array]",
  E_ = "[object Uint32Array]",
  Ze = {};
Ze[g_] = Ze[b_] = Ze[y_] = Ze[m_] = Ze[A_] = Ze[x_] = Ze[__] = Ze[S_] = Ze[E_] = !0;
Ze[t_] = Ze[a_] = Ze[p_] = Ze[n_] = Ze[v_] = Ze[r_] = Ze[l_] = Ze[i_] = Ze[u_] = Ze[c_] = Ze[o_] = Ze[s_] = Ze[f_] = Ze[h_] = Ze[d_] = !1;
function C_(r) {
  return ln(r) && R2(r.length) && !!Ze[qn(r)];
}
function w_(r) {
  return function (n) {
    return r(n);
  };
}
var f8 = typeof exports == "object" && exports && !exports.nodeType && exports,
  fi = f8 && typeof module == "object" && module && !module.nodeType && module,
  T_ = fi && fi.exports === f8,
  Gf = T_ && a8.process,
  Dv = (function () {
    try {
      var r = fi && fi.require && fi.require("util").types;
      return r || (Gf && Gf.binding && Gf.binding("util"));
    } catch {}
  })(),
  Hv = Dv && Dv.isTypedArray,
  z2 = Hv ? w_(Hv) : C_;
function If(r, n) {
  if (!(n === "constructor" && typeof r[n] == "function") && n != "__proto__") return r[n];
}
var O_ = Object.prototype,
  M_ = O_.hasOwnProperty;
function R_(r, n, u) {
  var i = r[n];
  (!(M_.call(r, n) && bi(i, u)) || (u === void 0 && !(n in r))) && O2(r, n, u);
}
function z_(r, n, u, i) {
  var c = !u;
  u || (u = {});
  for (var s = -1, f = n.length; ++s < f; ) {
    var d = n[s],
      v = void 0;
    (v === void 0 && (v = r[d]), c ? O2(u, d, v) : R_(u, d, v));
  }
  return u;
}
function q_(r, n) {
  for (var u = -1, i = Array(r); ++u < r; ) i[u] = n(u);
  return i;
}
var D_ = 9007199254740991,
  H_ = /^(?:0|[1-9]\d*)$/;
function q2(r, n) {
  var u = typeof r;
  return ((n = n ?? D_), !!n && (u == "number" || (u != "symbol" && H_.test(r))) && r > -1 && r % 1 == 0 && r < n);
}
var j_ = Object.prototype,
  B_ = j_.hasOwnProperty;
function h8(r, n) {
  var u = Lt(r),
    i = !u && Fu(r),
    c = !u && !i && $u(r),
    s = !u && !i && !c && z2(r),
    f = u || i || c || s,
    d = f ? q_(r.length, String) : [],
    v = d.length;
  for (var p in r)
    (n || B_.call(r, p)) &&
      !(
        f &&
        (p == "length" ||
          (c && (p == "offset" || p == "parent")) ||
          (s && (p == "buffer" || p == "byteLength" || p == "byteOffset")) ||
          q2(p, v))
      ) &&
      d.push(p);
  return d;
}
function N_(r) {
  var n = [];
  if (r != null) for (var u in Object(r)) n.push(u);
  return n;
}
var Q_ = Object.prototype,
  U_ = Q_.hasOwnProperty;
function L_(r) {
  if (!ea(r)) return N_(r);
  var n = M2(r),
    u = [];
  for (var i in r) (i == "constructor" && (n || !U_.call(r, i))) || u.push(i);
  return u;
}
function d8(r) {
  return Wr(r) ? h8(r, !0) : L_(r);
}
function G_(r) {
  return z_(r, d8(r));
}
function k_(r, n, u, i, c, s, f) {
  var d = If(r, u),
    v = If(n, u),
    p = f.get(v);
  if (p) {
    Jf(r, u, p);
    return;
  }
  var g = s ? s(d, v, u + "", r, n, f) : void 0,
    A = g === void 0;
  if (A) {
    var m = Lt(v),
      x = !m && $u(v),
      w = !m && !x && z2(v);
    ((g = v),
      m || x || w
        ? Lt(d)
          ? (g = d)
          : Xx(d)
            ? (g = Nx(d))
            : x
              ? ((A = !1), (g = Hx(v)))
              : w
                ? ((A = !1), (g = Bx(v)))
                : (g = [])
        : e_(v) || Fu(v)
          ? ((g = d), Fu(d) ? (g = G_(d)) : (!ea(d) || T2(d)) && (g = Lx(v)))
          : (A = !1));
  }
  (A && (f.set(v, g), c(g, v, i, s, f), f.delete(v)), Jf(r, u, g));
}
function p8(r, n, u, i, c) {
  r !== n &&
    r8(
      n,
      function (s, f) {
        if ((c || (c = new da()), ea(s))) k_(r, n, f, u, p8, i, c);
        else {
          var d = i ? i(If(r, f), s, f + "", r, n, c) : void 0;
          (d === void 0 && (d = s), Jf(r, f, d));
        }
      },
      d8,
    );
}
function hc(r) {
  return r;
}
function V_(r, n, u) {
  switch (u.length) {
    case 0:
      return r.call(n);
    case 1:
      return r.call(n, u[0]);
    case 2:
      return r.call(n, u[0], u[1]);
    case 3:
      return r.call(n, u[0], u[1], u[2]);
  }
  return r.apply(n, u);
}
var jv = Math.max;
function Y_(r, n, u) {
  return (
    (n = jv(n === void 0 ? r.length - 1 : n, 0)),
    function () {
      for (var i = arguments, c = -1, s = jv(i.length - n, 0), f = Array(s); ++c < s; ) f[c] = i[n + c];
      c = -1;
      for (var d = Array(n + 1); ++c < n; ) d[c] = i[c];
      return ((d[n] = u(f)), V_(r, this, d));
    }
  );
}
function X_(r) {
  return function () {
    return r;
  };
}
var Z_ = Ku
    ? function (r, n) {
        return Ku(r, "toString", { configurable: !0, enumerable: !1, value: X_(n), writable: !0 });
      }
    : hc,
  K_ = 800,
  P_ = 16,
  F_ = Date.now;
function $_(r) {
  var n = 0,
    u = 0;
  return function () {
    var i = F_(),
      c = P_ - (i - u);
    if (((u = i), c > 0)) {
      if (++n >= K_) return arguments[0];
    } else n = 0;
    return r.apply(void 0, arguments);
  };
}
var J_ = $_(Z_);
function I_(r, n) {
  return J_(Y_(r, n, hc), r + "");
}
function W_(r, n, u) {
  if (!ea(u)) return !1;
  var i = typeof n;
  return (i == "number" ? Wr(u) && q2(n, u.length) : i == "string" && n in u) ? bi(u[n], r) : !1;
}
function eS(r) {
  return I_(function (n, u) {
    var i = -1,
      c = u.length,
      s = c > 1 ? u[c - 1] : void 0,
      f = c > 2 ? u[2] : void 0;
    for (
      s = r.length > 3 && typeof s == "function" ? (c--, s) : void 0,
        f && W_(u[0], u[1], f) && ((s = c < 3 ? void 0 : s), (c = 1)),
        n = Object(n);
      ++i < c;
    ) {
      var d = u[i];
      d && r(n, d, i, s);
    }
    return n;
  });
}
var Mt = eS(function (r, n, u) {
    p8(r, n, u);
  }),
  yi = function (n) {
    var u = n.zDepth,
      i = n.radius,
      c = n.background,
      s = n.children,
      f = n.styles,
      d = f === void 0 ? {} : f,
      v = xe(
        Mt(
          {
            default: {
              wrap: { position: "relative", display: "inline-block" },
              content: { position: "relative" },
              bg: {
                absolute: "0px 0px 0px 0px",
                boxShadow: "0 " + u + "px " + u * 4 + "px rgba(0,0,0,.24)",
                borderRadius: i,
                background: c,
              },
            },
            "zDepth-0": { bg: { boxShadow: "none" } },
            "zDepth-1": { bg: { boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)" } },
            "zDepth-2": { bg: { boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)" } },
            "zDepth-3": { bg: { boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)" } },
            "zDepth-4": { bg: { boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)" } },
            "zDepth-5": { bg: { boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)" } },
            square: { bg: { borderRadius: "0" } },
            circle: { bg: { borderRadius: "50%" } },
          },
          d,
        ),
        { "zDepth-1": u === 1 },
      );
    return S.createElement(
      "div",
      { style: v.wrap },
      S.createElement("div", { style: v.bg }),
      S.createElement("div", { style: v.content }, s),
    );
  };
yi.propTypes = { background: ee.string, zDepth: ee.oneOf([0, 1, 2, 3, 4, 5]), radius: ee.number, styles: ee.object };
yi.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} };
var kf = function () {
    return ua.Date.now();
  },
  tS = /\s/;
function aS(r) {
  for (var n = r.length; n-- && tS.test(r.charAt(n)); );
  return n;
}
var nS = /^\s+/;
function rS(r) {
  return r && r.slice(0, aS(r) + 1).replace(nS, "");
}
var lS = "[object Symbol]";
function dc(r) {
  return typeof r == "symbol" || (ln(r) && qn(r) == lS);
}
var Bv = NaN,
  iS = /^[-+]0x[0-9a-f]+$/i,
  uS = /^0b[01]+$/i,
  cS = /^0o[0-7]+$/i,
  oS = parseInt;
function Nv(r) {
  if (typeof r == "number") return r;
  if (dc(r)) return Bv;
  if (ea(r)) {
    var n = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = ea(n) ? n + "" : n;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = rS(r);
  var u = uS.test(r);
  return u || cS.test(r) ? oS(r.slice(2), u ? 2 : 8) : iS.test(r) ? Bv : +r;
}
var sS = "Expected a function",
  fS = Math.max,
  hS = Math.min;
function v8(r, n, u) {
  var i,
    c,
    s,
    f,
    d,
    v,
    p = 0,
    g = !1,
    A = !1,
    m = !0;
  if (typeof r != "function") throw new TypeError(sS);
  ((n = Nv(n) || 0),
    ea(u) && ((g = !!u.leading), (A = "maxWait" in u), (s = A ? fS(Nv(u.maxWait) || 0, n) : s), (m = "trailing" in u ? !!u.trailing : m)));
  function x(Y) {
    var J = i,
      ue = c;
    return ((i = c = void 0), (p = Y), (f = r.apply(ue, J)), f);
  }
  function w(Y) {
    return ((p = Y), (d = setTimeout(H, n)), g ? x(Y) : f);
  }
  function O(Y) {
    var J = Y - v,
      ue = Y - p,
      fe = n - J;
    return A ? hS(fe, s - ue) : fe;
  }
  function R(Y) {
    var J = Y - v,
      ue = Y - p;
    return v === void 0 || J >= n || J < 0 || (A && ue >= s);
  }
  function H() {
    var Y = kf();
    if (R(Y)) return D(Y);
    d = setTimeout(H, O(Y));
  }
  function D(Y) {
    return ((d = void 0), m && i ? x(Y) : ((i = c = void 0), f));
  }
  function L() {
    (d !== void 0 && clearTimeout(d), (p = 0), (i = v = c = d = void 0));
  }
  function k() {
    return d === void 0 ? f : D(kf());
  }
  function G() {
    var Y = kf(),
      J = R(Y);
    if (((i = arguments), (c = this), (v = Y), J)) {
      if (d === void 0) return w(v);
      if (A) return (clearTimeout(d), (d = setTimeout(H, n)), x(v));
    }
    return (d === void 0 && (d = setTimeout(H, n)), f);
  }
  return ((G.cancel = L), (G.flush = k), G);
}
var dS = "Expected a function";
function pS(r, n, u) {
  var i = !0,
    c = !0;
  if (typeof r != "function") throw new TypeError(dS);
  return (
    ea(u) && ((i = "leading" in u ? !!u.leading : i), (c = "trailing" in u ? !!u.trailing : c)),
    v8(r, n, { leading: i, maxWait: n, trailing: c })
  );
}
var vS = function (n, u, i) {
    var c = i.getBoundingClientRect(),
      s = c.width,
      f = c.height,
      d = typeof n.pageX == "number" ? n.pageX : n.touches[0].pageX,
      v = typeof n.pageY == "number" ? n.pageY : n.touches[0].pageY,
      p = d - (i.getBoundingClientRect().left + window.pageXOffset),
      g = v - (i.getBoundingClientRect().top + window.pageYOffset);
    (p < 0 ? (p = 0) : p > s && (p = s), g < 0 ? (g = 0) : g > f && (g = f));
    var A = p / s,
      m = 1 - g / f;
    return { h: u.h, s: A, v: m, a: u.a, source: "hsv" };
  },
  gS = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function bS(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function yS(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function mS(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var pc = (function (r) {
  mS(n, r);
  function n(u) {
    bS(this, n);
    var i = yS(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
    return (
      (i.handleChange = function (c) {
        typeof i.props.onChange == "function" && i.throttle(i.props.onChange, vS(c, i.props.hsl, i.container), c);
      }),
      (i.handleMouseDown = function (c) {
        i.handleChange(c);
        var s = i.getContainerRenderWindow();
        (s.addEventListener("mousemove", i.handleChange), s.addEventListener("mouseup", i.handleMouseUp));
      }),
      (i.handleMouseUp = function () {
        i.unbindEventListeners();
      }),
      (i.throttle = pS(function (c, s, f) {
        c(s, f);
      }, 50)),
      i
    );
  }
  return (
    gS(n, [
      {
        key: "componentWillUnmount",
        value: function () {
          (this.throttle.cancel(), this.unbindEventListeners());
        },
      },
      {
        key: "getContainerRenderWindow",
        value: function () {
          for (var i = this.container, c = window; !c.document.contains(i) && c.parent !== c; ) c = c.parent;
          return c;
        },
      },
      {
        key: "unbindEventListeners",
        value: function () {
          var i = this.getContainerRenderWindow();
          (i.removeEventListener("mousemove", this.handleChange), i.removeEventListener("mouseup", this.handleMouseUp));
        },
      },
      {
        key: "render",
        value: function () {
          var i = this,
            c = this.props.style || {},
            s = c.color,
            f = c.white,
            d = c.black,
            v = c.pointer,
            p = c.circle,
            g = xe(
              {
                default: {
                  color: {
                    absolute: "0px 0px 0px 0px",
                    background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                    borderRadius: this.props.radius,
                  },
                  white: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                  black: { absolute: "0px 0px 0px 0px", boxShadow: this.props.shadow, borderRadius: this.props.radius },
                  pointer: {
                    position: "absolute",
                    top: -(this.props.hsv.v * 100) + 100 + "%",
                    left: this.props.hsv.s * 100 + "%",
                    cursor: "default",
                  },
                  circle: {
                    width: "4px",
                    height: "4px",
                    boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
                    borderRadius: "50%",
                    cursor: "hand",
                    transform: "translate(-2px, -2px)",
                  },
                },
                custom: { color: s, white: f, black: d, pointer: v, circle: p },
              },
              { custom: !!this.props.style },
            );
          return S.createElement(
            "div",
            {
              style: g.color,
              ref: function (m) {
                return (i.container = m);
              },
              onMouseDown: this.handleMouseDown,
              onTouchMove: this.handleChange,
              onTouchStart: this.handleChange,
            },
            S.createElement(
              "style",
              null,
              `
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `,
            ),
            S.createElement(
              "div",
              { style: g.white, className: "saturation-white" },
              S.createElement("div", { style: g.black, className: "saturation-black" }),
              S.createElement(
                "div",
                { style: g.pointer },
                this.props.pointer ? S.createElement(this.props.pointer, this.props) : S.createElement("div", { style: g.circle }),
              ),
            ),
          );
        },
      },
    ]),
    n
  );
})(Ee.PureComponent || Ee.Component);
function AS(r, n) {
  for (var u = -1, i = r == null ? 0 : r.length; ++u < i && n(r[u], u, r) !== !1; );
  return r;
}
var xS = i8(Object.keys, Object),
  _S = Object.prototype,
  SS = _S.hasOwnProperty;
function ES(r) {
  if (!M2(r)) return xS(r);
  var n = [];
  for (var u in Object(r)) SS.call(r, u) && u != "constructor" && n.push(u);
  return n;
}
function D2(r) {
  return Wr(r) ? h8(r) : ES(r);
}
function CS(r, n) {
  return r && r8(r, n, D2);
}
function wS(r, n) {
  return function (u, i) {
    if (u == null) return u;
    if (!Wr(u)) return r(u, i);
    for (var c = u.length, s = -1, f = Object(u); ++s < c && i(f[s], s, f) !== !1; );
    return u;
  };
}
var g8 = wS(CS);
function TS(r) {
  return typeof r == "function" ? r : hc;
}
function OS(r, n) {
  var u = Lt(r) ? AS : g8;
  return u(r, TS(n));
}
var Vf = { exports: {} },
  Qv;
function MS() {
  return (
    Qv ||
      ((Qv = 1),
      (function (r) {
        (function (n) {
          var u = /^\s+/,
            i = /\s+$/,
            c = 0,
            s = n.round,
            f = n.min,
            d = n.max,
            v = n.random;
          function p(E, z) {
            if (((E = E || ""), (z = z || {}), E instanceof p)) return E;
            if (!(this instanceof p)) return new p(E, z);
            var _ = g(E);
            ((this._originalInput = E),
              (this._r = _.r),
              (this._g = _.g),
              (this._b = _.b),
              (this._a = _.a),
              (this._roundA = s(100 * this._a) / 100),
              (this._format = z.format || _.format),
              (this._gradientType = z.gradientType),
              this._r < 1 && (this._r = s(this._r)),
              this._g < 1 && (this._g = s(this._g)),
              this._b < 1 && (this._b = s(this._b)),
              (this._ok = _.ok),
              (this._tc_id = c++));
          }
          ((p.prototype = {
            isDark: function () {
              return this.getBrightness() < 128;
            },
            isLight: function () {
              return !this.isDark();
            },
            isValid: function () {
              return this._ok;
            },
            getOriginalInput: function () {
              return this._originalInput;
            },
            getFormat: function () {
              return this._format;
            },
            getAlpha: function () {
              return this._a;
            },
            getBrightness: function () {
              var E = this.toRgb();
              return (E.r * 299 + E.g * 587 + E.b * 114) / 1e3;
            },
            getLuminance: function () {
              var E = this.toRgb(),
                z,
                _,
                I,
                $,
                ae,
                Ce;
              return (
                (z = E.r / 255),
                (_ = E.g / 255),
                (I = E.b / 255),
                z <= 0.03928 ? ($ = z / 12.92) : ($ = n.pow((z + 0.055) / 1.055, 2.4)),
                _ <= 0.03928 ? (ae = _ / 12.92) : (ae = n.pow((_ + 0.055) / 1.055, 2.4)),
                I <= 0.03928 ? (Ce = I / 12.92) : (Ce = n.pow((I + 0.055) / 1.055, 2.4)),
                0.2126 * $ + 0.7152 * ae + 0.0722 * Ce
              );
            },
            setAlpha: function (E) {
              return ((this._a = ce(E)), (this._roundA = s(100 * this._a) / 100), this);
            },
            toHsv: function () {
              var E = w(this._r, this._g, this._b);
              return { h: E.h * 360, s: E.s, v: E.v, a: this._a };
            },
            toHsvString: function () {
              var E = w(this._r, this._g, this._b),
                z = s(E.h * 360),
                _ = s(E.s * 100),
                I = s(E.v * 100);
              return this._a == 1
                ? "hsv(" + z + ", " + _ + "%, " + I + "%)"
                : "hsva(" + z + ", " + _ + "%, " + I + "%, " + this._roundA + ")";
            },
            toHsl: function () {
              var E = m(this._r, this._g, this._b);
              return { h: E.h * 360, s: E.s, l: E.l, a: this._a };
            },
            toHslString: function () {
              var E = m(this._r, this._g, this._b),
                z = s(E.h * 360),
                _ = s(E.s * 100),
                I = s(E.l * 100);
              return this._a == 1
                ? "hsl(" + z + ", " + _ + "%, " + I + "%)"
                : "hsla(" + z + ", " + _ + "%, " + I + "%, " + this._roundA + ")";
            },
            toHex: function (E) {
              return R(this._r, this._g, this._b, E);
            },
            toHexString: function (E) {
              return "#" + this.toHex(E);
            },
            toHex8: function (E) {
              return H(this._r, this._g, this._b, this._a, E);
            },
            toHex8String: function (E) {
              return "#" + this.toHex8(E);
            },
            toRgb: function () {
              return { r: s(this._r), g: s(this._g), b: s(this._b), a: this._a };
            },
            toRgbString: function () {
              return this._a == 1
                ? "rgb(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ")"
                : "rgba(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ", " + this._roundA + ")";
            },
            toPercentageRgb: function () {
              return {
                r: s(C(this._r, 255) * 100) + "%",
                g: s(C(this._g, 255) * 100) + "%",
                b: s(C(this._b, 255) * 100) + "%",
                a: this._a,
              };
            },
            toPercentageRgbString: function () {
              return this._a == 1
                ? "rgb(" + s(C(this._r, 255) * 100) + "%, " + s(C(this._g, 255) * 100) + "%, " + s(C(this._b, 255) * 100) + "%)"
                : "rgba(" +
                    s(C(this._r, 255) * 100) +
                    "%, " +
                    s(C(this._g, 255) * 100) +
                    "%, " +
                    s(C(this._b, 255) * 100) +
                    "%, " +
                    this._roundA +
                    ")";
            },
            toName: function () {
              return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Z[R(this._r, this._g, this._b, !0)] || !1;
            },
            toFilter: function (E) {
              var z = "#" + D(this._r, this._g, this._b, this._a),
                _ = z,
                I = this._gradientType ? "GradientType = 1, " : "";
              if (E) {
                var $ = p(E);
                _ = "#" + D($._r, $._g, $._b, $._a);
              }
              return "progid:DXImageTransform.Microsoft.gradient(" + I + "startColorstr=" + z + ",endColorstr=" + _ + ")";
            },
            toString: function (E) {
              var z = !!E;
              E = E || this._format;
              var _ = !1,
                I = this._a < 1 && this._a >= 0,
                $ = !z && I && (E === "hex" || E === "hex6" || E === "hex3" || E === "hex4" || E === "hex8" || E === "name");
              return $
                ? E === "name" && this._a === 0
                  ? this.toName()
                  : this.toRgbString()
                : (E === "rgb" && (_ = this.toRgbString()),
                  E === "prgb" && (_ = this.toPercentageRgbString()),
                  (E === "hex" || E === "hex6") && (_ = this.toHexString()),
                  E === "hex3" && (_ = this.toHexString(!0)),
                  E === "hex4" && (_ = this.toHex8String(!0)),
                  E === "hex8" && (_ = this.toHex8String()),
                  E === "name" && (_ = this.toName()),
                  E === "hsl" && (_ = this.toHslString()),
                  E === "hsv" && (_ = this.toHsvString()),
                  _ || this.toHexString());
            },
            clone: function () {
              return p(this.toString());
            },
            _applyModification: function (E, z) {
              var _ = E.apply(null, [this].concat([].slice.call(z)));
              return ((this._r = _._r), (this._g = _._g), (this._b = _._b), this.setAlpha(_._a), this);
            },
            lighten: function () {
              return this._applyModification(Y, arguments);
            },
            brighten: function () {
              return this._applyModification(J, arguments);
            },
            darken: function () {
              return this._applyModification(ue, arguments);
            },
            desaturate: function () {
              return this._applyModification(L, arguments);
            },
            saturate: function () {
              return this._applyModification(k, arguments);
            },
            greyscale: function () {
              return this._applyModification(G, arguments);
            },
            spin: function () {
              return this._applyModification(fe, arguments);
            },
            _applyCombination: function (E, z) {
              return E.apply(null, [this].concat([].slice.call(z)));
            },
            analogous: function () {
              return this._applyCombination(Ae, arguments);
            },
            complement: function () {
              return this._applyCombination(ye, arguments);
            },
            monochromatic: function () {
              return this._applyCombination(Se, arguments);
            },
            splitcomplement: function () {
              return this._applyCombination(me, arguments);
            },
            triad: function () {
              return this._applyCombination(le, arguments);
            },
            tetrad: function () {
              return this._applyCombination(_e, arguments);
            },
          }),
            (p.fromRatio = function (E, z) {
              if (typeof E == "object") {
                var _ = {};
                for (var I in E) E.hasOwnProperty(I) && (I === "a" ? (_[I] = E[I]) : (_[I] = he(E[I])));
                E = _;
              }
              return p(E, z);
            }));
          function g(E) {
            var z = { r: 0, g: 0, b: 0 },
              _ = 1,
              I = null,
              $ = null,
              ae = null,
              Ce = !1,
              Ue = !1;
            return (
              typeof E == "string" && (E = Gt(E)),
              typeof E == "object" &&
                (Ke(E.r) && Ke(E.g) && Ke(E.b)
                  ? ((z = A(E.r, E.g, E.b)), (Ce = !0), (Ue = String(E.r).substr(-1) === "%" ? "prgb" : "rgb"))
                  : Ke(E.h) && Ke(E.s) && Ke(E.v)
                    ? ((I = he(E.s)), ($ = he(E.v)), (z = O(E.h, I, $)), (Ce = !0), (Ue = "hsv"))
                    : Ke(E.h) && Ke(E.s) && Ke(E.l) && ((I = he(E.s)), (ae = he(E.l)), (z = x(E.h, I, ae)), (Ce = !0), (Ue = "hsl")),
                E.hasOwnProperty("a") && (_ = E.a)),
              (_ = ce(_)),
              { ok: Ce, format: E.format || Ue, r: f(255, d(z.r, 0)), g: f(255, d(z.g, 0)), b: f(255, d(z.b, 0)), a: _ }
            );
          }
          function A(E, z, _) {
            return { r: C(E, 255) * 255, g: C(z, 255) * 255, b: C(_, 255) * 255 };
          }
          function m(E, z, _) {
            ((E = C(E, 255)), (z = C(z, 255)), (_ = C(_, 255)));
            var I = d(E, z, _),
              $ = f(E, z, _),
              ae,
              Ce,
              Ue = (I + $) / 2;
            if (I == $) ae = Ce = 0;
            else {
              var je = I - $;
              switch (((Ce = Ue > 0.5 ? je / (2 - I - $) : je / (I + $)), I)) {
                case E:
                  ae = (z - _) / je + (z < _ ? 6 : 0);
                  break;
                case z:
                  ae = (_ - E) / je + 2;
                  break;
                case _:
                  ae = (E - z) / je + 4;
                  break;
              }
              ae /= 6;
            }
            return { h: ae, s: Ce, l: Ue };
          }
          function x(E, z, _) {
            var I, $, ae;
            ((E = C(E, 360)), (z = C(z, 100)), (_ = C(_, 100)));
            function Ce(Fe, $e, ut) {
              return (
                ut < 0 && (ut += 1),
                ut > 1 && (ut -= 1),
                ut < 1 / 6 ? Fe + ($e - Fe) * 6 * ut : ut < 1 / 2 ? $e : ut < 2 / 3 ? Fe + ($e - Fe) * (2 / 3 - ut) * 6 : Fe
              );
            }
            if (z === 0) I = $ = ae = _;
            else {
              var Ue = _ < 0.5 ? _ * (1 + z) : _ + z - _ * z,
                je = 2 * _ - Ue;
              ((I = Ce(je, Ue, E + 1 / 3)), ($ = Ce(je, Ue, E)), (ae = Ce(je, Ue, E - 1 / 3)));
            }
            return { r: I * 255, g: $ * 255, b: ae * 255 };
          }
          function w(E, z, _) {
            ((E = C(E, 255)), (z = C(z, 255)), (_ = C(_, 255)));
            var I = d(E, z, _),
              $ = f(E, z, _),
              ae,
              Ce,
              Ue = I,
              je = I - $;
            if (((Ce = I === 0 ? 0 : je / I), I == $)) ae = 0;
            else {
              switch (I) {
                case E:
                  ae = (z - _) / je + (z < _ ? 6 : 0);
                  break;
                case z:
                  ae = (_ - E) / je + 2;
                  break;
                case _:
                  ae = (E - z) / je + 4;
                  break;
              }
              ae /= 6;
            }
            return { h: ae, s: Ce, v: Ue };
          }
          function O(E, z, _) {
            ((E = C(E, 360) * 6), (z = C(z, 100)), (_ = C(_, 100)));
            var I = n.floor(E),
              $ = E - I,
              ae = _ * (1 - z),
              Ce = _ * (1 - $ * z),
              Ue = _ * (1 - (1 - $) * z),
              je = I % 6,
              Fe = [_, Ce, ae, ae, Ue, _][je],
              $e = [Ue, _, _, Ce, ae, ae][je],
              ut = [ae, ae, Ue, _, _, Ce][je];
            return { r: Fe * 255, g: $e * 255, b: ut * 255 };
          }
          function R(E, z, _, I) {
            var $ = [ve(s(E).toString(16)), ve(s(z).toString(16)), ve(s(_).toString(16))];
            return I && $[0].charAt(0) == $[0].charAt(1) && $[1].charAt(0) == $[1].charAt(1) && $[2].charAt(0) == $[2].charAt(1)
              ? $[0].charAt(0) + $[1].charAt(0) + $[2].charAt(0)
              : $.join("");
          }
          function H(E, z, _, I, $) {
            var ae = [ve(s(E).toString(16)), ve(s(z).toString(16)), ve(s(_).toString(16)), ve(at(I))];
            return $ &&
              ae[0].charAt(0) == ae[0].charAt(1) &&
              ae[1].charAt(0) == ae[1].charAt(1) &&
              ae[2].charAt(0) == ae[2].charAt(1) &&
              ae[3].charAt(0) == ae[3].charAt(1)
              ? ae[0].charAt(0) + ae[1].charAt(0) + ae[2].charAt(0) + ae[3].charAt(0)
              : ae.join("");
          }
          function D(E, z, _, I) {
            var $ = [ve(at(I)), ve(s(E).toString(16)), ve(s(z).toString(16)), ve(s(_).toString(16))];
            return $.join("");
          }
          ((p.equals = function (E, z) {
            return !E || !z ? !1 : p(E).toRgbString() == p(z).toRgbString();
          }),
            (p.random = function () {
              return p.fromRatio({ r: v(), g: v(), b: v() });
            }));
          function L(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return ((_.s -= z / 100), (_.s = P(_.s)), p(_));
          }
          function k(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return ((_.s += z / 100), (_.s = P(_.s)), p(_));
          }
          function G(E) {
            return p(E).desaturate(100);
          }
          function Y(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return ((_.l += z / 100), (_.l = P(_.l)), p(_));
          }
          function J(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toRgb();
            return (
              (_.r = d(0, f(255, _.r - s(255 * -(z / 100))))),
              (_.g = d(0, f(255, _.g - s(255 * -(z / 100))))),
              (_.b = d(0, f(255, _.b - s(255 * -(z / 100))))),
              p(_)
            );
          }
          function ue(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return ((_.l -= z / 100), (_.l = P(_.l)), p(_));
          }
          function fe(E, z) {
            var _ = p(E).toHsl(),
              I = (_.h + z) % 360;
            return ((_.h = I < 0 ? 360 + I : I), p(_));
          }
          function ye(E) {
            var z = p(E).toHsl();
            return ((z.h = (z.h + 180) % 360), p(z));
          }
          function le(E) {
            var z = p(E).toHsl(),
              _ = z.h;
            return [p(E), p({ h: (_ + 120) % 360, s: z.s, l: z.l }), p({ h: (_ + 240) % 360, s: z.s, l: z.l })];
          }
          function _e(E) {
            var z = p(E).toHsl(),
              _ = z.h;
            return [
              p(E),
              p({ h: (_ + 90) % 360, s: z.s, l: z.l }),
              p({ h: (_ + 180) % 360, s: z.s, l: z.l }),
              p({ h: (_ + 270) % 360, s: z.s, l: z.l }),
            ];
          }
          function me(E) {
            var z = p(E).toHsl(),
              _ = z.h;
            return [p(E), p({ h: (_ + 72) % 360, s: z.s, l: z.l }), p({ h: (_ + 216) % 360, s: z.s, l: z.l })];
          }
          function Ae(E, z, _) {
            ((z = z || 6), (_ = _ || 30));
            var I = p(E).toHsl(),
              $ = 360 / _,
              ae = [p(E)];
            for (I.h = (I.h - (($ * z) >> 1) + 720) % 360; --z; ) ((I.h = (I.h + $) % 360), ae.push(p(I)));
            return ae;
          }
          function Se(E, z) {
            z = z || 6;
            for (var _ = p(E).toHsv(), I = _.h, $ = _.s, ae = _.v, Ce = [], Ue = 1 / z; z--; )
              (Ce.push(p({ h: I, s: $, v: ae })), (ae = (ae + Ue) % 1));
            return Ce;
          }
          ((p.mix = function (E, z, _) {
            _ = _ === 0 ? 0 : _ || 50;
            var I = p(E).toRgb(),
              $ = p(z).toRgb(),
              ae = _ / 100,
              Ce = { r: ($.r - I.r) * ae + I.r, g: ($.g - I.g) * ae + I.g, b: ($.b - I.b) * ae + I.b, a: ($.a - I.a) * ae + I.a };
            return p(Ce);
          }),
            (p.readability = function (E, z) {
              var _ = p(E),
                I = p(z);
              return (n.max(_.getLuminance(), I.getLuminance()) + 0.05) / (n.min(_.getLuminance(), I.getLuminance()) + 0.05);
            }),
            (p.isReadable = function (E, z, _) {
              var I = p.readability(E, z),
                $,
                ae;
              switch (((ae = !1), ($ = kt(_)), $.level + $.size)) {
                case "AAsmall":
                case "AAAlarge":
                  ae = I >= 4.5;
                  break;
                case "AAlarge":
                  ae = I >= 3;
                  break;
                case "AAAsmall":
                  ae = I >= 7;
                  break;
              }
              return ae;
            }),
            (p.mostReadable = function (E, z, _) {
              var I = null,
                $ = 0,
                ae,
                Ce,
                Ue,
                je;
              ((_ = _ || {}), (Ce = _.includeFallbackColors), (Ue = _.level), (je = _.size));
              for (var Fe = 0; Fe < z.length; Fe++) ((ae = p.readability(E, z[Fe])), ae > $ && (($ = ae), (I = p(z[Fe]))));
              return p.isReadable(E, I, { level: Ue, size: je }) || !Ce
                ? I
                : ((_.includeFallbackColors = !1), p.mostReadable(E, ["#fff", "#000"], _));
            }));
          var U = (p.names = {
              aliceblue: "f0f8ff",
              antiquewhite: "faebd7",
              aqua: "0ff",
              aquamarine: "7fffd4",
              azure: "f0ffff",
              beige: "f5f5dc",
              bisque: "ffe4c4",
              black: "000",
              blanchedalmond: "ffebcd",
              blue: "00f",
              blueviolet: "8a2be2",
              brown: "a52a2a",
              burlywood: "deb887",
              burntsienna: "ea7e5d",
              cadetblue: "5f9ea0",
              chartreuse: "7fff00",
              chocolate: "d2691e",
              coral: "ff7f50",
              cornflowerblue: "6495ed",
              cornsilk: "fff8dc",
              crimson: "dc143c",
              cyan: "0ff",
              darkblue: "00008b",
              darkcyan: "008b8b",
              darkgoldenrod: "b8860b",
              darkgray: "a9a9a9",
              darkgreen: "006400",
              darkgrey: "a9a9a9",
              darkkhaki: "bdb76b",
              darkmagenta: "8b008b",
              darkolivegreen: "556b2f",
              darkorange: "ff8c00",
              darkorchid: "9932cc",
              darkred: "8b0000",
              darksalmon: "e9967a",
              darkseagreen: "8fbc8f",
              darkslateblue: "483d8b",
              darkslategray: "2f4f4f",
              darkslategrey: "2f4f4f",
              darkturquoise: "00ced1",
              darkviolet: "9400d3",
              deeppink: "ff1493",
              deepskyblue: "00bfff",
              dimgray: "696969",
              dimgrey: "696969",
              dodgerblue: "1e90ff",
              firebrick: "b22222",
              floralwhite: "fffaf0",
              forestgreen: "228b22",
              fuchsia: "f0f",
              gainsboro: "dcdcdc",
              ghostwhite: "f8f8ff",
              gold: "ffd700",
              goldenrod: "daa520",
              gray: "808080",
              green: "008000",
              greenyellow: "adff2f",
              grey: "808080",
              honeydew: "f0fff0",
              hotpink: "ff69b4",
              indianred: "cd5c5c",
              indigo: "4b0082",
              ivory: "fffff0",
              khaki: "f0e68c",
              lavender: "e6e6fa",
              lavenderblush: "fff0f5",
              lawngreen: "7cfc00",
              lemonchiffon: "fffacd",
              lightblue: "add8e6",
              lightcoral: "f08080",
              lightcyan: "e0ffff",
              lightgoldenrodyellow: "fafad2",
              lightgray: "d3d3d3",
              lightgreen: "90ee90",
              lightgrey: "d3d3d3",
              lightpink: "ffb6c1",
              lightsalmon: "ffa07a",
              lightseagreen: "20b2aa",
              lightskyblue: "87cefa",
              lightslategray: "789",
              lightslategrey: "789",
              lightsteelblue: "b0c4de",
              lightyellow: "ffffe0",
              lime: "0f0",
              limegreen: "32cd32",
              linen: "faf0e6",
              magenta: "f0f",
              maroon: "800000",
              mediumaquamarine: "66cdaa",
              mediumblue: "0000cd",
              mediumorchid: "ba55d3",
              mediumpurple: "9370db",
              mediumseagreen: "3cb371",
              mediumslateblue: "7b68ee",
              mediumspringgreen: "00fa9a",
              mediumturquoise: "48d1cc",
              mediumvioletred: "c71585",
              midnightblue: "191970",
              mintcream: "f5fffa",
              mistyrose: "ffe4e1",
              moccasin: "ffe4b5",
              navajowhite: "ffdead",
              navy: "000080",
              oldlace: "fdf5e6",
              olive: "808000",
              olivedrab: "6b8e23",
              orange: "ffa500",
              orangered: "ff4500",
              orchid: "da70d6",
              palegoldenrod: "eee8aa",
              palegreen: "98fb98",
              paleturquoise: "afeeee",
              palevioletred: "db7093",
              papayawhip: "ffefd5",
              peachpuff: "ffdab9",
              peru: "cd853f",
              pink: "ffc0cb",
              plum: "dda0dd",
              powderblue: "b0e0e6",
              purple: "800080",
              rebeccapurple: "663399",
              red: "f00",
              rosybrown: "bc8f8f",
              royalblue: "4169e1",
              saddlebrown: "8b4513",
              salmon: "fa8072",
              sandybrown: "f4a460",
              seagreen: "2e8b57",
              seashell: "fff5ee",
              sienna: "a0522d",
              silver: "c0c0c0",
              skyblue: "87ceeb",
              slateblue: "6a5acd",
              slategray: "708090",
              slategrey: "708090",
              snow: "fffafa",
              springgreen: "00ff7f",
              steelblue: "4682b4",
              tan: "d2b48c",
              teal: "008080",
              thistle: "d8bfd8",
              tomato: "ff6347",
              turquoise: "40e0d0",
              violet: "ee82ee",
              wheat: "f5deb3",
              white: "fff",
              whitesmoke: "f5f5f5",
              yellow: "ff0",
              yellowgreen: "9acd32",
            }),
            Z = (p.hexNames = re(U));
          function re(E) {
            var z = {};
            for (var _ in E) E.hasOwnProperty(_) && (z[E[_]] = _);
            return z;
          }
          function ce(E) {
            return ((E = parseFloat(E)), (isNaN(E) || E < 0 || E > 1) && (E = 1), E);
          }
          function C(E, z) {
            te(E) && (E = "100%");
            var _ = oe(E);
            return (
              (E = f(z, d(0, parseFloat(E)))),
              _ && (E = parseInt(E * z, 10) / 100),
              n.abs(E - z) < 1e-6 ? 1 : (E % z) / parseFloat(z)
            );
          }
          function P(E) {
            return f(1, d(0, E));
          }
          function W(E) {
            return parseInt(E, 16);
          }
          function te(E) {
            return typeof E == "string" && E.indexOf(".") != -1 && parseFloat(E) === 1;
          }
          function oe(E) {
            return typeof E == "string" && E.indexOf("%") != -1;
          }
          function ve(E) {
            return E.length == 1 ? "0" + E : "" + E;
          }
          function he(E) {
            return (E <= 1 && (E = E * 100 + "%"), E);
          }
          function at(E) {
            return n.round(parseFloat(E) * 255).toString(16);
          }
          function De(E) {
            return W(E) / 255;
          }
          var Xe = (function () {
            var E = "[-\\+]?\\d+%?",
              z = "[-\\+]?\\d*\\.\\d+%?",
              _ = "(?:" + z + ")|(?:" + E + ")",
              I = "[\\s|\\(]+(" + _ + ")[,|\\s]+(" + _ + ")[,|\\s]+(" + _ + ")\\s*\\)?",
              $ = "[\\s|\\(]+(" + _ + ")[,|\\s]+(" + _ + ")[,|\\s]+(" + _ + ")[,|\\s]+(" + _ + ")\\s*\\)?";
            return {
              CSS_UNIT: new RegExp(_),
              rgb: new RegExp("rgb" + I),
              rgba: new RegExp("rgba" + $),
              hsl: new RegExp("hsl" + I),
              hsla: new RegExp("hsla" + $),
              hsv: new RegExp("hsv" + I),
              hsva: new RegExp("hsva" + $),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            };
          })();
          function Ke(E) {
            return !!Xe.CSS_UNIT.exec(E);
          }
          function Gt(E) {
            E = E.replace(u, "").replace(i, "").toLowerCase();
            var z = !1;
            if (U[E]) ((E = U[E]), (z = !0));
            else if (E == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
            var _;
            return (_ = Xe.rgb.exec(E))
              ? { r: _[1], g: _[2], b: _[3] }
              : (_ = Xe.rgba.exec(E))
                ? { r: _[1], g: _[2], b: _[3], a: _[4] }
                : (_ = Xe.hsl.exec(E))
                  ? { h: _[1], s: _[2], l: _[3] }
                  : (_ = Xe.hsla.exec(E))
                    ? { h: _[1], s: _[2], l: _[3], a: _[4] }
                    : (_ = Xe.hsv.exec(E))
                      ? { h: _[1], s: _[2], v: _[3] }
                      : (_ = Xe.hsva.exec(E))
                        ? { h: _[1], s: _[2], v: _[3], a: _[4] }
                        : (_ = Xe.hex8.exec(E))
                          ? { r: W(_[1]), g: W(_[2]), b: W(_[3]), a: De(_[4]), format: z ? "name" : "hex8" }
                          : (_ = Xe.hex6.exec(E))
                            ? { r: W(_[1]), g: W(_[2]), b: W(_[3]), format: z ? "name" : "hex" }
                            : (_ = Xe.hex4.exec(E))
                              ? {
                                  r: W(_[1] + "" + _[1]),
                                  g: W(_[2] + "" + _[2]),
                                  b: W(_[3] + "" + _[3]),
                                  a: De(_[4] + "" + _[4]),
                                  format: z ? "name" : "hex8",
                                }
                              : (_ = Xe.hex3.exec(E))
                                ? { r: W(_[1] + "" + _[1]), g: W(_[2] + "" + _[2]), b: W(_[3] + "" + _[3]), format: z ? "name" : "hex" }
                                : !1;
          }
          function kt(E) {
            var z, _;
            return (
              (E = E || { level: "AA", size: "small" }),
              (z = (E.level || "AA").toUpperCase()),
              (_ = (E.size || "small").toLowerCase()),
              z !== "AA" && z !== "AAA" && (z = "AA"),
              _ !== "small" && _ !== "large" && (_ = "small"),
              { level: z, size: _ }
            );
          }
          r.exports ? (r.exports = p) : (window.tinycolor = p);
        })(Math);
      })(Vf)),
    Vf.exports
  );
}
var RS = MS();
const Ju = Fr(RS);
var Uv = function (n) {
    var u = ["r", "g", "b", "a", "h", "s", "l", "v"],
      i = 0,
      c = 0;
    return (
      OS(u, function (s) {
        if (n[s] && ((i += 1), isNaN(n[s]) || (c += 1), s === "s" || s === "l")) {
          var f = /^\d+%$/;
          f.test(n[s]) && (c += 1);
        }
      }),
      i === c ? n : !1
    );
  },
  oi = function (n, u) {
    var i = n.hex ? Ju(n.hex) : Ju(n),
      c = i.toHsl(),
      s = i.toHsv(),
      f = i.toRgb(),
      d = i.toHex();
    c.s === 0 && ((c.h = u || 0), (s.h = u || 0));
    var v = d === "000000" && f.a === 0;
    return { hsl: c, hex: v ? "transparent" : "#" + d, rgb: f, hsv: s, oldHue: n.h || u || c.h, source: n.source };
  },
  cn = function (n) {
    if (n === "transparent") return !0;
    var u = String(n).charAt(0) === "#" ? 1 : 0;
    return n.length !== 4 + u && n.length < 7 + u && Ju(n).isValid();
  },
  H2 = function (n) {
    if (!n) return "#fff";
    var u = oi(n);
    if (u.hex === "transparent") return "rgba(0,0,0,0.4)";
    var i = (u.rgb.r * 299 + u.rgb.g * 587 + u.rgb.b * 114) / 1e3;
    return i >= 128 ? "#000" : "#fff";
  },
  Yf = function (n, u) {
    var i = n.replace("°", "");
    return Ju(u + " (" + i + ")")._ok;
  },
  ri =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  zS = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function qS(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function DS(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function HS(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var Rt = function (n) {
    var u = (function (i) {
      HS(c, i);
      function c(s) {
        qS(this, c);
        var f = DS(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
        return (
          (f.handleChange = function (d, v) {
            var p = Uv(d);
            if (p) {
              var g = oi(d, d.h || f.state.oldHue);
              (f.setState(g),
                f.props.onChangeComplete && f.debounce(f.props.onChangeComplete, g, v),
                f.props.onChange && f.props.onChange(g, v));
            }
          }),
          (f.handleSwatchHover = function (d, v) {
            var p = Uv(d);
            if (p) {
              var g = oi(d, d.h || f.state.oldHue);
              f.props.onSwatchHover && f.props.onSwatchHover(g, v);
            }
          }),
          (f.state = ri({}, oi(s.color, 0))),
          (f.debounce = v8(function (d, v, p) {
            d(v, p);
          }, 100)),
          f
        );
      }
      return (
        zS(
          c,
          [
            {
              key: "render",
              value: function () {
                var f = {};
                return (
                  this.props.onSwatchHover && (f.onSwatchHover = this.handleSwatchHover),
                  S.createElement(n, ri({}, this.props, this.state, { onChange: this.handleChange }, f))
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (f, d) {
                return ri({}, oi(f.color, d.oldHue));
              },
            },
          ],
        ),
        c
      );
    })(Ee.PureComponent || Ee.Component);
    return ((u.propTypes = ri({}, n.propTypes)), (u.defaultProps = ri({}, n.defaultProps, { color: { h: 250, s: 0.5, l: 0.2, a: 1 } })), u);
  },
  jS =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  BS = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function NS(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Lv(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function QS(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var US = function (n) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (i) {
      QS(c, i);
      function c() {
        var s, f, d, v;
        NS(this, c);
        for (var p = arguments.length, g = Array(p), A = 0; A < p; A++) g[A] = arguments[A];
        return (
          (v =
            ((f = ((d = Lv(this, (s = c.__proto__ || Object.getPrototypeOf(c)).call.apply(s, [this].concat(g)))), d)),
            (d.state = { focus: !1 }),
            (d.handleFocus = function () {
              return d.setState({ focus: !0 });
            }),
            (d.handleBlur = function () {
              return d.setState({ focus: !1 });
            }),
            f)),
          Lv(d, v)
        );
      }
      return (
        BS(c, [
          {
            key: "render",
            value: function () {
              return S.createElement(
                u,
                { onFocus: this.handleFocus, onBlur: this.handleBlur },
                S.createElement(n, jS({}, this.props, this.state)),
              );
            },
          },
        ]),
        c
      );
    })(S.Component);
  },
  Gv =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  LS = 13,
  GS = function (n) {
    var u = n.color,
      i = n.style,
      c = n.onClick,
      s = c === void 0 ? function () {} : c,
      f = n.onHover,
      d = n.title,
      v = d === void 0 ? u : d,
      p = n.children,
      g = n.focus,
      A = n.focusStyle,
      m = A === void 0 ? {} : A,
      x = u === "transparent",
      w = xe({
        default: {
          swatch: Gv(
            { background: u, height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none" },
            i,
            g ? m : {},
          ),
        },
      }),
      O = function (k) {
        return s(u, k);
      },
      R = function (k) {
        return k.keyCode === LS && s(u, k);
      },
      H = function (k) {
        return f(u, k);
      },
      D = {};
    return (
      f && (D.onMouseOver = H),
      S.createElement(
        "div",
        Gv({ style: w.swatch, onClick: O, title: v, tabIndex: 0, onKeyDown: R }, D),
        p,
        x && S.createElement(Jr, { borderRadius: w.swatch.borderRadius, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" }),
      )
    );
  };
const jn = US(GS);
var kS = function (n) {
    var u = n.direction,
      i = xe(
        {
          default: {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: u === "vertical" },
      );
    return S.createElement("div", { style: i.picker });
  },
  VS =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  b8 = function (n) {
    var u = n.rgb,
      i = n.hsl,
      c = n.width,
      s = n.height,
      f = n.onChange,
      d = n.direction,
      v = n.style,
      p = n.renderers,
      g = n.pointer,
      A = n.className,
      m = A === void 0 ? "" : A,
      x = xe({ default: { picker: { position: "relative", width: c, height: s }, alpha: { radius: "2px", style: v } } });
    return S.createElement(
      "div",
      { style: x.picker, className: "alpha-picker " + m },
      S.createElement(w2, VS({}, x.alpha, { rgb: u, hsl: i, pointer: g, renderers: p, onChange: f, direction: d })),
    );
  };
b8.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: kS };
Rt(b8);
function y8(r, n) {
  for (var u = -1, i = r == null ? 0 : r.length, c = Array(i); ++u < i; ) c[u] = n(r[u], u, r);
  return c;
}
var YS = "__lodash_hash_undefined__";
function XS(r) {
  return (this.__data__.set(r, YS), this);
}
function ZS(r) {
  return this.__data__.has(r);
}
function Iu(r) {
  var n = -1,
    u = r == null ? 0 : r.length;
  for (this.__data__ = new qa(); ++n < u; ) this.add(r[n]);
}
Iu.prototype.add = Iu.prototype.push = XS;
Iu.prototype.has = ZS;
function KS(r, n) {
  for (var u = -1, i = r == null ? 0 : r.length; ++u < i; ) if (n(r[u], u, r)) return !0;
  return !1;
}
function PS(r, n) {
  return r.has(n);
}
var FS = 1,
  $S = 2;
function m8(r, n, u, i, c, s) {
  var f = u & FS,
    d = r.length,
    v = n.length;
  if (d != v && !(f && v > d)) return !1;
  var p = s.get(r),
    g = s.get(n);
  if (p && g) return p == n && g == r;
  var A = -1,
    m = !0,
    x = u & $S ? new Iu() : void 0;
  for (s.set(r, n), s.set(n, r); ++A < d; ) {
    var w = r[A],
      O = n[A];
    if (i) var R = f ? i(O, w, A, n, r, s) : i(w, O, A, r, n, s);
    if (R !== void 0) {
      if (R) continue;
      m = !1;
      break;
    }
    if (x) {
      if (
        !KS(n, function (H, D) {
          if (!PS(x, D) && (w === H || c(w, H, u, i, s))) return x.push(D);
        })
      ) {
        m = !1;
        break;
      }
    } else if (!(w === O || c(w, O, u, i, s))) {
      m = !1;
      break;
    }
  }
  return (s.delete(r), s.delete(n), m);
}
function JS(r) {
  var n = -1,
    u = Array(r.size);
  return (
    r.forEach(function (i, c) {
      u[++n] = [c, i];
    }),
    u
  );
}
function IS(r) {
  var n = -1,
    u = Array(r.size);
  return (
    r.forEach(function (i) {
      u[++n] = i;
    }),
    u
  );
}
var WS = 1,
  eE = 2,
  tE = "[object Boolean]",
  aE = "[object Date]",
  nE = "[object Error]",
  rE = "[object Map]",
  lE = "[object Number]",
  iE = "[object RegExp]",
  uE = "[object Set]",
  cE = "[object String]",
  oE = "[object Symbol]",
  sE = "[object ArrayBuffer]",
  fE = "[object DataView]",
  kv = rn ? rn.prototype : void 0,
  Xf = kv ? kv.valueOf : void 0;
function hE(r, n, u, i, c, s, f) {
  switch (u) {
    case fE:
      if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset) return !1;
      ((r = r.buffer), (n = n.buffer));
    case sE:
      return !(r.byteLength != n.byteLength || !s(new Pu(r), new Pu(n)));
    case tE:
    case aE:
    case lE:
      return bi(+r, +n);
    case nE:
      return r.name == n.name && r.message == n.message;
    case iE:
    case cE:
      return r == n + "";
    case rE:
      var d = JS;
    case uE:
      var v = i & WS;
      if ((d || (d = IS), r.size != n.size && !v)) return !1;
      var p = f.get(r);
      if (p) return p == n;
      ((i |= eE), f.set(r, n));
      var g = m8(d(r), d(n), i, c, s, f);
      return (f.delete(r), g);
    case oE:
      if (Xf) return Xf.call(r) == Xf.call(n);
  }
  return !1;
}
function dE(r, n) {
  for (var u = -1, i = n.length, c = r.length; ++u < i; ) r[c + u] = n[u];
  return r;
}
function pE(r, n, u) {
  var i = n(r);
  return Lt(r) ? i : dE(i, u(r));
}
function vE(r, n) {
  for (var u = -1, i = r == null ? 0 : r.length, c = 0, s = []; ++u < i; ) {
    var f = r[u];
    n(f, u, r) && (s[c++] = f);
  }
  return s;
}
function gE() {
  return [];
}
var bE = Object.prototype,
  yE = bE.propertyIsEnumerable,
  Vv = Object.getOwnPropertySymbols,
  mE = Vv
    ? function (r) {
        return r == null
          ? []
          : ((r = Object(r)),
            vE(Vv(r), function (n) {
              return yE.call(r, n);
            }));
      }
    : gE;
function Yv(r) {
  return pE(r, D2, mE);
}
var AE = 1,
  xE = Object.prototype,
  _E = xE.hasOwnProperty;
function SE(r, n, u, i, c, s) {
  var f = u & AE,
    d = Yv(r),
    v = d.length,
    p = Yv(n),
    g = p.length;
  if (v != g && !f) return !1;
  for (var A = v; A--; ) {
    var m = d[A];
    if (!(f ? m in n : _E.call(n, m))) return !1;
  }
  var x = s.get(r),
    w = s.get(n);
  if (x && w) return x == n && w == r;
  var O = !0;
  (s.set(r, n), s.set(n, r));
  for (var R = f; ++A < v; ) {
    m = d[A];
    var H = r[m],
      D = n[m];
    if (i) var L = f ? i(D, H, m, n, r, s) : i(H, D, m, r, n, s);
    if (!(L === void 0 ? H === D || c(H, D, u, i, s) : L)) {
      O = !1;
      break;
    }
    R || (R = m == "constructor");
  }
  if (O && !R) {
    var k = r.constructor,
      G = n.constructor;
    k != G &&
      "constructor" in r &&
      "constructor" in n &&
      !(typeof k == "function" && k instanceof k && typeof G == "function" && G instanceof G) &&
      (O = !1);
  }
  return (s.delete(r), s.delete(n), O);
}
var Wf = Hn(ua, "DataView"),
  e2 = Hn(ua, "Promise"),
  t2 = Hn(ua, "Set"),
  a2 = Hn(ua, "WeakMap"),
  Xv = "[object Map]",
  EE = "[object Object]",
  Zv = "[object Promise]",
  Kv = "[object Set]",
  Pv = "[object WeakMap]",
  Fv = "[object DataView]",
  CE = Dn(Wf),
  wE = Dn(hi),
  TE = Dn(e2),
  OE = Dn(t2),
  ME = Dn(a2),
  an = qn;
((Wf && an(new Wf(new ArrayBuffer(1))) != Fv) ||
  (hi && an(new hi()) != Xv) ||
  (e2 && an(e2.resolve()) != Zv) ||
  (t2 && an(new t2()) != Kv) ||
  (a2 && an(new a2()) != Pv)) &&
  (an = function (r) {
    var n = qn(r),
      u = n == EE ? r.constructor : void 0,
      i = u ? Dn(u) : "";
    if (i)
      switch (i) {
        case CE:
          return Fv;
        case wE:
          return Xv;
        case TE:
          return Zv;
        case OE:
          return Kv;
        case ME:
          return Pv;
      }
    return n;
  });
var RE = 1,
  $v = "[object Arguments]",
  Jv = "[object Array]",
  Nu = "[object Object]",
  zE = Object.prototype,
  Iv = zE.hasOwnProperty;
function qE(r, n, u, i, c, s) {
  var f = Lt(r),
    d = Lt(n),
    v = f ? Jv : an(r),
    p = d ? Jv : an(n);
  ((v = v == $v ? Nu : v), (p = p == $v ? Nu : p));
  var g = v == Nu,
    A = p == Nu,
    m = v == p;
  if (m && $u(r)) {
    if (!$u(n)) return !1;
    ((f = !0), (g = !1));
  }
  if (m && !g) return (s || (s = new da()), f || z2(r) ? m8(r, n, u, i, c, s) : hE(r, n, v, u, i, c, s));
  if (!(u & RE)) {
    var x = g && Iv.call(r, "__wrapped__"),
      w = A && Iv.call(n, "__wrapped__");
    if (x || w) {
      var O = x ? r.value() : r,
        R = w ? n.value() : n;
      return (s || (s = new da()), c(O, R, u, i, s));
    }
  }
  return m ? (s || (s = new da()), SE(r, n, u, i, c, s)) : !1;
}
function j2(r, n, u, i, c) {
  return r === n ? !0 : r == null || n == null || (!ln(r) && !ln(n)) ? r !== r && n !== n : qE(r, n, u, i, j2, c);
}
var DE = 1,
  HE = 2;
function jE(r, n, u, i) {
  var c = u.length,
    s = c;
  if (r == null) return !s;
  for (r = Object(r); c--; ) {
    var f = u[c];
    if (f[2] ? f[1] !== r[f[0]] : !(f[0] in r)) return !1;
  }
  for (; ++c < s; ) {
    f = u[c];
    var d = f[0],
      v = r[d],
      p = f[1];
    if (f[2]) {
      if (v === void 0 && !(d in r)) return !1;
    } else {
      var g = new da(),
        A;
      if (!(A === void 0 ? j2(p, v, DE | HE, i, g) : A)) return !1;
    }
  }
  return !0;
}
function A8(r) {
  return r === r && !ea(r);
}
function BE(r) {
  for (var n = D2(r), u = n.length; u--; ) {
    var i = n[u],
      c = r[i];
    n[u] = [i, c, A8(c)];
  }
  return n;
}
function x8(r, n) {
  return function (u) {
    return u == null ? !1 : u[r] === n && (n !== void 0 || r in Object(u));
  };
}
function NE(r) {
  var n = BE(r);
  return n.length == 1 && n[0][2]
    ? x8(n[0][0], n[0][1])
    : function (u) {
        return u === r || jE(u, r, n);
      };
}
var QE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  UE = /^\w*$/;
function B2(r, n) {
  if (Lt(r)) return !1;
  var u = typeof r;
  return u == "number" || u == "symbol" || u == "boolean" || r == null || dc(r)
    ? !0
    : UE.test(r) || !QE.test(r) || (n != null && r in Object(n));
}
var LE = "Expected a function";
function N2(r, n) {
  if (typeof r != "function" || (n != null && typeof n != "function")) throw new TypeError(LE);
  var u = function () {
    var i = arguments,
      c = n ? n.apply(this, i) : i[0],
      s = u.cache;
    if (s.has(c)) return s.get(c);
    var f = r.apply(this, i);
    return ((u.cache = s.set(c, f) || s), f);
  };
  return ((u.cache = new (N2.Cache || qa)()), u);
}
N2.Cache = qa;
var GE = 500;
function kE(r) {
  var n = N2(r, function (i) {
      return (u.size === GE && u.clear(), i);
    }),
    u = n.cache;
  return n;
}
var VE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  YE = /\\(\\)?/g,
  XE = kE(function (r) {
    var n = [];
    return (
      r.charCodeAt(0) === 46 && n.push(""),
      r.replace(VE, function (u, i, c, s) {
        n.push(c ? s.replace(YE, "$1") : i || u);
      }),
      n
    );
  }),
  Wv = rn ? rn.prototype : void 0,
  eg = Wv ? Wv.toString : void 0;
function _8(r) {
  if (typeof r == "string") return r;
  if (Lt(r)) return y8(r, _8) + "";
  if (dc(r)) return eg ? eg.call(r) : "";
  var n = r + "";
  return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
}
function ZE(r) {
  return r == null ? "" : _8(r);
}
function S8(r, n) {
  return Lt(r) ? r : B2(r, n) ? [r] : XE(ZE(r));
}
function vc(r) {
  if (typeof r == "string" || dc(r)) return r;
  var n = r + "";
  return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
}
function E8(r, n) {
  n = S8(n, r);
  for (var u = 0, i = n.length; r != null && u < i; ) r = r[vc(n[u++])];
  return u && u == i ? r : void 0;
}
function KE(r, n, u) {
  var i = r == null ? void 0 : E8(r, n);
  return i === void 0 ? u : i;
}
function PE(r, n) {
  return r != null && n in Object(r);
}
function FE(r, n, u) {
  n = S8(n, r);
  for (var i = -1, c = n.length, s = !1; ++i < c; ) {
    var f = vc(n[i]);
    if (!(s = r != null && u(r, f))) break;
    r = r[f];
  }
  return s || ++i != c ? s : ((c = r == null ? 0 : r.length), !!c && R2(c) && q2(f, c) && (Lt(r) || Fu(r)));
}
function $E(r, n) {
  return r != null && FE(r, n, PE);
}
var JE = 1,
  IE = 2;
function WE(r, n) {
  return B2(r) && A8(n)
    ? x8(vc(r), n)
    : function (u) {
        var i = KE(u, r);
        return i === void 0 && i === n ? $E(u, r) : j2(n, i, JE | IE);
      };
}
function eC(r) {
  return function (n) {
    return n?.[r];
  };
}
function tC(r) {
  return function (n) {
    return E8(n, r);
  };
}
function aC(r) {
  return B2(r) ? eC(vc(r)) : tC(r);
}
function nC(r) {
  return typeof r == "function" ? r : r == null ? hc : typeof r == "object" ? (Lt(r) ? WE(r[0], r[1]) : NE(r)) : aC(r);
}
function rC(r, n) {
  var u = -1,
    i = Wr(r) ? Array(r.length) : [];
  return (
    g8(r, function (c, s, f) {
      i[++u] = n(c, s, f);
    }),
    i
  );
}
function Bn(r, n) {
  var u = Lt(r) ? y8 : rC;
  return u(r, nC(n));
}
var lC = function (n) {
    var u = n.colors,
      i = n.onClick,
      c = n.onSwatchHover,
      s = xe({
        default: {
          swatches: { marginRight: "-10px" },
          swatch: { width: "22px", height: "22px", float: "left", marginRight: "10px", marginBottom: "10px", borderRadius: "4px" },
          clear: { clear: "both" },
        },
      });
    return S.createElement(
      "div",
      { style: s.swatches },
      Bn(u, function (f) {
        return S.createElement(jn, {
          key: f,
          color: f,
          style: s.swatch,
          onClick: i,
          onHover: c,
          focusStyle: { boxShadow: "0 0 4px " + f },
        });
      }),
      S.createElement("div", { style: s.clear }),
    );
  },
  Q2 = function (n) {
    var u = n.onChange,
      i = n.onSwatchHover,
      c = n.hex,
      s = n.colors,
      f = n.width,
      d = n.triangle,
      v = n.styles,
      p = v === void 0 ? {} : v,
      g = n.className,
      A = g === void 0 ? "" : g,
      m = c === "transparent",
      x = function (R, H) {
        cn(R) && u({ hex: R, source: "hex" }, H);
      },
      w = xe(
        Mt(
          {
            default: {
              card: { width: f, background: "#fff", boxShadow: "0 1px rgba(0,0,0,.1)", borderRadius: "6px", position: "relative" },
              head: {
                height: "110px",
                background: c,
                borderRadius: "6px 6px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              },
              body: { padding: "10px" },
              label: { fontSize: "18px", color: H2(c), position: "relative" },
              triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 10px 10px 10px",
                borderColor: "transparent transparent " + c + " transparent",
                position: "absolute",
                top: "-10px",
                left: "50%",
                marginLeft: "-10px",
              },
              input: {
                width: "100%",
                fontSize: "12px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "22px",
                boxShadow: "inset 0 0 0 1px #ddd",
                borderRadius: "4px",
                padding: "0 7px",
                boxSizing: "border-box",
              },
            },
            "hide-triangle": { triangle: { display: "none" } },
          },
          p,
        ),
        { "hide-triangle": d === "hide" },
      );
    return S.createElement(
      "div",
      { style: w.card, className: "block-picker " + A },
      S.createElement("div", { style: w.triangle }),
      S.createElement(
        "div",
        { style: w.head },
        m && S.createElement(Jr, { borderRadius: "6px 6px 0 0" }),
        S.createElement("div", { style: w.label }, c),
      ),
      S.createElement(
        "div",
        { style: w.body },
        S.createElement(lC, { colors: s, onClick: x, onSwatchHover: i }),
        S.createElement(ze, { style: { input: w.input }, value: c, onChange: x }),
      ),
    );
  };
Q2.propTypes = {
  width: ee.oneOfType([ee.string, ee.number]),
  colors: ee.arrayOf(ee.string),
  triangle: ee.oneOf(["top", "hide"]),
  styles: ee.object,
};
Q2.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {},
};
Rt(Q2);
var zr = { 100: "#ffcdd2", 300: "#e57373", 500: "#f44336", 700: "#d32f2f", 900: "#b71c1c" },
  qr = { 100: "#f8bbd0", 300: "#f06292", 500: "#e91e63", 700: "#c2185b", 900: "#880e4f" },
  Dr = { 100: "#e1bee7", 300: "#ba68c8", 500: "#9c27b0", 700: "#7b1fa2", 900: "#4a148c" },
  Hr = { 100: "#d1c4e9", 300: "#9575cd", 500: "#673ab7", 700: "#512da8", 900: "#311b92" },
  jr = { 100: "#c5cae9", 300: "#7986cb", 500: "#3f51b5", 700: "#303f9f", 900: "#1a237e" },
  Br = { 100: "#bbdefb", 300: "#64b5f6", 500: "#2196f3", 700: "#1976d2", 900: "#0d47a1" },
  Nr = { 100: "#b3e5fc", 300: "#4fc3f7", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" },
  Qr = { 100: "#b2ebf2", 300: "#4dd0e1", 500: "#00bcd4", 700: "#0097a7", 900: "#006064" },
  Ur = { 100: "#b2dfdb", 300: "#4db6ac", 500: "#009688", 700: "#00796b", 900: "#004d40" },
  si = { 100: "#c8e6c9", 300: "#81c784", 500: "#4caf50", 700: "#388e3c" },
  Lr = { 100: "#dcedc8", 300: "#aed581", 500: "#8bc34a", 700: "#689f38", 900: "#33691e" },
  Gr = { 100: "#f0f4c3", 300: "#dce775", 500: "#cddc39", 700: "#afb42b", 900: "#827717" },
  kr = { 100: "#fff9c4", 300: "#fff176", 500: "#ffeb3b", 700: "#fbc02d", 900: "#f57f17" },
  Vr = { 100: "#ffecb3", 300: "#ffd54f", 500: "#ffc107", 700: "#ffa000", 900: "#ff6f00" },
  Yr = { 100: "#ffe0b2", 300: "#ffb74d", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" },
  Xr = { 100: "#ffccbc", 300: "#ff8a65", 500: "#ff5722", 700: "#e64a19", 900: "#bf360c" },
  Zr = { 100: "#d7ccc8", 300: "#a1887f", 500: "#795548", 700: "#5d4037", 900: "#3e2723" },
  Kr = { 100: "#cfd8dc", 300: "#90a4ae", 500: "#607d8b", 700: "#455a64", 900: "#263238" },
  C8 = function (n) {
    var u = n.color,
      i = n.onClick,
      c = n.onSwatchHover,
      s = n.hover,
      f = n.active,
      d = n.circleSize,
      v = n.circleSpacing,
      p = xe(
        {
          default: {
            swatch: { width: d, height: d, marginRight: v, marginBottom: v, transform: "scale(1)", transition: "100ms transform ease" },
            Swatch: {
              borderRadius: "50%",
              background: "transparent",
              boxShadow: "inset 0 0 0 " + (d / 2 + 1) + "px " + u,
              transition: "100ms box-shadow ease",
            },
          },
          hover: { swatch: { transform: "scale(1.2)" } },
          active: { Swatch: { boxShadow: "inset 0 0 0 3px " + u } },
        },
        { hover: s, active: f },
      );
    return S.createElement(
      "div",
      { style: p.swatch },
      S.createElement(jn, {
        style: p.Swatch,
        color: u,
        onClick: i,
        onHover: c,
        focusStyle: { boxShadow: p.Swatch.boxShadow + ", 0 0 5px " + u },
      }),
    );
  };
C8.defaultProps = { circleSize: 28, circleSpacing: 14 };
const iC = C2.handleHover(C8);
var U2 = function (n) {
  var u = n.width,
    i = n.onChange,
    c = n.onSwatchHover,
    s = n.colors,
    f = n.hex,
    d = n.circleSize,
    v = n.styles,
    p = v === void 0 ? {} : v,
    g = n.circleSpacing,
    A = n.className,
    m = A === void 0 ? "" : A,
    x = xe(Mt({ default: { card: { width: u, display: "flex", flexWrap: "wrap", marginRight: -g, marginBottom: -g } } }, p)),
    w = function (R, H) {
      return i({ hex: R, source: "hex" }, H);
    };
  return S.createElement(
    "div",
    { style: x.card, className: "circle-picker " + m },
    Bn(s, function (O) {
      return S.createElement(iC, {
        key: O,
        color: O,
        onClick: w,
        onSwatchHover: c,
        active: f === O.toLowerCase(),
        circleSize: d,
        circleSpacing: g,
      });
    }),
  );
};
U2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), circleSize: ee.number, circleSpacing: ee.number, styles: ee.object };
U2.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [
    zr[500],
    qr[500],
    Dr[500],
    Hr[500],
    jr[500],
    Br[500],
    Nr[500],
    Qr[500],
    Ur[500],
    si[500],
    Lr[500],
    Gr[500],
    kr[500],
    Vr[500],
    Yr[500],
    Xr[500],
    Zr[500],
    Kr[500],
  ],
  styles: {},
};
const uC = Rt(U2);
function tg(r) {
  return r === void 0;
}
var Qu = {},
  ag;
function cC() {
  if (ag) return Qu;
  ((ag = 1), Object.defineProperty(Qu, "__esModule", { value: !0 }));
  var r =
      Object.assign ||
      function (f) {
        for (var d = 1; d < arguments.length; d++) {
          var v = arguments[d];
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (f[p] = v[p]);
        }
        return f;
      },
    n = un(),
    u = i(n);
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function c(f, d) {
    var v = {};
    for (var p in f) d.indexOf(p) >= 0 || (Object.prototype.hasOwnProperty.call(f, p) && (v[p] = f[p]));
    return v;
  }
  var s = 24;
  return (
    (Qu.default = function (f) {
      var d = f.fill,
        v = d === void 0 ? "currentColor" : d,
        p = f.width,
        g = p === void 0 ? s : p,
        A = f.height,
        m = A === void 0 ? s : A,
        x = f.style,
        w = x === void 0 ? {} : x,
        O = c(f, ["fill", "width", "height", "style"]);
      return u.default.createElement(
        "svg",
        r({ viewBox: "0 0 " + s + " " + s, style: r({ fill: v, width: g, height: m }, w) }, O),
        u.default.createElement("path", {
          d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
        }),
      );
    }),
    Qu
  );
}
var oC = cC();
const sC = Fr(oC);
var fC = (function () {
  function r(n, u) {
    for (var i = 0; i < u.length; i++) {
      var c = u[i];
      ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
    }
  }
  return function (n, u, i) {
    return (u && r(n.prototype, u), i && r(n, i), n);
  };
})();
function hC(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function dC(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function pC(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var w8 = (function (r) {
  pC(n, r);
  function n(u) {
    hC(this, n);
    var i = dC(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
    return (
      (i.toggleViews = function () {
        i.state.view === "hex"
          ? i.setState({ view: "rgb" })
          : i.state.view === "rgb"
            ? i.setState({ view: "hsl" })
            : i.state.view === "hsl" && (i.props.hsl.a === 1 ? i.setState({ view: "hex" }) : i.setState({ view: "rgb" }));
      }),
      (i.handleChange = function (c, s) {
        c.hex
          ? cn(c.hex) && i.props.onChange({ hex: c.hex, source: "hex" }, s)
          : c.r || c.g || c.b
            ? i.props.onChange({ r: c.r || i.props.rgb.r, g: c.g || i.props.rgb.g, b: c.b || i.props.rgb.b, source: "rgb" }, s)
            : c.a
              ? (c.a < 0 ? (c.a = 0) : c.a > 1 && (c.a = 1),
                i.props.onChange(
                  { h: i.props.hsl.h, s: i.props.hsl.s, l: i.props.hsl.l, a: Math.round(c.a * 100) / 100, source: "rgb" },
                  s,
                ))
              : (c.h || c.s || c.l) &&
                (typeof c.s == "string" && c.s.includes("%") && (c.s = c.s.replace("%", "")),
                typeof c.l == "string" && c.l.includes("%") && (c.l = c.l.replace("%", "")),
                c.s == 1 ? (c.s = 0.01) : c.l == 1 && (c.l = 0.01),
                i.props.onChange(
                  {
                    h: c.h || i.props.hsl.h,
                    s: Number(tg(c.s) ? i.props.hsl.s : c.s),
                    l: Number(tg(c.l) ? i.props.hsl.l : c.l),
                    source: "hsl",
                  },
                  s,
                ));
      }),
      (i.showHighlight = function (c) {
        c.currentTarget.style.background = "#eee";
      }),
      (i.hideHighlight = function (c) {
        c.currentTarget.style.background = "transparent";
      }),
      u.hsl.a !== 1 && u.view === "hex" ? (i.state = { view: "rgb" }) : (i.state = { view: u.view }),
      i
    );
  }
  return (
    fC(
      n,
      [
        {
          key: "render",
          value: function () {
            var i = this,
              c = xe(
                {
                  default: {
                    wrap: { paddingTop: "16px", display: "flex" },
                    fields: { flex: "1", display: "flex", marginLeft: "-6px" },
                    field: { paddingLeft: "6px", width: "100%" },
                    alpha: { paddingLeft: "6px", width: "100%" },
                    toggle: { width: "32px", textAlign: "right", position: "relative" },
                    icon: { marginRight: "-4px", marginTop: "12px", cursor: "pointer", position: "relative" },
                    iconHighlight: {
                      position: "absolute",
                      width: "24px",
                      height: "28px",
                      background: "#eee",
                      borderRadius: "4px",
                      top: "10px",
                      left: "12px",
                      display: "none",
                    },
                    input: {
                      fontSize: "11px",
                      color: "#333",
                      width: "100%",
                      borderRadius: "2px",
                      border: "none",
                      boxShadow: "inset 0 0 0 1px #dadada",
                      height: "21px",
                      textAlign: "center",
                    },
                    label: {
                      textTransform: "uppercase",
                      fontSize: "11px",
                      lineHeight: "11px",
                      color: "#969696",
                      textAlign: "center",
                      display: "block",
                      marginTop: "12px",
                    },
                    svg: { fill: "#333", width: "24px", height: "24px", border: "1px transparent solid", borderRadius: "5px" },
                  },
                  disableAlpha: { alpha: { display: "none" } },
                },
                this.props,
                this.state,
              ),
              s = void 0;
            return (
              this.state.view === "hex"
                ? (s = S.createElement(
                    "div",
                    { style: c.fields, className: "flexbox-fix" },
                    S.createElement(
                      "div",
                      { style: c.field },
                      S.createElement(ze, {
                        style: { input: c.input, label: c.label },
                        label: "hex",
                        value: this.props.hex,
                        onChange: this.handleChange,
                      }),
                    ),
                  ))
                : this.state.view === "rgb"
                  ? (s = S.createElement(
                      "div",
                      { style: c.fields, className: "flexbox-fix" },
                      S.createElement(
                        "div",
                        { style: c.field },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "r",
                          value: this.props.rgb.r,
                          onChange: this.handleChange,
                        }),
                      ),
                      S.createElement(
                        "div",
                        { style: c.field },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "g",
                          value: this.props.rgb.g,
                          onChange: this.handleChange,
                        }),
                      ),
                      S.createElement(
                        "div",
                        { style: c.field },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "b",
                          value: this.props.rgb.b,
                          onChange: this.handleChange,
                        }),
                      ),
                      S.createElement(
                        "div",
                        { style: c.alpha },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "a",
                          value: this.props.rgb.a,
                          arrowOffset: 0.01,
                          onChange: this.handleChange,
                        }),
                      ),
                    ))
                  : this.state.view === "hsl" &&
                    (s = S.createElement(
                      "div",
                      { style: c.fields, className: "flexbox-fix" },
                      S.createElement(
                        "div",
                        { style: c.field },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "h",
                          value: Math.round(this.props.hsl.h),
                          onChange: this.handleChange,
                        }),
                      ),
                      S.createElement(
                        "div",
                        { style: c.field },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "s",
                          value: Math.round(this.props.hsl.s * 100) + "%",
                          onChange: this.handleChange,
                        }),
                      ),
                      S.createElement(
                        "div",
                        { style: c.field },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "l",
                          value: Math.round(this.props.hsl.l * 100) + "%",
                          onChange: this.handleChange,
                        }),
                      ),
                      S.createElement(
                        "div",
                        { style: c.alpha },
                        S.createElement(ze, {
                          style: { input: c.input, label: c.label },
                          label: "a",
                          value: this.props.hsl.a,
                          arrowOffset: 0.01,
                          onChange: this.handleChange,
                        }),
                      ),
                    )),
              S.createElement(
                "div",
                { style: c.wrap, className: "flexbox-fix" },
                s,
                S.createElement(
                  "div",
                  { style: c.toggle },
                  S.createElement(
                    "div",
                    {
                      style: c.icon,
                      onClick: this.toggleViews,
                      ref: function (d) {
                        return (i.icon = d);
                      },
                    },
                    S.createElement(sC, {
                      style: c.svg,
                      onMouseOver: this.showHighlight,
                      onMouseEnter: this.showHighlight,
                      onMouseOut: this.hideHighlight,
                    }),
                  ),
                ),
              )
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (i, c) {
            return i.hsl.a !== 1 && c.view === "hex" ? { view: "rgb" } : null;
          },
        },
      ],
    ),
    n
  );
})(S.Component);
w8.defaultProps = { view: "hex" };
var ng = function () {
    var n = xe({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          transform: "translate(-6px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
        },
      },
    });
    return S.createElement("div", { style: n.picker });
  },
  vC = function () {
    var n = xe({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)",
        },
      },
    });
    return S.createElement("div", { style: n.picker });
  },
  L2 = function (n) {
    var u = n.width,
      i = n.onChange,
      c = n.disableAlpha,
      s = n.rgb,
      f = n.hsl,
      d = n.hsv,
      v = n.hex,
      p = n.renderers,
      g = n.styles,
      A = g === void 0 ? {} : g,
      m = n.className,
      x = m === void 0 ? "" : m,
      w = n.defaultView,
      O = xe(
        Mt(
          {
            default: {
              picker: {
                width: u,
                background: "#fff",
                borderRadius: "2px",
                boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                boxSizing: "initial",
                fontFamily: "Menlo",
              },
              saturation: { width: "100%", paddingBottom: "55%", position: "relative", borderRadius: "2px 2px 0 0", overflow: "hidden" },
              Saturation: { radius: "2px 2px 0 0" },
              body: { padding: "16px 16px 12px" },
              controls: { display: "flex" },
              color: { width: "32px" },
              swatch: { marginTop: "6px", width: "16px", height: "16px", borderRadius: "8px", position: "relative", overflow: "hidden" },
              active: {
                absolute: "0px 0px 0px 0px",
                borderRadius: "8px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                background: "rgba(" + s.r + ", " + s.g + ", " + s.b + ", " + s.a + ")",
                zIndex: "2",
              },
              toggles: { flex: "1" },
              hue: { height: "10px", position: "relative", marginBottom: "8px" },
              Hue: { radius: "2px" },
              alpha: { height: "10px", position: "relative" },
              Alpha: { radius: "2px" },
            },
            disableAlpha: {
              color: { width: "22px" },
              alpha: { display: "none" },
              hue: { marginBottom: "0px" },
              swatch: { width: "10px", height: "10px", marginTop: "0px" },
            },
          },
          A,
        ),
        { disableAlpha: c },
      );
    return S.createElement(
      "div",
      { style: O.picker, className: "chrome-picker " + x },
      S.createElement(
        "div",
        { style: O.saturation },
        S.createElement(pc, { style: O.Saturation, hsl: f, hsv: d, pointer: vC, onChange: i }),
      ),
      S.createElement(
        "div",
        { style: O.body },
        S.createElement(
          "div",
          { style: O.controls, className: "flexbox-fix" },
          S.createElement(
            "div",
            { style: O.color },
            S.createElement("div", { style: O.swatch }, S.createElement("div", { style: O.active }), S.createElement(Jr, { renderers: p })),
          ),
          S.createElement(
            "div",
            { style: O.toggles },
            S.createElement("div", { style: O.hue }, S.createElement(Ir, { style: O.Hue, hsl: f, pointer: ng, onChange: i })),
            S.createElement(
              "div",
              { style: O.alpha },
              S.createElement(w2, { style: O.Alpha, rgb: s, hsl: f, pointer: ng, renderers: p, onChange: i }),
            ),
          ),
        ),
        S.createElement(w8, { rgb: s, hsl: f, hex: v, view: w, onChange: i, disableAlpha: c }),
      ),
    );
  };
L2.propTypes = {
  width: ee.oneOfType([ee.string, ee.number]),
  disableAlpha: ee.bool,
  styles: ee.object,
  defaultView: ee.oneOf(["hex", "rgb", "hsl"]),
};
L2.defaultProps = { width: 225, disableAlpha: !1, styles: {} };
Rt(L2);
var gC = function (n) {
    var u = n.color,
      i = n.onClick,
      c = i === void 0 ? function () {} : i,
      s = n.onSwatchHover,
      f = n.active,
      d = xe(
        {
          default: {
            color: {
              background: u,
              width: "15px",
              height: "15px",
              float: "left",
              marginRight: "5px",
              marginBottom: "5px",
              position: "relative",
              cursor: "pointer",
            },
            dot: { absolute: "5px 5px 5px 5px", background: H2(u), borderRadius: "50%", opacity: "0" },
          },
          active: { dot: { opacity: "1" } },
          "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, dot: { background: "#000" } },
          transparent: { dot: { background: "#000" } },
        },
        { active: f, "color-#FFFFFF": u === "#FFFFFF", transparent: u === "transparent" },
      );
    return S.createElement(
      jn,
      { style: d.color, color: u, onClick: c, onHover: s, focusStyle: { boxShadow: "0 0 4px " + u } },
      S.createElement("div", { style: d.dot }),
    );
  },
  bC = function (n) {
    var u = n.hex,
      i = n.rgb,
      c = n.onChange,
      s = xe({
        default: {
          fields: { display: "flex", paddingBottom: "6px", paddingRight: "5px", position: "relative" },
          active: { position: "absolute", top: "6px", left: "5px", height: "9px", width: "9px", background: u },
          HEXwrap: { flex: "6", position: "relative" },
          HEXinput: {
            width: "80%",
            padding: "0px",
            paddingLeft: "20%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px",
          },
          HEXlabel: { display: "none" },
          RGBwrap: { flex: "3", position: "relative" },
          RGBinput: {
            width: "70%",
            padding: "0px",
            paddingLeft: "30%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px",
          },
          RGBlabel: {
            position: "absolute",
            top: "3px",
            left: "0px",
            lineHeight: "16px",
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#999",
          },
        },
      }),
      f = function (v, p) {
        v.r || v.g || v.b ? c({ r: v.r || i.r, g: v.g || i.g, b: v.b || i.b, source: "rgb" }, p) : c({ hex: v.hex, source: "hex" }, p);
      };
    return S.createElement(
      "div",
      { style: s.fields, className: "flexbox-fix" },
      S.createElement("div", { style: s.active }),
      S.createElement(ze, { style: { wrap: s.HEXwrap, input: s.HEXinput, label: s.HEXlabel }, label: "hex", value: u, onChange: f }),
      S.createElement(ze, { style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel }, label: "r", value: i.r, onChange: f }),
      S.createElement(ze, { style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel }, label: "g", value: i.g, onChange: f }),
      S.createElement(ze, { style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel }, label: "b", value: i.b, onChange: f }),
    );
  },
  G2 = function (n) {
    var u = n.onChange,
      i = n.onSwatchHover,
      c = n.colors,
      s = n.hex,
      f = n.rgb,
      d = n.styles,
      v = d === void 0 ? {} : d,
      p = n.className,
      g = p === void 0 ? "" : p,
      A = xe(
        Mt(
          {
            default: {
              Compact: { background: "#f6f6f6", radius: "4px" },
              compact: { paddingTop: "5px", paddingLeft: "5px", boxSizing: "initial", width: "240px" },
              clear: { clear: "both" },
            },
          },
          v,
        ),
      ),
      m = function (w, O) {
        w.hex ? cn(w.hex) && u({ hex: w.hex, source: "hex" }, O) : u(w, O);
      };
    return S.createElement(
      yi,
      { style: A.Compact, styles: v },
      S.createElement(
        "div",
        { style: A.compact, className: "compact-picker " + g },
        S.createElement(
          "div",
          null,
          Bn(c, function (x) {
            return S.createElement(gC, { key: x, color: x, active: x.toLowerCase() === s, onClick: m, onSwatchHover: i });
          }),
          S.createElement("div", { style: A.clear }),
        ),
        S.createElement(bC, { hex: s, rgb: f, onChange: m }),
      ),
    );
  };
G2.propTypes = { colors: ee.arrayOf(ee.string), styles: ee.object };
G2.defaultProps = {
  colors: [
    "#4D4D4D",
    "#999999",
    "#FFFFFF",
    "#F44E3B",
    "#FE9200",
    "#FCDC00",
    "#DBDF00",
    "#A4DD00",
    "#68CCCA",
    "#73D8FF",
    "#AEA1FF",
    "#FDA1FF",
    "#333333",
    "#808080",
    "#cccccc",
    "#D33115",
    "#E27300",
    "#FCC400",
    "#B0BC00",
    "#68BC00",
    "#16A5A5",
    "#009CE0",
    "#7B64FF",
    "#FA28FF",
    "#000000",
    "#666666",
    "#B3B3B3",
    "#9F0500",
    "#C45100",
    "#FB9E00",
    "#808900",
    "#194D33",
    "#0C797D",
    "#0062B1",
    "#653294",
    "#AB149E",
  ],
  styles: {},
};
Rt(G2);
var yC = function (n) {
  var u = n.hover,
    i = n.color,
    c = n.onClick,
    s = n.onSwatchHover,
    f = { position: "relative", zIndex: "2", outline: "2px solid #fff", boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)" },
    d = xe({ default: { swatch: { width: "25px", height: "25px", fontSize: "0" } }, hover: { swatch: f } }, { hover: u });
  return S.createElement("div", { style: d.swatch }, S.createElement(jn, { color: i, onClick: c, onHover: s, focusStyle: f }));
};
const mC = C2.handleHover(yC);
var k2 = function (n) {
  var u = n.width,
    i = n.colors,
    c = n.onChange,
    s = n.onSwatchHover,
    f = n.triangle,
    d = n.styles,
    v = d === void 0 ? {} : d,
    p = n.className,
    g = p === void 0 ? "" : p,
    A = xe(
      Mt(
        {
          default: {
            card: {
              width: u,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              position: "relative",
              padding: "5px",
              display: "flex",
              flexWrap: "wrap",
            },
            triangle: { position: "absolute", border: "7px solid transparent", borderBottomColor: "#fff" },
            triangleShadow: { position: "absolute", border: "8px solid transparent", borderBottomColor: "rgba(0,0,0,0.15)" },
          },
          "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
          "top-left-triangle": { triangle: { top: "-14px", left: "10px" }, triangleShadow: { top: "-16px", left: "9px" } },
          "top-right-triangle": { triangle: { top: "-14px", right: "10px" }, triangleShadow: { top: "-16px", right: "9px" } },
          "bottom-left-triangle": {
            triangle: { top: "35px", left: "10px", transform: "rotate(180deg)" },
            triangleShadow: { top: "37px", left: "9px", transform: "rotate(180deg)" },
          },
          "bottom-right-triangle": {
            triangle: { top: "35px", right: "10px", transform: "rotate(180deg)" },
            triangleShadow: { top: "37px", right: "9px", transform: "rotate(180deg)" },
          },
        },
        v,
      ),
      {
        "hide-triangle": f === "hide",
        "top-left-triangle": f === "top-left",
        "top-right-triangle": f === "top-right",
        "bottom-left-triangle": f === "bottom-left",
        "bottom-right-triangle": f === "bottom-right",
      },
    ),
    m = function (w, O) {
      return c({ hex: w, source: "hex" }, O);
    };
  return S.createElement(
    "div",
    { style: A.card, className: "github-picker " + g },
    S.createElement("div", { style: A.triangleShadow }),
    S.createElement("div", { style: A.triangle }),
    Bn(i, function (x) {
      return S.createElement(mC, { color: x, key: x, onClick: m, onSwatchHover: s });
    }),
  );
};
k2.propTypes = {
  width: ee.oneOfType([ee.string, ee.number]),
  colors: ee.arrayOf(ee.string),
  triangle: ee.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: ee.object,
};
k2.defaultProps = {
  width: 200,
  colors: [
    "#B80000",
    "#DB3E00",
    "#FCCB00",
    "#008B02",
    "#006B76",
    "#1273DE",
    "#004DCF",
    "#5300EB",
    "#EB9694",
    "#FAD0C3",
    "#FEF3BD",
    "#C1E1C5",
    "#BEDADC",
    "#C4DEF6",
    "#BED3F3",
    "#D4C4FB",
  ],
  triangle: "top-left",
  styles: {},
};
Rt(k2);
var AC = function (n) {
    var u = n.direction,
      i = xe(
        {
          default: {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: u === "vertical" },
      );
    return S.createElement("div", { style: i.picker });
  },
  xC =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  V2 = function (n) {
    var u = n.width,
      i = n.height,
      c = n.onChange,
      s = n.hsl,
      f = n.direction,
      d = n.pointer,
      v = n.styles,
      p = v === void 0 ? {} : v,
      g = n.className,
      A = g === void 0 ? "" : g,
      m = xe(Mt({ default: { picker: { position: "relative", width: u, height: i }, hue: { radius: "2px" } } }, p)),
      x = function (O) {
        return c({ a: 1, h: O.h, l: 0.5, s: 1 });
      };
    return S.createElement(
      "div",
      { style: m.picker, className: "hue-picker " + A },
      S.createElement(Ir, xC({}, m.hue, { hsl: s, pointer: d, onChange: x, direction: f })),
    );
  };
V2.propTypes = { styles: ee.object };
V2.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: AC, styles: {} };
Rt(V2);
var _C = function (n) {
  var u = n.onChange,
    i = n.hex,
    c = n.rgb,
    s = n.styles,
    f = s === void 0 ? {} : s,
    d = n.className,
    v = d === void 0 ? "" : d,
    p = xe(
      Mt(
        {
          default: {
            material: { width: "98px", height: "98px", padding: "16px", fontFamily: "Roboto" },
            HEXwrap: { position: "relative" },
            HEXinput: {
              width: "100%",
              marginTop: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "0px",
              border: "0px",
              borderBottom: "2px solid " + i,
              outline: "none",
              height: "30px",
            },
            HEXlabel: { position: "absolute", top: "0px", left: "0px", fontSize: "11px", color: "#999999", textTransform: "capitalize" },
            Hex: { style: {} },
            RGBwrap: { position: "relative" },
            RGBinput: {
              width: "100%",
              marginTop: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "0px",
              border: "0px",
              borderBottom: "1px solid #eee",
              outline: "none",
              height: "30px",
            },
            RGBlabel: { position: "absolute", top: "0px", left: "0px", fontSize: "11px", color: "#999999", textTransform: "capitalize" },
            split: { display: "flex", marginRight: "-10px", paddingTop: "11px" },
            third: { flex: "1", paddingRight: "10px" },
          },
        },
        f,
      ),
    ),
    g = function (m, x) {
      m.hex
        ? cn(m.hex) && u({ hex: m.hex, source: "hex" }, x)
        : (m.r || m.g || m.b) && u({ r: m.r || c.r, g: m.g || c.g, b: m.b || c.b, source: "rgb" }, x);
    };
  return S.createElement(
    yi,
    { styles: f },
    S.createElement(
      "div",
      { style: p.material, className: "material-picker " + v },
      S.createElement(ze, { style: { wrap: p.HEXwrap, input: p.HEXinput, label: p.HEXlabel }, label: "hex", value: i, onChange: g }),
      S.createElement(
        "div",
        { style: p.split, className: "flexbox-fix" },
        S.createElement(
          "div",
          { style: p.third },
          S.createElement(ze, { style: { wrap: p.RGBwrap, input: p.RGBinput, label: p.RGBlabel }, label: "r", value: c.r, onChange: g }),
        ),
        S.createElement(
          "div",
          { style: p.third },
          S.createElement(ze, { style: { wrap: p.RGBwrap, input: p.RGBinput, label: p.RGBlabel }, label: "g", value: c.g, onChange: g }),
        ),
        S.createElement(
          "div",
          { style: p.third },
          S.createElement(ze, { style: { wrap: p.RGBwrap, input: p.RGBinput, label: p.RGBlabel }, label: "b", value: c.b, onChange: g }),
        ),
      ),
    ),
  );
};
Rt(_C);
var SC = function (n) {
    var u = n.onChange,
      i = n.rgb,
      c = n.hsv,
      s = n.hex,
      f = xe({
        default: {
          fields: { paddingTop: "5px", paddingBottom: "9px", width: "80px", position: "relative" },
          divider: { height: "5px" },
          RGBwrap: { position: "relative" },
          RGBinput: {
            marginLeft: "40%",
            width: "40%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "5px",
            fontSize: "13px",
            paddingLeft: "3px",
            marginRight: "10px",
          },
          RGBlabel: {
            left: "0px",
            top: "0px",
            width: "34px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
            position: "absolute",
          },
          HEXwrap: { position: "relative" },
          HEXinput: {
            marginLeft: "20%",
            width: "80%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "6px",
            fontSize: "13px",
            paddingLeft: "3px",
          },
          HEXlabel: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "14px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
          },
          fieldSymbols: { position: "absolute", top: "5px", right: "-7px", fontSize: "13px" },
          symbol: { height: "20px", lineHeight: "22px", paddingBottom: "7px" },
        },
      }),
      d = function (p, g) {
        p["#"]
          ? cn(p["#"]) && u({ hex: p["#"], source: "hex" }, g)
          : p.r || p.g || p.b
            ? u({ r: p.r || i.r, g: p.g || i.g, b: p.b || i.b, source: "rgb" }, g)
            : (p.h || p.s || p.v) && u({ h: p.h || c.h, s: p.s || c.s, v: p.v || c.v, source: "hsv" }, g);
      };
    return S.createElement(
      "div",
      { style: f.fields },
      S.createElement(ze, {
        style: { wrap: f.RGBwrap, input: f.RGBinput, label: f.RGBlabel },
        label: "h",
        value: Math.round(c.h),
        onChange: d,
      }),
      S.createElement(ze, {
        style: { wrap: f.RGBwrap, input: f.RGBinput, label: f.RGBlabel },
        label: "s",
        value: Math.round(c.s * 100),
        onChange: d,
      }),
      S.createElement(ze, {
        style: { wrap: f.RGBwrap, input: f.RGBinput, label: f.RGBlabel },
        label: "v",
        value: Math.round(c.v * 100),
        onChange: d,
      }),
      S.createElement("div", { style: f.divider }),
      S.createElement(ze, { style: { wrap: f.RGBwrap, input: f.RGBinput, label: f.RGBlabel }, label: "r", value: i.r, onChange: d }),
      S.createElement(ze, { style: { wrap: f.RGBwrap, input: f.RGBinput, label: f.RGBlabel }, label: "g", value: i.g, onChange: d }),
      S.createElement(ze, { style: { wrap: f.RGBwrap, input: f.RGBinput, label: f.RGBlabel }, label: "b", value: i.b, onChange: d }),
      S.createElement("div", { style: f.divider }),
      S.createElement(ze, {
        style: { wrap: f.HEXwrap, input: f.HEXinput, label: f.HEXlabel },
        label: "#",
        value: s.replace("#", ""),
        onChange: d,
      }),
      S.createElement(
        "div",
        { style: f.fieldSymbols },
        S.createElement("div", { style: f.symbol }, "°"),
        S.createElement("div", { style: f.symbol }, "%"),
        S.createElement("div", { style: f.symbol }, "%"),
      ),
    );
  },
  EC = function (n) {
    var u = n.hsl,
      i = xe(
        {
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)",
            },
          },
          "black-outline": { picker: { boxShadow: "inset 0 0 0 1px #000" } },
        },
        { "black-outline": u.l > 0.5 },
      );
    return S.createElement("div", { style: i.picker });
  },
  CC = function () {
    var n = xe({
      default: {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "4px 0 4px 6px",
          borderColor: "transparent transparent transparent #fff",
          position: "absolute",
          top: "1px",
          left: "1px",
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 0 5px 8px",
          borderColor: "transparent transparent transparent #555",
        },
        left: { Extend: "triangleBorder", transform: "translate(-13px, -4px)" },
        leftInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
        right: { Extend: "triangleBorder", transform: "translate(20px, -14px) rotate(180deg)" },
        rightInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
      },
    });
    return S.createElement(
      "div",
      { style: n.pointer },
      S.createElement("div", { style: n.left }, S.createElement("div", { style: n.leftInside })),
      S.createElement("div", { style: n.right }, S.createElement("div", { style: n.rightInside })),
    );
  },
  rg = function (n) {
    var u = n.onClick,
      i = n.label,
      c = n.children,
      s = n.active,
      f = xe(
        {
          default: {
            button: {
              backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
              border: "1px solid #878787",
              borderRadius: "2px",
              height: "20px",
              boxShadow: "0 1px 0 0 #EAEAEA",
              fontSize: "14px",
              color: "#000",
              lineHeight: "20px",
              textAlign: "center",
              marginBottom: "10px",
              cursor: "pointer",
            },
          },
          active: { button: { boxShadow: "0 0 0 1px #878787" } },
        },
        { active: s },
      );
    return S.createElement("div", { style: f.button, onClick: u }, i || c);
  },
  wC = function (n) {
    var u = n.rgb,
      i = n.currentColor,
      c = xe({
        default: {
          swatches: { border: "1px solid #B3B3B3", borderBottom: "1px solid #F0F0F0", marginBottom: "2px", marginTop: "1px" },
          new: {
            height: "34px",
            background: "rgb(" + u.r + "," + u.g + ", " + u.b + ")",
            boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000",
          },
          current: { height: "34px", background: i, boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000" },
          label: { fontSize: "14px", color: "#000", textAlign: "center" },
        },
      });
    return S.createElement(
      "div",
      null,
      S.createElement("div", { style: c.label }, "new"),
      S.createElement("div", { style: c.swatches }, S.createElement("div", { style: c.new }), S.createElement("div", { style: c.current })),
      S.createElement("div", { style: c.label }, "current"),
    );
  },
  TC = (function () {
    function r(n, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        ((c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(n, c.key, c));
      }
    }
    return function (n, u, i) {
      return (u && r(n.prototype, u), i && r(n, i), n);
    };
  })();
function OC(r, n) {
  if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function MC(r, n) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n && (typeof n == "object" || typeof n == "function") ? n : r;
}
function RC(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
  ((r.prototype = Object.create(n && n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
    n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : (r.__proto__ = n)));
}
var Y2 = (function (r) {
  RC(n, r);
  function n(u) {
    OC(this, n);
    var i = MC(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
    return ((i.state = { currentColor: u.hex }), i);
  }
  return (
    TC(n, [
      {
        key: "render",
        value: function () {
          var i = this.props,
            c = i.styles,
            s = c === void 0 ? {} : c,
            f = i.className,
            d = f === void 0 ? "" : f,
            v = xe(
              Mt(
                {
                  default: {
                    picker: {
                      background: "#DCDCDC",
                      borderRadius: "4px",
                      boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                      boxSizing: "initial",
                      width: "513px",
                    },
                    head: {
                      backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                      borderBottom: "1px solid #B1B1B1",
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                      height: "23px",
                      lineHeight: "24px",
                      borderRadius: "4px 4px 0 0",
                      fontSize: "13px",
                      color: "#4D4D4D",
                      textAlign: "center",
                    },
                    body: { padding: "15px 15px 0", display: "flex" },
                    saturation: {
                      width: "256px",
                      height: "256px",
                      position: "relative",
                      border: "2px solid #B3B3B3",
                      borderBottom: "2px solid #F0F0F0",
                      overflow: "hidden",
                    },
                    hue: {
                      position: "relative",
                      height: "256px",
                      width: "19px",
                      marginLeft: "10px",
                      border: "2px solid #B3B3B3",
                      borderBottom: "2px solid #F0F0F0",
                    },
                    controls: { width: "180px", marginLeft: "10px" },
                    top: { display: "flex" },
                    previews: { width: "60px" },
                    actions: { flex: "1", marginLeft: "20px" },
                  },
                },
                s,
              ),
            );
          return S.createElement(
            "div",
            { style: v.picker, className: "photoshop-picker " + d },
            S.createElement("div", { style: v.head }, this.props.header),
            S.createElement(
              "div",
              { style: v.body, className: "flexbox-fix" },
              S.createElement(
                "div",
                { style: v.saturation },
                S.createElement(pc, { hsl: this.props.hsl, hsv: this.props.hsv, pointer: EC, onChange: this.props.onChange }),
              ),
              S.createElement(
                "div",
                { style: v.hue },
                S.createElement(Ir, { direction: "vertical", hsl: this.props.hsl, pointer: CC, onChange: this.props.onChange }),
              ),
              S.createElement(
                "div",
                { style: v.controls },
                S.createElement(
                  "div",
                  { style: v.top, className: "flexbox-fix" },
                  S.createElement(
                    "div",
                    { style: v.previews },
                    S.createElement(wC, { rgb: this.props.rgb, currentColor: this.state.currentColor }),
                  ),
                  S.createElement(
                    "div",
                    { style: v.actions },
                    S.createElement(rg, { label: "OK", onClick: this.props.onAccept, active: !0 }),
                    S.createElement(rg, { label: "Cancel", onClick: this.props.onCancel }),
                    S.createElement(SC, { onChange: this.props.onChange, rgb: this.props.rgb, hsv: this.props.hsv, hex: this.props.hex }),
                  ),
                ),
              ),
            ),
          );
        },
      },
    ]),
    n
  );
})(S.Component);
Y2.propTypes = { header: ee.string, styles: ee.object };
Y2.defaultProps = { header: "Color Picker", styles: {} };
Rt(Y2);
var zC = function (n) {
    var u = n.onChange,
      i = n.rgb,
      c = n.hsl,
      s = n.hex,
      f = n.disableAlpha,
      d = xe(
        {
          default: {
            fields: { display: "flex", paddingTop: "4px" },
            single: { flex: "1", paddingLeft: "6px" },
            alpha: { flex: "1", paddingLeft: "6px" },
            double: { flex: "2" },
            input: { width: "80%", padding: "4px 10% 3px", border: "none", boxShadow: "inset 0 0 0 1px #ccc", fontSize: "11px" },
            label: {
              display: "block",
              textAlign: "center",
              fontSize: "11px",
              color: "#222",
              paddingTop: "3px",
              paddingBottom: "4px",
              textTransform: "capitalize",
            },
          },
          disableAlpha: { alpha: { display: "none" } },
        },
        { disableAlpha: f },
      ),
      v = function (g, A) {
        g.hex
          ? cn(g.hex) && u({ hex: g.hex, source: "hex" }, A)
          : g.r || g.g || g.b
            ? u({ r: g.r || i.r, g: g.g || i.g, b: g.b || i.b, a: i.a, source: "rgb" }, A)
            : g.a &&
              (g.a < 0 ? (g.a = 0) : g.a > 100 && (g.a = 100), (g.a /= 100), u({ h: c.h, s: c.s, l: c.l, a: g.a, source: "rgb" }, A));
      };
    return S.createElement(
      "div",
      { style: d.fields, className: "flexbox-fix" },
      S.createElement(
        "div",
        { style: d.double },
        S.createElement(ze, { style: { input: d.input, label: d.label }, label: "hex", value: s.replace("#", ""), onChange: v }),
      ),
      S.createElement(
        "div",
        { style: d.single },
        S.createElement(ze, {
          style: { input: d.input, label: d.label },
          label: "r",
          value: i.r,
          onChange: v,
          dragLabel: "true",
          dragMax: "255",
        }),
      ),
      S.createElement(
        "div",
        { style: d.single },
        S.createElement(ze, {
          style: { input: d.input, label: d.label },
          label: "g",
          value: i.g,
          onChange: v,
          dragLabel: "true",
          dragMax: "255",
        }),
      ),
      S.createElement(
        "div",
        { style: d.single },
        S.createElement(ze, {
          style: { input: d.input, label: d.label },
          label: "b",
          value: i.b,
          onChange: v,
          dragLabel: "true",
          dragMax: "255",
        }),
      ),
      S.createElement(
        "div",
        { style: d.alpha },
        S.createElement(ze, {
          style: { input: d.input, label: d.label },
          label: "a",
          value: Math.round(i.a * 100),
          onChange: v,
          dragLabel: "true",
          dragMax: "100",
        }),
      ),
    );
  },
  qC =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  T8 = function (n) {
    var u = n.colors,
      i = n.onClick,
      c = i === void 0 ? function () {} : i,
      s = n.onSwatchHover,
      f = xe(
        {
          default: {
            colors: {
              margin: "0 -10px",
              padding: "10px 0 0 10px",
              borderTop: "1px solid #eee",
              display: "flex",
              flexWrap: "wrap",
              position: "relative",
            },
            swatchWrap: { width: "16px", height: "16px", margin: "0 10px 10px 0" },
            swatch: { borderRadius: "3px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)" },
          },
          "no-presets": { colors: { display: "none" } },
        },
        { "no-presets": !u || !u.length },
      ),
      d = function (p, g) {
        c({ hex: p, source: "hex" }, g);
      };
    return S.createElement(
      "div",
      { style: f.colors, className: "flexbox-fix" },
      u.map(function (v) {
        var p = typeof v == "string" ? { color: v } : v,
          g = "" + p.color + (p.title || "");
        return S.createElement(
          "div",
          { key: g, style: f.swatchWrap },
          S.createElement(
            jn,
            qC({}, p, {
              style: f.swatch,
              onClick: d,
              onHover: s,
              focusStyle: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + p.color },
            }),
          ),
        );
      }),
    );
  };
T8.propTypes = { colors: ee.arrayOf(ee.oneOfType([ee.string, ee.shape({ color: ee.string, title: ee.string })])).isRequired };
var DC =
    Object.assign ||
    function (r) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  X2 = function (n) {
    var u = n.width,
      i = n.rgb,
      c = n.hex,
      s = n.hsv,
      f = n.hsl,
      d = n.onChange,
      v = n.onSwatchHover,
      p = n.disableAlpha,
      g = n.presetColors,
      A = n.renderers,
      m = n.styles,
      x = m === void 0 ? {} : m,
      w = n.className,
      O = w === void 0 ? "" : w,
      R = xe(
        Mt(
          {
            default: DC(
              {
                picker: {
                  width: u,
                  padding: "10px 10px 0",
                  boxSizing: "initial",
                  background: "#fff",
                  borderRadius: "4px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                },
                saturation: { width: "100%", paddingBottom: "75%", position: "relative", overflow: "hidden" },
                Saturation: { radius: "3px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                controls: { display: "flex" },
                sliders: { padding: "4px 0", flex: "1" },
                color: { width: "24px", height: "24px", position: "relative", marginTop: "4px", marginLeft: "4px", borderRadius: "3px" },
                activeColor: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: "2px",
                  background: "rgba(" + i.r + "," + i.g + "," + i.b + "," + i.a + ")",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                hue: { position: "relative", height: "10px", overflow: "hidden" },
                Hue: { radius: "2px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                alpha: { position: "relative", height: "10px", marginTop: "4px", overflow: "hidden" },
                Alpha: { radius: "2px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
              },
              x,
            ),
            disableAlpha: { color: { height: "10px" }, hue: { height: "10px" }, alpha: { display: "none" } },
          },
          x,
        ),
        { disableAlpha: p },
      );
    return S.createElement(
      "div",
      { style: R.picker, className: "sketch-picker " + O },
      S.createElement("div", { style: R.saturation }, S.createElement(pc, { style: R.Saturation, hsl: f, hsv: s, onChange: d })),
      S.createElement(
        "div",
        { style: R.controls, className: "flexbox-fix" },
        S.createElement(
          "div",
          { style: R.sliders },
          S.createElement("div", { style: R.hue }, S.createElement(Ir, { style: R.Hue, hsl: f, onChange: d })),
          S.createElement("div", { style: R.alpha }, S.createElement(w2, { style: R.Alpha, rgb: i, hsl: f, renderers: A, onChange: d })),
        ),
        S.createElement("div", { style: R.color }, S.createElement(Jr, null), S.createElement("div", { style: R.activeColor })),
      ),
      S.createElement(zC, { rgb: i, hsl: f, hex: c, onChange: d, disableAlpha: p }),
      S.createElement(T8, { colors: g, onClick: d, onSwatchHover: v }),
    );
  };
X2.propTypes = { disableAlpha: ee.bool, width: ee.oneOfType([ee.string, ee.number]), styles: ee.object };
X2.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: [
    "#D0021B",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF",
  ],
};
Rt(X2);
var li = function (n) {
    var u = n.hsl,
      i = n.offset,
      c = n.onClick,
      s = c === void 0 ? function () {} : c,
      f = n.active,
      d = n.first,
      v = n.last,
      p = xe(
        {
          default: { swatch: { height: "12px", background: "hsl(" + u.h + ", 50%, " + i * 100 + "%)", cursor: "pointer" } },
          first: { swatch: { borderRadius: "2px 0 0 2px" } },
          last: { swatch: { borderRadius: "0 2px 2px 0" } },
          active: { swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" } },
        },
        { active: f, first: d, last: v },
      ),
      g = function (m) {
        return s({ h: u.h, s: 0.5, l: i, source: "hsl" }, m);
      };
    return S.createElement("div", { style: p.swatch, onClick: g });
  },
  HC = function (n) {
    var u = n.onClick,
      i = n.hsl,
      c = xe({
        default: {
          swatches: { marginTop: "20px" },
          swatch: { boxSizing: "border-box", width: "20%", paddingRight: "1px", float: "left" },
          clear: { clear: "both" },
        },
      }),
      s = 0.1;
    return S.createElement(
      "div",
      { style: c.swatches },
      S.createElement(
        "div",
        { style: c.swatch },
        S.createElement(li, { hsl: i, offset: ".80", active: Math.abs(i.l - 0.8) < s && Math.abs(i.s - 0.5) < s, onClick: u, first: !0 }),
      ),
      S.createElement(
        "div",
        { style: c.swatch },
        S.createElement(li, { hsl: i, offset: ".65", active: Math.abs(i.l - 0.65) < s && Math.abs(i.s - 0.5) < s, onClick: u }),
      ),
      S.createElement(
        "div",
        { style: c.swatch },
        S.createElement(li, { hsl: i, offset: ".50", active: Math.abs(i.l - 0.5) < s && Math.abs(i.s - 0.5) < s, onClick: u }),
      ),
      S.createElement(
        "div",
        { style: c.swatch },
        S.createElement(li, { hsl: i, offset: ".35", active: Math.abs(i.l - 0.35) < s && Math.abs(i.s - 0.5) < s, onClick: u }),
      ),
      S.createElement(
        "div",
        { style: c.swatch },
        S.createElement(li, { hsl: i, offset: ".20", active: Math.abs(i.l - 0.2) < s && Math.abs(i.s - 0.5) < s, onClick: u, last: !0 }),
      ),
      S.createElement("div", { style: c.clear }),
    );
  },
  jC = function () {
    var n = xe({
      default: {
        picker: {
          width: "14px",
          height: "14px",
          borderRadius: "6px",
          transform: "translate(-7px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
        },
      },
    });
    return S.createElement("div", { style: n.picker });
  },
  Z2 = function (n) {
    var u = n.hsl,
      i = n.onChange,
      c = n.pointer,
      s = n.styles,
      f = s === void 0 ? {} : s,
      d = n.className,
      v = d === void 0 ? "" : d,
      p = xe(Mt({ default: { hue: { height: "12px", position: "relative" }, Hue: { radius: "2px" } } }, f));
    return S.createElement(
      "div",
      { style: p.wrap || {}, className: "slider-picker " + v },
      S.createElement("div", { style: p.hue }, S.createElement(Ir, { style: p.Hue, hsl: u, pointer: c, onChange: i })),
      S.createElement("div", { style: p.swatches }, S.createElement(HC, { hsl: u, onClick: i })),
    );
  };
Z2.propTypes = { styles: ee.object };
Z2.defaultProps = { pointer: jC, styles: {} };
Rt(Z2);
var Uu = {},
  lg;
function BC() {
  if (lg) return Uu;
  ((lg = 1), Object.defineProperty(Uu, "__esModule", { value: !0 }));
  var r =
      Object.assign ||
      function (f) {
        for (var d = 1; d < arguments.length; d++) {
          var v = arguments[d];
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (f[p] = v[p]);
        }
        return f;
      },
    n = un(),
    u = i(n);
  function i(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function c(f, d) {
    var v = {};
    for (var p in f) d.indexOf(p) >= 0 || (Object.prototype.hasOwnProperty.call(f, p) && (v[p] = f[p]));
    return v;
  }
  var s = 24;
  return (
    (Uu.default = function (f) {
      var d = f.fill,
        v = d === void 0 ? "currentColor" : d,
        p = f.width,
        g = p === void 0 ? s : p,
        A = f.height,
        m = A === void 0 ? s : A,
        x = f.style,
        w = x === void 0 ? {} : x,
        O = c(f, ["fill", "width", "height", "style"]);
      return u.default.createElement(
        "svg",
        r({ viewBox: "0 0 " + s + " " + s, style: r({ fill: v, width: g, height: m }, w) }, O),
        u.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }),
      );
    }),
    Uu
  );
}
var NC = BC();
const QC = Fr(NC);
var UC = function (n) {
    var u = n.color,
      i = n.onClick,
      c = i === void 0 ? function () {} : i,
      s = n.onSwatchHover,
      f = n.first,
      d = n.last,
      v = n.active,
      p = xe(
        {
          default: {
            color: { width: "40px", height: "24px", cursor: "pointer", background: u, marginBottom: "1px" },
            check: { color: H2(u), marginLeft: "8px", display: "none" },
          },
          first: { color: { overflow: "hidden", borderRadius: "2px 2px 0 0" } },
          last: { color: { overflow: "hidden", borderRadius: "0 0 2px 2px" } },
          active: { check: { display: "block" } },
          "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, check: { color: "#333" } },
          transparent: { check: { color: "#333" } },
        },
        { first: f, last: d, active: v, "color-#FFFFFF": u === "#FFFFFF", transparent: u === "transparent" },
      );
    return S.createElement(
      jn,
      { color: u, style: p.color, onClick: c, onHover: s, focusStyle: { boxShadow: "0 0 4px " + u } },
      S.createElement("div", { style: p.check }, S.createElement(QC, null)),
    );
  },
  LC = function (n) {
    var u = n.onClick,
      i = n.onSwatchHover,
      c = n.group,
      s = n.active,
      f = xe({ default: { group: { paddingBottom: "10px", width: "40px", float: "left", marginRight: "10px" } } });
    return S.createElement(
      "div",
      { style: f.group },
      Bn(c, function (d, v) {
        return S.createElement(UC, {
          key: d,
          color: d,
          active: d.toLowerCase() === s,
          first: v === 0,
          last: v === c.length - 1,
          onClick: u,
          onSwatchHover: i,
        });
      }),
    );
  },
  K2 = function (n) {
    var u = n.width,
      i = n.height,
      c = n.onChange,
      s = n.onSwatchHover,
      f = n.colors,
      d = n.hex,
      v = n.styles,
      p = v === void 0 ? {} : v,
      g = n.className,
      A = g === void 0 ? "" : g,
      m = xe(
        Mt(
          {
            default: {
              picker: { width: u, height: i },
              overflow: { height: i, overflowY: "scroll" },
              body: { padding: "16px 0 6px 16px" },
              clear: { clear: "both" },
            },
          },
          p,
        ),
      ),
      x = function (O, R) {
        return c({ hex: O, source: "hex" }, R);
      };
    return S.createElement(
      "div",
      { style: m.picker, className: "swatches-picker " + A },
      S.createElement(
        yi,
        null,
        S.createElement(
          "div",
          { style: m.overflow },
          S.createElement(
            "div",
            { style: m.body },
            Bn(f, function (w) {
              return S.createElement(LC, { key: w.toString(), group: w, active: d, onClick: x, onSwatchHover: s });
            }),
            S.createElement("div", { style: m.clear }),
          ),
        ),
      ),
    );
  };
K2.propTypes = {
  width: ee.oneOfType([ee.string, ee.number]),
  height: ee.oneOfType([ee.string, ee.number]),
  colors: ee.arrayOf(ee.arrayOf(ee.string)),
  styles: ee.object,
};
K2.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [zr[900], zr[700], zr[500], zr[300], zr[100]],
    [qr[900], qr[700], qr[500], qr[300], qr[100]],
    [Dr[900], Dr[700], Dr[500], Dr[300], Dr[100]],
    [Hr[900], Hr[700], Hr[500], Hr[300], Hr[100]],
    [jr[900], jr[700], jr[500], jr[300], jr[100]],
    [Br[900], Br[700], Br[500], Br[300], Br[100]],
    [Nr[900], Nr[700], Nr[500], Nr[300], Nr[100]],
    [Qr[900], Qr[700], Qr[500], Qr[300], Qr[100]],
    [Ur[900], Ur[700], Ur[500], Ur[300], Ur[100]],
    ["#194D33", si[700], si[500], si[300], si[100]],
    [Lr[900], Lr[700], Lr[500], Lr[300], Lr[100]],
    [Gr[900], Gr[700], Gr[500], Gr[300], Gr[100]],
    [kr[900], kr[700], kr[500], kr[300], kr[100]],
    [Vr[900], Vr[700], Vr[500], Vr[300], Vr[100]],
    [Yr[900], Yr[700], Yr[500], Yr[300], Yr[100]],
    [Xr[900], Xr[700], Xr[500], Xr[300], Xr[100]],
    [Zr[900], Zr[700], Zr[500], Zr[300], Zr[100]],
    [Kr[900], Kr[700], Kr[500], Kr[300], Kr[100]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
  ],
  styles: {},
};
Rt(K2);
var P2 = function (n) {
  var u = n.onChange,
    i = n.onSwatchHover,
    c = n.hex,
    s = n.colors,
    f = n.width,
    d = n.triangle,
    v = n.styles,
    p = v === void 0 ? {} : v,
    g = n.className,
    A = g === void 0 ? "" : g,
    m = xe(
      Mt(
        {
          default: {
            card: {
              width: f,
              background: "#fff",
              border: "0 solid rgba(0,0,0,0.25)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
              borderRadius: "4px",
              position: "relative",
            },
            body: { padding: "15px 9px 9px 15px" },
            label: { fontSize: "18px", color: "#fff" },
            triangle: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 9px 10px 9px",
              borderColor: "transparent transparent #fff transparent",
              position: "absolute",
            },
            triangleShadow: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 9px 10px 9px",
              borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
              position: "absolute",
            },
            hash: {
              background: "#F0F0F0",
              height: "30px",
              width: "30px",
              borderRadius: "4px 0 0 4px",
              float: "left",
              color: "#98A1A4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            input: {
              width: "100px",
              fontSize: "14px",
              color: "#666",
              border: "0px",
              outline: "none",
              height: "28px",
              boxShadow: "inset 0 0 0 1px #F0F0F0",
              boxSizing: "content-box",
              borderRadius: "0 4px 4px 0",
              float: "left",
              paddingLeft: "8px",
            },
            swatch: { width: "30px", height: "30px", float: "left", borderRadius: "4px", margin: "0 6px 6px 0" },
            clear: { clear: "both" },
          },
          "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
          "top-left-triangle": { triangle: { top: "-10px", left: "12px" }, triangleShadow: { top: "-11px", left: "12px" } },
          "top-right-triangle": { triangle: { top: "-10px", right: "12px" }, triangleShadow: { top: "-11px", right: "12px" } },
        },
        p,
      ),
      { "hide-triangle": d === "hide", "top-left-triangle": d === "top-left", "top-right-triangle": d === "top-right" },
    ),
    x = function (O, R) {
      cn(O) && u({ hex: O, source: "hex" }, R);
    };
  return S.createElement(
    "div",
    { style: m.card, className: "twitter-picker " + A },
    S.createElement("div", { style: m.triangleShadow }),
    S.createElement("div", { style: m.triangle }),
    S.createElement(
      "div",
      { style: m.body },
      Bn(s, function (w, O) {
        return S.createElement(jn, {
          key: O,
          color: w,
          hex: w,
          style: m.swatch,
          onClick: x,
          onHover: i,
          focusStyle: { boxShadow: "0 0 4px " + w },
        });
      }),
      S.createElement("div", { style: m.hash }, "#"),
      S.createElement(ze, { label: null, style: { input: m.input }, value: c.replace("#", ""), onChange: x }),
      S.createElement("div", { style: m.clear }),
    ),
  );
};
P2.propTypes = {
  width: ee.oneOfType([ee.string, ee.number]),
  triangle: ee.oneOf(["hide", "top-left", "top-right"]),
  colors: ee.arrayOf(ee.string),
  styles: ee.object,
};
P2.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {},
};
Rt(P2);
var F2 = function (n) {
  var u = xe({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(n.hsl.h) + ", " + Math.round(n.hsl.s * 100) + "%, " + Math.round(n.hsl.l * 100) + "%)",
      },
    },
  });
  return S.createElement("div", { style: u.picker });
};
F2.propTypes = { hsl: ee.shape({ h: ee.number, s: ee.number, l: ee.number, a: ee.number }) };
F2.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } };
var $2 = function (n) {
  var u = xe({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(n.hsl.h) + ", 100%, 50%)",
        border: "2px white solid",
      },
    },
  });
  return S.createElement("div", { style: u.picker });
};
$2.propTypes = { hsl: ee.shape({ h: ee.number, s: ee.number, l: ee.number, a: ee.number }) };
$2.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } };
var GC = function (n) {
    var u = n.onChange,
      i = n.rgb,
      c = n.hsl,
      s = n.hex,
      f = n.hsv,
      d = function (x, w) {
        if (x.hex) cn(x.hex) && u({ hex: x.hex, source: "hex" }, w);
        else if (x.rgb) {
          var O = x.rgb.split(",");
          Yf(x.rgb, "rgb") && u({ r: O[0], g: O[1], b: O[2], a: 1, source: "rgb" }, w);
        } else if (x.hsv) {
          var R = x.hsv.split(",");
          Yf(x.hsv, "hsv") &&
            ((R[2] = R[2].replace("%", "")),
            (R[1] = R[1].replace("%", "")),
            (R[0] = R[0].replace("°", "")),
            R[1] == 1 ? (R[1] = 0.01) : R[2] == 1 && (R[2] = 0.01),
            u({ h: Number(R[0]), s: Number(R[1]), v: Number(R[2]), source: "hsv" }, w));
        } else if (x.hsl) {
          var H = x.hsl.split(",");
          Yf(x.hsl, "hsl") &&
            ((H[2] = H[2].replace("%", "")),
            (H[1] = H[1].replace("%", "")),
            (H[0] = H[0].replace("°", "")),
            A[1] == 1 ? (A[1] = 0.01) : A[2] == 1 && (A[2] = 0.01),
            u({ h: Number(H[0]), s: Number(H[1]), v: Number(H[2]), source: "hsl" }, w));
        }
      },
      v = xe({
        default: {
          wrap: { display: "flex", height: "100px", marginTop: "4px" },
          fields: { width: "100%" },
          column: { paddingTop: "10px", display: "flex", justifyContent: "space-between" },
          double: { padding: "0px 4.4px", boxSizing: "border-box" },
          input: {
            width: "100%",
            height: "38px",
            boxSizing: "border-box",
            padding: "4px 10% 3px",
            textAlign: "center",
            border: "1px solid #dadce0",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          input2: {
            height: "38px",
            width: "100%",
            border: "1px solid #dadce0",
            boxSizing: "border-box",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            paddingLeft: "10px",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          label: {
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "35px",
            top: "-6px",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          label2: {
            left: "10px",
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "32px",
            top: "-6px",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          single: { flexGrow: "1", margin: "0px 4.4px" },
        },
      }),
      p = i.r + ", " + i.g + ", " + i.b,
      g = Math.round(c.h) + "°, " + Math.round(c.s * 100) + "%, " + Math.round(c.l * 100) + "%",
      A = Math.round(f.h) + "°, " + Math.round(f.s * 100) + "%, " + Math.round(f.v * 100) + "%";
    return S.createElement(
      "div",
      { style: v.wrap, className: "flexbox-fix" },
      S.createElement(
        "div",
        { style: v.fields },
        S.createElement(
          "div",
          { style: v.double },
          S.createElement(ze, { style: { input: v.input, label: v.label }, label: "hex", value: s, onChange: d }),
        ),
        S.createElement(
          "div",
          { style: v.column },
          S.createElement(
            "div",
            { style: v.single },
            S.createElement(ze, { style: { input: v.input2, label: v.label2 }, label: "rgb", value: p, onChange: d }),
          ),
          S.createElement(
            "div",
            { style: v.single },
            S.createElement(ze, { style: { input: v.input2, label: v.label2 }, label: "hsv", value: A, onChange: d }),
          ),
          S.createElement(
            "div",
            { style: v.single },
            S.createElement(ze, { style: { input: v.input2, label: v.label2 }, label: "hsl", value: g, onChange: d }),
          ),
        ),
      ),
    );
  },
  J2 = function (n) {
    var u = n.width,
      i = n.onChange,
      c = n.rgb,
      s = n.hsl,
      f = n.hsv,
      d = n.hex,
      v = n.header,
      p = n.styles,
      g = p === void 0 ? {} : p,
      A = n.className,
      m = A === void 0 ? "" : A,
      x = xe(
        Mt(
          {
            default: {
              picker: {
                width: u,
                background: "#fff",
                border: "1px solid #dfe1e5",
                boxSizing: "initial",
                display: "flex",
                flexWrap: "wrap",
                borderRadius: "8px 8px 0px 0px",
              },
              head: {
                height: "57px",
                width: "100%",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
                fontSize: "20px",
                boxSizing: "border-box",
                fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
              },
              saturation: { width: "70%", padding: "0px", position: "relative", overflow: "hidden" },
              swatch: {
                width: "30%",
                height: "228px",
                padding: "0px",
                background: "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 1)",
                position: "relative",
                overflow: "hidden",
              },
              body: { margin: "auto", width: "95%" },
              controls: { display: "flex", boxSizing: "border-box", height: "52px", paddingTop: "22px" },
              color: { width: "32px" },
              hue: { height: "8px", position: "relative", margin: "0px 16px 0px 16px", width: "100%" },
              Hue: { radius: "2px" },
            },
          },
          g,
        ),
      );
    return S.createElement(
      "div",
      { style: x.picker, className: "google-picker " + m },
      S.createElement("div", { style: x.head }, v),
      S.createElement("div", { style: x.swatch }),
      S.createElement("div", { style: x.saturation }, S.createElement(pc, { hsl: s, hsv: f, pointer: F2, onChange: i })),
      S.createElement(
        "div",
        { style: x.body },
        S.createElement(
          "div",
          { style: x.controls, className: "flexbox-fix" },
          S.createElement("div", { style: x.hue }, S.createElement(Ir, { style: x.Hue, hsl: s, radius: "4px", pointer: $2, onChange: i })),
        ),
        S.createElement(GC, { rgb: c, hsl: s, hex: d, hsv: f, onChange: i }),
      ),
    );
  };
J2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), styles: ee.object, header: ee.string };
J2.defaultProps = { width: 652, styles: {}, header: "Color picker" };
Rt(J2);
const O8 = "" + new URL("paintbrush-rSkw0poc.svg", import.meta.url).href,
  M8 = "" + new URL("draw-line-Ban59yVO.svg", import.meta.url).href,
  R8 = "" + new URL("rectangle-BMYwHa9v.svg", import.meta.url).href,
  z8 = "" + new URL("select-BY4E36Vj.svg", import.meta.url).href,
  n2 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABcaAAAXGgFDFdo3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAqBQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACxk6x5AAAAN90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIkJSYnKCorLS4vMDEyMzQ1Njc5Ojs+P0JDREVGR0hJSktPUFFSU1RVVlhZW1xdXl9gYWJjZGVmZ2hpamtsbW9wcXJ0dXd4eXp7fH1+gIGCg4SGiImKi4yNjo+QkZKTlJaXmJmanJ2foKGio6Slpqepqqusra6vsLGys7W2t7i6u7y9vr/AwcLExcfIycvMzc7P0NHS09TV1tfY2dzd3t/g4eLj5OXm5+jq6+zu7/Dx8vP09fb3+Pn6+/z9/n6CzcwAAAvkSURBVHja7d39v99zHcfx16Etl00bKbZZYsvFhK4Q0RRzEYVNKpLLwmYtlBKVq1wPqa1aSyOGRYsxJFe53ApD7fLzr/QDtzHOd/ue786+n/f387o/fnSOc27v9+dhZ4+nc74nAgAAAAAAoOn0jZ983i9nzn/wjlsvn37cKPeRi+2PveGl6t08cdXRW7uWLOx+y6rq/bxy4Q6uJgOfmrm66p9l13zS9TSdD82o1sGKczZxRc3+z/+Jat3c5e+DTeaU/1Xr499HuqamMuTGqh3Od1PNZMs/Ve1xzRCX1UBGzK/a5fYPua7GMfLRqn0eGunCGsa4Z6qB8NwerqxR7Lu4GhivHuTSGsSBS6uBsvx419YYjlpWdYAcbArfXlV1hBxsBlOrTvmzHOx9+n5edY4c7HmG3FxtCHKwx2l7/pWDjWQA868cbCADmn/lYOMY4PwrBxvGgOdfOdgoOph/5WCD6Gz+lYNNodP5Vw42g6nVYLP8BLfaM2zQ/CsHe54NnH/lYI+zwfOvHOxpBmH+bclCOVg8gzP/ysFeZbDmXznYmwze/NvyB4jlYMEM5vwrB3uPwZ1/W3KtHCyTwZ5/5WBvMbXqGnKwPDbO/CsHe4WNNf+24jU5WBQbb/6Vg73A8PlV95GDxbBx5185WDpjn6nqQQ4Wwcaff+VgyXRl/pWDxdKl+VcOFkrX5l85WCRTq/qZ5jHURXfnXzlYGkNmVGUgB2uh+/OvHCyJWubfljm4pwfSZUYuqkritS96JF2ltvlXDhZBjfOvHMw+/8rB2jlyWVUkcjDJ/CsH08+/cjD7/CsHs8+/cjD7/CsHs8+/cjD7/CsHs8+/cjD9/CsHs8+/cjD7/NsyByd5ZjnmXzmYff6Vg9nn35bMlYM55l85mH7+lYPZ5185mH3+lYPZ5185mH3+bcl1cjDH/CsHs8+/cnBw+daqqinIwQ6YUjUIOZhl/pWD2edfOZh9/pWD2eff1jk4zKNNMf+2zsFRHm6O+bcVz8vBJPOvHMw+/8rB7PNvS37gIeeYf+Vg9vlXDmaff1vysBxMMv/Kwezzrxxsf/69r8qEHMwy/8rB7POvHMw+/8rB7POvHEw//8rB7PNvyxw82POfUmUmfQ72XVYlJ3cOJpp/5WD2+VcOZp9/5WD6+VcOZp9/5eA77LPYc39XDk42/8pB868cNP/KQfOvHDT/Zs3B8eZfOWj+lYPmXzlo/k3L9U3OQfNvG9zR3Bw0/+bOQfNv7hw0/+bOQfNv7hw0/6bOQfNv7hw0/+bOwS3neJyZc9D8mzsHzb+5c9D8mzsHzb8bxnTzrxw0/8pB868cNP/KQfOvHDT/ykHzrxw0/8pB868cNP/KQfOvHDT/ykHzrxw0/8pB868cNP/KQfOvHDT/ykHzb7Nz8JASn/+O5t/u5eCJ5l85aP6Vg+XwBfNv6hw0/9bAI+XkoPk3dw6af2tiaRE5aP7NnYPm39w5aP6tOweHmn/loPk3dQ6ONv/KQfOvHDT/ykHzb1p+aP5Nzg1dzkHzb2nc2c0cNP/mzsEhN7nuAnmhWzm4xRyXnTkHzb+5c9D8mzsHzb+5c9D8mzsHzb+5c/AI828v5OBe5l85aP6Vg+ZfOWj+lYPmXzlo/pWD5l85aP6Vg+ZfOWj+lYPmXzk4AL5p/k2dg+e5wcw5aP7NnYPm39w5aP5tTA5+w/wrB82/ctD8mzkHtzH/ykHzrxw0/ybOwS+Zf+Wg+VcOmn/loPlXDpp/5aD5NyXPjjb/5uYf25l/c7NgmPk3N/M+aP7NzRTzb27+u7P5Nzd/NP8mZ+Ja8++lLiQbD5h/kzNuzfPffI7bSMia/zG46e9cRkae7ntbgKvcRU72fev5T3MTSZkcERFfcxFZuTgiYhv7f1pmR0Rc4h7S8mREjFvhHtKyNCJmu4a8vBwxarVryMtTEWe4hcQsipjvFhJzf+zkEjJzXZzkEjIzOX7kEjKzS9zmEhLzYsQCt5CYGyJecQuJ2SfiTbeQl7kR8YJryMuBEeFHQfPyQETEPe4hK8v2joiY5SKyclpERJztIpLy+7e+H3QvN5GTf414+yfCXnYXGXltzUuGznAZGf8CeMCaHwo7zG3kY9WR7/qp4IUb9KF8Q1kvcvJaLwuyIR/p4r+6zd5j2tqvC9v5HwGrT/cdZT3IFe95ZZAvd/w3iaN9S2EP8ptN3vvaQJd39oFePSAIUBTT2/kZn9nvf3m4oR19IX9+zyBAWYw5ZP0v8zerv5cKH9XBj4c+tlMQoDQBYq/1/e/9Xw/p//cDLR/o57p3eBCgPAFi9CPrfI/rN23xEsETVw7sU83aPAhQogCxzV9av33FGa1fJP6YAb1I5BVrRCJAYQLE0Btbvfml/df1ayJOHMCmN/Wdf40ApQkQfRf0/9Y7d1j3L4r5TrufZuXkIEDBAkSc1M8X9Oe+ut5fFXVWe5/ljUODAGULEBNef89bll20VRu/K+7cdj7J4s8EAUoXIMav9QM/z533kfZ+W+Sk9S9JT+4aBChfgNj01Jfe/ocvzJj4gbZ/X+xBr67nUyz4aBCgFwSIiF0nTT/n9BPGDuw3xu/+7Do/w81bBwF6RYDOGHZJ6y8DS49///sToGECROw2t8WHf2CXIEACASK+cns/HXnX4f3OyARooAARHztj7dcNWHL1Hi3ekwCNFCAidjz49KvvW7Rwwf3zLjvmE63fjQBNFaBNCEAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQoFr0vW7zEwKUJMCsrh9+HAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCgE+4r5/gzu374sYUJsFMNAswp5/jXdv3wIwsTYFgNAlxdzvEv6PrhNyvr+b9Rw/OPaeWc/9Tun/6NogR4og4BTirn/BO7f/pnixJgXh0CTCjn/J/r/un/XpQAt9QhwLYrSzn+m1t0//TXFCXAqXUIEPPyzgARxxQlwOhaBDizlOMfV8Phty/p+f+tlucfuxRy/JUj6jj9woIEmFKPAKXcwe21HP6icp7/6nE1CXBY2gaIiJHLihHgpqiLe0s4/m9rOvyVpTz/ZWNqE+DzBRx/xdiaDj9mRSEC/DTqY2b9x7+8tsP/qozn/58RNQqw3dN1H/+hrWo7/PBnSnj+qyZEnez5er3HXzymxsN/toQvAmdHvRy+us7TL9+v1sOfVf/znxF1c2aNBqw4rt6z991S9/O/e/PaBYiJtX0VWHJA3Wff5Bf1Pv8rh0QB7PFUPad/eOcCDn9WnX8AnhxlsO2sOvbP67Yq4vBHLanr+f9z/yiG/br+PeJ37l3K2T/8s1piYMl3h0ZJHPF4V+t/QklnHze7618HXr9wWJTG+PMf7M7h7z93t9LOvuMpc7v4x8CLVx26WRTJx7/+/ctuu/exxzcSj95z66VnHzuyzLMPP/y0H8+4+9HHNyoL/nDFlEmf7gsAAAAAAICB8H8AUs7BgUK/LwAAAABJRU5ErkJggg==",
  q8 = "" + new URL("about-DyboQUNs.png", import.meta.url).href,
  ig = Og.generator(),
  ug = (r, n, u, i, c, s, f = "#363636") => {
    switch (s) {
      case "line":
      case "rectangle":
        const d =
          s === "line"
            ? ig.line(n, u, i, c, { bowing: 2, strokeWidth: 3, stroke: f })
            : ig.rectangle(n, u, i - n, c - u, { bowing: 2, strokeWidth: 3, stroke: f });
        return { id: r, x1: n, y1: u, x2: i, y2: c, type: s, roughElement: d, color: f };
      case "paintbrush":
        return { id: r, type: s, points: [{ x: n, y: u }], color: f };
      default:
        throw new Error(`unrecognized: ${s}`);
    }
  },
  kC = r => {
    if (!r.length) return "";
    const n = r.reduce(
      (u, [i, c], s, f) => {
        const [d, v] = f[(s + 1) % f.length];
        return (u.push(i, c, (i + d) / 2, (c + v) / 2), u);
      },
      ["M", ...r[0], "Q"],
    );
    return (n.push("Z"), n.join(" "));
  },
  VC = (r, n, u) => {
    switch (u.type) {
      case "line":
      case "rectangle":
        r.draw(u.roughElement);
        break;
      case "paintbrush":
        const i = kC(ly(u.points, { size: 8, thinning: 0.3, smoothing: 0.5, streamline: 0.7 }));
        ((n.fillStyle = u.color), n.fill(new Path2D(i)));
        break;
      default:
        throw new Error(`unrecognised: ${u.type}`);
    }
  },
  Rr = (r, n, u, i, c) => (Math.abs(r - u) < 5 && Math.abs(n - i) < 5 ? c : null),
  cg = (r, n, u, i, c, s, f = 1) => {
    const d = { x: r, y: n },
      v = { x: u, y: i },
      p = { x: c, y: s },
      g = Zf(d, v) - (Zf(d, p) + Zf(v, p));
    return Math.abs(g) < f ? "inside" : null;
  },
  YC = (r, n, u) => {
    const { type: i, x1: c, x2: s, y1: f, y2: d } = u;
    switch (i) {
      case "line":
        const v = cg(c, f, s, d, r, n),
          p = Rr(r, n, c, f, "start"),
          g = Rr(r, n, s, d, "end");
        return p || g || v;
      case "rectangle":
        const A = Rr(r, n, c, f, "tl"),
          m = Rr(r, n, s, f, "tr"),
          x = Rr(r, n, c, d, "bl"),
          w = Rr(r, n, s, d, "br"),
          O = r >= c && r <= s && n >= f && n <= d ? "inside" : null;
        return A || m || x || w || O;
      case "paintbrush":
        return u.points.some((H, D) => {
          const L = u.points[D + 1];
          return L ? cg(H.x, H.y, L.x, L.y, r, n, 5) != null : !1;
        })
          ? "inside"
          : null;
      default:
        throw new Error(`unrecognised: ${i}`);
    }
  },
  Zf = (r, n) => Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2)),
  og = (r, n, u) => u.map(i => ({ ...i, position: YC(r, n, i) })).find(i => i.position !== null),
  XC = r => {
    const { type: n, x1: u, y1: i, x2: c, y2: s } = r;
    if (n === "rectangle") {
      const f = Math.min(u, c),
        d = Math.max(u, c),
        v = Math.min(i, s),
        p = Math.max(i, s);
      return { x1: f, y1: v, x2: d, y2: p };
    } else return u < c || (u === c && i < s) ? { x1: u, y1: i, x2: c, y2: s } : { x1: c, y1: s, x2: u, y2: i };
  },
  ZC = r => {
    switch (r) {
      case "tl":
      case "br":
      case "start":
      case "end":
        return "nwse-resize";
      case "tr":
      case "bl":
        return "nesw-resize";
      default:
        return "move";
    }
  },
  KC = (r, n, u, i) => {
    const { x1: c, y1: s, x2: f, y2: d } = i;
    switch (u) {
      case "tl":
      case "start":
        return { x1: r, y1: n, x2: f, y2: d };
      case "tr":
        return { x1: c, y1: n, x2: r, y2: d };
      case "bl":
        return { x1: r, y1: s, x2: f, y2: n };
      case "br":
      case "end":
        return { x1: c, y1: s, x2: r, y2: n };
      default:
        return null;
    }
  },
  PC = r => {
    const [n, u] = Ee.useState(0),
      [i, c] = Ee.useState([r]),
      s = (p, g = !1) => {
        const A = typeof p == "function" ? p(i[n]) : p;
        if (g) {
          const m = [...i];
          ((m[n] = A), c(m));
        } else {
          const m = [...i].slice(0, n + 1);
          (c([...m, A]), u(x => x + 1));
        }
      },
      f = () => n > 0 && u(0),
      d = () => n > 0 && u(p => p - 1),
      v = () => n < i.length - 1 && u(p => p + 1);
    return [i[n], s, d, v, f];
  },
  FC = r => ["line", "rectangle"].includes(r),
  $C = () => {
    const [r, n, u, i, c] = PC([]),
      [s, f] = Ee.useState("none"),
      [d, v] = Ee.useState("paintbrush"),
      [p, g] = Ee.useState(null),
      [A, m] = Ee.useState("#363636");
    Ee.useLayoutEffect(() => {
      const H = document.getElementById("canvas"),
        D = H.getContext("2d");
      D.clearRect(0, 0, H.width, H.height);
      const L = Og.canvas(H);
      r.map(k => VC(L, D, k));
    }, [r]);
    const x = (H, D, L, k, G, Y) => {
      const J = [...r];
      switch (Y) {
        case "line":
        case "rectangle":
          J[H] = ug(H, D, L, k, G, Y, J[H].color);
          break;
        case "paintbrush":
          J[H].points = [...J[H].points, { x: k, y: G }];
          break;
        default:
          throw new Error(`unrecognised: ${Y}`);
      }
      n(J, !0);
    };
    Ee.useEffect(() => {
      const H = D => {
        (D.metaKey || D.ctrlKey) && D.key === "z" && (D.shiftKey ? i() : u());
      };
      return (
        document.addEventListener("keydown", H),
        () => {
          document.removeEventListener("keydown", H);
        }
      );
    }, [u, i]);
    const w = H => {
        const { clientX: D, clientY: L } = H;
        if (d === "select") {
          const k = og(D, L, r);
          if (k) {
            if (k.type === "paintbrush") {
              const G = k.points.map(J => D - J.x),
                Y = k.points.map(J => L - J.y);
              g({ ...k, xOffsets: G, yOffsets: Y });
            } else {
              const G = D - k.x1,
                Y = L - k.y1;
              g({ ...k, offsetX: G, offsetY: Y });
            }
            (n(G => G), k.position === "inside" ? f("move") : f("resize"));
          }
        } else {
          const k = r.length,
            G = ug(k, D, L, D, L, d, A);
          (n(Y => [...Y, G]), g(G), f("draw"));
        }
      },
      O = H => {
        const { clientX: D, clientY: L } = H;
        if (d === "select") {
          const k = og(D, L, r);
          H.target.style.cursor = k ? ZC(k.position) : "default";
        }
        if (s === "draw") {
          const k = r.length - 1,
            { x1: G, y1: Y } = r[k];
          x(k, G, Y, D, L, d);
        } else if (s === "move")
          if (p.type === "paintbrush") {
            const k = p.points.map((Y, J) => ({ x: D - p.xOffsets[J], y: L - p.yOffsets[J] })),
              G = [...r];
            ((G[p.id] = { ...G[p.id], points: k }), n(G, !0));
          } else {
            const { id: k, x1: G, x2: Y, y1: J, y2: ue, type: fe, offsetX: ye, offsetY: le } = p,
              _e = Y - G,
              me = ue - J,
              Ae = D - ye,
              Se = L - le;
            x(k, Ae, Se, Ae + _e, Se + me, fe);
          }
        else if (s === "resize") {
          const { id: k, type: G, position: Y, ...J } = p,
            { x1: ue, y1: fe, x2: ye, y2: le } = KC(D, L, Y, J);
          x(k, ue, fe, ye, le, G);
        }
      },
      R = () => {
        if (p) {
          const H = p.id,
            { id: D, type: L } = r[H];
          if ((s === "draw" || s === "resize") && FC(L)) {
            const { x1: k, y1: G, x2: Y, y2: J } = XC(r[H]);
            x(D, k, G, Y, J, L);
          }
        }
        (f("none"), g(null));
      };
    return K.jsxs(K.Fragment, {
      children: [
        K.jsx("div", {
          className: "color",
          children: K.jsx(uC, {
            colors: [
              "#a5abe7",
              "#6fb7da",
              "#aebc89",
              "#f1d896",
              "#e67f6e",
              "#f384a9",
              "#7b75da",
              "#3984a3",
              "#598b7f",
              "#f1b376",
              "#bc5953",
              "#ed5689",
              "#363636",
              "#666",
              "#818589",
              "#A9A9A9",
              "#ccc",
              "#fff",
            ],
            color: A,
            onChange: H => m(H.hex),
          }),
        }),
        K.jsxs("div", {
          className: "toolbar",
          children: [
            K.jsx("input", {
              type: "radio",
              id: "paintbrush",
              checked: d === "paintbrush",
              onChange: () => v("paintbrush"),
              className: "tool",
            }),
            K.jsx("label", {
              htmlFor: "paintbrush",
              className: "tool__label",
              children: K.jsx("img", { src: O8, alt: "paintbrush icon", className: "toolbar__icon" }),
            }),
            K.jsx("input", { type: "radio", id: "line", checked: d === "line", onChange: () => v("line"), className: "tool" }),
            K.jsx("label", {
              htmlFor: "line",
              className: "tool__label",
              children: K.jsx("img", { src: M8, alt: "line icon", className: "toolbar__icon" }),
            }),
            K.jsx("input", {
              type: "radio",
              id: "rectangle",
              checked: d === "rectangle",
              onChange: () => v("rectangle"),
              className: "tool",
            }),
            K.jsx("label", {
              htmlFor: "rectangle",
              className: "tool__label",
              children: K.jsx("img", { src: R8, alt: "rectangle icon", className: "toolbar__icon" }),
            }),
            K.jsx("input", { type: "radio", id: "select", checked: d === "select", onChange: () => v("select"), className: "tool" }),
            K.jsx("label", {
              htmlFor: "select",
              className: "tool__label",
              children: K.jsx("img", { src: z8, alt: "select icon", className: "toolbar__icon" }),
            }),
            K.jsx("div", { className: "tool__divider" }),
          ],
        }),
        K.jsxs("div", {
          className: "canvas-tools",
          children: [
            K.jsx("div", { onClick: c, className: "canvas-tools__button", children: K.jsx("h2", { children: "clear" }) }),
            K.jsx("div", { onClick: u, className: "canvas-tools__button", children: K.jsx("h2", { children: "undo" }) }),
            K.jsx("div", { onClick: i, className: "canvas-tools__button", children: K.jsx("h2", { children: "redo" }) }),
          ],
        }),
        K.jsxs("nav", {
          className: "nav",
          children: [
            K.jsx(Pr, { to: "/", children: K.jsx("img", { src: n2, alt: "home icon", className: "nav__icon click" }) }),
            K.jsx(Pr, { to: "/about", children: K.jsx("img", { src: q8, alt: "about icon", className: "nav__icon click" }) }),
          ],
        }),
        K.jsx("canvas", {
          id: "canvas",
          width: window.innerWidth,
          height: window.innerHeight,
          onMouseDown: w,
          onMouseMove: O,
          onMouseUp: R,
          children: "Canvas",
        }),
      ],
    });
  };
function JC() {
  return K.jsx($C, {});
}
const Wu = "sharethis",
  IC = { display: "inline-block", width: "50px", height: "50px", position: "relative", overflow: "hidden", verticalAlign: "middle" },
  D8 = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
  WC = { ...D8, fillRule: "evenodd" },
  sg = { transition: "fill 170ms ease-in-out", fill: "transparent" },
  H8 = function () {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return new RegExp("(?:[/.]|^)($SOCIALS)([.]|$|/)".replace("$SOCIALS", r.join("|").replace(/\./gu, "\\.")), "u");
  },
  ku = new Map(),
  fg = new Set();
let j8 = H8();
function ne(r, n) {
  return (ku.set(r, n), fg.add(r), (j8 = H8([...fg].sort((u, i) => i.length - u.length))), n);
}
function ew(r) {
  return r ? (r.startsWith("mailto:") ? "mailto" : r.match(j8)?.[1] || Wu) : Wu;
}
const hg = Ee.forwardRef(function (n, u) {
  const {
      as: i = "a",
      href: c,
      url: s,
      network: f,
      bgColor: d,
      fgColor: v,
      className: p,
      label: g,
      children: A,
      fallback: m,
      defaultSVG: x,
      borderRadius: w = "50%",
      ...O
    } = n,
    R = f || ew(s),
    H = g || n["aria-label"] || R,
    D = (typeof m == "string" ? ku.get(m) : m || x) || ku.get(Wu),
    { color: L, path: k } = R === Wu ? D : ku.get(R) || {},
    G = typeof w != "string" ? "50%" : w;
  return Ee.createElement(
    i,
    { href: c || s, className: `social-icon${p ? ` ${p}` : ""}`, ...O, style: { ...IC, ...O.style }, "aria-label": H, ref: u },
    K.jsx("span", {
      className: "social-container",
      style: D8,
      children: K.jsxs("svg", {
        role: "img",
        "aria-label": `${H} social icon`,
        className: "social-svg",
        viewBox: "0 0 64 64",
        style: { ...WC, borderRadius: G },
        children: [
          K.jsx("g", {
            className: "social-svg-icon",
            style: { ...sg, fill: v || "white" },
            children: K.jsx("path", { d: `M0,0H64V64H0Z${k}` }),
          }),
          K.jsx("g", { className: "social-svg-mask", style: { ...sg, fill: d || L }, children: K.jsx("path", { d: k }) }),
        ],
      }),
    }),
    A,
  );
});
ne("auth0", {
  color: "#191919",
  path: "M0 0v64h64V0Zm34.088 16.287c3.965.307 7.705 1.604 9.787 2.45a2.73 2.73 0 0 1 1.707 2.523v8.164a.79.79 0 0 1-.92.776l-.77-.124c-5.246-.858-9.356-5.162-10.22-10.37l-.004-.003-.29-2.504c-.06-.393.202-.95.71-.912m-3.363.006c.507-.038.777.515.707.913l-.291 2.503c-.865 5.205-4.974 9.51-10.221 10.369v.004l-.77.124a.79.79 0 0 1-.92-.776v-8.164c0-1.107.676-2.104 1.707-2.522 2.086-.845 5.823-2.145 9.788-2.45m-10.82 15.92c.346 0 .762.12 1.019.149 7.168 1.403 10.496 6.133 10.496 15.089 0 .45-.45.758-.826.51-3.297-2.207-10.55-7.967-11.3-15.175-.014-.454.264-.574.61-.574m25.001 0c.347-.001.626.119.612.573-.75 7.208-8.005 12.968-11.301 15.175-.376.248-.826-.06-.826-.51 0-8.956 3.33-13.686 10.498-15.09.257-.028.67-.148 1.017-.149",
});
ne("bandsintown", {
  color: "#1B8793",
  path: "M0 0v64h64V0zm32.6 24.7h5.6v7.8h-5.6zm-6.8 0h5.6v7.8h-5.6zM44.9 46H19.1V18h5.6v22.4h14.6v-1.1H25.8v-5.6h19V46zm0-13.4h-5.6V18h5.6z",
});
ne("bsky.app", {
  color: "#1185fe",
  path: "M0 0v64h64V0Zm45.498 17.766a2.84 2.84 0 0 1 1.354.312c.578.296.932.915 1.103 1.92.085.513.046 2.326-.086 3.666-.013.125-.038.494-.064.822-.02.322-.054.696-.067.82-.013.125-.039.434-.058.69-.027.25-.06.585-.073.736-.02.158-.046.408-.066.559-.099.92-.118 1.07-.13 1.104-.014.02-.041.244-.067.494-.171 1.662-1.354 3.376-2.938 4.263-1.261.703-2.667 1.045-4.336 1.051-.801.007-.927.041-.447.133.94.17 2.005.518 2.86.945 2.247 1.11 3.041 2.747 2.331 4.778-.118.322-.25.636-.302.695-.053.052-.092.131-.092.164 0 .066-.617 1.025-.8 1.242-.06.072-.219.264-.35.428-.355.434-1.004 1.097-1.346 1.373-.164.131-.31.25-.33.27-.184.203-1.333.946-1.938 1.261-.808.42-1.425.591-2.135.598-.722.006-.953-.033-1.439-.256-1.386-.63-2.418-2.34-3.39-5.586-.421-1.426-.54-1.826-.598-2.082-.066-.276-.131-.218-.256.223-.381 1.38-1.117 3.344-1.623 4.363-.92 1.853-1.927 2.937-3.11 3.357-.499.178-1.45.166-2.029-.025-1.452-.486-2.899-1.623-4.357-3.443-1.426-1.774-2.116-3.292-2.037-4.475.046-.69.118-.933.447-1.426.302-.453.841-.914 1.44-1.236.426-.23 1.28-.584 1.609-.676.111-.026.375-.099.592-.158.216-.066.453-.126.525-.139.867-.17 1.255-.255 1.295-.281.026-.02-.302-.04-.723-.047-.42 0-.947-.026-1.164-.053-.453-.059-1.445-.276-1.642-.36a6 6 0 0 0-.46-.17c-1.241-.441-2.378-1.33-3.087-2.427-.316-.486-.659-1.221-.73-1.576a10 10 0 0 1-.19-1.123c-.027-.217-.054-.466-.067-.558a33 33 0 0 1-.197-1.873c-.026-.29-.053-.632-.066-.756a72 72 0 0 1-.073-.756c-.02-.29-.05-.631-.064-.756-.164-1.938-.172-3.68-.008-4.238.302-1.019.73-1.466 1.623-1.715.29-.08 1.157-.078 1.531.008 1.183.25 3.576 1.655 5.008 2.93.072.065.237.21.361.322.927.828 2.543 2.522 3.358 3.521.23.29.447.553.486.592.033.04.139.17.23.289.093.118.196.25.23.29.098.104 1.065 1.43 1.486 2.042.492.71 1.201 1.847 1.378 2.229.138.282.256.387.256.236 0-.105.836-1.485 1.434-2.365 1.866-2.76 4.257-5.488 6.353-7.262.566-.473.769-.63 1.63-1.22 1.648-1.126 2.937-1.676 4.015-1.688",
});
ne("behance", {
  color: "#007CFF",
  path: "M40.4 30.1q-.9 0-1.5.3c-.4.2-.7.4-.9.7s-.4.6-.5.9-.2.6-.2.9h6c-.1-.9-.4-1.6-.8-2.1-.5-.5-1.2-.7-2.1-.7m-14.9 2.7h-4.4v5.1h4.3c.4 0 .8 0 1.1-.1.4-.1.7-.2 1-.4s.5-.4.7-.7.2-.7.2-1.2c0-1-.3-1.6-.8-2-.5-.5-1.2-.7-2.1-.7m1.5-3.3c.5-.3.7-.9.7-1.7 0-.4-.1-.8-.2-1.1q-.3-.45-.6-.6-.45-.3-.9-.3c-.3-.1-.7-.1-1-.1h-3.8V30h4.1c.6.1 1.2-.1 1.7-.5M0 0v64h64V0zm36.6 23.8h7.5v1.8h-7.5zm-4.7 14.3c-.4.7-.9 1.2-1.5 1.7-.6.4-1.3.8-2.1 1q-1.2.3-2.4.3H17V22.6h8.7c.9 0 1.7.1 2.4.2.7.2 1.3.4 1.9.8.5.4.9.8 1.2 1.4s.4 1.3.4 2.2-.2 1.7-.6 2.3-1 1.1-1.9 1.5c1.1.3 2 .9 2.5 1.7.6.8.8 1.8.8 3 .1.9-.1 1.7-.5 2.4M47 35.3h-9.6c0 1.1.4 2.1.9 2.6s1.3.8 2.4.8c.7 0 1.4-.2 1.9-.6s.9-.8 1-1.2h3.2c-.5 1.6-1.3 2.8-2.4 3.4-1.1.7-2.4 1-3.9 1-1.1 0-2-.2-2.9-.5-.8-.3-1.6-.8-2.2-1.4s-1-1.4-1.4-2.2c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8.8-1.6 1.4-2.2 1.3-1.1 2.2-1.5c.8-.4 1.8-.5 2.8-.5 1.1 0 2.1.2 3 .7q1.2.6 2.1 1.8c.5.7.9 1.6 1.2 2.5.3.8.3 1.8.3 2.9",
});
ne("clubhouse", {
  color: "#1F1F1A",
  path: "M0 0v64.271h64.203V0zm32.694 15.453c1.277 0 2.24.566 2.804 1.842.824-.538 1.956-.738 2.92-.483 1.305.34 2.1 1.249 2.581 4.03.17.882.423 1.96.735 2.895.396 1.194.85 2.128 1.643 3.518.255.425.566.908.878 1.361l.256-.51c.764-1.562 2.268-3.093 4.45-3.093.937 0 1.956.34 2.522 1.305a3.04 3.04 0 0 1 .51 1.7c0 .737-.311 1.475-.566 2.042-.057.114-.084.17-.084.198-.652 1.36-1.53 3.066-1.53 5.05 0 5.76-2.127 8.71-3.77 10.242-1.674 1.562-4.28 2.893-7.313 2.893-2.152 0-4.393-.623-6.234-1.843-2.52-1.672-4.052-4.255-5.44-6.524-1.136-1.9-1.958-3.43-3.176-6.324-.708-1.617-1.36-3.293-1.897-5.079-.482-1.562-.228-2.696.393-3.433.625-.766 1.505-1.135 2.468-1.192.17 0 .34.001.51.03a6 6 0 0 1-.2-1.475c0-1.846 1.448-3.207 3.403-3.207.255 0 .51.028.736.085-.028-.312-.056-.567-.056-.822 0-2.016 1.644-3.206 3.457-3.206m0 1.704c-.822 0-1.812.424-1.812 1.502 0 .709.197 1.758.395 2.606.34.825.398 1.336.823 3.122.255 1.052.565 1.958.877 2.752.368.967.793 1.79 1.388 2.896.283.538.426.539 1.106.17.538-.284 1.33-.625 1.924-.824-1.02-2.211-1.869-4.057-2.294-5.616-.113-.454-.51-2.272-.623-3.066-.085-.794-.17-1.473-.368-2.21-.226-.908-.538-1.332-1.416-1.332m4.87 1.252c-.445-.004-.919.14-1.216.395-.312.283-.425.509-.34 1.132.142 1.364.368 2.414.623 3.406.595 2.325 1.585 4.142 2.095 5.22.17.368.313.511.596.483.397-.029.623-.058.878-.03.34.029.596.228.596.568 0 .283-.143.397-.653.51-1.048.227-2.38.595-3.684 1.333-1.107.626-2.07 1.392-2.948 2.498-.085.113-.172.17-.313.17-.198 0-.368-.227-.538-.454s-.283-.397-.283-.567c0-.199.085-.37.283-.624.312-.426.68-.737.68-.935 0-.142-.254-.482-.48-.879-.368-.68-.992-2.044-1.417-3.065-.651-1.56-1.105-3.546-1.36-4.766-.312-1.332-.794-1.702-1.53-1.702-1.02 0-1.698.595-1.698 1.503 0 .598.197 1.391.594 2.696.255.85.51 1.7.736 2.296a53 53 0 0 0 1.218 3.066c.368.822.906 1.787 1.16 2.269.142.255.397.68.397.935 0 .454-.338.708-.791.708-.255 0-.482-.113-.737-.51-.311-.457-.992-1.788-1.473-2.78-.369-.823-.992-2.3-1.304-3.32-.51-1.616-.85-2.24-1.727-2.213-.51.029-.936.2-1.247.568-.312.397-.339 1.02-.084 1.843.538 1.73 1.163 3.317 1.835 4.943 1.192 2.807 1.957 4.257 3.062 6.1 1.388 2.268 2.75 4.538 4.93 5.984 1.558 1.02 3.46 1.561 5.3 1.561 2.578 0 4.762-1.137 6.15-2.441 1.419-1.305 3.23-3.859 3.23-8.993 0-2.354 1.02-4.4 1.644-5.732.17-.34.537-1.049.537-1.56 0-.226-.055-.537-.197-.764-.255-.397-.652-.54-1.133-.54-1.504 0-2.468 1.136-3.006 2.128a7 7 0 0 0-.537 1.36c-.312 1.049-.624 1.475-1.53 2.212-.482.426-1.076.964-1.415 1.39-.567.767-.738 1.42-.88 2.44-.028.256-.51.369-1.104.369-.34 0-.453-.113-.453-.652 0-.567.198-1.418.623-2.183.595-1.05 1.246-1.617 1.898-2.156s.85-.765.963-1.105c-.595-.797-1.16-1.618-1.614-2.412-.822-1.446-1.36-2.526-1.784-3.83a25 25 0 0 1-.794-3.152c-.34-1.988-.679-2.497-1.33-2.667a1.8 1.8 0 0 0-.428-.054m-23.056.313c.206-.014.437.052.698.187.806.42 3.65 2.637 4.193 3.076.526.422.454.641.178 1.185-.275.544-.533.683-1.022.528-.978-.309-3.882-2.07-4.64-2.523-.684-.413-.773-.784-.296-1.689.264-.499.545-.742.889-.764m-1.79 9.45c.139-.014.296-.005.469.012.803.077 4.524.682 5.116.865.613.19.698.47.623 1.005-.095.696-.409.829-.81.841-.855.024-4.407-.129-5.218-.209-.706-.07-.992-.381-.915-1.404.062-.824.319-1.068.735-1.11m7.768 7.597c.308.018.54.218.713.653.255.637.08.89-.463 1.228-.6.372-3.78 2.04-4.499 2.305-.512.19-1.068.146-1.395-.824-.402-1.198.162-1.482.965-1.794.711-.275 3.66-1.344 4.345-1.53a1 1 0 0 1 .334-.038",
});
ne("codepen", {
  color: "#151515",
  path: "M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m.5-25.7q-.45-.3-.9 0l-9.1 5.9c-.2.2-.4.4-.4.7v6.2c0 .3.1.6.4.7l9.1 5.9q.45.3.9 0l9.1-5.9c.2-.2.4-.4.4-.7v-6.2c0-.3-.1-.6-.4-.7zm.3 2.2 6.8 4.5-3 2-3.7-2.5v-4zm-1.6 0v4L27.4 31l-3-2zm-7.4 6.1 2.1 1.4-2.1 1.4zm7.4 8.9L24.4 35l3-2 3.7 2.5v4zM32 34l-3-2 3-2 3 2zm.8 5.5v-4l3.7-2.5 3 2zm7.4-6.1L38.1 32l2.1-1.4z",
});
ne("dev.to", {
  color: "#000000",
  path: "M0 0h64v64H0Zm10.29 20.228v23.636h6.535c5.18.008 6.816-4.062 6.816-6.75V26.982c-.003-2.688-1.683-6.754-6.675-6.754zm18.637.004c-1.57.039-2.817 1.363-2.778 2.957v17.87c.04 1.595 1.348 2.856 2.918 2.813h8.762V39.65h-7.508v-5.49h4.59v-4.22h-4.59v-5.49h7.508v-4.218zm11.39 0 5.43 20.687c1.492 3.52 4.828 4.39 6.687 0l5.418-20.687h-4.59l-4.167 16.246-4.188-16.246zM14.74 24.65h2.457q.823 0 1.645.62.814.624.82 1.868v9.95c0 .827-.273 1.452-.82 1.866q-.82.621-1.641.621h-2.46z",
});
ne("developer.mozilla", {
  color: "#236ab4",
  path: "M0 0v64h64V0zm32 48.35h-3.69v-32.7l-10.15 32.7h-4.15l10.11-32.7H32zm18 0h-3.69v-32.7l-10.12 32.7h-4.15l10.11-32.7H50z",
});
ne("discord", {
  color: "#5865F2",
  path: "M0 0v64h64V0zm36.903 18.5a29.6 29.6 0 0 1 7.374 2.269c4.045 5.914 6.055 12.585 5.313 20.283a29.6 29.6 0 0 1-9.05 4.537 21.7 21.7 0 0 1-1.936-3.12 19.3 19.3 0 0 0 3.055-1.46 11 11 0 0 1-.747-.562 21.25 21.25 0 0 1-18.082 0c-.242.186-.492.377-.748.562a19 19 0 0 0 3.05 1.457 22 22 0 0 1-1.937 3.123 29.7 29.7 0 0 1-9.043-4.54c-.633-6.638.632-13.37 5.299-20.275a29.8 29.8 0 0 1 7.38-2.274q.522.935.944 1.92a27.5 27.5 0 0 1 8.183 0q.422-.985.945-1.92m-10.97 18.467c-1.762 0-3.218-1.6-3.218-3.568s1.405-3.581 3.213-3.581c1.807 0 3.252 1.614 3.222 3.581-.031 1.968-1.42 3.568-3.216 3.568m11.875 0c-1.765 0-3.216-1.6-3.216-3.568s1.406-3.581 3.216-3.581 3.244 1.614 3.213 3.581c-.03 1.968-1.417 3.568-3.213 3.568",
});
ne("dribbble", {
  color: "#ea4c89",
  path: "M34.3 34.3c-7.7 2.7-10.5 8-10.7 8.5 2.3 1.8 5.2 2.9 8.4 2.9 1.9 0 3.7-.4 5.3-1.1-.2-1.2-1-5.4-3-10.3.1-.1.1 0 0 0m-3-6.7c-2.3-4-4.7-7.4-5.1-7.9-3.8 1.8-6.7 5.3-7.6 9.6.6-.1 6.3 0 12.7-1.7m1.7 4.5c.2-.1.4-.1.5-.2-.3-.8-.7-1.6-1.1-2.3-6.8 2-13.4 2-14 1.9v.4c0 3.5 1.3 6.7 3.5 9.1.3-.4 4-6.6 11.1-8.9m8.1-10.3c-2.4-2.1-5.6-3.4-9.1-3.4-1.1 0-2.2.1-3.2.4.4.5 2.9 3.9 5.1 8 4.9-1.9 6.9-4.7 7.2-5m-6.2 7c.3.7.6 1.3.9 2 .1.2.2.5.3.7 4.5-.6 9.1.3 9.5.4 0-3.2-1.2-6.2-3.1-8.5-.2.4-2.5 3.3-7.6 5.4m2.1 4.8c1.8 4.9 2.5 8.9 2.7 9.7 3.1-2.1 5.2-5.4 5.9-9.2-.6-.1-4.3-1.2-8.6-.5M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16",
});
ne("dropbox", {
  color: "#1081DE",
  path: "M0 0v64h64V0zm41.5 41.2L32 46.9l-9.4-5.7v-2.1l2.8 1.8 6.6-5.5 6.6 5.5 2.8-1.8v2.1zm6.5-7.5-9.4 6.1-6.6-5.5-6.6 5.5-9.4-6.1 6.5-5.2-6.5-5.2 9.4-6.1 6.6 5.5 6.6-5.5 9.4 6.1-6.5 5.2zm-25.5-5.2 9.5 5.9 9.5-5.9-9.5-5.9z",
});
ne("facebook", {
  color: "#3b5998",
  path: "M0 0v64h64V0zm39.6 22h-2.8c-2.2 0-2.6 1.1-2.6 2.6V28h5.3l-.7 5.3h-4.6V47h-5.5V33.3H24V28h4.6v-4c0-4.6 2.8-7 6.9-7 2 0 3.6.1 4.1.2z",
});
ne("email", { color: "#7f7f7f", path: "M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z" });
ne("fivehundredpix", {
  color: "#222222",
  path: "M33.3 31.3c-.4-.2-.7-.4-1.1-.6-.3-.1-.8-.1-.9-.1-1.1 0-1.9.6-2.2 2.1v.9c0 .1.1.4.2.7.3.9 1.4 1.3 2.1 1.3s1.2-.2 1.9-.6c.5-.3 1-.7 1.4-1.1.2-.2.5-.5.5-.6.1-.5-1.5-1.7-1.9-2m9.5-.7c-1.3 0-2.4 1-3.8 2.6 1.3 1.5 2.6 2.3 3.9 2.3 1.5 0 2.2-1.1 2.2-2.4.1-1.4-.8-2.5-2.3-2.5M0 0v64h64V0zm42.9 38.5c-2 0-3.8-1-5.7-3.3-2.2 2.4-3.7 3.3-5.7 3.3-1.8 0-3.7-.7-4.8-3.1-1.2 2.5-3.3 3.2-5.1 3.2-1.6 0-3.8-.4-5-2.5-.1-.1-.6-1.3-.6-1.6v-.7h3c.1 1.6 1.3 2.2 2.4 2.2 1.3 0 2.4-.9 2.6-2.6v-.7c-.2-1.8-1.3-2.4-2.6-2.4-.8 0-1.6.2-2.3 1.2h-2.7v-.2l1.5-8h8.4v2.5h-6.2l-.6 3.3c1-.9 2-1.1 2.9-1.1 1.4 0 3.2.6 4.1 2.6 1-2.4 3-3.2 4.7-3.2 2 0 3.9 1 5.8 3.5 2.1-2.6 3.7-3.5 5.8-3.5 3.3 0 5.1 2.4 5.1 5.4.1 3.1-1.7 5.7-5 5.7",
});
ne("flickr", {
  color: "#0063db",
  path: "M38 27c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m-6-21c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5",
});
ne("foursquare", {
  color: "#0072b1",
  path: "M39.7 20.4H26.4c-.6 0-1 .5-1 1v20.5c0 .1 0 .1.1 0 0 0 4.9-5.9 5.4-6.5.5-.7.8-.8 1.6-.8H37c.6 0 1-.5 1-.8.1-.3.6-3 .7-3.6.1-.5-.4-1.1-.9-1.1h-5.5c-.7 0-1.2-.5-1.2-1.2v-.8c0-.7.5-1.2 1.2-1.2h6.4c.5 0 .9-.4 1-.8l.7-3.6c.2-.6-.2-1.1-.7-1.1M0 0v64h64V0zm44 20.9-1 5.2c-.8 4.2-1.8 9-1.9 9.5-.2.9-.6 2.4-2.7 2.4h-5.1c-.2 0-.2 0-.4.2-.1.1-7.9 9.2-7.9 9.2-.6.7-1.6.6-2 .4-.4-.1-1-.6-1-1.8V19.7c0-1.1.7-2.8 3-2.8h16.5c2.4.1 3.1 1.5 2.5 4",
});
ne("github", {
  color: "#24292e",
  path: "M0 0v64h64V0zm37.1 47.2c-.8.2-1.1-.3-1.1-.8V42c0-1.5-.5-2.5-1.1-3 3.6-.4 7.3-1.7 7.3-7.9 0-1.7-.6-3.2-1.6-4.3.2-.4.7-2-.2-4.2 0 0-1.3-.4-4.4 1.6-1.3-.4-2.6-.5-4-.5s-2.7.2-4 .5c-3.1-2.1-4.4-1.6-4.4-1.6-.9 2.2-.3 3.8-.2 4.2-1 1.1-1.6 2.5-1.6 4.3 0 6.1 3.7 7.5 7.3 7.9-.5.4-.9 1.1-1 2.1-.9.4-3.2 1.1-4.7-1.3 0 0-.8-1.5-2.5-1.6 0 0-1.6 0-.1 1 0 0 1 .5 1.8 2.3 0 0 .9 3.1 5.4 2.1v2.7c0 .4-.3.9-1.1.8-6.3-2-10.9-8-10.9-15.1 0-8.8 7.2-16 16-16s16 7.2 16 16c0 7.1-4.6 13.1-10.9 15.2",
});
ne("google", {
  color: "#dd4b39",
  path: "M0 0v64h64V0zm31.3 19.1q.45.45.9 1.2c.3.4.5.9.7 1.5q.3.9.3 2.1c0 1.4-.3 2.6-.9 3.4l-.9 1.2c-.4.4-.8.7-1.2 1.1-.2.2-.5.5-.7.8s-.4.7-.4 1.1.1.8.4 1c.2.3.4.5.6.7l1.4 1.1c.8.7 1.6 1.5 2.2 2.3s.9 2 .9 3.3c0 1.9-.9 3.7-2.6 5.2-1.8 1.6-4.3 2.4-7.7 2.4q-4.2 0-6.3-1.8-2.1-1.65-2.1-3.9c0-.7.2-1.6.7-2.5q.6-1.35 2.4-2.4c1.3-.7 2.7-1.2 4.1-1.5 1.4-.2 2.6-.3 3.5-.4-.3-.4-.5-.8-.8-1.2s-.4-.9-.4-1.5c0-.4 0-.6.2-.9.1-.2.2-.5.2-.7-.5.1-.9.1-1.3.1-2.1 0-3.8-.7-4.9-2-1.2-1.2-1.8-2.7-1.8-4.3 0-2 .8-3.8 2.5-5.4 1.1-.9 2.3-1.6 3.5-1.8s2.3-.4 3.4-.4h8L33 18.4h-2.5c.2.2.5.4.8.7M48 32h-4.3v4.2h-2.5V32H37v-2.5h4.2v-4.3h2.5v4.3H48zM27.1 19.1c-.6-.5-1.4-.7-2.2-.7-1.1 0-2 .5-2.7 1.3q-.9 1.35-.9 3c0 1.5.4 3 1.3 4.5.4.7.9 1.4 1.6 1.9.6.5 1.4.8 2.2.8 1.1 0 1.9-.4 2.6-1.1.3-.5.6-1 .7-1.6.1-.5.1-1 .1-1.4q0-2.4-1.2-4.8c-.4-.8-.9-1.5-1.5-1.9m-.2 17.1c-.2 0-.7 0-1.6.1-.8.1-1.7.3-2.5.6-.2.1-.5.2-.9.4s-.7.4-1.1.7q-.6.45-.9 1.2c-.3.5-.4 1.1-.4 1.8 0 1.4.6 2.6 1.9 3.5 1.2.9 2.9 1.4 5 1.4 1.9 0 3.3-.4 4.3-1.3 1-.8 1.5-1.8 1.5-3.1 0-1-.3-1.9-1-2.7-.7-.7-1.8-1.6-3.3-2.6z",
});
ne("gitlab", {
  color: "#f96424",
  path: "M0 0v64h64V0zm50.402 32.559-1.969-6.066v.007-.011L44.52 14.454a1.54 1.54 0 0 0-1.476-1.055c-.68.004-1.25.422-1.461 1.062l-3.715 11.426h-11.72l-3.722-11.426a1.52 1.52 0 0 0-1.46-1.062h-.009c-.664 0-1.257.422-1.472 1.062L15.58 26.488v.004s0 .004-.004.008q.005-.007.004-.008l-1.98 6.067c-.297.914.027 1.91.805 2.476l17.082 12.402q.006-.001.007.004c.008.004.016.012.024.016-.008-.004-.012-.012-.02-.016l.004.004h.004q.035.028.082.051l.008.008h.004l.004.004h.008q0 .005.003.004c.004 0 .004.004.008.004q.024.009.047.02.022.006.043.015v.004h.008q.006.004.012.003h.004c0 .004.007.004.011.004h.004q.03.011.063.016.012.007.023.008h.004l.008.004h.015q.004-.001.008.004h.004q.061.006.121.007h.004q.061 0 .121-.007h.004q.006-.005.012-.004h.012q.007-.002.007-.004h.004l.028-.008.062-.016h.004q.006.001.012-.004h.004s.004 0 .008-.003h.007v-.004c.016-.004.032-.012.047-.016l.043-.02.008-.003h.004q.004-.005.008-.004l.008-.004.011-.008q.042-.023.082-.05.002.001.004-.005h.004q.004-.005.008-.004L49.6 35.035a2.21 2.21 0 0 0 .8-2.476zm-7.352-16.98 3.352 10.309h-6.7zm2.766 12.051-1.367 1.75-10.086 12.91 4.77-14.66zM31.171 47.001q.005.004.004.008.001-.004-.004-.008m-1.527-4.707L18.199 27.63h6.68zm-8.688-26.715 3.356 10.309h-6.703zm-5.523 18.047a.47.47 0 0 1-.172-.527l1.473-4.512 10.773 13.805zM31.46 47.415q-.006-.007-.012-.008v-.004q-.013-.008-.02-.015-.022-.018-.039-.036c.004 0 .004.004.004.004s.004 0 .004.004c.028.024.051.047.078.067h.004s0 .004.004.004c-.008-.004-.015-.012-.023-.016m.543-3.504-2.805-8.625-2.484-7.656H37.3zm.574 3.477q-.013.008-.02.015-.004-.001-.003.004a.01.01 0 0 0-.008.008c-.008.004-.016.012-.024.016 0 0 0-.004.004-.004a1 1 0 0 0 .078-.067l.004-.004s.004 0 .004-.003zm15.996-13.762-12.074 8.761L47.28 28.59l1.465 4.508a.47.47 0 0 1-.172.528",
});
ne("google_play", {
  color: "#40BBC1",
  path: "M0 0v64h64V0zm40.4 27.1-3.6 3.6-12.3-12.3zM22 44.5V19.4c0-.4.1-.7.2-.9L35.6 32 22.2 45.4c-.1-.2-.2-.5-.2-.9m2.4 1.1 12.4-12.4 3.6 3.6zm22.7-12.4-5 2.8-4-4 3.9-3.9 5.1 2.8c1.2.5 1.2 1.6 0 2.3",
});
ne("groupme", {
  color: "#00aff0",
  path: "M0 0v64h64V0zm40.321 39.434a10.4 9.517 0 0 1-16.64 0 2.6 2.38 0 1 0-4.161 2.856 15.6 14.276 0 0 0 24.961 0 2.6 2.38 0 0 0-4.16-2.856m-17.42-12.848a2.6 2.38 0 0 0 0 4.759h1.3v1.19a2.6 2.38 0 0 0 5.2 0v-1.19h5.2v1.19a2.6 2.38 0 0 0 5.2 0v-1.19h1.3a2.6 2.38 0 0 0 0-4.759h-1.3v-4.758h1.3a2.6 2.38 0 0 0 0-4.759h-1.3v-1.19a2.6 2.38 0 0 0-5.2 0v1.19h-5.2v-1.19a2.6 2.38 0 0 0-5.2 0v1.19h-1.3a2.6 2.38 0 0 0 0 4.759h1.3v4.758zm6.5-4.758h5.2v4.758h-5.2z",
});
ne("hashnode", {
  color: "#2962FF",
  path: "M0 0v64h64V0zm15 24c-4.4 4.4-4.4 11.5 0 15.9l9.7 9.7c4.4 4.4 11.5 4.4 15.9 0l9.7-9.7c4.4-4.4 4.4-11.5 0-15.9l-9.7-9.7c-4.4-4.4-11.5-4.4-15.9 0zm22.3 13.5c3.1-3.1 3.1-8.1 0-11.1-3.1-3.1-8.1-3.1-11.1 0-3.1 3.1-3.1 8.1 0 11.1 3.1 3.1 8.1 3.1 11.1 0",
});
ne("instagram", {
  color: "#e94475",
  path: "M0 0v64h64V0zm39.88 25.89c.98 0 1.77-.79 1.77-1.77s-.79-1.77-1.77-1.77-1.77.79-1.77 1.77.79 1.77 1.77 1.77M32 24.42c-4.18 0-7.58 3.39-7.58 7.58s3.4 7.58 7.58 7.58 7.58-3.4 7.58-7.58-3.4-7.58-7.58-7.58m0 12.5c-2.72 0-4.92-2.2-4.92-4.92s2.2-4.92 4.92-4.92 4.92 2.2 4.92 4.92-2.2 4.92-4.92 4.92m0-17.02c3.94 0 4.41.02 5.96.09 1.45.06 2.23.3 2.75.51.69.27 1.18.58 1.7 1.1.51.52.83 1.01 1.1 1.7.2.52.44 1.3.51 2.74.07 1.56.09 2.02.09 5.97 0 3.94-.02 4.4-.09 5.96-.07 1.44-.31 2.22-.51 2.74-.27.69-.59 1.19-1.1 1.7-.52.52-1.01.84-1.7 1.1-.52.2-1.3.45-2.75.51-1.55.07-2.02.09-5.96.09s-4.41-.02-5.96-.09c-1.45-.06-2.23-.3-2.75-.51-.69-.27-1.18-.58-1.7-1.1-.51-.51-.83-1.01-1.1-1.7-.2-.52-.44-1.3-.51-2.74-.07-1.56-.09-2.02-.09-5.96 0-3.95.02-4.41.09-5.97.07-1.44.31-2.22.51-2.74.27-.69.59-1.18 1.1-1.7.52-.52 1.01-.84 1.7-1.1.52-.2 1.3-.45 2.75-.51 1.55-.08 2.02-.09 5.96-.09m0-2.66c-4.01 0-4.51.02-6.09.09-1.57.07-2.64.32-3.58.68-.97.38-1.79.89-2.61 1.71s-1.33 1.65-1.71 2.61c-.36.94-.61 2.01-.68 3.59-.07 1.57-.09 2.07-.09 6.08s.02 4.51.09 6.09c.07 1.57.32 2.64.68 3.58.38.98.89 1.8 1.71 2.62s1.65 1.32 2.61 1.7c.94.37 2.01.62 3.59.69 1.57.07 2.07.09 6.09.09 4.01 0 4.51-.02 6.08-.09s2.65-.32 3.59-.69c.97-.37 1.79-.88 2.61-1.7s1.33-1.65 1.71-2.62c.36-.93.61-2.01.68-3.58.07-1.58.09-2.08.09-6.09s-.02-4.51-.09-6.09c-.07-1.57-.32-2.64-.68-3.58-.38-.98-.89-1.8-1.71-2.62a7.3 7.3 0 0 0-2.61-1.7c-.94-.37-2.01-.62-3.59-.69-1.58-.06-2.08-.08-6.09-.08",
});
ne("itch.io", {
  color: "#fa5c5c",
  path: "M0 0v64h64V0zm32 16c4.482 0 7.49.028 11.828.197 1.396.921 4.146 4.435 4.172 5.356v1.523c0 1.933-1.624 3.631-3.1 3.631-1.771 0-3.248-1.631-3.248-3.568 0 1.937-1.425 3.568-3.197 3.568-1.771 0-3.152-1.631-3.152-3.568 0 1.937-1.516 3.568-3.287 3.568h-.032c-1.771 0-3.287-1.631-3.287-3.568 0 1.937-1.38 3.568-3.152 3.568s-3.197-1.631-3.197-3.568c0 1.937-1.477 3.568-3.248 3.568-1.476 0-3.1-1.698-3.1-3.63v-1.524c.026-.921 2.776-4.434 4.172-5.356C21.407 16.077 27.518 16 32 16m-3.326 9.797a3.65 4.058 0 0 0 .619.892 3.716 4.13 0 0 0 2.602 1.178q.053 0 .105-.002l.107.002a3.716 4.13 0 0 0 2.602-1.178 3.65 4.058 0 0 0 .617-.892 3.655 4.063 0 0 0 .623.892c.669.727 1.585 1.178 2.596 1.178a3.714 4.129 0 0 0 2.601-1.178c.243-.263.427-.546.596-.875.169.33.404.611.647.875a3.717 4.132 0 0 0 2.601 1.178c.122 0 .25-.037.352-.076a66 66 0 0 1 .222 4.373l.002.006.008 1.73c-.027 3.46.307 11.21-1.373 13.116-2.603.674-7.395.982-12.201.984-4.806-.002-9.598-.31-12.201-.984-1.68-1.905-1.344-9.657-1.371-13.116.002-.666.005-1.147.008-1.73v-.006c.02-1.149.08-2.724.222-4.373.103.04.23.076.352.076a3.717 4.132 0 0 0 2.601-1.178c.243-.264.478-.545.647-.875.168.329.353.612.596.875a3.714 4.129 0 0 0 2.601 1.178c1.01 0 1.927-.45 2.596-1.178a3.655 4.063 0 0 0 .623-.892m9.324 3.84v.002h-.002c-1.058.002-1.997 0-3.162 1.414a24 24 0 0 0-2.834-.16 24 24 0 0 0-2.834.16c-1.165-1.413-2.104-1.412-3.162-1.414h-.002c-.5 0-2.5 0-3.893 4.35l-1.496 5.966c-1.109 4.44.354 4.549 2.18 4.553 2.708-.112 4.209-2.298 4.209-4.485 1.5.274 3.249.41 4.998.41s3.499-.136 4.998-.41c0 2.187 1.499 4.373 4.207 4.485 1.826-.004 3.29-.113 2.182-4.553l-1.496-5.967c-1.394-4.35-3.393-4.351-3.893-4.351M32 33.057s2.851 2.91 3.363 3.945l-1.865-.082v1.809c0 .084-.749.05-1.498.011-.75.039-1.498.073-1.498-.011v-1.81l-1.865.083c.512-1.034 3.36-3.943 3.363-3.945",
});
ne("itunes", {
  color: "#E049D1",
  path: "M0 0v64h64V0zm42.5 40c0 2.2-1.8 4-4 4h-2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h2.8c.8 0 1.4-.6 1.4-1.4v-11c0-.5-.4-.9-.9-.9h-.2l-12.1 2.4c-.4.1-.7.4-.7.9V43c0 2.2-1.8 4-4 4h-2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h2.8c.8 0 1.4-.6 1.4-1.4V21.3c0-.7.5-1.2 1.1-1.4l14.7-3h.3c.8 0 1.4.6 1.4 1.4z",
});
ne("leetcode", {
  color: "#E7A41F",
  path: "M0 0h64v64H0zm42.05 42.07a2.12 2.12 0 0 0-3.069-.005l-3.77 3.885a4.65 4.65 0 0 1-6.616.06l-6.758-6.84c-1.824-1.846-2.143-4.74-.56-6.49l6.21-6.625c1.664-1.84 5.04-2.061 6.97-.45l5.508 4.596c.932.779 2.299.628 3.052-.336s.607-2.377-.326-3.156l-5.507-4.596c-1.204-1.005-2.649-1.641-4.161-1.917L36.5 16.5c.85-.91.947-2.264.04-3.116a2.245 2.245 0 0 0-3.181.107l-9.043 9.499-6.063 6.7c-3.252 3.594-2.908 9.19.548 12.688l6.79 6.871a8.887 8.887 0 0 0 12.685-.12l3.77-3.886a2.3 2.3 0 0 0 .005-3.173m-14.396-6.016c0 1.24.971 2.244 2.17 2.244H45.83c1.198 0 2.17-1.005 2.17-2.244s-.972-2.244-2.17-2.244H29.824c-1.199 0-2.17 1.005-2.17 2.244",
});
ne("line.me", {
  color: "#4cc764",
  path: "M0 0h64v64H0Zm27.54 13.171a26 26 0 0 1 6.17-.319c3.058.196 5.992.9 8.776 2.19 3.394 1.572 6.257 3.797 8.336 6.945 1.942 2.94 2.79 6.171 2.425 9.69-.286 2.758-1.398 5.185-3.046 7.382s-3.614 4.082-5.734 5.811c-3.558 2.901-7.32 5.505-11.32 7.758-.463.26-.954.469-1.437.69a2.4 2.4 0 0 1-.457.14c-.9.212-1.32-.166-1.184-1.077.099-.663.247-1.32.322-1.986.062-.558.074-1.124.062-1.686-.01-.494-.3-.862-.747-1.026-.574-.211-1.166-.405-1.767-.504-4.812-.789-9.1-2.66-12.59-6.137-2.247-2.238-3.792-4.89-4.423-8.028-.762-3.794-.064-7.333 1.949-10.61 1.868-3.044 4.503-5.257 7.642-6.896 2.205-1.15 4.545-1.912 7.023-2.337m4.31 18.669v-2.078c.126.159.192.239.254.323 1.294 1.747 2.59 3.492 3.875 5.244.176.24.369.352.67.335.392-.022.787-.004 1.181-.006.414-.002.54-.12.541-.529q.003-4.543 0-9.085c0-.4-.133-.531-.542-.538-.394-.006-.788-.002-1.182-.001-.512.002-.618.107-.618.621v5.291c-.149-.192-.234-.299-.316-.409-1.28-1.73-2.563-3.458-3.837-5.193-.153-.209-.324-.318-.585-.313-.426.01-.852-.004-1.278.004-.369.008-.503.14-.504.51q-.006 4.575 0 9.15c.001.362.143.488.516.491q.639.005 1.279 0c.428-.002.545-.118.546-.555.002-1.066 0-2.132 0-3.263m12.106 1.473h-1.79v-1.558h.366q1.79.001 3.58-.001c.39 0 .52-.125.527-.514.008-.405.004-.81.001-1.216-.002-.507-.11-.614-.627-.614l-3.484-.002c-.123 0-.245-.012-.355-.018v-1.54h.38q1.773.001 3.546-.001c.409 0 .533-.124.539-.535q.01-.656-.001-1.312c-.006-.35-.137-.493-.486-.494q-2.925-.009-5.849 0c-.353 0-.48.14-.48.489q-.003 4.59 0 9.18c0 .356.125.479.484.48q2.907.003 5.816 0c.383 0 .51-.13.516-.525q.007-.624 0-1.248c-.003-.447-.122-.568-.574-.57-.681-.005-1.363-.002-2.109-.002m-26.32 1.893c.006.32.178.454.488.454 1.949-.002 3.898 0 5.847-.002.35 0 .476-.13.482-.486.006-.395.002-.79.002-1.184 0-.585-.087-.674-.66-.674l-3.451-.001c-.113 0-.226-.01-.365-.018v-7.159c0-.519-.106-.627-.612-.63q-.56-.003-1.118 0c-.515.001-.613.101-.613.622zm10.432-1.51v-7.606c0-.465-.117-.581-.589-.585q-.543-.002-1.085 0c-.58 0-.68.103-.681.693v8.756c0 .086-.004.171.002.256.024.286.163.451.468.45.468-.003.936.003 1.405-.002.34-.004.475-.144.478-.492.004-.468.001-.937.001-1.47z",
});
ne("linkedin", {
  color: "#007fb1",
  path: "M0 0v64h64V0zm25.8 44h-5.4V26.6h5.4zm-2.7-19.7c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1M46 44h-5.4v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V44h-5.4V26.6h5.2V29h.1c.7-1.4 2.5-2.8 5.1-2.8 5.5 0 6.5 3.6 6.5 8.3V44z",
});
ne("mailto", { color: "#7f7f7f", path: "M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z" });
ne("mastodon", {
  color: "#17063B",
  path: "M-.135-.135v64.541h64.678V-.134ZM31.91 16c4.394-.016 8.82.462 11.213 1.488 0 0 4.875 2.042 4.875 8.992 0 0 .064 5.126-.684 8.688-.477 2.26-4.218 4.734-8.515 5.213-1.54.17-7.13 1.013-13.686-.48q-.002.5.069.995c.507 3.546 3.767 3.76 6.861 3.86 3.123.093 5.646-.723 5.646-.723l.13 2.639s-1.924 1.093-5.815 1.295c-2.144.113-4.811-.05-7.912-.815C15.994 45.143 16 34.754 16 26.48c0-6.95 4.883-8.992 4.883-8.992 2.27-.96 6.633-1.472 11.027-1.488m-4.703 5.3c-1.505-.036-3.027.51-4.016 1.532-1.802 1.918-1.406 3.174-1.406 11.816h3.569v-7.513c0-3.518 4.882-3.651 4.882.49v4.354h3.537v-4.354c0-4.141 4.887-4.006 4.887-.488v7.515h3.56v-.004c0-8.636.404-9.883-1.406-11.816-1.962-2.032-6.087-2.196-7.927.43l-.883 1.383-.887-1.383c-.916-1.306-2.405-1.924-3.91-1.961",
});
ne("linktree", {
  color: "#39e09b",
  path: "M0 0v64h64V0zm27.436 19.386c-.6-.948-2.162-.948-2.762 0L14.344 35.83c-.48.843.24 1.792 1.322 1.792h6.966v6.218c0 .633.6 1.16 1.321 1.16h4.083c.721 0 1.321-.527 1.321-1.16v-6.218h-1.921c-.84 0-1.441-.527-1.562-1.16 0-.21 0-.421.12-.635l5.766-9.17zm9.128 0c.6-.948 2.162-.948 2.762 0l10.33 16.444c.48.843-.24 1.792-1.322 1.792h-6.846v6.218c0 .633-.6 1.16-1.322 1.16h-4.323c-.72 0-1.32-.527-1.32-1.16v-6.218h1.921c.84 0 1.441-.527 1.561-1.16 0-.21 0-.421-.12-.635L32.12 26.66z",
});
ne("matrix", {
  color: "#000000",
  path: "M0 0v64h64V0zm16 16h3.04v.732h-2.198v30.536h2.197V48H16zm28.96 0H48v32h-3.04v-.732h2.198V16.732h-2.197zM29.769 26.104c.72 0 1.377.143 1.974.42.598.277 1.046.775 1.36 1.476q.509-.749 1.378-1.322.87-.574 2.061-.574.904 0 1.68.222c.517.147.955.382 1.324.707.368.327.652.745.861 1.268q.306.783.307 1.89v7.637h-3.131V31.36q0-.573-.043-1.082a2.3 2.3 0 0 0-.24-.88 1.5 1.5 0 0 0-.584-.596q-.39-.222-1.047-.223-.665 0-1.07.252a1.84 1.84 0 0 0-.641.666 2.6 2.6 0 0 0-.309.928 7.4 7.4 0 0 0-.08 1.047v6.357h-3.132v-6.4c0-.339-.005-.67-.024-1.002a2.8 2.8 0 0 0-.191-.918 1.4 1.4 0 0 0-.553-.67c-.259-.167-.635-.254-1.139-.254q-.224 0-.586.1a2 2 0 0 0-.705.375q-.344.277-.586.793-.24.519-.24 1.36v6.622H23.28v-11.42h2.953v1.541h.045a4.4 4.4 0 0 1 1.49-1.365c.578-.327 1.249-.486 2-.486",
});
ne("meetup", {
  color: "#E51937",
  path: "M0 0v64h64V0zm47.8 44.3c-.4.2-2.5.9-3.9 1-.6.1-1.1-.6-1.4-1.5C41 39.2 39 32 37.3 27.2c0 3.7-.3 10.8-.4 12-.1 1.7-.4 3.7-1.8 3.9-1.1.2-2.4.4-4 .4-1.3 0-1.8-.9-2.4-1.8-1-1.4-3.1-4.8-4.1-6.9.3 2.3.7 4.7.9 5.8.1.8 0 1.5-.6 1.9-1 .7-3.2 1.4-4.1 1.4-.8 0-1.5-.8-1.6-1.6-.7-3.4-1.2-8-1.1-11.1 0-2.8 0-5.9.2-8.3 0-.7.3-1.1.9-1.4 1.2-.5 3-.6 4.7-.3.8.1 1 .8 1.4 1.4 1.7 2.8 3.8 6.7 5.7 10.6 0-6.3 1.9-11.9 3.5-15.3.5-1.1.9-1.4 1.9-1.4 1.3 0 2.9.2 4.1.4 1.1.2 1.5 1.6 1.7 2.5 1.2 4.5 4.7 18.7 5.5 22.4.1 1 .6 2.2.1 2.5",
});
ne("medium", {
  color: "#000000",
  path: "M0 0v64h64V0zm25.025 22.914c4.985 0 9.026 4.068 9.026 9.086s-4.041 9.086-9.026 9.086S16 37.018 16 32s4.041-9.086 9.025-9.086m14.413.531c2.492 0 4.511 3.83 4.511 8.555h.002c0 4.724-2.021 8.555-4.514 8.555-2.492 0-4.511-3.831-4.511-8.555s2.02-8.555 4.511-8.555m6.974.89C47.288 24.336 48 27.768 48 32c0 4.231-.711 7.664-1.588 7.664S44.826 36.232 44.826 32s.71-7.664 1.586-7.664",
});
ne("onlyfans", {
  color: "#00aeef",
  path: "M0-.006v64.012h64V-.006zm25.348 18.014a14 14 0 0 1 9.148 3.41c2.534-3.084 5.779-3.41 11.82-3.41h7.032c-1.176 5.179-5.229 9.138-12.264 10.5 3.557 1.024 7.756 0 7.756 0-1.22 5.32-5.083 8.65-10.654 9.056l-.063.12a14 14 0 0 1-.623 1.199 14 14 0 0 1-.357.63 14 14 0 0 1-.713.987 14 14 0 0 1-.526.674 14 14 0 0 1-.771.797 14 14 0 0 1-.696.66 14 14 0 0 1-.83.637 14 14 0 0 1-.822.578 14 14 0 0 1-.877.49 14 14 0 0 1-.943.475 14 14 0 0 1-.904.343 14 14 0 0 1-1.024.338 14 14 0 0 1-.935.207 14 14 0 0 1-1.077.188 14 14 0 0 1-.953.068 14 14 0 0 1-.724.053l.011-.035a14 14 0 1 1-.011-27.965m0 9.8a4.2 4.2 0 0 0 0 8.399 4.194 4.194 0 0 0 4.199-4.2 4.2 4.2 0 0 0-4.2-4.198",
});
ne("misskey", {
  color: "#86b300",
  path: "M0 0h64v64H0Zm16.97 18.07c-.57 0-1.13.1-1.66.29-.94.33-1.72.93-2.32 1.78-.58.83-.87 1.75-.87 2.78v18.16c0 1.33.47 2.47 1.41 3.44.97.94 2.12 1.41 3.44 1.41 1.36 0 2.5-.47 3.44-1.41.97-.97 1.45-2.12 1.45-3.44v-3.3c.01-.72.75-.53 1.12 0 .7 1.21 2.33 2.24 3.9 2.24s3.15-.86 3.9-2.24c.28-.33 1.08-.9 1.16 0v3.3c0 1.33.47 2.47 1.41 3.44.97.94 2.12 1.41 3.44 1.41 1.35 0 2.5-.47 3.44-1.41.97-.97 1.45-2.12 1.45-3.44V22.92c0-1.02-.3-1.95-.91-2.78-.58-.86-1.34-1.45-2.28-1.78-.55-.19-1.11-.29-1.66-.29-1.49 0-2.75.58-3.77 1.74l-4.92 5.76c-.11.08-.48.72-1.26.72s-1.1-.63-1.21-.72l-4.96-5.76c-1-1.16-2.24-1.74-3.74-1.74m30.68 0c-1.16 0-2.16.41-2.98 1.24q-1.2 1.2-1.2 2.94c0 1.16.4 2.16 1.2 2.98.83.8 1.82 1.2 2.98 1.2s2.16-.4 2.99-1.2c.83-.83 1.24-1.82 1.24-2.98s-.41-2.14-1.24-2.94c-.84-.83-1.83-1.24-2.99-1.24m.04 9.2c-1.16 0-2.16.41-2.99 1.24s-1.24 1.82-1.24 2.99v10.24c0 1.16.41 2.16 1.24 2.98.83.8 1.82 1.2 2.99 1.2q1.74 0 2.94-1.2c.83-.83 1.24-1.82 1.24-2.98V31.5c0-1.16-.41-2.16-1.24-2.99-.8-.82-1.78-1.24-2.94-1.24",
});
ne("opensea", {
  color: "#2081E2",
  path: "M0 0h64v64H0Zm33 12.8c.5 0 .956.204 1.281.536.326.332.528.787.528 1.293v3.101l.375.106q.046.014.086.043c.092.069.222.172.39.297.132.105.275.232.445.363.34.273.744.627 1.188 1.031.118.102.235.208.34.313a27 27 0 0 1 1.824 1.847c.171.194.337.391.508.598.17.21.354.418.512.625.207.276.427.56.62.86.093.14.2.288.29.43.25.377.469.768.68 1.16.088.18.178.376.257.57a8.5 8.5 0 0 1 .54 1.59c.035.115.06.24.074.351v.027c.039.158.053.326.066.496a5.3 5.3 0 0 1-.094 1.641c-.05.234-.112.454-.191.688-.08.223-.16.455-.262.675-.197.457-.43.913-.707 1.34a8 8 0 0 1-.297.485c-.115.167-.234.326-.34.48a10 10 0 0 1-.457.59 6 6 0 0 1-.445.559c-.22.26-.428.505-.648.742a7 7 0 0 1-.418.453c-.142.158-.287.298-.418.43-.22.22-.404.393-.559.535l-.363.332a.3.3 0 0 1-.196.07h-2.8v3.594h3.527c.789 0 1.536-.28 2.14-.793.208-.181 1.112-.96 2.18-2.14a.3.3 0 0 1 .137-.083l9.734-2.816a.287.287 0 0 1 .364.277v2.059c0 .118-.07.223-.176.27-.644.275-2.852 1.29-3.77 2.566-2.34 3.258-4.127 7.918-8.125 7.918H24.14c-5.91 0-10.699-4.808-10.699-10.739v-.191c0-.158.128-.285.286-.285h9.296c.184 0 .318.17.301.351a3.17 3.17 0 0 0 .332 1.785 3.27 3.27 0 0 0 2.934 1.82h4.605v-3.593h-4.55a.294.294 0 0 1-.239-.46c.05-.077.105-.154.164-.243a33 33 0 0 0 1.657-2.645c.417-.73.822-1.506 1.148-2.289a5 5 0 0 0 .172-.43c.089-.25.18-.48.246-.714.066-.198.12-.404.172-.598a9.3 9.3 0 0 0 .219-2.098 10 10 0 0 0-.04-.87c-.013-.313-.05-.626-.09-.938a10 10 0 0 0-.128-.836 14 14 0 0 0-.266-1.25l-.035-.156c-.079-.286-.146-.562-.238-.848a32 32 0 0 0-.871-2.59c-.115-.325-.248-.637-.38-.949-.193-.47-.393-.896-.574-1.3a18 18 0 0 1-.25-.524 17 17 0 0 0-.269-.574c-.066-.142-.143-.271-.195-.403l-.563-1.039a.183.183 0 0 1 .207-.265l3.52.953h.008l.011.004.465.128.512.145.187.05v-2.09c0-1.008.805-1.827 1.805-1.827m-8.488 6.903a.28.28 0 0 1 .238.168c1.39 3.117 2.59 6.993 2.027 9.406-.24.993-.897 2.34-1.636 3.582q-.145.272-.313.528a.28.28 0 0 1-.234.125H16.03a.284.284 0 0 1-.242-.438l.137-.215 8.324-13.023a.28.28 0 0 1 .262-.133",
});
ne("patreon", {
  color: "#000000",
  path: "M0 0h64v64H0Zm52.853 23.459c-.008-5.72-4.462-10.41-9.69-12.1-6.492-2.1-15.053-1.796-21.252 1.127-7.511 3.546-9.871 11.312-9.959 19.055-.07 6.369.564 23.139 10.022 23.259 7.03.088 8.077-8.969 11.328-13.33 2.314-3.104 5.294-3.979 8.96-4.886 6.303-1.562 10.6-6.536 10.591-13.125m0 0",
});
ne("pixiv", {
  color: "#0097fa",
  path: "M0 0v64h64V0zm33.553 16.469c-11.844 0-19.903 9.146-19.903 9.146l2.27 3.606s1.26.106.592-2.018c.573-1.086 1.698-2.545 3.892-4.232v24.008c-.946.268-2.194.768-1.34 1.623h6.518c.86-.861-.493-1.38-1.32-1.623v-5.663s4.469 1.756 9.29 1.756c4.234 0 8.088-1.26 10.954-3.537 2.869-2.264 4.712-5.642 4.703-9.506a12.75 12.75 0 0 0-4.41-9.709c-2.793-2.438-6.705-3.847-11.246-3.847zm-.397 2.027c3.601.003 6.425 1.36 8.338 3.43 1.907 2.075 2.948 4.83 2.957 8.04-.012 3.126-1.124 5.698-3.107 7.673-1.98 1.959-4.864 3.195-8.188 3.195h-.021c-3.699 0-6.816-.72-8.873-1.732V21.088c2.261-1.605 5.928-2.598 8.894-2.592",
});
ne("pinterest", {
  color: "#cb2128",
  path: "M0 0v64h64V0zm32 48c-1.6 0-3.1-.2-4.5-.7.6-1 1.3-2.2 1.6-3.4.2-.7 1.1-4.4 1.1-4.4.6 1.1 2.2 2 3.9 2 5.1 0 8.6-4.7 8.6-11 0-4.7-4-9.2-10.1-9.2-7.6 0-11.4 5.5-11.4 10 0 2.8 1 5.2 3.3 6.1.4.1.7 0 .8-.4.1-.3.2-1 .3-1.3.1-.4.1-.5-.2-.9-.6-.8-1.1-1.7-1.1-3.1 0-4 3-7.7 7.9-7.7 4.3 0 6.7 2.6 6.7 6.1 0 4.6-2 8.5-5.1 8.5-1.7 0-2.9-1.4-2.5-3.1.5-2 1.4-4.2 1.4-5.7 0-1.3-.7-2.4-2.2-2.4-1.7 0-3.1 1.8-3.1 4.1 0 1.5.5 2.5.5 2.5s-1.8 7.4-2.1 8.7c-.3 1.2-.3 2.6-.3 3.7C19.9 44.2 16 38.6 16 32c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16",
});
ne("ravelry", {
  color: "#EE6E62",
  path: "M0 0h64v64H0Zm42.692 28.943s-2.184-.397-3.752-.397c-3.584 0-4.424 1.987-4.424 4.939v12.488H24.83V20.542h9.687v4.257c1.176-3.576 3.528-4.825 8.176-4.825z",
});
ne("rdio", {
  color: "#0475C5",
  path: "M0 0v64h64V0zm43.9 30.5c.1.5.1 1 .1 1.5 0 6.4-5.1 11.6-12 11.6s-12-5.1-12-11.5V32c0-6.4 5.1-11.6 12-11.6 1.2 0 2.3.2 3.4.5v6.8l-.6-.3c-3-1-6.2.4-7.7 2.9v.1c-1.5 2.5-.8 5.3 2.1 6.3 3 1 6.2-.4 7.7-2.9v-.1c.5-.8.8-1.7.8-2.6v-9.3c.2.1.3.2.5.3.1.1.3.2.4.2 1.5 1 5.4 3.5 8.7 3.4 1.7.1.2 3.8-3.4 4.8",
});
ne("reddit", {
  color: "#FF4500",
  path: "M0 0v64h64V0zm53.344 32a4.67 4.67 0 0 0-7.903-3.2 22.77 22.77 0 0 0-12.32-3.937L35.2 14.88l6.848 1.441a3.2 3.2 0 0 0 3.02 2.852 3.2 3.2 0 1 0-2.602-4.805l-7.84-1.566a1 1 0 0 0-.754.136.98.98 0 0 0-.43.63l-2.37 11.105a22.8 22.8 0 0 0-12.477 3.937 4.672 4.672 0 1 0-5.152 7.648q-.06.704 0 1.407c0 7.168 8.351 12.992 18.656 12.992 10.3 0 18.656-5.824 18.656-12.992a9.4 9.4 0 0 0 0-1.406A4.68 4.68 0 0 0 53.344 32m-32 3.2a3.198 3.198 0 1 1 6.398 0 3.195 3.195 0 0 1-3.199 3.198c-1.766 0-3.2-1.43-3.2-3.199M39.938 44a12.3 12.3 0 0 1-7.907 2.465A12.3 12.3 0 0 1 24.13 44a.87.87 0 0 1 .055-1.16.87.87 0 0 1 1.16-.055A10.48 10.48 0 0 0 32 44.801a10.5 10.5 0 0 0 6.688-1.953.9.9 0 0 1 1.265.015.9.9 0 0 1-.016 1.266Zm-.579-5.473a3.2 3.2 0 0 1-3.199-3.199 3.198 3.198 0 1 1 6.398 0 3.2 3.2 0 0 1-3.23 3.328Zm0 0",
});
ne("sharethis", {
  color: "#00BF00",
  path: "M0 0h64v64H0zm28.388 32c0 .084-.02.163-.025.247l8.802 4.4a4.3 4.3 0 0 1 2.782-1.037 4.335 4.335 0 0 1 4.335 4.335 4.335 4.335 0 1 1-8.67 0c0-.086.02-.163.025-.247l-8.802-4.4a4.3 4.3 0 0 1-2.782 1.034 4.335 4.335 0 0 1 0-8.67c1.065 0 2.027.402 2.782 1.037l8.802-4.4c-.005-.083-.024-.162-.024-.249a4.333 4.333 0 0 1 4.334-4.332 4.335 4.335 0 0 1 0 8.67 4.28 4.28 0 0 1-2.782-1.04l-8.802 4.403c.005.084.024.163.024.25",
});
ne("rss", {
  color: "#EF8733",
  path: "M0 0v64h64V0zm24 44c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4m11-1c-1.1 0-2-.9-2-2 0-5.5-4.5-10-10-10-1.1 0-2-.9-2-2s.9-2 2-2c7.7 0 14 6.3 14 14 0 1.1-.9 2-2 2m9 0c-1.1 0-2-.9-2-2 0-10.5-8.5-19-19-19-1.1 0-2-.9-2-2s.9-2 2-2c12.7 0 23 10.3 23 23 0 1.1-.9 2-2 2",
});
ne("slack", {
  color: "#4A164A",
  path: "M0 0v64h64V0Zm12.636 37.56c0 5.066 8 5.066 8 0v-3.8h-4c-2.209 0-4 1.7-4 3.8m25.28-6.346c2.21 0 4-1.702 4-3.8V17.287c0-5.066-8-5.066-8 0v10.127c0 2.113 1.815 3.82 4.04 3.8zm14.64-3.8c0-5.067-8-5.067-8 0v3.8h4c2.24.042 4.08-1.672 4.08-3.8zm-25.24 6.345c-2.209 0-4 1.702-4 3.8v10.127c0 5.067 8 5.067 8 0V37.559c0-2.098-1.79-3.8-4-3.8m10.64 10.127h-4v3.8c0 3.386 4.309 5.08 6.829 2.687s.735-6.487-2.829-6.487m10.68-10.127h-10.68c-5.324.009-5.324 7.592 0 7.6h10.68c5.325-.008 5.325-7.591 0-7.6m-21.32-10.145h-10.68c-5.342-.008-5.342 7.608 0 7.6h10.68c5.325-.009 5.325-7.592 0-7.6m0-10.127c-5.324.008-5.324 7.592 0 7.6h4v-3.8c0-2.126-1.804-3.8-4-3.8",
});
ne("smugmug", {
  color: "#8cca1e",
  path: "M0 0v64h64V0zm36.1 19.8c.2-1.3 1.3-2.6 3.2-2.8 2.4-.2 3.8 1.3 3.8 2.8 0 1.3-1.2 2.6-3.8 2.8-2.4.1-3.4-1.3-3.2-2.8m-13.6.4c.2-1.4 1.4-2.8 3.3-2.8 2.3 0 3.5 1.1 3.6 2.4.2 1.5-1.1 3.1-3.9 3.1-2.4.1-3.2-1.3-3-2.7M28.8 47c-10.9 0-12-17.5-6.9-17.5 12.1-.3 12.5-.3 19-1C51.7 27.4 39.2 47 28.8 47m11.5-15.4c-3.9 0-6.8.5-17.8.9-1.6.1-2.9 11.4 6.6 11.4 7.5 0 15.2-12.3 11.2-12.3",
});
ne("snapchat", {
  color: "#FFC91B",
  path: "M0 0v64h64V0zm47.927 39.545c-.326.76-1.702 1.318-4.21 1.707-.083.113-.17.511-.223.754a11 11 0 0 1-.183.743c-.104.357-.367.554-.74.554h-.037a4 4 0 0 1-.723-.089 8.5 8.5 0 0 0-1.706-.181c-.397 0-.809.034-1.222.103-.809.135-1.496.62-2.293 1.184-1.139.805-2.43 1.718-4.392 1.718-.088 0-.171-.003-.234-.006a2 2 0 0 1-.162.006c-1.962 0-3.253-.912-4.393-1.718-.796-.562-1.483-1.048-2.292-1.183a7.5 7.5 0 0 0-1.223-.103c-.716 0-1.288.112-1.706.193-.278.055-.519.102-.723.102-.505 0-.701-.308-.776-.565-.077-.262-.131-.51-.183-.751-.053-.244-.14-.644-.224-.758-2.507-.389-3.884-.948-4.21-1.711a.9.9 0 0 1-.071-.298.664.664 0 0 1 .555-.692c4.349-.716 6.308-5.181 6.389-5.371l.015-.032c.232-.471.284-.866.154-1.172-.251-.592-1.177-.885-1.789-1.08-.17-.054-.331-.105-.464-.157-1.482-.585-1.688-1.258-1.601-1.719.122-.64.903-1.07 1.555-1.07q.284 0 .507.104c.557.261 1.053.394 1.472.394.314 0 .513-.075.622-.136l-.048-.779c-.136-2.173-.307-4.877.403-6.469 2.111-4.732 6.585-5.1 7.905-5.1l.554-.005.078-.001h.001c1.324 0 5.807.368 7.919 5.103.711 1.593.54 4.299.403 6.474l-.006.092-.042.685c.099.055.272.121.537.134.4-.018.863-.149 1.379-.391.219-.103.454-.124.613-.124.232 0 .468.045.667.128l.002.001c.592.212.965.638.974 1.117.011.609-.533 1.135-1.617 1.564-.132.052-.293.103-.465.158-.612.194-1.538.488-1.788 1.079-.13.306-.079.701.154 1.172l.015.032c.081.189 2.038 4.654 6.389 5.371a.664.664 0 0 1 .555.691.9.9 0 0 1-.071.298",
});
ne("soundcloud", {
  color: "#FF5700",
  path: "M0 0v64h64V0zm18.5 36.3c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2v-4.9c0-.6.6-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1zm4.9 1.2c0 .7-.6 1.2-1.2 1.2s-1.2-.5-1.2-1.2V29c0-.6.6-1.1 1.2-1.1s1.2.5 1.2 1.1zm5 0c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V26.2c0-.6.6-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1zm15.2 1.2H31.4c-.3 0-.5-.2-.5-.5V24.3c0-.3.1-.4.4-.5.9-.3 1.8-.5 2.8-.5 4 0 7.4 3.1 7.7 7.1.5-.2 1.1-.3 1.7-.3 2.4 0 4.4 2 4.4 4.4.1 2.3-1.9 4.2-4.3 4.2",
});
ne("spotify", {
  color: "#2EBD59",
  path: "M39 37.7c-4.2-2.6-9.4-3.2-15.5-1.8-.5.1-.9.7-.8 1.2s.7.9 1.2.7q8.4-1.95 14.1 1.5c.5.3 1.1.1 1.4-.3.2-.4.1-1-.4-1.3m1.9-4.7c-4.9-3-12.2-3.9-18-2.1-.7.2-1 .9-.8 1.6s.9 1 1.6.8c5.1-1.5 11.6-.8 15.9 1.9.6.4 1.4.2 1.7-.4.4-.7.2-1.4-.4-1.8M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m11-20.4c-5.9-3.5-15.3-3.9-21-2.1-.8.2-1.2 1.1-1 1.9s1.1 1.2 1.9 1c4.9-1.5 13.4-1.2 18.6 1.9.7.4 1.6.2 2.1-.5.3-.8.1-1.8-.6-2.2",
});
ne("squarespace", {
  color: "#1C1C1C",
  path: "M0 0v64h64V0zm39.6 21.1c.6.6.6 1.6 0 2.2s-1.6.6-2.2 0c-1.2-1.2-3.2-1.2-4.4 0l-9.8 9.8c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2l9.8-9.8c2.5-2.4 6.4-2.4 8.8 0M17.8 36.4c-2.4-2.4-2.4-6.3 0-8.7l7.5-7.5c1.2-1.2 3.2-1.2 4.4 0L20 29.8c-1.2 1.2-1.2 3.2 0 4.4s3.2 1.2 4.4 0l9.8-9.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-9.8 9.8c-2.5 2.4-6.4 2.4-8.8 0m6.6 6.5c-.6-.6-.6-1.6 0-2.2s1.6-.6 2.2 0c1.2 1.2 3.2 1.2 4.4 0l9.8-9.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-9.8 9.8c-2.5 2.4-6.4 2.4-8.8 0m21.8-6.5-7.5 7.5c-1.2 1.2-3.2 1.2-4.4 0l9.6-9.6c1.2-1.2 1.2-3.2 0-4.4s-3.2-1.2-4.4 0l-9.8 9.8c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2l9.8-9.8c2.4-2.4 6.3-2.4 8.7 0 2.6 2.3 2.6 6.3.2 8.7",
});
ne("stackoverflow", {
  color: "#ed803d",
  path: "M64 0v64H0V0zM46.145 37.265H42.8v10.038H19.376V37.265H16.03V50.65h30.115zm-6.688 2.46L23.023 36.27l.69-3.287 16.435 3.456zm.964-4.234-15.224-7.09 1.418-3.045 15.224 7.09zm1.895-3.811L29.41 20.932l2.15-2.58 12.906 10.747zm-7.27-16.688 2.695-2.004 10.022 13.476-2.695 2.004zm4.407 28.965H22.722v-3.346h16.73z",
});
ne("t.me", {
  color: "#49a9e9",
  path: "M0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0",
});
ne("telegram", {
  color: "#49a9e9",
  path: "M0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0",
});
ne("substack", {
  color: "#ff6719",
  path: "M0 0h64v64H0Zm20.098 18.477v3.195h23.805v-3.195zm0 6.075v3.24h23.805v-3.24zm0 6.075v14.895c.972-.28 1.95-1.042 2.835-1.536l5.94-3.317c.735-.411 1.472-.818 2.205-1.234.239-.136.644-.475.925-.47.278.005.681.346.919.482q1.03.588 2.07 1.157c2.094 1.149 4.162 2.343 6.256 3.492.809.445 1.754 1.221 2.655 1.426V30.627z",
});
ne("threads", {
  color: "#000000",
  path: "M0 0v64h64V0zm32.28 15.75h.02c3.718.026 6.827.982 9.241 2.84 2.272 1.75 3.872 4.238 4.753 7.404l-2.763.771c-1.495-5.362-5.278-8.102-11.245-8.145-3.94.03-6.918 1.267-8.855 3.678-1.81 2.259-2.747 5.523-2.783 9.702.036 4.18.971 7.443 2.785 9.702 1.937 2.415 4.918 3.652 8.857 3.678 3.552-.026 5.902-.855 7.855-2.77 2.23-2.184 2.19-4.864 1.476-6.496-.42-.962-1.184-1.76-2.214-2.368-.26 1.83-.843 3.311-1.74 4.43-1.199 1.49-2.898 2.306-5.05 2.423-1.628.088-3.198-.295-4.414-1.085-1.44-.933-2.28-2.355-2.372-4.013-.088-1.612.553-3.094 1.801-4.173 1.193-1.03 2.87-1.636 4.852-1.75 1.46-.081 2.827-.016 4.088.192-.169-1.004-.506-1.803-1.013-2.378-.696-.793-1.77-1.196-3.194-1.206h-.04c-1.144 0-2.697.315-3.685 1.787l-2.379-1.595c1.326-1.97 3.477-3.056 6.064-3.056h.058c4.326.026 6.904 2.676 7.16 7.297q.22.093.435.19c2.018.95 3.494 2.387 4.271 4.159 1.079 2.466 1.18 6.486-2.097 9.694-2.505 2.45-5.543 3.559-9.852 3.588h-.02c-4.85-.033-8.577-1.63-11.083-4.75-2.226-2.78-3.377-6.644-3.416-11.486v-.024c.04-4.846 1.19-8.706 3.42-11.485 2.502-3.123 6.233-4.722 11.079-4.755m1.368 16.669q-.49 0-1.001.03c-2.487.14-4.038 1.28-3.95 2.901.091 1.7 1.967 2.49 3.771 2.393 1.658-.088 3.816-.735 4.18-5.025-.917-.198-1.92-.3-3-.3",
});
ne("tumblr", {
  color: "#2c4762",
  path: "M0 0v64h64V0zm35.4 47c-6.5.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6 5.6-5.7 5.9-8.1 0-.2.1-.2.2-.2h4.4v7.6h6v4.5h-6v9.3c0 1.3.5 3 2.9 3 .8 0 1.9-.3 2.4-.5l1.4 4.3c-.5.8-3 1.8-5.2 1.8",
});
ne("tiktok", {
  color: "#000000",
  path: "M0 0v64h64V0zm32.781 16h5.494c-.008 0-.064.526.075 1.34h-.008c.166.98.617 2.381 1.824 3.762a8.857 8.858 0 0 0 1.617 1.375 7 7 0 0 0 .631.367c1.405.7 2.777.913 3.453.84v5.457s-1.93-.081-3.361-.461c-1.996-.534-3.276-1.354-3.276-1.354s-.888-.587-.955-.627v11.274c0 .626-.164 2.194-.662 3.502a10.6 10.6 0 0 1-1.843 3.062s-1.227 1.52-3.381 2.541c-1.943.92-3.652.9-4.162.92 0 0-2.951.119-5.612-1.69l-.013-.013v.014a11.2 11.2 0 0 1-2.381-2.246c-.842-1.074-1.36-2.348-1.492-2.721v-.014c-.212-.634-.657-2.168-.59-3.648.106-2.609.983-4.216 1.215-4.616a10.8 10.8 0 0 1 2.351-2.902 10.2 10.2 0 0 1 7.867-2.3l-.006 5.595a4.6 4.6 0 0 0-1.427-.227c-2.56 0-4.637 2.09-4.637 4.668s2.076 4.666 4.637 4.666a4.6 4.6 0 0 0 2.273-.6 4.67 4.67 0 0 0 2.348-3.704v-.012a.2.2 0 0 0 .004-.047q.005-.054.006-.103c.012-.279.011-.563.011-.848z",
});
ne("twitch", {
  color: "#6441A5",
  path: "M0 0v64h64V0zm47 35.8-7.6 7.6h-5.7l-3.8 3.8H26v-3.8h-7V23.1l1.9-5.1H47zm-17.8 7L33 39h7l4.5-4.5v-14h-21V39h5.7zm8.3-17.2H40v7.6h-2.5zm-7 0H33v7.6h-2.5z",
});
ne("twitter", {
  color: "#00aced",
  path: "M0 0v64h64V0zm44.7 25.5v.8C44.7 35 38.1 45 26.1 45c-3.7 0-7.2-1.1-10.1-2.9.5.1 1 .1 1.6.1 3.1 0 5.9-1 8.2-2.8-2.9-.1-5.3-2-6.1-4.6.4.1.8.1 1.2.1.6 0 1.2-.1 1.7-.2-3-.6-5.3-3.3-5.3-6.4v-.1c.9.5 1.9.8 3 .8-1.8-1.2-2.9-3.2-2.9-5.5q0-1.8.9-3.3c3.2 4 8.1 6.6 13.5 6.9-.1-.5-.2-1-.2-1.5 0-3.6 2.9-6.6 6.6-6.6 1.9 0 3.6.8 4.8 2.1 1.5-.3 2.9-.8 4.2-1.6-.5 1.5-1.5 2.8-2.9 3.6 1.3-.2 2.6-.5 3.8-1-1 1.3-2.1 2.4-3.4 3.4",
});
ne("upwork", {
  color: "#3da800",
  path: "M0 0h64v64H0Zm24.938 17.111h5.6c1.1 3.8 3.099 8.2 5.599 12.1 1.6-5.5 5.6-9 10.9-9 6.1 0 11.1 5.002 11.1 11.102 0 6.4-5 11.398-11.1 11.398-3 0-5.5-.8-7.7-2.2l-2.4 11.901h-5.7l3.5-16.3c-1.5-2.1-2.9-4.5-4-6.7v2.5c0 6.1-4.9 11-10.9 11s-10.9-4.9-10.9-11V17.211h5.4v14.602c0 2.9 2.4 5.298 5.3 5.298s5.3-2.398 5.3-5.298zm22.199 8.801c-4.1 0-5.4 4-5.8 6.4v.1l-.6 2.2c1.8 1.5 4.1 2.5 6.3 2.5 2.9 0 5.6-2.5 5.7-5.6 0-3.1-2.5-5.6-5.6-5.6",
});
ne("vevo", {
  color: "#ED1A3B",
  path: "M0 0v64h64V0zm34.2 41.9c-1.4 2.1-2.9 3.1-5 3.1 0 0-3 .2-4.1-3.4L20 21h8.1l3 12.3c1.4-2.1 5.1-7.7 5.1-7.7 1.4-1.9 2.2-4.6 6.8-4.6h5z",
});
ne("vimeo", {
  color: "#1ab7ea",
  path: "M0 0v64h64V0zm40.9 37c-4.1 5.3-7.5 8-10.4 8-1.7 0-3.2-1.6-4.4-4.8-.8-3-1.6-5.9-2.4-8.9-.9-3.2-1.9-4.8-2.9-4.8-.2 0-1 .5-2.4 1.4L17 26c1.5-1.3 2.9-2.6 4.4-3.9 2-1.7 3.5-2.6 4.4-2.7 2.3-.2 3.8 1.4 4.3 4.8q.9 5.55 1.2 6.9c.7 3.1 1.4 4.6 2.2 4.6.6 0 1.6-1 2.8-3 1.3-2 1.9-3.5 2-4.5.2-1.7-.5-2.6-2-2.6-.7 0-1.5.2-2.2.5 1.5-4.8 4.3-7.2 8.4-7 3.1.1 4.5 2.1 4.4 6 0 2.8-2.1 6.8-6 11.9",
});
ne("vk", {
  color: "#45668e",
  path: "M0 0v64h64V0zm44.94 44.84h-.2c-2.17-.36-3.66-1.92-4.92-3.37-.72-.81-1.82-2.66-3.12-2.47-1.85.3-.93 3.52-1.71 4.9-.62 1.11-3.29.91-5.12.71-5.79-.62-8.75-3.77-11.35-7.14A64 64 0 0 1 11.6 26a10.6 10.6 0 0 1-1.51-4.49c.91-.81 2.47-.51 4.02-.51 1.31 0 3.36-.29 4.32.2.57.26 1.14 1.8 1.57 2.8a37 37 0 0 0 3.31 5.82c.56.81 1.41 2.35 2.41 2.14s1.06-2.63 1.1-4.18c0-1.77 0-4-.5-4.9S25 22 24.15 21.47c.73-1.49 2.72-1.63 5.12-1.63 2 0 4.84-.23 5.62 1.12s.25 3.85.2 5.71c-.06 2.09-.41 4.25 1 5.21 1.09-.12 1.68-1.2 2.31-2A28 28 0 0 0 41.72 24c.44-1 .91-2.65 1.71-3 1.21-.47 3.15-.1 4.92-.1 1.46 0 4.05-.41 4.52.61.39.85-.75 3-1.1 3.57a62 62 0 0 1-4.12 5.61c-.58.78-1.78 2-1.71 3.27.05.94 1 1.67 1.71 2.35a33 33 0 0 1 3.92 4.18c.47.62 1.5 2 1.4 2.76-.31 2.56-6.09.99-8.03 1.59",
});
ne("vine", {
  color: "#00BF8F",
  path: "M0 0v64h64V0zm38.4 21.5c-1.2 0-2.1 1.2-2.1 3.4 0 4.6 2.9 7.2 6.7 7.2.7 0 1.4-.1 2.2-.3v3.6c-1.3.3-2.5.4-3.6.4-2.5 5.3-7 9.8-8.6 10.7-1 .5-1.9.6-2.9-.1-1.9-1.1-8.9-6.9-11.2-25H24c1.3 10.9 4.4 16.5 7.9 20.7 1.9-1.9 3.7-4.4 5.2-7.3-3.4-1.7-5.5-5.5-5.5-10s2.6-7.9 7-7.9c4.3 0 6.6 2.7 6.6 7.3 0 1.7-.4 3.7-1 5.2-3.2.6-4.4-1.4-4.4-1.4.2-.8.6-2.1.6-3.3-.1-2.1-.9-3.2-2-3.2",
});
ne("vsco", {
  color: "#83878A",
  path: "M0 0v64h64V0zm18.5 34.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S21 30.6 21 32c-.1 1.4-1.2 2.5-2.5 2.5m6.6 6.6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m.1-13.4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M32 48c-1.4 0-2.5-1.1-2.5-2.5S30.6 43 32 43s2.5 1.1 2.5 2.5S33.4 48 32 48m-2.5-16.1c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5m2.5-11c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m6.7 1.8c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5m.1 18.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c-.1 1.4-1.2 2.5-2.5 2.5m6.7-6.7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S48 30.6 48 32s-1.1 2.5-2.5 2.5",
});
ne("wa.me", {
  color: "#25D366",
  path: "M0 0v64h64V0zm48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 0 1-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59M32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.2 13.2 0 0 0 7.27 2.164c7.281 0 13.207-5.875 13.207-13.101s-5.926-13.106-13.21-13.106m7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836s-.64-.637-.863-.637c-.226 0-.484-.031-.738-.031a1.4 1.4 0 0 0-1.027.476c-.356.383-1.348 1.309-1.348 3.188s1.379 3.695 1.57 3.949c.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816m0 0",
});
ne("wechat", {
  color: "#00c80f",
  path: "M65.6 65.6H-1.6V-1.6h67.2zM49.738 46.043c2.846-2.061 4.662-5.107 4.662-8.498 0-6.207-6.043-11.244-13.492-11.244-7.453 0-13.494 5.037-13.494 11.244 0 6.213 6.041 11.246 13.494 11.246 1.537 0 3.025-.221 4.402-.615l.395-.059c.262 0 .498.078.717.207l2.955 1.707.26.082a.45.45 0 0 0 .451-.449l-.074-.328-.605-2.271-.047-.287a.9.9 0 0 1 .376-.735M25.793 13.887C16.85 13.887 9.6 19.93 9.6 27.383c0 4.066 2.182 7.723 5.596 10.197.275.195.453.518.453.879l-.055.344-.732 2.725-.086.393c0 .301.24.541.539.541l.311-.1 3.545-2.049c.27-.152.551-.248.861-.248l.475.068a19 19 0 0 0 5.287.742l.891-.021a10.3 10.3 0 0 1-.543-3.309c0-6.793 6.611-12.305 14.768-12.305l.879.021c-1.225-6.443-7.918-11.374-15.996-11.374m10.615 21.859a1.798 1.798 0 1 1-.001-3.6 1.798 1.798 0 0 1 .001 3.6m8.996 0a1.798 1.798 0 1 1-.001-3.6 1.798 1.798 0 0 1 .001 3.6M20.395 25.221a2.16 2.16 0 1 1 .002-4.318 2.16 2.16 0 0 1-.002 4.318m10.796 0c-1.193 0-2.158-.965-2.158-2.158s.965-2.158 2.158-2.158 2.158.965 2.158 2.158-.964 2.158-2.158 2.158",
});
ne("whatsapp", {
  color: "#25D366",
  path: "M0 0v64h64V0zm48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 0 1-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59M32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.2 13.2 0 0 0 7.27 2.164c7.281 0 13.207-5.875 13.207-13.101s-5.926-13.106-13.21-13.106m7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836s-.64-.637-.863-.637c-.226 0-.484-.031-.738-.031a1.4 1.4 0 0 0-1.027.476c-.356.383-1.348 1.309-1.348 3.188s1.379 3.695 1.57 3.949c.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816m0 0",
});
ne("x", {
  color: "#000000",
  path: "M0 0v64h64V0zm16 17.537h10.125l6.992 9.242 8.084-9.242h4.908L35.39 29.79 48 46.463h-9.875l-7.734-10.111-8.85 10.11h-4.908l11.465-13.105zm5.73 2.783 17.75 23.205h2.72L24.647 20.32z",
});
ne("xiaohongshu", {
  color: "#ff2741",
  path: "M8.494-.006h47.784c4.552 0 8.596 3.953 8.715 8.5V56.28a8.91 8.91 90 0 1-8.717 8.702H8.509A8.92 8.92 90 0 1 .004 56.26V8.514C.114 4.038 4.018.12 8.494-.006m4.247 23.213c-.033 5.045-.016 10.092-.041 15.138a.533.533 90 0 1-.54.66c-.607.036-1.217.015-1.826.02a61 61 0 0 0 1.307 2.978c1.148-.038 2.458.201 3.438-.55.88-.656 1.162-1.82 1.145-2.87 0-5.125 0-10.253-.023-15.378a263 263 0 0 0-3.46.002m14.236-.228q-1.29 2.963-2.63 5.9c-.254.586-.56 1.363-.028 1.893.683.62 1.686.381 2.524.437-.581 1.467-1.346 2.861-1.836 4.364-.271.741.407 1.495 1.148 1.503 1.343.091 2.69 0 4.036.035.44-.982.881-1.962 1.313-2.95-.785 0-1.577.056-2.348-.099.835-2.096 1.825-4.125 2.71-6.196-1.083-.127-2.31.226-3.3-.196.483-1.625 1.361-3.115 1.98-4.696-1.192-.005-2.38-.013-3.568.005zm18.469.013v1.322h-2.33v3.536c.779 0 1.556 0 2.332.016q.03 1.523 0 3.066c-1.167.023-2.338 0-3.506.018a149 149 0 0 0 0 3.529c1.17.013 2.344 0 3.514 0v7.512h3.516v-7.507c1.711 0 3.42-.025 5.13 0 .602-.05 1.29.37 1.27 1.033a28 28 90 0 1 0 2.813.574.574 90 0 1-.538.607c-.978.07-1.958 0-2.938.033.432 1.015.85 2.03 1.34 3.033 1.613-.083 3.583.323 4.812-1.015 1.167-1.082.817-2.793.865-4.204-.073-1.485.29-3.163-.632-4.463-.784-1.102-2.198-1.401-3.473-1.424-.076-1.777.348-3.856-.96-5.3-1.218-1.367-3.18-1.372-4.866-1.306v-1.32c-1.193.013-2.366.015-3.536.02zM32.9 24.317v3.534h2.206v10.596c-1.053.018-2.11 0-3.163.013a315 315 0 0 0-1.61 3.528c3.93.016 7.87 0 11.79 0V38.46c-1.13 0-2.262 0-3.392-.013V27.843h2.214v-3.536c-2.676.005-5.36 0-8.045.01m23.19.325c-.985.746-.662 2.112-.705 3.175.657 0 1.317.036 1.975-.022 1.056-.097 1.85-1.328 1.426-2.323-.332-1.092-1.807-1.567-2.696-.83M6.86 27.848c-.178 2.315-.358 4.628-.526 6.943a5.6 5.6 90 0 1-.335 1.539 156 156 0 0 0 1.823 4.061c1.421-1.901 1.95-4.298 2.097-6.625.124-1.98.345-3.958.416-5.94-1.165.04-2.323.012-3.476.022m11.71 0 .508 6.44c.185 2.153.741 4.347 2.056 6.093a172 172 0 0 0 1.82-4.062 5.5 5.5 90 0 1-.355-1.546c-.167-2.307-.35-4.615-.528-6.923q-1.757-.01-3.508-.002zm4.357 13.884c1.797.53 3.7.167 5.546.266a295 295 0 0 0 1.612-3.536c-1.845-.071-3.724.193-5.534-.272q-.83 1.765-1.632 3.542zM48.94 27.86c.762.109 1.777-.31 2.359.304.096.927.025 1.859.035 2.793h-2.37q-.024-1.549-.024-3.097",
});
ne("xing", {
  color: "#0698A0",
  path: "M1.008 0C.45 0 0 .45 0 1.01v62.11c0 .56.45 1.01 1.008 1.01h62.02c.56 0 1.009-.45 1.009-1.01V1.01c0-.56-.45-1.01-1.009-1.01ZM41.72 16.032h5.482c.327 0 .585.106.723.296.143.197.139.459-.012.714L35.898 35.145a.025.025 0 0 0 0 .032l7.65 11.91c.152.257.156.517.012.715-.138.19-.394.295-.721.295h-5.42c-.83 0-1.247-.47-1.516-.88l-7.71-12.056c.386-.58 12.074-18.248 12.074-18.248.291-.446.642-.88 1.452-.88m-22.794 6.334h5.425c.832 0 1.24.456 1.51.867l3.731 5.544-5.857 8.828c-.277.427-.668.893-1.48.893h-5.426c-.326 0-.571-.125-.71-.315-.142-.198-.15-.453 0-.709l5.766-8.672c.006-.01.006-.015 0-.025l-3.668-5.413c-.152-.258-.175-.513-.032-.71.138-.192.414-.288.74-.288",
});
ne("yandex", {
  color: "#fc3f1d",
  path: "M0 0v64h64V0Zm18.656 16h5.91l7.248 15.793c2.124 4.604 3.05 6.998 3.05 12.293V48H29.46v-3.223c0-4.374-.507-6.539-2.262-10.314zm21.008 0h5.68L38.51 31.47h-5.586z",
});
ne("yelp", {
  color: "#B90C04",
  path: "M0 0v64h64V0zm22.4 37.9q-.6 0-.9-.6c-.1-.3-.2-.7-.3-1.3-.2-1.7 0-4.2.5-5 .2-.4.6-.6 1-.6.3 0 .5.1 5.5 2.1l1.5.6c.5.2.9.7.8 1.4 0 .6-.4 1.1-.9 1.2l-2.1.7c-4.7 1.5-4.8 1.5-5.1 1.5M33 41c0 4.9 0 5-.1 5.3-.1.4-.4.6-.9.7-1.2.2-5.1-1.2-6-2.2q-.3-.3-.3-.6c0-.2 0-.3.1-.4.1-.2.2-.4 3.7-4.5l1-1.2c.3-.4 1-.6 1.5-.4.6.2.9.7.9 1.2.1-.1.1 2.1.1 2.1m-.8-10.2c-.3.1-1 .3-2-1.2 0 0-6.4-10.1-6.5-10.4s0-.7.3-1.1c1-1 6.1-2.4 7.5-2.1.4.1.7.4.9.8.1.4.7 9.8.8 11.9 0 1.8-.8 2-1 2.1m3.2.5 1.3-1.8c2.8-3.9 3-4.1 3.2-4.2.3-.2.7-.2 1.1 0 1.1.5 3.4 3.9 3.5 5.2 0 .4-.1.8-.5 1-.2.1-.4.2-5.7 1.5-.8.2-1.3.3-1.6.4-.5.1-1.1-.1-1.4-.6-.2-.5-.2-1.1.1-1.5m9.3 8.3c-.2 1.3-2.7 4.5-3.9 5-.4.2-.8.1-1.1-.1-.2-.2-.4-.5-3.2-5l-.8-1.3c-.3-.5-.3-1.1.1-1.6s.9-.6 1.4-.5l2.1.7c4.6 1.5 4.8 1.6 5 1.7.4.3.5.7.4 1.1",
});
ne("youtube", {
  color: "#ff3333",
  path: "M0 0v64h64V0zm47 33.1c0 2.4-.3 4.9-.3 4.9s-.3 2.1-1.2 3c-1.1 1.2-2.4 1.2-3 1.3-4.2.2-10.5.3-10.5.3s-7.8-.1-10.2-.3c-.7-.1-2.2-.1-3.3-1.3-.9-.9-1.2-3-1.2-3s-.3-2.4-.3-4.9v-2.3c0-2.4.3-4.9.3-4.9s.3-2.1 1.2-3c1.1-1.2 2.4-1.2 3-1.3 4.2-.3 10.5-.3 10.5-.3s6.3 0 10.5.3c.6.1 1.9.1 3 1.3.9.9 1.2 3 1.2 3s.3 2.4.3 4.9zm-18.1 2.8 8.1-4.2-8.1-4.2z",
});
const tw = "" + new URL("arrow-BYp4F-0z.png", import.meta.url).href;
function aw() {
  return K.jsxs("div", {
    className: "about-page",
    children: [
      K.jsx("h1", { children: "About Drawllab" }),
      K.jsxs("div", {
        className: "about-page__container",
        children: [
          K.jsxs("section", {
            className: "key",
            children: [
              K.jsx("h3", { children: "Key:" }),
              K.jsxs("ul", {
                children: [
                  K.jsxs("li", {
                    children: [K.jsx("img", { src: O8, alt: "key", className: "key__icon" }), K.jsx("p", { children: "Pen/Brush" })],
                  }),
                  K.jsxs("li", {
                    className: "key__li",
                    children: [
                      K.jsx("img", { src: M8, alt: "key", className: "key__icon" }),
                      K.jsx("p", { children: "Draw Straight Line" }),
                    ],
                  }),
                  K.jsxs("li", {
                    className: "key__li",
                    children: [
                      K.jsx("img", { src: R8, alt: "key", className: "key__icon" }),
                      K.jsx("p", { children: "Draw Quadrilateral" }),
                    ],
                  }),
                  K.jsxs("li", {
                    className: "key__li",
                    children: [K.jsx("img", { src: z8, alt: "key", className: "key__icon" }), K.jsx("p", { children: "Move / Resize" })],
                  }),
                  K.jsxs("li", {
                    className: "key__li",
                    children: [K.jsx("img", { src: n2, alt: "key", className: "key__icon" }), K.jsx("p", { children: "Home" })],
                  }),
                  K.jsxs("li", {
                    className: "key__li",
                    children: [K.jsx("img", { src: q8, alt: "key", className: "key__icon" }), K.jsx("p", { children: "About" })],
                  }),
                ],
              }),
            ],
          }),
          K.jsxs("section", {
            className: "about",
            children: [
              K.jsxs("div", {
                className: "about__project",
                children: [
                  K.jsx("h3", { children: "a tiny drawing application" }),
                  K.jsx("p", {
                    children:
                      "Drawllab was created to be a lightweight and user-friendly alternative to modern-day drawing applications. Using a minimalist design and easy to learn interface, Drawllab makes it easy for any user to jump in and start creating without having a huge learning curve. Use it to make wireframes, sketch out ideas and jump start your creative projects!",
                  }),
                  K.jsx("h2", { children: "libraries used" }),
                  K.jsxs("ul", {
                    children: [
                      K.jsx("li", { children: K.jsx("a", { className: "library", href: "https://roughjs.com/", children: "roughJS" }) }),
                      K.jsx("li", {
                        children: K.jsx("a", {
                          className: "library",
                          href: "https://www.npmjs.com/package/perfect-freehand",
                          children: "perfect freehand",
                        }),
                      }),
                      K.jsx("li", {
                        children: K.jsx("a", {
                          className: "library",
                          href: "https://casesandberg.github.io/react-color/",
                          children: "react color",
                        }),
                      }),
                      K.jsx("li", {
                        children: K.jsx("a", {
                          className: "library",
                          href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
                          children: "html canvas",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              K.jsxs("div", {
                className: "about__details",
                children: [
                  K.jsxs("div", {
                    className: "about__container info",
                    children: [
                      K.jsx("h2", { children: "contact info" }),
                      K.jsx("p", { children: K.jsx("span", { children: "Nathan Challender" }) }),
                      K.jsx("p", { children: "nathandallas@proton.me" }),
                    ],
                  }),
                  K.jsx("div", {
                    className: "about__container",
                    children: K.jsxs("div", {
                      className: "about__icon-container",
                      children: [
                        K.jsx("div", {
                          className: "about__icon",
                          children: K.jsx(hg, {
                            url: "https://codepen.io/nathandallas",
                            bgColor: "#96bbbf",
                            style: { height: 75, width: 75 },
                          }),
                        }),
                        K.jsx("div", {
                          className: "about__icon",
                          children: K.jsx(hg, {
                            url: "https://github.com/nathandallas",
                            bgColor: "#96bbbf",
                            style: { height: 75, width: 75 },
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      K.jsx("div", {
        className: "about-nav__link--canvas",
        children: K.jsxs(Pr, {
          to: "/canvas",
          className: "about-nav__link",
          children: [
            K.jsx("img", { src: tw, alt: "back button", className: "about-nav__icon" }),
            K.jsx("h2", { className: "about-nav__h2", children: "Back to Canvas" }),
          ],
        }),
      }),
      K.jsx("div", {
        className: "about-nav__link--home",
        children: K.jsx(Pr, { to: "/", children: K.jsx("img", { src: n2, alt: "home button", className: "about-nav__icon" }) }),
      }),
    ],
  });
}
const nw = () =>
    K.jsx("div", {
      className: "App",
      children: K.jsxs(M9, {
        base: "/drawllab",
        children: [
          K.jsx(Ns, { path: "/", exact: !0, component: D9 }),
          K.jsx(Ns, { path: "/canvas", component: JC }),
          K.jsx(Ns, { path: "/about", component: aw }),
        ],
      }),
    }),
  rw = document.getElementById("root"),
  lw = l9.createRoot(rw);
lw.render(K.jsx(nw, {}));
