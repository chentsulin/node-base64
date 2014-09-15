var base64 = require('../node-base64');
var should = require('should');

describe('base64', function(){

  describe('#encode()', function(){

    it('should return base64 encoded string', function() {

      base64.encode('Hello World').should.equal('SGVsbG8gV29ybGQ=');

    });

  });

  describe('#decode()', function() {

    it('should return base64 decoded string', function() {

      base64.decode('SGVsbG8gV29ybGQ=').should.equal('Hello World');

    });

  });

  describe('#compare()', function() {

    it('should return true when base64 string match', function() {

      base64.compare('Hello World', 'SGVsbG8gV29ybGQ=').should.equal(true);

    });

    it('should return false when base64 string unmatch', function() {

      base64.compare('hello world', 'SGVsbG8gV29ybGQ=').should.equal(false);

    });

  });

});