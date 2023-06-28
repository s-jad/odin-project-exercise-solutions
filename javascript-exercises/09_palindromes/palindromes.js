const palindromes = function (potentialPalindrome) {
    let palindromeBool = false;
    const cleaned = Array.from(removeWhiteSpace(removePunctuation(potentialPalindrome)));
    const center = Math.floor(cleaned.length / 2) + 1;

    for (let i = 0, j = cleaned.length - 1; i <= center, j >= center; i++, j--) {
        if (cleaned[i] === cleaned[j]) {
            palindromeBool = true;
        } else {
            palindromeBool = false;
        }
    }
    return palindromeBool;
};

function removePunctuation(str) {
    return str.replace(/[^\w\s]|_/g, "");
}

function removeWhiteSpace(str) {
    return str.replace(/\s/g, "");
}

// Do not edit below this line
module.exports = palindromes;
