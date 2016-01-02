import MovieListController from './movie_list.controller'

export default angular.module('movie.list', ['movie.core'])
    .controller('moviesController',MovieListController);