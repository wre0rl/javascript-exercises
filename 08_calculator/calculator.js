const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((previousValue, currentValue) => previousValue * currentValue);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
  let sum = 1;
	for (let i = x; i >= 1; i--) {
    sum = i * sum;
  }
  return sum;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
