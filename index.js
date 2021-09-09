'use strict';
let numberOfFilms;

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (
      numberOfFilms == '' ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('ok');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count < 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres() {
    for (let i = 0; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === '' || null) {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB() {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};
