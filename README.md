# friendly-time
[![npm](https://img.shields.io/npm/v/friendly-time.svg)](https://www.npmjs.com/package/friendly-time)
[![Travis](https://travis-ci.com/bram-codes/friendly-time.svg?branch=master)](https://travis-ci.com/bram-codes/friendly-time)
[![Codecov](https://img.shields.io/codecov/c/github/bram-codes/friendly-time.svg)](https://codecov.io/gh/bram-codes/friendly-time)

Prints human friendly timestamps (eg. just now, 5 minutes ago, 3 days from now).

## Usage

```javascript
var friendlyTime = require('friendly-time');

var now = new Date();
var minutes = new Date(now - (1000 * 60 * 5));
var days = new Date(now + (1000 * 60 * 60 * 24 * 3));

friendlyTime(now); // just now
friendlyTime(minutes); // 5 minutes ago
friendlyTime(days); // 3 days from now
```
