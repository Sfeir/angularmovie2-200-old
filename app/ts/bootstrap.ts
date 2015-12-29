import {bootstrap} from 'angular2/platform/browser';
import {MoviesComponent} from './components/movies/Movies';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(MoviesComponent,[HTTP_PROVIDERS]);
