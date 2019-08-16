import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace from 'white-space-x';
import methodize from 'simple-methodize-x';
var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft = new RegExpCtr("^[".concat(whiteSpace, "]+"));
var methodizedReplace = methodize(EMPTY_STRING.replace);
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trimStart = function trimStart(string) {
  return methodizedReplace(requireCoercibleToString(string), reLeft, EMPTY_STRING);
};

export default trimStart;

//# sourceMappingURL=trim-left-x.esm.js.map