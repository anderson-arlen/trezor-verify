Trezor Verify
=============


[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]

[travis-image]: https://img.shields.io/travis/anderson-arlen/trezor-verify.svg?style=flat-square
[travis-url]: https://travis-ci.org/anderson-arlen/trezor-verify
[npm-image]: https://img.shields.io/npm/v/trezor-verify.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trezor-verify
[node-image]: https://img.shields.io/badge/node.js-%3E%3D6-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

Easy Trezor signature verification for [trezor/connect](https://github.com/trezor/connect)


#### Example
```javascript
const
	trezorVerify = require('trezor-verify'),
	hiddenChallenge = "cd8552569d6e4509266ef137584d1e62c7579b5b8ed69bbafa4b864c6521e7c2", // Use random value
	visualChallenge = "2015-03-23 17:39:22",
	pubKey = "023a472219ad3327b07c18273717bb3a40b39b743756bf287fbd5fa9d263237f45",
	signature = "20f2d1a42d08c3a362be49275c3ffeeaa415fc040971985548b9f910812237bb41770bf2c8d488428799fbb7e52c11f1a3404011375e4080e077e0e42ab7a5ba02",
	version = 2;

// returns true on success, false on failure
const verified = trezorVerify.verify(hiddenChallenge, visualChallenge, pubKey, signature, version);
```
