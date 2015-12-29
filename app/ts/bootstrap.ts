import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app/App';

bootstrap(App,[HTTP_PROVIDERS,ROUTER_PROVIDERS,provide(LocationStrategy,{useClass:HashLocationStrategy})]);