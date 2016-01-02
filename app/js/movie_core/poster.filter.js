angular.module('movie.core').filter('poster', function () {
    return function(posterUrl) {
        if(!posterUrl){
            return "img/no-poster.jpg";
        } else {
            return posterUrl;
        }
    };
});