const sum = (...numbers) => {
    const reducer = (prev, current) => prev * current;
    console.log(
        numbers.reduce(reducer)
    );
}
sum(1, 2, 3, 4);