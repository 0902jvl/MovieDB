"use strict";

// 4.1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // Прверка для того чтобы пользователь не мог ввести пустую строку отменить вопрос или ввести не число
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },


    // Сделать так, чтобы пользователь не мог ввести пробельные значения метод TRIM
    // Цикл вызовать по требованию т.е создать функцию remrmberMyFilms котрая будет его оборачивать
    // Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести название фильма длинее, чем 50 имволов. Если это происходит - возвращаем пользователя к вопросам опять.
    remrmberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "").trim();
            const b = prompt("На сколько его оцените?", "");
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("OK");
            } else {
                i--;
                console.log("ereor");
            }
        }
    },


    // Цикл вызовать по требованию т.е создать функцию detectPersanalLevel котрая будет его оборачивать
    // При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов", если т 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
    detectPersanalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },


    //Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },


    // 4.2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },


    // 4.3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщения в таком виде: "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
    // 3.3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let geners = prompt(`Ваш любимый жанр под номером ${i}`);
            if (geners === "" || geners == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = geners;
            }

            // Альтернативный вариант из урока

            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};
