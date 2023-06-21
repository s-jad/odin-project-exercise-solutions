const repeatString = function(targetString, reps) {
    if (reps === 0) {
        return '';
    };

    if (reps < 0) {
        return 'ERROR';
    };

    if (reps === 1) {
        return targetString;
    };

    let returnString = '';

    for (let i = 0; i < reps; i++) {
        returnString += targetString;
    };

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
