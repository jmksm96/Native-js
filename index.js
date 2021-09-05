'use strict';
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

const rememberMyFilms = () => {
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
};
rememberMyFilms();

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    alert('просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count < 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
};

detectPersonalLevel();

const showMyDB = () => {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
};
showMyDB();

const writeYourGenres = () => {
  for (let i = 0; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
};
writeYourGenres();
