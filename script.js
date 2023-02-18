const api_link = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ee07d09975fa3cf6ecf20221cff7c30a&page=1';
const img_path = 'https://image.tmdb.org/t/p/w1280';
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=ee07d09975fa3cf6ecf20221cff7c30a&query=";

const section = document.querySelector("#section");
const grid = document.querySelector(".grid");
const form = document.querySelector("#form");
const queryEl = document.querySelector("#query-el");

returnMovies(api_link);
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const card = document.createElement("div");
            card.setAttribute("class", "card");

            const thumbnail = document.createElement("img");
            thumbnail.setAttribute("class", "thumbnail card-child");

            const title = document.createElement("h3");
            title.setAttribute("class", "title card-child");

            card.appendChild(thumbnail);
            card.appendChild(title);
            grid.appendChild(card);

            title.textContent = element.title;
            thumbnail.src = img_path + element.poster_path;

        });
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    grid.innerHTML = '';

    const searchItem = queryEl.value;
    if (searchItem) {
        returnMovies(searchApi + searchItem);
        queryEl.value = '';
    }
})