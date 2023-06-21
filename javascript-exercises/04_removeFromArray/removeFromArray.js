const removeFromArray = function(inputArr, idx1, idx2, idx3, idx4) {

    for (let i = 0; i < arguments.length; i++) {
        // If the argument is present (optional) and it is not an Array
        if (arguments[i] !== undefined && !Array.isArray(arguments[i])) {
            const index = inputArr.indexOf(arguments[i]);

            // If index is present in input array...
            if (index !== -1) {
                // ...splice it out
                inputArr.splice(index, 1);
            }
        }
    };

    return inputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
