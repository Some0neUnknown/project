
var numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");



var personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

var question1, question2;

for(var i = 0; i < 2; i++ ){
    var question1 = prompt("Один из последних просмотренных фильмов?", ""),
        question2 = prompt("как его оцените?", "");
         personalMovieDB.movies[question1] = question2;
         if(question1 != null && question1 != "" && question2 != null && question1 !="" && question1.length <50){
         personalMovieDB.movies[question1] = question2;
         }
         else {
             i--;
         }

}

if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert("Вы классический зритель");
}else if(personalMovieDB.count > 30){
    alert("Вы киноман");
}else{
    alert("Произошла ошибка");
}

console.log(personalMovieDB);
