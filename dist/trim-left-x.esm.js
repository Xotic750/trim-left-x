import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace, { string2016 } from 'white-space-x';
var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(whiteSpace, "]+"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

export function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

export default function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, EMPTY_STRING);
}

//# sourceMappingURL=trim-left-x.esm.js.map