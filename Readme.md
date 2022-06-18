[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# ufid

URL friendly reasonably unique ids.

## Install

```sh
$ npm install --save ufid
```

## Usage

Generate uids with only numbers and letters (both uppercase and lowercase):

```js
const { generator } = require('ufid');
const uid = generator({ size: 10 });

uid();  // 10 characters long
uid();  // another one - also 10 characters long
uid(8); // another one 8 characters long
```


With custom alfabet:

```js
const { generator } = require('ufid');
const uid = generator({ size: 12, alphabet: 'abc0123A' });

uid();  // 12 characters long, only a-c, 0-3, and A

```


With custom byte stream:

```js
const { generator } = require('ufid');
const byteStream = {
  next: () => Math.random() * 62
};
const uid = generator({ size: 6, byteStream });

uid();  // 6 characters long using non-secure random

```


## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/ufid
[npm-url]: https://npmjs.org/package/ufid

[build-url]: https://github.com/pirxpilot/ufid/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/pirxpilot/ufid/check

[deps-image]: https://img.shields.io/librariesio/release/npm/ufid
[deps-url]: https://libraries.io/npm/ufid

