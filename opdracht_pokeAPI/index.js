const theData = [];
const getData = async (randomNumber) => {
    try {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon`;
        let res = await fetch(`${apiUrl}/${randomNumber}/ `, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
        return res.json();
    } catch {
        console.log(error);
    }
}
const awaitingData = async (randomNumber) => {
    const results = await getData(randomNumber);
    theData.push(results);
    return results;
}
const pokeTitle = (name) => {
    const newTitle = document.createElement('h1')
    newTitle.innerText = name;
    return newTitle;
}
const pokeImage = (image) => {
    const newImage = document.createElement("img")
    newImage.src = image;
    return newImage;
}
const writePoke = (pokemon) => {
    const pokeHtml = poke;
    const newPokemon = document.createElement('div');
    newPokemon.id = 'newpokemon';
    newPokemon.appendChild(pokeTitle(pokemon.name));
    newPokemon.appendChild(pokeImage(pokemon.sprites.back_default))
    pokeHtml.innerHTML = '';
    pokeHtml.appendChild(newPokemon);
}
const createRandomNumber = () => {
    return Math.floor(Math.random() * 890);
}
const addAbilities = (pokemon) => {
    const abbilities = pokemon.abilities
    const abbilitieHolder = document.createElement('ul');
    abbilities.forEach(ability => {
        const li = document.createElement('li');
        li.innerText = ability.ability.name;
        abbilitieHolder.appendChild(li);
    })
    newpokemon.appendChild(abbilitieHolder);
}

const startPokeShow = async () => {
    const randomNumber = createRandomNumber();
    let result = await awaitingData(randomNumber);
    writePoke(result);
    if (pokeaddition.checked) addAbilities(result);
}
pokebutton.addEventListener('click', startPokeShow);