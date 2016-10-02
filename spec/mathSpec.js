var assert = require('assert');
var math = require('../src/math.js');

describe('Calculator', function() {
  describe('adding', function() {
    it('should be able to add', function() {
      assert.equal(math.add(1,2), 3);
    });
  });

  describe('subtracting', function() {
    it('should be able to subtract', function() {
      assert.equal(math.sub(3,1), 2);
      assert.equal(math.sub(4,3), 1);
      assert.equal(math.sub(33,100), -67);
    });
  });
  describe('divide', function() {
    it('should be able to divide', function() {
      assert.equal(math.div(3,1), 3);
      assert.equal(math.div(6,3), 2);
      assert.equal(math.div(120, 100), 1.2);
    });
  });
  describe('times', function() {
    it('should be able to multiply', function() {
      assert.equal(math.mul(3,1), 3);
      assert.equal(math.mul(4,3), 12);
      assert.equal(math.mul(33,100), 3300);
    });
  });
  describe('log', function() {
    it('should be return the base 10 log of a number', function() {
      assert.equal(math.log(10, 100), 2);
      assert.equal(math.log(10, 1000), 3);
    });
  });
  describe('log', function() {
    it('should be return the base 2 log of a number', function() {
      assert.equal(math.log(2, 4), 2);
      assert.equal(math.log(2, 64), 6);
    });
  });
  describe('logtest', function() {
    it('should be able to logarithm of only 2 and 3', function() {
      assert.equal(math.log(33,100), "only can use 2 or 10");
    });
  });
});


