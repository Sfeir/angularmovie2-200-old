import {bootstrap, bind} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app/App';


bootstrap(App,[HTTP_PROVIDERS,ROUTER_PROVIDERS,bind(LocationStrategy).toClass(HashLocationStrategy)]);