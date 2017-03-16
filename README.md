<a name="module_trim-left-x"></a>

## trim-left-x
<a href="https://travis-ci.org/Xotic750/trim-left-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/trim-left-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/trim-left-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/trim-left-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/trim-left-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/trim-left-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/trim-left-x" title="npm version">
<img src="https://badge.fury.io/js/trim-left-x.svg"
alt="npm version" height="18">
</a>

This method removes whitespace from the left end of a string.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.0.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_trim-left-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>undefined</code> &#124; <code>string</code> ⏏
This method removes whitespace from the left end of a string

**Kind**: Exported function  
**Returns**: <code>undefined</code> &#124; <code>string</code> - The left trimmed string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | The string to trim the left end whitespace from. |

**Example**  
```js
var trimLeft = require('trim-left-x');

trimLeft(' \t\na \t\n') === 'a \t\n'; // true
```
