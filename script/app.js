const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieURL = document.querySelector('.userInputURL');
const movieYear = document.querySelector('.userInputYear')
const btn = document.querySelector('.button');
const movieToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage){
    movieToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(160, 72, 242, 0.619), rgba(255, 255, 255, 0.663)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', ()=>{
    let movieTitleInput = movieTitle.value;
    let PosterURLInput = movieURL.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', PosterURLInput);
    localStorage.setItem('year', movieYearInput)
    movieToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(160, 72, 242, 0.619), rgba(255, 255, 255, 0.663)),
    url('${PosterURLInput}')`;
    movieTitle.value = '';
    movieURL.value = '';
    movieYear.value = '';


});



