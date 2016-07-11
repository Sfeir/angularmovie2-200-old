import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './components/home/Home';
import { MoviesComponent } from './components/movies/Movies';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
