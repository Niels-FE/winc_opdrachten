// Utility functions
const isNotNull = str => str != null;

const hasRightLength = str => str.length < 9;

const hasUpperCaseCharacter = str => str != str.toLowerCase();

const hasLowerCaseCharacter = str => str != str.toUpperCase();

const hasDigit = str => {
    if (str.match(/\d/)) {
        return true;
    } else {
        return false;
    }
}

const minimumConditionsReached = conditions => {
    //conditions is an array of booleans
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password),
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
};