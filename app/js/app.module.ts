/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import core from './movie_core/movie_core.module';
import movieList from './movie_list/movie_list.module';
import movieEdit from './movie_edit/movie_edit.module';
import upgradeAdapter from './movie_core/upgrade_adapter';
import {HTTP_PROVIDERS} from 'angular2/http';

angular.module('movieApp', [
    core.name,
    movieList.name,
    movieEdit.name,
    'ngRoute'
]).config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/movies', {
            template: '<ma-movie-list></ma-movie-list>'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'js/movie_edit/movie_edit.html',
            controller: 'editMovieController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/movies'
        });
}

//angular.bootstrap(document.documentElement, ['movieApp']);
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.bootstrap(document.documentElement, ['movieApp']);