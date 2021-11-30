const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]
findSpiderMan = superheroes => {
    return superheroes.find(element => element.name == "Spiderman");
}
console.log(findSpiderMan(superheroes))

const doubleArrayValues = values => {
    return values.map(value => value * 2);
}

console.log(doubleArrayValues([1, 2, 3]))
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = value => {
    if (value.some(value => value > 10)) {
        return true;
    } else {
        return false;
    }
}
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

isItalyInTheGreat7 = countries => {
    if (countries.includes('Italy')) return true;
}
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// result should be true

const tenfold = array => {
    let newArray = [];
    array.forEach(array => {
        newArray.push(array * 10);
    })
    return newArray;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]


const isBelow100 = numbers => {
    if (numbers.every(number => number < 100)) {
        return true;
    } else {
        return false;
    }
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

const bigSum = numbers => {
    return numbers.reduce((a, b) => a + b, 0);

}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118