const leapYears = function(year) {
    // Leap years occur when the year is divisible by 4
    // But only on century years that are divisible by 400
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (year % 4 === 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
