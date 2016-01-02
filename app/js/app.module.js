"use strict";

angular.module('movieApp', [
    'movie.core',
    'movie.list',
    'movie.edit',
    '$strap.directives'
]);

angular.module('movieApp').config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: 'js/movie_list/movie_list.html',
            controller : 'moviesController'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'js/movie_edit/movie_edit.html',
            controller: 'editMovieController'
        })
        .otherwise({
            redirectTo: '/movies'
        });
});