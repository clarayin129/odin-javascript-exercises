const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const sum = arr.reduce((total, curr) => total += curr, 0);
  return sum;
};

const multiply = function(arr) {
  const mult = arr.reduce((total, curr) => total *= curr, 1);
  return mult;
};

const power = function(a, b) {
  let res = a;
	for (let i = 0; i < b - 1; i++) {
    res *= a;
  }
  return res;
};

const factorial = function(a) {
  if (a == 0) return 1;
	for (let i = a - 1; i > 0; i--) {
    a *= i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
