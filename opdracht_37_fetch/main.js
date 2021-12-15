const makeHomework = (course, callback) => {
    setTimeout(() => {
        console.log(`okay, ok, i'm going to do my ${course} homework now`);
        callback();
    }, 1000)
}
const doneWithHomework = () => {
    console.log("Look, mom/dad, i'm done with my homework!");
}
makeHomework('math', doneWithHomework);