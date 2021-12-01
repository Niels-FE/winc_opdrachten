const bigFive = document.getElementsByClassName('big-five-list-item');
const spottedAnimals = document.getElementById('spotted-animals-list');
const removeFirst = document.getElementById('remove-first-item-button');
const removeAll = document.getElementById('remove-all-button');
addAnimal = event => {
    const newElement = document.createElement('li');
    newElement.classList = 'spotted-animals-list-item';
    newElement.innerText = event.target.outerText;
    spottedAnimals.appendChild(newElement);
}
for (let animal of bigFive) {
    animal.addEventListener('click', (event) => addAnimal(event));
}
removeItem = () => {
    spottedAnimals.querySelector('li:first-of-type').remove();
}
removeAllEls = () => {
    while (spottedAnimals.firstChild != undefined) {
        spottedAnimals.firstChild.remove();
    }
}
removeFirst.addEventListener('click', () => removeItem());
removeAll.addEventListener('click', () => removeAllEls());