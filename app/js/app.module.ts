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
            template: '<ma-edit-movie></ma-edit-movie>'
        })
        .otherwise({
            redirectTo: '/movies'
        });
}


upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.upgradeNg1Provider('$routeParams');
upgradeAdapter.upgradeNg1Provider('$location');
upgradeAdapter.bootstrap(document.documentElement, ['movieApp']);