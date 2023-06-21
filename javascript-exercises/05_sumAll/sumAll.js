const sumAll = function(start, end) {
    // Check for all error conditions
    if (!checkNumber(start)
        || !checkNumber(end)
        || start < 0
        || end < 0) {
        return 'ERROR';
    };

    let total = 0;

    if (start > end) {
        for (let i = end; i <= start; i++) {
            total += i;
        };
        return total;
    }

    for (let i = start; i <= end; i++) {
        total += i;
    };

    return total;
};


function checkNumber(parameter) {
    return typeof parameter === 'number';
}
// Do not edit below this line
module.exports = sumAll;
