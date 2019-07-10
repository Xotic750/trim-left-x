import noop from 'lodash/noop';
import trimLeft, {trimLeft2016} from 'src/trim-left-x';

/* eslint-disable-next-line compat/compat */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('trimLeft', function() {
  const allWhitespaceChars2016 =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  const allWhitespaceChars2018 =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function() {
    it('trimLeft is a function', function() {
      expect.assertions(1);
      expect(typeof trimLeft).toBe('function');
    });

    it('trimLeft2016 is a function', function() {
      expect.assertions(1);
      expect(typeof trimLeft2016).toBe('function');
    });

    it('trimLeft should not be trimLeft2016', function() {
      expect.assertions(1);
      expect(trimLeft).not.toBe(trimLeft2016);
    });
  });

  describe('trimLeft2016', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);

      expect(function() {
        trimLeft2016();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        /* eslint-disable-next-line no-void */
        trimLeft2016(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimLeft2016(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(4);
      let rest = 'a \t\n';
      expect(trimLeft2016(` \t\n${rest}`)).toBe(rest, 'strips whitespace off the left side');
      expect(trimLeft2016('a')).toBe('a', 'noop when no whitespace');
      rest = `a${allWhitespaceChars2016}`;
      expect(trimLeft2016(allWhitespaceChars2016 + rest)).toBe(rest, 'all expected whitespace chars are trimmed');
      const zeroWidth = '\u200b';
      expect(trimLeft(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trimLeft2016);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        trimLeft2016(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);
      /* eslint-disable-next-line compat/compat */
      const sym = Symbol('foo');
      expect(function() {
        trimLeft2016(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        trimLeft2016(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });

  describe('trimLeft', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        trimLeft();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        /* eslint-disable-next-line no-void */
        trimLeft(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimLeft(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(4);
      let rest = 'a \t\n';
      expect(trimLeft(` \t\n${rest}`)).toBe(rest, 'strips whitespace off the left side');
      expect(trimLeft('a')).toBe('a', 'noop when no whitespace');
      rest = `a${allWhitespaceChars2018}`;
      expect(trimLeft(allWhitespaceChars2018 + rest)).toBe(rest, 'all expected whitespace chars are trimmed');
      const zeroWidth = '\u200b';
      expect(trimLeft(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trimLeft);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        trimLeft(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);
      /* eslint-disable-next-line compat/compat */
      const sym = Symbol('foo');
      expect(function() {
        trimLeft(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        trimLeft(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
