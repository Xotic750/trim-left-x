'use strict';

var lib;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var trimLeft = lib.trimLeft;
var trimLeft2016 = lib.trimLeft2016;
var trimLeft2018 = lib.trimLeft2018;

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('trimLeft', function () {
  var allWhitespaceChars2016 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var allWhitespaceChars2018 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function () {
    it('trimLeft is a function', function () {
      expect(typeof trimLeft).toBe('function');
    });

    it('trimLeft is a function', function () {
      expect(typeof trimLeft2016).toBe('function');
    });

    it('trimLeft is a function', function () {
      expect(typeof trimLeft2018).toBe('function');
    });

    it('trimLeft should be trimLeft2018', function () {
      expect(trimLeft).toBe(trimLeft2018);
    });

    it('trimLeft should not be trimLeft2016', function () {
      expect(trimLeft).not.toBe(trimLeft2016);
    });
  });

  describe('trimLeft2016', function () {
    it('should throw when target is null or undefined', function () {
      expect(function () {
        trimLeft2016();
      }).toThrow();

      expect(function () {
        trimLeft2016(void 0);
      }).toThrow();

      expect(function () {
        trimLeft2016(null);
      }).toThrow();
    });

    it('Basic tests', function () {
      var rest = 'a \t\n';
      expect(trimLeft2016(' \t\n' + rest)).toBe(rest, 'strips whitespace off the left side');
      expect(trimLeft2016('a')).toBe('a', 'noop when no whitespace');
      rest = 'a' + allWhitespaceChars2016;
      expect(trimLeft2016(allWhitespaceChars2016 + rest)).toBe(rest, 'all expected whitespace chars are trimmed');
      var zeroWidth = '\u200b';
      expect(trimLeft(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function () {
      var values = [
        true,
        'abc',
        1,
        function () {},
        [],
        /r/
      ];

      var expected = values.map(String);
      var actual = values.map(trimLeft2016);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        trimLeft2016(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        trimLeft2016(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        trimLeft2016(Object(symObj));
      }).toThrow();
    });
  });

  describe('trimLeft2018', function () {
    it('should throw when target is null or undefined', function () {
      expect(function () {
        trimLeft2018();
      }).toThrow();

      expect(function () {
        trimLeft2018(void 0);
      }).toThrow();

      expect(function () {
        trimLeft2018(null);
      }).toThrow();
    });

    it('Basic tests', function () {
      var rest = 'a \t\n';
      expect(trimLeft2018(' \t\n' + rest)).toBe(rest, 'strips whitespace off the left side');
      expect(trimLeft2018('a')).toBe('a', 'noop when no whitespace');
      rest = 'a' + allWhitespaceChars2018;
      expect(trimLeft2018(allWhitespaceChars2018 + rest)).toBe(rest, 'all expected whitespace chars are trimmed');
      var zeroWidth = '\u200b';
      expect(trimLeft(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function () {
      var values = [
        true,
        'abc',
        1,
        function () {},
        [],
        /r/
      ];

      var expected = values.map(String);
      var actual = values.map(trimLeft2018);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        trimLeft2018(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        trimLeft2018(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        trimLeft2018(Object(symObj));
      }).toThrow();
    });
  });
});
