const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
};

const multiply = function(numbers) {
  if(numbers.length === 0) return 0;
  let totalProduct = 1;
  for (let i = 0; i < numbers.length; i++) {
    totalProduct *= numbers[i];
  }
  return totalProduct;
};

const power = function(base, e) {
  let result = 1;
  for (let i = 0; i < e; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
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
