exports.add = function(a, b) {
  return a + b;
};

exports.sub = function(a, b) {
  return a - b;
};

exports.div = function(a, b) {
  return a / b;
};

exports.mul = function(a, b) {
  return a * b;
};

exports.log = function(a, b) {
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
