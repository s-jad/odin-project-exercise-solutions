const reverseString = function(inputString) {
    const inputArr = inputString.split('');
    let reversed = '';

    for (let i = 0; i < inputArr.length; i++) {
        reversed += inputArr[(inputArr.length - 1) - i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
