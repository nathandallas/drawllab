function Fb(r, a) {
  for (var u = 0; u < a.length; u++) {
    const i = a[u];
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
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) i(c);
  new MutationObserver(c => {
    for (const s of c) if (s.type === "childList") for (const h of s.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const s = {};
    return (
      c.integrity && (s.integrity = c.integrity),
      c.referrerPolicy && (s.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials" ? (s.credentials = "include") : c.crossOrigin === "anonymous" ? (s.credentials = "omit") : (s.credentials = "same-origin"),
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
    a = Symbol.for("react.fragment");
  function u(i, c, s) {
    var h = null;
    if ((s !== void 0 && (h = "" + s), c.key !== void 0 && (h = "" + c.key), "key" in c)) {
      s = {};
      for (var d in c) d !== "key" && (s[d] = c[d]);
    } else s = c;
    return (c = s.ref), { $$typeof: r, type: i, key: h, ref: c !== void 0 ? c : null, props: s };
  }
  return ($l.Fragment = a), ($l.jsx = u), ($l.jsxs = u), $l;
}
var k4;
function Jb() {
  return k4 || ((k4 = 1), (Ms.exports = $b())), Ms.exports;
}
var X = Jb(),
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
        function a(U, K) {
          var re = U.length;
          U.push(K);
          e: for (; 0 < re; ) {
            var ce = (re - 1) >>> 1,
              C = U[ce];
            if (0 < c(C, K)) (U[ce] = K), (U[re] = C), (re = ce);
            else break e;
          }
        }
        function u(U) {
          return U.length === 0 ? null : U[0];
        }
        function i(U) {
          if (U.length === 0) return null;
          var K = U[0],
            re = U.pop();
          if (re !== K) {
            U[0] = re;
            e: for (var ce = 0, C = U.length, P = C >>> 1; ce < P; ) {
              var W = 2 * (ce + 1) - 1,
                te = U[W],
                oe = W + 1,
                ve = U[oe];
              if (0 > c(te, re)) oe < C && 0 > c(ve, te) ? ((U[ce] = ve), (U[oe] = re), (ce = oe)) : ((U[ce] = te), (U[W] = re), (ce = W));
              else if (oe < C && 0 > c(ve, re)) (U[ce] = ve), (U[oe] = re), (ce = oe);
              else break e;
            }
          }
          return K;
        }
        function c(U, K) {
          var re = U.sortIndex - K.sortIndex;
          return re !== 0 ? re : U.id - K.id;
        }
        if (((r.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var s = performance;
          r.unstable_now = function () {
            return s.now();
          };
        } else {
          var h = Date,
            d = h.now();
          r.unstable_now = function () {
            return h.now() - d;
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
          for (var K = u(p); K !== null; ) {
            if (K.callback === null) i(p);
            else if (K.startTime <= U) i(p), (K.sortIndex = K.expirationTime), a(v, K);
            else break;
            K = u(p);
          }
        }
        function G(U) {
          if (((O = !1), k(U), !w))
            if (u(v) !== null) (w = !0), Y || ((Y = !0), _e());
            else {
              var K = u(p);
              K !== null && Se(G, K.startTime - U);
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
            var K = !0;
            try {
              e: {
                (w = !1), O && ((O = !1), D(J), (J = -1)), (x = !0);
                var re = m;
                try {
                  t: {
                    for (k(U), A = u(v); A !== null && !(A.expirationTime > U && ye()); ) {
                      var ce = A.callback;
                      if (typeof ce == "function") {
                        (A.callback = null), (m = A.priorityLevel);
                        var C = ce(A.expirationTime <= U);
                        if (((U = r.unstable_now()), typeof C == "function")) {
                          (A.callback = C), k(U), (K = !0);
                          break t;
                        }
                        A === u(v) && i(v), k(U);
                      } else i(v);
                      A = u(v);
                    }
                    if (A !== null) K = !0;
                    else {
                      var P = u(p);
                      P !== null && Se(G, P.startTime - U), (K = !1);
                    }
                  }
                  break e;
                } finally {
                  (A = null), (m = re), (x = !1);
                }
                K = void 0;
              }
            } finally {
              K ? _e() : (Y = !1);
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
          (me.port1.onmessage = le),
            (_e = function () {
              Ae.postMessage(null);
            });
        } else
          _e = function () {
            H(le, 0);
          };
        function Se(U, K) {
          J = H(function () {
            U(r.unstable_now());
          }, K);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (r.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (ue = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (r.unstable_next = function (U) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = m;
            }
            var re = m;
            m = K;
            try {
              return U();
            } finally {
              m = re;
            }
          }),
          (r.unstable_requestPaint = function () {
            R = !0;
          }),
          (r.unstable_runWithPriority = function (U, K) {
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
              return K();
            } finally {
              m = re;
            }
          }),
          (r.unstable_scheduleCallback = function (U, K, re) {
            var ce = r.unstable_now();
            switch ((typeof re == "object" && re !== null ? ((re = re.delay), (re = typeof re == "number" && 0 < re ? ce + re : ce)) : (re = ce), U)) {
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
              (U = { id: g++, callback: K, priorityLevel: U, startTime: re, expirationTime: C, sortIndex: -1 }),
              re > ce ? ((U.sortIndex = re), a(p, U), u(v) === null && U === u(p) && (O ? (D(J), (J = -1)) : (O = !0), Se(G, re - ce))) : ((U.sortIndex = C), a(v, U), w || x || ((w = !0), Y || ((Y = !0), _e()))),
              U
            );
          }),
          (r.unstable_shouldYield = ye),
          (r.unstable_wrapCallback = function (U) {
            var K = m;
            return function () {
              var re = m;
              m = K;
              try {
                return U.apply(this, arguments);
              } finally {
                m = re;
              }
            };
          });
      })(qs)),
    qs
  );
}
var Y4;
function Wb() {
  return Y4 || ((Y4 = 1), (zs.exports = Ib())), zs.exports;
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
    a = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
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
    (this.props = C), (this.context = P), (this.refs = O), (this.updater = W || x);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (C, P) {
      if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, C, P, "setState");
    }),
    (R.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function H() {}
  H.prototype = R.prototype;
  function D(C, P, W) {
    (this.props = C), (this.context = P), (this.refs = O), (this.updater = W || x);
  }
  var L = (D.prototype = new H());
  (L.constructor = D), w(L, R.prototype), (L.isPureReactComponent = !0);
  var k = Array.isArray,
    G = { H: null, A: null, T: null, S: null, V: null },
    Y = Object.prototype.hasOwnProperty;
  function J(C, P, W, te, oe, ve) {
    return (W = ve.ref), { $$typeof: r, type: C, key: P, ref: W !== void 0 ? W : null, props: ve };
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
                }
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
            case a:
              he = !0;
              break;
            case g:
              return (he = C._init), Se(he(C._payload), P, W, te, oe);
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
          : oe != null && (fe(oe) && (oe = ue(oe, W + (oe.key == null || (C && C.key === oe.key) ? "" : ("" + oe.key).replace(le, "$&/") + "/") + he)), P.push(oe)),
        1
      );
    he = 0;
    var nt = te === "" ? "." : te + ":";
    if (k(C)) for (var De = 0; De < C.length; De++) (te = C[De]), (ve = nt + _e(te, De)), (he += Se(te, P, W, ve, oe));
    else if (((De = m(C)), typeof De == "function")) for (C = De.call(C), De = 0; !(te = C.next()).done; ) (te = te.value), (ve = nt + _e(te, De++)), (he += Se(te, P, W, ve, oe));
    else if (ve === "object") {
      if (typeof C.then == "function") return Se(Ae(C), P, W, te, oe);
      throw (
        ((P = String(C)), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead."))
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
  function K(C) {
    if (C._status === -1) {
      var P = C._result;
      (P = P()),
        P.then(
          function (W) {
            (C._status === 0 || C._status === -1) && ((C._status = 1), (C._result = W));
          },
          function (W) {
            (C._status === 0 || C._status === -1) && ((C._status = 2), (C._result = W));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = P));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var re =
    typeof reportError == "function"
      ? reportError
      : function (C) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var P = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C), error: C });
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
          W
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
      if (P != null) for (he in (P.ref !== void 0 && (ve = void 0), P.key !== void 0 && (oe = "" + P.key), P)) !Y.call(P, he) || he === "key" || he === "__self" || he === "__source" || (he === "ref" && P.ref === void 0) || (te[he] = P[he]);
      var he = arguments.length - 2;
      if (he === 1) te.children = W;
      else if (1 < he) {
        for (var nt = Array(he), De = 0; De < he; De++) nt[De] = arguments[De + 2];
        te.children = nt;
      }
      return J(C.type, oe, void 0, void 0, ve, te);
    }),
    (we.createContext = function (C) {
      return (C = { $$typeof: h, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null }), (C.Provider = C), (C.Consumer = { $$typeof: s, _context: C }), C;
    }),
    (we.createElement = function (C, P, W) {
      var te,
        oe = {},
        ve = null;
      if (P != null) for (te in (P.key !== void 0 && (ve = "" + P.key), P)) Y.call(P, te) && te !== "key" && te !== "__self" && te !== "__source" && (oe[te] = P[te]);
      var he = arguments.length - 2;
      if (he === 1) oe.children = W;
      else if (1 < he) {
        for (var nt = Array(he), De = 0; De < he; De++) nt[De] = arguments[De + 2];
        oe.children = nt;
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
      return { $$typeof: g, _payload: { _status: -1, _result: C }, _init: K };
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
        oe !== null && oe(W, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(ce, re);
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
function ua() {
  return Z4 || ((Z4 = 1), (Ds.exports = e9())), Ds.exports;
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
  var r = ua();
  function a(v) {
    var p = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++) p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + v + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(a(522));
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
  var h = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(v, p) {
    if (v === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (mt.createPortal = function (v, p) {
      var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(a(299));
      return s(v, p, null, g);
    }),
    (mt.flushSync = function (v) {
      var p = h.T,
        g = i.p;
      try {
        if (((h.T = null), (i.p = 2), v)) return v();
      } finally {
        (h.T = p), (i.p = g), i.d.f();
      }
    }),
    (mt.preconnect = function (v, p) {
      typeof v == "string" && (p ? ((p = p.crossOrigin), (p = typeof p == "string" ? (p === "use-credentials" ? p : "") : void 0)) : (p = null), i.d.C(v, p));
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
          : g === "script" && i.d.X(v, { crossOrigin: A, integrity: m, fetchPriority: x, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
      }
    }),
    (mt.preinitModule = function (v, p) {
      if (typeof v == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = d(p.as, p.crossOrigin);
            i.d.M(v, { crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
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
          i.d.m(v, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: g, integrity: typeof p.integrity == "string" ? p.integrity : void 0 });
        } else i.d.m(v);
    }),
    (mt.requestFormReset = function (v) {
      i.d.r(v);
    }),
    (mt.unstable_batchedUpdates = function (v, p) {
      return v(p);
    }),
    (mt.useFormState = function (v, p, g) {
      return h.H.useFormState(v, p, g);
    }),
    (mt.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (mt.version = "19.1.0"),
    mt
  );
}
var P4;
function n9() {
  if (P4) return Hs.exports;
  P4 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), (Hs.exports = t9()), Hs.exports;
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
function a9() {
  if (F4) return Jl;
  F4 = 1;
  var r = Wb(),
    a = ua(),
    u = n9();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function s(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
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
    for (var n = e, l = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var f = o.alternate;
      if (f === null) {
        if (((l = o.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === f.child) {
        for (f = o.child; f; ) {
          if (f === n) return d(o), e;
          if (f === l) return d(o), t;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) (n = o), (l = f);
      else {
        for (var b = !1, y = o.child; y; ) {
          if (y === n) {
            (b = !0), (n = o), (l = f);
            break;
          }
          if (y === l) {
            (b = !0), (l = o), (n = f);
            break;
          }
          y = y.sibling;
        }
        if (!b) {
          for (y = f.child; y; ) {
            if (y === n) {
              (b = !0), (n = f), (l = o);
              break;
            }
            if (y === l) {
              (b = !0), (l = f), (n = o);
              break;
            }
            y = y.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
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
          return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
        case J:
          return (t = e.displayName || null), t !== null ? t : Ae(e.type) || "Memo";
        case ue:
          (t = e._payload), (e = e._init);
          try {
            return Ae(e(t));
          } catch {}
      }
    return null;
  }
  var Se = Array.isArray,
    U = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
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
    C++, (ce[C] = e.current), (e.current = t);
  }
  var oe = P(null),
    ve = P(null),
    he = P(null),
    nt = P(null);
  function De(e, t) {
    switch ((te(he, t), te(ve, e), te(oe, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? v4(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = v4(t)), (e = g4(t, e));
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
    W(oe), te(oe, e);
  }
  function Xe() {
    W(oe), W(ve), W(he);
  }
  function Ke(e) {
    e.memoizedState !== null && te(nt, e);
    var t = oe.current,
      n = g4(t, e.type);
    t !== n && (te(ve, e), te(oe, n));
  }
  function Gt(e) {
    ve.current === e && (W(oe), W(ve)), nt.current === e && (W(nt), (Xl._currentValue = re));
  }
  var kt = Object.prototype.hasOwnProperty,
    E = r.unstable_scheduleCallback,
    z = r.unstable_cancelCallback,
    _ = r.unstable_shouldYield,
    I = r.unstable_requestPaint,
    $ = r.unstable_now,
    ne = r.unstable_getCurrentPriorityLevel,
    Ce = r.unstable_ImmediatePriority,
    Ue = r.unstable_UserBlockingPriority,
    je = r.unstable_NormalPriority,
    Fe = r.unstable_LowPriority,
    $e = r.unstable_IdlePriority,
    ut = r.log,
    Na = r.unstable_setDisableYieldValue,
    oa = null,
    vt = null;
  function At(e) {
    if ((typeof ut == "function" && Na(e), vt && typeof vt.setStrictMode == "function"))
      try {
        vt.setStrictMode(oa, e);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Ai,
    mi = Math.log,
    gc = Math.LN2;
  function Ai(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((mi(e) / gc) | 0)) | 0;
  }
  var zt = 256,
    Vt = 4194304;
  function sa(e) {
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
  function xi(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      f = e.suspendedLanes,
      b = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0 ? ((l = y & ~f), l !== 0 ? (o = sa(l)) : ((b &= y), b !== 0 ? (o = sa(b)) : n || ((n = y & ~e), n !== 0 && (o = sa(n))))) : ((y = l & ~f), y !== 0 ? (o = sa(y)) : b !== 0 ? (o = sa(b)) : n || ((n = l & ~e), n !== 0 && (o = sa(n)))),
      o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && ((f = o & -o), (n = t & -t), f >= n || (f === 32 && (n & 4194048) !== 0)) ? t : o
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
    return (zt <<= 1), (zt & 4194048) === 0 && (zt = 256), e;
  }
  function W2() {
    var e = Vt;
    return (Vt <<= 1), (Vt & 62914560) === 0 && (Vt = 4194304), e;
  }
  function bc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function tl(e, t) {
    (e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function N8(e, t, n, l, o, f) {
    var b = e.pendingLanes;
    (e.pendingLanes = n), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0), (e.expiredLanes &= n), (e.entangledLanes &= n), (e.errorRecoveryDisabledLanes &= n), (e.shellSuspendCounter = 0);
    var y = e.entanglements,
      T = e.expirationTimes,
      B = e.hiddenUpdates;
    for (n = b & ~n; 0 < n; ) {
      var V = 31 - gt(n),
        F = 1 << V;
      (y[V] = 0), (T[V] = -1);
      var N = B[V];
      if (N !== null)
        for (B[V] = null, V = 0; V < N.length; V++) {
          var Q = N[V];
          Q !== null && (Q.lane &= -536870913);
        }
      n &= ~F;
    }
    l !== 0 && eh(e, l, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(b & ~t));
  }
  function eh(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - gt(t);
    (e.entangledLanes |= t), (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194090));
  }
  function th(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - gt(n),
        o = 1 << l;
      (o & t) | (e[l] & t) && (e[l] |= t), (n &= ~o);
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
    return (e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2;
  }
  function nh() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : j4(e.type));
  }
  function Q8(e, t) {
    var n = K.p;
    try {
      return (K.p = e), t();
    } finally {
      K.p = n;
    }
  }
  var Hn = Math.random().toString(36).slice(2),
    bt = "__reactFiber$" + Hn,
    _t = "__reactProps$" + Hn,
    Qa = "__reactContainer$" + Hn,
    Ac = "__reactEvents$" + Hn,
    U8 = "__reactListeners$" + Hn,
    L8 = "__reactHandles$" + Hn,
    ah = "__reactResources$" + Hn,
    nl = "__reactMarker$" + Hn;
  function xc(e) {
    delete e[bt], delete e[_t], delete e[Ac], delete e[U8], delete e[L8];
  }
  function Ua(e) {
    var t = e[bt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Qa] || n[bt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = A4(e); e !== null; ) {
            if ((n = e[bt])) return n;
            e = A4(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function La(e) {
    if ((e = e[bt] || e[Qa])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function al(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ga(e) {
    var t = e[ah];
    return t || (t = e[ah] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
  }
  function ct(e) {
    e[nl] = !0;
  }
  var rh = new Set(),
    lh = {};
  function fa(e, t) {
    ka(e, t), ka(e + "Capture", t);
  }
  function ka(e, t) {
    for (lh[e] = t, e = 0; e < t.length; e++) rh.add(t[e]);
  }
  var G8 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ih = {},
    uh = {};
  function k8(e) {
    return kt.call(uh, e) ? !0 : kt.call(ih, e) ? !1 : G8.test(e) ? (uh[e] = !0) : ((ih[e] = !0), !1);
  }
  function _i(e, t, n) {
    if (k8(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
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
        e.setAttribute(t, "" + n);
      }
  }
  function Si(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function gn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  var _c, ch;
  function Va(e) {
    if (_c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (_c = (t && t[1]) || ""),
          (ch =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
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
    var n = Error.prepareStackTrace;
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
      var f = l.DetermineComponentFrameRoot(),
        b = f[0],
        y = f[1];
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
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      (Sc = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Va(n) : "";
  }
  function V8(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Va(e.type);
      case 16:
        return Va("Lazy");
      case 13:
        return Va("Suspense");
      case 19:
        return Va("SuspenseList");
      case 0:
      case 15:
        return Ec(e.type, !1);
      case 11:
        return Ec(e.type.render, !1);
      case 1:
        return Ec(e.type, !0);
      case 31:
        return Va("Activity");
      default:
        return "";
    }
  }
  function oh(e) {
    try {
      var t = "";
      do (t += V8(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
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
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get,
        f = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (b) {
            (l = "" + b), f.call(this, b);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (b) {
            l = "" + b;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
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
    var n = t.getValue(),
      l = "";
    return e && (l = sh(e) ? (e.checked ? "true" : "false") : e.value), (e = l), e !== n ? (t.setValue(e), !0) : !1;
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
  function Cc(e, t, n, l, o, f, b, y) {
    (e.name = ""),
      b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? (e.type = b) : e.removeAttribute("type"),
      t != null ? (b === "number" ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t))) : (b !== "submit" && b !== "reset") || e.removeAttribute("value"),
      t != null ? wc(e, b, Yt(t)) : n != null ? wc(e, b, Yt(n)) : l != null && e.removeAttribute("value"),
      o == null && f != null && (e.defaultChecked = !!f),
      o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? (e.name = "" + Yt(y)) : e.removeAttribute("name");
  }
  function hh(e, t, n, l, o, f, b, y) {
    if ((f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null)) {
      if (!((f !== "submit" && f !== "reset") || t != null)) return;
      (n = n != null ? "" + Yt(n) : ""), (t = t != null ? "" + Yt(t) : n), y || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (l = l ?? o), (l = typeof l != "function" && typeof l != "symbol" && !!l), (e.checked = y ? e.checked : !!l), (e.defaultChecked = !!l), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" && (e.name = b);
  }
  function wc(e, t, n) {
    (t === "number" && Ci(e.ownerDocument) === e) || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ya(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Yt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function dh(e, t, n) {
    if (t != null && ((t = "" + Yt(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Yt(n) : "";
  }
  function ph(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(i(92));
        if (Se(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Yt(t)), (e.defaultValue = n), (l = e.textContent), l === n && l !== "" && l !== null && (e.value = l);
  }
  function Xa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Z8 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vh(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || Z8.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function gh(e, t, n) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), n != null)) {
      for (var l in n) !n.hasOwnProperty(l) || (t != null && t.hasOwnProperty(l)) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? (e.cssFloat = "") : (e[l] = ""));
      for (var o in t) (l = t[o]), t.hasOwnProperty(o) && n[o] !== l && vh(e, o, l);
    } else for (var f in t) t.hasOwnProperty(f) && vh(e, f, t[f]);
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
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Za = null,
    Ka = null;
  function bh(e) {
    var t = La(e);
    if (t && (e = t.stateNode)) {
      var n = e[_t] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if ((Cc(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Xt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var o = l[_t] || null;
                if (!o) throw Error(i(90));
                Cc(l, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
              }
            }
            for (t = 0; t < n.length; t++) (l = n[t]), l.form === e.form && fh(l);
          }
          break e;
        case "textarea":
          dh(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && Ya(e, !!n.multiple, t, !1);
      }
    }
  }
  var Rc = !1;
  function yh(e, t, n) {
    if (Rc) return e(t, n);
    Rc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (((Rc = !1), (Za !== null || Ka !== null) && (fu(), Za && ((t = Za), (e = Ka), (Ka = Za = null), bh(t), e)))) for (t = 0; t < e.length; t++) bh(e[t]);
    }
  }
  function rl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[_t] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) || ((e = e.type), (l = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    zc = !1;
  if (bn)
    try {
      var ll = {};
      Object.defineProperty(ll, "passive", {
        get: function () {
          zc = !0;
        },
      }),
        window.addEventListener("test", ll, ll),
        window.removeEventListener("test", ll, ll);
    } catch {
      zc = !1;
    }
  var jn = null,
    qc = null,
    Ti = null;
  function mh() {
    if (Ti) return Ti;
    var e,
      t = qc,
      n = t.length,
      l,
      o = "value" in jn ? jn.value : jn.textContent,
      f = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var b = n - e;
    for (l = 1; l <= b && t[n - l] === o[f - l]; l++);
    return (Ti = o.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mi() {
    return !0;
  }
  function Ah() {
    return !1;
  }
  function St(e) {
    function t(n, l, o, f, b) {
      (this._reactName = n), (this._targetInst = o), (this.type = l), (this.nativeEvent = f), (this.target = b), (this.currentTarget = null);
      for (var y in e) e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(f) : f[y]));
      return (this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Mi : Ah), (this.isPropagationStopped = Ah), this;
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Mi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Mi));
        },
        persist: function () {},
        isPersistent: Mi,
      }),
      t
    );
  }
  var ha = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ri = St(ha),
    il = g({}, ha, { view: 0, detail: 0 }),
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
        return "movementX" in e ? e.movementX : (e !== ul && (ul && e.type === "mousemove" ? ((Dc = e.screenX - ul.screenX), (Hc = e.screenY - ul.screenY)) : (Hc = Dc = 0), (ul = e)), Dc);
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
    W8 = g({}, ha, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e7 = St(W8),
    t7 = g({}, ha, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    n7 = St(t7),
    a7 = g({}, ha, { data: 0 }),
    _h = St(a7),
    r7 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
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
        return e.type === "keypress" ? ((e = Oi(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? l7[e.keyCode] || "Unidentified" : "";
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
    s7 = g({}, zi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Sh = St(s7),
    f7 = g({}, il, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bc }),
    h7 = St(f7),
    d7 = g({}, ha, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
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
    b7 = g({}, ha, { newState: 0, oldState: 0 }),
    y7 = St(b7),
    m7 = [9, 13, 27, 32],
    Nc = bn && "CompositionEvent" in window,
    cl = null;
  bn && "documentMode" in document && (cl = document.documentMode);
  var A7 = bn && "TextEvent" in window && !cl,
    Eh = bn && (!Nc || (cl && 8 < cl && 11 >= cl)),
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
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Pa = !1;
  function x7(e, t) {
    switch (e) {
      case "compositionend":
        return Oh(t);
      case "keypress":
        return t.which !== 32 ? null : ((wh = !0), Ch);
      case "textInput":
        return (e = t.data), e === Ch && wh ? null : e;
      default:
        return null;
    }
  }
  function _7(e, t) {
    if (Pa) return e === "compositionend" || (!Nc && Th(e, t)) ? ((e = mh()), (Ti = qc = jn = null), (Pa = !1), e) : null;
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
  var S7 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!S7[e.type] : t === "textarea";
  }
  function Rh(e, t, n, l) {
    Za ? (Ka ? Ka.push(l) : (Ka = [l])) : (Za = l), (t = bu(t, "onChange")), 0 < t.length && ((n = new Ri("onChange", "change", null, n, l)), e.push({ event: n, listeners: t }));
  }
  var ol = null,
    sl = null;
  function E7(e) {
    s4(e, 0);
  }
  function qi(e) {
    var t = al(e);
    if (fh(t)) return e;
  }
  function zh(e, t) {
    if (e === "change") return t;
  }
  var qh = !1;
  if (bn) {
    var Qc;
    if (bn) {
      var Uc = "oninput" in document;
      if (!Uc) {
        var Dh = document.createElement("div");
        Dh.setAttribute("oninput", "return;"), (Uc = typeof Dh.oninput == "function");
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
      Rh(t, sl, e, Mc(e)), yh(E7, t);
    }
  }
  function C7(e, t, n) {
    e === "focusin" ? (Hh(), (ol = t), (sl = n), ol.attachEvent("onpropertychange", jh)) : e === "focusout" && Hh();
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
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!kt.call(t, o) || !qt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Bh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nh(e, t) {
    var n = Bh(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t)) return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Bh(n);
    }
  }
  function Qh(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
  }
  function Uh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ci(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ci(e.document);
    }
    return t;
  }
  function Lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
  }
  var R7 = bn && "documentMode" in document && 11 >= document.documentMode,
    Fa = null,
    Gc = null,
    hl = null,
    kc = !1;
  function Lh(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    kc ||
      Fa == null ||
      Fa !== Ci(l) ||
      ((l = Fa),
      "selectionStart" in l && Lc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()), (l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset })),
      (hl && fl(hl, l)) || ((hl = l), (l = bu(Gc, "onSelect")), 0 < l.length && ((t = new Ri("onSelect", "select", null, t, n)), e.push({ event: t, listeners: l }), (t.target = Fa))));
  }
  function da(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
  }
  var $a = {
      animationend: da("Animation", "AnimationEnd"),
      animationiteration: da("Animation", "AnimationIteration"),
      animationstart: da("Animation", "AnimationStart"),
      transitionrun: da("Transition", "TransitionRun"),
      transitionstart: da("Transition", "TransitionStart"),
      transitioncancel: da("Transition", "TransitionCancel"),
      transitionend: da("Transition", "TransitionEnd"),
    },
    Vc = {},
    Gh = {};
  bn &&
    ((Gh = document.createElement("div").style),
    "AnimationEvent" in window || (delete $a.animationend.animation, delete $a.animationiteration.animation, delete $a.animationstart.animation),
    "TransitionEvent" in window || delete $a.transitionend.transition);
  function pa(e) {
    if (Vc[e]) return Vc[e];
    if (!$a[e]) return e;
    var t = $a[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gh) return (Vc[e] = t[n]);
    return e;
  }
  var kh = pa("animationend"),
    Vh = pa("animationiteration"),
    Yh = pa("animationstart"),
    z7 = pa("transitionrun"),
    q7 = pa("transitionstart"),
    D7 = pa("transitioncancel"),
    Xh = pa("transitionend"),
    Zh = new Map(),
    Yc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Yc.push("scrollEnd");
  function tn(e, t) {
    Zh.set(e, t), fa(t, [e]);
  }
  var Kh = new WeakMap();
  function Zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Kh.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: oh(t) }), Kh.set(e, t), t);
    }
    return { value: e, source: t, stack: oh(t) };
  }
  var Kt = [],
    Ja = 0,
    Xc = 0;
  function Di() {
    for (var e = Ja, t = (Xc = Ja = 0); t < e; ) {
      var n = Kt[t];
      Kt[t++] = null;
      var l = Kt[t];
      Kt[t++] = null;
      var o = Kt[t];
      Kt[t++] = null;
      var f = Kt[t];
      if (((Kt[t++] = null), l !== null && o !== null)) {
        var b = l.pending;
        b === null ? (o.next = o) : ((o.next = b.next), (b.next = o)), (l.pending = o);
      }
      f !== 0 && Ph(n, o, f);
    }
  }
  function Hi(e, t, n, l) {
    (Kt[Ja++] = e), (Kt[Ja++] = t), (Kt[Ja++] = n), (Kt[Ja++] = l), (Xc |= l), (e.lanes |= l), (e = e.alternate), e !== null && (e.lanes |= l);
  }
  function Zc(e, t, n, l) {
    return Hi(e, t, n, l), ji(e);
  }
  function Ia(e, t) {
    return Hi(e, null, null, t), ji(e);
  }
  function Ph(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, f = e.return; f !== null; ) (f.childLanes |= n), (l = f.alternate), l !== null && (l.childLanes |= n), f.tag === 22 && ((e = f.stateNode), e === null || e._visibility & 1 || (o = !0)), (e = f), (f = f.return);
    return e.tag === 3 ? ((f = e.stateNode), o && t !== null && ((o = 31 - gt(n)), (e = f.hiddenUpdates), (l = e[o]), l === null ? (e[o] = [t]) : l.push(t), (t.lane = n | 536870912)), f) : null;
  }
  function ji(e) {
    if (50 < Nl) throw ((Nl = 0), (Wo = null), Error(i(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {};
  function H7(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Dt(e, t, n, l) {
    return new H7(e, t, n, l);
  }
  function Kc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function yn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Dt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
        : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Fh(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0), (e.lanes = t), (e.child = null), (e.subtreeFlags = 0), (e.memoizedProps = null), (e.memoizedState = null), (e.updateQueue = null), (e.dependencies = null), (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Bi(e, t, n, l, o, f) {
    var b = 0;
    if (((l = e), typeof e == "function")) Kc(e) && (b = 1);
    else if (typeof e == "string") b = Bb(e, n, oe.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case fe:
          return (e = Dt(31, n, t, o)), (e.elementType = fe), (e.lanes = f), e;
        case w:
          return va(n.children, o, f, t);
        case O:
          (b = 8), (o |= 24);
          break;
        case R:
          return (e = Dt(12, n, t, o | 2)), (e.elementType = R), (e.lanes = f), e;
        case G:
          return (e = Dt(13, n, t, o)), (e.elementType = G), (e.lanes = f), e;
        case Y:
          return (e = Dt(19, n, t, o)), (e.elementType = Y), (e.lanes = f), e;
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
                (b = 16), (l = null);
                break e;
            }
          (b = 29), (n = Error(i(130, e === null ? "null" : typeof e, ""))), (l = null);
      }
    return (t = Dt(b, n, t, o)), (t.elementType = e), (t.type = l), (t.lanes = f), t;
  }
  function va(e, t, n, l) {
    return (e = Dt(7, e, l, t)), (e.lanes = n), e;
  }
  function Pc(e, t, n) {
    return (e = Dt(6, e, null, t)), (e.lanes = n), e;
  }
  function Fc(e, t, n) {
    return (t = Dt(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
  }
  var er = [],
    tr = 0,
    Ni = null,
    Qi = 0,
    Pt = [],
    Ft = 0,
    ga = null,
    mn = 1,
    An = "";
  function ba(e, t) {
    (er[tr++] = Qi), (er[tr++] = Ni), (Ni = e), (Qi = t);
  }
  function $h(e, t, n) {
    (Pt[Ft++] = mn), (Pt[Ft++] = An), (Pt[Ft++] = ga), (ga = e);
    var l = mn;
    e = An;
    var o = 32 - gt(l) - 1;
    (l &= ~(1 << o)), (n += 1);
    var f = 32 - gt(t) + o;
    if (30 < f) {
      var b = o - (o % 5);
      (f = (l & ((1 << b) - 1)).toString(32)), (l >>= b), (o -= b), (mn = (1 << (32 - gt(t) + o)) | (n << o) | l), (An = f + e);
    } else (mn = (1 << f) | (n << o) | l), (An = e);
  }
  function $c(e) {
    e.return !== null && (ba(e, 1), $h(e, 1, 0));
  }
  function Jc(e) {
    for (; e === Ni; ) (Ni = er[--tr]), (er[tr] = null), (Qi = er[--tr]), (er[tr] = null);
    for (; e === ga; ) (ga = Pt[--Ft]), (Pt[Ft] = null), (An = Pt[--Ft]), (Pt[Ft] = null), (mn = Pt[--Ft]), (Pt[Ft] = null);
  }
  var xt = null,
    Ie = null,
    Be = !1,
    ya = null,
    on = !1,
    Ic = Error(i(519));
  function ma(e) {
    var t = Error(i(418, ""));
    throw (vl(Zt(t, e)), Ic);
  }
  function Jh(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[bt] = e), (t[_t] = l), n)) {
      case "dialog":
        Re("cancel", t), Re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ul.length; n++) Re(Ul[n], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", t), Re("load", t);
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        Re("invalid", t), hh(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), Ei(t);
        break;
      case "select":
        Re("invalid", t);
        break;
      case "textarea":
        Re("invalid", t), ph(t, l.value, l.defaultValue, l.children), Ei(t);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") || t.textContent === "" + n || l.suppressHydrationWarning === !0 || p4(t.textContent, n)
        ? (l.popover != null && (Re("beforetoggle", t), Re("toggle", t)), l.onScroll != null && Re("scroll", t), l.onScrollEnd != null && Re("scrollend", t), l.onClick != null && (t.onclick = yu), (t = !0))
        : (t = !1),
      t || ma(e);
  }
  function Ih(e) {
    for (xt = e.return; xt; )
      switch (xt.tag) {
        case 5:
        case 13:
          on = !1;
          return;
        case 27:
        case 3:
          on = !0;
          return;
        default:
          xt = xt.return;
      }
  }
  function dl(e) {
    if (e !== xt) return !1;
    if (!Be) return Ih(e), (Be = !0), !1;
    var t = e.tag,
      n;
    if (((n = t !== 3 && t !== 27) && ((n = t === 5) && ((n = e.type), (n = !(n !== "form" && n !== "button") || vs(e.type, e.memoizedProps))), (n = !n)), n && Ie && ma(e), Ih(e), t === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                Ie = an(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        Ie = null;
      }
    } else t === 27 ? ((t = Ie), Jn(e.type) ? ((e = ms), (ms = null), (Ie = e)) : (Ie = t)) : (Ie = xt ? an(e.stateNode.nextSibling) : null);
    return !0;
  }
  function pl() {
    (Ie = xt = null), (Be = !1);
  }
  function Wh() {
    var e = ya;
    return e !== null && (wt === null ? (wt = e) : wt.push.apply(wt, e), (ya = null)), e;
  }
  function vl(e) {
    ya === null ? (ya = [e]) : ya.push(e);
  }
  var Wc = P(null),
    Aa = null,
    xn = null;
  function Bn(e, t, n) {
    te(Wc, t._currentValue), (t._currentValue = n);
  }
  function _n(e) {
    (e._currentValue = Wc.current), W(Wc);
  }
  function eo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (((e.childLanes & t) !== t ? ((e.childLanes |= t), l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n)) break;
      e = e.return;
    }
  }
  function to(e, t, n, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var f = o.dependencies;
      if (f !== null) {
        var b = o.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var y = f;
          f = o;
          for (var T = 0; T < t.length; T++)
            if (y.context === t[T]) {
              (f.lanes |= n), (y = f.alternate), y !== null && (y.lanes |= n), eo(f.return, n, e), l || (b = null);
              break e;
            }
          f = y.next;
        }
      } else if (o.tag === 18) {
        if (((b = o.return), b === null)) throw Error(i(341));
        (b.lanes |= n), (f = b.alternate), f !== null && (f.lanes |= n), eo(b, n, e), (b = null);
      } else b = o.child;
      if (b !== null) b.return = o;
      else
        for (b = o; b !== null; ) {
          if (b === e) {
            b = null;
            break;
          }
          if (((o = b.sibling), o !== null)) {
            (o.return = b.return), (b = o);
            break;
          }
          b = b.return;
        }
      o = b;
    }
  }
  function gl(e, t, n, l) {
    e = null;
    for (var o = t, f = !1; o !== null; ) {
      if (!f) {
        if ((o.flags & 524288) !== 0) f = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var b = o.alternate;
        if (b === null) throw Error(i(387));
        if (((b = b.memoizedProps), b !== null)) {
          var y = o.type;
          qt(o.pendingProps.value, b.value) || (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (o === nt.current) {
        if (((b = o.alternate), b === null)) throw Error(i(387));
        b.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Xl) : (e = [Xl]));
      }
      o = o.return;
    }
    e !== null && to(t, e, n, l), (t.flags |= 262144);
  }
  function Ui(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function xa(e) {
    (Aa = e), (xn = null), (e = e.dependencies), e !== null && (e.firstContext = null);
  }
  function yt(e) {
    return e3(Aa, e);
  }
  function Li(e, t) {
    return Aa === null && xa(e), e3(e, t);
  }
  function e3(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), xn === null)) {
      if (e === null) throw Error(i(308));
      (xn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
    } else xn = xn.next = t;
    return n;
  }
  var j7 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    B7 = r.unstable_scheduleCallback,
    N7 = r.unstable_NormalPriority,
    lt = { $$typeof: L, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function no() {
    return { controller: new j7(), data: new Map(), refCount: 0 };
  }
  function bl(e) {
    e.refCount--,
      e.refCount === 0 &&
        B7(N7, function () {
          e.controller.abort();
        });
  }
  var yl = null,
    ao = 0,
    nr = 0,
    ar = null;
  function Q7(e, t) {
    if (yl === null) {
      var n = (yl = []);
      (ao = 0),
        (nr = is()),
        (ar = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return ao++, t.then(t3, t3), t;
  }
  function t3() {
    if (--ao === 0 && yl !== null) {
      ar !== null && (ar.status = "fulfilled");
      var e = yl;
      (yl = null), (nr = 0), (ar = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function U7(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++) (0, n[o])(void 0);
        }
      ),
      l
    );
  }
  var n3 = U.S;
  U.S = function (e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Q7(e, t), n3 !== null && n3(e, t);
  };
  var _a = P(null);
  function ro() {
    var e = _a.current;
    return e !== null ? e : Ye.pooledCache;
  }
  function Gi(e, t) {
    t === null ? te(_a, _a.current) : te(_a, t.pool);
  }
  function a3() {
    var e = ro();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var ml = Error(i(460)),
    r3 = Error(i(474)),
    ki = Error(i(542)),
    lo = { then: function () {} };
  function l3(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Vi() {}
  function i3(e, t, n) {
    switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Vi, Vi), (t = n)), t.status)) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), c3(e), e);
      default:
        if (typeof t.status == "string") t.then(Vi, Vi);
        else {
          if (((e = Ye), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  (o.status = "fulfilled"), (o.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  (o.status = "rejected"), (o.reason = l);
                }
              }
            );
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
    return (Al = null), e;
  }
  function c3(e) {
    if (e === ml || e === ki) throw Error(i(483));
  }
  var Nn = !1;
  function io(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function uo(e, t) {
    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function Qn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ne & 2) !== 0)) {
      var o = l.pending;
      return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (l.pending = t), (t = ji(e)), Ph(e, null, n), t;
    }
    return Hi(e, l, t, n), ji(e);
  }
  function xl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), th(e, n);
    }
  }
  function co(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var o = null,
        f = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var b = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          f === null ? (o = f = b) : (f = f.next = b), (n = n.next);
        } while (n !== null);
        f === null ? (o = f = t) : (f = f.next = t);
      } else o = f = t;
      (n = { baseState: l.baseState, firstBaseUpdate: o, lastBaseUpdate: f, shared: l.shared, callbacks: l.callbacks }), (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
  }
  var oo = !1;
  function _l() {
    if (oo) {
      var e = ar;
      if (e !== null) throw e;
    }
  }
  function Sl(e, t, n, l) {
    oo = !1;
    var o = e.updateQueue;
    Nn = !1;
    var f = o.firstBaseUpdate,
      b = o.lastBaseUpdate,
      y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var T = y,
        B = T.next;
      (T.next = null), b === null ? (f = B) : (b.next = B), (b = T);
      var V = e.alternate;
      V !== null && ((V = V.updateQueue), (y = V.lastBaseUpdate), y !== b && (y === null ? (V.firstBaseUpdate = B) : (y.next = B), (V.lastBaseUpdate = T)));
    }
    if (f !== null) {
      var F = o.baseState;
      (b = 0), (V = B = T = null), (y = f);
      do {
        var N = y.lane & -536870913,
          Q = N !== y.lane;
        if (Q ? (qe & N) === N : (l & N) === N) {
          N !== 0 && N === nr && (oo = !0), V !== null && (V = V.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null });
          e: {
            var be = e,
              de = y;
            N = t;
            var ke = n;
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
                Nn = !0;
            }
          }
          (N = y.callback), N !== null && ((e.flags |= 64), Q && (e.flags |= 8192), (Q = o.callbacks), Q === null ? (o.callbacks = [N]) : Q.push(N));
        } else (Q = { lane: N, tag: y.tag, payload: y.payload, callback: y.callback, next: null }), V === null ? ((B = V = Q), (T = F)) : (V = V.next = Q), (b |= N);
        if (((y = y.next), y === null)) {
          if (((y = o.shared.pending), y === null)) break;
          (Q = y), (y = Q.next), (Q.next = null), (o.lastBaseUpdate = Q), (o.shared.pending = null);
        }
      } while (!0);
      V === null && (T = F), (o.baseState = T), (o.firstBaseUpdate = B), (o.lastBaseUpdate = V), f === null && (o.shared.lanes = 0), (Kn |= b), (e.lanes = b), (e.memoizedState = F);
    }
  }
  function o3(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function s3(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) o3(n[e], t);
  }
  var rr = P(null),
    Yi = P(0);
  function f3(e, t) {
    (e = Mn), te(Yi, e), te(rr, t), (Mn = e | t.baseLanes);
  }
  function so() {
    te(Yi, Mn), te(rr, rr.current);
  }
  function fo() {
    (Mn = Yi.current), W(rr), W(Yi);
  }
  var Ln = 0,
    Te = null,
    Le = null,
    at = null,
    Xi = !1,
    lr = !1,
    Sa = !1,
    Zi = 0,
    El = 0,
    ir = null,
    L7 = 0;
  function et() {
    throw Error(i(321));
  }
  function ho(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!qt(e[n], t[n])) return !1;
    return !0;
  }
  function po(e, t, n, l, o, f) {
    return (Ln = f), (Te = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (U.H = e === null || e.memoizedState === null ? P3 : F3), (Sa = !1), (f = n(l, o)), (Sa = !1), lr && (f = d3(t, n, l, o)), h3(e), f;
  }
  function h3(e) {
    U.H = Ii;
    var t = Le !== null && Le.next !== null;
    if (((Ln = 0), (at = Le = Te = null), (Xi = !1), (El = 0), (ir = null), t)) throw Error(i(300));
    e === null || ot || ((e = e.dependencies), e !== null && Ui(e) && (ot = !0));
  }
  function d3(e, t, n, l) {
    Te = e;
    var o = 0;
    do {
      if ((lr && (ir = null), (El = 0), (lr = !1), 25 <= o)) throw Error(i(301));
      if (((o += 1), (at = Le = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null), (f.events = null), (f.stores = null), f.memoCache != null && (f.memoCache.index = 0);
      }
      (U.H = K7), (f = t(n, l));
    } while (lr);
    return f;
  }
  function G7() {
    var e = U.H,
      t = e.useState()[0];
    return (t = typeof t.then == "function" ? Cl(t) : t), (e = e.useState()[0]), (Le !== null ? Le.memoizedState : null) !== e && (Te.flags |= 1024), t;
  }
  function vo() {
    var e = Zi !== 0;
    return (Zi = 0), e;
  }
  function go(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function bo(e) {
    if (Xi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Xi = !1;
    }
    (Ln = 0), (at = Le = Te = null), (lr = !1), (El = Zi = 0), (ir = null);
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return at === null ? (Te.memoizedState = at = e) : (at = at.next = e), at;
  }
  function rt() {
    if (Le === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = at === null ? Te.memoizedState : at.next;
    if (t !== null) (at = t), (Le = e);
    else {
      if (e === null) throw Te.alternate === null ? Error(i(467)) : Error(i(310));
      (Le = e), (e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }), at === null ? (Te.memoizedState = at = e) : (at = at.next = e);
    }
    return at;
  }
  function yo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cl(e) {
    var t = El;
    return (El += 1), ir === null && (ir = []), (e = i3(ir, e, t)), (t = Te), (at === null ? t.memoizedState : at.next) === null && ((t = t.alternate), (U.H = t === null || t.memoizedState === null ? P3 : F3)), e;
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
      n = Te.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
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
    if ((t == null && (t = { data: [], index: 0 }), n === null && ((n = yo()), (Te.updateQueue = n)), (n.memoCache = t), (n = t.data[t.index]), n === void 0)) for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ye;
    return t.index++, n;
  }
  function Sn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pi(e) {
    var t = rt();
    return Ao(t, Le, e);
  }
  function Ao(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = n;
    var o = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (o !== null) {
        var b = o.next;
        (o.next = f.next), (f.next = b);
      }
      (t.baseQueue = o = f), (l.pending = null);
    }
    if (((f = e.baseState), o === null)) e.memoizedState = f;
    else {
      t = o.next;
      var y = (b = null),
        T = null,
        B = t,
        V = !1;
      do {
        var F = B.lane & -536870913;
        if (F !== B.lane ? (qe & F) === F : (Ln & F) === F) {
          var N = B.revertLane;
          if (N === 0) T !== null && (T = T.next = { lane: 0, revertLane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), F === nr && (V = !0);
          else if ((Ln & N) === N) {
            (B = B.next), N === nr && (V = !0);
            continue;
          } else (F = { lane: 0, revertLane: B.revertLane, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), T === null ? ((y = T = F), (b = f)) : (T = T.next = F), (Te.lanes |= N), (Kn |= N);
          (F = B.action), Sa && n(f, F), (f = B.hasEagerState ? B.eagerState : n(f, F));
        } else (N = { lane: F, revertLane: B.revertLane, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), T === null ? ((y = T = N), (b = f)) : (T = T.next = N), (Te.lanes |= F), (Kn |= F);
        B = B.next;
      } while (B !== null && B !== t);
      if ((T === null ? (b = f) : (T.next = y), !qt(f, e.memoizedState) && ((ot = !0), V && ((n = ar), n !== null)))) throw n;
      (e.memoizedState = f), (e.baseState = b), (e.baseQueue = T), (l.lastRenderedState = f);
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function xo(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      o = n.pending,
      f = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var b = (o = o.next);
      do (f = e(f, b.action)), (b = b.next);
      while (b !== o);
      qt(f, t.memoizedState) || (ot = !0), (t.memoizedState = f), t.baseQueue === null && (t.baseState = f), (n.lastRenderedState = f);
    }
    return [f, l];
  }
  function p3(e, t, n) {
    var l = Te,
      o = rt(),
      f = Be;
    if (f) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var b = !qt((Le || o).memoizedState, n);
    b && ((o.memoizedState = n), (ot = !0)), (o = o.queue);
    var y = b3.bind(null, l, o, e);
    if ((wl(2048, 8, y, [e]), o.getSnapshot !== t || b || (at !== null && at.memoizedState.tag & 1))) {
      if (((l.flags |= 2048), ur(9, Fi(), g3.bind(null, l, o, n, t), null), Ye === null)) throw Error(i(349));
      f || (Ln & 124) !== 0 || v3(l, t, n);
    }
    return n;
  }
  function v3(e, t, n) {
    (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = Te.updateQueue), t === null ? ((t = yo()), (Te.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function g3(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), y3(t) && m3(e);
  }
  function b3(e, t, n) {
    return n(function () {
      y3(t) && m3(e);
    });
  }
  function y3(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !qt(e, n);
    } catch {
      return !0;
    }
  }
  function m3(e) {
    var t = Ia(e, 2);
    t !== null && Qt(t, e, 2);
  }
  function _o(e) {
    var t = Et();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Sa)) {
        At(!0);
        try {
          n();
        } finally {
          At(!1);
        }
      }
    }
    return (t.memoizedState = t.baseState = e), (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Sn, lastRenderedState: e }), t;
  }
  function A3(e, t, n, l) {
    return (e.baseState = n), Ao(e, Le, typeof l == "function" ? l : Sn);
  }
  function k7(e, t, n, l, o) {
    if (Ji(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          f.listeners.push(b);
        },
      };
      U.T !== null ? n(!0) : (f.isTransition = !1), l(f), (n = t.pending), n === null ? ((f.next = t.pending = f), x3(t, f)) : ((f.next = n.next), (t.pending = n.next = f));
    }
  }
  function x3(e, t) {
    var n = t.action,
      l = t.payload,
      o = e.state;
    if (t.isTransition) {
      var f = U.T,
        b = {};
      U.T = b;
      try {
        var y = n(o, l),
          T = U.S;
        T !== null && T(b, y), _3(e, t, y);
      } catch (B) {
        So(e, t, B);
      } finally {
        U.T = f;
      }
    } else
      try {
        (f = n(o, l)), _3(e, t, f);
      } catch (B) {
        So(e, t, B);
      }
  }
  function _3(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            S3(e, t, l);
          },
          function (l) {
            return So(e, t, l);
          }
        )
      : S3(e, t, n);
  }
  function S3(e, t, n) {
    (t.status = "fulfilled"), (t.value = n), E3(t), (e.state = n), (t = e.pending), t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), x3(e, n)));
  }
  function So(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), E3(t), (t = t.next);
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
      var n = Ye.formState;
      if (n !== null) {
        e: {
          var l = Te;
          if (Be) {
            if (Ie) {
              t: {
                for (var o = Ie, f = on; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (((o = an(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                (f = o.data), (o = f === "F!" || f === "F" ? o : null);
              }
              if (o) {
                (Ie = an(o.nextSibling)), (l = o.data === "F!");
                break e;
              }
            }
            ma(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Et()),
      (n.memoizedState = n.baseState = t),
      (l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: C3, lastRenderedState: t }),
      (n.queue = l),
      (n = X3.bind(null, Te, l)),
      (l.dispatch = n),
      (l = _o(!1)),
      (f = Oo.bind(null, Te, !1, l.queue)),
      (l = Et()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = o),
      (n = k7.bind(null, Te, o, f, n)),
      (o.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function T3(e) {
    var t = rt();
    return O3(t, Le, e);
  }
  function O3(e, t, n) {
    if (((t = Ao(e, t, C3)[0]), (e = Pi(Sn)[0]), typeof t == "object" && t !== null && typeof t.then == "function"))
      try {
        var l = Cl(t);
      } catch (b) {
        throw b === ml ? ki : b;
      }
    else l = t;
    t = rt();
    var o = t.queue,
      f = o.dispatch;
    return n !== t.memoizedState && ((Te.flags |= 2048), ur(9, Fi(), V7.bind(null, o, n), null)), [l, f, e];
  }
  function V7(e, t) {
    e.action = t;
  }
  function M3(e) {
    var t = rt(),
      n = Le;
    if (n !== null) return O3(t, n, e);
    rt(), (t = t.memoizedState), (n = rt());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function ur(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Te.updateQueue),
      t === null && ((t = yo()), (Te.updateQueue = t)),
      (n = t.lastEffect),
      n === null ? (t.lastEffect = e.next = e) : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Fi() {
    return { destroy: void 0, resource: void 0 };
  }
  function R3() {
    return rt().memoizedState;
  }
  function $i(e, t, n, l) {
    var o = Et();
    (l = l === void 0 ? null : l), (Te.flags |= e), (o.memoizedState = ur(1 | t, Fi(), n, l));
  }
  function wl(e, t, n, l) {
    var o = rt();
    l = l === void 0 ? null : l;
    var f = o.memoizedState.inst;
    Le !== null && l !== null && ho(l, Le.memoizedState.deps) ? (o.memoizedState = ur(t, f, n, l)) : ((Te.flags |= e), (o.memoizedState = ur(1 | t, f, n, l)));
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
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
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
  function B3(e, t, n) {
    (n = n != null ? n.concat([e]) : null), wl(4, 4, j3.bind(null, t, e), n);
  }
  function Eo() {}
  function N3(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && ho(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Q3(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && ho(t, l[1])) return l[0];
    if (((l = e()), Sa)) {
      At(!0);
      try {
        e();
      } finally {
        At(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Co(e, t, n) {
    return n === void 0 || (Ln & 1073741824) !== 0 ? (e.memoizedState = t) : ((e.memoizedState = n), (e = Gd()), (Te.lanes |= e), (Kn |= e), n);
  }
  function U3(e, t, n, l) {
    return qt(n, t) ? n : rr.current !== null ? ((e = Co(e, n, l)), qt(e, t) || (ot = !0), e) : (Ln & 42) === 0 ? ((ot = !0), (e.memoizedState = n)) : ((e = Gd()), (Te.lanes |= e), (Kn |= e), t);
  }
  function L3(e, t, n, l, o) {
    var f = K.p;
    K.p = f !== 0 && 8 > f ? f : 8;
    var b = U.T,
      y = {};
    (U.T = y), Oo(e, !1, t, n);
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
      (K.p = f), (U.T = b);
    }
  }
  function Y7() {}
  function wo(e, t, n, l) {
    if (e.tag !== 5) throw Error(i(476));
    var o = G3(e).queue;
    L3(
      e,
      o,
      t,
      re,
      n === null
        ? Y7
        : function () {
            return k3(e), n(l);
          }
    );
  }
  function G3(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: re, baseState: re, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Sn, lastRenderedState: re }, next: null };
    var n = {};
    return (
      (t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Sn, lastRenderedState: n }, next: null }),
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
          var n = Nt();
          e = Qn(n);
          var l = Un(t, e, n);
          l !== null && (Qt(l, t, n), xl(l, t, n)), (t = { cache: no() }), (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Z7(e, t, n) {
    var l = Nt();
    (n = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }), Ji(e) ? Z3(t, n) : ((n = Zc(e, t, n, l)), n !== null && (Qt(n, e, l), K3(n, t, l)));
  }
  function X3(e, t, n) {
    var l = Nt();
    Tl(e, t, n, l);
  }
  function Tl(e, t, n, l) {
    var o = { lane: l, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ji(e)) Z3(t, o);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && ((f = t.lastRenderedReducer), f !== null))
        try {
          var b = t.lastRenderedState,
            y = f(b, n);
          if (((o.hasEagerState = !0), (o.eagerState = y), qt(y, b))) return Hi(e, t, o, 0), Ye === null && Di(), !1;
        } catch {
        } finally {
        }
      if (((n = Zc(e, t, o, l)), n !== null)) return Qt(n, e, l), K3(n, t, l), !0;
    }
    return !1;
  }
  function Oo(e, t, n, l) {
    if (((l = { lane: 2, revertLane: is(), action: l, hasEagerState: !1, eagerState: null, next: null }), Ji(e))) {
      if (t) throw Error(i(479));
    } else (t = Zc(e, n, l, 2)), t !== null && Qt(t, e, 2);
  }
  function Ji(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function Z3(e, t) {
    lr = Xi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
  function K3(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), th(e, n);
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
        return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yt,
      useEffect: z3,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null), $i(4194308, 4, j3.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return $i(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        $i(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Et();
        t = t === void 0 ? null : t;
        var l = e();
        if (Sa) {
          At(!0);
          try {
            e();
          } finally {
            At(!1);
          }
        }
        return (n.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, n) {
        var l = Et();
        if (n !== void 0) {
          var o = n(t);
          if (Sa) {
            At(!0);
            try {
              n(t);
            } finally {
              At(!1);
            }
          }
        } else o = t;
        return (l.memoizedState = l.baseState = o), (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }), (l.queue = e), (e = e.dispatch = Z7.bind(null, Te, e)), [l.memoizedState, e];
      },
      useRef: function (e) {
        var t = Et();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = _o(e);
        var t = e.queue,
          n = X3.bind(null, Te, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var n = Et();
        return Co(n, e, t);
      },
      useTransition: function () {
        var e = _o(!1);
        return (e = L3.bind(null, Te, e.queue, !0, !1)), (Et().memoizedState = e), [!1, e];
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Te,
          o = Et();
        if (Be) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else {
          if (((n = t()), Ye === null)) throw Error(i(349));
          (qe & 124) !== 0 || v3(l, t, n);
        }
        o.memoizedState = n;
        var f = { value: n, getSnapshot: t };
        return (o.queue = f), z3(b3.bind(null, l, f, e), [e]), (l.flags |= 2048), ur(9, Fi(), g3.bind(null, l, f, n, t), null), n;
      },
      useId: function () {
        var e = Et(),
          t = Ye.identifierPrefix;
        if (Be) {
          var n = An,
            l = mn;
          (n = (l & ~(1 << (32 - gt(l) - 1))).toString(32) + n), (t = "«" + t + "R" + n), (n = Zi++), 0 < n && (t += "H" + n.toString(32)), (t += "»");
        } else (n = L7++), (t = "«" + t + "r" + n.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: To,
      useFormState: w3,
      useActionState: w3,
      useOptimistic: function (e) {
        var t = Et();
        t.memoizedState = t.baseState = e;
        var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return (t.queue = n), (t = Oo.bind(null, Te, !0, n)), (n.dispatch = t), [e, t];
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
        return Pi(Sn);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var n = rt();
        return U3(n, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Pi(Sn)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), t];
      },
      useSyncExternalStore: p3,
      useId: V3,
      useHostTransitionStatus: To,
      useFormState: T3,
      useActionState: T3,
      useOptimistic: function (e, t) {
        var n = rt();
        return A3(n, Le, e, t);
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
        return xo(Sn);
      },
      useDebugValue: Eo,
      useDeferredValue: function (e, t) {
        var n = rt();
        return Le === null ? Co(n, e, t) : U3(n, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = xo(Sn)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), t];
      },
      useSyncExternalStore: p3,
      useId: V3,
      useHostTransitionStatus: To,
      useFormState: M3,
      useActionState: M3,
      useOptimistic: function (e, t) {
        var n = rt();
        return Le !== null ? A3(n, Le, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: mo,
      useCacheRefresh: Y3,
    },
    cr = null,
    Ol = 0;
  function Wi(e) {
    var t = Ol;
    return (Ol += 1), cr === null && (cr = []), i3(cr, e, t);
  }
  function Ml(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function eu(e, t) {
    throw t.$$typeof === A ? Error(i(525)) : ((e = Object.prototype.toString.call(t)), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
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
    function n(q, M) {
      if (!e) return null;
      for (; M !== null; ) t(q, M), (M = M.sibling);
      return null;
    }
    function l(q) {
      for (var M = new Map(); q !== null; ) q.key !== null ? M.set(q.key, q) : M.set(q.index, q), (q = q.sibling);
      return M;
    }
    function o(q, M) {
      return (q = yn(q, M)), (q.index = 0), (q.sibling = null), q;
    }
    function f(q, M, j) {
      return (q.index = j), e ? ((j = q.alternate), j !== null ? ((j = j.index), j < M ? ((q.flags |= 67108866), M) : j) : ((q.flags |= 67108866), M)) : ((q.flags |= 1048576), M);
    }
    function b(q) {
      return e && q.alternate === null && (q.flags |= 67108866), q;
    }
    function y(q, M, j, Z) {
      return M === null || M.tag !== 6 ? ((M = Pc(j, q.mode, Z)), (M.return = q), M) : ((M = o(M, j)), (M.return = q), M);
    }
    function T(q, M, j, Z) {
      var ie = j.type;
      return ie === w
        ? V(q, M, j.props.children, Z, j.key)
        : M !== null && (M.elementType === ie || (typeof ie == "object" && ie !== null && ie.$$typeof === ue && $3(ie) === M.type))
        ? ((M = o(M, j.props)), Ml(M, j), (M.return = q), M)
        : ((M = Bi(j.type, j.key, j.props, null, q.mode, Z)), Ml(M, j), (M.return = q), M);
    }
    function B(q, M, j, Z) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? ((M = Fc(j, q.mode, Z)), (M.return = q), M) : ((M = o(M, j.children || [])), (M.return = q), M);
    }
    function V(q, M, j, Z, ie) {
      return M === null || M.tag !== 7 ? ((M = va(j, q.mode, Z, ie)), (M.return = q), M) : ((M = o(M, j)), (M.return = q), M);
    }
    function F(q, M, j) {
      if ((typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint") return (M = Pc("" + M, q.mode, j)), (M.return = q), M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case m:
            return (j = Bi(M.type, M.key, M.props, null, q.mode, j)), Ml(j, M), (j.return = q), j;
          case x:
            return (M = Fc(M, q.mode, j)), (M.return = q), M;
          case ue:
            var Z = M._init;
            return (M = Z(M._payload)), F(q, M, j);
        }
        if (Se(M) || _e(M)) return (M = va(M, q.mode, j, null)), (M.return = q), M;
        if (typeof M.then == "function") return F(q, Wi(M), j);
        if (M.$$typeof === L) return F(q, Li(q, M), j);
        eu(q, M);
      }
      return null;
    }
    function N(q, M, j, Z) {
      var ie = M !== null ? M.key : null;
      if ((typeof j == "string" && j !== "") || typeof j == "number" || typeof j == "bigint") return ie !== null ? null : y(q, M, "" + j, Z);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case m:
            return j.key === ie ? T(q, M, j, Z) : null;
          case x:
            return j.key === ie ? B(q, M, j, Z) : null;
          case ue:
            return (ie = j._init), (j = ie(j._payload)), N(q, M, j, Z);
        }
        if (Se(j) || _e(j)) return ie !== null ? null : V(q, M, j, Z, null);
        if (typeof j.then == "function") return N(q, M, Wi(j), Z);
        if (j.$$typeof === L) return N(q, M, Li(q, j), Z);
        eu(q, j);
      }
      return null;
    }
    function Q(q, M, j, Z, ie) {
      if ((typeof Z == "string" && Z !== "") || typeof Z == "number" || typeof Z == "bigint") return (q = q.get(j) || null), y(M, q, "" + Z, ie);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case m:
            return (q = q.get(Z.key === null ? j : Z.key) || null), T(M, q, Z, ie);
          case x:
            return (q = q.get(Z.key === null ? j : Z.key) || null), B(M, q, Z, ie);
          case ue:
            var Oe = Z._init;
            return (Z = Oe(Z._payload)), Q(q, M, j, Z, ie);
        }
        if (Se(Z) || _e(Z)) return (q = q.get(j) || null), V(M, q, Z, ie, null);
        if (typeof Z.then == "function") return Q(q, M, j, Wi(Z), ie);
        if (Z.$$typeof === L) return Q(q, M, j, Li(M, Z), ie);
        eu(M, Z);
      }
      return null;
    }
    function be(q, M, j, Z) {
      for (var ie = null, Oe = null, se = M, pe = (M = 0), ft = null; se !== null && pe < j.length; pe++) {
        se.index > pe ? ((ft = se), (se = null)) : (ft = se.sibling);
        var He = N(q, se, j[pe], Z);
        if (He === null) {
          se === null && (se = ft);
          break;
        }
        e && se && He.alternate === null && t(q, se), (M = f(He, M, pe)), Oe === null ? (ie = He) : (Oe.sibling = He), (Oe = He), (se = ft);
      }
      if (pe === j.length) return n(q, se), Be && ba(q, pe), ie;
      if (se === null) {
        for (; pe < j.length; pe++) (se = F(q, j[pe], Z)), se !== null && ((M = f(se, M, pe)), Oe === null ? (ie = se) : (Oe.sibling = se), (Oe = se));
        return Be && ba(q, pe), ie;
      }
      for (se = l(se); pe < j.length; pe++) (ft = Q(se, q, pe, j[pe], Z)), ft !== null && (e && ft.alternate !== null && se.delete(ft.key === null ? pe : ft.key), (M = f(ft, M, pe)), Oe === null ? (ie = ft) : (Oe.sibling = ft), (Oe = ft));
      return (
        e &&
          se.forEach(function (na) {
            return t(q, na);
          }),
        Be && ba(q, pe),
        ie
      );
    }
    function de(q, M, j, Z) {
      if (j == null) throw Error(i(151));
      for (var ie = null, Oe = null, se = M, pe = (M = 0), ft = null, He = j.next(); se !== null && !He.done; pe++, He = j.next()) {
        se.index > pe ? ((ft = se), (se = null)) : (ft = se.sibling);
        var na = N(q, se, He.value, Z);
        if (na === null) {
          se === null && (se = ft);
          break;
        }
        e && se && na.alternate === null && t(q, se), (M = f(na, M, pe)), Oe === null ? (ie = na) : (Oe.sibling = na), (Oe = na), (se = ft);
      }
      if (He.done) return n(q, se), Be && ba(q, pe), ie;
      if (se === null) {
        for (; !He.done; pe++, He = j.next()) (He = F(q, He.value, Z)), He !== null && ((M = f(He, M, pe)), Oe === null ? (ie = He) : (Oe.sibling = He), (Oe = He));
        return Be && ba(q, pe), ie;
      }
      for (se = l(se); !He.done; pe++, He = j.next())
        (He = Q(se, q, pe, He.value, Z)), He !== null && (e && He.alternate !== null && se.delete(He.key === null ? pe : He.key), (M = f(He, M, pe)), Oe === null ? (ie = He) : (Oe.sibling = He), (Oe = He));
      return (
        e &&
          se.forEach(function (Pb) {
            return t(q, Pb);
          }),
        Be && ba(q, pe),
        ie
      );
    }
    function ke(q, M, j, Z) {
      if ((typeof j == "object" && j !== null && j.type === w && j.key === null && (j = j.props.children), typeof j == "object" && j !== null)) {
        switch (j.$$typeof) {
          case m:
            e: {
              for (var ie = j.key; M !== null; ) {
                if (M.key === ie) {
                  if (((ie = j.type), ie === w)) {
                    if (M.tag === 7) {
                      n(q, M.sibling), (Z = o(M, j.props.children)), (Z.return = q), (q = Z);
                      break e;
                    }
                  } else if (M.elementType === ie || (typeof ie == "object" && ie !== null && ie.$$typeof === ue && $3(ie) === M.type)) {
                    n(q, M.sibling), (Z = o(M, j.props)), Ml(Z, j), (Z.return = q), (q = Z);
                    break e;
                  }
                  n(q, M);
                  break;
                } else t(q, M);
                M = M.sibling;
              }
              j.type === w ? ((Z = va(j.props.children, q.mode, Z, j.key)), (Z.return = q), (q = Z)) : ((Z = Bi(j.type, j.key, j.props, null, q.mode, Z)), Ml(Z, j), (Z.return = q), (q = Z));
            }
            return b(q);
          case x:
            e: {
              for (ie = j.key; M !== null; ) {
                if (M.key === ie)
                  if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                    n(q, M.sibling), (Z = o(M, j.children || [])), (Z.return = q), (q = Z);
                    break e;
                  } else {
                    n(q, M);
                    break;
                  }
                else t(q, M);
                M = M.sibling;
              }
              (Z = Fc(j, q.mode, Z)), (Z.return = q), (q = Z);
            }
            return b(q);
          case ue:
            return (ie = j._init), (j = ie(j._payload)), ke(q, M, j, Z);
        }
        if (Se(j)) return be(q, M, j, Z);
        if (_e(j)) {
          if (((ie = _e(j)), typeof ie != "function")) throw Error(i(150));
          return (j = ie.call(j)), de(q, M, j, Z);
        }
        if (typeof j.then == "function") return ke(q, M, Wi(j), Z);
        if (j.$$typeof === L) return ke(q, M, Li(q, j), Z);
        eu(q, j);
      }
      return (typeof j == "string" && j !== "") || typeof j == "number" || typeof j == "bigint"
        ? ((j = "" + j), M !== null && M.tag === 6 ? (n(q, M.sibling), (Z = o(M, j)), (Z.return = q), (q = Z)) : (n(q, M), (Z = Pc(j, q.mode, Z)), (Z.return = q), (q = Z)), b(q))
        : n(q, M);
    }
    return function (q, M, j, Z) {
      try {
        Ol = 0;
        var ie = ke(q, M, j, Z);
        return (cr = null), ie;
      } catch (se) {
        if (se === ml || se === ki) throw se;
        var Oe = Dt(29, se, null, q.mode);
        return (Oe.lanes = Z), (Oe.return = q), Oe;
      } finally {
      }
    };
  }
  var or = J3(!0),
    I3 = J3(!1),
    $t = P(null),
    sn = null;
  function Gn(e) {
    var t = e.alternate;
    te(it, it.current & 1), te($t, e), sn === null && (t === null || rr.current !== null || t.memoizedState !== null) && (sn = e);
  }
  function W3(e) {
    if (e.tag === 22) {
      if ((te(it, it.current), te($t, e), sn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (sn = e);
      }
    } else kn();
  }
  function kn() {
    te(it, it.current), te($t, $t.current);
  }
  function En(e) {
    W($t), sn === e && (sn = null), W(it);
  }
  var it = P(0);
  function tu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || ys(n))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Mo(e, t, n, l) {
    (t = e.memoizedState), (n = n(l, t)), (n = n == null ? t : g({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ro = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Nt(),
        o = Qn(l);
      (o.payload = t), n != null && (o.callback = n), (t = Un(e, o, l)), t !== null && (Qt(t, e, l), xl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Nt(),
        o = Qn(l);
      (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = Un(e, o, l)), t !== null && (Qt(t, e, l), xl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Nt(),
        l = Qn(n);
      (l.tag = 2), t != null && (l.callback = t), (t = Un(e, l, n)), t !== null && (Qt(t, e, n), xl(t, e, n));
    },
  };
  function ed(e, t, n, l, o, f, b) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, b) : t.prototype && t.prototype.isPureReactComponent ? !fl(n, l) || !fl(o, f) : !0;
  }
  function td(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
  }
  function Ea(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = g({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  var nu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function nd(e) {
    nu(e);
  }
  function ad(e) {
    console.error(e);
  }
  function rd(e) {
    nu(e);
  }
  function au(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function ld(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function zo(e, t, n) {
    return (
      (n = Qn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        au(e, t);
      }),
      n
    );
  }
  function id(e) {
    return (e = Qn(e)), (e.tag = 3), e;
  }
  function ud(e, t, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = l.value;
      (e.payload = function () {
        return o(f);
      }),
        (e.callback = function () {
          ld(t, n, l);
        });
    }
    var b = n.stateNode;
    b !== null &&
      typeof b.componentDidCatch == "function" &&
      (e.callback = function () {
        ld(t, n, l), typeof o != "function" && (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var y = l.stack;
        this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
      });
  }
  function P7(e, t, n, l, o) {
    if (((n.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
      if (((t = n.alternate), t !== null && gl(t, n, o, !0), (n = $t.current), n !== null)) {
        switch (n.tag) {
          case 13:
            return (
              sn === null ? ts() : n.alternate === null && We === 0 && (We = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              l === lo ? (n.flags |= 16384) : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([l])) : t.add(l), as(e, l, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === lo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue), t === null ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }), (n.updateQueue = t)) : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)), as(e, l, o)),
              !1
            );
        }
        throw Error(i(435, n.tag));
      }
      return as(e, l, o), ts(), !1;
    }
    if (Be)
      return (
        (t = $t.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256), (t.flags |= 65536), (t.lanes = o), l !== Ic && ((e = Error(i(422), { cause: l })), vl(Zt(e, n))))
          : (l !== Ic && ((t = Error(i(423), { cause: l })), vl(Zt(t, n))), (e = e.current.alternate), (e.flags |= 65536), (o &= -o), (e.lanes |= o), (l = Zt(l, n)), (o = zo(e.stateNode, l, o)), co(e, o), We !== 4 && (We = 2)),
        !1
      );
    var f = Error(i(520), { cause: l });
    if (((f = Zt(f, n)), Bl === null ? (Bl = [f]) : Bl.push(f), We !== 4 && (We = 2), t === null)) return !0;
    (l = Zt(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (n.flags |= 65536), (e = o & -o), (n.lanes |= e), (e = zo(n.stateNode, l, e)), co(n, e), !1;
        case 1:
          if (((t = n.type), (f = n.stateNode), (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || (f !== null && typeof f.componentDidCatch == "function" && (Pn === null || !Pn.has(f))))))
            return (n.flags |= 65536), (o &= -o), (n.lanes |= o), (o = id(o)), ud(o, e, n, l), co(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var cd = Error(i(461)),
    ot = !1;
  function ht(e, t, n, l) {
    t.child = e === null ? I3(t, null, n, l) : or(t, e.child, n, l);
  }
  function od(e, t, n, l, o) {
    n = n.render;
    var f = t.ref;
    if ("ref" in l) {
      var b = {};
      for (var y in l) y !== "ref" && (b[y] = l[y]);
    } else b = l;
    return xa(t), (l = po(e, t, n, b, f, o)), (y = vo()), e !== null && !ot ? (go(e, t, o), Cn(e, t, o)) : (Be && y && $c(t), (t.flags |= 1), ht(e, t, l, o), t.child);
  }
  function sd(e, t, n, l, o) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" && !Kc(f) && f.defaultProps === void 0 && n.compare === null ? ((t.tag = 15), (t.type = f), fd(e, t, f, l, o)) : ((e = Bi(n.type, null, l, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), !Uo(e, o))) {
      var b = f.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : fl), n(b, l) && e.ref === t.ref)) return Cn(e, t, o);
    }
    return (t.flags |= 1), (e = yn(f, l)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function fd(e, t, n, l, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (fl(f, l) && e.ref === t.ref)
        if (((ot = !1), (t.pendingProps = l = f), Uo(e, o))) (e.flags & 131072) !== 0 && (ot = !0);
        else return (t.lanes = e.lanes), Cn(e, t, o);
    }
    return qo(e, t, n, l, o);
  }
  function hd(e, t, n) {
    var l = t.pendingProps,
      o = l.children,
      f = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = f !== null ? f.baseLanes | n : n), e !== null)) {
          for (o = t.child = e.child, f = 0; o !== null; ) (f = f | o.lanes | o.childLanes), (o = o.sibling);
          t.childLanes = f & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return dd(e, t, l, n);
      }
      if ((n & 536870912) !== 0) (t.memoizedState = { baseLanes: 0, cachePool: null }), e !== null && Gi(t, f !== null ? f.cachePool : null), f !== null ? f3(t, f) : so(), W3(t);
      else return (t.lanes = t.childLanes = 536870912), dd(e, t, f !== null ? f.baseLanes | n : n, n);
    } else f !== null ? (Gi(t, f.cachePool), f3(t, f), kn(), (t.memoizedState = null)) : (e !== null && Gi(t, null), so(), kn());
    return ht(e, t, o, n), t.child;
  }
  function dd(e, t, n, l) {
    var o = ro();
    return (o = o === null ? null : { parent: lt._currentValue, pool: o }), (t.memoizedState = { baseLanes: n, cachePool: o }), e !== null && Gi(t, null), so(), W3(t), e !== null && gl(e, t, l, !0), null;
  }
  function ru(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function qo(e, t, n, l, o) {
    return xa(t), (n = po(e, t, n, l, void 0, o)), (l = vo()), e !== null && !ot ? (go(e, t, o), Cn(e, t, o)) : (Be && l && $c(t), (t.flags |= 1), ht(e, t, n, o), t.child);
  }
  function pd(e, t, n, l, o, f) {
    return xa(t), (t.updateQueue = null), (n = d3(t, l, n, o)), h3(e), (l = vo()), e !== null && !ot ? (go(e, t, f), Cn(e, t, f)) : (Be && l && $c(t), (t.flags |= 1), ht(e, t, n, f), t.child);
  }
  function vd(e, t, n, l, o) {
    if ((xa(t), t.stateNode === null)) {
      var f = Wa,
        b = n.contextType;
      typeof b == "object" && b !== null && (f = yt(b)),
        (f = new n(l, f)),
        (t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Ro),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = l),
        (f.state = t.memoizedState),
        (f.refs = {}),
        io(t),
        (b = n.contextType),
        (f.context = typeof b == "object" && b !== null ? yt(b) : Wa),
        (f.state = t.memoizedState),
        (b = n.getDerivedStateFromProps),
        typeof b == "function" && (Mo(t, n, b, l), (f.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function") ||
          ((b = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
          b !== f.state && Ro.enqueueReplaceState(f, f.state, null),
          Sl(t, l, f, o),
          _l(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      f = t.stateNode;
      var y = t.memoizedProps,
        T = Ea(n, y);
      f.props = T;
      var B = f.context,
        V = n.contextType;
      (b = Wa), typeof V == "object" && V !== null && (b = yt(V));
      var F = n.getDerivedStateFromProps;
      (V = typeof F == "function" || typeof f.getSnapshotBeforeUpdate == "function"),
        (y = t.pendingProps !== y),
        V || (typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function") || ((y || B !== b) && td(t, f, l, b)),
        (Nn = !1);
      var N = t.memoizedState;
      (f.state = N),
        Sl(t, l, f, o),
        _l(),
        (B = t.memoizedState),
        y || N !== B || Nn
          ? (typeof F == "function" && (Mo(t, n, F, l), (B = t.memoizedState)),
            (T = Nn || ed(t, n, T, l, N, B, b))
              ? (V ||
                  (typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = l), (t.memoizedState = B)),
            (f.props = l),
            (f.state = B),
            (f.context = b),
            (l = T))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (l = !1));
    } else {
      (f = t.stateNode),
        uo(e, t),
        (b = t.memoizedProps),
        (V = Ea(n, b)),
        (f.props = V),
        (F = t.pendingProps),
        (N = f.context),
        (B = n.contextType),
        (T = Wa),
        typeof B == "object" && B !== null && (T = yt(B)),
        (y = n.getDerivedStateFromProps),
        (B = typeof y == "function" || typeof f.getSnapshotBeforeUpdate == "function") || (typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function") || ((b !== F || N !== T) && td(t, f, l, T)),
        (Nn = !1),
        (N = t.memoizedState),
        (f.state = N),
        Sl(t, l, f, o),
        _l();
      var Q = t.memoizedState;
      b !== F || N !== Q || Nn || (e !== null && e.dependencies !== null && Ui(e.dependencies))
        ? (typeof y == "function" && (Mo(t, n, y, l), (Q = t.memoizedState)),
          (V = Nn || ed(t, n, V, l, N, Q, T) || (e !== null && e.dependencies !== null && Ui(e.dependencies)))
            ? (B ||
                (typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, Q, T), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, Q, T)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Q)),
          (f.props = l),
          (f.state = Q),
          (f.context = T),
          (l = V))
        : (typeof f.componentDidUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" || (b === e.memoizedProps && N === e.memoizedState) || (t.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      ru(e, t),
      (l = (t.flags & 128) !== 0),
      f || l
        ? ((f = t.stateNode),
          (n = l && typeof n.getDerivedStateFromError != "function" ? null : f.render()),
          (t.flags |= 1),
          e !== null && l ? ((t.child = or(t, e.child, null, o)), (t.child = or(t, null, n, o))) : ht(e, t, n, o),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Cn(e, t, o)),
      e
    );
  }
  function gd(e, t, n, l) {
    return pl(), (t.flags |= 256), ht(e, t, n, l), t.child;
  }
  var Do = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ho(e) {
    return { baseLanes: e, cachePool: a3() };
  }
  function jo(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Jt), e;
  }
  function bd(e, t, n) {
    var l = t.pendingProps,
      o = !1,
      f = (t.flags & 128) !== 0,
      b;
    if (((b = f) || (b = e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0), b && ((o = !0), (t.flags &= -129)), (b = (t.flags & 32) !== 0), (t.flags &= -33), e === null)) {
      if (Be) {
        if ((o ? Gn(t) : kn(), Be)) {
          var y = Ie,
            T;
          if ((T = y)) {
            e: {
              for (T = y, y = on; T.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((T = an(T.nextSibling)), T === null)) {
                  y = null;
                  break e;
                }
              }
              y = T;
            }
            y !== null
              ? ((t.memoizedState = { dehydrated: y, treeContext: ga !== null ? { id: mn, overflow: An } : null, retryLane: 536870912, hydrationErrors: null }),
                (T = Dt(18, null, null, 0)),
                (T.stateNode = y),
                (T.return = t),
                (t.child = T),
                (xt = t),
                (Ie = null),
                (T = !0))
              : (T = !1);
          }
          T || ma(t);
        }
        if (((y = t.memoizedState), y !== null && ((y = y.dehydrated), y !== null))) return ys(y) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        En(t);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        o
          ? (kn(),
            (o = t.mode),
            (y = lu({ mode: "hidden", children: y }, o)),
            (l = va(l, o, n, null)),
            (y.return = t),
            (l.return = t),
            (y.sibling = l),
            (t.child = y),
            (o = t.child),
            (o.memoizedState = Ho(n)),
            (o.childLanes = jo(e, b, n)),
            (t.memoizedState = Do),
            l)
          : (Gn(t), Bo(t, y))
      );
    }
    if (((T = e.memoizedState), T !== null && ((y = T.dehydrated), y !== null))) {
      if (f)
        t.flags & 256
          ? (Gn(t), (t.flags &= -257), (t = No(e, t, n)))
          : t.memoizedState !== null
          ? (kn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (kn(),
            (o = l.fallback),
            (y = t.mode),
            (l = lu({ mode: "visible", children: l.children }, y)),
            (o = va(o, y, n, null)),
            (o.flags |= 2),
            (l.return = t),
            (o.return = t),
            (l.sibling = o),
            (t.child = l),
            or(t, e.child, null, n),
            (l = t.child),
            (l.memoizedState = Ho(n)),
            (l.childLanes = jo(e, b, n)),
            (t.memoizedState = Do),
            (t = o));
      else if ((Gn(t), ys(y))) {
        if (((b = y.nextSibling && y.nextSibling.dataset), b)) var B = b.dgst;
        (b = B), (l = Error(i(419))), (l.stack = ""), (l.digest = b), vl({ value: l, source: null, stack: null }), (t = No(e, t, n));
      } else if ((ot || gl(e, t, n, !1), (b = (n & e.childLanes) !== 0), ot || b)) {
        if (((b = Ye), b !== null && ((l = n & -n), (l = (l & 42) !== 0 ? 1 : yc(l)), (l = (l & (b.suspendedLanes | n)) !== 0 ? 0 : l), l !== 0 && l !== T.retryLane))) throw ((T.retryLane = l), Ia(e, l), Qt(b, e, l), cd);
        y.data === "$?" || ts(), (t = No(e, t, n));
      } else
        y.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = T.treeContext),
            (Ie = an(y.nextSibling)),
            (xt = t),
            (Be = !0),
            (ya = null),
            (on = !1),
            e !== null && ((Pt[Ft++] = mn), (Pt[Ft++] = An), (Pt[Ft++] = ga), (mn = e.id), (An = e.overflow), (ga = t)),
            (t = Bo(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? (kn(),
        (o = l.fallback),
        (y = t.mode),
        (T = e.child),
        (B = T.sibling),
        (l = yn(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        B !== null ? (o = yn(B, o)) : ((o = va(o, y, n, null)), (o.flags |= 2)),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        (y = e.child.memoizedState),
        y === null ? (y = Ho(n)) : ((T = y.cachePool), T !== null ? ((B = lt._currentValue), (T = T.parent !== B ? { parent: B, pool: B } : T)) : (T = a3()), (y = { baseLanes: y.baseLanes | n, cachePool: T })),
        (o.memoizedState = y),
        (o.childLanes = jo(e, b, n)),
        (t.memoizedState = Do),
        l)
      : (Gn(t),
        (n = e.child),
        (e = n.sibling),
        (n = yn(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null && ((b = t.deletions), b === null ? ((t.deletions = [e]), (t.flags |= 16)) : b.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Bo(e, t) {
    return (t = lu({ mode: "visible", children: t }, e.mode)), (t.return = e), (e.child = t);
  }
  function lu(e, t) {
    return (e = Dt(22, e, null, t)), (e.lanes = 0), (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e;
  }
  function No(e, t, n) {
    return or(t, e.child, null, n), (e = Bo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
  }
  function yd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), eo(e.return, t, n);
  }
  function Qo(e, t, n, l, o) {
    var f = e.memoizedState;
    f === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: n, tailMode: o }) : ((f.isBackwards = t), (f.rendering = null), (f.renderingStartTime = 0), (f.last = l), (f.tail = n), (f.tailMode = o));
  }
  function md(e, t, n) {
    var l = t.pendingProps,
      o = l.revealOrder,
      f = l.tail;
    if ((ht(e, t, l.children, n), (l = it.current), (l & 2) !== 0)) (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && yd(e, n, t);
          else if (e.tag === 19) yd(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((te(it, l), o)) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && tu(e) === null && (o = n), (n = n.sibling);
        (n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Qo(t, !1, o, n, f);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && tu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Qo(t, !0, n, null, f);
        break;
      case "together":
        Qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Cn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Kn |= t.lanes), (n & t.childLanes) === 0))
      if (e !== null) {
        if ((gl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = yn(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Uo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Ui(e)));
  }
  function F7(e, t, n) {
    switch (t.tag) {
      case 3:
        De(t, t.stateNode.containerInfo), Bn(t, lt, e.memoizedState.cache), pl();
        break;
      case 27:
      case 5:
        Ke(t);
        break;
      case 4:
        De(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (Gn(t), (t.flags |= 128), null) : (n & t.child.childLanes) !== 0 ? bd(e, t, n) : (Gn(t), (e = Cn(e, t, n)), e !== null ? e.sibling : null);
        Gn(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (((l = (n & t.childLanes) !== 0), l || (gl(e, t, n, !1), (l = (n & t.childLanes) !== 0)), o)) {
          if (l) return md(e, t, n);
          t.flags |= 128;
        }
        if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), te(it, it.current), l)) break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), hd(e, t, n);
      case 24:
        Bn(t, lt, e.memoizedState.cache);
    }
    return Cn(e, t, n);
  }
  function Ad(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ot = !0;
      else {
        if (!Uo(e, n) && (t.flags & 128) === 0) return (ot = !1), F7(e, t, n);
        ot = (e.flags & 131072) !== 0;
      }
    else (ot = !1), Be && (t.flags & 1048576) !== 0 && $h(t, Qi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            o = l._init;
          if (((l = o(l._payload)), (t.type = l), typeof l == "function")) Kc(l) ? ((e = Ea(l, e)), (t.tag = 1), (t = vd(null, t, l, e, n))) : ((t.tag = 0), (t = qo(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((o = l.$$typeof), o === k)) {
                (t.tag = 11), (t = od(null, t, l, e, n));
                break e;
              } else if (o === J) {
                (t.tag = 14), (t = sd(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = Ae(l) || l), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return qo(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (o = Ea(l, t.pendingProps)), vd(e, t, l, o, n);
      case 3:
        e: {
          if ((De(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          (o = f.element), uo(e, t), Sl(t, l, null, n);
          var b = t.memoizedState;
          if (((l = b.cache), Bn(t, lt, l), l !== f.cache && to(t, [lt], n, !0), _l(), (l = b.element), f.isDehydrated))
            if (((f = { element: l, isDehydrated: !1, cache: b.cache }), (t.updateQueue.baseState = f), (t.memoizedState = f), t.flags & 256)) {
              t = gd(e, t, l, n);
              break e;
            } else if (l !== o) {
              (o = Zt(Error(i(424)), t)), vl(o), (t = gd(e, t, l, n));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ie = an(e.firstChild), xt = t, Be = !0, ya = null, on = !0, n = I3(t, null, l, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((pl(), l === o)) {
              t = Cn(e, t, n);
              break e;
            }
            ht(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ru(e, t),
          e === null
            ? (n = E4(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Be || ((n = t.type), (e = t.pendingProps), (l = mu(he.current).createElement(n)), (l[bt] = t), (l[_t] = e), pt(l, n, e), ct(l), (t.stateNode = l))
            : (t.memoizedState = E4(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ke(t),
          e === null && Be && ((l = t.stateNode = x4(t.type, t.pendingProps, he.current)), (xt = t), (on = !0), (o = Ie), Jn(t.type) ? ((ms = o), (Ie = an(l.firstChild))) : (Ie = o)),
          ht(e, t, t.pendingProps.children, n),
          ru(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null && Be && ((o = l = Ie) && ((l = Sb(l, t.type, t.pendingProps, on)), l !== null ? ((t.stateNode = l), (xt = t), (Ie = an(l.firstChild)), (on = !1), (o = !0)) : (o = !1)), o || ma(t)),
          Ke(t),
          (o = t.type),
          (f = t.pendingProps),
          (b = e !== null ? e.memoizedProps : null),
          (l = f.children),
          vs(o, f) ? (l = null) : b !== null && vs(o, b) && (t.flags |= 32),
          t.memoizedState !== null && ((o = po(e, t, G7, null, null, n)), (Xl._currentValue = o)),
          ru(e, t),
          ht(e, t, l, n),
          t.child
        );
      case 6:
        return e === null && Be && ((e = n = Ie) && ((n = Eb(n, t.pendingProps, on)), n !== null ? ((t.stateNode = n), (xt = t), (Ie = null), (e = !0)) : (e = !1)), e || ma(t)), null;
      case 13:
        return bd(e, t, n);
      case 4:
        return De(t, t.stateNode.containerInfo), (l = t.pendingProps), e === null ? (t.child = or(t, null, l, n)) : ht(e, t, l, n), t.child;
      case 11:
        return od(e, t, t.type, t.pendingProps, n);
      case 7:
        return ht(e, t, t.pendingProps, n), t.child;
      case 8:
        return ht(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ht(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (l = t.pendingProps), Bn(t, t.type, l.value), ht(e, t, l.children, n), t.child;
      case 9:
        return (o = t.type._context), (l = t.pendingProps.children), xa(t), (o = yt(o)), (l = l(o)), (t.flags |= 1), ht(e, t, l, n), t.child;
      case 14:
        return sd(e, t, t.type, t.pendingProps, n);
      case 15:
        return fd(e, t, t.type, t.pendingProps, n);
      case 19:
        return md(e, t, n);
      case 31:
        return (
          (l = t.pendingProps),
          (n = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null ? ((n = lu(l, n)), (n.ref = t.ref), (t.child = n), (n.return = t), (t = n)) : ((n = yn(e.child, l)), (n.ref = t.ref), (t.child = n), (n.return = t), (t = n)),
          t
        );
      case 22:
        return hd(e, t, n);
      case 24:
        return (
          xa(t),
          (l = yt(lt)),
          e === null
            ? ((o = ro()), o === null && ((o = Ye), (f = no()), (o.pooledCache = f), f.refCount++, f !== null && (o.pooledCacheLanes |= n), (o = f)), (t.memoizedState = { parent: l, cache: o }), io(t), Bn(t, lt, o))
            : ((e.lanes & n) !== 0 && (uo(e, t), Sl(t, null, null, n), _l()),
              (o = e.memoizedState),
              (f = t.memoizedState),
              o.parent !== l ? ((o = { parent: l, cache: l }), (t.memoizedState = o), t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Bn(t, lt, l)) : ((l = f.cache), Bn(t, lt, l), l !== o.cache && to(t, [lt], n, !0))),
          ht(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function wn(e) {
    e.flags |= 4;
  }
  function xd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !M4(t))) {
      if (((t = $t.current), t !== null && ((qe & 4194048) === qe ? sn !== null : ((qe & 62914560) !== qe && (qe & 536870912) === 0) || t !== sn))) throw ((Al = lo), r3);
      e.flags |= 8192;
    }
  }
  function iu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? W2() : 536870912), (e.lanes |= t), (dr |= t));
  }
  function Rl(e, t) {
    if (!Be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; ) n.alternate !== null && (l = n), (n = n.sibling);
          l === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (l.sibling = null);
      }
  }
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t) for (var o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (l |= o.subtreeFlags & 65011712), (l |= o.flags & 65011712), (o.return = e), (o = o.sibling);
    else for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (l |= o.subtreeFlags), (l |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function $7(e, t, n) {
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
        return Je(t), null;
      case 1:
        return Je(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          _n(lt),
          Xe(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) && (dl(t) ? wn(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), Wh())),
          Je(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (wn(t), n !== null ? (Je(t), xd(t, n)) : (Je(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (wn(t), Je(t), xd(t, n))
              : (Je(t), (t.flags &= -16777217))
            : (e.memoizedProps !== l && wn(t), Je(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Gt(t), (n = he.current);
        var o = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && wn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Je(t), null;
          }
          (e = oe.current), dl(t) ? Jh(t) : ((e = x4(o, l, n)), (t.stateNode = e), wn(t));
        }
        return Je(t), null;
      case 5:
        if ((Gt(t), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== l && wn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Je(t), null;
          }
          if (((e = oe.current), dl(t))) Jh(t);
          else {
            switch (((o = mu(he.current)), e)) {
              case 1:
                e = o.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = o.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    (e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e = typeof l.is == "string" ? o.createElement("select", { is: l.is }) : o.createElement("select")), l.multiple ? (e.multiple = !0) : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? o.createElement(n, { is: l.is }) : o.createElement(n);
                }
            }
            (e[bt] = t), (e[_t] = l);
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                (o.child.return = o), (o = o.child);
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
            t.stateNode = e;
            e: switch ((pt(e, n, l), n)) {
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
            e && wn(t);
          }
        }
        return Je(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && wn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = he.current), dl(t))) {
            if (((e = t.stateNode), (n = t.memoizedProps), (l = null), (o = xt), o !== null))
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            (e[bt] = t), (e = !!(e.nodeValue === n || (l !== null && l.suppressHydrationWarning === !0) || p4(e.nodeValue, n))), e || ma(t);
          } else (e = mu(e).createTextNode(l)), (e[bt] = t), (t.stateNode = e);
        }
        return Je(t), null;
      case 13:
        if (((l = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((o = dl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(i(317));
              o[bt] = t;
            } else pl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            Je(t), (o = !1);
          } else (o = Wh()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), (o = !0);
          if (!o) return t.flags & 256 ? (En(t), t) : (En(t), null);
        }
        if ((En(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (((n = l !== null), (e = e !== null && e.memoizedState !== null), n)) {
          (l = t.child), (o = null), l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool);
          var f = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== o && (l.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), iu(t, t.updateQueue), Je(t), null;
      case 4:
        return Xe(), e === null && ss(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return _n(t.type), Je(t), null;
      case 19:
        if ((W(it), (o = t.memoizedState), o === null)) return Je(t), null;
        if (((l = (t.flags & 128) !== 0), (f = o.rendering), f === null))
          if (l) Rl(o, !1);
          else {
            if (We !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = tu(e)), f !== null)) {
                  for (t.flags |= 128, Rl(o, !1), e = f.updateQueue, t.updateQueue = e, iu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) Fh(n, e), (n = n.sibling);
                  return te(it, (it.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && $() > ou && ((t.flags |= 128), (l = !0), Rl(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = tu(f)), e !== null)) {
              if (((t.flags |= 128), (l = !0), (e = e.updateQueue), (t.updateQueue = e), iu(t, e), Rl(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Be)) return Je(t), null;
            } else 2 * $() - o.renderingStartTime > ou && n !== 536870912 && ((t.flags |= 128), (l = !0), Rl(o, !1), (t.lanes = 4194304));
          o.isBackwards ? ((f.sibling = t.child), (t.child = f)) : ((e = o.last), e !== null ? (e.sibling = f) : (t.child = f), (o.last = f));
        }
        return o.tail !== null ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = $()), (t.sibling = null), (e = it.current), te(it, l ? (e & 1) | 2 : e & 1), t) : (Je(t), null);
      case 22:
      case 23:
        return (
          En(t),
          fo(),
          (l = t.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
          l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t),
          (n = t.updateQueue),
          n !== null && iu(t, n.retryQueue),
          (n = null),
          e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && W(_a),
          null
        );
      case 24:
        return (n = null), e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _n(lt), Je(t), null;
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
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return _n(lt), Xe(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 26:
      case 27:
      case 5:
        return Gt(t), null;
      case 13:
        if ((En(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          pl();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return W(it), null;
      case 4:
        return Xe(), null;
      case 10:
        return _n(t.type), null;
      case 22:
      case 23:
        return En(t), fo(), e !== null && W(_a), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 24:
        return _n(lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _d(e, t) {
    switch ((Jc(t), t.tag)) {
      case 3:
        _n(lt), Xe();
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
        En(t);
        break;
      case 19:
        W(it);
        break;
      case 10:
        _n(t.type);
        break;
      case 22:
      case 23:
        En(t), fo(), e !== null && W(_a);
        break;
      case 24:
        _n(lt);
    }
  }
  function zl(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var f = n.create,
              b = n.inst;
            (l = f()), (b.destroy = l);
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (y) {
      Ve(t, t.return, y);
    }
  }
  function Vn(e, t, n) {
    try {
      var l = t.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var b = l.inst,
              y = b.destroy;
            if (y !== void 0) {
              (b.destroy = void 0), (o = t);
              var T = n,
                B = y;
              try {
                B();
              } catch (V) {
                Ve(o, T, V);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (V) {
      Ve(t, t.return, V);
    }
  }
  function Sd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        s3(t, n);
      } catch (l) {
        Ve(e, e.return, l);
      }
    }
  }
  function Ed(e, t, n) {
    (n.props = Ea(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ve(e, t, l);
    }
  }
  function ql(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
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
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (o) {
      Ve(e, t, o);
    }
  }
  function fn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Ve(e, t, o);
        } finally {
          (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Ve(e, t, o);
        }
      else n.current = null;
  }
  function Cd(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      Ve(e, e.return, o);
    }
  }
  function Lo(e, t, n) {
    try {
      var l = e.stateNode;
      yb(l, e.type, n, t), (l[_t] = t);
    } catch (o) {
      Ve(e, e.return, o);
    }
  }
  function wd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Jn(e.type)) || e.tag === 4;
  }
  function Go(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || wd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if ((e.tag === 27 && Jn(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ko(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t)
          : ((t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n), t.appendChild(e), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = yu));
    else if (l !== 4 && (l === 27 && Jn(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)) for (ko(e, t, n), e = e.sibling; e !== null; ) ko(e, t, n), (e = e.sibling);
  }
  function uu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Jn(e.type) && (n = e.stateNode), (e = e.child), e !== null)) for (uu(e, t, n), e = e.sibling; e !== null; ) uu(e, t, n), (e = e.sibling);
  }
  function Td(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
      pt(t, l, n), (t[bt] = e), (t[_t] = n);
    } catch (f) {
      Ve(e, e.return, f);
    }
  }
  var Tn = !1,
    tt = !1,
    Vo = !1,
    Od = typeof WeakSet == "function" ? WeakSet : Set,
    st = null;
  function I7(e, t) {
    if (((e = e.containerInfo), (ds = Cu), (e = Uh(e)), Lc(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var o = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, f.nodeType;
            } catch {
              n = null;
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
              for (var Q; F !== n || (o !== 0 && F.nodeType !== 3) || (y = b + o), F !== f || (l !== 0 && F.nodeType !== 3) || (T = b + l), F.nodeType === 3 && (b += F.nodeValue.length), (Q = F.firstChild) !== null; ) (N = F), (F = Q);
              for (;;) {
                if (F === e) break t;
                if ((N === n && ++B === o && (y = b), N === f && ++V === l && (T = b), (Q = F.nextSibling) !== null)) break;
                (F = N), (N = F.parentNode);
              }
              F = Q;
            }
            n = y === -1 || T === -1 ? null : { start: y, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ps = { focusedElem: e, selectionRange: n }, Cu = !1, st = t; st !== null; )
      if (((t = st), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)) (e.return = t), (st = e);
      else
        for (; st !== null; ) {
          switch (((t = st), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0), (n = t), (o = f.memoizedProps), (f = f.memoizedState), (l = n.stateNode);
                try {
                  var be = Ea(n.type, o, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate(be, f)), (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (de) {
                  Ve(n, n.return, de);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) bs(e);
                else if (n === 1)
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
            (e.return = t.return), (st = e);
            break;
          }
          st = t.return;
        }
  }
  function Md(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Yn(e, n), l & 4 && zl(5, n);
        break;
      case 1:
        if ((Yn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (b) {
              Ve(n, n.return, b);
            }
          else {
            var o = Ea(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              Ve(n, n.return, b);
            }
          }
        l & 64 && Sd(n), l & 512 && ql(n, n.return);
        break;
      case 3:
        if ((Yn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            s3(e, t);
          } catch (b) {
            Ve(n, n.return, b);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Td(n);
      case 26:
      case 5:
        Yn(e, n), t === null && l & 4 && Cd(n), l & 512 && ql(n, n.return);
        break;
      case 12:
        Yn(e, n);
        break;
      case 13:
        Yn(e, n), l & 4 && qd(e, n), l & 64 && ((e = n.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((n = ub.bind(null, n)), Cb(e, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || Tn), !l)) {
          (t = (t !== null && t.memoizedState !== null) || tt), (o = Tn);
          var f = tt;
          (Tn = l), (tt = t) && !f ? Xn(e, n, (n.subtreeFlags & 8772) !== 0) : Yn(e, n), (Tn = o), (tt = f);
        }
        break;
      case 30:
        break;
      default:
        Yn(e, n);
    }
  }
  function Rd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Rd(t)),
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
      (e.updateQueue = null);
  }
  var Pe = null,
    Ct = !1;
  function On(e, t, n) {
    for (n = n.child; n !== null; ) zd(e, t, n), (n = n.sibling);
  }
  function zd(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(oa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        tt || fn(n, t), On(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        tt || fn(n, t);
        var l = Pe,
          o = Ct;
        Jn(n.type) && ((Pe = n.stateNode), (Ct = !1)), On(e, t, n), Gl(n.stateNode), (Pe = l), (Ct = o);
        break;
      case 5:
        tt || fn(n, t);
      case 6:
        if (((l = Pe), (o = Ct), (Pe = null), On(e, t, n), (Pe = l), (Ct = o), Pe !== null))
          if (Ct)
            try {
              (Pe.nodeType === 9 ? Pe.body : Pe.nodeName === "HTML" ? Pe.ownerDocument.body : Pe).removeChild(n.stateNode);
            } catch (f) {
              Ve(n, t, f);
            }
          else
            try {
              Pe.removeChild(n.stateNode);
            } catch (f) {
              Ve(n, t, f);
            }
        break;
      case 18:
        Pe !== null && (Ct ? ((e = Pe), m4(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Fl(e)) : m4(Pe, n.stateNode));
        break;
      case 4:
        (l = Pe), (o = Ct), (Pe = n.stateNode.containerInfo), (Ct = !0), On(e, t, n), (Pe = l), (Ct = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tt || Vn(2, n, t), tt || Vn(4, n, t), On(e, t, n);
        break;
      case 1:
        tt || (fn(n, t), (l = n.stateNode), typeof l.componentWillUnmount == "function" && Ed(n, t, l)), On(e, t, n);
        break;
      case 21:
        On(e, t, n);
        break;
      case 22:
        (tt = (l = tt) || n.memoizedState !== null), On(e, t, n), (tt = l);
        break;
      default:
        On(e, t, n);
    }
  }
  function qd(e, t) {
    if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null))))
      try {
        Fl(e);
      } catch (n) {
        Ve(t, t.return, n);
      }
  }
  function W7(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Od()), t;
      case 22:
        return (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Od()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Yo(e, t) {
    var n = W7(e);
    t.forEach(function (l) {
      var o = cb.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(o, o));
    });
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l],
          f = e,
          b = t,
          y = b;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Jn(y.type)) {
                (Pe = y.stateNode), (Ct = !1);
                break e;
              }
              break;
            case 5:
              (Pe = y.stateNode), (Ct = !1);
              break e;
            case 3:
            case 4:
              (Pe = y.stateNode.containerInfo), (Ct = !0);
              break e;
          }
          y = y.return;
        }
        if (Pe === null) throw Error(i(160));
        zd(f, b, o), (Pe = null), (Ct = !1), (f = o.alternate), f !== null && (f.return = null), (o.return = null);
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) Dd(t, e), (t = t.sibling);
  }
  var nn = null;
  function Dd(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ht(t, e), jt(e), l & 4 && (Vn(3, e, e.return), zl(3, e), Vn(5, e, e.return));
        break;
      case 1:
        Ht(t, e),
          jt(e),
          l & 512 && (tt || n === null || fn(n, n.return)),
          l & 64 && Tn && ((e = e.updateQueue), e !== null && ((l = e.callbacks), l !== null && ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var o = nn;
        if ((Ht(t, e), jt(e), l & 512 && (tt || n === null || fn(n, n.return)), l & 4)) {
          var f = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type), (n = e.memoizedProps), (o = o.ownerDocument || o);
                  t: switch (l) {
                    case "title":
                      (f = o.getElementsByTagName("title")[0]),
                        (!f || f[nl] || f[bt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && ((f = o.createElement(l)), o.head.insertBefore(f, o.querySelector("head > title"))),
                        pt(f, l, n),
                        (f[bt] = e),
                        ct(f),
                        (l = f);
                      break e;
                    case "link":
                      var b = T4("link", "href", o).get(l + (n.href || ""));
                      if (b) {
                        for (var y = 0; y < b.length; y++)
                          if (
                            ((f = b[y]),
                            f.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) &&
                              f.getAttribute("rel") === (n.rel == null ? null : n.rel) &&
                              f.getAttribute("title") === (n.title == null ? null : n.title) &&
                              f.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            b.splice(y, 1);
                            break t;
                          }
                      }
                      (f = o.createElement(l)), pt(f, l, n), o.head.appendChild(f);
                      break;
                    case "meta":
                      if ((b = T4("meta", "content", o).get(l + (n.content || "")))) {
                        for (y = 0; y < b.length; y++)
                          if (
                            ((f = b[y]),
                            f.getAttribute("content") === (n.content == null ? null : "" + n.content) &&
                              f.getAttribute("name") === (n.name == null ? null : n.name) &&
                              f.getAttribute("property") === (n.property == null ? null : n.property) &&
                              f.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) &&
                              f.getAttribute("charset") === (n.charSet == null ? null : n.charSet))
                          ) {
                            b.splice(y, 1);
                            break t;
                          }
                      }
                      (f = o.createElement(l)), pt(f, l, n), o.head.appendChild(f);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (f[bt] = e), ct(f), (l = f);
                }
                e.stateNode = l;
              } else O4(o, e.type, e.stateNode);
            else e.stateNode = w4(o, l, e.memoizedProps);
          else
            f !== l
              ? (f === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : f.count--, l === null ? O4(o, e.type, e.stateNode) : w4(o, l, e.memoizedProps))
              : l === null && e.stateNode !== null && Lo(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Ht(t, e), jt(e), l & 512 && (tt || n === null || fn(n, n.return)), n !== null && l & 4 && Lo(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if ((Ht(t, e), jt(e), l & 512 && (tt || n === null || fn(n, n.return)), e.flags & 32)) {
          o = e.stateNode;
          try {
            Xa(o, "");
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        l & 4 && e.stateNode != null && ((o = e.memoizedProps), Lo(e, o, n !== null ? n.memoizedProps : o)), l & 1024 && (Vo = !0);
        break;
      case 6:
        if ((Ht(t, e), jt(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (((_u = null), (o = nn), (nn = Au(t.containerInfo)), Ht(t, e), (nn = o), jt(e), l & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Fl(t.containerInfo);
          } catch (Q) {
            Ve(e, e.return, Q);
          }
        Vo && ((Vo = !1), Hd(e));
        break;
      case 4:
        (l = nn), (nn = Au(e.stateNode.containerInfo)), Ht(t, e), jt(e), (nn = l);
        break;
      case 12:
        Ht(t, e), jt(e);
        break;
      case 13:
        Ht(t, e), jt(e), e.child.flags & 8192 && (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) && ($o = $()), l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Yo(e, l)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          B = Tn,
          V = tt;
        if (((Tn = B || o), (tt = V || T), Ht(t, e), (tt = V), (Tn = B), jt(e), l & 8192))
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || T || Tn || tt || Ca(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                T = n = t;
                try {
                  if (((f = T.stateNode), o)) (b = f.style), typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : (b.display = "none");
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
              if (n === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = o ? "" : T.memoizedProps;
                } catch (Q) {
                  Ve(T, T.return, Q);
                }
              }
            } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
          }
        l & 4 && ((l = e.updateQueue), l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), Yo(e, n))));
        break;
      case 19:
        Ht(t, e), jt(e), l & 4 && ((l = e.updateQueue), l !== null && ((e.updateQueue = null), Yo(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ht(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (wd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              f = Go(e);
            uu(e, f, o);
            break;
          case 5:
            var b = n.stateNode;
            n.flags & 32 && (Xa(b, ""), (n.flags &= -33));
            var y = Go(e);
            uu(e, y, b);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
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
        Hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
      }
  }
  function Yn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Md(e, t.alternate, t), (t = t.sibling);
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vn(4, t, t.return), Ca(t);
          break;
        case 1:
          fn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Ed(t, t.return, n), Ca(t);
          break;
        case 27:
          Gl(t.stateNode);
        case 26:
        case 5:
          fn(t, t.return), Ca(t);
          break;
        case 22:
          t.memoizedState === null && Ca(t);
          break;
        case 30:
          Ca(t);
          break;
        default:
          Ca(t);
      }
      e = e.sibling;
    }
  }
  function Xn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        o = e,
        f = t,
        b = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Xn(o, f, n), zl(4, f);
          break;
        case 1:
          if ((Xn(o, f, n), (l = f), (o = l.stateNode), typeof o.componentDidMount == "function"))
            try {
              o.componentDidMount();
            } catch (B) {
              Ve(l, l.return, B);
            }
          if (((l = f), (o = l.updateQueue), o !== null)) {
            var y = l.stateNode;
            try {
              var T = o.shared.hiddenCallbacks;
              if (T !== null) for (o.shared.hiddenCallbacks = null, o = 0; o < T.length; o++) o3(T[o], y);
            } catch (B) {
              Ve(l, l.return, B);
            }
          }
          n && b & 64 && Sd(f), ql(f, f.return);
          break;
        case 27:
          Td(f);
        case 26:
        case 5:
          Xn(o, f, n), n && l === null && b & 4 && Cd(f), ql(f, f.return);
          break;
        case 12:
          Xn(o, f, n);
          break;
        case 13:
          Xn(o, f, n), n && b & 4 && qd(o, f);
          break;
        case 22:
          f.memoizedState === null && Xn(o, f, n), ql(f, f.return);
          break;
        case 30:
          break;
        default:
          Xn(o, f, n);
      }
      t = t.sibling;
    }
  }
  function Xo(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && bl(n));
  }
  function Zo(e, t) {
    (e = null), t.alternate !== null && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache), t !== e && (t.refCount++, e != null && bl(e));
  }
  function hn(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) jd(e, t, n, l), (t = t.sibling);
  }
  function jd(e, t, n, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, t, n, l), o & 2048 && zl(9, t);
        break;
      case 1:
        hn(e, t, n, l);
        break;
      case 3:
        hn(e, t, n, l), o & 2048 && ((e = null), t.alternate !== null && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache), t !== e && (t.refCount++, e != null && bl(e)));
        break;
      case 12:
        if (o & 2048) {
          hn(e, t, n, l), (e = t.stateNode);
          try {
            var f = t.memoizedProps,
              b = f.id,
              y = f.onPostCommit;
            typeof y == "function" && y(b, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (T) {
            Ve(t, t.return, T);
          }
        } else hn(e, t, n, l);
        break;
      case 13:
        hn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (f = t.stateNode),
          (b = t.alternate),
          t.memoizedState !== null ? (f._visibility & 2 ? hn(e, t, n, l) : Dl(e, t)) : f._visibility & 2 ? hn(e, t, n, l) : ((f._visibility |= 2), sr(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          o & 2048 && Xo(b, t);
        break;
      case 24:
        hn(e, t, n, l), o & 2048 && Zo(t.alternate, t);
        break;
      default:
        hn(e, t, n, l);
    }
  }
  function sr(e, t, n, l, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        b = t,
        y = n,
        T = l,
        B = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          sr(f, b, y, T, o), zl(8, b);
          break;
        case 23:
          break;
        case 22:
          var V = b.stateNode;
          b.memoizedState !== null ? (V._visibility & 2 ? sr(f, b, y, T, o) : Dl(f, b)) : ((V._visibility |= 2), sr(f, b, y, T, o)), o && B & 2048 && Xo(b.alternate, b);
          break;
        case 24:
          sr(f, b, y, T, o), o && B & 2048 && Zo(b.alternate, b);
          break;
        default:
          sr(f, b, y, T, o);
      }
      t = t.sibling;
    }
  }
  function Dl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          o = l.flags;
        switch (l.tag) {
          case 22:
            Dl(n, l), o & 2048 && Xo(l.alternate, l);
            break;
          case 24:
            Dl(n, l), o & 2048 && Zo(l.alternate, l);
            break;
          default:
            Dl(n, l);
        }
        t = t.sibling;
      }
  }
  var Hl = 8192;
  function fr(e) {
    if (e.subtreeFlags & Hl) for (e = e.child; e !== null; ) Bd(e), (e = e.sibling);
  }
  function Bd(e) {
    switch (e.tag) {
      case 26:
        fr(e), e.flags & Hl && e.memoizedState !== null && Qb(nn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        fr(e);
        break;
      case 3:
      case 4:
        var t = nn;
        (nn = Au(e.stateNode.containerInfo)), fr(e), (nn = t);
        break;
      case 22:
        e.memoizedState === null && ((t = e.alternate), t !== null && t.memoizedState !== null ? ((t = Hl), (Hl = 16777216), fr(e), (Hl = t)) : fr(e));
        break;
      default:
        fr(e);
    }
  }
  function Nd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function jl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (st = l), Ud(l, e);
        }
      Nd(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Qd(e), (e = e.sibling);
  }
  function Qd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        jl(e), e.flags & 2048 && Vn(9, e, e.return);
        break;
      case 3:
        jl(e);
        break;
      case 12:
        jl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? ((t._visibility &= -3), cu(e)) : jl(e);
        break;
      default:
        jl(e);
    }
  }
  function cu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (st = l), Ud(l, e);
        }
      Nd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Vn(8, t, t.return), cu(t);
          break;
        case 22:
          (n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), cu(t));
          break;
        default:
          cu(t);
      }
      e = e.sibling;
    }
  }
  function Ud(e, t) {
    for (; st !== null; ) {
      var n = st;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          bl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (st = l);
      else
        e: for (n = e; st !== null; ) {
          l = st;
          var o = l.sibling,
            f = l.return;
          if ((Rd(l), l === n)) {
            st = null;
            break e;
          }
          if (o !== null) {
            (o.return = f), (st = o);
            break e;
          }
          st = f;
        }
    }
  }
  var eb = {
      getCacheForType: function (e) {
        var t = yt(lt),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    tb = typeof WeakMap == "function" ? WeakMap : Map,
    Ne = 0,
    Ye = null,
    Me = null,
    qe = 0,
    Qe = 0,
    Bt = null,
    Zn = !1,
    hr = !1,
    Ko = !1,
    Mn = 0,
    We = 0,
    Kn = 0,
    wa = 0,
    Po = 0,
    Jt = 0,
    dr = 0,
    Bl = null,
    wt = null,
    Fo = !1,
    $o = 0,
    ou = 1 / 0,
    su = null,
    Pn = null,
    dt = 0,
    Fn = null,
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
      var e = nr;
      return e !== 0 ? e : is();
    }
    return nh();
  }
  function Gd() {
    Jt === 0 && (Jt = (qe & 536870912) === 0 || Be ? I2() : 536870912);
    var e = $t.current;
    return e !== null && (e.flags |= 32), Jt;
  }
  function Qt(e, t, n) {
    ((e === Ye && (Qe === 2 || Qe === 9)) || e.cancelPendingCommit !== null) && (gr(e, 0), $n(e, qe, Jt, !1)), tl(e, n), ((Ne & 2) === 0 || e !== Ye) && (e === Ye && ((Ne & 2) === 0 && (wa |= n), We === 4 && $n(e, qe, Jt, !1)), dn(e));
  }
  function kd(e, t, n) {
    if ((Ne & 6) !== 0) throw Error(i(327));
    var l = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || el(e, t),
      o = l ? rb(e, t) : ns(e, t, !0),
      f = l;
    do {
      if (o === 0) {
        hr && !l && $n(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), f && !nb(n))) {
          (o = ns(e, t, !1)), (f = !1);
          continue;
        }
        if (o === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var b = 0;
          else (b = e.pendingLanes & -536870913), (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0);
          if (b !== 0) {
            t = b;
            e: {
              var y = e;
              o = Bl;
              var T = y.current.memoizedState.isDehydrated;
              if ((T && (gr(y, b).flags |= 256), (b = ns(y, b, !1)), b !== 2)) {
                if (Ko && !T) {
                  (y.errorRecoveryDisabledLanes |= f), (wa |= f), (o = 4);
                  break e;
                }
                (f = wt), (wt = o), f !== null && (wt === null ? (wt = f) : wt.push.apply(wt, f));
              }
              o = b;
            }
            if (((f = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          gr(e, 0), $n(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (f = o), f)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              $n(l, t, Jt, !Zn);
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
            if (($n(l, t, Jt, !Zn), xi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = b4(Vd.bind(null, l, n, wt, su, Fo, t, Jt, wa, dr, Zn, f, 2, -0, 0), o);
            break e;
          }
          Vd(l, n, wt, su, Fo, t, Jt, wa, dr, Zn, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    dn(e);
  }
  function Vd(e, t, n, l, o, f, b, y, T, B, V, F, N, Q) {
    if (((e.timeoutHandle = -1), (F = t.subtreeFlags), (F & 8192 || (F & 16785408) === 16785408) && ((Yl = { stylesheets: null, count: 0, unsuspend: Nb }), Bd(t), (F = Ub()), F !== null))) {
      (e.cancelPendingCommit = F($d.bind(null, e, t, f, n, l, o, b, y, T, V, 1, N, Q))), $n(e, f, b, !B);
      return;
    }
    $d(e, t, f, n, l, o, b, y, T);
  }
  function nb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null)))
        for (var l = 0; l < n.length; l++) {
          var o = n[l],
            f = o.getSnapshot;
          o = o.value;
          try {
            if (!qt(f(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function $n(e, t, n, l) {
    (t &= ~Po), (t &= ~wa), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), l && (e.warmLanes |= t), (l = e.expirationTimes);
    for (var o = t; 0 < o; ) {
      var f = 31 - gt(o),
        b = 1 << f;
      (l[f] = -1), (o &= ~b);
    }
    n !== 0 && eh(e, n, t);
  }
  function fu() {
    return (Ne & 6) === 0 ? (Ql(0), !1) : !0;
  }
  function es() {
    if (Me !== null) {
      if (Qe === 0) var e = Me.return;
      else (e = Me), (xn = Aa = null), bo(e), (cr = null), (Ol = 0), (e = Me);
      for (; e !== null; ) _d(e.alternate, e), (e = e.return);
      Me = null;
    }
  }
  function gr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Ab(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      es(),
      (Ye = e),
      (Me = n = yn(e.current, null)),
      (qe = t),
      (Qe = 0),
      (Bt = null),
      (Zn = !1),
      (hr = el(e, t)),
      (Ko = !1),
      (dr = Jt = Po = wa = Kn = We = 0),
      (wt = Bl = null),
      (Fo = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - gt(l),
          f = 1 << o;
        (t |= e[o]), (l &= ~f);
      }
    return (Mn = t), Di(), n;
  }
  function Yd(e, t) {
    (Te = null),
      (U.H = Ii),
      t === ml || t === ki ? ((t = u3()), (Qe = 3)) : t === r3 ? ((t = u3()), (Qe = 4)) : (Qe = t === cd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1),
      (Bt = t),
      Me === null && ((We = 1), au(e, Zt(t, e.current)));
  }
  function Xd() {
    var e = U.H;
    return (U.H = Ii), e === null ? Ii : e;
  }
  function Zd() {
    var e = U.A;
    return (U.A = eb), e;
  }
  function ts() {
    (We = 4), Zn || ((qe & 4194048) !== qe && $t.current !== null) || (hr = !0), ((Kn & 134217727) === 0 && (wa & 134217727) === 0) || Ye === null || $n(Ye, qe, Jt, !1);
  }
  function ns(e, t, n) {
    var l = Ne;
    Ne |= 2;
    var o = Xd(),
      f = Zd();
    (Ye !== e || qe !== t) && ((su = null), gr(e, t)), (t = !1);
    var b = We;
    e: do
      try {
        if (Qe !== 0 && Me !== null) {
          var y = Me,
            T = Bt;
          switch (Qe) {
            case 8:
              es(), (b = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              $t.current === null && (t = !0);
              var B = Qe;
              if (((Qe = 0), (Bt = null), br(e, y, T, B), n && hr)) {
                b = 0;
                break e;
              }
              break;
            default:
              (B = Qe), (Qe = 0), (Bt = null), br(e, y, T, B);
          }
        }
        ab(), (b = We);
        break;
      } catch (V) {
        Yd(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, (xn = Aa = null), (Ne = l), (U.H = o), (U.A = f), Me === null && ((Ye = null), (qe = 0), Di()), b;
  }
  function ab() {
    for (; Me !== null; ) Kd(Me);
  }
  function rb(e, t) {
    var n = Ne;
    Ne |= 2;
    var l = Xd(),
      o = Zd();
    Ye !== e || qe !== t ? ((su = null), (ou = $() + 500), gr(e, t)) : (hr = el(e, t));
    e: do
      try {
        if (Qe !== 0 && Me !== null) {
          t = Me;
          var f = Bt;
          t: switch (Qe) {
            case 1:
              (Qe = 0), (Bt = null), br(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (l3(f)) {
                (Qe = 0), (Bt = null), Pd(t);
                break;
              }
              (t = function () {
                (Qe !== 2 && Qe !== 9) || Ye !== e || (Qe = 7), dn(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              l3(f) ? ((Qe = 0), (Bt = null), Pd(t)) : ((Qe = 0), (Bt = null), br(e, t, f, 7));
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
                    (Qe = 0), (Bt = null);
                    var T = y.sibling;
                    if (T !== null) Me = T;
                    else {
                      var B = y.return;
                      B !== null ? ((Me = B), hu(B)) : (Me = null);
                    }
                    break t;
                  }
              }
              (Qe = 0), (Bt = null), br(e, t, f, 5);
              break;
            case 6:
              (Qe = 0), (Bt = null), br(e, t, f, 6);
              break;
            case 8:
              es(), (We = 6);
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
    return (xn = Aa = null), (U.H = l), (U.A = o), (Ne = n), Me !== null ? 0 : ((Ye = null), (qe = 0), Di(), We);
  }
  function lb() {
    for (; Me !== null && !_(); ) Kd(Me);
  }
  function Kd(e) {
    var t = Ad(e.alternate, e, Mn);
    (e.memoizedProps = e.pendingProps), t === null ? hu(e) : (Me = t);
  }
  function Pd(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = pd(n, t, t.pendingProps, t.type, void 0, qe);
        break;
      case 11:
        t = pd(n, t, t.pendingProps, t.type.render, t.ref, qe);
        break;
      case 5:
        bo(t);
      default:
        _d(n, t), (t = Me = Fh(t, Mn)), (t = Ad(n, t, Mn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? hu(e) : (Me = t);
  }
  function br(e, t, n, l) {
    (xn = Aa = null), bo(t), (cr = null), (Ol = 0);
    var o = t.return;
    try {
      if (P7(e, o, t, n, qe)) {
        (We = 1), au(e, Zt(n, e.current)), (Me = null);
        return;
      }
    } catch (f) {
      if (o !== null) throw ((Me = o), f);
      (We = 1), au(e, Zt(n, e.current)), (Me = null);
      return;
    }
    t.flags & 32768 ? (Be || l === 1 ? (e = !0) : hr || (qe & 536870912) !== 0 ? (e = !1) : ((Zn = e = !0), (l === 2 || l === 9 || l === 3 || l === 6) && ((l = $t.current), l !== null && l.tag === 13 && (l.flags |= 16384))), Fd(t, e)) : hu(t);
  }
  function hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fd(t, Zn);
        return;
      }
      e = t.return;
      var n = $7(t.alternate, t, Mn);
      if (n !== null) {
        Me = n;
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
      var n = J7(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (((n = e.return), n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)), !t && ((e = e.sibling), e !== null))) {
        Me = e;
        return;
      }
      Me = e = n;
    } while (e !== null);
    (We = 6), (Me = null);
  }
  function $d(e, t, n, l, o, f, b, y, T) {
    e.cancelPendingCommit = null;
    do du();
    while (dt !== 0);
    if ((Ne & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= Xc),
        N8(e, n, f, b, y, T),
        e === Ye && ((Me = Ye = null), (qe = 0)),
        (pr = t),
        (Fn = e),
        (vr = n),
        (Jo = f),
        (Io = o),
        (Ld = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            ob(je, function () {
              return t4(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = U.T), (U.T = null), (o = K.p), (K.p = 2), (b = Ne), (Ne |= 4);
        try {
          I7(e, t, n);
        } finally {
          (Ne = b), (K.p = o), (U.T = l);
        }
      }
      (dt = 1), Jd(), Id(), Wd();
    }
  }
  function Jd() {
    if (dt === 1) {
      dt = 0;
      var e = Fn,
        t = pr,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = U.T), (U.T = null);
        var l = K.p;
        K.p = 2;
        var o = Ne;
        Ne |= 4;
        try {
          Dd(t, e);
          var f = ps,
            b = Uh(e.containerInfo),
            y = f.focusedElem,
            T = f.selectionRange;
          if (b !== y && y && y.ownerDocument && Qh(y.ownerDocument.documentElement, y)) {
            if (T !== null && Lc(y)) {
              var B = T.start,
                V = T.end;
              if ((V === void 0 && (V = B), "selectionStart" in y)) (y.selectionStart = B), (y.selectionEnd = Math.min(V, y.value.length));
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
                  if (q && M && (Q.rangeCount !== 1 || Q.anchorNode !== q.node || Q.anchorOffset !== q.offset || Q.focusNode !== M.node || Q.focusOffset !== M.offset)) {
                    var j = F.createRange();
                    j.setStart(q.node, q.offset), Q.removeAllRanges(), de > ke ? (Q.addRange(j), Q.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), Q.addRange(j));
                  }
                }
              }
            }
            for (F = [], Q = y; (Q = Q.parentNode); ) Q.nodeType === 1 && F.push({ element: Q, left: Q.scrollLeft, top: Q.scrollTop });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < F.length; y++) {
              var Z = F[y];
              (Z.element.scrollLeft = Z.left), (Z.element.scrollTop = Z.top);
            }
          }
          (Cu = !!ds), (ps = ds = null);
        } finally {
          (Ne = o), (K.p = l), (U.T = n);
        }
      }
      (e.current = t), (dt = 2);
    }
  }
  function Id() {
    if (dt === 2) {
      dt = 0;
      var e = Fn,
        t = pr,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = U.T), (U.T = null);
        var l = K.p;
        K.p = 2;
        var o = Ne;
        Ne |= 4;
        try {
          Md(e, t.alternate, t);
        } finally {
          (Ne = o), (K.p = l), (U.T = n);
        }
      }
      dt = 3;
    }
  }
  function Wd() {
    if (dt === 4 || dt === 3) {
      (dt = 0), I();
      var e = Fn,
        t = pr,
        n = vr,
        l = Ld;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (dt = 5) : ((dt = 0), (pr = Fn = null), e4(e, e.pendingLanes));
      var o = e.pendingLanes;
      if ((o === 0 && (Pn = null), mc(n), (t = t.stateNode), vt && typeof vt.onCommitFiberRoot == "function"))
        try {
          vt.onCommitFiberRoot(oa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = U.T), (o = K.p), (K.p = 2), (U.T = null);
        try {
          for (var f = e.onRecoverableError, b = 0; b < l.length; b++) {
            var y = l[b];
            f(y.value, { componentStack: y.stack });
          }
        } finally {
          (U.T = t), (K.p = o);
        }
      }
      (vr & 3) !== 0 && du(), dn(e), (o = e.pendingLanes), (n & 4194090) !== 0 && (o & 42) !== 0 ? (e === Wo ? Nl++ : ((Nl = 0), (Wo = e))) : (Nl = 0), Ql(0);
    }
  }
  function e4(e, t) {
    (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), bl(t)));
  }
  function du(e) {
    return Jd(), Id(), Wd(), t4();
  }
  function t4() {
    if (dt !== 5) return !1;
    var e = Fn,
      t = Jo;
    Jo = 0;
    var n = mc(vr),
      l = U.T,
      o = K.p;
    try {
      (K.p = 32 > n ? 32 : n), (U.T = null), (n = Io), (Io = null);
      var f = Fn,
        b = vr;
      if (((dt = 0), (pr = Fn = null), (vr = 0), (Ne & 6) !== 0)) throw Error(i(331));
      var y = Ne;
      if (((Ne |= 4), Qd(f.current), jd(f, f.current, b, n), (Ne = y), Ql(0, !1), vt && typeof vt.onPostCommitFiberRoot == "function"))
        try {
          vt.onPostCommitFiberRoot(oa, f);
        } catch {}
      return !0;
    } finally {
      (K.p = o), (U.T = l), e4(e, t);
    }
  }
  function n4(e, t, n) {
    (t = Zt(n, t)), (t = zo(e.stateNode, t, 2)), (e = Un(e, t, 2)), e !== null && (tl(e, 2), dn(e));
  }
  function Ve(e, t, n) {
    if (e.tag === 3) n4(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          n4(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || (typeof l.componentDidCatch == "function" && (Pn === null || !Pn.has(l)))) {
            (e = Zt(n, e)), (n = id(2)), (l = Un(t, n, 2)), l !== null && (ud(n, l, t, e), tl(l, 2), dn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function as(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new tb();
      var o = new Set();
      l.set(t, o);
    } else (o = l.get(t)), o === void 0 && ((o = new Set()), l.set(t, o));
    o.has(n) || ((Ko = !0), o.add(n), (e = ib.bind(null, e, t, n)), t.then(e, e));
  }
  function ib(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ye === e && (qe & n) === n && (We === 4 || (We === 3 && (qe & 62914560) === qe && 300 > $() - $o) ? (Ne & 2) === 0 && gr(e, 0) : (Po |= n), dr === qe && (dr = 0)),
      dn(e);
  }
  function a4(e, t) {
    t === 0 && (t = W2()), (e = Ia(e, t)), e !== null && (tl(e, t), dn(e));
  }
  function ub(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), a4(e, n);
  }
  function cb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
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
    l !== null && l.delete(t), a4(e, n);
  }
  function ob(e, t) {
    return E(e, t);
  }
  var pu = null,
    yr = null,
    rs = !1,
    vu = !1,
    ls = !1,
    Ta = 0;
  function dn(e) {
    e !== yr && e.next === null && (yr === null ? (pu = yr = e) : (yr = yr.next = e)), (vu = !0), rs || ((rs = !0), fb());
  }
  function Ql(e, t) {
    if (!ls && vu) {
      ls = !0;
      do
        for (var n = !1, l = pu; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var f = 0;
            else {
              var b = l.suspendedLanes,
                y = l.pingedLanes;
              (f = (1 << (31 - gt(42 | e) + 1)) - 1), (f &= o & ~(b & ~y)), (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((n = !0), u4(l, f));
          } else (f = qe), (f = xi(l, l === Ye ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)), (f & 3) === 0 || el(l, f) || ((n = !0), u4(l, f));
          l = l.next;
        }
      while (n);
      ls = !1;
    }
  }
  function sb() {
    r4();
  }
  function r4() {
    vu = rs = !1;
    var e = 0;
    Ta !== 0 && (mb() && (e = Ta), (Ta = 0));
    for (var t = $(), n = null, l = pu; l !== null; ) {
      var o = l.next,
        f = l4(l, t);
      f === 0 ? ((l.next = null), n === null ? (pu = o) : (n.next = o), o === null && (yr = n)) : ((n = l), (e !== 0 || (f & 3) !== 0) && (vu = !0)), (l = o);
    }
    Ql(e);
  }
  function l4(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var b = 31 - gt(f),
        y = 1 << b,
        T = o[b];
      T === -1 ? ((y & n) === 0 || (y & l) !== 0) && (o[b] = B8(y, t)) : T <= t && (e.expiredLanes |= y), (f &= ~y);
    }
    if (((t = Ye), (n = qe), (n = xi(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)), (l = e.callbackNode), n === 0 || (e === t && (Qe === 2 || Qe === 9)) || e.cancelPendingCommit !== null))
      return l !== null && l !== null && z(l), (e.callbackNode = null), (e.callbackPriority = 0);
    if ((n & 3) === 0 || el(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && z(l), mc(n))) {
        case 2:
        case 8:
          n = Ue;
          break;
        case 32:
          n = je;
          break;
        case 268435456:
          n = $e;
          break;
        default:
          n = je;
      }
      return (l = i4.bind(null, e)), (n = E(n, l)), (e.callbackPriority = t), (e.callbackNode = n), t;
    }
    return l !== null && l !== null && z(l), (e.callbackPriority = 2), (e.callbackNode = null), 2;
  }
  function i4(e, t) {
    if (dt !== 0 && dt !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (du() && e.callbackNode !== n) return null;
    var l = qe;
    return (l = xi(e, e === Ye ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)), l === 0 ? null : (kd(e, l, t), l4(e, $()), e.callbackNode != null && e.callbackNode === n ? i4.bind(null, e) : null);
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
    return Ta === 0 && (Ta = I2()), Ta;
  }
  function c4(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wi("" + e);
  }
  function o4(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (n.name = t.name), (n.value = t.value), e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), (e = new FormData(e)), n.parentNode.removeChild(n), e;
  }
  function hb(e, t, n, l, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var f = c4((o[_t] || null).action),
        b = l.submitter;
      b && ((t = (t = b[_t] || null) ? c4(t.formAction) : b.getAttribute("formAction")), t !== null && ((f = t), (b = null)));
      var y = new Ri("action", "action", null, l, o);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ta !== 0) {
                  var T = b ? o4(o, b) : new FormData(o);
                  wo(n, { pending: !0, data: T, method: o.method, action: f }, null, T);
                }
              } else typeof f == "function" && (y.preventDefault(), (T = b ? o4(o, b) : new FormData(o)), wo(n, { pending: !0, data: T, method: o.method, action: f }, f, T));
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
    tn(db, "on" + pb);
  }
  tn(kh, "onAnimationEnd"),
    tn(Vh, "onAnimationIteration"),
    tn(Yh, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(z7, "onTransitionRun"),
    tn(q7, "onTransitionStart"),
    tn(D7, "onTransitionCancel"),
    tn(Xh, "onTransitionEnd"),
    ka("onMouseEnter", ["mouseout", "mouseover"]),
    ka("onMouseLeave", ["mouseout", "mouseover"]),
    ka("onPointerEnter", ["pointerout", "pointerover"]),
    ka("onPointerLeave", ["pointerout", "pointerover"]),
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ul = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    vb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));
  function s4(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        o = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var b = l.length - 1; 0 <= b; b--) {
            var y = l[b],
              T = y.instance,
              B = y.currentTarget;
            if (((y = y.listener), T !== f && o.isPropagationStopped())) break e;
            (f = y), (o.currentTarget = B);
            try {
              f(o);
            } catch (V) {
              nu(V);
            }
            (o.currentTarget = null), (f = T);
          }
        else
          for (b = 0; b < l.length; b++) {
            if (((y = l[b]), (T = y.instance), (B = y.currentTarget), (y = y.listener), T !== f && o.isPropagationStopped())) break e;
            (f = y), (o.currentTarget = B);
            try {
              f(o);
            } catch (V) {
              nu(V);
            }
            (o.currentTarget = null), (f = T);
          }
      }
    }
  }
  function Re(e, t) {
    var n = t[Ac];
    n === void 0 && (n = t[Ac] = new Set());
    var l = e + "__bubble";
    n.has(l) || (f4(t, e, 2, !1), n.add(l));
  }
  function os(e, t, n) {
    var l = 0;
    t && (l |= 4), f4(n, e, l, t);
  }
  var gu = "_reactListening" + Math.random().toString(36).slice(2);
  function ss(e) {
    if (!e[gu]) {
      (e[gu] = !0),
        rh.forEach(function (n) {
          n !== "selectionchange" && (vb.has(n) || os(n, !1, e), os(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gu] || ((t[gu] = !0), os("selectionchange", !1, t));
    }
  }
  function f4(e, t, n, l) {
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
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !zc || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
      l ? (o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0)) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function fs(e, t, n, l, o) {
    var f = l;
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
            if (((b = Ua(y)), b === null)) return;
            if (((T = b.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = f = b;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    yh(function () {
      var B = f,
        V = Mc(n),
        F = [];
      e: {
        var N = Zh.get(e);
        if (N !== void 0) {
          var Q = Ri,
            be = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = o7;
              break;
            case "focusin":
              (be = "focus"), (Q = jc);
              break;
            case "focusout":
              (be = "blur"), (Q = jc);
              break;
            case "beforeblur":
            case "afterblur":
              Q = jc;
              break;
            case "click":
              if (n.button === 2) break e;
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
              Q = n7;
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
            var Z = M;
            if (((j = Z.stateNode), (Z = Z.tag), (Z !== 5 && Z !== 26 && Z !== 27) || j === null || q === null || ((Z = rl(M, q)), Z != null && de.push(Ll(M, Z, j))), ke)) break;
            M = M.return;
          }
          0 < de.length && ((N = new Q(N, be, null, n, V)), F.push({ event: N, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (((N = e === "mouseover" || e === "pointerover"), (Q = e === "mouseout" || e === "pointerout"), N && n !== Oc && (be = n.relatedTarget || n.fromElement) && (Ua(be) || be[Qa]))) break e;
          if (
            (Q || N) &&
            ((N = V.window === V ? V : (N = V.ownerDocument) ? N.defaultView || N.parentWindow : window),
            Q ? ((be = n.relatedTarget || n.toElement), (Q = B), (be = be ? Ua(be) : null), be !== null && ((ke = s(be)), (de = be.tag), be !== ke || (de !== 5 && de !== 27 && de !== 6)) && (be = null)) : ((Q = null), (be = B)),
            Q !== be)
          ) {
            if (
              ((de = xh),
              (Z = "onMouseLeave"),
              (q = "onMouseEnter"),
              (M = "mouse"),
              (e === "pointerout" || e === "pointerover") && ((de = Sh), (Z = "onPointerLeave"), (q = "onPointerEnter"), (M = "pointer")),
              (ke = Q == null ? N : al(Q)),
              (j = be == null ? N : al(be)),
              (N = new de(Z, M + "leave", Q, n, V)),
              (N.target = ke),
              (N.relatedTarget = j),
              (Z = null),
              Ua(V) === B && ((de = new de(q, M + "enter", be, n, V)), (de.target = j), (de.relatedTarget = ke), (Z = de)),
              (ke = Z),
              Q && be)
            )
              t: {
                for (de = Q, q = be, M = 0, j = de; j; j = mr(j)) M++;
                for (j = 0, Z = q; Z; Z = mr(Z)) j++;
                for (; 0 < M - j; ) (de = mr(de)), M--;
                for (; 0 < j - M; ) (q = mr(q)), j--;
                for (; M--; ) {
                  if (de === q || (q !== null && de === q.alternate)) break t;
                  (de = mr(de)), (q = mr(q));
                }
                de = null;
              }
            else de = null;
            Q !== null && h4(F, N, Q, de, !1), be !== null && ke !== null && h4(F, ke, be, de, !0);
          }
        }
        e: {
          if (((N = B ? al(B) : window), (Q = N.nodeName && N.nodeName.toLowerCase()), Q === "select" || (Q === "input" && N.type === "file"))) var ie = zh;
          else if (Mh(N))
            if (qh) ie = O7;
            else {
              ie = w7;
              var Oe = C7;
            }
          else (Q = N.nodeName), !Q || Q.toLowerCase() !== "input" || (N.type !== "checkbox" && N.type !== "radio") ? B && Tc(B.elementType) && (ie = zh) : (ie = T7);
          if (ie && (ie = ie(e, B))) {
            Rh(F, ie, n, V);
            break e;
          }
          Oe && Oe(e, N, B), e === "focusout" && B && N.type === "number" && B.memoizedProps.value != null && wc(N, "number", N.value);
        }
        switch (((Oe = B ? al(B) : window), e)) {
          case "focusin":
            (Mh(Oe) || Oe.contentEditable === "true") && ((Fa = Oe), (Gc = B), (hl = null));
            break;
          case "focusout":
            hl = Gc = Fa = null;
            break;
          case "mousedown":
            kc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (kc = !1), Lh(F, n, V);
            break;
          case "selectionchange":
            if (R7) break;
          case "keydown":
          case "keyup":
            Lh(F, n, V);
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
        else Pa ? Th(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
        pe &&
          (Eh && n.locale !== "ko" && (Pa || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Pa && (se = mh()) : ((jn = V), (qc = "value" in jn ? jn.value : jn.textContent), (Pa = !0))),
          (Oe = bu(B, pe)),
          0 < Oe.length && ((pe = new _h(pe, e, null, n, V)), F.push({ event: pe, listeners: Oe }), se ? (pe.data = se) : ((se = Oh(n)), se !== null && (pe.data = se)))),
          (se = A7 ? x7(e, n) : _7(e, n)) && ((pe = bu(B, "onBeforeInput")), 0 < pe.length && ((Oe = new _h("onBeforeInput", "beforeinput", null, n, V)), F.push({ event: Oe, listeners: pe }), (Oe.data = se))),
          hb(F, e, B, n, V);
      }
      s4(F, t);
    });
  }
  function Ll(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function bu(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var o = e,
        f = o.stateNode;
      if (((o = o.tag), (o !== 5 && o !== 26 && o !== 27) || f === null || ((o = rl(e, n)), o != null && l.unshift(Ll(e, o, f)), (o = rl(e, t)), o != null && l.push(Ll(e, o, f))), e.tag === 3)) return l;
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
  function h4(e, t, n, l, o) {
    for (var f = t._reactName, b = []; n !== null && n !== l; ) {
      var y = n,
        T = y.alternate,
        B = y.stateNode;
      if (((y = y.tag), T !== null && T === l)) break;
      (y !== 5 && y !== 26 && y !== 27) || B === null || ((T = B), o ? ((B = rl(n, f)), B != null && b.unshift(Ll(n, B, T))) : o || ((B = rl(n, f)), B != null && b.push(Ll(n, B, T)))), (n = n.return);
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
`
      )
      .replace(bb, "");
  }
  function p4(e, t) {
    return (t = d4(t)), d4(e) === t;
  }
  function yu() {}
  function Ge(e, t, n, l, o, f) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || (t === "textarea" && l === "") || Xa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Xa(e, "" + l);
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
        Si(e, n, l);
        break;
      case "style":
        gh(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          Si(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = wi("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (n === "formAction"
              ? (t !== "input" && Ge(e, t, "name", o.name, o, null), Ge(e, t, "formEncType", o.formEncType, o, null), Ge(e, t, "formMethod", o.formMethod, o, null), Ge(e, t, "formTarget", o.formTarget, o, null))
              : (Ge(e, t, "encType", o.encType, o, null), Ge(e, t, "method", o.method, o, null), Ge(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = wi("" + l)), e.setAttribute(n, l);
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
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(i(60));
            e.innerHTML = n;
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
        (n = wi("" + l)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Re("beforetoggle", e), Re("toggle", e), _i(e, "popover", l);
        break;
      case "xlinkActuate":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        gn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        gn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        gn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        _i(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) && ((n = K8.get(n) || n), _i(e, n, l));
    }
  }
  function hs(e, t, n, l, o, f) {
    switch (n) {
      case "style":
        gh(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Xa(e, l) : (typeof l == "number" || typeof l == "bigint") && Xa(e, "" + l);
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
        if (!lh.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")), (t = n.slice(2, o ? n.length - 7 : void 0)), (f = e[_t] || null), (f = f != null ? f[n] : null), typeof f == "function" && e.removeEventListener(t, f, o), typeof l == "function")
            ) {
              typeof f != "function" && f !== null && (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, o);
              break e;
            }
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, "") : _i(e, n, l);
          }
    }
  }
  function pt(e, t, n) {
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
        Re("error", e), Re("load", e);
        var l = !1,
          o = !1,
          f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var b = n[f];
            if (b != null)
              switch (f) {
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
                  Ge(e, t, f, b, n, null);
              }
          }
        o && Ge(e, t, "srcSet", n.srcSet, n, null), l && Ge(e, t, "src", n.src, n, null);
        return;
      case "input":
        Re("invalid", e);
        var y = (f = b = o = null),
          T = null,
          B = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var V = n[l];
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
                  f = V;
                  break;
                case "defaultValue":
                  y = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(i(137, t));
                  break;
                default:
                  Ge(e, t, l, V, n, null);
              }
          }
        hh(e, f, y, T, B, b, o, !1), Ei(e);
        return;
      case "select":
        Re("invalid", e), (l = b = f = null);
        for (o in n)
          if (n.hasOwnProperty(o) && ((y = n[o]), y != null))
            switch (o) {
              case "value":
                f = y;
                break;
              case "defaultValue":
                b = y;
                break;
              case "multiple":
                l = y;
              default:
                Ge(e, t, o, y, n, null);
            }
        (t = f), (n = b), (e.multiple = !!l), t != null ? Ya(e, !!l, t, !1) : n != null && Ya(e, !!l, n, !0);
        return;
      case "textarea":
        Re("invalid", e), (f = o = l = null);
        for (b in n)
          if (n.hasOwnProperty(b) && ((y = n[b]), y != null))
            switch (b) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                f = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(i(91));
                break;
              default:
                Ge(e, t, b, y, n, null);
            }
        ph(e, l, o, f), Ei(e);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((l = n[T]), l != null))
            switch (T) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ge(e, t, T, l, n, null);
            }
        return;
      case "dialog":
        Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
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
        Re("error", e), Re("load", e);
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", e), Re("load", e);
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
        for (B in n)
          if (n.hasOwnProperty(B) && ((l = n[B]), l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ge(e, t, B, l, n, null);
            }
        return;
      default:
        if (Tc(t)) {
          for (V in n) n.hasOwnProperty(V) && ((l = n[V]), l !== void 0 && hs(e, t, V, l, n, void 0));
          return;
        }
    }
    for (y in n) n.hasOwnProperty(y) && ((l = n[y]), l != null && Ge(e, t, y, l, n, null));
  }
  function yb(e, t, n, l) {
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
          f = null,
          b = null,
          y = null,
          T = null,
          B = null,
          V = null;
        for (Q in n) {
          var F = n[Q];
          if (n.hasOwnProperty(Q) && F != null)
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
          if (((F = n[N]), l.hasOwnProperty(N) && (Q != null || F != null)))
            switch (N) {
              case "type":
                f = Q;
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
        Cc(e, b, y, T, B, V, f, o);
        return;
      case "select":
        Q = b = y = N = null;
        for (f in n)
          if (((T = n[f]), n.hasOwnProperty(f) && T != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                Q = T;
              default:
                l.hasOwnProperty(f) || Ge(e, t, f, null, l, T);
            }
        for (o in l)
          if (((f = l[o]), (T = n[o]), l.hasOwnProperty(o) && (f != null || T != null)))
            switch (o) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                y = f;
                break;
              case "multiple":
                b = f;
              default:
                f !== T && Ge(e, t, o, f, l, T);
            }
        (t = y), (n = b), (l = Q), N != null ? Ya(e, !!n, N, !1) : !!l != !!n && (t != null ? Ya(e, !!n, t, !0) : Ya(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        Q = N = null;
        for (y in n)
          if (((o = n[y]), n.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y)))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ge(e, t, y, null, l, o);
            }
        for (b in l)
          if (((o = l[b]), (f = n[b]), l.hasOwnProperty(b) && (o != null || f != null)))
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
                o !== f && Ge(e, t, b, o, l, f);
            }
        dh(e, N, Q);
        return;
      case "option":
        for (var be in n)
          if (((N = n[be]), n.hasOwnProperty(be) && N != null && !l.hasOwnProperty(be)))
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ge(e, t, be, null, l, N);
            }
        for (T in l)
          if (((N = l[T]), (Q = n[T]), l.hasOwnProperty(T) && N !== Q && (N != null || Q != null)))
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
        for (var de in n) (N = n[de]), n.hasOwnProperty(de) && N != null && !l.hasOwnProperty(de) && Ge(e, t, de, null, l, N);
        for (B in l)
          if (((N = l[B]), (Q = n[B]), l.hasOwnProperty(B) && N !== Q && (N != null || Q != null)))
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
          for (var ke in n) (N = n[ke]), n.hasOwnProperty(ke) && N !== void 0 && !l.hasOwnProperty(ke) && hs(e, t, ke, void 0, l, N);
          for (V in l) (N = l[V]), (Q = n[V]), !l.hasOwnProperty(V) || N === Q || (N === void 0 && Q === void 0) || hs(e, t, V, N, l, Q);
          return;
        }
    }
    for (var q in n) (N = n[q]), n.hasOwnProperty(q) && N != null && !l.hasOwnProperty(q) && Ge(e, t, q, null, l, N);
    for (F in l) (N = l[F]), (Q = n[F]), !l.hasOwnProperty(F) || N === Q || (N == null && Q == null) || Ge(e, t, F, N, l, Q);
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
  function Jn(e) {
    return e === "head";
  }
  function m4(e, t) {
    var n = t,
      l = 0,
      o = 0;
    do {
      var f = n.nextSibling;
      if ((e.removeChild(n), f && f.nodeType === 8))
        if (((n = f.data), n === "/$")) {
          if (0 < l && 8 > l) {
            n = l;
            var b = e.ownerDocument;
            if ((n & 1 && Gl(b.documentElement), n & 2 && Gl(b.body), n & 4))
              for (n = b.head, Gl(n), b = n.firstChild; b; ) {
                var y = b.nextSibling,
                  T = b.nodeName;
                b[nl] || T === "SCRIPT" || T === "STYLE" || (T === "LINK" && b.rel.toLowerCase() === "stylesheet") || n.removeChild(b), (b = y);
              }
          }
          if (o === 0) {
            e.removeChild(f), Fl(t);
            return;
          }
          o--;
        } else n === "$" || n === "$?" || n === "$!" ? o++ : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = f;
    } while (n);
    Fl(t);
  }
  function bs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bs(n), xc(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Sb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[nl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (((f = e.getAttribute("rel")), f === "stylesheet" && e.hasAttribute("data-precedence"))) break;
              if (
                f !== o.rel ||
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
                ((f = e.getAttribute("src")),
                (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = an(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Eb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if (((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n) || ((e = an(e.nextSibling)), e === null)) return null;
    return e;
  }
  function ys(e) {
    return e.data === "$!" || (e.data === "$?" && e.ownerDocument.readyState === "complete");
  }
  function Cb(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var l = function () {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function an(e) {
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
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function x4(e, t, n) {
    switch (((t = mu(n)), e)) {
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
  var Rn = K.d;
  K.d = { f: wb, r: Tb, D: Ob, C: Mb, L: Rb, m: zb, X: Db, S: qb, M: Hb };
  function wb() {
    var e = Rn.f(),
      t = fu();
    return e || t;
  }
  function Tb(e) {
    var t = La(e);
    t !== null && t.tag === 5 && t.type === "form" ? k3(t) : Rn.r(e);
  }
  var Ar = typeof document > "u" ? null : document;
  function S4(e, t, n) {
    var l = Ar;
    if (l && typeof t == "string" && t) {
      var o = Xt(t);
      (o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        _4.has(o) || (_4.add(o), (e = { rel: e, crossOrigin: n, href: t }), l.querySelector(o) === null && ((t = l.createElement("link")), pt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function Ob(e) {
    Rn.D(e), S4("dns-prefetch", e, null);
  }
  function Mb(e, t) {
    Rn.C(e, t), S4("preconnect", e, t);
  }
  function Rb(e, t, n) {
    Rn.L(e, t, n);
    var l = Ar;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + Xt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? ((o += '[imagesrcset="' + Xt(n.imageSrcSet) + '"]'), typeof n.imageSizes == "string" && (o += '[imagesizes="' + Xt(n.imageSizes) + '"]')) : (o += '[href="' + Xt(e) + '"]');
      var f = o;
      switch (t) {
        case "style":
          f = xr(e);
          break;
        case "script":
          f = _r(e);
      }
      It.has(f) ||
        ((e = g({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
        It.set(f, e),
        l.querySelector(o) !== null || (t === "style" && l.querySelector(kl(f))) || (t === "script" && l.querySelector(Vl(f))) || ((t = l.createElement("link")), pt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function zb(e, t) {
    Rn.m(e, t);
    var n = Ar;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        o = 'link[rel="modulepreload"][as="' + Xt(l) + '"][href="' + Xt(e) + '"]',
        f = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = _r(e);
      }
      if (!It.has(f) && ((e = g({ rel: "modulepreload", href: e }, t)), It.set(f, e), n.querySelector(o) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Vl(f))) return;
        }
        (l = n.createElement("link")), pt(l, "link", e), ct(l), n.head.appendChild(l);
      }
    }
  }
  function qb(e, t, n) {
    Rn.S(e, t, n);
    var l = Ar;
    if (l && e) {
      var o = Ga(l).hoistableStyles,
        f = xr(e);
      t = t || "default";
      var b = o.get(f);
      if (!b) {
        var y = { loading: 0, preload: null };
        if ((b = l.querySelector(kl(f)))) y.loading = 5;
        else {
          (e = g({ rel: "stylesheet", href: e, "data-precedence": t }, n)), (n = It.get(f)) && As(e, n);
          var T = (b = l.createElement("link"));
          ct(T),
            pt(T, "link", e),
            (T._p = new Promise(function (B, V) {
              (T.onload = B), (T.onerror = V);
            })),
            T.addEventListener("load", function () {
              y.loading |= 1;
            }),
            T.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            xu(b, t, l);
        }
        (b = { type: "stylesheet", instance: b, count: 1, state: y }), o.set(f, b);
      }
    }
  }
  function Db(e, t) {
    Rn.X(e, t);
    var n = Ar;
    if (n && e) {
      var l = Ga(n).hoistableScripts,
        o = _r(e),
        f = l.get(o);
      f ||
        ((f = n.querySelector(Vl(o))),
        f || ((e = g({ src: e, async: !0 }, t)), (t = It.get(o)) && xs(e, t), (f = n.createElement("script")), ct(f), pt(f, "link", e), n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(o, f));
    }
  }
  function Hb(e, t) {
    Rn.M(e, t);
    var n = Ar;
    if (n && e) {
      var l = Ga(n).hoistableScripts,
        o = _r(e),
        f = l.get(o);
      f ||
        ((f = n.querySelector(Vl(o))),
        f || ((e = g({ src: e, async: !0, type: "module" }, t)), (t = It.get(o)) && xs(e, t), (f = n.createElement("script")), ct(f), pt(f, "link", e), n.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(o, f));
    }
  }
  function E4(e, t, n, l) {
    var o = (o = he.current) ? Au(o) : null;
    if (!o) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = xr(n.href)), (n = Ga(o).hoistableStyles), (l = n.get(t)), l || ((l = { type: "style", instance: null, count: 0, state: null }), n.set(t, l)), l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = xr(n.href);
          var f = Ga(o).hoistableStyles,
            b = f.get(e);
          if (
            (b ||
              ((o = o.ownerDocument || o),
              (b = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
              f.set(e, b),
              (f = o.querySelector(kl(e))) && !f._p && ((b.instance = f), (b.state.loading = 5)),
              It.has(e) || ((n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }), It.set(e, n), f || jb(o, e, n, b.state))),
            t && l === null)
          )
            throw Error(i(528, ""));
          return b;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = _r(n)), (n = Ga(o).hoistableScripts), (l = n.get(t)), l || ((l = { type: "script", instance: null, count: 0, state: null }), n.set(t, l)), l)
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
  function jb(e, t, n, l) {
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
        pt(t, "link", n),
        ct(t),
        e.head.appendChild(t));
  }
  function _r(e) {
    return '[src="' + Xt(e) + '"]';
  }
  function Vl(e) {
    return "script[async]" + e;
  }
  function w4(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Xt(n.href) + '"]');
          if (l) return (t.instance = l), ct(l), l;
          var o = g({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
          return (l = (e.ownerDocument || e).createElement("style")), ct(l), pt(l, "style", o), xu(l, n.precedence, e), (t.instance = l);
        case "stylesheet":
          o = xr(n.href);
          var f = e.querySelector(kl(o));
          if (f) return (t.state.loading |= 4), (t.instance = f), ct(f), f;
          (l = C4(n)), (o = It.get(o)) && As(l, o), (f = (e.ownerDocument || e).createElement("link")), ct(f);
          var b = f;
          return (
            (b._p = new Promise(function (y, T) {
              (b.onload = y), (b.onerror = T);
            })),
            pt(f, "link", l),
            (t.state.loading |= 4),
            xu(f, n.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = _r(n.src)),
            (o = e.querySelector(Vl(f)))
              ? ((t.instance = o), ct(o), o)
              : ((l = n), (o = It.get(f)) && ((l = g({}, n)), xs(l, o)), (e = e.ownerDocument || e), (o = e.createElement("script")), ct(o), pt(o, "link", l), e.head.appendChild(o), (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && ((l = t.instance), (t.state.loading |= 4), xu(l, n.precedence, e));
    return t.instance;
  }
  function xu(e, t, n) {
    for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = l.length ? l[l.length - 1] : null, f = o, b = 0; b < l.length; b++) {
      var y = l[b];
      if (y.dataset.precedence === t) f = y;
      else if (f !== o) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function As(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function xs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var _u = null;
  function T4(e, t, n) {
    if (_u === null) {
      var l = new Map(),
        o = (_u = new Map());
      o.set(n, l);
    } else (o = _u), (l = o.get(n)), l || ((l = new Map()), o.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var f = n[o];
      if (!(f[nl] || f[bt] || (e === "link" && f.getAttribute("rel") === "stylesheet")) && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var b = f.getAttribute(t) || "";
        b = e + b;
        var y = l.get(b);
        y ? y.push(f) : l.set(b, [f]);
      }
    }
    return l;
  }
  function O4(e, t, n) {
    (e = e.ownerDocument || e), e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function Bb(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
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
            return (e = t.disabled), typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
    }
    return !1;
  }
  function M4(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Yl = null;
  function Nb() {}
  function Qb(e, t, n) {
    if (Yl === null) throw Error(i(475));
    var l = Yl;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = xr(n.href),
          f = e.querySelector(kl(o));
        if (f) {
          (e = f._p), e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, (l = Su.bind(l)), e.then(l, l)), (t.state.loading |= 4), (t.instance = f), ct(f);
          return;
        }
        (f = e.ownerDocument || e), (n = C4(n)), (o = It.get(o)) && As(n, o), (f = f.createElement("link")), ct(f);
        var b = f;
        (b._p = new Promise(function (y, T) {
          (b.onload = y), (b.onerror = T);
        })),
          pt(f, "link", n),
          (t.instance = f);
      }
      l.stylesheets === null && (l.stylesheets = new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, (t = Su.bind(l)), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function Ub() {
    if (Yl === null) throw Error(i(475));
    var e = Yl;
    return (
      e.stylesheets && e.count === 0 && _s(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && _s(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
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
        (this.unsuspend = null), e();
      }
    }
  }
  var Eu = null;
  function _s(e, t) {
    (e.stylesheets = null), e.unsuspend !== null && (e.count++, (Eu = new Map()), t.forEach(Lb, e), (Eu = null), Su.call(e));
  }
  function Lb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Eu.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Eu.set(e, n);
        for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < o.length; f++) {
          var b = o[f];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") && (n.set(b.dataset.precedence, b), (l = b));
        }
        l && n.set(null, l);
      }
      (o = t.instance),
        (b = o.getAttribute("data-precedence")),
        (f = n.get(b) || l),
        f === l && n.set(null, o),
        n.set(b, o),
        this.count++,
        (l = Su.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        f ? f.parentNode.insertBefore(o, f.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Xl = { $$typeof: L, Provider: null, Consumer: null, _currentValue: re, _currentValue2: re, _threadCount: 0 };
  function Gb(e, t, n, l, o, f, b, y) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = bc(-1)),
      (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = bc(0)),
      (this.hiddenUpdates = bc(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = f),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map());
  }
  function R4(e, t, n, l, o, f, b, y, T, B, V, F) {
    return (
      (e = new Gb(e, t, n, b, y, T, B, F)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Dt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = no()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: l, isDehydrated: n, cache: t }),
      io(f),
      e
    );
  }
  function z4(e) {
    return e ? ((e = Wa), e) : Wa;
  }
  function q4(e, t, n, l, o, f) {
    (o = z4(o)), l.context === null ? (l.context = o) : (l.pendingContext = o), (l = Qn(t)), (l.payload = { element: n }), (f = f === void 0 ? null : f), f !== null && (l.callback = f), (n = Un(e, l, t)), n !== null && (Qt(n, e, t), xl(n, e, t));
  }
  function D4(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ss(e, t) {
    D4(e, t), (e = e.alternate) && D4(e, t);
  }
  function H4(e) {
    if (e.tag === 13) {
      var t = Ia(e, 67108864);
      t !== null && Qt(t, e, 67108864), Ss(e, 67108864);
    }
  }
  var Cu = !0;
  function kb(e, t, n, l) {
    var o = U.T;
    U.T = null;
    var f = K.p;
    try {
      (K.p = 2), Es(e, t, n, l);
    } finally {
      (K.p = f), (U.T = o);
    }
  }
  function Vb(e, t, n, l) {
    var o = U.T;
    U.T = null;
    var f = K.p;
    try {
      (K.p = 8), Es(e, t, n, l);
    } finally {
      (K.p = f), (U.T = o);
    }
  }
  function Es(e, t, n, l) {
    if (Cu) {
      var o = Cs(l);
      if (o === null) fs(e, t, l, wu, n), B4(e, l);
      else if (Xb(o, e, t, n, l)) l.stopPropagation();
      else if ((B4(e, l), t & 4 && -1 < Yb.indexOf(e))) {
        for (; o !== null; ) {
          var f = La(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var b = sa(f.pendingLanes);
                  if (b !== 0) {
                    var y = f;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; b; ) {
                      var T = 1 << (31 - gt(b));
                      (y.entanglements[1] |= T), (b &= ~T);
                    }
                    dn(f), (Ne & 6) === 0 && ((ou = $() + 500), Ql(0));
                  }
                }
                break;
              case 13:
                (y = Ia(f, 2)), y !== null && Qt(y, f, 2), fu(), Ss(f, 2);
            }
          if (((f = Cs(l)), f === null && fs(e, t, l, wu, n), f === o)) break;
          o = f;
        }
        o !== null && l.stopPropagation();
      } else fs(e, t, l, null, n);
    }
  }
  function Cs(e) {
    return (e = Mc(e)), ws(e);
  }
  var wu = null;
  function ws(e) {
    if (((wu = null), (e = Ua(e)), e !== null)) {
      var t = s(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (wu = e), null;
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
        switch (ne()) {
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
    In = null,
    Wn = null,
    ea = null,
    Zl = new Map(),
    Kl = new Map(),
    ta = [],
    Yb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function B4(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        In = null;
        break;
      case "dragenter":
      case "dragleave":
        Wn = null;
        break;
      case "mouseover":
      case "mouseout":
        ea = null;
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
  function Pl(e, t, n, l, o, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: l, nativeEvent: f, targetContainers: [o] }), t !== null && ((t = La(t)), t !== null && H4(t)), e)
      : ((e.eventSystemFlags |= l), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Xb(e, t, n, l, o) {
    switch (t) {
      case "focusin":
        return (In = Pl(In, e, t, n, l, o)), !0;
      case "dragenter":
        return (Wn = Pl(Wn, e, t, n, l, o)), !0;
      case "mouseover":
        return (ea = Pl(ea, e, t, n, l, o)), !0;
      case "pointerover":
        var f = o.pointerId;
        return Zl.set(f, Pl(Zl.get(f) || null, e, t, n, l, o)), !0;
      case "gotpointercapture":
        return (f = o.pointerId), Kl.set(f, Pl(Kl.get(f) || null, e, t, n, l, o)), !0;
    }
    return !1;
  }
  function N4(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = s(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            (e.blockedOn = t),
              Q8(e.priority, function () {
                if (n.tag === 13) {
                  var l = Nt();
                  l = yc(l);
                  var o = Ia(n, l);
                  o !== null && Qt(o, n, l), Ss(n, l);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Cs(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Oc = l), n.target.dispatchEvent(l), (Oc = null);
      } else return (t = La(n)), t !== null && H4(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Q4(e, t, n) {
    Tu(e) && n.delete(t);
  }
  function Zb() {
    (Ts = !1), In !== null && Tu(In) && (In = null), Wn !== null && Tu(Wn) && (Wn = null), ea !== null && Tu(ea) && (ea = null), Zl.forEach(Q4), Kl.forEach(Q4);
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
          var n = e[t],
            l = e[t + 1],
            o = e[t + 2];
          if (typeof l != "function") {
            if (ws(l || n) === null) continue;
            break;
          }
          var f = La(n);
          f !== null && (e.splice(t, 3), (t -= 3), wo(f, { pending: !0, data: o, method: n.method, action: l }, l, o));
        }
      }));
  }
  function Fl(e) {
    function t(T) {
      return Ou(T, e);
    }
    In !== null && Ou(In, e), Wn !== null && Ou(Wn, e), ea !== null && Ou(ea, e), Zl.forEach(t), Kl.forEach(t);
    for (var n = 0; n < ta.length; n++) {
      var l = ta[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ta.length && ((n = ta[0]), n.blockedOn === null); ) N4(n), n.blockedOn === null && ta.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var o = n[l],
          f = n[l + 1],
          b = o[_t] || null;
        if (typeof f == "function") b || U4(n);
        else if (b) {
          var y = null;
          if (f && f.hasAttribute("formAction")) {
            if (((o = f), (b = f[_t] || null))) y = b.formAction;
            else if (ws(o) !== null) continue;
          } else y = b.action;
          typeof y == "function" ? (n[l + 1] = y) : (n.splice(l, 3), (l -= 3)), U4(n);
        }
      }
  }
  function Os(e) {
    this._internalRoot = e;
  }
  (Ru.prototype.render = Os.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var n = t.current,
        l = Nt();
      q4(n, l, e, t, null, null);
    }),
    (Ru.prototype.unmount = Os.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          q4(e.current, 2, null, e, null, null), fu(), (t[Qa] = null);
        }
      });
  function Ru(e) {
    this._internalRoot = e;
  }
  Ru.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = nh();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ta.length && t !== 0 && t < ta[n].priority; n++);
      ta.splice(n, 0, e), n === 0 && N4(e);
    }
  };
  var L4 = a.version;
  if (L4 !== "19.1.0") throw Error(i(527, L4, "19.1.0"));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (e = v(t)), (e = e !== null ? p(e) : null), (e = e === null ? null : e.stateNode), e;
  };
  var Kb = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: U, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zu.isDisabled && zu.supportsFiber)
      try {
        (oa = zu.inject(Kb)), (vt = zu);
      } catch {}
  }
  return (
    (Jl.createRoot = function (e, t) {
      if (!c(e)) throw Error(i(299));
      var n = !1,
        l = "",
        o = nd,
        f = ad,
        b = rd,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (b = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)),
        (t = R4(e, 1, !1, null, null, n, l, o, f, b, y, null)),
        (e[Qa] = t.current),
        ss(e),
        new Os(t)
      );
    }),
    (Jl.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(i(299));
      var l = !1,
        o = "",
        f = nd,
        b = ad,
        y = rd,
        T = null,
        B = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (b = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (B = n.formState)),
        (t = R4(e, 1, !0, t, n ?? null, l, o, f, b, y, T, B)),
        (t.context = z4(null)),
        (n = t.current),
        (l = Nt()),
        (l = yc(l)),
        (o = Qn(l)),
        (o.callback = null),
        Un(n, o, l),
        (n = l),
        (t.current.lanes = n),
        tl(t, n),
        dn(t),
        (e[Qa] = t.current),
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
      } catch (a) {
        console.error(a);
      }
  }
  return r(), (Rs.exports = a9()), Rs.exports;
}
var l9 = r9(),
  Ee = ua();
const S = Fr(Ee),
  i9 = Fb({ __proto__: null, default: S }, [Ee]);
function u9(r, a) {
  if (r instanceof RegExp) return { keys: !1, pattern: r };
  var u,
    i,
    c,
    s,
    h = [],
    d = "",
    v = r.split("/");
  for (v[0] || v.shift(); (c = v.shift()); )
    (u = c[0]),
      u === "*"
        ? (h.push(u), (d += c[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : u === ":"
        ? ((i = c.indexOf("?", 1)), (s = c.indexOf(".", 1)), h.push(c.substring(1, ~i ? i : ~s ? s : c.length)), (d += ~i && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)"), ~s && (d += (~i ? "?" : "") + "\\" + c.substring(s)))
        : (d += "/" + c);
  return { keys: h, pattern: new RegExp("^" + d + (a ? "(?=$|/)" : "/?$"), "i") };
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
  var r = ua();
  function a(A, m) {
    return (A === m && (A !== 0 || 1 / A === 1 / m)) || (A !== A && m !== m);
  }
  var u = typeof Object.is == "function" ? Object.is : a,
    i = r.useState,
    c = r.useEffect,
    s = r.useLayoutEffect,
    h = r.useDebugValue;
  function d(A, m) {
    var x = m(),
      w = i({ inst: { value: x, getSnapshot: m } }),
      O = w[0].inst,
      R = w[1];
    return (
      s(
        function () {
          (O.value = x), (O.getSnapshot = m), v(O) && R({ inst: O });
        },
        [A, x, m]
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
        [A]
      ),
      h(x),
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
  return (Bs.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : g), Bs;
}
var I4;
function o9() {
  return I4 || ((I4 = 1), (js.exports = c9())), js.exports;
}
var s9 = o9();
const f9 = i9.useInsertionEffect,
  h9 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  d9 = h9 ? Ee.useLayoutEffect : Ee.useEffect,
  p9 = f9 || d9,
  dg = r => {
    const a = Ee.useRef([r, (...u) => a[0](...u)]).current;
    return (
      p9(() => {
        a[0] = r;
      }),
      a[1]
    );
  },
  v9 = "popstate",
  r2 = "pushState",
  l2 = "replaceState",
  g9 = "hashchange",
  W4 = [v9, r2, l2, g9],
  b9 = r => {
    for (const a of W4) addEventListener(a, r);
    return () => {
      for (const a of W4) removeEventListener(a, r);
    };
  },
  pg = (r, a) => s9.useSyncExternalStore(b9, r, a),
  y9 = () => location.search,
  m9 = ({ ssrSearch: r = "" } = {}) => pg(y9, () => r),
  ep = () => location.pathname,
  A9 = ({ ssrPath: r } = {}) => pg(ep, r ? () => r : ep),
  x9 = (r, { replace: a = !1, state: u = null } = {}) => history[a ? l2 : r2](u, "", r),
  _9 = (r = {}) => [A9(r), x9],
  tp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[tp] > "u") {
  for (const r of [r2, l2]) {
    const a = history[r];
    history[r] = function () {
      const u = a.apply(this, arguments),
        i = new Event(r);
      return (i.arguments = arguments), dispatchEvent(i), u;
    };
  }
  Object.defineProperty(window, tp, { value: !0 });
}
const S9 = (r, a) => (a.toLowerCase().indexOf(r.toLowerCase()) ? "~" + a : a.slice(r.length) || "/"),
  vg = (r = "") => (r === "/" ? "" : r),
  E9 = (r, a) => (r[0] === "~" ? r.slice(1) : vg(a) + r),
  C9 = (r = "", a) => S9(np(vg(r)), np(a)),
  np = r => {
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
    const [a, u] = r.hook(r);
    return [C9(r.base, a), dg((i, c) => u(E9(i, r.base), c))];
  },
  Ag = (r, a, u, i) => {
    const { pattern: c, keys: s } = a instanceof RegExp ? { keys: !1, pattern: a } : r(a || "*", i),
      h = c.exec(u) || [],
      [d, ...v] = h;
    return d !== void 0
      ? [
          !0,
          (() => {
            const p = s !== !1 ? Object.fromEntries(s.map((A, m) => [A, v[m]])) : h.groups;
            let g = { ...v };
            return p && Object.assign(g, p), g;
          })(),
          ...(i ? [d] : []),
        ]
      : [!1, null];
  },
  T9 = ({ children: r, ...a }) => {
    const u = ec(),
      i = a.hook ? gg : u;
    let c = i;
    const [s, h] = a.ssrPath?.split("?") ?? [];
    h && ((a.ssrSearch = h), (a.ssrPath = s)), (a.hrefs = a.hrefs ?? a.hook?.hrefs);
    let d = Ee.useRef({}),
      v = d.current,
      p = v;
    for (let g in i) {
      const A = g === "base" ? i[g] + (a[g] || "") : a[g] || i[g];
      v === p && A !== p[g] && (d.current = p = { ...p }), (p[g] = A), (A !== i[g] || A !== c[g]) && (c = p);
    }
    return Ee.createElement(bg.Provider, { value: c, children: r });
  },
  ap = ({ children: r, component: a }, u) => (a ? Ee.createElement(a, { params: u }) : typeof r == "function" ? r(u) : r),
  O9 = r => {
    let a = Ee.useRef(yg);
    const u = a.current;
    return (a.current = Object.keys(r).length !== Object.keys(u).length || Object.entries(r).some(([i, c]) => c !== u[i]) ? r : u);
  },
  Ns = ({ path: r, nest: a, match: u, ...i }) => {
    const c = ec(),
      [s] = i2(c),
      [h, d, v] = u ?? Ag(c.parser, r, s, a),
      p = O9({ ...w9(), ...d });
    if (!h) return null;
    const g = v ? Ee.createElement(T9, { base: v }, ap(i, p)) : ap(i, p);
    return Ee.createElement(mg.Provider, { value: p, children: g });
  },
  Pr = Ee.forwardRef((r, a) => {
    const u = ec(),
      [i, c] = i2(u),
      { to: s = "", href: h = s, onClick: d, asChild: v, children: p, className: g, replace: A, state: m, ...x } = r,
      w = dg(R => {
        R.ctrlKey || R.metaKey || R.altKey || R.shiftKey || R.button !== 0 || (d?.(R), R.defaultPrevented || (R.preventDefault(), c(h, r)));
      }),
      O = u.hrefs(h[0] === "~" ? h.slice(1) : u.base + h, u);
    return v && Ee.isValidElement(p) ? Ee.cloneElement(p, { onClick: w, href: O }) : Ee.createElement("a", { ...x, onClick: w, href: O, className: g?.call ? g(i === h) : g, children: p, ref: a });
  }),
  xg = r => (Array.isArray(r) ? r.flatMap(a => xg(a && a.type === Ee.Fragment ? a.props.children : a)) : [r]),
  M9 = ({ children: r, location: a }) => {
    const u = ec(),
      [i] = i2(u);
    for (const c of xg(r)) {
      let s = 0;
      if (Ee.isValidElement(c) && (s = Ag(u.parser, c.props.path, a || i, c.props.nest))[0]) return Ee.cloneElement(c, { match: s });
    }
    return null;
  },
  R9 = "" + new URL("drawllab-logo-BlsAwChl.svg", import.meta.url).href,
  z9 = "" + new URL("drawllab-icon-C__svyG8.svg", import.meta.url).href,
  q9 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20width='13.522069mm'%20height='17.325792mm'%20viewBox='0%200%2013.522069%2017.325792'%20version='1.1'%20id='svg8'%20inkscape:version='0.92.4%20(5da689c313,%202019-01-14)'%20sodipodi:docname='drawllab-icon-mouse.svg'%3e%3cdefs%20id='defs2'%20/%3e%3csodipodi:namedview%20id='base'%20pagecolor='%23ffffff'%20bordercolor='%23666666'%20borderopacity='1.0'%20inkscape:pageopacity='0.0'%20inkscape:pageshadow='2'%20inkscape:zoom='3.959798'%20inkscape:cx='-49.19707'%20inkscape:cy='70.805623'%20inkscape:document-units='mm'%20inkscape:current-layer='layer1'%20showgrid='false'%20inkscape:window-width='1806'%20inkscape:window-height='1408'%20inkscape:window-x='2177'%20inkscape:window-y='86'%20inkscape:window-maximized='1'%20/%3e%3cmetadata%20id='metadata5'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'%20/%3e%3cdc:title%3e%3c/dc:title%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cg%20inkscape:label='Layer%201'%20inkscape:groupmode='layer'%20id='layer1'%20transform='translate(-239.03321,251.91112)'%3e%3cpath%20style='fill:%235e878b;fill-opacity:1;stroke-width:0.08466667'%20d='m%20252.29351,-241.59649%20c%20-0.70411,0.30879%20-1.52448,0.0211%20-2.27629,0.0885%20-0.76042,-0.0109%20-1.50728,0.0119%20-2.26731,-0.12629%20-0.47038,0.14568%20-1.60438,-0.59423%20-1.69731,0.08%200.38043,0.69088%200.81272,1.39502%201.16179,2.09364%200.41395,0.53507%200.66221,1.1427%201.07978,1.65963%200.38027,0.5959%200.885,1.24497%200.62265,1.99587%20-0.10805,0.80058%20-0.99895,1.49571%20-1.78946,1.11045%20-0.94336,-0.14756%20-1.15797,-1.05559%20-1.68178,-1.67869%20-0.39395,-0.7043%20-0.7261,-1.44595%20-1.14093,-2.14445%20-0.2924,-0.58899%20-0.58221,-1.1811%20-0.80904,-1.79907%20-1.00285,1.36046%20-2.1152,3.11064%20-3.08665,4.49402%20-0.18913,0.44146%20-0.74259,0.98942%20-0.93713,0.22538%20-0.28178,-0.81968%20-0.34699,-1.71974%20-0.37157,-2.59007%200.13078,-2.19538%20-0.0866,-4.69545%20-0.01,-6.9671%20-0.006,-0.6375%20-0.0903,-1.29508%20-0.0297,-1.93998%20-0.0826,-0.81958%200.0526,-1.67622%200.007,-2.51351%200.003,-0.73756%20-0.08,-1.46357%200.12385,-2.19257%200.69824,-0.42472%201.33041,0.49252%201.92134,0.78691%200.6515,0.40112%201.2169,0.89638%201.79928,1.36282%200.50597,0.54006%201.0696,1.03993%201.70262,1.45065%200.55341,0.47436%201.11949,0.92212%201.73372,1.30959%200.6377,0.47674%201.31185,0.89571%201.91775,1.41497%200.60487,0.41665%201.12867,0.9441%201.75067,1.36051%200.6086,0.39265%201.02864,1.01385%201.6373,1.40446%200.24188,0.27751%201.41614,0.66458%200.6389,1.11431%20z'%20id='path5104'%20inkscape:connector-curvature='0'%20sodipodi:nodetypes='ccccccccccccccccccccccccccc'%20/%3e%3c/g%3e%3c/svg%3e";
function D9() {
  return X.jsxs("div", {
    className: "home",
    children: [
      X.jsx("div", { className: "home__logo", children: X.jsx("img", { src: R9, alt: "", className: "home__logo" }) }),
      X.jsx("h2", { children: "a browser based drawing application" }),
      X.jsx("div", { className: "home__graphic", children: X.jsx("img", { src: z9, alt: "drawllab icon", className: "home__icon" }) }),
      X.jsx("div", { className: "home__graphic", children: X.jsx("img", { src: q9, alt: "drawllab icon", className: "home__icon2" }) }),
      X.jsxs("div", {
        className: "home__button-container",
        children: [X.jsx(Pr, { to: "/canvas", children: X.jsx("button", { className: "home__canvas", children: "Start Drawing" }) }), X.jsx(Pr, { to: "/about", children: X.jsx("button", { className: "home__about", children: "About" }) })],
      }),
    ],
  });
}
function Qs(r, a, u) {
  if (r && r.length) {
    const [i, c] = a,
      s = (Math.PI / 180) * u,
      h = Math.cos(s),
      d = Math.sin(s);
    for (const v of r) {
      const [p, g] = v;
      (v[0] = (p - i) * h - (g - c) * d + i), (v[1] = (p - i) * d + (g - c) * h + c);
    }
  }
}
function H9(r, a) {
  return r[0] === a[0] && r[1] === a[1];
}
function j9(r, a, u, i = 1) {
  const c = u,
    s = Math.max(a, 0.1),
    h = r[0] && r[0][0] && typeof r[0][0] == "number" ? [r] : r,
    d = [0, 0];
  if (c) for (const p of h) Qs(p, d, c);
  const v = (function (p, g, A) {
    const m = [];
    for (const D of p) {
      const L = [...D];
      H9(L[0], L[L.length - 1]) || L.push([L[0][0], L[0][1]]), L.length > 2 && m.push(L);
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
    if ((w.sort((D, L) => (D.ymin < L.ymin ? -1 : D.ymin > L.ymin ? 1 : D.x < L.x ? -1 : D.x > L.x ? 1 : D.ymax === L.ymax ? 0 : (D.ymax - L.ymax) / Math.abs(D.ymax - L.ymax))), !w.length)) return x;
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
      if (((O = O.filter(D => !(D.edge.ymax <= R))), O.sort((D, L) => (D.edge.x === L.edge.x ? 0 : (D.edge.x - L.edge.x) / Math.abs(D.edge.x - L.edge.x))), (A !== 1 || H % g == 0) && O.length > 1))
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
      (R += A),
        O.forEach(D => {
          D.edge.x = D.edge.x + A * D.edge.islope;
        }),
        H++;
    }
    return x;
  })(h, s, i);
  if (c) {
    for (const p of h) Qs(p, d, -c);
    (function (p, g, A) {
      const m = [];
      p.forEach(x => m.push(...x)), Qs(m, g, A);
    })(v, d, -c);
  }
  return v;
}
function pi(r, a) {
  var u;
  const i = a.hachureAngle + 90;
  let c = a.hachureGap;
  c < 0 && (c = 4 * a.strokeWidth), (c = Math.round(Math.max(c, 0.1)));
  let s = 1;
  return a.roughness >= 1 && (((u = a.randomizer) === null || u === void 0 ? void 0 : u.next()) || Math.random()) > 0.7 && (s = c), j9(r, c, i, s || 1);
}
class u2 {
  constructor(a) {
    this.helper = a;
  }
  fillPolygons(a, u) {
    return this._fillPolygons(a, u);
  }
  _fillPolygons(a, u) {
    const i = pi(a, u);
    return { type: "fillSketch", ops: this.renderLines(i, u) };
  }
  renderLines(a, u) {
    const i = [];
    for (const c of a) i.push(...this.helper.doubleLineOps(c[0][0], c[0][1], c[1][0], c[1][1], u));
    return i;
  }
}
function tc(r) {
  const a = r[0],
    u = r[1];
  return Math.sqrt(Math.pow(a[0] - u[0], 2) + Math.pow(a[1] - u[1], 2));
}
class B9 extends u2 {
  fillPolygons(a, u) {
    let i = u.hachureGap;
    i < 0 && (i = 4 * u.strokeWidth), (i = Math.max(i, 0.1));
    const c = pi(a, Object.assign({}, u, { hachureGap: i })),
      s = (Math.PI / 180) * u.hachureAngle,
      h = [],
      d = 0.5 * i * Math.cos(s),
      v = 0.5 * i * Math.sin(s);
    for (const [p, g] of c) tc([p, g]) && h.push([[p[0] - d, p[1] + v], [...g]], [[p[0] + d, p[1] - v], [...g]]);
    return { type: "fillSketch", ops: this.renderLines(h, u) };
  }
}
class N9 extends u2 {
  fillPolygons(a, u) {
    const i = this._fillPolygons(a, u),
      c = Object.assign({}, u, { hachureAngle: u.hachureAngle + 90 }),
      s = this._fillPolygons(a, c);
    return (i.ops = i.ops.concat(s.ops)), i;
  }
}
class Q9 {
  constructor(a) {
    this.helper = a;
  }
  fillPolygons(a, u) {
    const i = pi(a, (u = Object.assign({}, u, { hachureAngle: 0 })));
    return this.dotsOnLines(i, u);
  }
  dotsOnLines(a, u) {
    const i = [];
    let c = u.hachureGap;
    c < 0 && (c = 4 * u.strokeWidth), (c = Math.max(c, 0.1));
    let s = u.fillWeight;
    s < 0 && (s = u.strokeWidth / 2);
    const h = c / 4;
    for (const d of a) {
      const v = tc(d),
        p = v / c,
        g = Math.ceil(p) - 1,
        A = v - g * c,
        m = (d[0][0] + d[1][0]) / 2 - c / 4,
        x = Math.min(d[0][1], d[1][1]);
      for (let w = 0; w < g; w++) {
        const O = x + A + w * c,
          R = m - h + 2 * Math.random() * h,
          H = O - h + 2 * Math.random() * h,
          D = this.helper.ellipse(R, H, s, s, u);
        i.push(...D.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class U9 {
  constructor(a) {
    this.helper = a;
  }
  fillPolygons(a, u) {
    const i = pi(a, u);
    return { type: "fillSketch", ops: this.dashedLine(i, u) };
  }
  dashedLine(a, u) {
    const i = u.dashOffset < 0 ? (u.hachureGap < 0 ? 4 * u.strokeWidth : u.hachureGap) : u.dashOffset,
      c = u.dashGap < 0 ? (u.hachureGap < 0 ? 4 * u.strokeWidth : u.hachureGap) : u.dashGap,
      s = [];
    return (
      a.forEach(h => {
        const d = tc(h),
          v = Math.floor(d / (i + c)),
          p = (d + c - v * (i + c)) / 2;
        let g = h[0],
          A = h[1];
        g[0] > A[0] && ((g = h[1]), (A = h[0]));
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
  constructor(a) {
    this.helper = a;
  }
  fillPolygons(a, u) {
    const i = u.hachureGap < 0 ? 4 * u.strokeWidth : u.hachureGap,
      c = u.zigzagOffset < 0 ? i : u.zigzagOffset,
      s = pi(a, (u = Object.assign({}, u, { hachureGap: i + c })));
    return { type: "fillSketch", ops: this.zigzagLines(s, c, u) };
  }
  zigzagLines(a, u, i) {
    const c = [];
    return (
      a.forEach(s => {
        const h = tc(s),
          d = Math.round(h / (2 * u));
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
  constructor(a) {
    this.seed = a;
  }
  next() {
    return this.seed ? ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const k9 = 0,
  Us = 1,
  rp = 2,
  Du = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Ls(r, a) {
  return r.type === a;
}
function c2(r) {
  const a = [],
    u = (function (h) {
      const d = new Array();
      for (; h !== ""; )
        if (h.match(/^([ \t\r\n,]+)/)) h = h.substr(RegExp.$1.length);
        else if (h.match(/^([aAcChHlLmMqQsStTvVzZ])/)) (d[d.length] = { type: k9, text: RegExp.$1 }), (h = h.substr(RegExp.$1.length));
        else {
          if (!h.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
          (d[d.length] = { type: Us, text: `${parseFloat(RegExp.$1)}` }), (h = h.substr(RegExp.$1.length));
        }
      return (d[d.length] = { type: rp, text: "" }), d;
    })(r);
  let i = "BOD",
    c = 0,
    s = u[c];
  for (; !Ls(s, rp); ) {
    let h = 0;
    const d = [];
    if (i === "BOD") {
      if (s.text !== "M" && s.text !== "m") return c2("M0,0" + r);
      c++, (h = Du[s.text]), (i = s.text);
    } else Ls(s, Us) ? (h = Du[i]) : (c++, (h = Du[s.text]), (i = s.text));
    if (!(c + h < u.length)) throw new Error("Path data ended short");
    for (let v = c; v < c + h; v++) {
      const p = u[v];
      if (!Ls(p, Us)) throw new Error("Param not a number: " + i + "," + p.text);
      d[d.length] = +p.text;
    }
    if (typeof Du[i] != "number") throw new Error("Bad segment: " + i);
    {
      const v = { key: i, data: d };
      a.push(v), (c += h), (s = u[c]), i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return a;
}
function _g(r) {
  let a = 0,
    u = 0,
    i = 0,
    c = 0;
  const s = [];
  for (const { key: h, data: d } of r)
    switch (h) {
      case "M":
        s.push({ key: "M", data: [...d] }), ([a, u] = d), ([i, c] = d);
        break;
      case "m":
        (a += d[0]), (u += d[1]), s.push({ key: "M", data: [a, u] }), (i = a), (c = u);
        break;
      case "L":
        s.push({ key: "L", data: [...d] }), ([a, u] = d);
        break;
      case "l":
        (a += d[0]), (u += d[1]), s.push({ key: "L", data: [a, u] });
        break;
      case "C":
        s.push({ key: "C", data: [...d] }), (a = d[4]), (u = d[5]);
        break;
      case "c": {
        const v = d.map((p, g) => (g % 2 ? p + u : p + a));
        s.push({ key: "C", data: v }), (a = v[4]), (u = v[5]);
        break;
      }
      case "Q":
        s.push({ key: "Q", data: [...d] }), (a = d[2]), (u = d[3]);
        break;
      case "q": {
        const v = d.map((p, g) => (g % 2 ? p + u : p + a));
        s.push({ key: "Q", data: v }), (a = v[2]), (u = v[3]);
        break;
      }
      case "A":
        s.push({ key: "A", data: [...d] }), (a = d[5]), (u = d[6]);
        break;
      case "a":
        (a += d[5]), (u += d[6]), s.push({ key: "A", data: [d[0], d[1], d[2], d[3], d[4], a, u] });
        break;
      case "H":
        s.push({ key: "H", data: [...d] }), (a = d[0]);
        break;
      case "h":
        (a += d[0]), s.push({ key: "H", data: [a] });
        break;
      case "V":
        s.push({ key: "V", data: [...d] }), (u = d[0]);
        break;
      case "v":
        (u += d[0]), s.push({ key: "V", data: [u] });
        break;
      case "S":
        s.push({ key: "S", data: [...d] }), (a = d[2]), (u = d[3]);
        break;
      case "s": {
        const v = d.map((p, g) => (g % 2 ? p + u : p + a));
        s.push({ key: "S", data: v }), (a = v[2]), (u = v[3]);
        break;
      }
      case "T":
        s.push({ key: "T", data: [...d] }), (a = d[0]), (u = d[1]);
        break;
      case "t":
        (a += d[0]), (u += d[1]), s.push({ key: "T", data: [a, u] });
        break;
      case "Z":
      case "z":
        s.push({ key: "Z", data: [] }), (a = i), (u = c);
    }
  return s;
}
function Sg(r) {
  const a = [];
  let u = "",
    i = 0,
    c = 0,
    s = 0,
    h = 0,
    d = 0,
    v = 0;
  for (const { key: p, data: g } of r) {
    switch (p) {
      case "M":
        a.push({ key: "M", data: [...g] }), ([i, c] = g), ([s, h] = g);
        break;
      case "C":
        a.push({ key: "C", data: [...g] }), (i = g[4]), (c = g[5]), (d = g[2]), (v = g[3]);
        break;
      case "L":
        a.push({ key: "L", data: [...g] }), ([i, c] = g);
        break;
      case "H":
        (i = g[0]), a.push({ key: "L", data: [i, c] });
        break;
      case "V":
        (c = g[0]), a.push({ key: "L", data: [i, c] });
        break;
      case "S": {
        let A = 0,
          m = 0;
        u === "C" || u === "S" ? ((A = i + (i - d)), (m = c + (c - v))) : ((A = i), (m = c)), a.push({ key: "C", data: [A, m, ...g] }), (d = g[0]), (v = g[1]), (i = g[2]), (c = g[3]);
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
        a.push({ key: "C", data: [O, R, H, D, A, m] }), (d = x), (v = w), (i = A), (c = m);
        break;
      }
      case "Q": {
        const [A, m, x, w] = g,
          O = i + (2 * (A - i)) / 3,
          R = c + (2 * (m - c)) / 3,
          H = x + (2 * (A - x)) / 3,
          D = w + (2 * (m - w)) / 3;
        a.push({ key: "C", data: [O, R, H, D, x, w] }), (d = A), (v = m), (i = x), (c = w);
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
          ? (a.push({ key: "C", data: [i, c, R, H, R, H] }), (i = R), (c = H))
          : (i !== R || c !== H) &&
            (Eg(i, c, R, H, A, m, x, w, O).forEach(function (D) {
              a.push({ key: "C", data: D });
            }),
            (i = R),
            (c = H));
        break;
      }
      case "Z":
        a.push({ key: "Z", data: [] }), (i = s), (c = h);
    }
    u = p;
  }
  return a;
}
function Il(r, a, u) {
  return [r * Math.cos(u) - a * Math.sin(u), r * Math.sin(u) + a * Math.cos(u)];
}
function Eg(r, a, u, i, c, s, h, d, v, p) {
  const g = ((A = h), (Math.PI * A) / 180);
  var A;
  let m = [],
    x = 0,
    w = 0,
    O = 0,
    R = 0;
  if (p) [x, w, O, R] = p;
  else {
    ([r, a] = Il(r, a, -g)), ([u, i] = Il(u, i, -g));
    const me = (r - u) / 2,
      Ae = (a - i) / 2;
    let Se = (me * me) / (c * c) + (Ae * Ae) / (s * s);
    Se > 1 && ((Se = Math.sqrt(Se)), (c *= Se), (s *= Se));
    const U = c * c,
      K = s * s,
      re = U * K - U * Ae * Ae - K * me * me,
      ce = U * Ae * Ae + K * me * me,
      C = (d === v ? -1 : 1) * Math.sqrt(Math.abs(re / ce));
    (O = (C * c * Ae) / s + (r + u) / 2),
      (R = (C * -s * me) / c + (a + i) / 2),
      (x = Math.asin(parseFloat(((a - R) / s).toFixed(9)))),
      (w = Math.asin(parseFloat(((i - R) / s).toFixed(9)))),
      r < O && (x = Math.PI - x),
      u < O && (w = Math.PI - w),
      x < 0 && (x = 2 * Math.PI + x),
      w < 0 && (w = 2 * Math.PI + w),
      v && x > w && (x -= 2 * Math.PI),
      !v && w > x && (w -= 2 * Math.PI);
  }
  let H = w - x;
  if (Math.abs(H) > (120 * Math.PI) / 180) {
    const me = w,
      Ae = u,
      Se = i;
    (w = v && w > x ? x + ((120 * Math.PI) / 180) * 1 : x + ((120 * Math.PI) / 180) * -1), (m = Eg((u = O + c * Math.cos(w)), (i = R + s * Math.sin(w)), Ae, Se, c, s, h, 0, v, [w, me, O, R]));
  }
  H = w - x;
  const D = Math.cos(x),
    L = Math.sin(x),
    k = Math.cos(w),
    G = Math.sin(w),
    Y = Math.tan(H / 4),
    J = (4 / 3) * c * Y,
    ue = (4 / 3) * s * Y,
    fe = [r, a],
    ye = [r + J * L, a - ue * D],
    le = [u + J * G, i - ue * k],
    _e = [u, i];
  if (((ye[0] = 2 * fe[0] - ye[0]), (ye[1] = 2 * fe[1] - ye[1]), p)) return [ye, le, _e].concat(m);
  {
    m = [ye, le, _e].concat(m);
    const me = [];
    for (let Ae = 0; Ae < m.length; Ae += 3) {
      const Se = Il(m[Ae][0], m[Ae][1], g),
        U = Il(m[Ae + 1][0], m[Ae + 1][1], g),
        K = Il(m[Ae + 2][0], m[Ae + 2][1], g);
      me.push([Se[0], Se[1], U[0], U[1], K[0], K[1]]);
    }
    return me;
  }
}
const V9 = {
  randOffset: function (r, a) {
    return ge(r, a);
  },
  randOffsetWithRange: function (r, a, u) {
    return Vu(r, a, u);
  },
  ellipse: function (r, a, u, i, c) {
    const s = wg(u, i, c);
    return Kf(r, a, c, s).opset;
  },
  doubleLineOps: function (r, a, u, i, c) {
    return ra(r, a, u, i, c, !0);
  },
};
function Cg(r, a, u, i, c) {
  return { type: "path", ops: ra(r, a, u, i, c) };
}
function Lu(r, a, u) {
  const i = (r || []).length;
  if (i > 2) {
    const c = [];
    for (let s = 0; s < i - 1; s++) c.push(...ra(r[s][0], r[s][1], r[s + 1][0], r[s + 1][1], u));
    return a && c.push(...ra(r[i - 1][0], r[i - 1][1], r[0][0], r[0][1], u)), { type: "path", ops: c };
  }
  return i === 2 ? Cg(r[0][0], r[0][1], r[1][0], r[1][1], u) : { type: "path", ops: [] };
}
function Y9(r, a, u, i, c) {
  return (function (s, h) {
    return Lu(s, !0, h);
  })(
    [
      [r, a],
      [r + u, a],
      [r + u, a + i],
      [r, a + i],
    ],
    c
  );
}
function lp(r, a) {
  if (r.length) {
    const u = typeof r[0][0] == "number" ? [r] : r,
      i = Hu(u[0], 1 * (1 + 0.2 * a.roughness), a),
      c = a.disableMultiStroke ? [] : Hu(u[0], 1.5 * (1 + 0.22 * a.roughness), cp(a));
    for (let s = 1; s < u.length; s++) {
      const h = u[s];
      if (h.length) {
        const d = Hu(h, 1 * (1 + 0.2 * a.roughness), a),
          v = a.disableMultiStroke ? [] : Hu(h, 1.5 * (1 + 0.22 * a.roughness), cp(a));
        for (const p of d) p.op !== "move" && i.push(p);
        for (const p of v) p.op !== "move" && c.push(p);
      }
    }
    return { type: "path", ops: i.concat(c) };
  }
  return { type: "path", ops: [] };
}
function wg(r, a, u) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(r / 2, 2) + Math.pow(a / 2, 2)) / 2)),
    c = Math.ceil(Math.max(u.curveStepCount, (u.curveStepCount / Math.sqrt(200)) * i)),
    s = (2 * Math.PI) / c;
  let h = Math.abs(r / 2),
    d = Math.abs(a / 2);
  const v = 1 - u.curveFitting;
  return (h += ge(h * v, u)), (d += ge(d * v, u)), { increment: s, rx: h, ry: d };
}
function Kf(r, a, u, i) {
  const [c, s] = op(i.increment, r, a, i.rx, i.ry, 1, i.increment * Vu(0.1, Vu(0.4, 1, u), u), u);
  let h = Yu(c, null, u);
  if (!u.disableMultiStroke && u.roughness !== 0) {
    const [d] = op(i.increment, r, a, i.rx, i.ry, 1.5, 0, u),
      v = Yu(d, null, u);
    h = h.concat(v);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: h } };
}
function ip(r, a, u, i, c, s, h, d, v) {
  const p = r,
    g = a;
  let A = Math.abs(u / 2),
    m = Math.abs(i / 2);
  (A += ge(0.01 * A, v)), (m += ge(0.01 * m, v));
  let x = c,
    w = s;
  for (; x < 0; ) (x += 2 * Math.PI), (w += 2 * Math.PI);
  w - x > 2 * Math.PI && ((x = 0), (w = 2 * Math.PI));
  const O = (2 * Math.PI) / v.curveStepCount,
    R = Math.min(O / 2, (w - x) / 2),
    H = sp(R, p, g, A, m, x, w, 1, v);
  if (!v.disableMultiStroke) {
    const D = sp(R, p, g, A, m, x, w, 1.5, v);
    H.push(...D);
  }
  return (
    h && (d ? H.push(...ra(p, g, p + A * Math.cos(x), g + m * Math.sin(x), v), ...ra(p, g, p + A * Math.cos(w), g + m * Math.sin(w), v)) : H.push({ op: "lineTo", data: [p, g] }, { op: "lineTo", data: [p + A * Math.cos(x), g + m * Math.sin(x)] })),
    { type: "path", ops: H }
  );
}
function up(r, a) {
  const u = Sg(_g(c2(r))),
    i = [];
  let c = [0, 0],
    s = [0, 0];
  for (const { key: h, data: d } of u)
    switch (h) {
      case "M":
        (s = [d[0], d[1]]), (c = [d[0], d[1]]);
        break;
      case "L":
        i.push(...ra(s[0], s[1], d[0], d[1], a)), (s = [d[0], d[1]]);
        break;
      case "C": {
        const [v, p, g, A, m, x] = d;
        i.push(...X9(v, p, g, A, m, x, s, a)), (s = [m, x]);
        break;
      }
      case "Z":
        i.push(...ra(s[0], s[1], c[0], c[1], a)), (s = [c[0], c[1]]);
    }
  return { type: "path", ops: i };
}
function Gs(r, a) {
  const u = [];
  for (const i of r)
    if (i.length) {
      const c = a.maxRandomnessOffset || 0,
        s = i.length;
      if (s > 2) {
        u.push({ op: "move", data: [i[0][0] + ge(c, a), i[0][1] + ge(c, a)] });
        for (let h = 1; h < s; h++) u.push({ op: "lineTo", data: [i[h][0] + ge(c, a), i[h][1] + ge(c, a)] });
      }
    }
  return { type: "fillPath", ops: u };
}
function Sr(r, a) {
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
          (c = "hachure"), Tt[c] || (Tt[c] = new u2(i));
      }
    return Tt[c];
  })(a, V9).fillPolygons(r, a);
}
function cp(r) {
  const a = Object.assign({}, r);
  return (a.randomizer = void 0), r.seed && (a.seed = r.seed + 1), a;
}
function Tg(r) {
  return r.randomizer || (r.randomizer = new G9(r.seed || 0)), r.randomizer.next();
}
function Vu(r, a, u, i = 1) {
  return u.roughness * i * (Tg(u) * (a - r) + r);
}
function ge(r, a, u = 1) {
  return Vu(-r, r, a, u);
}
function ra(r, a, u, i, c, s = !1) {
  const h = s ? c.disableMultiStrokeFill : c.disableMultiStroke,
    d = Pf(r, a, u, i, c, !0, !1);
  if (h) return d;
  const v = Pf(r, a, u, i, c, !0, !0);
  return d.concat(v);
}
function Pf(r, a, u, i, c, s, h) {
  const d = Math.pow(r - u, 2) + Math.pow(a - i, 2),
    v = Math.sqrt(d);
  let p = 1;
  p = v < 200 ? 1 : v > 500 ? 0.4 : -0.0016668 * v + 1.233334;
  let g = c.maxRandomnessOffset || 0;
  g * g * 100 > d && (g = v / 10);
  const A = g / 2,
    m = 0.2 + 0.2 * Tg(c);
  let x = (c.bowing * c.maxRandomnessOffset * (i - a)) / 200,
    w = (c.bowing * c.maxRandomnessOffset * (r - u)) / 200;
  (x = ge(x, c, p)), (w = ge(w, c, p));
  const O = [],
    R = () => ge(A, c, p),
    H = () => ge(g, c, p),
    D = c.preserveVertices;
  return (
    h ? O.push({ op: "move", data: [r + (D ? 0 : R()), a + (D ? 0 : R())] }) : O.push({ op: "move", data: [r + (D ? 0 : ge(g, c, p)), a + (D ? 0 : ge(g, c, p))] }),
    h
      ? O.push({ op: "bcurveTo", data: [x + r + (u - r) * m + R(), w + a + (i - a) * m + R(), x + r + 2 * (u - r) * m + R(), w + a + 2 * (i - a) * m + R(), u + (D ? 0 : R()), i + (D ? 0 : R())] })
      : O.push({ op: "bcurveTo", data: [x + r + (u - r) * m + H(), w + a + (i - a) * m + H(), x + r + 2 * (u - r) * m + H(), w + a + 2 * (i - a) * m + H(), u + (D ? 0 : H()), i + (D ? 0 : H())] }),
    O
  );
}
function Hu(r, a, u) {
  if (!r.length) return [];
  const i = [];
  i.push([r[0][0] + ge(a, u), r[0][1] + ge(a, u)]), i.push([r[0][0] + ge(a, u), r[0][1] + ge(a, u)]);
  for (let c = 1; c < r.length; c++) i.push([r[c][0] + ge(a, u), r[c][1] + ge(a, u)]), c === r.length - 1 && i.push([r[c][0] + ge(a, u), r[c][1] + ge(a, u)]);
  return Yu(i, null, u);
}
function Yu(r, a, u) {
  const i = r.length,
    c = [];
  if (i > 3) {
    const s = [],
      h = 1 - u.curveTightness;
    c.push({ op: "move", data: [r[1][0], r[1][1]] });
    for (let d = 1; d + 2 < i; d++) {
      const v = r[d];
      (s[0] = [v[0], v[1]]),
        (s[1] = [v[0] + (h * r[d + 1][0] - h * r[d - 1][0]) / 6, v[1] + (h * r[d + 1][1] - h * r[d - 1][1]) / 6]),
        (s[2] = [r[d + 1][0] + (h * r[d][0] - h * r[d + 2][0]) / 6, r[d + 1][1] + (h * r[d][1] - h * r[d + 2][1]) / 6]),
        (s[3] = [r[d + 1][0], r[d + 1][1]]),
        c.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] });
    }
  } else i === 3 ? (c.push({ op: "move", data: [r[1][0], r[1][1]] }), c.push({ op: "bcurveTo", data: [r[1][0], r[1][1], r[2][0], r[2][1], r[2][0], r[2][1]] })) : i === 2 && c.push(...Pf(r[0][0], r[0][1], r[1][0], r[1][1], u, !0, !0));
  return c;
}
function op(r, a, u, i, c, s, h, d) {
  const v = [],
    p = [];
  if (d.roughness === 0) {
    (r /= 4), p.push([a + i * Math.cos(-r), u + c * Math.sin(-r)]);
    for (let g = 0; g <= 2 * Math.PI; g += r) {
      const A = [a + i * Math.cos(g), u + c * Math.sin(g)];
      v.push(A), p.push(A);
    }
    p.push([a + i * Math.cos(0), u + c * Math.sin(0)]), p.push([a + i * Math.cos(r), u + c * Math.sin(r)]);
  } else {
    const g = ge(0.5, d) - Math.PI / 2;
    p.push([ge(s, d) + a + 0.9 * i * Math.cos(g - r), ge(s, d) + u + 0.9 * c * Math.sin(g - r)]);
    const A = 2 * Math.PI + g - 0.01;
    for (let m = g; m < A; m += r) {
      const x = [ge(s, d) + a + i * Math.cos(m), ge(s, d) + u + c * Math.sin(m)];
      v.push(x), p.push(x);
    }
    p.push([ge(s, d) + a + i * Math.cos(g + 2 * Math.PI + 0.5 * h), ge(s, d) + u + c * Math.sin(g + 2 * Math.PI + 0.5 * h)]),
      p.push([ge(s, d) + a + 0.98 * i * Math.cos(g + h), ge(s, d) + u + 0.98 * c * Math.sin(g + h)]),
      p.push([ge(s, d) + a + 0.9 * i * Math.cos(g + 0.5 * h), ge(s, d) + u + 0.9 * c * Math.sin(g + 0.5 * h)]);
  }
  return [p, v];
}
function sp(r, a, u, i, c, s, h, d, v) {
  const p = s + ge(0.1, v),
    g = [];
  g.push([ge(d, v) + a + 0.9 * i * Math.cos(p - r), ge(d, v) + u + 0.9 * c * Math.sin(p - r)]);
  for (let A = p; A <= h; A += r) g.push([ge(d, v) + a + i * Math.cos(A), ge(d, v) + u + c * Math.sin(A)]);
  return g.push([a + i * Math.cos(h), u + c * Math.sin(h)]), g.push([a + i * Math.cos(h), u + c * Math.sin(h)]), Yu(g, null, v);
}
function X9(r, a, u, i, c, s, h, d) {
  const v = [],
    p = [d.maxRandomnessOffset || 1, (d.maxRandomnessOffset || 1) + 0.3];
  let g = [0, 0];
  const A = d.disableMultiStroke ? 1 : 2,
    m = d.preserveVertices;
  for (let x = 0; x < A; x++)
    x === 0 ? v.push({ op: "move", data: [h[0], h[1]] }) : v.push({ op: "move", data: [h[0] + (m ? 0 : ge(p[0], d)), h[1] + (m ? 0 : ge(p[0], d))] }),
      (g = m ? [c, s] : [c + ge(p[x], d), s + ge(p[x], d)]),
      v.push({ op: "bcurveTo", data: [r + ge(p[x], d), a + ge(p[x], d), u + ge(p[x], d), i + ge(p[x], d), g[0], g[1]] });
  return v;
}
function Wl(r) {
  return [...r];
}
function fp(r, a = 0) {
  const u = r.length;
  if (u < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (u === 3) i.push(Wl(r[0]), Wl(r[1]), Wl(r[2]), Wl(r[2]));
  else {
    const c = [];
    c.push(r[0], r[0]);
    for (let d = 1; d < r.length; d++) c.push(r[d]), d === r.length - 1 && c.push(r[d]);
    const s = [],
      h = 1 - a;
    i.push(Wl(c[0]));
    for (let d = 1; d + 2 < c.length; d++) {
      const v = c[d];
      (s[0] = [v[0], v[1]]),
        (s[1] = [v[0] + (h * c[d + 1][0] - h * c[d - 1][0]) / 6, v[1] + (h * c[d + 1][1] - h * c[d - 1][1]) / 6]),
        (s[2] = [c[d + 1][0] + (h * c[d][0] - h * c[d + 2][0]) / 6, c[d + 1][1] + (h * c[d][1] - h * c[d + 2][1]) / 6]),
        (s[3] = [c[d + 1][0], c[d + 1][1]]),
        i.push(s[1], s[2], s[3]);
    }
  }
  return i;
}
function Gu(r, a) {
  return Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2);
}
function Z9(r, a, u) {
  const i = Gu(a, u);
  if (i === 0) return Gu(r, a);
  let c = ((r[0] - a[0]) * (u[0] - a[0]) + (r[1] - a[1]) * (u[1] - a[1])) / i;
  return (c = Math.max(0, Math.min(1, c))), Gu(r, Oa(a, u, c));
}
function Oa(r, a, u) {
  return [r[0] + (a[0] - r[0]) * u, r[1] + (a[1] - r[1]) * u];
}
function Ff(r, a, u, i) {
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
      return (R *= R), x < O && (x = O), w < R && (w = R), x + w;
    })(r, a) < u
  ) {
    const d = r[a + 0];
    c.length ? ((s = c[c.length - 1]), (h = d), Math.sqrt(Gu(s, h)) > 1 && c.push(d)) : c.push(d), c.push(r[a + 3]);
  } else {
    const v = r[a + 0],
      p = r[a + 1],
      g = r[a + 2],
      A = r[a + 3],
      m = Oa(v, p, 0.5),
      x = Oa(p, g, 0.5),
      w = Oa(g, A, 0.5),
      O = Oa(m, x, 0.5),
      R = Oa(x, w, 0.5),
      H = Oa(O, R, 0.5);
    Ff([v, m, O, H], 0, u, c), Ff([H, R, w, A], 0, u, c);
  }
  var s, h;
  return c;
}
function K9(r, a) {
  return Xu(r, 0, r.length, a);
}
function Xu(r, a, u, i, c) {
  const s = c || [],
    h = r[a],
    d = r[u - 1];
  let v = 0,
    p = 1;
  for (let g = a + 1; g < u - 1; ++g) {
    const A = Z9(r[g], h, d);
    A > v && ((v = A), (p = g));
  }
  return Math.sqrt(v) > i ? (Xu(r, a, p + 1, i, s), Xu(r, p, u, i, s)) : (s.length || s.push(h), s.push(d)), s;
}
function ks(r, a = 0.15, u) {
  const i = [],
    c = (r.length - 1) / 3;
  for (let s = 0; s < c; s++) Ff(r, 3 * s, a, i);
  return u && u > 0 ? Xu(i, 0, i.length, u) : i;
}
const Ut = "none";
class Zu {
  constructor(a) {
    (this.defaultOptions = {
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
      (this.config = a || {}),
      this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(a) {
    return a ? Object.assign({}, this.defaultOptions, a) : this.defaultOptions;
  }
  _d(a, u, i) {
    return { shape: a, sets: u || [], options: i || this.defaultOptions };
  }
  line(a, u, i, c, s) {
    const h = this._o(s);
    return this._d("line", [Cg(a, u, i, c, h)], h);
  }
  rectangle(a, u, i, c, s) {
    const h = this._o(s),
      d = [],
      v = Y9(a, u, i, c, h);
    if (h.fill) {
      const p = [
        [a, u],
        [a + i, u],
        [a + i, u + c],
        [a, u + c],
      ];
      h.fillStyle === "solid" ? d.push(Gs([p], h)) : d.push(Sr([p], h));
    }
    return h.stroke !== Ut && d.push(v), this._d("rectangle", d, h);
  }
  ellipse(a, u, i, c, s) {
    const h = this._o(s),
      d = [],
      v = wg(i, c, h),
      p = Kf(a, u, h, v);
    if (h.fill)
      if (h.fillStyle === "solid") {
        const g = Kf(a, u, h, v).opset;
        (g.type = "fillPath"), d.push(g);
      } else d.push(Sr([p.estimatedPoints], h));
    return h.stroke !== Ut && d.push(p.opset), this._d("ellipse", d, h);
  }
  circle(a, u, i, c) {
    const s = this.ellipse(a, u, i, i, c);
    return (s.shape = "circle"), s;
  }
  linearPath(a, u) {
    const i = this._o(u);
    return this._d("linearPath", [Lu(a, !1, i)], i);
  }
  arc(a, u, i, c, s, h, d = !1, v) {
    const p = this._o(v),
      g = [],
      A = ip(a, u, i, c, s, h, d, !0, p);
    if (d && p.fill)
      if (p.fillStyle === "solid") {
        const m = Object.assign({}, p);
        m.disableMultiStroke = !0;
        const x = ip(a, u, i, c, s, h, !0, !1, m);
        (x.type = "fillPath"), g.push(x);
      } else
        g.push(
          (function (m, x, w, O, R, H, D) {
            const L = m,
              k = x;
            let G = Math.abs(w / 2),
              Y = Math.abs(O / 2);
            (G += ge(0.01 * G, D)), (Y += ge(0.01 * Y, D));
            let J = R,
              ue = H;
            for (; J < 0; ) (J += 2 * Math.PI), (ue += 2 * Math.PI);
            ue - J > 2 * Math.PI && ((J = 0), (ue = 2 * Math.PI));
            const fe = (ue - J) / D.curveStepCount,
              ye = [];
            for (let le = J; le <= ue; le += fe) ye.push([L + G * Math.cos(le), k + Y * Math.sin(le)]);
            return ye.push([L + G * Math.cos(ue), k + Y * Math.sin(ue)]), ye.push([L, k]), Sr([ye], D);
          })(a, u, i, c, s, h, p)
        );
    return p.stroke !== Ut && g.push(A), this._d("arc", g, p);
  }
  curve(a, u) {
    const i = this._o(u),
      c = [],
      s = lp(a, i);
    if (i.fill && i.fill !== Ut)
      if (i.fillStyle === "solid") {
        const h = lp(a, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
        c.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
      } else {
        const h = [],
          d = a;
        if (d.length) {
          const v = typeof d[0][0] == "number" ? [d] : d;
          for (const p of v) p.length < 3 ? h.push(...p) : p.length === 3 ? h.push(...ks(fp([p[0], p[0], p[1], p[2]]), 10, (1 + i.roughness) / 2)) : h.push(...ks(fp(p), 10, (1 + i.roughness) / 2));
        }
        h.length && c.push(Sr([h], i));
      }
    return i.stroke !== Ut && c.push(s), this._d("curve", c, i);
  }
  polygon(a, u) {
    const i = this._o(u),
      c = [],
      s = Lu(a, !0, i);
    return i.fill && (i.fillStyle === "solid" ? c.push(Gs([a], i)) : c.push(Sr([a], i))), i.stroke !== Ut && c.push(s), this._d("polygon", c, i);
  }
  path(a, u) {
    const i = this._o(u),
      c = [];
    if (!a) return this._d("path", c, i);
    a = (a || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = i.fill && i.fill !== "transparent" && i.fill !== Ut,
      h = i.stroke !== Ut,
      d = !!(i.simplification && i.simplification < 1),
      v = (function (g, A, m) {
        const x = Sg(_g(c2(g))),
          w = [];
        let O = [],
          R = [0, 0],
          H = [];
        const D = () => {
            H.length >= 4 && O.push(...ks(H, A)), (H = []);
          },
          L = () => {
            D(), O.length && (w.push(O), (O = []));
          };
        for (const { key: G, data: Y } of x)
          switch (G) {
            case "M":
              L(), (R = [Y[0], Y[1]]), O.push(R);
              break;
            case "L":
              D(), O.push([Y[0], Y[1]]);
              break;
            case "C":
              if (!H.length) {
                const J = O.length ? O[O.length - 1] : R;
                H.push([J[0], J[1]]);
              }
              H.push([Y[0], Y[1]]), H.push([Y[2], Y[3]]), H.push([Y[4], Y[5]]);
              break;
            case "Z":
              D(), O.push([R[0], R[1]]);
          }
        if ((L(), !m)) return w;
        const k = [];
        for (const G of w) {
          const Y = K9(G, m);
          Y.length && k.push(Y);
        }
        return k;
      })(a, 1, d ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2),
      p = up(a, i);
    if (s)
      if (i.fillStyle === "solid")
        if (v.length === 1) {
          const g = up(a, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
          c.push({ type: "fillPath", ops: this._mergedShape(g.ops) });
        } else c.push(Gs(v, i));
      else c.push(Sr(v, i));
    return (
      h &&
        (d
          ? v.forEach(g => {
              c.push(Lu(g, !1, i));
            })
          : c.push(p)),
      this._d("path", c, i)
    );
  }
  opsToPath(a, u) {
    let i = "";
    for (const c of a.ops) {
      const s = typeof u == "number" && u >= 0 ? c.data.map(h => +h.toFixed(u)) : c.data;
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
  toPaths(a) {
    const u = a.sets || [],
      i = a.options || this.defaultOptions,
      c = [];
    for (const s of u) {
      let h = null;
      switch (s.type) {
        case "path":
          h = { d: this.opsToPath(s), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Ut };
          break;
        case "fillPath":
          h = { d: this.opsToPath(s), stroke: Ut, strokeWidth: 0, fill: i.fill || Ut };
          break;
        case "fillSketch":
          h = this.fillSketch(s, i);
      }
      h && c.push(h);
    }
    return c;
  }
  fillSketch(a, u) {
    let i = u.fillWeight;
    return i < 0 && (i = u.strokeWidth / 2), { d: this.opsToPath(a), stroke: u.fill || Ut, strokeWidth: i, fill: Ut };
  }
  _mergedShape(a) {
    return a.filter((u, i) => i === 0 || u.op !== "move");
  }
}
class P9 {
  constructor(a, u) {
    (this.canvas = a), (this.ctx = this.canvas.getContext("2d")), (this.gen = new Zu(u));
  }
  draw(a) {
    const u = a.sets || [],
      i = a.options || this.getDefaultOptions(),
      c = this.ctx,
      s = a.options.fixedDecimalPlaceDigits;
    for (const h of u)
      switch (h.type) {
        case "path":
          c.save(),
            (c.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke),
            (c.lineWidth = i.strokeWidth),
            i.strokeLineDash && c.setLineDash(i.strokeLineDash),
            i.strokeLineDashOffset && (c.lineDashOffset = i.strokeLineDashOffset),
            this._drawToContext(c, h, s),
            c.restore();
          break;
        case "fillPath": {
          c.save(), (c.fillStyle = i.fill || "");
          const d = a.shape === "curve" || a.shape === "polygon" || a.shape === "path" ? "evenodd" : "nonzero";
          this._drawToContext(c, h, s, d), c.restore();
          break;
        }
        case "fillSketch":
          this.fillSketch(c, h, i);
      }
  }
  fillSketch(a, u, i) {
    let c = i.fillWeight;
    c < 0 && (c = i.strokeWidth / 2),
      a.save(),
      i.fillLineDash && a.setLineDash(i.fillLineDash),
      i.fillLineDashOffset && (a.lineDashOffset = i.fillLineDashOffset),
      (a.strokeStyle = i.fill || ""),
      (a.lineWidth = c),
      this._drawToContext(a, u, i.fixedDecimalPlaceDigits),
      a.restore();
  }
  _drawToContext(a, u, i, c = "nonzero") {
    a.beginPath();
    for (const s of u.ops) {
      const h = typeof i == "number" && i >= 0 ? s.data.map(d => +d.toFixed(i)) : s.data;
      switch (s.op) {
        case "move":
          a.moveTo(h[0], h[1]);
          break;
        case "bcurveTo":
          a.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
          break;
        case "lineTo":
          a.lineTo(h[0], h[1]);
      }
    }
    u.type === "fillPath" ? a.fill(c) : a.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(a, u, i, c, s) {
    const h = this.gen.line(a, u, i, c, s);
    return this.draw(h), h;
  }
  rectangle(a, u, i, c, s) {
    const h = this.gen.rectangle(a, u, i, c, s);
    return this.draw(h), h;
  }
  ellipse(a, u, i, c, s) {
    const h = this.gen.ellipse(a, u, i, c, s);
    return this.draw(h), h;
  }
  circle(a, u, i, c) {
    const s = this.gen.circle(a, u, i, c);
    return this.draw(s), s;
  }
  linearPath(a, u) {
    const i = this.gen.linearPath(a, u);
    return this.draw(i), i;
  }
  polygon(a, u) {
    const i = this.gen.polygon(a, u);
    return this.draw(i), i;
  }
  arc(a, u, i, c, s, h, d = !1, v) {
    const p = this.gen.arc(a, u, i, c, s, h, d, v);
    return this.draw(p), p;
  }
  curve(a, u) {
    const i = this.gen.curve(a, u);
    return this.draw(i), i;
  }
  path(a, u) {
    const i = this.gen.path(a, u);
    return this.draw(i), i;
  }
}
const ju = "http://www.w3.org/2000/svg";
class F9 {
  constructor(a, u) {
    (this.svg = a), (this.gen = new Zu(u));
  }
  draw(a) {
    const u = a.sets || [],
      i = a.options || this.getDefaultOptions(),
      c = this.svg.ownerDocument || window.document,
      s = c.createElementNS(ju, "g"),
      h = a.options.fixedDecimalPlaceDigits;
    for (const d of u) {
      let v = null;
      switch (d.type) {
        case "path":
          (v = c.createElementNS(ju, "path")),
            v.setAttribute("d", this.opsToPath(d, h)),
            v.setAttribute("stroke", i.stroke),
            v.setAttribute("stroke-width", i.strokeWidth + ""),
            v.setAttribute("fill", "none"),
            i.strokeLineDash && v.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()),
            i.strokeLineDashOffset && v.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          (v = c.createElementNS(ju, "path")),
            v.setAttribute("d", this.opsToPath(d, h)),
            v.setAttribute("stroke", "none"),
            v.setAttribute("stroke-width", "0"),
            v.setAttribute("fill", i.fill || ""),
            (a.shape !== "curve" && a.shape !== "polygon") || v.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          v = this.fillSketch(c, d, i);
      }
      v && s.appendChild(v);
    }
    return s;
  }
  fillSketch(a, u, i) {
    let c = i.fillWeight;
    c < 0 && (c = i.strokeWidth / 2);
    const s = a.createElementNS(ju, "path");
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
  opsToPath(a, u) {
    return this.gen.opsToPath(a, u);
  }
  line(a, u, i, c, s) {
    const h = this.gen.line(a, u, i, c, s);
    return this.draw(h);
  }
  rectangle(a, u, i, c, s) {
    const h = this.gen.rectangle(a, u, i, c, s);
    return this.draw(h);
  }
  ellipse(a, u, i, c, s) {
    const h = this.gen.ellipse(a, u, i, c, s);
    return this.draw(h);
  }
  circle(a, u, i, c) {
    const s = this.gen.circle(a, u, i, c);
    return this.draw(s);
  }
  linearPath(a, u) {
    const i = this.gen.linearPath(a, u);
    return this.draw(i);
  }
  polygon(a, u) {
    const i = this.gen.polygon(a, u);
    return this.draw(i);
  }
  arc(a, u, i, c, s, h, d = !1, v) {
    const p = this.gen.arc(a, u, i, c, s, h, d, v);
    return this.draw(p);
  }
  curve(a, u) {
    const i = this.gen.curve(a, u);
    return this.draw(i);
  }
  path(a, u) {
    const i = this.gen.path(a, u);
    return this.draw(i);
  }
}
var Og = { canvas: (r, a) => new P9(r, a), svg: (r, a) => new F9(r, a), generator: r => new Zu(r), newSeed: () => Zu.newSeed() };
function hp(r, a, u, i = c => c) {
  return r * i(0.5 - a * (0.5 - u));
}
function $9(r) {
  return [-r[0], -r[1]];
}
function ln(r, a) {
  return [r[0] + a[0], r[1] + a[1]];
}
function Wt(r, a) {
  return [r[0] - a[0], r[1] - a[1]];
}
function rn(r, a) {
  return [r[0] * a, r[1] * a];
}
function J9(r, a) {
  return [r[0] / a, r[1] / a];
}
function ei(r) {
  return [r[1], -r[0]];
}
function dp(r, a) {
  return r[0] * a[0] + r[1] * a[1];
}
function I9(r, a) {
  return r[0] === a[0] && r[1] === a[1];
}
function W9(r) {
  return Math.hypot(r[0], r[1]);
}
function ey(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function pp(r, a) {
  return ey(Wt(r, a));
}
function Mg(r) {
  return J9(r, W9(r));
}
function ty(r, a) {
  return Math.hypot(r[1] - a[1], r[0] - a[0]);
}
function ti(r, a, u) {
  let i = Math.sin(u),
    c = Math.cos(u),
    s = r[0] - a[0],
    h = r[1] - a[1],
    d = s * c - h * i,
    v = s * i + h * c;
  return [d + a[0], v + a[1]];
}
function $f(r, a, u) {
  return ln(r, rn(Wt(a, r), u));
}
function vp(r, a, u) {
  return ln(r, rn(a, u));
}
var { min: Er, PI: ny } = Math,
  gp = 0.275,
  ni = ny + 1e-4;
function ay(r, a = {}) {
  let { size: u = 16, smoothing: i = 0.5, thinning: c = 0.5, simulatePressure: s = !0, easing: h = K => K, start: d = {}, end: v = {}, last: p = !1 } = a,
    { cap: g = !0, easing: A = K => K * (2 - K) } = d,
    { cap: m = !0, easing: x = K => --K * K * K + 1 } = v;
  if (r.length === 0 || u <= 0) return [];
  let w = r[r.length - 1].runningLength,
    O = d.taper === !1 ? 0 : d.taper === !0 ? Math.max(u, w) : d.taper,
    R = v.taper === !1 ? 0 : v.taper === !0 ? Math.max(u, w) : v.taper,
    H = Math.pow(u * i, 2),
    D = [],
    L = [],
    k = r.slice(0, 10).reduce((K, re) => {
      let ce = re.pressure;
      if (s) {
        let C = Er(1, re.distance / u),
          P = Er(1, 1 - C);
        ce = Er(1, K + (P - K) * (C * gp));
      }
      return (K + ce) / 2;
    }, r[0].pressure),
    G = hp(u, c, r[r.length - 1].pressure, h),
    Y,
    J = r[0].vector,
    ue = r[0].point,
    fe = ue,
    ye = ue,
    le = fe,
    _e = !1;
  for (let K = 0; K < r.length; K++) {
    let { pressure: re } = r[K],
      { point: ce, vector: C, distance: P, runningLength: W } = r[K];
    if (K < r.length - 1 && w - W < 3) continue;
    if (c) {
      if (s) {
        let Ke = Er(1, P / u),
          Gt = Er(1, 1 - Ke);
        re = Er(1, k + (Gt - k) * (Ke * gp));
      }
      G = hp(u, c, re, h);
    } else G = u / 2;
    Y === void 0 && (Y = G);
    let te = W < O ? A(W / O) : 1,
      oe = w - W < R ? x((w - W) / R) : 1;
    G = Math.max(0.01, G * Math.min(te, oe));
    let ve = (K < r.length - 1 ? r[K + 1] : r[K]).vector,
      he = K < r.length - 1 ? dp(C, ve) : 1,
      nt = dp(C, J) < 0 && !_e,
      De = he !== null && he < 0;
    if (nt || De) {
      let Ke = rn(ei(J), G);
      for (let Gt = 1 / 13, kt = 0; kt <= 1; kt += Gt) (ye = ti(Wt(ce, Ke), ce, ni * kt)), D.push(ye), (le = ti(ln(ce, Ke), ce, ni * -kt)), L.push(le);
      (ue = ye), (fe = le), De && (_e = !0);
      continue;
    }
    if (((_e = !1), K === r.length - 1)) {
      let Ke = rn(ei(C), G);
      D.push(Wt(ce, Ke)), L.push(ln(ce, Ke));
      continue;
    }
    let Xe = rn(ei($f(ve, C, he)), G);
    (ye = Wt(ce, Xe)), (K <= 1 || pp(ue, ye) > H) && (D.push(ye), (ue = ye)), (le = ln(ce, Xe)), (K <= 1 || pp(fe, le) > H) && (L.push(le), (fe = le)), (k = re), (J = C);
  }
  let me = r[0].point.slice(0, 2),
    Ae = r.length > 1 ? r[r.length - 1].point.slice(0, 2) : ln(r[0].point, [1, 1]),
    Se = [],
    U = [];
  if (r.length === 1) {
    if (!(O || R) || p) {
      let K = vp(me, Mg(ei(Wt(me, Ae))), -(Y || G)),
        re = [];
      for (let ce = 1 / 13, C = ce; C <= 1; C += ce) re.push(ti(K, me, ni * 2 * C));
      return re;
    }
  } else {
    if (!(O || (R && r.length === 1)))
      if (g)
        for (let re = 1 / 13, ce = re; ce <= 1; ce += re) {
          let C = ti(L[0], me, ni * ce);
          Se.push(C);
        }
      else {
        let re = Wt(D[0], L[0]),
          ce = rn(re, 0.5),
          C = rn(re, 0.51);
        Se.push(Wt(me, ce), Wt(me, C), ln(me, C), ln(me, ce));
      }
    let K = ei($9(r[r.length - 1].vector));
    if (R || (O && r.length === 1)) U.push(Ae);
    else if (m) {
      let re = vp(Ae, K, G);
      for (let ce = 1 / 29, C = ce; C < 1; C += ce) U.push(ti(re, Ae, ni * 3 * C));
    } else U.push(ln(Ae, rn(K, G)), ln(Ae, rn(K, G * 0.99)), Wt(Ae, rn(K, G * 0.99)), Wt(Ae, rn(K, G)));
  }
  return D.concat(U, L.reverse(), Se);
}
function ry(r, a = {}) {
  var u;
  let { streamline: i = 0.5, size: c = 16, last: s = !1 } = a;
  if (r.length === 0) return [];
  let h = 0.15 + (1 - i) * 0.85,
    d = Array.isArray(r[0]) ? r : r.map(({ x, y: w, pressure: O = 0.5 }) => [x, w, O]);
  if (d.length === 2) {
    let x = d[1];
    d = d.slice(0, -1);
    for (let w = 1; w < 5; w++) d.push($f(d[0], x, w / 4));
  }
  d.length === 1 && (d = [...d, [...ln(d[0], [1, 1]), ...d[0].slice(2)]]);
  let v = [{ point: [d[0][0], d[0][1]], pressure: d[0][2] >= 0 ? d[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }],
    p = !1,
    g = 0,
    A = v[0],
    m = d.length - 1;
  for (let x = 1; x < d.length; x++) {
    let w = s && x === m ? d[x].slice(0, 2) : $f(A.point, d[x], h);
    if (I9(A.point, w)) continue;
    let O = ty(w, A.point);
    if (((g += O), x < m && !p)) {
      if (g < c) continue;
      p = !0;
    }
    (A = { point: w, pressure: d[x][2] >= 0 ? d[x][2] : 0.5, vector: Mg(Wt(A.point, w)), distance: O, runningLength: g }), v.push(A);
  }
  return (v[0].vector = ((u = v[1]) == null ? void 0 : u.vector) || [0, 0]), v;
}
function ly(r, a = {}) {
  return ay(ry(r, a), a);
}
var Ot = {},
  Cr = {},
  Vs,
  bp;
function Rg() {
  if (bp) return Vs;
  bp = 1;
  var r = typeof qu == "object" && qu && qu.Object === Object && qu;
  return (Vs = r), Vs;
}
var Ys, yp;
function vn() {
  if (yp) return Ys;
  yp = 1;
  var r = Rg(),
    a = typeof self == "object" && self && self.Object === Object && self,
    u = r || a || Function("return this")();
  return (Ys = u), Ys;
}
var Xs, mp;
function vi() {
  if (mp) return Xs;
  mp = 1;
  var r = vn(),
    a = r.Symbol;
  return (Xs = a), Xs;
}
var Zs, Ap;
function iy() {
  if (Ap) return Zs;
  Ap = 1;
  var r = vi(),
    a = Object.prototype,
    u = a.hasOwnProperty,
    i = a.toString,
    c = r ? r.toStringTag : void 0;
  function s(h) {
    var d = u.call(h, c),
      v = h[c];
    try {
      h[c] = void 0;
      var p = !0;
    } catch {}
    var g = i.call(h);
    return p && (d ? (h[c] = v) : delete h[c]), g;
  }
  return (Zs = s), Zs;
}
var Ks, xp;
function uy() {
  if (xp) return Ks;
  xp = 1;
  var r = Object.prototype,
    a = r.toString;
  function u(i) {
    return a.call(i);
  }
  return (Ks = u), Ks;
}
var Ps, _p;
function Ra() {
  if (_p) return Ps;
  _p = 1;
  var r = vi(),
    a = iy(),
    u = uy(),
    i = "[object Null]",
    c = "[object Undefined]",
    s = r ? r.toStringTag : void 0;
  function h(d) {
    return d == null ? (d === void 0 ? c : i) : s && s in Object(d) ? a(d) : u(d);
  }
  return (Ps = h), Ps;
}
var Fs, Sp;
function un() {
  if (Sp) return Fs;
  Sp = 1;
  var r = Array.isArray;
  return (Fs = r), Fs;
}
var $s, Ep;
function zn() {
  if (Ep) return $s;
  Ep = 1;
  function r(a) {
    return a != null && typeof a == "object";
  }
  return ($s = r), $s;
}
var Js, Cp;
function cy() {
  if (Cp) return Js;
  Cp = 1;
  var r = Ra(),
    a = un(),
    u = zn(),
    i = "[object String]";
  function c(s) {
    return typeof s == "string" || (!a(s) && u(s) && r(s) == i);
  }
  return (Js = c), Js;
}
var Is, wp;
function oy() {
  if (wp) return Is;
  wp = 1;
  function r(a) {
    return function (u, i, c) {
      for (var s = -1, h = Object(u), d = c(u), v = d.length; v--; ) {
        var p = d[a ? v : ++s];
        if (i(h[p], p, h) === !1) break;
      }
      return u;
    };
  }
  return (Is = r), Is;
}
var Ws, Tp;
function sy() {
  if (Tp) return Ws;
  Tp = 1;
  var r = oy(),
    a = r();
  return (Ws = a), Ws;
}
var e1, Op;
function fy() {
  if (Op) return e1;
  Op = 1;
  function r(a, u) {
    for (var i = -1, c = Array(a); ++i < a; ) c[i] = u(i);
    return c;
  }
  return (e1 = r), e1;
}
var t1, Mp;
function hy() {
  if (Mp) return t1;
  Mp = 1;
  var r = Ra(),
    a = zn(),
    u = "[object Arguments]";
  function i(c) {
    return a(c) && r(c) == u;
  }
  return (t1 = i), t1;
}
var n1, Rp;
function zg() {
  if (Rp) return n1;
  Rp = 1;
  var r = hy(),
    a = zn(),
    u = Object.prototype,
    i = u.hasOwnProperty,
    c = u.propertyIsEnumerable,
    s = r(
      (function () {
        return arguments;
      })()
    )
      ? r
      : function (h) {
          return a(h) && i.call(h, "callee") && !c.call(h, "callee");
        };
  return (n1 = s), n1;
}
var ii = { exports: {} },
  a1,
  zp;
function dy() {
  if (zp) return a1;
  zp = 1;
  function r() {
    return !1;
  }
  return (a1 = r), a1;
}
ii.exports;
var qp;
function o2() {
  return (
    qp ||
      ((qp = 1),
      (function (r, a) {
        var u = vn(),
          i = dy(),
          c = a && !a.nodeType && a,
          s = c && !0 && r && !r.nodeType && r,
          h = s && s.exports === c,
          d = h ? u.Buffer : void 0,
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
    a = /^(?:0|[1-9]\d*)$/;
  function u(i, c) {
    var s = typeof i;
    return (c = c ?? r), !!c && (s == "number" || (s != "symbol" && a.test(i))) && i > -1 && i % 1 == 0 && i < c;
  }
  return (r1 = u), r1;
}
var l1, Hp;
function s2() {
  if (Hp) return l1;
  Hp = 1;
  var r = 9007199254740991;
  function a(u) {
    return typeof u == "number" && u > -1 && u % 1 == 0 && u <= r;
  }
  return (l1 = a), l1;
}
var i1, jp;
function py() {
  if (jp) return i1;
  jp = 1;
  var r = Ra(),
    a = s2(),
    u = zn(),
    i = "[object Arguments]",
    c = "[object Array]",
    s = "[object Boolean]",
    h = "[object Date]",
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
  (le[D] = le[L] = le[k] = le[G] = le[Y] = le[J] = le[ue] = le[fe] = le[ye] = !0), (le[i] = le[c] = le[R] = le[s] = le[H] = le[h] = le[d] = le[v] = le[p] = le[g] = le[A] = le[m] = le[x] = le[w] = le[O] = !1);
  function _e(me) {
    return u(me) && a(me.length) && !!le[r(me)];
  }
  return (i1 = _e), i1;
}
var u1, Bp;
function f2() {
  if (Bp) return u1;
  Bp = 1;
  function r(a) {
    return function (u) {
      return a(u);
    };
  }
  return (u1 = r), u1;
}
var ui = { exports: {} };
ui.exports;
var Np;
function h2() {
  return (
    Np ||
      ((Np = 1),
      (function (r, a) {
        var u = Rg(),
          i = a && !a.nodeType && a,
          c = i && !0 && r && !r.nodeType && r,
          s = c && c.exports === i,
          h = s && u.process,
          d = (function () {
            try {
              var v = c && c.require && c.require("util").types;
              return v || (h && h.binding && h.binding("util"));
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
    a = f2(),
    u = h2(),
    i = u && u.isTypedArray,
    c = i ? a(i) : r;
  return (c1 = c), c1;
}
var o1, Up;
function Hg() {
  if (Up) return o1;
  Up = 1;
  var r = fy(),
    a = zg(),
    u = un(),
    i = o2(),
    c = qg(),
    s = Dg(),
    h = Object.prototype,
    d = h.hasOwnProperty;
  function v(p, g) {
    var A = u(p),
      m = !A && a(p),
      x = !A && !m && i(p),
      w = !A && !m && !x && s(p),
      O = A || m || x || w,
      R = O ? r(p.length, String) : [],
      H = R.length;
    for (var D in p) (g || d.call(p, D)) && !(O && (D == "length" || (x && (D == "offset" || D == "parent")) || (w && (D == "buffer" || D == "byteLength" || D == "byteOffset")) || c(D, H))) && R.push(D);
    return R;
  }
  return (o1 = v), o1;
}
var s1, Lp;
function d2() {
  if (Lp) return s1;
  Lp = 1;
  var r = Object.prototype;
  function a(u) {
    var i = u && u.constructor,
      c = (typeof i == "function" && i.prototype) || r;
    return u === c;
  }
  return (s1 = a), s1;
}
var f1, Gp;
function jg() {
  if (Gp) return f1;
  Gp = 1;
  function r(a, u) {
    return function (i) {
      return a(u(i));
    };
  }
  return (f1 = r), f1;
}
var h1, kp;
function vy() {
  if (kp) return h1;
  kp = 1;
  var r = jg(),
    a = r(Object.keys, Object);
  return (h1 = a), h1;
}
var d1, Vp;
function gy() {
  if (Vp) return d1;
  Vp = 1;
  var r = d2(),
    a = vy(),
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s) {
    if (!r(s)) return a(s);
    var h = [];
    for (var d in Object(s)) i.call(s, d) && d != "constructor" && h.push(d);
    return h;
  }
  return (d1 = c), d1;
}
var p1, Yp;
function $r() {
  if (Yp) return p1;
  Yp = 1;
  function r(a) {
    var u = typeof a;
    return a != null && (u == "object" || u == "function");
  }
  return (p1 = r), p1;
}
var v1, Xp;
function Bg() {
  if (Xp) return v1;
  Xp = 1;
  var r = Ra(),
    a = $r(),
    u = "[object AsyncFunction]",
    i = "[object Function]",
    c = "[object GeneratorFunction]",
    s = "[object Proxy]";
  function h(d) {
    if (!a(d)) return !1;
    var v = r(d);
    return v == i || v == c || v == u || v == s;
  }
  return (v1 = h), v1;
}
var g1, Zp;
function nc() {
  if (Zp) return g1;
  Zp = 1;
  var r = Bg(),
    a = s2();
  function u(i) {
    return i != null && a(i.length) && !r(i);
  }
  return (g1 = u), g1;
}
var b1, Kp;
function gi() {
  if (Kp) return b1;
  Kp = 1;
  var r = Hg(),
    a = gy(),
    u = nc();
  function i(c) {
    return u(c) ? r(c) : a(c);
  }
  return (b1 = i), b1;
}
var y1, Pp;
function Ng() {
  if (Pp) return y1;
  Pp = 1;
  var r = sy(),
    a = gi();
  function u(i, c) {
    return i && r(i, c, a);
  }
  return (y1 = u), y1;
}
var m1, Fp;
function Qg() {
  if (Fp) return m1;
  Fp = 1;
  function r(a) {
    return a;
  }
  return (m1 = r), m1;
}
var A1, $p;
function by() {
  if ($p) return A1;
  $p = 1;
  var r = Qg();
  function a(u) {
    return typeof u == "function" ? u : r;
  }
  return (A1 = a), A1;
}
var x1, Jp;
function p2() {
  if (Jp) return x1;
  Jp = 1;
  var r = Ng(),
    a = by();
  function u(i, c) {
    return i && r(i, a(c));
  }
  return (x1 = u), x1;
}
var _1, Ip;
function v2() {
  if (Ip) return _1;
  Ip = 1;
  var r = jg(),
    a = r(Object.getPrototypeOf, Object);
  return (_1 = a), _1;
}
var S1, Wp;
function yy() {
  if (Wp) return S1;
  Wp = 1;
  var r = Ra(),
    a = v2(),
    u = zn(),
    i = "[object Object]",
    c = Function.prototype,
    s = Object.prototype,
    h = c.toString,
    d = s.hasOwnProperty,
    v = h.call(Object);
  function p(g) {
    if (!u(g) || r(g) != i) return !1;
    var A = a(g);
    if (A === null) return !0;
    var m = d.call(A, "constructor") && A.constructor;
    return typeof m == "function" && m instanceof m && h.call(m) == v;
  }
  return (S1 = p), S1;
}
var E1, e5;
function Ug() {
  if (e5) return E1;
  e5 = 1;
  function r(a, u) {
    for (var i = -1, c = a == null ? 0 : a.length, s = Array(c); ++i < c; ) s[i] = u(a[i], i, a);
    return s;
  }
  return (E1 = r), E1;
}
var C1, t5;
function my() {
  if (t5) return C1;
  t5 = 1;
  function r() {
    (this.__data__ = []), (this.size = 0);
  }
  return (C1 = r), C1;
}
var w1, n5;
function g2() {
  if (n5) return w1;
  n5 = 1;
  function r(a, u) {
    return a === u || (a !== a && u !== u);
  }
  return (w1 = r), w1;
}
var T1, a5;
function ac() {
  if (a5) return T1;
  a5 = 1;
  var r = g2();
  function a(u, i) {
    for (var c = u.length; c--; ) if (r(u[c][0], i)) return c;
    return -1;
  }
  return (T1 = a), T1;
}
var O1, r5;
function Ay() {
  if (r5) return O1;
  r5 = 1;
  var r = ac(),
    a = Array.prototype,
    u = a.splice;
  function i(c) {
    var s = this.__data__,
      h = r(s, c);
    if (h < 0) return !1;
    var d = s.length - 1;
    return h == d ? s.pop() : u.call(s, h, 1), --this.size, !0;
  }
  return (O1 = i), O1;
}
var M1, l5;
function xy() {
  if (l5) return M1;
  l5 = 1;
  var r = ac();
  function a(u) {
    var i = this.__data__,
      c = r(i, u);
    return c < 0 ? void 0 : i[c][1];
  }
  return (M1 = a), M1;
}
var R1, i5;
function _y() {
  if (i5) return R1;
  i5 = 1;
  var r = ac();
  function a(u) {
    return r(this.__data__, u) > -1;
  }
  return (R1 = a), R1;
}
var z1, u5;
function Sy() {
  if (u5) return z1;
  u5 = 1;
  var r = ac();
  function a(u, i) {
    var c = this.__data__,
      s = r(c, u);
    return s < 0 ? (++this.size, c.push([u, i])) : (c[s][1] = i), this;
  }
  return (z1 = a), z1;
}
var q1, c5;
function rc() {
  if (c5) return q1;
  c5 = 1;
  var r = my(),
    a = Ay(),
    u = xy(),
    i = _y(),
    c = Sy();
  function s(h) {
    var d = -1,
      v = h == null ? 0 : h.length;
    for (this.clear(); ++d < v; ) {
      var p = h[d];
      this.set(p[0], p[1]);
    }
  }
  return (s.prototype.clear = r), (s.prototype.delete = a), (s.prototype.get = u), (s.prototype.has = i), (s.prototype.set = c), (q1 = s), q1;
}
var D1, o5;
function Ey() {
  if (o5) return D1;
  o5 = 1;
  var r = rc();
  function a() {
    (this.__data__ = new r()), (this.size = 0);
  }
  return (D1 = a), D1;
}
var H1, s5;
function Cy() {
  if (s5) return H1;
  s5 = 1;
  function r(a) {
    var u = this.__data__,
      i = u.delete(a);
    return (this.size = u.size), i;
  }
  return (H1 = r), H1;
}
var j1, f5;
function wy() {
  if (f5) return j1;
  f5 = 1;
  function r(a) {
    return this.__data__.get(a);
  }
  return (j1 = r), j1;
}
var B1, h5;
function Ty() {
  if (h5) return B1;
  h5 = 1;
  function r(a) {
    return this.__data__.has(a);
  }
  return (B1 = r), B1;
}
var N1, d5;
function Oy() {
  if (d5) return N1;
  d5 = 1;
  var r = vn(),
    a = r["__core-js_shared__"];
  return (N1 = a), N1;
}
var Q1, p5;
function My() {
  if (p5) return Q1;
  p5 = 1;
  var r = Oy(),
    a = (function () {
      var i = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
      return i ? "Symbol(src)_1." + i : "";
    })();
  function u(i) {
    return !!a && a in i;
  }
  return (Q1 = u), Q1;
}
var U1, v5;
function Lg() {
  if (v5) return U1;
  v5 = 1;
  var r = Function.prototype,
    a = r.toString;
  function u(i) {
    if (i != null) {
      try {
        return a.call(i);
      } catch {}
      try {
        return i + "";
      } catch {}
    }
    return "";
  }
  return (U1 = u), U1;
}
var L1, g5;
function Ry() {
  if (g5) return L1;
  g5 = 1;
  var r = Bg(),
    a = My(),
    u = $r(),
    i = Lg(),
    c = /[\\^$.*+?()[\]{}|]/g,
    s = /^\[object .+?Constructor\]$/,
    h = Function.prototype,
    d = Object.prototype,
    v = h.toString,
    p = d.hasOwnProperty,
    g = RegExp(
      "^" +
        v
          .call(p)
          .replace(c, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  function A(m) {
    if (!u(m) || a(m)) return !1;
    var x = r(m) ? g : s;
    return x.test(i(m));
  }
  return (L1 = A), L1;
}
var G1, b5;
function zy() {
  if (b5) return G1;
  b5 = 1;
  function r(a, u) {
    return a?.[u];
  }
  return (G1 = r), G1;
}
var k1, y5;
function za() {
  if (y5) return k1;
  y5 = 1;
  var r = Ry(),
    a = zy();
  function u(i, c) {
    var s = a(i, c);
    return r(s) ? s : void 0;
  }
  return (k1 = u), k1;
}
var V1, m5;
function b2() {
  if (m5) return V1;
  m5 = 1;
  var r = za(),
    a = vn(),
    u = r(a, "Map");
  return (V1 = u), V1;
}
var Y1, A5;
function lc() {
  if (A5) return Y1;
  A5 = 1;
  var r = za(),
    a = r(Object, "create");
  return (Y1 = a), Y1;
}
var X1, x5;
function qy() {
  if (x5) return X1;
  x5 = 1;
  var r = lc();
  function a() {
    (this.__data__ = r ? r(null) : {}), (this.size = 0);
  }
  return (X1 = a), X1;
}
var Z1, _5;
function Dy() {
  if (_5) return Z1;
  _5 = 1;
  function r(a) {
    var u = this.has(a) && delete this.__data__[a];
    return (this.size -= u ? 1 : 0), u;
  }
  return (Z1 = r), Z1;
}
var K1, S5;
function Hy() {
  if (S5) return K1;
  S5 = 1;
  var r = lc(),
    a = "__lodash_hash_undefined__",
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s) {
    var h = this.__data__;
    if (r) {
      var d = h[s];
      return d === a ? void 0 : d;
    }
    return i.call(h, s) ? h[s] : void 0;
  }
  return (K1 = c), K1;
}
var P1, E5;
function jy() {
  if (E5) return P1;
  E5 = 1;
  var r = lc(),
    a = Object.prototype,
    u = a.hasOwnProperty;
  function i(c) {
    var s = this.__data__;
    return r ? s[c] !== void 0 : u.call(s, c);
  }
  return (P1 = i), P1;
}
var F1, C5;
function By() {
  if (C5) return F1;
  C5 = 1;
  var r = lc(),
    a = "__lodash_hash_undefined__";
  function u(i, c) {
    var s = this.__data__;
    return (this.size += this.has(i) ? 0 : 1), (s[i] = r && c === void 0 ? a : c), this;
  }
  return (F1 = u), F1;
}
var $1, w5;
function Ny() {
  if (w5) return $1;
  w5 = 1;
  var r = qy(),
    a = Dy(),
    u = Hy(),
    i = jy(),
    c = By();
  function s(h) {
    var d = -1,
      v = h == null ? 0 : h.length;
    for (this.clear(); ++d < v; ) {
      var p = h[d];
      this.set(p[0], p[1]);
    }
  }
  return (s.prototype.clear = r), (s.prototype.delete = a), (s.prototype.get = u), (s.prototype.has = i), (s.prototype.set = c), ($1 = s), $1;
}
var J1, T5;
function Qy() {
  if (T5) return J1;
  T5 = 1;
  var r = Ny(),
    a = rc(),
    u = b2();
  function i() {
    (this.size = 0), (this.__data__ = { hash: new r(), map: new (u || a)(), string: new r() });
  }
  return (J1 = i), J1;
}
var I1, O5;
function Uy() {
  if (O5) return I1;
  O5 = 1;
  function r(a) {
    var u = typeof a;
    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? a !== "__proto__" : a === null;
  }
  return (I1 = r), I1;
}
var W1, M5;
function ic() {
  if (M5) return W1;
  M5 = 1;
  var r = Uy();
  function a(u, i) {
    var c = u.__data__;
    return r(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
  }
  return (W1 = a), W1;
}
var e0, R5;
function Ly() {
  if (R5) return e0;
  R5 = 1;
  var r = ic();
  function a(u) {
    var i = r(this, u).delete(u);
    return (this.size -= i ? 1 : 0), i;
  }
  return (e0 = a), e0;
}
var t0, z5;
function Gy() {
  if (z5) return t0;
  z5 = 1;
  var r = ic();
  function a(u) {
    return r(this, u).get(u);
  }
  return (t0 = a), t0;
}
var n0, q5;
function ky() {
  if (q5) return n0;
  q5 = 1;
  var r = ic();
  function a(u) {
    return r(this, u).has(u);
  }
  return (n0 = a), n0;
}
var a0, D5;
function Vy() {
  if (D5) return a0;
  D5 = 1;
  var r = ic();
  function a(u, i) {
    var c = r(this, u),
      s = c.size;
    return c.set(u, i), (this.size += c.size == s ? 0 : 1), this;
  }
  return (a0 = a), a0;
}
var r0, H5;
function y2() {
  if (H5) return r0;
  H5 = 1;
  var r = Qy(),
    a = Ly(),
    u = Gy(),
    i = ky(),
    c = Vy();
  function s(h) {
    var d = -1,
      v = h == null ? 0 : h.length;
    for (this.clear(); ++d < v; ) {
      var p = h[d];
      this.set(p[0], p[1]);
    }
  }
  return (s.prototype.clear = r), (s.prototype.delete = a), (s.prototype.get = u), (s.prototype.has = i), (s.prototype.set = c), (r0 = s), r0;
}
var l0, j5;
function Yy() {
  if (j5) return l0;
  j5 = 1;
  var r = rc(),
    a = b2(),
    u = y2(),
    i = 200;
  function c(s, h) {
    var d = this.__data__;
    if (d instanceof r) {
      var v = d.__data__;
      if (!a || v.length < i - 1) return v.push([s, h]), (this.size = ++d.size), this;
      d = this.__data__ = new u(v);
    }
    return d.set(s, h), (this.size = d.size), this;
  }
  return (l0 = c), l0;
}
var i0, B5;
function m2() {
  if (B5) return i0;
  B5 = 1;
  var r = rc(),
    a = Ey(),
    u = Cy(),
    i = wy(),
    c = Ty(),
    s = Yy();
  function h(d) {
    var v = (this.__data__ = new r(d));
    this.size = v.size;
  }
  return (h.prototype.clear = a), (h.prototype.delete = u), (h.prototype.get = i), (h.prototype.has = c), (h.prototype.set = s), (i0 = h), i0;
}
var u0, N5;
function Xy() {
  if (N5) return u0;
  N5 = 1;
  var r = "__lodash_hash_undefined__";
  function a(u) {
    return this.__data__.set(u, r), this;
  }
  return (u0 = a), u0;
}
var c0, Q5;
function Zy() {
  if (Q5) return c0;
  Q5 = 1;
  function r(a) {
    return this.__data__.has(a);
  }
  return (c0 = r), c0;
}
var o0, U5;
function Ky() {
  if (U5) return o0;
  U5 = 1;
  var r = y2(),
    a = Xy(),
    u = Zy();
  function i(c) {
    var s = -1,
      h = c == null ? 0 : c.length;
    for (this.__data__ = new r(); ++s < h; ) this.add(c[s]);
  }
  return (i.prototype.add = i.prototype.push = a), (i.prototype.has = u), (o0 = i), o0;
}
var s0, L5;
function Py() {
  if (L5) return s0;
  L5 = 1;
  function r(a, u) {
    for (var i = -1, c = a == null ? 0 : a.length; ++i < c; ) if (u(a[i], i, a)) return !0;
    return !1;
  }
  return (s0 = r), s0;
}
var f0, G5;
function Fy() {
  if (G5) return f0;
  G5 = 1;
  function r(a, u) {
    return a.has(u);
  }
  return (f0 = r), f0;
}
var h0, k5;
function Gg() {
  if (k5) return h0;
  k5 = 1;
  var r = Ky(),
    a = Py(),
    u = Fy(),
    i = 1,
    c = 2;
  function s(h, d, v, p, g, A) {
    var m = v & i,
      x = h.length,
      w = d.length;
    if (x != w && !(m && w > x)) return !1;
    var O = A.get(h),
      R = A.get(d);
    if (O && R) return O == d && R == h;
    var H = -1,
      D = !0,
      L = v & c ? new r() : void 0;
    for (A.set(h, d), A.set(d, h); ++H < x; ) {
      var k = h[H],
        G = d[H];
      if (p) var Y = m ? p(G, k, H, d, h, A) : p(k, G, H, h, d, A);
      if (Y !== void 0) {
        if (Y) continue;
        D = !1;
        break;
      }
      if (L) {
        if (
          !a(d, function (J, ue) {
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
    return A.delete(h), A.delete(d), D;
  }
  return (h0 = s), h0;
}
var d0, V5;
function kg() {
  if (V5) return d0;
  V5 = 1;
  var r = vn(),
    a = r.Uint8Array;
  return (d0 = a), d0;
}
var p0, Y5;
function $y() {
  if (Y5) return p0;
  Y5 = 1;
  function r(a) {
    var u = -1,
      i = Array(a.size);
    return (
      a.forEach(function (c, s) {
        i[++u] = [s, c];
      }),
      i
    );
  }
  return (p0 = r), p0;
}
var v0, X5;
function Jy() {
  if (X5) return v0;
  X5 = 1;
  function r(a) {
    var u = -1,
      i = Array(a.size);
    return (
      a.forEach(function (c) {
        i[++u] = c;
      }),
      i
    );
  }
  return (v0 = r), v0;
}
var g0, Z5;
function Iy() {
  if (Z5) return g0;
  Z5 = 1;
  var r = vi(),
    a = kg(),
    u = g2(),
    i = Gg(),
    c = $y(),
    s = Jy(),
    h = 1,
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
        (Y = Y.buffer), (J = J.buffer);
      case H:
        return !(Y.byteLength != J.byteLength || !le(new a(Y), new a(J)));
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
        var Ae = fe & h;
        if ((me || (me = s), Y.size != J.size && !Ae)) return !1;
        var Se = _e.get(Y);
        if (Se) return Se == J;
        (fe |= d), _e.set(Y, J);
        var U = i(me(Y), me(J), fe, ye, le, _e);
        return _e.delete(Y), U;
      case R:
        if (k) return k.call(Y) == k.call(J);
    }
    return !1;
  }
  return (g0 = G), g0;
}
var b0, K5;
function Vg() {
  if (K5) return b0;
  K5 = 1;
  function r(a, u) {
    for (var i = -1, c = u.length, s = a.length; ++i < c; ) a[s + i] = u[i];
    return a;
  }
  return (b0 = r), b0;
}
var y0, P5;
function Yg() {
  if (P5) return y0;
  P5 = 1;
  var r = Vg(),
    a = un();
  function u(i, c, s) {
    var h = c(i);
    return a(i) ? h : r(h, s(i));
  }
  return (y0 = u), y0;
}
var m0, F5;
function Wy() {
  if (F5) return m0;
  F5 = 1;
  function r(a, u) {
    for (var i = -1, c = a == null ? 0 : a.length, s = 0, h = []; ++i < c; ) {
      var d = a[i];
      u(d, i, a) && (h[s++] = d);
    }
    return h;
  }
  return (m0 = r), m0;
}
var A0, $5;
function Xg() {
  if ($5) return A0;
  $5 = 1;
  function r() {
    return [];
  }
  return (A0 = r), A0;
}
var x0, J5;
function A2() {
  if (J5) return x0;
  J5 = 1;
  var r = Wy(),
    a = Xg(),
    u = Object.prototype,
    i = u.propertyIsEnumerable,
    c = Object.getOwnPropertySymbols,
    s = c
      ? function (h) {
          return h == null
            ? []
            : ((h = Object(h)),
              r(c(h), function (d) {
                return i.call(h, d);
              }));
        }
      : a;
  return (x0 = s), x0;
}
var _0, I5;
function Zg() {
  if (I5) return _0;
  I5 = 1;
  var r = Yg(),
    a = A2(),
    u = gi();
  function i(c) {
    return r(c, u, a);
  }
  return (_0 = i), _0;
}
var S0, W5;
function em() {
  if (W5) return S0;
  W5 = 1;
  var r = Zg(),
    a = 1,
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s, h, d, v, p, g) {
    var A = d & a,
      m = r(s),
      x = m.length,
      w = r(h),
      O = w.length;
    if (x != O && !A) return !1;
    for (var R = x; R--; ) {
      var H = m[R];
      if (!(A ? H in h : i.call(h, H))) return !1;
    }
    var D = g.get(s),
      L = g.get(h);
    if (D && L) return D == h && L == s;
    var k = !0;
    g.set(s, h), g.set(h, s);
    for (var G = A; ++R < x; ) {
      H = m[R];
      var Y = s[H],
        J = h[H];
      if (v) var ue = A ? v(J, Y, H, h, s, g) : v(Y, J, H, s, h, g);
      if (!(ue === void 0 ? Y === J || p(Y, J, d, v, g) : ue)) {
        k = !1;
        break;
      }
      G || (G = H == "constructor");
    }
    if (k && !G) {
      var fe = s.constructor,
        ye = h.constructor;
      fe != ye && "constructor" in s && "constructor" in h && !(typeof fe == "function" && fe instanceof fe && typeof ye == "function" && ye instanceof ye) && (k = !1);
    }
    return g.delete(s), g.delete(h), k;
  }
  return (S0 = c), S0;
}
var E0, e6;
function tm() {
  if (e6) return E0;
  e6 = 1;
  var r = za(),
    a = vn(),
    u = r(a, "DataView");
  return (E0 = u), E0;
}
var C0, t6;
function nm() {
  if (t6) return C0;
  t6 = 1;
  var r = za(),
    a = vn(),
    u = r(a, "Promise");
  return (C0 = u), C0;
}
var w0, n6;
function am() {
  if (n6) return w0;
  n6 = 1;
  var r = za(),
    a = vn(),
    u = r(a, "Set");
  return (w0 = u), w0;
}
var T0, a6;
function rm() {
  if (a6) return T0;
  a6 = 1;
  var r = za(),
    a = vn(),
    u = r(a, "WeakMap");
  return (T0 = u), T0;
}
var O0, r6;
function uc() {
  if (r6) return O0;
  r6 = 1;
  var r = tm(),
    a = b2(),
    u = nm(),
    i = am(),
    c = rm(),
    s = Ra(),
    h = Lg(),
    d = "[object Map]",
    v = "[object Object]",
    p = "[object Promise]",
    g = "[object Set]",
    A = "[object WeakMap]",
    m = "[object DataView]",
    x = h(r),
    w = h(a),
    O = h(u),
    R = h(i),
    H = h(c),
    D = s;
  return (
    ((r && D(new r(new ArrayBuffer(1))) != m) || (a && D(new a()) != d) || (u && D(u.resolve()) != p) || (i && D(new i()) != g) || (c && D(new c()) != A)) &&
      (D = function (L) {
        var k = s(L),
          G = k == v ? L.constructor : void 0,
          Y = G ? h(G) : "";
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
    a = Gg(),
    u = Iy(),
    i = em(),
    c = uc(),
    s = un(),
    h = o2(),
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
    (J = J == p ? A : J), (ue = ue == p ? A : ue);
    var fe = J == A,
      ye = ue == A,
      le = J == ue;
    if (le && h(O)) {
      if (!h(R)) return !1;
      (G = !0), (fe = !1);
    }
    if (le && !fe) return k || (k = new r()), G || d(O) ? a(O, R, H, D, L, k) : u(O, R, J, H, D, L, k);
    if (!(H & v)) {
      var _e = fe && x.call(O, "__wrapped__"),
        me = ye && x.call(R, "__wrapped__");
      if (_e || me) {
        var Ae = _e ? O.value() : O,
          Se = me ? R.value() : R;
        return k || (k = new r()), L(Ae, Se, H, D, k);
      }
    }
    return le ? (k || (k = new r()), i(O, R, H, D, L, k)) : !1;
  }
  return (M0 = w), M0;
}
var R0, i6;
function Kg() {
  if (i6) return R0;
  i6 = 1;
  var r = lm(),
    a = zn();
  function u(i, c, s, h, d) {
    return i === c ? !0 : i == null || c == null || (!a(i) && !a(c)) ? i !== i && c !== c : r(i, c, s, h, u, d);
  }
  return (R0 = u), R0;
}
var z0, u6;
function im() {
  if (u6) return z0;
  u6 = 1;
  var r = m2(),
    a = Kg(),
    u = 1,
    i = 2;
  function c(s, h, d, v) {
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
        if (v) var H = v(w, O, x, s, h, R);
        if (!(H === void 0 ? a(O, w, u | i, v, R) : H)) return !1;
      }
    }
    return !0;
  }
  return (z0 = c), z0;
}
var q0, c6;
function Pg() {
  if (c6) return q0;
  c6 = 1;
  var r = $r();
  function a(u) {
    return u === u && !r(u);
  }
  return (q0 = a), q0;
}
var D0, o6;
function um() {
  if (o6) return D0;
  o6 = 1;
  var r = Pg(),
    a = gi();
  function u(i) {
    for (var c = a(i), s = c.length; s--; ) {
      var h = c[s],
        d = i[h];
      c[s] = [h, d, r(d)];
    }
    return c;
  }
  return (D0 = u), D0;
}
var H0, s6;
function Fg() {
  if (s6) return H0;
  s6 = 1;
  function r(a, u) {
    return function (i) {
      return i == null ? !1 : i[a] === u && (u !== void 0 || a in Object(i));
    };
  }
  return (H0 = r), H0;
}
var j0, f6;
function cm() {
  if (f6) return j0;
  f6 = 1;
  var r = im(),
    a = um(),
    u = Fg();
  function i(c) {
    var s = a(c);
    return s.length == 1 && s[0][2]
      ? u(s[0][0], s[0][1])
      : function (h) {
          return h === c || r(h, c, s);
        };
  }
  return (j0 = i), j0;
}
var B0, h6;
function x2() {
  if (h6) return B0;
  h6 = 1;
  var r = Ra(),
    a = zn(),
    u = "[object Symbol]";
  function i(c) {
    return typeof c == "symbol" || (a(c) && r(c) == u);
  }
  return (B0 = i), B0;
}
var N0, d6;
function _2() {
  if (d6) return N0;
  d6 = 1;
  var r = un(),
    a = x2(),
    u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    i = /^\w*$/;
  function c(s, h) {
    if (r(s)) return !1;
    var d = typeof s;
    return d == "number" || d == "symbol" || d == "boolean" || s == null || a(s) ? !0 : i.test(s) || !u.test(s) || (h != null && s in Object(h));
  }
  return (N0 = c), N0;
}
var Q0, p6;
function om() {
  if (p6) return Q0;
  p6 = 1;
  var r = y2(),
    a = "Expected a function";
  function u(i, c) {
    if (typeof i != "function" || (c != null && typeof c != "function")) throw new TypeError(a);
    var s = function () {
      var h = arguments,
        d = c ? c.apply(this, h) : h[0],
        v = s.cache;
      if (v.has(d)) return v.get(d);
      var p = i.apply(this, h);
      return (s.cache = v.set(d, p) || v), p;
    };
    return (s.cache = new (u.Cache || r)()), s;
  }
  return (u.Cache = r), (Q0 = u), Q0;
}
var U0, v6;
function sm() {
  if (v6) return U0;
  v6 = 1;
  var r = om(),
    a = 500;
  function u(i) {
    var c = r(i, function (h) {
        return s.size === a && s.clear(), h;
      }),
      s = c.cache;
    return c;
  }
  return (U0 = u), U0;
}
var L0, g6;
function fm() {
  if (g6) return L0;
  g6 = 1;
  var r = sm(),
    a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    u = /\\(\\)?/g,
    i = r(function (c) {
      var s = [];
      return (
        c.charCodeAt(0) === 46 && s.push(""),
        c.replace(a, function (h, d, v, p) {
          s.push(v ? p.replace(u, "$1") : d || h);
        }),
        s
      );
    });
  return (L0 = i), L0;
}
var G0, b6;
function hm() {
  if (b6) return G0;
  b6 = 1;
  var r = vi(),
    a = Ug(),
    u = un(),
    i = x2(),
    c = r ? r.prototype : void 0,
    s = c ? c.toString : void 0;
  function h(d) {
    if (typeof d == "string") return d;
    if (u(d)) return a(d, h) + "";
    if (i(d)) return s ? s.call(d) : "";
    var v = d + "";
    return v == "0" && 1 / d == -1 / 0 ? "-0" : v;
  }
  return (G0 = h), G0;
}
var k0, y6;
function dm() {
  if (y6) return k0;
  y6 = 1;
  var r = hm();
  function a(u) {
    return u == null ? "" : r(u);
  }
  return (k0 = a), k0;
}
var V0, m6;
function $g() {
  if (m6) return V0;
  m6 = 1;
  var r = un(),
    a = _2(),
    u = fm(),
    i = dm();
  function c(s, h) {
    return r(s) ? s : a(s, h) ? [s] : u(i(s));
  }
  return (V0 = c), V0;
}
var Y0, A6;
function cc() {
  if (A6) return Y0;
  A6 = 1;
  var r = x2();
  function a(u) {
    if (typeof u == "string" || r(u)) return u;
    var i = u + "";
    return i == "0" && 1 / u == -1 / 0 ? "-0" : i;
  }
  return (Y0 = a), Y0;
}
var X0, x6;
function Jg() {
  if (x6) return X0;
  x6 = 1;
  var r = $g(),
    a = cc();
  function u(i, c) {
    c = r(c, i);
    for (var s = 0, h = c.length; i != null && s < h; ) i = i[a(c[s++])];
    return s && s == h ? i : void 0;
  }
  return (X0 = u), X0;
}
var Z0, _6;
function pm() {
  if (_6) return Z0;
  _6 = 1;
  var r = Jg();
  function a(u, i, c) {
    var s = u == null ? void 0 : r(u, i);
    return s === void 0 ? c : s;
  }
  return (Z0 = a), Z0;
}
var K0, S6;
function vm() {
  if (S6) return K0;
  S6 = 1;
  function r(a, u) {
    return a != null && u in Object(a);
  }
  return (K0 = r), K0;
}
var P0, E6;
function gm() {
  if (E6) return P0;
  E6 = 1;
  var r = $g(),
    a = zg(),
    u = un(),
    i = qg(),
    c = s2(),
    s = cc();
  function h(d, v, p) {
    v = r(v, d);
    for (var g = -1, A = v.length, m = !1; ++g < A; ) {
      var x = s(v[g]);
      if (!(m = d != null && p(d, x))) break;
      d = d[x];
    }
    return m || ++g != A ? m : ((A = d == null ? 0 : d.length), !!A && c(A) && i(x, A) && (u(d) || a(d)));
  }
  return (P0 = h), P0;
}
var F0, C6;
function bm() {
  if (C6) return F0;
  C6 = 1;
  var r = vm(),
    a = gm();
  function u(i, c) {
    return i != null && a(i, c, r);
  }
  return (F0 = u), F0;
}
var $0, w6;
function ym() {
  if (w6) return $0;
  w6 = 1;
  var r = Kg(),
    a = pm(),
    u = bm(),
    i = _2(),
    c = Pg(),
    s = Fg(),
    h = cc(),
    d = 1,
    v = 2;
  function p(g, A) {
    return i(g) && c(A)
      ? s(h(g), A)
      : function (m) {
          var x = a(m, g);
          return x === void 0 && x === A ? u(m, g) : r(A, x, d | v);
        };
  }
  return ($0 = p), $0;
}
var J0, T6;
function mm() {
  if (T6) return J0;
  T6 = 1;
  function r(a) {
    return function (u) {
      return u?.[a];
    };
  }
  return (J0 = r), J0;
}
var I0, O6;
function Am() {
  if (O6) return I0;
  O6 = 1;
  var r = Jg();
  function a(u) {
    return function (i) {
      return r(i, u);
    };
  }
  return (I0 = a), I0;
}
var W0, M6;
function xm() {
  if (M6) return W0;
  M6 = 1;
  var r = mm(),
    a = Am(),
    u = _2(),
    i = cc();
  function c(s) {
    return u(s) ? r(i(s)) : a(s);
  }
  return (W0 = c), W0;
}
var ef, R6;
function _m() {
  if (R6) return ef;
  R6 = 1;
  var r = cm(),
    a = ym(),
    u = Qg(),
    i = un(),
    c = xm();
  function s(h) {
    return typeof h == "function" ? h : h == null ? u : typeof h == "object" ? (i(h) ? a(h[0], h[1]) : r(h)) : c(h);
  }
  return (ef = s), ef;
}
var tf, z6;
function Sm() {
  if (z6) return tf;
  z6 = 1;
  var r = nc();
  function a(u, i) {
    return function (c, s) {
      if (c == null) return c;
      if (!r(c)) return u(c, s);
      for (var h = c.length, d = i ? h : -1, v = Object(c); (i ? d-- : ++d < h) && s(v[d], d, v) !== !1; );
      return c;
    };
  }
  return (tf = a), tf;
}
var nf, q6;
function Em() {
  if (q6) return nf;
  q6 = 1;
  var r = Ng(),
    a = Sm(),
    u = a(r);
  return (nf = u), nf;
}
var af, D6;
function Cm() {
  if (D6) return af;
  D6 = 1;
  var r = Em(),
    a = nc();
  function u(i, c) {
    var s = -1,
      h = a(i) ? Array(i.length) : [];
    return (
      r(i, function (d, v, p) {
        h[++s] = c(d, v, p);
      }),
      h
    );
  }
  return (af = u), af;
}
var rf, H6;
function wm() {
  if (H6) return rf;
  H6 = 1;
  var r = Ug(),
    a = _m(),
    u = Cm(),
    i = un();
  function c(s, h) {
    var d = i(s) ? r : u;
    return d(s, a(h, 3));
  }
  return (rf = c), rf;
}
var j6;
function Tm() {
  if (j6) return Cr;
  (j6 = 1), Object.defineProperty(Cr, "__esModule", { value: !0 }), (Cr.flattenNames = void 0);
  var r = cy(),
    a = v(r),
    u = p2(),
    i = v(u),
    c = yy(),
    s = v(c),
    h = wm(),
    d = v(h);
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
              w === !0 && m.push(O), m.push(O + "-" + w);
            })
          : (0, a.default)(x) && m.push(x);
      }),
      m
    );
  });
  return (Cr.default = p), Cr;
}
var wr = {},
  lf,
  B6;
function Om() {
  if (B6) return lf;
  B6 = 1;
  function r(a, u) {
    for (var i = -1, c = a == null ? 0 : a.length; ++i < c && u(a[i], i, a) !== !1; );
    return a;
  }
  return (lf = r), lf;
}
var uf, N6;
function Mm() {
  if (N6) return uf;
  N6 = 1;
  var r = za(),
    a = (function () {
      try {
        var u = r(Object, "defineProperty");
        return u({}, "", {}), u;
      } catch {}
    })();
  return (uf = a), uf;
}
var cf, Q6;
function Ig() {
  if (Q6) return cf;
  Q6 = 1;
  var r = Mm();
  function a(u, i, c) {
    i == "__proto__" && r ? r(u, i, { configurable: !0, enumerable: !0, value: c, writable: !0 }) : (u[i] = c);
  }
  return (cf = a), cf;
}
var of, U6;
function Wg() {
  if (U6) return of;
  U6 = 1;
  var r = Ig(),
    a = g2(),
    u = Object.prototype,
    i = u.hasOwnProperty;
  function c(s, h, d) {
    var v = s[h];
    (!(i.call(s, h) && a(v, d)) || (d === void 0 && !(h in s))) && r(s, h, d);
  }
  return (of = c), of;
}
var sf, L6;
function oc() {
  if (L6) return sf;
  L6 = 1;
  var r = Wg(),
    a = Ig();
  function u(i, c, s, h) {
    var d = !s;
    s || (s = {});
    for (var v = -1, p = c.length; ++v < p; ) {
      var g = c[v],
        A = h ? h(s[g], i[g], g, s, i) : void 0;
      A === void 0 && (A = i[g]), d ? a(s, g, A) : r(s, g, A);
    }
    return s;
  }
  return (sf = u), sf;
}
var ff, G6;
function Rm() {
  if (G6) return ff;
  G6 = 1;
  var r = oc(),
    a = gi();
  function u(i, c) {
    return i && r(c, a(c), i);
  }
  return (ff = u), ff;
}
var hf, k6;
function zm() {
  if (k6) return hf;
  k6 = 1;
  function r(a) {
    var u = [];
    if (a != null) for (var i in Object(a)) u.push(i);
    return u;
  }
  return (hf = r), hf;
}
var df, V6;
function qm() {
  if (V6) return df;
  V6 = 1;
  var r = $r(),
    a = d2(),
    u = zm(),
    i = Object.prototype,
    c = i.hasOwnProperty;
  function s(h) {
    if (!r(h)) return u(h);
    var d = a(h),
      v = [];
    for (var p in h) (p == "constructor" && (d || !c.call(h, p))) || v.push(p);
    return v;
  }
  return (df = s), df;
}
var pf, Y6;
function S2() {
  if (Y6) return pf;
  Y6 = 1;
  var r = Hg(),
    a = qm(),
    u = nc();
  function i(c) {
    return u(c) ? r(c, !0) : a(c);
  }
  return (pf = i), pf;
}
var vf, X6;
function Dm() {
  if (X6) return vf;
  X6 = 1;
  var r = oc(),
    a = S2();
  function u(i, c) {
    return i && r(c, a(c), i);
  }
  return (vf = u), vf;
}
var ci = { exports: {} };
ci.exports;
var Z6;
function Hm() {
  return (
    Z6 ||
      ((Z6 = 1),
      (function (r, a) {
        var u = vn(),
          i = a && !a.nodeType && a,
          c = i && !0 && r && !r.nodeType && r,
          s = c && c.exports === i,
          h = s ? u.Buffer : void 0,
          d = h ? h.allocUnsafe : void 0;
        function v(p, g) {
          if (g) return p.slice();
          var A = p.length,
            m = d ? d(A) : new p.constructor(A);
          return p.copy(m), m;
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
  function r(a, u) {
    var i = -1,
      c = a.length;
    for (u || (u = Array(c)); ++i < c; ) u[i] = a[i];
    return u;
  }
  return (gf = r), gf;
}
var bf, P6;
function Bm() {
  if (P6) return bf;
  P6 = 1;
  var r = oc(),
    a = A2();
  function u(i, c) {
    return r(i, a(i), c);
  }
  return (bf = u), bf;
}
var yf, F6;
function e8() {
  if (F6) return yf;
  F6 = 1;
  var r = Vg(),
    a = v2(),
    u = A2(),
    i = Xg(),
    c = Object.getOwnPropertySymbols,
    s = c
      ? function (h) {
          for (var d = []; h; ) r(d, u(h)), (h = a(h));
          return d;
        }
      : i;
  return (yf = s), yf;
}
var mf, $6;
function Nm() {
  if ($6) return mf;
  $6 = 1;
  var r = oc(),
    a = e8();
  function u(i, c) {
    return r(i, a(i), c);
  }
  return (mf = u), mf;
}
var Af, J6;
function Qm() {
  if (J6) return Af;
  J6 = 1;
  var r = Yg(),
    a = e8(),
    u = S2();
  function i(c) {
    return r(c, u, a);
  }
  return (Af = i), Af;
}
var xf, I6;
function Um() {
  if (I6) return xf;
  I6 = 1;
  var r = Object.prototype,
    a = r.hasOwnProperty;
  function u(i) {
    var c = i.length,
      s = new i.constructor(c);
    return c && typeof i[0] == "string" && a.call(i, "index") && ((s.index = i.index), (s.input = i.input)), s;
  }
  return (xf = u), xf;
}
var _f, W6;
function E2() {
  if (W6) return _f;
  W6 = 1;
  var r = kg();
  function a(u) {
    var i = new u.constructor(u.byteLength);
    return new r(i).set(new r(u)), i;
  }
  return (_f = a), _f;
}
var Sf, ev;
function Lm() {
  if (ev) return Sf;
  ev = 1;
  var r = E2();
  function a(u, i) {
    var c = i ? r(u.buffer) : u.buffer;
    return new u.constructor(c, u.byteOffset, u.byteLength);
  }
  return (Sf = a), Sf;
}
var Ef, tv;
function Gm() {
  if (tv) return Ef;
  tv = 1;
  var r = /\w*$/;
  function a(u) {
    var i = new u.constructor(u.source, r.exec(u));
    return (i.lastIndex = u.lastIndex), i;
  }
  return (Ef = a), Ef;
}
var Cf, nv;
function km() {
  if (nv) return Cf;
  nv = 1;
  var r = vi(),
    a = r ? r.prototype : void 0,
    u = a ? a.valueOf : void 0;
  function i(c) {
    return u ? Object(u.call(c)) : {};
  }
  return (Cf = i), Cf;
}
var wf, av;
function Vm() {
  if (av) return wf;
  av = 1;
  var r = E2();
  function a(u, i) {
    var c = i ? r(u.buffer) : u.buffer;
    return new u.constructor(c, u.byteOffset, u.length);
  }
  return (wf = a), wf;
}
var Tf, rv;
function Ym() {
  if (rv) return Tf;
  rv = 1;
  var r = E2(),
    a = Lm(),
    u = Gm(),
    i = km(),
    c = Vm(),
    s = "[object Boolean]",
    h = "[object Date]",
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
      case h:
        return new _e(+fe);
      case w:
        return a(fe, le);
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
  return (Tf = ue), Tf;
}
var Of, lv;
function Xm() {
  if (lv) return Of;
  lv = 1;
  var r = $r(),
    a = Object.create,
    u = (function () {
      function i() {}
      return function (c) {
        if (!r(c)) return {};
        if (a) return a(c);
        i.prototype = c;
        var s = new i();
        return (i.prototype = void 0), s;
      };
    })();
  return (Of = u), Of;
}
var Mf, iv;
function Zm() {
  if (iv) return Mf;
  iv = 1;
  var r = Xm(),
    a = v2(),
    u = d2();
  function i(c) {
    return typeof c.constructor == "function" && !u(c) ? r(a(c)) : {};
  }
  return (Mf = i), Mf;
}
var Rf, uv;
function Km() {
  if (uv) return Rf;
  uv = 1;
  var r = uc(),
    a = zn(),
    u = "[object Map]";
  function i(c) {
    return a(c) && r(c) == u;
  }
  return (Rf = i), Rf;
}
var zf, cv;
function Pm() {
  if (cv) return zf;
  cv = 1;
  var r = Km(),
    a = f2(),
    u = h2(),
    i = u && u.isMap,
    c = i ? a(i) : r;
  return (zf = c), zf;
}
var qf, ov;
function Fm() {
  if (ov) return qf;
  ov = 1;
  var r = uc(),
    a = zn(),
    u = "[object Set]";
  function i(c) {
    return a(c) && r(c) == u;
  }
  return (qf = i), qf;
}
var Df, sv;
function $m() {
  if (sv) return Df;
  sv = 1;
  var r = Fm(),
    a = f2(),
    u = h2(),
    i = u && u.isSet,
    c = i ? a(i) : r;
  return (Df = c), Df;
}
var Hf, fv;
function Jm() {
  if (fv) return Hf;
  fv = 1;
  var r = m2(),
    a = Om(),
    u = Wg(),
    i = Rm(),
    c = Dm(),
    s = Hm(),
    h = jm(),
    d = Bm(),
    v = Nm(),
    p = Zg(),
    g = Qm(),
    A = uc(),
    m = Um(),
    x = Ym(),
    w = Zm(),
    O = un(),
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
    K = "[object Number]",
    re = "[object Object]",
    ce = "[object RegExp]",
    C = "[object Set]",
    P = "[object String]",
    W = "[object Symbol]",
    te = "[object WeakMap]",
    oe = "[object ArrayBuffer]",
    ve = "[object DataView]",
    he = "[object Float32Array]",
    nt = "[object Float64Array]",
    De = "[object Int8Array]",
    Xe = "[object Int16Array]",
    Ke = "[object Int32Array]",
    Gt = "[object Uint8Array]",
    kt = "[object Uint8ClampedArray]",
    E = "[object Uint16Array]",
    z = "[object Uint32Array]",
    _ = {};
  (_[fe] = _[ye] = _[oe] = _[ve] = _[le] = _[_e] = _[he] = _[nt] = _[De] = _[Xe] = _[Ke] = _[U] = _[K] = _[re] = _[ce] = _[C] = _[P] = _[W] = _[Gt] = _[kt] = _[E] = _[z] = !0), (_[me] = _[Ae] = _[te] = !1);
  function I($, ne, Ce, Ue, je, Fe) {
    var $e,
      ut = ne & Y,
      Na = ne & J,
      oa = ne & ue;
    if ((Ce && ($e = je ? Ce($, Ue, je, Fe) : Ce($)), $e !== void 0)) return $e;
    if (!D($)) return $;
    var vt = O($);
    if (vt) {
      if ((($e = m($)), !ut)) return h($, $e);
    } else {
      var At = A($),
        gt = At == Ae || At == Se;
      if (R($)) return s($, ut);
      if (At == re || At == fe || (gt && !je)) {
        if ((($e = Na || gt ? {} : w($)), !ut)) return Na ? v($, c($e, $)) : d($, i($e, $));
      } else {
        if (!_[At]) return je ? $ : {};
        $e = x($, At, ut);
      }
    }
    Fe || (Fe = new r());
    var mi = Fe.get($);
    if (mi) return mi;
    Fe.set($, $e),
      L($)
        ? $.forEach(function (zt) {
            $e.add(I(zt, ne, Ce, zt, $, Fe));
          })
        : H($) &&
          $.forEach(function (zt, Vt) {
            $e.set(Vt, I(zt, ne, Ce, Vt, $, Fe));
          });
    var gc = oa ? (Na ? g : p) : Na ? G : k,
      Ai = vt ? void 0 : gc($);
    return (
      a(Ai || $, function (zt, Vt) {
        Ai && ((Vt = zt), (zt = $[Vt])), u($e, Vt, I(zt, ne, Ce, Vt, $, Fe));
      }),
      $e
    );
  }
  return (Hf = I), Hf;
}
var jf, hv;
function Im() {
  if (hv) return jf;
  hv = 1;
  var r = Jm(),
    a = 1,
    u = 4;
  function i(c) {
    return r(c, a | u);
  }
  return (jf = i), jf;
}
var dv;
function Wm() {
  if (dv) return wr;
  (dv = 1), Object.defineProperty(wr, "__esModule", { value: !0 }), (wr.mergeClasses = void 0);
  var r = p2(),
    a = s(r),
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
  var h = (wr.mergeClasses = function (v) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      g = (v.default && (0, i.default)(v.default)) || {};
    return (
      p.map(function (A) {
        var m = v[A];
        return (
          m &&
            (0, a.default)(m, function (x, w) {
              g[w] || (g[w] = {}), (g[w] = c({}, g[w], m[w]));
            }),
          A
        );
      }),
      g
    );
  });
  return (wr.default = h), wr;
}
var Tr = {},
  pv;
function eA() {
  if (pv) return Tr;
  (pv = 1), Object.defineProperty(Tr, "__esModule", { value: !0 }), (Tr.autoprefix = void 0);
  var r = p2(),
    a = i(r),
    u =
      Object.assign ||
      function (h) {
        for (var d = 1; d < arguments.length; d++) {
          var v = arguments[d];
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (h[p] = v[p]);
        }
        return h;
      };
  function i(h) {
    return h && h.__esModule ? h : { default: h };
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
        (0, a.default)(d, function (p, g) {
          var A = {};
          (0, a.default)(p, function (m, x) {
            var w = c[x];
            w ? (A = u({}, A, w(m))) : (A[x] = m);
          }),
            (v[g] = A);
        }),
        v
      );
    });
  return (Tr.default = s), Tr;
}
var Or = {},
  vv;
function tA() {
  if (vv) return Or;
  (vv = 1), Object.defineProperty(Or, "__esModule", { value: !0 }), (Or.hover = void 0);
  var r =
      Object.assign ||
      function (v) {
        for (var p = 1; p < arguments.length; p++) {
          var g = arguments[p];
          for (var A in g) Object.prototype.hasOwnProperty.call(g, A) && (v[A] = g[A]);
        }
        return v;
      },
    a = ua(),
    u = i(a);
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
  function h(v, p) {
    if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
    (v.prototype = Object.create(p && p.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } })), p && (Object.setPrototypeOf ? Object.setPrototypeOf(v, p) : (v.__proto__ = p));
  }
  var d = (Or.hover = function (p) {
    var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (A) {
      h(m, A);
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
              return u.default.createElement(g, { onMouseOver: O.handleMouseOver, onMouseOut: O.handleMouseOut }, u.default.createElement(p, r({}, O.props, O.state)));
            }),
            w)),
          s(O, R)
        );
      }
      return m;
    })(u.default.Component);
  });
  return (Or.default = d), Or;
}
var Mr = {},
  gv;
function nA() {
  if (gv) return Mr;
  (gv = 1), Object.defineProperty(Mr, "__esModule", { value: !0 }), (Mr.active = void 0);
  var r =
      Object.assign ||
      function (v) {
        for (var p = 1; p < arguments.length; p++) {
          var g = arguments[p];
          for (var A in g) Object.prototype.hasOwnProperty.call(g, A) && (v[A] = g[A]);
        }
        return v;
      },
    a = ua(),
    u = i(a);
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
  function h(v, p) {
    if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
    (v.prototype = Object.create(p && p.prototype, { constructor: { value: v, enumerable: !1, writable: !0, configurable: !0 } })), p && (Object.setPrototypeOf ? Object.setPrototypeOf(v, p) : (v.__proto__ = p));
  }
  var d = (Mr.active = function (p) {
    var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (A) {
      h(m, A);
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
              return u.default.createElement(g, { onMouseDown: O.handleMouseDown, onMouseUp: O.handleMouseUp }, u.default.createElement(p, r({}, O.props, O.state)));
            }),
            w)),
          s(O, R)
        );
      }
      return m;
    })(u.default.Component);
  });
  return (Mr.default = d), Mr;
}
var Bu = {},
  bv;
function aA() {
  if (bv) return Bu;
  (bv = 1), Object.defineProperty(Bu, "__esModule", { value: !0 });
  var r = function (u, i) {
    var c = {},
      s = function (d) {
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        c[d] = v;
      };
    return u === 0 && s("first-child"), u === i - 1 && s("last-child"), (u === 0 || u % 2 === 0) && s("even"), Math.abs(u % 2) === 1 && s("odd"), s("nth-child", u), c;
  };
  return (Bu.default = r), Bu;
}
var yv;
function rA() {
  if (yv) return Ot;
  (yv = 1), Object.defineProperty(Ot, "__esModule", { value: !0 }), (Ot.ReactCSS = Ot.loop = Ot.handleActive = Ot.handleHover = Ot.hover = void 0);
  var r = Tm(),
    a = m(r),
    u = Wm(),
    i = m(u),
    c = eA(),
    s = m(c),
    h = tA(),
    d = m(h),
    v = nA(),
    p = m(v),
    g = aA(),
    A = m(g);
  function m(w) {
    return w && w.__esModule ? w : { default: w };
  }
  (Ot.hover = d.default), (Ot.handleHover = d.default), (Ot.handleActive = p.default), (Ot.loop = A.default);
  var x = (Ot.ReactCSS = function (O) {
    for (var R = arguments.length, H = Array(R > 1 ? R - 1 : 0), D = 1; D < R; D++) H[D - 1] = arguments[D];
    var L = (0, a.default)(H),
      k = (0, i.default)(O, L);
    return (0, s.default)(k);
  });
  return (Ot.default = x), Ot;
}
var C2 = rA();
const xe = Fr(C2);
var lA = function (a, u, i, c, s) {
    var h = s.clientWidth,
      d = s.clientHeight,
      v = typeof a.pageX == "number" ? a.pageX : a.touches[0].pageX,
      p = typeof a.pageY == "number" ? a.pageY : a.touches[0].pageY,
      g = v - (s.getBoundingClientRect().left + window.pageXOffset),
      A = p - (s.getBoundingClientRect().top + window.pageYOffset);
    if (i === "vertical") {
      var m = void 0;
      if ((A < 0 ? (m = 0) : A > d ? (m = 1) : (m = Math.round((A * 100) / d) / 100), u.a !== m)) return { h: u.h, s: u.s, l: u.l, a: m, source: "rgb" };
    } else {
      var x = void 0;
      if ((g < 0 ? (x = 0) : g > h ? (x = 1) : (x = Math.round((g * 100) / h) / 100), c !== x)) return { h: u.h, s: u.s, l: u.l, a: x, source: "rgb" };
    }
    return null;
  },
  Bf = {},
  iA = function (a, u, i, c) {
    if (typeof document > "u" && !c) return null;
    var s = c ? new c() : document.createElement("canvas");
    (s.width = i * 2), (s.height = i * 2);
    var h = s.getContext("2d");
    return h ? ((h.fillStyle = a), h.fillRect(0, 0, s.width, s.height), (h.fillStyle = u), h.fillRect(0, 0, i, i), h.translate(i, i), h.fillRect(0, 0, i, i), s.toDataURL()) : null;
  },
  uA = function (a, u, i, c) {
    var s = a + "-" + u + "-" + i + (c ? "-server" : "");
    if (Bf[s]) return Bf[s];
    var h = iA(a, u, i, c);
    return (Bf[s] = h), h;
  },
  mv =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  Jr = function (a) {
    var u = a.white,
      i = a.grey,
      c = a.size,
      s = a.renderers,
      h = a.borderRadius,
      d = a.boxShadow,
      v = a.children,
      p = xe({ default: { grid: { borderRadius: h, boxShadow: d, absolute: "0px 0px 0px 0px", background: "url(" + uA(u, i, c, s.canvas) + ") center left" } } });
    return Ee.isValidElement(v) ? S.cloneElement(v, mv({}, v.props, { style: mv({}, v.props.style, p.grid) })) : S.createElement("div", { style: p.grid });
  };
Jr.defaultProps = { size: 8, white: "transparent", grey: "rgba(0,0,0,.08)", renderers: {} };
var cA =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  oA = (function () {
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function sA(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function Av(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function fA(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var w2 = (function (r) {
    fA(a, r);
    function a() {
      var u, i, c, s;
      sA(this, a);
      for (var h = arguments.length, d = Array(h), v = 0; v < h; v++) d[v] = arguments[v];
      return (
        (s =
          ((i = ((c = Av(this, (u = a.__proto__ || Object.getPrototypeOf(a)).call.apply(u, [this].concat(d)))), c)),
          (c.handleChange = function (p) {
            var g = lA(p, c.props.hsl, c.props.direction, c.props.a, c.container);
            g && typeof c.props.onChange == "function" && c.props.onChange(g, p);
          }),
          (c.handleMouseDown = function (p) {
            c.handleChange(p), window.addEventListener("mousemove", c.handleChange), window.addEventListener("mouseup", c.handleMouseUp);
          }),
          (c.handleMouseUp = function () {
            c.unbindEventListeners();
          }),
          (c.unbindEventListeners = function () {
            window.removeEventListener("mousemove", c.handleChange), window.removeEventListener("mouseup", c.handleMouseUp);
          }),
          i)),
        Av(c, s)
      );
    }
    return (
      oA(a, [
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
                    slider: { width: "4px", borderRadius: "1px", height: "8px", boxShadow: "0 0 2px rgba(0, 0, 0, .6)", background: "#fff", marginTop: "1px", transform: "translateX(-2px)" },
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
                { vertical: this.props.direction === "vertical", overwrite: !0 }
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
                S.createElement("div", { style: s.pointer }, this.props.pointer ? S.createElement(this.props.pointer, this.props) : S.createElement("div", { style: s.slider }))
              )
            );
          },
        },
      ]),
      a
    );
  })(Ee.PureComponent || Ee.Component),
  hA = (function () {
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function dA(r, a, u) {
  return a in r ? Object.defineProperty(r, a, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (r[a] = u), r;
}
function pA(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function vA(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function gA(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var bA = 1,
  t8 = 38,
  yA = 40,
  mA = [t8, yA],
  AA = function (a) {
    return mA.indexOf(a) > -1;
  },
  xA = function (a) {
    return Number(String(a).replace(/%/g, ""));
  },
  _A = 1,
  ze = (function (r) {
    gA(a, r);
    function a(u) {
      pA(this, a);
      var i = vA(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
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
            var h = i.getArrowOffset(),
              d = c.keyCode === t8 ? s + h : s - h;
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
          i.props.dragLabel && (c.preventDefault(), i.handleDrag(c), window.addEventListener("mousemove", i.handleDrag), window.addEventListener("mouseup", i.handleMouseUp));
        }),
        (i.handleMouseUp = function () {
          i.unbindEventListeners();
        }),
        (i.unbindEventListeners = function () {
          window.removeEventListener("mousemove", i.handleDrag), window.removeEventListener("mouseup", i.handleMouseUp);
        }),
        (i.state = { value: String(u.value).toUpperCase(), blurValue: String(u.value).toUpperCase() }),
        (i.inputId = "rc-editable-input-" + _A++),
        i
      );
    }
    return (
      hA(a, [
        {
          key: "componentDidUpdate",
          value: function (i, c) {
            this.props.value !== this.state.value &&
              (i.value !== this.props.value || c.value !== this.state.value) &&
              (this.input === document.activeElement
                ? this.setState({ blurValue: String(this.props.value).toUpperCase() })
                : this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() }));
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
            this.props.onChange && this.props.onChange(s, c), this.setState({ value: i });
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
                this.props
              );
            return S.createElement(
              "div",
              { style: c.wrap },
              S.createElement("input", {
                id: this.inputId,
                style: c.input,
                ref: function (h) {
                  return (i.input = h);
                },
                value: this.state.value,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                placeholder: this.props.placeholder,
                spellCheck: "false",
              }),
              this.props.label && !this.props.hideLabel ? S.createElement("label", { htmlFor: this.inputId, style: c.label, onMouseDown: this.handleMouseDown }, this.props.label) : null
            );
          },
        },
      ]),
      a
    );
  })(Ee.PureComponent || Ee.Component),
  SA = function (a, u, i, c) {
    var s = c.clientWidth,
      h = c.clientHeight,
      d = typeof a.pageX == "number" ? a.pageX : a.touches[0].pageX,
      v = typeof a.pageY == "number" ? a.pageY : a.touches[0].pageY,
      p = d - (c.getBoundingClientRect().left + window.pageXOffset),
      g = v - (c.getBoundingClientRect().top + window.pageYOffset);
    if (u === "vertical") {
      var A = void 0;
      if (g < 0) A = 359;
      else if (g > h) A = 0;
      else {
        var m = -((g * 100) / h) + 100;
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
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function CA(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function xv(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function wA(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var Ir = (function (r) {
    wA(a, r);
    function a() {
      var u, i, c, s;
      CA(this, a);
      for (var h = arguments.length, d = Array(h), v = 0; v < h; v++) d[v] = arguments[v];
      return (
        (s =
          ((i = ((c = xv(this, (u = a.__proto__ || Object.getPrototypeOf(a)).call.apply(u, [this].concat(d)))), c)),
          (c.handleChange = function (p) {
            var g = SA(p, c.props.direction, c.props.hsl, c.container);
            g && typeof c.props.onChange == "function" && c.props.onChange(g, p);
          }),
          (c.handleMouseDown = function (p) {
            c.handleChange(p), window.addEventListener("mousemove", c.handleChange), window.addEventListener("mouseup", c.handleMouseUp);
          }),
          (c.handleMouseUp = function () {
            c.unbindEventListeners();
          }),
          i)),
        xv(c, s)
      );
    }
    return (
      EA(a, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "unbindEventListeners",
          value: function () {
            window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              c = this.props.direction,
              s = c === void 0 ? "horizontal" : c,
              h = xe(
                {
                  default: {
                    hue: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius, boxShadow: this.props.shadow },
                    container: { padding: "0 2px", position: "relative", height: "100%", borderRadius: this.props.radius },
                    pointer: { position: "absolute", left: (this.props.hsl.h * 100) / 360 + "%" },
                    slider: { marginTop: "1px", width: "4px", borderRadius: "1px", height: "8px", boxShadow: "0 0 2px rgba(0, 0, 0, .6)", background: "#fff", transform: "translateX(-2px)" },
                  },
                  vertical: { pointer: { left: "0px", top: -((this.props.hsl.h * 100) / 360) + 100 + "%" } },
                },
                { vertical: s === "vertical" }
              );
            return S.createElement(
              "div",
              { style: h.hue },
              S.createElement(
                "div",
                {
                  className: "hue-" + s,
                  style: h.container,
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
          `
                ),
                S.createElement("div", { style: h.pointer }, this.props.pointer ? S.createElement(this.props.pointer, this.props) : S.createElement("div", { style: h.slider }))
              )
            );
          },
        },
      ]),
      a
    );
  })(Ee.PureComponent || Ee.Component),
  Nf = { exports: {} },
  Qf,
  _v;
function TA() {
  if (_v) return Qf;
  _v = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Qf = r), Qf;
}
var Uf, Sv;
function OA() {
  if (Sv) return Uf;
  Sv = 1;
  var r = TA();
  function a() {}
  function u() {}
  return (
    (u.resetWarningCache = a),
    (Uf = function () {
      function i(h, d, v, p, g, A) {
        if (A !== r) {
          var m = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
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
        resetWarningCache: a,
      };
      return (s.PropTypes = s), s;
    }),
    Uf
  );
}
var Ev;
function MA() {
  return Ev || ((Ev = 1), (Nf.exports = OA()())), Nf.exports;
}
var RA = MA();
const ee = Fr(RA);
function zA() {
  (this.__data__ = []), (this.size = 0);
}
function bi(r, a) {
  return r === a || (r !== r && a !== a);
}
function sc(r, a) {
  for (var u = r.length; u--; ) if (bi(r[u][0], a)) return u;
  return -1;
}
var qA = Array.prototype,
  DA = qA.splice;
function HA(r) {
  var a = this.__data__,
    u = sc(a, r);
  if (u < 0) return !1;
  var i = a.length - 1;
  return u == i ? a.pop() : DA.call(a, u, 1), --this.size, !0;
}
function jA(r) {
  var a = this.__data__,
    u = sc(a, r);
  return u < 0 ? void 0 : a[u][1];
}
function BA(r) {
  return sc(this.__data__, r) > -1;
}
function NA(r, a) {
  var u = this.__data__,
    i = sc(u, r);
  return i < 0 ? (++this.size, u.push([r, a])) : (u[i][1] = a), this;
}
function qn(r) {
  var a = -1,
    u = r == null ? 0 : r.length;
  for (this.clear(); ++a < u; ) {
    var i = r[a];
    this.set(i[0], i[1]);
  }
}
qn.prototype.clear = zA;
qn.prototype.delete = HA;
qn.prototype.get = jA;
qn.prototype.has = BA;
qn.prototype.set = NA;
function QA() {
  (this.__data__ = new qn()), (this.size = 0);
}
function UA(r) {
  var a = this.__data__,
    u = a.delete(r);
  return (this.size = a.size), u;
}
function LA(r) {
  return this.__data__.get(r);
}
function GA(r) {
  return this.__data__.has(r);
}
var n8 = typeof global == "object" && global && global.Object === Object && global,
  kA = typeof self == "object" && self && self.Object === Object && self,
  cn = n8 || kA || Function("return this")(),
  la = cn.Symbol,
  a8 = Object.prototype,
  VA = a8.hasOwnProperty,
  YA = a8.toString,
  ai = la ? la.toStringTag : void 0;
function XA(r) {
  var a = VA.call(r, ai),
    u = r[ai];
  try {
    r[ai] = void 0;
    var i = !0;
  } catch {}
  var c = YA.call(r);
  return i && (a ? (r[ai] = u) : delete r[ai]), c;
}
var ZA = Object.prototype,
  KA = ZA.toString;
function PA(r) {
  return KA.call(r);
}
var FA = "[object Null]",
  $A = "[object Undefined]",
  Cv = la ? la.toStringTag : void 0;
function qa(r) {
  return r == null ? (r === void 0 ? $A : FA) : Cv && Cv in Object(r) ? XA(r) : PA(r);
}
function en(r) {
  var a = typeof r;
  return r != null && (a == "object" || a == "function");
}
var JA = "[object AsyncFunction]",
  IA = "[object Function]",
  WA = "[object GeneratorFunction]",
  ex = "[object Proxy]";
function T2(r) {
  if (!en(r)) return !1;
  var a = qa(r);
  return a == IA || a == WA || a == JA || a == ex;
}
var Lf = cn["__core-js_shared__"],
  wv = (function () {
    var r = /[^.]+$/.exec((Lf && Lf.keys && Lf.keys.IE_PROTO) || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
function tx(r) {
  return !!wv && wv in r;
}
var nx = Function.prototype,
  ax = nx.toString;
function Da(r) {
  if (r != null) {
    try {
      return ax.call(r);
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
      "$"
  );
function fx(r) {
  if (!en(r) || tx(r)) return !1;
  var a = T2(r) ? sx : lx;
  return a.test(Da(r));
}
function hx(r, a) {
  return r?.[a];
}
function Ha(r, a) {
  var u = hx(r, a);
  return fx(u) ? u : void 0;
}
var hi = Ha(cn, "Map"),
  di = Ha(Object, "create");
function dx() {
  (this.__data__ = di ? di(null) : {}), (this.size = 0);
}
function px(r) {
  var a = this.has(r) && delete this.__data__[r];
  return (this.size -= a ? 1 : 0), a;
}
var vx = "__lodash_hash_undefined__",
  gx = Object.prototype,
  bx = gx.hasOwnProperty;
function yx(r) {
  var a = this.__data__;
  if (di) {
    var u = a[r];
    return u === vx ? void 0 : u;
  }
  return bx.call(a, r) ? a[r] : void 0;
}
var mx = Object.prototype,
  Ax = mx.hasOwnProperty;
function xx(r) {
  var a = this.__data__;
  return di ? a[r] !== void 0 : Ax.call(a, r);
}
var _x = "__lodash_hash_undefined__";
function Sx(r, a) {
  var u = this.__data__;
  return (this.size += this.has(r) ? 0 : 1), (u[r] = di && a === void 0 ? _x : a), this;
}
function Ma(r) {
  var a = -1,
    u = r == null ? 0 : r.length;
  for (this.clear(); ++a < u; ) {
    var i = r[a];
    this.set(i[0], i[1]);
  }
}
Ma.prototype.clear = dx;
Ma.prototype.delete = px;
Ma.prototype.get = yx;
Ma.prototype.has = xx;
Ma.prototype.set = Sx;
function Ex() {
  (this.size = 0), (this.__data__ = { hash: new Ma(), map: new (hi || qn)(), string: new Ma() });
}
function Cx(r) {
  var a = typeof r;
  return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? r !== "__proto__" : r === null;
}
function fc(r, a) {
  var u = r.__data__;
  return Cx(a) ? u[typeof a == "string" ? "string" : "hash"] : u.map;
}
function wx(r) {
  var a = fc(this, r).delete(r);
  return (this.size -= a ? 1 : 0), a;
}
function Tx(r) {
  return fc(this, r).get(r);
}
function Ox(r) {
  return fc(this, r).has(r);
}
function Mx(r, a) {
  var u = fc(this, r),
    i = u.size;
  return u.set(r, a), (this.size += u.size == i ? 0 : 1), this;
}
function Dn(r) {
  var a = -1,
    u = r == null ? 0 : r.length;
  for (this.clear(); ++a < u; ) {
    var i = r[a];
    this.set(i[0], i[1]);
  }
}
Dn.prototype.clear = Ex;
Dn.prototype.delete = wx;
Dn.prototype.get = Tx;
Dn.prototype.has = Ox;
Dn.prototype.set = Mx;
var Rx = 200;
function zx(r, a) {
  var u = this.__data__;
  if (u instanceof qn) {
    var i = u.__data__;
    if (!hi || i.length < Rx - 1) return i.push([r, a]), (this.size = ++u.size), this;
    u = this.__data__ = new Dn(i);
  }
  return u.set(r, a), (this.size = u.size), this;
}
function pn(r) {
  var a = (this.__data__ = new qn(r));
  this.size = a.size;
}
pn.prototype.clear = QA;
pn.prototype.delete = UA;
pn.prototype.get = LA;
pn.prototype.has = GA;
pn.prototype.set = zx;
var Ku = (function () {
  try {
    var r = Ha(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {}
})();
function O2(r, a, u) {
  a == "__proto__" && Ku ? Ku(r, a, { configurable: !0, enumerable: !0, value: u, writable: !0 }) : (r[a] = u);
}
function Jf(r, a, u) {
  ((u !== void 0 && !bi(r[a], u)) || (u === void 0 && !(a in r))) && O2(r, a, u);
}
function qx(r) {
  return function (a, u, i) {
    for (var c = -1, s = Object(a), h = i(a), d = h.length; d--; ) {
      var v = h[++c];
      if (u(s[v], v, s) === !1) break;
    }
    return a;
  };
}
var r8 = qx(),
  l8 = typeof exports == "object" && exports && !exports.nodeType && exports,
  Tv = l8 && typeof module == "object" && module && !module.nodeType && module,
  Dx = Tv && Tv.exports === l8,
  Ov = Dx ? cn.Buffer : void 0;
Ov && Ov.allocUnsafe;
function Hx(r, a) {
  return r.slice();
}
var Pu = cn.Uint8Array;
function jx(r) {
  var a = new r.constructor(r.byteLength);
  return new Pu(a).set(new Pu(r)), a;
}
function Bx(r, a) {
  var u = jx(r.buffer);
  return new r.constructor(u, r.byteOffset, r.length);
}
function Nx(r, a) {
  var u = -1,
    i = r.length;
  for (a || (a = Array(i)); ++u < i; ) a[u] = r[u];
  return a;
}
var Mv = Object.create,
  Qx = (function () {
    function r() {}
    return function (a) {
      if (!en(a)) return {};
      if (Mv) return Mv(a);
      r.prototype = a;
      var u = new r();
      return (r.prototype = void 0), u;
    };
  })();
function i8(r, a) {
  return function (u) {
    return r(a(u));
  };
}
var u8 = i8(Object.getPrototypeOf, Object),
  Ux = Object.prototype;
function M2(r) {
  var a = r && r.constructor,
    u = (typeof a == "function" && a.prototype) || Ux;
  return r === u;
}
function Lx(r) {
  return typeof r.constructor == "function" && !M2(r) ? Qx(u8(r)) : {};
}
function ia(r) {
  return r != null && typeof r == "object";
}
var Gx = "[object Arguments]";
function Rv(r) {
  return ia(r) && qa(r) == Gx;
}
var c8 = Object.prototype,
  kx = c8.hasOwnProperty,
  Vx = c8.propertyIsEnumerable,
  Fu = Rv(
    (function () {
      return arguments;
    })()
  )
    ? Rv
    : function (r) {
        return ia(r) && kx.call(r, "callee") && !Vx.call(r, "callee");
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
  return ia(r) && Wr(r);
}
function Zx() {
  return !1;
}
var o8 = typeof exports == "object" && exports && !exports.nodeType && exports,
  zv = o8 && typeof module == "object" && module && !module.nodeType && module,
  Kx = zv && zv.exports === o8,
  qv = Kx ? cn.Buffer : void 0,
  Px = qv ? qv.isBuffer : void 0,
  $u = Px || Zx,
  Fx = "[object Object]",
  $x = Function.prototype,
  Jx = Object.prototype,
  s8 = $x.toString,
  Ix = Jx.hasOwnProperty,
  Wx = s8.call(Object);
function e_(r) {
  if (!ia(r) || qa(r) != Fx) return !1;
  var a = u8(r);
  if (a === null) return !0;
  var u = Ix.call(a, "constructor") && a.constructor;
  return typeof u == "function" && u instanceof u && s8.call(u) == Wx;
}
var t_ = "[object Arguments]",
  n_ = "[object Array]",
  a_ = "[object Boolean]",
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
Ze[t_] = Ze[n_] = Ze[p_] = Ze[a_] = Ze[v_] = Ze[r_] = Ze[l_] = Ze[i_] = Ze[u_] = Ze[c_] = Ze[o_] = Ze[s_] = Ze[f_] = Ze[h_] = Ze[d_] = !1;
function C_(r) {
  return ia(r) && R2(r.length) && !!Ze[qa(r)];
}
function w_(r) {
  return function (a) {
    return r(a);
  };
}
var f8 = typeof exports == "object" && exports && !exports.nodeType && exports,
  fi = f8 && typeof module == "object" && module && !module.nodeType && module,
  T_ = fi && fi.exports === f8,
  Gf = T_ && n8.process,
  Dv = (function () {
    try {
      var r = fi && fi.require && fi.require("util").types;
      return r || (Gf && Gf.binding && Gf.binding("util"));
    } catch {}
  })(),
  Hv = Dv && Dv.isTypedArray,
  z2 = Hv ? w_(Hv) : C_;
function If(r, a) {
  if (!(a === "constructor" && typeof r[a] == "function") && a != "__proto__") return r[a];
}
var O_ = Object.prototype,
  M_ = O_.hasOwnProperty;
function R_(r, a, u) {
  var i = r[a];
  (!(M_.call(r, a) && bi(i, u)) || (u === void 0 && !(a in r))) && O2(r, a, u);
}
function z_(r, a, u, i) {
  var c = !u;
  u || (u = {});
  for (var s = -1, h = a.length; ++s < h; ) {
    var d = a[s],
      v = void 0;
    v === void 0 && (v = r[d]), c ? O2(u, d, v) : R_(u, d, v);
  }
  return u;
}
function q_(r, a) {
  for (var u = -1, i = Array(r); ++u < r; ) i[u] = a(u);
  return i;
}
var D_ = 9007199254740991,
  H_ = /^(?:0|[1-9]\d*)$/;
function q2(r, a) {
  var u = typeof r;
  return (a = a ?? D_), !!a && (u == "number" || (u != "symbol" && H_.test(r))) && r > -1 && r % 1 == 0 && r < a;
}
var j_ = Object.prototype,
  B_ = j_.hasOwnProperty;
function h8(r, a) {
  var u = Lt(r),
    i = !u && Fu(r),
    c = !u && !i && $u(r),
    s = !u && !i && !c && z2(r),
    h = u || i || c || s,
    d = h ? q_(r.length, String) : [],
    v = d.length;
  for (var p in r) (a || B_.call(r, p)) && !(h && (p == "length" || (c && (p == "offset" || p == "parent")) || (s && (p == "buffer" || p == "byteLength" || p == "byteOffset")) || q2(p, v))) && d.push(p);
  return d;
}
function N_(r) {
  var a = [];
  if (r != null) for (var u in Object(r)) a.push(u);
  return a;
}
var Q_ = Object.prototype,
  U_ = Q_.hasOwnProperty;
function L_(r) {
  if (!en(r)) return N_(r);
  var a = M2(r),
    u = [];
  for (var i in r) (i == "constructor" && (a || !U_.call(r, i))) || u.push(i);
  return u;
}
function d8(r) {
  return Wr(r) ? h8(r, !0) : L_(r);
}
function G_(r) {
  return z_(r, d8(r));
}
function k_(r, a, u, i, c, s, h) {
  var d = If(r, u),
    v = If(a, u),
    p = h.get(v);
  if (p) {
    Jf(r, u, p);
    return;
  }
  var g = s ? s(d, v, u + "", r, a, h) : void 0,
    A = g === void 0;
  if (A) {
    var m = Lt(v),
      x = !m && $u(v),
      w = !m && !x && z2(v);
    (g = v), m || x || w ? (Lt(d) ? (g = d) : Xx(d) ? (g = Nx(d)) : x ? ((A = !1), (g = Hx(v))) : w ? ((A = !1), (g = Bx(v))) : (g = [])) : e_(v) || Fu(v) ? ((g = d), Fu(d) ? (g = G_(d)) : (!en(d) || T2(d)) && (g = Lx(v))) : (A = !1);
  }
  A && (h.set(v, g), c(g, v, i, s, h), h.delete(v)), Jf(r, u, g);
}
function p8(r, a, u, i, c) {
  r !== a &&
    r8(
      a,
      function (s, h) {
        if ((c || (c = new pn()), en(s))) k_(r, a, h, u, p8, i, c);
        else {
          var d = i ? i(If(r, h), s, h + "", r, a, c) : void 0;
          d === void 0 && (d = s), Jf(r, h, d);
        }
      },
      d8
    );
}
function hc(r) {
  return r;
}
function V_(r, a, u) {
  switch (u.length) {
    case 0:
      return r.call(a);
    case 1:
      return r.call(a, u[0]);
    case 2:
      return r.call(a, u[0], u[1]);
    case 3:
      return r.call(a, u[0], u[1], u[2]);
  }
  return r.apply(a, u);
}
var jv = Math.max;
function Y_(r, a, u) {
  return (
    (a = jv(a === void 0 ? r.length - 1 : a, 0)),
    function () {
      for (var i = arguments, c = -1, s = jv(i.length - a, 0), h = Array(s); ++c < s; ) h[c] = i[a + c];
      c = -1;
      for (var d = Array(a + 1); ++c < a; ) d[c] = i[c];
      return (d[a] = u(h)), V_(r, this, d);
    }
  );
}
function X_(r) {
  return function () {
    return r;
  };
}
var Z_ = Ku
    ? function (r, a) {
        return Ku(r, "toString", { configurable: !0, enumerable: !1, value: X_(a), writable: !0 });
      }
    : hc,
  K_ = 800,
  P_ = 16,
  F_ = Date.now;
function $_(r) {
  var a = 0,
    u = 0;
  return function () {
    var i = F_(),
      c = P_ - (i - u);
    if (((u = i), c > 0)) {
      if (++a >= K_) return arguments[0];
    } else a = 0;
    return r.apply(void 0, arguments);
  };
}
var J_ = $_(Z_);
function I_(r, a) {
  return J_(Y_(r, a, hc), r + "");
}
function W_(r, a, u) {
  if (!en(u)) return !1;
  var i = typeof a;
  return (i == "number" ? Wr(u) && q2(a, u.length) : i == "string" && a in u) ? bi(u[a], r) : !1;
}
function eS(r) {
  return I_(function (a, u) {
    var i = -1,
      c = u.length,
      s = c > 1 ? u[c - 1] : void 0,
      h = c > 2 ? u[2] : void 0;
    for (s = r.length > 3 && typeof s == "function" ? (c--, s) : void 0, h && W_(u[0], u[1], h) && ((s = c < 3 ? void 0 : s), (c = 1)), a = Object(a); ++i < c; ) {
      var d = u[i];
      d && r(a, d, i, s);
    }
    return a;
  });
}
var Mt = eS(function (r, a, u) {
    p8(r, a, u);
  }),
  yi = function (a) {
    var u = a.zDepth,
      i = a.radius,
      c = a.background,
      s = a.children,
      h = a.styles,
      d = h === void 0 ? {} : h,
      v = xe(
        Mt(
          {
            default: { wrap: { position: "relative", display: "inline-block" }, content: { position: "relative" }, bg: { absolute: "0px 0px 0px 0px", boxShadow: "0 " + u + "px " + u * 4 + "px rgba(0,0,0,.24)", borderRadius: i, background: c } },
            "zDepth-0": { bg: { boxShadow: "none" } },
            "zDepth-1": { bg: { boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)" } },
            "zDepth-2": { bg: { boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)" } },
            "zDepth-3": { bg: { boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)" } },
            "zDepth-4": { bg: { boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)" } },
            "zDepth-5": { bg: { boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)" } },
            square: { bg: { borderRadius: "0" } },
            circle: { bg: { borderRadius: "50%" } },
          },
          d
        ),
        { "zDepth-1": u === 1 }
      );
    return S.createElement("div", { style: v.wrap }, S.createElement("div", { style: v.bg }), S.createElement("div", { style: v.content }, s));
  };
yi.propTypes = { background: ee.string, zDepth: ee.oneOf([0, 1, 2, 3, 4, 5]), radius: ee.number, styles: ee.object };
yi.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} };
var kf = function () {
    return cn.Date.now();
  },
  tS = /\s/;
function nS(r) {
  for (var a = r.length; a-- && tS.test(r.charAt(a)); );
  return a;
}
var aS = /^\s+/;
function rS(r) {
  return r && r.slice(0, nS(r) + 1).replace(aS, "");
}
var lS = "[object Symbol]";
function dc(r) {
  return typeof r == "symbol" || (ia(r) && qa(r) == lS);
}
var Bv = NaN,
  iS = /^[-+]0x[0-9a-f]+$/i,
  uS = /^0b[01]+$/i,
  cS = /^0o[0-7]+$/i,
  oS = parseInt;
function Nv(r) {
  if (typeof r == "number") return r;
  if (dc(r)) return Bv;
  if (en(r)) {
    var a = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = en(a) ? a + "" : a;
  }
  if (typeof r != "string") return r === 0 ? r : +r;
  r = rS(r);
  var u = uS.test(r);
  return u || cS.test(r) ? oS(r.slice(2), u ? 2 : 8) : iS.test(r) ? Bv : +r;
}
var sS = "Expected a function",
  fS = Math.max,
  hS = Math.min;
function v8(r, a, u) {
  var i,
    c,
    s,
    h,
    d,
    v,
    p = 0,
    g = !1,
    A = !1,
    m = !0;
  if (typeof r != "function") throw new TypeError(sS);
  (a = Nv(a) || 0), en(u) && ((g = !!u.leading), (A = "maxWait" in u), (s = A ? fS(Nv(u.maxWait) || 0, a) : s), (m = "trailing" in u ? !!u.trailing : m));
  function x(Y) {
    var J = i,
      ue = c;
    return (i = c = void 0), (p = Y), (h = r.apply(ue, J)), h;
  }
  function w(Y) {
    return (p = Y), (d = setTimeout(H, a)), g ? x(Y) : h;
  }
  function O(Y) {
    var J = Y - v,
      ue = Y - p,
      fe = a - J;
    return A ? hS(fe, s - ue) : fe;
  }
  function R(Y) {
    var J = Y - v,
      ue = Y - p;
    return v === void 0 || J >= a || J < 0 || (A && ue >= s);
  }
  function H() {
    var Y = kf();
    if (R(Y)) return D(Y);
    d = setTimeout(H, O(Y));
  }
  function D(Y) {
    return (d = void 0), m && i ? x(Y) : ((i = c = void 0), h);
  }
  function L() {
    d !== void 0 && clearTimeout(d), (p = 0), (i = v = c = d = void 0);
  }
  function k() {
    return d === void 0 ? h : D(kf());
  }
  function G() {
    var Y = kf(),
      J = R(Y);
    if (((i = arguments), (c = this), (v = Y), J)) {
      if (d === void 0) return w(v);
      if (A) return clearTimeout(d), (d = setTimeout(H, a)), x(v);
    }
    return d === void 0 && (d = setTimeout(H, a)), h;
  }
  return (G.cancel = L), (G.flush = k), G;
}
var dS = "Expected a function";
function pS(r, a, u) {
  var i = !0,
    c = !0;
  if (typeof r != "function") throw new TypeError(dS);
  return en(u) && ((i = "leading" in u ? !!u.leading : i), (c = "trailing" in u ? !!u.trailing : c)), v8(r, a, { leading: i, maxWait: a, trailing: c });
}
var vS = function (a, u, i) {
    var c = i.getBoundingClientRect(),
      s = c.width,
      h = c.height,
      d = typeof a.pageX == "number" ? a.pageX : a.touches[0].pageX,
      v = typeof a.pageY == "number" ? a.pageY : a.touches[0].pageY,
      p = d - (i.getBoundingClientRect().left + window.pageXOffset),
      g = v - (i.getBoundingClientRect().top + window.pageYOffset);
    p < 0 ? (p = 0) : p > s && (p = s), g < 0 ? (g = 0) : g > h && (g = h);
    var A = p / s,
      m = 1 - g / h;
    return { h: u.h, s: A, v: m, a: u.a, source: "hsv" };
  },
  gS = (function () {
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function bS(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function yS(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function mS(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var pc = (function (r) {
  mS(a, r);
  function a(u) {
    bS(this, a);
    var i = yS(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, u));
    return (
      (i.handleChange = function (c) {
        typeof i.props.onChange == "function" && i.throttle(i.props.onChange, vS(c, i.props.hsl, i.container), c);
      }),
      (i.handleMouseDown = function (c) {
        i.handleChange(c);
        var s = i.getContainerRenderWindow();
        s.addEventListener("mousemove", i.handleChange), s.addEventListener("mouseup", i.handleMouseUp);
      }),
      (i.handleMouseUp = function () {
        i.unbindEventListeners();
      }),
      (i.throttle = pS(function (c, s, h) {
        c(s, h);
      }, 50)),
      i
    );
  }
  return (
    gS(a, [
      {
        key: "componentWillUnmount",
        value: function () {
          this.throttle.cancel(), this.unbindEventListeners();
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
          i.removeEventListener("mousemove", this.handleChange), i.removeEventListener("mouseup", this.handleMouseUp);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this,
            c = this.props.style || {},
            s = c.color,
            h = c.white,
            d = c.black,
            v = c.pointer,
            p = c.circle,
            g = xe(
              {
                default: {
                  color: { absolute: "0px 0px 0px 0px", background: "hsl(" + this.props.hsl.h + ",100%, 50%)", borderRadius: this.props.radius },
                  white: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                  black: { absolute: "0px 0px 0px 0px", boxShadow: this.props.shadow, borderRadius: this.props.radius },
                  pointer: { position: "absolute", top: -(this.props.hsv.v * 100) + 100 + "%", left: this.props.hsv.s * 100 + "%", cursor: "default" },
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
                custom: { color: s, white: h, black: d, pointer: v, circle: p },
              },
              { custom: !!this.props.style }
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
        `
            ),
            S.createElement(
              "div",
              { style: g.white, className: "saturation-white" },
              S.createElement("div", { style: g.black, className: "saturation-black" }),
              S.createElement("div", { style: g.pointer }, this.props.pointer ? S.createElement(this.props.pointer, this.props) : S.createElement("div", { style: g.circle }))
            )
          );
        },
      },
    ]),
    a
  );
})(Ee.PureComponent || Ee.Component);
function AS(r, a) {
  for (var u = -1, i = r == null ? 0 : r.length; ++u < i && a(r[u], u, r) !== !1; );
  return r;
}
var xS = i8(Object.keys, Object),
  _S = Object.prototype,
  SS = _S.hasOwnProperty;
function ES(r) {
  if (!M2(r)) return xS(r);
  var a = [];
  for (var u in Object(r)) SS.call(r, u) && u != "constructor" && a.push(u);
  return a;
}
function D2(r) {
  return Wr(r) ? h8(r) : ES(r);
}
function CS(r, a) {
  return r && r8(r, a, D2);
}
function wS(r, a) {
  return function (u, i) {
    if (u == null) return u;
    if (!Wr(u)) return r(u, i);
    for (var c = u.length, s = -1, h = Object(u); ++s < c && i(h[s], s, h) !== !1; );
    return u;
  };
}
var g8 = wS(CS);
function TS(r) {
  return typeof r == "function" ? r : hc;
}
function OS(r, a) {
  var u = Lt(r) ? AS : g8;
  return u(r, TS(a));
}
var Vf = { exports: {} },
  Qv;
function MS() {
  return (
    Qv ||
      ((Qv = 1),
      (function (r) {
        (function (a) {
          var u = /^\s+/,
            i = /\s+$/,
            c = 0,
            s = a.round,
            h = a.min,
            d = a.max,
            v = a.random;
          function p(E, z) {
            if (((E = E || ""), (z = z || {}), E instanceof p)) return E;
            if (!(this instanceof p)) return new p(E, z);
            var _ = g(E);
            (this._originalInput = E),
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
              (this._tc_id = c++);
          }
          (p.prototype = {
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
                ne,
                Ce;
              return (
                (z = E.r / 255),
                (_ = E.g / 255),
                (I = E.b / 255),
                z <= 0.03928 ? ($ = z / 12.92) : ($ = a.pow((z + 0.055) / 1.055, 2.4)),
                _ <= 0.03928 ? (ne = _ / 12.92) : (ne = a.pow((_ + 0.055) / 1.055, 2.4)),
                I <= 0.03928 ? (Ce = I / 12.92) : (Ce = a.pow((I + 0.055) / 1.055, 2.4)),
                0.2126 * $ + 0.7152 * ne + 0.0722 * Ce
              );
            },
            setAlpha: function (E) {
              return (this._a = ce(E)), (this._roundA = s(100 * this._a) / 100), this;
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
              return this._a == 1 ? "hsv(" + z + ", " + _ + "%, " + I + "%)" : "hsva(" + z + ", " + _ + "%, " + I + "%, " + this._roundA + ")";
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
              return this._a == 1 ? "hsl(" + z + ", " + _ + "%, " + I + "%)" : "hsla(" + z + ", " + _ + "%, " + I + "%, " + this._roundA + ")";
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
              return this._a == 1 ? "rgb(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ")" : "rgba(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ", " + this._roundA + ")";
            },
            toPercentageRgb: function () {
              return { r: s(C(this._r, 255) * 100) + "%", g: s(C(this._g, 255) * 100) + "%", b: s(C(this._b, 255) * 100) + "%", a: this._a };
            },
            toPercentageRgbString: function () {
              return this._a == 1
                ? "rgb(" + s(C(this._r, 255) * 100) + "%, " + s(C(this._g, 255) * 100) + "%, " + s(C(this._b, 255) * 100) + "%)"
                : "rgba(" + s(C(this._r, 255) * 100) + "%, " + s(C(this._g, 255) * 100) + "%, " + s(C(this._b, 255) * 100) + "%, " + this._roundA + ")";
            },
            toName: function () {
              return this._a === 0 ? "transparent" : this._a < 1 ? !1 : K[R(this._r, this._g, this._b, !0)] || !1;
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
              return (this._r = _._r), (this._g = _._g), (this._b = _._b), this.setAlpha(_._a), this;
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
            });
          function g(E) {
            var z = { r: 0, g: 0, b: 0 },
              _ = 1,
              I = null,
              $ = null,
              ne = null,
              Ce = !1,
              Ue = !1;
            return (
              typeof E == "string" && (E = Gt(E)),
              typeof E == "object" &&
                (Ke(E.r) && Ke(E.g) && Ke(E.b)
                  ? ((z = A(E.r, E.g, E.b)), (Ce = !0), (Ue = String(E.r).substr(-1) === "%" ? "prgb" : "rgb"))
                  : Ke(E.h) && Ke(E.s) && Ke(E.v)
                  ? ((I = he(E.s)), ($ = he(E.v)), (z = O(E.h, I, $)), (Ce = !0), (Ue = "hsv"))
                  : Ke(E.h) && Ke(E.s) && Ke(E.l) && ((I = he(E.s)), (ne = he(E.l)), (z = x(E.h, I, ne)), (Ce = !0), (Ue = "hsl")),
                E.hasOwnProperty("a") && (_ = E.a)),
              (_ = ce(_)),
              { ok: Ce, format: E.format || Ue, r: h(255, d(z.r, 0)), g: h(255, d(z.g, 0)), b: h(255, d(z.b, 0)), a: _ }
            );
          }
          function A(E, z, _) {
            return { r: C(E, 255) * 255, g: C(z, 255) * 255, b: C(_, 255) * 255 };
          }
          function m(E, z, _) {
            (E = C(E, 255)), (z = C(z, 255)), (_ = C(_, 255));
            var I = d(E, z, _),
              $ = h(E, z, _),
              ne,
              Ce,
              Ue = (I + $) / 2;
            if (I == $) ne = Ce = 0;
            else {
              var je = I - $;
              switch (((Ce = Ue > 0.5 ? je / (2 - I - $) : je / (I + $)), I)) {
                case E:
                  ne = (z - _) / je + (z < _ ? 6 : 0);
                  break;
                case z:
                  ne = (_ - E) / je + 2;
                  break;
                case _:
                  ne = (E - z) / je + 4;
                  break;
              }
              ne /= 6;
            }
            return { h: ne, s: Ce, l: Ue };
          }
          function x(E, z, _) {
            var I, $, ne;
            (E = C(E, 360)), (z = C(z, 100)), (_ = C(_, 100));
            function Ce(Fe, $e, ut) {
              return ut < 0 && (ut += 1), ut > 1 && (ut -= 1), ut < 1 / 6 ? Fe + ($e - Fe) * 6 * ut : ut < 1 / 2 ? $e : ut < 2 / 3 ? Fe + ($e - Fe) * (2 / 3 - ut) * 6 : Fe;
            }
            if (z === 0) I = $ = ne = _;
            else {
              var Ue = _ < 0.5 ? _ * (1 + z) : _ + z - _ * z,
                je = 2 * _ - Ue;
              (I = Ce(je, Ue, E + 1 / 3)), ($ = Ce(je, Ue, E)), (ne = Ce(je, Ue, E - 1 / 3));
            }
            return { r: I * 255, g: $ * 255, b: ne * 255 };
          }
          function w(E, z, _) {
            (E = C(E, 255)), (z = C(z, 255)), (_ = C(_, 255));
            var I = d(E, z, _),
              $ = h(E, z, _),
              ne,
              Ce,
              Ue = I,
              je = I - $;
            if (((Ce = I === 0 ? 0 : je / I), I == $)) ne = 0;
            else {
              switch (I) {
                case E:
                  ne = (z - _) / je + (z < _ ? 6 : 0);
                  break;
                case z:
                  ne = (_ - E) / je + 2;
                  break;
                case _:
                  ne = (E - z) / je + 4;
                  break;
              }
              ne /= 6;
            }
            return { h: ne, s: Ce, v: Ue };
          }
          function O(E, z, _) {
            (E = C(E, 360) * 6), (z = C(z, 100)), (_ = C(_, 100));
            var I = a.floor(E),
              $ = E - I,
              ne = _ * (1 - z),
              Ce = _ * (1 - $ * z),
              Ue = _ * (1 - (1 - $) * z),
              je = I % 6,
              Fe = [_, Ce, ne, ne, Ue, _][je],
              $e = [Ue, _, _, Ce, ne, ne][je],
              ut = [ne, ne, Ue, _, _, Ce][je];
            return { r: Fe * 255, g: $e * 255, b: ut * 255 };
          }
          function R(E, z, _, I) {
            var $ = [ve(s(E).toString(16)), ve(s(z).toString(16)), ve(s(_).toString(16))];
            return I && $[0].charAt(0) == $[0].charAt(1) && $[1].charAt(0) == $[1].charAt(1) && $[2].charAt(0) == $[2].charAt(1) ? $[0].charAt(0) + $[1].charAt(0) + $[2].charAt(0) : $.join("");
          }
          function H(E, z, _, I, $) {
            var ne = [ve(s(E).toString(16)), ve(s(z).toString(16)), ve(s(_).toString(16)), ve(nt(I))];
            return $ && ne[0].charAt(0) == ne[0].charAt(1) && ne[1].charAt(0) == ne[1].charAt(1) && ne[2].charAt(0) == ne[2].charAt(1) && ne[3].charAt(0) == ne[3].charAt(1)
              ? ne[0].charAt(0) + ne[1].charAt(0) + ne[2].charAt(0) + ne[3].charAt(0)
              : ne.join("");
          }
          function D(E, z, _, I) {
            var $ = [ve(nt(I)), ve(s(E).toString(16)), ve(s(z).toString(16)), ve(s(_).toString(16))];
            return $.join("");
          }
          (p.equals = function (E, z) {
            return !E || !z ? !1 : p(E).toRgbString() == p(z).toRgbString();
          }),
            (p.random = function () {
              return p.fromRatio({ r: v(), g: v(), b: v() });
            });
          function L(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return (_.s -= z / 100), (_.s = P(_.s)), p(_);
          }
          function k(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return (_.s += z / 100), (_.s = P(_.s)), p(_);
          }
          function G(E) {
            return p(E).desaturate(100);
          }
          function Y(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return (_.l += z / 100), (_.l = P(_.l)), p(_);
          }
          function J(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toRgb();
            return (_.r = d(0, h(255, _.r - s(255 * -(z / 100))))), (_.g = d(0, h(255, _.g - s(255 * -(z / 100))))), (_.b = d(0, h(255, _.b - s(255 * -(z / 100))))), p(_);
          }
          function ue(E, z) {
            z = z === 0 ? 0 : z || 10;
            var _ = p(E).toHsl();
            return (_.l -= z / 100), (_.l = P(_.l)), p(_);
          }
          function fe(E, z) {
            var _ = p(E).toHsl(),
              I = (_.h + z) % 360;
            return (_.h = I < 0 ? 360 + I : I), p(_);
          }
          function ye(E) {
            var z = p(E).toHsl();
            return (z.h = (z.h + 180) % 360), p(z);
          }
          function le(E) {
            var z = p(E).toHsl(),
              _ = z.h;
            return [p(E), p({ h: (_ + 120) % 360, s: z.s, l: z.l }), p({ h: (_ + 240) % 360, s: z.s, l: z.l })];
          }
          function _e(E) {
            var z = p(E).toHsl(),
              _ = z.h;
            return [p(E), p({ h: (_ + 90) % 360, s: z.s, l: z.l }), p({ h: (_ + 180) % 360, s: z.s, l: z.l }), p({ h: (_ + 270) % 360, s: z.s, l: z.l })];
          }
          function me(E) {
            var z = p(E).toHsl(),
              _ = z.h;
            return [p(E), p({ h: (_ + 72) % 360, s: z.s, l: z.l }), p({ h: (_ + 216) % 360, s: z.s, l: z.l })];
          }
          function Ae(E, z, _) {
            (z = z || 6), (_ = _ || 30);
            var I = p(E).toHsl(),
              $ = 360 / _,
              ne = [p(E)];
            for (I.h = (I.h - (($ * z) >> 1) + 720) % 360; --z; ) (I.h = (I.h + $) % 360), ne.push(p(I));
            return ne;
          }
          function Se(E, z) {
            z = z || 6;
            for (var _ = p(E).toHsv(), I = _.h, $ = _.s, ne = _.v, Ce = [], Ue = 1 / z; z--; ) Ce.push(p({ h: I, s: $, v: ne })), (ne = (ne + Ue) % 1);
            return Ce;
          }
          (p.mix = function (E, z, _) {
            _ = _ === 0 ? 0 : _ || 50;
            var I = p(E).toRgb(),
              $ = p(z).toRgb(),
              ne = _ / 100,
              Ce = { r: ($.r - I.r) * ne + I.r, g: ($.g - I.g) * ne + I.g, b: ($.b - I.b) * ne + I.b, a: ($.a - I.a) * ne + I.a };
            return p(Ce);
          }),
            (p.readability = function (E, z) {
              var _ = p(E),
                I = p(z);
              return (a.max(_.getLuminance(), I.getLuminance()) + 0.05) / (a.min(_.getLuminance(), I.getLuminance()) + 0.05);
            }),
            (p.isReadable = function (E, z, _) {
              var I = p.readability(E, z),
                $,
                ne;
              switch (((ne = !1), ($ = kt(_)), $.level + $.size)) {
                case "AAsmall":
                case "AAAlarge":
                  ne = I >= 4.5;
                  break;
                case "AAlarge":
                  ne = I >= 3;
                  break;
                case "AAAsmall":
                  ne = I >= 7;
                  break;
              }
              return ne;
            }),
            (p.mostReadable = function (E, z, _) {
              var I = null,
                $ = 0,
                ne,
                Ce,
                Ue,
                je;
              (_ = _ || {}), (Ce = _.includeFallbackColors), (Ue = _.level), (je = _.size);
              for (var Fe = 0; Fe < z.length; Fe++) (ne = p.readability(E, z[Fe])), ne > $ && (($ = ne), (I = p(z[Fe])));
              return p.isReadable(E, I, { level: Ue, size: je }) || !Ce ? I : ((_.includeFallbackColors = !1), p.mostReadable(E, ["#fff", "#000"], _));
            });
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
            K = (p.hexNames = re(U));
          function re(E) {
            var z = {};
            for (var _ in E) E.hasOwnProperty(_) && (z[E[_]] = _);
            return z;
          }
          function ce(E) {
            return (E = parseFloat(E)), (isNaN(E) || E < 0 || E > 1) && (E = 1), E;
          }
          function C(E, z) {
            te(E) && (E = "100%");
            var _ = oe(E);
            return (E = h(z, d(0, parseFloat(E)))), _ && (E = parseInt(E * z, 10) / 100), a.abs(E - z) < 1e-6 ? 1 : (E % z) / parseFloat(z);
          }
          function P(E) {
            return h(1, d(0, E));
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
            return E <= 1 && (E = E * 100 + "%"), E;
          }
          function nt(E) {
            return a.round(parseFloat(E) * 255).toString(16);
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
            if (U[E]) (E = U[E]), (z = !0);
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
              ? { r: W(_[1] + "" + _[1]), g: W(_[2] + "" + _[2]), b: W(_[3] + "" + _[3]), a: De(_[4] + "" + _[4]), format: z ? "name" : "hex8" }
              : (_ = Xe.hex3.exec(E))
              ? { r: W(_[1] + "" + _[1]), g: W(_[2] + "" + _[2]), b: W(_[3] + "" + _[3]), format: z ? "name" : "hex" }
              : !1;
          }
          function kt(E) {
            var z, _;
            return (
              (E = E || { level: "AA", size: "small" }), (z = (E.level || "AA").toUpperCase()), (_ = (E.size || "small").toLowerCase()), z !== "AA" && z !== "AAA" && (z = "AA"), _ !== "small" && _ !== "large" && (_ = "small"), { level: z, size: _ }
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
var Uv = function (a) {
    var u = ["r", "g", "b", "a", "h", "s", "l", "v"],
      i = 0,
      c = 0;
    return (
      OS(u, function (s) {
        if (a[s] && ((i += 1), isNaN(a[s]) || (c += 1), s === "s" || s === "l")) {
          var h = /^\d+%$/;
          h.test(a[s]) && (c += 1);
        }
      }),
      i === c ? a : !1
    );
  },
  oi = function (a, u) {
    var i = a.hex ? Ju(a.hex) : Ju(a),
      c = i.toHsl(),
      s = i.toHsv(),
      h = i.toRgb(),
      d = i.toHex();
    c.s === 0 && ((c.h = u || 0), (s.h = u || 0));
    var v = d === "000000" && h.a === 0;
    return { hsl: c, hex: v ? "transparent" : "#" + d, rgb: h, hsv: s, oldHue: a.h || u || c.h, source: a.source };
  },
  ca = function (a) {
    if (a === "transparent") return !0;
    var u = String(a).charAt(0) === "#" ? 1 : 0;
    return a.length !== 4 + u && a.length < 7 + u && Ju(a).isValid();
  },
  H2 = function (a) {
    if (!a) return "#fff";
    var u = oi(a);
    if (u.hex === "transparent") return "rgba(0,0,0,0.4)";
    var i = (u.rgb.r * 299 + u.rgb.g * 587 + u.rgb.b * 114) / 1e3;
    return i >= 128 ? "#000" : "#fff";
  },
  Yf = function (a, u) {
    var i = a.replace("°", "");
    return Ju(u + " (" + i + ")")._ok;
  },
  ri =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  zS = (function () {
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function qS(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function DS(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function HS(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var Rt = function (a) {
    var u = (function (i) {
      HS(c, i);
      function c(s) {
        qS(this, c);
        var h = DS(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
        return (
          (h.handleChange = function (d, v) {
            var p = Uv(d);
            if (p) {
              var g = oi(d, d.h || h.state.oldHue);
              h.setState(g), h.props.onChangeComplete && h.debounce(h.props.onChangeComplete, g, v), h.props.onChange && h.props.onChange(g, v);
            }
          }),
          (h.handleSwatchHover = function (d, v) {
            var p = Uv(d);
            if (p) {
              var g = oi(d, d.h || h.state.oldHue);
              h.props.onSwatchHover && h.props.onSwatchHover(g, v);
            }
          }),
          (h.state = ri({}, oi(s.color, 0))),
          (h.debounce = v8(function (d, v, p) {
            d(v, p);
          }, 100)),
          h
        );
      }
      return (
        zS(
          c,
          [
            {
              key: "render",
              value: function () {
                var h = {};
                return this.props.onSwatchHover && (h.onSwatchHover = this.handleSwatchHover), S.createElement(a, ri({}, this.props, this.state, { onChange: this.handleChange }, h));
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (h, d) {
                return ri({}, oi(h.color, d.oldHue));
              },
            },
          ]
        ),
        c
      );
    })(Ee.PureComponent || Ee.Component);
    return (u.propTypes = ri({}, a.propTypes)), (u.defaultProps = ri({}, a.defaultProps, { color: { h: 250, s: 0.5, l: 0.2, a: 1 } })), u;
  },
  jS =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  BS = (function () {
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function NS(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function Lv(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function QS(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var US = function (a) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (i) {
      QS(c, i);
      function c() {
        var s, h, d, v;
        NS(this, c);
        for (var p = arguments.length, g = Array(p), A = 0; A < p; A++) g[A] = arguments[A];
        return (
          (v =
            ((h = ((d = Lv(this, (s = c.__proto__ || Object.getPrototypeOf(c)).call.apply(s, [this].concat(g)))), d)),
            (d.state = { focus: !1 }),
            (d.handleFocus = function () {
              return d.setState({ focus: !0 });
            }),
            (d.handleBlur = function () {
              return d.setState({ focus: !1 });
            }),
            h)),
          Lv(d, v)
        );
      }
      return (
        BS(c, [
          {
            key: "render",
            value: function () {
              return S.createElement(u, { onFocus: this.handleFocus, onBlur: this.handleBlur }, S.createElement(a, jS({}, this.props, this.state)));
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
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  LS = 13,
  GS = function (a) {
    var u = a.color,
      i = a.style,
      c = a.onClick,
      s = c === void 0 ? function () {} : c,
      h = a.onHover,
      d = a.title,
      v = d === void 0 ? u : d,
      p = a.children,
      g = a.focus,
      A = a.focusStyle,
      m = A === void 0 ? {} : A,
      x = u === "transparent",
      w = xe({ default: { swatch: Gv({ background: u, height: "100%", width: "100%", cursor: "pointer", position: "relative", outline: "none" }, i, g ? m : {}) } }),
      O = function (k) {
        return s(u, k);
      },
      R = function (k) {
        return k.keyCode === LS && s(u, k);
      },
      H = function (k) {
        return h(u, k);
      },
      D = {};
    return (
      h && (D.onMouseOver = H), S.createElement("div", Gv({ style: w.swatch, onClick: O, title: v, tabIndex: 0, onKeyDown: R }, D), p, x && S.createElement(Jr, { borderRadius: w.swatch.borderRadius, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" }))
    );
  };
const ja = US(GS);
var kS = function (a) {
    var u = a.direction,
      i = xe(
        {
          default: { picker: { width: "18px", height: "18px", borderRadius: "50%", transform: "translate(-9px, -1px)", backgroundColor: "rgb(248, 248, 248)", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)" } },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: u === "vertical" }
      );
    return S.createElement("div", { style: i.picker });
  },
  VS =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  b8 = function (a) {
    var u = a.rgb,
      i = a.hsl,
      c = a.width,
      s = a.height,
      h = a.onChange,
      d = a.direction,
      v = a.style,
      p = a.renderers,
      g = a.pointer,
      A = a.className,
      m = A === void 0 ? "" : A,
      x = xe({ default: { picker: { position: "relative", width: c, height: s }, alpha: { radius: "2px", style: v } } });
    return S.createElement("div", { style: x.picker, className: "alpha-picker " + m }, S.createElement(w2, VS({}, x.alpha, { rgb: u, hsl: i, pointer: g, renderers: p, onChange: h, direction: d })));
  };
b8.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: kS };
Rt(b8);
function y8(r, a) {
  for (var u = -1, i = r == null ? 0 : r.length, c = Array(i); ++u < i; ) c[u] = a(r[u], u, r);
  return c;
}
var YS = "__lodash_hash_undefined__";
function XS(r) {
  return this.__data__.set(r, YS), this;
}
function ZS(r) {
  return this.__data__.has(r);
}
function Iu(r) {
  var a = -1,
    u = r == null ? 0 : r.length;
  for (this.__data__ = new Dn(); ++a < u; ) this.add(r[a]);
}
Iu.prototype.add = Iu.prototype.push = XS;
Iu.prototype.has = ZS;
function KS(r, a) {
  for (var u = -1, i = r == null ? 0 : r.length; ++u < i; ) if (a(r[u], u, r)) return !0;
  return !1;
}
function PS(r, a) {
  return r.has(a);
}
var FS = 1,
  $S = 2;
function m8(r, a, u, i, c, s) {
  var h = u & FS,
    d = r.length,
    v = a.length;
  if (d != v && !(h && v > d)) return !1;
  var p = s.get(r),
    g = s.get(a);
  if (p && g) return p == a && g == r;
  var A = -1,
    m = !0,
    x = u & $S ? new Iu() : void 0;
  for (s.set(r, a), s.set(a, r); ++A < d; ) {
    var w = r[A],
      O = a[A];
    if (i) var R = h ? i(O, w, A, a, r, s) : i(w, O, A, r, a, s);
    if (R !== void 0) {
      if (R) continue;
      m = !1;
      break;
    }
    if (x) {
      if (
        !KS(a, function (H, D) {
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
  return s.delete(r), s.delete(a), m;
}
function JS(r) {
  var a = -1,
    u = Array(r.size);
  return (
    r.forEach(function (i, c) {
      u[++a] = [c, i];
    }),
    u
  );
}
function IS(r) {
  var a = -1,
    u = Array(r.size);
  return (
    r.forEach(function (i) {
      u[++a] = i;
    }),
    u
  );
}
var WS = 1,
  eE = 2,
  tE = "[object Boolean]",
  nE = "[object Date]",
  aE = "[object Error]",
  rE = "[object Map]",
  lE = "[object Number]",
  iE = "[object RegExp]",
  uE = "[object Set]",
  cE = "[object String]",
  oE = "[object Symbol]",
  sE = "[object ArrayBuffer]",
  fE = "[object DataView]",
  kv = la ? la.prototype : void 0,
  Xf = kv ? kv.valueOf : void 0;
function hE(r, a, u, i, c, s, h) {
  switch (u) {
    case fE:
      if (r.byteLength != a.byteLength || r.byteOffset != a.byteOffset) return !1;
      (r = r.buffer), (a = a.buffer);
    case sE:
      return !(r.byteLength != a.byteLength || !s(new Pu(r), new Pu(a)));
    case tE:
    case nE:
    case lE:
      return bi(+r, +a);
    case aE:
      return r.name == a.name && r.message == a.message;
    case iE:
    case cE:
      return r == a + "";
    case rE:
      var d = JS;
    case uE:
      var v = i & WS;
      if ((d || (d = IS), r.size != a.size && !v)) return !1;
      var p = h.get(r);
      if (p) return p == a;
      (i |= eE), h.set(r, a);
      var g = m8(d(r), d(a), i, c, s, h);
      return h.delete(r), g;
    case oE:
      if (Xf) return Xf.call(r) == Xf.call(a);
  }
  return !1;
}
function dE(r, a) {
  for (var u = -1, i = a.length, c = r.length; ++u < i; ) r[c + u] = a[u];
  return r;
}
function pE(r, a, u) {
  var i = a(r);
  return Lt(r) ? i : dE(i, u(r));
}
function vE(r, a) {
  for (var u = -1, i = r == null ? 0 : r.length, c = 0, s = []; ++u < i; ) {
    var h = r[u];
    a(h, u, r) && (s[c++] = h);
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
            vE(Vv(r), function (a) {
              return yE.call(r, a);
            }));
      }
    : gE;
function Yv(r) {
  return pE(r, D2, mE);
}
var AE = 1,
  xE = Object.prototype,
  _E = xE.hasOwnProperty;
function SE(r, a, u, i, c, s) {
  var h = u & AE,
    d = Yv(r),
    v = d.length,
    p = Yv(a),
    g = p.length;
  if (v != g && !h) return !1;
  for (var A = v; A--; ) {
    var m = d[A];
    if (!(h ? m in a : _E.call(a, m))) return !1;
  }
  var x = s.get(r),
    w = s.get(a);
  if (x && w) return x == a && w == r;
  var O = !0;
  s.set(r, a), s.set(a, r);
  for (var R = h; ++A < v; ) {
    m = d[A];
    var H = r[m],
      D = a[m];
    if (i) var L = h ? i(D, H, m, a, r, s) : i(H, D, m, r, a, s);
    if (!(L === void 0 ? H === D || c(H, D, u, i, s) : L)) {
      O = !1;
      break;
    }
    R || (R = m == "constructor");
  }
  if (O && !R) {
    var k = r.constructor,
      G = a.constructor;
    k != G && "constructor" in r && "constructor" in a && !(typeof k == "function" && k instanceof k && typeof G == "function" && G instanceof G) && (O = !1);
  }
  return s.delete(r), s.delete(a), O;
}
var Wf = Ha(cn, "DataView"),
  e2 = Ha(cn, "Promise"),
  t2 = Ha(cn, "Set"),
  n2 = Ha(cn, "WeakMap"),
  Xv = "[object Map]",
  EE = "[object Object]",
  Zv = "[object Promise]",
  Kv = "[object Set]",
  Pv = "[object WeakMap]",
  Fv = "[object DataView]",
  CE = Da(Wf),
  wE = Da(hi),
  TE = Da(e2),
  OE = Da(t2),
  ME = Da(n2),
  aa = qa;
((Wf && aa(new Wf(new ArrayBuffer(1))) != Fv) || (hi && aa(new hi()) != Xv) || (e2 && aa(e2.resolve()) != Zv) || (t2 && aa(new t2()) != Kv) || (n2 && aa(new n2()) != Pv)) &&
  (aa = function (r) {
    var a = qa(r),
      u = a == EE ? r.constructor : void 0,
      i = u ? Da(u) : "";
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
    return a;
  });
var RE = 1,
  $v = "[object Arguments]",
  Jv = "[object Array]",
  Nu = "[object Object]",
  zE = Object.prototype,
  Iv = zE.hasOwnProperty;
function qE(r, a, u, i, c, s) {
  var h = Lt(r),
    d = Lt(a),
    v = h ? Jv : aa(r),
    p = d ? Jv : aa(a);
  (v = v == $v ? Nu : v), (p = p == $v ? Nu : p);
  var g = v == Nu,
    A = p == Nu,
    m = v == p;
  if (m && $u(r)) {
    if (!$u(a)) return !1;
    (h = !0), (g = !1);
  }
  if (m && !g) return s || (s = new pn()), h || z2(r) ? m8(r, a, u, i, c, s) : hE(r, a, v, u, i, c, s);
  if (!(u & RE)) {
    var x = g && Iv.call(r, "__wrapped__"),
      w = A && Iv.call(a, "__wrapped__");
    if (x || w) {
      var O = x ? r.value() : r,
        R = w ? a.value() : a;
      return s || (s = new pn()), c(O, R, u, i, s);
    }
  }
  return m ? (s || (s = new pn()), SE(r, a, u, i, c, s)) : !1;
}
function j2(r, a, u, i, c) {
  return r === a ? !0 : r == null || a == null || (!ia(r) && !ia(a)) ? r !== r && a !== a : qE(r, a, u, i, j2, c);
}
var DE = 1,
  HE = 2;
function jE(r, a, u, i) {
  var c = u.length,
    s = c;
  if (r == null) return !s;
  for (r = Object(r); c--; ) {
    var h = u[c];
    if (h[2] ? h[1] !== r[h[0]] : !(h[0] in r)) return !1;
  }
  for (; ++c < s; ) {
    h = u[c];
    var d = h[0],
      v = r[d],
      p = h[1];
    if (h[2]) {
      if (v === void 0 && !(d in r)) return !1;
    } else {
      var g = new pn(),
        A;
      if (!(A === void 0 ? j2(p, v, DE | HE, i, g) : A)) return !1;
    }
  }
  return !0;
}
function A8(r) {
  return r === r && !en(r);
}
function BE(r) {
  for (var a = D2(r), u = a.length; u--; ) {
    var i = a[u],
      c = r[i];
    a[u] = [i, c, A8(c)];
  }
  return a;
}
function x8(r, a) {
  return function (u) {
    return u == null ? !1 : u[r] === a && (a !== void 0 || r in Object(u));
  };
}
function NE(r) {
  var a = BE(r);
  return a.length == 1 && a[0][2]
    ? x8(a[0][0], a[0][1])
    : function (u) {
        return u === r || jE(u, r, a);
      };
}
var QE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  UE = /^\w*$/;
function B2(r, a) {
  if (Lt(r)) return !1;
  var u = typeof r;
  return u == "number" || u == "symbol" || u == "boolean" || r == null || dc(r) ? !0 : UE.test(r) || !QE.test(r) || (a != null && r in Object(a));
}
var LE = "Expected a function";
function N2(r, a) {
  if (typeof r != "function" || (a != null && typeof a != "function")) throw new TypeError(LE);
  var u = function () {
    var i = arguments,
      c = a ? a.apply(this, i) : i[0],
      s = u.cache;
    if (s.has(c)) return s.get(c);
    var h = r.apply(this, i);
    return (u.cache = s.set(c, h) || s), h;
  };
  return (u.cache = new (N2.Cache || Dn)()), u;
}
N2.Cache = Dn;
var GE = 500;
function kE(r) {
  var a = N2(r, function (i) {
      return u.size === GE && u.clear(), i;
    }),
    u = a.cache;
  return a;
}
var VE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  YE = /\\(\\)?/g,
  XE = kE(function (r) {
    var a = [];
    return (
      r.charCodeAt(0) === 46 && a.push(""),
      r.replace(VE, function (u, i, c, s) {
        a.push(c ? s.replace(YE, "$1") : i || u);
      }),
      a
    );
  }),
  Wv = la ? la.prototype : void 0,
  eg = Wv ? Wv.toString : void 0;
function _8(r) {
  if (typeof r == "string") return r;
  if (Lt(r)) return y8(r, _8) + "";
  if (dc(r)) return eg ? eg.call(r) : "";
  var a = r + "";
  return a == "0" && 1 / r == -1 / 0 ? "-0" : a;
}
function ZE(r) {
  return r == null ? "" : _8(r);
}
function S8(r, a) {
  return Lt(r) ? r : B2(r, a) ? [r] : XE(ZE(r));
}
function vc(r) {
  if (typeof r == "string" || dc(r)) return r;
  var a = r + "";
  return a == "0" && 1 / r == -1 / 0 ? "-0" : a;
}
function E8(r, a) {
  a = S8(a, r);
  for (var u = 0, i = a.length; r != null && u < i; ) r = r[vc(a[u++])];
  return u && u == i ? r : void 0;
}
function KE(r, a, u) {
  var i = r == null ? void 0 : E8(r, a);
  return i === void 0 ? u : i;
}
function PE(r, a) {
  return r != null && a in Object(r);
}
function FE(r, a, u) {
  a = S8(a, r);
  for (var i = -1, c = a.length, s = !1; ++i < c; ) {
    var h = vc(a[i]);
    if (!(s = r != null && u(r, h))) break;
    r = r[h];
  }
  return s || ++i != c ? s : ((c = r == null ? 0 : r.length), !!c && R2(c) && q2(h, c) && (Lt(r) || Fu(r)));
}
function $E(r, a) {
  return r != null && FE(r, a, PE);
}
var JE = 1,
  IE = 2;
function WE(r, a) {
  return B2(r) && A8(a)
    ? x8(vc(r), a)
    : function (u) {
        var i = KE(u, r);
        return i === void 0 && i === a ? $E(u, r) : j2(a, i, JE | IE);
      };
}
function eC(r) {
  return function (a) {
    return a?.[r];
  };
}
function tC(r) {
  return function (a) {
    return E8(a, r);
  };
}
function nC(r) {
  return B2(r) ? eC(vc(r)) : tC(r);
}
function aC(r) {
  return typeof r == "function" ? r : r == null ? hc : typeof r == "object" ? (Lt(r) ? WE(r[0], r[1]) : NE(r)) : nC(r);
}
function rC(r, a) {
  var u = -1,
    i = Wr(r) ? Array(r.length) : [];
  return (
    g8(r, function (c, s, h) {
      i[++u] = a(c, s, h);
    }),
    i
  );
}
function Ba(r, a) {
  var u = Lt(r) ? y8 : rC;
  return u(r, aC(a));
}
var lC = function (a) {
    var u = a.colors,
      i = a.onClick,
      c = a.onSwatchHover,
      s = xe({ default: { swatches: { marginRight: "-10px" }, swatch: { width: "22px", height: "22px", float: "left", marginRight: "10px", marginBottom: "10px", borderRadius: "4px" }, clear: { clear: "both" } } });
    return S.createElement(
      "div",
      { style: s.swatches },
      Ba(u, function (h) {
        return S.createElement(ja, { key: h, color: h, style: s.swatch, onClick: i, onHover: c, focusStyle: { boxShadow: "0 0 4px " + h } });
      }),
      S.createElement("div", { style: s.clear })
    );
  },
  Q2 = function (a) {
    var u = a.onChange,
      i = a.onSwatchHover,
      c = a.hex,
      s = a.colors,
      h = a.width,
      d = a.triangle,
      v = a.styles,
      p = v === void 0 ? {} : v,
      g = a.className,
      A = g === void 0 ? "" : g,
      m = c === "transparent",
      x = function (R, H) {
        ca(R) && u({ hex: R, source: "hex" }, H);
      },
      w = xe(
        Mt(
          {
            default: {
              card: { width: h, background: "#fff", boxShadow: "0 1px rgba(0,0,0,.1)", borderRadius: "6px", position: "relative" },
              head: { height: "110px", background: c, borderRadius: "6px 6px 0 0", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
              body: { padding: "10px" },
              label: { fontSize: "18px", color: H2(c), position: "relative" },
              triangle: { width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 10px 10px 10px", borderColor: "transparent transparent " + c + " transparent", position: "absolute", top: "-10px", left: "50%", marginLeft: "-10px" },
              input: { width: "100%", fontSize: "12px", color: "#666", border: "0px", outline: "none", height: "22px", boxShadow: "inset 0 0 0 1px #ddd", borderRadius: "4px", padding: "0 7px", boxSizing: "border-box" },
            },
            "hide-triangle": { triangle: { display: "none" } },
          },
          p
        ),
        { "hide-triangle": d === "hide" }
      );
    return S.createElement(
      "div",
      { style: w.card, className: "block-picker " + A },
      S.createElement("div", { style: w.triangle }),
      S.createElement("div", { style: w.head }, m && S.createElement(Jr, { borderRadius: "6px 6px 0 0" }), S.createElement("div", { style: w.label }, c)),
      S.createElement("div", { style: w.body }, S.createElement(lC, { colors: s, onClick: x, onSwatchHover: i }), S.createElement(ze, { style: { input: w.input }, value: c, onChange: x }))
    );
  };
Q2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), colors: ee.arrayOf(ee.string), triangle: ee.oneOf(["top", "hide"]), styles: ee.object };
Q2.defaultProps = { width: 170, colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"], triangle: "top", styles: {} };
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
  C8 = function (a) {
    var u = a.color,
      i = a.onClick,
      c = a.onSwatchHover,
      s = a.hover,
      h = a.active,
      d = a.circleSize,
      v = a.circleSpacing,
      p = xe(
        {
          default: {
            swatch: { width: d, height: d, marginRight: v, marginBottom: v, transform: "scale(1)", transition: "100ms transform ease" },
            Swatch: { borderRadius: "50%", background: "transparent", boxShadow: "inset 0 0 0 " + (d / 2 + 1) + "px " + u, transition: "100ms box-shadow ease" },
          },
          hover: { swatch: { transform: "scale(1.2)" } },
          active: { Swatch: { boxShadow: "inset 0 0 0 3px " + u } },
        },
        { hover: s, active: h }
      );
    return S.createElement("div", { style: p.swatch }, S.createElement(ja, { style: p.Swatch, color: u, onClick: i, onHover: c, focusStyle: { boxShadow: p.Swatch.boxShadow + ", 0 0 5px " + u } }));
  };
C8.defaultProps = { circleSize: 28, circleSpacing: 14 };
const iC = C2.handleHover(C8);
var U2 = function (a) {
  var u = a.width,
    i = a.onChange,
    c = a.onSwatchHover,
    s = a.colors,
    h = a.hex,
    d = a.circleSize,
    v = a.styles,
    p = v === void 0 ? {} : v,
    g = a.circleSpacing,
    A = a.className,
    m = A === void 0 ? "" : A,
    x = xe(Mt({ default: { card: { width: u, display: "flex", flexWrap: "wrap", marginRight: -g, marginBottom: -g } } }, p)),
    w = function (R, H) {
      return i({ hex: R, source: "hex" }, H);
    };
  return S.createElement(
    "div",
    { style: x.card, className: "circle-picker " + m },
    Ba(s, function (O) {
      return S.createElement(iC, { key: O, color: O, onClick: w, onSwatchHover: c, active: h === O.toLowerCase(), circleSize: d, circleSpacing: g });
    })
  );
};
U2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), circleSize: ee.number, circleSpacing: ee.number, styles: ee.object };
U2.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [zr[500], qr[500], Dr[500], Hr[500], jr[500], Br[500], Nr[500], Qr[500], Ur[500], si[500], Lr[500], Gr[500], kr[500], Vr[500], Yr[500], Xr[500], Zr[500], Kr[500]],
  styles: {},
};
const uC = Rt(U2);
function tg(r) {
  return r === void 0;
}
var Qu = {},
  ng;
function cC() {
  if (ng) return Qu;
  (ng = 1), Object.defineProperty(Qu, "__esModule", { value: !0 });
  var r =
      Object.assign ||
      function (h) {
        for (var d = 1; d < arguments.length; d++) {
          var v = arguments[d];
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (h[p] = v[p]);
        }
        return h;
      },
    a = ua(),
    u = i(a);
  function i(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function c(h, d) {
    var v = {};
    for (var p in h) d.indexOf(p) >= 0 || (Object.prototype.hasOwnProperty.call(h, p) && (v[p] = h[p]));
    return v;
  }
  var s = 24;
  return (
    (Qu.default = function (h) {
      var d = h.fill,
        v = d === void 0 ? "currentColor" : d,
        p = h.width,
        g = p === void 0 ? s : p,
        A = h.height,
        m = A === void 0 ? s : A,
        x = h.style,
        w = x === void 0 ? {} : x,
        O = c(h, ["fill", "width", "height", "style"]);
      return u.default.createElement(
        "svg",
        r({ viewBox: "0 0 " + s + " " + s, style: r({ fill: v, width: g, height: m }, w) }, O),
        u.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" })
      );
    }),
    Qu
  );
}
var oC = cC();
const sC = Fr(oC);
var fC = (function () {
  function r(a, u) {
    for (var i = 0; i < u.length; i++) {
      var c = u[i];
      (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }
  return function (a, u, i) {
    return u && r(a.prototype, u), i && r(a, i), a;
  };
})();
function hC(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function dC(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function pC(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var w8 = (function (r) {
  pC(a, r);
  function a(u) {
    hC(this, a);
    var i = dC(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
    return (
      (i.toggleViews = function () {
        i.state.view === "hex" ? i.setState({ view: "rgb" }) : i.state.view === "rgb" ? i.setState({ view: "hsl" }) : i.state.view === "hsl" && (i.props.hsl.a === 1 ? i.setState({ view: "hex" }) : i.setState({ view: "rgb" }));
      }),
      (i.handleChange = function (c, s) {
        c.hex
          ? ca(c.hex) && i.props.onChange({ hex: c.hex, source: "hex" }, s)
          : c.r || c.g || c.b
          ? i.props.onChange({ r: c.r || i.props.rgb.r, g: c.g || i.props.rgb.g, b: c.b || i.props.rgb.b, source: "rgb" }, s)
          : c.a
          ? (c.a < 0 ? (c.a = 0) : c.a > 1 && (c.a = 1), i.props.onChange({ h: i.props.hsl.h, s: i.props.hsl.s, l: i.props.hsl.l, a: Math.round(c.a * 100) / 100, source: "rgb" }, s))
          : (c.h || c.s || c.l) &&
            (typeof c.s == "string" && c.s.includes("%") && (c.s = c.s.replace("%", "")),
            typeof c.l == "string" && c.l.includes("%") && (c.l = c.l.replace("%", "")),
            c.s == 1 ? (c.s = 0.01) : c.l == 1 && (c.l = 0.01),
            i.props.onChange({ h: c.h || i.props.hsl.h, s: Number(tg(c.s) ? i.props.hsl.s : c.s), l: Number(tg(c.l) ? i.props.hsl.l : c.l), source: "hsl" }, s));
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
      a,
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
                    iconHighlight: { position: "absolute", width: "24px", height: "28px", background: "#eee", borderRadius: "4px", top: "10px", left: "12px", display: "none" },
                    input: { fontSize: "11px", color: "#333", width: "100%", borderRadius: "2px", border: "none", boxShadow: "inset 0 0 0 1px #dadada", height: "21px", textAlign: "center" },
                    label: { textTransform: "uppercase", fontSize: "11px", lineHeight: "11px", color: "#969696", textAlign: "center", display: "block", marginTop: "12px" },
                    svg: { fill: "#333", width: "24px", height: "24px", border: "1px transparent solid", borderRadius: "5px" },
                  },
                  disableAlpha: { alpha: { display: "none" } },
                },
                this.props,
                this.state
              ),
              s = void 0;
            return (
              this.state.view === "hex"
                ? (s = S.createElement(
                    "div",
                    { style: c.fields, className: "flexbox-fix" },
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "hex", value: this.props.hex, onChange: this.handleChange }))
                  ))
                : this.state.view === "rgb"
                ? (s = S.createElement(
                    "div",
                    { style: c.fields, className: "flexbox-fix" },
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "r", value: this.props.rgb.r, onChange: this.handleChange })),
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "g", value: this.props.rgb.g, onChange: this.handleChange })),
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "b", value: this.props.rgb.b, onChange: this.handleChange })),
                    S.createElement("div", { style: c.alpha }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "a", value: this.props.rgb.a, arrowOffset: 0.01, onChange: this.handleChange }))
                  ))
                : this.state.view === "hsl" &&
                  (s = S.createElement(
                    "div",
                    { style: c.fields, className: "flexbox-fix" },
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "h", value: Math.round(this.props.hsl.h), onChange: this.handleChange })),
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "s", value: Math.round(this.props.hsl.s * 100) + "%", onChange: this.handleChange })),
                    S.createElement("div", { style: c.field }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "l", value: Math.round(this.props.hsl.l * 100) + "%", onChange: this.handleChange })),
                    S.createElement("div", { style: c.alpha }, S.createElement(ze, { style: { input: c.input, label: c.label }, label: "a", value: this.props.hsl.a, arrowOffset: 0.01, onChange: this.handleChange }))
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
                    S.createElement(sC, { style: c.svg, onMouseOver: this.showHighlight, onMouseEnter: this.showHighlight, onMouseOut: this.hideHighlight })
                  )
                )
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
      ]
    ),
    a
  );
})(S.Component);
w8.defaultProps = { view: "hex" };
var ag = function () {
    var a = xe({ default: { picker: { width: "12px", height: "12px", borderRadius: "6px", transform: "translate(-6px, -1px)", backgroundColor: "rgb(248, 248, 248)", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)" } } });
    return S.createElement("div", { style: a.picker });
  },
  vC = function () {
    var a = xe({ default: { picker: { width: "12px", height: "12px", borderRadius: "6px", boxShadow: "inset 0 0 0 1px #fff", transform: "translate(-6px, -6px)" } } });
    return S.createElement("div", { style: a.picker });
  },
  L2 = function (a) {
    var u = a.width,
      i = a.onChange,
      c = a.disableAlpha,
      s = a.rgb,
      h = a.hsl,
      d = a.hsv,
      v = a.hex,
      p = a.renderers,
      g = a.styles,
      A = g === void 0 ? {} : g,
      m = a.className,
      x = m === void 0 ? "" : m,
      w = a.defaultView,
      O = xe(
        Mt(
          {
            default: {
              picker: { width: u, background: "#fff", borderRadius: "2px", boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)", boxSizing: "initial", fontFamily: "Menlo" },
              saturation: { width: "100%", paddingBottom: "55%", position: "relative", borderRadius: "2px 2px 0 0", overflow: "hidden" },
              Saturation: { radius: "2px 2px 0 0" },
              body: { padding: "16px 16px 12px" },
              controls: { display: "flex" },
              color: { width: "32px" },
              swatch: { marginTop: "6px", width: "16px", height: "16px", borderRadius: "8px", position: "relative", overflow: "hidden" },
              active: { absolute: "0px 0px 0px 0px", borderRadius: "8px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)", background: "rgba(" + s.r + ", " + s.g + ", " + s.b + ", " + s.a + ")", zIndex: "2" },
              toggles: { flex: "1" },
              hue: { height: "10px", position: "relative", marginBottom: "8px" },
              Hue: { radius: "2px" },
              alpha: { height: "10px", position: "relative" },
              Alpha: { radius: "2px" },
            },
            disableAlpha: { color: { width: "22px" }, alpha: { display: "none" }, hue: { marginBottom: "0px" }, swatch: { width: "10px", height: "10px", marginTop: "0px" } },
          },
          A
        ),
        { disableAlpha: c }
      );
    return S.createElement(
      "div",
      { style: O.picker, className: "chrome-picker " + x },
      S.createElement("div", { style: O.saturation }, S.createElement(pc, { style: O.Saturation, hsl: h, hsv: d, pointer: vC, onChange: i })),
      S.createElement(
        "div",
        { style: O.body },
        S.createElement(
          "div",
          { style: O.controls, className: "flexbox-fix" },
          S.createElement("div", { style: O.color }, S.createElement("div", { style: O.swatch }, S.createElement("div", { style: O.active }), S.createElement(Jr, { renderers: p }))),
          S.createElement(
            "div",
            { style: O.toggles },
            S.createElement("div", { style: O.hue }, S.createElement(Ir, { style: O.Hue, hsl: h, pointer: ag, onChange: i })),
            S.createElement("div", { style: O.alpha }, S.createElement(w2, { style: O.Alpha, rgb: s, hsl: h, pointer: ag, renderers: p, onChange: i }))
          )
        ),
        S.createElement(w8, { rgb: s, hsl: h, hex: v, view: w, onChange: i, disableAlpha: c })
      )
    );
  };
L2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), disableAlpha: ee.bool, styles: ee.object, defaultView: ee.oneOf(["hex", "rgb", "hsl"]) };
L2.defaultProps = { width: 225, disableAlpha: !1, styles: {} };
Rt(L2);
var gC = function (a) {
    var u = a.color,
      i = a.onClick,
      c = i === void 0 ? function () {} : i,
      s = a.onSwatchHover,
      h = a.active,
      d = xe(
        {
          default: {
            color: { background: u, width: "15px", height: "15px", float: "left", marginRight: "5px", marginBottom: "5px", position: "relative", cursor: "pointer" },
            dot: { absolute: "5px 5px 5px 5px", background: H2(u), borderRadius: "50%", opacity: "0" },
          },
          active: { dot: { opacity: "1" } },
          "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, dot: { background: "#000" } },
          transparent: { dot: { background: "#000" } },
        },
        { active: h, "color-#FFFFFF": u === "#FFFFFF", transparent: u === "transparent" }
      );
    return S.createElement(ja, { style: d.color, color: u, onClick: c, onHover: s, focusStyle: { boxShadow: "0 0 4px " + u } }, S.createElement("div", { style: d.dot }));
  },
  bC = function (a) {
    var u = a.hex,
      i = a.rgb,
      c = a.onChange,
      s = xe({
        default: {
          fields: { display: "flex", paddingBottom: "6px", paddingRight: "5px", position: "relative" },
          active: { position: "absolute", top: "6px", left: "5px", height: "9px", width: "9px", background: u },
          HEXwrap: { flex: "6", position: "relative" },
          HEXinput: { width: "80%", padding: "0px", paddingLeft: "20%", border: "none", outline: "none", background: "none", fontSize: "12px", color: "#333", height: "16px" },
          HEXlabel: { display: "none" },
          RGBwrap: { flex: "3", position: "relative" },
          RGBinput: { width: "70%", padding: "0px", paddingLeft: "30%", border: "none", outline: "none", background: "none", fontSize: "12px", color: "#333", height: "16px" },
          RGBlabel: { position: "absolute", top: "3px", left: "0px", lineHeight: "16px", textTransform: "uppercase", fontSize: "12px", color: "#999" },
        },
      }),
      h = function (v, p) {
        v.r || v.g || v.b ? c({ r: v.r || i.r, g: v.g || i.g, b: v.b || i.b, source: "rgb" }, p) : c({ hex: v.hex, source: "hex" }, p);
      };
    return S.createElement(
      "div",
      { style: s.fields, className: "flexbox-fix" },
      S.createElement("div", { style: s.active }),
      S.createElement(ze, { style: { wrap: s.HEXwrap, input: s.HEXinput, label: s.HEXlabel }, label: "hex", value: u, onChange: h }),
      S.createElement(ze, { style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel }, label: "r", value: i.r, onChange: h }),
      S.createElement(ze, { style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel }, label: "g", value: i.g, onChange: h }),
      S.createElement(ze, { style: { wrap: s.RGBwrap, input: s.RGBinput, label: s.RGBlabel }, label: "b", value: i.b, onChange: h })
    );
  },
  G2 = function (a) {
    var u = a.onChange,
      i = a.onSwatchHover,
      c = a.colors,
      s = a.hex,
      h = a.rgb,
      d = a.styles,
      v = d === void 0 ? {} : d,
      p = a.className,
      g = p === void 0 ? "" : p,
      A = xe(Mt({ default: { Compact: { background: "#f6f6f6", radius: "4px" }, compact: { paddingTop: "5px", paddingLeft: "5px", boxSizing: "initial", width: "240px" }, clear: { clear: "both" } } }, v)),
      m = function (w, O) {
        w.hex ? ca(w.hex) && u({ hex: w.hex, source: "hex" }, O) : u(w, O);
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
          Ba(c, function (x) {
            return S.createElement(gC, { key: x, color: x, active: x.toLowerCase() === s, onClick: m, onSwatchHover: i });
          }),
          S.createElement("div", { style: A.clear })
        ),
        S.createElement(bC, { hex: s, rgb: h, onChange: m })
      )
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
var yC = function (a) {
  var u = a.hover,
    i = a.color,
    c = a.onClick,
    s = a.onSwatchHover,
    h = { position: "relative", zIndex: "2", outline: "2px solid #fff", boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)" },
    d = xe({ default: { swatch: { width: "25px", height: "25px", fontSize: "0" } }, hover: { swatch: h } }, { hover: u });
  return S.createElement("div", { style: d.swatch }, S.createElement(ja, { color: i, onClick: c, onHover: s, focusStyle: h }));
};
const mC = C2.handleHover(yC);
var k2 = function (a) {
  var u = a.width,
    i = a.colors,
    c = a.onChange,
    s = a.onSwatchHover,
    h = a.triangle,
    d = a.styles,
    v = d === void 0 ? {} : d,
    p = a.className,
    g = p === void 0 ? "" : p,
    A = xe(
      Mt(
        {
          default: {
            card: { width: u, background: "#fff", border: "1px solid rgba(0,0,0,0.2)", boxShadow: "0 3px 12px rgba(0,0,0,0.15)", borderRadius: "4px", position: "relative", padding: "5px", display: "flex", flexWrap: "wrap" },
            triangle: { position: "absolute", border: "7px solid transparent", borderBottomColor: "#fff" },
            triangleShadow: { position: "absolute", border: "8px solid transparent", borderBottomColor: "rgba(0,0,0,0.15)" },
          },
          "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
          "top-left-triangle": { triangle: { top: "-14px", left: "10px" }, triangleShadow: { top: "-16px", left: "9px" } },
          "top-right-triangle": { triangle: { top: "-14px", right: "10px" }, triangleShadow: { top: "-16px", right: "9px" } },
          "bottom-left-triangle": { triangle: { top: "35px", left: "10px", transform: "rotate(180deg)" }, triangleShadow: { top: "37px", left: "9px", transform: "rotate(180deg)" } },
          "bottom-right-triangle": { triangle: { top: "35px", right: "10px", transform: "rotate(180deg)" }, triangleShadow: { top: "37px", right: "9px", transform: "rotate(180deg)" } },
        },
        v
      ),
      { "hide-triangle": h === "hide", "top-left-triangle": h === "top-left", "top-right-triangle": h === "top-right", "bottom-left-triangle": h === "bottom-left", "bottom-right-triangle": h === "bottom-right" }
    ),
    m = function (w, O) {
      return c({ hex: w, source: "hex" }, O);
    };
  return S.createElement(
    "div",
    { style: A.card, className: "github-picker " + g },
    S.createElement("div", { style: A.triangleShadow }),
    S.createElement("div", { style: A.triangle }),
    Ba(i, function (x) {
      return S.createElement(mC, { color: x, key: x, onClick: m, onSwatchHover: s });
    })
  );
};
k2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), colors: ee.arrayOf(ee.string), triangle: ee.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]), styles: ee.object };
k2.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {},
};
Rt(k2);
var AC = function (a) {
    var u = a.direction,
      i = xe(
        {
          default: { picker: { width: "18px", height: "18px", borderRadius: "50%", transform: "translate(-9px, -1px)", backgroundColor: "rgb(248, 248, 248)", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)" } },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: u === "vertical" }
      );
    return S.createElement("div", { style: i.picker });
  },
  xC =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  V2 = function (a) {
    var u = a.width,
      i = a.height,
      c = a.onChange,
      s = a.hsl,
      h = a.direction,
      d = a.pointer,
      v = a.styles,
      p = v === void 0 ? {} : v,
      g = a.className,
      A = g === void 0 ? "" : g,
      m = xe(Mt({ default: { picker: { position: "relative", width: u, height: i }, hue: { radius: "2px" } } }, p)),
      x = function (O) {
        return c({ a: 1, h: O.h, l: 0.5, s: 1 });
      };
    return S.createElement("div", { style: m.picker, className: "hue-picker " + A }, S.createElement(Ir, xC({}, m.hue, { hsl: s, pointer: d, onChange: x, direction: h })));
  };
V2.propTypes = { styles: ee.object };
V2.defaultProps = { width: "316px", height: "16px", direction: "horizontal", pointer: AC, styles: {} };
Rt(V2);
var _C = function (a) {
  var u = a.onChange,
    i = a.hex,
    c = a.rgb,
    s = a.styles,
    h = s === void 0 ? {} : s,
    d = a.className,
    v = d === void 0 ? "" : d,
    p = xe(
      Mt(
        {
          default: {
            material: { width: "98px", height: "98px", padding: "16px", fontFamily: "Roboto" },
            HEXwrap: { position: "relative" },
            HEXinput: { width: "100%", marginTop: "12px", fontSize: "15px", color: "#333", padding: "0px", border: "0px", borderBottom: "2px solid " + i, outline: "none", height: "30px" },
            HEXlabel: { position: "absolute", top: "0px", left: "0px", fontSize: "11px", color: "#999999", textTransform: "capitalize" },
            Hex: { style: {} },
            RGBwrap: { position: "relative" },
            RGBinput: { width: "100%", marginTop: "12px", fontSize: "15px", color: "#333", padding: "0px", border: "0px", borderBottom: "1px solid #eee", outline: "none", height: "30px" },
            RGBlabel: { position: "absolute", top: "0px", left: "0px", fontSize: "11px", color: "#999999", textTransform: "capitalize" },
            split: { display: "flex", marginRight: "-10px", paddingTop: "11px" },
            third: { flex: "1", paddingRight: "10px" },
          },
        },
        h
      )
    ),
    g = function (m, x) {
      m.hex ? ca(m.hex) && u({ hex: m.hex, source: "hex" }, x) : (m.r || m.g || m.b) && u({ r: m.r || c.r, g: m.g || c.g, b: m.b || c.b, source: "rgb" }, x);
    };
  return S.createElement(
    yi,
    { styles: h },
    S.createElement(
      "div",
      { style: p.material, className: "material-picker " + v },
      S.createElement(ze, { style: { wrap: p.HEXwrap, input: p.HEXinput, label: p.HEXlabel }, label: "hex", value: i, onChange: g }),
      S.createElement(
        "div",
        { style: p.split, className: "flexbox-fix" },
        S.createElement("div", { style: p.third }, S.createElement(ze, { style: { wrap: p.RGBwrap, input: p.RGBinput, label: p.RGBlabel }, label: "r", value: c.r, onChange: g })),
        S.createElement("div", { style: p.third }, S.createElement(ze, { style: { wrap: p.RGBwrap, input: p.RGBinput, label: p.RGBlabel }, label: "g", value: c.g, onChange: g })),
        S.createElement("div", { style: p.third }, S.createElement(ze, { style: { wrap: p.RGBwrap, input: p.RGBinput, label: p.RGBlabel }, label: "b", value: c.b, onChange: g }))
      )
    )
  );
};
Rt(_C);
var SC = function (a) {
    var u = a.onChange,
      i = a.rgb,
      c = a.hsv,
      s = a.hex,
      h = xe({
        default: {
          fields: { paddingTop: "5px", paddingBottom: "9px", width: "80px", position: "relative" },
          divider: { height: "5px" },
          RGBwrap: { position: "relative" },
          RGBinput: { marginLeft: "40%", width: "40%", height: "18px", border: "1px solid #888888", boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC", marginBottom: "5px", fontSize: "13px", paddingLeft: "3px", marginRight: "10px" },
          RGBlabel: { left: "0px", top: "0px", width: "34px", textTransform: "uppercase", fontSize: "13px", height: "18px", lineHeight: "22px", position: "absolute" },
          HEXwrap: { position: "relative" },
          HEXinput: { marginLeft: "20%", width: "80%", height: "18px", border: "1px solid #888888", boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC", marginBottom: "6px", fontSize: "13px", paddingLeft: "3px" },
          HEXlabel: { position: "absolute", top: "0px", left: "0px", width: "14px", textTransform: "uppercase", fontSize: "13px", height: "18px", lineHeight: "22px" },
          fieldSymbols: { position: "absolute", top: "5px", right: "-7px", fontSize: "13px" },
          symbol: { height: "20px", lineHeight: "22px", paddingBottom: "7px" },
        },
      }),
      d = function (p, g) {
        p["#"]
          ? ca(p["#"]) && u({ hex: p["#"], source: "hex" }, g)
          : p.r || p.g || p.b
          ? u({ r: p.r || i.r, g: p.g || i.g, b: p.b || i.b, source: "rgb" }, g)
          : (p.h || p.s || p.v) && u({ h: p.h || c.h, s: p.s || c.s, v: p.v || c.v, source: "hsv" }, g);
      };
    return S.createElement(
      "div",
      { style: h.fields },
      S.createElement(ze, { style: { wrap: h.RGBwrap, input: h.RGBinput, label: h.RGBlabel }, label: "h", value: Math.round(c.h), onChange: d }),
      S.createElement(ze, { style: { wrap: h.RGBwrap, input: h.RGBinput, label: h.RGBlabel }, label: "s", value: Math.round(c.s * 100), onChange: d }),
      S.createElement(ze, { style: { wrap: h.RGBwrap, input: h.RGBinput, label: h.RGBlabel }, label: "v", value: Math.round(c.v * 100), onChange: d }),
      S.createElement("div", { style: h.divider }),
      S.createElement(ze, { style: { wrap: h.RGBwrap, input: h.RGBinput, label: h.RGBlabel }, label: "r", value: i.r, onChange: d }),
      S.createElement(ze, { style: { wrap: h.RGBwrap, input: h.RGBinput, label: h.RGBlabel }, label: "g", value: i.g, onChange: d }),
      S.createElement(ze, { style: { wrap: h.RGBwrap, input: h.RGBinput, label: h.RGBlabel }, label: "b", value: i.b, onChange: d }),
      S.createElement("div", { style: h.divider }),
      S.createElement(ze, { style: { wrap: h.HEXwrap, input: h.HEXinput, label: h.HEXlabel }, label: "#", value: s.replace("#", ""), onChange: d }),
      S.createElement("div", { style: h.fieldSymbols }, S.createElement("div", { style: h.symbol }, "°"), S.createElement("div", { style: h.symbol }, "%"), S.createElement("div", { style: h.symbol }, "%"))
    );
  },
  EC = function (a) {
    var u = a.hsl,
      i = xe(
        { default: { picker: { width: "12px", height: "12px", borderRadius: "6px", boxShadow: "inset 0 0 0 1px #fff", transform: "translate(-6px, -6px)" } }, "black-outline": { picker: { boxShadow: "inset 0 0 0 1px #000" } } },
        { "black-outline": u.l > 0.5 }
      );
    return S.createElement("div", { style: i.picker });
  },
  CC = function () {
    var a = xe({
      default: {
        triangle: { width: 0, height: 0, borderStyle: "solid", borderWidth: "4px 0 4px 6px", borderColor: "transparent transparent transparent #fff", position: "absolute", top: "1px", left: "1px" },
        triangleBorder: { width: 0, height: 0, borderStyle: "solid", borderWidth: "5px 0 5px 8px", borderColor: "transparent transparent transparent #555" },
        left: { Extend: "triangleBorder", transform: "translate(-13px, -4px)" },
        leftInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
        right: { Extend: "triangleBorder", transform: "translate(20px, -14px) rotate(180deg)" },
        rightInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
      },
    });
    return S.createElement("div", { style: a.pointer }, S.createElement("div", { style: a.left }, S.createElement("div", { style: a.leftInside })), S.createElement("div", { style: a.right }, S.createElement("div", { style: a.rightInside })));
  },
  rg = function (a) {
    var u = a.onClick,
      i = a.label,
      c = a.children,
      s = a.active,
      h = xe(
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
        { active: s }
      );
    return S.createElement("div", { style: h.button, onClick: u }, i || c);
  },
  wC = function (a) {
    var u = a.rgb,
      i = a.currentColor,
      c = xe({
        default: {
          swatches: { border: "1px solid #B3B3B3", borderBottom: "1px solid #F0F0F0", marginBottom: "2px", marginTop: "1px" },
          new: { height: "34px", background: "rgb(" + u.r + "," + u.g + ", " + u.b + ")", boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000" },
          current: { height: "34px", background: i, boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000" },
          label: { fontSize: "14px", color: "#000", textAlign: "center" },
        },
      });
    return S.createElement(
      "div",
      null,
      S.createElement("div", { style: c.label }, "new"),
      S.createElement("div", { style: c.swatches }, S.createElement("div", { style: c.new }), S.createElement("div", { style: c.current })),
      S.createElement("div", { style: c.label }, "current")
    );
  },
  TC = (function () {
    function r(a, u) {
      for (var i = 0; i < u.length; i++) {
        var c = u[i];
        (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
      }
    }
    return function (a, u, i) {
      return u && r(a.prototype, u), i && r(a, i), a;
    };
  })();
function OC(r, a) {
  if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
}
function MC(r, a) {
  if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a && (typeof a == "object" || typeof a == "function") ? a : r;
}
function RC(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  (r.prototype = Object.create(a && a.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a && (Object.setPrototypeOf ? Object.setPrototypeOf(r, a) : (r.__proto__ = a));
}
var Y2 = (function (r) {
  RC(a, r);
  function a(u) {
    OC(this, a);
    var i = MC(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
    return (i.state = { currentColor: u.hex }), i;
  }
  return (
    TC(a, [
      {
        key: "render",
        value: function () {
          var i = this.props,
            c = i.styles,
            s = c === void 0 ? {} : c,
            h = i.className,
            d = h === void 0 ? "" : h,
            v = xe(
              Mt(
                {
                  default: {
                    picker: { background: "#DCDCDC", borderRadius: "4px", boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)", boxSizing: "initial", width: "513px" },
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
                    saturation: { width: "256px", height: "256px", position: "relative", border: "2px solid #B3B3B3", borderBottom: "2px solid #F0F0F0", overflow: "hidden" },
                    hue: { position: "relative", height: "256px", width: "19px", marginLeft: "10px", border: "2px solid #B3B3B3", borderBottom: "2px solid #F0F0F0" },
                    controls: { width: "180px", marginLeft: "10px" },
                    top: { display: "flex" },
                    previews: { width: "60px" },
                    actions: { flex: "1", marginLeft: "20px" },
                  },
                },
                s
              )
            );
          return S.createElement(
            "div",
            { style: v.picker, className: "photoshop-picker " + d },
            S.createElement("div", { style: v.head }, this.props.header),
            S.createElement(
              "div",
              { style: v.body, className: "flexbox-fix" },
              S.createElement("div", { style: v.saturation }, S.createElement(pc, { hsl: this.props.hsl, hsv: this.props.hsv, pointer: EC, onChange: this.props.onChange })),
              S.createElement("div", { style: v.hue }, S.createElement(Ir, { direction: "vertical", hsl: this.props.hsl, pointer: CC, onChange: this.props.onChange })),
              S.createElement(
                "div",
                { style: v.controls },
                S.createElement(
                  "div",
                  { style: v.top, className: "flexbox-fix" },
                  S.createElement("div", { style: v.previews }, S.createElement(wC, { rgb: this.props.rgb, currentColor: this.state.currentColor })),
                  S.createElement(
                    "div",
                    { style: v.actions },
                    S.createElement(rg, { label: "OK", onClick: this.props.onAccept, active: !0 }),
                    S.createElement(rg, { label: "Cancel", onClick: this.props.onCancel }),
                    S.createElement(SC, { onChange: this.props.onChange, rgb: this.props.rgb, hsv: this.props.hsv, hex: this.props.hex })
                  )
                )
              )
            )
          );
        },
      },
    ]),
    a
  );
})(S.Component);
Y2.propTypes = { header: ee.string, styles: ee.object };
Y2.defaultProps = { header: "Color Picker", styles: {} };
Rt(Y2);
var zC = function (a) {
    var u = a.onChange,
      i = a.rgb,
      c = a.hsl,
      s = a.hex,
      h = a.disableAlpha,
      d = xe(
        {
          default: {
            fields: { display: "flex", paddingTop: "4px" },
            single: { flex: "1", paddingLeft: "6px" },
            alpha: { flex: "1", paddingLeft: "6px" },
            double: { flex: "2" },
            input: { width: "80%", padding: "4px 10% 3px", border: "none", boxShadow: "inset 0 0 0 1px #ccc", fontSize: "11px" },
            label: { display: "block", textAlign: "center", fontSize: "11px", color: "#222", paddingTop: "3px", paddingBottom: "4px", textTransform: "capitalize" },
          },
          disableAlpha: { alpha: { display: "none" } },
        },
        { disableAlpha: h }
      ),
      v = function (g, A) {
        g.hex
          ? ca(g.hex) && u({ hex: g.hex, source: "hex" }, A)
          : g.r || g.g || g.b
          ? u({ r: g.r || i.r, g: g.g || i.g, b: g.b || i.b, a: i.a, source: "rgb" }, A)
          : g.a && (g.a < 0 ? (g.a = 0) : g.a > 100 && (g.a = 100), (g.a /= 100), u({ h: c.h, s: c.s, l: c.l, a: g.a, source: "rgb" }, A));
      };
    return S.createElement(
      "div",
      { style: d.fields, className: "flexbox-fix" },
      S.createElement("div", { style: d.double }, S.createElement(ze, { style: { input: d.input, label: d.label }, label: "hex", value: s.replace("#", ""), onChange: v })),
      S.createElement("div", { style: d.single }, S.createElement(ze, { style: { input: d.input, label: d.label }, label: "r", value: i.r, onChange: v, dragLabel: "true", dragMax: "255" })),
      S.createElement("div", { style: d.single }, S.createElement(ze, { style: { input: d.input, label: d.label }, label: "g", value: i.g, onChange: v, dragLabel: "true", dragMax: "255" })),
      S.createElement("div", { style: d.single }, S.createElement(ze, { style: { input: d.input, label: d.label }, label: "b", value: i.b, onChange: v, dragLabel: "true", dragMax: "255" })),
      S.createElement("div", { style: d.alpha }, S.createElement(ze, { style: { input: d.input, label: d.label }, label: "a", value: Math.round(i.a * 100), onChange: v, dragLabel: "true", dragMax: "100" }))
    );
  },
  qC =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  T8 = function (a) {
    var u = a.colors,
      i = a.onClick,
      c = i === void 0 ? function () {} : i,
      s = a.onSwatchHover,
      h = xe(
        {
          default: {
            colors: { margin: "0 -10px", padding: "10px 0 0 10px", borderTop: "1px solid #eee", display: "flex", flexWrap: "wrap", position: "relative" },
            swatchWrap: { width: "16px", height: "16px", margin: "0 10px 10px 0" },
            swatch: { borderRadius: "3px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)" },
          },
          "no-presets": { colors: { display: "none" } },
        },
        { "no-presets": !u || !u.length }
      ),
      d = function (p, g) {
        c({ hex: p, source: "hex" }, g);
      };
    return S.createElement(
      "div",
      { style: h.colors, className: "flexbox-fix" },
      u.map(function (v) {
        var p = typeof v == "string" ? { color: v } : v,
          g = "" + p.color + (p.title || "");
        return S.createElement("div", { key: g, style: h.swatchWrap }, S.createElement(ja, qC({}, p, { style: h.swatch, onClick: d, onHover: s, focusStyle: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + p.color } })));
      })
    );
  };
T8.propTypes = { colors: ee.arrayOf(ee.oneOfType([ee.string, ee.shape({ color: ee.string, title: ee.string })])).isRequired };
var DC =
    Object.assign ||
    function (r) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
      }
      return r;
    },
  X2 = function (a) {
    var u = a.width,
      i = a.rgb,
      c = a.hex,
      s = a.hsv,
      h = a.hsl,
      d = a.onChange,
      v = a.onSwatchHover,
      p = a.disableAlpha,
      g = a.presetColors,
      A = a.renderers,
      m = a.styles,
      x = m === void 0 ? {} : m,
      w = a.className,
      O = w === void 0 ? "" : w,
      R = xe(
        Mt(
          {
            default: DC(
              {
                picker: { width: u, padding: "10px 10px 0", boxSizing: "initial", background: "#fff", borderRadius: "4px", boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)" },
                saturation: { width: "100%", paddingBottom: "75%", position: "relative", overflow: "hidden" },
                Saturation: { radius: "3px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                controls: { display: "flex" },
                sliders: { padding: "4px 0", flex: "1" },
                color: { width: "24px", height: "24px", position: "relative", marginTop: "4px", marginLeft: "4px", borderRadius: "3px" },
                activeColor: { absolute: "0px 0px 0px 0px", borderRadius: "2px", background: "rgba(" + i.r + "," + i.g + "," + i.b + "," + i.a + ")", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                hue: { position: "relative", height: "10px", overflow: "hidden" },
                Hue: { radius: "2px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
                alpha: { position: "relative", height: "10px", marginTop: "4px", overflow: "hidden" },
                Alpha: { radius: "2px", shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)" },
              },
              x
            ),
            disableAlpha: { color: { height: "10px" }, hue: { height: "10px" }, alpha: { display: "none" } },
          },
          x
        ),
        { disableAlpha: p }
      );
    return S.createElement(
      "div",
      { style: R.picker, className: "sketch-picker " + O },
      S.createElement("div", { style: R.saturation }, S.createElement(pc, { style: R.Saturation, hsl: h, hsv: s, onChange: d })),
      S.createElement(
        "div",
        { style: R.controls, className: "flexbox-fix" },
        S.createElement(
          "div",
          { style: R.sliders },
          S.createElement("div", { style: R.hue }, S.createElement(Ir, { style: R.Hue, hsl: h, onChange: d })),
          S.createElement("div", { style: R.alpha }, S.createElement(w2, { style: R.Alpha, rgb: i, hsl: h, renderers: A, onChange: d }))
        ),
        S.createElement("div", { style: R.color }, S.createElement(Jr, null), S.createElement("div", { style: R.activeColor }))
      ),
      S.createElement(zC, { rgb: i, hsl: h, hex: c, onChange: d, disableAlpha: p }),
      S.createElement(T8, { colors: g, onClick: d, onSwatchHover: v })
    );
  };
X2.propTypes = { disableAlpha: ee.bool, width: ee.oneOfType([ee.string, ee.number]), styles: ee.object };
X2.defaultProps = { disableAlpha: !1, width: 200, styles: {}, presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"] };
Rt(X2);
var li = function (a) {
    var u = a.hsl,
      i = a.offset,
      c = a.onClick,
      s = c === void 0 ? function () {} : c,
      h = a.active,
      d = a.first,
      v = a.last,
      p = xe(
        {
          default: { swatch: { height: "12px", background: "hsl(" + u.h + ", 50%, " + i * 100 + "%)", cursor: "pointer" } },
          first: { swatch: { borderRadius: "2px 0 0 2px" } },
          last: { swatch: { borderRadius: "0 2px 2px 0" } },
          active: { swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" } },
        },
        { active: h, first: d, last: v }
      ),
      g = function (m) {
        return s({ h: u.h, s: 0.5, l: i, source: "hsl" }, m);
      };
    return S.createElement("div", { style: p.swatch, onClick: g });
  },
  HC = function (a) {
    var u = a.onClick,
      i = a.hsl,
      c = xe({ default: { swatches: { marginTop: "20px" }, swatch: { boxSizing: "border-box", width: "20%", paddingRight: "1px", float: "left" }, clear: { clear: "both" } } }),
      s = 0.1;
    return S.createElement(
      "div",
      { style: c.swatches },
      S.createElement("div", { style: c.swatch }, S.createElement(li, { hsl: i, offset: ".80", active: Math.abs(i.l - 0.8) < s && Math.abs(i.s - 0.5) < s, onClick: u, first: !0 })),
      S.createElement("div", { style: c.swatch }, S.createElement(li, { hsl: i, offset: ".65", active: Math.abs(i.l - 0.65) < s && Math.abs(i.s - 0.5) < s, onClick: u })),
      S.createElement("div", { style: c.swatch }, S.createElement(li, { hsl: i, offset: ".50", active: Math.abs(i.l - 0.5) < s && Math.abs(i.s - 0.5) < s, onClick: u })),
      S.createElement("div", { style: c.swatch }, S.createElement(li, { hsl: i, offset: ".35", active: Math.abs(i.l - 0.35) < s && Math.abs(i.s - 0.5) < s, onClick: u })),
      S.createElement("div", { style: c.swatch }, S.createElement(li, { hsl: i, offset: ".20", active: Math.abs(i.l - 0.2) < s && Math.abs(i.s - 0.5) < s, onClick: u, last: !0 })),
      S.createElement("div", { style: c.clear })
    );
  },
  jC = function () {
    var a = xe({ default: { picker: { width: "14px", height: "14px", borderRadius: "6px", transform: "translate(-7px, -1px)", backgroundColor: "rgb(248, 248, 248)", boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)" } } });
    return S.createElement("div", { style: a.picker });
  },
  Z2 = function (a) {
    var u = a.hsl,
      i = a.onChange,
      c = a.pointer,
      s = a.styles,
      h = s === void 0 ? {} : s,
      d = a.className,
      v = d === void 0 ? "" : d,
      p = xe(Mt({ default: { hue: { height: "12px", position: "relative" }, Hue: { radius: "2px" } } }, h));
    return S.createElement(
      "div",
      { style: p.wrap || {}, className: "slider-picker " + v },
      S.createElement("div", { style: p.hue }, S.createElement(Ir, { style: p.Hue, hsl: u, pointer: c, onChange: i })),
      S.createElement("div", { style: p.swatches }, S.createElement(HC, { hsl: u, onClick: i }))
    );
  };
Z2.propTypes = { styles: ee.object };
Z2.defaultProps = { pointer: jC, styles: {} };
Rt(Z2);
var Uu = {},
  lg;
function BC() {
  if (lg) return Uu;
  (lg = 1), Object.defineProperty(Uu, "__esModule", { value: !0 });
  var r =
      Object.assign ||
      function (h) {
        for (var d = 1; d < arguments.length; d++) {
          var v = arguments[d];
          for (var p in v) Object.prototype.hasOwnProperty.call(v, p) && (h[p] = v[p]);
        }
        return h;
      },
    a = ua(),
    u = i(a);
  function i(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function c(h, d) {
    var v = {};
    for (var p in h) d.indexOf(p) >= 0 || (Object.prototype.hasOwnProperty.call(h, p) && (v[p] = h[p]));
    return v;
  }
  var s = 24;
  return (
    (Uu.default = function (h) {
      var d = h.fill,
        v = d === void 0 ? "currentColor" : d,
        p = h.width,
        g = p === void 0 ? s : p,
        A = h.height,
        m = A === void 0 ? s : A,
        x = h.style,
        w = x === void 0 ? {} : x,
        O = c(h, ["fill", "width", "height", "style"]);
      return u.default.createElement("svg", r({ viewBox: "0 0 " + s + " " + s, style: r({ fill: v, width: g, height: m }, w) }, O), u.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }));
    }),
    Uu
  );
}
var NC = BC();
const QC = Fr(NC);
var UC = function (a) {
    var u = a.color,
      i = a.onClick,
      c = i === void 0 ? function () {} : i,
      s = a.onSwatchHover,
      h = a.first,
      d = a.last,
      v = a.active,
      p = xe(
        {
          default: { color: { width: "40px", height: "24px", cursor: "pointer", background: u, marginBottom: "1px" }, check: { color: H2(u), marginLeft: "8px", display: "none" } },
          first: { color: { overflow: "hidden", borderRadius: "2px 2px 0 0" } },
          last: { color: { overflow: "hidden", borderRadius: "0 0 2px 2px" } },
          active: { check: { display: "block" } },
          "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, check: { color: "#333" } },
          transparent: { check: { color: "#333" } },
        },
        { first: h, last: d, active: v, "color-#FFFFFF": u === "#FFFFFF", transparent: u === "transparent" }
      );
    return S.createElement(ja, { color: u, style: p.color, onClick: c, onHover: s, focusStyle: { boxShadow: "0 0 4px " + u } }, S.createElement("div", { style: p.check }, S.createElement(QC, null)));
  },
  LC = function (a) {
    var u = a.onClick,
      i = a.onSwatchHover,
      c = a.group,
      s = a.active,
      h = xe({ default: { group: { paddingBottom: "10px", width: "40px", float: "left", marginRight: "10px" } } });
    return S.createElement(
      "div",
      { style: h.group },
      Ba(c, function (d, v) {
        return S.createElement(UC, { key: d, color: d, active: d.toLowerCase() === s, first: v === 0, last: v === c.length - 1, onClick: u, onSwatchHover: i });
      })
    );
  },
  K2 = function (a) {
    var u = a.width,
      i = a.height,
      c = a.onChange,
      s = a.onSwatchHover,
      h = a.colors,
      d = a.hex,
      v = a.styles,
      p = v === void 0 ? {} : v,
      g = a.className,
      A = g === void 0 ? "" : g,
      m = xe(Mt({ default: { picker: { width: u, height: i }, overflow: { height: i, overflowY: "scroll" }, body: { padding: "16px 0 6px 16px" }, clear: { clear: "both" } } }, p)),
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
            Ba(h, function (w) {
              return S.createElement(LC, { key: w.toString(), group: w, active: d, onClick: x, onSwatchHover: s });
            }),
            S.createElement("div", { style: m.clear })
          )
        )
      )
    );
  };
K2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), height: ee.oneOfType([ee.string, ee.number]), colors: ee.arrayOf(ee.arrayOf(ee.string)), styles: ee.object };
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
var P2 = function (a) {
  var u = a.onChange,
    i = a.onSwatchHover,
    c = a.hex,
    s = a.colors,
    h = a.width,
    d = a.triangle,
    v = a.styles,
    p = v === void 0 ? {} : v,
    g = a.className,
    A = g === void 0 ? "" : g,
    m = xe(
      Mt(
        {
          default: {
            card: { width: h, background: "#fff", border: "0 solid rgba(0,0,0,0.25)", boxShadow: "0 1px 4px rgba(0,0,0,0.25)", borderRadius: "4px", position: "relative" },
            body: { padding: "15px 9px 9px 15px" },
            label: { fontSize: "18px", color: "#fff" },
            triangle: { width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 9px 10px 9px", borderColor: "transparent transparent #fff transparent", position: "absolute" },
            triangleShadow: { width: "0px", height: "0px", borderStyle: "solid", borderWidth: "0 9px 10px 9px", borderColor: "transparent transparent rgba(0,0,0,.1) transparent", position: "absolute" },
            hash: { background: "#F0F0F0", height: "30px", width: "30px", borderRadius: "4px 0 0 4px", float: "left", color: "#98A1A4", display: "flex", alignItems: "center", justifyContent: "center" },
            input: { width: "100px", fontSize: "14px", color: "#666", border: "0px", outline: "none", height: "28px", boxShadow: "inset 0 0 0 1px #F0F0F0", boxSizing: "content-box", borderRadius: "0 4px 4px 0", float: "left", paddingLeft: "8px" },
            swatch: { width: "30px", height: "30px", float: "left", borderRadius: "4px", margin: "0 6px 6px 0" },
            clear: { clear: "both" },
          },
          "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
          "top-left-triangle": { triangle: { top: "-10px", left: "12px" }, triangleShadow: { top: "-11px", left: "12px" } },
          "top-right-triangle": { triangle: { top: "-10px", right: "12px" }, triangleShadow: { top: "-11px", right: "12px" } },
        },
        p
      ),
      { "hide-triangle": d === "hide", "top-left-triangle": d === "top-left", "top-right-triangle": d === "top-right" }
    ),
    x = function (O, R) {
      ca(O) && u({ hex: O, source: "hex" }, R);
    };
  return S.createElement(
    "div",
    { style: m.card, className: "twitter-picker " + A },
    S.createElement("div", { style: m.triangleShadow }),
    S.createElement("div", { style: m.triangle }),
    S.createElement(
      "div",
      { style: m.body },
      Ba(s, function (w, O) {
        return S.createElement(ja, { key: O, color: w, hex: w, style: m.swatch, onClick: x, onHover: i, focusStyle: { boxShadow: "0 0 4px " + w } });
      }),
      S.createElement("div", { style: m.hash }, "#"),
      S.createElement(ze, { label: null, style: { input: m.input }, value: c.replace("#", ""), onChange: x }),
      S.createElement("div", { style: m.clear })
    )
  );
};
P2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), triangle: ee.oneOf(["hide", "top-left", "top-right"]), colors: ee.arrayOf(ee.string), styles: ee.object };
P2.defaultProps = { width: 276, colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"], triangle: "top-left", styles: {} };
Rt(P2);
var F2 = function (a) {
  var u = xe({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(a.hsl.h) + ", " + Math.round(a.hsl.s * 100) + "%, " + Math.round(a.hsl.l * 100) + "%)",
      },
    },
  });
  return S.createElement("div", { style: u.picker });
};
F2.propTypes = { hsl: ee.shape({ h: ee.number, s: ee.number, l: ee.number, a: ee.number }) };
F2.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } };
var $2 = function (a) {
  var u = xe({ default: { picker: { width: "20px", height: "20px", borderRadius: "22px", transform: "translate(-10px, -7px)", background: "hsl(" + Math.round(a.hsl.h) + ", 100%, 50%)", border: "2px white solid" } } });
  return S.createElement("div", { style: u.picker });
};
$2.propTypes = { hsl: ee.shape({ h: ee.number, s: ee.number, l: ee.number, a: ee.number }) };
$2.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } };
var GC = function (a) {
    var u = a.onChange,
      i = a.rgb,
      c = a.hsl,
      s = a.hex,
      h = a.hsv,
      d = function (x, w) {
        if (x.hex) ca(x.hex) && u({ hex: x.hex, source: "hex" }, w);
        else if (x.rgb) {
          var O = x.rgb.split(",");
          Yf(x.rgb, "rgb") && u({ r: O[0], g: O[1], b: O[2], a: 1, source: "rgb" }, w);
        } else if (x.hsv) {
          var R = x.hsv.split(",");
          Yf(x.hsv, "hsv") &&
            ((R[2] = R[2].replace("%", "")), (R[1] = R[1].replace("%", "")), (R[0] = R[0].replace("°", "")), R[1] == 1 ? (R[1] = 0.01) : R[2] == 1 && (R[2] = 0.01), u({ h: Number(R[0]), s: Number(R[1]), v: Number(R[2]), source: "hsv" }, w));
        } else if (x.hsl) {
          var H = x.hsl.split(",");
          Yf(x.hsl, "hsl") &&
            ((H[2] = H[2].replace("%", "")), (H[1] = H[1].replace("%", "")), (H[0] = H[0].replace("°", "")), A[1] == 1 ? (A[1] = 0.01) : A[2] == 1 && (A[2] = 0.01), u({ h: Number(H[0]), s: Number(H[1]), v: Number(H[2]), source: "hsl" }, w));
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
          input2: { height: "38px", width: "100%", border: "1px solid #dadce0", boxSizing: "border-box", fontSize: "11px", textTransform: "lowercase", borderRadius: "5px", outline: "none", paddingLeft: "10px", fontFamily: "Roboto,Arial,sans-serif" },
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
          label2: { left: "10px", textAlign: "center", fontSize: "12px", background: "#fff", position: "absolute", textTransform: "uppercase", color: "#3c4043", width: "32px", top: "-6px", fontFamily: "Roboto,Arial,sans-serif" },
          single: { flexGrow: "1", margin: "0px 4.4px" },
        },
      }),
      p = i.r + ", " + i.g + ", " + i.b,
      g = Math.round(c.h) + "°, " + Math.round(c.s * 100) + "%, " + Math.round(c.l * 100) + "%",
      A = Math.round(h.h) + "°, " + Math.round(h.s * 100) + "%, " + Math.round(h.v * 100) + "%";
    return S.createElement(
      "div",
      { style: v.wrap, className: "flexbox-fix" },
      S.createElement(
        "div",
        { style: v.fields },
        S.createElement("div", { style: v.double }, S.createElement(ze, { style: { input: v.input, label: v.label }, label: "hex", value: s, onChange: d })),
        S.createElement(
          "div",
          { style: v.column },
          S.createElement("div", { style: v.single }, S.createElement(ze, { style: { input: v.input2, label: v.label2 }, label: "rgb", value: p, onChange: d })),
          S.createElement("div", { style: v.single }, S.createElement(ze, { style: { input: v.input2, label: v.label2 }, label: "hsv", value: A, onChange: d })),
          S.createElement("div", { style: v.single }, S.createElement(ze, { style: { input: v.input2, label: v.label2 }, label: "hsl", value: g, onChange: d }))
        )
      )
    );
  },
  J2 = function (a) {
    var u = a.width,
      i = a.onChange,
      c = a.rgb,
      s = a.hsl,
      h = a.hsv,
      d = a.hex,
      v = a.header,
      p = a.styles,
      g = p === void 0 ? {} : p,
      A = a.className,
      m = A === void 0 ? "" : A,
      x = xe(
        Mt(
          {
            default: {
              picker: { width: u, background: "#fff", border: "1px solid #dfe1e5", boxSizing: "initial", display: "flex", flexWrap: "wrap", borderRadius: "8px 8px 0px 0px" },
              head: { height: "57px", width: "100%", paddingTop: "16px", paddingBottom: "16px", paddingLeft: "16px", fontSize: "20px", boxSizing: "border-box", fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif" },
              saturation: { width: "70%", padding: "0px", position: "relative", overflow: "hidden" },
              swatch: { width: "30%", height: "228px", padding: "0px", background: "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 1)", position: "relative", overflow: "hidden" },
              body: { margin: "auto", width: "95%" },
              controls: { display: "flex", boxSizing: "border-box", height: "52px", paddingTop: "22px" },
              color: { width: "32px" },
              hue: { height: "8px", position: "relative", margin: "0px 16px 0px 16px", width: "100%" },
              Hue: { radius: "2px" },
            },
          },
          g
        )
      );
    return S.createElement(
      "div",
      { style: x.picker, className: "google-picker " + m },
      S.createElement("div", { style: x.head }, v),
      S.createElement("div", { style: x.swatch }),
      S.createElement("div", { style: x.saturation }, S.createElement(pc, { hsl: s, hsv: h, pointer: F2, onChange: i })),
      S.createElement(
        "div",
        { style: x.body },
        S.createElement("div", { style: x.controls, className: "flexbox-fix" }, S.createElement("div", { style: x.hue }, S.createElement(Ir, { style: x.Hue, hsl: s, radius: "4px", pointer: $2, onChange: i }))),
        S.createElement(GC, { rgb: c, hsl: s, hex: d, hsv: h, onChange: i })
      )
    );
  };
J2.propTypes = { width: ee.oneOfType([ee.string, ee.number]), styles: ee.object, header: ee.string };
J2.defaultProps = { width: 652, styles: {}, header: "Color picker" };
Rt(J2);
const O8 = "" + new URL("paintbrush-rSkw0poc.svg", import.meta.url).href,
  M8 = "" + new URL("draw-line-Ban59yVO.svg", import.meta.url).href,
  R8 = "" + new URL("rectangle-BMYwHa9v.svg", import.meta.url).href,
  z8 = "" + new URL("select-BY4E36Vj.svg", import.meta.url).href,
  a2 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABcaAAAXGgFDFdo3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAqBQTFRF////AQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACxk6x5AAAAN90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIkJSYnKCorLS4vMDEyMzQ1Njc5Ojs+P0JDREVGR0hJSktPUFFSU1RVVlhZW1xdXl9gYWJjZGVmZ2hpamtsbW9wcXJ0dXd4eXp7fH1+gIGCg4SGiImKi4yNjo+QkZKTlJaXmJmanJ2foKGio6Slpqepqqusra6vsLGys7W2t7i6u7y9vr/AwcLExcfIycvMzc7P0NHS09TV1tfY2dzd3t/g4eLj5OXm5+jq6+zu7/Dx8vP09fb3+Pn6+/z9/n6CzcwAAAvkSURBVHja7d39v99zHcfx16Etl00bKbZZYsvFhK4Q0RRzEYVNKpLLwmYtlBKVq1wPqa1aSyOGRYsxJFe53ApD7fLzr/QDtzHOd/ue786+n/f387o/fnSOc27v9+dhZ4+nc74nAgAAAAAAoOn0jZ983i9nzn/wjlsvn37cKPeRi+2PveGl6t08cdXRW7uWLOx+y6rq/bxy4Q6uJgOfmrm66p9l13zS9TSdD82o1sGKczZxRc3+z/+Jat3c5e+DTeaU/1Xr499HuqamMuTGqh3Od1PNZMs/Ve1xzRCX1UBGzK/a5fYPua7GMfLRqn0eGunCGsa4Z6qB8NwerqxR7Lu4GhivHuTSGsSBS6uBsvx419YYjlpWdYAcbArfXlV1hBxsBlOrTvmzHOx9+n5edY4c7HmG3FxtCHKwx2l7/pWDjWQA868cbCADmn/lYOMY4PwrBxvGgOdfOdgoOph/5WCD6Gz+lYNNodP5Vw42g6nVYLP8BLfaM2zQ/CsHe54NnH/lYI+zwfOvHOxpBmH+bclCOVg8gzP/ysFeZbDmXznYmwze/NvyB4jlYMEM5vwrB3uPwZ1/W3KtHCyTwZ5/5WBvMbXqGnKwPDbO/CsHe4WNNf+24jU5WBQbb/6Vg73A8PlV95GDxbBx5185WDpjn6nqQQ4Wwcaff+VgyXRl/pWDxdKl+VcOFkrX5l85WCRTq/qZ5jHURXfnXzlYGkNmVGUgB2uh+/OvHCyJWubfljm4pwfSZUYuqkritS96JF2ltvlXDhZBjfOvHMw+/8rB2jlyWVUkcjDJ/CsH08+/cjD7/CsHs8+/cjD7/CsHs8+/cjD7/CsHs8+/cjD9/CsHs8+/cjD7/NsyByd5ZjnmXzmYff6Vg9nn35bMlYM55l85mH7+lYPZ5185mH3+lYPZ5185mH3+bcl1cjDH/CsHs8+/cnBw+daqqinIwQ6YUjUIOZhl/pWD2edfOZh9/pWD2eff1jk4zKNNMf+2zsFRHm6O+bcVz8vBJPOvHMw+/8rB7PNvS37gIeeYf+Vg9vlXDmaff1vysBxMMv/Kwezzrxxsf/69r8qEHMwy/8rB7POvHMw+/8rB7POvHEw//8rB7PNvyxw82POfUmUmfQ72XVYlJ3cOJpp/5WD2+VcOZp9/5WD6+VcOZp9/5eA77LPYc39XDk42/8pB868cNP/KQfOvHDT/Zs3B8eZfOWj+lYPmXzlo/k3L9U3OQfNvG9zR3Bw0/+bOQfNv7hw0/+bOQfNv7hw0/6bOQfNv7hw0/+bOwS3neJyZc9D8mzsHzb+5c9D8mzsHzb8bxnTzrxw0/8pB868cNP/KQfOvHDT/ykHzrxw0/8pB868cNP/KQfOvHDT/ykHzrxw0/8pB868cNP/KQfOvHDT/ykHzb7Nz8JASn/+O5t/u5eCJ5l85aP6Vg+XwBfNv6hw0/9bAI+XkoPk3dw6af2tiaRE5aP7NnYPm39w5aP6tOweHmn/loPk3dQ6ONv/KQfOvHDT/ykHzb1p+aP5Nzg1dzkHzb2nc2c0cNP/mzsEhN7nuAnmhWzm4xRyXnTkHzb+5c9D8mzsHzb+5c9D8mzsHzb+5c/AI828v5OBe5l85aP6Vg+ZfOWj+lYPmXzlo/pWD5l85aP6Vg+ZfOWj+lYPmXzk4AL5p/k2dg+e5wcw5aP7NnYPm39w5aP5tTA5+w/wrB82/ctD8mzkHtzH/ykHzrxw0/ybOwS+Zf+Wg+VcOmn/loPlXDpp/5aD5NyXPjjb/5uYf25l/c7NgmPk3N/M+aP7NzRTzb27+u7P5Nzd/NP8mZ+Ja8++lLiQbD5h/kzNuzfPffI7bSMia/zG46e9cRkae7ntbgKvcRU72fev5T3MTSZkcERFfcxFZuTgiYhv7f1pmR0Rc4h7S8mREjFvhHtKyNCJmu4a8vBwxarVryMtTEWe4hcQsipjvFhJzf+zkEjJzXZzkEjIzOX7kEjKzS9zmEhLzYsQCt5CYGyJecQuJ2SfiTbeQl7kR8YJryMuBEeFHQfPyQETEPe4hK8v2joiY5SKyclpERJztIpLy+7e+H3QvN5GTf414+yfCXnYXGXltzUuGznAZGf8CeMCaHwo7zG3kY9WR7/qp4IUb9KF8Q1kvcvJaLwuyIR/p4r+6zd5j2tqvC9v5HwGrT/cdZT3IFe95ZZAvd/w3iaN9S2EP8ptN3vvaQJd39oFePSAIUBTT2/kZn9nvf3m4oR19IX9+zyBAWYw5ZP0v8zerv5cKH9XBj4c+tlMQoDQBYq/1/e/9Xw/p//cDLR/o57p3eBCgPAFi9CPrfI/rN23xEsETVw7sU83aPAhQogCxzV9av33FGa1fJP6YAb1I5BVrRCJAYQLE0Btbvfml/df1ayJOHMCmN/Wdf40ApQkQfRf0/9Y7d1j3L4r5TrufZuXkIEDBAkSc1M8X9Oe+ut5fFXVWe5/ljUODAGULEBNef89bll20VRu/K+7cdj7J4s8EAUoXIMav9QM/z533kfZ+W+Sk9S9JT+4aBChfgNj01Jfe/ocvzJj4gbZ/X+xBr67nUyz4aBCgFwSIiF0nTT/n9BPGDuw3xu/+7Do/w81bBwF6RYDOGHZJ6y8DS49///sToGECROw2t8WHf2CXIEACASK+cns/HXnX4f3OyARooAARHztj7dcNWHL1Hi3ekwCNFCAidjz49KvvW7Rwwf3zLjvmE63fjQBNFaBNCEAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQoFr0vW7zEwKUJMCsrh9+HAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCgE+4r5/gzu374sYUJsFMNAswp5/jXdv3wIwsTYFgNAlxdzvEv6PrhNyvr+b9Rw/OPaeWc/9Tun/6NogR4og4BTirn/BO7f/pnixJgXh0CTCjn/J/r/un/XpQAt9QhwLYrSzn+m1t0//TXFCXAqXUIEPPyzgARxxQlwOhaBDizlOMfV8Phty/p+f+tlucfuxRy/JUj6jj9woIEmFKPAKXcwe21HP6icp7/6nE1CXBY2gaIiJHLihHgpqiLe0s4/m9rOvyVpTz/ZWNqE+DzBRx/xdiaDj9mRSEC/DTqY2b9x7+8tsP/qozn/58RNQqw3dN1H/+hrWo7/PBnSnj+qyZEnez5er3HXzymxsN/toQvAmdHvRy+us7TL9+v1sOfVf/znxF1c2aNBqw4rt6z991S9/O/e/PaBYiJtX0VWHJA3Wff5Bf1Pv8rh0QB7PFUPad/eOcCDn9WnX8AnhxlsO2sOvbP67Yq4vBHLanr+f9z/yiG/br+PeJ37l3K2T/8s1piYMl3h0ZJHPF4V+t/QklnHze7618HXr9wWJTG+PMf7M7h7z93t9LOvuMpc7v4x8CLVx26WRTJx7/+/ctuu/exxzcSj95z66VnHzuyzLMPP/y0H8+4+9HHNyoL/nDFlEmf7gsAAAAAAICB8H8AUs7BgUK/LwAAAABJRU5ErkJggg==",
  q8 = "" + new URL("about-DyboQUNs.png", import.meta.url).href,
  ig = Og.generator(),
  ug = (r, a, u, i, c, s) => {
    switch (s) {
      case "line":
      case "rectangle":
        const h = s === "line" ? ig.line(a, u, i, c, { bowing: 2, strokeWidth: 3, stroke: "#363636" }) : ig.rectangle(a, u, i - a, c - u, { bowing: 2, strokeWidth: 3, stroke: "#363636" });
        return { id: r, x1: a, y1: u, x2: i, y2: c, type: s, roughElement: h };
      case "paintbrush":
        return { id: r, type: s, points: [{ x: a, y: u }] };
      default:
        throw new Error(`unrecognized: ${s}`);
    }
  },
  kC = r => {
    if (!r.length) return "";
    const a = r.reduce(
      (u, [i, c], s, h) => {
        const [d, v] = h[(s + 1) % h.length];
        return u.push(i, c, (i + d) / 2, (c + v) / 2), u;
      },
      ["M", ...r[0], "Q"]
    );
    return a.push("Z"), a.join(" ");
  },
  VC = (r, a, u, i) => {
    switch (u.type) {
      case "line":
      case "rectangle":
        r.draw(u.roughElement), a.fill(new Path2D()), (a.fillStyle = i);
        break;
      case "paintbrush":
        const c = kC(ly(u.points, { size: 8, thinning: 0.3, smoothing: 0.5, streamline: 0.7 }));
        a.fill(new Path2D(c)), (a.fillStyle = i);
        break;
      default:
        throw new Error(`unrecognised: ${u.type}`);
    }
  },
  Rr = (r, a, u, i, c) => (Math.abs(r - u) < 5 && Math.abs(a - i) < 5 ? c : null),
  cg = (r, a, u, i, c, s, h = 1) => {
    const d = { x: r, y: a },
      v = { x: u, y: i },
      p = { x: c, y: s },
      g = Zf(d, v) - (Zf(d, p) + Zf(v, p));
    return Math.abs(g) < h ? "inside" : null;
  },
  YC = (r, a, u) => {
    const { type: i, x1: c, x2: s, y1: h, y2: d } = u;
    switch (i) {
      case "line":
        const v = cg(c, h, s, d, r, a),
          p = Rr(r, a, c, h, "start"),
          g = Rr(r, a, s, d, "end");
        return p || g || v;
      case "rectangle":
        const A = Rr(r, a, c, h, "tl"),
          m = Rr(r, a, s, h, "tr"),
          x = Rr(r, a, c, d, "bl"),
          w = Rr(r, a, s, d, "br"),
          O = r >= c && r <= s && a >= h && a <= d ? "inside" : null;
        return A || m || x || w || O;
      case "paintbrush":
        return u.points.some((H, D) => {
          const L = u.points[D + 1];
          return L ? cg(H.x, H.y, L.x, L.y, r, a, 5) != null : !1;
        })
          ? "inside"
          : null;
      default:
        throw new Error(`unrecognised: ${i}`);
    }
  },
  Zf = (r, a) => Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
  og = (r, a, u) => u.map(i => ({ ...i, position: YC(r, a, i) })).find(i => i.position !== null),
  XC = r => {
    const { type: a, x1: u, y1: i, x2: c, y2: s } = r;
    if (a === "rectangle") {
      const h = Math.min(u, c),
        d = Math.max(u, c),
        v = Math.min(i, s),
        p = Math.max(i, s);
      return { x1: h, y1: v, x2: d, y2: p };
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
  KC = (r, a, u, i) => {
    const { x1: c, y1: s, x2: h, y2: d } = i;
    switch (u) {
      case "tl":
      case "start":
        return { x1: r, y1: a, x2: h, y2: d };
      case "tr":
        return { x1: c, y1: a, x2: r, y2: d };
      case "bl":
        return { x1: r, y1: s, x2: h, y2: a };
      case "br":
      case "end":
        return { x1: c, y1: s, x2: r, y2: a };
      default:
        return null;
    }
  },
  PC = r => {
    const [a, u] = Ee.useState(0),
      [i, c] = Ee.useState([r]),
      s = (p, g = !1) => {
        const A = typeof p == "function" ? p(i[a]) : p;
        if (g) {
          const m = [...i];
          (m[a] = A), c(m);
        } else {
          const m = [...i].slice(0, a + 1);
          c([...m, A]), u(x => x + 1);
        }
      },
      h = () => a > 0 && u(0),
      d = () => a > 0 && u(p => p - 1),
      v = () => a < i.length - 1 && u(p => p + 1);
    return [i[a], s, d, v, h];
  },
  FC = r => ["line", "rectangle"].includes(r),
  $C = () => {
    const [r, a, u, i, c] = PC([]),
      [s, h] = Ee.useState("none"),
      [d, v] = Ee.useState("paintbrush"),
      [p, g] = Ee.useState(null),
      [A, m] = Ee.useState("#363636");
    Ee.useLayoutEffect(() => {
      const H = document.getElementById("canvas"),
        D = H.getContext("2d");
      D.clearRect(0, 0, H.width, H.height);
      const L = Og.canvas(H);
      r.map(k => VC(L, D, k, A));
    }, [r, A]);
    const x = (H, D, L, k, G, Y) => {
      const J = [...r];
      switch (Y) {
        case "line":
        case "rectangle":
          J[H] = ug(H, D, L, k, G, Y);
          break;
        case "paintbrush":
          J[H].points = [...J[H].points, { x: k, y: G }];
          break;
        default:
          throw new Error(`unrecognised: ${Y}`);
      }
      a(J, !0);
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
            a(G => G), k.position === "inside" ? h("move") : h("resize");
          }
        } else {
          const k = r.length,
            G = ug(k, D, L, D, L, d);
          a(Y => [...Y, G]), g(G), h("draw");
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
            (G[p.id] = { ...G[p.id], points: k }), a(G, !0);
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
        h("none"), g(null);
      };
    return X.jsxs(X.Fragment, {
      children: [
        X.jsx("div", {
          className: "color",
          children: X.jsx(uC, {
            colors: ["#a5abe7", "#6fb7da", "#aebc89", "#f1d896", "#e67f6e", "#f384a9", "#7b75da", "#3984a3", "#598b7f", "#f1b376", "#bc5953", "#ed5689", "#363636", "#666", "#818589", "#A9A9A9", "#ccc", "#fff"],
            color: A,
            onChange: H => m(H.hex),
          }),
        }),
        X.jsxs("div", {
          className: "toolbar",
          children: [
            X.jsx("input", { type: "radio", id: "paintbrush", checked: d === "paintbrush", onChange: () => v("paintbrush"), className: "tool" }),
            X.jsx("label", { htmlFor: "paintbrush", className: "tool__label", children: X.jsx("img", { src: O8, alt: "paintbrush icon", className: "toolbar__icon" }) }),
            X.jsx("input", { type: "radio", id: "line", checked: d === "line", onChange: () => v("line"), className: "tool" }),
            X.jsx("label", { htmlFor: "line", className: "tool__label", children: X.jsx("img", { src: M8, alt: "line icon", className: "toolbar__icon" }) }),
            X.jsx("input", { type: "radio", id: "rectangle", checked: d === "rectangle", onChange: () => v("rectangle"), className: "tool" }),
            X.jsx("label", { htmlFor: "rectangle", className: "tool__label", children: X.jsx("img", { src: R8, alt: "rectangle icon", className: "toolbar__icon" }) }),
            X.jsx("input", { type: "radio", id: "select", checked: d === "select", onChange: () => v("select"), className: "tool" }),
            X.jsx("label", { htmlFor: "select", className: "tool__label", children: X.jsx("img", { src: z8, alt: "select icon", className: "toolbar__icon" }) }),
            X.jsx("div", { className: "tool__divider" }),
          ],
        }),
        X.jsxs("div", {
          className: "canvas-tools",
          children: [
            X.jsx("div", { onClick: c, className: "canvas-tools__button", children: X.jsx("h2", { children: "clear" }) }),
            X.jsx("div", { onClick: u, className: "canvas-tools__button", children: X.jsx("h2", { children: "undo" }) }),
            X.jsx("div", { onClick: i, className: "canvas-tools__button", children: X.jsx("h2", { children: "redo" }) }),
          ],
        }),
        X.jsxs("nav", {
          className: "nav",
          children: [X.jsx(Pr, { to: "/", children: X.jsx("img", { src: a2, alt: "home icon", className: "nav__icon click" }) }), X.jsx(Pr, { to: "/about", children: X.jsx("img", { src: q8, alt: "about icon", className: "nav__icon click" }) })],
        }),
        X.jsx("canvas", { id: "canvas", width: window.innerWidth, height: window.innerHeight, onMouseDown: w, onMouseMove: O, onMouseUp: R, children: "Canvas" }),
      ],
    });
  };
function JC() {
  return X.jsx($C, {});
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
function ae(r, a) {
  return ku.set(r, a), fg.add(r), (j8 = H8([...fg].sort((u, i) => i.length - u.length))), a;
}
function ew(r) {
  return r ? (r.startsWith("mailto:") ? "mailto" : r.match(j8)?.[1] || Wu) : Wu;
}
const hg = Ee.forwardRef(function (a, u) {
  const { as: i = "a", href: c, url: s, network: h, bgColor: d, fgColor: v, className: p, label: g, children: A, fallback: m, defaultSVG: x, borderRadius: w = "50%", ...O } = a,
    R = h || ew(s),
    H = g || a["aria-label"] || R,
    D = (typeof m == "string" ? ku.get(m) : m || x) || ku.get(Wu),
    { color: L, path: k } = R === Wu ? D : ku.get(R) || {},
    G = typeof w != "string" ? "50%" : w;
  return Ee.createElement(
    i,
    { href: c || s, className: `social-icon${p ? ` ${p}` : ""}`, ...O, style: { ...IC, ...O.style }, "aria-label": H, ref: u },
    X.jsx("span", {
      className: "social-container",
      style: D8,
      children: X.jsxs("svg", {
        role: "img",
        "aria-label": `${H} social icon`,
        className: "social-svg",
        viewBox: "0 0 64 64",
        style: { ...WC, borderRadius: G },
        children: [
          X.jsx("g", { className: "social-svg-icon", style: { ...sg, fill: v || "white" }, children: X.jsx("path", { d: `M0,0H64V64H0Z${k}` }) }),
          X.jsx("g", { className: "social-svg-mask", style: { ...sg, fill: d || L }, children: X.jsx("path", { d: k }) }),
        ],
      }),
    }),
    A
  );
});
ae("auth0", {
  color: "#191919",
  path: "M0 0v64h64V0Zm34.088 16.287c3.965.307 7.705 1.604 9.787 2.45a2.73 2.73 0 0 1 1.707 2.523v8.164a.79.79 0 0 1-.92.776l-.77-.124c-5.246-.858-9.356-5.162-10.22-10.37l-.004-.003-.29-2.504c-.06-.393.202-.95.71-.912m-3.363.006c.507-.038.777.515.707.913l-.291 2.503c-.865 5.205-4.974 9.51-10.221 10.369v.004l-.77.124a.79.79 0 0 1-.92-.776v-8.164c0-1.107.676-2.104 1.707-2.522 2.086-.845 5.823-2.145 9.788-2.45m-10.82 15.92c.346 0 .762.12 1.019.149 7.168 1.403 10.496 6.133 10.496 15.089 0 .45-.45.758-.826.51-3.297-2.207-10.55-7.967-11.3-15.175-.014-.454.264-.574.61-.574m25.001 0c.347-.001.626.119.612.573-.75 7.208-8.005 12.968-11.301 15.175-.376.248-.826-.06-.826-.51 0-8.956 3.33-13.686 10.498-15.09.257-.028.67-.148 1.017-.149",
});
ae("bandsintown", { color: "#1B8793", path: "M0 0v64h64V0zm32.6 24.7h5.6v7.8h-5.6zm-6.8 0h5.6v7.8h-5.6zM44.9 46H19.1V18h5.6v22.4h14.6v-1.1H25.8v-5.6h19V46zm0-13.4h-5.6V18h5.6z" });
ae("bsky.app", {
  color: "#1185fe",
  path: "M0 0v64h64V0Zm45.498 17.766a2.84 2.84 0 0 1 1.354.312c.578.296.932.915 1.103 1.92.085.513.046 2.326-.086 3.666-.013.125-.038.494-.064.822-.02.322-.054.696-.067.82-.013.125-.039.434-.058.69-.027.25-.06.585-.073.736-.02.158-.046.408-.066.559-.099.92-.118 1.07-.13 1.104-.014.02-.041.244-.067.494-.171 1.662-1.354 3.376-2.938 4.263-1.261.703-2.667 1.045-4.336 1.051-.801.007-.927.041-.447.133.94.17 2.005.518 2.86.945 2.247 1.11 3.041 2.747 2.331 4.778-.118.322-.25.636-.302.695-.053.052-.092.131-.092.164 0 .066-.617 1.025-.8 1.242-.06.072-.219.264-.35.428-.355.434-1.004 1.097-1.346 1.373-.164.131-.31.25-.33.27-.184.203-1.333.946-1.938 1.261-.808.42-1.425.591-2.135.598-.722.006-.953-.033-1.439-.256-1.386-.63-2.418-2.34-3.39-5.586-.421-1.426-.54-1.826-.598-2.082-.066-.276-.131-.218-.256.223-.381 1.38-1.117 3.344-1.623 4.363-.92 1.853-1.927 2.937-3.11 3.357-.499.178-1.45.166-2.029-.025-1.452-.486-2.899-1.623-4.357-3.443-1.426-1.774-2.116-3.292-2.037-4.475.046-.69.118-.933.447-1.426.302-.453.841-.914 1.44-1.236.426-.23 1.28-.584 1.609-.676.111-.026.375-.099.592-.158.216-.066.453-.126.525-.139.867-.17 1.255-.255 1.295-.281.026-.02-.302-.04-.723-.047-.42 0-.947-.026-1.164-.053-.453-.059-1.445-.276-1.642-.36a6 6 0 0 0-.46-.17c-1.241-.441-2.378-1.33-3.087-2.427-.316-.486-.659-1.221-.73-1.576a10 10 0 0 1-.19-1.123c-.027-.217-.054-.466-.067-.558a33 33 0 0 1-.197-1.873c-.026-.29-.053-.632-.066-.756a72 72 0 0 1-.073-.756c-.02-.29-.05-.631-.064-.756-.164-1.938-.172-3.68-.008-4.238.302-1.019.73-1.466 1.623-1.715.29-.08 1.157-.078 1.531.008 1.183.25 3.576 1.655 5.008 2.93.072.065.237.21.361.322.927.828 2.543 2.522 3.358 3.521.23.29.447.553.486.592.033.04.139.17.23.289.093.118.196.25.23.29.098.104 1.065 1.43 1.486 2.042.492.71 1.201 1.847 1.378 2.229.138.282.256.387.256.236 0-.105.836-1.485 1.434-2.365 1.866-2.76 4.257-5.488 6.353-7.262.566-.473.769-.63 1.63-1.22 1.648-1.126 2.937-1.676 4.015-1.688",
});
ae("behance", {
  color: "#007CFF",
  path: "M40.4 30.1q-.9 0-1.5.3c-.4.2-.7.4-.9.7s-.4.6-.5.9-.2.6-.2.9h6c-.1-.9-.4-1.6-.8-2.1-.5-.5-1.2-.7-2.1-.7m-14.9 2.7h-4.4v5.1h4.3c.4 0 .8 0 1.1-.1.4-.1.7-.2 1-.4s.5-.4.7-.7.2-.7.2-1.2c0-1-.3-1.6-.8-2-.5-.5-1.2-.7-2.1-.7m1.5-3.3c.5-.3.7-.9.7-1.7 0-.4-.1-.8-.2-1.1q-.3-.45-.6-.6-.45-.3-.9-.3c-.3-.1-.7-.1-1-.1h-3.8V30h4.1c.6.1 1.2-.1 1.7-.5M0 0v64h64V0zm36.6 23.8h7.5v1.8h-7.5zm-4.7 14.3c-.4.7-.9 1.2-1.5 1.7-.6.4-1.3.8-2.1 1q-1.2.3-2.4.3H17V22.6h8.7c.9 0 1.7.1 2.4.2.7.2 1.3.4 1.9.8.5.4.9.8 1.2 1.4s.4 1.3.4 2.2-.2 1.7-.6 2.3-1 1.1-1.9 1.5c1.1.3 2 .9 2.5 1.7.6.8.8 1.8.8 3 .1.9-.1 1.7-.5 2.4M47 35.3h-9.6c0 1.1.4 2.1.9 2.6s1.3.8 2.4.8c.7 0 1.4-.2 1.9-.6s.9-.8 1-1.2h3.2c-.5 1.6-1.3 2.8-2.4 3.4-1.1.7-2.4 1-3.9 1-1.1 0-2-.2-2.9-.5-.8-.3-1.6-.8-2.2-1.4s-1-1.4-1.4-2.2c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8.8-1.6 1.4-2.2 1.3-1.1 2.2-1.5c.8-.4 1.8-.5 2.8-.5 1.1 0 2.1.2 3 .7q1.2.6 2.1 1.8c.5.7.9 1.6 1.2 2.5.3.8.3 1.8.3 2.9",
});
ae("clubhouse", {
  color: "#1F1F1A",
  path: "M0 0v64.271h64.203V0zm32.694 15.453c1.277 0 2.24.566 2.804 1.842.824-.538 1.956-.738 2.92-.483 1.305.34 2.1 1.249 2.581 4.03.17.882.423 1.96.735 2.895.396 1.194.85 2.128 1.643 3.518.255.425.566.908.878 1.361l.256-.51c.764-1.562 2.268-3.093 4.45-3.093.937 0 1.956.34 2.522 1.305a3.04 3.04 0 0 1 .51 1.7c0 .737-.311 1.475-.566 2.042-.057.114-.084.17-.084.198-.652 1.36-1.53 3.066-1.53 5.05 0 5.76-2.127 8.71-3.77 10.242-1.674 1.562-4.28 2.893-7.313 2.893-2.152 0-4.393-.623-6.234-1.843-2.52-1.672-4.052-4.255-5.44-6.524-1.136-1.9-1.958-3.43-3.176-6.324-.708-1.617-1.36-3.293-1.897-5.079-.482-1.562-.228-2.696.393-3.433.625-.766 1.505-1.135 2.468-1.192.17 0 .34.001.51.03a6 6 0 0 1-.2-1.475c0-1.846 1.448-3.207 3.403-3.207.255 0 .51.028.736.085-.028-.312-.056-.567-.056-.822 0-2.016 1.644-3.206 3.457-3.206m0 1.704c-.822 0-1.812.424-1.812 1.502 0 .709.197 1.758.395 2.606.34.825.398 1.336.823 3.122.255 1.052.565 1.958.877 2.752.368.967.793 1.79 1.388 2.896.283.538.426.539 1.106.17.538-.284 1.33-.625 1.924-.824-1.02-2.211-1.869-4.057-2.294-5.616-.113-.454-.51-2.272-.623-3.066-.085-.794-.17-1.473-.368-2.21-.226-.908-.538-1.332-1.416-1.332m4.87 1.252c-.445-.004-.919.14-1.216.395-.312.283-.425.509-.34 1.132.142 1.364.368 2.414.623 3.406.595 2.325 1.585 4.142 2.095 5.22.17.368.313.511.596.483.397-.029.623-.058.878-.03.34.029.596.228.596.568 0 .283-.143.397-.653.51-1.048.227-2.38.595-3.684 1.333-1.107.626-2.07 1.392-2.948 2.498-.085.113-.172.17-.313.17-.198 0-.368-.227-.538-.454s-.283-.397-.283-.567c0-.199.085-.37.283-.624.312-.426.68-.737.68-.935 0-.142-.254-.482-.48-.879-.368-.68-.992-2.044-1.417-3.065-.651-1.56-1.105-3.546-1.36-4.766-.312-1.332-.794-1.702-1.53-1.702-1.02 0-1.698.595-1.698 1.503 0 .598.197 1.391.594 2.696.255.85.51 1.7.736 2.296a53 53 0 0 0 1.218 3.066c.368.822.906 1.787 1.16 2.269.142.255.397.68.397.935 0 .454-.338.708-.791.708-.255 0-.482-.113-.737-.51-.311-.457-.992-1.788-1.473-2.78-.369-.823-.992-2.3-1.304-3.32-.51-1.616-.85-2.24-1.727-2.213-.51.029-.936.2-1.247.568-.312.397-.339 1.02-.084 1.843.538 1.73 1.163 3.317 1.835 4.943 1.192 2.807 1.957 4.257 3.062 6.1 1.388 2.268 2.75 4.538 4.93 5.984 1.558 1.02 3.46 1.561 5.3 1.561 2.578 0 4.762-1.137 6.15-2.441 1.419-1.305 3.23-3.859 3.23-8.993 0-2.354 1.02-4.4 1.644-5.732.17-.34.537-1.049.537-1.56 0-.226-.055-.537-.197-.764-.255-.397-.652-.54-1.133-.54-1.504 0-2.468 1.136-3.006 2.128a7 7 0 0 0-.537 1.36c-.312 1.049-.624 1.475-1.53 2.212-.482.426-1.076.964-1.415 1.39-.567.767-.738 1.42-.88 2.44-.028.256-.51.369-1.104.369-.34 0-.453-.113-.453-.652 0-.567.198-1.418.623-2.183.595-1.05 1.246-1.617 1.898-2.156s.85-.765.963-1.105c-.595-.797-1.16-1.618-1.614-2.412-.822-1.446-1.36-2.526-1.784-3.83a25 25 0 0 1-.794-3.152c-.34-1.988-.679-2.497-1.33-2.667a1.8 1.8 0 0 0-.428-.054m-23.056.313c.206-.014.437.052.698.187.806.42 3.65 2.637 4.193 3.076.526.422.454.641.178 1.185-.275.544-.533.683-1.022.528-.978-.309-3.882-2.07-4.64-2.523-.684-.413-.773-.784-.296-1.689.264-.499.545-.742.889-.764m-1.79 9.45c.139-.014.296-.005.469.012.803.077 4.524.682 5.116.865.613.19.698.47.623 1.005-.095.696-.409.829-.81.841-.855.024-4.407-.129-5.218-.209-.706-.07-.992-.381-.915-1.404.062-.824.319-1.068.735-1.11m7.768 7.597c.308.018.54.218.713.653.255.637.08.89-.463 1.228-.6.372-3.78 2.04-4.499 2.305-.512.19-1.068.146-1.395-.824-.402-1.198.162-1.482.965-1.794.711-.275 3.66-1.344 4.345-1.53a1 1 0 0 1 .334-.038",
});
ae("codepen", {
  color: "#151515",
  path: "M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m.5-25.7q-.45-.3-.9 0l-9.1 5.9c-.2.2-.4.4-.4.7v6.2c0 .3.1.6.4.7l9.1 5.9q.45.3.9 0l9.1-5.9c.2-.2.4-.4.4-.7v-6.2c0-.3-.1-.6-.4-.7zm.3 2.2 6.8 4.5-3 2-3.7-2.5v-4zm-1.6 0v4L27.4 31l-3-2zm-7.4 6.1 2.1 1.4-2.1 1.4zm7.4 8.9L24.4 35l3-2 3.7 2.5v4zM32 34l-3-2 3-2 3 2zm.8 5.5v-4l3.7-2.5 3 2zm7.4-6.1L38.1 32l2.1-1.4z",
});
ae("dev.to", {
  color: "#000000",
  path: "M0 0h64v64H0Zm10.29 20.228v23.636h6.535c5.18.008 6.816-4.062 6.816-6.75V26.982c-.003-2.688-1.683-6.754-6.675-6.754zm18.637.004c-1.57.039-2.817 1.363-2.778 2.957v17.87c.04 1.595 1.348 2.856 2.918 2.813h8.762V39.65h-7.508v-5.49h4.59v-4.22h-4.59v-5.49h7.508v-4.218zm11.39 0 5.43 20.687c1.492 3.52 4.828 4.39 6.687 0l5.418-20.687h-4.59l-4.167 16.246-4.188-16.246zM14.74 24.65h2.457q.823 0 1.645.62.814.624.82 1.868v9.95c0 .827-.273 1.452-.82 1.866q-.82.621-1.641.621h-2.46z",
});
ae("developer.mozilla", { color: "#236ab4", path: "M0 0v64h64V0zm32 48.35h-3.69v-32.7l-10.15 32.7h-4.15l10.11-32.7H32zm18 0h-3.69v-32.7l-10.12 32.7h-4.15l10.11-32.7H50z" });
ae("discord", {
  color: "#5865F2",
  path: "M0 0v64h64V0zm36.903 18.5a29.6 29.6 0 0 1 7.374 2.269c4.045 5.914 6.055 12.585 5.313 20.283a29.6 29.6 0 0 1-9.05 4.537 21.7 21.7 0 0 1-1.936-3.12 19.3 19.3 0 0 0 3.055-1.46 11 11 0 0 1-.747-.562 21.25 21.25 0 0 1-18.082 0c-.242.186-.492.377-.748.562a19 19 0 0 0 3.05 1.457 22 22 0 0 1-1.937 3.123 29.7 29.7 0 0 1-9.043-4.54c-.633-6.638.632-13.37 5.299-20.275a29.8 29.8 0 0 1 7.38-2.274q.522.935.944 1.92a27.5 27.5 0 0 1 8.183 0q.422-.985.945-1.92m-10.97 18.467c-1.762 0-3.218-1.6-3.218-3.568s1.405-3.581 3.213-3.581c1.807 0 3.252 1.614 3.222 3.581-.031 1.968-1.42 3.568-3.216 3.568m11.875 0c-1.765 0-3.216-1.6-3.216-3.568s1.406-3.581 3.216-3.581 3.244 1.614 3.213 3.581c-.03 1.968-1.417 3.568-3.213 3.568",
});
ae("dribbble", {
  color: "#ea4c89",
  path: "M34.3 34.3c-7.7 2.7-10.5 8-10.7 8.5 2.3 1.8 5.2 2.9 8.4 2.9 1.9 0 3.7-.4 5.3-1.1-.2-1.2-1-5.4-3-10.3.1-.1.1 0 0 0m-3-6.7c-2.3-4-4.7-7.4-5.1-7.9-3.8 1.8-6.7 5.3-7.6 9.6.6-.1 6.3 0 12.7-1.7m1.7 4.5c.2-.1.4-.1.5-.2-.3-.8-.7-1.6-1.1-2.3-6.8 2-13.4 2-14 1.9v.4c0 3.5 1.3 6.7 3.5 9.1.3-.4 4-6.6 11.1-8.9m8.1-10.3c-2.4-2.1-5.6-3.4-9.1-3.4-1.1 0-2.2.1-3.2.4.4.5 2.9 3.9 5.1 8 4.9-1.9 6.9-4.7 7.2-5m-6.2 7c.3.7.6 1.3.9 2 .1.2.2.5.3.7 4.5-.6 9.1.3 9.5.4 0-3.2-1.2-6.2-3.1-8.5-.2.4-2.5 3.3-7.6 5.4m2.1 4.8c1.8 4.9 2.5 8.9 2.7 9.7 3.1-2.1 5.2-5.4 5.9-9.2-.6-.1-4.3-1.2-8.6-.5M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16",
});
ae("dropbox", {
  color: "#1081DE",
  path: "M0 0v64h64V0zm41.5 41.2L32 46.9l-9.4-5.7v-2.1l2.8 1.8 6.6-5.5 6.6 5.5 2.8-1.8v2.1zm6.5-7.5-9.4 6.1-6.6-5.5-6.6 5.5-9.4-6.1 6.5-5.2-6.5-5.2 9.4-6.1 6.6 5.5 6.6-5.5 9.4 6.1-6.5 5.2zm-25.5-5.2 9.5 5.9 9.5-5.9-9.5-5.9z",
});
ae("facebook", { color: "#3b5998", path: "M0 0v64h64V0zm39.6 22h-2.8c-2.2 0-2.6 1.1-2.6 2.6V28h5.3l-.7 5.3h-4.6V47h-5.5V33.3H24V28h4.6v-4c0-4.6 2.8-7 6.9-7 2 0 3.6.1 4.1.2z" });
ae("email", { color: "#7f7f7f", path: "M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z" });
ae("fivehundredpix", {
  color: "#222222",
  path: "M33.3 31.3c-.4-.2-.7-.4-1.1-.6-.3-.1-.8-.1-.9-.1-1.1 0-1.9.6-2.2 2.1v.9c0 .1.1.4.2.7.3.9 1.4 1.3 2.1 1.3s1.2-.2 1.9-.6c.5-.3 1-.7 1.4-1.1.2-.2.5-.5.5-.6.1-.5-1.5-1.7-1.9-2m9.5-.7c-1.3 0-2.4 1-3.8 2.6 1.3 1.5 2.6 2.3 3.9 2.3 1.5 0 2.2-1.1 2.2-2.4.1-1.4-.8-2.5-2.3-2.5M0 0v64h64V0zm42.9 38.5c-2 0-3.8-1-5.7-3.3-2.2 2.4-3.7 3.3-5.7 3.3-1.8 0-3.7-.7-4.8-3.1-1.2 2.5-3.3 3.2-5.1 3.2-1.6 0-3.8-.4-5-2.5-.1-.1-.6-1.3-.6-1.6v-.7h3c.1 1.6 1.3 2.2 2.4 2.2 1.3 0 2.4-.9 2.6-2.6v-.7c-.2-1.8-1.3-2.4-2.6-2.4-.8 0-1.6.2-2.3 1.2h-2.7v-.2l1.5-8h8.4v2.5h-6.2l-.6 3.3c1-.9 2-1.1 2.9-1.1 1.4 0 3.2.6 4.1 2.6 1-2.4 3-3.2 4.7-3.2 2 0 3.9 1 5.8 3.5 2.1-2.6 3.7-3.5 5.8-3.5 3.3 0 5.1 2.4 5.1 5.4.1 3.1-1.7 5.7-5 5.7",
});
ae("flickr", { color: "#0063db", path: "M38 27c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m-6-21c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5" });
ae("foursquare", {
  color: "#0072b1",
  path: "M39.7 20.4H26.4c-.6 0-1 .5-1 1v20.5c0 .1 0 .1.1 0 0 0 4.9-5.9 5.4-6.5.5-.7.8-.8 1.6-.8H37c.6 0 1-.5 1-.8.1-.3.6-3 .7-3.6.1-.5-.4-1.1-.9-1.1h-5.5c-.7 0-1.2-.5-1.2-1.2v-.8c0-.7.5-1.2 1.2-1.2h6.4c.5 0 .9-.4 1-.8l.7-3.6c.2-.6-.2-1.1-.7-1.1M0 0v64h64V0zm44 20.9-1 5.2c-.8 4.2-1.8 9-1.9 9.5-.2.9-.6 2.4-2.7 2.4h-5.1c-.2 0-.2 0-.4.2-.1.1-7.9 9.2-7.9 9.2-.6.7-1.6.6-2 .4-.4-.1-1-.6-1-1.8V19.7c0-1.1.7-2.8 3-2.8h16.5c2.4.1 3.1 1.5 2.5 4",
});
ae("github", {
  color: "#24292e",
  path: "M0 0v64h64V0zm37.1 47.2c-.8.2-1.1-.3-1.1-.8V42c0-1.5-.5-2.5-1.1-3 3.6-.4 7.3-1.7 7.3-7.9 0-1.7-.6-3.2-1.6-4.3.2-.4.7-2-.2-4.2 0 0-1.3-.4-4.4 1.6-1.3-.4-2.6-.5-4-.5s-2.7.2-4 .5c-3.1-2.1-4.4-1.6-4.4-1.6-.9 2.2-.3 3.8-.2 4.2-1 1.1-1.6 2.5-1.6 4.3 0 6.1 3.7 7.5 7.3 7.9-.5.4-.9 1.1-1 2.1-.9.4-3.2 1.1-4.7-1.3 0 0-.8-1.5-2.5-1.6 0 0-1.6 0-.1 1 0 0 1 .5 1.8 2.3 0 0 .9 3.1 5.4 2.1v2.7c0 .4-.3.9-1.1.8-6.3-2-10.9-8-10.9-15.1 0-8.8 7.2-16 16-16s16 7.2 16 16c0 7.1-4.6 13.1-10.9 15.2",
});
ae("google", {
  color: "#dd4b39",
  path: "M0 0v64h64V0zm31.3 19.1q.45.45.9 1.2c.3.4.5.9.7 1.5q.3.9.3 2.1c0 1.4-.3 2.6-.9 3.4l-.9 1.2c-.4.4-.8.7-1.2 1.1-.2.2-.5.5-.7.8s-.4.7-.4 1.1.1.8.4 1c.2.3.4.5.6.7l1.4 1.1c.8.7 1.6 1.5 2.2 2.3s.9 2 .9 3.3c0 1.9-.9 3.7-2.6 5.2-1.8 1.6-4.3 2.4-7.7 2.4q-4.2 0-6.3-1.8-2.1-1.65-2.1-3.9c0-.7.2-1.6.7-2.5q.6-1.35 2.4-2.4c1.3-.7 2.7-1.2 4.1-1.5 1.4-.2 2.6-.3 3.5-.4-.3-.4-.5-.8-.8-1.2s-.4-.9-.4-1.5c0-.4 0-.6.2-.9.1-.2.2-.5.2-.7-.5.1-.9.1-1.3.1-2.1 0-3.8-.7-4.9-2-1.2-1.2-1.8-2.7-1.8-4.3 0-2 .8-3.8 2.5-5.4 1.1-.9 2.3-1.6 3.5-1.8s2.3-.4 3.4-.4h8L33 18.4h-2.5c.2.2.5.4.8.7M48 32h-4.3v4.2h-2.5V32H37v-2.5h4.2v-4.3h2.5v4.3H48zM27.1 19.1c-.6-.5-1.4-.7-2.2-.7-1.1 0-2 .5-2.7 1.3q-.9 1.35-.9 3c0 1.5.4 3 1.3 4.5.4.7.9 1.4 1.6 1.9.6.5 1.4.8 2.2.8 1.1 0 1.9-.4 2.6-1.1.3-.5.6-1 .7-1.6.1-.5.1-1 .1-1.4q0-2.4-1.2-4.8c-.4-.8-.9-1.5-1.5-1.9m-.2 17.1c-.2 0-.7 0-1.6.1-.8.1-1.7.3-2.5.6-.2.1-.5.2-.9.4s-.7.4-1.1.7q-.6.45-.9 1.2c-.3.5-.4 1.1-.4 1.8 0 1.4.6 2.6 1.9 3.5 1.2.9 2.9 1.4 5 1.4 1.9 0 3.3-.4 4.3-1.3 1-.8 1.5-1.8 1.5-3.1 0-1-.3-1.9-1-2.7-.7-.7-1.8-1.6-3.3-2.6z",
});
ae("gitlab", {
  color: "#f96424",
  path: "M0 0v64h64V0zm50.402 32.559-1.969-6.066v.007-.011L44.52 14.454a1.54 1.54 0 0 0-1.476-1.055c-.68.004-1.25.422-1.461 1.062l-3.715 11.426h-11.72l-3.722-11.426a1.52 1.52 0 0 0-1.46-1.062h-.009c-.664 0-1.257.422-1.472 1.062L15.58 26.488v.004s0 .004-.004.008q.005-.007.004-.008l-1.98 6.067c-.297.914.027 1.91.805 2.476l17.082 12.402q.006-.001.007.004c.008.004.016.012.024.016-.008-.004-.012-.012-.02-.016l.004.004h.004q.035.028.082.051l.008.008h.004l.004.004h.008q0 .005.003.004c.004 0 .004.004.008.004q.024.009.047.02.022.006.043.015v.004h.008q.006.004.012.003h.004c0 .004.007.004.011.004h.004q.03.011.063.016.012.007.023.008h.004l.008.004h.015q.004-.001.008.004h.004q.061.006.121.007h.004q.061 0 .121-.007h.004q.006-.005.012-.004h.012q.007-.002.007-.004h.004l.028-.008.062-.016h.004q.006.001.012-.004h.004s.004 0 .008-.003h.007v-.004c.016-.004.032-.012.047-.016l.043-.02.008-.003h.004q.004-.005.008-.004l.008-.004.011-.008q.042-.023.082-.05.002.001.004-.005h.004q.004-.005.008-.004L49.6 35.035a2.21 2.21 0 0 0 .8-2.476zm-7.352-16.98 3.352 10.309h-6.7zm2.766 12.051-1.367 1.75-10.086 12.91 4.77-14.66zM31.171 47.001q.005.004.004.008.001-.004-.004-.008m-1.527-4.707L18.199 27.63h6.68zm-8.688-26.715 3.356 10.309h-6.703zm-5.523 18.047a.47.47 0 0 1-.172-.527l1.473-4.512 10.773 13.805zM31.46 47.415q-.006-.007-.012-.008v-.004q-.013-.008-.02-.015-.022-.018-.039-.036c.004 0 .004.004.004.004s.004 0 .004.004c.028.024.051.047.078.067h.004s0 .004.004.004c-.008-.004-.015-.012-.023-.016m.543-3.504-2.805-8.625-2.484-7.656H37.3zm.574 3.477q-.013.008-.02.015-.004-.001-.003.004a.01.01 0 0 0-.008.008c-.008.004-.016.012-.024.016 0 0 0-.004.004-.004a1 1 0 0 0 .078-.067l.004-.004s.004 0 .004-.003zm15.996-13.762-12.074 8.761L47.28 28.59l1.465 4.508a.47.47 0 0 1-.172.528",
});
ae("google_play", { color: "#40BBC1", path: "M0 0v64h64V0zm40.4 27.1-3.6 3.6-12.3-12.3zM22 44.5V19.4c0-.4.1-.7.2-.9L35.6 32 22.2 45.4c-.1-.2-.2-.5-.2-.9m2.4 1.1 12.4-12.4 3.6 3.6zm22.7-12.4-5 2.8-4-4 3.9-3.9 5.1 2.8c1.2.5 1.2 1.6 0 2.3" });
ae("groupme", {
  color: "#00aff0",
  path: "M0 0v64h64V0zm40.321 39.434a10.4 9.517 0 0 1-16.64 0 2.6 2.38 0 1 0-4.161 2.856 15.6 14.276 0 0 0 24.961 0 2.6 2.38 0 0 0-4.16-2.856m-17.42-12.848a2.6 2.38 0 0 0 0 4.759h1.3v1.19a2.6 2.38 0 0 0 5.2 0v-1.19h5.2v1.19a2.6 2.38 0 0 0 5.2 0v-1.19h1.3a2.6 2.38 0 0 0 0-4.759h-1.3v-4.758h1.3a2.6 2.38 0 0 0 0-4.759h-1.3v-1.19a2.6 2.38 0 0 0-5.2 0v1.19h-5.2v-1.19a2.6 2.38 0 0 0-5.2 0v1.19h-1.3a2.6 2.38 0 0 0 0 4.759h1.3v4.758zm6.5-4.758h5.2v4.758h-5.2z",
});
ae("hashnode", {
  color: "#2962FF",
  path: "M0 0v64h64V0zm15 24c-4.4 4.4-4.4 11.5 0 15.9l9.7 9.7c4.4 4.4 11.5 4.4 15.9 0l9.7-9.7c4.4-4.4 4.4-11.5 0-15.9l-9.7-9.7c-4.4-4.4-11.5-4.4-15.9 0zm22.3 13.5c3.1-3.1 3.1-8.1 0-11.1-3.1-3.1-8.1-3.1-11.1 0-3.1 3.1-3.1 8.1 0 11.1 3.1 3.1 8.1 3.1 11.1 0",
});
ae("instagram", {
  color: "#e94475",
  path: "M0 0v64h64V0zm39.88 25.89c.98 0 1.77-.79 1.77-1.77s-.79-1.77-1.77-1.77-1.77.79-1.77 1.77.79 1.77 1.77 1.77M32 24.42c-4.18 0-7.58 3.39-7.58 7.58s3.4 7.58 7.58 7.58 7.58-3.4 7.58-7.58-3.4-7.58-7.58-7.58m0 12.5c-2.72 0-4.92-2.2-4.92-4.92s2.2-4.92 4.92-4.92 4.92 2.2 4.92 4.92-2.2 4.92-4.92 4.92m0-17.02c3.94 0 4.41.02 5.96.09 1.45.06 2.23.3 2.75.51.69.27 1.18.58 1.7 1.1.51.52.83 1.01 1.1 1.7.2.52.44 1.3.51 2.74.07 1.56.09 2.02.09 5.97 0 3.94-.02 4.4-.09 5.96-.07 1.44-.31 2.22-.51 2.74-.27.69-.59 1.19-1.1 1.7-.52.52-1.01.84-1.7 1.1-.52.2-1.3.45-2.75.51-1.55.07-2.02.09-5.96.09s-4.41-.02-5.96-.09c-1.45-.06-2.23-.3-2.75-.51-.69-.27-1.18-.58-1.7-1.1-.51-.51-.83-1.01-1.1-1.7-.2-.52-.44-1.3-.51-2.74-.07-1.56-.09-2.02-.09-5.96 0-3.95.02-4.41.09-5.97.07-1.44.31-2.22.51-2.74.27-.69.59-1.18 1.1-1.7.52-.52 1.01-.84 1.7-1.1.52-.2 1.3-.45 2.75-.51 1.55-.08 2.02-.09 5.96-.09m0-2.66c-4.01 0-4.51.02-6.09.09-1.57.07-2.64.32-3.58.68-.97.38-1.79.89-2.61 1.71s-1.33 1.65-1.71 2.61c-.36.94-.61 2.01-.68 3.59-.07 1.57-.09 2.07-.09 6.08s.02 4.51.09 6.09c.07 1.57.32 2.64.68 3.58.38.98.89 1.8 1.71 2.62s1.65 1.32 2.61 1.7c.94.37 2.01.62 3.59.69 1.57.07 2.07.09 6.09.09 4.01 0 4.51-.02 6.08-.09s2.65-.32 3.59-.69c.97-.37 1.79-.88 2.61-1.7s1.33-1.65 1.71-2.62c.36-.93.61-2.01.68-3.58.07-1.58.09-2.08.09-6.09s-.02-4.51-.09-6.09c-.07-1.57-.32-2.64-.68-3.58-.38-.98-.89-1.8-1.71-2.62a7.3 7.3 0 0 0-2.61-1.7c-.94-.37-2.01-.62-3.59-.69-1.58-.06-2.08-.08-6.09-.08",
});
ae("itch.io", {
  color: "#fa5c5c",
  path: "M0 0v64h64V0zm32 16c4.482 0 7.49.028 11.828.197 1.396.921 4.146 4.435 4.172 5.356v1.523c0 1.933-1.624 3.631-3.1 3.631-1.771 0-3.248-1.631-3.248-3.568 0 1.937-1.425 3.568-3.197 3.568-1.771 0-3.152-1.631-3.152-3.568 0 1.937-1.516 3.568-3.287 3.568h-.032c-1.771 0-3.287-1.631-3.287-3.568 0 1.937-1.38 3.568-3.152 3.568s-3.197-1.631-3.197-3.568c0 1.937-1.477 3.568-3.248 3.568-1.476 0-3.1-1.698-3.1-3.63v-1.524c.026-.921 2.776-4.434 4.172-5.356C21.407 16.077 27.518 16 32 16m-3.326 9.797a3.65 4.058 0 0 0 .619.892 3.716 4.13 0 0 0 2.602 1.178q.053 0 .105-.002l.107.002a3.716 4.13 0 0 0 2.602-1.178 3.65 4.058 0 0 0 .617-.892 3.655 4.063 0 0 0 .623.892c.669.727 1.585 1.178 2.596 1.178a3.714 4.129 0 0 0 2.601-1.178c.243-.263.427-.546.596-.875.169.33.404.611.647.875a3.717 4.132 0 0 0 2.601 1.178c.122 0 .25-.037.352-.076a66 66 0 0 1 .222 4.373l.002.006.008 1.73c-.027 3.46.307 11.21-1.373 13.116-2.603.674-7.395.982-12.201.984-4.806-.002-9.598-.31-12.201-.984-1.68-1.905-1.344-9.657-1.371-13.116.002-.666.005-1.147.008-1.73v-.006c.02-1.149.08-2.724.222-4.373.103.04.23.076.352.076a3.717 4.132 0 0 0 2.601-1.178c.243-.264.478-.545.647-.875.168.329.353.612.596.875a3.714 4.129 0 0 0 2.601 1.178c1.01 0 1.927-.45 2.596-1.178a3.655 4.063 0 0 0 .623-.892m9.324 3.84v.002h-.002c-1.058.002-1.997 0-3.162 1.414a24 24 0 0 0-2.834-.16 24 24 0 0 0-2.834.16c-1.165-1.413-2.104-1.412-3.162-1.414h-.002c-.5 0-2.5 0-3.893 4.35l-1.496 5.966c-1.109 4.44.354 4.549 2.18 4.553 2.708-.112 4.209-2.298 4.209-4.485 1.5.274 3.249.41 4.998.41s3.499-.136 4.998-.41c0 2.187 1.499 4.373 4.207 4.485 1.826-.004 3.29-.113 2.182-4.553l-1.496-5.967c-1.394-4.35-3.393-4.351-3.893-4.351M32 33.057s2.851 2.91 3.363 3.945l-1.865-.082v1.809c0 .084-.749.05-1.498.011-.75.039-1.498.073-1.498-.011v-1.81l-1.865.083c.512-1.034 3.36-3.943 3.363-3.945",
});
ae("itunes", {
  color: "#E049D1",
  path: "M0 0v64h64V0zm42.5 40c0 2.2-1.8 4-4 4h-2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h2.8c.8 0 1.4-.6 1.4-1.4v-11c0-.5-.4-.9-.9-.9h-.2l-12.1 2.4c-.4.1-.7.4-.7.9V43c0 2.2-1.8 4-4 4h-2c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h2.8c.8 0 1.4-.6 1.4-1.4V21.3c0-.7.5-1.2 1.1-1.4l14.7-3h.3c.8 0 1.4.6 1.4 1.4z",
});
ae("leetcode", {
  color: "#E7A41F",
  path: "M0 0h64v64H0zm42.05 42.07a2.12 2.12 0 0 0-3.069-.005l-3.77 3.885a4.65 4.65 0 0 1-6.616.06l-6.758-6.84c-1.824-1.846-2.143-4.74-.56-6.49l6.21-6.625c1.664-1.84 5.04-2.061 6.97-.45l5.508 4.596c.932.779 2.299.628 3.052-.336s.607-2.377-.326-3.156l-5.507-4.596c-1.204-1.005-2.649-1.641-4.161-1.917L36.5 16.5c.85-.91.947-2.264.04-3.116a2.245 2.245 0 0 0-3.181.107l-9.043 9.499-6.063 6.7c-3.252 3.594-2.908 9.19.548 12.688l6.79 6.871a8.887 8.887 0 0 0 12.685-.12l3.77-3.886a2.3 2.3 0 0 0 .005-3.173m-14.396-6.016c0 1.24.971 2.244 2.17 2.244H45.83c1.198 0 2.17-1.005 2.17-2.244s-.972-2.244-2.17-2.244H29.824c-1.199 0-2.17 1.005-2.17 2.244",
});
ae("line.me", {
  color: "#4cc764",
  path: "M0 0h64v64H0Zm27.54 13.171a26 26 0 0 1 6.17-.319c3.058.196 5.992.9 8.776 2.19 3.394 1.572 6.257 3.797 8.336 6.945 1.942 2.94 2.79 6.171 2.425 9.69-.286 2.758-1.398 5.185-3.046 7.382s-3.614 4.082-5.734 5.811c-3.558 2.901-7.32 5.505-11.32 7.758-.463.26-.954.469-1.437.69a2.4 2.4 0 0 1-.457.14c-.9.212-1.32-.166-1.184-1.077.099-.663.247-1.32.322-1.986.062-.558.074-1.124.062-1.686-.01-.494-.3-.862-.747-1.026-.574-.211-1.166-.405-1.767-.504-4.812-.789-9.1-2.66-12.59-6.137-2.247-2.238-3.792-4.89-4.423-8.028-.762-3.794-.064-7.333 1.949-10.61 1.868-3.044 4.503-5.257 7.642-6.896 2.205-1.15 4.545-1.912 7.023-2.337m4.31 18.669v-2.078c.126.159.192.239.254.323 1.294 1.747 2.59 3.492 3.875 5.244.176.24.369.352.67.335.392-.022.787-.004 1.181-.006.414-.002.54-.12.541-.529q.003-4.543 0-9.085c0-.4-.133-.531-.542-.538-.394-.006-.788-.002-1.182-.001-.512.002-.618.107-.618.621v5.291c-.149-.192-.234-.299-.316-.409-1.28-1.73-2.563-3.458-3.837-5.193-.153-.209-.324-.318-.585-.313-.426.01-.852-.004-1.278.004-.369.008-.503.14-.504.51q-.006 4.575 0 9.15c.001.362.143.488.516.491q.639.005 1.279 0c.428-.002.545-.118.546-.555.002-1.066 0-2.132 0-3.263m12.106 1.473h-1.79v-1.558h.366q1.79.001 3.58-.001c.39 0 .52-.125.527-.514.008-.405.004-.81.001-1.216-.002-.507-.11-.614-.627-.614l-3.484-.002c-.123 0-.245-.012-.355-.018v-1.54h.38q1.773.001 3.546-.001c.409 0 .533-.124.539-.535q.01-.656-.001-1.312c-.006-.35-.137-.493-.486-.494q-2.925-.009-5.849 0c-.353 0-.48.14-.48.489q-.003 4.59 0 9.18c0 .356.125.479.484.48q2.907.003 5.816 0c.383 0 .51-.13.516-.525q.007-.624 0-1.248c-.003-.447-.122-.568-.574-.57-.681-.005-1.363-.002-2.109-.002m-26.32 1.893c.006.32.178.454.488.454 1.949-.002 3.898 0 5.847-.002.35 0 .476-.13.482-.486.006-.395.002-.79.002-1.184 0-.585-.087-.674-.66-.674l-3.451-.001c-.113 0-.226-.01-.365-.018v-7.159c0-.519-.106-.627-.612-.63q-.56-.003-1.118 0c-.515.001-.613.101-.613.622zm10.432-1.51v-7.606c0-.465-.117-.581-.589-.585q-.543-.002-1.085 0c-.58 0-.68.103-.681.693v8.756c0 .086-.004.171.002.256.024.286.163.451.468.45.468-.003.936.003 1.405-.002.34-.004.475-.144.478-.492.004-.468.001-.937.001-1.47z",
});
ae("linkedin", {
  color: "#007fb1",
  path: "M0 0v64h64V0zm25.8 44h-5.4V26.6h5.4zm-2.7-19.7c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1M46 44h-5.4v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.5V44h-5.4V26.6h5.2V29h.1c.7-1.4 2.5-2.8 5.1-2.8 5.5 0 6.5 3.6 6.5 8.3V44z",
});
ae("mailto", { color: "#7f7f7f", path: "M41.1 25H22.9l9.1 7.1zm2.9 1.6-12 9.3-12-9.3V39h24zM0 0v64h64V0zm47 42H17V22h30z" });
ae("mastodon", {
  color: "#17063B",
  path: "M-.135-.135v64.541h64.678V-.134ZM31.91 16c4.394-.016 8.82.462 11.213 1.488 0 0 4.875 2.042 4.875 8.992 0 0 .064 5.126-.684 8.688-.477 2.26-4.218 4.734-8.515 5.213-1.54.17-7.13 1.013-13.686-.48q-.002.5.069.995c.507 3.546 3.767 3.76 6.861 3.86 3.123.093 5.646-.723 5.646-.723l.13 2.639s-1.924 1.093-5.815 1.295c-2.144.113-4.811-.05-7.912-.815C15.994 45.143 16 34.754 16 26.48c0-6.95 4.883-8.992 4.883-8.992 2.27-.96 6.633-1.472 11.027-1.488m-4.703 5.3c-1.505-.036-3.027.51-4.016 1.532-1.802 1.918-1.406 3.174-1.406 11.816h3.569v-7.513c0-3.518 4.882-3.651 4.882.49v4.354h3.537v-4.354c0-4.141 4.887-4.006 4.887-.488v7.515h3.56v-.004c0-8.636.404-9.883-1.406-11.816-1.962-2.032-6.087-2.196-7.927.43l-.883 1.383-.887-1.383c-.916-1.306-2.405-1.924-3.91-1.961",
});
ae("linktree", {
  color: "#39e09b",
  path: "M0 0v64h64V0zm27.436 19.386c-.6-.948-2.162-.948-2.762 0L14.344 35.83c-.48.843.24 1.792 1.322 1.792h6.966v6.218c0 .633.6 1.16 1.321 1.16h4.083c.721 0 1.321-.527 1.321-1.16v-6.218h-1.921c-.84 0-1.441-.527-1.562-1.16 0-.21 0-.421.12-.635l5.766-9.17zm9.128 0c.6-.948 2.162-.948 2.762 0l10.33 16.444c.48.843-.24 1.792-1.322 1.792h-6.846v6.218c0 .633-.6 1.16-1.322 1.16h-4.323c-.72 0-1.32-.527-1.32-1.16v-6.218h1.921c.84 0 1.441-.527 1.561-1.16 0-.21 0-.421-.12-.635L32.12 26.66z",
});
ae("matrix", {
  color: "#000000",
  path: "M0 0v64h64V0zm16 16h3.04v.732h-2.198v30.536h2.197V48H16zm28.96 0H48v32h-3.04v-.732h2.198V16.732h-2.197zM29.769 26.104c.72 0 1.377.143 1.974.42.598.277 1.046.775 1.36 1.476q.509-.749 1.378-1.322.87-.574 2.061-.574.904 0 1.68.222c.517.147.955.382 1.324.707.368.327.652.745.861 1.268q.306.783.307 1.89v7.637h-3.131V31.36q0-.573-.043-1.082a2.3 2.3 0 0 0-.24-.88 1.5 1.5 0 0 0-.584-.596q-.39-.222-1.047-.223-.665 0-1.07.252a1.84 1.84 0 0 0-.641.666 2.6 2.6 0 0 0-.309.928 7.4 7.4 0 0 0-.08 1.047v6.357h-3.132v-6.4c0-.339-.005-.67-.024-1.002a2.8 2.8 0 0 0-.191-.918 1.4 1.4 0 0 0-.553-.67c-.259-.167-.635-.254-1.139-.254q-.224 0-.586.1a2 2 0 0 0-.705.375q-.344.277-.586.793-.24.519-.24 1.36v6.622H23.28v-11.42h2.953v1.541h.045a4.4 4.4 0 0 1 1.49-1.365c.578-.327 1.249-.486 2-.486",
});
ae("meetup", {
  color: "#E51937",
  path: "M0 0v64h64V0zm47.8 44.3c-.4.2-2.5.9-3.9 1-.6.1-1.1-.6-1.4-1.5C41 39.2 39 32 37.3 27.2c0 3.7-.3 10.8-.4 12-.1 1.7-.4 3.7-1.8 3.9-1.1.2-2.4.4-4 .4-1.3 0-1.8-.9-2.4-1.8-1-1.4-3.1-4.8-4.1-6.9.3 2.3.7 4.7.9 5.8.1.8 0 1.5-.6 1.9-1 .7-3.2 1.4-4.1 1.4-.8 0-1.5-.8-1.6-1.6-.7-3.4-1.2-8-1.1-11.1 0-2.8 0-5.9.2-8.3 0-.7.3-1.1.9-1.4 1.2-.5 3-.6 4.7-.3.8.1 1 .8 1.4 1.4 1.7 2.8 3.8 6.7 5.7 10.6 0-6.3 1.9-11.9 3.5-15.3.5-1.1.9-1.4 1.9-1.4 1.3 0 2.9.2 4.1.4 1.1.2 1.5 1.6 1.7 2.5 1.2 4.5 4.7 18.7 5.5 22.4.1 1 .6 2.2.1 2.5",
});
ae("medium", {
  color: "#000000",
  path: "M0 0v64h64V0zm25.025 22.914c4.985 0 9.026 4.068 9.026 9.086s-4.041 9.086-9.026 9.086S16 37.018 16 32s4.041-9.086 9.025-9.086m14.413.531c2.492 0 4.511 3.83 4.511 8.555h.002c0 4.724-2.021 8.555-4.514 8.555-2.492 0-4.511-3.831-4.511-8.555s2.02-8.555 4.511-8.555m6.974.89C47.288 24.336 48 27.768 48 32c0 4.231-.711 7.664-1.588 7.664S44.826 36.232 44.826 32s.71-7.664 1.586-7.664",
});
ae("onlyfans", {
  color: "#00aeef",
  path: "M0-.006v64.012h64V-.006zm25.348 18.014a14 14 0 0 1 9.148 3.41c2.534-3.084 5.779-3.41 11.82-3.41h7.032c-1.176 5.179-5.229 9.138-12.264 10.5 3.557 1.024 7.756 0 7.756 0-1.22 5.32-5.083 8.65-10.654 9.056l-.063.12a14 14 0 0 1-.623 1.199 14 14 0 0 1-.357.63 14 14 0 0 1-.713.987 14 14 0 0 1-.526.674 14 14 0 0 1-.771.797 14 14 0 0 1-.696.66 14 14 0 0 1-.83.637 14 14 0 0 1-.822.578 14 14 0 0 1-.877.49 14 14 0 0 1-.943.475 14 14 0 0 1-.904.343 14 14 0 0 1-1.024.338 14 14 0 0 1-.935.207 14 14 0 0 1-1.077.188 14 14 0 0 1-.953.068 14 14 0 0 1-.724.053l.011-.035a14 14 0 1 1-.011-27.965m0 9.8a4.2 4.2 0 0 0 0 8.399 4.194 4.194 0 0 0 4.199-4.2 4.2 4.2 0 0 0-4.2-4.198",
});
ae("misskey", {
  color: "#86b300",
  path: "M0 0h64v64H0Zm16.97 18.07c-.57 0-1.13.1-1.66.29-.94.33-1.72.93-2.32 1.78-.58.83-.87 1.75-.87 2.78v18.16c0 1.33.47 2.47 1.41 3.44.97.94 2.12 1.41 3.44 1.41 1.36 0 2.5-.47 3.44-1.41.97-.97 1.45-2.12 1.45-3.44v-3.3c.01-.72.75-.53 1.12 0 .7 1.21 2.33 2.24 3.9 2.24s3.15-.86 3.9-2.24c.28-.33 1.08-.9 1.16 0v3.3c0 1.33.47 2.47 1.41 3.44.97.94 2.12 1.41 3.44 1.41 1.35 0 2.5-.47 3.44-1.41.97-.97 1.45-2.12 1.45-3.44V22.92c0-1.02-.3-1.95-.91-2.78-.58-.86-1.34-1.45-2.28-1.78-.55-.19-1.11-.29-1.66-.29-1.49 0-2.75.58-3.77 1.74l-4.92 5.76c-.11.08-.48.72-1.26.72s-1.1-.63-1.21-.72l-4.96-5.76c-1-1.16-2.24-1.74-3.74-1.74m30.68 0c-1.16 0-2.16.41-2.98 1.24q-1.2 1.2-1.2 2.94c0 1.16.4 2.16 1.2 2.98.83.8 1.82 1.2 2.98 1.2s2.16-.4 2.99-1.2c.83-.83 1.24-1.82 1.24-2.98s-.41-2.14-1.24-2.94c-.84-.83-1.83-1.24-2.99-1.24m.04 9.2c-1.16 0-2.16.41-2.99 1.24s-1.24 1.82-1.24 2.99v10.24c0 1.16.41 2.16 1.24 2.98.83.8 1.82 1.2 2.99 1.2q1.74 0 2.94-1.2c.83-.83 1.24-1.82 1.24-2.98V31.5c0-1.16-.41-2.16-1.24-2.99-.8-.82-1.78-1.24-2.94-1.24",
});
ae("opensea", {
  color: "#2081E2",
  path: "M0 0h64v64H0Zm33 12.8c.5 0 .956.204 1.281.536.326.332.528.787.528 1.293v3.101l.375.106q.046.014.086.043c.092.069.222.172.39.297.132.105.275.232.445.363.34.273.744.627 1.188 1.031.118.102.235.208.34.313a27 27 0 0 1 1.824 1.847c.171.194.337.391.508.598.17.21.354.418.512.625.207.276.427.56.62.86.093.14.2.288.29.43.25.377.469.768.68 1.16.088.18.178.376.257.57a8.5 8.5 0 0 1 .54 1.59c.035.115.06.24.074.351v.027c.039.158.053.326.066.496a5.3 5.3 0 0 1-.094 1.641c-.05.234-.112.454-.191.688-.08.223-.16.455-.262.675-.197.457-.43.913-.707 1.34a8 8 0 0 1-.297.485c-.115.167-.234.326-.34.48a10 10 0 0 1-.457.59 6 6 0 0 1-.445.559c-.22.26-.428.505-.648.742a7 7 0 0 1-.418.453c-.142.158-.287.298-.418.43-.22.22-.404.393-.559.535l-.363.332a.3.3 0 0 1-.196.07h-2.8v3.594h3.527c.789 0 1.536-.28 2.14-.793.208-.181 1.112-.96 2.18-2.14a.3.3 0 0 1 .137-.083l9.734-2.816a.287.287 0 0 1 .364.277v2.059c0 .118-.07.223-.176.27-.644.275-2.852 1.29-3.77 2.566-2.34 3.258-4.127 7.918-8.125 7.918H24.14c-5.91 0-10.699-4.808-10.699-10.739v-.191c0-.158.128-.285.286-.285h9.296c.184 0 .318.17.301.351a3.17 3.17 0 0 0 .332 1.785 3.27 3.27 0 0 0 2.934 1.82h4.605v-3.593h-4.55a.294.294 0 0 1-.239-.46c.05-.077.105-.154.164-.243a33 33 0 0 0 1.657-2.645c.417-.73.822-1.506 1.148-2.289a5 5 0 0 0 .172-.43c.089-.25.18-.48.246-.714.066-.198.12-.404.172-.598a9.3 9.3 0 0 0 .219-2.098 10 10 0 0 0-.04-.87c-.013-.313-.05-.626-.09-.938a10 10 0 0 0-.128-.836 14 14 0 0 0-.266-1.25l-.035-.156c-.079-.286-.146-.562-.238-.848a32 32 0 0 0-.871-2.59c-.115-.325-.248-.637-.38-.949-.193-.47-.393-.896-.574-1.3a18 18 0 0 1-.25-.524 17 17 0 0 0-.269-.574c-.066-.142-.143-.271-.195-.403l-.563-1.039a.183.183 0 0 1 .207-.265l3.52.953h.008l.011.004.465.128.512.145.187.05v-2.09c0-1.008.805-1.827 1.805-1.827m-8.488 6.903a.28.28 0 0 1 .238.168c1.39 3.117 2.59 6.993 2.027 9.406-.24.993-.897 2.34-1.636 3.582q-.145.272-.313.528a.28.28 0 0 1-.234.125H16.03a.284.284 0 0 1-.242-.438l.137-.215 8.324-13.023a.28.28 0 0 1 .262-.133",
});
ae("patreon", {
  color: "#000000",
  path: "M0 0h64v64H0Zm52.853 23.459c-.008-5.72-4.462-10.41-9.69-12.1-6.492-2.1-15.053-1.796-21.252 1.127-7.511 3.546-9.871 11.312-9.959 19.055-.07 6.369.564 23.139 10.022 23.259 7.03.088 8.077-8.969 11.328-13.33 2.314-3.104 5.294-3.979 8.96-4.886 6.303-1.562 10.6-6.536 10.591-13.125m0 0",
});
ae("pixiv", {
  color: "#0097fa",
  path: "M0 0v64h64V0zm33.553 16.469c-11.844 0-19.903 9.146-19.903 9.146l2.27 3.606s1.26.106.592-2.018c.573-1.086 1.698-2.545 3.892-4.232v24.008c-.946.268-2.194.768-1.34 1.623h6.518c.86-.861-.493-1.38-1.32-1.623v-5.663s4.469 1.756 9.29 1.756c4.234 0 8.088-1.26 10.954-3.537 2.869-2.264 4.712-5.642 4.703-9.506a12.75 12.75 0 0 0-4.41-9.709c-2.793-2.438-6.705-3.847-11.246-3.847zm-.397 2.027c3.601.003 6.425 1.36 8.338 3.43 1.907 2.075 2.948 4.83 2.957 8.04-.012 3.126-1.124 5.698-3.107 7.673-1.98 1.959-4.864 3.195-8.188 3.195h-.021c-3.699 0-6.816-.72-8.873-1.732V21.088c2.261-1.605 5.928-2.598 8.894-2.592",
});
ae("pinterest", {
  color: "#cb2128",
  path: "M0 0v64h64V0zm32 48c-1.6 0-3.1-.2-4.5-.7.6-1 1.3-2.2 1.6-3.4.2-.7 1.1-4.4 1.1-4.4.6 1.1 2.2 2 3.9 2 5.1 0 8.6-4.7 8.6-11 0-4.7-4-9.2-10.1-9.2-7.6 0-11.4 5.5-11.4 10 0 2.8 1 5.2 3.3 6.1.4.1.7 0 .8-.4.1-.3.2-1 .3-1.3.1-.4.1-.5-.2-.9-.6-.8-1.1-1.7-1.1-3.1 0-4 3-7.7 7.9-7.7 4.3 0 6.7 2.6 6.7 6.1 0 4.6-2 8.5-5.1 8.5-1.7 0-2.9-1.4-2.5-3.1.5-2 1.4-4.2 1.4-5.7 0-1.3-.7-2.4-2.2-2.4-1.7 0-3.1 1.8-3.1 4.1 0 1.5.5 2.5.5 2.5s-1.8 7.4-2.1 8.7c-.3 1.2-.3 2.6-.3 3.7C19.9 44.2 16 38.6 16 32c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16",
});
ae("ravelry", { color: "#EE6E62", path: "M0 0h64v64H0Zm42.692 28.943s-2.184-.397-3.752-.397c-3.584 0-4.424 1.987-4.424 4.939v12.488H24.83V20.542h9.687v4.257c1.176-3.576 3.528-4.825 8.176-4.825z" });
ae("rdio", {
  color: "#0475C5",
  path: "M0 0v64h64V0zm43.9 30.5c.1.5.1 1 .1 1.5 0 6.4-5.1 11.6-12 11.6s-12-5.1-12-11.5V32c0-6.4 5.1-11.6 12-11.6 1.2 0 2.3.2 3.4.5v6.8l-.6-.3c-3-1-6.2.4-7.7 2.9v.1c-1.5 2.5-.8 5.3 2.1 6.3 3 1 6.2-.4 7.7-2.9v-.1c.5-.8.8-1.7.8-2.6v-9.3c.2.1.3.2.5.3.1.1.3.2.4.2 1.5 1 5.4 3.5 8.7 3.4 1.7.1.2 3.8-3.4 4.8",
});
ae("reddit", {
  color: "#FF4500",
  path: "M0 0v64h64V0zm53.344 32a4.67 4.67 0 0 0-7.903-3.2 22.77 22.77 0 0 0-12.32-3.937L35.2 14.88l6.848 1.441a3.2 3.2 0 0 0 3.02 2.852 3.2 3.2 0 1 0-2.602-4.805l-7.84-1.566a1 1 0 0 0-.754.136.98.98 0 0 0-.43.63l-2.37 11.105a22.8 22.8 0 0 0-12.477 3.937 4.672 4.672 0 1 0-5.152 7.648q-.06.704 0 1.407c0 7.168 8.351 12.992 18.656 12.992 10.3 0 18.656-5.824 18.656-12.992a9.4 9.4 0 0 0 0-1.406A4.68 4.68 0 0 0 53.344 32m-32 3.2a3.198 3.198 0 1 1 6.398 0 3.195 3.195 0 0 1-3.199 3.198c-1.766 0-3.2-1.43-3.2-3.199M39.938 44a12.3 12.3 0 0 1-7.907 2.465A12.3 12.3 0 0 1 24.13 44a.87.87 0 0 1 .055-1.16.87.87 0 0 1 1.16-.055A10.48 10.48 0 0 0 32 44.801a10.5 10.5 0 0 0 6.688-1.953.9.9 0 0 1 1.265.015.9.9 0 0 1-.016 1.266Zm-.579-5.473a3.2 3.2 0 0 1-3.199-3.199 3.198 3.198 0 1 1 6.398 0 3.2 3.2 0 0 1-3.23 3.328Zm0 0",
});
ae("sharethis", {
  color: "#00BF00",
  path: "M0 0h64v64H0zm28.388 32c0 .084-.02.163-.025.247l8.802 4.4a4.3 4.3 0 0 1 2.782-1.037 4.335 4.335 0 0 1 4.335 4.335 4.335 4.335 0 1 1-8.67 0c0-.086.02-.163.025-.247l-8.802-4.4a4.3 4.3 0 0 1-2.782 1.034 4.335 4.335 0 0 1 0-8.67c1.065 0 2.027.402 2.782 1.037l8.802-4.4c-.005-.083-.024-.162-.024-.249a4.333 4.333 0 0 1 4.334-4.332 4.335 4.335 0 0 1 0 8.67 4.28 4.28 0 0 1-2.782-1.04l-8.802 4.403c.005.084.024.163.024.25",
});
ae("rss", {
  color: "#EF8733",
  path: "M0 0v64h64V0zm24 44c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4m11-1c-1.1 0-2-.9-2-2 0-5.5-4.5-10-10-10-1.1 0-2-.9-2-2s.9-2 2-2c7.7 0 14 6.3 14 14 0 1.1-.9 2-2 2m9 0c-1.1 0-2-.9-2-2 0-10.5-8.5-19-19-19-1.1 0-2-.9-2-2s.9-2 2-2c12.7 0 23 10.3 23 23 0 1.1-.9 2-2 2",
});
ae("slack", {
  color: "#4A164A",
  path: "M0 0v64h64V0Zm12.636 37.56c0 5.066 8 5.066 8 0v-3.8h-4c-2.209 0-4 1.7-4 3.8m25.28-6.346c2.21 0 4-1.702 4-3.8V17.287c0-5.066-8-5.066-8 0v10.127c0 2.113 1.815 3.82 4.04 3.8zm14.64-3.8c0-5.067-8-5.067-8 0v3.8h4c2.24.042 4.08-1.672 4.08-3.8zm-25.24 6.345c-2.209 0-4 1.702-4 3.8v10.127c0 5.067 8 5.067 8 0V37.559c0-2.098-1.79-3.8-4-3.8m10.64 10.127h-4v3.8c0 3.386 4.309 5.08 6.829 2.687s.735-6.487-2.829-6.487m10.68-10.127h-10.68c-5.324.009-5.324 7.592 0 7.6h10.68c5.325-.008 5.325-7.591 0-7.6m-21.32-10.145h-10.68c-5.342-.008-5.342 7.608 0 7.6h10.68c5.325-.009 5.325-7.592 0-7.6m0-10.127c-5.324.008-5.324 7.592 0 7.6h4v-3.8c0-2.126-1.804-3.8-4-3.8",
});
ae("smugmug", {
  color: "#8cca1e",
  path: "M0 0v64h64V0zm36.1 19.8c.2-1.3 1.3-2.6 3.2-2.8 2.4-.2 3.8 1.3 3.8 2.8 0 1.3-1.2 2.6-3.8 2.8-2.4.1-3.4-1.3-3.2-2.8m-13.6.4c.2-1.4 1.4-2.8 3.3-2.8 2.3 0 3.5 1.1 3.6 2.4.2 1.5-1.1 3.1-3.9 3.1-2.4.1-3.2-1.3-3-2.7M28.8 47c-10.9 0-12-17.5-6.9-17.5 12.1-.3 12.5-.3 19-1C51.7 27.4 39.2 47 28.8 47m11.5-15.4c-3.9 0-6.8.5-17.8.9-1.6.1-2.9 11.4 6.6 11.4 7.5 0 15.2-12.3 11.2-12.3",
});
ae("snapchat", {
  color: "#FFC91B",
  path: "M0 0v64h64V0zm47.927 39.545c-.326.76-1.702 1.318-4.21 1.707-.083.113-.17.511-.223.754a11 11 0 0 1-.183.743c-.104.357-.367.554-.74.554h-.037a4 4 0 0 1-.723-.089 8.5 8.5 0 0 0-1.706-.181c-.397 0-.809.034-1.222.103-.809.135-1.496.62-2.293 1.184-1.139.805-2.43 1.718-4.392 1.718-.088 0-.171-.003-.234-.006a2 2 0 0 1-.162.006c-1.962 0-3.253-.912-4.393-1.718-.796-.562-1.483-1.048-2.292-1.183a7.5 7.5 0 0 0-1.223-.103c-.716 0-1.288.112-1.706.193-.278.055-.519.102-.723.102-.505 0-.701-.308-.776-.565-.077-.262-.131-.51-.183-.751-.053-.244-.14-.644-.224-.758-2.507-.389-3.884-.948-4.21-1.711a.9.9 0 0 1-.071-.298.664.664 0 0 1 .555-.692c4.349-.716 6.308-5.181 6.389-5.371l.015-.032c.232-.471.284-.866.154-1.172-.251-.592-1.177-.885-1.789-1.08-.17-.054-.331-.105-.464-.157-1.482-.585-1.688-1.258-1.601-1.719.122-.64.903-1.07 1.555-1.07q.284 0 .507.104c.557.261 1.053.394 1.472.394.314 0 .513-.075.622-.136l-.048-.779c-.136-2.173-.307-4.877.403-6.469 2.111-4.732 6.585-5.1 7.905-5.1l.554-.005.078-.001h.001c1.324 0 5.807.368 7.919 5.103.711 1.593.54 4.299.403 6.474l-.006.092-.042.685c.099.055.272.121.537.134.4-.018.863-.149 1.379-.391.219-.103.454-.124.613-.124.232 0 .468.045.667.128l.002.001c.592.212.965.638.974 1.117.011.609-.533 1.135-1.617 1.564-.132.052-.293.103-.465.158-.612.194-1.538.488-1.788 1.079-.13.306-.079.701.154 1.172l.015.032c.081.189 2.038 4.654 6.389 5.371a.664.664 0 0 1 .555.691.9.9 0 0 1-.071.298",
});
ae("soundcloud", {
  color: "#FF5700",
  path: "M0 0v64h64V0zm18.5 36.3c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2v-4.9c0-.6.6-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1zm4.9 1.2c0 .7-.6 1.2-1.2 1.2s-1.2-.5-1.2-1.2V29c0-.6.6-1.1 1.2-1.1s1.2.5 1.2 1.1zm5 0c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V26.2c0-.6.6-1.1 1.2-1.1.7 0 1.2.5 1.2 1.1zm15.2 1.2H31.4c-.3 0-.5-.2-.5-.5V24.3c0-.3.1-.4.4-.5.9-.3 1.8-.5 2.8-.5 4 0 7.4 3.1 7.7 7.1.5-.2 1.1-.3 1.7-.3 2.4 0 4.4 2 4.4 4.4.1 2.3-1.9 4.2-4.3 4.2",
});
ae("spotify", {
  color: "#2EBD59",
  path: "M39 37.7c-4.2-2.6-9.4-3.2-15.5-1.8-.5.1-.9.7-.8 1.2s.7.9 1.2.7q8.4-1.95 14.1 1.5c.5.3 1.1.1 1.4-.3.2-.4.1-1-.4-1.3m1.9-4.7c-4.9-3-12.2-3.9-18-2.1-.7.2-1 .9-.8 1.6s.9 1 1.6.8c5.1-1.5 11.6-.8 15.9 1.9.6.4 1.4.2 1.7-.4.4-.7.2-1.4-.4-1.8M0 0v64h64V0zm32 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m11-20.4c-5.9-3.5-15.3-3.9-21-2.1-.8.2-1.2 1.1-1 1.9s1.1 1.2 1.9 1c4.9-1.5 13.4-1.2 18.6 1.9.7.4 1.6.2 2.1-.5.3-.8.1-1.8-.6-2.2",
});
ae("squarespace", {
  color: "#1C1C1C",
  path: "M0 0v64h64V0zm39.6 21.1c.6.6.6 1.6 0 2.2s-1.6.6-2.2 0c-1.2-1.2-3.2-1.2-4.4 0l-9.8 9.8c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2l9.8-9.8c2.5-2.4 6.4-2.4 8.8 0M17.8 36.4c-2.4-2.4-2.4-6.3 0-8.7l7.5-7.5c1.2-1.2 3.2-1.2 4.4 0L20 29.8c-1.2 1.2-1.2 3.2 0 4.4s3.2 1.2 4.4 0l9.8-9.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-9.8 9.8c-2.5 2.4-6.4 2.4-8.8 0m6.6 6.5c-.6-.6-.6-1.6 0-2.2s1.6-.6 2.2 0c1.2 1.2 3.2 1.2 4.4 0l9.8-9.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2l-9.8 9.8c-2.5 2.4-6.4 2.4-8.8 0m21.8-6.5-7.5 7.5c-1.2 1.2-3.2 1.2-4.4 0l9.6-9.6c1.2-1.2 1.2-3.2 0-4.4s-3.2-1.2-4.4 0l-9.8 9.8c-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2l9.8-9.8c2.4-2.4 6.3-2.4 8.7 0 2.6 2.3 2.6 6.3.2 8.7",
});
ae("stackoverflow", {
  color: "#ed803d",
  path: "M64 0v64H0V0zM46.145 37.265H42.8v10.038H19.376V37.265H16.03V50.65h30.115zm-6.688 2.46L23.023 36.27l.69-3.287 16.435 3.456zm.964-4.234-15.224-7.09 1.418-3.045 15.224 7.09zm1.895-3.811L29.41 20.932l2.15-2.58 12.906 10.747zm-7.27-16.688 2.695-2.004 10.022 13.476-2.695 2.004zm4.407 28.965H22.722v-3.346h16.73z",
});
ae("t.me", {
  color: "#49a9e9",
  path: "M0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0",
});
ae("telegram", {
  color: "#49a9e9",
  path: "M0 0v64h64V0zm11.887 33.477c3.73-2.055 7.894-3.77 11.785-5.497 6.695-2.824 13.414-5.597 20.203-8.18 1.324-.44 3.695-.87 3.93 1.087-.13 2.773-.653 5.527-1.012 8.281-.914 6.055-1.969 12.094-2.996 18.133-.356 2.008-2.875 3.05-4.488 1.761-3.871-2.613-7.778-5.207-11.598-7.882-1.254-1.274-.094-3.102 1.027-4.012 3.188-3.145 6.575-5.816 9.598-9.121.816-1.973-1.594-.313-2.39.2-4.368 3.007-8.63 6.202-13.235 8.847-2.352 1.297-5.094.187-7.445-.535-2.11-.871-5.2-1.75-3.38-3.082m0 0",
});
ae("substack", {
  color: "#ff6719",
  path: "M0 0h64v64H0Zm20.098 18.477v3.195h23.805v-3.195zm0 6.075v3.24h23.805v-3.24zm0 6.075v14.895c.972-.28 1.95-1.042 2.835-1.536l5.94-3.317c.735-.411 1.472-.818 2.205-1.234.239-.136.644-.475.925-.47.278.005.681.346.919.482q1.03.588 2.07 1.157c2.094 1.149 4.162 2.343 6.256 3.492.809.445 1.754 1.221 2.655 1.426V30.627z",
});
ae("threads", {
  color: "#000000",
  path: "M0 0v64h64V0zm32.28 15.75h.02c3.718.026 6.827.982 9.241 2.84 2.272 1.75 3.872 4.238 4.753 7.404l-2.763.771c-1.495-5.362-5.278-8.102-11.245-8.145-3.94.03-6.918 1.267-8.855 3.678-1.81 2.259-2.747 5.523-2.783 9.702.036 4.18.971 7.443 2.785 9.702 1.937 2.415 4.918 3.652 8.857 3.678 3.552-.026 5.902-.855 7.855-2.77 2.23-2.184 2.19-4.864 1.476-6.496-.42-.962-1.184-1.76-2.214-2.368-.26 1.83-.843 3.311-1.74 4.43-1.199 1.49-2.898 2.306-5.05 2.423-1.628.088-3.198-.295-4.414-1.085-1.44-.933-2.28-2.355-2.372-4.013-.088-1.612.553-3.094 1.801-4.173 1.193-1.03 2.87-1.636 4.852-1.75 1.46-.081 2.827-.016 4.088.192-.169-1.004-.506-1.803-1.013-2.378-.696-.793-1.77-1.196-3.194-1.206h-.04c-1.144 0-2.697.315-3.685 1.787l-2.379-1.595c1.326-1.97 3.477-3.056 6.064-3.056h.058c4.326.026 6.904 2.676 7.16 7.297q.22.093.435.19c2.018.95 3.494 2.387 4.271 4.159 1.079 2.466 1.18 6.486-2.097 9.694-2.505 2.45-5.543 3.559-9.852 3.588h-.02c-4.85-.033-8.577-1.63-11.083-4.75-2.226-2.78-3.377-6.644-3.416-11.486v-.024c.04-4.846 1.19-8.706 3.42-11.485 2.502-3.123 6.233-4.722 11.079-4.755m1.368 16.669q-.49 0-1.001.03c-2.487.14-4.038 1.28-3.95 2.901.091 1.7 1.967 2.49 3.771 2.393 1.658-.088 3.816-.735 4.18-5.025-.917-.198-1.92-.3-3-.3",
});
ae("tumblr", { color: "#2c4762", path: "M0 0v64h64V0zm35.4 47c-6.5.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6 5.6-5.7 5.9-8.1 0-.2.1-.2.2-.2h4.4v7.6h6v4.5h-6v9.3c0 1.3.5 3 2.9 3 .8 0 1.9-.3 2.4-.5l1.4 4.3c-.5.8-3 1.8-5.2 1.8" });
ae("tiktok", {
  color: "#000000",
  path: "M0 0v64h64V0zm32.781 16h5.494c-.008 0-.064.526.075 1.34h-.008c.166.98.617 2.381 1.824 3.762a8.857 8.858 0 0 0 1.617 1.375 7 7 0 0 0 .631.367c1.405.7 2.777.913 3.453.84v5.457s-1.93-.081-3.361-.461c-1.996-.534-3.276-1.354-3.276-1.354s-.888-.587-.955-.627v11.274c0 .626-.164 2.194-.662 3.502a10.6 10.6 0 0 1-1.843 3.062s-1.227 1.52-3.381 2.541c-1.943.92-3.652.9-4.162.92 0 0-2.951.119-5.612-1.69l-.013-.013v.014a11.2 11.2 0 0 1-2.381-2.246c-.842-1.074-1.36-2.348-1.492-2.721v-.014c-.212-.634-.657-2.168-.59-3.648.106-2.609.983-4.216 1.215-4.616a10.8 10.8 0 0 1 2.351-2.902 10.2 10.2 0 0 1 7.867-2.3l-.006 5.595a4.6 4.6 0 0 0-1.427-.227c-2.56 0-4.637 2.09-4.637 4.668s2.076 4.666 4.637 4.666a4.6 4.6 0 0 0 2.273-.6 4.67 4.67 0 0 0 2.348-3.704v-.012a.2.2 0 0 0 .004-.047q.005-.054.006-.103c.012-.279.011-.563.011-.848z",
});
ae("twitch", { color: "#6441A5", path: "M0 0v64h64V0zm47 35.8-7.6 7.6h-5.7l-3.8 3.8H26v-3.8h-7V23.1l1.9-5.1H47zm-17.8 7L33 39h7l4.5-4.5v-14h-21V39h5.7zm8.3-17.2H40v7.6h-2.5zm-7 0H33v7.6h-2.5z" });
ae("twitter", {
  color: "#00aced",
  path: "M0 0v64h64V0zm44.7 25.5v.8C44.7 35 38.1 45 26.1 45c-3.7 0-7.2-1.1-10.1-2.9.5.1 1 .1 1.6.1 3.1 0 5.9-1 8.2-2.8-2.9-.1-5.3-2-6.1-4.6.4.1.8.1 1.2.1.6 0 1.2-.1 1.7-.2-3-.6-5.3-3.3-5.3-6.4v-.1c.9.5 1.9.8 3 .8-1.8-1.2-2.9-3.2-2.9-5.5q0-1.8.9-3.3c3.2 4 8.1 6.6 13.5 6.9-.1-.5-.2-1-.2-1.5 0-3.6 2.9-6.6 6.6-6.6 1.9 0 3.6.8 4.8 2.1 1.5-.3 2.9-.8 4.2-1.6-.5 1.5-1.5 2.8-2.9 3.6 1.3-.2 2.6-.5 3.8-1-1 1.3-2.1 2.4-3.4 3.4",
});
ae("upwork", {
  color: "#3da800",
  path: "M0 0h64v64H0Zm24.938 17.111h5.6c1.1 3.8 3.099 8.2 5.599 12.1 1.6-5.5 5.6-9 10.9-9 6.1 0 11.1 5.002 11.1 11.102 0 6.4-5 11.398-11.1 11.398-3 0-5.5-.8-7.7-2.2l-2.4 11.901h-5.7l3.5-16.3c-1.5-2.1-2.9-4.5-4-6.7v2.5c0 6.1-4.9 11-10.9 11s-10.9-4.9-10.9-11V17.211h5.4v14.602c0 2.9 2.4 5.298 5.3 5.298s5.3-2.398 5.3-5.298zm22.199 8.801c-4.1 0-5.4 4-5.8 6.4v.1l-.6 2.2c1.8 1.5 4.1 2.5 6.3 2.5 2.9 0 5.6-2.5 5.7-5.6 0-3.1-2.5-5.6-5.6-5.6",
});
ae("vevo", { color: "#ED1A3B", path: "M0 0v64h64V0zm34.2 41.9c-1.4 2.1-2.9 3.1-5 3.1 0 0-3 .2-4.1-3.4L20 21h8.1l3 12.3c1.4-2.1 5.1-7.7 5.1-7.7 1.4-1.9 2.2-4.6 6.8-4.6h5z" });
ae("vimeo", {
  color: "#1ab7ea",
  path: "M0 0v64h64V0zm40.9 37c-4.1 5.3-7.5 8-10.4 8-1.7 0-3.2-1.6-4.4-4.8-.8-3-1.6-5.9-2.4-8.9-.9-3.2-1.9-4.8-2.9-4.8-.2 0-1 .5-2.4 1.4L17 26c1.5-1.3 2.9-2.6 4.4-3.9 2-1.7 3.5-2.6 4.4-2.7 2.3-.2 3.8 1.4 4.3 4.8q.9 5.55 1.2 6.9c.7 3.1 1.4 4.6 2.2 4.6.6 0 1.6-1 2.8-3 1.3-2 1.9-3.5 2-4.5.2-1.7-.5-2.6-2-2.6-.7 0-1.5.2-2.2.5 1.5-4.8 4.3-7.2 8.4-7 3.1.1 4.5 2.1 4.4 6 0 2.8-2.1 6.8-6 11.9",
});
ae("vk", {
  color: "#45668e",
  path: "M0 0v64h64V0zm44.94 44.84h-.2c-2.17-.36-3.66-1.92-4.92-3.37-.72-.81-1.82-2.66-3.12-2.47-1.85.3-.93 3.52-1.71 4.9-.62 1.11-3.29.91-5.12.71-5.79-.62-8.75-3.77-11.35-7.14A64 64 0 0 1 11.6 26a10.6 10.6 0 0 1-1.51-4.49c.91-.81 2.47-.51 4.02-.51 1.31 0 3.36-.29 4.32.2.57.26 1.14 1.8 1.57 2.8a37 37 0 0 0 3.31 5.82c.56.81 1.41 2.35 2.41 2.14s1.06-2.63 1.1-4.18c0-1.77 0-4-.5-4.9S25 22 24.15 21.47c.73-1.49 2.72-1.63 5.12-1.63 2 0 4.84-.23 5.62 1.12s.25 3.85.2 5.71c-.06 2.09-.41 4.25 1 5.21 1.09-.12 1.68-1.2 2.31-2A28 28 0 0 0 41.72 24c.44-1 .91-2.65 1.71-3 1.21-.47 3.15-.1 4.92-.1 1.46 0 4.05-.41 4.52.61.39.85-.75 3-1.1 3.57a62 62 0 0 1-4.12 5.61c-.58.78-1.78 2-1.71 3.27.05.94 1 1.67 1.71 2.35a33 33 0 0 1 3.92 4.18c.47.62 1.5 2 1.4 2.76-.31 2.56-6.09.99-8.03 1.59",
});
ae("vine", {
  color: "#00BF8F",
  path: "M0 0v64h64V0zm38.4 21.5c-1.2 0-2.1 1.2-2.1 3.4 0 4.6 2.9 7.2 6.7 7.2.7 0 1.4-.1 2.2-.3v3.6c-1.3.3-2.5.4-3.6.4-2.5 5.3-7 9.8-8.6 10.7-1 .5-1.9.6-2.9-.1-1.9-1.1-8.9-6.9-11.2-25H24c1.3 10.9 4.4 16.5 7.9 20.7 1.9-1.9 3.7-4.4 5.2-7.3-3.4-1.7-5.5-5.5-5.5-10s2.6-7.9 7-7.9c4.3 0 6.6 2.7 6.6 7.3 0 1.7-.4 3.7-1 5.2-3.2.6-4.4-1.4-4.4-1.4.2-.8.6-2.1.6-3.3-.1-2.1-.9-3.2-2-3.2",
});
ae("vsco", {
  color: "#83878A",
  path: "M0 0v64h64V0zm18.5 34.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S21 30.6 21 32c-.1 1.4-1.2 2.5-2.5 2.5m6.6 6.6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m.1-13.4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M32 48c-1.4 0-2.5-1.1-2.5-2.5S30.6 43 32 43s2.5 1.1 2.5 2.5S33.4 48 32 48m-2.5-16.1c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5m2.5-11c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5m6.7 1.8c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5m.1 18.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c-.1 1.4-1.2 2.5-2.5 2.5m6.7-6.7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S48 30.6 48 32s-1.1 2.5-2.5 2.5",
});
ae("wa.me", {
  color: "#25D366",
  path: "M0 0v64h64V0zm48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 0 1-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59M32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.2 13.2 0 0 0 7.27 2.164c7.281 0 13.207-5.875 13.207-13.101s-5.926-13.106-13.21-13.106m7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836s-.64-.637-.863-.637c-.226 0-.484-.031-.738-.031a1.4 1.4 0 0 0-1.027.476c-.356.383-1.348 1.309-1.348 3.188s1.379 3.695 1.57 3.949c.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816m0 0",
});
ae("wechat", {
  color: "#00c80f",
  path: "M65.6 65.6H-1.6V-1.6h67.2zM49.738 46.043c2.846-2.061 4.662-5.107 4.662-8.498 0-6.207-6.043-11.244-13.492-11.244-7.453 0-13.494 5.037-13.494 11.244 0 6.213 6.041 11.246 13.494 11.246 1.537 0 3.025-.221 4.402-.615l.395-.059c.262 0 .498.078.717.207l2.955 1.707.26.082a.45.45 0 0 0 .451-.449l-.074-.328-.605-2.271-.047-.287a.9.9 0 0 1 .376-.735M25.793 13.887C16.85 13.887 9.6 19.93 9.6 27.383c0 4.066 2.182 7.723 5.596 10.197.275.195.453.518.453.879l-.055.344-.732 2.725-.086.393c0 .301.24.541.539.541l.311-.1 3.545-2.049c.27-.152.551-.248.861-.248l.475.068a19 19 0 0 0 5.287.742l.891-.021a10.3 10.3 0 0 1-.543-3.309c0-6.793 6.611-12.305 14.768-12.305l.879.021c-1.225-6.443-7.918-11.374-15.996-11.374m10.615 21.859a1.798 1.798 0 1 1-.001-3.6 1.798 1.798 0 0 1 .001 3.6m8.996 0a1.798 1.798 0 1 1-.001-3.6 1.798 1.798 0 0 1 .001 3.6M20.395 25.221a2.16 2.16 0 1 1 .002-4.318 2.16 2.16 0 0 1-.002 4.318m10.796 0c-1.193 0-2.158-.965-2.158-2.158s.965-2.158 2.158-2.158 2.158.965 2.158 2.158-.964 2.158-2.158 2.158",
});
ae("whatsapp", {
  color: "#25D366",
  path: "M0 0v64h64V0zm48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 0 1-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59M32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.2 13.2 0 0 0 7.27 2.164c7.281 0 13.207-5.875 13.207-13.101s-5.926-13.106-13.21-13.106m7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836s-.64-.637-.863-.637c-.226 0-.484-.031-.738-.031a1.4 1.4 0 0 0-1.027.476c-.356.383-1.348 1.309-1.348 3.188s1.379 3.695 1.57 3.949c.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816m0 0",
});
ae("x", { color: "#000000", path: "M0 0v64h64V0zm16 17.537h10.125l6.992 9.242 8.084-9.242h4.908L35.39 29.79 48 46.463h-9.875l-7.734-10.111-8.85 10.11h-4.908l11.465-13.105zm5.73 2.783 17.75 23.205h2.72L24.647 20.32z" });
ae("xiaohongshu", {
  color: "#ff2741",
  path: "M8.494-.006h47.784c4.552 0 8.596 3.953 8.715 8.5V56.28a8.91 8.91 90 0 1-8.717 8.702H8.509A8.92 8.92 90 0 1 .004 56.26V8.514C.114 4.038 4.018.12 8.494-.006m4.247 23.213c-.033 5.045-.016 10.092-.041 15.138a.533.533 90 0 1-.54.66c-.607.036-1.217.015-1.826.02a61 61 0 0 0 1.307 2.978c1.148-.038 2.458.201 3.438-.55.88-.656 1.162-1.82 1.145-2.87 0-5.125 0-10.253-.023-15.378a263 263 0 0 0-3.46.002m14.236-.228q-1.29 2.963-2.63 5.9c-.254.586-.56 1.363-.028 1.893.683.62 1.686.381 2.524.437-.581 1.467-1.346 2.861-1.836 4.364-.271.741.407 1.495 1.148 1.503 1.343.091 2.69 0 4.036.035.44-.982.881-1.962 1.313-2.95-.785 0-1.577.056-2.348-.099.835-2.096 1.825-4.125 2.71-6.196-1.083-.127-2.31.226-3.3-.196.483-1.625 1.361-3.115 1.98-4.696-1.192-.005-2.38-.013-3.568.005zm18.469.013v1.322h-2.33v3.536c.779 0 1.556 0 2.332.016q.03 1.523 0 3.066c-1.167.023-2.338 0-3.506.018a149 149 0 0 0 0 3.529c1.17.013 2.344 0 3.514 0v7.512h3.516v-7.507c1.711 0 3.42-.025 5.13 0 .602-.05 1.29.37 1.27 1.033a28 28 90 0 1 0 2.813.574.574 90 0 1-.538.607c-.978.07-1.958 0-2.938.033.432 1.015.85 2.03 1.34 3.033 1.613-.083 3.583.323 4.812-1.015 1.167-1.082.817-2.793.865-4.204-.073-1.485.29-3.163-.632-4.463-.784-1.102-2.198-1.401-3.473-1.424-.076-1.777.348-3.856-.96-5.3-1.218-1.367-3.18-1.372-4.866-1.306v-1.32c-1.193.013-2.366.015-3.536.02zM32.9 24.317v3.534h2.206v10.596c-1.053.018-2.11 0-3.163.013a315 315 0 0 0-1.61 3.528c3.93.016 7.87 0 11.79 0V38.46c-1.13 0-2.262 0-3.392-.013V27.843h2.214v-3.536c-2.676.005-5.36 0-8.045.01m23.19.325c-.985.746-.662 2.112-.705 3.175.657 0 1.317.036 1.975-.022 1.056-.097 1.85-1.328 1.426-2.323-.332-1.092-1.807-1.567-2.696-.83M6.86 27.848c-.178 2.315-.358 4.628-.526 6.943a5.6 5.6 90 0 1-.335 1.539 156 156 0 0 0 1.823 4.061c1.421-1.901 1.95-4.298 2.097-6.625.124-1.98.345-3.958.416-5.94-1.165.04-2.323.012-3.476.022m11.71 0 .508 6.44c.185 2.153.741 4.347 2.056 6.093a172 172 0 0 0 1.82-4.062 5.5 5.5 90 0 1-.355-1.546c-.167-2.307-.35-4.615-.528-6.923q-1.757-.01-3.508-.002zm4.357 13.884c1.797.53 3.7.167 5.546.266a295 295 0 0 0 1.612-3.536c-1.845-.071-3.724.193-5.534-.272q-.83 1.765-1.632 3.542zM48.94 27.86c.762.109 1.777-.31 2.359.304.096.927.025 1.859.035 2.793h-2.37q-.024-1.549-.024-3.097",
});
ae("xing", {
  color: "#0698A0",
  path: "M1.008 0C.45 0 0 .45 0 1.01v62.11c0 .56.45 1.01 1.008 1.01h62.02c.56 0 1.009-.45 1.009-1.01V1.01c0-.56-.45-1.01-1.009-1.01ZM41.72 16.032h5.482c.327 0 .585.106.723.296.143.197.139.459-.012.714L35.898 35.145a.025.025 0 0 0 0 .032l7.65 11.91c.152.257.156.517.012.715-.138.19-.394.295-.721.295h-5.42c-.83 0-1.247-.47-1.516-.88l-7.71-12.056c.386-.58 12.074-18.248 12.074-18.248.291-.446.642-.88 1.452-.88m-22.794 6.334h5.425c.832 0 1.24.456 1.51.867l3.731 5.544-5.857 8.828c-.277.427-.668.893-1.48.893h-5.426c-.326 0-.571-.125-.71-.315-.142-.198-.15-.453 0-.709l5.766-8.672c.006-.01.006-.015 0-.025l-3.668-5.413c-.152-.258-.175-.513-.032-.71.138-.192.414-.288.74-.288",
});
ae("yandex", { color: "#fc3f1d", path: "M0 0v64h64V0Zm18.656 16h5.91l7.248 15.793c2.124 4.604 3.05 6.998 3.05 12.293V48H29.46v-3.223c0-4.374-.507-6.539-2.262-10.314zm21.008 0h5.68L38.51 31.47h-5.586z" });
ae("yelp", {
  color: "#B90C04",
  path: "M0 0v64h64V0zm22.4 37.9q-.6 0-.9-.6c-.1-.3-.2-.7-.3-1.3-.2-1.7 0-4.2.5-5 .2-.4.6-.6 1-.6.3 0 .5.1 5.5 2.1l1.5.6c.5.2.9.7.8 1.4 0 .6-.4 1.1-.9 1.2l-2.1.7c-4.7 1.5-4.8 1.5-5.1 1.5M33 41c0 4.9 0 5-.1 5.3-.1.4-.4.6-.9.7-1.2.2-5.1-1.2-6-2.2q-.3-.3-.3-.6c0-.2 0-.3.1-.4.1-.2.2-.4 3.7-4.5l1-1.2c.3-.4 1-.6 1.5-.4.6.2.9.7.9 1.2.1-.1.1 2.1.1 2.1m-.8-10.2c-.3.1-1 .3-2-1.2 0 0-6.4-10.1-6.5-10.4s0-.7.3-1.1c1-1 6.1-2.4 7.5-2.1.4.1.7.4.9.8.1.4.7 9.8.8 11.9 0 1.8-.8 2-1 2.1m3.2.5 1.3-1.8c2.8-3.9 3-4.1 3.2-4.2.3-.2.7-.2 1.1 0 1.1.5 3.4 3.9 3.5 5.2 0 .4-.1.8-.5 1-.2.1-.4.2-5.7 1.5-.8.2-1.3.3-1.6.4-.5.1-1.1-.1-1.4-.6-.2-.5-.2-1.1.1-1.5m9.3 8.3c-.2 1.3-2.7 4.5-3.9 5-.4.2-.8.1-1.1-.1-.2-.2-.4-.5-3.2-5l-.8-1.3c-.3-.5-.3-1.1.1-1.6s.9-.6 1.4-.5l2.1.7c4.6 1.5 4.8 1.6 5 1.7.4.3.5.7.4 1.1",
});
ae("youtube", {
  color: "#ff3333",
  path: "M0 0v64h64V0zm47 33.1c0 2.4-.3 4.9-.3 4.9s-.3 2.1-1.2 3c-1.1 1.2-2.4 1.2-3 1.3-4.2.2-10.5.3-10.5.3s-7.8-.1-10.2-.3c-.7-.1-2.2-.1-3.3-1.3-.9-.9-1.2-3-1.2-3s-.3-2.4-.3-4.9v-2.3c0-2.4.3-4.9.3-4.9s.3-2.1 1.2-3c1.1-1.2 2.4-1.2 3-1.3 4.2-.3 10.5-.3 10.5-.3s6.3 0 10.5.3c.6.1 1.9.1 3 1.3.9.9 1.2 3 1.2 3s.3 2.4.3 4.9zm-18.1 2.8 8.1-4.2-8.1-4.2z",
});
const tw = "" + new URL("arrow-BYp4F-0z.png", import.meta.url).href;
function nw() {
  return X.jsxs("div", {
    className: "about",
    children: [
      X.jsx("h1", { children: "About Drawllab" }),
      X.jsxs("div", {
        className: "about__container",
        children: [
          X.jsxs("section", {
            className: "key",
            children: [
              X.jsx("h3", { children: "Key:" }),
              X.jsxs("ul", {
                className: "key__ul",
                children: [
                  X.jsxs("li", { className: "key__li", children: [X.jsx("img", { src: O8, alt: "key", className: "key__icon" }), X.jsx("p", { children: "Pen/Brush" })] }),
                  X.jsxs("li", { className: "key__li", children: [X.jsx("img", { src: M8, alt: "key", className: "key__icon" }), X.jsx("p", { children: "Draw Straight Line" })] }),
                  X.jsxs("li", { className: "key__li", children: [X.jsx("img", { src: R8, alt: "key", className: "key__icon" }), X.jsx("p", { children: "Draw Quadrilateral" })] }),
                  X.jsxs("li", { className: "key__li", children: [X.jsx("img", { src: z8, alt: "key", className: "key__icon" }), X.jsx("p", { children: "Move / Resize" })] }),
                  X.jsxs("li", { className: "key__li", children: [X.jsx("img", { src: a2, alt: "key", className: "key__icon" }), X.jsx("p", { children: "Go to Home" })] }),
                  X.jsxs("li", { className: "key__li", children: [X.jsx("img", { src: q8, alt: "key", className: "key__icon" }), X.jsx("p", { children: "Go to About" })] }),
                ],
              }),
            ],
          }),
          X.jsxs("section", {
            className: "about",
            children: [
              X.jsxs("div", {
                className: "about__project",
                children: [
                  X.jsx("h3", { children: "about the project" }),
                  X.jsx("p", {
                    children:
                      "Drawllab was created to be a lightweight and user-friendly alternative to modern-day drawing applications. Using a minimalist design and easy to learn interface, Drawllab makes it easy for any user to jump in and start creating without having a huge learning curve. Use it to make wireframes, sketch out ideas and jump start your creative projects!",
                  }),
                  X.jsx("h2", { children: "libraries used" }),
                  X.jsxs("ul", {
                    children: [
                      X.jsx("li", { children: X.jsx("button", { children: X.jsx("a", { href: "https://roughjs.com/", children: "roughJS" }) }) }),
                      X.jsx("li", { children: X.jsx("button", { children: X.jsx("a", { href: "https://www.npmjs.com/package/perfect-freehand", children: "perfect freehand" }) }) }),
                      X.jsx("li", { children: X.jsx("button", { children: X.jsx("a", { href: "https://casesandberg.github.io/react-color/", children: "react color" }) }) }),
                      X.jsx("li", { children: X.jsx("button", { children: X.jsx("a", { href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API", children: "html canvas" }) }) }),
                    ],
                  }),
                ],
              }),
              X.jsxs("div", {
                className: "about__details",
                children: [
                  X.jsxs("div", {
                    className: "about__container info",
                    children: [X.jsx("h2", { children: "contact info" }), X.jsx("p", { children: X.jsx("span", { children: "Nathan Challender" }) }), X.jsx("p", { children: "nathandallas@proton.me" })],
                  }),
                  X.jsx("div", {
                    className: "about__container",
                    children: X.jsxs("div", {
                      className: "about__icon-container",
                      children: [
                        X.jsx("div", { className: "about__icon", children: X.jsx(hg, { url: "https://codepen.io/nathandallas", bgColor: "#96bbbf", style: { height: 75, width: 75 } }) }),
                        X.jsx("div", { className: "about__icon", children: X.jsx(hg, { url: "https://github.com/nathandallas", bgColor: "#96bbbf", style: { height: 75, width: 75 } }) }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      X.jsx("div", {
        className: "about-nav__link--canvas",
        children: X.jsxs(Pr, { to: "/canvas", className: "about-nav__link", children: [X.jsx("img", { src: tw, alt: "back button", className: "about-nav__icon" }), X.jsx("h2", { className: "about-nav__h2", children: "Back to Canvas" })] }),
      }),
      X.jsx("div", { className: "about-nav__link--home", children: X.jsx(Pr, { to: "/", children: X.jsx("img", { src: a2, alt: "home button", className: "about-nav__icon" }) }) }),
    ],
  });
}
const aw = () =>
    X.jsx("div", { className: "App", children: X.jsxs(M9, { base: "/drawllab", children: [X.jsx(Ns, { path: "/", exact: !0, component: D9 }), X.jsx(Ns, { path: "/canvas", component: JC }), X.jsx(Ns, { path: "/about", component: nw })] }) }),
  rw = document.getElementById("root"),
  lw = l9.createRoot(rw);
lw.render(X.jsx(aw, {}));
