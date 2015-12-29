import {provide} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MoviesService} from './services/MoviesService';
import {App} from './app/App';


bootstrap(App,[ROUTER_PROVIDERS,HTTP_PROVIDERS,FORM_PROVIDERS,provide(LocationStrategy,{useClass:HashLocationStrategy})]);