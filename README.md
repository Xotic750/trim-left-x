<a href="https://travis-ci.org/Xotic750/trim-left-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/trim-left-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/trim-left-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/trim-left-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/trim-left-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/trim-left-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/trim-left-x"
  title="npm version">
<img src="https://badge.fury.io/js/trim-left-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/trim-left-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/trim-left-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_trim-left-x"></a>

## trim-left-x (a.k.a trimStart in ES2019)

This method removes whitespace from the start of a string.

<a name="exp_module_math-trim-left-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>number</code> ⏏

<a name="module_trim-left-x"></a>

### `trim-left-x` ⇒ <code>string</code>

This method removes whitespace from the left end of a string. (ES2019)

**Kind**: static property of [<code>trim-left-x</code>](#module_trim-left-x)  
**Returns**: <code>string</code> - The left trimmed string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description                                      |
| ------ | ------------------- | ------------------------------------------------ |
| string | <code>string</code> | The string to trim the left end whitespace from. |

**Example**

```js
import trimStart from 'trim-left-x';

console.log(trimStart(' \t\na \t\n') === 'a \t\n'); // true
```
