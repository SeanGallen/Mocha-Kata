var Calculator = {};

Calculator.add = function(a, b) {
  return a + b;
};

Calculator.sub = function(a, b) {
  return a - b;
};

Calculator.div = function(a, b) {
  return a / b;
};

Calculator.mul = function(a, b) {
  return a * b;
};

Calculator.log = function(a, b) {
  if (a === 2)
  {
    return Math.log2(b);
  };
  if (a === 10)
  {
    return Math.log10(b);
  };
  return a + 'is not a valued number for log';

};

module.exports = Calculator;
