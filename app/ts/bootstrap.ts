import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {MoviesComponent} from './components/movies/Movies';

bootstrap(MoviesComponent,[HTTP_PROVIDERS]);

