/// <reference path="../lib/tsd.d.ts" />

import {bootstrap, bind, FORM_BINDINGS} from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {MoviesService} from 'ts/services/MoviesService';
import {App} from 'ts/app/App';


bootstrap(App,[ROUTER_BINDINGS,FORM_BINDINGS, MoviesService,bind(LocationStrategy).toClass(HashLocationStrategy)]);