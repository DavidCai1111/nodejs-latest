# nodejs-latest
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/DavidCai1993/nodejs-latest.svg?branch=master)](https://travis-ci.org/DavidCai1993/nodejs-latest)
[![Coverage Status](https://coveralls.io/repos/github/DavidCai1993/nodejs-latest/badge.svg?branch=master)](https://coveralls.io/github/DavidCai1993/nodejs-latest?branch=master)

Get the version of latest (LTS) node.js and versions of its modules.

## Install

```
npm install nodejs-latest
```

## Usage

```js
const { latest, latestLTS } = require('nodejs-latest')

latest().then(console.log)
// =>
// { version: '6.4.0',
//   npm: '3.10.3',
//   v8: '5.0.71.60',
//   uv: '1.9.1',
//   zlib: '1.2.8',
//   openssl: '1.0.2h',
//   modules: '48',
//   lts: false }

latestLTS().then(console.log)
// =>
// { version: '4.5.0',
//   npm: '2.15.9',
//   v8: '4.5.103.37',
//   uv: '1.9.1',
//   zlib: '1.2.8',
//   openssl: '1.0.2h',
//   modules: '46',
//   lts: 'Argon' }
```

## API

### latest

Get the version of latest node.js and versions of its modules, return a `Promise`.

### latestLTS

Get the version of latest LTS node.js and versions of its modules, return a `Promise`.
