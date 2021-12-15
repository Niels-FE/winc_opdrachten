const testNum =
    new Promise((resolve, reject) => {
        number = 8
        if (number > 10) {
            resolve('greater then 10');
        } else {
            reject("to bad");
        }
    })
testNum
    .then(result => { console.log(result) })
    .catch(result => { console.log(result) });


/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        newWords = [];
        words.forEach(word => {
            if (typeof word != 'string') {
                reject("this is no string");
            } else {
                newWords.push(word.toUpperCase());
            }
        })
        resolve(newWords);
    })
};
const sortWords = (capsWords) => {
    return new Promise((resolve, reject) => {
        const newSort = capsWords.sort();
        if (newSort) {
            resolve(newSort);
        } else {
            reject('nee');
        }
    })
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado', "10"]
makeAllCaps(arrayOfWords)
    .then(result => { sortWords(result) })
    .then(result => { console.log(result) })
    .catch(error => { console.log(error) });
const complicatedArray = ['cucumber', 44, true];

// call both functions, chain them together and log the result to the console