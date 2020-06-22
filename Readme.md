[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![Dev Dependency Status][deps-dev-image]][deps-dev-url]

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

[npm-image]: https://img.shields.io/npm/v/ufid.svg
[npm-url]: https://npmjs.org/package/ufid

[travis-url]: https://travis-ci.com/pirxpilot/ufid
[travis-image]: https://img.shields.io/travis/com/pirxpilot/ufid.svg

[deps-image]: https://img.shields.io/david/pirxpilot/ufid.svg
[deps-url]: https://david-dm.org/pirxpilot/ufid

[deps-dev-image]: https://img.shields.io/david/dev/pirxpilot/ufid.svg
[deps-dev-url]: https://david-dm.org/pirxpilot/ufid?type=dev
