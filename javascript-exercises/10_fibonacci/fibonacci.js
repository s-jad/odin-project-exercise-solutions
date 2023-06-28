const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }

    let fib = 1;
    let prevFib = 0;
    let temp = 0;
    for (let i = 0; i < parseInt(num) -1; i++) {
        temp = prevFib;
        prevFib = fib;
        fib = fib + temp;
    }

    return fib;
};



// Do not edit below this line
module.exports = fibonacci;
