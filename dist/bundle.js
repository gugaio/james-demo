/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _james__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @james */ \"./src/shims/james-shim.js\");\n/* harmony import */ var _userAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userAgent */ \"./src/userAgent.js\");\n\n\nvar initial_instruction = \"xxxx\";\nvar agents = [new _userAgent__WEBPACK_IMPORTED_MODULE_1__.PlaybackAgent()];\nvar client = new James.ConversationManager(initial_instruction, 'http://localhost:5000', agents);\n\n//# sourceURL=webpack://james-demo/./src/index.js?");

/***/ }),

/***/ "./src/shims/james-shim.js":
/*!*********************************!*\
  !*** ./src/shims/james-shim.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Agent: () => (/* binding */ Agent),\n/* harmony export */   ConversationApi: () => (/* binding */ ConversationApi),\n/* harmony export */   ConversationManager: () => (/* binding */ ConversationManager),\n/* harmony export */   ToolExecutionService: () => (/* binding */ ToolExecutionService),\n/* harmony export */   tool: () => (/* binding */ tool)\n/* harmony export */ });\nvar ConversationManager = James.ConversationManager;\nvar Agent = James.Agent;\nvar tool = James.tool;\nvar ConversationApi = James.ConversationApi;\nvar ToolExecutionService = James.ToolExecutionService;\n\n//# sourceURL=webpack://james-demo/./src/shims/james-shim.js?");

/***/ }),

/***/ "./src/userAgent.js":
/*!**************************!*\
  !*** ./src/userAgent.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlaybackAgent: () => (/* binding */ PlaybackAgent)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nvar _James$Agent, _PlaybackAgent;\nvar _initProto, _load_video_to_contextDecs, _get_video_infoDecs, _ref;\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if (\"function\" != typeof e && (n || void 0 !== e)) throw new TypeError(t + \" must \" + (r || \"be\") + \" a function\" + (n ? \"\" : \" or undefined\")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError(\"Attempted to access private element on non-instance\"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? \"get\" : 4 === o || d ? \"set\" : \"value\"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, \"get\"), set: function set(e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? \"\" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: [\"field\", \"accessor\", \"method\", \"getter\", \"setter\", \"class\"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw Error(\"attempted to call addInitializer after decoration was finished\"); s(t, \"An initializer\", \"be\", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), \"class decorators\", \"return\")) && (P = y);else { var k, F; O[\"static\"] = l, O[\"private\"] = f, f ? 2 === o ? k = function k(e) { return m(e), w.value; } : (o < 4 && (k = i(w, \"get\", m)), 3 !== o && (F = i(w, \"set\", m))) : (k = function k(e) { return e[n]; }, (o < 2 || 4 === o) && (F = function F(e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if (\"object\" == _typeof(P) && P) (y = s(P.get, \"accessor.get\")) && (w.get = y), (y = s(P.set, \"accessor.set\")) && (w.set = y), (y = s(P.init, \"accessor.init\")) && S.push(y);else if (void 0 !== P) throw new TypeError(\"accessor decorators must return an object with get, set, or init properties or void 0\"); } else s(P, (p ? \"field\" : \"method\") + \" decorators\", \"return\") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, \"get\"), i(w, \"set\")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol[\"for\"](\"Symbol.metadata\"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol[\"for\"](\"Symbol.metadata\")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function s(t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + \"/\" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error(\"Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: \" + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? \"#\" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _setFunctionName(e, t, n) { \"symbol\" == _typeof(t) && (t = (t = t.description) ? \"[\" + t + \"]\" : \"\"); try { Object.defineProperty(e, \"name\", { configurable: !0, value: n ? n + \" \" + t : t }); } catch (e) {} return e; }\nfunction _checkInRHS(e) { if (Object(e) !== e) throw TypeError(\"right-hand side of 'in' should be an object, got \" + (null !== e ? _typeof(e) : \"null\")); return e; }\nvar tool = James.tool;\nvar ID = \"playback_agent\";\nvar TASK = \"Analyze playback api video information\";\n_ref = (_load_video_to_contextDecs = tool(\"Load a video into the context.\"), _get_video_infoDecs = tool(\"Get video info\"), \"instructions\");\nvar PlaybackAgent = /*#__PURE__*/function (_James$Agent2) {\n  function PlaybackAgent() {\n    var _this;\n    _classCallCheck(this, PlaybackAgent);\n    _this = _callSuper(this, PlaybackAgent, [ID, TASK]);\n    _defineProperty(_this, _ref, (_initProto(_this), function () {\n      if (!_this.context[\"video\"]) {\n        var _instruction = \"No video loaded into context.\\n            You need load a video using the load_video_to_context tool.\\n            User must provide the video id.\\n            Ask the user for the video id if not provided yet.\\n            Then call the tool with the video id as argument.\";\n        var _tools = [_this.load_video_to_context];\n        return {\n          instruction: _instruction,\n          tools: _tools\n        };\n      }\n      var video_available_fields = _this._get_video_fields();\n      var instruction = \"The video loaded into context is \".concat(_this.context[\"video\"][\"title\"], \".\\n        You can get the video info using the get_video_info tool.\\n        The tool requires a list of fields to retrieve, the fields must be a string separated by commas.\\n        The available fields are \").concat(video_available_fields, \".\\n        Provide the fields based on the user request.\");\n      var tools = [_this.get_video_info];\n      return {\n        instruction: instruction,\n        tools: tools\n      };\n    }));\n    _defineProperty(_this, \"_get_video_fields\", function () {\n      return \"id,title,description,duration,tags,categories\";\n    });\n    return _this;\n  }\n  _inherits(PlaybackAgent, _James$Agent2);\n  return _createClass(PlaybackAgent, [{\n    key: \"load_video_to_context\",\n    value: function load_video_to_context(video_id) {\n      this.context[\"video\"] = {\n        id: video_id,\n        title: \"Gladiator\",\n        description: \"Gladiator is a 2000 epic historical action drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson.\",\n        duration: \"5 secondsn\",\n        tags: [\"continuation\", \"denzel\"],\n        categories: [\"war\", \"war\"]\n      };\n      return \"Video \".concat(video_id, \" loaded to context. The available fields are \").concat(this._get_video_fields());\n    }\n  }, {\n    key: \"get_video_info\",\n    value: function get_video_info(fields) {\n      var video = this.context[\"video\"];\n      var requested_fields = fields.split(\",\");\n      var available_fields = this._get_video_fields().split(\",\");\n      var invalid_fields = requested_fields.filter(function (field) {\n        return !available_fields.includes(field);\n      });\n      if (invalid_fields.length > 0) {\n        return \"The fields \".concat(invalid_fields, \" are not available. Please ask for available fields.\");\n      }\n      var video_info = requested_fields.reduce(function (acc, field) {\n        acc[field] = video[field];\n        return acc;\n      }, {});\n      var video_info_str = JSON.stringify(video_info, null, 2);\n      return video_info_str;\n    }\n  }]);\n}(_James$Agent = James.Agent);\n_PlaybackAgent = PlaybackAgent;\nvar _applyDecs$e = _applyDecs(_PlaybackAgent, [[_load_video_to_contextDecs, 2, \"load_video_to_context\"], [_get_video_infoDecs, 2, \"get_video_info\"]], [], 0, void 0, _James$Agent).e;\nvar _applyDecs$e2 = _slicedToArray(_applyDecs$e, 1);\n_initProto = _applyDecs$e2[0];\n_applyDecs$e;\n\n//# sourceURL=webpack://james-demo/./src/userAgent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;