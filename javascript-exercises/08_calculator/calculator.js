const add = function(a, b) {
    return a + b;	
};

const subtract = function(a, b) {
    return a - b;	
};

const sum = function(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((total, a) => total += a, 0);
};

const multiply = function() {
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i];
    }
    return total;
};

const power = function(a, b) {
    return Math.pow(a, b);	
};

const factorial = function(num) {
    if (num === 0) {
        return 1;
    }

    const max = num;
    for (let i = 1; i < max; i++) {
        num *= i;
    }
    return num;
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
