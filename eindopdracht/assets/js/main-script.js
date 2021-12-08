const movieHolder = document.querySelector("section[data-id='movies']");
const movieSection = movieHolder.querySelector("section[data-id='movies'] ul");
const filterOptions = document.querySelectorAll("input[name='moviefilter']");
const searchBar = document.querySelector("li[data-id='searchbar']");

let removeAllFilters = false;
let searchOpenOrClose = false;

// function to append movies //
const addMoviesToDom = selection => {
    movieSection.innerHTML = '';
    const newSelection = selection.map(movie => `<li class="transform hover:scale-110 transition-transform"><a target="blank" class="" href="https://www.imdb.com/title/${movie.imdbID}/" title="${movie.Title}"><img src="${movie.Poster}"></li></a>`);

    newSelection.forEach(newSelected => {
        movieSection.innerHTML = movieSection.innerHTML + newSelected
    })
}
// add all movies by default //
addMoviesToDom(movies);

// functions to use the filter options and filter //
const filterMovies = event => {
    movieHolder.classList.toggle('opacity-0');
    const value = event.target.value;
    let filteredMovies;
    switch (value) {
        case "new":
            filteredMovies = movies.filter(movie => parseInt(movie.Year) > 2013);
            addMoviesToDom(filteredMovies);
            break;
        default:
            filteredMovies = movies.filter(movie => movie.Title.includes(event.target.value));
            addMoviesToDom(filteredMovies);
    }
    if (!removeAllFilters) {
        removeAllFilters = true;
        removeFilter.classList.remove('opacity-0');
    }
    movieHolder.classList.toggle('opacity-0');
}
for (filter of filterOptions) {
    filter.addEventListener('change', event => filterMovies(event));
}

// function to remove all filtesr //
removeFilter.addEventListener('click', () => {
    removeAllFilters = false;
    removeFilter.classList.add('opacity-0');
    addMoviesToDom(movies);
    document.querySelector("input:checked").checked = false;
})

// function to open-close search //
search.addEventListener('click', () => {
    if (searchOpenOrClose) {
        searchBar.style.width = '0%';
        searchOpenOrClose = false;
    } else {
        searchBar.style.width = '100%';
        searchOpenOrClose = true;
    }
})
// searchFunction //
searchfield.addEventListener('search', (event) => {
    let checkedInput = document.querySelector("input:checked");
    if (checkedInput) {
        document.querySelector("input:checked").checked = false;
    }
    const searchRequest = movies.filter(movie => movie.Title.toLowerCase().includes(event.target.value.toLowerCase()));
    if (searchRequest.length != 0) {
        addMoviesToDom(searchRequest);
    } else {
        movieSection.innerHTML = `<li class="grid-col-start-2 col-span-2">Helaas, jouw zoekopdracht ${event.target.value} heeft geen resultaat</li>`;
    }
})