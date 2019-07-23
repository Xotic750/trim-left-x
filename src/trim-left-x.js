import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace from 'white-space-x';

const EMPTY_STRING = '';
const RegExpCtr = /none/.constructor;
const reLeft = new RegExpCtr(`^[${whiteSpace}]+`);
const {replace} = EMPTY_STRING;
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */
const trimStart = function trimStart(string) {
  return replace.call(requireCoercibleToString(string), reLeft, EMPTY_STRING);
};

export default trimStart;
