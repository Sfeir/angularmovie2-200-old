import {bootstrap, bind, FORM_PROVIDERS} from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MoviesService} from './services/MoviesService';
import {App} from './app/App';


bootstrap(App,[ROUTER_PROVIDERS,HTTP_PROVIDERS,FORM_PROVIDERS, MoviesService,bind(LocationStrategy).toClass(HashLocationStrategy)]);