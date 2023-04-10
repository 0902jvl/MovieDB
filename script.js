"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 имволов. Если это происходит - возвращаем пользователя к вопросам опять.
for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько его оцените?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("OK");
    } else {
        i--;
        console.log("ereor");
    }
}
// При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", если т 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
