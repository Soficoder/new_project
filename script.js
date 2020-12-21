let numberOffFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
count: numberOffFilms,
movies: {},
actors: {},
generes: [],
privat: false
};
const a = prompt('Один из просмотренных фильмов?','');
      b = prompt('На сколько вы его оцените?','');
      c = prompt('Один из просмотренных фильмов?','');
      d = prompt('На сколько вы его оцените?','');

      personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

