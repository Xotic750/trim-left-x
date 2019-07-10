/*!
{
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-10T22:36:42.380Z",
  "describe": "",
  "description": "This method removes whitespace from the left end of a string.",
  "file": "trim-left-x.js",
  "hash": "090346a1bb63768ff2cf",
  "license": "MIT",
  "version": "4.0.1"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["trimLeftX"] = factory();
	else
		root["trimLeftX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimLeft2016 = trimLeft2016;
exports.default = trimLeft2018;

var _requireCoercibleToStringX = _interopRequireDefault(__webpack_require__(2));

var _whiteSpaceX = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(_whiteSpaceX.string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(_whiteSpaceX.default, "]+"));
var _ref = '',
    replace = _ref.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} string - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call((0, _requireCoercibleToStringX.default)(string), reLeft2016, '');
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} string - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */


function trimLeft2018(string) {
  return replace.call((0, _requireCoercibleToStringX.default)(string), reLeft, '');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
{
  "copywrite": "Copyright (c) 2017-present",
  "date": "2019-07-10T19:57:07.334Z",
  "describe": "",
  "description": "Requires an argument is corecible then converts using ToString.",
  "file": "require-coercible-to-string-x.min.js",
  "hash": "4c0a223c2f880366be07",
  "license": "MIT",
  "version": "2.0.0"
}
*/
!function(e,t){ true?module.exports=t():undefined}(function(){"use strict";return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()}(),function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)((0,r.default)(e))};var r=u(n(2)),o=u(n(3));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){(function(t){
/*!
{
  "copywrite": "Copyright (c) 2015-present",
  "date": "2019-07-10T19:41:32.687Z",
  "describe": "",
  "description": "ES6-compliant shim for RequireObjectCoercible.",
  "file": "require-object-coercible-x.min.js",
  "hash": "e0a246211b3fc1c03415",
  "license": "MIT",
  "version": "2.0.0"
}
*/
(function(){"use strict";"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t||Function("return this")()})(),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,o.default)(e))throw new TypeError("Cannot call method on ".concat(e));return e};var r,o=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){(function(t){
/*!
{
  "copywrite": "Copyright (c) 2015-present",
  "date": "2019-07-10T12:31:27.126Z",
  "describe": "",
  "description": "Checks if `value` is `null` or `undefined`.",
  "file": "is-nil-x.min.js",
  "hash": "e4915937853cc4a715ce",
  "license": "MIT",
  "version": "2.0.0"
}
*/
(function(){"use strict";"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t||Function("return this")()})(),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null==e}}])}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}).call(this,n(0))},function(e,t,n){(function(t){
/*!
{
  "copywrite": "Copyright (c) 2015-present",
  "date": "2019-07-10T12:22:07.292Z",
  "describe": "",
  "description": "ES6-compliant shim for ToString.",
  "file": "to-string-x.min.js",
  "hash": "ee3283c5460ef8f2ce4d",
  "license": "MIT",
  "version": "2.0.3"
}
*/
(function(){"use strict";"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t||Function("return this")()})(),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,o.default)(e))throw new TypeError("Cannot convert a Symbol value to a string");return"".constructor(e)};var r,o=(r=n(1))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";var r=Object.prototype.toString;if(n(2)()){var o=Symbol.prototype.toString,u=/^Symbol\(.*\)$/;e.exports=function(e){if("symbol"==typeof e)return!0;if("[object Symbol]"!==r.call(e))return!1;try{return function(e){return"symbol"==typeof e.valueOf()&&u.test(o.call(e))}(e)}catch(e){return!1}}}else e.exports=function(e){return!1}},function(e,t,n){"use strict";(function(t){var r=t.Symbol,o=n(4);e.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&o()}}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}}])}).call(this,n(0))}])});
//# sourceMappingURL=require-coercible-to-string-x.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
{
  "copywrite": "Copyright (c) 2015-present",
  "date": "2019-07-10T22:27:27.494Z",
  "describe": "",
  "description": "List of ECMAScript white space characters.",
  "file": "white-space-x.min.js",
  "hash": "fe69807cce4b9e3da193",
  "license": "MIT",
  "version": "4.0.1"
}
*/
!function(e,s){ true?module.exports=s():undefined}(function(){"use strict";return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()}(),function(){return function(e){var s={};function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=s,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)r.d(t,n,function(s){return e[s]}.bind(null,n));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="",r(r.s=0)}([function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.string2016=s.default=s.list=void 0;var t=[{code:9,description:"Tab",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\t"},{code:10,description:"Line Feed",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\n"},{code:11,description:"Vertical Tab",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\v"},{code:12,description:"Form Feed",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\f"},{code:13,description:"Carriage Return",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\r"},{code:32,description:"Space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:160,description:"No-break space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:5760,description:"Ogham space mark",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:6158,description:"Mongolian vowel separator",es5:!0,es2015:!0,es2016:!0,es2017:!1,es2018:!1,string:"᠎"},{code:8192,description:"En quad",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8193,description:"Em quad",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8194,description:"En space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8195,description:"Em space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8196,description:"Three-per-em space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8197,description:"Four-per-em space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8198,description:"Six-per-em space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8199,description:"Figure space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8200,description:"Punctuation space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8201,description:"Thin space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8202,description:"Hair space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8232,description:"Line separator",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\u2028"},{code:8233,description:"Paragraph separator",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\u2029"},{code:8239,description:"Narrow no-break space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:8287,description:"Medium mathematical space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:" "},{code:12288,description:"Ideographic space",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"　"},{code:65279,description:"Byte Order Mark",es5:!0,es2015:!0,es2016:!0,es2017:!0,es2018:!0,string:"\ufeff"}];s.list=t;for(var n="",i="",o=t.length,c=0;c<o;c+=1)t[c].es2016&&(n+=t[c].string),t[c].es2018&&(i+=t[c].string);var d=i;s.default=d;var p=n;s.string2016=p}])});
//# sourceMappingURL=white-space-x.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=trim-left-x.js.map