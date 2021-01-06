let numberOffFilms;
function start() {
      numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

      while (numberOffFilms == '' || numberOffFilms == null || isNaN(numberOffFilms)) {
            numberOffFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
}
start();
const personalMovieDB = {
count: numberOffFilms,
movies: {},
actors: {},
generes: [],
privat: false
};



function rememberMyFilms() {
      for(let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренных фильмов?','');
            b = prompt('На сколько вы его оцените?','');
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
               personalMovieDB.movies[a] = b;
               console.log('Done');
         } else {
               console.log('Error');
               i-- ;
         }
      }
}
//rememberMyFilms();
function detectPersonalLevel(){
      if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
      }
      else if (personalMovieDB.count > 10 && personalMovieDB.count <30) {
            alert('Вы классный зритель');
      }
      else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
      }
      else {
            alert('Произошла ошибка');
      }
      
}
//detectPersonalLevel();

function showMyDB(hidden) {
      if (!hidden) {
            console.log(personalMovieDB);
      }
}
//showMyDB(personalMovieDB.privat);
function writeYourGeneres() {
for (let i = 1; i <= 3; i++) {
      //const genere = prompt(`Ваш любимый жанр под номером ${i}`);
      //personalMovieDB.generes[i - 1] = genere
      personalMovieDB.generes[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGeneres();