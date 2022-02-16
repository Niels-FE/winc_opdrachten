const findNeedle = function (words, expression) {
    return words.findIndex(word => word == expression);


};

module.exports = findNeedle;