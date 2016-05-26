import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from '../components/home/Home';
import {EditMovieComponent} from '../components/editMovie/EditMovie';
import {MoviesComponent} from '../components/movies/Movies';

@Component({
    selector: 'movies-app',
    templateUrl:'ts/app/app.html',
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent },
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/movies', name: 'Movies', component: MoviesComponent },
  { path: '/movies/edit/:id', name:'EditMovie', component: EditMovieComponent }
])
export class App {}
