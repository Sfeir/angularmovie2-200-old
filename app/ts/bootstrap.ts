import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MoviesComponent} from './components/movies/Movies';


bootstrap(MoviesComponent,[HTTP_PROVIDERS]);