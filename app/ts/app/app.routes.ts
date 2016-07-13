import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../components/home/Home';
import { MoviesListComponent } from '../components/movies/MoviesList';
import { EditMovieComponent } from '../components/editMovie/EditMovie';

const routes: RouterConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: EditMovieComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
