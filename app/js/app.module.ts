/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import MovieList from './movie_list/MovieList';
import EditMovie from './movie_edit/EditMovie';
import Movies from './movie_core/Movies';
import {HTTP_PROVIDERS} from 'angular2/http';
import {
    RouteConfig,
    LocationStrategy,
    HashLocationStrategy,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';



@RouteConfig([
    {path:'/movies', as: 'Movies', component: MovieList},
    {path:'/movies/edit/:id', as: 'EditMovie', component: EditMovie},
    {path:'/', redirectTo: ['Movies']}
])
@Component({
    selector: 'ma-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
class AppComponent {
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    Movies
]);