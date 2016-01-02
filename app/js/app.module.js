angular.module('movieApp', [
    'movie.core',
    'movie.list',
    'movie.edit',
    'ngRoute'
]);

angular.module('movieApp').config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: 'js/movie_list/movie_list.html',
            controller : 'moviesController',
            controllerAs: 'vm'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'js/movie_edit/movie_edit.html',
            controller: 'editMovieController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/movies'
        });
});