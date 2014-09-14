node-base64
===========

base64 helper for nodejs

var base64 = require('./node-base64');

## encode(str)

    var hash = base64.encode('Hello World');

## decode(hash)

    var str = base64.decode('SGVsbG8gV29ybGQ=');

## compare(str, hash)

    var isMatch = base64.compare('Hello World', 'SGVsbG8gV29ybGQ=');
