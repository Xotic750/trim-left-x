/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/trim-left-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/trim-left-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/trim-left-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/trim-left-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/trim-left-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/trim-left-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/trim-left-x" title="npm version">
 * <img src="https://badge.fury.io/js/trim-left-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * This method removes whitespace from the left end of a string.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-left-x
 */

/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
   maxstatements:3, maxcomplexity:2 */

/* eslint strict: 1, max-statements: 1, func-style: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var ws = require('white-space-x').ws;
  var reLeft = new RegExp('^[' + ws + ']+');
  var pReplace = String.prototype.replace;

  /**
   * This method removes whitespace from the left end of a string
   *
   * @param {String} string The string to trim the left end whitespace from.
   * @return {undefined|string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x');
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  module.exports = function trimLeft(string) {
    return pReplace.call(string, reLeft, '');
  };
}());
