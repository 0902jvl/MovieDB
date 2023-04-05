const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovidDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько его оцените?", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько его оцените?", "");

personalMovidDB.movies[a] = b;
personalMovidDB.movies[c] = d;