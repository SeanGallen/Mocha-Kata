var assert = require('assert');
var calculator = require('../src/math.js');

beforeEach('Rool Level Hooks', function() {
  console.log('before every test run this Root Level Hook');
});

describe('Calculator', function() {
  describe('Modulate the file', function() {
    it('calculator is an object', function() {
      assert.equal(typeof calculator, 'object');
    })
  })
});


describe('Calculator', function() {
  describe('adding', function() {
    it('should be able to add', function() {
      assert.equal(calculator.add(1,2), 3);
    });
  });

  describe('subtracting', function() {
    it('should be able to subtract', function() {
      assert.equal(calculator.sub(3,1), 2);
      assert.equal(calculator.sub(4,3), 1);
      assert.equal(calculator.sub(33,100), -67);
    });
  });
  describe('divide', function() {
    it('should be able to divide', function() {
      assert.equal(calculator.div(3,1), 3);
      assert.equal(calculator.div(6,3), 2);
      assert.equal(calculator.div(120, 100), 1.2);
    });
  });
  describe('times', function() {
    it('should be able to multiply', function() {
      assert.equal(calculator.mul(3,1), 3);
      assert.equal(calculator.mul(4,3), 12);
      assert.equal(calculator.mul(33,100), 3300);
    });
  });
  describe('log', function() {
    it('should be return the base 10 log of a number', function() {
      assert.equal(calculator.log(10, 100), 2);
      assert.equal(calculator.log(10, 1000), 3);
    });
  });
  describe('log', function() {
    it('should be return the base 2 log of a number', function() {
      assert.equal(calculator.log(2, 4), 2);
      assert.equal(calculator.log(2, 64), 6);
    });
  });
  describe('logtest', function() {
    it('should be able to logarithm of only 2 and 3', function() {
      assert.equal(calculator.log(33,100), 33 + "is not a valued number for log");
    });
  });
});


