import {View, Component, Inject} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router'
import {HomeComponent} from 'ts/components/home/Home'
import {MoviesComponent} from 'ts/components/movies/Movies'

@Component({
    selector: 'movies-app'
})
@View({
    templateUrl:'ts/app/app.html',
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', redirectTo: '/movies' },
    { path: '/home', as: 'home', component: HomeComponent },
    { path: '/movies', as: 'movies', component: MoviesComponent }
])
export class App {
    constructor(@Inject(Router)router) {
        //router.navigate('/home');
    }
}