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
 * Requires ES3 or above.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-left-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $toString = require('to-string-x');
  var ws = require('white-space-x').ws;
  var reLeft = new RegExp('^[' + ws + ']+');

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
    return $toString(string).replace(reLeft, '');
  };
}());
