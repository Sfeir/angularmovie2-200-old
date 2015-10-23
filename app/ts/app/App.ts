import {View, Component, Inject} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {HomeComponent} from '../components/home/Home'
import {MoviesComponent} from '../components/movies/Movies'
import {EditMovieComponent} from '../components/editMovie/EditMovie'

@Component({
    selector: 'movies-app'
})
@View({
    templateUrl:'ts/app/app.html',
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', redirectTo: '/movies' },
    { path: '/home', as: 'Home', component: HomeComponent },
    { path: '/movies', as: 'Movies', component: MoviesComponent },
    { path: '/movies/edit/:id', as: 'Editmovie', component: EditMovieComponent }
])
export class App {
    constructor(@Inject(Router)router) {

    }
}