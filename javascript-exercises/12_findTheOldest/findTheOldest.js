const findTheOldest = function(people) {
    let currentYear = 2023;
    let sorted = people.sort(function(a,b) {
        let yearOfOldestAgeA = a.yearOfDeath ? a.yearOfDeath : 2023;
        let yearOfOldestAgeB = b.yearOfDeath ? b.yearOfDeath : 2023;
         return (yearOfOldestAgeB - b.yearOfBirth) - (yearOfOldestAgeA - a.yearOfBirth);
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
