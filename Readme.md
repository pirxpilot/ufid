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

```js
const { uid } = require('ufid');


console.log(uid());  // 6 characters long
console.log(uid(10));  // provide size
console.log(uid(10, 'abcdef'));  // provide size and alphabet

```

or:

```js
const { generator } = require('ufid');


// size and alphabet are both optional
const uid = generator({ size: 10, alphabet: 'abc0123A' });

console.log(uid());  // 10 characters long
console.log(uid());  // another one

```


## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/ufid.svg
[npm-url]: https://npmjs.org/package/ufid

[travis-url]: https://travis-ci.org/pirxpilot/ufid
[travis-image]: https://img.shields.io/travis/pirxpilot/ufid.svg

[deps-image]: https://img.shields.io/david/pirxpilot/ufid.svg
[deps-url]: https://david-dm.org/pirxpilot/ufid

[deps-dev-image]: https://img.shields.io/david/dev/pirxpilot/ufid.svg
[deps-dev-url]: https://david-dm.org/pirxpilot/ufid?type=dev
