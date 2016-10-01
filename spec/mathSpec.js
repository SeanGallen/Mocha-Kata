var assert = require('assert');
var math = require('../src/math.js');

describe('Calculator', function() {
  describe('adding', function() {
    it('should be able to add', function() {
      assert.equal(3, add(1,2));
    });
  })
});

